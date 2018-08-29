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
var len__4531__auto___9653 = arguments.length;
var i__4532__auto___9654 = (0);
while(true){
if((i__4532__auto___9654 < len__4531__auto___9653)){
args__4534__auto__.push((arguments[i__4532__auto___9654]));

var G__9655 = (i__4532__auto___9654 + (1));
i__4532__auto___9654 = G__9655;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__9650){
var map__9651 = p__9650;
var map__9651__$1 = ((((!((map__9651 == null)))?(((((map__9651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9651):map__9651);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9651__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq9648){
var G__9649 = cljs.core.first(seq9648);
var seq9648__$1 = cljs.core.next(seq9648);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9649,seq9648__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9662 = arguments.length;
var i__4532__auto___9663 = (0);
while(true){
if((i__4532__auto___9663 < len__4531__auto___9662)){
args__4534__auto__.push((arguments[i__4532__auto___9663]));

var G__9664 = (i__4532__auto___9663 + (1));
i__4532__auto___9663 = G__9664;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state_STAR_,thing,p__9659){
var map__9660 = p__9659;
var map__9660__$1 = ((((!((map__9660 == null)))?(((((map__9660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9660):map__9660);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9660__$1,cljs.core.cst$kw$n,(1));
var state = clicker.engine.get_state(state_STAR_);
return cljs.core.reset_BANG_(state_STAR_,clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0)));
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq9656){
var G__9657 = cljs.core.first(seq9656);
var seq9656__$1 = cljs.core.next(seq9656);
var G__9658 = cljs.core.first(seq9656__$1);
var seq9656__$2 = cljs.core.next(seq9656__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9657,G__9658,seq9656__$2);
});

clicker.engine.thing_count = (function clicker$engine$thing_count(state,thing){
return clicker.stateless.thing_count(clicker.engine.get_state(state),thing);
});
clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9671 = arguments.length;
var i__4532__auto___9672 = (0);
while(true){
if((i__4532__auto___9672 < len__4531__auto___9671)){
args__4534__auto__.push((arguments[i__4532__auto___9672]));

var G__9673 = (i__4532__auto___9672 + (1));
i__4532__auto___9672 = G__9673;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing,p__9668){
var map__9669 = p__9668;
var map__9669__$1 = ((((!((map__9669 == null)))?(((((map__9669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9669):map__9669);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9669__$1,cljs.core.cst$kw$n,(1));
var can_tap = clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(clicker.engine.get_state(state),clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
return can_tap;
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq9665){
var G__9666 = cljs.core.first(seq9665);
var seq9665__$1 = cljs.core.next(seq9665);
var G__9667 = cljs.core.first(seq9665__$1);
var seq9665__$2 = cljs.core.next(seq9665__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9666,G__9667,seq9665__$2);
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
