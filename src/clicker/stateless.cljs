(ns clicker.stateless
  (:require
    [clicker.util :as u]
    [clojure.set]
    [data.idb :refer [item-gain item-loss item-function]]))

(defn thing-count [state thing-key]
  (get-in state [:things thing-key] 0))
;
(defn future-quantities [state thing quantity]
  "Given a quantity X, and a state which has N things, return N+1, N+2, ... , N+X
  E.g. quantity=5, current-count=7 -> [8 9 10 11 12]"
  (let [current-count (get-in state [:things thing] 0)
        spread (range 1 (+ 1 quantity))
        future-spread (map #(+ current-count %) spread)]
      future-spread))
;
(defn ^:private apply-gain-or-loss [k v state db thing quantity op fun]
  "k the key is the item being increased/decreased, e.g. :money or :gold
  v the value is either a number of a funtion key that can be looked up in the funs db."
  (if (number? v)
    (let [value (* quantity v)
          value-fn (partial + (op value))]
      (update-in state [:values k] (fnil value-fn 0)))
    (let [quantities (future-quantities state thing quantity)
          opposite (val (first (fun db thing)))
          gain-fn (item-function db v)
          value (reduce + (map #(gain-fn % opposite) quantities))
          value-fn (partial + (op value))]
      (update-in state [:values k] (fnil value-fn 0)))))
;
(defn ^:private apply-gain [k v state db thing quantity]
  (apply-gain-or-loss k v state db thing quantity + item-loss))
;
(defn ^:private apply-loss [k v state db thing quantity]
  (apply-gain-or-loss k v state db thing quantity - item-gain))
;
(defn ^:private apply-gains-or-losses [state db thing gol-fn apply-fn quantity]
  "Get the :gain data for thing, and apply it to the state :quantity times"
  (let [it (gol-fn db thing)
        states (reduce (fn [st [k v]] (apply-fn k v st db thing quantity)) state it)]
    states))
;
(defn apply-gains [state db thing & {:keys [quantity] :or {quantity 1}}]
  (apply-gains-or-losses state db thing item-gain apply-gain quantity))
;
(defn apply-losses [state db thing & {:keys [quantity] :or {quantity 1}}]
  (apply-gains-or-losses state db thing item-loss apply-loss quantity))

(defn tap [state db thing & {:keys [n] :or {n 1}}]
  "Given I tap a thing, make changes to the current game state
  and return the game state.
  It's up to the caller to wrap this with 'can-tap?'"
    (-> state
      ; you gain some
      (apply-gains db thing :quantity n)
      ; you lose some
      (apply-losses db thing :quantity n)
      ; record that we've tapped one more of this thing.
      ; This must come last, as apply-* depends on "current-count"
      (update-in [:things thing] (fnil #(+ % n) 0))))
;
(defn can-tap? [state db thing & {:keys [n] :or {n 1}}]
  "Can I tap a thing n times? Not if its loss goes below zero."
  (let [tapped (tap state db thing :n n)]
    (nil? (some neg? (vals (:values tapped))))))
;

;
(defn next-gain-or-loss [state db thing lookup-fn apply-fn]
  "What is the next gain/loss going to be if I tap something?"
  (let [gain-key (first (map key (lookup-fn db thing)))
        old-value-maybe-nil (get-in state [:values gain-key])
        old-value (if (nil? old-value-maybe-nil) 0 old-value-maybe-nil)
        next-state (apply-fn state db thing)
        new-value (get-in next-state [:values gain-key])]
    (- new-value old-value)))
;
(defn next-gain [state db thing]
  "What is the next gain going to be if I tap something?"
  (next-gain-or-loss state db thing item-gain apply-gains))
;
(defn next-loss [state db thing]
  "What is the next loss going to be if I tap something?"
  (next-gain-or-loss state db thing item-loss apply-losses))