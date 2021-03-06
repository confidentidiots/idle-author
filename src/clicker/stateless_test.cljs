(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :as s]
            [data.db :refer [DB]]
            [testdata.db :refer [TestDB]]))

(def test-db (TestDB.))
(def real-db (DB.))

; check this against the real DB:
(deftest test-tap-real-db
  (let [state {}
        state2 (s/tap state real-db :slogan :n 2)
        state3 (s/tap state2 real-db :copy)]
    (is (= (get-in state2 [:things :slogan]) 2))
    (is (= (get-in state2 [:values :money]) 54.17831369176747))
    (is (= (get-in state3 [:things :slogan]) 2))
    (is (= (get-in state3 [:things :copy]) 1))
    (is (= (get-in state3 [:values :money]) 386.37112318050373))))

; (deftest test-next-gain-real-db
;   (is (= (s/next-gain real-db {} :copy) 33.219280948873624))
;   (is (= (s/next-gain real-db { :things {:slogan 1} } :copy) 20.959032742893847))
;   (is (= (s/next-gain real-db { :things {:slogan 2} } :copy) 16.609640474436812)))

; test DB
(deftest test-gains-simple
  (is (= (s/apply-gains {} test-db :simple) {:values {:money 10}}))
  (is (= (s/apply-gains {} test-db :simple :quantity 2) {:values {:money 20}}))
  (is (= (s/apply-gains {:values {:money 1}} test-db :simple) {:values {:money 11}}))
  (is (= (s/apply-gains {:values {:money 1}} test-db :simple :quantity 2) {:values {:money 21}})))
;
(deftest test-gains-complex
  (is (= (s/apply-gains {} test-db :complex) {:values {:money 20}}))
  (is (= (s/apply-gains {} test-db :complex :quantity 2) {:values {:money 60}}))
  (is (= (s/apply-gains {:values {:money 1}} test-db :complex) {:values {:money 21}}))
  (is (= (s/apply-gains {:values {:money 1}} test-db :complex :quantity 2) {:values {:money 61}})))

;
(deftest test-loss-simple
  (is (= (s/apply-losses {} test-db :simple) {:values {:effort -10}}))
  (is (= (s/apply-losses {} test-db :simple :quantity 2) {:values {:effort -30}}))
  (is (= (s/apply-losses {:values {:effort 1}} test-db :simple) {:values {:effort -9}}))
  (is (= (s/apply-losses {:values {:effort 1}} test-db :simple :quantity 2) {:values {:effort -29}})))
;
(deftest test-loss-complex
  (is (= (s/apply-losses {} test-db :complex) {:values {:effort -20}}))
  (is (= (s/apply-losses {} test-db :complex :quantity 2) {:values {:effort -40}}))
  (is (= (s/apply-losses {:values {:effort 1}} test-db :complex) {:values {:effort -19}}))
  (is (= (s/apply-losses {:values {:effort 1}} test-db :complex :quantity 2) {:values {:effort -39}})))

(deftest test-tap
  (let [state {}
        state2 (s/tap state test-db :simple :n 2)
        state3 (s/tap state2 test-db :complex)]

    (is (= (get-in state2 [:things :simple]) 2))
    (is (= (get-in state2 [:values :money]) 20))

    (is (= (get-in state3 [:things :simple]) 2))
    (is (= (get-in state3 [:things :complex]) 1))
    (is (= (get-in state3 [:values :money]) 40))))

; :simple is 10 :effort
(deftest test-can-tap?
  (is (= false (s/can-tap? {} test-db :simple)))
  (is (= false (s/can-tap? {:values {:effort 9}} test-db :simple)))
  (is (= true (s/can-tap? {:values {:effort 10}} test-db :simple)))
  (is (= true (s/can-tap? {:values {:effort 999}} test-db :simple))))

(deftest test-many-can-tap?
  (is (= true (s/can-tap? {:values {:effort 10}} test-db :simple :n 1)))
  (is (= false (s/can-tap? {:values {:effort 10}} test-db :simple :n 2))))
;
(deftest test-next-gain
  (let [state0 {}
        state1 (s/tap state0 test-db :simple)
        next1 (s/next-gain state0 test-db :simple)
        state2 (s/tap state1 test-db :simple)
        next2 (s/next-gain state1 test-db :simple)]
    (is (= (get-in state1 [:values :money]) (:money next1)))
    (is (= (get-in state2 [:values :money]) (+ (:money next1) (:money next2))))))
;
(deftest test-next-gain-or-loss
  (let [state0 {}
        state1 (s/tap state0 test-db :multi)
        next-gain1 (s/next-gain state0 test-db :multi)
        next-loss1 (s/next-loss state0 test-db :multi)
        state2 (s/tap state1 test-db :multi)
        next-gain2 (s/next-gain state1 test-db :multi)
        next-loss2 (s/next-loss state1 test-db :multi)]
    (is (= (:values state1) {:money 30 :gold 1 :effort -30 :other -1}))
    (is (= (get-in state1 [:values :money]) (:money next-gain1)))
    (is (= (get-in state1 [:values :gold]) (:gold next-gain1)))
    (is (= (get-in state1 [:values :effort]) (:effort next-loss1)))
    (is (= (get-in state1 [:values :other]) (:other next-loss1)))

    (is (= (:values state2) {:money 90 :gold 2 :effort -60 :other -2}))
    (is (= (get-in state2 [:values :money]) (+ (:money next-gain1) (:money next-gain2))))
    (is (= (get-in state2 [:values :gold]) (+ (:gold next-gain1) (:gold next-gain2))))
    (is (= (get-in state2 [:values :effort]) (+ (:effort next-loss1) (:effort next-loss2))))
    (is (= (get-in state2 [:values :other]) (+ (:other next-loss1) (:other next-loss2))))))

