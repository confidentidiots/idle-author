# Introduction

The game DB can contain anything which can conceivably be incremented (via clicks!), sold, and bought.

In our case, the items are:

- `:product` is something you can sell, trading `:clicks` for `:money` (this can also be called "work product" because clicking is hard work!)
- `:tool` is something you can buy, trading `:money` for `:add-every`

`:add-every` is the amount of clicks that get added back to `:clicks` every second.

# Item data

## `:items`

This is a list of item `:name`s and `:cost`s.

### `:product`

The cost is the number of clicks.

### `:tool`

The cost is money.

## `:gain-fn`
 
### `:product`

When selling a product, its `:gain-fn` determines the income and it is a function of N (the number of a product I've sold), which decays with increasing N.

In other words, when you sell product X the first time (N=1), you make X1 amount income.
When you sell product X the second time (N=2), you make X2 amount income, where X2 is smaller than X1.

### `:tool`

When buying a tool, its `:gain-fn` determines its clicks-per-second benefit and it is a function of N (the number of a tool I've bought), which decays with increasing N.

## `:gain` and `:loss`

When buying or selling stuff, different variables in the game state increase (`:gain`) and decrease (`:loss`). E.g. when selling product, you generally `:gain` more `:money`.

*Note: The common vocabulary for buying and selling is "tapping". Tap a product to sell it. Tap a tool to buy it.*

## Other

There is no equivalent "cost function" for any item. The cost is just associated with each item explicitly so we can just assign real-world values to items instead of calculating it algorithmically.

E.g. a laptop costs 1000 every time you buy one. It doesn't get progressively cheaper or more expensive. It just always costs 1000.

TODO (idea) a cost-fn could be a function of time to take into account inflation. With time, the money in the bank won't grow (to emulate real-world banks), but a laptop might get progressively more expensive.