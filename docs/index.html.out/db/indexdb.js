// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('db.indexdb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clicker.util');
db.indexdb.get_target_result = (function db$indexdb$get_target_result(e){
if(cljs.core.truth_(e)){
return e.target.result;
} else {
return null;
}
});
db.indexdb.handle_callback_chan = (function db$indexdb$handle_callback_chan(ch,request,topic){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$topic,topic,cljs.core.cst$kw$db,db.indexdb.get_target_result(e)], null));
});
});
/**
 * Request a reference to a db. If an upgrade is needed, executes body within the version change transaction.
 *   Returns a tuple with the request, and a subscribable chan, that publishes to the following topics on events:
 *   - :success
 *   - :error
 */
db.indexdb.request_db = (function db$indexdb$request_db(name,version,schema_fn){
var db_callback_chan_SHARP_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var publication_chan_SHARP_ = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(db_callback_chan_SHARP_,cljs.core.cst$kw$topic);
var request_SHARP_ = indexedDB.open(name,version);
request_SHARP_.onupgradeneeded = ((function (db_callback_chan_SHARP_,publication_chan_SHARP_,request_SHARP_){
return (function (ev_SHARP_){
var db_ref = db.indexdb.get_target_result(ev_SHARP_);
return (schema_fn.cljs$core$IFn$_invoke$arity$1 ? schema_fn.cljs$core$IFn$_invoke$arity$1(db_ref) : schema_fn.call(null,db_ref));
});})(db_callback_chan_SHARP_,publication_chan_SHARP_,request_SHARP_))
;

request_SHARP_.onsuccess = db.indexdb.handle_callback_chan(db_callback_chan_SHARP_,request_SHARP_,cljs.core.cst$kw$success);

request_SHARP_.onerror = db.indexdb.handle_callback_chan(db_callback_chan_SHARP_,request_SHARP_,cljs.core.cst$kw$error);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_SHARP_,publication_chan_SHARP_], null);
});
var ret__4565__auto___9287 = (function (){
/**
 * Like doseq, but iterates over the bound cursor.
 *   Repeatedbly executes body for each item returned by cursor.
 *   Returns nil
 */
db.indexdb.docursor = (function db$indexdb$docursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9288 = arguments.length;
var i__4532__auto___9289 = (0);
while(true){
if((i__4532__auto___9289 < len__4531__auto___9288)){
args__4534__auto__.push((arguments[i__4532__auto___9289]));

var G__9290 = (i__4532__auto___9289 + (1));
i__4532__auto___9289 = G__9290;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return db.indexdb.docursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

db.indexdb.docursor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9283,body){
var vec__9284 = p__9283;
var bind_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9284,(0),null);
var cursor_req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9284,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$step__9275__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,bind_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$iter_DASH_cur__9276__auto__,null,(1),null)),(new cljs.core.List(null,cursor_req,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_onsuccess,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$iter_DASH_cur__9276__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ev__9277__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cur__9278__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$db$indexdb_SLASH_get_DASH_target_DASH_result,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ev__9277__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$step__9275__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cur__9278__auto__,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$continue,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cur__9278__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

db.indexdb.docursor.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
db.indexdb.docursor.cljs$lang$applyTo = (function (seq9279){
var G__9280 = cljs.core.first(seq9279);
var seq9279__$1 = cljs.core.next(seq9279);
var G__9281 = cljs.core.first(seq9279__$1);
var seq9279__$2 = cljs.core.next(seq9279__$1);
var G__9282 = cljs.core.first(seq9279__$2);
var seq9279__$3 = cljs.core.next(seq9279__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9280,G__9281,G__9282,seq9279__$3);
});

return null;
})()
;
db.indexdb.docursor.cljs$lang$macro = true;

db.indexdb.init_indexedDb_var = (function db$indexdb$init_indexedDb_var(){
window.indexedDB = (function (){var or__3949__auto__ = window.indexedDB;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.mozIndexedDB;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.webkitIndexedDB;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msIndexedDB;
}
}
}
})();

return window.IDBKeyRange = (function (){var or__3949__auto__ = window.IDBKeyRange;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitIDBKeyRange;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return window.msIDBKeyRange;
}
}
})();
});
db.indexdb.log = (function db$indexdb$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9293 = arguments.length;
var i__4532__auto___9294 = (0);
while(true){
if((i__4532__auto___9294 < len__4531__auto___9293)){
args__4534__auto__.push((arguments[i__4532__auto___9294]));

var G__9295 = (i__4532__auto___9294 + (1));
i__4532__auto___9294 = G__9295;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return db.indexdb.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

db.indexdb.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,v,text):v);
console.log(vs);

return v;
});

