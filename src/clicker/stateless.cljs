(ns clicker.stateless)

(defn gain [db key thing-name n]
  "Given a thing (like a tool or product as indicated by 'key'),
  if I buy/sell it the Nth time
  what is the gain as per the gain-fn?"
  (let [sub-db (db key)
        things (sub-db :items)
        gain-fn (sub-db :gain-fn)
        thing (first (filter #(= thing-name (% :name)) things))
        cost (thing :cost)]
      
      (gain-fn n cost)))

(defn- sell [db state thing]
  (let [current-count (get-in state [:things thing] 0)
        future-count (inc current-count)
        thing-income (gain :product db thing future-count)
        inc-money (partial + thing-income)]
    (-> state
      ; record that we sold one more of thing
      (update-in [:things thing] (fnil inc 0))
      ; add income
      (update-in [:money] (fnil inc-money 0)))))
      ; subtract words
      ;(update-in [:clicks] (fnil dec 0)))))
