// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.engine');
goog.require('data.db');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$things,new cljs.core.PersistentArrayMap(null, 2, ["Slogan",(0),"Notepad",(0)], null)], null));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__10517 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10513,G__10514){
var G__10518 = "%.0f";
var G__10519 = cljs.core.cst$kw$clicks.cljs$core$IFn$_invoke$arity$2(G__10514,(0));
return (G__10513.cljs$core$IFn$_invoke$arity$2 ? G__10513.cljs$core$IFn$_invoke$arity$2(G__10518,G__10519) : G__10513.call(null,G__10518,G__10519));
}));
return (fexpr__10517.cljs$core$IFn$_invoke$arity$2 ? fexpr__10517.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10517.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__10521 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10520){
return cljs.core.cst$kw$add_DASH_every.cljs$core$IFn$_invoke$arity$2(G__10520,(0));
}));
return (fexpr__10521.cljs$core$IFn$_invoke$arity$1 ? fexpr__10521.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state) : fexpr__10521.call(null,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__10524 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10522,G__10523){
return (G__10522.cljs$core$IFn$_invoke$arity$2 ? G__10522.cljs$core$IFn$_invoke$arity$2("%.2f",G__10523) : G__10522.call(null,"%.2f",G__10523));
}));
return (fexpr__10524.cljs$core$IFn$_invoke$arity$2 ? fexpr__10524.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__10524.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__10529 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10525,G__10526){
var G__10530 = "%.2f";
var G__10531 = cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$2(G__10526,(0));
return (G__10525.cljs$core$IFn$_invoke$arity$2 ? G__10525.cljs$core$IFn$_invoke$arity$2(G__10530,G__10531) : G__10525.call(null,G__10530,G__10531));
}));
return (fexpr__10529.cljs$core$IFn$_invoke$arity$2 ? fexpr__10529.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10529.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__10537 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10534,G__10536,G__10535){
var sb__4449__auto__ = (new G__10534());
var _STAR_print_newline_STAR_10532_10538 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10533_10539 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10532_10538,_STAR_print_fn_STAR_10533_10539,sb__4449__auto__){
return (function (x__4450__auto__){
return sb__4449__auto__.append(x__4450__auto__);
});})(_STAR_print_newline_STAR_10532_10538,_STAR_print_fn_STAR_10533_10539,sb__4449__auto__))
;

