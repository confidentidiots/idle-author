// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__14262 = arguments.length;
switch (G__14262) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14276 = arguments.length;
var i__4532__auto___14277 = (0);
while(true){
if((i__4532__auto___14277 < len__4531__auto___14276)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14277]));

var G__14278 = (i__4532__auto___14277 + (1));
i__4532__auto___14277 = G__14278;
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
var seq__14263 = cljs.core.seq(kvs);
var chunk__14265 = null;
var count__14266 = (0);
var i__14267 = (0);
while(true){
if((i__14267 < count__14266)){
var vec__14269 = chunk__14265.cljs$core$IIndexed$_nth$arity$2(null,i__14267);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14269,(1),null);
var k_14279__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14279__$1);
} else {
e.attr(k_14279__$1,((v === true)?k_14279__$1:v));
}


var G__14280 = seq__14263;
var G__14281 = chunk__14265;
var G__14282 = count__14266;
var G__14283 = (i__14267 + (1));
seq__14263 = G__14280;
chunk__14265 = G__14281;
count__14266 = G__14282;
i__14267 = G__14283;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14263);
if(temp__5457__auto__){
var seq__14263__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14263__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14263__$1);
var G__14284 = cljs.core.chunk_rest(seq__14263__$1);
var G__14285 = c__4351__auto__;
var G__14286 = cljs.core.count(c__4351__auto__);
var G__14287 = (0);
seq__14263 = G__14284;
chunk__14265 = G__14285;
count__14266 = G__14286;
i__14267 = G__14287;
continue;
} else {
var vec__14272 = cljs.core.first(seq__14263__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14272,(1),null);
var k_14288__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14288__$1);
} else {
e.attr(k_14288__$1,((v === true)?k_14288__$1:v));
}


