(ns clicker.stateless
  (:require
    [clicker.util :as u]
    [clojure.set]
    [data.db :as db]))


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

(defn apply-gain1 [k v state thing quantity]
  (if (number? v)
    (update-in state [k] (fnil (* quantity v) 0))
    (let [quantities (future-quantities state thing quantity)
          thing-loss (val (first (data.db/item-loss thing)))
          gain-fn (data.db/item-function v)
          thing-gain (reduce + (map #(gain-fn % thing-loss) quantities))
          gain-amount (partial + thing-gain)]
      (update-in state [k] (fnil gain-amount 0)))))


(defn apply-gain [state thing & {:keys [quantity] :or {quantity 1}}]
  "Get the :gain data for thing, and apply it to the state :quantity times"
  (let [gain (data.db/item-gain thing)
        ; gain = { :money :gain-fn-products}
        states (reduce (fn [st [k v]] (apply-gain1 k v st thing quantity)) state gain)]
    states))

;
(data.gain/data :slogan)
(future-quantities {} :slogan 1)
(data.db/item-loss :slogan)
(val (first {:clicks 10}))
(map val {:clicks 10})
(number? :gain-fn-products)
(data.db/item-function :gain-fn-products)
(apply-gain1 :money :gain-fn-products {} :slogan 1)
(reduce (fn [state [k v]] (apply-gain1 k v state :slogan 2)) {} (data.gain/data :slogan))
(reduce (fn [state [k v]] (apply-gain1 k v state :copy 1)) {:money 54.17831369176747} (data.gain/data :slogan))

; TODO fix below
(defn tap [state thing & {:keys [n] :or {n 1}}]
  "Given I tap a thing, make changes to the current game state
  and return the game state.
  It's up to the caller to wrap this with 'can-tap?'"
  (let [gain (db/item-gain thing) ; e.g. { :money :gain-fn-products}
        loss (db/item-loss thing)] ; e.g. { :clicks 1000 :money 500}
        ; is :gain a function or a number?
        ; gains (map (fn [[k v]] (xxx k v)) gain)]

        ; thing-loss (thing :cost)

        ; thing-gain (reduce + (map #(gain-fn % thing-loss) future-spread))
        ; gain-amount (partial + thing-gain)]
        ; loss-amount (partial + (- (* n thing-loss)))]))
      (println (str " >>> " loss))))

    ; (-> state
    ;   ; record that we've tapped one more of this thing
    ;   (update-in [:things thing] (fnil #(+ % n) 0))
    ;   ; you gain some
    ;   (update-in [gain-key] (fnil gain-amount 0))
    ;   ; you lose some
    ;   (update-in [loss-key] (fnil loss-amount 0)))))



;

(defn can-tap? [db state thing-name & {:keys [n] :or {n 1}}]
  true)

; (defn can-tap? [db state thing-name & {:keys [n] :or {n 1}}]
;   "Can I tap a thing n times? Not if its loss goes below zero."
;   (let [db-key (u/find-db-key db thing-name)
;         sub-db (db db-key)
;         thing (first (filter #(= thing-name (% :name)) (sub-db :items)))
;         loss-key (sub-db :loss)
;         thing-loss (thing :cost)
;         current-loser (state loss-key 0)
;         future-loser (- current-loser (* n thing-loss))]

;     (<= 0 future-loser)))

; (defn next-gain [db state thing]
;   "What is the next gain going to be if I tap something?"
;   (let [gain-key (sub-db :gain)
;         loss-key (sub-db :loss)
;         thing-loss (thing :cost)
;         gain-fn (sub-db :gain-fn)
;         current-count (get-in state [:things thing-key] 0)
;         future-count (inc current-count)
;         thing-gain (gain-fn future-count thing-loss)]
;     thing-gain))



; TODO call this reached-levels-keys
; and make reached-levels the list with the full objects.
; Ditto for unreached-levels
; (defn reached-levels [data state group]
;   "Get current reached levels (research) and default to first."
;   (let [levels (get-in data [group :levels])
;         default-level (:key (first levels))
;         reached-levels (get-in state [:levels group] [default-level])]
;       reached-levels))

; (defn unreached-levels [data state group]
;   "Get current un-reached levels (research)."
;   (let [levels (get-in data [group :levels])
;         levels-keys (map :key levels)
;         reached-levels (reached-levels data state group)
;         unreached-levels (clojure.set/difference (set levels-keys) (set reached-levels))]
;       (vec unreached-levels)))

; (defn get-level [data group level-key]
;   (let [levels (get-in data [group :levels :items])
;         the-level (first (filter #(= level-key (% :key)) levels))]
;       the-level))
