(ns data.db
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

(deftype DB []
  data.idb/IDB

    (items [group-key]
      (map #(first %) (filter (fn [[k v]] (some (partial = group-key) v)) group/data)))

    (item-dependency [item]
      (dependency/data item))

    (item-function [item]
      (funs/data item))
    ;
    (item-gain [item]
      (gain/data item))
    ;
    (item-group [item]
      (group/data item))
    ;
    (item-loss [item]
      (loss/data item))
    ;
    (item-name [item]
      (name/data item))
    ;
    (item-ticker [item]
      (ticker/data item)))
