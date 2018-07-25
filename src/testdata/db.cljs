(ns testdata.db
  (:require
    [testdata.dependency :as dependency]
    [testdata.funs :as funs]
    [testdata.gain :as gain]
    [testdata.group :as group]
    [testdata.loss :as loss]
    [testdata.name :as name]
    [testdata.ticker :as ticker]
    data.idb :as idb))

(deftype TestDB []
  idb.IDB

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
