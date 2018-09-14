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
var thing = (function (){var fexpr__14630 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14623,map__14626,map__14626__$1,state,kids){
return (function (G__14629,G__14628){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14628.cljs$core$IFn$_invoke$arity$1 ? G__14628.cljs$core$IFn$_invoke$arity$1(G__14629) : G__14628.call(null,G__14629)))].join('');
});})(vec__14623,map__14626,map__14626__$1,state,kids))
);
return (fexpr__14630.cljs$core$IFn$_invoke$arity$2 ? fexpr__14630.cljs$core$IFn$_invoke$arity$2(state,clicker.engine.get_latest_new_thing) : fexpr__14630.call(null,state,clicker.engine.get_latest_new_thing));
})();
var ticker_text = (function (){var fexpr__14633 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (thing,vec__14623,map__14626,map__14626__$1,state,kids){
return (function (G__14632,G__14631){
return (G__14631.cljs$core$IFn$_invoke$arity$1 ? G__14631.cljs$core$IFn$_invoke$arity$1(G__14632) : G__14631.call(null,G__14632));
});})(thing,vec__14623,map__14626,map__14626__$1,state,kids))
);
return (fexpr__14633.cljs$core$IFn$_invoke$arity$2 ? fexpr__14633.cljs$core$IFn$_invoke$arity$2(state,clicker.engine.get_latest_ticker) : fexpr__14633.call(null,state,clicker.engine.get_latest_ticker));
})();
var G__14634 = cljs.core.cst$kw$class;
var G__14635 = "ticker";
var G__14636 = (function (){var G__14637 = (function (){var fexpr__14644 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14634,G__14635,thing,ticker_text,vec__14623,map__14626,map__14626__$1,state,kids){
return (function (G__14639,G__14640){
var G__14645 = cljs.core.cst$kw$style;
var G__14646 = "padding-right: 20px";
var G__14647 = G__14640;
return (G__14639.cljs$core$IFn$_invoke$arity$3 ? G__14639.cljs$core$IFn$_invoke$arity$3(G__14645,G__14646,G__14647) : G__14639.call(null,G__14645,G__14646,G__14647));
});})(G__14634,G__14635,thing,ticker_text,vec__14623,map__14626,map__14626__$1,state,kids))
);
return (fexpr__14644.cljs$core$IFn$_invoke$arity$2 ? fexpr__14644.cljs$core$IFn$_invoke$arity$2(hoplon.core.strong,thing) : fexpr__14644.call(null,hoplon.core.strong,thing));
})();
var G__14638 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1(ticker_text) : hoplon.core.span.call(null,ticker_text));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__14637,G__14638) : hoplon.core.p.call(null,G__14637,G__14638));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14634,G__14635,G__14636) : hoplon.core.div.call(null,G__14634,G__14635,G__14636));
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
