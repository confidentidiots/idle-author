// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__3938__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__13915 = (i + (1));
var G__13916 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13915;
ret = G__13916;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__13918 = arguments.length;
switch (G__13918) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__13920 = (i + (1));
i = G__13920;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13922_SHARP_,p2__13921_SHARP_){
if((p2__13921_SHARP_ == null)){
return p1__13922_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13922_SHARP_,p2__13921_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13929 = new$__$1;
var vec__13931 = G__13929;
var seq__13932 = cljs.core.seq(vec__13931);
var first__13933 = cljs.core.first(seq__13932);
var seq__13932__$1 = cljs.core.next(seq__13932);
var x = first__13933;
var xs = seq__13932__$1;
var G__13930 = hoplon.core.child_vec(this$);
var vec__13934 = G__13930;
var seq__13935 = cljs.core.seq(vec__13934);
var first__13936 = cljs.core.first(seq__13935);
var seq__13935__$1 = cljs.core.next(seq__13935);
var k = first__13936;
var ks = seq__13935__$1;
var kids = vec__13934;
var G__13929__$1 = G__13929;
var G__13930__$1 = G__13930;
while(true){
var vec__13937 = G__13929__$1;
var seq__13938 = cljs.core.seq(vec__13937);
var first__13939 = cljs.core.first(seq__13938);
var seq__13938__$1 = cljs.core.next(seq__13938);
var x__$1 = first__13939;
var xs__$1 = seq__13938__$1;
var vec__13940 = G__13930__$1;
var seq__13941 = cljs.core.seq(vec__13940);
var first__13942 = cljs.core.first(seq__13941);
var seq__13941__$1 = cljs.core.next(seq__13941);
var k__$1 = first__13942;
var ks__$1 = seq__13941__$1;
var kids__$1 = vec__13940;
if(cljs.core.truth_((function (){var or__3949__auto__ = x__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return k__$1;
}
})())){
var G__13943 = xs__$1;
var G__13944 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
this$.appendChild(x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
this$.removeChild(k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
this$.insertBefore(x__$1,k__$1);

return kids__$2;
})()
)));
G__13929__$1 = G__13943;
G__13930__$1 = G__13944;
continue;
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__13946 = arguments.length;
switch (G__13946) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13947_13950 = init;
var G__13948_13951 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13947_13950,G__13948_13951) : f.call(null,G__13947_13950,G__13948_13951));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__13952_SHARP_){
return cljs.core.zipmap(p1__13952_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__13954 = arguments.length;
switch (G__13954) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(0));
} else {
var temp__5455__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return v.push(f);
} else {
var G__13956_13968 = this$;
var G__13957_13969 = "_hoplonWhenDom";
var G__13958_13970 = [f];
goog.object.set(G__13956_13968,G__13957_13969,G__13958_13970);

return setTimeout(((function (temp__5455__auto__){
return (function (){
var fexpr__13963 = ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5455__auto__))
,(20));
} else {
var seq__13964_13971 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__13965_13972 = null;
var count__13966_13973 = (0);
var i__13967_13974 = (0);
while(true){
if((i__13967_13974 < count__13966_13973)){
var f_13975__$1 = chunk__13965_13972.cljs$core$IIndexed$_nth$arity$2(null,i__13967_13974);
(f_13975__$1.cljs$core$IFn$_invoke$arity$0 ? f_13975__$1.cljs$core$IFn$_invoke$arity$0() : f_13975__$1.call(null));


var G__13976 = seq__13964_13971;
var G__13977 = chunk__13965_13972;
var G__13978 = count__13966_13973;
var G__13979 = (i__13967_13974 + (1));
seq__13964_13971 = G__13976;
chunk__13965_13972 = G__13977;
count__13966_13973 = G__13978;
i__13967_13974 = G__13979;
continue;
} else {
var temp__5457__auto___13980 = cljs.core.seq(seq__13964_13971);
if(temp__5457__auto___13980){
var seq__13964_13981__$1 = temp__5457__auto___13980;
if(cljs.core.chunked_seq_QMARK_(seq__13964_13981__$1)){
var c__4351__auto___13982 = cljs.core.chunk_first(seq__13964_13981__$1);
var G__13983 = cljs.core.chunk_rest(seq__13964_13981__$1);
var G__13984 = c__4351__auto___13982;
var G__13985 = cljs.core.count(c__4351__auto___13982);
var G__13986 = (0);
seq__13964_13971 = G__13983;
chunk__13965_13972 = G__13984;
count__13966_13973 = G__13985;
i__13967_13974 = G__13986;
continue;
} else {
var f_13987__$1 = cljs.core.first(seq__13964_13981__$1);
(f_13987__$1.cljs$core$IFn$_invoke$arity$0 ? f_13987__$1.cljs$core$IFn$_invoke$arity$0() : f_13987__$1.call(null));


var G__13988 = cljs.core.next(seq__13964_13981__$1);
var G__13989 = null;
var G__13990 = (0);
var G__13991 = (0);
seq__13964_13971 = G__13988;
chunk__13965_13972 = G__13989;
count__13966_13973 = G__13990;
i__13967_13974 = G__13991;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5455__auto__))
;
return fexpr__13963();
});})(temp__5455__auto__))
,(0));
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(0));
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__13997 = args;
var vec__13998 = G__13997;
var seq__13999 = cljs.core.seq(vec__13998);
var first__14000 = cljs.core.first(seq__13999);
var seq__13999__$1 = cljs.core.next(seq__13999);
var arg = first__14000;
var args__$1 = seq__13999__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__13997__$1 = G__13997;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14001 = G__13997__$1;
var seq__14002 = cljs.core.seq(vec__14001);
var first__14003 = cljs.core.first(seq__14002);
var seq__14002__$1 = cljs.core.next(seq__14002);
var arg__$1 = first__14003;
var args__$2 = seq__14002__$1;
if(cljs.core.not((function (){var or__3949__auto__ = arg__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14004 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__14005 = kids__$2;
var G__14006 = args__$2;
attr__$1 = G__14004;
kids__$1 = G__14005;
G__13997__$1 = G__14006;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__14007 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__13997__$1,attr__$2,kids__$2,vec__14001,seq__14002,first__14003,seq__14002__$1,arg__$1,args__$2,attr,kids,G__13997,vec__13998,seq__13999,first__14000,seq__13999__$1,arg,args__$1){
return (function (p1__13992_SHARP_,p2__13993_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__13992_SHARP_,p2__13993_SHARP_,true);
});})(attr__$1,kids__$1,G__13997__$1,attr__$2,kids__$2,vec__14001,seq__14002,first__14003,seq__14002__$1,arg__$1,args__$2,attr,kids,G__13997,vec__13998,seq__13999,first__14000,seq__13999__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14008 = kids__$2;
var G__14009 = args__$2;
attr__$1 = G__14007;
kids__$1 = G__14008;
G__13997__$1 = G__14009;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__14010 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14011 = kids__$2;
var G__14012 = cljs.core.rest(args__$2);
attr__$1 = G__14010;
kids__$1 = G__14011;
G__13997__$1 = G__14012;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__14013 = attr__$2;
var G__14014 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14015 = args__$2;
attr__$1 = G__14013;
kids__$1 = G__14014;
G__13997__$1 = G__14015;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__14016 = attr__$2;
var G__14017 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14018 = args__$2;
attr__$1 = G__14016;
kids__$1 = G__14017;
G__13997__$1 = G__14018;
continue;
} else {
var G__14019 = attr__$2;
var G__14020 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14021 = args__$2;
attr__$1 = G__14019;
kids__$1 = G__14020;
G__13997__$1 = G__14021;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5455__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null))))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._node[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (hoplon.core._node["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__14023_14030 = hoplon.core._node;
var G__14024_14031 = "string";
var G__14025_14032 = ((function (G__14023_14030,G__14024_14031){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__14023_14030,G__14024_14031))
;
goog.object.set(G__14023_14030,G__14024_14031,G__14025_14032);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__14026_14033 = hoplon.core._node;
var G__14027_14034 = "number";
var G__14028_14035 = ((function (G__14026_14033,G__14027_14034){
return (function (this$){
var G__14029 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14029) : hoplon.core.$text.call(null,G__14029));
});})(G__14026_14033,G__14027_14034))
;
goog.object.set(G__14026_14033,G__14027_14034,G__14028_14035);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4244__auto__.call(null,this$,elem,value));
} else {
var m__4244__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4244__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts14039_14067 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14039_14067){
return (function (ret__13409__auto__,p__14040){
var vec__14041 = p__14040;
var ___13410__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(0),null);
var f__13411__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041,(1),null);
var sym__13412__auto__ = (f__13411__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13411__auto__.cljs$core$IFn$_invoke$arity$0() : f__13411__auto__.call(null));
var G__14044 = ret__13409__auto__;
if(cljs.core.truth_(sym__13412__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14044,sym__13412__auto__);
} else {
return G__14044;
}
});})(opts14039_14067))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14039_14067){
return (function (p1__13408__13413__auto__){
var G__14046 = cljs.core.first(p1__13408__13413__auto__);
var fexpr__14045 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14039_14067);
return (fexpr__14045.cljs$core$IFn$_invoke$arity$1 ? fexpr__14045.cljs$core$IFn$_invoke$arity$1(G__14046) : fexpr__14045.call(null,G__14046));
});})(opts14039_14067))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14039_14067){
return (function (){
var checked__13377__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1uhw/ozpa12/index.html.out/hoplon/core.cljs",14,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts14039_14067);
if(cljs.core.truth_(checked__13377__auto__)){
hoplon.core._elem_BANG_ = checked__13377__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts14039_14067))
], null)))));

