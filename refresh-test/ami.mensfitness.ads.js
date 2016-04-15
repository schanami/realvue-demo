/*! pubfood v0.2.1 | (c) pubfood | http://pubfood.org/LICENSE.txt */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pubfood=t()}}(function(){return function t(e,i,r){function n(s,a){if(!i[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var d=i[s]={exports:{}};e[s][0].call(d.exports,function(t){var i=e[s][1][t];return n(i?i:t)},d,d.exports,t,e,i,r)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)n(r[s]);return n}({1:[function(t,e,i){"use strict";function r(t,e,i){this.fn=t,this.context=e,this.once=i||!1}function n(){}var o="function"!=typeof Object.create?"~":!1;n.prototype._events=void 0,n.prototype.listeners=function(t,e){var i=o?o+t:t,r=this._events&&this._events[i];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var n=0,s=r.length,a=new Array(s);s>n;n++)a[n]=r[n].fn;return a},n.prototype.emit=function(t,e,i,r,n,s){var a=o?o+t:t;if(!this._events||!this._events[a])return!1;var u,p,d=this._events[a],h=arguments.length;if("function"==typeof d.fn){switch(d.once&&this.removeListener(t,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,e),!0;case 3:return d.fn.call(d.context,e,i),!0;case 4:return d.fn.call(d.context,e,i,r),!0;case 5:return d.fn.call(d.context,e,i,r,n),!0;case 6:return d.fn.call(d.context,e,i,r,n,s),!0}for(p=1,u=new Array(h-1);h>p;p++)u[p-1]=arguments[p];d.fn.apply(d.context,u)}else{var l,c=d.length;for(p=0;c>p;p++)switch(d[p].once&&this.removeListener(t,d[p].fn,void 0,!0),h){case 1:d[p].fn.call(d[p].context);break;case 2:d[p].fn.call(d[p].context,e);break;case 3:d[p].fn.call(d[p].context,e,i);break;default:if(!u)for(l=1,u=new Array(h-1);h>l;l++)u[l-1]=arguments[l];d[p].fn.apply(d[p].context,u)}}return!0},n.prototype.on=function(t,e,i){var n=new r(e,i||this),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],n]:this._events[s].push(n):this._events[s]=n,this},n.prototype.once=function(t,e,i){var n=new r(e,i||this,!0),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],n]:this._events[s].push(n):this._events[s]=n,this},n.prototype.removeListener=function(t,e,i,r){var n=o?o+t:t;if(!this._events||!this._events[n])return this;var s=this._events[n],a=[];if(e)if(s.fn)(s.fn!==e||r&&!s.once||i&&s.context!==i)&&a.push(s);else for(var u=0,p=s.length;p>u;u++)(s[u].fn!==e||r&&!s[u].once||i&&s[u].context!==i)&&a.push(s[u]);return a.length?this._events[n]=1===a.length?a[0]:a:delete this._events[n],this},n.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[o?o+t:t]:this._events=o?{}:Object.create(null),this):this},n.prototype.off=n.prototype.removeListener,n.prototype.addListener=n.prototype.on,n.prototype.setMaxListeners=function(){return this},n.prefixed=o,"undefined"!=typeof e&&(e.exports=n)},{}],2:[function(t,e,i){"use strict";function r(){this.operators=[]}r.prototype.addOperator=function(t){this.operators.push(t)},r.prototype.process=function(t,e){for(var i=t,r=0;r<this.operators.length;r++)i=this.operators[r].process(i,e);return i},e.exports=r},{}],3:[function(t,e,i){"use strict";function r(){this.operators=[]}r.prototype.addOperator=function(t){this.operators.push(t)},r.prototype.process=function(t,e){for(var i=t,r=0;r<this.operators.length;r++)i=this.operators[r].process(i,e);return i},e.exports=r},{}],4:[function(t,e,i){"use strict";function r(t){this.name="OP-"+n.newId(),this.transform=t}var n=t("../util"),o=t("../event"),s=t("../errors");r.validate=function(t){return!!t&&"function"===n.asType(t)},r.withDelegate=function(t){if(!r.validate(t))return null;var e=new r(t);return e},r.prototype.setName=function(t){return this.name=t,this},r.prototype.process=function(t,e){if(!t)return null;var i=this.transform(t,e);return i||o.publish(o.EVENT_TYPE.ERROR,new s("no transform output")),i||null},e.exports=r},{"../errors":5,"../event":6,"../util":16}],5:[function(t,e,i){"use strict";function r(t){this.name=n,this.message=t||"Pubfood integration error.",this.stack=(new Error).stack}var n="PubfoodError";r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.name=n,r.prototype.is=function(t){return t&&t.name===n},e.exports=r},{}],6:[function(t,e,i){"use strict";function r(){this.auctionId="pubfood:"+Date.now(),this.observeImmediate_={}}var n=t("./util"),o=t("./logger"),s=t("eventemitter3");r.prototype.setAuctionId=function(t){var e=n.asType(t);return"string"!==e&&"number"!==e||(this.auctionId=t),this.auctionId},r.prototype.EVENT_TYPE={PUBFOOD_API_LOAD:"PUBFOOD_API_LOAD",PUBFOOD_API_START:"PUBFOOD_API_START",PUBFOOD_API_REFRESH:"PUBFOOD_API_REFRESH",BID_LIB_START:"BID_LIB_START",BID_LIB_LOAD:"BID_LIB_LOAD",BID_LIB_LOADED:"BID_LIB_LOADED",BID_START:"BID_START",BID_PUSH_NEXT:"BID_PUSH_NEXT",BID_PUSH_NEXT_LATE:"BID_PUSH_NEXT_LATE",BID_COMPLETE:"BID_COMPLETE",BID_ASSEMBLER:"BID_ASSEMBLER",AUCTION_LIB_START:"AUCTION_LIB_START",AUCTION_LIB_LOAD:"AUCTION_LIB_LOAD",AUCTION_LIB_LOADED:"AUCTION_LIB_LOADED",AUCTION_GO:"AUCTION_GO",AUCTION_START:"AUCTION_START",AUCTION_TRIGGER:"AUCTION_TRIGGER",AUCTION_REFRESH:"AUCTION_REFRESH",AUCTION_COMPLETE:"AUCTION_COMPLETE",AUCTION_POST_RUN:"AUCTION_POST_RUN",ERROR:"ERROR",WARN:"WARN",INVALID:"INVALID"},r.prototype.publish=function(t,e,i){var r=+new Date;t===this.EVENT_TYPE.PUBFOOD_API_START&&e&&(r=e);var n={auctionId:this.auctionId,ts:r,type:t,eventContext:i||"pubfood",data:e||""};return o.logEvent(t,this.auctionId,n),this.emit(t,n)},n["extends"](r,s),r.prototype.emit=function(t){var e=s.prototype.emit.apply(this,arguments);return e&&this.EVENT_TYPE.AUCTION_POST_RUN!==t||(e=!0,this.observeImmediate_[t]=this.observeImmediate_[t]||[],this.observeImmediate_[t].push(Array.prototype.slice.call(arguments,1))),e},r.prototype.on=function(t,e){var i=this.observeImmediate_[t]||null;if(i){for(var r=0;r<i.length;r++)e.apply(this,i[r]);return this}return s.prototype.on.apply(this,arguments)},r.prototype.removeAllListeners=function(){return s.prototype.removeAllListeners.call(this),this.observeImmediate_={},this},e.exports=new r},{"./logger":8,"./util":16,eventemitter3:1}],7:[function(t,e,i){"use strict";var r={name:"",libUri:"",timeout:0,init:function(t,e){},refresh:function(t,e){}};r.optional={refresh:!0,timeout:!0};var n={name:"__default__",libUri:" ",timeout:0,init:function(t,e,i){i()},refresh:function(t,e,i){i()}};n.optional={libUri:!0,refresh:!0,timeout:!0};var o=function(t,e){},s={slot:"",value:"",sizes:[],targeting:{},label:""},a={name:"",elementId:"",sizes:[],bidProviders:[]};e.exports={BidDelegate:n,AuctionDelegate:r,SlotConfig:a,BidObject:s,TransformDelegate:o}},{}],8:[function(t,e,i){"use strict";var r={history:[],dumpLog:function(t){if(console&&console.log){var e;t&&(e=new RegExp(t,"g"));for(var i=0;i<this.history.length;i++){var r=this.history[i];e?(e.lastIndex=0,r.eventName&&e.test(r.eventName)&&console.log(r),r.functionName&&e.test(r.functionName)&&console.log(r)):console.log(r)}}},logCall:function(t,e,i){this.history.push({ts:+new Date,auctionId:e,functionName:t,args:Array.prototype.slice.call(i)})},logEvent:function(t,e,i){this.history.push({ts:+new Date,auctionId:e,eventName:t,event:i})}};e.exports=r},{}],9:[function(t,e,i){"use strict";function r(t){this.init_&&this.init_(),this.prefix=t&&t.hasOwnProperty("prefix")?t.prefix:!0,this.slotMap={},this.bidProviders={},this.auctionProvider=null,this.auctionRun={},this.timeout_=r.NO_TIMEOUT,this.trigger_=null,this.bidAssembler=new a,this.requestAssembler=new u,this.auctionIdx_=0,this.doneCallbackOffset_=r.DEFAULT_DONE_CALLBACK_OFFSET,this.omitDefaultBidKey_=!1,l.setAuctionId(this.getAuctionId())}var n=t("../util"),o=t("../model/slot"),s=t("../model/bid"),a=t("../assembler/bidassembler"),u=t("../assembler/requestassembler"),p=t("../assembler/transformoperator"),d=t("../provider/auctionprovider"),h=t("../provider/bidprovider"),l=t("../event"),c=t("../pubfoodobject");r.PAGE_BIDS="page",r.AUCTION_TYPE={START:"init",REFRESH:"refresh"},r.IN_AUCTION={FALSE:!1,PENDING:"pending",DONE:"done"},r.NO_TIMEOUT=-1,r.DEFAULT_DONE_CALLBACK_OFFSET=5e3,r.prototype.validate=function(t){var e=!0,i={hasAuctionProvider:function(){return!!this.auctionProvider},hasBidProviders:function(){var t=!1;for(var e in this.bidProviders){t=!0;break}return t||l.publish(l.EVENT_TYPE.WARN,{msg:"Warn: no bid providers"}),t},hasSlots:function(){for(var t in this.slotMap)return!0;return!1},hasAllSlotsBidder:function(){var t=[];for(var e in this.slotMap){var i=this.slotMap[e];i.bidProviders&&i.bidProviders[0]||t.push(i.name)}return t.length>0&&l.publish(l.EVENT_TYPE.WARN,{msg:"Warn: no bidders - "+t.join(", ")}),0===t.length}};i.hasBidProviders.warn=!0;for(var r in i)if(e=i[r].call(this),e=i[r].warn?!0:e,!e){l.publish(l.EVENT_TYPE.INVALID,{msg:"Failed: "+r});break}return e},r.prototype.newAuctionRun=function(t){var e=++this.auctionIdx_,i=[];if(n.isArray(t)&&t.length>0)for(var o=0;o<t.length;o++){var s=t[o];this.slotMap[s]?i.push(this.slotMap[s]):l.publish(l.EVENT_TYPE.WARN,"Can't refresh slot \""+s+"\", because it wasn't defined")}else for(var a in this.slotMap)i.push(this.slotMap[a]);var u={inAuction:r.IN_AUCTION.FALSE,slots:i,bids:[],lateBids:[],bidStatus:{},targeting:[]};for(var a in this.bidProviders){var p=this.bidProviders[a];!p||p.name in u.bidStatus||!p.enabled()||(u.bidStatus[p.name]=!1)}return this.auctionRun[e]=u,e},r.prototype.getBidStatus=function(t,e){var i=[];if(e){var r=this.auctionRun[e],o=r?r.bidStatus[t]:"";i="boolean"===n.asType(o)?o:-1}else for(var s in this.auctionRun){var o=this.auctionRun[s].bidStatus[t];i.push("boolean"===n.asType(o)?o:-1)}return i},r.prototype.timeout=function(t){this.timeout_="number"===n.asType(t)&&t>0?t:r.NO_TIMEOUT},r.prototype.getTimeout=function(){return this.timeout_},r.prototype.doneCallbackOffset=function(t){this.doneCallbackOffset_="number"===n.asType(t)?t:r.DEFAULT_DONE_CALLBACK_OFFSET},r.prototype.getDoneCallbackOffset=function(){return this.doneCallbackOffset_},r.prototype.setAuctionProviderCbTimeout=function(t){this.initDoneTimeout_="number"===n.asType(t)&&t>0?t:this.doneCallbackOffset_},r.prototype.setAuctionTrigger=function(t){this.trigger_=t},r.prototype.startAuction_=function(t,e){l.publish(l.EVENT_TYPE.BID_ASSEMBLER,"AuctionMediator"),this.bidAssembler.operators.length>0&&(this.auctionRun[t].bids=this.bidAssembler.process(this.auctionRun[t].bids)),this.processTargeting_(t,e)},r.prototype.startTimeout_=function(t,e){if(this.timeout_!==r.NO_TIMEOUT&&this.timeout_>=0){var i=t,o=e,s=n.bind(this.startAuction_,this);setTimeout(function(){s(i,o)},this.timeout_)}return this},r.prototype.initAuctionTrigger_=function(t,e){function i(){this.auctionRun[r].inAuction||this.startAuction_(r,o)}if("function"!==n.asType(this.trigger_))return void this.startTimeout_(t,e);var r=t,o=e;return this.trigger_.apply(null,[n.bind(i,this)]),this},r.prototype.allBiddersDone=function(t){var e=!0,i=this.auctionRun[t].bidStatus;for(var r in i)if(!i[r]){e=!1;break}return e},r.prototype.checkBids_=function(t,e){this.allBiddersDone(t)&&!this.auctionRun[t].inAuction&&this.startAuction_(t,e)},r.prototype.getBidKey=function(t){return(this.prefix&&t.provider?t.provider+"_":"")+(t.label||"bid")},r.prototype.mergeKeys=function(t,e){t=n.mergeToObject(t,e)},r.prototype.getBidMap_=function(t){var e={};e[r.PAGE_BIDS]=[];for(var i=this.getAuctionRunBids(t),n=0;n<i.length;n++){var o=i[n];o.slot?(e[o.slot]=e[o.slot]||[],e[o.slot].push(o)):e[r.PAGE_BIDS].push(o)}return e},r.prototype.buildTargeting_=function(t){for(var e,i=[],n=this.getBidMap_(t),o=this.getAuctionRunSlots(t),s=0;s<o.length;s++){var a={bids:[],targeting:{}},u=o[s];a.name=u.name,a.id=u.id,a.elementId=u.elementId||"",a.sizes=u.sizes,a.type="slot",e=n[u.name]||[];for(var p=0;p<e.length;p++){var d=e[p];if(a.bids.push({value:d.value,provider:d.provider,id:d.id,targeting:d.targeting||{}}),!this.omitDefaultBidKey()){var h=this.getBidKey(d);a.targeting[h]=a.targeting[h]||d.value}this.mergeKeys(a.targeting,d.targeting)}i.push(a)}var l={bids:[],targeting:{}};e=n[r.PAGE_BIDS]||[];for(var c=0;c<e.length;c++){var d=e[c];if(l.bids.push({value:d.value,provider:d.provider,id:d.id,targeting:d.targeting}),!this.omitDefaultBidKey()){var h=this.getBidKey(d);l.targeting[h]=l.targeting[h]||d.value}this.mergeKeys(l.targeting,d.targeting)}return l.bids.length>0&&(l.type="page",i.push(l)),i},r.prototype.processTargeting_=function(t,e){if(!this.auctionRun[t].inAuction){this.auctionRun[t].inAuction=r.IN_AUCTION.PENDING;var i,n=this,o=!1,s=n.auctionProvider.name,a=t,u=n.auctionProvider.getTimeout(),p=function(){o||(o=!0,clearTimeout(i),n.auctionDone(a,s))};i=setTimeout(function(){o||(l.publish(l.EVENT_TYPE.WARN,'Warning: The auction done callback for "'+s+"\" hasn't been called within the allotted time ("+u/1e3+"sec)"),p())},u),e===r.AUCTION_TYPE.START?(l.publish(l.EVENT_TYPE.AUCTION_GO,s),l.publish(l.EVENT_TYPE.AUCTION_START,s)):l.publish(l.EVENT_TYPE.AUCTION_REFRESH,s);var d=n.buildTargeting_(a);this.auctionRun[a].targeting=d,e===r.AUCTION_TYPE.START?n.auctionProvider.init(d,p):n.auctionProvider.refresh(d,p)}},r.prototype.auctionDone=function(t,e){this.auctionRun[t].inAuction=r.IN_AUCTION.DONE;var i=this.getAuctionRun(t).targeting;l.publish(l.EVENT_TYPE.AUCTION_COMPLETE,{name:e,targeting:i}),setTimeout(function(){l.publish(l.EVENT_TYPE.AUCTION_POST_RUN,e)},0)},r.prototype.addSlot=function(t){var e=o.fromObject(t);return e?this.slotMap[e.name]=e:l.publish(l.EVENT_TYPE.WARN,"Invalid slot object: "+JSON.stringify(t||{})),e},r.prototype.getProviderDoneTimeout_=function(t){var e=this.timeout_+this.doneCallbackOffset_;return t.timeout&&(e=t.timeout),e},r.prototype.getBidProviderDoneTimeout_=function(t){var e=this.getProviderDoneTimeout_(t);return this.callbackTimeout_&&(e=this.callbackTimeout_),e},r.prototype.getAuctionProviderDoneTimeout_=function(t){var e=this.getProviderDoneTimeout_(t);return this.initDoneTimeout_&&(e=this.initDoneTimeout_),e},r.prototype.addBidProvider=function(t){var e=h.withDelegate(t);if(e)if(this.bidProviders[e.name])l.publish(l.EVENT_TYPE.WARN,"Warning: bid provider "+e.name+" is already added");else{var i=this.getBidProviderDoneTimeout_(t);e.timeout(i),this.bidProviders[e.name]=e}else{var r=t&&t.name?t.name:"undefined";l.publish(l.EVENT_TYPE.WARN,"Warning: invalid bid provider: "+r)}return e},r.prototype.bidProviderExists_=function(t){return!!this.bidProviders[t]},r.prototype.setAuctionProvider=function(t){this.auctionProvider&&l.publish(l.EVENT_TYPE.WARN,"Warning: auction provider exists: "+this.auctionProvider.name);var e=d.withDelegate(t);if(e){var i=this.getAuctionProviderDoneTimeout_(t);e.timeout(i),this.auctionProvider=e}else{var r=t&&t.name?t.name:"undefined";l.publish(l.EVENT_TYPE.WARN,"Warning: invalid auction provider: "+r)}return e},r.prototype.addRequestTransform=function(t){return this.requestAssembler.addOperator(new p(t)),this},r.prototype.addBidTransform=function(t){return this.bidAssembler.addOperator(new p(t)),this},r.prototype.loadProviders=function(t){var e,i=[];for(var r in this.bidProviders)i.push(r);t&&n.randomize(i);for(var o=0;o<i.length;o++){var s=i[o];if(this.bidProviders[s].libUri){l.publish(l.EVENT_TYPE.BID_LIB_LOAD,this.bidProviders[s].name),e=this.bidProviders[s].libUri()||"";var a=this.bidProviders[s].sync();n.loadUri(e,a)}}this.auctionProvider&&this.auctionProvider.libUri()&&(l.publish(l.EVENT_TYPE.AUCTION_LIB_LOAD,this.auctionProvider.name),e=this.auctionProvider.libUri(),n.loadUri(e))},r.prototype.getBidderSlots=function(t){var e,i,r={},n=[];for(e=0;e<t.length;e++){var o=t[e];for(i=0;i<o.bidProviders.length;i++){var s=o.bidProviders[i];r[s]=r[s]||[],r[s].push(o)}}for(i in this.bidProviders){var s=this.bidProviders[i];s&&s.enabled()&&n.push({provider:s,slots:r[i]||[]})}return n},r.prototype.start=function(t,e){if(!this.auctionProvider)return l.publish(l.EVENT_TYPE.WARN,"Warning: auction provider is not defined."),this;var i=this.newAuctionRun();l.setAuctionId(this.getAuctionId(i)),l.publish(l.EVENT_TYPE.PUBFOOD_API_START,e),this.initAuctionTrigger_(i,r.AUCTION_TYPE.START),this.loadProviders(t);var n=this.getAuctionRunSlots(i),o=this.getBidderSlots(n);return this.processBids(i,r.AUCTION_TYPE.START,o),this},r.prototype.refresh=function(t){if(!this.auctionProvider)return l.publish(l.EVENT_TYPE.WARN,"Warning: auction provider is not defined."),this;var e=this.newAuctionRun(t);l.setAuctionId(this.getAuctionId(e)),l.publish(l.EVENT_TYPE.PUBFOOD_API_REFRESH),this.initAuctionTrigger_(e,r.AUCTION_TYPE.REFRESH);var i=this.getAuctionRunSlots(e),n=this.getBidderSlots(i);return this.processBids(e,r.AUCTION_TYPE.REFRESH,n),this},r.prototype.processBids=function(t,e,i){for(var r=0;r<i.length;r++)this.getBids_(t,e,i[r].provider,i[r].slots)},r.prototype.setBidProviderCbTimeout=function(t){this.callbackTimeout_="number"===n.asType(t)&&t>0?t:this.doneCallbackOffset_},r.prototype.getBids_=function(t,e,i,n){var o,s=this,a=i.name,u=!1,p=t,d=i.getTimeout(),h=function(t){t.auctionIdx=p,s.pushBid(p,t,a)},c=function(){u||(u=!0,clearTimeout(o),s.doneBid(p,e,a))};o=setTimeout(function(){u||(l.publish(l.EVENT_TYPE.WARN,'Warning: The bid done callback for "'+a+"\" hasn't been called within the allotted time ("+d/1e3+"sec)"),c())},d),l.publish(l.EVENT_TYPE.BID_START,a),e===r.AUCTION_TYPE.START?i.init(n,h,c):i.refresh(n,h,c)},r.prototype.pushBid=function(t,e,i){var r=s.fromObject(e);r?(r.provider=i,this.auctionRun[t].inAuction?(this.auctionRun[t].lateBids.push(r),l.publish(l.EVENT_TYPE.BID_PUSH_NEXT_LATE,r)):(this.auctionRun[t].bids.push(r),l.publish(l.EVENT_TYPE.BID_PUSH_NEXT,r))):l.publish(l.EVENT_TYPE.WARN,"Invalid bid object: "+JSON.stringify(e||{}))},r.prototype.doneBid=function(t,e,i){l.publish(l.EVENT_TYPE.BID_COMPLETE,i),this.auctionRun[t].bidStatus[i]=!0,this.checkBids_(t,e)},r.prototype.getAuctionCount=function(){return this.auctionIdx_},r.prototype.getAuctionId=function(t){var e=t||this.auctionIdx_;return this.id+":"+e},r.prototype.getAuctionRun=function(t){var e=this.auctionRun[t];return"undefined"===n.asType(e)?{}:e},r.prototype.getAuctionRunSlots=function(t){var e=this.auctionRun[t];return"undefined"===n.asType(e)?{}:e.slots},r.prototype.getAuctionRunBids=function(t){var e=this.auctionRun[t];return"undefined"===n.asType(e)?[]:e.bids},r.prototype.getAuctionRunLateBids=function(t){var e=this.auctionRun[t];return"undefined"===n.asType(e)?[]:e.lateBids},r.prototype.getAuctionRunTargeting=function(t){var e=this.auctionRun[t];return"undefined"===n.asType(e)?[]:e.targeting},r.prototype.prefixDefaultBidKey=function(t){return"boolean"===n.asType(t)&&(this.prefix=t),this.prefix},r.prototype.omitDefaultBidKey=function(t){return"boolean"===n.asType(t)&&(this.omitDefaultBidKey_=t),this.omitDefaultBidKey_},n["extends"](r,c),e.exports=r},{"../assembler/bidassembler":2,"../assembler/requestassembler":3,"../assembler/transformoperator":4,"../event":6,"../model/bid":10,"../model/slot":11,"../provider/auctionprovider":12,"../provider/bidprovider":13,"../pubfoodobject":15,"../util":16}],10:[function(t,e,i){"use strict";function r(t){this.init_&&this.init_(),this.sizes=[],this.slot,this.value="undefined"===n.asType(t)?"":t,this.type=n.asType(this.value),this.label,this.provider,this.targeting={}}var n=t("../util"),o=t("../pubfoodobject");r.fromObject=function(t){var e=new r,i=n.clone(t);for(var o in i)e[o]=i[o];var s=n.asType(e.value);return e.type="undefined"!==s?s:"",e},r.prototype.setValue=function(t){return this.value="undefined"===n.asType(t)?"":t,this.type=n.asType(this.value),this},r.prototype.addSize=function(t,e){var i=Math.abs(~~t),r=Math.abs(~~e);return this.sizes.push([i,r]),this},n["extends"](r,o),e.exports=r},{"../pubfoodobject":15,"../util":16}],11:[function(t,e,i){"use strict";function r(t,e){this.init_&&this.init_(),this.name=t,this.elementId=e,this.bidProviders=[],this.sizes=[]}var n=t("../util"),o=t("../pubfoodobject"),s=t("../interfaces").SlotConfig;r.validate=function(t){return t?n.validate(s,t):!1},r.fromObject=function(t){if(!r.validate(t))return null;var e=new r;for(var i in t)e[i]=t[i];return e},r.prototype.addSizes=function(t){return Array.prototype.push.apply(this.sizes,t),this},r.prototype.addSize=function(t,e){var i=Math.abs(~~t),r=Math.abs(~~e);return this.sizes.push([i,r]),this},r.prototype.addBidProvider=function(t){return this.bidProviders.push(t),this},n["extends"](r,o),e.exports=r},{"../interfaces":7,"../pubfoodobject":15,"../util":16}],12:[function(t,e,i){"use strict";function r(t){this.init_&&this.init_();var e=t||{};this.name=e.name||"",this.auctionDelegate=e,this.timeout_=e&&e.timeout?e.timeout:0}var n=t("../util"),o=t("../interfaces").AuctionDelegate,s=t("../event"),a=t("../pubfoodobject");r.withDelegate=function(t){if(!r.validate(t))return s.publish(s.EVENT_TYPE.INVALID,{msg:"Warn: invalid auction delegate - "+(t&&JSON.stringify(t))||""}),null;var e=new r(t);return e},r.validate=function(t){return n.validate(o,t)},r.prototype.libUri=function(){return this.auctionDelegate.libUri},r.prototype.init=function(t,e){this.auctionDelegate.init(t,e)},r.prototype.refresh=function(t,e){var i=this.auctionDelegate&&this.auctionDelegate.refresh||null;return i?void i(t,e):void s.publish(s.EVENT_TYPE.WARN,"AuctionProvider.auctionDelegate.refresh not defined.")},r.prototype.timeout=function(t){this.timeout_="number"===n.asType(t)?t:0},r.prototype.getTimeout=function(){return this.timeout_},n["extends"](r,a),e.exports=r},{"../event":6,"../interfaces":7,"../pubfoodobject":15,"../util":16}],13:[function(t,e,i){"use strict";function r(t){this.init_&&this.init_();var e=t||{};this.name=e.name||"",this.bidDelegate=e,this.enabled_=!0,this.timeout_=e&&e.timeout?e.timeout:0}var n=t("../util"),o=t("../interfaces").BidDelegate,s=t("../event"),a=t("../pubfoodobject");r.withDelegate=function(t){if(!r.validate(t))return s.publish(s.EVENT_TYPE.WARN,{msg:"Warn: invalid bidder delegate - "+t||""}),null;var e=new r(t);return e},r.validate=function(t){return n.validate(o,t)},r.prototype.libUri=function(t){return t&&(this.bidDelegate.libUri=t),this.bidDelegate.libUri},r.prototype.sync=function(){var t=Array.prototype.slice.call(arguments);return t.length>0&&"boolean"===n.asType(t[0])&&(this.bidDelegate.sync=t[0]),!!this.bidDelegate.sync},r.prototype.init=function(t,e,i){this.bidDelegate.init(t,e,i)},r.prototype.refresh=function(t,e,i){var r=this.bidDelegate&&this.bidDelegate.refresh||null;return r?void r(t,e,i):void s.publish(s.EVENT_TYPE.WARN,"BidProvider.bidDelegate.refresh not defined.")},r.prototype.enabled=function(t){return"boolean"===n.asType(t)&&(this.enabled_=t),this.enabled_},r.prototype.timeout=function(t){this.timeout_="number"===n.asType(t)?t:0},r.prototype.getTimeout=function(){return this.timeout_},n["extends"](r,a),e.exports=r},{"../event":6,"../interfaces":7,"../pubfoodobject":15,"../util":16}],14:[function(t,e,i){"use strict";var r=t("./event"),n=t("./util"),o=t("./logger"),s=t("./interfaces").BidDelegate,a=t("./mediator/auctionmediator");!function(t,i,r){t&&(e.exports=r(t,t.pfConfig||{}))}(window||{},void 0,function(e){if(e.pubfood)return e.pubfood.library.logger.logEvent(r.EVENT_TYPE.WARN,["multiple api load"]),e.pubfood;var i=function(t){return new i.library.init(t)};i.library=i.prototype={version:"0.2.1",PubfoodError:t("./errors"),logger:o};var u=function(t){var e=t.getBidProviders();for(var i in t.requiredApiCalls)0===t.requiredApiCalls[i]&&t.configErrors.push('"'+i+'" was not called');for(var r=t.getSlots(),n=0;n<r.length;n++)for(var o=0;o<r[n].bidProviders.length;o++){var s=r[n].bidProviders[o];e[s]||t.configErrors.push('No configuration found for bid provider "'+s+'"')}return{hasError:t.configErrors.length>0,details:t.configErrors}},p=i.library.init=function(t){return this.mediator=new a,t&&(this.randomizeBidRequests_=!!t.randomizeBidRequests,this.mediator.setBidProviderCbTimeout(t.bidProviderCbTimeout),this.mediator.setAuctionProviderCbTimeout(t.auctionProviderCbTimeout)),r.publish(r.EVENT_TYPE.PUBFOOD_API_LOAD),this.pushApiCall_("api.init",arguments),this.configErrors=[],this.requiredApiCalls={setAuctionProvider:0,addBidProvider:0},this.util=n,this};return p.prototype.pushApiCall_=function(t,e){this.library.logger.logCall(t,this.getAuctionId(),e)},p.prototype.getAuctionId=function(){return this.mediator.getAuctionId()},p.prototype.dumpLog=function(t){this.library.logger.dumpLog(t)},p.prototype.addSlot=function(t){!n.isObject(t)||n.isArray(t.bidProviders)&&0!==t.bidProviders.length||(t.bidProviders=["__default__"],this.mediator.bidProviderExists_("__default__")||this.mediator.addBidProvider(s)),this.pushApiCall_("api.addSlot",arguments);var e=this.mediator.addSlot(t);return this.requiredApiCalls.addSlot++,e},p.prototype.getSlots=function(){this.pushApiCall_("api.getSlots",arguments);var t=[];for(var e in this.mediator.slotMap)t.push(this.mediator.slotMap[e]);return t},p.prototype.getSlot=function(t){return this.pushApiCall_("api.getSlot",arguments),this.mediator.slotMap[t]},p.prototype.setAuctionProvider=function(t){this.pushApiCall_("api.setAuctionProvider",arguments);var e=this.mediator.setAuctionProvider(t),i=t&&t.name?t.name:"undefined";return e?(this.requiredApiCalls.setAuctionProvider++,e):(this.configErrors.push("Invalid auction provider: "+i),null)},p.prototype.getAuctionProvider=function(){return this.pushApiCall_("api.getAuctionProvider",arguments),this.mediator.auctionProvider},p.prototype.addBidProvider=function(t){this.pushApiCall_("api.addBidProvider",arguments);var e=this.mediator.addBidProvider(t),i=t&&t.name?t.name:"undefined";return e?(this.requiredApiCalls.addBidProvider++,"function"===n.asType(t.init)&&3!==t.init.length&&this.configErrors.push("Bid provider "+i+"'s init method requires 3 arguments"),"function"===n.asType(t.refresh)&&3!==t.refresh.length&&this.configErrors.push("Bid provider "+i+"'s refresh method requires 3 arguments"),e):(this.configErrors.push("Invalid bid provider: "+i),null)},p.prototype.getBidProviders=function(){return this.pushApiCall_("api.getBidProviders",arguments),this.mediator.bidProviders},p.prototype.getBidProvider=function(t){return this.pushApiCall_("api.getBidProvider",arguments),this.mediator.bidProviders[t]},p.prototype.observe=function(t,e){if(this.pushApiCall_("api.observe",arguments),"function"==typeof t)for(var i in r.EVENT_TYPE)r.on(r.EVENT_TYPE[i],n.bind(t,this));else"string"==typeof t&&(r.EVENT_TYPE[t]?r.on(r.EVENT_TYPE[t],n.bind(e,this)):r.publish(r.EVENT_TYPE.WARN,'Warning: Invalid event type "'+t+'"'));return this},p.prototype.timeout=function(t){return this.pushApiCall_("api.timeout",arguments),this.mediator.timeout(t),this},p.prototype.doneCallbackOffset=function(t){this.mediator.doneCallbackOffset(t)},p.prototype.setAuctionTrigger=function(t){return this.pushApiCall_("api.setAuctionTrigger",arguments),this.mediator.setAuctionTrigger(t),this},p.prototype.addBidTransform=function(t){return this.pushApiCall_("api.addBidTransform",arguments),this.mediator.addBidTransform(t),this},p.prototype.addRequestTransform=function(t){return this.pushApiCall_("api.addRequestTransform",arguments),this.mediator.addRequestTransform(t),this},p.prototype.start=function(t,e){this.pushApiCall_("api.start",arguments);var i=u(this);return"function"==typeof e&&e(i.hasError,i.details),i.hasError||this.mediator.start(this.randomizeBidRequests_,t),this},p.prototype.refresh=function(t){return this.pushApiCall_("api.refresh",arguments),this.mediator.refresh(t),this},p.prototype.prefixDefaultBidKey=function(t){return this.mediator.prefixDefaultBidKey(t),this},p.prototype.omitDefaultBidKey=function(t){return this.mediator.omitDefaultBidKey(t),this},p.prototype.library=i.library,e.pubfood=i,i})},{"./errors":5,"./event":6,"./interfaces":7,"./logger":8,"./mediator/auctionmediator":9,"./util":16}],15:[function(t,e,i){"use strict";function r(){this.id=n.newId(),this.params_={}}var n=t("./util");r.prototype.setParam=function(t,e){var i=n.asType(t);return"object"!==i&&"array"!==i&&"function"!==i&&"undefined"!==i&&(this.params_[t]=e),this},r.prototype.getParam=function(t){return this.params_[t]},r.prototype.getParamKeys=function(){var t=[];for(var e in this.params_)t.push(this.params_[e]);return t},e.exports=r},{"./util":16}],16:[function(t,e,i){"use strict";var r={asType:function(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},newId:function(){return(+new Date).toString(36)+"xxxxxxxxxx".replace(/[x]/g,function(){return(0|36*Math.random()).toString(36)})},"extends":function(t,e){for(var i in e.prototype)t.prototype[i]=e.prototype[i];t.prototype.parents=t.prototype.parents||[],t.prototype.parents.push(function(){return e}),t.prototype.init_=function(){for(var t=this.parents||[],e=0;e<t.length;e++)t[e]().call(this)}},hasFunctions:function(t,e){if(!t)return!1;for(var i=!0,n=0;n<e.length;n++){var o=e[n];if(!t[o]||"function"===!r.asType(t[o])){i=!1;break}}return i},loadUri:function(t,e){var i=document,r=t||"";if(e)if("complete"===i.readyState||"loaded"===i.readyState);else try{i.write('<script src="'+r+'"></script>')}catch(n){}else{var o=document.createElement("script");o.async=!0,o.src=r,(i.head||i.body||i.documentElement).appendChild(o)}},bind:function(t,e){return function(){t.apply(e,Array.prototype.slice.call(arguments))}},mergeToObject:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(this.isObject(e[i])?(t[i]||(t[i]={}),this.mergeToObject(t[i],e[i])):this.isArray(e[i])?(t[i]||(t[i]=[]),this.mergeToArray(t[i],e[i])):t[i]=e[i]);return t},mergeToArray:function(t,e){for(var i=0;i<e.length;i++)t.push(this.clone(e[i]));return t},isArray:function(t){return!!t&&"array"===this.asType(t)},isObject:function(t){return!!t&&"object"===this.asType(t)},clone:function(t){return this.isObject(t)?this.cloneObject(t):this.isArray(t)?this.cloneArray(t):t},cloneArray:function(t){return this.mergeToArray([],t)},cloneObject:function(t){return this.mergeToObject({},t)},values:function(t){var e=[];for(var i in t)e.push(t[i]);return e},validate:function(t,e){if(!e)return!1;var i=0;for(var n in t)if("optional"!==n){var o=!!t.optional&&!!t.optional[n],s=e.hasOwnProperty(n),a=this.asType(e[n]),u=!e.init,p=!0;if(("null"===a||"undefined"===a||"number"===a&&!isFinite(e[n])||"string"===a&&""===e[n])&&(p=!1),o||s&&p||++i,p&&u&&r.isArray(e[n])&&0===e[n].length&&++i,p&&!u&&r.asType(e[n])!==r.asType(t[n])&&++i,i>0)break}return!i}};r.randomize=function(t){for(var e,i,r=t.length;r;)i=Math.floor(Math.random()*r--),e=t[r],t[r]=t[i],t[i]=e;return t},e.exports=r},{}]},{},[14])(14)});


