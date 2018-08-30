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
dao.dao.save_db = (function dao$dao$save_db(p__14566){
var map__14567 = p__14566;
var map__14567__$1 = ((((!((map__14567 == null)))?(((((map__14567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14567):map__14567);
var db_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,cljs.core.cst$kw$db);
return dao.dao.db = db_obj;
});
dao.dao.db_schema = (function dao$dao$db_schema(db_ref){
return dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic(db_ref,dao.dao.db_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_path,"key"], null)], 0));
});
dao.dao.error_prn = (function dao$dao$error_prn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14570 = arguments.length;
var i__4532__auto___14571 = (0);
while(true){
if((i__4532__auto___14571 < len__4531__auto___14570)){
args__4534__auto__.push((arguments[i__4532__auto___14571]));

var G__14572 = (i__4532__auto___14571 + (1));
i__4532__auto___14571 = G__14572;
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
dao.dao.error_prn.cljs$lang$applyTo = (function (seq14569){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14569));
});

dao.dao.version = (1);
dao.dao.init_db = (function dao$dao$init_db(){
var vec__14573 = dao.indexdb.request_db(dao.dao.db_name,dao.dao.version,dao.dao.db_schema);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573,(1),null);
var success_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$success,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var error_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$error,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__12518__auto___14596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto___14596,vec__14573,_,ch,success_chan,error_chan){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto___14596,vec__14573,_,ch,success_chan,error_chan){
return (function (state_14580){
var state_val_14581 = (state_14580[(1)]);
if((state_val_14581 === (1))){
var state_14580__$1 = state_14580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14580__$1,(2),success_chan);
} else {
if((state_val_14581 === (2))){
var inst_14577 = (state_14580[(2)]);
var inst_14578 = dao.dao.save_db(inst_14577);
var state_14580__$1 = state_14580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14580__$1,inst_14578);
} else {
return null;
}
}
});})(c__12518__auto___14596,vec__14573,_,ch,success_chan,error_chan))
;
return ((function (switch__12415__auto__,c__12518__auto___14596,vec__14573,_,ch,success_chan,error_chan){
return (function() {
var dao$dao$init_db_$_state_machine__12416__auto__ = null;
var dao$dao$init_db_$_state_machine__12416__auto____0 = (function (){
var statearr_14582 = [null,null,null,null,null,null,null];
(statearr_14582[(0)] = dao$dao$init_db_$_state_machine__12416__auto__);

(statearr_14582[(1)] = (1));

return statearr_14582;
});
var dao$dao$init_db_$_state_machine__12416__auto____1 = (function (state_14580){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14580);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object)){
var ex__12419__auto__ = e14583;
var statearr_14584_14597 = state_14580;
(statearr_14584_14597[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14580);

return cljs.core.cst$kw$recur;
} else {
throw e14583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14598 = state_14580;
state_14580 = G__14598;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
dao$dao$init_db_$_state_machine__12416__auto__ = function(state_14580){
switch(arguments.length){
case 0:
return dao$dao$init_db_$_state_machine__12416__auto____0.call(this);
case 1:
return dao$dao$init_db_$_state_machine__12416__auto____1.call(this,state_14580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$init_db_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$init_db_$_state_machine__12416__auto____0;
dao$dao$init_db_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$init_db_$_state_machine__12416__auto____1;
return dao$dao$init_db_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto___14596,vec__14573,_,ch,success_chan,error_chan))
})();
var state__12520__auto__ = (function (){var statearr_14585 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14585[(6)] = c__12518__auto___14596);

return statearr_14585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto___14596,vec__14573,_,ch,success_chan,error_chan))
);


var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__,vec__14573,_,ch,success_chan,error_chan){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__,vec__14573,_,ch,success_chan,error_chan){
return (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (1))){
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14590__$1,(2),error_chan);
} else {
if((state_val_14591 === (2))){
var inst_14587 = (state_14590[(2)]);
var inst_14588 = dao.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14587], 0));
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14590__$1,inst_14588);
} else {
return null;
}
}
});})(c__12518__auto__,vec__14573,_,ch,success_chan,error_chan))
;
return ((function (switch__12415__auto__,c__12518__auto__,vec__14573,_,ch,success_chan,error_chan){
return (function() {
var dao$dao$init_db_$_state_machine__12416__auto__ = null;
var dao$dao$init_db_$_state_machine__12416__auto____0 = (function (){
var statearr_14592 = [null,null,null,null,null,null,null];
(statearr_14592[(0)] = dao$dao$init_db_$_state_machine__12416__auto__);

(statearr_14592[(1)] = (1));

return statearr_14592;
});
var dao$dao$init_db_$_state_machine__12416__auto____1 = (function (state_14590){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14590);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14593){if((e14593 instanceof Object)){
var ex__12419__auto__ = e14593;
var statearr_14594_14599 = state_14590;
(statearr_14594_14599[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14590);

return cljs.core.cst$kw$recur;
} else {
throw e14593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14600 = state_14590;
state_14590 = G__14600;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
dao$dao$init_db_$_state_machine__12416__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return dao$dao$init_db_$_state_machine__12416__auto____0.call(this);
case 1:
return dao$dao$init_db_$_state_machine__12416__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$init_db_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$init_db_$_state_machine__12416__auto____0;
dao$dao$init_db_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$init_db_$_state_machine__12416__auto____1;
return dao$dao$init_db_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__,vec__14573,_,ch,success_chan,error_chan))
})();
var state__12520__auto__ = (function (){var statearr_14595 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14595[(6)] = c__12518__auto__);

return statearr_14595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__,vec__14573,_,ch,success_chan,error_chan))
);

return c__12518__auto__;
});
dao.dao.put = (function dao$dao$put(payload,store,fn){
return dao.indexdb.put_item(dao.dao.db,store,payload,fn,(function (p1__14601_SHARP_){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("put error ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14601_SHARP_], 0));
}));
});
dao.dao.put_state = (function dao$dao$put_state(state,fn){
return dao.dao.put(state,dao.dao.db_store,fn);
});
dao.dao.get_state = (function dao$dao$get_state(key,fn){
var result_ch = dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic(dao.dao.db,dao.dao.db_store,key,clicker.util.default_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var c__12518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12518__auto__,result_ch){
return (function (){
var f__12519__auto__ = (function (){var switch__12415__auto__ = ((function (c__12518__auto__,result_ch){
return (function (state_14606){
var state_val_14607 = (state_14606[(1)]);
if((state_val_14607 === (1))){
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14606__$1,(2),result_ch);
} else {
if((state_val_14607 === (2))){
var inst_14603 = (state_14606[(2)]);
var inst_14604 = (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(inst_14603) : fn.call(null,inst_14603));
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14606__$1,inst_14604);
} else {
return null;
}
}
});})(c__12518__auto__,result_ch))
;
return ((function (switch__12415__auto__,c__12518__auto__,result_ch){
return (function() {
var dao$dao$get_state_$_state_machine__12416__auto__ = null;
var dao$dao$get_state_$_state_machine__12416__auto____0 = (function (){
var statearr_14608 = [null,null,null,null,null,null,null];
(statearr_14608[(0)] = dao$dao$get_state_$_state_machine__12416__auto__);

(statearr_14608[(1)] = (1));

return statearr_14608;
});
var dao$dao$get_state_$_state_machine__12416__auto____1 = (function (state_14606){
while(true){
var ret_value__12417__auto__ = (function (){try{while(true){
var result__12418__auto__ = switch__12415__auto__(state_14606);
if(cljs.core.keyword_identical_QMARK_(result__12418__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12418__auto__;
}
break;
}
}catch (e14609){if((e14609 instanceof Object)){
var ex__12419__auto__ = e14609;
var statearr_14610_14612 = state_14606;
(statearr_14610_14612[(5)] = ex__12419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14606);

return cljs.core.cst$kw$recur;
} else {
throw e14609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12417__auto__,cljs.core.cst$kw$recur)){
var G__14613 = state_14606;
state_14606 = G__14613;
continue;
} else {
return ret_value__12417__auto__;
}
break;
}
});
dao$dao$get_state_$_state_machine__12416__auto__ = function(state_14606){
switch(arguments.length){
case 0:
return dao$dao$get_state_$_state_machine__12416__auto____0.call(this);
case 1:
return dao$dao$get_state_$_state_machine__12416__auto____1.call(this,state_14606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$get_state_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$get_state_$_state_machine__12416__auto____0;
dao$dao$get_state_$_state_machine__12416__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$get_state_$_state_machine__12416__auto____1;
return dao$dao$get_state_$_state_machine__12416__auto__;
})()
;})(switch__12415__auto__,c__12518__auto__,result_ch))
})();
var state__12520__auto__ = (function (){var statearr_14611 = (f__12519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12519__auto__.cljs$core$IFn$_invoke$arity$0() : f__12519__auto__.call(null));
(statearr_14611[(6)] = c__12518__auto__);

return statearr_14611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12520__auto__);
});})(c__12518__auto__,result_ch))
);

return c__12518__auto__;
});
