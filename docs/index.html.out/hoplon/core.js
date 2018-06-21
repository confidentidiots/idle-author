// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
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
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__3911__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__9936 = (i + (1));
var G__9937 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__9936;
ret = G__9937;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__9939 = arguments.length;
switch (G__9939) {
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

var G__9941 = (i + (1));
i = G__9941;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9943_SHARP_,p2__9942_SHARP_){
if((p2__9942_SHARP_ == null)){
return p1__9943_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9943_SHARP_,p2__9942_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__9950 = new$__$1;
var vec__9952 = G__9950;
var seq__9953 = cljs.core.seq(vec__9952);
var first__9954 = cljs.core.first(seq__9953);
var seq__9953__$1 = cljs.core.next(seq__9953);
var x = first__9954;
var xs = seq__9953__$1;
var G__9951 = hoplon.core.child_vec(this$);
var vec__9955 = G__9951;
var seq__9956 = cljs.core.seq(vec__9955);
var first__9957 = cljs.core.first(seq__9956);
var seq__9956__$1 = cljs.core.next(seq__9956);
var k = first__9957;
var ks = seq__9956__$1;
var kids = vec__9955;
var G__9950__$1 = G__9950;
var G__9951__$1 = G__9951;
while(true){
var vec__9958 = G__9950__$1;
var seq__9959 = cljs.core.seq(vec__9958);
var first__9960 = cljs.core.first(seq__9959);
var seq__9959__$1 = cljs.core.next(seq__9959);
var x__$1 = first__9960;
var xs__$1 = seq__9959__$1;
var vec__9961 = G__9951__$1;
var seq__9962 = cljs.core.seq(vec__9961);
var first__9963 = cljs.core.first(seq__9962);
var seq__9962__$1 = cljs.core.next(seq__9962);
var k__$1 = first__9963;
var ks__$1 = seq__9962__$1;
var kids__$1 = vec__9961;
if(cljs.core.truth_((function (){var or__3922__auto__ = x__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return k__$1;
}
})())){
var G__9964 = xs__$1;
var G__9965 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__9950__$1 = G__9964;
G__9951__$1 = G__9965;
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
var G__9967 = arguments.length;
switch (G__9967) {
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
var G__9968_9971 = init;
var G__9969_9972 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9968_9971,G__9969_9972) : f.call(null,G__9968_9971,G__9969_9972));

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
var __GT_map = (function (p1__9973_SHARP_){
return cljs.core.zipmap(p1__9973_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__9975 = arguments.length;
switch (G__9975) {
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
var temp__5533__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5533__auto__)){
var v = temp__5533__auto__;
return v.push(f);
} else {
var G__9977_9989 = this$;
var G__9978_9990 = "_hoplonWhenDom";
var G__9979_9991 = [f];
goog.object.set(G__9977_9989,G__9978_9990,G__9979_9991);

return setTimeout(((function (temp__5533__auto__){
return (function (){
var fexpr__9984 = ((function (temp__5533__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5533__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5533__auto__))
,(20));
} else {
var seq__9985_9992 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__9986_9993 = null;
var count__9987_9994 = (0);
var i__9988_9995 = (0);
while(true){
if((i__9988_9995 < count__9987_9994)){
var f_9996__$1 = chunk__9986_9993.cljs$core$IIndexed$_nth$arity$2(null,i__9988_9995);
(f_9996__$1.cljs$core$IFn$_invoke$arity$0 ? f_9996__$1.cljs$core$IFn$_invoke$arity$0() : f_9996__$1.call(null));


var G__9997 = seq__9985_9992;
var G__9998 = chunk__9986_9993;
var G__9999 = count__9987_9994;
var G__10000 = (i__9988_9995 + (1));
seq__9985_9992 = G__9997;
chunk__9986_9993 = G__9998;
count__9987_9994 = G__9999;
i__9988_9995 = G__10000;
continue;
} else {
var temp__5535__auto___10001 = cljs.core.seq(seq__9985_9992);
if(temp__5535__auto___10001){
var seq__9985_10002__$1 = temp__5535__auto___10001;
if(cljs.core.chunked_seq_QMARK_(seq__9985_10002__$1)){
var c__4319__auto___10003 = cljs.core.chunk_first(seq__9985_10002__$1);
var G__10004 = cljs.core.chunk_rest(seq__9985_10002__$1);
var G__10005 = c__4319__auto___10003;
var G__10006 = cljs.core.count(c__4319__auto___10003);
var G__10007 = (0);
seq__9985_9992 = G__10004;
chunk__9986_9993 = G__10005;
count__9987_9994 = G__10006;
i__9988_9995 = G__10007;
continue;
} else {
var f_10008__$1 = cljs.core.first(seq__9985_10002__$1);
(f_10008__$1.cljs$core$IFn$_invoke$arity$0 ? f_10008__$1.cljs$core$IFn$_invoke$arity$0() : f_10008__$1.call(null));


var G__10009 = cljs.core.next(seq__9985_10002__$1);
var G__10010 = null;
var G__10011 = (0);
var G__10012 = (0);
seq__9985_9992 = G__10009;
chunk__9986_9993 = G__10010;
count__9987_9994 = G__10011;
i__9988_9995 = G__10012;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5533__auto__))
;
return fexpr__9984();
});})(temp__5533__auto__))
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
var G__10018 = args;
var vec__10019 = G__10018;
var seq__10020 = cljs.core.seq(vec__10019);
var first__10021 = cljs.core.first(seq__10020);
var seq__10020__$1 = cljs.core.next(seq__10020);
var arg = first__10021;
var args__$1 = seq__10020__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10018__$1 = G__10018;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10022 = G__10018__$1;
var seq__10023 = cljs.core.seq(vec__10022);
var first__10024 = cljs.core.first(seq__10023);
var seq__10023__$1 = cljs.core.next(seq__10023);
var arg__$1 = first__10024;
var args__$2 = seq__10023__$1;
if(cljs.core.not((function (){var or__3922__auto__ = arg__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10025 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__10026 = kids__$2;
var G__10027 = args__$2;
attr__$1 = G__10025;
kids__$1 = G__10026;
G__10018__$1 = G__10027;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__10028 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__10018__$1,attr__$2,kids__$2,vec__10022,seq__10023,first__10024,seq__10023__$1,arg__$1,args__$2,attr,kids,G__10018,vec__10019,seq__10020,first__10021,seq__10020__$1,arg,args__$1){
return (function (p1__10013_SHARP_,p2__10014_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10013_SHARP_,p2__10014_SHARP_,true);
});})(attr__$1,kids__$1,G__10018__$1,attr__$2,kids__$2,vec__10022,seq__10023,first__10024,seq__10023__$1,arg__$1,args__$2,attr,kids,G__10018,vec__10019,seq__10020,first__10021,seq__10020__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10029 = kids__$2;
var G__10030 = args__$2;
attr__$1 = G__10028;
kids__$1 = G__10029;
G__10018__$1 = G__10030;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__10031 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10032 = kids__$2;
var G__10033 = cljs.core.rest(args__$2);
attr__$1 = G__10031;
kids__$1 = G__10032;
G__10018__$1 = G__10033;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__10034 = attr__$2;
var G__10035 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10036 = args__$2;
attr__$1 = G__10034;
kids__$1 = G__10035;
G__10018__$1 = G__10036;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__10037 = attr__$2;
var G__10038 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10039 = args__$2;
attr__$1 = G__10037;
kids__$1 = G__10038;
G__10018__$1 = G__10039;
continue;
} else {
var G__10040 = attr__$2;
var G__10041 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10042 = args__$2;
attr__$1 = G__10040;
kids__$1 = G__10041;
G__10018__$1 = G__10042;
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
var temp__5533__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5533__auto__)){
var n = temp__5533__auto__;
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._node[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (hoplon.core._node["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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

var G__10044_10051 = hoplon.core._node;
var G__10045_10052 = "string";
var G__10046_10053 = ((function (G__10044_10051,G__10045_10052){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__10044_10051,G__10045_10052))
;
goog.object.set(G__10044_10051,G__10045_10052,G__10046_10053);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__10047_10054 = hoplon.core._node;
var G__10048_10055 = "number";
var G__10049_10056 = ((function (G__10047_10054,G__10048_10055){
return (function (this$){
var G__10050 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__10050) : hoplon.core.$text.call(null,G__10050));
});})(G__10047_10054,G__10048_10055))
;
goog.object.set(G__10047_10054,G__10048_10055,G__10049_10056);
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4212__auto__.call(null,this$,elem,value));
} else {
var m__4212__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4212__auto____$1.call(null,this$,elem,value));
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
var opts10060_10088 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10060_10088){
return (function (ret__9430__auto__,p__10061){
var vec__10062 = p__10061;
var ___9431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10062,(0),null);
var f__9432__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10062,(1),null);
var sym__9433__auto__ = (f__9432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9432__auto__.cljs$core$IFn$_invoke$arity$0() : f__9432__auto__.call(null));
var G__10065 = ret__9430__auto__;
if(cljs.core.truth_(sym__9433__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10065,sym__9433__auto__);
} else {
return G__10065;
}
});})(opts10060_10088))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10060_10088){
return (function (p1__9429__9434__auto__){
var G__10067 = cljs.core.first(p1__9429__9434__auto__);
var fexpr__10066 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10060_10088);
return (fexpr__10066.cljs$core$IFn$_invoke$arity$1 ? fexpr__10066.cljs$core$IFn$_invoke$arity$1(G__10067) : fexpr__10066.call(null,G__10067));
});})(opts10060_10088))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10060_10088){
return (function (){
var checked__9398__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker/1723/p3w810/index.html.out/hoplon/core.cljs",14,1,80,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts10060_10088);
if(cljs.core.truth_(checked__9398__auto__)){
hoplon.core._elem_BANG_ = checked__9398__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts10060_10088))
], null)))));

