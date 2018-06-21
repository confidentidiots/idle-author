// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7850 = arguments.length;
var i__4500__auto___7851 = (0);
while(true){
if((i__4500__auto___7851 < len__4499__auto___7850)){
args__4502__auto__.push((arguments[i__4500__auto___7851]));

var G__7852 = (i__4500__auto___7851 + (1));
i__4500__auto___7851 = G__7852;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq7849){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7849));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7854 = arguments.length;
var i__4500__auto___7855 = (0);
while(true){
if((i__4500__auto___7855 < len__4499__auto___7854)){
args__4502__auto__.push((arguments[i__4500__auto___7855]));

var G__7856 = (i__4500__auto___7855 + (1));
i__4500__auto___7855 = G__7856;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq7853){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7853));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__7857 = cljs.core._EQ_;
var expr__7858 = c;
if(cljs.core.truth_((function (){var G__7860 = "\b";
var G__7861 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7860,G__7861) : pred__7857.call(null,G__7860,G__7861));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__7862 = "\t";
var G__7863 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7862,G__7863) : pred__7857.call(null,G__7862,G__7863));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__7864 = "\n";
var G__7865 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7864,G__7865) : pred__7857.call(null,G__7864,G__7865));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__7866 = "\f";
var G__7867 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7866,G__7867) : pred__7857.call(null,G__7866,G__7867));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__7868 = "\r";
var G__7869 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7868,G__7869) : pred__7857.call(null,G__7868,G__7869));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__7870 = "\"";
var G__7871 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7870,G__7871) : pred__7857.call(null,G__7870,G__7871));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__7872 = "\\";
var G__7873 = expr__7858;
return (pred__7857.cljs$core$IFn$_invoke$arity$2 ? pred__7857.cljs$core$IFn$_invoke$arity$2(G__7872,G__7873) : pred__7857.call(null,G__7872,G__7873));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7875 = arguments.length;
var i__4500__auto___7876 = (0);
while(true){
if((i__4500__auto___7876 < len__4499__auto___7875)){
args__4502__auto__.push((arguments[i__4500__auto___7876]));

var G__7877 = (i__4500__auto___7876 + (1));
i__4500__auto___7876 = G__7877;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq7874){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7874));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7879 = arguments.length;
var i__4500__auto___7880 = (0);
while(true){
if((i__4500__auto___7880 < len__4499__auto___7879)){
args__4502__auto__.push((arguments[i__4500__auto___7880]));

var G__7881 = (i__4500__auto___7880 + (1));
i__4500__auto___7880 = G__7881;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq7878){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7878));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__7882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7882,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7882,(1),null);
var G__7885 = new_context;
var G__7886 = remainder;
var G__7887 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__7885;
lis__$1 = G__7886;
acc = G__7887;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__7888 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7888,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7888,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__7891 = new_context;
var G__7892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__7891;
acc = G__7892;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__7893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7893,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7893,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7893,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__7896 = new_context;
var G__7897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__7896;
acc = G__7897;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__7898(s__7899){
return (new cljs.core.LazySeq(null,(function (){
var s__7899__$1 = s__7899;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__7899__$1);
if(temp__5535__auto__){
var s__7899__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7899__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__7899__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__7901 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__7900 = (0);
while(true){
if((i__7900 < size__4291__auto__)){
var vec__7902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__7900);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7902,(0),null);
var vec__7905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7902,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7905,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7905,(1),null);
cljs.core.chunk_append(b__7901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__7930 = (i__7900 + (1));
i__7900 = G__7930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7901),cljs$pprint$unzip_map_$_iter__7898(cljs.core.chunk_rest(s__7899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7901),null);
}
} else {
var vec__7908 = cljs.core.first(s__7899__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7908,(0),null);
var vec__7911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7908,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7911,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7911,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__7898(cljs.core.rest(s__7899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__7914(s__7915){
return (new cljs.core.LazySeq(null,(function (){
var s__7915__$1 = s__7915;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__7915__$1);
if(temp__5535__auto__){
var s__7915__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7915__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__7915__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__7917 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__7916 = (0);
while(true){
if((i__7916 < size__4291__auto__)){
var vec__7918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__7916);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7918,(0),null);
var vec__7921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7918,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7921,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7921,(1),null);
cljs.core.chunk_append(b__7917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__7931 = (i__7916 + (1));
i__7916 = G__7931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7917),cljs$pprint$unzip_map_$_iter__7914(cljs.core.chunk_rest(s__7915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7917),null);
}
} else {
var vec__7924 = cljs.core.first(s__7915__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7924,(0),null);
var vec__7927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7924,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7927,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7927,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__7914(cljs.core.rest(s__7915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$tuple_map_$_iter__7932(s__7933){
return (new cljs.core.LazySeq(null,(function (){
var s__7933__$1 = s__7933;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__7933__$1);
if(temp__5535__auto__){
var s__7933__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7933__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__7933__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__7935 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__7934 = (0);
while(true){
if((i__7934 < size__4291__auto__)){
var vec__7936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__7934);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7936,(1),null);
cljs.core.chunk_append(b__7935,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__7942 = (i__7934 + (1));
i__7934 = G__7942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7935),cljs$pprint$tuple_map_$_iter__7932(cljs.core.chunk_rest(s__7933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7935),null);
}
} else {
var vec__7939 = cljs.core.first(s__7933__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7939,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7939,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__7932(cljs.core.rest(s__7933__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__7943 = (n - (1));
n = G__7943;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__7944 = (n + (1));
n = G__7944;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__7946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__7946) : test.call(null,G__7946));
})())))){
return pos;
} else {
var G__7947 = (pos + (1));
pos = G__7947;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if(((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4211__auto__ = (((pp == null))?null:pp);
var m__4212__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto__.call(null,pp));
} else {
var m__4212__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__7948 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__7948) : sym.call(null,G__7948));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__7951 = arguments.length;
switch (G__7951) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint7952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint7952 = (function (writer,max_columns,fields,meta7953){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta7953 = meta7953;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint7952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_7954,meta7953__$1){
var self__ = this;
var _7954__$1 = this;
return (new cljs.pprint.t_cljs$pprint7952(self__.writer,self__.max_columns,self__.fields,meta7953__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint7952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_7954){
var self__ = this;
var _7954__$1 = this;
return self__.meta7953;
});})(fields))
;

cljs.pprint.t_cljs$pprint7952.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint7952.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint7952.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__7955 = cljs.core._EQ_;
var expr__7956 = cljs.core.type(x);
if(cljs.core.truth_((pred__7955.cljs$core$IFn$_invoke$arity$2 ? pred__7955.cljs$core$IFn$_invoke$arity$2(String,expr__7956) : pred__7955.call(null,String,expr__7956)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__7955,expr__7956,this$__$1,fields){
return (function (p1__7949_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7949_SHARP_,"\n");
});})(s,nl,pred__7955,expr__7956,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__7955.cljs$core$IFn$_invoke$arity$2 ? pred__7955.cljs$core$IFn$_invoke$arity$2(Number,expr__7956) : pred__7955.call(null,Number,expr__7956)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__7956)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint7952.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta7953], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint7952.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint7952.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint7952";

cljs.pprint.t_cljs$pprint7952.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint7952");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint7952.
 */
cljs.pprint.__GT_t_cljs$pprint7952 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint7952(writer__$1,max_columns__$1,fields__$1,meta7953){
return (new cljs.pprint.t_cljs$pprint7952(writer__$1,max_columns__$1,fields__$1,meta7953));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint7952(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k7960,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__7964 = k7960;
var G__7964__$1 = (((G__7964 instanceof cljs.core.Keyword))?G__7964.fqn:null);
switch (G__7964__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7960,else__4175__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7959){
var self__ = this;
var G__7959__$1 = this;
return (new cljs.core.RecordIter((0),G__7959__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__7965 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__7965(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7961,other7962){
var self__ = this;
var this7961__$1 = this;
return ((!((other7962 == null))) && ((this7961__$1.constructor === other7962.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.parent,other7962.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.section,other7962.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.start_col,other7962.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.indent,other7962.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.done_nl,other7962.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.intra_block_nl,other7962.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.prefix,other7962.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.per_line_prefix,other7962.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.suffix,other7962.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.logical_block_callback,other7962.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7961__$1.__extmap,other7962.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__7959){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__7966 = cljs.core.keyword_identical_QMARK_;
var expr__7967 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__7969 = cljs.core.cst$kw$parent;
var G__7970 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7969,G__7970) : pred__7966.call(null,G__7969,G__7970));
})())){
return (new cljs.pprint.logical_block(G__7959,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7971 = cljs.core.cst$kw$section;
var G__7972 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7971,G__7972) : pred__7966.call(null,G__7971,G__7972));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__7959,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7973 = cljs.core.cst$kw$start_DASH_col;
var G__7974 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7973,G__7974) : pred__7966.call(null,G__7973,G__7974));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__7959,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7975 = cljs.core.cst$kw$indent;
var G__7976 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7975,G__7976) : pred__7966.call(null,G__7975,G__7976));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__7959,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7977 = cljs.core.cst$kw$done_DASH_nl;
var G__7978 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7977,G__7978) : pred__7966.call(null,G__7977,G__7978));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__7959,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7979 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__7980 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7979,G__7980) : pred__7966.call(null,G__7979,G__7980));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__7959,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7981 = cljs.core.cst$kw$prefix;
var G__7982 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7981,G__7982) : pred__7966.call(null,G__7981,G__7982));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__7959,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7983 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__7984 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7983,G__7984) : pred__7966.call(null,G__7983,G__7984));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__7959,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7985 = cljs.core.cst$kw$suffix;
var G__7986 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7985,G__7986) : pred__7966.call(null,G__7985,G__7986));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__7959,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7987 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__7988 = expr__7967;
return (pred__7966.cljs$core$IFn$_invoke$arity$2 ? pred__7966.cljs$core$IFn$_invoke$arity$2(G__7987,G__7988) : pred__7966.call(null,G__7987,G__7988));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__7959,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__7959),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__7959){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__7959,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__7963){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__7963),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__7963),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7963,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__7990 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__7990;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k7992,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__7996 = k7992;
var G__7996__$1 = (((G__7996 instanceof cljs.core.Keyword))?G__7996.fqn:null);
switch (G__7996__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7992,else__4175__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7991){
var self__ = this;
var G__7991__$1 = this;
return (new cljs.core.RecordIter((0),G__7991__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__7997 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__7997(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7993,other7994){
var self__ = this;
var this7993__$1 = this;
return ((!((other7994 == null))) && ((this7993__$1.constructor === other7994.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7993__$1.type_tag,other7994.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7993__$1.data,other7994.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7993__$1.trailing_white_space,other7994.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7993__$1.start_pos,other7994.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7993__$1.end_pos,other7994.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7993__$1.__extmap,other7994.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__7991){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__7998 = cljs.core.keyword_identical_QMARK_;
var expr__7999 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8001 = cljs.core.cst$kw$type_DASH_tag;
var G__8002 = expr__7999;
return (pred__7998.cljs$core$IFn$_invoke$arity$2 ? pred__7998.cljs$core$IFn$_invoke$arity$2(G__8001,G__8002) : pred__7998.call(null,G__8001,G__8002));
})())){
return (new cljs.pprint.buffer_blob(G__7991,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8003 = cljs.core.cst$kw$data;
var G__8004 = expr__7999;
return (pred__7998.cljs$core$IFn$_invoke$arity$2 ? pred__7998.cljs$core$IFn$_invoke$arity$2(G__8003,G__8004) : pred__7998.call(null,G__8003,G__8004));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__7991,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8005 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__8006 = expr__7999;
return (pred__7998.cljs$core$IFn$_invoke$arity$2 ? pred__7998.cljs$core$IFn$_invoke$arity$2(G__8005,G__8006) : pred__7998.call(null,G__8005,G__8006));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__7991,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8007 = cljs.core.cst$kw$start_DASH_pos;
var G__8008 = expr__7999;
return (pred__7998.cljs$core$IFn$_invoke$arity$2 ? pred__7998.cljs$core$IFn$_invoke$arity$2(G__8007,G__8008) : pred__7998.call(null,G__8007,G__8008));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__7991,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8009 = cljs.core.cst$kw$end_DASH_pos;
var G__8010 = expr__7999;
return (pred__7998.cljs$core$IFn$_invoke$arity$2 ? pred__7998.cljs$core$IFn$_invoke$arity$2(G__8009,G__8010) : pred__7998.call(null,G__8009,G__8010));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__7991,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__7991),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__7991){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__7991,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data__$1,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data__$1,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__7995){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__7995),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__7995),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__7995),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__7995),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__7995),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7995,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data__$1,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data__$1,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__7780__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__7780__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8013,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8017 = k8013;
var G__8017__$1 = (((G__8017 instanceof cljs.core.Keyword))?G__8017.fqn:null);
switch (G__8017__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8013,else__4175__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8012){
var self__ = this;
var G__8012__$1 = this;
return (new cljs.core.RecordIter((0),G__8012__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8018 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8018(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8014,other8015){
var self__ = this;
var this8014__$1 = this;
return ((!((other8015 == null))) && ((this8014__$1.constructor === other8015.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8014__$1.type_tag,other8015.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8014__$1.type,other8015.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8014__$1.logical_block,other8015.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8014__$1.start_pos,other8015.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8014__$1.end_pos,other8015.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8014__$1.__extmap,other8015.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8012){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8019 = cljs.core.keyword_identical_QMARK_;
var expr__8020 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8022 = cljs.core.cst$kw$type_DASH_tag;
var G__8023 = expr__8020;
return (pred__8019.cljs$core$IFn$_invoke$arity$2 ? pred__8019.cljs$core$IFn$_invoke$arity$2(G__8022,G__8023) : pred__8019.call(null,G__8022,G__8023));
})())){
return (new cljs.pprint.nl_t(G__8012,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8024 = cljs.core.cst$kw$type;
var G__8025 = expr__8020;
return (pred__8019.cljs$core$IFn$_invoke$arity$2 ? pred__8019.cljs$core$IFn$_invoke$arity$2(G__8024,G__8025) : pred__8019.call(null,G__8024,G__8025));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__8012,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8026 = cljs.core.cst$kw$logical_DASH_block;
var G__8027 = expr__8020;
return (pred__8019.cljs$core$IFn$_invoke$arity$2 ? pred__8019.cljs$core$IFn$_invoke$arity$2(G__8026,G__8027) : pred__8019.call(null,G__8026,G__8027));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__8012,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8028 = cljs.core.cst$kw$start_DASH_pos;
var G__8029 = expr__8020;
return (pred__8019.cljs$core$IFn$_invoke$arity$2 ? pred__8019.cljs$core$IFn$_invoke$arity$2(G__8028,G__8029) : pred__8019.call(null,G__8028,G__8029));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__8012,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8030 = cljs.core.cst$kw$end_DASH_pos;
var G__8031 = expr__8020;
return (pred__8019.cljs$core$IFn$_invoke$arity$2 ? pred__8019.cljs$core$IFn$_invoke$arity$2(G__8030,G__8031) : pred__8019.call(null,G__8030,G__8031));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__8012,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8012),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8012){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__8012,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__8016){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8016),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__8016),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8016),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8016),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8016),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8016,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__7780__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__7780__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8034,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8038 = k8034;
var G__8038__$1 = (((G__8038 instanceof cljs.core.Keyword))?G__8038.fqn:null);
switch (G__8038__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8034,else__4175__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8033){
var self__ = this;
var G__8033__$1 = this;
return (new cljs.core.RecordIter((0),G__8033__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8039 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8039(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8035,other8036){
var self__ = this;
var this8035__$1 = this;
return ((!((other8036 == null))) && ((this8035__$1.constructor === other8036.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8035__$1.type_tag,other8036.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8035__$1.logical_block,other8036.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8035__$1.start_pos,other8036.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8035__$1.end_pos,other8036.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8035__$1.__extmap,other8036.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8033){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8040 = cljs.core.keyword_identical_QMARK_;
var expr__8041 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8043 = cljs.core.cst$kw$type_DASH_tag;
var G__8044 = expr__8041;
return (pred__8040.cljs$core$IFn$_invoke$arity$2 ? pred__8040.cljs$core$IFn$_invoke$arity$2(G__8043,G__8044) : pred__8040.call(null,G__8043,G__8044));
})())){
return (new cljs.pprint.start_block_t(G__8033,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8045 = cljs.core.cst$kw$logical_DASH_block;
var G__8046 = expr__8041;
return (pred__8040.cljs$core$IFn$_invoke$arity$2 ? pred__8040.cljs$core$IFn$_invoke$arity$2(G__8045,G__8046) : pred__8040.call(null,G__8045,G__8046));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__8033,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8047 = cljs.core.cst$kw$start_DASH_pos;
var G__8048 = expr__8041;
return (pred__8040.cljs$core$IFn$_invoke$arity$2 ? pred__8040.cljs$core$IFn$_invoke$arity$2(G__8047,G__8048) : pred__8040.call(null,G__8047,G__8048));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__8033,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8049 = cljs.core.cst$kw$end_DASH_pos;
var G__8050 = expr__8041;
return (pred__8040.cljs$core$IFn$_invoke$arity$2 ? pred__8040.cljs$core$IFn$_invoke$arity$2(G__8049,G__8050) : pred__8040.call(null,G__8049,G__8050));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__8033,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8033),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8033){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__8033,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__8037){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8037),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8037),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8037),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8037),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8037,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__7780__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__7780__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8053,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8057 = k8053;
var G__8057__$1 = (((G__8057 instanceof cljs.core.Keyword))?G__8057.fqn:null);
switch (G__8057__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8053,else__4175__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8052){
var self__ = this;
var G__8052__$1 = this;
return (new cljs.core.RecordIter((0),G__8052__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8058 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8058(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8054,other8055){
var self__ = this;
var this8054__$1 = this;
return ((!((other8055 == null))) && ((this8054__$1.constructor === other8055.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8054__$1.type_tag,other8055.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8054__$1.logical_block,other8055.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8054__$1.start_pos,other8055.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8054__$1.end_pos,other8055.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8054__$1.__extmap,other8055.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8052){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8059 = cljs.core.keyword_identical_QMARK_;
var expr__8060 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8062 = cljs.core.cst$kw$type_DASH_tag;
var G__8063 = expr__8060;
return (pred__8059.cljs$core$IFn$_invoke$arity$2 ? pred__8059.cljs$core$IFn$_invoke$arity$2(G__8062,G__8063) : pred__8059.call(null,G__8062,G__8063));
})())){
return (new cljs.pprint.end_block_t(G__8052,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8064 = cljs.core.cst$kw$logical_DASH_block;
var G__8065 = expr__8060;
return (pred__8059.cljs$core$IFn$_invoke$arity$2 ? pred__8059.cljs$core$IFn$_invoke$arity$2(G__8064,G__8065) : pred__8059.call(null,G__8064,G__8065));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__8052,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8066 = cljs.core.cst$kw$start_DASH_pos;
var G__8067 = expr__8060;
return (pred__8059.cljs$core$IFn$_invoke$arity$2 ? pred__8059.cljs$core$IFn$_invoke$arity$2(G__8066,G__8067) : pred__8059.call(null,G__8066,G__8067));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__8052,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8068 = cljs.core.cst$kw$end_DASH_pos;
var G__8069 = expr__8060;
return (pred__8059.cljs$core$IFn$_invoke$arity$2 ? pred__8059.cljs$core$IFn$_invoke$arity$2(G__8068,G__8069) : pred__8059.call(null,G__8068,G__8069));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__8052,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8052),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8052){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__8052,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__8056){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8056),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8056),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8056),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8056),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8056,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__7780__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__7780__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8072,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8076 = k8072;
var G__8076__$1 = (((G__8076 instanceof cljs.core.Keyword))?G__8076.fqn:null);
switch (G__8076__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8072,else__4175__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8071){
var self__ = this;
var G__8071__$1 = this;
return (new cljs.core.RecordIter((0),G__8071__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8077 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8077(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8073,other8074){
var self__ = this;
var this8073__$1 = this;
return ((!((other8074 == null))) && ((this8073__$1.constructor === other8074.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.type_tag,other8074.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.logical_block,other8074.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.relative_to,other8074.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.offset,other8074.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.start_pos,other8074.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.end_pos,other8074.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8073__$1.__extmap,other8074.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8071){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8078 = cljs.core.keyword_identical_QMARK_;
var expr__8079 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8081 = cljs.core.cst$kw$type_DASH_tag;
var G__8082 = expr__8079;
return (pred__8078.cljs$core$IFn$_invoke$arity$2 ? pred__8078.cljs$core$IFn$_invoke$arity$2(G__8081,G__8082) : pred__8078.call(null,G__8081,G__8082));
})())){
return (new cljs.pprint.indent_t(G__8071,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8083 = cljs.core.cst$kw$logical_DASH_block;
var G__8084 = expr__8079;
return (pred__8078.cljs$core$IFn$_invoke$arity$2 ? pred__8078.cljs$core$IFn$_invoke$arity$2(G__8083,G__8084) : pred__8078.call(null,G__8083,G__8084));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__8071,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8085 = cljs.core.cst$kw$relative_DASH_to;
var G__8086 = expr__8079;
return (pred__8078.cljs$core$IFn$_invoke$arity$2 ? pred__8078.cljs$core$IFn$_invoke$arity$2(G__8085,G__8086) : pred__8078.call(null,G__8085,G__8086));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__8071,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8087 = cljs.core.cst$kw$offset;
var G__8088 = expr__8079;
return (pred__8078.cljs$core$IFn$_invoke$arity$2 ? pred__8078.cljs$core$IFn$_invoke$arity$2(G__8087,G__8088) : pred__8078.call(null,G__8087,G__8088));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__8071,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8089 = cljs.core.cst$kw$start_DASH_pos;
var G__8090 = expr__8079;
return (pred__8078.cljs$core$IFn$_invoke$arity$2 ? pred__8078.cljs$core$IFn$_invoke$arity$2(G__8089,G__8090) : pred__8078.call(null,G__8089,G__8090));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__8071,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8091 = cljs.core.cst$kw$end_DASH_pos;
var G__8092 = expr__8079;
return (pred__8078.cljs$core$IFn$_invoke$arity$2 ? pred__8078.cljs$core$IFn$_invoke$arity$2(G__8091,G__8092) : pred__8078.call(null,G__8091,G__8092));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__8071,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8071),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8071){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__8071,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__8075){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8075),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8075),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__8075),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__8075),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8075),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8075),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8075,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__7780__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__7780__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p1__8095_SHARP_,p2__8094_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__8094_SHARP_);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___8097 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8097)){
var cb_8098 = temp__5535__auto___8097;
var G__8096_8099 = cljs.core.cst$kw$start;
(cb_8098.cljs$core$IFn$_invoke$arity$1 ? cb_8098.cljs$core$IFn$_invoke$arity$1(G__8096_8099) : cb_8098.call(null,G__8096_8099));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5535__auto___8100 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5535__auto___8100)){
var prefix_8101 = temp__5535__auto___8100;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_8101);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___8103 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8103)){
var cb_8104 = temp__5535__auto___8103;
var G__8102_8105 = cljs.core.cst$kw$end;
(cb_8104.cljs$core$IFn$_invoke$arity$1 ? cb_8104.cljs$core$IFn$_invoke$arity$1(G__8102_8105) : cb_8104.call(null,G__8102_8105));
} else {
}

