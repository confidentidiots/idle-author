(ns data.db
  (:require
    [data.dependency :as dependency]
    [data.function :as function]
    [data.gain :as gain]
    [data.group :as group]
    [data.loss :as loss]
    [data.name :as name]
    [data.ticker :as ticker]))

; (def dependency dependency/data)
; (def function function/data)
; (def gain gain/data)
; (def group group/data)
; (def loss loss/data)
; (def name name/data)
; (def ticker ticker/data)

(defn items [group-key]
  (map #(first %) (filter (fn [[k v]] (some (partial = group-key) v)) group/data)))

; (defn item-dependency [item]
;   (db/dependency item))

; (defn item-function [item]
;   (db/function item))
