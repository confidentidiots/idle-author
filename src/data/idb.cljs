(ns data.idb)
; https://danielcompton.net/2016/05/04/requiring-records-clojure-clojurescript
(defprotocol IDB
  (items [this group-key])
  (item-dependency [this item])
  (item-function [this item])
  (item-gain [this item])
  (item-group [this item])
  (item-loss [this item])
  (item-name [this item])
  (item-ticker [this item]))