var temp__5535__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5535__auto__)){
var suffix = temp__5535__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__8106 = cljs.core._EQ_;
var expr__8107 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__8109 = cljs.core.cst$kw$block;
var G__8110 = expr__8107;
return (pred__8106.cljs$core$IFn$_invoke$arity$2 ? pred__8106.cljs$core$IFn$_invoke$arity$2(G__8109,G__8110) : pred__8106.call(null,G__8109,G__8110));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__8111 = cljs.core.cst$kw$current;
var G__8112 = expr__8107;
return (pred__8106.cljs$core$IFn$_invoke$arity$2 ? pred__8106.cljs$core$IFn$_invoke$arity$2(G__8111,G__8112) : pred__8106.call(null,G__8111,G__8112));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8107)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__3911__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__3911__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5533__auto___8113 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___8113)){
var tws_8114 = temp__5533__auto___8113;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8114);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__8115 = cljs.core.seq(tokens);
var chunk__8116 = null;
var count__8117 = (0);
var i__8118 = (0);
while(true){
if((i__8118 < count__8117)){
var token = chunk__8116.cljs$core$IIndexed$_nth$arity$2(null,i__8118);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___8119 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___8119)){
var tws_8120 = temp__5533__auto___8119;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8120);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_8121 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_8121;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8121);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__8122 = seq__8115;
var G__8123 = chunk__8116;
var G__8124 = count__8117;
var G__8125 = (i__8118 + (1));
seq__8115 = G__8122;
chunk__8116 = G__8123;
count__8117 = G__8124;
i__8118 = G__8125;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__8115);
if(temp__5535__auto__){
var seq__8115__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8115__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__8115__$1);
var G__8126 = cljs.core.chunk_rest(seq__8115__$1);
var G__8127 = c__4319__auto__;
var G__8128 = cljs.core.count(c__4319__auto__);
var G__8129 = (0);
seq__8115 = G__8126;
chunk__8116 = G__8127;
count__8117 = G__8128;
i__8118 = G__8129;
continue;
} else {
var token = cljs.core.first(seq__8115__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___8130 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___8130)){
var tws_8131 = temp__5533__auto___8130;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8131);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_8132 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_8132;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8132);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__8133 = cljs.core.next(seq__8115__$1);
var G__8134 = null;
var G__8135 = (0);
var G__8136 = (0);
seq__8115 = G__8133;
chunk__8116 = G__8134;
count__8117 = G__8135;
i__8118 = G__8136;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__3922__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__3911__auto__ = miser_width;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = maxcol;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__3911__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__3922__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__8137_SHARP_){
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__8137_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__8137_SHARP_),lb);
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__8138_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__8138_SHARP_);
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__8138_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__8139 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__8139;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_8140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_8140);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__8141_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__8141_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__8142 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__8145 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8145,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8145,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__8148 = newl;
var G__8149 = this$;
var G__8150 = section;
var G__8151 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__8148,G__8149,G__8150,G__8151) : cljs.pprint.emit_nl_QMARK_.call(null,G__8148,G__8149,G__8150,G__8151));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__8152 = new_buffer;
buffer = G__8152;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5533__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto__)){
var buf = temp__5533__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5535__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto__)){
var tws = temp__5535__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_8157 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_8158 = (oldpos_8157 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_8158);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_8157,newpos_8158));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__8153_8159 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__8154_8160 = null;
var count__8155_8161 = (0);
var i__8156_8162 = (0);
while(true){
if((i__8156_8162 < count__8155_8161)){
var l_8163__$1 = chunk__8154_8160.cljs$core$IIndexed$_nth$arity$2(null,i__8156_8162);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_8163__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__8164 = seq__8153_8159;
var G__8165 = chunk__8154_8160;
var G__8166 = count__8155_8161;
var G__8167 = (i__8156_8162 + (1));
seq__8153_8159 = G__8164;
chunk__8154_8160 = G__8165;
count__8155_8161 = G__8166;
i__8156_8162 = G__8167;
continue;
} else {
var temp__5535__auto___8168 = cljs.core.seq(seq__8153_8159);
if(temp__5535__auto___8168){
var seq__8153_8169__$1 = temp__5535__auto___8168;
if(cljs.core.chunked_seq_QMARK_(seq__8153_8169__$1)){
var c__4319__auto___8170 = cljs.core.chunk_first(seq__8153_8169__$1);
var G__8171 = cljs.core.chunk_rest(seq__8153_8169__$1);
var G__8172 = c__4319__auto___8170;
var G__8173 = cljs.core.count(c__4319__auto___8170);
var G__8174 = (0);
seq__8153_8159 = G__8171;
chunk__8154_8160 = G__8172;
count__8155_8161 = G__8173;
i__8156_8162 = G__8174;
continue;
} else {
var l_8175__$1 = cljs.core.first(seq__8153_8169__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_8175__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__8176 = cljs.core.next(seq__8153_8169__$1);
var G__8177 = null;
var G__8178 = (0);
var G__8179 = (0);
seq__8153_8159 = G__8176;
chunk__8154_8160 = G__8177;
count__8155_8161 = G__8178;
i__8156_8162 = G__8179;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint8180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8180 = (function (writer,max_columns,miser_width,lb,fields,meta8181){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta8181 = meta8181;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_8182,meta8181__$1){
var self__ = this;
var _8182__$1 = this;
return (new cljs.pprint.t_cljs$pprint8180(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta8181__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_8182){
var self__ = this;
var _8182__$1 = this;
return self__.meta8181;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8183 = cljs.core._EQ_;
var expr__8184 = cljs.core.type(x);
if(cljs.core.truth_((pred__8183.cljs$core$IFn$_invoke$arity$2 ? pred__8183.cljs$core$IFn$_invoke$arity$2(String,expr__8184) : pred__8183.call(null,String,expr__8184)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__8183.cljs$core$IFn$_invoke$arity$2 ? pred__8183.cljs$core$IFn$_invoke$arity$2(Number,expr__8184) : pred__8183.call(null,Number,expr__8184)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8184)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint8180.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta8181], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8180.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8180.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8180";

cljs.pprint.t_cljs$pprint8180.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8180");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8180.
 */
cljs.pprint.__GT_t_cljs$pprint8180 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint8180(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta8181){
return (new cljs.pprint.t_cljs$pprint8180(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta8181));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint8180(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5535__auto___8187 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8187)){
var cb_8188 = temp__5535__auto___8187;
var G__8186_8189 = cljs.core.cst$kw$start;
(cb_8188.cljs$core$IFn$_invoke$arity$1 ? cb_8188.cljs$core$IFn$_invoke$arity$1(G__8186_8189) : cb_8188.call(null,G__8186_8189));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5535__auto___8191 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8191)){
var cb_8192 = temp__5535__auto___8191;
var G__8190_8193 = cljs.core.cst$kw$end;
(cb_8192.cljs$core$IFn$_invoke$arity$1 ? cb_8192.cljs$core$IFn$_invoke$arity$1(G__8190_8193) : cb_8192.call(null,G__8190_8193));
} else {
}
} else {
var oldpos_8194 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_8195 = (oldpos_8194 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_8195);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_8194,newpos_8195));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__8196 = cljs.core._EQ_;
var expr__8197 = relative_to;
if(cljs.core.truth_((function (){var G__8199 = cljs.core.cst$kw$block;
var G__8200 = expr__8197;
return (pred__8196.cljs$core$IFn$_invoke$arity$2 ? pred__8196.cljs$core$IFn$_invoke$arity$2(G__8199,G__8200) : pred__8196.call(null,G__8199,G__8200));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__8201 = cljs.core.cst$kw$current;
var G__8202 = expr__8197;
return (pred__8196.cljs$core$IFn$_invoke$arity$2 ? pred__8196.cljs$core$IFn$_invoke$arity$2(G__8201,G__8202) : pred__8196.call(null,G__8201,G__8202));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8197)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__8203_SHARP_){
var temp__5535__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__8203_SHARP_));
if(cljs.core.truth_(temp__5535__auto__)){
var v = temp__5535__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__8203_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__3911__auto__ = ((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__3911__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__3911__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__3911__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__3911__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8222 = arguments.length;
var i__4500__auto___8223 = (0);
while(true){
if((i__4500__auto___8223 < len__4499__auto___8222)){
args__4502__auto__.push((arguments[i__4500__auto___8223]));

var G__8224 = (i__4500__auto___8223 + (1));
i__4500__auto___8223 = G__8224;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_8208 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_8209 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_8210 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_8211 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_8212 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_8213 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_8214 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_8215 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_8216 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_8217 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_8218 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_8219 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__7763__auto___8225 = base_writer;
var new_writer__7764__auto___8226 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__7763__auto___8225));
var _STAR_out_STAR_8220_8227 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__7764__auto___8226)?cljs.pprint.make_pretty_writer(base_writer__7763__auto___8225,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__7763__auto___8225);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8220_8227;
}} else {
var _STAR_out_STAR_8221_8228 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8221_8228;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_8219;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_8218;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_8217;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_8216;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_8215;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_8214;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_8213;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_8212;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_8211;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_8210;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_8209;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_8208;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq8206){
var G__8207 = cljs.core.first(seq8206);
var seq8206__$1 = cljs.core.next(seq8206);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8207,seq8206__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__8230 = arguments.length;
switch (G__8230) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_8231 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8231;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__7763__auto__ = writer;
var new_writer__7764__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__7763__auto__));
var _STAR_out_STAR_8232 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__7764__auto__)?cljs.pprint.make_pretty_writer(base_writer__7763__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__7763__auto__);

try{var _STAR_print_pretty_STAR_8233_8235 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_8233_8235;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8232;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__3911__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__3911__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8239 = arguments.length;
var i__4500__auto___8240 = (0);
while(true){
if((i__4500__auto___8240 < len__4499__auto___8239)){
args__4502__auto__.push((arguments[i__4500__auto___8240]));

var G__8241 = (i__4500__auto___8240 + (1));
i__4500__auto___8240 = G__8241;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq8236){
var G__8237 = cljs.core.first(seq8236);
var seq8236__$1 = cljs.core.next(seq8236);
var G__8238 = cljs.core.first(seq8236__$1);
var seq8236__$2 = cljs.core.next(seq8236__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8237,G__8238,seq8236__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8243,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8247 = k8243;
var G__8247__$1 = (((G__8247 instanceof cljs.core.Keyword))?G__8247.fqn:null);
switch (G__8247__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8243,else__4175__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8242){
var self__ = this;
var G__8242__$1 = this;
return (new cljs.core.RecordIter((0),G__8242__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8248 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8248(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8244,other8245){
var self__ = this;
var this8244__$1 = this;
return ((!((other8245 == null))) && ((this8244__$1.constructor === other8245.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8244__$1.seq,other8245.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8244__$1.rest,other8245.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8244__$1.pos,other8245.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8244__$1.__extmap,other8245.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8242){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8249 = cljs.core.keyword_identical_QMARK_;
var expr__8250 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8252 = cljs.core.cst$kw$seq;
var G__8253 = expr__8250;
return (pred__8249.cljs$core$IFn$_invoke$arity$2 ? pred__8249.cljs$core$IFn$_invoke$arity$2(G__8252,G__8253) : pred__8249.call(null,G__8252,G__8253));
})())){
return (new cljs.pprint.arg_navigator(G__8242,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8254 = cljs.core.cst$kw$rest;
var G__8255 = expr__8250;
return (pred__8249.cljs$core$IFn$_invoke$arity$2 ? pred__8249.cljs$core$IFn$_invoke$arity$2(G__8254,G__8255) : pred__8249.call(null,G__8254,G__8255));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__8242,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8256 = cljs.core.cst$kw$pos;
var G__8257 = expr__8250;
return (pred__8249.cljs$core$IFn$_invoke$arity$2 ? pred__8249.cljs$core$IFn$_invoke$arity$2(G__8256,G__8257) : pred__8249.call(null,G__8256,G__8257));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__8242,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8242),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8242){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__8242,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__8246){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__8246),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__8246),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__8246),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8246,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__8259 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8259,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8259,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__8262 = navigator;
var G__8263 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__8262,G__8263) : cljs.pprint.relative_reposition.call(null,G__8262,G__8263));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8265,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8269 = k8265;
var G__8269__$1 = (((G__8269 instanceof cljs.core.Keyword))?G__8269.fqn:null);
switch (G__8269__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8265,else__4175__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8264){
var self__ = this;
var G__8264__$1 = this;
return (new cljs.core.RecordIter((0),G__8264__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8270 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8270(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8266,other8267){
var self__ = this;
var this8266__$1 = this;
return ((!((other8267 == null))) && ((this8266__$1.constructor === other8267.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8266__$1.func,other8267.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8266__$1.def,other8267.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8266__$1.params,other8267.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8266__$1.offset,other8267.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8266__$1.__extmap,other8267.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8264){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8271 = cljs.core.keyword_identical_QMARK_;
var expr__8272 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8274 = cljs.core.cst$kw$func;
var G__8275 = expr__8272;
return (pred__8271.cljs$core$IFn$_invoke$arity$2 ? pred__8271.cljs$core$IFn$_invoke$arity$2(G__8274,G__8275) : pred__8271.call(null,G__8274,G__8275));
})())){
return (new cljs.pprint.compiled_directive(G__8264,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8276 = cljs.core.cst$kw$def;
var G__8277 = expr__8272;
return (pred__8271.cljs$core$IFn$_invoke$arity$2 ? pred__8271.cljs$core$IFn$_invoke$arity$2(G__8276,G__8277) : pred__8271.call(null,G__8276,G__8277));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__8264,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8278 = cljs.core.cst$kw$params;
var G__8279 = expr__8272;
return (pred__8271.cljs$core$IFn$_invoke$arity$2 ? pred__8271.cljs$core$IFn$_invoke$arity$2(G__8278,G__8279) : pred__8271.call(null,G__8278,G__8279));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__8264,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8280 = cljs.core.cst$kw$offset;
var G__8281 = expr__8272;
return (pred__8271.cljs$core$IFn$_invoke$arity$2 ? pred__8271.cljs$core$IFn$_invoke$arity$2(G__8280,G__8281) : pred__8271.call(null,G__8280,G__8281));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__8264,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8264),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8264){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__8264,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__8268){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__8268),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__8268),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__8268),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__8268),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8268,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__8283,navigator){
var vec__8284 = p__8283;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8284,(0),null);
var vec__8287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8284,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8287,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8287,(1),null);
var vec__8290 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8290,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8290,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__8293 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8293,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8293,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__8296 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8296,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8296,(1),null);
var base_output = (function (){var or__3922__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__8299_SHARP_){
if((p1__8299_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__8299_SHARP_,base),cljs.core.quot(p1__8299_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__8300_SHARP_){
if((p1__8300_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__8300_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__8300_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__8302 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8302,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8302,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_8305 = (arg < (0));
var pos_arg_8306 = ((neg_8305)?(- arg):arg);
var raw_str_8307 = cljs.pprint.opt_base_str(base,pos_arg_8306);
var group_str_8308 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_8305,pos_arg_8306,raw_str_8307,vec__8302,arg,arg_navigator__$1){
return (function (p1__8301_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__8301_SHARP_);
});})(neg_8305,pos_arg_8306,raw_str_8307,vec__8302,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_8307));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_8307);
var signed_str_8309 = ((neg_8305)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_8308)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_8308)].join(''):group_str_8308
));
var padded_str_8310 = (((signed_str_8309.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_8309.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_8309)].join(''):signed_str_8309);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_8310], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc)))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__8311 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__8312 = (pos - (1));
var G__8313 = cljs.core.first(remainder);
var G__8314 = cljs.core.next(remainder);
acc = G__8311;
pos = G__8312;
this$ = G__8313;
remainder = G__8314;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__8315 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8315,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8315,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_8318 = (((arg < (0)))?(- arg):arg);
var parts_8319 = cljs.pprint.remainders((1000),abs_arg_8318);
if((cljs.core.count(parts_8319) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_8320 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_8319);
var full_str_8321 = cljs.pprint.add_english_scales(parts_strs_8320,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_8321)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && (!((unit_digit > (0)))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__8322 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8322,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8322,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_8325 = (((arg < (0)))?(- arg):arg);
var parts_8326 = cljs.pprint.remainders((1000),abs_arg_8325);
if((cljs.core.count(parts_8326) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_8327 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_8326));
var head_str_8328 = cljs.pprint.add_english_scales(parts_strs_8327,(1));
var tail_str_8329 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_8326));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(head_str_8328))) && (!(cljs.core.empty_QMARK_(tail_str_8329)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_8328),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_8329)].join(''):((!(cljs.core.empty_QMARK_(head_str_8328)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_8328),"th"].join(''):tail_str_8329
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_8330 = cljs.core.rem(arg,(100));
var not_teens_8331 = ((((11) < low_two_digits_8330)) || (((19) > low_two_digits_8330)));
var low_digit_8332 = cljs.core.rem(low_two_digits_8330,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_8332 === (1))) && (not_teens_8331)))?"st":(((((low_digit_8332 === (2))) && (not_teens_8331)))?"nd":(((((low_digit_8332 === (3))) && (not_teens_8331)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__8333 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8333,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8333,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_8336 = cljs.pprint.remainders((10),arg);
var acc_8337 = cljs.core.PersistentVector.EMPTY;
var pos_8338 = (cljs.core.count(digits_8336) - (1));
var digits_8339__$1 = digits_8336;
while(true){
if(cljs.core.empty_QMARK_(digits_8339__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_8337)], 0));
} else {
var digit_8340 = cljs.core.first(digits_8339__$1);
var G__8341 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_8340))?acc_8337:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_8337,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_8338),(digit_8340 - (1)))));
var G__8342 = (pos_8338 - (1));
var G__8343 = cljs.core.next(digits_8339__$1);
acc_8337 = G__8341;
pos_8338 = G__8342;
digits_8339__$1 = G__8343;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__8344 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8344,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8344,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__8347 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8347,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8347,(1),null);
var pred__8350_8357 = cljs.core._EQ_;
var expr__8351_8358 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__8353 = "o";
var G__8354 = expr__8351_8358;
return (pred__8350_8357.cljs$core$IFn$_invoke$arity$2 ? pred__8350_8357.cljs$core$IFn$_invoke$arity$2(G__8353,G__8354) : pred__8350_8357.call(null,G__8353,G__8354));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__8355 = "u";
var G__8356 = expr__8351_8358;
return (pred__8350_8357.cljs$core$IFn$_invoke$arity$2 ? pred__8350_8357.cljs$core$IFn$_invoke$arity$2(G__8355,G__8356) : pred__8350_8357.call(null,G__8355,G__8356));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__8350_8357.cljs$core$IFn$_invoke$arity$2 ? pred__8350_8357.cljs$core$IFn$_invoke$arity$2(null,expr__8351_8358) : pred__8350_8357.call(null,null,expr__8351_8358)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8351_8358)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__8359 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8359,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8359,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__8362 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8362,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8362,(1),null);
var vec__8365 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8365,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8365,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__8368 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8368,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8368,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__8371 = (i - (1));
i = G__8371;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4006__auto__ = (2);
var y__4007__auto__ = w;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4006__auto__ = (e + (1));
var y__4007__auto__ = (w__$1 - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(w__$1 + e)
));
var vec__8372 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8372,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8372,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8372,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8372,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__8375 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8375,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8375,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__8378 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8378,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8378,(1),null);
var vec__8381 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8381,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8381,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__8384 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8384,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8384,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__8387 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8387,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8387,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8387,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = w;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = d;
if(cljs.core.truth_(and__3911__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_8390 = cljs.core.count(fixed_repr__$1);
var signed_len_8391 = (cljs.core.truth_(add_sign)?(len_8390 + (1)):len_8390);
var prepend_zero_8392__$1 = ((prepend_zero) && (!((signed_len_8391 >= w))));
var append_zero_8393__$1 = ((append_zero) && (!((signed_len_8391 >= w))));
var full_len_8394 = ((((prepend_zero_8392__$1) || (append_zero_8393__$1)))?(signed_len_8391 + (1)):signed_len_8391);
if(cljs.core.truth_((function (){var and__3911__auto__ = (full_len_8394 > w);
if(and__3911__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_8394),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_8392__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_8393__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__8395 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__8401_8411 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__8402_8412 = G__8401_8411;
var mantissa_8413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8402_8412,(0),null);
var exp_8414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8402_8412,(1),null);
var G__8401_8415__$1 = G__8401_8411;
while(true){
var vec__8405_8416 = G__8401_8415__$1;
var mantissa_8417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8405_8416,(0),null);
var exp_8418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8405_8416,(1),null);
var w_8419 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_8420 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_8421 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_8422 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_8423 = (function (){var or__3922__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "E";
}
})();
var add_sign_8424 = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_8425 = (k_8422 <= (0));
var scaled_exp_8426 = (exp_8418__$1 - (k_8422 - (1)));
var scaled_exp_str_8427 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_8426))].join('');
var scaled_exp_str_8428__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_8423),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_8426 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_8421)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_8421 - cljs.core.count(scaled_exp_str_8427)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_8427)].join('');
var exp_width_8429 = cljs.core.count(scaled_exp_str_8428__$1);
var base_mantissa_width_8430 = cljs.core.count(mantissa_8417__$1);
var scaled_mantissa_8431 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_8422),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_8417__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_8420)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_8420 - (base_mantissa_width_8430 - (1))) - (((k_8422 < (0)))?(- k_8422):(0))),"0")):null))].join('');
var w_mantissa_8432 = (cljs.core.truth_(w_8419)?(w_8419 - exp_width_8429):null);
var vec__8408_8433 = cljs.pprint.round_str(scaled_mantissa_8431,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_8422,(0)))?(d_8420 - (1)):(((k_8422 > (0)))?d_8420:(((k_8422 < (0)))?(d_8420 - (1)):null))),(cljs.core.truth_(w_mantissa_8432)?(w_mantissa_8432 - (cljs.core.truth_(add_sign_8424)?(1):(0))):null));
var rounded_mantissa_8434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8408_8433,(0),null);
var __8435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8408_8433,(1),null);
var incr_exp_8436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8408_8433,(2),null);
var full_mantissa_8437 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_8434,k_8422);
var append_zero_8438 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_8422,cljs.core.count(rounded_mantissa_8434))) && ((d_8420 == null)));
if(cljs.core.not(incr_exp_8436)){
if(cljs.core.truth_(w_8419)){
var len_8439 = (cljs.core.count(full_mantissa_8437) + exp_width_8429);
var signed_len_8440 = (cljs.core.truth_(add_sign_8424)?(len_8439 + (1)):len_8439);
var prepend_zero_8441__$1 = ((prepend_zero_8425) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_8440,w_8419))));
var full_len_8442 = ((prepend_zero_8441__$1)?(signed_len_8440 + (1)):signed_len_8440);
var append_zero_8443__$1 = ((append_zero_8438) && ((full_len_8442 < w_8419)));
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var or__3922__auto__ = (full_len_8442 > w_8419);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = e_8421;
if(cljs.core.truth_(and__3911__auto__)){
return ((exp_width_8429 - (2)) > e_8421);
} else {
return and__3911__auto__;
}
}
})();
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_8419,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_8419 - full_len_8442) - ((append_zero_8443__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_8424)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_8441__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_8437),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_8443__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_8428__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_8424)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_8425)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_8437),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_8438)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_8428__$1)].join('')], 0));
}
} else {
var G__8444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_8434,(exp_8418__$1 + (1))], null);
G__8401_8415__$1 = G__8444;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__8445 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8445,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8445,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__8448 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8448,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8448,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4006__auto__ = cljs.core.count(mantissa);
var y__4007__auto__ = (function (){var x__4009__auto__ = n;
var y__4010__auto__ = (7);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__8451 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8451,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8451,(1),null);
var vec__8454 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8454,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8454,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var vec__8457 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8457,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8457,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8457,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__3911__auto__){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__8460 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8460,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8460,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__8463 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8463,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8463,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__8466 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8466,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8466,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8469 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8469,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8469,(1),null);
var vec__8472 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8472,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8472,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__8475 = (count + (1));
var G__8476 = iter_result;
var G__8477 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__8475;
args__$1 = G__8476;
last_pos = G__8477;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8478 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8478,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8478,(1),null);
var vec__8481 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__8484 = (count + (1));
var G__8485 = cljs.core.next(arg_list__$1);
count = G__8484;
arg_list__$1 = G__8485;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8486 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8486,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8486,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__8489 = (count + (1));
var G__8490 = iter_result;
var G__8491 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__8489;
navigator__$2 = G__8490;
last_pos = G__8491;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8492 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8492,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8492,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__8495 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8495,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8495,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__8498 = (count + (1));
var G__8499 = navigator__$3;
count = G__8498;
navigator__$2 = G__8499;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__8500 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_8503 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8503;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__8504 = cljs.core.next(clauses__$1);
var G__8505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__8506 = iter_result;
clauses__$1 = G__8504;
acc = G__8505;
navigator__$1 = G__8506;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__8507 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var else$ = temp__5535__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__8510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8507,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8510,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8507,(1),null);
var navigator__$1 = (function (){var or__3922__auto__ = new_navigator;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator;
}
})();
var vec__8513 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8513,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8513,(1),null);
var navigator__$2 = (function (){var or__3922__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__8516 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8516,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8516,(1),null);
var slots = (function (){var x__4006__auto__ = (1);
var y__4007__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4006__auto__ = minpad;
var y__4007__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__3911__auto__ = eol_str;
if(cljs.core.truth_(and__3911__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_8519__$1 = slots;
var extra_pad_8520__$1 = extra_pad;
var strs_8521__$1 = strs;
var pad_only_8522 = (function (){var or__3922__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_8521__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_8521__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_8522))?cljs.core.first(strs_8521__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3922__auto__ = pad_only_8522;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.next(strs_8521__$1);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_8520__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__8523 = (slots_8519__$1 - (1));
var G__8524 = (extra_pad_8520__$1 - (1));
var G__8525 = (cljs.core.truth_(pad_only_8522)?strs_8521__$1:cljs.core.next(strs_8521__$1));
var G__8526 = false;
slots_8519__$1 = G__8523;
extra_pad_8520__$1 = G__8524;
strs_8521__$1 = G__8525;
pad_only_8522 = G__8526;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint8527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8527 = (function (writer,meta8528){
this.writer = writer;
this.meta8528 = meta8528;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8529,meta8528__$1){
var self__ = this;
var _8529__$1 = this;
return (new cljs.pprint.t_cljs$pprint8527(self__.writer,meta8528__$1));
});

cljs.pprint.t_cljs$pprint8527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8529){
var self__ = this;
var _8529__$1 = this;
return self__.meta8528;
});

cljs.pprint.t_cljs$pprint8527.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint8527.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8530 = cljs.core._EQ_;
var expr__8531 = cljs.core.type(x);
if(cljs.core.truth_((pred__8530.cljs$core$IFn$_invoke$arity$2 ? pred__8530.cljs$core$IFn$_invoke$arity$2(String,expr__8531) : pred__8530.call(null,String,expr__8531)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__8530.cljs$core$IFn$_invoke$arity$2 ? pred__8530.cljs$core$IFn$_invoke$arity$2(Number,expr__8531) : pred__8530.call(null,Number,expr__8531)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8531)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint8527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta8528], null);
});

cljs.pprint.t_cljs$pprint8527.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8527.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8527";

cljs.pprint.t_cljs$pprint8527.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8527");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8527.
 */
cljs.pprint.__GT_t_cljs$pprint8527 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint8527(writer__$1,meta8528){
return (new cljs.pprint.t_cljs$pprint8527(writer__$1,meta8528));
});

}

