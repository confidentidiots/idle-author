// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__10530 = arguments.length;
switch (G__10530) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10544 = arguments.length;
var i__4532__auto___10545 = (0);
while(true){
if((i__4532__auto___10545 < len__4531__auto___10544)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10545]));

var G__10546 = (i__4532__auto___10545 + (1));
i__4532__auto___10545 = G__10546;
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
var seq__10531 = cljs.core.seq(kvs);
var chunk__10533 = null;
var count__10534 = (0);
var i__10535 = (0);
while(true){
if((i__10535 < count__10534)){
var vec__10537 = chunk__10533.cljs$core$IIndexed$_nth$arity$2(null,i__10535);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10537,(1),null);
var k_10547__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10547__$1);
} else {
e.attr(k_10547__$1,((v === true)?k_10547__$1:v));
}


var G__10548 = seq__10531;
var G__10549 = chunk__10533;
var G__10550 = count__10534;
var G__10551 = (i__10535 + (1));
seq__10531 = G__10548;
chunk__10533 = G__10549;
count__10534 = G__10550;
i__10535 = G__10551;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10531);
if(temp__5457__auto__){
var seq__10531__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10531__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10531__$1);
var G__10552 = cljs.core.chunk_rest(seq__10531__$1);
var G__10553 = c__4351__auto__;
var G__10554 = cljs.core.count(c__4351__auto__);
var G__10555 = (0);
seq__10531 = G__10552;
chunk__10533 = G__10553;
count__10534 = G__10554;
i__10535 = G__10555;
continue;
} else {
var vec__10540 = cljs.core.first(seq__10531__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10540,(1),null);
var k_10556__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_10556__$1);
} else {
e.attr(k_10556__$1,((v === true)?k_10556__$1:v));
}


