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
dao.dao.save_db = (function dao$dao$save_db(p__14573){
var map__14574 = p__14573;
var map__14574__$1 = ((((!((map__14574 == null)))?(((((map__14574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14574):map__14574);
var db_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14574__$1,cljs.core.cst$kw$db);
return dao.dao.db = db_obj;
});
dao.dao.db_schema = (function dao$dao$db_schema(db_ref){
return dao.indexdb.delete_and_create_store.cljs$core$IFn$_invoke$arity$variadic(db_ref,dao.dao.db_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_path,"key"], null)], 0));
});
dao.dao.error_prn = (function dao$dao$error_prn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14577 = arguments.length;
var i__4532__auto___14578 = (0);
while(true){
if((i__4532__auto___14578 < len__4531__auto___14577)){
args__4534__auto__.push((arguments[i__4532__auto___14578]));

var G__14579 = (i__4532__auto___14578 + (1));
i__4532__auto___14578 = G__14579;
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
dao.dao.error_prn.cljs$lang$applyTo = (function (seq14576){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14576));
});

dao.dao.version = (1);
dao.dao.init_db = (function dao$dao$init_db(){
var vec__14580 = dao.indexdb.request_db(dao.dao.db_name,dao.dao.version,dao.dao.db_schema);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14580,(1),null);
var success_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$success,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var error_chan = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(ch,cljs.core.cst$kw$error,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__12525__auto___14603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto___14603,vec__14580,_,ch,success_chan,error_chan){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto___14603,vec__14580,_,ch,success_chan,error_chan){
return (function (state_14587){
var state_val_14588 = (state_14587[(1)]);
if((state_val_14588 === (1))){
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14587__$1,(2),success_chan);
} else {
if((state_val_14588 === (2))){
var inst_14584 = (state_14587[(2)]);
var inst_14585 = dao.dao.save_db(inst_14584);
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14587__$1,inst_14585);
} else {
return null;
}
}
});})(c__12525__auto___14603,vec__14580,_,ch,success_chan,error_chan))
;
return ((function (switch__12422__auto__,c__12525__auto___14603,vec__14580,_,ch,success_chan,error_chan){
return (function() {
var dao$dao$init_db_$_state_machine__12423__auto__ = null;
var dao$dao$init_db_$_state_machine__12423__auto____0 = (function (){
var statearr_14589 = [null,null,null,null,null,null,null];
(statearr_14589[(0)] = dao$dao$init_db_$_state_machine__12423__auto__);

(statearr_14589[(1)] = (1));

return statearr_14589;
});
var dao$dao$init_db_$_state_machine__12423__auto____1 = (function (state_14587){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14587);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14590){if((e14590 instanceof Object)){
var ex__12426__auto__ = e14590;
var statearr_14591_14604 = state_14587;
(statearr_14591_14604[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14587);

return cljs.core.cst$kw$recur;
} else {
throw e14590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14605 = state_14587;
state_14587 = G__14605;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
dao$dao$init_db_$_state_machine__12423__auto__ = function(state_14587){
switch(arguments.length){
case 0:
return dao$dao$init_db_$_state_machine__12423__auto____0.call(this);
case 1:
return dao$dao$init_db_$_state_machine__12423__auto____1.call(this,state_14587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$init_db_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$init_db_$_state_machine__12423__auto____0;
dao$dao$init_db_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$init_db_$_state_machine__12423__auto____1;
return dao$dao$init_db_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto___14603,vec__14580,_,ch,success_chan,error_chan))
})();
var state__12527__auto__ = (function (){var statearr_14592 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14592[(6)] = c__12525__auto___14603);

return statearr_14592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto___14603,vec__14580,_,ch,success_chan,error_chan))
);


var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__,vec__14580,_,ch,success_chan,error_chan){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__,vec__14580,_,ch,success_chan,error_chan){
return (function (state_14597){
var state_val_14598 = (state_14597[(1)]);
if((state_val_14598 === (1))){
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14597__$1,(2),error_chan);
} else {
if((state_val_14598 === (2))){
var inst_14594 = (state_14597[(2)]);
var inst_14595 = dao.dao.error_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14594], 0));
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14597__$1,inst_14595);
} else {
return null;
}
}
});})(c__12525__auto__,vec__14580,_,ch,success_chan,error_chan))
;
return ((function (switch__12422__auto__,c__12525__auto__,vec__14580,_,ch,success_chan,error_chan){
return (function() {
var dao$dao$init_db_$_state_machine__12423__auto__ = null;
var dao$dao$init_db_$_state_machine__12423__auto____0 = (function (){
var statearr_14599 = [null,null,null,null,null,null,null];
(statearr_14599[(0)] = dao$dao$init_db_$_state_machine__12423__auto__);

(statearr_14599[(1)] = (1));

return statearr_14599;
});
var dao$dao$init_db_$_state_machine__12423__auto____1 = (function (state_14597){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14597);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14600){if((e14600 instanceof Object)){
var ex__12426__auto__ = e14600;
var statearr_14601_14606 = state_14597;
(statearr_14601_14606[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14597);

return cljs.core.cst$kw$recur;
} else {
throw e14600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14607 = state_14597;
state_14597 = G__14607;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
dao$dao$init_db_$_state_machine__12423__auto__ = function(state_14597){
switch(arguments.length){
case 0:
return dao$dao$init_db_$_state_machine__12423__auto____0.call(this);
case 1:
return dao$dao$init_db_$_state_machine__12423__auto____1.call(this,state_14597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$init_db_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$init_db_$_state_machine__12423__auto____0;
dao$dao$init_db_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$init_db_$_state_machine__12423__auto____1;
return dao$dao$init_db_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__,vec__14580,_,ch,success_chan,error_chan))
})();
var state__12527__auto__ = (function (){var statearr_14602 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14602[(6)] = c__12525__auto__);

return statearr_14602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__,vec__14580,_,ch,success_chan,error_chan))
);

return c__12525__auto__;
});
dao.dao.put = (function dao$dao$put(payload,store,fn){
return dao.indexdb.put_item(dao.dao.db,store,payload,fn,(function (p1__14608_SHARP_){
return clicker.util.log.cljs$core$IFn$_invoke$arity$variadic("put error ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14608_SHARP_], 0));
}));
});
dao.dao.put_state = (function dao$dao$put_state(state,fn){
return dao.dao.put(state,dao.dao.db_store,fn);
});
dao.dao.get_state = (function dao$dao$get_state(key,fn){
var result_ch = dao.indexdb.get_by_key.cljs$core$IFn$_invoke$arity$variadic(dao.dao.db,dao.dao.db_store,key,clicker.util.default_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var c__12525__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12525__auto__,result_ch){
return (function (){
var f__12526__auto__ = (function (){var switch__12422__auto__ = ((function (c__12525__auto__,result_ch){
return (function (state_14613){
var state_val_14614 = (state_14613[(1)]);
if((state_val_14614 === (1))){
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14613__$1,(2),result_ch);
} else {
if((state_val_14614 === (2))){
var inst_14610 = (state_14613[(2)]);
var inst_14611 = (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(inst_14610) : fn.call(null,inst_14610));
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14613__$1,inst_14611);
} else {
return null;
}
}
});})(c__12525__auto__,result_ch))
;
return ((function (switch__12422__auto__,c__12525__auto__,result_ch){
return (function() {
var dao$dao$get_state_$_state_machine__12423__auto__ = null;
var dao$dao$get_state_$_state_machine__12423__auto____0 = (function (){
var statearr_14615 = [null,null,null,null,null,null,null];
(statearr_14615[(0)] = dao$dao$get_state_$_state_machine__12423__auto__);

(statearr_14615[(1)] = (1));

return statearr_14615;
});
var dao$dao$get_state_$_state_machine__12423__auto____1 = (function (state_14613){
while(true){
var ret_value__12424__auto__ = (function (){try{while(true){
var result__12425__auto__ = switch__12422__auto__(state_14613);
if(cljs.core.keyword_identical_QMARK_(result__12425__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12425__auto__;
}
break;
}
}catch (e14616){if((e14616 instanceof Object)){
var ex__12426__auto__ = e14616;
var statearr_14617_14619 = state_14613;
(statearr_14617_14619[(5)] = ex__12426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14613);

return cljs.core.cst$kw$recur;
} else {
throw e14616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12424__auto__,cljs.core.cst$kw$recur)){
var G__14620 = state_14613;
state_14613 = G__14620;
continue;
} else {
return ret_value__12424__auto__;
}
break;
}
});
dao$dao$get_state_$_state_machine__12423__auto__ = function(state_14613){
switch(arguments.length){
case 0:
return dao$dao$get_state_$_state_machine__12423__auto____0.call(this);
case 1:
return dao$dao$get_state_$_state_machine__12423__auto____1.call(this,state_14613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dao$dao$get_state_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$0 = dao$dao$get_state_$_state_machine__12423__auto____0;
dao$dao$get_state_$_state_machine__12423__auto__.cljs$core$IFn$_invoke$arity$1 = dao$dao$get_state_$_state_machine__12423__auto____1;
return dao$dao$get_state_$_state_machine__12423__auto__;
})()
;})(switch__12422__auto__,c__12525__auto__,result_ch))
})();
var state__12527__auto__ = (function (){var statearr_14618 = (f__12526__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12526__auto__.cljs$core$IFn$_invoke$arity$0() : f__12526__auto__.call(null));
(statearr_14618[(6)] = c__12525__auto__);

return statearr_14618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12527__auto__);
});})(c__12525__auto__,result_ch))
);

return c__12525__auto__;
});
