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
var ui$research$tap_button__delegate = function (args__10015__auto__){
var vec__14616 = hoplon.core.parse_args(args__10015__auto__);
var map__14619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616,(0),null);
var map__14619__$1 = ((((!((map__14619 == null)))?(((((map__14619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14619):map__14619);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14619__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14619__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14619__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616,(1),null);
var disabled = (function (){var fexpr__14626 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14616,map__14619,map__14619__$1,state,key,btn_txt,kids){
return (function (G__14624,G__14621,G__14623,G__14622){
var G__14627 = (G__14622.cljs$core$IFn$_invoke$arity$2 ? G__14622.cljs$core$IFn$_invoke$arity$2(G__14623,G__14624) : G__14622.call(null,G__14623,G__14624));
return (G__14621.cljs$core$IFn$_invoke$arity$1 ? G__14621.cljs$core$IFn$_invoke$arity$1(G__14627) : G__14621.call(null,G__14627));
});})(vec__14616,map__14619,map__14619__$1,state,key,btn_txt,kids))
);
return (fexpr__14626.cljs$core$IFn$_invoke$arity$4 ? fexpr__14626.cljs$core$IFn$_invoke$arity$4(key,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__14626.call(null,key,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14616,map__14619,map__14619__$1,state,key,btn_txt,kids){
return (function (){
return clicker.engine.tap(state,key);
});})(disabled,vec__14616,map__14619,map__14619__$1,state,key,btn_txt,kids))
;
var G__14628 = cljs.core.cst$kw$disabled;
var G__14629 = disabled;
var G__14630 = cljs.core.cst$kw$click;
var G__14631 = click_fn;
var G__14632 = btn_txt;
var G__14633 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14628,G__14629,G__14630,G__14631,G__14632,G__14633) : hoplon.core.button.call(null,G__14628,G__14629,G__14630,G__14631,G__14632,G__14633));
};
var ui$research$tap_button = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__14634__i = 0, G__14634__a = new Array(arguments.length -  0);
while (G__14634__i < G__14634__a.length) {G__14634__a[G__14634__i] = arguments[G__14634__i + 0]; ++G__14634__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__14634__a,0,null);
} 
return ui$research$tap_button__delegate.call(this,args__10015__auto__);};
ui$research$tap_button.cljs$lang$maxFixedArity = 0;
ui$research$tap_button.cljs$lang$applyTo = (function (arglist__14635){
var args__10015__auto__ = cljs.core.seq(arglist__14635);
return ui$research$tap_button__delegate(args__10015__auto__);
});
ui$research$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$research$tap_button__delegate;
return ui$research$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.nexts = (function() { 
var ui$research$nexts__delegate = function (args__10015__auto__){
var vec__14636 = hoplon.core.parse_args(args__10015__auto__);
var map__14639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636,(0),null);
var map__14639__$1 = ((((!((map__14639 == null)))?(((((map__14639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14639):map__14639);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636,(1),null);
var G__14641 = cljs.core.cst$kw$class;
var G__14642 = "gain-loss";
var G__14643 = hoplon.core.loop_tpl_STAR_(next,((function (G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids){
return (function (item__10085__auto__){
var vec__14644 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__14647 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids))
);
return (fexpr__14647.cljs$core$IFn$_invoke$arity$1 ? fexpr__14647.cljs$core$IFn$_invoke$arity$1(item__10085__auto__) : fexpr__14647.call(null,item__10085__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(0),null);
var name = (function (){var fexpr__14650 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14644,it,G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids){
return (function (G__14648,G__14649){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14648.cljs$core$IFn$_invoke$arity$1 ? G__14648.cljs$core$IFn$_invoke$arity$1(G__14649) : G__14648.call(null,G__14649)))].join('');
});})(vec__14644,it,G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids))
);
return (fexpr__14650.cljs$core$IFn$_invoke$arity$2 ? fexpr__14650.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__14650.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__14653 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__14644,it,G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids){
return (function (G__14651,G__14652){
return (G__14651.cljs$core$IFn$_invoke$arity$1 ? G__14651.cljs$core$IFn$_invoke$arity$1(G__14652) : G__14651.call(null,G__14652));
});})(name,vec__14644,it,G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids))
);
return (fexpr__14653.cljs$core$IFn$_invoke$arity$2 ? fexpr__14653.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__14653.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__14659 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__14644,it,G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids){
return (function (G__14656,G__14654,G__14655){
var G__14660 = "%.2f";
var G__14661 = (G__14655.cljs$core$IFn$_invoke$arity$1 ? G__14655.cljs$core$IFn$_invoke$arity$1(G__14656) : G__14655.call(null,G__14656));
return (G__14654.cljs$core$IFn$_invoke$arity$2 ? G__14654.cljs$core$IFn$_invoke$arity$2(G__14660,G__14661) : G__14654.call(null,G__14660,G__14661));
});})(name,val_bare,vec__14644,it,G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids))
);
return (fexpr__14659.cljs$core$IFn$_invoke$arity$3 ? fexpr__14659.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__14659.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__14662 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14663 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__14662,G__14663) : hoplon.core.tr.call(null,G__14662,G__14663));
});})(G__14641,G__14642,vec__14636,map__14639,map__14639__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14641,G__14642,G__14643) : hoplon.core.table.call(null,G__14641,G__14642,G__14643));
};
var ui$research$nexts = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__14664__i = 0, G__14664__a = new Array(arguments.length -  0);
while (G__14664__i < G__14664__a.length) {G__14664__a[G__14664__i] = arguments[G__14664__i + 0]; ++G__14664__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__14664__a,0,null);
} 
return ui$research$nexts__delegate.call(this,args__10015__auto__);};
ui$research$nexts.cljs$lang$maxFixedArity = 0;
ui$research$nexts.cljs$lang$applyTo = (function (arglist__14665){
var args__10015__auto__ = cljs.core.seq(arglist__14665);
return ui$research$nexts__delegate(args__10015__auto__);
});
ui$research$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$research$nexts__delegate;
return ui$research$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.as_list = (function() { 
var ui$research$as_list__delegate = function (args__10015__auto__){
var vec__14666 = hoplon.core.parse_args(args__10015__auto__);
var map__14669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(0),null);
var map__14669__$1 = ((((!((map__14669 == null)))?(((((map__14669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14669):map__14669);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14669__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14669__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14669__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(1),null);
var iter__4324__auto__ = ((function (vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function ui$research$as_list_$_iter__14671(s__14672){
return (new cljs.core.LazySeq(null,((function (vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (){
var s__14672__$1 = s__14672;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14672__$1);
if(temp__5457__auto__){
var s__14672__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14672__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14672__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14674 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14673 = (0);
while(true){
if((i__14673 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14673);
var item_name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14678 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14673,s__14672__$1,item_name,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14675,G__14677,G__14676){
return (G__14675.cljs$core$IFn$_invoke$arity$2 ? G__14675.cljs$core$IFn$_invoke$arity$2(G__14676,G__14677) : G__14675.call(null,G__14676,G__14677));
});})(i__14673,s__14672__$1,item_name,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14678.cljs$core$IFn$_invoke$arity$3 ? fexpr__14678.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14678.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__14682 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14673,s__14672__$1,item_name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14679,G__14681,G__14680){
return (G__14679.cljs$core$IFn$_invoke$arity$2 ? G__14679.cljs$core$IFn$_invoke$arity$2(G__14680,G__14681) : G__14679.call(null,G__14680,G__14681));
});})(i__14673,s__14672__$1,item_name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14682.cljs$core$IFn$_invoke$arity$3 ? fexpr__14682.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14682.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies(state,key);
var group_name = cljs.core.name(group);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14686 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14673,s__14672__$1,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14683,G__14685,G__14684){
return (G__14683.cljs$core$IFn$_invoke$arity$2 ? G__14683.cljs$core$IFn$_invoke$arity$2(G__14684,G__14685) : G__14683.call(null,G__14684,G__14685));
});})(i__14673,s__14672__$1,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14686.cljs$core$IFn$_invoke$arity$3 ? fexpr__14686.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__14686.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__14674,(function (){var G__14687 = cljs.core.cst$kw$class;
var G__14688 = (function (){var fexpr__14696 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14673,s__14672__$1,G__14687,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14694,G__14693,G__14695){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([["unresearched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14693)].join(''),(G__14694.cljs$core$IFn$_invoke$arity$2 ? G__14694.cljs$core$IFn$_invoke$arity$2(G__14695,(0)) : G__14694.call(null,G__14695,(0))),["researched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14693)].join(''),(G__14695 > (0))]);
});})(i__14673,s__14672__$1,G__14687,item_name,next_loss,count,dependencies,group_name,key,c__4322__auto__,size__4323__auto__,b__14674,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14696.cljs$core$IFn$_invoke$arity$3 ? fexpr__14696.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,group_name,count) : fexpr__14696.call(null,cljs.core._EQ_,group_name,count));
})();
var G__14689 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(item_name) : hoplon.core.td.call(null,item_name));
var G__14690 = (function (){var G__14697 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14697) : hoplon.core.td.call(null,G__14697));
})();
var G__14691 = (function (){var G__14698 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14698) : hoplon.core.td.call(null,G__14698));
})();
var G__14692 = (function (){var G__14699 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14699) : hoplon.core.td.call(null,G__14699));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__14687,G__14688,G__14689,G__14690,G__14691,G__14692) : hoplon.core.tr.call(null,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692));
})());

