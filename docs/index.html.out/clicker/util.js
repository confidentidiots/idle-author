// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clicker.util.log = (function clicker$util$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5189 = arguments.length;
var i__4532__auto___5190 = (0);
while(true){
if((i__4532__auto___5190 < len__4531__auto___5189)){
args__4534__auto__.push((arguments[i__4532__auto___5190]));

var G__5191 = (i__4532__auto___5190 + (1));
i__4532__auto___5190 = G__5191;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,v,text):v);
console.log(vs);

return v;
});

clicker.util.log.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.util.log.cljs$lang$applyTo = (function (seq5187){
var G__5188 = cljs.core.first(seq5187);
var seq5187__$1 = cljs.core.next(seq5187);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5188,seq5187__$1);
});

clicker.util.default_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"init"], null);
