(set-env!
  :dependencies '[
    [adzerk/boot-cljs "2.1.4"]
    [adzerk/boot-cljs-repl "0.3.0" :scope "test"]
    [adzerk/boot-reload "0.5.2"]
    [hoplon "7.2.0"]
    [org.clojure/clojure "1.9.0"]
    [org.clojure/clojurescript "1.10.312"]
    [tailrecursion/boot-jetty  "0.1.3"]
    [onetom/boot-lein-generate "0.1.3" :scope "test"]
    ;[adzerk/boot-test "1.2.0" :scope "test"]
    [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]
    ]
  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[boot.lein] ; generate project.clj for cursive/lein
  ;'[adzerk.boot-test :refer :all] ; boot watch test
  '[crisptrutski.boot-cljs-test :refer [test-cljs]]
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(deftask testing [] (merge-env! :source-paths #{"src"}) identity)

(deftask auto-test []
  (comp (testing)
        (watch)
        (speak)
        (test-cljs)))

(deftask test []
  (comp (testing)
        (test-cljs :exit? true)))

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

; this has to run every time boot runs
(boot.lein/generate)