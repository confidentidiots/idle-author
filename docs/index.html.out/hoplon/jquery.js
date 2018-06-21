// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__10302 = arguments.length;
switch (G__10302) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___10316 = arguments.length;
var i__4500__auto___10317 = (0);
while(true){
if((i__4500__auto___10317 < len__4499__auto___10316)){
args_arr__4514__auto__.push((arguments[i__4500__auto___10317]));

var G__10318 = (i__4500__auto___10317 + (1));
i__4500__auto___10317 = G__10318;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__10303 = cljs.core.seq(kvs);
var chunk__10305 = null;
var count__10306 = (0);
var i__10307 = (0);
while(true){
if((i__10307 < count__10306)){
var vec__10309 = chunk__10305.cljs$core$IIndexed$_nth$arity$2(null,i__10307);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10309,(1),null);
var k_10319__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10319__$1);
} else {
e.attr(k_10319__$1,((v === true)?k_10319__$1:v));
}


var G__10320 = seq__10303;
var G__10321 = chunk__10305;
var G__10322 = count__10306;
var G__10323 = (i__10307 + (1));
seq__10303 = G__10320;
chunk__10305 = G__10321;
count__10306 = G__10322;
i__10307 = G__10323;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10303);
if(temp__5535__auto__){
var seq__10303__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10303__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10303__$1);
var G__10324 = cljs.core.chunk_rest(seq__10303__$1);
var G__10325 = c__4319__auto__;
var G__10326 = cljs.core.count(c__4319__auto__);
var G__10327 = (0);
seq__10303 = G__10324;
chunk__10305 = G__10325;
count__10306 = G__10326;
i__10307 = G__10327;
continue;
} else {
var vec__10312 = cljs.core.first(seq__10303__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10312,(1),null);
var k_10328__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10328__$1);
} else {
e.attr(k_10328__$1,((v === true)?k_10328__$1:v));
}