var G__14289 = cljs.core.next(seq__14263__$1);
var G__14290 = null;
var G__14291 = (0);
var G__14292 = (0);
seq__14263 = G__14289;
chunk__14265 = G__14290;
count__14266 = G__14291;
i__14267 = G__14292;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14258){
var G__14259 = cljs.core.first(seq14258);
var seq14258__$1 = cljs.core.next(seq14258);
var G__14260 = cljs.core.first(seq14258__$1);
var seq14258__$2 = cljs.core.next(seq14258__$1);
var G__14261 = cljs.core.first(seq14258__$2);
var seq14258__$3 = cljs.core.next(seq14258__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14259,G__14260,G__14261,seq14258__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__14298 = arguments.length;
switch (G__14298) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14310 = arguments.length;
var i__4532__auto___14311 = (0);
while(true){
if((i__4532__auto___14311 < len__4531__auto___14310)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14311]));

var G__14312 = (i__4532__auto___14311 + (1));
i__4532__auto___14311 = G__14312;
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
var seq__14299 = cljs.core.seq(kvs);
var chunk__14300 = null;
var count__14301 = (0);
var i__14302 = (0);
while(true){
if((i__14302 < count__14301)){
var vec__14303 = chunk__14300.cljs$core$IIndexed$_nth$arity$2(null,i__14302);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14313 = seq__14299;
var G__14314 = chunk__14300;
var G__14315 = count__14301;
var G__14316 = (i__14302 + (1));
seq__14299 = G__14313;
chunk__14300 = G__14314;
count__14301 = G__14315;
i__14302 = G__14316;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14299);
if(temp__5457__auto__){
var seq__14299__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14299__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14299__$1);
var G__14317 = cljs.core.chunk_rest(seq__14299__$1);
var G__14318 = c__4351__auto__;
var G__14319 = cljs.core.count(c__4351__auto__);
var G__14320 = (0);
seq__14299 = G__14317;
chunk__14300 = G__14318;
count__14301 = G__14319;
i__14302 = G__14320;
continue;
} else {
var vec__14306 = cljs.core.first(seq__14299__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14306,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__14321 = cljs.core.next(seq__14299__$1);
var G__14322 = null;
var G__14323 = (0);
var G__14324 = (0);
seq__14299 = G__14321;
chunk__14300 = G__14322;
count__14301 = G__14323;
i__14302 = G__14324;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14294){
var G__14295 = cljs.core.first(seq14294);
var seq14294__$1 = cljs.core.next(seq14294);
var G__14296 = cljs.core.first(seq14294__$1);
var seq14294__$2 = cljs.core.next(seq14294__$1);
var G__14297 = cljs.core.first(seq14294__$2);
var seq14294__$3 = cljs.core.next(seq14294__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14295,G__14296,G__14297,seq14294__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__14326 = arguments.length;
switch (G__14326) {
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
var G__14329 = arguments.length;
switch (G__14329) {
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
var G__14331 = elem;
var G__14332 = cljs.core.cst$kw$attr;
var G__14333 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14331,G__14332,G__14333) : hoplon.core.do_BANG_.call(null,G__14331,G__14332,G__14333));
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
var G__14334__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14334 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14335__i = 0, G__14335__a = new Array(arguments.length -  2);
while (G__14335__i < G__14335__a.length) {G__14335__a[G__14335__i] = arguments[G__14335__i + 2]; ++G__14335__i;}
  args = new cljs.core.IndexedSeq(G__14335__a,0,null);
} 
return G__14334__delegate.call(this,elem,_,args);};
G__14334.cljs$lang$maxFixedArity = 2;
G__14334.cljs$lang$applyTo = (function (arglist__14336){
var elem = cljs.core.first(arglist__14336);
arglist__14336 = cljs.core.next(arglist__14336);
var _ = cljs.core.first(arglist__14336);
var args = cljs.core.rest(arglist__14336);
return G__14334__delegate(elem,_,args);
});
G__14334.cljs$core$IFn$_invoke$arity$variadic = G__14334__delegate;
return G__14334;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14337 = cljs.core.seq(clmap);
var chunk__14338 = null;
var count__14339 = (0);
var i__14340 = (0);
while(true){
if((i__14340 < count__14339)){
var vec__14341 = chunk__14338.cljs$core$IIndexed$_nth$arity$2(null,i__14340);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14347 = seq__14337;
var G__14348 = chunk__14338;
var G__14349 = count__14339;
var G__14350 = (i__14340 + (1));
seq__14337 = G__14347;
chunk__14338 = G__14348;
count__14339 = G__14349;
i__14340 = G__14350;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14337);
if(temp__5457__auto__){
var seq__14337__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14337__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14337__$1);
var G__14351 = cljs.core.chunk_rest(seq__14337__$1);
var G__14352 = c__4351__auto__;
var G__14353 = cljs.core.count(c__4351__auto__);
var G__14354 = (0);
seq__14337 = G__14351;
chunk__14338 = G__14352;
count__14339 = G__14353;
i__14340 = G__14354;
continue;
} else {
var vec__14344 = cljs.core.first(seq__14337__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14344,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14344,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__14355 = cljs.core.next(seq__14337__$1);
var G__14356 = null;
var G__14357 = (0);
var G__14358 = (0);
seq__14337 = G__14355;
chunk__14338 = G__14356;
count__14339 = G__14357;
i__14340 = G__14358;
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
var G__14359 = elem;
var G__14360 = cljs.core.cst$kw$class;
var G__14361 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14359,G__14360,G__14361) : hoplon.core.do_BANG_.call(null,G__14359,G__14360,G__14361));
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
var G__14362_14368 = elem;
var G__14363_14369 = cljs.core.cst$kw$focus;
var G__14364_14370 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14362_14368,G__14363_14369,G__14364_14370) : hoplon.core.do_BANG_.call(null,G__14362_14368,G__14363_14369,G__14364_14370));

var G__14365 = elem;
var G__14366 = cljs.core.cst$kw$select;
var G__14367 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14365,G__14366,G__14367) : hoplon.core.do_BANG_.call(null,G__14365,G__14366,G__14367));
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
