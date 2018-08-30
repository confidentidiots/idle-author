// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.stateless');
goog.require('clicker.util');
goog.require('data.db');
goog.require('data.idb');
goog.require('javelin.core');
clicker.engine.db = (new data.db.DB(null,null,null));
clicker.engine.get_state = (function clicker$engine$get_state(state){
if((((state instanceof cljs.core.Atom)) || ((state instanceof javelin.core.Cell)))){
return cljs.core.deref(state);
} else {
return state;
}
});
clicker.engine.click = (function clicker$engine$click(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6238 = arguments.length;
var i__4532__auto___6239 = (0);
while(true){
if((i__4532__auto___6239 < len__4531__auto___6238)){
args__4534__auto__.push((arguments[i__4532__auto___6239]));

var G__6240 = (i__4532__auto___6239 + (1));
i__4532__auto___6239 = G__6240;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__6235){
var map__6236 = p__6235;
var map__6236__$1 = ((((!((map__6236 == null)))?(((((map__6236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6236):map__6236);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6236__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq6233){
var G__6234 = cljs.core.first(seq6233);
var seq6233__$1 = cljs.core.next(seq6233);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6234,seq6233__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6247 = arguments.length;
var i__4532__auto___6248 = (0);
while(true){
if((i__4532__auto___6248 < len__4531__auto___6247)){
args__4534__auto__.push((arguments[i__4532__auto___6248]));

var G__6249 = (i__4532__auto___6248 + (1));
i__4532__auto___6248 = G__6249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state_STAR_,thing,p__6244){
var map__6245 = p__6244;
var map__6245__$1 = ((((!((map__6245 == null)))?(((((map__6245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6245):map__6245);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6245__$1,cljs.core.cst$kw$n,(1));
var state = clicker.engine.get_state(state_STAR_);
return cljs.core.reset_BANG_(state_STAR_,clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)));
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq6241){
var G__6242 = cljs.core.first(seq6241);
var seq6241__$1 = cljs.core.next(seq6241);
var G__6243 = cljs.core.first(seq6241__$1);
var seq6241__$2 = cljs.core.next(seq6241__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6242,G__6243,seq6241__$2);
});

clicker.engine.thing_count = (function clicker$engine$thing_count(state,thing){
return clicker.stateless.thing_count(clicker.engine.get_state(state),thing);
});
clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6256 = arguments.length;
var i__4532__auto___6257 = (0);
while(true){
if((i__4532__auto___6257 < len__4531__auto___6256)){
args__4534__auto__.push((arguments[i__4532__auto___6257]));

var G__6258 = (i__4532__auto___6257 + (1));
i__4532__auto___6257 = G__6258;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing,p__6253){
var map__6254 = p__6253;
var map__6254__$1 = ((((!((map__6254 == null)))?(((((map__6254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6254):map__6254);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6254__$1,cljs.core.cst$kw$n,(1));
var can_tap = clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(clicker.engine.get_state(state),clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
return can_tap;
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq6250){
var G__6251 = cljs.core.first(seq6250);
var seq6250__$1 = cljs.core.next(seq6250);
var G__6252 = cljs.core.first(seq6250__$1);
var seq6250__$2 = cljs.core.next(seq6250__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6251,G__6252,seq6250__$2);
});

clicker.engine.next_gain = (function clicker$engine$next_gain(state,thing){
return clicker.stateless.next_gain(clicker.engine.get_state(state),clicker.engine.db,thing);
});
clicker.engine.next_loss = (function clicker$engine$next_loss(state,thing){
return clicker.stateless.next_loss(clicker.engine.get_state(state),clicker.engine.db,thing);
});
clicker.engine.satisfies_dependencies_QMARK_ = (function clicker$engine$satisfies_dependencies_QMARK_(state,thing){
return clicker.stateless.satisfies_dependencies_QMARK_(clicker.engine.get_state(state),clicker.engine.db,thing);
});
clicker.engine.has_started_QMARK_ = (function clicker$engine$has_started_QMARK_(state){
return !((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,cljs.core.cst$kw$genesis], null)) == null));
});
clicker.engine.get_dependencies = (function clicker$engine$get_dependencies(state,thing){
return clicker.stateless.get_dependencies(clicker.engine.get_state(state),clicker.engine.db,thing);
});
clicker.engine.db_item_name = (function clicker$engine$db_item_name(thing){
return clicker.stateless.db_item_name(clicker.engine.db,thing);
});
clicker.engine.db_items_by_group = (function clicker$engine$db_items_by_group(group){
return clicker.stateless.db_items_by_group(clicker.engine.db,group);
});
