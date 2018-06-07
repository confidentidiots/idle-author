(ns data.index)

(def multiplier (fn [n] (* n 2)))

(def upgrades
    ["Notepad", "Moleskine", "iPad", "Laptop", "Amanuensis"])
(def products
    ["Slogan", "Copy", "Blog post", "Magazine article", "Newspaper article", "Short story"])

(def data
    {
        10 {
            :text "Notepad"
            :bump 1
        }
        100 {
            :text "Moleskine"
            :bump 2
        }
        1000 {
            :text "iPad"
            :bump 4
        }
    })

(def sale
    {
        10 {
            :text "Slogan"
            :bump 1
        }
        100 {
            :text "Copy"
            :bump 2
        }
        1000 {
            :text "Article"
            :bump 4
        }
        10000 {
            :text "Short Story"
            :bump 5
        }
    })