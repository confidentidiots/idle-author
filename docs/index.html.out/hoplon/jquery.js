// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__14281 = arguments.length;
switch (G__14281) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14295 = arguments.length;
var i__4532__auto___14296 = (0);
while(true){
if((i__4532__auto___14296 < len__4531__auto___14295)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14296]));

var G__14297 = (i__4532__auto___14296 + (1));
i__4532__auto___14296 = G__14297;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14282 = cljs.core.seq(kvs);
var chunk__14284 = null;
var count__14285 = (0);
var i__14286 = (0);
while(true){
if((i__14286 < count__14285)){
var vec__14288 = chunk__14284.cljs$core$IIndexed$_nth$arity$2(null,i__14286);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(1),null);
var k_14298__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14298__$1);
} else {
e.attr(k_14298__$1,((v === true)?k_14298__$1:v));
}


var G__14299 = seq__14282;
var G__14300 = chunk__14284;
var G__14301 = count__14285;
var G__14302 = (i__14286 + (1));
seq__14282 = G__14299;
chunk__14284 = G__14300;
count__14285 = G__14301;
i__14286 = G__14302;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14282);
if(temp__5457__auto__){
var seq__14282__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14282__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14282__$1);
var G__14303 = cljs.core.chunk_rest(seq__14282__$1);
var G__14304 = c__4351__auto__;
var G__14305 = cljs.core.count(c__4351__auto__);
var G__14306 = (0);
seq__14282 = G__14303;
chunk__14284 = G__14304;
count__14285 = G__14305;
i__14286 = G__14306;
continue;
} else {
var vec__14291 = cljs.core.first(seq__14282__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14291,(1),null);
var k_14307__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14307__$1);
} else {
e.attr(k_14307__$1,((v === true)?k_14307__$1:v));
}