var ami = ami || {};
ami.mensfitness = ami.mensfitness || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var ybotq = ybotq || [];


var adUnit;

var gpt_targeting = {};

if (ads_targeting["s2"]) {
    adUnit = "/" + ads_targeting["s1"] + "/" + ads_targeting["s2"];
} else {
    adUnit = "/" + ads_targeting["s1"];
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

ami.mensfitness.ads = (function() {
    return {
        slots: {},
        elementInViewport: function(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight || rect.height) && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight || rect.height))
        },
        processElements: function() {

            var slots = ami.mensfitness.ads.slots;
            var slot;
            Object.keys(ami.mensfitness.ads.slots).forEach(function(key) {
                var el = document.getElementById(key);
                if (ami.mensfitness.ads.elementInViewport(el)) {
                /* lazy load on desktop only START */
					if (document.documentElement.clientWidth >= 768) {

			                    food.observe('AUCTION_POST_RUN', function() {

			                        googletag.cmd.push(function() {
			                        	// alert(key);
			                            googletag.display(key);
			                            googletag.pubads().refresh([ami.mensfitness.ads.slots[key]],{changeCorrelator: false});
			                            delete ami.mensfitness.ads.slots[key];

			                        });
			                    });
					}
					/* lazy load on desktop only END */
                }
            });

        },

        init: function() {
            //window.addEventListener("scroll", this.processElements);
            // window.addEventListener("load", this.processElements);
        }
    }
})();

