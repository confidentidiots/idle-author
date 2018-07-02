(ns clicker.stateless
  (:require [clicker.util :as u]))

(defn gain [db thing-name n]
  "Given a thing (like a tool or product),
  if I tap (i.e. buy/sell) it the Nth time
  what is the gain as per the gain-fn?"
  (let [key (u/find-db-key db thing-name)
        sub-db (db key)
        gain-fn (sub-db :gain-fn)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        cost (thing :cost)]
      (gain-fn n cost)))

(defn tap [db state thing-name]
  "Given I tap a thing, make changes to the current game state
  and return the game state.
  It's a good idea to wrap this with 'can-tap?'"
  (let [key (u/find-db-key db thing-name)
        sub-db (db key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        gain-key (sub-db :gain)
        loss-key (sub-db :loss)
        current-count (get-in state [:things thing-name] 0)
        future-count (inc current-count)
        thing-gain (gain db thing-name future-count)
        thing-loss (thing :cost)
        gain-amount (partial + thing-gain)
        loss-amount (partial + (- thing-loss))]
    ; (print ">> tap: "
    ;   {
    ;     :future-count future-count
    ;     :name thing-name
    ;     :gain-key gain-key
    ;     :loss-key loss-key
    ;     :thing-gain thing-gain
    ;     :thing-loss thing-loss})

    (-> state
      ; record that we've tapped one more of this thing
      (update-in [:things thing-name] (fnil inc 0))
      ; you gain some
      (update-in [gain-key] (fnil gain-amount 0))
      ; you lose some
      (update-in [loss-key] (fnil loss-amount 0)))))

(defn can-tap? [db state thing-name]
  "Can I tap a thing? Not if its loss goes below zero."
  (let [key (u/find-db-key db thing-name)
        sub-db (db key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        loss-key (sub-db :loss)
        thing-loss (thing :cost)
        current-loser (state loss-key 0)
        future-loser (- current-loser thing-loss)]

    (<= 0 future-loser)))

(defn next-gain [db state thing-name]
  "What is the next gain going to be if I tap something?"
  (let [key (u/find-db-key db thing-name)
        sub-db (db key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        gain-key (sub-db :gain)
        loss-key (sub-db :loss)
        current-count (get-in state [:things thing-name] 0)
        future-count (inc current-count)
        thing-gain (gain db thing-name future-count)]
    thing-gain))

(defn count [state thing-name]
  (get-in state [:things thing-name] 0))
