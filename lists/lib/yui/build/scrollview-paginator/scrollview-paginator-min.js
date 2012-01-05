/*
YUI 3.5.0pr1 (build 4342)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("scrollview-paginator",function(a){var b=(a.ScrollView)?a.ScrollView.UI_SRC:"ui",c="index",f="scrollX",e="scrollY",d="total",g="boundingBox",h="contentBox";function i(){i.superclass.constructor.apply(this,arguments);}i.NAME="pluginScrollViewPaginator";i.NS="pages";i.ATTRS={selector:{value:null},index:{value:0},total:{value:0}};a.extend(i,a.Plugin.Base,{initializer:function(){var j,k=this;j=k._host=k.get("host");k.beforeHostMethod("_flickFrame",k._flickFrame);k.afterHostMethod("_uiDimensionsChange",k._calcOffsets);k.afterHostEvent("scrollEnd",k._scrollEnded);k.afterHostEvent("render",k._afterRender);k.after("indexChange",k._afterIndexChange);},_calcOffsets:function(){var o=this._host,k=o.get(h),q=o.get(g),l=o._scrollsVertical,m=(l)?o._scrollHeight:o._scrollWidth,p=this.get("selector"),j,n;j=p?k.all(p):k.get("children");this.set(d,j.size());this._pgOff=n=j.get((l)?"offsetTop":"offsetLeft");},_flickFrame:function(){var m=this._host,l=m._currentVelocity,n=l<0,j=this.get(c),k=this.get(d);if(l){if(n&&j<k-1){this.set(c,j+1);}else{if(!n&&j>0){this.set(c,j-1);}}}return this._prevent;},_afterRender:function(k){var j=this._host;j.get("boundingBox").addClass(j.getClassName("paged"));},_scrollEnded:function(n){var m=this._host,j=this.get(c),k=this.get(d),l=i.SNAP_TO_CURRENT;if(n.onGestureMoveEnd&&!m._flicking){if(m._scrolledHalfway){if(m._scrolledForward&&j<k-1){this.set(c,j+1);}else{if(j>0){this.set(c,j-1);}else{this.snapToCurrent(l.duration,l.easing);}}}else{this.snapToCurrent(l.duration,l.easing);}}m._flicking=false;},_afterIndexChange:function(j){if(j.src!==b){this._uiIndex(j.newVal);}},_uiIndex:function(j){this.scrollTo(j,350,"ease-out");},next:function(){var j=this.get(c);if(j<this.get(d)-1){this.set(c,j+1);}},prev:function(){var j=this.get(c);if(j>0){this.set(c,j-1);}},scrollTo:function(k,n,p){var m=this._host,j=m._scrollsVertical,l=(j)?e:f,o=this._pgOff[k];m.set(l,o,{duration:n,easing:p});},snapToCurrent:function(l,m){var k=this._host,j=k._scrollsVertical;k._killTimer();k.set((j)?e:f,this._pgOff[this.get(c)],{duration:l,easing:m});},_prevent:new a.Do.Prevent()});i.SNAP_TO_CURRENT={duration:300,easing:"ease-out"};a.namespace("Plugin").ScrollViewPaginator=i;},"3.5.0pr1",{requires:["plugin"]});