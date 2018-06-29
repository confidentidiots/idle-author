(ns clicker.stateless-test
  (:require [cljs.test :refer-macros [deftest is]]
            [clicker.stateless :refer [income gain sell]]))

(deftest test-income
  (is (= (income "Slogan" 1) 33.219280948873624))
  (is (= (income "Slogan" 2) 20.959032742893847))
  (is (= (income "Slogan" 3) 16.609640474436812))
  (is (= (income "Slogan" 4) 14.306765580733929)))

(deftest test-gain
  (is (= (gain "Notepad" 1) 1))
  (is (= (gain "Notepad" 2) 0.6309297535714575))
  (is (= (gain "Moleskine" 1) 3.3219280948873626))
  (is (= (gain "Moleskine" 2) 2.095903274289385)))

(deftest test-sell
  (let [state { :things {}}
        state1 (sell state "Slogan")
        state2 (sell state1 "Slogan")    
        state3 (sell state2 "Copy")]
    
    (is (= (get-in state1 [:things "Slogan"]) 1))
    (is (= (state1 :money) 33.219280948873624))

    (is (= (get-in state2 [:things "Slogan"]) 2))
    (is (= (state2 :money) 54.17831369176747))

    (is (= (get-in state3 [:things "Slogan"]) 2))
    (is (= (get-in state3 [:things "Copy"]) 1))
    (is (= (state3 :money) 386.37112318050373))))