// ami.mensfitness.ads.init();

var food = new pubfood();

if (document.documentElement.clientWidth >= 768) {
    var food_728 = food.addSlot({
        name: 'dfp-ad-top_728x90',
        sizes: [
            [728, 90],
            [970, 66],
            [970, 90],
            [970, 250]
        ],
        slotParams: {
            "pos": "top",
            "lazyload": "false"
        },
        elementId: 'dfp-ad-top_728x90',
        bidProviders: ["yieldbot", "casale","criteo"]
    });


    food_728.setParam("adunit",'4216/mensfitness'+adUnit);
    food_728.setParam("lazyload","false");
    food_728.setParam("pos","top");

    var food_300top = food.addSlot({
        name: 'dfp-ad-right1_300x250',
        sizes: [
            [300, 250],
            [300, 251],
            [300, 600],
            [300, 1050]
        ],
        slotParams: {
            "pos": "right1",
            "lazyload": "false"
        },
        elementId: 'dfp-ad-right1_300x250',
        bidProviders: ["yieldbot","casale","criteo"]
    });
    food_300top.setParam("adunit",'4216/mensfitness'+adUnit);
    food_300top.setParam("lazyload","false");
    food_300top.setParam("pos","right1");

    var food_300bottom = food.addSlot({
        name: 'dfp-ad-right2_300x250',
        sizes: [
            [300, 250],
            [300, 252]
        ],
        slotParams: {
            "pos": "right2",
            "lazyload": "true"
        },
        elementId: 'dfp-ad-right2_300x250',
        bidProviders: []
    });
	food_300bottom.setParam("adunit",'4216/mensfitness' + adUnit);
    food_300bottom.setParam("lazyload","true");
    food_300bottom.setParam("pos","right2");
}


