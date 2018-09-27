// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__10453 = arguments.length;
switch (G__10453) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10467 = arguments.length;
var i__4532__auto___10468 = (0);
while(true){
if((i__4532__auto___10468 < len__4531__auto___10467)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10468]));

var G__10469 = (i__4532__auto___10468 + (1));
i__4532__auto___10468 = G__10469;
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
var seq__10454 = cljs.core.seq(kvs);
var chunk__10456 = null;
var count__10457 = (0);
var i__10458 = (0);
while(true){
if((i__10458 < count__10457)){
var vec__10460 = chunk__10456.cljs$core$IIndexed$_nth$arity$2(null,i__10458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,(1),null);
var k_10470__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10470__$1);
} else {
e.attr(k_10470__$1,((v === true)?k_10470__$1:v));
}


var G__10471 = seq__10454;
var G__10472 = chunk__10456;
var G__10473 = count__10457;
var G__10474 = (i__10458 + (1));
seq__10454 = G__10471;
chunk__10456 = G__10472;
count__10457 = G__10473;
i__10458 = G__10474;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10454);
if(temp__5457__auto__){
var seq__10454__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10454__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10454__$1);
var G__10475 = cljs.core.chunk_rest(seq__10454__$1);
var G__10476 = c__4351__auto__;
var G__10477 = cljs.core.count(c__4351__auto__);
var G__10478 = (0);
seq__10454 = G__10475;
chunk__10456 = G__10476;
count__10457 = G__10477;
i__10458 = G__10478;
continue;
} else {
var vec__10463 = cljs.core.first(seq__10454__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10463,(1),null);
var k_10479__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10479__$1);
} else {
e.attr(k_10479__$1,((v === true)?k_10479__$1:v));
}


