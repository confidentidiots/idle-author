// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('data.index');
goog.require('clojure.string');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.limit = (function (){var G__10413 = cljs.core.count(data.index.upgrades);
var G__10414 = cljs.core.count(data.index.products);
return Math.min(G__10413,G__10414);
})();
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(true);
hoplon.app_pages._index_DOT_html.total_clicks = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
hoplon.app_pages._index_DOT_html.clicks = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
hoplon.app_pages._index_DOT_html.add_every = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
hoplon.app_pages._index_DOT_html.sales = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
hoplon.app_pages._index_DOT_html.levels = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),hoplon.app_pages._index_DOT_html.limit)));
hoplon.app_pages._index_DOT_html.sell_log = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.replicate(hoplon.app_pages._index_DOT_html.limit,(0))));
hoplon.app_pages._index_DOT_html.upgrade_log = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.replicate(hoplon.app_pages._index_DOT_html.limit,(0))));
hoplon.app_pages._index_DOT_html.click_fn = (function hoplon$app_pages$_index_DOT_html$click_fn(func){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks,func);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.total_clicks,func);
});
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.buy_cost = (function hoplon$app_pages$_index_DOT_html$buy_cost(n){
return ((10) * n);
});
hoplon.app_pages._index_DOT_html.sell_cost = (function hoplon$app_pages$_index_DOT_html$sell_cost(n){
return ((2) * n);
});
hoplon.app_pages._index_DOT_html.log = (function hoplon$app_pages$_index_DOT_html$log(level,which){
return cljs.core.reset_BANG_(which,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(which),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null),cljs.core.inc));
});
setInterval((function (){
return hoplon.app_pages._index_DOT_html.click_fn((function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
}));
}),(1000));
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.upgrade_btn = (function() { 
var hoplon$app_pages$_index_DOT_html$upgrade_btn__delegate = function (args__9787__auto__){
var vec__10415 = hoplon.core.parse_args(args__9787__auto__);
var map__10418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10415,(0),null);
var map__10418__$1 = ((((!((map__10418 == null)))?(((((map__10418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10418):map__10418);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10418__$1,cljs.core.cst$kw$level);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10418__$1,cljs.core.cst$kw$value);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10415,(1),null);
var text = (data.index.upgrades.cljs$core$IFn$_invoke$arity$1 ? data.index.upgrades.cljs$core$IFn$_invoke$arity$1(level) : data.index.upgrades.call(null,level));
var count = (function (){var fexpr__10422 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (text,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (G__10420,G__10421){
return (G__10420.cljs$core$IFn$_invoke$arity$1 ? G__10420.cljs$core$IFn$_invoke$arity$1(G__10421) : G__10420.call(null,G__10421));
});})(text,vec__10415,map__10418,map__10418__$1,level,value,kids))
);
return (fexpr__10422.cljs$core$IFn$_invoke$arity$2 ? fexpr__10422.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.upgrade_log,level) : fexpr__10422.call(null,hoplon.app_pages._index_DOT_html.upgrade_log,level));
})();
var func = ((function (text,count,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.add_every,((function (text,count,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (m){
return (m + level);
});})(text,count,vec__10415,map__10418,map__10418__$1,level,value,kids))
);
});})(text,count,vec__10415,map__10418,map__10418__$1,level,value,kids))
;
var func2 = ((function (text,count,func,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.sales,((function (text,count,func,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (m){
return (m - value);
});})(text,count,func,vec__10415,map__10418,map__10418__$1,level,value,kids))
);
});})(text,count,func,vec__10415,map__10418,map__10418__$1,level,value,kids))
;
var func3 = ((function (text,count,func,func2,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (){
return hoplon.app_pages._index_DOT_html.log(level,hoplon.app_pages._index_DOT_html.upgrade_log);
});})(text,count,func,func2,vec__10415,map__10418,map__10418__$1,level,value,kids))
;
var func_all = ((function (text,count,func,func2,func3,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (){
func();

func2();

return func3();
});})(text,count,func,func2,func3,vec__10415,map__10418,map__10418__$1,level,value,kids))
;
var button_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," ($",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),")"].join('');
var G__10423 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(text) : hoplon.core.td.call(null,text));
var G__10424 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2("$",value) : hoplon.core.td.call(null,"$",value));
var G__10425 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(level," words per second") : hoplon.core.td.call(null,level," words per second"));
var G__10426 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10427 = (function (){var G__10428 = (function (){var G__10429 = cljs.core.cst$kw$disabled;
var G__10430 = (function (){var fexpr__10437 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10429,G__10423,G__10424,G__10425,G__10426,text,count,func,func2,func3,func_all,button_text,vec__10415,map__10418,map__10418__$1,level,value,kids){
return (function (G__10436,G__10435){
return (G__10435 > G__10436);
});})(G__10429,G__10423,G__10424,G__10425,G__10426,text,count,func,func2,func3,func_all,button_text,vec__10415,map__10418,map__10418__$1,level,value,kids))
);
return (fexpr__10437.cljs$core$IFn$_invoke$arity$2 ? fexpr__10437.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.sales,value) : fexpr__10437.call(null,hoplon.app_pages._index_DOT_html.sales,value));
})();
var G__10431 = cljs.core.cst$kw$click;
var G__10432 = func_all;
var G__10433 = "Buy";
var G__10434 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10429,G__10430,G__10431,G__10432,G__10433,G__10434) : hoplon.core.button.call(null,G__10429,G__10430,G__10431,G__10432,G__10433,G__10434));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10428) : hoplon.core.td.call(null,G__10428));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10423,G__10424,G__10425,G__10426,G__10427) : hoplon.core.tr.call(null,G__10423,G__10424,G__10425,G__10426,G__10427));
};
var hoplon$app_pages$_index_DOT_html$upgrade_btn = function (var_args){
var args__9787__auto__ = null;
if (arguments.length > 0) {
var G__10438__i = 0, G__10438__a = new Array(arguments.length -  0);
while (G__10438__i < G__10438__a.length) {G__10438__a[G__10438__i] = arguments[G__10438__i + 0]; ++G__10438__i;}
  args__9787__auto__ = new cljs.core.IndexedSeq(G__10438__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$upgrade_btn__delegate.call(this,args__9787__auto__);};
hoplon$app_pages$_index_DOT_html$upgrade_btn.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$upgrade_btn.cljs$lang$applyTo = (function (arglist__10439){
var args__9787__auto__ = cljs.core.seq(arglist__10439);
return hoplon$app_pages$_index_DOT_html$upgrade_btn__delegate(args__9787__auto__);
});
hoplon$app_pages$_index_DOT_html$upgrade_btn.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$upgrade_btn__delegate;
return hoplon$app_pages$_index_DOT_html$upgrade_btn;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.sell_btn = (function() { 
var hoplon$app_pages$_index_DOT_html$sell_btn__delegate = function (args__9787__auto__){
var vec__10440 = hoplon.core.parse_args(args__9787__auto__);
var map__10443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440,(0),null);
var map__10443__$1 = ((((!((map__10443 == null)))?(((((map__10443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10443):map__10443);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10443__$1,cljs.core.cst$kw$level);
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10443__$1,cljs.core.cst$kw$out);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10443__$1,cljs.core.cst$kw$in);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440,(1),null);
var text = (function (){var G__10445 = parseInt(level);
return (data.index.products.cljs$core$IFn$_invoke$arity$1 ? data.index.products.cljs$core$IFn$_invoke$arity$1(G__10445) : data.index.products.call(null,G__10445));
})();
var count = (function (){var fexpr__10448 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (text,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (G__10446,G__10447){
return (G__10446.cljs$core$IFn$_invoke$arity$1 ? G__10446.cljs$core$IFn$_invoke$arity$1(G__10447) : G__10446.call(null,G__10447));
});})(text,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
);
return (fexpr__10448.cljs$core$IFn$_invoke$arity$2 ? fexpr__10448.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.sell_log,level) : fexpr__10448.call(null,hoplon.app_pages._index_DOT_html.sell_log,level));
})();
var func = ((function (text,count,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.sales,((function (text,count,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (m){
return (m + in$);
});})(text,count,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
);
});})(text,count,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
;
var func2 = ((function (text,count,func,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks,((function (text,count,func,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (m){
return (m - out);
});})(text,count,func,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
);
});})(text,count,func,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
;
var func3 = ((function (text,count,func,func2,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (){
return hoplon.app_pages._index_DOT_html.log(level,hoplon.app_pages._index_DOT_html.sell_log);
});})(text,count,func,func2,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
;
var func_all = ((function (text,count,func,func2,func3,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (){
func();

func2();

return func3();
});})(text,count,func,func2,func3,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
;
var button_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(out)," words @ $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$),")"].join('');
var G__10449 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(text) : hoplon.core.td.call(null,text));
var G__10450 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(out) : hoplon.core.td.call(null,out));
var G__10451 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2("$",in$) : hoplon.core.td.call(null,"$",in$));
var G__10452 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10453 = (function (){var G__10454 = (function (){var G__10455 = cljs.core.cst$kw$disabled;
var G__10456 = (function (){var fexpr__10463 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10455,G__10449,G__10450,G__10451,G__10452,text,count,func,func2,func3,func_all,button_text,vec__10440,map__10443,map__10443__$1,level,out,in$,kids){
return (function (G__10462,G__10461){
return (G__10461 > G__10462);
});})(G__10455,G__10449,G__10450,G__10451,G__10452,text,count,func,func2,func3,func_all,button_text,vec__10440,map__10443,map__10443__$1,level,out,in$,kids))
);
return (fexpr__10463.cljs$core$IFn$_invoke$arity$2 ? fexpr__10463.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks,out) : fexpr__10463.call(null,hoplon.app_pages._index_DOT_html.clicks,out));
})();
var G__10457 = cljs.core.cst$kw$click;
var G__10458 = func_all;
var G__10459 = "Sell";
var G__10460 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10455,G__10456,G__10457,G__10458,G__10459,G__10460) : hoplon.core.button.call(null,G__10455,G__10456,G__10457,G__10458,G__10459,G__10460));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10454) : hoplon.core.td.call(null,G__10454));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10449,G__10450,G__10451,G__10452,G__10453) : hoplon.core.tr.call(null,G__10449,G__10450,G__10451,G__10452,G__10453));
};
var hoplon$app_pages$_index_DOT_html$sell_btn = function (var_args){
var args__9787__auto__ = null;
if (arguments.length > 0) {
var G__10464__i = 0, G__10464__a = new Array(arguments.length -  0);
while (G__10464__i < G__10464__a.length) {G__10464__a[G__10464__i] = arguments[G__10464__i + 0]; ++G__10464__i;}
  args__9787__auto__ = new cljs.core.IndexedSeq(G__10464__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$sell_btn__delegate.call(this,args__9787__auto__);};
hoplon$app_pages$_index_DOT_html$sell_btn.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$sell_btn.cljs$lang$applyTo = (function (arglist__10465){
var args__9787__auto__ = cljs.core.seq(arglist__10465);
return hoplon$app_pages$_index_DOT_html$sell_btn__delegate(args__9787__auto__);
});
hoplon$app_pages$_index_DOT_html$sell_btn.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$sell_btn__delegate;
return hoplon$app_pages$_index_DOT_html$sell_btn;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__10466 = (function (){var G__10467 = cljs.core.cst$kw$href;
var G__10468 = "app.css";
var G__10469 = cljs.core.cst$kw$rel;
var G__10470 = "stylesheet";
var G__10471 = cljs.core.cst$kw$type;
var G__10472 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__10467,G__10468,G__10469,G__10470,G__10471,G__10472) : hoplon.core.link.call(null,G__10467,G__10468,G__10469,G__10470,G__10471,G__10472));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__10466) : hoplon.core.head.call(null,G__10466));
})(),(function (){var G__10473 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__10474 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.sales," income") : hoplon.core.h3.call(null,"$",hoplon.app_pages._index_DOT_html.sales," income"));
var G__10475 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every," words every second"));
var G__10476 = (function (){var G__10480 = cljs.core.cst$kw$click;
var G__10481 = ((function (G__10480,G__10473,G__10474,G__10475){
return (function (){
return hoplon.app_pages._index_DOT_html.click_fn(cljs.core.inc);
});})(G__10480,G__10473,G__10474,G__10475))
;
var G__10482 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10480,G__10481,G__10482) : hoplon.core.button.call(null,G__10480,G__10481,G__10482));
})();
var G__10477 = (function (){var con__9867__auto__ = (new cljs.core.Delay(((function (G__10473,G__10474,G__10475,G__10476){
return (function (){
var G__10483 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.levels,((function (G__10473,G__10474,G__10475,G__10476){
return (function (item__9857__auto__){
var vec__10484 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10487 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10473,G__10474,G__10475,G__10476){
return (function (level){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
});})(G__10473,G__10474,G__10475,G__10476))
);
return (fexpr__10487.cljs$core$IFn$_invoke$arity$1 ? fexpr__10487.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10487.call(null,item__9857__auto__));
})());
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(0),null);
var n = hoplon.app_pages._index_DOT_html.level_value_fn(cljs.core.deref(level));
var G__10488 = cljs.core.cst$kw$click;
var G__10489 = ((function (G__10488,n,vec__10484,level,G__10473,G__10474,G__10475,G__10476){
return (function (){
return hoplon.app_pages._index_DOT_html.click_fn(((function (G__10488,n,vec__10484,level,G__10473,G__10474,G__10475,G__10476){
return (function (m){
return (m + n);
});})(G__10488,n,vec__10484,level,G__10473,G__10474,G__10475,G__10476))
);
});})(G__10488,n,vec__10484,level,G__10473,G__10474,G__10475,G__10476))
;
var G__10490 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10488,G__10489,G__10490) : hoplon.core.button.call(null,G__10488,G__10489,G__10490));
});})(G__10473,G__10474,G__10475,G__10476))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__10483) : hoplon.core.div.call(null,G__10483));
});})(G__10473,G__10474,G__10475,G__10476))
,null));
var alt__9868__auto__ = (new cljs.core.Delay(((function (con__9867__auto__,G__10473,G__10474,G__10475,G__10476){
return (function (){
return null;
});})(con__9867__auto__,G__10473,G__10474,G__10475,G__10476))
,null));
var tpl__9869__auto__ = ((function (con__9867__auto__,alt__9868__auto__,G__10473,G__10474,G__10475,G__10476){
return (function (p__9870__auto__){
return cljs.core.deref((function (){var or__3922__auto__ = (cljs.core.truth_(p__9870__auto__)?con__9867__auto__:alt__9868__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9867__auto__,alt__9868__auto__,G__10473,G__10474,G__10475,G__10476))
;
var fexpr__10491 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9869__auto__);
return (fexpr__10491.cljs$core$IFn$_invoke$arity$1 ? fexpr__10491.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__10491.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__10478 = (function (){var G__10492 = cljs.core.cst$kw$class;
var G__10493 = "wrapper";
var G__10494 = (function (){var G__10496 = cljs.core.cst$kw$class;
var G__10497 = "upgrade";
var G__10498 = (function (){var G__10499 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Upgrade your tools") : hoplon.core.caption.call(null,"Upgrade your tools"));
var G__10500 = (function (){var G__10502 = (function (){var G__10503 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10504 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Cost") : hoplon.core.th.call(null,"Cost"));
var G__10505 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__10506 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__10507 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10503,G__10504,G__10505,G__10506,G__10507) : hoplon.core.tr.call(null,G__10503,G__10504,G__10505,G__10506,G__10507));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10502) : hoplon.core.thead.call(null,G__10502));
})();
var G__10501 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.levels,((function (G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (item__9857__auto__){
var vec__10508 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10511 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (level){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
});})(G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10511.cljs$core$IFn$_invoke$arity$1 ? fexpr__10511.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10511.call(null,item__9857__auto__));
})());
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(0),null);
var value = (function (){var fexpr__10514 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10512,G__10513){
return (G__10512.cljs$core$IFn$_invoke$arity$1 ? G__10512.cljs$core$IFn$_invoke$arity$1(G__10513) : G__10512.call(null,G__10513));
});})(vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10514.cljs$core$IFn$_invoke$arity$2 ? fexpr__10514.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.buy_cost,level) : fexpr__10514.call(null,hoplon.app_pages._index_DOT_html.buy_cost,level));
})();
var parent = (function (){var fexpr__10518 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (value,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10515,G__10516){
var G__10519 = (G__10516 - (1));
return (G__10515.cljs$core$IFn$_invoke$arity$1 ? G__10515.cljs$core$IFn$_invoke$arity$1(G__10519) : G__10515.call(null,G__10519));
});})(value,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10518.cljs$core$IFn$_invoke$arity$2 ? fexpr__10518.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.upgrade_log,level) : fexpr__10518.call(null,hoplon.app_pages._index_DOT_html.upgrade_log,level));
})();
var G__10520 = (function (){var con__9867__auto__ = (new cljs.core.Delay(((function (value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return hoplon.app_pages._index_DOT_html.upgrade_btn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$level,cljs.core.deref(level),cljs.core.cst$kw$value,cljs.core.deref(value)], 0));
});})(value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var alt__9868__auto__ = (new cljs.core.Delay(((function (con__9867__auto__,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return null;
});})(con__9867__auto__,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var tpl__9869__auto__ = ((function (con__9867__auto__,alt__9868__auto__,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (p__9870__auto__){
return cljs.core.deref((function (){var or__3922__auto__ = (cljs.core.truth_(p__9870__auto__)?con__9867__auto__:alt__9868__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9867__auto__,alt__9868__auto__,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
;
var G__10523 = (function (){var fexpr__10526 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10524,G__10525){
return (G__10524.cljs$core$IFn$_invoke$arity$2 ? G__10524.cljs$core$IFn$_invoke$arity$2((0),G__10525) : G__10524.call(null,(0),G__10525));
});})(con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10526.cljs$core$IFn$_invoke$arity$2 ? fexpr__10526.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,parent) : fexpr__10526.call(null,cljs.core.not_EQ_,parent));
})();
var fexpr__10522 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9869__auto__);
return (fexpr__10522.cljs$core$IFn$_invoke$arity$1 ? fexpr__10522.cljs$core$IFn$_invoke$arity$1(G__10523) : fexpr__10522.call(null,G__10523));
})();
var G__10521 = (function (){var con__9867__auto__ = (new cljs.core.Delay(((function (G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return hoplon.app_pages._index_DOT_html.upgrade_btn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$level,cljs.core.deref(level),cljs.core.cst$kw$value,cljs.core.deref(value)], 0));
});})(G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var alt__9868__auto__ = (new cljs.core.Delay(((function (con__9867__auto__,G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return null;
});})(con__9867__auto__,G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var tpl__9869__auto__ = ((function (con__9867__auto__,alt__9868__auto__,G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (p__9870__auto__){
return cljs.core.deref((function (){var or__3922__auto__ = (cljs.core.truth_(p__9870__auto__)?con__9867__auto__:alt__9868__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9867__auto__,alt__9868__auto__,G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
;
var G__10528 = (function (){var fexpr__10531 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10529,G__10530){
return (G__10529.cljs$core$IFn$_invoke$arity$2 ? G__10529.cljs$core$IFn$_invoke$arity$2(G__10530,(1)) : G__10529.call(null,G__10530,(1)));
});})(con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,G__10520,value,parent,vec__10508,level,G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10531.cljs$core$IFn$_invoke$arity$2 ? fexpr__10531.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,level) : fexpr__10531.call(null,cljs.core._EQ_,level));
})();
var fexpr__10527 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9869__auto__);
return (fexpr__10527.cljs$core$IFn$_invoke$arity$1 ? fexpr__10527.cljs$core$IFn$_invoke$arity$1(G__10528) : fexpr__10527.call(null,G__10528));
})();
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$2(G__10520,G__10521) : hoplon.core.tbody.call(null,G__10520,G__10521));
});})(G__10499,G__10500,G__10496,G__10497,G__10492,G__10493,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10499,G__10500,G__10501) : hoplon.core.table.call(null,G__10499,G__10500,G__10501));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10496,G__10497,G__10498) : hoplon.core.div.call(null,G__10496,G__10497,G__10498));
})();
var G__10495 = (function (){var G__10532 = cljs.core.cst$kw$class;
var G__10533 = "sell";
var G__10534 = (function (){var G__10535 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__10536 = (function (){var G__10538 = (function (){var G__10539 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10540 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__10541 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Income") : hoplon.core.th.call(null,"Income"));
var G__10542 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__10543 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10539,G__10540,G__10541,G__10542,G__10543) : hoplon.core.tr.call(null,G__10539,G__10540,G__10541,G__10542,G__10543));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10538) : hoplon.core.thead.call(null,G__10538));
})();
var G__10537 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.levels,((function (G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (item__9857__auto__){
var vec__10544 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10547 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (level){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
});})(G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10547.cljs$core$IFn$_invoke$arity$1 ? fexpr__10547.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10547.call(null,item__9857__auto__));
})());
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(0),null);
var out = (function (){var fexpr__10550 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10548,G__10549){
return (G__10548.cljs$core$IFn$_invoke$arity$1 ? G__10548.cljs$core$IFn$_invoke$arity$1(G__10549) : G__10548.call(null,G__10549));
});})(vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10550.cljs$core$IFn$_invoke$arity$2 ? fexpr__10550.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.level_value_fn,level) : fexpr__10550.call(null,hoplon.app_pages._index_DOT_html.level_value_fn,level));
})();
var in$ = (function (){var fexpr__10553 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (out,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10552,G__10551){
return (G__10551.cljs$core$IFn$_invoke$arity$1 ? G__10551.cljs$core$IFn$_invoke$arity$1(G__10552) : G__10551.call(null,G__10552));
});})(out,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10553.cljs$core$IFn$_invoke$arity$2 ? fexpr__10553.cljs$core$IFn$_invoke$arity$2(level,hoplon.app_pages._index_DOT_html.sell_cost) : fexpr__10553.call(null,level,hoplon.app_pages._index_DOT_html.sell_cost));
})();
var parent = (function (){var fexpr__10557 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (out,in$,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10554,G__10555){
var G__10558 = (G__10555 - (1));
return (G__10554.cljs$core$IFn$_invoke$arity$1 ? G__10554.cljs$core$IFn$_invoke$arity$1(G__10558) : G__10554.call(null,G__10558));
});})(out,in$,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10557.cljs$core$IFn$_invoke$arity$2 ? fexpr__10557.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.sell_log,level) : fexpr__10557.call(null,hoplon.app_pages._index_DOT_html.sell_log,level));
})();
var G__10559 = (function (){var con__9867__auto__ = (new cljs.core.Delay(((function (out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return hoplon.app_pages._index_DOT_html.sell_btn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$level,cljs.core.deref(level),cljs.core.cst$kw$out,cljs.core.deref(out),cljs.core.cst$kw$in,cljs.core.deref(in$)], 0));
});})(out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var alt__9868__auto__ = (new cljs.core.Delay(((function (con__9867__auto__,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return null;
});})(con__9867__auto__,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var tpl__9869__auto__ = ((function (con__9867__auto__,alt__9868__auto__,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (p__9870__auto__){
return cljs.core.deref((function (){var or__3922__auto__ = (cljs.core.truth_(p__9870__auto__)?con__9867__auto__:alt__9868__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9867__auto__,alt__9868__auto__,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
;
var G__10562 = (function (){var fexpr__10565 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10563,G__10564){
return (G__10563.cljs$core$IFn$_invoke$arity$2 ? G__10563.cljs$core$IFn$_invoke$arity$2((0),G__10564) : G__10563.call(null,(0),G__10564));
});})(con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10565.cljs$core$IFn$_invoke$arity$2 ? fexpr__10565.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,parent) : fexpr__10565.call(null,cljs.core.not_EQ_,parent));
})();
var fexpr__10561 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9869__auto__);
return (fexpr__10561.cljs$core$IFn$_invoke$arity$1 ? fexpr__10561.cljs$core$IFn$_invoke$arity$1(G__10562) : fexpr__10561.call(null,G__10562));
})();
var G__10560 = (function (){var con__9867__auto__ = (new cljs.core.Delay(((function (G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return hoplon.app_pages._index_DOT_html.sell_btn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$level,cljs.core.deref(level),cljs.core.cst$kw$out,cljs.core.deref(out),cljs.core.cst$kw$in,cljs.core.deref(in$)], 0));
});})(G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var alt__9868__auto__ = (new cljs.core.Delay(((function (con__9867__auto__,G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (){
return null;
});})(con__9867__auto__,G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
,null));
var tpl__9869__auto__ = ((function (con__9867__auto__,alt__9868__auto__,G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (p__9870__auto__){
return cljs.core.deref((function (){var or__3922__auto__ = (cljs.core.truth_(p__9870__auto__)?con__9867__auto__:alt__9868__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9867__auto__,alt__9868__auto__,G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
;
var G__10567 = (function (){var fexpr__10570 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477){
return (function (G__10568,G__10569){
return (G__10568.cljs$core$IFn$_invoke$arity$2 ? G__10568.cljs$core$IFn$_invoke$arity$2(G__10569,(1)) : G__10568.call(null,G__10569,(1)));
});})(con__9867__auto__,alt__9868__auto__,tpl__9869__auto__,G__10559,out,in$,parent,vec__10544,level,G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (fexpr__10570.cljs$core$IFn$_invoke$arity$2 ? fexpr__10570.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,level) : fexpr__10570.call(null,cljs.core._EQ_,level));
})();
var fexpr__10566 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9869__auto__);
return (fexpr__10566.cljs$core$IFn$_invoke$arity$1 ? fexpr__10566.cljs$core$IFn$_invoke$arity$1(G__10567) : fexpr__10566.call(null,G__10567));
})();
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$2(G__10559,G__10560) : hoplon.core.tbody.call(null,G__10559,G__10560));
});})(G__10535,G__10536,G__10532,G__10533,G__10492,G__10493,G__10494,G__10473,G__10474,G__10475,G__10476,G__10477))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10535,G__10536,G__10537) : hoplon.core.table.call(null,G__10535,G__10536,G__10537));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10532,G__10533,G__10534) : hoplon.core.div.call(null,G__10532,G__10533,G__10534));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__10492,G__10493,G__10494,G__10495) : hoplon.core.div.call(null,G__10492,G__10493,G__10494,G__10495));
})();
var G__10479 = (function (){var con__9867__auto__ = (new cljs.core.Delay(((function (G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (){
var G__10571 = cljs.core.cst$kw$class;
var G__10572 = "debug";
var G__10573 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2("Grand total ",hoplon.app_pages._index_DOT_html.total_clicks) : hoplon.core.h4.call(null,"Grand total ",hoplon.app_pages._index_DOT_html.total_clicks));
var G__10574 = (function (){var G__10578 = "Sell log ";
var G__10579 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.sell_log,((function (G__10578,G__10571,G__10572,G__10573,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (item__9857__auto__){
var vec__10580 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10583 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10578,G__10571,G__10572,G__10573,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (l){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null);
});})(G__10578,G__10571,G__10572,G__10573,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (fexpr__10583.cljs$core$IFn$_invoke$arity$1 ? fexpr__10583.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10583.call(null,item__9857__auto__));
})());
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10580,(0),null);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(l,"-") : hoplon.core.span.call(null,l,"-"));
});})(G__10578,G__10571,G__10572,G__10573,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__10578,G__10579) : hoplon.core.h4.call(null,G__10578,G__10579));
})();
var G__10575 = (function (){var G__10584 = "Upgrade log ";
var G__10585 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.upgrade_log,((function (G__10584,G__10571,G__10572,G__10573,G__10574,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (item__9857__auto__){
var vec__10586 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10589 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10584,G__10571,G__10572,G__10573,G__10574,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (l){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null);
});})(G__10584,G__10571,G__10572,G__10573,G__10574,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (fexpr__10589.cljs$core$IFn$_invoke$arity$1 ? fexpr__10589.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10589.call(null,item__9857__auto__));
})());
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10586,(0),null);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(l,"-") : hoplon.core.span.call(null,l,"-"));
});})(G__10584,G__10571,G__10572,G__10573,G__10574,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__10584,G__10585) : hoplon.core.h4.call(null,G__10584,G__10585));
})();
var G__10576 = (function (){var G__10590 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Upgrades") : hoplon.core.caption.call(null,"Upgrades"));
var G__10591 = (function (){var G__10593 = (function (){var G__10594 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Name") : hoplon.core.th.call(null,"Name"));
var G__10595 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Cost") : hoplon.core.th.call(null,"Cost"));
var G__10596 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Bump") : hoplon.core.th.call(null,"Bump"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__10594,G__10595,G__10596) : hoplon.core.tr.call(null,G__10594,G__10595,G__10596));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10593) : hoplon.core.thead.call(null,G__10593));
})();
var G__10592 = (function (){var G__10597 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.levels,((function (G__10590,G__10591,G__10571,G__10572,G__10573,G__10574,G__10575,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (item__9857__auto__){
var vec__10598 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10601 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10590,G__10591,G__10571,G__10572,G__10573,G__10574,G__10575,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (level){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
});})(G__10590,G__10591,G__10571,G__10572,G__10573,G__10574,G__10575,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (fexpr__10601.cljs$core$IFn$_invoke$arity$1 ? fexpr__10601.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10601.call(null,item__9857__auto__));
})());
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10598,(0),null);
var level_exp = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var text = (function (){var G__10602 = cljs.core.deref(level);
return (data.index.upgrades.cljs$core$IFn$_invoke$arity$1 ? data.index.upgrades.cljs$core$IFn$_invoke$arity$1(G__10602) : data.index.upgrades.call(null,G__10602));
})();
var price = hoplon.app_pages._index_DOT_html.buy_cost(cljs.core.deref(level));
var G__10603 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(text) : hoplon.core.td.call(null,text));
var G__10604 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(price) : hoplon.core.td.call(null,price));
var G__10605 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(level," every second") : hoplon.core.td.call(null,level," every second"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__10603,G__10604,G__10605) : hoplon.core.tr.call(null,G__10603,G__10604,G__10605));
});})(G__10590,G__10591,G__10571,G__10572,G__10573,G__10574,G__10575,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__10597) : hoplon.core.tbody.call(null,G__10597));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10590,G__10591,G__10592) : hoplon.core.table.call(null,G__10590,G__10591,G__10592));
})();
var G__10577 = (function (){var G__10606 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell") : hoplon.core.caption.call(null,"Sell"));
var G__10607 = (function (){var G__10609 = (function (){var G__10610 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Name") : hoplon.core.th.call(null,"Name"));
var G__10611 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Words") : hoplon.core.th.call(null,"Words"));
var G__10612 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Cash") : hoplon.core.th.call(null,"Cash"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__10610,G__10611,G__10612) : hoplon.core.tr.call(null,G__10610,G__10611,G__10612));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10609) : hoplon.core.thead.call(null,G__10609));
})();
var G__10608 = (function (){var G__10613 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.levels,((function (G__10606,G__10607,G__10571,G__10572,G__10573,G__10574,G__10575,G__10576,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (item__9857__auto__){
var vec__10614 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10617 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10606,G__10607,G__10571,G__10572,G__10573,G__10574,G__10575,G__10576,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (level){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
});})(G__10606,G__10607,G__10571,G__10572,G__10573,G__10574,G__10575,G__10576,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (fexpr__10617.cljs$core$IFn$_invoke$arity$1 ? fexpr__10617.cljs$core$IFn$_invoke$arity$1(item__9857__auto__) : fexpr__10617.call(null,item__9857__auto__));
})());
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10614,(0),null);
var level_exp = hoplon.app_pages._index_DOT_html.level_value_fn(cljs.core.deref(level));
var text = (function (){var G__10618 = cljs.core.deref(level);
return (data.index.products.cljs$core$IFn$_invoke$arity$1 ? data.index.products.cljs$core$IFn$_invoke$arity$1(G__10618) : data.index.products.call(null,G__10618));
})();
var price = hoplon.app_pages._index_DOT_html.sell_cost(cljs.core.deref(level));
var G__10619 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(text) : hoplon.core.td.call(null,text));
var G__10620 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(level_exp) : hoplon.core.td.call(null,level_exp));
var G__10621 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(price) : hoplon.core.td.call(null,price));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__10619,G__10620,G__10621) : hoplon.core.tr.call(null,G__10619,G__10620,G__10621));
});})(G__10606,G__10607,G__10571,G__10572,G__10573,G__10574,G__10575,G__10576,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
);
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__10613) : hoplon.core.tbody.call(null,G__10613));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10606,G__10607,G__10608) : hoplon.core.table.call(null,G__10606,G__10607,G__10608));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__10571,G__10572,G__10573,G__10574,G__10575,G__10576,G__10577) : hoplon.core.div.call(null,G__10571,G__10572,G__10573,G__10574,G__10575,G__10576,G__10577));
});})(G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
,null));
var alt__9868__auto__ = (new cljs.core.Delay(((function (con__9867__auto__,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (){
return null;
});})(con__9867__auto__,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
,null));
var tpl__9869__auto__ = ((function (con__9867__auto__,alt__9868__auto__,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478){
return (function (p__9870__auto__){
return cljs.core.deref((function (){var or__3922__auto__ = (cljs.core.truth_(p__9870__auto__)?con__9867__auto__:alt__9868__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9867__auto__,alt__9868__auto__,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478))
;
var fexpr__10622 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9869__auto__);
return (fexpr__10622.cljs$core$IFn$_invoke$arity$1 ? fexpr__10622.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__10622.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$7(G__10473,G__10474,G__10475,G__10476,G__10477,G__10478,G__10479) : hoplon.core.body.call(null,G__10473,G__10474,G__10475,G__10476,G__10477,G__10478,G__10479));
})()], 0));