var G__10329 = cljs.core.next(seq__10303__$1);
var G__10330 = null;
var G__10331 = (0);
var G__10332 = (0);
seq__10303 = G__10329;
chunk__10305 = G__10330;
count__10306 = G__10331;
i__10307 = G__10332;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10298){
var G__10299 = cljs.core.first(seq10298);
var seq10298__$1 = cljs.core.next(seq10298);
var G__10300 = cljs.core.first(seq10298__$1);
var seq10298__$2 = cljs.core.next(seq10298__$1);
var G__10301 = cljs.core.first(seq10298__$2);
var seq10298__$3 = cljs.core.next(seq10298__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10299,G__10300,G__10301,seq10298__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__10338 = arguments.length;
switch (G__10338) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___10350 = arguments.length;
var i__4500__auto___10351 = (0);
while(true){
if((i__4500__auto___10351 < len__4499__auto___10350)){
args_arr__4514__auto__.push((arguments[i__4500__auto___10351]));

var G__10352 = (i__4500__auto___10351 + (1));
i__4500__auto___10351 = G__10352;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__10339 = cljs.core.seq(kvs);
var chunk__10340 = null;
var count__10341 = (0);
var i__10342 = (0);
while(true){
if((i__10342 < count__10341)){
var vec__10343 = chunk__10340.cljs$core$IIndexed$_nth$arity$2(null,i__10342);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10343,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10353 = seq__10339;
var G__10354 = chunk__10340;
var G__10355 = count__10341;
var G__10356 = (i__10342 + (1));
seq__10339 = G__10353;
chunk__10340 = G__10354;
count__10341 = G__10355;
i__10342 = G__10356;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10339);
if(temp__5535__auto__){
var seq__10339__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10339__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10339__$1);
var G__10357 = cljs.core.chunk_rest(seq__10339__$1);
var G__10358 = c__4319__auto__;
var G__10359 = cljs.core.count(c__4319__auto__);
var G__10360 = (0);
seq__10339 = G__10357;
chunk__10340 = G__10358;
count__10341 = G__10359;
i__10342 = G__10360;
continue;
} else {
var vec__10346 = cljs.core.first(seq__10339__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10346,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10361 = cljs.core.next(seq__10339__$1);
var G__10362 = null;
var G__10363 = (0);
var G__10364 = (0);
seq__10339 = G__10361;
chunk__10340 = G__10362;
count__10341 = G__10363;
i__10342 = G__10364;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq10334){
var G__10335 = cljs.core.first(seq10334);
var seq10334__$1 = cljs.core.next(seq10334);
var G__10336 = cljs.core.first(seq10334__$1);
var seq10334__$2 = cljs.core.next(seq10334__$1);
var G__10337 = cljs.core.first(seq10334__$2);
var seq10334__$3 = cljs.core.next(seq10334__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10335,G__10336,G__10337,seq10334__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__10366 = arguments.length;
switch (G__10366) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__10369 = arguments.length;
switch (G__10369) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__10371 = elem;
var G__10372 = cljs.core.cst$kw$attr;
var G__10373 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10371,G__10372,G__10373) : hoplon.core.do_BANG_.call(null,G__10371,G__10372,G__10373));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10374__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__10374 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10375__i = 0, G__10375__a = new Array(arguments.length -  2);
while (G__10375__i < G__10375__a.length) {G__10375__a[G__10375__i] = arguments[G__10375__i + 2]; ++G__10375__i;}
  args = new cljs.core.IndexedSeq(G__10375__a,0,null);
} 
return G__10374__delegate.call(this,elem,_,args);};
G__10374.cljs$lang$maxFixedArity = 2;
G__10374.cljs$lang$applyTo = (function (arglist__10376){
var elem = cljs.core.first(arglist__10376);
arglist__10376 = cljs.core.next(arglist__10376);
var _ = cljs.core.first(arglist__10376);
var args = cljs.core.rest(arglist__10376);
return G__10374__delegate(elem,_,args);
});
G__10374.cljs$core$IFn$_invoke$arity$variadic = G__10374__delegate;
return G__10374;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__10377 = cljs.core.seq(clmap);
var chunk__10378 = null;
var count__10379 = (0);
var i__10380 = (0);
while(true){
if((i__10380 < count__10379)){
var vec__10381 = chunk__10378.cljs$core$IIndexed$_nth$arity$2(null,i__10380);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10387 = seq__10377;
var G__10388 = chunk__10378;
var G__10389 = count__10379;
var G__10390 = (i__10380 + (1));
seq__10377 = G__10387;
chunk__10378 = G__10388;
count__10379 = G__10389;
i__10380 = G__10390;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10377);
if(temp__5535__auto__){
var seq__10377__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10377__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10377__$1);
var G__10391 = cljs.core.chunk_rest(seq__10377__$1);
var G__10392 = c__4319__auto__;
var G__10393 = cljs.core.count(c__4319__auto__);
var G__10394 = (0);
seq__10377 = G__10391;
chunk__10378 = G__10392;
count__10379 = G__10393;
i__10380 = G__10394;
continue;
} else {
var vec__10384 = cljs.core.first(seq__10377__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10384,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10384,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10395 = cljs.core.next(seq__10377__$1);
var G__10396 = null;
var G__10397 = (0);
var G__10398 = (0);
seq__10377 = G__10395;
chunk__10378 = G__10396;
count__10379 = G__10397;
i__10380 = G__10398;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class_SLASH__STAR_,(function (elem,_,kvs){
var G__10399 = elem;
var G__10400 = cljs.core.cst$kw$class;
var G__10401 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10399,G__10400,G__10401) : hoplon.core.do_BANG_.call(null,G__10399,G__10400,G__10401));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
return hoplon.core.when_dom(elem,(function (){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__10402_10408 = elem;
var G__10403_10409 = cljs.core.cst$kw$focus;
var G__10404_10410 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10402_10408,G__10403_10409,G__10404_10410) : hoplon.core.do_BANG_.call(null,G__10402_10408,G__10403_10409,G__10404_10410));

var G__10405 = elem;
var G__10406 = cljs.core.cst$kw$select;
var G__10407 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10405,G__10406,G__10407) : hoplon.core.do_BANG_.call(null,G__10405,G__10406,G__10407));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
