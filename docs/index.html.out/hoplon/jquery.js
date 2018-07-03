// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__10402 = arguments.length;
switch (G__10402) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___10416 = arguments.length;
var i__4519__auto___10417 = (0);
while(true){
if((i__4519__auto___10417 < len__4518__auto___10416)){
args_arr__4533__auto__.push((arguments[i__4519__auto___10417]));

var G__10418 = (i__4519__auto___10417 + (1));
i__4519__auto___10417 = G__10418;
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
var seq__10403 = cljs.core.seq(kvs);
var chunk__10405 = null;
var count__10406 = (0);
var i__10407 = (0);
while(true){
if((i__10407 < count__10406)){
var vec__10409 = chunk__10405.cljs$core$IIndexed$_nth$arity$2(null,i__10407);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10409,(1),null);
var k_10419__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10419__$1);
} else {
e.attr(k_10419__$1,((v === true)?k_10419__$1:v));
}


var G__10420 = seq__10403;
var G__10421 = chunk__10405;
var G__10422 = count__10406;
var G__10423 = (i__10407 + (1));
seq__10403 = G__10420;
chunk__10405 = G__10421;
count__10406 = G__10422;
i__10407 = G__10423;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10403);
if(temp__5457__auto__){
var seq__10403__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10403__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10403__$1);
var G__10424 = cljs.core.chunk_rest(seq__10403__$1);
var G__10425 = c__4338__auto__;
var G__10426 = cljs.core.count(c__4338__auto__);
var G__10427 = (0);
seq__10403 = G__10424;
chunk__10405 = G__10425;
count__10406 = G__10426;
i__10407 = G__10427;
continue;
} else {
var vec__10412 = cljs.core.first(seq__10403__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10412,(1),null);
var k_10428__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10428__$1);
} else {
e.attr(k_10428__$1,((v === true)?k_10428__$1:v));
}


