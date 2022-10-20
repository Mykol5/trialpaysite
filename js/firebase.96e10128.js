(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["firebase"],{"000b":function(t,e,n){"use strict";n.r(e),n.d(e,"getAnalytics",(function(){return it})),n.d(e,"initializeAnalytics",(function(){return at})),n.d(e,"isSupported",(function(){return ot})),n.d(e,"logEvent",(function(){return dt})),n.d(e,"setAnalyticsCollectionEnabled",(function(){return lt})),n.d(e,"setConsent",(function(){return ht})),n.d(e,"setCurrentScreen",(function(){return st})),n.d(e,"setDefaultEventParameters",(function(){return ft})),n.d(e,"setUserId",(function(){return ct})),n.d(e,"setUserProperties",(function(){return ut})),n.d(e,"settings",(function(){return et}));var r=n("589b"),i=n("e691"),a=n("1fd5"),o=n("22e5");n("bd5a");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="analytics",c="firebase_id",u="origin",l=6e4,f="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",d="https://www.googletagmanager.com/gtag/js",h=new i["b"]("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function m(t,e){const n=document.createElement("script");n.src=`${d}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function g(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function b(t,e,n,r,i,a){const o=r[i];try{if(o)await e[o];else{const t=await p(n),r=t.find(t=>t.measurementId===i);r&&await e[r.appId]}}catch(s){h.error(s)}t("config",i,a)}async function v(t,e,n,r,i){try{let a=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await p(n);for(const n of t){const t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){a=[];break}a.push(i)}}0===a.length&&(a=Object.values(e)),await Promise.all(a),t("event",r,i||{})}catch(a){h.error(a)}}function w(t,e,n,r){async function i(i,a,o){try{"event"===i?await v(t,e,n,a,o):"config"===i?await b(t,e,n,r,a,o):"consent"===i?t("consent","update",o):t("set",a)}catch(s){h.error(s)}}return i}function y(t,e,n,r,i){let a=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(a=window[i]),window[i]=w(a,t,e,n),{gtagCore:a,wrappedGtag:window[i]}}function _(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(d))return e;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},E=new a["b"]("analytics","Analytics",I),S=30,A=1e3;class T{constructor(t={},e=A){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const O=new T;function C(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function D(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:C(r)},a=f.replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(s){}throw E.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function j(t,e=O,n){const{appId:r,apiKey:i,measurementId:a}=t.options;if(!r)throw E.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw E.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new N;return setTimeout(async()=>{s.abort()},void 0!==n?n:l),P({appId:r,apiKey:i,measurementId:a},o,s,e)}async function P(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=O){var o,s;const{appId:c,measurementId:u}=t;try{await k(r,e)}catch(l){if(u)return h.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+u+` provided in the "measurementId" field in the local Firebase config. [${null===(o=l)||void 0===o?void 0:o.message}]`),{appId:c,measurementId:u};throw l}try{const e=await D(t);return i.deleteThrottleMetadata(c),e}catch(l){const e=l;if(!M(e)){if(i.deleteThrottleMetadata(c),u)return h.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+u+` provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:c,measurementId:u};throw l}const o=503===Number(null===(s=null===e||void 0===e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?Object(a["f"])(n,i.intervalMillis,S):Object(a["f"])(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return i.setThrottleMetadata(c,f),h.debug(`Calling attemptFetch again in ${o} millis`),P(t,f,r,i)}}function k(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(a),r(E.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function M(t){if(!(t instanceof a["c"])||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class N{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L,R;async function B(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}async function U(t,e,n,r){if(r&&r.global)return t("set",{screen_name:n}),Promise.resolve();{const r=await e;t("config",r,{update:!0,screen_name:n})}}async function F(t,e,n,r){if(r&&r.global)return t("set",{user_id:n}),Promise.resolve();{const r=await e;t("config",r,{update:!0,user_id:n})}}async function $(t,e,n,r){if(r&&r.global){const e={};for(const t of Object.keys(n))e["user_properties."+t]=n[t];return t("set",e),Promise.resolve()}{const r=await e;t("config",r,{update:!0,user_properties:n})}}async function H(t,e){const n=await t;window["ga-disable-"+n]=!e}function V(t){R=t}function x(t){L=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(){var t;if(!Object(a["k"])())return h.warn(E.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(a["l"])()}catch(e){return h.warn(E.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}async function q(t,e,n,r,i,a,o){var s;const l=j(t);l.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&h.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>h.error(t)),e.push(l);const f=z().then(t=>t?r.getId():void 0),[d,p]=await Promise.all([l,f]);_()||m(a,d.measurementId),R&&(i("consent","default",R),V(void 0)),i("js",new Date);const g=null!==(s=null===o||void 0===o?void 0:o.config)&&void 0!==s?s:{};return g[u]="firebase",g.update=!0,null!=p&&(g[c]=p),i("config",d.measurementId,g),L&&(i("set",L),x(void 0)),d.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.app=t}_delete(){return delete K[this.app.options.appId],Promise.resolve()}}let K={},J=[];const G={};let Y,X,Z="dataLayer",Q="gtag",tt=!1;function et(t){if(tt)throw E.create("already-initialized");t.dataLayerName&&(Z=t.dataLayerName),t.gtagName&&(Q=t.gtagName)}function nt(){const t=[];if(Object(a["j"])()&&t.push("This is a browser extension environment."),Object(a["d"])()||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=E.create("invalid-analytics-context",{errorInfo:e});h.warn(n.message)}}function rt(t,e,n){nt();const r=t.options.appId;if(!r)throw E.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw E.create("no-api-key");h.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+t.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=K[r])throw E.create("already-exists",{id:r});if(!tt){g(Z);const{wrappedGtag:t,gtagCore:e}=y(K,J,G,Z,Q);X=t,Y=e,tt=!0}K[r]=q(t,J,G,e,Y,Z,n);const i=new W(t);return i}function it(t=Object(r["m"])()){t=Object(a["i"])(t);const e=Object(r["i"])(t,s);return e.isInitialized()?e.getImmediate():at(t)}function at(t,e={}){const n=Object(r["i"])(t,s);if(n.isInitialized()){const t=n.getImmediate();if(Object(a["g"])(e,n.getOptions()))return t;throw E.create("already-initialized")}const i=n.initialize({options:e});return i}async function ot(){if(Object(a["j"])())return!1;if(!Object(a["d"])())return!1;if(!Object(a["k"])())return!1;try{const t=await Object(a["l"])();return t}catch(t){return!1}}function st(t,e,n){t=Object(a["i"])(t),U(X,K[t.app.options.appId],e,n).catch(t=>h.error(t))}function ct(t,e,n){t=Object(a["i"])(t),F(X,K[t.app.options.appId],e,n).catch(t=>h.error(t))}function ut(t,e,n){t=Object(a["i"])(t),$(X,K[t.app.options.appId],e,n).catch(t=>h.error(t))}function lt(t,e){t=Object(a["i"])(t),H(K[t.app.options.appId],e).catch(t=>h.error(t))}function ft(t){X?X("set",t):x(t)}function dt(t,e,n,r){t=Object(a["i"])(t),B(X,K[t.app.options.appId],e,n,r).catch(t=>h.error(t))}function ht(t){X?X("consent","update",t):V(t)}const pt="@firebase/analytics",mt="0.8.1";function gt(){function t(t){try{const e=t.getProvider(s).getImmediate();return{logEvent:(t,n,r)=>dt(e,t,n,r)}}catch(e){throw E.create("interop-component-reg-failed",{reason:e})}}Object(r["j"])(new o["a"](s,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return rt(n,r,e)},"PUBLIC")),Object(r["j"])(new o["a"]("analytics-internal",t,"PRIVATE")),Object(r["q"])(pt,mt),Object(r["q"])(pt,mt,"esm2017")}gt()},"1d25":function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));const r=(t,e)=>e.some(e=>t instanceof e);let i,a;function o(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s(){return a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap;function h(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{e(w(t.result)),r()},a=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(e=>{e instanceof IDBCursor&&c.set(e,t)}).catch(()=>{}),d.set(e,t),e}function p(t){if(u.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{e(),r()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});u.set(t,e)}let m={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return u.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function g(t){m=t(m)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?s().includes(t)?function(...e){return t.apply(y(this),e),w(c.get(this))}:function(...e){return w(t.apply(y(this),e))}:function(e,...n){const r=t.call(y(this),e,...n);return l.set(r,e.sort?e.sort():[e]),w(r)}}function v(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&p(t),r(t,o())?new Proxy(t,m):t)}function w(t){if(t instanceof IDBRequest)return h(t);if(f.has(t))return f.get(t);const e=v(t);return e!==t&&(f.set(t,e),d.set(e,t)),e}const y=t=>d.get(t);function _(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(t,e),s=w(o);return r&&o.addEventListener("upgradeneeded",t=>{r(w(o.result),t.oldVersion,t.newVersion,w(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(t=>{a&&t.addEventListener("close",()=>a()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const I=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],S=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const a=async function(t,...e){const a=this.transaction(t,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&a.done]))[0]};return S.set(e,a),a}g(t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)}))},"1fd5":function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return k})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return w})),n.d(e,"i",(function(){return M})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=t[n++],o=t[n++],s=t[n++],c=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const a=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],a=i+1<t.length,o=a?t[i+1]:0,s=i+2<t.length,c=s?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let f=(15&o)<<2|c>>6,d=63&c;s||(d=64,a||(f=64)),r.push(n[u],n[l],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],a=i<t.length,o=a?n[t.charAt(i)]:0;++i;const s=i<t.length,c=s?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const f=e<<2|o>>4;if(r.push(f),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=i(t);return o.encodeByteArray(e,!0)},c=function(t){return s(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof indexedDB}function d(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function h(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}function p(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=()=>p().__FIREBASE_DEFAULTS__,g=()=>{if("undefined"===typeof r)return;const t=Object({NODE_ENV:"production",VUE_APP_MODE:"prod",VUE_APP_ORIGIN:"https://inokv.com",VUE_APP_LOCAL:"https://console-activity.opayweb.com",VUE_APP_CARD_LOCAL:"https://cardh5.opayweb.com",VUE_APP_OWEALTH_LOCAL:"https://owealthh5.opayweb.com",VUE_APP_CHAT_H5_URL:"https://pos.opayweb.com",VUE_APP_CHAT_POS_URL:"https://pos.opayweb.com",VUE_APP_OWEALTH_URL:"https://owealthh5.opayweb.com",VUE_APP_LIVE_CHAT_H5_URL:"https://cscenter-nigeria.opayweb.com/chat/h5/v2/index.html?sysnum=e698cb8256814e09a4864662839009e4&channelid=2&source=4",BASE_URL:"/"}).__FIREBASE_DEFAULTS__,e=Object({NODE_ENV:"production",VUE_APP_MODE:"prod",VUE_APP_ORIGIN:"https://inokv.com",VUE_APP_LOCAL:"https://console-activity.opayweb.com",VUE_APP_CARD_LOCAL:"https://cardh5.opayweb.com",VUE_APP_OWEALTH_LOCAL:"https://owealthh5.opayweb.com",VUE_APP_CHAT_H5_URL:"https://pos.opayweb.com",VUE_APP_CHAT_POS_URL:"https://pos.opayweb.com",VUE_APP_OWEALTH_URL:"https://owealthh5.opayweb.com",VUE_APP_LIVE_CHAT_H5_URL:"https://cscenter-nigeria.opayweb.com/chat/h5/v2/index.html?sysnum=e698cb8256814e09a4864662839009e4&channelid=2&source=4",BASE_URL:"/"}).__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e)try{const t=n("941f")(e);return t}catch(i){console.warn("Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: "+e)}},b=()=>{if("undefined"===typeof document)return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&u(t[1]);return e&&JSON.parse(e)},v=()=>m()||g()||b(),w=()=>{var t;return null===(t=v())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],a=i?S(i,n):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new I(r,o,n);return s}}function S(t,e){return t.replace(A,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],a=e[i];if(O(n)&&O(a)){if(!T(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C=1e3,D=2,j=144e5,P=.5;function k(t,e=C,n=D){const r=e*Math.pow(n,t),i=Math.round(P*r*(Math.random()-.5)*2);return Math.min(j,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba6"),n("4362"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=a){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=a){return this.instances.has(t)}getOptions(t=a){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&a.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&t(a,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=a){return this.component?this.component.multipleInstances?t:a:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===a?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"260b":function(t,e,n){"use strict";n.r(e);var r=n("589b");n.d(e,"FirebaseError",(function(){return r["a"]})),n.d(e,"SDK_VERSION",(function(){return r["b"]})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return r["c"]})),n.d(e,"_addComponent",(function(){return r["d"]})),n.d(e,"_addOrOverwriteComponent",(function(){return r["e"]})),n.d(e,"_apps",(function(){return r["f"]})),n.d(e,"_clearComponents",(function(){return r["g"]})),n.d(e,"_components",(function(){return r["h"]})),n.d(e,"_getProvider",(function(){return r["i"]})),n.d(e,"_registerComponent",(function(){return r["j"]})),n.d(e,"_removeServiceInstance",(function(){return r["k"]})),n.d(e,"deleteApp",(function(){return r["l"]})),n.d(e,"getApp",(function(){return r["m"]})),n.d(e,"getApps",(function(){return r["n"]})),n.d(e,"initializeApp",(function(){return r["o"]})),n.d(e,"onLog",(function(){return r["p"]})),n.d(e,"registerVersion",(function(){return r["q"]})),n.d(e,"setLogLevel",(function(){return r["r"]}));var i="firebase",a="9.11.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["q"])(i,a,"app")},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"589b":function(t,e,n){"use strict";n.d(e,"b",(function(){return Y})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return H})),n.d(e,"e",(function(){return V})),n.d(e,"f",(function(){return F})),n.d(e,"g",(function(){return W})),n.d(e,"h",(function(){return $})),n.d(e,"i",(function(){return z})),n.d(e,"j",(function(){return x})),n.d(e,"k",(function(){return q})),n.d(e,"l",(function(){return tt})),n.d(e,"m",(function(){return Z})),n.d(e,"n",(function(){return Q})),n.d(e,"o",(function(){return X})),n.d(e,"p",(function(){return nt})),n.d(e,"q",(function(){return et})),n.d(e,"r",(function(){return rt}));var r=n("22e5"),i=n("e691"),a=n("1fd5");n.d(e,"a",(function(){return a["c"]}));var o=n("1d25");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const u="@firebase/app",l="0.8.0",f=new i["b"]("@firebase/app"),d="@firebase/app-compat",h="@firebase/analytics-compat",p="@firebase/analytics",m="@firebase/app-check-compat",g="@firebase/app-check",b="@firebase/auth",v="@firebase/auth-compat",w="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",I="@firebase/functions-compat",E="@firebase/installations",S="@firebase/installations-compat",A="@firebase/messaging",T="@firebase/messaging-compat",O="@firebase/performance",C="@firebase/performance-compat",D="@firebase/remote-config",j="@firebase/remote-config-compat",P="@firebase/storage",k="@firebase/storage-compat",M="@firebase/firestore",N="@firebase/firestore-compat",L="firebase",R="9.11.0",B="[DEFAULT]",U={[u]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[h]:"fire-analytics-compat",[g]:"fire-app-check",[m]:"fire-app-check-compat",[b]:"fire-auth",[v]:"fire-auth-compat",[w]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[I]:"fire-fn-compat",[E]:"fire-iid",[S]:"fire-iid-compat",[A]:"fire-fcm",[T]:"fire-fcm-compat",[O]:"fire-perf",[C]:"fire-perf-compat",[D]:"fire-rc",[j]:"fire-rc-compat",[P]:"fire-gcs",[k]:"fire-gcs-compat",[M]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,$=new Map;function H(t,e){try{t.container.addComponent(e)}catch(n){f.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t,e){t.container.addOrOverwriteComponent(e)}function x(t){const e=t.name;if($.has(e))return f.debug(`There were multiple attempts to register component ${e}.`),!1;$.set(e,t);for(const n of F.values())H(n,t);return!0}function z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function q(t,e,n=B){z(t,e).clearInstance(n)}function W(){$.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},J=new a["b"]("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=R;function X(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:B,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw J.create("bad-app-name",{appName:String(o)});if(n||(n=Object(a["h"])()),!n)throw J.create("no-options");const s=F.get(o);if(s){if(Object(a["g"])(n,s.options)&&Object(a["g"])(i,s.config))return s;throw J.create("duplicate-app",{appName:o})}const c=new r["b"](o);for(const r of $.values())c.addComponent(r);const u=new G(n,i,c);return F.set(o,u),u}function Z(t=B){const e=F.get(t);if(!e&&t===B)return X();if(!e)throw J.create("no-app",{appName:t});return e}function Q(){return Array.from(F.values())}async function tt(t){const e=t.name;F.has(e)&&(F.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function et(t,e,n){var i;let a=null!==(i=U[t])&&void 0!==i?i:t;n&&(a+="-"+n);const o=a.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${a}" with version "${e}":`];return o&&t.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void f.warn(t.join(" "))}x(new r["a"](a+"-version",()=>({library:a,version:e}),"VERSION"))}function nt(t,e){if(null!==t&&"function"!==typeof t)throw J.create("invalid-log-argument");Object(i["d"])(t,e)}function rt(t){Object(i["c"])(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="firebase-heartbeat-database",at=1,ot="firebase-heartbeat-store";let st=null;function ct(){return st||(st=Object(o["a"])(it,at,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ot)}}}).catch(t=>{throw J.create("idb-open",{originalErrorMessage:t.message})})),st}async function ut(t){var e;try{const e=await ct();return e.transaction(ot).objectStore(ot).get(ft(t))}catch(n){if(n instanceof a["c"])f.warn(n.message);else{const t=J.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});f.warn(t.message)}}}async function lt(t,e){var n;try{const n=await ct(),r=n.transaction(ot,"readwrite"),i=r.objectStore(ot);return await i.put(e,ft(t)),r.done}catch(r){if(r instanceof a["c"])f.warn(r.message);else{const t=J.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});f.warn(t.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1024,ht=2592e6;class pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new bt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ht}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=mt(),{heartbeatsToSend:e,unsentEntries:n}=gt(this._heartbeatsCache.heartbeats),r=Object(a["e"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function mt(){const t=new Date;return t.toISOString().substring(0,10)}function gt(t,e=dt){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),vt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(a["k"])()&&Object(a["l"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ut(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return lt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return lt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function vt(t){return Object(a["e"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){x(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),x(new r["a"]("heartbeat",t=>new pt(t),"PRIVATE")),et(u,l,t),et(u,l,"esm2017"),et("fire-js","")}wt("")},"941f":function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="941f"},bd5a:function(t,e,n){"use strict";var r=n("589b"),i=n("22e5"),a=n("1fd5"),o=n("1d25");const s="@firebase/installations",c="0.5.13",u=1e4,l="w:"+c,f="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",h=36e5,p="installations",m="Installations",g={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},b=new a["b"](p,m,g);function v(t){return t instanceof a["c"]&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:t}){return`${d}/projects/${t}/installations`}function y(t){return{token:t.token,requestStatus:2,expiresIn:A(t.expiresIn),creationTime:Date.now()}}async function _(t,e){const n=await e.json(),r=n.error;return b.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function E(t,{refreshToken:e}){const n=I(t);return n.append("Authorization",T(e)),n}async function S(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A(t){return Number(t.replace("s","000"))}function T(t){return`${f} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=w(t),i=I(t),a=e.getImmediate({optional:!0});if(a){const t=await a.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:f,appId:t.appId,sdkVersion:l},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await S(()=>fetch(r,s));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:y(t.authToken)};return e}throw await _("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=/^[cdef][\w-]{21}$/,P="";function k(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=M(t);return j.test(n)?n:P}catch(t){return P}}function M(t){const e=D(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Map;function R(t,e){const n=N(t);B(n,e),U(n,e)}function B(t,e){const n=L.get(t);if(n)for(const r of n)r(e)}function U(t,e){const n=$();n&&n.postMessage({key:t,fid:e}),H()}let F=null;function $(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=t=>{B(t.data.key,t.data.fid)}),F}function H(){0===L.size&&F&&(F.close(),F=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="firebase-installations-database",x=1,z="firebase-installations-store";let q=null;function W(){return q||(q=Object(o["a"])(V,x,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(z)}}})),q}async function K(t,e){const n=N(t),r=await W(),i=r.transaction(z,"readwrite"),a=i.objectStore(z),o=await a.get(n);return await a.put(e,n),await i.done,o&&o.fid===e.fid||R(t,e.fid),e}async function J(t){const e=N(t),n=await W(),r=n.transaction(z,"readwrite");await r.objectStore(z).delete(e),await r.done}async function G(t,e){const n=N(t),r=await W(),i=r.transaction(z,"readwrite"),a=i.objectStore(z),o=await a.get(n),s=e(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,!s||o&&o.fid===s.fid||R(t,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){let e;const n=await G(t.appConfig,n=>{const r=X(n),i=Z(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===P?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function X(t){const e=t||{fid:k(),registrationStatus:0};return nt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(b.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Q(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:tt(t)}:{installationEntry:e}}async function Q(t,e){try{const n=await O(t,e);return K(t.appConfig,n)}catch(n){throw v(n)&&409===n.customData.serverCode?await J(t.appConfig):await K(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tt(t){let e=await et(t.appConfig);while(1===e.registrationStatus)await C(100),e=await et(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Y(t);return n||e}return e}function et(t){return G(t,t=>{if(!t)throw b.create("installation-not-found");return nt(t)})}function nt(t){return rt(t)?{fid:t.fid,registrationStatus:0}:t}function rt(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it({appConfig:t,heartbeatServiceProvider:e},n){const r=at(t,n),i=E(t,n),a=e.getImmediate({optional:!0});if(a){const t=await a.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:l,appId:t.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await S(()=>fetch(r,s));if(c.ok){const t=await c.json(),e=y(t);return e}throw await _("Generate Auth Token",c)}function at(t,{fid:e}){return`${w(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e=!1){let n;const r=await G(t.appConfig,r=>{if(!lt(r))throw b.create("not-registered");const i=r.authToken;if(!e&&ft(i))return r;if(1===i.requestStatus)return n=st(t,e),r;{if(!navigator.onLine)throw b.create("app-offline");const e=ht(r);return n=ut(t,e),e}}),i=n?await n:r.authToken;return i}async function st(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await C(100),n=await ct(t.appConfig);const r=n.authToken;return 0===r.requestStatus?ot(t,e):r}function ct(t){return G(t,t=>{if(!lt(t))throw b.create("not-registered");const e=t.authToken;return pt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ut(t,e){try{const n=await it(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await K(t.appConfig,r),n}catch(n){if(!v(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K(t.appConfig,n)}else await J(t.appConfig);throw n}}function lt(t){return void 0!==t&&2===t.registrationStatus}function ft(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+h}function ht(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pt(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await Y(e);return r?r.catch(console.error):ot(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e=!1){const n=t;await bt(n);const r=await ot(n,e);return r.token}async function bt(t){const{registrationPromise:e}=await Y(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wt(t){return b.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="installations",_t="installations-internal",It=t=>{const e=t.getProvider("app").getImmediate(),n=vt(e),i=Object(r["i"])(e,"heartbeat"),a={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return a},Et=t=>{const e=t.getProvider("app").getImmediate(),n=Object(r["i"])(e,yt).getImmediate(),i={getId:()=>mt(n),getToken:t=>gt(n,t)};return i};function St(){Object(r["j"])(new i["a"](yt,It,"PUBLIC")),Object(r["j"])(new i["a"](_t,Et,"PRIVATE"))}St(),Object(r["q"])(s,c),Object(r["q"])(s,c,"esm2017")},ca8a:function(t,e,n){"use strict";n.r(e),n.d(e,"getPerformance",(function(){return Yt})),n.d(e,"initializePerformance",(function(){return Xt})),n.d(e,"trace",(function(){return Zt}));var r=n("1fd5"),i=n("e691"),a=n("589b"),o=n("22e5");n("bd5a");const s="@firebase/performance",c="0.5.13",u=c,l="FB-PERF-TRACE-START",f="FB-PERF-TRACE-STOP",d="FB-PERF-TRACE-MEASURE",h="_wt_",p="_fp",m="_fcp",g="_fid",b="@firebase/performance/config",v="@firebase/performance/configexpire",w="performance",y="Performance",_={["trace started"]:"Trace {$traceName} was started before.",["trace stopped"]:"Trace {$traceName} is not running.",["nonpositive trace startTime"]:"Trace {$traceName} startTime should be positive.",["nonpositive trace duration"]:"Trace {$traceName} duration should be positive.",["no window"]:"Window is not available.",["no app id"]:"App id is not available.",["no project id"]:"Project id is not available.",["no api key"]:"Api key is not available.",["invalid cc log"]:"Attempted to queue invalid cc event",["FB not default"]:"Performance can only start when Firebase app instance is the default one.",["RC response not ok"]:"RC response is not ok",["invalid attribute name"]:"Attribute name {$attributeName} is invalid.",["invalid attribute value"]:"Attribute value {$attributeValue} is invalid.",["invalid custom metric name"]:"Custom metric name {$customMetricName} is invalid",["invalid String merger input"]:"Input for String merger is invalid, contact support team to resolve.",["already initialized"]:"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},I=new r["b"](w,y,_),E=new i["b"](y);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let S,A,T,O;E.logLevel=i["a"].INFO;class C{constructor(t){if(this.window=t,!t)throw I.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&Object(r["d"])()?!!Object(r["k"])()||(E.info("IndexedDB is not supported by current browswer"),!1):(E.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;const n=new this.PerformanceObserver(t=>{for(const n of t.getEntries())e(n)});n.observe({entryTypes:[t]})}static getInstance(){return void 0===S&&(S=new C(A)),S}}function D(t){A=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){const e=t.getId();return e.then(t=>{T=t}),e}function P(){return T}function k(t){const e=t.getToken();return e.then(t=>{}),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=t.length-e.length;if(n<0||n>1)throw I.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=M("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=M("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===O&&(O=new N),O}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(t){t[t["UNKNOWN"]=0]="UNKNOWN",t[t["VISIBLE"]=1]="VISIBLE",t[t["HIDDEN"]=2]="HIDDEN"})(L||(L={}));const R=["firebase_","google_","ga_"],B=new RegExp("^[a-zA-Z]\\w*$"),U=40,F=100;function $(){const t=C.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function H(){const t=C.getInstance().document,e=t.visibilityState;switch(e){case"visible":return L.VISIBLE;case"hidden":return L.HIDDEN;default:return L.UNKNOWN}}function V(){const t=C.getInstance().navigator,e=t.connection,n=e&&e.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function x(t){if(0===t.length||t.length>U)return!1;const e=R.some(e=>t.startsWith(e));return!e&&!!t.match(B)}function z(t){return 0!==t.length&&t.length<=F}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.appId;if(!n)throw I.create("no app id");return n}function W(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.projectId;if(!n)throw I.create("no project id");return n}function K(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.apiKey;if(!n)throw I.create("no api key");return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="0.0.1",G={loggingEnabled:!0},Y="FIREBASE_INSTALLATIONS_AUTH";function X(t,e){const n=Z();return n?(nt(n),Promise.resolve()):et(t,e).then(nt).then(t=>Q(t),()=>{})}function Z(){const t=C.getInstance().localStorage;if(!t)return;const e=t.getItem(v);if(!e||!rt(e))return;const n=t.getItem(b);if(n)try{const t=JSON.parse(n);return t}catch(r){return}}function Q(t){const e=C.getInstance().localStorage;t&&e&&(e.setItem(b,JSON.stringify(t)),e.setItem(v,String(Date.now()+60*N.getInstance().configTimeToLive*60*1e3)))}const tt="Could not fetch config, will use default configs";function et(t,e){return k(t.installations).then(n=>{const r=W(t.app),i=K(t.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,o=new Request(a,{method:"POST",headers:{Authorization:`${Y} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:q(t.app),app_version:u,sdk_version:J})});return fetch(o).then(t=>{if(t.ok)return t.json();throw I.create("RC response not ok")})}).catch(()=>{E.info(tt)})}function nt(t){if(!t)return t;const e=N.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=G.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):G.logSource&&(e.logSource=G.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:G.logEndPointUrl&&(e.logEndPointUrl=G.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:G.transportKey&&(e.transportKey=G.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==G.networkRequestsSamplingRate&&(e.networkRequestsSamplingRate=G.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==G.tracesSamplingRate&&(e.tracesSamplingRate=G.tracesSamplingRate),e.logTraceAfterSampling=it(e.tracesSamplingRate),e.logNetworkAfterSampling=it(e.networkRequestsSamplingRate),t}function rt(t){return Number(t)>Date.now()}function it(t){return Math.random()<=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at,ot=1;function st(t){return ot=2,at=at||ut(t),at}function ct(){return 3===ot}function ut(t){return lt().then(()=>j(t.installations)).then(e=>X(t,e)).then(()=>ft(),()=>ft())}function lt(){const t=C.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){const n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function ft(){ot=3}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1e4,ht=5500,pt=3,mt=1e3;let gt,bt=pt,vt=[],wt=!1;function yt(){wt||(_t(ht),wt=!0)}function _t(t){setTimeout(()=>{if(0!==bt)return vt.length?void It():_t(dt)},t)}function It(){const t=vt.splice(0,mt),e=t.map(t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:N.getInstance().logSource,log_event:e};Et(n,t).catch(()=>{vt=[...t,...vt],bt--,E.info(`Tries left: ${bt}.`),_t(dt)})}function Et(t,e){return St(t).then(t=>(t.ok||E.info("Call to Firebase backend failed."),t.json())).then(t=>{const n=Number(t.nextRequestWaitMillis);let r=dt;isNaN(n)||(r=Math.max(n,r));const i=t.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(vt=[...e,...vt],E.info("Retry transport request later.")),bt=pt,_t(r)})}function St(t){const e=N.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function At(t){if(!t.eventTime||!t.message)throw I.create("invalid cc log");vt=[...vt,t]}function Tt(t){return(...e)=>{const n=t(...e);At({message:n,eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){gt||(gt=Tt(Pt)),gt(t,e)}function Ct(t){const e=N.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&C.getInstance().requiredApisAvailable()&&(t.isAuto&&H()!==L.VISIBLE||(ct()?Dt(t):st(t.performanceController).then(()=>Dt(t),()=>Dt(t))))}function Dt(t){if(!P())return;const e=N.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout(()=>Ot(t,1),0)}function jt(t){const e=N.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>Ot(t,0),0)}function Pt(t,e){return 0===e?kt(t):Mt(t)}function kt(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Nt(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function Mt(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);const n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);const r={application_info:Nt(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function Nt(t){return{google_app_id:q(t),app_instance_id:P(),web_app_info:{sdk_version:u,page_url:C.getInstance().getUrl(),service_worker_status:$(),visibility_state:H(),effective_connection_type:V()},application_process_state:0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=100,Rt="_",Bt=[p,m,g];function Ut(t,e){return!(0===t.length||t.length>Lt)&&(e&&e.startsWith(h)&&Bt.indexOf(t)>-1||!t.startsWith(Rt))}function Ft(t){const e=Math.floor(t);return e<t&&E.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,n=!1,r){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=C.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`${l}-${this.randomId}-${this.name}`,this.traceStopMark=`${f}-${this.randomId}-${this.name}`,this.traceMeasure=r||`${d}-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw I.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw I.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ct(this)}record(t,e,n){if(t<=0)throw I.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw I.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const r of Object.keys(n.metrics))isNaN(Number(n.metrics[r]))||(this.counters[r]=Math.floor(Number(n.metrics[r])));Ct(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){if(!Ut(t,this.name))throw I.create("invalid custom metric name",{customMetricName:t});this.counters[t]=Ft(null!==e&&void 0!==e?e:0)}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const n=x(t),r=z(e);if(n&&r)this.customAttributes[t]=e;else{if(!n)throw I.create("invalid attribute name",{attributeName:t});if(!r)throw I.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n,r){const i=C.getInstance().getUrl();if(!i)return;const a=new $t(t,h+i,!0),o=Math.floor(1e3*C.getInstance().getTimeOrigin());a.setStartTime(o),e&&e[0]&&(a.setDuration(Math.floor(1e3*e[0].duration)),a.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),a.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),a.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));const s="first-paint",c="first-contentful-paint";if(n){const t=n.find(t=>t.name===s);t&&t.startTime&&a.putMetric(p,Math.floor(1e3*t.startTime));const e=n.find(t=>t.name===c);e&&e.startTime&&a.putMetric(m,Math.floor(1e3*e.startTime)),r&&a.putMetric(g,Math.floor(1e3*r))}Ct(a)}static createUserTimingTrace(t,e){const n=new $t(t,e,!1,e);Ct(n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){const n=e;if(!n||void 0===n.responseStart)return;const r=C.getInstance().getTimeOrigin(),i=Math.floor(1e3*(n.startTime+r)),a=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,o=Math.floor(1e3*(n.responseEnd-n.startTime)),s=n.name&&n.name.split("?")[0],c={performanceController:t,url:s,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:o};jt(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=5e3;function xt(t){P()&&(setTimeout(()=>qt(t),0),setTimeout(()=>zt(t),0),setTimeout(()=>Wt(t),0))}function zt(t){const e=C.getInstance(),n=e.getEntriesByType("resource");for(const r of n)Ht(t,r);e.setupObserver("resource",e=>Ht(t,e))}function qt(t){const e=C.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");if(e.onFirstInputDelay){let i=setTimeout(()=>{$t.createOobTrace(t,n,r),i=void 0},Vt);e.onFirstInputDelay(e=>{i&&(clearTimeout(i),$t.createOobTrace(t,n,r,e))})}else $t.createOobTrace(t,n,r)}function Wt(t){const e=C.getInstance(),n=e.getEntriesByType("measure");for(const r of n)Kt(t,r);e.setupObserver("measure",e=>Kt(t,e))}function Kt(t,e){const n=e.name;n.substring(0,d.length)!==d&&$t.createUserTimingTrace(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||(void 0!==(null===t||void 0===t?void 0:t.dataCollectionEnabled)&&(this.dataCollectionEnabled=t.dataCollectionEnabled),void 0!==(null===t||void 0===t?void 0:t.instrumentationEnabled)&&(this.instrumentationEnabled=t.instrumentationEnabled),C.getInstance().requiredApisAvailable()?Object(r["l"])().then(t=>{t&&(yt(),st(this).then(()=>xt(this),()=>xt(this)),this.initialized=!0)}).catch(t=>{E.info("Environment doesn't support IndexedDB: "+t)}):E.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){N.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return N.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){N.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return N.getInstance().dataCollectionEnabled}}const Gt="[DEFAULT]";function Yt(t=Object(a["m"])()){t=Object(r["i"])(t);const e=Object(a["i"])(t,"performance"),n=e.getImmediate();return n}function Xt(t,e){t=Object(r["i"])(t);const n=Object(a["i"])(t,"performance");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==e&&void 0!==e?e:{}))return t;throw I.create("already initialized")}const i=n.initialize({options:e});return i}function Zt(t,e){return t=Object(r["i"])(t),new $t(t,e)}const Qt=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==Gt)throw I.create("FB not default");if("undefined"===typeof window)throw I.create("no window");D(window);const i=new Jt(n,r);return i._init(e),i};function te(){Object(a["j"])(new o["a"]("performance",Qt,"PUBLIC")),Object(a["q"])(s,c),Object(a["q"])(s,c,"esm2017")}te()},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var o=a>=0?arguments[a]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===a(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),a=r(n.split("/")),o=Math.min(i.length,a.length),s=o,c=0;c<o;c++)if(i[c]!==a[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return u=u.concat(a.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,a=t.length-1;a>=1;--a)if(e=t.charCodeAt(a),47===e){if(!i){r=a;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,a=0,o=t.length-1;o>=0;--o){var s=t.charCodeAt(o);if(47!==s)-1===r&&(i=!1,r=o+1),46===s?-1===e?e=o:1!==a&&(a=1):-1!==e&&(a=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===a||1===a&&e===r-1&&e===n+1?"":t.slice(e,r)};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=s[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?a[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function f(t,e){for(const n of r){let r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:(e,n,...a)=>{const o=a.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:a,type:e.name})}}}}}]);