(ns data.gain)

(def data
  {
      ; tapping research doesn't gain anything apart from the research itself.

      ; product
      :gibberish { :money :gain-fn-products}
      :chant { :money :gain-fn-products}
      :sonnet { :money :gain-fn-products}
      :ode { :money :gain-fn-products}
      :elegy { :money :gain-fn-products}
      :pastoral { :money :gain-fn-products}
      :idyll { :money :gain-fn-products}
      :haiku { :money :gain-fn-products}
      :fortune-cookie { :money :gain-fn-products}
      :slogan { :money :gain-fn-products}
      :microblog-post { :money :gain-fn-products}
      :copy { :money :gain-fn-products}
      :blog-post { :money :gain-fn-products}
      :newspaper-article { :money :gain-fn-products}
      :magazine-article { :money :gain-fn-products}
      :short-story { :money :gain-fn-products}
      :novella { :money :gain-fn-products}
      :novel { :money :gain-fn-products}
      :trilogy { :money :gain-fn-products}
      :textbook { :money :gain-fn-products}
      :encyclopedia { :money :gain-fn-products}

      ; tool
      :stick { :add-every :gain-fn-tools}
      :sand { :add-every :gain-fn-tools}
      :flint { :add-every :gain-fn-tools}
      :pencil-grip { :add-every :gain-fn-tools}
      :notepad { :add-every :gain-fn-tools}
      :leather-bound-notepad { :add-every :gain-fn-tools}
      :standing-desk { :add-every :gain-fn-tools}
      :tablet-computer { :add-every :gain-fn-tools}
      :laptop { :add-every :gain-fn-tools}
      :amanuensis { :add-every :gain-fn-tools}
      :country-escape { :add-every :gain-fn-tools}})