var G__10429 = cljs.core.next(seq__10403__$1);
var G__10430 = null;
var G__10431 = (0);
var G__10432 = (0);
seq__10403 = G__10429;
chunk__10405 = G__10430;
count__10406 = G__10431;
i__10407 = G__10432;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10398){
var G__10399 = cljs.core.first(seq10398);
var seq10398__$1 = cljs.core.next(seq10398);
var G__10400 = cljs.core.first(seq10398__$1);
var seq10398__$2 = cljs.core.next(seq10398__$1);
var G__10401 = cljs.core.first(seq10398__$2);
var seq10398__$3 = cljs.core.next(seq10398__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10399,G__10400,G__10401,seq10398__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__10438 = arguments.length;
switch (G__10438) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___10450 = arguments.length;
var i__4519__auto___10451 = (0);
while(true){
if((i__4519__auto___10451 < len__4518__auto___10450)){
args_arr__4533__auto__.push((arguments[i__4519__auto___10451]));

var G__10452 = (i__4519__auto___10451 + (1));
i__4519__auto___10451 = G__10452;
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
var seq__10439 = cljs.core.seq(kvs);
var chunk__10440 = null;
var count__10441 = (0);
var i__10442 = (0);
while(true){
if((i__10442 < count__10441)){
var vec__10443 = chunk__10440.cljs$core$IIndexed$_nth$arity$2(null,i__10442);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10443,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10453 = seq__10439;
var G__10454 = chunk__10440;
var G__10455 = count__10441;
var G__10456 = (i__10442 + (1));
seq__10439 = G__10453;
chunk__10440 = G__10454;
count__10441 = G__10455;
i__10442 = G__10456;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10439);
if(temp__5457__auto__){
var seq__10439__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10439__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10439__$1);
var G__10457 = cljs.core.chunk_rest(seq__10439__$1);
var G__10458 = c__4338__auto__;
var G__10459 = cljs.core.count(c__4338__auto__);
var G__10460 = (0);
seq__10439 = G__10457;
chunk__10440 = G__10458;
count__10441 = G__10459;
i__10442 = G__10460;
continue;
} else {
var vec__10446 = cljs.core.first(seq__10439__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10446,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10461 = cljs.core.next(seq__10439__$1);
var G__10462 = null;
var G__10463 = (0);
var G__10464 = (0);
seq__10439 = G__10461;
chunk__10440 = G__10462;
count__10441 = G__10463;
i__10442 = G__10464;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq10434){
var G__10435 = cljs.core.first(seq10434);
var seq10434__$1 = cljs.core.next(seq10434);
var G__10436 = cljs.core.first(seq10434__$1);
var seq10434__$2 = cljs.core.next(seq10434__$1);
var G__10437 = cljs.core.first(seq10434__$2);
var seq10434__$3 = cljs.core.next(seq10434__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10435,G__10436,G__10437,seq10434__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__10466 = arguments.length;
switch (G__10466) {
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
var G__10469 = arguments.length;
switch (G__10469) {
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
var G__10471 = elem;
var G__10472 = cljs.core.cst$kw$attr;
var G__10473 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10471,G__10472,G__10473) : hoplon.core.do_BANG_.call(null,G__10471,G__10472,G__10473));
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
var G__10474__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__10474 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10475__i = 0, G__10475__a = new Array(arguments.length -  2);
while (G__10475__i < G__10475__a.length) {G__10475__a[G__10475__i] = arguments[G__10475__i + 2]; ++G__10475__i;}
  args = new cljs.core.IndexedSeq(G__10475__a,0,null);
} 
return G__10474__delegate.call(this,elem,_,args);};
G__10474.cljs$lang$maxFixedArity = 2;
G__10474.cljs$lang$applyTo = (function (arglist__10476){
var elem = cljs.core.first(arglist__10476);
arglist__10476 = cljs.core.next(arglist__10476);
var _ = cljs.core.first(arglist__10476);
var args = cljs.core.rest(arglist__10476);
return G__10474__delegate(elem,_,args);
});
G__10474.cljs$core$IFn$_invoke$arity$variadic = G__10474__delegate;
return G__10474;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__10477 = cljs.core.seq(clmap);
var chunk__10478 = null;
var count__10479 = (0);
var i__10480 = (0);
while(true){
if((i__10480 < count__10479)){
var vec__10481 = chunk__10478.cljs$core$IIndexed$_nth$arity$2(null,i__10480);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10487 = seq__10477;
var G__10488 = chunk__10478;
var G__10489 = count__10479;
var G__10490 = (i__10480 + (1));
seq__10477 = G__10487;
chunk__10478 = G__10488;
count__10479 = G__10489;
i__10480 = G__10490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10477);
if(temp__5457__auto__){
var seq__10477__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10477__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__10477__$1);
var G__10491 = cljs.core.chunk_rest(seq__10477__$1);
var G__10492 = c__4338__auto__;
var G__10493 = cljs.core.count(c__4338__auto__);
var G__10494 = (0);
seq__10477 = G__10491;
chunk__10478 = G__10492;
count__10479 = G__10493;
i__10480 = G__10494;
continue;
} else {
var vec__10484 = cljs.core.first(seq__10477__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10495 = cljs.core.next(seq__10477__$1);
var G__10496 = null;
var G__10497 = (0);
var G__10498 = (0);
seq__10477 = G__10495;
chunk__10478 = G__10496;
count__10479 = G__10497;
i__10480 = G__10498;
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
var G__10499 = elem;
var G__10500 = cljs.core.cst$kw$class;
var G__10501 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10499,G__10500,G__10501) : hoplon.core.do_BANG_.call(null,G__10499,G__10500,G__10501));
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
var G__10502_10508 = elem;
var G__10503_10509 = cljs.core.cst$kw$focus;
var G__10504_10510 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10502_10508,G__10503_10509,G__10504_10510) : hoplon.core.do_BANG_.call(null,G__10502_10508,G__10503_10509,G__10504_10510));

var G__10505 = elem;
var G__10506 = cljs.core.cst$kw$select;
var G__10507 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10505,G__10506,G__10507) : hoplon.core.do_BANG_.call(null,G__10505,G__10506,G__10507));
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
