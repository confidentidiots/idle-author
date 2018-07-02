// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__10363 = arguments.length;
switch (G__10363) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___10377 = arguments.length;
var i__4519__auto___10378 = (0);
while(true){
if((i__4519__auto___10378 < len__4518__auto___10377)){
args_arr__4533__auto__.push((arguments[i__4519__auto___10378]));

var G__10379 = (i__4519__auto___10378 + (1));
i__4519__auto___10378 = G__10379;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4534__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__10364 = cljs.core.seq(kvs);
var chunk__10366 = null;
var count__10367 = (0);
var i__10368 = (0);
while(true){
if((i__10368 < count__10367)){
var vec__10370 = chunk__10366.cljs$core$IIndexed$_nth$arity$2(null,i__10368);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10370,(1),null);
var k_10380__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10380__$1);
} else {
e.attr(k_10380__$1,((v === true)?k_10380__$1:v));
}


var G__10381 = seq__10364;
var G__10382 = chunk__10366;
var G__10383 = count__10367;
var G__10384 = (i__10368 + (1));
seq__10364 = G__10381;
chunk__10366 = G__10382;
count__10367 = G__10383;
i__10368 = G__10384;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10364);
if(temp__5457__auto__){
var seq__10364__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10364__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10364__$1);
var G__10385 = cljs.core.chunk_rest(seq__10364__$1);
var G__10386 = c__4338__auto__;
var G__10387 = cljs.core.count(c__4338__auto__);
var G__10388 = (0);
seq__10364 = G__10385;
chunk__10366 = G__10386;
count__10367 = G__10387;
i__10368 = G__10388;
continue;
} else {
var vec__10373 = cljs.core.first(seq__10364__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10373,(1),null);
var k_10389__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10389__$1);
} else {
e.attr(k_10389__$1,((v === true)?k_10389__$1:v));
}


