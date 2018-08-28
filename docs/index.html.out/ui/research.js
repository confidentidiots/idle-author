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
var ui$research$tap_button__delegate = function (args__13797__auto__){
var vec__14610 = hoplon.core.parse_args(args__13797__auto__);
var map__14613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14610,(0),null);
var map__14613__$1 = ((((!((map__14613 == null)))?(((((map__14613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14613):map__14613);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14610,(1),null);
var disabled = (function (){var fexpr__14620 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14610,map__14613,map__14613__$1,state,key,btn_txt,kids){
return (function (G__14618,G__14615,G__14617,G__14616){
var G__14621 = (G__14616.cljs$core$IFn$_invoke$arity$2 ? G__14616.cljs$core$IFn$_invoke$arity$2(G__14617,G__14618) : G__14616.call(null,G__14617,G__14618));
return (G__14615.cljs$core$IFn$_invoke$arity$1 ? G__14615.cljs$core$IFn$_invoke$arity$1(G__14621) : G__14615.call(null,G__14621));
});})(vec__14610,map__14613,map__14613__$1,state,key,btn_txt,kids))
);
return (fexpr__14620.cljs$core$IFn$_invoke$arity$4 ? fexpr__14620.cljs$core$IFn$_invoke$arity$4(key,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__14620.call(null,key,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14610,map__14613,map__14613__$1,state,key,btn_txt,kids){
return (function (){
return clicker.engine.tap(state,key);
});})(disabled,vec__14610,map__14613,map__14613__$1,state,key,btn_txt,kids))
;
var G__14622 = cljs.core.cst$kw$disabled;
var G__14623 = disabled;
var G__14624 = cljs.core.cst$kw$click;
var G__14625 = click_fn;
var G__14626 = btn_txt;
var G__14627 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14622,G__14623,G__14624,G__14625,G__14626,G__14627) : hoplon.core.button.call(null,G__14622,G__14623,G__14624,G__14625,G__14626,G__14627));
};
var ui$research$tap_button = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14628__i = 0, G__14628__a = new Array(arguments.length -  0);
while (G__14628__i < G__14628__a.length) {G__14628__a[G__14628__i] = arguments[G__14628__i + 0]; ++G__14628__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14628__a,0,null);
} 
return ui$research$tap_button__delegate.call(this,args__13797__auto__);};
ui$research$tap_button.cljs$lang$maxFixedArity = 0;
ui$research$tap_button.cljs$lang$applyTo = (function (arglist__14629){
var args__13797__auto__ = cljs.core.seq(arglist__14629);
return ui$research$tap_button__delegate(args__13797__auto__);
});
ui$research$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$research$tap_button__delegate;
return ui$research$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.nexts = (function() { 
var ui$research$nexts__delegate = function (args__13797__auto__){
var vec__14630 = hoplon.core.parse_args(args__13797__auto__);
var map__14633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(0),null);
var map__14633__$1 = ((((!((map__14633 == null)))?(((((map__14633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14633):map__14633);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14633__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630,(1),null);
var G__14635 = cljs.core.cst$kw$class;
var G__14636 = "gain-loss";
var G__14637 = hoplon.core.loop_tpl_STAR_(next,((function (G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids){
return (function (item__13867__auto__){
var vec__14638 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__14641 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids))
);
return (fexpr__14641.cljs$core$IFn$_invoke$arity$1 ? fexpr__14641.cljs$core$IFn$_invoke$arity$1(item__13867__auto__) : fexpr__14641.call(null,item__13867__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14638,(0),null);
var name = (function (){var fexpr__14644 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14638,it,G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids){
return (function (G__14642,G__14643){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14642.cljs$core$IFn$_invoke$arity$1 ? G__14642.cljs$core$IFn$_invoke$arity$1(G__14643) : G__14642.call(null,G__14643)))].join('');
});})(vec__14638,it,G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids))
);
return (fexpr__14644.cljs$core$IFn$_invoke$arity$2 ? fexpr__14644.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__14644.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__14647 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__14638,it,G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids){
return (function (G__14645,G__14646){
return (G__14645.cljs$core$IFn$_invoke$arity$1 ? G__14645.cljs$core$IFn$_invoke$arity$1(G__14646) : G__14645.call(null,G__14646));
});})(name,vec__14638,it,G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids))
);
return (fexpr__14647.cljs$core$IFn$_invoke$arity$2 ? fexpr__14647.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__14647.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__14653 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__14638,it,G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids){
return (function (G__14650,G__14648,G__14649){
var G__14654 = "%.2f";
var G__14655 = (G__14649.cljs$core$IFn$_invoke$arity$1 ? G__14649.cljs$core$IFn$_invoke$arity$1(G__14650) : G__14649.call(null,G__14650));
return (G__14648.cljs$core$IFn$_invoke$arity$2 ? G__14648.cljs$core$IFn$_invoke$arity$2(G__14654,G__14655) : G__14648.call(null,G__14654,G__14655));
});})(name,val_bare,vec__14638,it,G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids))
);
return (fexpr__14653.cljs$core$IFn$_invoke$arity$3 ? fexpr__14653.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__14653.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__14656 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14657 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__14656,G__14657) : hoplon.core.tr.call(null,G__14656,G__14657));
});})(G__14635,G__14636,vec__14630,map__14633,map__14633__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14635,G__14636,G__14637) : hoplon.core.table.call(null,G__14635,G__14636,G__14637));
};
var ui$research$nexts = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14658__i = 0, G__14658__a = new Array(arguments.length -  0);
while (G__14658__i < G__14658__a.length) {G__14658__a[G__14658__i] = arguments[G__14658__i + 0]; ++G__14658__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14658__a,0,null);
} 
return ui$research$nexts__delegate.call(this,args__13797__auto__);};
ui$research$nexts.cljs$lang$maxFixedArity = 0;
ui$research$nexts.cljs$lang$applyTo = (function (arglist__14659){
var args__13797__auto__ = cljs.core.seq(arglist__14659);
return ui$research$nexts__delegate(args__13797__auto__);
});
ui$research$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$research$nexts__delegate;
return ui$research$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.as_list = (function() { 
var ui$research$as_list__delegate = function (args__13797__auto__){
var vec__14660 = hoplon.core.parse_args(args__13797__auto__);
var map__14663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(0),null);
var map__14663__$1 = ((((!((map__14663 == null)))?(((((map__14663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14663):map__14663);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(1),null);
var iter__4324__auto__ = ((function (vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function ui$research$as_list_$_iter__14665(s__14666){
return (new cljs.core.LazySeq(null,((function (vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (){
var s__14666__$1 = s__14666;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14666__$1);
if(temp__5457__auto__){
var s__14666__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14666__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14666__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14668 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14667 = (0);
while(true){
if((i__14667 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14667);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14672 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14667,s__14666__$1,name,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14669,G__14671,G__14670){
return (G__14669.cljs$core$IFn$_invoke$arity$2 ? G__14669.cljs$core$IFn$_invoke$arity$2(G__14670,G__14671) : G__14669.call(null,G__14670,G__14671));
});})(i__14667,s__14666__$1,name,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14672.cljs$core$IFn$_invoke$arity$3 ? fexpr__14672.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14672.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__14676 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14667,s__14666__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14673,G__14675,G__14674){
return (G__14673.cljs$core$IFn$_invoke$arity$2 ? G__14673.cljs$core$IFn$_invoke$arity$2(G__14674,G__14675) : G__14673.call(null,G__14674,G__14675));
});})(i__14667,s__14666__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14676.cljs$core$IFn$_invoke$arity$3 ? fexpr__14676.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14676.call(null,clicker.engine.thing_count,key,state));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14680 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14667,s__14666__$1,name,next_loss,count,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14679,G__14678,G__14677){
return (G__14677.cljs$core$IFn$_invoke$arity$2 ? G__14677.cljs$core$IFn$_invoke$arity$2(G__14678,G__14679) : G__14677.call(null,G__14678,G__14679));
});})(i__14667,s__14666__$1,name,next_loss,count,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14680.cljs$core$IFn$_invoke$arity$3 ? fexpr__14680.cljs$core$IFn$_invoke$arity$3(key,state,clicker.engine.has_dependency_QMARK_) : fexpr__14680.call(null,key,state,clicker.engine.has_dependency_QMARK_));
})())){
cljs.core.chunk_append(b__14668,(function (){var G__14681 = cljs.core.cst$kw$class;
var G__14682 = (function (){var fexpr__14688 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14667,s__14666__$1,G__14681,name,next_loss,count,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14686,G__14687){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$unresearched_DASH_item,(G__14686.cljs$core$IFn$_invoke$arity$2 ? G__14686.cljs$core$IFn$_invoke$arity$2(G__14687,(0)) : G__14686.call(null,G__14687,(0))),cljs.core.cst$kw$researched_DASH_item,(G__14687 > (0))], null);
});})(i__14667,s__14666__$1,G__14681,name,next_loss,count,key,c__4322__auto__,size__4323__auto__,b__14668,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14688.cljs$core$IFn$_invoke$arity$2 ? fexpr__14688.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14688.call(null,cljs.core._EQ_,count));
})();
var G__14683 = (function (){var G__14689 = cljs.core.cst$kw$class;
var G__14690 = "research-name";
var G__14691 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group),")"].join('');
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__14689,G__14690,G__14691) : hoplon.core.span.call(null,G__14689,G__14690,G__14691));
})();
var G__14684 = (function (){var G__14692 = cljs.core.cst$kw$class;
var G__14693 = "research-loss";
var G__14694 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__14692,G__14693,G__14694) : hoplon.core.span.call(null,G__14692,G__14693,G__14694));
})();
var G__14685 = (function (){var G__14695 = cljs.core.cst$kw$class;
var G__14696 = "research-tap";
var G__14697 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__14695,G__14696,G__14697) : hoplon.core.span.call(null,G__14695,G__14696,G__14697));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$5(G__14681,G__14682,G__14683,G__14684,G__14685) : hoplon.core.li.call(null,G__14681,G__14682,G__14683,G__14684,G__14685));
})());

