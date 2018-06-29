(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [clicker.engine :refer [click tap]]))

(deftest test-click
  (let [state (atom {})]
    (is (= (click state) {:clicks 1}))))

(deftest test-tap
  (let [state (atom {})
        _ (tap state "Novella")]
    (is (= @state {:things { "Novella" 1}, :money 99657.84284662087, :clicks 30000}))))
