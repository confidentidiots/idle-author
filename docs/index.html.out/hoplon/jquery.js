// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__14278 = arguments.length;
switch (G__14278) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14292 = arguments.length;
var i__4532__auto___14293 = (0);
while(true){
if((i__4532__auto___14293 < len__4531__auto___14292)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14293]));

var G__14294 = (i__4532__auto___14293 + (1));
i__4532__auto___14293 = G__14294;
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
var seq__14279 = cljs.core.seq(kvs);
var chunk__14281 = null;
var count__14282 = (0);
var i__14283 = (0);
while(true){
if((i__14283 < count__14282)){
var vec__14285 = chunk__14281.cljs$core$IIndexed$_nth$arity$2(null,i__14283);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14285,(1),null);
var k_14295__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14295__$1);
} else {
e.attr(k_14295__$1,((v === true)?k_14295__$1:v));
}


var G__14296 = seq__14279;
var G__14297 = chunk__14281;
var G__14298 = count__14282;
var G__14299 = (i__14283 + (1));
seq__14279 = G__14296;
chunk__14281 = G__14297;
count__14282 = G__14298;
i__14283 = G__14299;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14279);
if(temp__5457__auto__){
var seq__14279__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14279__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14279__$1);
var G__14300 = cljs.core.chunk_rest(seq__14279__$1);
var G__14301 = c__4351__auto__;
var G__14302 = cljs.core.count(c__4351__auto__);
var G__14303 = (0);
seq__14279 = G__14300;
chunk__14281 = G__14301;
count__14282 = G__14302;
i__14283 = G__14303;
continue;
} else {
var vec__14288 = cljs.core.first(seq__14279__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(1),null);
var k_14304__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14304__$1);
} else {
e.attr(k_14304__$1,((v === true)?k_14304__$1:v));
}


var G__14305 = cljs.core.next(seq__14279__$1);
var G__14306 = null;
var G__14307 = (0);
var G__14308 = (0);
seq__14279 = G__14305;
chunk__14281 = G__14306;
count__14282 = G__14307;
i__14283 = G__14308;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14274){
var G__14275 = cljs.core.first(seq14274);
var seq14274__$1 = cljs.core.next(seq14274);
var G__14276 = cljs.core.first(seq14274__$1);
var seq14274__$2 = cljs.core.next(seq14274__$1);
var G__14277 = cljs.core.first(seq14274__$2);
var seq14274__$3 = cljs.core.next(seq14274__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14275,G__14276,G__14277,seq14274__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__14314 = arguments.length;
switch (G__14314) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14315 = cljs.core.seq(kvs);
var chunk__14316 = null;
var count__14317 = (0);
var i__14318 = (0);
while(true){
if((i__14318 < count__14317)){
var vec__14319 = chunk__14316.cljs$core$IIndexed$_nth$arity$2(null,i__14318);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14329 = seq__14315;
var G__14330 = chunk__14316;
var G__14331 = count__14317;
var G__14332 = (i__14318 + (1));
seq__14315 = G__14329;
chunk__14316 = G__14330;
count__14317 = G__14331;
i__14318 = G__14332;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14315);
if(temp__5457__auto__){
var seq__14315__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14315__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14315__$1);
var G__14333 = cljs.core.chunk_rest(seq__14315__$1);
var G__14334 = c__4351__auto__;
var G__14335 = cljs.core.count(c__4351__auto__);
var G__14336 = (0);
seq__14315 = G__14333;
chunk__14316 = G__14334;
count__14317 = G__14335;
i__14318 = G__14336;
continue;
} else {
var vec__14322 = cljs.core.first(seq__14315__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14337 = cljs.core.next(seq__14315__$1);
var G__14338 = null;
var G__14339 = (0);
var G__14340 = (0);
seq__14315 = G__14337;
chunk__14316 = G__14338;
count__14317 = G__14339;
i__14318 = G__14340;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14310){
var G__14311 = cljs.core.first(seq14310);
var seq14310__$1 = cljs.core.next(seq14310);
var G__14312 = cljs.core.first(seq14310__$1);
var seq14310__$2 = cljs.core.next(seq14310__$1);
var G__14313 = cljs.core.first(seq14310__$2);
var seq14310__$3 = cljs.core.next(seq14310__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14311,G__14312,G__14313,seq14310__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__14342 = arguments.length;
switch (G__14342) {
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
var G__14345 = arguments.length;
switch (G__14345) {
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
var G__14347 = elem;
var G__14348 = cljs.core.cst$kw$attr;
var G__14349 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14347,G__14348,G__14349) : hoplon.core.do_BANG_.call(null,G__14347,G__14348,G__14349));
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
var G__14350__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14350 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14351__i = 0, G__14351__a = new Array(arguments.length -  2);
while (G__14351__i < G__14351__a.length) {G__14351__a[G__14351__i] = arguments[G__14351__i + 2]; ++G__14351__i;}
  args = new cljs.core.IndexedSeq(G__14351__a,0,null);
} 
return G__14350__delegate.call(this,elem,_,args);};
G__14350.cljs$lang$maxFixedArity = 2;
G__14350.cljs$lang$applyTo = (function (arglist__14352){
var elem = cljs.core.first(arglist__14352);
arglist__14352 = cljs.core.next(arglist__14352);
var _ = cljs.core.first(arglist__14352);
var args = cljs.core.rest(arglist__14352);
return G__14350__delegate(elem,_,args);
});
G__14350.cljs$core$IFn$_invoke$arity$variadic = G__14350__delegate;
return G__14350;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14353 = cljs.core.seq(clmap);
var chunk__14354 = null;
var count__14355 = (0);
var i__14356 = (0);
while(true){
if((i__14356 < count__14355)){
var vec__14357 = chunk__14354.cljs$core$IIndexed$_nth$arity$2(null,i__14356);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14357,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14357,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14363 = seq__14353;
var G__14364 = chunk__14354;
var G__14365 = count__14355;
var G__14366 = (i__14356 + (1));
seq__14353 = G__14363;
chunk__14354 = G__14364;
count__14355 = G__14365;
i__14356 = G__14366;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14353);
if(temp__5457__auto__){
var seq__14353__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14353__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14353__$1);
var G__14367 = cljs.core.chunk_rest(seq__14353__$1);
var G__14368 = c__4351__auto__;
var G__14369 = cljs.core.count(c__4351__auto__);
var G__14370 = (0);
seq__14353 = G__14367;
chunk__14354 = G__14368;
count__14355 = G__14369;
i__14356 = G__14370;
continue;
} else {
var vec__14360 = cljs.core.first(seq__14353__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14360,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14360,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14371 = cljs.core.next(seq__14353__$1);
var G__14372 = null;
var G__14373 = (0);
var G__14374 = (0);
seq__14353 = G__14371;
chunk__14354 = G__14372;
count__14355 = G__14373;
i__14356 = G__14374;
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
var G__14375 = elem;
var G__14376 = cljs.core.cst$kw$class;
var G__14377 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14375,G__14376,G__14377) : hoplon.core.do_BANG_.call(null,G__14375,G__14376,G__14377));
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
var G__14378_14384 = elem;
var G__14379_14385 = cljs.core.cst$kw$focus;
var G__14380_14386 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14378_14384,G__14379_14385,G__14380_14386) : hoplon.core.do_BANG_.call(null,G__14378_14384,G__14379_14385,G__14380_14386));

var G__14381 = elem;
var G__14382 = cljs.core.cst$kw$select;
var G__14383 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14381,G__14382,G__14383) : hoplon.core.do_BANG_.call(null,G__14381,G__14382,G__14383));
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
