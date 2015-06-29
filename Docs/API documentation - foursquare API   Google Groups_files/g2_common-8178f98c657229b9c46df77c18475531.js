/* Copyright 2008 Google Inc. */ (function() { var b=true,i=null,j=false;var k=j;function n(a){try{throw a;}catch(c){o(c)}}function o(a,c){var d="Javascript exception: "+(c?c:"")+" "+a;if(p())d+=" "+a.name+": "+a.message+" ("+a.number+")";var e="";if(typeof a=="string")e=a+"\n";else for(var f in a)try{e+=f+": "+a[f]+"\n"}catch(g){}e+=r(o.caller);s(d+"\n"+e,1)}var t=/function (\w+)/;function u(a){if(a=t.exec(String(a)))return a[1];return""}
function r(a){try{if(!p()&&!(y("safari")||y("konqueror"))&&y("mozilla"))return Error().stack;if(!a)return"";for(var c="- "+u(a)+"(",d=0;d<a.arguments.length;d++){if(d>0)c+=", ";var e=String(a.arguments[d]);if(e.length>40)e=e.substr(0,40)+"...";c+=e}c+=")\n";c+=r(a.caller);return c}catch(f){return"[Cannot get stack trace]: "+f+"\n"}}var z,A=i,B=j;
function aa(){if((A==i||A.closed)&&!B)try{B=b;A=window.open("","debug","width=700,height=500,toolbar=no,resizable=yes,scrollbars=yes,left=16,top=16,screenx=16,screeny=16");A.blur();A.document.open();B=j;var a="<font color=#ff0000><b>To turn off this debugging window,hit 'D' inside the main caribou window, then close this window.</b></font><br>";C(a)}catch(c){}}
function s(a,c){if(k){try{var d=(new Date).getTime()-z,e="["+d+"] "+D(a).replace(/\n/g,"<br>")+"<br>";if(c==1){e="<font color=#ff0000><b>Error: "+e+"</b></font>";A.focus()}}catch(f){}C(e)}else typeof E!="undefined"&&E(D(a))}function C(a){if(k)try{aa();A.document.write(a);A.scrollTo(0,1E6)}catch(c){}};function y(a){if(a in F)return F[a];return F[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var F={};function p(){return y("msie")&&!window.opera}function ba(a){try{return a.parentNode}catch(c){return a}}function ca(a,c){do{if(a===c)return b;c=ba(c)}while(c&&c!==document.body);return j}function G(a,c){if(a==i||a.className==i)return j;if(a.className==c)return b;for(var d=a.className.split(" "),e=0;e<d.length;e++)if(d[e]==c)return b;return j}function da(a,c){G(a,c)||(a.className+=" "+c)}
function ea(a,c){if(a.className!=i)if(a.className==c)a.className="";else{for(var d=a.className.split(" "),e=[],f=j,g=0;g<d.length;g++)if(d[g]!=c)d[g]&&e.push(d[g]);else f=b;if(f)a.className=e.join(" ")}}function H(a){var c=a.offsetLeft;if(a.offsetParent!=i)c+=H(a.offsetParent);return c}function I(a){var c=a.offsetTop;if(a.offsetParent!=i)c+=I(a.offsetParent);return c}function fa(a){return H(a)+a.offsetWidth}function ga(a){return J(a,ha)}
var ha={K:function(a){return a.document.body.clientWidth},L:function(a){return a.document.documentElement.clientWidth},o:function(a){return a.innerWidth}};function ia(a){return J(a,ja)}var ja={K:function(a){return a.document.body.clientHeight},L:function(a){return a.document.documentElement.clientHeight},o:function(a){return a.innerHeight}};
function J(a,c){try{if(y("safari")||y("konqueror"))return c.o(a);else if(!window.opera&&"compatMode"in a.document&&a.document.compatMode=="CSS1Compat")return c.L(a);else if(p())return c.K(a)}catch(d){}return c.o(a)}var ka=/&/g,la=/</g,ma=/>/g;function D(a){if(!a)return"";return a.replace(ka,"&amp;").replace(la,"&lt;").replace(ma,"&gt;").replace(na,"&quot;")}var na=/\"/g;function oa(a){return a.srcElement||a.target}function K(a){return typeof a!="undefined"}
function pa(a){var c;if(a.keyCode)c=a.keyCode;else if(a.which)c=a.which;return c}function qa(a){return document.getElementById(a)}function ra(a){return document.all[a]}var sa=document.getElementById?qa:ra;function E(a){try{if(window.parent!=window&&window.parent.log){window.parent.log(window.name+"::"+a);return}}catch(c){}var d=sa("log");if(d){a="<p class=logentry><span class=logdate>"+new Date+"</span><span class=logmsg>"+a+"</span></p>";d.innerHTML=a+d.innerHTML}else window.status=a};function L(){}L.raise=function(a){if(typeof Error!="undefined")throw Error(a||"Assertion Failed");else throw a;};L.fail=function(a){a=a||"Assertion failed";typeof n!="undefined"&&n(a+"\n");L.raise(a)};L.isTrue=function(a,c){if(!a){if(c===undefined)c="Assertion failed";L.fail(c)}};L.equals=function(a,c,d){if(a!=c){if(d===undefined)d="AS_Assert.equals failed: <"+a+"> != <"+c+">";L.fail(d)}};
L.typeOf=function(a,c,d){if(typeof a!=c){if(a||a=="")try{if(c==L.TYPE_MAP[typeof a]||a instanceof c)return}catch(e){}if(d===undefined){if(typeof c=="function")if(d=c.toString().match(/^\s*function\s+([^\s\{]+)/))c=d[1];d="AS_Assert.typeOf failed: <"+a+"> not typeof "+c}L.fail(d)}};L.TYPE_MAP={string:String,number:Number,"boolean":Boolean};
L.numArgs=function(a,c){var d=L.numArgs.caller;if(d&&d.arguments.length!=a){if(c===undefined)c=d.name+" expected "+a+" arguments  but received "+d.arguments.length;L.fail(c)}};var ta=this;String.prototype.U=function(a){return this.lastIndexOf(a,0)==0};String.prototype.F=function(a){var c=this.length-a.length;return c>=0&&this.indexOf(a,c)==c};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.subs=function(){for(var a=this,c=0;c<arguments.length;c++)a=a.replace(/\%s/,String(arguments[c]));return a};
if(!Function.prototype.apply)Function.prototype.apply=function(a,c){var d=[];a||(a=ta);for(var e=c||[],f=0;f<e.length;f++)d[f]="args["+f+"]";d="oScope.__applyTemp__.peek()("+d.join(",")+");";if(!a.__applyTemp__)a.__applyTemp__=[];a.__applyTemp__.push(this);d=eval(d);a.__applyTemp__.pop();return d};if(!Array.prototype.push)Array.prototype.push=function(){for(var a=0;a<arguments.length;a++)this[this.length]=arguments[a];return this.length};
if(!Array.prototype.pop)Array.prototype.pop=function(){if(this.length){var a=this[this.length-1];this.length--;return a}};Array.prototype.peek=function(){return this[this.length-1]};if(!Array.prototype.shift)Array.prototype.shift=function(){if(this.length!=0){for(var a=this[0],c=0;c<this.length-1;c++)this[c]=this[c+1];this.length--;return a}};
if(!Array.prototype.unshift)Array.prototype.unshift=function(){for(var a=arguments.length,c=this.length-1;c>=0;c--)this[c+a]=this[c];for(c=0;c<a;c++)this[c]=arguments[c];return this.length};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,c){for(var d=0;d<this.length;d++)a.call(c,this[d],d,this)};
function M(a,c){var d=a.X||[];d=d.concat(Array.prototype.slice.call(arguments,2));if(typeof a.v!="undefined")c=a.v;if(typeof a.u!="undefined")a=a.u;var e=function(){var f=d.concat(Array.prototype.slice.call(arguments));return a.apply(c,f)};e.X=d;e.v=c;e.u=a;return e}Function.prototype.bind=function(a){return M.apply(i,[this,a].concat(Array.prototype.slice.call(arguments,1)))};Function.prototype.partial=function(){return M.apply(i,[this,i].concat(Array.prototype.slice.call(arguments)))};
Function.prototype.inherits=function(a){var c=function(){};this.g=c.prototype=a.prototype;this.prototype=new c};Function.prototype.mixin=function(a){for(var c in a)this.prototype[c]=a[c];if(typeof a.toString=="function"&&a.toString!=this.prototype.toString)this.prototype.toString=a.toString};Function.prototype.bind=function(a){if(typeof this!="function")throw Error("Bind must be called as a method of a function object.");var c=this,d=Array.prototype.splice.call(arguments,1,arguments.length);return function(){for(var e=d.concat(),f=0;f<arguments.length;f++)e.push(arguments[f]);return c.apply(a,e)}};var N,O,P;
(function(){function a(g){if(g.O==i)g.O=++f;return g.O}function c(g,h,l,m){g=a(g);l=a(l);m=!!m;return h=g+"_"+h+"_"+l+"_"+m}function d(g){var h=Array.prototype.splice.call(arguments,1,arguments.length);return e[g].listener.apply(i,h)}var e={},f=0;N=function(g,h,l,m){var q=c(g,h,l,m);if(q in e)return q;var v=d.bind(i,q);e[q]={listener:l,proxy:v,event:h,node:g,useCapture:m};if(g.addEventListener)g.addEventListener(h,v,m);else if(g.attachEvent)g.attachEvent("on"+h,v);else throw Error("Node {"+g+"} does not support event listeners.");
return q};O=function(g,h,l,m){g=c(g,h,l,m);return P(g)};P=function(g){if(!(g in e))return j;var h=e[g],l=h.proxy,m=h.event,q=h.node;h=h.useCapture;if(q.removeEventListener)q.removeEventListener(m,l,h);else q.detachEvent&&q.detachEvent("on"+m,l);delete e[g];return b}})();function Q(a,c,d){this.D=c;if(d){this.f=[];for(c=0;c<a.length;c++)this.f.push(d+a[c])}else this.f=a}Q.prototype.load=function(a){this.S=a;this.H=0;a=this.D.getElementsByTagName("head")[0];for(var c=0;c<this.f.length;c++){var d=this.D.createElement("script");d.type="text/javascript";if(p())d.onreadystatechange=this.p.bind(this,d);else d.onload=this.p.bind(this,d);d.src=this.f[c];a.appendChild(d)}};
Q.prototype.p=function(a){if(!(p()&&a.readyState!="complete")){this.H++;this.H==this.f.length&&this.S&&this.S()}};var R=R||{};R.global=this;R.DEBUG=b;R.LOCALE="en";R.i=i;R.provide=function(a){R.G(a)};R.G=function(a,c,d){a=a.split(".");d=d||R.global;!(a[0]in d)&&d.execScript&&d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)if(!a.length&&R.isDef(c))d[e]=c;else d=d[e]?d[e]:d[e]={}};R.getObjectByName=function(a,c){for(var d=a.split("."),e=c||R.global,f;f=d.shift();)if(e[f])e=e[f];else return i;return e};R.globalize=function(a,c){var d=c||R.global;for(var e in a)d[e]=a[e]};R.addDependency=function(){};
R.useStrictRequires=j;R.require=function(){};R.basePath="";R.nullFunction=function(){};R.identityFunction=function(){return arguments[0]};R.abstractMethod=function(){throw Error("unimplemented abstract method");};R.addSingletonGetter=function(a){a.getInstance=function(){return a.ja||(a.ja=new a)}};
R.typeOf=function(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(c=="function"&&typeof a.call=="undefined")return"object";return c};R.ka=function(a,c){if(c in a)for(var d in a)if(d==c&&Object.prototype.hasOwnProperty.call(a,c))return b;return j};R.sa=function(a,c){return a instanceof Object?Object.prototype.propertyIsEnumerable.call(a,c):R.ka(a,c)};R.isDef=function(a){return a!==undefined};R.isNull=function(a){return a===i};R.isDefAndNotNull=function(a){return a!=i};R.isArray=function(a){return R.typeOf(a)=="array"};
R.isArrayLike=function(a){var c=R.typeOf(a);return c=="array"||c=="object"&&typeof a.length=="number"};R.isDateLike=function(a){return R.isObject(a)&&typeof a.getFullYear=="function"};R.isString=function(a){return typeof a=="string"};R.isBoolean=function(a){return typeof a=="boolean"};R.isNumber=function(a){return typeof a=="number"};R.isFunction=function(a){return R.typeOf(a)=="function"};R.isObject=function(a){a=R.typeOf(a);return a=="object"||a=="array"||a=="function"};
R.getUid=function(a){if(a.hasOwnProperty&&a.hasOwnProperty(R.a))return a[R.a];a[R.a]||(a[R.a]=++R.na);return a[R.a]};R.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(R.a);try{delete a[R.a]}catch(c){}};R.a="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36);R.na=0;R.getHashCode=R.getUid;R.removeHashCode=R.removeUid;
R.cloneObject=function(a){var c=R.typeOf(a);if(c=="object"||c=="array"){if(a.clone)return a.clone();c=c=="array"?[]:{};for(var d in a)c[d]=R.cloneObject(a[d]);return c}return a};R.bind=function(a,c){var d=c||R.global;if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,e);return a.apply(d,f)}}else return function(){return a.apply(d,arguments)}};
R.partial=function(a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=Array.prototype.slice.call(arguments);d.unshift.apply(d,c);return a.apply(this,d)}};R.mixin=function(a,c){for(var d in c)a[d]=c[d]};R.now=Date.now||function(){return+new Date};
R.globalEval=function(a){if(R.global.execScript)R.global.execScript(a,"JavaScript");else if(R.global.eval){if(R.i==i){R.global.eval("var _et_ = 1;");if(typeof R.global._et_!="undefined"){delete R.global._et_;R.i=b}else R.i=j}if(R.i)R.global.eval(a);else{var c=R.global.document,d=c.createElement("script");d.type="text/javascript";d.defer=j;d.appendChild(c.createTextNode(a));c.body.appendChild(d);c.body.removeChild(d)}}else throw Error("goog.globalEval not available");};R.typedef=b;
R.getCssName=function(a,c){var d=a+(c?"-"+c:"");return R.n&&d in R.n?R.n[d]:d};R.setCssNameMapping=function(a){R.n=a};R.getMsg=function(a,c){var d=c||{};for(var e in d){var f=(""+d[e]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+e+"\\}","gi"),f)}return a};R.exportSymbol=function(a,c,d){R.G(a,c,d)};R.exportProperty=function(a,c,d){a[c]=d};R.inherits=function(a,c){function d(){}d.prototype=c.prototype;a.g=c.prototype;a.prototype=new d;a.prototype.constructor=a};
R.base=function(a,c){var d=arguments.callee.caller;if(d.g)return d.g.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=j,g=a.constructor;g;g=g.g&&g.g.constructor)if(g.prototype[c]===d)f=b;else if(f)return g.prototype[c].apply(a,e);if(a[c]===d)return a.constructor.prototype[c].apply(a,e);else throw Error("goog.base called from a method of one name to a method of a different name");};R.scope=function(a){a.call(R.global)};
R.MODIFY_FUNCTION_PROTOTYPES=b;if(R.MODIFY_FUNCTION_PROTOTYPES){Function.prototype.bind=function(a){if(arguments.length>1){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return R.bind.apply(i,c)}else return R.bind(this,a)};Function.prototype.partial=function(){var a=Array.prototype.slice.call(arguments);a.unshift(this,i);return R.bind.apply(i,a)};Function.prototype.inherits=function(a){R.inherits(this,a)};Function.prototype.mixin=function(a){R.mixin(this.prototype,a)}};R.string={};R.string.Unicode={NBSP:"\u00a0"};R.string.U=function(a,c){return a.lastIndexOf(c,0)==0};R.string.F=function(a,c){var d=a.length-c.length;return d>=0&&a.indexOf(c,d)==d};R.string.caseInsensitiveStartsWith=function(a,c){return R.string.caseInsensitiveCompare(c,a.substr(0,c.length))==0};R.string.caseInsensitiveEndsWith=function(a,c){return R.string.caseInsensitiveCompare(c,a.substr(a.length-c.length,c.length))==0};
R.string.subs=function(a){for(var c=1;c<arguments.length;c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a};R.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};R.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};R.string.isEmptySafe=function(a){return R.string.isEmpty(R.string.makeSafe(a))};R.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};R.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
R.string.isNumeric=function(a){return!/[^0-9]/.test(a)};R.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};R.string.isSpace=function(a){return a==" "};R.string.isUnicodeChar=function(a){return a.length==1&&a>=" "&&a<="~"||a>="\u0080"&&a<="\ufffd"};R.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};R.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};R.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};
R.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};R.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};R.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};R.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};R.string.caseInsensitiveCompare=function(a,c){var d=String(a).toLowerCase(),e=String(c).toLowerCase();return d<e?-1:d==e?0:1};R.string.R=/(\.\d+)|(\d+)|(\D+)/g;
R.string.numerateCompare=function(a,c){if(a==c)return 0;if(!a)return-1;if(!c)return 1;for(var d=a.toLowerCase().match(R.string.R),e=c.toLowerCase().match(R.string.R),f=Math.min(d.length,e.length),g=0;g<f;g++){var h=d[g],l=e[g];if(h!=l){d=parseInt(h,10);if(!isNaN(d)){e=parseInt(l,10);if(!isNaN(e)&&d-e)return d-e}return h<l?-1:1}}if(d.length!=e.length)return d.length-e.length;return a<c?-1:1};R.string.da=/^[a-zA-Z0-9\-_.!~*'()]*$/;
R.string.urlEncode=function(a){a=String(a);if(!R.string.da.test(a))return encodeURIComponent(a);return a};R.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};R.string.newLineToBr=function(a,c){return a.replace(/(\r\n|\r|\n)/g,c?"<br />":"<br>")};
R.string.htmlEscape=function(a,c){if(c)return a.replace(R.string.t,"&amp;").replace(R.string.P,"&lt;").replace(R.string.J,"&gt;").replace(R.string.T,"&quot;");else{if(!R.string.W.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(R.string.t,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(R.string.P,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(R.string.J,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(R.string.T,"&quot;");return a}};R.string.t=/&/g;R.string.P=/</g;R.string.J=/>/g;R.string.T=/\"/g;R.string.W=/[&<>\"]/;
R.string.unescapeEntities=function(a){if(R.string.contains(a,"&"))return"document"in R.global&&!R.string.contains(a,"<")?R.string.oa(a):R.string.pa(a);return a};R.string.oa=function(a){var c=R.global.document.createElement("a");c.innerHTML=a;c[R.string.s]&&c[R.string.s]();a=c.firstChild.nodeValue;c.innerHTML="";return a};
R.string.pa=function(a){return a.replace(/&([^;]+);/g,function(c,d){switch(d){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(d.charAt(0)=="#"){var e=Number("0"+d.substr(1));if(!isNaN(e))return String.fromCharCode(e)}return c}})};R.string.s="normalize";R.string.whitespaceEscape=function(a,c){return R.string.newLineToBr(a.replace(/  /g," &#160;"),c)};
R.string.stripQuotes=function(a,c){for(var d=c.length,e=0;e<d;e++){var f=d==1?c:c.charAt(e);if(a.charAt(0)==f&&a.charAt(a.length-1)==f)return a.substring(1,a.length-1)}return a};R.string.truncate=function(a,c,d){if(d)a=R.string.unescapeEntities(a);if(a.length>c)a=a.substring(0,c-3)+"...";if(d)a=R.string.htmlEscape(a);return a};
R.string.truncateMiddle=function(a,c,d){if(d)a=R.string.unescapeEntities(a);if(a.length>c){var e=Math.floor(c/2),f=a.length-e;e+=c%2;a=a.substring(0,e)+"..."+a.substring(f)}if(d)a=R.string.htmlEscape(a);return a};R.string.r={"\u0000":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"};R.string.k={"'":"\\'"};
R.string.quote=function(a){a=String(a);if(a.quote)return a.quote();else{for(var c=['"'],d=0;d<a.length;d++){var e=a.charAt(d),f=e.charCodeAt(0);c[d+1]=R.string.r[e]||(f>31&&f<127?e:R.string.escapeChar(e))}c.push('"');return c.join("")}};R.string.escapeString=function(a){for(var c=[],d=0;d<a.length;d++)c[d]=R.string.escapeChar(a.charAt(d));return c.join("")};
R.string.escapeChar=function(a){if(a in R.string.k)return R.string.k[a];if(a in R.string.r)return R.string.k[a]=R.string.r[a];var c=a,d=a.charCodeAt(0);if(d>31&&d<127)c=a;else{if(d<256){c="\\x";if(d<16||d>256)c+="0"}else{c="\\u";if(d<4096)c+="0"}c+=d.toString(16).toUpperCase()}return R.string.k[a]=c};R.string.toMap=function(a){for(var c={},d=0;d<a.length;d++)c[a.charAt(d)]=b;return c};R.string.contains=function(a,c){return a.indexOf(c)!=-1};
R.string.removeAt=function(a,c,d){var e=a;if(c>=0&&c<a.length&&d>0)e=a.substr(0,c)+a.substr(c+d,a.length-c-d);return e};R.string.remove=function(a,c){var d=RegExp(R.string.regExpEscape(c),"");return a.replace(d,"")};R.string.removeAll=function(a,c){var d=RegExp(R.string.regExpEscape(c),"g");return a.replace(d,"")};R.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};R.string.repeat=function(a,c){return Array(c+1).join(a)};
R.string.padNumber=function(a,c,d){a=R.isDef(d)?a.toFixed(d):String(a);d=a.indexOf(".");if(d==-1)d=a.length;return R.string.repeat("0",Math.max(0,c-d))+a};R.string.makeSafe=function(a){return a==i?"":String(a)};R.string.buildString=function(){return Array.prototype.join.call(arguments,"")};R.string.getRandomString=function(){return Math.floor(Math.random()*2147483648).toString(36)+(Math.floor(Math.random()*2147483648)^R.now()).toString(36)};
R.string.compareVersions=function(a,c){for(var d=0,e=R.string.trim(String(a)).split("."),f=R.string.trim(String(c)).split("."),g=Math.max(e.length,f.length),h=0;d==0&&h<g;h++){var l=e[h]||"",m=f[h]||"",q=RegExp("(\\d*)(\\D*)","g"),v=RegExp("(\\d*)(\\D*)","g");do{var w=q.exec(l)||["","",""],x=v.exec(m)||["","",""];if(w[0].length==0&&x[0].length==0)break;d=w[1].length==0?0:parseInt(w[1],10);var ua=x[1].length==0?0:parseInt(x[1],10);d=R.string.m(d,ua)||R.string.m(w[2].length==0,x[2].length==0)||R.string.m(w[2],
x[2])}while(d==0)}return d};R.string.m=function(a,c){if(a<c)return-1;else if(a>c)return 1;return 0};R.string.V=4294967296;R.string.hashCode=function(a){for(var c=0,d=0;d<a.length;++d){c=31*c+a.charCodeAt(d);c%=R.string.V}return c};R.string.qa=Math.random()*2147483648|0;R.string.createUniqueString=function(){return"goog_"+R.string.qa++};R.string.toNumber=function(a){var c=Number(a);if(c==0&&R.string.isEmpty(a))return NaN;return c};R.userAgent={};R.userAgent.ASSUME_IE=j;R.userAgent.ASSUME_GECKO=j;R.userAgent.ASSUME_WEBKIT=j;R.userAgent.ASSUME_MOBILE_WEBKIT=j;R.userAgent.ASSUME_OPERA=j;R.userAgent.b=R.userAgent.ASSUME_IE||R.userAgent.ASSUME_GECKO||R.userAgent.ASSUME_MOBILE_WEBKIT||R.userAgent.ASSUME_WEBKIT||R.userAgent.ASSUME_OPERA;R.userAgent.getUserAgentString=function(){return R.global.navigator?R.global.navigator.userAgent:i};R.userAgent.getNavigator=function(){return R.global.navigator};
R.userAgent.ia=function(){R.userAgent.d=j;R.userAgent.B=j;R.userAgent.h=j;R.userAgent.C=j;R.userAgent.A=j;var a;if(!R.userAgent.b&&(a=R.userAgent.getUserAgentString())){var c=R.userAgent.getNavigator();R.userAgent.d=a.indexOf("Opera")==0;R.userAgent.B=!R.userAgent.d&&a.indexOf("MSIE")!=-1;R.userAgent.h=!R.userAgent.d&&a.indexOf("WebKit")!=-1;R.userAgent.C=R.userAgent.h&&a.indexOf("Mobile")!=-1;R.userAgent.A=!R.userAgent.d&&!R.userAgent.h&&c.product=="Gecko"}};R.userAgent.b||R.userAgent.ia();
R.userAgent.OPERA=R.userAgent.b?R.userAgent.ASSUME_OPERA:R.userAgent.d;R.userAgent.IE=R.userAgent.b?R.userAgent.ASSUME_IE:R.userAgent.B;R.userAgent.GECKO=R.userAgent.b?R.userAgent.ASSUME_GECKO:R.userAgent.A;R.userAgent.WEBKIT=R.userAgent.b?R.userAgent.ASSUME_WEBKIT||R.userAgent.ASSUME_MOBILE_WEBKIT:R.userAgent.h;R.userAgent.MOBILE=R.userAgent.ASSUME_MOBILE_WEBKIT||R.userAgent.C;R.userAgent.SAFARI=R.userAgent.WEBKIT;R.userAgent.ba=function(){var a=R.userAgent.getNavigator();return a&&a.platform||""};
R.userAgent.PLATFORM=R.userAgent.ba();R.userAgent.ASSUME_MAC=j;R.userAgent.ASSUME_WINDOWS=j;R.userAgent.ASSUME_LINUX=j;R.userAgent.ASSUME_X11=j;R.userAgent.c=R.userAgent.ASSUME_MAC||R.userAgent.ASSUME_WINDOWS||R.userAgent.ASSUME_LINUX||R.userAgent.ASSUME_X11;
R.userAgent.ha=function(){R.userAgent.Z=R.string.contains(R.userAgent.PLATFORM,"Mac");R.userAgent.$=R.string.contains(R.userAgent.PLATFORM,"Win");R.userAgent.Y=R.string.contains(R.userAgent.PLATFORM,"Linux");R.userAgent.aa=!!R.userAgent.getNavigator()&&R.string.contains(R.userAgent.getNavigator().appVersion||"","X11")};R.userAgent.c||R.userAgent.ha();R.userAgent.MAC=R.userAgent.c?R.userAgent.ASSUME_MAC:R.userAgent.Z;R.userAgent.WINDOWS=R.userAgent.c?R.userAgent.ASSUME_WINDOWS:R.userAgent.$;
R.userAgent.LINUX=R.userAgent.c?R.userAgent.ASSUME_LINUX:R.userAgent.Y;R.userAgent.X11=R.userAgent.c?R.userAgent.ASSUME_X11:R.userAgent.aa;R.userAgent.ca=function(){var a="",c;if(R.userAgent.OPERA&&R.global.opera){a=R.global.opera.version;a=typeof a=="function"?a():a}else{if(R.userAgent.GECKO)c=/rv\:([^\);]+)(\)|;)/;else if(R.userAgent.IE)c=/MSIE\s+([^\);]+)(\)|;)/;else if(R.userAgent.WEBKIT)c=/WebKit\/(\S+)/;if(c)a=(a=c.exec(R.userAgent.getUserAgentString()))?a[1]:""}return a};
R.userAgent.VERSION=R.userAgent.ca();R.userAgent.compare=function(a,c){return R.string.compareVersions(a,c)};R.userAgent.N={};R.userAgent.isVersion=function(a){return R.userAgent.N[a]||(R.userAgent.N[a]=R.string.compareVersions(R.userAgent.VERSION,a)>=0)};function va(a){if(!S())window.location="/group/<?cs var:CGI.Group.addr ?>/unsupported?url="+encodeURIComponent(window.location);var c=document.getElementById("create_new_page_form");if(K(a))for(var d=c.getElementsByTagName("input"),e=0;e<d.length;e++)if(d[e].name=="name")d[e].value=a;c.submit()}R.exportSymbol("_G2_CreateNewPage",va);
function S(){if(S.supported===undefined){var a=j;if(R.userAgent.GECKO&&R.userAgent.compare(R.userAgent.VERSION,"1.8")>=0)a=b;else if(R.userAgent.IE&&R.userAgent.compare(R.userAgent.VERSION,"6.0")>=0)a=b;else if(R.userAgent.WEBKIT)a=b;S.supported=a}return S.supported}R.exportSymbol("_G2_IsSupportedEditBrowser",S);
function wa(a){if(!window.g2_modules)window.g2_modules=[];var c=document.getElementById(a);window.g2_modules[a]=c;c.getChildElement=function(d){return document.getElementById(this.id+"_"+d)};return c}R.exportSymbol("_G2_RegisterModule",wa);function xa(a){if(window.g2_modules)return window.g2_modules[a]}R.exportSymbol("_G2_GetModule",xa);
function ya(a){var c=i;if(p()){var d=window.is_ie5?"Microsoft.XMLHTTP":"Msxml2.XMLHTTP";try{c=new ActiveXObject(d)}catch(e){alert("You need to enable active scripting and activeX controls")}}else c=new XMLHttpRequest;c.onreadystatechange=function(){a(c)};return c}var T=(new Date).getTime();function U(){++T;return T}R.exportSymbol("_UniqueNum",U);function za(a){V(a,function(){})}R.exportSymbol("_SendServerRequest",za);function V(a,c){var d=ya(c);d.open("GET",a+"&rand="+U(),b);d.send(i)}
R.exportSymbol("_StartGETRequest",V);
function Aa(a,c){if(p()){var d=document.getElementById(a),e=d.parentNode.parentNode,f=e.parentNode;f.style.height="100%";for(f=0;f<e.rows.length;f++)e.rows[f].style.height="0px";d.style.height="100%";N(window,"load",function(){e.style.position="absolute";e.style.height="0px";d.style.height="0px";var g="_G2_GetStarRowHeight_"+a,h="_G2_GetStarRowWidth_"+a;window[g]=function(){for(var l=e.parentNode.offsetHeight,m=0;m<e.rows.length;m++)if(e.rows[m]!=d)l-=e.rows[m].offsetHeight;return l-(c||0)};window[h]=
function(){return e.parentNode.offsetWidth};d.style.setExpression("height",g+"()");d.style.setExpression("width",h+"()");N(window,"resize",function(){var l=window[g]();if(l>=0)d.style.height=l;l=window[h]();if(l>=0)d.style.width=l});document.recalc()})}}R.exportSymbol("_G2_AddStarRow",Aa);R.exportSymbol("listen",N);R.exportSymbol("unlisten",O);R.exportSymbol("HasClass",G);R.exportSymbol("AddClass",da);R.exportSymbol("RemoveClass",ea);R.exportSymbol("GetPageOffsetLeft",H);
R.exportSymbol("GetPageOffsetRight",fa);R.exportSymbol("GetPageOffsetTop",I);R.exportSymbol("GetWindowHeight",ia);R.exportSymbol("GetWindowWidth",ga);R.exportSymbol("BR_IsIE",p);R.exportSymbol("IsDescendant",ca);R.exportSymbol("IsDefined",K);R.exportSymbol("GetEventTarget",oa);R.exportSymbol("GetKeyCode",pa);function W(a,c,d){this.l=a;this.ga=c;this.ra=d}W.w=i;W.la=function(a){W.w=a};W.j=function(){return W.w};W.prototype.e=function(){return this.l};W.prototype.M=function(){return this.ga};function X(a,c){this.l=a;this.ta=c}X.z=i;X.ma=function(a){X.z=a};X.ea=function(){return X.z};X.prototype.e=function(){return this.l};var Y={};Y.I=function(a){return a.M()?"/a/"+a.e():""};Y.fa=function(a,c){return Y.I(W.j())+"/group/"+c.e()};Y.Q=function(a,c){return Y.I(a)+c};Y.q=function(a,c,d){return Y.fa(a,c)+d};
Y.makeSiteUrl=function(a){return Y.Q(W.j(),a)};R.exportProperty(Y,"makeSiteUrl",Y.makeSiteUrl);Y.makeSiteUrlForDomain=function(a,c){return Y.Q(a,c)};R.exportProperty(Y,"makeSiteUrlForDomain",Y.makeSiteUrlForDomain);Y.makeGroupUrl=function(a){return Y.q(W.j(),X.ea(),a)};R.exportProperty(Y,"makeGroupUrl",Y.makeGroupUrl);Y.makeGroupUrlForGroup=function(a,c){return Y.q(W.j(),a,c)};R.exportProperty(Y,"makeGroupUrlForGroup",Y.makeGroupUrlForGroup);
Y.makeGroupUrlForDomainAndGroup=function(a,c,d){return Y.q(a,c,d)};R.exportProperty(Y,"makeGroupUrlForDomainAndGroup",Y.makeGroupUrlForDomainAndGroup);function Z(a,c,d){return new W(a,c===undefined?a!="googlegroups.com":c,d===undefined?b:d)}function $(a,c){return new X(a,c===undefined?"v":c)}function Ba(a,c,d){W.la(Z(a,c,d))}function Ca(a,c){X.ma($(a,c))}R.exportSymbol("_G2_UrlBuilder",Y);R.exportSymbol("_G2_createDomain",Z);R.exportSymbol("_G2_initCurrentDomain",Ba);
R.exportSymbol("_G2_createGroup",$);R.exportSymbol("_G2_initCurrentGroup",Ca); })()