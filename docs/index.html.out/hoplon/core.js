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
var G__13896 = (i + (1));
var G__13897 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13896;
ret = G__13897;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__13899 = arguments.length;
switch (G__13899) {
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

var G__13901 = (i + (1));
i = G__13901;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13903_SHARP_,p2__13902_SHARP_){
if((p2__13902_SHARP_ == null)){
return p1__13903_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13903_SHARP_,p2__13902_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13910 = new$__$1;
var vec__13912 = G__13910;
var seq__13913 = cljs.core.seq(vec__13912);
var first__13914 = cljs.core.first(seq__13913);
var seq__13913__$1 = cljs.core.next(seq__13913);
var x = first__13914;
var xs = seq__13913__$1;
var G__13911 = hoplon.core.child_vec(this$);
var vec__13915 = G__13911;
var seq__13916 = cljs.core.seq(vec__13915);
var first__13917 = cljs.core.first(seq__13916);
var seq__13916__$1 = cljs.core.next(seq__13916);
var k = first__13917;
var ks = seq__13916__$1;
var kids = vec__13915;
var G__13910__$1 = G__13910;
var G__13911__$1 = G__13911;
while(true){
var vec__13918 = G__13910__$1;
var seq__13919 = cljs.core.seq(vec__13918);
var first__13920 = cljs.core.first(seq__13919);
var seq__13919__$1 = cljs.core.next(seq__13919);
var x__$1 = first__13920;
var xs__$1 = seq__13919__$1;
var vec__13921 = G__13911__$1;
var seq__13922 = cljs.core.seq(vec__13921);
var first__13923 = cljs.core.first(seq__13922);
var seq__13922__$1 = cljs.core.next(seq__13922);
var k__$1 = first__13923;
var ks__$1 = seq__13922__$1;
var kids__$1 = vec__13921;
if(cljs.core.truth_((function (){var or__3949__auto__ = x__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return k__$1;
}
})())){
var G__13924 = xs__$1;
var G__13925 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__13910__$1 = G__13924;
G__13911__$1 = G__13925;
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
var G__13927 = arguments.length;
switch (G__13927) {
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
var G__13928_13931 = init;
var G__13929_13932 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13928_13931,G__13929_13932) : f.call(null,G__13928_13931,G__13929_13932));

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
var __GT_map = (function (p1__13933_SHARP_){
return cljs.core.zipmap(p1__13933_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__13935 = arguments.length;
switch (G__13935) {
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
var G__13937_13949 = this$;
var G__13938_13950 = "_hoplonWhenDom";
var G__13939_13951 = [f];
goog.object.set(G__13937_13949,G__13938_13950,G__13939_13951);

return setTimeout(((function (temp__5455__auto__){
return (function (){
var fexpr__13944 = ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5455__auto__))
,(20));
} else {
var seq__13945_13952 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__13946_13953 = null;
var count__13947_13954 = (0);
var i__13948_13955 = (0);
while(true){
if((i__13948_13955 < count__13947_13954)){
var f_13956__$1 = chunk__13946_13953.cljs$core$IIndexed$_nth$arity$2(null,i__13948_13955);
(f_13956__$1.cljs$core$IFn$_invoke$arity$0 ? f_13956__$1.cljs$core$IFn$_invoke$arity$0() : f_13956__$1.call(null));


var G__13957 = seq__13945_13952;
var G__13958 = chunk__13946_13953;
var G__13959 = count__13947_13954;
var G__13960 = (i__13948_13955 + (1));
seq__13945_13952 = G__13957;
chunk__13946_13953 = G__13958;
count__13947_13954 = G__13959;
i__13948_13955 = G__13960;
continue;
} else {
var temp__5457__auto___13961 = cljs.core.seq(seq__13945_13952);
if(temp__5457__auto___13961){
var seq__13945_13962__$1 = temp__5457__auto___13961;
if(cljs.core.chunked_seq_QMARK_(seq__13945_13962__$1)){
var c__4351__auto___13963 = cljs.core.chunk_first(seq__13945_13962__$1);
var G__13964 = cljs.core.chunk_rest(seq__13945_13962__$1);
var G__13965 = c__4351__auto___13963;
var G__13966 = cljs.core.count(c__4351__auto___13963);
var G__13967 = (0);
seq__13945_13952 = G__13964;
chunk__13946_13953 = G__13965;
count__13947_13954 = G__13966;
i__13948_13955 = G__13967;
continue;
} else {
var f_13968__$1 = cljs.core.first(seq__13945_13962__$1);
(f_13968__$1.cljs$core$IFn$_invoke$arity$0 ? f_13968__$1.cljs$core$IFn$_invoke$arity$0() : f_13968__$1.call(null));


var G__13969 = cljs.core.next(seq__13945_13962__$1);
var G__13970 = null;
var G__13971 = (0);
var G__13972 = (0);
seq__13945_13952 = G__13969;
chunk__13946_13953 = G__13970;
count__13947_13954 = G__13971;
i__13948_13955 = G__13972;
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
return fexpr__13944();
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
var G__13978 = args;
var vec__13979 = G__13978;
var seq__13980 = cljs.core.seq(vec__13979);
var first__13981 = cljs.core.first(seq__13980);
var seq__13980__$1 = cljs.core.next(seq__13980);
var arg = first__13981;
var args__$1 = seq__13980__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__13978__$1 = G__13978;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__13982 = G__13978__$1;
var seq__13983 = cljs.core.seq(vec__13982);
var first__13984 = cljs.core.first(seq__13983);
var seq__13983__$1 = cljs.core.next(seq__13983);
var arg__$1 = first__13984;
var args__$2 = seq__13983__$1;
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
var G__13985 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__13986 = kids__$2;
var G__13987 = args__$2;
attr__$1 = G__13985;
kids__$1 = G__13986;
G__13978__$1 = G__13987;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__13988 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__13978__$1,attr__$2,kids__$2,vec__13982,seq__13983,first__13984,seq__13983__$1,arg__$1,args__$2,attr,kids,G__13978,vec__13979,seq__13980,first__13981,seq__13980__$1,arg,args__$1){
return (function (p1__13973_SHARP_,p2__13974_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__13973_SHARP_,p2__13974_SHARP_,true);
});})(attr__$1,kids__$1,G__13978__$1,attr__$2,kids__$2,vec__13982,seq__13983,first__13984,seq__13983__$1,arg__$1,args__$2,attr,kids,G__13978,vec__13979,seq__13980,first__13981,seq__13980__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__13989 = kids__$2;
var G__13990 = args__$2;
attr__$1 = G__13988;
kids__$1 = G__13989;
G__13978__$1 = G__13990;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__13991 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__13992 = kids__$2;
var G__13993 = cljs.core.rest(args__$2);
attr__$1 = G__13991;
kids__$1 = G__13992;
G__13978__$1 = G__13993;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__13994 = attr__$2;
var G__13995 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__13996 = args__$2;
attr__$1 = G__13994;
kids__$1 = G__13995;
G__13978__$1 = G__13996;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__13997 = attr__$2;
var G__13998 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__13999 = args__$2;
attr__$1 = G__13997;
kids__$1 = G__13998;
G__13978__$1 = G__13999;
continue;
} else {
var G__14000 = attr__$2;
var G__14001 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14002 = args__$2;
attr__$1 = G__14000;
kids__$1 = G__14001;
G__13978__$1 = G__14002;
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

var G__14004_14011 = hoplon.core._node;
var G__14005_14012 = "string";
var G__14006_14013 = ((function (G__14004_14011,G__14005_14012){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__14004_14011,G__14005_14012))
;
goog.object.set(G__14004_14011,G__14005_14012,G__14006_14013);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__14007_14014 = hoplon.core._node;
var G__14008_14015 = "number";
var G__14009_14016 = ((function (G__14007_14014,G__14008_14015){
return (function (this$){
var G__14010 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14010) : hoplon.core.$text.call(null,G__14010));
});})(G__14007_14014,G__14008_14015))
;
goog.object.set(G__14007_14014,G__14008_14015,G__14009_14016);
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
var opts14020_14048 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14020_14048){
return (function (ret__13073__auto__,p__14021){
var vec__14022 = p__14021;
var ___13074__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14022,(0),null);
var f__13075__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14022,(1),null);
var sym__13076__auto__ = (f__13075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13075__auto__.cljs$core$IFn$_invoke$arity$0() : f__13075__auto__.call(null));
var G__14025 = ret__13073__auto__;
if(cljs.core.truth_(sym__13076__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14025,sym__13076__auto__);
} else {
return G__14025;
}
});})(opts14020_14048))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14020_14048){
return (function (p1__13072__13077__auto__){
var G__14027 = cljs.core.first(p1__13072__13077__auto__);
var fexpr__14026 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14020_14048);
return (fexpr__14026.cljs$core$IFn$_invoke$arity$1 ? fexpr__14026.cljs$core$IFn$_invoke$arity$1(G__14027) : fexpr__14026.call(null,G__14027));
});})(opts14020_14048))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14020_14048){
return (function (){
var checked__13041__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1n6i/ozpa12/index.html.out/hoplon/core.cljs",14,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts14020_14048);
if(cljs.core.truth_(checked__13041__auto__)){
hoplon.core._elem_BANG_ = checked__13041__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts14020_14048))
], null)))));

