Non-exhaustive examples of the different cogs in the game engine.

# (Work) Product

Work product is something you can sell.

Example:

```clojure
{
  :name "Novella"
  :give 7500 ; words
  :take 5000 ; money
  :research [ "writing" ] ; depends on this
}
```

# Tools and upgrades

The things and materials you use to make work product with.

Example:

```clojure
{
  :name "laptop"
  :give 1000 ; money
  :take 100  ; words per second
  :research [ "tech" ] ; depends on this
}
```
Example: 

```clojure
{
  :name "faster CPU"
  :give 100 ; money
  :take-fn #()  ; words per second
  :research [ "tech" ] ; depends on this
}
```

# Research

Research breaks new ground and makes for better and faster tools and sharper and more efficient skills.

Example:

```clojure
{
  :name "tech"
  :words 1000000  ; this can be researched after 1M words have been written
  :money 10000000 ; this can be researched for 10M money
}
```

# Disasters

Life is not perfect. Every so often disaster strikes. You can mitigate against some of it, though.

Example:

```clojure
{
  :name "flood"
  :words 10000 ; lose 10K words worth of work when it floods
  :money 5000  ; cost to recover
  research: [ "cloud_backup" ] ; prevented by
}
```