if (document.documentElement.clientWidth < 768) {

    var food_300mtop = food.addSlot({
        name: 'dfp-ad-mobile_top',
        sizes: [
            [320, 50],
            [300, 50],
            [300, 100]
        ],
        slotParams: {
            "pos": "mobile_top",
            "lazyload": "false"
        },
        elementId: 'dfp-ad-mobile_top',
        bidProviders: ["yieldbot","casale","criteo"]
    });
    food_300mtop.setParam("adunit",'4216/mob.mensfitness' + adUnit);
	food_300mtop.setParam("lazyload","false");
	food_300mtop.setParam("pos","mobile_top");

    var food_300mbottom = food.addSlot({
        name: 'dfp-ad-mobile_bottom',
        sizes: [
            [300, 50],
            [320, 50],
            [300, 100]
        ],
        slotParams: {
            "pos": "mobile_bottom",
            "lazyload": "false"
        },
        elementId: 'dfp-ad-mobile_bottom',
        bidProviders: ["yieldbot","casale","criteo"]
    });
    food_300mbottom.setParam("adunit",'4216/mob.mensfitness' + adUnit);
    food_300mbottom.setParam("lazyload","false");
    food_300mbottom.setParam("pos","mobile_bottom");

    var food_300mbox = food.addSlot({
        name: 'dfp-ad-mobile_box',
        sizes: [
            [300, 250]
        ],
        elementId: 'dfp-ad-mobile_box',
        bidProviders: ["yieldbot","casale","criteo"]
    });
    food_300mbox.setParam("adunit", "4216/mob.mensfitness" + adUnit);
    food_300mbox.setParam("lazyload", "false");
    food_300mbox.setParam("pos", "mobile_box");

}