var opts14030_14049 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14030_14049){
return (function (ret__13073__auto__,p__14031){
var vec__14032 = p__14031;
var ___13074__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(0),null);
var f__13075__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(1),null);
var sym__13076__auto__ = (f__13075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13075__auto__.cljs$core$IFn$_invoke$arity$0() : f__13075__auto__.call(null));
var G__14035 = ret__13073__auto__;
if(cljs.core.truth_(sym__13076__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14035,sym__13076__auto__);
} else {
return G__14035;
}
});})(opts14030_14049))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14030_14049){
return (function (p1__13072__13077__auto__){
var G__14037 = cljs.core.first(p1__13072__13077__auto__);
var fexpr__14036 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14030_14049);
return (fexpr__14036.cljs$core$IFn$_invoke$arity$1 ? fexpr__14036.cljs$core$IFn$_invoke$arity$1(G__14037) : fexpr__14036.call(null,G__14037));
});})(opts14030_14049))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14030_14049){
return (function (){
var checked__13041__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1n6i/ozpa12/index.html.out/hoplon/core.cljs",12,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts14030_14049);
if(cljs.core.truth_(checked__13041__auto__)){
hoplon.core._do_BANG_ = checked__13041__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts14030_14049))
], null)))));

var opts14040 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14040){
return (function (ret__13073__auto__,p__14041){
var vec__14042 = p__14041;
var ___13074__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14042,(0),null);
var f__13075__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14042,(1),null);
var sym__13076__auto__ = (f__13075__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13075__auto__.cljs$core$IFn$_invoke$arity$0() : f__13075__auto__.call(null));
var G__14045 = ret__13073__auto__;
if(cljs.core.truth_(sym__13076__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14045,sym__13076__auto__);
} else {
return G__14045;
}
});})(opts14040))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14040){
return (function (p1__13072__13077__auto__){
var G__14047 = cljs.core.first(p1__13072__13077__auto__);
var fexpr__14046 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14040);
return (fexpr__14046.cljs$core$IFn$_invoke$arity$1 ? fexpr__14046.cljs$core$IFn$_invoke$arity$1(G__14047) : fexpr__14046.call(null,G__14047));
});})(opts14040))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14040){
return (function (){
var checked__13041__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1n6i/ozpa12/index.html.out/hoplon/core.cljs",12,1,75,75,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts14040);
if(cljs.core.truth_(checked__13041__auto__)){
hoplon.core._on_BANG_ = checked__13041__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts14040))
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
var x14058 = elem;
x14058.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x14058.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x14058){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x14058))
;