var G__14725 = (i__14673 + (1));
i__14673 = G__14725;
continue;
} else {
var G__14726 = (i__14673 + (1));
i__14673 = G__14726;
continue;
}
} else {
var G__14727 = (i__14673 + (1));
i__14673 = G__14727;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14674),ui$research$as_list_$_iter__14671(cljs.core.chunk_rest(s__14672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14674),null);
}
} else {
var key = cljs.core.first(s__14672__$2);
var item_name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14703 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14672__$1,item_name,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14700,G__14702,G__14701){
return (G__14700.cljs$core$IFn$_invoke$arity$2 ? G__14700.cljs$core$IFn$_invoke$arity$2(G__14701,G__14702) : G__14700.call(null,G__14701,G__14702));
});})(s__14672__$1,item_name,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14703.cljs$core$IFn$_invoke$arity$3 ? fexpr__14703.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14703.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__14707 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14672__$1,item_name,next_loss,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14704,G__14706,G__14705){
return (G__14704.cljs$core$IFn$_invoke$arity$2 ? G__14704.cljs$core$IFn$_invoke$arity$2(G__14705,G__14706) : G__14704.call(null,G__14705,G__14706));
});})(s__14672__$1,item_name,next_loss,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14707.cljs$core$IFn$_invoke$arity$3 ? fexpr__14707.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14707.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies(state,key);
var group_name = cljs.core.name(group);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14711 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14672__$1,item_name,next_loss,count,dependencies,group_name,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14708,G__14710,G__14709){
return (G__14708.cljs$core$IFn$_invoke$arity$2 ? G__14708.cljs$core$IFn$_invoke$arity$2(G__14709,G__14710) : G__14708.call(null,G__14709,G__14710));
});})(s__14672__$1,item_name,next_loss,count,dependencies,group_name,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14711.cljs$core$IFn$_invoke$arity$3 ? fexpr__14711.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__14711.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__14712 = cljs.core.cst$kw$class;
var G__14713 = (function (){var fexpr__14721 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14672__$1,G__14712,item_name,next_loss,count,dependencies,group_name,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids){
return (function (G__14719,G__14718,G__14720){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([["unresearched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14718)].join(''),(G__14719.cljs$core$IFn$_invoke$arity$2 ? G__14719.cljs$core$IFn$_invoke$arity$2(G__14720,(0)) : G__14719.call(null,G__14720,(0))),["researched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14718)].join(''),(G__14720 > (0))]);
});})(s__14672__$1,G__14712,item_name,next_loss,count,dependencies,group_name,key,s__14672__$2,temp__5457__auto__,vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
);
return (fexpr__14721.cljs$core$IFn$_invoke$arity$3 ? fexpr__14721.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,group_name,count) : fexpr__14721.call(null,cljs.core._EQ_,group_name,count));
})();
var G__14714 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(item_name) : hoplon.core.td.call(null,item_name));
var G__14715 = (function (){var G__14722 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14722) : hoplon.core.td.call(null,G__14722));
})();
var G__14716 = (function (){var G__14723 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14723) : hoplon.core.td.call(null,G__14723));
})();
var G__14717 = (function (){var G__14724 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14724) : hoplon.core.td.call(null,G__14724));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__14712,G__14713,G__14714,G__14715,G__14716,G__14717) : hoplon.core.tr.call(null,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717));
})(),ui$research$as_list_$_iter__14671(cljs.core.rest(s__14672__$2)));
} else {
var G__14728 = cljs.core.rest(s__14672__$2);
s__14672__$1 = G__14728;
continue;
}
} else {
var G__14729 = cljs.core.rest(s__14672__$2);
s__14672__$1 = G__14729;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__14666,map__14669,map__14669__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$research$as_list = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__14730__i = 0, G__14730__a = new Array(arguments.length -  0);
while (G__14730__i < G__14730__a.length) {G__14730__a[G__14730__i] = arguments[G__14730__i + 0]; ++G__14730__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__14730__a,0,null);
} 
return ui$research$as_list__delegate.call(this,args__10015__auto__);};
ui$research$as_list.cljs$lang$maxFixedArity = 0;
ui$research$as_list.cljs$lang$applyTo = (function (arglist__14731){
var args__10015__auto__ = cljs.core.seq(arglist__14731);
return ui$research$as_list__delegate(args__10015__auto__);
});
ui$research$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$as_list__delegate;
return ui$research$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.item_list = (function() { 
var ui$research$item_list__delegate = function (args__10015__auto__){
var vec__14732 = hoplon.core.parse_args(args__10015__auto__);
var map__14735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14732,(0),null);
var map__14735__$1 = ((((!((map__14735 == null)))?(((((map__14735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14735):map__14735);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,cljs.core.cst$kw$state);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,cljs.core.cst$kw$groups);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14732,(1),null);
var G__14737 = cljs.core.cst$kw$class;
var G__14738 = "research";
var G__14739 = (function (){var G__14740 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Research") : hoplon.core.caption.call(null,"Research"));
var G__14741 = (function (){var G__14743 = (function (){var G__14744 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14745 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__14746 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Cost") : hoplon.core.th.call(null,"Cost"));
var G__14747 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$4(G__14744,G__14745,G__14746,G__14747) : hoplon.core.tr.call(null,G__14744,G__14745,G__14746,G__14747));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14743) : hoplon.core.thead.call(null,G__14743));
})();
var G__14742 = (function (){var iter__4324__auto__ = ((function (G__14740,G__14741,G__14737,G__14738,vec__14732,map__14735,map__14735__$1,state,groups,kids){
return (function ui$research$item_list_$_iter__14748(s__14749){
return (new cljs.core.LazySeq(null,((function (G__14740,G__14741,G__14737,G__14738,vec__14732,map__14735,map__14735__$1,state,groups,kids){
return (function (){
var s__14749__$1 = s__14749;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14749__$1);
if(temp__5457__auto__){
var s__14749__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14749__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14749__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14751 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14750 = (0);
while(true){
if((i__14750 < size__4323__auto__)){
var group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14750);
cljs.core.chunk_append(b__14751,ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,"Research"], 0)));

var G__14752 = (i__14750 + (1));
i__14750 = G__14752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14751),ui$research$item_list_$_iter__14748(cljs.core.chunk_rest(s__14749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14751),null);
}
} else {
var group = cljs.core.first(s__14749__$2);
return cljs.core.cons(ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,"Research"], 0)),ui$research$item_list_$_iter__14748(cljs.core.rest(s__14749__$2)));
}
} else {
return null;
}
break;
}
});})(G__14740,G__14741,G__14737,G__14738,vec__14732,map__14735,map__14735__$1,state,groups,kids))
,null,null));
});})(G__14740,G__14741,G__14737,G__14738,vec__14732,map__14735,map__14735__$1,state,groups,kids))
;
return iter__4324__auto__(groups);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14740,G__14741,G__14742) : hoplon.core.table.call(null,G__14740,G__14741,G__14742));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14737,G__14738,G__14739) : hoplon.core.div.call(null,G__14737,G__14738,G__14739));
};
var ui$research$item_list = function (var_args){
var args__10015__auto__ = null;
if (arguments.length > 0) {
var G__14753__i = 0, G__14753__a = new Array(arguments.length -  0);
while (G__14753__i < G__14753__a.length) {G__14753__a[G__14753__i] = arguments[G__14753__i + 0]; ++G__14753__i;}
  args__10015__auto__ = new cljs.core.IndexedSeq(G__14753__a,0,null);
} 
return ui$research$item_list__delegate.call(this,args__10015__auto__);};
ui$research$item_list.cljs$lang$maxFixedArity = 0;
ui$research$item_list.cljs$lang$applyTo = (function (arglist__14754){
var args__10015__auto__ = cljs.core.seq(arglist__14754);
return ui$research$item_list__delegate(args__10015__auto__);
});
ui$research$item_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$item_list__delegate;
return ui$research$item_list;
})()
;
