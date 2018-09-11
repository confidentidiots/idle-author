// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ui.research');
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
ui.research.tap_button = (function() { 
var ui$research$tap_button__delegate = function (args__10022__auto__){
var vec__14652 = hoplon.core.parse_args(args__10022__auto__);
var map__14655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14652,(0),null);
var map__14655__$1 = ((((!((map__14655 == null)))?(((((map__14655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14655):map__14655);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14655__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14655__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14655__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14652,(1),null);
var disabled = (function (){var fexpr__14662 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14652,map__14655,map__14655__$1,state,key,btn_txt,kids){
return (function (G__14660,G__14657,G__14659,G__14658){
var G__14663 = (G__14658.cljs$core$IFn$_invoke$arity$2 ? G__14658.cljs$core$IFn$_invoke$arity$2(G__14659,G__14660) : G__14658.call(null,G__14659,G__14660));
return (G__14657.cljs$core$IFn$_invoke$arity$1 ? G__14657.cljs$core$IFn$_invoke$arity$1(G__14663) : G__14657.call(null,G__14663));
});})(vec__14652,map__14655,map__14655__$1,state,key,btn_txt,kids))
);
return (fexpr__14662.cljs$core$IFn$_invoke$arity$4 ? fexpr__14662.cljs$core$IFn$_invoke$arity$4(key,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__14662.call(null,key,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14652,map__14655,map__14655__$1,state,key,btn_txt,kids){
return (function (){
return clicker.engine.tap(state,key);
});})(disabled,vec__14652,map__14655,map__14655__$1,state,key,btn_txt,kids))
;
var G__14664 = cljs.core.cst$kw$disabled;
var G__14665 = disabled;
var G__14666 = cljs.core.cst$kw$click;
var G__14667 = click_fn;
var G__14668 = btn_txt;
var G__14669 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14664,G__14665,G__14666,G__14667,G__14668,G__14669) : hoplon.core.button.call(null,G__14664,G__14665,G__14666,G__14667,G__14668,G__14669));
};
var ui$research$tap_button = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__14670__i = 0, G__14670__a = new Array(arguments.length -  0);
while (G__14670__i < G__14670__a.length) {G__14670__a[G__14670__i] = arguments[G__14670__i + 0]; ++G__14670__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__14670__a,0,null);
} 
return ui$research$tap_button__delegate.call(this,args__10022__auto__);};
ui$research$tap_button.cljs$lang$maxFixedArity = 0;
ui$research$tap_button.cljs$lang$applyTo = (function (arglist__14671){
var args__10022__auto__ = cljs.core.seq(arglist__14671);
return ui$research$tap_button__delegate(args__10022__auto__);
});
ui$research$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$research$tap_button__delegate;
return ui$research$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.nexts = (function() { 
var ui$research$nexts__delegate = function (args__10022__auto__){
var vec__14672 = hoplon.core.parse_args(args__10022__auto__);
var map__14675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14672,(0),null);
var map__14675__$1 = ((((!((map__14675 == null)))?(((((map__14675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14675):map__14675);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14675__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14672,(1),null);
var G__14677 = cljs.core.cst$kw$class;
var G__14678 = "gain-loss";
var G__14679 = hoplon.core.loop_tpl_STAR_(next,((function (G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids){
return (function (item__10092__auto__){
var vec__14680 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__14683 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids))
);
return (fexpr__14683.cljs$core$IFn$_invoke$arity$1 ? fexpr__14683.cljs$core$IFn$_invoke$arity$1(item__10092__auto__) : fexpr__14683.call(null,item__10092__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(0),null);
var name = (function (){var fexpr__14686 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14680,it,G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids){
return (function (G__14684,G__14685){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14684.cljs$core$IFn$_invoke$arity$1 ? G__14684.cljs$core$IFn$_invoke$arity$1(G__14685) : G__14684.call(null,G__14685)))].join('');
});})(vec__14680,it,G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids))
);
return (fexpr__14686.cljs$core$IFn$_invoke$arity$2 ? fexpr__14686.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__14686.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__14689 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__14680,it,G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids){
return (function (G__14687,G__14688){
return (G__14687.cljs$core$IFn$_invoke$arity$1 ? G__14687.cljs$core$IFn$_invoke$arity$1(G__14688) : G__14687.call(null,G__14688));
});})(name,vec__14680,it,G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids))
);
return (fexpr__14689.cljs$core$IFn$_invoke$arity$2 ? fexpr__14689.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__14689.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__14695 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__14680,it,G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids){
return (function (G__14692,G__14690,G__14691){
var G__14696 = "%.2f";
var G__14697 = (G__14691.cljs$core$IFn$_invoke$arity$1 ? G__14691.cljs$core$IFn$_invoke$arity$1(G__14692) : G__14691.call(null,G__14692));
return (G__14690.cljs$core$IFn$_invoke$arity$2 ? G__14690.cljs$core$IFn$_invoke$arity$2(G__14696,G__14697) : G__14690.call(null,G__14696,G__14697));
});})(name,val_bare,vec__14680,it,G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids))
);
return (fexpr__14695.cljs$core$IFn$_invoke$arity$3 ? fexpr__14695.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__14695.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__14698 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14699 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__14698,G__14699) : hoplon.core.tr.call(null,G__14698,G__14699));
});})(G__14677,G__14678,vec__14672,map__14675,map__14675__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14677,G__14678,G__14679) : hoplon.core.table.call(null,G__14677,G__14678,G__14679));
};
var ui$research$nexts = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__14700__i = 0, G__14700__a = new Array(arguments.length -  0);
while (G__14700__i < G__14700__a.length) {G__14700__a[G__14700__i] = arguments[G__14700__i + 0]; ++G__14700__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__14700__a,0,null);
} 
return ui$research$nexts__delegate.call(this,args__10022__auto__);};
ui$research$nexts.cljs$lang$maxFixedArity = 0;
ui$research$nexts.cljs$lang$applyTo = (function (arglist__14701){
var args__10022__auto__ = cljs.core.seq(arglist__14701);
return ui$research$nexts__delegate(args__10022__auto__);
});
ui$research$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$research$nexts__delegate;
return ui$research$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.as_list = (function() { 
var ui$research$as_list__delegate = function (args__10022__auto__){
var vec__14702 = hoplon.core.parse_args(args__10022__auto__);
var map__14705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14702,(0),null);
var map__14705__$1 = ((((!((map__14705 == null)))?(((((map__14705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14705):map__14705);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14702,(1),null);
var iter__4324__auto__ = ((function (vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function ui$research$as_list_$_iter__14707(s__14708){
return (new cljs.core.LazySeq(null,((function (vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (){
var s__14708__$1 = s__14708;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14708__$1);
if(temp__5457__auto__){
var s__14708__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14708__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14708__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14710 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14709 = (0);
while(true){
if((i__14709 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14709);
var item_name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14714 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14709,s__14708__$1,item_name,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14711,G__14713,G__14712){
return (G__14711.cljs$core$IFn$_invoke$arity$2 ? G__14711.cljs$core$IFn$_invoke$arity$2(G__14712,G__14713) : G__14711.call(null,G__14712,G__14713));
});})(i__14709,s__14708__$1,item_name,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14714.cljs$core$IFn$_invoke$arity$3 ? fexpr__14714.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14714.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__14718 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14709,s__14708__$1,item_name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14715,G__14717,G__14716){
return (G__14715.cljs$core$IFn$_invoke$arity$2 ? G__14715.cljs$core$IFn$_invoke$arity$2(G__14716,G__14717) : G__14715.call(null,G__14716,G__14717));
});})(i__14709,s__14708__$1,item_name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14718.cljs$core$IFn$_invoke$arity$3 ? fexpr__14718.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14718.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2(state,key);
var group_name = cljs.core.name(group);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14722 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14709,s__14708__$1,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14719,G__14721,G__14720){
return (G__14719.cljs$core$IFn$_invoke$arity$2 ? G__14719.cljs$core$IFn$_invoke$arity$2(G__14720,G__14721) : G__14719.call(null,G__14720,G__14721));
});})(i__14709,s__14708__$1,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14722.cljs$core$IFn$_invoke$arity$3 ? fexpr__14722.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__14722.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__14710,(function (){var G__14723 = cljs.core.cst$kw$class;
var G__14724 = (function (){var fexpr__14732 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14709,s__14708__$1,G__14723,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14730,G__14729,G__14731){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([["unresearched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14729)].join(''),(G__14730.cljs$core$IFn$_invoke$arity$2 ? G__14730.cljs$core$IFn$_invoke$arity$2(G__14731,(0)) : G__14730.call(null,G__14731,(0))),["researched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14729)].join(''),(G__14731 > (0))]);
});})(i__14709,s__14708__$1,G__14723,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14710,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14732.cljs$core$IFn$_invoke$arity$3 ? fexpr__14732.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,group_name,count) : fexpr__14732.call(null,cljs.core._EQ_,group_name,count));
})();
var G__14725 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(item_name) : hoplon.core.td.call(null,item_name));
var G__14726 = (function (){var G__14733 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14733) : hoplon.core.td.call(null,G__14733));
})();
var G__14727 = (function (){var G__14734 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14734) : hoplon.core.td.call(null,G__14734));
})();
var G__14728 = (function (){var G__14735 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14735) : hoplon.core.td.call(null,G__14735));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__14723,G__14724,G__14725,G__14726,G__14727,G__14728) : hoplon.core.tr.call(null,G__14723,G__14724,G__14725,G__14726,G__14727,G__14728));
})());

