(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [clicker.engine :refer [click]]))


; (use-fixtures :each (fn [f]))

(deftest test-click
  (let [state (atom { :clicks 0})]
    (is (= (click state) {:clicks 1}))))
