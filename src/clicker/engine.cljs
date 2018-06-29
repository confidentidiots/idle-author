(ns clicker.engine
  (:require [clicker.stateless :as s]))

; (def state
;   (atom
;     { :clicks 0}))

(defn click [state]
  (swap! state update-in [:clicks] inc))
      

(defn sell [state thing]
  (swap! state (partial s/sell thing)))

; (def x (atom {:things {"bar" 1}}))
; (@x :things)
; (get-in @x [:things "bar"])
; (get-in @x [:things "foo"] 9)

; (def add-nine (partial + 9))
; (add-nine 7)