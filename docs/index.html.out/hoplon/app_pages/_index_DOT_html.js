// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.engine');
goog.require('clicker.util');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('ui.buttons');
goog.require('ui.levels');
goog.require('ui.research');
goog.require('ui.status');
goog.require('hoplon.storage_atom');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = hoplon.storage_atom.local_storage(javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$hoplon$app_DASH_pages$_index_DOT_html_SLASH_store);
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__10982 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10978,G__10977){
var G__10983 = G__10978;
var G__10984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$add_DASH_every], null);
var G__10985 = (0);
return (G__10977.cljs$core$IFn$_invoke$arity$3 ? G__10977.cljs$core$IFn$_invoke$arity$3(G__10983,G__10984,G__10985) : G__10977.call(null,G__10983,G__10984,G__10985));
}));
return (fexpr__10982.cljs$core$IFn$_invoke$arity$2 ? fexpr__10982.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__10982.call(null,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.game_loop = (function hoplon$app_pages$_index_DOT_html$game_loop(){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,(function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
})], 0));
});
setInterval(hoplon.app_pages._index_DOT_html.game_loop,(1000));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__10994 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__10986,G__10988,G__10987){
var G__10995 = "%.0f";
var G__10996 = (function (){var G__10997 = G__10988;
var G__10998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$clicks], null);
var G__10999 = (0);
return (G__10987.cljs$core$IFn$_invoke$arity$3 ? G__10987.cljs$core$IFn$_invoke$arity$3(G__10997,G__10998,G__10999) : G__10987.call(null,G__10997,G__10998,G__10999));
})();
return (G__10986.cljs$core$IFn$_invoke$arity$2 ? G__10986.cljs$core$IFn$_invoke$arity$2(G__10995,G__10996) : G__10986.call(null,G__10995,G__10996));
}));
return (fexpr__10994.cljs$core$IFn$_invoke$arity$3 ? fexpr__10994.cljs$core$IFn$_invoke$arity$3(goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in) : fexpr__10994.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__11002 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__11000,G__11001){
return (G__11000.cljs$core$IFn$_invoke$arity$2 ? G__11000.cljs$core$IFn$_invoke$arity$2("%.2f",G__11001) : G__11000.call(null,"%.2f",G__11001));
}));
return (fexpr__11002.cljs$core$IFn$_invoke$arity$2 ? fexpr__11002.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__11002.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__11010 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__11005,G__11003,G__11004){
var G__11011 = (function (){var G__11012 = G__11005;
var G__11013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null);
var G__11014 = (0);
return (G__11004.cljs$core$IFn$_invoke$arity$3 ? G__11004.cljs$core$IFn$_invoke$arity$3(G__11012,G__11013,G__11014) : G__11004.call(null,G__11012,G__11013,G__11014));
})();
return (G__11003.cljs$core$IFn$_invoke$arity$1 ? G__11003.cljs$core$IFn$_invoke$arity$1(G__11011) : G__11003.call(null,G__11011));
}));
return (fexpr__11010.cljs$core$IFn$_invoke$arity$3 ? fexpr__11010.cljs$core$IFn$_invoke$arity$3(hoplon.app_pages._index_DOT_html.state,clicker.util.currency_format,cljs.core.get_in) : fexpr__11010.call(null,hoplon.app_pages._index_DOT_html.state,clicker.util.currency_format,cljs.core.get_in));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__11020 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__11017,G__11019,G__11018){
var sb__4462__auto__ = (new G__11017());
var _STAR_print_newline_STAR_11015_11021 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11016_11022 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11015_11021,_STAR_print_fn_STAR_11016_11022,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_11015_11021,_STAR_print_fn_STAR_11016_11022,sb__4462__auto__))
;

