// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ui.buttons');
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
ui.buttons.tap_button = (function() { 
var ui$buttons$tap_button__delegate = function (args__10015__auto__){
var vec__10643 = hoplon.core.parse_args(args__10015__auto__);
var map__10646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10643,(0),null);
var map__10646__$1 = ((((!((map__10646 == null)))?(((((map__10646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10646):map__10646);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10646__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10646__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10646__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10646__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10643,(1),null);
var disabled = (function (){var fexpr__10658 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10643,map__10646,map__10646__$1,state,key,btn_txt,n,kids){
return (function (G__10651,G__10652,G__10648,G__10650,G__10649){
var G__10659 = (function (){var G__10660 = G__10650;
var G__10661 = G__10651;
var G__10662 = cljs.core.cst$kw$n;
var G__10663 = G__10652;
return (G__10649.cljs$core$IFn$_invoke$arity$4 ? G__10649.cljs$core$IFn$_invoke$arity$4(G__10660,G__10661,G__10662,G__10663) : G__10649.call(null,G__10660,G__10661,G__10662,G__10663));
})();
return (G__10648.cljs$core$IFn$_invoke$arity$1 ? G__10648.cljs$core$IFn$_invoke$arity$1(G__10659) : G__10648.call(null,G__10659));
});})(vec__10643,map__10646,map__10646__$1,state,key,btn_txt,n,kids))
);
return (fexpr__10658.cljs$core$IFn$_invoke$arity$5 ? fexpr__10658.cljs$core$IFn$_invoke$arity$5(key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__10658.call(null,key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__10643,map__10646,map__10646__$1,state,key,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(state,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__10643,map__10646,map__10646__$1,state,key,btn_txt,n,kids))
;
var G__10664 = cljs.core.cst$kw$disabled;
var G__10665 = disabled;
var G__10666 = cljs.core.cst$kw$click;
var G__10667 = click_fn;
var G__10668 = n;
var G__10669 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10664,G__10665,G__10666,G__10667,G__10668,G__10669) : hoplon.core.button.call(null,G__10664,G__10665,G__10666,G__10667,G__10668,G__10669));
};
var ui$buttons$tap_button = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__10670__i = 0, G__10670__a = new Array(arguments.length -  0);
while (G__10670__i < G__10670__a.length) {G__10670__a[G__10670__i] = arguments[G__10670__i + 0]; ++G__10670__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__10670__a,0,null);
} 
return ui$buttons$tap_button__delegate.call(this,args__10015__auto__);};
ui$buttons$tap_button.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_button.cljs$lang$applyTo = (function (arglist__10671){
var args__10015__auto__ = cljs.core.seq(arglist__10671);
return ui$buttons$tap_button__delegate(args__10015__auto__);
});
ui$buttons$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_button__delegate;
return ui$buttons$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tap_buttons = (function() { 
var ui$buttons$tap_buttons__delegate = function (args__10015__auto__){
var vec__10672 = hoplon.core.parse_args(args__10015__auto__);
var map__10675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10672,(0),null);
var map__10675__$1 = ((((!((map__10675 == null)))?(((((map__10675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10675):map__10675);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10672,(1),null);
var iter__4324__auto__ = ((function (vec__10672,map__10675,map__10675__$1,state,key,btn_txt,kids){
return (function ui$buttons$tap_buttons_$_iter__10677(s__10678){
return (new cljs.core.LazySeq(null,((function (vec__10672,map__10675,map__10675__$1,state,key,btn_txt,kids){
return (function (){
var s__10678__$1 = s__10678;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10678__$1);
if(temp__5457__auto__){
var s__10678__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10678__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10678__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10680 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10679 = (0);
while(true){
if((i__10679 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10679);
cljs.core.chunk_append(b__10680,ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__10681 = (i__10679 + (1));
i__10679 = G__10681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10680),ui$buttons$tap_buttons_$_iter__10677(cljs.core.chunk_rest(s__10678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10680),null);
}
} else {
var n = cljs.core.first(s__10678__$2);
return cljs.core.cons(ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),ui$buttons$tap_buttons_$_iter__10677(cljs.core.rest(s__10678__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10672,map__10675,map__10675__$1,state,key,btn_txt,kids))
,null,null));
});})(vec__10672,map__10675,map__10675__$1,state,key,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var ui$buttons$tap_buttons = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__10682__i = 0, G__10682__a = new Array(arguments.length -  0);
while (G__10682__i < G__10682__a.length) {G__10682__a[G__10682__i] = arguments[G__10682__i + 0]; ++G__10682__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__10682__a,0,null);
} 
return ui$buttons$tap_buttons__delegate.call(this,args__10015__auto__);};
ui$buttons$tap_buttons.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_buttons.cljs$lang$applyTo = (function (arglist__10683){
var args__10015__auto__ = cljs.core.seq(arglist__10683);
return ui$buttons$tap_buttons__delegate(args__10015__auto__);
});
ui$buttons$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_buttons__delegate;
return ui$buttons$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.nexts = (function() { 
var ui$buttons$nexts__delegate = function (args__10015__auto__){
var vec__10684 = hoplon.core.parse_args(args__10015__auto__);
var map__10687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10684,(0),null);
var map__10687__$1 = ((((!((map__10687 == null)))?(((((map__10687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10687):map__10687);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10687__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10684,(1),null);
var G__10689 = cljs.core.cst$kw$class;
var G__10690 = "gain-loss";
var G__10691 = hoplon.core.loop_tpl_STAR_(next,((function (G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids){
return (function (item__10085__auto__){
var vec__10692 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10695 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids))
);
return (fexpr__10695.cljs$core$IFn$_invoke$arity$1 ? fexpr__10695.cljs$core$IFn$_invoke$arity$1(item__10085__auto__) : fexpr__10695.call(null,item__10085__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(0),null);
var name = (function (){var fexpr__10698 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10692,it,G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids){
return (function (G__10696,G__10697){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10696.cljs$core$IFn$_invoke$arity$1 ? G__10696.cljs$core$IFn$_invoke$arity$1(G__10697) : G__10696.call(null,G__10697)))].join('');
});})(vec__10692,it,G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids))
);
return (fexpr__10698.cljs$core$IFn$_invoke$arity$2 ? fexpr__10698.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__10698.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__10701 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__10692,it,G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids){
return (function (G__10699,G__10700){
return (G__10699.cljs$core$IFn$_invoke$arity$1 ? G__10699.cljs$core$IFn$_invoke$arity$1(G__10700) : G__10699.call(null,G__10700));
});})(name,vec__10692,it,G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids))
);
return (fexpr__10701.cljs$core$IFn$_invoke$arity$2 ? fexpr__10701.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__10701.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__10707 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__10692,it,G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids){
return (function (G__10704,G__10702,G__10703){
var G__10708 = "%.2f";
var G__10709 = (G__10703.cljs$core$IFn$_invoke$arity$1 ? G__10703.cljs$core$IFn$_invoke$arity$1(G__10704) : G__10703.call(null,G__10704));
return (G__10702.cljs$core$IFn$_invoke$arity$2 ? G__10702.cljs$core$IFn$_invoke$arity$2(G__10708,G__10709) : G__10702.call(null,G__10708,G__10709));
});})(name,val_bare,vec__10692,it,G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids))
);
return (fexpr__10707.cljs$core$IFn$_invoke$arity$3 ? fexpr__10707.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__10707.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__10710 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10711 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__10710,G__10711) : hoplon.core.tr.call(null,G__10710,G__10711));
});})(G__10689,G__10690,vec__10684,map__10687,map__10687__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10689,G__10690,G__10691) : hoplon.core.table.call(null,G__10689,G__10690,G__10691));
};
var ui$buttons$nexts = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__10712__i = 0, G__10712__a = new Array(arguments.length -  0);
while (G__10712__i < G__10712__a.length) {G__10712__a[G__10712__i] = arguments[G__10712__i + 0]; ++G__10712__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__10712__a,0,null);
} 
return ui$buttons$nexts__delegate.call(this,args__10015__auto__);};
ui$buttons$nexts.cljs$lang$maxFixedArity = 0;
ui$buttons$nexts.cljs$lang$applyTo = (function (arglist__10713){
var args__10015__auto__ = cljs.core.seq(arglist__10713);
return ui$buttons$nexts__delegate(args__10015__auto__);
});
ui$buttons$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$nexts__delegate;
return ui$buttons$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.as_list = (function() { 
var ui$buttons$as_list__delegate = function (args__10015__auto__){
var vec__10714 = hoplon.core.parse_args(args__10015__auto__);
var map__10717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10714,(0),null);
var map__10717__$1 = ((((!((map__10717 == null)))?(((((map__10717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10717):map__10717);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10717__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10717__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10717__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10714,(1),null);
var iter__4324__auto__ = ((function (vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function ui$buttons$as_list_$_iter__10719(s__10720){
return (new cljs.core.LazySeq(null,((function (vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (){
var s__10720__$1 = s__10720;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10720__$1);
if(temp__5457__auto__){
var s__10720__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10720__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10720__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10722 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10721 = (0);
while(true){
if((i__10721 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10721);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10726 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10721,s__10720__$1,name,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10723,G__10725,G__10724){
return (G__10723.cljs$core$IFn$_invoke$arity$2 ? G__10723.cljs$core$IFn$_invoke$arity$2(G__10724,G__10725) : G__10723.call(null,G__10724,G__10725));
});})(i__10721,s__10720__$1,name,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10726.cljs$core$IFn$_invoke$arity$3 ? fexpr__10726.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10726.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__10730 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10721,s__10720__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10729,G__10727,G__10728){
return (G__10727.cljs$core$IFn$_invoke$arity$2 ? G__10727.cljs$core$IFn$_invoke$arity$2(G__10728,G__10729) : G__10727.call(null,G__10728,G__10729));
});})(i__10721,s__10720__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10730.cljs$core$IFn$_invoke$arity$3 ? fexpr__10730.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__10730.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__10734 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10721,s__10720__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10731,G__10733,G__10732){
return (G__10731.cljs$core$IFn$_invoke$arity$2 ? G__10731.cljs$core$IFn$_invoke$arity$2(G__10732,G__10733) : G__10731.call(null,G__10732,G__10733));
});})(i__10721,s__10720__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10734.cljs$core$IFn$_invoke$arity$3 ? fexpr__10734.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10734.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10738 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10721,s__10720__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10735,G__10737,G__10736){
return (G__10735.cljs$core$IFn$_invoke$arity$2 ? G__10735.cljs$core$IFn$_invoke$arity$2(G__10736,G__10737) : G__10735.call(null,G__10736,G__10737));
});})(i__10721,s__10720__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10738.cljs$core$IFn$_invoke$arity$3 ? fexpr__10738.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10738.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__10722,(function (){var G__10739 = cljs.core.cst$kw$class;
var G__10740 = (function (){var fexpr__10749 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10721,s__10720__$1,G__10739,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10747,G__10748){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10747.cljs$core$IFn$_invoke$arity$2 ? G__10747.cljs$core$IFn$_invoke$arity$2(G__10748,(0)) : G__10747.call(null,G__10748,(0))),cljs.core.cst$kw$olditem,(G__10748 > (0))], null);
});})(i__10721,s__10720__$1,G__10739,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10722,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10749.cljs$core$IFn$_invoke$arity$2 ? fexpr__10749.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10749.call(null,cljs.core._EQ_,count));
})();
var G__10741 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10742 = (function (){var G__10750 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10750) : hoplon.core.td.call(null,G__10750));
})();
var G__10743 = (function (){var G__10751 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10751) : hoplon.core.td.call(null,G__10751));
})();
var G__10744 = (function (){var G__10752 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10752) : hoplon.core.td.call(null,G__10752));
})();
var G__10745 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10746 = (function (){var G__10753 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10753) : hoplon.core.td.call(null,G__10753));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__10739,G__10740,G__10741,G__10742,G__10743,G__10744,G__10745,G__10746) : hoplon.core.tr.call(null,G__10739,G__10740,G__10741,G__10742,G__10743,G__10744,G__10745,G__10746));
})());