try{(G__10535.cljs$core$IFn$_invoke$arity$1 ? G__10535.cljs$core$IFn$_invoke$arity$1(G__10536) : G__10535.call(null,G__10536));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10533_10539;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10532_10538;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4449__auto__)].join('');
}));
return (fexpr__10537.cljs$core$IFn$_invoke$arity$3 ? fexpr__10537.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__10537.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
setInterval((function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,(function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
})], 0));
}),(1000));
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.tap_button = (function() { 
var hoplon$app_pages$_index_DOT_html$tap_button__delegate = function (args__9887__auto__){
var vec__10540 = hoplon.core.parse_args(args__9887__auto__);
var map__10543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10540,(0),null);
var map__10543__$1 = ((((!((map__10543 == null)))?(((((map__10543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10543):map__10543);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10543__$1,cljs.core.cst$kw$name);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10543__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10543__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10540,(1),null);
var disabled = (function (){var fexpr__10555 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10540,map__10543,map__10543__$1,name,btn_txt,n,kids){
return (function (G__10548,G__10549,G__10545,G__10547,G__10546){
var G__10556 = (function (){var G__10557 = G__10547;
var G__10558 = G__10548;
var G__10559 = cljs.core.cst$kw$n;
var G__10560 = G__10549;
return (G__10546.cljs$core$IFn$_invoke$arity$4 ? G__10546.cljs$core$IFn$_invoke$arity$4(G__10557,G__10558,G__10559,G__10560) : G__10546.call(null,G__10557,G__10558,G__10559,G__10560));
})();
return (G__10545.cljs$core$IFn$_invoke$arity$1 ? G__10545.cljs$core$IFn$_invoke$arity$1(G__10556) : G__10545.call(null,G__10556));
});})(vec__10540,map__10543,map__10543__$1,name,btn_txt,n,kids))
);
return (fexpr__10555.cljs$core$IFn$_invoke$arity$5 ? fexpr__10555.cljs$core$IFn$_invoke$arity$5(name,n,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_) : fexpr__10555.call(null,name,n,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__10540,map__10543,map__10543__$1,name,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__10540,map__10543,map__10543__$1,name,btn_txt,n,kids))
;
var G__10561 = cljs.core.cst$kw$disabled;
var G__10562 = disabled;
var G__10563 = cljs.core.cst$kw$click;
var G__10564 = click_fn;
var G__10565 = n;
var G__10566 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10561,G__10562,G__10563,G__10564,G__10565,G__10566) : hoplon.core.button.call(null,G__10561,G__10562,G__10563,G__10564,G__10565,G__10566));
};
var hoplon$app_pages$_index_DOT_html$tap_button = function (var_args){
var args__9887__auto__ = null;
if (arguments.length > 0) {
var G__10567__i = 0, G__10567__a = new Array(arguments.length -  0);
while (G__10567__i < G__10567__a.length) {G__10567__a[G__10567__i] = arguments[G__10567__i + 0]; ++G__10567__i;}
  args__9887__auto__ = new cljs.core.IndexedSeq(G__10567__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$tap_button__delegate.call(this,args__9887__auto__);};
hoplon$app_pages$_index_DOT_html$tap_button.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$tap_button.cljs$lang$applyTo = (function (arglist__10568){
var args__9887__auto__ = cljs.core.seq(arglist__10568);
return hoplon$app_pages$_index_DOT_html$tap_button__delegate(args__9887__auto__);
});
hoplon$app_pages$_index_DOT_html$tap_button.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$tap_button__delegate;
return hoplon$app_pages$_index_DOT_html$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.tap_buttons = (function() { 
var hoplon$app_pages$_index_DOT_html$tap_buttons__delegate = function (args__9887__auto__){
var vec__10569 = hoplon.core.parse_args(args__9887__auto__);
var map__10572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10569,(0),null);
var map__10572__$1 = ((((!((map__10572 == null)))?(((((map__10572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10572):map__10572);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10572__$1,cljs.core.cst$kw$name);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10572__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10569,(1),null);
var iter__4311__auto__ = ((function (vec__10569,map__10572,map__10572__$1,name,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__10574(s__10575){
return (new cljs.core.LazySeq(null,((function (vec__10569,map__10572,map__10572__$1,name,btn_txt,kids){
return (function (){
var s__10575__$1 = s__10575;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10575__$1);
if(temp__5457__auto__){
var s__10575__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10575__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__10575__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__10577 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__10576 = (0);
while(true){
if((i__10576 < size__4310__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__10576);
cljs.core.chunk_append(b__10577,hoplon.app_pages._index_DOT_html.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__10578 = (i__10576 + (1));
i__10576 = G__10578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10577),hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__10574(cljs.core.chunk_rest(s__10575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10577),null);
}
} else {
var n = cljs.core.first(s__10575__$2);
return cljs.core.cons(hoplon.app_pages._index_DOT_html.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__10574(cljs.core.rest(s__10575__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10569,map__10572,map__10572__$1,name,btn_txt,kids))
,null,null));
});})(vec__10569,map__10572,map__10572__$1,name,btn_txt,kids))
;
return iter__4311__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var hoplon$app_pages$_index_DOT_html$tap_buttons = function (var_args){
var args__9887__auto__ = null;
if (arguments.length > 0) {
var G__10579__i = 0, G__10579__a = new Array(arguments.length -  0);
while (G__10579__i < G__10579__a.length) {G__10579__a[G__10579__i] = arguments[G__10579__i + 0]; ++G__10579__i;}
  args__9887__auto__ = new cljs.core.IndexedSeq(G__10579__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$tap_buttons__delegate.call(this,args__9887__auto__);};
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$lang$applyTo = (function (arglist__10580){
var args__9887__auto__ = cljs.core.seq(arglist__10580);
return hoplon$app_pages$_index_DOT_html$tap_buttons__delegate(args__9887__auto__);
});
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$tap_buttons__delegate;
return hoplon$app_pages$_index_DOT_html$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.rows = (function() { 
var hoplon$app_pages$_index_DOT_html$rows__delegate = function (args__9887__auto__){
var vec__10581 = hoplon.core.parse_args(args__9887__auto__);
var map__10584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10581,(0),null);
var map__10584__$1 = ((((!((map__10584 == null)))?(((((map__10584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10584):map__10584);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,cljs.core.cst$kw$type);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10584__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10581,(1),null);
var iter__4311__auto__ = ((function (vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$rows_$_iter__10586(s__10587){
return (new cljs.core.LazySeq(null,((function (vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (){
var s__10587__$1 = s__10587;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10587__$1);
if(temp__5457__auto__){
var s__10587__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10587__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__10587__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__10589 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__10588 = (0);
while(true){
if((i__10588 < size__4310__auto__)){
var thing = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__10588);
cljs.core.chunk_append(b__10589,(function (){var name = (function (){var G__10590 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10590) : thing.call(null,G__10590));
})();
var loss = (function (){var G__10591 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10591) : thing.call(null,G__10591));
})();
var gain = (function (){var fexpr__10598 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10588,name,loss,thing,c__4309__auto__,size__4310__auto__,b__10589,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (G__10593,G__10595,G__10592,G__10594){
var G__10599 = "%.2f";
var G__10600 = (G__10593.cljs$core$IFn$_invoke$arity$2 ? G__10593.cljs$core$IFn$_invoke$arity$2(G__10594,G__10595) : G__10593.call(null,G__10594,G__10595));
return (G__10592.cljs$core$IFn$_invoke$arity$2 ? G__10592.cljs$core$IFn$_invoke$arity$2(G__10599,G__10600) : G__10592.call(null,G__10599,G__10600));
});})(i__10588,name,loss,thing,c__4309__auto__,size__4310__auto__,b__10589,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
);
return (fexpr__10598.cljs$core$IFn$_invoke$arity$4 ? fexpr__10598.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10598.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__10604 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10588,name,loss,gain,thing,c__4309__auto__,size__4310__auto__,b__10589,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (G__10601,G__10603,G__10602){
return (G__10601.cljs$core$IFn$_invoke$arity$2 ? G__10601.cljs$core$IFn$_invoke$arity$2(G__10602,G__10603) : G__10601.call(null,G__10602,G__10603));
});})(i__10588,name,loss,gain,thing,c__4309__auto__,size__4310__auto__,b__10589,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
);
return (fexpr__10604.cljs$core$IFn$_invoke$arity$3 ? fexpr__10604.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state) : fexpr__10604.call(null,clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state));
})();
var G__10605 = cljs.core.cst$kw$class;
var G__10606 = (function (){var fexpr__10614 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10588,G__10605,name,loss,gain,count,thing,c__4309__auto__,size__4310__auto__,b__10589,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (G__10612,G__10613){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10612.cljs$core$IFn$_invoke$arity$2 ? G__10612.cljs$core$IFn$_invoke$arity$2(G__10613,(0)) : G__10612.call(null,G__10613,(0))),cljs.core.cst$kw$olditem,(G__10613 > (0))], null);
});})(i__10588,G__10605,name,loss,gain,count,thing,c__4309__auto__,size__4310__auto__,b__10589,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
);
return (fexpr__10614.cljs$core$IFn$_invoke$arity$2 ? fexpr__10614.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10614.call(null,cljs.core._EQ_,count));
})();
var G__10607 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10608 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__10609 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__10610 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10611 = (function (){var G__10615 = hoplon.app_pages._index_DOT_html.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10615) : hoplon.core.td.call(null,G__10615));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__10605,G__10606,G__10607,G__10608,G__10609,G__10610,G__10611) : hoplon.core.tr.call(null,G__10605,G__10606,G__10607,G__10608,G__10609,G__10610,G__10611));
})());

var G__10642 = (i__10588 + (1));
i__10588 = G__10642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10589),hoplon$app_pages$_index_DOT_html$rows_$_iter__10586(cljs.core.chunk_rest(s__10587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10589),null);
}
} else {
var thing = cljs.core.first(s__10587__$2);
return cljs.core.cons((function (){var name = (function (){var G__10616 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10616) : thing.call(null,G__10616));
})();
var loss = (function (){var G__10617 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10617) : thing.call(null,G__10617));
})();
var gain = (function (){var fexpr__10624 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,thing,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (G__10619,G__10621,G__10618,G__10620){
var G__10625 = "%.2f";
var G__10626 = (G__10619.cljs$core$IFn$_invoke$arity$2 ? G__10619.cljs$core$IFn$_invoke$arity$2(G__10620,G__10621) : G__10619.call(null,G__10620,G__10621));
return (G__10618.cljs$core$IFn$_invoke$arity$2 ? G__10618.cljs$core$IFn$_invoke$arity$2(G__10625,G__10626) : G__10618.call(null,G__10625,G__10626));
});})(name,loss,thing,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
);
return (fexpr__10624.cljs$core$IFn$_invoke$arity$4 ? fexpr__10624.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10624.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__10630 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,gain,thing,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (G__10627,G__10629,G__10628){
return (G__10627.cljs$core$IFn$_invoke$arity$2 ? G__10627.cljs$core$IFn$_invoke$arity$2(G__10628,G__10629) : G__10627.call(null,G__10628,G__10629));
});})(name,loss,gain,thing,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
);
return (fexpr__10630.cljs$core$IFn$_invoke$arity$3 ? fexpr__10630.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state) : fexpr__10630.call(null,clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state));
})();
var G__10631 = cljs.core.cst$kw$class;
var G__10632 = (function (){var fexpr__10640 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10631,name,loss,gain,count,thing,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids){
return (function (G__10638,G__10639){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10638.cljs$core$IFn$_invoke$arity$2 ? G__10638.cljs$core$IFn$_invoke$arity$2(G__10639,(0)) : G__10638.call(null,G__10639,(0))),cljs.core.cst$kw$olditem,(G__10639 > (0))], null);
});})(G__10631,name,loss,gain,count,thing,s__10587__$2,temp__5457__auto__,vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
);
return (fexpr__10640.cljs$core$IFn$_invoke$arity$2 ? fexpr__10640.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10640.call(null,cljs.core._EQ_,count));
})();
var G__10633 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10634 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__10635 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__10636 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10637 = (function (){var G__10641 = hoplon.app_pages._index_DOT_html.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10641) : hoplon.core.td.call(null,G__10641));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__10631,G__10632,G__10633,G__10634,G__10635,G__10636,G__10637) : hoplon.core.tr.call(null,G__10631,G__10632,G__10633,G__10634,G__10635,G__10636,G__10637));
})(),hoplon$app_pages$_index_DOT_html$rows_$_iter__10586(cljs.core.rest(s__10587__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
,null,null));
});})(vec__10581,map__10584,map__10584__$1,type,btn_txt,kids))
;
return iter__4311__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data.db.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.cst$kw$items], null)));
};
var hoplon$app_pages$_index_DOT_html$rows = function (var_args){
var args__9887__auto__ = null;
if (arguments.length > 0) {
var G__10643__i = 0, G__10643__a = new Array(arguments.length -  0);
while (G__10643__i < G__10643__a.length) {G__10643__a[G__10643__i] = arguments[G__10643__i + 0]; ++G__10643__i;}
  args__9887__auto__ = new cljs.core.IndexedSeq(G__10643__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$rows__delegate.call(this,args__9887__auto__);};
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$applyTo = (function (arglist__10644){
var args__9887__auto__ = cljs.core.seq(arglist__10644);
return hoplon$app_pages$_index_DOT_html$rows__delegate(args__9887__auto__);
});
hoplon$app_pages$_index_DOT_html$rows.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$rows__delegate;
return hoplon$app_pages$_index_DOT_html$rows;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__10645 = (function (){var G__10646 = cljs.core.cst$kw$href;
var G__10647 = "app.css";
var G__10648 = cljs.core.cst$kw$rel;
var G__10649 = "stylesheet";
var G__10650 = cljs.core.cst$kw$type;
var G__10651 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__10646,G__10647,G__10648,G__10649,G__10650,G__10651) : hoplon.core.link.call(null,G__10646,G__10647,G__10648,G__10649,G__10650,G__10651));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__10645) : hoplon.core.head.call(null,G__10645));
})(),(function (){var G__10652 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__10653 = (function (){var G__10659 = cljs.core.cst$kw$click;
var G__10660 = ((function (G__10659,G__10652){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__10659,G__10652))
;
var G__10661 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10659,G__10660,G__10661) : hoplon.core.button.call(null,G__10659,G__10660,G__10661));
})();
var G__10654 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__10655 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
var G__10656 = (function (){var con__9967__auto__ = (new cljs.core.Delay(((function (G__10652,G__10653,G__10654,G__10655){
return (function (){
var G__10662 = (function (){var iter__4311__auto__ = ((function (G__10652,G__10653,G__10654,G__10655){
return (function hoplon$app_pages$_index_DOT_html$iter__10663(s__10664){
return (new cljs.core.LazySeq(null,((function (G__10652,G__10653,G__10654,G__10655){
return (function (){
var s__10664__$1 = s__10664;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10664__$1);
if(temp__5457__auto__){
var s__10664__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10664__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__10664__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__10666 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__10665 = (0);
while(true){
if((i__10665 < size__4310__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__10665);
cljs.core.chunk_append(b__10666,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__10667 = cljs.core.cst$kw$click;
var G__10668 = ((function (i__10665,G__10667,n,level,c__4309__auto__,size__4310__auto__,b__10666,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__10665,G__10667,n,level,c__4309__auto__,size__4310__auto__,b__10666,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655){
return (function (m){
return (m + n);
});})(i__10665,G__10667,n,level,c__4309__auto__,size__4310__auto__,b__10666,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655))
], 0));
});})(i__10665,G__10667,n,level,c__4309__auto__,size__4310__auto__,b__10666,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655))
;
var G__10669 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10667,G__10668,G__10669) : hoplon.core.button.call(null,G__10667,G__10668,G__10669));
})());

var G__10707 = (i__10665 + (1));
i__10665 = G__10707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10666),hoplon$app_pages$_index_DOT_html$iter__10663(cljs.core.chunk_rest(s__10664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10666),null);
}
} else {
var level = cljs.core.first(s__10664__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__10670 = cljs.core.cst$kw$click;
var G__10671 = ((function (G__10670,n,level,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__10670,n,level,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655){
return (function (m){
return (m + n);
});})(G__10670,n,level,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655))
], 0));
});})(G__10670,n,level,s__10664__$2,temp__5457__auto__,G__10652,G__10653,G__10654,G__10655))
;
var G__10672 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10670,G__10671,G__10672) : hoplon.core.button.call(null,G__10670,G__10671,G__10672));
})(),hoplon$app_pages$_index_DOT_html$iter__10663(cljs.core.rest(s__10664__$2)));
}
} else {
return null;
}
break;
}
});})(G__10652,G__10653,G__10654,G__10655))
,null,null));
});})(G__10652,G__10653,G__10654,G__10655))
;
return iter__4311__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__10662) : hoplon.core.div.call(null,G__10662));
});})(G__10652,G__10653,G__10654,G__10655))
,null));
var alt__9968__auto__ = (new cljs.core.Delay(((function (con__9967__auto__,G__10652,G__10653,G__10654,G__10655){
return (function (){
return null;
});})(con__9967__auto__,G__10652,G__10653,G__10654,G__10655))
,null));
var tpl__9969__auto__ = ((function (con__9967__auto__,alt__9968__auto__,G__10652,G__10653,G__10654,G__10655){
return (function (p__9970__auto__){
return cljs.core.deref((function (){var or__3936__auto__ = (cljs.core.truth_(p__9970__auto__)?con__9967__auto__:alt__9968__auto__);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9967__auto__,alt__9968__auto__,G__10652,G__10653,G__10654,G__10655))
;
var fexpr__10673 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9969__auto__);
return (fexpr__10673.cljs$core$IFn$_invoke$arity$1 ? fexpr__10673.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__10673.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__10657 = (function (){var G__10674 = cljs.core.cst$kw$class;
var G__10675 = "wrapper";
var G__10676 = (function (){var G__10678 = cljs.core.cst$kw$class;
var G__10679 = "upgrade";
var G__10680 = (function (){var G__10681 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Upgrade your tools") : hoplon.core.caption.call(null,"Upgrade your tools"));
var G__10682 = (function (){var G__10684 = (function (){var G__10685 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10686 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__10687 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__10688 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__10689 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10685,G__10686,G__10687,G__10688,G__10689) : hoplon.core.tr.call(null,G__10685,G__10686,G__10687,G__10688,G__10689));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10684) : hoplon.core.thead.call(null,G__10684));
})();
var G__10683 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10681,G__10682,G__10683) : hoplon.core.table.call(null,G__10681,G__10682,G__10683));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10678,G__10679,G__10680) : hoplon.core.div.call(null,G__10678,G__10679,G__10680));
})();
var G__10677 = (function (){var G__10690 = cljs.core.cst$kw$class;
var G__10691 = "sell";
var G__10692 = (function (){var G__10693 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__10694 = (function (){var G__10696 = (function (){var G__10697 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10698 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__10699 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__10700 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__10701 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10697,G__10698,G__10699,G__10700,G__10701) : hoplon.core.tr.call(null,G__10697,G__10698,G__10699,G__10700,G__10701));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10696) : hoplon.core.thead.call(null,G__10696));
})();
var G__10695 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10693,G__10694,G__10695) : hoplon.core.table.call(null,G__10693,G__10694,G__10695));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10690,G__10691,G__10692) : hoplon.core.div.call(null,G__10690,G__10691,G__10692));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__10674,G__10675,G__10676,G__10677) : hoplon.core.div.call(null,G__10674,G__10675,G__10676,G__10677));
})();
var G__10658 = (function (){var con__9967__auto__ = (new cljs.core.Delay(((function (G__10652,G__10653,G__10654,G__10655,G__10656,G__10657){
return (function (){
var G__10702 = cljs.core.cst$kw$class;
var G__10703 = "debug";
var G__10704 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__10705 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__10702,G__10703,G__10704,G__10705) : hoplon.core.div.call(null,G__10702,G__10703,G__10704,G__10705));
});})(G__10652,G__10653,G__10654,G__10655,G__10656,G__10657))
,null));
var alt__9968__auto__ = (new cljs.core.Delay(((function (con__9967__auto__,G__10652,G__10653,G__10654,G__10655,G__10656,G__10657){
return (function (){
return null;
});})(con__9967__auto__,G__10652,G__10653,G__10654,G__10655,G__10656,G__10657))
,null));
var tpl__9969__auto__ = ((function (con__9967__auto__,alt__9968__auto__,G__10652,G__10653,G__10654,G__10655,G__10656,G__10657){
return (function (p__9970__auto__){
return cljs.core.deref((function (){var or__3936__auto__ = (cljs.core.truth_(p__9970__auto__)?con__9967__auto__:alt__9968__auto__);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9967__auto__,alt__9968__auto__,G__10652,G__10653,G__10654,G__10655,G__10656,G__10657))
;
var fexpr__10706 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9969__auto__);
return (fexpr__10706.cljs$core$IFn$_invoke$arity$1 ? fexpr__10706.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__10706.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$7(G__10652,G__10653,G__10654,G__10655,G__10656,G__10657,G__10658) : hoplon.core.body.call(null,G__10652,G__10653,G__10654,G__10655,G__10656,G__10657,G__10658));
})()], 0));