x14058.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x14058.cljs$core$ILookup$_lookup$arity$2 = ((function (x14058){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__14059 = this$__$1.children;
var G__14060 = k;
return goog.object.get(G__14059,G__14060);
}
});})(x14058))
;

x14058.cljs$core$ILookup$_lookup$arity$3 = ((function (x14058){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3949__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x14058.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x14058){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14061 = cljs.core.seq(kvs);
var chunk__14063 = null;
var count__14064 = (0);
var i__14065 = (0);
while(true){
if((i__14065 < count__14064)){
var vec__14067 = chunk__14063.cljs$core$IIndexed$_nth$arity$2(null,i__14065);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14067,(1),null);
var k_14089__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14089__$1);
} else {
e.setAttribute(k_14089__$1,((v === true)?k_14089__$1:v));
}


var G__14090 = seq__14061;
var G__14091 = chunk__14063;
var G__14092 = count__14064;
var G__14093 = (i__14065 + (1));
seq__14061 = G__14090;
chunk__14063 = G__14091;
count__14064 = G__14092;
i__14065 = G__14093;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14061);
if(temp__5457__auto__){
var seq__14061__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14061__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14061__$1);
var G__14094 = cljs.core.chunk_rest(seq__14061__$1);
var G__14095 = c__4351__auto__;
var G__14096 = cljs.core.count(c__4351__auto__);
var G__14097 = (0);
seq__14061 = G__14094;
chunk__14063 = G__14095;
count__14064 = G__14096;
i__14065 = G__14097;
continue;
} else {
var vec__14070 = cljs.core.first(seq__14061__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14070,(1),null);
var k_14098__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14098__$1);
} else {
e.setAttribute(k_14098__$1,((v === true)?k_14098__$1:v));
}