var opts14049_14068 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14049_14068){
return (function (ret__13409__auto__,p__14050){
var vec__14051 = p__14050;
var ___13410__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var f__13411__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
var sym__13412__auto__ = (f__13411__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13411__auto__.cljs$core$IFn$_invoke$arity$0() : f__13411__auto__.call(null));
var G__14054 = ret__13409__auto__;
if(cljs.core.truth_(sym__13412__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14054,sym__13412__auto__);
} else {
return G__14054;
}
});})(opts14049_14068))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14049_14068){
return (function (p1__13408__13413__auto__){
var G__14056 = cljs.core.first(p1__13408__13413__auto__);
var fexpr__14055 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14049_14068);
return (fexpr__14055.cljs$core$IFn$_invoke$arity$1 ? fexpr__14055.cljs$core$IFn$_invoke$arity$1(G__14056) : fexpr__14055.call(null,G__14056));
});})(opts14049_14068))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14049_14068){
return (function (){
var checked__13377__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1uhw/ozpa12/index.html.out/hoplon/core.cljs",12,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts14049_14068);
if(cljs.core.truth_(checked__13377__auto__)){
hoplon.core._do_BANG_ = checked__13377__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts14049_14068))
], null)))));

var opts14059 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14059){
return (function (ret__13409__auto__,p__14060){
var vec__14061 = p__14060;
var ___13410__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14061,(0),null);
var f__13411__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14061,(1),null);
var sym__13412__auto__ = (f__13411__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13411__auto__.cljs$core$IFn$_invoke$arity$0() : f__13411__auto__.call(null));
var G__14064 = ret__13409__auto__;
if(cljs.core.truth_(sym__13412__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14064,sym__13412__auto__);
} else {
return G__14064;
}
});})(opts14059))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14059){
return (function (p1__13408__13413__auto__){
var G__14066 = cljs.core.first(p1__13408__13413__auto__);
var fexpr__14065 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14059);
return (fexpr__14065.cljs$core$IFn$_invoke$arity$1 ? fexpr__14065.cljs$core$IFn$_invoke$arity$1(G__14066) : fexpr__14065.call(null,G__14066));
});})(opts14059))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14059){
return (function (){
var checked__13377__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1uhw/ozpa12/index.html.out/hoplon/core.cljs",12,1,75,75,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts14059);
if(cljs.core.truth_(checked__13377__auto__)){
hoplon.core._on_BANG_ = checked__13377__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts14059))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto__.call(null,this$,kvs));
} else {
var m__4244__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto__.call(null,this$,kvs));
} else {
var m__4244__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4244__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing exist.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null))))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto__.call(null,this$,child));
} else {
var m__4244__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto__.call(null,this$,child));
} else {
var m__4244__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4244__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto__.call(null,this$,new$,existing));
} else {
var m__4244__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto__.call(null,this$,new$,existing));
} else {
var m__4244__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4244__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__3938__auto__ = (this$ instanceof Element);
if(and__3938__auto__){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__3938__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return (((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem))));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return (((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node))));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x14077 = elem;
x14077.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x14077.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x14077){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x14077))
;

