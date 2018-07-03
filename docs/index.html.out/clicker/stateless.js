// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clicker.stateless');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4521__auto__ = [];
var len__4518__auto___5569 = arguments.length;
var i__4519__auto___5570 = (0);
while(true){
if((i__4519__auto___5570 < len__4518__auto___5569)){
args__4521__auto__.push((arguments[i__4519__auto___5570]));

var G__5571 = (i__4519__auto___5570 + (1));
i__4519__auto___5570 = G__5571;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (db,state,thing_name,p__5560){
var map__5561 = p__5560;
var map__5561__$1 = ((((!((map__5561 == null)))?(((((map__5561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5561):map__5561);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5561__$1,cljs.core.cst$kw$n,(1));

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,map__5561,map__5561__$1,n){
return (function (p1__5552_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5563 = cljs.core.cst$kw$name;
return (p1__5552_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5552_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5563) : p1__5552_SHARP_.call(null,G__5563));
})());
});})(key,sub_db,map__5561,map__5561__$1,n))
,(function (){var G__5564 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5564) : sub_db.call(null,G__5564));
})()));
var gain_key = (function (){var G__5565 = cljs.core.cst$kw$gain;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5565) : sub_db.call(null,G__5565));
})();
var loss_key = (function (){var G__5566 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5566) : sub_db.call(null,G__5566));
})();
var gain_fn = (function (){var G__5567 = cljs.core.cst$kw$gain_DASH_fn;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5567) : sub_db.call(null,G__5567));
})();
var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
var thing_loss = (function (){var G__5568 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__5568) : thing.call(null,G__5568));
})();
var spread = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((1) + n));
var future_spread = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,map__5561,map__5561__$1,n){
return (function (p1__5553_SHARP_){
return (current_count + p1__5553_SHARP_);
});})(key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,map__5561,map__5561__$1,n))
,spread);
var thing_gain = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,map__5561,map__5561__$1,n){
return (function (p1__5554_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__5554_SHARP_,thing_loss) : gain_fn.call(null,p1__5554_SHARP_,thing_loss));
});})(key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,map__5561,map__5561__$1,n))
,future_spread));
var gain_amount = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,thing_gain);
var loss_amount = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(- (n * thing_loss)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,thing_gain,gain_amount,loss_amount,map__5561,map__5561__$1,n){
return (function (p1__5555_SHARP_){
return (p1__5555_SHARP_ + n);
});})(key,sub_db,thing,gain_key,loss_key,gain_fn,current_count,thing_loss,spread,future_spread,thing_gain,gain_amount,loss_amount,map__5561,map__5561__$1,n))
,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gain_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(gain_amount,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loss_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(loss_amount,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq5556){
var G__5557 = cljs.core.first(seq5556);
var seq5556__$1 = cljs.core.next(seq5556);
var G__5558 = cljs.core.first(seq5556__$1);
var seq5556__$2 = cljs.core.next(seq5556__$1);
var G__5559 = cljs.core.first(seq5556__$2);
var seq5556__$3 = cljs.core.next(seq5556__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5557,G__5558,G__5559,seq5556__$3);
});

clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4521__auto__ = [];
var len__4518__auto___5584 = arguments.length;
var i__4519__auto___5585 = (0);
while(true){
if((i__4519__auto___5585 < len__4518__auto___5584)){
args__4521__auto__.push((arguments[i__4519__auto___5585]));

var G__5586 = (i__4519__auto___5585 + (1));
i__4519__auto___5585 = G__5586;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (db,state,thing_name,p__5577){
var map__5578 = p__5577;
var map__5578__$1 = ((((!((map__5578 == null)))?(((((map__5578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5578):map__5578);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5578__$1,cljs.core.cst$kw$n,(1));

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,map__5578,map__5578__$1,n){
return (function (p1__5572_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5580 = cljs.core.cst$kw$name;
return (p1__5572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5572_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5580) : p1__5572_SHARP_.call(null,G__5580));
})());
});})(key,sub_db,map__5578,map__5578__$1,n))
,(function (){var G__5581 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5581) : sub_db.call(null,G__5581));
})()));
var loss_key = (function (){var G__5582 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5582) : sub_db.call(null,G__5582));
})();
var thing_loss = (function (){var G__5583 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__5583) : thing.call(null,G__5583));
})();
var current_loser = (state.cljs$core$IFn$_invoke$arity$2 ? state.cljs$core$IFn$_invoke$arity$2(loss_key,(0)) : state.call(null,loss_key,(0)));
var future_loser = (current_loser - (n * thing_loss));
return ((0) <= future_loser);
});

clicker.stateless.can_tap_QMARK_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq5573){
var G__5574 = cljs.core.first(seq5573);
var seq5573__$1 = cljs.core.next(seq5573);
var G__5575 = cljs.core.first(seq5573__$1);
var seq5573__$2 = cljs.core.next(seq5573__$1);
var G__5576 = cljs.core.first(seq5573__$2);
var seq5573__$3 = cljs.core.next(seq5573__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5574,G__5575,G__5576,seq5573__$3);
});

clicker.stateless.next_gain = (function clicker$stateless$next_gain(db,state,thing_name){

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db){
return (function (p1__5587_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5588 = cljs.core.cst$kw$name;
return (p1__5587_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5587_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5588) : p1__5587_SHARP_.call(null,G__5588));
})());
});})(key,sub_db))
,(function (){var G__5589 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5589) : sub_db.call(null,G__5589));
})()));
var gain_key = (function (){var G__5590 = cljs.core.cst$kw$gain;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5590) : sub_db.call(null,G__5590));
})();
var loss_key = (function (){var G__5591 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5591) : sub_db.call(null,G__5591));
})();
var thing_loss = (function (){var G__5592 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__5592) : thing.call(null,G__5592));
})();
var gain_fn = (function (){var G__5593 = cljs.core.cst$kw$gain_DASH_fn;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5593) : sub_db.call(null,G__5593));
})();
var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
var future_count = (current_count + (1));
var thing_gain = (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(future_count,thing_loss) : gain_fn.call(null,future_count,thing_loss));
return thing_gain;
});
clicker.stateless.thing_count = (function clicker$stateless$thing_count(state,thing_name){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
});
