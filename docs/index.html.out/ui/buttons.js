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
var ui$buttons$tap_button__delegate = function (args__13797__auto__){
var vec__14425 = hoplon.core.parse_args(args__13797__auto__);
var map__14428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(0),null);
var map__14428__$1 = ((((!((map__14428 == null)))?(((((map__14428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14428):map__14428);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14428__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14428__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14428__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14428__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(1),null);
var disabled = (function (){var fexpr__14440 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14425,map__14428,map__14428__$1,state,key,btn_txt,n,kids){
return (function (G__14433,G__14434,G__14430,G__14432,G__14431){
var G__14441 = (function (){var G__14442 = G__14432;
var G__14443 = G__14433;
var G__14444 = cljs.core.cst$kw$n;
var G__14445 = G__14434;
return (G__14431.cljs$core$IFn$_invoke$arity$4 ? G__14431.cljs$core$IFn$_invoke$arity$4(G__14442,G__14443,G__14444,G__14445) : G__14431.call(null,G__14442,G__14443,G__14444,G__14445));
})();
return (G__14430.cljs$core$IFn$_invoke$arity$1 ? G__14430.cljs$core$IFn$_invoke$arity$1(G__14441) : G__14430.call(null,G__14441));
});})(vec__14425,map__14428,map__14428__$1,state,key,btn_txt,n,kids))
);
return (fexpr__14440.cljs$core$IFn$_invoke$arity$5 ? fexpr__14440.cljs$core$IFn$_invoke$arity$5(key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__14440.call(null,key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14425,map__14428,map__14428__$1,state,key,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(state,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__14425,map__14428,map__14428__$1,state,key,btn_txt,n,kids))
;
var G__14446 = cljs.core.cst$kw$disabled;
var G__14447 = disabled;
var G__14448 = cljs.core.cst$kw$click;
var G__14449 = click_fn;
var G__14450 = n;
var G__14451 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14446,G__14447,G__14448,G__14449,G__14450,G__14451) : hoplon.core.button.call(null,G__14446,G__14447,G__14448,G__14449,G__14450,G__14451));
};
var ui$buttons$tap_button = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14452__i = 0, G__14452__a = new Array(arguments.length -  0);
while (G__14452__i < G__14452__a.length) {G__14452__a[G__14452__i] = arguments[G__14452__i + 0]; ++G__14452__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14452__a,0,null);
} 
return ui$buttons$tap_button__delegate.call(this,args__13797__auto__);};
ui$buttons$tap_button.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_button.cljs$lang$applyTo = (function (arglist__14453){
var args__13797__auto__ = cljs.core.seq(arglist__14453);
return ui$buttons$tap_button__delegate(args__13797__auto__);
});
ui$buttons$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_button__delegate;
return ui$buttons$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tap_buttons = (function() { 
var ui$buttons$tap_buttons__delegate = function (args__13797__auto__){
var vec__14454 = hoplon.core.parse_args(args__13797__auto__);
var map__14457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(0),null);
var map__14457__$1 = ((((!((map__14457 == null)))?(((((map__14457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14457):map__14457);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14457__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14457__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14457__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14454,(1),null);
var iter__4324__auto__ = ((function (vec__14454,map__14457,map__14457__$1,state,key,btn_txt,kids){
return (function ui$buttons$tap_buttons_$_iter__14459(s__14460){
return (new cljs.core.LazySeq(null,((function (vec__14454,map__14457,map__14457__$1,state,key,btn_txt,kids){
return (function (){
var s__14460__$1 = s__14460;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14460__$1);
if(temp__5457__auto__){
var s__14460__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14460__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14460__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14462 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14461 = (0);
while(true){
if((i__14461 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14461);
cljs.core.chunk_append(b__14462,ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__14463 = (i__14461 + (1));
i__14461 = G__14463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14462),ui$buttons$tap_buttons_$_iter__14459(cljs.core.chunk_rest(s__14460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14462),null);
}
} else {
var n = cljs.core.first(s__14460__$2);
return cljs.core.cons(ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),ui$buttons$tap_buttons_$_iter__14459(cljs.core.rest(s__14460__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14454,map__14457,map__14457__$1,state,key,btn_txt,kids))
,null,null));
});})(vec__14454,map__14457,map__14457__$1,state,key,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var ui$buttons$tap_buttons = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14464__i = 0, G__14464__a = new Array(arguments.length -  0);
while (G__14464__i < G__14464__a.length) {G__14464__a[G__14464__i] = arguments[G__14464__i + 0]; ++G__14464__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14464__a,0,null);
} 
return ui$buttons$tap_buttons__delegate.call(this,args__13797__auto__);};
ui$buttons$tap_buttons.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_buttons.cljs$lang$applyTo = (function (arglist__14465){
var args__13797__auto__ = cljs.core.seq(arglist__14465);
return ui$buttons$tap_buttons__delegate(args__13797__auto__);
});
ui$buttons$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_buttons__delegate;
return ui$buttons$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.nexts = (function() { 
var ui$buttons$nexts__delegate = function (args__13797__auto__){
var vec__14466 = hoplon.core.parse_args(args__13797__auto__);
var map__14469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14466,(0),null);
var map__14469__$1 = ((((!((map__14469 == null)))?(((((map__14469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14469):map__14469);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14469__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14466,(1),null);
var G__14471 = cljs.core.cst$kw$class;
var G__14472 = "gain-loss";
var G__14473 = hoplon.core.loop_tpl_STAR_(next,((function (G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids){
return (function (item__13867__auto__){
var vec__14474 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__14477 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids))
);
return (fexpr__14477.cljs$core$IFn$_invoke$arity$1 ? fexpr__14477.cljs$core$IFn$_invoke$arity$1(item__13867__auto__) : fexpr__14477.call(null,item__13867__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14474,(0),null);
var name = (function (){var fexpr__14480 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14474,it,G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids){
return (function (G__14478,G__14479){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14478.cljs$core$IFn$_invoke$arity$1 ? G__14478.cljs$core$IFn$_invoke$arity$1(G__14479) : G__14478.call(null,G__14479)))].join('');
});})(vec__14474,it,G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids))
);
return (fexpr__14480.cljs$core$IFn$_invoke$arity$2 ? fexpr__14480.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__14480.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__14483 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__14474,it,G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids){
return (function (G__14481,G__14482){
return (G__14481.cljs$core$IFn$_invoke$arity$1 ? G__14481.cljs$core$IFn$_invoke$arity$1(G__14482) : G__14481.call(null,G__14482));
});})(name,vec__14474,it,G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids))
);
return (fexpr__14483.cljs$core$IFn$_invoke$arity$2 ? fexpr__14483.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__14483.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__14489 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__14474,it,G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids){
return (function (G__14486,G__14484,G__14485){
var G__14490 = "%.2f";
var G__14491 = (G__14485.cljs$core$IFn$_invoke$arity$1 ? G__14485.cljs$core$IFn$_invoke$arity$1(G__14486) : G__14485.call(null,G__14486));
return (G__14484.cljs$core$IFn$_invoke$arity$2 ? G__14484.cljs$core$IFn$_invoke$arity$2(G__14490,G__14491) : G__14484.call(null,G__14490,G__14491));
});})(name,val_bare,vec__14474,it,G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids))
);
return (fexpr__14489.cljs$core$IFn$_invoke$arity$3 ? fexpr__14489.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__14489.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__14492 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14493 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__14492,G__14493) : hoplon.core.tr.call(null,G__14492,G__14493));
});})(G__14471,G__14472,vec__14466,map__14469,map__14469__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14471,G__14472,G__14473) : hoplon.core.table.call(null,G__14471,G__14472,G__14473));
};
var ui$buttons$nexts = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14494__i = 0, G__14494__a = new Array(arguments.length -  0);
while (G__14494__i < G__14494__a.length) {G__14494__a[G__14494__i] = arguments[G__14494__i + 0]; ++G__14494__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14494__a,0,null);
} 
return ui$buttons$nexts__delegate.call(this,args__13797__auto__);};
ui$buttons$nexts.cljs$lang$maxFixedArity = 0;
ui$buttons$nexts.cljs$lang$applyTo = (function (arglist__14495){
var args__13797__auto__ = cljs.core.seq(arglist__14495);
return ui$buttons$nexts__delegate(args__13797__auto__);
});
ui$buttons$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$nexts__delegate;
return ui$buttons$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.as_list = (function() { 
var ui$buttons$as_list__delegate = function (args__13797__auto__){
var vec__14496 = hoplon.core.parse_args(args__13797__auto__);
var map__14499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(0),null);
var map__14499__$1 = ((((!((map__14499 == null)))?(((((map__14499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14499):map__14499);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14499__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14499__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14499__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(1),null);
var iter__4324__auto__ = ((function (vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function ui$buttons$as_list_$_iter__14501(s__14502){
return (new cljs.core.LazySeq(null,((function (vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (){
var s__14502__$1 = s__14502;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14502__$1);
if(temp__5457__auto__){
var s__14502__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14502__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14502__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14504 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14503 = (0);
while(true){
if((i__14503 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14503);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14508 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14503,s__14502__$1,name,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14505,G__14507,G__14506){
return (G__14505.cljs$core$IFn$_invoke$arity$2 ? G__14505.cljs$core$IFn$_invoke$arity$2(G__14506,G__14507) : G__14505.call(null,G__14506,G__14507));
});})(i__14503,s__14502__$1,name,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14508.cljs$core$IFn$_invoke$arity$3 ? fexpr__14508.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14508.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__14512 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14503,s__14502__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14511,G__14509,G__14510){
return (G__14509.cljs$core$IFn$_invoke$arity$2 ? G__14509.cljs$core$IFn$_invoke$arity$2(G__14510,G__14511) : G__14509.call(null,G__14510,G__14511));
});})(i__14503,s__14502__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14512.cljs$core$IFn$_invoke$arity$3 ? fexpr__14512.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__14512.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__14516 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14503,s__14502__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14513,G__14515,G__14514){
return (G__14513.cljs$core$IFn$_invoke$arity$2 ? G__14513.cljs$core$IFn$_invoke$arity$2(G__14514,G__14515) : G__14513.call(null,G__14514,G__14515));
});})(i__14503,s__14502__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14516.cljs$core$IFn$_invoke$arity$3 ? fexpr__14516.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14516.call(null,clicker.engine.thing_count,key,state));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14520 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14503,s__14502__$1,name,next_loss,next_gain,count,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14519,G__14518,G__14517){
return (G__14517.cljs$core$IFn$_invoke$arity$2 ? G__14517.cljs$core$IFn$_invoke$arity$2(G__14518,G__14519) : G__14517.call(null,G__14518,G__14519));
});})(i__14503,s__14502__$1,name,next_loss,next_gain,count,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14520.cljs$core$IFn$_invoke$arity$3 ? fexpr__14520.cljs$core$IFn$_invoke$arity$3(key,state,clicker.engine.has_dependency_QMARK_) : fexpr__14520.call(null,key,state,clicker.engine.has_dependency_QMARK_));
})())){
cljs.core.chunk_append(b__14504,(function (){var G__14521 = cljs.core.cst$kw$class;
var G__14522 = (function (){var fexpr__14530 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14503,s__14502__$1,G__14521,name,next_loss,next_gain,count,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14528,G__14529){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14528.cljs$core$IFn$_invoke$arity$2 ? G__14528.cljs$core$IFn$_invoke$arity$2(G__14529,(0)) : G__14528.call(null,G__14529,(0))),cljs.core.cst$kw$olditem,(G__14529 > (0))], null);
});})(i__14503,s__14502__$1,G__14521,name,next_loss,next_gain,count,key,c__4322__auto__,size__4323__auto__,b__14504,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14530.cljs$core$IFn$_invoke$arity$2 ? fexpr__14530.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14530.call(null,cljs.core._EQ_,count));
})();
var G__14523 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14524 = (function (){var G__14531 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14531) : hoplon.core.td.call(null,G__14531));
})();
var G__14525 = (function (){var G__14532 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14532) : hoplon.core.td.call(null,G__14532));
})();
var G__14526 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14527 = (function (){var G__14533 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14533) : hoplon.core.td.call(null,G__14533));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__14521,G__14522,G__14523,G__14524,G__14525,G__14526,G__14527) : hoplon.core.tr.call(null,G__14521,G__14522,G__14523,G__14524,G__14525,G__14526,G__14527));
})());

