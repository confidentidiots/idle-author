// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
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
var or__3936__auto__ = (function (){var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__3925__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var G__9997 = (i + (1));
var G__9998 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__9997;
ret = G__9998;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__10000 = arguments.length;
switch (G__10000) {
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

var G__10002 = (i + (1));
i = G__10002;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__10004_SHARP_,p2__10003_SHARP_){
if((p2__10003_SHARP_ == null)){
return p1__10004_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10004_SHARP_,p2__10003_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__10011 = new$__$1;
var vec__10013 = G__10011;
var seq__10014 = cljs.core.seq(vec__10013);
var first__10015 = cljs.core.first(seq__10014);
var seq__10014__$1 = cljs.core.next(seq__10014);
var x = first__10015;
var xs = seq__10014__$1;
var G__10012 = hoplon.core.child_vec(this$);
var vec__10016 = G__10012;
var seq__10017 = cljs.core.seq(vec__10016);
var first__10018 = cljs.core.first(seq__10017);
var seq__10017__$1 = cljs.core.next(seq__10017);
var k = first__10018;
var ks = seq__10017__$1;
var kids = vec__10016;
var G__10011__$1 = G__10011;
var G__10012__$1 = G__10012;
while(true){
var vec__10019 = G__10011__$1;
var seq__10020 = cljs.core.seq(vec__10019);
var first__10021 = cljs.core.first(seq__10020);
var seq__10020__$1 = cljs.core.next(seq__10020);
var x__$1 = first__10021;
var xs__$1 = seq__10020__$1;
var vec__10022 = G__10012__$1;
var seq__10023 = cljs.core.seq(vec__10022);
var first__10024 = cljs.core.first(seq__10023);
var seq__10023__$1 = cljs.core.next(seq__10023);
var k__$1 = first__10024;
var ks__$1 = seq__10023__$1;
var kids__$1 = vec__10022;
if(cljs.core.truth_((function (){var or__3936__auto__ = x__$1;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return k__$1;
}
})())){
var G__10025 = xs__$1;
var G__10026 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__10011__$1 = G__10025;
G__10012__$1 = G__10026;
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
var G__10028 = arguments.length;
switch (G__10028) {
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
var G__10029_10032 = init;
var G__10030_10033 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10029_10032,G__10030_10033) : f.call(null,G__10029_10032,G__10030_10033));

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
var __GT_map = (function (p1__10034_SHARP_){
return cljs.core.zipmap(p1__10034_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__10036 = arguments.length;
switch (G__10036) {
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
var G__10038_10050 = this$;
var G__10039_10051 = "_hoplonWhenDom";
var G__10040_10052 = [f];
goog.object.set(G__10038_10050,G__10039_10051,G__10040_10052);

return setTimeout(((function (temp__5455__auto__){
return (function (){
var fexpr__10045 = ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5455__auto__))
,(20));
} else {
var seq__10046_10053 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10047_10054 = null;
var count__10048_10055 = (0);
var i__10049_10056 = (0);
while(true){
if((i__10049_10056 < count__10048_10055)){
var f_10057__$1 = chunk__10047_10054.cljs$core$IIndexed$_nth$arity$2(null,i__10049_10056);
(f_10057__$1.cljs$core$IFn$_invoke$arity$0 ? f_10057__$1.cljs$core$IFn$_invoke$arity$0() : f_10057__$1.call(null));


var G__10058 = seq__10046_10053;
var G__10059 = chunk__10047_10054;
var G__10060 = count__10048_10055;
var G__10061 = (i__10049_10056 + (1));
seq__10046_10053 = G__10058;
chunk__10047_10054 = G__10059;
count__10048_10055 = G__10060;
i__10049_10056 = G__10061;
continue;
} else {
var temp__5457__auto___10062 = cljs.core.seq(seq__10046_10053);
if(temp__5457__auto___10062){
var seq__10046_10063__$1 = temp__5457__auto___10062;
if(cljs.core.chunked_seq_QMARK_(seq__10046_10063__$1)){
var c__4338__auto___10064 = cljs.core.chunk_first(seq__10046_10063__$1);
var G__10065 = cljs.core.chunk_rest(seq__10046_10063__$1);
var G__10066 = c__4338__auto___10064;
var G__10067 = cljs.core.count(c__4338__auto___10064);
var G__10068 = (0);
seq__10046_10053 = G__10065;
chunk__10047_10054 = G__10066;
count__10048_10055 = G__10067;
i__10049_10056 = G__10068;
continue;
} else {
var f_10069__$1 = cljs.core.first(seq__10046_10063__$1);
(f_10069__$1.cljs$core$IFn$_invoke$arity$0 ? f_10069__$1.cljs$core$IFn$_invoke$arity$0() : f_10069__$1.call(null));


var G__10070 = cljs.core.next(seq__10046_10063__$1);
var G__10071 = null;
var G__10072 = (0);
var G__10073 = (0);
seq__10046_10053 = G__10070;
chunk__10047_10054 = G__10071;
count__10048_10055 = G__10072;
i__10049_10056 = G__10073;
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
return fexpr__10045();
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
var G__10079 = args;
var vec__10080 = G__10079;
var seq__10081 = cljs.core.seq(vec__10080);
var first__10082 = cljs.core.first(seq__10081);
var seq__10081__$1 = cljs.core.next(seq__10081);
var arg = first__10082;
var args__$1 = seq__10081__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10079__$1 = G__10079;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10083 = G__10079__$1;
var seq__10084 = cljs.core.seq(vec__10083);
var first__10085 = cljs.core.first(seq__10084);
var seq__10084__$1 = cljs.core.next(seq__10084);
var arg__$1 = first__10085;
var args__$2 = seq__10084__$1;
if(cljs.core.not((function (){var or__3936__auto__ = arg__$1;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10086 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__10087 = kids__$2;
var G__10088 = args__$2;
attr__$1 = G__10086;
kids__$1 = G__10087;
G__10079__$1 = G__10088;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__10089 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__10079__$1,attr__$2,kids__$2,vec__10083,seq__10084,first__10085,seq__10084__$1,arg__$1,args__$2,attr,kids,G__10079,vec__10080,seq__10081,first__10082,seq__10081__$1,arg,args__$1){
return (function (p1__10074_SHARP_,p2__10075_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10074_SHARP_,p2__10075_SHARP_,true);
});})(attr__$1,kids__$1,G__10079__$1,attr__$2,kids__$2,vec__10083,seq__10084,first__10085,seq__10084__$1,arg__$1,args__$2,attr,kids,G__10079,vec__10080,seq__10081,first__10082,seq__10081__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10090 = kids__$2;
var G__10091 = args__$2;
attr__$1 = G__10089;
kids__$1 = G__10090;
G__10079__$1 = G__10091;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__10092 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10093 = kids__$2;
var G__10094 = cljs.core.rest(args__$2);
attr__$1 = G__10092;
kids__$1 = G__10093;
G__10079__$1 = G__10094;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__10095 = attr__$2;
var G__10096 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10097 = args__$2;
attr__$1 = G__10095;
kids__$1 = G__10096;
G__10079__$1 = G__10097;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__10098 = attr__$2;
var G__10099 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10100 = args__$2;
attr__$1 = G__10098;
kids__$1 = G__10099;
G__10079__$1 = G__10100;
continue;
} else {
var G__10101 = attr__$2;
var G__10102 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10103 = args__$2;
attr__$1 = G__10101;
kids__$1 = G__10102;
G__10079__$1 = G__10103;
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._node[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto__.call(null,this$));
} else {
var m__4231__auto____$1 = (hoplon.core._node["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto____$1.call(null,this$));
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

var G__10105_10112 = hoplon.core._node;
var G__10106_10113 = "string";
var G__10107_10114 = ((function (G__10105_10112,G__10106_10113){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__10105_10112,G__10106_10113))
;
goog.object.set(G__10105_10112,G__10106_10113,G__10107_10114);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__10108_10115 = hoplon.core._node;
var G__10109_10116 = "number";
var G__10110_10117 = ((function (G__10108_10115,G__10109_10116){
return (function (this$){
var G__10111 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__10111) : hoplon.core.$text.call(null,G__10111));
});})(G__10108_10115,G__10109_10116))
;
goog.object.set(G__10108_10115,G__10109_10116,G__10110_10117);
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4231__auto__.call(null,this$,elem,value));
} else {
var m__4231__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4231__auto____$1.call(null,this$,elem,value));
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
var opts10121_10149 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10121_10149){
return (function (ret__9491__auto__,p__10122){
var vec__10123 = p__10122;
var ___9492__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10123,(0),null);
var f__9493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10123,(1),null);
var sym__9494__auto__ = (f__9493__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9493__auto__.cljs$core$IFn$_invoke$arity$0() : f__9493__auto__.call(null));
var G__10126 = ret__9491__auto__;
if(cljs.core.truth_(sym__9494__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10126,sym__9494__auto__);
} else {
return G__10126;
}
});})(opts10121_10149))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10121_10149){
return (function (p1__9490__9495__auto__){
var G__10128 = cljs.core.first(p1__9490__9495__auto__);
var fexpr__10127 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10121_10149);
return (fexpr__10127.cljs$core$IFn$_invoke$arity$1 ? fexpr__10127.cljs$core$IFn$_invoke$arity$1(G__10128) : fexpr__10127.call(null,G__10128));
});})(opts10121_10149))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10121_10149){
return (function (){
var checked__9459__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/5wx/ozpa12/index.html.out/hoplon/core.cljs",14,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts10121_10149);
if(cljs.core.truth_(checked__9459__auto__)){
hoplon.core._elem_BANG_ = checked__9459__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts10121_10149))
], null)))));

var opts10131_10150 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10131_10150){
return (function (ret__9491__auto__,p__10132){
var vec__10133 = p__10132;
var ___9492__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10133,(0),null);
var f__9493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10133,(1),null);
var sym__9494__auto__ = (f__9493__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9493__auto__.cljs$core$IFn$_invoke$arity$0() : f__9493__auto__.call(null));
var G__10136 = ret__9491__auto__;
if(cljs.core.truth_(sym__9494__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10136,sym__9494__auto__);
} else {
return G__10136;
}
});})(opts10131_10150))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10131_10150){
return (function (p1__9490__9495__auto__){
var G__10138 = cljs.core.first(p1__9490__9495__auto__);
var fexpr__10137 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10131_10150);
return (fexpr__10137.cljs$core$IFn$_invoke$arity$1 ? fexpr__10137.cljs$core$IFn$_invoke$arity$1(G__10138) : fexpr__10137.call(null,G__10138));
});})(opts10131_10150))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10131_10150){
return (function (){
var checked__9459__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/5wx/ozpa12/index.html.out/hoplon/core.cljs",12,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts10131_10150);
if(cljs.core.truth_(checked__9459__auto__)){
hoplon.core._do_BANG_ = checked__9459__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts10131_10150))
], null)))));