db.indexdb.log.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
db.indexdb.log.cljs$lang$applyTo = (function (seq9291){
var G__9292 = cljs.core.first(seq9291);
var seq9291__$1 = cljs.core.next(seq9291);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9292,seq9291__$1);
});

/**
 * Can we apply name on o?
 */
db.indexdb.has_name_QMARK_ = (function db$indexdb$has_name_QMARK_(o){
return (((o instanceof cljs.core.Symbol)) || (typeof o === 'string') || ((o instanceof cljs.core.Keyword)));
});
db.indexdb.error_callback = (function db$indexdb$error_callback(e){
db.indexdb.log("error occurred");

return db.indexdb.log(e);
});
db.indexdb.delete_store = (function db$indexdb$delete_store(db__$1,name){
if(cljs.core.truth_(db__$1.objectStoreNames.contains(name))){
return db__$1.deleteObjectStore(name);
} else {
return null;
}
});
db.indexdb.key_path__GT_str = (function db$indexdb$key_path__GT_str(kp){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9296_SHARP_){
if(cljs.core.truth_(db.indexdb.has_name_QMARK_(p1__9296_SHARP_))){
return cljs.core.name(p1__9296_SHARP_);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9296_SHARP_)].join('');
}
}),((cljs.core.vector_QMARK_(kp))?kp:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kp], null))));
});
/**
 * If the requested store does not exist, creates it in the given db.
 *   Returns the store reference.
 *   Takes the following options:
 *   - :key-path - the path to the key for the objects in the store, either as a single key name, or as a vector that describes a path to the key
 *   - :auto-increment - does the object store have a key generator?
 */
