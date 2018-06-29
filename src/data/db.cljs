(ns data.db)

(def data
  {
    ; the income is a function of the word cost, and it log-decays
    ; with respect to n - the number of ITEM I've sold.
    :income (fn [n word-cost] (/ word-cost (js/Math.log10 (+ 1 n))))

    ; the gain (words per sec) is a function of the word cost,
    ; and it decays with respect to n.
    ; n = the number of UPGRADE I've bought.
    ; LOG(A3,B3+1), A3=money, B3=n
    :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))

    :products
    [
      {:name "Slogan" :cost 10}
      {:name "Copy" :cost 100}
      {:name "Blog post" :cost 600}
      {:name "Newspaper article" :cost 1000}
      {:name "Magazine article" :cost 3500}
      {:name "Short story" :cost 7500}
      {:name "Novella" :cost 30000}
      {:name "Novel" :cost 80000}
      {:name "English Wikipedia" :cost 3500000000}
      {:name "Wikipedia" :cost 30000000000}]
            
    :tools
    [
      {:name "Notepad" :cost 2}
      {:name "Moleskine" :cost 10}
      {:name "iPad" :cost 600}
      {:name "Laptop" :cost 1200}
      {:name "Amanuensis" :cost 3000}]})
