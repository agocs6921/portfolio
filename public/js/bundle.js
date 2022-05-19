(()=>{var Ry=Object.create;var L0=Object.defineProperty;var Ly=Object.getOwnPropertyDescriptor;var Py=Object.getOwnPropertyNames;var Iy=Object.getPrototypeOf,Dy=Object.prototype.hasOwnProperty;var Sr=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Ny=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Py(e))!Dy.call(n,r)&&r!==t&&L0(n,r,{get:()=>e[r],enumerable:!(i=Ly(e,r))||i.enumerable});return n};var os=(n,e,t)=>(t=n!=null?Ry(Iy(n)):{},Ny(e||!n||!n.__esModule?L0(t,"default",{value:n,enumerable:!0}):t,n));var H0=Sr(ze=>{"use strict";var Co=Symbol.for("react.element"),Fy=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),Wy=Symbol.for("react.lazy"),P0=Symbol.iterator;function qy(n){return n===null||typeof n!="object"?null:(n=P0&&n[P0]||n["@@iterator"],typeof n=="function"?n:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,z0={};function as(n,e,t){this.props=n,this.context=e,this.refs=z0,this.updater=t||N0}as.prototype.isReactComponent={};as.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};as.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function k0(){}k0.prototype=as.prototype;function dh(n,e,t){this.props=n,this.context=e,this.refs=z0,this.updater=t||N0}var ph=dh.prototype=new k0;ph.constructor=dh;F0(ph,as.prototype);ph.isPureReactComponent=!0;var I0=Array.isArray,O0=Object.prototype.hasOwnProperty,mh={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function U0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,i)&&!B0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Co,type:n,key:s,ref:o,props:r,_owner:mh.current}}function Xy(n,e){return{$$typeof:Co,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Co}function jy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var D0=/\/+/g;function fh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jy(""+n.key):e.toString(36)}function xl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Co:case Fy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+fh(o,0):i,I0(r)?(t="",n!=null&&(t=n.replace(D0,"$&/")+"/"),xl(r,e,t,"",function(u){return u})):r!=null&&(gh(r)&&(r=Xy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(D0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",I0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+fh(s,a);o+=xl(s,e,t,l,r)}else if(l=qy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+fh(s,a++),o+=xl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(n,e,t){if(n==null)return n;var i=[],r=0;return xl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function $y(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xt={current:null},_l={transition:null},Yy={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:_l,ReactCurrentOwner:mh};ze.Children={map:yl,forEach:function(n,e,t){yl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return yl(n,function(){e++}),e},toArray:function(n){return yl(n,function(e){return e})||[]},only:function(n){if(!gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ze.Component=as;ze.Fragment=zy;ze.Profiler=Oy;ze.PureComponent=dh;ze.StrictMode=ky;ze.Suspense=Vy;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=F0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)O0.call(e,l)&&!B0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Co,type:n.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(n){return n={$$typeof:Uy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:By,_context:n},n.Consumer=n};ze.createElement=U0;ze.createFactory=function(n){var e=U0.bind(null,n);return e.type=n,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(n){return{$$typeof:Hy,render:n}};ze.isValidElement=gh;ze.lazy=function(n){return{$$typeof:Wy,_payload:{_status:-1,_result:n},_init:$y}};ze.memo=function(n,e){return{$$typeof:Gy,type:n,compare:e===void 0?null:e}};ze.startTransition=function(n){var e=_l.transition;_l.transition={};try{n()}finally{_l.transition=e}};ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ze.useCallback=function(n,e){return Xt.current.useCallback(n,e)};ze.useContext=function(n){return Xt.current.useContext(n)};ze.useDebugValue=function(){};ze.useDeferredValue=function(n){return Xt.current.useDeferredValue(n)};ze.useEffect=function(n,e){return Xt.current.useEffect(n,e)};ze.useId=function(){return Xt.current.useId()};ze.useImperativeHandle=function(n,e,t){return Xt.current.useImperativeHandle(n,e,t)};ze.useInsertionEffect=function(n,e){return Xt.current.useInsertionEffect(n,e)};ze.useLayoutEffect=function(n,e){return Xt.current.useLayoutEffect(n,e)};ze.useMemo=function(n,e){return Xt.current.useMemo(n,e)};ze.useReducer=function(n,e,t){return Xt.current.useReducer(n,e,t)};ze.useRef=function(n){return Xt.current.useRef(n)};ze.useState=function(n){return Xt.current.useState(n)};ze.useSyncExternalStore=function(n,e,t){return Xt.current.useSyncExternalStore(n,e,t)};ze.useTransition=function(){return Xt.current.useTransition()};ze.version="18.1.0"});var Er=Sr((AE,V0)=>{"use strict";V0.exports=H0()});var Q0=Sr(tt=>{"use strict";function _h(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<wl(r,e))n[i]=e,n[t]=r,t=i;else break e}}function Dn(n){return n.length===0?null:n[0]}function Sl(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,u=n[l];if(0>wl(a,t))l<r&&0>wl(u,a)?(n[i]=u,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>wl(u,t))n[i]=u,n[l]=t,i=l;else break e}}return e}function wl(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(G0=performance,tt.unstable_now=function(){return G0.now()}):(vh=Date,W0=vh.now(),tt.unstable_now=function(){return vh.now()-W0});var G0,vh,W0,ei=[],zi=[],Jy=1,_n=null,Ot=3,El=!1,br=!1,Lo=!1,j0=typeof setTimeout=="function"?setTimeout:null,$0=typeof clearTimeout=="function"?clearTimeout:null,q0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function wh(n){for(var e=Dn(zi);e!==null;){if(e.callback===null)Sl(zi);else if(e.startTime<=n)Sl(zi),e.sortIndex=e.expirationTime,_h(ei,e);else break;e=Dn(zi)}}function Mh(n){if(Lo=!1,wh(n),!br)if(Dn(ei)!==null)br=!0,Eh(Sh);else{var e=Dn(zi);e!==null&&bh(Mh,e.startTime-n)}}function Sh(n,e){br=!1,Lo&&(Lo=!1,$0(Po),Po=-1),El=!0;var t=Ot;try{for(wh(e),_n=Dn(ei);_n!==null&&(!(_n.expirationTime>e)||n&&!Z0());){var i=_n.callback;if(typeof i=="function"){_n.callback=null,Ot=_n.priorityLevel;var r=i(_n.expirationTime<=e);e=tt.unstable_now(),typeof r=="function"?_n.callback=r:_n===Dn(ei)&&Sl(ei),wh(e)}else Sl(ei);_n=Dn(ei)}if(_n!==null)var s=!0;else{var o=Dn(zi);o!==null&&bh(Mh,o.startTime-e),s=!1}return s}finally{_n=null,Ot=t,El=!1}}var bl=!1,Ml=null,Po=-1,Y0=5,J0=-1;function Z0(){return!(tt.unstable_now()-J0<Y0)}function yh(){if(Ml!==null){var n=tt.unstable_now();J0=n;var e=!0;try{e=Ml(!0,n)}finally{e?Ro():(bl=!1,Ml=null)}}else bl=!1}var Ro;typeof q0=="function"?Ro=function(){q0(yh)}:typeof MessageChannel<"u"?(xh=new MessageChannel,X0=xh.port2,xh.port1.onmessage=yh,Ro=function(){X0.postMessage(null)}):Ro=function(){j0(yh,0)};var xh,X0;function Eh(n){Ml=n,bl||(bl=!0,Ro())}function bh(n,e){Po=j0(function(){n(tt.unstable_now())},e)}tt.unstable_IdlePriority=5;tt.unstable_ImmediatePriority=1;tt.unstable_LowPriority=4;tt.unstable_NormalPriority=3;tt.unstable_Profiling=null;tt.unstable_UserBlockingPriority=2;tt.unstable_cancelCallback=function(n){n.callback=null};tt.unstable_continueExecution=function(){br||El||(br=!0,Eh(Sh))};tt.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y0=0<n?Math.floor(1e3/n):5};tt.unstable_getCurrentPriorityLevel=function(){return Ot};tt.unstable_getFirstCallbackNode=function(){return Dn(ei)};tt.unstable_next=function(n){switch(Ot){case 1:case 2:case 3:var e=3;break;default:e=Ot}var t=Ot;Ot=e;try{return n()}finally{Ot=t}};tt.unstable_pauseExecution=function(){};tt.unstable_requestPaint=function(){};tt.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=Ot;Ot=n;try{return e()}finally{Ot=t}};tt.unstable_scheduleCallback=function(n,e,t){var i=tt.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:Jy++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,_h(zi,n),Dn(ei)===null&&n===Dn(zi)&&(Lo?($0(Po),Po=-1):Lo=!0,bh(Mh,t-i))):(n.sortIndex=r,_h(ei,n),br||El||(br=!0,Eh(Sh))),n};tt.unstable_shouldYield=Z0;tt.unstable_wrapCallback=function(n){var e=Ot;return function(){var t=Ot;Ot=e;try{return n.apply(this,arguments)}finally{Ot=t}}}});var em=Sr((RE,K0)=>{"use strict";K0.exports=Q0()});var lv=Sr(pn=>{"use strict";var cg=Er(),fn=em();function Z(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hg=new Set,ea={};function kr(n,e){Cs(n,e),Cs(n+"Capture",e)}function Cs(n,e){for(ea[n]=e,n=0;n<e.length;n++)hg.add(e[n])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jh=Object.prototype.hasOwnProperty,Zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm={},nm={};function Qy(n){return jh.call(nm,n)?!0:jh.call(tm,n)?!1:Zy.test(n)?nm[n]=!0:(tm[n]=!0,!1)}function Ky(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ex(n,e,t,i){if(e===null||typeof e>"u"||Ky(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ft[n]=new Yt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ft[e]=new Yt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ft[n]=new Yt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ft[n]=new Yt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ft[n]=new Yt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ft[n]=new Yt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ft[n]=new Yt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ft[n]=new Yt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ft[n]=new Yt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Bf=/[\-:]([a-z])/g;function Uf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Bf,Uf);Ft[e]=new Yt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Bf,Uf);Ft[e]=new Yt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Bf,Uf);Ft[e]=new Yt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ft[n]=new Yt(n,1,!1,n.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ft[n]=new Yt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Hf(n,e,t,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ex(e,t,r,i)&&(t=null),i||r===null?Qy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var wi=cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),cs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Vf=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),dg=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Jh=Symbol.for("react.suspense_list"),Wf=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var pg=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var im=Symbol.iterator;function Io(n){return n===null||typeof n!="object"?null:(n=im&&n[im]||n["@@iterator"],typeof n=="function"?n:null)}var ft=Object.assign,Th;function Ho(n){if(Th===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Th=e&&e[1]||""}return`
`+Th+n}var Ah=!1;function Ch(n,e){if(!n||Ah)return"";Ah=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ah=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ho(n):""}function tx(n){switch(n.tag){case 5:return Ho(n.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return n=Ch(n.type,!1),n;case 11:return n=Ch(n.type.render,!1),n;case 1:return n=Ch(n.type,!0),n;default:return""}}function Zh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case hs:return"Fragment";case cs:return"Portal";case $h:return"Profiler";case Vf:return"StrictMode";case Yh:return"Suspense";case Jh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dg:return(n.displayName||"Context")+".Consumer";case fg:return(n._context.displayName||"Context")+".Provider";case Gf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Wf:return e=n.displayName||null,e!==null?e:Zh(n.type)||"Memo";case Oi:e=n._payload,n=n._init;try{return Zh(n(e))}catch{}}return null}function nx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===Vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function mg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ix(n){var e=mg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Al(n){n._valueTracker||(n._valueTracker=ix(n))}function gg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=mg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function tu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qh(n,e){var t=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function rm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ji(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(n,e){e=e.checked,e!=null&&Hf(n,"checked",e,!1)}function Kh(n,e){vg(n,e);var t=Ji(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ef(n,e.type,t):e.hasOwnProperty("defaultValue")&&ef(n,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function sm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ef(n,e,t){(e!=="number"||tu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Vo=Array.isArray;function Ms(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ji(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function tf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function om(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Z(92));if(Vo(t)){if(1<t.length)throw Error(Z(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ji(t)}}function yg(n,e){var t=Ji(e.value),i=Ji(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function am(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function xg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?xg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Cl,_g=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ta(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rx=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(n){rx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),qo[e]=qo[n]})});function wg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||qo.hasOwnProperty(n)&&qo[n]?(""+e).trim():e+"px"}function Mg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=wg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var sx=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(n,e){if(e){if(sx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function sf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function qf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var af=null,Ss=null,Es=null;function lm(n){if(n=xa(n)){if(typeof af!="function")throw Error(Z(280));var e=n.stateNode;e&&(e=Lu(e),af(n.stateNode,n.type,e))}}function Sg(n){Ss?Es?Es.push(n):Es=[n]:Ss=n}function Eg(){if(Ss){var n=Ss,e=Es;if(Es=Ss=null,lm(n),e)for(n=0;n<e.length;n++)lm(e[n])}}function bg(n,e){return n(e)}function Tg(){}var Rh=!1;function Ag(n,e,t){if(Rh)return n(e,t);Rh=!0;try{return bg(n,e,t)}finally{Rh=!1,(Ss!==null||Es!==null)&&(Tg(),Eg())}}function na(n,e){var t=n.stateNode;if(t===null)return null;var i=Lu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Z(231,e,typeof t));return t}var lf=!1;if(yi)try{ls={},Object.defineProperty(ls,"passive",{get:function(){lf=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{lf=!1}var ls;function ox(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Xo=!1,nu=null,iu=!1,uf=null,ax={onError:function(n){Xo=!0,nu=n}};function lx(n,e,t,i,r,s,o,a,l){Xo=!1,nu=null,ox.apply(ax,arguments)}function ux(n,e,t,i,r,s,o,a,l){if(lx.apply(this,arguments),Xo){if(Xo){var u=nu;Xo=!1,nu=null}else throw Error(Z(198));iu||(iu=!0,uf=u)}}function Or(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Cg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function um(n){if(Or(n)!==n)throw Error(Z(188))}function cx(n){var e=n.alternate;if(!e){if(e=Or(n),e===null)throw Error(Z(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return um(r),n;if(s===i)return um(r),e;s=s.sibling}throw Error(Z(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(t.alternate!==i)throw Error(Z(190))}if(t.tag!==3)throw Error(Z(188));return t.stateNode.current===t?n:e}function Rg(n){return n=cx(n),n!==null?Lg(n):null}function Lg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Lg(n);if(e!==null)return e;n=n.sibling}return null}var Pg=fn.unstable_scheduleCallback,cm=fn.unstable_cancelCallback,hx=fn.unstable_shouldYield,fx=fn.unstable_requestPaint,vt=fn.unstable_now,dx=fn.unstable_getCurrentPriorityLevel,Xf=fn.unstable_ImmediatePriority,Ig=fn.unstable_UserBlockingPriority,ru=fn.unstable_NormalPriority,px=fn.unstable_LowPriority,Dg=fn.unstable_IdlePriority,Tu=null,ri=null;function mx(n){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Tu,n,void 0,(n.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:yx,gx=Math.log,vx=Math.LN2;function yx(n){return n>>>=0,n===0?32:31-(gx(n)/vx|0)|0}var Rl=64,Ll=4194304;function Go(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function su(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=t&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Bn(e),r=1<<t,i|=n[t],e&=~r;return i}function xx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=xx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function cf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ng(){var n=Rl;return Rl<<=1,(Rl&4194240)===0&&(Rl=64),n}function Lh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function va(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Bn(e),n[e]=t}function wx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Bn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function jf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Bn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Je=0;function Fg(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zg,$f,kg,Og,Bg,hf=!1,Pl=[],Wi=null,qi=null,Xi=null,ia=new Map,ra=new Map,Ui=[],Mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hm(n,e){switch(n){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function Do(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&$f(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Sx(n,e,t,i,r){switch(e){case"focusin":return Wi=Do(Wi,n,e,t,i,r),!0;case"dragenter":return qi=Do(qi,n,e,t,i,r),!0;case"mouseover":return Xi=Do(Xi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,Do(ia.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,Do(ra.get(s)||null,n,e,t,i,r)),!0}return!1}function Ug(n){var e=Cr(n.target);if(e!==null){var t=Or(e);if(t!==null){if(e=t.tag,e===13){if(e=Cg(t),e!==null){n.blockedOn=e,Bg(n.priority,function(){kg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ff(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);of=i,t.target.dispatchEvent(i),of=null}else return e=xa(t),e!==null&&$f(e),n.blockedOn=t,!1;e.shift()}return!0}function fm(n,e,t){Xl(n)&&t.delete(e)}function Ex(){hf=!1,Wi!==null&&Xl(Wi)&&(Wi=null),qi!==null&&Xl(qi)&&(qi=null),Xi!==null&&Xl(Xi)&&(Xi=null),ia.forEach(fm),ra.forEach(fm)}function No(n,e){n.blockedOn===e&&(n.blockedOn=null,hf||(hf=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,Ex)))}function sa(n){function e(r){return No(r,n)}if(0<Pl.length){No(Pl[0],n);for(var t=1;t<Pl.length;t++){var i=Pl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Wi!==null&&No(Wi,n),qi!==null&&No(qi,n),Xi!==null&&No(Xi,n),ia.forEach(e),ra.forEach(e),t=0;t<Ui.length;t++)i=Ui[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ui.length&&(t=Ui[0],t.blockedOn===null);)Ug(t),t.blockedOn===null&&Ui.shift()}var bs=wi.ReactCurrentBatchConfig,ou=!0;function bx(n,e,t,i){var r=Je,s=bs.transition;bs.transition=null;try{Je=1,Yf(n,e,t,i)}finally{Je=r,bs.transition=s}}function Tx(n,e,t,i){var r=Je,s=bs.transition;bs.transition=null;try{Je=4,Yf(n,e,t,i)}finally{Je=r,bs.transition=s}}function Yf(n,e,t,i){if(ou){var r=ff(n,e,t,i);if(r===null)kh(n,e,i,au,t),hm(n,i);else if(Sx(r,n,e,t,i))i.stopPropagation();else if(hm(n,i),e&4&&-1<Mx.indexOf(n)){for(;r!==null;){var s=xa(r);if(s!==null&&zg(s),s=ff(n,e,t,i),s===null&&kh(n,e,i,au,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else kh(n,e,i,null,t)}}var au=null;function ff(n,e,t,i){if(au=null,n=qf(i),n=Cr(n),n!==null)if(e=Or(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Cg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return au=n,null}function Hg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dx()){case Xf:return 1;case Ig:return 4;case ru:case px:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var Vi=null,Jf=null,jl=null;function Vg(){if(jl)return jl;var n,e=Jf,t=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return jl=r.slice(n,1<i?1-i:void 0)}function $l(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Il(){return!0}function dm(){return!1}function dn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:dm,this.isPropagationStopped=dm,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zf=dn(Ns),ya=ft({},Ns,{view:0,detail:0}),Ax=dn(ya),Ph,Ih,Fo,Au=ft({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fo&&(Fo&&n.type==="mousemove"?(Ph=n.screenX-Fo.screenX,Ih=n.screenY-Fo.screenY):Ih=Ph=0,Fo=n),Ph)},movementY:function(n){return"movementY"in n?n.movementY:Ih}}),pm=dn(Au),Cx=ft({},Au,{dataTransfer:0}),Rx=dn(Cx),Lx=ft({},ya,{relatedTarget:0}),Dh=dn(Lx),Px=ft({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=dn(Px),Dx=ft({},Ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nx=dn(Dx),Fx=ft({},Ns,{data:0}),mm=dn(Fx),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Ox[n])?!!e[n]:!1}function Qf(){return Bx}var Ux=ft({},ya,{key:function(n){if(n.key){var e=zx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=$l(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(n){return n.type==="keypress"?$l(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$l(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hx=dn(Ux),Vx=ft({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=dn(Vx),Gx=ft({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),Wx=dn(Gx),qx=ft({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xx=dn(qx),jx=ft({},Au,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=dn(jx),Yx=[9,13,27,32],Kf=yi&&"CompositionEvent"in window,jo=null;yi&&"documentMode"in document&&(jo=document.documentMode);var Jx=yi&&"TextEvent"in window&&!jo,Gg=yi&&(!Kf||jo&&8<jo&&11>=jo),vm=String.fromCharCode(32),ym=!1;function Wg(n,e){switch(n){case"keyup":return Yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function Zx(n,e){switch(n){case"compositionend":return qg(e);case"keypress":return e.which!==32?null:(ym=!0,vm);case"textInput":return n=e.data,n===vm&&ym?null:n;default:return null}}function Qx(n,e){if(fs)return n==="compositionend"||!Kf&&Wg(n,e)?(n=Vg(),jl=Jf=Vi=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Kx[n.type]:e==="textarea"}function Xg(n,e,t,i){Sg(i),e=lu(e,"onChange"),0<e.length&&(t=new Zf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var $o=null,oa=null;function e3(n){i1(n,0)}function Cu(n){var e=ms(n);if(gg(e))return n}function t3(n,e){if(n==="change")return e}var jg=!1;yi&&(yi?(Nl="oninput"in document,Nl||(Nh=document.createElement("div"),Nh.setAttribute("oninput","return;"),Nl=typeof Nh.oninput=="function"),Dl=Nl):Dl=!1,jg=Dl&&(!document.documentMode||9<document.documentMode));var Dl,Nl,Nh;function _m(){$o&&($o.detachEvent("onpropertychange",$g),oa=$o=null)}function $g(n){if(n.propertyName==="value"&&Cu(oa)){var e=[];Xg(e,oa,n,qf(n)),Ag(e3,e)}}function n3(n,e,t){n==="focusin"?(_m(),$o=e,oa=t,$o.attachEvent("onpropertychange",$g)):n==="focusout"&&_m()}function i3(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cu(oa)}function r3(n,e){if(n==="click")return Cu(e)}function s3(n,e){if(n==="input"||n==="change")return Cu(e)}function o3(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Un=typeof Object.is=="function"?Object.is:o3;function aa(n,e){if(Un(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!jh.call(e,r)||!Un(n[r],e[r]))return!1}return!0}function wm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mm(n,e){var t=wm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=wm(t)}}function Yg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Yg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var n=window,e=tu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=tu(n.document)}return e}function ed(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function a3(n){var e=Jg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Yg(t.ownerDocument.documentElement,t)){if(i!==null&&ed(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Mm(t,s);var o=Mm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var l3=yi&&"documentMode"in document&&11>=document.documentMode,ds=null,df=null,Yo=null,pf=!1;function Sm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pf||ds==null||ds!==tu(i)||(i=ds,"selectionStart"in i&&ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&aa(Yo,i)||(Yo=i,i=lu(df,"onSelect"),0<i.length&&(e=new Zf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ds)))}function Fl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ps={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Fh={},Zg={};yi&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Ru(n){if(Fh[n])return Fh[n];if(!ps[n])return n;var e=ps[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Zg)return Fh[n]=e[t];return n}var Qg=Ru("animationend"),Kg=Ru("animationiteration"),e1=Ru("animationstart"),t1=Ru("transitionend"),n1=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(n,e){n1.set(n,e),kr(e,[n])}for(zl=0;zl<Em.length;zl++)kl=Em[zl],bm=kl.toLowerCase(),Tm=kl[0].toUpperCase()+kl.slice(1),Ki(bm,"on"+Tm);var kl,bm,Tm,zl;Ki(Qg,"onAnimationEnd");Ki(Kg,"onAnimationIteration");Ki(e1,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(t1,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Am(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ux(i,e,void 0,n),n.currentTarget=null}function i1(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Am(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Am(r,a,u),s=l}}}if(iu)throw n=uf,iu=!1,uf=null,n}function st(n,e){var t=e[xf];t===void 0&&(t=e[xf]=new Set);var i=n+"__bubble";t.has(i)||(r1(e,n,2,!1),t.add(i))}function zh(n,e,t){var i=0;e&&(i|=4),r1(t,n,i,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function la(n){if(!n[Ol]){n[Ol]=!0,hg.forEach(function(t){t!=="selectionchange"&&(u3.has(t)||zh(t,!1,n),zh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,zh("selectionchange",!1,e))}}function r1(n,e,t,i){switch(Hg(e)){case 1:var r=bx;break;case 4:r=Tx;break;default:r=Yf}t=r.bind(null,e,t,n),r=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function kh(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ag(function(){var u=s,c=qf(t),f=[];e:{var h=n1.get(n);if(h!==void 0){var d=Zf,m=n;switch(n){case"keypress":if($l(t)===0)break e;case"keydown":case"keyup":d=Hx;break;case"focusin":m="focus",d=Dh;break;case"focusout":m="blur",d=Dh;break;case"beforeblur":case"afterblur":d=Dh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Wx;break;case Qg:case Kg:case e1:d=Ix;break;case t1:d=Xx;break;case"scroll":d=Ax;break;case"wheel":d=$x;break;case"copy":case"cut":case"paste":d=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=gm}var p=(e&4)!==0,g=!p&&n==="scroll",v=p?h!==null?h+"Capture":null:h;p=[];for(var y=u,x;y!==null;){x=y;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,v!==null&&(_=na(y,v),_!=null&&p.push(ua(y,_,x)))),g)break;y=y.return}0<p.length&&(h=new d(h,m,null,t,c),f.push({event:h,listeners:p}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",h&&t!==of&&(m=t.relatedTarget||t.fromElement)&&(Cr(m)||m[xi]))break e;if((d||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,d?(m=t.relatedTarget||t.toElement,d=u,m=m?Cr(m):null,m!==null&&(g=Or(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=u),d!==m)){if(p=pm,_="onMouseLeave",v="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(p=gm,_="onPointerLeave",v="onPointerEnter",y="pointer"),g=d==null?h:ms(d),x=m==null?h:ms(m),h=new p(_,y+"leave",d,t,c),h.target=g,h.relatedTarget=x,_=null,Cr(c)===u&&(p=new p(v,y+"enter",m,t,c),p.target=x,p.relatedTarget=g,_=p),g=_,d&&m)t:{for(p=d,v=m,y=0,x=p;x;x=us(x))y++;for(x=0,_=v;_;_=us(_))x++;for(;0<y-x;)p=us(p),y--;for(;0<x-y;)v=us(v),x--;for(;y--;){if(p===v||v!==null&&p===v.alternate)break t;p=us(p),v=us(v)}p=null}else p=null;d!==null&&Cm(f,h,d,p,!1),m!==null&&g!==null&&Cm(f,g,m,p,!0)}}e:{if(h=u?ms(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var S=t3;else if(xm(h))if(jg)S=s3;else{S=i3;var T=n3}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=r3);if(S&&(S=S(n,u))){Xg(f,S,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ef(h,"number",h.value)}switch(T=u?ms(u):window,n){case"focusin":(xm(T)||T.contentEditable==="true")&&(ds=T,df=u,Yo=null);break;case"focusout":Yo=df=ds=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Sm(f,t,c);break;case"selectionchange":if(l3)break;case"keydown":case"keyup":Sm(f,t,c)}var R;if(Kf)e:{switch(n){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else fs?Wg(n,t)&&(w="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(Gg&&t.locale!=="ko"&&(fs||w!=="onCompositionStart"?w==="onCompositionEnd"&&fs&&(R=Vg()):(Vi=c,Jf="value"in Vi?Vi.value:Vi.textContent,fs=!0)),T=lu(u,w),0<T.length&&(w=new mm(w,n,null,t,c),f.push({event:w,listeners:T}),R?w.data=R:(R=qg(t),R!==null&&(w.data=R)))),(R=Jx?Zx(n,t):Qx(n,t))&&(u=lu(u,"onBeforeInput"),0<u.length&&(c=new mm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=R))}i1(f,e)})}function ua(n,e,t){return{instance:n,listener:e,currentTarget:t}}function lu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(n,t),s!=null&&i.unshift(ua(n,s,r)),s=na(n,e),s!=null&&i.push(ua(n,s,r))),n=n.return}return i}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=na(t,s),l!=null&&o.unshift(ua(t,l,a))):r||(l=na(t,s),l!=null&&o.push(ua(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var c3=/\r\n?/g,h3=/\u0000|\uFFFD/g;function Rm(n){return(typeof n=="string"?n:""+n).replace(c3,`
`).replace(h3,"")}function Bl(n,e,t){if(e=Rm(e),Rm(n)!==e&&t)throw Error(Z(425))}function uu(){}var mf=null,gf=null;function vf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,f3=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,d3=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(n){return Lm.resolve(null).then(n).catch(p3)}:yf;function p3(n){setTimeout(function(){throw n})}function Oh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),sa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);sa(e)}function pi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Pm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),ii="__reactFiber$"+Fs,ca="__reactProps$"+Fs,xi="__reactContainer$"+Fs,xf="__reactEvents$"+Fs,m3="__reactListeners$"+Fs,g3="__reactHandles$"+Fs;function Cr(n){var e=n[ii];if(e)return e;for(var t=n.parentNode;t;){if(e=t[xi]||t[ii]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Pm(n);n!==null;){if(t=n[ii])return t;n=Pm(n)}return e}n=t,t=n.parentNode}return null}function xa(n){return n=n[ii]||n[xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Z(33))}function Lu(n){return n[ca]||null}var _f=[],gs=-1;function er(n){return{current:n}}function ot(n){0>gs||(n.current=_f[gs],_f[gs]=null,gs--)}function nt(n,e){gs++,_f[gs]=n.current,n.current=e}var Zi={},Vt=er(Zi),rn=er(!1),Ir=Zi;function Rs(n,e){var t=n.type.contextTypes;if(!t)return Zi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function sn(n){return n=n.childContextTypes,n!=null}function cu(){ot(rn),ot(Vt)}function Im(n,e,t){if(Vt.current!==Zi)throw Error(Z(168));nt(Vt,e),nt(rn,t)}function s1(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,nx(n)||"Unknown",r));return ft({},t,i)}function hu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zi,Ir=Vt.current,nt(Vt,n),nt(rn,rn.current),!0}function Dm(n,e,t){var i=n.stateNode;if(!i)throw Error(Z(169));t?(n=s1(n,e,Ir),i.__reactInternalMemoizedMergedChildContext=n,ot(rn),ot(Vt),nt(Vt,n)):ot(rn),nt(rn,t)}var di=null,Pu=!1,Bh=!1;function o1(n){di===null?di=[n]:di.push(n)}function v3(n){Pu=!0,o1(n)}function tr(){if(!Bh&&di!==null){Bh=!0;var n=0,e=Je;try{var t=di;for(Je=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}di=null,Pu=!1}catch(r){throw di!==null&&(di=di.slice(n+1)),Pg(Xf,tr),r}finally{Je=e,Bh=!1}}return null}var y3=wi.ReactCurrentBatchConfig;function Fn(n,e){if(n&&n.defaultProps){e=ft({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var fu=er(null),du=null,vs=null,td=null;function nd(){td=vs=du=null}function id(n){var e=fu.current;ot(fu),n._currentValue=e}function wf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ts(n,e){du=n,td=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(nn=!0),n.firstContext=null)}function Tn(n){var e=n._currentValue;if(td!==n)if(n={context:n,memoizedValue:e,next:null},vs===null){if(du===null)throw Error(Z(308));vs=n,du.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return e}var On=null,Bi=!1;function rd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(n,e){var t=n.updateQueue;t!==null&&(t=t.shared,J1(n)?(n=t.interleaved,n===null?(e.next=e,On===null?On=[t]:On.push(t)):(e.next=n.next,n.next=e),t.interleaved=e):(n=t.pending,n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e))}function Yl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jf(n,t)}}function Nm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pu(n,e,t,i){var r=n.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,d=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,p=a;switch(h=e,d=t,p.tag){case 1:if(m=p.payload,typeof m=="function"){f=m.call(d,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=p.payload,h=typeof m=="function"?m.call(d,f,h):m,h==null)break e;f=ft({},f,h);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=f):c=c.next=d,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,n.lanes=o,n.memoizedState=f}}function Fm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var l1=new cg.Component().refs;function Mf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ft({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Iu={isMounted:function(n){return(n=n._reactInternals)?Or(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=$t(),r=Yi(n),s=vi(i,r);s.payload=e,t!=null&&(s.callback=t),ji(n,s),e=bn(n,r,i),e!==null&&Yl(e,n,r)},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=$t(),r=Yi(n),s=vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),ji(n,s),e=bn(n,r,i),e!==null&&Yl(e,n,r)},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$t(),i=Yi(n),r=vi(t,i);r.tag=2,e!=null&&(r.callback=e),ji(n,r),e=bn(n,i,t),e!==null&&Yl(e,n,i)}};function zm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(t,i)||!aa(r,s):!0}function u1(n,e,t){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=sn(e)?Ir:Vt.current,i=e.contextTypes,s=(i=i!=null)?Rs(n,r):Zi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function km(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Iu.enqueueReplaceState(e,e.state,null)}function Sf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=l1,rd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=sn(e)?Ir:Vt.current,r.context=Rs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Iu.enqueueReplaceState(r,r.state,null),pu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}var ys=[],xs=0,mu=null,gu=0,wn=[],Mn=0,Dr=null,mi=1,gi="";function Tr(n,e){ys[xs++]=gu,ys[xs++]=mu,mu=n,gu=e}function c1(n,e,t){wn[Mn++]=mi,wn[Mn++]=gi,wn[Mn++]=Dr,Dr=n;var i=mi;n=gi;var r=32-Bn(i)-1;i&=~(1<<r),t+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-Bn(e)+r|t<<r|i,gi=s+n}else mi=1<<s|t<<r|i,gi=n}function sd(n){n.return!==null&&(Tr(n,1),c1(n,1,0))}function od(n){for(;n===mu;)mu=ys[--xs],ys[xs]=null,gu=ys[--xs],ys[xs]=null;for(;n===Dr;)Dr=wn[--Mn],wn[Mn]=null,gi=wn[--Mn],wn[Mn]=null,mi=wn[--Mn],wn[Mn]=null}var hn=null,tn=null,at=!1,kn=null;function h1(n,e){var t=Sn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Om(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hn=n,tn=pi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hn=n,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Dr!==null?{id:mi,overflow:gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Sn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hn=n,tn=null,!0):!1;default:return!1}}function Ef(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bf(n){if(at){var e=tn;if(e){var t=e;if(!Om(n,e)){if(Ef(n))throw Error(Z(418));e=pi(t.nextSibling);var i=hn;e&&Om(n,e)?h1(i,t):(n.flags=n.flags&-4097|2,at=!1,hn=n)}}else{if(Ef(n))throw Error(Z(418));n.flags=n.flags&-4097|2,at=!1,hn=n}}}function Bm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function zo(n){if(n!==hn)return!1;if(!at)return Bm(n),at=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vf(n.type,n.memoizedProps)),e&&(e=tn)){if(Ef(n)){for(n=tn;n;)n=pi(n.nextSibling);throw Error(Z(418))}for(;e;)h1(n,e),e=pi(e.nextSibling)}if(Bm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Z(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){tn=pi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}tn=null}}else tn=hn?pi(n.stateNode.nextSibling):null;return!0}function Ls(){tn=hn=null,at=!1}function ad(n){kn===null?kn=[n]:kn.push(n)}function ko(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Z(309));var i=t.stateNode}if(!i)throw Error(Z(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===l1&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Z(284));if(!t._owner)throw Error(Z(290,n))}return n}function Ul(n,e){throw n=Object.prototype.toString.call(e),Error(Z(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Um(n){var e=n._init;return e(n._payload)}function f1(n){function e(v,y){if(n){var x=v.deletions;x===null?(v.deletions=[y],v.flags|=16):x.push(y)}}function t(v,y){if(!n)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function i(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function r(v,y){return v=Qi(v,y),v.index=0,v.sibling=null,v}function s(v,y,x){return v.index=x,n?(x=v.alternate,x!==null?(x=x.index,x<y?(v.flags|=2,y):x):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return n&&v.alternate===null&&(v.flags|=2),v}function a(v,y,x,_){return y===null||y.tag!==6?(y=qh(x,v.mode,_),y.return=v,y):(y=r(y,x),y.return=v,y)}function l(v,y,x,_){var S=x.type;return S===hs?c(v,y,x.props.children,_,x.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oi&&Um(S)===y.type)?(_=r(y,x.props),_.ref=ko(v,y,x),_.return=v,_):(_=eu(x.type,x.key,x.props,null,v.mode,_),_.ref=ko(v,y,x),_.return=v,_)}function u(v,y,x,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Xh(x,v.mode,_),y.return=v,y):(y=r(y,x.children||[]),y.return=v,y)}function c(v,y,x,_,S){return y===null||y.tag!==7?(y=Pr(x,v.mode,_,S),y.return=v,y):(y=r(y,x),y.return=v,y)}function f(v,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qh(""+y,v.mode,x),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tl:return x=eu(y.type,y.key,y.props,null,v.mode,x),x.ref=ko(v,null,y),x.return=v,x;case cs:return y=Xh(y,v.mode,x),y.return=v,y;case Oi:var _=y._init;return f(v,_(y._payload),x)}if(Vo(y)||Io(y))return y=Pr(y,v.mode,x,null),y.return=v,y;Ul(v,y)}return null}function h(v,y,x,_){var S=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(v,y,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:return x.key===S?l(v,y,x,_):null;case cs:return x.key===S?u(v,y,x,_):null;case Oi:return S=x._init,h(v,y,S(x._payload),_)}if(Vo(x)||Io(x))return S!==null?null:c(v,y,x,_,null);Ul(v,x)}return null}function d(v,y,x,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(x)||null,a(y,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Tl:return v=v.get(_.key===null?x:_.key)||null,l(y,v,_,S);case cs:return v=v.get(_.key===null?x:_.key)||null,u(y,v,_,S);case Oi:var T=_._init;return d(v,y,x,T(_._payload),S)}if(Vo(_)||Io(_))return v=v.get(x)||null,c(y,v,_,S,null);Ul(y,_)}return null}function m(v,y,x,_){for(var S=null,T=null,R=y,w=y=0,C=null;R!==null&&w<x.length;w++){R.index>w?(C=R,R=null):C=R.sibling;var P=h(v,R,x[w],_);if(P===null){R===null&&(R=C);break}n&&R&&P.alternate===null&&e(v,R),y=s(P,y,w),T===null?S=P:T.sibling=P,T=P,R=C}if(w===x.length)return t(v,R),at&&Tr(v,w),S;if(R===null){for(;w<x.length;w++)R=f(v,x[w],_),R!==null&&(y=s(R,y,w),T===null?S=R:T.sibling=R,T=R);return at&&Tr(v,w),S}for(R=i(v,R);w<x.length;w++)C=d(R,v,w,x[w],_),C!==null&&(n&&C.alternate!==null&&R.delete(C.key===null?w:C.key),y=s(C,y,w),T===null?S=C:T.sibling=C,T=C);return n&&R.forEach(function(I){return e(v,I)}),at&&Tr(v,w),S}function p(v,y,x,_){var S=Io(x);if(typeof S!="function")throw Error(Z(150));if(x=S.call(x),x==null)throw Error(Z(151));for(var T=S=null,R=y,w=y=0,C=null,P=x.next();R!==null&&!P.done;w++,P=x.next()){R.index>w?(C=R,R=null):C=R.sibling;var I=h(v,R,P.value,_);if(I===null){R===null&&(R=C);break}n&&R&&I.alternate===null&&e(v,R),y=s(I,y,w),T===null?S=I:T.sibling=I,T=I,R=C}if(P.done)return t(v,R),at&&Tr(v,w),S;if(R===null){for(;!P.done;w++,P=x.next())P=f(v,P.value,_),P!==null&&(y=s(P,y,w),T===null?S=P:T.sibling=P,T=P);return at&&Tr(v,w),S}for(R=i(v,R);!P.done;w++,P=x.next())P=d(R,v,w,P.value,_),P!==null&&(n&&P.alternate!==null&&R.delete(P.key===null?w:P.key),y=s(P,y,w),T===null?S=P:T.sibling=P,T=P);return n&&R.forEach(function(ee){return e(v,ee)}),at&&Tr(v,w),S}function g(v,y,x,_){if(typeof x=="object"&&x!==null&&x.type===hs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:e:{for(var S=x.key,T=y;T!==null;){if(T.key===S){if(S=x.type,S===hs){if(T.tag===7){t(v,T.sibling),y=r(T,x.props.children),y.return=v,v=y;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oi&&Um(S)===T.type){t(v,T.sibling),y=r(T,x.props),y.ref=ko(v,T,x),y.return=v,v=y;break e}t(v,T);break}else e(v,T);T=T.sibling}x.type===hs?(y=Pr(x.props.children,v.mode,_,x.key),y.return=v,v=y):(_=eu(x.type,x.key,x.props,null,v.mode,_),_.ref=ko(v,y,x),_.return=v,v=_)}return o(v);case cs:e:{for(T=x.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){t(v,y.sibling),y=r(y,x.children||[]),y.return=v,v=y;break e}else{t(v,y);break}else e(v,y);y=y.sibling}y=Xh(x,v.mode,_),y.return=v,v=y}return o(v);case Oi:return T=x._init,g(v,y,T(x._payload),_)}if(Vo(x))return m(v,y,x,_);if(Io(x))return p(v,y,x,_);Ul(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(t(v,y.sibling),y=r(y,x),y.return=v,v=y):(t(v,y),y=qh(x,v.mode,_),y.return=v,v=y),o(v)):t(v,y)}return g}var Ps=f1(!0),d1=f1(!1),_a={},si=er(_a),ha=er(_a),fa=er(_a);function Rr(n){if(n===_a)throw Error(Z(174));return n}function ld(n,e){switch(nt(fa,e),nt(ha,n),nt(si,_a),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=nf(e,n)}ot(si),nt(si,e)}function Is(){ot(si),ot(ha),ot(fa)}function p1(n){Rr(fa.current);var e=Rr(si.current),t=nf(e,n.type);e!==t&&(nt(ha,n),nt(si,t))}function ud(n){ha.current===n&&(ot(si),ot(ha))}var ct=er(0);function vu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uh=[];function cd(){for(var n=0;n<Uh.length;n++)Uh[n]._workInProgressVersionPrimary=null;Uh.length=0}var Jl=wi.ReactCurrentDispatcher,Hh=wi.ReactCurrentBatchConfig,Nr=0,ht=null,Et=null,Rt=null,yu=!1,Jo=!1,da=0,x3=0;function Bt(){throw Error(Z(321))}function hd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Un(n[t],e[t]))return!1;return!0}function fd(n,e,t,i,r,s){if(Nr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=n===null||n.memoizedState===null?S3:E3,n=t(i,r),Jo){s=0;do{if(Jo=!1,da=0,25<=s)throw Error(Z(301));s+=1,Rt=Et=null,e.updateQueue=null,Jl.current=b3,n=t(i,r)}while(Jo)}if(Jl.current=xu,e=Et!==null&&Et.next!==null,Nr=0,Rt=Et=ht=null,yu=!1,e)throw Error(Z(300));return n}function dd(){var n=da!==0;return da=0,n}function ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ht.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function An(){if(Et===null){var n=ht.alternate;n=n!==null?n.memoizedState:null}else n=Et.next;var e=Rt===null?ht.memoizedState:Rt.next;if(e!==null)Rt=e,Et=n;else{if(n===null)throw Error(Z(310));Et=n,n={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?ht.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function pa(n,e){return typeof e=="function"?e(n):e}function Vh(n){var e=An(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=Et,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Un(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ht.lanes|=s,Fr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Gh(n){var e=An(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Un(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function m1(){}function g1(n,e){var t=ht,i=An(),r=e(),s=!Un(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,pd(x1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(t.flags|=2048,ma(9,y1.bind(null,t,i,r,e),void 0,null),Tt===null)throw Error(Z(349));(Nr&30)!==0||v1(t,e,r)}return r}function v1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function y1(n,e,t,i){e.value=t,e.getSnapshot=i,_1(e)&&bn(n,1,-1)}function x1(n,e,t){return t(function(){_1(e)&&bn(n,1,-1)})}function _1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Un(n,t)}catch{return!0}}function Hm(n){var e=ni();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},e.queue=n,n=n.dispatch=M3.bind(null,ht,n),[e.memoizedState,n]}function ma(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function w1(){return An().memoizedState}function Zl(n,e,t,i){var r=ni();ht.flags|=n,r.memoizedState=ma(1|e,t,void 0,i===void 0?null:i)}function Du(n,e,t,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&hd(i,o.deps)){r.memoizedState=ma(e,t,s,i);return}}ht.flags|=n,r.memoizedState=ma(1|e,t,s,i)}function Vm(n,e){return Zl(8390656,8,n,e)}function pd(n,e){return Du(2048,8,n,e)}function M1(n,e){return Du(4,2,n,e)}function S1(n,e){return Du(4,4,n,e)}function E1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function b1(n,e,t){return t=t!=null?t.concat([n]):null,Du(4,4,E1.bind(null,e,n),t)}function md(){}function T1(n,e){var t=An();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function A1(n,e){var t=An();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function C1(n,e,t){return(Nr&21)===0?(n.baseState&&(n.baseState=!1,nn=!0),n.memoizedState=t):(Un(t,e)||(t=Ng(),ht.lanes|=t,Fr|=t,n.baseState=!0),e)}function _3(n,e){var t=Je;Je=t!==0&&4>t?t:4,n(!0);var i=Hh.transition;Hh.transition={};try{n(!1),e()}finally{Je=t,Hh.transition=i}}function R1(){return An().memoizedState}function w3(n,e,t){var i=Yi(n);t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},L1(n)?P1(e,t):(I1(n,e,t),t=$t(),n=bn(n,i,t),n!==null&&D1(n,e,i))}function M3(n,e,t){var i=Yi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(L1(n))P1(e,r);else{I1(n,e,r);var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Un(a,o))return}catch{}finally{}t=$t(),n=bn(n,i,t),n!==null&&D1(n,e,i)}}function L1(n){var e=n.alternate;return n===ht||e!==null&&e===ht}function P1(n,e){Jo=yu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function I1(n,e,t){J1(n)?(n=e.interleaved,n===null?(t.next=t,On===null?On=[e]:On.push(e)):(t.next=n.next,n.next=t),e.interleaved=t):(n=e.pending,n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t)}function D1(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jf(n,t)}}var xu={readContext:Tn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},S3={readContext:Tn,useCallback:function(n,e){return ni().memoizedState=[n,e===void 0?null:e],n},useContext:Tn,useEffect:Vm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Zl(4194308,4,E1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Zl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Zl(4,2,n,e)},useMemo:function(n,e){var t=ni();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ni();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=w3.bind(null,ht,n),[i.memoizedState,n]},useRef:function(n){var e=ni();return n={current:n},e.memoizedState=n},useState:Hm,useDebugValue:md,useDeferredValue:function(n){return ni().memoizedState=n},useTransition:function(){var n=Hm(!1),e=n[0];return n=_3.bind(null,n[1]),ni().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ht,r=ni();if(at){if(t===void 0)throw Error(Z(407));t=t()}else{if(t=e(),Tt===null)throw Error(Z(349));(Nr&30)!==0||v1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Vm(x1.bind(null,i,s,n),[n]),i.flags|=2048,ma(9,y1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ni(),e=Tt.identifierPrefix;if(at){var t=gi,i=mi;t=(i&~(1<<32-Bn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=da++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=x3++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},E3={readContext:Tn,useCallback:T1,useContext:Tn,useEffect:pd,useImperativeHandle:b1,useInsertionEffect:M1,useLayoutEffect:S1,useMemo:A1,useReducer:Vh,useRef:w1,useState:function(){return Vh(pa)},useDebugValue:md,useDeferredValue:function(n){var e=An();return C1(e,Et.memoizedState,n)},useTransition:function(){var n=Vh(pa)[0],e=An().memoizedState;return[n,e]},useMutableSource:m1,useSyncExternalStore:g1,useId:R1,unstable_isNewReconciler:!1},b3={readContext:Tn,useCallback:T1,useContext:Tn,useEffect:pd,useImperativeHandle:b1,useInsertionEffect:M1,useLayoutEffect:S1,useMemo:A1,useReducer:Gh,useRef:w1,useState:function(){return Gh(pa)},useDebugValue:md,useDeferredValue:function(n){var e=An();return Et===null?e.memoizedState=n:C1(e,Et.memoizedState,n)},useTransition:function(){var n=Gh(pa)[0],e=An().memoizedState;return[n,e]},useMutableSource:m1,useSyncExternalStore:g1,useId:R1,unstable_isNewReconciler:!1};function gd(n,e){try{var t="",i=e;do t+=tx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r}}function Tf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var T3=typeof WeakMap=="function"?WeakMap:Map;function N1(n,e,t){t=vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){wu||(wu=!0,Ff=i),Tf(n,e)},t}function F1(n,e,t){t=vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Tf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Tf(n,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Gm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new T3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=B3.bind(null,n,e,t),e.then(n,n))}function Wm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function qm(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=vi(-1,1),e.tag=2,ji(t,e))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var z1,Af,k1,O1;z1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Af=function(){};k1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Rr(si.current);var s=null;switch(t){case"input":r=Qh(n,r),i=Qh(n,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=tf(n,r),i=tf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=uu)}rf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};O1=function(n,e,t,i){t!==i&&(e.flags|=4)};function Oo(n,e){if(!at)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ut(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function A3(n,e,t){var i=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return sn(e.type)&&cu(),Ut(e),null;case 3:return i=e.stateNode,Is(),ot(rn),ot(Vt),cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(zo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,kn!==null&&(Of(kn),kn=null))),Af(n,e),Ut(e),null;case 5:ud(e);var r=Rr(fa.current);if(t=e.type,n!==null&&e.stateNode!=null)k1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Ut(e),null}if(n=Rr(si.current),zo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[ca]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)st(Wo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":rm(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":om(i,s),st("invalid",i)}rf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bl(i.textContent,a,n),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":Al(i),sm(i,s,!0);break;case"textarea":Al(i),am(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=uu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ii]=e,n[ca]=i,z1(n,e,!1,!1),e.stateNode=n;e:{switch(o=sf(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)st(Wo[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":rm(n,i),r=Qh(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),st("invalid",n);break;case"textarea":om(n,i),r=tf(n,i),st("invalid",n);break;default:r=i}rf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_g(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ta(n,l):typeof l=="number"&&ta(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&Hf(n,s,l,o))}switch(t){case"input":Al(n),sm(n,i,!1);break;case"textarea":Al(n),am(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ji(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ms(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=uu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(n&&e.stateNode!=null)O1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(t=Rr(fa.current),Rr(si.current),zo(e)){if(i=e.stateNode,t=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==t)&&(n=hn,n!==null))switch(n.tag){case 3:Bl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Bl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Ut(e),null;case 13:if(ot(ct),i=e.memoizedState,at&&tn!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(i=tn;i;)i=pi(i.nextSibling);return Ls(),e.flags|=98560,e}if(i!==null&&i.dehydrated!==null){if(i=zo(e),n===null){if(!i)throw Error(Z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[ii]=e}else Ls(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ut(e),null}return kn!==null&&(Of(kn),kn=null),(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,t=!1,n===null?zo(e):t=n.memoizedState!==null,i!==t&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(ct.current&1)!==0?bt===0&&(bt=3):Md())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Is(),Af(n,e),n===null&&la(e.stateNode.containerInfo),Ut(e),null;case 10:return id(e.type._context),Ut(e),null;case 17:return sn(e.type)&&cu(),Ut(e),null;case 19:if(ot(ct),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(bt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=vu(n),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return nt(ct,ct.current&1|2),e.child}n=n.sibling}s.tail!==null&&vt()>Ds&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(n=vu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ut(e),null}else 2*vt()-s.renderingStartTime>Ds&&t!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,t=ct.current,nt(ct,i?t&1|2:t&1),e):(Ut(e),null);case 22:case 23:return wd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(cn&1073741824)!==0&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}var C3=wi.ReactCurrentOwner,nn=!1;function jt(n,e,t,i){e.child=n===null?d1(e,null,t,i):Ps(e,n.child,t,i)}function Xm(n,e,t,i,r){t=t.render;var s=e.ref;return Ts(e,r),i=fd(n,e,t,i,s,r),t=dd(),n!==null&&!nn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,_i(n,e,r)):(at&&t&&sd(e),e.flags|=1,jt(n,e,i,r),e.child)}function jm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Sd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,B1(n,e,s,i,r)):(n=eu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:aa,t(o,i)&&n.ref===e.ref)return _i(n,e,r)}return e.flags|=1,n=Qi(s,i),n.ref=e.ref,n.return=e,e.child=n}function B1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(aa(s,i)&&n.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(nn=!0);else return e.lanes=n.lanes,_i(n,e,r)}return Cf(n,e,t,i,r)}function U1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ws,cn),cn|=t;else if((t&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,nt(ws,cn),cn|=i;else return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,nt(ws,cn),cn|=n,null;else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,nt(ws,cn),cn|=i;return jt(n,e,r,t),e.child}function H1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cf(n,e,t,i,r){var s=sn(t)?Ir:Vt.current;return s=Rs(e,s),Ts(e,r),t=fd(n,e,t,i,s,r),i=dd(),n!==null&&!nn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,_i(n,e,r)):(at&&i&&sd(e),e.flags|=1,jt(n,e,t,r),e.child)}function $m(n,e,t,i,r){if(sn(t)){var s=!0;hu(e)}else s=!1;if(Ts(e,r),e.stateNode===null)n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),u1(e,t,i),Sf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=sn(t)?Ir:Vt.current,u=Rs(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&km(e,o,i,u),Bi=!1;var h=e.memoizedState;o.state=h,pu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||Bi?(typeof c=="function"&&(Mf(e,t,c,i),l=e.memoizedState),(a=Bi||zm(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,a1(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=sn(t)?Ir:Vt.current,l=Rs(e,l));var d=t.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&km(e,o,i,l),Bi=!1,h=e.memoizedState,o.state=h,pu(e,i,o,r);var m=e.memoizedState;a!==f||h!==m||rn.current||Bi?(typeof d=="function"&&(Mf(e,t,d,i),m=e.memoizedState),(u=Bi||zm(e,t,u,i,h,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Rf(n,e,t,i,s,r)}function Rf(n,e,t,i,r,s){H1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Dm(e,t,!1),_i(n,e,s);i=e.stateNode,C3.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ps(e,n.child,null,s),e.child=Ps(e,null,a,s)):jt(n,e,a,s),e.memoizedState=i.state,r&&Dm(e,t,!0),e.child}function V1(n){var e=n.stateNode;e.pendingContext?Im(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(n,e.context,!1),ld(n,e.containerInfo)}function Ym(n,e,t,i,r){return Ls(),ad(r),e.flags|=256,jt(n,e,t,i),e.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Vl(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jm(n,e){return{baseLanes:n.baseLanes|e,cachePool:null,transitions:n.transitions}}function G1(n,e,t){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),nt(ct,r&1),n===null)return bf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(r=i.children,n=i.fallback,s?(i=e.mode,s=e.child,r={mode:"hidden",children:r},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=r):s=Eu(r,i,0,null),n=Pr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Vl(t),e.memoizedState=Hl,n):Lf(e,r));if(r=n.memoizedState,r!==null){if(a=r.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,Gl(n,e,t,Error(Z(422)))):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Eu({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,t,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ps(e,n.child,null,t),e.child.memoizedState=Vl(t),e.memoizedState=Hl,s);if((e.mode&1)===0)e=Gl(n,e,t,null);else if(a.data==="$!")e=Gl(n,e,t,Error(Z(419)));else if(i=(t&n.childLanes)!==0,nn||i){if(i=Tt,i!==null){switch(t&-t){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}i=(s&(i.suspendedLanes|t))!==0?0:s,i!==0&&i!==r.retryLane&&(r.retryLane=i,bn(n,i,-1))}Md(),e=Gl(n,e,t,Error(Z(421)))}else a.data==="$?"?(e.flags|=128,e.child=n.child,e=U3.bind(null,n),a._reactRetry=e,e=null):(t=r.treeContext,tn=pi(a.nextSibling),hn=e,at=!0,kn=null,t!==null&&(wn[Mn++]=mi,wn[Mn++]=gi,wn[Mn++]=Dr,mi=t.id,gi=t.overflow,Dr=e),e=Lf(e,e.pendingProps.children),e.flags|=4096);return e}return s?(i=Qm(n,e,i.children,i.fallback,t),s=e.child,r=n.child.memoizedState,s.memoizedState=r===null?Vl(t):Jm(r,t),s.childLanes=n.childLanes&~t,e.memoizedState=Hl,i):(t=Zm(n,e,i.children,t),e.memoizedState=null,t)}return s?(i=Qm(n,e,i.children,i.fallback,t),s=e.child,r=n.child.memoizedState,s.memoizedState=r===null?Vl(t):Jm(r,t),s.childLanes=n.childLanes&~t,e.memoizedState=Hl,i):(t=Zm(n,e,i.children,t),e.memoizedState=null,t)}function Lf(n,e){return e=Eu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Zm(n,e,t,i){var r=n.child;return n=r.sibling,t=Qi(r,{mode:"visible",children:t}),(e.mode&1)===0&&(t.lanes=i),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t}function Qm(n,e,t,i,r){var s=e.mode;n=n.child;var o=n.sibling,a={mode:"hidden",children:t};return(s&1)===0&&e.child!==n?(t=e.child,t.childLanes=0,t.pendingProps=a,e.deletions=null):(t=Qi(n,a),t.subtreeFlags=n.subtreeFlags&14680064),o!==null?i=Qi(o,i):(i=Pr(i,s,r,null),i.flags|=2),i.return=e,t.return=e,t.sibling=i,e.child=t,i}function Gl(n,e,t,i){return i!==null&&ad(i),Ps(e,n.child,null,t),n=Lf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Km(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),wf(n.return,e,t)}function Wh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function W1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(n,e,i.children,t),i=ct.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Km(n,t,e);else if(n.tag===19)Km(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(nt(ct,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&vu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Wh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&vu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Wh(e,!0,t,null,s);break;case"together":Wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _i(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Fr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Z(153));if(e.child!==null){for(n=e.child,t=Qi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Qi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function R3(n,e,t){switch(e.tag){case 3:V1(e),Ls();break;case 5:p1(e);break;case 1:sn(e.type)&&hu(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(fu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ct,ct.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?G1(n,e,t):(nt(ct,ct.current&1),n=_i(n,e,t),n!==null?n.sibling:null);nt(ct,ct.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return W1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,U1(n,e,t)}return _i(n,e,t)}function L3(n,e){switch(od(e),e.tag){case 1:return sn(e.type)&&cu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Is(),ot(rn),ot(Vt),cd(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return ud(e),null;case 13:if(ot(ct),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));Ls()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ot(ct),null;case 4:return Is(),null;case 10:return id(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Wl=!1,Ht=!1,P3=typeof WeakSet=="function"?WeakSet:Set,fe=null;function _s(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){mt(n,e,i)}else t.current=null}function Pf(n,e,t){try{t()}catch(i){mt(n,e,i)}}var eg=!1;function I3(n,e){if(mf=ou,n=Jg(),ed(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var d;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gf={focusedElem:n,selectionRange:t},ou=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var p=m.memoizedProps,g=m.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?p:Fn(e.type,p),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;if(x.nodeType===1)x.textContent="";else if(x.nodeType===9){var _=x.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(S){mt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return m=eg,eg=!1,m}function Zo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pf(e,t,s)}r=r.next}while(r!==i)}}function Nu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function If(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function q1(n){var e=n.alternate;e!==null&&(n.alternate=null,q1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ii],delete e[ca],delete e[xf],delete e[m3],delete e[g3])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function X1(n){return n.tag===5||n.tag===3||n.tag===4}function tg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||X1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Df(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=uu));else if(i!==4&&(n=n.child,n!==null))for(Df(n,e,t),n=n.sibling;n!==null;)Df(n,e,t),n=n.sibling}function Nf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Nf(n,e,t),n=n.sibling;n!==null;)Nf(n,e,t),n=n.sibling}var Dt=null,zn=!1;function ki(n,e,t){for(t=t.child;t!==null;)j1(n,e,t),t=t.sibling}function j1(n,e,t){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Tu,t)}catch{}switch(t.tag){case 5:Ht||_s(t,e);case 6:var i=Dt,r=zn;Dt=null,ki(n,e,t),Dt=i,zn=r,Dt!==null&&(zn?(n=Dt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Dt.removeChild(t.stateNode));break;case 18:Dt!==null&&(zn?(n=Dt,t=t.stateNode,n.nodeType===8?Oh(n.parentNode,t):n.nodeType===1&&Oh(n,t),sa(n)):Oh(Dt,t.stateNode));break;case 4:i=Dt,r=zn,Dt=t.stateNode.containerInfo,zn=!0,ki(n,e,t),Dt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Pf(t,e,o),r=r.next}while(r!==i)}ki(n,e,t);break;case 1:if(!Ht&&(_s(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){mt(t,e,a)}ki(n,e,t);break;case 21:ki(n,e,t);break;case 22:t.mode&1?(Ht=(i=Ht)||t.memoizedState!==null,ki(n,e,t),Ht=i):ki(n,e,t);break;default:ki(n,e,t)}}function ng(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new P3),e.forEach(function(i){var r=H3.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Nn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,zn=!1;break e;case 3:Dt=a.stateNode.containerInfo,zn=!0;break e;case 4:Dt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Dt===null)throw Error(Z(160));j1(s,o,r),Dt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$1(e,n),e=e.sibling}function $1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(e,n),ti(n),i&4){try{Zo(3,n,n.return),Nu(3,n)}catch(m){mt(n,n.return,m)}try{Zo(5,n,n.return)}catch(m){mt(n,n.return,m)}}break;case 1:Nn(e,n),ti(n),i&512&&t!==null&&_s(t,t.return);break;case 5:if(Nn(e,n),ti(n),i&512&&t!==null&&_s(t,t.return),n.flags&32){var r=n.stateNode;try{ta(r,"")}catch(m){mt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vg(r,s),sf(a,o);var u=sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Mg(r,f):c==="dangerouslySetInnerHTML"?_g(r,f):c==="children"?ta(r,f):Hf(r,c,f,u)}switch(a){case"input":Kh(r,s);break;case"textarea":yg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Ms(r,!!s.multiple,d,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[ca]=s}catch(m){mt(n,n.return,m)}}break;case 6:if(Nn(e,n),ti(n),i&4){if(n.stateNode===null)throw Error(Z(162));u=n.stateNode,c=n.memoizedProps;try{u.nodeValue=c}catch(m){mt(n,n.return,m)}}break;case 3:if(Nn(e,n),ti(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(m){mt(n,n.return,m)}break;case 4:Nn(e,n),ti(n);break;case 13:Nn(e,n),ti(n),u=n.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(xd=vt()),i&4&&ng(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Ht=(c=Ht)||u,Nn(e,n),Ht=c):Nn(e,n),ti(n),i&8192){c=n.memoizedState!==null;e:for(f=null,h=n;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wg("display",o))}catch(m){mt(n,n.return,m)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(m){mt(n,n.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}if(c&&!u&&(n.mode&1)!==0)for(fe=n,n=n.child;n!==null;){for(u=fe=n;fe!==null;){switch(c=fe,f=c.child,c.tag){case 0:case 11:case 14:case 15:Zo(4,c,c.return);break;case 1:if(_s(c,c.return),s=c.stateNode,typeof s.componentWillUnmount=="function"){h=c,d=c.return;try{r=h,s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(m){mt(h,d,m)}}break;case 5:_s(c,c.return);break;case 22:if(c.memoizedState!==null){rg(u);continue}}f!==null?(f.return=c,fe=f):rg(u)}n=n.sibling}}break;case 19:Nn(e,n),ti(n),i&4&&ng(n);break;case 21:break;default:Nn(e,n),ti(n)}}function ti(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(X1(t)){var i=t;break e}t=t.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=tg(n);Nf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tg(n);Df(n,a,o);break;default:throw Error(Z(161))}}catch(l){mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function D3(n,e,t){fe=n,Y1(n,e,t)}function Y1(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Wl;var u=Ht;if(Wl=o,(Ht=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?sg(r):l!==null?(l.return=o,fe=l):sg(r);for(;s!==null;)fe=s,Y1(s,e,t),s=s.sibling;fe=r,Wl=a,Ht=u}ig(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,fe=s):ig(n,e,t)}}function ig(n){for(;fe!==null;){var e=fe;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ht||Nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Fn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Fm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(Z(163))}Ht||e.flags&512&&If(e)}catch(h){mt(e,e.return,h)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function rg(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function sg(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Nu(4,e)}catch(l){mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{If(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{If(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var N3=Math.ceil,_u=wi.ReactCurrentDispatcher,vd=wi.ReactCurrentOwner,En=wi.ReactCurrentBatchConfig,He=0,Tt=null,wt=null,Nt=0,cn=0,ws=er(0),bt=0,ga=null,Fr=0,Fu=0,yd=0,Qo=null,en=null,xd=0,Ds=1/0,fi=null,wu=!1,Ff=null,$i=null,ql=!1,Gi=null,Mu=0,Ko=0,zf=null,Ql=-1,Kl=0;function $t(){return(He&6)!==0?vt():Ql!==-1?Ql:Ql=vt()}function Yi(n){return(n.mode&1)===0?1:(He&2)!==0&&Nt!==0?Nt&-Nt:y3.transition!==null?(Kl===0&&(Kl=Ng()),Kl):(n=Je,n!==0||(n=window.event,n=n===void 0?16:Hg(n.type)),n)}function bn(n,e,t){if(50<Ko)throw Ko=0,zf=null,Error(Z(185));var i=zu(n,e);return i===null?null:(va(i,e,t),((He&2)===0||i!==Tt)&&(i===Tt&&((He&2)===0&&(Fu|=e),bt===4&&Hi(i,Nt)),on(i,t),e===1&&He===0&&(n.mode&1)===0&&(Ds=vt()+500,Pu&&tr())),i)}function zu(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}function J1(n){return(Tt!==null||On!==null)&&(n.mode&1)!==0&&(He&2)===0}function on(n,e){var t=n.callbackNode;_x(n,e);var i=su(n,n===Tt?Nt:0);if(i===0)t!==null&&cm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&cm(t),e===1)n.tag===0?v3(og.bind(null,n)):o1(og.bind(null,n)),d3(function(){He===0&&tr()}),t=null;else{switch(Fg(i)){case 1:t=Xf;break;case 4:t=Ig;break;case 16:t=ru;break;case 536870912:t=Dg;break;default:t=ru}t=rv(t,Z1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Z1(n,e){if(Ql=-1,Kl=0,(He&6)!==0)throw Error(Z(327));var t=n.callbackNode;if(As()&&n.callbackNode!==t)return null;var i=su(n,n===Tt?Nt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Su(n,i);else{e=i;var r=He;He|=2;var s=K1();(Tt!==n||Nt!==e)&&(fi=null,Ds=vt()+500,Lr(n,e));do try{k3();break}catch(a){Q1(n,a)}while(1);nd(),_u.current=s,He=r,wt!==null?e=0:(Tt=null,Nt=0,e=bt)}if(e!==0){if(e===2&&(r=cf(n),r!==0&&(i=r,e=kf(n,r))),e===1)throw t=ga,Lr(n,0),Hi(n,i),on(n,vt()),t;if(e===6)Hi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!F3(r)&&(e=Su(n,i),e===2&&(s=cf(n),s!==0&&(i=s,e=kf(n,s))),e===1))throw t=ga,Lr(n,0),Hi(n,i),on(n,vt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Ar(n,en,fi);break;case 3:if(Hi(n,i),(i&130023424)===i&&(e=xd+500-vt(),10<e)){if(su(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){$t(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=yf(Ar.bind(null,n,en,fi),e);break}Ar(n,en,fi);break;case 4:if(Hi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*N3(i/1960))-i,10<i){n.timeoutHandle=yf(Ar.bind(null,n,en,fi),i);break}Ar(n,en,fi);break;case 5:Ar(n,en,fi);break;default:throw Error(Z(329))}}}return on(n,vt()),n.callbackNode===t?Z1.bind(null,n):null}function kf(n,e){var t=Qo;return n.current.memoizedState.isDehydrated&&(Lr(n,e).flags|=256),n=Su(n,e),n!==2&&(e=en,en=t,e!==null&&Of(e)),n}function Of(n){en===null?en=n:en.push.apply(en,n)}function F3(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Un(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(n,e){for(e&=~yd,e&=~Fu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Bn(e),i=1<<t;n[t]=-1,e&=~i}}function og(n){if((He&6)!==0)throw Error(Z(327));As();var e=su(n,0);if((e&1)===0)return on(n,vt()),null;var t=Su(n,e);if(n.tag!==0&&t===2){var i=cf(n);i!==0&&(e=i,t=kf(n,i))}if(t===1)throw t=ga,Lr(n,0),Hi(n,e),on(n,vt()),t;if(t===6)throw Error(Z(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ar(n,en,fi),on(n,vt()),null}function _d(n,e){var t=He;He|=1;try{return n(e)}finally{He=t,He===0&&(Ds=vt()+500,Pu&&tr())}}function zr(n){Gi!==null&&Gi.tag===0&&(He&6)===0&&As();var e=He;He|=1;var t=En.transition,i=Je;try{if(En.transition=null,Je=1,n)return n()}finally{Je=i,En.transition=t,He=e,(He&6)===0&&tr()}}function wd(){cn=ws.current,ot(ws)}function Lr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,f3(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cu();break;case 3:Is(),ot(rn),ot(Vt),cd();break;case 5:ud(i);break;case 4:Is();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:id(i.type._context);break;case 22:case 23:wd()}t=t.return}if(Tt=n,wt=n=Qi(n.current,null),Nt=cn=e,bt=0,ga=null,yd=Fu=Fr=0,en=Qo=null,On!==null){for(e=0;e<On.length;e++)if(t=On[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}On=null}return n}function Q1(n,e){do{var t=wt;try{if(nd(),Jl.current=xu,yu){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yu=!1}if(Nr=0,Rt=Et=ht=null,Jo=!1,da=0,vd.current=null,t===null||t.return===null){bt=1,ga=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=Wm(o);if(d!==null){d.flags&=-257,qm(d,o,a,s,e),d.mode&1&&Gm(s,u,e),e=d,l=u;var m=e.updateQueue;if(m===null){var p=new Set;p.add(l),e.updateQueue=p}else m.add(l);break e}else{if((e&1)===0){Gm(s,u,e),Md();break e}l=Error(Z(426))}}else if(at&&a.mode&1){var g=Wm(o);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),qm(g,o,a,s,e),ad(l);break e}}s=l,bt!==4&&(bt=2),Qo===null?Qo=[s]:Qo.push(s),l=gd(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var v=N1(a,l,e);Nm(a,v);break e;case 1:s=l;var y=a.type,x=a.stateNode;if((a.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&($i===null||!$i.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=F1(a,s,e);Nm(a,_);break e}}a=a.return}while(a!==null)}tv(t)}catch(S){e=S,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(1)}function K1(){var n=_u.current;return _u.current=xu,n===null?xu:n}function Md(){(bt===0||bt===3||bt===2)&&(bt=4),Tt===null||(Fr&268435455)===0&&(Fu&268435455)===0||Hi(Tt,Nt)}function Su(n,e){var t=He;He|=2;var i=K1();(Tt!==n||Nt!==e)&&(fi=null,Lr(n,e));do try{z3();break}catch(r){Q1(n,r)}while(1);if(nd(),He=t,_u.current=i,wt!==null)throw Error(Z(261));return Tt=null,Nt=0,bt}function z3(){for(;wt!==null;)ev(wt)}function k3(){for(;wt!==null&&!hx();)ev(wt)}function ev(n){var e=iv(n.alternate,n,cn);n.memoizedProps=n.pendingProps,e===null?tv(n):wt=e,vd.current=null}function tv(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=A3(t,e,cn),t!==null){wt=t;return}}else{if(t=L3(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function Ar(n,e,t){var i=Je,r=En.transition;try{En.transition=null,Je=1,O3(n,e,t,i)}finally{En.transition=r,Je=i}return null}function O3(n,e,t,i){do As();while(Gi!==null);if((He&6)!==0)throw Error(Z(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Z(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(wx(n,s),n===Tt&&(wt=Tt=null,Nt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ql||(ql=!0,rv(ru,function(){return As(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=En.transition,En.transition=null;var o=Je;Je=1;var a=He;He|=4,vd.current=null,I3(n,t),$1(t,n),a3(gf),ou=!!mf,gf=mf=null,n.current=t,D3(t,n,r),fx(),He=a,Je=o,En.transition=s}else n.current=t;if(ql&&(ql=!1,Gi=n,Mu=r),s=n.pendingLanes,s===0&&($i=null),mx(t.stateNode,i),on(n,vt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)i(e[t]);if(wu)throw wu=!1,n=Ff,Ff=null,n;return(Mu&1)!==0&&n.tag!==0&&As(),s=n.pendingLanes,(s&1)!==0?n===zf?Ko++:(Ko=0,zf=n):Ko=0,tr(),null}function As(){if(Gi!==null){var n=Fg(Mu),e=En.transition,t=Je;try{if(En.transition=null,Je=16>n?16:n,Gi===null)var i=!1;else{if(n=Gi,Gi=null,Mu=0,(He&6)!==0)throw Error(Z(331));var r=He;for(He|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if((fe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:Zo(8,c,s)}var f=c.child;if(f!==null)f.return=c,fe=f;else for(;fe!==null;){c=fe;var h=c.sibling,d=c.return;if(q1(c),c===u){fe=null;break}if(h!==null){h.return=d,fe=h;break}fe=d}}}var m=s.alternate;if(m!==null){var p=m.child;if(p!==null){m.child=null;do{var g=p.sibling;p.sibling=null,p=g}while(p!==null)}}fe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,fe=v;break e}fe=s.return}}var y=n.current;for(fe=y;fe!==null;){o=fe;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,fe=x;else e:for(o=y;fe!==null;){if(a=fe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Nu(9,a)}}catch(S){mt(a,a.return,S)}if(a===o){fe=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,fe=_;break e}fe=a.return}}if(He=r,tr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Tu,n)}catch{}i=!0}return i}finally{Je=t,En.transition=e}}return!1}function ag(n,e,t){e=gd(t,e),e=N1(n,e,1),ji(n,e),e=$t(),n=zu(n,1),n!==null&&(va(n,1,e),on(n,e))}function mt(n,e,t){if(n.tag===3)ag(n,n,t);else for(;e!==null;){if(e.tag===3){ag(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){n=gd(t,n),n=F1(e,n,1),ji(e,n),n=$t(),e=zu(e,1),e!==null&&(va(e,1,n),on(e,n));break}}e=e.return}}function B3(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=$t(),n.pingedLanes|=n.suspendedLanes&t,Tt===n&&(Nt&t)===t&&(bt===4||bt===3&&(Nt&130023424)===Nt&&500>vt()-xd?Lr(n,0):yd|=t),on(n,e)}function nv(n,e){e===0&&((n.mode&1)===0?e=1:(e=Ll,Ll<<=1,(Ll&130023424)===0&&(Ll=4194304)));var t=$t();n=zu(n,e),n!==null&&(va(n,e,t),on(n,t))}function U3(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),nv(n,t)}function H3(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),nv(n,t)}var iv;iv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return nn=!1,R3(n,e,t);nn=(n.flags&131072)!==0}else nn=!1,at&&(e.flags&1048576)!==0&&c1(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),n=e.pendingProps;var r=Rs(e,Vt.current);Ts(e,t),r=fd(null,e,i,n,r,t);var s=dd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,hu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rd(e),r.updater=Iu,e.stateNode=r,r._reactInternals=e,Sf(e,i,n,t),e=Rf(null,e,i,!0,s,t)):(e.tag=0,at&&s&&sd(e),jt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=G3(i),n=Fn(i,n),r){case 0:e=Cf(null,e,i,n,t);break e;case 1:e=$m(null,e,i,n,t);break e;case 11:e=Xm(null,e,i,n,t);break e;case 14:e=jm(null,e,i,Fn(i.type,n),t);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Cf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),$m(n,e,i,r,t);case 3:e:{if(V1(e),n===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,a1(n,e),pu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Error(Z(423)),e=Ym(n,e,i,t,r);break e}else if(i!==r){r=Error(Z(424)),e=Ym(n,e,i,t,r);break e}else for(tn=pi(e.stateNode.containerInfo.firstChild),hn=e,at=!0,kn=null,t=d1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ls(),i===r){e=_i(n,e,t);break e}jt(n,e,i,t)}e=e.child}return e;case 5:return p1(e),n===null&&bf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vf(i,r)?o=null:s!==null&&vf(i,s)&&(e.flags|=32),H1(n,e),jt(n,e,o,t),e.child;case 6:return n===null&&bf(e),null;case 13:return G1(n,e,t);case 4:return ld(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ps(e,null,i,t):jt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Xm(n,e,i,r,t);case 7:return jt(n,e,e.pendingProps,t),e.child;case 8:return jt(n,e,e.pendingProps.children,t),e.child;case 12:return jt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(fu,i._currentValue),i._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===r.children&&!rn.current){e=_i(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),wf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),wf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,t),r=Tn(r),i=i(r),e.flags|=1,jt(n,e,i,t),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),jm(n,e,i,r,t);case 15:return B1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,sn(i)?(n=!0,hu(e)):n=!1,Ts(e,t),u1(e,i,r),Sf(e,i,r,t),Rf(null,e,i,!0,n,t);case 19:return W1(n,e,t);case 22:return U1(n,e,t)}throw Error(Z(156,e.tag))};function rv(n,e){return Pg(n,e)}function V3(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,e,t,i){return new V3(n,e,t,i)}function Sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G3(n){if(typeof n=="function")return Sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Gf)return 11;if(n===Wf)return 14}return 2}function Qi(n,e){var t=n.alternate;return t===null?(t=Sn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function eu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Sd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case hs:return Pr(t.children,r,s,e);case Vf:o=8,r|=8;break;case $h:return n=Sn(12,t,e,r|2),n.elementType=$h,n.lanes=s,n;case Yh:return n=Sn(13,t,e,r),n.elementType=Yh,n.lanes=s,n;case Jh:return n=Sn(19,t,e,r),n.elementType=Jh,n.lanes=s,n;case pg:return Eu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fg:o=10;break e;case dg:o=9;break e;case Gf:o=11;break e;case Wf:o=14;break e;case Oi:o=16,i=null;break e}throw Error(Z(130,n==null?n:typeof n,""))}return e=Sn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Pr(n,e,t,i){return n=Sn(7,n,i,e),n.lanes=t,n}function Eu(n,e,t,i){return n=Sn(22,n,i,e),n.elementType=pg,n.lanes=t,n.stateNode={},n}function qh(n,e,t){return n=Sn(6,n,null,e),n.lanes=t,n}function Xh(n,e,t){return e=Sn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function W3(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lh(0),this.expirationTimes=Lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ed(n,e,t,i,r,s,o,a,l){return n=new W3(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(s),n}function q3(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function sv(n){if(!n)return Zi;n=n._reactInternals;e:{if(Or(n)!==n||n.tag!==1)throw Error(Z(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(n.tag===1){var t=n.type;if(sn(t))return s1(n,t,e)}return e}function ov(n,e,t,i,r,s,o,a,l){return n=Ed(t,i,!0,n,r,s,o,a,l),n.context=sv(null),t=n.current,i=$t(),r=Yi(t),s=vi(i,r),s.callback=e??null,ji(t,s),n.current.lanes=r,va(n,r,i),on(n,i),n}function ku(n,e,t,i){var r=e.current,s=$t(),o=Yi(r);return t=sv(t),e.context===null?e.context=t:e.pendingContext=t,e=vi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),ji(r,e),n=bn(r,o,s),n!==null&&Yl(n,r,o),o}function bu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function lg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function bd(n,e){lg(n,e),(n=n.alternate)&&lg(n,e)}function X3(){return null}var av=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Ou.prototype.render=Td.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Z(409));ku(n,e,null,null)};Ou.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;zr(function(){ku(null,n,null,null)}),e[xi]=null}};function Ou(n){this._internalRoot=n}Ou.prototype.unstable_scheduleHydration=function(n){if(n){var e=Og();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ui.length&&e!==0&&e<Ui[t].priority;t++);Ui.splice(t,0,n),t===0&&Ug(n)}};function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ug(){}function j3(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=bu(o);s.call(u)}}var o=ov(e,i,n,0,null,!1,!1,"",ug);return n._reactRootContainer=o,n[xi]=o.current,la(n.nodeType===8?n.parentNode:n),zr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=bu(l);a.call(u)}}var l=Ed(n,0,!1,null,null,!1,!1,"",ug);return n._reactRootContainer=l,n[xi]=l.current,la(n.nodeType===8?n.parentNode:n),zr(function(){ku(e,l,t,i)}),l}function Uu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=bu(o);a.call(l)}}ku(e,o,n,r)}else o=j3(t,e,n,r,i);return bu(o)}zg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Go(e.pendingLanes);t!==0&&(jf(e,t|1),on(e,vt()),(He&6)===0&&(Ds=vt()+500,tr()))}break;case 13:var i=$t();zr(function(){return bn(n,1,i)}),bd(n,1)}};$f=function(n){if(n.tag===13){var e=$t();bn(n,134217728,e),bd(n,134217728)}};kg=function(n){if(n.tag===13){var e=$t(),t=Yi(n);bn(n,t,e),bd(n,t)}};Og=function(){return Je};Bg=function(n,e){var t=Je;try{return Je=n,e()}finally{Je=t}};af=function(n,e,t){switch(e){case"input":if(Kh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Lu(i);if(!r)throw Error(Z(90));gg(i),Kh(i,r)}}}break;case"textarea":yg(n,t);break;case"select":e=t.value,e!=null&&Ms(n,!!t.multiple,e,!1)}};bg=_d;Tg=zr;var $3={usingClientEntryPoint:!1,Events:[xa,ms,Lu,Sg,Eg,_d]},Bo={findFiberByHostInstance:Cr,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},Y3={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rg(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||X3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Uo.isDisabled&&Uo.supportsFiber))try{Tu=Uo.inject(Y3),ri=Uo}catch{}var Uo;pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$3;pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(e))throw Error(Z(200));return q3(n,e,null,t)};pn.createRoot=function(n,e){if(!Ad(n))throw Error(Z(299));var t=!1,i="",r=av;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ed(n,1,!1,null,null,t,!1,i,r),n[xi]=e.current,la(n.nodeType===8?n.parentNode:n),new Td(e)};pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Z(188)):(n=Object.keys(n).join(","),Error(Z(268,n)));return n=Rg(e),n=n===null?null:n.stateNode,n};pn.flushSync=function(n){return zr(n)};pn.hydrate=function(n,e,t){if(!Bu(e))throw Error(Z(200));return Uu(null,n,e,!0,t)};pn.hydrateRoot=function(n,e,t){if(!Ad(n))throw Error(Z(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=av;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ov(e,null,n,1,t??null,r,!1,s,o),n[xi]=e.current,la(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ou(e)};pn.render=function(n,e,t){if(!Bu(e))throw Error(Z(200));return Uu(null,n,e,!1,t)};pn.unmountComponentAtNode=function(n){if(!Bu(n))throw Error(Z(40));return n._reactRootContainer?(zr(function(){Uu(null,null,n,!1,function(){n._reactRootContainer=null,n[xi]=null})}),!0):!1};pn.unstable_batchedUpdates=_d;pn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Bu(t))throw Error(Z(200));if(n==null||n._reactInternals===void 0)throw Error(Z(38));return Uu(n,e,t,!1,i)};pn.version="18.1.0-next-22edb9f77-20220426"});var hv=Sr((PE,cv)=>{"use strict";function uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv)}catch(n){console.error(n)}}uv(),cv.exports=lv()});var dv=Sr(Cd=>{"use strict";var fv=hv();Cd.createRoot=fv.createRoot,Cd.hydrateRoot=fv.hydrateRoot;var IE});var Qe=os(Er()),Sy=os(dv());var Eo=os(Er());var v0="140";var J3=0,pv=1,Z3=2;var $2=1,Q3=2,Ra=3,$r=0,vn=1,ao=2,Y2=1;var cr=0,so=1,mv=2,gv=3,vv=4,K3=5,eo=100,e_=101,t_=102,yv=103,xv=104,n_=200,i_=201,r_=202,s_=203,J2=204,Z2=205,o_=206,a_=207,l_=208,u_=209,c_=210,h_=0,f_=1,d_=2,mp=3,p_=4,m_=5,g_=6,v_=7,eh=0,y_=1,x_=2,Li=0,__=1,w_=2,M_=3,S_=4,E_=5,Q2=300,lo=301,uo=302,gp=303,vp=304,th=306,Na=1e3,Xn=1001,yp=1002,Pt=1003,_v=1004;var wv=1005;var an=1006,b_=1007;var nh=1008;var Yr=1009,T_=1010,A_=1011,Fa=1012,C_=1013,_c=1014,Wr=1015,za=1016,R_=1017,L_=1018,oo=1020,P_=1021,I_=1022,jn=1023,D_=1024,N_=1025,Xr=1026,co=1027,F_=1028,z_=1029,k_=1030,O_=1031,B_=1033,Rd=33776,Ld=33777,Pd=33778,Id=33779,Mv=35840,Sv=35841,Ev=35842,bv=35843,U_=36196,Tv=37492,Av=37496,Cv=37808,Rv=37809,Lv=37810,Pv=37811,Iv=37812,Dv=37813,Nv=37814,Fv=37815,zv=37816,kv=37817,Ov=37818,Bv=37819,Uv=37820,Hv=37821,Vv=36492,H_=2200,V_=2201,G_=2202,Mc=2300,Sc=2301,Dd=2302,to=2400,no=2401,Ec=2402,y0=2500,K2=2501,W_=0;var fr=3e3,it=3001,q_=3200,X_=3201,Mo=0,j_=1;var Ci="srgb",qr="srgb-linear";var Nd=7680;var $_=519,ka=35044,bc=35048;var Gv="300 es",xp=1035,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},zt=[];for(let n=0;n<256;n++)zt[n]=(n<16?"0":"")+n.toString(16);var Fd=Math.PI/180,_p=180/Math.PI;function $n(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function Y_(n,e){return(n%e+e)%e}function zd(n,e,t){return(1-t)*n+t*e}function Wv(n){return(n&n-1)===0&&n!==0}function wp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}var J=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};J.prototype.isVector2=!0;var Ct=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u){let c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],m=i[8],p=r[0],g=r[3],v=r[6],y=r[1],x=r[4],_=r[7],S=r[2],T=r[5],R=r[8];return s[0]=o*p+a*y+l*S,s[3]=o*g+a*x+l*T,s[6]=o*v+a*_+l*R,s[1]=u*p+c*y+f*S,s[4]=u*g+c*x+f*T,s[7]=u*v+c*_+f*R,s[2]=h*p+d*y+m*S,s[5]=h*g+d*x+m*T,s[8]=h*v+d*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,m=t*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=d*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ct.prototype.isMatrix3=!0;function ey(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kd={[Ci]:{[qr]:jr},[qr]:{[Ci]:wc}},Hn={legacyMode:!0,get workingColorSpace(){return qr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(kd[e]&&kd[e][t]!==void 0){let i=kd[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},At={r:0,g:0,b:0},Vn={h:0,s:0,l:0},Hu={h:0,s:0,l:0};function Od(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vu(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}var he=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Hn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qr){return this.r=e,this.g=t,this.b=i,Hn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qr){if(e=Y_(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Od(o,s,e+1/3),this.g=Od(o,s,e),this.b=Od(o,s,e-1/3)}return Hn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ci){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Hn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Hn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Hn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Hn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ci){let i=ty[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Hn.fromWorkingColorSpace(Vu(this,At),e),kt(At.r*255,0,255)<<16^kt(At.g*255,0,255)<<8^kt(At.b*255,0,255)<<0}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qr){Hn.fromWorkingColorSpace(Vu(this,At),t);let i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,u,c=(a+o)/2;if(a===o)l=0,u=0;else{let f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qr){return Hn.fromWorkingColorSpace(Vu(this,At),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ci){return Hn.fromWorkingColorSpace(Vu(this,At),e),e!==Ci?`color(${e} ${At.r} ${At.g} ${At.b})`:`rgb(${At.r*255|0},${At.g*255|0},${At.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Vn),Vn.h+=e,Vn.s+=t,Vn.l+=i,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Hu);let i=zd(Vn.h,Hu.h,t),r=zd(Vn.s,Hu.s,t),s=zd(Vn.l,Hu.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};he.NAMES=ty;he.prototype.isColor=!0;he.prototype.r=1;he.prototype.g=1;he.prototype.b=1;var zs,Ii=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=Oa("canvas")),zs.width=e.width,zs.height=e.height;let i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jr(t[i]/255)*255):t[i]=jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ba=class{constructor(e=null){this.uuid=$n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bd(r[o].image)):s.push(Bd(r[o]))}else s=Bd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ii.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Ba.prototype.isSource=!0;var J_=0,St=class extends Pi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=Xn,r=Xn,s=an,o=nh,a=jn,l=Yr,u=1,c=fr){super(),Object.defineProperty(this,"id",{value:J_++}),this.uuid=$n(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case yp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case yp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Q2;St.prototype.isTexture=!0;var Xe=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],m=l[9],p=l[2],g=l[6],v=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+p)<.1&&Math.abs(m+g)<.1&&Math.abs(u+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,_=(d+1)/2,S=(v+1)/2,T=(c+h)/4,R=(f+p)/4,w=(m+g)/4;return x>_&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=R/i):_>S?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=w/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=w/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(f-p)*(f-p)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-p)/y,this.z=(h-c)/y,this.w=Math.acos((u+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xe.prototype.isVector4=!0;var Zt=class extends Pi{constructor(e,t,i={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);let r={width:e,height:t,depth:1};this.texture=new St(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:an,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.prototype.isWebGLRenderTarget=!0;var ho=class extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};ho.prototype.isDataArrayTexture=!0;var Mp=class extends Zt{constructor(e,t,i){super(e,t),this.depth=i,this.texture=new ho(null,e,t,i),this.texture.isRenderTargetTexture=!0}};Mp.prototype.isWebGLArrayRenderTarget=!0;var Ua=class extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Ua.prototype.isData3DTexture=!0;var Sp=class extends Zt{constructor(e,t,i){super(e,t),this.depth=i,this.texture=new Ua(null,e,t,i),this.texture.isRenderTargetTexture=!0}};Sp.prototype.isWebGL3DRenderTarget=!0;var Ep=class extends Zt{constructor(e,t,i,r={}){super(e,t,r);let s=this.texture;this.texture=[];for(let o=0;o<i;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}};Ep.prototype.isWebGLMultipleRenderTargets=!0;var Wt=class{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],h=s[o+0],d=s[o+1],m=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(f!==p||l!==h||u!==d||c!==m){let g=1-a,v=l*h+u*d+c*m+f*p,y=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){let S=Math.sqrt(x),T=Math.atan2(S,v*y);g=Math.sin(g*T)/S,a=Math.sin(a*T)/S}let _=a*y;if(l=l*g+h*_,u=u*g+d*_,c=c*g+m*_,f=f*g+p*_,g===1-a){let S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+c*f+l*d-u*h,e[t+1]=l*m+c*h+u*f-a*d,e[t+2]=u*m+c*d+a*h-l*f,e[t+3]=c*m-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*m,this._y=u*d*f-h*c*m,this._z=u*c*m+h*d*f,this._w=u*c*f-h*d*m;break;case"YXZ":this._x=h*c*f+u*d*m,this._y=u*d*f-h*c*m,this._z=u*c*m-h*d*f,this._w=u*c*f+h*d*m;break;case"ZXY":this._x=h*c*f-u*d*m,this._y=u*d*f+h*c*m,this._z=u*c*m+h*d*f,this._w=u*c*f-h*d*m;break;case"ZYX":this._x=h*c*f-u*d*m,this._y=u*d*f+h*c*m,this._z=u*c*m-h*d*f,this._w=u*c*f+h*d*m;break;case"YZX":this._x=h*c*f+u*d*m,this._y=u*d*f+h*c*m,this._z=u*c*m-h*d*f,this._w=u*c*f-h*d*m;break;case"XZY":this._x=h*c*f-u*d*m,this._y=u*d*f-h*c*m,this._z=u*c*m+h*d*f,this._w=u*c*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};Wt.prototype.isQuaternion=!0;var A=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};A.prototype.isVector3=!0;var Ud=new A,qv=new Wt,yn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){let c=e[l],f=e[l+1],h=e[l+2];c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){let c=e.getX(l),f=e.getY(l),h=e.getZ(l);c<t&&(t=c),f<i&&(i=f),h<r&&(r=h),c>s&&(s=c),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Br.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Br.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Br)}else i.boundingBox===null&&i.computeBoundingBox(),Hd.copy(i.boundingBox),Hd.applyMatrix4(e.matrixWorld),this.union(Hd);let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Br),Br.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Gu.subVectors(this.max,wa),ks.subVectors(e.a,wa),Os.subVectors(e.b,wa),Bs.subVectors(e.c,wa),nr.subVectors(Os,ks),ir.subVectors(Bs,Os),Ur.subVectors(ks,Bs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ur.z,Ur.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ur.z,0,-Ur.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ur.y,Ur.x,0];return!Vd(t,ks,Os,Bs,Gu)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,ks,Os,Bs,Gu))?!1:(Wu.crossVectors(nr,ir),t=[Wu.x,Wu.y,Wu.z],Vd(t,ks,Os,Bs,Gu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Br.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Br).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};yn.prototype.isBox3=!0;var Mi=[new A,new A,new A,new A,new A,new A,new A,new A],Br=new A,Hd=new yn,ks=new A,Os=new A,Bs=new A,nr=new A,ir=new A,Ur=new A,wa=new A,Gu=new A,Wu=new A,Hr=new A;function Vd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hr.fromArray(n,s);let a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),u=t.dot(Hr),c=i.dot(Hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}var Z_=new yn,Xv=new A,qu=new A,Gd=new A,dr=class{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Z_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Gd.subVectors(e,this.center);let t=Gd.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Gd.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?qu.set(0,0,1).multiplyScalar(e.radius):qu.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xv.copy(e.center).add(qu)),this.expandByPoint(Xv.copy(e.center).sub(qu)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new A,Wd=new A,Xu=new A,rr=new A,qd=new A,ju=new A,Xd=new A,pr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.direction).multiplyScalar(t).add(this.origin),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wd.copy(e).add(t).multiplyScalar(.5),Xu.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Wd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xu),a=rr.dot(this.direction),l=-rr.dot(Xu),u=rr.lengthSq(),c=Math.abs(1-o*o),f,h,d,m;if(c>0)if(f=o*l-a,h=o*a-l,m=s*c,f>=0)if(h>=-m)if(h<=m){let p=1/c;f*=p,h*=p,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Xu).multiplyScalar(h).add(Wd),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){qd.subVectors(t,e),ju.subVectors(i,e),Xd.crossVectors(qd,ju);let o=this.direction.dot(Xd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);let l=a*this.direction.dot(ju.crossVectors(rr,ju));if(l<0)return null;let u=a*this.direction.dot(qd.cross(rr));if(u<0||l+u>o)return null;let c=-a*rr.dot(Xd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u,c,f,h,d,m,p,g){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=u,v[6]=c,v[10]=f,v[14]=h,v[3]=d,v[7]=m,v[11]=p,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*c,d=o*f,m=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=d+m*u,t[5]=h-p*u,t[9]=-a*l,t[2]=p-h*u,t[6]=m+d*u,t[10]=o*l}else if(e.order==="YXZ"){let h=l*c,d=l*f,m=u*c,p=u*f;t[0]=h+p*a,t[4]=m*a-d,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=d*a-m,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*c,d=l*f,m=u*c,p=u*f;t[0]=h-p*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*c,t[9]=p-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*c,d=o*f,m=a*c,p=a*f;t[0]=l*c,t[4]=m*u-d,t[8]=h*u+p,t[1]=l*f,t[5]=p*u+h,t[9]=d*u-m,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*u,m=a*l,p=a*u;t[0]=l*c,t[4]=p-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*f+m,t[10]=h-p*f}else if(e.order==="XZY"){let h=o*l,d=o*u,m=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+p,t[5]=o*c,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*c,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,K_)}lookAt(e,t,i){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),sr.crossVectors(i,mn),sr.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),sr.crossVectors(i,mn)),sr.normalize(),$u.crossVectors(mn,sr),r[0]=sr.x,r[4]=$u.x,r[8]=mn.x,r[1]=sr.y,r[5]=$u.y,r[9]=mn.y,r[2]=sr.z,r[6]=$u.z,r[10]=mn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],m=i[2],p=i[6],g=i[10],v=i[14],y=i[3],x=i[7],_=i[11],S=i[15],T=r[0],R=r[4],w=r[8],C=r[12],P=r[1],I=r[5],ee=r[9],re=r[13],D=r[2],G=r[6],z=r[10],X=r[14],$=r[3],O=r[7],H=r[11],K=r[15];return s[0]=o*T+a*P+l*D+u*$,s[4]=o*R+a*I+l*G+u*O,s[8]=o*w+a*ee+l*z+u*H,s[12]=o*C+a*re+l*X+u*K,s[1]=c*T+f*P+h*D+d*$,s[5]=c*R+f*I+h*G+d*O,s[9]=c*w+f*ee+h*z+d*H,s[13]=c*C+f*re+h*X+d*K,s[2]=m*T+p*P+g*D+v*$,s[6]=m*R+p*I+g*G+v*O,s[10]=m*w+p*ee+g*z+v*H,s[14]=m*C+p*re+g*X+v*K,s[3]=y*T+x*P+_*D+S*$,s[7]=y*R+x*I+_*G+S*O,s[11]=y*w+x*ee+_*z+S*H,s[15]=y*C+x*re+_*X+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],m=e[3],p=e[7],g=e[11],v=e[15];return m*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+p*(+t*l*d-t*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+g*(+t*u*f-t*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+v*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],m=e[12],p=e[13],g=e[14],v=e[15],y=f*g*u-p*h*u+p*l*d-a*g*d-f*l*v+a*h*v,x=m*h*u-c*g*u-m*l*d+o*g*d+c*l*v-o*h*v,_=c*p*u-m*f*u+m*a*d-o*p*d-c*a*v+o*f*v,S=m*f*l-c*p*l-m*a*h+o*p*h+c*a*g-o*f*g,T=t*y+i*x+r*_+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=y*R,e[1]=(p*h*s-f*g*s-p*r*d+i*g*d+f*r*v-i*h*v)*R,e[2]=(a*g*s-p*l*s+p*r*u-i*g*u-a*r*v+i*l*v)*R,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*R,e[4]=x*R,e[5]=(c*g*s-m*h*s+m*r*d-t*g*d-c*r*v+t*h*v)*R,e[6]=(m*l*s-o*g*s-m*r*u+t*g*u+o*r*v-t*l*v)*R,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*d+t*l*d)*R,e[8]=_*R,e[9]=(m*f*s-c*p*s-m*i*d+t*p*d+c*i*v-t*f*v)*R,e[10]=(o*p*s-m*a*s+m*i*u-t*p*u-o*i*v+t*a*v)*R,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*d-t*a*d)*R,e[12]=S*R,e[13]=(c*p*r-m*f*r+m*i*h-t*p*h-c*i*g+t*f*g)*R,e[14]=(m*a*r-o*p*r-m*i*l+t*p*l+o*i*g-t*a*g)*R,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,m=s*f,p=o*c,g=o*f,v=a*f,y=l*u,x=l*c,_=l*f,S=i.x,T=i.y,R=i.z;return r[0]=(1-(p+v))*S,r[1]=(d+_)*S,r[2]=(m-x)*S,r[3]=0,r[4]=(d-_)*T,r[5]=(1-(h+v))*T,r[6]=(g+y)*T,r[7]=0,r[8]=(m+x)*R,r[9]=(g-y)*R,r[10]=(1-(h+p))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Us.set(r[0],r[1],r[2]).length(),o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);let u=1/s,c=1/o,f=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,h=(i+r)*u,d=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ye.prototype.isMatrix4=!0;var Us=new A,Gn=new ye,Q_=new A(0,0,0),K_=new A(1,1,1),sr=new A,$u=new A,mn=new A,jv=new ye,$v=new Wt,Di=class{constructor(e=0,t=0,i=0,r=Di.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $v.setFromEuler(this),this.setFromQuaternion($v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.prototype.isEuler=!0;Di.DefaultOrder="XYZ";Di.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Tc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ew=0,Yv=new A,Hs=new Wt,Ei=new ye,Yu=new A,Ma=new A,tw=new A,nw=new Wt,Jv=new A(1,0,0),Zv=new A(0,1,0),Qv=new A(0,0,1),iw={type:"added"},Kv={type:"removed"},Ge=class extends Pi{constructor(){super(),Object.defineProperty(this,"id",{value:ew++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DefaultUp.clone();let e=new A,t=new Di,i=new Wt,r=new A(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ct}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Jv,e)}rotateY(e){return this.rotateOnAxis(Zv,e)}rotateZ(e){return this.rotateOnAxis(Qv,e)}translateOnAxis(e,t){return Yv.copy(e).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jv,e)}translateY(e){return this.translateOnAxis(Zv,e)}translateZ(e){return this.translateOnAxis(Qv,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yu.copy(e):Yu.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ma,Yu,this.up):Ei.lookAt(Yu,Ma,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(iw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Kv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,nw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let u in a){let c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ge.DefaultUp=new A(0,1,0);Ge.DefaultMatrixAutoUpdate=!0;Ge.prototype.isObject3D=!0;var Wn=new A,bi=new A,jd=new A,Ti=new A,Vs=new A,Gs=new A,e2=new A,$d=new A,Yd=new A,Jd=new A,gt=class{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),bi.subVectors(i,t),jd.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(bi),l=Wn.dot(jd),u=bi.dot(bi),c=bi.dot(jd),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);let h=1/f,d=(u*l-a*c)*h,m=(o*c-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ti),l.set(0,0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),bi.subVectors(e,t),Wn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Wn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return gt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Vs.subVectors(r,i),Gs.subVectors(s,i),$d.subVectors(e,i);let l=Vs.dot($d),u=Gs.dot($d);if(l<=0&&u<=0)return t.copy(i);Yd.subVectors(e,r);let c=Vs.dot(Yd),f=Gs.dot(Yd);if(c>=0&&f<=c)return t.copy(r);let h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Vs,o);Jd.subVectors(e,s);let d=Vs.dot(Jd),m=Gs.dot(Jd);if(m>=0&&d<=m)return t.copy(s);let p=d*u-l*m;if(p<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector(Gs,a);let g=c*m-d*f;if(g<=0&&f-c>=0&&d-m>=0)return e2.subVectors(s,r),a=(f-c)/(f-c+(d-m)),t.copy(r).addScaledVector(e2,a);let v=1/(g+p+h);return o=p*v,a=h*v,t.copy(i).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rw=0,ut=class extends Pi{constructor(){super(),Object.defineProperty(this,"id",{value:rw++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=so,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=J2,this.blendDst=Z2,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nd,this.stencilZFail=Nd,this.stencilZPass=Nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Y2;continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(i.blending=this.blending),this.side!==$r&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ut.prototype.isMaterial=!0;ut.fromType=function(){return null};var mr=class extends ut{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};mr.prototype.isMeshBasicMaterial=!0;var Mt=new A,Ju=new J,xt=class{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ka,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new he),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new J),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new A),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){let t=this.array,i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Xe),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ju.fromBufferAttribute(this,t),Ju.applyMatrix3(e),this.setXY(t,Ju.x,Ju.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};xt.prototype.isBufferAttribute=!0;var Ac=class extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Cc=class extends xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},bp=class extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};bp.prototype.isFloat16BufferAttribute=!0;var et=class extends xt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var sw=0,Cn=new ye,Zd=new Ge,Ws=new A,gn=new yn,Sa=new yn,Lt=new A,Ze=class extends Pi{constructor(){super(),Object.defineProperty(this,"id",{value:sw++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ey(e)?Cc:Ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(gn.min,Sa.min),gn.expandByPoint(Lt),Lt.addVectors(gn.max,Sa.max),gn.expandByPoint(Lt)):(gn.expandByPoint(Sa.min),gn.expandByPoint(Sa.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(Ws.fromBufferAttribute(e,u),Lt.add(Ws)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new A,c[P]=new A;let f=new A,h=new A,d=new A,m=new J,p=new J,g=new J,v=new A,y=new A;function x(P,I,ee){f.fromArray(r,P*3),h.fromArray(r,I*3),d.fromArray(r,ee*3),m.fromArray(o,P*2),p.fromArray(o,I*2),g.fromArray(o,ee*2),h.sub(f),d.sub(f),p.sub(m),g.sub(m);let re=1/(p.x*g.y-g.x*p.y);!isFinite(re)||(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(re),y.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(re),u[P].add(v),u[I].add(v),u[ee].add(v),c[P].add(y),c[I].add(y),c[ee].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let P=0,I=_.length;P<I;++P){let ee=_[P],re=ee.start,D=ee.count;for(let G=re,z=re+D;G<z;G+=3)x(i[G+0],i[G+1],i[G+2])}let S=new A,T=new A,R=new A,w=new A;function C(P){R.fromArray(s,P*3),w.copy(R);let I=u[P];S.copy(I),S.sub(R.multiplyScalar(R.dot(I))).normalize(),T.crossVectors(w,I);let re=T.dot(c[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=re}for(let P=0,I=_.length;P<I;++P){let ee=_[P],re=ee.start,D=ee.count;for(let G=re,z=re+D;G<z;G+=3)C(i[G+0]),C(i[G+1]),C(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let r=new A,s=new A,o=new A,a=new A,l=new A,u=new A,c=new A,f=new A;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),p=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let r in i){if(e.attributes[r]===void 0)continue;let o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,c=Math.min(l.length,o.length-u);for(let f=0,h=u;f<c;f++,h++)o[h]=l[f]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c),d=0,m=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*c;for(let v=0;v<c;v++)h[m++]=u[d++]}return new xt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ze,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],u=e(l,i);t.setAttribute(a,u)}let s=this.morphAttributes;for(let a in s){let l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){let h=u[c],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){let d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let u in r){let c=r[u];this.setAttribute(u,c.clone(t))}let s=e.morphAttributes;for(let u in s){let c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,c=o.length;u<c;u++){let f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.prototype.isBufferGeometry=!0;var t2=new ye,qs=new pr,Qd=new dr,or=new A,ar=new A,lr=new A,Kd=new A,ep=new A,tp=new A,Zu=new A,Qu=new A,Ku=new A,ec=new J,tc=new J,nc=new J,np=new A,ic=new A,yt=class extends Ge{constructor(e=new Ze,t=new mr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Qd.copy(i.boundingSphere),Qd.applyMatrix4(s),e.ray.intersectsSphere(Qd)===!1)||(t2.copy(s).invert(),qs.copy(e.ray).applyMatrix4(t2),i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){let a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,d=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){let v=d[p],y=r[v.materialIndex],x=Math.max(v.start,m.start),_=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let S=x,T=_;S<T;S+=3){let R=a.getX(S),w=a.getX(S+1),C=a.getX(S+2);o=rc(this,y,e,qs,l,u,c,f,h,R,w,C),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let p=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let v=p,y=g;v<y;v+=3){let x=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);o=rc(this,r,e,qs,l,u,c,f,h,x,_,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){let v=d[p],y=r[v.materialIndex],x=Math.max(v.start,m.start),_=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=x,T=_;S<T;S+=3){let R=S,w=S+1,C=S+2;o=rc(this,y,e,qs,l,u,c,f,h,R,w,C),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let p=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let v=p,y=g;v<y;v+=3){let x=v,_=v+1,S=v+2;o=rc(this,r,e,qs,l,u,c,f,h,x,_,S),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};yt.prototype.isMesh=!0;function ow(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ao,a),l===null)return null;ic.copy(a),ic.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(ic);return u<t.near||u>t.far?null:{distance:u,point:ic.clone(),object:n}}function rc(n,e,t,i,r,s,o,a,l,u,c,f){or.fromBufferAttribute(r,u),ar.fromBufferAttribute(r,c),lr.fromBufferAttribute(r,f);let h=n.morphTargetInfluences;if(s&&h){Zu.set(0,0,0),Qu.set(0,0,0),Ku.set(0,0,0);for(let m=0,p=s.length;m<p;m++){let g=h[m],v=s[m];g!==0&&(Kd.fromBufferAttribute(v,u),ep.fromBufferAttribute(v,c),tp.fromBufferAttribute(v,f),o?(Zu.addScaledVector(Kd,g),Qu.addScaledVector(ep,g),Ku.addScaledVector(tp,g)):(Zu.addScaledVector(Kd.sub(or),g),Qu.addScaledVector(ep.sub(ar),g),Ku.addScaledVector(tp.sub(lr),g)))}or.add(Zu),ar.add(Qu),lr.add(Ku)}n.isSkinnedMesh&&(n.boneTransform(u,or),n.boneTransform(c,ar),n.boneTransform(f,lr));let d=ow(n,e,t,i,or,ar,lr,np);if(d){a&&(ec.fromBufferAttribute(a,u),tc.fromBufferAttribute(a,c),nc.fromBufferAttribute(a,f),d.uv=gt.getUV(np,or,ar,lr,ec,tc,nc,new J)),l&&(ec.fromBufferAttribute(l,u),tc.fromBufferAttribute(l,c),nc.fromBufferAttribute(l,f),d.uv2=gt.getUV(np,or,ar,lr,ec,tc,nc,new J));let m={a:u,b:c,c:f,normal:new A,materialIndex:0};gt.getNormal(or,ar,lr,m.normal),d.face=m}return d}var Ni=class extends Ze{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],u=[],c=[],f=[],h=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(f,2));function m(p,g,v,y,x,_,S,T,R,w,C){let P=_/R,I=S/w,ee=_/2,re=S/2,D=T/2,G=R+1,z=w+1,X=0,$=0,O=new A;for(let H=0;H<z;H++){let K=H*I-re;for(let Y=0;Y<G;Y++){let ae=Y*P-ee;O[p]=ae*y,O[g]=K*x,O[v]=D,u.push(O.x,O.y,O.z),O[p]=0,O[g]=0,O[v]=T>0?1:-1,c.push(O.x,O.y,O.z),f.push(Y/R),f.push(1-H/w),X+=1}}for(let H=0;H<w;H++)for(let K=0;K<R;K++){let Y=h+K+G*H,ae=h+K+G*(H+1),ve=h+(K+1)+G*(H+1),xe=h+(K+1)+G*H;l.push(Y,ae,xe),l.push(ae,ve,xe),$+=6}a.addGroup(d,$,C),d+=$,h+=X}}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=fo(n[t]);for(let r in i)e[r]=i[r]}return e}var aw={clone:fo,merge:Gt},lw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ut{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=lw,this.fragmentShader=uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}};xn.prototype.isShaderMaterial=!0;var Ha=class extends Ge{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Ha.prototype.isCamera=!0;var It=class extends Ha{constructor(e=50,t=1,i=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_p*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _p*2*Math.atan(Math.tan(Fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};It.prototype.isPerspectiveCamera=!0;var Xs=90,js=1,Va=class extends Ge{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new It(Xs,js,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(1,0,0)),this.add(r);let s=new It(Xs,js,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new A(-1,0,0)),this.add(s);let o=new It(Xs,js,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);let a=new It(Xs,js,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);let l=new It(Xs,js,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);let u=new It(Xs,js,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new A(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Li,e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}},po=class extends St{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,i,r,s,o,a,l,u,c),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};po.prototype.isCubeTexture=!0;var Rc=class extends Zt{constructor(e,t={}){super(e,e,t);let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new po(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:cr});s.uniforms.tEquirect.value=t;let o=new yt(r,s),a=t.minFilter;return t.minFilter===nh&&(t.minFilter=an),new Va(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};Rc.prototype.isWebGLCubeRenderTarget=!0;var ip=new A,cw=new A,hw=new Ct,qn=class{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ip.subVectors(i,t).cross(cw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(ip),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hw.getNormalMatrix(e),r=this.coplanarPoint(ip).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};qn.prototype.isPlane=!0;var $s=new dr,sc=new A,mo=class{constructor(e=new qn,t=new qn,i=new qn,r=new qn,s=new qn,o=new qn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],h=i[8],d=i[9],m=i[10],p=i[11],g=i[12],v=i[13],y=i[14],x=i[15];return t[0].setComponents(a-r,f-l,p-h,x-g).normalize(),t[1].setComponents(a+r,f+l,p+h,x+g).normalize(),t[2].setComponents(a+s,f+u,p+d,x+v).normalize(),t[3].setComponents(a-s,f-u,p-d,x-v).normalize(),t[4].setComponents(a-o,f-c,p-m,x-y).normalize(),t[5].setComponents(a+o,f+c,p+m,x+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ny(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fw(n,e){let t=e.isWebGL2,i=new WeakMap;function r(u,c){let f=u.array,h=u.usage,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,f,h),u.onUploadCallback();let m;if(f instanceof Float32Array)m=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(f instanceof Int16Array)m=5122;else if(f instanceof Uint32Array)m=5125;else if(f instanceof Int32Array)m=5124;else if(f instanceof Int8Array)m=5120;else if(f instanceof Uint8Array)m=5121;else if(f instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){let h=c.array,d=c.updateRange;n.bindBuffer(f,u),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);let c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){let h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}var Ga=class extends Ze{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,d=[],m=[],p=[],g=[];for(let v=0;v<c;v++){let y=v*h-o;for(let x=0;x<u;x++){let _=x*f-s;m.push(_,-y,0),p.push(0,0,1),g.push(x/a),g.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){let x=y+u*v,_=y+u*(v+1),S=y+1+u*(v+1),T=y+1+u*v;d.push(x,_,T),d.push(_,S,T)}this.setIndex(d),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(g,2))}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}},dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xw="vec3 transformed = vec3( position );",_w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ww=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Mw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Iw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ow="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Jw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qw=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Kw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,oM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_M=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,SM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,bM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,VM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,WM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,eS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,nS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,iS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,oS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,OS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:dw,alphamap_pars_fragment:pw,alphatest_fragment:mw,alphatest_pars_fragment:gw,aomap_fragment:vw,aomap_pars_fragment:yw,begin_vertex:xw,beginnormal_vertex:_w,bsdfs:ww,bumpmap_pars_fragment:Mw,clipping_planes_fragment:Sw,clipping_planes_pars_fragment:Ew,clipping_planes_pars_vertex:bw,clipping_planes_vertex:Tw,color_fragment:Aw,color_pars_fragment:Cw,color_pars_vertex:Rw,color_vertex:Lw,common:Pw,cube_uv_reflection_fragment:Iw,defaultnormal_vertex:Dw,displacementmap_pars_vertex:Nw,displacementmap_vertex:Fw,emissivemap_fragment:zw,emissivemap_pars_fragment:kw,encodings_fragment:Ow,encodings_pars_fragment:Bw,envmap_fragment:Uw,envmap_common_pars_fragment:Hw,envmap_pars_fragment:Vw,envmap_pars_vertex:Gw,envmap_physical_pars_fragment:eM,envmap_vertex:Ww,fog_vertex:qw,fog_pars_vertex:Xw,fog_fragment:jw,fog_pars_fragment:$w,gradientmap_pars_fragment:Yw,lightmap_fragment:Jw,lightmap_pars_fragment:Zw,lights_lambert_vertex:Qw,lights_pars_begin:Kw,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:uM,logdepthbuf_fragment:cM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:dM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:vM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:xM,morphcolor_vertex:_M,morphnormal_vertex:wM,morphtarget_pars_vertex:MM,morphtarget_vertex:SM,normal_fragment_begin:EM,normal_fragment_maps:bM,normal_pars_fragment:TM,normal_pars_vertex:AM,normal_vertex:CM,normalmap_pars_fragment:RM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:IM,output_fragment:DM,packing:NM,premultiplied_alpha_fragment:FM,project_vertex:zM,dithering_fragment:kM,dithering_pars_fragment:OM,roughnessmap_fragment:BM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:HM,shadowmap_pars_vertex:VM,shadowmap_vertex:GM,shadowmask_pars_fragment:WM,skinbase_vertex:qM,skinning_pars_vertex:XM,skinning_vertex:jM,skinnormal_vertex:$M,specularmap_fragment:YM,specularmap_pars_fragment:JM,tonemapping_fragment:ZM,tonemapping_pars_fragment:QM,transmission_fragment:KM,transmission_pars_fragment:eS,uv_pars_fragment:tS,uv_pars_vertex:nS,uv_vertex:iS,uv2_pars_fragment:rS,uv2_pars_vertex:sS,uv2_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:uS,cube_vert:cS,cube_frag:hS,depth_vert:fS,depth_frag:dS,distanceRGBA_vert:pS,distanceRGBA_frag:mS,equirect_vert:gS,equirect_frag:vS,linedashed_vert:yS,linedashed_frag:xS,meshbasic_vert:_S,meshbasic_frag:wS,meshlambert_vert:MS,meshlambert_frag:SS,meshmatcap_vert:ES,meshmatcap_frag:bS,meshnormal_vert:TS,meshnormal_frag:AS,meshphong_vert:CS,meshphong_frag:RS,meshphysical_vert:LS,meshphysical_frag:PS,meshtoon_vert:IS,meshtoon_frag:DS,points_vert:NS,points_frag:FS,shadow_vert:zS,shadow_frag:kS,sprite_vert:OS,sprite_frag:BS},oe={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},li={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new he(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new he(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:Gt([oe.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};li.physical={uniforms:Gt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function US(n,e,t,i,r,s){let o=new he(0),a=r===!0?0:1,l,u,c=null,f=0,h=null;function d(p,g){let v=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=e.get(y));let x=n.xr,_=x.getSession&&x.getSession();_&&_.environmentBlendMode==="additive"&&(y=null),y===null?m(o,a):y&&y.isColor&&(m(y,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===th)?(u===void 0&&(u=new yt(new Ni(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:fo(li.cube.uniforms),vertexShader:li.cube.vertexShader,fragmentShader:li.cube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(c!==y||f!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,c=y,f=y.version,h=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new yt(new Ga(2,2),new xn({name:"BackgroundMaterial",uniforms:fo(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,c=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,g){t.buffers.color.setClear(p.r,p.g,p.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(p,g=1){o.set(p),a=g,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,m(o,a)},render:d}}function HS(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null),u=l,c=!1;function f(D,G,z,X,$){let O=!1;if(o){let H=p(X,z,G);u!==H&&(u=H,d(u.object)),O=v(D,X,z,$),O&&y(D,X,z,$)}else{let H=G.wireframe===!0;(u.geometry!==X.id||u.program!==z.id||u.wireframe!==H)&&(u.geometry=X.id,u.program=z.id,u.wireframe=H,O=!0)}$!==null&&t.update($,34963),(O||c)&&(c=!1,w(D,G,z,X),$!==null&&n.bindBuffer(34963,t.get($).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function m(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,G,z){let X=z.wireframe===!0,$=a[D.id];$===void 0&&($={},a[D.id]=$);let O=$[G.id];O===void 0&&(O={},$[G.id]=O);let H=O[X];return H===void 0&&(H=g(h()),O[X]=H),H}function g(D){let G=[],z=[],X=[];for(let $=0;$<r;$++)G[$]=0,z[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:X,object:D,attributes:{},index:null}}function v(D,G,z,X){let $=u.attributes,O=G.attributes,H=0,K=z.getAttributes();for(let Y in K)if(K[Y].location>=0){let ve=$[Y],xe=O[Y];if(xe===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),ve===void 0||ve.attribute!==xe||xe&&ve.data!==xe.data)return!0;H++}return u.attributesNum!==H||u.index!==X}function y(D,G,z,X){let $={},O=G.attributes,H=0,K=z.getAttributes();for(let Y in K)if(K[Y].location>=0){let ve=O[Y];ve===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor));let xe={};xe.attribute=ve,ve&&ve.data&&(xe.data=ve.data),$[Y]=xe,H++}u.attributes=$,u.attributesNum=H,u.index=X}function x(){let D=u.newAttributes;for(let G=0,z=D.length;G<z;G++)D[G]=0}function _(D){S(D,0)}function S(D,G){let z=u.newAttributes,X=u.enabledAttributes,$=u.attributeDivisors;z[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),$[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),$[D]=G)}function T(){let D=u.newAttributes,G=u.enabledAttributes;for(let z=0,X=G.length;z<X;z++)G[z]!==D[z]&&(n.disableVertexAttribArray(z),G[z]=0)}function R(D,G,z,X,$,O){i.isWebGL2===!0&&(z===5124||z===5125)?n.vertexAttribIPointer(D,G,z,$,O):n.vertexAttribPointer(D,G,z,X,$,O)}function w(D,G,z,X){if(i.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let $=X.attributes,O=z.getAttributes(),H=G.defaultAttributeValues;for(let K in O){let Y=O[K];if(Y.location>=0){let ae=$[K];if(ae===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),ae!==void 0){let ve=ae.normalized,xe=ae.itemSize,V=t.get(ae);if(V===void 0)continue;let We=V.buffer,Ee=V.type,Pe=V.bytesPerElement;if(ae.isInterleavedBufferAttribute){let ie=ae.data,ke=ie.stride,j=ae.offset;if(ie.isInstancedInterleavedBuffer){for(let q=0;q<Y.locationSize;q++)S(Y.location+q,ie.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let q=0;q<Y.locationSize;q++)_(Y.location+q);n.bindBuffer(34962,We);for(let q=0;q<Y.locationSize;q++)R(Y.location+q,xe/Y.locationSize,Ee,ve,ke*Pe,(j+xe/Y.locationSize*q)*Pe)}else{if(ae.isInstancedBufferAttribute){for(let ie=0;ie<Y.locationSize;ie++)S(Y.location+ie,ae.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<Y.locationSize;ie++)_(Y.location+ie);n.bindBuffer(34962,We);for(let ie=0;ie<Y.locationSize;ie++)R(Y.location+ie,xe/Y.locationSize,Ee,ve,xe*Pe,xe/Y.locationSize*ie*Pe)}}else if(H!==void 0){let ve=H[K];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Y.location,ve);break;case 3:n.vertexAttrib3fv(Y.location,ve);break;case 4:n.vertexAttrib4fv(Y.location,ve);break;default:n.vertexAttrib1fv(Y.location,ve)}}}}T()}function C(){ee();for(let D in a){let G=a[D];for(let z in G){let X=G[z];for(let $ in X)m(X[$].object),delete X[$];delete G[z]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;let G=a[D.id];for(let z in G){let X=G[z];for(let $ in X)m(X[$].object),delete X[$];delete G[z]}delete a[D.id]}function I(D){for(let G in a){let z=a[G];if(z[D.id]===void 0)continue;let X=z[D.id];for(let $ in X)m(X[$].object),delete X[$];delete z[D.id]}}function ee(){re(),c=!0,u!==l&&(u=l,d(u.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:re,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:_,disableUnusedAttributes:T}}function VS(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function GS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),m=n.getParameter(34076),p=n.getParameter(34921),g=n.getParameter(36347),v=n.getParameter(36348),y=n.getParameter(36349),x=h>0,_=o||e.has("OES_texture_float"),S=x&&_,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:T}}function WS(n){let e=this,t=null,i=0,r=!1,s=!1,o=new qn,a=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){let m=f.length!==0||h||i!==0||r;return r=h,t=c(f,d,0),i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,h,d){let m=f.clippingPlanes,p=f.clipIntersection,g=f.clipShadows,v=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{let y=s?0:i,x=y*4,_=v.clippingState||null;l.value=_,_=c(m,h,x,d);for(let S=0;S!==x;++S)_[S]=t[S];v.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,m){let p=f!==null?f.length:0,g=null;if(p!==0){if(g=l.value,m!==!0||g===null){let v=d+p*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<v)&&(g=new Float32Array(v));for(let x=0,_=d;x!==p;++x,_+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function qS(n){let e=new WeakMap;function t(o,a){return a===gp?o.mapping=lo:a===vp&&(o.mapping=uo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===gp||a===vp)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new Rc(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Wa=class extends Ha{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};Wa.prototype.isOrthographicCamera=!0;var io=4,n2=[.125,.215,.35,.446,.526,.582],Gr=20,rp=new Wa,i2=new he,sp=null,Vr=(1+Math.sqrt(5))/2,Ys=1/Vr,r2=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Vr,Ys),new A(0,Vr,-Ys),new A(Ys,0,Vr),new A(-Ys,0,Vr),new A(Vr,Ys,0),new A(-Vr,Ys,0)],Lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sp=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sp),e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sp=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:za,format:jn,encoding:fr,depthBuffer:!1},r=s2(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s2(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XS(s)),this._blurMaterial=jS(s,e,t)}return r}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,rp)}_sceneToCubeUV(e,t,i,r){let a=new It(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(i2),c.toneMapping=Li,c.autoClear=!1;let d=new mr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),m=new yt(new Ni,d),p=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(i2),p=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(u[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,u[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,u[v]));let x=this._cubeSize;oc(r,y*x,v>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===lo||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=a2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o2());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;oc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=r2[(r-1)%r2.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,f=new yt(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gr-1),p=s/m,g=isFinite(s)?1+Math.floor(c*p):Gr;g>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gr}`);let v=[],y=0;for(let R=0;R<Gr;++R){let w=R/p,C=Math.exp(-w*w/2);v.push(C),R===0?y+=C:R<g&&(y+=2*C)}for(let R=0;R<v.length;R++)v[R]=v[R]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-i;let _=this._sizeLods[r],S=3*_*(r>x-io?r-x+io:0),T=4*(this._cubeSize-_);oc(t,S,T,3*_,2*_),l.setRenderTarget(t),l.render(f,rp)}};function XS(n){let e=[],t=[],i=[],r=n,s=n-io+1+n2.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-io?l=n2[o-n+io-1]:o===0&&(l=0),i.push(l);let u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,m=6,p=3,g=2,v=1,y=new Float32Array(p*m*d),x=new Float32Array(g*m*d),_=new Float32Array(v*m*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,w=T>2?0:-1,C=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];y.set(C,p*m*T),x.set(h,g*m*T);let P=[T,T,T,T,T,T];_.set(P,v*m*T)}let S=new Ze;S.setAttribute("position",new xt(y,p)),S.setAttribute("uv",new xt(x,g)),S.setAttribute("faceIndex",new xt(_,v)),e.push(S),r>io&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function s2(n,e,t){let i=new Zt(n,e,t);return i.texture.mapping=th,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jS(n,e,t){let i=new Float32Array(Gr),r=new A(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function o2(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function a2(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function x0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,u=l===gp||l===vp,c=l===lo||l===uo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Lc(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Lc(n));let h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0,u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){let l=a.target;l.removeEventListener("dispose",s);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function YS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JS(n,e,t,i){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let m in h)e.update(h[m],34962);let d=f.morphAttributes;for(let m in d){let p=d[m];for(let g=0,v=p.length;g<v;g++)e.update(p[g],34962)}}function u(f){let h=[],d=f.index,m=f.attributes.position,p=0;if(d!==null){let y=d.array;p=d.version;for(let x=0,_=y.length;x<_;x+=3){let S=y[x+0],T=y[x+1],R=y[x+2];h.push(S,T,T,R,R,S)}}else{let y=m.array;p=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let S=x+0,T=x+1,R=x+2;h.push(S,T,T,R,R,S)}}let g=new(ey(h)?Cc:Ac)(h,1);g.version=p;let v=s.get(f);v&&e.remove(v),s.set(f,g)}function c(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function ZS(n,e,t,i){let r=i.isWebGL2,s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,d){n.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,m){if(m===0)return;let p,g;if(r)p=n,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,d,a,h*l,m),t.update(d,s,m)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function QS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function KS(n,e){return n[0]-e[0]}function e4(n,e){return Math.abs(e[1])-Math.abs(n[1])}function op(n,e){let t=1,i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function t4(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,h){let d=u.morphTargetInfluences;if(e.isWebGL2===!0){let m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0,g=s.get(c);if(g===void 0||g.count!==p){let G=function(){re.dispose(),s.delete(c),c.removeEventListener("dispose",G)};g!==void 0&&g.texture.dispose();let x=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],C=0;x===!0&&(C=1),_===!0&&(C=2),S===!0&&(C=3);let P=c.attributes.position.count*C,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let ee=new Float32Array(P*I*4*p),re=new ho(ee,P,I,p);re.type=Wr,re.needsUpdate=!0;let D=C*4;for(let z=0;z<p;z++){let X=T[z],$=R[z],O=w[z],H=P*I*4*z;for(let K=0;K<X.count;K++){let Y=K*D;x===!0&&(o.fromBufferAttribute(X,K),X.normalized===!0&&op(o,X),ee[H+Y+0]=o.x,ee[H+Y+1]=o.y,ee[H+Y+2]=o.z,ee[H+Y+3]=0),_===!0&&(o.fromBufferAttribute($,K),$.normalized===!0&&op(o,$),ee[H+Y+4]=o.x,ee[H+Y+5]=o.y,ee[H+Y+6]=o.z,ee[H+Y+7]=0),S===!0&&(o.fromBufferAttribute(O,K),O.normalized===!0&&op(o,O),ee[H+Y+8]=o.x,ee[H+Y+9]=o.y,ee[H+Y+10]=o.z,ee[H+Y+11]=O.itemSize===4?o.w:1)}}g={count:p,texture:re,size:new J(P,I)},s.set(c,g),c.addEventListener("dispose",G)}let v=0;for(let x=0;x<d.length;x++)v+=d[x];let y=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=d===void 0?0:d.length,p=i[c.id];if(p===void 0||p.length!==m){p=[];for(let _=0;_<m;_++)p[_]=[_,0];i[c.id]=p}for(let _=0;_<m;_++){let S=p[_];S[0]=_,S[1]=d[_]}p.sort(e4);for(let _=0;_<8;_++)_<m&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(KS);let g=c.morphAttributes.position,v=c.morphAttributes.normal,y=0;for(let _=0;_<8;_++){let S=a[_],T=S[0],R=S[1];T!==Number.MAX_SAFE_INTEGER&&R?(g&&c.getAttribute("morphTarget"+_)!==g[T]&&c.setAttribute("morphTarget"+_,g[T]),v&&c.getAttribute("morphNormal"+_)!==v[T]&&c.setAttribute("morphNormal"+_,v[T]),r[_]=R,y+=R):(g&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),v&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),r[_]=0)}let x=c.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function n4(n,e,t,i){let r=new WeakMap;function s(l){let u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){let u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}var iy=new St,ry=new ho,sy=new Ua,oy=new po,l2=[],u2=[],c2=new Float32Array(16),h2=new Float32Array(9),f2=new Float32Array(4);function So(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=l2[r];if(s===void 0&&(s=new Float32Array(r),l2[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ih(n,e){let t=u2[e];t===void 0&&(t=new Int32Array(e),u2[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function s4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function o4(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function a4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Qt(t,i))return;f2.set(i),n.uniformMatrix2fv(this.addr,!1,f2),Kt(t,i)}}function l4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Qt(t,i))return;h2.set(i),n.uniformMatrix3fv(this.addr,!1,h2),Kt(t,i)}}function u4(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Qt(t,i))return;c2.set(i),n.uniformMatrix4fv(this.addr,!1,c2),Kt(t,i)}}function c4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h4(n,e){let t=this.cache;Qt(t,e)||(n.uniform2iv(this.addr,e),Kt(t,e))}function f4(n,e){let t=this.cache;Qt(t,e)||(n.uniform3iv(this.addr,e),Kt(t,e))}function d4(n,e){let t=this.cache;Qt(t,e)||(n.uniform4iv(this.addr,e),Kt(t,e))}function p4(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m4(n,e){let t=this.cache;Qt(t,e)||(n.uniform2uiv(this.addr,e),Kt(t,e))}function g4(n,e){let t=this.cache;Qt(t,e)||(n.uniform3uiv(this.addr,e),Kt(t,e))}function v4(n,e){let t=this.cache;Qt(t,e)||(n.uniform4uiv(this.addr,e),Kt(t,e))}function y4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||iy,r)}function x4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sy,r)}function _4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||oy,r)}function w4(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ry,r)}function M4(n){switch(n){case 5126:return i4;case 35664:return r4;case 35665:return s4;case 35666:return o4;case 35674:return a4;case 35675:return l4;case 35676:return u4;case 5124:case 35670:return c4;case 35667:case 35671:return h4;case 35668:case 35672:return f4;case 35669:case 35673:return d4;case 5125:return p4;case 36294:return m4;case 36295:return g4;case 36296:return v4;case 35678:case 36198:case 36298:case 36306:case 35682:return y4;case 35679:case 36299:case 36307:return x4;case 35680:case 36300:case 36308:case 36293:return _4;case 36289:case 36303:case 36311:case 36292:return w4}}function S4(n,e){n.uniform1fv(this.addr,e)}function E4(n,e){let t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function b4(n,e){let t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function T4(n,e){let t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function A4(n,e){let t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C4(n,e){let t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R4(n,e){let t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L4(n,e){n.uniform1iv(this.addr,e)}function P4(n,e){n.uniform2iv(this.addr,e)}function I4(n,e){n.uniform3iv(this.addr,e)}function D4(n,e){n.uniform4iv(this.addr,e)}function N4(n,e){n.uniform1uiv(this.addr,e)}function F4(n,e){n.uniform2uiv(this.addr,e)}function z4(n,e){n.uniform3uiv(this.addr,e)}function k4(n,e){n.uniform4uiv(this.addr,e)}function O4(n,e,t){let i=e.length,r=ih(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||iy,r[s])}function B4(n,e,t){let i=e.length,r=ih(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||sy,r[s])}function U4(n,e,t){let i=e.length,r=ih(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||oy,r[s])}function H4(n,e,t){let i=e.length,r=ih(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||ry,r[s])}function V4(n){switch(n){case 5126:return S4;case 35664:return E4;case 35665:return b4;case 35666:return T4;case 35674:return A4;case 35675:return C4;case 35676:return R4;case 5124:case 35670:return L4;case 35667:case 35671:return P4;case 35668:case 35672:return I4;case 35669:case 35673:return D4;case 5125:return N4;case 36294:return F4;case 36295:return z4;case 36296:return k4;case 35678:case 36198:case 36298:case 36306:case 35682:return O4;case 35679:case 36299:case 36307:return B4;case 35680:case 36300:case 36308:case 36293:return U4;case 36289:case 36303:case 36311:case 36292:return H4}}function G4(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=M4(e.type)}function W4(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=V4(e.type)}function ay(n){this.id=n,this.seq=[],this.map={}}ay.prototype.setValue=function(n,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(n,e[o.id],t)}};var ap=/(\w+)(\])?(\[|\.)?/g;function d2(n,e){n.seq.push(e),n.map[e.id]=e}function q4(n,e,t){let i=n.name,r=i.length;for(ap.lastIndex=0;;){let s=ap.exec(i),o=ap.lastIndex,a=s[1],l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){d2(t,u===void 0?new G4(a,n,e):new W4(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ay(a),d2(t,f)),t=f}}}function hr(n,e){this.seq=[],this.map={};let t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);q4(r,s,this)}}hr.prototype.setValue=function(n,e,t,i){let r=this.map[e];r!==void 0&&r.setValue(n,t,i)};hr.prototype.setOptional=function(n,e,t){let i=e[t];i!==void 0&&this.setValue(n,t,i)};hr.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};hr.seqWithValue=function(n,e){let t=[];for(let i=0,r=n.length;i!==r;++i){let s=n[i];s.id in e&&t.push(s)}return t};function p2(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var X4=0;function j4(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++)i.push(o+1+": "+t[o]);return i.join(`
`)}function $4(n){switch(n){case fr:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function m2(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[0]);return t.toUpperCase()+`

`+r+`

`+j4(n.getShaderSource(e),o)}else return r}function Y4(n,e){let t=$4(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J4(n,e){let t;switch(e){case __:t="Linear";break;case w_:t="Reinhard";break;case M_:t="OptimizedCineon";break;case S_:t="ACESFilmic";break;case E_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z4(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(La).join(`
`)}function Q4(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K4(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function La(n){return n!==""}function g2(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v2(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(n){return n.replace(e5,t5)}function t5(n,e){let t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tp(t)}var n5=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,i5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y2(n){return n.replace(i5,ly).replace(n5,r5)}function r5(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ly(n,e,t,i)}function ly(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x2(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s5(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$2?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Q3?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ra&&(e="SHADOWMAP_TYPE_VSM"),e}function o5(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case th:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a5(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function l5(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case y_:e="ENVMAP_BLENDING_MIX";break;case x_:e="ENVMAP_BLENDING_ADD";break}return e}function u5(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function c5(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=s5(t),u=o5(t),c=a5(t),f=l5(t),h=u5(t),d=t.isWebGL2?"":Z4(t),m=Q4(s),p=r.createProgram(),g,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(La).join(`
`),g.length>0&&(g+=`
`),v=[d,m].filter(La).join(`
`),v.length>0&&(v+=`
`)):(g=[x2(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),v=[d,x2(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Li?J4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,Y4("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),o=Tp(o),o=g2(o,t),o=v2(o,t),a=Tp(a),a=g2(a,t),a=v2(a,t),o=y2(o),a=y2(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=y+g+o,_=y+v+a,S=p2(r,35633,x),T=p2(r,35632,_);if(r.attachShader(p,S),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){let C=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(S).trim(),I=r.getShaderInfoLog(T).trim(),ee=!0,re=!0;if(r.getProgramParameter(p,35714)===!1){ee=!1;let D=m2(r,S,"vertex"),G=m2(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+D+`
`+G)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||I==="")&&(re=!1);re&&(this.diagnostics={runnable:ee,programLog:C,vertexShader:{log:P,prefix:g},fragmentShader:{log:I,prefix:v}})}r.deleteShader(S),r.deleteShader(T);let R;this.getUniforms=function(){return R===void 0&&(R=new hr(r,p)),R};let w;return this.getAttributes=function(){return w===void 0&&(w=K4(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=X4++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}var h5=0,Ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let i=new Cp(e);t.set(e,i)}return t.get(e)}},Cp=class{constructor(e){this.id=h5++,this.code=e,this.usedTimes=0}};function f5(n,e,t,i,r,s,o){let a=new Tc,l=new Ap,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures,d=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,C,P,I,ee){let re=I.fog,D=ee.geometry,G=w.isMeshStandardMaterial?I.environment:null,z=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),X=!!z&&z.mapping===th?z.image.height:null,$=m[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let O=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,H=O!==void 0?O.length:0,K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let Y,ae,ve,xe;if($){let ie=li[$];Y=ie.vertexShader,ae=ie.fragmentShader}else Y=w.vertexShader,ae=w.fragmentShader,l.update(w),ve=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);let V=n.getRenderTarget(),We=w.alphaTest>0,Ee=w.clearcoat>0;return{isWebGL2:c,shaderID:$,shaderName:w.type,vertexShader:Y,fragmentShader:ae,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:h,outputEncoding:V===null?n.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:fr,map:!!w.map,matcap:!!w.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:X,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===j_,tangentSpaceNormalMap:w.normalMapType===Mo,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===it,clearcoat:Ee,clearcoatMap:Ee&&!!w.clearcoatMap,clearcoatRoughnessMap:Ee&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!w.clearcoatNormalMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===so,alphaMap:!!w.alphaMap,alphaTest:We,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!D.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!re,useFog:w.fog===!0,fogExp2:re&&re.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:Li,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ao,flipSided:w.side===vn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function g(w){let C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)C.push(P),C.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(C,w),y(C,w),C.push(n.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function v(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function y(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),w.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),w.push(a.mask)}function x(w){let C=m[w.type],P;if(C){let I=li[C];P=aw.clone(I.uniforms)}else P=w.uniforms;return P}function _(w,C){let P;for(let I=0,ee=u.length;I<ee;I++){let re=u[I];if(re.cacheKey===C){P=re,++P.usedTimes;break}}return P===void 0&&(P=new c5(n,C,w,s),u.push(P)),P}function S(w){if(--w.usedTimes===0){let C=u.indexOf(w);u[C]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:_,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:R}}function d5(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function p5(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function w2(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,m,p,g){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:p,group:g},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=d,v.groupOrder=m,v.renderOrder=f.renderOrder,v.z=p,v.group=g),e++,v}function a(f,h,d,m,p,g){let v=o(f,h,d,m,p,g);d.transmission>0?i.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(f,h,d,m,p,g){let v=o(f,h,d,m,p,g);d.transmission>0?i.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||p5),i.length>1&&i.sort(h||_2),r.length>1&&r.sort(h||_2)}function c(){for(let f=e,h=n.length;f<h;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function m5(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new w2,n.set(i,[s])):r>=n.get(i).length?(s=new w2,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function g5(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new he};break;case"SpotLight":t={position:new A,direction:new A,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function v5(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var y5=0;function x5(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function _5(n,e){let t=new g5,i=v5(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new A);let s=new A,o=new ye,a=new ye;function l(c,f){let h=0,d=0,m=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let p=0,g=0,v=0,y=0,x=0,_=0,S=0,T=0;c.sort(x5);let R=f!==!0?Math.PI:1;for(let C=0,P=c.length;C<P;C++){let I=c[C],ee=I.color,re=I.intensity,D=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=ee.r*re*R,d+=ee.g*re*R,m+=ee.b*re*R;else if(I.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(I.sh.coefficients[z],re);else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*R),I.castShadow){let X=I.shadow,$=i.get(I);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.directionalShadow[p]=$,r.directionalShadowMap[p]=G,r.directionalShadowMatrix[p]=I.shadow.matrix,_++}r.directional[p]=z,p++}else if(I.isSpotLight){let z=t.get(I);if(z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(ee).multiplyScalar(re*R),z.distance=D,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,I.castShadow){let X=I.shadow,$=i.get(I);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.spotShadow[v]=$,r.spotShadowMap[v]=G,r.spotShadowMatrix[v]=I.shadow.matrix,T++}r.spot[v]=z,v++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(ee).multiplyScalar(re),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=z,y++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*R),z.distance=I.distance,z.decay=I.decay,I.castShadow){let X=I.shadow,$=i.get(I);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,r.pointShadow[g]=$,r.pointShadowMap[g]=G,r.pointShadowMatrix[g]=I.shadow.matrix,S++}r.point[g]=z,g++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(re*R),z.groundColor.copy(I.groundColor).multiplyScalar(re*R),r.hemi[x]=z,x++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=m;let w=r.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==_||w.numPointShadows!==S||w.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=y,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=T,w.directionalLength=p,w.pointLength=g,w.spotLength=v,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=_,w.numPointShadows=S,w.numSpotShadows=T,r.version=y5++)}function u(c,f){let h=0,d=0,m=0,p=0,g=0,v=f.matrixWorldInverse;for(let y=0,x=c.length;y<x;y++){let _=c[y];if(_.isDirectionalLight){let S=r.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),h++}else if(_.isSpotLight){let S=r.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(v),m++}else if(_.isRectAreaLight){let S=r.rectArea[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(v),a.identity(),o.copy(_.matrixWorld),o.premultiply(v),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){let S=r.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){let S=r.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(v),g++}}}return{setup:l,setupView:u,state:r}}function M2(n,e){let t=new _5(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function w5(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new M2(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new M2(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}var qa=class extends ut{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};qa.prototype.isMeshDepthMaterial=!0;var Xa=class extends ut{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Xa.prototype.isMeshDistanceMaterial=!0;var M5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uy(n,e,t){let i=new mo,r=new J,s=new J,o=new Xe,a=new qa({depthPacking:X_}),l=new Xa,u={},c=t.maxTextureSize,f={0:vn,1:$r,2:ao},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:M5,fragmentShader:S5}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ze;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new yt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$2,this.render=function(_,S,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||_.length===0)return;let R=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(cr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let I=0,ee=_.length;I<ee;I++){let re=_[I],D=re.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let G=D.getFrameExtents();if(r.multiply(G),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/G.x),r.x=s.x*G.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/G.y),r.y=s.y*G.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===Ra&&(D.map=new Zt(r.x,r.y),D.map.texture.name=re.name+".shadowMap",D.mapPass=new Zt(r.x,r.y),D.camera.updateProjectionMatrix()),D.map===null){let X={minFilter:Pt,magFilter:Pt,format:jn};D.map=new Zt(r.x,r.y,X),D.map.texture.name=re.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();let z=D.getViewportCount();for(let X=0;X<z;X++){let $=D.getViewport(X);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),P.viewport(o),D.updateMatrices(re,X),i=D.getFrustum(),x(S,T,D.camera,re,this.type)}!D.isPointLightShadow&&this.type===Ra&&v(D,T),D.needsUpdate=!1}g.needsUpdate=!1,n.setRenderTarget(R,w,C)};function v(_,S){let T=e.update(p);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(S,null,T,h,p,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(S,null,T,d,p,null)}function y(_,S,T,R,w,C){let P=null,I=T.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(I!==void 0?P=I:P=T.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){let ee=P.uuid,re=S.uuid,D=u[ee];D===void 0&&(D={},u[ee]=D);let G=D[re];G===void 0&&(G=P.clone(),D[re]=G),P=G}return P.visible=S.visible,P.wireframe=S.wireframe,C===Ra?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=R,P.farDistance=w),P}function x(_,S,T,R,w){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&w===Ra)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,_.matrixWorld);let I=e.update(_),ee=_.material;if(Array.isArray(ee)){let re=I.groups;for(let D=0,G=re.length;D<G;D++){let z=re[D],X=ee[z.materialIndex];if(X&&X.visible){let $=y(_,X,R,T.near,T.far,w);n.renderBufferDirect(T,null,I,$,_,z)}}}else if(ee.visible){let re=y(_,ee,R,T.near,T.far,w);n.renderBufferDirect(T,null,I,re,_,null)}}let P=_.children;for(let I=0,ee=P.length;I<ee;I++)x(P[I],S,T,R,w)}}function E5(n,e,t){let i=t.isWebGL2;function r(){let L=!1,le=new Xe,se=null,be=new Xe(0,0,0,0);return{setMask:function(pe){se!==pe&&!L&&(n.colorMask(pe,pe,pe,pe),se=pe)},setLocked:function(pe){L=pe},setClear:function(pe,Se,ne,Te,$e){$e===!0&&(pe*=Te,Se*=Te,ne*=Te),le.set(pe,Se,ne,Te),be.equals(le)===!1&&(n.clearColor(pe,Se,ne,Te),be.copy(le))},reset:function(){L=!1,se=null,be.set(-1,0,0,0)}}}function s(){let L=!1,le=null,se=null,be=null;return{setTest:function(pe){pe?xe(2929):V(2929)},setMask:function(pe){le!==pe&&!L&&(n.depthMask(pe),le=pe)},setFunc:function(pe){if(se!==pe){if(pe)switch(pe){case h_:n.depthFunc(512);break;case f_:n.depthFunc(519);break;case d_:n.depthFunc(513);break;case mp:n.depthFunc(515);break;case p_:n.depthFunc(514);break;case m_:n.depthFunc(518);break;case g_:n.depthFunc(516);break;case v_:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);se=pe}},setLocked:function(pe){L=pe},setClear:function(pe){be!==pe&&(n.clearDepth(pe),be=pe)},reset:function(){L=!1,le=null,se=null,be=null}}}function o(){let L=!1,le=null,se=null,be=null,pe=null,Se=null,ne=null,Te=null,$e=null;return{setTest:function(Oe){L||(Oe?xe(2960):V(2960))},setMask:function(Oe){le!==Oe&&!L&&(n.stencilMask(Oe),le=Oe)},setFunc:function(Oe,Yn,Jn){(se!==Oe||be!==Yn||pe!==Jn)&&(n.stencilFunc(Oe,Yn,Jn),se=Oe,be=Yn,pe=Jn)},setOp:function(Oe,Yn,Jn){(Se!==Oe||ne!==Yn||Te!==Jn)&&(n.stencilOp(Oe,Yn,Jn),Se=Oe,ne=Yn,Te=Jn)},setLocked:function(Oe){L=Oe},setClear:function(Oe){$e!==Oe&&(n.clearStencil(Oe),$e=Oe)},reset:function(){L=!1,le=null,se=null,be=null,pe=null,Se=null,ne=null,Te=null,$e=null}}}let a=new r,l=new s,u=new o,c={},f={},h=new WeakMap,d=[],m=null,p=!1,g=null,v=null,y=null,x=null,_=null,S=null,T=null,R=!1,w=null,C=null,P=null,I=null,ee=null,re=n.getParameter(35661),D=!1,G=0,z=n.getParameter(7938);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=G>=2);let X=null,$={},O=n.getParameter(3088),H=n.getParameter(2978),K=new Xe().fromArray(O),Y=new Xe().fromArray(H);function ae(L,le,se){let be=new Uint8Array(4),pe=n.createTexture();n.bindTexture(L,pe),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let Se=0;Se<se;Se++)n.texImage2D(le+Se,0,6408,1,1,0,6408,5121,be);return pe}let ve={};ve[3553]=ae(3553,3553,1),ve[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(2929),l.setFunc(mp),te(!1),me(pv),xe(2884),j(cr);function xe(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function V(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function We(L,le){return f[L]!==le?(n.bindFramebuffer(L,le),f[L]=le,i&&(L===36009&&(f[36160]=le),L===36160&&(f[36009]=le)),!0):!1}function Ee(L,le){let se=d,be=!1;if(L)if(se=h.get(le),se===void 0&&(se=[],h.set(le,se)),L.isWebGLMultipleRenderTargets){let pe=L.texture;if(se.length!==pe.length||se[0]!==36064){for(let Se=0,ne=pe.length;Se<ne;Se++)se[Se]=36064+Se;se.length=pe.length,be=!0}}else se[0]!==36064&&(se[0]=36064,be=!0);else se[0]!==1029&&(se[0]=1029,be=!0);be&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Pe(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let ie={[eo]:32774,[e_]:32778,[t_]:32779};if(i)ie[yv]=32775,ie[xv]=32776;else{let L=e.get("EXT_blend_minmax");L!==null&&(ie[yv]=L.MIN_EXT,ie[xv]=L.MAX_EXT)}let ke={[n_]:0,[i_]:1,[r_]:768,[J2]:770,[c_]:776,[l_]:774,[o_]:772,[s_]:769,[Z2]:771,[u_]:775,[a_]:773};function j(L,le,se,be,pe,Se,ne,Te){if(L===cr){p===!0&&(V(3042),p=!1);return}if(p===!1&&(xe(3042),p=!0),L!==K3){if(L!==g||Te!==R){if((v!==eo||_!==eo)&&(n.blendEquation(32774),v=eo,_=eo),Te)switch(L){case so:n.blendFuncSeparate(1,771,1,771);break;case mv:n.blendFunc(1,1);break;case gv:n.blendFuncSeparate(0,769,0,1);break;case vv:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case so:n.blendFuncSeparate(770,771,1,771);break;case mv:n.blendFunc(770,1);break;case gv:n.blendFuncSeparate(0,769,0,1);break;case vv:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,x=null,S=null,T=null,g=L,R=Te}return}pe=pe||le,Se=Se||se,ne=ne||be,(le!==v||pe!==_)&&(n.blendEquationSeparate(ie[le],ie[pe]),v=le,_=pe),(se!==y||be!==x||Se!==S||ne!==T)&&(n.blendFuncSeparate(ke[se],ke[be],ke[Se],ke[ne]),y=se,x=be,S=Se,T=ne),g=L,R=null}function q(L,le){L.side===ao?V(2884):xe(2884);let se=L.side===vn;le&&(se=!se),te(se),L.blending===so&&L.transparent===!1?j(cr):j(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let be=L.stencilWrite;u.setTest(be),be&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(32926):V(32926)}function te(L){w!==L&&(L?n.frontFace(2304):n.frontFace(2305),w=L)}function me(L){L!==J3?(xe(2884),L!==C&&(L===pv?n.cullFace(1029):L===Z3?n.cullFace(1028):n.cullFace(1032))):V(2884),C=L}function ce(L){L!==P&&(D&&n.lineWidth(L),P=L)}function Ce(L,le,se){L?(xe(32823),(I!==le||ee!==se)&&(n.polygonOffset(le,se),I=le,ee=se)):V(32823)}function Me(L){L?xe(3089):V(3089)}function _e(L){L===void 0&&(L=33984+re-1),X!==L&&(n.activeTexture(L),X=L)}function rt(L,le){X===null&&_e();let se=$[X];se===void 0&&(se={type:void 0,texture:void 0},$[X]=se),(se.type!==L||se.texture!==le)&&(n.bindTexture(L,le||ve[L]),se.type=L,se.texture=le)}function Ke(){let L=$[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(L){K.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function De(L){Y.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function ge(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,$={},f={},h=new WeakMap,d=[],m=null,p=!1,g=null,v=null,y=null,x=null,_=null,S=null,T=null,R=!1,w=null,C=null,P=null,I=null,ee=null,K.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:V,bindFramebuffer:We,drawBuffers:Ee,useProgram:Pe,setBlending:j,setMaterial:q,setFlipSided:te,setCullFace:me,setLineWidth:ce,setPolygonOffset:Ce,setScissorTest:Me,activeTexture:_e,bindTexture:rt,unbindTexture:Ke,compressedTexImage2D:b,texImage2D:we,texImage3D:U,texStorage2D:ue,texStorage3D:de,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:Q,scissor:Le,viewport:De,reset:ge}}function b5(n,e,t,i,r,s,o){let a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap,p,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,M){return v?new OffscreenCanvas(b,M):Oa("canvas")}function x(b,M,B,Q){let ue=1;if((b.width>Q||b.height>Q)&&(ue=Q/Math.max(b.width,b.height)),ue<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let de=M?wp:Math.floor,we=de(ue*b.width),U=de(ue*b.height);p===void 0&&(p=y(we,U));let Le=B?y(we,U):p;return Le.width=we,Le.height=U,Le.getContext("2d").drawImage(b,0,0,we,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+we+"x"+U+")."),Le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function _(b){return Wv(b.width)&&Wv(b.height)}function S(b){return a?!1:b.wrapS!==Xn||b.wrapT!==Xn||b.minFilter!==Pt&&b.minFilter!==an}function T(b,M){return b.generateMipmaps&&M&&b.minFilter!==Pt&&b.minFilter!==an}function R(b){n.generateMipmap(b)}function w(b,M,B,Q,ue=!1){if(a===!1)return M;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=M;return M===6403&&(B===5126&&(de=33326),B===5131&&(de=33325),B===5121&&(de=33321)),M===33319&&(B===5126&&(de=33328),B===5131&&(de=33327),B===5121&&(de=33323)),M===6408&&(B===5126&&(de=34836),B===5131&&(de=34842),B===5121&&(de=Q===it&&ue===!1?35907:32856),B===32819&&(de=32854),B===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function C(b,M,B){return T(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Pt&&b.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function P(b){return b===Pt||b===_v||b===wv?9728:9729}function I(b){let M=b.target;M.removeEventListener("dispose",I),re(M),M.isVideoTexture&&m.delete(M)}function ee(b){let M=b.target;M.removeEventListener("dispose",ee),G(M)}function re(b){let M=i.get(b);if(M.__webglInit===void 0)return;let B=b.source,Q=g.get(B);if(Q){let ue=Q[M.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&D(b),Object.keys(Q).length===0&&g.delete(B)}i.remove(b)}function D(b){let M=i.get(b);n.deleteTexture(M.__webglTexture);let B=b.source,Q=g.get(B);delete Q[M.__cacheKey],o.memory.textures--}function G(b){let M=b.texture,B=i.get(b),Q=i.get(M);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)n.deleteFramebuffer(B.__webglFramebuffer[ue]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ue]);else n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer&&n.deleteRenderbuffer(B.__webglColorRenderbuffer),B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer);if(b.isWebGLMultipleRenderTargets)for(let ue=0,de=M.length;ue<de;ue++){let we=i.get(M[ue]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[ue])}i.remove(M),i.remove(b)}let z=0;function X(){z=0}function $(){let b=z;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),z+=1,b}function O(b){let M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.encoding),M.join()}function H(b,M){let B=i.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){let Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(B,b,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,B.__webglTexture)}function K(b,M){let B=i.get(b);if(b.version>0&&B.__version!==b.version){Ee(B,b,M);return}t.activeTexture(33984+M),t.bindTexture(35866,B.__webglTexture)}function Y(b,M){let B=i.get(b);if(b.version>0&&B.__version!==b.version){Ee(B,b,M);return}t.activeTexture(33984+M),t.bindTexture(32879,B.__webglTexture)}function ae(b,M){let B=i.get(b);if(b.version>0&&B.__version!==b.version){Pe(B,b,M);return}t.activeTexture(33984+M),t.bindTexture(34067,B.__webglTexture)}let ve={[Na]:10497,[Xn]:33071,[yp]:33648},xe={[Pt]:9728,[_v]:9984,[wv]:9986,[an]:9729,[b_]:9985,[nh]:9987};function V(b,M,B){if(B?(n.texParameteri(b,10242,ve[M.wrapS]),n.texParameteri(b,10243,ve[M.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ve[M.wrapR]),n.texParameteri(b,10240,xe[M.magFilter]),n.texParameteri(b,10241,xe[M.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,P(M.magFilter)),n.texParameteri(b,10241,P(M.minFilter)),M.minFilter!==Pt&&M.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(M.type===Wr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===za&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function We(b,M){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",I));let Q=M.source,ue=g.get(Q);ue===void 0&&(ue={},g.set(Q,ue));let de=O(M);if(de!==b.__cacheKey){ue[de]===void 0&&(ue[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ue[de].usedTimes++;let we=ue[b.__cacheKey];we!==void 0&&(ue[b.__cacheKey].usedTimes--,we.usedTimes===0&&D(M)),b.__cacheKey=de,b.__webglTexture=ue[de].texture}return B}function Ee(b,M,B){let Q=3553;M.isDataArrayTexture&&(Q=35866),M.isData3DTexture&&(Q=32879);let ue=We(b,M),de=M.source;if(t.activeTexture(33984+B),t.bindTexture(Q,b.__webglTexture),de.version!==de.__currentVersion||ue===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let we=S(M)&&_(M.image)===!1,U=x(M.image,we,!1,c);U=Ke(M,U);let Le=_(U)||a,De=s.convert(M.format,M.encoding),ge=s.convert(M.type),L=w(M.internalFormat,De,ge,M.encoding,M.isVideoTexture);V(Q,M,Le);let le,se=M.mipmaps,be=a&&M.isVideoTexture!==!0,pe=b.__version===void 0||ue===!0,Se=C(M,U,Le);if(M.isDepthTexture)L=6402,a?M.type===Wr?L=36012:M.type===_c?L=33190:M.type===oo?L=35056:L=33189:M.type===Wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Xr&&L===6402&&M.type!==Fa&&M.type!==_c&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fa,ge=s.convert(M.type)),M.format===co&&L===6402&&(L=34041,M.type!==oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=oo,ge=s.convert(M.type))),pe&&(be?t.texStorage2D(3553,1,L,U.width,U.height):t.texImage2D(3553,0,L,U.width,U.height,0,De,ge,null));else if(M.isDataTexture)if(se.length>0&&Le){be&&pe&&t.texStorage2D(3553,Se,L,se[0].width,se[0].height);for(let ne=0,Te=se.length;ne<Te;ne++)le=se[ne],be?t.texSubImage2D(3553,ne,0,0,le.width,le.height,De,ge,le.data):t.texImage2D(3553,ne,L,le.width,le.height,0,De,ge,le.data);M.generateMipmaps=!1}else be?(pe&&t.texStorage2D(3553,Se,L,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,De,ge,U.data)):t.texImage2D(3553,0,L,U.width,U.height,0,De,ge,U.data);else if(M.isCompressedTexture){be&&pe&&t.texStorage2D(3553,Se,L,se[0].width,se[0].height);for(let ne=0,Te=se.length;ne<Te;ne++)le=se[ne],M.format!==jn?De!==null?be?t.compressedTexSubImage2D(3553,ne,0,0,le.width,le.height,De,le.data):t.compressedTexImage2D(3553,ne,L,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,ne,0,0,le.width,le.height,De,ge,le.data):t.texImage2D(3553,ne,L,le.width,le.height,0,De,ge,le.data)}else if(M.isDataArrayTexture)be?(pe&&t.texStorage3D(35866,Se,L,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,De,ge,U.data)):t.texImage3D(35866,0,L,U.width,U.height,U.depth,0,De,ge,U.data);else if(M.isData3DTexture)be?(pe&&t.texStorage3D(32879,Se,L,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,De,ge,U.data)):t.texImage3D(32879,0,L,U.width,U.height,U.depth,0,De,ge,U.data);else if(M.isFramebufferTexture){if(pe)if(be)t.texStorage2D(3553,Se,L,U.width,U.height);else{let ne=U.width,Te=U.height;for(let $e=0;$e<Se;$e++)t.texImage2D(3553,$e,L,ne,Te,0,De,ge,null),ne>>=1,Te>>=1}}else if(se.length>0&&Le){be&&pe&&t.texStorage2D(3553,Se,L,se[0].width,se[0].height);for(let ne=0,Te=se.length;ne<Te;ne++)le=se[ne],be?t.texSubImage2D(3553,ne,0,0,De,ge,le):t.texImage2D(3553,ne,L,De,ge,le);M.generateMipmaps=!1}else be?(pe&&t.texStorage2D(3553,Se,L,U.width,U.height),t.texSubImage2D(3553,0,0,0,De,ge,U)):t.texImage2D(3553,0,L,De,ge,U);T(M,Le)&&R(Q),de.__currentVersion=de.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Pe(b,M,B){if(M.image.length!==6)return;let Q=We(b,M),ue=M.source;if(t.activeTexture(33984+B),t.bindTexture(34067,b.__webglTexture),ue.version!==ue.__currentVersion||Q===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,U=[];for(let ne=0;ne<6;ne++)!de&&!we?U[ne]=x(M.image[ne],!1,!0,u):U[ne]=we?M.image[ne].image:M.image[ne],U[ne]=Ke(M,U[ne]);let Le=U[0],De=_(Le)||a,ge=s.convert(M.format,M.encoding),L=s.convert(M.type),le=w(M.internalFormat,ge,L,M.encoding),se=a&&M.isVideoTexture!==!0,be=b.__version===void 0,pe=C(M,Le,De);V(34067,M,De);let Se;if(de){se&&be&&t.texStorage2D(34067,pe,le,Le.width,Le.height);for(let ne=0;ne<6;ne++){Se=U[ne].mipmaps;for(let Te=0;Te<Se.length;Te++){let $e=Se[Te];M.format!==jn?ge!==null?se?t.compressedTexSubImage2D(34069+ne,Te,0,0,$e.width,$e.height,ge,$e.data):t.compressedTexImage2D(34069+ne,Te,le,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?t.texSubImage2D(34069+ne,Te,0,0,$e.width,$e.height,ge,L,$e.data):t.texImage2D(34069+ne,Te,le,$e.width,$e.height,0,ge,L,$e.data)}}}else{Se=M.mipmaps,se&&be&&(Se.length>0&&pe++,t.texStorage2D(34067,pe,le,U[0].width,U[0].height));for(let ne=0;ne<6;ne++)if(we){se?t.texSubImage2D(34069+ne,0,0,0,U[ne].width,U[ne].height,ge,L,U[ne].data):t.texImage2D(34069+ne,0,le,U[ne].width,U[ne].height,0,ge,L,U[ne].data);for(let Te=0;Te<Se.length;Te++){let Oe=Se[Te].image[ne].image;se?t.texSubImage2D(34069+ne,Te+1,0,0,Oe.width,Oe.height,ge,L,Oe.data):t.texImage2D(34069+ne,Te+1,le,Oe.width,Oe.height,0,ge,L,Oe.data)}}else{se?t.texSubImage2D(34069+ne,0,0,0,ge,L,U[ne]):t.texImage2D(34069+ne,0,le,ge,L,U[ne]);for(let Te=0;Te<Se.length;Te++){let $e=Se[Te];se?t.texSubImage2D(34069+ne,Te+1,0,0,ge,L,$e.image[ne]):t.texImage2D(34069+ne,Te+1,le,ge,L,$e.image[ne])}}}T(M,De)&&R(34067),ue.__currentVersion=ue.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ie(b,M,B,Q,ue){let de=s.convert(B.format,B.encoding),we=s.convert(B.type),U=w(B.internalFormat,de,we,B.encoding);i.get(M).__hasExternalTextures||(ue===32879||ue===35866?t.texImage3D(ue,0,U,M.width,M.height,M.depth,0,de,we,null):t.texImage2D(ue,0,U,M.width,M.height,0,de,we,null)),t.bindFramebuffer(36160,b),_e(M)?h.framebufferTexture2DMultisampleEXT(36160,Q,ue,i.get(B).__webglTexture,0,Me(M)):n.framebufferTexture2D(36160,Q,ue,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(b,M,B){if(n.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let Q=33189;if(B||_e(M)){let ue=M.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Wr?Q=36012:ue.type===_c&&(Q=33190));let de=Me(M);_e(M)?h.renderbufferStorageMultisampleEXT(36161,de,Q,M.width,M.height):n.renderbufferStorageMultisample(36161,de,Q,M.width,M.height)}else n.renderbufferStorage(36161,Q,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){let Q=Me(M);B&&_e(M)===!1?n.renderbufferStorageMultisample(36161,Q,35056,M.width,M.height):_e(M)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{let Q=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,ue=s.convert(Q.format,Q.encoding),de=s.convert(Q.type),we=w(Q.internalFormat,ue,de,Q.encoding),U=Me(M);B&&_e(M)===!1?n.renderbufferStorageMultisample(36161,U,we,M.width,M.height):_e(M)?h.renderbufferStorageMultisampleEXT(36161,U,we,M.width,M.height):n.renderbufferStorage(36161,we,M.width,M.height)}n.bindRenderbuffer(36161,null)}function j(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let Q=i.get(M.depthTexture).__webglTexture,ue=Me(M);if(M.depthTexture.format===Xr)_e(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ue):n.framebufferTexture2D(36160,36096,3553,Q,0);else if(M.depthTexture.format===co)_e(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ue):n.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function q(b){let M=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");j(M.__webglFramebuffer,b)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=n.createRenderbuffer(),ke(M.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ke(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function te(b,M,B){let Q=i.get(b);M!==void 0&&ie(Q.__webglFramebuffer,b,b.texture,36064,3553),B!==void 0&&q(b)}function me(b){let M=b.texture,B=i.get(b),Q=i.get(M);b.addEventListener("dispose",ee),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++);let ue=b.isWebGLCubeRenderTarget===!0,de=b.isWebGLMultipleRenderTargets===!0,we=_(b)||a;if(ue){B.__webglFramebuffer=[];for(let U=0;U<6;U++)B.__webglFramebuffer[U]=n.createFramebuffer()}else if(B.__webglFramebuffer=n.createFramebuffer(),de)if(r.drawBuffers){let U=b.texture;for(let Le=0,De=U.length;Le<De;Le++){let ge=i.get(U[Le]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&b.samples>0&&_e(b)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,B.__webglColorRenderbuffer);let U=s.convert(M.format,M.encoding),Le=s.convert(M.type),De=w(M.internalFormat,U,Le,M.encoding),ge=Me(b);n.renderbufferStorageMultisample(36161,ge,De,b.width,b.height),t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,B.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}if(ue){t.bindTexture(34067,Q.__webglTexture),V(34067,M,we);for(let U=0;U<6;U++)ie(B.__webglFramebuffer[U],b,M,36064,34069+U);T(M,we)&&R(34067),t.unbindTexture()}else if(de){let U=b.texture;for(let Le=0,De=U.length;Le<De;Le++){let ge=U[Le],L=i.get(ge);t.bindTexture(3553,L.__webglTexture),V(3553,ge,we),ie(B.__webglFramebuffer,b,ge,36064+Le,3553),T(ge,we)&&R(3553)}t.unbindTexture()}else{let U=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?U=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,Q.__webglTexture),V(U,M,we),ie(B.__webglFramebuffer,b,M,36064,U),T(M,we)&&R(U),t.unbindTexture()}b.depthBuffer&&q(b)}function ce(b){let M=_(b)||a,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,ue=B.length;Q<ue;Q++){let de=B[Q];if(T(de,M)){let we=b.isWebGLCubeRenderTarget?34067:3553,U=i.get(de).__webglTexture;t.bindTexture(we,U),R(we),t.unbindTexture()}}}function Ce(b){if(a&&b.samples>0&&_e(b)===!1){let M=b.width,B=b.height,Q=16384,ue=[36064],de=b.stencilBuffer?33306:36096;b.depthBuffer&&ue.push(de);let we=i.get(b),U=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;U===!1&&(b.depthBuffer&&(Q|=256),b.stencilBuffer&&(Q|=1024)),t.bindFramebuffer(36008,we.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,we.__webglFramebuffer),U===!0&&(n.invalidateFramebuffer(36008,[de]),n.invalidateFramebuffer(36009,[de])),n.blitFramebuffer(0,0,M,B,0,0,M,B,Q,9728),d&&n.invalidateFramebuffer(36008,ue),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,we.__webglMultisampledFramebuffer)}}function Me(b){return Math.min(f,b.samples)}function _e(b){let M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rt(b){let M=o.render.frame;m.get(b)!==M&&(m.set(b,M),b.update())}function Ke(b,M){let B=b.encoding,Q=b.format,ue=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===xp||B!==fr&&(B===it?a===!1?e.has("EXT_sRGB")===!0&&Q===jn?(b.format=xp,b.minFilter=an,b.generateMipmaps=!1):M=Ii.sRGBToLinear(M):(Q!==jn||ue!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=ae,this.rebindTextures=te,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=_e}function T5(n,e,t){let i=t.isWebGL2;function r(s,o=null){let a;if(s===Yr)return 5121;if(s===R_)return 32819;if(s===L_)return 32820;if(s===T_)return 5120;if(s===A_)return 5122;if(s===Fa)return 5123;if(s===C_)return 5124;if(s===_c)return 5125;if(s===Wr)return 5126;if(s===za)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===P_)return 6406;if(s===jn)return 6408;if(s===D_)return 6409;if(s===N_)return 6410;if(s===Xr)return 6402;if(s===co)return 34041;if(s===F_)return 6403;if(s===I_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===xp)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===z_)return 36244;if(s===k_)return 33319;if(s===O_)return 33320;if(s===B_)return 36249;if(s===Rd||s===Ld||s===Pd||s===Id)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Rd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ld)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Rd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ld)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Id)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mv||s===Sv||s===Ev||s===bv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Mv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ev)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===U_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tv||s===Av)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tv)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Av)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cv||s===Rv||s===Lv||s===Pv||s===Iv||s===Dv||s===Nv||s===Fv||s===zv||s===kv||s===Ov||s===Bv||s===Uv||s===Hv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Cv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Iv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ov)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hv)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vv)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===oo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Pc=class extends It{constructor(e=[]){super(),this.cameras=e}};Pc.prototype.isArrayCamera=!0;var Ri=class extends Ge{constructor(){super(),this.type="Group"}};Ri.prototype.isGroup=!0;var A5={type:"move"},Pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A5))),u&&e.hand){o=!0;for(let p of e.hand.values()){let g=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){let y=new Ri;y.matrixAutoUpdate=!1,y.visible=!1,u.joints[p.jointName]=y,u.add(y)}let v=u.joints[p.jointName];g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=g.radius),v.visible=g!==null}let c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,m=.005;u.inputState.pinching&&h>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}},Ic=class extends St{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Xr,c!==Xr&&c!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xr&&(i=Fa),i===void 0&&c===co&&(i=oo),super(null,r,s,o,a,l,c,i,u),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}};Ic.prototype.isDepthTexture=!0;var Rp=class extends Pi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,h=null,d=null,m=t.getContextAttributes(),p=null,g=null,v=[],y=new Map,x=new It;x.layers.enable(1),x.viewport=new Xe;let _=new It;_.layers.enable(2),_.viewport=new Xe;let S=[x,_],T=new Pc;T.layers.enable(1),T.layers.enable(2);let R=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let H=v[O];return H===void 0&&(H=new Pa,v[O]=H),H.getTargetRaySpace()},this.getControllerGrip=function(O){let H=v[O];return H===void 0&&(H=new Pa,v[O]=H),H.getGripSpace()},this.getHand=function(O){let H=v[O];return H===void 0&&(H=new Pa,v[O]=H),H.getHandSpace()};function C(O){let H=y.get(O.inputSource);H&&H.dispatchEvent({type:O.type,data:O.inputSource})}function P(){y.forEach(function(O,H){O.disconnect(H)}),y.clear(),R=null,w=null,e.setRenderTarget(p),h=null,f=null,c=null,r=null,g=null,$.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",P),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let H={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:h}),g=new Zt(h.framebufferWidth,h.framebufferHeight,{format:jn,type:Yr,encoding:e.outputEncoding})}else{let H=null,K=null,Y=null;m.depth&&(Y=m.stencil?35056:33190,H=m.stencil?co:Xr,K=m.stencil?oo:Fa);let ae={colorFormat:e.outputEncoding===it?35907:32856,depthFormat:Y,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),g=new Zt(f.textureWidth,f.textureHeight,{format:jn,type:Yr,depthTexture:new Ic(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let ve=e.properties.get(g);ve.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(O){let H=r.inputSources;for(let K=0;K<H.length;K++){let Y=H[K].handedness==="right"?1:0;y.set(H[K],v[Y])}for(let K=0;K<O.removed.length;K++){let Y=O.removed[K],ae=y.get(Y);ae&&(ae.dispatchEvent({type:"disconnected",data:Y}),y.delete(Y))}for(let K=0;K<O.added.length;K++){let Y=O.added[K],ae=y.get(Y);ae&&ae.dispatchEvent({type:"connected",data:Y})}}let ee=new A,re=new A;function D(O,H,K){ee.setFromMatrixPosition(H.matrixWorld),re.setFromMatrixPosition(K.matrixWorld);let Y=ee.distanceTo(re),ae=H.projectionMatrix.elements,ve=K.projectionMatrix.elements,xe=ae[14]/(ae[10]-1),V=ae[14]/(ae[10]+1),We=(ae[9]+1)/ae[5],Ee=(ae[9]-1)/ae[5],Pe=(ae[8]-1)/ae[0],ie=(ve[8]+1)/ve[0],ke=xe*Pe,j=xe*ie,q=Y/(-Pe+ie),te=q*-Pe;H.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(te),O.translateZ(q),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let me=xe+q,ce=V+q,Ce=ke-te,Me=j+(Y-te),_e=We*V/ce*me,rt=Ee*V/ce*me;O.projectionMatrix.makePerspective(Ce,Me,_e,rt,me,ce)}function G(O,H){H===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(H.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;T.near=_.near=x.near=O.near,T.far=_.far=x.far=O.far,(R!==T.near||w!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,w=T.far);let H=O.parent,K=T.cameras;G(T,H);for(let ae=0;ae<K.length;ae++)G(K[ae],H);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),O.position.copy(T.position),O.quaternion.copy(T.quaternion),O.scale.copy(T.scale),O.matrix.copy(T.matrix),O.matrixWorld.copy(T.matrixWorld);let Y=O.children;for(let ae=0,ve=Y.length;ae<ve;ae++)Y[ae].updateMatrixWorld(!0);K.length===2?D(T,x,_):T.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)};let z=null;function X(O,H){if(u=H.getViewerPose(l||o),d=H,u!==null){let Y=u.views;h!==null&&(e.setRenderTargetFramebuffer(g,h.framebuffer),e.setRenderTarget(g));let ae=!1;Y.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let ve=0;ve<Y.length;ve++){let xe=Y[ve],V=null;if(h!==null)V=h.getViewport(xe);else{let Ee=c.getViewSubImage(f,xe);V=Ee.viewport,ve===0&&(e.setRenderTargetTextures(g,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(g))}let We=S[ve];We.matrix.fromArray(xe.transform.matrix),We.projectionMatrix.fromArray(xe.projectionMatrix),We.viewport.set(V.x,V.y,V.width,V.height),ve===0&&T.matrix.copy(We.matrix),ae===!0&&T.cameras.push(We)}}let K=r.inputSources;for(let Y=0;Y<v.length;Y++){let ae=K[Y],ve=y.get(ae);ve!==void 0&&ve.update(ae,H,l||o)}z&&z(O,H),d=null}let $=new ny;$.setAnimationLoop(X),this.setAnimationLoop=function(O){z=O},this.dispose=function(){}}};function C5(n,e){function t(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,y,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),c(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),d(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),m(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?a(p,g,v,y):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===vn&&(p.bumpScale.value*=-1)),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===vn&&p.normalScale.value.negate()),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;let _=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*_}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let y;g.map?y=g.map:g.specularMap?y=g.specularMap:g.displacementMap?y=g.displacementMap:g.normalMap?y=g.normalMap:g.bumpMap?y=g.bumpMap:g.roughnessMap?y=g.roughnessMap:g.metalnessMap?y=g.metalnessMap:g.alphaMap?y=g.alphaMap:g.emissiveMap?y=g.emissiveMap:g.clearcoatMap?y=g.clearcoatMap:g.clearcoatNormalMap?y=g.clearcoatNormalMap:g.clearcoatRoughnessMap?y=g.clearcoatRoughnessMap:g.specularIntensityMap?y=g.specularIntensityMap:g.specularColorMap?y=g.specularColorMap:g.transmissionMap?y=g.transmissionMap:g.thicknessMap?y=g.thicknessMap:g.sheenColorMap?y=g.sheenColorMap:g.sheenRoughnessMap&&(y=g.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let x;g.aoMap?x=g.aoMap:g.lightMap&&(x=g.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function a(p,g,v,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=y*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v;g.map?v=g.map:g.alphaMap&&(v=g.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function c(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===vn&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function d(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function R5(){let n=Oa("canvas");return n.style.display="block",n}function je(n={}){let e=n.canvas!==void 0?n.canvas:R5(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,h=null,d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fr,this.physicallyCorrectLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;let p=this,g=!1,v=0,y=0,x=null,_=-1,S=null,T=new Xe,R=new Xe,w=null,C=e.width,P=e.height,I=1,ee=null,re=null,D=new Xe(0,0,C,P),G=new Xe(0,0,C,P),z=!1,X=new mo,$=!1,O=!1,H=null,K=new ye,Y=new J,ae=new A,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return x===null?I:1}let V=t;function We(E,N){for(let k=0;k<E.length;k++){let F=E[k],W=e.getContext(F,N);if(W!==null)return W}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${v0}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",le,!1),V===null){let N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),V=We(N,E),V===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Pe,ie,ke,j,q,te,me,ce,Ce,Me,_e,rt,Ke,b,M,B,Q,ue,de,we,U,Le;function De(){Ee=new YS(V),Pe=new GS(V,Ee,n),Ee.init(Pe),U=new T5(V,Ee,Pe),ie=new E5(V,Ee,Pe),ke=new QS(V),j=new d5,q=new b5(V,Ee,ie,j,Pe,U,ke),te=new qS(p),me=new $S(p),ce=new fw(V,Pe),Le=new HS(V,Ee,ce,Pe),Ce=new JS(V,ce,ke,Le),Me=new n4(V,Ce,ce,ke),ue=new t4(V,Pe,q),M=new WS(j),_e=new f5(p,te,me,Ee,Pe,Le,M),rt=new C5(p,j),Ke=new m5,b=new w5(Ee,Pe),Q=new US(p,te,ie,Me,c,o),B=new uy(p,Me,Pe),de=new VS(V,Ee,ke,Pe),we=new ZS(V,Ee,ke,Pe),ke.programs=_e.programs,p.capabilities=Pe,p.extensions=Ee,p.properties=j,p.renderLists=Ke,p.shadowMap=B,p.state=ie,p.info=ke}De();let ge=new Rp(p,V);this.xr=ge,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(C,P,!1))},this.getSize=function(E){return E.set(C,P)},this.setSize=function(E,N,k){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,P=N,e.width=Math.floor(E*I),e.height=Math.floor(N*I),k!==!1&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(C*I,P*I).floor()},this.setDrawingBufferSize=function(E,N,k){C=E,P=N,I=k,e.width=Math.floor(E*k),e.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(D)},this.setViewport=function(E,N,k,F){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,N,k,F),ie.viewport(T.copy(D).multiplyScalar(I).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,N,k,F){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,N,k,F),ie.scissor(R.copy(G).multiplyScalar(I).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){ie.setScissorTest(z=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(E=!0,N=!0,k=!0){let F=0;E&&(F|=16384),N&&(F|=256),k&&(F|=1024),V.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",le,!1),Ke.dispose(),b.dispose(),j.dispose(),te.dispose(),me.dispose(),Me.dispose(),Le.dispose(),_e.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Te),ge.removeEventListener("sessionend",$e),H&&(H.dispose(),H=null),Oe.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;let E=ke.autoReset,N=B.enabled,k=B.autoUpdate,F=B.needsUpdate,W=B.type;De(),ke.autoReset=E,B.enabled=N,B.autoUpdate=k,B.needsUpdate=F,B.type=W}function se(E){let N=E.target;N.removeEventListener("dispose",se),be(N)}function be(E){pe(E),j.remove(E)}function pe(E){let N=j.get(E).programs;N!==void 0&&(N.forEach(function(k){_e.releaseProgram(k)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,F,W,Ae){N===null&&(N=ve);let Re=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Ty(E,N,k,F,W);ie.setMaterial(F,Re);let Ie=k.index,Ye=k.attributes.position;if(Ie===null){if(Ye===void 0||Ye.count===0)return}else if(Ie.count===0)return;let Ue=1;F.wireframe===!0&&(Ie=Ce.getWireframeAttribute(k),Ue=2),Le.setup(W,F,Ne,k,Ie);let Ve,pt=de;Ie!==null&&(Ve=ce.get(Ie),pt=we,pt.setIndex(Ve));let Mr=Ie!==null?Ie.count:Ye.count,is=k.drawRange.start*Ue,rs=k.drawRange.count*Ue,Zn=Ae!==null?Ae.start*Ue:0,qe=Ae!==null?Ae.count*Ue:1/0,ss=Math.max(is,Zn),_t=Math.min(Mr,is+rs,Zn+qe)-1,Qn=Math.max(0,_t-ss+1);if(Qn!==0){if(W.isMesh)F.wireframe===!0?(ie.setLineWidth(F.wireframeLinewidth*xe()),pt.setMode(1)):pt.setMode(4);else if(W.isLine){let Fi=F.linewidth;Fi===void 0&&(Fi=1),ie.setLineWidth(Fi*xe()),W.isLineSegments?pt.setMode(1):W.isLineLoop?pt.setMode(2):pt.setMode(3)}else W.isPoints?pt.setMode(0):W.isSprite&&pt.setMode(4);if(W.isInstancedMesh)pt.renderInstances(ss,Qn,W.count);else if(k.isInstancedBufferGeometry){let Fi=Math.min(k.instanceCount,k._maxInstanceCount);pt.renderInstances(ss,Qn,Fi)}else pt.render(ss,Qn)}},this.compile=function(E,N){h=b.get(E),h.init(),m.push(h),E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(k){let F=k.material;if(F)if(Array.isArray(F))for(let W=0;W<F.length;W++){let Ae=F[W];uh(Ae,E,k)}else uh(F,E,k)}),m.pop(),h=null};let Se=null;function ne(E){Se&&Se(E)}function Te(){Oe.stop()}function $e(){Oe.start()}let Oe=new ny;Oe.setAnimationLoop(ne),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(E){Se=E,ge.setAnimationLoop(E),E===null?Oe.stop():Oe.start()},ge.addEventListener("sessionstart",Te),ge.addEventListener("sessionend",$e),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,N,x),h=b.get(E,m.length),h.init(),m.push(h),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(K),O=this.localClippingEnabled,$=M.init(this.clippingPlanes,O,N),f=Ke.get(E,d.length),f.init(),d.push(f),Yn(E,N,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ee,re),$===!0&&M.beginShadows();let k=h.state.shadowsArray;if(B.render(k,E,N),$===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(f,E),h.setupLights(p.physicallyCorrectLights),N.isArrayCamera){let F=N.cameras;for(let W=0,Ae=F.length;W<Ae;W++){let Re=F[W];Jn(f,E,Re,Re.viewport)}}else Jn(f,E,N);x!==null&&(q.updateMultisampleRenderTarget(x),q.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(p,E,N),Le.resetDefaultState(),_=-1,S=null,m.pop(),m.length>0?h=m[m.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Yn(E,N,k,F){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){F&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);let Re=Me.update(E),Ne=E.material;Ne.visible&&f.push(E,Re,Ne,k,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ke.render.frame&&(E.skeleton.update(),E.skeleton.frame=ke.render.frame),!E.frustumCulled||X.intersectsObject(E))){F&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);let Re=Me.update(E),Ne=E.material;if(Array.isArray(Ne)){let Ie=Re.groups;for(let Ye=0,Ue=Ie.length;Ye<Ue;Ye++){let Ve=Ie[Ye],pt=Ne[Ve.materialIndex];pt&&pt.visible&&f.push(E,Re,pt,k,ae.z,Ve)}}else Ne.visible&&f.push(E,Re,Ne,k,ae.z,null)}}let Ae=E.children;for(let Re=0,Ne=Ae.length;Re<Ne;Re++)Yn(Ae[Re],N,k,F)}function Jn(E,N,k,F){let W=E.opaque,Ae=E.transmissive,Re=E.transparent;h.setupLightsView(k),Ae.length>0&&Ey(W,N,k),F&&ie.viewport(T.copy(F)),W.length>0&&vl(W,N,k),Ae.length>0&&vl(Ae,N,k),Re.length>0&&vl(Re,N,k),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ey(E,N,k){let F=Pe.isWebGL2;H===null&&(H=new Zt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?za:Yr,minFilter:nh,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(Y),F?H.setSize(Y.x,Y.y):H.setSize(wp(Y.x),wp(Y.y));let W=p.getRenderTarget();p.setRenderTarget(H),p.clear();let Ae=p.toneMapping;p.toneMapping=Li,vl(E,N,k),p.toneMapping=Ae,q.updateMultisampleRenderTarget(H),q.updateRenderTargetMipmap(H),p.setRenderTarget(W)}function vl(E,N,k){let F=N.isScene===!0?N.overrideMaterial:null;for(let W=0,Ae=E.length;W<Ae;W++){let Re=E[W],Ne=Re.object,Ie=Re.geometry,Ye=F===null?Re.material:F,Ue=Re.group;Ne.layers.test(k.layers)&&by(Ne,N,k,Ie,Ye,Ue)}}function by(E,N,k,F,W,Ae){E.onBeforeRender(p,N,k,F,W,Ae),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(p,N,k,F,E,Ae),W.transparent===!0&&W.side===ao?(W.side=vn,W.needsUpdate=!0,p.renderBufferDirect(k,N,F,W,E,Ae),W.side=$r,W.needsUpdate=!0,p.renderBufferDirect(k,N,F,W,E,Ae),W.side=ao):p.renderBufferDirect(k,N,F,W,E,Ae),E.onAfterRender(p,N,k,F,W,Ae)}function uh(E,N,k){N.isScene!==!0&&(N=ve);let F=j.get(E),W=h.state.lights,Ae=h.state.shadowsArray,Re=W.state.version,Ne=_e.getParameters(E,W.state,Ae,N,k),Ie=_e.getProgramCacheKey(Ne),Ye=F.programs;F.environment=E.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(E.isMeshStandardMaterial?me:te).get(E.envMap||F.environment),Ye===void 0&&(E.addEventListener("dispose",se),Ye=new Map,F.programs=Ye);let Ue=Ye.get(Ie);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===Re)return R0(E,Ne),Ue}else Ne.uniforms=_e.getUniforms(E),E.onBuild(k,Ne,p),E.onBeforeCompile(Ne,p),Ue=_e.acquireProgram(Ne,Ie),Ye.set(Ie,Ue),F.uniforms=Ne.uniforms;let Ve=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=M.uniform),R0(E,Ne),F.needsLights=Cy(E),F.lightsStateVersion=Re,F.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotShadowMatrix.value=W.state.spotShadowMatrix,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix);let pt=Ue.getUniforms(),Mr=hr.seqWithValue(pt.seq,Ve);return F.currentProgram=Ue,F.uniformsList=Mr,Ue}function R0(E,N){let k=j.get(E);k.outputEncoding=N.outputEncoding,k.instancing=N.instancing,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Ty(E,N,k,F,W){N.isScene!==!0&&(N=ve),q.resetTextureUnits();let Ae=N.fog,Re=F.isMeshStandardMaterial?N.environment:null,Ne=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:fr,Ie=(F.isMeshStandardMaterial?me:te).get(F.envMap||Re),Ye=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!F.normalMap&&!!k.attributes.tangent,Ve=!!k.morphAttributes.position,pt=!!k.morphAttributes.normal,Mr=!!k.morphAttributes.color,is=F.toneMapped?p.toneMapping:Li,rs=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zn=rs!==void 0?rs.length:0,qe=j.get(F),ss=h.state.lights;if($===!0&&(O===!0||E!==S)){let Kn=E===S&&F.id===_;M.setState(F,E,Kn)}let _t=!1;F.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ss.state.version||qe.outputEncoding!==Ne||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ie||F.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==M.numPlanes||qe.numIntersection!==M.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ue||qe.morphTargets!==Ve||qe.morphNormals!==pt||qe.morphColors!==Mr||qe.toneMapping!==is||Pe.isWebGL2===!0&&qe.morphTargetsCount!==Zn)&&(_t=!0):(_t=!0,qe.__version=F.version);let Qn=qe.currentProgram;_t===!0&&(Qn=uh(F,N,W));let Fi=!1,To=!1,ch=!1,qt=Qn.getUniforms(),Ao=qe.uniforms;if(ie.useProgram(Qn.program)&&(Fi=!0,To=!0,ch=!0),F.id!==_&&(_=F.id,To=!0),Fi||S!==E){if(qt.setValue(V,"projectionMatrix",E.projectionMatrix),Pe.logarithmicDepthBuffer&&qt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,To=!0,ch=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){let Kn=qt.map.cameraPosition;Kn!==void 0&&Kn.setValue(V,ae.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&qt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&qt.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){qt.setOptional(V,W,"bindMatrix"),qt.setOptional(V,W,"bindMatrixInverse");let Kn=W.skeleton;Kn&&(Pe.floatVertexTextures?(Kn.boneTexture===null&&Kn.computeBoneTexture(),qt.setValue(V,"boneTexture",Kn.boneTexture,q),qt.setValue(V,"boneTextureSize",Kn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let hh=k.morphAttributes;return(hh.position!==void 0||hh.normal!==void 0||hh.color!==void 0&&Pe.isWebGL2===!0)&&ue.update(W,k,F,Qn),(To||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,qt.setValue(V,"receiveShadow",W.receiveShadow)),To&&(qt.setValue(V,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&Ay(Ao,ch),Ae&&F.fog===!0&&rt.refreshFogUniforms(Ao,Ae),rt.refreshMaterialUniforms(Ao,F,I,P,H),hr.upload(V,qe.uniformsList,Ao,q)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(hr.upload(V,qe.uniformsList,Ao,q),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&qt.setValue(V,"center",W.center),qt.setValue(V,"modelViewMatrix",W.modelViewMatrix),qt.setValue(V,"normalMatrix",W.normalMatrix),qt.setValue(V,"modelMatrix",W.matrixWorld),Qn}function Ay(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Cy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,N,k){j.get(E.texture).__webglTexture=N,j.get(E.depthTexture).__webglTexture=k;let F=j.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){let k=j.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){x=E,v=N,y=k;let F=!0;if(E){let Ie=j.get(E);Ie.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(36160,null),F=!1):Ie.__webglFramebuffer===void 0?q.setupRenderTarget(E):Ie.__hasExternalTextures&&q.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture)}let W=null,Ae=!1,Re=!1;if(E){let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(Re=!0);let Ye=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Ye[N],Ae=!0):Pe.isWebGL2&&E.samples>0&&q.useMultisampledRTT(E)===!1?W=j.get(E).__webglMultisampledFramebuffer:W=Ye,T.copy(E.viewport),R.copy(E.scissor),w=E.scissorTest}else T.copy(D).multiplyScalar(I).floor(),R.copy(G).multiplyScalar(I).floor(),w=z;if(ie.bindFramebuffer(36160,W)&&Pe.drawBuffers&&F&&ie.drawBuffers(E,W),ie.viewport(T),ie.scissor(R),ie.setScissorTest(w),Ae){let Ie=j.get(E.texture);V.framebufferTexture2D(36160,36064,34069+N,Ie.__webglTexture,k)}else if(Re){let Ie=j.get(E.texture),Ye=N||0;V.framebufferTextureLayer(36160,36064,Ie.__webglTexture,k||0,Ye)}_=-1},this.readRenderTargetPixels=function(E,N,k,F,W,Ae,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ie.bindFramebuffer(36160,Ne);try{let Ie=E.texture,Ye=Ie.format,Ue=Ie.type;if(Ye!==jn&&U.convert(Ye)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=Ue===za&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==Yr&&U.convert(Ue)!==V.getParameter(35738)&&!(Ue===Wr&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-F&&k>=0&&k<=E.height-W&&V.readPixels(N,k,F,W,U.convert(Ye),U.convert(Ue),Ae)}finally{let Ie=x!==null?j.get(x).__webglFramebuffer:null;ie.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(E,N,k=0){if(N.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}let F=Math.pow(2,-k),W=Math.floor(N.image.width*F),Ae=Math.floor(N.image.height*F);q.setTexture2D(N,0),V.copyTexSubImage2D(3553,k,0,0,E.x,E.y,W,Ae),ie.unbindTexture()},this.copyTextureToTexture=function(E,N,k,F=0){let W=N.image.width,Ae=N.image.height,Re=U.convert(k.format),Ne=U.convert(k.type);q.setTexture2D(k,0),V.pixelStorei(37440,k.flipY),V.pixelStorei(37441,k.premultiplyAlpha),V.pixelStorei(3317,k.unpackAlignment),N.isDataTexture?V.texSubImage2D(3553,F,E.x,E.y,W,Ae,Re,Ne,N.image.data):N.isCompressedTexture?V.compressedTexSubImage2D(3553,F,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Re,N.mipmaps[0].data):V.texSubImage2D(3553,F,E.x,E.y,Re,Ne,N.image),F===0&&k.generateMipmaps&&V.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k,F,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,Ie=U.convert(F.format),Ye=U.convert(F.type),Ue;if(F.isData3DTexture)q.setTexture3D(F,0),Ue=32879;else if(F.isDataArrayTexture)q.setTexture2DArray(F,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,F.flipY),V.pixelStorei(37441,F.premultiplyAlpha),V.pixelStorei(3317,F.unpackAlignment);let Ve=V.getParameter(3314),pt=V.getParameter(32878),Mr=V.getParameter(3316),is=V.getParameter(3315),rs=V.getParameter(32877),Zn=k.isCompressedTexture?k.mipmaps[0]:k.image;V.pixelStorei(3314,Zn.width),V.pixelStorei(32878,Zn.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),k.isDataTexture||k.isData3DTexture?V.texSubImage3D(Ue,W,N.x,N.y,N.z,Ae,Re,Ne,Ie,Ye,Zn.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ue,W,N.x,N.y,N.z,Ae,Re,Ne,Ie,Zn.data)):V.texSubImage3D(Ue,W,N.x,N.y,N.z,Ae,Re,Ne,Ie,Ye,Zn),V.pixelStorei(3314,Ve),V.pixelStorei(32878,pt),V.pixelStorei(3316,Mr),V.pixelStorei(3315,is),V.pixelStorei(32877,rs),W===0&&F.generateMipmaps&&V.generateMipmap(Ue),ie.unbindTexture()},this.initTexture=function(E){q.setTexture2D(E,0),ie.unbindTexture()},this.resetState=function(){v=0,y=0,x=null,ie.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}je.prototype.isWebGLRenderer=!0;var Lp=class extends je{};Lp.prototype.isWebGL1Renderer=!0;var ja=class{constructor(e,t=25e-5){this.name="",this.color=new he(e),this.density=t}clone(){return new ja(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};ja.prototype.isFogExp2=!0;var $a=class{constructor(e,t=1,i=1e3){this.name="",this.color=new he(e),this.near=t,this.far=i}clone(){return new $a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};$a.prototype.isFog=!0;var go=class extends Ge{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};go.prototype.isScene=!0;var Jr=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};Jr.prototype.isInterleavedBuffer=!0;var Jt=new A,Zr=class{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};Zr.prototype.isInterleavedBufferAttribute=!0;var Ya=class extends ut{constructor(e){super(),this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};Ya.prototype.isSpriteMaterial=!0;var Js,Ea=new A,Zs=new A,Qs=new A,Ks=new J,ba=new J,cy=new ye,ac=new A,Ta=new A,lc=new A,S2=new J,lp=new J,E2=new J,Pp=class extends Ge{constructor(e){if(super(),this.type="Sprite",Js===void 0){Js=new Ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jr(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Zr(i,3,0,!1)),Js.setAttribute("uv",new Zr(i,2,3,!1))}this.geometry=Js,this.material=e!==void 0?e:new Ya,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),cy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Qs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;uc(ac.set(-.5,-.5,0),Qs,o,Zs,r,s),uc(Ta.set(.5,-.5,0),Qs,o,Zs,r,s),uc(lc.set(.5,.5,0),Qs,o,Zs,r,s),S2.set(0,0),lp.set(1,0),E2.set(1,1);let a=e.ray.intersectTriangle(ac,Ta,lc,!1,Ea);if(a===null&&(uc(Ta.set(-.5,.5,0),Qs,o,Zs,r,s),lp.set(0,1),a=e.ray.intersectTriangle(ac,lc,Ta,!1,Ea),a===null))return;let l=e.ray.origin.distanceTo(Ea);l<e.near||l>e.far||t.push({distance:l,point:Ea.clone(),uv:gt.getUV(Ea,ac,Ta,lc,S2,lp,E2,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Pp.prototype.isSprite=!0;function uc(n,e,t,i,r,s){Ks.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ba.x=s*Ks.x-r*Ks.y,ba.y=r*Ks.x+s*Ks.y):ba.copy(Ks),n.copy(e),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(cy)}var b2=new A,T2=new Xe,A2=new Xe,L5=new A,C2=new ye,Dc=class extends yt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,r=this.geometry;T2.fromBufferAttribute(r.attributes.skinIndex,e),A2.fromBufferAttribute(r.attributes.skinWeight,e),b2.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=A2.getComponent(s);if(o!==0){let a=T2.getComponent(s);C2.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(L5.copy(b2).applyMatrix4(C2),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};Dc.prototype.isSkinnedMesh=!0;var Ip=class extends Ge{constructor(){super(),this.type="Bone"}};Ip.prototype.isBone=!0;var Dp=class extends St{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Pt,c=Pt,f,h){super(null,o,a,l,u,c,r,s,f,h),this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};Dp.prototype.isDataTexture=!0;var Ja=class extends xt{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};Ja.prototype.isInstancedBufferAttribute=!0;var R2=new ye,L2=new ye,cc=[],Aa=new yt,Np=class extends yt{constructor(e,t,i){super(e,t),this.instanceMatrix=new Ja(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,R2),L2.multiplyMatrices(i,R2),Aa.matrixWorld=L2,Aa.raycast(e,cc);for(let o=0,a=cc.length;o<a;o++){let l=cc[o];l.instanceId=s,l.object=this,t.push(l)}cc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ja(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};Np.prototype.isInstancedMesh=!0;var Rn=class extends ut{constructor(e){super(),this.type="LineBasicMaterial",this.color=new he(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};Rn.prototype.isLineBasicMaterial=!0;var P2=new A,I2=new A,D2=new ye,up=new pr,hc=new dr,Za=class extends Ge{constructor(e=new Ze,t=new Rn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)P2.fromBufferAttribute(t,r-1),I2.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=P2.distanceTo(I2);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(r),hc.radius+=s,e.ray.intersectsSphere(hc)===!1)return;D2.copy(r).invert(),up.copy(e.ray).applyMatrix4(D2);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new A,c=new A,f=new A,h=new A,d=this.isLineSegments?2:1;if(i.isBufferGeometry){let m=i.index,g=i.attributes.position;if(m!==null){let v=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=v,_=y-1;x<_;x+=d){let S=m.getX(x),T=m.getX(x+1);if(u.fromBufferAttribute(g,S),c.fromBufferAttribute(g,T),up.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=v,_=y-1;x<_;x+=d){if(u.fromBufferAttribute(g,x),c.fromBufferAttribute(g,x+1),up.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Za.prototype.isLine=!0;var N2=new A,F2=new A,gr=class extends Za{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)N2.fromBufferAttribute(t,r),F2.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+N2.distanceTo(F2);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};gr.prototype.isLineSegments=!0;var Fp=class extends Za{constructor(e,t){super(e,t),this.type="LineLoop"}};Fp.prototype.isLineLoop=!0;var ci=class extends ut{constructor(e){super(),this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};ci.prototype.isPointsMaterial=!0;var z2=new ye,zp=new pr,fc=new dr,dc=new A,Qr=class extends Ge{constructor(e=new Ze,t=new ci){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(r),fc.radius+=s,e.ray.intersectsSphere(fc)===!1)return;z2.copy(r).invert(),zp.copy(e.ray).applyMatrix4(z2);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(i.isBufferGeometry){let u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=h,p=d;m<p;m++){let g=u.getX(m);dc.fromBufferAttribute(f,g),k2(dc,g,l,r,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,p=d;m<p;m++)dc.fromBufferAttribute(f,m),k2(dc,m,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Qr.prototype.isPoints=!0;function k2(n,e,t,i,r,s,o){let a=zp.distanceSqToPoint(n);if(a<t){let l=new A;zp.closestPointToPoint(n,l),l.applyMatrix4(i);let u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var kp=class extends St{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.minFilter=o!==void 0?o:an,this.magFilter=s!==void 0?s:an,this.generateMipmaps=!1;let c=this;function f(){c.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};kp.prototype.isVideoTexture=!0;var Op=class extends St{constructor(e,t,i){super({width:e,height:t}),this.format=i,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}};Op.prototype.isFramebufferTexture=!0;var Bp=class extends St{constructor(e,t,i,r,s,o,a,l,u,c,f,h){super(null,o,a,l,u,c,r,s,f,h),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Bp.prototype.isCompressedTexture=!0;var Up=class extends St{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.needsUpdate=!0}};Up.prototype.isCanvasTexture=!0;var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new J:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new A,r=[],s=[],o=[],a=new A,l=new ye;for(let d=0;d<=e;d++){let m=d/e;r[d]=this.getTangentAt(m,new A)}s[0]=new A,o[0]=new A;let u=Number.MAX_VALUE,c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(kt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(kt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vo=class extends ln{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new J,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};vo.prototype.isEllipseCurve=!0;var Nc=class extends vo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.type="ArcCurve"}};Nc.prototype.isArcCurve=!0;function _0(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var pc=new A,cp=new _0,hp=new _0,fp=new _0,Fc=class extends ln{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(pc.subVectors(r[0],r[1]).add(r[0]),u=pc);let f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(pc.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=pc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(c),d);p<1e-4&&(p=1),m<1e-4&&(m=p),g<1e-4&&(g=p),cp.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,m,p,g),hp.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,m,p,g),fp.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,m,p,g)}else this.curveType==="catmullrom"&&(cp.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),hp.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),fp.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(cp.calc(l),hp.calc(l),fp.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Fc.prototype.isCatmullRomCurve3=!0;function O2(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function P5(n,e){let t=1-n;return t*t*e}function I5(n,e){return 2*(1-n)*n*e}function D5(n,e){return n*n*e}function Ia(n,e,t,i){return P5(n,e)+I5(n,t)+D5(n,i)}function N5(n,e){let t=1-n;return t*t*t*e}function F5(n,e){let t=1-n;return 3*t*t*n*e}function z5(n,e){return 3*(1-n)*n*n*e}function k5(n,e){return n*n*n*e}function Da(n,e,t,i,r){return N5(n,e)+F5(n,t)+z5(n,i)+k5(n,r)}var Qa=class extends ln{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,r.x,s.x,o.x,a.x),Da(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Qa.prototype.isCubicBezierCurve=!0;var zc=class extends ln{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,r.x,s.x,o.x,a.x),Da(e,r.y,s.y,o.y,a.y),Da(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};zc.prototype.isCubicBezierCurve3=!0;var yo=class extends ln{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new J;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};yo.prototype.isLineCurve=!0;var Hp=class extends ln{constructor(e=new A,t=new A){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends ln{constructor(e=new J,t=new J,i=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ia(e,r.x,s.x,o.x),Ia(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ka.prototype.isQuadraticBezierCurve=!0;var kc=class extends ln{constructor(e=new A,t=new A,i=new A){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ia(e,r.x,s.x,o.x),Ia(e,r.y,s.y,o.y),Ia(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};kc.prototype.isQuadraticBezierCurve3=!0;var el=class extends ln{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(O2(a,l.x,u.x,c.x,f.x),O2(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new J().fromArray(r))}return this}};el.prototype.isSplineCurve=!0;var hy=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Fc,CubicBezierCurve:Qa,CubicBezierCurve3:zc,EllipseCurve:vo,LineCurve:yo,LineCurve3:Hp,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:kc,SplineCurve:el}),Vp=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new yo(t,e))}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){let c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new hy[r.type]().fromJSON(r))}return this}},tl=class extends Vp{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new yo(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ka(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Qa(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new el(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let u=new vo(e,t,i,r,s,o,a,l);if(this.curves.length>0){let f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);let c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var NE=new A,FE=new A,zE=new A,kE=new gt;var Kr=class extends tl{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new tl().fromJSON(r))}return this}},O5={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=fy(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,d;if(i&&(s=G5(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let m=t;m<r;m+=t)f=n[m],h=n[m+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);d=Math.max(u-a,c-l),d=d!==0?1/d:0}return nl(s,o,t,a,l,d),o}};function fy(n,e,t,i,r){let s,o;if(r===eE(n,e,t,i)>0)for(s=e;s<t;s+=i)o=B2(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=B2(s,n[s],n[s+1],o);return o&&rh(o,o.next)&&(rl(o),o=o.next),o}function vr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rh(t,t.next)||dt(t.prev,t,t.next)===0)){if(rl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function nl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&$5(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?U5(n,i,r,s):B5(n)){e.push(l.i/t),e.push(n.i/t),e.push(u.i/t),rl(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=H5(vr(n),e,t),nl(n,e,t,i,r,s,2)):o===2&&V5(n,e,t,i,r,s):nl(vr(n),e,t,i,r,s,1);break}}}function B5(n){let e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(ro(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&dt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function U5(n,e,t,i){let r=n.prev,s=n,o=n.next;if(dt(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,u=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,c=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,f=Gp(a,l,e,t,i),h=Gp(u,c,e,t,i),d=n.prevZ,m=n.nextZ;for(;d&&d.z>=f&&m&&m.z<=h;){if(d!==n.prev&&d!==n.next&&ro(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&dt(d.prev,d,d.next)>=0||(d=d.prevZ,m!==n.prev&&m!==n.next&&ro(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&dt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=f;){if(d!==n.prev&&d!==n.next&&ro(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&dt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=h;){if(m!==n.prev&&m!==n.next&&ro(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&dt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function H5(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!rh(r,s)&&dy(r,i,i.next,s)&&il(r,s)&&il(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),rl(i),rl(i.next),i=n=s),i=i.next}while(i!==n);return vr(i)}function V5(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z5(o,a)){let l=py(o,a);o=vr(o,o.next),l=vr(l,l.next),nl(o,e,t,i,r,s),nl(l,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function G5(n,e,t,i){let r=[],s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=fy(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(J5(u));for(r.sort(W5),s=0;s<r.length;s++)q5(r[s],t),t=vr(t,t.next);return t}function W5(n,e){return n.x-e.x}function q5(n,e){if(e=X5(n,e),e){let t=py(e,n);vr(e,e.next),vr(t,t.next)}}function X5(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s){if(s=h,h===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;let a=o,l=o.x,u=o.y,c=1/0,f;t=o;do i>=t.x&&t.x>=l&&i!==t.x&&ro(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(i-t.x),il(t,n)&&(f<c||f===c&&(t.x>o.x||t.x===o.x&&j5(o,t)))&&(o=t,c=f)),t=t.next;while(t!==a);return o}function j5(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function $5(n,e,t,i){let r=n;do r.z===null&&(r.z=Gp(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Y5(r)}function Y5(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function Gp(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function J5(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ro(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function Z5(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Q5(n,e)&&(il(n,e)&&il(e,n)&&K5(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||rh(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rh(n,e){return n.x===e.x&&n.y===e.y}function dy(n,e,t,i){let r=gc(dt(n,e,t)),s=gc(dt(n,e,i)),o=gc(dt(t,i,n)),a=gc(dt(t,i,e));return!!(r!==s&&o!==a||r===0&&mc(n,t,e)||s===0&&mc(n,i,e)||o===0&&mc(t,n,i)||a===0&&mc(t,e,i))}function mc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function gc(n){return n>0?1:n<0?-1:0}function Q5(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function il(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function K5(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function py(n,e){let t=new Wp(n.i,n.x,n.y),i=new Wp(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function B2(n,e,t,i){let r=new Wp(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function rl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wp(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eE(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var ui=class{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];U2(e),H2(i,e);let o=e.length;t.forEach(U2);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,H2(i,t[l]);let a=O5.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function U2(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function H2(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var yr=class extends Ze{constructor(e=new Kr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let u=e[a];o(u)}this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function o(a){let l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:tE;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),f=t.amount);let x,_=!1,S,T,R,w;v&&(x=v.getSpacedPoints(c),_=!0,h=!1,S=v.computeFrenetFrames(c,!1),T=new A,R=new A,w=new A),h||(g=0,d=0,m=0,p=0);let C=a.extractPoints(u),P=C.shape,I=C.holes;if(!ui.isClockWise(P)){P=P.reverse();for(let j=0,q=I.length;j<q;j++){let te=I[j];ui.isClockWise(te)&&(I[j]=te.reverse())}}let re=ui.triangulateShape(P,I),D=P;for(let j=0,q=I.length;j<q;j++){let te=I[j];P=P.concat(te)}function G(j,q,te){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().multiplyScalar(te).add(j)}let z=P.length,X=re.length;function $(j,q,te){let me,ce,Ce,Me=j.x-q.x,_e=j.y-q.y,rt=te.x-j.x,Ke=te.y-j.y,b=Me*Me+_e*_e,M=Me*Ke-_e*rt;if(Math.abs(M)>Number.EPSILON){let B=Math.sqrt(b),Q=Math.sqrt(rt*rt+Ke*Ke),ue=q.x-_e/B,de=q.y+Me/B,we=te.x-Ke/Q,U=te.y+rt/Q,Le=((we-ue)*Ke-(U-de)*rt)/(Me*Ke-_e*rt);me=ue+Me*Le-j.x,ce=de+_e*Le-j.y;let De=me*me+ce*ce;if(De<=2)return new J(me,ce);Ce=Math.sqrt(De/2)}else{let B=!1;Me>Number.EPSILON?rt>Number.EPSILON&&(B=!0):Me<-Number.EPSILON?rt<-Number.EPSILON&&(B=!0):Math.sign(_e)===Math.sign(Ke)&&(B=!0),B?(me=-_e,ce=Me,Ce=Math.sqrt(b)):(me=Me,ce=_e,Ce=Math.sqrt(b/2))}return new J(me/Ce,ce/Ce)}let O=[];for(let j=0,q=D.length,te=q-1,me=j+1;j<q;j++,te++,me++)te===q&&(te=0),me===q&&(me=0),O[j]=$(D[j],D[te],D[me]);let H=[],K,Y=O.concat();for(let j=0,q=I.length;j<q;j++){let te=I[j];K=[];for(let me=0,ce=te.length,Ce=ce-1,Me=me+1;me<ce;me++,Ce++,Me++)Ce===ce&&(Ce=0),Me===ce&&(Me=0),K[me]=$(te[me],te[Ce],te[Me]);H.push(K),Y=Y.concat(K)}for(let j=0;j<g;j++){let q=j/g,te=d*Math.cos(q*Math.PI/2),me=m*Math.sin(q*Math.PI/2)+p;for(let ce=0,Ce=D.length;ce<Ce;ce++){let Me=G(D[ce],O[ce],me);We(Me.x,Me.y,-te)}for(let ce=0,Ce=I.length;ce<Ce;ce++){let Me=I[ce];K=H[ce];for(let _e=0,rt=Me.length;_e<rt;_e++){let Ke=G(Me[_e],K[_e],me);We(Ke.x,Ke.y,-te)}}}let ae=m+p;for(let j=0;j<z;j++){let q=h?G(P[j],Y[j],ae):P[j];_?(R.copy(S.normals[0]).multiplyScalar(q.x),T.copy(S.binormals[0]).multiplyScalar(q.y),w.copy(x[0]).add(R).add(T),We(w.x,w.y,w.z)):We(q.x,q.y,0)}for(let j=1;j<=c;j++)for(let q=0;q<z;q++){let te=h?G(P[q],Y[q],ae):P[q];_?(R.copy(S.normals[j]).multiplyScalar(te.x),T.copy(S.binormals[j]).multiplyScalar(te.y),w.copy(x[j]).add(R).add(T),We(w.x,w.y,w.z)):We(te.x,te.y,f/c*j)}for(let j=g-1;j>=0;j--){let q=j/g,te=d*Math.cos(q*Math.PI/2),me=m*Math.sin(q*Math.PI/2)+p;for(let ce=0,Ce=D.length;ce<Ce;ce++){let Me=G(D[ce],O[ce],me);We(Me.x,Me.y,f+te)}for(let ce=0,Ce=I.length;ce<Ce;ce++){let Me=I[ce];K=H[ce];for(let _e=0,rt=Me.length;_e<rt;_e++){let Ke=G(Me[_e],K[_e],me);_?We(Ke.x,Ke.y+x[c-1].y,x[c-1].x+te):We(Ke.x,Ke.y,f+te)}}}ve(),xe();function ve(){let j=r.length/3;if(h){let q=0,te=z*q;for(let me=0;me<X;me++){let ce=re[me];Ee(ce[2]+te,ce[1]+te,ce[0]+te)}q=c+g*2,te=z*q;for(let me=0;me<X;me++){let ce=re[me];Ee(ce[0]+te,ce[1]+te,ce[2]+te)}}else{for(let q=0;q<X;q++){let te=re[q];Ee(te[2],te[1],te[0])}for(let q=0;q<X;q++){let te=re[q];Ee(te[0]+z*c,te[1]+z*c,te[2]+z*c)}}i.addGroup(j,r.length/3-j,0)}function xe(){let j=r.length/3,q=0;V(D,q),q+=D.length;for(let te=0,me=I.length;te<me;te++){let ce=I[te];V(ce,q),q+=ce.length}i.addGroup(j,r.length/3-j,1)}function V(j,q){let te=j.length;for(;--te>=0;){let me=te,ce=te-1;ce<0&&(ce=j.length-1);for(let Ce=0,Me=c+g*2;Ce<Me;Ce++){let _e=z*Ce,rt=z*(Ce+1),Ke=q+me+_e,b=q+ce+_e,M=q+ce+rt,B=q+me+rt;Pe(Ke,b,M,B)}}}function We(j,q,te){l.push(j),l.push(q),l.push(te)}function Ee(j,q,te){ie(j),ie(q),ie(te);let me=r.length/3,ce=y.generateTopUV(i,r,me-3,me-2,me-1);ke(ce[0]),ke(ce[1]),ke(ce[2])}function Pe(j,q,te,me){ie(j),ie(q),ie(me),ie(q),ie(te),ie(me);let ce=r.length/3,Ce=y.generateSideWallUV(i,r,ce-6,ce-3,ce-2,ce-1);ke(Ce[0]),ke(Ce[1]),ke(Ce[3]),ke(Ce[1]),ke(Ce[2]),ke(Ce[3])}function ie(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function ke(j){s.push(j.x),s.push(j.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return nE(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hy[r.type]().fromJSON(r)),new yr(i,e.options)}},tE={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new J(s,o),new J(a,l),new J(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],m=e[r*3+2],p=e[s*3],g=e[s*3+1],v=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new J(o,1-l),new J(u,1-f),new J(h,1-m),new J(p,1-v)]:[new J(a,1-l),new J(c,1-f),new J(d,1-m),new J(g,1-v)]}};function nE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var sl=class extends Ze{constructor(e=new Kr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(s,3)),this.setAttribute("uv",new et(o,2));function u(c){let f=r.length/3,h=c.extractPoints(t),d=h.shape,m=h.holes;ui.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,v=m.length;g<v;g++){let y=m[g];ui.isClockWise(y)===!0&&(m[g]=y.reverse())}let p=ui.triangulateShape(d,m);for(let g=0,v=m.length;g<v;g++){let y=m[g];d=d.concat(y)}for(let g=0,v=d.length;g<v;g++){let y=d[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,v=p.length;g<v;g++){let y=p[g],x=y[0]+f,_=y[1]+f,S=y[2]+f;i.push(x,_,S),l+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return iE(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new sl(i,e.curveSegments)}};function iE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Oc=class extends ut{constructor(e){super(),this.type="ShadowMaterial",this.color=new he(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};Oc.prototype.isShadowMaterial=!0;var Bc=class extends xn{constructor(e){super(e),this.type="RawShaderMaterial"}};Bc.prototype.isRawShaderMaterial=!0;var ol=class extends ut{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};ol.prototype.isMeshStandardMaterial=!0;var Uc=class extends ol{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Uc.prototype.isMeshPhysicalMaterial=!0;var xr=class extends ut{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};xr.prototype.isMeshPhongMaterial=!0;var Hc=class extends ut{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};Hc.prototype.isMeshToonMaterial=!0;var Vc=class extends ut{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Vc.prototype.isMeshNormalMaterial=!0;var Gc=class extends ut{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};Gc.prototype.isMeshLambertMaterial=!0;var Wc=class extends ut{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new he(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};Wc.prototype.isMeshMatcapMaterial=!0;var qc=class extends Rn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};qc.prototype.isLineDashedMaterial=!0;var rE={ShadowMaterial:Oc,SpriteMaterial:Ya,RawShaderMaterial:Bc,ShaderMaterial:xn,PointsMaterial:ci,MeshPhysicalMaterial:Uc,MeshStandardMaterial:ol,MeshPhongMaterial:xr,MeshToonMaterial:Hc,MeshNormalMaterial:Vc,MeshLambertMaterial:Gc,MeshDepthMaterial:qa,MeshDistanceMaterial:Xa,MeshBasicMaterial:mr,MeshMatcapMaterial:Wc,LineDashedMaterial:qc,LineBasicMaterial:Rn,Material:ut};ut.fromType=function(n){return new rE[n]};var lt={arraySlice:function(n,e,t){return lt.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let u=s.tracks[l],c=u.getValueSize(),f=[],h=[];for(let d=0;d<u.times.length;++d){let m=u.times[d]*r;if(!(m<t||m>=i)){f.push(u.times[d]);for(let p=0;p<c;++p)h.push(u.values[d*c+p])}}f.length!==0&&(u.times=lt.convertArray(f,u.times.constructor),u.values=lt.convertArray(h,u.values.constructor),o.push(u))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let u=n.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(u===void 0)continue;let c=0,f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=f/3);let h=0,d=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let m=a.times.length-1,p;if(s<=a.times[0]){let v=c,y=f-c;p=lt.arraySlice(a.values,v,y)}else if(s>=a.times[m]){let v=m*f+c,y=v+f-c;p=lt.arraySlice(a.values,v,y)}else{let v=a.createInterpolant(),y=c,x=f-c;v.evaluate(s),p=lt.arraySlice(v.resultBuffer,y,x)}l==="quaternion"&&new Wt().fromArray(p).normalize().conjugate().toArray(p);let g=u.times.length;for(let v=0;v<g;++v){let y=v*d+h;if(l==="quaternion")Wt.multiplyQuaternionsFlat(u.values,y,p,0,u.values,y);else{let x=d-h*2;for(let _=0;_<x;++_)u.values[y+_]-=p[_]}}}return n.blendMode=K2,n}},hi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};hi.prototype.beforeStart_=hi.prototype.copySampleValue_;hi.prototype.afterEnd_=hi.prototype.copySampleValue_;var qp=class extends hi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:to,endingEnd:to}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case no:s=e,a=2*t-i;break;case Ec:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case no:o=e,l=2*i-t;break;case Ec:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),p=m*m,g=p*m,v=-h*g+2*h*p-h*m,y=(1+h)*g+(-1.5-2*h)*p+(-.5+h)*m+1,x=(-1-d)*g+(1.5+d)*p+.5*m,_=d*g-d*p;for(let S=0;S!==a;++S)s[S]=v*o[c+S]+y*o[u+S]+x*o[l+S]+_*o[f+S];return s}},Xc=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let h=0;h!==a;++h)s[h]=o[u+h]*f+o[l+h]*c;return s}},Xp=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lt.convertArray(t,this.TimeBufferType),this.values=lt.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lt.convertArray(e.times,Array),values:lt.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mc:t=this.InterpolantFactoryMethodDiscrete;break;case Sc:t=this.InterpolantFactoryMethodLinear;break;case Dd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mc;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return Dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=lt.arraySlice(i,s,o),this.values=lt.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lt.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){let u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=lt.arraySlice(this.times),t=lt.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Dd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{let f=a*i,h=f-i,d=f+i;for(let m=0;m!==i;++m){let p=t[f+m];if(p!==t[h+m]||p!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=lt.arraySlice(e,0,o),this.values=lt.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=lt.arraySlice(this.times,0),t=lt.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Sc;var _r=class extends Ln{};_r.prototype.ValueTypeName="bool";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=Mc;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Ln{};jc.prototype.ValueTypeName="color";var xo=class extends Ln{};xo.prototype.ValueTypeName="number";var jp=class extends hi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),u=e*a;for(let c=u+a;u!==c;u+=4)Wt.slerpFlat(s,0,o,u-a,o,u,l);return s}},es=class extends Ln{InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Sc;es.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends Ln{};wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Mc;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends Ln{};_o.prototype.ValueTypeName="vector";var $c=class{constructor(e,t=-1,i,r=y0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(oE(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ln.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);let c=lt.getKeyframeOrder(l);l=lt.sortedArray(l,1,c),u=lt.sortedArray(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new xo(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let u=e[a],c=u.name.match(s);if(c&&c.length>1){let f=c[1],h=r[f];h||(r[f]=h=[]),h.push(u)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(f,h,d,m,p){if(d.length!==0){let g=[],v=[];lt.flattenJSON(d,g,v,m),g.length!==0&&p.push(new f(h,g,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,u=e.hierarchy||[];for(let f=0;f<u.length;f++){let h=u[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let d={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let p=0;p<h[m].morphTargets.length;p++)d[h[m].morphTargets[p]]=-1;for(let p in d){let g=[],v=[];for(let y=0;y!==h[m].morphTargets.length;++y){let x=h[m];g.push(x.time),v.push(x.morphTarget===p?1:0)}r.push(new xo(".morphTargetInfluence["+p+"]",g,v))}l=d.length*o}else{let d=".bones["+t[f].name+"]";i(_o,d+".position",h,"pos",r),i(es,d+".quaternion",h,"rot",r),i(_o,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function sE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return jc;case"quaternion":return es;case"bool":case"boolean":return _r;case"string":return wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function oE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sE(n.type);if(n.times===void 0){let t=[],i=[];lt.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var wo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},$p=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){let f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){let d=u[f],m=u[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return m}return null}}},w0=new $p,un=class{constructor(e){this.manager=e!==void 0?e:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Ai={},ts=class extends un{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=wo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let c=Ai[e],f=u.body.getReader(),h=u.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0,p=0,g=new ReadableStream({start(v){y();function y(){f.read().then(({done:x,value:_})=>{if(x)v.close();else{p+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:p,total:d});for(let T=0,R=c.length;T<R;T++){let w=c[T];w.onProgress&&w.onProgress(S)}v.enqueue(_),y()}})}}});return new Response(g)}else throw Error(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return u.arrayBuffer().then(m=>d.decode(m))}}}).then(u=>{wo.add(e,u);let c=Ai[e];delete Ai[e];for(let f=0,h=c.length;f<h;f++){let d=c[f];d.onLoad&&d.onLoad(u)}}).catch(u=>{let c=Ai[e];if(c===void 0)throw this.manager.itemError(e),u;delete Ai[e];for(let f=0,h=c.length;f<h;f++){let d=c[f];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Yc=class extends un{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=wo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Oa("img");function l(){c(),wo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Yp=class extends un{constructor(e){super(e)}load(e,t,i,r){let s=new po,o=new Yc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(u){o.load(e[u],function(c){s.images[u]=c,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let u=0;u<e.length;++u)l(u);return s}};var al=class extends un{constructor(e){super(e)}load(e,t,i,r){let s=new St,o=new Yc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Pn=class extends Ge{constructor(e,t=1){super(),this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Pn.prototype.isLight=!0;var Jp=class extends Pn{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.groundColor=new he(t)}copy(e){return Pn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};Jp.prototype.isHemisphereLight=!0;var V2=new ye,G2=new A,W2=new A,ll=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;G2.setFromMatrixPosition(e.matrixWorld),t.position.copy(G2),W2.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(W2),t.updateMatrixWorld(),V2.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V2),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jc=class extends ll{constructor(){super(new It(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,i=_p*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Jc.prototype.isSpotLightShadow=!0;var Zp=class extends Pn{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Jc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Zp.prototype.isSpotLight=!0;var q2=new ye,Ca=new A,dp=new A,Zc=class extends ll{constructor(){super(new It(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),dp.copy(i.position),dp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dp),i.updateMatrixWorld(),r.makeTranslation(-Ca.x,-Ca.y,-Ca.z),q2.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q2)}};Zc.prototype.isPointLightShadow=!0;var Qp=class extends Pn{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};Qp.prototype.isPointLight=!0;var Qc=class extends ll{constructor(){super(new Wa(-5,5,5,-5,.5,500))}};Qc.prototype.isDirectionalLightShadow=!0;var ul=class extends Pn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ul.prototype.isDirectionalLight=!0;var cl=class extends Pn{constructor(e,t){super(e,t),this.type="AmbientLight"}};cl.prototype.isAmbientLight=!0;var Kp=class extends Pn{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};Kp.prototype.isRectAreaLight=!0;var Kc=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}};Kc.prototype.isSphericalHarmonics3=!0;var hl=class extends Pn{constructor(e=new Kc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};hl.prototype.isLightProbe=!0;var fl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},e0=class extends Ze{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};e0.prototype.isInstancedBufferGeometry=!0;var t0=class extends un{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=wo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){wo.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};t0.prototype.isImageBitmapLoader=!0;var vc,aE={getContext:function(){return vc===void 0&&(vc=new(window.AudioContext||window.webkitAudioContext)),vc},setContext:function(n){vc=n}},n0=class extends un{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new ts(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);aE.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}},i0=class extends hl{constructor(e,t,i=1){super(void 0,i);let r=new he().set(e),s=new he().set(t),o=new A(r.r,r.g,r.b),a=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),u=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(u)}};i0.prototype.isHemisphereLightProbe=!0;var r0=class extends hl{constructor(e,t=1){super(void 0,t);let i=new he().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}};r0.prototype.isAmbientLightProbe=!0;var s0=class extends Ge{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var o0=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},a0=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,u=t+t;l!==u;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Wt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;Wt.multiplyQuaternionsFlat(e,o,e,t,e,i),Wt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},M0="\\[\\]\\.:\\/",lE=new RegExp("["+M0+"]","g"),S0="[^"+M0+"]",uE="[^"+M0.replace("\\.","")+"]",cE=/((?:WC+[\/:])*)/.source.replace("WC",S0),hE=/(WCOD+)?/.source.replace("WCOD",uE),fE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",S0),dE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",S0),pE=new RegExp("^"+cE+hE+fE+dE+"$"),mE=["material","materials","bones"],l0=class{constructor(e,t,i){let r=i||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Be=class{constructor(e,t,i){this.path=t,this.parsedPath=i||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,i):new Be(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lE,"")}static parseTrackName(e){let t=pE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);mE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[r];if(o===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=l0;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u0=class{constructor(){this.uuid=$n(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,u=this.nCachedObjects_;for(let c=0,f=arguments.length;c!==f;++c){let h=arguments[c],d=h.uuid,m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(h);for(let p=0,g=o;p!==g;++p)s[p].push(new Be(h,i[p],r[p]))}else if(m<u){a=e[m];let p=--u,g=e[p];t[g.uuid]=m,e[m]=g,t[d]=p,e[p]=h;for(let v=0,y=o;v!==y;++v){let x=s[v],_=x[p],S=x[m];x[m]=_,S===void 0&&(S=new Be(h,i[v],r[v])),x[p]=S}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=u}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],u=l.uuid,c=t[u];if(c!==void 0&&c>=s){let f=s++,h=e[f];t[h.uuid]=c,e[c]=h,t[u]=f,e[f]=l;for(let d=0,m=r;d!==m;++d){let p=i[d],g=p[f],v=p[c];p[c]=g,p[f]=v}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let u=arguments[a],c=u.uuid,f=t[c];if(f!==void 0)if(delete t[c],f<s){let h=--s,d=e[h],m=--o,p=e[m];t[d.uuid]=f,e[f]=d,t[p.uuid]=h,e[h]=p,e.pop();for(let g=0,v=r;g!==v;++g){let y=i[g],x=y[h],_=y[m];y[f]=x,y[h]=_,y.pop()}}else{let h=--o,d=e[h];h>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let m=0,p=r;m!==p;++m){let g=i[m];g[f]=g[h],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,l=this._objects,u=l.length,c=this.nCachedObjects_,f=new Array(u);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(f);for(let h=c,d=l.length;h!==d;++h){let m=l[h];f[h]=new Be(m,e,t)}return f}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],u=e[a];t[u]=i,o[i]=l,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}};u0.prototype.isAnimationObjectGroup=!0;var c0=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:to,endingEnd:to};for(let u=0;u!==o;++u){let c=s[u].createInterpolant(null);a[u]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=V_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,u=a.sampleValues;return l[0]=s,l[1]=s+i,u[0]=e/o,u[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case K2:for(let c=0,f=l.length;c!==f;++c)l[c].evaluate(o),u[c].accumulateAdditive(a);break;case y0:default:for(let c=0,f=l.length;c!==f;++c)l[c].evaluate(o),u[c].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===G_;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===H_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let u=e<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=no,r.endingEnd=no):(e?r.endingStart=this.zeroSlopeAtStart?no:to:r.endingStart=Ec,t?r.endingEnd=this.zeroSlopeAtEnd?no:to:r.endingEnd=Ec)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}},h0=class extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,u=this._bindingsByRootAndName,c=u[l];c===void 0&&(c={},u[l]=c);for(let f=0;f!==s;++f){let h=r[f],d=h.name,m=c[d];if(m!==void 0)++m.referenceCount,o[f]=m;else{if(m=o[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let p=t&&t._propertyBindings[f].binding.parsedPath;m=new a0(Be.create(i,d,p),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[f]=m}a[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,u=l[l.length-1],c=e._byClipCacheIndex;u._byClipCacheIndex=c,l[c]=u,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],u=e._cacheIndex;l._cacheIndex=u,t[u]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Xc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?$c.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],u=null;if(i===void 0&&(o!==null?i=o.blendMode:i=y0),l!==void 0){let f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===i)return f;u=l.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;let c=new c0(this,o,t,i);return this._bindAction(c,u),this._addInactiveAction(c,a,s),c}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?$c.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let u=0;u!==i;++u)t[u]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let u=0;u!==l;++u)a[u].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let u=o[a];this._deactivateAction(u);let c=u._cacheIndex,f=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,f._cacheIndex=c,t[c]=f,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};h0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var dl=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new dl(this.value.clone===void 0?this.value:this.value.clone())}},f0=class extends Jr{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};f0.prototype.isInstancedInterleavedBuffer=!0;var d0=class{constructor(e,t,i,r,s){this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};d0.prototype.isGLBufferAttribute=!0;var X2=new J,ns=class{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=X2.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return X2.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};ns.prototype.isBox2=!0;var j2=new A,yc=new A,p0=class{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){j2.subVectors(e,this.start),yc.subVectors(this.end,this.start);let i=yc.dot(yc),s=yc.dot(j2)/i;return t&&(s=kt(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ur=new A,xc=new ye,pp=new ye,m0=class extends gr{constructor(e){let t=my(e),i=new Ze,r=[],s=[],o=new he(0,0,1),a=new he(0,1,0);for(let u=0;u<t.length;u++){let c=t[u];c.parent&&c.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new et(r,3)),i.setAttribute("color",new et(s,3));let l=new Rn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");pp.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(xc.multiplyMatrices(pp,a.matrixWorld),ur.setFromMatrixPosition(xc),r.setXYZ(o,ur.x,ur.y,ur.z),xc.multiplyMatrices(pp,a.parent.matrixWorld),ur.setFromMatrixPosition(xc),r.setXYZ(o+1,ur.x,ur.y,ur.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function my(n){let e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,my(n.children[t]));return e}var g0=class extends gr{constructor(e=10,t=10,i=4473924,r=8947848){i=new he(i),r=new he(r);let s=t/2,o=e/t,a=e/2,l=[],u=[];for(let h=0,d=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let p=h===s?i:r;p.toArray(u,d),d+=3,p.toArray(u,d),d+=3,p.toArray(u,d),d+=3,p.toArray(u,d),d+=3}let c=new Ze;c.setAttribute("position",new et(l,3)),c.setAttribute("color",new et(u,3));let f=new Rn({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}};var gy=new ArrayBuffer(4),OE=new Float32Array(gy),BE=new Uint32Array(gy),oi=new Uint32Array(512),ai=new Uint32Array(512);for(let n=0;n<256;++n){let e=n-127;e<-27?(oi[n]=0,oi[n|256]=32768,ai[n]=24,ai[n|256]=24):e<-14?(oi[n]=1024>>-e-14,oi[n|256]=1024>>-e-14|32768,ai[n]=-e-1,ai[n|256]=-e-1):e<=15?(oi[n]=e+15<<10,oi[n|256]=e+15<<10|32768,ai[n]=13,ai[n|256]=13):e<128?(oi[n]=31744,oi[n|256]=64512,ai[n]=24,ai[n|256]=24):(oi[n]=31744,oi[n|256]=64512,ai[n]=13,ai[n|256]=13)}var vy=new Uint32Array(2048),pl=new Uint32Array(64),gE=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,vy[n]=e|t}for(let n=1024;n<2048;++n)vy[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)pl[n]=n<<23;pl[31]=1199570944;pl[32]=2147483648;for(let n=33;n<63;++n)pl[n]=2147483648+(n-32<<23);pl[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(gE[n]=1024);ln.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(ln.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};tl.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};g0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};m0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};un.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),fl.extractUrlBase(n)};un.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ns.prototype.center=function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)};ns.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ns.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};ns.prototype.size=function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)};yn.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};yn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};yn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};yn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};yn.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};Di.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};dr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};mo.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};p0.prototype.center=function(n){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Ct.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};Ct.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};Ct.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Ct.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};Ct.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Ct.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};ye.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};ye.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};ye.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ye.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ye.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};ye.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ye.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ye.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};ye.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};qn.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};Wt.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};Wt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};pr.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};pr.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};pr.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};gt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};gt.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};gt.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};gt.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};gt.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};gt.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),gt.getBarycoord(n,e,t,i,r)};gt.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),gt.getNormal(n,e,t,i)};Kr.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};Kr.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new yr(this,n)};Kr.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new sl(this,n)};J.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};J.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};A.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};A.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};A.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};A.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};A.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xe.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Xe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ge.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};Ge.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ge.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};Ge.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ge.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Ge.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});yt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(yt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),W_},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Dc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};It.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Pn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(xt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===bc},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(bc)}}});xt.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?bc:ka),this};xt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},xt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ze.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};Ze.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new xt(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};Ze.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};Ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ze.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};Ze.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Jr.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?bc:ka),this};Jr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};yr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};yr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};yr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};go.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};dl.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new he}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Y2}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(xn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});je.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};je.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};je.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?it:fr}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(uy.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Zt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});s0.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new n0().load(n,function(i){e.setBuffer(i)}),this};o0.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Va.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Va.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Ii.crossOrigin=void 0;Ii.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new al;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Ii.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new Yp;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Ii.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ii.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:v0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=v0);var yE=/^[og]\s*(.+)?/,xE=/^mtllib /,_E=/^usemtl /,wE=/^usemap /,yy=new A,E0=new A,xy=new A,_y=new A,In=new A,sh=new he;function ME(){let n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let u={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){let r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){let r=this.vertices,s=this.object.geometry.normals;yy.fromArray(r,e),E0.fromArray(r,t),xy.fromArray(r,i),In.subVectors(xy,E0),_y.subVectors(yy,E0),In.cross(_y),In.normalize(),s.push(In.x,In.y,In.z),s.push(In.x,In.y,In.z),s.push(In.x,In.y,In.z)},addColor:function(e,t,i){let r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){let r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,u){let c=this.vertices.length,f=this.parseVertexIndex(e,c),h=this.parseVertexIndex(t,c),d=this.parseVertexIndex(i,c);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){let m=this.normals.length;f=this.parseNormalIndex(a,m),h=this.parseNormalIndex(l,m),d=this.parseNormalIndex(u,m),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(r!==void 0&&r!==""){let m=this.uvs.length;f=this.parseUVIndex(r,m),h=this.parseUVIndex(s,m),d=this.parseUVIndex(o,m),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){let s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}var oh=class extends un{constructor(e){super(e),this.materials=null}load(e,t,i,r){let s=this,o=new ts(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new ME;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),r="",s="",o=0,a=[],l=typeof"".trimLeft=="function";for(let f=0,h=i.length;f<h;f++)if(r=i[f],r=l?r.trimLeft():r.trim(),o=r.length,o!==0&&(s=r.charAt(0),s!=="#"))if(s==="v"){let d=r.split(/\s+/);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(sh.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(sh.r,sh.g,sh.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(s==="f"){let m=r.slice(1).trim().split(/\s+/),p=[];for(let v=0,y=m.length;v<y;v++){let x=m[v];if(x.length>0){let _=x.split("/");p.push(_)}}let g=p[0];for(let v=1,y=p.length-1;v<y;v++){let x=p[v],_=p[v+1];t.addFace(g[0],x[0],_[0],g[1],x[1],_[1],g[2],x[2],_[2])}}else if(s==="l"){let d=r.substring(1).trim().split(" "),m=[],p=[];if(r.indexOf("/")===-1)m=d;else for(let g=0,v=d.length;g<v;g++){let y=d[g].split("/");y[0]!==""&&m.push(y[0]),y[1]!==""&&p.push(y[1])}t.addLineGeometry(m,p)}else if(s==="p"){let m=r.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((a=yE.exec(r))!==null){let d=(" "+a[0].slice(1).trim()).slice(1);t.startObject(d)}else if(_E.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(xE.test(r))t.materialLibraries.push(r.substring(7).trim());else if(wE.test(r))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(a=r.split(" "),a.length>1){let m=a[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(r==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+r+'"')}t.finalize();let u=new Ri;if(u.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=t.objects.length;f<h;f++){let d=t.objects[f],m=d.geometry,p=d.materials,g=m.type==="Line",v=m.type==="Points",y=!1;if(m.vertices.length===0)continue;let x=new Ze;x.setAttribute("position",new et(m.vertices,3)),m.normals.length>0&&x.setAttribute("normal",new et(m.normals,3)),m.colors.length>0&&(y=!0,x.setAttribute("color",new et(m.colors,3))),m.hasUVIndices===!0&&x.setAttribute("uv",new et(m.uvs,2));let _=[];for(let T=0,R=p.length;T<R;T++){let w=p[T],C=w.name+"_"+w.smooth+"_"+y,P=t.materials[C];if(this.materials!==null){if(P=this.materials.create(w.name),g&&P&&!(P instanceof Rn)){let I=new Rn;ut.prototype.copy.call(I,P),I.color.copy(P.color),P=I}else if(v&&P&&!(P instanceof ci)){let I=new ci({size:10,sizeAttenuation:!1});ut.prototype.copy.call(I,P),I.color.copy(P.color),I.map=P.map,P=I}}P===void 0&&(g?P=new Rn:v?P=new ci({size:1,sizeAttenuation:!1}):P=new xr,P.name=w.name,P.flatShading=!w.smooth,P.vertexColors=y,t.materials[C]=P),_.push(P)}let S;if(_.length>1){for(let T=0,R=p.length;T<R;T++){let w=p[T];x.addGroup(w.groupStart,w.groupCount,T)}g?S=new gr(x,_):v?S=new Qr(x,_):S=new yt(x,_)}else g?S=new gr(x,_[0]):v?S=new Qr(x,_[0]):S=new yt(x,_[0]);S.name=d.name,u.add(S)}else if(t.vertices.length>0){let f=new ci({size:1,sizeAttenuation:!1}),h=new Ze;h.setAttribute("position",new et(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new et(t.colors,3)),f.vertexColors=!0);let d=new Qr(h,f);u.add(d)}return u}};var ah=class extends un{constructor(e){super(e)}load(e,t,i,r){let s=this,o=this.path===""?fl.extractUrlBase(e):this.path,a=new ts(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},i,r)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){let i=e.split(`
`),r={},s=/\s+/,o={};for(let l=0;l<i.length;l++){let u=i[l];if(u=u.trim(),u.length===0||u.charAt(0)==="#")continue;let c=u.indexOf(" "),f=c>=0?u.substring(0,c):u;f=f.toLowerCase();let h=c>=0?u.substring(c+1):"";if(h=h.trim(),f==="newmtl")r={name:h},o[h]=r;else if(f==="ka"||f==="kd"||f==="ks"||f==="ke"){let d=h.split(s,3);r[f]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else r[f]=h}let a=new b0(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}},b0=class{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:$r,this.wrap=this.options.wrap!==void 0?this.options.wrap:Na}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;let t={};for(let i in e){let r=e[i],s={};t[i]=s;for(let o in r){let a=!0,l=r[o],u=o.toLowerCase();switch(u){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break;default:break}a&&(s[u]=l)}}return t}preload(){for(let e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(let t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){let t=this,i=this.materialsInfo[e],r={name:e,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(r[a])return;let u=t.getTextureParams(l,r),c=t.loadTexture(s(t.baseUrl,u.url));c.repeat.copy(u.scale),c.offset.copy(u.offset),c.wrapS=t.wrap,c.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(c.encoding=it),r[a]=c}for(let a in i){let l=i[a],u;if(l!=="")switch(a.toLowerCase()){case"kd":r.color=new he().fromArray(l).convertSRGBToLinear();break;case"ks":r.specular=new he().fromArray(l).convertSRGBToLinear();break;case"ke":r.emissive=new he().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),r.transparent=!0;break;case"ns":r.shininess=parseFloat(l);break;case"d":u=parseFloat(l),u<1&&(r.opacity=u,r.transparent=!0);break;case"tr":u=parseFloat(l),this.options&&this.options.invertTrProperty&&(u=1-u),u>0&&(r.opacity=1-u,r.transparent=!0);break;default:break}}return this.materials[e]=new xr(r),this.materials[e]}getTextureParams(e,t){let i={scale:new J(1,1),offset:new J(0,0)},r=e.split(/\s+/),s;return s=r.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(r[s+1]),r.splice(s,2)),s=r.indexOf("-s"),s>=0&&(i.scale.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),s=r.indexOf("-o"),s>=0&&(i.offset.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),i.url=r.join(" ").trim(),i}loadTexture(e,t,i,r,s){let o=this.manager!==void 0?this.manager:w0,a=o.getHandler(e);a===null&&(a=new al(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);let l=a.load(e,i,r,s);return t!==void 0&&(l.mapping=t),l}};var wy=`
o Tree_lp_11
v -0.524753 -0.707811 -1.37533
v -1.53072 -0.666692 -0.246043
v -0.906262 -0.661508 1.11465
v 0.545834 -0.691875 1.43058
v 1.42838 -0.731081 0.229593
v 1.00376 -0.742633 -1.23456
v 0.786882 2.82926 -1.29208
v 0.63432 3.39803 -0.788073
v 0.981512 3.47944 -0.0789129
v 1.52378 2.91226 0.0919508
v 1.67634 2.34349 -0.412051
v 1.32915 2.26209 -1.12121
v 2.59035 4.58157 -2.36406
v 2.28499 4.93522 -1.78959
v 2.61892 4.92501 -1.15015
v 3.30715 4.6892 -1.05697
v 3.57986 4.27748 -1.60876
v 3.19057 4.18931 -2.20974
v 3.54873 7.47469 -3.08566
v 3.17914 7.78206 -2.58487
v 3.45759 7.91591 -1.98529
v 4.12953 7.82592 -1.85391
v 4.46704 7.4315 -2.31475
v 4.16741 7.24017 -2.88795
v 4.61062 9.7155 -4.61096
v 4.32967 10.0261 -4.18947
v 4.61849 10.3778 -3.75896
v 5.1932 10.1512 -3.64934
v 5.4464 9.75916 -4.01712
v 5.23061 9.62172 -4.58895
v 5.32991 12.1494 -6.04678
v 4.94374 12.4323 -5.75564
v 5.13216 12.7581 -5.32972
v 5.682 12.7851 -5.24367
v 6.06216 12.6056 -5.61406
v 5.87457 12.2655 -6.02901
v 4.50482 14.4674 -8.187
v 4.19017 14.5513 -7.82242
v 4.29636 14.8645 -7.4208
v 4.81238 14.9139 -7.37723
v 5.12365 14.8422 -7.74729
v 4.97229 14.6929 -8.22209
v 3.99985 17.357 -8.28958
v 3.73223 17.4265 -7.97026
v 3.86047 17.5496 -7.58888
v 4.27885 17.5479 -7.50233
v 4.54164 17.4121 -7.80389
v 4.41747 17.3449 -8.20025
v -1.32999 3.06875 -0.363729
v -1.55759 2.54365 0.157999
v -1.27446 2.48797 0.896637
v -0.713633 3.03217 1.07856
v -0.486032 3.55727 0.556835
v -0.769166 3.61295 -0.181802
v -3.13891 4.92041 0.608952
v -3.54369 4.65459 1.16326
v -3.18725 4.57937 1.79795
v -2.5597 4.89534 1.93327
v -2.19822 5.25073 1.3996
v -2.47852 5.16848 0.728617
v -3.69165 8.11752 0.828338
v -4.08153 7.96337 1.40745
v -3.81857 7.91917 2.02716
v -3.12958 8.04124 2.1732
v -2.73953 7.95445 1.58035
v -3.00248 7.98061 0.959613
v -3.08732 11.0352 1.06462
v -3.43606 10.9484 1.53576
v -3.28627 11.1202 2.13284
v -2.66283 11.013 2.19557
v -2.3154 10.9363 1.72171
v -2.46225 11.1303 1.13072
v -3.48996 13.9078 1.06409
v -3.90333 13.8031 1.44793
v -3.71347 13.7671 1.99329
v -3.18115 13.8962 2.10893
v -2.83285 14.1725 1.74622
v -2.99599 14.138 1.19218
v -4.00133 8.77271 1.0531
v -3.13923 8.37941 1.16974
v -4.34707 8.11694 0.90442
v -3.49063 7.64338 1.01312
v -4.50992 8.03998 1.63875
v -3.67443 7.55971 1.81871
v -4.16418 8.69576 1.78744
v -3.32303 8.29574 1.97533
v -5.39095 9.67738 0.666911
v -5.90213 9.28261 0.442941
v -6.10893 9.22953 1.09234
v -5.72877 9.77441 1.25323
v -6.74064 11.3948 0.568838
v -7.10149 10.9461 0.356538
v -7.23338 10.7799 0.932314
v -6.87331 11.2291 1.14461
v -7.69876 11.9113 0.443552
v -8.10324 11.5316 0.251496
v -8.0992 11.2996 0.790802
v -7.82275 11.7732 1.00053
v -8.46285 12.8019 1.2725
v -8.95731 12.5917 1.14086
v -8.88589 12.2117 1.53638
v -8.43099 12.471 1.71465
v -2.28227 5.84553 1.04559
v -2.87672 5.10514 0.686232
v -2.54328 5.76185 1.81172
v -3.17736 4.99241 1.52808
v -1.91518 5.26874 1.96791
v -2.49943 4.42257 1.69388
v -1.65417 5.35241 1.20179
v -2.19879 4.5353 0.85203
v -0.650002 6.83895 1.47679
v -0.894234 6.86803 2.01372
v -0.728117 6.31387 2.13249
v -0.483885 6.28479 1.59556
v 0.312135 7.16361 2.20397
v 0.0298738 7.21088 2.69134
v 0.133727 6.65995 2.763
v 0.567266 6.70004 2.40261
v 0.97366 7.64614 2.8445
v 0.635033 7.68697 3.24996
v 0.953424 7.38978 3.5517
v 1.23368 7.27369 3.11728
v 1.42008 8.48807 2.84257
v 1.21664 8.65476 3.26961
v 1.63447 8.52095 3.51262
v 1.85446 8.40175 3.07795
v 1.63962 9.84556 2.50049
v 1.46076 9.79022 2.97366
v 1.91164 9.93458 3.16023
v 2.07711 9.72142 2.72881
v 1.54687 11.2027 2.46467
v 1.40554 11.0172 2.87937
v 1.81029 11.1741 3.07406
v 1.94363 11.0134 2.64659
v -2.15729 7.1855 2.14287
v -2.35035 6.72039 2.45419
v -1.80345 6.61322 2.65402
v -1.61039 7.07833 2.3427
v -2.26412 7.84226 3.28072
v -2.44926 7.37123 3.51805
v -1.91809 7.23764 3.62975
v -1.75831 7.75817 3.50332
v -2.58399 8.10859 4.30162
v -2.74287 7.62928 4.45258
v -2.33356 7.59262 4.78256
v -2.13677 8.03292 4.57001
v -3.14679 8.66965 4.83075
v -3.44636 8.45936 5.17168
v -3.07754 8.47961 5.50897
v -2.77663 8.68594 5.16679
v -3.17157 9.93949 4.85731
v -3.47714 9.77942 5.20787
v -3.15146 9.89589 5.55751
v -2.81727 9.92985 5.19828
v -3.7328 11.1812 5.02111
v -3.90473 10.8456 5.35205
v -3.69858 11.1441 5.6986
v -3.36631 11.0456 5.3358
v 5.748 11.6475 -6.08637
v 5.56824 11.7865 -4.97864
v 5.79319 11.0142 -6.00004
v 5.62471 11.0673 -4.90753
v 5.17074 10.9534 -6.1396
v 4.91558 10.9983 -5.04161
v 5.12555 11.5867 -6.22594
v 4.85911 11.7176 -5.11272
v 6.01564 11.4634 -7.14982
v 6.05398 10.8789 -7.03803
v 5.46197 10.8451 -7.10101
v 5.46079 11.3852 -7.35379
v 6.27901 10.9308 -8.18239
v 6.17475 10.465 -7.86734
v 5.73833 10.3553 -8.2203
v 5.71131 10.9257 -8.25148
v 6.89322 10.6549 -9.06408
v 6.86041 10.1333 -9.0109
v 6.50352 10.1118 -9.39583
v 6.47504 10.6362 -9.38154
v 7.62143 10.7374 -9.75395
v 7.90282 10.3007 -9.89653
v 7.50426 10.3398 -10.2569
v 7.63472 10.8621 -10.2779
v 8.96624 11.0281 -9.91979
v 9.25974 10.646 -9.98339
v 9.04398 10.6783 -10.4176
v 9.05387 11.1626 -10.3784
v 1.85614 12.673 2.9672
v -4.10729 12.4851 5.3907
v 10.8466 20.3032 -5.81436
v 6.87322 24.2135 -4.22274
v 5.90952 18.5685 -3.3188
v 8.06006 15.6382 -7.83539
v 2.36455 16.6654 -7.49283
v 1.63104 21.9652 -5.26009
v 9.61936 24.7719 -9.29799
v 10.3529 19.4721 -11.5307
v 6.07439 22.8688 -13.472
v 5.11069 17.2238 -12.5681
v 1.13734 21.1341 -10.9765
v 3.92385 25.7991 -8.95543
v -8.0904 21.5101 5.79498
v -0.851714 21.0368 6.86486
v -3.50264 25.4041 1.60499
v -4.99437 14.9908 7.09148
v 1.50683 14.8557 3.70278
v 2.42877 21.2915 0.311945
v -9.28367 22.0573 -1.41917
v -6.92512 15.8762 -4.58125
v -10.2056 15.6215 1.97166
v -4.27419 11.5089 0.678616
v 0.313567 15.403 -3.51137
v -2.78246 21.9222 -4.80787
v -12.0443 16.7223 6.65824
v -10.8649 19.2722 2.91027
v -14.0619 15.8715 2.5175
v -12.7275 12.3079 5.24887
v -11.9703 12.1295 0.629857
v -10.8191 16.4337 -0.81548
v -7.55456 17.8104 5.88439
v -8.70571 13.5062 7.32972
v -5.46294 14.0684 3.99675
v -8.65997 10.6677 3.60398
v -7.48055 13.2176 -0.143998
v -6.79736 17.632 1.26537
v 0.0260677 13.3493 1.17591
v 1.76198 15.2723 2.18123
v 2.72727 13.2562 0.530265
v 1.3649 10.9144 1.14809
v 3.92825 11.3325 2.13621
v 4.17366 14.0259 2.77472
v -0.196977 14.1765 3.81941
v -0.442385 11.4831 3.1809
v 1.004 12.2528 5.42535
v 1.9693 10.2367 3.77439
v 3.7052 12.1597 4.77971
v 2.36637 14.5946 4.80753
v 13.9192 11.3979 -10.9759
v 11.569 9.36617 -12.6032
v 11.6449 12.8144 -13.2389
v 12.2513 8.87661 -9.19811
v 8.94605 8.73477 -10.3623
v 8.57131 11.1684 -12.8597
v 12.3741 14.4559 -10.2267
v 9.75122 13.8245 -7.9858
v 12.7489 12.0222 -7.72934
v 9.67527 10.3763 -7.35011
v 7.40095 11.7927 -9.61308
v 9.06893 14.3141 -11.3909
v 2.00384 21.4118 -4.55281
v 4.54963 22.6688 -2.18035
v 3.04216 19.3275 -1.67746
v -0.529795 19.531 -2.62065
v 0.450123 19.6257 0.945956
v 3.58938 21.565 1.21808
v 1.90933 24.9374 -3.43434
v -1.22992 22.9981 -3.70646
v -0.68271 25.2355 -0.810925
v -2.19017 21.8942 -0.308036
v 0.355617 23.1513 2.06443
v 2.88925 25.0321 0.132266
v -0.36303 2.39901 -1.14342
v -1.26129 2.20093 -0.194404
v -0.714177 2.18956 0.836823
v -1.18249 5.8804 1.388
v 0.48326 2.3491 1.08727
v 1.31858 2.03719 0.103932
v 0.854202 2.07139 -0.969078
v -0.0482781 3.49454 -0.524021
v 0.324427 3.47256 0.458374
v -1.91764 6.39276 1.22418
v -2.25408 6.35112 2.06127
v -1.52244 5.91116 2.12541
v -1.44617 6.78437 1.88912
v -4.14722 12.4928 5.11924
v -4.33194 12.2734 5.42385
v -4.06593 12.4726 5.66204
v 1.58185 12.5037 3.05804
v 1.94016 12.411 3.18549
v -3.85257 12.5966 5.35495
v 1.73995 12.659 2.71297
v 2.09998 12.581 2.84234
vn -0.707182 0.353103 -0.612545
vn -0.576446 0.794496 0.191014
vn 0.157502 0.419852 0.893822
vn 0.723032 -0.339289 0.601753
vn 0.624026 -0.749965 -0.21942
vn -0.124887 -0.393752 -0.910693
vn -0.834439 0.143717 -0.532031
vn -0.879745 0.339599 0.332747
vn -0.0428168 0.256548 0.965583
vn 0.860824 -0.0988569 0.499209
vn 0.812408 -0.3353 -0.47704
vn 0.0893123 -0.243302 -0.96583
vn -0.807039 -0.00841916 -0.590439
vn -0.796072 0.552821 0.24629
vn -0.0738101 0.605625 0.792319
vn 0.826996 0.053808 0.559628
vn 0.808648 -0.535295 -0.244022
vn 0.0336526 -0.59079 -0.806123
vn -0.861242 -0.103988 -0.497442
vn -0.878697 0.396901 0.265258
vn 0.0383358 0.51224 0.857986
vn 0.863208 0.0917777 0.496436
vn 0.903706 -0.340856 -0.2591
vn -0.0398797 -0.470447 -0.881526
vn -0.714044 -0.594926 -0.36906
vn -0.920447 0.0221743 0.390237
vn -0.14676 0.669673 0.728011
vn 0.669345 0.640291 0.376835
vn 0.916898 -0.0193545 -0.398653
vn 0.158834 -0.628719 -0.761238
vn -0.765264 -0.155906 -0.624551
vn -0.928788 -0.130087 0.34703
vn -0.0885963 0.0478956 0.994915
vn 0.769435 0.184895 0.611378
vn 0.915247 0.194387 -0.352898
vn -0.053307 -0.0447307 -0.997576
vn -0.68682 -0.340379 -0.642199
vn -0.664158 -0.720262 0.200291
vn 0.0463175 -0.359323 0.932063
vn 0.666022 0.36028 0.653156
vn 0.609832 0.772854 -0.175502
vn -0.0869996 0.395345 -0.914403
vn -0.814856 -0.0901956 -0.572603
vn -0.864835 -0.195223 0.462545
vn -0.18881 -0.102715 0.976627
vn 0.837629 0.110946 0.534854
vn 0.895232 0.199529 -0.398433
vn 0.143801 0.0924713 -0.985277
vn -0.836449 0.202754 -0.50916
vn -0.908172 0.137974 0.395204
vn -0.207736 0.00225185 0.978182
vn 0.818963 -0.132831 0.558261
vn 0.910324 -0.134882 -0.391303
vn 0.191016 0.0205507 -0.981372
vn -0.664689 -0.0933061 -0.741271
vn -0.948671 -0.14666 0.280205
vn -0.0980147 0.012282 0.995109
vn 0.677216 0.102767 0.728572
vn 0.969336 0.156428 -0.189521
vn 0.0993703 0.0379529 -0.994326
vn 0.188658 0.117397 -0.975001
vn -0.455691 -0.868697 -0.194191
vn -0.255258 -0.0831096 0.963294
vn 0.387588 0.903631 0.182281
vn 0.243292 0.248047 -0.9377
vn -0.447376 -0.826708 -0.341187
vn -0.270999 -0.225065 0.935898
vn 0.411902 0.846101 0.338304
vn -0.144646 0.564955 -0.812345
vn -0.839764 -0.501033 -0.209194
vn 0.217365 -0.498533 0.839177
vn 0.843755 0.446108 0.298439
vn -0.728398 0.663397 -0.171291
vn -0.309459 -0.0928102 0.946373
vn 0.775854 -0.599432 0.196804
vn 0.356748 0.156449 -0.921008
vn -0.21305 0.965581 -0.149209
vn -0.590367 -0.00398174 0.807125
vn 0.24993 -0.95404 0.16536
vn 0.606147 0.0112522 -0.795273
vn -0.360379 0.885076 -0.294565
vn -0.677921 -0.0322752 0.734425
vn 0.389094 -0.841661 0.374449
vn 0.697044 0.0782124 -0.71275
vn -0.726923 0.447432 -0.520949
vn -0.414308 0.279371 0.866199
vn 0.750064 -0.434363 0.498732
vn 0.419295 -0.261059 -0.869505
vn -0.89704 0.0340356 -0.440636
vn -0.407885 0.295336 0.863948
vn 0.916326 -0.081961 0.391956
vn 0.379315 -0.283312 -0.880826
vn -0.930044 -0.0730704 -0.36011
vn -0.390895 0.0319849 0.919879
vn 0.945226 0.117049 0.304709
vn 0.464535 0.0083811 -0.885515
vn -0.943895 0.23982 -0.227045
vn -0.331916 -0.818096 0.469628
vn 0.941978 -0.223147 0.250765
vn 0.326394 0.833163 -0.446436
vn -0.921241 0.191484 -0.338597
vn -0.276894 -0.94188 0.19024
vn 0.905052 -0.184758 0.383073
vn 0.231847 0.958712 -0.164679
vn -0.707738 0.0121329 -0.706371
vn -0.447412 -0.760574 0.470478
vn 0.711301 0.0212401 0.702566
vn 0.40221 0.800375 -0.444554
vn -0.753924 0.000429211 -0.656962
vn -0.7201 -0.0612769 0.691159
vn 0.731393 0.0148055 0.681795
vn 0.671197 0.0285953 -0.740727
vn -0.733572 -0.248089 -0.632712
vn -0.623464 -0.352172 0.698045
vn 0.701341 0.23119 0.674294
vn 0.646852 0.379613 -0.66142
vn 0.984666 0.0919602 0.148247
vn 0.085229 -0.994523 0.0604959
vn -0.970396 -0.0980064 -0.220741
vn -0.0709067 0.988553 -0.133176
vn 0.968858 0.100014 0.22652
vn 0.0639715 -0.9874 0.144735
vn -0.958241 -0.104655 -0.266123
vn -0.052922 0.980187 -0.190874
vn 0.975256 0.101531 0.196384
vn 0.00938224 -0.915213 0.402861
vn -0.975334 -0.0953226 -0.199091
vn 0.0397141 0.892126 -0.450039
vn 0.866559 0.13163 0.481404
vn 0.0533302 -0.970355 0.235727
vn -0.842565 -0.0690981 -0.534144
vn 0.0966777 0.97793 -0.185223
vn 0.643519 0.0374734 0.764513
vn 0.0347652 -0.988689 -0.145894
vn -0.61011 -0.0115512 -0.792233
vn -0.117826 0.988313 0.0967233
vn 0.12183 -0.23622 0.964032
vn 0.194827 -0.966228 -0.168658
vn -0.100535 -0.0148497 -0.994823
vn -0.186754 0.956762 0.223001
vn 0.430095 0.0706945 0.900011
vn 0.520386 -0.581685 0.625173
vn -0.124898 -0.858437 0.497481
vn -0.613996 -0.377099 0.693401
vn -0.270992 0.197136 0.942179
vn 0.613996 0.377099 -0.693401
vn 0.270992 -0.197136 -0.942179
vn -0.430095 -0.0706945 -0.900011
vn -0.520386 0.581685 -0.625173
vn 0.124898 0.858437 -0.497481
vn 0.712328 0.542627 0.445135
vn 0.858421 -0.512945 0.000436633
vn -0.18567 -0.960739 -0.206173
vn -0.977048 -0.181918 0.110833
vn -0.422055 0.747213 0.513363
vn 0.977048 0.181918 -0.110833
vn 0.422055 -0.747213 -0.513364
vn -0.712328 -0.542627 -0.445135
vn -0.858421 0.512945 -0.000436642
vn 0.18567 0.960739 0.206173
vn -0.0468872 0.756776 0.651991
vn -0.136615 0.130414 0.982002
vn 0.440658 -0.269844 0.856157
vn 0.88716 0.109145 0.448368
vn 0.585841 0.743631 0.322187
vn -0.88716 -0.109145 -0.448368
vn -0.585841 -0.743631 -0.322187
vn 0.0468871 -0.756776 -0.651991
vn 0.136615 -0.130414 -0.982002
vn -0.440658 0.269844 -0.856157
vn -0.554069 0.818158 0.153706
vn -0.699251 -0.195317 0.687677
vn 0.234797 -0.842948 0.484054
vn 0.957252 -0.229732 -0.175762
vn 0.469706 0.796888 -0.379928
vn -0.957252 0.229732 0.175762
vn -0.469706 -0.796888 0.379928
vn 0.554069 -0.818158 -0.153706
vn 0.699251 0.195317 -0.687677
vn -0.234796 0.842948 -0.484055
vn -0.723515 0.655 0.217949
vn -0.898899 -0.000772606 0.438154
vn -0.89193 -0.433237 -0.129485
vn -0.712238 -0.0447417 -0.70051
vn -0.608152 0.627825 -0.485785
vn 0.712238 0.0447416 0.70051
vn 0.608152 -0.627825 0.485785
vn 0.723515 -0.655 -0.217949
vn 0.8989 0.000772474 -0.438154
vn 0.89193 0.433237 0.129485
vn -0.110776 0.837572 0.534979
vn -0.394555 -0.223491 0.891279
vn -0.383279 -0.923232 -0.0271805
vn -0.0925313 -0.294635 -0.95112
vn 0.0758845 0.793602 -0.603686
vn 0.0925313 0.294635 0.95112
vn -0.0758845 -0.793602 0.603686
vn 0.110776 -0.837572 -0.534979
vn 0.394555 0.223491 -0.891279
vn 0.383279 0.923232 0.0271805
vn -0.17167 0.573662 -0.8009
vn -0.234693 -0.118022 -0.964878
vn 0.384657 -0.438119 -0.81246
vn 0.83046 0.0557355 -0.554283
vn 0.486632 0.68105 -0.547139
vn -0.83046 -0.0557355 0.554283
vn -0.486632 -0.68105 0.547139
vn 0.17167 -0.573662 0.8009
vn 0.234693 0.118022 0.964878
vn -0.384657 0.438119 0.81246
vn -0.635804 0.719719 -0.278851
vn -0.737778 -0.399449 -0.544172
vn 0.264352 -0.917376 -0.297555
vn 0.985677 -0.118304 0.120185
vn 0.429351 0.893477 0.131744
vn -0.985677 0.118304 -0.120185
vn -0.429351 -0.893477 -0.131744
vn 0.635804 -0.719719 0.278851
vn 0.737778 0.399449 0.544172
vn -0.264352 0.917376 0.297555
vn 0.648023 -0.151861 -0.746327
vn 0.724277 -0.647073 -0.238157
vn 0.0988479 -0.981993 -0.16099
vn -0.363943 -0.693773 -0.62147
vn -0.0245342 -0.180723 -0.983228
vn 0.363943 0.693773 0.62147
vn 0.0245344 0.180723 0.983228
vn -0.648023 0.151861 0.746327
vn -0.724277 0.647073 0.238157
vn -0.0988479 0.981993 0.16099
vn 0.74928 0.488225 -0.447454
vn 0.872662 -0.313045 0.374784
vn -0.139304 -0.854958 0.499641
vn -0.888115 -0.388607 -0.24543
vn -0.33894 0.441525 -0.830768
vn 0.888115 0.388607 0.24543
vn 0.33894 -0.441525 0.830768
vn -0.74928 -0.488225 0.447454
vn -0.872662 0.313045 -0.374784
vn 0.139304 0.854958 -0.499642
vn 0.721958 -0.409644 -0.557646
vn 0.116466 -0.783693 -0.610132
vn -0.0687442 -0.996603 0.0453484
vn 0.422281 -0.75414 0.502943
vn 0.910962 -0.391379 0.130272
vn -0.422281 0.75414 -0.502943
vn -0.910962 0.391379 -0.130272
vn -0.721958 0.409644 0.557646
vn -0.116466 0.783693 0.610132
vn 0.0687442 0.996603 -0.0453484
vn 0.586919 0.259081 -0.767075
vn -0.392788 -0.346144 -0.851999
vn -0.692464 -0.69064 0.20859
vn 0.102032 -0.298326 0.948995
vn 0.892734 0.288634 0.346001
vn -0.102032 0.298326 -0.948995
vn -0.892734 -0.288634 -0.346001
vn -0.586919 -0.259081 0.767075
vn 0.392788 0.346144 0.851999
vn 0.692464 0.69064 -0.20859
vn -0.74219 0.0882244 -0.664358
vn -0.906226 0.077662 0.415599
vn -0.209306 0.105442 0.972149
vn 0.804333 0.0829717 0.588357
vn 0.957402 0.077135 -0.278266
vn 0.0930523 0.0692961 -0.993247
vn -0.301743 0.533451 -0.790178
vn 0.00597455 0.99978 0.020105
vn 0.454371 0.483178 0.748389
vn 0.726362 -0.161178 0.668147
vn 0.435797 -0.873629 -0.216456
vn 0.0268942 -0.389906 -0.920462
vn -0.69279 -0.190547 -0.69551
vn -0.439492 -0.869976 0.22358
vn -0.121255 -0.200066 0.97225
vn 0.278698 0.498809 0.820681
vn 0.146497 0.988645 -0.0334561
vn -0.276805 0.531974 -0.800239
vn -0.80173 0.519009 -0.296408
vn -0.167819 -0.136748 0.976287
vn 0.64492 -0.691164 0.326143
vn 0.276333 0.0905736 -0.956784
vn -0.29345 0.938043 -0.184289
vn -0.145497 0.270243 0.951735
vn 0.437523 -0.867173 0.237874
vn 0.202826 -0.0219909 -0.978968
vn -0.953548 0.168949 -0.249404
vn -0.413667 -0.0601257 0.908441
vn 0.930239 -0.135374 0.34107
vn 0.442294 0.0675622 -0.894322
vn -0.920847 0.142321 -0.363023
vn -0.442797 -0.645672 0.622124
vn 0.902154 0.0375057 0.42978
vn 0.216477 0.76637 -0.604827
vn -0.771364 -0.200427 -0.604008
vn -0.561279 -0.208215 0.801007
vn 0.748128 0.226852 0.623572
vn 0.571888 0.189145 -0.798228
vn 0.0761471 0.895747 0.437993
vn 0.0295078 0.890108 0.454794
vn 0.909357 -0.0522323 -0.412725
vn -0.665006 0.735969 0.126948
vn -0.396443 0.913304 0.0933186
vn 0.948522 0.288194 -0.131341
vn -0.348466 -0.157361 0.924018
vn -0.768726 -0.569365 -0.29135
vn 0.730221 0.59323 0.338902
vn 0.28988 0.159987 -0.943596
vn -0.344032 -0.0313883 0.938433
vn -0.538136 -0.817545 -0.205011
vn 0.495396 0.845687 0.198483
vn 0.301507 0.056832 -0.951769
vt 0.175435 0.163566
vt 0.227393 0.163566
vt 0.202202 0.288261
vt 0.150245 0.289632
vt 0.279351 0.163566
vt 0.25416 0.285937
vt 0.331308 0.163566
vt 0.306118 0.289632
vt 0.383266 0.163566
vt 0.358075 0.288261
vt 0.435223 0.163566
vt 0.410033 0.285937
vt 0.487181 0.163566
vt 0.46199 0.289632
vt 0.172788 0.435765
vt 0.12083 0.437733
vt 0.224745 0.434466
vt 0.276703 0.437733
vt 0.32866 0.435765
vt 0.380618 0.434466
vt 0.432576 0.437733
vt 0.144204 0.574706
vt 0.0922468 0.576682
vt 0.196162 0.579905
vt 0.24812 0.576682
vt 0.300077 0.574706
vt 0.352035 0.579905
vt 0.403993 0.576682
vt 0.11652 0.717314
vt 0.0645629 0.714772
vt 0.168478 0.716962
vt 0.220436 0.714772
vt 0.272393 0.717314
vt 0.324351 0.716962
vt 0.376309 0.714772
vt 0.0874922 0.86143
vt 0.0355346 0.86116
vt 0.13945 0.865035
vt 0.191408 0.86116
vt 0.243365 0.86143
vt 0.295323 0.865035
vt 0.34728 0.86116
vt 0.0619576 0.988661
vt 0.01 0.99
vt 0.113915 0.98979
vt 0.165873 0.99
vt 0.217831 0.988661
vt 0.269788 0.98979
vt 0.321746 0.99
vt 0.227375 0.163655
vt 0.201632 0.292434
vt 0.149675 0.290455
vt 0.175418 0.163655
vt 0.279333 0.163655
vt 0.25359 0.288954
vt 0.33129 0.163655
vt 0.305548 0.290455
vt 0.383248 0.163655
vt 0.357505 0.292434
vt 0.435206 0.163655
vt 0.409463 0.288954
vt 0.487163 0.163655
vt 0.461421 0.290455
vt 0.173259 0.433
vt 0.121302 0.437702
vt 0.225217 0.432648
vt 0.277175 0.437702
vt 0.329132 0.433
vt 0.38109 0.432648
vt 0.433048 0.437702
vt 0.144368 0.572834
vt 0.0924105 0.57602
vt 0.196326 0.579962
vt 0.248283 0.57602
vt 0.300241 0.572834
vt 0.352199 0.579962
vt 0.404156 0.57602
vt 0.0656247 0.709654
vt 0.117582 0.713252
vt 0.16954 0.711774
vt 0.221498 0.709654
vt 0.273455 0.713252
vt 0.325413 0.711774
vt 0.37737 0.709654
vt 0.52166 0.295987
vt 0.529215 0.333762
vt 0.472124 0.333762
vt 0.464568 0.295987
vt 0.578752 0.295987
vt 0.586307 0.333762
vt 0.635843 0.295987
vt 0.643398 0.333762
vt 0.692935 0.295987
vt 0.70049 0.333762
vt 0.560793 0.489959
vt 0.569502 0.534311
vt 0.512411 0.531188
vt 0.503702 0.48994
vt 0.617885 0.48994
vt 0.626594 0.531188
vt 0.674977 0.489959
vt 0.683685 0.534311
vt 0.732068 0.48994
vt 0.740777 0.531188
vt 0.578416 0.577857
vt 0.521325 0.576322
vt 0.635508 0.576322
vt 0.692599 0.577857
vt 0.749691 0.576322
vt 0.452228 0.586489
vt 0.458819 0.619443
vt 0.412457 0.619443
vt 0.405866 0.586489
vt 0.498591 0.586489
vt 0.505182 0.619443
vt 0.544953 0.586489
vt 0.551544 0.619443
vt 0.591316 0.586489
vt 0.597907 0.619443
vt 0.425806 0.68619
vt 0.472169 0.68619
vt 0.48226 0.736613
vt 0.435897 0.733184
vt 0.518531 0.68619
vt 0.528622 0.733184
vt 0.564894 0.68619
vt 0.574985 0.736613
vt 0.611256 0.68619
vt 0.621347 0.733184
vt 0.490959 0.777583
vt 0.444596 0.779163
vt 0.537321 0.779163
vt 0.583684 0.777583
vt 0.630046 0.779163
vt 0.500113 0.824583
vt 0.453751 0.823776
vt 0.546476 0.823776
vt 0.592838 0.824583
vt 0.639201 0.823776
vt 0.510271 0.875009
vt 0.463908 0.879329
vt 0.556633 0.879329
vt 0.602996 0.875009
vt 0.649358 0.879329
vt 0.520698 0.924894
vt 0.474336 0.930396
vt 0.567061 0.930396
vt 0.613423 0.924894
vt 0.659786 0.930396
vt 0.425483 0.684572
vt 0.471845 0.684572
vt 0.482139 0.735481
vt 0.435777 0.733512
vt 0.518207 0.684572
vt 0.528502 0.733512
vt 0.56457 0.684572
vt 0.574864 0.735481
vt 0.610932 0.684572
vt 0.621227 0.733512
vt 0.491103 0.778269
vt 0.444741 0.779574
vt 0.537466 0.779574
vt 0.583828 0.778269
vt 0.630191 0.779574
vt 0.500215 0.824696
vt 0.453852 0.824765
vt 0.546577 0.824765
vt 0.59294 0.824696
vt 0.639302 0.824765
vt 0.510036 0.874687
vt 0.463673 0.876745
vt 0.556398 0.876745
vt 0.602761 0.874687
vt 0.649123 0.876745
vt 0.474026 0.929901
vt 0.520388 0.922535
vt 0.566751 0.929901
vt 0.613113 0.922535
vt 0.659476 0.929901
vt 0.521713 0.0235467
vt 0.573561 0.0235467
vt 0.565551 0.0635995
vt 0.513703 0.0635995
vt 0.62541 0.0235467
vt 0.617399 0.0635995
vt 0.677258 0.0235467
vt 0.669248 0.0635995
vt 0.729106 0.0235467
vt 0.721096 0.0635995
vt 0.557452 0.103931
vt 0.505604 0.101224
vt 0.609301 0.101224
vt 0.661149 0.103931
vt 0.712997 0.101224
vt 0.549303 0.138767
vt 0.497455 0.144623
vt 0.601152 0.144623
vt 0.653 0.138767
vt 0.704849 0.144623
vt 0.540382 0.187948
vt 0.488534 0.189567
vt 0.59223 0.189567
vt 0.644079 0.187948
vt 0.695927 0.189567
vt 0.53109 0.23891
vt 0.479241 0.230896
vt 0.582938 0.230896
vt 0.634786 0.23891
vt 0.686635 0.230896
vt 0.520932 0.28951
vt 0.469084 0.283809
vt 0.572781 0.283809
vt 0.624629 0.28951
vt 0.676477 0.283809
vt 0.0884226 0.846225
vt 0.01 0.846225
vt 0.0492114 0.99
vt 0.166845 0.846225
vt 0.127634 0.99
vt 0.245268 0.846225
vt 0.206057 0.99
vt 0.323691 0.846225
vt 0.28448 0.99
vt 0.402114 0.846225
vt 0.362902 0.99
vt 0.0492114 0.70245
vt 0.127634 0.70245
vt 0.0884226 0.558675
vt 0.206057 0.70245
vt 0.166845 0.558675
vt 0.28448 0.70245
vt 0.245268 0.558675
vt 0.362902 0.70245
vt 0.323691 0.558675
vt 0.441325 0.70245
vt 0.402114 0.558675
vt 0.109188 0.373689
vt 0.0595939 0.555533
vt 0.01 0.373689
vt 0.208375 0.373689
vt 0.158782 0.555533
vt 0.307564 0.373689
vt 0.257969 0.555533
vt 0.406751 0.373689
vt 0.357157 0.555533
vt 0.505939 0.373689
vt 0.456345 0.555533
vt 0.0595939 0.191844
vt 0.109188 0.01
vt 0.158782 0.191844
vt 0.208375 0.01
vt 0.257969 0.191844
vt 0.307564 0.01
vt 0.357157 0.191844
vt 0.406751 0.01
vt 0.456345 0.191844
vt 0.505939 0.01
vt 0.555533 0.191844
vt 0.464198 0.872173
vt 0.400837 0.872173
vt 0.432518 0.988334
vt 0.527559 0.872173
vt 0.495878 0.988334
vt 0.59092 0.872173
vt 0.559239 0.988334
vt 0.654281 0.872173
vt 0.622601 0.988334
vt 0.717642 0.872173
vt 0.685962 0.988334
vt 0.432518 0.756011
vt 0.495878 0.756011
vt 0.464198 0.639849
vt 0.559239 0.756011
vt 0.527559 0.639849
vt 0.622601 0.756011
vt 0.59092 0.639849
vt 0.685962 0.756011
vt 0.654281 0.639849
vt 0.749323 0.756011
vt 0.717642 0.639849
vt 0.74809 0.583761
vt 0.7105 0.583761
vt 0.729295 0.652675
vt 0.785679 0.583761
vt 0.766884 0.652675
vt 0.823268 0.583761
vt 0.804473 0.652675
vt 0.860858 0.583761
vt 0.842063 0.652675
vt 0.898447 0.583761
vt 0.879652 0.652675
vt 0.729295 0.514847
vt 0.766884 0.514847
vt 0.74809 0.445934
vt 0.804473 0.514847
vt 0.785679 0.445934
vt 0.842063 0.514847
vt 0.823268 0.445934
vt 0.879652 0.514847
vt 0.860858 0.445934
vt 0.917241 0.514847
vt 0.898447 0.445934
vt 0.588077 0.268129
vt 0.564357 0.355103
vt 0.540636 0.268129
vt 0.635517 0.268129
vt 0.611797 0.355103
vt 0.682958 0.268129
vt 0.659238 0.355103
vt 0.730399 0.268129
vt 0.706678 0.355103
vt 0.777839 0.268129
vt 0.754119 0.355103
vt 0.564357 0.181155
vt 0.588077 0.0941803
vt 0.611797 0.181155
vt 0.635517 0.0941803
vt 0.659238 0.181155
vt 0.682958 0.0941803
vt 0.706678 0.181155
vt 0.730399 0.0941803
vt 0.754119 0.181155
vt 0.777839 0.0941803
vt 0.801559 0.181155
vt 0.515525 0.543765
vt 0.465475 0.543765
vt 0.4905 0.635522
vt 0.565574 0.543765
vt 0.54055 0.635522
vt 0.615624 0.543765
vt 0.590599 0.635522
vt 0.665673 0.543765
vt 0.640649 0.635522
vt 0.715723 0.543765
vt 0.690698 0.635522
vt 0.4905 0.452007
vt 0.54055 0.452007
vt 0.515525 0.36025
vt 0.590599 0.452007
vt 0.565574 0.36025
vt 0.640649 0.452007
vt 0.615624 0.36025
vt 0.690698 0.452007
vt 0.665673 0.36025
vt 0.740748 0.452007
vt 0.715723 0.36025
vt 0.206149 0.01
vt 0.258644 0.01
vt 0.241328 0.102556
vt 0.187637 0.102556
vt 0.310384 0.01
vt 0.289964 0.102556
vt 0.361159 0.01
vt 0.342201 0.102556
vt 0.41297 0.01
vt 0.396386 0.102556
vt 0.465546 0.01
vt 0.445489 0.102556
vt 0.517894 0.01
vt 0.499383 0.102556
vt 0.234079 0.130135
vt 0.287171 0.124463
vt 0.3907 0.126395
vt 0.442621 0.126578
vt 0.465536 0.643919
vt 0.417192 0.642528
vt 0.511448 0.642381
vt 0.554412 0.643808
vt 0.602642 0.642528
vt 0.467727 0.663983
vt 0.531276 0.982187
vt 0.484913 0.986216
vt 0.577638 0.98111
vt 0.624001 0.985614
vt 0.670363 0.986216
vt 0.560168 0.662561
vt 0.530881 0.979097
vt 0.484518 0.983842
vt 0.577243 0.982917
vt 0.623606 0.984496
vt 0.669968 0.983842
vt 0.170651 0.0814389
vt 0.151488 0.0622766
vt 0.170651 0.0622766
vt 0.189813 0.0622766
vt 0.170651 0.0431143
vt 0.16654 0.0174068
vt 0.188605 0.01
vt 0.181276 0.0247357
vt 0.173947 0.0394715
vt 0.196012 0.0320647
vt 0.601738 0.408093
vt 0.65883 0.412179
vt 0.544646 0.412179
vt 0.715921 0.408093
vt 0.487555 0.408093
mtllib Lowpoly_tree_sample.mtl
usemtl Bark
g Default
f 7/1/1 8/2/1 14/3/1 13/4/1
f 9/5/2 15/6/2 14/3/2 8/2/2
f 10/7/3 16/8/3 15/6/3 9/5/3
f 11/9/4 17/10/4 16/8/4 10/7/4
f 11/9/5 12/11/5 18/12/5 17/10/5
f 12/11/6 7/13/6 13/14/6 18/12/6
f 13/4/7 14/3/7 20/15/7 19/16/7
f 21/17/8 20/15/8 14/3/8 15/6/8
f 16/8/9 22/18/9 21/17/9 15/6/9
f 16/8/10 17/10/10 23/19/10 22/18/10
f 17/10/11 18/12/11 24/20/11 23/19/11
f 18/12/12 13/14/12 19/21/12 24/20/12
f 20/15/13 26/22/13 25/23/13 19/16/13
f 21/17/14 27/24/14 26/22/14 20/15/14
f 21/17/15 22/18/15 28/25/15 27/24/15
f 22/18/16 23/19/16 29/26/16 28/25/16
f 24/20/17 30/27/17 29/26/17 23/19/17
f 24/20/18 19/21/18 25/28/18 30/27/18
f 26/22/19 32/29/19 31/30/19 25/23/19
f 26/22/20 27/24/20 33/31/20 32/29/20
f 28/25/21 34/32/21 33/31/21 27/24/21
f 29/26/22 35/33/22 34/32/22 28/25/22
f 29/26/23 30/27/23 36/34/23 35/33/23
f 30/27/24 25/28/24 31/35/24 36/34/24
f 31/30/25 32/29/25 38/36/25 37/37/25
f 33/31/26 39/38/26 38/36/26 32/29/26
f 34/32/27 40/39/27 39/38/27 33/31/27
f 35/33/28 41/40/28 40/39/28 34/32/28
f 36/34/29 42/41/29 41/40/29 35/33/29
f 36/34/30 31/35/30 37/42/30 42/41/30
f 37/37/31 38/36/31 44/43/31 43/44/31
f 38/36/32 39/38/32 45/45/32 44/43/32
f 39/38/33 40/39/33 46/46/33 45/45/33
f 40/39/34 41/40/34 47/47/34 46/46/34
f 42/41/35 48/48/35 47/47/35 41/40/35
f 37/42/36 43/49/36 48/48/36 42/41/36
f 50/50/37 56/51/37 55/52/37 49/53/37
f 50/50/38 51/54/38 57/55/38 56/51/38
f 51/54/39 52/56/39 58/57/39 57/55/39
f 52/56/40 53/58/40 59/59/40 58/57/40
f 54/60/41 60/61/41 59/59/41 53/58/41
f 49/62/42 55/63/42 60/61/42 54/60/42
f 62/64/43 61/65/43 55/52/43 56/51/43
f 57/55/44 63/66/44 62/64/44 56/51/44
f 63/66/45 57/55/45 58/57/45 64/67/45
f 64/67/46 58/57/46 59/59/46 65/68/46
f 60/61/47 66/69/47 65/68/47 59/59/47
f 55/63/48 61/70/48 66/69/48 60/61/48
f 62/64/49 68/71/49 67/72/49 61/65/49
f 63/66/50 69/73/50 68/71/50 62/64/50
f 63/66/51 64/67/51 70/74/51 69/73/51
f 64/67/52 65/68/52 71/75/52 70/74/52
f 66/69/53 72/76/53 71/75/53 65/68/53
f 66/69/54 61/70/54 67/77/54 72/76/54
f 73/78/55 67/72/55 68/71/55 74/79/55
f 68/71/56 69/73/56 75/80/56 74/79/56
f 70/74/57 76/81/57 75/80/57 69/73/57
f 77/82/58 76/81/58 70/74/58 71/75/58
f 71/75/59 72/76/59 78/83/59 77/82/59
f 72/76/60 67/77/60 73/84/60 78/83/60
f 82/85/61 81/86/61 79/87/61 80/88/61
f 82/85/62 84/89/62 83/90/62 81/86/62
f 84/89/63 86/91/63 85/92/63 83/90/63
f 80/93/64 79/94/64 85/92/64 86/91/64
f 92/95/65 96/96/65 95/97/65 91/98/65
f 92/95/66 93/99/66 97/100/66 96/96/66
f 94/101/67 98/102/67 97/100/67 93/99/67
f 91/103/68 95/104/68 98/102/68 94/101/68
f 96/96/69 100/105/69 99/106/69 95/97/69
f 96/96/70 97/100/70 101/107/70 100/105/70
f 97/100/71 98/102/71 102/108/71 101/107/71
f 95/104/72 99/109/72 102/108/72 98/102/72
f 106/110/73 105/111/73 103/112/73 104/113/73
f 108/114/74 107/115/74 105/111/74 106/110/74
f 108/114/75 110/116/75 109/117/75 107/115/75
f 110/116/76 104/118/76 103/119/76 109/117/76
f 111/120/77 112/121/77 116/122/77 115/123/77
f 112/121/78 113/124/78 117/125/78 116/122/78
f 114/126/79 118/127/79 117/125/79 113/124/79
f 114/126/80 111/128/80 115/129/80 118/127/80
f 115/123/81 116/122/81 120/130/81 119/131/81
f 117/125/82 121/132/82 120/130/82 116/122/82
f 117/125/83 118/127/83 122/133/83 121/132/83
f 118/127/84 115/129/84 119/134/84 122/133/84
f 124/135/85 123/136/85 119/131/85 120/130/85
f 125/137/86 124/135/86 120/130/86 121/132/86
f 125/137/87 121/132/87 122/133/87 126/138/87
f 126/138/88 122/133/88 119/134/88 123/139/88
f 123/136/89 124/135/89 128/140/89 127/141/89
f 125/137/90 129/142/90 128/140/90 124/135/90
f 129/142/91 125/137/91 126/138/91 130/143/91
f 127/144/92 130/143/92 126/138/92 123/139/92
f 127/141/93 128/140/93 132/145/93 131/146/93
f 129/142/94 133/147/94 132/145/94 128/140/94
f 130/143/95 134/148/95 133/147/95 129/142/95
f 127/144/96 131/149/96 134/148/96 130/143/96
f 135/150/97 136/151/97 140/152/97 139/153/97
f 136/151/98 137/154/98 141/155/98 140/152/98
f 138/156/99 142/157/99 141/155/99 137/154/99
f 138/156/100 135/158/100 139/159/100 142/157/100
f 139/153/101 140/152/101 144/160/101 143/161/101
f 141/155/102 145/162/102 144/160/102 140/152/102
f 141/155/103 142/157/103 146/163/103 145/162/103
f 142/157/104 139/159/104 143/164/104 146/163/104
f 144/160/105 148/165/105 147/166/105 143/161/105
f 145/162/106 149/167/106 148/165/106 144/160/106
f 145/162/107 146/163/107 150/168/107 149/167/107
f 146/163/108 143/164/108 147/169/108 150/168/108
f 152/170/109 151/171/109 147/166/109 148/165/109
f 153/172/110 152/170/110 148/165/110 149/167/110
f 153/172/111 149/167/111 150/168/111 154/173/111
f 147/169/112 151/174/112 154/173/112 150/168/112
f 155/175/113 151/171/113 152/170/113 156/176/113
f 153/172/114 157/177/114 156/176/114 152/170/114
f 153/172/115 154/173/115 158/178/115 157/177/115
f 151/174/116 155/179/116 158/178/116 154/173/116
f 160/180/117 162/181/117 161/182/117 159/183/117
f 164/184/118 163/185/118 161/182/118 162/181/118
f 166/186/119 165/187/119 163/185/119 164/184/119
f 166/186/120 160/188/120 159/189/120 165/187/120
f 159/183/121 161/182/121 168/190/121 167/191/121
f 161/182/122 163/185/122 169/192/122 168/190/122
f 165/187/123 170/193/123 169/192/123 163/185/123
f 165/187/124 159/189/124 167/194/124 170/193/124
f 167/191/125 168/190/125 172/195/125 171/196/125
f 169/192/126 173/197/126 172/195/126 168/190/126
f 169/192/127 170/193/127 174/198/127 173/197/127
f 167/194/128 171/199/128 174/198/128 170/193/128
f 172/195/129 176/200/129 175/201/129 171/196/129
f 173/197/130 177/202/130 176/200/130 172/195/130
f 173/197/131 174/198/131 178/203/131 177/202/131
f 178/203/132 174/198/132 171/199/132 175/204/132
f 176/200/133 180/205/133 179/206/133 175/201/133
f 180/205/134 176/200/134 177/202/134 181/207/134
f 178/203/135 182/208/135 181/207/135 177/202/135
f 178/203/136 175/204/136 179/209/136 182/208/136
f 180/205/137 184/210/137 183/211/137 179/206/137
f 185/212/138 184/210/138 180/205/138 181/207/138
f 181/207/139 182/208/139 186/213/139 185/212/139
f 182/208/140 179/209/140 183/214/140 186/213/140
f 1/347/261 2/348/261 262/349/261 261/350/261
f 2/348/262 3/351/262 263/352/262 262/349/262
f 4/353/263 265/354/263 263/352/263 3/351/263
f 4/353/264 5/355/264 266/356/264 265/354/264
f 6/357/265 267/358/265 266/356/265 5/355/265
f 1/359/266 261/360/266 267/358/266 6/357/266
f 261/350/267 268/361/267 8/2/267 7/1/267
f 269/362/268 9/5/268 8/2/268 268/361/268
f 265/354/269 10/7/269 9/5/269 269/362/269
f 265/354/270 266/356/270 11/9/270 10/7/270
f 266/356/271 267/358/271 12/11/271 11/9/271
f 261/360/272 7/13/272 12/11/272 267/358/272
f 261/350/273 262/349/273 50/50/273 49/53/273
f 263/352/274 51/54/274 50/50/274 262/349/274
f 52/56/275 51/54/275 263/352/275 265/354/275
f 265/354/276 269/363/276 53/58/276 52/56/276
f 268/364/277 54/60/277 53/58/277 269/363/277
f 261/360/278 49/62/278 54/60/278 268/364/278
f 271/365/279 270/366/279 103/112/279 105/111/279
f 272/367/280 271/365/280 105/111/280 107/115/280
f 264/368/281 272/367/281 107/115/281 109/117/281
f 264/368/282 109/117/282 103/119/282 270/369/282
f 111/120/283 270/366/283 273/370/283 112/121/283
f 272/367/284 113/124/284 112/121/284 273/370/284
f 272/367/285 264/368/285 114/126/285 113/124/285
f 270/369/286 111/128/286 114/126/286 264/368/286
f 131/146/287 132/145/287 277/371/287 280/372/287
f 132/145/288 133/147/288 278/373/288 277/371/288
f 134/148/289 281/374/289 278/373/289 133/147/289
f 134/148/290 131/149/290 280/375/290 281/374/290
f 270/366/291 271/365/291 136/151/291 135/150/291
f 272/367/292 137/154/292 136/151/292 271/365/292
f 272/367/293 273/376/293 138/156/293 137/154/293
f 270/369/294 135/158/294 138/156/294 273/376/294
f 156/176/295 275/377/295 274/378/295 155/175/295
f 275/377/296 156/176/296 157/177/296 276/379/296
f 158/178/297 279/380/297 276/379/297 157/177/297
f 279/380/298 158/178/298 155/179/298 274/381/298
f 277/382/299 278/383/299 187/384/299 280/385/299
f 278/383/300 281/386/300 280/385/300
f 278/383/301 280/385/301 187/384/301
f 275/387/302 276/388/302 188/389/302 274/390/302
f 276/388/303 279/391/303 274/390/303
f 276/388/304 274/390/304 188/389/304
f 93/99/305 89/392/305 90/393/305 94/101/305
f 88/394/306 89/392/306 93/99/306 92/95/306
f 91/103/307 94/101/307 90/393/307 87/395/307
f 88/394/308 92/95/308 91/98/308 87/396/308
f 83/90/309 85/92/309 90/393/309 89/392/309
f 83/90/310 89/392/310 88/394/310 81/86/310
f 79/94/311 87/395/311 90/393/311 85/92/311
f 79/87/312 81/86/312 88/394/312 87/396/312
usemtl Tree
f 189/215/141 190/216/141 191/217/141
f 192/218/142 189/215/142 191/219/142
f 193/220/143 192/218/143 191/221/143
f 194/222/144 193/220/144 191/223/144
f 190/224/145 194/222/145 191/225/145
f 195/226/146 196/227/146 197/228/146
f 196/227/147 198/229/147 197/230/147
f 198/229/148 199/231/148 197/232/148
f 199/231/149 200/233/149 197/234/149
f 200/233/150 195/235/150 197/236/150
f 189/215/151 195/226/151 190/216/151
f 192/218/152 196/227/152 189/215/152
f 193/220/153 198/229/153 192/218/153
f 194/222/154 199/231/154 193/220/154
f 190/224/155 200/233/155 194/222/155
f 195/226/156 189/215/156 196/227/156
f 196/227/157 192/218/157 198/229/157
f 198/229/158 193/220/158 199/231/158
f 199/231/159 194/222/159 200/233/159
f 200/233/160 190/224/160 195/235/160
f 201/237/161 202/238/161 203/239/161
f 204/240/162 202/241/162 201/237/162
f 205/242/163 202/243/163 204/240/163
f 206/244/164 202/245/164 205/242/164
f 203/246/165 202/247/165 206/244/165
f 207/248/166 208/249/166 209/250/166
f 209/250/167 208/251/167 210/252/167
f 210/252/168 208/253/168 211/254/168
f 211/254/169 208/255/169 212/256/169
f 212/256/170 208/257/170 207/258/170
f 201/237/171 203/239/171 207/248/171
f 204/240/172 201/237/172 209/250/172
f 205/242/173 204/240/173 210/252/173
f 206/244/174 205/242/174 211/254/174
f 203/246/175 206/244/175 212/256/175
f 207/248/176 209/250/176 201/237/176
f 209/250/177 210/252/177 204/240/177
f 210/252/178 211/254/178 205/242/178
f 211/254/179 212/256/179 206/244/179
f 212/256/180 207/258/180 203/246/180
f 213/259/181 214/260/181 215/261/181
f 216/262/182 213/259/182 215/263/182
f 217/264/183 216/262/183 215/265/183
f 218/266/184 217/264/184 215/267/184
f 214/268/185 218/266/185 215/269/185
f 219/270/186 220/271/186 221/272/186
f 220/271/187 222/273/187 221/274/187
f 222/273/188 223/275/188 221/276/188
f 223/275/189 224/277/189 221/278/189
f 224/277/190 219/279/190 221/280/190
f 213/259/191 219/270/191 214/260/191
f 216/262/192 220/271/192 213/259/192
f 217/264/193 222/273/193 216/262/193
f 218/266/194 223/275/194 217/264/194
f 214/268/195 224/277/195 218/266/195
f 219/270/196 213/259/196 220/271/196
f 220/271/197 216/262/197 222/273/197
f 222/273/198 217/264/198 223/275/198
f 223/275/199 218/266/199 224/277/199
f 224/277/200 214/268/200 219/279/200
f 225/281/201 226/282/201 227/283/201
f 228/284/202 225/281/202 227/285/202
f 229/286/203 228/284/203 227/287/203
f 230/288/204 229/286/204 227/289/204
f 226/290/205 230/288/205 227/291/205
f 231/292/206 232/293/206 233/294/206
f 232/293/207 234/295/207 233/296/207
f 234/295/208 235/297/208 233/298/208
f 235/297/209 236/299/209 233/300/209
f 236/299/210 231/301/210 233/302/210
f 225/281/211 231/292/211 226/282/211
f 228/284/212 232/293/212 225/281/212
f 229/286/213 234/295/213 228/284/213
f 230/288/214 235/297/214 229/286/214
f 226/290/215 236/299/215 230/288/215
f 231/292/216 225/281/216 232/293/216
f 232/293/217 228/284/217 234/295/217
f 234/295/218 229/286/218 235/297/218
f 235/297/219 230/288/219 236/299/219
f 236/299/220 226/290/220 231/301/220
f 237/303/221 238/304/221 239/305/221
f 240/306/222 238/307/222 237/303/222
f 241/308/223 238/309/223 240/306/223
f 242/310/224 238/311/224 241/308/224
f 239/312/225 238/313/225 242/310/225
f 243/314/226 244/315/226 245/316/226
f 245/316/227 244/317/227 246/318/227
f 246/318/228 244/319/228 247/320/228
f 247/320/229 244/321/229 248/322/229
f 248/322/230 244/323/230 243/324/230
f 237/303/231 239/305/231 243/314/231
f 240/306/232 237/303/232 245/316/232
f 241/308/233 240/306/233 246/318/233
f 242/310/234 241/308/234 247/320/234
f 239/312/235 242/310/235 248/322/235
f 243/314/236 245/316/236 237/303/236
f 245/316/237 246/318/237 240/306/237
f 246/318/238 247/320/238 241/308/238
f 247/320/239 248/322/239 242/310/239
f 248/322/240 243/324/240 239/312/240
f 249/325/241 250/326/241 251/327/241
f 252/328/242 249/325/242 251/329/242
f 253/330/243 252/328/243 251/331/243
f 254/332/244 253/330/244 251/333/244
f 250/334/245 254/332/245 251/335/245
f 255/336/246 256/337/246 257/338/246
f 256/337/247 258/339/247 257/340/247
f 258/339/248 259/341/248 257/342/248
f 259/341/249 260/343/249 257/344/249
f 260/343/250 255/345/250 257/346/250
f 249/325/251 255/336/251 250/326/251
f 252/328/252 256/337/252 249/325/252
f 253/330/253 258/339/253 252/328/253
f 254/332/254 259/341/254 253/330/254
f 250/334/255 260/343/255 254/332/255
f 255/336/256 249/325/256 256/337/256
f 256/337/257 252/328/257 258/339/257
f 258/339/258 253/330/258 259/341/258
f 259/341/259 254/332/259 260/343/259
f 260/343/260 250/334/260 255/345/260
`,My=`
newmtl Bark
Kd 0.207595 0.138513 0.055181
Ns 256
d 1
illum 1
Ka 0 0 0
Ks 0 0 0
newmtl Tree
Kd 0.256861 0.440506 0.110769
Ns 256
d 1
illum 1
Ka 0 0 0
Ks 0 0 0
`;function T0(){let n=(0,Eo.useRef)();return(0,Eo.useEffect)(()=>{let e=l=>l*(Math.PI/180),t=l=>l*(180/Math.PI),i=new It(90,window.innerWidth/window.innerHeight);i.position.set(0,0,20);let r=new go,s=new je({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setAnimationLoop(l=>{s.render(r,i),a(l)}),n.current.appendChild(s.domElement),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}),r.add((()=>{let l=new ul(new he(16373532),8),u=e(45);return l.rotation.set(u,u,u),l})()),r.add(new cl(new he(8900331),8)),r.add(new yt(new Ni(1e3,1e3,1e3),new mr({side:vn,color:8900331})));let o=(()=>{let l=new oh,c=new ah().parse(My,"");return c.preload(),l.setMaterials(c),l.parse(wy)})();o.position.y=-12,r.add(o);function a(l){o.rotation.y=e(l/50)}},[]),Eo.default.createElement("div",{ref:n,className:"background"})}var ml=os(Er());function A0(){return ml.default.createElement(ml.default.Fragment,null,ml.default.createElement("svg",{className:"logo",width:"300",height:"300",viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ml.default.createElement("path",{fill:"#87ceeb","fill-rule":"evenodd","clip-rule":"evenodd",d:"M194.783 149.427L276.304 230.949C291.302 207.597 300 179.814 300 150C300 119.889 291.128 91.8505 275.855 68.3556L194.783 149.427ZM242.633 267.988L175 200.355V297.926C200.24 293.692 223.342 283.154 242.633 267.988ZM79.437 200L48.3985 260.351C69.3131 279.617 95.7182 293.014 125 297.926V200H79.437ZM125 2.08274V2.07394C54.0572 13.9758 0 75.6751 0 150C0 173.572 5.4374 195.875 15.1264 215.721L125 2.08274ZM241.99 31.5099C222.83 16.613 199.96 6.26147 175 2.07399V98.4998L241.99 31.5099ZM125 150H105.152L125 111.407V150Z"})))}var bo=os(Er());function C0(n){return bo.default.createElement(bo.default.Fragment,null,bo.default.createElement("div",{className:"card",style:{backgroundImage:`url(${n.background})`}},bo.default.createElement("a",{className:"card-link",href:n.href??""},bo.default.createElement("h4",{className:"card-title"},n.title))))}var gl=os(Er());function lh(n){return gl.default.createElement(gl.default.Fragment,null,gl.default.createElement("a",{href:n.href},gl.default.createElement("img",{style:{width:"2rem",aspectRatio:"1/1"},src:n.icon,alt:""})))}function EE(){return Qe.default.createElement(Qe.default.Fragment,null,Qe.default.createElement(T0,null),Qe.default.createElement("header",null,Qe.default.createElement(A0,null),Qe.default.createElement("nav",{className:"navbar"},Qe.default.createElement("ul",null,Qe.default.createElement("li",null,Qe.default.createElement("a",{className:"btn",href:"#about"},"R\xF3lam")),Qe.default.createElement("li",null,Qe.default.createElement("a",{className:"btn",href:"#projects"},"Projektek")),Qe.default.createElement("li",null,Qe.default.createElement("a",{className:"btn",href:"#contacts"},"El\xE9rhet\u0151s\xE9g"))))),Qe.default.createElement("main",null,Qe.default.createElement("section",{id:"about"},Qe.default.createElement("div",null,Qe.default.createElement("h1",null,"Ag\xF3cs Kevin"),Qe.default.createElement("h2",null,"Videoj\xE1t\xE9k-, webfejleszt\u0151 \xE9s programoz\xF3"))),Qe.default.createElement("section",{id:"projects"},Qe.default.createElement("h1",null,"Projektek"),Qe.default.createElement("div",{className:"grid"},Qe.default.createElement(C0,{title:"B\xE9la labirintus",background:"./img/bela-maze.png",href:"https://github.com/agocs6921/bela-maze"}))),Qe.default.createElement("section",{id:"contacts"},Qe.default.createElement(lh,{href:"mailto:ismeretlen1024@gmail.com",icon:"./img/email.svg"}),Qe.default.createElement(lh,{href:"https://github.com/agocs6921/",icon:"./img/github.svg"}))),Qe.default.createElement("footer",null))}(0,Sy.createRoot)(document.querySelector("#root")).render(Qe.default.createElement(EE,null));})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
