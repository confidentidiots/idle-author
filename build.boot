(set-env!
  :dependencies '[[adzerk/boot-cljs "2.1.4"]
[adzerk/boot-reload "0.5.2"]
[hoplon "7.2.0"]
[org.clojure/clojure "1.10.0-alpha4"]
[org.clojure/clojurescript "1.10.238"]
                  [tailrecursion/boot-jetty  "0.1.3"]]
  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(deftask dev
  "Build clicker for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs)
    (serve :port 8000)))

(deftask prod
  "Build clicker for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"docs"})))
