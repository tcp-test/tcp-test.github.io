"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7490],{87490:function(e,n,t){t.d(n,{$0:function(){return o},OR:function(){return s},LI:function(){return i},Xs:function(){return a}});var r=t(86006);function o(e){let n=(0,r.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return i(()=>{n.current=e},[e]),(0,r.useCallback)((...e)=>n.current(...e),[n])}var s=function(e,n,t,o){let s=(0,r.useRef)(n);i(()=>{s.current=n},[n]),(0,r.useEffect)(()=>{var n;let r=null!==(n=null==t?void 0:t.current)&&void 0!==n?n:window;if(!(r&&r.addEventListener))return;let u=e=>s.current(e);return r.addEventListener(e,u,o),()=>{r.removeEventListener(e,u,o)}},[e,t,o])};let u="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var i=u,a=function(e,n){let t=(0,r.useCallback)(()=>{if("undefined"==typeof window)return n;try{let t=window.sessionStorage.getItem(e);return t?function(e){try{return"undefined"===e?void 0:JSON.parse(null!=e?e:"")}catch(n){console.log("parsing error on",{value:e});return}}(t):n}catch(t){return console.warn(`Error reading sessionStorage key “${e}”:`,t),n}},[n,e]),[u,i]=(0,r.useState)(t),a=o(n=>{"undefined"==typeof window&&console.warn(`Tried setting sessionStorage key “${e}” even though environment is not a client`);try{let t=n instanceof Function?n(u):n;window.sessionStorage.setItem(e,JSON.stringify(t)),i(t),window.dispatchEvent(new Event("session-storage"))}catch(n){console.warn(`Error setting sessionStorage key “${e}”:`,n)}});(0,r.useEffect)(()=>{i(t())},[]);let c=(0,r.useCallback)(n=>{null!=n&&n.key&&n.key!==e||i(t())},[e,t]);return s("storage",c),s("session-storage",c),[u,a]}}}]);