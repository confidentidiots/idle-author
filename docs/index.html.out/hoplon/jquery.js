// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__10537 = arguments.length;
switch (G__10537) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10551 = arguments.length;
var i__4532__auto___10552 = (0);
while(true){
if((i__4532__auto___10552 < len__4531__auto___10551)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10552]));

var G__10553 = (i__4532__auto___10552 + (1));
i__4532__auto___10552 = G__10553;
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
var seq__10538 = cljs.core.seq(kvs);
var chunk__10540 = null;
var count__10541 = (0);
var i__10542 = (0);
while(true){
if((i__10542 < count__10541)){
var vec__10544 = chunk__10540.cljs$core$IIndexed$_nth$arity$2(null,i__10542);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(1),null);
var k_10554__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10554__$1);
} else {
e.attr(k_10554__$1,((v === true)?k_10554__$1:v));
}


var G__10555 = seq__10538;
var G__10556 = chunk__10540;
var G__10557 = count__10541;
var G__10558 = (i__10542 + (1));
seq__10538 = G__10555;
chunk__10540 = G__10556;
count__10541 = G__10557;
i__10542 = G__10558;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10538);
if(temp__5457__auto__){
var seq__10538__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10538__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10538__$1);
var G__10559 = cljs.core.chunk_rest(seq__10538__$1);
var G__10560 = c__4351__auto__;
var G__10561 = cljs.core.count(c__4351__auto__);
var G__10562 = (0);
seq__10538 = G__10559;
chunk__10540 = G__10560;
count__10541 = G__10561;
i__10542 = G__10562;
continue;
} else {
var vec__10547 = cljs.core.first(seq__10538__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10547,(1),null);
var k_10563__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10563__$1);
} else {
e.attr(k_10563__$1,((v === true)?k_10563__$1:v));
}


