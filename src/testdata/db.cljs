(ns testdata.db
  (:require
    [testdata.dependency :as dependency]
    [testdata.funs :as funs]
    [testdata.gain :as gain]
    [testdata.group :as group]
    [testdata.loss :as loss]
    [testdata.name :as name]
    [testdata.ticker :as ticker]
    [data.idb :refer [IDB]]))


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
