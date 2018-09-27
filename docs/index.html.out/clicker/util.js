// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.string.format');
clicker.util.log = (function clicker$util$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6024 = arguments.length;
var i__4532__auto___6025 = (0);
while(true){
if((i__4532__auto___6025 < len__4531__auto___6024)){
args__4534__auto__.push((arguments[i__4532__auto___6025]));

var G__6026 = (i__4532__auto___6025 + (1));
i__4532__auto___6025 = G__6026;
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
clicker.util.log.cljs$lang$applyTo = (function (seq6022){
var G__6023 = cljs.core.first(seq6022);
var seq6022__$1 = cljs.core.next(seq6022);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6023,seq6022__$1);
});

/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
clicker.util.format = (function clicker$util$format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6029 = arguments.length;
var i__4532__auto___6030 = (0);
while(true){
if((i__4532__auto___6030 < len__4531__auto___6029)){
args__4534__auto__.push((arguments[i__4532__auto___6030]));

var G__6031 = (i__4532__auto___6030 + (1));
i__4532__auto___6030 = G__6031;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clicker.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clicker.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

clicker.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clicker.util.format.cljs$lang$applyTo = (function (seq6027){
var G__6028 = cljs.core.first(seq6027);
var seq6027__$1 = cljs.core.next(seq6027);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6028,seq6027__$1);
});

/**
 * formats decimal using the current locale
 */
clicker.util.decimal_format = (function clicker$util$decimal_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL)).format(n);
});
/**
 * formats currency using the current locale
 */
clicker.util.currency_format = (function clicker$util$currency_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY)).format(n);
});