var opts10070_10089 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10070_10089){
return (function (ret__9430__auto__,p__10071){
var vec__10072 = p__10071;
var ___9431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10072,(0),null);
var f__9432__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10072,(1),null);
var sym__9433__auto__ = (f__9432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9432__auto__.cljs$core$IFn$_invoke$arity$0() : f__9432__auto__.call(null));
var G__10075 = ret__9430__auto__;
if(cljs.core.truth_(sym__9433__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10075,sym__9433__auto__);
} else {
return G__10075;
}
});})(opts10070_10089))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10070_10089){
return (function (p1__9429__9434__auto__){
var G__10077 = cljs.core.first(p1__9429__9434__auto__);
var fexpr__10076 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10070_10089);
return (fexpr__10076.cljs$core$IFn$_invoke$arity$1 ? fexpr__10076.cljs$core$IFn$_invoke$arity$1(G__10077) : fexpr__10076.call(null,G__10077));
});})(opts10070_10089))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10070_10089){
return (function (){
var checked__9398__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker/1723/p3w810/index.html.out/hoplon/core.cljs",12,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts10070_10089);
if(cljs.core.truth_(checked__9398__auto__)){
hoplon.core._do_BANG_ = checked__9398__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts10070_10089))
], null)))));

var opts10080 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10080){
return (function (ret__9430__auto__,p__10081){
var vec__10082 = p__10081;
var ___9431__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10082,(0),null);
var f__9432__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10082,(1),null);
var sym__9433__auto__ = (f__9432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9432__auto__.cljs$core$IFn$_invoke$arity$0() : f__9432__auto__.call(null));
var G__10085 = ret__9430__auto__;
if(cljs.core.truth_(sym__9433__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10085,sym__9433__auto__);
} else {
return G__10085;
}
});})(opts10080))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10080){
return (function (p1__9429__9434__auto__){
var G__10087 = cljs.core.first(p1__9429__9434__auto__);
var fexpr__10086 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10080);
return (fexpr__10086.cljs$core$IFn$_invoke$arity$1 ? fexpr__10086.cljs$core$IFn$_invoke$arity$1(G__10087) : fexpr__10086.call(null,G__10087));
});})(opts10080))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10080){
return (function (){
var checked__9398__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/juanuys/.boot/cache/tmp/Users/juanuys/Documents/clicker/1723/p3w810/index.html.out/hoplon/core.cljs",12,1,75,75,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts10080);
if(cljs.core.truth_(checked__9398__auto__)){
hoplon.core._on_BANG_ = checked__9398__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts10080))
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto__.call(null,this$,kvs));
} else {
var m__4212__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto____$1.call(null,this$,kvs));
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto__.call(null,this$,kvs));
} else {
var m__4212__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto____$1.call(null,this$,kvs));
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto__.call(null,this$,child));
} else {
var m__4212__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto____$1.call(null,this$,child));
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto__.call(null,this$,child));
} else {
var m__4212__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto____$1.call(null,this$,child));
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto__.call(null,this$,new$,existing));
} else {
var m__4212__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto____$1.call(null,this$,new$,existing));
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
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto__.call(null,this$,new$,existing));
} else {
var m__4212__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto____$1.call(null,this$,new$,existing));
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
var and__3911__auto__ = (this$ instanceof Element);
if(and__3911__auto__){
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
return and__3911__auto__;
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
var x10098 = elem;
x10098.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x10098.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x10098){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x10098))
;

