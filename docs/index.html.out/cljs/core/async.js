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
var G__7021 = arguments.length;
switch (G__7021) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7022 = (function (f,blockable,meta7023){
this.f = f;
this.blockable = blockable;
this.meta7023 = meta7023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7024,meta7023__$1){
var self__ = this;
var _7024__$1 = this;
return (new cljs.core.async.t_cljs$core$async7022(self__.f,self__.blockable,meta7023__$1));
});

cljs.core.async.t_cljs$core$async7022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7024){
var self__ = this;
var _7024__$1 = this;
return self__.meta7023;
});

cljs.core.async.t_cljs$core$async7022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7023], null);
});

cljs.core.async.t_cljs$core$async7022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7022";

cljs.core.async.t_cljs$core$async7022.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7022");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7022.
 */
cljs.core.async.__GT_t_cljs$core$async7022 = (function cljs$core$async$__GT_t_cljs$core$async7022(f__$1,blockable__$1,meta7023){
return (new cljs.core.async.t_cljs$core$async7022(f__$1,blockable__$1,meta7023));
});

}

return (new cljs.core.async.t_cljs$core$async7022(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__7028 = arguments.length;
switch (G__7028) {
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
var G__7031 = arguments.length;
switch (G__7031) {
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
var G__7034 = arguments.length;
switch (G__7034) {
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
var val_7036 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7036) : fn1.call(null,val_7036));
} else {
cljs.core.async.impl.dispatch.run(((function (val_7036,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7036) : fn1.call(null,val_7036));
});})(val_7036,ret))
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
var G__7038 = arguments.length;
switch (G__7038) {
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
var n__4408__auto___7040 = n;
var x_7041 = (0);
while(true){
if((x_7041 < n__4408__auto___7040)){
(a[x_7041] = (0));

var G__7042 = (x_7041 + (1));
x_7041 = G__7042;
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

var G__7043 = (i + (1));
i = G__7043;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7044 = (function (flag,meta7045){
this.flag = flag;
this.meta7045 = meta7045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7046,meta7045__$1){
var self__ = this;
var _7046__$1 = this;
return (new cljs.core.async.t_cljs$core$async7044(self__.flag,meta7045__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7046){
var self__ = this;
var _7046__$1 = this;
return self__.meta7045;
});})(flag))
;

cljs.core.async.t_cljs$core$async7044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7044.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7045], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7044";

cljs.core.async.t_cljs$core$async7044.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7044");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7044.
 */
cljs.core.async.__GT_t_cljs$core$async7044 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7044(flag__$1,meta7045){
return (new cljs.core.async.t_cljs$core$async7044(flag__$1,meta7045));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7044(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7047 = (function (flag,cb,meta7048){
this.flag = flag;
this.cb = cb;
this.meta7048 = meta7048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7049,meta7048__$1){
var self__ = this;
var _7049__$1 = this;
return (new cljs.core.async.t_cljs$core$async7047(self__.flag,self__.cb,meta7048__$1));
});

cljs.core.async.t_cljs$core$async7047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7049){
var self__ = this;
var _7049__$1 = this;
return self__.meta7048;
});

cljs.core.async.t_cljs$core$async7047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async7047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7048], null);
});

cljs.core.async.t_cljs$core$async7047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7047";

cljs.core.async.t_cljs$core$async7047.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7047");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7047.
 */
cljs.core.async.__GT_t_cljs$core$async7047 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7047(flag__$1,cb__$1,meta7048){
return (new cljs.core.async.t_cljs$core$async7047(flag__$1,cb__$1,meta7048));
});

}

