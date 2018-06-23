(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [clicker.engine :refer [foo]]))

(deftest test-numbers
  (is (= 1 1)))
(deftest test-numbers2
  (is (= 1 1)))
(deftest test-foo
  (is (= 2 (foo 1 1)))
  (is (= 2 (foo 1 1))))

;(run-tests)