x14077.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x14077.cljs$core$ILookup$_lookup$arity$2 = ((function (x14077){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__14078 = this$__$1.children;
var G__14079 = k;
return goog.object.get(G__14078,G__14079);
}
});})(x14077))
;

x14077.cljs$core$ILookup$_lookup$arity$3 = ((function (x14077){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3949__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x14077.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x14077){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14080 = cljs.core.seq(kvs);
var chunk__14082 = null;
var count__14083 = (0);
var i__14084 = (0);
while(true){
if((i__14084 < count__14083)){
var vec__14086 = chunk__14082.cljs$core$IIndexed$_nth$arity$2(null,i__14084);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(1),null);
var k_14108__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14108__$1);
} else {
e.setAttribute(k_14108__$1,((v === true)?k_14108__$1:v));
}


var G__14109 = seq__14080;
var G__14110 = chunk__14082;
var G__14111 = count__14083;
var G__14112 = (i__14084 + (1));
seq__14080 = G__14109;
chunk__14082 = G__14110;
count__14083 = G__14111;
i__14084 = G__14112;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14080);
if(temp__5457__auto__){
var seq__14080__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14080__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14080__$1);
var G__14113 = cljs.core.chunk_rest(seq__14080__$1);
var G__14114 = c__4351__auto__;
var G__14115 = cljs.core.count(c__4351__auto__);
var G__14116 = (0);
seq__14080 = G__14113;
chunk__14082 = G__14114;
count__14083 = G__14115;
i__14084 = G__14116;
continue;
} else {
var vec__14089 = cljs.core.first(seq__14080__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14089,(1),null);
var k_14117__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14117__$1);
} else {
e.setAttribute(k_14117__$1,((v === true)?k_14117__$1:v));
}


