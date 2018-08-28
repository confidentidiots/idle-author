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
var G__13946 = (i + (1));
var G__13947 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13946;
ret = G__13947;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__13949 = arguments.length;
switch (G__13949) {
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

var G__13951 = (i + (1));
i = G__13951;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13953_SHARP_,p2__13952_SHARP_){
if((p2__13952_SHARP_ == null)){
return p1__13953_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13953_SHARP_,p2__13952_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13960 = new$__$1;
var vec__13962 = G__13960;
var seq__13963 = cljs.core.seq(vec__13962);
var first__13964 = cljs.core.first(seq__13963);
var seq__13963__$1 = cljs.core.next(seq__13963);
var x = first__13964;
var xs = seq__13963__$1;
var G__13961 = hoplon.core.child_vec(this$);
var vec__13965 = G__13961;
var seq__13966 = cljs.core.seq(vec__13965);
var first__13967 = cljs.core.first(seq__13966);
var seq__13966__$1 = cljs.core.next(seq__13966);
var k = first__13967;
var ks = seq__13966__$1;
var kids = vec__13965;
var G__13960__$1 = G__13960;
var G__13961__$1 = G__13961;
while(true){
var vec__13968 = G__13960__$1;
var seq__13969 = cljs.core.seq(vec__13968);
var first__13970 = cljs.core.first(seq__13969);
var seq__13969__$1 = cljs.core.next(seq__13969);
var x__$1 = first__13970;
var xs__$1 = seq__13969__$1;
var vec__13971 = G__13961__$1;
var seq__13972 = cljs.core.seq(vec__13971);
var first__13973 = cljs.core.first(seq__13972);
var seq__13972__$1 = cljs.core.next(seq__13972);
var k__$1 = first__13973;
var ks__$1 = seq__13972__$1;
var kids__$1 = vec__13971;
if(cljs.core.truth_((function (){var or__3949__auto__ = x__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return k__$1;
}
})())){
var G__13974 = xs__$1;
var G__13975 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__13960__$1 = G__13974;
G__13961__$1 = G__13975;
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
var G__13977 = arguments.length;
switch (G__13977) {
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
var G__13978_13981 = init;
var G__13979_13982 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13978_13981,G__13979_13982) : f.call(null,G__13978_13981,G__13979_13982));

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
var __GT_map = (function (p1__13983_SHARP_){
return cljs.core.zipmap(p1__13983_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__13985 = arguments.length;
switch (G__13985) {
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
var G__13987_13999 = this$;
var G__13988_14000 = "_hoplonWhenDom";
var G__13989_14001 = [f];
goog.object.set(G__13987_13999,G__13988_14000,G__13989_14001);

return setTimeout(((function (temp__5455__auto__){
return (function (){
var fexpr__13994 = ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5455__auto__))
,(20));
} else {
var seq__13995_14002 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__13996_14003 = null;
var count__13997_14004 = (0);
var i__13998_14005 = (0);
while(true){
if((i__13998_14005 < count__13997_14004)){
var f_14006__$1 = chunk__13996_14003.cljs$core$IIndexed$_nth$arity$2(null,i__13998_14005);
(f_14006__$1.cljs$core$IFn$_invoke$arity$0 ? f_14006__$1.cljs$core$IFn$_invoke$arity$0() : f_14006__$1.call(null));


var G__14007 = seq__13995_14002;
var G__14008 = chunk__13996_14003;
var G__14009 = count__13997_14004;
var G__14010 = (i__13998_14005 + (1));
seq__13995_14002 = G__14007;
chunk__13996_14003 = G__14008;
count__13997_14004 = G__14009;
i__13998_14005 = G__14010;
continue;
} else {
var temp__5457__auto___14011 = cljs.core.seq(seq__13995_14002);
if(temp__5457__auto___14011){
var seq__13995_14012__$1 = temp__5457__auto___14011;
if(cljs.core.chunked_seq_QMARK_(seq__13995_14012__$1)){
var c__4351__auto___14013 = cljs.core.chunk_first(seq__13995_14012__$1);
var G__14014 = cljs.core.chunk_rest(seq__13995_14012__$1);
var G__14015 = c__4351__auto___14013;
var G__14016 = cljs.core.count(c__4351__auto___14013);
var G__14017 = (0);
seq__13995_14002 = G__14014;
chunk__13996_14003 = G__14015;
count__13997_14004 = G__14016;
i__13998_14005 = G__14017;
continue;
} else {
var f_14018__$1 = cljs.core.first(seq__13995_14012__$1);
(f_14018__$1.cljs$core$IFn$_invoke$arity$0 ? f_14018__$1.cljs$core$IFn$_invoke$arity$0() : f_14018__$1.call(null));


var G__14019 = cljs.core.next(seq__13995_14012__$1);
var G__14020 = null;
var G__14021 = (0);
var G__14022 = (0);
seq__13995_14002 = G__14019;
chunk__13996_14003 = G__14020;
count__13997_14004 = G__14021;
i__13998_14005 = G__14022;
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
return fexpr__13994();
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
var G__14028 = args;
var vec__14029 = G__14028;
var seq__14030 = cljs.core.seq(vec__14029);
var first__14031 = cljs.core.first(seq__14030);
var seq__14030__$1 = cljs.core.next(seq__14030);
var arg = first__14031;
var args__$1 = seq__14030__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14028__$1 = G__14028;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14032 = G__14028__$1;
var seq__14033 = cljs.core.seq(vec__14032);
var first__14034 = cljs.core.first(seq__14033);
var seq__14033__$1 = cljs.core.next(seq__14033);
var arg__$1 = first__14034;
var args__$2 = seq__14033__$1;
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
var G__14035 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__14036 = kids__$2;
var G__14037 = args__$2;
attr__$1 = G__14035;
kids__$1 = G__14036;
G__14028__$1 = G__14037;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__14038 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__14028__$1,attr__$2,kids__$2,vec__14032,seq__14033,first__14034,seq__14033__$1,arg__$1,args__$2,attr,kids,G__14028,vec__14029,seq__14030,first__14031,seq__14030__$1,arg,args__$1){
return (function (p1__14023_SHARP_,p2__14024_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14023_SHARP_,p2__14024_SHARP_,true);
});})(attr__$1,kids__$1,G__14028__$1,attr__$2,kids__$2,vec__14032,seq__14033,first__14034,seq__14033__$1,arg__$1,args__$2,attr,kids,G__14028,vec__14029,seq__14030,first__14031,seq__14030__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14039 = kids__$2;
var G__14040 = args__$2;
attr__$1 = G__14038;
kids__$1 = G__14039;
G__14028__$1 = G__14040;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__14041 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14042 = kids__$2;
var G__14043 = cljs.core.rest(args__$2);
attr__$1 = G__14041;
kids__$1 = G__14042;
G__14028__$1 = G__14043;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__14044 = attr__$2;
var G__14045 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14046 = args__$2;
attr__$1 = G__14044;
kids__$1 = G__14045;
G__14028__$1 = G__14046;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__14047 = attr__$2;
var G__14048 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14049 = args__$2;
attr__$1 = G__14047;
kids__$1 = G__14048;
G__14028__$1 = G__14049;
continue;
} else {
var G__14050 = attr__$2;
var G__14051 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14052 = args__$2;
attr__$1 = G__14050;
kids__$1 = G__14051;
G__14028__$1 = G__14052;
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

var G__14054_14061 = hoplon.core._node;
var G__14055_14062 = "string";
var G__14056_14063 = ((function (G__14054_14061,G__14055_14062){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__14054_14061,G__14055_14062))
;
goog.object.set(G__14054_14061,G__14055_14062,G__14056_14063);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__14057_14064 = hoplon.core._node;
var G__14058_14065 = "number";
var G__14059_14066 = ((function (G__14057_14064,G__14058_14065){
return (function (this$){
var G__14060 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14060) : hoplon.core.$text.call(null,G__14060));
});})(G__14057_14064,G__14058_14065))
;
goog.object.set(G__14057_14064,G__14058_14065,G__14059_14066);
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
var opts14070_14098 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14070_14098){
return (function (ret__13123__auto__,p__14071){
var vec__14072 = p__14071;
var ___13124__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(0),null);
var f__13125__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(1),null);
var sym__13126__auto__ = (f__13125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13125__auto__.cljs$core$IFn$_invoke$arity$0() : f__13125__auto__.call(null));
var G__14075 = ret__13123__auto__;
if(cljs.core.truth_(sym__13126__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14075,sym__13126__auto__);
} else {
return G__14075;
}
});})(opts14070_14098))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14070_14098){
return (function (p1__13122__13127__auto__){
var G__14077 = cljs.core.first(p1__13122__13127__auto__);
var fexpr__14076 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14070_14098);
return (fexpr__14076.cljs$core$IFn$_invoke$arity$1 ? fexpr__14076.cljs$core$IFn$_invoke$arity$1(G__14077) : fexpr__14076.call(null,G__14077));
});})(opts14070_14098))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14070_14098){
return (function (){
var checked__13091__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1d7i/ozpa12/index.html.out/hoplon/core.cljs",14,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts14070_14098);
if(cljs.core.truth_(checked__13091__auto__)){
hoplon.core._elem_BANG_ = checked__13091__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts14070_14098))
], null)))));

