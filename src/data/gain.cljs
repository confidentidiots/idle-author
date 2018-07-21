(ns data.gain)

(def data
  {
      ; tapping research doesn't gain anything apart from the research itself.

      ; product
      :gibberish { :money :decay-fn-products}
      :chant { :money :decay-fn-products}
      :sonnet { :money :decay-fn-products}
      :ode { :money :decay-fn-products}
      :elegy { :money :decay-fn-products}
      :pastoral { :money :decay-fn-products}
      :idyll { :money :decay-fn-products}
      :haiku { :money :decay-fn-products}
      :fortune-cookie { :money :decay-fn-products}
      :slogan { :money :decay-fn-products}
      :microblog-post { :money :decay-fn-products}
      :copy { :money :decay-fn-products}
      :blog-post { :money :decay-fn-products}
      :newspaper-article { :money :decay-fn-products}
      :magazine-article { :money :decay-fn-products}
      :short-story { :money :decay-fn-products}
      :novella { :money :decay-fn-products}
      :novel { :money :decay-fn-products}
      :trilogy { :money :decay-fn-products}
      :textbook { :money :decay-fn-products}
      :encyclopedia { :money :decay-fn-products}

      ; tool
      :stick { :add-every :decay-fn-tools}
      :sand { :add-every :decay-fn-tools}
      :flint { :add-every :decay-fn-tools}
      :pencil-grip { :add-every :decay-fn-tools}
      :notepad { :add-every :decay-fn-tools}
      :leather-bound-notepad { :add-every :decay-fn-tools}
      :standing-desk { :add-every :decay-fn-tools}
      :tablet-computer { :add-every :decay-fn-tools}
      :laptop { :add-every :decay-fn-tools}
      :amanuensis { :add-every :decay-fn-tools}
      :country-escape { :add-every :decay-fn-tools}})