return (new cljs.core.async.t_cljs$core$async7047(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7050_SHARP_){
var G__7052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7050_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7052) : fret.call(null,G__7052));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7051_SHARP_){
var G__7053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7051_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7053) : fret.call(null,G__7053));
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
var G__7054 = (i + (1));
i = G__7054;
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
var len__4531__auto___7060 = arguments.length;
var i__4532__auto___7061 = (0);
while(true){
if((i__4532__auto___7061 < len__4531__auto___7060)){
args__4534__auto__.push((arguments[i__4532__auto___7061]));

var G__7062 = (i__4532__auto___7061 + (1));
i__4532__auto___7061 = G__7062;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7057){
var map__7058 = p__7057;
var map__7058__$1 = ((((!((map__7058 == null)))?(((((map__7058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7058):map__7058);
var opts = map__7058__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7055){
var G__7056 = cljs.core.first(seq7055);
var seq7055__$1 = cljs.core.next(seq7055);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7056,seq7055__$1);
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
var G__7064 = arguments.length;
switch (G__7064) {
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
var c__6961__auto___7110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___7110){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___7110){
return (function (state_7088){
var state_val_7089 = (state_7088[(1)]);
if((state_val_7089 === (7))){
var inst_7084 = (state_7088[(2)]);
var state_7088__$1 = state_7088;
var statearr_7090_7111 = state_7088__$1;
(statearr_7090_7111[(2)] = inst_7084);

(statearr_7090_7111[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (1))){
var state_7088__$1 = state_7088;
var statearr_7091_7112 = state_7088__$1;
(statearr_7091_7112[(2)] = null);

(statearr_7091_7112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (4))){
var inst_7067 = (state_7088[(7)]);
var inst_7067__$1 = (state_7088[(2)]);
var inst_7068 = (inst_7067__$1 == null);
var state_7088__$1 = (function (){var statearr_7092 = state_7088;
(statearr_7092[(7)] = inst_7067__$1);

return statearr_7092;
})();
if(cljs.core.truth_(inst_7068)){
var statearr_7093_7113 = state_7088__$1;
(statearr_7093_7113[(1)] = (5));

} else {
var statearr_7094_7114 = state_7088__$1;
(statearr_7094_7114[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (13))){
var state_7088__$1 = state_7088;
var statearr_7095_7115 = state_7088__$1;
(statearr_7095_7115[(2)] = null);

(statearr_7095_7115[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (6))){
var inst_7067 = (state_7088[(7)]);
var state_7088__$1 = state_7088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7088__$1,(11),to,inst_7067);
} else {
if((state_val_7089 === (3))){
var inst_7086 = (state_7088[(2)]);
var state_7088__$1 = state_7088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7088__$1,inst_7086);
} else {
if((state_val_7089 === (12))){
var state_7088__$1 = state_7088;
var statearr_7096_7116 = state_7088__$1;
(statearr_7096_7116[(2)] = null);

(statearr_7096_7116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (2))){
var state_7088__$1 = state_7088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7088__$1,(4),from);
} else {
if((state_val_7089 === (11))){
var inst_7077 = (state_7088[(2)]);
var state_7088__$1 = state_7088;
if(cljs.core.truth_(inst_7077)){
var statearr_7097_7117 = state_7088__$1;
(statearr_7097_7117[(1)] = (12));

} else {
var statearr_7098_7118 = state_7088__$1;
(statearr_7098_7118[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (9))){
var state_7088__$1 = state_7088;
var statearr_7099_7119 = state_7088__$1;
(statearr_7099_7119[(2)] = null);

(statearr_7099_7119[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (5))){
var state_7088__$1 = state_7088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7100_7120 = state_7088__$1;
(statearr_7100_7120[(1)] = (8));

} else {
var statearr_7101_7121 = state_7088__$1;
(statearr_7101_7121[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (14))){
var inst_7082 = (state_7088[(2)]);
var state_7088__$1 = state_7088;
var statearr_7102_7122 = state_7088__$1;
(statearr_7102_7122[(2)] = inst_7082);

(statearr_7102_7122[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (10))){
var inst_7074 = (state_7088[(2)]);
var state_7088__$1 = state_7088;
var statearr_7103_7123 = state_7088__$1;
(statearr_7103_7123[(2)] = inst_7074);

(statearr_7103_7123[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7089 === (8))){
var inst_7071 = cljs.core.async.close_BANG_(to);
var state_7088__$1 = state_7088;
var statearr_7104_7124 = state_7088__$1;
(statearr_7104_7124[(2)] = inst_7071);

(statearr_7104_7124[(1)] = (10));


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
});})(c__6961__auto___7110))
;
return ((function (switch__6858__auto__,c__6961__auto___7110){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_7105 = [null,null,null,null,null,null,null,null];
(statearr_7105[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_7105[(1)] = (1));

return statearr_7105;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_7088){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7088);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7106){if((e7106 instanceof Object)){
var ex__6862__auto__ = e7106;
var statearr_7107_7125 = state_7088;
(statearr_7107_7125[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7088);

return cljs.core.cst$kw$recur;
} else {
throw e7106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7126 = state_7088;
state_7088 = G__7126;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_7088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_7088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___7110))
})();
var state__6963__auto__ = (function (){var statearr_7108 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7108[(6)] = c__6961__auto___7110);

return statearr_7108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___7110))
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
return (function (p__7127){
var vec__7128 = p__7127;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7128,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7128,(1),null);
var job = vec__7128;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__6961__auto___7299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___7299,res,vec__7128,v,p,job,jobs,results){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___7299,res,vec__7128,v,p,job,jobs,results){
return (function (state_7135){
var state_val_7136 = (state_7135[(1)]);
if((state_val_7136 === (1))){
var state_7135__$1 = state_7135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7135__$1,(2),res,v);
} else {
if((state_val_7136 === (2))){
var inst_7132 = (state_7135[(2)]);
var inst_7133 = cljs.core.async.close_BANG_(res);
var state_7135__$1 = (function (){var statearr_7137 = state_7135;
(statearr_7137[(7)] = inst_7132);

return statearr_7137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7135__$1,inst_7133);
} else {
return null;
}
}
});})(c__6961__auto___7299,res,vec__7128,v,p,job,jobs,results))
;
return ((function (switch__6858__auto__,c__6961__auto___7299,res,vec__7128,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0 = (function (){
var statearr_7138 = [null,null,null,null,null,null,null,null];
(statearr_7138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__);

(statearr_7138[(1)] = (1));

return statearr_7138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1 = (function (state_7135){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7135);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7139){if((e7139 instanceof Object)){
var ex__6862__auto__ = e7139;
var statearr_7140_7300 = state_7135;
(statearr_7140_7300[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7135);

return cljs.core.cst$kw$recur;
} else {
throw e7139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7301 = state_7135;
state_7135 = G__7301;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = function(state_7135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1.call(this,state_7135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___7299,res,vec__7128,v,p,job,jobs,results))
})();
var state__6963__auto__ = (function (){var statearr_7141 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7141[(6)] = c__6961__auto___7299);

return statearr_7141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___7299,res,vec__7128,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7142){
var vec__7143 = p__7142;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7143,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7143,(1),null);
var job = vec__7143;
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
var n__4408__auto___7302 = n;
var __7303 = (0);
while(true){
if((__7303 < n__4408__auto___7302)){
var G__7146_7304 = type;
var G__7146_7305__$1 = (((G__7146_7304 instanceof cljs.core.Keyword))?G__7146_7304.fqn:null);
switch (G__7146_7305__$1) {
case "compute":
var c__6961__auto___7307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7303,c__6961__auto___7307,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (__7303,c__6961__auto___7307,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async){
return (function (state_7159){
var state_val_7160 = (state_7159[(1)]);
if((state_val_7160 === (1))){
var state_7159__$1 = state_7159;
var statearr_7161_7308 = state_7159__$1;
(statearr_7161_7308[(2)] = null);

(statearr_7161_7308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7160 === (2))){
var state_7159__$1 = state_7159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7159__$1,(4),jobs);
} else {
if((state_val_7160 === (3))){
var inst_7157 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7159__$1,inst_7157);
} else {
if((state_val_7160 === (4))){
var inst_7149 = (state_7159[(2)]);
var inst_7150 = process(inst_7149);
var state_7159__$1 = state_7159;
if(cljs.core.truth_(inst_7150)){
var statearr_7162_7309 = state_7159__$1;
(statearr_7162_7309[(1)] = (5));

} else {
var statearr_7163_7310 = state_7159__$1;
(statearr_7163_7310[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7160 === (5))){
var state_7159__$1 = state_7159;
var statearr_7164_7311 = state_7159__$1;
(statearr_7164_7311[(2)] = null);

(statearr_7164_7311[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7160 === (6))){
var state_7159__$1 = state_7159;
var statearr_7165_7312 = state_7159__$1;
(statearr_7165_7312[(2)] = null);

(statearr_7165_7312[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7160 === (7))){
var inst_7155 = (state_7159[(2)]);
var state_7159__$1 = state_7159;
var statearr_7166_7313 = state_7159__$1;
(statearr_7166_7313[(2)] = inst_7155);

(statearr_7166_7313[(1)] = (3));


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
});})(__7303,c__6961__auto___7307,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async))
;
return ((function (__7303,switch__6858__auto__,c__6961__auto___7307,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0 = (function (){
var statearr_7167 = [null,null,null,null,null,null,null];
(statearr_7167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__);

(statearr_7167[(1)] = (1));

return statearr_7167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1 = (function (state_7159){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7159);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7168){if((e7168 instanceof Object)){
var ex__6862__auto__ = e7168;
var statearr_7169_7314 = state_7159;
(statearr_7169_7314[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7159);

return cljs.core.cst$kw$recur;
} else {
throw e7168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7315 = state_7159;
state_7159 = G__7315;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = function(state_7159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1.call(this,state_7159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__;
})()
;})(__7303,switch__6858__auto__,c__6961__auto___7307,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async))
})();
var state__6963__auto__ = (function (){var statearr_7170 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7170[(6)] = c__6961__auto___7307);

return statearr_7170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(__7303,c__6961__auto___7307,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async))
);


break;
case "async":
var c__6961__auto___7316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7303,c__6961__auto___7316,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (__7303,c__6961__auto___7316,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async){
return (function (state_7183){
var state_val_7184 = (state_7183[(1)]);
if((state_val_7184 === (1))){
var state_7183__$1 = state_7183;
var statearr_7185_7317 = state_7183__$1;
(statearr_7185_7317[(2)] = null);

(statearr_7185_7317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7184 === (2))){
var state_7183__$1 = state_7183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7183__$1,(4),jobs);
} else {
if((state_val_7184 === (3))){
var inst_7181 = (state_7183[(2)]);
var state_7183__$1 = state_7183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7183__$1,inst_7181);
} else {
if((state_val_7184 === (4))){
var inst_7173 = (state_7183[(2)]);
var inst_7174 = async(inst_7173);
var state_7183__$1 = state_7183;
if(cljs.core.truth_(inst_7174)){
var statearr_7186_7318 = state_7183__$1;
(statearr_7186_7318[(1)] = (5));

} else {
var statearr_7187_7319 = state_7183__$1;
(statearr_7187_7319[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7184 === (5))){
var state_7183__$1 = state_7183;
var statearr_7188_7320 = state_7183__$1;
(statearr_7188_7320[(2)] = null);

(statearr_7188_7320[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7184 === (6))){
var state_7183__$1 = state_7183;
var statearr_7189_7321 = state_7183__$1;
(statearr_7189_7321[(2)] = null);

(statearr_7189_7321[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7184 === (7))){
var inst_7179 = (state_7183[(2)]);
var state_7183__$1 = state_7183;
var statearr_7190_7322 = state_7183__$1;
(statearr_7190_7322[(2)] = inst_7179);

(statearr_7190_7322[(1)] = (3));


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
});})(__7303,c__6961__auto___7316,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async))
;
return ((function (__7303,switch__6858__auto__,c__6961__auto___7316,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0 = (function (){
var statearr_7191 = [null,null,null,null,null,null,null];
(statearr_7191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__);

(statearr_7191[(1)] = (1));

return statearr_7191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1 = (function (state_7183){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7183);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7192){if((e7192 instanceof Object)){
var ex__6862__auto__ = e7192;
var statearr_7193_7323 = state_7183;
(statearr_7193_7323[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7183);

return cljs.core.cst$kw$recur;
} else {
throw e7192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7324 = state_7183;
state_7183 = G__7324;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = function(state_7183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1.call(this,state_7183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__;
})()
;})(__7303,switch__6858__auto__,c__6961__auto___7316,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async))
})();
var state__6963__auto__ = (function (){var statearr_7194 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7194[(6)] = c__6961__auto___7316);

return statearr_7194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(__7303,c__6961__auto___7316,G__7146_7304,G__7146_7305__$1,n__4408__auto___7302,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7146_7305__$1)].join('')));

}

var G__7325 = (__7303 + (1));
__7303 = G__7325;
continue;
} else {
}
break;
}

var c__6961__auto___7326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___7326,jobs,results,process,async){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___7326,jobs,results,process,async){
return (function (state_7216){
var state_val_7217 = (state_7216[(1)]);
if((state_val_7217 === (1))){
var state_7216__$1 = state_7216;
var statearr_7218_7327 = state_7216__$1;
(statearr_7218_7327[(2)] = null);

(statearr_7218_7327[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7217 === (2))){
var state_7216__$1 = state_7216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7216__$1,(4),from);
} else {
if((state_val_7217 === (3))){
var inst_7214 = (state_7216[(2)]);
var state_7216__$1 = state_7216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7216__$1,inst_7214);
} else {
if((state_val_7217 === (4))){
var inst_7197 = (state_7216[(7)]);
var inst_7197__$1 = (state_7216[(2)]);
var inst_7198 = (inst_7197__$1 == null);
var state_7216__$1 = (function (){var statearr_7219 = state_7216;
(statearr_7219[(7)] = inst_7197__$1);

return statearr_7219;
})();
if(cljs.core.truth_(inst_7198)){
var statearr_7220_7328 = state_7216__$1;
(statearr_7220_7328[(1)] = (5));

} else {
var statearr_7221_7329 = state_7216__$1;
(statearr_7221_7329[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7217 === (5))){
var inst_7200 = cljs.core.async.close_BANG_(jobs);
var state_7216__$1 = state_7216;
var statearr_7222_7330 = state_7216__$1;
(statearr_7222_7330[(2)] = inst_7200);

(statearr_7222_7330[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7217 === (6))){
var inst_7202 = (state_7216[(8)]);
var inst_7197 = (state_7216[(7)]);
var inst_7202__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_7203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7204 = [inst_7197,inst_7202__$1];
var inst_7205 = (new cljs.core.PersistentVector(null,2,(5),inst_7203,inst_7204,null));
var state_7216__$1 = (function (){var statearr_7223 = state_7216;
(statearr_7223[(8)] = inst_7202__$1);

return statearr_7223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7216__$1,(8),jobs,inst_7205);
} else {
if((state_val_7217 === (7))){
var inst_7212 = (state_7216[(2)]);
var state_7216__$1 = state_7216;
var statearr_7224_7331 = state_7216__$1;
(statearr_7224_7331[(2)] = inst_7212);

(statearr_7224_7331[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7217 === (8))){
var inst_7202 = (state_7216[(8)]);
var inst_7207 = (state_7216[(2)]);
var state_7216__$1 = (function (){var statearr_7225 = state_7216;
(statearr_7225[(9)] = inst_7207);

return statearr_7225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7216__$1,(9),results,inst_7202);
} else {
if((state_val_7217 === (9))){
var inst_7209 = (state_7216[(2)]);
var state_7216__$1 = (function (){var statearr_7226 = state_7216;
(statearr_7226[(10)] = inst_7209);

return statearr_7226;
})();
var statearr_7227_7332 = state_7216__$1;
(statearr_7227_7332[(2)] = null);

(statearr_7227_7332[(1)] = (2));


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
});})(c__6961__auto___7326,jobs,results,process,async))
;
return ((function (switch__6858__auto__,c__6961__auto___7326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0 = (function (){
var statearr_7228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__);

(statearr_7228[(1)] = (1));

return statearr_7228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1 = (function (state_7216){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7216);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7229){if((e7229 instanceof Object)){
var ex__6862__auto__ = e7229;
var statearr_7230_7333 = state_7216;
(statearr_7230_7333[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7216);

return cljs.core.cst$kw$recur;
} else {
throw e7229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7334 = state_7216;
state_7216 = G__7334;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = function(state_7216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1.call(this,state_7216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___7326,jobs,results,process,async))
})();
var state__6963__auto__ = (function (){var statearr_7231 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7231[(6)] = c__6961__auto___7326);

return statearr_7231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___7326,jobs,results,process,async))
);


var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__,jobs,results,process,async){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__,jobs,results,process,async){
return (function (state_7269){
var state_val_7270 = (state_7269[(1)]);
if((state_val_7270 === (7))){
var inst_7265 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7271_7335 = state_7269__$1;
(statearr_7271_7335[(2)] = inst_7265);

(statearr_7271_7335[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (20))){
var state_7269__$1 = state_7269;
var statearr_7272_7336 = state_7269__$1;
(statearr_7272_7336[(2)] = null);

(statearr_7272_7336[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (1))){
var state_7269__$1 = state_7269;
var statearr_7273_7337 = state_7269__$1;
(statearr_7273_7337[(2)] = null);

(statearr_7273_7337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (4))){
var inst_7234 = (state_7269[(7)]);
var inst_7234__$1 = (state_7269[(2)]);
var inst_7235 = (inst_7234__$1 == null);
var state_7269__$1 = (function (){var statearr_7274 = state_7269;
(statearr_7274[(7)] = inst_7234__$1);

return statearr_7274;
})();
if(cljs.core.truth_(inst_7235)){
var statearr_7275_7338 = state_7269__$1;
(statearr_7275_7338[(1)] = (5));

} else {
var statearr_7276_7339 = state_7269__$1;
(statearr_7276_7339[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (15))){
var inst_7247 = (state_7269[(8)]);
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7269__$1,(18),to,inst_7247);
} else {
if((state_val_7270 === (21))){
var inst_7260 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7277_7340 = state_7269__$1;
(statearr_7277_7340[(2)] = inst_7260);

(statearr_7277_7340[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (13))){
var inst_7262 = (state_7269[(2)]);
var state_7269__$1 = (function (){var statearr_7278 = state_7269;
(statearr_7278[(9)] = inst_7262);

return statearr_7278;
})();
var statearr_7279_7341 = state_7269__$1;
(statearr_7279_7341[(2)] = null);

(statearr_7279_7341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (6))){
var inst_7234 = (state_7269[(7)]);
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7269__$1,(11),inst_7234);
} else {
if((state_val_7270 === (17))){
var inst_7255 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
if(cljs.core.truth_(inst_7255)){
var statearr_7280_7342 = state_7269__$1;
(statearr_7280_7342[(1)] = (19));

} else {
var statearr_7281_7343 = state_7269__$1;
(statearr_7281_7343[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (3))){
var inst_7267 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7269__$1,inst_7267);
} else {
if((state_val_7270 === (12))){
var inst_7244 = (state_7269[(10)]);
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7269__$1,(14),inst_7244);
} else {
if((state_val_7270 === (2))){
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7269__$1,(4),results);
} else {
if((state_val_7270 === (19))){
var state_7269__$1 = state_7269;
var statearr_7282_7344 = state_7269__$1;
(statearr_7282_7344[(2)] = null);

(statearr_7282_7344[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (11))){
var inst_7244 = (state_7269[(2)]);
var state_7269__$1 = (function (){var statearr_7283 = state_7269;
(statearr_7283[(10)] = inst_7244);

return statearr_7283;
})();
var statearr_7284_7345 = state_7269__$1;
(statearr_7284_7345[(2)] = null);

(statearr_7284_7345[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (9))){
var state_7269__$1 = state_7269;
var statearr_7285_7346 = state_7269__$1;
(statearr_7285_7346[(2)] = null);

(statearr_7285_7346[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (5))){
var state_7269__$1 = state_7269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7286_7347 = state_7269__$1;
(statearr_7286_7347[(1)] = (8));

} else {
var statearr_7287_7348 = state_7269__$1;
(statearr_7287_7348[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (14))){
var inst_7247 = (state_7269[(8)]);
var inst_7249 = (state_7269[(11)]);
var inst_7247__$1 = (state_7269[(2)]);
var inst_7248 = (inst_7247__$1 == null);
var inst_7249__$1 = cljs.core.not(inst_7248);
var state_7269__$1 = (function (){var statearr_7288 = state_7269;
(statearr_7288[(8)] = inst_7247__$1);

(statearr_7288[(11)] = inst_7249__$1);

return statearr_7288;
})();
if(inst_7249__$1){
var statearr_7289_7349 = state_7269__$1;
(statearr_7289_7349[(1)] = (15));

} else {
var statearr_7290_7350 = state_7269__$1;
(statearr_7290_7350[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (16))){
var inst_7249 = (state_7269[(11)]);
var state_7269__$1 = state_7269;
var statearr_7291_7351 = state_7269__$1;
(statearr_7291_7351[(2)] = inst_7249);

(statearr_7291_7351[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (10))){
var inst_7241 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7292_7352 = state_7269__$1;
(statearr_7292_7352[(2)] = inst_7241);

(statearr_7292_7352[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (18))){
var inst_7252 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7293_7353 = state_7269__$1;
(statearr_7293_7353[(2)] = inst_7252);

(statearr_7293_7353[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7270 === (8))){
var inst_7238 = cljs.core.async.close_BANG_(to);
var state_7269__$1 = state_7269;
var statearr_7294_7354 = state_7269__$1;
(statearr_7294_7354[(2)] = inst_7238);

(statearr_7294_7354[(1)] = (10));


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
});})(c__6961__auto__,jobs,results,process,async))
;
return ((function (switch__6858__auto__,c__6961__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0 = (function (){
var statearr_7295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__);

(statearr_7295[(1)] = (1));

return statearr_7295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1 = (function (state_7269){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7269);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7296){if((e7296 instanceof Object)){
var ex__6862__auto__ = e7296;
var statearr_7297_7355 = state_7269;
(statearr_7297_7355[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7269);

return cljs.core.cst$kw$recur;
} else {
throw e7296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7356 = state_7269;
state_7269 = G__7356;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__ = function(state_7269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1.call(this,state_7269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__,jobs,results,process,async))
})();
var state__6963__auto__ = (function (){var statearr_7298 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7298[(6)] = c__6961__auto__);

return statearr_7298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__,jobs,results,process,async))
);

return c__6961__auto__;
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
var G__7358 = arguments.length;
switch (G__7358) {
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
var G__7361 = arguments.length;
switch (G__7361) {
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
var G__7364 = arguments.length;
switch (G__7364) {
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
var c__6961__auto___7413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___7413,tc,fc){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___7413,tc,fc){
return (function (state_7390){
var state_val_7391 = (state_7390[(1)]);
if((state_val_7391 === (7))){
var inst_7386 = (state_7390[(2)]);
var state_7390__$1 = state_7390;
var statearr_7392_7414 = state_7390__$1;
(statearr_7392_7414[(2)] = inst_7386);

(statearr_7392_7414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (1))){
var state_7390__$1 = state_7390;
var statearr_7393_7415 = state_7390__$1;
(statearr_7393_7415[(2)] = null);

(statearr_7393_7415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (4))){
var inst_7367 = (state_7390[(7)]);
var inst_7367__$1 = (state_7390[(2)]);
var inst_7368 = (inst_7367__$1 == null);
var state_7390__$1 = (function (){var statearr_7394 = state_7390;
(statearr_7394[(7)] = inst_7367__$1);

return statearr_7394;
})();
if(cljs.core.truth_(inst_7368)){
var statearr_7395_7416 = state_7390__$1;
(statearr_7395_7416[(1)] = (5));

} else {
var statearr_7396_7417 = state_7390__$1;
(statearr_7396_7417[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (13))){
var state_7390__$1 = state_7390;
var statearr_7397_7418 = state_7390__$1;
(statearr_7397_7418[(2)] = null);

(statearr_7397_7418[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (6))){
var inst_7367 = (state_7390[(7)]);
var inst_7373 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_7367) : p.call(null,inst_7367));
var state_7390__$1 = state_7390;
if(cljs.core.truth_(inst_7373)){
var statearr_7398_7419 = state_7390__$1;
(statearr_7398_7419[(1)] = (9));

} else {
var statearr_7399_7420 = state_7390__$1;
(statearr_7399_7420[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (3))){
var inst_7388 = (state_7390[(2)]);
var state_7390__$1 = state_7390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7390__$1,inst_7388);
} else {
if((state_val_7391 === (12))){
var state_7390__$1 = state_7390;
var statearr_7400_7421 = state_7390__$1;
(statearr_7400_7421[(2)] = null);

(statearr_7400_7421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (2))){
var state_7390__$1 = state_7390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7390__$1,(4),ch);
} else {
if((state_val_7391 === (11))){
var inst_7367 = (state_7390[(7)]);
var inst_7377 = (state_7390[(2)]);
var state_7390__$1 = state_7390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7390__$1,(8),inst_7377,inst_7367);
} else {
if((state_val_7391 === (9))){
var state_7390__$1 = state_7390;
var statearr_7401_7422 = state_7390__$1;
(statearr_7401_7422[(2)] = tc);

(statearr_7401_7422[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (5))){
var inst_7370 = cljs.core.async.close_BANG_(tc);
var inst_7371 = cljs.core.async.close_BANG_(fc);
var state_7390__$1 = (function (){var statearr_7402 = state_7390;
(statearr_7402[(8)] = inst_7370);

return statearr_7402;
})();
var statearr_7403_7423 = state_7390__$1;
(statearr_7403_7423[(2)] = inst_7371);

(statearr_7403_7423[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (14))){
var inst_7384 = (state_7390[(2)]);
var state_7390__$1 = state_7390;
var statearr_7404_7424 = state_7390__$1;
(statearr_7404_7424[(2)] = inst_7384);

(statearr_7404_7424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (10))){
var state_7390__$1 = state_7390;
var statearr_7405_7425 = state_7390__$1;
(statearr_7405_7425[(2)] = fc);

(statearr_7405_7425[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7391 === (8))){
var inst_7379 = (state_7390[(2)]);
var state_7390__$1 = state_7390;
if(cljs.core.truth_(inst_7379)){
var statearr_7406_7426 = state_7390__$1;
(statearr_7406_7426[(1)] = (12));

} else {
var statearr_7407_7427 = state_7390__$1;
(statearr_7407_7427[(1)] = (13));

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
});})(c__6961__auto___7413,tc,fc))
;
return ((function (switch__6858__auto__,c__6961__auto___7413,tc,fc){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_7408 = [null,null,null,null,null,null,null,null,null];
(statearr_7408[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_7408[(1)] = (1));

return statearr_7408;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_7390){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7390);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7409){if((e7409 instanceof Object)){
var ex__6862__auto__ = e7409;
var statearr_7410_7428 = state_7390;
(statearr_7410_7428[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7390);

return cljs.core.cst$kw$recur;
} else {
throw e7409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7429 = state_7390;
state_7390 = G__7429;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_7390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_7390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___7413,tc,fc))
})();
var state__6963__auto__ = (function (){var statearr_7411 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7411[(6)] = c__6961__auto___7413);

return statearr_7411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___7413,tc,fc))
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
var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__){
return (function (state_7450){
var state_val_7451 = (state_7450[(1)]);
if((state_val_7451 === (7))){
var inst_7446 = (state_7450[(2)]);
var state_7450__$1 = state_7450;
var statearr_7452_7470 = state_7450__$1;
(statearr_7452_7470[(2)] = inst_7446);

(statearr_7452_7470[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (1))){
var inst_7430 = init;
var state_7450__$1 = (function (){var statearr_7453 = state_7450;
(statearr_7453[(7)] = inst_7430);

return statearr_7453;
})();
var statearr_7454_7471 = state_7450__$1;
(statearr_7454_7471[(2)] = null);

(statearr_7454_7471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (4))){
var inst_7433 = (state_7450[(8)]);
var inst_7433__$1 = (state_7450[(2)]);
var inst_7434 = (inst_7433__$1 == null);
var state_7450__$1 = (function (){var statearr_7455 = state_7450;
(statearr_7455[(8)] = inst_7433__$1);

return statearr_7455;
})();
if(cljs.core.truth_(inst_7434)){
var statearr_7456_7472 = state_7450__$1;
(statearr_7456_7472[(1)] = (5));

} else {
var statearr_7457_7473 = state_7450__$1;
(statearr_7457_7473[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (6))){
var inst_7433 = (state_7450[(8)]);
var inst_7437 = (state_7450[(9)]);
var inst_7430 = (state_7450[(7)]);
var inst_7437__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_7430,inst_7433) : f.call(null,inst_7430,inst_7433));
var inst_7438 = cljs.core.reduced_QMARK_(inst_7437__$1);
var state_7450__$1 = (function (){var statearr_7458 = state_7450;
(statearr_7458[(9)] = inst_7437__$1);

return statearr_7458;
})();
if(inst_7438){
var statearr_7459_7474 = state_7450__$1;
(statearr_7459_7474[(1)] = (8));

} else {
var statearr_7460_7475 = state_7450__$1;
(statearr_7460_7475[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (3))){
var inst_7448 = (state_7450[(2)]);
var state_7450__$1 = state_7450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7450__$1,inst_7448);
} else {
if((state_val_7451 === (2))){
var state_7450__$1 = state_7450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7450__$1,(4),ch);
} else {
if((state_val_7451 === (9))){
var inst_7437 = (state_7450[(9)]);
var inst_7430 = inst_7437;
var state_7450__$1 = (function (){var statearr_7461 = state_7450;
(statearr_7461[(7)] = inst_7430);

return statearr_7461;
})();
var statearr_7462_7476 = state_7450__$1;
(statearr_7462_7476[(2)] = null);

(statearr_7462_7476[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (5))){
var inst_7430 = (state_7450[(7)]);
var state_7450__$1 = state_7450;
var statearr_7463_7477 = state_7450__$1;
(statearr_7463_7477[(2)] = inst_7430);

(statearr_7463_7477[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (10))){
var inst_7444 = (state_7450[(2)]);
var state_7450__$1 = state_7450;
var statearr_7464_7478 = state_7450__$1;
(statearr_7464_7478[(2)] = inst_7444);

(statearr_7464_7478[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7451 === (8))){
var inst_7437 = (state_7450[(9)]);
var inst_7440 = cljs.core.deref(inst_7437);
var state_7450__$1 = state_7450;
var statearr_7465_7479 = state_7450__$1;
(statearr_7465_7479[(2)] = inst_7440);

(statearr_7465_7479[(1)] = (10));


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
});})(c__6961__auto__))
;
return ((function (switch__6858__auto__,c__6961__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6859__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6859__auto____0 = (function (){
var statearr_7466 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7466[(0)] = cljs$core$async$reduce_$_state_machine__6859__auto__);

(statearr_7466[(1)] = (1));

return statearr_7466;
});
var cljs$core$async$reduce_$_state_machine__6859__auto____1 = (function (state_7450){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7450);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7467){if((e7467 instanceof Object)){
var ex__6862__auto__ = e7467;
var statearr_7468_7480 = state_7450;
(statearr_7468_7480[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7450);

return cljs.core.cst$kw$recur;
} else {
throw e7467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7481 = state_7450;
state_7450 = G__7481;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6859__auto__ = function(state_7450){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6859__auto____1.call(this,state_7450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6859__auto____0;
cljs$core$async$reduce_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6859__auto____1;
return cljs$core$async$reduce_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__))
})();
var state__6963__auto__ = (function (){var statearr_7469 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7469[(6)] = c__6961__auto__);

return statearr_7469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__))
);

return c__6961__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__,f__$1){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__,f__$1){
return (function (state_7487){
var state_val_7488 = (state_7487[(1)]);
if((state_val_7488 === (1))){
var inst_7482 = cljs.core.async.reduce(f__$1,init,ch);
var state_7487__$1 = state_7487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7487__$1,(2),inst_7482);
} else {
if((state_val_7488 === (2))){
var inst_7484 = (state_7487[(2)]);
var inst_7485 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_7484) : f__$1.call(null,inst_7484));
var state_7487__$1 = state_7487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7487__$1,inst_7485);
} else {
return null;
}
}
});})(c__6961__auto__,f__$1))
;
return ((function (switch__6858__auto__,c__6961__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__6859__auto__ = null;
var cljs$core$async$transduce_$_state_machine__6859__auto____0 = (function (){
var statearr_7489 = [null,null,null,null,null,null,null];
(statearr_7489[(0)] = cljs$core$async$transduce_$_state_machine__6859__auto__);

(statearr_7489[(1)] = (1));

return statearr_7489;
});
var cljs$core$async$transduce_$_state_machine__6859__auto____1 = (function (state_7487){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7487);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7490){if((e7490 instanceof Object)){
var ex__6862__auto__ = e7490;
var statearr_7491_7493 = state_7487;
(statearr_7491_7493[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7487);

return cljs.core.cst$kw$recur;
} else {
throw e7490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7494 = state_7487;
state_7487 = G__7494;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__6859__auto__ = function(state_7487){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__6859__auto____1.call(this,state_7487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__6859__auto____0;
cljs$core$async$transduce_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__6859__auto____1;
return cljs$core$async$transduce_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__,f__$1))
})();
var state__6963__auto__ = (function (){var statearr_7492 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7492[(6)] = c__6961__auto__);

return statearr_7492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__,f__$1))
);

return c__6961__auto__;
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
var G__7496 = arguments.length;
switch (G__7496) {
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
var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__){
return (function (state_7521){
var state_val_7522 = (state_7521[(1)]);
if((state_val_7522 === (7))){
var inst_7503 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
var statearr_7523_7544 = state_7521__$1;
(statearr_7523_7544[(2)] = inst_7503);

(statearr_7523_7544[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (1))){
var inst_7497 = cljs.core.seq(coll);
var inst_7498 = inst_7497;
var state_7521__$1 = (function (){var statearr_7524 = state_7521;
(statearr_7524[(7)] = inst_7498);

return statearr_7524;
})();
var statearr_7525_7545 = state_7521__$1;
(statearr_7525_7545[(2)] = null);

(statearr_7525_7545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (4))){
var inst_7498 = (state_7521[(7)]);
var inst_7501 = cljs.core.first(inst_7498);
var state_7521__$1 = state_7521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7521__$1,(7),ch,inst_7501);
} else {
if((state_val_7522 === (13))){
var inst_7515 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
var statearr_7526_7546 = state_7521__$1;
(statearr_7526_7546[(2)] = inst_7515);

(statearr_7526_7546[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (6))){
var inst_7506 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
if(cljs.core.truth_(inst_7506)){
var statearr_7527_7547 = state_7521__$1;
(statearr_7527_7547[(1)] = (8));

} else {
var statearr_7528_7548 = state_7521__$1;
(statearr_7528_7548[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (3))){
var inst_7519 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7521__$1,inst_7519);
} else {
if((state_val_7522 === (12))){
var state_7521__$1 = state_7521;
var statearr_7529_7549 = state_7521__$1;
(statearr_7529_7549[(2)] = null);

(statearr_7529_7549[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (2))){
var inst_7498 = (state_7521[(7)]);
var state_7521__$1 = state_7521;
if(cljs.core.truth_(inst_7498)){
var statearr_7530_7550 = state_7521__$1;
(statearr_7530_7550[(1)] = (4));

} else {
var statearr_7531_7551 = state_7521__$1;
(statearr_7531_7551[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (11))){
var inst_7512 = cljs.core.async.close_BANG_(ch);
var state_7521__$1 = state_7521;
var statearr_7532_7552 = state_7521__$1;
(statearr_7532_7552[(2)] = inst_7512);

(statearr_7532_7552[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (9))){
var state_7521__$1 = state_7521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7533_7553 = state_7521__$1;
(statearr_7533_7553[(1)] = (11));

} else {
var statearr_7534_7554 = state_7521__$1;
(statearr_7534_7554[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (5))){
var inst_7498 = (state_7521[(7)]);
var state_7521__$1 = state_7521;
var statearr_7535_7555 = state_7521__$1;
(statearr_7535_7555[(2)] = inst_7498);

(statearr_7535_7555[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (10))){
var inst_7517 = (state_7521[(2)]);
var state_7521__$1 = state_7521;
var statearr_7536_7556 = state_7521__$1;
(statearr_7536_7556[(2)] = inst_7517);

(statearr_7536_7556[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7522 === (8))){
var inst_7498 = (state_7521[(7)]);
var inst_7508 = cljs.core.next(inst_7498);
var inst_7498__$1 = inst_7508;
var state_7521__$1 = (function (){var statearr_7537 = state_7521;
(statearr_7537[(7)] = inst_7498__$1);

return statearr_7537;
})();
var statearr_7538_7557 = state_7521__$1;
(statearr_7538_7557[(2)] = null);

(statearr_7538_7557[(1)] = (2));


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
});})(c__6961__auto__))
;
return ((function (switch__6858__auto__,c__6961__auto__){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_7539 = [null,null,null,null,null,null,null,null];
(statearr_7539[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_7539[(1)] = (1));

return statearr_7539;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_7521){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7521);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7540){if((e7540 instanceof Object)){
var ex__6862__auto__ = e7540;
var statearr_7541_7558 = state_7521;
(statearr_7541_7558[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7521);

return cljs.core.cst$kw$recur;
} else {
throw e7540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7559 = state_7521;
state_7521 = G__7559;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_7521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_7521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__))
})();
var state__6963__auto__ = (function (){var statearr_7542 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7542[(6)] = c__6961__auto__);

return statearr_7542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__))
);

return c__6961__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7560 = (function (ch,cs,meta7561){
this.ch = ch;
this.cs = cs;
this.meta7561 = meta7561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7562,meta7561__$1){
var self__ = this;
var _7562__$1 = this;
return (new cljs.core.async.t_cljs$core$async7560(self__.ch,self__.cs,meta7561__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7562){
var self__ = this;
var _7562__$1 = this;
return self__.meta7561;
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta7561], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7560";

cljs.core.async.t_cljs$core$async7560.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7560");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7560.
 */
cljs.core.async.__GT_t_cljs$core$async7560 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7560(ch__$1,cs__$1,meta7561){
return (new cljs.core.async.t_cljs$core$async7560(ch__$1,cs__$1,meta7561));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7560(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6961__auto___7782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___7782,cs,m,dchan,dctr,done){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___7782,cs,m,dchan,dctr,done){
return (function (state_7697){
var state_val_7698 = (state_7697[(1)]);
if((state_val_7698 === (7))){
var inst_7693 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7699_7783 = state_7697__$1;
(statearr_7699_7783[(2)] = inst_7693);

(statearr_7699_7783[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (20))){
var inst_7596 = (state_7697[(7)]);
var inst_7608 = cljs.core.first(inst_7596);
var inst_7609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7608,(0),null);
var inst_7610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7608,(1),null);
var state_7697__$1 = (function (){var statearr_7700 = state_7697;
(statearr_7700[(8)] = inst_7609);

return statearr_7700;
})();
if(cljs.core.truth_(inst_7610)){
var statearr_7701_7784 = state_7697__$1;
(statearr_7701_7784[(1)] = (22));

} else {
var statearr_7702_7785 = state_7697__$1;
(statearr_7702_7785[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (27))){
var inst_7565 = (state_7697[(9)]);
var inst_7638 = (state_7697[(10)]);
var inst_7640 = (state_7697[(11)]);
var inst_7645 = (state_7697[(12)]);
var inst_7645__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7638,inst_7640);
var inst_7646 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7645__$1,inst_7565,done);
var state_7697__$1 = (function (){var statearr_7703 = state_7697;
(statearr_7703[(12)] = inst_7645__$1);

return statearr_7703;
})();
if(cljs.core.truth_(inst_7646)){
var statearr_7704_7786 = state_7697__$1;
(statearr_7704_7786[(1)] = (30));

} else {
var statearr_7705_7787 = state_7697__$1;
(statearr_7705_7787[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (1))){
var state_7697__$1 = state_7697;
var statearr_7706_7788 = state_7697__$1;
(statearr_7706_7788[(2)] = null);

(statearr_7706_7788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (24))){
var inst_7596 = (state_7697[(7)]);
var inst_7615 = (state_7697[(2)]);
var inst_7616 = cljs.core.next(inst_7596);
var inst_7574 = inst_7616;
var inst_7575 = null;
var inst_7576 = (0);
var inst_7577 = (0);
var state_7697__$1 = (function (){var statearr_7707 = state_7697;
(statearr_7707[(13)] = inst_7577);

(statearr_7707[(14)] = inst_7575);

(statearr_7707[(15)] = inst_7574);

(statearr_7707[(16)] = inst_7615);

(statearr_7707[(17)] = inst_7576);

return statearr_7707;
})();
var statearr_7708_7789 = state_7697__$1;
(statearr_7708_7789[(2)] = null);

(statearr_7708_7789[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (39))){
var state_7697__$1 = state_7697;
var statearr_7712_7790 = state_7697__$1;
(statearr_7712_7790[(2)] = null);

(statearr_7712_7790[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (4))){
var inst_7565 = (state_7697[(9)]);
var inst_7565__$1 = (state_7697[(2)]);
var inst_7566 = (inst_7565__$1 == null);
var state_7697__$1 = (function (){var statearr_7713 = state_7697;
(statearr_7713[(9)] = inst_7565__$1);

return statearr_7713;
})();
if(cljs.core.truth_(inst_7566)){
var statearr_7714_7791 = state_7697__$1;
(statearr_7714_7791[(1)] = (5));

} else {
var statearr_7715_7792 = state_7697__$1;
(statearr_7715_7792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (15))){
var inst_7577 = (state_7697[(13)]);
var inst_7575 = (state_7697[(14)]);
var inst_7574 = (state_7697[(15)]);
var inst_7576 = (state_7697[(17)]);
var inst_7592 = (state_7697[(2)]);
var inst_7593 = (inst_7577 + (1));
var tmp7709 = inst_7575;
var tmp7710 = inst_7574;
var tmp7711 = inst_7576;
var inst_7574__$1 = tmp7710;
var inst_7575__$1 = tmp7709;
var inst_7576__$1 = tmp7711;
var inst_7577__$1 = inst_7593;
var state_7697__$1 = (function (){var statearr_7716 = state_7697;
(statearr_7716[(13)] = inst_7577__$1);

(statearr_7716[(14)] = inst_7575__$1);

(statearr_7716[(15)] = inst_7574__$1);

(statearr_7716[(18)] = inst_7592);

(statearr_7716[(17)] = inst_7576__$1);

return statearr_7716;
})();
var statearr_7717_7793 = state_7697__$1;
(statearr_7717_7793[(2)] = null);

(statearr_7717_7793[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (21))){
var inst_7619 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7721_7794 = state_7697__$1;
(statearr_7721_7794[(2)] = inst_7619);

(statearr_7721_7794[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (31))){
var inst_7645 = (state_7697[(12)]);
var inst_7649 = done(null);
var inst_7650 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7645);
var state_7697__$1 = (function (){var statearr_7722 = state_7697;
(statearr_7722[(19)] = inst_7649);

return statearr_7722;
})();
var statearr_7723_7795 = state_7697__$1;
(statearr_7723_7795[(2)] = inst_7650);

(statearr_7723_7795[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (32))){
var inst_7638 = (state_7697[(10)]);
var inst_7640 = (state_7697[(11)]);
var inst_7637 = (state_7697[(20)]);
var inst_7639 = (state_7697[(21)]);
var inst_7652 = (state_7697[(2)]);
var inst_7653 = (inst_7640 + (1));
var tmp7718 = inst_7638;
var tmp7719 = inst_7637;
var tmp7720 = inst_7639;
var inst_7637__$1 = tmp7719;
var inst_7638__$1 = tmp7718;
var inst_7639__$1 = tmp7720;
var inst_7640__$1 = inst_7653;
var state_7697__$1 = (function (){var statearr_7724 = state_7697;
(statearr_7724[(22)] = inst_7652);

(statearr_7724[(10)] = inst_7638__$1);

(statearr_7724[(11)] = inst_7640__$1);

(statearr_7724[(20)] = inst_7637__$1);

(statearr_7724[(21)] = inst_7639__$1);

return statearr_7724;
})();
var statearr_7725_7796 = state_7697__$1;
(statearr_7725_7796[(2)] = null);

(statearr_7725_7796[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (40))){
var inst_7665 = (state_7697[(23)]);
var inst_7669 = done(null);
var inst_7670 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7665);
var state_7697__$1 = (function (){var statearr_7726 = state_7697;
(statearr_7726[(24)] = inst_7669);

return statearr_7726;
})();
var statearr_7727_7797 = state_7697__$1;
(statearr_7727_7797[(2)] = inst_7670);

(statearr_7727_7797[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (33))){
var inst_7656 = (state_7697[(25)]);
var inst_7658 = cljs.core.chunked_seq_QMARK_(inst_7656);
var state_7697__$1 = state_7697;
if(inst_7658){
var statearr_7728_7798 = state_7697__$1;
(statearr_7728_7798[(1)] = (36));

} else {
var statearr_7729_7799 = state_7697__$1;
(statearr_7729_7799[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (13))){
var inst_7586 = (state_7697[(26)]);
var inst_7589 = cljs.core.async.close_BANG_(inst_7586);
var state_7697__$1 = state_7697;
var statearr_7730_7800 = state_7697__$1;
(statearr_7730_7800[(2)] = inst_7589);

(statearr_7730_7800[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (22))){
var inst_7609 = (state_7697[(8)]);
var inst_7612 = cljs.core.async.close_BANG_(inst_7609);
var state_7697__$1 = state_7697;
var statearr_7731_7801 = state_7697__$1;
(statearr_7731_7801[(2)] = inst_7612);

(statearr_7731_7801[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (36))){
var inst_7656 = (state_7697[(25)]);
var inst_7660 = cljs.core.chunk_first(inst_7656);
var inst_7661 = cljs.core.chunk_rest(inst_7656);
var inst_7662 = cljs.core.count(inst_7660);
var inst_7637 = inst_7661;
var inst_7638 = inst_7660;
var inst_7639 = inst_7662;
var inst_7640 = (0);
var state_7697__$1 = (function (){var statearr_7732 = state_7697;
(statearr_7732[(10)] = inst_7638);

(statearr_7732[(11)] = inst_7640);

(statearr_7732[(20)] = inst_7637);

(statearr_7732[(21)] = inst_7639);

return statearr_7732;
})();
var statearr_7733_7802 = state_7697__$1;
(statearr_7733_7802[(2)] = null);

(statearr_7733_7802[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (41))){
var inst_7656 = (state_7697[(25)]);
var inst_7672 = (state_7697[(2)]);
var inst_7673 = cljs.core.next(inst_7656);
var inst_7637 = inst_7673;
var inst_7638 = null;
var inst_7639 = (0);
var inst_7640 = (0);
var state_7697__$1 = (function (){var statearr_7734 = state_7697;
(statearr_7734[(10)] = inst_7638);

(statearr_7734[(11)] = inst_7640);

(statearr_7734[(20)] = inst_7637);

(statearr_7734[(21)] = inst_7639);

(statearr_7734[(27)] = inst_7672);

return statearr_7734;
})();
var statearr_7735_7803 = state_7697__$1;
(statearr_7735_7803[(2)] = null);

(statearr_7735_7803[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (43))){
var state_7697__$1 = state_7697;
var statearr_7736_7804 = state_7697__$1;
(statearr_7736_7804[(2)] = null);

(statearr_7736_7804[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (29))){
var inst_7681 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7737_7805 = state_7697__$1;
(statearr_7737_7805[(2)] = inst_7681);

(statearr_7737_7805[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (44))){
var inst_7690 = (state_7697[(2)]);
var state_7697__$1 = (function (){var statearr_7738 = state_7697;
(statearr_7738[(28)] = inst_7690);

return statearr_7738;
})();
var statearr_7739_7806 = state_7697__$1;
(statearr_7739_7806[(2)] = null);

(statearr_7739_7806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (6))){
var inst_7629 = (state_7697[(29)]);
var inst_7628 = cljs.core.deref(cs);
var inst_7629__$1 = cljs.core.keys(inst_7628);
var inst_7630 = cljs.core.count(inst_7629__$1);
var inst_7631 = cljs.core.reset_BANG_(dctr,inst_7630);
var inst_7636 = cljs.core.seq(inst_7629__$1);
var inst_7637 = inst_7636;
var inst_7638 = null;
var inst_7639 = (0);
var inst_7640 = (0);
var state_7697__$1 = (function (){var statearr_7740 = state_7697;
(statearr_7740[(10)] = inst_7638);

(statearr_7740[(11)] = inst_7640);

(statearr_7740[(20)] = inst_7637);

(statearr_7740[(29)] = inst_7629__$1);

(statearr_7740[(21)] = inst_7639);

(statearr_7740[(30)] = inst_7631);

return statearr_7740;
})();
var statearr_7741_7807 = state_7697__$1;
(statearr_7741_7807[(2)] = null);

(statearr_7741_7807[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (28))){
var inst_7656 = (state_7697[(25)]);
var inst_7637 = (state_7697[(20)]);
var inst_7656__$1 = cljs.core.seq(inst_7637);
var state_7697__$1 = (function (){var statearr_7742 = state_7697;
(statearr_7742[(25)] = inst_7656__$1);

return statearr_7742;
})();
if(inst_7656__$1){
var statearr_7743_7808 = state_7697__$1;
(statearr_7743_7808[(1)] = (33));

} else {
var statearr_7744_7809 = state_7697__$1;
(statearr_7744_7809[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (25))){
var inst_7640 = (state_7697[(11)]);
var inst_7639 = (state_7697[(21)]);
var inst_7642 = (inst_7640 < inst_7639);
var inst_7643 = inst_7642;
var state_7697__$1 = state_7697;
if(cljs.core.truth_(inst_7643)){
var statearr_7745_7810 = state_7697__$1;
(statearr_7745_7810[(1)] = (27));

} else {
var statearr_7746_7811 = state_7697__$1;
(statearr_7746_7811[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (34))){
var state_7697__$1 = state_7697;
var statearr_7747_7812 = state_7697__$1;
(statearr_7747_7812[(2)] = null);

(statearr_7747_7812[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (17))){
var state_7697__$1 = state_7697;
var statearr_7748_7813 = state_7697__$1;
(statearr_7748_7813[(2)] = null);

(statearr_7748_7813[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (3))){
var inst_7695 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7697__$1,inst_7695);
} else {
if((state_val_7698 === (12))){
var inst_7624 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7749_7814 = state_7697__$1;
(statearr_7749_7814[(2)] = inst_7624);

(statearr_7749_7814[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (2))){
var state_7697__$1 = state_7697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7697__$1,(4),ch);
} else {
if((state_val_7698 === (23))){
var state_7697__$1 = state_7697;
var statearr_7750_7815 = state_7697__$1;
(statearr_7750_7815[(2)] = null);

(statearr_7750_7815[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (35))){
var inst_7679 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7751_7816 = state_7697__$1;
(statearr_7751_7816[(2)] = inst_7679);

(statearr_7751_7816[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (19))){
var inst_7596 = (state_7697[(7)]);
var inst_7600 = cljs.core.chunk_first(inst_7596);
var inst_7601 = cljs.core.chunk_rest(inst_7596);
var inst_7602 = cljs.core.count(inst_7600);
var inst_7574 = inst_7601;
var inst_7575 = inst_7600;
var inst_7576 = inst_7602;
var inst_7577 = (0);
var state_7697__$1 = (function (){var statearr_7752 = state_7697;
(statearr_7752[(13)] = inst_7577);

(statearr_7752[(14)] = inst_7575);

(statearr_7752[(15)] = inst_7574);

(statearr_7752[(17)] = inst_7576);

return statearr_7752;
})();
var statearr_7753_7817 = state_7697__$1;
(statearr_7753_7817[(2)] = null);

(statearr_7753_7817[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (11))){
var inst_7574 = (state_7697[(15)]);
var inst_7596 = (state_7697[(7)]);
var inst_7596__$1 = cljs.core.seq(inst_7574);
var state_7697__$1 = (function (){var statearr_7754 = state_7697;
(statearr_7754[(7)] = inst_7596__$1);

return statearr_7754;
})();
if(inst_7596__$1){
var statearr_7755_7818 = state_7697__$1;
(statearr_7755_7818[(1)] = (16));

} else {
var statearr_7756_7819 = state_7697__$1;
(statearr_7756_7819[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (9))){
var inst_7626 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7757_7820 = state_7697__$1;
(statearr_7757_7820[(2)] = inst_7626);

(statearr_7757_7820[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (5))){
var inst_7572 = cljs.core.deref(cs);
var inst_7573 = cljs.core.seq(inst_7572);
var inst_7574 = inst_7573;
var inst_7575 = null;
var inst_7576 = (0);
var inst_7577 = (0);
var state_7697__$1 = (function (){var statearr_7758 = state_7697;
(statearr_7758[(13)] = inst_7577);

(statearr_7758[(14)] = inst_7575);

(statearr_7758[(15)] = inst_7574);

(statearr_7758[(17)] = inst_7576);

return statearr_7758;
})();
var statearr_7759_7821 = state_7697__$1;
(statearr_7759_7821[(2)] = null);

(statearr_7759_7821[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (14))){
var state_7697__$1 = state_7697;
var statearr_7760_7822 = state_7697__$1;
(statearr_7760_7822[(2)] = null);

(statearr_7760_7822[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (45))){
var inst_7687 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7761_7823 = state_7697__$1;
(statearr_7761_7823[(2)] = inst_7687);

(statearr_7761_7823[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (26))){
var inst_7629 = (state_7697[(29)]);
var inst_7683 = (state_7697[(2)]);
var inst_7684 = cljs.core.seq(inst_7629);
var state_7697__$1 = (function (){var statearr_7762 = state_7697;
(statearr_7762[(31)] = inst_7683);

return statearr_7762;
})();
if(inst_7684){
var statearr_7763_7824 = state_7697__$1;
(statearr_7763_7824[(1)] = (42));

} else {
var statearr_7764_7825 = state_7697__$1;
(statearr_7764_7825[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (16))){
var inst_7596 = (state_7697[(7)]);
var inst_7598 = cljs.core.chunked_seq_QMARK_(inst_7596);
var state_7697__$1 = state_7697;
if(inst_7598){
var statearr_7765_7826 = state_7697__$1;
(statearr_7765_7826[(1)] = (19));

} else {
var statearr_7766_7827 = state_7697__$1;
(statearr_7766_7827[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (38))){
var inst_7676 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7767_7828 = state_7697__$1;
(statearr_7767_7828[(2)] = inst_7676);

(statearr_7767_7828[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (30))){
var state_7697__$1 = state_7697;
var statearr_7768_7829 = state_7697__$1;
(statearr_7768_7829[(2)] = null);

(statearr_7768_7829[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (10))){
var inst_7577 = (state_7697[(13)]);
var inst_7575 = (state_7697[(14)]);
var inst_7585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7575,inst_7577);
var inst_7586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7585,(0),null);
var inst_7587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7585,(1),null);
var state_7697__$1 = (function (){var statearr_7769 = state_7697;
(statearr_7769[(26)] = inst_7586);

return statearr_7769;
})();
if(cljs.core.truth_(inst_7587)){
var statearr_7770_7830 = state_7697__$1;
(statearr_7770_7830[(1)] = (13));

} else {
var statearr_7771_7831 = state_7697__$1;
(statearr_7771_7831[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (18))){
var inst_7622 = (state_7697[(2)]);
var state_7697__$1 = state_7697;
var statearr_7772_7832 = state_7697__$1;
(statearr_7772_7832[(2)] = inst_7622);

(statearr_7772_7832[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (42))){
var state_7697__$1 = state_7697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7697__$1,(45),dchan);
} else {
if((state_val_7698 === (37))){
var inst_7656 = (state_7697[(25)]);
var inst_7565 = (state_7697[(9)]);
var inst_7665 = (state_7697[(23)]);
var inst_7665__$1 = cljs.core.first(inst_7656);
var inst_7666 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7665__$1,inst_7565,done);
var state_7697__$1 = (function (){var statearr_7773 = state_7697;
(statearr_7773[(23)] = inst_7665__$1);

return statearr_7773;
})();
if(cljs.core.truth_(inst_7666)){
var statearr_7774_7833 = state_7697__$1;
(statearr_7774_7833[(1)] = (39));

} else {
var statearr_7775_7834 = state_7697__$1;
(statearr_7775_7834[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7698 === (8))){
var inst_7577 = (state_7697[(13)]);
var inst_7576 = (state_7697[(17)]);
var inst_7579 = (inst_7577 < inst_7576);
var inst_7580 = inst_7579;
var state_7697__$1 = state_7697;
if(cljs.core.truth_(inst_7580)){
var statearr_7776_7835 = state_7697__$1;
(statearr_7776_7835[(1)] = (10));

} else {
var statearr_7777_7836 = state_7697__$1;
(statearr_7777_7836[(1)] = (11));

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
});})(c__6961__auto___7782,cs,m,dchan,dctr,done))
;
return ((function (switch__6858__auto__,c__6961__auto___7782,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6859__auto__ = null;
var cljs$core$async$mult_$_state_machine__6859__auto____0 = (function (){
var statearr_7778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7778[(0)] = cljs$core$async$mult_$_state_machine__6859__auto__);

(statearr_7778[(1)] = (1));

return statearr_7778;
});
var cljs$core$async$mult_$_state_machine__6859__auto____1 = (function (state_7697){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7697);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e7779){if((e7779 instanceof Object)){
var ex__6862__auto__ = e7779;
var statearr_7780_7837 = state_7697;
(statearr_7780_7837[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7697);

return cljs.core.cst$kw$recur;
} else {
throw e7779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__7838 = state_7697;
state_7697 = G__7838;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6859__auto__ = function(state_7697){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6859__auto____1.call(this,state_7697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6859__auto____0;
cljs$core$async$mult_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6859__auto____1;
return cljs$core$async$mult_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___7782,cs,m,dchan,dctr,done))
})();
var state__6963__auto__ = (function (){var statearr_7781 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_7781[(6)] = c__6961__auto___7782);

return statearr_7781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___7782,cs,m,dchan,dctr,done))
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
var G__7840 = arguments.length;
switch (G__7840) {
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
var len__4531__auto___7852 = arguments.length;
var i__4532__auto___7853 = (0);
while(true){
if((i__4532__auto___7853 < len__4531__auto___7852)){
args__4534__auto__.push((arguments[i__4532__auto___7853]));

var G__7854 = (i__4532__auto___7853 + (1));
i__4532__auto___7853 = G__7854;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7846){
var map__7847 = p__7846;
var map__7847__$1 = ((((!((map__7847 == null)))?(((((map__7847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7847):map__7847);
var opts = map__7847__$1;
var statearr_7849_7855 = state;
(statearr_7849_7855[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__7847,map__7847__$1,opts){
return (function (val){
var statearr_7850_7856 = state;
(statearr_7850_7856[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__7847,map__7847__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_7851_7857 = state;
(statearr_7851_7857[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7842){
var G__7843 = cljs.core.first(seq7842);
var seq7842__$1 = cljs.core.next(seq7842);
var G__7844 = cljs.core.first(seq7842__$1);
var seq7842__$2 = cljs.core.next(seq7842__$1);
var G__7845 = cljs.core.first(seq7842__$2);
var seq7842__$3 = cljs.core.next(seq7842__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7843,G__7844,G__7845,seq7842__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7858 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7859){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7859 = meta7859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7860,meta7859__$1){
var self__ = this;
var _7860__$1 = this;
return (new cljs.core.async.t_cljs$core$async7858(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7859__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7860){
var self__ = this;
var _7860__$1 = this;
return self__.meta7859;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async7858.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta7859], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7858";

cljs.core.async.t_cljs$core$async7858.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7858");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7858.
 */
cljs.core.async.__GT_t_cljs$core$async7858 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7858(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7859){
return (new cljs.core.async.t_cljs$core$async7858(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7859));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7858(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6961__auto___8022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7962){
var state_val_7963 = (state_7962[(1)]);
if((state_val_7963 === (7))){
var inst_7877 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
var statearr_7964_8023 = state_7962__$1;
(statearr_7964_8023[(2)] = inst_7877);

(statearr_7964_8023[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (20))){
var inst_7889 = (state_7962[(7)]);
var state_7962__$1 = state_7962;
var statearr_7965_8024 = state_7962__$1;
(statearr_7965_8024[(2)] = inst_7889);

(statearr_7965_8024[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (27))){
var state_7962__$1 = state_7962;
var statearr_7966_8025 = state_7962__$1;
(statearr_7966_8025[(2)] = null);

(statearr_7966_8025[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (1))){
var inst_7864 = (state_7962[(8)]);
var inst_7864__$1 = calc_state();
var inst_7866 = (inst_7864__$1 == null);
var inst_7867 = cljs.core.not(inst_7866);
var state_7962__$1 = (function (){var statearr_7967 = state_7962;
(statearr_7967[(8)] = inst_7864__$1);

return statearr_7967;
})();
if(inst_7867){
var statearr_7968_8026 = state_7962__$1;
(statearr_7968_8026[(1)] = (2));

} else {
var statearr_7969_8027 = state_7962__$1;
(statearr_7969_8027[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (24))){
var inst_7922 = (state_7962[(9)]);
var inst_7913 = (state_7962[(10)]);
var inst_7936 = (state_7962[(11)]);
var inst_7936__$1 = (inst_7913.cljs$core$IFn$_invoke$arity$1 ? inst_7913.cljs$core$IFn$_invoke$arity$1(inst_7922) : inst_7913.call(null,inst_7922));
var state_7962__$1 = (function (){var statearr_7970 = state_7962;
(statearr_7970[(11)] = inst_7936__$1);

return statearr_7970;
})();
if(cljs.core.truth_(inst_7936__$1)){
var statearr_7971_8028 = state_7962__$1;
(statearr_7971_8028[(1)] = (29));

} else {
var statearr_7972_8029 = state_7962__$1;
(statearr_7972_8029[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (4))){
var inst_7880 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7880)){
var statearr_7973_8030 = state_7962__$1;
(statearr_7973_8030[(1)] = (8));

} else {
var statearr_7974_8031 = state_7962__$1;
(statearr_7974_8031[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (15))){
var inst_7907 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7907)){
var statearr_7975_8032 = state_7962__$1;
(statearr_7975_8032[(1)] = (19));

} else {
var statearr_7976_8033 = state_7962__$1;
(statearr_7976_8033[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (21))){
var inst_7912 = (state_7962[(12)]);
var inst_7912__$1 = (state_7962[(2)]);
var inst_7913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7912__$1,cljs.core.cst$kw$solos);
var inst_7914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7912__$1,cljs.core.cst$kw$mutes);
var inst_7915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7912__$1,cljs.core.cst$kw$reads);
var state_7962__$1 = (function (){var statearr_7977 = state_7962;
(statearr_7977[(12)] = inst_7912__$1);

(statearr_7977[(13)] = inst_7914);

(statearr_7977[(10)] = inst_7913);

return statearr_7977;
})();
return cljs.core.async.ioc_alts_BANG_(state_7962__$1,(22),inst_7915);
} else {
if((state_val_7963 === (31))){
var inst_7944 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7944)){
var statearr_7978_8034 = state_7962__$1;
(statearr_7978_8034[(1)] = (32));

} else {
var statearr_7979_8035 = state_7962__$1;
(statearr_7979_8035[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (32))){
var inst_7921 = (state_7962[(14)]);
var state_7962__$1 = state_7962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7962__$1,(35),out,inst_7921);
} else {
if((state_val_7963 === (33))){
var inst_7912 = (state_7962[(12)]);
var inst_7889 = inst_7912;
var state_7962__$1 = (function (){var statearr_7980 = state_7962;
(statearr_7980[(7)] = inst_7889);

return statearr_7980;
})();
var statearr_7981_8036 = state_7962__$1;
(statearr_7981_8036[(2)] = null);

(statearr_7981_8036[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (13))){
var inst_7889 = (state_7962[(7)]);
var inst_7896 = inst_7889.cljs$lang$protocol_mask$partition0$;
var inst_7897 = (inst_7896 & (64));
var inst_7898 = inst_7889.cljs$core$ISeq$;
var inst_7899 = (cljs.core.PROTOCOL_SENTINEL === inst_7898);
var inst_7900 = ((inst_7897) || (inst_7899));
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7900)){
var statearr_7982_8037 = state_7962__$1;
(statearr_7982_8037[(1)] = (16));

} else {
var statearr_7983_8038 = state_7962__$1;
(statearr_7983_8038[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (22))){
var inst_7922 = (state_7962[(9)]);
var inst_7921 = (state_7962[(14)]);
var inst_7920 = (state_7962[(2)]);
var inst_7921__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7920,(0),null);
var inst_7922__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7920,(1),null);
var inst_7923 = (inst_7921__$1 == null);
var inst_7924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_7922__$1,change);
var inst_7925 = ((inst_7923) || (inst_7924));
var state_7962__$1 = (function (){var statearr_7984 = state_7962;
(statearr_7984[(9)] = inst_7922__$1);

(statearr_7984[(14)] = inst_7921__$1);

return statearr_7984;
})();
if(cljs.core.truth_(inst_7925)){
var statearr_7985_8039 = state_7962__$1;
(statearr_7985_8039[(1)] = (23));

} else {
var statearr_7986_8040 = state_7962__$1;
(statearr_7986_8040[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (36))){
var inst_7912 = (state_7962[(12)]);
var inst_7889 = inst_7912;
var state_7962__$1 = (function (){var statearr_7987 = state_7962;
(statearr_7987[(7)] = inst_7889);

return statearr_7987;
})();
var statearr_7988_8041 = state_7962__$1;
(statearr_7988_8041[(2)] = null);

(statearr_7988_8041[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (29))){
var inst_7936 = (state_7962[(11)]);
var state_7962__$1 = state_7962;
var statearr_7989_8042 = state_7962__$1;
(statearr_7989_8042[(2)] = inst_7936);

(statearr_7989_8042[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (6))){
var state_7962__$1 = state_7962;
var statearr_7990_8043 = state_7962__$1;
(statearr_7990_8043[(2)] = false);

(statearr_7990_8043[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (28))){
var inst_7932 = (state_7962[(2)]);
var inst_7933 = calc_state();
var inst_7889 = inst_7933;
var state_7962__$1 = (function (){var statearr_7991 = state_7962;
(statearr_7991[(15)] = inst_7932);

(statearr_7991[(7)] = inst_7889);

return statearr_7991;
})();
var statearr_7992_8044 = state_7962__$1;
(statearr_7992_8044[(2)] = null);

(statearr_7992_8044[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (25))){
var inst_7958 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
var statearr_7993_8045 = state_7962__$1;
(statearr_7993_8045[(2)] = inst_7958);

(statearr_7993_8045[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (34))){
var inst_7956 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
var statearr_7994_8046 = state_7962__$1;
(statearr_7994_8046[(2)] = inst_7956);

(statearr_7994_8046[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (17))){
var state_7962__$1 = state_7962;
var statearr_7995_8047 = state_7962__$1;
(statearr_7995_8047[(2)] = false);

(statearr_7995_8047[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (3))){
var state_7962__$1 = state_7962;
var statearr_7996_8048 = state_7962__$1;
(statearr_7996_8048[(2)] = false);

(statearr_7996_8048[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (12))){
var inst_7960 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7962__$1,inst_7960);
} else {
if((state_val_7963 === (2))){
var inst_7864 = (state_7962[(8)]);
var inst_7869 = inst_7864.cljs$lang$protocol_mask$partition0$;
var inst_7870 = (inst_7869 & (64));
var inst_7871 = inst_7864.cljs$core$ISeq$;
var inst_7872 = (cljs.core.PROTOCOL_SENTINEL === inst_7871);
var inst_7873 = ((inst_7870) || (inst_7872));
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7873)){
var statearr_7997_8049 = state_7962__$1;
(statearr_7997_8049[(1)] = (5));

} else {
var statearr_7998_8050 = state_7962__$1;
(statearr_7998_8050[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (23))){
var inst_7921 = (state_7962[(14)]);
var inst_7927 = (inst_7921 == null);
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7927)){
var statearr_7999_8051 = state_7962__$1;
(statearr_7999_8051[(1)] = (26));

} else {
var statearr_8000_8052 = state_7962__$1;
(statearr_8000_8052[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (35))){
var inst_7947 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
if(cljs.core.truth_(inst_7947)){
var statearr_8001_8053 = state_7962__$1;
(statearr_8001_8053[(1)] = (36));

} else {
var statearr_8002_8054 = state_7962__$1;
(statearr_8002_8054[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (19))){
var inst_7889 = (state_7962[(7)]);
var inst_7909 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_7889);
var state_7962__$1 = state_7962;
var statearr_8003_8055 = state_7962__$1;
(statearr_8003_8055[(2)] = inst_7909);

(statearr_8003_8055[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (11))){
var inst_7889 = (state_7962[(7)]);
var inst_7893 = (inst_7889 == null);
var inst_7894 = cljs.core.not(inst_7893);
var state_7962__$1 = state_7962;
if(inst_7894){
var statearr_8004_8056 = state_7962__$1;
(statearr_8004_8056[(1)] = (13));

} else {
var statearr_8005_8057 = state_7962__$1;
(statearr_8005_8057[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (9))){
var inst_7864 = (state_7962[(8)]);
var state_7962__$1 = state_7962;
var statearr_8006_8058 = state_7962__$1;
(statearr_8006_8058[(2)] = inst_7864);

(statearr_8006_8058[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (5))){
var state_7962__$1 = state_7962;
var statearr_8007_8059 = state_7962__$1;
(statearr_8007_8059[(2)] = true);

(statearr_8007_8059[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (14))){
var state_7962__$1 = state_7962;
var statearr_8008_8060 = state_7962__$1;
(statearr_8008_8060[(2)] = false);

(statearr_8008_8060[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (26))){
var inst_7922 = (state_7962[(9)]);
var inst_7929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_7922);
var state_7962__$1 = state_7962;
var statearr_8009_8061 = state_7962__$1;
(statearr_8009_8061[(2)] = inst_7929);

(statearr_8009_8061[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (16))){
var state_7962__$1 = state_7962;
var statearr_8010_8062 = state_7962__$1;
(statearr_8010_8062[(2)] = true);

(statearr_8010_8062[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (38))){
var inst_7952 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
var statearr_8011_8063 = state_7962__$1;
(statearr_8011_8063[(2)] = inst_7952);

(statearr_8011_8063[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (30))){
var inst_7922 = (state_7962[(9)]);
var inst_7914 = (state_7962[(13)]);
var inst_7913 = (state_7962[(10)]);
var inst_7939 = cljs.core.empty_QMARK_(inst_7913);
var inst_7940 = (inst_7914.cljs$core$IFn$_invoke$arity$1 ? inst_7914.cljs$core$IFn$_invoke$arity$1(inst_7922) : inst_7914.call(null,inst_7922));
var inst_7941 = cljs.core.not(inst_7940);
var inst_7942 = ((inst_7939) && (inst_7941));
var state_7962__$1 = state_7962;
var statearr_8012_8064 = state_7962__$1;
(statearr_8012_8064[(2)] = inst_7942);

(statearr_8012_8064[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (10))){
var inst_7864 = (state_7962[(8)]);
var inst_7885 = (state_7962[(2)]);
var inst_7886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7885,cljs.core.cst$kw$solos);
var inst_7887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7885,cljs.core.cst$kw$mutes);
var inst_7888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_7885,cljs.core.cst$kw$reads);
var inst_7889 = inst_7864;
var state_7962__$1 = (function (){var statearr_8013 = state_7962;
(statearr_8013[(16)] = inst_7888);

(statearr_8013[(17)] = inst_7887);

(statearr_8013[(7)] = inst_7889);

(statearr_8013[(18)] = inst_7886);

return statearr_8013;
})();
var statearr_8014_8065 = state_7962__$1;
(statearr_8014_8065[(2)] = null);

(statearr_8014_8065[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (18))){
var inst_7904 = (state_7962[(2)]);
var state_7962__$1 = state_7962;
var statearr_8015_8066 = state_7962__$1;
(statearr_8015_8066[(2)] = inst_7904);

(statearr_8015_8066[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (37))){
var state_7962__$1 = state_7962;
var statearr_8016_8067 = state_7962__$1;
(statearr_8016_8067[(2)] = null);

(statearr_8016_8067[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7963 === (8))){
var inst_7864 = (state_7962[(8)]);
var inst_7882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_7864);
var state_7962__$1 = state_7962;
var statearr_8017_8068 = state_7962__$1;
(statearr_8017_8068[(2)] = inst_7882);

(statearr_8017_8068[(1)] = (10));


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
});})(c__6961__auto___8022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6858__auto__,c__6961__auto___8022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6859__auto__ = null;
var cljs$core$async$mix_$_state_machine__6859__auto____0 = (function (){
var statearr_8018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8018[(0)] = cljs$core$async$mix_$_state_machine__6859__auto__);

(statearr_8018[(1)] = (1));

return statearr_8018;
});
var cljs$core$async$mix_$_state_machine__6859__auto____1 = (function (state_7962){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_7962);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8019){if((e8019 instanceof Object)){
var ex__6862__auto__ = e8019;
var statearr_8020_8069 = state_7962;
(statearr_8020_8069[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7962);

return cljs.core.cst$kw$recur;
} else {
throw e8019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8070 = state_7962;
state_7962 = G__8070;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6859__auto__ = function(state_7962){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6859__auto____1.call(this,state_7962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6859__auto____0;
cljs$core$async$mix_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6859__auto____1;
return cljs$core$async$mix_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6963__auto__ = (function (){var statearr_8021 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8021[(6)] = c__6961__auto___8022);

return statearr_8021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8022,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__8072 = arguments.length;
switch (G__8072) {
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
var G__8076 = arguments.length;
switch (G__8076) {
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
return (function (p1__8074_SHARP_){
if(cljs.core.truth_((p1__8074_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8074_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8074_SHARP_.call(null,topic)))){
return p1__8074_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8074_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8077 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8078){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8078 = meta8078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8079,meta8078__$1){
var self__ = this;
var _8079__$1 = this;
return (new cljs.core.async.t_cljs$core$async8077(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8078__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8079){
var self__ = this;
var _8079__$1 = this;
return self__.meta8078;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8078], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8077";

cljs.core.async.t_cljs$core$async8077.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8077");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8077.
 */
cljs.core.async.__GT_t_cljs$core$async8077 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8078){
return (new cljs.core.async.t_cljs$core$async8077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8078));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8077(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6961__auto___8197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8197,mults,ensure_mult,p){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8197,mults,ensure_mult,p){
return (function (state_8151){
var state_val_8152 = (state_8151[(1)]);
if((state_val_8152 === (7))){
var inst_8147 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8153_8198 = state_8151__$1;
(statearr_8153_8198[(2)] = inst_8147);

(statearr_8153_8198[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (20))){
var state_8151__$1 = state_8151;
var statearr_8154_8199 = state_8151__$1;
(statearr_8154_8199[(2)] = null);

(statearr_8154_8199[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (1))){
var state_8151__$1 = state_8151;
var statearr_8155_8200 = state_8151__$1;
(statearr_8155_8200[(2)] = null);

(statearr_8155_8200[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (24))){
var inst_8130 = (state_8151[(7)]);
var inst_8139 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_8130);
var state_8151__$1 = state_8151;
var statearr_8156_8201 = state_8151__$1;
(statearr_8156_8201[(2)] = inst_8139);

(statearr_8156_8201[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (4))){
var inst_8082 = (state_8151[(8)]);
var inst_8082__$1 = (state_8151[(2)]);
var inst_8083 = (inst_8082__$1 == null);
var state_8151__$1 = (function (){var statearr_8157 = state_8151;
(statearr_8157[(8)] = inst_8082__$1);

return statearr_8157;
})();
if(cljs.core.truth_(inst_8083)){
var statearr_8158_8202 = state_8151__$1;
(statearr_8158_8202[(1)] = (5));

} else {
var statearr_8159_8203 = state_8151__$1;
(statearr_8159_8203[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (15))){
var inst_8124 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8160_8204 = state_8151__$1;
(statearr_8160_8204[(2)] = inst_8124);

(statearr_8160_8204[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (21))){
var inst_8144 = (state_8151[(2)]);
var state_8151__$1 = (function (){var statearr_8161 = state_8151;
(statearr_8161[(9)] = inst_8144);

return statearr_8161;
})();
var statearr_8162_8205 = state_8151__$1;
(statearr_8162_8205[(2)] = null);

(statearr_8162_8205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (13))){
var inst_8106 = (state_8151[(10)]);
var inst_8108 = cljs.core.chunked_seq_QMARK_(inst_8106);
var state_8151__$1 = state_8151;
if(inst_8108){
var statearr_8163_8206 = state_8151__$1;
(statearr_8163_8206[(1)] = (16));

} else {
var statearr_8164_8207 = state_8151__$1;
(statearr_8164_8207[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (22))){
var inst_8136 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
if(cljs.core.truth_(inst_8136)){
var statearr_8165_8208 = state_8151__$1;
(statearr_8165_8208[(1)] = (23));

} else {
var statearr_8166_8209 = state_8151__$1;
(statearr_8166_8209[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (6))){
var inst_8130 = (state_8151[(7)]);
var inst_8082 = (state_8151[(8)]);
var inst_8132 = (state_8151[(11)]);
var inst_8130__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8082) : topic_fn.call(null,inst_8082));
var inst_8131 = cljs.core.deref(mults);
var inst_8132__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8131,inst_8130__$1);
var state_8151__$1 = (function (){var statearr_8167 = state_8151;
(statearr_8167[(7)] = inst_8130__$1);

(statearr_8167[(11)] = inst_8132__$1);

return statearr_8167;
})();
if(cljs.core.truth_(inst_8132__$1)){
var statearr_8168_8210 = state_8151__$1;
(statearr_8168_8210[(1)] = (19));

} else {
var statearr_8169_8211 = state_8151__$1;
(statearr_8169_8211[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (25))){
var inst_8141 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8170_8212 = state_8151__$1;
(statearr_8170_8212[(2)] = inst_8141);

(statearr_8170_8212[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (17))){
var inst_8106 = (state_8151[(10)]);
var inst_8115 = cljs.core.first(inst_8106);
var inst_8116 = cljs.core.async.muxch_STAR_(inst_8115);
var inst_8117 = cljs.core.async.close_BANG_(inst_8116);
var inst_8118 = cljs.core.next(inst_8106);
var inst_8092 = inst_8118;
var inst_8093 = null;
var inst_8094 = (0);
var inst_8095 = (0);
var state_8151__$1 = (function (){var statearr_8171 = state_8151;
(statearr_8171[(12)] = inst_8092);

(statearr_8171[(13)] = inst_8117);

(statearr_8171[(14)] = inst_8095);

(statearr_8171[(15)] = inst_8093);

(statearr_8171[(16)] = inst_8094);

return statearr_8171;
})();
var statearr_8172_8213 = state_8151__$1;
(statearr_8172_8213[(2)] = null);

(statearr_8172_8213[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (3))){
var inst_8149 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8151__$1,inst_8149);
} else {
if((state_val_8152 === (12))){
var inst_8126 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8173_8214 = state_8151__$1;
(statearr_8173_8214[(2)] = inst_8126);

(statearr_8173_8214[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (2))){
var state_8151__$1 = state_8151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8151__$1,(4),ch);
} else {
if((state_val_8152 === (23))){
var state_8151__$1 = state_8151;
var statearr_8174_8215 = state_8151__$1;
(statearr_8174_8215[(2)] = null);

(statearr_8174_8215[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (19))){
var inst_8082 = (state_8151[(8)]);
var inst_8132 = (state_8151[(11)]);
var inst_8134 = cljs.core.async.muxch_STAR_(inst_8132);
var state_8151__$1 = state_8151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8151__$1,(22),inst_8134,inst_8082);
} else {
if((state_val_8152 === (11))){
var inst_8106 = (state_8151[(10)]);
var inst_8092 = (state_8151[(12)]);
var inst_8106__$1 = cljs.core.seq(inst_8092);
var state_8151__$1 = (function (){var statearr_8175 = state_8151;
(statearr_8175[(10)] = inst_8106__$1);

return statearr_8175;
})();
if(inst_8106__$1){
var statearr_8176_8216 = state_8151__$1;
(statearr_8176_8216[(1)] = (13));

} else {
var statearr_8177_8217 = state_8151__$1;
(statearr_8177_8217[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (9))){
var inst_8128 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8178_8218 = state_8151__$1;
(statearr_8178_8218[(2)] = inst_8128);

(statearr_8178_8218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (5))){
var inst_8089 = cljs.core.deref(mults);
var inst_8090 = cljs.core.vals(inst_8089);
var inst_8091 = cljs.core.seq(inst_8090);
var inst_8092 = inst_8091;
var inst_8093 = null;
var inst_8094 = (0);
var inst_8095 = (0);
var state_8151__$1 = (function (){var statearr_8179 = state_8151;
(statearr_8179[(12)] = inst_8092);

(statearr_8179[(14)] = inst_8095);

(statearr_8179[(15)] = inst_8093);

(statearr_8179[(16)] = inst_8094);

return statearr_8179;
})();
var statearr_8180_8219 = state_8151__$1;
(statearr_8180_8219[(2)] = null);

(statearr_8180_8219[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (14))){
var state_8151__$1 = state_8151;
var statearr_8184_8220 = state_8151__$1;
(statearr_8184_8220[(2)] = null);

(statearr_8184_8220[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (16))){
var inst_8106 = (state_8151[(10)]);
var inst_8110 = cljs.core.chunk_first(inst_8106);
var inst_8111 = cljs.core.chunk_rest(inst_8106);
var inst_8112 = cljs.core.count(inst_8110);
var inst_8092 = inst_8111;
var inst_8093 = inst_8110;
var inst_8094 = inst_8112;
var inst_8095 = (0);
var state_8151__$1 = (function (){var statearr_8185 = state_8151;
(statearr_8185[(12)] = inst_8092);

(statearr_8185[(14)] = inst_8095);

(statearr_8185[(15)] = inst_8093);

(statearr_8185[(16)] = inst_8094);

return statearr_8185;
})();
var statearr_8186_8221 = state_8151__$1;
(statearr_8186_8221[(2)] = null);

(statearr_8186_8221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (10))){
var inst_8092 = (state_8151[(12)]);
var inst_8095 = (state_8151[(14)]);
var inst_8093 = (state_8151[(15)]);
var inst_8094 = (state_8151[(16)]);
var inst_8100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8093,inst_8095);
var inst_8101 = cljs.core.async.muxch_STAR_(inst_8100);
var inst_8102 = cljs.core.async.close_BANG_(inst_8101);
var inst_8103 = (inst_8095 + (1));
var tmp8181 = inst_8092;
var tmp8182 = inst_8093;
var tmp8183 = inst_8094;
var inst_8092__$1 = tmp8181;
var inst_8093__$1 = tmp8182;
var inst_8094__$1 = tmp8183;
var inst_8095__$1 = inst_8103;
var state_8151__$1 = (function (){var statearr_8187 = state_8151;
(statearr_8187[(12)] = inst_8092__$1);

(statearr_8187[(17)] = inst_8102);

(statearr_8187[(14)] = inst_8095__$1);

(statearr_8187[(15)] = inst_8093__$1);

(statearr_8187[(16)] = inst_8094__$1);

return statearr_8187;
})();
var statearr_8188_8222 = state_8151__$1;
(statearr_8188_8222[(2)] = null);

(statearr_8188_8222[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (18))){
var inst_8121 = (state_8151[(2)]);
var state_8151__$1 = state_8151;
var statearr_8189_8223 = state_8151__$1;
(statearr_8189_8223[(2)] = inst_8121);

(statearr_8189_8223[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8152 === (8))){
var inst_8095 = (state_8151[(14)]);
var inst_8094 = (state_8151[(16)]);
var inst_8097 = (inst_8095 < inst_8094);
var inst_8098 = inst_8097;
var state_8151__$1 = state_8151;
if(cljs.core.truth_(inst_8098)){
var statearr_8190_8224 = state_8151__$1;
(statearr_8190_8224[(1)] = (10));

} else {
var statearr_8191_8225 = state_8151__$1;
(statearr_8191_8225[(1)] = (11));

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
});})(c__6961__auto___8197,mults,ensure_mult,p))
;
return ((function (switch__6858__auto__,c__6961__auto___8197,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8192[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8192[(1)] = (1));

return statearr_8192;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8151){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8151);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8193){if((e8193 instanceof Object)){
var ex__6862__auto__ = e8193;
var statearr_8194_8226 = state_8151;
(statearr_8194_8226[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8151);

return cljs.core.cst$kw$recur;
} else {
throw e8193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8227 = state_8151;
state_8151 = G__8227;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8197,mults,ensure_mult,p))
})();
var state__6963__auto__ = (function (){var statearr_8195 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8195[(6)] = c__6961__auto___8197);

return statearr_8195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8197,mults,ensure_mult,p))
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
var G__8229 = arguments.length;
switch (G__8229) {
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
var G__8232 = arguments.length;
switch (G__8232) {
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
var G__8235 = arguments.length;
switch (G__8235) {
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
var c__6961__auto___8302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8274){
var state_val_8275 = (state_8274[(1)]);
if((state_val_8275 === (7))){
var state_8274__$1 = state_8274;
var statearr_8276_8303 = state_8274__$1;
(statearr_8276_8303[(2)] = null);

(statearr_8276_8303[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (1))){
var state_8274__$1 = state_8274;
var statearr_8277_8304 = state_8274__$1;
(statearr_8277_8304[(2)] = null);

(statearr_8277_8304[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (4))){
var inst_8238 = (state_8274[(7)]);
var inst_8240 = (inst_8238 < cnt);
var state_8274__$1 = state_8274;
if(cljs.core.truth_(inst_8240)){
var statearr_8278_8305 = state_8274__$1;
(statearr_8278_8305[(1)] = (6));

} else {
var statearr_8279_8306 = state_8274__$1;
(statearr_8279_8306[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (15))){
var inst_8270 = (state_8274[(2)]);
var state_8274__$1 = state_8274;
var statearr_8280_8307 = state_8274__$1;
(statearr_8280_8307[(2)] = inst_8270);

(statearr_8280_8307[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (13))){
var inst_8263 = cljs.core.async.close_BANG_(out);
var state_8274__$1 = state_8274;
var statearr_8281_8308 = state_8274__$1;
(statearr_8281_8308[(2)] = inst_8263);

(statearr_8281_8308[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (6))){
var state_8274__$1 = state_8274;
var statearr_8282_8309 = state_8274__$1;
(statearr_8282_8309[(2)] = null);

(statearr_8282_8309[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (3))){
var inst_8272 = (state_8274[(2)]);
var state_8274__$1 = state_8274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8274__$1,inst_8272);
} else {
if((state_val_8275 === (12))){
var inst_8260 = (state_8274[(8)]);
var inst_8260__$1 = (state_8274[(2)]);
var inst_8261 = cljs.core.some(cljs.core.nil_QMARK_,inst_8260__$1);
var state_8274__$1 = (function (){var statearr_8283 = state_8274;
(statearr_8283[(8)] = inst_8260__$1);

return statearr_8283;
})();
if(cljs.core.truth_(inst_8261)){
var statearr_8284_8310 = state_8274__$1;
(statearr_8284_8310[(1)] = (13));

} else {
var statearr_8285_8311 = state_8274__$1;
(statearr_8285_8311[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (2))){
var inst_8237 = cljs.core.reset_BANG_(dctr,cnt);
var inst_8238 = (0);
var state_8274__$1 = (function (){var statearr_8286 = state_8274;
(statearr_8286[(9)] = inst_8237);

(statearr_8286[(7)] = inst_8238);

return statearr_8286;
})();
var statearr_8287_8312 = state_8274__$1;
(statearr_8287_8312[(2)] = null);

(statearr_8287_8312[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (11))){
var inst_8238 = (state_8274[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_8274,(10),Object,null,(9));
var inst_8247 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_8238) : chs__$1.call(null,inst_8238));
var inst_8248 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_8238) : done.call(null,inst_8238));
var inst_8249 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_8247,inst_8248);
var state_8274__$1 = state_8274;
var statearr_8288_8313 = state_8274__$1;
(statearr_8288_8313[(2)] = inst_8249);


cljs.core.async.impl.ioc_helpers.process_exception(state_8274__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (9))){
var inst_8238 = (state_8274[(7)]);
var inst_8251 = (state_8274[(2)]);
var inst_8252 = (inst_8238 + (1));
var inst_8238__$1 = inst_8252;
var state_8274__$1 = (function (){var statearr_8289 = state_8274;
(statearr_8289[(10)] = inst_8251);

(statearr_8289[(7)] = inst_8238__$1);

return statearr_8289;
})();
var statearr_8290_8314 = state_8274__$1;
(statearr_8290_8314[(2)] = null);

(statearr_8290_8314[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (5))){
var inst_8258 = (state_8274[(2)]);
var state_8274__$1 = (function (){var statearr_8291 = state_8274;
(statearr_8291[(11)] = inst_8258);

return statearr_8291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8274__$1,(12),dchan);
} else {
if((state_val_8275 === (14))){
var inst_8260 = (state_8274[(8)]);
var inst_8265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_8260);
var state_8274__$1 = state_8274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8274__$1,(16),out,inst_8265);
} else {
if((state_val_8275 === (16))){
var inst_8267 = (state_8274[(2)]);
var state_8274__$1 = (function (){var statearr_8292 = state_8274;
(statearr_8292[(12)] = inst_8267);

return statearr_8292;
})();
var statearr_8293_8315 = state_8274__$1;
(statearr_8293_8315[(2)] = null);

(statearr_8293_8315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (10))){
var inst_8242 = (state_8274[(2)]);
var inst_8243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_8274__$1 = (function (){var statearr_8294 = state_8274;
(statearr_8294[(13)] = inst_8242);

return statearr_8294;
})();
var statearr_8295_8316 = state_8274__$1;
(statearr_8295_8316[(2)] = inst_8243);


cljs.core.async.impl.ioc_helpers.process_exception(state_8274__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8275 === (8))){
var inst_8256 = (state_8274[(2)]);
var state_8274__$1 = state_8274;
var statearr_8296_8317 = state_8274__$1;
(statearr_8296_8317[(2)] = inst_8256);

(statearr_8296_8317[(1)] = (5));


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
});})(c__6961__auto___8302,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6858__auto__,c__6961__auto___8302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8297[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8297[(1)] = (1));

return statearr_8297;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8274){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8274);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8298){if((e8298 instanceof Object)){
var ex__6862__auto__ = e8298;
var statearr_8299_8318 = state_8274;
(statearr_8299_8318[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8274);

return cljs.core.cst$kw$recur;
} else {
throw e8298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8319 = state_8274;
state_8274 = G__8319;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8302,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6963__auto__ = (function (){var statearr_8300 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8300[(6)] = c__6961__auto___8302);

return statearr_8300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8302,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__8322 = arguments.length;
switch (G__8322) {
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
var c__6961__auto___8376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8376,out){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8376,out){
return (function (state_8354){
var state_val_8355 = (state_8354[(1)]);
if((state_val_8355 === (7))){
var inst_8334 = (state_8354[(7)]);
var inst_8333 = (state_8354[(8)]);
var inst_8333__$1 = (state_8354[(2)]);
var inst_8334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8333__$1,(0),null);
var inst_8335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8333__$1,(1),null);
var inst_8336 = (inst_8334__$1 == null);
var state_8354__$1 = (function (){var statearr_8356 = state_8354;
(statearr_8356[(9)] = inst_8335);

(statearr_8356[(7)] = inst_8334__$1);

(statearr_8356[(8)] = inst_8333__$1);

return statearr_8356;
})();
if(cljs.core.truth_(inst_8336)){
var statearr_8357_8377 = state_8354__$1;
(statearr_8357_8377[(1)] = (8));

} else {
var statearr_8358_8378 = state_8354__$1;
(statearr_8358_8378[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (1))){
var inst_8323 = cljs.core.vec(chs);
var inst_8324 = inst_8323;
var state_8354__$1 = (function (){var statearr_8359 = state_8354;
(statearr_8359[(10)] = inst_8324);

return statearr_8359;
})();
var statearr_8360_8379 = state_8354__$1;
(statearr_8360_8379[(2)] = null);

(statearr_8360_8379[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (4))){
var inst_8324 = (state_8354[(10)]);
var state_8354__$1 = state_8354;
return cljs.core.async.ioc_alts_BANG_(state_8354__$1,(7),inst_8324);
} else {
if((state_val_8355 === (6))){
var inst_8350 = (state_8354[(2)]);
var state_8354__$1 = state_8354;
var statearr_8361_8380 = state_8354__$1;
(statearr_8361_8380[(2)] = inst_8350);

(statearr_8361_8380[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (3))){
var inst_8352 = (state_8354[(2)]);
var state_8354__$1 = state_8354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8354__$1,inst_8352);
} else {
if((state_val_8355 === (2))){
var inst_8324 = (state_8354[(10)]);
var inst_8326 = cljs.core.count(inst_8324);
var inst_8327 = (inst_8326 > (0));
var state_8354__$1 = state_8354;
if(cljs.core.truth_(inst_8327)){
var statearr_8363_8381 = state_8354__$1;
(statearr_8363_8381[(1)] = (4));

} else {
var statearr_8364_8382 = state_8354__$1;
(statearr_8364_8382[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (11))){
var inst_8324 = (state_8354[(10)]);
var inst_8343 = (state_8354[(2)]);
var tmp8362 = inst_8324;
var inst_8324__$1 = tmp8362;
var state_8354__$1 = (function (){var statearr_8365 = state_8354;
(statearr_8365[(10)] = inst_8324__$1);

(statearr_8365[(11)] = inst_8343);

return statearr_8365;
})();
var statearr_8366_8383 = state_8354__$1;
(statearr_8366_8383[(2)] = null);

(statearr_8366_8383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (9))){
var inst_8334 = (state_8354[(7)]);
var state_8354__$1 = state_8354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8354__$1,(11),out,inst_8334);
} else {
if((state_val_8355 === (5))){
var inst_8348 = cljs.core.async.close_BANG_(out);
var state_8354__$1 = state_8354;
var statearr_8367_8384 = state_8354__$1;
(statearr_8367_8384[(2)] = inst_8348);

(statearr_8367_8384[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (10))){
var inst_8346 = (state_8354[(2)]);
var state_8354__$1 = state_8354;
var statearr_8368_8385 = state_8354__$1;
(statearr_8368_8385[(2)] = inst_8346);

(statearr_8368_8385[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8355 === (8))){
var inst_8335 = (state_8354[(9)]);
var inst_8334 = (state_8354[(7)]);
var inst_8324 = (state_8354[(10)]);
var inst_8333 = (state_8354[(8)]);
var inst_8338 = (function (){var cs = inst_8324;
var vec__8329 = inst_8333;
var v = inst_8334;
var c = inst_8335;
return ((function (cs,vec__8329,v,c,inst_8335,inst_8334,inst_8324,inst_8333,state_val_8355,c__6961__auto___8376,out){
return (function (p1__8320_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__8320_SHARP_);
});
;})(cs,vec__8329,v,c,inst_8335,inst_8334,inst_8324,inst_8333,state_val_8355,c__6961__auto___8376,out))
})();
var inst_8339 = cljs.core.filterv(inst_8338,inst_8324);
var inst_8324__$1 = inst_8339;
var state_8354__$1 = (function (){var statearr_8369 = state_8354;
(statearr_8369[(10)] = inst_8324__$1);

return statearr_8369;
})();
var statearr_8370_8386 = state_8354__$1;
(statearr_8370_8386[(2)] = null);

(statearr_8370_8386[(1)] = (2));


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
});})(c__6961__auto___8376,out))
;
return ((function (switch__6858__auto__,c__6961__auto___8376,out){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8371[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8371[(1)] = (1));

return statearr_8371;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8354){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8354);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8372){if((e8372 instanceof Object)){
var ex__6862__auto__ = e8372;
var statearr_8373_8387 = state_8354;
(statearr_8373_8387[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8354);

return cljs.core.cst$kw$recur;
} else {
throw e8372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8388 = state_8354;
state_8354 = G__8388;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8376,out))
})();
var state__6963__auto__ = (function (){var statearr_8374 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8374[(6)] = c__6961__auto___8376);

return statearr_8374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8376,out))
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
var G__8390 = arguments.length;
switch (G__8390) {
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
var c__6961__auto___8435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8435,out){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8435,out){
return (function (state_8414){
var state_val_8415 = (state_8414[(1)]);
if((state_val_8415 === (7))){
var inst_8396 = (state_8414[(7)]);
var inst_8396__$1 = (state_8414[(2)]);
var inst_8397 = (inst_8396__$1 == null);
var inst_8398 = cljs.core.not(inst_8397);
var state_8414__$1 = (function (){var statearr_8416 = state_8414;
(statearr_8416[(7)] = inst_8396__$1);

return statearr_8416;
})();
if(inst_8398){
var statearr_8417_8436 = state_8414__$1;
(statearr_8417_8436[(1)] = (8));

} else {
var statearr_8418_8437 = state_8414__$1;
(statearr_8418_8437[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (1))){
var inst_8391 = (0);
var state_8414__$1 = (function (){var statearr_8419 = state_8414;
(statearr_8419[(8)] = inst_8391);

return statearr_8419;
})();
var statearr_8420_8438 = state_8414__$1;
(statearr_8420_8438[(2)] = null);

(statearr_8420_8438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (4))){
var state_8414__$1 = state_8414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8414__$1,(7),ch);
} else {
if((state_val_8415 === (6))){
var inst_8409 = (state_8414[(2)]);
var state_8414__$1 = state_8414;
var statearr_8421_8439 = state_8414__$1;
(statearr_8421_8439[(2)] = inst_8409);

(statearr_8421_8439[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (3))){
var inst_8411 = (state_8414[(2)]);
var inst_8412 = cljs.core.async.close_BANG_(out);
var state_8414__$1 = (function (){var statearr_8422 = state_8414;
(statearr_8422[(9)] = inst_8411);

return statearr_8422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8414__$1,inst_8412);
} else {
if((state_val_8415 === (2))){
var inst_8391 = (state_8414[(8)]);
var inst_8393 = (inst_8391 < n);
var state_8414__$1 = state_8414;
if(cljs.core.truth_(inst_8393)){
var statearr_8423_8440 = state_8414__$1;
(statearr_8423_8440[(1)] = (4));

} else {
var statearr_8424_8441 = state_8414__$1;
(statearr_8424_8441[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (11))){
var inst_8391 = (state_8414[(8)]);
var inst_8401 = (state_8414[(2)]);
var inst_8402 = (inst_8391 + (1));
var inst_8391__$1 = inst_8402;
var state_8414__$1 = (function (){var statearr_8425 = state_8414;
(statearr_8425[(8)] = inst_8391__$1);

(statearr_8425[(10)] = inst_8401);

return statearr_8425;
})();
var statearr_8426_8442 = state_8414__$1;
(statearr_8426_8442[(2)] = null);

(statearr_8426_8442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (9))){
var state_8414__$1 = state_8414;
var statearr_8427_8443 = state_8414__$1;
(statearr_8427_8443[(2)] = null);

(statearr_8427_8443[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (5))){
var state_8414__$1 = state_8414;
var statearr_8428_8444 = state_8414__$1;
(statearr_8428_8444[(2)] = null);

(statearr_8428_8444[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (10))){
var inst_8406 = (state_8414[(2)]);
var state_8414__$1 = state_8414;
var statearr_8429_8445 = state_8414__$1;
(statearr_8429_8445[(2)] = inst_8406);

(statearr_8429_8445[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8415 === (8))){
var inst_8396 = (state_8414[(7)]);
var state_8414__$1 = state_8414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8414__$1,(11),out,inst_8396);
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
});})(c__6961__auto___8435,out))
;
return ((function (switch__6858__auto__,c__6961__auto___8435,out){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8430[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8430[(1)] = (1));

return statearr_8430;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8414){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8414);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8431){if((e8431 instanceof Object)){
var ex__6862__auto__ = e8431;
var statearr_8432_8446 = state_8414;
(statearr_8432_8446[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8414);

return cljs.core.cst$kw$recur;
} else {
throw e8431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8447 = state_8414;
state_8414 = G__8447;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8435,out))
})();
var state__6963__auto__ = (function (){var statearr_8433 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8433[(6)] = c__6961__auto___8435);

return statearr_8433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8435,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8449 = (function (f,ch,meta8450){
this.f = f;
this.ch = ch;
this.meta8450 = meta8450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8451,meta8450__$1){
var self__ = this;
var _8451__$1 = this;
return (new cljs.core.async.t_cljs$core$async8449(self__.f,self__.ch,meta8450__$1));
});

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8451){
var self__ = this;
var _8451__$1 = this;
return self__.meta8450;
});

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8452 = (function (f,ch,meta8450,_,fn1,meta8453){
this.f = f;
this.ch = ch;
this.meta8450 = meta8450;
this._ = _;
this.fn1 = fn1;
this.meta8453 = meta8453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8454,meta8453__$1){
var self__ = this;
var _8454__$1 = this;
return (new cljs.core.async.t_cljs$core$async8452(self__.f,self__.ch,self__.meta8450,self__._,self__.fn1,meta8453__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8454){
var self__ = this;
var _8454__$1 = this;
return self__.meta8453;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8452.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8452.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8448_SHARP_){
var G__8455 = (((p1__8448_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__8448_SHARP_) : self__.f.call(null,p1__8448_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__8455) : f1.call(null,G__8455));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8452.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8450,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async8449], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta8453], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8452";

cljs.core.async.t_cljs$core$async8452.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8452");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8452.
 */
cljs.core.async.__GT_t_cljs$core$async8452 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8452(f__$1,ch__$1,meta8450__$1,___$2,fn1__$1,meta8453){
return (new cljs.core.async.t_cljs$core$async8452(f__$1,ch__$1,meta8450__$1,___$2,fn1__$1,meta8453));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8452(self__.f,self__.ch,self__.meta8450,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__8456 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__8456) : self__.f.call(null,G__8456));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8450], null);
});

cljs.core.async.t_cljs$core$async8449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8449";

cljs.core.async.t_cljs$core$async8449.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8449");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8449.
 */
cljs.core.async.__GT_t_cljs$core$async8449 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8449(f__$1,ch__$1,meta8450){
return (new cljs.core.async.t_cljs$core$async8449(f__$1,ch__$1,meta8450));
});

}

return (new cljs.core.async.t_cljs$core$async8449(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8457 = (function (f,ch,meta8458){
this.f = f;
this.ch = ch;
this.meta8458 = meta8458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8459,meta8458__$1){
var self__ = this;
var _8459__$1 = this;
return (new cljs.core.async.t_cljs$core$async8457(self__.f,self__.ch,meta8458__$1));
});

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8459){
var self__ = this;
var _8459__$1 = this;
return self__.meta8458;
});

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async8457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8458], null);
});

cljs.core.async.t_cljs$core$async8457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8457";

cljs.core.async.t_cljs$core$async8457.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8457");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8457.
 */
cljs.core.async.__GT_t_cljs$core$async8457 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8457(f__$1,ch__$1,meta8458){
return (new cljs.core.async.t_cljs$core$async8457(f__$1,ch__$1,meta8458));
});

}

return (new cljs.core.async.t_cljs$core$async8457(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8460 = (function (p,ch,meta8461){
this.p = p;
this.ch = ch;
this.meta8461 = meta8461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8462,meta8461__$1){
var self__ = this;
var _8462__$1 = this;
return (new cljs.core.async.t_cljs$core$async8460(self__.p,self__.ch,meta8461__$1));
});

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8462){
var self__ = this;
var _8462__$1 = this;
return self__.meta8461;
});

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8461], null);
});

cljs.core.async.t_cljs$core$async8460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8460";

cljs.core.async.t_cljs$core$async8460.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8460");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8460.
 */
cljs.core.async.__GT_t_cljs$core$async8460 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8460(p__$1,ch__$1,meta8461){
return (new cljs.core.async.t_cljs$core$async8460(p__$1,ch__$1,meta8461));
});

}

return (new cljs.core.async.t_cljs$core$async8460(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8464 = arguments.length;
switch (G__8464) {
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
var c__6961__auto___8504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8504,out){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8504,out){
return (function (state_8485){
var state_val_8486 = (state_8485[(1)]);
if((state_val_8486 === (7))){
var inst_8481 = (state_8485[(2)]);
var state_8485__$1 = state_8485;
var statearr_8487_8505 = state_8485__$1;
(statearr_8487_8505[(2)] = inst_8481);

(statearr_8487_8505[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (1))){
var state_8485__$1 = state_8485;
var statearr_8488_8506 = state_8485__$1;
(statearr_8488_8506[(2)] = null);

(statearr_8488_8506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (4))){
var inst_8467 = (state_8485[(7)]);
var inst_8467__$1 = (state_8485[(2)]);
var inst_8468 = (inst_8467__$1 == null);
var state_8485__$1 = (function (){var statearr_8489 = state_8485;
(statearr_8489[(7)] = inst_8467__$1);

return statearr_8489;
})();
if(cljs.core.truth_(inst_8468)){
var statearr_8490_8507 = state_8485__$1;
(statearr_8490_8507[(1)] = (5));

} else {
var statearr_8491_8508 = state_8485__$1;
(statearr_8491_8508[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (6))){
var inst_8467 = (state_8485[(7)]);
var inst_8472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8467) : p.call(null,inst_8467));
var state_8485__$1 = state_8485;
if(cljs.core.truth_(inst_8472)){
var statearr_8492_8509 = state_8485__$1;
(statearr_8492_8509[(1)] = (8));

} else {
var statearr_8493_8510 = state_8485__$1;
(statearr_8493_8510[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (3))){
var inst_8483 = (state_8485[(2)]);
var state_8485__$1 = state_8485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8485__$1,inst_8483);
} else {
if((state_val_8486 === (2))){
var state_8485__$1 = state_8485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8485__$1,(4),ch);
} else {
if((state_val_8486 === (11))){
var inst_8475 = (state_8485[(2)]);
var state_8485__$1 = state_8485;
var statearr_8494_8511 = state_8485__$1;
(statearr_8494_8511[(2)] = inst_8475);

(statearr_8494_8511[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (9))){
var state_8485__$1 = state_8485;
var statearr_8495_8512 = state_8485__$1;
(statearr_8495_8512[(2)] = null);

(statearr_8495_8512[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (5))){
var inst_8470 = cljs.core.async.close_BANG_(out);
var state_8485__$1 = state_8485;
var statearr_8496_8513 = state_8485__$1;
(statearr_8496_8513[(2)] = inst_8470);

(statearr_8496_8513[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (10))){
var inst_8478 = (state_8485[(2)]);
var state_8485__$1 = (function (){var statearr_8497 = state_8485;
(statearr_8497[(8)] = inst_8478);

return statearr_8497;
})();
var statearr_8498_8514 = state_8485__$1;
(statearr_8498_8514[(2)] = null);

(statearr_8498_8514[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8486 === (8))){
var inst_8467 = (state_8485[(7)]);
var state_8485__$1 = state_8485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8485__$1,(11),out,inst_8467);
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
});})(c__6961__auto___8504,out))
;
return ((function (switch__6858__auto__,c__6961__auto___8504,out){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8499 = [null,null,null,null,null,null,null,null,null];
(statearr_8499[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8499[(1)] = (1));

return statearr_8499;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8485){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8485);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8500){if((e8500 instanceof Object)){
var ex__6862__auto__ = e8500;
var statearr_8501_8515 = state_8485;
(statearr_8501_8515[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8485);

return cljs.core.cst$kw$recur;
} else {
throw e8500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8516 = state_8485;
state_8485 = G__8516;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8504,out))
})();
var state__6963__auto__ = (function (){var statearr_8502 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8502[(6)] = c__6961__auto___8504);

return statearr_8502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8504,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8518 = arguments.length;
switch (G__8518) {
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
var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__){
return (function (state_8581){
var state_val_8582 = (state_8581[(1)]);
if((state_val_8582 === (7))){
var inst_8577 = (state_8581[(2)]);
var state_8581__$1 = state_8581;
var statearr_8583_8621 = state_8581__$1;
(statearr_8583_8621[(2)] = inst_8577);

(statearr_8583_8621[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (20))){
var inst_8547 = (state_8581[(7)]);
var inst_8558 = (state_8581[(2)]);
var inst_8559 = cljs.core.next(inst_8547);
var inst_8533 = inst_8559;
var inst_8534 = null;
var inst_8535 = (0);
var inst_8536 = (0);
var state_8581__$1 = (function (){var statearr_8584 = state_8581;
(statearr_8584[(8)] = inst_8535);

(statearr_8584[(9)] = inst_8534);

(statearr_8584[(10)] = inst_8533);

(statearr_8584[(11)] = inst_8558);

(statearr_8584[(12)] = inst_8536);

return statearr_8584;
})();
var statearr_8585_8622 = state_8581__$1;
(statearr_8585_8622[(2)] = null);

(statearr_8585_8622[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (1))){
var state_8581__$1 = state_8581;
var statearr_8586_8623 = state_8581__$1;
(statearr_8586_8623[(2)] = null);

(statearr_8586_8623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (4))){
var inst_8522 = (state_8581[(13)]);
var inst_8522__$1 = (state_8581[(2)]);
var inst_8523 = (inst_8522__$1 == null);
var state_8581__$1 = (function (){var statearr_8587 = state_8581;
(statearr_8587[(13)] = inst_8522__$1);

return statearr_8587;
})();
if(cljs.core.truth_(inst_8523)){
var statearr_8588_8624 = state_8581__$1;
(statearr_8588_8624[(1)] = (5));

} else {
var statearr_8589_8625 = state_8581__$1;
(statearr_8589_8625[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (15))){
var state_8581__$1 = state_8581;
var statearr_8593_8626 = state_8581__$1;
(statearr_8593_8626[(2)] = null);

(statearr_8593_8626[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (21))){
var state_8581__$1 = state_8581;
var statearr_8594_8627 = state_8581__$1;
(statearr_8594_8627[(2)] = null);

(statearr_8594_8627[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (13))){
var inst_8535 = (state_8581[(8)]);
var inst_8534 = (state_8581[(9)]);
var inst_8533 = (state_8581[(10)]);
var inst_8536 = (state_8581[(12)]);
var inst_8543 = (state_8581[(2)]);
var inst_8544 = (inst_8536 + (1));
var tmp8590 = inst_8535;
var tmp8591 = inst_8534;
var tmp8592 = inst_8533;
var inst_8533__$1 = tmp8592;
var inst_8534__$1 = tmp8591;
var inst_8535__$1 = tmp8590;
var inst_8536__$1 = inst_8544;
var state_8581__$1 = (function (){var statearr_8595 = state_8581;
(statearr_8595[(8)] = inst_8535__$1);

(statearr_8595[(14)] = inst_8543);

(statearr_8595[(9)] = inst_8534__$1);

(statearr_8595[(10)] = inst_8533__$1);

(statearr_8595[(12)] = inst_8536__$1);

return statearr_8595;
})();
var statearr_8596_8628 = state_8581__$1;
(statearr_8596_8628[(2)] = null);

(statearr_8596_8628[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (22))){
var state_8581__$1 = state_8581;
var statearr_8597_8629 = state_8581__$1;
(statearr_8597_8629[(2)] = null);

(statearr_8597_8629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (6))){
var inst_8522 = (state_8581[(13)]);
var inst_8531 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_8522) : f.call(null,inst_8522));
var inst_8532 = cljs.core.seq(inst_8531);
var inst_8533 = inst_8532;
var inst_8534 = null;
var inst_8535 = (0);
var inst_8536 = (0);
var state_8581__$1 = (function (){var statearr_8598 = state_8581;
(statearr_8598[(8)] = inst_8535);

(statearr_8598[(9)] = inst_8534);

(statearr_8598[(10)] = inst_8533);

(statearr_8598[(12)] = inst_8536);

return statearr_8598;
})();
var statearr_8599_8630 = state_8581__$1;
(statearr_8599_8630[(2)] = null);

(statearr_8599_8630[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (17))){
var inst_8547 = (state_8581[(7)]);
var inst_8551 = cljs.core.chunk_first(inst_8547);
var inst_8552 = cljs.core.chunk_rest(inst_8547);
var inst_8553 = cljs.core.count(inst_8551);
var inst_8533 = inst_8552;
var inst_8534 = inst_8551;
var inst_8535 = inst_8553;
var inst_8536 = (0);
var state_8581__$1 = (function (){var statearr_8600 = state_8581;
(statearr_8600[(8)] = inst_8535);

(statearr_8600[(9)] = inst_8534);

(statearr_8600[(10)] = inst_8533);

(statearr_8600[(12)] = inst_8536);

return statearr_8600;
})();
var statearr_8601_8631 = state_8581__$1;
(statearr_8601_8631[(2)] = null);

(statearr_8601_8631[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (3))){
var inst_8579 = (state_8581[(2)]);
var state_8581__$1 = state_8581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8581__$1,inst_8579);
} else {
if((state_val_8582 === (12))){
var inst_8567 = (state_8581[(2)]);
var state_8581__$1 = state_8581;
var statearr_8602_8632 = state_8581__$1;
(statearr_8602_8632[(2)] = inst_8567);

(statearr_8602_8632[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (2))){
var state_8581__$1 = state_8581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8581__$1,(4),in$);
} else {
if((state_val_8582 === (23))){
var inst_8575 = (state_8581[(2)]);
var state_8581__$1 = state_8581;
var statearr_8603_8633 = state_8581__$1;
(statearr_8603_8633[(2)] = inst_8575);

(statearr_8603_8633[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (19))){
var inst_8562 = (state_8581[(2)]);
var state_8581__$1 = state_8581;
var statearr_8604_8634 = state_8581__$1;
(statearr_8604_8634[(2)] = inst_8562);

(statearr_8604_8634[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (11))){
var inst_8547 = (state_8581[(7)]);
var inst_8533 = (state_8581[(10)]);
var inst_8547__$1 = cljs.core.seq(inst_8533);
var state_8581__$1 = (function (){var statearr_8605 = state_8581;
(statearr_8605[(7)] = inst_8547__$1);

return statearr_8605;
})();
if(inst_8547__$1){
var statearr_8606_8635 = state_8581__$1;
(statearr_8606_8635[(1)] = (14));

} else {
var statearr_8607_8636 = state_8581__$1;
(statearr_8607_8636[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (9))){
var inst_8569 = (state_8581[(2)]);
var inst_8570 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_8581__$1 = (function (){var statearr_8608 = state_8581;
(statearr_8608[(15)] = inst_8569);

return statearr_8608;
})();
if(cljs.core.truth_(inst_8570)){
var statearr_8609_8637 = state_8581__$1;
(statearr_8609_8637[(1)] = (21));

} else {
var statearr_8610_8638 = state_8581__$1;
(statearr_8610_8638[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (5))){
var inst_8525 = cljs.core.async.close_BANG_(out);
var state_8581__$1 = state_8581;
var statearr_8611_8639 = state_8581__$1;
(statearr_8611_8639[(2)] = inst_8525);

(statearr_8611_8639[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (14))){
var inst_8547 = (state_8581[(7)]);
var inst_8549 = cljs.core.chunked_seq_QMARK_(inst_8547);
var state_8581__$1 = state_8581;
if(inst_8549){
var statearr_8612_8640 = state_8581__$1;
(statearr_8612_8640[(1)] = (17));

} else {
var statearr_8613_8641 = state_8581__$1;
(statearr_8613_8641[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (16))){
var inst_8565 = (state_8581[(2)]);
var state_8581__$1 = state_8581;
var statearr_8614_8642 = state_8581__$1;
(statearr_8614_8642[(2)] = inst_8565);

(statearr_8614_8642[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8582 === (10))){
var inst_8534 = (state_8581[(9)]);
var inst_8536 = (state_8581[(12)]);
var inst_8541 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8534,inst_8536);
var state_8581__$1 = state_8581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8581__$1,(13),out,inst_8541);
} else {
if((state_val_8582 === (18))){
var inst_8547 = (state_8581[(7)]);
var inst_8556 = cljs.core.first(inst_8547);
var state_8581__$1 = state_8581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8581__$1,(20),out,inst_8556);
} else {
if((state_val_8582 === (8))){
var inst_8535 = (state_8581[(8)]);
var inst_8536 = (state_8581[(12)]);
var inst_8538 = (inst_8536 < inst_8535);
var inst_8539 = inst_8538;
var state_8581__$1 = state_8581;
if(cljs.core.truth_(inst_8539)){
var statearr_8615_8643 = state_8581__$1;
(statearr_8615_8643[(1)] = (10));

} else {
var statearr_8616_8644 = state_8581__$1;
(statearr_8616_8644[(1)] = (11));

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
});})(c__6961__auto__))
;
return ((function (switch__6858__auto__,c__6961__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6859__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6859__auto____0 = (function (){
var statearr_8617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8617[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6859__auto__);

(statearr_8617[(1)] = (1));

return statearr_8617;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6859__auto____1 = (function (state_8581){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8581);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8618){if((e8618 instanceof Object)){
var ex__6862__auto__ = e8618;
var statearr_8619_8645 = state_8581;
(statearr_8619_8645[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8581);

return cljs.core.cst$kw$recur;
} else {
throw e8618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8646 = state_8581;
state_8581 = G__8646;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6859__auto__ = function(state_8581){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6859__auto____1.call(this,state_8581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6859__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6859__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__))
})();
var state__6963__auto__ = (function (){var statearr_8620 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8620[(6)] = c__6961__auto__);

return statearr_8620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__))
);

return c__6961__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8648 = arguments.length;
switch (G__8648) {
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
var G__8651 = arguments.length;
switch (G__8651) {
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
var G__8654 = arguments.length;
switch (G__8654) {
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
var c__6961__auto___8701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8701,out){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8701,out){
return (function (state_8678){
var state_val_8679 = (state_8678[(1)]);
if((state_val_8679 === (7))){
var inst_8673 = (state_8678[(2)]);
var state_8678__$1 = state_8678;
var statearr_8680_8702 = state_8678__$1;
(statearr_8680_8702[(2)] = inst_8673);

(statearr_8680_8702[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (1))){
var inst_8655 = null;
var state_8678__$1 = (function (){var statearr_8681 = state_8678;
(statearr_8681[(7)] = inst_8655);

return statearr_8681;
})();
var statearr_8682_8703 = state_8678__$1;
(statearr_8682_8703[(2)] = null);

(statearr_8682_8703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (4))){
var inst_8658 = (state_8678[(8)]);
var inst_8658__$1 = (state_8678[(2)]);
var inst_8659 = (inst_8658__$1 == null);
var inst_8660 = cljs.core.not(inst_8659);
var state_8678__$1 = (function (){var statearr_8683 = state_8678;
(statearr_8683[(8)] = inst_8658__$1);

return statearr_8683;
})();
if(inst_8660){
var statearr_8684_8704 = state_8678__$1;
(statearr_8684_8704[(1)] = (5));

} else {
var statearr_8685_8705 = state_8678__$1;
(statearr_8685_8705[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (6))){
var state_8678__$1 = state_8678;
var statearr_8686_8706 = state_8678__$1;
(statearr_8686_8706[(2)] = null);

(statearr_8686_8706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (3))){
var inst_8675 = (state_8678[(2)]);
var inst_8676 = cljs.core.async.close_BANG_(out);
var state_8678__$1 = (function (){var statearr_8687 = state_8678;
(statearr_8687[(9)] = inst_8675);

return statearr_8687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8678__$1,inst_8676);
} else {
if((state_val_8679 === (2))){
var state_8678__$1 = state_8678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8678__$1,(4),ch);
} else {
if((state_val_8679 === (11))){
var inst_8658 = (state_8678[(8)]);
var inst_8667 = (state_8678[(2)]);
var inst_8655 = inst_8658;
var state_8678__$1 = (function (){var statearr_8688 = state_8678;
(statearr_8688[(7)] = inst_8655);

(statearr_8688[(10)] = inst_8667);

return statearr_8688;
})();
var statearr_8689_8707 = state_8678__$1;
(statearr_8689_8707[(2)] = null);

(statearr_8689_8707[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (9))){
var inst_8658 = (state_8678[(8)]);
var state_8678__$1 = state_8678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8678__$1,(11),out,inst_8658);
} else {
if((state_val_8679 === (5))){
var inst_8655 = (state_8678[(7)]);
var inst_8658 = (state_8678[(8)]);
var inst_8662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8658,inst_8655);
var state_8678__$1 = state_8678;
if(inst_8662){
var statearr_8691_8708 = state_8678__$1;
(statearr_8691_8708[(1)] = (8));

} else {
var statearr_8692_8709 = state_8678__$1;
(statearr_8692_8709[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (10))){
var inst_8670 = (state_8678[(2)]);
var state_8678__$1 = state_8678;
var statearr_8693_8710 = state_8678__$1;
(statearr_8693_8710[(2)] = inst_8670);

(statearr_8693_8710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8679 === (8))){
var inst_8655 = (state_8678[(7)]);
var tmp8690 = inst_8655;
var inst_8655__$1 = tmp8690;
var state_8678__$1 = (function (){var statearr_8694 = state_8678;
(statearr_8694[(7)] = inst_8655__$1);

return statearr_8694;
})();
var statearr_8695_8711 = state_8678__$1;
(statearr_8695_8711[(2)] = null);

(statearr_8695_8711[(1)] = (2));


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
});})(c__6961__auto___8701,out))
;
return ((function (switch__6858__auto__,c__6961__auto___8701,out){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8696[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8696[(1)] = (1));

return statearr_8696;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8678){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8678);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8697){if((e8697 instanceof Object)){
var ex__6862__auto__ = e8697;
var statearr_8698_8712 = state_8678;
(statearr_8698_8712[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8678);

return cljs.core.cst$kw$recur;
} else {
throw e8697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8713 = state_8678;
state_8678 = G__8713;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8701,out))
})();
var state__6963__auto__ = (function (){var statearr_8699 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8699[(6)] = c__6961__auto___8701);

return statearr_8699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8701,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8715 = arguments.length;
switch (G__8715) {
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
var c__6961__auto___8781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8781,out){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8781,out){
return (function (state_8753){
var state_val_8754 = (state_8753[(1)]);
if((state_val_8754 === (7))){
var inst_8749 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8755_8782 = state_8753__$1;
(statearr_8755_8782[(2)] = inst_8749);

(statearr_8755_8782[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (1))){
var inst_8716 = (new Array(n));
var inst_8717 = inst_8716;
var inst_8718 = (0);
var state_8753__$1 = (function (){var statearr_8756 = state_8753;
(statearr_8756[(7)] = inst_8717);

(statearr_8756[(8)] = inst_8718);

return statearr_8756;
})();
var statearr_8757_8783 = state_8753__$1;
(statearr_8757_8783[(2)] = null);

(statearr_8757_8783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (4))){
var inst_8721 = (state_8753[(9)]);
var inst_8721__$1 = (state_8753[(2)]);
var inst_8722 = (inst_8721__$1 == null);
var inst_8723 = cljs.core.not(inst_8722);
var state_8753__$1 = (function (){var statearr_8758 = state_8753;
(statearr_8758[(9)] = inst_8721__$1);

return statearr_8758;
})();
if(inst_8723){
var statearr_8759_8784 = state_8753__$1;
(statearr_8759_8784[(1)] = (5));

} else {
var statearr_8760_8785 = state_8753__$1;
(statearr_8760_8785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (15))){
var inst_8743 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8761_8786 = state_8753__$1;
(statearr_8761_8786[(2)] = inst_8743);

(statearr_8761_8786[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (13))){
var state_8753__$1 = state_8753;
var statearr_8762_8787 = state_8753__$1;
(statearr_8762_8787[(2)] = null);

(statearr_8762_8787[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (6))){
var inst_8718 = (state_8753[(8)]);
var inst_8739 = (inst_8718 > (0));
var state_8753__$1 = state_8753;
if(cljs.core.truth_(inst_8739)){
var statearr_8763_8788 = state_8753__$1;
(statearr_8763_8788[(1)] = (12));

} else {
var statearr_8764_8789 = state_8753__$1;
(statearr_8764_8789[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (3))){
var inst_8751 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8753__$1,inst_8751);
} else {
if((state_val_8754 === (12))){
var inst_8717 = (state_8753[(7)]);
var inst_8741 = cljs.core.vec(inst_8717);
var state_8753__$1 = state_8753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8753__$1,(15),out,inst_8741);
} else {
if((state_val_8754 === (2))){
var state_8753__$1 = state_8753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8753__$1,(4),ch);
} else {
if((state_val_8754 === (11))){
var inst_8733 = (state_8753[(2)]);
var inst_8734 = (new Array(n));
var inst_8717 = inst_8734;
var inst_8718 = (0);
var state_8753__$1 = (function (){var statearr_8765 = state_8753;
(statearr_8765[(7)] = inst_8717);

(statearr_8765[(8)] = inst_8718);

(statearr_8765[(10)] = inst_8733);

return statearr_8765;
})();
var statearr_8766_8790 = state_8753__$1;
(statearr_8766_8790[(2)] = null);

(statearr_8766_8790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (9))){
var inst_8717 = (state_8753[(7)]);
var inst_8731 = cljs.core.vec(inst_8717);
var state_8753__$1 = state_8753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8753__$1,(11),out,inst_8731);
} else {
if((state_val_8754 === (5))){
var inst_8721 = (state_8753[(9)]);
var inst_8726 = (state_8753[(11)]);
var inst_8717 = (state_8753[(7)]);
var inst_8718 = (state_8753[(8)]);
var inst_8725 = (inst_8717[inst_8718] = inst_8721);
var inst_8726__$1 = (inst_8718 + (1));
var inst_8727 = (inst_8726__$1 < n);
var state_8753__$1 = (function (){var statearr_8767 = state_8753;
(statearr_8767[(11)] = inst_8726__$1);

(statearr_8767[(12)] = inst_8725);

return statearr_8767;
})();
if(cljs.core.truth_(inst_8727)){
var statearr_8768_8791 = state_8753__$1;
(statearr_8768_8791[(1)] = (8));

} else {
var statearr_8769_8792 = state_8753__$1;
(statearr_8769_8792[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (14))){
var inst_8746 = (state_8753[(2)]);
var inst_8747 = cljs.core.async.close_BANG_(out);
var state_8753__$1 = (function (){var statearr_8771 = state_8753;
(statearr_8771[(13)] = inst_8746);

return statearr_8771;
})();
var statearr_8772_8793 = state_8753__$1;
(statearr_8772_8793[(2)] = inst_8747);

(statearr_8772_8793[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (10))){
var inst_8737 = (state_8753[(2)]);
var state_8753__$1 = state_8753;
var statearr_8773_8794 = state_8753__$1;
(statearr_8773_8794[(2)] = inst_8737);

(statearr_8773_8794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8754 === (8))){
var inst_8726 = (state_8753[(11)]);
var inst_8717 = (state_8753[(7)]);
var tmp8770 = inst_8717;
var inst_8717__$1 = tmp8770;
var inst_8718 = inst_8726;
var state_8753__$1 = (function (){var statearr_8774 = state_8753;
(statearr_8774[(7)] = inst_8717__$1);

(statearr_8774[(8)] = inst_8718);

return statearr_8774;
})();
var statearr_8775_8795 = state_8753__$1;
(statearr_8775_8795[(2)] = null);

(statearr_8775_8795[(1)] = (2));


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
});})(c__6961__auto___8781,out))
;
return ((function (switch__6858__auto__,c__6961__auto___8781,out){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8776[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8776[(1)] = (1));

return statearr_8776;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8753){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8753);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8777){if((e8777 instanceof Object)){
var ex__6862__auto__ = e8777;
var statearr_8778_8796 = state_8753;
(statearr_8778_8796[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8753);

return cljs.core.cst$kw$recur;
} else {
throw e8777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8797 = state_8753;
state_8753 = G__8797;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8781,out))
})();
var state__6963__auto__ = (function (){var statearr_8779 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8779[(6)] = c__6961__auto___8781);

return statearr_8779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8781,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8799 = arguments.length;
switch (G__8799) {
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
var c__6961__auto___8869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___8869,out){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___8869,out){
return (function (state_8841){
var state_val_8842 = (state_8841[(1)]);
if((state_val_8842 === (7))){
var inst_8837 = (state_8841[(2)]);
var state_8841__$1 = state_8841;
var statearr_8843_8870 = state_8841__$1;
(statearr_8843_8870[(2)] = inst_8837);

(statearr_8843_8870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (1))){
var inst_8800 = [];
var inst_8801 = inst_8800;
var inst_8802 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_8841__$1 = (function (){var statearr_8844 = state_8841;
(statearr_8844[(7)] = inst_8801);

(statearr_8844[(8)] = inst_8802);

return statearr_8844;
})();
var statearr_8845_8871 = state_8841__$1;
(statearr_8845_8871[(2)] = null);

(statearr_8845_8871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (4))){
var inst_8805 = (state_8841[(9)]);
var inst_8805__$1 = (state_8841[(2)]);
var inst_8806 = (inst_8805__$1 == null);
var inst_8807 = cljs.core.not(inst_8806);
var state_8841__$1 = (function (){var statearr_8846 = state_8841;
(statearr_8846[(9)] = inst_8805__$1);

return statearr_8846;
})();
if(inst_8807){
var statearr_8847_8872 = state_8841__$1;
(statearr_8847_8872[(1)] = (5));

} else {
var statearr_8848_8873 = state_8841__$1;
(statearr_8848_8873[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (15))){
var inst_8831 = (state_8841[(2)]);
var state_8841__$1 = state_8841;
var statearr_8849_8874 = state_8841__$1;
(statearr_8849_8874[(2)] = inst_8831);

(statearr_8849_8874[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (13))){
var state_8841__$1 = state_8841;
var statearr_8850_8875 = state_8841__$1;
(statearr_8850_8875[(2)] = null);

(statearr_8850_8875[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (6))){
var inst_8801 = (state_8841[(7)]);
var inst_8826 = inst_8801.length;
var inst_8827 = (inst_8826 > (0));
var state_8841__$1 = state_8841;
if(cljs.core.truth_(inst_8827)){
var statearr_8851_8876 = state_8841__$1;
(statearr_8851_8876[(1)] = (12));

} else {
var statearr_8852_8877 = state_8841__$1;
(statearr_8852_8877[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (3))){
var inst_8839 = (state_8841[(2)]);
var state_8841__$1 = state_8841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8841__$1,inst_8839);
} else {
if((state_val_8842 === (12))){
var inst_8801 = (state_8841[(7)]);
var inst_8829 = cljs.core.vec(inst_8801);
var state_8841__$1 = state_8841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8841__$1,(15),out,inst_8829);
} else {
if((state_val_8842 === (2))){
var state_8841__$1 = state_8841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8841__$1,(4),ch);
} else {
if((state_val_8842 === (11))){
var inst_8809 = (state_8841[(10)]);
var inst_8805 = (state_8841[(9)]);
var inst_8819 = (state_8841[(2)]);
var inst_8820 = [];
var inst_8821 = inst_8820.push(inst_8805);
var inst_8801 = inst_8820;
var inst_8802 = inst_8809;
var state_8841__$1 = (function (){var statearr_8853 = state_8841;
(statearr_8853[(11)] = inst_8821);

(statearr_8853[(7)] = inst_8801);

(statearr_8853[(8)] = inst_8802);

(statearr_8853[(12)] = inst_8819);

return statearr_8853;
})();
var statearr_8854_8878 = state_8841__$1;
(statearr_8854_8878[(2)] = null);

(statearr_8854_8878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (9))){
var inst_8801 = (state_8841[(7)]);
var inst_8817 = cljs.core.vec(inst_8801);
var state_8841__$1 = state_8841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8841__$1,(11),out,inst_8817);
} else {
if((state_val_8842 === (5))){
var inst_8809 = (state_8841[(10)]);
var inst_8805 = (state_8841[(9)]);
var inst_8802 = (state_8841[(8)]);
var inst_8809__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_8805) : f.call(null,inst_8805));
var inst_8810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8809__$1,inst_8802);
var inst_8811 = cljs.core.keyword_identical_QMARK_(inst_8802,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_8812 = ((inst_8810) || (inst_8811));
var state_8841__$1 = (function (){var statearr_8855 = state_8841;
(statearr_8855[(10)] = inst_8809__$1);

return statearr_8855;
})();
if(cljs.core.truth_(inst_8812)){
var statearr_8856_8879 = state_8841__$1;
(statearr_8856_8879[(1)] = (8));

} else {
var statearr_8857_8880 = state_8841__$1;
(statearr_8857_8880[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (14))){
var inst_8834 = (state_8841[(2)]);
var inst_8835 = cljs.core.async.close_BANG_(out);
var state_8841__$1 = (function (){var statearr_8859 = state_8841;
(statearr_8859[(13)] = inst_8834);

return statearr_8859;
})();
var statearr_8860_8881 = state_8841__$1;
(statearr_8860_8881[(2)] = inst_8835);

(statearr_8860_8881[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (10))){
var inst_8824 = (state_8841[(2)]);
var state_8841__$1 = state_8841;
var statearr_8861_8882 = state_8841__$1;
(statearr_8861_8882[(2)] = inst_8824);

(statearr_8861_8882[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8842 === (8))){
var inst_8809 = (state_8841[(10)]);
var inst_8805 = (state_8841[(9)]);
var inst_8801 = (state_8841[(7)]);
var inst_8814 = inst_8801.push(inst_8805);
var tmp8858 = inst_8801;
var inst_8801__$1 = tmp8858;
var inst_8802 = inst_8809;
var state_8841__$1 = (function (){var statearr_8862 = state_8841;
(statearr_8862[(14)] = inst_8814);

(statearr_8862[(7)] = inst_8801__$1);

(statearr_8862[(8)] = inst_8802);

return statearr_8862;
})();
var statearr_8863_8883 = state_8841__$1;
(statearr_8863_8883[(2)] = null);

(statearr_8863_8883[(1)] = (2));


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
});})(c__6961__auto___8869,out))
;
return ((function (switch__6858__auto__,c__6961__auto___8869,out){
return (function() {
var cljs$core$async$state_machine__6859__auto__ = null;
var cljs$core$async$state_machine__6859__auto____0 = (function (){
var statearr_8864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8864[(0)] = cljs$core$async$state_machine__6859__auto__);

(statearr_8864[(1)] = (1));

return statearr_8864;
});
var cljs$core$async$state_machine__6859__auto____1 = (function (state_8841){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_8841);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e8865){if((e8865 instanceof Object)){
var ex__6862__auto__ = e8865;
var statearr_8866_8884 = state_8841;
(statearr_8866_8884[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8841);

return cljs.core.cst$kw$recur;
} else {
throw e8865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__8885 = state_8841;
state_8841 = G__8885;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
cljs$core$async$state_machine__6859__auto__ = function(state_8841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6859__auto____1.call(this,state_8841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6859__auto____0;
cljs$core$async$state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6859__auto____1;
return cljs$core$async$state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___8869,out))
})();
var state__6963__auto__ = (function (){var statearr_8867 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_8867[(6)] = c__6961__auto___8869);

return statearr_8867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___8869,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

