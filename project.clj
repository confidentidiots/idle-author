(defproject
  boot-project
  "0.0.0-SNAPSHOT"
  :repositories
  [["clojars" {:url "https://repo.clojars.org/"}]
   ["maven-central" {:url "https://repo1.maven.org/maven2"}]]
  :dependencies
  [[adzerk/boot-cljs "2.1.4"]
   [adzerk/boot-cljs-repl "0.3.0" :scope "test"]
   [adzerk/boot-reload "0.5.2"]
   [hoplon "7.2.0"]
   [org.clojure/clojure "1.9.0"]
   [org.clojure/clojurescript "1.10.312"]
   [tailrecursion/boot-jetty "0.1.3"]
   [onetom/boot-lein-generate "0.1.3" :scope "test"]
   [crisptrutski/boot-cljs-test "0.3.5-20171003.083024-1"]]
  :source-paths
  ["src"]
  :resource-paths
  [])