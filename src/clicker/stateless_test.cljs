(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :as s]
            [data.db :refer [data]]))
; TODO use test data instead of game data that might change (as we balance the game)

(deftest test-tap
  (let [state {}
        state2 (s/tap data state "Slogan" :n 2)
        state3 (s/tap data state2 "Copy")]

    (is (= (get-in state2 [:things :slogan]) 2))
    (is (= (state2 :money) 54.17831369176747))

    (is (= (get-in state3 [:things :slogan]) 2))
    (is (= (get-in state3 [:things :copy]) 1))
    (is (= (state3 :money) 386.37112318050373))))

; Slogan is 10 clicks
(deftest test-can-tap?
  (is (= false (s/can-tap? data {} "Slogan")))
  (is (= false (s/can-tap? data { :clicks 9} "Slogan")))
  (is (= true (s/can-tap? data { :clicks 10} "Slogan")))
  (is (= true (s/can-tap? data { :clicks 999} "Slogan"))))

; Notepad cost 2 money
(deftest test-many-can-tap?
  (is (= true (s/can-tap? data { :money 20} "Notepad" :n 10)))
  (is (= false (s/can-tap? data { :money 20} "Notepad" :n 11))))

(deftest test-next-gain
  (is (= (s/next-gain data {} "Slogan") 33.219280948873624))
  (is (= (s/next-gain data { :things {:slogan 1} } "Slogan") 20.959032742893847))
  (is (= (s/next-gain data { :things {:slogan 2} } "Slogan") 16.609640474436812)))

(deftest test-count
  (is (= (s/thing-count {} :slogan) 0))
  (is (= (s/thing-count { :things {:slogan 1}} :slogan) 1)))

(deftest test-items
  (let [state {:levels {:product [:poem]}}
        items (s/items data state :product)]
    (is (= (count items) 5))
    (is (= (:key (first items)) :sonnet))
    (is (= (:key (last items)) :elegy))))

; first research level just so happens to be poem
(deftest test-items-default
  (let [state {}
        items (s/items data state :product)]
    (is (= (count items) 1))
    (is (= (:key (first items)) :gibberish))
    (is (= (:key (last items)) :gibberish))))

(deftest test-items-many-levels
  (let [state {:levels {:product [:poem :knowledge]}}
        items (s/items data state :product)]
    (is (= (count items) 7))
    (is (= (:key (first items)) :sonnet))
    (is (= (:key (last items)) :encyclopedia))))
