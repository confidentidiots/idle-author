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
var ui$research$tap_button__delegate = function (args__9938__auto__){
var vec__10843 = hoplon.core.parse_args(args__9938__auto__);
var map__10846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10843,(0),null);
var map__10846__$1 = ((((!((map__10846 == null)))?(((((map__10846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10846):map__10846);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10846__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10846__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10846__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10843,(1),null);
var disabled = (function (){var fexpr__10853 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10843,map__10846,map__10846__$1,state,key,btn_txt,kids){
return (function (G__10851,G__10848,G__10850,G__10849){
var G__10854 = (G__10849.cljs$core$IFn$_invoke$arity$2 ? G__10849.cljs$core$IFn$_invoke$arity$2(G__10850,G__10851) : G__10849.call(null,G__10850,G__10851));
return (G__10848.cljs$core$IFn$_invoke$arity$1 ? G__10848.cljs$core$IFn$_invoke$arity$1(G__10854) : G__10848.call(null,G__10854));
});})(vec__10843,map__10846,map__10846__$1,state,key,btn_txt,kids))
);
return (fexpr__10853.cljs$core$IFn$_invoke$arity$4 ? fexpr__10853.cljs$core$IFn$_invoke$arity$4(key,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__10853.call(null,key,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__10843,map__10846,map__10846__$1,state,key,btn_txt,kids){
return (function (){
return clicker.engine.tap(state,key);
});})(disabled,vec__10843,map__10846,map__10846__$1,state,key,btn_txt,kids))
;
var G__10855 = cljs.core.cst$kw$disabled;
var G__10856 = disabled;
var G__10857 = cljs.core.cst$kw$click;
var G__10858 = click_fn;
var G__10859 = btn_txt;
var G__10860 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__10855,G__10856,G__10857,G__10858,G__10859,G__10860) : hoplon.core.button.call(null,G__10855,G__10856,G__10857,G__10858,G__10859,G__10860));
};
var ui$research$tap_button = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10861__i = 0, G__10861__a = new Array(arguments.length -  0);
while (G__10861__i < G__10861__a.length) {G__10861__a[G__10861__i] = arguments[G__10861__i + 0]; ++G__10861__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10861__a,0,null);
} 
return ui$research$tap_button__delegate.call(this,args__9938__auto__);};
ui$research$tap_button.cljs$lang$maxFixedArity = 0;
ui$research$tap_button.cljs$lang$applyTo = (function (arglist__10862){
var args__9938__auto__ = cljs.core.seq(arglist__10862);
return ui$research$tap_button__delegate(args__9938__auto__);
});
ui$research$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$research$tap_button__delegate;
return ui$research$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.nexts = (function() { 
var ui$research$nexts__delegate = function (args__9938__auto__){
var vec__10863 = hoplon.core.parse_args(args__9938__auto__);
var map__10866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10863,(0),null);
var map__10866__$1 = ((((!((map__10866 == null)))?(((((map__10866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10866):map__10866);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10866__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10863,(1),null);
var G__10868 = cljs.core.cst$kw$class;
var G__10869 = "gain-loss";
var G__10870 = hoplon.core.loop_tpl_STAR_(next,((function (G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids){
return (function (item__10008__auto__){
var vec__10871 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__10874 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids))
);
return (fexpr__10874.cljs$core$IFn$_invoke$arity$1 ? fexpr__10874.cljs$core$IFn$_invoke$arity$1(item__10008__auto__) : fexpr__10874.call(null,item__10008__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10871,(0),null);
var name = (function (){var fexpr__10877 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__10871,it,G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids){
return (function (G__10875,G__10876){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10875.cljs$core$IFn$_invoke$arity$1 ? G__10875.cljs$core$IFn$_invoke$arity$1(G__10876) : G__10875.call(null,G__10876)))].join('');
});})(vec__10871,it,G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids))
);
return (fexpr__10877.cljs$core$IFn$_invoke$arity$2 ? fexpr__10877.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__10877.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__10880 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__10871,it,G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids){
return (function (G__10878,G__10879){
return (G__10878.cljs$core$IFn$_invoke$arity$1 ? G__10878.cljs$core$IFn$_invoke$arity$1(G__10879) : G__10878.call(null,G__10879));
});})(name,vec__10871,it,G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids))
);
return (fexpr__10880.cljs$core$IFn$_invoke$arity$2 ? fexpr__10880.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__10880.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__10885 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__10871,it,G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids){
return (function (G__10883,G__10882,G__10881){
var G__10886 = (G__10882.cljs$core$IFn$_invoke$arity$1 ? G__10882.cljs$core$IFn$_invoke$arity$1(G__10883) : G__10882.call(null,G__10883));
return (G__10881.cljs$core$IFn$_invoke$arity$1 ? G__10881.cljs$core$IFn$_invoke$arity$1(G__10886) : G__10881.call(null,G__10886));
});})(name,val_bare,vec__10871,it,G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids))
);
return (fexpr__10885.cljs$core$IFn$_invoke$arity$3 ? fexpr__10885.cljs$core$IFn$_invoke$arity$3(val_bare,Math.abs,clicker.util.decimal_format) : fexpr__10885.call(null,val_bare,Math.abs,clicker.util.decimal_format));
})();
var G__10887 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__10888 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__10887,G__10888) : hoplon.core.tr.call(null,G__10887,G__10888));
});})(G__10868,G__10869,vec__10863,map__10866,map__10866__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10868,G__10869,G__10870) : hoplon.core.table.call(null,G__10868,G__10869,G__10870));
};
var ui$research$nexts = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10889__i = 0, G__10889__a = new Array(arguments.length -  0);
while (G__10889__i < G__10889__a.length) {G__10889__a[G__10889__i] = arguments[G__10889__i + 0]; ++G__10889__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10889__a,0,null);
} 
return ui$research$nexts__delegate.call(this,args__9938__auto__);};
ui$research$nexts.cljs$lang$maxFixedArity = 0;
ui$research$nexts.cljs$lang$applyTo = (function (arglist__10890){
var args__9938__auto__ = cljs.core.seq(arglist__10890);
return ui$research$nexts__delegate(args__9938__auto__);
});
ui$research$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$research$nexts__delegate;
return ui$research$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.as_list = (function() { 
var ui$research$as_list__delegate = function (args__9938__auto__){
var vec__10891 = hoplon.core.parse_args(args__9938__auto__);
var map__10894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10891,(0),null);
var map__10894__$1 = ((((!((map__10894 == null)))?(((((map__10894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10894):map__10894);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10894__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10894__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10894__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10891,(1),null);
var iter__4324__auto__ = ((function (vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function ui$research$as_list_$_iter__10896(s__10897){
return (new cljs.core.LazySeq(null,((function (vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (){
var s__10897__$1 = s__10897;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10897__$1);
if(temp__5457__auto__){
var s__10897__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10897__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10897__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10899 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10898 = (0);
while(true){
if((i__10898 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10898);
var item_name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10903 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10898,s__10897__$1,item_name,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10900,G__10902,G__10901){
return (G__10900.cljs$core$IFn$_invoke$arity$2 ? G__10900.cljs$core$IFn$_invoke$arity$2(G__10901,G__10902) : G__10900.call(null,G__10901,G__10902));
});})(i__10898,s__10897__$1,item_name,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10903.cljs$core$IFn$_invoke$arity$3 ? fexpr__10903.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10903.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__10907 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10898,s__10897__$1,item_name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10904,G__10906,G__10905){
return (G__10904.cljs$core$IFn$_invoke$arity$2 ? G__10904.cljs$core$IFn$_invoke$arity$2(G__10905,G__10906) : G__10904.call(null,G__10905,G__10906));
});})(i__10898,s__10897__$1,item_name,next_loss,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10907.cljs$core$IFn$_invoke$arity$3 ? fexpr__10907.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10907.call(null,clicker.engine.thing_count,key,state));
})();
var group_name = cljs.core.name(group);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10911 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10898,s__10897__$1,item_name,next_loss,count,group_name,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10908,G__10910,G__10909){
return (G__10908.cljs$core$IFn$_invoke$arity$2 ? G__10908.cljs$core$IFn$_invoke$arity$2(G__10909,G__10910) : G__10908.call(null,G__10909,G__10910));
});})(i__10898,s__10897__$1,item_name,next_loss,count,group_name,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10911.cljs$core$IFn$_invoke$arity$3 ? fexpr__10911.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10911.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__10899,(function (){var G__10912 = cljs.core.cst$kw$class;
var G__10913 = (function (){var fexpr__10920 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__10898,s__10897__$1,G__10912,item_name,next_loss,count,group_name,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10918,G__10917,G__10919){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([["unresearched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10917)].join(''),(G__10918.cljs$core$IFn$_invoke$arity$2 ? G__10918.cljs$core$IFn$_invoke$arity$2(G__10919,(0)) : G__10918.call(null,G__10919,(0))),["researched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10917)].join(''),(G__10919 > (0))]);
});})(i__10898,s__10897__$1,G__10912,item_name,next_loss,count,group_name,key,c__4322__auto__,size__4323__auto__,b__10899,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10920.cljs$core$IFn$_invoke$arity$3 ? fexpr__10920.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,group_name,count) : fexpr__10920.call(null,cljs.core._EQ_,group_name,count));
})();
var G__10914 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(item_name) : hoplon.core.td.call(null,item_name));
var G__10915 = (function (){var G__10921 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10921) : hoplon.core.td.call(null,G__10921));
})();
var G__10916 = (function (){var G__10922 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10922) : hoplon.core.td.call(null,G__10922));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10912,G__10913,G__10914,G__10915,G__10916) : hoplon.core.tr.call(null,G__10912,G__10913,G__10914,G__10915,G__10916));
})());

