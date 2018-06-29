(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :refer [gain tap can-tap?]]
            [data.db :refer [data]]))
; TODO use test data instead of game data that might change (as we balance the game)

(deftest test-gain-for-product
  (is (= (gain data :product "Slogan" 1) 33.219280948873624))
  (is (= (gain data :product "Slogan" 2) 20.959032742893847))
  (is (= (gain data :product "Slogan" 3) 16.609640474436812))
  (is (= (gain data :product "Slogan" 4) 14.306765580733929)))

(deftest test-gain-for-tool
  (is (= (gain data :tool "Notepad" 1) 1))
  (is (= (gain data :tool "Notepad" 2) 0.6309297535714575))
  (is (= (gain data :tool "Moleskine" 1) 3.3219280948873626))
  (is (= (gain data :tool "Moleskine" 2) 2.095903274289385)))

(deftest test-tap-for-product
  (let [state {}
        state1 (tap data :product state "Slogan")
        state2 (tap data :product state1 "Slogan")
        state3 (tap data :product state2 "Copy")]

    (is (= (get-in state1 [:things "Slogan"]) 1))
    (is (= (state1 :money) 33.219280948873624))

    (is (= (get-in state2 [:things "Slogan"]) 2))
    (is (= (state2 :money) 54.17831369176747))

    (is (= (get-in state3 [:things "Slogan"]) 2))
    (is (= (get-in state3 [:things "Copy"]) 1))
    (is (= (state3 :money) 386.37112318050373))))

; Slogan is 10 clicks
(deftest test-product-can-tap?
  (is (= false (can-tap? data :product {} "Slogan")))
  (is (= false (can-tap? data :product { :clicks 9} "Slogan")))
  (is (= true (can-tap? data :product { :clicks 10} "Slogan")))
  (is (= true (can-tap? data :product { :clicks 999} "Slogan"))))

; Notepad cost 2 money
(deftest test-tool-can-tap?
  (is (= false (can-tap? data :tool {} "Notepad")))
  (is (= false (can-tap? data :tool { :money 1} "Notepad")))
  (is (= true (can-tap? data :tool { :money 2} "Notepad")))
  (is (= true (can-tap? data :tool { :money 999} "Notepad"))))