return (new cljs.pprint.t_cljs$pprint8527(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint8533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8533 = (function (writer,meta8534){
this.writer = writer;
this.meta8534 = meta8534;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8535,meta8534__$1){
var self__ = this;
var _8535__$1 = this;
return (new cljs.pprint.t_cljs$pprint8533(self__.writer,meta8534__$1));
});

cljs.pprint.t_cljs$pprint8533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8535){
var self__ = this;
var _8535__$1 = this;
return self__.meta8534;
});

cljs.pprint.t_cljs$pprint8533.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint8533.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8536 = cljs.core._EQ_;
var expr__8537 = cljs.core.type(x);
if(cljs.core.truth_((pred__8536.cljs$core$IFn$_invoke$arity$2 ? pred__8536.cljs$core$IFn$_invoke$arity$2(String,expr__8537) : pred__8536.call(null,String,expr__8537)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__8536.cljs$core$IFn$_invoke$arity$2 ? pred__8536.cljs$core$IFn$_invoke$arity$2(Number,expr__8537) : pred__8536.call(null,Number,expr__8537)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8537)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint8533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta8534], null);
});

cljs.pprint.t_cljs$pprint8533.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8533.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8533";

cljs.pprint.t_cljs$pprint8533.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8533");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8533.
 */
cljs.pprint.__GT_t_cljs$pprint8533 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint8533(writer__$1,meta8534){
return (new cljs.pprint.t_cljs$pprint8533(writer__$1,meta8534));
});

}

