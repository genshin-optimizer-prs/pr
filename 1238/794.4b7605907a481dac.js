(self.webpackChunk=self.webpackChunk||[]).push([[794],{67651:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(29798),n=r(52322);const a=(0,o.Z)([(0,n.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,n.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera")},85219:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(29798),n=r(52322);const a=(0,o.Z)((0,n.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update")},72841:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var o=r(66730),n=r(16862),a=r(2784),i=r(6277),s=r(69075),c=r(28165),l=r(7342),u=r(43853),p=r(65992),d=r(69222),h=r(15672);function f(e){return(0,h.Z)("MuiCircularProgress",e)}(0,d.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=r(52322);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let y,w,b,v,_=e=>e;const L=44,E=(0,c.F4)(y||(y=_`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,c.F4)(w||(w=_`
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
`)),S=(0,p.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,l.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(b||(b=_`
      animation: ${0} 1.4s linear infinite;
    `),E))),R=(0,p.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),T=(0,p.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,l.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(v||(v=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k))),N=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:p=!1,size:d=40,style:h,thickness:y=3.6,value:w=0,variant:b="indeterminate"}=r,v=(0,o.Z)(r,m),_=(0,n.Z)({},r,{color:c,disableShrink:p,size:d,thickness:y,value:w,variant:b}),E=(e=>{const{classes:t,variant:r,color:o,disableShrink:n}=e,a={root:["root",r,`color${(0,l.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(r)}`,n&&"circleDisableShrink"]};return(0,s.Z)(a,f,t)})(_),k={},N={},x={};if("determinate"===b){const e=2*Math.PI*((L-y)/2);k.strokeDasharray=e.toFixed(3),x["aria-valuenow"]=Math.round(w),k.strokeDashoffset=`${((100-w)/100*e).toFixed(3)}px`,N.transform="rotate(-90deg)"}return(0,g.jsx)(S,(0,n.Z)({className:(0,i.Z)(E.root,a),style:(0,n.Z)({width:d,height:d},N,h),ownerState:_,ref:t,role:"progressbar"},x,v,{children:(0,g.jsx)(R,{className:E.svg,ownerState:_,viewBox:"22 22 44 44",children:(0,g.jsx)(T,{className:E.circle,style:k,ownerState:_,cx:L,cy:L,r:(L-y)/2,fill:"none",strokeWidth:y})})}))}))},72751:e=>{e.exports=function(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||(!("undefined"==typeof process||"object"!=typeof process.versions||!process.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}},25047:e=>{var t=function(e){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),s=new x(o||[]);return n(i,"_invoke",{value:S(e,r,s)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",h="executing",f="completed",g={};function m(){}function y(){}function w(){}var b={};l(b,i,(function(){return this}));var v=Object.getPrototypeOf,_=v&&v(v(A([])));_&&_!==r&&o.call(_,i)&&(b=_);var L=w.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(n,a,i,s){var c=p(e[n],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var a;n(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return a=a?a.then(n,n):n()}})}function S(e,t,r){var o=d;return function(n,a){if(o===h)throw new Error("Generator is already running");if(o===f){if("throw"===n)throw a;return O()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=R(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var c=p(e,t,r);if("normal"===c.type){if(o=r.done?f:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=f,r.method="throw",r.arg=c.arg)}}}function R(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g;var a=p(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=w,n(L,"constructor",{value:w,configurable:!0}),n(w,"constructor",{value:y,configurable:!0}),y.displayName=l(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},E(k.prototype),l(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new k(u(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(L),l(L,c,"Generator"),l(L,i,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:A(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},43309:function(e,t,r){var o,n;o=function(){function e(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(t,r.firstChild);for(var o,n=document.createElement("a"),a=1;a<e;a++)n.href=arguments[a],o=n.href,t.href=o;return r.removeChild(t),o}return e},void 0===(n="function"==typeof o?o.call(t,r,t,e):o)||(e.exports=n)},8614:(e,t,r)=>{const o=r(71521);e.exports={recognize:async(e,t,r)=>{const n=await o(r);return await n.loadLanguage(t),await n.initialize(t),n.recognize(e).finally((async()=>{await n.terminate()}))},detect:async(e,t)=>{const r=await o(t);return await r.loadLanguage("osd"),await r.initialize("osd"),r.detect(e).finally((async()=>{await r.terminate()}))}}},54854:e=>{e.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},48819:e=>{e.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},21003:(e,t,r)=>{const o=r(54854);e.exports={defaultOEM:o.DEFAULT}},9831:e=>{e.exports={langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:()=>{}}},73186:e=>{e.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},62809:(e,t,r)=>{const o=r(7486);let n=0;e.exports=({id:e,action:t,payload:r={}})=>{let a=e;return void 0===a&&(a=o("Job",n),n+=1),{id:a,action:t,payload:r}}},77879:function(e,t,r){const o=r(62809),{log:n}=r(71616),a=r(7486);let i=0;e.exports=()=>{const e=a("Scheduler",i),t={},r={};let s=[];i+=1;const c=()=>Object.keys(t).length,l=()=>{if(0!==s.length){const e=Object.keys(t);for(let o=0;o<e.length;o+=1)if(void 0===r[e[o]]){s[0](t[e[o]]);break}}},u=(t,a)=>new Promise(((i,c)=>{const u=o({action:t,payload:a});s.push((async e=>{s.shift(),r[e.id]=u;try{i(await e[t].apply(this,[...a,u.id]))}catch(e){c(e)}finally{delete r[e.id],l()}})),n(`[${e}]: Add ${u.id} to JobQueue`),n(`[${e}]: JobQueue length=${s.length}`),l()}));return{addWorker:r=>(t[r.id]=r,n(`[${e}]: Add ${r.id}`),n(`[${e}]: Number of workers=${c()}`),l(),r.id),addJob:async(t,...r)=>{if(0===c())throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return u(t,r)},terminate:async()=>{Object.keys(t).forEach((async e=>{await t[e].terminate()})),s=[]},getQueueLen:()=>s.length,getNumWorkers:c}}},71521:(e,t,r)=>{const o=r(7105),n=r(11540),a=r(62809),{log:i}=r(71616),s=r(7486),{defaultOEM:c}=r(21003),{defaultOptions:l,spawnWorker:u,terminateWorker:p,onMessage:d,loadImage:h,send:f}=r(38409);let g=0;e.exports=async(e={})=>{const t=s("Worker",g),{logger:r,errorHandler:m,...y}=o({...l,...e}),w={},b={};let v,_;const L=new Promise(((e,t)=>{_=e,v=t}));let E=u(y);E.onerror=e=>{v(e.message)},g+=1;const k=(e,t)=>{w[e]=t},S=(e,t)=>{b[e]=t},R=({id:e,action:r,payload:o})=>new Promise(((n,a)=>{i(`[${t}]: Start ${e}, action=${r}`),k(r,n),S(r,a),f(E,{workerId:t,jobId:e,action:r,payload:o})}));d(E,(({workerId:e,jobId:t,status:o,action:a,data:s})=>{if("resolve"===o){i(`[${e}]: Complete ${t}`);let r=s;"recognize"===a?r=n(s):"getPDF"===a&&(r=Array.from({...s,length:Object.keys(s).length})),w[a]({jobId:t,data:r})}else if("reject"===o){if(b[a](s),"load"===a&&v(s),!m)throw Error(s);m(s)}else"progress"===o&&r({...s,userJobId:t})}));const T={id:t,worker:E,setResolve:k,setReject:S,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(e,t,r)=>R(a({id:r,action:"FS",payload:{method:"writeFile",args:[e,t]}})),readText:(e,t)=>R(a({id:t,action:"FS",payload:{method:"readFile",args:[e,{encoding:"utf8"}]}})),removeFile:(e,t)=>R(a({id:t,action:"FS",payload:{method:"unlink",args:[e]}})),FS:(e,t,r)=>R(a({id:r,action:"FS",payload:{method:e,args:t}})),loadLanguage:(e="eng",t)=>R(a({id:t,action:"loadLanguage",payload:{langs:e,options:y}})),initialize:(e="eng",t=c,r,o)=>R(a({id:o,action:"initialize",payload:{langs:e,oem:t,config:r}})),setParameters:(e={},t)=>R(a({id:t,action:"setParameters",payload:{params:e}})),recognize:async(e,t={},r={blocks:!0,text:!0,hocr:!0,tsv:!0},o)=>R(a({id:o,action:"recognize",payload:{image:await h(e),options:t,output:r}})),getPDF:(e="Tesseract OCR Result",t=!1,r)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),R(a({id:r,action:"getPDF",payload:{title:e,textonly:t}}))),detect:async(e,t)=>R(a({id:t,action:"detect",payload:{image:await h(e)}})),terminate:async()=>(null!==E&&(p(E),E=null),Promise.resolve())};var N;return R(a({id:N,action:"load",payload:{options:y}})).then((()=>_(T))).catch((()=>{})),L}},24370:(e,t,r)=>{r(25047);const o=r(77879),n=r(71521),a=r(8614),i=r(73186),s=r(54854),c=r(48819),{setLogging:l}=r(71616);e.exports={languages:i,OEM:s,PSM:c,createScheduler:o,createWorker:n,setLogging:l,...a}},11540:e=>{e.exports=e=>{const t=[],r=[],o=[],n=[],a=[];return e.blocks&&e.blocks.forEach((i=>{i.paragraphs.forEach((t=>{t.lines.forEach((r=>{r.words.forEach((o=>{o.symbols.forEach((n=>{a.push({...n,page:e,block:i,paragraph:t,line:r,word:o})})),n.push({...o,page:e,block:i,paragraph:t,line:r})})),o.push({...r,page:e,block:i,paragraph:t})})),r.push({...t,page:e,block:i})})),t.push({...i,page:e})})),{...e,blocks:t,paragraphs:r,lines:o,words:n,symbols:a}}},21532:(e,t,r)=>{const o=r(72751);e.exports=e=>{const t={};return"undefined"!=typeof WorkerGlobalScope?t.type="webworker":o()?t.type="electron":"object"==typeof window?t.type="browser":"object"==typeof process&&(t.type="node"),void 0===e?t:t[e]}},7486:e=>{e.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`},71616:function(e,t){let r=!1;t.logging=r,t.setLogging=e=>{r=e},t.log=(...e)=>r?console.log.apply(this,e):null},7105:(e,t,r)=>{const o="browser"===r(21532)("type")?r(43309):e=>e;e.exports=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach((r=>{e[r]&&(t[r]=o(t[r]))})),t}},26708:(e,t,r)=>{const o=r(43309),{version:n}=r(13506),a=r(9831);e.exports={...a,workerPath:"undefined"!=typeof process&&"development"==={NX_URL_DISCORD_GO:"https://discord.gg/CXUbQXyfUs",NX_URL_DISCORD_GDEV:"https://discord.gg/8Hpz2F7AnR",NX_URL_PATREON_FRZYC:"https://www.patreon.com/frzyc",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",NX_URL_GITHUB_GO:"https://github.com/frzyc/genshin-optimizer",NX_URL_GITHUB_FRZYC:"https://github.com/frzyc",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/frzyc",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_GITHUB_LANTUA:"https://github.com/lantua",NX_URL_GITHUB_VAN:"https://github.com/nguyentvan7",NX_GA_TRACKINGID:"G-87P9DY18TB",NX_URL_YOUTUBE_TUTPL:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_KQM_MULTI_GUIDE:"https://docs.google.com/document/d/12hrPJ3MrAF7t03gyiiVtV5uI_rUKlVlbEwl9Lf2esIQ/edit?usp=sharing",NX_URLS_GUIDES:'["HGti4mHrmYE","hiRjngMgHfQ","uuV89Dx3Rdc","v7VmQ7jxVO0","B-DZGcEfpiY","j6Y1dZwb1sY"]',NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos/frzyc/genshin-optimizer/releases/tags/",NX_URL_GITHUB_GO_CURRENT_VERSION:"https://github.com/frzyc/genshin-optimizer/commit/cba14ce2fa070020b4049478bdb7b3799ce1c84f",NX_URL_YOUTUBE_FRZYC:"https://www.youtube.com/user/Frzyc",NX_DAEMON:"false",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/genshin-optimizer/genshin-optimizer",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/genshin-optimizer/genshin-optimizer/node_modules/.cache/nx/terminalOutputs/16183971379476111121",NX_STREAM_OUTPUT:"true",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build-webpack",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"16183971379476111121"}.TESS_ENV?o(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`):`https://unpkg.com/tesseract.js@v${n}/dist/worker.min.js`,corePath:null}},38409:(e,t,r)=>{const o=r(26708),n=r(28519),a=r(26232),i=r(9262),s=r(16452),c=r(64839);e.exports={defaultOptions:o,spawnWorker:n,terminateWorker:a,onMessage:i,send:s,loadImage:c}},64839:(e,t,r)=>{const o=r(43309),n=e=>new Promise(((t,r)=>{const o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=({target:{error:{code:e}}})=>{r(Error(`File could not be read! Code=${e}`))},o.readAsArrayBuffer(e)})),a=async e=>{let t=e;if(void 0===e)return"undefined";if("string"==typeof e)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))t=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const r=await fetch(o(e));t=await r.arrayBuffer()}else e instanceof HTMLElement?("IMG"===e.tagName&&(t=await a(e.src)),"VIDEO"===e.tagName&&(t=await a(e.poster)),"CANVAS"===e.tagName&&await new Promise((r=>{e.toBlob((async e=>{t=await n(e),r()}))}))):(e instanceof File||e instanceof Blob)&&(t=await n(e));return new Uint8Array(t)};e.exports=a},9262:e=>{e.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}},16452:e=>{e.exports=async(e,t)=>{e.postMessage(t)}},28519:e=>{e.exports=({workerPath:e,workerBlobURL:t})=>{let r;if(Blob&&URL&&t){const t=new Blob([`importScripts("${e}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(t))}else r=new Worker(e);return r}},26232:e=>{e.exports=e=>{e.terminate()}},13506:e=>{"use strict";e.exports=JSON.parse('{"name":"tesseract.js","version":"4.0.2","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.18.7","@babel/preset-env":"^7.18.7","@rollup/plugin-commonjs":"^22.0.2","acorn":"^6.4.0","babel-loader":"^8.2.0","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.2.0","eslint-config-airbnb-base":"^14.2.0","eslint-plugin-import":"^2.22.1","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^10.0.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^2.7.1","rollup":"^2.79.0","wait-on":"^3.3.0","webpack":"^5.74.0","webpack-bundle-analyzer":"^4.6.0","webpack-cli":"^4.10.0","webpack-dev-middleware":"^5.3.3"},"dependencies":{"babel-eslint":"^10.1.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^4.0.2","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}')}}]);