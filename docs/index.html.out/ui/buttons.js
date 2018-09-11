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
var ui$buttons$tap_button__delegate = function (args__10022__auto__){
var vec__10650 = hoplon.core.parse_args(args__10022__auto__);
var map__10653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10650,(0),null);
var map__10653__$1 = ((((!((map__10653 == null)))?(((((map__10653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10653):map__10653);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10653__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10653__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10653__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10653__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10650,(1),null);
var disabled = (function (){var fexpr__10665 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10650,map__10653,map__10653__$1,state,key,btn_txt,n,kids){
return (function (G__10658,G__10659,G__10655,G__10657,G__10656){
var G__10666 = (function (){var G__10667 = G__10657;
var G__10668 = G__10658;
var G__10669 = cljs.core.cst$kw$n;
var G__10670 = G__10659;
return (G__10656.cljs$core$IFn$_invoke$arity$4 ? G__10656.cljs$core$IFn$_invoke$arity$4(G__10667,G__10668,G__10669,G__10670) : G__10656.call(null,G__10667,G__10668,G__10669,G__10670));
})();
return (G__10655.cljs$core$IFn$_invoke$arity$1 ? G__10655.cljs$core$IFn$_invoke$arity$1(G__10666) : G__10655.call(null,G__10666));
});})(vec__10650,map__10653,map__10653__$1,state,key,btn_txt,n,kids))
);
return (fexpr__10665.cljs$core$IFn$_invoke$arity$5 ? fexpr__10665.cljs$core$IFn$_invoke$arity$5(key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__10665.call(null,key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__10650,map__10653,map__10653__$1,state,key,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(state,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
});})(disabled,vec__10650,map__10653,map__10653__$1,state,key,btn_txt,n,kids))
;
var G__10671 = cljs.core.cst$kw$disabled;
var G__10672 = disabled;
var G__10673 = cljs.core.cst$kw$click;
var G__10674 = click_fn;
var G__10675 = n;
var G__10676 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10671,G__10672,G__10673,G__10674,G__10675,G__10676) : hoplon.core.button.call(null,G__10671,G__10672,G__10673,G__10674,G__10675,G__10676));
};
var ui$buttons$tap_button = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__10677__i = 0, G__10677__a = new Array(arguments.length -  0);
while (G__10677__i < G__10677__a.length) {G__10677__a[G__10677__i] = arguments[G__10677__i + 0]; ++G__10677__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__10677__a,0,null);
} 
return ui$buttons$tap_button__delegate.call(this,args__10022__auto__);};
ui$buttons$tap_button.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_button.cljs$lang$applyTo = (function (arglist__10678){
var args__10022__auto__ = cljs.core.seq(arglist__10678);
return ui$buttons$tap_button__delegate(args__10022__auto__);
});
ui$buttons$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_button__delegate;
return ui$buttons$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tap_buttons = (function() { 
var ui$buttons$tap_buttons__delegate = function (args__10022__auto__){
var vec__10679 = hoplon.core.parse_args(args__10022__auto__);
var map__10682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10679,(0),null);
var map__10682__$1 = ((((!((map__10682 == null)))?(((((map__10682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10682):map__10682);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10682__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10682__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10682__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10679,(1),null);
var iter__4324__auto__ = ((function (vec__10679,map__10682,map__10682__$1,state,key,btn_txt,kids){
return (function ui$buttons$tap_buttons_$_iter__10684(s__10685){
return (new cljs.core.LazySeq(null,((function (vec__10679,map__10682,map__10682__$1,state,key,btn_txt,kids){
return (function (){
var s__10685__$1 = s__10685;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10685__$1);
if(temp__5457__auto__){
var s__10685__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10685__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10685__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10687 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10686 = (0);
while(true){
if((i__10686 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10686);
cljs.core.chunk_append(b__10687,ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__10688 = (i__10686 + (1));
i__10686 = G__10688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10687),ui$buttons$tap_buttons_$_iter__10684(cljs.core.chunk_rest(s__10685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10687),null);
}
} else {
var n = cljs.core.first(s__10685__$2);
return cljs.core.cons(ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),ui$buttons$tap_buttons_$_iter__10684(cljs.core.rest(s__10685__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10679,map__10682,map__10682__$1,state,key,btn_txt,kids))
,null,null));
});})(vec__10679,map__10682,map__10682__$1,state,key,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var ui$buttons$tap_buttons = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__10689__i = 0, G__10689__a = new Array(arguments.length -  0);
while (G__10689__i < G__10689__a.length) {G__10689__a[G__10689__i] = arguments[G__10689__i + 0]; ++G__10689__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__10689__a,0,null);
} 
return ui$buttons$tap_buttons__delegate.call(this,args__10022__auto__);};
ui$buttons$tap_buttons.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_buttons.cljs$lang$applyTo = (function (arglist__10690){
var args__10022__auto__ = cljs.core.seq(arglist__10690);
return ui$buttons$tap_buttons__delegate(args__10022__auto__);
});
ui$buttons$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_buttons__delegate;
return ui$buttons$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.nexts = (function() { 
var ui$buttons$nexts__delegate = function (args__10022__auto__){
var vec__10691 = hoplon.core.parse_args(args__10022__auto__);
var map__10694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10691,(0),null);
var map__10694__$1 = ((((!((map__10694 == null)))?(((((map__10694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10694):map__10694);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10694__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10691,(1),null);
var G__10696 = cljs.core.cst$kw$class;
var G__10697 = "gain-loss";
var G__10698 = hoplon.core.loop_tpl_STAR_(next,((function (G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids){
return (function (item__10092__auto__){
var vec__10699 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10702 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids))
);
return (fexpr__10702.cljs$core$IFn$_invoke$arity$1 ? fexpr__10702.cljs$core$IFn$_invoke$arity$1(item__10092__auto__) : fexpr__10702.call(null,item__10092__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10699,(0),null);
var name = (function (){var fexpr__10705 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10699,it,G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids){
return (function (G__10703,G__10704){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10703.cljs$core$IFn$_invoke$arity$1 ? G__10703.cljs$core$IFn$_invoke$arity$1(G__10704) : G__10703.call(null,G__10704)))].join('');
});})(vec__10699,it,G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids))
);
return (fexpr__10705.cljs$core$IFn$_invoke$arity$2 ? fexpr__10705.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__10705.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__10708 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__10699,it,G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids){
return (function (G__10706,G__10707){
return (G__10706.cljs$core$IFn$_invoke$arity$1 ? G__10706.cljs$core$IFn$_invoke$arity$1(G__10707) : G__10706.call(null,G__10707));
});})(name,vec__10699,it,G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids))
);
return (fexpr__10708.cljs$core$IFn$_invoke$arity$2 ? fexpr__10708.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__10708.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__10714 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__10699,it,G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids){
return (function (G__10711,G__10709,G__10710){
var G__10715 = "%.2f";
var G__10716 = (G__10710.cljs$core$IFn$_invoke$arity$1 ? G__10710.cljs$core$IFn$_invoke$arity$1(G__10711) : G__10710.call(null,G__10711));
return (G__10709.cljs$core$IFn$_invoke$arity$2 ? G__10709.cljs$core$IFn$_invoke$arity$2(G__10715,G__10716) : G__10709.call(null,G__10715,G__10716));
});})(name,val_bare,vec__10699,it,G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids))
);
return (fexpr__10714.cljs$core$IFn$_invoke$arity$3 ? fexpr__10714.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__10714.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__10717 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10718 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__10717,G__10718) : hoplon.core.tr.call(null,G__10717,G__10718));
});})(G__10696,G__10697,vec__10691,map__10694,map__10694__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10696,G__10697,G__10698) : hoplon.core.table.call(null,G__10696,G__10697,G__10698));
};
var ui$buttons$nexts = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__10719__i = 0, G__10719__a = new Array(arguments.length -  0);
while (G__10719__i < G__10719__a.length) {G__10719__a[G__10719__i] = arguments[G__10719__i + 0]; ++G__10719__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__10719__a,0,null);
} 
return ui$buttons$nexts__delegate.call(this,args__10022__auto__);};
ui$buttons$nexts.cljs$lang$maxFixedArity = 0;
ui$buttons$nexts.cljs$lang$applyTo = (function (arglist__10720){
var args__10022__auto__ = cljs.core.seq(arglist__10720);
return ui$buttons$nexts__delegate(args__10022__auto__);
});
ui$buttons$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$nexts__delegate;
return ui$buttons$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.as_list = (function() { 
var ui$buttons$as_list__delegate = function (args__10022__auto__){
var vec__10721 = hoplon.core.parse_args(args__10022__auto__);
var map__10724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10721,(0),null);
var map__10724__$1 = ((((!((map__10724 == null)))?(((((map__10724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10724):map__10724);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10721,(1),null);
var iter__4324__auto__ = ((function (vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function ui$buttons$as_list_$_iter__10726(s__10727){
return (new cljs.core.LazySeq(null,((function (vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (){
var s__10727__$1 = s__10727;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10727__$1);
if(temp__5457__auto__){
var s__10727__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10727__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10727__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10729 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10728 = (0);
while(true){
if((i__10728 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10728);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10733 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10728,s__10727__$1,name,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10730,G__10732,G__10731){
return (G__10730.cljs$core$IFn$_invoke$arity$2 ? G__10730.cljs$core$IFn$_invoke$arity$2(G__10731,G__10732) : G__10730.call(null,G__10731,G__10732));
});})(i__10728,s__10727__$1,name,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10733.cljs$core$IFn$_invoke$arity$3 ? fexpr__10733.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10733.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__10737 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10728,s__10727__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10736,G__10734,G__10735){
return (G__10734.cljs$core$IFn$_invoke$arity$2 ? G__10734.cljs$core$IFn$_invoke$arity$2(G__10735,G__10736) : G__10734.call(null,G__10735,G__10736));
});})(i__10728,s__10727__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10737.cljs$core$IFn$_invoke$arity$3 ? fexpr__10737.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__10737.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__10741 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10728,s__10727__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10738,G__10740,G__10739){
return (G__10738.cljs$core$IFn$_invoke$arity$2 ? G__10738.cljs$core$IFn$_invoke$arity$2(G__10739,G__10740) : G__10738.call(null,G__10739,G__10740));
});})(i__10728,s__10727__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10741.cljs$core$IFn$_invoke$arity$3 ? fexpr__10741.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10741.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10745 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10728,s__10727__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10742,G__10744,G__10743){
return (G__10742.cljs$core$IFn$_invoke$arity$2 ? G__10742.cljs$core$IFn$_invoke$arity$2(G__10743,G__10744) : G__10742.call(null,G__10743,G__10744));
});})(i__10728,s__10727__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10745.cljs$core$IFn$_invoke$arity$3 ? fexpr__10745.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10745.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__10729,(function (){var G__10746 = cljs.core.cst$kw$class;
var G__10747 = (function (){var fexpr__10756 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10728,s__10727__$1,G__10746,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10754,G__10755){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10754.cljs$core$IFn$_invoke$arity$2 ? G__10754.cljs$core$IFn$_invoke$arity$2(G__10755,(0)) : G__10754.call(null,G__10755,(0))),cljs.core.cst$kw$olditem,(G__10755 > (0))], null);
});})(i__10728,s__10727__$1,G__10746,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__10729,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10756.cljs$core$IFn$_invoke$arity$2 ? fexpr__10756.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10756.call(null,cljs.core._EQ_,count));
})();
var G__10748 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10749 = (function (){var G__10757 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10757) : hoplon.core.td.call(null,G__10757));
})();
var G__10750 = (function (){var G__10758 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10758) : hoplon.core.td.call(null,G__10758));
})();
var G__10751 = (function (){var G__10759 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10759) : hoplon.core.td.call(null,G__10759));
})();
var G__10752 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10753 = (function (){var G__10760 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10760) : hoplon.core.td.call(null,G__10760));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__10746,G__10747,G__10748,G__10749,G__10750,G__10751,G__10752,G__10753) : hoplon.core.tr.call(null,G__10746,G__10747,G__10748,G__10749,G__10750,G__10751,G__10752,G__10753));
})());