food.addBidProvider({
    name: 'yieldbot',
    libUri: '//cdn.yldbt.com/js/yieldbot.intent.js',
    ybParams: {
        "dfp-ad-top_728x90": "top_728x90",
        "dfp-ad-right1_300x250": "right1_300x250",
        "dfp-ad-mobile_top": "mobile_top",
        "dfp-ad-mobile_bottom": "mobile_bottom"
    },
    init: function(slots, pushBid, done) {
        var slotMap = {};
        var ybParams = this.ybParams;

        ybotq.push(function() {
            if (document.documentElement.clientWidth >= 768) {
                yieldbot.pub('4534');
                yieldbot.defineSlot('top_728x90');
                yieldbot.defineSlot('right1_300x250');
            } else {
                yieldbot.pub('0651');
                yieldbot.defineSlot('mobile_top');
                yieldbot.defineSlot('mobile_bottom');
                yieldbot.defineSlot('mobile_box');
            };

            for (var k = 0; k < slots.length; k++) {
                var slot = slots[k];
                var ybslot = ybParams[slot.elementId];

                slotMap[ybslot] = slot.name;
            }
            yieldbot.enableAsync();
            yieldbot.go();
        });
        ybotq.push(function() {

            var pageCriteria = yieldbot.getPageCriteria();
            var pageSlots = pageCriteria !== '' ? pageCriteria.split(',') : [];

            for (var i = 0; i < pageSlots.length; i++) {
                var slotInfo = pageSlots[i].split(':');
                var slot = slotInfo[0];
                var size = slotInfo[1];

                var bid = 0;
                if (slotInfo.length && slotInfo[2]) {
                    bid = parseFloat(slotInfo[2], 10);
                }
                var sizes = size.split('x');
                sizes[0] = parseInt(sizes[0], 10);
                sizes[1] = parseInt(sizes[1], 10);
                // submit my bid...
                var bidObject = {
                    slot: slotMap[slot] || 'undefined_slot',
                    value: bid,
                    sizes: sizes,
                    customParam: true
                };
                pushBid(bidObject);
            }
            done();
        });
    },
    refresh: function(slots, pushBid, done) {
		ybotq.push(function() {
			pushBid({
				value: yieldbot.getPageCriteria(),
				label: 'ybot'
			});
			done();
		});    	
    }
});

