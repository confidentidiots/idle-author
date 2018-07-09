// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clicker.engine');
goog.require('clicker.util');
goog.require('data.db');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('db.dao');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(clicker.util.default_state);
hoplon.app_pages._index_DOT_html.add_every = (function (){var fexpr__14393 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14392){
return cljs.core.cst$kw$add_DASH_every.cljs$core$IFn$_invoke$arity$2(G__14392,(0));
}));
return (fexpr__14393.cljs$core$IFn$_invoke$arity$1 ? fexpr__14393.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state) : fexpr__14393.call(null,hoplon.app_pages._index_DOT_html.state));
})();
javelin.core.dosync_STAR_((function (){
db.dao.init_db();

setTimeout((function (){
return db.dao.get_state("init",(function (p1__14394_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.state,p1__14394_SHARP_);
}));
}),(500));

return setInterval((function (){
clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,(function (m){
return (m + cljs.core.deref(hoplon.app_pages._index_DOT_html.add_every));
})], 0));

return db.dao.put_state(cljs.core.deref(hoplon.app_pages._index_DOT_html.state),(function (){
return cljs.core.List.EMPTY;
}));
}),(1000));
}));
hoplon.app_pages._index_DOT_html.god = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.level_value_fn = (function hoplon$app_pages$_index_DOT_html$level_value_fn(n){
return (Math.pow(n,(4)) + ((10) * n));
});
hoplon.app_pages._index_DOT_html.clicks = (function (){var fexpr__14399 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14395,G__14396){
var G__14400 = "%.0f";
var G__14401 = cljs.core.cst$kw$clicks.cljs$core$IFn$_invoke$arity$2(G__14396,(0));
return (G__14395.cljs$core$IFn$_invoke$arity$2 ? G__14395.cljs$core$IFn$_invoke$arity$2(G__14400,G__14401) : G__14395.call(null,G__14400,G__14401));
}));
return (fexpr__14399.cljs$core$IFn$_invoke$arity$2 ? fexpr__14399.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14399.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.add_every_fmt = (function (){var fexpr__14404 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14402,G__14403){
return (G__14402.cljs$core$IFn$_invoke$arity$2 ? G__14402.cljs$core$IFn$_invoke$arity$2("%.2f",G__14403) : G__14402.call(null,"%.2f",G__14403));
}));
return (fexpr__14404.cljs$core$IFn$_invoke$arity$2 ? fexpr__14404.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.add_every) : fexpr__14404.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.add_every));
})();
hoplon.app_pages._index_DOT_html.money = (function (){var fexpr__14409 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14405,G__14406){
var G__14410 = "%.2f";
var G__14411 = cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$2(G__14406,(0));
return (G__14405.cljs$core$IFn$_invoke$arity$2 ? G__14405.cljs$core$IFn$_invoke$arity$2(G__14410,G__14411) : G__14405.call(null,G__14410,G__14411));
}));
return (fexpr__14409.cljs$core$IFn$_invoke$arity$2 ? fexpr__14409.cljs$core$IFn$_invoke$arity$2(goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14409.call(null,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.state_str = (function (){var fexpr__14417 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__14414,G__14416,G__14415){
var sb__4462__auto__ = (new G__14414());
var _STAR_print_newline_STAR_14412_14418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14413_14419 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14412_14418,_STAR_print_fn_STAR_14413_14419,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_14412_14418,_STAR_print_fn_STAR_14413_14419,sb__4462__auto__))
;

try{(G__14415.cljs$core$IFn$_invoke$arity$1 ? G__14415.cljs$core$IFn$_invoke$arity$1(G__14416) : G__14415.call(null,G__14416));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14413_14419;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14412_14418;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
}));
return (fexpr__14417.cljs$core$IFn$_invoke$arity$3 ? fexpr__14417.cljs$core$IFn$_invoke$arity$3(goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint) : fexpr__14417.call(null,goog.string.StringBuffer,hoplon.app_pages._index_DOT_html.state,cljs.pprint.pprint));
})();
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.tap_button = (function() { 
var hoplon$app_pages$_index_DOT_html$tap_button__delegate = function (args__13766__auto__){
var vec__14420 = hoplon.core.parse_args(args__13766__auto__);
var map__14423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(0),null);
var map__14423__$1 = ((((!((map__14423 == null)))?(((((map__14423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14423):map__14423);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14423__$1,cljs.core.cst$kw$name);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14423__$1,cljs.core.cst$kw$btn_DASH_txt);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14423__$1,cljs.core.cst$kw$n);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(1),null);
var disabled = (function (){var fexpr__14435 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__14420,map__14423,map__14423__$1,name,btn_txt,n,kids){
return (function (G__14428,G__14429,G__14425,G__14427,G__14426){
var G__14436 = (function (){var G__14437 = G__14427;
var G__14438 = G__14428;
var G__14439 = cljs.core.cst$kw$n;
var G__14440 = G__14429;
return (G__14426.cljs$core$IFn$_invoke$arity$4 ? G__14426.cljs$core$IFn$_invoke$arity$4(G__14437,G__14438,G__14439,G__14440) : G__14426.call(null,G__14437,G__14438,G__14439,G__14440));
})();
return (G__14425.cljs$core$IFn$_invoke$arity$1 ? G__14425.cljs$core$IFn$_invoke$arity$1(G__14436) : G__14425.call(null,G__14436));
});})(vec__14420,map__14423,map__14423__$1,name,btn_txt,n,kids))
);
return (fexpr__14435.cljs$core$IFn$_invoke$arity$5 ? fexpr__14435.cljs$core$IFn$_invoke$arity$5(name,n,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_) : fexpr__14435.call(null,name,n,cljs.core.not,hoplon.app_pages._index_DOT_html.state,clicker.engine.can_tap_QMARK_));
})();
var click_fn = ((function (disabled,vec__14420,map__14423,map__14423__$1,name,btn_txt,n,kids){
return (function (){
return clicker.engine.tap.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$n,n], 0));
});})(disabled,vec__14420,map__14423,map__14423__$1,name,btn_txt,n,kids))
;
var G__14441 = cljs.core.cst$kw$disabled;
var G__14442 = disabled;
var G__14443 = cljs.core.cst$kw$click;
var G__14444 = click_fn;
var G__14445 = n;
var G__14446 = kids;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$6(G__14441,G__14442,G__14443,G__14444,G__14445,G__14446) : hoplon.core.button.call(null,G__14441,G__14442,G__14443,G__14444,G__14445,G__14446));
};
var hoplon$app_pages$_index_DOT_html$tap_button = function (var_args){
var args__13766__auto__ = null;
if (arguments.length > 0) {
var G__14447__i = 0, G__14447__a = new Array(arguments.length -  0);
while (G__14447__i < G__14447__a.length) {G__14447__a[G__14447__i] = arguments[G__14447__i + 0]; ++G__14447__i;}
  args__13766__auto__ = new cljs.core.IndexedSeq(G__14447__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$tap_button__delegate.call(this,args__13766__auto__);};
hoplon$app_pages$_index_DOT_html$tap_button.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$tap_button.cljs$lang$applyTo = (function (arglist__14448){
var args__13766__auto__ = cljs.core.seq(arglist__14448);
return hoplon$app_pages$_index_DOT_html$tap_button__delegate(args__13766__auto__);
});
hoplon$app_pages$_index_DOT_html$tap_button.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$tap_button__delegate;
return hoplon$app_pages$_index_DOT_html$tap_button;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.tap_buttons = (function() { 
var hoplon$app_pages$_index_DOT_html$tap_buttons__delegate = function (args__13766__auto__){
var vec__14449 = hoplon.core.parse_args(args__13766__auto__);
var map__14452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14449,(0),null);
var map__14452__$1 = ((((!((map__14452 == null)))?(((((map__14452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14452):map__14452);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14452__$1,cljs.core.cst$kw$name);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14452__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14449,(1),null);
var iter__4324__auto__ = ((function (vec__14449,map__14452,map__14452__$1,name,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__14454(s__14455){
return (new cljs.core.LazySeq(null,((function (vec__14449,map__14452,map__14452__$1,name,btn_txt,kids){
return (function (){
var s__14455__$1 = s__14455;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14455__$1);
if(temp__5457__auto__){
var s__14455__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14455__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14455__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14457 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14456 = (0);
while(true){
if((i__14456 < size__4323__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14456);
cljs.core.chunk_append(b__14457,hoplon.app_pages._index_DOT_html.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)));

var G__14458 = (i__14456 + (1));
i__14456 = G__14458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14457),hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__14454(cljs.core.chunk_rest(s__14455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14457),null);
}
} else {
var n = cljs.core.first(s__14455__$2);
return cljs.core.cons(hoplon.app_pages._index_DOT_html.tap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt,cljs.core.cst$kw$n,n], 0)),hoplon$app_pages$_index_DOT_html$tap_buttons_$_iter__14454(cljs.core.rest(s__14455__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14449,map__14452,map__14452__$1,name,btn_txt,kids))
,null,null));
});})(vec__14449,map__14452,map__14452__$1,name,btn_txt,kids))
;
return iter__4324__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(100),(1000)], null));
};
var hoplon$app_pages$_index_DOT_html$tap_buttons = function (var_args){
var args__13766__auto__ = null;
if (arguments.length > 0) {
var G__14459__i = 0, G__14459__a = new Array(arguments.length -  0);
while (G__14459__i < G__14459__a.length) {G__14459__a[G__14459__i] = arguments[G__14459__i + 0]; ++G__14459__i;}
  args__13766__auto__ = new cljs.core.IndexedSeq(G__14459__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$tap_buttons__delegate.call(this,args__13766__auto__);};
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$lang$applyTo = (function (arglist__14460){
var args__13766__auto__ = cljs.core.seq(arglist__14460);
return hoplon$app_pages$_index_DOT_html$tap_buttons__delegate(args__13766__auto__);
});
hoplon$app_pages$_index_DOT_html$tap_buttons.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$tap_buttons__delegate;
return hoplon$app_pages$_index_DOT_html$tap_buttons;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.rows = (function() { 
var hoplon$app_pages$_index_DOT_html$rows__delegate = function (args__13766__auto__){
var vec__14461 = hoplon.core.parse_args(args__13766__auto__);
var map__14464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14461,(0),null);
var map__14464__$1 = ((((!((map__14464 == null)))?(((((map__14464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14464):map__14464);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14464__$1,cljs.core.cst$kw$type);
var btn_txt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14464__$1,cljs.core.cst$kw$btn_DASH_txt);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14461,(1),null);
var iter__4324__auto__ = ((function (vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function hoplon$app_pages$_index_DOT_html$rows_$_iter__14466(s__14467){
return (new cljs.core.LazySeq(null,((function (vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (){
var s__14467__$1 = s__14467;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14467__$1);
if(temp__5457__auto__){
var s__14467__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14467__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14467__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14469 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14468 = (0);
while(true){
if((i__14468 < size__4323__auto__)){
var thing = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14468);
cljs.core.chunk_append(b__14469,(function (){var name = (function (){var G__14470 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14470) : thing.call(null,G__14470));
})();
var key = (function (){var G__14471 = cljs.core.cst$kw$key;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14471) : thing.call(null,G__14471));
})();
var loss = (function (){var G__14472 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14472) : thing.call(null,G__14472));
})();
var gain = (function (){var fexpr__14479 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14468,name,key,loss,thing,c__4322__auto__,size__4323__auto__,b__14469,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (G__14474,G__14476,G__14473,G__14475){
var G__14480 = "%.2f";
var G__14481 = (G__14474.cljs$core$IFn$_invoke$arity$2 ? G__14474.cljs$core$IFn$_invoke$arity$2(G__14475,G__14476) : G__14474.call(null,G__14475,G__14476));
return (G__14473.cljs$core$IFn$_invoke$arity$2 ? G__14473.cljs$core$IFn$_invoke$arity$2(G__14480,G__14481) : G__14473.call(null,G__14480,G__14481));
});})(i__14468,name,key,loss,thing,c__4322__auto__,size__4323__auto__,b__14469,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
);
return (fexpr__14479.cljs$core$IFn$_invoke$arity$4 ? fexpr__14479.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14479.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__14485 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14468,name,key,loss,gain,thing,c__4322__auto__,size__4323__auto__,b__14469,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (G__14482,G__14484,G__14483){
return (G__14482.cljs$core$IFn$_invoke$arity$2 ? G__14482.cljs$core$IFn$_invoke$arity$2(G__14483,G__14484) : G__14482.call(null,G__14483,G__14484));
});})(i__14468,name,key,loss,gain,thing,c__4322__auto__,size__4323__auto__,b__14469,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
);
return (fexpr__14485.cljs$core$IFn$_invoke$arity$3 ? fexpr__14485.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,hoplon.app_pages._index_DOT_html.state) : fexpr__14485.call(null,clicker.engine.thing_count,key,hoplon.app_pages._index_DOT_html.state));
})();
var G__14486 = cljs.core.cst$kw$class;
var G__14487 = (function (){var fexpr__14495 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (i__14468,G__14486,name,key,loss,gain,count,thing,c__4322__auto__,size__4323__auto__,b__14469,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (G__14493,G__14494){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14493.cljs$core$IFn$_invoke$arity$2 ? G__14493.cljs$core$IFn$_invoke$arity$2(G__14494,(0)) : G__14493.call(null,G__14494,(0))),cljs.core.cst$kw$olditem,(G__14494 > (0))], null);
});})(i__14468,G__14486,name,key,loss,gain,count,thing,c__4322__auto__,size__4323__auto__,b__14469,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
);
return (fexpr__14495.cljs$core$IFn$_invoke$arity$2 ? fexpr__14495.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14495.call(null,cljs.core._EQ_,count));
})();
var G__14488 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14489 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__14490 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__14491 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14492 = (function (){var G__14496 = hoplon.app_pages._index_DOT_html.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14496) : hoplon.core.td.call(null,G__14496));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__14486,G__14487,G__14488,G__14489,G__14490,G__14491,G__14492) : hoplon.core.tr.call(null,G__14486,G__14487,G__14488,G__14489,G__14490,G__14491,G__14492));
})());

var G__14524 = (i__14468 + (1));
i__14468 = G__14524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14469),hoplon$app_pages$_index_DOT_html$rows_$_iter__14466(cljs.core.chunk_rest(s__14467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14469),null);
}
} else {
var thing = cljs.core.first(s__14467__$2);
return cljs.core.cons((function (){var name = (function (){var G__14497 = cljs.core.cst$kw$name;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14497) : thing.call(null,G__14497));
})();
var key = (function (){var G__14498 = cljs.core.cst$kw$key;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14498) : thing.call(null,G__14498));
})();
var loss = (function (){var G__14499 = cljs.core.cst$kw$cost;
return (thing.cljs$core$IFn$_invoke$arity$1 ? thing.cljs$core$IFn$_invoke$arity$1(G__14499) : thing.call(null,G__14499));
})();
var gain = (function (){var fexpr__14506 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,key,loss,thing,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (G__14501,G__14503,G__14500,G__14502){
var G__14507 = "%.2f";
var G__14508 = (G__14501.cljs$core$IFn$_invoke$arity$2 ? G__14501.cljs$core$IFn$_invoke$arity$2(G__14502,G__14503) : G__14501.call(null,G__14502,G__14503));
return (G__14500.cljs$core$IFn$_invoke$arity$2 ? G__14500.cljs$core$IFn$_invoke$arity$2(G__14507,G__14508) : G__14500.call(null,G__14507,G__14508));
});})(name,key,loss,thing,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
);
return (fexpr__14506.cljs$core$IFn$_invoke$arity$4 ? fexpr__14506.cljs$core$IFn$_invoke$arity$4(clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state) : fexpr__14506.call(null,clicker.engine.next_gain,name,goog.string.format,hoplon.app_pages._index_DOT_html.state));
})();
var count = (function (){var fexpr__14512 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (name,key,loss,gain,thing,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (G__14509,G__14511,G__14510){
return (G__14509.cljs$core$IFn$_invoke$arity$2 ? G__14509.cljs$core$IFn$_invoke$arity$2(G__14510,G__14511) : G__14509.call(null,G__14510,G__14511));
});})(name,key,loss,gain,thing,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
);
return (fexpr__14512.cljs$core$IFn$_invoke$arity$3 ? fexpr__14512.cljs$core$IFn$_invoke$arity$3(clicker.engine.thing_count,key,hoplon.app_pages._index_DOT_html.state) : fexpr__14512.call(null,clicker.engine.thing_count,key,hoplon.app_pages._index_DOT_html.state));
})();
var G__14513 = cljs.core.cst$kw$class;
var G__14514 = (function (){var fexpr__14522 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__14513,name,key,loss,gain,count,thing,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids){
return (function (G__14520,G__14521){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$newitem,(G__14520.cljs$core$IFn$_invoke$arity$2 ? G__14520.cljs$core$IFn$_invoke$arity$2(G__14521,(0)) : G__14520.call(null,G__14521,(0))),cljs.core.cst$kw$olditem,(G__14521 > (0))], null);
});})(G__14513,name,key,loss,gain,count,thing,s__14467__$2,temp__5457__auto__,vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
);
return (fexpr__14522.cljs$core$IFn$_invoke$arity$2 ? fexpr__14522.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,count) : fexpr__14522.call(null,cljs.core._EQ_,count));
})();
var G__14515 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.td.call(null,name));
var G__14516 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(loss) : hoplon.core.td.call(null,loss));
var G__14517 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(gain) : hoplon.core.td.call(null,gain));
var G__14518 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(count) : hoplon.core.td.call(null,count));
var G__14519 = (function (){var G__14523 = hoplon.app_pages._index_DOT_html.tap_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,name,cljs.core.cst$kw$btn_DASH_txt,btn_txt], 0));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(G__14523) : hoplon.core.td.call(null,G__14523));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$7(G__14513,G__14514,G__14515,G__14516,G__14517,G__14518,G__14519) : hoplon.core.tr.call(null,G__14513,G__14514,G__14515,G__14516,G__14517,G__14518,G__14519));
})(),hoplon$app_pages$_index_DOT_html$rows_$_iter__14466(cljs.core.rest(s__14467__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
,null,null));
});})(vec__14461,map__14464,map__14464__$1,type,btn_txt,kids))
;
return iter__4324__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data.db.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.cst$kw$items], null)));
};
var hoplon$app_pages$_index_DOT_html$rows = function (var_args){
var args__13766__auto__ = null;
if (arguments.length > 0) {
var G__14525__i = 0, G__14525__a = new Array(arguments.length -  0);
while (G__14525__i < G__14525__a.length) {G__14525__a[G__14525__i] = arguments[G__14525__i + 0]; ++G__14525__i;}
  args__13766__auto__ = new cljs.core.IndexedSeq(G__14525__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$rows__delegate.call(this,args__13766__auto__);};
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$rows.cljs$lang$applyTo = (function (arglist__14526){
var args__13766__auto__ = cljs.core.seq(arglist__14526);
return hoplon$app_pages$_index_DOT_html$rows__delegate(args__13766__auto__);
});
hoplon$app_pages$_index_DOT_html$rows.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$rows__delegate;
return hoplon$app_pages$_index_DOT_html$rows;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14527 = (function (){var G__14528 = cljs.core.cst$kw$href;
var G__14529 = "app.css";
var G__14530 = cljs.core.cst$kw$rel;
var G__14531 = "stylesheet";
var G__14532 = cljs.core.cst$kw$type;
var G__14533 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14528,G__14529,G__14530,G__14531,G__14532,G__14533) : hoplon.core.link.call(null,G__14528,G__14529,G__14530,G__14531,G__14532,G__14533));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__14527) : hoplon.core.head.call(null,G__14527));
})(),(function (){var G__14534 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.clicks," words") : hoplon.core.h3.call(null,hoplon.app_pages._index_DOT_html.clicks," words"));
var G__14535 = (function (){var G__14541 = cljs.core.cst$kw$click;
var G__14542 = ((function (G__14541,G__14534){
return (function (){
return clicker.engine.click(hoplon.app_pages._index_DOT_html.state);
});})(G__14541,G__14534))
;
var G__14543 = "Write a word";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14541,G__14542,G__14543) : hoplon.core.button.call(null,G__14541,G__14542,G__14543));
})();
var G__14536 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("$",hoplon.app_pages._index_DOT_html.money," income") : hoplon.core.h5.call(null,"$",hoplon.app_pages._index_DOT_html.money," income"));
var G__14537 = (hoplon.core.h5.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h5.cljs$core$IFn$_invoke$arity$3("Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second") : hoplon.core.h5.call(null,"Creativity boost of ",hoplon.app_pages._index_DOT_html.add_every_fmt," words every second"));
var G__14538 = (function (){var con__13846__auto__ = (new cljs.core.Delay(((function (G__14534,G__14535,G__14536,G__14537){
return (function (){
var G__14544 = (function (){var iter__4324__auto__ = ((function (G__14534,G__14535,G__14536,G__14537){
return (function hoplon$app_pages$_index_DOT_html$iter__14545(s__14546){
return (new cljs.core.LazySeq(null,((function (G__14534,G__14535,G__14536,G__14537){
return (function (){
var s__14546__$1 = s__14546;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14546__$1);
if(temp__5457__auto__){
var s__14546__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14546__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14546__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14548 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14547 = (0);
while(true){
if((i__14547 < size__4323__auto__)){
var level = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14547);
cljs.core.chunk_append(b__14548,(function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14549 = cljs.core.cst$kw$click;
var G__14550 = ((function (i__14547,G__14549,n,level,c__4322__auto__,size__4323__auto__,b__14548,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (i__14547,G__14549,n,level,c__4322__auto__,size__4323__auto__,b__14548,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537){
return (function (m){
return (m + n);
});})(i__14547,G__14549,n,level,c__4322__auto__,size__4323__auto__,b__14548,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537))
], 0));
});})(i__14547,G__14549,n,level,c__4322__auto__,size__4323__auto__,b__14548,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537))
;
var G__14551 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14549,G__14550,G__14551) : hoplon.core.button.call(null,G__14549,G__14550,G__14551));
})());

var G__14589 = (i__14547 + (1));
i__14547 = G__14589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14548),hoplon$app_pages$_index_DOT_html$iter__14545(cljs.core.chunk_rest(s__14546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14548),null);
}
} else {
var level = cljs.core.first(s__14546__$2);
return cljs.core.cons((function (){var n = hoplon.app_pages._index_DOT_html.level_value_fn(level);
var G__14552 = cljs.core.cst$kw$click;
var G__14553 = ((function (G__14552,n,level,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537){
return (function (){
return clicker.engine.click.cljs$core$IFn$_invoke$arity$variadic(hoplon.app_pages._index_DOT_html.state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$change_DASH_fn,((function (G__14552,n,level,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537){
return (function (m){
return (m + n);
});})(G__14552,n,level,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537))
], 0));
});})(G__14552,n,level,s__14546__$2,temp__5457__auto__,G__14534,G__14535,G__14536,G__14537))
;
var G__14554 = n;
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14552,G__14553,G__14554) : hoplon.core.button.call(null,G__14552,G__14553,G__14554));
})(),hoplon$app_pages$_index_DOT_html$iter__14545(cljs.core.rest(s__14546__$2)));
}
} else {
return null;
}
break;
}
});})(G__14534,G__14535,G__14536,G__14537))
,null,null));
});})(G__14534,G__14535,G__14536,G__14537))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__14544) : hoplon.core.div.call(null,G__14544));
});})(G__14534,G__14535,G__14536,G__14537))
,null));
var alt__13847__auto__ = (new cljs.core.Delay(((function (con__13846__auto__,G__14534,G__14535,G__14536,G__14537){
return (function (){
return null;
});})(con__13846__auto__,G__14534,G__14535,G__14536,G__14537))
,null));
var tpl__13848__auto__ = ((function (con__13846__auto__,alt__13847__auto__,G__14534,G__14535,G__14536,G__14537){
return (function (p__13849__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13849__auto__)?con__13846__auto__:alt__13847__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13846__auto__,alt__13847__auto__,G__14534,G__14535,G__14536,G__14537))
;
var fexpr__14555 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13848__auto__);
return (fexpr__14555.cljs$core$IFn$_invoke$arity$1 ? fexpr__14555.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14555.call(null,hoplon.app_pages._index_DOT_html.god));
})();
var G__14539 = (function (){var G__14556 = cljs.core.cst$kw$class;
var G__14557 = "wrapper";
var G__14558 = (function (){var G__14560 = cljs.core.cst$kw$class;
var G__14561 = "upgrade";
var G__14562 = (function (){var G__14563 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Upgrade your tools") : hoplon.core.caption.call(null,"Upgrade your tools"));
var G__14564 = (function (){var G__14566 = (function (){var G__14567 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14568 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Cost") : hoplon.core.th.call(null,"$ Cost"));
var G__14569 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Boost") : hoplon.core.th.call(null,"Boost"));
var G__14570 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Bought") : hoplon.core.th.call(null,"# Bought"));
var G__14571 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__14567,G__14568,G__14569,G__14570,G__14571) : hoplon.core.tr.call(null,G__14567,G__14568,G__14569,G__14570,G__14571));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14566) : hoplon.core.thead.call(null,G__14566));
})();
var G__14565 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$tool,cljs.core.cst$kw$btn_DASH_txt,"Buy"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14563,G__14564,G__14565) : hoplon.core.table.call(null,G__14563,G__14564,G__14565));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14560,G__14561,G__14562) : hoplon.core.div.call(null,G__14560,G__14561,G__14562));
})();
var G__14559 = (function (){var G__14572 = cljs.core.cst$kw$class;
var G__14573 = "sell";
var G__14574 = (function (){var G__14575 = (hoplon.core.caption.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.caption.cljs$core$IFn$_invoke$arity$1("Sell your words") : hoplon.core.caption.call(null,"Sell your words"));
var G__14576 = (function (){var G__14578 = (function (){var G__14579 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Thing") : hoplon.core.th.call(null,"Thing"));
var G__14580 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("Word cost") : hoplon.core.th.call(null,"Word cost"));
var G__14581 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("$ Income") : hoplon.core.th.call(null,"$ Income"));
var G__14582 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("# Sold") : hoplon.core.th.call(null,"# Sold"));
var G__14583 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$1("") : hoplon.core.th.call(null,""));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$5(G__14579,G__14580,G__14581,G__14582,G__14583) : hoplon.core.tr.call(null,G__14579,G__14580,G__14581,G__14582,G__14583));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$1(G__14578) : hoplon.core.thead.call(null,G__14578));
})();
var G__14577 = hoplon.app_pages._index_DOT_html.rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$product,cljs.core.cst$kw$btn_DASH_txt,"Sell"], 0));
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__14575,G__14576,G__14577) : hoplon.core.table.call(null,G__14575,G__14576,G__14577));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14572,G__14573,G__14574) : hoplon.core.div.call(null,G__14572,G__14573,G__14574));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14556,G__14557,G__14558,G__14559) : hoplon.core.div.call(null,G__14556,G__14557,G__14558,G__14559));
})();
var G__14540 = (function (){var con__13846__auto__ = (new cljs.core.Delay(((function (G__14534,G__14535,G__14536,G__14537,G__14538,G__14539){
return (function (){
var G__14584 = cljs.core.cst$kw$class;
var G__14585 = "debug";
var G__14586 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("State") : hoplon.core.h4.call(null,"State"));
var G__14587 = (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.state_str) : hoplon.core.pre.call(null,hoplon.app_pages._index_DOT_html.state_str));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__14584,G__14585,G__14586,G__14587) : hoplon.core.div.call(null,G__14584,G__14585,G__14586,G__14587));
});})(G__14534,G__14535,G__14536,G__14537,G__14538,G__14539))
,null));
var alt__13847__auto__ = (new cljs.core.Delay(((function (con__13846__auto__,G__14534,G__14535,G__14536,G__14537,G__14538,G__14539){
return (function (){
return null;
});})(con__13846__auto__,G__14534,G__14535,G__14536,G__14537,G__14538,G__14539))
,null));
var tpl__13848__auto__ = ((function (con__13846__auto__,alt__13847__auto__,G__14534,G__14535,G__14536,G__14537,G__14538,G__14539){
return (function (p__13849__auto__){
return cljs.core.deref((function (){var or__3949__auto__ = (cljs.core.truth_(p__13849__auto__)?con__13846__auto__:alt__13847__auto__);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__13846__auto__,alt__13847__auto__,G__14534,G__14535,G__14536,G__14537,G__14538,G__14539))
;
var fexpr__14588 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__13848__auto__);
return (fexpr__14588.cljs$core$IFn$_invoke$arity$1 ? fexpr__14588.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.god) : fexpr__14588.call(null,hoplon.app_pages._index_DOT_html.god));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$7(G__14534,G__14535,G__14536,G__14537,G__14538,G__14539,G__14540) : hoplon.core.body.call(null,G__14534,G__14535,G__14536,G__14537,G__14538,G__14539,G__14540));
})()], 0));
