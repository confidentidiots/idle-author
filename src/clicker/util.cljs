(ns clicker.util)

(defn log [v & text]
  (let [vs (if (string? v)
              (apply str v text)
              v)]
    (. js/console (log vs))
    v))

(def default-state { :key "init" })