(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :as s]
            [testdata.db :refer [DB]]))

(def the-db (DB.))

; check this against the real DB:
; (deftest test-tap
;   (let [state {}
;         state2 (s/tap state the-db :slogan :n 2)
;         state3 (s/tap state2 the-db :copy)]
;     (is (= (get-in state2 [:things :slogan]) 2))
;     (is (= (get-in state2 [:values :money]) 54.17831369176747))
;     (is (= (get-in state3 [:things :slogan]) 2))
;     (is (= (get-in state3 [:things :copy]) 1))
;     (is (= (get-in state3 [:values :money]) 386.37112318050373))))

(deftest test-gains-simple
  (is (= (s/apply-gains {} the-db :simple) {:values {:money 10}}))
  (is (= (s/apply-gains {} the-db :simple :quantity 2) {:values {:money 20}}))
  (is (= (s/apply-gains {:values {:money 1}} the-db :simple) {:values {:money 11}}))
  (is (= (s/apply-gains {:values {:money 1}} the-db :simple :quantity 2) {:values {:money 21}})))
;
(deftest test-gains-complex
  (is (= (s/apply-gains {} the-db :complex) {:values {:money 20}}))
  (is (= (s/apply-gains {} the-db :complex :quantity 2) {:values {:money 60}}))
  (is (= (s/apply-gains {:values {:money 1}} the-db :complex) {:values {:money 21}}))
  (is (= (s/apply-gains {:values {:money 1}} the-db :complex :quantity 2) {:values {:money 61}})))

;
(deftest test-loss-simple
  (is (= (s/apply-losses {} the-db :simple) {:values {:effort -10}}))
  (is (= (s/apply-losses {} the-db :simple :quantity 2) {:values {:effort -30}}))
  (is (= (s/apply-losses {:values {:effort 1}} the-db :simple) {:values {:effort -9}}))
  (is (= (s/apply-losses {:values {:effort 1}} the-db :simple :quantity 2) {:values {:effort -29}})))
;
(deftest test-loss-complex
  (is (= (s/apply-losses {} the-db :complex) {:values {:effort -20}}))
  (is (= (s/apply-losses {} the-db :complex :quantity 2) {:values {:effort -40}}))
  (is (= (s/apply-losses {:values {:effort 1}} the-db :complex) {:values {:effort -19}}))
  (is (= (s/apply-losses {:values {:effort 1}} the-db :complex :quantity 2) {:values {:effort -39}})))

(deftest test-tap
  (let [state {}
        state2 (s/tap state the-db :simple :n 2)
        state3 (s/tap state2 the-db :complex)]

    (is (= (get-in state2 [:things :simple]) 2))
    (is (= (get-in state2 [:values :money]) 20))

    (is (= (get-in state3 [:things :simple]) 2))
    (is (= (get-in state3 [:things :complex]) 1))
    (is (= (get-in state3 [:values :money]) 40))))

:simple is 10 :effort
(deftest test-can-tap?
  (is (= false (s/can-tap? the-db {} :simple)))
  (is (= false (s/can-tap? the-db {:values {:effort 9}} :simple)))
  (is (= true (s/can-tap? the-db {:values {:effort 10}} :simple)))
  (is (= true (s/can-tap? the-db {:values {:effort 999}} :simple))))

(deftest test-many-can-tap?
  (is (= true (s/can-tap? the-db {:values {:effort 10}} :simple :n 1)))
  (is (= false (s/can-tap? the-db {:values {:effort 10}} :simple :n 2))))

; (deftest test-next-gain
;   (is (= (s/next-gain data {} :simple) 33.219280948873624))
;   (is (= (s/next-gain data { :things {:slogan 1} } :simple) 20.959032742893847))
;   (is (= (s/next-gain data { :things {:slogan 2} } :simple) 16.609640474436812)))

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