var opts10141 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10141){
return (function (ret__9491__auto__,p__10142){
var vec__10143 = p__10142;
var ___9492__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10143,(0),null);
var f__9493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10143,(1),null);
var sym__9494__auto__ = (f__9493__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9493__auto__.cljs$core$IFn$_invoke$arity$0() : f__9493__auto__.call(null));
var G__10146 = ret__9491__auto__;
if(cljs.core.truth_(sym__9494__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10146,sym__9494__auto__);
} else {
return G__10146;
}
});})(opts10141))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10141){
return (function (p1__9490__9495__auto__){
var G__10148 = cljs.core.first(p1__9490__9495__auto__);
var fexpr__10147 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10141);
return (fexpr__10147.cljs$core$IFn$_invoke$arity$1 ? fexpr__10147.cljs$core$IFn$_invoke$arity$1(G__10148) : fexpr__10147.call(null,G__10148));
});})(opts10141))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10141){
return (function (){
var checked__9459__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker-games/idle-author/5wx/ozpa12/index.html.out/hoplon/core.cljs",12,1,75,75,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts10141);
if(cljs.core.truth_(checked__9459__auto__)){
hoplon.core._on_BANG_ = checked__9459__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts10141))
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4231__auto__.call(null,this$,kvs));
} else {
var m__4231__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4231__auto____$1.call(null,this$,kvs));
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4231__auto__.call(null,this$,kvs));
} else {
var m__4231__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4231__auto____$1.call(null,this$,kvs));
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto__.call(null,this$));
} else {
var m__4231__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto____$1.call(null,this$));
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4231__auto__.call(null,this$,child));
} else {
var m__4231__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4231__auto____$1.call(null,this$,child));
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4231__auto__.call(null,this$,child));
} else {
var m__4231__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4231__auto____$1.call(null,this$,child));
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4231__auto__.call(null,this$,new$,existing));
} else {
var m__4231__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4231__auto____$1.call(null,this$,new$,existing));
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
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4231__auto__.call(null,this$,new$,existing));
} else {
var m__4231__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4231__auto____$1.call(null,this$,new$,existing));
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
var and__3925__auto__ = (this$ instanceof Element);
if(and__3925__auto__){
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
return and__3925__auto__;
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
var x10159 = elem;
x10159.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x10159.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x10159){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x10159))
;

