// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__3922__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__7256 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__7262,p__7263){
var vec__7264 = p__7262;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7264,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7264,(1),null);
var vec__7267 = p__7263;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7267,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7267,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7256,(0),null);
var vec__7259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7256,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7259,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7259,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__7270 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__7270,"(","");
} else {
return G__7270;
}
})(),cljs.stacktrace.parse_int((function (){var G__7271 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__7271,")","");
} else {
return G__7271;
}
})()),cljs.stacktrace.parse_int((function (){var G__7272 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__7272,")","");
} else {
return G__7272;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__7273,file,p__7274){
var map__7275 = p__7273;
var map__7275__$1 = ((((!((map__7275 == null)))?(((((map__7275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7275):map__7275);
var repl_env = map__7275__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7275__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7275__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7275__$1,cljs.core.cst$kw$port);
var map__7276 = p__7274;
var map__7276__$1 = ((((!((map__7276 == null)))?(((((map__7276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7276):map__7276);
var opts = map__7276__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7276__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = host_port;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = (function (){var and__3911__auto__ = asset_path;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5533__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5533__auto__)){
var asset_root = temp__5533__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__7279 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7279,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7279,(1),null);
var vec__7282 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7282,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7282,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7282,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7287_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__7287_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7286_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__7286_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__7285_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__7285_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__7288 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7288,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7288,(1),null);
var vec__7291 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7291,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7291,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7291,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7296_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__7296_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7295_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__7295_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__7294_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__7294_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__7297 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7297,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7297,(1),null);
var vec__7300 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7300,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7300,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7300,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7305_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__7305_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7304_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7304_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__7303_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__7303_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__7306){
var map__7307 = p__7306;
var map__7307__$1 = ((((!((map__7307 == null)))?(((((map__7307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7307):map__7307);
var opts = map__7307__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7307__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__7307,map__7307__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var vec__7315 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7315,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7315,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__7318 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7318,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7318,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__3911__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__7307,map__7307__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__7321){
var map__7322 = p__7321;
var map__7322__$1 = ((((!((map__7322 == null)))?(((((map__7322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7322):map__7322);
var opts = map__7322__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7322__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__7322,map__7322__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__7330 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7330,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7330,(1),null);
var vec__7333 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7333,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7333,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__3911__auto__ = line_part;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__3911__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__7322,map__7322__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__7336){
var map__7337 = p__7336;
var map__7337__$1 = ((((!((map__7337 == null)))?(((((map__7337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7337):map__7337);
var opts = map__7337__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__7337,map__7337__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__3911__auto__ = x;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__3911__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});})(map__7337,map__7337__$1,opts,output_dir))
;
var process_frame = ((function (map__7337,map__7337__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__7346 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(1),null);
var vec__7349 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7349,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7349,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7349,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__7352 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__7352,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__7352;
}
})():file_part),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,parse_source_loc_info(line_part),cljs.core.cst$kw$column,parse_source_loc_info(col_part)], null);
}
}
});})(map__7337,map__7337__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__7353_SHARP_){
return (p1__7353_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__7354_SHARP_,p2__7355_SHARP_){
return (p1__7354_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__7354_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__7355_SHARP_) : p1__7354_SHARP_.call(null,p2__7355_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5533__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5533__auto__)){
var columns = temp__5533__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__7356,sms,opts){
var map__7357 = p__7356;
var map__7357__$1 = ((((!((map__7357 == null)))?(((((map__7357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7357):map__7357);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7357__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7357__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7357__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7357__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__7359 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7359,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7359,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7359,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__7365 = arguments.length;
switch (G__7365) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__7362_SHARP_){
return cljs.stacktrace.mapped_frame(p1__7362_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__7363_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__7363_SHARP_,cljs.core.cst$kw$call);
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__7368 = arguments.length;
switch (G__7368) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_7369_7380 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_7370_7381 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_7369_7380,_STAR_print_fn_STAR_7370_7381,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_7369_7380,_STAR_print_fn_STAR_7370_7381,sb__4430__auto__))
;

try{var seq__7371_7382 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__7372_7383 = null;
var count__7373_7384 = (0);
var i__7374_7385 = (0);
while(true){
if((i__7374_7385 < count__7373_7384)){
var map__7375_7386 = chunk__7372_7383.cljs$core$IIndexed$_nth$arity$2(null,i__7374_7385);
var map__7375_7387__$1 = ((((!((map__7375_7386 == null)))?(((((map__7375_7386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7375_7386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7375_7386):map__7375_7386);
var function_7388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7375_7387__$1,cljs.core.cst$kw$function);
var file_7389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7375_7387__$1,cljs.core.cst$kw$file);
var line_7390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7375_7387__$1,cljs.core.cst$kw$line);
var column_7391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7375_7387__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_7388)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_7388)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7389),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_7390)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7390)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_7391)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_7391)].join(''):null)),")"].join('')], 0));


var G__7392 = seq__7371_7382;
var G__7393 = chunk__7372_7383;
var G__7394 = count__7373_7384;
var G__7395 = (i__7374_7385 + (1));
seq__7371_7382 = G__7392;
chunk__7372_7383 = G__7393;
count__7373_7384 = G__7394;
i__7374_7385 = G__7395;
continue;
} else {
var temp__5535__auto___7396 = cljs.core.seq(seq__7371_7382);
if(temp__5535__auto___7396){
var seq__7371_7397__$1 = temp__5535__auto___7396;
if(cljs.core.chunked_seq_QMARK_(seq__7371_7397__$1)){
var c__4319__auto___7398 = cljs.core.chunk_first(seq__7371_7397__$1);
var G__7399 = cljs.core.chunk_rest(seq__7371_7397__$1);
var G__7400 = c__4319__auto___7398;
var G__7401 = cljs.core.count(c__4319__auto___7398);
var G__7402 = (0);
seq__7371_7382 = G__7399;
chunk__7372_7383 = G__7400;
count__7373_7384 = G__7401;
i__7374_7385 = G__7402;
continue;
} else {
var map__7377_7403 = cljs.core.first(seq__7371_7397__$1);
var map__7377_7404__$1 = ((((!((map__7377_7403 == null)))?(((((map__7377_7403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7377_7403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7377_7403):map__7377_7403);
var function_7405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7377_7404__$1,cljs.core.cst$kw$function);
var file_7406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7377_7404__$1,cljs.core.cst$kw$file);
var line_7407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7377_7404__$1,cljs.core.cst$kw$line);
var column_7408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7377_7404__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_7405)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_7405)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7406),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_7407)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7407)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_7408)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_7408)].join(''):null)),")"].join('')], 0));


var G__7409 = cljs.core.next(seq__7371_7397__$1);
var G__7410 = null;
var G__7411 = (0);
var G__7412 = (0);
seq__7371_7382 = G__7409;
chunk__7372_7383 = G__7410;
count__7373_7384 = G__7411;
i__7374_7385 = G__7412;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7370_7381;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_7369_7380;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