var opts14080_14099 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14080_14099){
return (function (ret__13123__auto__,p__14081){
var vec__14082 = p__14081;
var ___13124__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(0),null);
var f__13125__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14082,(1),null);
var sym__13126__auto__ = (f__13125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13125__auto__.cljs$core$IFn$_invoke$arity$0() : f__13125__auto__.call(null));
var G__14085 = ret__13123__auto__;
if(cljs.core.truth_(sym__13126__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14085,sym__13126__auto__);
} else {
return G__14085;
}
});})(opts14080_14099))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14080_14099){
return (function (p1__13122__13127__auto__){
var G__14087 = cljs.core.first(p1__13122__13127__auto__);
var fexpr__14086 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14080_14099);
return (fexpr__14086.cljs$core$IFn$_invoke$arity$1 ? fexpr__14086.cljs$core$IFn$_invoke$arity$1(G__14087) : fexpr__14086.call(null,G__14087));
});})(opts14080_14099))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14080_14099){
return (function (){
var checked__13091__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1d7i/ozpa12/index.html.out/hoplon/core.cljs",12,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts14080_14099);
if(cljs.core.truth_(checked__13091__auto__)){
hoplon.core._do_BANG_ = checked__13091__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts14080_14099))
], null)))));

var opts14090 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts14090){
return (function (ret__13123__auto__,p__14091){
var vec__14092 = p__14091;
var ___13124__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14092,(0),null);
var f__13125__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14092,(1),null);
var sym__13126__auto__ = (f__13125__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13125__auto__.cljs$core$IFn$_invoke$arity$0() : f__13125__auto__.call(null));
var G__14095 = ret__13123__auto__;
if(cljs.core.truth_(sym__13126__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14095,sym__13126__auto__);
} else {
return G__14095;
}
});})(opts14090))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts14090){
return (function (p1__13122__13127__auto__){
var G__14097 = cljs.core.first(p1__13122__13127__auto__);
var fexpr__14096 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts14090);
return (fexpr__14096.cljs$core$IFn$_invoke$arity$1 ? fexpr__14096.cljs$core$IFn$_invoke$arity$1(G__14097) : fexpr__14096.call(null,G__14097));
});})(opts14090))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14090){
return (function (){
var checked__13091__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/1d7i/ozpa12/index.html.out/hoplon/core.cljs",12,1,75,75,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts14090);
if(cljs.core.truth_(checked__13091__auto__)){
hoplon.core._on_BANG_ = checked__13091__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts14090))
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
var x14108 = elem;
x14108.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x14108.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x14108){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x14108))
;

