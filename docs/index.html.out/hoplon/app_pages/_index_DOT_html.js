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
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__10478 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10474,G__10475){
var G__10479 = "%.0f";
var G__10480 = cljs.core.cst$kw$clicks.cljs$core$IFn$_invoke$arity$2(G__10475,(0));
return (G__10474.cljs$core$IFn$_invoke$arity$2 ? G__10474.cljs$core$IFn$_invoke$arity$2(G__10479,G__10480) : G__10474.call(null,G__10479,G__10480));
}));
return (fexpr__10478.cljs$core$IFn$_invoke$arity$2 ? fexpr__10478.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10478.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__10482 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10481){
return cljs.core.cst$kw$add_DASH_every.cljs$core$IFn$_invoke$arity$2(G__10481,(0));
}));
return (fexpr__10482.cljs$core$IFn$_invoke$arity$1 ? fexpr__10482.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state) : fexpr__10482.call(null,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__10485 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10483,G__10484){
return (G__10483.cljs$core$IFn$_invoke$arity$2 ? G__10483.cljs$core$IFn$_invoke$arity$2("%.2f",G__10484) : G__10483.call(null,"%.2f",G__10484));
}));
return (fexpr__10485.cljs$core$IFn$_invoke$arity$2 ? fexpr__10485.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__10485.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__10490 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10486,G__10487){
var G__10491 = "%.2f";
var G__10492 = cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$2(G__10487,(0));
return (G__10486.cljs$core$IFn$_invoke$arity$2 ? G__10486.cljs$core$IFn$_invoke$arity$2(G__10491,G__10492) : G__10486.call(null,G__10491,G__10492));
}));
return (fexpr__10490.cljs$core$IFn$_invoke$arity$2 ? fexpr__10490.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10490.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
setInterval((function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,(function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
})], 0));
}),(1000));
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.rows = (function() { 
var hoplon$app_pages$_index_DOT_html$rows__delegate = function (args__9848__auto__){
var vec__10493 = hoplon.core.parse_args(args__9848__auto__);
var map__10496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(0),null);
var map__10496__$1 = ((((!((map__10496 == null)))?(((((map__10496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10496):map__10496);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10496__$1,cljs.core.cst$kw$type);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10496__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10493,(1),null);
var iter__4311__auto__ = ((function (vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$rows_$_iter__10498(s__10499){
return (new cljs.core.LazySeq(null,((function (vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (){
var s__10499__$1 = s__10499;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10499__$1);
if(temp__5457__auto__){
var s__10499__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10499__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__10499__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__10501 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__10500 = (0);
while(true){
if((i__10500 < size__4310__auto__)){
var thing = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__10500);
cljs.core.chunk_append(b__10501,(function (){var name = (function (){var G__10502 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10502) : thing.call(null,G__10502));
})();
var loss = (function (){var G__10503 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10503) : thing.call(null,G__10503));
})();
var gain = (function (){var fexpr__10510 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10500,name,loss,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10505,G__10507,G__10504,G__10506){
var G__10511 = "%.2f";
var G__10512 = (G__10505.cljs$core$IFn$_invoke$arity$2 ? G__10505.cljs$core$IFn$_invoke$arity$2(G__10506,G__10507) : G__10505.call(null,G__10506,G__10507));
return (G__10504.cljs$core$IFn$_invoke$arity$2 ? G__10504.cljs$core$IFn$_invoke$arity$2(G__10511,G__10512) : G__10504.call(null,G__10511,G__10512));
});})(i__10500,name,loss,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10510.cljs$core$IFn$_invoke$arity$4 ? fexpr__10510.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10510.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__10516 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10500,name,loss,gain,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10513,G__10515,G__10514){
return (G__10513.cljs$core$IFn$_invoke$arity$2 ? G__10513.cljs$core$IFn$_invoke$arity$2(G__10514,G__10515) : G__10513.call(null,G__10514,G__10515));
});})(i__10500,name,loss,gain,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10516.cljs$core$IFn$_invoke$arity$3 ? fexpr__10516.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state) : fexpr__10516.call(null,clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state));
})();
var click_fn = ((function (i__10500,name,loss,gain,count,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (){
return clicker.engine.tap(hoplon.app_pages._index_DOT_html.state,name);
});})(i__10500,name,loss,gain,count,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
;
var disabled = (function (){var fexpr__10522 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10500,name,loss,gain,count,click_fn,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10520,G__10517,G__10519,G__10518){
var G__10523 = (G__10518.cljs$core$IFn$_invoke$arity$2 ? G__10518.cljs$core$IFn$_invoke$arity$2(G__10519,G__10520) : G__10518.call(null,G__10519,G__10520));
return (G__10517.cljs$core$IFn$_invoke$arity$1 ? G__10517.cljs$core$IFn$_invoke$arity$1(G__10523) : G__10517.call(null,G__10523));
});})(i__10500,name,loss,gain,count,click_fn,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10522.cljs$core$IFn$_invoke$arity$4 ? fexpr__10522.cljs$core$IFn$_invoke$arity$4(name,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_) : fexpr__10522.call(null,name,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_));
})();
var G__10524 = cljs.core.cst$kw$class;
var G__10525 = (function (){var fexpr__10533 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10500,G__10524,name,loss,gain,count,click_fn,disabled,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10531,G__10532){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10531.cljs$core$IFn$_invoke$arity$2 ? G__10531.cljs$core$IFn$_invoke$arity$2(G__10532,(0)) : G__10531.call(null,G__10532,(0))),cljs.core.cst$kw$olditem,(G__10532 > (0))], null);
});})(i__10500,G__10524,name,loss,gain,count,click_fn,disabled,thing,c__4309__auto__,size__4310__auto__,b__10501,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10533.cljs$core$IFn$_invoke$arity$2 ? fexpr__10533.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10533.call(null,cljs.core._EQ_,count));
})();
var G__10526 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10527 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__10528 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__10529 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10530 = (function (){var G__10534 = (function (){var G__10535 = cljs.core.cst$kw$disabled;
var G__10536 = disabled;
var G__10537 = cljs.core.cst$kw$click;
var G__10538 = click_fn;
var G__10539 = btn_txt;
var G__10540 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10535,G__10536,G__10537,G__10538,G__10539,G__10540) : hoplon.core.button.call(null,G__10535,G__10536,G__10537,G__10538,G__10539,G__10540));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10534) : hoplon.core.td.call(null,G__10534));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__10524,G__10525,G__10526,G__10527,G__10528,G__10529,G__10530) : hoplon.core.tr.call(null,G__10524,G__10525,G__10526,G__10527,G__10528,G__10529,G__10530));
})());