return (new cljs.pprint.t_cljs$pprint8533(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = first_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = f;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return (m.index + (1));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint8539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8539 = (function (writer,last_was_whitespace_QMARK_,meta8540){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta8540 = meta8540;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_8541,meta8540__$1){
var self__ = this;
var _8541__$1 = this;
return (new cljs.pprint.t_cljs$pprint8539(self__.writer,self__.last_was_whitespace_QMARK_,meta8540__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_8541){
var self__ = this;
var _8541__$1 = this;
return self__.meta8540;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8539.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8539.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8542 = cljs.core._EQ_;
var expr__8543 = cljs.core.type(x);
if(cljs.core.truth_((pred__8542.cljs$core$IFn$_invoke$arity$2 ? pred__8542.cljs$core$IFn$_invoke$arity$2(String,expr__8543) : pred__8542.call(null,String,expr__8543)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__8545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__8545);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__8542.cljs$core$IFn$_invoke$arity$2 ? pred__8542.cljs$core$IFn$_invoke$arity$2(Number,expr__8543) : pred__8542.call(null,Number,expr__8543)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8543)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8539.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta8540], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8539.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8539.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8539";

cljs.pprint.t_cljs$pprint8539.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8539");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8539.
 */
cljs.pprint.__GT_t_cljs$pprint8539 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint8539(writer__$1,last_was_whitespace_QMARK___$1,meta8540){
return (new cljs.pprint.t_cljs$pprint8539(writer__$1,last_was_whitespace_QMARK___$1,meta8540));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint8539(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint8546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8546 = (function (writer,capped,meta8547){
this.writer = writer;
this.capped = capped;
this.meta8547 = meta8547;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_8548,meta8547__$1){
var self__ = this;
var _8548__$1 = this;
return (new cljs.pprint.t_cljs$pprint8546(self__.writer,self__.capped,meta8547__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint8546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_8548){
var self__ = this;
var _8548__$1 = this;
return self__.meta8547;
});})(capped))
;

cljs.pprint.t_cljs$pprint8546.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint8546.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8549 = cljs.core._EQ_;
var expr__8550 = cljs.core.type(x);
if(cljs.core.truth_((pred__8549.cljs$core$IFn$_invoke$arity$2 ? pred__8549.cljs$core$IFn$_invoke$arity$2(String,expr__8550) : pred__8549.call(null,String,expr__8550)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return m.index;
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__8549.cljs$core$IFn$_invoke$arity$2 ? pred__8549.cljs$core$IFn$_invoke$arity$2(Number,expr__8550) : pred__8549.call(null,Number,expr__8550)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__3911__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8550)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint8546.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta8547], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint8546.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8546.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8546";

cljs.pprint.t_cljs$pprint8546.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8546");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8546.
 */
cljs.pprint.__GT_t_cljs$pprint8546 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint8546(writer__$1,capped__$1,meta8547){
return (new cljs.pprint.t_cljs$pprint8546(writer__$1,capped__$1,meta8547));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint8546(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_8552 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8552;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_8554 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_8555 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_8556 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_8557 = (((current_8556 < colnum_8554))?(colnum_8554 - current_8556):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_8555,(0)))?(0):(colinc_8555 - cljs.core.rem((current_8556 - colnum_8554),colinc_8555))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_8557," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_8558 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_8559 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_8560 = (colrel_8558 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_8561 = (((colinc_8559 > (0)))?cljs.core.rem(start_col_8560,colinc_8559):(0));
var space_count_8562 = (colrel_8558 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_8561))?(0):(colinc_8559 - offset_8561)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_8562," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__8563 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8563,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8563,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8566_8568 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8567_8569 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8567_8569;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8566_8568;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8570_SHARP_,p2__8571_SHARP_,p3__8572_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__8570_SHARP_,p2__8571_SHARP_,p3__8572_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8573_SHARP_,p2__8574_SHARP_,p3__8575_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__8573_SHARP_,p2__8574_SHARP_,p3__8575_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8576_SHARP_,p2__8577_SHARP_,p3__8578_SHARP_){
return cljs.pprint.format_integer((10),p1__8576_SHARP_,p2__8577_SHARP_,p3__8578_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8579_SHARP_,p2__8580_SHARP_,p3__8581_SHARP_){
return cljs.pprint.format_integer((2),p1__8579_SHARP_,p2__8580_SHARP_,p3__8581_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8582_SHARP_,p2__8583_SHARP_,p3__8584_SHARP_){
return cljs.pprint.format_integer((8),p1__8582_SHARP_,p2__8583_SHARP_,p3__8584_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8585_SHARP_,p2__8586_SHARP_,p3__8587_SHARP_){
return cljs.pprint.format_integer((16),p1__8585_SHARP_,p2__8586_SHARP_,p3__8587_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__8588_SHARP_,p2__8589_SHARP_,p3__8590_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__8588_SHARP_),p1__8588_SHARP_,p2__8589_SHARP_,p3__8590_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return (function (p1__8591_SHARP_,p2__8592_SHARP_,p3__8593_SHARP_){
return cljs.pprint.format_old_roman(p1__8591_SHARP_,p2__8592_SHARP_,p3__8593_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__8594_SHARP_,p2__8595_SHARP_,p3__8596_SHARP_){
return cljs.pprint.format_new_roman(p1__8594_SHARP_,p2__8595_SHARP_,p3__8596_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__8597_SHARP_,p2__8598_SHARP_,p3__8599_SHARP_){
return cljs.pprint.format_ordinal_english(p1__8597_SHARP_,p2__8598_SHARP_,p3__8599_SHARP_);
});
} else {
return (function (p1__8600_SHARP_,p2__8601_SHARP_,p3__8602_SHARP_){
return cljs.pprint.format_cardinal_english(p1__8600_SHARP_,p2__8601_SHARP_,p3__8602_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__8612 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8612,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8612,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___8630 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_8631 = (0);
while(true){
if((i_8631 < n__4376__auto___8630)){
cljs.pprint.prn();

var G__8632 = (i_8631 + (1));
i_8631 = G__8632;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_8633 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_8633 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4376__auto___8634 = (cnt_8633 - (1));
var i_8635 = (0);
while(true){
if((i_8635 < n__4376__auto___8634)){
cljs.pprint.prn();

var G__8636 = (i_8635 + (1));
i_8635 = G__8636;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___8637 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_8638 = (0);
while(true){
if((i_8638 < n__4376__auto___8637)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__8639 = (i_8638 + (1));
i_8638 = G__8639;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__8603_SHARP_,p2__8604_SHARP_,p3__8605_SHARP_){
return cljs.pprint.relative_tabulation(p1__8603_SHARP_,p2__8604_SHARP_,p3__8605_SHARP_);
});
} else {
return (function (p1__8606_SHARP_,p2__8607_SHARP_,p3__8608_SHARP_){
return cljs.pprint.absolute_tabulation(p1__8606_SHARP_,p2__8607_SHARP_,p3__8608_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__8615 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8615,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8615,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__8618 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8618,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8618,(1),null);
var vec__8621 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8621,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8621,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__8609_SHARP_,p2__8610_SHARP_,p3__8611_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__8609_SHARP_,p2__8610_SHARP_,p3__8611_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = arg2;
if(cljs.core.truth_(and__3911__auto____$1)){
return arg3;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
return arg2;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__8624 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8624,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8624,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__8627 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8627,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8627,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__8640){
var vec__8641 = p__8640;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8641,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8641,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8641,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__8644){
var vec__8645 = p__8644;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8645,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8645,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__8648){
var vec__8649 = p__8648;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8649,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8649,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8649,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4009__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4010__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__8652_SHARP_,p2__8653_SHARP_){
var val = cljs.core.first(p1__8652_SHARP_);
if(!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__8653_SHARP_)),cljs.core.type(val)))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__8653_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__8652_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4292__auto__ = (function cljs$pprint$map_params_$_iter__8657(s__8658){
return (new cljs.core.LazySeq(null,(function (){
var s__8658__$1 = s__8658;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__8658__$1);
if(temp__5535__auto__){
var s__8658__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8658__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__8658__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__8660 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__8659 = (0);
while(true){
if((i__8659 < size__4291__auto__)){
var vec__8661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__8659);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(0),null);
var vec__8664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8664,(0),null);
cljs.core.chunk_append(b__8660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__8673 = (i__8659 + (1));
i__8659 = G__8673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8660),cljs$pprint$map_params_$_iter__8657(cljs.core.chunk_rest(s__8658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8660),null);
}
} else {
var vec__8667 = cljs.core.first(s__8658__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8667,(0),null);
var vec__8670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8667,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8670,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__8657(cljs.core.rest(s__8658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8654_SHARP_,p2__8655_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__8654_SHARP_,p2__8655_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__8656_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__8656_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__8674 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8674,(0),null);
var vec__8677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8674,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8677,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8677,(1),null);
var vec__8680 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8680,(0),null);
var vec__8683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8680,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8683,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8683,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8683,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__8686 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__8686.cljs$core$IFn$_invoke$arity$2 ? fexpr__8686.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__8686.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__3911__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__3911__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__8687 = (function (){var G__8690 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__8691 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__8692 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__8690,G__8691,G__8692) : cljs.pprint.collect_clauses.call(null,G__8690,G__8691,G__8692));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__8693){
var vec__8694 = p__8693;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8694,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8694,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8694,(2),null);
var vec__8697 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8697,(0),null);
var vec__8700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8697,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_8703 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_8703){
return (function (p__8704){
var vec__8705 = p__8704;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_8703))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_8703;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__8708 = cljs.core.next(format__$1);
format__$1 = G__8708;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__8710 = arguments.length;
switch (G__8710) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__3911__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_8711 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8711;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__8712 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8712,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8712,(1),null);
var vec__8715 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8715,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8715,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__8719 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__8719) : cljs.pprint.reader_macros.call(null,G__8719));
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = macro_char;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8720_8723 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8721_8724 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count8722_8725 = (0);
var alis_8726__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8722_8725 < cljs.core._STAR_print_length_STAR_)))){
if(alis_8726__$1){
cljs.pprint.write_out(cljs.core.first(alis_8726__$1));

if(cljs.core.next(alis_8726__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8727 = (length_count8722_8725 + (1));
var G__8728 = cljs.core.next(alis_8726__$1);
length_count8722_8725 = G__8727;
alis_8726__$1 = G__8728;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8721_8724;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8720_8723;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8729_8732 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8730_8733 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count8731_8734 = (0);
var aseq_8735 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8731_8734 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_8735){
cljs.pprint.write_out(cljs.core.first(aseq_8735));

if(cljs.core.next(aseq_8735)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8736 = (length_count8731_8734 + (1));
var G__8737 = cljs.core.next(aseq_8735);
length_count8731_8734 = G__8736;
aseq_8735 = G__8737;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8730_8733;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8729_8732;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__7828__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8738__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8738 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8739__i = 0, G__8739__a = new Array(arguments.length -  0);
while (G__8739__i < G__8739__a.length) {G__8739__a[G__8739__i] = arguments[G__8739__i + 0]; ++G__8739__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8739__a,0,null);
} 
return G__8738__delegate.call(this,args__7830__auto__);};
G__8738.cljs$lang$maxFixedArity = 0;
G__8738.cljs$lang$applyTo = (function (arglist__8740){
var args__7830__auto__ = cljs.core.seq(arglist__8740);
return G__8738__delegate(args__7830__auto__);
});
G__8738.cljs$core$IFn$_invoke$arity$variadic = G__8738__delegate;
return G__8738;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__8741 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__8744 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10104,10104,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__8744.cljs$core$IFn$_invoke$arity$1 ? fexpr__8744.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__8744.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8741,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8741,(1),null);
var amap__$1 = (function (){var or__3922__auto__ = lift_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8745_8750 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8746_8751 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count8747_8752 = (0);
var aseq_8753 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8747_8752 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_8753){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8748_8754 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8749_8755 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_8753));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_8753)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8749_8755;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8748_8754;
}}


if(cljs.core.next(aseq_8753)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8756 = (length_count8747_8752 + (1));
var G__8757 = cljs.core.next(aseq_8753);
length_count8747_8752 = G__8756;
aseq_8753 = G__8757;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8746_8751;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8745_8750;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__7828__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8758__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8758 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8759__i = 0, G__8759__a = new Array(arguments.length -  0);
while (G__8759__i < G__8759__a.length) {G__8759__a[G__8759__i] = arguments[G__8759__i + 0]; ++G__8759__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8759__a,0,null);
} 
return G__8758__delegate.call(this,args__7830__auto__);};
G__8758.cljs$lang$maxFixedArity = 0;
G__8758.cljs$lang$applyTo = (function (arglist__8760){
var args__7830__auto__ = cljs.core.seq(arglist__8760);
return G__8758__delegate(args__7830__auto__);
});
G__8758.cljs$core$IFn$_invoke$arity$variadic = G__8758__delegate;
return G__8758;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__3922__auto__ = (function (){var temp__5535__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5535__auto__)){
var match = temp__5535__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8761_8765 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8762_8766 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__3911__auto__ = ((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__3911__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__3911__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8762_8766;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8761_8765;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__7828__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8767__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8767 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8768__i = 0, G__8768__a = new Array(arguments.length -  0);
while (G__8768__i < G__8768__a.length) {G__8768__a[G__8768__i] = arguments[G__8768__i + 0]; ++G__8768__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8768__a,0,null);
} 
return G__8767__delegate.call(this,args__7830__auto__);};
G__8767.cljs$lang$maxFixedArity = 0;
G__8767.cljs$lang$applyTo = (function (arglist__8769){
var args__7830__auto__ = cljs.core.seq(arglist__8769);
return G__8767__delegate(args__7830__auto__);
});
G__8767.cljs$core$IFn$_invoke$arity$variadic = G__8767__delegate;
return G__8767;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__8771 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8771,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8771,(1),null);
var vec__8774 = reference;
var seq__8775 = cljs.core.seq(vec__8774);
var first__8776 = cljs.core.first(seq__8775);
var seq__8775__$1 = cljs.core.next(seq__8775);
var keyw = first__8776;
var args = seq__8775__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8777_8793 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8778_8794 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__8779_8795 = (function (){var format_in__7828__auto__ = "~w~:i";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8796__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8796 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8797__i = 0, G__8797__a = new Array(arguments.length -  0);
while (G__8797__i < G__8797__a.length) {G__8797__a[G__8797__i] = arguments[G__8797__i + 0]; ++G__8797__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8797__a,0,null);
} 
return G__8796__delegate.call(this,args__7830__auto__);};
G__8796.cljs$lang$maxFixedArity = 0;
G__8796.cljs$lang$applyTo = (function (arglist__8798){
var args__7830__auto__ = cljs.core.seq(arglist__8798);
return G__8796__delegate(args__7830__auto__);
});
G__8796.cljs$core$IFn$_invoke$arity$variadic = G__8796__delegate;
return G__8796;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})();
(fexpr__8779_8795.cljs$core$IFn$_invoke$arity$1 ? fexpr__8779_8795.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__8779_8795.call(null,keyw));

var args_8799__$1 = args;
while(true){
if(cljs.core.seq(args_8799__$1)){
var fexpr__8780_8800 = (function (){var format_in__7828__auto__ = " ";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (args_8799__$1,format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8801__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8801 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8802__i = 0, G__8802__a = new Array(arguments.length -  0);
while (G__8802__i < G__8802__a.length) {G__8802__a[G__8802__i] = arguments[G__8802__i + 0]; ++G__8802__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8802__a,0,null);
} 
return G__8801__delegate.call(this,args__7830__auto__);};
G__8801.cljs$lang$maxFixedArity = 0;
G__8801.cljs$lang$applyTo = (function (arglist__8803){
var args__7830__auto__ = cljs.core.seq(arglist__8803);
return G__8801__delegate(args__7830__auto__);
});
G__8801.cljs$core$IFn$_invoke$arity$variadic = G__8801__delegate;
return G__8801;
})()
;
;})(args_8799__$1,format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})();
(fexpr__8780_8800.cljs$core$IFn$_invoke$arity$0 ? fexpr__8780_8800.cljs$core$IFn$_invoke$arity$0() : fexpr__8780_8800.call(null));

var arg_8804 = cljs.core.first(args_8799__$1);
if(cljs.core.sequential_QMARK_(arg_8804)){
var vec__8781_8805 = cljs.pprint.brackets(arg_8804);
var start_8806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8781_8805,(0),null);
var end_8807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8781_8805,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8784_8808 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8785_8809 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_8806__$1,null,end_8807__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_8804),(3))) && ((cljs.core.second(arg_8804) instanceof cljs.core.Keyword)))){
var vec__8786_8810 = arg_8804;
var ns_8811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8786_8810,(0),null);
var kw_8812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8786_8810,(1),null);
var lis_8813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8786_8810,(2),null);
var fexpr__8789_8814 = (function (){var format_in__7828__auto__ = "~w ~w ";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (args_8799__$1,format_in__7828__auto__,cf__7829__auto__,vec__8786_8810,ns_8811,kw_8812,lis_8813,_STAR_current_level_STAR_8784_8808,_STAR_current_length_STAR_8785_8809,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8815__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8815 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8816__i = 0, G__8816__a = new Array(arguments.length -  0);
while (G__8816__i < G__8816__a.length) {G__8816__a[G__8816__i] = arguments[G__8816__i + 0]; ++G__8816__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8816__a,0,null);
} 
return G__8815__delegate.call(this,args__7830__auto__);};
G__8815.cljs$lang$maxFixedArity = 0;
G__8815.cljs$lang$applyTo = (function (arglist__8817){
var args__7830__auto__ = cljs.core.seq(arglist__8817);
return G__8815__delegate(args__7830__auto__);
});
G__8815.cljs$core$IFn$_invoke$arity$variadic = G__8815__delegate;
return G__8815;
})()
;
;})(args_8799__$1,format_in__7828__auto__,cf__7829__auto__,vec__8786_8810,ns_8811,kw_8812,lis_8813,_STAR_current_level_STAR_8784_8808,_STAR_current_length_STAR_8785_8809,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})();
(fexpr__8789_8814.cljs$core$IFn$_invoke$arity$2 ? fexpr__8789_8814.cljs$core$IFn$_invoke$arity$2(ns_8811,kw_8812) : fexpr__8789_8814.call(null,ns_8811,kw_8812));