x14108.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x14108.cljs$core$ILookup$_lookup$arity$2 = ((function (x14108){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__14109 = this$__$1.children;
var G__14110 = k;
return goog.object.get(G__14109,G__14110);
}
});})(x14108))
;

x14108.cljs$core$ILookup$_lookup$arity$3 = ((function (x14108){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3949__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x14108.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x14108){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14111 = cljs.core.seq(kvs);
var chunk__14113 = null;
var count__14114 = (0);
var i__14115 = (0);
while(true){
if((i__14115 < count__14114)){
var vec__14117 = chunk__14113.cljs$core$IIndexed$_nth$arity$2(null,i__14115);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14117,(1),null);
var k_14139__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14139__$1);
} else {
e.setAttribute(k_14139__$1,((v === true)?k_14139__$1:v));
}


var G__14140 = seq__14111;
var G__14141 = chunk__14113;
var G__14142 = count__14114;
var G__14143 = (i__14115 + (1));
seq__14111 = G__14140;
chunk__14113 = G__14141;
count__14114 = G__14142;
i__14115 = G__14143;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14111);
if(temp__5457__auto__){
var seq__14111__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14111__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14111__$1);
var G__14144 = cljs.core.chunk_rest(seq__14111__$1);
var G__14145 = c__4351__auto__;
var G__14146 = cljs.core.count(c__4351__auto__);
var G__14147 = (0);
seq__14111 = G__14144;
chunk__14113 = G__14145;
count__14114 = G__14146;
i__14115 = G__14147;
continue;
} else {
var vec__14120 = cljs.core.first(seq__14111__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14120,(1),null);
var k_14148__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14148__$1);
} else {
e.setAttribute(k_14148__$1,((v === true)?k_14148__$1:v));
}


