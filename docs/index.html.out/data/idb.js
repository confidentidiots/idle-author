// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('data.idb');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
data.idb.IDB = function(){};

data.idb.items = (function data$idb$items(this$,group_key){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$items$arity$2 == null))))){
return this$.data$idb$IDB$items$arity$2(this$,group_key);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.items[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,group_key) : m__4244__auto__.call(null,this$,group_key));
} else {
var m__4244__auto____$1 = (data.idb.items["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,group_key) : m__4244__auto____$1.call(null,this$,group_key));
} else {
throw cljs.core.missing_protocol("IDB.items",this$);
}
}
}
});

data.idb.group_by_item = (function data$idb$group_by_item(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$group_by_item$arity$2 == null))))){
return this$.data$idb$IDB$group_by_item$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.group_by_item[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.group_by_item["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.group-by-item",this$);
}
}
}
});

data.idb.item_dependency = (function data$idb$item_dependency(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_dependency$arity$2 == null))))){
return this$.data$idb$IDB$item_dependency$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_dependency[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_dependency["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-dependency",this$);
}
}
}
});

data.idb.item_function = (function data$idb$item_function(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_function$arity$2 == null))))){
return this$.data$idb$IDB$item_function$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_function[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_function["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-function",this$);
}
}
}
});

data.idb.item_gain = (function data$idb$item_gain(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_gain$arity$2 == null))))){
return this$.data$idb$IDB$item_gain$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_gain[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_gain["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-gain",this$);
}
}
}
});

data.idb.item_group = (function data$idb$item_group(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_group$arity$2 == null))))){
return this$.data$idb$IDB$item_group$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_group[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_group["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-group",this$);
}
}
}
});

data.idb.item_loss = (function data$idb$item_loss(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_loss$arity$2 == null))))){
return this$.data$idb$IDB$item_loss$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_loss[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_loss["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-loss",this$);
}
}
}
});

data.idb.item_name = (function data$idb$item_name(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_name$arity$2 == null))))){
return this$.data$idb$IDB$item_name$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_name["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-name",this$);
}
}
}
});

data.idb.item_ticker = (function data$idb$item_ticker(this$,item){
if(((!((this$ == null))) && (!((this$.data$idb$IDB$item_ticker$arity$2 == null))))){
return this$.data$idb$IDB$item_ticker$arity$2(this$,item);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (data.idb.item_ticker[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto__.call(null,this$,item));
} else {
var m__4244__auto____$1 = (data.idb.item_ticker["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,item) : m__4244__auto____$1.call(null,this$,item));
} else {
throw cljs.core.missing_protocol("IDB.item-ticker",this$);
}
}
}
});

