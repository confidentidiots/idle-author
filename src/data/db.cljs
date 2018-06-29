(ns data.db)

; products are sold, and tools are bought.
; but common word for buy/sell is tap/tapping
(def data
  {
    :product
    {
      :tap
      {
        :up :money
        :down :clicks}
      :gain-fn (fn [n word-cost] (/ word-cost (js/Math.log10 (+ 1 n))))
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
    
    :tool
    {
      :tap
      {
        :up :add-every
        :down :money}
      :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))
      :items
      [
        {:name "Notepad" :cost 2}
        {:name "Moleskine" :cost 10}
        {:name "iPad" :cost 600}
        {:name "Laptop" :cost 1200}
        {:name "Amanuensis" :cost 3000}]}})
