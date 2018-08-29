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
var ui$buttons$tap_button__delegate = function (args__13747__auto__){
var vec__14375 = hoplon.core.parse_args(args__13747__auto__);
var map__14378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(0),null);
var map__14378__$1 = ((((!((map__14378 == null)))?(((((map__14378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14378):map__14378);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14378__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(1),null);
var disabled = (function (){var fexpr__14390 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14375,map__14378,map__14378__$1,state,key,btn_txt,n,kids){
return (function (G__14383,G__14384,G__14380,G__14382,G__14381){
var G__14391 = (function (){var G__14392 = G__14382;
var G__14393 = G__14383;
var G__14394 = cljs.core.cst$kw$n;
var G__14395 = G__14384;
return (G__14381.cljs$core$IFn$_invoke$arity$4 ? G__14381.cljs$core$IFn$_invoke$arity$4(G__14392,G__14393,G__14394,G__14395) : G__14381.call(null,G__14392,G__14393,G__14394,G__14395));
})();
return (G__14380.cljs$core$IFn$_invoke$arity$1 ? G__14380.cljs$core$IFn$_invoke$arity$1(G__14391) : G__14380.call(null,G__14391));
});})(vec__14375,map__14378,map__14378__$1,state,key,btn_txt,n,kids))
);
return (fexpr__14390.cljs$core$IFn$_invoke$arity$5 ? fexpr__14390.cljs$core$IFn$_invoke$arity$5(key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_) : fexpr__14390.call(null,key,n,cljs.core.not,state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14375,map__14378,map__14378__$1,state,key,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(state,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__14375,map__14378,map__14378__$1,state,key,btn_txt,n,kids))
;
var G__14396 = cljs.core.cst$kw$disabled;
var G__14397 = disabled;
var G__14398 = cljs.core.cst$kw$click;
var G__14399 = click_fn;
var G__14400 = n;
var G__14401 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14396,G__14397,G__14398,G__14399,G__14400,G__14401) : hoplon.core.button.call(null,G__14396,G__14397,G__14398,G__14399,G__14400,G__14401));
};
var ui$buttons$tap_button = function (var_args){
var args__13747__auto__ = null;
if (arguments.length > 0) {
var G__14402__i = 0, G__14402__a = new Array(arguments.length -  0);
while (G__14402__i < G__14402__a.length) {G__14402__a[G__14402__i] = arguments[G__14402__i + 0]; ++G__14402__i;}
  args__13747__auto__ = new cljs.core.IndexedSeq(G__14402__a,0,null);
} 
return ui$buttons$tap_button__delegate.call(this,args__13747__auto__);};
ui$buttons$tap_button.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_button.cljs$lang$applyTo = (function (arglist__14403){
var args__13747__auto__ = cljs.core.seq(arglist__14403);
return ui$buttons$tap_button__delegate(args__13747__auto__);
});
ui$buttons$tap_button.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_button__delegate;
return ui$buttons$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tap_buttons = (function() { 
var ui$buttons$tap_buttons__delegate = function (args__13747__auto__){
var vec__14404 = hoplon.core.parse_args(args__13747__auto__);
var map__14407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14404,(0),null);
var map__14407__$1 = ((((!((map__14407 == null)))?(((((map__14407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14407):map__14407);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,cljs.core.cst$kw$state);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,cljs.core.cst$kw$key);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14404,(1),null);
var iter__4324__auto__ = ((function (vec__14404,map__14407,map__14407__$1,state,key,btn_txt,kids){
return (function ui$buttons$tap_buttons_$_iter__14409(s__14410){
return (new cljs.core.LazySeq(null,((function (vec__14404,map__14407,map__14407__$1,state,key,btn_txt,kids){
return (function (){
var s__14410__$1 = s__14410;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14410__$1);
if(temp__5457__auto__){
var s__14410__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14410__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14410__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14412 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14411 = (0);
while(true){
if((i__14411 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14411);
cljs.core.chunk_append(b__14412,ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__14413 = (i__14411 + (1));
i__14411 = G__14413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14412),ui$buttons$tap_buttons_$_iter__14409(cljs.core.chunk_rest(s__14410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14412),null);
}
} else {
var n = cljs.core.first(s__14410__$2);
return cljs.core.cons(ui.buttons.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),ui$buttons$tap_buttons_$_iter__14409(cljs.core.rest(s__14410__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14404,map__14407,map__14407__$1,state,key,btn_txt,kids))
,null,null));
});})(vec__14404,map__14407,map__14407__$1,state,key,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var ui$buttons$tap_buttons = function (var_args){
var args__13747__auto__ = null;
if (arguments.length > 0) {
var G__14414__i = 0, G__14414__a = new Array(arguments.length -  0);
while (G__14414__i < G__14414__a.length) {G__14414__a[G__14414__i] = arguments[G__14414__i + 0]; ++G__14414__i;}
  args__13747__auto__ = new cljs.core.IndexedSeq(G__14414__a,0,null);
} 
return ui$buttons$tap_buttons__delegate.call(this,args__13747__auto__);};
ui$buttons$tap_buttons.cljs$lang$maxFixedArity = 0;
ui$buttons$tap_buttons.cljs$lang$applyTo = (function (arglist__14415){
var args__13747__auto__ = cljs.core.seq(arglist__14415);
return ui$buttons$tap_buttons__delegate(args__13747__auto__);
});
ui$buttons$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tap_buttons__delegate;
return ui$buttons$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.nexts = (function() { 
var ui$buttons$nexts__delegate = function (args__13747__auto__){
var vec__14416 = hoplon.core.parse_args(args__13747__auto__);
var map__14419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416,(0),null);
var map__14419__$1 = ((((!((map__14419 == null)))?(((((map__14419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14419):map__14419);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14419__$1,cljs.core.cst$kw$next);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416,(1),null);
var G__14421 = cljs.core.cst$kw$class;
var G__14422 = "gain-loss";
var G__14423 = hoplon.core.loop_tpl_STAR_(next,((function (G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids){
return (function (item__13817__auto__){
var vec__14424 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__14427 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids){
return (function (it){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids))
);
return (fexpr__14427.cljs$core$IFn$_invoke$arity$1 ? fexpr__14427.cljs$core$IFn$_invoke$arity$1(item__13817__auto__) : fexpr__14427.call(null,item__13817__auto__));
})());
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424,(0),null);
var name = (function (){var fexpr__14430 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14424,it,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids){
return (function (G__14428,G__14429){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14428.cljs$core$IFn$_invoke$arity$1 ? G__14428.cljs$core$IFn$_invoke$arity$1(G__14429) : G__14428.call(null,G__14429)))].join('');
});})(vec__14424,it,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids))
);
return (fexpr__14430.cljs$core$IFn$_invoke$arity$2 ? fexpr__14430.cljs$core$IFn$_invoke$arity$2(cljs.core.key,it) : fexpr__14430.call(null,cljs.core.key,it));
})();
var val_bare = (function (){var fexpr__14433 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,vec__14424,it,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids){
return (function (G__14431,G__14432){
return (G__14431.cljs$core$IFn$_invoke$arity$1 ? G__14431.cljs$core$IFn$_invoke$arity$1(G__14432) : G__14431.call(null,G__14432));
});})(name,vec__14424,it,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids))
);
return (fexpr__14433.cljs$core$IFn$_invoke$arity$2 ? fexpr__14433.cljs$core$IFn$_invoke$arity$2(cljs.core.val,it) : fexpr__14433.call(null,cljs.core.val,it));
})();
var val = (function (){var fexpr__14439 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,val_bare,vec__14424,it,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids){
return (function (G__14436,G__14434,G__14435){
var G__14440 = "%.2f";
var G__14441 = (G__14435.cljs$core$IFn$_invoke$arity$1 ? G__14435.cljs$core$IFn$_invoke$arity$1(G__14436) : G__14435.call(null,G__14436));
return (G__14434.cljs$core$IFn$_invoke$arity$2 ? G__14434.cljs$core$IFn$_invoke$arity$2(G__14440,G__14441) : G__14434.call(null,G__14440,G__14441));
});})(name,val_bare,vec__14424,it,G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids))
);
return (fexpr__14439.cljs$core$IFn$_invoke$arity$3 ? fexpr__14439.cljs$core$IFn$_invoke$arity$3(val_bare,goog.string.format,Math.abs) : fexpr__14439.call(null,val_bare,goog.string.format,Math.abs));
})();
var G__14442 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14443 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(val) : hoplon.core.td.call(null,val));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__14442,G__14443) : hoplon.core.tr.call(null,G__14442,G__14443));
});})(G__14421,G__14422,vec__14416,map__14419,map__14419__$1,next,kids))
);
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14421,G__14422,G__14423) : hoplon.core.table.call(null,G__14421,G__14422,G__14423));
};
var ui$buttons$nexts = function (var_args){
var args__13747__auto__ = null;
if (arguments.length > 0) {
var G__14444__i = 0, G__14444__a = new Array(arguments.length -  0);
while (G__14444__i < G__14444__a.length) {G__14444__a[G__14444__i] = arguments[G__14444__i + 0]; ++G__14444__i;}
  args__13747__auto__ = new cljs.core.IndexedSeq(G__14444__a,0,null);
} 
return ui$buttons$nexts__delegate.call(this,args__13747__auto__);};
ui$buttons$nexts.cljs$lang$maxFixedArity = 0;
ui$buttons$nexts.cljs$lang$applyTo = (function (arglist__14445){
var args__13747__auto__ = cljs.core.seq(arglist__14445);
return ui$buttons$nexts__delegate(args__13747__auto__);
});
ui$buttons$nexts.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$nexts__delegate;
return ui$buttons$nexts;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.as_list = (function() { 
var ui$buttons$as_list__delegate = function (args__13747__auto__){
var vec__14446 = hoplon.core.parse_args(args__13747__auto__);
var map__14449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(0),null);
var map__14449__$1 = ((((!((map__14449 == null)))?(((((map__14449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14449):map__14449);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14449__$1,cljs.core.cst$kw$state);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14449__$1,cljs.core.cst$kw$group);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14449__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(1),null);
var iter__4324__auto__ = ((function (vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function ui$buttons$as_list_$_iter__14451(s__14452){
return (new cljs.core.LazySeq(null,((function (vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (){
var s__14452__$1 = s__14452;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14452__$1);
if(temp__5457__auto__){
var s__14452__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14452__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14452__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14454 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14453 = (0);
while(true){
if((i__14453 < size__4323__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14453);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14458 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14453,s__14452__$1,name,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14455,G__14457,G__14456){
return (G__14455.cljs$core$IFn$_invoke$arity$2 ? G__14455.cljs$core$IFn$_invoke$arity$2(G__14456,G__14457) : G__14455.call(null,G__14456,G__14457));
});})(i__14453,s__14452__$1,name,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14458.cljs$core$IFn$_invoke$arity$3 ? fexpr__14458.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14458.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__14462 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14453,s__14452__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14461,G__14459,G__14460){
return (G__14459.cljs$core$IFn$_invoke$arity$2 ? G__14459.cljs$core$IFn$_invoke$arity$2(G__14460,G__14461) : G__14459.call(null,G__14460,G__14461));
});})(i__14453,s__14452__$1,name,next_loss,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14462.cljs$core$IFn$_invoke$arity$3 ? fexpr__14462.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__14462.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__14466 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14453,s__14452__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14463,G__14465,G__14464){
return (G__14463.cljs$core$IFn$_invoke$arity$2 ? G__14463.cljs$core$IFn$_invoke$arity$2(G__14464,G__14465) : G__14463.call(null,G__14464,G__14465));
});})(i__14453,s__14452__$1,name,next_loss,next_gain,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14466.cljs$core$IFn$_invoke$arity$3 ? fexpr__14466.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14466.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14470 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14453,s__14452__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14467,G__14469,G__14468){
return (G__14467.cljs$core$IFn$_invoke$arity$2 ? G__14467.cljs$core$IFn$_invoke$arity$2(G__14468,G__14469) : G__14467.call(null,G__14468,G__14469));
});})(i__14453,s__14452__$1,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14470.cljs$core$IFn$_invoke$arity$3 ? fexpr__14470.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__14470.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
cljs.core.chunk_append(b__14454,(function (){var G__14471 = cljs.core.cst$kw$class;
var G__14472 = (function (){var fexpr__14481 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14453,s__14452__$1,G__14471,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14479,G__14480){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14479.cljs$core$IFn$_invoke$arity$2 ? G__14479.cljs$core$IFn$_invoke$arity$2(G__14480,(0)) : G__14479.call(null,G__14480,(0))),cljs.core.cst$kw$olditem,(G__14480 > (0))], null);
});})(i__14453,s__14452__$1,G__14471,name,next_loss,next_gain,count,dependencies,key,c__4322__auto__,size__4323__auto__,b__14454,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14481.cljs$core$IFn$_invoke$arity$2 ? fexpr__14481.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14481.call(null,cljs.core._EQ_,count));
})();
var G__14473 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14474 = (function (){var G__14482 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14482) : hoplon.core.td.call(null,G__14482));
})();
var G__14475 = (function (){var G__14483 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14483) : hoplon.core.td.call(null,G__14483));
})();
var G__14476 = (function (){var G__14484 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14484) : hoplon.core.td.call(null,G__14484));
})();
var G__14477 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14478 = (function (){var G__14485 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14485) : hoplon.core.td.call(null,G__14485));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__14471,G__14472,G__14473,G__14474,G__14475,G__14476,G__14477,G__14478) : hoplon.core.tr.call(null,G__14471,G__14472,G__14473,G__14474,G__14475,G__14476,G__14477,G__14478));
})());

