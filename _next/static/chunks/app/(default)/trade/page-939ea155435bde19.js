(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9378],{87753:function(e){var t=function(e){void 0==e&&(e=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=Array(this.N),this.mti=this.N+1,e.constructor==Array?this.init_by_array(e,e.length):this.init_seed(e)};t.prototype.init_seed=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((4294901760&e)>>>16)*1812433253<<16)+(65535&e)*1812433253+this.mti,this.mt[this.mti]>>>=0}},t.prototype.init_by_array=function(e,t){var s,r,a;for(this.init_seed(19650218),s=1,r=0,a=this.N>t?this.N:t;a;a--){var n=this.mt[s-1]^this.mt[s-1]>>>30;this.mt[s]=(this.mt[s]^(((4294901760&n)>>>16)*1664525<<16)+(65535&n)*1664525)+e[r]+r,this.mt[s]>>>=0,s++,r++,s>=this.N&&(this.mt[0]=this.mt[this.N-1],s=1),r>=t&&(r=0)}for(a=this.N-1;a;a--){var n=this.mt[s-1]^this.mt[s-1]>>>30;this.mt[s]=(this.mt[s]^(((4294901760&n)>>>16)*1566083941<<16)+(65535&n)*1566083941)-s,this.mt[s]>>>=0,++s>=this.N&&(this.mt[0]=this.mt[this.N-1],s=1)}this.mt[0]=2147483648},t.prototype.random_int=function(){var e,t,s=[0,this.MATRIX_A];if(this.mti>=this.N){for(this.mti==this.N+1&&this.init_seed(5489),t=0;t<this.N-this.M;t++)e=this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK,this.mt[t]=this.mt[t+this.M]^e>>>1^s[1&e];for(;t<this.N-1;t++)e=this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK,this.mt[t]=this.mt[t+(this.M-this.N)]^e>>>1^s[1&e];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^s[1&e],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,(e^=e>>>18)>>>0},t.prototype.random_int31=function(){return this.random_int()>>>1},t.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},t.prototype.random=function(){return this.random_int()*(1/4294967296)},t.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},t.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},e.exports=t},3188:function(e,t,s){Promise.resolve().then(s.bind(s,69524)),Promise.resolve().then(s.bind(s,15680))},15680:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var r=s(60202),a=s(9268),n=s(92688),i=s.n(n),o=s(55449),l=s(86006),d=s(56008),c=s(20222),u=s(11951),m=s(79889),h=s(81292),x=s(70238),f=s(53430),p=s(82108),v=s(37437);let b=["出售","购买"];function N(e){var t,s,r;let{close:n,c2cAdvertised:i}=e,[d,c]=(0,l.useState)(0),[u,h]=(0,l.useState)(0),[N,g]=(0,l.useState)(0),[j,w]=(0,l.useState)(0),[y,S]=(0,l.useState)(0),[C,T]=(0,l.useState)(Number((0,m.dF)(i.total))),[k,_]=(0,l.useState)(Number((0,m.dF)(i.price))),[F,P]=(0,l.useState)(Number((0,m.dF)(i.min))),[M,L]=(0,l.useState)(Number((0,m.dF)(i.max))),[A,E]=(0,l.useState)(!1),[O,R]=(0,l.useState)(!1),[B,z]=(0,l.useState)(!1),{address:D,isConnecting:G,isDisconnected:W}=(0,o.mA)(),K=(0,o.xx)();(0,o.do)({address:f.lS.address[K],abi:f.lS.abi,functionName:"allowance",args:[D,"0x0B306BF915C4d645ff596e518fAf3F9669b97016"],chainId:K,watch:!0,onSuccess(e){e&&w(Number((0,m.dF)(null==e?void 0:e.toString())))}}),(0,o.do)({address:f.xR.address,abi:f.xR.abi,functionName:"allowance",args:[D,"0x0B306BF915C4d645ff596e518fAf3F9669b97016"],chainId:K,watch:!0,onSuccess(e){e&&S(Number((0,m.dF)(null==e?void 0:e.toString())))}}),(0,l.useEffect)(()=>{0==d&&(console.log("tcp allowance",j),console.log("usdt allowance",y),0==i.orderType&&j>=1e3&&c(1),1==i.orderType&&y>=1e3&&c(1))},[j,y]);let{data:H,isSuccess:Z,write:U}=(0,o.GG)({address:f.lS.address[K],abi:f.lS.abi,functionName:"approve",onError(e){v.default.error(e.details)}}),X=(0,o.GG)({address:f.xR.address,abi:f.xR.abi,functionName:"approve",onError(e){v.default.error(e.details)}});(0,o.BX)({hash:null===(t=X.data)||void 0===t?void 0:t.hash,onSuccess(e){e.blockNumber&&E(!1)}}),(0,o.BX)({hash:null==H?void 0:H.hash,onSuccess(e){e.blockNumber&&E(!1)}}),(0,l.useEffect)(()=>{console.log("step",d)},[d]),(0,l.useEffect)(()=>{Number(C)<Number(j)&&z(!1),Number(C)>Number(j)&&1==d&&(z(!0),v.default.custom(e=>(0,a.jsxs)("div",{className:"".concat(e.visible?"animate-enter":"animate-leave"," max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"),children:[(0,a.jsx)("div",{className:"flex-1 w-0 p-2",children:(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-red-500",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}),(0,a.jsx)("div",{className:"ml-3 flex-1",children:(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"你输入的金额超过授权额度.需要前往增加授权额度嘛?"})})]})}),(0,a.jsx)("div",{className:"flex border-l border-gray-200",children:(0,a.jsx)("button",{onClick:t=>{t.preventDefault(),c(0),v.default.dismiss(e.id),console.log("close")},className:"w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"去授权"})})]}),{position:"bottom-center",duration:5e3}))},[C,j]),(0,o.KQ)({address:D,token:f.lS.address[K],watch:!0,onSuccess(e){h(Number(e.formatted))}}),(0,o.KQ)({address:D,token:f.xR.address,watch:!0,onSuccess(e){g(Number(e.formatted))}});let q=(0,o.GG)({address:f.c7.address[K],abi:f.c7.abi,functionName:"addC2CAdvertise",onError(e){v.default.error(e.details),R(!1),z(!1)}}),I=(0,o.GG)({address:f.c7.address[K],abi:f.c7.abi,functionName:"editC2CAdvertise",onError(e){v.default.error(e.details),R(!1),z(!1)}});(0,o.BX)({hash:null===(s=q.data)||void 0===s?void 0:s.hash,onSuccess(e){e.blockNumber&&(v.default.success("发布成功"),setTimeout(()=>{R(!1),z(!1),n()},3e3))}}),(0,o.BX)({hash:null===(r=I.data)||void 0===r?void 0:r.hash,onSuccess(e){e.blockNumber&&(v.default.success("发布成功"),setTimeout(()=>{R(!1),z(!1),n()},3e3))}});let Q=()=>{if(C<1){v.default.error("交易数量太低");return}R(!0),void 0==i.id?q.write({args:[(0,m.fi)(C.toString()),(0,m.fi)(k.toString()),(0,m.fi)(F.toString()),(0,m.fi)(M.toString()),i.orderType],value:(0,m.fi)("0.003")}):(console.log((0,m.vz)(i.id.toString(),0),(0,m.fi)(C.toString()),(0,m.fi)(k.toString()),(0,m.fi)(F.toString()),(0,m.fi)(M.toString())),I.write({args:[(0,m.vz)(i.id.toString(),0),(0,m.fi)(C.toString()),(0,m.fi)(k.toString()),(0,m.fi)(F.toString()),(0,m.fi)(M.toString())],value:(0,m.fi)("0.003")}))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"  flex flex-col justify-center",children:(0,a.jsx)("div",{className:"px-5 sm:px-6 py-8",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,a.jsxs)("div",{className:"mb-6 flex justify-between",children:[(0,a.jsxs)("h1",{className:"h4 font-playfair-display text-slate-800",children:["发布",b[i.orderType]," TCP"]}),(0,a.jsx)("button",{onClick:n,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),(0,a.jsxs)("div",{className:"text-sm space-y-3",children:[(0,a.jsxs)("div",{className:"".concat(0!=d?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(d<=0?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"1、需要通过链上 ERC20 一次性批准",b[i.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=d?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(d<=1?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"2、确认",b[i.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=d?"hidden":""," space-y-3"),children:[void 0!=i.id&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:["已",b[i.orderType],"数量 "]})}),(0,a.jsx)("input",{id:"total",className:"form-input py-2 w-full text-gray-400",type:"number",value:(0,m.dF)(i.sold),disabled:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:[b[i.orderType],"数量 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:["余额:",0==i.orderType?u:N," ",(0,a.jsx)("span",{className:"text-blue-700",onClick:e=>{e.preventDefault(),T(0==i.orderType?u:N)},children:"最大"})]})]}),(0,a.jsx)("input",{id:"total",className:"form-input py-2 w-full",type:"number",value:C,onChange:e=>{e.preventDefault(),e.stopPropagation(),void 0!=i.sold&&Number(e.target.value)<=Number((0,m.dF)(i.sold))&&v.default.error("总量不可以低于已交易"),T(Number(e.target.value))},required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"price",children:["价格 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]})}),(0,a.jsx)("input",{id:"price",className:"form-input py-2 w-full",type:"number",step:.001,value:k,onChange:e=>{e.preventDefault(),e.stopPropagation(),_(Number(e.target.value))},required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"min",children:["每单最小限额 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]})}),(0,a.jsx)("input",{id:"min",className:"form-input py-2 w-full",type:"number",value:F,onChange:e=>{e.preventDefault(),e.stopPropagation(),P(Number(e.target.value))},required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"max",children:["每单最大限额 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]})}),(0,a.jsx)("input",{id:"max",className:"form-input py-2 w-full",type:"number",value:M,onChange:e=>{e.preventDefault(),e.stopPropagation(),L(Number(e.target.value))},required:!0})]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("div",{className:"".concat(0!=d?"hidden":""),children:(0,a.jsx)(p.Z,{isLoading:A,disabled:A,onClick:()=>{E(!0),0==i.orderType?U({args:["0x0B306BF915C4d645ff596e518fAf3F9669b97016",x.Bz]}):X.write({args:["0x0B306BF915C4d645ff596e518fAf3F9669b97016",x.Bz]})},children:"允许出售 TCP"})}),(0,a.jsx)("div",{className:"".concat(1!=d?"hidden":""),children:(0,a.jsx)(p.Z,{isLoading:O,disabled:B||O,onClick:Q,children:"发布"})})]})]})})})})})}let g=["购买","出售"];function j(e){var t,s;let{close:r,c2cAdvertised:n}=e,[i,d]=(0,l.useState)(0),[c,u]=(0,l.useState)(0),[h,b]=(0,l.useState)(0),[N,j]=(0,l.useState)(0),[w,y]=(0,l.useState)(0),[S,C]=(0,l.useState)(0),[T,k]=(0,l.useState)(Number((0,m.dF)(n.price))),[_,F]=(0,l.useState)(Number((0,m.dF)(n.min))),[P,M]=(0,l.useState)(Number((0,m.dF)(n.max))),[L,A]=(0,l.useState)(!1),[E,O]=(0,l.useState)(!1),[R,B]=(0,l.useState)(!1),{address:z,isConnecting:D,isDisconnected:G}=(0,o.mA)(),W=(0,o.xx)();(0,o.do)({address:f.lS.address[W],abi:f.lS.abi,functionName:"allowance",args:[z,f.c7.address[W]],chainId:W,watch:!0,onSuccess(e){e&&j(Number((0,m.dF)(null==e?void 0:e.toString())))}}),(0,o.do)({address:f.xR.address,abi:f.xR.abi,functionName:"allowance",args:[z,f.c7.address[W]],chainId:W,watch:!0,onSuccess(e){e&&y(Number((0,m.dF)(null==e?void 0:e.toString())))}}),(0,l.useEffect)(()=>{0==i&&(console.log("tcp allowance",N),console.log("usdt allowance",w),1==n.orderType&&N>=1e3&&d(1),0==n.orderType&&w>=1e3&&d(1))},[N,w]);let{data:K,isSuccess:H,write:Z}=(0,o.GG)({address:f.lS.address[W],abi:f.lS.abi,functionName:"approve",onError(e){v.default.error(e.details)}}),U=(0,o.GG)({address:f.xR.address,abi:f.xR.abi,functionName:"approve",onError(e){v.default.error(e.details)}});(0,o.BX)({hash:null===(t=U.data)||void 0===t?void 0:t.hash,onSuccess(e){e.blockNumber&&A(!1)}}),(0,o.BX)({hash:null==K?void 0:K.hash,onSuccess(e){e.blockNumber&&A(!1)}}),(0,l.useEffect)(()=>{console.log("step",i)},[i]),(0,l.useEffect)(()=>{(Number(S)<Number(N)&&1==n.orderType||0==n.orderType&&Number(S)<Number(w))&&B(!1),(Number(S)>Number(N)&&1==n.orderType||Number(S)>Number(w)&&0==n.orderType)&&1==i&&(B(!0),v.default.custom(e=>(0,a.jsxs)("div",{className:"".concat(e.visible?"animate-enter":"animate-leave"," max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"),children:[(0,a.jsx)("div",{className:"flex-1 w-0 p-2",children:(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-red-500",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}),(0,a.jsx)("div",{className:"ml-3 flex-1",children:(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"你输入的金额超过授权额度.需要前往增加授权额度嘛?"})})]})}),(0,a.jsx)("div",{className:"flex border-l border-gray-200",children:(0,a.jsx)("button",{onClick:t=>{t.preventDefault(),d(0),v.default.dismiss(e.id),console.log("close")},className:"w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"去授权"})})]}),{position:"bottom-center",duration:5e3}))},[S,N]),(0,o.KQ)({address:z,token:f.lS.address[W],watch:!0,onSuccess(e){u(Number(e.formatted))}}),(0,o.KQ)({address:z,token:f.xR.address,watch:!0,onSuccess(e){b(Number(e.formatted))}});let X=(0,o.GG)({address:f.c7.address[W],abi:f.c7.abi,functionName:"createC2COrder",onError(e){v.default.error(e.details),O(!1),B(!1)}});(0,o.BX)({hash:null===(s=X.data)||void 0===s?void 0:s.hash,onSuccess(e){e.blockNumber&&(v.default.success("交易成功"),setTimeout(()=>{O(!1),B(!1),r()},3e3))}});let q=()=>{if(S<1){v.default.error("交易数量太低");return}if(n.orderType&&h<S){v.default.error("USDT余额不足");return}if(1==n.orderType&&c<S){v.default.error("TCP余额不足");return}O(!0),X.write({args:[(0,m.vz)(n.id.toString(),0),(0,m.fi)(S.toString())],value:(0,m.fi)("0.003")})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"  flex flex-col justify-center",children:(0,a.jsx)("div",{className:"px-5 sm:px-6 py-8",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,a.jsxs)("div",{className:"mb-6 flex justify-between",children:[(0,a.jsxs)("h1",{className:"h4 font-playfair-display text-slate-800",children:[g[n.orderType]," TCP"]}),(0,a.jsx)("button",{onClick:r,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),(0,a.jsxs)("div",{className:"text-sm space-y-3",children:[(0,a.jsxs)("div",{className:"".concat(0!=i?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(i<=0?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"1、需要通过链上 ERC20 一次性批准",g[n.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=i?"text-slate-400":""," flex"),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"".concat(i<=1?"hidden":""," w-6 h-6 text-green-600"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"2、确认",g[n.orderType]," TCP"]}),(0,a.jsxs)("div",{className:"".concat(1!=i?"hidden":""," space-y-3"),children:[(0,a.jsxs)("div",{className:"flex ",children:[(0,a.jsx)("div",{children:"单价"}),(0,a.jsxs)("div",{className:"ml-2 text-green-600 font-bold",children:[(0,m.dF)(n.price)," USDT"]})]}),(0,a.jsxs)("div",{className:"flex  text-sm",children:[(0,a.jsx)("div",{children:"每笔限额"}),(0,a.jsxs)("div",{className:"ml-2  font-bold",children:[(0,m.dF)(n.min),"-",(0,m.dF)(n.max)," TCP"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("label",{className:" text-sm font-medium mb-1",htmlFor:"total",children:[g[n.orderType],"数量 ",(0,a.jsx)("span",{className:"text-rose-500",children:"*"})]}),(0,a.jsxs)("label",{className:" text-sm mb-1",htmlFor:"total",children:["可用余额:",(0,a.jsxs)("span",{className:"font-medium ",children:[0==n.orderType?h:c," ",0==n.orderType?"USDT":"TCP"]})]})]}),(0,a.jsx)("input",{id:"total",className:"form-input py-2 w-full",type:"number",value:S,onChange:e=>{e.preventDefault(),e.stopPropagation(),(Number(e.target.value)<Number((0,m.dF)(n.min))||Number(e.target.value)>Number((0,m.dF)(n.max)))&&v.default.error("超出每比限额范围"),C(Number(e.target.value))},required:!0})]}),(0,a.jsxs)("div",{className:"flex ",children:[(0,a.jsx)("div",{children:0==n.orderType?"需支付":"将得到"}),(0,a.jsxs)("div",{className:"ml-2  font-bold",children:[Number((0,m.dF)(n.price))*S," USDT"]})]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("div",{className:"".concat(0!=i?"hidden":""),children:(0,a.jsxs)(p.Z,{isLoading:L,disabled:L,onClick:()=>{A(!0),1==n.orderType?Z({args:[f.c7.address[W],x.Bz]}):U.write({args:[f.c7.address[W],x.Bz]})},children:["允许",g[n.orderType]," TCP"]})}),(0,a.jsx)("div",{className:"".concat(1!=i?"hidden":""),children:(0,a.jsx)(p.Z,{isLoading:E,disabled:R||E,onClick:q,children:"交易"})})]})]})})})})})}function w(){let e=(0,r._)(['\n    query MyQuery($where: C2CAdvertised_filter = {orderType: "0"}) {\n      c2Cadvertiseds(where: $where) {\n        total\n        sold\n        price\n        owner\n        orderType\n        orderCount\n        min\n        max\n        isDelete\n        id\n        createTime\n        nickName\n      }\n    }\n  ']);return w=function(){return e},e}function y(){let e=(0,r._)(['\n    query MyQuery($orderType: BigInt = "0") {\n      c2Cadvertiseds(where: {nickName_not: "0", orderType: $orderType}) {\n        total\n        sold\n        price\n        owner\n        orderType\n        orderCount\n        min\n        max\n        isDelete\n        id\n        createTime\n        nickName\n      }\n    }\n  ']);return y=function(){return e},e}function S(){let e=(0,r._)(['\n  query MyQuery {\n    c2Cadvertiseds(\n      where: {owner: "','"}\n    ) {\n      id\n      isDelete\n      max\n      min\n      orderCount\n      orderType\n      owner\n      sold\n      price\n      total\n      createTime\n      nickName\n    }\n  }\n  ']);return S=function(){return e},e}function C(){let{address:e}=(0,o.mA)(),t=(0,o.xx)(),[s,r]=(0,l.useState)({orderType:"1"}),x=(0,c.Ps)(w()),p=(0,c.Ps)(y()),v=(0,c.Ps)(S(),null==e?void 0:e.toLocaleLowerCase()),[b,g]=(0,l.useState)({max:"0",min:"0",orderCount:"0",orderType:1,price:"0",sold:"0",total:"0"}),[C,T]=(0,l.useState)(),k=(0,u.a)(v),_=(0,d.useSearchParams)();(0,l.useEffect)(()=>{let e=_.get("type");console.log("type:",e),P(e=>[]),"buy"==e&&(g(e=>({...e,max:"0",min:"0",orderCount:"0",orderType:0,price:"0",sold:"0",total:"0"})),r(e=>({...e,orderType:"0"}))),"sell"==e&&(g(e=>({...e,max:"0",min:"0",orderCount:"0",orderType:1,price:"0",sold:"0",total:"0"})),r(e=>({...e,orderType:"1"})))},[_.get("type")]),(0,o.Dm)({contracts:[{address:f.wA.address[t.toString()],abi:f.wA.abi,functionName:"getParentAddress",args:[e]},{address:f.wA.address[t.toString()],abi:f.wA.abi,functionName:"getRecommendAccounts",args:[e]}],watch:!0,onSuccess:e=>{console.log("useContractReads success",e);let t=[];if(e[0].result&&t.push(e[0].result.toString()),e[1].result)for(let s=0;s<e[1].result.length;s++){let r=e[1].result[s];t.push(r.toString())}r(e=>({...e,owner_in:t}))},onError:e=>{console.log("useContractReads error",e)}}),(0,l.useEffect)(()=>{let e=_.get("type");if(k.data&&k.data.c2Cadvertiseds){let t=k.data.c2Cadvertiseds;for(let s=0;s<t.length;s++){let r=t[s];"buy"==e&&0==r.orderType&&g(r),"sell"==e&&1==r.orderType&&g(r)}}},[k.data]);let[F,P]=(0,l.useState)([]),{loading:M,error:L,data:A}=(0,u.a)(x,{variables:{where:s}}),E=(0,u.a)(p,{variables:{orderType:s.orderType}});(0,l.useEffect)(()=>{var e,t;A&&A.c2Cadvertiseds&&(null===(e=A.c2Cadvertiseds)||void 0===e||e.map(e=>{P(t=>[...t,e])})),E.data&&E.data.c2Cadvertiseds&&(null===(t=E.data.c2Cadvertiseds)||void 0===t||t.map(e=>{P(t=>[...t,e])}))},[A,E.data]),console.log(A);let O=e=>{if(!e)return"No Account";let t=e.match(/^(0x[a-zA-Z0-9]{6})[a-zA-Z0-9]+([a-zA-Z0-9]{8})$/);return t?"".concat(t[1],"...").concat(t[2]):e},[R,B]=(0,l.useState)(!1),[z,D]=(0,l.useState)(!1),[G,W]=(0,l.useState)(!1);return(0,a.jsxs)("section",{className:"",children:[(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"py-6 md:py-20 ",children:[(0,a.jsxs)("div",{className:"max-w-sm mx-auto sm:max-w-none grid gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16","data-aos-id-testimonials":!0,children:[E.data&&E.data.c2Cadvertiseds.map((e,t)=>(0,a.jsxs)("article",{className:"h-full flex flex-col bg-white p-6 shadow-xl","data-aos":"fade-up","data-aos-anchor":"[data-aos-id-testimonials]",children:[(0,a.jsxs)("header",{className:"",children:[(0,a.jsxs)("div",{className:"flex items-center align-middle space-x-1",children:[(0,a.jsx)(i(),{diameter:20,seed:(0,n.jsNumberForAddress)(e.owner)}),(0,a.jsx)("span",{className:"font-playfair-display text-blue-600",children:e.nickName?e.nickName:O(e.owner)}),e.nickName&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-yellow-400",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]}),(0,a.jsxs)("div",{className:"text-slate-500",children:[(0,a.jsx)("span",{className:"font-playfair-display ",children:(0,m.dF)(e.sold)}),(0,a.jsx)("label",{className:"text-sm",children:" 成交量"})]})]}),(0,a.jsxs)("div",{className:" mt-5 w-full",children:[(0,a.jsx)("span",{className:"h3 text-slate-800  font-playfair-display mr-2",children:(0,m.dF)(e.price)}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"USDT"})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"数量"}),(0,a.jsxs)("p",{className:"",children:[Number((0,m.dF)(e.total))-Number((0,m.dF)(e.sold))," TCP"]})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"限额"}),(0,a.jsxs)("p",{className:"",children:[(0,m.dF)(e.min),"-",(0,m.dF)(e.max)," TCP"]})]}),(0,a.jsxs)("div",{className:"mt-2",children:[0==e.orderType&&(0,a.jsx)("button",{className:"btn bg-green-600 w-full text-white rounded-md",onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log(1234),T(e),W(!0)},children:"购买 TCP"}),1==e.orderType&&(0,a.jsx)("button",{className:"btn bg-red-600 w-full text-white rounded-md",onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log(4321),T(e),W(!0)},children:"出售 TCP"})]})]},t)),A&&A.c2Cadvertiseds.map((e,t)=>(0,a.jsxs)("article",{className:"h-full flex flex-col bg-white p-6 shadow-xl","data-aos":"fade-up","data-aos-anchor":"[data-aos-id-testimonials]",children:[(0,a.jsxs)("header",{className:"",children:[(0,a.jsxs)("div",{className:"flex items-center align-middle space-x-1",children:[(0,a.jsx)(i(),{diameter:20,seed:(0,n.jsNumberForAddress)(e.owner)}),(0,a.jsx)("span",{className:"font-playfair-display text-blue-600",children:e.nickName?e.nickName:O(e.owner)}),e.nickName&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-yellow-400",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})]}),(0,a.jsxs)("div",{className:"text-slate-500",children:[(0,a.jsx)("span",{className:"font-playfair-display ",children:(0,m.dF)(e.sold)}),(0,a.jsx)("label",{className:"text-sm",children:" 成交量"})]})]}),(0,a.jsxs)("div",{className:" mt-5 w-full",children:[(0,a.jsx)("span",{className:"h3 text-slate-800  font-playfair-display mr-2",children:(0,m.dF)(e.price)}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"USDT"})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"数量"}),(0,a.jsxs)("p",{className:"",children:[Number((0,m.dF)(e.total))-Number((0,m.dF)(e.sold))," TCP"]})]}),(0,a.jsxs)("div",{className:"flex space-x-2 mt-2 font-medium",children:[(0,a.jsx)("p",{className:"text-slate-500",children:"限额"}),(0,a.jsxs)("p",{className:"",children:[(0,m.dF)(e.min),"-",(0,m.dF)(e.max)," TCP"]})]}),(0,a.jsxs)("div",{className:"mt-2",children:[0==e.orderType&&(0,a.jsx)("button",{className:"btn bg-green-600 w-full text-white rounded-md",onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log(1234),T(e),W(!0)},children:"购买 TCP"}),1==e.orderType&&(0,a.jsx)("button",{className:"btn bg-red-600 w-full text-white rounded-md",onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log(4321),T(e),W(!0)},children:"出售 TCP"})]})]},t))]}),(0,a.jsx)("div",{className:"text-center fixed bottom-0 right-0 ".concat(R?"hidden":""),onClick:()=>{B(!0)},children:(0,a.jsx)("button",{className:" text-white bg-yellow-600 hover:bg-yellow-700 group w-10 h-16 rounded-l-lg  animate-bounce2",children:(0,a.jsx)("div",{className:"tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out",children:"<-"})})}),(0,a.jsx)("div",{className:"text-center fixed bottom-0 right-0 ".concat(R?"":"hidden"),children:(0,a.jsxs)("div",{className:" text-white  h-16",children:[(0,a.jsx)("div",{className:"h-full my-auto btn border-r-white bg-yellow-600 hover:bg-yellow-700 rounded-l-lg",onClick:()=>{D(!0)},children:"发布"}),(0,a.jsx)("button",{className:" text-white bg-yellow-600 hover:bg-yellow-700 group w-10 h-16 rounded-r-lg",onClick:()=>{B(!1)},children:(0,a.jsx)("div",{className:"tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out",children:"->"})})]})})]})}),(0,a.jsx)(h.Z,{id:"C2cOrderAdd",ariaLabel:"1232",show:G,handleClose:()=>{W(!1)},children:(0,a.jsx)(j,{close:()=>{W(!1)},c2cAdvertised:C})}),(0,a.jsx)(h.Z,{id:"C2cAdd",ariaLabel:"1232",show:z,handleClose:()=>{D(!1)},children:(0,a.jsx)(N,{close:()=>{D(!1)},c2cAdvertised:b})})]})}},69524:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var r=s(9268),a=s(56008);function n(){let e=(0,a.useSearchParams)(),t=e.get("type");return(0,r.jsxs)("section",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-slate-900 pointer-events-none -z-10","aria-hidden":"true"}),(0,r.jsx)("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:(0,r.jsx)("div",{className:"pt-24 pb-12",children:(0,r.jsx)("div",{className:"max-w-3xl mx-auto text-center",children:(0,r.jsx)("h2",{className:"h2 font-playfair-display text-white",children:"buy"==t?"我要买":"我要卖"})})})})]})}},82108:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(9268);function a(e){let{children:t,isLoading:s=!1,disabled:a=!1,className:n="w-full btn-sm  mt-4",onClick:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{disabled:a,className:"".concat(a?"text-white bg-slate-600 hover:bg-slate-700":"text-white bg-blue-600 hover:bg-blue-700"," ").concat(n),onClick:e=>{e.preventDefault(),e.stopPropagation(),i()},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"".concat(s?"flex":"hidden"," w-6 h-6 animate-spin"),children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),t]})})}},81292:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(9268),a=s(86006),n=s(9666);function i(e){let{children:t,id:s,ariaLabel:i,show:o,handleClose:l}=e,d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{var t;let{target:s}=e;!o||(null===(t=d.current)||void 0===t?void 0:t.contains(s))||l()};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[o,l,d]),(0,a.useEffect)(()=>{let e=e=>{let{keyCode:t}=e;27===t&&l()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.u,{show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-out duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",className:"fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity","aria-hidden":"true"}),(0,r.jsx)(n.u,{show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ttransition ease-out duration-200",leaveFrom:"oopacity-100 scale-100",leaveTo:"opacity-0 scale-95",id:s,className:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true","aria-labelledby":i,children:(0,r.jsx)("div",{className:"bg-white overflow-auto  max-h-full",ref:d,children:t})})]})}},91208:function(e,t,s){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}),n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.prototype.hasOwnProperty.call(e,s)&&i(t,e,s);return o(t,e),t},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=s(9268),u=l(s(86006)),m=d(s(87753)),h=s(874),x=d(s(74678)),f=d(s(2141)),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.genColor=function(e){t.generator.random();var s=Math.floor(e.length*t.generator.random());return e.splice(s,1)[0]},t.hueShift=function(e,t){var s=30*t.random()-15;return e.map(function(e){return(0,h.colorRotate)(e,s)})},t.genShape=function(e,s,r,a){var n=s/2,i=t.generator.random(),o=2*Math.PI*i,l=s/a*t.generator.random()+r*s/a,d="rotate("+(360*i+180*t.generator.random()).toFixed(1)+" "+n+" "+n+")",u=t.genColor(e);return(0,c.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",height:s,width:s,transform:"translate("+Math.cos(o)*l+" "+Math.sin(o)*l+") "+d,fill:u},r)},t}return a(t,e),t.prototype.render=function(){var e=this,t=this.props,s=t.diameter,r=void 0===s?24:s,a=t.paperStyles,i=t.seed,o=t.svgStyles;this.generator=new m.default(i);var l=this.hueShift(x.default.slice(),this.generator),d=[,,,,].fill(void 0);return(0,c.jsx)(f.default,n({color:this.genColor(l),diameter:r,style:void 0===a?{}:a},{children:(0,c.jsx)("svg",n({xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",height:r,width:r,style:void 0===o?{}:o},{children:d.map(function(t,s){return e.genShape(l,r,s,3)})}),void 0)}),void 0)},t}(u.PureComponent);t.default=p},2141:function(e,t,s){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=s(9268),n={borderRadius:"50px",display:"inline-block",margin:0,overflow:"hidden",padding:0};t.default=function(e){var t=e.children,s=e.color,i=e.diameter,o=e.style;return(0,a.jsx)("div",r({className:"paper",style:r(r(r({},n),{backgroundColor:s,height:i,width:i}),o)},{children:t}),void 0)}},874:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HSLToHex=t.hexToHSL=t.colorRotate=void 0,t.colorRotate=function(e,s){var r=(0,t.hexToHSL)(e),a=r.h;return a=(a=(a+s)%360)<0?360+a:a,r.h=a,(0,t.HSLToHex)(r)},t.hexToHSL=function(e){var t="0x"+e[1]+e[2],s="0x"+e[3]+e[4],r="0x"+e[5]+e[6],a=parseInt(t)/255,n=parseInt(s)/255,i=parseInt(r)/255,o=Math.min(a,n,i),l=Math.max(a,n,i),d=l-o,c=0,u=0,m=0;return(c=Math.round(60*(c=0==d?0:l==a?(n-i)/d%6:l==n?(i-a)/d+2:(a-n)/d+4)))<0&&(c+=360),m=(l+o)/2,{h:c,s:+(100*(0==d?0:d/(1-Math.abs(2*m-1)))).toFixed(1),l:m=+(100*m).toFixed(1)}},t.HSLToHex=function(e){var t=e.h,s=e.s,r=e.l,a=(1-Math.abs(2*(r/=100)-1))*(s/=100),n=a*(1-Math.abs(t/60%2-1)),i=r-a/2,o=0,l=0,d=0;0<=t&&t<60?(o=a,l=n,d=0):60<=t&&t<120?(o=n,l=a,d=0):120<=t&&t<180?(o=0,l=a,d=n):180<=t&&t<240?(o=0,l=n,d=a):240<=t&&t<300?(o=n,l=0,d=a):300<=t&&t<360&&(o=a,l=0,d=n);var c=Math.round((o+i)*255).toString(16),u=Math.round((l+i)*255).toString(16),m=Math.round((d+i)*255).toString(16);return 1==c.length&&(c="0"+c),1==u.length&&(u="0"+u),1==m.length&&(m="0"+m),"#"+c+u+m}},74678:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze(["#01888c","#fc7500","#034f5d","#f73f01","#fc1960","#c7144c","#f3c100","#1598f2","#2465e1","#f19e02"])},92688:function(e,t,s){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.jsNumberForAddress=t.default=void 0;var a=s(91208);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}});var n=s(91e3);Object.defineProperty(t,"jsNumberForAddress",{enumerable:!0,get:function(){return r(n).default}})},91e3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return parseInt(e.slice(2,10),16)}}},function(e){e.O(0,[6882,9889,7388,537,8693,3430,2667,8139,1744],function(){return e(e.s=3188)}),_N_E=e.O()}]);