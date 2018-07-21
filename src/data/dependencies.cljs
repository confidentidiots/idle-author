(ns data.dependencies)

(def data
  {
    ;:genesis [nil]

    ; product research
    :poem [:genesis]
    :knowledge [:poem]
    :journalism [:knowledge]
    :modern [:journalism]

    ; tool research
    :stone-age [:genesis]
    :modern [:stone-age]

    ; product
    :gibberish [:genesis]
    :chant [:genesis]
    :sonnet [:poem]
    :ode [:poem]
    :elegy [:poem]
    :pastoral [:poem]
    :idyll [:poem]
    :haiku [:poem]
    :fortune-cookie [:modern]
    :slogan [:modern]
    :microblog-post [:modern]
    :copy [:modern]
    :blog-post [:modern]
    :newspaper-article [:journalism]
    :magazine-article [:journalism]
    :short-story [:modern]
    :novella [:modern]
    :novel [:modern]
    :trilogy [:modern]
    :textbook [:knowledge]
    :encyclopedia [:knowledge]

    ; tool
    :stick [:genesis]
    :sand [:genesis]
    :flint [:stone-age]
    :pencil-grip [:modern]
    :notepad [:modern]
    :leather-bound-notepad [:modern]
    :standing-desk [:modern]
    :tablet-computer [:modern]
    :laptop [:modern]
    :amanuensis [:modern]
    :country-escape [:modern]})