var G__14099 = cljs.core.next(seq__14061__$1);
var G__14100 = null;
var G__14101 = (0);
var G__14102 = (0);
seq__14061 = G__14099;
chunk__14063 = G__14100;
count__14064 = G__14101;
i__14065 = G__14102;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x14058){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14073 = cljs.core.seq(kvs);
var chunk__14074 = null;
var count__14075 = (0);
var i__14076 = (0);
while(true){
if((i__14076 < count__14075)){
var vec__14077 = chunk__14074.cljs$core$IIndexed$_nth$arity$2(null,i__14076);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14077,(1),null);
var G__14080_14103 = e.style;
var G__14081_14104 = cljs.core.name(k);
var G__14082_14105 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14080_14103,G__14081_14104,G__14082_14105);


var G__14106 = seq__14073;
var G__14107 = chunk__14074;
var G__14108 = count__14075;
var G__14109 = (i__14076 + (1));
seq__14073 = G__14106;
chunk__14074 = G__14107;
count__14075 = G__14108;
i__14076 = G__14109;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14073);
if(temp__5457__auto__){
var seq__14073__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14073__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14073__$1);
var G__14110 = cljs.core.chunk_rest(seq__14073__$1);
var G__14111 = c__4351__auto__;
var G__14112 = cljs.core.count(c__4351__auto__);
var G__14113 = (0);
seq__14073 = G__14110;
chunk__14074 = G__14111;
count__14075 = G__14112;
i__14076 = G__14113;
continue;
} else {
var vec__14083 = cljs.core.first(seq__14073__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(1),null);
var G__14086_14114 = e.style;
var G__14087_14115 = cljs.core.name(k);
var G__14088_14116 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14086_14114,G__14087_14115,G__14088_14116);