function cygnus_index_parse_res() {}
function cygnus_index_start() {
    function e(e) {
        var t = a[e];
        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
    }
    function t(t) {
        return o.lastIndex = 0, o.test(t) ? t.replace(o, e) : t
    }
    function i(e, t, i) {
        if (this.initialized = !1, "number" != typeof e || e % 1 !== 0 || 0 > e) throw "Invalid Site ID";
        if ("number" == typeof i && i % 1 == 0 && i >= 0 && (this.timeoutDelay = i), this.siteID = e, this.impressions = [], this._parseFnName = void 0, top === self ? (this.sitePage = location.href, this.topframe = 1) : (this.sitePage = document.referrer, this.topframe = 0), "undefined" != typeof t) {
            if ("function" != typeof t) throw "Invalid jsonp target function";
            this._parseFnName = "cygnus_index_args.parseFn"
        }
        "undefined" == typeof _IndexRequestData.requestCounter ? _IndexRequestData.requestCounter = Math.floor(256 * Math.random()) : _IndexRequestData.requestCounter = (_IndexRequestData.requestCounter + 1) % 256, this.requestID = String((new Date).getTime() % 2592e3 * 256 + _IndexRequestData.requestCounter + 256), this.initialized = !0
    }
    if (cygnus_index_primary_request) {
        for (var s = [], n = 0; n < cygnus_index_args.slots.length; n++) {
            var r = cygnus_index_args.slots[n],
                u = {
                    id: "T1_" + r.id,
                    width: r.width,
                    height: r.height,
                    siteID: 164873
                };
            ({
                id: "T2_" + r.id,
                width: r.width,
                height: r.height,
                siteID: 444444
            });
            s.push(u)
        }
        for (var n = 0; n < s.length; n++) cygnus_index_args.slots.push(s[n]);
        cygnus_index_primary_request = !1
    }
    cygnus_index_args.parseFn = cygnus_index_parse_res;
    var o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        a = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    i.prototype.serialize = function() {
        var e = '{"id":' + this.requestID + ',"site":{"page":"' + t(this.sitePage) + '"';
        "string" == typeof document.referrer && (e += ',"ref":"' + t(document.referrer) + '"'), e += '},"imp":[';
        for (var i = 0; i < this.impressions.length; i++) {
            var s = this.impressions[i],
                n = [];
            e += '{"id":"' + s.id + '", "banner":{"w":' + s.w + ',"h":' + s.h + ',"topframe":' + String(this.topframe) + "}", "number" == typeof s.bidfloor && (e += ',"bidfloor":' + s.bidfloor, "string" == typeof s.bidfloorcur && (e += ',"bidfloorcur":"' + t(s.bidfloorcur) + '"')), "string" != typeof s.slotID || s.slotID.match(/^\s*$/) || n.push('"sid":"' + t(s.slotID) + '"'), "number" == typeof s.siteID && n.push('"siteID":' + s.siteID), n.length > 0 && (e += ',"ext": {' + n.join() + "}"), e += i + 1 == this.impressions.length ? "}" : "},"
        }
        return e += "]}"
    }, i.prototype.setPageOverride = function(e) {
        return "string" != typeof e || e.match(/^\s*$/) ? !1 : (this.sitePage = e, !0)
    }, i.prototype.addImpression = function(e, t, i, s, n, r) {
        var u = {
            id: String(this.impressions.length + 1)
        };
        if ("number" != typeof e || 1 >= e) return null;
        if ("number" != typeof t || 1 >= t) return null;
        if (("string" == typeof n || "number" == typeof n) && String(n).length <= 50 && (u.slotID = String(n)), u.w = e, u.h = t, void 0 != i && "number" != typeof i) return null;
        if ("number" == typeof i) {
            if (0 > i) return null;
            if (u.bidfloor = i, void 0 != s && "string" != typeof s) return null;
            u.bidfloorcur = s
        }
        if ("undefined" != typeof r) {
            if (!("number" == typeof r && r % 1 === 0 && r >= 0)) return null;
            u.siteID = r
        }
        return this.impressions.push(u), u.id
    }, i.prototype.buildRequest = function() {
        if (0 != this.impressions.length && this.initialized === !0) {
            var e = encodeURIComponent(this.serialize()),
                t = "https:" === window.location.protocol ? "https://as-sec.casalemedia.com" : "http://as.casalemedia.com";
            return t += "/headertag?v=9&x3=1&fn=cygnus_index_parse_res&s=" + this.siteID + "&r=" + e, "number" == typeof this.timeoutDelay && this.timeoutDelay % 1 == 0 && this.timeoutDelay >= 0 && (t += "&t=" + this.timeoutDelay), t
        }
    };
    try {
        if ("undefined" == typeof cygnus_index_args || "undefined" == typeof cygnus_index_args.siteID || "undefined" == typeof cygnus_index_args.slots) return;
        "undefined" == typeof _IndexRequestData && (_IndexRequestData = {}, _IndexRequestData.impIDToSlotID = {}, _IndexRequestData.reqOptions = {});
        var d = new i(cygnus_index_args.siteID, cygnus_index_args.parseFn, cygnus_index_args.timeout);
        cygnus_index_args.url && "string" == typeof cygnus_index_args.url && d.setPageOverride(cygnus_index_args.url), _IndexRequestData.impIDToSlotID[d.requestID] = {}, _IndexRequestData.reqOptions[d.requestID] = {};
        for (var f, g, s = 0; s < cygnus_index_args.slots.length; s++) f = cygnus_index_args.slots[s], g = d.addImpression(f.width, f.height, f.bidfloor, f.bidfloorcur, f.id, f.siteID), g && (_IndexRequestData.impIDToSlotID[d.requestID][g] = String(f.id));
        return "number" == typeof cygnus_index_args.targetMode && (_IndexRequestData.reqOptions[d.requestID].targetMode = cygnus_index_args.targetMode), "function" == typeof cygnus_index_args.callback && (_IndexRequestData.reqOptions[d.requestID].callback = cygnus_index_args.callback), d.buildRequest()
    } catch (h) {}
}
cygnus_index_args = {
    timeout: 300,
    siteID: 164874,
    slots: [{
        id: "1",
        width: 728,
        height: 90,
        siteID: 164874
    }, {
        id: "2",
        width: 300,
        height: 250,
        siteID: 164874
    }, {
        id: "3",
        width: 300,
        height: 600,
        siteID: 164874
    }, {
        id: "4",
        width: 300,
        height: 250,
        siteID: 164690
    }, {
        id: "5",
        width: 300,
        height: 600,
        siteID: 164690
    }, {
        id: "6",
        width: 970,
        height: 90,
        siteID: 164874
    }, {
        id: "7",
        width: 970,
        height: 250,
        siteID: 164874
    }, {
        id: "8",
        width: 300,
        height: 1050,
        siteID: 164874
    }]
};
var cygnus_index_primary_request = !0;