if(cljs.core.sequential_QMARK_(lis_8813)){
var fexpr__8790_8818 = (function (){var format_in__7828__auto__ = ((cljs.core.vector_QMARK_(lis_8813))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (args_8799__$1,format_in__7828__auto__,cf__7829__auto__,vec__8786_8810,ns_8811,kw_8812,lis_8813,_STAR_current_level_STAR_8784_8808,_STAR_current_length_STAR_8785_8809,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8819__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8819 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8820__i = 0, G__8820__a = new Array(arguments.length -  0);
while (G__8820__i < G__8820__a.length) {G__8820__a[G__8820__i] = arguments[G__8820__i + 0]; ++G__8820__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8820__a,0,null);
} 
return G__8819__delegate.call(this,args__7830__auto__);};
G__8819.cljs$lang$maxFixedArity = 0;
G__8819.cljs$lang$applyTo = (function (arglist__8821){
var args__7830__auto__ = cljs.core.seq(arglist__8821);
return G__8819__delegate(args__7830__auto__);
});
G__8819.cljs$core$IFn$_invoke$arity$variadic = G__8819__delegate;
return G__8819;
})()
;
;})(args_8799__$1,format_in__7828__auto__,cf__7829__auto__,vec__8786_8810,ns_8811,kw_8812,lis_8813,_STAR_current_level_STAR_8784_8808,_STAR_current_length_STAR_8785_8809,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})();
(fexpr__8790_8818.cljs$core$IFn$_invoke$arity$1 ? fexpr__8790_8818.cljs$core$IFn$_invoke$arity$1(lis_8813) : fexpr__8790_8818.call(null,lis_8813));
} else {
cljs.pprint.write_out(lis_8813);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__7828__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (args_8799__$1,format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8784_8808,_STAR_current_length_STAR_8785_8809,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8822__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8822 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8823__i = 0, G__8823__a = new Array(arguments.length -  0);
while (G__8823__i < G__8823__a.length) {G__8823__a[G__8823__i] = arguments[G__8823__i + 0]; ++G__8823__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8823__a,0,null);
} 
return G__8822__delegate.call(this,args__7830__auto__);};
G__8822.cljs$lang$maxFixedArity = 0;
G__8822.cljs$lang$applyTo = (function (arglist__8824){
var args__7830__auto__ = cljs.core.seq(arglist__8824);
return G__8822__delegate(args__7830__auto__);
});
G__8822.cljs$core$IFn$_invoke$arity$variadic = G__8822__delegate;
return G__8822;
})()
;
;})(args_8799__$1,format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8784_8808,_STAR_current_length_STAR_8785_8809,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})(),arg_8804);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8785_8809;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8784_8808;
}}


