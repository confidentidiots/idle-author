(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :as s]))
            ; [data.db :as db]))

(def the-db (data.db.DB.))

(deftest test-gains-simple
  (is (= (s/apply-gains {} the-db :simple) {:money 10})))

; (deftest test-apply-gains
;   (let [state {}
;         state2 (s/apply-gains state data.foo :slogan :quantity 2)
;         state3 (s/apply-gains state2 data.foo :copy)]
;     (is (= (state2 :money) 54.17831369176747))
;     (is (= (state3 :money) 386.37112318050373))))

; (deftest test-tap
;   (let [state {}
;         state2 (s/tap state :slogan :n 2)
;         state3 (s/tap state2 :copy)]

;     (is (= (get-in state2 [:things :slogan]) 2))
;     (is (= (state2 :money) 54.17831369176747))

;     (is (= (get-in state3 [:things :slogan]) 2))
;     (is (= (get-in state3 [:things :copy]) 1))
;     (is (= (state3 :money) 386.37112318050373))))

; ; Slogan is 10 clicks
; (deftest test-can-tap?
;   (is (= false (s/can-tap? data {} "Slogan")))
;   (is (= false (s/can-tap? data { :clicks 9} "Slogan")))
;   (is (= true (s/can-tap? data { :clicks 10} "Slogan")))
;   (is (= true (s/can-tap? data { :clicks 999} "Slogan"))))

; ; Notepad cost 2 money
; (deftest test-many-can-tap?
;   (is (= true (s/can-tap? data { :money 20} "Notepad" :n 10)))
;   (is (= false (s/can-tap? data { :money 20} "Notepad" :n 11))))

; (deftest test-next-gain
;   (is (= (s/next-gain data {} "Slogan") 33.219280948873624))
;   (is (= (s/next-gain data { :things {:slogan 1} } "Slogan") 20.959032742893847))
;   (is (= (s/next-gain data { :things {:slogan 2} } "Slogan") 16.609640474436812)))

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
