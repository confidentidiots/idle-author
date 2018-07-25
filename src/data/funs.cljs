(ns data.funs)

(def data
  "When selling an item, its `:gain-fn` determines the sales income.
  It is a function of
  - `quantity` (the number of a items I've tapped), which decays with increasing `quantity`.
  - the first loss as returned by: (val (first (db/item-loss thing)))

  In other words, when you sell a product the first time (quantity=1), you make X amount income.
  When you sell that product the second time (quantity=2), you make Y amount income, where Y is smaller than X.

  Ditto for any `:loss-fn`"
  {
    :gain-fn-products (fn [quantity loss] (/ loss (js/Math.log10 (+ 1 quantity))))
    :gain-fn-tools (fn [quantity loss] (/ (js/Math.log loss) (js/Math.log (+ quantity 1))))})