var G__14517 = (i__14453 + (1));
i__14453 = G__14517;
continue;
} else {
var G__14518 = (i__14453 + (1));
i__14453 = G__14518;
continue;
}
} else {
var G__14519 = (i__14453 + (1));
i__14453 = G__14519;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14454),ui$buttons$as_list_$_iter__14451(cljs.core.chunk_rest(s__14452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14454),null);
}
} else {
var key = cljs.core.first(s__14452__$2);
var name = clicker.engine.db_item_name(key);
var next_loss = (function (){var fexpr__14489 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14452__$1,name,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14486,G__14488,G__14487){
return (G__14486.cljs$core$IFn$_invoke$arity$2 ? G__14486.cljs$core$IFn$_invoke$arity$2(G__14487,G__14488) : G__14486.call(null,G__14487,G__14488));
});})(s__14452__$1,name,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14489.cljs$core$IFn$_invoke$arity$3 ? fexpr__14489.cljs$core$IFn$_invoke$arity$3(clicker.engine.next_loss,key,state) : fexpr__14489.call(null,clicker.engine.next_loss,key,state));
})();
var next_gain = (function (){var fexpr__14493 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14452__$1,name,next_loss,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14492,G__14490,G__14491){
return (G__14490.cljs$core$IFn$_invoke$arity$2 ? G__14490.cljs$core$IFn$_invoke$arity$2(G__14491,G__14492) : G__14490.call(null,G__14491,G__14492));
});})(s__14452__$1,name,next_loss,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14493.cljs$core$IFn$_invoke$arity$3 ? fexpr__14493.cljs$core$IFn$_invoke$arity$3(key,clicker.engine.next_gain,state) : fexpr__14493.call(null,key,clicker.engine.next_gain,state));
})();
var count = (function (){var fexpr__14497 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14452__$1,name,next_loss,next_gain,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14494,G__14496,G__14495){
return (G__14494.cljs$core$IFn$_invoke$arity$2 ? G__14494.cljs$core$IFn$_invoke$arity$2(G__14495,G__14496) : G__14494.call(null,G__14495,G__14496));
});})(s__14452__$1,name,next_loss,next_gain,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14497.cljs$core$IFn$_invoke$arity$3 ? fexpr__14497.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,state) : fexpr__14497.call(null,clicker.engine.thing_count,key,state));
})();
var dependencies = clicker.engine.get_dependencies(state,key);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$genesis))){
if(cljs.core.truth_((function (){var fexpr__14501 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14452__$1,name,next_loss,next_gain,count,dependencies,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14498,G__14500,G__14499){
return (G__14498.cljs$core$IFn$_invoke$arity$2 ? G__14498.cljs$core$IFn$_invoke$arity$2(G__14499,G__14500) : G__14498.call(null,G__14499,G__14500));
});})(s__14452__$1,name,next_loss,next_gain,count,dependencies,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14501.cljs$core$IFn$_invoke$arity$3 ? fexpr__14501.cljs$core$IFn$_invoke$arity$3(clicker.engine.satisfies_dependencies_QMARK_,key,state) : fexpr__14501.call(null,clicker.engine.satisfies_dependencies_QMARK_,key,state));
})())){
return cljs.core.cons((function (){var G__14502 = cljs.core.cst$kw$class;
var G__14503 = (function (){var fexpr__14512 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (s__14452__$1,G__14502,name,next_loss,next_gain,count,dependencies,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids){
return (function (G__14510,G__14511){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14510.cljs$core$IFn$_invoke$arity$2 ? G__14510.cljs$core$IFn$_invoke$arity$2(G__14511,(0)) : G__14510.call(null,G__14511,(0))),cljs.core.cst$kw$olditem,(G__14511 > (0))], null);
});})(s__14452__$1,G__14502,name,next_loss,next_gain,count,dependencies,key,s__14452__$2,temp__5457__auto__,vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
);
return (fexpr__14512.cljs$core$IFn$_invoke$arity$2 ? fexpr__14512.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14512.call(null,cljs.core._EQ_,count));
})();
var G__14504 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14505 = (function (){var G__14513 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependencies)].join('');
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14513) : hoplon.core.td.call(null,G__14513));
})();
var G__14506 = (function (){var G__14514 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_loss], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14514) : hoplon.core.td.call(null,G__14514));
})();
var G__14507 = (function (){var G__14515 = ui.buttons.nexts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$next,next_gain], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14515) : hoplon.core.td.call(null,G__14515));
})();
var G__14508 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14509 = (function (){var G__14516 = ui.buttons.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$key,key,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14516) : hoplon.core.td.call(null,G__14516));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__14502,G__14503,G__14504,G__14505,G__14506,G__14507,G__14508,G__14509) : hoplon.core.tr.call(null,G__14502,G__14503,G__14504,G__14505,G__14506,G__14507,G__14508,G__14509));
})(),ui$buttons$as_list_$_iter__14451(cljs.core.rest(s__14452__$2)));
} else {
var G__14520 = cljs.core.rest(s__14452__$2);
s__14452__$1 = G__14520;
continue;
}
} else {
var G__14521 = cljs.core.rest(s__14452__$2);
s__14452__$1 = G__14521;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
,null,null));
});})(vec__14446,map__14449,map__14449__$1,state,group,btn_txt,kids))
;
return iter__4324__auto__(clicker.engine.db_items_by_group(group));
};
var ui$buttons$as_list = function (var_args){
var args__13747__auto__ = null;
if (arguments.length > 0) {
var G__14522__i = 0, G__14522__a = new Array(arguments.length -  0);
while (G__14522__i < G__14522__a.length) {G__14522__a[G__14522__i] = arguments[G__14522__i + 0]; ++G__14522__i;}
  args__13747__auto__ = new cljs.core.IndexedSeq(G__14522__a,0,null);
} 
return ui$buttons$as_list__delegate.call(this,args__13747__auto__);};
ui$buttons$as_list.cljs$lang$maxFixedArity = 0;
ui$buttons$as_list.cljs$lang$applyTo = (function (arglist__14523){
var args__13747__auto__ = cljs.core.seq(arglist__14523);
return ui$buttons$as_list__delegate(args__13747__auto__);
});
ui$buttons$as_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$as_list__delegate;
return ui$buttons$as_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.tool_list = (function() { 
var ui$buttons$tool_list__delegate = function (args__13747__auto__){
var vec__14524 = hoplon.core.parse_args(args__13747__auto__);
var map__14527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(0),null);
var map__14527__$1 = ((((!((map__14527 == null)))?(((((map__14527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14527):map__14527);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14527__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(1),null);
var G__14529 = cljs.core.cst$kw$class;
var G__14530 = "upgrade";
var G__14531 = (function (){var G__14532 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Buy tools") : hoplon.core.caption.call(null,"Buy tools"));
var G__14533 = (function (){var G__14535 = (function (){var G__14536 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14537 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__14538 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__14539 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__14540 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__14541 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__14536,G__14537,G__14538,G__14539,G__14540,G__14541) : hoplon.core.tr.call(null,G__14536,G__14537,G__14538,G__14539,G__14540,G__14541));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14535) : hoplon.core.thead.call(null,G__14535));
})();
var G__14534 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14532,G__14533,G__14534) : hoplon.core.table.call(null,G__14532,G__14533,G__14534));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14529,G__14530,G__14531) : hoplon.core.div.call(null,G__14529,G__14530,G__14531));
};
var ui$buttons$tool_list = function (var_args){
var args__13747__auto__ = null;
if (arguments.length > 0) {
var G__14542__i = 0, G__14542__a = new Array(arguments.length -  0);
while (G__14542__i < G__14542__a.length) {G__14542__a[G__14542__i] = arguments[G__14542__i + 0]; ++G__14542__i;}
  args__13747__auto__ = new cljs.core.IndexedSeq(G__14542__a,0,null);
} 
return ui$buttons$tool_list__delegate.call(this,args__13747__auto__);};
ui$buttons$tool_list.cljs$lang$maxFixedArity = 0;
ui$buttons$tool_list.cljs$lang$applyTo = (function (arglist__14543){
var args__13747__auto__ = cljs.core.seq(arglist__14543);
return ui$buttons$tool_list__delegate(args__13747__auto__);
});
ui$buttons$tool_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$tool_list__delegate;
return ui$buttons$tool_list;
})()
;
/**
 * @param {...*} var_args
 */