x10159.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x10159.cljs$core$ILookup$_lookup$arity$2 = ((function (x10159){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__10160 = this$__$1.children;
var G__10161 = k;
return goog.object.get(G__10160,G__10161);
}
});})(x10159))
;

x10159.cljs$core$ILookup$_lookup$arity$3 = ((function (x10159){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3936__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return not_found;
}
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x10159.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x10159){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10162 = cljs.core.seq(kvs);
var chunk__10164 = null;
var count__10165 = (0);
var i__10166 = (0);
while(true){
if((i__10166 < count__10165)){
var vec__10168 = chunk__10164.cljs$core$IIndexed$_nth$arity$2(null,i__10166);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10168,(1),null);
var k_10190__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10190__$1);
} else {
e.setAttribute(k_10190__$1,((v === true)?k_10190__$1:v));
}


var G__10191 = seq__10162;
var G__10192 = chunk__10164;
var G__10193 = count__10165;
var G__10194 = (i__10166 + (1));
seq__10162 = G__10191;
chunk__10164 = G__10192;
count__10165 = G__10193;
i__10166 = G__10194;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10162);
if(temp__5457__auto__){
var seq__10162__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10162__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10162__$1);
var G__10195 = cljs.core.chunk_rest(seq__10162__$1);
var G__10196 = c__4338__auto__;
var G__10197 = cljs.core.count(c__4338__auto__);
var G__10198 = (0);
seq__10162 = G__10195;
chunk__10164 = G__10196;
count__10165 = G__10197;
i__10166 = G__10198;
continue;
} else {
var vec__10171 = cljs.core.first(seq__10162__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10171,(1),null);
var k_10199__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10199__$1);
} else {
e.setAttribute(k_10199__$1,((v === true)?k_10199__$1:v));
}


