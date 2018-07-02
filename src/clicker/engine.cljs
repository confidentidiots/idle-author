(ns clicker.engine
  (:require [clicker.stateless :as s]
            [data.db :refer [data]]))

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
  (if (s/can-tap? data @state thing-name)
    (reset! state (s/tap data @state thing-name))
    state))

; check if atom, since it might have already been dereferenced
; at the call-site e.g. via formula cell `(cell= the-atom)`
(defn can-tap? [state thing-name]
  (if (instance? cljs.core.Atom state)
    (s/can-tap? data @state thing-name)
    (s/can-tap? data state thing-name)))

; TODO next-gain
