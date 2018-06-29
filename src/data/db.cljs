(ns data.db)

(def data
  {
    ; TODO :product reduces :clicks; increases :money (in state)
    :product
    {
      ; the product gain (aka income) is a function of the word cost, and it log-decays
      ; with respect to n - the number of ITEM I've sold.
      :gain-fn (fn [n word-cost] (/ word-cost (js/Math.log10 (+ 1 n))))

      ; there is no cost-fn, as the cost is associated with each item explicitly
      ; so we can just assign real-world values to items instead of calculating it
      ; algorithmically.

      ; the cost won't decay; even if you sell the same item for the Nth time
      ; it will still cost you X

      :items
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
        {:name "Wikipedia" :cost 30000000000}]}
    
    ; TODO :tool reduces :money; increases :add-every (in state)
    :tool
    {
      ; the gain (words per sec) is a function of the word cost,
      ; and it decays with respect to n.
      ; n = the number of UPGRADE I've bought.
      ; LOG(A3,B3+1), A3=money, B3=n
      :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))

      ; there is no cost-fn, as the cost is associated with each item explicitly
      ; so we can just assign real-world values to items instead of calculating it
      ; algorithmically.

      :items
      [
        {:name "Notepad" :cost 2}
        {:name "Moleskine" :cost 10}
        {:name "iPad" :cost 600}
        {:name "Laptop" :cost 1200}
        {:name "Amanuensis" :cost 3000}]}})
