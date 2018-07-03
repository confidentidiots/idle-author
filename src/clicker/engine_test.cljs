(ns clicker.engine-test
  (:require [cljs.test :refer-macros [deftest is use-fixtures]]
            [clicker.engine :as e]))

(deftest test-click
  (let [state (atom {})]
    (is (= (e/click state) {:clicks 1}))))

(deftest test-click-change-fn
  (let [state (atom {})]
    (is (= (e/click state :change-fn inc) {:clicks 1}))))

(deftest test-tap
  (let [state (atom { :clicks 30000})
        _ (e/tap state "Novella")]
    (is
      (=
        @state
        {:things { "Novella" 1}, :money 99657.84284662087, :clicks 0}))))

(deftest test-taptap
  (let [state (atom { :clicks 60000})
        _ (e/tap state "Novella")
        _2 (e/tap state "Novella")]
    (is
      (=
        @state
        {:things { "Novella" 2}, :money 162534.94107530243, :clicks 0}))))

; like test-taptap, but with :n 2
(deftest test-tap-twice
  (let [state (atom { :clicks 60000})
        _ (e/tap state "Novella" :n 2)]
    (is
      (=
        @state
        {:things { "Novella" 2}, :money 162534.94107530243, :clicks 0}))))

(deftest test-all
  (let [state (atom {})
        _1 (doseq [i (range 100)] (e/click state))
        _2 (e/tap state "Slogan")
        _3 (e/tap state "Slogan")
        _4 (e/tap state "Notepad")]
       (is
         (=
           @state
           {
             :clicks 80
             :things {"Slogan" 2 "Notepad" 1}
             :money 52.17831369176747
             :add-every 1}))))
;
(deftest test-can-tap?
  (is (= false (e/can-tap? (atom {}) "Slogan")))
  (is (= false (e/can-tap? (atom { :clicks 9}) "Slogan")))
  (is (= true (e/can-tap? (atom { :clicks 10}) "Slogan")))
  (is (= true (e/can-tap? (atom { :clicks 999}) "Slogan"))))
;
; Notepad cost 2 money
(deftest test-many-can-tap?
  (is (= true (e/can-tap? (atom { :money 20}) "Notepad" :n 10)))
  (is (= false (e/can-tap? (atom { :money 20}) "Notepad" :n 11))))
