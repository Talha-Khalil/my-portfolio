(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s}});let l="refresh",o="navigate",u="restore",a="server-patch",i="prefetch",s="fast-refresh";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(8754),l=n._(r(7294)),o=r(4532),u=r(3353),a=r(1410),i=r(9064),s=r(370),f=r(9955),c=r(4224),d=r(508),p=r(1516),h=r(4266),y=r(3991),b=new Set;function _(e,t,r,n,l,o){if(!o&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(b.has(o))return;b.add(o)}let a=o?e.prefetch(t,l):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:b,children:v,prefetch:g=null,passHref:O,replace:C,shallow:P,scroll:E,locale:j,onClick:w,onMouseEnter:k,onTouchStart:T,legacyBehavior:M=!1,...R}=e;r=v,M&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let x=!1!==g,A=null===g?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,L=l.default.useContext(f.RouterContext),N=l.default.useContext(c.AppRouterContext),S=null!=L?L:N,I=!L,{href:D,as:U}=l.default.useMemo(()=>{if(!L){let e=m(a);return{href:e,as:b?m(b):e}}let[e,t]=(0,o.resolveHref)(L,a,!0);return{href:e,as:b?(0,o.resolveHref)(L,b):t||e}},[L,a,b]),F=l.default.useRef(D),H=l.default.useRef(U);M&&(n=l.default.Children.only(r));let K=M?n&&"object"==typeof n&&n.ref:t,[V,z,G]=(0,d.useIntersection)({rootMargin:"200px"}),Y=l.default.useCallback(e=>{(H.current!==U||F.current!==D)&&(G(),H.current=U,F.current=D),V(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[U,K,D,G,V]);l.default.useEffect(()=>{S&&z&&x&&_(S,D,U,{locale:j},{kind:A},I)},[U,D,z,j,x,null==L?void 0:L.locale,S,I,A]);let q={ref:Y,onClick(e){M||"function"!=typeof w||w(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,o,a,i,s,f,c){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!c})};f?l.default.startTransition(h):h()}(e,S,D,U,C,P,E,j,I,x)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(x||!I)&&_(S,D,U,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:A},I)},onTouchStart(e){M||"function"!=typeof T||T(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(x||!I)&&_(S,D,U,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:A},I)}};if((0,i.isAbsoluteUrl)(U))q.href=U;else if(!M||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);q.href=t||(0,h.addBasePath)((0,s.addLocale)(U,e,null==L?void 0:L.defaultLocale))}return M?l.default.cloneElement(n,q):l.default.createElement("a",{...R,...q},r)}),g=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(7294),l=r(29),o="function"==typeof IntersectionObserver,u=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,s=i||!o,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(o){if(s||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},a.push(r),u.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,l.requestIdleCallback)(()=>c(!0));return()=>(0,l.cancelIdleCallback)(e)}},[s,r,t,f,d.current]);let h=(0,n.useCallback)(()=>{c(!1)},[]);return[p,f,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return u},default:function(){return a}});let n=r(8754),l=(r(7294),n._(r(8976)));function o(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let a=n.loader,i=()=>null!=a?a().then(o):Promise.resolve(o(()=>null));return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:i}):(delete n.webpack,delete n.modules,u(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let n=r(8754),l=n._(r(7294)),o=l.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(8754),l=n._(r(7294)),o=r(2254),u=[],a=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class f{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function u(){if(!n){let t=new f(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return u()})}function s(e,t){!function(){u();let e=l.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=l.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),l.default.useMemo(()=>{var t;return a.loading||a.error?l.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?l.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return s.preload=()=>u(),s.displayName="LoadableComponent",l.default.forwardRef(s)}(s,e)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(u).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(i=!0,t());d(a,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let p=c},5152:function(e,t,r){e.exports=r(5677)},1664:function(e,t,r){e.exports=r(5569)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(l),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function i(e){return function(t){return n.createElement(s,u({attr:u({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,u({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,l=e.attr,o=e.size,i=e.title,s=a(e,["attr","size","title"]),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(l)}}}]);