var G__14149 = cljs.core.next(seq__14111__$1);
var G__14150 = null;
var G__14151 = (0);
var G__14152 = (0);
seq__14111 = G__14149;
chunk__14113 = G__14150;
count__14114 = G__14151;
i__14115 = G__14152;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x14108){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14123 = cljs.core.seq(kvs);
var chunk__14124 = null;
var count__14125 = (0);
var i__14126 = (0);
while(true){
if((i__14126 < count__14125)){
var vec__14127 = chunk__14124.cljs$core$IIndexed$_nth$arity$2(null,i__14126);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14127,(1),null);
var G__14130_14153 = e.style;
var G__14131_14154 = cljs.core.name(k);
var G__14132_14155 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14130_14153,G__14131_14154,G__14132_14155);


var G__14156 = seq__14123;
var G__14157 = chunk__14124;
var G__14158 = count__14125;
var G__14159 = (i__14126 + (1));
seq__14123 = G__14156;
chunk__14124 = G__14157;
count__14125 = G__14158;
i__14126 = G__14159;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14123);
if(temp__5457__auto__){
var seq__14123__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14123__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14123__$1);
var G__14160 = cljs.core.chunk_rest(seq__14123__$1);
var G__14161 = c__4351__auto__;
var G__14162 = cljs.core.count(c__4351__auto__);
var G__14163 = (0);
seq__14123 = G__14160;
chunk__14124 = G__14161;
count__14125 = G__14162;
i__14126 = G__14163;
continue;
} else {
var vec__14133 = cljs.core.first(seq__14123__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(1),null);
var G__14136_14164 = e.style;
var G__14137_14165 = cljs.core.name(k);
var G__14138_14166 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14136_14164,G__14137_14165,G__14138_14166);


