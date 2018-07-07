// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.stateless');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9445 = arguments.length;
var i__4532__auto___9446 = (0);
while(true){
if((i__4532__auto___9446 < len__4531__auto___9445)){
args__4534__auto__.push((arguments[i__4532__auto___9446]));

var G__9447 = (i__4532__auto___9446 + (1));
i__4532__auto___9446 = G__9447;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,state,thing_name,p__9436){
var map__9437 = p__9436;
var map__9437__$1 = ((((!((map__9437 == null)))?(((((map__9437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9437):map__9437);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9437__$1,cljs.core.cst$kw$n,(1));

var key = clicker.util.find_db_key(db__$1,thing_name);
var sub_db = (db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(key) : db__$1.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,map__9437,map__9437__$1,n){
return (function (p1__9428_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__9439 = cljs.core.cst$kw$name;
return (p1__9428_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9428_SHARP_.cljs$core$IFn$_invoke$arity$1(G__9439) : p1__9428_SHARP_.call(null,G__9439));
})());
});})(key,sub_db,map__9437,map__9437__$1,n))
,(function (){var G__9440 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9440) : sub_db.call(null,G__9440));
})()));
var gain_key = (function (){var G__9441 = cljs.core.cst$kw$gain;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9441) : sub_db.call(null,G__9441));
})();
var loss_key = (function (){var G__9442 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9442) : sub_db.call(null,G__9442));
})();
var gain_fn = (function (){var G__9443 = cljs.core.cst$kw$gain_DASH_fn;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9443) : sub_db.call(null,G__9443));
})();
var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
var thing_loss = (function (){var G__9444 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__9444) : thing.call(null,G__9444));
})();
var spread = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((1) + n));
var future_spread = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,map__9437,map__9437__$1,n){
return (function (p1__9429_SHARP_){
return (current_count + p1__9429_SHARP_);
});})(key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,map__9437,map__9437__$1,n))
,spread);
var thing_gain = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,map__9437,map__9437__$1,n){
return (function (p1__9430_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__9430_SHARP_,thing_loss) : gain_fn.call(null,p1__9430_SHARP_,thing_loss));
});})(key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,map__9437,map__9437__$1,n))
,future_spread));
var gain_amount = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,thing_gain);
var loss_amount = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(- (n * thing_loss)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,thing_gain,gain_amount,loss_amount,map__9437,map__9437__$1,n){
return (function (p1__9431_SHARP_){
return (p1__9431_SHARP_ + n);
});})(key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,thing_gain,gain_amount,loss_amount,map__9437,map__9437__$1,n))
,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gain_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(gain_amount,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loss_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(loss_amount,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq9432){
var G__9433 = cljs.core.first(seq9432);
var seq9432__$1 = cljs.core.next(seq9432);
var G__9434 = cljs.core.first(seq9432__$1);
var seq9432__$2 = cljs.core.next(seq9432__$1);
var G__9435 = cljs.core.first(seq9432__$2);
var seq9432__$3 = cljs.core.next(seq9432__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9433,G__9434,G__9435,seq9432__$3);
});

clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9460 = arguments.length;
var i__4532__auto___9461 = (0);
while(true){
if((i__4532__auto___9461 < len__4531__auto___9460)){
args__4534__auto__.push((arguments[i__4532__auto___9461]));

var G__9462 = (i__4532__auto___9461 + (1));
i__4532__auto___9461 = G__9462;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,state,thing_name,p__9453){
var map__9454 = p__9453;
var map__9454__$1 = ((((!((map__9454 == null)))?(((((map__9454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9454):map__9454);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9454__$1,cljs.core.cst$kw$n,(1));

var key = clicker.util.find_db_key(db__$1,thing_name);
var sub_db = (db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(key) : db__$1.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,map__9454,map__9454__$1,n){
return (function (p1__9448_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__9456 = cljs.core.cst$kw$name;
return (p1__9448_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9448_SHARP_.cljs$core$IFn$_invoke$arity$1(G__9456) : p1__9448_SHARP_.call(null,G__9456));
})());
});})(key,sub_db,map__9454,map__9454__$1,n))
,(function (){var G__9457 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9457) : sub_db.call(null,G__9457));
})()));
var loss_key = (function (){var G__9458 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9458) : sub_db.call(null,G__9458));
})();
var thing_loss = (function (){var G__9459 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__9459) : thing.call(null,G__9459));
})();
var current_loser = (state.cljs$core$IFn$_invoke$arity$2 ? state.cljs$core$IFn$_invoke$arity$2(loss_key,(0)) : state.call(null,loss_key,(0)));
var future_loser = (current_loser - (n * thing_loss));
return ((0) <= future_loser);
});

clicker.stateless.can_tap_QMARK_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq9449){
var G__9450 = cljs.core.first(seq9449);
var seq9449__$1 = cljs.core.next(seq9449);
var G__9451 = cljs.core.first(seq9449__$1);
var seq9449__$2 = cljs.core.next(seq9449__$1);
var G__9452 = cljs.core.first(seq9449__$2);
var seq9449__$3 = cljs.core.next(seq9449__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9450,G__9451,G__9452,seq9449__$3);
});

clicker.stateless.next_gain = (function clicker$stateless$next_gain(db__$1,state,thing_name){

var key = clicker.util.find_db_key(db__$1,thing_name);
var sub_db = (db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(key) : db__$1.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db){
return (function (p1__9463_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__9464 = cljs.core.cst$kw$name;
return (p1__9463_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9463_SHARP_.cljs$core$IFn$_invoke$arity$1(G__9464) : p1__9463_SHARP_.call(null,G__9464));
})());
});})(key,sub_db))
,(function (){var G__9465 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9465) : sub_db.call(null,G__9465));
})()));
var gain_key = (function (){var G__9466 = cljs.core.cst$kw$gain;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9466) : sub_db.call(null,G__9466));
})();
var loss_key = (function (){var G__9467 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9467) : sub_db.call(null,G__9467));
})();
var thing_loss = (function (){var G__9468 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__9468) : thing.call(null,G__9468));
})();
var gain_fn = (function (){var G__9469 = cljs.core.cst$kw$gain_DASH_fn;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__9469) : sub_db.call(null,G__9469));
})();
var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
var future_count = (current_count + (1));
var thing_gain = (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(future_count,thing_loss) : gain_fn.call(null,future_count,thing_loss));
return thing_gain;
});
clicker.stateless.thing_count = (function clicker$stateless$thing_count(state,thing_name){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
});
