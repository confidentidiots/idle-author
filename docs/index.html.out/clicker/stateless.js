// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.stateless');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.util');
goog.require('clojure.set');
goog.require('data.idb');
clicker.stateless.thing_count = (function clicker$stateless$thing_count(state,thing_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing_key], null),(0));
});
clicker.stateless.future_quantities = (function clicker$stateless$future_quantities(state,thing,quantity){

var current_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),(0));
var spread = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((1) + quantity));
var future_spread = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_count,spread){
return (function (p1__6178_SHARP_){
return (current_count + p1__6178_SHARP_);
});})(current_count,spread))
,spread);
return future_spread;
});
clicker.stateless.apply_gain_or_loss = (function clicker$stateless$apply_gain_or_loss(k,v,state,db,thing,quantity,op,fun){

if(typeof v === 'number'){
var value = (quantity * v);
var value_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(value) : op.call(null,value)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(value_fn,(0)));
} else {
var quantities = clicker.stateless.future_quantities(state,thing,quantity);
var opposite = cljs.core.val(cljs.core.first((fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(db,thing) : fun.call(null,db,thing))));
var gain_fn = data.idb.item_function(db,v);
var value = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (quantities,opposite,gain_fn){
return (function (p1__6179_SHARP_){
return (gain_fn.cljs$core$IFn$_invoke$arity$2 ? gain_fn.cljs$core$IFn$_invoke$arity$2(p1__6179_SHARP_,opposite) : gain_fn.call(null,p1__6179_SHARP_,opposite));
});})(quantities,opposite,gain_fn))
,quantities));
var value_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(value) : op.call(null,value)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(value_fn,(0)));
}
});
clicker.stateless.apply_gain = (function clicker$stateless$apply_gain(k,v,state,db,thing,quantity){
return clicker.stateless.apply_gain_or_loss(k,v,state,db,thing,quantity,cljs.core._PLUS_,data.idb.item_loss);
});
clicker.stateless.apply_loss = (function clicker$stateless$apply_loss(k,v,state,db,thing,quantity){
return clicker.stateless.apply_gain_or_loss(k,v,state,db,thing,quantity,cljs.core._,data.idb.item_gain);
});
clicker.stateless.apply_gains_or_losses = (function clicker$stateless$apply_gains_or_losses(state,db,thing,gol_fn,apply_fn,quantity){

var it = (gol_fn.cljs$core$IFn$_invoke$arity$2 ? gol_fn.cljs$core$IFn$_invoke$arity$2(db,thing) : gol_fn.call(null,db,thing));
var states = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (it){
return (function (st,p__6180){
var vec__6181 = p__6180;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6181,(1),null);
return (apply_fn.cljs$core$IFn$_invoke$arity$6 ? apply_fn.cljs$core$IFn$_invoke$arity$6(k,v,st,db,thing,quantity) : apply_fn.call(null,k,v,st,db,thing,quantity));
});})(it))
,state,it);
return states;
});
clicker.stateless.apply_gains = (function clicker$stateless$apply_gains(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6191 = arguments.length;
var i__4532__auto___6192 = (0);
while(true){
if((i__4532__auto___6192 < len__4531__auto___6191)){
args__4534__auto__.push((arguments[i__4532__auto___6192]));

var G__6193 = (i__4532__auto___6192 + (1));
i__4532__auto___6192 = G__6193;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6188){
var map__6189 = p__6188;
var map__6189__$1 = ((((!((map__6189 == null)))?(((((map__6189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6189):map__6189);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6189__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gain,quantity);
});

clicker.stateless.apply_gains.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_gains.cljs$lang$applyTo = (function (seq6184){
var G__6185 = cljs.core.first(seq6184);
var seq6184__$1 = cljs.core.next(seq6184);
var G__6186 = cljs.core.first(seq6184__$1);
var seq6184__$2 = cljs.core.next(seq6184__$1);
var G__6187 = cljs.core.first(seq6184__$2);
var seq6184__$3 = cljs.core.next(seq6184__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6185,G__6186,G__6187,seq6184__$3);
});

clicker.stateless.apply_losses = (function clicker$stateless$apply_losses(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6201 = arguments.length;
var i__4532__auto___6202 = (0);
while(true){
if((i__4532__auto___6202 < len__4531__auto___6201)){
args__4534__auto__.push((arguments[i__4532__auto___6202]));

var G__6203 = (i__4532__auto___6202 + (1));
i__4532__auto___6202 = G__6203;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6198){
var map__6199 = p__6198;
var map__6199__$1 = ((((!((map__6199 == null)))?(((((map__6199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6199):map__6199);
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6199__$1,cljs.core.cst$kw$quantity,(1));
return clicker.stateless.apply_gains_or_losses(state,db,thing,data.idb.item_loss,clicker.stateless.apply_loss,quantity);
});

clicker.stateless.apply_losses.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.apply_losses.cljs$lang$applyTo = (function (seq6194){
var G__6195 = cljs.core.first(seq6194);
var seq6194__$1 = cljs.core.next(seq6194);
var G__6196 = cljs.core.first(seq6194__$1);
var seq6194__$2 = cljs.core.next(seq6194__$1);
var G__6197 = cljs.core.first(seq6194__$2);
var seq6194__$3 = cljs.core.next(seq6194__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6195,G__6196,G__6197,seq6194__$3);
});

clicker.stateless.tap = (function clicker$stateless$tap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6212 = arguments.length;
var i__4532__auto___6213 = (0);
while(true){
if((i__4532__auto___6213 < len__4531__auto___6212)){
args__4534__auto__.push((arguments[i__4532__auto___6213]));

var G__6214 = (i__4532__auto___6213 + (1));
i__4532__auto___6213 = G__6214;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6209){
var map__6210 = p__6209;
var map__6210__$1 = ((((!((map__6210 == null)))?(((((map__6210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6210):map__6210);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6210__$1,cljs.core.cst$kw$n,(1));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(clicker.stateless.apply_losses.cljs$core$IFn$_invoke$arity$variadic(clicker.stateless.apply_gains.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quantity,n], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,thing], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__6210,map__6210__$1,n){
return (function (p1__6204_SHARP_){
return (p1__6204_SHARP_ + n);
});})(map__6210,map__6210__$1,n))
,(0)));
});

clicker.stateless.tap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.tap.cljs$lang$applyTo = (function (seq6205){
var G__6206 = cljs.core.first(seq6205);
var seq6205__$1 = cljs.core.next(seq6205);
var G__6207 = cljs.core.first(seq6205__$1);
var seq6205__$2 = cljs.core.next(seq6205__$1);
var G__6208 = cljs.core.first(seq6205__$2);
var seq6205__$3 = cljs.core.next(seq6205__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6206,G__6207,G__6208,seq6205__$3);
});

clicker.stateless.next_gain_or_loss = (function clicker$stateless$next_gain_or_loss(state,db,thing,lookup_fn,apply_fn){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function clicker$stateless$next_gain_or_loss_$_iter__6215(s__6216){
return (new cljs.core.LazySeq(null,(function (){
var s__6216__$1 = s__6216;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__6216__$1);
if(temp__5457__auto__){
var s__6216__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6216__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__6216__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__6218 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__6217 = (0);
while(true){
if((i__6217 < size__4323__auto__)){
var gain_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__6217);
cljs.core.chunk_append(b__6218,(function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})());

var G__6219 = (i__6217 + (1));
i__6217 = G__6219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6218),clicker$stateless$next_gain_or_loss_$_iter__6215(cljs.core.chunk_rest(s__6216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6218),null);
}
} else {
var gain_key = cljs.core.first(s__6216__$2);
return cljs.core.cons((function (){var old_value_maybe_nil = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var old_value = (((old_value_maybe_nil == null))?(0):old_value_maybe_nil);
var next_state = (apply_fn.cljs$core$IFn$_invoke$arity$3 ? apply_fn.cljs$core$IFn$_invoke$arity$3(state,db,thing) : apply_fn.call(null,state,db,thing));
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,gain_key], null));
var ret = (new_value - old_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([gain_key,ret]);
})(),clicker$stateless$next_gain_or_loss_$_iter__6215(cljs.core.rest(s__6216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,(lookup_fn.cljs$core$IFn$_invoke$arity$2 ? lookup_fn.cljs$core$IFn$_invoke$arity$2(db,thing) : lookup_fn.call(null,db,thing))));
})());
});
clicker.stateless.next_gain = (function clicker$stateless$next_gain(state,db,thing){

return clicker.stateless.next_gain_or_loss(state,db,thing,data.idb.item_gain,clicker.stateless.apply_gains);
});
clicker.stateless.next_loss = (function clicker$stateless$next_loss(state,db,thing){

return clicker.stateless.next_gain_or_loss(state,db,thing,data.idb.item_loss,clicker.stateless.apply_losses);
});
clicker.stateless.get_dependencies = (function clicker$stateless$get_dependencies(state,db,thing){
return data.idb.item_dependency(db,thing);
});
clicker.stateless.satisfies_dependencies_QMARK_ = (function clicker$stateless$satisfies_dependencies_QMARK_(state,db,thing){
var thing_deps = data.idb.item_dependency(db,thing);
var has_deps = cljs.core.every_QMARK_(((function (thing_deps){
return (function (p1__6220_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$things,p1__6220_SHARP_], null));
});})(thing_deps))
,thing_deps);
return has_deps;
});
clicker.stateless.can_tap_QMARK_ = (function clicker$stateless$can_tap_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6228 = arguments.length;
var i__4532__auto___6229 = (0);
while(true){
if((i__4532__auto___6229 < len__4531__auto___6228)){
args__4534__auto__.push((arguments[i__4532__auto___6229]));

var G__6230 = (i__4532__auto___6229 + (1));
i__4532__auto___6229 = G__6230;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

clicker.stateless.can_tap_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (state,db,thing,p__6225){
var map__6226 = p__6225;
var map__6226__$1 = ((((!((map__6226 == null)))?(((((map__6226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6226):map__6226);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6226__$1,cljs.core.cst$kw$n,(1));

var tapped = clicker.stateless.tap.cljs$core$IFn$_invoke$arity$variadic(state,db,thing,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
var and__3938__auto__ = (cljs.core.some(cljs.core.neg_QMARK_,cljs.core.vals(cljs.core.cst$kw$values.cljs$core$IFn$_invoke$arity$1(tapped))) == null);
if(and__3938__auto__){
return clicker.stateless.satisfies_dependencies_QMARK_(state,db,thing);
} else {
return and__3938__auto__;
}
});

clicker.stateless.can_tap_QMARK_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clicker.stateless.can_tap_QMARK_.cljs$lang$applyTo = (function (seq6221){
var G__6222 = cljs.core.first(seq6221);
var seq6221__$1 = cljs.core.next(seq6221);
var G__6223 = cljs.core.first(seq6221__$1);
var seq6221__$2 = cljs.core.next(seq6221__$1);
var G__6224 = cljs.core.first(seq6221__$2);
var seq6221__$3 = cljs.core.next(seq6221__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6222,G__6223,G__6224,seq6221__$3);
});

clicker.stateless.db_item_name = (function clicker$stateless$db_item_name(db,thing){
return data.idb.item_name(db,thing);
});
clicker.stateless.db_items_by_group = (function clicker$stateless$db_items_by_group(db,group){
return data.idb.item_group(db,group);
});
