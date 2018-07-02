// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clicker.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.stateless');
goog.require('data.db');
clicker.engine.click = (function clicker$engine$click(var_args){
var args__4521__auto__ = [];
var len__4518__auto___5580 = arguments.length;
var i__4519__auto___5581 = (0);
while(true){
if((i__4519__auto___5581 < len__4518__auto___5580)){
args__4521__auto__.push((arguments[i__4519__auto___5581]));

var G__5582 = (i__4519__auto___5581 + (1));
i__4519__auto___5581 = G__5582;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__5577){
var map__5578 = p__5577;
var map__5578__$1 = ((((!((map__5578 == null)))?(((((map__5578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5578):map__5578);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5578__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq5575){
var G__5576 = cljs.core.first(seq5575);
var seq5575__$1 = cljs.core.next(seq5575);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5576,seq5575__$1);
});

clicker.engine.tap = (function clicker$engine$tap(state,thing_name){
if(cljs.core.truth_(clicker.stateless.can_tap_QMARK_(data.db.data,cljs.core.deref(state),thing_name))){
return cljs.core.reset_BANG_(state,clicker.stateless.tap(data.db.data,cljs.core.deref(state),thing_name));
} else {
return state;
}
});
clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(state,thing_name){
if((state instanceof cljs.core.Atom)){
return clicker.stateless.can_tap_QMARK_(data.db.data,cljs.core.deref(state),thing_name);
} else {
return clicker.stateless.can_tap_QMARK_(data.db.data,state,thing_name);
}
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
