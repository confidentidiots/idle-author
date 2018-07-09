// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('db.dao');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('db.indexdb');
goog.require('clicker.util');
db.dao.db_name = "idle-author";
db.dao.db_store = "game-state";
db.dao.db = null;
db.dao.save_db = (function db$dao$save_db(p__9377){
var map__9378 = p__9377;
var map__9378__$1 = ((((!((map__9378 == null)))?(((((map__9378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9378):map__9378);
var db_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9378__$1,cljs.core.cst$kw$db);
return db.dao.db = db_obj;
});
db.dao.db_schema = (function db$dao$db_schema(db_ref){
return db.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic(db_ref,db.dao.db_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_path,"key"], null)], 0));
});
db.dao.error_prn = (function db$dao$error_prn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9381 = arguments.length;
var i__4532__auto___9382 = (0);
while(true){
if((i__4532__auto___9382 < len__4531__auto___9381)){
args__4534__auto__.push((arguments[i__4532__auto___9382]));

var G__9383 = (i__4532__auto___9382 + (1));
i__4532__auto___9382 = G__9383;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return db.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

db.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("Error: ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
});

db.dao.error_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
db.dao.error_prn.cljs$lang$applyTo = (function (seq9380){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9380));
});

db.dao.version = (1);
db.dao.init_db = (function db$dao$init_db(){
var vec__9384 = db.indexdb.request_db(db.dao.db_name,db.dao.version,db.dao.db_schema);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9384,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9384,(1),null);
var success_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$success,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var error_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$error,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__7311__auto___9407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___9407,vec__9384,_,ch,success_chan,error_chan){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___9407,vec__9384,_,ch,success_chan,error_chan){
return (function (state_9391){
var state_val_9392 = (state_9391[(1)]);
if((state_val_9392 === (1))){
var state_9391__$1 = state_9391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9391__$1,(2),success_chan);
} else {
if((state_val_9392 === (2))){
var inst_9388 = (state_9391[(2)]);
var inst_9389 = db.dao.save_db(inst_9388);
var state_9391__$1 = state_9391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9391__$1,inst_9389);
} else {
return null;
}
}
});})(c__7311__auto___9407,vec__9384,_,ch,success_chan,error_chan))
;
return ((function (switch__7208__auto__,c__7311__auto___9407,vec__9384,_,ch,success_chan,error_chan){
return (function() {
var db$dao$init_db_$_state_machine__7209__auto__ = null;
var db$dao$init_db_$_state_machine__7209__auto____0 = (function (){
var statearr_9393 = [null,null,null,null,null,null,null];
(statearr_9393[(0)] = db$dao$init_db_$_state_machine__7209__auto__);

(statearr_9393[(1)] = (1));

return statearr_9393;
});
var db$dao$init_db_$_state_machine__7209__auto____1 = (function (state_9391){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9391);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9394){if((e9394 instanceof Object)){
var ex__7212__auto__ = e9394;
var statearr_9395_9408 = state_9391;
(statearr_9395_9408[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9391);

return cljs.core.cst$kw$recur;
} else {
throw e9394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9409 = state_9391;
state_9391 = G__9409;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
db$dao$init_db_$_state_machine__7209__auto__ = function(state_9391){
switch(arguments.length){
case 0:
return db$dao$init_db_$_state_machine__7209__auto____0.call(this);
case 1:
return db$dao$init_db_$_state_machine__7209__auto____1.call(this,state_9391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = db$dao$init_db_$_state_machine__7209__auto____0;
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = db$dao$init_db_$_state_machine__7209__auto____1;
return db$dao$init_db_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___9407,vec__9384,_,ch,success_chan,error_chan))
})();
var state__7313__auto__ = (function (){var statearr_9396 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9396[(6)] = c__7311__auto___9407);

return statearr_9396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___9407,vec__9384,_,ch,success_chan,error_chan))
);


var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__,vec__9384,_,ch,success_chan,error_chan){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__,vec__9384,_,ch,success_chan,error_chan){
return (function (state_9401){
var state_val_9402 = (state_9401[(1)]);
if((state_val_9402 === (1))){
var state_9401__$1 = state_9401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9401__$1,(2),error_chan);
} else {
if((state_val_9402 === (2))){
var inst_9398 = (state_9401[(2)]);
var inst_9399 = db.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9398], 0));
var state_9401__$1 = state_9401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9401__$1,inst_9399);
} else {
return null;
}
}
});})(c__7311__auto__,vec__9384,_,ch,success_chan,error_chan))
;
return ((function (switch__7208__auto__,c__7311__auto__,vec__9384,_,ch,success_chan,error_chan){
return (function() {
var db$dao$init_db_$_state_machine__7209__auto__ = null;
var db$dao$init_db_$_state_machine__7209__auto____0 = (function (){
var statearr_9403 = [null,null,null,null,null,null,null];
(statearr_9403[(0)] = db$dao$init_db_$_state_machine__7209__auto__);

(statearr_9403[(1)] = (1));

return statearr_9403;
});
var db$dao$init_db_$_state_machine__7209__auto____1 = (function (state_9401){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9401);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9404){if((e9404 instanceof Object)){
var ex__7212__auto__ = e9404;
var statearr_9405_9410 = state_9401;
(statearr_9405_9410[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9401);

return cljs.core.cst$kw$recur;
} else {
throw e9404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9411 = state_9401;
state_9401 = G__9411;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
db$dao$init_db_$_state_machine__7209__auto__ = function(state_9401){
switch(arguments.length){
case 0:
return db$dao$init_db_$_state_machine__7209__auto____0.call(this);
case 1:
return db$dao$init_db_$_state_machine__7209__auto____1.call(this,state_9401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = db$dao$init_db_$_state_machine__7209__auto____0;
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = db$dao$init_db_$_state_machine__7209__auto____1;
return db$dao$init_db_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__,vec__9384,_,ch,success_chan,error_chan))
})();
var state__7313__auto__ = (function (){var statearr_9406 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9406[(6)] = c__7311__auto__);

return statearr_9406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__,vec__9384,_,ch,success_chan,error_chan))
);

return c__7311__auto__;
});
db.dao.put = (function db$dao$put(payload,store,fn){
return db.indexdb.put_item(db.dao.db,store,payload,fn,(function (p1__9412_SHARP_){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("put error ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__9412_SHARP_], 0));
}));
});
db.dao.put_state = (function db$dao$put_state(state,fn){
return db.dao.put(state,db.dao.db_store,fn);
});
db.dao.get_state = (function db$dao$get_state(key,fn){
var result_ch = db.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic(db.dao.db,db.dao.db_store,key,clicker.util.default_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__,result_ch){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__,result_ch){
return (function (state_9417){
var state_val_9418 = (state_9417[(1)]);
if((state_val_9418 === (1))){
var state_9417__$1 = state_9417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9417__$1,(2),result_ch);
} else {
if((state_val_9418 === (2))){
var inst_9414 = (state_9417[(2)]);
var inst_9415 = (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(inst_9414) : fn.call(null,inst_9414));
var state_9417__$1 = state_9417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9417__$1,inst_9415);
} else {
return null;
}
}
});})(c__7311__auto__,result_ch))
;
return ((function (switch__7208__auto__,c__7311__auto__,result_ch){
return (function() {
var db$dao$get_state_$_state_machine__7209__auto__ = null;
var db$dao$get_state_$_state_machine__7209__auto____0 = (function (){
var statearr_9419 = [null,null,null,null,null,null,null];
(statearr_9419[(0)] = db$dao$get_state_$_state_machine__7209__auto__);

(statearr_9419[(1)] = (1));

return statearr_9419;
});
var db$dao$get_state_$_state_machine__7209__auto____1 = (function (state_9417){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9417);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9420){if((e9420 instanceof Object)){
var ex__7212__auto__ = e9420;
var statearr_9421_9423 = state_9417;
(statearr_9421_9423[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9417);

return cljs.core.cst$kw$recur;
} else {
throw e9420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9424 = state_9417;
state_9417 = G__9424;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
db$dao$get_state_$_state_machine__7209__auto__ = function(state_9417){
switch(arguments.length){
case 0:
return db$dao$get_state_$_state_machine__7209__auto____0.call(this);
case 1:
return db$dao$get_state_$_state_machine__7209__auto____1.call(this,state_9417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db$dao$get_state_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = db$dao$get_state_$_state_machine__7209__auto____0;
db$dao$get_state_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = db$dao$get_state_$_state_machine__7209__auto____1;
return db$dao$get_state_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__,result_ch))
})();
var state__7313__auto__ = (function (){var statearr_9422 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9422[(6)] = c__7311__auto__);

return statearr_9422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__,result_ch))
);

return c__7311__auto__;
});
