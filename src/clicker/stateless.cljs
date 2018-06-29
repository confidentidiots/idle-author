(ns clicker.stateless)
  
(defn income [db thing n]
  "Given a thing, if I sell it the Nth time, what is the income?"
  (let [items (db :products)
        item (first (filter #(= thing (% :name)) items))
        income-fn (db :income)
        word-cost (item :cost)]

    (income-fn n word-cost)))

(defn gain [db upgrade-name n]
  "Given an upgrade, if I buy it the Nth time, what is the gain?"
  (let [upgrades (db :tools)
        upgrade (first (filter #(= upgrade-name (% :name)) upgrades))
        gain-fn (db :gain-fn)
        money-cost (upgrade :cost)]
      
      (gain-fn n money-cost)))

(defn- sell [db state thing]
  (let [current-count (get-in state [:things thing] 0)
        future-count (inc current-count)
        thing-income (income db thing future-count)
        inc-money (partial + thing-income)]
    (-> state
      ; record that we sold one more of thing
      (update-in [:things thing] (fnil inc 0))
      ; add income
      (update-in [:money] (fnil inc-money 0)))))
      ; subtract words
      ;(update-in [:clicks] (fnil dec 0)))))
