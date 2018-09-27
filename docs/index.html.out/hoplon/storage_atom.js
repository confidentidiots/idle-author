// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.storage_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');

/**
 * Represents a storage resource.
 * @interface
 */
hoplon.storage_atom.IStorageBackend = function(){};

hoplon.storage_atom._get = (function hoplon$storage_atom$_get(this$,not_found){
if(((!((this$ == null))) && (!((this$.hoplon$storage_atom$IStorageBackend$_get$arity$2 == null))))){
return this$.hoplon$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.storage_atom._get[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__4244__auto__.call(null,this$,not_found));
} else {
var m__4244__auto____$1 = (hoplon.storage_atom._get["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__4244__auto____$1.call(null,this$,not_found));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
hoplon.storage_atom._commit_BANG_ = (function hoplon$storage_atom$_commit_BANG_(this$,value){
if(((!((this$ == null))) && (!((this$.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null))))){
return this$.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (hoplon.storage_atom._commit_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4244__auto__.call(null,this$,value));
} else {
var m__4244__auto____$1 = (hoplon.storage_atom._commit_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4244__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {hoplon.storage_atom.IStorageBackend}
*/
hoplon.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
});
hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$ = cljs.core.PROTOCOL_SENTINEL;

hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5455__auto__ = self__.store.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.key], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var existing = temp__5455__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(existing);
} else {
return not_found;
}
});

hoplon.storage_atom.StorageBackend.prototype.hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});

hoplon.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$store,cljs.core.cst$sym$key], null);
});

hoplon.storage_atom.StorageBackend.cljs$lang$type = true;

hoplon.storage_atom.StorageBackend.cljs$lang$ctorStr = "hoplon.storage-atom/StorageBackend";

hoplon.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"hoplon.storage-atom/StorageBackend");
});

/**
 * Positional factory function for hoplon.storage-atom/StorageBackend.
 */
hoplon.storage_atom.__GT_StorageBackend = (function hoplon$storage_atom$__GT_StorageBackend(store,key){
return (new hoplon.storage_atom.StorageBackend(store,key));
});

hoplon.storage_atom.store = (function hoplon$storage_atom$store(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10768 = arguments.length;
var i__4532__auto___10769 = (0);
while(true){
if((i__4532__auto___10769 < len__4531__auto___10768)){
args__4534__auto__.push((arguments[i__4532__auto___10769]));

var G__10770 = (i__4532__auto___10769 + (1));
i__4532__auto___10769 = G__10770;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic = (function (atom,backend,p__10764){
var map__10765 = p__10764;
var map__10765__$1 = ((((!((map__10765 == null)))?(((((map__10765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10765):map__10765);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10765__$1,cljs.core.cst$kw$ignore_DASH_existing);
var existing = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = ignore_existing;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none;
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return hoplon.storage_atom._get(backend,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_none,existing)){
hoplon.storage_atom._commit_BANG_(backend,cljs.core.deref(atom));
} else {
cljs.core.reset_BANG_(atom,existing);
}

var G__10767 = atom;
cljs.core.add_watch(G__10767,cljs.core.cst$kw$hoplon$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__10767,existing,map__10765,map__10765__$1,ignore_existing){
return (function (p1__10758_SHARP_,p2__10759_SHARP_,p3__10760_SHARP_,p4__10757_SHARP_){
return hoplon.storage_atom._commit_BANG_(backend,p4__10757_SHARP_);
});})(G__10767,existing,map__10765,map__10765__$1,ignore_existing))
);

return G__10767;
});

hoplon.storage_atom.store.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
hoplon.storage_atom.store.cljs$lang$applyTo = (function (seq10761){
var G__10762 = cljs.core.first(seq10761);
var seq10761__$1 = cljs.core.next(seq10761);
var G__10763 = cljs.core.first(seq10761__$1);
var seq10761__$2 = cljs.core.next(seq10761__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10762,G__10763,seq10761__$2);
});

hoplon.storage_atom.html_storage = (function hoplon$storage_atom$html_storage(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10778 = arguments.length;
var i__4532__auto___10779 = (0);
while(true){
if((i__4532__auto___10779 < len__4531__auto___10778)){
args__4534__auto__.push((arguments[i__4532__auto___10779]));

var G__10780 = (i__4532__auto___10779 + (1));
i__4532__auto___10779 = G__10780;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,storage,k,p__10775){
var map__10776 = p__10775;
var map__10776__$1 = ((((!((map__10776 == null)))?(((((map__10776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10776):map__10776);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10776__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.store.cljs$core$IFn$_invoke$arity$variadic(atom,(new hoplon.storage_atom.StorageBackend(storage,k)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.html_storage.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
hoplon.storage_atom.html_storage.cljs$lang$applyTo = (function (seq10771){
var G__10772 = cljs.core.first(seq10771);
var seq10771__$1 = cljs.core.next(seq10771);
var G__10773 = cljs.core.first(seq10771__$1);
var seq10771__$2 = cljs.core.next(seq10771__$1);
var G__10774 = cljs.core.first(seq10771__$2);
var seq10771__$3 = cljs.core.next(seq10771__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10772,G__10773,G__10774,seq10771__$3);
});

hoplon.storage_atom.local_storage = (function hoplon$storage_atom$local_storage(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10787 = arguments.length;
var i__4532__auto___10788 = (0);
while(true){
if((i__4532__auto___10788 < len__4531__auto___10787)){
args__4534__auto__.push((arguments[i__4532__auto___10788]));

var G__10789 = (i__4532__auto___10788 + (1));
i__4532__auto___10788 = G__10789;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

hoplon.storage_atom.local_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__10784){
var map__10785 = p__10784;
var map__10785__$1 = ((((!((map__10785 == null)))?(((((map__10785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10785):map__10785);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10785__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,localStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.local_storage.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
hoplon.storage_atom.local_storage.cljs$lang$applyTo = (function (seq10781){
var G__10782 = cljs.core.first(seq10781);
var seq10781__$1 = cljs.core.next(seq10781);
var G__10783 = cljs.core.first(seq10781__$1);
var seq10781__$2 = cljs.core.next(seq10781__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10782,G__10783,seq10781__$2);
});

hoplon.storage_atom.session_storage = (function hoplon$storage_atom$session_storage(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10796 = arguments.length;
var i__4532__auto___10797 = (0);
while(true){
if((i__4532__auto___10797 < len__4531__auto___10796)){
args__4534__auto__.push((arguments[i__4532__auto___10797]));

var G__10798 = (i__4532__auto___10797 + (1));
i__4532__auto___10797 = G__10798;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

hoplon.storage_atom.session_storage.cljs$core$IFn$_invoke$arity$variadic = (function (atom,k,p__10793){
var map__10794 = p__10793;
var map__10794__$1 = ((((!((map__10794 == null)))?(((((map__10794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10794):map__10794);
var ignore_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10794__$1,cljs.core.cst$kw$ignore_DASH_existing);
return hoplon.storage_atom.html_storage.cljs$core$IFn$_invoke$arity$variadic(atom,sessionStorage,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_existing,ignore_existing], 0));
});

hoplon.storage_atom.session_storage.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
hoplon.storage_atom.session_storage.cljs$lang$applyTo = (function (seq10790){
var G__10791 = cljs.core.first(seq10790);
var seq10790__$1 = cljs.core.next(seq10790);
var G__10792 = cljs.core.first(seq10790__$1);
var seq10790__$2 = cljs.core.next(seq10790__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10791,G__10792,seq10790__$2);
});