var G__14727 = (i__14667 + (1));
i__14667 = G__14727;
continue;
} else {
var G__14728 = (i__14667 + (1));
i__14667 = G__14728;
continue;
}
} else {
var G__14729 = (i__14667 + (1));
i__14667 = G__14729;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14668),ui$research$as_list_$_iter__14665(cljs.core.chunk_rest(s__14666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14668),null);
}
} else {
var key = cljs.core.first(s__14666__$2);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14701 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14666__$1,name,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14698,G__14700,G__14699){
return (G__14698.cljs$core$IFn$_invoke$arity$2 ? G__14698.cljs$core$IFn$_invoke$arity$2(G__14699,G__14700) : G__14698.call(null,G__14699,G__14700));
});})(s__14666__$1,name,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14701.cljs$core$IFn$_invoke$arity$3 ? fexpr__14701.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14701.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__14705 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14666__$1,name,next_loss,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14702,G__14704,G__14703){
return (G__14702.cljs$core$IFn$_invoke$arity$2 ? G__14702.cljs$core$IFn$_invoke$arity$2(G__14703,G__14704) : G__14702.call(null,G__14703,G__14704));
});})(s__14666__$1,name,next_loss,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14705.cljs$core$IFn$_invoke$arity$3 ? fexpr__14705.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14705.call(null,clicker.engine.thing_count,key,state));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14709 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14666__$1,name,next_loss,count,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14708,G__14707,G__14706){
return (G__14706.cljs$core$IFn$_invoke$arity$2 ? G__14706.cljs$core$IFn$_invoke$arity$2(G__14707,G__14708) : G__14706.call(null,G__14707,G__14708));
});})(s__14666__$1,name,next_loss,count,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14709.cljs$core$IFn$_invoke$arity$3 ? fexpr__14709.cljs$core$IFn$_invoke$arity$3(key,state,clicker.engine.has_dependency_QMARK_) : fexpr__14709.call(null,key,state,clicker.engine.has_dependency_QMARK_));
})())){
return cljs.core.cons((function (){var G__14710 = cljs.core.cst$kw$class;
var G__14711 = (function (){var fexpr__14717 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14666__$1,G__14710,name,next_loss,count,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids){
return (function (G__14715,G__14716){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$unresearched_DASH_item,(G__14715.cljs$core$IFn$_invoke$arity$2 ? G__14715.cljs$core$IFn$_invoke$arity$2(G__14716,(0)) : G__14715.call(null,G__14716,(0))),cljs.core.cst$kw$researched_DASH_item,(G__14716 > (0))], null);
});})(s__14666__$1,G__14710,name,next_loss,count,key,s__14666__$2,temp__5457__auto__,vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
);
return (fexpr__14717.cljs$core$IFn$_invoke$arity$2 ? fexpr__14717.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14717.call(null,cljs.core._EQ_,count));
})();
var G__14712 = (function (){var G__14718 = cljs.core.cst$kw$class;
var G__14719 = "research-name";
var G__14720 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group),")"].join('');
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__14718,G__14719,G__14720) : hoplon.core.span.call(null,G__14718,G__14719,G__14720));
})();
var G__14713 = (function (){var G__14721 = cljs.core.cst$kw$class;
var G__14722 = "research-loss";
var G__14723 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__14721,G__14722,G__14723) : hoplon.core.span.call(null,G__14721,G__14722,G__14723));
})();
var G__14714 = (function (){var G__14724 = cljs.core.cst$kw$class;
var G__14725 = "research-tap";
var G__14726 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__14724,G__14725,G__14726) : hoplon.core.span.call(null,G__14724,G__14725,G__14726));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$5(G__14710,G__14711,G__14712,G__14713,G__14714) : hoplon.core.li.call(null,G__14710,G__14711,G__14712,G__14713,G__14714));
})(),ui$research$as_list_$_iter__14665(cljs.core.rest(s__14666__$2)));
} else {
var G__14730 = cljs.core.rest(s__14666__$2);
s__14666__$1 = G__14730;
continue;
}
} else {
var G__14731 = cljs.core.rest(s__14666__$2);
s__14666__$1 = G__14731;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__14660,map__14663,map__14663__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$research$as_list = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14732__i = 0, G__14732__a = new Array(arguments.length -  0);
while (G__14732__i < G__14732__a.length) {G__14732__a[G__14732__i] = arguments[G__14732__i + 0]; ++G__14732__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14732__a,0,null);
} 
return ui$research$as_list__delegate.call(this,args__13797__auto__);};
ui$research$as_list.cljs$lang$maxFixedArity = 0;
ui$research$as_list.cljs$lang$applyTo = (function (arglist__14733){
var args__13797__auto__ = cljs.core.seq(arglist__14733);
return ui$research$as_list__delegate(args__13797__auto__);
});
ui$research$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$as_list__delegate;
return ui$research$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.item_list = (function() { 
var ui$research$item_list__delegate = function (args__13797__auto__){
var vec__14734 = hoplon.core.parse_args(args__13797__auto__);
var map__14737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14734,(0),null);
var map__14737__$1 = ((((!((map__14737 == null)))?(((((map__14737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14737):map__14737);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,cljs.core.cst$kw$state);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,cljs.core.cst$kw$groups);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14734,(1),null);
var G__14739 = cljs.core.cst$kw$class;
var G__14740 = "research";
var G__14741 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1("Research") : hoplon.core.h3.call(null,"Research"));
var G__14742 = (function (){var iter__4324__auto__ = ((function (G__14739,G__14740,G__14741,vec__14734,map__14737,map__14737__$1,state,groups,kids){
return (function ui$research$item_list_$_iter__14743(s__14744){
return (new cljs.core.LazySeq(null,((function (G__14739,G__14740,G__14741,vec__14734,map__14737,map__14737__$1,state,groups,kids){
return (function (){
var s__14744__$1 = s__14744;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14744__$1);
if(temp__5457__auto__){
var s__14744__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14744__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14744__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14746 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14745 = (0);
while(true){
if((i__14745 < size__4323__auto__)){
var group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14745);
cljs.core.chunk_append(b__14746,(function (){var G__14747 = ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,["Research ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group)].join('')], 0));
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__14747) : hoplon.core.ul.call(null,G__14747));
})());

var G__14749 = (i__14745 + (1));
i__14745 = G__14749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14746),ui$research$item_list_$_iter__14743(cljs.core.chunk_rest(s__14744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14746),null);
}
} else {
var group = cljs.core.first(s__14744__$2);
return cljs.core.cons((function (){var G__14748 = ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,["Research ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group)].join('')], 0));
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__14748) : hoplon.core.ul.call(null,G__14748));
})(),ui$research$item_list_$_iter__14743(cljs.core.rest(s__14744__$2)));
}
} else {
return null;
}
break;
}
});})(G__14739,G__14740,G__14741,vec__14734,map__14737,map__14737__$1,state,groups,kids))
,null,null));
});})(G__14739,G__14740,G__14741,vec__14734,map__14737,map__14737__$1,state,groups,kids))
;
return iter__4324__auto__(groups);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14739,G__14740,G__14741,G__14742) : hoplon.core.div.call(null,G__14739,G__14740,G__14741,G__14742));
};
var ui$research$item_list = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14750__i = 0, G__14750__a = new Array(arguments.length -  0);
while (G__14750__i < G__14750__a.length) {G__14750__a[G__14750__i] = arguments[G__14750__i + 0]; ++G__14750__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14750__a,0,null);
} 
return ui$research$item_list__delegate.call(this,args__13797__auto__);};
ui$research$item_list.cljs$lang$maxFixedArity = 0;
ui$research$item_list.cljs$lang$applyTo = (function (arglist__14751){
var args__13797__auto__ = cljs.core.seq(arglist__14751);
return ui$research$item_list__delegate(args__13797__auto__);
});
ui$research$item_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$item_list__delegate;
return ui$research$item_list;
})()
;
