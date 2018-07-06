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
        {:name "Slogan" :cost 10 :ticker "Writing slogans don't seem to pay too well."}
        {:name "Copy" :cost 100 :ticker "You now realise that nothing pays well."}
        {:name "Blog post" :cost 600 :ticker "Remember to write some catchy link-bait for that."}
        {:name "Newspaper article" :cost 1000 :ticker "You're glad you did that journalism course in college."}
        {:name "Magazine article" :cost 3500 :ticker "This is a bit more glamorous now, isn't it?"}
        {:name "Short story" :cost 7500 :ticker "Ah, the life of an author."}
        {:name "Novella" :cost 30000 :ticker "Yes, let's publish now. Might as well get one in before the Big Work."}
        {:name "Novel" :cost 80000}
        {:name "Trilogy" :cost 240000}
        {:name "Encyclopædia Insipida" :cost 44000000}]}

    :tool
    {
      :gain :add-every
      :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))
      :loss :money
      :items
      [
        {:name "Pencil grip" :cost 1 :ticker "Ah, isn't that more comfortable."}
        {:name "Notepad" :cost 2}
        {:name "Moleskine" :cost 10}
        {:name "Standing desk" :cost 500}
        {:name "iPad" :cost 600}
        {:name "Laptop" :cost 1200}
        {:name "Amanuensis" :cost 3000}
        {:name "Country escape" :cost 6000}]}
    :story
    {
      :items
      [
        {:text "You sit in front of a ream of papyrus with a piece of charcoal in your hand..." :when :genesis}]}})



