(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [clicker.engine :refer [click tap]]))

(deftest test-click
  (let [state (atom {})]
    (is (= (click state) {:clicks 1}))))

(deftest test-click-change-fn
  (let [state (atom {})]
    (is (= (click state :change-fn inc) {:clicks 1}))))

(deftest test-tap
  (let [state (atom { :clicks 30000})
        _ (tap state "Novella")]
    (is
      (=
        @state
        {:things { "Novella" 1}, :money 99657.84284662087, :clicks 0}))))

(deftest test-taptap
  (let [state (atom { :clicks 60000})
        _ (tap state "Novella")
        _2 (tap state "Novella")]
    (is
      (=
        @state
        {:things { "Novella" 2}, :money 162534.94107530243, :clicks 0}))))

(deftest test-all
  (let [state (atom {})
        _1 (doseq [i (range 100)] (click state))
        _2 (tap state "Slogan")
        _3 (tap state "Slogan")
        _4 (tap state "Notepad")]
        (is
          (=
            @state
            {
              :clicks 80
              :things {"Slogan" 2 "Notepad" 1}
              :money 52.17831369176747
              :add-every 1}))))
