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
var ret__4565__auto___14476 = (function (){
/**
 * Like doseq, but iterates over the bound cursor.
 *   Repeatedbly executes body for each item returned by cursor.
 *   Returns nil
 */
dao.indexdb.docursor = (function dao$indexdb$docursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14477 = arguments.length;
var i__4532__auto___14478 = (0);
while(true){
if((i__4532__auto___14478 < len__4531__auto___14477)){
args__4534__auto__.push((arguments[i__4532__auto___14478]));

var G__14479 = (i__4532__auto___14478 + (1));
i__4532__auto___14478 = G__14479;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return dao.indexdb.docursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

dao.indexdb.docursor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14472,body){
var vec__14473 = p__14472;
var bind_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14473,(0),null);
var cursor_req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14473,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$step__14464__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,bind_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$iter_DASH_cur__14465__auto__,null,(1),null)),(new cljs.core.List(null,cursor_req,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_onsuccess,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$iter_DASH_cur__14465__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ev__14466__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cur__14467__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$dao$indexdb_SLASH_get_DASH_target_DASH_result,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ev__14466__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$step__14464__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cur__14467__auto__,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$continue,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cur__14467__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

dao.indexdb.docursor.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
dao.indexdb.docursor.cljs$lang$applyTo = (function (seq14468){
var G__14469 = cljs.core.first(seq14468);
var seq14468__$1 = cljs.core.next(seq14468);
var G__14470 = cljs.core.first(seq14468__$1);
var seq14468__$2 = cljs.core.next(seq14468__$1);
var G__14471 = cljs.core.first(seq14468__$2);
var seq14468__$3 = cljs.core.next(seq14468__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14469,G__14470,G__14471,seq14468__$3);
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
var len__4531__auto___14482 = arguments.length;
var i__4532__auto___14483 = (0);
while(true){
if((i__4532__auto___14483 < len__4531__auto___14482)){
args__4534__auto__.push((arguments[i__4532__auto___14483]));

var G__14484 = (i__4532__auto___14483 + (1));
i__4532__auto___14483 = G__14484;
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
dao.indexdb.log.cljs$lang$applyTo = (function (seq14480){
var G__14481 = cljs.core.first(seq14480);
var seq14480__$1 = cljs.core.next(seq14480);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14481,seq14480__$1);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14485_SHARP_){
if(cljs.core.truth_(dao.indexdb.has_name_QMARK_(p1__14485_SHARP_))){
return cljs.core.name(p1__14485_SHARP_);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14485_SHARP_)].join('');
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
var len__4531__auto___14492 = arguments.length;
var i__4532__auto___14493 = (0);
while(true){
if((i__4532__auto___14493 < len__4531__auto___14492)){
args__4534__auto__.push((arguments[i__4532__auto___14493]));

var G__14494 = (i__4532__auto___14493 + (1));
i__4532__auto___14493 = G__14494;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,p__14489){
var map__14490 = p__14489;
var map__14490__$1 = ((((!((map__14490 == null)))?(((((map__14490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14490):map__14490);
var opts = map__14490__$1;
dao.indexdb.delete_store(db,name);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dao.indexdb.create_store,db,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts));
});

dao.indexdb.delete_and_create_store.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dao.indexdb.delete_and_create_store.cljs$lang$applyTo = (function (seq14486){
var G__14487 = cljs.core.first(seq14486);
var seq14486__$1 = cljs.core.next(seq14486);
var G__14488 = cljs.core.first(seq14486__$1);
var seq14486__$2 = cljs.core.next(seq14486__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14487,G__14488,seq14486__$2);
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
var G__14495 = dao.indexdb.get_target_result(e);
return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(G__14495) : success_fn.call(null,G__14495));
});})(tx,store,request))
;

return request.onerror = ((function (tx,store,request){
return (function (e){
var G__14496 = dao.indexdb.get_target_result(e);
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__14496) : error_fn.call(null,G__14496));
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
return (function (p1__14497_SHARP_){
return p1__14497_SHARP_.put(item__$1);
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
return dao.indexdb.do_read_write_store_action(db,store_name,(function (p1__14498_SHARP_){
return p1__14498_SHARP_.delete(item_key);
}),success_fn,error_fn);
});
dao.indexdb.make_rec_acc_fn = (function dao$indexdb$make_rec_acc_fn(acc,request,result_ch,keywordize_keys_QMARK_){
return (function (e){
var temp__5455__auto__ = dao.indexdb.get_target_result(e);
if(cljs.core.truth_(temp__5455__auto__)){
var cursor = temp__5455__auto__;
request.onsuccess = (function (){var G__14499 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cursor.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0)));
var G__14500 = request;
var G__14501 = result_ch;
var G__14502 = keywordize_keys_QMARK_;
return (dao.indexdb.make_rec_acc_fn.cljs$core$IFn$_invoke$arity$4 ? dao.indexdb.make_rec_acc_fn.cljs$core$IFn$_invoke$arity$4(G__14499,G__14500,G__14501,G__14502) : dao.indexdb.make_rec_acc_fn.call(null,G__14499,G__14500,G__14501,G__14502));
})();

return cursor.continue();
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_ch,acc);
}
});
});
dao.indexdb.make_tx = (function dao$indexdb$make_tx(var_args){
var G__14504 = arguments.length;
switch (G__14504) {
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
var G__14507 = arguments.length;
switch (G__14507) {
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
var G__14510 = arguments.length;
switch (G__14510) {
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
var len__4531__auto___14519 = arguments.length;
var i__4532__auto___14520 = (0);
while(true){
if((i__4532__auto___14520 < len__4531__auto___14519)){
args__4534__auto__.push((arguments[i__4532__auto___14520]));

var G__14521 = (i__4532__auto___14520 + (1));
i__4532__auto___14520 = G__14521;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return dao.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

dao.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,initial_key,p__14516){
var map__14517 = p__14516;
var map__14517__$1 = ((((!((map__14517 == null)))?(((((map__14517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14517):map__14517);
var opts = map__14517__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14517__$1,cljs.core.cst$kw$keywordize_DASH_keys);
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
dao.indexdb.get_all_from.cljs$lang$applyTo = (function (seq14512){
var G__14513 = cljs.core.first(seq14512);
var seq14512__$1 = cljs.core.next(seq14512);
var G__14514 = cljs.core.first(seq14512__$1);
var seq14512__$2 = cljs.core.next(seq14512__$1);
var G__14515 = cljs.core.first(seq14512__$2);
var seq14512__$3 = cljs.core.next(seq14512__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14513,G__14514,G__14515,seq14512__$3);
});

/**
 * Get all items in a store, returning a chan that will have the values put on it once available.
 */
dao.indexdb.get_all = (function dao$indexdb$get_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14528 = arguments.length;
var i__4532__auto___14529 = (0);
while(true){
if((i__4532__auto___14529 < len__4531__auto___14528)){
args__4534__auto__.push((arguments[i__4532__auto___14529]));

var G__14530 = (i__4532__auto___14529 + (1));
i__4532__auto___14529 = G__14530;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dao.indexdb.get_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dao.indexdb.get_all.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,p__14525){
var map__14526 = p__14525;
var map__14526__$1 = ((((!((map__14526 == null)))?(((((map__14526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14526):map__14526);
var opts = map__14526__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14526__$1,cljs.core.cst$kw$keywordize_DASH_keys);
return dao.indexdb.get_all_from.cljs$core$IFn$_invoke$arity$variadic(db,store_name,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
});

dao.indexdb.get_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dao.indexdb.get_all.cljs$lang$applyTo = (function (seq14522){
var G__14523 = cljs.core.first(seq14522);
var seq14522__$1 = cljs.core.next(seq14522);
var G__14524 = cljs.core.first(seq14522__$1);
var seq14522__$2 = cljs.core.next(seq14522__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14523,G__14524,seq14522__$2);
});

/**
 * Search for an item in the given object store by the configured key.
 *   Returns a chan that will have the result put on it. If no items are found, puts false on the chan.
 */
dao.indexdb.get_by_key = (function dao$indexdb$get_by_key(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14539 = arguments.length;
var i__4532__auto___14540 = (0);
while(true){
if((i__4532__auto___14540 < len__4531__auto___14539)){
args__4534__auto__.push((arguments[i__4532__auto___14540]));

var G__14541 = (i__4532__auto___14540 + (1));
i__4532__auto___14540 = G__14541;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,key,default_state,p__14536){
var map__14537 = p__14536;
var map__14537__$1 = ((((!((map__14537 == null)))?(((((map__14537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14537):map__14537);
var opts = map__14537__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,cljs.core.cst$kw$keywordize_DASH_keys);
if(cljs.core.truth_(db)){
var result_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var store = dao.indexdb.get_tx_store(db,store_name);
var request = store.get(key);
request.onsuccess = ((function (result_ch,store,request,map__14537,map__14537__$1,opts,keywordize_keys){
return (function (e){
var result = (function (){var or__3949__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dao.indexdb.get_target_result(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_state;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_ch,result);
});})(result_ch,store,request,map__14537,map__14537__$1,opts,keywordize_keys))
;

return result_ch;
} else {
return null;
}
});

dao.indexdb.get_by_key.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
dao.indexdb.get_by_key.cljs$lang$applyTo = (function (seq14531){
var G__14532 = cljs.core.first(seq14531);
var seq14531__$1 = cljs.core.next(seq14531);
var G__14533 = cljs.core.first(seq14531__$1);
var seq14531__$2 = cljs.core.next(seq14531__$1);
var G__14534 = cljs.core.first(seq14531__$2);
var seq14531__$3 = cljs.core.next(seq14531__$2);
var G__14535 = cljs.core.first(seq14531__$3);
var seq14531__$4 = cljs.core.next(seq14531__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14532,G__14533,G__14534,G__14535,seq14531__$4);
});

/**
 * Search for items in the given object store by the given range in the given index.
 *   Returns a chan that will have the results as a seq put on it.
 */
dao.indexdb.get_by_index_range = (function dao$indexdb$get_by_index_range(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14550 = arguments.length;
var i__4532__auto___14551 = (0);
while(true){
if((i__4532__auto___14551 < len__4531__auto___14550)){
args__4534__auto__.push((arguments[i__4532__auto___14551]));

var G__14552 = (i__4532__auto___14551 + (1));
i__4532__auto___14551 = G__14552;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return dao.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

dao.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,index_name,range,p__14547){
var map__14548 = p__14547;
var map__14548__$1 = ((((!((map__14548 == null)))?(((((map__14548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14548):map__14548);
var opts = map__14548__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14548__$1,cljs.core.cst$kw$keywordize_DASH_keys);
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
dao.indexdb.get_by_index_range.cljs$lang$applyTo = (function (seq14542){
var G__14543 = cljs.core.first(seq14542);
var seq14542__$1 = cljs.core.next(seq14542);
var G__14544 = cljs.core.first(seq14542__$1);
var seq14542__$2 = cljs.core.next(seq14542__$1);
var G__14545 = cljs.core.first(seq14542__$2);
var seq14542__$3 = cljs.core.next(seq14542__$2);
var G__14546 = cljs.core.first(seq14542__$3);
var seq14542__$4 = cljs.core.next(seq14542__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14543,G__14544,G__14545,G__14546,seq14542__$4);
});

/**
 * Search for items in the given object store by the given value in the given index.
 *   Returns a chan that will have the results as a seq put on it.
 */
dao.indexdb.get_by_index = (function dao$indexdb$get_by_index(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14561 = arguments.length;
var i__4532__auto___14562 = (0);
while(true){
if((i__4532__auto___14562 < len__4531__auto___14561)){
args__4534__auto__.push((arguments[i__4532__auto___14562]));

var G__14563 = (i__4532__auto___14562 + (1));
i__4532__auto___14562 = G__14563;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return dao.indexdb.get_by_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

dao.indexdb.get_by_index.cljs$core$IFn$_invoke$arity$variadic = (function (db,store_name,index_name,value,p__14558){
var map__14559 = p__14558;
var map__14559__$1 = ((((!((map__14559 == null)))?(((((map__14559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14559):map__14559);
var opts = map__14559__$1;
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14559__$1,cljs.core.cst$kw$keywordize_DASH_keys);
return dao.indexdb.get_by_index_range.cljs$core$IFn$_invoke$arity$variadic(db,store_name,index_name,dao.indexdb.make_range.cljs$core$IFn$_invoke$arity$1(value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys], 0));
});

dao.indexdb.get_by_index.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
dao.indexdb.get_by_index.cljs$lang$applyTo = (function (seq14553){
var G__14554 = cljs.core.first(seq14553);
var seq14553__$1 = cljs.core.next(seq14553);
var G__14555 = cljs.core.first(seq14553__$1);
var seq14553__$2 = cljs.core.next(seq14553__$1);
var G__14556 = cljs.core.first(seq14553__$2);
var seq14553__$3 = cljs.core.next(seq14553__$2);
var G__14557 = cljs.core.first(seq14553__$3);
var seq14553__$4 = cljs.core.next(seq14553__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14554,G__14555,G__14556,G__14557,seq14553__$4);
});

