// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.stateless');
goog.require('data.db');
clicker.engine.click = (function clicker$engine$click(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9480 = arguments.length;
var i__4532__auto___9481 = (0);
while(true){
if((i__4532__auto___9481 < len__4531__auto___9480)){
args__4534__auto__.push((arguments[i__4532__auto___9481]));

var G__9482 = (i__4532__auto___9481 + (1));
i__4532__auto___9481 = G__9482;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__9477){
var map__9478 = p__9477;
var map__9478__$1 = ((((!((map__9478 == null)))?(((((map__9478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9478):map__9478);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9478__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq9475){
var G__9476 = cljs.core.first(seq9475);
var seq9475__$1 = cljs.core.next(seq9475);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9476,seq9475__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9489 = arguments.length;
var i__4532__auto___9490 = (0);
while(true){
if((i__4532__auto___9490 < len__4531__auto___9489)){
args__4534__auto__.push((arguments[i__4532__auto___9490]));

var G__9491 = (i__4532__auto___9490 + (1));
i__4532__auto___9490 = G__9491;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing_name,p__9486){
var map__9487 = p__9486;
var map__9487__$1 = ((((!((map__9487 == null)))?(((((map__9487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9487):map__9487);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9487__$1,cljs.core.cst$kw$n,(1));
if(cljs.core.truth_(clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)))){
return cljs.core.reset_BANG_(state,clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)));
} else {
return state;
}
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq9483){
var G__9484 = cljs.core.first(seq9483);
var seq9483__$1 = cljs.core.next(seq9483);
var G__9485 = cljs.core.first(seq9483__$1);
var seq9483__$2 = cljs.core.next(seq9483__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9484,G__9485,seq9483__$2);
});

clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9498 = arguments.length;
var i__4532__auto___9499 = (0);
while(true){
if((i__4532__auto___9499 < len__4531__auto___9498)){
args__4534__auto__.push((arguments[i__4532__auto___9499]));

var G__9500 = (i__4532__auto___9499 + (1));
i__4532__auto___9499 = G__9500;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing_name,p__9495){
var map__9496 = p__9495;
var map__9496__$1 = ((((!((map__9496 == null)))?(((((map__9496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9496):map__9496);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9496__$1,cljs.core.cst$kw$n,(1));
if((state instanceof cljs.core.Atom)){
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
} else {
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,state,thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
}
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq9492){
var G__9493 = cljs.core.first(seq9492);
var seq9492__$1 = cljs.core.next(seq9492);
var G__9494 = cljs.core.first(seq9492__$1);
var seq9492__$2 = cljs.core.next(seq9492__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9493,G__9494,seq9492__$2);
});

clicker.engine.next_gain = (function clicker$engine$next_gain(state,thing_name){
if((state instanceof cljs.core.Atom)){
return clicker.stateless.next_gain(data.db.data,cljs.core.deref(state),thing_name);
} else {
return clicker.stateless.next_gain(data.db.data,state,thing_name);
}
});
clicker.engine.thing_count = (function clicker$engine$thing_count(state,thing_key){
if((state instanceof cljs.core.Atom)){
return clicker.stateless.thing_count(cljs.core.deref(state),thing_key);
} else {
return clicker.stateless.thing_count(state,thing_key);
}
});
