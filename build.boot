; reference https://github.com/adzerk-oss/boot-cljs-example
(set-env!
  :dependencies '[
                  [adzerk/boot-cljs "2.1.4"]
                  [adzerk/boot-cljs-repl "0.3.3"]
                  [adzerk/boot-reload "0.5.2"]
                  [hoplon "7.2.0"]
                  [org.clojure/clojure "1.9.0"]
                  [org.clojure/core.async    "0.4.474"]
                  [org.clojure/clojurescript "1.10.339"]
                  [tailrecursion/boot-jetty  "0.1.3"]
                  [onetom/boot-lein-generate "0.1.3" :scope "test"]
    ;[adzerk/boot-test "1.2.0" :scope "test"]
                  [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]

                  [com.cemerick/piggieback "0.2.2"  :scope "test"]
                  [weasel                  "0.7.0"  :scope "test"]
                  [org.clojure/tools.nrepl "0.2.13" :scope "test"]
                  [funcool/cuerdas "2.0.5"]]

  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  ;'[boot.lein] ; generate project.clj for cursive/lein
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
        (test-cljs :js-env :slimer)))

(deftask test []
  (comp (testing)
        (test-cljs :js-env :slimer :exit? true)))

(deftask dev
  "Build clicker for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs :source-map true :optimizations :none)
    (serve :port 8000)))

(deftask prod
  "Build clicker for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"docs"})))

; for Cursive
; this has to run every time boot runs
; (boot.lein/generate)

(deftask dev2 []
  (comp (watch)
        (cljs-repl) ; order is important!!
        (cljs)))