var G__14563 = (i__14503 + (1));
i__14503 = G__14563;
continue;
} else {
var G__14564 = (i__14503 + (1));
i__14503 = G__14564;
continue;
}
} else {
var G__14565 = (i__14503 + (1));
i__14503 = G__14565;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14504),ui$buttons$as_list_$_iter__14501(cljs.core.chunk_rest(s__14502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14504),null);
}
} else {
var key = cljs.core.first(s__14502__$2);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14537 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14502__$1,name,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14534,G__14536,G__14535){
return (G__14534.cljs$core$IFn$_invoke$arity$2 ? G__14534.cljs$core$IFn$_invoke$arity$2(G__14535,G__14536) : G__14534.call(null,G__14535,G__14536));
});})(s__14502__$1,name,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14537.cljs$core$IFn$_invoke$arity$3 ? fexpr__14537.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14537.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__14541 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14502__$1,name,next_loss,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14540,G__14538,G__14539){
return (G__14538.cljs$core$IFn$_invoke$arity$2 ? G__14538.cljs$core$IFn$_invoke$arity$2(G__14539,G__14540) : G__14538.call(null,G__14539,G__14540));
});})(s__14502__$1,name,next_loss,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14541.cljs$core$IFn$_invoke$arity$3 ? fexpr__14541.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__14541.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__14545 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14502__$1,name,next_loss,next_gain,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14542,G__14544,G__14543){
return (G__14542.cljs$core$IFn$_invoke$arity$2 ? G__14542.cljs$core$IFn$_invoke$arity$2(G__14543,G__14544) : G__14542.call(null,G__14543,G__14544));
});})(s__14502__$1,name,next_loss,next_gain,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14545.cljs$core$IFn$_invoke$arity$3 ? fexpr__14545.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14545.call(null,clicker.engine.thing_count,key,state));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14549 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14502__$1,name,next_loss,next_gain,count,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14548,G__14547,G__14546){
return (G__14546.cljs$core$IFn$_invoke$arity$2 ? G__14546.cljs$core$IFn$_invoke$arity$2(G__14547,G__14548) : G__14546.call(null,G__14547,G__14548));
});})(s__14502__$1,name,next_loss,next_gain,count,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14549.cljs$core$IFn$_invoke$arity$3 ? fexpr__14549.cljs$core$IFn$_invoke$arity$3(key,state,clicker.engine.has_dependency_QMARK_) : fexpr__14549.call(null,key,state,clicker.engine.has_dependency_QMARK_));
})())){
return cljs.core.cons((function (){var G__14550 = cljs.core.cst$kw$class;
var G__14551 = (function (){var fexpr__14559 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14502__$1,G__14550,name,next_loss,next_gain,count,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids){
return (function (G__14557,G__14558){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14557.cljs$core$IFn$_invoke$arity$2 ? G__14557.cljs$core$IFn$_invoke$arity$2(G__14558,(0)) : G__14557.call(null,G__14558,(0))),cljs.core.cst$kw$olditem,(G__14558 > (0))], null);
});})(s__14502__$1,G__14550,name,next_loss,next_gain,count,key,s__14502__$2,temp__5457__auto__,vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
);
return (fexpr__14559.cljs$core$IFn$_invoke$arity$2 ? fexpr__14559.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14559.call(null,cljs.core._EQ_,count));
})();
var G__14552 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14553 = (function (){var G__14560 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14560) : hoplon.core.td.call(null,G__14560));
})();
var G__14554 = (function (){var G__14561 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14561) : hoplon.core.td.call(null,G__14561));
})();
var G__14555 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14556 = (function (){var G__14562 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14562) : hoplon.core.td.call(null,G__14562));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__14550,G__14551,G__14552,G__14553,G__14554,G__14555,G__14556) : hoplon.core.tr.call(null,G__14550,G__14551,G__14552,G__14553,G__14554,G__14555,G__14556));
})(),ui$buttons$as_list_$_iter__14501(cljs.core.rest(s__14502__$2)));
} else {
var G__14566 = cljs.core.rest(s__14502__$2);
s__14502__$1 = G__14566;
continue;
}
} else {
var G__14567 = cljs.core.rest(s__14502__$2);
s__14502__$1 = G__14567;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__14496,map__14499,map__14499__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$buttons$as_list = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14568__i = 0, G__14568__a = new Array(arguments.length -  0);
while (G__14568__i < G__14568__a.length) {G__14568__a[G__14568__i] = arguments[G__14568__i + 0]; ++G__14568__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14568__a,0,null);
} 
return ui$buttons$as_list__delegate.call(this,args__13797__auto__);};
ui$buttons$as_list.cljs$lang$maxFixedArity = 0;
ui$buttons$as_list.cljs$lang$applyTo = (function (arglist__14569){
var args__13797__auto__ = cljs.core.seq(arglist__14569);
return ui$buttons$as_list__delegate(args__13797__auto__);
});
ui$buttons$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$as_list__delegate;
return ui$buttons$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tool_list = (function() { 
var ui$buttons$tool_list__delegate = function (args__13797__auto__){
var vec__14570 = hoplon.core.parse_args(args__13797__auto__);
var map__14573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570,(0),null);
var map__14573__$1 = ((((!((map__14573 == null)))?(((((map__14573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14573):map__14573);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14573__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14570,(1),null);
var G__14575 = cljs.core.cst$kw$class;
var G__14576 = "upgrade";
var G__14577 = (function (){var G__14578 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Buy tools") : hoplon.core.caption.call(null,"Buy tools"));
var G__14579 = (function (){var G__14581 = (function (){var G__14582 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14583 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__14584 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__14585 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__14586 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__14582,G__14583,G__14584,G__14585,G__14586) : hoplon.core.tr.call(null,G__14582,G__14583,G__14584,G__14585,G__14586));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14581) : hoplon.core.thead.call(null,G__14581));
})();
var G__14580 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14578,G__14579,G__14580) : hoplon.core.table.call(null,G__14578,G__14579,G__14580));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14575,G__14576,G__14577) : hoplon.core.div.call(null,G__14575,G__14576,G__14577));
};
var ui$buttons$tool_list = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14587__i = 0, G__14587__a = new Array(arguments.length -  0);
while (G__14587__i < G__14587__a.length) {G__14587__a[G__14587__i] = arguments[G__14587__i + 0]; ++G__14587__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14587__a,0,null);
} 
return ui$buttons$tool_list__delegate.call(this,args__13797__auto__);};
ui$buttons$tool_list.cljs$lang$maxFixedArity = 0;
ui$buttons$tool_list.cljs$lang$applyTo = (function (arglist__14588){
var args__13797__auto__ = cljs.core.seq(arglist__14588);
return ui$buttons$tool_list__delegate(args__13797__auto__);
});
ui$buttons$tool_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tool_list__delegate;
return ui$buttons$tool_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.product_list = (function() { 
var ui$buttons$product_list__delegate = function (args__13797__auto__){
var vec__14589 = hoplon.core.parse_args(args__13797__auto__);
var map__14592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14589,(0),null);
var map__14592__$1 = ((((!((map__14592 == null)))?(((((map__14592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14592):map__14592);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14592__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14589,(1),null);
var G__14594 = cljs.core.cst$kw$class;
var G__14595 = "sell";
var G__14596 = (function (){var G__14597 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__14598 = (function (){var G__14600 = (function (){var G__14601 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14602 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__14603 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__14604 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__14605 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__14601,G__14602,G__14603,G__14604,G__14605) : hoplon.core.tr.call(null,G__14601,G__14602,G__14603,G__14604,G__14605));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14600) : hoplon.core.thead.call(null,G__14600));
})();
var G__14599 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14597,G__14598,G__14599) : hoplon.core.table.call(null,G__14597,G__14598,G__14599));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14594,G__14595,G__14596) : hoplon.core.div.call(null,G__14594,G__14595,G__14596));
};
var ui$buttons$product_list = function (var_args){
var args__13797__auto__ = null;
if (arguments.length > 0) {
var G__14606__i = 0, G__14606__a = new Array(arguments.length -  0);
while (G__14606__i < G__14606__a.length) {G__14606__a[G__14606__i] = arguments[G__14606__i + 0]; ++G__14606__i;}
  args__13797__auto__ = new cljs.core.IndexedSeq(G__14606__a,0,null);
} 
return ui$buttons$product_list__delegate.call(this,args__13797__auto__);};
ui$buttons$product_list.cljs$lang$maxFixedArity = 0;
ui$buttons$product_list.cljs$lang$applyTo = (function (arglist__14607){
var args__13797__auto__ = cljs.core.seq(arglist__14607);
return ui$buttons$product_list__delegate(args__13797__auto__);
});
ui$buttons$product_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$product_list__delegate;
return ui$buttons$product_list;
})()
;