if(cljs.core.next(args_8799__$1)){
var fexpr__8791_8825 = (function (){var format_in__7828__auto__ = "~_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (args_8799__$1,format_in__7828__auto__,cf__7829__auto__,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8826__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8826 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8827__i = 0, G__8827__a = new Array(arguments.length -  0);
while (G__8827__i < G__8827__a.length) {G__8827__a[G__8827__i] = arguments[G__8827__i + 0]; ++G__8827__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8827__a,0,null);
} 
return G__8826__delegate.call(this,args__7830__auto__);};
G__8826.cljs$lang$maxFixedArity = 0;
G__8826.cljs$lang$applyTo = (function (arglist__8828){
var args__7830__auto__ = cljs.core.seq(arglist__8828);
return G__8826__delegate(args__7830__auto__);
});
G__8826.cljs$core$IFn$_invoke$arity$variadic = G__8826__delegate;
return G__8826;
})()
;
;})(args_8799__$1,format_in__7828__auto__,cf__7829__auto__,vec__8781_8805,start_8806__$1,end_8807__$1,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})();
(fexpr__8791_8825.cljs$core$IFn$_invoke$arity$0 ? fexpr__8791_8825.cljs$core$IFn$_invoke$arity$0() : fexpr__8791_8825.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_8804);

if(cljs.core.next(args_8799__$1)){
var fexpr__8792_8829 = (function (){var format_in__7828__auto__ = "~:_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (args_8799__$1,format_in__7828__auto__,cf__7829__auto__,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args){
return (function() { 
var G__8830__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8830 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8831__i = 0, G__8831__a = new Array(arguments.length -  0);
while (G__8831__i < G__8831__a.length) {G__8831__a[G__8831__i] = arguments[G__8831__i + 0]; ++G__8831__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8831__a,0,null);
} 
return G__8830__delegate.call(this,args__7830__auto__);};
G__8830.cljs$lang$maxFixedArity = 0;
G__8830.cljs$lang$applyTo = (function (arglist__8832){
var args__7830__auto__ = cljs.core.seq(arglist__8832);
return G__8830__delegate(args__7830__auto__);
});
G__8830.cljs$core$IFn$_invoke$arity$variadic = G__8830__delegate;
return G__8830;
})()
;
;})(args_8799__$1,format_in__7828__auto__,cf__7829__auto__,arg_8804,_STAR_current_level_STAR_8777_8793,_STAR_current_length_STAR_8778_8794,vec__8771,start,end,vec__8774,seq__8775,first__8776,seq__8775__$1,keyw,args))
})();
(fexpr__8792_8829.cljs$core$IFn$_invoke$arity$0 ? fexpr__8792_8829.cljs$core$IFn$_invoke$arity$0() : fexpr__8792_8829.call(null));
} else {
}
}

