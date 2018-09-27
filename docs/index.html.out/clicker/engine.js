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
var len__4531__auto___6158 = arguments.length;
var i__4532__auto___6159 = (0);
while(true){
if((i__4532__auto___6159 < len__4531__auto___6158)){
args__4534__auto__.push((arguments[i__4532__auto___6159]));

var G__6160 = (i__4532__auto___6159 + (1));
i__4532__auto___6159 = G__6160;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__6155){
var map__6156 = p__6155;
var map__6156__$1 = ((((!((map__6156 == null)))?(((((map__6156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6156):map__6156);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6156__$1,cljs.core.cst$kw$change_DASH_fn,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(change_fn,(0)));
});

clicker.engine.click.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.engine.click.cljs$lang$applyTo = (function (seq6153){
var G__6154 = cljs.core.first(seq6153);
var seq6153__$1 = cljs.core.next(seq6153);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6154,seq6153__$1);
});

clicker.engine.tap = (function clicker$engine$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6167 = arguments.length;
var i__4532__auto___6168 = (0);
while(true){
if((i__4532__auto___6168 < len__4531__auto___6167)){
args__4534__auto__.push((arguments[i__4532__auto___6168]));

var G__6169 = (i__4532__auto___6168 + (1));
i__4532__auto___6168 = G__6169;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state_STAR_,thing,p__6164){
var map__6165 = p__6164;
var map__6165__$1 = ((((!((map__6165 == null)))?(((((map__6165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6165):map__6165);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6165__$1,cljs.core.cst$kw$n,(1));
var state = clicker.engine.get_state(state_STAR_);
var ticker = clicker.stateless.db_item_ticker(clicker.engine.db,thing);
var updated = clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
return cljs.core.reset_BANG_(state_STAR_,updated);
});

clicker.engine.tap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.tap.cljs$lang$applyTo = (function (seq6161){
var G__6162 = cljs.core.first(seq6161);
var seq6161__$1 = cljs.core.next(seq6161);
var G__6163 = cljs.core.first(seq6161__$1);
var seq6161__$2 = cljs.core.next(seq6161__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6162,G__6163,seq6161__$2);
});

clicker.engine.thing_count = (function clicker$engine$thing_count(state,thing){
return clicker.stateless.thing_count(clicker.engine.get_state(state),thing);
});
clicker.engine.can_tap_QMARK_ = (function clicker$engine$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6176 = arguments.length;
var i__4532__auto___6177 = (0);
while(true){
if((i__4532__auto___6177 < len__4531__auto___6176)){
args__4534__auto__.push((arguments[i__4532__auto___6177]));

var G__6178 = (i__4532__auto___6177 + (1));
i__4532__auto___6177 = G__6178;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

clicker.engine.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,thing,p__6173){
var map__6174 = p__6173;
var map__6174__$1 = ((((!((map__6174 == null)))?(((((map__6174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6174):map__6174);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6174__$1,cljs.core.cst$kw$n,(1));
var can_tap = clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic(clicker.engine.get_state(state),clicker.engine.db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
return can_tap;
});

clicker.engine.can_tap_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clicker.engine.can_tap_QMARK_.cljs$lang$applyTo = (function (seq6170){
var G__6171 = cljs.core.first(seq6170);
var seq6170__$1 = cljs.core.next(seq6170);
var G__6172 = cljs.core.first(seq6170__$1);
var seq6170__$2 = cljs.core.next(seq6170__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6171,G__6172,seq6170__$2);
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
var G__6180 = arguments.length;
switch (G__6180) {
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
clicker.engine.db_group_by_item = (function clicker$engine$db_group_by_item(thing){
return clicker.stateless.db_group_by_item(clicker.engine.db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(thing));
});
