(ns db.dao
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [chan <! sub]]
   [db.indexdb :as idxdb]
   [clicker.util :as u]))

(def db-name "idle-author")
(def db-store "game-state")

;; gubbins start
(def ^:dynamic db nil)
(defn save-db [{db-obj :db}]
  (set! db db-obj))

(defn db-schema [db-ref]
  (idxdb/delete-and-create-store db-ref db-store {:key-path "key"}))

(defn error-prn [& args] (u/log "Error: " args))

(def version 1)
(defn init-db []
  (let [
        [_ ch] (idxdb/request-db db-name version db-schema)
        success-chan (sub ch :success (chan))
        error-chan (sub ch :error (chan))]
    (go (-> (<! success-chan) save-db))
    (go (-> (<! error-chan) error-prn))))

;; gubbins end


; put

(defn ^:private put [payload store fn]
    (idxdb/put-item db store payload fn #(u/log "put error " %)))

(defn put-state [state fn]
  (put state db-store fn))

; get
(defn get-state [key fn]
  (let [result-ch (idxdb/get-by-key db db-store key :keywordize-keys true)]
    (go (fn (<! result-ch)))))
