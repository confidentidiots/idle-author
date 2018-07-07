// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.engine');
goog.require('clicker.util');
goog.require('data.db');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('db.dao');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"init",cljs.core.cst$kw$things,new cljs.core.PersistentArrayMap(null, 2, ["Slogan",(0),"Notepad",(0)], null)], null));
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__14390 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14389){
return cljs.core.cst$kw$add_DASH_every.cljs$core$IFn$_invoke$arity$2(G__14389,(0));
}));
return (fexpr__14390.cljs$core$IFn$_invoke$arity$1 ? fexpr__14390.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state) : fexpr__14390.call(null,hoplon.app_pages._index_DOT_html.state));
})();
javelin.core.dosync_STAR_((function (){
db.dao.init_db();

setTimeout((function (){
return db.dao.get_state("init",(function (p1__14391_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.state,p1__14391_SHARP_);
}));
}),(500));

return setInterval((function (){
clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,(function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
})], 0));

return db.dao.put_state(cljs.core.deref(hoplon.app_pages._index_DOT_html.state),(function (){
return cljs.core.List.EMPTY;
}));
}),(1000));
}));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__14396 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14392,G__14393){
var G__14397 = "%.0f";
var G__14398 = cljs.core.cst$kw$clicks.cljs$core$IFn$_invoke$arity$2(G__14393,(0));
return (G__14392.cljs$core$IFn$_invoke$arity$2 ? G__14392.cljs$core$IFn$_invoke$arity$2(G__14397,G__14398) : G__14392.call(null,G__14397,G__14398));
}));
return (fexpr__14396.cljs$core$IFn$_invoke$arity$2 ? fexpr__14396.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14396.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__14401 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14399,G__14400){
return (G__14399.cljs$core$IFn$_invoke$arity$2 ? G__14399.cljs$core$IFn$_invoke$arity$2("%.2f",G__14400) : G__14399.call(null,"%.2f",G__14400));
}));
return (fexpr__14401.cljs$core$IFn$_invoke$arity$2 ? fexpr__14401.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__14401.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__14406 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14402,G__14403){
var G__14407 = "%.2f";
var G__14408 = cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$2(G__14403,(0));
return (G__14402.cljs$core$IFn$_invoke$arity$2 ? G__14402.cljs$core$IFn$_invoke$arity$2(G__14407,G__14408) : G__14402.call(null,G__14407,G__14408));
}));
return (fexpr__14406.cljs$core$IFn$_invoke$arity$2 ? fexpr__14406.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14406.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__14414 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14411,G__14413,G__14412){
var sb__4462__auto__ = (new G__14411());
var _STAR_print_newline_STAR_14409_14415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14410_14416 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14409_14415,_STAR_print_fn_STAR_14410_14416,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_14409_14415,_STAR_print_fn_STAR_14410_14416,sb__4462__auto__))
;

