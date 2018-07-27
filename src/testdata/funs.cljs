(ns testdata.funs)

(def data
  {
    :gain-fn (fn [quantity loss] (* loss quantity))
    :loss-fn (fn [quantity gain] (* gain quantity))})

