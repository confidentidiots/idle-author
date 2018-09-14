// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.stateless');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
goog.require('clojure.set');
goog.require('data.idb');
clicker.stateless.thing_count = (function clicker$stateless$thing_count(state,thing_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_key], null),(0));
});
clicker.stateless.future_quantities = (function clicker$stateless$future_quantities(state,thing,quantity){

var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),(0));
var spread = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((1) + quantity));
var future_spread = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_count,spread){
return (function (p1__5828_SHARP_){
return (current_count + p1__5828_SHARP_);
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
return (function (p1__5829_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__5829_SHARP_,opposite) : gain_fn.call(null,p1__5829_SHARP_,opposite));
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
return (function (st,p__5830){
var vec__5831 = p__5830;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5831,(1),null);
return (apply_fn.cljs$core$IFn$_invoke$arity$6 ? apply_fn.cljs$core$IFn$_invoke$arity$6(k,v,st,db,thing,quantity) : apply_fn.call(null,k,v,st,db,thing,quantity));
});})(it))
,state,it);
return states;
});
clicker.stateless.apply_gains = (function clicker$stateless$apply_gains(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5841 = arguments.length;
var i__4532__auto___5842 = (0);
while(true){
if((i__4532__auto___5842 < len__4531__auto___5841)){
args__4534__auto__.push((arguments[i__4532__auto___5842]));

var G__5843 = (i__4532__auto___5842 + (1));
i__4532__auto___5842 = G__5843;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__5838){
var map__5839 = p__5838;
var map__5839__$1 = ((((!((map__5839 == null)))?(((((map__5839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5839):map__5839);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5839__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gain,quantity);
});

clicker.stateless.apply_gains.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_gains.cljs$lang$applyTo = (function (seq5834){
var G__5835 = cljs.core.first(seq5834);
var seq5834__$1 = cljs.core.next(seq5834);
var G__5836 = cljs.core.first(seq5834__$1);
var seq5834__$2 = cljs.core.next(seq5834__$1);
var G__5837 = cljs.core.first(seq5834__$2);
var seq5834__$3 = cljs.core.next(seq5834__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5835,G__5836,G__5837,seq5834__$3);
});

clicker.stateless.apply_losses = (function clicker$stateless$apply_losses(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5851 = arguments.length;
var i__4532__auto___5852 = (0);
while(true){
if((i__4532__auto___5852 < len__4531__auto___5851)){
args__4534__auto__.push((arguments[i__4532__auto___5852]));

var G__5853 = (i__4532__auto___5852 + (1));
i__4532__auto___5852 = G__5853;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__5848){
var map__5849 = p__5848;
var map__5849__$1 = ((((!((map__5849 == null)))?(((((map__5849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5849):map__5849);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5849__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_loss,clicker.stateless.apply_loss,quantity);
});

clicker.stateless.apply_losses.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_losses.cljs$lang$applyTo = (function (seq5844){
var G__5845 = cljs.core.first(seq5844);
var seq5844__$1 = cljs.core.next(seq5844);
var G__5846 = cljs.core.first(seq5844__$1);
var seq5844__$2 = cljs.core.next(seq5844__$1);
var G__5847 = cljs.core.first(seq5844__$2);
var seq5844__$3 = cljs.core.next(seq5844__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5845,G__5846,G__5847,seq5844__$3);
});

clicker.stateless.set_latest_new_thing = (function clicker$stateless$set_latest_new_thing(state,thing){

if(cljs.core.truth_(cljs.core.some((function (p1__5854_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing,p1__5854_SHARP_);
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
return (clicker.stateless.db_item_ticker.cljs$core$IFn$_invoke$arity$2 ? clicker.stateless.db_item_ticker.cljs$core$IFn$_invoke$arity$2(db,latest) : clicker.stateless.db_item_ticker.call(null,db,latest));
});
clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5863 = arguments.length;
var i__4532__auto___5864 = (0);
while(true){
if((i__4532__auto___5864 < len__4531__auto___5863)){
args__4534__auto__.push((arguments[i__4532__auto___5864]));

var G__5865 = (i__4532__auto___5864 + (1));
i__4532__auto___5864 = G__5865;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__5860){
var map__5861 = p__5860;
var map__5861__$1 = ((((!((map__5861 == null)))?(((((map__5861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5861):map__5861);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5861__$1,cljs.core.cst$kw$n,(1));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(clicker.stateless.set_latest_new_thing(clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic(clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),thing),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__5861,map__5861__$1,n){
return (function (p1__5855_SHARP_){
return (p1__5855_SHARP_ + n);
});})(map__5861,map__5861__$1,n))
,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq5856){
var G__5857 = cljs.core.first(seq5856);
var seq5856__$1 = cljs.core.next(seq5856);
var G__5858 = cljs.core.first(seq5856__$1);
var seq5856__$2 = cljs.core.next(seq5856__$1);
var G__5859 = cljs.core.first(seq5856__$2);
var seq5856__$3 = cljs.core.next(seq5856__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5857,G__5858,G__5859,seq5856__$3);
});

clicker.stateless.next_gain_or_loss = (function clicker$stateless$next_gain_or_loss(state,db,thing,lookup_fn,apply_fn){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function clicker$stateless$next_gain_or_loss_$_iter__5866(s__5867){
return (new cljs.core.LazySeq(null,(function (){
var s__5867__$1 = s__5867;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5867__$1);
if(temp__5457__auto__){
var s__5867__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5867__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__5867__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__5869 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__5868 = (0);
while(true){
if((i__5868 < size__4323__auto__)){
var gain_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__5868);
cljs.core.chunk_append(b__5869,(function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})());

var G__5870 = (i__5868 + (1));
i__5868 = G__5870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5869),clicker$stateless$next_gain_or_loss_$_iter__5866(cljs.core.chunk_rest(s__5867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5869),null);
}
} else {
var gain_key = cljs.core.first(s__5867__$2);
return cljs.core.cons((function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})(),clicker$stateless$next_gain_or_loss_$_iter__5866(cljs.core.rest(s__5867__$2)));
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
var G__5872 = arguments.length;
switch (G__5872) {
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
return (function (p1__5874_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,p1__5874_SHARP_], null));
});})(thing_deps))
,thing_deps);
return has_deps;
});
clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5882 = arguments.length;
var i__4532__auto___5883 = (0);
while(true){
if((i__4532__auto___5883 < len__4531__auto___5882)){
args__4534__auto__.push((arguments[i__4532__auto___5883]));

var G__5884 = (i__4532__auto___5883 + (1));
i__4532__auto___5883 = G__5884;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__5879){
var map__5880 = p__5879;
var map__5880__$1 = ((((!((map__5880 == null)))?(((((map__5880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5880):map__5880);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5880__$1,cljs.core.cst$kw$n,(1));

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
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq5875){
var G__5876 = cljs.core.first(seq5875);
var seq5875__$1 = cljs.core.next(seq5875);
var G__5877 = cljs.core.first(seq5875__$1);
var seq5875__$2 = cljs.core.next(seq5875__$1);
var G__5878 = cljs.core.first(seq5875__$2);
var seq5875__$3 = cljs.core.next(seq5875__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5876,G__5877,G__5878,seq5875__$3);
});

clicker.stateless.db_item_name = (function clicker$stateless$db_item_name(db,thing){
return data.idb.item_name(db,thing);
});
clicker.stateless.db_item_ticker = (function clicker$stateless$db_item_ticker(db,thing){
return data.idb.item_ticker(db,thing);
});
clicker.stateless.db_items_by_group = (function clicker$stateless$db_items_by_group(db,group){
return data.idb.item_group(db,group);
});