var G__14118 = cljs.core.next(seq__14080__$1);
var G__14119 = null;
var G__14120 = (0);
var G__14121 = (0);
seq__14080 = G__14118;
chunk__14082 = G__14119;
count__14083 = G__14120;
i__14084 = G__14121;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x14077){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14092 = cljs.core.seq(kvs);
var chunk__14093 = null;
var count__14094 = (0);
var i__14095 = (0);
while(true){
if((i__14095 < count__14094)){
var vec__14096 = chunk__14093.cljs$core$IIndexed$_nth$arity$2(null,i__14095);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096,(1),null);
var G__14099_14122 = e.style;
var G__14100_14123 = cljs.core.name(k);
var G__14101_14124 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14099_14122,G__14100_14123,G__14101_14124);


var G__14125 = seq__14092;
var G__14126 = chunk__14093;
var G__14127 = count__14094;
var G__14128 = (i__14095 + (1));
seq__14092 = G__14125;
chunk__14093 = G__14126;
count__14094 = G__14127;
i__14095 = G__14128;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14092);
if(temp__5457__auto__){
var seq__14092__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14092__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14092__$1);
var G__14129 = cljs.core.chunk_rest(seq__14092__$1);
var G__14130 = c__4351__auto__;
var G__14131 = cljs.core.count(c__4351__auto__);
var G__14132 = (0);
seq__14092 = G__14129;
chunk__14093 = G__14130;
count__14094 = G__14131;
i__14095 = G__14132;
continue;
} else {
var vec__14102 = cljs.core.first(seq__14092__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(1),null);
var G__14105_14133 = e.style;
var G__14106_14134 = cljs.core.name(k);
var G__14107_14135 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14105_14133,G__14106_14134,G__14107_14135);


