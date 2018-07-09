// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clicker.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clicker.util.find_db_key_any = (function clicker$util$find_db_key_any(data,thing_name){

var iter__4324__auto__ = (function clicker$util$find_db_key_any_$_iter__9238(s__9239){
return (new cljs.core.LazySeq(null,(function (){
var s__9239__$1 = s__9239;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9239__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__9244 = cljs.core.first(xs__6012__auto__);
var sub_db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244,(0),null);
var nested = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244,(1),null);
var iterys__4320__auto__ = ((function (s__9239__$1,vec__9244,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__){
return (function clicker$util$find_db_key_any_$_iter__9238_$_iter__9240(s__9241){
return (new cljs.core.LazySeq(null,((function (s__9239__$1,vec__9244,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__9241__$1 = s__9241;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__9241__$1);
if(temp__5457__auto____$1){
var s__9241__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9241__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__9241__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__9243 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__9242 = (0);
while(true){
if((i__9242 < size__4323__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__9242);
cljs.core.chunk_append(b__9243,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)))?sub_db_key:null));

var G__9247 = (i__9242 + (1));
i__9242 = G__9247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9243),clicker$util$find_db_key_any_$_iter__9238_$_iter__9240(cljs.core.chunk_rest(s__9241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9243),null);
}
} else {
var item = cljs.core.first(s__9241__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)))?sub_db_key:null),clicker$util$find_db_key_any_$_iter__9238_$_iter__9240(cljs.core.rest(s__9241__$2)));
}
} else {
return null;
}
break;
}
});})(s__9239__$1,vec__9244,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__9239__$1,vec__9244,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(nested)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,clicker$util$find_db_key_any_$_iter__9238(cljs.core.rest(s__9239__$1)));
} else {
var G__9248 = cljs.core.rest(s__9239__$1);
s__9239__$1 = G__9248;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(data);
});
clicker.util.find_db_key_no_nils = (function clicker$util$find_db_key_no_nils(data,thing_name){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,clicker.util.find_db_key_any(data,thing_name));
});
clicker.util.find_db_key = (function clicker$util$find_db_key(data,thing_name){
return cljs.core.first(clicker.util.find_db_key_no_nils(data,thing_name));
});
clicker.util.log = (function clicker$util$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9251 = arguments.length;
var i__4532__auto___9252 = (0);
while(true){
if((i__4532__auto___9252 < len__4531__auto___9251)){
args__4534__auto__.push((arguments[i__4532__auto___9252]));

var G__9253 = (i__4532__auto___9252 + (1));
i__4532__auto___9252 = G__9253;
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
clicker.util.log.cljs$lang$applyTo = (function (seq9249){
var G__9250 = cljs.core.first(seq9249);
var seq9249__$1 = cljs.core.next(seq9249);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9250,seq9249__$1);
});

clicker.util.default_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"init",cljs.core.cst$kw$things,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$slogan,(0),cljs.core.cst$kw$notepad,(0)], null)], null);
