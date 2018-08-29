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
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__14762 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14758,G__14757){
var G__14763 = G__14758;
var G__14764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$add_DASH_every], null);
var G__14765 = (0);
return (G__14757.cljs$core$IFn$_invoke$arity$3 ? G__14757.cljs$core$IFn$_invoke$arity$3(G__14763,G__14764,G__14765) : G__14757.call(null,G__14763,G__14764,G__14765));
}));
return (fexpr__14762.cljs$core$IFn$_invoke$arity$2 ? fexpr__14762.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14762.call(null,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
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
return dao.dao.get_state("init",(function (p1__14766_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.state,p1__14766_SHARP_);
}));
}),(500));

return setInterval(hoplon.app_pages._index_DOT_html.game_loop,(1000));
}));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__14775 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14767,G__14769,G__14768){
var G__14776 = "%.0f";
var G__14777 = (function (){var G__14778 = G__14769;
var G__14779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null);
var G__14780 = (0);
return (G__14768.cljs$core$IFn$_invoke$arity$3 ? G__14768.cljs$core$IFn$_invoke$arity$3(G__14778,G__14779,G__14780) : G__14768.call(null,G__14778,G__14779,G__14780));
})();
return (G__14767.cljs$core$IFn$_invoke$arity$2 ? G__14767.cljs$core$IFn$_invoke$arity$2(G__14776,G__14777) : G__14767.call(null,G__14776,G__14777));
}));
return (fexpr__14775.cljs$core$IFn$_invoke$arity$3 ? fexpr__14775.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14775.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__14783 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14781,G__14782){
return (G__14781.cljs$core$IFn$_invoke$arity$2 ? G__14781.cljs$core$IFn$_invoke$arity$2("%.2f",G__14782) : G__14781.call(null,"%.2f",G__14782));
}));
return (fexpr__14783.cljs$core$IFn$_invoke$arity$2 ? fexpr__14783.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__14783.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__14792 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14784,G__14786,G__14785){
var G__14793 = "%.2f";
var G__14794 = (function (){var G__14795 = G__14786;
var G__14796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null);
var G__14797 = (0);
return (G__14785.cljs$core$IFn$_invoke$arity$3 ? G__14785.cljs$core$IFn$_invoke$arity$3(G__14795,G__14796,G__14797) : G__14785.call(null,G__14795,G__14796,G__14797));
})();
return (G__14784.cljs$core$IFn$_invoke$arity$2 ? G__14784.cljs$core$IFn$_invoke$arity$2(G__14793,G__14794) : G__14784.call(null,G__14793,G__14794));
}));
return (fexpr__14792.cljs$core$IFn$_invoke$arity$3 ? fexpr__14792.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14792.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__14803 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14800,G__14802,G__14801){
var sb__4462__auto__ = (new G__14800());
var _STAR_print_newline_STAR_14798_14804 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14799_14805 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14798_14804,_STAR_print_fn_STAR_14799_14805,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_14798_14804,_STAR_print_fn_STAR_14799_14805,sb__4462__auto__))
;

