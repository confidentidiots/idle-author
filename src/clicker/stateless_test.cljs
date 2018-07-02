(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :refer [gain tap can-tap? next-gain count]]
            [data.db :refer [data]]))
; TODO use test data instead of game data that might change (as we balance the game)

(deftest test-gain-for-product
  (is (= (gain data "Slogan" 1) 33.219280948873624))
  (is (= (gain data "Slogan" 2) 20.959032742893847))
  (is (= (gain data "Slogan" 3) 16.609640474436812))
  (is (= (gain data "Slogan" 4) 14.306765580733929)))

(deftest test-gain-for-tool
  (is (= (gain data "Notepad" 1) 1))
  (is (= (gain data "Notepad" 2) 0.6309297535714575))
  (is (= (gain data "Moleskine" 1) 3.3219280948873626))
  (is (= (gain data "Moleskine" 2) 2.095903274289385)))

(deftest test-tap-for-product
  (let [state {}
        state1 (tap data state "Slogan")
        state2 (tap data state1 "Slogan")
        state3 (tap data state2 "Copy")]

    (is (= (get-in state1 [:things "Slogan"]) 1))
    (is (= (state1 :money) 33.219280948873624))

    (is (= (get-in state2 [:things "Slogan"]) 2))
    (is (= (state2 :money) 54.17831369176747))

    (is (= (get-in state3 [:things "Slogan"]) 2))
    (is (= (get-in state3 [:things "Copy"]) 1))
    (is (= (state3 :money) 386.37112318050373))))

; Slogan is 10 clicks
(deftest test-product-can-tap?
  (is (= false (can-tap? data {} "Slogan")))
  (is (= false (can-tap? data { :clicks 9} "Slogan")))
  (is (= true (can-tap? data { :clicks 10} "Slogan")))
  (is (= true (can-tap? data { :clicks 999} "Slogan"))))

; Notepad cost 2 money
(deftest test-tool-can-tap?
  (is (= false (can-tap? data {} "Notepad")))
  (is (= false (can-tap? data { :money 1} "Notepad")))
  (is (= true (can-tap? data { :money 2} "Notepad")))
  (is (= true (can-tap? data { :money 999} "Notepad"))))

(deftest test-next-gain-product
  (is (= (next-gain data {} "Slogan") 33.219280948873624))
  (is (= (next-gain data { :things {"Slogan" 1} } "Slogan") 20.959032742893847))
  (is (= (next-gain data { :things {"Slogan" 2} } "Slogan") 16.609640474436812)))

(deftest test-count
  (is (= (count {} "Slogan") 0))
  (is (= (count { :things {"Slogan" 1}} "Slogan") 1)))