var G__10480 = cljs.core.next(seq__10454__$1);
var G__10481 = null;
var G__10482 = (0);
var G__10483 = (0);
seq__10454 = G__10480;
chunk__10456 = G__10481;
count__10457 = G__10482;
i__10458 = G__10483;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10449){
var G__10450 = cljs.core.first(seq10449);
var seq10449__$1 = cljs.core.next(seq10449);
var G__10451 = cljs.core.first(seq10449__$1);
var seq10449__$2 = cljs.core.next(seq10449__$1);
var G__10452 = cljs.core.first(seq10449__$2);
var seq10449__$3 = cljs.core.next(seq10449__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10450,G__10451,G__10452,seq10449__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__10489 = arguments.length;
switch (G__10489) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10501 = arguments.length;
var i__4532__auto___10502 = (0);
while(true){
if((i__4532__auto___10502 < len__4531__auto___10501)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10502]));

var G__10503 = (i__4532__auto___10502 + (1));
i__4532__auto___10502 = G__10503;
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
var seq__10490 = cljs.core.seq(kvs);
var chunk__10491 = null;
var count__10492 = (0);
var i__10493 = (0);
while(true){
if((i__10493 < count__10492)){
var vec__10494 = chunk__10491.cljs$core$IIndexed$_nth$arity$2(null,i__10493);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10494,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10504 = seq__10490;
var G__10505 = chunk__10491;
var G__10506 = count__10492;
var G__10507 = (i__10493 + (1));
seq__10490 = G__10504;
chunk__10491 = G__10505;
count__10492 = G__10506;
i__10493 = G__10507;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10490);
if(temp__5457__auto__){
var seq__10490__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10490__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10490__$1);
var G__10508 = cljs.core.chunk_rest(seq__10490__$1);
var G__10509 = c__4351__auto__;
var G__10510 = cljs.core.count(c__4351__auto__);
var G__10511 = (0);
seq__10490 = G__10508;
chunk__10491 = G__10509;
count__10492 = G__10510;
i__10493 = G__10511;
continue;
} else {
var vec__10497 = cljs.core.first(seq__10490__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10497,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10512 = cljs.core.next(seq__10490__$1);
var G__10513 = null;
var G__10514 = (0);
var G__10515 = (0);
seq__10490 = G__10512;
chunk__10491 = G__10513;
count__10492 = G__10514;
i__10493 = G__10515;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq10485){
var G__10486 = cljs.core.first(seq10485);
var seq10485__$1 = cljs.core.next(seq10485);
var G__10487 = cljs.core.first(seq10485__$1);
var seq10485__$2 = cljs.core.next(seq10485__$1);
var G__10488 = cljs.core.first(seq10485__$2);
var seq10485__$3 = cljs.core.next(seq10485__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10486,G__10487,G__10488,seq10485__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__10517 = arguments.length;
switch (G__10517) {
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
var G__10520 = arguments.length;
switch (G__10520) {
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
var G__10522 = elem;
var G__10523 = cljs.core.cst$kw$attr;
var G__10524 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10522,G__10523,G__10524) : hoplon.core.do_BANG_.call(null,G__10522,G__10523,G__10524));
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
var G__10525__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__10525 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10526__i = 0, G__10526__a = new Array(arguments.length -  2);
while (G__10526__i < G__10526__a.length) {G__10526__a[G__10526__i] = arguments[G__10526__i + 2]; ++G__10526__i;}
  args = new cljs.core.IndexedSeq(G__10526__a,0,null);
} 
return G__10525__delegate.call(this,elem,_,args);};
G__10525.cljs$lang$maxFixedArity = 2;
G__10525.cljs$lang$applyTo = (function (arglist__10527){
var elem = cljs.core.first(arglist__10527);
arglist__10527 = cljs.core.next(arglist__10527);
var _ = cljs.core.first(arglist__10527);
var args = cljs.core.rest(arglist__10527);
return G__10525__delegate(elem,_,args);
});
G__10525.cljs$core$IFn$_invoke$arity$variadic = G__10525__delegate;
return G__10525;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__10528 = cljs.core.seq(clmap);
var chunk__10529 = null;
var count__10530 = (0);
var i__10531 = (0);
while(true){
if((i__10531 < count__10530)){
var vec__10532 = chunk__10529.cljs$core$IIndexed$_nth$arity$2(null,i__10531);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10532,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10532,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10538 = seq__10528;
var G__10539 = chunk__10529;
var G__10540 = count__10530;
var G__10541 = (i__10531 + (1));
seq__10528 = G__10538;
chunk__10529 = G__10539;
count__10530 = G__10540;
i__10531 = G__10541;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10528);
if(temp__5457__auto__){
var seq__10528__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10528__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10528__$1);
var G__10542 = cljs.core.chunk_rest(seq__10528__$1);
var G__10543 = c__4351__auto__;
var G__10544 = cljs.core.count(c__4351__auto__);
var G__10545 = (0);
seq__10528 = G__10542;
chunk__10529 = G__10543;
count__10530 = G__10544;
i__10531 = G__10545;
continue;
} else {
var vec__10535 = cljs.core.first(seq__10528__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10535,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10535,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10546 = cljs.core.next(seq__10528__$1);
var G__10547 = null;
var G__10548 = (0);
var G__10549 = (0);
seq__10528 = G__10546;
chunk__10529 = G__10547;
count__10530 = G__10548;
i__10531 = G__10549;
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
var G__10550 = elem;
var G__10551 = cljs.core.cst$kw$class;
var G__10552 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10550,G__10551,G__10552) : hoplon.core.do_BANG_.call(null,G__10550,G__10551,G__10552));
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
var G__10553_10559 = elem;
var G__10554_10560 = cljs.core.cst$kw$focus;
var G__10555_10561 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10553_10559,G__10554_10560,G__10555_10561) : hoplon.core.do_BANG_.call(null,G__10553_10559,G__10554_10560,G__10555_10561));

var G__10556 = elem;
var G__10557 = cljs.core.cst$kw$select;
var G__10558 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10556,G__10557,G__10558) : hoplon.core.do_BANG_.call(null,G__10556,G__10557,G__10558));
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