var G__10200 = cljs.core.next(seq__10162__$1);
var G__10201 = null;
var G__10202 = (0);
var G__10203 = (0);
seq__10162 = G__10200;
chunk__10164 = G__10201;
count__10165 = G__10202;
i__10166 = G__10203;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x10159){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10174 = cljs.core.seq(kvs);
var chunk__10175 = null;
var count__10176 = (0);
var i__10177 = (0);
while(true){
if((i__10177 < count__10176)){
var vec__10178 = chunk__10175.cljs$core$IIndexed$_nth$arity$2(null,i__10177);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(1),null);
var G__10181_10204 = e.style;
var G__10182_10205 = cljs.core.name(k);
var G__10183_10206 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10181_10204,G__10182_10205,G__10183_10206);


var G__10207 = seq__10174;
var G__10208 = chunk__10175;
var G__10209 = count__10176;
var G__10210 = (i__10177 + (1));
seq__10174 = G__10207;
chunk__10175 = G__10208;
count__10176 = G__10209;
i__10177 = G__10210;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10174);
if(temp__5457__auto__){
var seq__10174__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10174__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10174__$1);
var G__10211 = cljs.core.chunk_rest(seq__10174__$1);
var G__10212 = c__4338__auto__;
var G__10213 = cljs.core.count(c__4338__auto__);
var G__10214 = (0);
seq__10174 = G__10211;
chunk__10175 = G__10212;
count__10176 = G__10213;
i__10177 = G__10214;
continue;
} else {
var vec__10184 = cljs.core.first(seq__10174__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10184,(1),null);
var G__10187_10215 = e.style;
var G__10188_10216 = cljs.core.name(k);
var G__10189_10217 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10187_10215,G__10188_10216,G__10189_10217);