x10098.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x10098.cljs$core$ILookup$_lookup$arity$2 = ((function (x10098){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__10099 = this$__$1.children;
var G__10100 = k;
return goog.object.get(G__10099,G__10100);
}
});})(x10098))
;

x10098.cljs$core$ILookup$_lookup$arity$3 = ((function (x10098){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3922__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x10098.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x10098){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10101 = cljs.core.seq(kvs);
var chunk__10103 = null;
var count__10104 = (0);
var i__10105 = (0);
while(true){
if((i__10105 < count__10104)){
var vec__10107 = chunk__10103.cljs$core$IIndexed$_nth$arity$2(null,i__10105);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10107,(1),null);
var k_10129__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10129__$1);
} else {
e.setAttribute(k_10129__$1,((v === true)?k_10129__$1:v));
}


var G__10130 = seq__10101;
var G__10131 = chunk__10103;
var G__10132 = count__10104;
var G__10133 = (i__10105 + (1));
seq__10101 = G__10130;
chunk__10103 = G__10131;
count__10104 = G__10132;
i__10105 = G__10133;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10101);
if(temp__5535__auto__){
var seq__10101__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10101__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10101__$1);
var G__10134 = cljs.core.chunk_rest(seq__10101__$1);
var G__10135 = c__4319__auto__;
var G__10136 = cljs.core.count(c__4319__auto__);
var G__10137 = (0);
seq__10101 = G__10134;
chunk__10103 = G__10135;
count__10104 = G__10136;
i__10105 = G__10137;
continue;
} else {
var vec__10110 = cljs.core.first(seq__10101__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10110,(1),null);
var k_10138__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10138__$1);
} else {
e.setAttribute(k_10138__$1,((v === true)?k_10138__$1:v));
}