try{(G__11018.cljs$core$IFn$_invoke$arity$1 ? G__11018.cljs$core$IFn$_invoke$arity$1(G__11019) : G__11018.call(null,G__11019));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11016_11022;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11015_11021;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
}));
return (fexpr__11020.cljs$core$IFn$_invoke$arity$3 ? fexpr__11020.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__11020.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
hoplon.app_pages._index_DOT_html.has_started = (function (){var fexpr__11025 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__11023,G__11024){
return (G__11023.cljs$core$IFn$_invoke$arity$1 ? G__11023.cljs$core$IFn$_invoke$arity$1(G__11024) : G__11023.call(null,G__11024));
}));
return (fexpr__11025.cljs$core$IFn$_invoke$arity$2 ? fexpr__11025.cljs$core$IFn$_invoke$arity$2(clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state) : fexpr__11025.call(null,clicker.engine.has_started_QMARK_,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__11026 = (function (){var G__11029 = cljs.core.cst$kw$href;
var G__11030 = "app.css";
var G__11031 = cljs.core.cst$kw$rel;
var G__11032 = "stylesheet";
var G__11033 = cljs.core.cst$kw$type;
var G__11034 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__11029,G__11030,G__11031,G__11032,G__11033,G__11034) : hoplon.core.link.call(null,G__11029,G__11030,G__11031,G__11032,G__11033,G__11034));
})();
var G__11027 = (function (){var G__11035 = cljs.core.cst$kw$href;
var G__11036 = "grids.css";
var G__11037 = cljs.core.cst$kw$rel;
var G__11038 = "stylesheet";
var G__11039 = cljs.core.cst$kw$type;
var G__11040 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__11035,G__11036,G__11037,G__11038,G__11039,G__11040) : hoplon.core.link.call(null,G__11035,G__11036,G__11037,G__11038,G__11039,G__11040));
})();
var G__11028 = (function (){var G__11041 = cljs.core.cst$kw$href;
var G__11042 = "research.css";
var G__11043 = cljs.core.cst$kw$rel;
var G__11044 = "stylesheet";
var G__11045 = cljs.core.cst$kw$type;
var G__11046 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__11041,G__11042,G__11043,G__11044,G__11045,G__11046) : hoplon.core.link.call(null,G__11041,G__11042,G__11043,G__11044,G__11045,G__11046));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__11026,G__11027,G__11028) : hoplon.core.head.call(null,G__11026,G__11027,G__11028));
})(),(function (){var G__11047 = (function (){var con__10018__auto__ = (new cljs.core.Delay((function (){
var G__11049 = cljs.core.cst$kw$class;
var G__11050 = "grid-all";
var G__11051 = ui.status.show_updates.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
var G__11052 = (function (){var G__11056 = cljs.core.cst$kw$class;
var G__11057 = "stats";
var G__11058 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__11059 = (function (){var G__11062 = cljs.core.cst$kw$click;
var G__11063 = ((function (G__11062,G__11056,G__11057,G__11058,G__11049,G__11050,G__11051){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__11062,G__11056,G__11057,G__11058,G__11049,G__11050,G__11051))
;
var G__11064 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11062,G__11063,G__11064) : hoplon.core.button.call(null,G__11062,G__11063,G__11064));
})();
var G__11060 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,hoplon.app_pages._index_DOT_html.money," income"));
var G__11061 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__11056,G__11057,G__11058,G__11059,G__11060,G__11061) : hoplon.core.div.call(null,G__11056,G__11057,G__11058,G__11059,G__11060,G__11061));
})();
var G__11053 = ui.research.item_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state,cljs.core.cst$kw$groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$product_DASH_level,cljs.core.cst$kw$tool_DASH_level], null)], 0));
var G__11054 = ui.buttons.tool_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
var G__11055 = ui.buttons.product_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,hoplon.app_pages._index_DOT_html.state], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__11049,G__11050,G__11051,G__11052,G__11053,G__11054,G__11055) : hoplon.core.div.call(null,G__11049,G__11050,G__11051,G__11052,G__11053,G__11054,G__11055));
}),null));
var alt__10019__auto__ = (new cljs.core.Delay(((function (con__10018__auto__){
return (function (){
var G__11065 = cljs.core.cst$kw$class;
var G__11066 = "start";
var G__11067 = (function (){var G__11068 = "Start";
var G__11069 = cljs.core.cst$kw$click;
var G__11070 = ((function (G__11068,G__11069,G__11065,G__11066,con__10018__auto__){
return (function (){
return clicker.engine.start(hoplon.app_pages._index_DOT_html.state);
});})(G__11068,G__11069,G__11065,G__11066,con__10018__auto__))
;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11068,G__11069,G__11070) : hoplon.core.button.call(null,G__11068,G__11069,G__11070));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__11065,G__11066,G__11067) : hoplon.core.div.call(null,G__11065,G__11066,G__11067));
});})(con__10018__auto__))
,null));
var tpl__10020__auto__ = ((function (con__10018__auto__,alt__10019__auto__){
return (function (p__10021__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__10021__auto__)?con__10018__auto__:alt__10019__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__10018__auto__,alt__10019__auto__))
;
var fexpr__11071 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__10020__auto__);
return (fexpr__11071.cljs$core$IFn$_invoke$arity$1 ? fexpr__11071.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.has_started) : fexpr__11071.call(null,hoplon.app_pages._index_DOT_html.has_started));
})();
var G__11048 = (function (){var con__10018__auto__ = (new cljs.core.Delay(((function (G__11047){
return (function (){
var G__11072 = cljs.core.cst$kw$class;
var G__11073 = "debug";
var G__11074 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Words") : hoplon.core.span.call(null,"Words"));
var G__11075 = (function (){var iter__4324__auto__ = ((function (G__11072,G__11073,G__11074,G__11047){
return (function hoplon$app_pages$_index_DOT_html$iter__11080(s__11081){
return (new cljs.core.LazySeq(null,((function (G__11072,G__11073,G__11074,G__11047){
return (function (){
var s__11081__$1 = s__11081;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11081__$1);
if(temp__5457__auto__){
var s__11081__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11081__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11081__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11083 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11082 = (0);
while(true){
if((i__11082 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11082);
cljs.core.chunk_append(b__11083,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__11084 = cljs.core.cst$kw$click;
var G__11085 = ((function (i__11082,G__11084,n,level,c__4322__auto__,size__4323__auto__,b__11083,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__11082,G__11084,n,level,c__4322__auto__,size__4323__auto__,b__11083,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047){
return (function (m){
return (m + n);
});})(i__11082,G__11084,n,level,c__4322__auto__,size__4323__auto__,b__11083,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047))
], 0));
});})(i__11082,G__11084,n,level,c__4322__auto__,size__4323__auto__,b__11083,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047))
;
var G__11086 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11084,G__11085,G__11086) : hoplon.core.button.call(null,G__11084,G__11085,G__11086));
})());

var G__11101 = (i__11082 + (1));
i__11082 = G__11101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11083),hoplon$app_pages$_index_DOT_html$iter__11080(cljs.core.chunk_rest(s__11081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11083),null);
}
} else {
var level = cljs.core.first(s__11081__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__11087 = cljs.core.cst$kw$click;
var G__11088 = ((function (G__11087,n,level,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__11087,n,level,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047){
return (function (m){
return (m + n);
});})(G__11087,n,level,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047))
], 0));
});})(G__11087,n,level,s__11081__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11047))
;
var G__11089 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11087,G__11088,G__11089) : hoplon.core.button.call(null,G__11087,G__11088,G__11089));
})(),hoplon$app_pages$_index_DOT_html$iter__11080(cljs.core.rest(s__11081__$2)));
}
} else {
return null;
}
break;
}
});})(G__11072,G__11073,G__11074,G__11047))
,null,null));
});})(G__11072,G__11073,G__11074,G__11047))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11)));
})();
var G__11076 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("Money") : hoplon.core.span.call(null,"Money"));
var G__11077 = (function (){var iter__4324__auto__ = ((function (G__11072,G__11073,G__11074,G__11075,G__11076,G__11047){
return (function hoplon$app_pages$_index_DOT_html$iter__11090(s__11091){
return (new cljs.core.LazySeq(null,((function (G__11072,G__11073,G__11074,G__11075,G__11076,G__11047){
return (function (){
var s__11091__$1 = s__11091;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11091__$1);
if(temp__5457__auto__){
var s__11091__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11091__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11091__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11093 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11092 = (0);
while(true){
if((i__11092 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11092);
cljs.core.chunk_append(b__11093,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__11094 = cljs.core.cst$kw$click;
var G__11095 = ((function (i__11092,G__11094,n,level,c__4322__auto__,size__4323__auto__,b__11093,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (i__11092,G__11094,n,level,c__4322__auto__,size__4323__auto__,b__11093,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047){
return (function (m){
return (m + n);
});})(i__11092,G__11094,n,level,c__4322__auto__,size__4323__auto__,b__11093,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047))
,(0)));
});})(i__11092,G__11094,n,level,c__4322__auto__,size__4323__auto__,b__11093,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047))
;
var G__11096 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11094,G__11095,G__11096) : hoplon.core.button.call(null,G__11094,G__11095,G__11096));
})());

var G__11102 = (i__11092 + (1));
i__11092 = G__11102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11093),hoplon$app_pages$_index_DOT_html$iter__11090(cljs.core.chunk_rest(s__11091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11093),null);
}
} else {
var level = cljs.core.first(s__11091__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__11097 = cljs.core.cst$kw$click;
var G__11098 = ((function (G__11097,n,level,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$values,cljs.core.cst$kw$money], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (G__11097,n,level,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047){
return (function (m){
return (m + n);
});})(G__11097,n,level,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047))
,(0)));
});})(G__11097,n,level,s__11091__$2,temp__5457__auto__,G__11072,G__11073,G__11074,G__11075,G__11076,G__11047))
;
var G__11099 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__11097,G__11098,G__11099) : hoplon.core.button.call(null,G__11097,G__11098,G__11099));
})(),hoplon$app_pages$_index_DOT_html$iter__11090(cljs.core.rest(s__11091__$2)));
}
} else {
return null;
}
break;
}
});})(G__11072,G__11073,G__11074,G__11075,G__11076,G__11047))
,null,null));
});})(G__11072,G__11073,G__11074,G__11075,G__11076,G__11047))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((11)));
})();
var G__11078 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__11079 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__11072,G__11073,G__11074,G__11075,G__11076,G__11077,G__11078,G__11079) : hoplon.core.div.call(null,G__11072,G__11073,G__11074,G__11075,G__11076,G__11077,G__11078,G__11079));
});})(G__11047))
,null));
var alt__10019__auto__ = (new cljs.core.Delay(((function (con__10018__auto__,G__11047){
return (function (){
return null;
});})(con__10018__auto__,G__11047))
,null));
var tpl__10020__auto__ = ((function (con__10018__auto__,alt__10019__auto__,G__11047){
return (function (p__10021__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__10021__auto__)?con__10018__auto__:alt__10019__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__10018__auto__,alt__10019__auto__,G__11047))
;
var fexpr__11100 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__10020__auto__);
return (fexpr__11100.cljs$core$IFn$_invoke$arity$1 ? fexpr__11100.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__11100.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__11047,G__11048) : hoplon.core.body.call(null,G__11047,G__11048));
})()], 0));
