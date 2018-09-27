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
var ui$buttons$tap_button__delegate = function (args__9938__auto__){
var vec__10566 = hoplon.core.parse_args(args__9938__auto__);
var map__10569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(0),null);
var map__10569__$1 = ((((!((map__10569 == null)))?(((((map__10569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10569):map__10569);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10569__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10569__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10569__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10569__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10566,(1),null);
var disabled = (function (){var fexpr__10581 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10566,map__10569,map__10569__$1,state,key,btn_txt,n,kids){
return (function (G__10574,G__10575,G__10571,G__10573,G__10572){
var G__10582 = (function (){var G__10583 = G__10573;
var G__10584 = G__10574;
var G__10585 = cljs.core.cst$kw$n;
var G__10586 = G__10575;
return (G__10572.cljs$core$IFn$_invoke$arity$4 ? G__10572.cljs$core$IFn$_invoke$arity$4(G__10583,G__10584,G__10585,G__10586) : G__10572.call(null,G__10583,G__10584,G__10585,G__10586));
})();
return (G__10571.cljs$core$IFn$_invoke$arity$1 ? G__10571.cljs$core$IFn$_invoke$arity$1(G__10582) : G__10571.call(null,G__10582));
});})(vec__10566,map__10569,map__10569__$1,state,key,btn_txt,n,kids))
);
return (fexpr__10581.cljs$core$IFn$_invoke$arity$5 ? fexpr__10581.cljs$core$IFn$_invoke$arity$5(key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__10581.call(null,key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__10566,map__10569,map__10569__$1,state,key,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(state,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__10566,map__10569,map__10569__$1,state,key,btn_txt,n,kids))
;
var G__10587 = cljs.core.cst$kw$disabled;
var G__10588 = disabled;
var G__10589 = cljs.core.cst$kw$click;
var G__10590 = click_fn;
var G__10591 = n;
var G__10592 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10587,G__10588,G__10589,G__10590,G__10591,G__10592) : hoplon.core.button.call(null,G__10587,G__10588,G__10589,G__10590,G__10591,G__10592));
};
var ui$buttons$tap_button = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10593__i = 0, G__10593__a = new Array(arguments.length -  0);
while (G__10593__i < G__10593__a.length) {G__10593__a[G__10593__i] = arguments[G__10593__i + 0]; ++G__10593__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10593__a,0,null);
} 
return ui$buttons$tap_button__delegate.call(this,args__9938__auto__);};
ui$buttons$tap_button.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_button.cljs$lang$applyTo = (function (arglist__10594){
var args__9938__auto__ = cljs.core.seq(arglist__10594);
return ui$buttons$tap_button__delegate(args__9938__auto__);
});
ui$buttons$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_button__delegate;
return ui$buttons$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tap_buttons = (function() { 
var ui$buttons$tap_buttons__delegate = function (args__9938__auto__){
var vec__10595 = hoplon.core.parse_args(args__9938__auto__);
var map__10598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10595,(0),null);
var map__10598__$1 = ((((!((map__10598 == null)))?(((((map__10598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10598):map__10598);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10598__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10598__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10598__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10595,(1),null);
var iter__4324__auto__ = ((function (vec__10595,map__10598,map__10598__$1,state,key,btn_txt,kids){
return (function ui$buttons$tap_buttons_$_iter__10600(s__10601){
return (new cljs.core.LazySeq(null,((function (vec__10595,map__10598,map__10598__$1,state,key,btn_txt,kids){
return (function (){
var s__10601__$1 = s__10601;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10601__$1);
if(temp__5457__auto__){
var s__10601__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10601__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10601__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10603 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10602 = (0);
while(true){
if((i__10602 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10602);
cljs.core.chunk_append(b__10603,ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__10604 = (i__10602 + (1));
i__10602 = G__10604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10603),ui$buttons$tap_buttons_$_iter__10600(cljs.core.chunk_rest(s__10601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10603),null);
}
} else {
var n = cljs.core.first(s__10601__$2);
return cljs.core.cons(ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),ui$buttons$tap_buttons_$_iter__10600(cljs.core.rest(s__10601__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10595,map__10598,map__10598__$1,state,key,btn_txt,kids))
,null,null));
});})(vec__10595,map__10598,map__10598__$1,state,key,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var ui$buttons$tap_buttons = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10605__i = 0, G__10605__a = new Array(arguments.length -  0);
while (G__10605__i < G__10605__a.length) {G__10605__a[G__10605__i] = arguments[G__10605__i + 0]; ++G__10605__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10605__a,0,null);
} 
return ui$buttons$tap_buttons__delegate.call(this,args__9938__auto__);};
ui$buttons$tap_buttons.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_buttons.cljs$lang$applyTo = (function (arglist__10606){
var args__9938__auto__ = cljs.core.seq(arglist__10606);
return ui$buttons$tap_buttons__delegate(args__9938__auto__);
});
ui$buttons$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_buttons__delegate;
return ui$buttons$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.nexts = (function() { 
var ui$buttons$nexts__delegate = function (args__9938__auto__){
var vec__10607 = hoplon.core.parse_args(args__9938__auto__);
var map__10610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10607,(0),null);
var map__10610__$1 = ((((!((map__10610 == null)))?(((((map__10610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10610):map__10610);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10610__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10607,(1),null);
var G__10612 = cljs.core.cst$kw$class;
var G__10613 = "gain-loss";
var G__10614 = hoplon.core.loop_tpl_STAR_(next,((function (G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids){
return (function (item__10008__auto__){
var vec__10615 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10618 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids))
);
return (fexpr__10618.cljs$core$IFn$_invoke$arity$1 ? fexpr__10618.cljs$core$IFn$_invoke$arity$1(item__10008__auto__) : fexpr__10618.call(null,item__10008__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10615,(0),null);
var name = (function (){var fexpr__10621 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10615,it,G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids){
return (function (G__10619,G__10620){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10619.cljs$core$IFn$_invoke$arity$1 ? G__10619.cljs$core$IFn$_invoke$arity$1(G__10620) : G__10619.call(null,G__10620)))].join('');
});})(vec__10615,it,G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids))
);
return (fexpr__10621.cljs$core$IFn$_invoke$arity$2 ? fexpr__10621.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__10621.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__10624 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__10615,it,G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids){
return (function (G__10622,G__10623){
return (G__10622.cljs$core$IFn$_invoke$arity$1 ? G__10622.cljs$core$IFn$_invoke$arity$1(G__10623) : G__10622.call(null,G__10623));
});})(name,vec__10615,it,G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids))
);
return (fexpr__10624.cljs$core$IFn$_invoke$arity$2 ? fexpr__10624.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__10624.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__10630 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__10615,it,G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids){
return (function (G__10627,G__10625,G__10626){
var G__10631 = "%.2f";
var G__10632 = (G__10626.cljs$core$IFn$_invoke$arity$1 ? G__10626.cljs$core$IFn$_invoke$arity$1(G__10627) : G__10626.call(null,G__10627));
return (G__10625.cljs$core$IFn$_invoke$arity$2 ? G__10625.cljs$core$IFn$_invoke$arity$2(G__10631,G__10632) : G__10625.call(null,G__10631,G__10632));
});})(name,val_bare,vec__10615,it,G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids))
);
return (fexpr__10630.cljs$core$IFn$_invoke$arity$3 ? fexpr__10630.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__10630.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__10633 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10634 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__10633,G__10634) : hoplon.core.tr.call(null,G__10633,G__10634));
});})(G__10612,G__10613,vec__10607,map__10610,map__10610__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10612,G__10613,G__10614) : hoplon.core.table.call(null,G__10612,G__10613,G__10614));
};
var ui$buttons$nexts = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10635__i = 0, G__10635__a = new Array(arguments.length -  0);
while (G__10635__i < G__10635__a.length) {G__10635__a[G__10635__i] = arguments[G__10635__i + 0]; ++G__10635__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10635__a,0,null);
} 
return ui$buttons$nexts__delegate.call(this,args__9938__auto__);};
ui$buttons$nexts.cljs$lang$maxFixedArity = 0;
ui$buttons$nexts.cljs$lang$applyTo = (function (arglist__10636){
var args__9938__auto__ = cljs.core.seq(arglist__10636);
return ui$buttons$nexts__delegate(args__9938__auto__);
});
ui$buttons$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$nexts__delegate;
return ui$buttons$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.as_list = (function() { 
var ui$buttons$as_list__delegate = function (args__9938__auto__){
var vec__10637 = hoplon.core.parse_args(args__9938__auto__);
var map__10640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10637,(0),null);
var map__10640__$1 = ((((!((map__10640 == null)))?(((((map__10640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10640):map__10640);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10640__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10640__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10640__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10637,(1),null);
var iter__4324__auto__ = ((function (vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function ui$buttons$as_list_$_iter__10642(s__10643){
return (new cljs.core.LazySeq(null,((function (vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (){
var s__10643__$1 = s__10643;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10643__$1);
if(temp__5457__auto__){
var s__10643__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10643__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10643__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10645 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10644 = (0);
while(true){
if((i__10644 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10644);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10649 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10644,s__10643__$1,name,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10646,G__10648,G__10647){
return (G__10646.cljs$core$IFn$_invoke$arity$2 ? G__10646.cljs$core$IFn$_invoke$arity$2(G__10647,G__10648) : G__10646.call(null,G__10647,G__10648));
});})(i__10644,s__10643__$1,name,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10649.cljs$core$IFn$_invoke$arity$3 ? fexpr__10649.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10649.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__10653 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10644,s__10643__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10652,G__10650,G__10651){
return (G__10650.cljs$core$IFn$_invoke$arity$2 ? G__10650.cljs$core$IFn$_invoke$arity$2(G__10651,G__10652) : G__10650.call(null,G__10651,G__10652));
});})(i__10644,s__10643__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10653.cljs$core$IFn$_invoke$arity$3 ? fexpr__10653.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__10653.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__10657 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10644,s__10643__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10654,G__10656,G__10655){
return (G__10654.cljs$core$IFn$_invoke$arity$2 ? G__10654.cljs$core$IFn$_invoke$arity$2(G__10655,G__10656) : G__10654.call(null,G__10655,G__10656));
});})(i__10644,s__10643__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10657.cljs$core$IFn$_invoke$arity$3 ? fexpr__10657.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10657.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10661 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10644,s__10643__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10658,G__10660,G__10659){
return (G__10658.cljs$core$IFn$_invoke$arity$2 ? G__10658.cljs$core$IFn$_invoke$arity$2(G__10659,G__10660) : G__10658.call(null,G__10659,G__10660));
});})(i__10644,s__10643__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10661.cljs$core$IFn$_invoke$arity$3 ? fexpr__10661.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10661.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__10645,(function (){var G__10662 = cljs.core.cst$kw$class;
var G__10663 = (function (){var fexpr__10672 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10644,s__10643__$1,G__10662,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10670,G__10671){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10670.cljs$core$IFn$_invoke$arity$2 ? G__10670.cljs$core$IFn$_invoke$arity$2(G__10671,(0)) : G__10670.call(null,G__10671,(0))),cljs.core.cst$kw$olditem,(G__10671 > (0))], null);
});})(i__10644,s__10643__$1,G__10662,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10645,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10672.cljs$core$IFn$_invoke$arity$2 ? fexpr__10672.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10672.call(null,cljs.core._EQ_,count));
})();
var G__10664 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10665 = (function (){var G__10673 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10673) : hoplon.core.td.call(null,G__10673));
})();
var G__10666 = (function (){var G__10674 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10674) : hoplon.core.td.call(null,G__10674));
})();
var G__10667 = (function (){var G__10675 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10675) : hoplon.core.td.call(null,G__10675));
})();
var G__10668 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10669 = (function (){var G__10676 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10676) : hoplon.core.td.call(null,G__10676));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__10662,G__10663,G__10664,G__10665,G__10666,G__10667,G__10668,G__10669) : hoplon.core.tr.call(null,G__10662,G__10663,G__10664,G__10665,G__10666,G__10667,G__10668,G__10669));
})());