var G__10946 = (i__10898 + (1));
i__10898 = G__10946;
continue;
} else {
var G__10947 = (i__10898 + (1));
i__10898 = G__10947;
continue;
}
} else {
var G__10948 = (i__10898 + (1));
i__10898 = G__10948;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10899),ui$research$as_list_$_iter__10896(cljs.core.chunk_rest(s__10897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10899),null);
}
} else {
var key = cljs.core.first(s__10897__$2);
var item_name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__10926 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10897__$1,item_name,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10923,G__10925,G__10924){
return (G__10923.cljs$core$IFn$_invoke$arity$2 ? G__10923.cljs$core$IFn$_invoke$arity$2(G__10924,G__10925) : G__10923.call(null,G__10924,G__10925));
});})(s__10897__$1,item_name,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10926.cljs$core$IFn$_invoke$arity$3 ? fexpr__10926.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__10926.call(null,clicker.engine.next_loss,key,state));
})();
var count = (function (){var fexpr__10930 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10897__$1,item_name,next_loss,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10927,G__10929,G__10928){
return (G__10927.cljs$core$IFn$_invoke$arity$2 ? G__10927.cljs$core$IFn$_invoke$arity$2(G__10928,G__10929) : G__10927.call(null,G__10928,G__10929));
});})(s__10897__$1,item_name,next_loss,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10930.cljs$core$IFn$_invoke$arity$3 ? fexpr__10930.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__10930.call(null,clicker.engine.thing_count,key,state));
})();
var group_name = cljs.core.name(group);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__10934 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10897__$1,item_name,next_loss,count,group_name,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10931,G__10933,G__10932){
return (G__10931.cljs$core$IFn$_invoke$arity$2 ? G__10931.cljs$core$IFn$_invoke$arity$2(G__10932,G__10933) : G__10931.call(null,G__10932,G__10933));
});})(s__10897__$1,item_name,next_loss,count,group_name,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10934.cljs$core$IFn$_invoke$arity$3 ? fexpr__10934.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__10934.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__10935 = cljs.core.cst$kw$class;
var G__10936 = (function (){var fexpr__10943 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__10897__$1,G__10935,item_name,next_loss,count,group_name,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids){
return (function (G__10941,G__10940,G__10942){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([["unresearched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10940)].join(''),(G__10941.cljs$core$IFn$_invoke$arity$2 ? G__10941.cljs$core$IFn$_invoke$arity$2(G__10942,(0)) : G__10941.call(null,G__10942,(0))),["researched-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10940)].join(''),(G__10942 > (0))]);
});})(s__10897__$1,G__10935,item_name,next_loss,count,group_name,key,s__10897__$2,temp__5457__auto__,vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
);
return (fexpr__10943.cljs$core$IFn$_invoke$arity$3 ? fexpr__10943.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,group_name,count) : fexpr__10943.call(null,cljs.core._EQ_,group_name,count));
})();
var G__10937 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(item_name) : hoplon.core.td.call(null,item_name));
var G__10938 = (function (){var G__10944 = ui.research.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10944) : hoplon.core.td.call(null,G__10944));
})();
var G__10939 = (function (){var G__10945 = ui.research.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__10945) : hoplon.core.td.call(null,G__10945));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__10935,G__10936,G__10937,G__10938,G__10939) : hoplon.core.tr.call(null,G__10935,G__10936,G__10937,G__10938,G__10939));
})(),ui$research$as_list_$_iter__10896(cljs.core.rest(s__10897__$2)));
} else {
var G__10949 = cljs.core.rest(s__10897__$2);
s__10897__$1 = G__10949;
continue;
}
} else {
var G__10950 = cljs.core.rest(s__10897__$2);
s__10897__$1 = G__10950;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__10891,map__10894,map__10894__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$research$as_list = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10951__i = 0, G__10951__a = new Array(arguments.length -  0);
while (G__10951__i < G__10951__a.length) {G__10951__a[G__10951__i] = arguments[G__10951__i + 0]; ++G__10951__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10951__a,0,null);
} 
return ui$research$as_list__delegate.call(this,args__9938__auto__);};
ui$research$as_list.cljs$lang$maxFixedArity = 0;
ui$research$as_list.cljs$lang$applyTo = (function (arglist__10952){
var args__9938__auto__ = cljs.core.seq(arglist__10952);
return ui$research$as_list__delegate(args__9938__auto__);
});
ui$research$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$as_list__delegate;
return ui$research$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.research.item_list = (function() { 
var ui$research$item_list__delegate = function (args__9938__auto__){
var vec__10953 = hoplon.core.parse_args(args__9938__auto__);
var map__10956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10953,(0),null);
var map__10956__$1 = ((((!((map__10956 == null)))?(((((map__10956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10956):map__10956);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10956__$1,cljs.core.cst$kw$state);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10956__$1,cljs.core.cst$kw$groups);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10953,(1),null);
var G__10958 = cljs.core.cst$kw$class;
var G__10959 = "research";
var G__10960 = (function (){var G__10961 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Research") : hoplon.core.caption.call(null,"Research"));
var G__10962 = (function (){var G__10964 = (function (){var G__10965 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__10966 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Cost") : hoplon.core.th.call(null,"Cost"));
var G__10967 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__10965,G__10966,G__10967) : hoplon.core.tr.call(null,G__10965,G__10966,G__10967));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__10964) : hoplon.core.thead.call(null,G__10964));
})();
var G__10963 = (function (){var iter__4324__auto__ = ((function (G__10961,G__10962,G__10958,G__10959,vec__10953,map__10956,map__10956__$1,state,groups,kids){
return (function ui$research$item_list_$_iter__10968(s__10969){
return (new cljs.core.LazySeq(null,((function (G__10961,G__10962,G__10958,G__10959,vec__10953,map__10956,map__10956__$1,state,groups,kids){
return (function (){
var s__10969__$1 = s__10969;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10969__$1);
if(temp__5457__auto__){
var s__10969__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10969__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10969__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10971 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10970 = (0);
while(true){
if((i__10970 < size__4323__auto__)){
var group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10970);
cljs.core.chunk_append(b__10971,ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,"Research"], 0)));

var G__10972 = (i__10970 + (1));
i__10970 = G__10972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10971),ui$research$item_list_$_iter__10968(cljs.core.chunk_rest(s__10969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10971),null);
}
} else {
var group = cljs.core.first(s__10969__$2);
return cljs.core.cons(ui.research.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,group,cljs.core.cst$kw$btn_DASH_txt,"Research"], 0)),ui$research$item_list_$_iter__10968(cljs.core.rest(s__10969__$2)));
}
} else {
return null;
}
break;
}
});})(G__10961,G__10962,G__10958,G__10959,vec__10953,map__10956,map__10956__$1,state,groups,kids))
,null,null));
});})(G__10961,G__10962,G__10958,G__10959,vec__10953,map__10956,map__10956__$1,state,groups,kids))
;
return iter__4324__auto__(groups);
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__10961,G__10962,G__10963) : hoplon.core.table.call(null,G__10961,G__10962,G__10963));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__10958,G__10959,G__10960) : hoplon.core.div.call(null,G__10958,G__10959,G__10960));
};
var ui$research$item_list = function (var_args){
var args__9938__auto__ = null;
if (arguments.length > 0) {
var G__10973__i = 0, G__10973__a = new Array(arguments.length -  0);
while (G__10973__i < G__10973__a.length) {G__10973__a[G__10973__i] = arguments[G__10973__i + 0]; ++G__10973__i;}
  args__9938__auto__ = new cljs.core.IndexedSeq(G__10973__a,0,null);
} 
return ui$research$item_list__delegate.call(this,args__9938__auto__);};
ui$research$item_list.cljs$lang$maxFixedArity = 0;
ui$research$item_list.cljs$lang$applyTo = (function (arglist__10974){
var args__9938__auto__ = cljs.core.seq(arglist__10974);
return ui$research$item_list__delegate(args__9938__auto__);
});
ui$research$item_list.cljs$core$IFn$_invoke$arity$variadic = ui$research$item_list__delegate;
return ui$research$item_list;
})()
;
