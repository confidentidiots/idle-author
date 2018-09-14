// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('data.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('data.dependency');
goog.require('data.funs');
goog.require('data.gain');
goog.require('data.group');
goog.require('data.loss');
goog.require('data.name');
goog.require('data.ticker');
goog.require('data.idb');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {data.idb.IDB}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
data.db.DB = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
data.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

data.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k5302,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__5306 = k5302;
switch (G__5306) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5302,else__4206__auto__);

}
});

data.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#data.db.DB{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

data.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5301){
var self__ = this;
var G__5301__$1 = this;
return (new cljs.core.RecordIter((0),G__5301__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

data.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

data.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new data.db.DB(self__.__meta,self__.__extmap,self__.__hash));
});

data.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

data.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__5307 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (463728057 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__5307(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

data.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5303,other5304){
var self__ = this;
var this5303__$1 = this;
return ((!((other5304 == null))) && ((this5303__$1.constructor === other5304.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5303__$1.__extmap,other5304.__extmap)));
});

data.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new data.db.DB(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

data.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__5301){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__5308 = cljs.core.keyword_identical_QMARK_;
var expr__5309 = k__4211__auto__;
return (new data.db.DB(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__5301),null));
});

data.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

data.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__5301){
var self__ = this;
var this__4202__auto____$1 = this;
return (new data.db.DB(G__5301,self__.__extmap,self__.__hash));
});

data.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

data.db.DB.prototype.data$idb$IDB$ = cljs.core.PROTOCOL_SENTINEL;

data.db.DB.prototype.data$idb$IDB$items$arity$2 = (function (_,group_key){
var self__ = this;
var ___$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__5300_SHARP_){
return cljs.core.first(p1__5300_SHARP_);
});})(___$1))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p__5311){
var vec__5312 = p__5311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5312,(1),null);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,group_key),v);
});})(___$1))
,data.group.data));
});

data.db.DB.prototype.data$idb$IDB$item_dependency$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.dependency.data.cljs$core$IFn$_invoke$arity$1 ? data.dependency.data.cljs$core$IFn$_invoke$arity$1(item) : data.dependency.data.call(null,item));
});

data.db.DB.prototype.data$idb$IDB$item_function$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.funs.data.cljs$core$IFn$_invoke$arity$1 ? data.funs.data.cljs$core$IFn$_invoke$arity$1(item) : data.funs.data.call(null,item));
});

data.db.DB.prototype.data$idb$IDB$item_gain$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.gain.data.cljs$core$IFn$_invoke$arity$1 ? data.gain.data.cljs$core$IFn$_invoke$arity$1(item) : data.gain.data.call(null,item));
});

data.db.DB.prototype.data$idb$IDB$item_group$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.group.data.cljs$core$IFn$_invoke$arity$1 ? data.group.data.cljs$core$IFn$_invoke$arity$1(item) : data.group.data.call(null,item));
});

data.db.DB.prototype.data$idb$IDB$item_loss$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.loss.data.cljs$core$IFn$_invoke$arity$1 ? data.loss.data.cljs$core$IFn$_invoke$arity$1(item) : data.loss.data.call(null,item));
});

data.db.DB.prototype.data$idb$IDB$item_name$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.name.data.cljs$core$IFn$_invoke$arity$1 ? data.name.data.cljs$core$IFn$_invoke$arity$1(item) : data.name.data.call(null,item));
});

data.db.DB.prototype.data$idb$IDB$item_ticker$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (data.ticker.data.cljs$core$IFn$_invoke$arity$1 ? data.ticker.data.cljs$core$IFn$_invoke$arity$1(item) : data.ticker.data.call(null,item));
});

data.db.DB.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

data.db.DB.cljs$lang$type = true;

data.db.DB.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"data.db/DB",null,(1),null));
});

data.db.DB.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"data.db/DB");
});

/**
 * Positional factory function for data.db/DB.
 */
data.db.__GT_DB = (function data$db$__GT_DB(){
return (new data.db.DB(null,null,null));
});

/**
 * Factory function for data.db/DB, taking a map of keywords to field values.
 */
data.db.map__GT_DB = (function data$db$map__GT_DB(G__5305){
var extmap__4236__auto__ = (function (){var G__5315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__5305);
if(cljs.core.record_QMARK_(G__5305)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5315);
} else {
return G__5315;
}
})();
return (new data.db.DB(null,cljs.core.not_empty(extmap__4236__auto__),null));
});

