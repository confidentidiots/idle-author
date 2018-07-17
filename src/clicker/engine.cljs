(ns clicker.engine
  (:require [clicker.stateless :as s]
            [data.db :as db]))

; The engine knows which db to use.

; All engine functions accept a state atom as argument
; (amongst other things)
; The caller would initialise game state like this:
; (def state (atom {}))

; (defn click [state]
;   (-> state
;     (update-in [:clicks] inc)))

(def data db/data)

(defn click [state & {:keys [change-fn] :or {change-fn inc}}]
  (swap! state update-in [:clicks] (fnil change-fn 0)))

(defn tap [state thing-name & {:keys [n] :or {n 1}}]
  (if (s/can-tap? data @state thing-name :n n)
    (reset! state (s/tap data @state thing-name :n n))
    state))

; check if atom, since it might have already been dereferenced
; at the call-site e.g. via formula cell `(cell= the-atom)`
(defn can-tap? [state thing-name & {:keys [n] :or {n 1}}]
  (if (instance? cljs.core.Atom state)
    (s/can-tap? data @state thing-name :n n)
    (s/can-tap? data state thing-name :n n)))

(defn next-gain [state thing-name]
  (if (instance? cljs.core.Atom state)
    (s/next-gain data @state thing-name)
    (s/next-gain data state thing-name)))

(defn thing-count [state thing-key]
  (if (instance? cljs.core.Atom state)
    (s/thing-count @state thing-key)
    (s/thing-count state thing-key)))

(defn items [state type]
  (if (instance? cljs.core.Atom state)
    (s/items data @state type)
    (s/items data state type)))