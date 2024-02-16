(self.webpackChunk=self.webpackChunk||[]).push([[286],{67651:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(29798),a=r(52322);const n=(0,o.Z)([(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,a.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera")},85219:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(29798),a=r(52322);const n=(0,o.Z)((0,a.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update")},42523:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var o=r(98283),a=r(7560),n=r(2784),s=r(40489),i=r(69075),c=r(62197),l=r(43853),d=r(65992),u=r(69222),p=r(15672);function h(e){return(0,p.Z)("MuiCardHeader",e)}const f=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=r(52322);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),k=n.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:d,className:u,component:p="div",disableTypography:f=!1,subheader:k,subheaderTypographyProps:L,title:S,titleTypographyProps:x}=r,E=(0,o.Z)(r,m),j=(0,a.Z)({},r,{component:p,disableTypography:f}),T=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)})(j);let O=S;null==O||O.type===c.Z||f||(O=(0,g.jsx)(c.Z,(0,a.Z)({variant:d?"body2":"h5",className:T.title,component:"span",display:"block"},x,{children:O})));let P=k;return null==P||P.type===c.Z||f||(P=(0,g.jsx)(c.Z,(0,a.Z)({variant:d?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},L,{children:P}))),(0,g.jsxs)(y,(0,a.Z)({className:(0,s.Z)(T.root,u),as:p,ref:t,ownerState:j},E,{children:[d&&(0,g.jsx)(v,{className:T.avatar,ownerState:j,children:d}),(0,g.jsxs)(w,{className:T.content,ownerState:j,children:[O,P]}),n&&(0,g.jsx)(b,{className:T.action,ownerState:j,children:n})]}))}))},72841:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var o=r(98283),a=r(7560),n=r(2784),s=r(40489),i=r(69075),c=r(28165),l=r(7342),d=r(43853),u=r(65992),p=r(69222),h=r(15672);function f(e){return(0,h.Z)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=r(52322);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let y,v,b,w,k=e=>e;const L=44,S=(0,c.F4)(y||(y=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),x=(0,c.F4)(v||(v=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),E=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,l.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(b||(b=k`
      animation: ${0} 1.4s linear infinite;
    `),S))),j=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),T=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,l.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(w||(w=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),x))),O=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:c="primary",disableShrink:u=!1,size:p=40,style:h,thickness:y=3.6,value:v=0,variant:b="indeterminate"}=r,w=(0,o.Z)(r,m),k=(0,a.Z)({},r,{color:c,disableShrink:u,size:p,thickness:y,value:v,variant:b}),S=(e=>{const{classes:t,variant:r,color:o,disableShrink:a}=e,n={root:["root",r,`color${(0,l.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(r)}`,a&&"circleDisableShrink"]};return(0,i.Z)(n,f,t)})(k),x={},O={},P={};if("determinate"===b){const e=2*Math.PI*((L-y)/2);x.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(v),x.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,g.jsx)(E,(0,a.Z)({className:(0,s.Z)(S.root,n),style:(0,a.Z)({width:p,height:p},O,h),ownerState:k,ref:t,role:"progressbar"},P,w,{children:(0,g.jsx)(j,{className:S.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,g.jsx)(T,{className:S.circle,style:x,ownerState:k,cx:L,cy:L,r:(L-y)/2,fill:"none",strokeWidth:y})})}))}))},72751:e=>{e.exports=function(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||(!("undefined"==typeof process||"object"!=typeof process.versions||!process.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}},25047:e=>{var t=function(e){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function d(e,t,r,o){var n=t&&t.prototype instanceof y?t:y,s=Object.create(n.prototype),i=new R(o||[]);return a(s,"_invoke",{value:j(e,r,i)}),s}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=d;var p="suspendedStart",h="suspendedYield",f="executing",g="completed",m={};function y(){}function v(){}function b(){}var w={};l(w,s,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(A([])));L&&L!==r&&o.call(L,s)&&(w=L);var S=b.prototype=y.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,n,s,i){var c=u(e[a],e,n);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,i)}),(function(e){r("throw",e,s,i)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,i)}))}i(c.arg)}var n;a(this,"_invoke",{value:function(e,o){function a(){return new t((function(t,a){r(e,o,t,a)}))}return n=n?n.then(a,a):a()}})}function j(e,t,r){var o=p;return function(a,n){if(o===f)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw n;return N()}for(r.method=a,r.arg=n;;){var s=r.delegate;if(s){var i=T(s,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var c=u(e,t,r);if("normal"===c.type){if(o=r.done?g:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function T(e,r){var o=r.method,a=e.iterator[o];if(a===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),m;var n=u(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;var s=n.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function A(e){if(e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function r(){for(;++a<e.length;)if(o.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return n.next=n}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},x(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,o,a,n){void 0===n&&(n=Promise);var s=new E(d(t,r,o,a),n);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},x(S),l(S,c,"Generator"),l(S,s,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=A,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(o,a){return i.type="throw",i.arg=e,r.next=o,a&&(r.method="next",r.arg=t),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],i=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),l=o.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=e,s.arg=t,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var a=o.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:A(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},8614:(e,t,r)=>{const o=r(71521);e.exports={recognize:async(e,t,r)=>{const a=await o(t,1,r);return a.recognize(e).finally((async()=>{await a.terminate()}))},detect:async(e,t)=>{const r=await o("osd",0,t);return r.detect(e).finally((async()=>{await r.terminate()}))}}},54854:e=>{e.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},48819:e=>{e.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},9831:e=>{e.exports={workerBlobURL:!0,logger:()=>{}}},73186:e=>{e.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},62809:(e,t,r)=>{const o=r(7486);let a=0;e.exports=({id:e,action:t,payload:r={}})=>{let n=e;return void 0===n&&(n=o("Job",a),a+=1),{id:n,action:t,payload:r}}},77879:function(e,t,r){const o=r(62809),{log:a}=r(71616),n=r(7486);let s=0;e.exports=()=>{const e=n("Scheduler",s),t={},r={};let i=[];s+=1;const c=()=>Object.keys(t).length,l=()=>{if(0!==i.length){const e=Object.keys(t);for(let o=0;o<e.length;o+=1)if(void 0===r[e[o]]){i[0](t[e[o]]);break}}},d=(t,n)=>new Promise(((s,c)=>{const d=o({action:t,payload:n});i.push((async e=>{i.shift(),r[e.id]=d;try{s(await e[t].apply(this,[...n,d.id]))}catch(o){c(o)}finally{delete r[e.id],l()}})),a(`[${e}]: Add ${d.id} to JobQueue`),a(`[${e}]: JobQueue length=${i.length}`),l()}));return{addWorker:r=>(t[r.id]=r,a(`[${e}]: Add ${r.id}`),a(`[${e}]: Number of workers=${c()}`),l(),r.id),addJob:async(t,...r)=>{if(0===c())throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return d(t,r)},terminate:async()=>{Object.keys(t).forEach((async e=>{await t[e].terminate()})),i=[]},getQueueLen:()=>i.length,getNumWorkers:c}}},71521:(e,t,r)=>{const o=r(7105),a=r(11540),n=r(62809),{log:s}=r(71616),i=r(7486),c=r(54854),{defaultOptions:l,spawnWorker:d,terminateWorker:u,onMessage:p,loadImage:h,send:f}=r(38409);let g=0;e.exports=async(e="eng",t=c.LSTM_ONLY,r={},m={})=>{const y=i("Worker",g),{logger:v,errorHandler:b,...w}=o({...l,...r}),k={},L={},S="string"==typeof e?e.split("+"):e;let x=t,E=m;const j=[c.DEFAULT,c.LSTM_ONLY].includes(t)&&!w.legacyCore;let T,O;const P=new Promise(((e,t)=>{O=e,T=t}));let R=d(w);R.onerror=e=>{T(e.message)},g+=1;const A=(e,t)=>{k[e]=t},N=(e,t)=>{L[e]=t},_=({id:e,action:t,payload:r})=>new Promise(((o,a)=>{s(`[${y}]: Start ${e}, action=${t}`),A(t,o),N(t,a),f(R,{workerId:y,jobId:e,action:t,payload:r})})),M=(e,t)=>_(n({id:t,action:"loadLanguage",payload:{langs:e,options:{langPath:w.langPath,dataPath:w.dataPath,cachePath:w.cachePath,cacheMethod:w.cacheMethod,gzip:w.gzip,lstmOnly:[c.LSTM_ONLY,c.TESSERACT_LSTM_COMBINED].includes(x)&&!w.legacyLang}}})),C=(e,t,r,o)=>_(n({id:o,action:"initialize",payload:{langs:e,oem:t,config:r}}));p(R,(({workerId:e,jobId:t,status:r,action:o,data:n})=>{if("resolve"===r){s(`[${e}]: Complete ${t}`);let r=n;"recognize"===o?r=a(n):"getPDF"===o&&(r=Array.from({...n,length:Object.keys(n).length})),k[o]({jobId:t,data:r})}else if("reject"===r){if(L[o](n),"load"===o&&T(n),!b)throw Error(n);b(n)}else"progress"===r&&v({...n,userJobId:t})}));const Z={id:y,worker:R,setResolve:A,setReject:N,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(e,t,r)=>_(n({id:r,action:"FS",payload:{method:"writeFile",args:[e,t]}})),readText:(e,t)=>_(n({id:t,action:"FS",payload:{method:"readFile",args:[e,{encoding:"utf8"}]}})),removeFile:(e,t)=>_(n({id:t,action:"FS",payload:{method:"unlink",args:[e]}})),FS:(e,t,r)=>_(n({id:r,action:"FS",payload:{method:e,args:t}})),loadLanguage:()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),initialize:()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),reinitialize:(e="eng",t,r,o)=>{if(j&&[c.TESSERACT_ONLY,c.TESSERACT_LSTM_COMBINED].includes(t))throw Error("Legacy model requested but code missing.");const a=t||x;x=a;const n=r||E;E=n;const s=("string"==typeof e?e.split("+"):e).filter((e=>!S.includes(e)));return S.push(...s),s.length>0?M(s,o).then((()=>C(e,a,n,o))):C(e,a,n,o)},setParameters:(e={},t)=>_(n({id:t,action:"setParameters",payload:{params:e}})),recognize:async(e,t={},r={blocks:!0,text:!0,hocr:!0,tsv:!0},o)=>_(n({id:o,action:"recognize",payload:{image:await h(e),options:t,output:r}})),getPDF:(e="Tesseract OCR Result",t=!1,r)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),_(n({id:r,action:"getPDF",payload:{title:e,textonly:t}}))),detect:async(e,t)=>{if(j)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return _(n({id:t,action:"detect",payload:{image:await h(e)}}))},terminate:async()=>(null!==R&&(u(R),R=null),Promise.resolve())};var I;return _(n({id:I,action:"load",payload:{options:{lstmOnly:j,corePath:w.corePath,logging:w.logging}}})).then((()=>M(e))).then((()=>C(e,t,m))).then((()=>O(Z))).catch((()=>{})),P}},24370:(e,t,r)=>{r(25047);const o=r(77879),a=r(71521),n=r(8614),s=r(73186),i=r(54854),c=r(48819),{setLogging:l}=r(71616);e.exports={languages:s,OEM:i,PSM:c,createScheduler:o,createWorker:a,setLogging:l,...n}},11540:e=>{e.exports=e=>{const t=[],r=[],o=[],a=[],n=[];return e.blocks&&e.blocks.forEach((s=>{s.paragraphs.forEach((t=>{t.lines.forEach((r=>{r.words.forEach((o=>{o.symbols.forEach((a=>{n.push({...a,page:e,block:s,paragraph:t,line:r,word:o})})),a.push({...o,page:e,block:s,paragraph:t,line:r})})),o.push({...r,page:e,block:s,paragraph:t})})),r.push({...t,page:e,block:s})})),t.push({...s,page:e})})),{...e,blocks:t,paragraphs:r,lines:o,words:a,symbols:n}}},21532:(e,t,r)=>{const o=r(72751);e.exports=e=>{const t={};return"undefined"!=typeof WorkerGlobalScope?t.type="webworker":o()?t.type="electron":"object"==typeof document?t.type="browser":"object"==typeof process&&(t.type="node"),void 0===e?t:t[e]}},7486:e=>{e.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`},71616:function(e,t){let r=!1;t.logging=r,t.setLogging=e=>{r=e},t.log=(...e)=>r?console.log.apply(this,e):null},7105:(e,t,r)=>{const o="browser"===r(21532)("type")?e=>new URL(e,window.location.href).href:e=>e;e.exports=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach((r=>{e[r]&&(t[r]=o(t[r]))})),t}},26708:(e,t,r)=>{const{version:o}=r(13506),a=r(9831);e.exports={...a,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${o}/dist/worker.min.js`}},38409:(e,t,r)=>{const o=r(26708),a=r(28519),n=r(26232),s=r(9262),i=r(16452),c=r(64839);e.exports={defaultOptions:o,spawnWorker:a,terminateWorker:n,onMessage:s,send:i,loadImage:c}},64839:e=>{const t=e=>new Promise(((t,r)=>{const o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=({target:{error:{code:e}}})=>{r(Error(`File could not be read! Code=${e}`))},o.readAsArrayBuffer(e)})),r=async e=>{let o=e;if(void 0===e)return"undefined";if("string"==typeof e)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))o=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const t=await fetch(e);o=await t.arrayBuffer()}else if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)"IMG"===e.tagName&&(o=await r(e.src)),"VIDEO"===e.tagName&&(o=await r(e.poster)),"CANVAS"===e.tagName&&await new Promise((r=>{e.toBlob((async e=>{o=await t(e),r()}))}));else if("undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas){const r=await e.convertToBlob();o=await t(r)}else(e instanceof File||e instanceof Blob)&&(o=await t(e));return new Uint8Array(o)};e.exports=r},9262:e=>{e.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}},16452:e=>{e.exports=async(e,t)=>{e.postMessage(t)}},28519:e=>{e.exports=({workerPath:e,workerBlobURL:t})=>{let r;if(Blob&&URL&&t){const t=new Blob([`importScripts("${e}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(t))}else r=new Worker(e);return r}},26232:e=>{e.exports=e=>{e.terminate()}},13506:e=>{"use strict";e.exports=JSON.parse('{"name":"tesseract.js","version":"5.0.2","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0","acorn":"^8.8.2","babel-loader":"^9.1.2","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1","express":"^4.18.2","mocha":"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^5.0.0","rollup":"^3.20.7","wait-on":"^7.0.1","webpack":"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},"dependencies":{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.0.0","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"overrides":{"@rollup/pluginutils":"^5.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}')}}]);