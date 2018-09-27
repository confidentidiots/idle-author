// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.stateless');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
goog.require('clojure.set');
goog.require('data.idb');
clicker.stateless.db_item_name = (function clicker$stateless$db_item_name(db,thing){
return data.idb.item_name(db,thing);
});
clicker.stateless.db_item_ticker = (function clicker$stateless$db_item_ticker(db,thing){
return data.idb.item_ticker(db,thing);
});
clicker.stateless.db_items_by_group = (function clicker$stateless$db_items_by_group(db,group){
return data.idb.item_group(db,group);
});
clicker.stateless.db_group_by_item = (function clicker$stateless$db_group_by_item(db,thing){
return data.idb.group_by_item(db,thing);
});
clicker.stateless.thing_count = (function clicker$stateless$thing_count(state,thing_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_key], null),(0));
});
clicker.stateless.future_quantities = (function clicker$stateless$future_quantities(state,thing,quantity){

var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),(0));
var spread = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((1) + quantity));
var future_spread = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_count,spread){
return (function (p1__6094_SHARP_){
return (current_count + p1__6094_SHARP_);
});})(current_count,spread))
,spread);
return future_spread;
});
clicker.stateless.apply_gain_or_loss = (function clicker$stateless$apply_gain_or_loss(k,v,state,db,thing,quantity,op,fun){

if(typeof v === 'number'){
var value = (quantity * v);
var value_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(value) : op.call(null,value)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(value_fn,(0)));
} else {
var quantities = clicker.stateless.future_quantities(state,thing,quantity);
var opposite = cljs.core.val(cljs.core.first((fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(db,thing) : fun.call(null,db,thing))));
var gain_fn = data.idb.item_function(db,v);
var value = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (quantities,opposite,gain_fn){
return (function (p1__6095_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__6095_SHARP_,opposite) : gain_fn.call(null,p1__6095_SHARP_,opposite));
});})(quantities,opposite,gain_fn))
,quantities));
var value_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(value) : op.call(null,value)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(value_fn,(0)));
}
});
clicker.stateless.apply_gain = (function clicker$stateless$apply_gain(k,v,state,db,thing,quantity){
return clicker.stateless.apply_gain_or_loss(k,v,state,db,thing,quantity,cljs.core._PLUS_,data.idb.item_loss);
});
clicker.stateless.apply_loss = (function clicker$stateless$apply_loss(k,v,state,db,thing,quantity){
return clicker.stateless.apply_gain_or_loss(k,v,state,db,thing,quantity,cljs.core._,data.idb.item_gain);
});
clicker.stateless.apply_gains_or_losses = (function clicker$stateless$apply_gains_or_losses(state,db,thing,gol_fn,apply_fn,quantity){

var it = (gol_fn.cljs$core$IFn$_invoke$arity$2 ? gol_fn.cljs$core$IFn$_invoke$arity$2(db,thing) : gol_fn.call(null,db,thing));
var states = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (it){
return (function (st,p__6096){
var vec__6097 = p__6096;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6097,(1),null);
return (apply_fn.cljs$core$IFn$_invoke$arity$6 ? apply_fn.cljs$core$IFn$_invoke$arity$6(k,v,st,db,thing,quantity) : apply_fn.call(null,k,v,st,db,thing,quantity));
});})(it))
,state,it);
return states;
});
clicker.stateless.apply_gains = (function clicker$stateless$apply_gains(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6107 = arguments.length;
var i__4532__auto___6108 = (0);
while(true){
if((i__4532__auto___6108 < len__4531__auto___6107)){
args__4534__auto__.push((arguments[i__4532__auto___6108]));

var G__6109 = (i__4532__auto___6108 + (1));
i__4532__auto___6108 = G__6109;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6104){
var map__6105 = p__6104;
var map__6105__$1 = ((((!((map__6105 == null)))?(((((map__6105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6105):map__6105);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6105__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gain,quantity);
});

clicker.stateless.apply_gains.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_gains.cljs$lang$applyTo = (function (seq6100){
var G__6101 = cljs.core.first(seq6100);
var seq6100__$1 = cljs.core.next(seq6100);
var G__6102 = cljs.core.first(seq6100__$1);
var seq6100__$2 = cljs.core.next(seq6100__$1);
var G__6103 = cljs.core.first(seq6100__$2);
var seq6100__$3 = cljs.core.next(seq6100__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6101,G__6102,G__6103,seq6100__$3);
});

clicker.stateless.apply_losses = (function clicker$stateless$apply_losses(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6117 = arguments.length;
var i__4532__auto___6118 = (0);
while(true){
if((i__4532__auto___6118 < len__4531__auto___6117)){
args__4534__auto__.push((arguments[i__4532__auto___6118]));

var G__6119 = (i__4532__auto___6118 + (1));
i__4532__auto___6118 = G__6119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6114){
var map__6115 = p__6114;
var map__6115__$1 = ((((!((map__6115 == null)))?(((((map__6115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6115):map__6115);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6115__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_loss,clicker.stateless.apply_loss,quantity);
});

clicker.stateless.apply_losses.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_losses.cljs$lang$applyTo = (function (seq6110){
var G__6111 = cljs.core.first(seq6110);
var seq6110__$1 = cljs.core.next(seq6110);
var G__6112 = cljs.core.first(seq6110__$1);
var seq6110__$2 = cljs.core.next(seq6110__$1);
var G__6113 = cljs.core.first(seq6110__$2);
var seq6110__$3 = cljs.core.next(seq6110__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6111,G__6112,G__6113,seq6110__$3);
});

clicker.stateless.set_latest_new_thing = (function clicker$stateless$set_latest_new_thing(state,thing){

if(cljs.core.truth_(cljs.core.some((function (p1__6120_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing,p1__6120_SHARP_);
}),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things], null)))))){
return state;
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latest_DASH_new_DASH_thing], null),thing);
}
});
clicker.stateless.get_latest_new_thing = (function clicker$stateless$get_latest_new_thing(state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$latest_DASH_new_DASH_thing], null));
});
clicker.stateless.get_latest_ticker = (function clicker$stateless$get_latest_ticker(state,db){
var latest = clicker.stateless.get_latest_new_thing(state);
var latest_as_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(latest);
return clicker.stateless.db_item_ticker(db,latest_as_kw);
});
clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6129 = arguments.length;
var i__4532__auto___6130 = (0);
while(true){
if((i__4532__auto___6130 < len__4531__auto___6129)){
args__4534__auto__.push((arguments[i__4532__auto___6130]));

var G__6131 = (i__4532__auto___6130 + (1));
i__4532__auto___6130 = G__6131;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6126){
var map__6127 = p__6126;
var map__6127__$1 = ((((!((map__6127 == null)))?(((((map__6127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6127):map__6127);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6127__$1,cljs.core.cst$kw$n,(1));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(clicker.stateless.set_latest_new_thing(clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic(clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),thing),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6127,map__6127__$1,n){
return (function (p1__6121_SHARP_){
return (p1__6121_SHARP_ + n);
});})(map__6127,map__6127__$1,n))
,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq6122){
var G__6123 = cljs.core.first(seq6122);
var seq6122__$1 = cljs.core.next(seq6122);
var G__6124 = cljs.core.first(seq6122__$1);
var seq6122__$2 = cljs.core.next(seq6122__$1);
var G__6125 = cljs.core.first(seq6122__$2);
var seq6122__$3 = cljs.core.next(seq6122__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6123,G__6124,G__6125,seq6122__$3);
});

clicker.stateless.next_gain_or_loss = (function clicker$stateless$next_gain_or_loss(state,db,thing,lookup_fn,apply_fn){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function clicker$stateless$next_gain_or_loss_$_iter__6132(s__6133){
return (new cljs.core.LazySeq(null,(function (){
var s__6133__$1 = s__6133;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__6133__$1);
if(temp__5457__auto__){
var s__6133__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6133__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__6133__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__6135 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__6134 = (0);
while(true){
if((i__6134 < size__4323__auto__)){
var gain_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__6134);
cljs.core.chunk_append(b__6135,(function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})());

var G__6136 = (i__6134 + (1));
i__6134 = G__6136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6135),clicker$stateless$next_gain_or_loss_$_iter__6132(cljs.core.chunk_rest(s__6133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6135),null);
}
} else {
var gain_key = cljs.core.first(s__6133__$2);
return cljs.core.cons((function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})(),clicker$stateless$next_gain_or_loss_$_iter__6132(cljs.core.rest(s__6133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,(lookup_fn.cljs$core$IFn$_invoke$arity$2 ? lookup_fn.cljs$core$IFn$_invoke$arity$2(db,thing) : lookup_fn.call(null,db,thing))));
})());
});
clicker.stateless.next_gain = (function clicker$stateless$next_gain(state,db,thing){

return clicker.stateless.next_gain_or_loss(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gains);
});
clicker.stateless.next_loss = (function clicker$stateless$next_loss(state,db,thing){

return clicker.stateless.next_gain_or_loss(state,db,thing,data.idb.item_loss,clicker.stateless.apply_losses);
});
/**
 * Arity-overloaded fn which returns the dependency(s) for a 'thing'
 *   or the root dependency if no thing is specified.
 */
clicker.stateless.get_dependencies = (function clicker$stateless$get_dependencies(var_args){
var G__6138 = arguments.length;
switch (G__6138) {
case 2:
return clicker.stateless.get_dependencies.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clicker.stateless.get_dependencies.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clicker.stateless.get_dependencies.cljs$core$IFn$_invoke$arity$2 = (function (state,db){
return cljs.core.cst$kw$genesis;
});

clicker.stateless.get_dependencies.cljs$core$IFn$_invoke$arity$3 = (function (state,db,thing){
return data.idb.item_dependency(db,thing);
});

clicker.stateless.get_dependencies.cljs$lang$maxFixedArity = 3;

clicker.stateless.satisfies_dependencies_QMARK_ = (function clicker$stateless$satisfies_dependencies_QMARK_(state,db,thing){
var thing_deps = data.idb.item_dependency(db,thing);
var has_deps = cljs.core.every_QMARK_(((function (thing_deps){
return (function (p1__6140_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,p1__6140_SHARP_], null));
});})(thing_deps))
,thing_deps);
return has_deps;
});
clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6148 = arguments.length;
var i__4532__auto___6149 = (0);
while(true){
if((i__4532__auto___6149 < len__4531__auto___6148)){
args__4534__auto__.push((arguments[i__4532__auto___6149]));

var G__6150 = (i__4532__auto___6149 + (1));
i__4532__auto___6149 = G__6150;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6145){
var map__6146 = p__6145;
var map__6146__$1 = ((((!((map__6146 == null)))?(((((map__6146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6146):map__6146);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6146__$1,cljs.core.cst$kw$n,(1));

var tapped = clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
var and__3938__auto__ = (cljs.core.some(cljs.core.neg_QMARK_,cljs.core.vals(cljs.core.cst$kw$values.cljs$core$IFn$_invoke$arity$1(tapped))) == null);
if(and__3938__auto__){
return clicker.stateless.satisfies_dependencies_QMARK_(state,db,thing);
} else {
return and__3938__auto__;
}
});

clicker.stateless.can_tap_QMARK_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq6141){
var G__6142 = cljs.core.first(seq6141);
var seq6141__$1 = cljs.core.next(seq6141);
var G__6143 = cljs.core.first(seq6141__$1);
var seq6141__$2 = cljs.core.next(seq6141__$1);
var G__6144 = cljs.core.first(seq6141__$2);
var seq6141__$3 = cljs.core.next(seq6141__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6142,G__6143,G__6144,seq6141__$3);
});