var G__10564 = cljs.core.next(seq__10538__$1);
var G__10565 = null;
var G__10566 = (0);
var G__10567 = (0);
seq__10538 = G__10564;
chunk__10540 = G__10565;
count__10541 = G__10566;
i__10542 = G__10567;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10533){
var G__10534 = cljs.core.first(seq10533);
var seq10533__$1 = cljs.core.next(seq10533);
var G__10535 = cljs.core.first(seq10533__$1);
var seq10533__$2 = cljs.core.next(seq10533__$1);
var G__10536 = cljs.core.first(seq10533__$2);
var seq10533__$3 = cljs.core.next(seq10533__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10534,G__10535,G__10536,seq10533__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__10573 = arguments.length;
switch (G__10573) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10585 = arguments.length;
var i__4532__auto___10586 = (0);
while(true){
if((i__4532__auto___10586 < len__4531__auto___10585)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10586]));

var G__10587 = (i__4532__auto___10586 + (1));
i__4532__auto___10586 = G__10587;
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
var seq__10574 = cljs.core.seq(kvs);
var chunk__10575 = null;
var count__10576 = (0);
var i__10577 = (0);
while(true){
if((i__10577 < count__10576)){
var vec__10578 = chunk__10575.cljs$core$IIndexed$_nth$arity$2(null,i__10577);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10578,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10588 = seq__10574;
var G__10589 = chunk__10575;
var G__10590 = count__10576;
var G__10591 = (i__10577 + (1));
seq__10574 = G__10588;
chunk__10575 = G__10589;
count__10576 = G__10590;
i__10577 = G__10591;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10574);
if(temp__5457__auto__){
var seq__10574__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10574__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10574__$1);
var G__10592 = cljs.core.chunk_rest(seq__10574__$1);
var G__10593 = c__4351__auto__;
var G__10594 = cljs.core.count(c__4351__auto__);
var G__10595 = (0);
seq__10574 = G__10592;
chunk__10575 = G__10593;
count__10576 = G__10594;
i__10577 = G__10595;
continue;
} else {
var vec__10581 = cljs.core.first(seq__10574__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10581,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10596 = cljs.core.next(seq__10574__$1);
var G__10597 = null;
var G__10598 = (0);
var G__10599 = (0);
seq__10574 = G__10596;
chunk__10575 = G__10597;
count__10576 = G__10598;
i__10577 = G__10599;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq10569){
var G__10570 = cljs.core.first(seq10569);
var seq10569__$1 = cljs.core.next(seq10569);
var G__10571 = cljs.core.first(seq10569__$1);
var seq10569__$2 = cljs.core.next(seq10569__$1);
var G__10572 = cljs.core.first(seq10569__$2);
var seq10569__$3 = cljs.core.next(seq10569__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10570,G__10571,G__10572,seq10569__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__10601 = arguments.length;
switch (G__10601) {
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
var G__10604 = arguments.length;
switch (G__10604) {
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
var G__10606 = elem;
var G__10607 = cljs.core.cst$kw$attr;
var G__10608 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10606,G__10607,G__10608) : hoplon.core.do_BANG_.call(null,G__10606,G__10607,G__10608));
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
var G__10609__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__10609 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10610__i = 0, G__10610__a = new Array(arguments.length -  2);
while (G__10610__i < G__10610__a.length) {G__10610__a[G__10610__i] = arguments[G__10610__i + 2]; ++G__10610__i;}
  args = new cljs.core.IndexedSeq(G__10610__a,0,null);
} 
return G__10609__delegate.call(this,elem,_,args);};
G__10609.cljs$lang$maxFixedArity = 2;
G__10609.cljs$lang$applyTo = (function (arglist__10611){
var elem = cljs.core.first(arglist__10611);
arglist__10611 = cljs.core.next(arglist__10611);
var _ = cljs.core.first(arglist__10611);
var args = cljs.core.rest(arglist__10611);
return G__10609__delegate(elem,_,args);
});
G__10609.cljs$core$IFn$_invoke$arity$variadic = G__10609__delegate;
return G__10609;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__10612 = cljs.core.seq(clmap);
var chunk__10613 = null;
var count__10614 = (0);
var i__10615 = (0);
while(true){
if((i__10615 < count__10614)){
var vec__10616 = chunk__10613.cljs$core$IIndexed$_nth$arity$2(null,i__10615);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10616,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10616,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10622 = seq__10612;
var G__10623 = chunk__10613;
var G__10624 = count__10614;
var G__10625 = (i__10615 + (1));
seq__10612 = G__10622;
chunk__10613 = G__10623;
count__10614 = G__10624;
i__10615 = G__10625;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10612);
if(temp__5457__auto__){
var seq__10612__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10612__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10612__$1);
var G__10626 = cljs.core.chunk_rest(seq__10612__$1);
var G__10627 = c__4351__auto__;
var G__10628 = cljs.core.count(c__4351__auto__);
var G__10629 = (0);
seq__10612 = G__10626;
chunk__10613 = G__10627;
count__10614 = G__10628;
i__10615 = G__10629;
continue;
} else {
var vec__10619 = cljs.core.first(seq__10612__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10619,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10619,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10630 = cljs.core.next(seq__10612__$1);
var G__10631 = null;
var G__10632 = (0);
var G__10633 = (0);
seq__10612 = G__10630;
chunk__10613 = G__10631;
count__10614 = G__10632;
i__10615 = G__10633;
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
var G__10634 = elem;
var G__10635 = cljs.core.cst$kw$class;
var G__10636 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10634,G__10635,G__10636) : hoplon.core.do_BANG_.call(null,G__10634,G__10635,G__10636));
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
var G__10637_10643 = elem;
var G__10638_10644 = cljs.core.cst$kw$focus;
var G__10639_10645 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10637_10643,G__10638_10644,G__10639_10645) : hoplon.core.do_BANG_.call(null,G__10637_10643,G__10638_10644,G__10639_10645));

var G__10640 = elem;
var G__10641 = cljs.core.cst$kw$select;
var G__10642 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10640,G__10641,G__10642) : hoplon.core.do_BANG_.call(null,G__10640,G__10641,G__10642));
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
