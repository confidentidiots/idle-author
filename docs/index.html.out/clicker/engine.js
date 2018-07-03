// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clicker.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.stateless');
goog.require('data.db');
clicker.engine.click = (function clicker$engine$click(var_args){
var args__4521__auto__ = [];
var len__4518__auto___5601 = arguments.length;
var i__4519__auto___5602 = (0);
while(true){
if((i__4519__auto___5602 < len__4518__auto___5601)){
args__4521__auto__.push((arguments[i__4519__auto___5602]));

var G__5603 = (i__4519__auto___5602 + (1));
i__4519__auto___5602 = G__5603;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__5598){
var map__5599 = p__5598;
var map__5599__$1 = ((((!((map__5599 == null)))?(((((map__5599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5599):map__5599);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5599__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq5596){
var G__5597 = cljs.core.first(seq5596);
var seq5596__$1 = cljs.core.next(seq5596);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5597,seq5596__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4521__auto__ = [];
var len__4518__auto___5610 = arguments.length;
var i__4519__auto___5611 = (0);
while(true){
if((i__4519__auto___5611 < len__4518__auto___5610)){
args__4521__auto__.push((arguments[i__4519__auto___5611]));

var G__5612 = (i__4519__auto___5611 + (1));
i__4519__auto___5611 = G__5612;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing_name,p__5607){
var map__5608 = p__5607;
var map__5608__$1 = ((((!((map__5608 == null)))?(((((map__5608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5608):map__5608);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5608__$1,cljs.core.cst$kw$n,(1));
if(cljs.core.truth_(clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)))){
return cljs.core.reset_BANG_(state,clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)));
} else {
return state;
}
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq5604){
var G__5605 = cljs.core.first(seq5604);
var seq5604__$1 = cljs.core.next(seq5604);
var G__5606 = cljs.core.first(seq5604__$1);
var seq5604__$2 = cljs.core.next(seq5604__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5605,G__5606,seq5604__$2);
});

clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4521__auto__ = [];
var len__4518__auto___5619 = arguments.length;
var i__4519__auto___5620 = (0);
while(true){
if((i__4519__auto___5620 < len__4518__auto___5619)){
args__4521__auto__.push((arguments[i__4519__auto___5620]));

var G__5621 = (i__4519__auto___5620 + (1));
i__4519__auto___5620 = G__5621;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing_name,p__5616){
var map__5617 = p__5616;
var map__5617__$1 = ((((!((map__5617 == null)))?(((((map__5617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5617):map__5617);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5617__$1,cljs.core.cst$kw$n,(1));
if((state instanceof cljs.core.Atom)){
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,cljs.core.deref(state),thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
} else {
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(data.db.data,state,thing_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
}
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq5613){
var G__5614 = cljs.core.first(seq5613);
var seq5613__$1 = cljs.core.next(seq5613);
var G__5615 = cljs.core.first(seq5613__$1);
var seq5613__$2 = cljs.core.next(seq5613__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5614,G__5615,seq5613__$2);
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