var G__14136 = cljs.core.next(seq__14092__$1);
var G__14137 = null;
var G__14138 = (0);
var G__14139 = (0);
seq__14092 = G__14136;
chunk__14093 = G__14137;
count__14094 = G__14138;
i__14095 = G__14139;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x14077){
return (function (this$){
var this$__$1 = this;
var temp__5455__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5455__auto__)){
var hl_kids = temp__5455__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));

return kids;
}
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x14077){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_14140 = hoplon.core._hoplon_kids(this$__$1);
var i_14141 = cljs.core.count(cljs.core.deref(kids_14140));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_14140,i_14141,child__$1,this$__$1,x14077){
return (function (p1__14072_SHARP_,p2__14071_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14140,cljs.core.assoc,i_14141,p2__14071_SHARP_);
});})(kids_14140,i_14141,child__$1,this$__$1,x14077))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14140,cljs.core.assoc,i_14141,child__$1);
}

return child__$1;
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x14077){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_14142 = hoplon.core._hoplon_kids(this$__$1);
var before_count_14143 = cljs.core.count(cljs.core.deref(kids_14142));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_14142,((function (kids_14142,before_count_14143,child__$1,this$__$1,x14077){
return (function (p1__14073_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__14073_SHARP_));
});})(kids_14142,before_count_14143,child__$1,this$__$1,x14077))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_14142,((function (kids_14142,before_count_14143,child__$1,this$__$1,x14077){
return (function (p1__14074_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__14074_SHARP_));
});})(kids_14142,before_count_14143,child__$1,this$__$1,x14077))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_14142)),(before_count_14143 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x14077){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x14077){
return (function (p1__14075_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x14077){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x14077))
,p1__14075_SHARP_);
});})(existing__$1,this$__$1,x14077))
);

return existing__$1;
});})(x14077))
;

x14077.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x14077){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x14077){
return (function (p1__14076_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x14077){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x14077))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14076_SHARP_], 0)));
});})(new$__$1,this$__$1,x14077))
);
} else {
}
}

return new$__$1;
});})(x14077))
;

return x14077;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__14149 = arguments.length;
switch (G__14149) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14151 = arguments.length;
var i__4532__auto___14152 = (0);
while(true){
if((i__4532__auto___14152 < len__4531__auto___14151)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14152]));

