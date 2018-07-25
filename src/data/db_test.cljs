(ns data.db-test
  (:require
    [cljs.test :refer-macros [deftest is use-fixtures]]
    [data.db :as db]))

;
; (deftest test-items
;   (let [items (db/items :product-level)]
;     (is (= (count items) 5))
;     (is (= (first items)) :genesis)
;     (is (= (last items)) :modern)))