var G__10139 = cljs.core.next(seq__10101__$1);
var G__10140 = null;
var G__10141 = (0);
var G__10142 = (0);
seq__10101 = G__10139;
chunk__10103 = G__10140;
count__10104 = G__10141;
i__10105 = G__10142;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x10098){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10113 = cljs.core.seq(kvs);
var chunk__10114 = null;
var count__10115 = (0);
var i__10116 = (0);
while(true){
if((i__10116 < count__10115)){
var vec__10117 = chunk__10114.cljs$core$IIndexed$_nth$arity$2(null,i__10116);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10117,(1),null);
var G__10120_10143 = e.style;
var G__10121_10144 = cljs.core.name(k);
var G__10122_10145 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10120_10143,G__10121_10144,G__10122_10145);


var G__10146 = seq__10113;
var G__10147 = chunk__10114;
var G__10148 = count__10115;
var G__10149 = (i__10116 + (1));
seq__10113 = G__10146;
chunk__10114 = G__10147;
count__10115 = G__10148;
i__10116 = G__10149;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10113);
if(temp__5535__auto__){
var seq__10113__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10113__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10113__$1);
var G__10150 = cljs.core.chunk_rest(seq__10113__$1);
var G__10151 = c__4319__auto__;
var G__10152 = cljs.core.count(c__4319__auto__);
var G__10153 = (0);
seq__10113 = G__10150;
chunk__10114 = G__10151;
count__10115 = G__10152;
i__10116 = G__10153;
continue;
} else {
var vec__10123 = cljs.core.first(seq__10113__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10123,(1),null);
var G__10126_10154 = e.style;
var G__10127_10155 = cljs.core.name(k);
var G__10128_10156 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10126_10154,G__10127_10155,G__10128_10156);


