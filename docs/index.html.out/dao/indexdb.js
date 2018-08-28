// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('dao.indexdb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clicker.util');
dao.indexdb.get_target_result = (function dao$indexdb$get_target_result(e){
if(cljs.core.truth_(e)){
return e.target.result;
} else {
return null;
}
});
dao.indexdb.handle_callback_chan = (function dao$indexdb$handle_callback_chan(ch,request,topic){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$topic,topic,cljs.core.cst$kw$db,dao.indexdb.get_target_result(e)], null));
});
});
/**
 * Request a reference to a db. If an upgrade is needed, executes body within the version change transaction.
 *   Returns a tuple with the request, and a subscribable chan, that publishes to the following topics on events:
 *   - :success
 *   - :error
 */
dao.indexdb.request_db = (function dao$indexdb$request_db(name,version,schema_fn){
var db_callback_chan_SHARP_ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var publication_chan_SHARP_ = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(db_callback_chan_SHARP_,cljs.core.cst$kw$topic);
var request_SHARP_ = indexedDB.open(name,version);
request_SHARP_.onupgradeneeded = ((function (db_callback_chan_SHARP_,publication_chan_SHARP_,request_SHARP_){
return (function (ev_SHARP_){
var db_ref = dao.indexdb.get_target_result(ev_SHARP_);
return (schema_fn.cljs$core$IFn$_invoke$arity$1 ? schema_fn.cljs$core$IFn$_invoke$arity$1(db_ref) : schema_fn.call(null,db_ref));
});})(db_callback_chan_SHARP_,publication_chan_SHARP_,request_SHARP_))
;

request_SHARP_.onsuccess = dao.indexdb.handle_callback_chan(db_callback_chan_SHARP_,request_SHARP_,cljs.core.cst$kw$success);

request_SHARP_.onerror = dao.indexdb.handle_callback_chan(db_callback_chan_SHARP_,request_SHARP_,cljs.core.cst$kw$error);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_SHARP_,publication_chan_SHARP_], null);
});
var ret__4565__auto___8959 = (function (){
/**
 * Like doseq, but iterates over the bound cursor.
 *   Repeatedbly executes body for each item returned by cursor.
 *   Returns nil
 */
dao.indexdb.docursor = (function dao$indexdb$docursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8960 = arguments.length;
var i__4532__auto___8961 = (0);
while(true){
if((i__4532__auto___8961 < len__4531__auto___8960)){
args__4534__auto__.push((arguments[i__4532__auto___8961]));

var G__8962 = (i__4532__auto___8961 + (1));
i__4532__auto___8961 = G__8962;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return dao.indexdb.docursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

dao.indexdb.docursor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8955,body){
var vec__8956 = p__8955;
var bind_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8956,(0),null);
var cursor_req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8956,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$step__8947__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,bind_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$iter_DASH_cur__8948__auto__,null,(1),null)),(new cljs.core.List(null,cursor_req,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_onsuccess,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$iter_DASH_cur__8948__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ev__8949__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cur__8950__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$dao$indexdb_SLASH_get_DASH_target_DASH_result,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ev__8949__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$step__8947__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cur__8950__auto__,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$continue,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cur__8950__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

dao.indexdb.docursor.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
dao.indexdb.docursor.cljs$lang$applyTo = (function (seq8951){
var G__8952 = cljs.core.first(seq8951);
var seq8951__$1 = cljs.core.next(seq8951);
var G__8953 = cljs.core.first(seq8951__$1);
var seq8951__$2 = cljs.core.next(seq8951__$1);
var G__8954 = cljs.core.first(seq8951__$2);
var seq8951__$3 = cljs.core.next(seq8951__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8952,G__8953,G__8954,seq8951__$3);
});

return null;
})()
;
dao.indexdb.docursor.cljs$lang$macro = true;

dao.indexdb.init_indexedDb_var = (function dao$indexdb$init_indexedDb_var(){
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
dao.indexdb.log = (function dao$indexdb$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8965 = arguments.length;
var i__4532__auto___8966 = (0);
while(true){
if((i__4532__auto___8966 < len__4531__auto___8965)){
args__4534__auto__.push((arguments[i__4532__auto___8966]));

var G__8967 = (i__4532__auto___8966 + (1));
i__4532__auto___8966 = G__8967;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return dao.indexdb.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

dao.indexdb.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,v,text):v);
console.log(vs);

return v;
});

dao.indexdb.log.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dao.indexdb.log.cljs$lang$applyTo = (function (seq8963){
var G__8964 = cljs.core.first(seq8963);
var seq8963__$1 = cljs.core.next(seq8963);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8964,seq8963__$1);
});

/**
 * Can we apply name on o?
 */
dao.indexdb.has_name_QMARK_ = (function dao$indexdb$has_name_QMARK_(o){
return (((o instanceof cljs.core.Symbol)) || (typeof o === 'string') || ((o instanceof cljs.core.Keyword)));
});
dao.indexdb.error_callback = (function dao$indexdb$error_callback(e){
dao.indexdb.log("error occurred");

return dao.indexdb.log(e);
});
dao.indexdb.delete_store = (function dao$indexdb$delete_store(db,name){
if(cljs.core.truth_(db.objectStoreNames.contains(name))){
return db.deleteObjectStore(name);
} else {
return null;
}
});
dao.indexdb.key_path__GT_str = (function dao$indexdb$key_path__GT_str(kp){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8968_SHARP_){
if(cljs.core.truth_(dao.indexdb.has_name_QMARK_(p1__8968_SHARP_))){
return cljs.core.name(p1__8968_SHARP_);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8968_SHARP_)].join('');
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
dao.indexdb.create_store = (function dao$indexdb$create_store(db,store_name,opts){
var key_path = cljs.core.cst$kw$key_DASH_path.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY);
var key_path_str = dao.indexdb.key_path__GT_str(key_path);
if(cljs.core.empty_QMARK_(key_path_str)){
return db.createObjectStore(store_name,({"autoIncrement": cljs.core.cst$kw$auto_DASH_increment.cljs$core$IFn$_invoke$arity$1(opts)}));
} else {
return db.createObjectStore(store_name,({"keyPath": key_path_str, "autoIncrement": cljs.core.cst$kw$auto_DASH_increment.cljs$core$IFn$_invoke$arity$1(opts)}));
}
});
dao.indexdb.delete_and_create_store = (function dao$indexdb$delete_and_create_store(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8975 = arguments.length;
var i__4532__auto___8976 = (0);
while(true){
if((i__4532__auto___8976 < len__4531__auto___8975)){
args__4534__auto__.push((arguments[i__4532__auto___8976]));

var G__8977 = (i__4532__auto___8976 + (1));
i__4532__auto___8976 = G__8977;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,p__8972){
var map__8973 = p__8972;
var map__8973__$1 = ((((!((map__8973 == null)))?(((((map__8973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8973):map__8973);
var opts = map__8973__$1;
dao.indexdb.delete_store(db,name);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dao.indexdb.create_store,db,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts));
});

dao.indexdb.delete_and_create_store.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dao.indexdb.delete_and_create_store.cljs$lang$applyTo = (function (seq8969){
var G__8970 = cljs.core.first(seq8969);
var seq8969__$1 = cljs.core.next(seq8969);
var G__8971 = cljs.core.first(seq8969__$1);
var seq8969__$2 = cljs.core.next(seq8969__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8970,G__8971,seq8969__$2);
});

dao.indexdb.create_index = (function dao$indexdb$create_index(store,name,field,opts){
return store.createIndex(name,field,cljs.core.clj__GT_js(opts));
});
/**
 * Perform a an action that requires read write access to the given store. Returns a publication
 *   for subscribing to either a success or error topic.
 */
dao.indexdb.do_read_write_store_action = (function dao$indexdb$do_read_write_store_action(db,store_name,store_action_fn,success_fn,error_fn){
if(cljs.core.truth_(db)){
var tx = db.transaction(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),"readwrite");
var store = tx.objectStore(store_name);
var request = (store_action_fn.cljs$core$IFn$_invoke$arity$1 ? store_action_fn.cljs$core$IFn$_invoke$arity$1(store) : store_action_fn.call(null,store));
request.onsuccess = ((function (tx,store,request){
return (function (e){
var G__8978 = dao.indexdb.get_target_result(e);
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(G__8978) : success_fn.call(null,G__8978));
});})(tx,store,request))
;

return request.onerror = ((function (tx,store,request){
return (function (e){
var G__8979 = dao.indexdb.get_target_result(e);
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__8979) : error_fn.call(null,G__8979));
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
dao.indexdb.put_item = (function dao$indexdb$put_item(db,store_name,item,success_fn,error_fn){
var item__$1 = cljs.core.clj__GT_js(item);
return dao.indexdb.do_read_write_store_action(db,store_name,((function (item__$1){
return (function (p1__8980_SHARP_){
return p1__8980_SHARP_.put(item__$1);
});})(item__$1))
,success_fn,error_fn);
});
/**
 * Remove the item from the given store that matches the item-key value.
 *   Returns a pub that can be used to subscribe to the following topics:
 *   - :success
 *   - :error
 */
dao.indexdb.remove_item = (function dao$indexdb$remove_item(db,store_name,item_key,success_fn,error_fn){
return dao.indexdb.do_read_write_store_action(db,store_name,(function (p1__8981_SHARP_){
return p1__8981_SHARP_.delete(item_key);
}),success_fn,error_fn);
});
dao.indexdb.make_rec_acc_fn = (function dao$indexdb$make_rec_acc_fn(acc,request,result_ch,keywordize_keys_QMARK_){
return (function (e){
var temp__5455__auto__ = dao.indexdb.get_target_result(e);
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
request.onsuccess = (function (){var G__8982 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cursor.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0)));
var G__8983 = request;
var G__8984 = result_ch;
var G__8985 = keywordize_keys_QMARK_;
return (dao.indexdb.make_rec_acc_fn.cljs$core$IFn$_invoke$arity$4 ? dao.indexdb.make_rec_acc_fn.cljs$core$IFn$_invoke$arity$4(G__8982,G__8983,G__8984,G__8985) : dao.indexdb.make_rec_acc_fn.call(null,G__8982,G__8983,G__8984,G__8985));
})();

return cursor.continue();
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_ch,acc);
}
});
});
dao.indexdb.make_tx = (function dao$indexdb$make_tx(var_args){
var G__8987 = arguments.length;
switch (G__8987) {
case 2:
return dao.indexdb.make_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dao.indexdb.make_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dao.indexdb.make_tx.cljs$core$IFn$_invoke$arity$2 = (function (db,store_name){
return dao.indexdb.make_tx.cljs$core$IFn$_invoke$arity$3(db,store_name,true);
});

dao.indexdb.make_tx.cljs$core$IFn$_invoke$arity$3 = (function (db,store_name,readwrite_QMARK_){
return db.transaction(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),(cljs.core.truth_(readwrite_QMARK_)?"readwrite":"readonly"));
});

dao.indexdb.make_tx.cljs$lang$maxFixedArity = 3;

dao.indexdb.get_tx_store = (function dao$indexdb$get_tx_store(db,store_name){
var tx = dao.indexdb.make_tx.cljs$core$IFn$_invoke$arity$2(db,store_name);
return tx.objectStore(store_name);
});
dao.indexdb.make_range = (function dao$indexdb$make_range(var_args){
var G__8990 = arguments.length;
switch (G__8990) {
case 1:
return dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$1 = (function (only){
return IDBKeyRange.only(only);
});

dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$3 = (function (lower_QMARK_,bound,open_QMARK_){
if(cljs.core.truth_(lower_QMARK_)){
return IDBKeyRange.lowerBound(bound,open_QMARK_);
} else {
return IDBKeyRange.upperBound(bound,open_QMARK_);
}
});

dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$4 = (function (lower,upper,open_lower_QMARK_,open_upper_QMARK_){
return IDBKeyRange.bound(lower,upper,open_lower_QMARK_,open_upper_QMARK_);
});

dao.indexdb.make_range.cljs$lang$maxFixedArity = 4;

dao.indexdb.open_cursor = (function dao$indexdb$open_cursor(var_args){
var G__8993 = arguments.length;
switch (G__8993) {
case 1:
return dao.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dao.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dao.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return store_or_index.openCursor();
});

dao.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,range){
return store_or_index.openCursor(range);
});

dao.indexdb.open_cursor.cljs$lang$maxFixedArity = 2;

dao.indexdb.get_index = (function dao$indexdb$get_index(store,index_name){
return store.index(index_name);
});
/**
 * Get all items in a store, starting at the given key. Returns a chan that will receive the results
 */
dao.indexdb.get_all_from = (function dao$indexdb$get_all_from(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9002 = arguments.length;
var i__4532__auto___9003 = (0);
while(true){
if((i__4532__auto___9003 < len__4531__auto___9002)){
args__4534__auto__.push((arguments[i__4532__auto___9003]));

var G__9004 = (i__4532__auto___9003 + (1));
i__4532__auto___9003 = G__9004;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return dao.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

dao.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,initial_key,p__8999){
var map__9000 = p__8999;
var map__9000__$1 = ((((!((map__9000 == null)))?(((((map__9000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9000):map__9000);
var opts = map__9000__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9000__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var store = dao.indexdb.get_tx_store(db,store_name);
var range = dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$3(true,initial_key,false);
var request = dao.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2(store,range);
request.onsuccess = dao.indexdb.make_rec_acc_fn(cljs.core.PersistentVector.EMPTY,request,result_ch,keywordize_keys);

return result_ch;
} else {
return null;
}
});

dao.indexdb.get_all_from.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
dao.indexdb.get_all_from.cljs$lang$applyTo = (function (seq8995){
var G__8996 = cljs.core.first(seq8995);
var seq8995__$1 = cljs.core.next(seq8995);
var G__8997 = cljs.core.first(seq8995__$1);
var seq8995__$2 = cljs.core.next(seq8995__$1);
var G__8998 = cljs.core.first(seq8995__$2);
var seq8995__$3 = cljs.core.next(seq8995__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8996,G__8997,G__8998,seq8995__$3);
});

/**
 * Get all items in a store, returning a chan that will have the values put on it once available.
 */
dao.indexdb.get_all = (function dao$indexdb$get_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9011 = arguments.length;
var i__4532__auto___9012 = (0);
while(true){
if((i__4532__auto___9012 < len__4531__auto___9011)){
args__4534__auto__.push((arguments[i__4532__auto___9012]));

var G__9013 = (i__4532__auto___9012 + (1));
i__4532__auto___9012 = G__9013;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dao.indexdb.get_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dao.indexdb.get_all.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,p__9008){
var map__9009 = p__9008;
var map__9009__$1 = ((((!((map__9009 == null)))?(((((map__9009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9009):map__9009);
var opts = map__9009__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9009__$1,cljs.core.cst$kw$keywordize_DASH_keys);
return dao.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic(db,store_name,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
});

dao.indexdb.get_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dao.indexdb.get_all.cljs$lang$applyTo = (function (seq9005){
var G__9006 = cljs.core.first(seq9005);
var seq9005__$1 = cljs.core.next(seq9005);
var G__9007 = cljs.core.first(seq9005__$1);
var seq9005__$2 = cljs.core.next(seq9005__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9006,G__9007,seq9005__$2);
});

/**
 * Search for an item in the given object store by the configured key.
 *   Returns a chan that will have the result put on it. If no items are found, puts false on the chan.
 */
dao.indexdb.get_by_key = (function dao$indexdb$get_by_key(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9022 = arguments.length;
var i__4532__auto___9023 = (0);
while(true){
if((i__4532__auto___9023 < len__4531__auto___9022)){
args__4534__auto__.push((arguments[i__4532__auto___9023]));

var G__9024 = (i__4532__auto___9023 + (1));
i__4532__auto___9023 = G__9024;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,key,default_state,p__9019){
var map__9020 = p__9019;
var map__9020__$1 = ((((!((map__9020 == null)))?(((((map__9020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9020):map__9020);
var opts = map__9020__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9020__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var store = dao.indexdb.get_tx_store(db,store_name);
var request = store.get(key);
request.onsuccess = ((function (result_ch,store,request,map__9020,map__9020__$1,opts,keywordize_keys){
return (function (e){
var result = (function (){var or__3949__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dao.indexdb.get_target_result(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_state;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_ch,result);
});})(result_ch,store,request,map__9020,map__9020__$1,opts,keywordize_keys))
;

return result_ch;
} else {
return null;
}
});

dao.indexdb.get_by_key.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
dao.indexdb.get_by_key.cljs$lang$applyTo = (function (seq9014){
var G__9015 = cljs.core.first(seq9014);
var seq9014__$1 = cljs.core.next(seq9014);
var G__9016 = cljs.core.first(seq9014__$1);
var seq9014__$2 = cljs.core.next(seq9014__$1);
var G__9017 = cljs.core.first(seq9014__$2);
var seq9014__$3 = cljs.core.next(seq9014__$2);
var G__9018 = cljs.core.first(seq9014__$3);
var seq9014__$4 = cljs.core.next(seq9014__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9015,G__9016,G__9017,G__9018,seq9014__$4);
});

/**
 * Search for items in the given object store by the given range in the given index.
 *   Returns a chan that will have the results as a seq put on it.
 */
dao.indexdb.get_by_index_range = (function dao$indexdb$get_by_index_range(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9033 = arguments.length;
var i__4532__auto___9034 = (0);
while(true){
if((i__4532__auto___9034 < len__4531__auto___9033)){
args__4534__auto__.push((arguments[i__4532__auto___9034]));

var G__9035 = (i__4532__auto___9034 + (1));
i__4532__auto___9034 = G__9035;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return dao.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

dao.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,index_name,range,p__9030){
var map__9031 = p__9030;
var map__9031__$1 = ((((!((map__9031 == null)))?(((((map__9031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9031):map__9031);
var opts = map__9031__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9031__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var store = dao.indexdb.get_tx_store(db,store_name);
var index = dao.indexdb.get_index(store,index_name);
var request = dao.indexdb.open_cursor.cljs$core$IFn$_invoke$arity$2(index,range);
request.onsuccess = dao.indexdb.make_rec_acc_fn(cljs.core.PersistentVector.EMPTY,request,result_ch,keywordize_keys);

return result_ch;
} else {
return null;
}
});

dao.indexdb.get_by_index_range.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
dao.indexdb.get_by_index_range.cljs$lang$applyTo = (function (seq9025){
var G__9026 = cljs.core.first(seq9025);
var seq9025__$1 = cljs.core.next(seq9025);
var G__9027 = cljs.core.first(seq9025__$1);
var seq9025__$2 = cljs.core.next(seq9025__$1);
var G__9028 = cljs.core.first(seq9025__$2);
var seq9025__$3 = cljs.core.next(seq9025__$2);
var G__9029 = cljs.core.first(seq9025__$3);
var seq9025__$4 = cljs.core.next(seq9025__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9026,G__9027,G__9028,G__9029,seq9025__$4);
});

/**
 * Search for items in the given object store by the given value in the given index.
 *   Returns a chan that will have the results as a seq put on it.
 */
dao.indexdb.get_by_index = (function dao$indexdb$get_by_index(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9044 = arguments.length;
var i__4532__auto___9045 = (0);
while(true){
if((i__4532__auto___9045 < len__4531__auto___9044)){
args__4534__auto__.push((arguments[i__4532__auto___9045]));

var G__9046 = (i__4532__auto___9045 + (1));
i__4532__auto___9045 = G__9046;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return dao.indexdb.get_by_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

dao.indexdb.get_by_index.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,index_name,value,p__9041){
var map__9042 = p__9041;
var map__9042__$1 = ((((!((map__9042 == null)))?(((((map__9042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9042):map__9042);
var opts = map__9042__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9042__$1,cljs.core.cst$kw$keywordize_DASH_keys);
return dao.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic(db,store_name,index_name,dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$1(value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
});

dao.indexdb.get_by_index.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
dao.indexdb.get_by_index.cljs$lang$applyTo = (function (seq9036){
var G__9037 = cljs.core.first(seq9036);
var seq9036__$1 = cljs.core.next(seq9036);
var G__9038 = cljs.core.first(seq9036__$1);
var seq9036__$2 = cljs.core.next(seq9036__$1);
var G__9039 = cljs.core.first(seq9036__$2);
var seq9036__$3 = cljs.core.next(seq9036__$2);
var G__9040 = cljs.core.first(seq9036__$3);
var seq9036__$4 = cljs.core.next(seq9036__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9037,G__9038,G__9039,G__9040,seq9036__$4);
});