var G__14167 = cljs.core.next(seq__14123__$1);
var G__14168 = null;
var G__14169 = (0);
var G__14170 = (0);
seq__14123 = G__14167;
chunk__14124 = G__14168;
count__14125 = G__14169;
i__14126 = G__14170;
continue;
}
} else {
return null;
}
}
break;
}
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x14108){
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
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x14108){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_14171 = hoplon.core._hoplon_kids(this$__$1);
var i_14172 = cljs.core.count(cljs.core.deref(kids_14171));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_14171,i_14172,child__$1,this$__$1,x14108){
return (function (p1__14103_SHARP_,p2__14102_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14171,cljs.core.assoc,i_14172,p2__14102_SHARP_);
});})(kids_14171,i_14172,child__$1,this$__$1,x14108))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14171,cljs.core.assoc,i_14172,child__$1);
}

return child__$1;
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x14108){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_14173 = hoplon.core._hoplon_kids(this$__$1);
var before_count_14174 = cljs.core.count(cljs.core.deref(kids_14173));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_14173,((function (kids_14173,before_count_14174,child__$1,this$__$1,x14108){
return (function (p1__14104_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__14104_SHARP_));
});})(kids_14173,before_count_14174,child__$1,this$__$1,x14108))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_14173,((function (kids_14173,before_count_14174,child__$1,this$__$1,x14108){
return (function (p1__14105_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__14105_SHARP_));
});})(kids_14173,before_count_14174,child__$1,this$__$1,x14108))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_14173)),(before_count_14174 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x14108){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x14108){
return (function (p1__14106_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x14108){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x14108))
,p1__14106_SHARP_);
});})(existing__$1,this$__$1,x14108))
);

return existing__$1;
});})(x14108))
;

x14108.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x14108){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x14108){
return (function (p1__14107_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x14108){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x14108))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14107_SHARP_], 0)));
});})(new$__$1,this$__$1,x14108))
);
} else {
}
}

return new$__$1;
});})(x14108))
;

return x14108;
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
var G__14180 = arguments.length;
switch (G__14180) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14182 = arguments.length;
var i__4532__auto___14183 = (0);
while(true){
if((i__4532__auto___14183 < len__4531__auto___14182)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14183]));