var G__10157 = cljs.core.next(seq__10113__$1);
var G__10158 = null;
var G__10159 = (0);
var G__10160 = (0);
seq__10113 = G__10157;
chunk__10114 = G__10158;
count__10115 = G__10159;
i__10116 = G__10160;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x10098){
return (function (this$){
var this$__$1 = this;
var temp__5533__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5533__auto__)){
var hl_kids = temp__5533__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));

return kids;
}
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x10098){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10161 = hoplon.core._hoplon_kids(this$__$1);
var i_10162 = cljs.core.count(cljs.core.deref(kids_10161));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_10161,i_10162,child__$1,this$__$1,x10098){
return (function (p1__10093_SHARP_,p2__10092_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10161,cljs.core.assoc,i_10162,p2__10092_SHARP_);
});})(kids_10161,i_10162,child__$1,this$__$1,x10098))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10161,cljs.core.assoc,i_10162,child__$1);
}

return child__$1;
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x10098){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10163 = hoplon.core._hoplon_kids(this$__$1);
var before_count_10164 = cljs.core.count(cljs.core.deref(kids_10163));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10163,((function (kids_10163,before_count_10164,child__$1,this$__$1,x10098){
return (function (p1__10094_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__10094_SHARP_));
});})(kids_10163,before_count_10164,child__$1,this$__$1,x10098))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10163,((function (kids_10163,before_count_10164,child__$1,this$__$1,x10098){
return (function (p1__10095_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__10095_SHARP_));
});})(kids_10163,before_count_10164,child__$1,this$__$1,x10098))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_10163)),(before_count_10164 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x10098){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x10098){
return (function (p1__10096_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x10098){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x10098))
,p1__10096_SHARP_);
});})(existing__$1,this$__$1,x10098))
);

return existing__$1;
});})(x10098))
;

x10098.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x10098){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x10098){
return (function (p1__10097_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x10098){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x10098))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10097_SHARP_], 0)));
});})(new$__$1,this$__$1,x10098))
);
} else {
}
}

return new$__$1;
});})(x10098))
;

