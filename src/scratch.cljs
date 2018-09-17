
(def data
  {
    ; product research
    :product-level [:genesis :poem :knowledge :journalism :modern]

    ; tool research
    :tool-level [:genesis :stone-age :modern]

    ; product
    :product
    [
      :gibberish
      :chant
      :sonnet
      :ode
      :elegy
      :pastoral
      :idyll
      :haiku
      :fortune-cookie
      :slogan
      :microblog-post
      :copy
      :blog-post
      :newspaper-article
      :magazine-article
      :short-story
      :novella
      :novel
      :trilogy
      :textbook
      :encyclopedia]

    ; tool
    :tool
    [
      :stick
      :sand
      :flint
      :pencil-grip
      :notepad
      :leather-bound-notepad
      :standing-desk
      :tablet-computer
      :laptop
      :amanuensis
      :country-escape]})



(def x (data :product))
x
(some #{:chant} x)

(defn match [thing coll]
  (if (some #{thing} coll)
    true
    false))

(first (first (filter #(match :chant (second %)) data)))

(defn get-group-for [thing]
  (first (first (filter #(some #{thing} (second %)) data))))

(get-group-for :chant)
(get-group-for :rubbish)