(ns clicker.stateless
  (:require [data.sell :refer [stuff]]
    [data.tools :as tools]))

(defn income [thing n]
  "Given a thing, if I sell it the Nth time, what is the income?"
  (let [items (stuff :items)
        item (first (filter #(= thing (% :name)) items))
        income-fn (stuff :income)
        word-cost (item :cost)]

    (income-fn n word-cost)))

(defn gain [upgrade-name n]
  "Given an upgrade, if I buy it the Nth time, what is the gain?"
  (let [upgrades (tools/stuff :items)
        upgrade (first (filter #(= upgrade-name (% :name)) upgrades))
        gain-fn (tools/stuff :gain-fn)
        money-cost (upgrade :cost)]
      
      (gain-fn n money-cost)))