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
var G__12578 = arguments.length;
switch (G__12578) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12579 = (function (f,blockable,meta12580){
this.f = f;
this.blockable = blockable;
this.meta12580 = meta12580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12581,meta12580__$1){
var self__ = this;
var _12581__$1 = this;
return (new cljs.core.async.t_cljs$core$async12579(self__.f,self__.blockable,meta12580__$1));
});

cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12581){
var self__ = this;
var _12581__$1 = this;
return self__.meta12580;
});

cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12580], null);
});

cljs.core.async.t_cljs$core$async12579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12579";

cljs.core.async.t_cljs$core$async12579.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12579");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12579.
 */
cljs.core.async.__GT_t_cljs$core$async12579 = (function cljs$core$async$__GT_t_cljs$core$async12579(f__$1,blockable__$1,meta12580){
return (new cljs.core.async.t_cljs$core$async12579(f__$1,blockable__$1,meta12580));
});

}

return (new cljs.core.async.t_cljs$core$async12579(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12585 = arguments.length;
switch (G__12585) {
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
var G__12588 = arguments.length;
switch (G__12588) {
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
var G__12591 = arguments.length;
switch (G__12591) {
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
var val_12593 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12593) : fn1.call(null,val_12593));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12593,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12593) : fn1.call(null,val_12593));
});})(val_12593,ret))
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
var G__12595 = arguments.length;
switch (G__12595) {
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
var n__4408__auto___12597 = n;
var x_12598 = (0);
while(true){
if((x_12598 < n__4408__auto___12597)){
(a[x_12598] = (0));

var G__12599 = (x_12598 + (1));
x_12598 = G__12599;
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

var G__12600 = (i + (1));
i = G__12600;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12601 = (function (flag,meta12602){
this.flag = flag;
this.meta12602 = meta12602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12603,meta12602__$1){
var self__ = this;
var _12603__$1 = this;
return (new cljs.core.async.t_cljs$core$async12601(self__.flag,meta12602__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12603){
var self__ = this;
var _12603__$1 = this;
return self__.meta12602;
});})(flag))
;

cljs.core.async.t_cljs$core$async12601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12601.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta12602], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12601";

cljs.core.async.t_cljs$core$async12601.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12601");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12601.
 */
cljs.core.async.__GT_t_cljs$core$async12601 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12601(flag__$1,meta12602){
return (new cljs.core.async.t_cljs$core$async12601(flag__$1,meta12602));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12601(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12604 = (function (flag,cb,meta12605){
this.flag = flag;
this.cb = cb;
this.meta12605 = meta12605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12606,meta12605__$1){
var self__ = this;
var _12606__$1 = this;
return (new cljs.core.async.t_cljs$core$async12604(self__.flag,self__.cb,meta12605__$1));
});

cljs.core.async.t_cljs$core$async12604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12606){
var self__ = this;
var _12606__$1 = this;
return self__.meta12605;
});

cljs.core.async.t_cljs$core$async12604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async12604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta12605], null);
});

cljs.core.async.t_cljs$core$async12604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12604";

cljs.core.async.t_cljs$core$async12604.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12604");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12604.
 */
cljs.core.async.__GT_t_cljs$core$async12604 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12604(flag__$1,cb__$1,meta12605){
return (new cljs.core.async.t_cljs$core$async12604(flag__$1,cb__$1,meta12605));
});

}

