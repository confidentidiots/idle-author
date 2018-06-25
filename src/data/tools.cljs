(ns data.tools)

(def stuff 
  {
    ; the gain (words per sec) is a function of the word cost,
    ; and it decays with respect to n.
    ; n = the number of UPGRADE I've bought.
    ; LOG(A3,B3+1), A3=money, B3=n
    :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))

    :items [
            {:name "Notepad" :cost 2}
            {:name "Moleskine" :cost 10}
            {:name "iPad" :cost 600}
            {:name "Laptop" :cost 1200}
            {:name "Amanuensis" :cost 3000}]})