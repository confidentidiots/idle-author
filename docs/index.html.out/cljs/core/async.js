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
var G__12585 = arguments.length;
switch (G__12585) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12586 = (function (f,blockable,meta12587){
this.f = f;
this.blockable = blockable;
this.meta12587 = meta12587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12588,meta12587__$1){
var self__ = this;
var _12588__$1 = this;
return (new cljs.core.async.t_cljs$core$async12586(self__.f,self__.blockable,meta12587__$1));
});

cljs.core.async.t_cljs$core$async12586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12588){
var self__ = this;
var _12588__$1 = this;
return self__.meta12587;
});

cljs.core.async.t_cljs$core$async12586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12587], null);
});

cljs.core.async.t_cljs$core$async12586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12586";

cljs.core.async.t_cljs$core$async12586.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12586");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12586.
 */
cljs.core.async.__GT_t_cljs$core$async12586 = (function cljs$core$async$__GT_t_cljs$core$async12586(f__$1,blockable__$1,meta12587){
return (new cljs.core.async.t_cljs$core$async12586(f__$1,blockable__$1,meta12587));
});

}

return (new cljs.core.async.t_cljs$core$async12586(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12592 = arguments.length;
switch (G__12592) {
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
var G__12595 = arguments.length;
switch (G__12595) {
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
var G__12598 = arguments.length;
switch (G__12598) {
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
var val_12600 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12600) : fn1.call(null,val_12600));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12600,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12600) : fn1.call(null,val_12600));
});})(val_12600,ret))
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
var G__12602 = arguments.length;
switch (G__12602) {
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
var n__4408__auto___12604 = n;
var x_12605 = (0);
while(true){
if((x_12605 < n__4408__auto___12604)){
(a[x_12605] = (0));

var G__12606 = (x_12605 + (1));
x_12605 = G__12606;
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

var G__12607 = (i + (1));
i = G__12607;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12608 = (function (flag,meta12609){
this.flag = flag;
this.meta12609 = meta12609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12610,meta12609__$1){
var self__ = this;
var _12610__$1 = this;
return (new cljs.core.async.t_cljs$core$async12608(self__.flag,meta12609__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12610){
var self__ = this;
var _12610__$1 = this;
return self__.meta12609;
});})(flag))
;

cljs.core.async.t_cljs$core$async12608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12608.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta12609], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12608";

cljs.core.async.t_cljs$core$async12608.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12608");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12608.
 */
cljs.core.async.__GT_t_cljs$core$async12608 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12608(flag__$1,meta12609){
return (new cljs.core.async.t_cljs$core$async12608(flag__$1,meta12609));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12608(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12611 = (function (flag,cb,meta12612){
this.flag = flag;
this.cb = cb;
this.meta12612 = meta12612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12613,meta12612__$1){
var self__ = this;
var _12613__$1 = this;
return (new cljs.core.async.t_cljs$core$async12611(self__.flag,self__.cb,meta12612__$1));
});

cljs.core.async.t_cljs$core$async12611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12613){
var self__ = this;
var _12613__$1 = this;
return self__.meta12612;
});

cljs.core.async.t_cljs$core$async12611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async12611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta12612], null);
});

cljs.core.async.t_cljs$core$async12611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12611";

cljs.core.async.t_cljs$core$async12611.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async12611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12611.
 */
cljs.core.async.__GT_t_cljs$core$async12611 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12611(flag__$1,cb__$1,meta12612){
return (new cljs.core.async.t_cljs$core$async12611(flag__$1,cb__$1,meta12612));
});

}

