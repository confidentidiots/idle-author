// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clicker.stateless');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
clicker.stateless.gain = (function clicker$stateless$gain(db,thing_name,n){

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var gain_fn = (function (){var G__5553 = cljs.core.cst$kw$gain_DASH_fn;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5553) : sub_db.call(null,G__5553));
})();
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db,gain_fn){
return (function (p1__5552_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5554 = cljs.core.cst$kw$name;
return (p1__5552_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5552_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5554) : p1__5552_SHARP_.call(null,G__5554));
})());
});})(key,sub_db,gain_fn))
,(function (){var G__5555 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5555) : sub_db.call(null,G__5555));
})()));
var cost = (function (){var G__5556 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__5556) : thing.call(null,G__5556));
})();
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(n,cost) : gain_fn.call(null,n,cost));
});
clicker.stateless.tap = (function clicker$stateless$tap(db,state,thing_name){

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db){
return (function (p1__5557_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5558 = cljs.core.cst$kw$name;
return (p1__5557_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5557_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5558) : p1__5557_SHARP_.call(null,G__5558));
})());
});})(key,sub_db))
,(function (){var G__5559 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5559) : sub_db.call(null,G__5559));
})()));
var gain_key = (function (){var G__5560 = cljs.core.cst$kw$gain;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5560) : sub_db.call(null,G__5560));
})();
var loss_key = (function (){var G__5561 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5561) : sub_db.call(null,G__5561));
})();
var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
var future_count = (current_count + (1));
var thing_gain = clicker.stateless.gain(db,thing_name,future_count);
var thing_loss = (function (){var G__5562 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__5562) : thing.call(null,G__5562));
})();
var gain_amount = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,thing_gain);
var loss_amount = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(- thing_loss));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gain_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(gain_amount,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loss_key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(loss_amount,(0)));
});
clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(db,state,thing_name){

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db){
return (function (p1__5563_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5564 = cljs.core.cst$kw$name;
return (p1__5563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5563_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5564) : p1__5563_SHARP_.call(null,G__5564));
})());
});})(key,sub_db))
,(function (){var G__5565 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5565) : sub_db.call(null,G__5565));
})()));
var loss_key = (function (){var G__5566 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5566) : sub_db.call(null,G__5566));
})();
var thing_loss = (function (){var G__5567 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__5567) : thing.call(null,G__5567));
})();
var current_loser = (state.cljs$core$IFn$_invoke$arity$2 ? state.cljs$core$IFn$_invoke$arity$2(loss_key,(0)) : state.call(null,loss_key,(0)));
var future_loser = (current_loser - thing_loss);
return ((0) <= future_loser);
});
clicker.stateless.next_gain = (function clicker$stateless$next_gain(db,state,thing_name){

var key = clicker.util.find_db_key(db,thing_name);
var sub_db = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(key) : db.call(null,key));
var thing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (key,sub_db){
return (function (p1__5568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,(function (){var G__5569 = cljs.core.cst$kw$name;
return (p1__5568_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5568_SHARP_.cljs$core$IFn$_invoke$arity$1(G__5569) : p1__5568_SHARP_.call(null,G__5569));
})());
});})(key,sub_db))
,(function (){var G__5570 = cljs.core.cst$kw$items;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5570) : sub_db.call(null,G__5570));
})()));
var gain_key = (function (){var G__5571 = cljs.core.cst$kw$gain;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5571) : sub_db.call(null,G__5571));
})();
var loss_key = (function (){var G__5572 = cljs.core.cst$kw$loss;
return (sub_db.cljs$core$IFn$_invoke$arity$1 ? sub_db.cljs$core$IFn$_invoke$arity$1(G__5572) : sub_db.call(null,G__5572));
})();
var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
var future_count = (current_count + (1));
var thing_gain = clicker.stateless.gain(db,thing_name,future_count);
return thing_gain;
});
clicker.stateless.thing_count = (function clicker$stateless$thing_count(state,thing_name){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_name], null),(0));
});