var G__14153 = (i__4532__auto___14152 + (1));
i__4532__auto___14152 = G__14153;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14145){
var G__14146 = cljs.core.first(seq14145);
var seq14145__$1 = cljs.core.next(seq14145);
var G__14147 = cljs.core.first(seq14145__$1);
var seq14145__$2 = cljs.core.next(seq14145__$1);
var G__14148 = cljs.core.first(seq14145__$2);
var seq14145__$3 = cljs.core.next(seq14145__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14146,G__14147,G__14148,seq14145__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__14159 = arguments.length;
switch (G__14159) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14161 = arguments.length;
var i__4532__auto___14162 = (0);
while(true){
if((i__4532__auto___14162 < len__4531__auto___14161)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14162]));

var G__14163 = (i__4532__auto___14162 + (1));
i__4532__auto___14162 = G__14163;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14155){
var G__14156 = cljs.core.first(seq14155);
var seq14155__$1 = cljs.core.next(seq14155);
var G__14157 = cljs.core.first(seq14155__$1);
var seq14155__$2 = cljs.core.next(seq14155__$1);
var G__14158 = cljs.core.first(seq14155__$2);
var seq14155__$3 = cljs.core.next(seq14155__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14156,G__14157,G__14158,seq14155__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__14165_SHARP_,p2__14164_SHARP_,p3__14166_SHARP_){
hoplon.core._attribute_BANG_(p2__14164_SHARP_,p1__14165_SHARP_,p3__14166_SHARP_);

return p1__14165_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14167){
var vec__14168 = p__14167;
var seq__14169 = cljs.core.seq(vec__14168);
var first__14170 = cljs.core.first(seq__14169);
var seq__14169__$1 = cljs.core.next(seq__14169);
var child_cell = first__14170;
var _ = seq__14169__$1;
var kids = vec__14168;
var this$__$1 = this$;
var seq__14171_14175 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__14172_14176 = null;
var count__14173_14177 = (0);
var i__14174_14178 = (0);
while(true){
if((i__14174_14178 < count__14173_14177)){
var x_14179 = chunk__14172_14176.cljs$core$IIndexed$_nth$arity$2(null,i__14174_14178);
var temp__5457__auto___14180 = hoplon.core.__GT_node(x_14179);
if(cljs.core.truth_(temp__5457__auto___14180)){
var x_14181__$1 = temp__5457__auto___14180;
hoplon.core._append_child_BANG_(this$__$1,x_14181__$1);
} else {
}


var G__14182 = seq__14171_14175;
var G__14183 = chunk__14172_14176;
var G__14184 = count__14173_14177;
var G__14185 = (i__14174_14178 + (1));
seq__14171_14175 = G__14182;
chunk__14172_14176 = G__14183;
count__14173_14177 = G__14184;
i__14174_14178 = G__14185;
continue;
} else {
var temp__5457__auto___14186 = cljs.core.seq(seq__14171_14175);
if(temp__5457__auto___14186){
var seq__14171_14187__$1 = temp__5457__auto___14186;
if(cljs.core.chunked_seq_QMARK_(seq__14171_14187__$1)){
var c__4351__auto___14188 = cljs.core.chunk_first(seq__14171_14187__$1);
var G__14189 = cljs.core.chunk_rest(seq__14171_14187__$1);
var G__14190 = c__4351__auto___14188;
var G__14191 = cljs.core.count(c__4351__auto___14188);
var G__14192 = (0);
seq__14171_14175 = G__14189;
chunk__14172_14176 = G__14190;
count__14173_14177 = G__14191;
i__14174_14178 = G__14192;
continue;
} else {
var x_14193 = cljs.core.first(seq__14171_14187__$1);
var temp__5457__auto___14194__$1 = hoplon.core.__GT_node(x_14193);
if(cljs.core.truth_(temp__5457__auto___14194__$1)){
var x_14195__$1 = temp__5457__auto___14194__$1;
hoplon.core._append_child_BANG_(this$__$1,x_14195__$1);
} else {
}


var G__14196 = cljs.core.next(seq__14171_14187__$1);
var G__14197 = null;
var G__14198 = (0);
var G__14199 = (0);
seq__14171_14175 = G__14196;
chunk__14172_14176 = G__14197;
count__14173_14177 = G__14198;
i__14174_14178 = G__14199;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14206 = arguments.length;
var i__4532__auto___14207 = (0);
while(true){
if((i__4532__auto___14207 < len__4531__auto___14206)){
args__4534__auto__.push((arguments[i__4532__auto___14207]));

var G__14208 = (i__4532__auto___14207 + (1));
i__4532__auto___14207 = G__14208;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__14202 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14202,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14202,(1),null);
var G__14205 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__14205,attr);

hoplon.core.add_children_BANG_(G__14205,kids);

return G__14205;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq14200){
var G__14201 = cljs.core.first(seq14200);
var seq14200__$1 = cljs.core.next(seq14200);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14201,seq14200__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__14210 = null;
var G__14210__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__14210__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__14210__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__14210__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__14210__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__14210__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__14210__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__14210__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__14210__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__14210__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__14210__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__14210__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__14210__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__14210__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__14210__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__14210__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__14210__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__14210__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__14210__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__14210__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__14210__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__14210__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__14210 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14210__1.call(this,self__);
case 2:
return G__14210__2.call(this,self__,a);
case 3:
return G__14210__3.call(this,self__,a,b);
case 4:
return G__14210__4.call(this,self__,a,b,c);
case 5:
return G__14210__5.call(this,self__,a,b,c,d);
case 6:
return G__14210__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14210__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14210__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14210__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14210__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14210__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14210__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14210__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14210__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14210__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14210__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14210__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14210__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14210__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14210__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14210__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14210__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14210.cljs$core$IFn$_invoke$arity$1 = G__14210__1;
G__14210.cljs$core$IFn$_invoke$arity$2 = G__14210__2;
G__14210.cljs$core$IFn$_invoke$arity$3 = G__14210__3;
G__14210.cljs$core$IFn$_invoke$arity$4 = G__14210__4;
G__14210.cljs$core$IFn$_invoke$arity$5 = G__14210__5;
G__14210.cljs$core$IFn$_invoke$arity$6 = G__14210__6;
G__14210.cljs$core$IFn$_invoke$arity$7 = G__14210__7;
G__14210.cljs$core$IFn$_invoke$arity$8 = G__14210__8;
G__14210.cljs$core$IFn$_invoke$arity$9 = G__14210__9;
G__14210.cljs$core$IFn$_invoke$arity$10 = G__14210__10;
G__14210.cljs$core$IFn$_invoke$arity$11 = G__14210__11;
G__14210.cljs$core$IFn$_invoke$arity$12 = G__14210__12;
G__14210.cljs$core$IFn$_invoke$arity$13 = G__14210__13;
G__14210.cljs$core$IFn$_invoke$arity$14 = G__14210__14;
G__14210.cljs$core$IFn$_invoke$arity$15 = G__14210__15;
G__14210.cljs$core$IFn$_invoke$arity$16 = G__14210__16;
G__14210.cljs$core$IFn$_invoke$arity$17 = G__14210__17;
G__14210.cljs$core$IFn$_invoke$arity$18 = G__14210__18;
G__14210.cljs$core$IFn$_invoke$arity$19 = G__14210__19;
G__14210.cljs$core$IFn$_invoke$arity$20 = G__14210__20;
G__14210.cljs$core$IFn$_invoke$arity$21 = G__14210__21;
G__14210.cljs$core$IFn$_invoke$arity$22 = G__14210__22;
return G__14210;
})()
;

Element.prototype.apply = (function (self__,args14209){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14209)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__14217__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__14211_14218 = document;
var G__14212_14219 = elem;
var G__14213_14220 = document.createElement(elem);
goog.object.set(G__14211_14218,G__14212_14219,G__14213_14220);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__14214_14221 = hoplon.core.parse_args(args);
var attrs_14222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14214_14221,(0),null);
var kids_14223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14214_14221,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_14222))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_14222);

hoplon.core.add_children_BANG_(helem,kids_14223);
}

