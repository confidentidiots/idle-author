// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.stateless');
goog.require('data.db');
clicker.engine.click = (function clicker$engine$click(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9477 = arguments.length;
var i__4532__auto___9478 = (0);
while(true){
if((i__4532__auto___9478 < len__4531__auto___9477)){
args__4534__auto__.push((arguments[i__4532__auto___9478]));

var G__9479 = (i__4532__auto___9478 + (1));
i__4532__auto___9478 = G__9479;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__9474){
var map__9475 = p__9474;
var map__9475__$1 = ((((!((map__9475 == null)))?(((((map__9475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9475):map__9475);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9475__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq9472){
var G__9473 = cljs.core.first(seq9472);
var seq9472__$1 = cljs.core.next(seq9472);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9473,seq9472__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9486 = arguments.length;
var i__4532__auto___9487 = (0);
while(true){
if((i__4532__auto___9487 < len__4531__auto___9486)){
args__4534__auto__.push((arguments[i__4532__auto___9487]));

var G__9488 = (i__4532__auto___9487 + (1));
i__4532__auto___9487 = G__9488;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing_name,p__9483){
var map__9484 = p__9483;
var map__9484__$1 = ((((!((map__9484 == null)))?(((((map__9484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9484):map__9484);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9484__$1,cljs.core.cst$kw$n,(1));
if(cljs.core.truth_(clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)))){
return cljs.core.reset_BANG_(state,clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)));
} else {
return state;
}
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq9480){
var G__9481 = cljs.core.first(seq9480);
var seq9480__$1 = cljs.core.next(seq9480);
var G__9482 = cljs.core.first(seq9480__$1);
var seq9480__$2 = cljs.core.next(seq9480__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9481,G__9482,seq9480__$2);
});

clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9495 = arguments.length;
var i__4532__auto___9496 = (0);
while(true){
if((i__4532__auto___9496 < len__4531__auto___9495)){
args__4534__auto__.push((arguments[i__4532__auto___9496]));

var G__9497 = (i__4532__auto___9496 + (1));
i__4532__auto___9496 = G__9497;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing_name,p__9492){
var map__9493 = p__9492;
var map__9493__$1 = ((((!((map__9493 == null)))?(((((map__9493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9493):map__9493);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9493__$1,cljs.core.cst$kw$n,(1));
if((state instanceof cljs.core.Atom)){
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
} else {
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,state,thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
}
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq9489){
var G__9490 = cljs.core.first(seq9489);
var seq9489__$1 = cljs.core.next(seq9489);
var G__9491 = cljs.core.first(seq9489__$1);
var seq9489__$2 = cljs.core.next(seq9489__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9490,G__9491,seq9489__$2);
});

clicker.engine.next_gain = (function clicker$engine$next_gain(state,thing_name){
if((state instanceof cljs.core.Atom)){
return clicker.stateless.next_gain(data.db.data,cljs.core.deref(state),thing_name);
} else {
return clicker.stateless.next_gain(data.db.data,state,thing_name);
}
});
clicker.engine.thing_count = (function clicker$engine$thing_count(state,thing_name){
if((state instanceof cljs.core.Atom)){
return clicker.stateless.thing_count(cljs.core.deref(state),thing_name);
} else {
return clicker.stateless.thing_count(state,thing_name);
}
});
