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
db.dao.save_db = (function db$dao$save_db(p__9376){
var map__9377 = p__9376;
var map__9377__$1 = ((((!((map__9377 == null)))?(((((map__9377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9377):map__9377);
var db_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9377__$1,cljs.core.cst$kw$db);
return db.dao.db = db_obj;
});
db.dao.db_schema = (function db$dao$db_schema(db_ref){
return db.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic(db_ref,db.dao.db_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_path,"key"], null)], 0));
});
db.dao.error_prn = (function db$dao$error_prn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9380 = arguments.length;
var i__4532__auto___9381 = (0);
while(true){
if((i__4532__auto___9381 < len__4531__auto___9380)){
args__4534__auto__.push((arguments[i__4532__auto___9381]));

var G__9382 = (i__4532__auto___9381 + (1));
i__4532__auto___9381 = G__9382;
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
db.dao.error_prn.cljs$lang$applyTo = (function (seq9379){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9379));
});

db.dao.version = (1);
db.dao.init_db = (function db$dao$init_db(){
var vec__9383 = db.indexdb.request_db(db.dao.db_name,db.dao.version,db.dao.db_schema);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9383,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9383,(1),null);
var success_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$success,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var error_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$error,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__7311__auto___9406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto___9406,vec__9383,_,ch,success_chan,error_chan){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto___9406,vec__9383,_,ch,success_chan,error_chan){
return (function (state_9390){
var state_val_9391 = (state_9390[(1)]);
if((state_val_9391 === (1))){
var state_9390__$1 = state_9390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9390__$1,(2),success_chan);
} else {
if((state_val_9391 === (2))){
var inst_9387 = (state_9390[(2)]);
var inst_9388 = db.dao.save_db(inst_9387);
var state_9390__$1 = state_9390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9390__$1,inst_9388);
} else {
return null;
}
}
});})(c__7311__auto___9406,vec__9383,_,ch,success_chan,error_chan))
;
return ((function (switch__7208__auto__,c__7311__auto___9406,vec__9383,_,ch,success_chan,error_chan){
return (function() {
var db$dao$init_db_$_state_machine__7209__auto__ = null;
var db$dao$init_db_$_state_machine__7209__auto____0 = (function (){
var statearr_9392 = [null,null,null,null,null,null,null];
(statearr_9392[(0)] = db$dao$init_db_$_state_machine__7209__auto__);

(statearr_9392[(1)] = (1));

return statearr_9392;
});
var db$dao$init_db_$_state_machine__7209__auto____1 = (function (state_9390){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9390);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9393){if((e9393 instanceof Object)){
var ex__7212__auto__ = e9393;
var statearr_9394_9407 = state_9390;
(statearr_9394_9407[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9390);

return cljs.core.cst$kw$recur;
} else {
throw e9393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9408 = state_9390;
state_9390 = G__9408;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
db$dao$init_db_$_state_machine__7209__auto__ = function(state_9390){
switch(arguments.length){
case 0:
return db$dao$init_db_$_state_machine__7209__auto____0.call(this);
case 1:
return db$dao$init_db_$_state_machine__7209__auto____1.call(this,state_9390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = db$dao$init_db_$_state_machine__7209__auto____0;
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = db$dao$init_db_$_state_machine__7209__auto____1;
return db$dao$init_db_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto___9406,vec__9383,_,ch,success_chan,error_chan))
})();
var state__7313__auto__ = (function (){var statearr_9395 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9395[(6)] = c__7311__auto___9406);

return statearr_9395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto___9406,vec__9383,_,ch,success_chan,error_chan))
);


var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__,vec__9383,_,ch,success_chan,error_chan){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__,vec__9383,_,ch,success_chan,error_chan){
return (function (state_9400){
var state_val_9401 = (state_9400[(1)]);
if((state_val_9401 === (1))){
var state_9400__$1 = state_9400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9400__$1,(2),error_chan);
} else {
if((state_val_9401 === (2))){
var inst_9397 = (state_9400[(2)]);
var inst_9398 = db.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9397], 0));
var state_9400__$1 = state_9400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9400__$1,inst_9398);
} else {
return null;
}
}
});})(c__7311__auto__,vec__9383,_,ch,success_chan,error_chan))
;
return ((function (switch__7208__auto__,c__7311__auto__,vec__9383,_,ch,success_chan,error_chan){
return (function() {
var db$dao$init_db_$_state_machine__7209__auto__ = null;
var db$dao$init_db_$_state_machine__7209__auto____0 = (function (){
var statearr_9402 = [null,null,null,null,null,null,null];
(statearr_9402[(0)] = db$dao$init_db_$_state_machine__7209__auto__);

(statearr_9402[(1)] = (1));

return statearr_9402;
});
var db$dao$init_db_$_state_machine__7209__auto____1 = (function (state_9400){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9400);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9403){if((e9403 instanceof Object)){
var ex__7212__auto__ = e9403;
var statearr_9404_9409 = state_9400;
(statearr_9404_9409[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9400);

return cljs.core.cst$kw$recur;
} else {
throw e9403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9410 = state_9400;
state_9400 = G__9410;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
db$dao$init_db_$_state_machine__7209__auto__ = function(state_9400){
switch(arguments.length){
case 0:
return db$dao$init_db_$_state_machine__7209__auto____0.call(this);
case 1:
return db$dao$init_db_$_state_machine__7209__auto____1.call(this,state_9400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = db$dao$init_db_$_state_machine__7209__auto____0;
db$dao$init_db_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = db$dao$init_db_$_state_machine__7209__auto____1;
return db$dao$init_db_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__,vec__9383,_,ch,success_chan,error_chan))
})();
var state__7313__auto__ = (function (){var statearr_9405 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9405[(6)] = c__7311__auto__);

return statearr_9405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__,vec__9383,_,ch,success_chan,error_chan))
);

return c__7311__auto__;
});
db.dao.put = (function db$dao$put(payload,store,fn){
return db.indexdb.put_item(db.dao.db,store,payload,fn,(function (p1__9411_SHARP_){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("put error ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__9411_SHARP_], 0));
}));
});
db.dao.put_state = (function db$dao$put_state(state,fn){
return db.dao.put(state,db.dao.db_store,fn);
});
db.dao.get_state = (function db$dao$get_state(key,fn){
var result_ch = db.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic(db.dao.db,db.dao.db_store,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var c__7311__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7311__auto__,result_ch){
return (function (){
var f__7312__auto__ = (function (){var switch__7208__auto__ = ((function (c__7311__auto__,result_ch){
return (function (state_9416){
var state_val_9417 = (state_9416[(1)]);
if((state_val_9417 === (1))){
var state_9416__$1 = state_9416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9416__$1,(2),result_ch);
} else {
if((state_val_9417 === (2))){
var inst_9413 = (state_9416[(2)]);
var inst_9414 = (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(inst_9413) : fn.call(null,inst_9413));
var state_9416__$1 = state_9416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9416__$1,inst_9414);
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
var statearr_9418 = [null,null,null,null,null,null,null];
(statearr_9418[(0)] = db$dao$get_state_$_state_machine__7209__auto__);

(statearr_9418[(1)] = (1));

return statearr_9418;
});
var db$dao$get_state_$_state_machine__7209__auto____1 = (function (state_9416){
while(true){
var ret_value__7210__auto__ = (function (){try{while(true){
var result__7211__auto__ = switch__7208__auto__(state_9416);
if(cljs.core.keyword_identical_QMARK_(result__7211__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7211__auto__;
}
break;
}
}catch (e9419){if((e9419 instanceof Object)){
var ex__7212__auto__ = e9419;
var statearr_9420_9422 = state_9416;
(statearr_9420_9422[(5)] = ex__7212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9416);

return cljs.core.cst$kw$recur;
} else {
throw e9419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7210__auto__,cljs.core.cst$kw$recur)){
var G__9423 = state_9416;
state_9416 = G__9423;
continue;
} else {
return ret_value__7210__auto__;
}
break;
}
});
db$dao$get_state_$_state_machine__7209__auto__ = function(state_9416){
switch(arguments.length){
case 0:
return db$dao$get_state_$_state_machine__7209__auto____0.call(this);
case 1:
return db$dao$get_state_$_state_machine__7209__auto____1.call(this,state_9416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db$dao$get_state_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$0 = db$dao$get_state_$_state_machine__7209__auto____0;
db$dao$get_state_$_state_machine__7209__auto__.cljs$core$IFn$_invoke$arity$1 = db$dao$get_state_$_state_machine__7209__auto____1;
return db$dao$get_state_$_state_machine__7209__auto__;
})()
;})(switch__7208__auto__,c__7311__auto__,result_ch))
})();
var state__7313__auto__ = (function (){var statearr_9421 = (f__7312__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7312__auto__.cljs$core$IFn$_invoke$arity$0() : f__7312__auto__.call(null));
(statearr_9421[(6)] = c__7311__auto__);

return statearr_9421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7313__auto__);
});})(c__7311__auto__,result_ch))
);

return c__7311__auto__;
});