return helem;
};
var G__14217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14224__i = 0, G__14224__a = new Array(arguments.length -  0);
while (G__14224__i < G__14224__a.length) {G__14224__a[G__14224__i] = arguments[G__14224__i + 0]; ++G__14224__i;}
  args = new cljs.core.IndexedSeq(G__14224__a,0,null);
} 
return G__14217__delegate.call(this,args);};
G__14217.cljs$lang$maxFixedArity = 0;
G__14217.cljs$lang$applyTo = (function (arglist__14225){
var args = cljs.core.seq(arglist__14225);
return G__14217__delegate(args);
});
G__14217.cljs$core$IFn$_invoke$arity$variadic = G__14217__delegate;
return G__14217;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__14229__delegate = function (args){
var vec__14226 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__14229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14230__i = 0, G__14230__a = new Array(arguments.length -  0);
while (G__14230__i < G__14230__a.length) {G__14230__a[G__14230__i] = arguments[G__14230__i + 0]; ++G__14230__i;}
  args = new cljs.core.IndexedSeq(G__14230__a,0,null);
} 
return G__14229__delegate.call(this,args);};
G__14229.cljs$lang$maxFixedArity = 0;
G__14229.cljs$lang$applyTo = (function (arglist__14231){
var args = cljs.core.seq(arglist__14231);
return G__14229__delegate(args);
});
G__14229.cljs$core$IFn$_invoke$arity$variadic = G__14229__delegate;
return G__14229;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14233 = arguments.length;
var i__4532__auto___14234 = (0);
while(true){
if((i__4532__auto___14234 < len__4531__auto___14233)){
args__4534__auto__.push((arguments[i__4532__auto___14234]));

var G__14235 = (i__4532__auto___14234 + (1));
i__4532__auto___14234 = G__14235;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hoplon.core.html.cljs$lang$applyTo = (function (seq14232){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14232));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14236_SHARP_){
return document.createTextNode(p1__14236_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14237_SHARP_){
return document.createComment(p1__14237_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.elem_BANG_ !== 'undefined')){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__14239_SHARP_,p2__14238_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__14238_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.do_BANG_ !== 'undefined')){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14240 = elem;
var G__14241 = cljs.core.cst$kw$attr;
var G__14242 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14240,G__14241,G__14242) : hoplon.core.do_BANG_.call(null,G__14240,G__14241,G__14242));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.on_BANG_ !== 'undefined')){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__14247 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__14245,G__14246){
return (G__14245.cljs$core$IFn$_invoke$arity$1 ? G__14245.cljs$core$IFn$_invoke$arity$1(G__14246) : G__14245.call(null,G__14246));
});})(on_deck))
);
return (fexpr__14247.cljs$core$IFn$_invoke$arity$2 ? fexpr__14247.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__14247.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14243_SHARP_){
var fexpr__14251 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__14249,G__14250,G__14248){
return (G__14248.cljs$core$IFn$_invoke$arity$3 ? G__14248.cljs$core$IFn$_invoke$arity$3(G__14249,G__14250,null) : G__14248.call(null,G__14249,G__14250,null));
});})(on_deck,items_seq))
);
return (fexpr__14251.cljs$core$IFn$_invoke$arity$3 ? fexpr__14251.cljs$core$IFn$_invoke$arity$3(items_seq,p1__14243_SHARP_,cljs.core.nth) : fexpr__14251.call(null,items_seq,p1__14243_SHARP_,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14244_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__14244_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14244_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14252 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14253 = null;
var count__14254 = (0);
var i__14255 = (0);
while(true){
if((i__14255 < count__14254)){
var i = chunk__14253.cljs$core$IIndexed$_nth$arity$2(null,i__14255);
var e_14258 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__14256 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14256) : tpl.call(null,G__14256));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14258);


var G__14259 = seq__14252;
var G__14260 = chunk__14253;
var G__14261 = count__14254;
var G__14262 = (i__14255 + (1));
seq__14252 = G__14259;
chunk__14253 = G__14260;
count__14254 = G__14261;
i__14255 = G__14262;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14252);
if(temp__5457__auto__){
var seq__14252__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14252__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14252__$1);
var G__14263 = cljs.core.chunk_rest(seq__14252__$1);
var G__14264 = c__4351__auto__;
var G__14265 = cljs.core.count(c__4351__auto__);
var G__14266 = (0);
seq__14252 = G__14263;
chunk__14253 = G__14264;
count__14254 = G__14265;
i__14255 = G__14266;
continue;
} else {
var i = cljs.core.first(seq__14252__$1);
var e_14267 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__14257 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14257) : tpl.call(null,G__14257));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14267);


var G__14268 = cljs.core.next(seq__14252__$1);
var G__14269 = null;
var G__14270 = (0);
var G__14271 = (0);
seq__14252 = G__14268;
chunk__14253 = G__14269;
count__14254 = G__14270;
i__14255 = G__14271;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__4408__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__4408__auto__)){
var e_14272 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14272);

var G__14273 = (_ + (1));
_ = G__14273;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