var G__14117 = cljs.core.next(seq__14073__$1);
var G__14118 = null;
var G__14119 = (0);
var G__14120 = (0);
seq__14073 = G__14117;
chunk__14074 = G__14118;
count__14075 = G__14119;
i__14076 = G__14120;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x14058){
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
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x14058){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_14121 = hoplon.core._hoplon_kids(this$__$1);
var i_14122 = cljs.core.count(cljs.core.deref(kids_14121));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_14121,i_14122,child__$1,this$__$1,x14058){
return (function (p1__14053_SHARP_,p2__14052_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14121,cljs.core.assoc,i_14122,p2__14052_SHARP_);
});})(kids_14121,i_14122,child__$1,this$__$1,x14058))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14121,cljs.core.assoc,i_14122,child__$1);
}

return child__$1;
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x14058){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_14123 = hoplon.core._hoplon_kids(this$__$1);
var before_count_14124 = cljs.core.count(cljs.core.deref(kids_14123));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_14123,((function (kids_14123,before_count_14124,child__$1,this$__$1,x14058){
return (function (p1__14054_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__14054_SHARP_));
});})(kids_14123,before_count_14124,child__$1,this$__$1,x14058))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_14123,((function (kids_14123,before_count_14124,child__$1,this$__$1,x14058){
return (function (p1__14055_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__14055_SHARP_));
});})(kids_14123,before_count_14124,child__$1,this$__$1,x14058))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_14123)),(before_count_14124 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x14058){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x14058){
return (function (p1__14056_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x14058){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x14058))
,p1__14056_SHARP_);
});})(existing__$1,this$__$1,x14058))
);

return existing__$1;
});})(x14058))
;

x14058.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x14058){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x14058){
return (function (p1__14057_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x14058){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x14058))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14057_SHARP_], 0)));
});})(new$__$1,this$__$1,x14058))
);
} else {
}
}

return new$__$1;
});})(x14058))
;

return x14058;
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
var G__14130 = arguments.length;
switch (G__14130) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14132 = arguments.length;
var i__4532__auto___14133 = (0);
while(true){
if((i__4532__auto___14133 < len__4531__auto___14132)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14133]));