return x10098;
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
var G__10170 = arguments.length;
switch (G__10170) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___10172 = arguments.length;
var i__4500__auto___10173 = (0);
while(true){
if((i__4500__auto___10173 < len__4499__auto___10172)){
args_arr__4514__auto__.push((arguments[i__4500__auto___10173]));

var G__10174 = (i__4500__auto___10173 + (1));
i__4500__auto___10173 = G__10174;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10166){
var G__10167 = cljs.core.first(seq10166);
var seq10166__$1 = cljs.core.next(seq10166);
var G__10168 = cljs.core.first(seq10166__$1);
var seq10166__$2 = cljs.core.next(seq10166__$1);
var G__10169 = cljs.core.first(seq10166__$2);
var seq10166__$3 = cljs.core.next(seq10166__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10167,G__10168,G__10169,seq10166__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__10180 = arguments.length;
switch (G__10180) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___10182 = arguments.length;
var i__4500__auto___10183 = (0);
while(true){
if((i__4500__auto___10183 < len__4499__auto___10182)){
args_arr__4514__auto__.push((arguments[i__4500__auto___10183]));

var G__10184 = (i__4500__auto___10183 + (1));
i__4500__auto___10183 = G__10184;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10176){
var G__10177 = cljs.core.first(seq10176);
var seq10176__$1 = cljs.core.next(seq10176);
var G__10178 = cljs.core.first(seq10176__$1);
var seq10176__$2 = cljs.core.next(seq10176__$1);
var G__10179 = cljs.core.first(seq10176__$2);
var seq10176__$3 = cljs.core.next(seq10176__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10177,G__10178,G__10179,seq10176__$3);
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
return cljs.core.reduce_kv((function (p1__10186_SHARP_,p2__10185_SHARP_,p3__10187_SHARP_){
hoplon.core._attribute_BANG_(p2__10185_SHARP_,p1__10186_SHARP_,p3__10187_SHARP_);

return p1__10186_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10188){
var vec__10189 = p__10188;
var seq__10190 = cljs.core.seq(vec__10189);
var first__10191 = cljs.core.first(seq__10190);
var seq__10190__$1 = cljs.core.next(seq__10190);
var child_cell = first__10191;
var _ = seq__10190__$1;
var kids = vec__10189;
var this$__$1 = this$;
var seq__10192_10196 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__10193_10197 = null;
var count__10194_10198 = (0);
var i__10195_10199 = (0);
while(true){
if((i__10195_10199 < count__10194_10198)){
var x_10200 = chunk__10193_10197.cljs$core$IIndexed$_nth$arity$2(null,i__10195_10199);
var temp__5535__auto___10201 = hoplon.core.__GT_node(x_10200);
if(cljs.core.truth_(temp__5535__auto___10201)){
var x_10202__$1 = temp__5535__auto___10201;
hoplon.core._append_child_BANG_(this$__$1,x_10202__$1);
} else {
}


var G__10203 = seq__10192_10196;
var G__10204 = chunk__10193_10197;
var G__10205 = count__10194_10198;
var G__10206 = (i__10195_10199 + (1));
seq__10192_10196 = G__10203;
chunk__10193_10197 = G__10204;
count__10194_10198 = G__10205;
i__10195_10199 = G__10206;
continue;
} else {
var temp__5535__auto___10207 = cljs.core.seq(seq__10192_10196);
if(temp__5535__auto___10207){
var seq__10192_10208__$1 = temp__5535__auto___10207;
if(cljs.core.chunked_seq_QMARK_(seq__10192_10208__$1)){
var c__4319__auto___10209 = cljs.core.chunk_first(seq__10192_10208__$1);
var G__10210 = cljs.core.chunk_rest(seq__10192_10208__$1);
var G__10211 = c__4319__auto___10209;
var G__10212 = cljs.core.count(c__4319__auto___10209);
var G__10213 = (0);
seq__10192_10196 = G__10210;
chunk__10193_10197 = G__10211;
count__10194_10198 = G__10212;
i__10195_10199 = G__10213;
continue;
} else {
var x_10214 = cljs.core.first(seq__10192_10208__$1);
var temp__5535__auto___10215__$1 = hoplon.core.__GT_node(x_10214);
if(cljs.core.truth_(temp__5535__auto___10215__$1)){
var x_10216__$1 = temp__5535__auto___10215__$1;
hoplon.core._append_child_BANG_(this$__$1,x_10216__$1);
} else {
}


var G__10217 = cljs.core.next(seq__10192_10208__$1);
var G__10218 = null;
var G__10219 = (0);
var G__10220 = (0);
seq__10192_10196 = G__10217;
chunk__10193_10197 = G__10218;
count__10194_10198 = G__10219;
i__10195_10199 = G__10220;
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
var args__4502__auto__ = [];
var len__4499__auto___10227 = arguments.length;
var i__4500__auto___10228 = (0);
while(true){
if((i__4500__auto___10228 < len__4499__auto___10227)){
args__4502__auto__.push((arguments[i__4500__auto___10228]));

var G__10229 = (i__4500__auto___10228 + (1));
i__4500__auto___10228 = G__10229;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__10223 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10223,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10223,(1),null);
var G__10226 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__10226,attr);

hoplon.core.add_children_BANG_(G__10226,kids);

return G__10226;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq10221){
var G__10222 = cljs.core.first(seq10221);
var seq10221__$1 = cljs.core.next(seq10221);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10222,seq10221__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__10231 = null;
var G__10231__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__10231__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__10231__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__10231__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__10231__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__10231__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__10231__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__10231__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__10231__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__10231__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__10231__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__10231__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__10231__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__10231__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__10231__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__10231__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__10231__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__10231__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__10231__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__10231__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__10231__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__10231__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__10231 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__10231__1.call(this,self__);
case 2:
return G__10231__2.call(this,self__,a);
case 3:
return G__10231__3.call(this,self__,a,b);
case 4:
return G__10231__4.call(this,self__,a,b,c);
case 5:
return G__10231__5.call(this,self__,a,b,c,d);
case 6:
return G__10231__6.call(this,self__,a,b,c,d,e);
case 7:
return G__10231__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__10231__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__10231__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__10231__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__10231__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__10231__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__10231__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__10231__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__10231__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__10231__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__10231__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__10231__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__10231__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__10231__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__10231__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__10231__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10231.cljs$core$IFn$_invoke$arity$1 = G__10231__1;
G__10231.cljs$core$IFn$_invoke$arity$2 = G__10231__2;
G__10231.cljs$core$IFn$_invoke$arity$3 = G__10231__3;
G__10231.cljs$core$IFn$_invoke$arity$4 = G__10231__4;
G__10231.cljs$core$IFn$_invoke$arity$5 = G__10231__5;
G__10231.cljs$core$IFn$_invoke$arity$6 = G__10231__6;
G__10231.cljs$core$IFn$_invoke$arity$7 = G__10231__7;
G__10231.cljs$core$IFn$_invoke$arity$8 = G__10231__8;
G__10231.cljs$core$IFn$_invoke$arity$9 = G__10231__9;
G__10231.cljs$core$IFn$_invoke$arity$10 = G__10231__10;
G__10231.cljs$core$IFn$_invoke$arity$11 = G__10231__11;
G__10231.cljs$core$IFn$_invoke$arity$12 = G__10231__12;
G__10231.cljs$core$IFn$_invoke$arity$13 = G__10231__13;
G__10231.cljs$core$IFn$_invoke$arity$14 = G__10231__14;
G__10231.cljs$core$IFn$_invoke$arity$15 = G__10231__15;
G__10231.cljs$core$IFn$_invoke$arity$16 = G__10231__16;
G__10231.cljs$core$IFn$_invoke$arity$17 = G__10231__17;
G__10231.cljs$core$IFn$_invoke$arity$18 = G__10231__18;
G__10231.cljs$core$IFn$_invoke$arity$19 = G__10231__19;
G__10231.cljs$core$IFn$_invoke$arity$20 = G__10231__20;
G__10231.cljs$core$IFn$_invoke$arity$21 = G__10231__21;
G__10231.cljs$core$IFn$_invoke$arity$22 = G__10231__22;
return G__10231;
})()
;

Element.prototype.apply = (function (self__,args10230){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10230)));
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
var G__10238__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__10232_10239 = document;
var G__10233_10240 = elem;
var G__10234_10241 = document.createElement(elem);
goog.object.set(G__10232_10239,G__10233_10240,G__10234_10241);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__10235_10242 = hoplon.core.parse_args(args);
var attrs_10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10235_10242,(0),null);
var kids_10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10235_10242,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_10243))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_10243);

hoplon.core.add_children_BANG_(helem,kids_10244);
}

return helem;
};
var G__10238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10245__i = 0, G__10245__a = new Array(arguments.length -  0);
while (G__10245__i < G__10245__a.length) {G__10245__a[G__10245__i] = arguments[G__10245__i + 0]; ++G__10245__i;}
  args = new cljs.core.IndexedSeq(G__10245__a,0,null);
} 
return G__10238__delegate.call(this,args);};
G__10238.cljs$lang$maxFixedArity = 0;
G__10238.cljs$lang$applyTo = (function (arglist__10246){
var args = cljs.core.seq(arglist__10246);
return G__10238__delegate(args);
});
G__10238.cljs$core$IFn$_invoke$arity$variadic = G__10238__delegate;
return G__10238;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__10250__delegate = function (args){
var vec__10247 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10247,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10247,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__10250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10251__i = 0, G__10251__a = new Array(arguments.length -  0);
while (G__10251__i < G__10251__a.length) {G__10251__a[G__10251__i] = arguments[G__10251__i + 0]; ++G__10251__i;}
  args = new cljs.core.IndexedSeq(G__10251__a,0,null);
} 
return G__10250__delegate.call(this,args);};
G__10250.cljs$lang$maxFixedArity = 0;
G__10250.cljs$lang$applyTo = (function (arglist__10252){
var args = cljs.core.seq(arglist__10252);
return G__10250__delegate(args);
});
G__10250.cljs$core$IFn$_invoke$arity$variadic = G__10250__delegate;
return G__10250;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10254 = arguments.length;
var i__4500__auto___10255 = (0);
while(true){
if((i__4500__auto___10255 < len__4499__auto___10254)){
args__4502__auto__.push((arguments[i__4500__auto___10255]));

var G__10256 = (i__4500__auto___10255 + (1));
i__4500__auto___10255 = G__10256;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hoplon.core.html.cljs$lang$applyTo = (function (seq10253){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10253));
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
hoplon.core.$text = (function hoplon$core$$text(p1__10257_SHARP_){
return document.createTextNode(p1__10257_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10258_SHARP_){
return document.createComment(p1__10258_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if(typeof hoplon.core.elem_BANG_ !== 'undefined'){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__10260_SHARP_,p2__10259_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__10259_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__10261 = elem;
var G__10262 = cljs.core.cst$kw$attr;
var G__10263 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10261,G__10262,G__10263) : hoplon.core.do_BANG_.call(null,G__10261,G__10262,G__10263));
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
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
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
var items_seq = (function (){var fexpr__10268 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__10266,G__10267){
return (G__10266.cljs$core$IFn$_invoke$arity$1 ? G__10266.cljs$core$IFn$_invoke$arity$1(G__10267) : G__10266.call(null,G__10267));
});})(on_deck))
);
return (fexpr__10268.cljs$core$IFn$_invoke$arity$2 ? fexpr__10268.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__10268.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__10264_SHARP_){
var fexpr__10272 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__10271,G__10270,G__10269){
return (G__10269.cljs$core$IFn$_invoke$arity$3 ? G__10269.cljs$core$IFn$_invoke$arity$3(G__10270,G__10271,null) : G__10269.call(null,G__10270,G__10271,null));
});})(on_deck,items_seq))
);
return (fexpr__10272.cljs$core$IFn$_invoke$arity$3 ? fexpr__10272.cljs$core$IFn$_invoke$arity$3(p1__10264_SHARP_,items_seq,cljs.core.nth) : fexpr__10272.call(null,p1__10264_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__10265_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__10265_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10265_SHARP_,cljs.core.rest);

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
var seq__10273 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10274 = null;
var count__10275 = (0);
var i__10276 = (0);
while(true){
if((i__10276 < count__10275)){
var i = chunk__10274.cljs$core$IIndexed$_nth$arity$2(null,i__10276);
var e_10279 = (function (){var or__3922__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__10277 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10277) : tpl.call(null,G__10277));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10279);


var G__10280 = seq__10273;
var G__10281 = chunk__10274;
var G__10282 = count__10275;
var G__10283 = (i__10276 + (1));
seq__10273 = G__10280;
chunk__10274 = G__10281;
count__10275 = G__10282;
i__10276 = G__10283;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10273);
if(temp__5535__auto__){
var seq__10273__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10273__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10273__$1);
var G__10284 = cljs.core.chunk_rest(seq__10273__$1);
var G__10285 = c__4319__auto__;
var G__10286 = cljs.core.count(c__4319__auto__);
var G__10287 = (0);
seq__10273 = G__10284;
chunk__10274 = G__10285;
count__10275 = G__10286;
i__10276 = G__10287;
continue;
} else {
var i = cljs.core.first(seq__10273__$1);
var e_10288 = (function (){var or__3922__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__10278 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10278) : tpl.call(null,G__10278));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10288);


var G__10289 = cljs.core.next(seq__10273__$1);
var G__10290 = null;
var G__10291 = (0);
var G__10292 = (0);
seq__10273 = G__10289;
chunk__10274 = G__10290;
count__10275 = G__10291;
i__10276 = G__10292;
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
var n__4376__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__4376__auto__)){
var e_10293 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_10293);

var G__10294 = (_ + (1));
_ = G__10294;
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
