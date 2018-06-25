(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [clicker.engine :refer [click sell]]))

(deftest test-click
  (let [state (atom { :clicks 0})]
    (is (= (click state) {:clicks 1}))))

;
(deftest test-sell
  (let [state (atom { :things {}})]
    (is (= (sell state "Slogan") {:things { "Slogan" 1 :money 33.219280948873624}}))
    (is (= (sell state "Slogan") {:things { "Slogan" 2 :money 54.17831369176747}}))
    (is (= (sell state "Copy") {:things { "Copy" 1 "Slogan" 2 :money 386.37112318050373}}))))

;
