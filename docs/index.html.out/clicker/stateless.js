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
return (function (p1__9643_SHARP_){
return (current_count + p1__9643_SHARP_);
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
return (function (p1__9644_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__9644_SHARP_,opposite) : gain_fn.call(null,p1__9644_SHARP_,opposite));
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
return (function (st,p__9645){
var vec__9646 = p__9645;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9646,(1),null);
return (apply_fn.cljs$core$IFn$_invoke$arity$6 ? apply_fn.cljs$core$IFn$_invoke$arity$6(k,v,st,db,thing,quantity) : apply_fn.call(null,k,v,st,db,thing,quantity));
});})(it))
,state,it);
return states;
});
clicker.stateless.apply_gains = (function clicker$stateless$apply_gains(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9656 = arguments.length;
var i__4532__auto___9657 = (0);
while(true){
if((i__4532__auto___9657 < len__4531__auto___9656)){
args__4534__auto__.push((arguments[i__4532__auto___9657]));

var G__9658 = (i__4532__auto___9657 + (1));
i__4532__auto___9657 = G__9658;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9653){
var map__9654 = p__9653;
var map__9654__$1 = ((((!((map__9654 == null)))?(((((map__9654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9654):map__9654);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9654__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gain,quantity);
});

clicker.stateless.apply_gains.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_gains.cljs$lang$applyTo = (function (seq9649){
var G__9650 = cljs.core.first(seq9649);
var seq9649__$1 = cljs.core.next(seq9649);
var G__9651 = cljs.core.first(seq9649__$1);
var seq9649__$2 = cljs.core.next(seq9649__$1);
var G__9652 = cljs.core.first(seq9649__$2);
var seq9649__$3 = cljs.core.next(seq9649__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9650,G__9651,G__9652,seq9649__$3);
});

clicker.stateless.apply_losses = (function clicker$stateless$apply_losses(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9666 = arguments.length;
var i__4532__auto___9667 = (0);
while(true){
if((i__4532__auto___9667 < len__4531__auto___9666)){
args__4534__auto__.push((arguments[i__4532__auto___9667]));

var G__9668 = (i__4532__auto___9667 + (1));
i__4532__auto___9667 = G__9668;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9663){
var map__9664 = p__9663;
var map__9664__$1 = ((((!((map__9664 == null)))?(((((map__9664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9664):map__9664);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9664__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_loss,clicker.stateless.apply_loss,quantity);
});

clicker.stateless.apply_losses.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_losses.cljs$lang$applyTo = (function (seq9659){
var G__9660 = cljs.core.first(seq9659);
var seq9659__$1 = cljs.core.next(seq9659);
var G__9661 = cljs.core.first(seq9659__$1);
var seq9659__$2 = cljs.core.next(seq9659__$1);
var G__9662 = cljs.core.first(seq9659__$2);
var seq9659__$3 = cljs.core.next(seq9659__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9660,G__9661,G__9662,seq9659__$3);
});

clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9677 = arguments.length;
var i__4532__auto___9678 = (0);
while(true){
if((i__4532__auto___9678 < len__4531__auto___9677)){
args__4534__auto__.push((arguments[i__4532__auto___9678]));

var G__9679 = (i__4532__auto___9678 + (1));
i__4532__auto___9678 = G__9679;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9674){
var map__9675 = p__9674;
var map__9675__$1 = ((((!((map__9675 == null)))?(((((map__9675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9675):map__9675);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9675__$1,cljs.core.cst$kw$n,(1));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic(clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9675,map__9675__$1,n){
return (function (p1__9669_SHARP_){
return (p1__9669_SHARP_ + n);
});})(map__9675,map__9675__$1,n))
,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq9670){
var G__9671 = cljs.core.first(seq9670);
var seq9670__$1 = cljs.core.next(seq9670);
var G__9672 = cljs.core.first(seq9670__$1);
var seq9670__$2 = cljs.core.next(seq9670__$1);
var G__9673 = cljs.core.first(seq9670__$2);
var seq9670__$3 = cljs.core.next(seq9670__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9671,G__9672,G__9673,seq9670__$3);
});

clicker.stateless.next_gain_or_loss = (function clicker$stateless$next_gain_or_loss(state,db,thing,lookup_fn,apply_fn){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function clicker$stateless$next_gain_or_loss_$_iter__9680(s__9681){
return (new cljs.core.LazySeq(null,(function (){
var s__9681__$1 = s__9681;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9681__$1);
if(temp__5457__auto__){
var s__9681__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9681__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9681__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9683 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9682 = (0);
while(true){
if((i__9682 < size__4323__auto__)){
var gain_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9682);
cljs.core.chunk_append(b__9683,(function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})());

var G__9684 = (i__9682 + (1));
i__9682 = G__9684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9683),clicker$stateless$next_gain_or_loss_$_iter__9680(cljs.core.chunk_rest(s__9681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9683),null);
}
} else {
var gain_key = cljs.core.first(s__9681__$2);
return cljs.core.cons((function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})(),clicker$stateless$next_gain_or_loss_$_iter__9680(cljs.core.rest(s__9681__$2)));
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
clicker.stateless.has_dependency_QMARK_ = (function clicker$stateless$has_dependency_QMARK_(state,db,thing){
var thing_deps = data.idb.item_dependency(db,thing);
var has_deps = cljs.core.every_QMARK_(((function (thing_deps){
return (function (p1__9685_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,p1__9685_SHARP_], null));
});})(thing_deps))
,thing_deps);
return has_deps;
});
clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9693 = arguments.length;
var i__4532__auto___9694 = (0);
while(true){
if((i__4532__auto___9694 < len__4531__auto___9693)){
args__4534__auto__.push((arguments[i__4532__auto___9694]));

var G__9695 = (i__4532__auto___9694 + (1));
i__4532__auto___9694 = G__9695;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__9690){
var map__9691 = p__9690;
var map__9691__$1 = ((((!((map__9691 == null)))?(((((map__9691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9691):map__9691);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9691__$1,cljs.core.cst$kw$n,(1));

var tapped = clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
var and__3938__auto__ = (cljs.core.some(cljs.core.neg_QMARK_,cljs.core.vals(cljs.core.cst$kw$values.cljs$core$IFn$_invoke$arity$1(tapped))) == null);
if(and__3938__auto__){
return clicker.stateless.has_dependency_QMARK_(state,db,thing);
} else {
return and__3938__auto__;
}
});

clicker.stateless.can_tap_QMARK_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq9686){
var G__9687 = cljs.core.first(seq9686);
var seq9686__$1 = cljs.core.next(seq9686);
var G__9688 = cljs.core.first(seq9686__$1);
var seq9686__$2 = cljs.core.next(seq9686__$1);
var G__9689 = cljs.core.first(seq9686__$2);
var seq9686__$3 = cljs.core.next(seq9686__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9687,G__9688,G__9689,seq9686__$3);
});

clicker.stateless.db_item_name = (function clicker$stateless$db_item_name(db,thing){
return data.idb.item_name(db,thing);
});
clicker.stateless.db_items_by_group = (function clicker$stateless$db_items_by_group(db,group){
return data.idb.item_group(db,group);
});
