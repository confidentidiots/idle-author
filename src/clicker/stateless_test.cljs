(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :refer [gain sell]]
            [data.db :refer [data]]))
; TODO use test data instead of game data that might change (as we balance the game)

(deftest test-gain-for-product
  (is (= (gain :product data "Slogan" 1) 33.219280948873624))
  (is (= (gain :product data "Slogan" 2) 20.959032742893847))
  (is (= (gain :product data "Slogan" 3) 16.609640474436812))
  (is (= (gain :product data "Slogan" 4) 14.306765580733929)))

(deftest test-gain-for-tool
  (is (= (gain :tool data "Notepad" 1) 1))
  (is (= (gain :tool data "Notepad" 2) 0.6309297535714575))
  (is (= (gain :tool data "Moleskine" 1) 3.3219280948873626))
  (is (= (gain :tool data "Moleskine" 2) 2.095903274289385)))

(deftest test-sell
  (let [state { :things {}}
        state1 (sell data state "Slogan")
        state2 (sell data state1 "Slogan")    
        state3 (sell data state2 "Copy")]
    
    (is (= (get-in state1 [:things "Slogan"]) 1))
    (is (= (state1 :money) 33.219280948873624))

    (is (= (get-in state2 [:things "Slogan"]) 2))
    (is (= (state2 :money) 54.17831369176747))

    (is (= (get-in state3 [:things "Slogan"]) 2))
    (is (= (get-in state3 [:things "Copy"]) 1))
    (is (= (state3 :money) 386.37112318050373))))