try{(G__14801.cljs$core$IFn$_invoke$arity$1 ? G__14801.cljs$core$IFn$_invoke$arity$1(G__14802) : G__14801.call(null,G__14802));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14799_14805;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14798_14804;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
}));
return (fexpr__14803.cljs$core$IFn$_invoke$arity$3 ? fexpr__14803.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__14803.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
hoplon.app_pages._index_DOT_html.has_started = (function (){var fexpr__14808 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14806,G__14807){
return (G__14806.cljs$core$IFn$_invoke$arity$1 ? G__14806.cljs$core$IFn$_invoke$arity$1(G__14807) : G__14806.call(null,G__14807));
}));
return (fexpr__14808.cljs$core$IFn$_invoke$arity$2 ? fexpr__14808.cljs$core$IFn$_invoke$arity$2(clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state) : fexpr__14808.call(null,clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14809 = (function (){var G__14811 = cljs.core.cst$kw$href;
var G__14812 = "app.css";
var G__14813 = cljs.core.cst$kw$rel;
var G__14814 = "stylesheet";
var G__14815 = cljs.core.cst$kw$type;
var G__14816 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14811,G__14812,G__14813,G__14814,G__14815,G__14816) : hoplon.core.link.call(null,G__14811,G__14812,G__14813,G__14814,G__14815,G__14816));
})();
var G__14810 = (function (){var G__14817 = cljs.core.cst$kw$href;
var G__14818 = "research.css";
var G__14819 = cljs.core.cst$kw$rel;
var G__14820 = "stylesheet";
var G__14821 = cljs.core.cst$kw$type;
var G__14822 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14817,G__14818,G__14819,G__14820,G__14821,G__14822) : hoplon.core.link.call(null,G__14817,G__14818,G__14819,G__14820,G__14821,G__14822));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__14809,G__14810) : hoplon.core.head.call(null,G__14809,G__14810));
})(),(function (){var G__14823 = (function (){var con__13827__auto__ = (new cljs.core.Delay((function (){
var G__14825 = cljs.core.cst$kw$class;
var G__14826 = "start";
var G__14827 = (function (){var G__14830 = cljs.core.cst$kw$class;
var G__14831 = "stats-and-research";
var G__14832 = (function (){var G__14834 = cljs.core.cst$kw$class;
var G__14835 = "stats";
var G__14836 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__14837 = (function (){var G__14840 = cljs.core.cst$kw$click;
var G__14841 = ((function (G__14840,G__14834,G__14835,G__14836,G__14830,G__14831,G__14825,G__14826){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__14840,G__14834,G__14835,G__14836,G__14830,G__14831,G__14825,G__14826))
;
var G__14842 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14840,G__14841,G__14842) : hoplon.core.button.call(null,G__14840,G__14841,G__14842));
})();
var G__14838 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__14839 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14834,G__14835,G__14836,G__14837,G__14838,G__14839) : hoplon.core.div.call(null,G__14834,G__14835,G__14836,G__14837,G__14838,G__14839));
})();
var G__14833 = ui.research.item_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state,cljs.core.cst$kw$groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$product_DASH_level,cljs.core.cst$kw$tool_DASH_level], null)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14830,G__14831,G__14832,G__14833) : hoplon.core.div.call(null,G__14830,G__14831,G__14832,G__14833));
})();
var G__14828 = (function (){var con__13827__auto__ = (new cljs.core.Delay(((function (G__14825,G__14826,G__14827){
return (function (){
var G__14843 = cljs.core.cst$kw$class;
var G__14844 = "debug";
var G__14845 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Words") : hoplon.core.span.call(null,"Words"));
var G__14846 = (function (){var iter__4324__auto__ = ((function (G__14843,G__14844,G__14845,G__14825,G__14826,G__14827){
return (function hoplon$app_pages$_index_DOT_html$iter__14849(s__14850){
return (new cljs.core.LazySeq(null,((function (G__14843,G__14844,G__14845,G__14825,G__14826,G__14827){
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
var G__14854 = ((function (i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827){
return (function (m){
return (m + n);
});})(i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827))
], 0));
});})(i__14851,G__14853,n,level,c__4322__auto__,size__4323__auto__,b__14852,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827))
;
var G__14855 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14853,G__14854,G__14855) : hoplon.core.button.call(null,G__14853,G__14854,G__14855));
})());

var G__14884 = (i__14851 + (1));
i__14851 = G__14884;
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
var G__14857 = ((function (G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827){
return (function (m){
return (m + n);
});})(G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827))
], 0));
});})(G__14856,n,level,s__14850__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14825,G__14826,G__14827))
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
});})(G__14843,G__14844,G__14845,G__14825,G__14826,G__14827))
,null,null));
});})(G__14843,G__14844,G__14845,G__14825,G__14826,G__14827))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
var G__14847 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Money") : hoplon.core.span.call(null,"Money"));
var G__14848 = (function (){var iter__4324__auto__ = ((function (G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827){
return (function hoplon$app_pages$_index_DOT_html$iter__14859(s__14860){
return (new cljs.core.LazySeq(null,((function (G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827){
return (function (){
var s__14860__$1 = s__14860;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14860__$1);
if(temp__5457__auto__){
var s__14860__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14860__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14860__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14862 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14861 = (0);
while(true){
if((i__14861 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14861);
cljs.core.chunk_append(b__14862,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14863 = cljs.core.cst$kw$click;
var G__14864 = ((function (i__14861,G__14863,n,level,c__4322__auto__,size__4323__auto__,b__14862,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (i__14861,G__14863,n,level,c__4322__auto__,size__4323__auto__,b__14862,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827){
return (function (m){
return (m + n);
});})(i__14861,G__14863,n,level,c__4322__auto__,size__4323__auto__,b__14862,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827))
,(0)));
});})(i__14861,G__14863,n,level,c__4322__auto__,size__4323__auto__,b__14862,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827))
;
var G__14865 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14863,G__14864,G__14865) : hoplon.core.button.call(null,G__14863,G__14864,G__14865));
})());

var G__14885 = (i__14861 + (1));
i__14861 = G__14885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14862),hoplon$app_pages$_index_DOT_html$iter__14859(cljs.core.chunk_rest(s__14860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14862),null);
}
} else {
var level = cljs.core.first(s__14860__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14866 = cljs.core.cst$kw$click;
var G__14867 = ((function (G__14866,n,level,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (G__14866,n,level,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827){
return (function (m){
return (m + n);
});})(G__14866,n,level,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827))
,(0)));
});})(G__14866,n,level,s__14860__$2,temp__5457__auto__,G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827))
;
var G__14868 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14866,G__14867,G__14868) : hoplon.core.button.call(null,G__14866,G__14867,G__14868));
})(),hoplon$app_pages$_index_DOT_html$iter__14859(cljs.core.rest(s__14860__$2)));
}
} else {
return null;
}
break;
}
});})(G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827))
,null,null));
});})(G__14843,G__14844,G__14845,G__14846,G__14847,G__14825,G__14826,G__14827))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14843,G__14844,G__14845,G__14846,G__14847,G__14848) : hoplon.core.div.call(null,G__14843,G__14844,G__14845,G__14846,G__14847,G__14848));
});})(G__14825,G__14826,G__14827))
,null));
var alt__13828__auto__ = (new cljs.core.Delay(((function (con__13827__auto__,G__14825,G__14826,G__14827){
return (function (){
return null;
});})(con__13827__auto__,G__14825,G__14826,G__14827))
,null));
var tpl__13829__auto__ = ((function (con__13827__auto__,alt__13828__auto__,G__14825,G__14826,G__14827){
return (function (p__13830__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13830__auto__)?con__13827__auto__:alt__13828__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13827__auto__,alt__13828__auto__,G__14825,G__14826,G__14827))
;
var fexpr__14869 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13829__auto__);
return (fexpr__14869.cljs$core$IFn$_invoke$arity$1 ? fexpr__14869.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14869.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__14829 = (function (){var G__14870 = cljs.core.cst$kw$class;
var G__14871 = "stuff";
var G__14872 = ui.buttons.tool_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
var G__14873 = ui.buttons.product_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14870,G__14871,G__14872,G__14873) : hoplon.core.div.call(null,G__14870,G__14871,G__14872,G__14873));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14825,G__14826,G__14827,G__14828,G__14829) : hoplon.core.div.call(null,G__14825,G__14826,G__14827,G__14828,G__14829));
}),null));
var alt__13828__auto__ = (new cljs.core.Delay(((function (con__13827__auto__){
return (function (){
var G__14874 = (function (){var G__14875 = "Start";
var G__14876 = cljs.core.cst$kw$click;
var G__14877 = ((function (G__14875,G__14876,con__13827__auto__){
return (function (){
return clicker.engine.tap(hoplon.app_pages._index_DOT_html.state,cljs.core.cst$kw$genesis);
});})(G__14875,G__14876,con__13827__auto__))
;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14875,G__14876,G__14877) : hoplon.core.button.call(null,G__14875,G__14876,G__14877));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__14874) : hoplon.core.div.call(null,G__14874));
});})(con__13827__auto__))
,null));
var tpl__13829__auto__ = ((function (con__13827__auto__,alt__13828__auto__){
return (function (p__13830__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13830__auto__)?con__13827__auto__:alt__13828__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13827__auto__,alt__13828__auto__))
;
var fexpr__14878 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13829__auto__);
return (fexpr__14878.cljs$core$IFn$_invoke$arity$1 ? fexpr__14878.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.has_started) : fexpr__14878.call(null,hoplon.app_pages._index_DOT_html.has_started));
})();
var G__14824 = (function (){var con__13827__auto__ = (new cljs.core.Delay(((function (G__14823){
return (function (){
var G__14879 = cljs.core.cst$kw$class;
var G__14880 = "debug";
var G__14881 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__14882 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14879,G__14880,G__14881,G__14882) : hoplon.core.div.call(null,G__14879,G__14880,G__14881,G__14882));
});})(G__14823))
,null));
var alt__13828__auto__ = (new cljs.core.Delay(((function (con__13827__auto__,G__14823){
return (function (){
return null;
});})(con__13827__auto__,G__14823))
,null));
var tpl__13829__auto__ = ((function (con__13827__auto__,alt__13828__auto__,G__14823){
return (function (p__13830__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13830__auto__)?con__13827__auto__:alt__13828__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13827__auto__,alt__13828__auto__,G__14823))
;
var fexpr__14883 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13829__auto__);
return (fexpr__14883.cljs$core$IFn$_invoke$arity$1 ? fexpr__14883.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14883.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14823,G__14824) : hoplon.core.body.call(null,G__14823,G__14824));
})()], 0));
