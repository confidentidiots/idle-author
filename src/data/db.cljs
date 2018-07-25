(ns data.db
  (:require
    [data.dependency :as dependency]
    [data.funs :as funs]
    [data.gain :as gain]
    [data.group :as group]
    [data.loss :as loss]
    [data.name :as name]
    [data.ticker :as ticker]
    [data.idb :refer [IDB]]))

; (def dependency dependency/data)
; (def function function/data)
; (def gain gain/data)
; (def group group/data)
; (def loss loss/data)
; (def name name/data)
; (def ticker ticker/data)

(defrecord DB [] IDB

  (items [_ group-key]
    (map #(first %) (filter (fn [[k v]] (some (partial = group-key) v)) group/data)))

  (item-dependency [_ item]
    (dependency/data item))

  (item-function [_ item]
    (funs/data item))
  ;
  (item-gain [_ item]
    (gain/data item))
  ;
  (item-group [_ item]
    (group/data item))
  ;
  (item-loss [_ item]
    (loss/data item))
  ;
  (item-name [_ item]
    (name/data item))
  ;
  (item-ticker [_ item]
    (ticker/data item)))
