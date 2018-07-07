// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7371 = arguments.length;
switch (G__7371) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7372 = (function (f,blockable,meta7373){
this.f = f;
this.blockable = blockable;
this.meta7373 = meta7373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7374,meta7373__$1){
var self__ = this;
var _7374__$1 = this;
return (new cljs.core.async.t_cljs$core$async7372(self__.f,self__.blockable,meta7373__$1));
});

cljs.core.async.t_cljs$core$async7372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7374){
var self__ = this;
var _7374__$1 = this;
return self__.meta7373;
});

cljs.core.async.t_cljs$core$async7372.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7373], null);
});

cljs.core.async.t_cljs$core$async7372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7372";

cljs.core.async.t_cljs$core$async7372.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7372");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7372.
 */
cljs.core.async.__GT_t_cljs$core$async7372 = (function cljs$core$async$__GT_t_cljs$core$async7372(f__$1,blockable__$1,meta7373){
return (new cljs.core.async.t_cljs$core$async7372(f__$1,blockable__$1,meta7373));
});

}

return (new cljs.core.async.t_cljs$core$async7372(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__7378 = arguments.length;
switch (G__7378) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__7381 = arguments.length;
switch (G__7381) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__7384 = arguments.length;
switch (G__7384) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_7386 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7386) : fn1.call(null,val_7386));
} else {
cljs.core.async.impl.dispatch.run(((function (val_7386,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7386) : fn1.call(null,val_7386));
});})(val_7386,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__7388 = arguments.length;
switch (G__7388) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___7390 = n;
var x_7391 = (0);
while(true){
if((x_7391 < n__4408__auto___7390)){
(a[x_7391] = (0));

var G__7392 = (x_7391 + (1));
x_7391 = G__7392;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__7393 = (i + (1));
i = G__7393;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7394 = (function (flag,meta7395){
this.flag = flag;
this.meta7395 = meta7395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7396,meta7395__$1){
var self__ = this;
var _7396__$1 = this;
return (new cljs.core.async.t_cljs$core$async7394(self__.flag,meta7395__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7396){
var self__ = this;
var _7396__$1 = this;
return self__.meta7395;
});})(flag))
;

cljs.core.async.t_cljs$core$async7394.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7394.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7395], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7394";

cljs.core.async.t_cljs$core$async7394.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7394");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7394.
 */
cljs.core.async.__GT_t_cljs$core$async7394 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7394(flag__$1,meta7395){
return (new cljs.core.async.t_cljs$core$async7394(flag__$1,meta7395));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7394(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7397 = (function (flag,cb,meta7398){
this.flag = flag;
this.cb = cb;
this.meta7398 = meta7398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7399,meta7398__$1){
var self__ = this;
var _7399__$1 = this;
return (new cljs.core.async.t_cljs$core$async7397(self__.flag,self__.cb,meta7398__$1));
});

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7399){
var self__ = this;
var _7399__$1 = this;
return self__.meta7398;
});

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7398], null);
});

cljs.core.async.t_cljs$core$async7397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7397";

cljs.core.async.t_cljs$core$async7397.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7397");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7397.
 */
cljs.core.async.__GT_t_cljs$core$async7397 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7397(flag__$1,cb__$1,meta7398){
return (new cljs.core.async.t_cljs$core$async7397(flag__$1,cb__$1,meta7398));
});

}

