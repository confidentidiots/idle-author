(ns data.idb)

(defprotocol IDB
  (items [group-key])
  (item-dependency [item])
  (item-function [item])
  (item-gain [item])
  (item-group [item])
  (item-loss [item])
  (item-name [item])
  (item-ticker [item]))


