// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');
goog.require('clojure.string');

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k7562,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__7566 = k7562;
var G__7566__$1 = (((G__7566 instanceof cljs.core.Keyword))?G__7566.fqn:null);
switch (G__7566__$1) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7562,else__4193__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer(writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4205__auto__,pr_pair__4207__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__4206__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gen,self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7561){
var self__ = this;
var G__7561__$1 = this;
return (new cljs.core.RecordIter((0),G__7561__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__7567 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (236843149 ^ cljs.core.hash_unordered_coll(coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
;
return fexpr__7567(this__4186__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7563,other7564){
var self__ = this;
var this7563__$1 = this;
return ((!((other7564 == null))) && ((this7563__$1.constructor === other7564.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7563__$1.gen,other7564.gen)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7563__$1.__extmap,other7564.__extmap)));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gen,null], null), null),k__4200__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4200__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__7561){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__7568 = cljs.core.keyword_identical_QMARK_;
var expr__7569 = k__4198__auto__;
if(cljs.core.truth_((function (){var G__7571 = cljs.core.cst$kw$gen;
var G__7572 = expr__7569;
return (pred__7568.cljs$core$IFn$_invoke$arity$2 ? pred__7568.cljs$core$IFn$_invoke$arity$2(G__7571,G__7572) : pred__7568.call(null,G__7571,G__7572));
})())){
return (new clojure.test.check.generators.Generator(G__7561,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4198__auto__,G__7561),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$gen,self__.gen,null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__7561){
var self__ = this;
var this__4189__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__7561,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gen], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"clojure.test.check.generators/Generator",null,(1),null));
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"clojure.test.check.generators/Generator");
});

/**
 * Positional factory function for clojure.test.check.generators/Generator.
 */
clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

/**
 * Factory function for clojure.test.check.generators/Generator, taking a map of keywords to field values.
 */
clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__7565){
var extmap__4223__auto__ = (function (){var G__7573 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7565,cljs.core.cst$kw$gen);
if(cljs.core.record_QMARK_(G__7565)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7573);
} else {
return G__7573;
}
})();
return (new clojure.test.check.generators.Generator(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(G__7565),null,cljs.core.not_empty(extmap__4223__auto__),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__7575,rnd,size){
var map__7576 = p__7575;
var map__7576__$1 = ((((!((map__7576 == null)))?(((((map__7576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7576):map__7576);
var generator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7576__$1,cljs.core.cst$kw$gen);
return (generator_fn.cljs$core$IFn$_invoke$arity$2 ? generator_fn.cljs$core$IFn$_invoke$arity$2(rnd,size) : generator_fn.call(null,rnd,size));
});
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen((function (rnd,size){
return value;
}));
});
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__7578){
var map__7579 = p__7578;
var map__7579__$1 = ((((!((map__7579 == null)))?(((((map__7579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7579):map__7579);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__7579,map__7579__$1,h){
return (function (rnd,size){
var G__7581 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(rnd,size) : h.call(null,rnd,size));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__7581) : k.call(null,G__7581));
});})(map__7579,map__7579__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__7582,k){
var map__7583 = p__7582;
var map__7583__$1 = ((((!((map__7583 == null)))?(((((map__7583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7583):map__7583);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7583__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__7583,map__7583__$1,h){
return (function (rnd,size){
var vec__7585 = clojure.test.check.random.split(rnd);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7585,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7585,(1),null);
var inner = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(r1,size) : h.call(null,r1,size));
var map__7588 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(inner) : k.call(null,inner));
var map__7588__$1 = ((((!((map__7588 == null)))?(((((map__7588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7588):map__7588);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7588__$1,cljs.core.cst$kw$gen);
return (result.cljs$core$IFn$_invoke$arity$2 ? result.cljs$core$IFn$_invoke$arity$2(r2,size) : result.call(null,r2,size));
});})(map__7583,map__7583__$1,h))
);
});
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__7590 = clojure.test.check.random.split(rr);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7590,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7590,(1),null);
return cljs.core.cons(r1,(clojure.test.check.generators.lazy_random_states.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.lazy_random_states.cljs$core$IFn$_invoke$arity$1(r2) : clojure.test.check.generators.lazy_random_states.call(null,r2)));
}),null,null));
});
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen((function (rnd,size){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__7593_SHARP_,p2__7594_SHARP_){
return clojure.test.check.generators.call_gen(p1__7593_SHARP_,p2__7594_SHARP_,size);
}),gens,clojure.test.check.random.split_n(rnd,cljs.core.count(gens)));
}));
});
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to fmap must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_fmap((function (p1__7595_SHARP_){
return clojure.test.check.rose_tree.fmap(f,p1__7595_SHARP_);
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.pure(value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap(clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen((function (rnd,size){
return clojure.test.check.rose_tree.fmap((function (p1__7596_SHARP_){
return clojure.test.check.generators.call_gen(p1__7596_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap(k,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to bind must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(generator,clojure.test.check.generators.bind_helper(k));
});
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var G__7600 = arguments.length;
switch (G__7600) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2(generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (r,size_seq){
return (function (p1__7597_SHARP_,p2__7598_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,p1__7597_SHARP_,p2__7598_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states(r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var G__7603 = arguments.length;
switch (G__7603) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2(generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to sample must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_samples,clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1(generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var G__7606 = arguments.length;
switch (G__7606) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2(generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 2;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7608_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__7608_SHARP_);
}),cljs.core.iterate((function (p1__7609_SHARP_){
return cljs.core.quot(p1__7609_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7610_SHARP_){
return (integer - p1__7610_SHARP_);
}),clojure.test.check.generators.halfs(integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose(value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.int_rose_tree,clojure.test.check.generators.shrink_int(value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$((function (){var G__7611 = (lower + ((factor * (1.0 + upper)) - (factor * lower)));
return Math.floor(G__7611);
})());
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long(clojure.test.check.random.rand_double(rnd),lower,upper);
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen((function (rnd,size){
var sized_gen__$1 = (sized_gen.cljs$core$IFn$_invoke$arity$1 ? sized_gen.cljs$core$IFn$_invoke$arity$1(size) : sized_gen.call(null,size));
return clojure.test.check.generators.call_gen(sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","Second arg to resize must be a generator","\n","(generator? generator)"].join('')));
}

var map__7612 = generator;
var map__7612__$1 = ((((!((map__7612 == null)))?(((((map__7612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7612):map__7612);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7612__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__7612,map__7612__$1,gen){
return (function (rnd,_size){
return (gen.cljs$core$IFn$_invoke$arity$2 ? gen.cljs$core$IFn$_invoke$arity$2(rnd,n) : gen.call(null,rnd,n));
});})(map__7612,map__7612__$1,gen))
);
});
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized((function (n){
return clojure.test.check.generators.resize((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n)),generator);
}));
});
/**
 * Create a generator that returns numbers in the range
 *   `lower` to `upper`, inclusive.
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen((function (rnd,_size){
var value = clojure.test.check.generators.rand_range(rnd,lower,upper);
return clojure.test.check.rose_tree.filter(((function (value){
return (function (p1__7614_SHARP_){
return (((p1__7614_SHARP_ >= lower)) && ((p1__7614_SHARP_ <= upper)));
});})(value))
,clojure.test.check.generators.int_rose_tree(value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Arg to one-of must be a collection of generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.bind(clojure.test.check.generators.choose((0),(cljs.core.count(generators) - (1))),(function (p1__7615_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(generators,p1__7615_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__7616,n){
while(true){
var vec__7617 = p__7616;
var seq__7618 = cljs.core.seq(vec__7617);
var first__7619 = cljs.core.first(seq__7618);
var seq__7618__$1 = cljs.core.next(seq__7618);
var h = first__7619;
var tail = seq__7618__$1;
var vec__7620 = h;
var chance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7620,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7620,(1),null);
if((n <= chance)){
return gen;
} else {
var G__7623 = tail;
var G__7624 = (n - chance);
p__7616 = G__7623;
n = G__7624;
continue;
}
break;
}
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_((function (p__7626){
var vec__7627 = p__7626;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7627,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7627,(1),null);
var and__3925__auto__ = typeof x === 'number';
if(and__3925__auto__){
return clojure.test.check.generators.generator_QMARK_(g);
} else {
return and__3925__auto__;
}
}),pairs)){
} else {
throw (new Error(["Assert failed: ","Arg to frequency must be a list of [num generator] pairs","\n","(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)"].join('')));
}

var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((1),total),((function (total){
return (function (p1__7625_SHARP_){
return clojure.test.check.generators.pick(pairs,clojure.test.check.rose_tree.root(p1__7625_SHARP_));
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq(coll)){
} else {
throw (new Error(["Assert failed: ","elements cannot be called with an empty collection","\n","(seq coll)"].join('')));
}

var v = cljs.core.vec(coll);
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(cljs.core.count(v) - (1))),((function (v){
return (function (p1__7630_SHARP_){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.fmap(v,p1__7630_SHARP_));
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Couldn't satisfy such-that predicate after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_tries)," tries."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__7631 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7631,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7631,(1),null);
var value = clojure.test.check.generators.call_gen(gen,r1,size);
if(cljs.core.truth_((function (){var G__7634 = clojure.test.check.rose_tree.root(value);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__7634) : pred.call(null,G__7634));
})())){
return clojure.test.check.rose_tree.filter(pred,value);
} else {
var G__7635 = max_tries;
var G__7636 = pred;
var G__7637 = gen;
var G__7638 = (tries_left - (1));
var G__7639 = r2;
var G__7640 = (size + (1));
max_tries = G__7635;
pred = G__7636;
gen = G__7637;
tries_left = G__7638;
rng = G__7639;
size = G__7640;
continue;
}
}
break;
}
});
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var G__7642 = arguments.length;
switch (G__7642) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to such-that must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.make_gen((function (rand_seed,size){
return clojure.test.check.generators.such_that_helper(max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to not-empty must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to no-shrink must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind(gen,(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to shrink-2 must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind(gen,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__4521__auto__ = [];
var len__4518__auto___7645 = arguments.length;
var i__4519__auto___7646 = (0);
while(true){
if((i__4519__auto___7646 < len__4518__auto___7645)){
args__4521__auto__.push((arguments[i__4519__auto___7646]));

var G__7647 = (i__4519__auto___7646 + (1));
i__4519__auto___7646 = G__7647;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Args to tuple must be generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(generators),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.zip(cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq7644){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7644));
});

/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.choose((- size),size);
}));
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.fmap((function (p1__7648_SHARP_){
var G__7649 = cljs.core.long$(p1__7648_SHARP_);
return Math.abs(G__7649);
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap((function (p1__7650_SHARP_){
return ((-1) * p1__7650_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap(cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap(cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var G__7653 = arguments.length;
switch (G__7653) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","Arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__7651_SHARP_){
return clojure.test.check.generators.choose((0),p1__7651_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose(min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.filter((function (v){
return (((cljs.core.count(v) >= min_elements)) && ((cljs.core.count(v) <= max_elements)));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to list must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__7655_SHARP_){
return clojure.test.check.generators.choose((0),p1__7655_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.list,roses));
}));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__7656){
var vec__7657 = p__7656;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7657,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7657,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coll,i2,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i1) : coll.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i2) : coll.call(null,i2))], 0));
});
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose((0),(cljs.core.count(coll) - (1)));
return clojure.test.check.generators.fmap(((function (index_gen){
return (function (p1__7660_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.swap,cljs.core.vec(coll),p1__7660_SHARP_);
});})(index_gen))
,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index_gen,index_gen], 0)),(0),((2) * cljs.core.count(coll))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__4521__auto__ = [];
var len__4518__auto___7663 = arguments.length;
var i__4519__auto___7664 = (0);
while(true){
if((i__4519__auto___7664 < len__4518__auto___7663)){
args__4521__auto__.push((arguments[i__4519__auto___7664]));

var G__7665 = (i__4519__auto___7664 + (1));
i__4519__auto___7664 = G__7665;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),kvs);
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(kvs));
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error(["Assert failed: ","Value args to hash-map must be generators","\n","(every? generator? vs)"].join('')));
}

return clojure.test.check.generators.fmap(((function (ks,vs){
return (function (p1__7661_SHARP_){
return cljs.core.zipmap(ks,p1__7661_SHARP_);
});})(ks,vs))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq7662){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7662));
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return !((cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(s,k) == null));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) && ((cljs.core.count(rose_trees) < min_elements)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Couldn't generate enough distinct elements!",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$gen,gen,cljs.core.cst$kw$max_DASH_tries,max_tries,cljs.core.cst$kw$num_DASH_elements,num_elements,cljs.core.cst$kw$so_DASH_far,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,cljs.core.persistent_BANG_(rose_trees))], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rose_trees),num_elements)))){
return clojure.test.check.rose_tree.shrink(((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__7672__delegate = function (rest__7666_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,rest__7666_SHARP_);
};
var G__7672 = function (var_args){
var rest__7666_SHARP_ = null;
if (arguments.length > 0) {
var G__7673__i = 0, G__7673__a = new Array(arguments.length -  0);
while (G__7673__i < G__7673__a.length) {G__7673__a[G__7673__i] = arguments[G__7673__i + 0]; ++G__7673__i;}
  rest__7666_SHARP_ = new cljs.core.IndexedSeq(G__7673__a,0,null);
} 
return G__7672__delegate.call(this,rest__7666_SHARP_);};
G__7672.cljs$lang$maxFixedArity = 0;
G__7672.cljs$lang$applyTo = (function (arglist__7674){
var rest__7666_SHARP_ = cljs.core.seq(arglist__7674);
return G__7672__delegate(rest__7666_SHARP_);
});
G__7672.cljs$core$IFn$_invoke$arity$variadic = G__7672__delegate;
return G__7672;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,(function (){var G__7667 = rng__$1;
var G__7668 = cljs.core.persistent_BANG_(rose_trees);
return (shuffle_fn.cljs$core$IFn$_invoke$arity$2 ? shuffle_fn.cljs$core$IFn$_invoke$arity$2(G__7667,G__7668) : shuffle_fn.call(null,G__7667,G__7668));
})());
} else {
var vec__7669 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7669,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7669,(1),null);
var rose = clojure.test.check.generators.call_gen(gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root(rose);
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(root) : key_fn.call(null,root));
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_(s,k))){
var G__7675 = rose_trees;
var G__7676 = s;
var G__7677 = rng2;
var G__7678 = (size__$1 + (1));
var G__7679 = (tries + (1));
rose_trees = G__7675;
s = G__7676;
rng__$1 = G__7677;
size__$1 = G__7678;
tries = G__7679;
continue;
} else {
var G__7680 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rose_trees,rose);
var G__7681 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
var G__7682 = rng2;
var G__7683 = size__$1;
var G__7684 = (0);
rose_trees = G__7680;
s = G__7681;
rng__$1 = G__7682;
size__$1 = G__7683;
tries = G__7684;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__3936__auto__ = cljs.core.empty_QMARK_(coll);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty(coll);
var v = cljs.core.vec(coll);
var card = cljs.core.count(coll);
var dec_card = (card - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (empty_coll,v,card,dec_card){
return (function (p__7685,idx){
var vec__7686 = p__7685;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7686,(0),null);
var rng__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7686,(1),null);
var vec__7689 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7689,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7689,(1),null);
var swap_idx = clojure.test.check.generators.rand_range(rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap(v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(card))));
});
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__7698){
var map__7699 = p__7698;
var map__7699__$1 = ((((!((map__7699 == null)))?(((((map__7699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7699):map__7699);
var num_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7699__$1,cljs.core.cst$kw$num_DASH_elements);
var min_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7699__$1,cljs.core.cst$kw$min_DASH_elements);
var max_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7699__$1,cljs.core.cst$kw$max_DASH_elements);
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7699__$1,cljs.core.cst$kw$max_DASH_tries,(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
);
var hard_min_elements = (function (){var or__3936__auto__ = num_elements;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = min_elements;
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7692_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_elements,cljs.core.count(p1__7692_SHARP_));
});})(shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
;
if((((min_elements == null)) && ((max_elements == null)))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen(((function (size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7693_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__7693_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
);
} else {
var min_elements__$1 = (function (){var or__3936__auto__ = min_elements;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7694_SHARP_){
return (((min_elements__$1 <= cljs.core.count(p1__7694_SHARP_))) && ((cljs.core.count(p1__7694_SHARP_) <= max_elements)));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7695_SHARP_){
return (min_elements__$1 <= cljs.core.count(p1__7695_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
);
return clojure.test.check.generators.gen_bind((cljs.core.truth_(max_elements)?clojure.test.check.generators.choose(min_elements__$1,max_elements):clojure.test.check.generators.sized(((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7696_SHARP_){
return clojure.test.check.generators.choose(min_elements__$1,(min_elements__$1 + p1__7696_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root(num_elements_rose);
return clojure.test.check.generators.make_gen(((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7697_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__7697_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7699,map__7699__$1,num_elements,min_elements,max_elements,max_tries))
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var G__7702 = arguments.length;
switch (G__7702) {
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var G__7705 = arguments.length;
switch (G__7705) {
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var G__7708 = arguments.length;
switch (G__7708) {
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var G__7711 = arguments.length;
switch (G__7711) {
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var G__7714 = arguments.length;
switch (G__7714) {
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var G__7717 = arguments.length;
switch (G__7717) {
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to sorted-set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.sorted_set(),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var G__7720 = arguments.length;
switch (G__7720) {
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key_gen,val_gen], 0)),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen((function (rnd,_size){
return clojure.test.check.rose_tree.pure(clojure.test.check.random.rand_long(rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__7722 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs(G__7722);
} else {
return G__7722;
}
})();
while(true){
if((((min <= res)) && ((res <= max)))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if((((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max)))){
return res_SINGLEQUOTE_;
} else {
var G__7725 = ((function (){var G__7723 = res;
if(cljs.core.odd_QMARK_(res)){
var fexpr__7724 = (((res < (0)))?cljs.core.inc:cljs.core.dec);
return (fexpr__7724.cljs$core$IFn$_invoke$arity$1 ? fexpr__7724.cljs$core$IFn$_invoke$arity$1(G__7723) : fexpr__7724.call(null,G__7723));
} else {
return G__7723;
}
})() / (2));
res = G__7725;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized((function (size){
var size__$1 = (function (){var x__4024__auto__ = size;
var y__4025__auto__ = (1);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
var max_bit_count = (function (){var x__4027__auto__ = size__$1;
var y__4028__auto__ = (54);
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})();
return clojure.test.check.generators.gen_fmap(((function (size__$1,max_bit_count){
return (function (rose){
var vec__7726 = clojure.test.check.rose_tree.root(rose);
var bit_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7726,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7726,(1),null);
return clojure.test.check.generators.int_rose_tree(clojure.test.check.generators.long__GT_large_integer(bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.choose((1),max_bit_count),clojure.test.check.generators.gen_raw_long], 0)));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 */
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__7732){
var map__7733 = p__7732;
var map__7733__$1 = ((((!((map__7733 == null)))?(((((map__7733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7733):map__7733);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7733__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7733__$1,cljs.core.cst$kw$max);
var min__$1 = (function (){var or__3936__auto__ = min;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__3936__auto__ = max;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(((function (min__$1,max__$1,map__7733,map__7733__$1,min,max){
return (function (p1__7729_SHARP_){
return (((min__$1 <= p1__7729_SHARP_)) && ((p1__7729_SHARP_ <= max__$1)));
});})(min__$1,max__$1,map__7733,map__7733__$1,min,max))
,(((((min__$1 <= (0))) && (((0) <= max__$1))))?clojure.test.check.generators.large_integer_STAR__STAR_(min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__7733,map__7733__$1,min,max){
return (function (p1__7730_SHARP_){
return (max__$1 + p1__7730_SHARP_);
});})(min__$1,max__$1,map__7733,map__7733__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((min__$1 - max__$1),(0))):clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__7733,map__7733__$1,min,max){
return (function (p1__7731_SHARP_){
return (min__$1 + p1__7731_SHARP_);
});})(min__$1,max__$1,map__7733,map__7733__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_(cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose((0),(function (){var G__7735 = cljs.core.long$(bit_count);
switch (G__7735) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap((function (p__7736){
var vec__7737 = p__7736;
var upper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7737,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7737,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__7740 = (bit_count - (32));
return (clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1(G__7740) : clojure.test.check.generators.uniform_integer.call(null,G__7740));
})(),(clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1((32)) : clojure.test.check.generators.uniform_integer.call(null,(32)))], 0)));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__7742 = ((out * (2)) + (n__$1 & (1)));
var G__7743 = (n__$1 / (2));
var G__7744 = (out_shifter / (2));
out = G__7742;
n__$1 = G__7743;
out_shifter = G__7744;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap(clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(function (){var x__4027__auto__ = size;
var y__4028__auto__ = (52);
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer(clojure.test.check.rose_tree.root(rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = (function (){var G__7745 = (Math.log(x__$1) * Math.LOG2E);
return Math.floor(G__7745);
})();
var t = clojure.test.check.generators.scalb(x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized((function (size){
var qs8 = ((1) << cljs.core.quot((function (){var x__4027__auto__ = (200);
var y__4028__auto__ = size;
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})(),(8)));
if((((lb <= (0))) && (((0) <= ub)))){
return clojure.test.check.generators.choose((function (){var x__4024__auto__ = lb;
var y__4025__auto__ = (- qs8);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})(),(function (){var x__4027__auto__ = ub;
var y__4028__auto__ = qs8;
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose((function (){var x__4024__auto__ = lb;
var y__4025__auto__ = (ub - qs8);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose(lb,(function (){var x__4027__auto__ = ub;
var y__4028__auto__ = (lb + qs8);
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})());

}
}
}));
});
if((((lower_bound == null)) && ((upper_bound == null)))){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(1023)),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0));
} else {
var lower_bound__$1 = (function (){var or__3936__auto__ = lower_bound;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__3936__auto__ = upper_bound;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__4024__auto__ = (-1023);
var y__4025__auto__ = clojure.test.check.generators.get_exponent(lower_bound__$1);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
var ubexp = (function (){var x__4024__auto__ = (-1023);
var y__4025__auto__ = clojure.test.check.generators.get_exponent(upper_bound__$1);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(lbexp,ubexp),clojure.test.check.generators.return$(1.0)], 0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(ubexp,lbexp),clojure.test.check.generators.return$(-1.0)], 0));
} else {
return clojure.test.check.generators.fmap(((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__7746){
var vec__7747 = p__7746;
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7747,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7747,(1),null);
var pair = vec__7747;
if((((((sign < (0))) && ((lbexp < exp)))) || ((((sign > (0))) && ((ubexp < exp)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(function (){var x__4024__auto__ = ubexp;
var y__4025__auto__ = lbexp;
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})()),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0)));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__7750 = (function (){var G__7753 = exp;
var G__7754 = (- sign);
return (clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2(G__7753,G__7754) : clojure.test.check.generators.block_bounds.call(null,G__7753,G__7754));
})();
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7750,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7750,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb(1.0,exp),clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if((((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound)))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__7755_SHARP_){
return (((lower_bound <= p1__7755_SHARP_)) && ((p1__7755_SHARP_ <= upper_bound)));
}):(function (p1__7756_SHARP_){
return (lower_bound <= p1__7756_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__7757_SHARP_){
return (p1__7757_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap(((function (pred){
return (function (p__7758){
var vec__7759 = p__7758;
var vec__7762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7759,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(1),null);
var significand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7759,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb(base,exp) * sign);
if(cljs.core.truth_((function (){var or__3936__auto__ = (pred == null);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}
})())){
return x;
} else {
var vec__7765 = clojure.test.check.generators.block_bounds(exp,sign);
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7765,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7765,(1),null);
var block_lb = (function (){var G__7768 = low;
if(cljs.core.truth_(lower_bound)){
var x__4024__auto__ = G__7768;
var y__4025__auto__ = lower_bound;
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
} else {
return G__7768;
}
})();
var block_ub = (function (){var G__7769 = high;
if(cljs.core.truth_(upper_bound)){
var x__4027__auto__ = G__7769;
var y__4028__auto__ = upper_bound;
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
} else {
return G__7769;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__4024__auto__ = (function (){var x__4027__auto__ = x__$1;
var y__4028__auto__ = block_ub;
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})();
var y__4025__auto__ = block_lb;
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.double_exp_and_sign(lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand], 0)));
var G__7770 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,G__7770);
} else {
return G__7770;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__7771){
var map__7772 = p__7771;
var map__7772__$1 = ((((!((map__7772 == null)))?(((((map__7772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7772):map__7772);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7772__$1,cljs.core.cst$kw$infinite_QMARK_,true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7772__$1,cljs.core.cst$kw$NaN_QMARK_,true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7772__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7772__$1,cljs.core.cst$kw$max);
var frequency_arg = (function (){var G__7774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite(min,max)], null)], null);
var G__7774__$1 = (((((min == null))?(((max == null)) || ((0.0 <= max))):(((max == null))?(min <= 0.0):(((min <= 0.0)) && ((0.0 <= max))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__7774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(0.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(-0.0)], null)], 0)):G__7774);
var G__7774__$2 = (cljs.core.truth_((function (){var and__3925__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__3925__auto__)){
return (max == null);
} else {
return and__3925__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7774__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.POS_INFINITY)], null)):G__7774__$1);
var G__7774__$3 = (cljs.core.truth_((function (){var and__3925__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__3925__auto__)){
return (min == null);
} else {
return and__3925__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7774__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NEG_INFINITY)], null)):G__7774__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7774__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NAN)], null));
} else {
return G__7774__$3;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(frequency_arg))){
return cljs.core.second(cljs.core.first(frequency_arg));
} else {
return clojure.test.check.generators.frequency(frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((48),(57)),clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$((function (){var and__3925__auto__ = d;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = ((("+" === c)) || (("-" === c)));
if(and__3925__auto____$1){
return clojure.test.check.generators.digit_QMARK_(d);
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap((function (p__7775){
var vec__7776 = p__7775;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7776,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7776,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__7779){
var vec__7780 = p__7779;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7780,(0),null);
var vec__7783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7780,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7783,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap((function (v){
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap((function (p__7786){
var vec__7787 = p__7786;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7787,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7787,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap((function (p__7790){
var vec__7791 = p__7790;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7791,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7791,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap((function (p__7794){
var vec__7795 = p__7794;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7795,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7795,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.keyword_segment_rest)], 0)));
/**
 * Generate keywords with optional namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap((function (p__7798){
var vec__7799 = p__7798;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7799,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7799,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7799,(2),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__7802){
var vec__7803 = p__7802;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7803,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7803,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__7806){
var vec__7807 = p__7806;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7807,(0),null);
var vec__7810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7807,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7810,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__7813){
var vec__7814 = p__7813;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7814,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7814,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7814,(2),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__7817){
var vec__7818 = p__7817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7818,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7818,(1),null);
var vec__7821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7818,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7821,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap((function (p__7824){
var vec__7825 = p__7824;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7825,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7825,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.int$,clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.zero_QMARK_),clojure.test.check.generators.int$)], 0)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink(clojure.test.check.generators.fmap((function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return (nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1(idx) : nibbles.call(null,idx)).toString((16));
});
var rhex = (((nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1((15)) : nibbles.call(null,(15))) & (3)) + (8)).toString((16));
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((7))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((9))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((10))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((11))),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((12))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((13))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((14))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((17))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((18))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((19))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((20))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((21))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((22))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((23))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((24))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((25))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((26))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((27))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((28))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((29))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((30)))].join(''));
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.choose((0),(15)),(31))));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(inner_type),clojure.test.check.generators.list(inner_type),clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2(inner_type,inner_type)], null));
});
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize(scalar_size,scalar_gen);
} else {
return clojure.test.check.generators.resize(children_size,(function (){var G__7828 = (function (){var G__7829 = container_gen_fn;
var G__7830 = scalar_gen;
var G__7831 = scalar_size;
var G__7832 = children_size;
var G__7833 = (height - (1));
return (clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5(G__7829,G__7830,G__7831,G__7832,G__7833) : clojure.test.check.generators.recursive_helper.call(null,G__7829,G__7830,G__7831,G__7832,G__7833));
})();
return (container_gen_fn.cljs$core$IFn$_invoke$arity$1 ? container_gen_fn.cljs$core$IFn$_invoke$arity$1(G__7828) : container_gen_fn.call(null,G__7828));
})());
}
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(scalar_gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to recursive-gen must be a generator","\n","(generator? scalar-gen)"].join('')));
}

return clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((1),(5)),(function (height){
var children_size = (function (){var G__7834 = size;
var G__7835 = ((1) / height);
return Math.pow(G__7834,G__7835);
})();
return clojure.test.check.generators.recursive_helper(container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
var ret__4552__auto___7844 = (function (){
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__4521__auto__ = [];
var len__4518__auto___7845 = arguments.length;
var i__4519__auto___7846 = (0);
while(true){
if((i__4519__auto___7846 < len__4518__auto___7845)){
args__4521__auto__.push((arguments[i__4519__auto___7846]));

var G__7847 = (i__4519__auto___7846 + (1));
i__4519__auto___7846 = G__7847;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","First arg to gen/let must be a vector of bindings.","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw (new Error(["Assert failed: ","gen/let requires an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}

if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$val__7836__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$val__7836__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$val__7836__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_return,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$val__7836__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
var vec__7841 = bindings;
var seq__7842 = cljs.core.seq(vec__7841);
var first__7843 = cljs.core.first(seq__7842);
var seq__7842__$1 = cljs.core.next(seq__7842);
var binding = first__7843;
var first__7843__$1 = cljs.core.first(seq__7842__$1);
var seq__7842__$2 = cljs.core.next(seq__7842__$1);
var gen = first__7843__$1;
var more = seq__7842__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind,null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(more)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq7837){
var G__7838 = cljs.core.first(seq7837);
var seq7837__$1 = cljs.core.next(seq7837);
var G__7839 = cljs.core.first(seq7837__$1);
var seq7837__$2 = cljs.core.next(seq7837__$1);
var G__7840 = cljs.core.first(seq7837__$2);
var seq7837__$3 = cljs.core.next(seq7837__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7838,G__7839,G__7840,seq7837__$3);
});

return null;
})()
;
clojure.test.check.generators.let$.cljs$lang$macro = true;

