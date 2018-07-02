// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.random.longs.bit_count_impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.test.check.random.longs.bit_count_impl.lookup = (function (){var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(arr[(0)] = (0));

var n__4395__auto___7494 = (256);
var i_7495 = (0);
while(true){
if((i_7495 < n__4395__auto___7494)){
(arr[i_7495] = ((arr[(i_7495 >> (1))]) + (i_7495 & (1))));

var G__7496 = (i_7495 + (1));
i_7495 = G__7496;
continue;
} else {
}
break;
}

return arr;
})();
/**
 * Returns a JS number (not a Long), the number of set bits in the
 *   given Long.
 */
clojure.test.check.random.longs.bit_count_impl.bit_count = (function clojure$test$check$random$longs$bit_count_impl$bit_count(x){
var low = x.low_;
var high = x.high_;
return ((((((((clojure.test.check.random.longs.bit_count_impl.lookup[(low & (255))]) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (24)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[(high & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (24)) & (255))]));
});
