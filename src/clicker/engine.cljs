(ns clicker.engine
  (:require [clicker.stateless :as s]
            [clicker.util :as u]
            [data.db :refer [DB]]
            [data.idb :refer [item-name item-group]]
            [javelin.core]))
; Everything in this file is in stateless.cljs, which is testable.
; This file isn't testable, as it hard-codes the games database.

; The engine knows which db to use.
(def db (DB.))

(defn get-state [state]
  (if (or
        (instance? cljs.core.Atom state)
        (instance? javelin.core/Cell state))
    @state
    state))

; All engine functions accept a state atom as argument
; (amongst other things)
; The caller would initialise game state like this:
; (def state (atom {}))

(defn click [state & {:keys [change-fn] :or {change-fn inc}}]
  (swap! state update-in [:values :clicks] (fnil change-fn 0)))
;
(defn tap [state* thing & {:keys [n] :or {n 1}}]
  (let [state (get-state state*)
        ticker (s/db-item-ticker db thing)
        updated (-> state
                  (s/tap db thing :n n))]
    (reset! state* updated)))
;
(defn thing-count [state thing]
    (s/thing-count (get-state state) thing))
;
; check if atom, since it might have already been dereferenced
; at the call-site e.g. via formula cell `(cell= the-atom)`
(defn can-tap? [state thing & {:keys [n] :or {n 1}}]
  (let [can-tap (s/can-tap? (get-state state) db thing :n n)]
    can-tap))
;
(defn next-gain [state thing]
  (s/next-gain (get-state state) db thing))
;
(defn next-loss [state thing]
  (s/next-loss (get-state state) db thing))

(defn satisfies-dependencies? [state thing]
  (s/satisfies-dependencies? (get-state state) db thing))

(defn has-started? [state]
  (not (nil? (get-in state [:things :genesis]))))

(defn get-dependencies
  ([state] (s/get-dependencies (get-state state) db))
  ([state thing] (s/get-dependencies (get-state state) db thing)))
;
(defn start [state]
  (tap state (get-dependencies state)))
;
(defn get-latest-new-thing [state]
  (s/get-latest-new-thing (get-state state)))
;
(defn get-latest-ticker [state]
  (s/get-latest-ticker (get-state state) db))

; DAO stuff ------------------------------------------------------
(defn db-item-name [thing]
  (s/db-item-name db thing))
;
(defn db-item-ticker [thing]
  (s/db-item-ticker db thing))
;
(defn db-items-by-group [group]
  (s/db-items-by-group db group))
;
(defn db-group-by-item [thing]
  (s/db-group-by-item db (keyword thing)))
