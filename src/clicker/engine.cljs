(ns clicker.engine
  (:require [clicker.stateless :as s]
            [clicker.util :as u]
            [data.db :refer [DB]]
            [data.idb :refer [item-name item-group item-group-data]]))
; Everything in this file is in stateless.cljs, which is testable.
; This file isn't testable, as it hard-codes the games database.

; The engine knows which db to use.
(def db (DB.))

; All engine functions accept a state atom as argument
; (amongst other things)
; The caller would initialise game state like this:
; (def state (atom {}))

(defn click [state & {:keys [change-fn] :or {change-fn inc}}]
  (swap! state update-in [:clicks] (fnil change-fn 0)))
;
(defn tap [state* thing & {:keys [n] :or {n 1}}]
  (let [state (if (instance? cljs.core.Atom state*) @state* state*)]
    (if (s/can-tap? @state db thing :n n)
      (reset! state (s/tap @state db thing :n n))
      state)))
;
(defn thing-count [state* thing]
  (let [state (if (instance? cljs.core.Atom state*) @state* state*)]
    (s/thing-count state thing)))
;
; check if atom, since it might have already been dereferenced
; at the call-site e.g. via formula cell `(cell= the-atom)`
(defn can-tap? [state* thing & {:keys [n] :or {n 1}}]
  (let [state (if (instance? cljs.core.Atom state*) @state* state*)]
    (s/can-tap? state db thing :n n)))
;
(defn next-gain [state* thing]
  (let [state (if (instance? cljs.core.Atom state*) @state* state*)]
    (s/next-gain state db thing)))
;
(defn next-loss [state* thing]
  (let [state (if (instance? cljs.core.Atom state*) @state* state*)]
    (s/next-loss state db thing)))

; DAO stuff ------------------------------------------------------
(defn db-item-name [thing]
  (s/db-item-name db thing))
;
(defn db-items-by-group [group]
  (s/db-items-by-group db group))