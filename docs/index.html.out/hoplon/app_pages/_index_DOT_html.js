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
goog.require('ui.status');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(clicker.util.default_state);
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__14798 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14794,G__14793){
var G__14799 = G__14794;
var G__14800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$add_DASH_every], null);
var G__14801 = (0);
return (G__14793.cljs$core$IFn$_invoke$arity$3 ? G__14793.cljs$core$IFn$_invoke$arity$3(G__14799,G__14800,G__14801) : G__14793.call(null,G__14799,G__14800,G__14801));
}));
return (fexpr__14798.cljs$core$IFn$_invoke$arity$2 ? fexpr__14798.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14798.call(null,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
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
return dao.dao.get_state("init",(function (p1__14802_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.state,p1__14802_SHARP_);
}));
}),(500));

return setInterval(hoplon.app_pages._index_DOT_html.game_loop,(1000));
}));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__14811 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14803,G__14805,G__14804){
var G__14812 = "%.0f";
var G__14813 = (function (){var G__14814 = G__14805;
var G__14815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null);
var G__14816 = (0);
return (G__14804.cljs$core$IFn$_invoke$arity$3 ? G__14804.cljs$core$IFn$_invoke$arity$3(G__14814,G__14815,G__14816) : G__14804.call(null,G__14814,G__14815,G__14816));
})();
return (G__14803.cljs$core$IFn$_invoke$arity$2 ? G__14803.cljs$core$IFn$_invoke$arity$2(G__14812,G__14813) : G__14803.call(null,G__14812,G__14813));
}));
return (fexpr__14811.cljs$core$IFn$_invoke$arity$3 ? fexpr__14811.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14811.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__14819 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14817,G__14818){
return (G__14817.cljs$core$IFn$_invoke$arity$2 ? G__14817.cljs$core$IFn$_invoke$arity$2("%.2f",G__14818) : G__14817.call(null,"%.2f",G__14818));
}));
return (fexpr__14819.cljs$core$IFn$_invoke$arity$2 ? fexpr__14819.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__14819.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__14828 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14820,G__14822,G__14821){
var G__14829 = "%.2f";
var G__14830 = (function (){var G__14831 = G__14822;
var G__14832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null);
var G__14833 = (0);
return (G__14821.cljs$core$IFn$_invoke$arity$3 ? G__14821.cljs$core$IFn$_invoke$arity$3(G__14831,G__14832,G__14833) : G__14821.call(null,G__14831,G__14832,G__14833));
})();
return (G__14820.cljs$core$IFn$_invoke$arity$2 ? G__14820.cljs$core$IFn$_invoke$arity$2(G__14829,G__14830) : G__14820.call(null,G__14829,G__14830));
}));
return (fexpr__14828.cljs$core$IFn$_invoke$arity$3 ? fexpr__14828.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__14828.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__14839 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14836,G__14838,G__14837){
var sb__4462__auto__ = (new G__14836());
var _STAR_print_newline_STAR_14834_14840 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14835_14841 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14834_14840,_STAR_print_fn_STAR_14835_14841,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_14834_14840,_STAR_print_fn_STAR_14835_14841,sb__4462__auto__))
;