var G__14184 = (i__4532__auto___14183 + (1));
i__4532__auto___14183 = G__14184;
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
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14176){
var G__14177 = cljs.core.first(seq14176);
var seq14176__$1 = cljs.core.next(seq14176);
var G__14178 = cljs.core.first(seq14176__$1);
var seq14176__$2 = cljs.core.next(seq14176__$1);
var G__14179 = cljs.core.first(seq14176__$2);
var seq14176__$3 = cljs.core.next(seq14176__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14177,G__14178,G__14179,seq14176__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__14190 = arguments.length;
switch (G__14190) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14192 = arguments.length;
var i__4532__auto___14193 = (0);
while(true){
if((i__4532__auto___14193 < len__4531__auto___14192)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14193]));

var G__14194 = (i__4532__auto___14193 + (1));
i__4532__auto___14193 = G__14194;
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
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14186){
var G__14187 = cljs.core.first(seq14186);
var seq14186__$1 = cljs.core.next(seq14186);
var G__14188 = cljs.core.first(seq14186__$1);
var seq14186__$2 = cljs.core.next(seq14186__$1);
var G__14189 = cljs.core.first(seq14186__$2);
var seq14186__$3 = cljs.core.next(seq14186__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14187,G__14188,G__14189,seq14186__$3);
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
return cljs.core.reduce_kv((function (p1__14196_SHARP_,p2__14195_SHARP_,p3__14197_SHARP_){
hoplon.core._attribute_BANG_(p2__14195_SHARP_,p1__14196_SHARP_,p3__14197_SHARP_);

return p1__14196_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14198){
var vec__14199 = p__14198;
var seq__14200 = cljs.core.seq(vec__14199);
var first__14201 = cljs.core.first(seq__14200);
var seq__14200__$1 = cljs.core.next(seq__14200);
var child_cell = first__14201;
var _ = seq__14200__$1;
var kids = vec__14199;
var this$__$1 = this$;
var seq__14202_14206 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__14203_14207 = null;
var count__14204_14208 = (0);
var i__14205_14209 = (0);
while(true){
if((i__14205_14209 < count__14204_14208)){
var x_14210 = chunk__14203_14207.cljs$core$IIndexed$_nth$arity$2(null,i__14205_14209);
var temp__5457__auto___14211 = hoplon.core.__GT_node(x_14210);
if(cljs.core.truth_(temp__5457__auto___14211)){
var x_14212__$1 = temp__5457__auto___14211;
hoplon.core._append_child_BANG_(this$__$1,x_14212__$1);
} else {
}


var G__14213 = seq__14202_14206;
var G__14214 = chunk__14203_14207;
var G__14215 = count__14204_14208;
var G__14216 = (i__14205_14209 + (1));
seq__14202_14206 = G__14213;
chunk__14203_14207 = G__14214;
count__14204_14208 = G__14215;
i__14205_14209 = G__14216;
continue;
} else {
var temp__5457__auto___14217 = cljs.core.seq(seq__14202_14206);
if(temp__5457__auto___14217){
var seq__14202_14218__$1 = temp__5457__auto___14217;
if(cljs.core.chunked_seq_QMARK_(seq__14202_14218__$1)){
var c__4351__auto___14219 = cljs.core.chunk_first(seq__14202_14218__$1);
var G__14220 = cljs.core.chunk_rest(seq__14202_14218__$1);
var G__14221 = c__4351__auto___14219;
var G__14222 = cljs.core.count(c__4351__auto___14219);
var G__14223 = (0);
seq__14202_14206 = G__14220;
chunk__14203_14207 = G__14221;
count__14204_14208 = G__14222;
i__14205_14209 = G__14223;
continue;
} else {
var x_14224 = cljs.core.first(seq__14202_14218__$1);
var temp__5457__auto___14225__$1 = hoplon.core.__GT_node(x_14224);
if(cljs.core.truth_(temp__5457__auto___14225__$1)){
var x_14226__$1 = temp__5457__auto___14225__$1;
hoplon.core._append_child_BANG_(this$__$1,x_14226__$1);
} else {
}


var G__14227 = cljs.core.next(seq__14202_14218__$1);
var G__14228 = null;
var G__14229 = (0);
var G__14230 = (0);
seq__14202_14206 = G__14227;
chunk__14203_14207 = G__14228;
count__14204_14208 = G__14229;
i__14205_14209 = G__14230;
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
var len__4531__auto___14237 = arguments.length;
var i__4532__auto___14238 = (0);
while(true){
if((i__4532__auto___14238 < len__4531__auto___14237)){
args__4534__auto__.push((arguments[i__4532__auto___14238]));

var G__14239 = (i__4532__auto___14238 + (1));
i__4532__auto___14238 = G__14239;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__14233 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(1),null);
var G__14236 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__14236,attr);

hoplon.core.add_children_BANG_(G__14236,kids);

return G__14236;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq14231){
var G__14232 = cljs.core.first(seq14231);
var seq14231__$1 = cljs.core.next(seq14231);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14232,seq14231__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__14241 = null;
var G__14241__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__14241__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__14241__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__14241__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__14241__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__14241__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__14241__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__14241__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__14241__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__14241__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__14241__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__14241__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__14241__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__14241__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__14241__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__14241__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__14241__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__14241__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__14241__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__14241__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__14241__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__14241__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__14241 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14241__1.call(this,self__);
case 2:
return G__14241__2.call(this,self__,a);
case 3:
return G__14241__3.call(this,self__,a,b);
case 4:
return G__14241__4.call(this,self__,a,b,c);
case 5:
return G__14241__5.call(this,self__,a,b,c,d);
case 6:
return G__14241__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14241__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14241__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14241__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14241__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14241__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14241__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14241__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14241__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14241__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14241__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14241__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14241__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14241__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14241__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14241__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14241__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14241.cljs$core$IFn$_invoke$arity$1 = G__14241__1;
G__14241.cljs$core$IFn$_invoke$arity$2 = G__14241__2;
G__14241.cljs$core$IFn$_invoke$arity$3 = G__14241__3;
G__14241.cljs$core$IFn$_invoke$arity$4 = G__14241__4;
G__14241.cljs$core$IFn$_invoke$arity$5 = G__14241__5;
G__14241.cljs$core$IFn$_invoke$arity$6 = G__14241__6;
G__14241.cljs$core$IFn$_invoke$arity$7 = G__14241__7;
G__14241.cljs$core$IFn$_invoke$arity$8 = G__14241__8;
G__14241.cljs$core$IFn$_invoke$arity$9 = G__14241__9;
G__14241.cljs$core$IFn$_invoke$arity$10 = G__14241__10;
G__14241.cljs$core$IFn$_invoke$arity$11 = G__14241__11;
G__14241.cljs$core$IFn$_invoke$arity$12 = G__14241__12;
G__14241.cljs$core$IFn$_invoke$arity$13 = G__14241__13;
G__14241.cljs$core$IFn$_invoke$arity$14 = G__14241__14;
G__14241.cljs$core$IFn$_invoke$arity$15 = G__14241__15;
G__14241.cljs$core$IFn$_invoke$arity$16 = G__14241__16;
G__14241.cljs$core$IFn$_invoke$arity$17 = G__14241__17;
G__14241.cljs$core$IFn$_invoke$arity$18 = G__14241__18;
G__14241.cljs$core$IFn$_invoke$arity$19 = G__14241__19;
G__14241.cljs$core$IFn$_invoke$arity$20 = G__14241__20;
G__14241.cljs$core$IFn$_invoke$arity$21 = G__14241__21;
G__14241.cljs$core$IFn$_invoke$arity$22 = G__14241__22;
return G__14241;
})()
;

Element.prototype.apply = (function (self__,args14240){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14240)));
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
var G__14248__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__14242_14249 = document;
var G__14243_14250 = elem;
var G__14244_14251 = document.createElement(elem);
goog.object.set(G__14242_14249,G__14243_14250,G__14244_14251);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__14245_14252 = hoplon.core.parse_args(args);
var attrs_14253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14245_14252,(0),null);
var kids_14254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14245_14252,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_14253))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_14253);

hoplon.core.add_children_BANG_(helem,kids_14254);
}