var G__8833 = cljs.core.next(args_8799__$1);
args_8799__$1 = G__8833;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8778_8794;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8777_8793;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__8834 = alis;
var seq__8835 = cljs.core.seq(vec__8834);
var first__8836 = cljs.core.first(seq__8835);
var seq__8835__$1 = cljs.core.next(seq__8835);
var ns_sym = first__8836;
var first__8836__$1 = cljs.core.first(seq__8835__$1);
var seq__8835__$2 = cljs.core.next(seq__8835__$1);
var ns_name = first__8836__$1;
var stuff = seq__8835__$2;
var vec__8837 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,(1),null);
var vec__8840 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8840,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8840,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8843_8850 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8844_8851 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__8845_8852 = (function (){var format_in__7828__auto__ = "~w ~1I~@_~w";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8843_8850,_STAR_current_length_STAR_8844_8851,vec__8834,seq__8835,first__8836,seq__8835__$1,ns_sym,first__8836__$1,seq__8835__$2,ns_name,stuff,vec__8837,doc_str,stuff__$1,vec__8840,attr_map,references){
return (function() { 
var G__8853__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8853 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8854__i = 0, G__8854__a = new Array(arguments.length -  0);
while (G__8854__i < G__8854__a.length) {G__8854__a[G__8854__i] = arguments[G__8854__i + 0]; ++G__8854__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8854__a,0,null);
} 
return G__8853__delegate.call(this,args__7830__auto__);};
G__8853.cljs$lang$maxFixedArity = 0;
G__8853.cljs$lang$applyTo = (function (arglist__8855){
var args__7830__auto__ = cljs.core.seq(arglist__8855);
return G__8853__delegate(args__7830__auto__);
});
G__8853.cljs$core$IFn$_invoke$arity$variadic = G__8853__delegate;
return G__8853;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8843_8850,_STAR_current_length_STAR_8844_8851,vec__8834,seq__8835,first__8836,seq__8835__$1,ns_sym,first__8836__$1,seq__8835__$2,ns_name,stuff,vec__8837,doc_str,stuff__$1,vec__8840,attr_map,references))
})();
(fexpr__8845_8852.cljs$core$IFn$_invoke$arity$2 ? fexpr__8845_8852.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__8845_8852.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = attr_map;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__8846_8856 = (function (){var format_in__7828__auto__ = "~@:_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8843_8850,_STAR_current_length_STAR_8844_8851,vec__8834,seq__8835,first__8836,seq__8835__$1,ns_sym,first__8836__$1,seq__8835__$2,ns_name,stuff,vec__8837,doc_str,stuff__$1,vec__8840,attr_map,references){
return (function() { 
var G__8857__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8857 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8858__i = 0, G__8858__a = new Array(arguments.length -  0);
while (G__8858__i < G__8858__a.length) {G__8858__a[G__8858__i] = arguments[G__8858__i + 0]; ++G__8858__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8858__a,0,null);
} 
return G__8857__delegate.call(this,args__7830__auto__);};
G__8857.cljs$lang$maxFixedArity = 0;
G__8857.cljs$lang$applyTo = (function (arglist__8859){
var args__7830__auto__ = cljs.core.seq(arglist__8859);
return G__8857__delegate(args__7830__auto__);
});
G__8857.cljs$core$IFn$_invoke$arity$variadic = G__8857__delegate;
return G__8857;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8843_8850,_STAR_current_length_STAR_8844_8851,vec__8834,seq__8835,first__8836,seq__8835__$1,ns_sym,first__8836__$1,seq__8835__$2,ns_name,stuff,vec__8837,doc_str,stuff__$1,vec__8840,attr_map,references))
})();
(fexpr__8846_8856.cljs$core$IFn$_invoke$arity$0 ? fexpr__8846_8856.cljs$core$IFn$_invoke$arity$0() : fexpr__8846_8856.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__3922__auto__ = attr_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__8848_8860 = attr_map;
var G__8849_8861 = cljs.core.seq(references);
var fexpr__8847_8862 = (function (){var format_in__7828__auto__ = "~w~:[~;~:@_~]";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,G__8848_8860,G__8849_8861,_STAR_current_level_STAR_8843_8850,_STAR_current_length_STAR_8844_8851,vec__8834,seq__8835,first__8836,seq__8835__$1,ns_sym,first__8836__$1,seq__8835__$2,ns_name,stuff,vec__8837,doc_str,stuff__$1,vec__8840,attr_map,references){
return (function() { 
var G__8863__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8863 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8864__i = 0, G__8864__a = new Array(arguments.length -  0);
while (G__8864__i < G__8864__a.length) {G__8864__a[G__8864__i] = arguments[G__8864__i + 0]; ++G__8864__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8864__a,0,null);
} 
return G__8863__delegate.call(this,args__7830__auto__);};
G__8863.cljs$lang$maxFixedArity = 0;
G__8863.cljs$lang$applyTo = (function (arglist__8865){
var args__7830__auto__ = cljs.core.seq(arglist__8865);
return G__8863__delegate(args__7830__auto__);
});
G__8863.cljs$core$IFn$_invoke$arity$variadic = G__8863__delegate;
return G__8863;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,G__8848_8860,G__8849_8861,_STAR_current_level_STAR_8843_8850,_STAR_current_length_STAR_8844_8851,vec__8834,seq__8835,first__8836,seq__8835__$1,ns_sym,first__8836__$1,seq__8835__$2,ns_name,stuff,vec__8837,doc_str,stuff__$1,vec__8840,attr_map,references))
})();
(fexpr__8847_8862.cljs$core$IFn$_invoke$arity$2 ? fexpr__8847_8862.cljs$core$IFn$_invoke$arity$2(G__8848_8860,G__8849_8861) : fexpr__8847_8862.call(null,G__8848_8860,G__8849_8861));
} else {
}

var references_8866__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_8866__$1));

var temp__5535__auto___8867 = cljs.core.next(references_8866__$1);
if(temp__5535__auto___8867){
var references_8868__$2 = temp__5535__auto___8867;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8869 = references_8868__$2;
references_8866__$1 = G__8869;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8844_8851;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8843_8850;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__7828__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8870__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8870 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8871__i = 0, G__8871__a = new Array(arguments.length -  0);
while (G__8871__i < G__8871__a.length) {G__8871__a[G__8871__i] = arguments[G__8871__i + 0]; ++G__8871__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8871__a,0,null);
} 
return G__8870__delegate.call(this,args__7830__auto__);};
G__8870.cljs$lang$maxFixedArity = 0;
G__8870.cljs$lang$applyTo = (function (arglist__8872){
var args__7830__auto__ = cljs.core.seq(arglist__8872);
return G__8870__delegate(args__7830__auto__);
});
G__8870.cljs$core$IFn$_invoke$arity$variadic = G__8870__delegate;
return G__8870;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__8873_8876 = (function (){var format_in__7828__auto__ = " ~_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8877__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8877 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8878__i = 0, G__8878__a = new Array(arguments.length -  0);
while (G__8878__i < G__8878__a.length) {G__8878__a[G__8878__i] = arguments[G__8878__i + 0]; ++G__8878__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8878__a,0,null);
} 
return G__8877__delegate.call(this,args__7830__auto__);};
G__8877.cljs$lang$maxFixedArity = 0;
G__8877.cljs$lang$applyTo = (function (arglist__8879){
var args__7830__auto__ = cljs.core.seq(arglist__8879);
return G__8877__delegate(args__7830__auto__);
});
G__8877.cljs$core$IFn$_invoke$arity$variadic = G__8877__delegate;
return G__8877;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
(fexpr__8873_8876.cljs$core$IFn$_invoke$arity$0 ? fexpr__8873_8876.cljs$core$IFn$_invoke$arity$0() : fexpr__8873_8876.call(null));
} else {
var fexpr__8874_8880 = (function (){var format_in__7828__auto__ = " ~@_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8881__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8881 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8882__i = 0, G__8882__a = new Array(arguments.length -  0);
while (G__8882__i < G__8882__a.length) {G__8882__a[G__8882__i] = arguments[G__8882__i + 0]; ++G__8882__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8882__a,0,null);
} 
return G__8881__delegate.call(this,args__7830__auto__);};
G__8881.cljs$lang$maxFixedArity = 0;
G__8881.cljs$lang$applyTo = (function (arglist__8883){
var args__7830__auto__ = cljs.core.seq(arglist__8883);
return G__8881__delegate(args__7830__auto__);
});
G__8881.cljs$core$IFn$_invoke$arity$variadic = G__8881__delegate;
return G__8881;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
(fexpr__8874_8880.cljs$core$IFn$_invoke$arity$0 ? fexpr__8874_8880.cljs$core$IFn$_invoke$arity$0() : fexpr__8874_8880.call(null));
}

var fexpr__8875 = (function (){var format_in__7828__auto__ = "~{~w~^ ~_~}";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8884__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8884 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8885__i = 0, G__8885__a = new Array(arguments.length -  0);
while (G__8885__i < G__8885__a.length) {G__8885__a[G__8885__i] = arguments[G__8885__i + 0]; ++G__8885__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8885__a,0,null);
} 
return G__8884__delegate.call(this,args__7830__auto__);};
G__8884.cljs$lang$maxFixedArity = 0;
G__8884.cljs$lang$applyTo = (function (arglist__8886){
var args__7830__auto__ = cljs.core.seq(arglist__8886);
return G__8884__delegate(args__7830__auto__);
});
G__8884.cljs$core$IFn$_invoke$arity$variadic = G__8884__delegate;
return G__8884;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
return (fexpr__8875.cljs$core$IFn$_invoke$arity$1 ? fexpr__8875.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__8875.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__8887 = (function (){var format_in__7828__auto__ = " ~_~{~w~^ ~_~}";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8888__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8888 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8889__i = 0, G__8889__a = new Array(arguments.length -  0);
while (G__8889__i < G__8889__a.length) {G__8889__a[G__8889__i] = arguments[G__8889__i + 0]; ++G__8889__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8889__a,0,null);
} 
return G__8888__delegate.call(this,args__7830__auto__);};
G__8888.cljs$lang$maxFixedArity = 0;
G__8888.cljs$lang$applyTo = (function (arglist__8890){
var args__7830__auto__ = cljs.core.seq(arglist__8890);
return G__8888__delegate(args__7830__auto__);
});
G__8888.cljs$core$IFn$_invoke$arity$variadic = G__8888__delegate;
return G__8888;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
return (fexpr__8887.cljs$core$IFn$_invoke$arity$1 ? fexpr__8887.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__8887.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__8891 = alis;
var seq__8892 = cljs.core.seq(vec__8891);
var first__8893 = cljs.core.first(seq__8892);
var seq__8892__$1 = cljs.core.next(seq__8892);
var defn_sym = first__8893;
var first__8893__$1 = cljs.core.first(seq__8892__$1);
var seq__8892__$2 = cljs.core.next(seq__8892__$1);
var defn_name = first__8893__$1;
var stuff = seq__8892__$2;
var vec__8894 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8894,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8894,(1),null);
var vec__8897 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8897,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8900_8905 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8901_8906 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__8902_8907 = (function (){var format_in__7828__auto__ = "~w ~1I~@_~w";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8900_8905,_STAR_current_length_STAR_8901_8906,vec__8891,seq__8892,first__8893,seq__8892__$1,defn_sym,first__8893__$1,seq__8892__$2,defn_name,stuff,vec__8894,doc_str,stuff__$1,vec__8897,attr_map,stuff__$2){
return (function() { 
var G__8908__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8908 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8909__i = 0, G__8909__a = new Array(arguments.length -  0);
while (G__8909__i < G__8909__a.length) {G__8909__a[G__8909__i] = arguments[G__8909__i + 0]; ++G__8909__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8909__a,0,null);
} 
return G__8908__delegate.call(this,args__7830__auto__);};
G__8908.cljs$lang$maxFixedArity = 0;
G__8908.cljs$lang$applyTo = (function (arglist__8910){
var args__7830__auto__ = cljs.core.seq(arglist__8910);
return G__8908__delegate(args__7830__auto__);
});
G__8908.cljs$core$IFn$_invoke$arity$variadic = G__8908__delegate;
return G__8908;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8900_8905,_STAR_current_length_STAR_8901_8906,vec__8891,seq__8892,first__8893,seq__8892__$1,defn_sym,first__8893__$1,seq__8892__$2,defn_name,stuff,vec__8894,doc_str,stuff__$1,vec__8897,attr_map,stuff__$2))
})();
(fexpr__8902_8907.cljs$core$IFn$_invoke$arity$2 ? fexpr__8902_8907.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__8902_8907.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__8903_8911 = (function (){var format_in__7828__auto__ = " ~_~w";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8900_8905,_STAR_current_length_STAR_8901_8906,vec__8891,seq__8892,first__8893,seq__8892__$1,defn_sym,first__8893__$1,seq__8892__$2,defn_name,stuff,vec__8894,doc_str,stuff__$1,vec__8897,attr_map,stuff__$2){
return (function() { 
var G__8912__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8912 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8913__i = 0, G__8913__a = new Array(arguments.length -  0);
while (G__8913__i < G__8913__a.length) {G__8913__a[G__8913__i] = arguments[G__8913__i + 0]; ++G__8913__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8913__a,0,null);
} 
return G__8912__delegate.call(this,args__7830__auto__);};
G__8912.cljs$lang$maxFixedArity = 0;
G__8912.cljs$lang$applyTo = (function (arglist__8914){
var args__7830__auto__ = cljs.core.seq(arglist__8914);
return G__8912__delegate(args__7830__auto__);
});
G__8912.cljs$core$IFn$_invoke$arity$variadic = G__8912__delegate;
return G__8912;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8900_8905,_STAR_current_length_STAR_8901_8906,vec__8891,seq__8892,first__8893,seq__8892__$1,defn_sym,first__8893__$1,seq__8892__$2,defn_name,stuff,vec__8894,doc_str,stuff__$1,vec__8897,attr_map,stuff__$2))
})();
(fexpr__8903_8911.cljs$core$IFn$_invoke$arity$1 ? fexpr__8903_8911.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__8903_8911.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__8904_8915 = (function (){var format_in__7828__auto__ = " ~_~w";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8900_8905,_STAR_current_length_STAR_8901_8906,vec__8891,seq__8892,first__8893,seq__8892__$1,defn_sym,first__8893__$1,seq__8892__$2,defn_name,stuff,vec__8894,doc_str,stuff__$1,vec__8897,attr_map,stuff__$2){
return (function() { 
var G__8916__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8916 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8917__i = 0, G__8917__a = new Array(arguments.length -  0);
while (G__8917__i < G__8917__a.length) {G__8917__a[G__8917__i] = arguments[G__8917__i + 0]; ++G__8917__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8917__a,0,null);
} 
return G__8916__delegate.call(this,args__7830__auto__);};
G__8916.cljs$lang$maxFixedArity = 0;
G__8916.cljs$lang$applyTo = (function (arglist__8918){
var args__7830__auto__ = cljs.core.seq(arglist__8918);
return G__8916__delegate(args__7830__auto__);
});
G__8916.cljs$core$IFn$_invoke$arity$variadic = G__8916__delegate;
return G__8916;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8900_8905,_STAR_current_length_STAR_8901_8906,vec__8891,seq__8892,first__8893,seq__8892__$1,defn_sym,first__8893__$1,seq__8892__$2,defn_name,stuff,vec__8894,doc_str,stuff__$1,vec__8897,attr_map,stuff__$2))
})();
(fexpr__8904_8915.cljs$core$IFn$_invoke$arity$1 ? fexpr__8904_8915.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__8904_8915.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8901_8906;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8900_8905;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8919_8924 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8920_8925 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count8921_8926 = (0);
var binding_8927 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8921_8926 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_8927)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8922_8928 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8923_8929 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_8927));

