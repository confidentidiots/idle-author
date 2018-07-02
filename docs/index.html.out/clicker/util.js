// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clicker.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clicker.util.find_db_key_any = (function clicker$util$find_db_key_any(data__$1,thing_name){

var iter__4311__auto__ = (function clicker$util$find_db_key_any_$_iter__5539(s__5540){
return (new cljs.core.LazySeq(null,(function (){
var s__5540__$1 = s__5540;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5540__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__5545 = cljs.core.first(xs__6012__auto__);
var sub_db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5545,(0),null);
var nested = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5545,(1),null);
var iterys__4307__auto__ = ((function (s__5540__$1,vec__5545,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__){
return (function clicker$util$find_db_key_any_$_iter__5539_$_iter__5541(s__5542){
return (new cljs.core.LazySeq(null,((function (s__5540__$1,vec__5545,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__5542__$1 = s__5542;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__5542__$1);
if(temp__5457__auto____$1){
var s__5542__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__5542__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__5542__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__5544 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__5543 = (0);
while(true){
if((i__5543 < size__4310__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__5543);
cljs.core.chunk_append(b__5544,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)))?sub_db_key:null));

var G__5548 = (i__5543 + (1));
i__5543 = G__5548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5544),clicker$util$find_db_key_any_$_iter__5539_$_iter__5541(cljs.core.chunk_rest(s__5542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5544),null);
}
} else {
var item = cljs.core.first(s__5542__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thing_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)))?sub_db_key:null),clicker$util$find_db_key_any_$_iter__5539_$_iter__5541(cljs.core.rest(s__5542__$2)));
}
} else {
return null;
}
break;
}
});})(s__5540__$1,vec__5545,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__5540__$1,vec__5545,sub_db_key,nested,xs__6012__auto__,temp__5457__auto__))
;
var fs__4308__auto__ = cljs.core.seq(iterys__4307__auto__(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(nested)));
if(fs__4308__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4308__auto__,clicker$util$find_db_key_any_$_iter__5539(cljs.core.rest(s__5540__$1)));
} else {
var G__5549 = cljs.core.rest(s__5540__$1);
s__5540__$1 = G__5549;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(data__$1);
});
clicker.util.find_db_key_no_nils = (function clicker$util$find_db_key_no_nils(data__$1,thing_name){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,clicker.util.find_db_key_any(data__$1,thing_name));
});
clicker.util.find_db_key = (function clicker$util$find_db_key(data__$1,thing_name){
return cljs.core.first(clicker.util.find_db_key_no_nils(data__$1,thing_name));
});