var G__14308 = cljs.core.next(seq__14282__$1);
var G__14309 = null;
var G__14310 = (0);
var G__14311 = (0);
seq__14282 = G__14308;
chunk__14284 = G__14309;
count__14285 = G__14310;
i__14286 = G__14311;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14277){
var G__14278 = cljs.core.first(seq14277);
var seq14277__$1 = cljs.core.next(seq14277);
var G__14279 = cljs.core.first(seq14277__$1);
var seq14277__$2 = cljs.core.next(seq14277__$1);
var G__14280 = cljs.core.first(seq14277__$2);
var seq14277__$3 = cljs.core.next(seq14277__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14278,G__14279,G__14280,seq14277__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__14317 = arguments.length;
switch (G__14317) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14329 = arguments.length;
var i__4532__auto___14330 = (0);
while(true){
if((i__4532__auto___14330 < len__4531__auto___14329)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14330]));

var G__14331 = (i__4532__auto___14330 + (1));
i__4532__auto___14330 = G__14331;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14318 = cljs.core.seq(kvs);
var chunk__14319 = null;
var count__14320 = (0);
var i__14321 = (0);
while(true){
if((i__14321 < count__14320)){
var vec__14322 = chunk__14319.cljs$core$IIndexed$_nth$arity$2(null,i__14321);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14332 = seq__14318;
var G__14333 = chunk__14319;
var G__14334 = count__14320;
var G__14335 = (i__14321 + (1));
seq__14318 = G__14332;
chunk__14319 = G__14333;
count__14320 = G__14334;
i__14321 = G__14335;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14318);
if(temp__5457__auto__){
var seq__14318__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14318__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14318__$1);
var G__14336 = cljs.core.chunk_rest(seq__14318__$1);
var G__14337 = c__4351__auto__;
var G__14338 = cljs.core.count(c__4351__auto__);
var G__14339 = (0);
seq__14318 = G__14336;
chunk__14319 = G__14337;
count__14320 = G__14338;
i__14321 = G__14339;
continue;
} else {
var vec__14325 = cljs.core.first(seq__14318__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14340 = cljs.core.next(seq__14318__$1);
var G__14341 = null;
var G__14342 = (0);
var G__14343 = (0);
seq__14318 = G__14340;
chunk__14319 = G__14341;
count__14320 = G__14342;
i__14321 = G__14343;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14313){
var G__14314 = cljs.core.first(seq14313);
var seq14313__$1 = cljs.core.next(seq14313);
var G__14315 = cljs.core.first(seq14313__$1);
var seq14313__$2 = cljs.core.next(seq14313__$1);
var G__14316 = cljs.core.first(seq14313__$2);
var seq14313__$3 = cljs.core.next(seq14313__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14314,G__14315,G__14316,seq14313__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__14345 = arguments.length;
switch (G__14345) {
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
var G__14348 = arguments.length;
switch (G__14348) {
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
var G__14350 = elem;
var G__14351 = cljs.core.cst$kw$attr;
var G__14352 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14350,G__14351,G__14352) : hoplon.core.do_BANG_.call(null,G__14350,G__14351,G__14352));
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
var G__14353__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14353 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14354__i = 0, G__14354__a = new Array(arguments.length -  2);
while (G__14354__i < G__14354__a.length) {G__14354__a[G__14354__i] = arguments[G__14354__i + 2]; ++G__14354__i;}
  args = new cljs.core.IndexedSeq(G__14354__a,0,null);
} 
return G__14353__delegate.call(this,elem,_,args);};
G__14353.cljs$lang$maxFixedArity = 2;
G__14353.cljs$lang$applyTo = (function (arglist__14355){
var elem = cljs.core.first(arglist__14355);
arglist__14355 = cljs.core.next(arglist__14355);
var _ = cljs.core.first(arglist__14355);
var args = cljs.core.rest(arglist__14355);
return G__14353__delegate(elem,_,args);
});
G__14353.cljs$core$IFn$_invoke$arity$variadic = G__14353__delegate;
return G__14353;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14356 = cljs.core.seq(clmap);
var chunk__14357 = null;
var count__14358 = (0);
var i__14359 = (0);
while(true){
if((i__14359 < count__14358)){
var vec__14360 = chunk__14357.cljs$core$IIndexed$_nth$arity$2(null,i__14359);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14360,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14360,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14366 = seq__14356;
var G__14367 = chunk__14357;
var G__14368 = count__14358;
var G__14369 = (i__14359 + (1));
seq__14356 = G__14366;
chunk__14357 = G__14367;
count__14358 = G__14368;
i__14359 = G__14369;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14356);
if(temp__5457__auto__){
var seq__14356__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14356__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14356__$1);
var G__14370 = cljs.core.chunk_rest(seq__14356__$1);
var G__14371 = c__4351__auto__;
var G__14372 = cljs.core.count(c__4351__auto__);
var G__14373 = (0);
seq__14356 = G__14370;
chunk__14357 = G__14371;
count__14358 = G__14372;
i__14359 = G__14373;
continue;
} else {
var vec__14363 = cljs.core.first(seq__14356__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14363,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14363,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14374 = cljs.core.next(seq__14356__$1);
var G__14375 = null;
var G__14376 = (0);
var G__14377 = (0);
seq__14356 = G__14374;
chunk__14357 = G__14375;
count__14358 = G__14376;
i__14359 = G__14377;
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
var G__14378 = elem;
var G__14379 = cljs.core.cst$kw$class;
var G__14380 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14378,G__14379,G__14380) : hoplon.core.do_BANG_.call(null,G__14378,G__14379,G__14380));
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
var G__14381_14387 = elem;
var G__14382_14388 = cljs.core.cst$kw$focus;
var G__14383_14389 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14381_14387,G__14382_14388,G__14383_14389) : hoplon.core.do_BANG_.call(null,G__14381_14387,G__14382_14388,G__14383_14389));

var G__14384 = elem;
var G__14385 = cljs.core.cst$kw$select;
var G__14386 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14384,G__14385,G__14386) : hoplon.core.do_BANG_.call(null,G__14384,G__14385,G__14386));
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
