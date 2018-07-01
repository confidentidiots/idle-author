(ns clicker.engine
  (:require [clicker.stateless :as s]
            [data.db :refer [data]]
            [clicker.util :as u]))

; All engine functions accept a state atom as argument
; (amongst other things)
; The caller would initialise game state like this:
; (def state (atom {}))

; (defn click [state]
;   (-> state
;     (update-in [:clicks] inc)))

(defn click [state & {:keys [change-fn] :or {change-fn inc}}]
  (swap! state update-in [:clicks] (fnil change-fn 0)))


(defn tap [state thing-name]
  "When tapping a thing, find its sub DB key, then call stateless/tap."
  (let [sub-db-key (u/find-db-key data thing-name)]
    (if (s/can-tap? data sub-db-key @state thing-name)
      (reset! state (s/tap data sub-db-key @state thing-name))
      state)))

(defn can-tap? [state thing-name]
  (let [sub-db-key (u/find-db-key data thing-name)
        is-atom? (instance? cljs.core.Atom state)]
    (if is-atom?
      (s/can-tap? data sub-db-key @state thing-name)
      (s/can-tap? data sub-db-key state thing-name))))