var G__10218 = cljs.core.next(seq__10174__$1);
var G__10219 = null;
var G__10220 = (0);
var G__10221 = (0);
seq__10174 = G__10218;
chunk__10175 = G__10219;
count__10176 = G__10220;
i__10177 = G__10221;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x10159){
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
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x10159){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10222 = hoplon.core._hoplon_kids(this$__$1);
var i_10223 = cljs.core.count(cljs.core.deref(kids_10222));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_10222,i_10223,child__$1,this$__$1,x10159){
return (function (p1__10154_SHARP_,p2__10153_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10222,cljs.core.assoc,i_10223,p2__10153_SHARP_);
});})(kids_10222,i_10223,child__$1,this$__$1,x10159))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10222,cljs.core.assoc,i_10223,child__$1);
}

return child__$1;
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x10159){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10224 = hoplon.core._hoplon_kids(this$__$1);
var before_count_10225 = cljs.core.count(cljs.core.deref(kids_10224));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10224,((function (kids_10224,before_count_10225,child__$1,this$__$1,x10159){
return (function (p1__10155_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__10155_SHARP_));
});})(kids_10224,before_count_10225,child__$1,this$__$1,x10159))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10224,((function (kids_10224,before_count_10225,child__$1,this$__$1,x10159){
return (function (p1__10156_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__10156_SHARP_));
});})(kids_10224,before_count_10225,child__$1,this$__$1,x10159))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_10224)),(before_count_10225 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x10159){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x10159){
return (function (p1__10157_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x10159){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x10159))
,p1__10157_SHARP_);
});})(existing__$1,this$__$1,x10159))
);

return existing__$1;
});})(x10159))
;

x10159.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x10159){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x10159){
return (function (p1__10158_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x10159){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x10159))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10158_SHARP_], 0)));
});})(new$__$1,this$__$1,x10159))
);
} else {
}
}

return new$__$1;
});})(x10159))
;