if(cljs.core.next(binding_8927)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_8927));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8923_8929;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8922_8928;
}}


if(cljs.core.next(cljs.core.rest(binding_8927))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8930 = (length_count8921_8926 + (1));
var G__8931 = cljs.core.next(cljs.core.rest(binding_8927));
length_count8921_8926 = G__8930;
binding_8927 = G__8931;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8920_8925;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8919_8924;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8932_8937 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8933_8938 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__8934_8939 = (function (){var format_in__7828__auto__ = "~w ~1I~@_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8932_8937,_STAR_current_length_STAR_8933_8938,base_sym){
return (function() { 
var G__8940__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8940 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8941__i = 0, G__8941__a = new Array(arguments.length -  0);
while (G__8941__i < G__8941__a.length) {G__8941__a[G__8941__i] = arguments[G__8941__i + 0]; ++G__8941__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8941__a,0,null);
} 
return G__8940__delegate.call(this,args__7830__auto__);};
G__8940.cljs$lang$maxFixedArity = 0;
G__8940.cljs$lang$applyTo = (function (arglist__8942){
var args__7830__auto__ = cljs.core.seq(arglist__8942);
return G__8940__delegate(args__7830__auto__);
});
G__8940.cljs$core$IFn$_invoke$arity$variadic = G__8940__delegate;
return G__8940;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8932_8937,_STAR_current_length_STAR_8933_8938,base_sym))
})();
(fexpr__8934_8939.cljs$core$IFn$_invoke$arity$1 ? fexpr__8934_8939.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__8934_8939.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__8936_8943 = cljs.core.next(cljs.core.rest(alis));
var fexpr__8935_8944 = (function (){var format_in__7828__auto__ = " ~_~{~w~^ ~_~}";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,G__8936_8943,_STAR_current_level_STAR_8932_8937,_STAR_current_length_STAR_8933_8938,base_sym){
return (function() { 
var G__8945__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8945 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8946__i = 0, G__8946__a = new Array(arguments.length -  0);
while (G__8946__i < G__8946__a.length) {G__8946__a[G__8946__i] = arguments[G__8946__i + 0]; ++G__8946__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8946__a,0,null);
} 
return G__8945__delegate.call(this,args__7830__auto__);};
G__8945.cljs$lang$maxFixedArity = 0;
G__8945.cljs$lang$applyTo = (function (arglist__8947){
var args__7830__auto__ = cljs.core.seq(arglist__8947);
return G__8945__delegate(args__7830__auto__);
});
G__8945.cljs$core$IFn$_invoke$arity$variadic = G__8945__delegate;
return G__8945;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,G__8936_8943,_STAR_current_level_STAR_8932_8937,_STAR_current_length_STAR_8933_8938,base_sym))
})();
(fexpr__8935_8944.cljs$core$IFn$_invoke$arity$1 ? fexpr__8935_8944.cljs$core$IFn$_invoke$arity$1(G__8936_8943) : fexpr__8935_8944.call(null,G__8936_8943));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8933_8938;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8932_8937;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__7828__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__){
return (function() { 
var G__8948__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8948 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8949__i = 0, G__8949__a = new Array(arguments.length -  0);
while (G__8949__i < G__8949__a.length) {G__8949__a[G__8949__i] = arguments[G__8949__i + 0]; ++G__8949__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8949__a,0,null);
} 
return G__8948__delegate.call(this,args__7830__auto__);};
G__8948.cljs$lang$maxFixedArity = 0;
G__8948.cljs$lang$applyTo = (function (arglist__8950){
var args__7830__auto__ = cljs.core.seq(arglist__8950);
return G__8948__delegate(args__7830__auto__);
});
G__8948.cljs$core$IFn$_invoke$arity$variadic = G__8948__delegate;
return G__8948;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8951_8956 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8952_8957 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count8953_8958 = (0);
var alis_8959__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8953_8958 < cljs.core._STAR_print_length_STAR_)))){
if(alis_8959__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8954_8960 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8955_8961 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_8959__$1));

if(cljs.core.next(alis_8959__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_8959__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8955_8961;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8954_8960;
}}


if(cljs.core.next(cljs.core.rest(alis_8959__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8962 = (length_count8953_8958 + (1));
var G__8963 = cljs.core.next(cljs.core.rest(alis_8959__$1));
length_count8953_8958 = G__8962;
alis_8959__$1 = G__8963;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8952_8957;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8951_8956;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8964_8969 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8965_8970 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__7828__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8964_8969,_STAR_current_length_STAR_8965_8970){
return (function() { 
var G__8971__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8971 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8972__i = 0, G__8972__a = new Array(arguments.length -  0);
while (G__8972__i < G__8972__a.length) {G__8972__a[G__8972__i] = arguments[G__8972__i + 0]; ++G__8972__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8972__a,0,null);
} 
return G__8971__delegate.call(this,args__7830__auto__);};
G__8971.cljs$lang$maxFixedArity = 0;
G__8971.cljs$lang$applyTo = (function (arglist__8973){
var args__7830__auto__ = cljs.core.seq(arglist__8973);
return G__8971__delegate(args__7830__auto__);
});
G__8971.cljs$core$IFn$_invoke$arity$variadic = G__8971__delegate;
return G__8971;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_current_level_STAR_8964_8969,_STAR_current_length_STAR_8965_8970))
})(),alis);

var length_count8966_8974 = (0);
var alis_8975__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8966_8974 < cljs.core._STAR_print_length_STAR_)))){
if(alis_8975__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8967_8976 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8968_8977 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_8975__$1));

if(cljs.core.next(alis_8975__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_8975__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8968_8977;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8967_8976;
}}


if(cljs.core.next(cljs.core.rest(alis_8975__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8978 = (length_count8966_8974 + (1));
var G__8979 = cljs.core.next(cljs.core.rest(alis_8975__$1));
length_count8966_8974 = G__8978;
alis_8975__$1 = G__8979;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8965_8970;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8964_8969;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_8982 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_8982,args,nlis){
return (function (p1__8980_SHARP_,p2__8981_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8980_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8981_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_8982,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__8983 = (function (){var format_in__7828__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__7829__auto__ = ((typeof format_in__7828__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__7828__auto__) : cljs.pprint.cached_compile.call(null,format_in__7828__auto__)):format_in__7828__auto__);
return ((function (format_in__7828__auto__,cf__7829__auto__,_STAR_symbol_map_STAR_8982,args,nlis){
return (function() { 
var G__8984__delegate = function (args__7830__auto__){
var navigator__7831__auto__ = cljs.pprint.init_navigator(args__7830__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__7829__auto__,navigator__7831__auto__);
};
var G__8984 = function (var_args){
var args__7830__auto__ = null;
if (arguments.length > 0) {
var G__8985__i = 0, G__8985__a = new Array(arguments.length -  0);
while (G__8985__i < G__8985__a.length) {G__8985__a[G__8985__i] = arguments[G__8985__i + 0]; ++G__8985__i;}
  args__7830__auto__ = new cljs.core.IndexedSeq(G__8985__a,0,null);
} 
return G__8984__delegate.call(this,args__7830__auto__);};
G__8984.cljs$lang$maxFixedArity = 0;
G__8984.cljs$lang$applyTo = (function (arglist__8986){
var args__7830__auto__ = cljs.core.seq(arglist__8986);
return G__8984__delegate(args__7830__auto__);
});
G__8984.cljs$core$IFn$_invoke$arity$variadic = G__8984__delegate;
return G__8984;
})()
;
;})(format_in__7828__auto__,cf__7829__auto__,_STAR_symbol_map_STAR_8982,args,nlis))
})();
return (fexpr__8983.cljs$core$IFn$_invoke$arity$1 ? fexpr__8983.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__8983.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_8982;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8987_8990 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8988_8991 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count8989_8992 = (0);
var alis_8993__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count8989_8992 < cljs.core._STAR_print_length_STAR_)))){
if(alis_8993__$1){
cljs.pprint.write_out(cljs.core.first(alis_8993__$1));

if(cljs.core.next(alis_8993__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__8994 = (length_count8989_8992 + (1));
var G__8995 = cljs.core.next(alis_8993__$1);
length_count8989_8992 = G__8994;
alis_8993__$1 = G__8995;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8988_8991;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8987_8990;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4292__auto__ = (function cljs$pprint$two_forms_$_iter__8996(s__8997){
return (new cljs.core.LazySeq(null,(function (){
var s__8997__$1 = s__8997;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__8997__$1);
if(temp__5535__auto__){
var s__8997__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8997__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__8997__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__8999 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__8998 = (0);
while(true){
if((i__8998 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__8998);
cljs.core.chunk_append(b__8999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__9000 = (i__8998 + (1));
i__8998 = G__9000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8999),cljs$pprint$two_forms_$_iter__8996(cljs.core.chunk_rest(s__8997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8999),null);
}
} else {
var x = cljs.core.first(s__8997__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__8996(cljs.core.rest(s__8997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__9001_SHARP_){
var vec__9002 = p1__9001_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9002,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9002,(1),null);
if(cljs.core.not((function (){var or__3922__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__9001_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5533__auto__ = (function (){var G__9005 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__9005) : cljs.pprint._STAR_code_table_STAR_.call(null,G__9005));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var special_form = temp__5533__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5533__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5533__auto__)){
var arg_num = temp__5533__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (width - cljs.core.count(s));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__9010 = arguments.length;
switch (G__9010) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_9011 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_9011){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_9011){
return (function (p1__9006_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__9006_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_9011))
,rows));
});})(_STAR_print_newline_STAR_9011))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_9011){
return (function (p1__9007_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__9007_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_9011))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_9011){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4292__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_9011){
return (function cljs$pprint$iter__9012(s__9013){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_9011){
return (function (){
var s__9013__$1 = s__9013;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__9013__$1);
if(temp__5535__auto__){
var s__9013__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9013__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9013__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9015 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9014 = (0);
while(true){
if((i__9014 < size__4291__auto__)){
var vec__9016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9014);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9016,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9016,(1),null);
cljs.core.chunk_append(b__9015,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__9027 = (i__9014 + (1));
i__9014 = G__9027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9015),cljs$pprint$iter__9012(cljs.core.chunk_rest(s__9013__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9015),null);
}
} else {
var vec__9019 = cljs.core.first(s__9013__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9019,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9019,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__9012(cljs.core.rest(s__9013__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_9011))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_9011))
;
return iter__4292__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_9011){
return (function (p1__9008_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__9008_SHARP_);
});})(iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_9011))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_9011))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__9022 = cljs.core.seq(rows);
var chunk__9023 = null;
var count__9024 = (0);
var i__9025 = (0);
while(true){
if((i__9025 < count__9024)){
var row = chunk__9023.cljs$core$IIndexed$_nth$arity$2(null,i__9025);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__9028 = seq__9022;
var G__9029 = chunk__9023;
var G__9030 = count__9024;
var G__9031 = (i__9025 + (1));
seq__9022 = G__9028;
chunk__9023 = G__9029;
count__9024 = G__9030;
i__9025 = G__9031;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__9022);
if(temp__5535__auto__){
var seq__9022__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9022__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__9022__$1);
var G__9032 = cljs.core.chunk_rest(seq__9022__$1);
var G__9033 = c__4319__auto__;
var G__9034 = cljs.core.count(c__4319__auto__);
var G__9035 = (0);
seq__9022 = G__9032;
chunk__9023 = G__9033;
count__9024 = G__9034;
i__9025 = G__9035;
continue;
} else {
var row = cljs.core.first(seq__9022__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__9036 = cljs.core.next(seq__9022__$1);
var G__9037 = null;
var G__9038 = (0);
var G__9039 = (0);
seq__9022 = G__9036;
chunk__9023 = G__9037;
count__9024 = G__9038;
i__9025 = G__9039;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9011;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

