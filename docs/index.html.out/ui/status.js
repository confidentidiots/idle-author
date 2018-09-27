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
var ui$status$show_updates__delegate = function (args__9938__auto__){
var vec__10801 = hoplon.core.parse_args(args__9938__auto__);
var map__10804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10801,(0),null);
var map__10804__$1 = ((((!((map__10804 == null)))?(((((map__10804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10804):map__10804);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10804__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10801,(1),null);
var latest_thing = (function (){var fexpr__10808 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10801,map__10804,map__10804__$1,state,kids){
return (function (G__10807,G__10806){
return (G__10806.cljs$core$IFn$_invoke$arity$1 ? G__10806.cljs$core$IFn$_invoke$arity$1(G__10807) : G__10806.call(null,G__10807));
});})(vec__10801,map__10804,map__10804__$1,state,kids))
);
return (fexpr__10808.cljs$core$IFn$_invoke$arity$2 ? fexpr__10808.cljs$core$IFn$_invoke$arity$2(state,clicker.engine.get_latest_new_thing) : fexpr__10808.call(null,state,clicker.engine.get_latest_new_thing));
})();
var latest_thing_group = (function (){var fexpr__10811 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (latest_thing,vec__10801,map__10804,map__10804__$1,state,kids){
return (function (G__10810,G__10809){
return (G__10809.cljs$core$IFn$_invoke$arity$1 ? G__10809.cljs$core$IFn$_invoke$arity$1(G__10810) : G__10809.call(null,G__10810));
});})(latest_thing,vec__10801,map__10804,map__10804__$1,state,kids))
);
return (fexpr__10811.cljs$core$IFn$_invoke$arity$2 ? fexpr__10811.cljs$core$IFn$_invoke$arity$2(latest_thing,clicker.engine.db_group_by_item) : fexpr__10811.call(null,latest_thing,clicker.engine.db_group_by_item));
})();
var ticker_text = (function (){var fexpr__10814 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (latest_thing,latest_thing_group,vec__10801,map__10804,map__10804__$1,state,kids){
return (function (G__10813,G__10812){
return (G__10812.cljs$core$IFn$_invoke$arity$1 ? G__10812.cljs$core$IFn$_invoke$arity$1(G__10813) : G__10812.call(null,G__10813));
});})(latest_thing,latest_thing_group,vec__10801,map__10804,map__10804__$1,state,kids))
);
return (fexpr__10814.cljs$core$IFn$_invoke$arity$2 ? fexpr__10814.cljs$core$IFn$_invoke$arity$2(state,clicker.engine.get_latest_ticker) : fexpr__10814.call(null,state,clicker.engine.get_latest_ticker));
})();
var G__10815 = cljs.core.cst$kw$class;
var G__10816 = "ticker";
var G__10817 = (function (){var G__10818 = (function (){var fexpr__10826 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10815,G__10816,latest_thing,latest_thing_group,ticker_text,vec__10801,map__10804,map__10804__$1,state,kids){
return (function (G__10822,G__10821){
var G__10827 = cljs.core.cst$kw$style;
var G__10828 = "padding-right: 20px";
var G__10829 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10822)].join('');
return (G__10821.cljs$core$IFn$_invoke$arity$3 ? G__10821.cljs$core$IFn$_invoke$arity$3(G__10827,G__10828,G__10829) : G__10821.call(null,G__10827,G__10828,G__10829));
});})(G__10815,G__10816,latest_thing,latest_thing_group,ticker_text,vec__10801,map__10804,map__10804__$1,state,kids))
);
return (fexpr__10826.cljs$core$IFn$_invoke$arity$2 ? fexpr__10826.cljs$core$IFn$_invoke$arity$2(latest_thing_group,hoplon.core.strong) : fexpr__10826.call(null,latest_thing_group,hoplon.core.strong));
})();
var G__10819 = (function (){var fexpr__10835 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10818,G__10815,G__10816,latest_thing,latest_thing_group,ticker_text,vec__10801,map__10804,map__10804__$1,state,kids){
return (function (G__10831,G__10830){
var G__10836 = cljs.core.cst$kw$style;
var G__10837 = "padding-right: 20px";
var G__10838 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10831)].join('');
return (G__10830.cljs$core$IFn$_invoke$arity$3 ? G__10830.cljs$core$IFn$_invoke$arity$3(G__10836,G__10837,G__10838) : G__10830.call(null,G__10836,G__10837,G__10838));
});})(G__10818,G__10815,G__10816,latest_thing,latest_thing_group,ticker_text,vec__10801,map__10804,map__10804__$1,state,kids))
);
return (fexpr__10835.cljs$core$IFn$_invoke$arity$2 ? fexpr__10835.cljs$core$IFn$_invoke$arity$2(latest_thing,hoplon.core.strong) : fexpr__10835.call(null,latest_thing,hoplon.core.strong));
})();
var G__10820 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1(ticker_text) : hoplon.core.span.call(null,ticker_text));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__10818,G__10819,G__10820) : hoplon.core.p.call(null,G__10818,G__10819,G__10820));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10815,G__10816,G__10817) : hoplon.core.div.call(null,G__10815,G__10816,G__10817));
};
var ui$status$show_updates = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10839__i = 0, G__10839__a = new Array(arguments.length -  0);
while (G__10839__i < G__10839__a.length) {G__10839__a[G__10839__i] = arguments[G__10839__i + 0]; ++G__10839__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10839__a,0,null);
} 
return ui$status$show_updates__delegate.call(this,args__9938__auto__);};
ui$status$show_updates.cljs$lang$maxFixedArity = 0;
ui$status$show_updates.cljs$lang$applyTo = (function (arglist__10840){
var args__9938__auto__ = cljs.core.seq(arglist__10840);
return ui$status$show_updates__delegate(args__9938__auto__);
});
ui$status$show_updates.cljs$core$IFn$_invoke$arity$variadic = ui$status$show_updates__delegate;
return ui$status$show_updates;
})()
;