try{(G__14412.cljs$core$IFn$_invoke$arity$1 ? G__14412.cljs$core$IFn$_invoke$arity$1(G__14413) : G__14412.call(null,G__14413));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14410_14416;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14409_14415;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
}));
return (fexpr__14414.cljs$core$IFn$_invoke$arity$3 ? fexpr__14414.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__14414.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.tap_button = (function() { 
var hoplon$app_pages$_index_DOT_html$tap_button__delegate = function (args__13763__auto__){
var vec__14417 = hoplon.core.parse_args(args__13763__auto__);
var map__14420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14417,(0),null);
var map__14420__$1 = ((((!((map__14420 == null)))?(((((map__14420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14420):map__14420);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14420__$1,cljs.core.cst$kw$name);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14420__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14420__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14417,(1),null);
var disabled = (function (){var fexpr__14432 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14417,map__14420,map__14420__$1,name,btn_txt,n,kids){
return (function (G__14425,G__14426,G__14422,G__14424,G__14423){
var G__14433 = (function (){var G__14434 = G__14424;
var G__14435 = G__14425;
var G__14436 = cljs.core.cst$kw$n;
var G__14437 = G__14426;
return (G__14423.cljs$core$IFn$_invoke$arity$4 ? G__14423.cljs$core$IFn$_invoke$arity$4(G__14434,G__14435,G__14436,G__14437) : G__14423.call(null,G__14434,G__14435,G__14436,G__14437));
})();
return (G__14422.cljs$core$IFn$_invoke$arity$1 ? G__14422.cljs$core$IFn$_invoke$arity$1(G__14433) : G__14422.call(null,G__14433));
});})(vec__14417,map__14420,map__14420__$1,name,btn_txt,n,kids))
);
return (fexpr__14432.cljs$core$IFn$_invoke$arity$5 ? fexpr__14432.cljs$core$IFn$_invoke$arity$5(name,n,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_) : fexpr__14432.call(null,name,n,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14417,map__14420,map__14420__$1,name,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__14417,map__14420,map__14420__$1,name,btn_txt,n,kids))
;
var G__14438 = cljs.core.cst$kw$disabled;
var G__14439 = disabled;
var G__14440 = cljs.core.cst$kw$click;
var G__14441 = click_fn;
var G__14442 = n;
var G__14443 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14438,G__14439,G__14440,G__14441,G__14442,G__14443) : hoplon.core.button.call(null,G__14438,G__14439,G__14440,G__14441,G__14442,G__14443));
};
var hoplon$app_pages$_index_DOT_html$tap_button = function (var_args){
var args__13763__auto__ = null;
if (arguments.length > 0) {
var G__14444__i = 0, G__14444__a = new Array(arguments.length -  0);
while (G__14444__i < G__14444__a.length) {G__14444__a[G__14444__i] = arguments[G__14444__i + 0]; ++G__14444__i;}
  args__13763__auto__ = new cljs.core.IndexedSeq(G__14444__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$tap_button__delegate.call(this,args__13763__auto__);};
hoplon$app_pages$_index_DOT_html$tap_button.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$tap_button.cljs$lang$applyTo = (function (arglist__14445){
var args__13763__auto__ = cljs.core.seq(arglist__14445);
return hoplon$app_pages$_index_DOT_html$tap_button__delegate(args__13763__auto__);
});
hoplon$app_pages$_index_DOT_html$tap_button.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$tap_button__delegate;
return hoplon$app_pages$_index_DOT_html$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.tap_buttons = (function() { 
var hoplon$app_pages$_index_DOT_html$tap_buttons__delegate = function (args__13763__auto__){
var vec__14446 = hoplon.core.parse_args(args__13763__auto__);
var map__14449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(0),null);
var map__14449__$1 = ((((!((map__14449 == null)))?(((((map__14449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14449):map__14449);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14449__$1,cljs.core.cst$kw$name);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14449__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(1),null);
var iter__4324__auto__ = ((function (vec__14446,map__14449,map__14449__$1,name,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__14451(s__14452){
return (new cljs.core.LazySeq(null,((function (vec__14446,map__14449,map__14449__$1,name,btn_txt,kids){
return (function (){
var s__14452__$1 = s__14452;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14452__$1);
if(temp__5457__auto__){
var s__14452__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14452__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14452__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14454 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14453 = (0);
while(true){
if((i__14453 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14453);
cljs.core.chunk_append(b__14454,hoplon.app_pages._index_DOT_html.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__14455 = (i__14453 + (1));
i__14453 = G__14455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14454),hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__14451(cljs.core.chunk_rest(s__14452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14454),null);
}
} else {
var n = cljs.core.first(s__14452__$2);
return cljs.core.cons(hoplon.app_pages._index_DOT_html.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__14451(cljs.core.rest(s__14452__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14446,map__14449,map__14449__$1,name,btn_txt,kids))
,null,null));
});})(vec__14446,map__14449,map__14449__$1,name,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var hoplon$app_pages$_index_DOT_html$tap_buttons = function (var_args){
var args__13763__auto__ = null;
if (arguments.length > 0) {
var G__14456__i = 0, G__14456__a = new Array(arguments.length -  0);
while (G__14456__i < G__14456__a.length) {G__14456__a[G__14456__i] = arguments[G__14456__i + 0]; ++G__14456__i;}
  args__13763__auto__ = new cljs.core.IndexedSeq(G__14456__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$tap_buttons__delegate.call(this,args__13763__auto__);};
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$lang$applyTo = (function (arglist__14457){
var args__13763__auto__ = cljs.core.seq(arglist__14457);
return hoplon$app_pages$_index_DOT_html$tap_buttons__delegate(args__13763__auto__);
});
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$tap_buttons__delegate;
return hoplon$app_pages$_index_DOT_html$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.rows = (function() { 
var hoplon$app_pages$_index_DOT_html$rows__delegate = function (args__13763__auto__){
var vec__14458 = hoplon.core.parse_args(args__13763__auto__);
var map__14461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14458,(0),null);
var map__14461__$1 = ((((!((map__14461 == null)))?(((((map__14461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14461):map__14461);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14461__$1,cljs.core.cst$kw$type);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14461__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14458,(1),null);
var iter__4324__auto__ = ((function (vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$rows_$_iter__14463(s__14464){
return (new cljs.core.LazySeq(null,((function (vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (){
var s__14464__$1 = s__14464;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14464__$1);
if(temp__5457__auto__){
var s__14464__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14464__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14464__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14466 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14465 = (0);
while(true){
if((i__14465 < size__4323__auto__)){
var thing = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14465);
cljs.core.chunk_append(b__14466,(function (){var name = (function (){var G__14467 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14467) : thing.call(null,G__14467));
})();
var loss = (function (){var G__14468 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14468) : thing.call(null,G__14468));
})();
var gain = (function (){var fexpr__14475 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14465,name,loss,thing,c__4322__auto__,size__4323__auto__,b__14466,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (G__14470,G__14472,G__14469,G__14471){
var G__14476 = "%.2f";
var G__14477 = (G__14470.cljs$core$IFn$_invoke$arity$2 ? G__14470.cljs$core$IFn$_invoke$arity$2(G__14471,G__14472) : G__14470.call(null,G__14471,G__14472));
return (G__14469.cljs$core$IFn$_invoke$arity$2 ? G__14469.cljs$core$IFn$_invoke$arity$2(G__14476,G__14477) : G__14469.call(null,G__14476,G__14477));
});})(i__14465,name,loss,thing,c__4322__auto__,size__4323__auto__,b__14466,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
);
return (fexpr__14475.cljs$core$IFn$_invoke$arity$4 ? fexpr__14475.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14475.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__14481 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14465,name,loss,gain,thing,c__4322__auto__,size__4323__auto__,b__14466,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (G__14478,G__14480,G__14479){
return (G__14478.cljs$core$IFn$_invoke$arity$2 ? G__14478.cljs$core$IFn$_invoke$arity$2(G__14479,G__14480) : G__14478.call(null,G__14479,G__14480));
});})(i__14465,name,loss,gain,thing,c__4322__auto__,size__4323__auto__,b__14466,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
);
return (fexpr__14481.cljs$core$IFn$_invoke$arity$3 ? fexpr__14481.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state) : fexpr__14481.call(null,clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state));
})();
var G__14482 = cljs.core.cst$kw$class;
var G__14483 = (function (){var fexpr__14491 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14465,G__14482,name,loss,gain,count,thing,c__4322__auto__,size__4323__auto__,b__14466,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (G__14489,G__14490){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14489.cljs$core$IFn$_invoke$arity$2 ? G__14489.cljs$core$IFn$_invoke$arity$2(G__14490,(0)) : G__14489.call(null,G__14490,(0))),cljs.core.cst$kw$olditem,(G__14490 > (0))], null);
});})(i__14465,G__14482,name,loss,gain,count,thing,c__4322__auto__,size__4323__auto__,b__14466,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
);
return (fexpr__14491.cljs$core$IFn$_invoke$arity$2 ? fexpr__14491.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14491.call(null,cljs.core._EQ_,count));
})();
var G__14484 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14485 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__14486 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__14487 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14488 = (function (){var G__14492 = hoplon.app_pages._index_DOT_html.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14492) : hoplon.core.td.call(null,G__14492));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__14482,G__14483,G__14484,G__14485,G__14486,G__14487,G__14488) : hoplon.core.tr.call(null,G__14482,G__14483,G__14484,G__14485,G__14486,G__14487,G__14488));
})());

var G__14519 = (i__14465 + (1));
i__14465 = G__14519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14466),hoplon$app_pages$_index_DOT_html$rows_$_iter__14463(cljs.core.chunk_rest(s__14464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14466),null);
}
} else {
var thing = cljs.core.first(s__14464__$2);
return cljs.core.cons((function (){var name = (function (){var G__14493 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14493) : thing.call(null,G__14493));
})();
var loss = (function (){var G__14494 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14494) : thing.call(null,G__14494));
})();
var gain = (function (){var fexpr__14501 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,thing,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (G__14496,G__14498,G__14495,G__14497){
var G__14502 = "%.2f";
var G__14503 = (G__14496.cljs$core$IFn$_invoke$arity$2 ? G__14496.cljs$core$IFn$_invoke$arity$2(G__14497,G__14498) : G__14496.call(null,G__14497,G__14498));
return (G__14495.cljs$core$IFn$_invoke$arity$2 ? G__14495.cljs$core$IFn$_invoke$arity$2(G__14502,G__14503) : G__14495.call(null,G__14502,G__14503));
});})(name,loss,thing,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
);
return (fexpr__14501.cljs$core$IFn$_invoke$arity$4 ? fexpr__14501.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14501.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__14507 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,gain,thing,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (G__14504,G__14506,G__14505){
return (G__14504.cljs$core$IFn$_invoke$arity$2 ? G__14504.cljs$core$IFn$_invoke$arity$2(G__14505,G__14506) : G__14504.call(null,G__14505,G__14506));
});})(name,loss,gain,thing,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
);
return (fexpr__14507.cljs$core$IFn$_invoke$arity$3 ? fexpr__14507.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state) : fexpr__14507.call(null,clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state));
})();
var G__14508 = cljs.core.cst$kw$class;
var G__14509 = (function (){var fexpr__14517 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14508,name,loss,gain,count,thing,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids){
return (function (G__14515,G__14516){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14515.cljs$core$IFn$_invoke$arity$2 ? G__14515.cljs$core$IFn$_invoke$arity$2(G__14516,(0)) : G__14515.call(null,G__14516,(0))),cljs.core.cst$kw$olditem,(G__14516 > (0))], null);
});})(G__14508,name,loss,gain,count,thing,s__14464__$2,temp__5457__auto__,vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
);
return (fexpr__14517.cljs$core$IFn$_invoke$arity$2 ? fexpr__14517.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14517.call(null,cljs.core._EQ_,count));
})();
var G__14510 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14511 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__14512 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__14513 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14514 = (function (){var G__14518 = hoplon.app_pages._index_DOT_html.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14518) : hoplon.core.td.call(null,G__14518));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__14508,G__14509,G__14510,G__14511,G__14512,G__14513,G__14514) : hoplon.core.tr.call(null,G__14508,G__14509,G__14510,G__14511,G__14512,G__14513,G__14514));
})(),hoplon$app_pages$_index_DOT_html$rows_$_iter__14463(cljs.core.rest(s__14464__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
,null,null));
});})(vec__14458,map__14461,map__14461__$1,type,btn_txt,kids))
;
return iter__4324__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data.db.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.cst$kw$items], null)));
};
var hoplon$app_pages$_index_DOT_html$rows = function (var_args){
var args__13763__auto__ = null;
if (arguments.length > 0) {
var G__14520__i = 0, G__14520__a = new Array(arguments.length -  0);
while (G__14520__i < G__14520__a.length) {G__14520__a[G__14520__i] = arguments[G__14520__i + 0]; ++G__14520__i;}
  args__13763__auto__ = new cljs.core.IndexedSeq(G__14520__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$rows__delegate.call(this,args__13763__auto__);};
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$applyTo = (function (arglist__14521){
var args__13763__auto__ = cljs.core.seq(arglist__14521);
return hoplon$app_pages$_index_DOT_html$rows__delegate(args__13763__auto__);
});
hoplon$app_pages$_index_DOT_html$rows.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$rows__delegate;
return hoplon$app_pages$_index_DOT_html$rows;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14522 = (function (){var G__14523 = cljs.core.cst$kw$href;
var G__14524 = "app.css";
var G__14525 = cljs.core.cst$kw$rel;
var G__14526 = "stylesheet";
var G__14527 = cljs.core.cst$kw$type;
var G__14528 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14523,G__14524,G__14525,G__14526,G__14527,G__14528) : hoplon.core.link.call(null,G__14523,G__14524,G__14525,G__14526,G__14527,G__14528));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__14522) : hoplon.core.head.call(null,G__14522));
})(),(function (){var G__14529 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__14530 = (function (){var G__14536 = cljs.core.cst$kw$click;
var G__14537 = ((function (G__14536,G__14529){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__14536,G__14529))
;
var G__14538 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14536,G__14537,G__14538) : hoplon.core.button.call(null,G__14536,G__14537,G__14538));
})();
var G__14531 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__14532 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
var G__14533 = (function (){var con__13843__auto__ = (new cljs.core.Delay(((function (G__14529,G__14530,G__14531,G__14532){
return (function (){
var G__14539 = (function (){var iter__4324__auto__ = ((function (G__14529,G__14530,G__14531,G__14532){
return (function hoplon$app_pages$_index_DOT_html$iter__14540(s__14541){
return (new cljs.core.LazySeq(null,((function (G__14529,G__14530,G__14531,G__14532){
return (function (){
var s__14541__$1 = s__14541;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14541__$1);
if(temp__5457__auto__){
var s__14541__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14541__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14541__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14543 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14542 = (0);
while(true){
if((i__14542 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14542);
cljs.core.chunk_append(b__14543,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14544 = cljs.core.cst$kw$click;
var G__14545 = ((function (i__14542,G__14544,n,level,c__4322__auto__,size__4323__auto__,b__14543,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__14542,G__14544,n,level,c__4322__auto__,size__4323__auto__,b__14543,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532){
return (function (m){
return (m + n);
});})(i__14542,G__14544,n,level,c__4322__auto__,size__4323__auto__,b__14543,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532))
], 0));
});})(i__14542,G__14544,n,level,c__4322__auto__,size__4323__auto__,b__14543,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532))
;
var G__14546 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14544,G__14545,G__14546) : hoplon.core.button.call(null,G__14544,G__14545,G__14546));
})());

var G__14584 = (i__14542 + (1));
i__14542 = G__14584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14543),hoplon$app_pages$_index_DOT_html$iter__14540(cljs.core.chunk_rest(s__14541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14543),null);
}
} else {
var level = cljs.core.first(s__14541__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14547 = cljs.core.cst$kw$click;
var G__14548 = ((function (G__14547,n,level,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__14547,n,level,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532){
return (function (m){
return (m + n);
});})(G__14547,n,level,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532))
], 0));
});})(G__14547,n,level,s__14541__$2,temp__5457__auto__,G__14529,G__14530,G__14531,G__14532))
;
var G__14549 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14547,G__14548,G__14549) : hoplon.core.button.call(null,G__14547,G__14548,G__14549));
})(),hoplon$app_pages$_index_DOT_html$iter__14540(cljs.core.rest(s__14541__$2)));
}
} else {
return null;
}
break;
}
});})(G__14529,G__14530,G__14531,G__14532))
,null,null));
});})(G__14529,G__14530,G__14531,G__14532))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__14539) : hoplon.core.div.call(null,G__14539));
});})(G__14529,G__14530,G__14531,G__14532))
,null));
var alt__13844__auto__ = (new cljs.core.Delay(((function (con__13843__auto__,G__14529,G__14530,G__14531,G__14532){
return (function (){
return null;
});})(con__13843__auto__,G__14529,G__14530,G__14531,G__14532))
,null));
var tpl__13845__auto__ = ((function (con__13843__auto__,alt__13844__auto__,G__14529,G__14530,G__14531,G__14532){
return (function (p__13846__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13846__auto__)?con__13843__auto__:alt__13844__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13843__auto__,alt__13844__auto__,G__14529,G__14530,G__14531,G__14532))
;
var fexpr__14550 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13845__auto__);
return (fexpr__14550.cljs$core$IFn$_invoke$arity$1 ? fexpr__14550.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14550.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__14534 = (function (){var G__14551 = cljs.core.cst$kw$class;
var G__14552 = "wrapper";
var G__14553 = (function (){var G__14555 = cljs.core.cst$kw$class;
var G__14556 = "upgrade";
var G__14557 = (function (){var G__14558 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Upgrade your tools") : hoplon.core.caption.call(null,"Upgrade your tools"));
var G__14559 = (function (){var G__14561 = (function (){var G__14562 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14563 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__14564 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__14565 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__14566 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__14562,G__14563,G__14564,G__14565,G__14566) : hoplon.core.tr.call(null,G__14562,G__14563,G__14564,G__14565,G__14566));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14561) : hoplon.core.thead.call(null,G__14561));
})();
var G__14560 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14558,G__14559,G__14560) : hoplon.core.table.call(null,G__14558,G__14559,G__14560));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14555,G__14556,G__14557) : hoplon.core.div.call(null,G__14555,G__14556,G__14557));
})();
var G__14554 = (function (){var G__14567 = cljs.core.cst$kw$class;
var G__14568 = "sell";
var G__14569 = (function (){var G__14570 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__14571 = (function (){var G__14573 = (function (){var G__14574 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14575 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__14576 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__14577 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__14578 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__14574,G__14575,G__14576,G__14577,G__14578) : hoplon.core.tr.call(null,G__14574,G__14575,G__14576,G__14577,G__14578));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14573) : hoplon.core.thead.call(null,G__14573));
})();
var G__14572 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14570,G__14571,G__14572) : hoplon.core.table.call(null,G__14570,G__14571,G__14572));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14567,G__14568,G__14569) : hoplon.core.div.call(null,G__14567,G__14568,G__14569));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14551,G__14552,G__14553,G__14554) : hoplon.core.div.call(null,G__14551,G__14552,G__14553,G__14554));
})();
var G__14535 = (function (){var con__13843__auto__ = (new cljs.core.Delay(((function (G__14529,G__14530,G__14531,G__14532,G__14533,G__14534){
return (function (){
var G__14579 = cljs.core.cst$kw$class;
var G__14580 = "debug";
var G__14581 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__14582 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14579,G__14580,G__14581,G__14582) : hoplon.core.div.call(null,G__14579,G__14580,G__14581,G__14582));
});})(G__14529,G__14530,G__14531,G__14532,G__14533,G__14534))
,null));
var alt__13844__auto__ = (new cljs.core.Delay(((function (con__13843__auto__,G__14529,G__14530,G__14531,G__14532,G__14533,G__14534){
return (function (){
return null;
});})(con__13843__auto__,G__14529,G__14530,G__14531,G__14532,G__14533,G__14534))
,null));
var tpl__13845__auto__ = ((function (con__13843__auto__,alt__13844__auto__,G__14529,G__14530,G__14531,G__14532,G__14533,G__14534){
return (function (p__13846__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13846__auto__)?con__13843__auto__:alt__13844__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13843__auto__,alt__13844__auto__,G__14529,G__14530,G__14531,G__14532,G__14533,G__14534))
;
var fexpr__14583 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13845__auto__);
return (fexpr__14583.cljs$core$IFn$_invoke$arity$1 ? fexpr__14583.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14583.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$7(G__14529,G__14530,G__14531,G__14532,G__14533,G__14534,G__14535) : hoplon.core.body.call(null,G__14529,G__14530,G__14531,G__14532,G__14533,G__14534,G__14535));
})()], 0));
