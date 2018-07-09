(ns data.db)

(def data
  {
    :product
    {
      :gain :money
      :gain-fn (fn [n word-cost] (/ word-cost (js/Math.log10 (+ 1 n))))
      :loss :clicks
      :items
      [
        {:key :slogan :name "Slogan" :cost 10 :ticker "Writing slogans don't seem to pay too well."}
        {:key :copy :name "Copy" :cost 100 :ticker "You now realise that nothing pays well."}
        {:key :blog-post :name "Blog post" :cost 600 :ticker "Remember to write some catchy link-bait for that."}
        {:key :newspaper-article :name "Newspaper article" :cost 1000 :ticker "You're glad you did that journalism course in college."}
        {:key :magazine-article :name "Magazine article" :cost 3500 :ticker "This is a bit more glamorous now, isn't it?"}
        {:key :short-story :name "Short story" :cost 7500 :ticker "Ah, the life of an author."}
        {:key :novella :name "Novella" :cost 30000 :ticker "Yes, let's publish now. Might as well get one in before the Big Work."}
        {:key :novel :name "Novel" :cost 80000}
        {:key :trilogy :name "Trilogy" :cost 240000}
        {:key :encyclopædia-insipida :name "Encyclopædia Insipida" :cost 44000000}]}

    :tool
    {
      :gain :add-every
      :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))
      :loss :money
      :items
      [
        {:key :pencil-grip :name "Pencil grip" :cost 1.5 :ticker "Ah, isn't that more comfortable."}
        {:key :notepad :name "Notepad" :cost 2}
        {:key :leather-bound-notepad :name "Leather-bound notepad" :cost 10}
        {:key :standing-desk :name "Standing desk" :cost 500}
        {:key :tablet-computer :name "Tablet computer" :cost 600}
        {:key :laptop :name "Laptop" :cost 1200}
        {:key :amanuensis :name "Amanuensis" :cost 3000}
        {:key :country-escape :name "Country escape" :cost 6000}]}
    :story
    {
      :items
      [
        {:text "You sit in front of a ream of papyrus with a piece of charcoal in your hand..." :when :genesis}]}})
