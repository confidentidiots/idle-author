(ns data.group)

(def data
  {
    :genesis [:product-level :tool-level]
    :modern [:product-level :tool-level]

    ; product research
    :poem [:product-level]
    :knowledge [:product-level]
    :journalism [:product-level]

    ; tool research
    :stone-age [:tool-level]

    ; product
    :gibberish [:product]
    :chant [:product]
    :sonnet [:product]
    :ode [:product]
    :elegy [:product]
    :pastoral [:product]
    :idyll [:product]
    :haiku [:product]
    :fortune-cookie [:product]
    :slogan [:product]
    :microblog-post [:product]
    :copy [:product]
    :blog-post [:product]
    :newspaper-article [:product]
    :magazine-article [:product]
    :short-story [:product]
    :novella [:product]
    :novel [:product]
    :trilogy [:product]
    :textbook [:product]
    :encyclopedia [:product]

    ; tool
    :stick [:tool]
    :sand [:tool]
    :flint [:tool]
    :pencil-grip [:tool]
    :notepad [:tool]
    :leather-bound-notepad [:tool]
    :standing-desk [:tool]
    :tablet-computer [:tool]
    :laptop [:tool]
    :amanuensis [:tool]
    :country-escape [:tool]})

; (filter (fn [[k v]] (some (partial = :product-level) v)) data)
; (map #(first %) (filter (fn [[k v]] (some (partial = :product-level) v)) data))
