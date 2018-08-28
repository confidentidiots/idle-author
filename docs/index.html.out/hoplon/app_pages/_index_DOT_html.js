// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.engine');
goog.require('clicker.util');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('dao.dao');
goog.require('ui.buttons');
goog.require('ui.levels');
goog.require('ui.research');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(clicker.util.default_state);
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__14759 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14755,G__14754){
var G__14760 = G__14755;
var G__14761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$add_DASH_every], null);
var G__14762 = (0);
return (G__14754.cljs$core$IFn$_invoke$arity$3 ? G__14754.cljs$core$IFn$_invoke$arity$3(G__14760,G__14761,G__14762) : G__14754.call(null,G__14760,G__14761,G__14762));
}));
return (fexpr__14759.cljs$core$IFn$_invoke$arity$2 ? fexpr__14759.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14759.call(null,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.game_loop = (function hoplon$app_pages$_index_DOT_html$game_loop(){
clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,(function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
})], 0));

return dao.dao.put_state(cljs.core.deref(hoplon.app_pages._index_DOT_html.state),(function (){
return cljs.core.List.EMPTY;
}));
});
javelin.core.dosync_STAR_((function (){
dao.dao.init_db();

setTimeout((function (){
return dao.dao.get_state("init",(function (p1__14763_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.state,p1__14763_SHARP_);
}));
}),(500));

return setInterval(hoplon.app_pages._index_DOT_html.game_loop,(1000));
}));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(true);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__14772 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14764,G__14766,G__14765){
var G__14773 = "%.0f";
var G__14774 = (function (){var G__14775 = G__14766;
var G__14776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null);
var G__14777 = (0);
return (G__14765.cljs$core$IFn$_invoke$arity$3 ? G__14765.cljs$core$IFn$_invoke$arity$3(G__14775,G__14776,G__14777) : G__14765.call(null,G__14775,G__14776,G__14777));
})();
return (G__14764.cljs$core$IFn$_invoke$arity$2 ? G__14764.cljs$core$IFn$_invoke$arity$2(G__14773,G__14774) : G__14764.call(null,G__14773,G__14774));
}));
return (fexpr__14772.cljs$core$IFn$_invoke$arity$3 ? fexpr__14772.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14772.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__14780 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14778,G__14779){
return (G__14778.cljs$core$IFn$_invoke$arity$2 ? G__14778.cljs$core$IFn$_invoke$arity$2("%.2f",G__14779) : G__14778.call(null,"%.2f",G__14779));
}));
return (fexpr__14780.cljs$core$IFn$_invoke$arity$2 ? fexpr__14780.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__14780.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__14789 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14781,G__14783,G__14782){
var G__14790 = "%.2f";
var G__14791 = (function (){var G__14792 = G__14783;
var G__14793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null);
var G__14794 = (0);
return (G__14782.cljs$core$IFn$_invoke$arity$3 ? G__14782.cljs$core$IFn$_invoke$arity$3(G__14792,G__14793,G__14794) : G__14782.call(null,G__14792,G__14793,G__14794));
})();
return (G__14781.cljs$core$IFn$_invoke$arity$2 ? G__14781.cljs$core$IFn$_invoke$arity$2(G__14790,G__14791) : G__14781.call(null,G__14790,G__14791));
}));
return (fexpr__14789.cljs$core$IFn$_invoke$arity$3 ? fexpr__14789.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14789.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__14800 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14797,G__14799,G__14798){
var sb__4462__auto__ = (new G__14797());
var _STAR_print_newline_STAR_14795_14801 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14796_14802 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14795_14801,_STAR_print_fn_STAR_14796_14802,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_14795_14801,_STAR_print_fn_STAR_14796_14802,sb__4462__auto__))
;

