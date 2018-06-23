(ns data.sell)

(def stuff
{
    :take-fn #(/ % 2)
    :items [
        {:name "Slogan" :give 10}
        {:name "Copy" :give 100}
        {:name "Blog post" :give 600}
        {:name "Newspaper article" :give 1000}
        {:name "Magazine article" :give 3500}
        {:name "Short story" :give 7500}
        {:name "Novella" :give 30000}
        {:name "Novel" :give 80000}
        {:name "English Wikipedia" :give 3500000000}
        {:name "Wikipedia" :give 30000000000}
        ]
})