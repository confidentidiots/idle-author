(ns data.sell)

(def stuff {
  ; the income is a function of the word cost, and it log-decays
  ; with respect to n - the number of ITEM I've sold.
  :income (fn [n word-cost] (/ word-cost (js/Math.log10 (+ 1 n))))

  :items [
    {:name "Slogan" :cost 10}
    {:name "Copy" :cost 100}
    {:name "Blog post" :cost 600}
    {:name "Newspaper article" :cost 1000}
    {:name "Magazine article" :cost 3500}
    {:name "Short story" :cost 7500}
    {:name "Novella" :cost 30000}
    {:name "Novel" :cost 80000}
    {:name "English Wikipedia" :cost 3500000000}
    {:name "Wikipedia" :cost 30000000000}
    ]
})