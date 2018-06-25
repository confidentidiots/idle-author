(ns clicker.engine)

; (def state
;   (atom
;     { :clicks 0 :foo "bar"}))

(defn click [state]
  (swap! state update-in [:clicks] inc))

(defn- sell-atomic [thing state]
  (-> state
      (update-in [:things thing] (fnil inc 0))))
      
(defn sell [state thing]
  (swap! state (partial sell-atomic thing)))
  