return (new cljs.core.async.t_cljs$core$async12604(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12607_SHARP_){
var G__12609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12607_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12609) : fret.call(null,G__12609));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12608_SHARP_){
var G__12610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12608_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12610) : fret.call(null,G__12610));
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
var G__12611 = (i + (1));
i = G__12611;
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
var len__4531__auto___12617 = arguments.length;
var i__4532__auto___12618 = (0);
while(true){
if((i__4532__auto___12618 < len__4531__auto___12617)){
args__4534__auto__.push((arguments[i__4532__auto___12618]));

var G__12619 = (i__4532__auto___12618 + (1));
i__4532__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12614){
var map__12615 = p__12614;
var map__12615__$1 = ((((!((map__12615 == null)))?(((((map__12615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12615):map__12615);
var opts = map__12615__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12612){
var G__12613 = cljs.core.first(seq12612);
var seq12612__$1 = cljs.core.next(seq12612);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12613,seq12612__$1);
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
var G__12621 = arguments.length;
switch (G__12621) {
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
var c__12518__auto___12667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___12667){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___12667){
return (function (state_12645){
var state_val_12646 = (state_12645[(1)]);
if((state_val_12646 === (7))){
var inst_12641 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
var statearr_12647_12668 = state_12645__$1;
(statearr_12647_12668[(2)] = inst_12641);

(statearr_12647_12668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (1))){
var state_12645__$1 = state_12645;
var statearr_12648_12669 = state_12645__$1;
(statearr_12648_12669[(2)] = null);

(statearr_12648_12669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (4))){
var inst_12624 = (state_12645[(7)]);
var inst_12624__$1 = (state_12645[(2)]);
var inst_12625 = (inst_12624__$1 == null);
var state_12645__$1 = (function (){var statearr_12649 = state_12645;
(statearr_12649[(7)] = inst_12624__$1);

return statearr_12649;
})();
if(cljs.core.truth_(inst_12625)){
var statearr_12650_12670 = state_12645__$1;
(statearr_12650_12670[(1)] = (5));

} else {
var statearr_12651_12671 = state_12645__$1;
(statearr_12651_12671[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (13))){
var state_12645__$1 = state_12645;
var statearr_12652_12672 = state_12645__$1;
(statearr_12652_12672[(2)] = null);

(statearr_12652_12672[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (6))){
var inst_12624 = (state_12645[(7)]);
var state_12645__$1 = state_12645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12645__$1,(11),to,inst_12624);
} else {
if((state_val_12646 === (3))){
var inst_12643 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12645__$1,inst_12643);
} else {
if((state_val_12646 === (12))){
var state_12645__$1 = state_12645;
var statearr_12653_12673 = state_12645__$1;
(statearr_12653_12673[(2)] = null);

(statearr_12653_12673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (2))){
var state_12645__$1 = state_12645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12645__$1,(4),from);
} else {
if((state_val_12646 === (11))){
var inst_12634 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
if(cljs.core.truth_(inst_12634)){
var statearr_12654_12674 = state_12645__$1;
(statearr_12654_12674[(1)] = (12));

} else {
var statearr_12655_12675 = state_12645__$1;
(statearr_12655_12675[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (9))){
var state_12645__$1 = state_12645;
var statearr_12656_12676 = state_12645__$1;
(statearr_12656_12676[(2)] = null);

(statearr_12656_12676[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (5))){
var state_12645__$1 = state_12645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12657_12677 = state_12645__$1;
(statearr_12657_12677[(1)] = (8));

} else {
var statearr_12658_12678 = state_12645__$1;
(statearr_12658_12678[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (14))){
var inst_12639 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
var statearr_12659_12679 = state_12645__$1;
(statearr_12659_12679[(2)] = inst_12639);

(statearr_12659_12679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (10))){
var inst_12631 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
var statearr_12660_12680 = state_12645__$1;
(statearr_12660_12680[(2)] = inst_12631);

(statearr_12660_12680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (8))){
var inst_12628 = cljs.core.async.close_BANG_(to);
var state_12645__$1 = state_12645;
var statearr_12661_12681 = state_12645__$1;
(statearr_12661_12681[(2)] = inst_12628);

(statearr_12661_12681[(1)] = (10));


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
});})(c__12518__auto___12667))
;
return ((function (switch__12415__auto__,c__12518__auto___12667){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_12662 = [null,null,null,null,null,null,null,null];
(statearr_12662[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_12662[(1)] = (1));

return statearr_12662;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_12645){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12645);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12663){if((e12663 instanceof Object)){
var ex__12419__auto__ = e12663;
var statearr_12664_12682 = state_12645;
(statearr_12664_12682[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12645);

return cljs.core.cst$kw$recur;
} else {
throw e12663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12683 = state_12645;
state_12645 = G__12683;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_12645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_12645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___12667))
})();
var state__12520__auto__ = (function (){var statearr_12665 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12665[(6)] = c__12518__auto___12667);

return statearr_12665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___12667))
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
return (function (p__12684){
var vec__12685 = p__12684;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(1),null);
var job = vec__12685;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12518__auto___12856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___12856,res,vec__12685,v,p,job,jobs,results){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___12856,res,vec__12685,v,p,job,jobs,results){
return (function (state_12692){
var state_val_12693 = (state_12692[(1)]);
if((state_val_12693 === (1))){
var state_12692__$1 = state_12692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12692__$1,(2),res,v);
} else {
if((state_val_12693 === (2))){
var inst_12689 = (state_12692[(2)]);
var inst_12690 = cljs.core.async.close_BANG_(res);
var state_12692__$1 = (function (){var statearr_12694 = state_12692;
(statearr_12694[(7)] = inst_12689);

return statearr_12694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12692__$1,inst_12690);
} else {
return null;
}
}
});})(c__12518__auto___12856,res,vec__12685,v,p,job,jobs,results))
;
return ((function (switch__12415__auto__,c__12518__auto___12856,res,vec__12685,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0 = (function (){
var statearr_12695 = [null,null,null,null,null,null,null,null];
(statearr_12695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__);

(statearr_12695[(1)] = (1));

return statearr_12695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1 = (function (state_12692){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12692);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12696){if((e12696 instanceof Object)){
var ex__12419__auto__ = e12696;
var statearr_12697_12857 = state_12692;
(statearr_12697_12857[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12692);

return cljs.core.cst$kw$recur;
} else {
throw e12696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12858 = state_12692;
state_12692 = G__12858;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = function(state_12692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1.call(this,state_12692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___12856,res,vec__12685,v,p,job,jobs,results))
})();
var state__12520__auto__ = (function (){var statearr_12698 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12698[(6)] = c__12518__auto___12856);

return statearr_12698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___12856,res,vec__12685,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12699){
var vec__12700 = p__12699;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12700,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12700,(1),null);
var job = vec__12700;
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
var n__4408__auto___12859 = n;
var __12860 = (0);
while(true){
if((__12860 < n__4408__auto___12859)){
var G__12703_12861 = type;
var G__12703_12862__$1 = (((G__12703_12861 instanceof cljs.core.Keyword))?G__12703_12861.fqn:null);
switch (G__12703_12862__$1) {
case "compute":
var c__12518__auto___12864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12860,c__12518__auto___12864,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (__12860,c__12518__auto___12864,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async){
return (function (state_12716){
var state_val_12717 = (state_12716[(1)]);
if((state_val_12717 === (1))){
var state_12716__$1 = state_12716;
var statearr_12718_12865 = state_12716__$1;
(statearr_12718_12865[(2)] = null);

(statearr_12718_12865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (2))){
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12716__$1,(4),jobs);
} else {
if((state_val_12717 === (3))){
var inst_12714 = (state_12716[(2)]);
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12716__$1,inst_12714);
} else {
if((state_val_12717 === (4))){
var inst_12706 = (state_12716[(2)]);
var inst_12707 = process(inst_12706);
var state_12716__$1 = state_12716;
if(cljs.core.truth_(inst_12707)){
var statearr_12719_12866 = state_12716__$1;
(statearr_12719_12866[(1)] = (5));

} else {
var statearr_12720_12867 = state_12716__$1;
(statearr_12720_12867[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (5))){
var state_12716__$1 = state_12716;
var statearr_12721_12868 = state_12716__$1;
(statearr_12721_12868[(2)] = null);

(statearr_12721_12868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (6))){
var state_12716__$1 = state_12716;
var statearr_12722_12869 = state_12716__$1;
(statearr_12722_12869[(2)] = null);

(statearr_12722_12869[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12717 === (7))){
var inst_12712 = (state_12716[(2)]);
var state_12716__$1 = state_12716;
var statearr_12723_12870 = state_12716__$1;
(statearr_12723_12870[(2)] = inst_12712);

(statearr_12723_12870[(1)] = (3));


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
});})(__12860,c__12518__auto___12864,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async))
;
return ((function (__12860,switch__12415__auto__,c__12518__auto___12864,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0 = (function (){
var statearr_12724 = [null,null,null,null,null,null,null];
(statearr_12724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__);

(statearr_12724[(1)] = (1));

return statearr_12724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1 = (function (state_12716){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12716);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12725){if((e12725 instanceof Object)){
var ex__12419__auto__ = e12725;
var statearr_12726_12871 = state_12716;
(statearr_12726_12871[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12716);

return cljs.core.cst$kw$recur;
} else {
throw e12725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12872 = state_12716;
state_12716 = G__12872;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__;
})()
;})(__12860,switch__12415__auto__,c__12518__auto___12864,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async))
})();
var state__12520__auto__ = (function (){var statearr_12727 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12727[(6)] = c__12518__auto___12864);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(__12860,c__12518__auto___12864,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async))
);


break;
case "async":
var c__12518__auto___12873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12860,c__12518__auto___12873,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (__12860,c__12518__auto___12873,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async){
return (function (state_12740){
var state_val_12741 = (state_12740[(1)]);
if((state_val_12741 === (1))){
var state_12740__$1 = state_12740;
var statearr_12742_12874 = state_12740__$1;
(statearr_12742_12874[(2)] = null);

(statearr_12742_12874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12741 === (2))){
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12740__$1,(4),jobs);
} else {
if((state_val_12741 === (3))){
var inst_12738 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12740__$1,inst_12738);
} else {
if((state_val_12741 === (4))){
var inst_12730 = (state_12740[(2)]);
var inst_12731 = async(inst_12730);
var state_12740__$1 = state_12740;
if(cljs.core.truth_(inst_12731)){
var statearr_12743_12875 = state_12740__$1;
(statearr_12743_12875[(1)] = (5));

} else {
var statearr_12744_12876 = state_12740__$1;
(statearr_12744_12876[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12741 === (5))){
var state_12740__$1 = state_12740;
var statearr_12745_12877 = state_12740__$1;
(statearr_12745_12877[(2)] = null);

(statearr_12745_12877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12741 === (6))){
var state_12740__$1 = state_12740;
var statearr_12746_12878 = state_12740__$1;
(statearr_12746_12878[(2)] = null);

(statearr_12746_12878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12741 === (7))){
var inst_12736 = (state_12740[(2)]);
var state_12740__$1 = state_12740;
var statearr_12747_12879 = state_12740__$1;
(statearr_12747_12879[(2)] = inst_12736);

(statearr_12747_12879[(1)] = (3));


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
});})(__12860,c__12518__auto___12873,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async))
;
return ((function (__12860,switch__12415__auto__,c__12518__auto___12873,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0 = (function (){
var statearr_12748 = [null,null,null,null,null,null,null];
(statearr_12748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__);

(statearr_12748[(1)] = (1));

return statearr_12748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1 = (function (state_12740){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12740);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12749){if((e12749 instanceof Object)){
var ex__12419__auto__ = e12749;
var statearr_12750_12880 = state_12740;
(statearr_12750_12880[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12740);

return cljs.core.cst$kw$recur;
} else {
throw e12749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12881 = state_12740;
state_12740 = G__12881;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = function(state_12740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1.call(this,state_12740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__;
})()
;})(__12860,switch__12415__auto__,c__12518__auto___12873,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async))
})();
var state__12520__auto__ = (function (){var statearr_12751 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12751[(6)] = c__12518__auto___12873);

return statearr_12751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(__12860,c__12518__auto___12873,G__12703_12861,G__12703_12862__$1,n__4408__auto___12859,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12703_12862__$1)].join('')));

}

var G__12882 = (__12860 + (1));
__12860 = G__12882;
continue;
} else {
}
break;
}

var c__12518__auto___12883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___12883,jobs,results,process,async){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___12883,jobs,results,process,async){
return (function (state_12773){
var state_val_12774 = (state_12773[(1)]);
if((state_val_12774 === (1))){
var state_12773__$1 = state_12773;
var statearr_12775_12884 = state_12773__$1;
(statearr_12775_12884[(2)] = null);

(statearr_12775_12884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12774 === (2))){
var state_12773__$1 = state_12773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12773__$1,(4),from);
} else {
if((state_val_12774 === (3))){
var inst_12771 = (state_12773[(2)]);
var state_12773__$1 = state_12773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12773__$1,inst_12771);
} else {
if((state_val_12774 === (4))){
var inst_12754 = (state_12773[(7)]);
var inst_12754__$1 = (state_12773[(2)]);
var inst_12755 = (inst_12754__$1 == null);
var state_12773__$1 = (function (){var statearr_12776 = state_12773;
(statearr_12776[(7)] = inst_12754__$1);

return statearr_12776;
})();
if(cljs.core.truth_(inst_12755)){
var statearr_12777_12885 = state_12773__$1;
(statearr_12777_12885[(1)] = (5));

} else {
var statearr_12778_12886 = state_12773__$1;
(statearr_12778_12886[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12774 === (5))){
var inst_12757 = cljs.core.async.close_BANG_(jobs);
var state_12773__$1 = state_12773;
var statearr_12779_12887 = state_12773__$1;
(statearr_12779_12887[(2)] = inst_12757);

(statearr_12779_12887[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12774 === (6))){
var inst_12754 = (state_12773[(7)]);
var inst_12759 = (state_12773[(8)]);
var inst_12759__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12761 = [inst_12754,inst_12759__$1];
var inst_12762 = (new cljs.core.PersistentVector(null,2,(5),inst_12760,inst_12761,null));
var state_12773__$1 = (function (){var statearr_12780 = state_12773;
(statearr_12780[(8)] = inst_12759__$1);

return statearr_12780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12773__$1,(8),jobs,inst_12762);
} else {
if((state_val_12774 === (7))){
var inst_12769 = (state_12773[(2)]);
var state_12773__$1 = state_12773;
var statearr_12781_12888 = state_12773__$1;
(statearr_12781_12888[(2)] = inst_12769);

(statearr_12781_12888[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12774 === (8))){
var inst_12759 = (state_12773[(8)]);
var inst_12764 = (state_12773[(2)]);
var state_12773__$1 = (function (){var statearr_12782 = state_12773;
(statearr_12782[(9)] = inst_12764);

return statearr_12782;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12773__$1,(9),results,inst_12759);
} else {
if((state_val_12774 === (9))){
var inst_12766 = (state_12773[(2)]);
var state_12773__$1 = (function (){var statearr_12783 = state_12773;
(statearr_12783[(10)] = inst_12766);

return statearr_12783;
})();
var statearr_12784_12889 = state_12773__$1;
(statearr_12784_12889[(2)] = null);

(statearr_12784_12889[(1)] = (2));


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
});})(c__12518__auto___12883,jobs,results,process,async))
;
return ((function (switch__12415__auto__,c__12518__auto___12883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0 = (function (){
var statearr_12785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__);

(statearr_12785[(1)] = (1));

return statearr_12785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1 = (function (state_12773){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12773);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object)){
var ex__12419__auto__ = e12786;
var statearr_12787_12890 = state_12773;
(statearr_12787_12890[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12773);

return cljs.core.cst$kw$recur;
} else {
throw e12786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12891 = state_12773;
state_12773 = G__12891;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = function(state_12773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1.call(this,state_12773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___12883,jobs,results,process,async))
})();
var state__12520__auto__ = (function (){var statearr_12788 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12788[(6)] = c__12518__auto___12883);

return statearr_12788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___12883,jobs,results,process,async))
);


var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__,jobs,results,process,async){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__,jobs,results,process,async){
return (function (state_12826){
var state_val_12827 = (state_12826[(1)]);
if((state_val_12827 === (7))){
var inst_12822 = (state_12826[(2)]);
var state_12826__$1 = state_12826;
var statearr_12828_12892 = state_12826__$1;
(statearr_12828_12892[(2)] = inst_12822);

(statearr_12828_12892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (20))){
var state_12826__$1 = state_12826;
var statearr_12829_12893 = state_12826__$1;
(statearr_12829_12893[(2)] = null);

(statearr_12829_12893[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (1))){
var state_12826__$1 = state_12826;
var statearr_12830_12894 = state_12826__$1;
(statearr_12830_12894[(2)] = null);

(statearr_12830_12894[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (4))){
var inst_12791 = (state_12826[(7)]);
var inst_12791__$1 = (state_12826[(2)]);
var inst_12792 = (inst_12791__$1 == null);
var state_12826__$1 = (function (){var statearr_12831 = state_12826;
(statearr_12831[(7)] = inst_12791__$1);

return statearr_12831;
})();
if(cljs.core.truth_(inst_12792)){
var statearr_12832_12895 = state_12826__$1;
(statearr_12832_12895[(1)] = (5));

} else {
var statearr_12833_12896 = state_12826__$1;
(statearr_12833_12896[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (15))){
var inst_12804 = (state_12826[(8)]);
var state_12826__$1 = state_12826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12826__$1,(18),to,inst_12804);
} else {
if((state_val_12827 === (21))){
var inst_12817 = (state_12826[(2)]);
var state_12826__$1 = state_12826;
var statearr_12834_12897 = state_12826__$1;
(statearr_12834_12897[(2)] = inst_12817);

(statearr_12834_12897[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (13))){
var inst_12819 = (state_12826[(2)]);
var state_12826__$1 = (function (){var statearr_12835 = state_12826;
(statearr_12835[(9)] = inst_12819);

return statearr_12835;
})();
var statearr_12836_12898 = state_12826__$1;
(statearr_12836_12898[(2)] = null);

(statearr_12836_12898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (6))){
var inst_12791 = (state_12826[(7)]);
var state_12826__$1 = state_12826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12826__$1,(11),inst_12791);
} else {
if((state_val_12827 === (17))){
var inst_12812 = (state_12826[(2)]);
var state_12826__$1 = state_12826;
if(cljs.core.truth_(inst_12812)){
var statearr_12837_12899 = state_12826__$1;
(statearr_12837_12899[(1)] = (19));

} else {
var statearr_12838_12900 = state_12826__$1;
(statearr_12838_12900[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (3))){
var inst_12824 = (state_12826[(2)]);
var state_12826__$1 = state_12826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12826__$1,inst_12824);
} else {
if((state_val_12827 === (12))){
var inst_12801 = (state_12826[(10)]);
var state_12826__$1 = state_12826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12826__$1,(14),inst_12801);
} else {
if((state_val_12827 === (2))){
var state_12826__$1 = state_12826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12826__$1,(4),results);
} else {
if((state_val_12827 === (19))){
var state_12826__$1 = state_12826;
var statearr_12839_12901 = state_12826__$1;
(statearr_12839_12901[(2)] = null);

(statearr_12839_12901[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (11))){
var inst_12801 = (state_12826[(2)]);
var state_12826__$1 = (function (){var statearr_12840 = state_12826;
(statearr_12840[(10)] = inst_12801);

return statearr_12840;
})();
var statearr_12841_12902 = state_12826__$1;
(statearr_12841_12902[(2)] = null);

(statearr_12841_12902[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (9))){
var state_12826__$1 = state_12826;
var statearr_12842_12903 = state_12826__$1;
(statearr_12842_12903[(2)] = null);

(statearr_12842_12903[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (5))){
var state_12826__$1 = state_12826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12843_12904 = state_12826__$1;
(statearr_12843_12904[(1)] = (8));

} else {
var statearr_12844_12905 = state_12826__$1;
(statearr_12844_12905[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (14))){
var inst_12806 = (state_12826[(11)]);
var inst_12804 = (state_12826[(8)]);
var inst_12804__$1 = (state_12826[(2)]);
var inst_12805 = (inst_12804__$1 == null);
var inst_12806__$1 = cljs.core.not(inst_12805);
var state_12826__$1 = (function (){var statearr_12845 = state_12826;
(statearr_12845[(11)] = inst_12806__$1);

(statearr_12845[(8)] = inst_12804__$1);

return statearr_12845;
})();
if(inst_12806__$1){
var statearr_12846_12906 = state_12826__$1;
(statearr_12846_12906[(1)] = (15));

} else {
var statearr_12847_12907 = state_12826__$1;
(statearr_12847_12907[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (16))){
var inst_12806 = (state_12826[(11)]);
var state_12826__$1 = state_12826;
var statearr_12848_12908 = state_12826__$1;
(statearr_12848_12908[(2)] = inst_12806);

(statearr_12848_12908[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (10))){
var inst_12798 = (state_12826[(2)]);
var state_12826__$1 = state_12826;
var statearr_12849_12909 = state_12826__$1;
(statearr_12849_12909[(2)] = inst_12798);

(statearr_12849_12909[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (18))){
var inst_12809 = (state_12826[(2)]);
var state_12826__$1 = state_12826;
var statearr_12850_12910 = state_12826__$1;
(statearr_12850_12910[(2)] = inst_12809);

(statearr_12850_12910[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12827 === (8))){
var inst_12795 = cljs.core.async.close_BANG_(to);
var state_12826__$1 = state_12826;
var statearr_12851_12911 = state_12826__$1;
(statearr_12851_12911[(2)] = inst_12795);

(statearr_12851_12911[(1)] = (10));


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
});})(c__12518__auto__,jobs,results,process,async))
;
return ((function (switch__12415__auto__,c__12518__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0 = (function (){
var statearr_12852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__);

(statearr_12852[(1)] = (1));

return statearr_12852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1 = (function (state_12826){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12826);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12853){if((e12853 instanceof Object)){
var ex__12419__auto__ = e12853;
var statearr_12854_12912 = state_12826;
(statearr_12854_12912[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12826);

return cljs.core.cst$kw$recur;
} else {
throw e12853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12913 = state_12826;
state_12826 = G__12913;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__ = function(state_12826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1.call(this,state_12826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12416__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__,jobs,results,process,async))
})();
var state__12520__auto__ = (function (){var statearr_12855 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12855[(6)] = c__12518__auto__);

return statearr_12855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__,jobs,results,process,async))
);

return c__12518__auto__;
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
var G__12915 = arguments.length;
switch (G__12915) {
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
var G__12918 = arguments.length;
switch (G__12918) {
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
var G__12921 = arguments.length;
switch (G__12921) {
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
var c__12518__auto___12970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___12970,tc,fc){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___12970,tc,fc){
return (function (state_12947){
var state_val_12948 = (state_12947[(1)]);
if((state_val_12948 === (7))){
var inst_12943 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12949_12971 = state_12947__$1;
(statearr_12949_12971[(2)] = inst_12943);

(statearr_12949_12971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (1))){
var state_12947__$1 = state_12947;
var statearr_12950_12972 = state_12947__$1;
(statearr_12950_12972[(2)] = null);

(statearr_12950_12972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (4))){
var inst_12924 = (state_12947[(7)]);
var inst_12924__$1 = (state_12947[(2)]);
var inst_12925 = (inst_12924__$1 == null);
var state_12947__$1 = (function (){var statearr_12951 = state_12947;
(statearr_12951[(7)] = inst_12924__$1);

return statearr_12951;
})();
if(cljs.core.truth_(inst_12925)){
var statearr_12952_12973 = state_12947__$1;
(statearr_12952_12973[(1)] = (5));

} else {
var statearr_12953_12974 = state_12947__$1;
(statearr_12953_12974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (13))){
var state_12947__$1 = state_12947;
var statearr_12954_12975 = state_12947__$1;
(statearr_12954_12975[(2)] = null);

(statearr_12954_12975[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (6))){
var inst_12924 = (state_12947[(7)]);
var inst_12930 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12924) : p.call(null,inst_12924));
var state_12947__$1 = state_12947;
if(cljs.core.truth_(inst_12930)){
var statearr_12955_12976 = state_12947__$1;
(statearr_12955_12976[(1)] = (9));

} else {
var statearr_12956_12977 = state_12947__$1;
(statearr_12956_12977[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (3))){
var inst_12945 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12947__$1,inst_12945);
} else {
if((state_val_12948 === (12))){
var state_12947__$1 = state_12947;
var statearr_12957_12978 = state_12947__$1;
(statearr_12957_12978[(2)] = null);

(statearr_12957_12978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (2))){
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12947__$1,(4),ch);
} else {
if((state_val_12948 === (11))){
var inst_12924 = (state_12947[(7)]);
var inst_12934 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12947__$1,(8),inst_12934,inst_12924);
} else {
if((state_val_12948 === (9))){
var state_12947__$1 = state_12947;
var statearr_12958_12979 = state_12947__$1;
(statearr_12958_12979[(2)] = tc);

(statearr_12958_12979[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (5))){
var inst_12927 = cljs.core.async.close_BANG_(tc);
var inst_12928 = cljs.core.async.close_BANG_(fc);
var state_12947__$1 = (function (){var statearr_12959 = state_12947;
(statearr_12959[(8)] = inst_12927);

return statearr_12959;
})();
var statearr_12960_12980 = state_12947__$1;
(statearr_12960_12980[(2)] = inst_12928);

(statearr_12960_12980[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (14))){
var inst_12941 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
var statearr_12961_12981 = state_12947__$1;
(statearr_12961_12981[(2)] = inst_12941);

(statearr_12961_12981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (10))){
var state_12947__$1 = state_12947;
var statearr_12962_12982 = state_12947__$1;
(statearr_12962_12982[(2)] = fc);

(statearr_12962_12982[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12948 === (8))){
var inst_12936 = (state_12947[(2)]);
var state_12947__$1 = state_12947;
if(cljs.core.truth_(inst_12936)){
var statearr_12963_12983 = state_12947__$1;
(statearr_12963_12983[(1)] = (12));

} else {
var statearr_12964_12984 = state_12947__$1;
(statearr_12964_12984[(1)] = (13));

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
});})(c__12518__auto___12970,tc,fc))
;
return ((function (switch__12415__auto__,c__12518__auto___12970,tc,fc){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_12965 = [null,null,null,null,null,null,null,null,null];
(statearr_12965[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_12965[(1)] = (1));

return statearr_12965;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_12947){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_12947);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e12966){if((e12966 instanceof Object)){
var ex__12419__auto__ = e12966;
var statearr_12967_12985 = state_12947;
(statearr_12967_12985[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12947);

return cljs.core.cst$kw$recur;
} else {
throw e12966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__12986 = state_12947;
state_12947 = G__12986;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_12947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_12947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___12970,tc,fc))
})();
var state__12520__auto__ = (function (){var statearr_12968 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_12968[(6)] = c__12518__auto___12970);

return statearr_12968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___12970,tc,fc))
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
var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__){
return (function (state_13007){
var state_val_13008 = (state_13007[(1)]);
if((state_val_13008 === (7))){
var inst_13003 = (state_13007[(2)]);
var state_13007__$1 = state_13007;
var statearr_13009_13027 = state_13007__$1;
(statearr_13009_13027[(2)] = inst_13003);

(statearr_13009_13027[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (1))){
var inst_12987 = init;
var state_13007__$1 = (function (){var statearr_13010 = state_13007;
(statearr_13010[(7)] = inst_12987);

return statearr_13010;
})();
var statearr_13011_13028 = state_13007__$1;
(statearr_13011_13028[(2)] = null);

(statearr_13011_13028[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (4))){
var inst_12990 = (state_13007[(8)]);
var inst_12990__$1 = (state_13007[(2)]);
var inst_12991 = (inst_12990__$1 == null);
var state_13007__$1 = (function (){var statearr_13012 = state_13007;
(statearr_13012[(8)] = inst_12990__$1);

return statearr_13012;
})();
if(cljs.core.truth_(inst_12991)){
var statearr_13013_13029 = state_13007__$1;
(statearr_13013_13029[(1)] = (5));

} else {
var statearr_13014_13030 = state_13007__$1;
(statearr_13014_13030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (6))){
var inst_12994 = (state_13007[(9)]);
var inst_12987 = (state_13007[(7)]);
var inst_12990 = (state_13007[(8)]);
var inst_12994__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12987,inst_12990) : f.call(null,inst_12987,inst_12990));
var inst_12995 = cljs.core.reduced_QMARK_(inst_12994__$1);
var state_13007__$1 = (function (){var statearr_13015 = state_13007;
(statearr_13015[(9)] = inst_12994__$1);

return statearr_13015;
})();
if(inst_12995){
var statearr_13016_13031 = state_13007__$1;
(statearr_13016_13031[(1)] = (8));

} else {
var statearr_13017_13032 = state_13007__$1;
(statearr_13017_13032[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (3))){
var inst_13005 = (state_13007[(2)]);
var state_13007__$1 = state_13007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13007__$1,inst_13005);
} else {
if((state_val_13008 === (2))){
var state_13007__$1 = state_13007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13007__$1,(4),ch);
} else {
if((state_val_13008 === (9))){
var inst_12994 = (state_13007[(9)]);
var inst_12987 = inst_12994;
var state_13007__$1 = (function (){var statearr_13018 = state_13007;
(statearr_13018[(7)] = inst_12987);

return statearr_13018;
})();
var statearr_13019_13033 = state_13007__$1;
(statearr_13019_13033[(2)] = null);

(statearr_13019_13033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (5))){
var inst_12987 = (state_13007[(7)]);
var state_13007__$1 = state_13007;
var statearr_13020_13034 = state_13007__$1;
(statearr_13020_13034[(2)] = inst_12987);

(statearr_13020_13034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (10))){
var inst_13001 = (state_13007[(2)]);
var state_13007__$1 = state_13007;
var statearr_13021_13035 = state_13007__$1;
(statearr_13021_13035[(2)] = inst_13001);

(statearr_13021_13035[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13008 === (8))){
var inst_12994 = (state_13007[(9)]);
var inst_12997 = cljs.core.deref(inst_12994);
var state_13007__$1 = state_13007;
var statearr_13022_13036 = state_13007__$1;
(statearr_13022_13036[(2)] = inst_12997);

(statearr_13022_13036[(1)] = (10));


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
});})(c__12518__auto__))
;
return ((function (switch__12415__auto__,c__12518__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12416__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12416__auto____0 = (function (){
var statearr_13023 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13023[(0)] = cljs$core$async$reduce_$_state_machine__12416__auto__);

(statearr_13023[(1)] = (1));

return statearr_13023;
});
var cljs$core$async$reduce_$_state_machine__12416__auto____1 = (function (state_13007){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13007);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13024){if((e13024 instanceof Object)){
var ex__12419__auto__ = e13024;
var statearr_13025_13037 = state_13007;
(statearr_13025_13037[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13007);

return cljs.core.cst$kw$recur;
} else {
throw e13024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13038 = state_13007;
state_13007 = G__13038;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12416__auto__ = function(state_13007){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12416__auto____1.call(this,state_13007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12416__auto____0;
cljs$core$async$reduce_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12416__auto____1;
return cljs$core$async$reduce_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__))
})();
var state__12520__auto__ = (function (){var statearr_13026 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13026[(6)] = c__12518__auto__);

return statearr_13026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__))
);

return c__12518__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__,f__$1){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__,f__$1){
return (function (state_13044){
var state_val_13045 = (state_13044[(1)]);
if((state_val_13045 === (1))){
var inst_13039 = cljs.core.async.reduce(f__$1,init,ch);
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13044__$1,(2),inst_13039);
} else {
if((state_val_13045 === (2))){
var inst_13041 = (state_13044[(2)]);
var inst_13042 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13041) : f__$1.call(null,inst_13041));
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13044__$1,inst_13042);
} else {
return null;
}
}
});})(c__12518__auto__,f__$1))
;
return ((function (switch__12415__auto__,c__12518__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12416__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12416__auto____0 = (function (){
var statearr_13046 = [null,null,null,null,null,null,null];
(statearr_13046[(0)] = cljs$core$async$transduce_$_state_machine__12416__auto__);

(statearr_13046[(1)] = (1));

return statearr_13046;
});
var cljs$core$async$transduce_$_state_machine__12416__auto____1 = (function (state_13044){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13044);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13047){if((e13047 instanceof Object)){
var ex__12419__auto__ = e13047;
var statearr_13048_13050 = state_13044;
(statearr_13048_13050[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13044);

return cljs.core.cst$kw$recur;
} else {
throw e13047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13051 = state_13044;
state_13044 = G__13051;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12416__auto__ = function(state_13044){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12416__auto____1.call(this,state_13044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12416__auto____0;
cljs$core$async$transduce_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12416__auto____1;
return cljs$core$async$transduce_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__,f__$1))
})();
var state__12520__auto__ = (function (){var statearr_13049 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13049[(6)] = c__12518__auto__);

return statearr_13049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__,f__$1))
);

return c__12518__auto__;
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
var G__13053 = arguments.length;
switch (G__13053) {
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
var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__){
return (function (state_13078){
var state_val_13079 = (state_13078[(1)]);
if((state_val_13079 === (7))){
var inst_13060 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
var statearr_13080_13101 = state_13078__$1;
(statearr_13080_13101[(2)] = inst_13060);

(statearr_13080_13101[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (1))){
var inst_13054 = cljs.core.seq(coll);
var inst_13055 = inst_13054;
var state_13078__$1 = (function (){var statearr_13081 = state_13078;
(statearr_13081[(7)] = inst_13055);

return statearr_13081;
})();
var statearr_13082_13102 = state_13078__$1;
(statearr_13082_13102[(2)] = null);

(statearr_13082_13102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (4))){
var inst_13055 = (state_13078[(7)]);
var inst_13058 = cljs.core.first(inst_13055);
var state_13078__$1 = state_13078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13078__$1,(7),ch,inst_13058);
} else {
if((state_val_13079 === (13))){
var inst_13072 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
var statearr_13083_13103 = state_13078__$1;
(statearr_13083_13103[(2)] = inst_13072);

(statearr_13083_13103[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (6))){
var inst_13063 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
if(cljs.core.truth_(inst_13063)){
var statearr_13084_13104 = state_13078__$1;
(statearr_13084_13104[(1)] = (8));

} else {
var statearr_13085_13105 = state_13078__$1;
(statearr_13085_13105[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (3))){
var inst_13076 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13078__$1,inst_13076);
} else {
if((state_val_13079 === (12))){
var state_13078__$1 = state_13078;
var statearr_13086_13106 = state_13078__$1;
(statearr_13086_13106[(2)] = null);

(statearr_13086_13106[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (2))){
var inst_13055 = (state_13078[(7)]);
var state_13078__$1 = state_13078;
if(cljs.core.truth_(inst_13055)){
var statearr_13087_13107 = state_13078__$1;
(statearr_13087_13107[(1)] = (4));

} else {
var statearr_13088_13108 = state_13078__$1;
(statearr_13088_13108[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (11))){
var inst_13069 = cljs.core.async.close_BANG_(ch);
var state_13078__$1 = state_13078;
var statearr_13089_13109 = state_13078__$1;
(statearr_13089_13109[(2)] = inst_13069);

(statearr_13089_13109[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (9))){
var state_13078__$1 = state_13078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13090_13110 = state_13078__$1;
(statearr_13090_13110[(1)] = (11));

} else {
var statearr_13091_13111 = state_13078__$1;
(statearr_13091_13111[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (5))){
var inst_13055 = (state_13078[(7)]);
var state_13078__$1 = state_13078;
var statearr_13092_13112 = state_13078__$1;
(statearr_13092_13112[(2)] = inst_13055);

(statearr_13092_13112[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (10))){
var inst_13074 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
var statearr_13093_13113 = state_13078__$1;
(statearr_13093_13113[(2)] = inst_13074);

(statearr_13093_13113[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13079 === (8))){
var inst_13055 = (state_13078[(7)]);
var inst_13065 = cljs.core.next(inst_13055);
var inst_13055__$1 = inst_13065;
var state_13078__$1 = (function (){var statearr_13094 = state_13078;
(statearr_13094[(7)] = inst_13055__$1);

return statearr_13094;
})();
var statearr_13095_13114 = state_13078__$1;
(statearr_13095_13114[(2)] = null);

(statearr_13095_13114[(1)] = (2));


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
});})(c__12518__auto__))
;
return ((function (switch__12415__auto__,c__12518__auto__){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_13096 = [null,null,null,null,null,null,null,null];
(statearr_13096[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_13096[(1)] = (1));

return statearr_13096;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_13078){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13078);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13097){if((e13097 instanceof Object)){
var ex__12419__auto__ = e13097;
var statearr_13098_13115 = state_13078;
(statearr_13098_13115[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13078);

return cljs.core.cst$kw$recur;
} else {
throw e13097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13116 = state_13078;
state_13078 = G__13116;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_13078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_13078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__))
})();
var state__12520__auto__ = (function (){var statearr_13099 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13099[(6)] = c__12518__auto__);

return statearr_13099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__))
);

return c__12518__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13117 = (function (ch,cs,meta13118){
this.ch = ch;
this.cs = cs;
this.meta13118 = meta13118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13119,meta13118__$1){
var self__ = this;
var _13119__$1 = this;
return (new cljs.core.async.t_cljs$core$async13117(self__.ch,self__.cs,meta13118__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13119){
var self__ = this;
var _13119__$1 = this;
return self__.meta13118;
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta13118], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13117";

cljs.core.async.t_cljs$core$async13117.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13117");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13117.
 */
cljs.core.async.__GT_t_cljs$core$async13117 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13117(ch__$1,cs__$1,meta13118){
return (new cljs.core.async.t_cljs$core$async13117(ch__$1,cs__$1,meta13118));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13117(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12518__auto___13339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___13339,cs,m,dchan,dctr,done){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___13339,cs,m,dchan,dctr,done){
return (function (state_13254){
var state_val_13255 = (state_13254[(1)]);
if((state_val_13255 === (7))){
var inst_13250 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13256_13340 = state_13254__$1;
(statearr_13256_13340[(2)] = inst_13250);

(statearr_13256_13340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (20))){
var inst_13153 = (state_13254[(7)]);
var inst_13165 = cljs.core.first(inst_13153);
var inst_13166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13165,(0),null);
var inst_13167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13165,(1),null);
var state_13254__$1 = (function (){var statearr_13257 = state_13254;
(statearr_13257[(8)] = inst_13166);

return statearr_13257;
})();
if(cljs.core.truth_(inst_13167)){
var statearr_13258_13341 = state_13254__$1;
(statearr_13258_13341[(1)] = (22));

} else {
var statearr_13259_13342 = state_13254__$1;
(statearr_13259_13342[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (27))){
var inst_13202 = (state_13254[(9)]);
var inst_13195 = (state_13254[(10)]);
var inst_13197 = (state_13254[(11)]);
var inst_13122 = (state_13254[(12)]);
var inst_13202__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13195,inst_13197);
var inst_13203 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13202__$1,inst_13122,done);
var state_13254__$1 = (function (){var statearr_13260 = state_13254;
(statearr_13260[(9)] = inst_13202__$1);

return statearr_13260;
})();
if(cljs.core.truth_(inst_13203)){
var statearr_13261_13343 = state_13254__$1;
(statearr_13261_13343[(1)] = (30));

} else {
var statearr_13262_13344 = state_13254__$1;
(statearr_13262_13344[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (1))){
var state_13254__$1 = state_13254;
var statearr_13263_13345 = state_13254__$1;
(statearr_13263_13345[(2)] = null);

(statearr_13263_13345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (24))){
var inst_13153 = (state_13254[(7)]);
var inst_13172 = (state_13254[(2)]);
var inst_13173 = cljs.core.next(inst_13153);
var inst_13131 = inst_13173;
var inst_13132 = null;
var inst_13133 = (0);
var inst_13134 = (0);
var state_13254__$1 = (function (){var statearr_13264 = state_13254;
(statearr_13264[(13)] = inst_13131);

(statearr_13264[(14)] = inst_13133);

(statearr_13264[(15)] = inst_13172);

(statearr_13264[(16)] = inst_13132);

(statearr_13264[(17)] = inst_13134);

return statearr_13264;
})();
var statearr_13265_13346 = state_13254__$1;
(statearr_13265_13346[(2)] = null);

(statearr_13265_13346[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (39))){
var state_13254__$1 = state_13254;
var statearr_13269_13347 = state_13254__$1;
(statearr_13269_13347[(2)] = null);

(statearr_13269_13347[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (4))){
var inst_13122 = (state_13254[(12)]);
var inst_13122__$1 = (state_13254[(2)]);
var inst_13123 = (inst_13122__$1 == null);
var state_13254__$1 = (function (){var statearr_13270 = state_13254;
(statearr_13270[(12)] = inst_13122__$1);

return statearr_13270;
})();
if(cljs.core.truth_(inst_13123)){
var statearr_13271_13348 = state_13254__$1;
(statearr_13271_13348[(1)] = (5));

} else {
var statearr_13272_13349 = state_13254__$1;
(statearr_13272_13349[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (15))){
var inst_13131 = (state_13254[(13)]);
var inst_13133 = (state_13254[(14)]);
var inst_13132 = (state_13254[(16)]);
var inst_13134 = (state_13254[(17)]);
var inst_13149 = (state_13254[(2)]);
var inst_13150 = (inst_13134 + (1));
var tmp13266 = inst_13131;
var tmp13267 = inst_13133;
var tmp13268 = inst_13132;
var inst_13131__$1 = tmp13266;
var inst_13132__$1 = tmp13268;
var inst_13133__$1 = tmp13267;
var inst_13134__$1 = inst_13150;
var state_13254__$1 = (function (){var statearr_13273 = state_13254;
(statearr_13273[(13)] = inst_13131__$1);

(statearr_13273[(14)] = inst_13133__$1);

(statearr_13273[(16)] = inst_13132__$1);

(statearr_13273[(18)] = inst_13149);

(statearr_13273[(17)] = inst_13134__$1);

return statearr_13273;
})();
var statearr_13274_13350 = state_13254__$1;
(statearr_13274_13350[(2)] = null);

(statearr_13274_13350[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (21))){
var inst_13176 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13278_13351 = state_13254__$1;
(statearr_13278_13351[(2)] = inst_13176);

(statearr_13278_13351[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (31))){
var inst_13202 = (state_13254[(9)]);
var inst_13206 = done(null);
var inst_13207 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13202);
var state_13254__$1 = (function (){var statearr_13279 = state_13254;
(statearr_13279[(19)] = inst_13206);

return statearr_13279;
})();
var statearr_13280_13352 = state_13254__$1;
(statearr_13280_13352[(2)] = inst_13207);

(statearr_13280_13352[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (32))){
var inst_13194 = (state_13254[(20)]);
var inst_13195 = (state_13254[(10)]);
var inst_13196 = (state_13254[(21)]);
var inst_13197 = (state_13254[(11)]);
var inst_13209 = (state_13254[(2)]);
var inst_13210 = (inst_13197 + (1));
var tmp13275 = inst_13194;
var tmp13276 = inst_13195;
var tmp13277 = inst_13196;
var inst_13194__$1 = tmp13275;
var inst_13195__$1 = tmp13276;
var inst_13196__$1 = tmp13277;
var inst_13197__$1 = inst_13210;
var state_13254__$1 = (function (){var statearr_13281 = state_13254;
(statearr_13281[(20)] = inst_13194__$1);

(statearr_13281[(22)] = inst_13209);

(statearr_13281[(10)] = inst_13195__$1);

(statearr_13281[(21)] = inst_13196__$1);

(statearr_13281[(11)] = inst_13197__$1);

return statearr_13281;
})();
var statearr_13282_13353 = state_13254__$1;
(statearr_13282_13353[(2)] = null);

(statearr_13282_13353[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (40))){
var inst_13222 = (state_13254[(23)]);
var inst_13226 = done(null);
var inst_13227 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13222);
var state_13254__$1 = (function (){var statearr_13283 = state_13254;
(statearr_13283[(24)] = inst_13226);

return statearr_13283;
})();
var statearr_13284_13354 = state_13254__$1;
(statearr_13284_13354[(2)] = inst_13227);

(statearr_13284_13354[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (33))){
var inst_13213 = (state_13254[(25)]);
var inst_13215 = cljs.core.chunked_seq_QMARK_(inst_13213);
var state_13254__$1 = state_13254;
if(inst_13215){
var statearr_13285_13355 = state_13254__$1;
(statearr_13285_13355[(1)] = (36));

} else {
var statearr_13286_13356 = state_13254__$1;
(statearr_13286_13356[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (13))){
var inst_13143 = (state_13254[(26)]);
var inst_13146 = cljs.core.async.close_BANG_(inst_13143);
var state_13254__$1 = state_13254;
var statearr_13287_13357 = state_13254__$1;
(statearr_13287_13357[(2)] = inst_13146);

(statearr_13287_13357[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (22))){
var inst_13166 = (state_13254[(8)]);
var inst_13169 = cljs.core.async.close_BANG_(inst_13166);
var state_13254__$1 = state_13254;
var statearr_13288_13358 = state_13254__$1;
(statearr_13288_13358[(2)] = inst_13169);

(statearr_13288_13358[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (36))){
var inst_13213 = (state_13254[(25)]);
var inst_13217 = cljs.core.chunk_first(inst_13213);
var inst_13218 = cljs.core.chunk_rest(inst_13213);
var inst_13219 = cljs.core.count(inst_13217);
var inst_13194 = inst_13218;
var inst_13195 = inst_13217;
var inst_13196 = inst_13219;
var inst_13197 = (0);
var state_13254__$1 = (function (){var statearr_13289 = state_13254;
(statearr_13289[(20)] = inst_13194);

(statearr_13289[(10)] = inst_13195);

(statearr_13289[(21)] = inst_13196);

(statearr_13289[(11)] = inst_13197);

return statearr_13289;
})();
var statearr_13290_13359 = state_13254__$1;
(statearr_13290_13359[(2)] = null);

(statearr_13290_13359[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (41))){
var inst_13213 = (state_13254[(25)]);
var inst_13229 = (state_13254[(2)]);
var inst_13230 = cljs.core.next(inst_13213);
var inst_13194 = inst_13230;
var inst_13195 = null;
var inst_13196 = (0);
var inst_13197 = (0);
var state_13254__$1 = (function (){var statearr_13291 = state_13254;
(statearr_13291[(27)] = inst_13229);

(statearr_13291[(20)] = inst_13194);

(statearr_13291[(10)] = inst_13195);

(statearr_13291[(21)] = inst_13196);

(statearr_13291[(11)] = inst_13197);

return statearr_13291;
})();
var statearr_13292_13360 = state_13254__$1;
(statearr_13292_13360[(2)] = null);

(statearr_13292_13360[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (43))){
var state_13254__$1 = state_13254;
var statearr_13293_13361 = state_13254__$1;
(statearr_13293_13361[(2)] = null);

(statearr_13293_13361[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (29))){
var inst_13238 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13294_13362 = state_13254__$1;
(statearr_13294_13362[(2)] = inst_13238);

(statearr_13294_13362[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (44))){
var inst_13247 = (state_13254[(2)]);
var state_13254__$1 = (function (){var statearr_13295 = state_13254;
(statearr_13295[(28)] = inst_13247);

return statearr_13295;
})();
var statearr_13296_13363 = state_13254__$1;
(statearr_13296_13363[(2)] = null);

(statearr_13296_13363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (6))){
var inst_13186 = (state_13254[(29)]);
var inst_13185 = cljs.core.deref(cs);
var inst_13186__$1 = cljs.core.keys(inst_13185);
var inst_13187 = cljs.core.count(inst_13186__$1);
var inst_13188 = cljs.core.reset_BANG_(dctr,inst_13187);
var inst_13193 = cljs.core.seq(inst_13186__$1);
var inst_13194 = inst_13193;
var inst_13195 = null;
var inst_13196 = (0);
var inst_13197 = (0);
var state_13254__$1 = (function (){var statearr_13297 = state_13254;
(statearr_13297[(29)] = inst_13186__$1);

(statearr_13297[(30)] = inst_13188);

(statearr_13297[(20)] = inst_13194);

(statearr_13297[(10)] = inst_13195);

(statearr_13297[(21)] = inst_13196);

(statearr_13297[(11)] = inst_13197);

return statearr_13297;
})();
var statearr_13298_13364 = state_13254__$1;
(statearr_13298_13364[(2)] = null);

(statearr_13298_13364[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (28))){
var inst_13213 = (state_13254[(25)]);
var inst_13194 = (state_13254[(20)]);
var inst_13213__$1 = cljs.core.seq(inst_13194);
var state_13254__$1 = (function (){var statearr_13299 = state_13254;
(statearr_13299[(25)] = inst_13213__$1);

return statearr_13299;
})();
if(inst_13213__$1){
var statearr_13300_13365 = state_13254__$1;
(statearr_13300_13365[(1)] = (33));

} else {
var statearr_13301_13366 = state_13254__$1;
(statearr_13301_13366[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (25))){
var inst_13196 = (state_13254[(21)]);
var inst_13197 = (state_13254[(11)]);
var inst_13199 = (inst_13197 < inst_13196);
var inst_13200 = inst_13199;
var state_13254__$1 = state_13254;
if(cljs.core.truth_(inst_13200)){
var statearr_13302_13367 = state_13254__$1;
(statearr_13302_13367[(1)] = (27));

} else {
var statearr_13303_13368 = state_13254__$1;
(statearr_13303_13368[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (34))){
var state_13254__$1 = state_13254;
var statearr_13304_13369 = state_13254__$1;
(statearr_13304_13369[(2)] = null);

(statearr_13304_13369[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (17))){
var state_13254__$1 = state_13254;
var statearr_13305_13370 = state_13254__$1;
(statearr_13305_13370[(2)] = null);

(statearr_13305_13370[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (3))){
var inst_13252 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13254__$1,inst_13252);
} else {
if((state_val_13255 === (12))){
var inst_13181 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13306_13371 = state_13254__$1;
(statearr_13306_13371[(2)] = inst_13181);

(statearr_13306_13371[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (2))){
var state_13254__$1 = state_13254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13254__$1,(4),ch);
} else {
if((state_val_13255 === (23))){
var state_13254__$1 = state_13254;
var statearr_13307_13372 = state_13254__$1;
(statearr_13307_13372[(2)] = null);

(statearr_13307_13372[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (35))){
var inst_13236 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13308_13373 = state_13254__$1;
(statearr_13308_13373[(2)] = inst_13236);

(statearr_13308_13373[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (19))){
var inst_13153 = (state_13254[(7)]);
var inst_13157 = cljs.core.chunk_first(inst_13153);
var inst_13158 = cljs.core.chunk_rest(inst_13153);
var inst_13159 = cljs.core.count(inst_13157);
var inst_13131 = inst_13158;
var inst_13132 = inst_13157;
var inst_13133 = inst_13159;
var inst_13134 = (0);
var state_13254__$1 = (function (){var statearr_13309 = state_13254;
(statearr_13309[(13)] = inst_13131);

(statearr_13309[(14)] = inst_13133);

(statearr_13309[(16)] = inst_13132);

(statearr_13309[(17)] = inst_13134);

return statearr_13309;
})();
var statearr_13310_13374 = state_13254__$1;
(statearr_13310_13374[(2)] = null);

(statearr_13310_13374[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (11))){
var inst_13131 = (state_13254[(13)]);
var inst_13153 = (state_13254[(7)]);
var inst_13153__$1 = cljs.core.seq(inst_13131);
var state_13254__$1 = (function (){var statearr_13311 = state_13254;
(statearr_13311[(7)] = inst_13153__$1);

return statearr_13311;
})();
if(inst_13153__$1){
var statearr_13312_13375 = state_13254__$1;
(statearr_13312_13375[(1)] = (16));

} else {
var statearr_13313_13376 = state_13254__$1;
(statearr_13313_13376[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (9))){
var inst_13183 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13314_13377 = state_13254__$1;
(statearr_13314_13377[(2)] = inst_13183);

(statearr_13314_13377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (5))){
var inst_13129 = cljs.core.deref(cs);
var inst_13130 = cljs.core.seq(inst_13129);
var inst_13131 = inst_13130;
var inst_13132 = null;
var inst_13133 = (0);
var inst_13134 = (0);
var state_13254__$1 = (function (){var statearr_13315 = state_13254;
(statearr_13315[(13)] = inst_13131);

(statearr_13315[(14)] = inst_13133);

(statearr_13315[(16)] = inst_13132);

(statearr_13315[(17)] = inst_13134);

return statearr_13315;
})();
var statearr_13316_13378 = state_13254__$1;
(statearr_13316_13378[(2)] = null);

(statearr_13316_13378[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (14))){
var state_13254__$1 = state_13254;
var statearr_13317_13379 = state_13254__$1;
(statearr_13317_13379[(2)] = null);

(statearr_13317_13379[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (45))){
var inst_13244 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13318_13380 = state_13254__$1;
(statearr_13318_13380[(2)] = inst_13244);

(statearr_13318_13380[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (26))){
var inst_13186 = (state_13254[(29)]);
var inst_13240 = (state_13254[(2)]);
var inst_13241 = cljs.core.seq(inst_13186);
var state_13254__$1 = (function (){var statearr_13319 = state_13254;
(statearr_13319[(31)] = inst_13240);

return statearr_13319;
})();
if(inst_13241){
var statearr_13320_13381 = state_13254__$1;
(statearr_13320_13381[(1)] = (42));

} else {
var statearr_13321_13382 = state_13254__$1;
(statearr_13321_13382[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (16))){
var inst_13153 = (state_13254[(7)]);
var inst_13155 = cljs.core.chunked_seq_QMARK_(inst_13153);
var state_13254__$1 = state_13254;
if(inst_13155){
var statearr_13322_13383 = state_13254__$1;
(statearr_13322_13383[(1)] = (19));

} else {
var statearr_13323_13384 = state_13254__$1;
(statearr_13323_13384[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (38))){
var inst_13233 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13324_13385 = state_13254__$1;
(statearr_13324_13385[(2)] = inst_13233);

(statearr_13324_13385[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (30))){
var state_13254__$1 = state_13254;
var statearr_13325_13386 = state_13254__$1;
(statearr_13325_13386[(2)] = null);

(statearr_13325_13386[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (10))){
var inst_13132 = (state_13254[(16)]);
var inst_13134 = (state_13254[(17)]);
var inst_13142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13132,inst_13134);
var inst_13143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13142,(0),null);
var inst_13144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13142,(1),null);
var state_13254__$1 = (function (){var statearr_13326 = state_13254;
(statearr_13326[(26)] = inst_13143);

return statearr_13326;
})();
if(cljs.core.truth_(inst_13144)){
var statearr_13327_13387 = state_13254__$1;
(statearr_13327_13387[(1)] = (13));

} else {
var statearr_13328_13388 = state_13254__$1;
(statearr_13328_13388[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (18))){
var inst_13179 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13329_13389 = state_13254__$1;
(statearr_13329_13389[(2)] = inst_13179);

(statearr_13329_13389[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (42))){
var state_13254__$1 = state_13254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13254__$1,(45),dchan);
} else {
if((state_val_13255 === (37))){
var inst_13213 = (state_13254[(25)]);
var inst_13222 = (state_13254[(23)]);
var inst_13122 = (state_13254[(12)]);
var inst_13222__$1 = cljs.core.first(inst_13213);
var inst_13223 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13222__$1,inst_13122,done);
var state_13254__$1 = (function (){var statearr_13330 = state_13254;
(statearr_13330[(23)] = inst_13222__$1);

return statearr_13330;
})();
if(cljs.core.truth_(inst_13223)){
var statearr_13331_13390 = state_13254__$1;
(statearr_13331_13390[(1)] = (39));

} else {
var statearr_13332_13391 = state_13254__$1;
(statearr_13332_13391[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13255 === (8))){
var inst_13133 = (state_13254[(14)]);
var inst_13134 = (state_13254[(17)]);
var inst_13136 = (inst_13134 < inst_13133);
var inst_13137 = inst_13136;
var state_13254__$1 = state_13254;
if(cljs.core.truth_(inst_13137)){
var statearr_13333_13392 = state_13254__$1;
(statearr_13333_13392[(1)] = (10));

} else {
var statearr_13334_13393 = state_13254__$1;
(statearr_13334_13393[(1)] = (11));

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
});})(c__12518__auto___13339,cs,m,dchan,dctr,done))
;
return ((function (switch__12415__auto__,c__12518__auto___13339,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12416__auto__ = null;
var cljs$core$async$mult_$_state_machine__12416__auto____0 = (function (){
var statearr_13335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13335[(0)] = cljs$core$async$mult_$_state_machine__12416__auto__);

(statearr_13335[(1)] = (1));

return statearr_13335;
});
var cljs$core$async$mult_$_state_machine__12416__auto____1 = (function (state_13254){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13254);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13336){if((e13336 instanceof Object)){
var ex__12419__auto__ = e13336;
var statearr_13337_13394 = state_13254;
(statearr_13337_13394[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13254);

return cljs.core.cst$kw$recur;
} else {
throw e13336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13395 = state_13254;
state_13254 = G__13395;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12416__auto__ = function(state_13254){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12416__auto____1.call(this,state_13254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12416__auto____0;
cljs$core$async$mult_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12416__auto____1;
return cljs$core$async$mult_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___13339,cs,m,dchan,dctr,done))
})();
var state__12520__auto__ = (function (){var statearr_13338 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13338[(6)] = c__12518__auto___13339);

return statearr_13338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___13339,cs,m,dchan,dctr,done))
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
var G__13397 = arguments.length;
switch (G__13397) {
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
var len__4531__auto___13409 = arguments.length;
var i__4532__auto___13410 = (0);
while(true){
if((i__4532__auto___13410 < len__4531__auto___13409)){
args__4534__auto__.push((arguments[i__4532__auto___13410]));

var G__13411 = (i__4532__auto___13410 + (1));
i__4532__auto___13410 = G__13411;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13403){
var map__13404 = p__13403;
var map__13404__$1 = ((((!((map__13404 == null)))?(((((map__13404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13404):map__13404);
var opts = map__13404__$1;
var statearr_13406_13412 = state;
(statearr_13406_13412[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__13404,map__13404__$1,opts){
return (function (val){
var statearr_13407_13413 = state;
(statearr_13407_13413[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__13404,map__13404__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_13408_13414 = state;
(statearr_13408_13414[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13399){
var G__13400 = cljs.core.first(seq13399);
var seq13399__$1 = cljs.core.next(seq13399);
var G__13401 = cljs.core.first(seq13399__$1);
var seq13399__$2 = cljs.core.next(seq13399__$1);
var G__13402 = cljs.core.first(seq13399__$2);
var seq13399__$3 = cljs.core.next(seq13399__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13400,G__13401,G__13402,seq13399__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13415 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13416){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13416 = meta13416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13417,meta13416__$1){
var self__ = this;
var _13417__$1 = this;
return (new cljs.core.async.t_cljs$core$async13415(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13417){
var self__ = this;
var _13417__$1 = this;
return self__.meta13416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13415.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta13416], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13415";

cljs.core.async.t_cljs$core$async13415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13415.
 */
cljs.core.async.__GT_t_cljs$core$async13415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13415(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13416){
return (new cljs.core.async.t_cljs$core$async13415(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13415(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12518__auto___13579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___13579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___13579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13519){
var state_val_13520 = (state_13519[(1)]);
if((state_val_13520 === (7))){
var inst_13434 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13521_13580 = state_13519__$1;
(statearr_13521_13580[(2)] = inst_13434);

(statearr_13521_13580[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (20))){
var inst_13446 = (state_13519[(7)]);
var state_13519__$1 = state_13519;
var statearr_13522_13581 = state_13519__$1;
(statearr_13522_13581[(2)] = inst_13446);

(statearr_13522_13581[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (27))){
var state_13519__$1 = state_13519;
var statearr_13523_13582 = state_13519__$1;
(statearr_13523_13582[(2)] = null);

(statearr_13523_13582[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (1))){
var inst_13421 = (state_13519[(8)]);
var inst_13421__$1 = calc_state();
var inst_13423 = (inst_13421__$1 == null);
var inst_13424 = cljs.core.not(inst_13423);
var state_13519__$1 = (function (){var statearr_13524 = state_13519;
(statearr_13524[(8)] = inst_13421__$1);

return statearr_13524;
})();
if(inst_13424){
var statearr_13525_13583 = state_13519__$1;
(statearr_13525_13583[(1)] = (2));

} else {
var statearr_13526_13584 = state_13519__$1;
(statearr_13526_13584[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (24))){
var inst_13479 = (state_13519[(9)]);
var inst_13493 = (state_13519[(10)]);
var inst_13470 = (state_13519[(11)]);
var inst_13493__$1 = (inst_13470.cljs$core$IFn$_invoke$arity$1 ? inst_13470.cljs$core$IFn$_invoke$arity$1(inst_13479) : inst_13470.call(null,inst_13479));
var state_13519__$1 = (function (){var statearr_13527 = state_13519;
(statearr_13527[(10)] = inst_13493__$1);

return statearr_13527;
})();
if(cljs.core.truth_(inst_13493__$1)){
var statearr_13528_13585 = state_13519__$1;
(statearr_13528_13585[(1)] = (29));

} else {
var statearr_13529_13586 = state_13519__$1;
(statearr_13529_13586[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (4))){
var inst_13437 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13437)){
var statearr_13530_13587 = state_13519__$1;
(statearr_13530_13587[(1)] = (8));

} else {
var statearr_13531_13588 = state_13519__$1;
(statearr_13531_13588[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (15))){
var inst_13464 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13464)){
var statearr_13532_13589 = state_13519__$1;
(statearr_13532_13589[(1)] = (19));

} else {
var statearr_13533_13590 = state_13519__$1;
(statearr_13533_13590[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (21))){
var inst_13469 = (state_13519[(12)]);
var inst_13469__$1 = (state_13519[(2)]);
var inst_13470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13469__$1,cljs.core.cst$kw$solos);
var inst_13471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13469__$1,cljs.core.cst$kw$mutes);
var inst_13472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13469__$1,cljs.core.cst$kw$reads);
var state_13519__$1 = (function (){var statearr_13534 = state_13519;
(statearr_13534[(12)] = inst_13469__$1);

(statearr_13534[(13)] = inst_13471);

(statearr_13534[(11)] = inst_13470);

return statearr_13534;
})();
return cljs.core.async.ioc_alts_BANG_(state_13519__$1,(22),inst_13472);
} else {
if((state_val_13520 === (31))){
var inst_13501 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13501)){
var statearr_13535_13591 = state_13519__$1;
(statearr_13535_13591[(1)] = (32));

} else {
var statearr_13536_13592 = state_13519__$1;
(statearr_13536_13592[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (32))){
var inst_13478 = (state_13519[(14)]);
var state_13519__$1 = state_13519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13519__$1,(35),out,inst_13478);
} else {
if((state_val_13520 === (33))){
var inst_13469 = (state_13519[(12)]);
var inst_13446 = inst_13469;
var state_13519__$1 = (function (){var statearr_13537 = state_13519;
(statearr_13537[(7)] = inst_13446);

return statearr_13537;
})();
var statearr_13538_13593 = state_13519__$1;
(statearr_13538_13593[(2)] = null);

(statearr_13538_13593[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (13))){
var inst_13446 = (state_13519[(7)]);
var inst_13453 = inst_13446.cljs$lang$protocol_mask$partition0$;
var inst_13454 = (inst_13453 & (64));
var inst_13455 = inst_13446.cljs$core$ISeq$;
var inst_13456 = (cljs.core.PROTOCOL_SENTINEL === inst_13455);
var inst_13457 = ((inst_13454) || (inst_13456));
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13457)){
var statearr_13539_13594 = state_13519__$1;
(statearr_13539_13594[(1)] = (16));

} else {
var statearr_13540_13595 = state_13519__$1;
(statearr_13540_13595[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (22))){
var inst_13479 = (state_13519[(9)]);
var inst_13478 = (state_13519[(14)]);
var inst_13477 = (state_13519[(2)]);
var inst_13478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13477,(0),null);
var inst_13479__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13477,(1),null);
var inst_13480 = (inst_13478__$1 == null);
var inst_13481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13479__$1,change);
var inst_13482 = ((inst_13480) || (inst_13481));
var state_13519__$1 = (function (){var statearr_13541 = state_13519;
(statearr_13541[(9)] = inst_13479__$1);

(statearr_13541[(14)] = inst_13478__$1);

return statearr_13541;
})();
if(cljs.core.truth_(inst_13482)){
var statearr_13542_13596 = state_13519__$1;
(statearr_13542_13596[(1)] = (23));

} else {
var statearr_13543_13597 = state_13519__$1;
(statearr_13543_13597[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (36))){
var inst_13469 = (state_13519[(12)]);
var inst_13446 = inst_13469;
var state_13519__$1 = (function (){var statearr_13544 = state_13519;
(statearr_13544[(7)] = inst_13446);

return statearr_13544;
})();
var statearr_13545_13598 = state_13519__$1;
(statearr_13545_13598[(2)] = null);

(statearr_13545_13598[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (29))){
var inst_13493 = (state_13519[(10)]);
var state_13519__$1 = state_13519;
var statearr_13546_13599 = state_13519__$1;
(statearr_13546_13599[(2)] = inst_13493);

(statearr_13546_13599[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (6))){
var state_13519__$1 = state_13519;
var statearr_13547_13600 = state_13519__$1;
(statearr_13547_13600[(2)] = false);

(statearr_13547_13600[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (28))){
var inst_13489 = (state_13519[(2)]);
var inst_13490 = calc_state();
var inst_13446 = inst_13490;
var state_13519__$1 = (function (){var statearr_13548 = state_13519;
(statearr_13548[(7)] = inst_13446);

(statearr_13548[(15)] = inst_13489);

return statearr_13548;
})();
var statearr_13549_13601 = state_13519__$1;
(statearr_13549_13601[(2)] = null);

(statearr_13549_13601[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (25))){
var inst_13515 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13550_13602 = state_13519__$1;
(statearr_13550_13602[(2)] = inst_13515);

(statearr_13550_13602[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (34))){
var inst_13513 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13551_13603 = state_13519__$1;
(statearr_13551_13603[(2)] = inst_13513);

(statearr_13551_13603[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (17))){
var state_13519__$1 = state_13519;
var statearr_13552_13604 = state_13519__$1;
(statearr_13552_13604[(2)] = false);

(statearr_13552_13604[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (3))){
var state_13519__$1 = state_13519;
var statearr_13553_13605 = state_13519__$1;
(statearr_13553_13605[(2)] = false);

(statearr_13553_13605[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (12))){
var inst_13517 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13519__$1,inst_13517);
} else {
if((state_val_13520 === (2))){
var inst_13421 = (state_13519[(8)]);
var inst_13426 = inst_13421.cljs$lang$protocol_mask$partition0$;
var inst_13427 = (inst_13426 & (64));
var inst_13428 = inst_13421.cljs$core$ISeq$;
var inst_13429 = (cljs.core.PROTOCOL_SENTINEL === inst_13428);
var inst_13430 = ((inst_13427) || (inst_13429));
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13430)){
var statearr_13554_13606 = state_13519__$1;
(statearr_13554_13606[(1)] = (5));

} else {
var statearr_13555_13607 = state_13519__$1;
(statearr_13555_13607[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (23))){
var inst_13478 = (state_13519[(14)]);
var inst_13484 = (inst_13478 == null);
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13484)){
var statearr_13556_13608 = state_13519__$1;
(statearr_13556_13608[(1)] = (26));

} else {
var statearr_13557_13609 = state_13519__$1;
(statearr_13557_13609[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (35))){
var inst_13504 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
if(cljs.core.truth_(inst_13504)){
var statearr_13558_13610 = state_13519__$1;
(statearr_13558_13610[(1)] = (36));

} else {
var statearr_13559_13611 = state_13519__$1;
(statearr_13559_13611[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (19))){
var inst_13446 = (state_13519[(7)]);
var inst_13466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13446);
var state_13519__$1 = state_13519;
var statearr_13560_13612 = state_13519__$1;
(statearr_13560_13612[(2)] = inst_13466);

(statearr_13560_13612[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (11))){
var inst_13446 = (state_13519[(7)]);
var inst_13450 = (inst_13446 == null);
var inst_13451 = cljs.core.not(inst_13450);
var state_13519__$1 = state_13519;
if(inst_13451){
var statearr_13561_13613 = state_13519__$1;
(statearr_13561_13613[(1)] = (13));

} else {
var statearr_13562_13614 = state_13519__$1;
(statearr_13562_13614[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (9))){
var inst_13421 = (state_13519[(8)]);
var state_13519__$1 = state_13519;
var statearr_13563_13615 = state_13519__$1;
(statearr_13563_13615[(2)] = inst_13421);

(statearr_13563_13615[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (5))){
var state_13519__$1 = state_13519;
var statearr_13564_13616 = state_13519__$1;
(statearr_13564_13616[(2)] = true);

(statearr_13564_13616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (14))){
var state_13519__$1 = state_13519;
var statearr_13565_13617 = state_13519__$1;
(statearr_13565_13617[(2)] = false);

(statearr_13565_13617[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (26))){
var inst_13479 = (state_13519[(9)]);
var inst_13486 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13479);
var state_13519__$1 = state_13519;
var statearr_13566_13618 = state_13519__$1;
(statearr_13566_13618[(2)] = inst_13486);

(statearr_13566_13618[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (16))){
var state_13519__$1 = state_13519;
var statearr_13567_13619 = state_13519__$1;
(statearr_13567_13619[(2)] = true);

(statearr_13567_13619[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (38))){
var inst_13509 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13568_13620 = state_13519__$1;
(statearr_13568_13620[(2)] = inst_13509);

(statearr_13568_13620[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (30))){
var inst_13479 = (state_13519[(9)]);
var inst_13471 = (state_13519[(13)]);
var inst_13470 = (state_13519[(11)]);
var inst_13496 = cljs.core.empty_QMARK_(inst_13470);
var inst_13497 = (inst_13471.cljs$core$IFn$_invoke$arity$1 ? inst_13471.cljs$core$IFn$_invoke$arity$1(inst_13479) : inst_13471.call(null,inst_13479));
var inst_13498 = cljs.core.not(inst_13497);
var inst_13499 = ((inst_13496) && (inst_13498));
var state_13519__$1 = state_13519;
var statearr_13569_13621 = state_13519__$1;
(statearr_13569_13621[(2)] = inst_13499);

(statearr_13569_13621[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (10))){
var inst_13421 = (state_13519[(8)]);
var inst_13442 = (state_13519[(2)]);
var inst_13443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13442,cljs.core.cst$kw$solos);
var inst_13444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13442,cljs.core.cst$kw$mutes);
var inst_13445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13442,cljs.core.cst$kw$reads);
var inst_13446 = inst_13421;
var state_13519__$1 = (function (){var statearr_13570 = state_13519;
(statearr_13570[(16)] = inst_13444);

(statearr_13570[(17)] = inst_13443);

(statearr_13570[(7)] = inst_13446);

(statearr_13570[(18)] = inst_13445);

return statearr_13570;
})();
var statearr_13571_13622 = state_13519__$1;
(statearr_13571_13622[(2)] = null);

(statearr_13571_13622[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (18))){
var inst_13461 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13572_13623 = state_13519__$1;
(statearr_13572_13623[(2)] = inst_13461);

(statearr_13572_13623[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (37))){
var state_13519__$1 = state_13519;
var statearr_13573_13624 = state_13519__$1;
(statearr_13573_13624[(2)] = null);

(statearr_13573_13624[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13520 === (8))){
var inst_13421 = (state_13519[(8)]);
var inst_13439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13421);
var state_13519__$1 = state_13519;
var statearr_13574_13625 = state_13519__$1;
(statearr_13574_13625[(2)] = inst_13439);

(statearr_13574_13625[(1)] = (10));


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
});})(c__12518__auto___13579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12415__auto__,c__12518__auto___13579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12416__auto__ = null;
var cljs$core$async$mix_$_state_machine__12416__auto____0 = (function (){
var statearr_13575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13575[(0)] = cljs$core$async$mix_$_state_machine__12416__auto__);

(statearr_13575[(1)] = (1));

return statearr_13575;
});
var cljs$core$async$mix_$_state_machine__12416__auto____1 = (function (state_13519){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13519);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13576){if((e13576 instanceof Object)){
var ex__12419__auto__ = e13576;
var statearr_13577_13626 = state_13519;
(statearr_13577_13626[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13519);

return cljs.core.cst$kw$recur;
} else {
throw e13576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13627 = state_13519;
state_13519 = G__13627;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12416__auto__ = function(state_13519){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12416__auto____1.call(this,state_13519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12416__auto____0;
cljs$core$async$mix_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12416__auto____1;
return cljs$core$async$mix_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___13579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12520__auto__ = (function (){var statearr_13578 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13578[(6)] = c__12518__auto___13579);

return statearr_13578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___13579,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__13629 = arguments.length;
switch (G__13629) {
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
var G__13633 = arguments.length;
switch (G__13633) {
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
return (function (p1__13631_SHARP_){
if(cljs.core.truth_((p1__13631_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13631_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13631_SHARP_.call(null,topic)))){
return p1__13631_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13631_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13634 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13635){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13635 = meta13635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13636,meta13635__$1){
var self__ = this;
var _13636__$1 = this;
return (new cljs.core.async.t_cljs$core$async13634(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13635__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13636){
var self__ = this;
var _13636__$1 = this;
return self__.meta13635;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta13635], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13634";

cljs.core.async.t_cljs$core$async13634.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13634");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13634.
 */
cljs.core.async.__GT_t_cljs$core$async13634 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13634(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13635){
return (new cljs.core.async.t_cljs$core$async13634(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13635));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13634(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12518__auto___13754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___13754,mults,ensure_mult,p){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___13754,mults,ensure_mult,p){
return (function (state_13708){
var state_val_13709 = (state_13708[(1)]);
if((state_val_13709 === (7))){
var inst_13704 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
var statearr_13710_13755 = state_13708__$1;
(statearr_13710_13755[(2)] = inst_13704);

(statearr_13710_13755[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (20))){
var state_13708__$1 = state_13708;
var statearr_13711_13756 = state_13708__$1;
(statearr_13711_13756[(2)] = null);

(statearr_13711_13756[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (1))){
var state_13708__$1 = state_13708;
var statearr_13712_13757 = state_13708__$1;
(statearr_13712_13757[(2)] = null);

(statearr_13712_13757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (24))){
var inst_13687 = (state_13708[(7)]);
var inst_13696 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13687);
var state_13708__$1 = state_13708;
var statearr_13713_13758 = state_13708__$1;
(statearr_13713_13758[(2)] = inst_13696);

(statearr_13713_13758[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (4))){
var inst_13639 = (state_13708[(8)]);
var inst_13639__$1 = (state_13708[(2)]);
var inst_13640 = (inst_13639__$1 == null);
var state_13708__$1 = (function (){var statearr_13714 = state_13708;
(statearr_13714[(8)] = inst_13639__$1);

return statearr_13714;
})();
if(cljs.core.truth_(inst_13640)){
var statearr_13715_13759 = state_13708__$1;
(statearr_13715_13759[(1)] = (5));

} else {
var statearr_13716_13760 = state_13708__$1;
(statearr_13716_13760[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (15))){
var inst_13681 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
var statearr_13717_13761 = state_13708__$1;
(statearr_13717_13761[(2)] = inst_13681);

(statearr_13717_13761[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (21))){
var inst_13701 = (state_13708[(2)]);
var state_13708__$1 = (function (){var statearr_13718 = state_13708;
(statearr_13718[(9)] = inst_13701);

return statearr_13718;
})();
var statearr_13719_13762 = state_13708__$1;
(statearr_13719_13762[(2)] = null);

(statearr_13719_13762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (13))){
var inst_13663 = (state_13708[(10)]);
var inst_13665 = cljs.core.chunked_seq_QMARK_(inst_13663);
var state_13708__$1 = state_13708;
if(inst_13665){
var statearr_13720_13763 = state_13708__$1;
(statearr_13720_13763[(1)] = (16));

} else {
var statearr_13721_13764 = state_13708__$1;
(statearr_13721_13764[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (22))){
var inst_13693 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
if(cljs.core.truth_(inst_13693)){
var statearr_13722_13765 = state_13708__$1;
(statearr_13722_13765[(1)] = (23));

} else {
var statearr_13723_13766 = state_13708__$1;
(statearr_13723_13766[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (6))){
var inst_13689 = (state_13708[(11)]);
var inst_13687 = (state_13708[(7)]);
var inst_13639 = (state_13708[(8)]);
var inst_13687__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13639) : topic_fn.call(null,inst_13639));
var inst_13688 = cljs.core.deref(mults);
var inst_13689__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13688,inst_13687__$1);
var state_13708__$1 = (function (){var statearr_13724 = state_13708;
(statearr_13724[(11)] = inst_13689__$1);

(statearr_13724[(7)] = inst_13687__$1);

return statearr_13724;
})();
if(cljs.core.truth_(inst_13689__$1)){
var statearr_13725_13767 = state_13708__$1;
(statearr_13725_13767[(1)] = (19));

} else {
var statearr_13726_13768 = state_13708__$1;
(statearr_13726_13768[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (25))){
var inst_13698 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
var statearr_13727_13769 = state_13708__$1;
(statearr_13727_13769[(2)] = inst_13698);

(statearr_13727_13769[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (17))){
var inst_13663 = (state_13708[(10)]);
var inst_13672 = cljs.core.first(inst_13663);
var inst_13673 = cljs.core.async.muxch_STAR_(inst_13672);
var inst_13674 = cljs.core.async.close_BANG_(inst_13673);
var inst_13675 = cljs.core.next(inst_13663);
var inst_13649 = inst_13675;
var inst_13650 = null;
var inst_13651 = (0);
var inst_13652 = (0);
var state_13708__$1 = (function (){var statearr_13728 = state_13708;
(statearr_13728[(12)] = inst_13674);

(statearr_13728[(13)] = inst_13651);

(statearr_13728[(14)] = inst_13649);

(statearr_13728[(15)] = inst_13650);

(statearr_13728[(16)] = inst_13652);

return statearr_13728;
})();
var statearr_13729_13770 = state_13708__$1;
(statearr_13729_13770[(2)] = null);

(statearr_13729_13770[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (3))){
var inst_13706 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13708__$1,inst_13706);
} else {
if((state_val_13709 === (12))){
var inst_13683 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
var statearr_13730_13771 = state_13708__$1;
(statearr_13730_13771[(2)] = inst_13683);

(statearr_13730_13771[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (2))){
var state_13708__$1 = state_13708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13708__$1,(4),ch);
} else {
if((state_val_13709 === (23))){
var state_13708__$1 = state_13708;
var statearr_13731_13772 = state_13708__$1;
(statearr_13731_13772[(2)] = null);

(statearr_13731_13772[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (19))){
var inst_13689 = (state_13708[(11)]);
var inst_13639 = (state_13708[(8)]);
var inst_13691 = cljs.core.async.muxch_STAR_(inst_13689);
var state_13708__$1 = state_13708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13708__$1,(22),inst_13691,inst_13639);
} else {
if((state_val_13709 === (11))){
var inst_13663 = (state_13708[(10)]);
var inst_13649 = (state_13708[(14)]);
var inst_13663__$1 = cljs.core.seq(inst_13649);
var state_13708__$1 = (function (){var statearr_13732 = state_13708;
(statearr_13732[(10)] = inst_13663__$1);

return statearr_13732;
})();
if(inst_13663__$1){
var statearr_13733_13773 = state_13708__$1;
(statearr_13733_13773[(1)] = (13));

} else {
var statearr_13734_13774 = state_13708__$1;
(statearr_13734_13774[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (9))){
var inst_13685 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
var statearr_13735_13775 = state_13708__$1;
(statearr_13735_13775[(2)] = inst_13685);

(statearr_13735_13775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (5))){
var inst_13646 = cljs.core.deref(mults);
var inst_13647 = cljs.core.vals(inst_13646);
var inst_13648 = cljs.core.seq(inst_13647);
var inst_13649 = inst_13648;
var inst_13650 = null;
var inst_13651 = (0);
var inst_13652 = (0);
var state_13708__$1 = (function (){var statearr_13736 = state_13708;
(statearr_13736[(13)] = inst_13651);

(statearr_13736[(14)] = inst_13649);

(statearr_13736[(15)] = inst_13650);

(statearr_13736[(16)] = inst_13652);

return statearr_13736;
})();
var statearr_13737_13776 = state_13708__$1;
(statearr_13737_13776[(2)] = null);

(statearr_13737_13776[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (14))){
var state_13708__$1 = state_13708;
var statearr_13741_13777 = state_13708__$1;
(statearr_13741_13777[(2)] = null);

(statearr_13741_13777[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (16))){
var inst_13663 = (state_13708[(10)]);
var inst_13667 = cljs.core.chunk_first(inst_13663);
var inst_13668 = cljs.core.chunk_rest(inst_13663);
var inst_13669 = cljs.core.count(inst_13667);
var inst_13649 = inst_13668;
var inst_13650 = inst_13667;
var inst_13651 = inst_13669;
var inst_13652 = (0);
var state_13708__$1 = (function (){var statearr_13742 = state_13708;
(statearr_13742[(13)] = inst_13651);

(statearr_13742[(14)] = inst_13649);

(statearr_13742[(15)] = inst_13650);

(statearr_13742[(16)] = inst_13652);

return statearr_13742;
})();
var statearr_13743_13778 = state_13708__$1;
(statearr_13743_13778[(2)] = null);

(statearr_13743_13778[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (10))){
var inst_13651 = (state_13708[(13)]);
var inst_13649 = (state_13708[(14)]);
var inst_13650 = (state_13708[(15)]);
var inst_13652 = (state_13708[(16)]);
var inst_13657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13650,inst_13652);
var inst_13658 = cljs.core.async.muxch_STAR_(inst_13657);
var inst_13659 = cljs.core.async.close_BANG_(inst_13658);
var inst_13660 = (inst_13652 + (1));
var tmp13738 = inst_13651;
var tmp13739 = inst_13649;
var tmp13740 = inst_13650;
var inst_13649__$1 = tmp13739;
var inst_13650__$1 = tmp13740;
var inst_13651__$1 = tmp13738;
var inst_13652__$1 = inst_13660;
var state_13708__$1 = (function (){var statearr_13744 = state_13708;
(statearr_13744[(17)] = inst_13659);

(statearr_13744[(13)] = inst_13651__$1);

(statearr_13744[(14)] = inst_13649__$1);

(statearr_13744[(15)] = inst_13650__$1);

(statearr_13744[(16)] = inst_13652__$1);

return statearr_13744;
})();
var statearr_13745_13779 = state_13708__$1;
(statearr_13745_13779[(2)] = null);

(statearr_13745_13779[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (18))){
var inst_13678 = (state_13708[(2)]);
var state_13708__$1 = state_13708;
var statearr_13746_13780 = state_13708__$1;
(statearr_13746_13780[(2)] = inst_13678);

(statearr_13746_13780[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13709 === (8))){
var inst_13651 = (state_13708[(13)]);
var inst_13652 = (state_13708[(16)]);
var inst_13654 = (inst_13652 < inst_13651);
var inst_13655 = inst_13654;
var state_13708__$1 = state_13708;
if(cljs.core.truth_(inst_13655)){
var statearr_13747_13781 = state_13708__$1;
(statearr_13747_13781[(1)] = (10));

} else {
var statearr_13748_13782 = state_13708__$1;
(statearr_13748_13782[(1)] = (11));

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
});})(c__12518__auto___13754,mults,ensure_mult,p))
;
return ((function (switch__12415__auto__,c__12518__auto___13754,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_13749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13749[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_13749[(1)] = (1));

return statearr_13749;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_13708){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13708);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13750){if((e13750 instanceof Object)){
var ex__12419__auto__ = e13750;
var statearr_13751_13783 = state_13708;
(statearr_13751_13783[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13708);

return cljs.core.cst$kw$recur;
} else {
throw e13750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13784 = state_13708;
state_13708 = G__13784;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_13708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_13708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___13754,mults,ensure_mult,p))
})();
var state__12520__auto__ = (function (){var statearr_13752 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13752[(6)] = c__12518__auto___13754);

return statearr_13752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___13754,mults,ensure_mult,p))
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
var G__13786 = arguments.length;
switch (G__13786) {
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
var G__13789 = arguments.length;
switch (G__13789) {
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
var G__13792 = arguments.length;
switch (G__13792) {
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
var c__12518__auto___13859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___13859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___13859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13831){
var state_val_13832 = (state_13831[(1)]);
if((state_val_13832 === (7))){
var state_13831__$1 = state_13831;
var statearr_13833_13860 = state_13831__$1;
(statearr_13833_13860[(2)] = null);

(statearr_13833_13860[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (1))){
var state_13831__$1 = state_13831;
var statearr_13834_13861 = state_13831__$1;
(statearr_13834_13861[(2)] = null);

(statearr_13834_13861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (4))){
var inst_13795 = (state_13831[(7)]);
var inst_13797 = (inst_13795 < cnt);
var state_13831__$1 = state_13831;
if(cljs.core.truth_(inst_13797)){
var statearr_13835_13862 = state_13831__$1;
(statearr_13835_13862[(1)] = (6));

} else {
var statearr_13836_13863 = state_13831__$1;
(statearr_13836_13863[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (15))){
var inst_13827 = (state_13831[(2)]);
var state_13831__$1 = state_13831;
var statearr_13837_13864 = state_13831__$1;
(statearr_13837_13864[(2)] = inst_13827);

(statearr_13837_13864[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (13))){
var inst_13820 = cljs.core.async.close_BANG_(out);
var state_13831__$1 = state_13831;
var statearr_13838_13865 = state_13831__$1;
(statearr_13838_13865[(2)] = inst_13820);

(statearr_13838_13865[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (6))){
var state_13831__$1 = state_13831;
var statearr_13839_13866 = state_13831__$1;
(statearr_13839_13866[(2)] = null);

(statearr_13839_13866[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (3))){
var inst_13829 = (state_13831[(2)]);
var state_13831__$1 = state_13831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13831__$1,inst_13829);
} else {
if((state_val_13832 === (12))){
var inst_13817 = (state_13831[(8)]);
var inst_13817__$1 = (state_13831[(2)]);
var inst_13818 = cljs.core.some(cljs.core.nil_QMARK_,inst_13817__$1);
var state_13831__$1 = (function (){var statearr_13840 = state_13831;
(statearr_13840[(8)] = inst_13817__$1);

return statearr_13840;
})();
if(cljs.core.truth_(inst_13818)){
var statearr_13841_13867 = state_13831__$1;
(statearr_13841_13867[(1)] = (13));

} else {
var statearr_13842_13868 = state_13831__$1;
(statearr_13842_13868[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (2))){
var inst_13794 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13795 = (0);
var state_13831__$1 = (function (){var statearr_13843 = state_13831;
(statearr_13843[(9)] = inst_13794);

(statearr_13843[(7)] = inst_13795);

return statearr_13843;
})();
var statearr_13844_13869 = state_13831__$1;
(statearr_13844_13869[(2)] = null);

(statearr_13844_13869[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (11))){
var inst_13795 = (state_13831[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13831,(10),Object,null,(9));
var inst_13804 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13795) : chs__$1.call(null,inst_13795));
var inst_13805 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13795) : done.call(null,inst_13795));
var inst_13806 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13804,inst_13805);
var state_13831__$1 = state_13831;
var statearr_13845_13870 = state_13831__$1;
(statearr_13845_13870[(2)] = inst_13806);


cljs.core.async.impl.ioc_helpers.process_exception(state_13831__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (9))){
var inst_13795 = (state_13831[(7)]);
var inst_13808 = (state_13831[(2)]);
var inst_13809 = (inst_13795 + (1));
var inst_13795__$1 = inst_13809;
var state_13831__$1 = (function (){var statearr_13846 = state_13831;
(statearr_13846[(7)] = inst_13795__$1);

(statearr_13846[(10)] = inst_13808);

return statearr_13846;
})();
var statearr_13847_13871 = state_13831__$1;
(statearr_13847_13871[(2)] = null);

(statearr_13847_13871[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (5))){
var inst_13815 = (state_13831[(2)]);
var state_13831__$1 = (function (){var statearr_13848 = state_13831;
(statearr_13848[(11)] = inst_13815);

return statearr_13848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13831__$1,(12),dchan);
} else {
if((state_val_13832 === (14))){
var inst_13817 = (state_13831[(8)]);
var inst_13822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13817);
var state_13831__$1 = state_13831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13831__$1,(16),out,inst_13822);
} else {
if((state_val_13832 === (16))){
var inst_13824 = (state_13831[(2)]);
var state_13831__$1 = (function (){var statearr_13849 = state_13831;
(statearr_13849[(12)] = inst_13824);

return statearr_13849;
})();
var statearr_13850_13872 = state_13831__$1;
(statearr_13850_13872[(2)] = null);

(statearr_13850_13872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (10))){
var inst_13799 = (state_13831[(2)]);
var inst_13800 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13831__$1 = (function (){var statearr_13851 = state_13831;
(statearr_13851[(13)] = inst_13799);

return statearr_13851;
})();
var statearr_13852_13873 = state_13831__$1;
(statearr_13852_13873[(2)] = inst_13800);


cljs.core.async.impl.ioc_helpers.process_exception(state_13831__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13832 === (8))){
var inst_13813 = (state_13831[(2)]);
var state_13831__$1 = state_13831;
var statearr_13853_13874 = state_13831__$1;
(statearr_13853_13874[(2)] = inst_13813);

(statearr_13853_13874[(1)] = (5));


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
});})(c__12518__auto___13859,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12415__auto__,c__12518__auto___13859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_13854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13854[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_13854[(1)] = (1));

return statearr_13854;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_13831){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13831);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13855){if((e13855 instanceof Object)){
var ex__12419__auto__ = e13855;
var statearr_13856_13875 = state_13831;
(statearr_13856_13875[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13831);

return cljs.core.cst$kw$recur;
} else {
throw e13855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13876 = state_13831;
state_13831 = G__13876;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_13831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_13831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___13859,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12520__auto__ = (function (){var statearr_13857 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13857[(6)] = c__12518__auto___13859);

return statearr_13857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___13859,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__13879 = arguments.length;
switch (G__13879) {
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
var c__12518__auto___13933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___13933,out){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___13933,out){
return (function (state_13911){
var state_val_13912 = (state_13911[(1)]);
if((state_val_13912 === (7))){
var inst_13891 = (state_13911[(7)]);
var inst_13890 = (state_13911[(8)]);
var inst_13890__$1 = (state_13911[(2)]);
var inst_13891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13890__$1,(0),null);
var inst_13892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13890__$1,(1),null);
var inst_13893 = (inst_13891__$1 == null);
var state_13911__$1 = (function (){var statearr_13913 = state_13911;
(statearr_13913[(9)] = inst_13892);

(statearr_13913[(7)] = inst_13891__$1);

(statearr_13913[(8)] = inst_13890__$1);

return statearr_13913;
})();
if(cljs.core.truth_(inst_13893)){
var statearr_13914_13934 = state_13911__$1;
(statearr_13914_13934[(1)] = (8));

} else {
var statearr_13915_13935 = state_13911__$1;
(statearr_13915_13935[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (1))){
var inst_13880 = cljs.core.vec(chs);
var inst_13881 = inst_13880;
var state_13911__$1 = (function (){var statearr_13916 = state_13911;
(statearr_13916[(10)] = inst_13881);

return statearr_13916;
})();
var statearr_13917_13936 = state_13911__$1;
(statearr_13917_13936[(2)] = null);

(statearr_13917_13936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (4))){
var inst_13881 = (state_13911[(10)]);
var state_13911__$1 = state_13911;
return cljs.core.async.ioc_alts_BANG_(state_13911__$1,(7),inst_13881);
} else {
if((state_val_13912 === (6))){
var inst_13907 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
var statearr_13918_13937 = state_13911__$1;
(statearr_13918_13937[(2)] = inst_13907);

(statearr_13918_13937[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (3))){
var inst_13909 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13911__$1,inst_13909);
} else {
if((state_val_13912 === (2))){
var inst_13881 = (state_13911[(10)]);
var inst_13883 = cljs.core.count(inst_13881);
var inst_13884 = (inst_13883 > (0));
var state_13911__$1 = state_13911;
if(cljs.core.truth_(inst_13884)){
var statearr_13920_13938 = state_13911__$1;
(statearr_13920_13938[(1)] = (4));

} else {
var statearr_13921_13939 = state_13911__$1;
(statearr_13921_13939[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (11))){
var inst_13881 = (state_13911[(10)]);
var inst_13900 = (state_13911[(2)]);
var tmp13919 = inst_13881;
var inst_13881__$1 = tmp13919;
var state_13911__$1 = (function (){var statearr_13922 = state_13911;
(statearr_13922[(10)] = inst_13881__$1);

(statearr_13922[(11)] = inst_13900);

return statearr_13922;
})();
var statearr_13923_13940 = state_13911__$1;
(statearr_13923_13940[(2)] = null);

(statearr_13923_13940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (9))){
var inst_13891 = (state_13911[(7)]);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13911__$1,(11),out,inst_13891);
} else {
if((state_val_13912 === (5))){
var inst_13905 = cljs.core.async.close_BANG_(out);
var state_13911__$1 = state_13911;
var statearr_13924_13941 = state_13911__$1;
(statearr_13924_13941[(2)] = inst_13905);

(statearr_13924_13941[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (10))){
var inst_13903 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
var statearr_13925_13942 = state_13911__$1;
(statearr_13925_13942[(2)] = inst_13903);

(statearr_13925_13942[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13912 === (8))){
var inst_13892 = (state_13911[(9)]);
var inst_13881 = (state_13911[(10)]);
var inst_13891 = (state_13911[(7)]);
var inst_13890 = (state_13911[(8)]);
var inst_13895 = (function (){var cs = inst_13881;
var vec__13886 = inst_13890;
var v = inst_13891;
var c = inst_13892;
return ((function (cs,vec__13886,v,c,inst_13892,inst_13881,inst_13891,inst_13890,state_val_13912,c__12518__auto___13933,out){
return (function (p1__13877_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13877_SHARP_);
});
;})(cs,vec__13886,v,c,inst_13892,inst_13881,inst_13891,inst_13890,state_val_13912,c__12518__auto___13933,out))
})();
var inst_13896 = cljs.core.filterv(inst_13895,inst_13881);
var inst_13881__$1 = inst_13896;
var state_13911__$1 = (function (){var statearr_13926 = state_13911;
(statearr_13926[(10)] = inst_13881__$1);

return statearr_13926;
})();
var statearr_13927_13943 = state_13911__$1;
(statearr_13927_13943[(2)] = null);

(statearr_13927_13943[(1)] = (2));


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
});})(c__12518__auto___13933,out))
;
return ((function (switch__12415__auto__,c__12518__auto___13933,out){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_13928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13928[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_13928[(1)] = (1));

return statearr_13928;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_13911){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13911);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13929){if((e13929 instanceof Object)){
var ex__12419__auto__ = e13929;
var statearr_13930_13944 = state_13911;
(statearr_13930_13944[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13911);

return cljs.core.cst$kw$recur;
} else {
throw e13929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__13945 = state_13911;
state_13911 = G__13945;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_13911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_13911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___13933,out))
})();
var state__12520__auto__ = (function (){var statearr_13931 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13931[(6)] = c__12518__auto___13933);

return statearr_13931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___13933,out))
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
var G__13947 = arguments.length;
switch (G__13947) {
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
var c__12518__auto___13992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___13992,out){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___13992,out){
return (function (state_13971){
var state_val_13972 = (state_13971[(1)]);
if((state_val_13972 === (7))){
var inst_13953 = (state_13971[(7)]);
var inst_13953__$1 = (state_13971[(2)]);
var inst_13954 = (inst_13953__$1 == null);
var inst_13955 = cljs.core.not(inst_13954);
var state_13971__$1 = (function (){var statearr_13973 = state_13971;
(statearr_13973[(7)] = inst_13953__$1);

return statearr_13973;
})();
if(inst_13955){
var statearr_13974_13993 = state_13971__$1;
(statearr_13974_13993[(1)] = (8));

} else {
var statearr_13975_13994 = state_13971__$1;
(statearr_13975_13994[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (1))){
var inst_13948 = (0);
var state_13971__$1 = (function (){var statearr_13976 = state_13971;
(statearr_13976[(8)] = inst_13948);

return statearr_13976;
})();
var statearr_13977_13995 = state_13971__$1;
(statearr_13977_13995[(2)] = null);

(statearr_13977_13995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (4))){
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13971__$1,(7),ch);
} else {
if((state_val_13972 === (6))){
var inst_13966 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13978_13996 = state_13971__$1;
(statearr_13978_13996[(2)] = inst_13966);

(statearr_13978_13996[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (3))){
var inst_13968 = (state_13971[(2)]);
var inst_13969 = cljs.core.async.close_BANG_(out);
var state_13971__$1 = (function (){var statearr_13979 = state_13971;
(statearr_13979[(9)] = inst_13968);

return statearr_13979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13971__$1,inst_13969);
} else {
if((state_val_13972 === (2))){
var inst_13948 = (state_13971[(8)]);
var inst_13950 = (inst_13948 < n);
var state_13971__$1 = state_13971;
if(cljs.core.truth_(inst_13950)){
var statearr_13980_13997 = state_13971__$1;
(statearr_13980_13997[(1)] = (4));

} else {
var statearr_13981_13998 = state_13971__$1;
(statearr_13981_13998[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (11))){
var inst_13948 = (state_13971[(8)]);
var inst_13958 = (state_13971[(2)]);
var inst_13959 = (inst_13948 + (1));
var inst_13948__$1 = inst_13959;
var state_13971__$1 = (function (){var statearr_13982 = state_13971;
(statearr_13982[(10)] = inst_13958);

(statearr_13982[(8)] = inst_13948__$1);

return statearr_13982;
})();
var statearr_13983_13999 = state_13971__$1;
(statearr_13983_13999[(2)] = null);

(statearr_13983_13999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (9))){
var state_13971__$1 = state_13971;
var statearr_13984_14000 = state_13971__$1;
(statearr_13984_14000[(2)] = null);

(statearr_13984_14000[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (5))){
var state_13971__$1 = state_13971;
var statearr_13985_14001 = state_13971__$1;
(statearr_13985_14001[(2)] = null);

(statearr_13985_14001[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (10))){
var inst_13963 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13986_14002 = state_13971__$1;
(statearr_13986_14002[(2)] = inst_13963);

(statearr_13986_14002[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (8))){
var inst_13953 = (state_13971[(7)]);
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13971__$1,(11),out,inst_13953);
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
});})(c__12518__auto___13992,out))
;
return ((function (switch__12415__auto__,c__12518__auto___13992,out){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_13987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13987[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_13987[(1)] = (1));

return statearr_13987;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_13971){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_13971);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e13988){if((e13988 instanceof Object)){
var ex__12419__auto__ = e13988;
var statearr_13989_14003 = state_13971;
(statearr_13989_14003[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13971);

return cljs.core.cst$kw$recur;
} else {
throw e13988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14004 = state_13971;
state_13971 = G__14004;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_13971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_13971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___13992,out))
})();
var state__12520__auto__ = (function (){var statearr_13990 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_13990[(6)] = c__12518__auto___13992);

return statearr_13990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___13992,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14006 = (function (f,ch,meta14007){
this.f = f;
this.ch = ch;
this.meta14007 = meta14007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14008,meta14007__$1){
var self__ = this;
var _14008__$1 = this;
return (new cljs.core.async.t_cljs$core$async14006(self__.f,self__.ch,meta14007__$1));
});

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14008){
var self__ = this;
var _14008__$1 = this;
return self__.meta14007;
});

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14009 = (function (f,ch,meta14007,_,fn1,meta14010){
this.f = f;
this.ch = ch;
this.meta14007 = meta14007;
this._ = _;
this.fn1 = fn1;
this.meta14010 = meta14010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14011,meta14010__$1){
var self__ = this;
var _14011__$1 = this;
return (new cljs.core.async.t_cljs$core$async14009(self__.f,self__.ch,self__.meta14007,self__._,self__.fn1,meta14010__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14011){
var self__ = this;
var _14011__$1 = this;
return self__.meta14010;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14005_SHARP_){
var G__14012 = (((p1__14005_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14005_SHARP_) : self__.f.call(null,p1__14005_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14012) : f1.call(null,G__14012));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14009.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14007,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async14006], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta14010], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14009";

cljs.core.async.t_cljs$core$async14009.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14009");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14009.
 */
cljs.core.async.__GT_t_cljs$core$async14009 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14009(f__$1,ch__$1,meta14007__$1,___$2,fn1__$1,meta14010){
return (new cljs.core.async.t_cljs$core$async14009(f__$1,ch__$1,meta14007__$1,___$2,fn1__$1,meta14010));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14009(self__.f,self__.ch,self__.meta14007,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14013 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14013) : self__.f.call(null,G__14013));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14007], null);
});

cljs.core.async.t_cljs$core$async14006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14006";

cljs.core.async.t_cljs$core$async14006.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14006");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14006.
 */
cljs.core.async.__GT_t_cljs$core$async14006 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14006(f__$1,ch__$1,meta14007){
return (new cljs.core.async.t_cljs$core$async14006(f__$1,ch__$1,meta14007));
});

}

return (new cljs.core.async.t_cljs$core$async14006(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14014 = (function (f,ch,meta14015){
this.f = f;
this.ch = ch;
this.meta14015 = meta14015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14016,meta14015__$1){
var self__ = this;
var _14016__$1 = this;
return (new cljs.core.async.t_cljs$core$async14014(self__.f,self__.ch,meta14015__$1));
});

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14016){
var self__ = this;
var _14016__$1 = this;
return self__.meta14015;
});

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async14014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14015], null);
});

cljs.core.async.t_cljs$core$async14014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14014";

cljs.core.async.t_cljs$core$async14014.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14014");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14014.
 */
cljs.core.async.__GT_t_cljs$core$async14014 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14014(f__$1,ch__$1,meta14015){
return (new cljs.core.async.t_cljs$core$async14014(f__$1,ch__$1,meta14015));
});

}

return (new cljs.core.async.t_cljs$core$async14014(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14017 = (function (p,ch,meta14018){
this.p = p;
this.ch = ch;
this.meta14018 = meta14018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14019,meta14018__$1){
var self__ = this;
var _14019__$1 = this;
return (new cljs.core.async.t_cljs$core$async14017(self__.p,self__.ch,meta14018__$1));
});

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14019){
var self__ = this;
var _14019__$1 = this;
return self__.meta14018;
});

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14018], null);
});

cljs.core.async.t_cljs$core$async14017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14017";

cljs.core.async.t_cljs$core$async14017.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14017");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14017.
 */
cljs.core.async.__GT_t_cljs$core$async14017 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14017(p__$1,ch__$1,meta14018){
return (new cljs.core.async.t_cljs$core$async14017(p__$1,ch__$1,meta14018));
});

}

return (new cljs.core.async.t_cljs$core$async14017(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14021 = arguments.length;
switch (G__14021) {
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
var c__12518__auto___14061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___14061,out){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___14061,out){
return (function (state_14042){
var state_val_14043 = (state_14042[(1)]);
if((state_val_14043 === (7))){
var inst_14038 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
var statearr_14044_14062 = state_14042__$1;
(statearr_14044_14062[(2)] = inst_14038);

(statearr_14044_14062[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (1))){
var state_14042__$1 = state_14042;
var statearr_14045_14063 = state_14042__$1;
(statearr_14045_14063[(2)] = null);

(statearr_14045_14063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (4))){
var inst_14024 = (state_14042[(7)]);
var inst_14024__$1 = (state_14042[(2)]);
var inst_14025 = (inst_14024__$1 == null);
var state_14042__$1 = (function (){var statearr_14046 = state_14042;
(statearr_14046[(7)] = inst_14024__$1);

return statearr_14046;
})();
if(cljs.core.truth_(inst_14025)){
var statearr_14047_14064 = state_14042__$1;
(statearr_14047_14064[(1)] = (5));

} else {
var statearr_14048_14065 = state_14042__$1;
(statearr_14048_14065[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (6))){
var inst_14024 = (state_14042[(7)]);
var inst_14029 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14024) : p.call(null,inst_14024));
var state_14042__$1 = state_14042;
if(cljs.core.truth_(inst_14029)){
var statearr_14049_14066 = state_14042__$1;
(statearr_14049_14066[(1)] = (8));

} else {
var statearr_14050_14067 = state_14042__$1;
(statearr_14050_14067[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (3))){
var inst_14040 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14042__$1,inst_14040);
} else {
if((state_val_14043 === (2))){
var state_14042__$1 = state_14042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14042__$1,(4),ch);
} else {
if((state_val_14043 === (11))){
var inst_14032 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
var statearr_14051_14068 = state_14042__$1;
(statearr_14051_14068[(2)] = inst_14032);

(statearr_14051_14068[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (9))){
var state_14042__$1 = state_14042;
var statearr_14052_14069 = state_14042__$1;
(statearr_14052_14069[(2)] = null);

(statearr_14052_14069[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (5))){
var inst_14027 = cljs.core.async.close_BANG_(out);
var state_14042__$1 = state_14042;
var statearr_14053_14070 = state_14042__$1;
(statearr_14053_14070[(2)] = inst_14027);

(statearr_14053_14070[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (10))){
var inst_14035 = (state_14042[(2)]);
var state_14042__$1 = (function (){var statearr_14054 = state_14042;
(statearr_14054[(8)] = inst_14035);

return statearr_14054;
})();
var statearr_14055_14071 = state_14042__$1;
(statearr_14055_14071[(2)] = null);

(statearr_14055_14071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14043 === (8))){
var inst_14024 = (state_14042[(7)]);
var state_14042__$1 = state_14042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14042__$1,(11),out,inst_14024);
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
});})(c__12518__auto___14061,out))
;
return ((function (switch__12415__auto__,c__12518__auto___14061,out){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_14056 = [null,null,null,null,null,null,null,null,null];
(statearr_14056[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_14056[(1)] = (1));

return statearr_14056;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_14042){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14042);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14057){if((e14057 instanceof Object)){
var ex__12419__auto__ = e14057;
var statearr_14058_14072 = state_14042;
(statearr_14058_14072[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14042);

return cljs.core.cst$kw$recur;
} else {
throw e14057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14073 = state_14042;
state_14042 = G__14073;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_14042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_14042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___14061,out))
})();
var state__12520__auto__ = (function (){var statearr_14059 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14059[(6)] = c__12518__auto___14061);

return statearr_14059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___14061,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14075 = arguments.length;
switch (G__14075) {
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
var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__){
return (function (state_14138){
var state_val_14139 = (state_14138[(1)]);
if((state_val_14139 === (7))){
var inst_14134 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
var statearr_14140_14178 = state_14138__$1;
(statearr_14140_14178[(2)] = inst_14134);

(statearr_14140_14178[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (20))){
var inst_14104 = (state_14138[(7)]);
var inst_14115 = (state_14138[(2)]);
var inst_14116 = cljs.core.next(inst_14104);
var inst_14090 = inst_14116;
var inst_14091 = null;
var inst_14092 = (0);
var inst_14093 = (0);
var state_14138__$1 = (function (){var statearr_14141 = state_14138;
(statearr_14141[(8)] = inst_14093);

(statearr_14141[(9)] = inst_14091);

(statearr_14141[(10)] = inst_14090);

(statearr_14141[(11)] = inst_14092);

(statearr_14141[(12)] = inst_14115);

return statearr_14141;
})();
var statearr_14142_14179 = state_14138__$1;
(statearr_14142_14179[(2)] = null);

(statearr_14142_14179[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (1))){
var state_14138__$1 = state_14138;
var statearr_14143_14180 = state_14138__$1;
(statearr_14143_14180[(2)] = null);

(statearr_14143_14180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (4))){
var inst_14079 = (state_14138[(13)]);
var inst_14079__$1 = (state_14138[(2)]);
var inst_14080 = (inst_14079__$1 == null);
var state_14138__$1 = (function (){var statearr_14144 = state_14138;
(statearr_14144[(13)] = inst_14079__$1);

return statearr_14144;
})();
if(cljs.core.truth_(inst_14080)){
var statearr_14145_14181 = state_14138__$1;
(statearr_14145_14181[(1)] = (5));

} else {
var statearr_14146_14182 = state_14138__$1;
(statearr_14146_14182[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (15))){
var state_14138__$1 = state_14138;
var statearr_14150_14183 = state_14138__$1;
(statearr_14150_14183[(2)] = null);

(statearr_14150_14183[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (21))){
var state_14138__$1 = state_14138;
var statearr_14151_14184 = state_14138__$1;
(statearr_14151_14184[(2)] = null);

(statearr_14151_14184[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (13))){
var inst_14093 = (state_14138[(8)]);
var inst_14091 = (state_14138[(9)]);
var inst_14090 = (state_14138[(10)]);
var inst_14092 = (state_14138[(11)]);
var inst_14100 = (state_14138[(2)]);
var inst_14101 = (inst_14093 + (1));
var tmp14147 = inst_14091;
var tmp14148 = inst_14090;
var tmp14149 = inst_14092;
var inst_14090__$1 = tmp14148;
var inst_14091__$1 = tmp14147;
var inst_14092__$1 = tmp14149;
var inst_14093__$1 = inst_14101;
var state_14138__$1 = (function (){var statearr_14152 = state_14138;
(statearr_14152[(8)] = inst_14093__$1);

(statearr_14152[(9)] = inst_14091__$1);

(statearr_14152[(10)] = inst_14090__$1);

(statearr_14152[(14)] = inst_14100);

(statearr_14152[(11)] = inst_14092__$1);

return statearr_14152;
})();
var statearr_14153_14185 = state_14138__$1;
(statearr_14153_14185[(2)] = null);

(statearr_14153_14185[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (22))){
var state_14138__$1 = state_14138;
var statearr_14154_14186 = state_14138__$1;
(statearr_14154_14186[(2)] = null);

(statearr_14154_14186[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (6))){
var inst_14079 = (state_14138[(13)]);
var inst_14088 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14079) : f.call(null,inst_14079));
var inst_14089 = cljs.core.seq(inst_14088);
var inst_14090 = inst_14089;
var inst_14091 = null;
var inst_14092 = (0);
var inst_14093 = (0);
var state_14138__$1 = (function (){var statearr_14155 = state_14138;
(statearr_14155[(8)] = inst_14093);

(statearr_14155[(9)] = inst_14091);

(statearr_14155[(10)] = inst_14090);

(statearr_14155[(11)] = inst_14092);

return statearr_14155;
})();
var statearr_14156_14187 = state_14138__$1;
(statearr_14156_14187[(2)] = null);

(statearr_14156_14187[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (17))){
var inst_14104 = (state_14138[(7)]);
var inst_14108 = cljs.core.chunk_first(inst_14104);
var inst_14109 = cljs.core.chunk_rest(inst_14104);
var inst_14110 = cljs.core.count(inst_14108);
var inst_14090 = inst_14109;
var inst_14091 = inst_14108;
var inst_14092 = inst_14110;
var inst_14093 = (0);
var state_14138__$1 = (function (){var statearr_14157 = state_14138;
(statearr_14157[(8)] = inst_14093);

(statearr_14157[(9)] = inst_14091);

(statearr_14157[(10)] = inst_14090);

(statearr_14157[(11)] = inst_14092);

return statearr_14157;
})();
var statearr_14158_14188 = state_14138__$1;
(statearr_14158_14188[(2)] = null);

(statearr_14158_14188[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (3))){
var inst_14136 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14138__$1,inst_14136);
} else {
if((state_val_14139 === (12))){
var inst_14124 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
var statearr_14159_14189 = state_14138__$1;
(statearr_14159_14189[(2)] = inst_14124);

(statearr_14159_14189[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (2))){
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14138__$1,(4),in$);
} else {
if((state_val_14139 === (23))){
var inst_14132 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
var statearr_14160_14190 = state_14138__$1;
(statearr_14160_14190[(2)] = inst_14132);

(statearr_14160_14190[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (19))){
var inst_14119 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
var statearr_14161_14191 = state_14138__$1;
(statearr_14161_14191[(2)] = inst_14119);

(statearr_14161_14191[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (11))){
var inst_14104 = (state_14138[(7)]);
var inst_14090 = (state_14138[(10)]);
var inst_14104__$1 = cljs.core.seq(inst_14090);
var state_14138__$1 = (function (){var statearr_14162 = state_14138;
(statearr_14162[(7)] = inst_14104__$1);

return statearr_14162;
})();
if(inst_14104__$1){
var statearr_14163_14192 = state_14138__$1;
(statearr_14163_14192[(1)] = (14));

} else {
var statearr_14164_14193 = state_14138__$1;
(statearr_14164_14193[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (9))){
var inst_14126 = (state_14138[(2)]);
var inst_14127 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14138__$1 = (function (){var statearr_14165 = state_14138;
(statearr_14165[(15)] = inst_14126);

return statearr_14165;
})();
if(cljs.core.truth_(inst_14127)){
var statearr_14166_14194 = state_14138__$1;
(statearr_14166_14194[(1)] = (21));

} else {
var statearr_14167_14195 = state_14138__$1;
(statearr_14167_14195[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (5))){
var inst_14082 = cljs.core.async.close_BANG_(out);
var state_14138__$1 = state_14138;
var statearr_14168_14196 = state_14138__$1;
(statearr_14168_14196[(2)] = inst_14082);

(statearr_14168_14196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (14))){
var inst_14104 = (state_14138[(7)]);
var inst_14106 = cljs.core.chunked_seq_QMARK_(inst_14104);
var state_14138__$1 = state_14138;
if(inst_14106){
var statearr_14169_14197 = state_14138__$1;
(statearr_14169_14197[(1)] = (17));

} else {
var statearr_14170_14198 = state_14138__$1;
(statearr_14170_14198[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (16))){
var inst_14122 = (state_14138[(2)]);
var state_14138__$1 = state_14138;
var statearr_14171_14199 = state_14138__$1;
(statearr_14171_14199[(2)] = inst_14122);

(statearr_14171_14199[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14139 === (10))){
var inst_14093 = (state_14138[(8)]);
var inst_14091 = (state_14138[(9)]);
var inst_14098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14091,inst_14093);
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14138__$1,(13),out,inst_14098);
} else {
if((state_val_14139 === (18))){
var inst_14104 = (state_14138[(7)]);
var inst_14113 = cljs.core.first(inst_14104);
var state_14138__$1 = state_14138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14138__$1,(20),out,inst_14113);
} else {
if((state_val_14139 === (8))){
var inst_14093 = (state_14138[(8)]);
var inst_14092 = (state_14138[(11)]);
var inst_14095 = (inst_14093 < inst_14092);
var inst_14096 = inst_14095;
var state_14138__$1 = state_14138;
if(cljs.core.truth_(inst_14096)){
var statearr_14172_14200 = state_14138__$1;
(statearr_14172_14200[(1)] = (10));

} else {
var statearr_14173_14201 = state_14138__$1;
(statearr_14173_14201[(1)] = (11));

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
});})(c__12518__auto__))
;
return ((function (switch__12415__auto__,c__12518__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12416__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12416__auto____0 = (function (){
var statearr_14174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14174[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12416__auto__);

(statearr_14174[(1)] = (1));

return statearr_14174;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12416__auto____1 = (function (state_14138){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14138);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14175){if((e14175 instanceof Object)){
var ex__12419__auto__ = e14175;
var statearr_14176_14202 = state_14138;
(statearr_14176_14202[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14138);

return cljs.core.cst$kw$recur;
} else {
throw e14175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14203 = state_14138;
state_14138 = G__14203;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12416__auto__ = function(state_14138){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12416__auto____1.call(this,state_14138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12416__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12416__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__))
})();
var state__12520__auto__ = (function (){var statearr_14177 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14177[(6)] = c__12518__auto__);

return statearr_14177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__))
);

return c__12518__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14205 = arguments.length;
switch (G__14205) {
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
var G__14208 = arguments.length;
switch (G__14208) {
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
var G__14211 = arguments.length;
switch (G__14211) {
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
var c__12518__auto___14258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___14258,out){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___14258,out){
return (function (state_14235){
var state_val_14236 = (state_14235[(1)]);
if((state_val_14236 === (7))){
var inst_14230 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14237_14259 = state_14235__$1;
(statearr_14237_14259[(2)] = inst_14230);

(statearr_14237_14259[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (1))){
var inst_14212 = null;
var state_14235__$1 = (function (){var statearr_14238 = state_14235;
(statearr_14238[(7)] = inst_14212);

return statearr_14238;
})();
var statearr_14239_14260 = state_14235__$1;
(statearr_14239_14260[(2)] = null);

(statearr_14239_14260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (4))){
var inst_14215 = (state_14235[(8)]);
var inst_14215__$1 = (state_14235[(2)]);
var inst_14216 = (inst_14215__$1 == null);
var inst_14217 = cljs.core.not(inst_14216);
var state_14235__$1 = (function (){var statearr_14240 = state_14235;
(statearr_14240[(8)] = inst_14215__$1);

return statearr_14240;
})();
if(inst_14217){
var statearr_14241_14261 = state_14235__$1;
(statearr_14241_14261[(1)] = (5));

} else {
var statearr_14242_14262 = state_14235__$1;
(statearr_14242_14262[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (6))){
var state_14235__$1 = state_14235;
var statearr_14243_14263 = state_14235__$1;
(statearr_14243_14263[(2)] = null);

(statearr_14243_14263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (3))){
var inst_14232 = (state_14235[(2)]);
var inst_14233 = cljs.core.async.close_BANG_(out);
var state_14235__$1 = (function (){var statearr_14244 = state_14235;
(statearr_14244[(9)] = inst_14232);

return statearr_14244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14235__$1,inst_14233);
} else {
if((state_val_14236 === (2))){
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14235__$1,(4),ch);
} else {
if((state_val_14236 === (11))){
var inst_14215 = (state_14235[(8)]);
var inst_14224 = (state_14235[(2)]);
var inst_14212 = inst_14215;
var state_14235__$1 = (function (){var statearr_14245 = state_14235;
(statearr_14245[(10)] = inst_14224);

(statearr_14245[(7)] = inst_14212);

return statearr_14245;
})();
var statearr_14246_14264 = state_14235__$1;
(statearr_14246_14264[(2)] = null);

(statearr_14246_14264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (9))){
var inst_14215 = (state_14235[(8)]);
var state_14235__$1 = state_14235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14235__$1,(11),out,inst_14215);
} else {
if((state_val_14236 === (5))){
var inst_14215 = (state_14235[(8)]);
var inst_14212 = (state_14235[(7)]);
var inst_14219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14215,inst_14212);
var state_14235__$1 = state_14235;
if(inst_14219){
var statearr_14248_14265 = state_14235__$1;
(statearr_14248_14265[(1)] = (8));

} else {
var statearr_14249_14266 = state_14235__$1;
(statearr_14249_14266[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (10))){
var inst_14227 = (state_14235[(2)]);
var state_14235__$1 = state_14235;
var statearr_14250_14267 = state_14235__$1;
(statearr_14250_14267[(2)] = inst_14227);

(statearr_14250_14267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14236 === (8))){
var inst_14212 = (state_14235[(7)]);
var tmp14247 = inst_14212;
var inst_14212__$1 = tmp14247;
var state_14235__$1 = (function (){var statearr_14251 = state_14235;
(statearr_14251[(7)] = inst_14212__$1);

return statearr_14251;
})();
var statearr_14252_14268 = state_14235__$1;
(statearr_14252_14268[(2)] = null);

(statearr_14252_14268[(1)] = (2));


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
});})(c__12518__auto___14258,out))
;
return ((function (switch__12415__auto__,c__12518__auto___14258,out){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_14253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14253[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_14253[(1)] = (1));

return statearr_14253;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_14235){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14235);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14254){if((e14254 instanceof Object)){
var ex__12419__auto__ = e14254;
var statearr_14255_14269 = state_14235;
(statearr_14255_14269[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14235);

return cljs.core.cst$kw$recur;
} else {
throw e14254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14270 = state_14235;
state_14235 = G__14270;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_14235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_14235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___14258,out))
})();
var state__12520__auto__ = (function (){var statearr_14256 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14256[(6)] = c__12518__auto___14258);

return statearr_14256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___14258,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14272 = arguments.length;
switch (G__14272) {
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
var c__12518__auto___14338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___14338,out){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___14338,out){
return (function (state_14310){
var state_val_14311 = (state_14310[(1)]);
if((state_val_14311 === (7))){
var inst_14306 = (state_14310[(2)]);
var state_14310__$1 = state_14310;
var statearr_14312_14339 = state_14310__$1;
(statearr_14312_14339[(2)] = inst_14306);

(statearr_14312_14339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (1))){
var inst_14273 = (new Array(n));
var inst_14274 = inst_14273;
var inst_14275 = (0);
var state_14310__$1 = (function (){var statearr_14313 = state_14310;
(statearr_14313[(7)] = inst_14275);

(statearr_14313[(8)] = inst_14274);

return statearr_14313;
})();
var statearr_14314_14340 = state_14310__$1;
(statearr_14314_14340[(2)] = null);

(statearr_14314_14340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (4))){
var inst_14278 = (state_14310[(9)]);
var inst_14278__$1 = (state_14310[(2)]);
var inst_14279 = (inst_14278__$1 == null);
var inst_14280 = cljs.core.not(inst_14279);
var state_14310__$1 = (function (){var statearr_14315 = state_14310;
(statearr_14315[(9)] = inst_14278__$1);

return statearr_14315;
})();
if(inst_14280){
var statearr_14316_14341 = state_14310__$1;
(statearr_14316_14341[(1)] = (5));

} else {
var statearr_14317_14342 = state_14310__$1;
(statearr_14317_14342[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (15))){
var inst_14300 = (state_14310[(2)]);
var state_14310__$1 = state_14310;
var statearr_14318_14343 = state_14310__$1;
(statearr_14318_14343[(2)] = inst_14300);

(statearr_14318_14343[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (13))){
var state_14310__$1 = state_14310;
var statearr_14319_14344 = state_14310__$1;
(statearr_14319_14344[(2)] = null);

(statearr_14319_14344[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (6))){
var inst_14275 = (state_14310[(7)]);
var inst_14296 = (inst_14275 > (0));
var state_14310__$1 = state_14310;
if(cljs.core.truth_(inst_14296)){
var statearr_14320_14345 = state_14310__$1;
(statearr_14320_14345[(1)] = (12));

} else {
var statearr_14321_14346 = state_14310__$1;
(statearr_14321_14346[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (3))){
var inst_14308 = (state_14310[(2)]);
var state_14310__$1 = state_14310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14310__$1,inst_14308);
} else {
if((state_val_14311 === (12))){
var inst_14274 = (state_14310[(8)]);
var inst_14298 = cljs.core.vec(inst_14274);
var state_14310__$1 = state_14310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14310__$1,(15),out,inst_14298);
} else {
if((state_val_14311 === (2))){
var state_14310__$1 = state_14310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14310__$1,(4),ch);
} else {
if((state_val_14311 === (11))){
var inst_14290 = (state_14310[(2)]);
var inst_14291 = (new Array(n));
var inst_14274 = inst_14291;
var inst_14275 = (0);
var state_14310__$1 = (function (){var statearr_14322 = state_14310;
(statearr_14322[(7)] = inst_14275);

(statearr_14322[(10)] = inst_14290);

(statearr_14322[(8)] = inst_14274);

return statearr_14322;
})();
var statearr_14323_14347 = state_14310__$1;
(statearr_14323_14347[(2)] = null);

(statearr_14323_14347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (9))){
var inst_14274 = (state_14310[(8)]);
var inst_14288 = cljs.core.vec(inst_14274);
var state_14310__$1 = state_14310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14310__$1,(11),out,inst_14288);
} else {
if((state_val_14311 === (5))){
var inst_14275 = (state_14310[(7)]);
var inst_14278 = (state_14310[(9)]);
var inst_14283 = (state_14310[(11)]);
var inst_14274 = (state_14310[(8)]);
var inst_14282 = (inst_14274[inst_14275] = inst_14278);
var inst_14283__$1 = (inst_14275 + (1));
var inst_14284 = (inst_14283__$1 < n);
var state_14310__$1 = (function (){var statearr_14324 = state_14310;
(statearr_14324[(12)] = inst_14282);

(statearr_14324[(11)] = inst_14283__$1);

return statearr_14324;
})();
if(cljs.core.truth_(inst_14284)){
var statearr_14325_14348 = state_14310__$1;
(statearr_14325_14348[(1)] = (8));

} else {
var statearr_14326_14349 = state_14310__$1;
(statearr_14326_14349[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (14))){
var inst_14303 = (state_14310[(2)]);
var inst_14304 = cljs.core.async.close_BANG_(out);
var state_14310__$1 = (function (){var statearr_14328 = state_14310;
(statearr_14328[(13)] = inst_14303);

return statearr_14328;
})();
var statearr_14329_14350 = state_14310__$1;
(statearr_14329_14350[(2)] = inst_14304);

(statearr_14329_14350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (10))){
var inst_14294 = (state_14310[(2)]);
var state_14310__$1 = state_14310;
var statearr_14330_14351 = state_14310__$1;
(statearr_14330_14351[(2)] = inst_14294);

(statearr_14330_14351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14311 === (8))){
var inst_14283 = (state_14310[(11)]);
var inst_14274 = (state_14310[(8)]);
var tmp14327 = inst_14274;
var inst_14274__$1 = tmp14327;
var inst_14275 = inst_14283;
var state_14310__$1 = (function (){var statearr_14331 = state_14310;
(statearr_14331[(7)] = inst_14275);

(statearr_14331[(8)] = inst_14274__$1);

return statearr_14331;
})();
var statearr_14332_14352 = state_14310__$1;
(statearr_14332_14352[(2)] = null);

(statearr_14332_14352[(1)] = (2));


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
});})(c__12518__auto___14338,out))
;
return ((function (switch__12415__auto__,c__12518__auto___14338,out){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_14333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14333[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_14333[(1)] = (1));

return statearr_14333;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_14310){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14310);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14334){if((e14334 instanceof Object)){
var ex__12419__auto__ = e14334;
var statearr_14335_14353 = state_14310;
(statearr_14335_14353[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14310);

return cljs.core.cst$kw$recur;
} else {
throw e14334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14354 = state_14310;
state_14310 = G__14354;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_14310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_14310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___14338,out))
})();
var state__12520__auto__ = (function (){var statearr_14336 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14336[(6)] = c__12518__auto___14338);

return statearr_14336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___14338,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14356 = arguments.length;
switch (G__14356) {
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
var c__12518__auto___14426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___14426,out){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___14426,out){
return (function (state_14398){
var state_val_14399 = (state_14398[(1)]);
if((state_val_14399 === (7))){
var inst_14394 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14400_14427 = state_14398__$1;
(statearr_14400_14427[(2)] = inst_14394);

(statearr_14400_14427[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (1))){
var inst_14357 = [];
var inst_14358 = inst_14357;
var inst_14359 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_14398__$1 = (function (){var statearr_14401 = state_14398;
(statearr_14401[(7)] = inst_14359);

(statearr_14401[(8)] = inst_14358);

return statearr_14401;
})();
var statearr_14402_14428 = state_14398__$1;
(statearr_14402_14428[(2)] = null);

(statearr_14402_14428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (4))){
var inst_14362 = (state_14398[(9)]);
var inst_14362__$1 = (state_14398[(2)]);
var inst_14363 = (inst_14362__$1 == null);
var inst_14364 = cljs.core.not(inst_14363);
var state_14398__$1 = (function (){var statearr_14403 = state_14398;
(statearr_14403[(9)] = inst_14362__$1);

return statearr_14403;
})();
if(inst_14364){
var statearr_14404_14429 = state_14398__$1;
(statearr_14404_14429[(1)] = (5));

} else {
var statearr_14405_14430 = state_14398__$1;
(statearr_14405_14430[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (15))){
var inst_14388 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14406_14431 = state_14398__$1;
(statearr_14406_14431[(2)] = inst_14388);

(statearr_14406_14431[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (13))){
var state_14398__$1 = state_14398;
var statearr_14407_14432 = state_14398__$1;
(statearr_14407_14432[(2)] = null);

(statearr_14407_14432[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (6))){
var inst_14358 = (state_14398[(8)]);
var inst_14383 = inst_14358.length;
var inst_14384 = (inst_14383 > (0));
var state_14398__$1 = state_14398;
if(cljs.core.truth_(inst_14384)){
var statearr_14408_14433 = state_14398__$1;
(statearr_14408_14433[(1)] = (12));

} else {
var statearr_14409_14434 = state_14398__$1;
(statearr_14409_14434[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (3))){
var inst_14396 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14398__$1,inst_14396);
} else {
if((state_val_14399 === (12))){
var inst_14358 = (state_14398[(8)]);
var inst_14386 = cljs.core.vec(inst_14358);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14398__$1,(15),out,inst_14386);
} else {
if((state_val_14399 === (2))){
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14398__$1,(4),ch);
} else {
if((state_val_14399 === (11))){
var inst_14366 = (state_14398[(10)]);
var inst_14362 = (state_14398[(9)]);
var inst_14376 = (state_14398[(2)]);
var inst_14377 = [];
var inst_14378 = inst_14377.push(inst_14362);
var inst_14358 = inst_14377;
var inst_14359 = inst_14366;
var state_14398__$1 = (function (){var statearr_14410 = state_14398;
(statearr_14410[(7)] = inst_14359);

(statearr_14410[(11)] = inst_14376);

(statearr_14410[(12)] = inst_14378);

(statearr_14410[(8)] = inst_14358);

return statearr_14410;
})();
var statearr_14411_14435 = state_14398__$1;
(statearr_14411_14435[(2)] = null);

(statearr_14411_14435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (9))){
var inst_14358 = (state_14398[(8)]);
var inst_14374 = cljs.core.vec(inst_14358);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14398__$1,(11),out,inst_14374);
} else {
if((state_val_14399 === (5))){
var inst_14359 = (state_14398[(7)]);
var inst_14366 = (state_14398[(10)]);
var inst_14362 = (state_14398[(9)]);
var inst_14366__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14362) : f.call(null,inst_14362));
var inst_14367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14366__$1,inst_14359);
var inst_14368 = cljs.core.keyword_identical_QMARK_(inst_14359,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_14369 = ((inst_14367) || (inst_14368));
var state_14398__$1 = (function (){var statearr_14412 = state_14398;
(statearr_14412[(10)] = inst_14366__$1);

return statearr_14412;
})();
if(cljs.core.truth_(inst_14369)){
var statearr_14413_14436 = state_14398__$1;
(statearr_14413_14436[(1)] = (8));

} else {
var statearr_14414_14437 = state_14398__$1;
(statearr_14414_14437[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (14))){
var inst_14391 = (state_14398[(2)]);
var inst_14392 = cljs.core.async.close_BANG_(out);
var state_14398__$1 = (function (){var statearr_14416 = state_14398;
(statearr_14416[(13)] = inst_14391);

return statearr_14416;
})();
var statearr_14417_14438 = state_14398__$1;
(statearr_14417_14438[(2)] = inst_14392);

(statearr_14417_14438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (10))){
var inst_14381 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14418_14439 = state_14398__$1;
(statearr_14418_14439[(2)] = inst_14381);

(statearr_14418_14439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14399 === (8))){
var inst_14366 = (state_14398[(10)]);
var inst_14358 = (state_14398[(8)]);
var inst_14362 = (state_14398[(9)]);
var inst_14371 = inst_14358.push(inst_14362);
var tmp14415 = inst_14358;
var inst_14358__$1 = tmp14415;
var inst_14359 = inst_14366;
var state_14398__$1 = (function (){var statearr_14419 = state_14398;
(statearr_14419[(14)] = inst_14371);

(statearr_14419[(7)] = inst_14359);

(statearr_14419[(8)] = inst_14358__$1);

return statearr_14419;
})();
var statearr_14420_14440 = state_14398__$1;
(statearr_14420_14440[(2)] = null);

(statearr_14420_14440[(1)] = (2));


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
});})(c__12518__auto___14426,out))
;
return ((function (switch__12415__auto__,c__12518__auto___14426,out){
return (function() {
var cljs$core$async$state_machine__12416__auto__ = null;
var cljs$core$async$state_machine__12416__auto____0 = (function (){
var statearr_14421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14421[(0)] = cljs$core$async$state_machine__12416__auto__);

(statearr_14421[(1)] = (1));

return statearr_14421;
});
var cljs$core$async$state_machine__12416__auto____1 = (function (state_14398){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14398);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14422){if((e14422 instanceof Object)){
var ex__12419__auto__ = e14422;
var statearr_14423_14441 = state_14398;
(statearr_14423_14441[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14398);

return cljs.core.cst$kw$recur;
} else {
throw e14422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14442 = state_14398;
state_14398 = G__14442;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
cljs$core$async$state_machine__12416__auto__ = function(state_14398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12416__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12416__auto____1.call(this,state_14398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12416__auto____0;
cljs$core$async$state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12416__auto____1;
return cljs$core$async$state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___14426,out))
})();
var state__12520__auto__ = (function (){var statearr_14424 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14424[(6)] = c__12518__auto___14426);

return statearr_14424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___14426,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