return (new cljs.core.async.t_cljs$core$async12611(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12614_SHARP_){
var G__12616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12614_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12616) : fret.call(null,G__12616));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12615_SHARP_){
var G__12617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12615_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12617) : fret.call(null,G__12617));
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
var G__12618 = (i + (1));
i = G__12618;
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
var len__4531__auto___12624 = arguments.length;
var i__4532__auto___12625 = (0);
while(true){
if((i__4532__auto___12625 < len__4531__auto___12624)){
args__4534__auto__.push((arguments[i__4532__auto___12625]));

var G__12626 = (i__4532__auto___12625 + (1));
i__4532__auto___12625 = G__12626;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12621){
var map__12622 = p__12621;
var map__12622__$1 = ((((!((map__12622 == null)))?(((((map__12622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12622):map__12622);
var opts = map__12622__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12619){
var G__12620 = cljs.core.first(seq12619);
var seq12619__$1 = cljs.core.next(seq12619);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12620,seq12619__$1);
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
var G__12628 = arguments.length;
switch (G__12628) {
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
var c__12525__auto___12674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___12674){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___12674){
return (function (state_12652){
var state_val_12653 = (state_12652[(1)]);
if((state_val_12653 === (7))){
var inst_12648 = (state_12652[(2)]);
var state_12652__$1 = state_12652;
var statearr_12654_12675 = state_12652__$1;
(statearr_12654_12675[(2)] = inst_12648);

(statearr_12654_12675[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (1))){
var state_12652__$1 = state_12652;
var statearr_12655_12676 = state_12652__$1;
(statearr_12655_12676[(2)] = null);

(statearr_12655_12676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (4))){
var inst_12631 = (state_12652[(7)]);
var inst_12631__$1 = (state_12652[(2)]);
var inst_12632 = (inst_12631__$1 == null);
var state_12652__$1 = (function (){var statearr_12656 = state_12652;
(statearr_12656[(7)] = inst_12631__$1);

return statearr_12656;
})();
if(cljs.core.truth_(inst_12632)){
var statearr_12657_12677 = state_12652__$1;
(statearr_12657_12677[(1)] = (5));

} else {
var statearr_12658_12678 = state_12652__$1;
(statearr_12658_12678[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (13))){
var state_12652__$1 = state_12652;
var statearr_12659_12679 = state_12652__$1;
(statearr_12659_12679[(2)] = null);

(statearr_12659_12679[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (6))){
var inst_12631 = (state_12652[(7)]);
var state_12652__$1 = state_12652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12652__$1,(11),to,inst_12631);
} else {
if((state_val_12653 === (3))){
var inst_12650 = (state_12652[(2)]);
var state_12652__$1 = state_12652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12652__$1,inst_12650);
} else {
if((state_val_12653 === (12))){
var state_12652__$1 = state_12652;
var statearr_12660_12680 = state_12652__$1;
(statearr_12660_12680[(2)] = null);

(statearr_12660_12680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (2))){
var state_12652__$1 = state_12652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12652__$1,(4),from);
} else {
if((state_val_12653 === (11))){
var inst_12641 = (state_12652[(2)]);
var state_12652__$1 = state_12652;
if(cljs.core.truth_(inst_12641)){
var statearr_12661_12681 = state_12652__$1;
(statearr_12661_12681[(1)] = (12));

} else {
var statearr_12662_12682 = state_12652__$1;
(statearr_12662_12682[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (9))){
var state_12652__$1 = state_12652;
var statearr_12663_12683 = state_12652__$1;
(statearr_12663_12683[(2)] = null);

(statearr_12663_12683[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (5))){
var state_12652__$1 = state_12652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12664_12684 = state_12652__$1;
(statearr_12664_12684[(1)] = (8));

} else {
var statearr_12665_12685 = state_12652__$1;
(statearr_12665_12685[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (14))){
var inst_12646 = (state_12652[(2)]);
var state_12652__$1 = state_12652;
var statearr_12666_12686 = state_12652__$1;
(statearr_12666_12686[(2)] = inst_12646);

(statearr_12666_12686[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (10))){
var inst_12638 = (state_12652[(2)]);
var state_12652__$1 = state_12652;
var statearr_12667_12687 = state_12652__$1;
(statearr_12667_12687[(2)] = inst_12638);

(statearr_12667_12687[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12653 === (8))){
var inst_12635 = cljs.core.async.close_BANG_(to);
var state_12652__$1 = state_12652;
var statearr_12668_12688 = state_12652__$1;
(statearr_12668_12688[(2)] = inst_12635);

(statearr_12668_12688[(1)] = (10));


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
});})(c__12525__auto___12674))
;
return ((function (switch__12422__auto__,c__12525__auto___12674){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_12669 = [null,null,null,null,null,null,null,null];
(statearr_12669[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_12669[(1)] = (1));

return statearr_12669;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_12652){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12652);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12670){if((e12670 instanceof Object)){
var ex__12426__auto__ = e12670;
var statearr_12671_12689 = state_12652;
(statearr_12671_12689[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12652);

return cljs.core.cst$kw$recur;
} else {
throw e12670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12690 = state_12652;
state_12652 = G__12690;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_12652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_12652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___12674))
})();
var state__12527__auto__ = (function (){var statearr_12672 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12672[(6)] = c__12525__auto___12674);

return statearr_12672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___12674))
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
return (function (p__12691){
var vec__12692 = p__12691;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(1),null);
var job = vec__12692;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12525__auto___12863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___12863,res,vec__12692,v,p,job,jobs,results){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___12863,res,vec__12692,v,p,job,jobs,results){
return (function (state_12699){
var state_val_12700 = (state_12699[(1)]);
if((state_val_12700 === (1))){
var state_12699__$1 = state_12699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12699__$1,(2),res,v);
} else {
if((state_val_12700 === (2))){
var inst_12696 = (state_12699[(2)]);
var inst_12697 = cljs.core.async.close_BANG_(res);
var state_12699__$1 = (function (){var statearr_12701 = state_12699;
(statearr_12701[(7)] = inst_12696);

return statearr_12701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12699__$1,inst_12697);
} else {
return null;
}
}
});})(c__12525__auto___12863,res,vec__12692,v,p,job,jobs,results))
;
return ((function (switch__12422__auto__,c__12525__auto___12863,res,vec__12692,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0 = (function (){
var statearr_12702 = [null,null,null,null,null,null,null,null];
(statearr_12702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__);

(statearr_12702[(1)] = (1));

return statearr_12702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1 = (function (state_12699){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12699);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12703){if((e12703 instanceof Object)){
var ex__12426__auto__ = e12703;
var statearr_12704_12864 = state_12699;
(statearr_12704_12864[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12699);

return cljs.core.cst$kw$recur;
} else {
throw e12703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12865 = state_12699;
state_12699 = G__12865;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = function(state_12699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1.call(this,state_12699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___12863,res,vec__12692,v,p,job,jobs,results))
})();
var state__12527__auto__ = (function (){var statearr_12705 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12705[(6)] = c__12525__auto___12863);

return statearr_12705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___12863,res,vec__12692,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12706){
var vec__12707 = p__12706;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12707,(1),null);
var job = vec__12707;
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
var n__4408__auto___12866 = n;
var __12867 = (0);
while(true){
if((__12867 < n__4408__auto___12866)){
var G__12710_12868 = type;
var G__12710_12869__$1 = (((G__12710_12868 instanceof cljs.core.Keyword))?G__12710_12868.fqn:null);
switch (G__12710_12869__$1) {
case "compute":
var c__12525__auto___12871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12867,c__12525__auto___12871,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (__12867,c__12525__auto___12871,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async){
return (function (state_12723){
var state_val_12724 = (state_12723[(1)]);
if((state_val_12724 === (1))){
var state_12723__$1 = state_12723;
var statearr_12725_12872 = state_12723__$1;
(statearr_12725_12872[(2)] = null);

(statearr_12725_12872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12724 === (2))){
var state_12723__$1 = state_12723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12723__$1,(4),jobs);
} else {
if((state_val_12724 === (3))){
var inst_12721 = (state_12723[(2)]);
var state_12723__$1 = state_12723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12723__$1,inst_12721);
} else {
if((state_val_12724 === (4))){
var inst_12713 = (state_12723[(2)]);
var inst_12714 = process(inst_12713);
var state_12723__$1 = state_12723;
if(cljs.core.truth_(inst_12714)){
var statearr_12726_12873 = state_12723__$1;
(statearr_12726_12873[(1)] = (5));

} else {
var statearr_12727_12874 = state_12723__$1;
(statearr_12727_12874[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12724 === (5))){
var state_12723__$1 = state_12723;
var statearr_12728_12875 = state_12723__$1;
(statearr_12728_12875[(2)] = null);

(statearr_12728_12875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12724 === (6))){
var state_12723__$1 = state_12723;
var statearr_12729_12876 = state_12723__$1;
(statearr_12729_12876[(2)] = null);

(statearr_12729_12876[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12724 === (7))){
var inst_12719 = (state_12723[(2)]);
var state_12723__$1 = state_12723;
var statearr_12730_12877 = state_12723__$1;
(statearr_12730_12877[(2)] = inst_12719);

(statearr_12730_12877[(1)] = (3));


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
});})(__12867,c__12525__auto___12871,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async))
;
return ((function (__12867,switch__12422__auto__,c__12525__auto___12871,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0 = (function (){
var statearr_12731 = [null,null,null,null,null,null,null];
(statearr_12731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__);

(statearr_12731[(1)] = (1));

return statearr_12731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1 = (function (state_12723){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12723);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12732){if((e12732 instanceof Object)){
var ex__12426__auto__ = e12732;
var statearr_12733_12878 = state_12723;
(statearr_12733_12878[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12723);

return cljs.core.cst$kw$recur;
} else {
throw e12732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12879 = state_12723;
state_12723 = G__12879;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = function(state_12723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1.call(this,state_12723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__;
})()
;})(__12867,switch__12422__auto__,c__12525__auto___12871,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async))
})();
var state__12527__auto__ = (function (){var statearr_12734 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12734[(6)] = c__12525__auto___12871);

return statearr_12734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(__12867,c__12525__auto___12871,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async))
);


break;
case "async":
var c__12525__auto___12880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12867,c__12525__auto___12880,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (__12867,c__12525__auto___12880,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async){
return (function (state_12747){
var state_val_12748 = (state_12747[(1)]);
if((state_val_12748 === (1))){
var state_12747__$1 = state_12747;
var statearr_12749_12881 = state_12747__$1;
(statearr_12749_12881[(2)] = null);

(statearr_12749_12881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12748 === (2))){
var state_12747__$1 = state_12747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12747__$1,(4),jobs);
} else {
if((state_val_12748 === (3))){
var inst_12745 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12747__$1,inst_12745);
} else {
if((state_val_12748 === (4))){
var inst_12737 = (state_12747[(2)]);
var inst_12738 = async(inst_12737);
var state_12747__$1 = state_12747;
if(cljs.core.truth_(inst_12738)){
var statearr_12750_12882 = state_12747__$1;
(statearr_12750_12882[(1)] = (5));

} else {
var statearr_12751_12883 = state_12747__$1;
(statearr_12751_12883[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12748 === (5))){
var state_12747__$1 = state_12747;
var statearr_12752_12884 = state_12747__$1;
(statearr_12752_12884[(2)] = null);

(statearr_12752_12884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12748 === (6))){
var state_12747__$1 = state_12747;
var statearr_12753_12885 = state_12747__$1;
(statearr_12753_12885[(2)] = null);

(statearr_12753_12885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12748 === (7))){
var inst_12743 = (state_12747[(2)]);
var state_12747__$1 = state_12747;
var statearr_12754_12886 = state_12747__$1;
(statearr_12754_12886[(2)] = inst_12743);

(statearr_12754_12886[(1)] = (3));


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
});})(__12867,c__12525__auto___12880,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async))
;
return ((function (__12867,switch__12422__auto__,c__12525__auto___12880,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0 = (function (){
var statearr_12755 = [null,null,null,null,null,null,null];
(statearr_12755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__);

(statearr_12755[(1)] = (1));

return statearr_12755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1 = (function (state_12747){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12747);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12756){if((e12756 instanceof Object)){
var ex__12426__auto__ = e12756;
var statearr_12757_12887 = state_12747;
(statearr_12757_12887[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12747);

return cljs.core.cst$kw$recur;
} else {
throw e12756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12888 = state_12747;
state_12747 = G__12888;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = function(state_12747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1.call(this,state_12747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__;
})()
;})(__12867,switch__12422__auto__,c__12525__auto___12880,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async))
})();
var state__12527__auto__ = (function (){var statearr_12758 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12758[(6)] = c__12525__auto___12880);

return statearr_12758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(__12867,c__12525__auto___12880,G__12710_12868,G__12710_12869__$1,n__4408__auto___12866,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12710_12869__$1)].join('')));

}

var G__12889 = (__12867 + (1));
__12867 = G__12889;
continue;
} else {
}
break;
}

var c__12525__auto___12890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___12890,jobs,results,process,async){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___12890,jobs,results,process,async){
return (function (state_12780){
var state_val_12781 = (state_12780[(1)]);
if((state_val_12781 === (1))){
var state_12780__$1 = state_12780;
var statearr_12782_12891 = state_12780__$1;
(statearr_12782_12891[(2)] = null);

(statearr_12782_12891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12781 === (2))){
var state_12780__$1 = state_12780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12780__$1,(4),from);
} else {
if((state_val_12781 === (3))){
var inst_12778 = (state_12780[(2)]);
var state_12780__$1 = state_12780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12780__$1,inst_12778);
} else {
if((state_val_12781 === (4))){
var inst_12761 = (state_12780[(7)]);
var inst_12761__$1 = (state_12780[(2)]);
var inst_12762 = (inst_12761__$1 == null);
var state_12780__$1 = (function (){var statearr_12783 = state_12780;
(statearr_12783[(7)] = inst_12761__$1);

return statearr_12783;
})();
if(cljs.core.truth_(inst_12762)){
var statearr_12784_12892 = state_12780__$1;
(statearr_12784_12892[(1)] = (5));

} else {
var statearr_12785_12893 = state_12780__$1;
(statearr_12785_12893[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12781 === (5))){
var inst_12764 = cljs.core.async.close_BANG_(jobs);
var state_12780__$1 = state_12780;
var statearr_12786_12894 = state_12780__$1;
(statearr_12786_12894[(2)] = inst_12764);

(statearr_12786_12894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12781 === (6))){
var inst_12766 = (state_12780[(8)]);
var inst_12761 = (state_12780[(7)]);
var inst_12766__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12768 = [inst_12761,inst_12766__$1];
var inst_12769 = (new cljs.core.PersistentVector(null,2,(5),inst_12767,inst_12768,null));
var state_12780__$1 = (function (){var statearr_12787 = state_12780;
(statearr_12787[(8)] = inst_12766__$1);

return statearr_12787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12780__$1,(8),jobs,inst_12769);
} else {
if((state_val_12781 === (7))){
var inst_12776 = (state_12780[(2)]);
var state_12780__$1 = state_12780;
var statearr_12788_12895 = state_12780__$1;
(statearr_12788_12895[(2)] = inst_12776);

(statearr_12788_12895[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12781 === (8))){
var inst_12766 = (state_12780[(8)]);
var inst_12771 = (state_12780[(2)]);
var state_12780__$1 = (function (){var statearr_12789 = state_12780;
(statearr_12789[(9)] = inst_12771);

return statearr_12789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12780__$1,(9),results,inst_12766);
} else {
if((state_val_12781 === (9))){
var inst_12773 = (state_12780[(2)]);
var state_12780__$1 = (function (){var statearr_12790 = state_12780;
(statearr_12790[(10)] = inst_12773);

return statearr_12790;
})();
var statearr_12791_12896 = state_12780__$1;
(statearr_12791_12896[(2)] = null);

(statearr_12791_12896[(1)] = (2));


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
});})(c__12525__auto___12890,jobs,results,process,async))
;
return ((function (switch__12422__auto__,c__12525__auto___12890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0 = (function (){
var statearr_12792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__);

(statearr_12792[(1)] = (1));

return statearr_12792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1 = (function (state_12780){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12780);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12793){if((e12793 instanceof Object)){
var ex__12426__auto__ = e12793;
var statearr_12794_12897 = state_12780;
(statearr_12794_12897[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12780);

return cljs.core.cst$kw$recur;
} else {
throw e12793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12898 = state_12780;
state_12780 = G__12898;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = function(state_12780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1.call(this,state_12780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___12890,jobs,results,process,async))
})();
var state__12527__auto__ = (function (){var statearr_12795 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12795[(6)] = c__12525__auto___12890);

return statearr_12795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___12890,jobs,results,process,async))
);


var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__,jobs,results,process,async){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__,jobs,results,process,async){
return (function (state_12833){
var state_val_12834 = (state_12833[(1)]);
if((state_val_12834 === (7))){
var inst_12829 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
var statearr_12835_12899 = state_12833__$1;
(statearr_12835_12899[(2)] = inst_12829);

(statearr_12835_12899[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (20))){
var state_12833__$1 = state_12833;
var statearr_12836_12900 = state_12833__$1;
(statearr_12836_12900[(2)] = null);

(statearr_12836_12900[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (1))){
var state_12833__$1 = state_12833;
var statearr_12837_12901 = state_12833__$1;
(statearr_12837_12901[(2)] = null);

(statearr_12837_12901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (4))){
var inst_12798 = (state_12833[(7)]);
var inst_12798__$1 = (state_12833[(2)]);
var inst_12799 = (inst_12798__$1 == null);
var state_12833__$1 = (function (){var statearr_12838 = state_12833;
(statearr_12838[(7)] = inst_12798__$1);

return statearr_12838;
})();
if(cljs.core.truth_(inst_12799)){
var statearr_12839_12902 = state_12833__$1;
(statearr_12839_12902[(1)] = (5));

} else {
var statearr_12840_12903 = state_12833__$1;
(statearr_12840_12903[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (15))){
var inst_12811 = (state_12833[(8)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12833__$1,(18),to,inst_12811);
} else {
if((state_val_12834 === (21))){
var inst_12824 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
var statearr_12841_12904 = state_12833__$1;
(statearr_12841_12904[(2)] = inst_12824);

(statearr_12841_12904[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (13))){
var inst_12826 = (state_12833[(2)]);
var state_12833__$1 = (function (){var statearr_12842 = state_12833;
(statearr_12842[(9)] = inst_12826);

return statearr_12842;
})();
var statearr_12843_12905 = state_12833__$1;
(statearr_12843_12905[(2)] = null);

(statearr_12843_12905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (6))){
var inst_12798 = (state_12833[(7)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12833__$1,(11),inst_12798);
} else {
if((state_val_12834 === (17))){
var inst_12819 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
if(cljs.core.truth_(inst_12819)){
var statearr_12844_12906 = state_12833__$1;
(statearr_12844_12906[(1)] = (19));

} else {
var statearr_12845_12907 = state_12833__$1;
(statearr_12845_12907[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (3))){
var inst_12831 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12833__$1,inst_12831);
} else {
if((state_val_12834 === (12))){
var inst_12808 = (state_12833[(10)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12833__$1,(14),inst_12808);
} else {
if((state_val_12834 === (2))){
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12833__$1,(4),results);
} else {
if((state_val_12834 === (19))){
var state_12833__$1 = state_12833;
var statearr_12846_12908 = state_12833__$1;
(statearr_12846_12908[(2)] = null);

(statearr_12846_12908[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (11))){
var inst_12808 = (state_12833[(2)]);
var state_12833__$1 = (function (){var statearr_12847 = state_12833;
(statearr_12847[(10)] = inst_12808);

return statearr_12847;
})();
var statearr_12848_12909 = state_12833__$1;
(statearr_12848_12909[(2)] = null);

(statearr_12848_12909[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (9))){
var state_12833__$1 = state_12833;
var statearr_12849_12910 = state_12833__$1;
(statearr_12849_12910[(2)] = null);

(statearr_12849_12910[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (5))){
var state_12833__$1 = state_12833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12850_12911 = state_12833__$1;
(statearr_12850_12911[(1)] = (8));

} else {
var statearr_12851_12912 = state_12833__$1;
(statearr_12851_12912[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (14))){
var inst_12811 = (state_12833[(8)]);
var inst_12813 = (state_12833[(11)]);
var inst_12811__$1 = (state_12833[(2)]);
var inst_12812 = (inst_12811__$1 == null);
var inst_12813__$1 = cljs.core.not(inst_12812);
var state_12833__$1 = (function (){var statearr_12852 = state_12833;
(statearr_12852[(8)] = inst_12811__$1);

(statearr_12852[(11)] = inst_12813__$1);

return statearr_12852;
})();
if(inst_12813__$1){
var statearr_12853_12913 = state_12833__$1;
(statearr_12853_12913[(1)] = (15));

} else {
var statearr_12854_12914 = state_12833__$1;
(statearr_12854_12914[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (16))){
var inst_12813 = (state_12833[(11)]);
var state_12833__$1 = state_12833;
var statearr_12855_12915 = state_12833__$1;
(statearr_12855_12915[(2)] = inst_12813);

(statearr_12855_12915[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (10))){
var inst_12805 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
var statearr_12856_12916 = state_12833__$1;
(statearr_12856_12916[(2)] = inst_12805);

(statearr_12856_12916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (18))){
var inst_12816 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
var statearr_12857_12917 = state_12833__$1;
(statearr_12857_12917[(2)] = inst_12816);

(statearr_12857_12917[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (8))){
var inst_12802 = cljs.core.async.close_BANG_(to);
var state_12833__$1 = state_12833;
var statearr_12858_12918 = state_12833__$1;
(statearr_12858_12918[(2)] = inst_12802);

(statearr_12858_12918[(1)] = (10));


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
});})(c__12525__auto__,jobs,results,process,async))
;
return ((function (switch__12422__auto__,c__12525__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0 = (function (){
var statearr_12859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__);

(statearr_12859[(1)] = (1));

return statearr_12859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1 = (function (state_12833){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12833);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12860){if((e12860 instanceof Object)){
var ex__12426__auto__ = e12860;
var statearr_12861_12919 = state_12833;
(statearr_12861_12919[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12833);

return cljs.core.cst$kw$recur;
} else {
throw e12860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12920 = state_12833;
state_12833 = G__12920;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12423__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__,jobs,results,process,async))
})();
var state__12527__auto__ = (function (){var statearr_12862 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12862[(6)] = c__12525__auto__);

return statearr_12862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__,jobs,results,process,async))
);

return c__12525__auto__;
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
var G__12922 = arguments.length;
switch (G__12922) {
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
var G__12925 = arguments.length;
switch (G__12925) {
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
var G__12928 = arguments.length;
switch (G__12928) {
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
var c__12525__auto___12977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___12977,tc,fc){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___12977,tc,fc){
return (function (state_12954){
var state_val_12955 = (state_12954[(1)]);
if((state_val_12955 === (7))){
var inst_12950 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
var statearr_12956_12978 = state_12954__$1;
(statearr_12956_12978[(2)] = inst_12950);

(statearr_12956_12978[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (1))){
var state_12954__$1 = state_12954;
var statearr_12957_12979 = state_12954__$1;
(statearr_12957_12979[(2)] = null);

(statearr_12957_12979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (4))){
var inst_12931 = (state_12954[(7)]);
var inst_12931__$1 = (state_12954[(2)]);
var inst_12932 = (inst_12931__$1 == null);
var state_12954__$1 = (function (){var statearr_12958 = state_12954;
(statearr_12958[(7)] = inst_12931__$1);

return statearr_12958;
})();
if(cljs.core.truth_(inst_12932)){
var statearr_12959_12980 = state_12954__$1;
(statearr_12959_12980[(1)] = (5));

} else {
var statearr_12960_12981 = state_12954__$1;
(statearr_12960_12981[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (13))){
var state_12954__$1 = state_12954;
var statearr_12961_12982 = state_12954__$1;
(statearr_12961_12982[(2)] = null);

(statearr_12961_12982[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (6))){
var inst_12931 = (state_12954[(7)]);
var inst_12937 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12931) : p.call(null,inst_12931));
var state_12954__$1 = state_12954;
if(cljs.core.truth_(inst_12937)){
var statearr_12962_12983 = state_12954__$1;
(statearr_12962_12983[(1)] = (9));

} else {
var statearr_12963_12984 = state_12954__$1;
(statearr_12963_12984[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (3))){
var inst_12952 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12954__$1,inst_12952);
} else {
if((state_val_12955 === (12))){
var state_12954__$1 = state_12954;
var statearr_12964_12985 = state_12954__$1;
(statearr_12964_12985[(2)] = null);

(statearr_12964_12985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (2))){
var state_12954__$1 = state_12954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12954__$1,(4),ch);
} else {
if((state_val_12955 === (11))){
var inst_12931 = (state_12954[(7)]);
var inst_12941 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12954__$1,(8),inst_12941,inst_12931);
} else {
if((state_val_12955 === (9))){
var state_12954__$1 = state_12954;
var statearr_12965_12986 = state_12954__$1;
(statearr_12965_12986[(2)] = tc);

(statearr_12965_12986[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (5))){
var inst_12934 = cljs.core.async.close_BANG_(tc);
var inst_12935 = cljs.core.async.close_BANG_(fc);
var state_12954__$1 = (function (){var statearr_12966 = state_12954;
(statearr_12966[(8)] = inst_12934);

return statearr_12966;
})();
var statearr_12967_12987 = state_12954__$1;
(statearr_12967_12987[(2)] = inst_12935);

(statearr_12967_12987[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (14))){
var inst_12948 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
var statearr_12968_12988 = state_12954__$1;
(statearr_12968_12988[(2)] = inst_12948);

(statearr_12968_12988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (10))){
var state_12954__$1 = state_12954;
var statearr_12969_12989 = state_12954__$1;
(statearr_12969_12989[(2)] = fc);

(statearr_12969_12989[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12955 === (8))){
var inst_12943 = (state_12954[(2)]);
var state_12954__$1 = state_12954;
if(cljs.core.truth_(inst_12943)){
var statearr_12970_12990 = state_12954__$1;
(statearr_12970_12990[(1)] = (12));

} else {
var statearr_12971_12991 = state_12954__$1;
(statearr_12971_12991[(1)] = (13));

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
});})(c__12525__auto___12977,tc,fc))
;
return ((function (switch__12422__auto__,c__12525__auto___12977,tc,fc){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_12972 = [null,null,null,null,null,null,null,null,null];
(statearr_12972[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_12972[(1)] = (1));

return statearr_12972;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_12954){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_12954);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e12973){if((e12973 instanceof Object)){
var ex__12426__auto__ = e12973;
var statearr_12974_12992 = state_12954;
(statearr_12974_12992[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12954);

return cljs.core.cst$kw$recur;
} else {
throw e12973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__12993 = state_12954;
state_12954 = G__12993;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_12954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_12954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___12977,tc,fc))
})();
var state__12527__auto__ = (function (){var statearr_12975 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_12975[(6)] = c__12525__auto___12977);

return statearr_12975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___12977,tc,fc))
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
var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__){
return (function (state_13014){
var state_val_13015 = (state_13014[(1)]);
if((state_val_13015 === (7))){
var inst_13010 = (state_13014[(2)]);
var state_13014__$1 = state_13014;
var statearr_13016_13034 = state_13014__$1;
(statearr_13016_13034[(2)] = inst_13010);

(statearr_13016_13034[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (1))){
var inst_12994 = init;
var state_13014__$1 = (function (){var statearr_13017 = state_13014;
(statearr_13017[(7)] = inst_12994);

return statearr_13017;
})();
var statearr_13018_13035 = state_13014__$1;
(statearr_13018_13035[(2)] = null);

(statearr_13018_13035[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (4))){
var inst_12997 = (state_13014[(8)]);
var inst_12997__$1 = (state_13014[(2)]);
var inst_12998 = (inst_12997__$1 == null);
var state_13014__$1 = (function (){var statearr_13019 = state_13014;
(statearr_13019[(8)] = inst_12997__$1);

return statearr_13019;
})();
if(cljs.core.truth_(inst_12998)){
var statearr_13020_13036 = state_13014__$1;
(statearr_13020_13036[(1)] = (5));

} else {
var statearr_13021_13037 = state_13014__$1;
(statearr_13021_13037[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (6))){
var inst_13001 = (state_13014[(9)]);
var inst_12994 = (state_13014[(7)]);
var inst_12997 = (state_13014[(8)]);
var inst_13001__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12994,inst_12997) : f.call(null,inst_12994,inst_12997));
var inst_13002 = cljs.core.reduced_QMARK_(inst_13001__$1);
var state_13014__$1 = (function (){var statearr_13022 = state_13014;
(statearr_13022[(9)] = inst_13001__$1);

return statearr_13022;
})();
if(inst_13002){
var statearr_13023_13038 = state_13014__$1;
(statearr_13023_13038[(1)] = (8));

} else {
var statearr_13024_13039 = state_13014__$1;
(statearr_13024_13039[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (3))){
var inst_13012 = (state_13014[(2)]);
var state_13014__$1 = state_13014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13014__$1,inst_13012);
} else {
if((state_val_13015 === (2))){
var state_13014__$1 = state_13014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13014__$1,(4),ch);
} else {
if((state_val_13015 === (9))){
var inst_13001 = (state_13014[(9)]);
var inst_12994 = inst_13001;
var state_13014__$1 = (function (){var statearr_13025 = state_13014;
(statearr_13025[(7)] = inst_12994);

return statearr_13025;
})();
var statearr_13026_13040 = state_13014__$1;
(statearr_13026_13040[(2)] = null);

(statearr_13026_13040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (5))){
var inst_12994 = (state_13014[(7)]);
var state_13014__$1 = state_13014;
var statearr_13027_13041 = state_13014__$1;
(statearr_13027_13041[(2)] = inst_12994);

(statearr_13027_13041[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (10))){
var inst_13008 = (state_13014[(2)]);
var state_13014__$1 = state_13014;
var statearr_13028_13042 = state_13014__$1;
(statearr_13028_13042[(2)] = inst_13008);

(statearr_13028_13042[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13015 === (8))){
var inst_13001 = (state_13014[(9)]);
var inst_13004 = cljs.core.deref(inst_13001);
var state_13014__$1 = state_13014;
var statearr_13029_13043 = state_13014__$1;
(statearr_13029_13043[(2)] = inst_13004);

(statearr_13029_13043[(1)] = (10));


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
});})(c__12525__auto__))
;
return ((function (switch__12422__auto__,c__12525__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12423__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12423__auto____0 = (function (){
var statearr_13030 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13030[(0)] = cljs$core$async$reduce_$_state_machine__12423__auto__);

(statearr_13030[(1)] = (1));

return statearr_13030;
});
var cljs$core$async$reduce_$_state_machine__12423__auto____1 = (function (state_13014){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13014);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13031){if((e13031 instanceof Object)){
var ex__12426__auto__ = e13031;
var statearr_13032_13044 = state_13014;
(statearr_13032_13044[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13014);

return cljs.core.cst$kw$recur;
} else {
throw e13031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13045 = state_13014;
state_13014 = G__13045;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12423__auto__ = function(state_13014){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12423__auto____1.call(this,state_13014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12423__auto____0;
cljs$core$async$reduce_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12423__auto____1;
return cljs$core$async$reduce_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__))
})();
var state__12527__auto__ = (function (){var statearr_13033 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13033[(6)] = c__12525__auto__);

return statearr_13033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__))
);

return c__12525__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__,f__$1){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__,f__$1){
return (function (state_13051){
var state_val_13052 = (state_13051[(1)]);
if((state_val_13052 === (1))){
var inst_13046 = cljs.core.async.reduce(f__$1,init,ch);
var state_13051__$1 = state_13051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13051__$1,(2),inst_13046);
} else {
if((state_val_13052 === (2))){
var inst_13048 = (state_13051[(2)]);
var inst_13049 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13048) : f__$1.call(null,inst_13048));
var state_13051__$1 = state_13051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13051__$1,inst_13049);
} else {
return null;
}
}
});})(c__12525__auto__,f__$1))
;
return ((function (switch__12422__auto__,c__12525__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12423__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12423__auto____0 = (function (){
var statearr_13053 = [null,null,null,null,null,null,null];
(statearr_13053[(0)] = cljs$core$async$transduce_$_state_machine__12423__auto__);

(statearr_13053[(1)] = (1));

return statearr_13053;
});
var cljs$core$async$transduce_$_state_machine__12423__auto____1 = (function (state_13051){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13051);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13054){if((e13054 instanceof Object)){
var ex__12426__auto__ = e13054;
var statearr_13055_13057 = state_13051;
(statearr_13055_13057[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13051);

return cljs.core.cst$kw$recur;
} else {
throw e13054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13058 = state_13051;
state_13051 = G__13058;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12423__auto__ = function(state_13051){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12423__auto____1.call(this,state_13051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12423__auto____0;
cljs$core$async$transduce_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12423__auto____1;
return cljs$core$async$transduce_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__,f__$1))
})();
var state__12527__auto__ = (function (){var statearr_13056 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13056[(6)] = c__12525__auto__);

return statearr_13056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__,f__$1))
);

return c__12525__auto__;
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
var G__13060 = arguments.length;
switch (G__13060) {
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
var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__){
return (function (state_13085){
var state_val_13086 = (state_13085[(1)]);
if((state_val_13086 === (7))){
var inst_13067 = (state_13085[(2)]);
var state_13085__$1 = state_13085;
var statearr_13087_13108 = state_13085__$1;
(statearr_13087_13108[(2)] = inst_13067);

(statearr_13087_13108[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (1))){
var inst_13061 = cljs.core.seq(coll);
var inst_13062 = inst_13061;
var state_13085__$1 = (function (){var statearr_13088 = state_13085;
(statearr_13088[(7)] = inst_13062);

return statearr_13088;
})();
var statearr_13089_13109 = state_13085__$1;
(statearr_13089_13109[(2)] = null);

(statearr_13089_13109[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (4))){
var inst_13062 = (state_13085[(7)]);
var inst_13065 = cljs.core.first(inst_13062);
var state_13085__$1 = state_13085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13085__$1,(7),ch,inst_13065);
} else {
if((state_val_13086 === (13))){
var inst_13079 = (state_13085[(2)]);
var state_13085__$1 = state_13085;
var statearr_13090_13110 = state_13085__$1;
(statearr_13090_13110[(2)] = inst_13079);

(statearr_13090_13110[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (6))){
var inst_13070 = (state_13085[(2)]);
var state_13085__$1 = state_13085;
if(cljs.core.truth_(inst_13070)){
var statearr_13091_13111 = state_13085__$1;
(statearr_13091_13111[(1)] = (8));

} else {
var statearr_13092_13112 = state_13085__$1;
(statearr_13092_13112[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (3))){
var inst_13083 = (state_13085[(2)]);
var state_13085__$1 = state_13085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13085__$1,inst_13083);
} else {
if((state_val_13086 === (12))){
var state_13085__$1 = state_13085;
var statearr_13093_13113 = state_13085__$1;
(statearr_13093_13113[(2)] = null);

(statearr_13093_13113[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (2))){
var inst_13062 = (state_13085[(7)]);
var state_13085__$1 = state_13085;
if(cljs.core.truth_(inst_13062)){
var statearr_13094_13114 = state_13085__$1;
(statearr_13094_13114[(1)] = (4));

} else {
var statearr_13095_13115 = state_13085__$1;
(statearr_13095_13115[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (11))){
var inst_13076 = cljs.core.async.close_BANG_(ch);
var state_13085__$1 = state_13085;
var statearr_13096_13116 = state_13085__$1;
(statearr_13096_13116[(2)] = inst_13076);

(statearr_13096_13116[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (9))){
var state_13085__$1 = state_13085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13097_13117 = state_13085__$1;
(statearr_13097_13117[(1)] = (11));

} else {
var statearr_13098_13118 = state_13085__$1;
(statearr_13098_13118[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (5))){
var inst_13062 = (state_13085[(7)]);
var state_13085__$1 = state_13085;
var statearr_13099_13119 = state_13085__$1;
(statearr_13099_13119[(2)] = inst_13062);

(statearr_13099_13119[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (10))){
var inst_13081 = (state_13085[(2)]);
var state_13085__$1 = state_13085;
var statearr_13100_13120 = state_13085__$1;
(statearr_13100_13120[(2)] = inst_13081);

(statearr_13100_13120[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13086 === (8))){
var inst_13062 = (state_13085[(7)]);
var inst_13072 = cljs.core.next(inst_13062);
var inst_13062__$1 = inst_13072;
var state_13085__$1 = (function (){var statearr_13101 = state_13085;
(statearr_13101[(7)] = inst_13062__$1);

return statearr_13101;
})();
var statearr_13102_13121 = state_13085__$1;
(statearr_13102_13121[(2)] = null);

(statearr_13102_13121[(1)] = (2));


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
});})(c__12525__auto__))
;
return ((function (switch__12422__auto__,c__12525__auto__){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_13103 = [null,null,null,null,null,null,null,null];
(statearr_13103[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_13103[(1)] = (1));

return statearr_13103;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_13085){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13085);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13104){if((e13104 instanceof Object)){
var ex__12426__auto__ = e13104;
var statearr_13105_13122 = state_13085;
(statearr_13105_13122[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13085);

return cljs.core.cst$kw$recur;
} else {
throw e13104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13123 = state_13085;
state_13085 = G__13123;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_13085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_13085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__))
})();
var state__12527__auto__ = (function (){var statearr_13106 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13106[(6)] = c__12525__auto__);

return statearr_13106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__))
);

return c__12525__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13124 = (function (ch,cs,meta13125){
this.ch = ch;
this.cs = cs;
this.meta13125 = meta13125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13126,meta13125__$1){
var self__ = this;
var _13126__$1 = this;
return (new cljs.core.async.t_cljs$core$async13124(self__.ch,self__.cs,meta13125__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13126){
var self__ = this;
var _13126__$1 = this;
return self__.meta13125;
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta13125], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13124";

cljs.core.async.t_cljs$core$async13124.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13124");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13124.
 */
cljs.core.async.__GT_t_cljs$core$async13124 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13124(ch__$1,cs__$1,meta13125){
return (new cljs.core.async.t_cljs$core$async13124(ch__$1,cs__$1,meta13125));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13124(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12525__auto___13346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___13346,cs,m,dchan,dctr,done){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___13346,cs,m,dchan,dctr,done){
return (function (state_13261){
var state_val_13262 = (state_13261[(1)]);
if((state_val_13262 === (7))){
var inst_13257 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13263_13347 = state_13261__$1;
(statearr_13263_13347[(2)] = inst_13257);

(statearr_13263_13347[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (20))){
var inst_13160 = (state_13261[(7)]);
var inst_13172 = cljs.core.first(inst_13160);
var inst_13173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13172,(0),null);
var inst_13174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13172,(1),null);
var state_13261__$1 = (function (){var statearr_13264 = state_13261;
(statearr_13264[(8)] = inst_13173);

return statearr_13264;
})();
if(cljs.core.truth_(inst_13174)){
var statearr_13265_13348 = state_13261__$1;
(statearr_13265_13348[(1)] = (22));

} else {
var statearr_13266_13349 = state_13261__$1;
(statearr_13266_13349[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (27))){
var inst_13204 = (state_13261[(9)]);
var inst_13202 = (state_13261[(10)]);
var inst_13209 = (state_13261[(11)]);
var inst_13129 = (state_13261[(12)]);
var inst_13209__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13202,inst_13204);
var inst_13210 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13209__$1,inst_13129,done);
var state_13261__$1 = (function (){var statearr_13267 = state_13261;
(statearr_13267[(11)] = inst_13209__$1);

return statearr_13267;
})();
if(cljs.core.truth_(inst_13210)){
var statearr_13268_13350 = state_13261__$1;
(statearr_13268_13350[(1)] = (30));

} else {
var statearr_13269_13351 = state_13261__$1;
(statearr_13269_13351[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (1))){
var state_13261__$1 = state_13261;
var statearr_13270_13352 = state_13261__$1;
(statearr_13270_13352[(2)] = null);

(statearr_13270_13352[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (24))){
var inst_13160 = (state_13261[(7)]);
var inst_13179 = (state_13261[(2)]);
var inst_13180 = cljs.core.next(inst_13160);
var inst_13138 = inst_13180;
var inst_13139 = null;
var inst_13140 = (0);
var inst_13141 = (0);
var state_13261__$1 = (function (){var statearr_13271 = state_13261;
(statearr_13271[(13)] = inst_13179);

(statearr_13271[(14)] = inst_13139);

(statearr_13271[(15)] = inst_13138);

(statearr_13271[(16)] = inst_13140);

(statearr_13271[(17)] = inst_13141);

return statearr_13271;
})();
var statearr_13272_13353 = state_13261__$1;
(statearr_13272_13353[(2)] = null);

(statearr_13272_13353[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (39))){
var state_13261__$1 = state_13261;
var statearr_13276_13354 = state_13261__$1;
(statearr_13276_13354[(2)] = null);

(statearr_13276_13354[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (4))){
var inst_13129 = (state_13261[(12)]);
var inst_13129__$1 = (state_13261[(2)]);
var inst_13130 = (inst_13129__$1 == null);
var state_13261__$1 = (function (){var statearr_13277 = state_13261;
(statearr_13277[(12)] = inst_13129__$1);

return statearr_13277;
})();
if(cljs.core.truth_(inst_13130)){
var statearr_13278_13355 = state_13261__$1;
(statearr_13278_13355[(1)] = (5));

} else {
var statearr_13279_13356 = state_13261__$1;
(statearr_13279_13356[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (15))){
var inst_13139 = (state_13261[(14)]);
var inst_13138 = (state_13261[(15)]);
var inst_13140 = (state_13261[(16)]);
var inst_13141 = (state_13261[(17)]);
var inst_13156 = (state_13261[(2)]);
var inst_13157 = (inst_13141 + (1));
var tmp13273 = inst_13139;
var tmp13274 = inst_13138;
var tmp13275 = inst_13140;
var inst_13138__$1 = tmp13274;
var inst_13139__$1 = tmp13273;
var inst_13140__$1 = tmp13275;
var inst_13141__$1 = inst_13157;
var state_13261__$1 = (function (){var statearr_13280 = state_13261;
(statearr_13280[(14)] = inst_13139__$1);

(statearr_13280[(15)] = inst_13138__$1);

(statearr_13280[(18)] = inst_13156);

(statearr_13280[(16)] = inst_13140__$1);

(statearr_13280[(17)] = inst_13141__$1);

return statearr_13280;
})();
var statearr_13281_13357 = state_13261__$1;
(statearr_13281_13357[(2)] = null);

(statearr_13281_13357[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (21))){
var inst_13183 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13285_13358 = state_13261__$1;
(statearr_13285_13358[(2)] = inst_13183);

(statearr_13285_13358[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (31))){
var inst_13209 = (state_13261[(11)]);
var inst_13213 = done(null);
var inst_13214 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13209);
var state_13261__$1 = (function (){var statearr_13286 = state_13261;
(statearr_13286[(19)] = inst_13213);

return statearr_13286;
})();
var statearr_13287_13359 = state_13261__$1;
(statearr_13287_13359[(2)] = inst_13214);

(statearr_13287_13359[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (32))){
var inst_13204 = (state_13261[(9)]);
var inst_13202 = (state_13261[(10)]);
var inst_13203 = (state_13261[(20)]);
var inst_13201 = (state_13261[(21)]);
var inst_13216 = (state_13261[(2)]);
var inst_13217 = (inst_13204 + (1));
var tmp13282 = inst_13202;
var tmp13283 = inst_13203;
var tmp13284 = inst_13201;
var inst_13201__$1 = tmp13284;
var inst_13202__$1 = tmp13282;
var inst_13203__$1 = tmp13283;
var inst_13204__$1 = inst_13217;
var state_13261__$1 = (function (){var statearr_13288 = state_13261;
(statearr_13288[(9)] = inst_13204__$1);

(statearr_13288[(22)] = inst_13216);

(statearr_13288[(10)] = inst_13202__$1);

(statearr_13288[(20)] = inst_13203__$1);

(statearr_13288[(21)] = inst_13201__$1);

return statearr_13288;
})();
var statearr_13289_13360 = state_13261__$1;
(statearr_13289_13360[(2)] = null);

(statearr_13289_13360[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (40))){
var inst_13229 = (state_13261[(23)]);
var inst_13233 = done(null);
var inst_13234 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13229);
var state_13261__$1 = (function (){var statearr_13290 = state_13261;
(statearr_13290[(24)] = inst_13233);

return statearr_13290;
})();
var statearr_13291_13361 = state_13261__$1;
(statearr_13291_13361[(2)] = inst_13234);

(statearr_13291_13361[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (33))){
var inst_13220 = (state_13261[(25)]);
var inst_13222 = cljs.core.chunked_seq_QMARK_(inst_13220);
var state_13261__$1 = state_13261;
if(inst_13222){
var statearr_13292_13362 = state_13261__$1;
(statearr_13292_13362[(1)] = (36));

} else {
var statearr_13293_13363 = state_13261__$1;
(statearr_13293_13363[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (13))){
var inst_13150 = (state_13261[(26)]);
var inst_13153 = cljs.core.async.close_BANG_(inst_13150);
var state_13261__$1 = state_13261;
var statearr_13294_13364 = state_13261__$1;
(statearr_13294_13364[(2)] = inst_13153);

(statearr_13294_13364[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (22))){
var inst_13173 = (state_13261[(8)]);
var inst_13176 = cljs.core.async.close_BANG_(inst_13173);
var state_13261__$1 = state_13261;
var statearr_13295_13365 = state_13261__$1;
(statearr_13295_13365[(2)] = inst_13176);

(statearr_13295_13365[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (36))){
var inst_13220 = (state_13261[(25)]);
var inst_13224 = cljs.core.chunk_first(inst_13220);
var inst_13225 = cljs.core.chunk_rest(inst_13220);
var inst_13226 = cljs.core.count(inst_13224);
var inst_13201 = inst_13225;
var inst_13202 = inst_13224;
var inst_13203 = inst_13226;
var inst_13204 = (0);
var state_13261__$1 = (function (){var statearr_13296 = state_13261;
(statearr_13296[(9)] = inst_13204);

(statearr_13296[(10)] = inst_13202);

(statearr_13296[(20)] = inst_13203);

(statearr_13296[(21)] = inst_13201);

return statearr_13296;
})();
var statearr_13297_13366 = state_13261__$1;
(statearr_13297_13366[(2)] = null);

(statearr_13297_13366[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (41))){
var inst_13220 = (state_13261[(25)]);
var inst_13236 = (state_13261[(2)]);
var inst_13237 = cljs.core.next(inst_13220);
var inst_13201 = inst_13237;
var inst_13202 = null;
var inst_13203 = (0);
var inst_13204 = (0);
var state_13261__$1 = (function (){var statearr_13298 = state_13261;
(statearr_13298[(27)] = inst_13236);

(statearr_13298[(9)] = inst_13204);

(statearr_13298[(10)] = inst_13202);

(statearr_13298[(20)] = inst_13203);

(statearr_13298[(21)] = inst_13201);

return statearr_13298;
})();
var statearr_13299_13367 = state_13261__$1;
(statearr_13299_13367[(2)] = null);

(statearr_13299_13367[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (43))){
var state_13261__$1 = state_13261;
var statearr_13300_13368 = state_13261__$1;
(statearr_13300_13368[(2)] = null);

(statearr_13300_13368[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (29))){
var inst_13245 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13301_13369 = state_13261__$1;
(statearr_13301_13369[(2)] = inst_13245);

(statearr_13301_13369[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (44))){
var inst_13254 = (state_13261[(2)]);
var state_13261__$1 = (function (){var statearr_13302 = state_13261;
(statearr_13302[(28)] = inst_13254);

return statearr_13302;
})();
var statearr_13303_13370 = state_13261__$1;
(statearr_13303_13370[(2)] = null);

(statearr_13303_13370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (6))){
var inst_13193 = (state_13261[(29)]);
var inst_13192 = cljs.core.deref(cs);
var inst_13193__$1 = cljs.core.keys(inst_13192);
var inst_13194 = cljs.core.count(inst_13193__$1);
var inst_13195 = cljs.core.reset_BANG_(dctr,inst_13194);
var inst_13200 = cljs.core.seq(inst_13193__$1);
var inst_13201 = inst_13200;
var inst_13202 = null;
var inst_13203 = (0);
var inst_13204 = (0);
var state_13261__$1 = (function (){var statearr_13304 = state_13261;
(statearr_13304[(9)] = inst_13204);

(statearr_13304[(10)] = inst_13202);

(statearr_13304[(20)] = inst_13203);

(statearr_13304[(21)] = inst_13201);

(statearr_13304[(30)] = inst_13195);

(statearr_13304[(29)] = inst_13193__$1);

return statearr_13304;
})();
var statearr_13305_13371 = state_13261__$1;
(statearr_13305_13371[(2)] = null);

(statearr_13305_13371[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (28))){
var inst_13220 = (state_13261[(25)]);
var inst_13201 = (state_13261[(21)]);
var inst_13220__$1 = cljs.core.seq(inst_13201);
var state_13261__$1 = (function (){var statearr_13306 = state_13261;
(statearr_13306[(25)] = inst_13220__$1);

return statearr_13306;
})();
if(inst_13220__$1){
var statearr_13307_13372 = state_13261__$1;
(statearr_13307_13372[(1)] = (33));

} else {
var statearr_13308_13373 = state_13261__$1;
(statearr_13308_13373[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (25))){
var inst_13204 = (state_13261[(9)]);
var inst_13203 = (state_13261[(20)]);
var inst_13206 = (inst_13204 < inst_13203);
var inst_13207 = inst_13206;
var state_13261__$1 = state_13261;
if(cljs.core.truth_(inst_13207)){
var statearr_13309_13374 = state_13261__$1;
(statearr_13309_13374[(1)] = (27));

} else {
var statearr_13310_13375 = state_13261__$1;
(statearr_13310_13375[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (34))){
var state_13261__$1 = state_13261;
var statearr_13311_13376 = state_13261__$1;
(statearr_13311_13376[(2)] = null);

(statearr_13311_13376[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (17))){
var state_13261__$1 = state_13261;
var statearr_13312_13377 = state_13261__$1;
(statearr_13312_13377[(2)] = null);

(statearr_13312_13377[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (3))){
var inst_13259 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13261__$1,inst_13259);
} else {
if((state_val_13262 === (12))){
var inst_13188 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13313_13378 = state_13261__$1;
(statearr_13313_13378[(2)] = inst_13188);

(statearr_13313_13378[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (2))){
var state_13261__$1 = state_13261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13261__$1,(4),ch);
} else {
if((state_val_13262 === (23))){
var state_13261__$1 = state_13261;
var statearr_13314_13379 = state_13261__$1;
(statearr_13314_13379[(2)] = null);

(statearr_13314_13379[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (35))){
var inst_13243 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13315_13380 = state_13261__$1;
(statearr_13315_13380[(2)] = inst_13243);

(statearr_13315_13380[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (19))){
var inst_13160 = (state_13261[(7)]);
var inst_13164 = cljs.core.chunk_first(inst_13160);
var inst_13165 = cljs.core.chunk_rest(inst_13160);
var inst_13166 = cljs.core.count(inst_13164);
var inst_13138 = inst_13165;
var inst_13139 = inst_13164;
var inst_13140 = inst_13166;
var inst_13141 = (0);
var state_13261__$1 = (function (){var statearr_13316 = state_13261;
(statearr_13316[(14)] = inst_13139);

(statearr_13316[(15)] = inst_13138);

(statearr_13316[(16)] = inst_13140);

(statearr_13316[(17)] = inst_13141);

return statearr_13316;
})();
var statearr_13317_13381 = state_13261__$1;
(statearr_13317_13381[(2)] = null);

(statearr_13317_13381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (11))){
var inst_13138 = (state_13261[(15)]);
var inst_13160 = (state_13261[(7)]);
var inst_13160__$1 = cljs.core.seq(inst_13138);
var state_13261__$1 = (function (){var statearr_13318 = state_13261;
(statearr_13318[(7)] = inst_13160__$1);

return statearr_13318;
})();
if(inst_13160__$1){
var statearr_13319_13382 = state_13261__$1;
(statearr_13319_13382[(1)] = (16));

} else {
var statearr_13320_13383 = state_13261__$1;
(statearr_13320_13383[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (9))){
var inst_13190 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13321_13384 = state_13261__$1;
(statearr_13321_13384[(2)] = inst_13190);

(statearr_13321_13384[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (5))){
var inst_13136 = cljs.core.deref(cs);
var inst_13137 = cljs.core.seq(inst_13136);
var inst_13138 = inst_13137;
var inst_13139 = null;
var inst_13140 = (0);
var inst_13141 = (0);
var state_13261__$1 = (function (){var statearr_13322 = state_13261;
(statearr_13322[(14)] = inst_13139);

(statearr_13322[(15)] = inst_13138);

(statearr_13322[(16)] = inst_13140);

(statearr_13322[(17)] = inst_13141);

return statearr_13322;
})();
var statearr_13323_13385 = state_13261__$1;
(statearr_13323_13385[(2)] = null);

(statearr_13323_13385[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (14))){
var state_13261__$1 = state_13261;
var statearr_13324_13386 = state_13261__$1;
(statearr_13324_13386[(2)] = null);

(statearr_13324_13386[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (45))){
var inst_13251 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13325_13387 = state_13261__$1;
(statearr_13325_13387[(2)] = inst_13251);

(statearr_13325_13387[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (26))){
var inst_13193 = (state_13261[(29)]);
var inst_13247 = (state_13261[(2)]);
var inst_13248 = cljs.core.seq(inst_13193);
var state_13261__$1 = (function (){var statearr_13326 = state_13261;
(statearr_13326[(31)] = inst_13247);

return statearr_13326;
})();
if(inst_13248){
var statearr_13327_13388 = state_13261__$1;
(statearr_13327_13388[(1)] = (42));

} else {
var statearr_13328_13389 = state_13261__$1;
(statearr_13328_13389[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (16))){
var inst_13160 = (state_13261[(7)]);
var inst_13162 = cljs.core.chunked_seq_QMARK_(inst_13160);
var state_13261__$1 = state_13261;
if(inst_13162){
var statearr_13329_13390 = state_13261__$1;
(statearr_13329_13390[(1)] = (19));

} else {
var statearr_13330_13391 = state_13261__$1;
(statearr_13330_13391[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (38))){
var inst_13240 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13331_13392 = state_13261__$1;
(statearr_13331_13392[(2)] = inst_13240);

(statearr_13331_13392[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (30))){
var state_13261__$1 = state_13261;
var statearr_13332_13393 = state_13261__$1;
(statearr_13332_13393[(2)] = null);

(statearr_13332_13393[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (10))){
var inst_13139 = (state_13261[(14)]);
var inst_13141 = (state_13261[(17)]);
var inst_13149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13139,inst_13141);
var inst_13150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13149,(0),null);
var inst_13151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13149,(1),null);
var state_13261__$1 = (function (){var statearr_13333 = state_13261;
(statearr_13333[(26)] = inst_13150);

return statearr_13333;
})();
if(cljs.core.truth_(inst_13151)){
var statearr_13334_13394 = state_13261__$1;
(statearr_13334_13394[(1)] = (13));

} else {
var statearr_13335_13395 = state_13261__$1;
(statearr_13335_13395[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (18))){
var inst_13186 = (state_13261[(2)]);
var state_13261__$1 = state_13261;
var statearr_13336_13396 = state_13261__$1;
(statearr_13336_13396[(2)] = inst_13186);

(statearr_13336_13396[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (42))){
var state_13261__$1 = state_13261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13261__$1,(45),dchan);
} else {
if((state_val_13262 === (37))){
var inst_13229 = (state_13261[(23)]);
var inst_13220 = (state_13261[(25)]);
var inst_13129 = (state_13261[(12)]);
var inst_13229__$1 = cljs.core.first(inst_13220);
var inst_13230 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13229__$1,inst_13129,done);
var state_13261__$1 = (function (){var statearr_13337 = state_13261;
(statearr_13337[(23)] = inst_13229__$1);

return statearr_13337;
})();
if(cljs.core.truth_(inst_13230)){
var statearr_13338_13397 = state_13261__$1;
(statearr_13338_13397[(1)] = (39));

} else {
var statearr_13339_13398 = state_13261__$1;
(statearr_13339_13398[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13262 === (8))){
var inst_13140 = (state_13261[(16)]);
var inst_13141 = (state_13261[(17)]);
var inst_13143 = (inst_13141 < inst_13140);
var inst_13144 = inst_13143;
var state_13261__$1 = state_13261;
if(cljs.core.truth_(inst_13144)){
var statearr_13340_13399 = state_13261__$1;
(statearr_13340_13399[(1)] = (10));

} else {
var statearr_13341_13400 = state_13261__$1;
(statearr_13341_13400[(1)] = (11));

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
});})(c__12525__auto___13346,cs,m,dchan,dctr,done))
;
return ((function (switch__12422__auto__,c__12525__auto___13346,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12423__auto__ = null;
var cljs$core$async$mult_$_state_machine__12423__auto____0 = (function (){
var statearr_13342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13342[(0)] = cljs$core$async$mult_$_state_machine__12423__auto__);

(statearr_13342[(1)] = (1));

return statearr_13342;
});
var cljs$core$async$mult_$_state_machine__12423__auto____1 = (function (state_13261){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13261);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13343){if((e13343 instanceof Object)){
var ex__12426__auto__ = e13343;
var statearr_13344_13401 = state_13261;
(statearr_13344_13401[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13261);

return cljs.core.cst$kw$recur;
} else {
throw e13343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13402 = state_13261;
state_13261 = G__13402;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12423__auto__ = function(state_13261){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12423__auto____1.call(this,state_13261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12423__auto____0;
cljs$core$async$mult_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12423__auto____1;
return cljs$core$async$mult_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___13346,cs,m,dchan,dctr,done))
})();
var state__12527__auto__ = (function (){var statearr_13345 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13345[(6)] = c__12525__auto___13346);

return statearr_13345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___13346,cs,m,dchan,dctr,done))
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
var G__13404 = arguments.length;
switch (G__13404) {
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
var len__4531__auto___13416 = arguments.length;
var i__4532__auto___13417 = (0);
while(true){
if((i__4532__auto___13417 < len__4531__auto___13416)){
args__4534__auto__.push((arguments[i__4532__auto___13417]));

var G__13418 = (i__4532__auto___13417 + (1));
i__4532__auto___13417 = G__13418;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13410){
var map__13411 = p__13410;
var map__13411__$1 = ((((!((map__13411 == null)))?(((((map__13411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13411):map__13411);
var opts = map__13411__$1;
var statearr_13413_13419 = state;
(statearr_13413_13419[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__13411,map__13411__$1,opts){
return (function (val){
var statearr_13414_13420 = state;
(statearr_13414_13420[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__13411,map__13411__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_13415_13421 = state;
(statearr_13415_13421[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13406){
var G__13407 = cljs.core.first(seq13406);
var seq13406__$1 = cljs.core.next(seq13406);
var G__13408 = cljs.core.first(seq13406__$1);
var seq13406__$2 = cljs.core.next(seq13406__$1);
var G__13409 = cljs.core.first(seq13406__$2);
var seq13406__$3 = cljs.core.next(seq13406__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13407,G__13408,G__13409,seq13406__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13422 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13423){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13423 = meta13423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13424,meta13423__$1){
var self__ = this;
var _13424__$1 = this;
return (new cljs.core.async.t_cljs$core$async13422(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13423__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13424){
var self__ = this;
var _13424__$1 = this;
return self__.meta13423;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13422.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta13423], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13422";

cljs.core.async.t_cljs$core$async13422.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13422");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13422.
 */
cljs.core.async.__GT_t_cljs$core$async13422 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13422(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13423){
return (new cljs.core.async.t_cljs$core$async13422(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13423));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13422(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12525__auto___13586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___13586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___13586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13526){
var state_val_13527 = (state_13526[(1)]);
if((state_val_13527 === (7))){
var inst_13441 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
var statearr_13528_13587 = state_13526__$1;
(statearr_13528_13587[(2)] = inst_13441);

(statearr_13528_13587[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (20))){
var inst_13453 = (state_13526[(7)]);
var state_13526__$1 = state_13526;
var statearr_13529_13588 = state_13526__$1;
(statearr_13529_13588[(2)] = inst_13453);

(statearr_13529_13588[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (27))){
var state_13526__$1 = state_13526;
var statearr_13530_13589 = state_13526__$1;
(statearr_13530_13589[(2)] = null);

(statearr_13530_13589[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (1))){
var inst_13428 = (state_13526[(8)]);
var inst_13428__$1 = calc_state();
var inst_13430 = (inst_13428__$1 == null);
var inst_13431 = cljs.core.not(inst_13430);
var state_13526__$1 = (function (){var statearr_13531 = state_13526;
(statearr_13531[(8)] = inst_13428__$1);

return statearr_13531;
})();
if(inst_13431){
var statearr_13532_13590 = state_13526__$1;
(statearr_13532_13590[(1)] = (2));

} else {
var statearr_13533_13591 = state_13526__$1;
(statearr_13533_13591[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (24))){
var inst_13477 = (state_13526[(9)]);
var inst_13500 = (state_13526[(10)]);
var inst_13486 = (state_13526[(11)]);
var inst_13500__$1 = (inst_13477.cljs$core$IFn$_invoke$arity$1 ? inst_13477.cljs$core$IFn$_invoke$arity$1(inst_13486) : inst_13477.call(null,inst_13486));
var state_13526__$1 = (function (){var statearr_13534 = state_13526;
(statearr_13534[(10)] = inst_13500__$1);

return statearr_13534;
})();
if(cljs.core.truth_(inst_13500__$1)){
var statearr_13535_13592 = state_13526__$1;
(statearr_13535_13592[(1)] = (29));

} else {
var statearr_13536_13593 = state_13526__$1;
(statearr_13536_13593[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (4))){
var inst_13444 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13444)){
var statearr_13537_13594 = state_13526__$1;
(statearr_13537_13594[(1)] = (8));

} else {
var statearr_13538_13595 = state_13526__$1;
(statearr_13538_13595[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (15))){
var inst_13471 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13471)){
var statearr_13539_13596 = state_13526__$1;
(statearr_13539_13596[(1)] = (19));

} else {
var statearr_13540_13597 = state_13526__$1;
(statearr_13540_13597[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (21))){
var inst_13476 = (state_13526[(12)]);
var inst_13476__$1 = (state_13526[(2)]);
var inst_13477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13476__$1,cljs.core.cst$kw$solos);
var inst_13478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13476__$1,cljs.core.cst$kw$mutes);
var inst_13479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13476__$1,cljs.core.cst$kw$reads);
var state_13526__$1 = (function (){var statearr_13541 = state_13526;
(statearr_13541[(9)] = inst_13477);

(statearr_13541[(13)] = inst_13478);

(statearr_13541[(12)] = inst_13476__$1);

return statearr_13541;
})();
return cljs.core.async.ioc_alts_BANG_(state_13526__$1,(22),inst_13479);
} else {
if((state_val_13527 === (31))){
var inst_13508 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13508)){
var statearr_13542_13598 = state_13526__$1;
(statearr_13542_13598[(1)] = (32));

} else {
var statearr_13543_13599 = state_13526__$1;
(statearr_13543_13599[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (32))){
var inst_13485 = (state_13526[(14)]);
var state_13526__$1 = state_13526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13526__$1,(35),out,inst_13485);
} else {
if((state_val_13527 === (33))){
var inst_13476 = (state_13526[(12)]);
var inst_13453 = inst_13476;
var state_13526__$1 = (function (){var statearr_13544 = state_13526;
(statearr_13544[(7)] = inst_13453);

return statearr_13544;
})();
var statearr_13545_13600 = state_13526__$1;
(statearr_13545_13600[(2)] = null);

(statearr_13545_13600[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (13))){
var inst_13453 = (state_13526[(7)]);
var inst_13460 = inst_13453.cljs$lang$protocol_mask$partition0$;
var inst_13461 = (inst_13460 & (64));
var inst_13462 = inst_13453.cljs$core$ISeq$;
var inst_13463 = (cljs.core.PROTOCOL_SENTINEL === inst_13462);
var inst_13464 = ((inst_13461) || (inst_13463));
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13464)){
var statearr_13546_13601 = state_13526__$1;
(statearr_13546_13601[(1)] = (16));

} else {
var statearr_13547_13602 = state_13526__$1;
(statearr_13547_13602[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (22))){
var inst_13485 = (state_13526[(14)]);
var inst_13486 = (state_13526[(11)]);
var inst_13484 = (state_13526[(2)]);
var inst_13485__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13484,(0),null);
var inst_13486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13484,(1),null);
var inst_13487 = (inst_13485__$1 == null);
var inst_13488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13486__$1,change);
var inst_13489 = ((inst_13487) || (inst_13488));
var state_13526__$1 = (function (){var statearr_13548 = state_13526;
(statearr_13548[(14)] = inst_13485__$1);

(statearr_13548[(11)] = inst_13486__$1);

return statearr_13548;
})();
if(cljs.core.truth_(inst_13489)){
var statearr_13549_13603 = state_13526__$1;
(statearr_13549_13603[(1)] = (23));

} else {
var statearr_13550_13604 = state_13526__$1;
(statearr_13550_13604[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (36))){
var inst_13476 = (state_13526[(12)]);
var inst_13453 = inst_13476;
var state_13526__$1 = (function (){var statearr_13551 = state_13526;
(statearr_13551[(7)] = inst_13453);

return statearr_13551;
})();
var statearr_13552_13605 = state_13526__$1;
(statearr_13552_13605[(2)] = null);

(statearr_13552_13605[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (29))){
var inst_13500 = (state_13526[(10)]);
var state_13526__$1 = state_13526;
var statearr_13553_13606 = state_13526__$1;
(statearr_13553_13606[(2)] = inst_13500);

(statearr_13553_13606[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (6))){
var state_13526__$1 = state_13526;
var statearr_13554_13607 = state_13526__$1;
(statearr_13554_13607[(2)] = false);

(statearr_13554_13607[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (28))){
var inst_13496 = (state_13526[(2)]);
var inst_13497 = calc_state();
var inst_13453 = inst_13497;
var state_13526__$1 = (function (){var statearr_13555 = state_13526;
(statearr_13555[(7)] = inst_13453);

(statearr_13555[(15)] = inst_13496);

return statearr_13555;
})();
var statearr_13556_13608 = state_13526__$1;
(statearr_13556_13608[(2)] = null);

(statearr_13556_13608[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (25))){
var inst_13522 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
var statearr_13557_13609 = state_13526__$1;
(statearr_13557_13609[(2)] = inst_13522);

(statearr_13557_13609[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (34))){
var inst_13520 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
var statearr_13558_13610 = state_13526__$1;
(statearr_13558_13610[(2)] = inst_13520);

(statearr_13558_13610[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (17))){
var state_13526__$1 = state_13526;
var statearr_13559_13611 = state_13526__$1;
(statearr_13559_13611[(2)] = false);

(statearr_13559_13611[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (3))){
var state_13526__$1 = state_13526;
var statearr_13560_13612 = state_13526__$1;
(statearr_13560_13612[(2)] = false);

(statearr_13560_13612[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (12))){
var inst_13524 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13526__$1,inst_13524);
} else {
if((state_val_13527 === (2))){
var inst_13428 = (state_13526[(8)]);
var inst_13433 = inst_13428.cljs$lang$protocol_mask$partition0$;
var inst_13434 = (inst_13433 & (64));
var inst_13435 = inst_13428.cljs$core$ISeq$;
var inst_13436 = (cljs.core.PROTOCOL_SENTINEL === inst_13435);
var inst_13437 = ((inst_13434) || (inst_13436));
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13437)){
var statearr_13561_13613 = state_13526__$1;
(statearr_13561_13613[(1)] = (5));

} else {
var statearr_13562_13614 = state_13526__$1;
(statearr_13562_13614[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (23))){
var inst_13485 = (state_13526[(14)]);
var inst_13491 = (inst_13485 == null);
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13491)){
var statearr_13563_13615 = state_13526__$1;
(statearr_13563_13615[(1)] = (26));

} else {
var statearr_13564_13616 = state_13526__$1;
(statearr_13564_13616[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (35))){
var inst_13511 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
if(cljs.core.truth_(inst_13511)){
var statearr_13565_13617 = state_13526__$1;
(statearr_13565_13617[(1)] = (36));

} else {
var statearr_13566_13618 = state_13526__$1;
(statearr_13566_13618[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (19))){
var inst_13453 = (state_13526[(7)]);
var inst_13473 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13453);
var state_13526__$1 = state_13526;
var statearr_13567_13619 = state_13526__$1;
(statearr_13567_13619[(2)] = inst_13473);

(statearr_13567_13619[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (11))){
var inst_13453 = (state_13526[(7)]);
var inst_13457 = (inst_13453 == null);
var inst_13458 = cljs.core.not(inst_13457);
var state_13526__$1 = state_13526;
if(inst_13458){
var statearr_13568_13620 = state_13526__$1;
(statearr_13568_13620[(1)] = (13));

} else {
var statearr_13569_13621 = state_13526__$1;
(statearr_13569_13621[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (9))){
var inst_13428 = (state_13526[(8)]);
var state_13526__$1 = state_13526;
var statearr_13570_13622 = state_13526__$1;
(statearr_13570_13622[(2)] = inst_13428);

(statearr_13570_13622[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (5))){
var state_13526__$1 = state_13526;
var statearr_13571_13623 = state_13526__$1;
(statearr_13571_13623[(2)] = true);

(statearr_13571_13623[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (14))){
var state_13526__$1 = state_13526;
var statearr_13572_13624 = state_13526__$1;
(statearr_13572_13624[(2)] = false);

(statearr_13572_13624[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (26))){
var inst_13486 = (state_13526[(11)]);
var inst_13493 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13486);
var state_13526__$1 = state_13526;
var statearr_13573_13625 = state_13526__$1;
(statearr_13573_13625[(2)] = inst_13493);

(statearr_13573_13625[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (16))){
var state_13526__$1 = state_13526;
var statearr_13574_13626 = state_13526__$1;
(statearr_13574_13626[(2)] = true);

(statearr_13574_13626[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (38))){
var inst_13516 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
var statearr_13575_13627 = state_13526__$1;
(statearr_13575_13627[(2)] = inst_13516);

(statearr_13575_13627[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (30))){
var inst_13477 = (state_13526[(9)]);
var inst_13486 = (state_13526[(11)]);
var inst_13478 = (state_13526[(13)]);
var inst_13503 = cljs.core.empty_QMARK_(inst_13477);
var inst_13504 = (inst_13478.cljs$core$IFn$_invoke$arity$1 ? inst_13478.cljs$core$IFn$_invoke$arity$1(inst_13486) : inst_13478.call(null,inst_13486));
var inst_13505 = cljs.core.not(inst_13504);
var inst_13506 = ((inst_13503) && (inst_13505));
var state_13526__$1 = state_13526;
var statearr_13576_13628 = state_13526__$1;
(statearr_13576_13628[(2)] = inst_13506);

(statearr_13576_13628[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (10))){
var inst_13428 = (state_13526[(8)]);
var inst_13449 = (state_13526[(2)]);
var inst_13450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13449,cljs.core.cst$kw$solos);
var inst_13451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13449,cljs.core.cst$kw$mutes);
var inst_13452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13449,cljs.core.cst$kw$reads);
var inst_13453 = inst_13428;
var state_13526__$1 = (function (){var statearr_13577 = state_13526;
(statearr_13577[(16)] = inst_13451);

(statearr_13577[(17)] = inst_13450);

(statearr_13577[(7)] = inst_13453);

(statearr_13577[(18)] = inst_13452);

return statearr_13577;
})();
var statearr_13578_13629 = state_13526__$1;
(statearr_13578_13629[(2)] = null);

(statearr_13578_13629[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (18))){
var inst_13468 = (state_13526[(2)]);
var state_13526__$1 = state_13526;
var statearr_13579_13630 = state_13526__$1;
(statearr_13579_13630[(2)] = inst_13468);

(statearr_13579_13630[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (37))){
var state_13526__$1 = state_13526;
var statearr_13580_13631 = state_13526__$1;
(statearr_13580_13631[(2)] = null);

(statearr_13580_13631[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13527 === (8))){
var inst_13428 = (state_13526[(8)]);
var inst_13446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13428);
var state_13526__$1 = state_13526;
var statearr_13581_13632 = state_13526__$1;
(statearr_13581_13632[(2)] = inst_13446);

(statearr_13581_13632[(1)] = (10));


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
});})(c__12525__auto___13586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12422__auto__,c__12525__auto___13586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12423__auto__ = null;
var cljs$core$async$mix_$_state_machine__12423__auto____0 = (function (){
var statearr_13582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13582[(0)] = cljs$core$async$mix_$_state_machine__12423__auto__);

(statearr_13582[(1)] = (1));

return statearr_13582;
});
var cljs$core$async$mix_$_state_machine__12423__auto____1 = (function (state_13526){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13526);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13583){if((e13583 instanceof Object)){
var ex__12426__auto__ = e13583;
var statearr_13584_13633 = state_13526;
(statearr_13584_13633[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13526);

return cljs.core.cst$kw$recur;
} else {
throw e13583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13634 = state_13526;
state_13526 = G__13634;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12423__auto__ = function(state_13526){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12423__auto____1.call(this,state_13526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12423__auto____0;
cljs$core$async$mix_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12423__auto____1;
return cljs$core$async$mix_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___13586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12527__auto__ = (function (){var statearr_13585 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13585[(6)] = c__12525__auto___13586);

return statearr_13585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___13586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__13636 = arguments.length;
switch (G__13636) {
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
var G__13640 = arguments.length;
switch (G__13640) {
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
return (function (p1__13638_SHARP_){
if(cljs.core.truth_((p1__13638_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13638_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13638_SHARP_.call(null,topic)))){
return p1__13638_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13638_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13641 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13642){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13642 = meta13642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13643,meta13642__$1){
var self__ = this;
var _13643__$1 = this;
return (new cljs.core.async.t_cljs$core$async13641(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13642__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13643){
var self__ = this;
var _13643__$1 = this;
return self__.meta13642;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta13642], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13641";

cljs.core.async.t_cljs$core$async13641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async13641");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13641.
 */
cljs.core.async.__GT_t_cljs$core$async13641 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13642){
return (new cljs.core.async.t_cljs$core$async13641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13642));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13641(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12525__auto___13761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___13761,mults,ensure_mult,p){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___13761,mults,ensure_mult,p){
return (function (state_13715){
var state_val_13716 = (state_13715[(1)]);
if((state_val_13716 === (7))){
var inst_13711 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13717_13762 = state_13715__$1;
(statearr_13717_13762[(2)] = inst_13711);

(statearr_13717_13762[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (20))){
var state_13715__$1 = state_13715;
var statearr_13718_13763 = state_13715__$1;
(statearr_13718_13763[(2)] = null);

(statearr_13718_13763[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (1))){
var state_13715__$1 = state_13715;
var statearr_13719_13764 = state_13715__$1;
(statearr_13719_13764[(2)] = null);

(statearr_13719_13764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (24))){
var inst_13694 = (state_13715[(7)]);
var inst_13703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13694);
var state_13715__$1 = state_13715;
var statearr_13720_13765 = state_13715__$1;
(statearr_13720_13765[(2)] = inst_13703);

(statearr_13720_13765[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (4))){
var inst_13646 = (state_13715[(8)]);
var inst_13646__$1 = (state_13715[(2)]);
var inst_13647 = (inst_13646__$1 == null);
var state_13715__$1 = (function (){var statearr_13721 = state_13715;
(statearr_13721[(8)] = inst_13646__$1);

return statearr_13721;
})();
if(cljs.core.truth_(inst_13647)){
var statearr_13722_13766 = state_13715__$1;
(statearr_13722_13766[(1)] = (5));

} else {
var statearr_13723_13767 = state_13715__$1;
(statearr_13723_13767[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (15))){
var inst_13688 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13724_13768 = state_13715__$1;
(statearr_13724_13768[(2)] = inst_13688);

(statearr_13724_13768[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (21))){
var inst_13708 = (state_13715[(2)]);
var state_13715__$1 = (function (){var statearr_13725 = state_13715;
(statearr_13725[(9)] = inst_13708);

return statearr_13725;
})();
var statearr_13726_13769 = state_13715__$1;
(statearr_13726_13769[(2)] = null);

(statearr_13726_13769[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (13))){
var inst_13670 = (state_13715[(10)]);
var inst_13672 = cljs.core.chunked_seq_QMARK_(inst_13670);
var state_13715__$1 = state_13715;
if(inst_13672){
var statearr_13727_13770 = state_13715__$1;
(statearr_13727_13770[(1)] = (16));

} else {
var statearr_13728_13771 = state_13715__$1;
(statearr_13728_13771[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (22))){
var inst_13700 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
if(cljs.core.truth_(inst_13700)){
var statearr_13729_13772 = state_13715__$1;
(statearr_13729_13772[(1)] = (23));

} else {
var statearr_13730_13773 = state_13715__$1;
(statearr_13730_13773[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (6))){
var inst_13646 = (state_13715[(8)]);
var inst_13694 = (state_13715[(7)]);
var inst_13696 = (state_13715[(11)]);
var inst_13694__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13646) : topic_fn.call(null,inst_13646));
var inst_13695 = cljs.core.deref(mults);
var inst_13696__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13695,inst_13694__$1);
var state_13715__$1 = (function (){var statearr_13731 = state_13715;
(statearr_13731[(7)] = inst_13694__$1);

(statearr_13731[(11)] = inst_13696__$1);

return statearr_13731;
})();
if(cljs.core.truth_(inst_13696__$1)){
var statearr_13732_13774 = state_13715__$1;
(statearr_13732_13774[(1)] = (19));

} else {
var statearr_13733_13775 = state_13715__$1;
(statearr_13733_13775[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (25))){
var inst_13705 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13734_13776 = state_13715__$1;
(statearr_13734_13776[(2)] = inst_13705);

(statearr_13734_13776[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (17))){
var inst_13670 = (state_13715[(10)]);
var inst_13679 = cljs.core.first(inst_13670);
var inst_13680 = cljs.core.async.muxch_STAR_(inst_13679);
var inst_13681 = cljs.core.async.close_BANG_(inst_13680);
var inst_13682 = cljs.core.next(inst_13670);
var inst_13656 = inst_13682;
var inst_13657 = null;
var inst_13658 = (0);
var inst_13659 = (0);
var state_13715__$1 = (function (){var statearr_13735 = state_13715;
(statearr_13735[(12)] = inst_13658);

(statearr_13735[(13)] = inst_13656);

(statearr_13735[(14)] = inst_13657);

(statearr_13735[(15)] = inst_13659);

(statearr_13735[(16)] = inst_13681);

return statearr_13735;
})();
var statearr_13736_13777 = state_13715__$1;
(statearr_13736_13777[(2)] = null);

(statearr_13736_13777[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (3))){
var inst_13713 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13715__$1,inst_13713);
} else {
if((state_val_13716 === (12))){
var inst_13690 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13737_13778 = state_13715__$1;
(statearr_13737_13778[(2)] = inst_13690);

(statearr_13737_13778[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (2))){
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13715__$1,(4),ch);
} else {
if((state_val_13716 === (23))){
var state_13715__$1 = state_13715;
var statearr_13738_13779 = state_13715__$1;
(statearr_13738_13779[(2)] = null);

(statearr_13738_13779[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (19))){
var inst_13646 = (state_13715[(8)]);
var inst_13696 = (state_13715[(11)]);
var inst_13698 = cljs.core.async.muxch_STAR_(inst_13696);
var state_13715__$1 = state_13715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13715__$1,(22),inst_13698,inst_13646);
} else {
if((state_val_13716 === (11))){
var inst_13656 = (state_13715[(13)]);
var inst_13670 = (state_13715[(10)]);
var inst_13670__$1 = cljs.core.seq(inst_13656);
var state_13715__$1 = (function (){var statearr_13739 = state_13715;
(statearr_13739[(10)] = inst_13670__$1);

return statearr_13739;
})();
if(inst_13670__$1){
var statearr_13740_13780 = state_13715__$1;
(statearr_13740_13780[(1)] = (13));

} else {
var statearr_13741_13781 = state_13715__$1;
(statearr_13741_13781[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (9))){
var inst_13692 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13742_13782 = state_13715__$1;
(statearr_13742_13782[(2)] = inst_13692);

(statearr_13742_13782[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (5))){
var inst_13653 = cljs.core.deref(mults);
var inst_13654 = cljs.core.vals(inst_13653);
var inst_13655 = cljs.core.seq(inst_13654);
var inst_13656 = inst_13655;
var inst_13657 = null;
var inst_13658 = (0);
var inst_13659 = (0);
var state_13715__$1 = (function (){var statearr_13743 = state_13715;
(statearr_13743[(12)] = inst_13658);

(statearr_13743[(13)] = inst_13656);

(statearr_13743[(14)] = inst_13657);

(statearr_13743[(15)] = inst_13659);

return statearr_13743;
})();
var statearr_13744_13783 = state_13715__$1;
(statearr_13744_13783[(2)] = null);

(statearr_13744_13783[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (14))){
var state_13715__$1 = state_13715;
var statearr_13748_13784 = state_13715__$1;
(statearr_13748_13784[(2)] = null);

(statearr_13748_13784[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (16))){
var inst_13670 = (state_13715[(10)]);
var inst_13674 = cljs.core.chunk_first(inst_13670);
var inst_13675 = cljs.core.chunk_rest(inst_13670);
var inst_13676 = cljs.core.count(inst_13674);
var inst_13656 = inst_13675;
var inst_13657 = inst_13674;
var inst_13658 = inst_13676;
var inst_13659 = (0);
var state_13715__$1 = (function (){var statearr_13749 = state_13715;
(statearr_13749[(12)] = inst_13658);

(statearr_13749[(13)] = inst_13656);

(statearr_13749[(14)] = inst_13657);

(statearr_13749[(15)] = inst_13659);

return statearr_13749;
})();
var statearr_13750_13785 = state_13715__$1;
(statearr_13750_13785[(2)] = null);

(statearr_13750_13785[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (10))){
var inst_13658 = (state_13715[(12)]);
var inst_13656 = (state_13715[(13)]);
var inst_13657 = (state_13715[(14)]);
var inst_13659 = (state_13715[(15)]);
var inst_13664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13657,inst_13659);
var inst_13665 = cljs.core.async.muxch_STAR_(inst_13664);
var inst_13666 = cljs.core.async.close_BANG_(inst_13665);
var inst_13667 = (inst_13659 + (1));
var tmp13745 = inst_13658;
var tmp13746 = inst_13656;
var tmp13747 = inst_13657;
var inst_13656__$1 = tmp13746;
var inst_13657__$1 = tmp13747;
var inst_13658__$1 = tmp13745;
var inst_13659__$1 = inst_13667;
var state_13715__$1 = (function (){var statearr_13751 = state_13715;
(statearr_13751[(12)] = inst_13658__$1);

(statearr_13751[(13)] = inst_13656__$1);

(statearr_13751[(14)] = inst_13657__$1);

(statearr_13751[(15)] = inst_13659__$1);

(statearr_13751[(17)] = inst_13666);

return statearr_13751;
})();
var statearr_13752_13786 = state_13715__$1;
(statearr_13752_13786[(2)] = null);

(statearr_13752_13786[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (18))){
var inst_13685 = (state_13715[(2)]);
var state_13715__$1 = state_13715;
var statearr_13753_13787 = state_13715__$1;
(statearr_13753_13787[(2)] = inst_13685);

(statearr_13753_13787[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13716 === (8))){
var inst_13658 = (state_13715[(12)]);
var inst_13659 = (state_13715[(15)]);
var inst_13661 = (inst_13659 < inst_13658);
var inst_13662 = inst_13661;
var state_13715__$1 = state_13715;
if(cljs.core.truth_(inst_13662)){
var statearr_13754_13788 = state_13715__$1;
(statearr_13754_13788[(1)] = (10));

} else {
var statearr_13755_13789 = state_13715__$1;
(statearr_13755_13789[(1)] = (11));

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
});})(c__12525__auto___13761,mults,ensure_mult,p))
;
return ((function (switch__12422__auto__,c__12525__auto___13761,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_13756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13756[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_13756[(1)] = (1));

return statearr_13756;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_13715){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13715);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13757){if((e13757 instanceof Object)){
var ex__12426__auto__ = e13757;
var statearr_13758_13790 = state_13715;
(statearr_13758_13790[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13715);

return cljs.core.cst$kw$recur;
} else {
throw e13757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13791 = state_13715;
state_13715 = G__13791;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_13715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_13715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___13761,mults,ensure_mult,p))
})();
var state__12527__auto__ = (function (){var statearr_13759 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13759[(6)] = c__12525__auto___13761);

return statearr_13759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___13761,mults,ensure_mult,p))
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
var G__13793 = arguments.length;
switch (G__13793) {
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
var G__13796 = arguments.length;
switch (G__13796) {
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
var G__13799 = arguments.length;
switch (G__13799) {
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
var c__12525__auto___13866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___13866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___13866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13838){
var state_val_13839 = (state_13838[(1)]);
if((state_val_13839 === (7))){
var state_13838__$1 = state_13838;
var statearr_13840_13867 = state_13838__$1;
(statearr_13840_13867[(2)] = null);

(statearr_13840_13867[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (1))){
var state_13838__$1 = state_13838;
var statearr_13841_13868 = state_13838__$1;
(statearr_13841_13868[(2)] = null);

(statearr_13841_13868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (4))){
var inst_13802 = (state_13838[(7)]);
var inst_13804 = (inst_13802 < cnt);
var state_13838__$1 = state_13838;
if(cljs.core.truth_(inst_13804)){
var statearr_13842_13869 = state_13838__$1;
(statearr_13842_13869[(1)] = (6));

} else {
var statearr_13843_13870 = state_13838__$1;
(statearr_13843_13870[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (15))){
var inst_13834 = (state_13838[(2)]);
var state_13838__$1 = state_13838;
var statearr_13844_13871 = state_13838__$1;
(statearr_13844_13871[(2)] = inst_13834);

(statearr_13844_13871[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (13))){
var inst_13827 = cljs.core.async.close_BANG_(out);
var state_13838__$1 = state_13838;
var statearr_13845_13872 = state_13838__$1;
(statearr_13845_13872[(2)] = inst_13827);

(statearr_13845_13872[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (6))){
var state_13838__$1 = state_13838;
var statearr_13846_13873 = state_13838__$1;
(statearr_13846_13873[(2)] = null);

(statearr_13846_13873[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (3))){
var inst_13836 = (state_13838[(2)]);
var state_13838__$1 = state_13838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13838__$1,inst_13836);
} else {
if((state_val_13839 === (12))){
var inst_13824 = (state_13838[(8)]);
var inst_13824__$1 = (state_13838[(2)]);
var inst_13825 = cljs.core.some(cljs.core.nil_QMARK_,inst_13824__$1);
var state_13838__$1 = (function (){var statearr_13847 = state_13838;
(statearr_13847[(8)] = inst_13824__$1);

return statearr_13847;
})();
if(cljs.core.truth_(inst_13825)){
var statearr_13848_13874 = state_13838__$1;
(statearr_13848_13874[(1)] = (13));

} else {
var statearr_13849_13875 = state_13838__$1;
(statearr_13849_13875[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (2))){
var inst_13801 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13802 = (0);
var state_13838__$1 = (function (){var statearr_13850 = state_13838;
(statearr_13850[(9)] = inst_13801);

(statearr_13850[(7)] = inst_13802);

return statearr_13850;
})();
var statearr_13851_13876 = state_13838__$1;
(statearr_13851_13876[(2)] = null);

(statearr_13851_13876[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (11))){
var inst_13802 = (state_13838[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13838,(10),Object,null,(9));
var inst_13811 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13802) : chs__$1.call(null,inst_13802));
var inst_13812 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13802) : done.call(null,inst_13802));
var inst_13813 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13811,inst_13812);
var state_13838__$1 = state_13838;
var statearr_13852_13877 = state_13838__$1;
(statearr_13852_13877[(2)] = inst_13813);


cljs.core.async.impl.ioc_helpers.process_exception(state_13838__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (9))){
var inst_13802 = (state_13838[(7)]);
var inst_13815 = (state_13838[(2)]);
var inst_13816 = (inst_13802 + (1));
var inst_13802__$1 = inst_13816;
var state_13838__$1 = (function (){var statearr_13853 = state_13838;
(statearr_13853[(7)] = inst_13802__$1);

(statearr_13853[(10)] = inst_13815);

return statearr_13853;
})();
var statearr_13854_13878 = state_13838__$1;
(statearr_13854_13878[(2)] = null);

(statearr_13854_13878[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (5))){
var inst_13822 = (state_13838[(2)]);
var state_13838__$1 = (function (){var statearr_13855 = state_13838;
(statearr_13855[(11)] = inst_13822);

return statearr_13855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13838__$1,(12),dchan);
} else {
if((state_val_13839 === (14))){
var inst_13824 = (state_13838[(8)]);
var inst_13829 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13824);
var state_13838__$1 = state_13838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13838__$1,(16),out,inst_13829);
} else {
if((state_val_13839 === (16))){
var inst_13831 = (state_13838[(2)]);
var state_13838__$1 = (function (){var statearr_13856 = state_13838;
(statearr_13856[(12)] = inst_13831);

return statearr_13856;
})();
var statearr_13857_13879 = state_13838__$1;
(statearr_13857_13879[(2)] = null);

(statearr_13857_13879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (10))){
var inst_13806 = (state_13838[(2)]);
var inst_13807 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13838__$1 = (function (){var statearr_13858 = state_13838;
(statearr_13858[(13)] = inst_13806);

return statearr_13858;
})();
var statearr_13859_13880 = state_13838__$1;
(statearr_13859_13880[(2)] = inst_13807);


cljs.core.async.impl.ioc_helpers.process_exception(state_13838__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13839 === (8))){
var inst_13820 = (state_13838[(2)]);
var state_13838__$1 = state_13838;
var statearr_13860_13881 = state_13838__$1;
(statearr_13860_13881[(2)] = inst_13820);

(statearr_13860_13881[(1)] = (5));


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
});})(c__12525__auto___13866,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12422__auto__,c__12525__auto___13866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_13861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13861[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_13861[(1)] = (1));

return statearr_13861;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_13838){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13838);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13862){if((e13862 instanceof Object)){
var ex__12426__auto__ = e13862;
var statearr_13863_13882 = state_13838;
(statearr_13863_13882[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13838);

return cljs.core.cst$kw$recur;
} else {
throw e13862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13883 = state_13838;
state_13838 = G__13883;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_13838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_13838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___13866,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12527__auto__ = (function (){var statearr_13864 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13864[(6)] = c__12525__auto___13866);

return statearr_13864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___13866,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__13886 = arguments.length;
switch (G__13886) {
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
var c__12525__auto___13940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___13940,out){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___13940,out){
return (function (state_13918){
var state_val_13919 = (state_13918[(1)]);
if((state_val_13919 === (7))){
var inst_13897 = (state_13918[(7)]);
var inst_13898 = (state_13918[(8)]);
var inst_13897__$1 = (state_13918[(2)]);
var inst_13898__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13897__$1,(0),null);
var inst_13899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13897__$1,(1),null);
var inst_13900 = (inst_13898__$1 == null);
var state_13918__$1 = (function (){var statearr_13920 = state_13918;
(statearr_13920[(9)] = inst_13899);

(statearr_13920[(7)] = inst_13897__$1);

(statearr_13920[(8)] = inst_13898__$1);

return statearr_13920;
})();
if(cljs.core.truth_(inst_13900)){
var statearr_13921_13941 = state_13918__$1;
(statearr_13921_13941[(1)] = (8));

} else {
var statearr_13922_13942 = state_13918__$1;
(statearr_13922_13942[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (1))){
var inst_13887 = cljs.core.vec(chs);
var inst_13888 = inst_13887;
var state_13918__$1 = (function (){var statearr_13923 = state_13918;
(statearr_13923[(10)] = inst_13888);

return statearr_13923;
})();
var statearr_13924_13943 = state_13918__$1;
(statearr_13924_13943[(2)] = null);

(statearr_13924_13943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (4))){
var inst_13888 = (state_13918[(10)]);
var state_13918__$1 = state_13918;
return cljs.core.async.ioc_alts_BANG_(state_13918__$1,(7),inst_13888);
} else {
if((state_val_13919 === (6))){
var inst_13914 = (state_13918[(2)]);
var state_13918__$1 = state_13918;
var statearr_13925_13944 = state_13918__$1;
(statearr_13925_13944[(2)] = inst_13914);

(statearr_13925_13944[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (3))){
var inst_13916 = (state_13918[(2)]);
var state_13918__$1 = state_13918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13918__$1,inst_13916);
} else {
if((state_val_13919 === (2))){
var inst_13888 = (state_13918[(10)]);
var inst_13890 = cljs.core.count(inst_13888);
var inst_13891 = (inst_13890 > (0));
var state_13918__$1 = state_13918;
if(cljs.core.truth_(inst_13891)){
var statearr_13927_13945 = state_13918__$1;
(statearr_13927_13945[(1)] = (4));

} else {
var statearr_13928_13946 = state_13918__$1;
(statearr_13928_13946[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (11))){
var inst_13888 = (state_13918[(10)]);
var inst_13907 = (state_13918[(2)]);
var tmp13926 = inst_13888;
var inst_13888__$1 = tmp13926;
var state_13918__$1 = (function (){var statearr_13929 = state_13918;
(statearr_13929[(10)] = inst_13888__$1);

(statearr_13929[(11)] = inst_13907);

return statearr_13929;
})();
var statearr_13930_13947 = state_13918__$1;
(statearr_13930_13947[(2)] = null);

(statearr_13930_13947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (9))){
var inst_13898 = (state_13918[(8)]);
var state_13918__$1 = state_13918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13918__$1,(11),out,inst_13898);
} else {
if((state_val_13919 === (5))){
var inst_13912 = cljs.core.async.close_BANG_(out);
var state_13918__$1 = state_13918;
var statearr_13931_13948 = state_13918__$1;
(statearr_13931_13948[(2)] = inst_13912);

(statearr_13931_13948[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (10))){
var inst_13910 = (state_13918[(2)]);
var state_13918__$1 = state_13918;
var statearr_13932_13949 = state_13918__$1;
(statearr_13932_13949[(2)] = inst_13910);

(statearr_13932_13949[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13919 === (8))){
var inst_13888 = (state_13918[(10)]);
var inst_13899 = (state_13918[(9)]);
var inst_13897 = (state_13918[(7)]);
var inst_13898 = (state_13918[(8)]);
var inst_13902 = (function (){var cs = inst_13888;
var vec__13893 = inst_13897;
var v = inst_13898;
var c = inst_13899;
return ((function (cs,vec__13893,v,c,inst_13888,inst_13899,inst_13897,inst_13898,state_val_13919,c__12525__auto___13940,out){
return (function (p1__13884_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13884_SHARP_);
});
;})(cs,vec__13893,v,c,inst_13888,inst_13899,inst_13897,inst_13898,state_val_13919,c__12525__auto___13940,out))
})();
var inst_13903 = cljs.core.filterv(inst_13902,inst_13888);
var inst_13888__$1 = inst_13903;
var state_13918__$1 = (function (){var statearr_13933 = state_13918;
(statearr_13933[(10)] = inst_13888__$1);

return statearr_13933;
})();
var statearr_13934_13950 = state_13918__$1;
(statearr_13934_13950[(2)] = null);

(statearr_13934_13950[(1)] = (2));


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
});})(c__12525__auto___13940,out))
;
return ((function (switch__12422__auto__,c__12525__auto___13940,out){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_13935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13935[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_13935[(1)] = (1));

return statearr_13935;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_13918){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13918);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13936){if((e13936 instanceof Object)){
var ex__12426__auto__ = e13936;
var statearr_13937_13951 = state_13918;
(statearr_13937_13951[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13918);

return cljs.core.cst$kw$recur;
} else {
throw e13936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__13952 = state_13918;
state_13918 = G__13952;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_13918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_13918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___13940,out))
})();
var state__12527__auto__ = (function (){var statearr_13938 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13938[(6)] = c__12525__auto___13940);

return statearr_13938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___13940,out))
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
var G__13954 = arguments.length;
switch (G__13954) {
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
var c__12525__auto___13999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___13999,out){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___13999,out){
return (function (state_13978){
var state_val_13979 = (state_13978[(1)]);
if((state_val_13979 === (7))){
var inst_13960 = (state_13978[(7)]);
var inst_13960__$1 = (state_13978[(2)]);
var inst_13961 = (inst_13960__$1 == null);
var inst_13962 = cljs.core.not(inst_13961);
var state_13978__$1 = (function (){var statearr_13980 = state_13978;
(statearr_13980[(7)] = inst_13960__$1);

return statearr_13980;
})();
if(inst_13962){
var statearr_13981_14000 = state_13978__$1;
(statearr_13981_14000[(1)] = (8));

} else {
var statearr_13982_14001 = state_13978__$1;
(statearr_13982_14001[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (1))){
var inst_13955 = (0);
var state_13978__$1 = (function (){var statearr_13983 = state_13978;
(statearr_13983[(8)] = inst_13955);

return statearr_13983;
})();
var statearr_13984_14002 = state_13978__$1;
(statearr_13984_14002[(2)] = null);

(statearr_13984_14002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (4))){
var state_13978__$1 = state_13978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13978__$1,(7),ch);
} else {
if((state_val_13979 === (6))){
var inst_13973 = (state_13978[(2)]);
var state_13978__$1 = state_13978;
var statearr_13985_14003 = state_13978__$1;
(statearr_13985_14003[(2)] = inst_13973);

(statearr_13985_14003[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (3))){
var inst_13975 = (state_13978[(2)]);
var inst_13976 = cljs.core.async.close_BANG_(out);
var state_13978__$1 = (function (){var statearr_13986 = state_13978;
(statearr_13986[(9)] = inst_13975);

return statearr_13986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13978__$1,inst_13976);
} else {
if((state_val_13979 === (2))){
var inst_13955 = (state_13978[(8)]);
var inst_13957 = (inst_13955 < n);
var state_13978__$1 = state_13978;
if(cljs.core.truth_(inst_13957)){
var statearr_13987_14004 = state_13978__$1;
(statearr_13987_14004[(1)] = (4));

} else {
var statearr_13988_14005 = state_13978__$1;
(statearr_13988_14005[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (11))){
var inst_13955 = (state_13978[(8)]);
var inst_13965 = (state_13978[(2)]);
var inst_13966 = (inst_13955 + (1));
var inst_13955__$1 = inst_13966;
var state_13978__$1 = (function (){var statearr_13989 = state_13978;
(statearr_13989[(10)] = inst_13965);

(statearr_13989[(8)] = inst_13955__$1);

return statearr_13989;
})();
var statearr_13990_14006 = state_13978__$1;
(statearr_13990_14006[(2)] = null);

(statearr_13990_14006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (9))){
var state_13978__$1 = state_13978;
var statearr_13991_14007 = state_13978__$1;
(statearr_13991_14007[(2)] = null);

(statearr_13991_14007[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (5))){
var state_13978__$1 = state_13978;
var statearr_13992_14008 = state_13978__$1;
(statearr_13992_14008[(2)] = null);

(statearr_13992_14008[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (10))){
var inst_13970 = (state_13978[(2)]);
var state_13978__$1 = state_13978;
var statearr_13993_14009 = state_13978__$1;
(statearr_13993_14009[(2)] = inst_13970);

(statearr_13993_14009[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13979 === (8))){
var inst_13960 = (state_13978[(7)]);
var state_13978__$1 = state_13978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13978__$1,(11),out,inst_13960);
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
});})(c__12525__auto___13999,out))
;
return ((function (switch__12422__auto__,c__12525__auto___13999,out){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_13994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13994[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_13994[(1)] = (1));

return statearr_13994;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_13978){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_13978);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e13995){if((e13995 instanceof Object)){
var ex__12426__auto__ = e13995;
var statearr_13996_14010 = state_13978;
(statearr_13996_14010[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13978);

return cljs.core.cst$kw$recur;
} else {
throw e13995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14011 = state_13978;
state_13978 = G__14011;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_13978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_13978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___13999,out))
})();
var state__12527__auto__ = (function (){var statearr_13997 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_13997[(6)] = c__12525__auto___13999);

return statearr_13997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___13999,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14013 = (function (f,ch,meta14014){
this.f = f;
this.ch = ch;
this.meta14014 = meta14014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14015,meta14014__$1){
var self__ = this;
var _14015__$1 = this;
return (new cljs.core.async.t_cljs$core$async14013(self__.f,self__.ch,meta14014__$1));
});

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14015){
var self__ = this;
var _14015__$1 = this;
return self__.meta14014;
});

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14016 = (function (f,ch,meta14014,_,fn1,meta14017){
this.f = f;
this.ch = ch;
this.meta14014 = meta14014;
this._ = _;
this.fn1 = fn1;
this.meta14017 = meta14017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14018,meta14017__$1){
var self__ = this;
var _14018__$1 = this;
return (new cljs.core.async.t_cljs$core$async14016(self__.f,self__.ch,self__.meta14014,self__._,self__.fn1,meta14017__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14018){
var self__ = this;
var _14018__$1 = this;
return self__.meta14017;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14012_SHARP_){
var G__14019 = (((p1__14012_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14012_SHARP_) : self__.f.call(null,p1__14012_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14019) : f1.call(null,G__14019));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14016.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14014,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async14013], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta14017], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14016";

cljs.core.async.t_cljs$core$async14016.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14016");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14016.
 */
cljs.core.async.__GT_t_cljs$core$async14016 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14016(f__$1,ch__$1,meta14014__$1,___$2,fn1__$1,meta14017){
return (new cljs.core.async.t_cljs$core$async14016(f__$1,ch__$1,meta14014__$1,___$2,fn1__$1,meta14017));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14016(self__.f,self__.ch,self__.meta14014,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14020 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14020) : self__.f.call(null,G__14020));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14014], null);
});

cljs.core.async.t_cljs$core$async14013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14013";

cljs.core.async.t_cljs$core$async14013.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14013");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14013.
 */
cljs.core.async.__GT_t_cljs$core$async14013 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14013(f__$1,ch__$1,meta14014){
return (new cljs.core.async.t_cljs$core$async14013(f__$1,ch__$1,meta14014));
});

}

return (new cljs.core.async.t_cljs$core$async14013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14021 = (function (f,ch,meta14022){
this.f = f;
this.ch = ch;
this.meta14022 = meta14022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14023,meta14022__$1){
var self__ = this;
var _14023__$1 = this;
return (new cljs.core.async.t_cljs$core$async14021(self__.f,self__.ch,meta14022__$1));
});

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14023){
var self__ = this;
var _14023__$1 = this;
return self__.meta14022;
});

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async14021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14022], null);
});

cljs.core.async.t_cljs$core$async14021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14021";

cljs.core.async.t_cljs$core$async14021.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14021");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14021.
 */
cljs.core.async.__GT_t_cljs$core$async14021 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14021(f__$1,ch__$1,meta14022){
return (new cljs.core.async.t_cljs$core$async14021(f__$1,ch__$1,meta14022));
});

}

return (new cljs.core.async.t_cljs$core$async14021(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14024 = (function (p,ch,meta14025){
this.p = p;
this.ch = ch;
this.meta14025 = meta14025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14026,meta14025__$1){
var self__ = this;
var _14026__$1 = this;
return (new cljs.core.async.t_cljs$core$async14024(self__.p,self__.ch,meta14025__$1));
});

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14026){
var self__ = this;
var _14026__$1 = this;
return self__.meta14025;
});

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14025], null);
});

cljs.core.async.t_cljs$core$async14024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14024";

cljs.core.async.t_cljs$core$async14024.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async14024");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14024.
 */
cljs.core.async.__GT_t_cljs$core$async14024 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14024(p__$1,ch__$1,meta14025){
return (new cljs.core.async.t_cljs$core$async14024(p__$1,ch__$1,meta14025));
});

}

return (new cljs.core.async.t_cljs$core$async14024(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14028 = arguments.length;
switch (G__14028) {
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
var c__12525__auto___14068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___14068,out){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___14068,out){
return (function (state_14049){
var state_val_14050 = (state_14049[(1)]);
if((state_val_14050 === (7))){
var inst_14045 = (state_14049[(2)]);
var state_14049__$1 = state_14049;
var statearr_14051_14069 = state_14049__$1;
(statearr_14051_14069[(2)] = inst_14045);

(statearr_14051_14069[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (1))){
var state_14049__$1 = state_14049;
var statearr_14052_14070 = state_14049__$1;
(statearr_14052_14070[(2)] = null);

(statearr_14052_14070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (4))){
var inst_14031 = (state_14049[(7)]);
var inst_14031__$1 = (state_14049[(2)]);
var inst_14032 = (inst_14031__$1 == null);
var state_14049__$1 = (function (){var statearr_14053 = state_14049;
(statearr_14053[(7)] = inst_14031__$1);

return statearr_14053;
})();
if(cljs.core.truth_(inst_14032)){
var statearr_14054_14071 = state_14049__$1;
(statearr_14054_14071[(1)] = (5));

} else {
var statearr_14055_14072 = state_14049__$1;
(statearr_14055_14072[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (6))){
var inst_14031 = (state_14049[(7)]);
var inst_14036 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14031) : p.call(null,inst_14031));
var state_14049__$1 = state_14049;
if(cljs.core.truth_(inst_14036)){
var statearr_14056_14073 = state_14049__$1;
(statearr_14056_14073[(1)] = (8));

} else {
var statearr_14057_14074 = state_14049__$1;
(statearr_14057_14074[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (3))){
var inst_14047 = (state_14049[(2)]);
var state_14049__$1 = state_14049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14049__$1,inst_14047);
} else {
if((state_val_14050 === (2))){
var state_14049__$1 = state_14049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14049__$1,(4),ch);
} else {
if((state_val_14050 === (11))){
var inst_14039 = (state_14049[(2)]);
var state_14049__$1 = state_14049;
var statearr_14058_14075 = state_14049__$1;
(statearr_14058_14075[(2)] = inst_14039);

(statearr_14058_14075[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (9))){
var state_14049__$1 = state_14049;
var statearr_14059_14076 = state_14049__$1;
(statearr_14059_14076[(2)] = null);

(statearr_14059_14076[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (5))){
var inst_14034 = cljs.core.async.close_BANG_(out);
var state_14049__$1 = state_14049;
var statearr_14060_14077 = state_14049__$1;
(statearr_14060_14077[(2)] = inst_14034);

(statearr_14060_14077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (10))){
var inst_14042 = (state_14049[(2)]);
var state_14049__$1 = (function (){var statearr_14061 = state_14049;
(statearr_14061[(8)] = inst_14042);

return statearr_14061;
})();
var statearr_14062_14078 = state_14049__$1;
(statearr_14062_14078[(2)] = null);

(statearr_14062_14078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14050 === (8))){
var inst_14031 = (state_14049[(7)]);
var state_14049__$1 = state_14049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14049__$1,(11),out,inst_14031);
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
});})(c__12525__auto___14068,out))
;
return ((function (switch__12422__auto__,c__12525__auto___14068,out){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_14063 = [null,null,null,null,null,null,null,null,null];
(statearr_14063[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_14063[(1)] = (1));

return statearr_14063;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_14049){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14049);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14064){if((e14064 instanceof Object)){
var ex__12426__auto__ = e14064;
var statearr_14065_14079 = state_14049;
(statearr_14065_14079[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14049);

return cljs.core.cst$kw$recur;
} else {
throw e14064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14080 = state_14049;
state_14049 = G__14080;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_14049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_14049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___14068,out))
})();
var state__12527__auto__ = (function (){var statearr_14066 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14066[(6)] = c__12525__auto___14068);

return statearr_14066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___14068,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14082 = arguments.length;
switch (G__14082) {
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
var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__){
return (function (state_14145){
var state_val_14146 = (state_14145[(1)]);
if((state_val_14146 === (7))){
var inst_14141 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14147_14185 = state_14145__$1;
(statearr_14147_14185[(2)] = inst_14141);

(statearr_14147_14185[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (20))){
var inst_14111 = (state_14145[(7)]);
var inst_14122 = (state_14145[(2)]);
var inst_14123 = cljs.core.next(inst_14111);
var inst_14097 = inst_14123;
var inst_14098 = null;
var inst_14099 = (0);
var inst_14100 = (0);
var state_14145__$1 = (function (){var statearr_14148 = state_14145;
(statearr_14148[(8)] = inst_14098);

(statearr_14148[(9)] = inst_14099);

(statearr_14148[(10)] = inst_14122);

(statearr_14148[(11)] = inst_14100);

(statearr_14148[(12)] = inst_14097);

return statearr_14148;
})();
var statearr_14149_14186 = state_14145__$1;
(statearr_14149_14186[(2)] = null);

(statearr_14149_14186[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (1))){
var state_14145__$1 = state_14145;
var statearr_14150_14187 = state_14145__$1;
(statearr_14150_14187[(2)] = null);

(statearr_14150_14187[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (4))){
var inst_14086 = (state_14145[(13)]);
var inst_14086__$1 = (state_14145[(2)]);
var inst_14087 = (inst_14086__$1 == null);
var state_14145__$1 = (function (){var statearr_14151 = state_14145;
(statearr_14151[(13)] = inst_14086__$1);

return statearr_14151;
})();
if(cljs.core.truth_(inst_14087)){
var statearr_14152_14188 = state_14145__$1;
(statearr_14152_14188[(1)] = (5));

} else {
var statearr_14153_14189 = state_14145__$1;
(statearr_14153_14189[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (15))){
var state_14145__$1 = state_14145;
var statearr_14157_14190 = state_14145__$1;
(statearr_14157_14190[(2)] = null);

(statearr_14157_14190[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (21))){
var state_14145__$1 = state_14145;
var statearr_14158_14191 = state_14145__$1;
(statearr_14158_14191[(2)] = null);

(statearr_14158_14191[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (13))){
var inst_14098 = (state_14145[(8)]);
var inst_14099 = (state_14145[(9)]);
var inst_14100 = (state_14145[(11)]);
var inst_14097 = (state_14145[(12)]);
var inst_14107 = (state_14145[(2)]);
var inst_14108 = (inst_14100 + (1));
var tmp14154 = inst_14098;
var tmp14155 = inst_14099;
var tmp14156 = inst_14097;
var inst_14097__$1 = tmp14156;
var inst_14098__$1 = tmp14154;
var inst_14099__$1 = tmp14155;
var inst_14100__$1 = inst_14108;
var state_14145__$1 = (function (){var statearr_14159 = state_14145;
(statearr_14159[(8)] = inst_14098__$1);

(statearr_14159[(9)] = inst_14099__$1);

(statearr_14159[(14)] = inst_14107);

(statearr_14159[(11)] = inst_14100__$1);

(statearr_14159[(12)] = inst_14097__$1);

return statearr_14159;
})();
var statearr_14160_14192 = state_14145__$1;
(statearr_14160_14192[(2)] = null);

(statearr_14160_14192[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (22))){
var state_14145__$1 = state_14145;
var statearr_14161_14193 = state_14145__$1;
(statearr_14161_14193[(2)] = null);

(statearr_14161_14193[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (6))){
var inst_14086 = (state_14145[(13)]);
var inst_14095 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14086) : f.call(null,inst_14086));
var inst_14096 = cljs.core.seq(inst_14095);
var inst_14097 = inst_14096;
var inst_14098 = null;
var inst_14099 = (0);
var inst_14100 = (0);
var state_14145__$1 = (function (){var statearr_14162 = state_14145;
(statearr_14162[(8)] = inst_14098);

(statearr_14162[(9)] = inst_14099);

(statearr_14162[(11)] = inst_14100);

(statearr_14162[(12)] = inst_14097);

return statearr_14162;
})();
var statearr_14163_14194 = state_14145__$1;
(statearr_14163_14194[(2)] = null);

(statearr_14163_14194[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (17))){
var inst_14111 = (state_14145[(7)]);
var inst_14115 = cljs.core.chunk_first(inst_14111);
var inst_14116 = cljs.core.chunk_rest(inst_14111);
var inst_14117 = cljs.core.count(inst_14115);
var inst_14097 = inst_14116;
var inst_14098 = inst_14115;
var inst_14099 = inst_14117;
var inst_14100 = (0);
var state_14145__$1 = (function (){var statearr_14164 = state_14145;
(statearr_14164[(8)] = inst_14098);

(statearr_14164[(9)] = inst_14099);

(statearr_14164[(11)] = inst_14100);

(statearr_14164[(12)] = inst_14097);

return statearr_14164;
})();
var statearr_14165_14195 = state_14145__$1;
(statearr_14165_14195[(2)] = null);

(statearr_14165_14195[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (3))){
var inst_14143 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14145__$1,inst_14143);
} else {
if((state_val_14146 === (12))){
var inst_14131 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14166_14196 = state_14145__$1;
(statearr_14166_14196[(2)] = inst_14131);

(statearr_14166_14196[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (2))){
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14145__$1,(4),in$);
} else {
if((state_val_14146 === (23))){
var inst_14139 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14167_14197 = state_14145__$1;
(statearr_14167_14197[(2)] = inst_14139);

(statearr_14167_14197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (19))){
var inst_14126 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14168_14198 = state_14145__$1;
(statearr_14168_14198[(2)] = inst_14126);

(statearr_14168_14198[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (11))){
var inst_14111 = (state_14145[(7)]);
var inst_14097 = (state_14145[(12)]);
var inst_14111__$1 = cljs.core.seq(inst_14097);
var state_14145__$1 = (function (){var statearr_14169 = state_14145;
(statearr_14169[(7)] = inst_14111__$1);

return statearr_14169;
})();
if(inst_14111__$1){
var statearr_14170_14199 = state_14145__$1;
(statearr_14170_14199[(1)] = (14));

} else {
var statearr_14171_14200 = state_14145__$1;
(statearr_14171_14200[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (9))){
var inst_14133 = (state_14145[(2)]);
var inst_14134 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14145__$1 = (function (){var statearr_14172 = state_14145;
(statearr_14172[(15)] = inst_14133);

return statearr_14172;
})();
if(cljs.core.truth_(inst_14134)){
var statearr_14173_14201 = state_14145__$1;
(statearr_14173_14201[(1)] = (21));

} else {
var statearr_14174_14202 = state_14145__$1;
(statearr_14174_14202[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (5))){
var inst_14089 = cljs.core.async.close_BANG_(out);
var state_14145__$1 = state_14145;
var statearr_14175_14203 = state_14145__$1;
(statearr_14175_14203[(2)] = inst_14089);

(statearr_14175_14203[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (14))){
var inst_14111 = (state_14145[(7)]);
var inst_14113 = cljs.core.chunked_seq_QMARK_(inst_14111);
var state_14145__$1 = state_14145;
if(inst_14113){
var statearr_14176_14204 = state_14145__$1;
(statearr_14176_14204[(1)] = (17));

} else {
var statearr_14177_14205 = state_14145__$1;
(statearr_14177_14205[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (16))){
var inst_14129 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14178_14206 = state_14145__$1;
(statearr_14178_14206[(2)] = inst_14129);

(statearr_14178_14206[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14146 === (10))){
var inst_14098 = (state_14145[(8)]);
var inst_14100 = (state_14145[(11)]);
var inst_14105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14098,inst_14100);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14145__$1,(13),out,inst_14105);
} else {
if((state_val_14146 === (18))){
var inst_14111 = (state_14145[(7)]);
var inst_14120 = cljs.core.first(inst_14111);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14145__$1,(20),out,inst_14120);
} else {
if((state_val_14146 === (8))){
var inst_14099 = (state_14145[(9)]);
var inst_14100 = (state_14145[(11)]);
var inst_14102 = (inst_14100 < inst_14099);
var inst_14103 = inst_14102;
var state_14145__$1 = state_14145;
if(cljs.core.truth_(inst_14103)){
var statearr_14179_14207 = state_14145__$1;
(statearr_14179_14207[(1)] = (10));

} else {
var statearr_14180_14208 = state_14145__$1;
(statearr_14180_14208[(1)] = (11));

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
});})(c__12525__auto__))
;
return ((function (switch__12422__auto__,c__12525__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12423__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12423__auto____0 = (function (){
var statearr_14181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14181[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12423__auto__);

(statearr_14181[(1)] = (1));

return statearr_14181;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12423__auto____1 = (function (state_14145){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14145);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14182){if((e14182 instanceof Object)){
var ex__12426__auto__ = e14182;
var statearr_14183_14209 = state_14145;
(statearr_14183_14209[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14145);

return cljs.core.cst$kw$recur;
} else {
throw e14182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14210 = state_14145;
state_14145 = G__14210;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12423__auto__ = function(state_14145){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12423__auto____1.call(this,state_14145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12423__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12423__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__))
})();
var state__12527__auto__ = (function (){var statearr_14184 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14184[(6)] = c__12525__auto__);

return statearr_14184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__))
);

return c__12525__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14212 = arguments.length;
switch (G__14212) {
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
var G__14215 = arguments.length;
switch (G__14215) {
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
var G__14218 = arguments.length;
switch (G__14218) {
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
var c__12525__auto___14265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___14265,out){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___14265,out){
return (function (state_14242){
var state_val_14243 = (state_14242[(1)]);
if((state_val_14243 === (7))){
var inst_14237 = (state_14242[(2)]);
var state_14242__$1 = state_14242;
var statearr_14244_14266 = state_14242__$1;
(statearr_14244_14266[(2)] = inst_14237);

(statearr_14244_14266[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (1))){
var inst_14219 = null;
var state_14242__$1 = (function (){var statearr_14245 = state_14242;
(statearr_14245[(7)] = inst_14219);

return statearr_14245;
})();
var statearr_14246_14267 = state_14242__$1;
(statearr_14246_14267[(2)] = null);

(statearr_14246_14267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (4))){
var inst_14222 = (state_14242[(8)]);
var inst_14222__$1 = (state_14242[(2)]);
var inst_14223 = (inst_14222__$1 == null);
var inst_14224 = cljs.core.not(inst_14223);
var state_14242__$1 = (function (){var statearr_14247 = state_14242;
(statearr_14247[(8)] = inst_14222__$1);

return statearr_14247;
})();
if(inst_14224){
var statearr_14248_14268 = state_14242__$1;
(statearr_14248_14268[(1)] = (5));

} else {
var statearr_14249_14269 = state_14242__$1;
(statearr_14249_14269[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (6))){
var state_14242__$1 = state_14242;
var statearr_14250_14270 = state_14242__$1;
(statearr_14250_14270[(2)] = null);

(statearr_14250_14270[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (3))){
var inst_14239 = (state_14242[(2)]);
var inst_14240 = cljs.core.async.close_BANG_(out);
var state_14242__$1 = (function (){var statearr_14251 = state_14242;
(statearr_14251[(9)] = inst_14239);

return statearr_14251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14242__$1,inst_14240);
} else {
if((state_val_14243 === (2))){
var state_14242__$1 = state_14242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14242__$1,(4),ch);
} else {
if((state_val_14243 === (11))){
var inst_14222 = (state_14242[(8)]);
var inst_14231 = (state_14242[(2)]);
var inst_14219 = inst_14222;
var state_14242__$1 = (function (){var statearr_14252 = state_14242;
(statearr_14252[(10)] = inst_14231);

(statearr_14252[(7)] = inst_14219);

return statearr_14252;
})();
var statearr_14253_14271 = state_14242__$1;
(statearr_14253_14271[(2)] = null);

(statearr_14253_14271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (9))){
var inst_14222 = (state_14242[(8)]);
var state_14242__$1 = state_14242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14242__$1,(11),out,inst_14222);
} else {
if((state_val_14243 === (5))){
var inst_14222 = (state_14242[(8)]);
var inst_14219 = (state_14242[(7)]);
var inst_14226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14222,inst_14219);
var state_14242__$1 = state_14242;
if(inst_14226){
var statearr_14255_14272 = state_14242__$1;
(statearr_14255_14272[(1)] = (8));

} else {
var statearr_14256_14273 = state_14242__$1;
(statearr_14256_14273[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (10))){
var inst_14234 = (state_14242[(2)]);
var state_14242__$1 = state_14242;
var statearr_14257_14274 = state_14242__$1;
(statearr_14257_14274[(2)] = inst_14234);

(statearr_14257_14274[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14243 === (8))){
var inst_14219 = (state_14242[(7)]);
var tmp14254 = inst_14219;
var inst_14219__$1 = tmp14254;
var state_14242__$1 = (function (){var statearr_14258 = state_14242;
(statearr_14258[(7)] = inst_14219__$1);

return statearr_14258;
})();
var statearr_14259_14275 = state_14242__$1;
(statearr_14259_14275[(2)] = null);

(statearr_14259_14275[(1)] = (2));


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
});})(c__12525__auto___14265,out))
;
return ((function (switch__12422__auto__,c__12525__auto___14265,out){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_14260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14260[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_14260[(1)] = (1));

return statearr_14260;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_14242){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14242);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14261){if((e14261 instanceof Object)){
var ex__12426__auto__ = e14261;
var statearr_14262_14276 = state_14242;
(statearr_14262_14276[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14242);

return cljs.core.cst$kw$recur;
} else {
throw e14261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14277 = state_14242;
state_14242 = G__14277;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_14242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_14242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___14265,out))
})();
var state__12527__auto__ = (function (){var statearr_14263 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14263[(6)] = c__12525__auto___14265);

return statearr_14263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___14265,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14279 = arguments.length;
switch (G__14279) {
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
var c__12525__auto___14345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___14345,out){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___14345,out){
return (function (state_14317){
var state_val_14318 = (state_14317[(1)]);
if((state_val_14318 === (7))){
var inst_14313 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14319_14346 = state_14317__$1;
(statearr_14319_14346[(2)] = inst_14313);

(statearr_14319_14346[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (1))){
var inst_14280 = (new Array(n));
var inst_14281 = inst_14280;
var inst_14282 = (0);
var state_14317__$1 = (function (){var statearr_14320 = state_14317;
(statearr_14320[(7)] = inst_14282);

(statearr_14320[(8)] = inst_14281);

return statearr_14320;
})();
var statearr_14321_14347 = state_14317__$1;
(statearr_14321_14347[(2)] = null);

(statearr_14321_14347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (4))){
var inst_14285 = (state_14317[(9)]);
var inst_14285__$1 = (state_14317[(2)]);
var inst_14286 = (inst_14285__$1 == null);
var inst_14287 = cljs.core.not(inst_14286);
var state_14317__$1 = (function (){var statearr_14322 = state_14317;
(statearr_14322[(9)] = inst_14285__$1);

return statearr_14322;
})();
if(inst_14287){
var statearr_14323_14348 = state_14317__$1;
(statearr_14323_14348[(1)] = (5));

} else {
var statearr_14324_14349 = state_14317__$1;
(statearr_14324_14349[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (15))){
var inst_14307 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14325_14350 = state_14317__$1;
(statearr_14325_14350[(2)] = inst_14307);

(statearr_14325_14350[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (13))){
var state_14317__$1 = state_14317;
var statearr_14326_14351 = state_14317__$1;
(statearr_14326_14351[(2)] = null);

(statearr_14326_14351[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (6))){
var inst_14282 = (state_14317[(7)]);
var inst_14303 = (inst_14282 > (0));
var state_14317__$1 = state_14317;
if(cljs.core.truth_(inst_14303)){
var statearr_14327_14352 = state_14317__$1;
(statearr_14327_14352[(1)] = (12));

} else {
var statearr_14328_14353 = state_14317__$1;
(statearr_14328_14353[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (3))){
var inst_14315 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14317__$1,inst_14315);
} else {
if((state_val_14318 === (12))){
var inst_14281 = (state_14317[(8)]);
var inst_14305 = cljs.core.vec(inst_14281);
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14317__$1,(15),out,inst_14305);
} else {
if((state_val_14318 === (2))){
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14317__$1,(4),ch);
} else {
if((state_val_14318 === (11))){
var inst_14297 = (state_14317[(2)]);
var inst_14298 = (new Array(n));
var inst_14281 = inst_14298;
var inst_14282 = (0);
var state_14317__$1 = (function (){var statearr_14329 = state_14317;
(statearr_14329[(7)] = inst_14282);

(statearr_14329[(10)] = inst_14297);

(statearr_14329[(8)] = inst_14281);

return statearr_14329;
})();
var statearr_14330_14354 = state_14317__$1;
(statearr_14330_14354[(2)] = null);

(statearr_14330_14354[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (9))){
var inst_14281 = (state_14317[(8)]);
var inst_14295 = cljs.core.vec(inst_14281);
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14317__$1,(11),out,inst_14295);
} else {
if((state_val_14318 === (5))){
var inst_14282 = (state_14317[(7)]);
var inst_14285 = (state_14317[(9)]);
var inst_14281 = (state_14317[(8)]);
var inst_14290 = (state_14317[(11)]);
var inst_14289 = (inst_14281[inst_14282] = inst_14285);
var inst_14290__$1 = (inst_14282 + (1));
var inst_14291 = (inst_14290__$1 < n);
var state_14317__$1 = (function (){var statearr_14331 = state_14317;
(statearr_14331[(12)] = inst_14289);

(statearr_14331[(11)] = inst_14290__$1);

return statearr_14331;
})();
if(cljs.core.truth_(inst_14291)){
var statearr_14332_14355 = state_14317__$1;
(statearr_14332_14355[(1)] = (8));

} else {
var statearr_14333_14356 = state_14317__$1;
(statearr_14333_14356[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (14))){
var inst_14310 = (state_14317[(2)]);
var inst_14311 = cljs.core.async.close_BANG_(out);
var state_14317__$1 = (function (){var statearr_14335 = state_14317;
(statearr_14335[(13)] = inst_14310);

return statearr_14335;
})();
var statearr_14336_14357 = state_14317__$1;
(statearr_14336_14357[(2)] = inst_14311);

(statearr_14336_14357[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (10))){
var inst_14301 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14337_14358 = state_14317__$1;
(statearr_14337_14358[(2)] = inst_14301);

(statearr_14337_14358[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14318 === (8))){
var inst_14281 = (state_14317[(8)]);
var inst_14290 = (state_14317[(11)]);
var tmp14334 = inst_14281;
var inst_14281__$1 = tmp14334;
var inst_14282 = inst_14290;
var state_14317__$1 = (function (){var statearr_14338 = state_14317;
(statearr_14338[(7)] = inst_14282);

(statearr_14338[(8)] = inst_14281__$1);

return statearr_14338;
})();
var statearr_14339_14359 = state_14317__$1;
(statearr_14339_14359[(2)] = null);

(statearr_14339_14359[(1)] = (2));


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
});})(c__12525__auto___14345,out))
;
return ((function (switch__12422__auto__,c__12525__auto___14345,out){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_14340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14340[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_14340[(1)] = (1));

return statearr_14340;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_14317){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14317);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14341){if((e14341 instanceof Object)){
var ex__12426__auto__ = e14341;
var statearr_14342_14360 = state_14317;
(statearr_14342_14360[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14317);

return cljs.core.cst$kw$recur;
} else {
throw e14341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14361 = state_14317;
state_14317 = G__14361;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_14317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_14317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___14345,out))
})();
var state__12527__auto__ = (function (){var statearr_14343 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14343[(6)] = c__12525__auto___14345);

return statearr_14343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___14345,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14363 = arguments.length;
switch (G__14363) {
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
var c__12525__auto___14433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___14433,out){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___14433,out){
return (function (state_14405){
var state_val_14406 = (state_14405[(1)]);
if((state_val_14406 === (7))){
var inst_14401 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14407_14434 = state_14405__$1;
(statearr_14407_14434[(2)] = inst_14401);

(statearr_14407_14434[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (1))){
var inst_14364 = [];
var inst_14365 = inst_14364;
var inst_14366 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_14405__$1 = (function (){var statearr_14408 = state_14405;
(statearr_14408[(7)] = inst_14366);

(statearr_14408[(8)] = inst_14365);

return statearr_14408;
})();
var statearr_14409_14435 = state_14405__$1;
(statearr_14409_14435[(2)] = null);

(statearr_14409_14435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (4))){
var inst_14369 = (state_14405[(9)]);
var inst_14369__$1 = (state_14405[(2)]);
var inst_14370 = (inst_14369__$1 == null);
var inst_14371 = cljs.core.not(inst_14370);
var state_14405__$1 = (function (){var statearr_14410 = state_14405;
(statearr_14410[(9)] = inst_14369__$1);

return statearr_14410;
})();
if(inst_14371){
var statearr_14411_14436 = state_14405__$1;
(statearr_14411_14436[(1)] = (5));

} else {
var statearr_14412_14437 = state_14405__$1;
(statearr_14412_14437[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (15))){
var inst_14395 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14413_14438 = state_14405__$1;
(statearr_14413_14438[(2)] = inst_14395);

(statearr_14413_14438[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (13))){
var state_14405__$1 = state_14405;
var statearr_14414_14439 = state_14405__$1;
(statearr_14414_14439[(2)] = null);

(statearr_14414_14439[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (6))){
var inst_14365 = (state_14405[(8)]);
var inst_14390 = inst_14365.length;
var inst_14391 = (inst_14390 > (0));
var state_14405__$1 = state_14405;
if(cljs.core.truth_(inst_14391)){
var statearr_14415_14440 = state_14405__$1;
(statearr_14415_14440[(1)] = (12));

} else {
var statearr_14416_14441 = state_14405__$1;
(statearr_14416_14441[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (3))){
var inst_14403 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14405__$1,inst_14403);
} else {
if((state_val_14406 === (12))){
var inst_14365 = (state_14405[(8)]);
var inst_14393 = cljs.core.vec(inst_14365);
var state_14405__$1 = state_14405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14405__$1,(15),out,inst_14393);
} else {
if((state_val_14406 === (2))){
var state_14405__$1 = state_14405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14405__$1,(4),ch);
} else {
if((state_val_14406 === (11))){
var inst_14373 = (state_14405[(10)]);
var inst_14369 = (state_14405[(9)]);
var inst_14383 = (state_14405[(2)]);
var inst_14384 = [];
var inst_14385 = inst_14384.push(inst_14369);
var inst_14365 = inst_14384;
var inst_14366 = inst_14373;
var state_14405__$1 = (function (){var statearr_14417 = state_14405;
(statearr_14417[(11)] = inst_14385);

(statearr_14417[(12)] = inst_14383);

(statearr_14417[(7)] = inst_14366);

(statearr_14417[(8)] = inst_14365);

return statearr_14417;
})();
var statearr_14418_14442 = state_14405__$1;
(statearr_14418_14442[(2)] = null);

(statearr_14418_14442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (9))){
var inst_14365 = (state_14405[(8)]);
var inst_14381 = cljs.core.vec(inst_14365);
var state_14405__$1 = state_14405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14405__$1,(11),out,inst_14381);
} else {
if((state_val_14406 === (5))){
var inst_14373 = (state_14405[(10)]);
var inst_14366 = (state_14405[(7)]);
var inst_14369 = (state_14405[(9)]);
var inst_14373__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14369) : f.call(null,inst_14369));
var inst_14374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14373__$1,inst_14366);
var inst_14375 = cljs.core.keyword_identical_QMARK_(inst_14366,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_14376 = ((inst_14374) || (inst_14375));
var state_14405__$1 = (function (){var statearr_14419 = state_14405;
(statearr_14419[(10)] = inst_14373__$1);

return statearr_14419;
})();
if(cljs.core.truth_(inst_14376)){
var statearr_14420_14443 = state_14405__$1;
(statearr_14420_14443[(1)] = (8));

} else {
var statearr_14421_14444 = state_14405__$1;
(statearr_14421_14444[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (14))){
var inst_14398 = (state_14405[(2)]);
var inst_14399 = cljs.core.async.close_BANG_(out);
var state_14405__$1 = (function (){var statearr_14423 = state_14405;
(statearr_14423[(13)] = inst_14398);

return statearr_14423;
})();
var statearr_14424_14445 = state_14405__$1;
(statearr_14424_14445[(2)] = inst_14399);

(statearr_14424_14445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (10))){
var inst_14388 = (state_14405[(2)]);
var state_14405__$1 = state_14405;
var statearr_14425_14446 = state_14405__$1;
(statearr_14425_14446[(2)] = inst_14388);

(statearr_14425_14446[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14406 === (8))){
var inst_14373 = (state_14405[(10)]);
var inst_14365 = (state_14405[(8)]);
var inst_14369 = (state_14405[(9)]);
var inst_14378 = inst_14365.push(inst_14369);
var tmp14422 = inst_14365;
var inst_14365__$1 = tmp14422;
var inst_14366 = inst_14373;
var state_14405__$1 = (function (){var statearr_14426 = state_14405;
(statearr_14426[(14)] = inst_14378);

(statearr_14426[(7)] = inst_14366);

(statearr_14426[(8)] = inst_14365__$1);

return statearr_14426;
})();
var statearr_14427_14447 = state_14405__$1;
(statearr_14427_14447[(2)] = null);

(statearr_14427_14447[(1)] = (2));


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
});})(c__12525__auto___14433,out))
;
return ((function (switch__12422__auto__,c__12525__auto___14433,out){
return (function() {
var cljs$core$async$state_machine__12423__auto__ = null;
var cljs$core$async$state_machine__12423__auto____0 = (function (){
var statearr_14428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14428[(0)] = cljs$core$async$state_machine__12423__auto__);

(statearr_14428[(1)] = (1));

return statearr_14428;
});
var cljs$core$async$state_machine__12423__auto____1 = (function (state_14405){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14405);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14429){if((e14429 instanceof Object)){
var ex__12426__auto__ = e14429;
var statearr_14430_14448 = state_14405;
(statearr_14430_14448[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14405);

return cljs.core.cst$kw$recur;
} else {
throw e14429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14449 = state_14405;
state_14405 = G__14449;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
cljs$core$async$state_machine__12423__auto__ = function(state_14405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12423__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12423__auto____1.call(this,state_14405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12423__auto____0;
cljs$core$async$state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12423__auto____1;
return cljs$core$async$state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___14433,out))
})();
var state__12527__auto__ = (function (){var statearr_14431 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14431[(6)] = c__12525__auto___14433);

return statearr_14431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___14433,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

