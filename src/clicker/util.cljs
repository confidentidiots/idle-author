(ns clicker.util)

(defn- find-db-key-any [data thing-name & {:keys [arr-name] :or {arr-name :items}}]
  "When finding the sub DB key, we can assume a DB of the form
  { :sub-db-key { :items     [ { :name 'thing-name' }, ... ]}, :sub-dk-key2 ...}
  or:
  { :sub-db-key { <arr-name> [ { :name 'thing-name' }, ... ]}, :sub-dk-key2 ...}"
  (for [[sub-db-key nested] data
        item (arr-name nested)]
      (if (= thing-name (:name item))
        sub-db-key)))

(defn- find-db-key-no-nils [data thing-name & {:keys [arr-name] :or {arr-name :items}}]
  (remove nil? (find-db-key-any data thing-name arr-name)))

(defn find-db-key [data thing-name & {:keys [arr-name] :or {arr-name :items}}]
  (first (find-db-key-no-nils data thing-name arr-name)))

(defn log [v & text]
  (let [vs (if (string? v)
              (apply str v text)
              v)]
    (. js/console (log vs))
    v))

(def default-state { :key "init" :things { :slogan 0 :notepad 0}})