db.indexdb.create_store = (function db$indexdb$create_store(db__$1,store_name,opts){
var key_path = cljs.core.cst$kw$key_DASH_path.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY);
var key_path_str = db.indexdb.key_path__GT_str(key_path);
if(cljs.core.empty_QMARK_(key_path_str)){
return db__$1.createObjectStore(store_name,({"autoIncrement": cljs.core.cst$kw$auto_DASH_increment.cljs$core$IFn$_invoke$arity$1(opts)}));
} else {
return db__$1.createObjectStore(store_name,({"keyPath": key_path_str, "autoIncrement": cljs.core.cst$kw$auto_DASH_increment.cljs$core$IFn$_invoke$arity$1(opts)}));
}
});
db.indexdb.delete_and_create_store = (function db$indexdb$delete_and_create_store(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9303 = arguments.length;
var i__4532__auto___9304 = (0);
while(true){
if((i__4532__auto___9304 < len__4531__auto___9303)){
args__4534__auto__.push((arguments[i__4532__auto___9304]));

var G__9305 = (i__4532__auto___9304 + (1));
i__4532__auto___9304 = G__9305;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return db.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

db.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,name,p__9300){
var map__9301 = p__9300;
var map__9301__$1 = ((((!((map__9301 == null)))?(((((map__9301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9301):map__9301);
var opts = map__9301__$1;
db.indexdb.delete_store(db__$1,name);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(db.indexdb.create_store,db__$1,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts));
});

db.indexdb.delete_and_create_store.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
db.indexdb.delete_and_create_store.cljs$lang$applyTo = (function (seq9297){
var G__9298 = cljs.core.first(seq9297);
var seq9297__$1 = cljs.core.next(seq9297);
var G__9299 = cljs.core.first(seq9297__$1);
var seq9297__$2 = cljs.core.next(seq9297__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9298,G__9299,seq9297__$2);
});

db.indexdb.create_index = (function db$indexdb$create_index(store,name,field,opts){
return store.createIndex(name,field,cljs.core.clj__GT_js(opts));
});
/**
 * Perform a an action that requires read write access to the given store. Returns a publication
 *   for subscribing to either a success or error topic.
 */
db.indexdb.do_read_write_store_action = (function db$indexdb$do_read_write_store_action(db__$1,store_name,store_action_fn,success_fn,error_fn){
if(cljs.core.truth_(db__$1)){
var tx = db__$1.transaction(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),"readwrite");
var store = tx.objectStore(store_name);
var request = (store_action_fn.cljs$core$IFn$_invoke$arity$1 ? store_action_fn.cljs$core$IFn$_invoke$arity$1(store) : store_action_fn.call(null,store));
request.onsuccess = ((function (tx,store,request){
return (function (e){
var G__9306 = db.indexdb.get_target_result(e);
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(G__9306) : success_fn.call(null,G__9306));
});})(tx,store,request))
;

return request.onerror = ((function (tx,store,request){
return (function (e){
var G__9307 = db.indexdb.get_target_result(e);
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__9307) : error_fn.call(null,G__9307));
});})(tx,store,request))
;
} else {
return null;
}
});
/**
 * Add the given item to the given store. The item should be a clojure construct, and will be converted to a
 *   javascript object prior to being stored. Returns a pub that can be used to subscribe to the following topics:
 *   - :success
 *   - :error
 */
db.indexdb.put_item = (function db$indexdb$put_item(db__$1,store_name,item,success_fn,error_fn){
var item__$1 = cljs.core.clj__GT_js(item);
return db.indexdb.do_read_write_store_action(db__$1,store_name,((function (item__$1){
return (function (p1__9308_SHARP_){
return p1__9308_SHARP_.put(item__$1);
});})(item__$1))
,success_fn,error_fn);
});
/**
 * Remove the item from the given store that matches the item-key value.
 *   Returns a pub that can be used to subscribe to the following topics:
 *   - :success
 *   - :error
 */
db.indexdb.remove_item = (function db$indexdb$remove_item(db__$1,store_name,item_key,success_fn,error_fn){
return db.indexdb.do_read_write_store_action(db__$1,store_name,(function (p1__9309_SHARP_){
return p1__9309_SHARP_.delete(item_key);
}),success_fn,error_fn);
});
db.indexdb.make_rec_acc_fn = (function db$indexdb$make_rec_acc_fn(acc,request,result_ch,keywordize_keys_QMARK_){
return (function (e){
var temp__5455__auto__ = db.indexdb.get_target_result(e);
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
request.onsuccess = (function (){var G__9310 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cursor.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0)));
var G__9311 = request;
var G__9312 = result_ch;
var G__9313 = keywordize_keys_QMARK_;
return (db.indexdb.make_rec_acc_fn.cljs$core$IFn$_invoke$arity$4 ? db.indexdb.make_rec_acc_fn.cljs$core$IFn$_invoke$arity$4(G__9310,G__9311,G__9312,G__9313) : db.indexdb.make_rec_acc_fn.call(null,G__9310,G__9311,G__9312,G__9313));
})();

return cursor.continue();
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_ch,acc);
}
});
});
db.indexdb.make_tx = (function db$indexdb$make_tx(var_args){
var G__9315 = arguments.length;
switch (G__9315) {
case 2:
return db.indexdb.make_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return db.indexdb.make_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

db.indexdb.make_tx.cljs$core$IFn$_invoke$arity$2 = (function (db__$1,store_name){
return db.indexdb.make_tx.cljs$core$IFn$_invoke$arity$3(db__$1,store_name,true);
});

db.indexdb.make_tx.cljs$core$IFn$_invoke$arity$3 = (function (db__$1,store_name,readwrite_QMARK_){
return db__$1.transaction(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),(cljs.core.truth_(readwrite_QMARK_)?"readwrite":"readonly"));
});

db.indexdb.make_tx.cljs$lang$maxFixedArity = 3;

db.indexdb.get_tx_store = (function db$indexdb$get_tx_store(db__$1,store_name){
var tx = db.indexdb.make_tx.cljs$core$IFn$_invoke$arity$2(db__$1,store_name);
return tx.objectStore(store_name);
});
db.indexdb.make_range = (function db$indexdb$make_range(var_args){
var G__9318 = arguments.length;
switch (G__9318) {
case 1:
return db.indexdb.make_range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return db.indexdb.make_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return db.indexdb.make_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

db.indexdb.make_range.cljs$core$IFn$_invoke$arity$1 = (function (only){
return IDBKeyRange.only(only);
});

db.indexdb.make_range.cljs$core$IFn$_invoke$arity$3 = (function (lower_QMARK_,bound,open_QMARK_){
if(cljs.core.truth_(lower_QMARK_)){
return IDBKeyRange.lowerBound(bound,open_QMARK_);
} else {
return IDBKeyRange.upperBound(bound,open_QMARK_);
}
});

db.indexdb.make_range.cljs$core$IFn$_invoke$arity$4 = (function (lower,upper,open_lower_QMARK_,open_upper_QMARK_){
return IDBKeyRange.bound(lower,upper,open_lower_QMARK_,open_upper_QMARK_);
});

db.indexdb.make_range.cljs$lang$maxFixedArity = 4;

db.indexdb.open_cursor = (function db$indexdb$open_cursor(var_args){
var G__9321 = arguments.length;
switch (G__9321) {
case 1:
return db.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return db.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

db.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return store_or_index.openCursor();
});

db.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,range){
return store_or_index.openCursor(range);
});

db.indexdb.open_cursor.cljs$lang$maxFixedArity = 2;

db.indexdb.get_index = (function db$indexdb$get_index(store,index_name){
return store.index(index_name);
});
/**
 * Get all items in a store, starting at the given key. Returns a chan that will receive the results
 */
db.indexdb.get_all_from = (function db$indexdb$get_all_from(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9330 = arguments.length;
var i__4532__auto___9331 = (0);
while(true){
if((i__4532__auto___9331 < len__4531__auto___9330)){
args__4534__auto__.push((arguments[i__4532__auto___9331]));

var G__9332 = (i__4532__auto___9331 + (1));
i__4532__auto___9331 = G__9332;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return db.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

db.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,store_name,initial_key,p__9327){
var map__9328 = p__9327;
var map__9328__$1 = ((((!((map__9328 == null)))?(((((map__9328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9328):map__9328);
var opts = map__9328__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9328__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db__$1)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var store = db.indexdb.get_tx_store(db__$1,store_name);
var range = db.indexdb.make_range.cljs$core$IFn$_invoke$arity$3(true,initial_key,false);
var request = db.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2(store,range);
request.onsuccess = db.indexdb.make_rec_acc_fn(cljs.core.PersistentVector.EMPTY,request,result_ch,keywordize_keys);

return result_ch;
} else {
return null;
}
});

db.indexdb.get_all_from.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
db.indexdb.get_all_from.cljs$lang$applyTo = (function (seq9323){
var G__9324 = cljs.core.first(seq9323);
var seq9323__$1 = cljs.core.next(seq9323);
var G__9325 = cljs.core.first(seq9323__$1);
var seq9323__$2 = cljs.core.next(seq9323__$1);
var G__9326 = cljs.core.first(seq9323__$2);
var seq9323__$3 = cljs.core.next(seq9323__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9324,G__9325,G__9326,seq9323__$3);
});

/**
 * Get all items in a store, returning a chan that will have the values put on it once available.
 */
db.indexdb.get_all = (function db$indexdb$get_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9339 = arguments.length;
var i__4532__auto___9340 = (0);
while(true){
if((i__4532__auto___9340 < len__4531__auto___9339)){
args__4534__auto__.push((arguments[i__4532__auto___9340]));

var G__9341 = (i__4532__auto___9340 + (1));
i__4532__auto___9340 = G__9341;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return db.indexdb.get_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

db.indexdb.get_all.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,store_name,p__9336){
var map__9337 = p__9336;
var map__9337__$1 = ((((!((map__9337 == null)))?(((((map__9337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9337):map__9337);
var opts = map__9337__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9337__$1,cljs.core.cst$kw$keywordize_DASH_keys);
return db.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic(db__$1,store_name,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
});

db.indexdb.get_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
db.indexdb.get_all.cljs$lang$applyTo = (function (seq9333){
var G__9334 = cljs.core.first(seq9333);
var seq9333__$1 = cljs.core.next(seq9333);
var G__9335 = cljs.core.first(seq9333__$1);
var seq9333__$2 = cljs.core.next(seq9333__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9334,G__9335,seq9333__$2);
});

/**
 * Search for an item in the given object store by the configured key.
 *   Returns a chan that will have the result put on it. If no items are found, puts false on the chan.
 */
db.indexdb.get_by_key = (function db$indexdb$get_by_key(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9349 = arguments.length;
var i__4532__auto___9350 = (0);
while(true){
if((i__4532__auto___9350 < len__4531__auto___9349)){
args__4534__auto__.push((arguments[i__4532__auto___9350]));

var G__9351 = (i__4532__auto___9350 + (1));
i__4532__auto___9350 = G__9351;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return db.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

db.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,store_name,key,p__9346){
var map__9347 = p__9346;
var map__9347__$1 = ((((!((map__9347 == null)))?(((((map__9347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9347):map__9347);
var opts = map__9347__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9347__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db__$1)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var store = db.indexdb.get_tx_store(db__$1,store_name);
var request = store.get(key);
request.onsuccess = ((function (result_ch,store,request,map__9347,map__9347__$1,opts,keywordize_keys){
return (function (e){
var result = (function (){var or__3949__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(db.indexdb.get_target_result(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_ch,result);
});})(result_ch,store,request,map__9347,map__9347__$1,opts,keywordize_keys))
;

return result_ch;
} else {
return null;
}
});

db.indexdb.get_by_key.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
db.indexdb.get_by_key.cljs$lang$applyTo = (function (seq9342){
var G__9343 = cljs.core.first(seq9342);
var seq9342__$1 = cljs.core.next(seq9342);
var G__9344 = cljs.core.first(seq9342__$1);
var seq9342__$2 = cljs.core.next(seq9342__$1);
var G__9345 = cljs.core.first(seq9342__$2);
var seq9342__$3 = cljs.core.next(seq9342__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9343,G__9344,G__9345,seq9342__$3);
});

/**
 * Search for items in the given object store by the given range in the given index.
 *   Returns a chan that will have the results as a seq put on it.
 */
db.indexdb.get_by_index_range = (function db$indexdb$get_by_index_range(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9360 = arguments.length;
var i__4532__auto___9361 = (0);
while(true){
if((i__4532__auto___9361 < len__4531__auto___9360)){
args__4534__auto__.push((arguments[i__4532__auto___9361]));

var G__9362 = (i__4532__auto___9361 + (1));
i__4532__auto___9361 = G__9362;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return db.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

db.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,store_name,index_name,range,p__9357){
var map__9358 = p__9357;
var map__9358__$1 = ((((!((map__9358 == null)))?(((((map__9358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9358):map__9358);
var opts = map__9358__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9358__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db__$1)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var store = db.indexdb.get_tx_store(db__$1,store_name);
var index = db.indexdb.get_index(store,index_name);
var request = db.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2(index,range);
request.onsuccess = db.indexdb.make_rec_acc_fn(cljs.core.PersistentVector.EMPTY,request,result_ch,keywordize_keys);

return result_ch;
} else {
return null;
}
});

db.indexdb.get_by_index_range.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
db.indexdb.get_by_index_range.cljs$lang$applyTo = (function (seq9352){
var G__9353 = cljs.core.first(seq9352);
var seq9352__$1 = cljs.core.next(seq9352);
var G__9354 = cljs.core.first(seq9352__$1);
var seq9352__$2 = cljs.core.next(seq9352__$1);
var G__9355 = cljs.core.first(seq9352__$2);
var seq9352__$3 = cljs.core.next(seq9352__$2);
var G__9356 = cljs.core.first(seq9352__$3);
var seq9352__$4 = cljs.core.next(seq9352__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9353,G__9354,G__9355,G__9356,seq9352__$4);
});

/**
 * Search for items in the given object store by the given value in the given index.
 *   Returns a chan that will have the results as a seq put on it.
 */
db.indexdb.get_by_index = (function db$indexdb$get_by_index(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9371 = arguments.length;
var i__4532__auto___9372 = (0);
while(true){
if((i__4532__auto___9372 < len__4531__auto___9371)){
args__4534__auto__.push((arguments[i__4532__auto___9372]));

var G__9373 = (i__4532__auto___9372 + (1));
i__4532__auto___9372 = G__9373;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return db.indexdb.get_by_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

db.indexdb.get_by_index.cljs$core$IFn$_invoke$arity$variadic = (function (db__$1,store_name,index_name,value,p__9368){
var map__9369 = p__9368;
var map__9369__$1 = ((((!((map__9369 == null)))?(((((map__9369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9369):map__9369);
var opts = map__9369__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9369__$1,cljs.core.cst$kw$keywordize_DASH_keys);
return db.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic(db__$1,store_name,index_name,db.indexdb.make_range.cljs$core$IFn$_invoke$arity$1(value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
});

db.indexdb.get_by_index.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
db.indexdb.get_by_index.cljs$lang$applyTo = (function (seq9363){
var G__9364 = cljs.core.first(seq9363);
var seq9363__$1 = cljs.core.next(seq9363);
var G__9365 = cljs.core.first(seq9363__$1);
var seq9363__$2 = cljs.core.next(seq9363__$1);
var G__9366 = cljs.core.first(seq9363__$2);
var seq9363__$3 = cljs.core.next(seq9363__$2);
var G__9367 = cljs.core.first(seq9363__$3);
var seq9363__$4 = cljs.core.next(seq9363__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9364,G__9365,G__9366,G__9367,seq9363__$4);
});