var G__10708 = (i__10644 + (1));
i__10644 = G__10708;
continue;
} else {
var G__10709 = (i__10644 + (1));
i__10644 = G__10709;
continue;
}
} else {
var G__10710 = (i__10644 + (1));
i__10644 = G__10710;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10645),ui$buttons$as_list_$_iter__10642(cljs.core.chunk_rest(s__10643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10645),null);
}
} else {
var key = cljs.core.first(s__10643__$2);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10680 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10643__$1,name,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10677,G__10679,G__10678){
return (G__10677.cljs$core$IFn$_invoke$arity$2 ? G__10677.cljs$core$IFn$_invoke$arity$2(G__10678,G__10679) : G__10677.call(null,G__10678,G__10679));
});})(s__10643__$1,name,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10680.cljs$core$IFn$_invoke$arity$3 ? fexpr__10680.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10680.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__10684 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10643__$1,name,next_loss,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10683,G__10681,G__10682){
return (G__10681.cljs$core$IFn$_invoke$arity$2 ? G__10681.cljs$core$IFn$_invoke$arity$2(G__10682,G__10683) : G__10681.call(null,G__10682,G__10683));
});})(s__10643__$1,name,next_loss,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10684.cljs$core$IFn$_invoke$arity$3 ? fexpr__10684.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__10684.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__10688 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10643__$1,name,next_loss,next_gain,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10685,G__10687,G__10686){
return (G__10685.cljs$core$IFn$_invoke$arity$2 ? G__10685.cljs$core$IFn$_invoke$arity$2(G__10686,G__10687) : G__10685.call(null,G__10686,G__10687));
});})(s__10643__$1,name,next_loss,next_gain,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10688.cljs$core$IFn$_invoke$arity$3 ? fexpr__10688.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10688.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10692 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10643__$1,name,next_loss,next_gain,count,dependencies,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10689,G__10691,G__10690){
return (G__10689.cljs$core$IFn$_invoke$arity$2 ? G__10689.cljs$core$IFn$_invoke$arity$2(G__10690,G__10691) : G__10689.call(null,G__10690,G__10691));
});})(s__10643__$1,name,next_loss,next_gain,count,dependencies,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10692.cljs$core$IFn$_invoke$arity$3 ? fexpr__10692.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10692.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__10693 = cljs.core.cst$kw$class;
var G__10694 = (function (){var fexpr__10703 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10643__$1,G__10693,name,next_loss,next_gain,count,dependencies,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids){
return (function (G__10701,G__10702){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10701.cljs$core$IFn$_invoke$arity$2 ? G__10701.cljs$core$IFn$_invoke$arity$2(G__10702,(0)) : G__10701.call(null,G__10702,(0))),cljs.core.cst$kw$olditem,(G__10702 > (0))], null);
});})(s__10643__$1,G__10693,name,next_loss,next_gain,count,dependencies,key,s__10643__$2,temp__5457__auto__,vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
);
return (fexpr__10703.cljs$core$IFn$_invoke$arity$2 ? fexpr__10703.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10703.call(null,cljs.core._EQ_,count));
})();
var G__10695 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10696 = (function (){var G__10704 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10704) : hoplon.core.td.call(null,G__10704));
})();
var G__10697 = (function (){var G__10705 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10705) : hoplon.core.td.call(null,G__10705));
})();
var G__10698 = (function (){var G__10706 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10706) : hoplon.core.td.call(null,G__10706));
})();
var G__10699 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10700 = (function (){var G__10707 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10707) : hoplon.core.td.call(null,G__10707));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__10693,G__10694,G__10695,G__10696,G__10697,G__10698,G__10699,G__10700) : hoplon.core.tr.call(null,G__10693,G__10694,G__10695,G__10696,G__10697,G__10698,G__10699,G__10700));
})(),ui$buttons$as_list_$_iter__10642(cljs.core.rest(s__10643__$2)));
} else {
var G__10711 = cljs.core.rest(s__10643__$2);
s__10643__$1 = G__10711;
continue;
}
} else {
var G__10712 = cljs.core.rest(s__10643__$2);
s__10643__$1 = G__10712;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__10637,map__10640,map__10640__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$buttons$as_list = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10713__i = 0, G__10713__a = new Array(arguments.length -  0);
while (G__10713__i < G__10713__a.length) {G__10713__a[G__10713__i] = arguments[G__10713__i + 0]; ++G__10713__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10713__a,0,null);
} 
return ui$buttons$as_list__delegate.call(this,args__9938__auto__);};
ui$buttons$as_list.cljs$lang$maxFixedArity = 0;
ui$buttons$as_list.cljs$lang$applyTo = (function (arglist__10714){
var args__9938__auto__ = cljs.core.seq(arglist__10714);
return ui$buttons$as_list__delegate(args__9938__auto__);
});
ui$buttons$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$as_list__delegate;
return ui$buttons$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tool_list = (function() { 
var ui$buttons$tool_list__delegate = function (args__9938__auto__){
var vec__10715 = hoplon.core.parse_args(args__9938__auto__);
var map__10718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10715,(0),null);
var map__10718__$1 = ((((!((map__10718 == null)))?(((((map__10718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10718):map__10718);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10718__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10715,(1),null);
var G__10720 = cljs.core.cst$kw$class;
var G__10721 = "upgrade";
var G__10722 = (function (){var G__10723 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Buy tools") : hoplon.core.caption.call(null,"Buy tools"));
var G__10724 = (function (){var G__10726 = (function (){var G__10727 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10728 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__10729 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__10730 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__10731 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__10732 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__10727,G__10728,G__10729,G__10730,G__10731,G__10732) : hoplon.core.tr.call(null,G__10727,G__10728,G__10729,G__10730,G__10731,G__10732));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10726) : hoplon.core.thead.call(null,G__10726));
})();
var G__10725 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10723,G__10724,G__10725) : hoplon.core.table.call(null,G__10723,G__10724,G__10725));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10720,G__10721,G__10722) : hoplon.core.div.call(null,G__10720,G__10721,G__10722));
};
var ui$buttons$tool_list = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10733__i = 0, G__10733__a = new Array(arguments.length -  0);
while (G__10733__i < G__10733__a.length) {G__10733__a[G__10733__i] = arguments[G__10733__i + 0]; ++G__10733__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10733__a,0,null);
} 
return ui$buttons$tool_list__delegate.call(this,args__9938__auto__);};
ui$buttons$tool_list.cljs$lang$maxFixedArity = 0;
ui$buttons$tool_list.cljs$lang$applyTo = (function (arglist__10734){
var args__9938__auto__ = cljs.core.seq(arglist__10734);
return ui$buttons$tool_list__delegate(args__9938__auto__);
});
ui$buttons$tool_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tool_list__delegate;
return ui$buttons$tool_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.product_list = (function() { 
var ui$buttons$product_list__delegate = function (args__9938__auto__){
var vec__10735 = hoplon.core.parse_args(args__9938__auto__);
var map__10738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10735,(0),null);
var map__10738__$1 = ((((!((map__10738 == null)))?(((((map__10738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10738):map__10738);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10738__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10735,(1),null);
var G__10740 = cljs.core.cst$kw$class;
var G__10741 = "sell";
var G__10742 = (function (){var G__10743 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__10744 = (function (){var G__10746 = (function (){var G__10747 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10748 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__10749 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__10750 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__10751 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__10752 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__10747,G__10748,G__10749,G__10750,G__10751,G__10752) : hoplon.core.tr.call(null,G__10747,G__10748,G__10749,G__10750,G__10751,G__10752));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10746) : hoplon.core.thead.call(null,G__10746));
})();
var G__10745 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10743,G__10744,G__10745) : hoplon.core.table.call(null,G__10743,G__10744,G__10745));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10740,G__10741,G__10742) : hoplon.core.div.call(null,G__10740,G__10741,G__10742));
};
var ui$buttons$product_list = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10753__i = 0, G__10753__a = new Array(arguments.length -  0);
while (G__10753__i < G__10753__a.length) {G__10753__a[G__10753__i] = arguments[G__10753__i + 0]; ++G__10753__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10753__a,0,null);
} 
return ui$buttons$product_list__delegate.call(this,args__9938__auto__);};
ui$buttons$product_list.cljs$lang$maxFixedArity = 0;
ui$buttons$product_list.cljs$lang$applyTo = (function (arglist__10754){
var args__9938__auto__ = cljs.core.seq(arglist__10754);
return ui$buttons$product_list__delegate(args__9938__auto__);
});
ui$buttons$product_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$product_list__delegate;
return ui$buttons$product_list;
})()
;
