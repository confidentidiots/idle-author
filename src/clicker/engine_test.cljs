(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [clicker.engine :refer [click sell]]))

(deftest test-click
  (let [state (atom { :clicks 0})]
    (is (= (click state) {:clicks 1}))))

;
(deftest test-sell
  (let [state (atom { :things {"bar" 2}})]
    (is (= (sell state "foo") {:things { "foo" 1 "bar" 2}}))
    (is (= (sell state "bar") {:things { "foo" 1 "bar" 3}}))))