try{(G__14798.cljs$core$IFn$_invoke$arity$1 ? G__14798.cljs$core$IFn$_invoke$arity$1(G__14799) : G__14798.call(null,G__14799));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14796_14802;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14795_14801;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
}));
return (fexpr__14800.cljs$core$IFn$_invoke$arity$3 ? fexpr__14800.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__14800.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
hoplon.app_pages._index_DOT_html.has_started = (function (){var fexpr__14805 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14803,G__14804){
return (G__14803.cljs$core$IFn$_invoke$arity$1 ? G__14803.cljs$core$IFn$_invoke$arity$1(G__14804) : G__14803.call(null,G__14804));
}));
return (fexpr__14805.cljs$core$IFn$_invoke$arity$2 ? fexpr__14805.cljs$core$IFn$_invoke$arity$2(clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state) : fexpr__14805.call(null,clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14806 = (function (){var G__14807 = cljs.core.cst$kw$href;
var G__14808 = "app.css";
var G__14809 = cljs.core.cst$kw$rel;
var G__14810 = "stylesheet";
var G__14811 = cljs.core.cst$kw$type;
var G__14812 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14807,G__14808,G__14809,G__14810,G__14811,G__14812) : hoplon.core.link.call(null,G__14807,G__14808,G__14809,G__14810,G__14811,G__14812));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__14806) : hoplon.core.head.call(null,G__14806));
})(),(function (){var G__14813 = (function (){var con__13877__auto__ = (new cljs.core.Delay((function (){
var G__14815 = cljs.core.cst$kw$class;
var G__14816 = "start";
var G__14817 = (function (){var G__14820 = cljs.core.cst$kw$class;
var G__14821 = "stats-and-research";
var G__14822 = (function (){var G__14824 = cljs.core.cst$kw$class;
var G__14825 = "stats";
var G__14826 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__14827 = (function (){var G__14830 = cljs.core.cst$kw$click;
var G__14831 = ((function (G__14830,G__14824,G__14825,G__14826,G__14820,G__14821,G__14815,G__14816){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__14830,G__14824,G__14825,G__14826,G__14820,G__14821,G__14815,G__14816))
;
var G__14832 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14830,G__14831,G__14832) : hoplon.core.button.call(null,G__14830,G__14831,G__14832));
})();
var G__14828 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__14829 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14824,G__14825,G__14826,G__14827,G__14828,G__14829) : hoplon.core.div.call(null,G__14824,G__14825,G__14826,G__14827,G__14828,G__14829));
})();
var G__14823 = ui.research.item_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state,cljs.core.cst$kw$groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$product_DASH_level,cljs.core.cst$kw$tool_DASH_level], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14820,G__14821,G__14822,G__14823) : hoplon.core.div.call(null,G__14820,G__14821,G__14822,G__14823));
})();
var G__14818 = (function (){var con__13877__auto__ = (new cljs.core.Delay(((function (G__14815,G__14816,G__14817){
return (function (){
var G__14833 = cljs.core.cst$kw$class;
var G__14834 = "debug";
var G__14835 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Words") : hoplon.core.span.call(null,"Words"));
var G__14836 = (function (){var iter__4324__auto__ = ((function (G__14833,G__14834,G__14835,G__14815,G__14816,G__14817){
return (function hoplon$app_pages$_index_DOT_html$iter__14839(s__14840){
return (new cljs.core.LazySeq(null,((function (G__14833,G__14834,G__14835,G__14815,G__14816,G__14817){
return (function (){
var s__14840__$1 = s__14840;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14840__$1);
if(temp__5457__auto__){
var s__14840__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14840__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14840__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14842 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14841 = (0);
while(true){
if((i__14841 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14841);
cljs.core.chunk_append(b__14842,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14843 = cljs.core.cst$kw$click;
var G__14844 = ((function (i__14841,G__14843,n,level,c__4322__auto__,size__4323__auto__,b__14842,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__14841,G__14843,n,level,c__4322__auto__,size__4323__auto__,b__14842,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817){
return (function (m){
return (m + n);
});})(i__14841,G__14843,n,level,c__4322__auto__,size__4323__auto__,b__14842,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817))
], 0));
});})(i__14841,G__14843,n,level,c__4322__auto__,size__4323__auto__,b__14842,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817))
;
var G__14845 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14843,G__14844,G__14845) : hoplon.core.button.call(null,G__14843,G__14844,G__14845));
})());

var G__14874 = (i__14841 + (1));
i__14841 = G__14874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14842),hoplon$app_pages$_index_DOT_html$iter__14839(cljs.core.chunk_rest(s__14840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14842),null);
}
} else {
var level = cljs.core.first(s__14840__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14846 = cljs.core.cst$kw$click;
var G__14847 = ((function (G__14846,n,level,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__14846,n,level,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817){
return (function (m){
return (m + n);
});})(G__14846,n,level,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817))
], 0));
});})(G__14846,n,level,s__14840__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14815,G__14816,G__14817))
;
var G__14848 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14846,G__14847,G__14848) : hoplon.core.button.call(null,G__14846,G__14847,G__14848));
})(),hoplon$app_pages$_index_DOT_html$iter__14839(cljs.core.rest(s__14840__$2)));
}
} else {
return null;
}
break;
}
});})(G__14833,G__14834,G__14835,G__14815,G__14816,G__14817))
,null,null));
});})(G__14833,G__14834,G__14835,G__14815,G__14816,G__14817))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
var G__14837 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Money") : hoplon.core.span.call(null,"Money"));
var G__14838 = (function (){var iter__4324__auto__ = ((function (G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817){
return (function hoplon$app_pages$_index_DOT_html$iter__14849(s__14850){
return (new cljs.core.LazySeq(null,((function (G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817){
return (function (){
var s__14850__$1 = s__14850;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14850__$1);
if(temp__5457__auto__){
var s__14850__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14850__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14850__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14852 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14851 = (0);
while(true){
if((i__14851 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14851);
cljs.core.chunk_append(b__14852,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14853 = cljs.core.cst$kw$click;
var G__14854 = ((function (i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817){
return (function (m){
return (m + n);
});})(i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817))
,(0)));
});})(i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817))
;
var G__14855 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14853,G__14854,G__14855) : hoplon.core.button.call(null,G__14853,G__14854,G__14855));
})());

var G__14875 = (i__14851 + (1));
i__14851 = G__14875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14852),hoplon$app_pages$_index_DOT_html$iter__14849(cljs.core.chunk_rest(s__14850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14852),null);
}
} else {
var level = cljs.core.first(s__14850__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14856 = cljs.core.cst$kw$click;
var G__14857 = ((function (G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817){
return (function (m){
return (m + n);
});})(G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817))
,(0)));
});})(G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817))
;
var G__14858 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14856,G__14857,G__14858) : hoplon.core.button.call(null,G__14856,G__14857,G__14858));
})(),hoplon$app_pages$_index_DOT_html$iter__14849(cljs.core.rest(s__14850__$2)));
}
} else {
return null;
}
break;
}
});})(G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817))
,null,null));
});})(G__14833,G__14834,G__14835,G__14836,G__14837,G__14815,G__14816,G__14817))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14833,G__14834,G__14835,G__14836,G__14837,G__14838) : hoplon.core.div.call(null,G__14833,G__14834,G__14835,G__14836,G__14837,G__14838));
});})(G__14815,G__14816,G__14817))
,null));
var alt__13878__auto__ = (new cljs.core.Delay(((function (con__13877__auto__,G__14815,G__14816,G__14817){
return (function (){
return null;
});})(con__13877__auto__,G__14815,G__14816,G__14817))
,null));
var tpl__13879__auto__ = ((function (con__13877__auto__,alt__13878__auto__,G__14815,G__14816,G__14817){
return (function (p__13880__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13880__auto__)?con__13877__auto__:alt__13878__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13877__auto__,alt__13878__auto__,G__14815,G__14816,G__14817))
;
var fexpr__14859 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13879__auto__);
return (fexpr__14859.cljs$core$IFn$_invoke$arity$1 ? fexpr__14859.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14859.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__14819 = (function (){var G__14860 = cljs.core.cst$kw$class;
var G__14861 = "stuff";
var G__14862 = ui.buttons.tool_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
var G__14863 = ui.buttons.product_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14860,G__14861,G__14862,G__14863) : hoplon.core.div.call(null,G__14860,G__14861,G__14862,G__14863));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14815,G__14816,G__14817,G__14818,G__14819) : hoplon.core.div.call(null,G__14815,G__14816,G__14817,G__14818,G__14819));
}),null));
var alt__13878__auto__ = (new cljs.core.Delay(((function (con__13877__auto__){
return (function (){
var G__14864 = (function (){var G__14865 = "Start";
var G__14866 = cljs.core.cst$kw$click;
var G__14867 = ((function (G__14865,G__14866,con__13877__auto__){
return (function (){
return clicker.engine.tap(hoplon.app_pages._index_DOT_html.state,cljs.core.cst$kw$genesis);
});})(G__14865,G__14866,con__13877__auto__))
;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14865,G__14866,G__14867) : hoplon.core.button.call(null,G__14865,G__14866,G__14867));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__14864) : hoplon.core.div.call(null,G__14864));
});})(con__13877__auto__))
,null));
var tpl__13879__auto__ = ((function (con__13877__auto__,alt__13878__auto__){
return (function (p__13880__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13880__auto__)?con__13877__auto__:alt__13878__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13877__auto__,alt__13878__auto__))
;
var fexpr__14868 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13879__auto__);
return (fexpr__14868.cljs$core$IFn$_invoke$arity$1 ? fexpr__14868.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.has_started) : fexpr__14868.call(null,hoplon.app_pages._index_DOT_html.has_started));
})();
var G__14814 = (function (){var con__13877__auto__ = (new cljs.core.Delay(((function (G__14813){
return (function (){
var G__14869 = cljs.core.cst$kw$class;
var G__14870 = "debug";
var G__14871 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__14872 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14869,G__14870,G__14871,G__14872) : hoplon.core.div.call(null,G__14869,G__14870,G__14871,G__14872));
});})(G__14813))
,null));
var alt__13878__auto__ = (new cljs.core.Delay(((function (con__13877__auto__,G__14813){
return (function (){
return null;
});})(con__13877__auto__,G__14813))
,null));
var tpl__13879__auto__ = ((function (con__13877__auto__,alt__13878__auto__,G__14813){
return (function (p__13880__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13880__auto__)?con__13877__auto__:alt__13878__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13877__auto__,alt__13878__auto__,G__14813))
;
var fexpr__14873 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13879__auto__);
return (fexpr__14873.cljs$core$IFn$_invoke$arity$1 ? fexpr__14873.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14873.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14813,G__14814) : hoplon.core.body.call(null,G__14813,G__14814));
})()], 0));