return (new cljs.core.async.t_cljs$core$async7397(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7400_SHARP_){
var G__7402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7400_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7402) : fret.call(null,G__7402));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7401_SHARP_){
var G__7403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7401_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7403) : fret.call(null,G__7403));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7404 = (i + (1));
i = G__7404;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7410 = arguments.length;
var i__4532__auto___7411 = (0);
while(true){
if((i__4532__auto___7411 < len__4531__auto___7410)){
args__4534__auto__.push((arguments[i__4532__auto___7411]));

var G__7412 = (i__4532__auto___7411 + (1));
i__4532__auto___7411 = G__7412;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7407){
var map__7408 = p__7407;
var map__7408__$1 = ((((!((map__7408 == null)))?(((((map__7408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7408):map__7408);
var opts = map__7408__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7405){
var G__7406 = cljs.core.first(seq7405);
var seq7405__$1 = cljs.core.next(seq7405);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7406,seq7405__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__7414 = arguments.length;
switch (G__7414) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7311__auto___7460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___7460){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___7460){
return (function (state_7438){
var state_val_7439 = (state_7438[(1)]);
if((state_val_7439 === (7))){
var inst_7434 = (state_7438[(2)]);
var state_7438__$1 = state_7438;
var statearr_7440_7461 = state_7438__$1;
(statearr_7440_7461[(2)] = inst_7434);

(statearr_7440_7461[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (1))){
var state_7438__$1 = state_7438;
var statearr_7441_7462 = state_7438__$1;
(statearr_7441_7462[(2)] = null);

(statearr_7441_7462[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (4))){
var inst_7417 = (state_7438[(7)]);
var inst_7417__$1 = (state_7438[(2)]);
var inst_7418 = (inst_7417__$1 == null);
var state_7438__$1 = (function (){var statearr_7442 = state_7438;
(statearr_7442[(7)] = inst_7417__$1);

return statearr_7442;
})();
if(cljs.core.truth_(inst_7418)){
var statearr_7443_7463 = state_7438__$1;
(statearr_7443_7463[(1)] = (5));

} else {
var statearr_7444_7464 = state_7438__$1;
(statearr_7444_7464[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (13))){
var state_7438__$1 = state_7438;
var statearr_7445_7465 = state_7438__$1;
(statearr_7445_7465[(2)] = null);

(statearr_7445_7465[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (6))){
var inst_7417 = (state_7438[(7)]);
var state_7438__$1 = state_7438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7438__$1,(11),to,inst_7417);
} else {
if((state_val_7439 === (3))){
var inst_7436 = (state_7438[(2)]);
var state_7438__$1 = state_7438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7438__$1,inst_7436);
} else {
if((state_val_7439 === (12))){
var state_7438__$1 = state_7438;
var statearr_7446_7466 = state_7438__$1;
(statearr_7446_7466[(2)] = null);

(statearr_7446_7466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (2))){
var state_7438__$1 = state_7438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7438__$1,(4),from);
} else {
if((state_val_7439 === (11))){
var inst_7427 = (state_7438[(2)]);
var state_7438__$1 = state_7438;
if(cljs.core.truth_(inst_7427)){
var statearr_7447_7467 = state_7438__$1;
(statearr_7447_7467[(1)] = (12));

} else {
var statearr_7448_7468 = state_7438__$1;
(statearr_7448_7468[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (9))){
var state_7438__$1 = state_7438;
var statearr_7449_7469 = state_7438__$1;
(statearr_7449_7469[(2)] = null);

(statearr_7449_7469[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (5))){
var state_7438__$1 = state_7438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7450_7470 = state_7438__$1;
(statearr_7450_7470[(1)] = (8));

} else {
var statearr_7451_7471 = state_7438__$1;
(statearr_7451_7471[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (14))){
var inst_7432 = (state_7438[(2)]);
var state_7438__$1 = state_7438;
var statearr_7452_7472 = state_7438__$1;
(statearr_7452_7472[(2)] = inst_7432);

(statearr_7452_7472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (10))){
var inst_7424 = (state_7438[(2)]);
var state_7438__$1 = state_7438;
var statearr_7453_7473 = state_7438__$1;
(statearr_7453_7473[(2)] = inst_7424);

(statearr_7453_7473[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7439 === (8))){
var inst_7421 = cljs.core.async.close_BANG_(to);
var state_7438__$1 = state_7438;
var statearr_7454_7474 = state_7438__$1;
(statearr_7454_7474[(2)] = inst_7421);

(statearr_7454_7474[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___7460))
;
return ((function (switch__7208__auto__,c__7311__auto___7460){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_7455 = [null,null,null,null,null,null,null,null];
(statearr_7455[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_7455[(1)] = (1));

return statearr_7455;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_7438){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7438);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7456){if((e7456 instanceof Object)){
var ex__7212__auto__ = e7456;
var statearr_7457_7475 = state_7438;
(statearr_7457_7475[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7438);

return cljs.core.cst$kw$recur;
} else {
throw e7456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7476 = state_7438;
state_7438 = G__7476;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_7438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_7438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___7460))
})();
var state__7313__auto__ = (function (){var statearr_7458 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7458[(6)] = c__7311__auto___7460);

return statearr_7458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___7460))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__7477){
var vec__7478 = p__7477;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7478,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7478,(1),null);
var job = vec__7478;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7311__auto___7649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___7649,res,vec__7478,v,p,job,jobs,results){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___7649,res,vec__7478,v,p,job,jobs,results){
return (function (state_7485){
var state_val_7486 = (state_7485[(1)]);
if((state_val_7486 === (1))){
var state_7485__$1 = state_7485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7485__$1,(2),res,v);
} else {
if((state_val_7486 === (2))){
var inst_7482 = (state_7485[(2)]);
var inst_7483 = cljs.core.async.close_BANG_(res);
var state_7485__$1 = (function (){var statearr_7487 = state_7485;
(statearr_7487[(7)] = inst_7482);

return statearr_7487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7485__$1,inst_7483);
} else {
return null;
}
}
});})(c__7311__auto___7649,res,vec__7478,v,p,job,jobs,results))
;
return ((function (switch__7208__auto__,c__7311__auto___7649,res,vec__7478,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0 = (function (){
var statearr_7488 = [null,null,null,null,null,null,null,null];
(statearr_7488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__);

(statearr_7488[(1)] = (1));

return statearr_7488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1 = (function (state_7485){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7485);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7489){if((e7489 instanceof Object)){
var ex__7212__auto__ = e7489;
var statearr_7490_7650 = state_7485;
(statearr_7490_7650[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7485);

return cljs.core.cst$kw$recur;
} else {
throw e7489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7651 = state_7485;
state_7485 = G__7651;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = function(state_7485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1.call(this,state_7485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___7649,res,vec__7478,v,p,job,jobs,results))
})();
var state__7313__auto__ = (function (){var statearr_7491 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7491[(6)] = c__7311__auto___7649);

return statearr_7491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___7649,res,vec__7478,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7492){
var vec__7493 = p__7492;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7493,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7493,(1),null);
var job = vec__7493;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___7652 = n;
var __7653 = (0);
while(true){
if((__7653 < n__4408__auto___7652)){
var G__7496_7654 = type;
var G__7496_7655__$1 = (((G__7496_7654 instanceof cljs.core.Keyword))?G__7496_7654.fqn:null);
switch (G__7496_7655__$1) {
case "compute":
var c__7311__auto___7657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7653,c__7311__auto___7657,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (__7653,c__7311__auto___7657,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async){
return (function (state_7509){
var state_val_7510 = (state_7509[(1)]);
if((state_val_7510 === (1))){
var state_7509__$1 = state_7509;
var statearr_7511_7658 = state_7509__$1;
(statearr_7511_7658[(2)] = null);

(statearr_7511_7658[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7510 === (2))){
var state_7509__$1 = state_7509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7509__$1,(4),jobs);
} else {
if((state_val_7510 === (3))){
var inst_7507 = (state_7509[(2)]);
var state_7509__$1 = state_7509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7509__$1,inst_7507);
} else {
if((state_val_7510 === (4))){
var inst_7499 = (state_7509[(2)]);
var inst_7500 = process(inst_7499);
var state_7509__$1 = state_7509;
if(cljs.core.truth_(inst_7500)){
var statearr_7512_7659 = state_7509__$1;
(statearr_7512_7659[(1)] = (5));

} else {
var statearr_7513_7660 = state_7509__$1;
(statearr_7513_7660[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7510 === (5))){
var state_7509__$1 = state_7509;
var statearr_7514_7661 = state_7509__$1;
(statearr_7514_7661[(2)] = null);

(statearr_7514_7661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7510 === (6))){
var state_7509__$1 = state_7509;
var statearr_7515_7662 = state_7509__$1;
(statearr_7515_7662[(2)] = null);

(statearr_7515_7662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7510 === (7))){
var inst_7505 = (state_7509[(2)]);
var state_7509__$1 = state_7509;
var statearr_7516_7663 = state_7509__$1;
(statearr_7516_7663[(2)] = inst_7505);

(statearr_7516_7663[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__7653,c__7311__auto___7657,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async))
;
return ((function (__7653,switch__7208__auto__,c__7311__auto___7657,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0 = (function (){
var statearr_7517 = [null,null,null,null,null,null,null];
(statearr_7517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__);

(statearr_7517[(1)] = (1));

return statearr_7517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1 = (function (state_7509){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7509);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7518){if((e7518 instanceof Object)){
var ex__7212__auto__ = e7518;
var statearr_7519_7664 = state_7509;
(statearr_7519_7664[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7509);

return cljs.core.cst$kw$recur;
} else {
throw e7518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7665 = state_7509;
state_7509 = G__7665;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = function(state_7509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1.call(this,state_7509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__;
})()
;})(__7653,switch__7208__auto__,c__7311__auto___7657,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async))
})();
var state__7313__auto__ = (function (){var statearr_7520 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7520[(6)] = c__7311__auto___7657);

return statearr_7520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(__7653,c__7311__auto___7657,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async))
);


break;
case "async":
var c__7311__auto___7666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7653,c__7311__auto___7666,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (__7653,c__7311__auto___7666,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async){
return (function (state_7533){
var state_val_7534 = (state_7533[(1)]);
if((state_val_7534 === (1))){
var state_7533__$1 = state_7533;
var statearr_7535_7667 = state_7533__$1;
(statearr_7535_7667[(2)] = null);

(statearr_7535_7667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7534 === (2))){
var state_7533__$1 = state_7533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7533__$1,(4),jobs);
} else {
if((state_val_7534 === (3))){
var inst_7531 = (state_7533[(2)]);
var state_7533__$1 = state_7533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7533__$1,inst_7531);
} else {
if((state_val_7534 === (4))){
var inst_7523 = (state_7533[(2)]);
var inst_7524 = async(inst_7523);
var state_7533__$1 = state_7533;
if(cljs.core.truth_(inst_7524)){
var statearr_7536_7668 = state_7533__$1;
(statearr_7536_7668[(1)] = (5));

} else {
var statearr_7537_7669 = state_7533__$1;
(statearr_7537_7669[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7534 === (5))){
var state_7533__$1 = state_7533;
var statearr_7538_7670 = state_7533__$1;
(statearr_7538_7670[(2)] = null);

(statearr_7538_7670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7534 === (6))){
var state_7533__$1 = state_7533;
var statearr_7539_7671 = state_7533__$1;
(statearr_7539_7671[(2)] = null);

(statearr_7539_7671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7534 === (7))){
var inst_7529 = (state_7533[(2)]);
var state_7533__$1 = state_7533;
var statearr_7540_7672 = state_7533__$1;
(statearr_7540_7672[(2)] = inst_7529);

(statearr_7540_7672[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__7653,c__7311__auto___7666,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async))
;
return ((function (__7653,switch__7208__auto__,c__7311__auto___7666,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0 = (function (){
var statearr_7541 = [null,null,null,null,null,null,null];
(statearr_7541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__);

(statearr_7541[(1)] = (1));

return statearr_7541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1 = (function (state_7533){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7533);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7542){if((e7542 instanceof Object)){
var ex__7212__auto__ = e7542;
var statearr_7543_7673 = state_7533;
(statearr_7543_7673[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7533);

return cljs.core.cst$kw$recur;
} else {
throw e7542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7674 = state_7533;
state_7533 = G__7674;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = function(state_7533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1.call(this,state_7533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__;
})()
;})(__7653,switch__7208__auto__,c__7311__auto___7666,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async))
})();
var state__7313__auto__ = (function (){var statearr_7544 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7544[(6)] = c__7311__auto___7666);

return statearr_7544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(__7653,c__7311__auto___7666,G__7496_7654,G__7496_7655__$1,n__4408__auto___7652,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7496_7655__$1)].join('')));

}

var G__7675 = (__7653 + (1));
__7653 = G__7675;
continue;
} else {
}
break;
}

var c__7311__auto___7676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___7676,jobs,results,process,async){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___7676,jobs,results,process,async){
return (function (state_7566){
var state_val_7567 = (state_7566[(1)]);
if((state_val_7567 === (1))){
var state_7566__$1 = state_7566;
var statearr_7568_7677 = state_7566__$1;
(statearr_7568_7677[(2)] = null);

(statearr_7568_7677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7567 === (2))){
var state_7566__$1 = state_7566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7566__$1,(4),from);
} else {
if((state_val_7567 === (3))){
var inst_7564 = (state_7566[(2)]);
var state_7566__$1 = state_7566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7566__$1,inst_7564);
} else {
if((state_val_7567 === (4))){
var inst_7547 = (state_7566[(7)]);
var inst_7547__$1 = (state_7566[(2)]);
var inst_7548 = (inst_7547__$1 == null);
var state_7566__$1 = (function (){var statearr_7569 = state_7566;
(statearr_7569[(7)] = inst_7547__$1);

return statearr_7569;
})();
if(cljs.core.truth_(inst_7548)){
var statearr_7570_7678 = state_7566__$1;
(statearr_7570_7678[(1)] = (5));

} else {
var statearr_7571_7679 = state_7566__$1;
(statearr_7571_7679[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7567 === (5))){
var inst_7550 = cljs.core.async.close_BANG_(jobs);
var state_7566__$1 = state_7566;
var statearr_7572_7680 = state_7566__$1;
(statearr_7572_7680[(2)] = inst_7550);

(statearr_7572_7680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7567 === (6))){
var inst_7547 = (state_7566[(7)]);
var inst_7552 = (state_7566[(8)]);
var inst_7552__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_7553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7554 = [inst_7547,inst_7552__$1];
var inst_7555 = (new cljs.core.PersistentVector(null,2,(5),inst_7553,inst_7554,null));
var state_7566__$1 = (function (){var statearr_7573 = state_7566;
(statearr_7573[(8)] = inst_7552__$1);

return statearr_7573;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7566__$1,(8),jobs,inst_7555);
} else {
if((state_val_7567 === (7))){
var inst_7562 = (state_7566[(2)]);
var state_7566__$1 = state_7566;
var statearr_7574_7681 = state_7566__$1;
(statearr_7574_7681[(2)] = inst_7562);

(statearr_7574_7681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7567 === (8))){
var inst_7552 = (state_7566[(8)]);
var inst_7557 = (state_7566[(2)]);
var state_7566__$1 = (function (){var statearr_7575 = state_7566;
(statearr_7575[(9)] = inst_7557);

return statearr_7575;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7566__$1,(9),results,inst_7552);
} else {
if((state_val_7567 === (9))){
var inst_7559 = (state_7566[(2)]);
var state_7566__$1 = (function (){var statearr_7576 = state_7566;
(statearr_7576[(10)] = inst_7559);

return statearr_7576;
})();
var statearr_7577_7682 = state_7566__$1;
(statearr_7577_7682[(2)] = null);

(statearr_7577_7682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___7676,jobs,results,process,async))
;
return ((function (switch__7208__auto__,c__7311__auto___7676,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0 = (function (){
var statearr_7578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__);

(statearr_7578[(1)] = (1));

return statearr_7578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1 = (function (state_7566){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7566);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7579){if((e7579 instanceof Object)){
var ex__7212__auto__ = e7579;
var statearr_7580_7683 = state_7566;
(statearr_7580_7683[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7566);

return cljs.core.cst$kw$recur;
} else {
throw e7579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7684 = state_7566;
state_7566 = G__7684;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = function(state_7566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1.call(this,state_7566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___7676,jobs,results,process,async))
})();
var state__7313__auto__ = (function (){var statearr_7581 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7581[(6)] = c__7311__auto___7676);

return statearr_7581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___7676,jobs,results,process,async))
);


var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__,jobs,results,process,async){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__,jobs,results,process,async){
return (function (state_7619){
var state_val_7620 = (state_7619[(1)]);
if((state_val_7620 === (7))){
var inst_7615 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
var statearr_7621_7685 = state_7619__$1;
(statearr_7621_7685[(2)] = inst_7615);

(statearr_7621_7685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (20))){
var state_7619__$1 = state_7619;
var statearr_7622_7686 = state_7619__$1;
(statearr_7622_7686[(2)] = null);

(statearr_7622_7686[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (1))){
var state_7619__$1 = state_7619;
var statearr_7623_7687 = state_7619__$1;
(statearr_7623_7687[(2)] = null);

(statearr_7623_7687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (4))){
var inst_7584 = (state_7619[(7)]);
var inst_7584__$1 = (state_7619[(2)]);
var inst_7585 = (inst_7584__$1 == null);
var state_7619__$1 = (function (){var statearr_7624 = state_7619;
(statearr_7624[(7)] = inst_7584__$1);

return statearr_7624;
})();
if(cljs.core.truth_(inst_7585)){
var statearr_7625_7688 = state_7619__$1;
(statearr_7625_7688[(1)] = (5));

} else {
var statearr_7626_7689 = state_7619__$1;
(statearr_7626_7689[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (15))){
var inst_7597 = (state_7619[(8)]);
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7619__$1,(18),to,inst_7597);
} else {
if((state_val_7620 === (21))){
var inst_7610 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
var statearr_7627_7690 = state_7619__$1;
(statearr_7627_7690[(2)] = inst_7610);

(statearr_7627_7690[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (13))){
var inst_7612 = (state_7619[(2)]);
var state_7619__$1 = (function (){var statearr_7628 = state_7619;
(statearr_7628[(9)] = inst_7612);

return statearr_7628;
})();
var statearr_7629_7691 = state_7619__$1;
(statearr_7629_7691[(2)] = null);

(statearr_7629_7691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (6))){
var inst_7584 = (state_7619[(7)]);
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7619__$1,(11),inst_7584);
} else {
if((state_val_7620 === (17))){
var inst_7605 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
if(cljs.core.truth_(inst_7605)){
var statearr_7630_7692 = state_7619__$1;
(statearr_7630_7692[(1)] = (19));

} else {
var statearr_7631_7693 = state_7619__$1;
(statearr_7631_7693[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (3))){
var inst_7617 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7619__$1,inst_7617);
} else {
if((state_val_7620 === (12))){
var inst_7594 = (state_7619[(10)]);
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7619__$1,(14),inst_7594);
} else {
if((state_val_7620 === (2))){
var state_7619__$1 = state_7619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7619__$1,(4),results);
} else {
if((state_val_7620 === (19))){
var state_7619__$1 = state_7619;
var statearr_7632_7694 = state_7619__$1;
(statearr_7632_7694[(2)] = null);

(statearr_7632_7694[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (11))){
var inst_7594 = (state_7619[(2)]);
var state_7619__$1 = (function (){var statearr_7633 = state_7619;
(statearr_7633[(10)] = inst_7594);

return statearr_7633;
})();
var statearr_7634_7695 = state_7619__$1;
(statearr_7634_7695[(2)] = null);

(statearr_7634_7695[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (9))){
var state_7619__$1 = state_7619;
var statearr_7635_7696 = state_7619__$1;
(statearr_7635_7696[(2)] = null);

(statearr_7635_7696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (5))){
var state_7619__$1 = state_7619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7636_7697 = state_7619__$1;
(statearr_7636_7697[(1)] = (8));

} else {
var statearr_7637_7698 = state_7619__$1;
(statearr_7637_7698[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (14))){
var inst_7599 = (state_7619[(11)]);
var inst_7597 = (state_7619[(8)]);
var inst_7597__$1 = (state_7619[(2)]);
var inst_7598 = (inst_7597__$1 == null);
var inst_7599__$1 = cljs.core.not(inst_7598);
var state_7619__$1 = (function (){var statearr_7638 = state_7619;
(statearr_7638[(11)] = inst_7599__$1);

(statearr_7638[(8)] = inst_7597__$1);

return statearr_7638;
})();
if(inst_7599__$1){
var statearr_7639_7699 = state_7619__$1;
(statearr_7639_7699[(1)] = (15));

} else {
var statearr_7640_7700 = state_7619__$1;
(statearr_7640_7700[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (16))){
var inst_7599 = (state_7619[(11)]);
var state_7619__$1 = state_7619;
var statearr_7641_7701 = state_7619__$1;
(statearr_7641_7701[(2)] = inst_7599);

(statearr_7641_7701[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (10))){
var inst_7591 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
var statearr_7642_7702 = state_7619__$1;
(statearr_7642_7702[(2)] = inst_7591);

(statearr_7642_7702[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (18))){
var inst_7602 = (state_7619[(2)]);
var state_7619__$1 = state_7619;
var statearr_7643_7703 = state_7619__$1;
(statearr_7643_7703[(2)] = inst_7602);

(statearr_7643_7703[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7620 === (8))){
var inst_7588 = cljs.core.async.close_BANG_(to);
var state_7619__$1 = state_7619;
var statearr_7644_7704 = state_7619__$1;
(statearr_7644_7704[(2)] = inst_7588);

(statearr_7644_7704[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto__,jobs,results,process,async))
;
return ((function (switch__7208__auto__,c__7311__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0 = (function (){
var statearr_7645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__);

(statearr_7645[(1)] = (1));

return statearr_7645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1 = (function (state_7619){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7619);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7646){if((e7646 instanceof Object)){
var ex__7212__auto__ = e7646;
var statearr_7647_7705 = state_7619;
(statearr_7647_7705[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7619);

return cljs.core.cst$kw$recur;
} else {
throw e7646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7706 = state_7619;
state_7619 = G__7706;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__ = function(state_7619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1.call(this,state_7619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__,jobs,results,process,async))
})();
var state__7313__auto__ = (function (){var statearr_7648 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7648[(6)] = c__7311__auto__);

return statearr_7648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__,jobs,results,process,async))
);

return c__7311__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__7708 = arguments.length;
switch (G__7708) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__7711 = arguments.length;
switch (G__7711) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__7714 = arguments.length;
switch (G__7714) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7311__auto___7763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___7763,tc,fc){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___7763,tc,fc){
return (function (state_7740){
var state_val_7741 = (state_7740[(1)]);
if((state_val_7741 === (7))){
var inst_7736 = (state_7740[(2)]);
var state_7740__$1 = state_7740;
var statearr_7742_7764 = state_7740__$1;
(statearr_7742_7764[(2)] = inst_7736);

(statearr_7742_7764[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (1))){
var state_7740__$1 = state_7740;
var statearr_7743_7765 = state_7740__$1;
(statearr_7743_7765[(2)] = null);

(statearr_7743_7765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (4))){
var inst_7717 = (state_7740[(7)]);
var inst_7717__$1 = (state_7740[(2)]);
var inst_7718 = (inst_7717__$1 == null);
var state_7740__$1 = (function (){var statearr_7744 = state_7740;
(statearr_7744[(7)] = inst_7717__$1);

return statearr_7744;
})();
if(cljs.core.truth_(inst_7718)){
var statearr_7745_7766 = state_7740__$1;
(statearr_7745_7766[(1)] = (5));

} else {
var statearr_7746_7767 = state_7740__$1;
(statearr_7746_7767[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (13))){
var state_7740__$1 = state_7740;
var statearr_7747_7768 = state_7740__$1;
(statearr_7747_7768[(2)] = null);

(statearr_7747_7768[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (6))){
var inst_7717 = (state_7740[(7)]);
var inst_7723 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_7717) : p.call(null,inst_7717));
var state_7740__$1 = state_7740;
if(cljs.core.truth_(inst_7723)){
var statearr_7748_7769 = state_7740__$1;
(statearr_7748_7769[(1)] = (9));

} else {
var statearr_7749_7770 = state_7740__$1;
(statearr_7749_7770[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (3))){
var inst_7738 = (state_7740[(2)]);
var state_7740__$1 = state_7740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7740__$1,inst_7738);
} else {
if((state_val_7741 === (12))){
var state_7740__$1 = state_7740;
var statearr_7750_7771 = state_7740__$1;
(statearr_7750_7771[(2)] = null);

(statearr_7750_7771[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (2))){
var state_7740__$1 = state_7740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7740__$1,(4),ch);
} else {
if((state_val_7741 === (11))){
var inst_7717 = (state_7740[(7)]);
var inst_7727 = (state_7740[(2)]);
var state_7740__$1 = state_7740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7740__$1,(8),inst_7727,inst_7717);
} else {
if((state_val_7741 === (9))){
var state_7740__$1 = state_7740;
var statearr_7751_7772 = state_7740__$1;
(statearr_7751_7772[(2)] = tc);

(statearr_7751_7772[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (5))){
var inst_7720 = cljs.core.async.close_BANG_(tc);
var inst_7721 = cljs.core.async.close_BANG_(fc);
var state_7740__$1 = (function (){var statearr_7752 = state_7740;
(statearr_7752[(8)] = inst_7720);

return statearr_7752;
})();
var statearr_7753_7773 = state_7740__$1;
(statearr_7753_7773[(2)] = inst_7721);

(statearr_7753_7773[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (14))){
var inst_7734 = (state_7740[(2)]);
var state_7740__$1 = state_7740;
var statearr_7754_7774 = state_7740__$1;
(statearr_7754_7774[(2)] = inst_7734);

(statearr_7754_7774[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (10))){
var state_7740__$1 = state_7740;
var statearr_7755_7775 = state_7740__$1;
(statearr_7755_7775[(2)] = fc);

(statearr_7755_7775[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7741 === (8))){
var inst_7729 = (state_7740[(2)]);
var state_7740__$1 = state_7740;
if(cljs.core.truth_(inst_7729)){
var statearr_7756_7776 = state_7740__$1;
(statearr_7756_7776[(1)] = (12));

} else {
var statearr_7757_7777 = state_7740__$1;
(statearr_7757_7777[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___7763,tc,fc))
;
return ((function (switch__7208__auto__,c__7311__auto___7763,tc,fc){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_7758 = [null,null,null,null,null,null,null,null,null];
(statearr_7758[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_7758[(1)] = (1));

return statearr_7758;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_7740){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7740);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7759){if((e7759 instanceof Object)){
var ex__7212__auto__ = e7759;
var statearr_7760_7778 = state_7740;
(statearr_7760_7778[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7740);

return cljs.core.cst$kw$recur;
} else {
throw e7759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7779 = state_7740;
state_7740 = G__7779;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_7740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_7740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___7763,tc,fc))
})();
var state__7313__auto__ = (function (){var statearr_7761 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7761[(6)] = c__7311__auto___7763);

return statearr_7761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___7763,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__){
return (function (state_7800){
var state_val_7801 = (state_7800[(1)]);
if((state_val_7801 === (7))){
var inst_7796 = (state_7800[(2)]);
var state_7800__$1 = state_7800;
var statearr_7802_7820 = state_7800__$1;
(statearr_7802_7820[(2)] = inst_7796);

(statearr_7802_7820[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (1))){
var inst_7780 = init;
var state_7800__$1 = (function (){var statearr_7803 = state_7800;
(statearr_7803[(7)] = inst_7780);

return statearr_7803;
})();
var statearr_7804_7821 = state_7800__$1;
(statearr_7804_7821[(2)] = null);

(statearr_7804_7821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (4))){
var inst_7783 = (state_7800[(8)]);
var inst_7783__$1 = (state_7800[(2)]);
var inst_7784 = (inst_7783__$1 == null);
var state_7800__$1 = (function (){var statearr_7805 = state_7800;
(statearr_7805[(8)] = inst_7783__$1);

return statearr_7805;
})();
if(cljs.core.truth_(inst_7784)){
var statearr_7806_7822 = state_7800__$1;
(statearr_7806_7822[(1)] = (5));

} else {
var statearr_7807_7823 = state_7800__$1;
(statearr_7807_7823[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (6))){
var inst_7780 = (state_7800[(7)]);
var inst_7787 = (state_7800[(9)]);
var inst_7783 = (state_7800[(8)]);
var inst_7787__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_7780,inst_7783) : f.call(null,inst_7780,inst_7783));
var inst_7788 = cljs.core.reduced_QMARK_(inst_7787__$1);
var state_7800__$1 = (function (){var statearr_7808 = state_7800;
(statearr_7808[(9)] = inst_7787__$1);

return statearr_7808;
})();
if(inst_7788){
var statearr_7809_7824 = state_7800__$1;
(statearr_7809_7824[(1)] = (8));

} else {
var statearr_7810_7825 = state_7800__$1;
(statearr_7810_7825[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (3))){
var inst_7798 = (state_7800[(2)]);
var state_7800__$1 = state_7800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7800__$1,inst_7798);
} else {
if((state_val_7801 === (2))){
var state_7800__$1 = state_7800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7800__$1,(4),ch);
} else {
if((state_val_7801 === (9))){
var inst_7787 = (state_7800[(9)]);
var inst_7780 = inst_7787;
var state_7800__$1 = (function (){var statearr_7811 = state_7800;
(statearr_7811[(7)] = inst_7780);

return statearr_7811;
})();
var statearr_7812_7826 = state_7800__$1;
(statearr_7812_7826[(2)] = null);

(statearr_7812_7826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (5))){
var inst_7780 = (state_7800[(7)]);
var state_7800__$1 = state_7800;
var statearr_7813_7827 = state_7800__$1;
(statearr_7813_7827[(2)] = inst_7780);

(statearr_7813_7827[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (10))){
var inst_7794 = (state_7800[(2)]);
var state_7800__$1 = state_7800;
var statearr_7814_7828 = state_7800__$1;
(statearr_7814_7828[(2)] = inst_7794);

(statearr_7814_7828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7801 === (8))){
var inst_7787 = (state_7800[(9)]);
var inst_7790 = cljs.core.deref(inst_7787);
var state_7800__$1 = state_7800;
var statearr_7815_7829 = state_7800__$1;
(statearr_7815_7829[(2)] = inst_7790);

(statearr_7815_7829[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto__))
;
return ((function (switch__7208__auto__,c__7311__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7209__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7209__auto____0 = (function (){
var statearr_7816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7816[(0)] = cljs$core$async$reduce_$_state_machine__7209__auto__);

(statearr_7816[(1)] = (1));

return statearr_7816;
});
var cljs$core$async$reduce_$_state_machine__7209__auto____1 = (function (state_7800){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7800);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7817){if((e7817 instanceof Object)){
var ex__7212__auto__ = e7817;
var statearr_7818_7830 = state_7800;
(statearr_7818_7830[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7800);

return cljs.core.cst$kw$recur;
} else {
throw e7817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7831 = state_7800;
state_7800 = G__7831;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7209__auto__ = function(state_7800){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7209__auto____1.call(this,state_7800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7209__auto____0;
cljs$core$async$reduce_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7209__auto____1;
return cljs$core$async$reduce_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__))
})();
var state__7313__auto__ = (function (){var statearr_7819 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7819[(6)] = c__7311__auto__);

return statearr_7819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__))
);

return c__7311__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__,f__$1){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__,f__$1){
return (function (state_7837){
var state_val_7838 = (state_7837[(1)]);
if((state_val_7838 === (1))){
var inst_7832 = cljs.core.async.reduce(f__$1,init,ch);
var state_7837__$1 = state_7837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7837__$1,(2),inst_7832);
} else {
if((state_val_7838 === (2))){
var inst_7834 = (state_7837[(2)]);
var inst_7835 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_7834) : f__$1.call(null,inst_7834));
var state_7837__$1 = state_7837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7837__$1,inst_7835);
} else {
return null;
}
}
});})(c__7311__auto__,f__$1))
;
return ((function (switch__7208__auto__,c__7311__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7209__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7209__auto____0 = (function (){
var statearr_7839 = [null,null,null,null,null,null,null];
(statearr_7839[(0)] = cljs$core$async$transduce_$_state_machine__7209__auto__);

(statearr_7839[(1)] = (1));

return statearr_7839;
});
var cljs$core$async$transduce_$_state_machine__7209__auto____1 = (function (state_7837){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7837);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7840){if((e7840 instanceof Object)){
var ex__7212__auto__ = e7840;
var statearr_7841_7843 = state_7837;
(statearr_7841_7843[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7837);

return cljs.core.cst$kw$recur;
} else {
throw e7840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7844 = state_7837;
state_7837 = G__7844;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7209__auto__ = function(state_7837){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7209__auto____1.call(this,state_7837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7209__auto____0;
cljs$core$async$transduce_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7209__auto____1;
return cljs$core$async$transduce_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__,f__$1))
})();
var state__7313__auto__ = (function (){var statearr_7842 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7842[(6)] = c__7311__auto__);

return statearr_7842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__,f__$1))
);

return c__7311__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__7846 = arguments.length;
switch (G__7846) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__){
return (function (state_7871){
var state_val_7872 = (state_7871[(1)]);
if((state_val_7872 === (7))){
var inst_7853 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
var statearr_7873_7894 = state_7871__$1;
(statearr_7873_7894[(2)] = inst_7853);

(statearr_7873_7894[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (1))){
var inst_7847 = cljs.core.seq(coll);
var inst_7848 = inst_7847;
var state_7871__$1 = (function (){var statearr_7874 = state_7871;
(statearr_7874[(7)] = inst_7848);

return statearr_7874;
})();
var statearr_7875_7895 = state_7871__$1;
(statearr_7875_7895[(2)] = null);

(statearr_7875_7895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (4))){
var inst_7848 = (state_7871[(7)]);
var inst_7851 = cljs.core.first(inst_7848);
var state_7871__$1 = state_7871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7871__$1,(7),ch,inst_7851);
} else {
if((state_val_7872 === (13))){
var inst_7865 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
var statearr_7876_7896 = state_7871__$1;
(statearr_7876_7896[(2)] = inst_7865);

(statearr_7876_7896[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (6))){
var inst_7856 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
if(cljs.core.truth_(inst_7856)){
var statearr_7877_7897 = state_7871__$1;
(statearr_7877_7897[(1)] = (8));

} else {
var statearr_7878_7898 = state_7871__$1;
(statearr_7878_7898[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (3))){
var inst_7869 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7871__$1,inst_7869);
} else {
if((state_val_7872 === (12))){
var state_7871__$1 = state_7871;
var statearr_7879_7899 = state_7871__$1;
(statearr_7879_7899[(2)] = null);

(statearr_7879_7899[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (2))){
var inst_7848 = (state_7871[(7)]);
var state_7871__$1 = state_7871;
if(cljs.core.truth_(inst_7848)){
var statearr_7880_7900 = state_7871__$1;
(statearr_7880_7900[(1)] = (4));

} else {
var statearr_7881_7901 = state_7871__$1;
(statearr_7881_7901[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (11))){
var inst_7862 = cljs.core.async.close_BANG_(ch);
var state_7871__$1 = state_7871;
var statearr_7882_7902 = state_7871__$1;
(statearr_7882_7902[(2)] = inst_7862);

(statearr_7882_7902[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (9))){
var state_7871__$1 = state_7871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7883_7903 = state_7871__$1;
(statearr_7883_7903[(1)] = (11));

} else {
var statearr_7884_7904 = state_7871__$1;
(statearr_7884_7904[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (5))){
var inst_7848 = (state_7871[(7)]);
var state_7871__$1 = state_7871;
var statearr_7885_7905 = state_7871__$1;
(statearr_7885_7905[(2)] = inst_7848);

(statearr_7885_7905[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (10))){
var inst_7867 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
var statearr_7886_7906 = state_7871__$1;
(statearr_7886_7906[(2)] = inst_7867);

(statearr_7886_7906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7872 === (8))){
var inst_7848 = (state_7871[(7)]);
var inst_7858 = cljs.core.next(inst_7848);
var inst_7848__$1 = inst_7858;
var state_7871__$1 = (function (){var statearr_7887 = state_7871;
(statearr_7887[(7)] = inst_7848__$1);

return statearr_7887;
})();
var statearr_7888_7907 = state_7871__$1;
(statearr_7888_7907[(2)] = null);

(statearr_7888_7907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto__))
;
return ((function (switch__7208__auto__,c__7311__auto__){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_7889 = [null,null,null,null,null,null,null,null];
(statearr_7889[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_7889[(1)] = (1));

return statearr_7889;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_7871){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_7871);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e7890){if((e7890 instanceof Object)){
var ex__7212__auto__ = e7890;
var statearr_7891_7908 = state_7871;
(statearr_7891_7908[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7871);

return cljs.core.cst$kw$recur;
} else {
throw e7890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__7909 = state_7871;
state_7871 = G__7909;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_7871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_7871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__))
})();
var state__7313__auto__ = (function (){var statearr_7892 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_7892[(6)] = c__7311__auto__);

return statearr_7892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__))
);

return c__7311__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7910 = (function (ch,cs,meta7911){
this.ch = ch;
this.cs = cs;
this.meta7911 = meta7911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7912,meta7911__$1){
var self__ = this;
var _7912__$1 = this;
return (new cljs.core.async.t_cljs$core$async7910(self__.ch,self__.cs,meta7911__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7912){
var self__ = this;
var _7912__$1 = this;
return self__.meta7911;
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta7911], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7910";

cljs.core.async.t_cljs$core$async7910.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7910");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7910.
 */
cljs.core.async.__GT_t_cljs$core$async7910 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7910(ch__$1,cs__$1,meta7911){
return (new cljs.core.async.t_cljs$core$async7910(ch__$1,cs__$1,meta7911));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7910(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7311__auto___8132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8132,cs,m,dchan,dctr,done){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8132,cs,m,dchan,dctr,done){
return (function (state_8047){
var state_val_8048 = (state_8047[(1)]);
if((state_val_8048 === (7))){
var inst_8043 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8049_8133 = state_8047__$1;
(statearr_8049_8133[(2)] = inst_8043);

(statearr_8049_8133[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (20))){
var inst_7946 = (state_8047[(7)]);
var inst_7958 = cljs.core.first(inst_7946);
var inst_7959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7958,(0),null);
var inst_7960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7958,(1),null);
var state_8047__$1 = (function (){var statearr_8050 = state_8047;
(statearr_8050[(8)] = inst_7959);

return statearr_8050;
})();
if(cljs.core.truth_(inst_7960)){
var statearr_8051_8134 = state_8047__$1;
(statearr_8051_8134[(1)] = (22));

} else {
var statearr_8052_8135 = state_8047__$1;
(statearr_8052_8135[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (27))){
var inst_7995 = (state_8047[(9)]);
var inst_7988 = (state_8047[(10)]);
var inst_7915 = (state_8047[(11)]);
var inst_7990 = (state_8047[(12)]);
var inst_7995__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7988,inst_7990);
var inst_7996 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7995__$1,inst_7915,done);
var state_8047__$1 = (function (){var statearr_8053 = state_8047;
(statearr_8053[(9)] = inst_7995__$1);

return statearr_8053;
})();
if(cljs.core.truth_(inst_7996)){
var statearr_8054_8136 = state_8047__$1;
(statearr_8054_8136[(1)] = (30));

} else {
var statearr_8055_8137 = state_8047__$1;
(statearr_8055_8137[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (1))){
var state_8047__$1 = state_8047;
var statearr_8056_8138 = state_8047__$1;
(statearr_8056_8138[(2)] = null);

(statearr_8056_8138[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (24))){
var inst_7946 = (state_8047[(7)]);
var inst_7965 = (state_8047[(2)]);
var inst_7966 = cljs.core.next(inst_7946);
var inst_7924 = inst_7966;
var inst_7925 = null;
var inst_7926 = (0);
var inst_7927 = (0);
var state_8047__$1 = (function (){var statearr_8057 = state_8047;
(statearr_8057[(13)] = inst_7926);

(statearr_8057[(14)] = inst_7925);

(statearr_8057[(15)] = inst_7924);

(statearr_8057[(16)] = inst_7965);

(statearr_8057[(17)] = inst_7927);

return statearr_8057;
})();
var statearr_8058_8139 = state_8047__$1;
(statearr_8058_8139[(2)] = null);

(statearr_8058_8139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (39))){
var state_8047__$1 = state_8047;
var statearr_8062_8140 = state_8047__$1;
(statearr_8062_8140[(2)] = null);

(statearr_8062_8140[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (4))){
var inst_7915 = (state_8047[(11)]);
var inst_7915__$1 = (state_8047[(2)]);
var inst_7916 = (inst_7915__$1 == null);
var state_8047__$1 = (function (){var statearr_8063 = state_8047;
(statearr_8063[(11)] = inst_7915__$1);

return statearr_8063;
})();
if(cljs.core.truth_(inst_7916)){
var statearr_8064_8141 = state_8047__$1;
(statearr_8064_8141[(1)] = (5));

} else {
var statearr_8065_8142 = state_8047__$1;
(statearr_8065_8142[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (15))){
var inst_7926 = (state_8047[(13)]);
var inst_7925 = (state_8047[(14)]);
var inst_7924 = (state_8047[(15)]);
var inst_7927 = (state_8047[(17)]);
var inst_7942 = (state_8047[(2)]);
var inst_7943 = (inst_7927 + (1));
var tmp8059 = inst_7926;
var tmp8060 = inst_7925;
var tmp8061 = inst_7924;
var inst_7924__$1 = tmp8061;
var inst_7925__$1 = tmp8060;
var inst_7926__$1 = tmp8059;
var inst_7927__$1 = inst_7943;
var state_8047__$1 = (function (){var statearr_8066 = state_8047;
(statearr_8066[(13)] = inst_7926__$1);

(statearr_8066[(14)] = inst_7925__$1);

(statearr_8066[(15)] = inst_7924__$1);

(statearr_8066[(18)] = inst_7942);

(statearr_8066[(17)] = inst_7927__$1);

return statearr_8066;
})();
var statearr_8067_8143 = state_8047__$1;
(statearr_8067_8143[(2)] = null);

(statearr_8067_8143[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (21))){
var inst_7969 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8071_8144 = state_8047__$1;
(statearr_8071_8144[(2)] = inst_7969);

(statearr_8071_8144[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (31))){
var inst_7995 = (state_8047[(9)]);
var inst_7999 = done(null);
var inst_8000 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7995);
var state_8047__$1 = (function (){var statearr_8072 = state_8047;
(statearr_8072[(19)] = inst_7999);

return statearr_8072;
})();
var statearr_8073_8145 = state_8047__$1;
(statearr_8073_8145[(2)] = inst_8000);

(statearr_8073_8145[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (32))){
var inst_7988 = (state_8047[(10)]);
var inst_7987 = (state_8047[(20)]);
var inst_7990 = (state_8047[(12)]);
var inst_7989 = (state_8047[(21)]);
var inst_8002 = (state_8047[(2)]);
var inst_8003 = (inst_7990 + (1));
var tmp8068 = inst_7988;
var tmp8069 = inst_7987;
var tmp8070 = inst_7989;
var inst_7987__$1 = tmp8069;
var inst_7988__$1 = tmp8068;
var inst_7989__$1 = tmp8070;
var inst_7990__$1 = inst_8003;
var state_8047__$1 = (function (){var statearr_8074 = state_8047;
(statearr_8074[(10)] = inst_7988__$1);

(statearr_8074[(20)] = inst_7987__$1);

(statearr_8074[(22)] = inst_8002);

(statearr_8074[(12)] = inst_7990__$1);

(statearr_8074[(21)] = inst_7989__$1);

return statearr_8074;
})();
var statearr_8075_8146 = state_8047__$1;
(statearr_8075_8146[(2)] = null);

(statearr_8075_8146[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (40))){
var inst_8015 = (state_8047[(23)]);
var inst_8019 = done(null);
var inst_8020 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8015);
var state_8047__$1 = (function (){var statearr_8076 = state_8047;
(statearr_8076[(24)] = inst_8019);

return statearr_8076;
})();
var statearr_8077_8147 = state_8047__$1;
(statearr_8077_8147[(2)] = inst_8020);

(statearr_8077_8147[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (33))){
var inst_8006 = (state_8047[(25)]);
var inst_8008 = cljs.core.chunked_seq_QMARK_(inst_8006);
var state_8047__$1 = state_8047;
if(inst_8008){
var statearr_8078_8148 = state_8047__$1;
(statearr_8078_8148[(1)] = (36));

} else {
var statearr_8079_8149 = state_8047__$1;
(statearr_8079_8149[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (13))){
var inst_7936 = (state_8047[(26)]);
var inst_7939 = cljs.core.async.close_BANG_(inst_7936);
var state_8047__$1 = state_8047;
var statearr_8080_8150 = state_8047__$1;
(statearr_8080_8150[(2)] = inst_7939);

(statearr_8080_8150[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (22))){
var inst_7959 = (state_8047[(8)]);
var inst_7962 = cljs.core.async.close_BANG_(inst_7959);
var state_8047__$1 = state_8047;
var statearr_8081_8151 = state_8047__$1;
(statearr_8081_8151[(2)] = inst_7962);

(statearr_8081_8151[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (36))){
var inst_8006 = (state_8047[(25)]);
var inst_8010 = cljs.core.chunk_first(inst_8006);
var inst_8011 = cljs.core.chunk_rest(inst_8006);
var inst_8012 = cljs.core.count(inst_8010);
var inst_7987 = inst_8011;
var inst_7988 = inst_8010;
var inst_7989 = inst_8012;
var inst_7990 = (0);
var state_8047__$1 = (function (){var statearr_8082 = state_8047;
(statearr_8082[(10)] = inst_7988);

(statearr_8082[(20)] = inst_7987);

(statearr_8082[(12)] = inst_7990);

(statearr_8082[(21)] = inst_7989);

return statearr_8082;
})();
var statearr_8083_8152 = state_8047__$1;
(statearr_8083_8152[(2)] = null);

(statearr_8083_8152[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (41))){
var inst_8006 = (state_8047[(25)]);
var inst_8022 = (state_8047[(2)]);
var inst_8023 = cljs.core.next(inst_8006);
var inst_7987 = inst_8023;
var inst_7988 = null;
var inst_7989 = (0);
var inst_7990 = (0);
var state_8047__$1 = (function (){var statearr_8084 = state_8047;
(statearr_8084[(27)] = inst_8022);

(statearr_8084[(10)] = inst_7988);

(statearr_8084[(20)] = inst_7987);

(statearr_8084[(12)] = inst_7990);

(statearr_8084[(21)] = inst_7989);

return statearr_8084;
})();
var statearr_8085_8153 = state_8047__$1;
(statearr_8085_8153[(2)] = null);

(statearr_8085_8153[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (43))){
var state_8047__$1 = state_8047;
var statearr_8086_8154 = state_8047__$1;
(statearr_8086_8154[(2)] = null);

(statearr_8086_8154[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (29))){
var inst_8031 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8087_8155 = state_8047__$1;
(statearr_8087_8155[(2)] = inst_8031);

(statearr_8087_8155[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (44))){
var inst_8040 = (state_8047[(2)]);
var state_8047__$1 = (function (){var statearr_8088 = state_8047;
(statearr_8088[(28)] = inst_8040);

return statearr_8088;
})();
var statearr_8089_8156 = state_8047__$1;
(statearr_8089_8156[(2)] = null);

(statearr_8089_8156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (6))){
var inst_7979 = (state_8047[(29)]);
var inst_7978 = cljs.core.deref(cs);
var inst_7979__$1 = cljs.core.keys(inst_7978);
var inst_7980 = cljs.core.count(inst_7979__$1);
var inst_7981 = cljs.core.reset_BANG_(dctr,inst_7980);
var inst_7986 = cljs.core.seq(inst_7979__$1);
var inst_7987 = inst_7986;
var inst_7988 = null;
var inst_7989 = (0);
var inst_7990 = (0);
var state_8047__$1 = (function (){var statearr_8090 = state_8047;
(statearr_8090[(30)] = inst_7981);

(statearr_8090[(10)] = inst_7988);

(statearr_8090[(29)] = inst_7979__$1);

(statearr_8090[(20)] = inst_7987);

(statearr_8090[(12)] = inst_7990);

(statearr_8090[(21)] = inst_7989);

return statearr_8090;
})();
var statearr_8091_8157 = state_8047__$1;
(statearr_8091_8157[(2)] = null);

(statearr_8091_8157[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (28))){
var inst_8006 = (state_8047[(25)]);
var inst_7987 = (state_8047[(20)]);
var inst_8006__$1 = cljs.core.seq(inst_7987);
var state_8047__$1 = (function (){var statearr_8092 = state_8047;
(statearr_8092[(25)] = inst_8006__$1);

return statearr_8092;
})();
if(inst_8006__$1){
var statearr_8093_8158 = state_8047__$1;
(statearr_8093_8158[(1)] = (33));

} else {
var statearr_8094_8159 = state_8047__$1;
(statearr_8094_8159[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (25))){
var inst_7990 = (state_8047[(12)]);
var inst_7989 = (state_8047[(21)]);
var inst_7992 = (inst_7990 < inst_7989);
var inst_7993 = inst_7992;
var state_8047__$1 = state_8047;
if(cljs.core.truth_(inst_7993)){
var statearr_8095_8160 = state_8047__$1;
(statearr_8095_8160[(1)] = (27));

} else {
var statearr_8096_8161 = state_8047__$1;
(statearr_8096_8161[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (34))){
var state_8047__$1 = state_8047;
var statearr_8097_8162 = state_8047__$1;
(statearr_8097_8162[(2)] = null);

(statearr_8097_8162[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (17))){
var state_8047__$1 = state_8047;
var statearr_8098_8163 = state_8047__$1;
(statearr_8098_8163[(2)] = null);

(statearr_8098_8163[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (3))){
var inst_8045 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8047__$1,inst_8045);
} else {
if((state_val_8048 === (12))){
var inst_7974 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8099_8164 = state_8047__$1;
(statearr_8099_8164[(2)] = inst_7974);

(statearr_8099_8164[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (2))){
var state_8047__$1 = state_8047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8047__$1,(4),ch);
} else {
if((state_val_8048 === (23))){
var state_8047__$1 = state_8047;
var statearr_8100_8165 = state_8047__$1;
(statearr_8100_8165[(2)] = null);

(statearr_8100_8165[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (35))){
var inst_8029 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8101_8166 = state_8047__$1;
(statearr_8101_8166[(2)] = inst_8029);

(statearr_8101_8166[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (19))){
var inst_7946 = (state_8047[(7)]);
var inst_7950 = cljs.core.chunk_first(inst_7946);
var inst_7951 = cljs.core.chunk_rest(inst_7946);
var inst_7952 = cljs.core.count(inst_7950);
var inst_7924 = inst_7951;
var inst_7925 = inst_7950;
var inst_7926 = inst_7952;
var inst_7927 = (0);
var state_8047__$1 = (function (){var statearr_8102 = state_8047;
(statearr_8102[(13)] = inst_7926);

(statearr_8102[(14)] = inst_7925);

(statearr_8102[(15)] = inst_7924);

(statearr_8102[(17)] = inst_7927);

return statearr_8102;
})();
var statearr_8103_8167 = state_8047__$1;
(statearr_8103_8167[(2)] = null);

(statearr_8103_8167[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (11))){
var inst_7924 = (state_8047[(15)]);
var inst_7946 = (state_8047[(7)]);
var inst_7946__$1 = cljs.core.seq(inst_7924);
var state_8047__$1 = (function (){var statearr_8104 = state_8047;
(statearr_8104[(7)] = inst_7946__$1);

return statearr_8104;
})();
if(inst_7946__$1){
var statearr_8105_8168 = state_8047__$1;
(statearr_8105_8168[(1)] = (16));

} else {
var statearr_8106_8169 = state_8047__$1;
(statearr_8106_8169[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (9))){
var inst_7976 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8107_8170 = state_8047__$1;
(statearr_8107_8170[(2)] = inst_7976);

(statearr_8107_8170[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (5))){
var inst_7922 = cljs.core.deref(cs);
var inst_7923 = cljs.core.seq(inst_7922);
var inst_7924 = inst_7923;
var inst_7925 = null;
var inst_7926 = (0);
var inst_7927 = (0);
var state_8047__$1 = (function (){var statearr_8108 = state_8047;
(statearr_8108[(13)] = inst_7926);

(statearr_8108[(14)] = inst_7925);

(statearr_8108[(15)] = inst_7924);

(statearr_8108[(17)] = inst_7927);

return statearr_8108;
})();
var statearr_8109_8171 = state_8047__$1;
(statearr_8109_8171[(2)] = null);

(statearr_8109_8171[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (14))){
var state_8047__$1 = state_8047;
var statearr_8110_8172 = state_8047__$1;
(statearr_8110_8172[(2)] = null);

(statearr_8110_8172[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (45))){
var inst_8037 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8111_8173 = state_8047__$1;
(statearr_8111_8173[(2)] = inst_8037);

(statearr_8111_8173[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (26))){
var inst_7979 = (state_8047[(29)]);
var inst_8033 = (state_8047[(2)]);
var inst_8034 = cljs.core.seq(inst_7979);
var state_8047__$1 = (function (){var statearr_8112 = state_8047;
(statearr_8112[(31)] = inst_8033);

return statearr_8112;
})();
if(inst_8034){
var statearr_8113_8174 = state_8047__$1;
(statearr_8113_8174[(1)] = (42));

} else {
var statearr_8114_8175 = state_8047__$1;
(statearr_8114_8175[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (16))){
var inst_7946 = (state_8047[(7)]);
var inst_7948 = cljs.core.chunked_seq_QMARK_(inst_7946);
var state_8047__$1 = state_8047;
if(inst_7948){
var statearr_8115_8176 = state_8047__$1;
(statearr_8115_8176[(1)] = (19));

} else {
var statearr_8116_8177 = state_8047__$1;
(statearr_8116_8177[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (38))){
var inst_8026 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8117_8178 = state_8047__$1;
(statearr_8117_8178[(2)] = inst_8026);

(statearr_8117_8178[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (30))){
var state_8047__$1 = state_8047;
var statearr_8118_8179 = state_8047__$1;
(statearr_8118_8179[(2)] = null);

(statearr_8118_8179[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (10))){
var inst_7925 = (state_8047[(14)]);
var inst_7927 = (state_8047[(17)]);
var inst_7935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7925,inst_7927);
var inst_7936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7935,(0),null);
var inst_7937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7935,(1),null);
var state_8047__$1 = (function (){var statearr_8119 = state_8047;
(statearr_8119[(26)] = inst_7936);

return statearr_8119;
})();
if(cljs.core.truth_(inst_7937)){
var statearr_8120_8180 = state_8047__$1;
(statearr_8120_8180[(1)] = (13));

} else {
var statearr_8121_8181 = state_8047__$1;
(statearr_8121_8181[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (18))){
var inst_7972 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8122_8182 = state_8047__$1;
(statearr_8122_8182[(2)] = inst_7972);

(statearr_8122_8182[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (42))){
var state_8047__$1 = state_8047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8047__$1,(45),dchan);
} else {
if((state_val_8048 === (37))){
var inst_8015 = (state_8047[(23)]);
var inst_8006 = (state_8047[(25)]);
var inst_7915 = (state_8047[(11)]);
var inst_8015__$1 = cljs.core.first(inst_8006);
var inst_8016 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8015__$1,inst_7915,done);
var state_8047__$1 = (function (){var statearr_8123 = state_8047;
(statearr_8123[(23)] = inst_8015__$1);

return statearr_8123;
})();
if(cljs.core.truth_(inst_8016)){
var statearr_8124_8183 = state_8047__$1;
(statearr_8124_8183[(1)] = (39));

} else {
var statearr_8125_8184 = state_8047__$1;
(statearr_8125_8184[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8048 === (8))){
var inst_7926 = (state_8047[(13)]);
var inst_7927 = (state_8047[(17)]);
var inst_7929 = (inst_7927 < inst_7926);
var inst_7930 = inst_7929;
var state_8047__$1 = state_8047;
if(cljs.core.truth_(inst_7930)){
var statearr_8126_8185 = state_8047__$1;
(statearr_8126_8185[(1)] = (10));

} else {
var statearr_8127_8186 = state_8047__$1;
(statearr_8127_8186[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8132,cs,m,dchan,dctr,done))
;
return ((function (switch__7208__auto__,c__7311__auto___8132,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7209__auto__ = null;
var cljs$core$async$mult_$_state_machine__7209__auto____0 = (function (){
var statearr_8128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8128[(0)] = cljs$core$async$mult_$_state_machine__7209__auto__);

(statearr_8128[(1)] = (1));

return statearr_8128;
});
var cljs$core$async$mult_$_state_machine__7209__auto____1 = (function (state_8047){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8047);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8129){if((e8129 instanceof Object)){
var ex__7212__auto__ = e8129;
var statearr_8130_8187 = state_8047;
(statearr_8130_8187[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8047);

return cljs.core.cst$kw$recur;
} else {
throw e8129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8188 = state_8047;
state_8047 = G__8188;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7209__auto__ = function(state_8047){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7209__auto____1.call(this,state_8047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7209__auto____0;
cljs$core$async$mult_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7209__auto____1;
return cljs$core$async$mult_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8132,cs,m,dchan,dctr,done))
})();
var state__7313__auto__ = (function (){var statearr_8131 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8131[(6)] = c__7311__auto___8132);

return statearr_8131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8132,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__8190 = arguments.length;
switch (G__8190) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8202 = arguments.length;
var i__4532__auto___8203 = (0);
while(true){
if((i__4532__auto___8203 < len__4531__auto___8202)){
args__4534__auto__.push((arguments[i__4532__auto___8203]));

var G__8204 = (i__4532__auto___8203 + (1));
i__4532__auto___8203 = G__8204;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8196){
var map__8197 = p__8196;
var map__8197__$1 = ((((!((map__8197 == null)))?(((((map__8197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8197):map__8197);
var opts = map__8197__$1;
var statearr_8199_8205 = state;
(statearr_8199_8205[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__8197,map__8197__$1,opts){
return (function (val){
var statearr_8200_8206 = state;
(statearr_8200_8206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__8197,map__8197__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_8201_8207 = state;
(statearr_8201_8207[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8192){
var G__8193 = cljs.core.first(seq8192);
var seq8192__$1 = cljs.core.next(seq8192);
var G__8194 = cljs.core.first(seq8192__$1);
var seq8192__$2 = cljs.core.next(seq8192__$1);
var G__8195 = cljs.core.first(seq8192__$2);
var seq8192__$3 = cljs.core.next(seq8192__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8193,G__8194,G__8195,seq8192__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8208 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8209){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8209 = meta8209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8210,meta8209__$1){
var self__ = this;
var _8210__$1 = this;
return (new cljs.core.async.t_cljs$core$async8208(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8209__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8210){
var self__ = this;
var _8210__$1 = this;
return self__.meta8209;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta8209], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8208";

cljs.core.async.t_cljs$core$async8208.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8208");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8208.
 */
cljs.core.async.__GT_t_cljs$core$async8208 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8208(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8209){
return (new cljs.core.async.t_cljs$core$async8208(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8209));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8208(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7311__auto___8372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8312){
var state_val_8313 = (state_8312[(1)]);
if((state_val_8313 === (7))){
var inst_8227 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8314_8373 = state_8312__$1;
(statearr_8314_8373[(2)] = inst_8227);

(statearr_8314_8373[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (20))){
var inst_8239 = (state_8312[(7)]);
var state_8312__$1 = state_8312;
var statearr_8315_8374 = state_8312__$1;
(statearr_8315_8374[(2)] = inst_8239);

(statearr_8315_8374[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (27))){
var state_8312__$1 = state_8312;
var statearr_8316_8375 = state_8312__$1;
(statearr_8316_8375[(2)] = null);

(statearr_8316_8375[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (1))){
var inst_8214 = (state_8312[(8)]);
var inst_8214__$1 = calc_state();
var inst_8216 = (inst_8214__$1 == null);
var inst_8217 = cljs.core.not(inst_8216);
var state_8312__$1 = (function (){var statearr_8317 = state_8312;
(statearr_8317[(8)] = inst_8214__$1);

return statearr_8317;
})();
if(inst_8217){
var statearr_8318_8376 = state_8312__$1;
(statearr_8318_8376[(1)] = (2));

} else {
var statearr_8319_8377 = state_8312__$1;
(statearr_8319_8377[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (24))){
var inst_8272 = (state_8312[(9)]);
var inst_8286 = (state_8312[(10)]);
var inst_8263 = (state_8312[(11)]);
var inst_8286__$1 = (inst_8263.cljs$core$IFn$_invoke$arity$1 ? inst_8263.cljs$core$IFn$_invoke$arity$1(inst_8272) : inst_8263.call(null,inst_8272));
var state_8312__$1 = (function (){var statearr_8320 = state_8312;
(statearr_8320[(10)] = inst_8286__$1);

return statearr_8320;
})();
if(cljs.core.truth_(inst_8286__$1)){
var statearr_8321_8378 = state_8312__$1;
(statearr_8321_8378[(1)] = (29));

} else {
var statearr_8322_8379 = state_8312__$1;
(statearr_8322_8379[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (4))){
var inst_8230 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8230)){
var statearr_8323_8380 = state_8312__$1;
(statearr_8323_8380[(1)] = (8));

} else {
var statearr_8324_8381 = state_8312__$1;
(statearr_8324_8381[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (15))){
var inst_8257 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8257)){
var statearr_8325_8382 = state_8312__$1;
(statearr_8325_8382[(1)] = (19));

} else {
var statearr_8326_8383 = state_8312__$1;
(statearr_8326_8383[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (21))){
var inst_8262 = (state_8312[(12)]);
var inst_8262__$1 = (state_8312[(2)]);
var inst_8263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8262__$1,cljs.core.cst$kw$solos);
var inst_8264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8262__$1,cljs.core.cst$kw$mutes);
var inst_8265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8262__$1,cljs.core.cst$kw$reads);
var state_8312__$1 = (function (){var statearr_8327 = state_8312;
(statearr_8327[(12)] = inst_8262__$1);

(statearr_8327[(11)] = inst_8263);

(statearr_8327[(13)] = inst_8264);

return statearr_8327;
})();
return cljs.core.async.ioc_alts_BANG_(state_8312__$1,(22),inst_8265);
} else {
if((state_val_8313 === (31))){
var inst_8294 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8294)){
var statearr_8328_8384 = state_8312__$1;
(statearr_8328_8384[(1)] = (32));

} else {
var statearr_8329_8385 = state_8312__$1;
(statearr_8329_8385[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (32))){
var inst_8271 = (state_8312[(14)]);
var state_8312__$1 = state_8312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8312__$1,(35),out,inst_8271);
} else {
if((state_val_8313 === (33))){
var inst_8262 = (state_8312[(12)]);
var inst_8239 = inst_8262;
var state_8312__$1 = (function (){var statearr_8330 = state_8312;
(statearr_8330[(7)] = inst_8239);

return statearr_8330;
})();
var statearr_8331_8386 = state_8312__$1;
(statearr_8331_8386[(2)] = null);

(statearr_8331_8386[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (13))){
var inst_8239 = (state_8312[(7)]);
var inst_8246 = inst_8239.cljs$lang$protocol_mask$partition0$;
var inst_8247 = (inst_8246 & (64));
var inst_8248 = inst_8239.cljs$core$ISeq$;
var inst_8249 = (cljs.core.PROTOCOL_SENTINEL === inst_8248);
var inst_8250 = ((inst_8247) || (inst_8249));
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8250)){
var statearr_8332_8387 = state_8312__$1;
(statearr_8332_8387[(1)] = (16));

} else {
var statearr_8333_8388 = state_8312__$1;
(statearr_8333_8388[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (22))){
var inst_8271 = (state_8312[(14)]);
var inst_8272 = (state_8312[(9)]);
var inst_8270 = (state_8312[(2)]);
var inst_8271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8270,(0),null);
var inst_8272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8270,(1),null);
var inst_8273 = (inst_8271__$1 == null);
var inst_8274 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8272__$1,change);
var inst_8275 = ((inst_8273) || (inst_8274));
var state_8312__$1 = (function (){var statearr_8334 = state_8312;
(statearr_8334[(14)] = inst_8271__$1);

(statearr_8334[(9)] = inst_8272__$1);

return statearr_8334;
})();
if(cljs.core.truth_(inst_8275)){
var statearr_8335_8389 = state_8312__$1;
(statearr_8335_8389[(1)] = (23));

} else {
var statearr_8336_8390 = state_8312__$1;
(statearr_8336_8390[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (36))){
var inst_8262 = (state_8312[(12)]);
var inst_8239 = inst_8262;
var state_8312__$1 = (function (){var statearr_8337 = state_8312;
(statearr_8337[(7)] = inst_8239);

return statearr_8337;
})();
var statearr_8338_8391 = state_8312__$1;
(statearr_8338_8391[(2)] = null);

(statearr_8338_8391[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (29))){
var inst_8286 = (state_8312[(10)]);
var state_8312__$1 = state_8312;
var statearr_8339_8392 = state_8312__$1;
(statearr_8339_8392[(2)] = inst_8286);

(statearr_8339_8392[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (6))){
var state_8312__$1 = state_8312;
var statearr_8340_8393 = state_8312__$1;
(statearr_8340_8393[(2)] = false);

(statearr_8340_8393[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (28))){
var inst_8282 = (state_8312[(2)]);
var inst_8283 = calc_state();
var inst_8239 = inst_8283;
var state_8312__$1 = (function (){var statearr_8341 = state_8312;
(statearr_8341[(7)] = inst_8239);

(statearr_8341[(15)] = inst_8282);

return statearr_8341;
})();
var statearr_8342_8394 = state_8312__$1;
(statearr_8342_8394[(2)] = null);

(statearr_8342_8394[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (25))){
var inst_8308 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8343_8395 = state_8312__$1;
(statearr_8343_8395[(2)] = inst_8308);

(statearr_8343_8395[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (34))){
var inst_8306 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8344_8396 = state_8312__$1;
(statearr_8344_8396[(2)] = inst_8306);

(statearr_8344_8396[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (17))){
var state_8312__$1 = state_8312;
var statearr_8345_8397 = state_8312__$1;
(statearr_8345_8397[(2)] = false);

(statearr_8345_8397[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (3))){
var state_8312__$1 = state_8312;
var statearr_8346_8398 = state_8312__$1;
(statearr_8346_8398[(2)] = false);

(statearr_8346_8398[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (12))){
var inst_8310 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8312__$1,inst_8310);
} else {
if((state_val_8313 === (2))){
var inst_8214 = (state_8312[(8)]);
var inst_8219 = inst_8214.cljs$lang$protocol_mask$partition0$;
var inst_8220 = (inst_8219 & (64));
var inst_8221 = inst_8214.cljs$core$ISeq$;
var inst_8222 = (cljs.core.PROTOCOL_SENTINEL === inst_8221);
var inst_8223 = ((inst_8220) || (inst_8222));
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8223)){
var statearr_8347_8399 = state_8312__$1;
(statearr_8347_8399[(1)] = (5));

} else {
var statearr_8348_8400 = state_8312__$1;
(statearr_8348_8400[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (23))){
var inst_8271 = (state_8312[(14)]);
var inst_8277 = (inst_8271 == null);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8277)){
var statearr_8349_8401 = state_8312__$1;
(statearr_8349_8401[(1)] = (26));

} else {
var statearr_8350_8402 = state_8312__$1;
(statearr_8350_8402[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (35))){
var inst_8297 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
if(cljs.core.truth_(inst_8297)){
var statearr_8351_8403 = state_8312__$1;
(statearr_8351_8403[(1)] = (36));

} else {
var statearr_8352_8404 = state_8312__$1;
(statearr_8352_8404[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (19))){
var inst_8239 = (state_8312[(7)]);
var inst_8259 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8239);
var state_8312__$1 = state_8312;
var statearr_8353_8405 = state_8312__$1;
(statearr_8353_8405[(2)] = inst_8259);

(statearr_8353_8405[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (11))){
var inst_8239 = (state_8312[(7)]);
var inst_8243 = (inst_8239 == null);
var inst_8244 = cljs.core.not(inst_8243);
var state_8312__$1 = state_8312;
if(inst_8244){
var statearr_8354_8406 = state_8312__$1;
(statearr_8354_8406[(1)] = (13));

} else {
var statearr_8355_8407 = state_8312__$1;
(statearr_8355_8407[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (9))){
var inst_8214 = (state_8312[(8)]);
var state_8312__$1 = state_8312;
var statearr_8356_8408 = state_8312__$1;
(statearr_8356_8408[(2)] = inst_8214);

(statearr_8356_8408[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (5))){
var state_8312__$1 = state_8312;
var statearr_8357_8409 = state_8312__$1;
(statearr_8357_8409[(2)] = true);

(statearr_8357_8409[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (14))){
var state_8312__$1 = state_8312;
var statearr_8358_8410 = state_8312__$1;
(statearr_8358_8410[(2)] = false);

(statearr_8358_8410[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (26))){
var inst_8272 = (state_8312[(9)]);
var inst_8279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8272);
var state_8312__$1 = state_8312;
var statearr_8359_8411 = state_8312__$1;
(statearr_8359_8411[(2)] = inst_8279);

(statearr_8359_8411[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (16))){
var state_8312__$1 = state_8312;
var statearr_8360_8412 = state_8312__$1;
(statearr_8360_8412[(2)] = true);

(statearr_8360_8412[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (38))){
var inst_8302 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8361_8413 = state_8312__$1;
(statearr_8361_8413[(2)] = inst_8302);

(statearr_8361_8413[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (30))){
var inst_8272 = (state_8312[(9)]);
var inst_8263 = (state_8312[(11)]);
var inst_8264 = (state_8312[(13)]);
var inst_8289 = cljs.core.empty_QMARK_(inst_8263);
var inst_8290 = (inst_8264.cljs$core$IFn$_invoke$arity$1 ? inst_8264.cljs$core$IFn$_invoke$arity$1(inst_8272) : inst_8264.call(null,inst_8272));
var inst_8291 = cljs.core.not(inst_8290);
var inst_8292 = ((inst_8289) && (inst_8291));
var state_8312__$1 = state_8312;
var statearr_8362_8414 = state_8312__$1;
(statearr_8362_8414[(2)] = inst_8292);

(statearr_8362_8414[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (10))){
var inst_8214 = (state_8312[(8)]);
var inst_8235 = (state_8312[(2)]);
var inst_8236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8235,cljs.core.cst$kw$solos);
var inst_8237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8235,cljs.core.cst$kw$mutes);
var inst_8238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8235,cljs.core.cst$kw$reads);
var inst_8239 = inst_8214;
var state_8312__$1 = (function (){var statearr_8363 = state_8312;
(statearr_8363[(16)] = inst_8236);

(statearr_8363[(17)] = inst_8237);

(statearr_8363[(18)] = inst_8238);

(statearr_8363[(7)] = inst_8239);

return statearr_8363;
})();
var statearr_8364_8415 = state_8312__$1;
(statearr_8364_8415[(2)] = null);

(statearr_8364_8415[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (18))){
var inst_8254 = (state_8312[(2)]);
var state_8312__$1 = state_8312;
var statearr_8365_8416 = state_8312__$1;
(statearr_8365_8416[(2)] = inst_8254);

(statearr_8365_8416[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (37))){
var state_8312__$1 = state_8312;
var statearr_8366_8417 = state_8312__$1;
(statearr_8366_8417[(2)] = null);

(statearr_8366_8417[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8313 === (8))){
var inst_8214 = (state_8312[(8)]);
var inst_8232 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8214);
var state_8312__$1 = state_8312;
var statearr_8367_8418 = state_8312__$1;
(statearr_8367_8418[(2)] = inst_8232);

(statearr_8367_8418[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7208__auto__,c__7311__auto___8372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7209__auto__ = null;
var cljs$core$async$mix_$_state_machine__7209__auto____0 = (function (){
var statearr_8368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8368[(0)] = cljs$core$async$mix_$_state_machine__7209__auto__);

(statearr_8368[(1)] = (1));

return statearr_8368;
});
var cljs$core$async$mix_$_state_machine__7209__auto____1 = (function (state_8312){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8312);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8369){if((e8369 instanceof Object)){
var ex__7212__auto__ = e8369;
var statearr_8370_8419 = state_8312;
(statearr_8370_8419[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8312);

return cljs.core.cst$kw$recur;
} else {
throw e8369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8420 = state_8312;
state_8312 = G__8420;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7209__auto__ = function(state_8312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7209__auto____1.call(this,state_8312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7209__auto____0;
cljs$core$async$mix_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7209__auto____1;
return cljs$core$async$mix_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7313__auto__ = (function (){var statearr_8371 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8371[(6)] = c__7311__auto___8372);

return statearr_8371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8422 = arguments.length;
switch (G__8422) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__8426 = arguments.length;
switch (G__8426) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__8424_SHARP_){
if(cljs.core.truth_((p1__8424_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8424_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8424_SHARP_.call(null,topic)))){
return p1__8424_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8424_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8427 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8428){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8428 = meta8428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8429,meta8428__$1){
var self__ = this;
var _8429__$1 = this;
return (new cljs.core.async.t_cljs$core$async8427(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8428__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8429){
var self__ = this;
var _8429__$1 = this;
return self__.meta8428;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8428], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8427";

cljs.core.async.t_cljs$core$async8427.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8427");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8427.
 */
cljs.core.async.__GT_t_cljs$core$async8427 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8428){
return (new cljs.core.async.t_cljs$core$async8427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8428));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8427(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7311__auto___8547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8547,mults,ensure_mult,p){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8547,mults,ensure_mult,p){
return (function (state_8501){
var state_val_8502 = (state_8501[(1)]);
if((state_val_8502 === (7))){
var inst_8497 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
var statearr_8503_8548 = state_8501__$1;
(statearr_8503_8548[(2)] = inst_8497);

(statearr_8503_8548[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (20))){
var state_8501__$1 = state_8501;
var statearr_8504_8549 = state_8501__$1;
(statearr_8504_8549[(2)] = null);

(statearr_8504_8549[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (1))){
var state_8501__$1 = state_8501;
var statearr_8505_8550 = state_8501__$1;
(statearr_8505_8550[(2)] = null);

(statearr_8505_8550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (24))){
var inst_8480 = (state_8501[(7)]);
var inst_8489 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_8480);
var state_8501__$1 = state_8501;
var statearr_8506_8551 = state_8501__$1;
(statearr_8506_8551[(2)] = inst_8489);

(statearr_8506_8551[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (4))){
var inst_8432 = (state_8501[(8)]);
var inst_8432__$1 = (state_8501[(2)]);
var inst_8433 = (inst_8432__$1 == null);
var state_8501__$1 = (function (){var statearr_8507 = state_8501;
(statearr_8507[(8)] = inst_8432__$1);

return statearr_8507;
})();
if(cljs.core.truth_(inst_8433)){
var statearr_8508_8552 = state_8501__$1;
(statearr_8508_8552[(1)] = (5));

} else {
var statearr_8509_8553 = state_8501__$1;
(statearr_8509_8553[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (15))){
var inst_8474 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
var statearr_8510_8554 = state_8501__$1;
(statearr_8510_8554[(2)] = inst_8474);

(statearr_8510_8554[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (21))){
var inst_8494 = (state_8501[(2)]);
var state_8501__$1 = (function (){var statearr_8511 = state_8501;
(statearr_8511[(9)] = inst_8494);

return statearr_8511;
})();
var statearr_8512_8555 = state_8501__$1;
(statearr_8512_8555[(2)] = null);

(statearr_8512_8555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (13))){
var inst_8456 = (state_8501[(10)]);
var inst_8458 = cljs.core.chunked_seq_QMARK_(inst_8456);
var state_8501__$1 = state_8501;
if(inst_8458){
var statearr_8513_8556 = state_8501__$1;
(statearr_8513_8556[(1)] = (16));

} else {
var statearr_8514_8557 = state_8501__$1;
(statearr_8514_8557[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (22))){
var inst_8486 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
if(cljs.core.truth_(inst_8486)){
var statearr_8515_8558 = state_8501__$1;
(statearr_8515_8558[(1)] = (23));

} else {
var statearr_8516_8559 = state_8501__$1;
(statearr_8516_8559[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (6))){
var inst_8432 = (state_8501[(8)]);
var inst_8482 = (state_8501[(11)]);
var inst_8480 = (state_8501[(7)]);
var inst_8480__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8432) : topic_fn.call(null,inst_8432));
var inst_8481 = cljs.core.deref(mults);
var inst_8482__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8481,inst_8480__$1);
var state_8501__$1 = (function (){var statearr_8517 = state_8501;
(statearr_8517[(11)] = inst_8482__$1);

(statearr_8517[(7)] = inst_8480__$1);

return statearr_8517;
})();
if(cljs.core.truth_(inst_8482__$1)){
var statearr_8518_8560 = state_8501__$1;
(statearr_8518_8560[(1)] = (19));

} else {
var statearr_8519_8561 = state_8501__$1;
(statearr_8519_8561[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (25))){
var inst_8491 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
var statearr_8520_8562 = state_8501__$1;
(statearr_8520_8562[(2)] = inst_8491);

(statearr_8520_8562[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (17))){
var inst_8456 = (state_8501[(10)]);
var inst_8465 = cljs.core.first(inst_8456);
var inst_8466 = cljs.core.async.muxch_STAR_(inst_8465);
var inst_8467 = cljs.core.async.close_BANG_(inst_8466);
var inst_8468 = cljs.core.next(inst_8456);
var inst_8442 = inst_8468;
var inst_8443 = null;
var inst_8444 = (0);
var inst_8445 = (0);
var state_8501__$1 = (function (){var statearr_8521 = state_8501;
(statearr_8521[(12)] = inst_8444);

(statearr_8521[(13)] = inst_8445);

(statearr_8521[(14)] = inst_8443);

(statearr_8521[(15)] = inst_8442);

(statearr_8521[(16)] = inst_8467);

return statearr_8521;
})();
var statearr_8522_8563 = state_8501__$1;
(statearr_8522_8563[(2)] = null);

(statearr_8522_8563[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (3))){
var inst_8499 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8501__$1,inst_8499);
} else {
if((state_val_8502 === (12))){
var inst_8476 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
var statearr_8523_8564 = state_8501__$1;
(statearr_8523_8564[(2)] = inst_8476);

(statearr_8523_8564[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (2))){
var state_8501__$1 = state_8501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8501__$1,(4),ch);
} else {
if((state_val_8502 === (23))){
var state_8501__$1 = state_8501;
var statearr_8524_8565 = state_8501__$1;
(statearr_8524_8565[(2)] = null);

(statearr_8524_8565[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (19))){
var inst_8432 = (state_8501[(8)]);
var inst_8482 = (state_8501[(11)]);
var inst_8484 = cljs.core.async.muxch_STAR_(inst_8482);
var state_8501__$1 = state_8501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8501__$1,(22),inst_8484,inst_8432);
} else {
if((state_val_8502 === (11))){
var inst_8456 = (state_8501[(10)]);
var inst_8442 = (state_8501[(15)]);
var inst_8456__$1 = cljs.core.seq(inst_8442);
var state_8501__$1 = (function (){var statearr_8525 = state_8501;
(statearr_8525[(10)] = inst_8456__$1);

return statearr_8525;
})();
if(inst_8456__$1){
var statearr_8526_8566 = state_8501__$1;
(statearr_8526_8566[(1)] = (13));

} else {
var statearr_8527_8567 = state_8501__$1;
(statearr_8527_8567[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (9))){
var inst_8478 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
var statearr_8528_8568 = state_8501__$1;
(statearr_8528_8568[(2)] = inst_8478);

(statearr_8528_8568[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (5))){
var inst_8439 = cljs.core.deref(mults);
var inst_8440 = cljs.core.vals(inst_8439);
var inst_8441 = cljs.core.seq(inst_8440);
var inst_8442 = inst_8441;
var inst_8443 = null;
var inst_8444 = (0);
var inst_8445 = (0);
var state_8501__$1 = (function (){var statearr_8529 = state_8501;
(statearr_8529[(12)] = inst_8444);

(statearr_8529[(13)] = inst_8445);

(statearr_8529[(14)] = inst_8443);

(statearr_8529[(15)] = inst_8442);

return statearr_8529;
})();
var statearr_8530_8569 = state_8501__$1;
(statearr_8530_8569[(2)] = null);

(statearr_8530_8569[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (14))){
var state_8501__$1 = state_8501;
var statearr_8534_8570 = state_8501__$1;
(statearr_8534_8570[(2)] = null);

(statearr_8534_8570[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (16))){
var inst_8456 = (state_8501[(10)]);
var inst_8460 = cljs.core.chunk_first(inst_8456);
var inst_8461 = cljs.core.chunk_rest(inst_8456);
var inst_8462 = cljs.core.count(inst_8460);
var inst_8442 = inst_8461;
var inst_8443 = inst_8460;
var inst_8444 = inst_8462;
var inst_8445 = (0);
var state_8501__$1 = (function (){var statearr_8535 = state_8501;
(statearr_8535[(12)] = inst_8444);

(statearr_8535[(13)] = inst_8445);

(statearr_8535[(14)] = inst_8443);

(statearr_8535[(15)] = inst_8442);

return statearr_8535;
})();
var statearr_8536_8571 = state_8501__$1;
(statearr_8536_8571[(2)] = null);

(statearr_8536_8571[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (10))){
var inst_8444 = (state_8501[(12)]);
var inst_8445 = (state_8501[(13)]);
var inst_8443 = (state_8501[(14)]);
var inst_8442 = (state_8501[(15)]);
var inst_8450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8443,inst_8445);
var inst_8451 = cljs.core.async.muxch_STAR_(inst_8450);
var inst_8452 = cljs.core.async.close_BANG_(inst_8451);
var inst_8453 = (inst_8445 + (1));
var tmp8531 = inst_8444;
var tmp8532 = inst_8443;
var tmp8533 = inst_8442;
var inst_8442__$1 = tmp8533;
var inst_8443__$1 = tmp8532;
var inst_8444__$1 = tmp8531;
var inst_8445__$1 = inst_8453;
var state_8501__$1 = (function (){var statearr_8537 = state_8501;
(statearr_8537[(12)] = inst_8444__$1);

(statearr_8537[(13)] = inst_8445__$1);

(statearr_8537[(17)] = inst_8452);

(statearr_8537[(14)] = inst_8443__$1);

(statearr_8537[(15)] = inst_8442__$1);

return statearr_8537;
})();
var statearr_8538_8572 = state_8501__$1;
(statearr_8538_8572[(2)] = null);

(statearr_8538_8572[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (18))){
var inst_8471 = (state_8501[(2)]);
var state_8501__$1 = state_8501;
var statearr_8539_8573 = state_8501__$1;
(statearr_8539_8573[(2)] = inst_8471);

(statearr_8539_8573[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8502 === (8))){
var inst_8444 = (state_8501[(12)]);
var inst_8445 = (state_8501[(13)]);
var inst_8447 = (inst_8445 < inst_8444);
var inst_8448 = inst_8447;
var state_8501__$1 = state_8501;
if(cljs.core.truth_(inst_8448)){
var statearr_8540_8574 = state_8501__$1;
(statearr_8540_8574[(1)] = (10));

} else {
var statearr_8541_8575 = state_8501__$1;
(statearr_8541_8575[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8547,mults,ensure_mult,p))
;
return ((function (switch__7208__auto__,c__7311__auto___8547,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_8542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8542[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_8542[(1)] = (1));

return statearr_8542;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_8501){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8501);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8543){if((e8543 instanceof Object)){
var ex__7212__auto__ = e8543;
var statearr_8544_8576 = state_8501;
(statearr_8544_8576[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8501);

return cljs.core.cst$kw$recur;
} else {
throw e8543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8577 = state_8501;
state_8501 = G__8577;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_8501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_8501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8547,mults,ensure_mult,p))
})();
var state__7313__auto__ = (function (){var statearr_8545 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8545[(6)] = c__7311__auto___8547);

return statearr_8545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8547,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__8579 = arguments.length;
switch (G__8579) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__8582 = arguments.length;
switch (G__8582) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__8585 = arguments.length;
switch (G__8585) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7311__auto___8652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8624){
var state_val_8625 = (state_8624[(1)]);
if((state_val_8625 === (7))){
var state_8624__$1 = state_8624;
var statearr_8626_8653 = state_8624__$1;
(statearr_8626_8653[(2)] = null);

(statearr_8626_8653[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (1))){
var state_8624__$1 = state_8624;
var statearr_8627_8654 = state_8624__$1;
(statearr_8627_8654[(2)] = null);

(statearr_8627_8654[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (4))){
var inst_8588 = (state_8624[(7)]);
var inst_8590 = (inst_8588 < cnt);
var state_8624__$1 = state_8624;
if(cljs.core.truth_(inst_8590)){
var statearr_8628_8655 = state_8624__$1;
(statearr_8628_8655[(1)] = (6));

} else {
var statearr_8629_8656 = state_8624__$1;
(statearr_8629_8656[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (15))){
var inst_8620 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8630_8657 = state_8624__$1;
(statearr_8630_8657[(2)] = inst_8620);

(statearr_8630_8657[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (13))){
var inst_8613 = cljs.core.async.close_BANG_(out);
var state_8624__$1 = state_8624;
var statearr_8631_8658 = state_8624__$1;
(statearr_8631_8658[(2)] = inst_8613);

(statearr_8631_8658[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (6))){
var state_8624__$1 = state_8624;
var statearr_8632_8659 = state_8624__$1;
(statearr_8632_8659[(2)] = null);

(statearr_8632_8659[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (3))){
var inst_8622 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8624__$1,inst_8622);
} else {
if((state_val_8625 === (12))){
var inst_8610 = (state_8624[(8)]);
var inst_8610__$1 = (state_8624[(2)]);
var inst_8611 = cljs.core.some(cljs.core.nil_QMARK_,inst_8610__$1);
var state_8624__$1 = (function (){var statearr_8633 = state_8624;
(statearr_8633[(8)] = inst_8610__$1);

return statearr_8633;
})();
if(cljs.core.truth_(inst_8611)){
var statearr_8634_8660 = state_8624__$1;
(statearr_8634_8660[(1)] = (13));

} else {
var statearr_8635_8661 = state_8624__$1;
(statearr_8635_8661[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (2))){
var inst_8587 = cljs.core.reset_BANG_(dctr,cnt);
var inst_8588 = (0);
var state_8624__$1 = (function (){var statearr_8636 = state_8624;
(statearr_8636[(7)] = inst_8588);

(statearr_8636[(9)] = inst_8587);

return statearr_8636;
})();
var statearr_8637_8662 = state_8624__$1;
(statearr_8637_8662[(2)] = null);

(statearr_8637_8662[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (11))){
var inst_8588 = (state_8624[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_8624,(10),Object,null,(9));
var inst_8597 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_8588) : chs__$1.call(null,inst_8588));
var inst_8598 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_8588) : done.call(null,inst_8588));
var inst_8599 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_8597,inst_8598);
var state_8624__$1 = state_8624;
var statearr_8638_8663 = state_8624__$1;
(statearr_8638_8663[(2)] = inst_8599);


cljs.core.async.impl.ioc_helpers.process_exception(state_8624__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (9))){
var inst_8588 = (state_8624[(7)]);
var inst_8601 = (state_8624[(2)]);
var inst_8602 = (inst_8588 + (1));
var inst_8588__$1 = inst_8602;
var state_8624__$1 = (function (){var statearr_8639 = state_8624;
(statearr_8639[(10)] = inst_8601);

(statearr_8639[(7)] = inst_8588__$1);

return statearr_8639;
})();
var statearr_8640_8664 = state_8624__$1;
(statearr_8640_8664[(2)] = null);

(statearr_8640_8664[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (5))){
var inst_8608 = (state_8624[(2)]);
var state_8624__$1 = (function (){var statearr_8641 = state_8624;
(statearr_8641[(11)] = inst_8608);

return statearr_8641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8624__$1,(12),dchan);
} else {
if((state_val_8625 === (14))){
var inst_8610 = (state_8624[(8)]);
var inst_8615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_8610);
var state_8624__$1 = state_8624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8624__$1,(16),out,inst_8615);
} else {
if((state_val_8625 === (16))){
var inst_8617 = (state_8624[(2)]);
var state_8624__$1 = (function (){var statearr_8642 = state_8624;
(statearr_8642[(12)] = inst_8617);

return statearr_8642;
})();
var statearr_8643_8665 = state_8624__$1;
(statearr_8643_8665[(2)] = null);

(statearr_8643_8665[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (10))){
var inst_8592 = (state_8624[(2)]);
var inst_8593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_8624__$1 = (function (){var statearr_8644 = state_8624;
(statearr_8644[(13)] = inst_8592);

return statearr_8644;
})();
var statearr_8645_8666 = state_8624__$1;
(statearr_8645_8666[(2)] = inst_8593);


cljs.core.async.impl.ioc_helpers.process_exception(state_8624__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (8))){
var inst_8606 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8646_8667 = state_8624__$1;
(statearr_8646_8667[(2)] = inst_8606);

(statearr_8646_8667[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8652,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7208__auto__,c__7311__auto___8652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_8647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8647[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_8647[(1)] = (1));

return statearr_8647;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_8624){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8624);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8648){if((e8648 instanceof Object)){
var ex__7212__auto__ = e8648;
var statearr_8649_8668 = state_8624;
(statearr_8649_8668[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8624);

return cljs.core.cst$kw$recur;
} else {
throw e8648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8669 = state_8624;
state_8624 = G__8669;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_8624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_8624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8652,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7313__auto__ = (function (){var statearr_8650 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8650[(6)] = c__7311__auto___8652);

return statearr_8650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8652,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__8672 = arguments.length;
switch (G__8672) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7311__auto___8726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8726,out){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8726,out){
return (function (state_8704){
var state_val_8705 = (state_8704[(1)]);
if((state_val_8705 === (7))){
var inst_8683 = (state_8704[(7)]);
var inst_8684 = (state_8704[(8)]);
var inst_8683__$1 = (state_8704[(2)]);
var inst_8684__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8683__$1,(0),null);
var inst_8685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8683__$1,(1),null);
var inst_8686 = (inst_8684__$1 == null);
var state_8704__$1 = (function (){var statearr_8706 = state_8704;
(statearr_8706[(7)] = inst_8683__$1);

(statearr_8706[(9)] = inst_8685);

(statearr_8706[(8)] = inst_8684__$1);

return statearr_8706;
})();
if(cljs.core.truth_(inst_8686)){
var statearr_8707_8727 = state_8704__$1;
(statearr_8707_8727[(1)] = (8));

} else {
var statearr_8708_8728 = state_8704__$1;
(statearr_8708_8728[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (1))){
var inst_8673 = cljs.core.vec(chs);
var inst_8674 = inst_8673;
var state_8704__$1 = (function (){var statearr_8709 = state_8704;
(statearr_8709[(10)] = inst_8674);

return statearr_8709;
})();
var statearr_8710_8729 = state_8704__$1;
(statearr_8710_8729[(2)] = null);

(statearr_8710_8729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (4))){
var inst_8674 = (state_8704[(10)]);
var state_8704__$1 = state_8704;
return cljs.core.async.ioc_alts_BANG_(state_8704__$1,(7),inst_8674);
} else {
if((state_val_8705 === (6))){
var inst_8700 = (state_8704[(2)]);
var state_8704__$1 = state_8704;
var statearr_8711_8730 = state_8704__$1;
(statearr_8711_8730[(2)] = inst_8700);

(statearr_8711_8730[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (3))){
var inst_8702 = (state_8704[(2)]);
var state_8704__$1 = state_8704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8704__$1,inst_8702);
} else {
if((state_val_8705 === (2))){
var inst_8674 = (state_8704[(10)]);
var inst_8676 = cljs.core.count(inst_8674);
var inst_8677 = (inst_8676 > (0));
var state_8704__$1 = state_8704;
if(cljs.core.truth_(inst_8677)){
var statearr_8713_8731 = state_8704__$1;
(statearr_8713_8731[(1)] = (4));

} else {
var statearr_8714_8732 = state_8704__$1;
(statearr_8714_8732[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (11))){
var inst_8674 = (state_8704[(10)]);
var inst_8693 = (state_8704[(2)]);
var tmp8712 = inst_8674;
var inst_8674__$1 = tmp8712;
var state_8704__$1 = (function (){var statearr_8715 = state_8704;
(statearr_8715[(10)] = inst_8674__$1);

(statearr_8715[(11)] = inst_8693);

return statearr_8715;
})();
var statearr_8716_8733 = state_8704__$1;
(statearr_8716_8733[(2)] = null);

(statearr_8716_8733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (9))){
var inst_8684 = (state_8704[(8)]);
var state_8704__$1 = state_8704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8704__$1,(11),out,inst_8684);
} else {
if((state_val_8705 === (5))){
var inst_8698 = cljs.core.async.close_BANG_(out);
var state_8704__$1 = state_8704;
var statearr_8717_8734 = state_8704__$1;
(statearr_8717_8734[(2)] = inst_8698);

(statearr_8717_8734[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (10))){
var inst_8696 = (state_8704[(2)]);
var state_8704__$1 = state_8704;
var statearr_8718_8735 = state_8704__$1;
(statearr_8718_8735[(2)] = inst_8696);

(statearr_8718_8735[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8705 === (8))){
var inst_8674 = (state_8704[(10)]);
var inst_8683 = (state_8704[(7)]);
var inst_8685 = (state_8704[(9)]);
var inst_8684 = (state_8704[(8)]);
var inst_8688 = (function (){var cs = inst_8674;
var vec__8679 = inst_8683;
var v = inst_8684;
var c = inst_8685;
return ((function (cs,vec__8679,v,c,inst_8674,inst_8683,inst_8685,inst_8684,state_val_8705,c__7311__auto___8726,out){
return (function (p1__8670_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__8670_SHARP_);
});
;})(cs,vec__8679,v,c,inst_8674,inst_8683,inst_8685,inst_8684,state_val_8705,c__7311__auto___8726,out))
})();
var inst_8689 = cljs.core.filterv(inst_8688,inst_8674);
var inst_8674__$1 = inst_8689;
var state_8704__$1 = (function (){var statearr_8719 = state_8704;
(statearr_8719[(10)] = inst_8674__$1);

return statearr_8719;
})();
var statearr_8720_8736 = state_8704__$1;
(statearr_8720_8736[(2)] = null);

(statearr_8720_8736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8726,out))
;
return ((function (switch__7208__auto__,c__7311__auto___8726,out){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_8721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8721[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_8721[(1)] = (1));

return statearr_8721;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_8704){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8704);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8722){if((e8722 instanceof Object)){
var ex__7212__auto__ = e8722;
var statearr_8723_8737 = state_8704;
(statearr_8723_8737[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8704);

return cljs.core.cst$kw$recur;
} else {
throw e8722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8738 = state_8704;
state_8704 = G__8738;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_8704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_8704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8726,out))
})();
var state__7313__auto__ = (function (){var statearr_8724 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8724[(6)] = c__7311__auto___8726);

return statearr_8724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8726,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__8740 = arguments.length;
switch (G__8740) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7311__auto___8785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8785,out){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8785,out){
return (function (state_8764){
var state_val_8765 = (state_8764[(1)]);
if((state_val_8765 === (7))){
var inst_8746 = (state_8764[(7)]);
var inst_8746__$1 = (state_8764[(2)]);
var inst_8747 = (inst_8746__$1 == null);
var inst_8748 = cljs.core.not(inst_8747);
var state_8764__$1 = (function (){var statearr_8766 = state_8764;
(statearr_8766[(7)] = inst_8746__$1);

return statearr_8766;
})();
if(inst_8748){
var statearr_8767_8786 = state_8764__$1;
(statearr_8767_8786[(1)] = (8));

} else {
var statearr_8768_8787 = state_8764__$1;
(statearr_8768_8787[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (1))){
var inst_8741 = (0);
var state_8764__$1 = (function (){var statearr_8769 = state_8764;
(statearr_8769[(8)] = inst_8741);

return statearr_8769;
})();
var statearr_8770_8788 = state_8764__$1;
(statearr_8770_8788[(2)] = null);

(statearr_8770_8788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (4))){
var state_8764__$1 = state_8764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8764__$1,(7),ch);
} else {
if((state_val_8765 === (6))){
var inst_8759 = (state_8764[(2)]);
var state_8764__$1 = state_8764;
var statearr_8771_8789 = state_8764__$1;
(statearr_8771_8789[(2)] = inst_8759);

(statearr_8771_8789[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (3))){
var inst_8761 = (state_8764[(2)]);
var inst_8762 = cljs.core.async.close_BANG_(out);
var state_8764__$1 = (function (){var statearr_8772 = state_8764;
(statearr_8772[(9)] = inst_8761);

return statearr_8772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8764__$1,inst_8762);
} else {
if((state_val_8765 === (2))){
var inst_8741 = (state_8764[(8)]);
var inst_8743 = (inst_8741 < n);
var state_8764__$1 = state_8764;
if(cljs.core.truth_(inst_8743)){
var statearr_8773_8790 = state_8764__$1;
(statearr_8773_8790[(1)] = (4));

} else {
var statearr_8774_8791 = state_8764__$1;
(statearr_8774_8791[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (11))){
var inst_8741 = (state_8764[(8)]);
var inst_8751 = (state_8764[(2)]);
var inst_8752 = (inst_8741 + (1));
var inst_8741__$1 = inst_8752;
var state_8764__$1 = (function (){var statearr_8775 = state_8764;
(statearr_8775[(8)] = inst_8741__$1);

(statearr_8775[(10)] = inst_8751);

return statearr_8775;
})();
var statearr_8776_8792 = state_8764__$1;
(statearr_8776_8792[(2)] = null);

(statearr_8776_8792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (9))){
var state_8764__$1 = state_8764;
var statearr_8777_8793 = state_8764__$1;
(statearr_8777_8793[(2)] = null);

(statearr_8777_8793[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (5))){
var state_8764__$1 = state_8764;
var statearr_8778_8794 = state_8764__$1;
(statearr_8778_8794[(2)] = null);

(statearr_8778_8794[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (10))){
var inst_8756 = (state_8764[(2)]);
var state_8764__$1 = state_8764;
var statearr_8779_8795 = state_8764__$1;
(statearr_8779_8795[(2)] = inst_8756);

(statearr_8779_8795[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8765 === (8))){
var inst_8746 = (state_8764[(7)]);
var state_8764__$1 = state_8764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8764__$1,(11),out,inst_8746);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8785,out))
;
return ((function (switch__7208__auto__,c__7311__auto___8785,out){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_8780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8780[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_8780[(1)] = (1));

return statearr_8780;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_8764){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8764);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8781){if((e8781 instanceof Object)){
var ex__7212__auto__ = e8781;
var statearr_8782_8796 = state_8764;
(statearr_8782_8796[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8764);

return cljs.core.cst$kw$recur;
} else {
throw e8781;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8797 = state_8764;
state_8764 = G__8797;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_8764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_8764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8785,out))
})();
var state__7313__auto__ = (function (){var statearr_8783 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8783[(6)] = c__7311__auto___8785);

return statearr_8783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8785,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8799 = (function (f,ch,meta8800){
this.f = f;
this.ch = ch;
this.meta8800 = meta8800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8801,meta8800__$1){
var self__ = this;
var _8801__$1 = this;
return (new cljs.core.async.t_cljs$core$async8799(self__.f,self__.ch,meta8800__$1));
});

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8801){
var self__ = this;
var _8801__$1 = this;
return self__.meta8800;
});

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8802 = (function (f,ch,meta8800,_,fn1,meta8803){
this.f = f;
this.ch = ch;
this.meta8800 = meta8800;
this._ = _;
this.fn1 = fn1;
this.meta8803 = meta8803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8804,meta8803__$1){
var self__ = this;
var _8804__$1 = this;
return (new cljs.core.async.t_cljs$core$async8802(self__.f,self__.ch,self__.meta8800,self__._,self__.fn1,meta8803__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8804){
var self__ = this;
var _8804__$1 = this;
return self__.meta8803;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8798_SHARP_){
var G__8805 = (((p1__8798_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__8798_SHARP_) : self__.f.call(null,p1__8798_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__8805) : f1.call(null,G__8805));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8802.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8800,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async8799], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta8803], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8802";

cljs.core.async.t_cljs$core$async8802.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8802");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8802.
 */
cljs.core.async.__GT_t_cljs$core$async8802 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8802(f__$1,ch__$1,meta8800__$1,___$2,fn1__$1,meta8803){
return (new cljs.core.async.t_cljs$core$async8802(f__$1,ch__$1,meta8800__$1,___$2,fn1__$1,meta8803));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8802(self__.f,self__.ch,self__.meta8800,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__8806 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__8806) : self__.f.call(null,G__8806));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8800], null);
});

cljs.core.async.t_cljs$core$async8799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8799";

cljs.core.async.t_cljs$core$async8799.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8799.
 */
cljs.core.async.__GT_t_cljs$core$async8799 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8799(f__$1,ch__$1,meta8800){
return (new cljs.core.async.t_cljs$core$async8799(f__$1,ch__$1,meta8800));
});

}

return (new cljs.core.async.t_cljs$core$async8799(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8807 = (function (f,ch,meta8808){
this.f = f;
this.ch = ch;
this.meta8808 = meta8808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8809,meta8808__$1){
var self__ = this;
var _8809__$1 = this;
return (new cljs.core.async.t_cljs$core$async8807(self__.f,self__.ch,meta8808__$1));
});

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8809){
var self__ = this;
var _8809__$1 = this;
return self__.meta8808;
});

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async8807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8808], null);
});

cljs.core.async.t_cljs$core$async8807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8807";

cljs.core.async.t_cljs$core$async8807.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8807");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8807.
 */
cljs.core.async.__GT_t_cljs$core$async8807 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8807(f__$1,ch__$1,meta8808){
return (new cljs.core.async.t_cljs$core$async8807(f__$1,ch__$1,meta8808));
});

}

return (new cljs.core.async.t_cljs$core$async8807(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8810 = (function (p,ch,meta8811){
this.p = p;
this.ch = ch;
this.meta8811 = meta8811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8812,meta8811__$1){
var self__ = this;
var _8812__$1 = this;
return (new cljs.core.async.t_cljs$core$async8810(self__.p,self__.ch,meta8811__$1));
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8812){
var self__ = this;
var _8812__$1 = this;
return self__.meta8811;
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8811], null);
});

cljs.core.async.t_cljs$core$async8810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8810";

cljs.core.async.t_cljs$core$async8810.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8810");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8810.
 */
cljs.core.async.__GT_t_cljs$core$async8810 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8810(p__$1,ch__$1,meta8811){
return (new cljs.core.async.t_cljs$core$async8810(p__$1,ch__$1,meta8811));
});

}

return (new cljs.core.async.t_cljs$core$async8810(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__8814 = arguments.length;
switch (G__8814) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7311__auto___8854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___8854,out){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___8854,out){
return (function (state_8835){
var state_val_8836 = (state_8835[(1)]);
if((state_val_8836 === (7))){
var inst_8831 = (state_8835[(2)]);
var state_8835__$1 = state_8835;
var statearr_8837_8855 = state_8835__$1;
(statearr_8837_8855[(2)] = inst_8831);

(statearr_8837_8855[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (1))){
var state_8835__$1 = state_8835;
var statearr_8838_8856 = state_8835__$1;
(statearr_8838_8856[(2)] = null);

(statearr_8838_8856[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (4))){
var inst_8817 = (state_8835[(7)]);
var inst_8817__$1 = (state_8835[(2)]);
var inst_8818 = (inst_8817__$1 == null);
var state_8835__$1 = (function (){var statearr_8839 = state_8835;
(statearr_8839[(7)] = inst_8817__$1);

return statearr_8839;
})();
if(cljs.core.truth_(inst_8818)){
var statearr_8840_8857 = state_8835__$1;
(statearr_8840_8857[(1)] = (5));

} else {
var statearr_8841_8858 = state_8835__$1;
(statearr_8841_8858[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (6))){
var inst_8817 = (state_8835[(7)]);
var inst_8822 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8817) : p.call(null,inst_8817));
var state_8835__$1 = state_8835;
if(cljs.core.truth_(inst_8822)){
var statearr_8842_8859 = state_8835__$1;
(statearr_8842_8859[(1)] = (8));

} else {
var statearr_8843_8860 = state_8835__$1;
(statearr_8843_8860[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (3))){
var inst_8833 = (state_8835[(2)]);
var state_8835__$1 = state_8835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8835__$1,inst_8833);
} else {
if((state_val_8836 === (2))){
var state_8835__$1 = state_8835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8835__$1,(4),ch);
} else {
if((state_val_8836 === (11))){
var inst_8825 = (state_8835[(2)]);
var state_8835__$1 = state_8835;
var statearr_8844_8861 = state_8835__$1;
(statearr_8844_8861[(2)] = inst_8825);

(statearr_8844_8861[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (9))){
var state_8835__$1 = state_8835;
var statearr_8845_8862 = state_8835__$1;
(statearr_8845_8862[(2)] = null);

(statearr_8845_8862[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (5))){
var inst_8820 = cljs.core.async.close_BANG_(out);
var state_8835__$1 = state_8835;
var statearr_8846_8863 = state_8835__$1;
(statearr_8846_8863[(2)] = inst_8820);

(statearr_8846_8863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (10))){
var inst_8828 = (state_8835[(2)]);
var state_8835__$1 = (function (){var statearr_8847 = state_8835;
(statearr_8847[(8)] = inst_8828);

return statearr_8847;
})();
var statearr_8848_8864 = state_8835__$1;
(statearr_8848_8864[(2)] = null);

(statearr_8848_8864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8836 === (8))){
var inst_8817 = (state_8835[(7)]);
var state_8835__$1 = state_8835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8835__$1,(11),out,inst_8817);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___8854,out))
;
return ((function (switch__7208__auto__,c__7311__auto___8854,out){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_8849 = [null,null,null,null,null,null,null,null,null];
(statearr_8849[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_8849[(1)] = (1));

return statearr_8849;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_8835){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8835);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8850){if((e8850 instanceof Object)){
var ex__7212__auto__ = e8850;
var statearr_8851_8865 = state_8835;
(statearr_8851_8865[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8835);

return cljs.core.cst$kw$recur;
} else {
throw e8850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8866 = state_8835;
state_8835 = G__8866;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_8835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_8835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___8854,out))
})();
var state__7313__auto__ = (function (){var statearr_8852 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8852[(6)] = c__7311__auto___8854);

return statearr_8852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___8854,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8868 = arguments.length;
switch (G__8868) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__){
return (function (state_8931){
var state_val_8932 = (state_8931[(1)]);
if((state_val_8932 === (7))){
var inst_8927 = (state_8931[(2)]);
var state_8931__$1 = state_8931;
var statearr_8933_8971 = state_8931__$1;
(statearr_8933_8971[(2)] = inst_8927);

(statearr_8933_8971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (20))){
var inst_8897 = (state_8931[(7)]);
var inst_8908 = (state_8931[(2)]);
var inst_8909 = cljs.core.next(inst_8897);
var inst_8883 = inst_8909;
var inst_8884 = null;
var inst_8885 = (0);
var inst_8886 = (0);
var state_8931__$1 = (function (){var statearr_8934 = state_8931;
(statearr_8934[(8)] = inst_8883);

(statearr_8934[(9)] = inst_8886);

(statearr_8934[(10)] = inst_8885);

(statearr_8934[(11)] = inst_8908);

(statearr_8934[(12)] = inst_8884);

return statearr_8934;
})();
var statearr_8935_8972 = state_8931__$1;
(statearr_8935_8972[(2)] = null);

(statearr_8935_8972[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (1))){
var state_8931__$1 = state_8931;
var statearr_8936_8973 = state_8931__$1;
(statearr_8936_8973[(2)] = null);

(statearr_8936_8973[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (4))){
var inst_8872 = (state_8931[(13)]);
var inst_8872__$1 = (state_8931[(2)]);
var inst_8873 = (inst_8872__$1 == null);
var state_8931__$1 = (function (){var statearr_8937 = state_8931;
(statearr_8937[(13)] = inst_8872__$1);

return statearr_8937;
})();
if(cljs.core.truth_(inst_8873)){
var statearr_8938_8974 = state_8931__$1;
(statearr_8938_8974[(1)] = (5));

} else {
var statearr_8939_8975 = state_8931__$1;
(statearr_8939_8975[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (15))){
var state_8931__$1 = state_8931;
var statearr_8943_8976 = state_8931__$1;
(statearr_8943_8976[(2)] = null);

(statearr_8943_8976[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (21))){
var state_8931__$1 = state_8931;
var statearr_8944_8977 = state_8931__$1;
(statearr_8944_8977[(2)] = null);

(statearr_8944_8977[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (13))){
var inst_8883 = (state_8931[(8)]);
var inst_8886 = (state_8931[(9)]);
var inst_8885 = (state_8931[(10)]);
var inst_8884 = (state_8931[(12)]);
var inst_8893 = (state_8931[(2)]);
var inst_8894 = (inst_8886 + (1));
var tmp8940 = inst_8883;
var tmp8941 = inst_8885;
var tmp8942 = inst_8884;
var inst_8883__$1 = tmp8940;
var inst_8884__$1 = tmp8942;
var inst_8885__$1 = tmp8941;
var inst_8886__$1 = inst_8894;
var state_8931__$1 = (function (){var statearr_8945 = state_8931;
(statearr_8945[(14)] = inst_8893);

(statearr_8945[(8)] = inst_8883__$1);

(statearr_8945[(9)] = inst_8886__$1);

(statearr_8945[(10)] = inst_8885__$1);

(statearr_8945[(12)] = inst_8884__$1);

return statearr_8945;
})();
var statearr_8946_8978 = state_8931__$1;
(statearr_8946_8978[(2)] = null);

(statearr_8946_8978[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (22))){
var state_8931__$1 = state_8931;
var statearr_8947_8979 = state_8931__$1;
(statearr_8947_8979[(2)] = null);

(statearr_8947_8979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (6))){
var inst_8872 = (state_8931[(13)]);
var inst_8881 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_8872) : f.call(null,inst_8872));
var inst_8882 = cljs.core.seq(inst_8881);
var inst_8883 = inst_8882;
var inst_8884 = null;
var inst_8885 = (0);
var inst_8886 = (0);
var state_8931__$1 = (function (){var statearr_8948 = state_8931;
(statearr_8948[(8)] = inst_8883);

(statearr_8948[(9)] = inst_8886);

(statearr_8948[(10)] = inst_8885);

(statearr_8948[(12)] = inst_8884);

return statearr_8948;
})();
var statearr_8949_8980 = state_8931__$1;
(statearr_8949_8980[(2)] = null);

(statearr_8949_8980[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (17))){
var inst_8897 = (state_8931[(7)]);
var inst_8901 = cljs.core.chunk_first(inst_8897);
var inst_8902 = cljs.core.chunk_rest(inst_8897);
var inst_8903 = cljs.core.count(inst_8901);
var inst_8883 = inst_8902;
var inst_8884 = inst_8901;
var inst_8885 = inst_8903;
var inst_8886 = (0);
var state_8931__$1 = (function (){var statearr_8950 = state_8931;
(statearr_8950[(8)] = inst_8883);

(statearr_8950[(9)] = inst_8886);

(statearr_8950[(10)] = inst_8885);

(statearr_8950[(12)] = inst_8884);

return statearr_8950;
})();
var statearr_8951_8981 = state_8931__$1;
(statearr_8951_8981[(2)] = null);

(statearr_8951_8981[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (3))){
var inst_8929 = (state_8931[(2)]);
var state_8931__$1 = state_8931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8931__$1,inst_8929);
} else {
if((state_val_8932 === (12))){
var inst_8917 = (state_8931[(2)]);
var state_8931__$1 = state_8931;
var statearr_8952_8982 = state_8931__$1;
(statearr_8952_8982[(2)] = inst_8917);

(statearr_8952_8982[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (2))){
var state_8931__$1 = state_8931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8931__$1,(4),in$);
} else {
if((state_val_8932 === (23))){
var inst_8925 = (state_8931[(2)]);
var state_8931__$1 = state_8931;
var statearr_8953_8983 = state_8931__$1;
(statearr_8953_8983[(2)] = inst_8925);

(statearr_8953_8983[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (19))){
var inst_8912 = (state_8931[(2)]);
var state_8931__$1 = state_8931;
var statearr_8954_8984 = state_8931__$1;
(statearr_8954_8984[(2)] = inst_8912);

(statearr_8954_8984[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (11))){
var inst_8883 = (state_8931[(8)]);
var inst_8897 = (state_8931[(7)]);
var inst_8897__$1 = cljs.core.seq(inst_8883);
var state_8931__$1 = (function (){var statearr_8955 = state_8931;
(statearr_8955[(7)] = inst_8897__$1);

return statearr_8955;
})();
if(inst_8897__$1){
var statearr_8956_8985 = state_8931__$1;
(statearr_8956_8985[(1)] = (14));

} else {
var statearr_8957_8986 = state_8931__$1;
(statearr_8957_8986[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (9))){
var inst_8919 = (state_8931[(2)]);
var inst_8920 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_8931__$1 = (function (){var statearr_8958 = state_8931;
(statearr_8958[(15)] = inst_8919);

return statearr_8958;
})();
if(cljs.core.truth_(inst_8920)){
var statearr_8959_8987 = state_8931__$1;
(statearr_8959_8987[(1)] = (21));

} else {
var statearr_8960_8988 = state_8931__$1;
(statearr_8960_8988[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (5))){
var inst_8875 = cljs.core.async.close_BANG_(out);
var state_8931__$1 = state_8931;
var statearr_8961_8989 = state_8931__$1;
(statearr_8961_8989[(2)] = inst_8875);

(statearr_8961_8989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (14))){
var inst_8897 = (state_8931[(7)]);
var inst_8899 = cljs.core.chunked_seq_QMARK_(inst_8897);
var state_8931__$1 = state_8931;
if(inst_8899){
var statearr_8962_8990 = state_8931__$1;
(statearr_8962_8990[(1)] = (17));

} else {
var statearr_8963_8991 = state_8931__$1;
(statearr_8963_8991[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (16))){
var inst_8915 = (state_8931[(2)]);
var state_8931__$1 = state_8931;
var statearr_8964_8992 = state_8931__$1;
(statearr_8964_8992[(2)] = inst_8915);

(statearr_8964_8992[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8932 === (10))){
var inst_8886 = (state_8931[(9)]);
var inst_8884 = (state_8931[(12)]);
var inst_8891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8884,inst_8886);
var state_8931__$1 = state_8931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8931__$1,(13),out,inst_8891);
} else {
if((state_val_8932 === (18))){
var inst_8897 = (state_8931[(7)]);
var inst_8906 = cljs.core.first(inst_8897);
var state_8931__$1 = state_8931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8931__$1,(20),out,inst_8906);
} else {
if((state_val_8932 === (8))){
var inst_8886 = (state_8931[(9)]);
var inst_8885 = (state_8931[(10)]);
var inst_8888 = (inst_8886 < inst_8885);
var inst_8889 = inst_8888;
var state_8931__$1 = state_8931;
if(cljs.core.truth_(inst_8889)){
var statearr_8965_8993 = state_8931__$1;
(statearr_8965_8993[(1)] = (10));

} else {
var statearr_8966_8994 = state_8931__$1;
(statearr_8966_8994[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto__))
;
return ((function (switch__7208__auto__,c__7311__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7209__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7209__auto____0 = (function (){
var statearr_8967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8967[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7209__auto__);

(statearr_8967[(1)] = (1));

return statearr_8967;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7209__auto____1 = (function (state_8931){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_8931);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e8968){if((e8968 instanceof Object)){
var ex__7212__auto__ = e8968;
var statearr_8969_8995 = state_8931;
(statearr_8969_8995[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8931);

return cljs.core.cst$kw$recur;
} else {
throw e8968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__8996 = state_8931;
state_8931 = G__8996;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7209__auto__ = function(state_8931){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7209__auto____1.call(this,state_8931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7209__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7209__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__))
})();
var state__7313__auto__ = (function (){var statearr_8970 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_8970[(6)] = c__7311__auto__);

return statearr_8970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__))
);

return c__7311__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8998 = arguments.length;
switch (G__8998) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__9001 = arguments.length;
switch (G__9001) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__9004 = arguments.length;
switch (G__9004) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7311__auto___9051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___9051,out){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___9051,out){
return (function (state_9028){
var state_val_9029 = (state_9028[(1)]);
if((state_val_9029 === (7))){
var inst_9023 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
var statearr_9030_9052 = state_9028__$1;
(statearr_9030_9052[(2)] = inst_9023);

(statearr_9030_9052[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (1))){
var inst_9005 = null;
var state_9028__$1 = (function (){var statearr_9031 = state_9028;
(statearr_9031[(7)] = inst_9005);

return statearr_9031;
})();
var statearr_9032_9053 = state_9028__$1;
(statearr_9032_9053[(2)] = null);

(statearr_9032_9053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (4))){
var inst_9008 = (state_9028[(8)]);
var inst_9008__$1 = (state_9028[(2)]);
var inst_9009 = (inst_9008__$1 == null);
var inst_9010 = cljs.core.not(inst_9009);
var state_9028__$1 = (function (){var statearr_9033 = state_9028;
(statearr_9033[(8)] = inst_9008__$1);

return statearr_9033;
})();
if(inst_9010){
var statearr_9034_9054 = state_9028__$1;
(statearr_9034_9054[(1)] = (5));

} else {
var statearr_9035_9055 = state_9028__$1;
(statearr_9035_9055[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (6))){
var state_9028__$1 = state_9028;
var statearr_9036_9056 = state_9028__$1;
(statearr_9036_9056[(2)] = null);

(statearr_9036_9056[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (3))){
var inst_9025 = (state_9028[(2)]);
var inst_9026 = cljs.core.async.close_BANG_(out);
var state_9028__$1 = (function (){var statearr_9037 = state_9028;
(statearr_9037[(9)] = inst_9025);

return statearr_9037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9028__$1,inst_9026);
} else {
if((state_val_9029 === (2))){
var state_9028__$1 = state_9028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9028__$1,(4),ch);
} else {
if((state_val_9029 === (11))){
var inst_9008 = (state_9028[(8)]);
var inst_9017 = (state_9028[(2)]);
var inst_9005 = inst_9008;
var state_9028__$1 = (function (){var statearr_9038 = state_9028;
(statearr_9038[(7)] = inst_9005);

(statearr_9038[(10)] = inst_9017);

return statearr_9038;
})();
var statearr_9039_9057 = state_9028__$1;
(statearr_9039_9057[(2)] = null);

(statearr_9039_9057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (9))){
var inst_9008 = (state_9028[(8)]);
var state_9028__$1 = state_9028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9028__$1,(11),out,inst_9008);
} else {
if((state_val_9029 === (5))){
var inst_9005 = (state_9028[(7)]);
var inst_9008 = (state_9028[(8)]);
var inst_9012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9008,inst_9005);
var state_9028__$1 = state_9028;
if(inst_9012){
var statearr_9041_9058 = state_9028__$1;
(statearr_9041_9058[(1)] = (8));

} else {
var statearr_9042_9059 = state_9028__$1;
(statearr_9042_9059[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (10))){
var inst_9020 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
var statearr_9043_9060 = state_9028__$1;
(statearr_9043_9060[(2)] = inst_9020);

(statearr_9043_9060[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (8))){
var inst_9005 = (state_9028[(7)]);
var tmp9040 = inst_9005;
var inst_9005__$1 = tmp9040;
var state_9028__$1 = (function (){var statearr_9044 = state_9028;
(statearr_9044[(7)] = inst_9005__$1);

return statearr_9044;
})();
var statearr_9045_9061 = state_9028__$1;
(statearr_9045_9061[(2)] = null);

(statearr_9045_9061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___9051,out))
;
return ((function (switch__7208__auto__,c__7311__auto___9051,out){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_9046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9046[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_9046[(1)] = (1));

return statearr_9046;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_9028){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9028);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9047){if((e9047 instanceof Object)){
var ex__7212__auto__ = e9047;
var statearr_9048_9062 = state_9028;
(statearr_9048_9062[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9028);

return cljs.core.cst$kw$recur;
} else {
throw e9047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9063 = state_9028;
state_9028 = G__9063;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_9028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_9028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___9051,out))
})();
var state__7313__auto__ = (function (){var statearr_9049 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9049[(6)] = c__7311__auto___9051);

return statearr_9049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___9051,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9065 = arguments.length;
switch (G__9065) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7311__auto___9131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___9131,out){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___9131,out){
return (function (state_9103){
var state_val_9104 = (state_9103[(1)]);
if((state_val_9104 === (7))){
var inst_9099 = (state_9103[(2)]);
var state_9103__$1 = state_9103;
var statearr_9105_9132 = state_9103__$1;
(statearr_9105_9132[(2)] = inst_9099);

(statearr_9105_9132[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (1))){
var inst_9066 = (new Array(n));
var inst_9067 = inst_9066;
var inst_9068 = (0);
var state_9103__$1 = (function (){var statearr_9106 = state_9103;
(statearr_9106[(7)] = inst_9068);

(statearr_9106[(8)] = inst_9067);

return statearr_9106;
})();
var statearr_9107_9133 = state_9103__$1;
(statearr_9107_9133[(2)] = null);

(statearr_9107_9133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (4))){
var inst_9071 = (state_9103[(9)]);
var inst_9071__$1 = (state_9103[(2)]);
var inst_9072 = (inst_9071__$1 == null);
var inst_9073 = cljs.core.not(inst_9072);
var state_9103__$1 = (function (){var statearr_9108 = state_9103;
(statearr_9108[(9)] = inst_9071__$1);

return statearr_9108;
})();
if(inst_9073){
var statearr_9109_9134 = state_9103__$1;
(statearr_9109_9134[(1)] = (5));

} else {
var statearr_9110_9135 = state_9103__$1;
(statearr_9110_9135[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (15))){
var inst_9093 = (state_9103[(2)]);
var state_9103__$1 = state_9103;
var statearr_9111_9136 = state_9103__$1;
(statearr_9111_9136[(2)] = inst_9093);

(statearr_9111_9136[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (13))){
var state_9103__$1 = state_9103;
var statearr_9112_9137 = state_9103__$1;
(statearr_9112_9137[(2)] = null);

(statearr_9112_9137[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (6))){
var inst_9068 = (state_9103[(7)]);
var inst_9089 = (inst_9068 > (0));
var state_9103__$1 = state_9103;
if(cljs.core.truth_(inst_9089)){
var statearr_9113_9138 = state_9103__$1;
(statearr_9113_9138[(1)] = (12));

} else {
var statearr_9114_9139 = state_9103__$1;
(statearr_9114_9139[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (3))){
var inst_9101 = (state_9103[(2)]);
var state_9103__$1 = state_9103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9103__$1,inst_9101);
} else {
if((state_val_9104 === (12))){
var inst_9067 = (state_9103[(8)]);
var inst_9091 = cljs.core.vec(inst_9067);
var state_9103__$1 = state_9103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9103__$1,(15),out,inst_9091);
} else {
if((state_val_9104 === (2))){
var state_9103__$1 = state_9103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9103__$1,(4),ch);
} else {
if((state_val_9104 === (11))){
var inst_9083 = (state_9103[(2)]);
var inst_9084 = (new Array(n));
var inst_9067 = inst_9084;
var inst_9068 = (0);
var state_9103__$1 = (function (){var statearr_9115 = state_9103;
(statearr_9115[(7)] = inst_9068);

(statearr_9115[(10)] = inst_9083);

(statearr_9115[(8)] = inst_9067);

return statearr_9115;
})();
var statearr_9116_9140 = state_9103__$1;
(statearr_9116_9140[(2)] = null);

(statearr_9116_9140[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (9))){
var inst_9067 = (state_9103[(8)]);
var inst_9081 = cljs.core.vec(inst_9067);
var state_9103__$1 = state_9103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9103__$1,(11),out,inst_9081);
} else {
if((state_val_9104 === (5))){
var inst_9068 = (state_9103[(7)]);
var inst_9071 = (state_9103[(9)]);
var inst_9076 = (state_9103[(11)]);
var inst_9067 = (state_9103[(8)]);
var inst_9075 = (inst_9067[inst_9068] = inst_9071);
var inst_9076__$1 = (inst_9068 + (1));
var inst_9077 = (inst_9076__$1 < n);
var state_9103__$1 = (function (){var statearr_9117 = state_9103;
(statearr_9117[(12)] = inst_9075);

(statearr_9117[(11)] = inst_9076__$1);

return statearr_9117;
})();
if(cljs.core.truth_(inst_9077)){
var statearr_9118_9141 = state_9103__$1;
(statearr_9118_9141[(1)] = (8));

} else {
var statearr_9119_9142 = state_9103__$1;
(statearr_9119_9142[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (14))){
var inst_9096 = (state_9103[(2)]);
var inst_9097 = cljs.core.async.close_BANG_(out);
var state_9103__$1 = (function (){var statearr_9121 = state_9103;
(statearr_9121[(13)] = inst_9096);

return statearr_9121;
})();
var statearr_9122_9143 = state_9103__$1;
(statearr_9122_9143[(2)] = inst_9097);

(statearr_9122_9143[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (10))){
var inst_9087 = (state_9103[(2)]);
var state_9103__$1 = state_9103;
var statearr_9123_9144 = state_9103__$1;
(statearr_9123_9144[(2)] = inst_9087);

(statearr_9123_9144[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9104 === (8))){
var inst_9076 = (state_9103[(11)]);
var inst_9067 = (state_9103[(8)]);
var tmp9120 = inst_9067;
var inst_9067__$1 = tmp9120;
var inst_9068 = inst_9076;
var state_9103__$1 = (function (){var statearr_9124 = state_9103;
(statearr_9124[(7)] = inst_9068);

(statearr_9124[(8)] = inst_9067__$1);

return statearr_9124;
})();
var statearr_9125_9145 = state_9103__$1;
(statearr_9125_9145[(2)] = null);

(statearr_9125_9145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___9131,out))
;
return ((function (switch__7208__auto__,c__7311__auto___9131,out){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_9126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9126[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_9126[(1)] = (1));

return statearr_9126;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_9103){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9103);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9127){if((e9127 instanceof Object)){
var ex__7212__auto__ = e9127;
var statearr_9128_9146 = state_9103;
(statearr_9128_9146[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9103);

return cljs.core.cst$kw$recur;
} else {
throw e9127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9147 = state_9103;
state_9103 = G__9147;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_9103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_9103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___9131,out))
})();
var state__7313__auto__ = (function (){var statearr_9129 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9129[(6)] = c__7311__auto___9131);

return statearr_9129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___9131,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9149 = arguments.length;
switch (G__9149) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7311__auto___9219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___9219,out){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___9219,out){
return (function (state_9191){
var state_val_9192 = (state_9191[(1)]);
if((state_val_9192 === (7))){
var inst_9187 = (state_9191[(2)]);
var state_9191__$1 = state_9191;
var statearr_9193_9220 = state_9191__$1;
(statearr_9193_9220[(2)] = inst_9187);

(statearr_9193_9220[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (1))){
var inst_9150 = [];
var inst_9151 = inst_9150;
var inst_9152 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9191__$1 = (function (){var statearr_9194 = state_9191;
(statearr_9194[(7)] = inst_9151);

(statearr_9194[(8)] = inst_9152);

return statearr_9194;
})();
var statearr_9195_9221 = state_9191__$1;
(statearr_9195_9221[(2)] = null);

(statearr_9195_9221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (4))){
var inst_9155 = (state_9191[(9)]);
var inst_9155__$1 = (state_9191[(2)]);
var inst_9156 = (inst_9155__$1 == null);
var inst_9157 = cljs.core.not(inst_9156);
var state_9191__$1 = (function (){var statearr_9196 = state_9191;
(statearr_9196[(9)] = inst_9155__$1);

return statearr_9196;
})();
if(inst_9157){
var statearr_9197_9222 = state_9191__$1;
(statearr_9197_9222[(1)] = (5));

} else {
var statearr_9198_9223 = state_9191__$1;
(statearr_9198_9223[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (15))){
var inst_9181 = (state_9191[(2)]);
var state_9191__$1 = state_9191;
var statearr_9199_9224 = state_9191__$1;
(statearr_9199_9224[(2)] = inst_9181);

(statearr_9199_9224[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (13))){
var state_9191__$1 = state_9191;
var statearr_9200_9225 = state_9191__$1;
(statearr_9200_9225[(2)] = null);

(statearr_9200_9225[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (6))){
var inst_9151 = (state_9191[(7)]);
var inst_9176 = inst_9151.length;
var inst_9177 = (inst_9176 > (0));
var state_9191__$1 = state_9191;
if(cljs.core.truth_(inst_9177)){
var statearr_9201_9226 = state_9191__$1;
(statearr_9201_9226[(1)] = (12));

} else {
var statearr_9202_9227 = state_9191__$1;
(statearr_9202_9227[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (3))){
var inst_9189 = (state_9191[(2)]);
var state_9191__$1 = state_9191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9191__$1,inst_9189);
} else {
if((state_val_9192 === (12))){
var inst_9151 = (state_9191[(7)]);
var inst_9179 = cljs.core.vec(inst_9151);
var state_9191__$1 = state_9191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9191__$1,(15),out,inst_9179);
} else {
if((state_val_9192 === (2))){
var state_9191__$1 = state_9191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9191__$1,(4),ch);
} else {
if((state_val_9192 === (11))){
var inst_9159 = (state_9191[(10)]);
var inst_9155 = (state_9191[(9)]);
var inst_9169 = (state_9191[(2)]);
var inst_9170 = [];
var inst_9171 = inst_9170.push(inst_9155);
var inst_9151 = inst_9170;
var inst_9152 = inst_9159;
var state_9191__$1 = (function (){var statearr_9203 = state_9191;
(statearr_9203[(11)] = inst_9169);

(statearr_9203[(7)] = inst_9151);

(statearr_9203[(12)] = inst_9171);

(statearr_9203[(8)] = inst_9152);

return statearr_9203;
})();
var statearr_9204_9228 = state_9191__$1;
(statearr_9204_9228[(2)] = null);

(statearr_9204_9228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (9))){
var inst_9151 = (state_9191[(7)]);
var inst_9167 = cljs.core.vec(inst_9151);
var state_9191__$1 = state_9191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9191__$1,(11),out,inst_9167);
} else {
if((state_val_9192 === (5))){
var inst_9159 = (state_9191[(10)]);
var inst_9155 = (state_9191[(9)]);
var inst_9152 = (state_9191[(8)]);
var inst_9159__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9155) : f.call(null,inst_9155));
var inst_9160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9159__$1,inst_9152);
var inst_9161 = cljs.core.keyword_identical_QMARK_(inst_9152,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9162 = ((inst_9160) || (inst_9161));
var state_9191__$1 = (function (){var statearr_9205 = state_9191;
(statearr_9205[(10)] = inst_9159__$1);

return statearr_9205;
})();
if(cljs.core.truth_(inst_9162)){
var statearr_9206_9229 = state_9191__$1;
(statearr_9206_9229[(1)] = (8));

} else {
var statearr_9207_9230 = state_9191__$1;
(statearr_9207_9230[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (14))){
var inst_9184 = (state_9191[(2)]);
var inst_9185 = cljs.core.async.close_BANG_(out);
var state_9191__$1 = (function (){var statearr_9209 = state_9191;
(statearr_9209[(13)] = inst_9184);

return statearr_9209;
})();
var statearr_9210_9231 = state_9191__$1;
(statearr_9210_9231[(2)] = inst_9185);

(statearr_9210_9231[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (10))){
var inst_9174 = (state_9191[(2)]);
var state_9191__$1 = state_9191;
var statearr_9211_9232 = state_9191__$1;
(statearr_9211_9232[(2)] = inst_9174);

(statearr_9211_9232[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9192 === (8))){
var inst_9159 = (state_9191[(10)]);
var inst_9151 = (state_9191[(7)]);
var inst_9155 = (state_9191[(9)]);
var inst_9164 = inst_9151.push(inst_9155);
var tmp9208 = inst_9151;
var inst_9151__$1 = tmp9208;
var inst_9152 = inst_9159;
var state_9191__$1 = (function (){var statearr_9212 = state_9191;
(statearr_9212[(7)] = inst_9151__$1);

(statearr_9212[(14)] = inst_9164);

(statearr_9212[(8)] = inst_9152);

return statearr_9212;
})();
var statearr_9213_9233 = state_9191__$1;
(statearr_9213_9233[(2)] = null);

(statearr_9213_9233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7311__auto___9219,out))
;
return ((function (switch__7208__auto__,c__7311__auto___9219,out){
return (function() {
var cljs$core$async$state_machine__7209__auto__ = null;
var cljs$core$async$state_machine__7209__auto____0 = (function (){
var statearr_9214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9214[(0)] = cljs$core$async$state_machine__7209__auto__);

(statearr_9214[(1)] = (1));

return statearr_9214;
});
var cljs$core$async$state_machine__7209__auto____1 = (function (state_9191){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9191);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9215){if((e9215 instanceof Object)){
var ex__7212__auto__ = e9215;
var statearr_9216_9234 = state_9191;
(statearr_9216_9234[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9191);

return cljs.core.cst$kw$recur;
} else {
throw e9215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9235 = state_9191;
state_9191 = G__9235;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
cljs$core$async$state_machine__7209__auto__ = function(state_9191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7209__auto____1.call(this,state_9191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7209__auto____0;
cljs$core$async$state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7209__auto____1;
return cljs$core$async$state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___9219,out))
})();
var state__7313__auto__ = (function (){var statearr_9217 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9217[(6)] = c__7311__auto___9219);

return statearr_9217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___9219,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

