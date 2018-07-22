(ns clicker.engine
  (:require [clicker.stateless :as s]
            [data.db :as db]))

; The engine knows which db to use.

; All engine functions accept a state atom as argument
; (amongst other things)
; The caller would initialise game state like this:
; (def state (atom {}))

(def data {})

(defn click [state & {:keys [change-fn] :or {change-fn inc}}]
  (swap! state update-in [:clicks] (fnil change-fn 0)))

(defn tap [state thing-name & {:keys [n] :or {n 1}}]
  (if (s/can-tap? data @state thing-name :n n)
    (reset! state (s/tap data @state thing-name :n n))
    state))

;
(defn thing-count [state thing-key]
  (if (instance? cljs.core.Atom state)
    (s/thing-count @state thing-key)
    (s/thing-count state thing-key)))
;
(defn can-tap? [state thing-name & {:keys [n] :or {n 1}}]
  true)

; check if atom, since it might have already been dereferenced
; at the call-site e.g. via formula cell `(cell= the-atom)`
; (defn can-tap? [state thing-name & {:keys [n] :or {n 1}}]
;   (if (instance? cljs.core.Atom state)
;     (s/can-tap? data @state thing-name :n n)
;     (s/can-tap? data state thing-name :n n)))

; (defn next-gain [state thing-name]
;   (if (instance? cljs.core.Atom state)
;     (s/next-gain data @state thing-name)
;     (s/next-gain data state thing-name)))



; (defn reached-levels [state type]
;   (if (instance? cljs.core.Atom state)
;     (s/reached-levels data @state type)
;     (s/reached-levels data state type)))

; (defn unreached-levels [state type]
;   (if (instance? cljs.core.Atom state)
;     (s/unreached-levels data @state type)
;     (s/unreached-levels data state type)))

; (defn get-level [type level-key]
;   (s/get-level data type level-key))