return x10159;
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
var G__10231 = arguments.length;
switch (G__10231) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___10233 = arguments.length;
var i__4519__auto___10234 = (0);
while(true){
if((i__4519__auto___10234 < len__4518__auto___10233)){
args_arr__4533__auto__.push((arguments[i__4519__auto___10234]));

var G__10235 = (i__4519__auto___10234 + (1));
i__4519__auto___10234 = G__10235;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4534__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10227){
var G__10228 = cljs.core.first(seq10227);
var seq10227__$1 = cljs.core.next(seq10227);
var G__10229 = cljs.core.first(seq10227__$1);
var seq10227__$2 = cljs.core.next(seq10227__$1);
var G__10230 = cljs.core.first(seq10227__$2);
var seq10227__$3 = cljs.core.next(seq10227__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10228,G__10229,G__10230,seq10227__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__10241 = arguments.length;
switch (G__10241) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___10243 = arguments.length;
var i__4519__auto___10244 = (0);
while(true){
if((i__4519__auto___10244 < len__4518__auto___10243)){
args_arr__4533__auto__.push((arguments[i__4519__auto___10244]));

var G__10245 = (i__4519__auto___10244 + (1));
i__4519__auto___10244 = G__10245;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4534__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10237){
var G__10238 = cljs.core.first(seq10237);
var seq10237__$1 = cljs.core.next(seq10237);
var G__10239 = cljs.core.first(seq10237__$1);
var seq10237__$2 = cljs.core.next(seq10237__$1);
var G__10240 = cljs.core.first(seq10237__$2);
var seq10237__$3 = cljs.core.next(seq10237__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10238,G__10239,G__10240,seq10237__$3);
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
return cljs.core.reduce_kv((function (p1__10247_SHARP_,p2__10246_SHARP_,p3__10248_SHARP_){
hoplon.core._attribute_BANG_(p2__10246_SHARP_,p1__10247_SHARP_,p3__10248_SHARP_);

return p1__10247_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10249){
var vec__10250 = p__10249;
var seq__10251 = cljs.core.seq(vec__10250);
var first__10252 = cljs.core.first(seq__10251);
var seq__10251__$1 = cljs.core.next(seq__10251);
var child_cell = first__10252;
var _ = seq__10251__$1;
var kids = vec__10250;
var this$__$1 = this$;
var seq__10253_10257 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__10254_10258 = null;
var count__10255_10259 = (0);
var i__10256_10260 = (0);
while(true){
if((i__10256_10260 < count__10255_10259)){
var x_10261 = chunk__10254_10258.cljs$core$IIndexed$_nth$arity$2(null,i__10256_10260);
var temp__5457__auto___10262 = hoplon.core.__GT_node(x_10261);
if(cljs.core.truth_(temp__5457__auto___10262)){
var x_10263__$1 = temp__5457__auto___10262;
hoplon.core._append_child_BANG_(this$__$1,x_10263__$1);
} else {
}


var G__10264 = seq__10253_10257;
var G__10265 = chunk__10254_10258;
var G__10266 = count__10255_10259;
var G__10267 = (i__10256_10260 + (1));
seq__10253_10257 = G__10264;
chunk__10254_10258 = G__10265;
count__10255_10259 = G__10266;
i__10256_10260 = G__10267;
continue;
} else {
var temp__5457__auto___10268 = cljs.core.seq(seq__10253_10257);
if(temp__5457__auto___10268){
var seq__10253_10269__$1 = temp__5457__auto___10268;
if(cljs.core.chunked_seq_QMARK_(seq__10253_10269__$1)){
var c__4338__auto___10270 = cljs.core.chunk_first(seq__10253_10269__$1);
var G__10271 = cljs.core.chunk_rest(seq__10253_10269__$1);
var G__10272 = c__4338__auto___10270;
var G__10273 = cljs.core.count(c__4338__auto___10270);
var G__10274 = (0);
seq__10253_10257 = G__10271;
chunk__10254_10258 = G__10272;
count__10255_10259 = G__10273;
i__10256_10260 = G__10274;
continue;
} else {
var x_10275 = cljs.core.first(seq__10253_10269__$1);
var temp__5457__auto___10276__$1 = hoplon.core.__GT_node(x_10275);
if(cljs.core.truth_(temp__5457__auto___10276__$1)){
var x_10277__$1 = temp__5457__auto___10276__$1;
hoplon.core._append_child_BANG_(this$__$1,x_10277__$1);
} else {
}


var G__10278 = cljs.core.next(seq__10253_10269__$1);
var G__10279 = null;
var G__10280 = (0);
var G__10281 = (0);
seq__10253_10257 = G__10278;
chunk__10254_10258 = G__10279;
count__10255_10259 = G__10280;
i__10256_10260 = G__10281;
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
var args__4521__auto__ = [];
var len__4518__auto___10288 = arguments.length;
var i__4519__auto___10289 = (0);
while(true){
if((i__4519__auto___10289 < len__4518__auto___10288)){
args__4521__auto__.push((arguments[i__4519__auto___10289]));

var G__10290 = (i__4519__auto___10289 + (1));
i__4519__auto___10289 = G__10290;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__10284 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10284,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10284,(1),null);
var G__10287 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__10287,attr);

hoplon.core.add_children_BANG_(G__10287,kids);

return G__10287;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq10282){
var G__10283 = cljs.core.first(seq10282);
var seq10282__$1 = cljs.core.next(seq10282);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10283,seq10282__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__10292 = null;
var G__10292__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__10292__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__10292__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__10292__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__10292__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__10292__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__10292__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__10292__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__10292__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__10292__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__10292__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__10292__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__10292__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__10292__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__10292__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__10292__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__10292__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__10292__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__10292__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__10292__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__10292__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__10292__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__10292 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__10292__1.call(this,self__);
case 2:
return G__10292__2.call(this,self__,a);
case 3:
return G__10292__3.call(this,self__,a,b);
case 4:
return G__10292__4.call(this,self__,a,b,c);
case 5:
return G__10292__5.call(this,self__,a,b,c,d);
case 6:
return G__10292__6.call(this,self__,a,b,c,d,e);
case 7:
return G__10292__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__10292__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__10292__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__10292__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__10292__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__10292__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__10292__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__10292__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__10292__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__10292__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__10292__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__10292__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__10292__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__10292__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__10292__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__10292__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10292.cljs$core$IFn$_invoke$arity$1 = G__10292__1;
G__10292.cljs$core$IFn$_invoke$arity$2 = G__10292__2;
G__10292.cljs$core$IFn$_invoke$arity$3 = G__10292__3;
G__10292.cljs$core$IFn$_invoke$arity$4 = G__10292__4;
G__10292.cljs$core$IFn$_invoke$arity$5 = G__10292__5;
G__10292.cljs$core$IFn$_invoke$arity$6 = G__10292__6;
G__10292.cljs$core$IFn$_invoke$arity$7 = G__10292__7;
G__10292.cljs$core$IFn$_invoke$arity$8 = G__10292__8;
G__10292.cljs$core$IFn$_invoke$arity$9 = G__10292__9;
G__10292.cljs$core$IFn$_invoke$arity$10 = G__10292__10;
G__10292.cljs$core$IFn$_invoke$arity$11 = G__10292__11;
G__10292.cljs$core$IFn$_invoke$arity$12 = G__10292__12;
G__10292.cljs$core$IFn$_invoke$arity$13 = G__10292__13;
G__10292.cljs$core$IFn$_invoke$arity$14 = G__10292__14;
G__10292.cljs$core$IFn$_invoke$arity$15 = G__10292__15;
G__10292.cljs$core$IFn$_invoke$arity$16 = G__10292__16;
G__10292.cljs$core$IFn$_invoke$arity$17 = G__10292__17;
G__10292.cljs$core$IFn$_invoke$arity$18 = G__10292__18;
G__10292.cljs$core$IFn$_invoke$arity$19 = G__10292__19;
G__10292.cljs$core$IFn$_invoke$arity$20 = G__10292__20;
G__10292.cljs$core$IFn$_invoke$arity$21 = G__10292__21;
G__10292.cljs$core$IFn$_invoke$arity$22 = G__10292__22;
return G__10292;
})()
;

Element.prototype.apply = (function (self__,args10291){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10291)));
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
var G__10299__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__10293_10300 = document;
var G__10294_10301 = elem;
var G__10295_10302 = document.createElement(elem);
goog.object.set(G__10293_10300,G__10294_10301,G__10295_10302);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__10296_10303 = hoplon.core.parse_args(args);
var attrs_10304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296_10303,(0),null);
var kids_10305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10296_10303,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_10304))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_10304);

hoplon.core.add_children_BANG_(helem,kids_10305);
}

return helem;
};
var G__10299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10306__i = 0, G__10306__a = new Array(arguments.length -  0);
while (G__10306__i < G__10306__a.length) {G__10306__a[G__10306__i] = arguments[G__10306__i + 0]; ++G__10306__i;}
  args = new cljs.core.IndexedSeq(G__10306__a,0,null);
} 
return G__10299__delegate.call(this,args);};
G__10299.cljs$lang$maxFixedArity = 0;
G__10299.cljs$lang$applyTo = (function (arglist__10307){
var args = cljs.core.seq(arglist__10307);
return G__10299__delegate(args);
});
G__10299.cljs$core$IFn$_invoke$arity$variadic = G__10299__delegate;
return G__10299;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__10311__delegate = function (args){
var vec__10308 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__10311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10312__i = 0, G__10312__a = new Array(arguments.length -  0);
while (G__10312__i < G__10312__a.length) {G__10312__a[G__10312__i] = arguments[G__10312__i + 0]; ++G__10312__i;}
  args = new cljs.core.IndexedSeq(G__10312__a,0,null);
} 
return G__10311__delegate.call(this,args);};
G__10311.cljs$lang$maxFixedArity = 0;
G__10311.cljs$lang$applyTo = (function (arglist__10313){
var args = cljs.core.seq(arglist__10313);
return G__10311__delegate(args);
});
G__10311.cljs$core$IFn$_invoke$arity$variadic = G__10311__delegate;
return G__10311;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4521__auto__ = [];
var len__4518__auto___10315 = arguments.length;
var i__4519__auto___10316 = (0);
while(true){
if((i__4519__auto___10316 < len__4518__auto___10315)){
args__4521__auto__.push((arguments[i__4519__auto___10316]));

var G__10317 = (i__4519__auto___10316 + (1));
i__4519__auto___10316 = G__10317;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hoplon.core.html.cljs$lang$applyTo = (function (seq10314){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10314));
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
hoplon.core.$text = (function hoplon$core$$text(p1__10318_SHARP_){
return document.createTextNode(p1__10318_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10319_SHARP_){
return document.createComment(p1__10319_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if((typeof hoplon !== 'undefined') && (typeof hoplon.core !== 'undefined') && (typeof hoplon.core.elem_BANG_ !== 'undefined')){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__10321_SHARP_,p2__10320_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__10320_SHARP_);
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
hoplon.core.do_BANG_ = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__10322 = elem;
var G__10323 = cljs.core.cst$kw$attr;
var G__10324 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10322,G__10323,G__10324) : hoplon.core.do_BANG_.call(null,G__10322,G__10323,G__10324));
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
hoplon.core.on_BANG_ = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
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
var items_seq = (function (){var fexpr__10329 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__10327,G__10328){
return (G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(G__10328) : G__10327.call(null,G__10328));
});})(on_deck))
);
return (fexpr__10329.cljs$core$IFn$_invoke$arity$2 ? fexpr__10329.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__10329.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__10325_SHARP_){
var fexpr__10333 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__10332,G__10331,G__10330){
return (G__10330.cljs$core$IFn$_invoke$arity$3 ? G__10330.cljs$core$IFn$_invoke$arity$3(G__10331,G__10332,null) : G__10330.call(null,G__10331,G__10332,null));
});})(on_deck,items_seq))
);
return (fexpr__10333.cljs$core$IFn$_invoke$arity$3 ? fexpr__10333.cljs$core$IFn$_invoke$arity$3(p1__10325_SHARP_,items_seq,cljs.core.nth) : fexpr__10333.call(null,p1__10325_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__10326_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__10326_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10326_SHARP_,cljs.core.rest);

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
var seq__10334 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10335 = null;
var count__10336 = (0);
var i__10337 = (0);
while(true){
if((i__10337 < count__10336)){
var i = chunk__10335.cljs$core$IIndexed$_nth$arity$2(null,i__10337);
var e_10340 = (function (){var or__3936__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var G__10338 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10338) : tpl.call(null,G__10338));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10340);


var G__10341 = seq__10334;
var G__10342 = chunk__10335;
var G__10343 = count__10336;
var G__10344 = (i__10337 + (1));
seq__10334 = G__10341;
chunk__10335 = G__10342;
count__10336 = G__10343;
i__10337 = G__10344;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10334);
if(temp__5457__auto__){
var seq__10334__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10334__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10334__$1);
var G__10345 = cljs.core.chunk_rest(seq__10334__$1);
var G__10346 = c__4338__auto__;
var G__10347 = cljs.core.count(c__4338__auto__);
var G__10348 = (0);
seq__10334 = G__10345;
chunk__10335 = G__10346;
count__10336 = G__10347;
i__10337 = G__10348;
continue;
} else {
var i = cljs.core.first(seq__10334__$1);
var e_10349 = (function (){var or__3936__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var G__10339 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10339) : tpl.call(null,G__10339));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10349);


var G__10350 = cljs.core.next(seq__10334__$1);
var G__10351 = null;
var G__10352 = (0);
var G__10353 = (0);
seq__10334 = G__10350;
chunk__10335 = G__10351;
count__10336 = G__10352;
i__10337 = G__10353;
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
var n__4395__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__4395__auto__)){
var e_10354 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_10354);

var G__10355 = (_ + (1));
_ = G__10355;
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
