(ns clicker.util)

(defn- find-db-key-any [data thing-name]
  "When finding the sub DB key, we can assume a DB of the form
  { :sub-db-key { :items [ { :name 'thing-name' }, ... ]}, :sub-dk-key2 ...}"
  (for [[sub-db-key nested] data
        item (:items nested)]
      (if (= thing-name (:name item))
        sub-db-key)))

(defn- find-db-key-no-nils [data thing-name]
  (remove nil? (find-db-key-any data thing-name)))

(defn find-db-key [data thing-name]
  (first (find-db-key-no-nils data thing-name)))

(defn log [v & text]
  (let [vs (if (string? v)
              (apply str v text)
              v)]
    (. js/console (log vs))
    v))

(def default-state { :key "init" :things { :slogan 0 :notepad 0}})