// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('data.funs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * When selling an item, its `:gain-fn` determines the sales income.
 *   It is a function of
 *   - `quantity` (the number of a items I've tapped), which decays with increasing `quantity`.
 *   - the first loss as returned by: (val (first (db/item-loss thing)))
 * 
 *   In other words, when you sell a product the first time (quantity=1), you make X amount income.
 *   When you sell that product the second time (quantity=2), you make Y amount income, where Y is smaller than X.
 * 
 *   Ditto for any `:loss-fn`
 */
data.funs.data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gain_DASH_fn_DASH_products,(function (quantity,loss){
return (loss / Math.log10(((1) + quantity)));
}),cljs.core.cst$kw$gain_DASH_fn_DASH_tools,(function (quantity,loss){
return (Math.log(loss) / Math.log((quantity + (1))));
})], null);
