// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ui.status');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
goog.require('clicker.engine');
goog.require('data.db');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
ui.status.show_updates = (function() { 
var ui$status$show_updates__delegate = function (args__10022__auto__){
var vec__14623 = hoplon.core.parse_args(args__10022__auto__);
var map__14626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14623,(0),null);
var map__14626__$1 = ((((!((map__14626 == null)))?(((((map__14626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14626):map__14626);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14626__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14623,(1),null);
var ticker_text = (function (){var G__14637 = cljs.core.list("Welcome...");
var G__14638 = cljs.core.first;
var G__14639 = state;
var G__14640 = cljs.core.get_in;
var fexpr__14636 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14637,G__14638,G__14639,G__14640,vec__14623,map__14626,map__14626__$1,state,kids){
return (function (G__14631,G__14628,G__14630,G__14629){
var G__14641 = (function (){var G__14642 = G__14630;
var G__14643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ticker], null);
var G__14644 = G__14631;
return (G__14629.cljs$core$IFn$_invoke$arity$3 ? G__14629.cljs$core$IFn$_invoke$arity$3(G__14642,G__14643,G__14644) : G__14629.call(null,G__14642,G__14643,G__14644));
})();
return (G__14628.cljs$core$IFn$_invoke$arity$1 ? G__14628.cljs$core$IFn$_invoke$arity$1(G__14641) : G__14628.call(null,G__14641));
});})(G__14637,G__14638,G__14639,G__14640,vec__14623,map__14626,map__14626__$1,state,kids))
);
return (fexpr__14636.cljs$core$IFn$_invoke$arity$4 ? fexpr__14636.cljs$core$IFn$_invoke$arity$4(G__14637,G__14638,G__14639,G__14640) : fexpr__14636.call(null,G__14637,G__14638,G__14639,G__14640));
})();
var G__14645 = cljs.core.cst$kw$class;
var G__14646 = "ticker";
var G__14647 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(ticker_text) : hoplon.core.p.call(null,ticker_text));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14645,G__14646,G__14647) : hoplon.core.div.call(null,G__14645,G__14646,G__14647));
};
var ui$status$show_updates = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__14648__i = 0, G__14648__a = new Array(arguments.length -  0);
while (G__14648__i < G__14648__a.length) {G__14648__a[G__14648__i] = arguments[G__14648__i + 0]; ++G__14648__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__14648__a,0,null);
} 
return ui$status$show_updates__delegate.call(this,args__10022__auto__);};
ui$status$show_updates.cljs$lang$maxFixedArity = 0;
ui$status$show_updates.cljs$lang$applyTo = (function (arglist__14649){
var args__10022__auto__ = cljs.core.seq(arglist__14649);
return ui$status$show_updates__delegate(args__10022__auto__);
});
ui$status$show_updates.cljs$core$IFn$_invoke$arity$variadic = ui$status$show_updates__delegate;
return ui$status$show_updates;
})()
;
