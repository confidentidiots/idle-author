(ns data.index
  (:require [data.db :refer [data]]))

(def tools (into [] (concat ["ignored"] (map :name (get-in data [:tool :items])))))

(def products (into [] (concat ["ignored"] (map :name (get-in data [:product :items])))))