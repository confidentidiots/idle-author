// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__14312 = arguments.length;
switch (G__14312) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14326 = arguments.length;
var i__4532__auto___14327 = (0);
while(true){
if((i__4532__auto___14327 < len__4531__auto___14326)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14327]));

var G__14328 = (i__4532__auto___14327 + (1));
i__4532__auto___14327 = G__14328;
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
var seq__14313 = cljs.core.seq(kvs);
var chunk__14315 = null;
var count__14316 = (0);
var i__14317 = (0);
while(true){
if((i__14317 < count__14316)){
var vec__14319 = chunk__14315.cljs$core$IIndexed$_nth$arity$2(null,i__14317);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319,(1),null);
var k_14329__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14329__$1);
} else {
e.attr(k_14329__$1,((v === true)?k_14329__$1:v));
}


var G__14330 = seq__14313;
var G__14331 = chunk__14315;
var G__14332 = count__14316;
var G__14333 = (i__14317 + (1));
seq__14313 = G__14330;
chunk__14315 = G__14331;
count__14316 = G__14332;
i__14317 = G__14333;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14313);
if(temp__5457__auto__){
var seq__14313__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14313__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14313__$1);
var G__14334 = cljs.core.chunk_rest(seq__14313__$1);
var G__14335 = c__4351__auto__;
var G__14336 = cljs.core.count(c__4351__auto__);
var G__14337 = (0);
seq__14313 = G__14334;
chunk__14315 = G__14335;
count__14316 = G__14336;
i__14317 = G__14337;
continue;
} else {
var vec__14322 = cljs.core.first(seq__14313__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322,(1),null);
var k_14338__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14338__$1);
} else {
e.attr(k_14338__$1,((v === true)?k_14338__$1:v));
}