var crtg_nid = '4877';
var crtg_cookiename = 'crtg_rta';
var crtg_varname = 'crtg_content';
var crtg_getCookie = function(c_name){ 
	var i,x,y,ARRCookies=document.cookie.split(";");
	for(i=0;i<ARRCookies.length;i++){
		x=ARRCookies[i].substr(0,ARRCookies[i].indexOf("="));
		y=ARRCookies[i].substr(ARRCookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");
	if(x==c_name){
		return unescape(y);
	} 
}return'';
}
var crtg_content = crtg_getCookie(crtg_cookiename);
window.pubfood_crtg_content = crtg_content;

var crtg_rnd=Math.floor(Math.random()*99999999999);
(function(){
var crtg_url=location.protocol+'//rtax.criteo.com/delivery/rta/rta.js?netId='+escape(crtg_nid); crtg_url +='&cookieName='+escape(crtg_cookiename);
crtg_url +='&rnd='+crtg_rnd;
crtg_url +='&varName=' + escape(crtg_varname);
var crtg_script=document.createElement('script');
crtg_script.type='text/javascript';
crtg_script.src=crtg_url;
crtg_script.async=true; 
if(document.getElementsByTagName("head").length>0)
	document.getElementsByTagName("head")[0].appendChild(crtg_script); 
else if(document.getElementsByTagName("body").length>0)
	document.getElementsByTagName("body")[0].appendChild(crtg_script); 
})();

food.addBidProvider({
    name: 'criteo',
    libUri: ' ',
    init: function(slots, pushBid, done) {
        done();
    },
    refresh: function(slots, pushBid, done) {
    	done();
    }
});


food.addBidProvider({
    name: 'casale',
    libUri: ' ',
    init: function(slots, pushBid, done) {

        var scriptTag = document.createElement("script");
        scriptTag.setAttribute("src", cygnus_index_start());

        scriptTag.setAttribute("type", "text/javascript");
        var firstScript = document.getElementsByTagName("script")[0];
        if (firstScript.parentNode) {
            firstScript.parentNode.insertBefore(scriptTag, firstScript);
        }
	window.cygnus_index_ready_state = done();
        done();
    },
    refresh: function(slots, pushBid, done) {
    	var scriptTag = document.createElement("script");
        scriptTag.setAttribute("src", cygnus_index_start());

        scriptTag.setAttribute("type", "text/javascript");
        var firstScript = document.getElementsByTagName("script")[0];
        if (firstScript.parentNode) {
            firstScript.parentNode.insertBefore(scriptTag, firstScript);
        }
        window.cygnus_index_ready_state = done();
        done();
    }
});


if (document.documentElement.clientWidth < 768){
			googletag.latitude = 0;
			googletag.longitude = 0;

	function dfp_googletag_register_position(position) {
		var googletag_lat = parseFloat( String(position.coords.latitude) ).toFixed(2);
		var googletag_long = parseFloat( String(position.coords.longitude) ).toFixed(2);

		if ('localStorage' in window && window['localStorage'] !== null) {
			window['localStorage'].setItem('googletag_latitude', googletag_lat);
			window['localStorage'].setItem('googletag_longitude', googletag_long);
		}
		googletag.latitude = googletag_lat;
		googletag.longitude = googletag_long;
	}

	function dfp_googletag_locationError(err) {
		console.log(err);
	}

	if ('localStorage' in window && window['localStorage'] !== null && typeof(window['localStorage']['googletag_latitude']) != "undefined" && typeof(window['localStorage']['googletag_longitude']) != "undefined") {
		googletag.latitude = window['localStorage']['googletag_latitude'];
		googletag.longitude = window['localStorage']['googletag_longitude'];
	}
	else if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(dfp_googletag_register_position, dfp_googletag_locationError, {timeout:60000});
	}
}