try{(G__14837.cljs$core$IFn$_invoke$arity$1 ? G__14837.cljs$core$IFn$_invoke$arity$1(G__14838) : G__14837.call(null,G__14838));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14835_14841;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14834_14840;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
}));
return (fexpr__14839.cljs$core$IFn$_invoke$arity$3 ? fexpr__14839.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__14839.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
hoplon.app_pages._index_DOT_html.has_started = (function (){var fexpr__14844 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14842,G__14843){
return (G__14842.cljs$core$IFn$_invoke$arity$1 ? G__14842.cljs$core$IFn$_invoke$arity$1(G__14843) : G__14842.call(null,G__14843));
}));
return (fexpr__14844.cljs$core$IFn$_invoke$arity$2 ? fexpr__14844.cljs$core$IFn$_invoke$arity$2(clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state) : fexpr__14844.call(null,clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14845 = (function (){var G__14848 = cljs.core.cst$kw$href;
var G__14849 = "app.css";
var G__14850 = cljs.core.cst$kw$rel;
var G__14851 = "stylesheet";
var G__14852 = cljs.core.cst$kw$type;
var G__14853 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14848,G__14849,G__14850,G__14851,G__14852,G__14853) : hoplon.core.link.call(null,G__14848,G__14849,G__14850,G__14851,G__14852,G__14853));
})();
var G__14846 = (function (){var G__14854 = cljs.core.cst$kw$href;
var G__14855 = "grids.css";
var G__14856 = cljs.core.cst$kw$rel;
var G__14857 = "stylesheet";
var G__14858 = cljs.core.cst$kw$type;
var G__14859 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14854,G__14855,G__14856,G__14857,G__14858,G__14859) : hoplon.core.link.call(null,G__14854,G__14855,G__14856,G__14857,G__14858,G__14859));
})();
var G__14847 = (function (){var G__14860 = cljs.core.cst$kw$href;
var G__14861 = "research.css";
var G__14862 = cljs.core.cst$kw$rel;
var G__14863 = "stylesheet";
var G__14864 = cljs.core.cst$kw$type;
var G__14865 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14860,G__14861,G__14862,G__14863,G__14864,G__14865) : hoplon.core.link.call(null,G__14860,G__14861,G__14862,G__14863,G__14864,G__14865));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__14845,G__14846,G__14847) : hoplon.core.head.call(null,G__14845,G__14846,G__14847));
})(),(function (){var G__14866 = (function (){var con__10102__auto__ = (new cljs.core.Delay((function (){
var G__14868 = cljs.core.cst$kw$class;
var G__14869 = "grid-all";
var G__14870 = ui.status.show_updates.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
var G__14871 = (function (){var G__14875 = cljs.core.cst$kw$class;
var G__14876 = "stats";
var G__14877 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__14878 = (function (){var G__14881 = cljs.core.cst$kw$click;
var G__14882 = ((function (G__14881,G__14875,G__14876,G__14877,G__14868,G__14869,G__14870){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__14881,G__14875,G__14876,G__14877,G__14868,G__14869,G__14870))
;
var G__14883 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14881,G__14882,G__14883) : hoplon.core.button.call(null,G__14881,G__14882,G__14883));
})();
var G__14879 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__14880 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14875,G__14876,G__14877,G__14878,G__14879,G__14880) : hoplon.core.div.call(null,G__14875,G__14876,G__14877,G__14878,G__14879,G__14880));
})();
var G__14872 = ui.research.item_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state,cljs.core.cst$kw$groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$product_DASH_level,cljs.core.cst$kw$tool_DASH_level], null)], 0));
var G__14873 = ui.buttons.tool_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
var G__14874 = ui.buttons.product_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__14868,G__14869,G__14870,G__14871,G__14872,G__14873,G__14874) : hoplon.core.div.call(null,G__14868,G__14869,G__14870,G__14871,G__14872,G__14873,G__14874));
}),null));
var alt__10103__auto__ = (new cljs.core.Delay(((function (con__10102__auto__){
return (function (){
var G__14884 = cljs.core.cst$kw$class;
var G__14885 = "start";
var G__14886 = (function (){var G__14887 = "Start";
var G__14888 = cljs.core.cst$kw$click;
var G__14889 = ((function (G__14887,G__14888,G__14884,G__14885,con__10102__auto__){
return (function (){
return clicker.engine.start(hoplon.app_pages._index_DOT_html.state);
});})(G__14887,G__14888,G__14884,G__14885,con__10102__auto__))
;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14887,G__14888,G__14889) : hoplon.core.button.call(null,G__14887,G__14888,G__14889));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14884,G__14885,G__14886) : hoplon.core.div.call(null,G__14884,G__14885,G__14886));
});})(con__10102__auto__))
,null));
var tpl__10104__auto__ = ((function (con__10102__auto__,alt__10103__auto__){
return (function (p__10105__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__10105__auto__)?con__10102__auto__:alt__10103__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__10102__auto__,alt__10103__auto__))
;
var fexpr__14890 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__10104__auto__);
return (fexpr__14890.cljs$core$IFn$_invoke$arity$1 ? fexpr__14890.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.has_started) : fexpr__14890.call(null,hoplon.app_pages._index_DOT_html.has_started));
})();
var G__14867 = (function (){var con__10102__auto__ = (new cljs.core.Delay(((function (G__14866){
return (function (){
var G__14891 = cljs.core.cst$kw$class;
var G__14892 = "debug";
var G__14893 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Words") : hoplon.core.span.call(null,"Words"));
var G__14894 = (function (){var iter__4324__auto__ = ((function (G__14891,G__14892,G__14893,G__14866){
return (function hoplon$app_pages$_index_DOT_html$iter__14899(s__14900){
return (new cljs.core.LazySeq(null,((function (G__14891,G__14892,G__14893,G__14866){
return (function (){
var s__14900__$1 = s__14900;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14900__$1);
if(temp__5457__auto__){
var s__14900__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14900__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14900__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14902 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14901 = (0);
while(true){
if((i__14901 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14901);
cljs.core.chunk_append(b__14902,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14903 = cljs.core.cst$kw$click;
var G__14904 = ((function (i__14901,G__14903,n,level,c__4322__auto__,size__4323__auto__,b__14902,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__14901,G__14903,n,level,c__4322__auto__,size__4323__auto__,b__14902,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866){
return (function (m){
return (m + n);
});})(i__14901,G__14903,n,level,c__4322__auto__,size__4323__auto__,b__14902,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866))
], 0));
});})(i__14901,G__14903,n,level,c__4322__auto__,size__4323__auto__,b__14902,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866))
;
var G__14905 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14903,G__14904,G__14905) : hoplon.core.button.call(null,G__14903,G__14904,G__14905));
})());

var G__14920 = (i__14901 + (1));
i__14901 = G__14920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14902),hoplon$app_pages$_index_DOT_html$iter__14899(cljs.core.chunk_rest(s__14900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14902),null);
}
} else {
var level = cljs.core.first(s__14900__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14906 = cljs.core.cst$kw$click;
var G__14907 = ((function (G__14906,n,level,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__14906,n,level,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866){
return (function (m){
return (m + n);
});})(G__14906,n,level,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866))
], 0));
});})(G__14906,n,level,s__14900__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14866))
;
var G__14908 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14906,G__14907,G__14908) : hoplon.core.button.call(null,G__14906,G__14907,G__14908));
})(),hoplon$app_pages$_index_DOT_html$iter__14899(cljs.core.rest(s__14900__$2)));
}
} else {
return null;
}
break;
}
});})(G__14891,G__14892,G__14893,G__14866))
,null,null));
});})(G__14891,G__14892,G__14893,G__14866))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
var G__14895 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Money") : hoplon.core.span.call(null,"Money"));
var G__14896 = (function (){var iter__4324__auto__ = ((function (G__14891,G__14892,G__14893,G__14894,G__14895,G__14866){
return (function hoplon$app_pages$_index_DOT_html$iter__14909(s__14910){
return (new cljs.core.LazySeq(null,((function (G__14891,G__14892,G__14893,G__14894,G__14895,G__14866){
return (function (){
var s__14910__$1 = s__14910;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14910__$1);
if(temp__5457__auto__){
var s__14910__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14910__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14910__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14912 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14911 = (0);
while(true){
if((i__14911 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14911);
cljs.core.chunk_append(b__14912,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14913 = cljs.core.cst$kw$click;
var G__14914 = ((function (i__14911,G__14913,n,level,c__4322__auto__,size__4323__auto__,b__14912,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (i__14911,G__14913,n,level,c__4322__auto__,size__4323__auto__,b__14912,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866){
return (function (m){
return (m + n);
});})(i__14911,G__14913,n,level,c__4322__auto__,size__4323__auto__,b__14912,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866))
,(0)));
});})(i__14911,G__14913,n,level,c__4322__auto__,size__4323__auto__,b__14912,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866))
;
var G__14915 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14913,G__14914,G__14915) : hoplon.core.button.call(null,G__14913,G__14914,G__14915));
})());

var G__14921 = (i__14911 + (1));
i__14911 = G__14921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14912),hoplon$app_pages$_index_DOT_html$iter__14909(cljs.core.chunk_rest(s__14910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14912),null);
}
} else {
var level = cljs.core.first(s__14910__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14916 = cljs.core.cst$kw$click;
var G__14917 = ((function (G__14916,n,level,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (G__14916,n,level,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866){
return (function (m){
return (m + n);
});})(G__14916,n,level,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866))
,(0)));
});})(G__14916,n,level,s__14910__$2,temp__5457__auto__,G__14891,G__14892,G__14893,G__14894,G__14895,G__14866))
;
var G__14918 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14916,G__14917,G__14918) : hoplon.core.button.call(null,G__14916,G__14917,G__14918));
})(),hoplon$app_pages$_index_DOT_html$iter__14909(cljs.core.rest(s__14910__$2)));
}
} else {
return null;
}
break;
}
});})(G__14891,G__14892,G__14893,G__14894,G__14895,G__14866))
,null,null));
});})(G__14891,G__14892,G__14893,G__14894,G__14895,G__14866))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
var G__14897 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__14898 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__14891,G__14892,G__14893,G__14894,G__14895,G__14896,G__14897,G__14898) : hoplon.core.div.call(null,G__14891,G__14892,G__14893,G__14894,G__14895,G__14896,G__14897,G__14898));
});})(G__14866))
,null));
var alt__10103__auto__ = (new cljs.core.Delay(((function (con__10102__auto__,G__14866){
return (function (){
return null;
});})(con__10102__auto__,G__14866))
,null));
var tpl__10104__auto__ = ((function (con__10102__auto__,alt__10103__auto__,G__14866){
return (function (p__10105__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__10105__auto__)?con__10102__auto__:alt__10103__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__10102__auto__,alt__10103__auto__,G__14866))
;
var fexpr__14919 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__10104__auto__);
return (fexpr__14919.cljs$core$IFn$_invoke$arity$1 ? fexpr__14919.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14919.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__14866,G__14867) : hoplon.core.body.call(null,G__14866,G__14867));
})()], 0));
