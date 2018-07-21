# Primer

Note: The common vocabulary for buying and selling is "tapping". Tap a product to sell it. Tap a tool to buy it.

# The data

Spread over many CLJS files, each serving a purpose:

- `loss.cljs` shows which key in the state is **decremented** and by how much when an item is tapped.
- `gain.cljs` shows which key in the state is **incremented** and by how much when an item is tapped.
- `name.cljs` is a name lookup which can be i18nised.
- `group.cljs` items grouped.
- `ticker.cljs` is shown in the ticker when you tap something for the first time.
- `dependency.cljs` is like "research" and shows which item(s) higher up in the tree unlocks this item.
- `function.cljs` gain and loss isn't always constant, and can be a function of some other parameters, like item quantity (i.e. the number of times you tapped an item).

# Ideas

## More tools

```
:flint :charcoal :reed-pen :pencil :quill :dip-pen :fountain-pen :ballpoint-pen :felt-tip-pen :roller-ball-pen
```

Papyrus, cuneiform clay tablets, rice paper, palm leaves, tree bark, vellum, deer skin, decorative gilt leather, chiseled marble, copper plates, silk scrolls for fastidious delectation, and so on. Electrons, ebooks, will find their role and level.

## Inflation

There is no equivalent "cost function" for any item. The cost is just associated with each item explicitly so we can just assign real-world values to items instead of calculating it algorithmically.

E.g. a laptop costs 1000 every time you buy one. It doesn't get progressively cheaper or more expensive. It just always costs 1000.

A cost-fn could be a function of time (or research levels which denote time, like "ages") to take into account inflation. With time, the money in the bank won't grow (to emulate real-world banks), but a laptop might get progressively more expensive.