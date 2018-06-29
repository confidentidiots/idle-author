(ns clicker.stateless)

(defn gain [db key thing-name n]
  "Given a thing (like a tool or product as indicated by 'key'),
  if I tap (i.e. buy/sell) it the Nth time
  what is the gain as per the gain-fn?"
  (let [sub-db (db key)
        gain-fn (sub-db :gain-fn)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        cost (thing :cost)]
      
      (gain-fn n cost)))

(defn tap [db key state thing-name]
  "Given I tap a thing, make changes to the current game state
  and return the game state."
  (let [sub-db (db key)
        thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
        gain-key (sub-db :gain)
        loss-key (sub-db :loss)
        current-count (get-in state [:things thing-name] 0)
        future-count (inc current-count)
        thing-gain (gain db key thing-name future-count)
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
