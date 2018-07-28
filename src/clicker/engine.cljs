(ns clicker.engine
  (:require [clicker.stateless :as s]
            [data.db :refer [DB]]))

; The engine knows which db to use.
(def db (DB.))

; All engine functions accept a state atom as argument
; (amongst other things)
; The caller would initialise game state like this:
; (def state (atom {}))

(defn click [state & {:keys [change-fn] :or {change-fn inc}}]
  (swap! state update-in [:clicks] (fnil change-fn 0)))

(defn tap [state thing-name & {:keys [n] :or {n 1}}]
  (if (s/can-tap? @state db thing-name :n n)
    (reset! state (s/tap @state db thing-name :n n))
    state))

;
(defn thing-count [state thing-key]
  (let [the-state (if (instance? cljs.core.Atom state) @state state)]
    (s/thing-count the-state thing-key)))
;

; check if atom, since it might have already been dereferenced
; at the call-site e.g. via formula cell `(cell= the-atom)`
(defn can-tap? [state thing-name & {:keys [n] :or {n 1}}]
  (if (instance? cljs.core.Atom state)
    (s/can-tap? @state db thing-name :n n)
    (s/can-tap? state db thing-name :n n)))

(defn next-gain [state thing-name]
  (if (instance? cljs.core.Atom state)
    (s/next-gain @state db thing-name)
    (s/next-gain state db thing-name)))