var G__10557 = cljs.core.next(seq__10531__$1);
var G__10558 = null;
var G__10559 = (0);
var G__10560 = (0);
seq__10531 = G__10557;
chunk__10533 = G__10558;
count__10534 = G__10559;
i__10535 = G__10560;
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
hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10526){
var G__10527 = cljs.core.first(seq10526);
var seq10526__$1 = cljs.core.next(seq10526);
var G__10528 = cljs.core.first(seq10526__$1);
var seq10526__$2 = cljs.core.next(seq10526__$1);
var G__10529 = cljs.core.first(seq10526__$2);
var seq10526__$3 = cljs.core.next(seq10526__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10527,G__10528,G__10529,seq10526__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__10566 = arguments.length;
switch (G__10566) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10578 = arguments.length;
var i__4532__auto___10579 = (0);
while(true){
if((i__4532__auto___10579 < len__4531__auto___10578)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10579]));

var G__10580 = (i__4532__auto___10579 + (1));
i__4532__auto___10579 = G__10580;
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
var seq__10567 = cljs.core.seq(kvs);
var chunk__10568 = null;
var count__10569 = (0);
var i__10570 = (0);
while(true){
if((i__10570 < count__10569)){
var vec__10571 = chunk__10568.cljs$core$IIndexed$_nth$arity$2(null,i__10570);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10571,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10581 = seq__10567;
var G__10582 = chunk__10568;
var G__10583 = count__10569;
var G__10584 = (i__10570 + (1));
seq__10567 = G__10581;
chunk__10568 = G__10582;
count__10569 = G__10583;
i__10570 = G__10584;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10567);
if(temp__5457__auto__){
var seq__10567__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10567__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10567__$1);
var G__10585 = cljs.core.chunk_rest(seq__10567__$1);
var G__10586 = c__4351__auto__;
var G__10587 = cljs.core.count(c__4351__auto__);
var G__10588 = (0);
seq__10567 = G__10585;
chunk__10568 = G__10586;
count__10569 = G__10587;
i__10570 = G__10588;
continue;
} else {
var vec__10574 = cljs.core.first(seq__10567__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10574,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));


var G__10589 = cljs.core.next(seq__10567__$1);
var G__10590 = null;
var G__10591 = (0);
var G__10592 = (0);
seq__10567 = G__10589;
chunk__10568 = G__10590;
count__10569 = G__10591;
i__10570 = G__10592;
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
hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq10562){
var G__10563 = cljs.core.first(seq10562);
var seq10562__$1 = cljs.core.next(seq10562);
var G__10564 = cljs.core.first(seq10562__$1);
var seq10562__$2 = cljs.core.next(seq10562__$1);
var G__10565 = cljs.core.first(seq10562__$2);
var seq10562__$3 = cljs.core.next(seq10562__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10563,G__10564,G__10565,seq10562__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__10594 = arguments.length;
switch (G__10594) {
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
var G__10597 = arguments.length;
switch (G__10597) {
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
var G__10599 = elem;
var G__10600 = cljs.core.cst$kw$attr;
var G__10601 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10599,G__10600,G__10601) : hoplon.core.do_BANG_.call(null,G__10599,G__10600,G__10601));
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
var G__10602__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__10602 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10603__i = 0, G__10603__a = new Array(arguments.length -  2);
while (G__10603__i < G__10603__a.length) {G__10603__a[G__10603__i] = arguments[G__10603__i + 2]; ++G__10603__i;}
  args = new cljs.core.IndexedSeq(G__10603__a,0,null);
} 
return G__10602__delegate.call(this,elem,_,args);};
G__10602.cljs$lang$maxFixedArity = 2;
G__10602.cljs$lang$applyTo = (function (arglist__10604){
var elem = cljs.core.first(arglist__10604);
arglist__10604 = cljs.core.next(arglist__10604);
var _ = cljs.core.first(arglist__10604);
var args = cljs.core.rest(arglist__10604);
return G__10602__delegate(elem,_,args);
});
G__10602.cljs$core$IFn$_invoke$arity$variadic = G__10602__delegate;
return G__10602;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__10605 = cljs.core.seq(clmap);
var chunk__10606 = null;
var count__10607 = (0);
var i__10608 = (0);
while(true){
if((i__10608 < count__10607)){
var vec__10609 = chunk__10606.cljs$core$IIndexed$_nth$arity$2(null,i__10608);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10609,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10609,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10615 = seq__10605;
var G__10616 = chunk__10606;
var G__10617 = count__10607;
var G__10618 = (i__10608 + (1));
seq__10605 = G__10615;
chunk__10606 = G__10616;
count__10607 = G__10617;
i__10608 = G__10618;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10605);
if(temp__5457__auto__){
var seq__10605__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10605__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10605__$1);
var G__10619 = cljs.core.chunk_rest(seq__10605__$1);
var G__10620 = c__4351__auto__;
var G__10621 = cljs.core.count(c__4351__auto__);
var G__10622 = (0);
seq__10605 = G__10619;
chunk__10606 = G__10620;
count__10607 = G__10621;
i__10608 = G__10622;
continue;
} else {
var vec__10612 = cljs.core.first(seq__10605__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10612,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10612,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));


var G__10623 = cljs.core.next(seq__10605__$1);
var G__10624 = null;
var G__10625 = (0);
var G__10626 = (0);
seq__10605 = G__10623;
chunk__10606 = G__10624;
count__10607 = G__10625;
i__10608 = G__10626;
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
var G__10627 = elem;
var G__10628 = cljs.core.cst$kw$class;
var G__10629 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10627,G__10628,G__10629) : hoplon.core.do_BANG_.call(null,G__10627,G__10628,G__10629));
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
var G__10630_10636 = elem;
var G__10631_10637 = cljs.core.cst$kw$focus;
var G__10632_10638 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10630_10636,G__10631_10637,G__10632_10638) : hoplon.core.do_BANG_.call(null,G__10630_10636,G__10631_10637,G__10632_10638));

var G__10633 = elem;
var G__10634 = cljs.core.cst$kw$select;
var G__10635 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10633,G__10634,G__10635) : hoplon.core.do_BANG_.call(null,G__10633,G__10634,G__10635));
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
