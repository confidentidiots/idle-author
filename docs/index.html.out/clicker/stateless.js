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
return (function (p1__9593_SHARP_){
return (current_count + p1__9593_SHARP_);
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
return (function (p1__9594_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__9594_SHARP_,opposite) : gain_fn.call(null,p1__9594_SHARP_,opposite));
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
return (function (st,p__9595){
var vec__9596 = p__9595;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9596,(1),null);
return (apply_fn.cljs$core$IFn$_invoke$arity$6 ? apply_fn.cljs$core$IFn$_invoke$arity$6(k,v,st,db,thing,quantity) : apply_fn.call(null,k,v,st,db,thing,quantity));
});})(it))
,state,it);
return states;
});
clicker.stateless.apply_gains = (function clicker$stateless$apply_gains(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9606 = arguments.length;
var i__4532__auto___9607 = (0);
while(true){
if((i__4532__auto___9607 < len__4531__auto___9606)){
args__4534__auto__.push((arguments[i__4532__auto___9607]));

var G__9608 = (i__4532__auto___9607 + (1));
i__4532__auto___9607 = G__9608;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9603){
var map__9604 = p__9603;
var map__9604__$1 = ((((!((map__9604 == null)))?(((((map__9604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9604):map__9604);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9604__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gain,quantity);
});

clicker.stateless.apply_gains.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_gains.cljs$lang$applyTo = (function (seq9599){
var G__9600 = cljs.core.first(seq9599);
var seq9599__$1 = cljs.core.next(seq9599);
var G__9601 = cljs.core.first(seq9599__$1);
var seq9599__$2 = cljs.core.next(seq9599__$1);
var G__9602 = cljs.core.first(seq9599__$2);
var seq9599__$3 = cljs.core.next(seq9599__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9600,G__9601,G__9602,seq9599__$3);
});

clicker.stateless.apply_losses = (function clicker$stateless$apply_losses(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9616 = arguments.length;
var i__4532__auto___9617 = (0);
while(true){
if((i__4532__auto___9617 < len__4531__auto___9616)){
args__4534__auto__.push((arguments[i__4532__auto___9617]));

var G__9618 = (i__4532__auto___9617 + (1));
i__4532__auto___9617 = G__9618;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9613){
var map__9614 = p__9613;
var map__9614__$1 = ((((!((map__9614 == null)))?(((((map__9614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9614):map__9614);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9614__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_loss,clicker.stateless.apply_loss,quantity);
});

clicker.stateless.apply_losses.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_losses.cljs$lang$applyTo = (function (seq9609){
var G__9610 = cljs.core.first(seq9609);
var seq9609__$1 = cljs.core.next(seq9609);
var G__9611 = cljs.core.first(seq9609__$1);
var seq9609__$2 = cljs.core.next(seq9609__$1);
var G__9612 = cljs.core.first(seq9609__$2);
var seq9609__$3 = cljs.core.next(seq9609__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9610,G__9611,G__9612,seq9609__$3);
});

clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9627 = arguments.length;
var i__4532__auto___9628 = (0);
while(true){
if((i__4532__auto___9628 < len__4531__auto___9627)){
args__4534__auto__.push((arguments[i__4532__auto___9628]));

var G__9629 = (i__4532__auto___9628 + (1));
i__4532__auto___9628 = G__9629;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9624){
var map__9625 = p__9624;
var map__9625__$1 = ((((!((map__9625 == null)))?(((((map__9625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9625):map__9625);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9625__$1,cljs.core.cst$kw$n,(1));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic(clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9625,map__9625__$1,n){
return (function (p1__9619_SHARP_){
return (p1__9619_SHARP_ + n);
});})(map__9625,map__9625__$1,n))
,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq9620){
var G__9621 = cljs.core.first(seq9620);
var seq9620__$1 = cljs.core.next(seq9620);
var G__9622 = cljs.core.first(seq9620__$1);
var seq9620__$2 = cljs.core.next(seq9620__$1);
var G__9623 = cljs.core.first(seq9620__$2);
var seq9620__$3 = cljs.core.next(seq9620__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9621,G__9622,G__9623,seq9620__$3);
});

clicker.stateless.next_gain_or_loss = (function clicker$stateless$next_gain_or_loss(state,db,thing,lookup_fn,apply_fn){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function clicker$stateless$next_gain_or_loss_$_iter__9630(s__9631){
return (new cljs.core.LazySeq(null,(function (){
var s__9631__$1 = s__9631;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9631__$1);
if(temp__5457__auto__){
var s__9631__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9631__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9631__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9633 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9632 = (0);
while(true){
if((i__9632 < size__4323__auto__)){
var gain_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9632);
cljs.core.chunk_append(b__9633,(function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})());

var G__9634 = (i__9632 + (1));
i__9632 = G__9634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9633),clicker$stateless$next_gain_or_loss_$_iter__9630(cljs.core.chunk_rest(s__9631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9633),null);
}
} else {
var gain_key = cljs.core.first(s__9631__$2);
return cljs.core.cons((function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})(),clicker$stateless$next_gain_or_loss_$_iter__9630(cljs.core.rest(s__9631__$2)));
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
clicker.stateless.get_dependencies = (function clicker$stateless$get_dependencies(state,db,thing){
return data.idb.item_dependency(db,thing);
});
clicker.stateless.satisfies_dependencies_QMARK_ = (function clicker$stateless$satisfies_dependencies_QMARK_(state,db,thing){
var thing_deps = data.idb.item_dependency(db,thing);
var has_deps = cljs.core.every_QMARK_(((function (thing_deps){
return (function (p1__9635_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,p1__9635_SHARP_], null));
});})(thing_deps))
,thing_deps);
return has_deps;
});
clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9643 = arguments.length;
var i__4532__auto___9644 = (0);
while(true){
if((i__4532__auto___9644 < len__4531__auto___9643)){
args__4534__auto__.push((arguments[i__4532__auto___9644]));

var G__9645 = (i__4532__auto___9644 + (1));
i__4532__auto___9644 = G__9645;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9640){
var map__9641 = p__9640;
var map__9641__$1 = ((((!((map__9641 == null)))?(((((map__9641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9641):map__9641);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9641__$1,cljs.core.cst$kw$n,(1));

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
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq9636){
var G__9637 = cljs.core.first(seq9636);
var seq9636__$1 = cljs.core.next(seq9636);
var G__9638 = cljs.core.first(seq9636__$1);
var seq9636__$2 = cljs.core.next(seq9636__$1);
var G__9639 = cljs.core.first(seq9636__$2);
var seq9636__$3 = cljs.core.next(seq9636__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9637,G__9638,G__9639,seq9636__$3);
});

clicker.stateless.db_item_name = (function clicker$stateless$db_item_name(db,thing){
return data.idb.item_name(db,thing);
});
clicker.stateless.db_items_by_group = (function clicker$stateless$db_items_by_group(db,group){
return data.idb.item_group(db,group);
});