var G__10785 = (i__10721 + (1));
i__10721 = G__10785;
continue;
} else {
var G__10786 = (i__10721 + (1));
i__10721 = G__10786;
continue;
}
} else {
var G__10787 = (i__10721 + (1));
i__10721 = G__10787;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10722),ui$buttons$as_list_$_iter__10719(cljs.core.chunk_rest(s__10720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10722),null);
}
} else {
var key = cljs.core.first(s__10720__$2);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10757 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10720__$1,name,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10754,G__10756,G__10755){
return (G__10754.cljs$core$IFn$_invoke$arity$2 ? G__10754.cljs$core$IFn$_invoke$arity$2(G__10755,G__10756) : G__10754.call(null,G__10755,G__10756));
});})(s__10720__$1,name,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10757.cljs$core$IFn$_invoke$arity$3 ? fexpr__10757.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10757.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__10761 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10720__$1,name,next_loss,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10760,G__10758,G__10759){
return (G__10758.cljs$core$IFn$_invoke$arity$2 ? G__10758.cljs$core$IFn$_invoke$arity$2(G__10759,G__10760) : G__10758.call(null,G__10759,G__10760));
});})(s__10720__$1,name,next_loss,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10761.cljs$core$IFn$_invoke$arity$3 ? fexpr__10761.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__10761.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__10765 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10720__$1,name,next_loss,next_gain,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10762,G__10764,G__10763){
return (G__10762.cljs$core$IFn$_invoke$arity$2 ? G__10762.cljs$core$IFn$_invoke$arity$2(G__10763,G__10764) : G__10762.call(null,G__10763,G__10764));
});})(s__10720__$1,name,next_loss,next_gain,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10765.cljs$core$IFn$_invoke$arity$3 ? fexpr__10765.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10765.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10769 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10720__$1,name,next_loss,next_gain,count,dependencies,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10766,G__10768,G__10767){
return (G__10766.cljs$core$IFn$_invoke$arity$2 ? G__10766.cljs$core$IFn$_invoke$arity$2(G__10767,G__10768) : G__10766.call(null,G__10767,G__10768));
});})(s__10720__$1,name,next_loss,next_gain,count,dependencies,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10769.cljs$core$IFn$_invoke$arity$3 ? fexpr__10769.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10769.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__10770 = cljs.core.cst$kw$class;
var G__10771 = (function (){var fexpr__10780 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10720__$1,G__10770,name,next_loss,next_gain,count,dependencies,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids){
return (function (G__10778,G__10779){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10778.cljs$core$IFn$_invoke$arity$2 ? G__10778.cljs$core$IFn$_invoke$arity$2(G__10779,(0)) : G__10778.call(null,G__10779,(0))),cljs.core.cst$kw$olditem,(G__10779 > (0))], null);
});})(s__10720__$1,G__10770,name,next_loss,next_gain,count,dependencies,key,s__10720__$2,temp__5457__auto__,vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
);
return (fexpr__10780.cljs$core$IFn$_invoke$arity$2 ? fexpr__10780.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10780.call(null,cljs.core._EQ_,count));
})();
var G__10772 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10773 = (function (){var G__10781 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10781) : hoplon.core.td.call(null,G__10781));
})();
var G__10774 = (function (){var G__10782 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10782) : hoplon.core.td.call(null,G__10782));
})();
var G__10775 = (function (){var G__10783 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10783) : hoplon.core.td.call(null,G__10783));
})();
var G__10776 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10777 = (function (){var G__10784 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10784) : hoplon.core.td.call(null,G__10784));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__10770,G__10771,G__10772,G__10773,G__10774,G__10775,G__10776,G__10777) : hoplon.core.tr.call(null,G__10770,G__10771,G__10772,G__10773,G__10774,G__10775,G__10776,G__10777));
})(),ui$buttons$as_list_$_iter__10719(cljs.core.rest(s__10720__$2)));
} else {
var G__10788 = cljs.core.rest(s__10720__$2);
s__10720__$1 = G__10788;
continue;
}
} else {
var G__10789 = cljs.core.rest(s__10720__$2);
s__10720__$1 = G__10789;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__10714,map__10717,map__10717__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$buttons$as_list = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__10790__i = 0, G__10790__a = new Array(arguments.length -  0);
while (G__10790__i < G__10790__a.length) {G__10790__a[G__10790__i] = arguments[G__10790__i + 0]; ++G__10790__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__10790__a,0,null);
} 
return ui$buttons$as_list__delegate.call(this,args__10015__auto__);};
ui$buttons$as_list.cljs$lang$maxFixedArity = 0;
ui$buttons$as_list.cljs$lang$applyTo = (function (arglist__10791){
var args__10015__auto__ = cljs.core.seq(arglist__10791);
return ui$buttons$as_list__delegate(args__10015__auto__);
});
ui$buttons$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$as_list__delegate;
return ui$buttons$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tool_list = (function() { 
var ui$buttons$tool_list__delegate = function (args__10015__auto__){
var vec__10792 = hoplon.core.parse_args(args__10015__auto__);
var map__10795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10792,(0),null);
var map__10795__$1 = ((((!((map__10795 == null)))?(((((map__10795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10795):map__10795);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10795__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10792,(1),null);
var G__10797 = cljs.core.cst$kw$class;
var G__10798 = "upgrade";
var G__10799 = (function (){var G__10800 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Buy tools") : hoplon.core.caption.call(null,"Buy tools"));
var G__10801 = (function (){var G__10803 = (function (){var G__10804 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10805 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__10806 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__10807 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__10808 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__10809 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__10804,G__10805,G__10806,G__10807,G__10808,G__10809) : hoplon.core.tr.call(null,G__10804,G__10805,G__10806,G__10807,G__10808,G__10809));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10803) : hoplon.core.thead.call(null,G__10803));
})();
var G__10802 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10800,G__10801,G__10802) : hoplon.core.table.call(null,G__10800,G__10801,G__10802));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10797,G__10798,G__10799) : hoplon.core.div.call(null,G__10797,G__10798,G__10799));
};
var ui$buttons$tool_list = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__10810__i = 0, G__10810__a = new Array(arguments.length -  0);
while (G__10810__i < G__10810__a.length) {G__10810__a[G__10810__i] = arguments[G__10810__i + 0]; ++G__10810__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__10810__a,0,null);
} 
return ui$buttons$tool_list__delegate.call(this,args__10015__auto__);};
ui$buttons$tool_list.cljs$lang$maxFixedArity = 0;
ui$buttons$tool_list.cljs$lang$applyTo = (function (arglist__10811){
var args__10015__auto__ = cljs.core.seq(arglist__10811);
return ui$buttons$tool_list__delegate(args__10015__auto__);
});
ui$buttons$tool_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tool_list__delegate;
return ui$buttons$tool_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.product_list = (function() { 
var ui$buttons$product_list__delegate = function (args__10015__auto__){
var vec__10812 = hoplon.core.parse_args(args__10015__auto__);
var map__10815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,(0),null);
var map__10815__$1 = ((((!((map__10815 == null)))?(((((map__10815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10815):map__10815);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10815__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,(1),null);
var G__10817 = cljs.core.cst$kw$class;
var G__10818 = "sell";
var G__10819 = (function (){var G__10820 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__10821 = (function (){var G__10823 = (function (){var G__10824 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10825 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__10826 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__10827 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__10828 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__10829 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__10824,G__10825,G__10826,G__10827,G__10828,G__10829) : hoplon.core.tr.call(null,G__10824,G__10825,G__10826,G__10827,G__10828,G__10829));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10823) : hoplon.core.thead.call(null,G__10823));
})();
var G__10822 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10820,G__10821,G__10822) : hoplon.core.table.call(null,G__10820,G__10821,G__10822));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10817,G__10818,G__10819) : hoplon.core.div.call(null,G__10817,G__10818,G__10819));
};
var ui$buttons$product_list = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__10830__i = 0, G__10830__a = new Array(arguments.length -  0);
while (G__10830__i < G__10830__a.length) {G__10830__a[G__10830__i] = arguments[G__10830__i + 0]; ++G__10830__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__10830__a,0,null);
} 
return ui$buttons$product_list__delegate.call(this,args__10015__auto__);};
ui$buttons$product_list.cljs$lang$maxFixedArity = 0;
ui$buttons$product_list.cljs$lang$applyTo = (function (arglist__10831){
var args__10015__auto__ = cljs.core.seq(arglist__10831);
return ui$buttons$product_list__delegate(args__10015__auto__);
});
ui$buttons$product_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$product_list__delegate;
return ui$buttons$product_list;
})()
;