var G__14761 = (i__14709 + (1));
i__14709 = G__14761;
continue;
} else {
var G__14762 = (i__14709 + (1));
i__14709 = G__14762;
continue;
}
} else {
var G__14763 = (i__14709 + (1));
i__14709 = G__14763;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14710),ui$research$as_list_$_iter__14707(cljs.core.chunk_rest(s__14708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14710),null);
}
} else {
var key = cljs.core.first(s__14708__$2);
var item_name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14739 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14708__$1,item_name,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14736,G__14738,G__14737){
return (G__14736.cljs$core$IFn$_invoke$arity$2 ? G__14736.cljs$core$IFn$_invoke$arity$2(G__14737,G__14738) : G__14736.call(null,G__14737,G__14738));
});})(s__14708__$1,item_name,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14739.cljs$core$IFn$_invoke$arity$3 ? fexpr__14739.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14739.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__14743 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14708__$1,item_name,next_loss,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14740,G__14742,G__14741){
return (G__14740.cljs$core$IFn$_invoke$arity$2 ? G__14740.cljs$core$IFn$_invoke$arity$2(G__14741,G__14742) : G__14740.call(null,G__14741,G__14742));
});})(s__14708__$1,item_name,next_loss,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14743.cljs$core$IFn$_invoke$arity$3 ? fexpr__14743.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14743.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2(state,key);
var group_name = cljs.core.name(group);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14747 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14708__$1,item_name,next_loss,count,dependencies,group_name,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14744,G__14746,G__14745){
return (G__14744.cljs$core$IFn$_invoke$arity$2 ? G__14744.cljs$core$IFn$_invoke$arity$2(G__14745,G__14746) : G__14744.call(null,G__14745,G__14746));
});})(s__14708__$1,item_name,next_loss,count,dependencies,group_name,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14747.cljs$core$IFn$_invoke$arity$3 ? fexpr__14747.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__14747.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__14748 = cljs.core.cst$kw$class;
var G__14749 = (function (){var fexpr__14757 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14708__$1,G__14748,item_name,next_loss,count,dependencies,group_name,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids){
return (function (G__14755,G__14754,G__14756){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([["unresearched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14754)].join(''),(G__14755.cljs$core$IFn$_invoke$arity$2 ? G__14755.cljs$core$IFn$_invoke$arity$2(G__14756,(0)) : G__14755.call(null,G__14756,(0))),["researched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14754)].join(''),(G__14756 > (0))]);
});})(s__14708__$1,G__14748,item_name,next_loss,count,dependencies,group_name,key,s__14708__$2,temp__5457__auto__,vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
);
return (fexpr__14757.cljs$core$IFn$_invoke$arity$3 ? fexpr__14757.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,group_name,count) : fexpr__14757.call(null,cljs.core._EQ_,group_name,count));
})();
var G__14750 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(item_name) : hoplon.core.td.call(null,item_name));
var G__14751 = (function (){var G__14758 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14758) : hoplon.core.td.call(null,G__14758));
})();
var G__14752 = (function (){var G__14759 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14759) : hoplon.core.td.call(null,G__14759));
})();
var G__14753 = (function (){var G__14760 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14760) : hoplon.core.td.call(null,G__14760));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__14748,G__14749,G__14750,G__14751,G__14752,G__14753) : hoplon.core.tr.call(null,G__14748,G__14749,G__14750,G__14751,G__14752,G__14753));
})(),ui$research$as_list_$_iter__14707(cljs.core.rest(s__14708__$2)));
} else {
var G__14764 = cljs.core.rest(s__14708__$2);
s__14708__$1 = G__14764;
continue;
}
} else {
var G__14765 = cljs.core.rest(s__14708__$2);
s__14708__$1 = G__14765;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__14702,map__14705,map__14705__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$research$as_list = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__14766__i = 0, G__14766__a = new Array(arguments.length -  0);
while (G__14766__i < G__14766__a.length) {G__14766__a[G__14766__i] = arguments[G__14766__i + 0]; ++G__14766__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__14766__a,0,null);
} 
return ui$research$as_list__delegate.call(this,args__10022__auto__);};
ui$research$as_list.cljs$lang$maxFixedArity = 0;
ui$research$as_list.cljs$lang$applyTo = (function (arglist__14767){
var args__10022__auto__ = cljs.core.seq(arglist__14767);
return ui$research$as_list__delegate(args__10022__auto__);
});
ui$research$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$as_list__delegate;
return ui$research$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.item_list = (function() { 
var ui$research$item_list__delegate = function (args__10022__auto__){
var vec__14768 = hoplon.core.parse_args(args__10022__auto__);
var map__14771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14768,(0),null);
var map__14771__$1 = ((((!((map__14771 == null)))?(((((map__14771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14771):map__14771);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14771__$1,cljs.core.cst$kw$state);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14771__$1,cljs.core.cst$kw$groups);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14768,(1),null);
var G__14773 = cljs.core.cst$kw$class;
var G__14774 = "research";
var G__14775 = (function (){var G__14776 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Research") : hoplon.core.caption.call(null,"Research"));
var G__14777 = (function (){var G__14779 = (function (){var G__14780 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14781 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__14782 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Cost") : hoplon.core.th.call(null,"Cost"));
var G__14783 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$4(G__14780,G__14781,G__14782,G__14783) : hoplon.core.tr.call(null,G__14780,G__14781,G__14782,G__14783));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14779) : hoplon.core.thead.call(null,G__14779));
})();
var G__14778 = (function (){var iter__4324__auto__ = ((function (G__14776,G__14777,G__14773,G__14774,vec__14768,map__14771,map__14771__$1,state,groups,kids){
return (function ui$research$item_list_$_iter__14784(s__14785){
return (new cljs.core.LazySeq(null,((function (G__14776,G__14777,G__14773,G__14774,vec__14768,map__14771,map__14771__$1,state,groups,kids){
return (function (){
var s__14785__$1 = s__14785;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14785__$1);
if(temp__5457__auto__){
var s__14785__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14785__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14785__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14787 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14786 = (0);
while(true){
if((i__14786 < size__4323__auto__)){
var group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14786);
cljs.core.chunk_append(b__14787,ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,"Research"], 0)));

var G__14788 = (i__14786 + (1));
i__14786 = G__14788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14787),ui$research$item_list_$_iter__14784(cljs.core.chunk_rest(s__14785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14787),null);
}
} else {
var group = cljs.core.first(s__14785__$2);
return cljs.core.cons(ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,"Research"], 0)),ui$research$item_list_$_iter__14784(cljs.core.rest(s__14785__$2)));
}
} else {
return null;
}
break;
}
});})(G__14776,G__14777,G__14773,G__14774,vec__14768,map__14771,map__14771__$1,state,groups,kids))
,null,null));
});})(G__14776,G__14777,G__14773,G__14774,vec__14768,map__14771,map__14771__$1,state,groups,kids))
;
return iter__4324__auto__(groups);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14776,G__14777,G__14778) : hoplon.core.table.call(null,G__14776,G__14777,G__14778));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14773,G__14774,G__14775) : hoplon.core.div.call(null,G__14773,G__14774,G__14775));
};
var ui$research$item_list = function (var_args){
var args__10022__auto__ = null;
if (arguments.length > 0) {
var G__14789__i = 0, G__14789__a = new Array(arguments.length -  0);
while (G__14789__i < G__14789__a.length) {G__14789__a[G__14789__i] = arguments[G__14789__i + 0]; ++G__14789__i;}
  args__10022__auto__ = new cljs.core.IndexedSeq(G__14789__a,0,null);
} 
return ui$research$item_list__delegate.call(this,args__10022__auto__);};
ui$research$item_list.cljs$lang$maxFixedArity = 0;
ui$research$item_list.cljs$lang$applyTo = (function (arglist__14790){
var args__10022__auto__ = cljs.core.seq(arglist__14790);
return ui$research$item_list__delegate(args__10022__auto__);
});
ui$research$item_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$item_list__delegate;
return ui$research$item_list;
})()
;
