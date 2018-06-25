(ns clicker.engine)

; (def state
;   (atom
;     { :clicks 0 :foo "bar"}))

(defn click [state]
  (swap! state update-in [:clicks] inc))

; (defn sell [thing])