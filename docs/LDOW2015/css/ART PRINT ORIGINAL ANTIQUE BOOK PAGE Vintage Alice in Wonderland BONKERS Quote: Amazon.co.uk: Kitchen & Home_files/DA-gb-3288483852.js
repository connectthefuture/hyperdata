/* Autogenerated at Wed Feb 25 16:15:19 PST 2015 */
;
/* Source: DA.js */
(function(g,l,z){try{var F=location.protocol.replace(/file/,"http"),Z=navigator.userAgent.toLowerCase(),m=function(a,b){if(a)if(a.length>=0)for(var c=0,e=a.length;c<e;c++)b(c,a[c]);else for(c in a)b(c,a[c])},B=function(a,b){if(a&&b)for(var c in b)a[c]=b[c];return a},$=function(a,b,c){b=b||g;L(b.document)?a():(c&&(a=function(){setTimeout(a,c)}),s(b,"load",a,!0))},L=function(a){var b=a.readyState;return b=="complete"||a.tagName=="script"&&b=="loaded"},t=function(a){return(a=RegExp(a+"[ /](\\d+(\\.\\d+)?)",
"i").exec(Z))?+a[1]:0},G=t("msie");t("webkit");var aa=function(a,b){var b=b||"&",c=[];m(a,function(a,b){c.push(a+"="+b)});return c.join(b)},i=g.DA||(g.DA=[]),M=function(a){if(typeof a=="object")return a;var b={};m(a.split(";"),function(a,e){var f=e.split("=");b[f[0]]=f[1]});(g.aanParams=g.aanParams||{})[b.slot]=a;return b},N=function(a){var b=a.iframeId||a.c,c=a.c,e=a.a,f=a.o;g.DAF=a.ifp?[b,e,c,a.ifp]:[b,e];a=a.f||1;a===1&&(a=ba+(f?"-dismissible":"")+(g.jQuery&&jQuery.fn.amazonPopoverTrigger?"":"-external"));
ca(a)},I=function(a){var b=da+"feedback?",c=[];a.marketplaceId=ea;for(key in a)c.push(key+"="+escape(a[key]));b+=c.join("&");(new Image).src=b},j=function(a,b){return typeof a=="string"?(b||l).getElementById(a):a},p=function(a,b){return(b=j(b||l))?b.getElementsByTagName(a):[]},w=function(a,b,c,e,f){a=(w[a]||(w[a]=l.createElement(a))).cloneNode(!0);B(a,b);x(a,c);e&&(b=a,e=j(e),b=j(b),e&&b&&(typeof f=="number"&&(f=j(e).childNodes[f]),e.insertBefore(b,f||null)));return a},x=function(a,b){var c=b.opacity;
isNaN(c)||B(b,{filter:"alpha(opacity="+c*100+")",mozOpacity:b.opacity});(a=j(a))&&B(a.style,b)},H=function(a){if(a=j(a)){var b=j(a).parentNode;b&&b.removeChild(a)}},q=function(a,b){if(a=j(a))a.innerHTML=b},s=function(a,b,c,e){if(a=j(a)){var f=function(d){if(d=d||g.event){var O=d.target||d.srcElement;if(O){if(e){var k=a,A=f;if(k=j(k))k.removeEventListener?k.removeEventListener(b,A,!1):k.detachEvent?k.detachEvent("on"+b,A):delete k["on"+b]}return c(d,O,f)}}};a.addEventListener?a.addEventListener(b,
f,!1):a.attachEvent?a.attachEvent("on"+b,f):a["on"+b]=f;return f}},fa=p("head")[0],ca=i.s=function(a){w("script",{src:a.replace(/^[a-z]+:/,F)},0,fa)},J=(F=="http:"?"//g-ecx.":"//images-na.ssl-")+"images-amazon.com/images/G/02/",ea="A1F83G8C2ARO7P",da="//fls-eu.amazon.com/1/advertising-feedback/1/OE/",Q=["Yes","No"];g.foresterRegion="eu";var ba=i.f="/aan/2009-09-09/ad/feedback.gb/default?pt=RemoteContent&slot=main&pt2=gb",S=function(a){var b=function(b){if(!l.all&&!/%/.test(a.width)){var c=a.clientWidth;
if(c)a.style.width=c+b+"px"}};b(-1);b(1);var c=(b=j(a).parentNode)?b.id:"";if(G>0&&(!l.documentMode||l.documentMode<8)&&/nsm/.test(c)&&!/%/.test(a.height))a.height&&(a.height-=1);try{R(a),b&&(a.contentWindow.d16gCollapse?x(b,{display:"none"}):b.clientHeight||x(b,{height:"auto",marginBottom:"16px"}))}catch(e){}},R=function(a){var b=j(a).parentNode,c=b.ad||a,e=c.f,f=/nsm/.test(b.id),d,g=i.treatments,k=typeof c.fi==="undefined"?!0:c.fi,A=c.ss,u=typeof c.ifp==="undefined"?!1:c.ifp.sif,o=u&&c.ifp.wid&&
c.ifp.tid?c.ifp.tid:"";c.iframeId=a.id.replace(/[^0-9]/g,"");c.c=c.c||c.iframeId;var E=G>0&&(!l.documentMode||l.documentMode<8);if(E&&u)u=!1,c.ifp.sif=0;try{var h=a.contentWindow;h.suppressAdFeedback&&(e=!1);if(h.inlineFeedback&&typeof h.inlineFeedback=="object"||location.href.indexOf("useNewFeedback=true")>=0)d=h.inlineFeedback||{},d.endpoint=d.endpoint||"//fls-eu.amazon.com/1/dco-exp/1/OP",d.id=d.id||"default",d.question=d.question&&typeof d.question==="string"?d.question:"Is this ad appropriate?",
d.options=d.options&&typeof d.options==="object"&&d.options.length?d.options:Q,d.ad=h.aanResponse||{}}catch(ka){d=!1}var h="Advertisement",n="Ad",v="normal 9px Verdana,Arial",t='<b style="display:inline-block;vertical-align:top;margin:1px 0;width:12px;height:12px;background:url('+J+'da/js/bubble._V1_.png)"></b>',z="0 -12px";g&&g.DADS_41932&&g.DADS_41932=="T1"&&(h="Ad feedback",n="Ad",v="normal 11px Arial",E?t='<b style="display:inline-block;font-size:9px;vertical-align:top;margin:1px 0;width:12px;height:12px;background:url('+
J+'da/js/bubble._V1_.png)"></b>':(t='<b style="display:inline-block;vertical-align:top;margin:1px 0;width:14px;height:12px;background:url('+J+'productAds/ad_feedback_icon_1Xsprite.png)"></b>',z="0 -13px"));c.g=="right"?(g="0px",E="4px",n+=" "):(g=parseInt(a.width)+5+"px",E="0",n+="<br>");var r=p("div",b)[0]||w("div",0,{position:f?"absolute":"relative",top:"2px",right:f?g:0,margin:0,height:"14px"},b);!A||(r.style.cssText=A);if(e&&(!p("a",r)[0]||!p("div",r)[0])){if(d){q(r,"");var C=w("div",0,{position:"absolute",
top:"1px",left:0,font:"normal 8pt Verdana,Arial",display:"inline-block",verticalAlign:"middle"},r),D="";D+='<label style="font:normal 8pt Verdana,Arial;vertical-align:middle;margin-right:5px;display:inline-block">'+d.question+"</label>";m(d.options,function(a,b){D+='<a href="#" style="font:normal 8pt Verdana,Arial;vertical-align:middle;">'+b+"</a>";a<d.options.length-1&&(D+="<span style='margin:0 4px 0 4px;font:normal 8pt Verdana,Arial;vertical-align:middle;''>/</span>")});q(C,D);s(C,"click",function(a){var c=
a.target?a.target:a.srcElement;if(c&&c.nodeName==="A")a.preventDefault&&typeof a.preventDefault=="function"?a.preventDefault():a.returnValue=!1,a=(c.innerText||c.textContent).replace(/^\s+|\s+$/g,""),(new Image).src=d.endpoint+"?"+aa({e:"feedback",i:b.className,l:d.id,a:d.ad.adId,c:d.ad.creativeId,r:a}),q(C,'<span style="position:relative;top:2px">Thank you for your feedback.</span>')});h="Ad"}var y=w("a",0,{position:f?"relative":"absolute",top:f?0:"2px",right:f?E:"0px",display:"inline-block",font:v,
color:"#0066C0",cursor:"pointer"},r);k?q(y,(f?n:h+" ")+t):q(y,f?n:h+" ");s(y,"click",function(){u&&(o=="T1"||o=="T2")?T(c,a,r,o):N(c)});e=function(b){u&&(o=="T3"||o=="T4")?T(c,a,r,o):(b=/r/.test(b.type),x(y,{color:b?"#e47911":"#004b91",textDecoration:b?"underline":"none"}),x(p("b",y)[0],{backgroundPosition:b?z:"0 0"}))};s(y,"mouseover",e);s(y,"mouseout",e);u||e({})}h=a.contentWindow;e=h.document;f=typeof c.isSafeframeGoldbox!=="undefined"?c.isSafeframeGoldbox:h.isGoldBox||"showGoldBoxSlug"in h;c.b||
m(p("img",e),function(a,b){b&&/sm-head/.test(b.src)&&H(j(b).parentNode)});f&&(x(b,{textAlign:"center"}),x(r,{margin:"0 auto",width:"900px"}))},T=function(a,b,c,e){b=b.contentWindow;inlineFeedback=b.inlineFeedback||{};inlineFeedback.question=a.ifp.qt&&typeof a.ifp.qt==="string"?a.ifp.qt:"Is this ad appropriate?";inlineFeedback.options=inlineFeedback.options&&typeof inlineFeedback.options==="object"&&inlineFeedback.options.length?inlineFeedback.options:Q;inlineFeedback.ad=b.aanResponse||{};q(c,"");
var f=w("div",0,{top:"1px",font:"normal 12px Arial",display:"inline-block",verticalAlign:"middle"},c),d="",g="",k="margin-right:5px;",j="margin-right:5px;",u="",o="&nbsp;&nbsp;";if(a&&a.a&&a.a.slot&&a.a.slot.indexOf("auto-left-advertising")!=-1||a&&a.h&&a.w&&a.h==600&&a.w==160)d="<br>",u="margin-top:5px;",g="margin-top:2px;",k="margin-right:3px;",j="margin-right:10px;",o="<br>";var i="";i+='<label style="font:normal 12px Arial;vertical-align:middle;margin-right:5px;display:inline-block">'+inlineFeedback.question+
"</label>"+d;m(inlineFeedback.options,function(a,b){i+=e=="T1"||e=="T3"?'&nbsp<input type="button" name="ad-feedback-'+b+'" value="'+b+'" style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+g+'margin-right:5px">':'<input type="radio" name="ad-feedback-option" value="'+b+'" style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+k+'margin-top:2px"><label style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+u+j+' display:inline-block">'+b+"</label>"});
q(f,i);var d=M(a.a),h={impressionId:d.arid,pagetype:d.pt,pagesubtype:"",slot:d.slot,adId:inlineFeedback.ad.adId,adNet:inlineFeedback.ad.adNetwork,cid:inlineFeedback.ad.creativeId,hostName:b.location.hostname,userAction:"widgetOpened"};h.treatmentType=a.ifp.wid+"-"+e;I(h);s(f,"click",function(b){var d=b.target?b.target:b.srcElement;if(d&&d.nodeName==="INPUT"){b="";a.ifp.at=d.value;q(c,"");d=w("div",0,{position:"absolute",top:"1px",left:0,font:"normal 12px Arial",display:"inline-block",verticalAlign:"middle"},
c);b+='<span style="position:relative">Thank you for your feedback.</span>'+o;q(d,b);b=w("a",0,{font:"normal 12px Arial",cursor:"pointer"},d);q(b,"Leave a comment");h.userAction="widgetSubmitted";h.questionGroupId="2";if(a.ifp.qid)h[a.ifp.qid]=a.ifp.at;I(h);s(b,"click",function(){h.treatmentType=a.ifp.wid+"-"+e+"; Comment link hit";h.userAction="widgetOpened";I(h);N(a)})}})},U=function(a){try{$(function(){S(a)},a.contentWindow)}catch(b){}};g.d16g_adjustExistingIframe=U;g.d16g_addFeedbackLink=R;(function(){m(p("iframe"),
function(a,b){/^DA/.test(b.id)&&U(b)})})();var V=function(a){var b=a.i,c=a.a=M(a.a),e=c.slot,f=a.u,d=a.w=a.w||300,i=a.h=a.h||250,k=a.d||0,A=a.o,u=a.b,o=F!="https:"||G!=6,o=a.n&&o&&!L(g),m=a.x?a.x.replace(/^[a-z]+:/,F):"/aan/2009-09-09/static/amazon/iframeproxy-39.html",h=a.p,l=a.k,n="DA"+e.replace(/([a-z])[a-z]+(-|$)/g,"$1"),v=j(n),t=a.v,x=a.j,r=a.xu,e=a.xt,C=function(){return a.r&&uDA&&ue.sc[n]&&ue.sc[n].wb==1},D=function(a){try{var b=a=="ld"?uex:uet;C()&&b(a,n,{wb:1})}catch(c){}};if(v&&!p("iframe",
v)[0]&&(v.ad=a,!k||ga(a,v,k))){try{if(A&&localStorage[n+"_t"]>(new Date).getTime()){H(v);return}}catch(y){}u?k=f:(k=m+"#zgb&cb"+n+"&i"+n+(C()?"&r1":"")+(t?"&v1":"")+(x?"&j1":""),g["d16g_dclick_"+n]=f);var B=function(a,b,c,d,e,f){e&&D("af");var g=w("iframe",{src:f?"":a,width:b,height:c,id:d||"",title:e||"",frameBorder:0,marginHeight:0,marginWidth:0,allowTransparency:"true",scrolling:"no"},0,v);if(e){var k=!1;s(g,"load",function(){k||(k=!0,S(g))})}e&&f&&setTimeout(function(){G?g.src=a:g.contentWindow.location.replace(a)},
5)};j(v).childNodes[0]&&q(v,"");f=/%/.test(d)?"":z.ceil(z.random()*3);B(k,d+f,i,"DA"+b+"i","Advertisement",o);(h||l)&&setTimeout(function(){var a=(new Date).getTime();h&&B("http://aax-eu.amazon-adsystem.com/s/iu3?d=amazon.co.uk&"+h+"&n="+a,0,0);var b=c.pid;if(l&&b)(new Image).src="//secure-us.imrworldwide.com/cgi-bin/m?ci=amazon-ca&at=view&rt=banner&st=image&ca=amazon&cr="+b+"&pc=1234&r="+a},0);r&&setTimeout(function(){(new Image).src=r},e)}},ga=function(a,b,c){var e=function(a){if(a=j(a)){var b=
0,c=0,d=a;do b+=d.offsetLeft,c+=d.offsetTop;while(d=d.offsetParent);a=[b,c,a.clientWidth,a.clientHeight]}else a=[0,0,0,0];a[0]+=a[2]/2;a[1]+=a[3]/2;return a},f=e(b);if(f.join("")=="0000"){var d=function(){V(a)};g.jQuery&&jQuery.searchAjax?jQuery(l).bind("searchajax",d):(b.T=b.T||9,b.T<1E4&&setTimeout(d,b.T*=2));return!1}var i=!0;m(p("iframe"),function(a,b){if(/^DA/.test(b.id)&&b.width>1&&b.height>1){var d=e(j(b).parentNode),g=z.abs(f[0]-d[0])-(f[2]+d[2])/2,d=z.abs(f[1]-d[1])-(f[3]+d[3])/2;i=i&&g+
d>=c}});i||H(b);return i},W=function(a,b){if(isNaN(b.i)){var c;if(b.e){if(g.d16g)c=b.e}else isNaN(b.y)?c=V:i.v2Loaded&&(c=loadErm);if(c)b.i=a,c(b)}};(g.d16g||!i.E)&&(i.v2Loaded||!i.v2)&&function(){m(i,W);i.push=function(a){var b=i.length;W(b,i[b]=a)}}();var X=function(a){a(l).bind("spATFEvent",function(){i.splice(0,i.length);a(".ap_popover").remove();g.d16g_originalPageOrd=void 0})};if(typeof P!=="undefined")P.when("A").execute(function(a){X(a.$)});else if(typeof amznJQ!=="undefined")amznJQ.onReady("jQuery",
function(){X(jQuery)});var ha=["OBJECT","EMBED"],ia=["IFRAME","OBJECT","EMBED"],K=[],Y,t=function(a,b){var c=b.tagName;if(c=="IFRAME"||c=="OBJECT"||c=="EMBED")Y=a.type=="mouseover"?b:0};s(l,"mouseover",t);s(l,"mouseout",t);s(g,"beforeunload",function(){g.d16g_originalPageOrd=void 0;g.aaxPixelFired=void 0;setTimeout(function(){m(ha,function(a,c){var e=p(c);m(e,function(a,b){K.push(b)})});var a=p("IFRAME");m(a,function(a,c){if(/^DA/.test(c.id))try{var e=c.contentWindow.document;m(ia,function(a,b){if(p(b,
e).length)throw null;})}catch(f){K.push(c)}});m(K,function(a,c){if(c&&c!==Y)if(c.tagName=="IFRAME"){var e=j(c).parentNode;e&&q(e,"")}else H(c)})},0)})}catch(ja){g.ueLogError&&g.ueLogError(ja,{logLevel:"ERROR",attribution:"Display Advertising - CX",message:"Error in DA.js "})}})(window,document,Math);