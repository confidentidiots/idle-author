(ns data.foo
  (:require
    [data.dependency :as dependency]
    [data.funs :as funs]
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

(defn item-dependency [item]
  (dependency/data item))

(defn item-function [item]
  (funs/data item))
;
(defn item-gain [item]
  (gain/data item))
;
(defn item-group [item]
  (group/data item))
;
(defn item-loss [item]
  (loss/data item))
;
(defn item-name [item]
  (name/data item))
;
(defn item-ticker [item]
  (ticker/data item))