var G__14134 = (i__4532__auto___14133 + (1));
i__4532__auto___14133 = G__14134;
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
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14126){
var G__14127 = cljs.core.first(seq14126);
var seq14126__$1 = cljs.core.next(seq14126);
var G__14128 = cljs.core.first(seq14126__$1);
var seq14126__$2 = cljs.core.next(seq14126__$1);
var G__14129 = cljs.core.first(seq14126__$2);
var seq14126__$3 = cljs.core.next(seq14126__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14127,G__14128,G__14129,seq14126__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__14140 = arguments.length;
switch (G__14140) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14142 = arguments.length;
var i__4532__auto___14143 = (0);
while(true){
if((i__4532__auto___14143 < len__4531__auto___14142)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14143]));

var G__14144 = (i__4532__auto___14143 + (1));
i__4532__auto___14143 = G__14144;
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
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14136){
var G__14137 = cljs.core.first(seq14136);
var seq14136__$1 = cljs.core.next(seq14136);
var G__14138 = cljs.core.first(seq14136__$1);
var seq14136__$2 = cljs.core.next(seq14136__$1);
var G__14139 = cljs.core.first(seq14136__$2);
var seq14136__$3 = cljs.core.next(seq14136__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14137,G__14138,G__14139,seq14136__$3);
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
return cljs.core.reduce_kv((function (p1__14146_SHARP_,p2__14145_SHARP_,p3__14147_SHARP_){
hoplon.core._attribute_BANG_(p2__14145_SHARP_,p1__14146_SHARP_,p3__14147_SHARP_);

return p1__14146_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14148){
var vec__14149 = p__14148;
var seq__14150 = cljs.core.seq(vec__14149);
var first__14151 = cljs.core.first(seq__14150);
var seq__14150__$1 = cljs.core.next(seq__14150);
var child_cell = first__14151;
var _ = seq__14150__$1;
var kids = vec__14149;
var this$__$1 = this$;
var seq__14152_14156 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__14153_14157 = null;
var count__14154_14158 = (0);
var i__14155_14159 = (0);
while(true){
if((i__14155_14159 < count__14154_14158)){
var x_14160 = chunk__14153_14157.cljs$core$IIndexed$_nth$arity$2(null,i__14155_14159);
var temp__5457__auto___14161 = hoplon.core.__GT_node(x_14160);
if(cljs.core.truth_(temp__5457__auto___14161)){
var x_14162__$1 = temp__5457__auto___14161;
hoplon.core._append_child_BANG_(this$__$1,x_14162__$1);
} else {
}


var G__14163 = seq__14152_14156;
var G__14164 = chunk__14153_14157;
var G__14165 = count__14154_14158;
var G__14166 = (i__14155_14159 + (1));
seq__14152_14156 = G__14163;
chunk__14153_14157 = G__14164;
count__14154_14158 = G__14165;
i__14155_14159 = G__14166;
continue;
} else {
var temp__5457__auto___14167 = cljs.core.seq(seq__14152_14156);
if(temp__5457__auto___14167){
var seq__14152_14168__$1 = temp__5457__auto___14167;
if(cljs.core.chunked_seq_QMARK_(seq__14152_14168__$1)){
var c__4351__auto___14169 = cljs.core.chunk_first(seq__14152_14168__$1);
var G__14170 = cljs.core.chunk_rest(seq__14152_14168__$1);
var G__14171 = c__4351__auto___14169;
var G__14172 = cljs.core.count(c__4351__auto___14169);
var G__14173 = (0);
seq__14152_14156 = G__14170;
chunk__14153_14157 = G__14171;
count__14154_14158 = G__14172;
i__14155_14159 = G__14173;
continue;
} else {
var x_14174 = cljs.core.first(seq__14152_14168__$1);
var temp__5457__auto___14175__$1 = hoplon.core.__GT_node(x_14174);
if(cljs.core.truth_(temp__5457__auto___14175__$1)){
var x_14176__$1 = temp__5457__auto___14175__$1;
hoplon.core._append_child_BANG_(this$__$1,x_14176__$1);
} else {
}


var G__14177 = cljs.core.next(seq__14152_14168__$1);
var G__14178 = null;
var G__14179 = (0);
var G__14180 = (0);
seq__14152_14156 = G__14177;
chunk__14153_14157 = G__14178;
count__14154_14158 = G__14179;
i__14155_14159 = G__14180;
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
var len__4531__auto___14187 = arguments.length;
var i__4532__auto___14188 = (0);
while(true){
if((i__4532__auto___14188 < len__4531__auto___14187)){
args__4534__auto__.push((arguments[i__4532__auto___14188]));

var G__14189 = (i__4532__auto___14188 + (1));
i__4532__auto___14188 = G__14189;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__14183 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(1),null);
var G__14186 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__14186,attr);

hoplon.core.add_children_BANG_(G__14186,kids);

return G__14186;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq14181){
var G__14182 = cljs.core.first(seq14181);
var seq14181__$1 = cljs.core.next(seq14181);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14182,seq14181__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__14191 = null;
var G__14191__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__14191__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__14191__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__14191__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__14191__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__14191__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__14191__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__14191__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__14191__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__14191__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__14191__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__14191__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__14191__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__14191__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__14191__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__14191__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__14191__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__14191__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__14191__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__14191__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__14191__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__14191__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__14191 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14191__1.call(this,self__);
case 2:
return G__14191__2.call(this,self__,a);
case 3:
return G__14191__3.call(this,self__,a,b);
case 4:
return G__14191__4.call(this,self__,a,b,c);
case 5:
return G__14191__5.call(this,self__,a,b,c,d);
case 6:
return G__14191__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14191__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14191__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14191__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14191__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14191__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14191__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14191__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14191__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14191__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14191__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14191__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14191__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14191__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14191__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14191__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14191__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14191.cljs$core$IFn$_invoke$arity$1 = G__14191__1;
G__14191.cljs$core$IFn$_invoke$arity$2 = G__14191__2;
G__14191.cljs$core$IFn$_invoke$arity$3 = G__14191__3;
G__14191.cljs$core$IFn$_invoke$arity$4 = G__14191__4;
G__14191.cljs$core$IFn$_invoke$arity$5 = G__14191__5;
G__14191.cljs$core$IFn$_invoke$arity$6 = G__14191__6;
G__14191.cljs$core$IFn$_invoke$arity$7 = G__14191__7;
G__14191.cljs$core$IFn$_invoke$arity$8 = G__14191__8;
G__14191.cljs$core$IFn$_invoke$arity$9 = G__14191__9;
G__14191.cljs$core$IFn$_invoke$arity$10 = G__14191__10;
G__14191.cljs$core$IFn$_invoke$arity$11 = G__14191__11;
G__14191.cljs$core$IFn$_invoke$arity$12 = G__14191__12;
G__14191.cljs$core$IFn$_invoke$arity$13 = G__14191__13;
G__14191.cljs$core$IFn$_invoke$arity$14 = G__14191__14;
G__14191.cljs$core$IFn$_invoke$arity$15 = G__14191__15;
G__14191.cljs$core$IFn$_invoke$arity$16 = G__14191__16;
G__14191.cljs$core$IFn$_invoke$arity$17 = G__14191__17;
G__14191.cljs$core$IFn$_invoke$arity$18 = G__14191__18;
G__14191.cljs$core$IFn$_invoke$arity$19 = G__14191__19;
G__14191.cljs$core$IFn$_invoke$arity$20 = G__14191__20;
G__14191.cljs$core$IFn$_invoke$arity$21 = G__14191__21;
G__14191.cljs$core$IFn$_invoke$arity$22 = G__14191__22;
return G__14191;
})()
;

Element.prototype.apply = (function (self__,args14190){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14190)));
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
var G__14198__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__14192_14199 = document;
var G__14193_14200 = elem;
var G__14194_14201 = document.createElement(elem);
goog.object.set(G__14192_14199,G__14193_14200,G__14194_14201);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__14195_14202 = hoplon.core.parse_args(args);
var attrs_14203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195_14202,(0),null);
var kids_14204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195_14202,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_14203))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_14203);

hoplon.core.add_children_BANG_(helem,kids_14204);
}

