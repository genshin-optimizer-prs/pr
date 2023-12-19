"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[327],{65304:(t,e,n)=>{n.r(e),n.d(e,{default:()=>$e});var r=n(98283),i=n(31981),a=n(12761);function l(t,e=10){return o(t,e)}function s(t,e=10){return o(t,-e)}function o(t,e=10){const{r:n,g:r,b:i,a:l}=t;return{r:(0,a.re)(n+e,0,255),g:(0,a.re)(r+e,0,255),b:(0,a.re)(i+e,0,255),a:l}}function c(t,e,n){return(0,a.uh)(t.r,e.r,n.r)&&(0,a.uh)(t.g,e.g,n.g)&&(0,a.uh)(t.b,e.b,n.b)}function d(t,e,n,r,i){return t.getContext("2d",{willReadFrequently:!0}).getImageData(e,n,r,i)}function u(t,e,n){return e===n?(console.warn(`trying to crop with y1:${e} y2:${n}. Crop aborted.`),d(t,0,0,t.width,t.height)):d(t,0,e,t.width,n-e)}const h=t=>new Promise((e=>{const n=new Image;n.onload=({target:t})=>e(function(t){const e=document.createElement("canvas"),n=e.getContext("2d",{willReadFrequently:!0});return e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)}(t)),n.src=t}));function f(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e}function Z(t,e,n,r=!0){const i=t.width,a=t.height,l=t.getContext("2d");return l.fillStyle=`rgba(${n.r},${n.g},${n.b},${n.a?n.a/255:1})`,r?l.fillRect(e,0,1,a):l.fillRect(0,e,i,1),t}function g(t,e,n,r=!0){const i=t.getContext("2d");return i?(i.fillStyle=`rgba(${n.r},${n.g},${n.b},${n.a?n.a/255:1})`,e.forEach(((t,e)=>r?i.fillRect(e,0,1,t):i.fillRect(0,e,t,1))),t):t}function m(t,e,n,r="color"){const i=Uint8ClampedArray.from(t.data),a="bw"===r,l="invert"===r;for(let s=0;s<i.length;s+=4){const t=i[s],r=i[s+1],o=i[s+2];c({r:t,g:r,b:o},e,n)?a?i[s]=i[s+1]=i[s+2]=0:l&&(i[s]=255-t,i[s+1]=255-r,i[s+2]=255-o):i[s]=i[s+1]=i[s+2]=255}return new ImageData(i,t.width,t.height)}function y(t,e,n,r=!0){const i=t.height,a=t.width,l=t.data;return Array.from({length:r?a:i},((t,s)=>{let o=0;for(let d=0;d<(r?i:a);d++){const t=r?b(s,d,a):b(d,s,a),[i,u,h]=[l[t],l[t+1],l[t+2]];c({r:i,g:u,b:h},e,n)&&o++}return o}))}function p(t,e,n,r=!0,i=[0,1]){const l=t.height,s=t.width,o=t.data,c=r?s:l,[d,u]=i,h=c*d,f=c*u;return Array.from({length:c},((t,i)=>{if(i<h||i>f)return 0;let c=0,d=0;for(let u=0;u<(r?l:s);u++){const t=r?b(i,u,s):b(u,i,s),[l,h,f]=[o[t],o[t+1],o[t+2]];(0,a.uh)(l,e.r,n.r)&&(0,a.uh)(h,e.g,n.g)&&(0,a.uh)(f,e.b,n.b)?d++:(d>c&&(c=d),d=0)}return d>c&&(c=d),c}))}function b(t,e,n){return e*(4*n)+4*t}function v(t,e=.7,n=3){const r=Math.max(...t)*e,i=t.length;let a=-n;for(let s=0;s<i;s++){const e=t[s]>r;if(e){if(e&&a<0)a=s;else if(e&&s-a>n)break}else a=-n}a<0&&(a=0);let l=i-1+n;for(let s=i-1;s>=0;s--){const e=t[s]>r;if(e){if(e&&l>i-1)l=s;else if(e&&l-s>n)break}else l=i-1+n}return l>i-1&&(l=i-1),[a,l]}const w={r:145,g:81,b:40},x={r:188,g:104,b:50},S={r:121,g:67,b:167},k={r:160,g:86,b:224},C={r:62,g:96,b:149},K={r:81,g:127,b:204},B={r:235,g:228,b:216},P={r:255,g:231,b:186},X={r:93,g:178,b:87},E={r:255,g:137,b:117},R={r:255,g:204,b:50},D={r:131,g:131,b:130},A={r:74,g:81,b:102};var I=n(72718),G=n(52538),L=n(74155),F=n(20417);const $={hp:"HP",hp_:"HP",atk:"ATK",atk_:"ATK",def:"DEF",def_:"DEF",eleMas:"Elemental Mastery",enerRech_:"Energy Recharge",critRate_:"Crit Rate",critDMG_:"Crit DMG",heal_:"Healing Bonus"};Object.entries({physical:"Physical",anemo:"Anemo",geo:"Geo",electro:"Electro",hydro:"Hydro",pyro:"Pyro",cryo:"Cryo",dendro:"Dendro"}).forEach((([t,e])=>{$[`${t}_dmg_`]=`${e} DMG Bonus`}));const U={flower:"Flower of Life",plume:"Plume of Death",sands:"Sands of Eon",goblet:"Goblet of Eonothem",circlet:"Circlet of Logos"};var O=n(52903);function N(t,e,n,r,l,s,o,c=!1){const d={lock:b(c,"Lock",(t=>t?"Locked":"Unlocked"))};o&&(d.location=b(o,"Location",(t=>t)));const u=e.size?[...e]:["EmblemOfSeveredFate"];let h=-1,f=[{setKey:"EmblemOfSeveredFate",rarity:5,level:0,slotKey:"flower",mainStatKey:"hp",substats:[],location:null!=o?o:"",lock:c}];const Z=(0,a.K8)(i.$W,(n=>{let i=0;if(e.size){i+=[...e].reduce(((t,e)=>t+(I.G2.art.data[e].rarities.includes(n)?1:0)),0)/e.size}if(t.has(n)&&i++,r.length){i+=r.reduce(((t,e)=>t+((0,L.UW)(e.key,e.value,n).length?1:0)),0)/r.length*2}return i}));for(const k of i.Ex)for(const t of i.yh[k]){const r=(0,a.bf)(t),i="%"===r?1:0,d="%"===r?.1:1,g=(n.has(k)?1:0)+(l.has(t)?1:0),m=s.filter((e=>"%"!==e.unit||"%"===(0,a.bf)(t))).map((t=>t.mainStatValue));for(const[n,a]of Object.entries(Z)){const r=parseInt(n),l=u.filter((t=>I.G2.art.data[t].rarities.includes(r))),s=g+a;if(!(s+2<h)){for(const n of m){const a=(0,L.HD)(r,t),u=Math.max(0,a.findIndex((t=>t+d>=n))),Z=s+(a[u].toFixed(i)===n.toFixed(i)?1:0);for(const n of l){const i=Z+(e.has(n)?1:0);i>=h&&(i>h&&(f=[]),h=i,f.push({setKey:n,rarity:r,level:u,slotKey:k,mainStatKey:t,substats:[],location:null!=o?o:"",lock:c}))}}if(s>=h){const n=0;for(const i of l){const a=s+(e.has(i)?1:0);a>h&&(f=[]),h=a,f.push({setKey:i,rarity:r,level:n,slotKey:k,mainStatKey:t,substats:[],location:null!=o?o:"",lock:c})}}}}}const g={setKey:new Set,rarity:new Set,level:new Set,slotKey:new Set,mainStatKey:new Set,mainStatVal:new Set},m=f[0],y=(0,L.Bv)(m.mainStatKey,m.rarity,m.level);m.substats=r.filter(((t,e)=>t.key!==m.mainStatKey&&r.slice(0,e).every((e=>e.key!==t.key))));for(let i=m.substats.length;i<4;i++)m.substats.push({key:"",value:0});for(const i of f)g.setKey.add(i.setKey),g.rarity.add(i.rarity),g.level.add(i.level),g.slotKey.add(i.slotKey),g.mainStatKey.add(i.mainStatKey);function p(t,e,n){return(0,O.BX)(O.HY,{children:["Unknown ",e," : Set to"," ",(0,O.tZ)(F._w,{color:"error",children:n(t)})]})}function b(t,e,n){return(0,O.BX)(O.HY,{children:["Detected ",e," ",(0,O.tZ)(F._w,{color:"success",children:n(t)})]})}function v(t,e,n){return(0,O.BX)(O.HY,{children:["Inferred ",e," ",(0,O.tZ)(F._w,{color:"warning",children:n(t)})]})}function w(t,e,n,r){const i=new Set([...g[t]].filter((t=>e.has(t)))),a=m[t];i.size>1?d[t]=function(t,e,n,r){return(0,O.BX)(O.HY,{children:["Ambiguous ",n," ",(0,O.tZ)(F._w,{color:"error",children:r(t)})," : May also be"," ",e.filter((e=>e!==t)).map(((t,e)=>(0,O.BX)(O.HY,{children:[(0,O.tZ)("b",{children:e>0?"/":""}),(0,O.tZ)(F._w,{color:"warning",children:r(t)})]})))]})}(a,[...e],n,r):1===i.size?d[t]=b(a,n,r):g[t].size>1?d[t]=p(a,n,r):d[t]=v(a,n,r)}w("setKey",e,"Set",(t=>(0,O.tZ)(G.C3,{setKey:t}))),w("rarity",t,"Rarity",(t=>(0,O.BX)(O.HY,{children:[t," ",1!==t?"Stars":"Star"]}))),w("slotKey",n,"Slot",(t=>(0,O.tZ)(G.cN,{slotKey:t}))),w("mainStatKey",l,"Main Stat",(t=>(0,O.tZ)("span",{children:$[t]}))),d.substats=(0,O.tZ)(O.HY,{children:m.substats.filter((t=>""!==t.key)).map(((t,e)=>(0,O.tZ)("div",{children:b(t,"Sub Stat",(t=>(0,O.BX)(O.HY,{children:[$[t.key],"+",(0,L.Jj)(t.value,(0,a.bf)(t.key)),(0,a.bf)(t.key)]})))},e)))});const x=t=>(0,O.BX)(O.HY,{children:[(0,L.Jj)(t,(0,a.bf)(m.mainStatKey)),(0,a.bf)(m.mainStatKey)]}),S="%"===(0,a.bf)(m.mainStatKey)?1:0;return s.find((t=>t.mainStatValue.toFixed(S)===y.toFixed(S)))?l.has(m.mainStatKey)?(d.level=b(m.level,"Level",(t=>"+"+t)),d.mainStatVal=b(y,"Main Stat value",x)):(d.level=v(m.level,"Level",(t=>"+"+t)),d.mainStatVal=v(y,"Main Stat value",x)):(d.level=p(m.level,"Level",(t=>"+"+t)),d.mainStatVal=p(y,"Main Stat value",x)),[m,d]}function _(t){const e=Math.min(...t.map((([,t])=>t))),n=t.filter((([,t])=>t===e)).map((([t])=>t));return new Set(n)}async function M(t,e,n=!1){const{f:r,fName:o}=t,c=await(b=r,new Promise((t=>{const e=new FileReader;e.onloadend=({target:e})=>t(e.result),e.readAsDataURL(b)})));var b;const I=await h(c),G=n?{}:void 0,L=function(t,e){const n=p(t,s(B),l(B)),[r,i]=v(n),a=d(f(t),r,0,i-r,t.height);if(e){const a=f(t);g(a,n,{r:255,g:0,b:0,a:100}),Z(a,r,{r:0,g:255,b:0,a:150}),Z(a,i,{r:0,g:0,b:255,a:150}),e.fullAnalysis=a.toDataURL()}return a}(I,G),F=f(L),O=function(t){const e=t.width,n=.7*e;function r(e,r){const i=p(t,s(e,20),l(r,20),!1,[0,.3]);return i.find((t=>t>n))?i:null}return[[w,x],[S,k],[C,K]].reduce(((t,e)=>t||r(e[0],e[1])),null)}(L),[M,W]=O?v(O):[0,0],H=p(L,s(B),l(B),!1),[j,z]=v(H,.8,2),T=p(I,s(P),l(P),!1),V=T.some((t=>t>.5*L.width)),[Y,Q]=v(T),q=u(F,M,V?Q:z),J=V?u(F,Y,Q):void 0,tt=u(F,W,j);if(G){const t=f(L);O&&g(t,O,{r:0,g:150,b:150,a:100},!1),g(t,H,{r:150,g:0,b:0,a:100},!1),g(t,T,{r:0,g:0,b:100,a:100},!1),Z(t,M,{r:0,g:255,b:0,a:200},!1),Z(t,V?Q:z,{r:0,g:0,b:255,a:200},!1),Z(t,j,{r:255,g:0,b:200,a:200},!1),G.artifactCardAnalysis=t.toDataURL()}G&&(G.headerCropped=f(tt).toDataURL());const et=u(F,j,z),nt=y(et,s(X),l(X),!1),[rt,it]=v(nt,.2);if(G){const t=f(et);g(t,nt,{r:100,g:0,b:0,a:100},!1),Z(t,rt,{r:0,g:255,b:0,a:200},!1),Z(t,it,{r:0,g:0,b:255,a:200},!1),G.whiteCardAnalysis=t.toDataURL()}const at=it-rt,lt=u(f(et),rt-at,it+at),st=u(f(et),0,rt),ot=y(et,s(E),l(E)),ct=ot.filter((t=>t>5)).length>5;if(G){const t=f(st);g(t,ot,{r:0,g:100,b:0,a:100}),G.substatsCardCropped=t.toDataURL()}const dt=m(tt,{r:140,g:140,b:140},{r:255,g:255,b:255},"bw"),ut=m(lt,{r:30,g:100,b:30},{r:200,g:255,b:200},"bw"),ht=J&&m(J,s(A),l(D),"bw");G&&(G.bwHeader=f(dt).toDataURL(),G.bwGreenText=f(ut).toDataURL(),ht&&(G.bwEquipped=f(ht).toDataURL()));const[ft,Zt,gt,mt]=await Promise.all([e(dt,{rectangle:{top:0,left:0,width:Math.floor(.7*dt.width),height:dt.height}}),e(st),e(ut),ht&&e(ht)]),yt=function(t,e){const n=p(t,s(R),l(R),!1),[r,i]=v(n,.3),o=d(f(t),0,r,t.width,i-r),c=p(o,s(R),l(R));if(e){const t=f(o);g(t,c,{r:100,g:0,b:0,a:100}),e.rarity=t.toDataURL()}const u=.5*Math.max(...c);let h=0,Z=!1;for(let a=0;a<c.length;a++)c[a]>u?Z||(h++,Z=!0):Z&&(Z=!1);return(0,a.re)(h,1,5)}(tt,G),[pt,bt]=N(new Set([yt]),function(t){const e=[];for(const n of t)for(const t of i.Gt)e.push([t,(0,a.Ay)(n.replace(/\W/g,""),t)]);return _(e)}(gt),function(t){const e=[];for(const n of t)for(const t of i.Ex)e.push([t,(0,a.Ay)(n.replace(/\W/g,""),U[t].replace(/\W/g,""))]);return _(e)}(ft),function(t){const e=[];for(let n of t)n=n.replace(/^[\W]+/,"").replace(/\n/,""),i._m.forEach((t=>{const r=$[t],i=("%"===(0,a.bf)(t)?new RegExp(r+"\\s*\\+\\s*(\\d+[\\.|,]+\\d)%","im"):new RegExp(r+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(n);i&&e.push({key:t,value:parseFloat(i[1].replace(/,/g,".").replace(/\.{2,}/g,"."))})}));return e.slice(0,4)}(Zt),function(t){const e=[];for(const l of t)for(const t of i.rW){var n,r;const i=null==(n=$[t])?void 0:n.toLowerCase();i.length<=3?l.toLowerCase().includes(null!=i?i:"")&&e.push([t,0]):e.push([t,(0,a.Ay)(l.replace(/\W/g,""),(null!=(r=$[t])?r:"").replace(/\W/g,""))])}return _(e)}(ft),function(t){const e=[];for(const n of t){let t=/(\d+[,|\\.]+\d)%/,r=t.exec(n);r&&e.push({mainStatValue:parseFloat(r[1].replace(/,/g,".").replace(/\.{2,}/g,".")),unit:"%"}),t=/(\d+[,|\\.]\d{3}|\d{2,3})/,r=t.exec(n),r&&e.push({mainStatValue:parseInt(r[1].replace(/[,|\\.]+/g,""))})}return e}(ft),mt?function(t){const e=[];for(let r of t){if(!r)continue;const t=r.indexOf(":");if(-1!==t&&(r=r.slice(t+1)),r)for(const n of i.vp)e.push([n,(0,a.Ay)(r.replace(/\W/g,""),n)])}e.push(["Traveler",8]);const[n]=_(e);return n}(mt):"",ct);return{fileName:o,imageURL:f(q).toDataURL(),artifact:pt,texts:bt,debugImgs:G}}class ScanningQueue{constructor(t,e=!1){this.debug=void 0,this.textsFromImage=void 0,this.processed=[],this.outstanding=[],this.scanning=[],this.callback=()=>{},this.textsFromImage=t,this.debug=e}addFiles(t){this.outstanding.push(...t),this.processQueue()}processQueue(){const t=Math.min(16-this.processed.length-this.scanning.length,3-this.scanning.length,this.outstanding.length);t&&this.outstanding.splice(0,t).map((t=>{const e=M(t,this.textsFromImage,this.debug);this.scanning.push(e),e.then((t=>{const n=this.scanning.indexOf(e);-1!==n&&(this.scanning.splice(n,1),this.processed.push(t),this.processQueue())}))})),this.callCB()}callCB(){this.callback({processedNum:this.processed.length,outstandingNum:this.outstanding.length,scanningNum:this.scanning.length})}shiftProcessed(){const t=this.processed.shift();return t&&this.processQueue(),t}clearQueue(){this.processed=[],this.outstanding=[],this.scanning=[],this.callCB()}}var W=n(37181),H=n(75927),j=n(93994),z=n(72550),T=n(67651),V=n(73673),Y=n(92252),Q=n(32510),q=n(85219),J=n(16549),tt=n(65992),et=n(47746),nt=n(86432),rt=n(42523),it=n(7671),at=n(41075),lt=n(67550),st=n(80551),ot=n(83249),ct=n(79906),dt=n(62197),ut=n(94380),ht=n(38162),ft=n(72841),Zt=n(107),gt=n(33927),mt=n(2784),yt=n(11141),pt=n(23485),bt=n(36674);let vt,wt=t=>t;const xt=["rarity","onChange","filter"];function St(t){let{rarity:e,onChange:n,filter:i}=t,a=(0,r.Z)(t,xt);const{t:l}=(0,yt.$G)("artifact");return(0,O.tZ)(pt.Z,Object.assign({},a,{title:e?(0,O.tZ)(bt.q,{stars:e,inline:!0}):l(vt||(vt=wt`editor.rarity`)),color:e?"success":"primary",children:[5,4,3].map((t=>(0,O.tZ)(ut.Z,{disabled:!i(t),onClick:()=>n(t),children:(0,O.tZ)(bt.q,{stars:t,inline:!0})},t)))}))}var kt=n(47712),Ct=n(83993),Kt=n(82056),Bt=n(56961),Pt=n(79199);let Xt,Et=t=>t;const Rt=["slotKey","onChange","hasUnselect"];function Dt(t){let{slotKey:e="",onChange:n,hasUnselect:a=!1}=t,l=(0,r.Z)(t,Rt);const{t:s}=(0,yt.$G)(["artifact","ui"]);return(0,O.BX)(pt.Z,Object.assign({title:s(e?`artifact:slotName:${e}`:"artifact:slot"),color:e?"success":"primary",startIcon:e?(0,O.tZ)(Pt.Z,{slotKey:e}):void 0},l,{children:[a&&(0,O.BX)(ut.Z,{selected:""===e,disabled:""===e,onClick:()=>n(""),children:[(0,O.tZ)(Ct.Z,{children:(0,O.tZ)(Q.Z,{})}),(0,O.tZ)(Kt.Z,{children:s(Xt||(Xt=Et`ui:unselect`))})]}),a&&(0,O.tZ)(Bt.Z,{}),i.Ex.map((t=>(0,O.BX)(ut.Z,{selected:e===t,disabled:e===t,onClick:()=>n(t),children:[(0,O.tZ)(Ct.Z,{children:(0,O.tZ)(Pt.Z,{slotKey:t})}),(0,O.tZ)(Kt.Z,{children:s(`artifact:slotName:${t}`)})]},t)))]}))}var At=n(6480),It=n(23690),Gt=n(13780);const Lt=["value","onChange","disabled","float"];function Ft(t){let{value:e,onChange:n,disabled:i=!1,float:a=!1}=t,l=(0,r.Z)(t,Lt);const[s,o]=(0,mt.useState)(""),c=(0,mt.useCallback)((()=>{if(""===s)return n(0);const t=a?parseFloat:parseInt;n(t(s))}),[n,s,a]);return(0,mt.useEffect)((()=>{var t;return o(null!=(t=null==e?void 0:e.toString())?t:"")}),[e,o]),(0,O.tZ)(Gt.Z,Object.assign({value:s,"aria-label":"custom-input",type:"number",onChange:t=>o(t.target.value),onBlur:c,disabled:i,onKeyDown:t=>"Enter"===t.key&&c()},l))}var $t=n(79410),Ut=n(69698),Ot=n(48289),Nt=n(69614),_t=n(80639),Mt=n(34156),Wt=n(39099),Ht=n(30706),jt=n(87833),zt=n(12702),Tt=n(96580);function Vt({efficiency:t,max:e=!1,t:n,valid:r}){const i=e?"maxSubEff":"curSubEff";return(0,O.tZ)(jt.Z,{sx:{py:1,px:2},children:(0,O.BX)(at.ZP,{container:!0,spacing:1,children:[(0,O.tZ)(at.ZP,{item:!0,children:n(`editor.${i}`)}),(0,O.tZ)(at.ZP,{item:!0,flexGrow:1,children:(0,O.tZ)(zt.Z,{title:(0,O.BX)("span",{children:[(0,O.tZ)(dt.Z,{variant:"h6",children:n(`editor.${i}`)}),(0,O.tZ)(dt.Z,{children:(0,O.tZ)(yt.cC,{t:n,i18nKey:`editor.${i}Desc`})})]})})}),(0,O.tZ)(at.ZP,{item:!0,xs:"auto",children:(0,O.tZ)(Tt.Z,{valid:r,max:900,value:r?t:"ERR"})})]})})}var Yt=n(36081),Qt=n(89977),qt=n(12366),Jt=n(13900),te=n(25576);let ee,ne,re,ie,ae,le,se,oe=t=>t;function ce({index:t,artifact:e,setSubstat:n}){var r;const{t:l}=(0,yt.$G)("artifact"),{mainStatKey:s="",rarity:o=5}=null!=e?e:{},{key:c="",value:d=0,rolls:u=[],efficiency:h=0}=null!=(r=null==e?void 0:e.substats[t])?r:{},f=u.reduce(((t,e)=>t+e),0),Z=te.ZP.unit(c),g=u.length;let m="",y=[],p=0;if(e){const t=e.rarity,{numUpgrades:n,high:r}=i.i0[t];p=n+r-3-g,y=c?(0,L.ME)(c,t):[]}const b=7-y.length;!g&&c&&d&&(m=m||l(ee||(ee=oe`editor.substat.error.noCalc`))),p<0&&(m=m||l("editor.substat.error.noOverRoll",{value:p+g}));const v=(0,mt.useMemo)((()=>c?[{value:0},...(0,L.K_)(o,c).map((t=>({value:t})))]:[{value:0}]),[c,o]);return(0,O.BX)(jt.Z,{children:[(0,O.tZ)(lt.Z,{sx:{display:"flex"},children:(0,O.BX)(st.Z,{size:"small",sx:{width:"100%",display:"flex"},children:[(0,O.BX)(pt.Z,{startIcon:c?(0,O.tZ)(Wt.C,{statKey:c}):void 0,title:c?(0,O.tZ)(At.w0,{statKey:c}):l("editor.substat.substatFormat",{value:t+1}),disabled:!e,color:c?"success":"primary",sx:{whiteSpace:"nowrap"},children:[c&&(0,O.tZ)(ut.Z,{onClick:()=>n(t,{key:"",value:0}),children:l(ne||(ne=oe`editor.substat.noSubstat`))}),i._m.filter((t=>s!==t)).map((e=>(0,O.BX)(ut.Z,{selected:c===e,disabled:c===e,onClick:()=>n(t,{key:e,value:0}),children:[(0,O.tZ)(Ct.Z,{children:(0,O.tZ)(Wt.C,{statKey:e})}),(0,O.tZ)(Kt.Z,{children:(0,O.tZ)(At.w0,{statKey:e})})]},e)))]}),(0,O.tZ)(Qt.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,O.tZ)(Qt.ZP,{float:"%"===Z,placeholder:l(re||(re=oe`editor.substat.selectSub`)),value:c?d:void 0,onChange:e=>n(t,{key:c,value:null!=e?e:0}),disabled:!c,error:!!m,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!y.length&&(0,O.tZ)(Jt.Z,{children:l(ie||(ie=oe`editor.substat.nextRolls`))}),y.map(((e,r)=>{var i,l;let s=(0,L.Jj)(f+e,Z);return s=null!=(i=null==(l=I.G2.art.subRollCorrection[o])||null==(l=l[c])?void 0:l[s])?i:s,(0,O.tZ)(ot.Z,{color:`roll${(0,a.re)(b+r,1,6)}`,disabled:d&&!g||p<=0,onClick:()=>n(t,{key:c,value:parseFloat(s)}),children:s},r)}))]})}),(0,O.tZ)(lt.Z,{px:2,children:(0,O.tZ)(de,{value:d,marks:v,setValue:e=>{var r;return n(t,{key:c,value:null!=(r=e)?r:0})},disabled:!c})}),(0,O.tZ)(lt.Z,{sx:{px:1,pb:1},children:m?(0,O.tZ)(qt.Z,{color:"error",children:l(ae||(ae=oe`ui:error`))}):(0,O.BX)(at.ZP,{container:!0,children:[(0,O.tZ)(at.ZP,{item:!0,children:(0,O.tZ)(qt.Z,{color:0===g?"secondary":`roll${(0,a.re)(g,1,6)}`,children:g?l("editor.substat.RollCount",{count:g}):l(le||(le=oe`editor.substat.noRoll`))})}),(0,O.tZ)(at.ZP,{item:!0,flexGrow:1,children:!!u.length&&[...u].sort().map(((t,e)=>(0,O.tZ)(dt.Z,{component:"span",color:`roll${(0,a.re)(b+y.indexOf(t),1,6)}.main`,sx:{ml:1},children:(0,L.Jj)(t,Z)},`${e}.${t}`)))}),(0,O.tZ)(at.ZP,{item:!0,xs:"auto",flexShrink:1,children:(0,O.tZ)(dt.Z,{children:(0,O.BX)(yt.cC,{t:l,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",(0,O.tZ)(Tt.Z,{valid:!0,max:100*g,value:h||l(se||(se=oe`editor.substat.noStat`))})]})})})]})})]})}function de({value:t,setValue:e,marks:n,disabled:r=!1}){var i,a;const[l,s]=(0,mt.useState)(t);return(0,mt.useEffect)((()=>s(t)),[t]),(0,O.tZ)(Yt.ZP,{value:l,step:null,disabled:r,marks:n,min:0,max:null!=(i=null==(a=n[n.length-1])?void 0:a.value)?i:0,onChange:(t,e)=>s(e),onChangeCommitted:(t,n)=>e(n),valueLabelDisplay:"auto"})}var ue=n(24264);const he=n.p+"scanned.7fcdf3986bbc6101.png",fe=n.p+"fullscreen.093bacd265118df9.png";function Ze({modalShow:t,hide:e}){return(0,O.tZ)(Ut.Z,{open:t,onClose:e,children:(0,O.BX)(ue.Z,{children:[(0,O.tZ)(it.Z,{sx:{py:1},children:(0,O.BX)(at.ZP,{container:!0,children:[(0,O.tZ)(at.ZP,{item:!0,flexGrow:1,children:(0,O.tZ)(dt.Z,{variant:"subtitle1",children:"How to Upload Screenshots for parsing"})}),(0,O.tZ)(at.ZP,{item:!0,children:(0,O.tZ)(It.Z,{onClick:e})})]})}),(0,O.tZ)(Bt.Z,{}),(0,O.BX)(it.Z,{children:[(0,O.BX)(Zt.Z,{variant:"outlined",severity:"warning",children:["NOTE: Artifact Scanning currently only works for"," ",(0,O.tZ)("strong",{children:"ENGLISH"})," artifacts."]}),(0,O.BX)(at.ZP,{container:!0,spacing:1,mt:1,children:[(0,O.tZ)(at.ZP,{item:!0,xs:8,md:6,children:(0,O.tZ)(lt.Z,{component:"img",alt:"snippet of the screen to take",src:fe,width:"100%",height:"auto"})}),(0,O.BX)(at.ZP,{item:!0,xs:12,md:6,children:[(0,O.tZ)(dt.Z,{gutterBottom:!0,children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),(0,O.tZ)(dt.Z,{variant:"h5",children:"Where to snip the screenshot."}),(0,O.BX)(dt.Z,{gutterBottom:!0,children:["In game, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer."," ",(0,O.tZ)("b",{children:"Only artifact from this screen can be scanned."})]}),(0,O.tZ)(dt.Z,{variant:"h6",children:"Single artifact"}),(0,O.BX)(dt.Z,{gutterBottom:!0,children:["To take a screenshot, in Windows, the shortcut is"," ",(0,O.tZ)("strong",{children:"Alt + Print Screen"}),". Once you selected the region, the image is automatically included in your clipboard."]}),(0,O.tZ)(dt.Z,{variant:"h6",children:"Multiple artifacts"}),(0,O.BX)(dt.Z,{gutterBottom:!0,children:["To take advantage of batch uploads, you can use a tool like"," ",(0,O.tZ)("a",{href:"https://picpick.app/",target:"_blank",rel:"noreferrer",children:"PicPick"})," ","to create a macro to easily to screenshot multiple artifacts at once."]}),(0,O.tZ)(dt.Z,{variant:"h5",children:"What to include in the screenshot."}),(0,O.tZ)(dt.Z,{children:"The full genshin window, or at least a region that covers the artifact card."})]}),(0,O.BX)(at.ZP,{item:!0,xs:12,md:7,children:[(0,O.tZ)(dt.Z,{variant:"h5",children:"Adding Screenshot to Genshin Optimizer"}),(0,O.tZ)(dt.Z,{children:"At this point, you should have the artifact screenshot either saved to your harddrive, or in your clipboard."}),(0,O.tZ)(dt.Z,{gutterBottom:!0,children:'You can click on the box next to "Browse" to browse the files in your harddrive for multiple screenshots.'}),(0,O.BX)(dt.Z,{children:["For single screenshots from the snippets, just press"," ",(0,O.tZ)("strong",{children:"Ctrl + V"})," to paste from your clipboard."]}),(0,O.BX)(dt.Z,{gutterBottom:!0,children:["You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",(0,O.tZ)("b",{children:"Artifact Editor"}),"."]}),(0,O.tZ)(dt.Z,{variant:"h5",children:"Finishing the Artifact"}),(0,O.BX)(dt.Z,{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",(0,O.tZ)("strong",{children:"Add Artifact"})," to finish editing the artifact."]})]}),(0,O.tZ)(at.ZP,{item:!0,xs:8,md:5,children:(0,O.tZ)(lt.Z,{component:"img",alt:"main screen after importing stats",src:he,width:"100%",height:"auto"})})]})]}),(0,O.tZ)(Bt.Z,{}),(0,O.tZ)(it.Z,{sx:{py:1},children:(0,O.tZ)(It.Z,{large:!0,onClick:e})})]})})}var ge=n(24370);const me=new a.eQ((async t=>{const e=(0,ge.createScheduler)(),n=Array(2).fill(0).map((async n=>{const r=await(0,ge.createWorker)(t,void 0,{errorHandler:console.error,langPath:"./assets"});e.addWorker(r)}));return await Promise.any(n),e}),((t,e)=>{e.then((t=>t.terminate()))}));async function ye(t,e=void 0){const n=f(t);return(await me.borrow("genshin_fast_09_04_21",(async t=>await(await t).addJob("recognize",n,e)))).data.lines.map((t=>t.text))}var pe=n(50090),be=n(11845);const ve=["artifact"];let we,xe,Se,ke,Ce,Ke,Be,Pe,Xe,Ee,Re,De,Ae,Ie=t=>t;const Ge=new Set(i._m);function Le(t,e){const n=(()=>{switch(e.type){case"reset":return;case"substat":{const{index:n,substat:r}=e,i=r.key?t.substats.findIndex((t=>t.key===r.key)):-1;return-1===i||i===n?t.substats[n]=r:[t.substats[n],t.substats[i]]=[t.substats[i],t.substats[n]],Object.assign({},t)}case"overwrite":return e.artifact;case"update":return Object.assign({},t,e.artifact)}})();return n?(0,_t.BG)(n,!0):n}const Fe=(0,tt.ZP)("input")({display:"none"});function $e({artifactIdToEdit:t="",cancelEdit:e,allowUpload:n=!1,allowEmpty:l=!1,disableSet:s=!1,disableSlot:o=!1}){var c,d,u;const h=(0,mt.useRef)(new ScanningQueue(ye,!1)).current,{t:f}=(0,yt.$G)("artifact"),{database:Z}=(0,mt.useContext)(Mt.t),[g,m]=(0,mt.useState)(!1),[y,p]=(0,z.NW)();(0,mt.useEffect)((()=>Z.arts.followAny(p)),[Z,p]);const[b,v]=(0,mt.useReducer)(Le,void 0),[w,x]=(0,mt.useState)(!1),[{processedNum:S,outstandingNum:k,scanningNum:C},K]=(0,mt.useState)({processedNum:0,outstandingNum:0,scanningNum:0}),[B,P]=(0,mt.useState)(void 0),{fileName:X,imageURL:E,debugImgs:R,texts:D}=null!=B?B:{},A=S+k+C,I=!["new",""].includes(t)&&!(null==b||!b.location)||o,G=(0,mt.useCallback)((t=>{t&&(m(!0),h.addFiles(Array.from(t).map((t=>({f:t,fName:t.name})))))}),[m,h]),$=(0,mt.useCallback)((()=>{h.clearQueue()}),[h]),U=(0,mt.useCallback)((t=>{t.target&&(G(t.target.files),t.target.value="")}),[G]),{old:N,oldType:_}=(0,mt.useMemo)((()=>{var e;const n=y&&t&&Z.arts.get(t);if(n)return{old:n,oldType:"edit"};if(void 0===b)return{old:void 0,oldType:""};const{duplicated:r,upgraded:i}=y&&Z.arts.findDups(b);return{old:null!=(e=r[0])?e:i[0],oldType:0!==r.length?"duplicate":"upgrade"}}),[b,t,Z,y]),{artifact:M,errors:tt}=(0,mt.useMemo)((()=>{if(!b)return{artifact:void 0,errors:[]};return(0,_t.m1)(b,t)}),[b,t]),gt=b?(0,Ot.Sk)(b.setKey):void 0,bt=(0,mt.useCallback)((()=>{null==e||e(),v({type:"reset"}),P(void 0)}),[e,v]),vt=(0,mt.useCallback)((t=>{var e,n;const r=t.setKey?(0,Ot.Sk)(t.setKey):gt;function l(t,e,n){return t&&e.includes(t)?t:null!=n?n:e[0]}t.setKey&&(t.rarity=l(null==b?void 0:b.rarity,r.rarity,Math.max(...r.rarity)),t.slotKey=l(null==b?void 0:b.slotKey,r.slots)),t.rarity&&(t.level=null!=(e=null==b?void 0:b.level)?e:0),t.level&&(t.level=(0,a.re)(t.level,0,4*(null!=(n=t.rarity)?n:b.rarity))),t.slotKey&&(t.mainStatKey=l(null==b?void 0:b.mainStatKey,i.yh[t.slotKey])),t.mainStatKey&&(t.substats=[0,1,2,3].map((e=>b&&b.substats[e].key!==t.mainStatKey?b.substats[e]:{key:"",value:0}))),v({type:"update",artifact:t})}),[b,gt,v]),wt=(0,mt.useCallback)(((t,e)=>{v({type:"substat",index:t,substat:e})}),[v]),xt=!tt.length,{rarity:Ct=5,level:Kt=0,slotKey:Bt="flower"}=null!=b?b:{},{currentEfficiency:Pt=0,maxEfficiency:Xt=0}=M?Nt.Z.getArtifactEfficiency(M,Ge):{},Et=(0,mt.useCallback)((e=>{t||!A&&!b||window.confirm(f(xe||(xe=Ie`editor.clearPrompt`)))?(m(!1),h.clearQueue(),bt()):null==e||e.preventDefault()}),[f,t,h,b,A,m,bt]),Rt=(0,et.Z)(),Gt=(0,nt.Z)(Rt.breakpoints.up("md")),Lt=b?i.fR.find((t=>b.mainStatKey.includes(t))):void 0,jt=b?null!=Lt?Lt:"success":"primary",zt=(0,mt.useCallback)((t=>vt({setKey:t})),[vt]),Tt=(0,mt.useCallback)((t=>""===t||!(!I||"circlet"===Bt||"PrayersForDestiny"!==t&&"PrayersForIllumination"!==t&&"PrayersForWisdom"!==t&&"PrayersToSpringtime"!==t)),[I,Bt]);return(0,mt.useEffect)((()=>{"new"===t&&(m(!0),v({type:"reset"}));const e=t&&y&&Z.arts.get(t);e&&(m(!0),v({type:"overwrite",artifact:(0,a.I8)(e)}))}),[t,Z,y]),(0,mt.useEffect)((()=>{if(!S||B)return;const t=h.shiftProcessed();if(!t)return;const{artifact:e}=t,n=(0,r.Z)(t,ve);P(n),v({type:"overwrite",artifact:e})}),[h,S,B]),(0,mt.useEffect)((()=>{const t=t=>{var e;return G(null==(e=t.clipboardData)?void 0:e.files)};return n&&window.addEventListener("paste",t),()=>{n&&window.removeEventListener("paste",t)}}),[G,n]),(0,mt.useEffect)((()=>(h.callback=K,()=>{h.callback=()=>{}})),[h]),(0,O.tZ)(Ut.Z,{open:g,onClose:Et,children:(0,O.BX)(F.s8,{children:[(0,O.tZ)(Ze,{modalShow:w,hide:()=>x(!1)}),(0,O.tZ)(rt.Z,{title:(0,O.tZ)(yt.cC,{t:f,i18nKey:"editor.title",children:"Artifact Editor"}),action:(0,O.tZ)(It.Z,{disabled:!!A,onClick:Et})}),(0,O.BX)(it.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,O.BX)(at.ZP,{container:!0,spacing:1,columns:{xs:1,md:2},children:[(0,O.BX)(at.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[(0,O.BX)(lt.Z,{sx:{display:"flex",gap:1},children:[(0,O.tZ)(kt.Z,{disabled:s,size:"small",artSetKey:null!=(c=null==b?void 0:b.setKey)?c:"",setArtSetKey:zt,sx:{flexGrow:1},label:null!=b&&b.setKey?"":f("editor.unknownSetName"),getOptionDisabled:({key:t})=>Tt(t)}),(0,O.tZ)(St,{rarity:b?Ct:void 0,onChange:t=>vt({rarity:t}),filter:t=>{var e;return!(null==gt||null==(e=gt.rarity)||null==e.includes||!e.includes(t))},disabled:!gt})]}),(0,O.BX)(lt.Z,{component:"div",display:"flex",children:[(0,O.tZ)(Ft,{id:"filled-basic",label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:Kt,disabled:!gt,placeholder:"0~"+4*Ct,onChange:t=>vt({level:t})}),(0,O.BX)(st.Z,{children:[(0,O.tZ)(ot.Z,{onClick:()=>vt({level:Kt-1}),disabled:!gt||0===Kt,children:"-"}),Ct?[...Array(Ct+1).keys()].map((t=>4*t)).map((t=>(0,O.tZ)(ot.Z,{onClick:()=>vt({level:t}),disabled:!gt||Kt===t,children:t},t))):null,(0,O.tZ)(ot.Z,{onClick:()=>vt({level:Kt+1}),disabled:!gt||Kt===4*Ct,children:"+"})]})]}),(0,O.BX)(lt.Z,{component:"div",display:"flex",children:[(0,O.tZ)(Dt,{disabled:I||!gt||(null==b||null==(d=b.setKey)?void 0:d.startsWith("Prayer")),slotKey:Bt,onChange:t=>vt({slotKey:t})}),(0,O.tZ)(F.s8,{bgt:"light",sx:{p:1,ml:1,flexGrow:1},children:(0,O.tZ)(mt.Suspense,{fallback:(0,O.tZ)(ct.Z,{width:"60%"}),children:(0,O.tZ)(dt.Z,{color:"text.secondary",children:b&&null!=gt&&gt.getSlotName(b.slotKey)?(0,O.BX)("span",{children:[(0,O.tZ)($t.Z,{size:2,src:(0,W.Hp)(b.setKey,b.slotKey)}),null==gt?void 0:gt.getSlotName(b.slotKey)]}):f(Se||(Se=Ie`editor.unknownPieceName`))})})})]}),(0,O.BX)(lt.Z,{component:"div",display:"flex",gap:1,children:[(0,O.tZ)(pt.Z,{startIcon:null!=b&&b.mainStatKey?(0,O.tZ)(Wt.C,{statKey:b.mainStatKey}):void 0,title:(0,O.tZ)("b",{children:b?(0,O.tZ)(At.w0,{statKey:b.mainStatKey}):f(ke||(ke=Ie`mainStat`))}),disabled:!gt,color:jt,children:i.yh[Bt].map((t=>(0,O.tZ)(ut.Z,{selected:(null==b?void 0:b.mainStatKey)===t,disabled:(null==b?void 0:b.mainStatKey)===t,onClick:()=>vt({mainStatKey:t}),children:(0,O.tZ)(At.Rl,{statKey:t})},t)))}),(0,O.tZ)(F.s8,{bgt:"light",sx:{p:1,flexGrow:1},children:(0,O.tZ)(dt.Z,{color:"text.secondary",children:b?(0,L.R1)(b.mainStatKey,Ct,Kt):f(Ce||(Ce=Ie`mainStat`))})}),(0,O.tZ)(ot.Z,{disabled:!b,onClick:()=>vt({lock:!(null!=b&&b.lock)}),color:null!=b&&b.lock?"success":"primary",children:null!=b&&b.lock?(0,O.tZ)(H.Z,{}):(0,O.tZ)(j.Z,{})})]}),(0,O.tZ)(pe.W,{location:null!=(u=null==b?void 0:b.location)?u:"",setLocation:t=>vt({location:t}),autoCompleteProps:{disabled:!b}}),(0,O.tZ)(Vt,{valid:xt,efficiency:Pt,t:f}),Pt!==Xt&&(0,O.tZ)(Vt,{max:!0,valid:xt,efficiency:Xt,t:f}),n&&(0,O.tZ)(F.s8,{bgt:"light",children:(0,O.tZ)(it.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,O.BX)(mt.Suspense,{fallback:(0,O.tZ)(ct.Z,{width:"100%",height:"100"}),children:[(0,O.BX)(at.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,O.tZ)(at.ZP,{item:!0,flexGrow:1,children:(0,O.BX)("label",{htmlFor:"contained-button-file",children:[(0,O.tZ)(Fe,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:U}),(0,O.tZ)(ot.Z,{component:"span",startIcon:(0,O.tZ)(T.Z,{}),children:"Upload Screenshot (or Ctrl-V)"})]})}),be.dG&&R&&(0,O.tZ)(at.ZP,{item:!0,children:(0,O.tZ)(Ue,{imgs:R})}),(0,O.tZ)(at.ZP,{item:!0,children:(0,O.tZ)(ot.Z,{color:"info",sx:{px:2,minWidth:0},onClick:()=>x(!0),children:(0,O.tZ)(J.Z,{})})})]}),E&&(0,O.tZ)(lt.Z,{display:"flex",justifyContent:"center",children:(0,O.tZ)(lt.Z,{component:"img",src:E,width:"100%",maxWidth:350,height:"auto",alt:X||"Screenshot to parse for artifact values"})}),!!A&&(0,O.tZ)(ht.Z,{variant:"buffer",value:100*S/A,valueBuffer:100*(S+C)/A}),!!A&&(0,O.tZ)(F.s8,{sx:{pl:2},children:(0,O.BX)(lt.Z,{display:"flex",alignItems:"center",children:[!!C&&(0,O.tZ)(ft.Z,{size:"1em"}),(0,O.tZ)(dt.Z,{sx:{flexGrow:1,ml:1},children:(0,O.BX)("span",{children:["Screenshots in file-queue:",(0,O.tZ)("b",{children:A})]})}),(0,O.tZ)(ot.Z,{size:"small",color:"error",onClick:$,children:"Clear file-queue"})]})})]})})})]}),(0,O.BX)(at.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[[0,1,2,3].map((t=>(0,O.tZ)(ce,{index:t,artifact:M,setSubstat:wt},t))),D&&(0,O.tZ)(F.s8,{bgt:"light",children:(0,O.BX)(it.Z,{children:[(0,O.tZ)("div",{children:D.slotKey}),(0,O.tZ)("div",{children:D.mainStatKey}),(0,O.tZ)("div",{children:D.mainStatVal}),(0,O.tZ)("div",{children:D.rarity}),(0,O.tZ)("div",{children:D.level}),(0,O.tZ)("div",{children:D.lock}),(0,O.tZ)("div",{children:D.substats}),(0,O.tZ)("div",{children:D.setKey}),(0,O.tZ)("div",{children:D.location})]})})]})]}),N&&(0,O.BX)(at.ZP,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[(0,O.tZ)(at.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,O.BX)(F.s8,{bgt:"light",children:[(0,O.tZ)(dt.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:f("edit"!==_?"duplicate"===_?Ke||(Ke=Ie`editor.dupArt`):Be||(Be=Ie`editor.upArt`):Pe||(Pe=Ie`editor.beforeEdit`))}),(0,O.tZ)(Ht.Z,{artifactObj:N})]})}),Gt&&(0,O.tZ)(at.ZP,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:(0,O.tZ)(F.s8,{bgt:"light",sx:{display:"flex"},children:(0,O.tZ)(V.Z,{sx:{fontSize:40}})})}),(0,O.tZ)(at.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,O.BX)(F.s8,{bgt:"light",children:[(0,O.tZ)(dt.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:f(Xe||(Xe=Ie`editor.preview`))}),(0,O.tZ)(Ht.Z,{artifactObj:M})]})})]}),!xt&&(0,O.tZ)(Zt.Z,{variant:"filled",severity:"error",children:tt.map(((t,e)=>(0,O.tZ)("div",{children:t},e)))}),(0,O.BX)(at.ZP,{container:!0,spacing:2,children:[(0,O.tZ)(at.ZP,{item:!0,children:"edit"===_?(0,O.tZ)(ot.Z,{startIcon:(0,O.tZ)(Y.Z,{}),onClick:()=>{b&&Z.arts.set(N.id,b),l||(m(!1),e()),bt()},disabled:!b||!xt,color:"primary",children:f(Ee||(Ee=Ie`editor.btnSave`))}):(0,O.tZ)(ot.Z,{startIcon:(0,O.tZ)(Y.Z,{}),onClick:()=>{Z.arts.new(b),l||(m(!1),e()),bt()},disabled:!b||!xt,color:"duplicate"===_?"warning":"primary",children:f(Re||(Re=Ie`editor.btnAdd`))})}),(0,O.tZ)(at.ZP,{item:!0,flexGrow:1,children:l&&(0,O.tZ)(ot.Z,{startIcon:(0,O.tZ)(Q.Z,{}),disabled:!b,onClick:()=>{window.confirm(f(we||(we=Ie`editor.clearPrompt`)))&&bt()},color:"error",children:f(De||(De=Ie`editor.btnClear`))})}),(0,O.tZ)(at.ZP,{item:!0,children:!1}),N&&"edit"!==_&&(0,O.tZ)(at.ZP,{item:!0,children:(0,O.tZ)(ot.Z,{startIcon:(0,O.tZ)(q.Z,{}),onClick:()=>{b&&Z.arts.set(N.id,b),l?bt():m(!1)},disabled:!b||!xt,color:"success",children:f(Ae||(Ae=Ie`editor.btnUpdate`))})})]})]})]})})}function Ue({imgs:t}){const[e,n]=(0,mt.useState)(!1);return(0,O.BX)(O.HY,{children:[(0,O.tZ)(ot.Z,{color:"warning",onClick:()=>n(!0),children:"DEBUG"}),(0,O.tZ)(Ut.Z,{open:e,onClose:()=>n(!1),children:(0,O.tZ)(F.s8,{children:(0,O.tZ)(it.Z,{children:(0,O.tZ)(gt.Z,{spacing:1,children:Object.entries(t).map((([t,e])=>(0,O.BX)(lt.Z,{children:[(0,O.tZ)(dt.Z,{children:t}),(0,O.tZ)(lt.Z,{component:"img",src:e,maxWidth:"100%"})]},t)))})})})})]})}}}]);