var G__10390 = cljs.core.next(seq__10364__$1);
var G__10391 = null;
var G__10392 = (0);
var G__10393 = (0);
seq__10364 = G__10390;
chunk__10366 = G__10391;
count__10367 = G__10392;
i__10368 = G__10393;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10359){
var G__10360 = cljs.core.first(seq10359);
var seq10359__$1 = cljs.core.next(seq10359);
var G__10361 = cljs.core.first(seq10359__$1);
var seq10359__$2 = cljs.core.next(seq10359__$1);
var G__10362 = cljs.core.first(seq10359__$2);
var seq10359__$3 = cljs.core.next(seq10359__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10360,G__10361,G__10362,seq10359__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__10399 = arguments.length;
switch (G__10399) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___10411 = arguments.length;
var i__4519__auto___10412 = (0);
while(true){
if((i__4519__auto___10412 < len__4518__auto___10411)){
args_arr__4533__auto__.push((arguments[i__4519__auto___10412]));

var G__10413 = (i__4519__auto___10412 + (1));
i__4519__auto___10412 = G__10413;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4534__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__10400 = cljs.core.seq(kvs);
var chunk__10401 = null;
var count__10402 = (0);
var i__10403 = (0);
while(true){
if((i__10403 < count__10402)){
var vec__10404 = chunk__10401.cljs$core$IIndexed$_nth$arity$2(null,i__10403);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10404,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10414 = seq__10400;
var G__10415 = chunk__10401;
var G__10416 = count__10402;
var G__10417 = (i__10403 + (1));
seq__10400 = G__10414;
chunk__10401 = G__10415;
count__10402 = G__10416;
i__10403 = G__10417;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10400);
if(temp__5457__auto__){
var seq__10400__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10400__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10400__$1);
var G__10418 = cljs.core.chunk_rest(seq__10400__$1);
var G__10419 = c__4338__auto__;
var G__10420 = cljs.core.count(c__4338__auto__);
var G__10421 = (0);
seq__10400 = G__10418;
chunk__10401 = G__10419;
count__10402 = G__10420;
i__10403 = G__10421;
continue;
} else {
var vec__10407 = cljs.core.first(seq__10400__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10407,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10422 = cljs.core.next(seq__10400__$1);
var G__10423 = null;
var G__10424 = (0);
var G__10425 = (0);
seq__10400 = G__10422;
chunk__10401 = G__10423;
count__10402 = G__10424;
i__10403 = G__10425;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq10395){
var G__10396 = cljs.core.first(seq10395);
var seq10395__$1 = cljs.core.next(seq10395);
var G__10397 = cljs.core.first(seq10395__$1);
var seq10395__$2 = cljs.core.next(seq10395__$1);
var G__10398 = cljs.core.first(seq10395__$2);
var seq10395__$3 = cljs.core.next(seq10395__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10396,G__10397,G__10398,seq10395__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__10427 = arguments.length;
switch (G__10427) {
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
var G__10430 = arguments.length;
switch (G__10430) {
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
var G__10432 = elem;
var G__10433 = cljs.core.cst$kw$attr;
var G__10434 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10432,G__10433,G__10434) : hoplon.core.do_BANG_.call(null,G__10432,G__10433,G__10434));
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
var G__10435__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__10435 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10436__i = 0, G__10436__a = new Array(arguments.length -  2);
while (G__10436__i < G__10436__a.length) {G__10436__a[G__10436__i] = arguments[G__10436__i + 2]; ++G__10436__i;}
  args = new cljs.core.IndexedSeq(G__10436__a,0,null);
} 
return G__10435__delegate.call(this,elem,_,args);};
G__10435.cljs$lang$maxFixedArity = 2;
G__10435.cljs$lang$applyTo = (function (arglist__10437){
var elem = cljs.core.first(arglist__10437);
arglist__10437 = cljs.core.next(arglist__10437);
var _ = cljs.core.first(arglist__10437);
var args = cljs.core.rest(arglist__10437);
return G__10435__delegate(elem,_,args);
});
G__10435.cljs$core$IFn$_invoke$arity$variadic = G__10435__delegate;
return G__10435;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__10438 = cljs.core.seq(clmap);
var chunk__10439 = null;
var count__10440 = (0);
var i__10441 = (0);
while(true){
if((i__10441 < count__10440)){
var vec__10442 = chunk__10439.cljs$core$IIndexed$_nth$arity$2(null,i__10441);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10442,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10442,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10448 = seq__10438;
var G__10449 = chunk__10439;
var G__10450 = count__10440;
var G__10451 = (i__10441 + (1));
seq__10438 = G__10448;
chunk__10439 = G__10449;
count__10440 = G__10450;
i__10441 = G__10451;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10438);
if(temp__5457__auto__){
var seq__10438__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10438__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10438__$1);
var G__10452 = cljs.core.chunk_rest(seq__10438__$1);
var G__10453 = c__4338__auto__;
var G__10454 = cljs.core.count(c__4338__auto__);
var G__10455 = (0);
seq__10438 = G__10452;
chunk__10439 = G__10453;
count__10440 = G__10454;
i__10441 = G__10455;
continue;
} else {
var vec__10445 = cljs.core.first(seq__10438__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10445,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10445,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10456 = cljs.core.next(seq__10438__$1);
var G__10457 = null;
var G__10458 = (0);
var G__10459 = (0);
seq__10438 = G__10456;
chunk__10439 = G__10457;
count__10440 = G__10458;
i__10441 = G__10459;
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
var G__10460 = elem;
var G__10461 = cljs.core.cst$kw$class;
var G__10462 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10460,G__10461,G__10462) : hoplon.core.do_BANG_.call(null,G__10460,G__10461,G__10462));
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
var G__10463_10469 = elem;
var G__10464_10470 = cljs.core.cst$kw$focus;
var G__10465_10471 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10463_10469,G__10464_10470,G__10465_10471) : hoplon.core.do_BANG_.call(null,G__10463_10469,G__10464_10470,G__10465_10471));

var G__10466 = elem;
var G__10467 = cljs.core.cst$kw$select;
var G__10468 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10466,G__10467,G__10468) : hoplon.core.do_BANG_.call(null,G__10466,G__10467,G__10468));
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