return helem;
};
var G__14198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14205__i = 0, G__14205__a = new Array(arguments.length -  0);
while (G__14205__i < G__14205__a.length) {G__14205__a[G__14205__i] = arguments[G__14205__i + 0]; ++G__14205__i;}
  args = new cljs.core.IndexedSeq(G__14205__a,0,null);
} 
return G__14198__delegate.call(this,args);};
G__14198.cljs$lang$maxFixedArity = 0;
G__14198.cljs$lang$applyTo = (function (arglist__14206){
var args = cljs.core.seq(arglist__14206);
return G__14198__delegate(args);
});
G__14198.cljs$core$IFn$_invoke$arity$variadic = G__14198__delegate;
return G__14198;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__14210__delegate = function (args){
var vec__14207 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14207,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14207,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__14210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14211__i = 0, G__14211__a = new Array(arguments.length -  0);
while (G__14211__i < G__14211__a.length) {G__14211__a[G__14211__i] = arguments[G__14211__i + 0]; ++G__14211__i;}
  args = new cljs.core.IndexedSeq(G__14211__a,0,null);
} 
return G__14210__delegate.call(this,args);};
G__14210.cljs$lang$maxFixedArity = 0;
G__14210.cljs$lang$applyTo = (function (arglist__14212){
var args = cljs.core.seq(arglist__14212);
return G__14210__delegate(args);
});
G__14210.cljs$core$IFn$_invoke$arity$variadic = G__14210__delegate;
return G__14210;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14214 = arguments.length;
var i__4532__auto___14215 = (0);
while(true){
if((i__4532__auto___14215 < len__4531__auto___14214)){
args__4534__auto__.push((arguments[i__4532__auto___14215]));

var G__14216 = (i__4532__auto___14215 + (1));
i__4532__auto___14215 = G__14216;
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
hoplon.core.html.cljs$lang$applyTo = (function (seq14213){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14213));
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
hoplon.core.$text = (function hoplon$core$$text(p1__14217_SHARP_){
return document.createTextNode(p1__14217_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14218_SHARP_){
return document.createComment(p1__14218_SHARP_);
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
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__14220_SHARP_,p2__14219_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__14219_SHARP_);
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
var G__14221 = elem;
var G__14222 = cljs.core.cst$kw$attr;
var G__14223 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14221,G__14222,G__14223) : hoplon.core.do_BANG_.call(null,G__14221,G__14222,G__14223));
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
var items_seq = (function (){var fexpr__14228 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__14226,G__14227){
return (G__14226.cljs$core$IFn$_invoke$arity$1 ? G__14226.cljs$core$IFn$_invoke$arity$1(G__14227) : G__14226.call(null,G__14227));
});})(on_deck))
);
return (fexpr__14228.cljs$core$IFn$_invoke$arity$2 ? fexpr__14228.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__14228.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14224_SHARP_){
var fexpr__14232 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__14231,G__14230,G__14229){
return (G__14229.cljs$core$IFn$_invoke$arity$3 ? G__14229.cljs$core$IFn$_invoke$arity$3(G__14230,G__14231,null) : G__14229.call(null,G__14230,G__14231,null));
});})(on_deck,items_seq))
);
return (fexpr__14232.cljs$core$IFn$_invoke$arity$3 ? fexpr__14232.cljs$core$IFn$_invoke$arity$3(p1__14224_SHARP_,items_seq,cljs.core.nth) : fexpr__14232.call(null,p1__14224_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14225_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__14225_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14225_SHARP_,cljs.core.rest);

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
var seq__14233 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14234 = null;
var count__14235 = (0);
var i__14236 = (0);
while(true){
if((i__14236 < count__14235)){
var i = chunk__14234.cljs$core$IIndexed$_nth$arity$2(null,i__14236);
var e_14239 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__14237 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14237) : tpl.call(null,G__14237));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14239);


var G__14240 = seq__14233;
var G__14241 = chunk__14234;
var G__14242 = count__14235;
var G__14243 = (i__14236 + (1));
seq__14233 = G__14240;
chunk__14234 = G__14241;
count__14235 = G__14242;
i__14236 = G__14243;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14233);
if(temp__5457__auto__){
var seq__14233__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14233__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14233__$1);
var G__14244 = cljs.core.chunk_rest(seq__14233__$1);
var G__14245 = c__4351__auto__;
var G__14246 = cljs.core.count(c__4351__auto__);
var G__14247 = (0);
seq__14233 = G__14244;
chunk__14234 = G__14245;
count__14235 = G__14246;
i__14236 = G__14247;
continue;
} else {
var i = cljs.core.first(seq__14233__$1);
var e_14248 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__14238 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14238) : tpl.call(null,G__14238));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14248);


var G__14249 = cljs.core.next(seq__14233__$1);
var G__14250 = null;
var G__14251 = (0);
var G__14252 = (0);
seq__14233 = G__14249;
chunk__14234 = G__14250;
count__14235 = G__14251;
i__14236 = G__14252;
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
var e_14253 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14253);

var G__14254 = (_ + (1));
_ = G__14254;
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
