// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('dao.dao');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('dao.indexdb');
goog.require('clicker.util');
dao.dao.db_name = "idle-author";
dao.dao.db_store = "game-state";
dao.dao.db = null;
dao.dao.save_db = (function dao$dao$save_db(p__9049){
var map__9050 = p__9049;
var map__9050__$1 = ((((!((map__9050 == null)))?(((((map__9050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9050):map__9050);
var db_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9050__$1,cljs.core.cst$kw$db);
return dao.dao.db = db_obj;
});
dao.dao.db_schema = (function dao$dao$db_schema(db_ref){
return dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic(db_ref,dao.dao.db_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_path,"key"], null)], 0));
});
dao.dao.error_prn = (function dao$dao$error_prn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9053 = arguments.length;
var i__4532__auto___9054 = (0);
while(true){
if((i__4532__auto___9054 < len__4531__auto___9053)){
args__4534__auto__.push((arguments[i__4532__auto___9054]));

var G__9055 = (i__4532__auto___9054 + (1));
i__4532__auto___9054 = G__9055;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return dao.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

dao.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("Error: ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
});

dao.dao.error_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
dao.dao.error_prn.cljs$lang$applyTo = (function (seq9052){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9052));
});

dao.dao.version = (1);
dao.dao.init_db = (function dao$dao$init_db(){
var vec__9056 = dao.indexdb.request_db(dao.dao.db_name,dao.dao.version,dao.dao.db_schema);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(1),null);
var success_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$success,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var error_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$error,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__6961__auto___9079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto___9079,vec__9056,_,ch,success_chan,error_chan){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto___9079,vec__9056,_,ch,success_chan,error_chan){
return (function (state_9063){
var state_val_9064 = (state_9063[(1)]);
if((state_val_9064 === (1))){
var state_9063__$1 = state_9063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9063__$1,(2),success_chan);
} else {
if((state_val_9064 === (2))){
var inst_9060 = (state_9063[(2)]);
var inst_9061 = dao.dao.save_db(inst_9060);
var state_9063__$1 = state_9063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9063__$1,inst_9061);
} else {
return null;
}
}
});})(c__6961__auto___9079,vec__9056,_,ch,success_chan,error_chan))
;
return ((function (switch__6858__auto__,c__6961__auto___9079,vec__9056,_,ch,success_chan,error_chan){
return (function() {
var dao$dao$init_db_$_state_machine__6859__auto__ = null;
var dao$dao$init_db_$_state_machine__6859__auto____0 = (function (){
var statearr_9065 = [null,null,null,null,null,null,null];
(statearr_9065[(0)] = dao$dao$init_db_$_state_machine__6859__auto__);

(statearr_9065[(1)] = (1));

return statearr_9065;
});
var dao$dao$init_db_$_state_machine__6859__auto____1 = (function (state_9063){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_9063);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e9066){if((e9066 instanceof Object)){
var ex__6862__auto__ = e9066;
var statearr_9067_9080 = state_9063;
(statearr_9067_9080[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9063);

return cljs.core.cst$kw$recur;
} else {
throw e9066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__9081 = state_9063;
state_9063 = G__9081;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
dao$dao$init_db_$_state_machine__6859__auto__ = function(state_9063){
switch(arguments.length){
case 0:
return dao$dao$init_db_$_state_machine__6859__auto____0.call(this);
case 1:
return dao$dao$init_db_$_state_machine__6859__auto____1.call(this,state_9063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$init_db_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$init_db_$_state_machine__6859__auto____0;
dao$dao$init_db_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$init_db_$_state_machine__6859__auto____1;
return dao$dao$init_db_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto___9079,vec__9056,_,ch,success_chan,error_chan))
})();
var state__6963__auto__ = (function (){var statearr_9068 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_9068[(6)] = c__6961__auto___9079);

return statearr_9068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto___9079,vec__9056,_,ch,success_chan,error_chan))
);


var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__,vec__9056,_,ch,success_chan,error_chan){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__,vec__9056,_,ch,success_chan,error_chan){
return (function (state_9073){
var state_val_9074 = (state_9073[(1)]);
if((state_val_9074 === (1))){
var state_9073__$1 = state_9073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9073__$1,(2),error_chan);
} else {
if((state_val_9074 === (2))){
var inst_9070 = (state_9073[(2)]);
var inst_9071 = dao.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_9070], 0));
var state_9073__$1 = state_9073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9073__$1,inst_9071);
} else {
return null;
}
}
});})(c__6961__auto__,vec__9056,_,ch,success_chan,error_chan))
;
return ((function (switch__6858__auto__,c__6961__auto__,vec__9056,_,ch,success_chan,error_chan){
return (function() {
var dao$dao$init_db_$_state_machine__6859__auto__ = null;
var dao$dao$init_db_$_state_machine__6859__auto____0 = (function (){
var statearr_9075 = [null,null,null,null,null,null,null];
(statearr_9075[(0)] = dao$dao$init_db_$_state_machine__6859__auto__);

(statearr_9075[(1)] = (1));

return statearr_9075;
});
var dao$dao$init_db_$_state_machine__6859__auto____1 = (function (state_9073){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_9073);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e9076){if((e9076 instanceof Object)){
var ex__6862__auto__ = e9076;
var statearr_9077_9082 = state_9073;
(statearr_9077_9082[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9073);

return cljs.core.cst$kw$recur;
} else {
throw e9076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__9083 = state_9073;
state_9073 = G__9083;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
dao$dao$init_db_$_state_machine__6859__auto__ = function(state_9073){
switch(arguments.length){
case 0:
return dao$dao$init_db_$_state_machine__6859__auto____0.call(this);
case 1:
return dao$dao$init_db_$_state_machine__6859__auto____1.call(this,state_9073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$init_db_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$init_db_$_state_machine__6859__auto____0;
dao$dao$init_db_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$init_db_$_state_machine__6859__auto____1;
return dao$dao$init_db_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__,vec__9056,_,ch,success_chan,error_chan))
})();
var state__6963__auto__ = (function (){var statearr_9078 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_9078[(6)] = c__6961__auto__);

return statearr_9078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__,vec__9056,_,ch,success_chan,error_chan))
);

return c__6961__auto__;
});
dao.dao.put = (function dao$dao$put(payload,store,fn){
return dao.indexdb.put_item(dao.dao.db,store,payload,fn,(function (p1__9084_SHARP_){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("put error ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__9084_SHARP_], 0));
}));
});
dao.dao.put_state = (function dao$dao$put_state(state,fn){
return dao.dao.put(state,dao.dao.db_store,fn);
});
dao.dao.get_state = (function dao$dao$get_state(key,fn){
var result_ch = dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic(dao.dao.db,dao.dao.db_store,key,clicker.util.default_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var c__6961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__6961__auto__,result_ch){
return (function (){
var f__6962__auto__ = (function (){var switch__6858__auto__ = ((function (c__6961__auto__,result_ch){
return (function (state_9089){
var state_val_9090 = (state_9089[(1)]);
if((state_val_9090 === (1))){
var state_9089__$1 = state_9089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9089__$1,(2),result_ch);
} else {
if((state_val_9090 === (2))){
var inst_9086 = (state_9089[(2)]);
var inst_9087 = (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(inst_9086) : fn.call(null,inst_9086));
var state_9089__$1 = state_9089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9089__$1,inst_9087);
} else {
return null;
}
}
});})(c__6961__auto__,result_ch))
;
return ((function (switch__6858__auto__,c__6961__auto__,result_ch){
return (function() {
var dao$dao$get_state_$_state_machine__6859__auto__ = null;
var dao$dao$get_state_$_state_machine__6859__auto____0 = (function (){
var statearr_9091 = [null,null,null,null,null,null,null];
(statearr_9091[(0)] = dao$dao$get_state_$_state_machine__6859__auto__);

(statearr_9091[(1)] = (1));

return statearr_9091;
});
var dao$dao$get_state_$_state_machine__6859__auto____1 = (function (state_9089){
while(true){
var ret_value__6860__auto__ = (function (){try{while(true){
var result__6861__auto__ = switch__6858__auto__(state_9089);
if(cljs.core.keyword_identical_QMARK_(result__6861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__6861__auto__;
}
break;
}
}catch (e9092){if((e9092 instanceof Object)){
var ex__6862__auto__ = e9092;
var statearr_9093_9095 = state_9089;
(statearr_9093_9095[(5)] = ex__6862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9089);

return cljs.core.cst$kw$recur;
} else {
throw e9092;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__6860__auto__,cljs.core.cst$kw$recur)){
var G__9096 = state_9089;
state_9089 = G__9096;
continue;
} else {
return ret_value__6860__auto__;
}
break;
}
});
dao$dao$get_state_$_state_machine__6859__auto__ = function(state_9089){
switch(arguments.length){
case 0:
return dao$dao$get_state_$_state_machine__6859__auto____0.call(this);
case 1:
return dao$dao$get_state_$_state_machine__6859__auto____1.call(this,state_9089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$get_state_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$get_state_$_state_machine__6859__auto____0;
dao$dao$get_state_$_state_machine__6859__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$get_state_$_state_machine__6859__auto____1;
return dao$dao$get_state_$_state_machine__6859__auto__;
})()
;})(switch__6858__auto__,c__6961__auto__,result_ch))
})();
var state__6963__auto__ = (function (){var statearr_9094 = (f__6962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6962__auto__.cljs$core$IFn$_invoke$arity$0() : f__6962__auto__.call(null));
(statearr_9094[(6)] = c__6961__auto__);

return statearr_9094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6963__auto__);
});})(c__6961__auto__,result_ch))
);

return c__6961__auto__;
});
