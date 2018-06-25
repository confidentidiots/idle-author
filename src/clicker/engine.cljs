(ns clicker.engine
  (:require [clicker.stateless :refer [income gain]]))

(def state
  (atom
    { :clicks 0}))

(defn click [state]
  (swap! state update-in [:clicks] inc))

(defn- sell-atomic [thing state]
  (let [current-count (get-in state [:things thing] 0)
        future-count (inc current-count)
        thing-income (income thing future-count)
        inc-money (partial + thing-income)]
    ; (print "future count " future-count " income " thing-income)
    (-> state
      ; record that we sold one more of thing
      (update-in [:things thing] (fnil inc 0))
      (update-in [:money] (fnil inc-money 0)))))

(defn sell [state thing]
  (swap! state (partial sell-atomic thing)))

; (def x (atom {:things {"bar" 1}}))
; (@x :things)
; (get-in @x [:things "bar"])
; (get-in @x [:things "foo"] 9)

; (def add-nine (partial + 9))
; (add-nine 7)