;
(deftest test-next-gain-complex
  (let [state0 {}
        state1 (s/tap state0 test-db :complex)
        next1 (s/next-gain state0 test-db :complex)
        state2 (s/tap state1 test-db :complex)
        next2 (s/next-gain state1 test-db :complex)]
    (is (= (get-in state1 [:values :money]) (:money next1)))
    (is (= (get-in state2 [:values :money]) (+ (:money next1) (:money next2))))))
;
(deftest test-next-loss
  (let [state0 {}
        state1 (s/tap state0 test-db :simple)
        next1 (s/next-loss state0 test-db :simple)
        state2 (s/tap state1 test-db :simple)
        next2 (s/next-loss state1 test-db :simple)]
    (is (= (get-in state1 [:values :effort]) (:effort next1)))
    (is (= (get-in state2 [:values :effort]) (+ (:effort next1) (:effort next2))))))
;
(deftest test-next-loss-complex
  (let [state0 {}
        state1 (s/tap state0 test-db :complex)
        next1 (s/next-loss state0 test-db :complex)
        state2 (s/tap state1 test-db :complex)
        next2 (s/next-loss state1 test-db :complex)]
    (is (= (get-in state1 [:values :effort]) (:effort next1)))
    (is (= (get-in state2 [:values :effort]) (+ (:effort next1) (:effort next2))))))
;
(deftest test-satisfies-dependencies?
  (let [state0 {}
        state1 (s/tap state0 test-db :simple)
        state2 (s/tap state1 test-db :complex)]
    (is (= (s/satisfies-dependencies? state0 test-db :complex) false))
    (is (= (s/satisfies-dependencies? state0 test-db :multi) false))
    (is (= (s/satisfies-dependencies? state1 test-db :complex) true))
    (is (= (s/satisfies-dependencies? state1 test-db :multi) false))
    (is (= (s/satisfies-dependencies? state2 test-db :multi) true))))

; DAO stuff ------------------------------------------------------
(deftest test-db-item-name
  (is (= "Simple" (s/db-item-name test-db :simple))))
;
(deftest test-db-items-by-group
  (is (= [:simple :multi] (s/db-items-by-group test-db :simple-group))))

(deftest test-set-latest-new-thing
  (let [state1 (s/tap {} test-db :simple)
        state2 (s/tap state1 test-db :complex)
        state3 (s/tap state2 test-db :simple)]
    (is (= (get-in state1 [:latest-new-thing]) :simple))
    (is (= (get-in state2 [:latest-new-thing]) :complex))
    (is (= (get-in state3 [:latest-new-thing]) :complex))))
;
(deftest test-get-latest-ticker
  (let [state1 (s/tap {} test-db :simple)
        state2 (s/tap state1 test-db :complex)
        state3 (s/tap state2 test-db :simple)]
    (is (= (s/get-latest-ticker state1 test-db) "A simple ticker."))
    (is (= (s/get-latest-ticker state2 test-db) "A complex ticker."))
    (is (= (s/get-latest-ticker state3 test-db) "A complex ticker."))))

(deftest test-group-by-item
  (is (= (s/db-group-by-item test-db :simple) :simple-group)))
; (deftest test-count
;   (is (= (s/thing-count {} :slogan) 0))
;   (is (= (s/thing-count { :things {:slogan 1}} :slogan) 1)))

; ; first research level just so happens to be poem
; (deftest test-items-default
;   (let [state {}
;         items (s/items data state :product)]
;     (is (= (count items) 2))
;     (is (= (:key (first items)) :gibberish))
;     (is (= (:key (last items)) :chant))))

; (deftest test-items-many-levels
;   (let [state {:levels {:product [:poem :knowledge]}}
;         items (s/items data state :product)]
;     (is (= (count items) 7))
;     (is (= (:key (first items)) :sonnet))
;     (is (= (:key (last items)) :encyclopedia))))

; (deftest test-levels
;   (let [state {}
;         reached (s/reached-levels data state :product)
;         unreached (s/unreached-levels data state :product)]
;     (is (= (count reached) 1))
;     (is (= reached [:genesis]))
;     (is (= (count unreached) 4))
;     (is (= (first unreached) :poem))))

; (deftest test-levels-state
;   (let [state {:levels {:product [:genesis :poem]}}
;         reached (s/reached-levels data state :product)
;         unreached (s/unreached-levels data state :product)]
;     (is (= (count reached) 2))
;     (is (= reached [:genesis :poem]))
;     (is (= (count unreached) 3))
;     (is (= (first unreached) :knowledge))))