var G__14339 = cljs.core.next(seq__14313__$1);
var G__14340 = null;
var G__14341 = (0);
var G__14342 = (0);
seq__14313 = G__14339;
chunk__14315 = G__14340;
count__14316 = G__14341;
i__14317 = G__14342;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14308){
var G__14309 = cljs.core.first(seq14308);
var seq14308__$1 = cljs.core.next(seq14308);
var G__14310 = cljs.core.first(seq14308__$1);
var seq14308__$2 = cljs.core.next(seq14308__$1);
var G__14311 = cljs.core.first(seq14308__$2);
var seq14308__$3 = cljs.core.next(seq14308__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14309,G__14310,G__14311,seq14308__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__14348 = arguments.length;
switch (G__14348) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14360 = arguments.length;
var i__4532__auto___14361 = (0);
while(true){
if((i__4532__auto___14361 < len__4531__auto___14360)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14361]));

var G__14362 = (i__4532__auto___14361 + (1));
i__4532__auto___14361 = G__14362;
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
var seq__14349 = cljs.core.seq(kvs);
var chunk__14350 = null;
var count__14351 = (0);
var i__14352 = (0);
while(true){
if((i__14352 < count__14351)){
var vec__14353 = chunk__14350.cljs$core$IIndexed$_nth$arity$2(null,i__14352);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14363 = seq__14349;
var G__14364 = chunk__14350;
var G__14365 = count__14351;
var G__14366 = (i__14352 + (1));
seq__14349 = G__14363;
chunk__14350 = G__14364;
count__14351 = G__14365;
i__14352 = G__14366;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14349);
if(temp__5457__auto__){
var seq__14349__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14349__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14349__$1);
var G__14367 = cljs.core.chunk_rest(seq__14349__$1);
var G__14368 = c__4351__auto__;
var G__14369 = cljs.core.count(c__4351__auto__);
var G__14370 = (0);
seq__14349 = G__14367;
chunk__14350 = G__14368;
count__14351 = G__14369;
i__14352 = G__14370;
continue;
} else {
var vec__14356 = cljs.core.first(seq__14349__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14356,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14371 = cljs.core.next(seq__14349__$1);
var G__14372 = null;
var G__14373 = (0);
var G__14374 = (0);
seq__14349 = G__14371;
chunk__14350 = G__14372;
count__14351 = G__14373;
i__14352 = G__14374;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14344){
var G__14345 = cljs.core.first(seq14344);
var seq14344__$1 = cljs.core.next(seq14344);
var G__14346 = cljs.core.first(seq14344__$1);
var seq14344__$2 = cljs.core.next(seq14344__$1);
var G__14347 = cljs.core.first(seq14344__$2);
var seq14344__$3 = cljs.core.next(seq14344__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14345,G__14346,G__14347,seq14344__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__14376 = arguments.length;
switch (G__14376) {
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
var G__14379 = arguments.length;
switch (G__14379) {
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
var G__14381 = elem;
var G__14382 = cljs.core.cst$kw$attr;
var G__14383 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14381,G__14382,G__14383) : hoplon.core.do_BANG_.call(null,G__14381,G__14382,G__14383));
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
var G__14384__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14384 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14385__i = 0, G__14385__a = new Array(arguments.length -  2);
while (G__14385__i < G__14385__a.length) {G__14385__a[G__14385__i] = arguments[G__14385__i + 2]; ++G__14385__i;}
  args = new cljs.core.IndexedSeq(G__14385__a,0,null);
} 
return G__14384__delegate.call(this,elem,_,args);};
G__14384.cljs$lang$maxFixedArity = 2;
G__14384.cljs$lang$applyTo = (function (arglist__14386){
var elem = cljs.core.first(arglist__14386);
arglist__14386 = cljs.core.next(arglist__14386);
var _ = cljs.core.first(arglist__14386);
var args = cljs.core.rest(arglist__14386);
return G__14384__delegate(elem,_,args);
});
G__14384.cljs$core$IFn$_invoke$arity$variadic = G__14384__delegate;
return G__14384;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14387 = cljs.core.seq(clmap);
var chunk__14388 = null;
var count__14389 = (0);
var i__14390 = (0);
while(true){
if((i__14390 < count__14389)){
var vec__14391 = chunk__14388.cljs$core$IIndexed$_nth$arity$2(null,i__14390);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14397 = seq__14387;
var G__14398 = chunk__14388;
var G__14399 = count__14389;
var G__14400 = (i__14390 + (1));
seq__14387 = G__14397;
chunk__14388 = G__14398;
count__14389 = G__14399;
i__14390 = G__14400;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14387);
if(temp__5457__auto__){
var seq__14387__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14387__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14387__$1);
var G__14401 = cljs.core.chunk_rest(seq__14387__$1);
var G__14402 = c__4351__auto__;
var G__14403 = cljs.core.count(c__4351__auto__);
var G__14404 = (0);
seq__14387 = G__14401;
chunk__14388 = G__14402;
count__14389 = G__14403;
i__14390 = G__14404;
continue;
} else {
var vec__14394 = cljs.core.first(seq__14387__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14394,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14405 = cljs.core.next(seq__14387__$1);
var G__14406 = null;
var G__14407 = (0);
var G__14408 = (0);
seq__14387 = G__14405;
chunk__14388 = G__14406;
count__14389 = G__14407;
i__14390 = G__14408;
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
var G__14409 = elem;
var G__14410 = cljs.core.cst$kw$class;
var G__14411 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14409,G__14410,G__14411) : hoplon.core.do_BANG_.call(null,G__14409,G__14410,G__14411));
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
var G__14412_14418 = elem;
var G__14413_14419 = cljs.core.cst$kw$focus;
var G__14414_14420 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14412_14418,G__14413_14419,G__14414_14420) : hoplon.core.do_BANG_.call(null,G__14412_14418,G__14413_14419,G__14414_14420));

var G__14415 = elem;
var G__14416 = cljs.core.cst$kw$select;
var G__14417 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14415,G__14416,G__14417) : hoplon.core.do_BANG_.call(null,G__14415,G__14416,G__14417));
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