ui.buttons.product_list = (function() { 
var ui$buttons$product_list__delegate = function (args__13747__auto__){
var vec__14544 = hoplon.core.parse_args(args__13747__auto__);
var map__14547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14544,(0),null);
var map__14547__$1 = ((((!((map__14547 == null)))?(((((map__14547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14547):map__14547);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14547__$1,cljs.core.cst$kw$state);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14544,(1),null);
var G__14549 = cljs.core.cst$kw$class;
var G__14550 = "sell";
var G__14551 = (function (){var G__14552 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__14553 = (function (){var G__14555 = (function (){var G__14556 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14557 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Depends on") : hoplon.core.th.call(null,"Depends on"));
var G__14558 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__14559 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__14560 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__14561 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$6(G__14556,G__14557,G__14558,G__14559,G__14560,G__14561) : hoplon.core.tr.call(null,G__14556,G__14557,G__14558,G__14559,G__14560,G__14561));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14555) : hoplon.core.thead.call(null,G__14555));
})();
var G__14554 = ui.buttons.as_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,state,cljs.core.cst$kw$group,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14552,G__14553,G__14554) : hoplon.core.table.call(null,G__14552,G__14553,G__14554));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14549,G__14550,G__14551) : hoplon.core.div.call(null,G__14549,G__14550,G__14551));
};
var ui$buttons$product_list = function (var_args){
var args__13747__auto__ = null;
if (arguments.length > 0) {
var G__14562__i = 0, G__14562__a = new Array(arguments.length -  0);
while (G__14562__i < G__14562__a.length) {G__14562__a[G__14562__i] = arguments[G__14562__i + 0]; ++G__14562__i;}
  args__13747__auto__ = new cljs.core.IndexedSeq(G__14562__a,0,null);
} 
return ui$buttons$product_list__delegate.call(this,args__13747__auto__);};
ui$buttons$product_list.cljs$lang$maxFixedArity = 0;
ui$buttons$product_list.cljs$lang$applyTo = (function (arglist__14563){
var args__13747__auto__ = cljs.core.seq(arglist__14563);
return ui$buttons$product_list__delegate(args__13747__auto__);
});
ui$buttons$product_list.cljs$core$IFn$_invoke$arity$variadic = ui$buttons$product_list__delegate;
return ui$buttons$product_list;
})()
;