food.setAuctionProvider({
    name: 'Google',
    libUri: '//www.googletagservices.com/tag/js/gpt.js',
    gpt_targeting: {
        "dfp-ad-top_728x90": [
            ["pos", "top"]
        ],
        "dfp-ad-right1_300x250": [
            ["pos", "right1"]
        ],
        "dfp-ad-right2_300x250": [
            ["pos", "right2"]
        ],
        "dfp-ad-mobile_top": [
            ["pos", "mobile_top"]
        ],
        "dfp-ad-mobile_box": [
            ["pos", "mobile_box"]
        ],
        "dfp-ad-mobile_bottom": [
            ["pos", "mobile_bottom"]
        ]
    },
init: function(targeting, done) {
        // var gpt_targeting = this.gpt_targeting;
        // var gptslot;

  



      googletag.cmd.push(function() {

            //Kick off index bids
            cygnus_index_start();


			// RTA-DFP key-value script
			if (typeof crtg_content == 'undefined') crtg_content = '';
			var s = crtg_content.split(';'); s.pop();
			if (s.length > 0) googletag.pubads().setTargeting('crtRTA', s);


            // Kick off yieldbot bids
            googletag.pubads().setTargeting("ybot", yieldbot.getPageCriteria());


			if (document.documentElement.clientWidth < 768){
				googletag.pubads().setLocation(Number(googletag.latitude), Number(googletag.longitude));
				googletag.pubads().setTargeting("latitude", googletag.latitude);
			        googletag.pubads().setTargeting("longitude", googletag.longitude);
			}


		//ads_targeting["kw"] = "realvue-test";
            if (typeof ads_targeting["kw"] !== "undefined") {
                googletag.pubads().setTargeting("kw", ads_targeting["kw"]);
            }
            if (typeof ads_targeting["s1"] !== "undefined") {
                googletag.pubads().setTargeting("s1", ads_targeting["s1"]);
            }
            if (typeof ads_targeting["s2"] !== "undefined") {
                googletag.pubads().setTargeting("s2", ads_targeting["s2"]);
            }
            if (typeof ads_targeting["s3"] !== "undefined") {
                googletag.pubads().setTargeting("s3", ads_targeting["s3"]);
            }
            if (typeof ads_targeting["pid"] !== "undefined") {
                googletag.pubads().setTargeting("pid", ads_targeting["pid"]);
            }
            if (typeof ads_targeting["type"] !== "undefined" || typeof ads_targeting["ctype"] !== "undefined") {
                googletag.pubads().setTargeting("ctype", ads_targeting["type"] || ads_targeting["ctype"]);
            }
            if (typeof ads_targeting["topic"] !== "undefined") {
                googletag.pubads().setTargeting("topic", ads_targeting["topic"]);
            }
            if (typeof ads_targeting["galleryid"] !== "undefined") {
                googletag.pubads().setTargeting("galleryid", ads_targeting["galleryid"]);
            }
            if (document.location.search.slice(1) === "test=on") {
                googletag.pubads().setTargeting("test", "on");
            }
        });






        googletag.cmd.push(function() {
        	
            var slots = {};

            for (var i = 0; i < targeting.length; i++) {
                var slot = targeting[i];
                if (slot.name === "dfp-ad-mobile_box") {
                    if(!document.getElementById('dfp-ad-mobile_box')) {
                        continue;
                    }
                }
                var tgtObject = targeting[i];
                var gptObject;


                var lazyload = food.getSlot(tgtObject.elementId).getParam("lazyload");

				var pf_adunit = food.getSlot(tgtObject.elementId).getParam("adunit");

				var pos_targeting = food.getSlot(tgtObject.elementId).getParam("pos");

                     gptObject = googletag.defineSlot(pf_adunit, tgtObject.sizes, tgtObject.elementId)
                                          .addService(googletag.pubads());
                     slots[tgtObject.name] = gptObject;

				ami.mensfitness.ads.slots[tgtObject.name] = gptObject;
				gptObject.setTargeting("pos",[pos_targeting]);

				for (var p in tgtObject.targeting) {

					gptObject.setTargeting(p, tgtObject.targeting[p]);
				}


            }

            food.getAuctionProvider().setParam('slots', slots);
        });

	googletag.cmd.push(function() {
             googletag.pubads().collapseEmptyDivs();
             googletag.pubads().disableInitialLoad();
             googletag.pubads().enableSingleRequest();
             googletag.enableServices();
             done();
         });


		if (document.documentElement.clientWidth >= 768) {
		    googletag.cmd.push(function() {
		        var interstitialSlot = googletag.defineOutOfPageSlot('/4216/mensfitness' + adUnit, 'dfp-ad-interstitial').setTargeting('pos', ['interstitial']).addService(googletag.pubads());
		        var wallpaperSlot = googletag.defineOutOfPageSlot('/4216/mensfitness' + adUnit, 'dfp-ad-wallpaper').setTargeting('pos', ['wallpaper']).addService(googletag.pubads());
		        googletag.display('dfp-ad-interstitial');
		        googletag.display('dfp-ad-wallpaper');
			googletag.pubads().refresh([interstitialSlot],{changeCorrelator: false});
			googletag.pubads().refresh([wallpaperSlot],{changeCorrelator: false});
		    });
		}
		if (document.documentElement.clientWidth < 768) {
		    googletag.cmd.push(function() {
		    	var mobileInterstitialSlot = googletag.defineOutOfPageSlot('/4216/mob.mensfitness' + adUnit, 'dfp-ad-mobile_interstitial').setTargeting('pos', ['mobile_interstitial']).addService(googletag.pubads());
		        googletag.display('dfp-ad-mobile_interstitial');
		        googletag.pubads().refresh([mobileInterstitialSlot],{changeCorrelator: false});
		    });
		}

		googletag.cmd.push(function() {

	googletag.display('dfp-ad-top_728x90');
	top.boost_fifo = top.boost_fifo || [];
        top.boost_fifo.push(
            function () {
                top1.realvu_boost.addUnitById({
                    partner_id: 'E0TL'
                    , unit_id: 'dfp-ad-top_728x90'
                    , size: '728x90'
                    , edge: 100
                    , dist: 200
                    , callback: function (r) {
                        //gptAdSlot.setTargeting('realvu', r.realvu);
                        ami.mensfitness.ads.slots["dfp-ad-top_728x90"].setTargeting('realvu',r.realvu);
                        
                        googletag.pubads().refresh([ami.mensfitness.ads.slots["dfp-ad-top_728x90"]],{changeCorrelator: false});
                    }
                    , mode: 'in-view'
                });
            });
            
        top.boost_fifo.push(
            function () {
                top1.realvu_boost.addUnitById({
                    partner_id: 'E0TL'
                    , unit_id: 'dfp-ad-top_728x90'
                    , size: '728x90'
                    , edge: 100
                    , delay: 1500
                    , callback: function (r) {
                        //gptAdSlot.setTargeting('realvu', r.realvu);
                        ami.mensfitness.ads.slots["dfp-ad-top_728x90"].setTargeting('realvu',r.realvu);
                        
                        googletag.pubads().refresh([ami.mensfitness.ads.slots["dfp-ad-top_728x90"]],{changeCorrelator: getParameterByName("correlator")});
                    }
                    //, mode: 'in-view'
                    , mode: 'tx2'
                });
            });
            
	googletag.display('dfp-ad-right1_300x250');            
	top.boost_fifo = top.boost_fifo || [];
        top.boost_fifo.push(
            function () {
                top1.realvu_boost.addUnitById({
                    partner_id: 'E0TL'
                    , unit_id: 'dfp-ad-right1_300x250'
                    , size: '300x250'
                    , edge: 100
                    , dist: 200
                    , callback: function (r) {
                        //gptAdSlot.setTargeting('realvu', r.realvu);
                        ami.mensfitness.ads.slots["dfp-ad-right1_300x250"].setTargeting('realvu',r.realvu);
                        
                        googletag.pubads().refresh([ami.mensfitness.ads.slots["dfp-ad-right1_300x250"]],{changeCorrelator: false});
                    }
                    , mode: 'in-view'
                });
            });
            
            	
        top.boost_fifo.push(
            function () {
                top1.realvu_boost.addUnitById({
                    partner_id: 'E0TL'
                    , unit_id: 'dfp-ad-right1_300x250'
                    , size: '300x250'
                    , edge: 100
                    , delay: 1500
                    , callback: function (r) {
                        //gptAdSlot.setTargeting('realvu', r.realvu);
                        ami.mensfitness.ads.slots["dfp-ad-right1_300x250"].setTargeting('realvu',r.realvu);
                        
                        googletag.pubads().refresh([ami.mensfitness.ads.slots["dfp-ad-right1_300x250"]],{changeCorrelator: getParameterByName("correlator")});
                    }
                    //, mode: 'in-view'
                    , mode: 'tx2'
                });
            });
            
	googletag.display('dfp-ad-right2_300x250');            
	top.boost_fifo = top.boost_fifo || [];
	        top.boost_fifo.push(
            function () {
                top1.realvu_boost.addUnitById({
                    partner_id: 'E0TL'
                    , unit_id: 'dfp-ad-right2_300x250'
                    , size: '300x250'
                    , edge: 100
                    , dist: 200
                    , callback: function (r) {
                        //gptAdSlot.setTargeting('realvu', r.realvu);
                        ami.mensfitness.ads.slots["dfp-ad-right2_300x250"].setTargeting('realvu',r.realvu);
                        
                        googletag.pubads().refresh([ami.mensfitness.ads.slots["dfp-ad-right2_300x250"]],{changeCorrelator: false});
                    }
                    , mode: 'in-view'
                });
            });
        top.boost_fifo.push(
            function () {
                top1.realvu_boost.addUnitById({
                    partner_id: 'E0TL'
                    , unit_id: 'dfp-ad-right2_300x250'
                    , size: '300x250'
                    , edge: 100
                    , delay: 1500
                    //, dist: 200
                    , callback: function (r) {
                        //gptAdSlot.setTargeting('realvu', r.realvu);
                        ami.mensfitness.ads.slots["dfp-ad-right2_300x250"].setTargeting('realvu',r.realvu);
                        
                        googletag.pubads().refresh([ami.mensfitness.ads.slots["dfp-ad-right2_300x250"]],{changeCorrelator: getParameterByName("correlator")});
                    }
                    , mode: 'tx2'
                });
            });


		});



		// done();


    },
    refresh: function(targeting, done) {
             googletag.cmd.push(function() {
                 var slots = food.getAuctionProvider().getParam('slots');
                 for (var i = 0; i < targeting.length; i++) {
                     var tgtObject = targeting[i];
                     var gptObject;

                     if (tgtObject.name) {
                         gptObject = slots[tgtObject.name] || null;
                     } else {
                         gptObject = googletag.pubads();
                     }
                     for (var p in tgtObject.targeting) {
                         gptObject.setTargeting(p, tgtObject.targeting[p]);
                     }
                 }
                 googletag.pubads().refresh();
                 done();
             });		
    }
});


food.timeout(2400);
food.observe(function(ev) {
    console.log(ev);
});
food.start();