var G__10792 = (i__10728 + (1));
i__10728 = G__10792;
continue;
} else {
var G__10793 = (i__10728 + (1));
i__10728 = G__10793;
continue;
}
} else {
var G__10794 = (i__10728 + (1));
i__10728 = G__10794;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10729),ui$buttons$as_list_$_iter__10726(cljs.core.chunk_rest(s__10727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10729),null);
}
} else {
var key = cljs.core.first(s__10727__$2);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10764 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10727__$1,name,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10761,G__10763,G__10762){
return (G__10761.cljs$core$IFn$_invoke$arity$2 ? G__10761.cljs$core$IFn$_invoke$arity$2(G__10762,G__10763) : G__10761.call(null,G__10762,G__10763));
});})(s__10727__$1,name,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10764.cljs$core$IFn$_invoke$arity$3 ? fexpr__10764.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10764.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__10768 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10727__$1,name,next_loss,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10767,G__10765,G__10766){
return (G__10765.cljs$core$IFn$_invoke$arity$2 ? G__10765.cljs$core$IFn$_invoke$arity$2(G__10766,G__10767) : G__10765.call(null,G__10766,G__10767));
});})(s__10727__$1,name,next_loss,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10768.cljs$core$IFn$_invoke$arity$3 ? fexpr__10768.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__10768.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__10772 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10727__$1,name,next_loss,next_gain,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10769,G__10771,G__10770){
return (G__10769.cljs$core$IFn$_invoke$arity$2 ? G__10769.cljs$core$IFn$_invoke$arity$2(G__10770,G__10771) : G__10769.call(null,G__10770,G__10771));
});})(s__10727__$1,name,next_loss,next_gain,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10772.cljs$core$IFn$_invoke$arity$3 ? fexpr__10772.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10772.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10776 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10727__$1,name,next_loss,next_gain,count,dependencies,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10773,G__10775,G__10774){
return (G__10773.cljs$core$IFn$_invoke$arity$2 ? G__10773.cljs$core$IFn$_invoke$arity$2(G__10774,G__10775) : G__10773.call(null,G__10774,G__10775));
});})(s__10727__$1,name,next_loss,next_gain,count,dependencies,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10776.cljs$core$IFn$_invoke$arity$3 ? fexpr__10776.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10776.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__10777 = cljs.core.cst$kw$class;
var G__10778 = (function (){var fexpr__10787 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10727__$1,G__10777,name,next_loss,next_gain,count,dependencies,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids){
return (function (G__10785,G__10786){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__10785.cljs$core$IFn$_invoke$arity$2 ? G__10785.cljs$core$IFn$_invoke$arity$2(G__10786,(0)) : G__10785.call(null,G__10786,(0))),cljs.core.cst$kw$olditem,(G__10786 > (0))], null);
});})(s__10727__$1,G__10777,name,next_loss,next_gain,count,dependencies,key,s__10727__$2,temp__5457__auto__,vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
);
return (fexpr__10787.cljs$core$IFn$_invoke$arity$2 ? fexpr__10787.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__10787.call(null,cljs.core._EQ_,count));
})();
var G__10779 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10780 = (function (){var G__10788 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10788) : hoplon.core.td.call(null,G__10788));
})();
var G__10781 = (function (){var G__10789 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10789) : hoplon.core.td.call(null,G__10789));
})();
var G__10782 = (function (){var G__10790 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10790) : hoplon.core.td.call(null,G__10790));
})();
var G__10783 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__10784 = (function (){var G__10791 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10791) : hoplon.core.td.call(null,G__10791));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__10777,G__10778,G__10779,G__10780,G__10781,G__10782,G__10783,G__10784) : hoplon.core.tr.call(null,G__10777,G__10778,G__10779,G__10780,G__10781,G__10782,G__10783,G__10784));
})(),ui$buttons$as_list_$_iter__10726(cljs.core.rest(s__10727__$2)));
} else {
var G__10795 = cljs.core.rest(s__10727__$2);
s__10727__$1 = G__10795;
continue;
}
} else {
var G__10796 = cljs.core.rest(s__10727__$2);
s__10727__$1 = G__10796;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__10721,map__10724,map__10724__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$buttons$as_list = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__10797__i = 0, G__10797__a = new Array(arguments.length -  0);
while (G__10797__i < G__10797__a.length) {G__10797__a[G__10797__i] = arguments[G__10797__i + 0]; ++G__10797__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__10797__a,0,null);
} 
return ui$buttons$as_list__delegate.call(this,args__10022__auto__);};
ui$buttons$as_list.cljs$lang$maxFixedArity = 0;
ui$buttons$as_list.cljs$lang$applyTo = (function (arglist__10798){
var args__10022__auto__ = cljs.core.seq(arglist__10798);
return ui$buttons$as_list__delegate(args__10022__auto__);
});
ui$buttons$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$as_list__delegate;
return ui$buttons$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tool_list = (function() { 
var ui$buttons$tool_list__delegate = function (args__10022__auto__){
var vec__10799 = hoplon.core.parse_args(args__10022__auto__);
var map__10802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10799,(0),null);
var map__10802__$1 = ((((!((map__10802 == null)))?(((((map__10802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10802):map__10802);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10802__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10799,(1),null);
var G__10804 = cljs.core.cst$kw$class;
var G__10805 = "upgrade";
var G__10806 = (function (){var G__10807 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Buy tools") : hoplon.core.caption.call(null,"Buy tools"));
var G__10808 = (function (){var G__10810 = (function (){var G__10811 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10812 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__10813 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__10814 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__10815 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__10816 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__10811,G__10812,G__10813,G__10814,G__10815,G__10816) : hoplon.core.tr.call(null,G__10811,G__10812,G__10813,G__10814,G__10815,G__10816));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10810) : hoplon.core.thead.call(null,G__10810));
})();
var G__10809 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10807,G__10808,G__10809) : hoplon.core.table.call(null,G__10807,G__10808,G__10809));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10804,G__10805,G__10806) : hoplon.core.div.call(null,G__10804,G__10805,G__10806));
};
var ui$buttons$tool_list = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__10817__i = 0, G__10817__a = new Array(arguments.length -  0);
while (G__10817__i < G__10817__a.length) {G__10817__a[G__10817__i] = arguments[G__10817__i + 0]; ++G__10817__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__10817__a,0,null);
} 
return ui$buttons$tool_list__delegate.call(this,args__10022__auto__);};
ui$buttons$tool_list.cljs$lang$maxFixedArity = 0;
ui$buttons$tool_list.cljs$lang$applyTo = (function (arglist__10818){
var args__10022__auto__ = cljs.core.seq(arglist__10818);
return ui$buttons$tool_list__delegate(args__10022__auto__);
});
ui$buttons$tool_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tool_list__delegate;
return ui$buttons$tool_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.product_list = (function() { 
var ui$buttons$product_list__delegate = function (args__10022__auto__){
var vec__10819 = hoplon.core.parse_args(args__10022__auto__);
var map__10822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10819,(0),null);
var map__10822__$1 = ((((!((map__10822 == null)))?(((((map__10822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10822):map__10822);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10822__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10819,(1),null);
var G__10824 = cljs.core.cst$kw$class;
var G__10825 = "sell";
var G__10826 = (function (){var G__10827 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__10828 = (function (){var G__10830 = (function (){var G__10831 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10832 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__10833 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__10834 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__10835 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__10836 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__10831,G__10832,G__10833,G__10834,G__10835,G__10836) : hoplon.core.tr.call(null,G__10831,G__10832,G__10833,G__10834,G__10835,G__10836));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10830) : hoplon.core.thead.call(null,G__10830));
})();
var G__10829 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10827,G__10828,G__10829) : hoplon.core.table.call(null,G__10827,G__10828,G__10829));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10824,G__10825,G__10826) : hoplon.core.div.call(null,G__10824,G__10825,G__10826));
};
var ui$buttons$product_list = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__10837__i = 0, G__10837__a = new Array(arguments.length -  0);
while (G__10837__i < G__10837__a.length) {G__10837__a[G__10837__i] = arguments[G__10837__i + 0]; ++G__10837__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__10837__a,0,null);
} 
return ui$buttons$product_list__delegate.call(this,args__10022__auto__);};
ui$buttons$product_list.cljs$lang$maxFixedArity = 0;
ui$buttons$product_list.cljs$lang$applyTo = (function (arglist__10838){
var args__10022__auto__ = cljs.core.seq(arglist__10838);
return ui$buttons$product_list__delegate(args__10022__auto__);
});
ui$buttons$product_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$product_list__delegate;
return ui$buttons$product_list;
})()
;