var G__10580 = (i__10500 + (1));
i__10500 = G__10580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10501),hoplon$app_pages$_index_DOT_html$rows_$_iter__10498(cljs.core.chunk_rest(s__10499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10501),null);
}
} else {
var thing = cljs.core.first(s__10499__$2);
return cljs.core.cons((function (){var name = (function (){var G__10541 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10541) : thing.call(null,G__10541));
})();
var loss = (function (){var G__10542 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__10542) : thing.call(null,G__10542));
})();
var gain = (function (){var fexpr__10549 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10544,G__10546,G__10543,G__10545){
var G__10550 = "%.2f";
var G__10551 = (G__10544.cljs$core$IFn$_invoke$arity$2 ? G__10544.cljs$core$IFn$_invoke$arity$2(G__10545,G__10546) : G__10544.call(null,G__10545,G__10546));
return (G__10543.cljs$core$IFn$_invoke$arity$2 ? G__10543.cljs$core$IFn$_invoke$arity$2(G__10550,G__10551) : G__10543.call(null,G__10550,G__10551));
});})(name,loss,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10549.cljs$core$IFn$_invoke$arity$4 ? fexpr__10549.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__10549.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__10555 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,gain,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10552,G__10554,G__10553){
return (G__10552.cljs$core$IFn$_invoke$arity$2 ? G__10552.cljs$core$IFn$_invoke$arity$2(G__10553,G__10554) : G__10552.call(null,G__10553,G__10554));
});})(name,loss,gain,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10555.cljs$core$IFn$_invoke$arity$3 ? fexpr__10555.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state) : fexpr__10555.call(null,clicker.engine.thing_count,name,hoplon.app_pages._index_DOT_html.state));
})();
var click_fn = ((function (name,loss,gain,count,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (){
return clicker.engine.tap(hoplon.app_pages._index_DOT_html.state,name);
});})(name,loss,gain,count,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
;
var disabled = (function (){var fexpr__10561 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,loss,gain,count,click_fn,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10559,G__10556,G__10558,G__10557){
var G__10562 = (G__10557.cljs$core$IFn$_invoke$arity$2 ? G__10557.cljs$core$IFn$_invoke$arity$2(G__10558,G__10559) : G__10557.call(null,G__10558,G__10559));
return (G__10556.cljs$core$IFn$_invoke$arity$1 ? G__10556.cljs$core$IFn$_invoke$arity$1(G__10562) : G__10556.call(null,G__10562));
});})(name,loss,gain,count,click_fn,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10561.cljs$core$IFn$_invoke$arity$4 ? fexpr__10561.cljs$core$IFn$_invoke$arity$4(name,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_) : fexpr__10561.call(null,name,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_));
})();
var G__10563 = cljs.core.cst$kw$class;
var G__10564 = (function (){var fexpr__10572 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10563,name,loss,gain,count,click_fn,disabled,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids){
return (function (G__10570,G__10571){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10570.cljs$core$IFn$_invoke$arity$2 ? G__10570.cljs$core$IFn$_invoke$arity$2(G__10571,(0)) : G__10570.call(null,G__10571,(0))),cljs.core.cst$kw$olditem,(G__10571 > (0))], null);
});})(G__10563,name,loss,gain,count,click_fn,disabled,thing,s__10499__$2,temp__5457__auto__,vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
);
return (fexpr__10572.cljs$core$IFn$_invoke$arity$2 ? fexpr__10572.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10572.call(null,cljs.core._EQ_,count));
})();
var G__10565 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10566 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__10567 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__10568 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10569 = (function (){var G__10573 = (function (){var G__10574 = cljs.core.cst$kw$disabled;
var G__10575 = disabled;
var G__10576 = cljs.core.cst$kw$click;
var G__10577 = click_fn;
var G__10578 = btn_txt;
var G__10579 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10574,G__10575,G__10576,G__10577,G__10578,G__10579) : hoplon.core.button.call(null,G__10574,G__10575,G__10576,G__10577,G__10578,G__10579));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10573) : hoplon.core.td.call(null,G__10573));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__10563,G__10564,G__10565,G__10566,G__10567,G__10568,G__10569) : hoplon.core.tr.call(null,G__10563,G__10564,G__10565,G__10566,G__10567,G__10568,G__10569));
})(),hoplon$app_pages$_index_DOT_html$rows_$_iter__10498(cljs.core.rest(s__10499__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
,null,null));
});})(vec__10493,map__10496,map__10496__$1,type,btn_txt,kids))
;
return iter__4311__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data.db.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.cst$kw$items], null)));
};
var hoplon$app_pages$_index_DOT_html$rows = function (var_args){
var args__9848__auto__ = null;
if (arguments.length > 0) {
var G__10581__i = 0, G__10581__a = new Array(arguments.length -  0);
while (G__10581__i < G__10581__a.length) {G__10581__a[G__10581__i] = arguments[G__10581__i + 0]; ++G__10581__i;}
  args__9848__auto__ = new cljs.core.IndexedSeq(G__10581__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$rows__delegate.call(this,args__9848__auto__);};
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$applyTo = (function (arglist__10582){
var args__9848__auto__ = cljs.core.seq(arglist__10582);
return hoplon$app_pages$_index_DOT_html$rows__delegate(args__9848__auto__);
});
hoplon$app_pages$_index_DOT_html$rows.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$rows__delegate;
return hoplon$app_pages$_index_DOT_html$rows;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__10583 = (function (){var G__10584 = cljs.core.cst$kw$href;
var G__10585 = "app.css";
var G__10586 = cljs.core.cst$kw$rel;
var G__10587 = "stylesheet";
var G__10588 = cljs.core.cst$kw$type;
var G__10589 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__10584,G__10585,G__10586,G__10587,G__10588,G__10589) : hoplon.core.link.call(null,G__10584,G__10585,G__10586,G__10587,G__10588,G__10589));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__10583) : hoplon.core.head.call(null,G__10583));
})(),(function (){var G__10590 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__10591 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h3.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__10592 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
var G__10593 = (function (){var G__10596 = cljs.core.cst$kw$click;
var G__10597 = ((function (G__10596,G__10590,G__10591,G__10592){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__10596,G__10590,G__10591,G__10592))
;
var G__10598 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10596,G__10597,G__10598) : hoplon.core.button.call(null,G__10596,G__10597,G__10598));
})();
var G__10594 = (function (){var con__9928__auto__ = (new cljs.core.Delay(((function (G__10590,G__10591,G__10592,G__10593){
return (function (){
var G__10599 = (function (){var iter__4311__auto__ = ((function (G__10590,G__10591,G__10592,G__10593){
return (function hoplon$app_pages$_index_DOT_html$iter__10600(s__10601){
return (new cljs.core.LazySeq(null,((function (G__10590,G__10591,G__10592,G__10593){
return (function (){
var s__10601__$1 = s__10601;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10601__$1);
if(temp__5457__auto__){
var s__10601__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10601__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__10601__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__10603 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__10602 = (0);
while(true){
if((i__10602 < size__4310__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__10602);
cljs.core.chunk_append(b__10603,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__10604 = cljs.core.cst$kw$click;
var G__10605 = ((function (i__10602,G__10604,n,level,c__4309__auto__,size__4310__auto__,b__10603,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__10602,G__10604,n,level,c__4309__auto__,size__4310__auto__,b__10603,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593){
return (function (m){
return (m + n);
});})(i__10602,G__10604,n,level,c__4309__auto__,size__4310__auto__,b__10603,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593))
], 0));
});})(i__10602,G__10604,n,level,c__4309__auto__,size__4310__auto__,b__10603,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593))
;
var G__10606 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10604,G__10605,G__10606) : hoplon.core.button.call(null,G__10604,G__10605,G__10606));
})());

var G__10639 = (i__10602 + (1));
i__10602 = G__10639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10603),hoplon$app_pages$_index_DOT_html$iter__10600(cljs.core.chunk_rest(s__10601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10603),null);
}
} else {
var level = cljs.core.first(s__10601__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__10607 = cljs.core.cst$kw$click;
var G__10608 = ((function (G__10607,n,level,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__10607,n,level,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593){
return (function (m){
return (m + n);
});})(G__10607,n,level,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593))
], 0));
});})(G__10607,n,level,s__10601__$2,temp__5457__auto__,G__10590,G__10591,G__10592,G__10593))
;
var G__10609 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__10607,G__10608,G__10609) : hoplon.core.button.call(null,G__10607,G__10608,G__10609));
})(),hoplon$app_pages$_index_DOT_html$iter__10600(cljs.core.rest(s__10601__$2)));
}
} else {
return null;
}
break;
}
});})(G__10590,G__10591,G__10592,G__10593))
,null,null));
});})(G__10590,G__10591,G__10592,G__10593))
;
return iter__4311__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__10599) : hoplon.core.div.call(null,G__10599));
});})(G__10590,G__10591,G__10592,G__10593))
,null));
var alt__9929__auto__ = (new cljs.core.Delay(((function (con__9928__auto__,G__10590,G__10591,G__10592,G__10593){
return (function (){
return null;
});})(con__9928__auto__,G__10590,G__10591,G__10592,G__10593))
,null));
var tpl__9930__auto__ = ((function (con__9928__auto__,alt__9929__auto__,G__10590,G__10591,G__10592,G__10593){
return (function (p__9931__auto__){
return cljs.core.deref((function (){var or__3936__auto__ = (cljs.core.truth_(p__9931__auto__)?con__9928__auto__:alt__9929__auto__);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__9928__auto__,alt__9929__auto__,G__10590,G__10591,G__10592,G__10593))
;
var fexpr__10610 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__9930__auto__);
return (fexpr__10610.cljs$core$IFn$_invoke$arity$1 ? fexpr__10610.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__10610.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__10595 = (function (){var G__10611 = cljs.core.cst$kw$class;
var G__10612 = "wrapper";
var G__10613 = (function (){var G__10615 = cljs.core.cst$kw$class;
var G__10616 = "upgrade";
var G__10617 = (function (){var G__10618 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Upgrade your tools") : hoplon.core.caption.call(null,"Upgrade your tools"));
var G__10619 = (function (){var G__10621 = (function (){var G__10622 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10623 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__10624 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__10625 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__10626 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10622,G__10623,G__10624,G__10625,G__10626) : hoplon.core.tr.call(null,G__10622,G__10623,G__10624,G__10625,G__10626));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10621) : hoplon.core.thead.call(null,G__10621));
})();
var G__10620 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10618,G__10619,G__10620) : hoplon.core.table.call(null,G__10618,G__10619,G__10620));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10615,G__10616,G__10617) : hoplon.core.div.call(null,G__10615,G__10616,G__10617));
})();
var G__10614 = (function (){var G__10627 = cljs.core.cst$kw$class;
var G__10628 = "sell";
var G__10629 = (function (){var G__10630 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__10631 = (function (){var G__10633 = (function (){var G__10634 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10635 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__10636 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__10637 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__10638 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10634,G__10635,G__10636,G__10637,G__10638) : hoplon.core.tr.call(null,G__10634,G__10635,G__10636,G__10637,G__10638));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10633) : hoplon.core.thead.call(null,G__10633));
})();
var G__10632 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10630,G__10631,G__10632) : hoplon.core.table.call(null,G__10630,G__10631,G__10632));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10627,G__10628,G__10629) : hoplon.core.div.call(null,G__10627,G__10628,G__10629));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__10611,G__10612,G__10613,G__10614) : hoplon.core.div.call(null,G__10611,G__10612,G__10613,G__10614));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$6(G__10590,G__10591,G__10592,G__10593,G__10594,G__10595) : hoplon.core.body.call(null,G__10590,G__10591,G__10592,G__10593,G__10594,G__10595));
})()], 0));
