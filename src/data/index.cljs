(ns data.index)

(def sell
  [
   {:name "Slogan" :words 10}
   {:name "Copy" :words 100}
   {:name "Blog post" :words 600}
   {:name "Newspaper article" :words 1000}
   {:name "Magazine article" :words 3500}
   {:name "Short story" :words 7500}
   {:name "Novella" :words 30000}
   {:name "Novel" :words 80000}
   {:name "English Wikipedia" :words 3500000000}
   {:name "Wikipedia" :words 30000000000}
   ])

(def multiplier (fn [n] (* n 2)))

(def upgrades [
    "-- ignored --"
    "Notepad"
    "Moleskine"
    "iPad"
    "Laptop"
    "Amanuensis"
    ])

(def products [
    "-- ignored --"
    "Slogan"
    "Copy"
    "Blog post"
    "Magazine article"
    "Newspaper article"
    "Short story"
    ])