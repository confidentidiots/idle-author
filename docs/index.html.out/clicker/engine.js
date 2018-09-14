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
var len__4531__auto___5892 = arguments.length;
var i__4532__auto___5893 = (0);
while(true){
if((i__4532__auto___5893 < len__4531__auto___5892)){
args__4534__auto__.push((arguments[i__4532__auto___5893]));

var G__5894 = (i__4532__auto___5893 + (1));
i__4532__auto___5893 = G__5894;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__5889){
var map__5890 = p__5889;
var map__5890__$1 = ((((!((map__5890 == null)))?(((((map__5890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5890):map__5890);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5890__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq5887){
var G__5888 = cljs.core.first(seq5887);
var seq5887__$1 = cljs.core.next(seq5887);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5888,seq5887__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5901 = arguments.length;
var i__4532__auto___5902 = (0);
while(true){
if((i__4532__auto___5902 < len__4531__auto___5901)){
args__4534__auto__.push((arguments[i__4532__auto___5902]));

var G__5903 = (i__4532__auto___5902 + (1));
i__4532__auto___5902 = G__5903;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state_STAR_,thing,p__5898){
var map__5899 = p__5898;
var map__5899__$1 = ((((!((map__5899 == null)))?(((((map__5899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5899):map__5899);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5899__$1,cljs.core.cst$kw$n,(1));
var state = clicker.engine.get_state(state_STAR_);
var ticker = clicker.stateless.db_item_ticker(clicker.engine.db,thing);
var updated = clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
return cljs.core.reset_BANG_(state_STAR_,updated);
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq5895){
var G__5896 = cljs.core.first(seq5895);
var seq5895__$1 = cljs.core.next(seq5895);
var G__5897 = cljs.core.first(seq5895__$1);
var seq5895__$2 = cljs.core.next(seq5895__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5896,G__5897,seq5895__$2);
});

clicker.engine.thing_count = (function clicker$engine$thing_count(state,thing){
return clicker.stateless.thing_count(clicker.engine.get_state(state),thing);
});
clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5910 = arguments.length;
var i__4532__auto___5911 = (0);
while(true){
if((i__4532__auto___5911 < len__4531__auto___5910)){
args__4534__auto__.push((arguments[i__4532__auto___5911]));

var G__5912 = (i__4532__auto___5911 + (1));
i__4532__auto___5911 = G__5912;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing,p__5907){
var map__5908 = p__5907;
var map__5908__$1 = ((((!((map__5908 == null)))?(((((map__5908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5908):map__5908);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5908__$1,cljs.core.cst$kw$n,(1));
var can_tap = clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(clicker.engine.get_state(state),clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
return can_tap;
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq5904){
var G__5905 = cljs.core.first(seq5904);
var seq5904__$1 = cljs.core.next(seq5904);
var G__5906 = cljs.core.first(seq5904__$1);
var seq5904__$2 = cljs.core.next(seq5904__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5905,G__5906,seq5904__$2);
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
clicker.engine.get_dependencies = (function clicker$engine$get_dependencies(var_args){
var G__5914 = arguments.length;
switch (G__5914) {
case 1:
return clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$1 = (function (state){
return clicker.stateless.get_dependencies.cljs$core$IFn$_invoke$arity$2(clicker.engine.get_state(state),clicker.engine.db);
});

clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$2 = (function (state,thing){
return clicker.stateless.get_dependencies.cljs$core$IFn$_invoke$arity$3(clicker.engine.get_state(state),clicker.engine.db,thing);
});

clicker.engine.get_dependencies.cljs$lang$maxFixedArity = 2;

clicker.engine.start = (function clicker$engine$start(state){
return clicker.engine.tap(state,clicker.engine.get_dependencies.cljs$core$IFn$_invoke$arity$1(state));
});
clicker.engine.get_latest_new_thing = (function clicker$engine$get_latest_new_thing(state){
return clicker.stateless.get_latest_new_thing(clicker.engine.get_state(state));
});
clicker.engine.get_latest_ticker = (function clicker$engine$get_latest_ticker(state){
return clicker.stateless.get_latest_ticker(clicker.engine.get_state(state),clicker.engine.db);
});
clicker.engine.db_item_name = (function clicker$engine$db_item_name(thing){
return clicker.stateless.db_item_name(clicker.engine.db,thing);
});
clicker.engine.db_item_ticker = (function clicker$engine$db_item_ticker(thing){
return clicker.stateless.db_item_ticker(clicker.engine.db,thing);
});
clicker.engine.db_items_by_group = (function clicker$engine$db_items_by_group(group){
return clicker.stateless.db_items_by_group(clicker.engine.db,group);
});
