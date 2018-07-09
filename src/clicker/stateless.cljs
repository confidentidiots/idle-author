(ns clicker.stateless
  (:require [clicker.util :as u]))

(defn tap [db state thing-name & {:keys [n] :or {n 1}}]
  "Given I tap a thing, make changes to the current game state
  and return the game state.
  It's a good idea to wrap this with 'can-tap?'"
  (let [db-key (u/find-db-key db thing-name)
        sub-db (db db-key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        thing-key (thing :key)
        gain-key (sub-db :gain)
        loss-key (sub-db :loss)
        gain-fn (sub-db :gain-fn)
        current-count (get-in state [:things thing-key] 0)
        thing-loss (thing :cost)
        spread (range 1 (+ 1 n))
        future-spread (map #(+ current-count %) spread)
        thing-gain (reduce + (map #(gain-fn % thing-loss) future-spread))
        gain-amount (partial + thing-gain)
        loss-amount (partial + (- (* n thing-loss)))]

    (-> state
      ; record that we've tapped one more of this thing
      (update-in [:things thing-key] (fnil #(+ % n) 0))
      ; you gain some
      (update-in [gain-key] (fnil gain-amount 0))
      ; you lose some
      (update-in [loss-key] (fnil loss-amount 0)))))

(defn can-tap? [db state thing-name & {:keys [n] :or {n 1}}]
  "Can I tap a thing n times? Not if its loss goes below zero."
  (let [db-key (u/find-db-key db thing-name)
        sub-db (db db-key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        loss-key (sub-db :loss)
        thing-loss (thing :cost)
        current-loser (state loss-key 0)
        future-loser (- current-loser (* n thing-loss))]

    (<= 0 future-loser)))

(defn next-gain [db state thing-name]
  "What is the next gain going to be if I tap something?"
  (let [db-key (u/find-db-key db thing-name)
        sub-db (db db-key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        thing-key (thing :key)
        gain-key (sub-db :gain)
        loss-key (sub-db :loss)
        thing-loss (thing :cost)
        gain-fn (sub-db :gain-fn)
        current-count (get-in state [:things thing-key] 0)
        future-count (inc current-count)
        thing-gain (gain-fn future-count thing-loss)]
    thing-gain))

(defn thing-count [state thing-key]
  (get-in state [:things thing-key] 0))