return helem;
};
var G__14248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14255__i = 0, G__14255__a = new Array(arguments.length -  0);
while (G__14255__i < G__14255__a.length) {G__14255__a[G__14255__i] = arguments[G__14255__i + 0]; ++G__14255__i;}
  args = new cljs.core.IndexedSeq(G__14255__a,0,null);
} 
return G__14248__delegate.call(this,args);};
G__14248.cljs$lang$maxFixedArity = 0;
G__14248.cljs$lang$applyTo = (function (arglist__14256){
var args = cljs.core.seq(arglist__14256);
return G__14248__delegate(args);
});
G__14248.cljs$core$IFn$_invoke$arity$variadic = G__14248__delegate;
return G__14248;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__14260__delegate = function (args){
var vec__14257 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14257,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14257,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__14260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14261__i = 0, G__14261__a = new Array(arguments.length -  0);
while (G__14261__i < G__14261__a.length) {G__14261__a[G__14261__i] = arguments[G__14261__i + 0]; ++G__14261__i;}
  args = new cljs.core.IndexedSeq(G__14261__a,0,null);
} 
return G__14260__delegate.call(this,args);};
G__14260.cljs$lang$maxFixedArity = 0;
G__14260.cljs$lang$applyTo = (function (arglist__14262){
var args = cljs.core.seq(arglist__14262);
return G__14260__delegate(args);
});
G__14260.cljs$core$IFn$_invoke$arity$variadic = G__14260__delegate;
return G__14260;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14264 = arguments.length;
var i__4532__auto___14265 = (0);
while(true){
if((i__4532__auto___14265 < len__4531__auto___14264)){
args__4534__auto__.push((arguments[i__4532__auto___14265]));

var G__14266 = (i__4532__auto___14265 + (1));
i__4532__auto___14265 = G__14266;
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
hoplon.core.html.cljs$lang$applyTo = (function (seq14263){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14263));
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
hoplon.core.$text = (function hoplon$core$$text(p1__14267_SHARP_){
return document.createTextNode(p1__14267_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14268_SHARP_){
return document.createComment(p1__14268_SHARP_);
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
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__14270_SHARP_,p2__14269_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__14269_SHARP_);
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
var G__14271 = elem;
var G__14272 = cljs.core.cst$kw$attr;
var G__14273 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14271,G__14272,G__14273) : hoplon.core.do_BANG_.call(null,G__14271,G__14272,G__14273));
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
var items_seq = (function (){var fexpr__14278 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__14276,G__14277){
return (G__14276.cljs$core$IFn$_invoke$arity$1 ? G__14276.cljs$core$IFn$_invoke$arity$1(G__14277) : G__14276.call(null,G__14277));
});})(on_deck))
);
return (fexpr__14278.cljs$core$IFn$_invoke$arity$2 ? fexpr__14278.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__14278.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14274_SHARP_){
var fexpr__14282 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__14281,G__14280,G__14279){
return (G__14279.cljs$core$IFn$_invoke$arity$3 ? G__14279.cljs$core$IFn$_invoke$arity$3(G__14280,G__14281,null) : G__14279.call(null,G__14280,G__14281,null));
});})(on_deck,items_seq))
);
return (fexpr__14282.cljs$core$IFn$_invoke$arity$3 ? fexpr__14282.cljs$core$IFn$_invoke$arity$3(p1__14274_SHARP_,items_seq,cljs.core.nth) : fexpr__14282.call(null,p1__14274_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14275_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__14275_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14275_SHARP_,cljs.core.rest);

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
var seq__14283 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14284 = null;
var count__14285 = (0);
var i__14286 = (0);
while(true){
if((i__14286 < count__14285)){
var i = chunk__14284.cljs$core$IIndexed$_nth$arity$2(null,i__14286);
var e_14289 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__14287 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14287) : tpl.call(null,G__14287));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14289);


var G__14290 = seq__14283;
var G__14291 = chunk__14284;
var G__14292 = count__14285;
var G__14293 = (i__14286 + (1));
seq__14283 = G__14290;
chunk__14284 = G__14291;
count__14285 = G__14292;
i__14286 = G__14293;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14283);
if(temp__5457__auto__){
var seq__14283__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14283__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14283__$1);
var G__14294 = cljs.core.chunk_rest(seq__14283__$1);
var G__14295 = c__4351__auto__;
var G__14296 = cljs.core.count(c__4351__auto__);
var G__14297 = (0);
seq__14283 = G__14294;
chunk__14284 = G__14295;
count__14285 = G__14296;
i__14286 = G__14297;
continue;
} else {
var i = cljs.core.first(seq__14283__$1);
var e_14298 = (function (){var or__3949__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__14288 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14288) : tpl.call(null,G__14288));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14298);


var G__14299 = cljs.core.next(seq__14283__$1);
var G__14300 = null;
var G__14301 = (0);
var G__14302 = (0);
seq__14283 = G__14299;
chunk__14284 = G__14300;
count__14285 = G__14301;
i__14286 = G__14302;
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
var e_14303 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14303);

var G__14304 = (_ + (1));
_ = G__14304;
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
