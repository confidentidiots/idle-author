(ns data.db)

(def data
  {
    :product
    {
      :gain :money
      :gain-fn (fn [n word-cost] (/ word-cost (js/Math.log10 (+ 1 n))))
      :loss :clicks
      :levels
      [
        {:key :genesis :name "Genesis" :clicks 0 :cost 0}
        {:key :poem :name "Poem" :clicks 1000 :cost 500 :ticker "You've invented the poem."}
        {:key :knowledge :name "Knowledge" :clicks 10000 :cost 5000 :ticker "After all these words, you're suddenly concerned with preserving knowledge."}
        {:key :journalism :name "Journalism" :clicks 1000000 :cost 500000 :ticker "You've invented Journalism. Bring your own soapbox!"}
        {:key :modern :name "Modern" :clicks 10000000 :cost 5000000 :ticker "You've entered the modern era."}]
      :items
      [
        {:key :gibberish :level [:genesis] :name "Gibberish" :cost 5 :ticker "Your first guttural utterance brings tears to your eyes."}
        {:key :chant :level [:genesis] :name "Chant" :cost 10 :ticker "You look up and see the moon, and the perfect circular form inspires you."}
        ;    idyll, haiku
        {:key :sonnet :level [:poem] :name "Sonnet" :cost 80 :ticker "The author looks on tempests and is never shaken."}
        {:key :ode :level [:poem] :name "Ode" :cost 110 :ticker "These words to me do seem apparelled in celestial light."}
        {:key :elegy :level [:poem] :name "Elegy" :cost 985 :ticker "Your pealing anthem swells the note of praise."}
        {:key :pastoral :level [:poem] :name "Pastoral poem" :cost 160 :ticker "Thy words are a thousand fragrant posies."}
        {:key :idyll :level [:poem] :name "Idyll" :cost 200}

        ; fortune-cookie :type chinese
        {:key :slogan :level [:modern] :name "Slogan" :cost 10 :ticker "Writing slogans don't seem to pay too well."}
        {:key :microblog-post :level [:modern] :name "Micro-blog post" :cost 20 :ticker "Your well-thought-out word disappears down an echo chamber."}
        {:key :copy :level [:modern] :name "Copy" :cost 100 :ticker "You now realise that nothing pays well."}
        {:key :blog-post :level [:modern] :name "Blog post" :cost 600 :ticker "Remember to write some catchy link-bait for that."}
        {:key :newspaper-article :level [:journalism] :name "Newspaper article" :cost 1000 :ticker "You're glad you did that journalism course in college."}
        {:key :magazine-article :level [:journalism] :name "Magazine article" :cost 3500 :ticker "This is a bit more glamorous now, isn't it?"}
        {:key :short-story :level [:modern] :name "Short story" :cost 7500 :ticker "Ah, the life of an author."}
        {:key :novella :level [:modern] :name "Novella" :cost 30000 :ticker "Yes, let's publish now. Might as well get one in before the Big Work."}
        {:key :novel :level [:modern] :name "Novel" :cost 80000}
        {:key :trilogy :level [:modern] :name "Trilogy" :cost 240000}

        {:key :textbook :level [:knowledge] :name "Textbook" :cost 150000}
        {:key :encyclopedia :level [:knowledge] :name "Encyclopedia" :cost 44000000}]}




    ; :flint :charcoal :reed-pen :pencil :quill :dip-pen :fountain-pen :ballpoint-pen :felt-tip-pen :roller-ball-pen
    ; Papyrus, cuneiform clay tablets, rice paper, palm leaves, tree bark, vellum, deer skin, decorative gilt leather, chiseled marble, copper plates, silk scrolls for fastidious delectation, and so on. Electrons, ebooks, will find their role and level.
    :tool
    {
      :gain :add-every
      :gain-fn (fn [n money-cost] (/ (js/Math.log money-cost) (js/Math.log (+ n 1))))
      :loss :money
      :levels
      [
        {:key :genesis :name "Genesis" :clicks 0 :cost 0 :ticker "You've just crawled out of the ocean and find a stick. Something urges you to draw in the sand..."}
        {:key :stone-age :name "Stone Age" :clicks 1000 :cost 500 :ticker "Sand washes away quickly. Good thing you've discovered the walls in your little cave."}
        {:key :modern :name "Modern" :clicks 10000 :cost 5000 :ticker "Ah, the modern age."}]

      :items
      [
        {:key :stick :level [:genesis] :name "Stick" :cost 1.1}
        {:key :sand :level [:genesis] :name "Sand" :cost 1.1}
        {:key :flint :level [:stone-age] :name "Flint" :cost 1.2}
        {:key :pencil-grip :level [:modern] :name "Pencil grip" :cost 1.5 :ticker "Ah, isn't that more comfortable?"}
        {:key :notepad :level [:modern] :name "Notepad" :cost 2}
        {:key :leather-bound-notepad :level [:modern] :name "Leather-bound notepad" :cost 10}
        {:key :standing-desk :level [:modern] :name "Standing desk" :cost 500}
        {:key :tablet-computer :level [:modern] :name "Tablet computer" :cost 600}
        {:key :laptop :level [:modern] :name "Laptop" :cost 1200}
        {:key :amanuensis :level [:modern] :name "Amanuensis" :cost 3000}
        {:key :country-escape :level [:modern] :name "Country escape" :cost 6000}]}

    :story
    {
      :items
      [
        {:text "You sit in front of a ream of papyrus with a piece of charcoal in your hand..." :when :genesis}]}})


;(map #(str ">> " (% :level)) (get-in data [:product :items]))
;(filter #(some #{:poem} (% :level) ) (get-in data [:product :items]))
;(some #{:poem} [:poem :lyric :ballad])
;(some #{:sonnet} [:poem :lyric :ballad])
