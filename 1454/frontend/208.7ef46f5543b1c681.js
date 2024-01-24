"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[208],{66977:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Ae});var r=n(98283),i=n(25372),a=n(757);function l(t,e=10){return o(t,e)}function s(t,e=10){return o(t,-e)}function o(t,e=10){const{r:n,g:r,b:i,a:l}=t;return{r:(0,a.re)(n+e,0,255),g:(0,a.re)(r+e,0,255),b:(0,a.re)(i+e,0,255),a:l}}function c(t,e,n){return(0,a.uh)(t.r,e.r,n.r)&&(0,a.uh)(t.g,e.g,n.g)&&(0,a.uh)(t.b,e.b,n.b)}function d(t,e){const n=t.width,r=t.height;let{x1:i=0,x2:l=n,y1:s=0,y2:o=r}=e;i=(0,a.re)(i,0,n),l=(0,a.re)(l,0,n),s=(0,a.re)(s,0,r),o=(0,a.re)(o,0,r),s>=o&&(console.warn(`trying to crop with y1:${s} y2:${o}, with src height ${r}.`),s=0,o=r),i>=l&&(console.warn(`trying to crop with x1:${i} x2:${l}, with src width ${n}.`),i=0,l=n);return t.getContext("2d",{willReadFrequently:!0}).getImageData(i,s,l-i,o-s)}const u=t=>new Promise((e=>{const n=new Image;n.onload=({target:t})=>e(function(t){const e=document.createElement("canvas"),n=e.getContext("2d",{willReadFrequently:!0});return e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)}(t)),n.src=t}));function h(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e}function f(t,e,n,r=!0){const i=t.width,a=t.height,l=t.getContext("2d");return l.fillStyle=`rgba(${n.r},${n.g},${n.b},${n.a?n.a/255:1})`,r?l.fillRect(e,0,1,a):l.fillRect(0,e,i,1),t}function Z(t,e,n,r=!0){const i=t.getContext("2d");return i?(i.fillStyle=`rgba(${n.r},${n.g},${n.b},${n.a?n.a/255:1})`,e.forEach(((t,e)=>r?i.fillRect(e,0,1,t):i.fillRect(0,e,t,1))),t):t}function y(t,e,n,r="color"){const i=Uint8ClampedArray.from(t.data),a="bw"===r,l="invert"===r;for(let s=0;s<i.length;s+=4){const t=i[s],r=i[s+1],o=i[s+2];c({r:t,g:r,b:o},e,n)?a?i[s]=i[s+1]=i[s+2]=0:l&&(i[s]=255-t,i[s+1]=255-r,i[s+2]=255-o):i[s]=i[s+1]=i[s+2]=255}return new ImageData(i,t.width,t.height)}function g(t,e,n,r=!0){const i=t.height,a=t.width,l=t.data;return Array.from({length:r?a:i},((t,s)=>{let o=0;for(let d=0;d<(r?i:a);d++){const t=r?p(s,d,a):p(d,s,a),[i,u,h]=[l[t],l[t+1],l[t+2]];c({r:i,g:u,b:h},e,n)&&o++}return o}))}function m(t,e,n,r=!0,i=[0,1]){const l=t.height,s=t.width,o=t.data,c=r?s:l,[d,u]=i,h=c*d,f=c*u;return Array.from({length:c},((t,i)=>{if(i<h||i>f)return 0;let c=0,d=0;for(let u=0;u<(r?l:s);u++){const t=r?p(i,u,s):p(u,i,s),[l,h,f]=[o[t],o[t+1],o[t+2]];(0,a.uh)(l,e.r,n.r)&&(0,a.uh)(h,e.g,n.g)&&(0,a.uh)(f,e.b,n.b)?d++:(d>c&&(c=d),d=0)}return d>c&&(c=d),c}))}function p(t,e,n){return e*(4*n)+4*t}function b(t,e=.7,n=3){const r=Math.max(...t)*e,i=t.length;let a=-n;for(let s=0;s<i;s++){const e=t[s]>r;if(e){if(e&&a<0)a=s;else if(e&&s-a>n)break}else a=-n}a<0&&(a=0);let l=i-1+n;for(let s=i-1;s>=0;s--){const e=t[s]>r;if(e){if(e&&l>i-1)l=s;else if(e&&l-s>n)break}else l=i-1+n}return l>i-1&&(l=i-1),[a,l]}const v={r:145,g:81,b:40},w={r:188,g:104,b:50},x={r:121,g:67,b:167},S={r:160,g:86,b:224},k={r:62,g:96,b:149},C={r:81,g:127,b:204},K={r:235,g:228,b:216},B={r:255,g:231,b:186},P={r:93,g:178,b:87},X={r:255,g:137,b:117},E={r:255,g:204,b:50},R={r:131,g:131,b:130},D={r:74,g:81,b:102};var A=n(72718),I=n(53083),G=n(4410),$=n(26925);const L={hp:"HP",hp_:"HP",atk:"ATK",atk_:"ATK",def:"DEF",def_:"DEF",eleMas:"Elemental Mastery",enerRech_:"Energy Recharge",critRate_:"Crit Rate",critDMG_:"Crit DMG",heal_:"Healing Bonus"};Object.entries({physical:"Physical",anemo:"Anemo",geo:"Geo",electro:"Electro",hydro:"Hydro",pyro:"Pyro",cryo:"Cryo",dendro:"Dendro"}).forEach((([t,e])=>{L[`${t}_dmg_`]=`${e} DMG Bonus`}));const F={flower:"Flower of Life",plume:"Plume of Death",sands:"Sands of Eon",goblet:"Goblet of Eonothem",circlet:"Circlet of Logos"};var U=n(52903);function O(t,e,n,r,l,s,o,c=!1){const d={lock:b(c,"Lock",(t=>t?"Locked":"Unlocked"))};o&&(d.location=b(o,"Location",(t=>t)));const u=e.size?[...e]:["EmblemOfSeveredFate"];let h=-1,f=[{setKey:"EmblemOfSeveredFate",rarity:5,level:0,slotKey:"flower",mainStatKey:"hp",substats:[],location:null!=o?o:"",lock:c}];const Z=(0,a.K8)(i.$W,(n=>{let i=0;if(e.size){i+=[...e].reduce(((t,e)=>t+(A.G2.art.data[e].rarities.includes(n)?1:0)),0)/e.size}if(t.has(n)&&i++,r.length){i+=r.reduce(((t,e)=>t+((0,G.UW)(e.key,e.value,n).length?1:0)),0)/r.length*2}return i}));for(const k of i.Ex)for(const t of i.yh[k]){const r=(0,a.bf)(t),i="%"===r?1:0,d="%"===r?.1:1,y=(n.has(k)?1:0)+(l.has(t)?1:0),g=s.filter((e=>"%"!==e.unit||"%"===(0,a.bf)(t))).map((t=>t.mainStatValue));for(const[n,a]of Object.entries(Z)){const r=parseInt(n),l=u.filter((t=>A.G2.art.data[t].rarities.includes(r))),s=y+a;if(!(s+2<h)){for(const n of g){const a=(0,G.HD)(r,t),u=Math.max(0,a.findIndex((t=>t+d>=n))),Z=s+(a[u].toFixed(i)===n.toFixed(i)?1:0);for(const n of l){const i=Z+(e.has(n)?1:0);i>=h&&(i>h&&(f=[]),h=i,f.push({setKey:n,rarity:r,level:u,slotKey:k,mainStatKey:t,substats:[],location:null!=o?o:"",lock:c}))}}if(s>=h){const n=0;for(const i of l){const a=s+(e.has(i)?1:0);a>h&&(f=[]),h=a,f.push({setKey:i,rarity:r,level:n,slotKey:k,mainStatKey:t,substats:[],location:null!=o?o:"",lock:c})}}}}}const y={setKey:new Set,rarity:new Set,level:new Set,slotKey:new Set,mainStatKey:new Set,mainStatVal:new Set},g=f[0],m=(0,G.Bv)(g.mainStatKey,g.rarity,g.level);g.substats=r.filter(((t,e)=>t.key!==g.mainStatKey&&r.slice(0,e).every((e=>e.key!==t.key))));for(let i=g.substats.length;i<4;i++)g.substats.push({key:"",value:0});for(const i of f)y.setKey.add(i.setKey),y.rarity.add(i.rarity),y.level.add(i.level),y.slotKey.add(i.slotKey),y.mainStatKey.add(i.mainStatKey);function p(t,e,n){return(0,U.BX)(U.HY,{children:["Unknown ",e," : Set to"," ",(0,U.tZ)($._w,{color:"error",children:n(t)})]})}function b(t,e,n){return(0,U.BX)(U.HY,{children:["Detected ",e," ",(0,U.tZ)($._w,{color:"success",children:n(t)})]})}function v(t,e,n){return(0,U.BX)(U.HY,{children:["Inferred ",e," ",(0,U.tZ)($._w,{color:"warning",children:n(t)})]})}function w(t,e,n,r){const i=new Set([...y[t]].filter((t=>e.has(t)))),a=g[t];i.size>1?d[t]=function(t,e,n,r){return(0,U.BX)(U.HY,{children:["Ambiguous ",n," ",(0,U.tZ)($._w,{color:"error",children:r(t)})," : May also be"," ",e.filter((e=>e!==t)).map(((t,e)=>(0,U.BX)(U.HY,{children:[(0,U.tZ)("b",{children:e>0?"/":""}),(0,U.tZ)($._w,{color:"warning",children:r(t)})]})))]})}(a,[...e],n,r):1===i.size?d[t]=b(a,n,r):y[t].size>1?d[t]=p(a,n,r):d[t]=v(a,n,r)}w("setKey",e,"Set",(t=>(0,U.tZ)(I.C3,{setKey:t}))),w("rarity",t,"Rarity",(t=>(0,U.BX)(U.HY,{children:[t," ",1!==t?"Stars":"Star"]}))),w("slotKey",n,"Slot",(t=>(0,U.tZ)(I.cN,{slotKey:t}))),w("mainStatKey",l,"Main Stat",(t=>(0,U.tZ)("span",{children:L[t]}))),d.substats=(0,U.tZ)(U.HY,{children:g.substats.filter((t=>""!==t.key)).map(((t,e)=>(0,U.tZ)("div",{children:b(t,"Sub Stat",(t=>(0,U.BX)(U.HY,{children:[L[t.key],"+",(0,G.Jj)(t.value,(0,a.bf)(t.key)),(0,a.bf)(t.key)]})))},e)))});const x=t=>(0,U.BX)(U.HY,{children:[(0,G.Jj)(t,(0,a.bf)(g.mainStatKey)),(0,a.bf)(g.mainStatKey)]}),S="%"===(0,a.bf)(g.mainStatKey)?1:0;return s.find((t=>t.mainStatValue.toFixed(S)===m.toFixed(S)))?l.has(g.mainStatKey)?(d.level=b(g.level,"Level",(t=>"+"+t)),d.mainStatVal=b(m,"Main Stat value",x)):(d.level=v(g.level,"Level",(t=>"+"+t)),d.mainStatVal=v(m,"Main Stat value",x)):(d.level=p(g.level,"Level",(t=>"+"+t)),d.mainStatVal=p(m,"Main Stat value",x)),[g,d]}function N(t){const e=Math.min(...t.map((([,t])=>t))),n=t.filter((([,t])=>t===e)).map((([t])=>t));return new Set(n)}async function _(t,e,n=!1){const{f:r,fName:o}=t,c=await(p=r,new Promise((t=>{const e=new FileReader;e.onloadend=({target:e})=>t(e.result),e.readAsDataURL(p)})));var p;const A=await u(c),I=n?{}:void 0,G=function(t,e){const n=m(t,s(K),l(K)),[r,i]=b(n),a=d(h(t),{x1:r,x2:i});if(e){const a=h(t);Z(a,n,{r:255,g:0,b:0,a:100}),f(a,r,{r:0,g:255,b:0,a:150}),f(a,i,{r:0,g:0,b:255,a:150}),e.fullAnalysis=a.toDataURL()}return a}(A,I),$=h(G),U=function(t){const e=t.width,n=.7*e;function r(e,r){const i=m(t,s(e,20),l(r,20),!1,[0,.3]);return i.find((t=>t>n))?i:null}return[[v,w],[x,S],[k,C]].reduce(((t,e)=>t||r(e[0],e[1])),null)}(G),[_,W]=U?b(U,.7,1):[0,0],M=m(G,s(K),l(K),!1),[H,j]=b(M,.8,2);let z=j;const T=m(A,s(B),l(B),!1),V=T.some((t=>t>.5*G.width)),[Y,Q]=b(T);if(V)z=Q;else{const t=g(G,s(P),l(P),!1),[e,n]=b(t,.2),r=n-e;n>z&&(z=(0,a.re)(n+r,0,G.height))}const q=d($,{y1:_,y2:z}),J=V?d($,{y1:Y,y2:Q}):void 0,tt=d($,{x1:0,x2:.6*$.width,y1:W,y2:H});if(I){const t=h(G);U&&Z(t,U,{r:0,g:150,b:150,a:100},!1),Z(t,M,{r:150,g:0,b:0,a:100},!1),Z(t,T,{r:0,g:0,b:100,a:100},!1),f(t,_,{r:0,g:255,b:0,a:200},!1),f(t,V?Q:z,{r:0,g:0,b:255,a:200},!1),f(t,H,{r:255,g:0,b:200,a:200},!1),I.artifactCardAnalysis=t.toDataURL()}I&&(I.headerCropped=h(tt).toDataURL());const et=d($,{y1:H,y2:z}),nt=g(et,s(P),l(P),!1),[rt,it]=b(nt,.2);if(I){const t=h(et);Z(t,nt,{r:100,g:0,b:0,a:100},!1),f(t,rt,{r:0,g:255,b:0,a:200},!1),f(t,it,{r:0,g:0,b:255,a:200},!1),I.whiteCardAnalysis=t.toDataURL()}const at=it-rt,lt=d(h(et),{y1:rt-at,y2:it+at}),st=d(h(et),{y2:rt}),ot=g(et,s(X),l(X)),ct=ot.filter((t=>t>5)).length>5;if(I){const t=h(st);Z(t,ot,{r:0,g:100,b:0,a:100}),I.substatsCardCropped=t.toDataURL()}const dt=y(tt,{r:140,g:140,b:140},{r:255,g:255,b:255},"bw"),ut=y(lt,{r:30,g:100,b:30},{r:200,g:255,b:200},"bw"),ht=J&&y(J,s(D),l(R),"bw");I&&(I.bwHeader=h(dt).toDataURL(),I.greenTextCropped=h(lt).toDataURL(),I.bwGreenText=h(ut).toDataURL(),ht&&(I.bwEquipped=h(ht).toDataURL()));const[ft,Zt,yt,gt]=await Promise.all([e(dt),e(st),e(ut),ht&&e(ht)]),mt=function(t,e){const n=m(t,s(E),l(E),!1),[r,i]=b(n,.3),o=d(h(t),{y1:r,y2:i}),c=m(o,s(E),l(E));if(e){const t=h(o);Z(t,c,{r:100,g:0,b:0,a:100}),e.rarity=t.toDataURL()}const u=.5*Math.max(...c);let f=0,y=!1;for(let a=0;a<c.length;a++)c[a]>u?y||(f++,y=!0):y&&(y=!1);return(0,a.re)(f,1,5)}(tt,I),[pt,bt]=O(new Set([mt]),function(t){const e=[];for(const n of t)for(const t of i.Gt)e.push([t,(0,a.Ay)(n.replace(/\W/g,""),t)]);return N(e)}(yt),function(t){const e=[];for(const n of t)for(const t of i.Ex)e.push([t,(0,a.Ay)(n.replace(/\W/g,""),F[t].replace(/\W/g,""))]);return N(e)}(ft),function(t){const e=[];for(let n of t)n=n.replace(/^[\W]+/,"").replace(/\n/,""),i._m.forEach((t=>{const r=L[t],i=("%"===(0,a.bf)(t)?new RegExp(r+"\\s*\\+\\s*(\\d+[\\.|,]+\\d)%","im"):new RegExp(r+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(n);i&&e.push({key:t,value:parseFloat(i[1].replace(/,/g,".").replace(/\.{2,}/g,"."))})}));return e.slice(0,4)}(Zt),function(t){const e=[];for(const l of t)for(const t of i.rW){var n,r;const i=null==(n=L[t])?void 0:n.toLowerCase();i.length<=3?l.toLowerCase().includes(null!=i?i:"")&&e.push([t,0]):e.push([t,(0,a.Ay)(l.replace(/\W/g,""),(null!=(r=L[t])?r:"").replace(/\W/g,""))])}return N(e)}(ft),function(t){const e=[];for(const n of t){let t=/(\d+[,|\\.]+\d)%/,r=t.exec(n);r&&e.push({mainStatValue:parseFloat(r[1].replace(/,/g,".").replace(/\.{2,}/g,".")),unit:"%"}),t=/(\d+[,|\\.]\d{3}|\d{2,3})/,r=t.exec(n),r&&e.push({mainStatValue:parseInt(r[1].replace(/[,|\\.]+/g,""))})}return e}(ft),gt?function(t){const e=[];for(let r of t){if(!r)continue;const t=r.indexOf(":");if(-1!==t&&(r=r.slice(t+1)),r)for(const n of i.vp)e.push([n,(0,a.Ay)(r.replace(/\W/g,""),n)])}e.push(["Traveler",8]);const[n]=N(e);return n}(gt):"",ct);return{fileName:o,imageURL:h(q).toDataURL(),artifact:pt,texts:bt,debugImgs:I}}class ScanningQueue{constructor(t,e=!1){this.debug=void 0,this.textsFromImage=void 0,this.processed=[],this.outstanding=[],this.scanning=[],this.callback=()=>{},this.textsFromImage=t,this.debug=e}addFiles(t){this.outstanding.push(...t),this.processQueue()}processQueue(){const t=Math.min(16-this.processed.length-this.scanning.length,3-this.scanning.length,this.outstanding.length);t&&this.outstanding.splice(0,t).map((t=>{const e=_(t,this.textsFromImage,this.debug);this.scanning.push(e),e.then((t=>{const n=this.scanning.indexOf(e);-1!==n&&(this.scanning.splice(n,1),this.processed.push(t),this.processQueue())}))})),this.callCB()}callCB(){this.callback({processedNum:this.processed.length,outstandingNum:this.outstanding.length,scanningNum:this.scanning.length})}shiftProcessed(){const t=this.processed.shift();return t&&this.processQueue(),t}clearQueue(){this.processed=[],this.outstanding=[],this.scanning=[],this.callCB()}}var W=n(36226),M=n(75927),H=n(93994),j=n(72550),z=n(67651),T=n(73673),V=n(92252),Y=n(32510),Q=n(85219),q=n(16549),J=n(65992),tt=n(47746),et=n(86432),nt=n(42523),rt=n(7671),it=n(41075),at=n(67550),lt=n(80551),st=n(83249),ot=n(79906),ct=n(62197),dt=n(94380),ut=n(38162),ht=n(72841),ft=n(107),Zt=n(33927),yt=n(2784),gt=n(11141),mt=n(8660),pt=n(47712),bt=n(83993),vt=n(82056),wt=n(56961),xt=n(23485),St=n(79199);let kt,Ct=t=>t;const Kt=["slotKey","onChange","hasUnselect"];function Bt(t){let{slotKey:e="",onChange:n,hasUnselect:a=!1}=t,l=(0,r.Z)(t,Kt);const{t:s}=(0,gt.$G)(["artifact","ui"]);return(0,U.BX)(xt.Z,Object.assign({title:s(e?`artifact:slotName:${e}`:"artifact:slot"),color:e?"success":"primary",startIcon:e?(0,U.tZ)(St.Z,{slotKey:e}):void 0},l,{children:[a&&(0,U.BX)(dt.Z,{selected:""===e,disabled:""===e,onClick:()=>n(""),children:[(0,U.tZ)(bt.Z,{children:(0,U.tZ)(Y.Z,{})}),(0,U.tZ)(vt.Z,{children:s(kt||(kt=Ct`ui:unselect`))})]}),a&&(0,U.tZ)(wt.Z,{}),i.Ex.map((t=>(0,U.BX)(dt.Z,{selected:e===t,disabled:e===t,onClick:()=>n(t),children:[(0,U.tZ)(bt.Z,{children:(0,U.tZ)(St.Z,{slotKey:t})}),(0,U.tZ)(vt.Z,{children:s(`artifact:slotName:${t}`)})]},t)))]}))}var Pt=n(6480),Xt=n(23690),Et=n(13780);const Rt=["value","onChange","disabled","float"];function Dt(t){let{value:e,onChange:n,disabled:i=!1,float:a=!1}=t,l=(0,r.Z)(t,Rt);const[s,o]=(0,yt.useState)(""),c=(0,yt.useCallback)((()=>{if(""===s)return n(0);const t=a?parseFloat:parseInt;n(t(s))}),[n,s,a]);return(0,yt.useEffect)((()=>{var t;return o(null!=(t=null==e?void 0:e.toString())?t:"")}),[e,o]),(0,U.tZ)(Et.Z,Object.assign({value:s,"aria-label":"custom-input",type:"number",onChange:t=>o(t.target.value),onBlur:c,disabled:i,onKeyDown:t=>"Enter"===t.key&&c()},l))}var At=n(79410),It=n(69698),Gt=n(4121),$t=n(69614),Lt=n(80639),Ft=n(34156),Ut=n(39099),Ot=n(30706),Nt=n(87833),_t=n(12702),Wt=n(96580);function Mt({efficiency:t,max:e=!1,t:n,valid:r}){const i=e?"maxSubEff":"curSubEff";return(0,U.tZ)(Nt.Z,{sx:{py:1,px:2},children:(0,U.BX)(it.ZP,{container:!0,spacing:1,children:[(0,U.tZ)(it.ZP,{item:!0,children:n(`editor.${i}`)}),(0,U.tZ)(it.ZP,{item:!0,flexGrow:1,children:(0,U.tZ)(_t.Z,{title:(0,U.BX)("span",{children:[(0,U.tZ)(ct.Z,{variant:"h6",children:n(`editor.${i}`)}),(0,U.tZ)(ct.Z,{children:(0,U.tZ)(gt.cC,{t:n,i18nKey:`editor.${i}Desc`})})]})})}),(0,U.tZ)(it.ZP,{item:!0,xs:"auto",children:(0,U.tZ)(Wt.Z,{valid:r,max:900,value:r?t:"ERR"})})]})})}var Ht=n(36081),jt=n(89977),zt=n(12366),Tt=n(13900),Vt=n(25576);let Yt,Qt,qt,Jt,te,ee,ne,re=t=>t;function ie({index:t,artifact:e,setSubstat:n}){var r;const{t:l}=(0,gt.$G)("artifact"),{mainStatKey:s="",rarity:o=5}=null!=e?e:{},{key:c="",value:d=0,rolls:u=[],efficiency:h=0}=null!=(r=null==e?void 0:e.substats[t])?r:{},f=u.reduce(((t,e)=>t+e),0),Z=Vt.ZP.unit(c),y=u.length;let g="",m=[],p=0;if(e){const t=e.rarity,{numUpgrades:n,high:r}=i.i0[t];p=n+r-3-y,m=c?(0,G.ME)(c,t):[]}const b=7-m.length;!y&&c&&d&&(g=g||l(Yt||(Yt=re`editor.substat.error.noCalc`))),p<0&&(g=g||l("editor.substat.error.noOverRoll",{value:p+y}));const v=(0,yt.useMemo)((()=>c?[{value:0},...(0,G.K_)(o,c).map((t=>({value:t})))]:[{value:0}]),[c,o]);return(0,U.BX)(Nt.Z,{children:[(0,U.tZ)(at.Z,{sx:{display:"flex"},children:(0,U.BX)(lt.Z,{size:"small",sx:{width:"100%",display:"flex"},children:[(0,U.BX)(xt.Z,{startIcon:c?(0,U.tZ)(Ut.C,{statKey:c}):void 0,title:c?(0,U.tZ)(Pt.w0,{statKey:c}):l("editor.substat.substatFormat",{value:t+1}),disabled:!e,color:c?"success":"primary",sx:{whiteSpace:"nowrap"},children:[c&&(0,U.tZ)(dt.Z,{onClick:()=>n(t,{key:"",value:0}),children:l(Qt||(Qt=re`editor.substat.noSubstat`))}),i._m.filter((t=>s!==t)).map((e=>(0,U.BX)(dt.Z,{selected:c===e,disabled:c===e,onClick:()=>n(t,{key:e,value:0}),children:[(0,U.tZ)(bt.Z,{children:(0,U.tZ)(Ut.C,{statKey:e})}),(0,U.tZ)(vt.Z,{children:(0,U.tZ)(Pt.w0,{statKey:e})})]},e)))]}),(0,U.tZ)(jt.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,U.tZ)(jt.ZP,{float:"%"===Z,placeholder:l(qt||(qt=re`editor.substat.selectSub`)),value:c?d:void 0,onChange:e=>n(t,{key:c,value:null!=e?e:0}),disabled:!c,error:!!g,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!m.length&&(0,U.tZ)(Tt.Z,{children:l(Jt||(Jt=re`editor.substat.nextRolls`))}),m.map(((e,r)=>{var i,l;let s=(0,G.Jj)(f+e,Z);return s=null!=(i=null==(l=A.G2.art.subRollCorrection[o])||null==(l=l[c])?void 0:l[s])?i:s,(0,U.tZ)(st.Z,{color:`roll${(0,a.re)(b+r,1,6)}`,disabled:d&&!y||p<=0,onClick:()=>n(t,{key:c,value:parseFloat(s)}),children:s},r)}))]})}),(0,U.tZ)(at.Z,{px:2,children:(0,U.tZ)(ae,{value:d,marks:v,setValue:e=>{var r;return n(t,{key:c,value:null!=(r=e)?r:0})},disabled:!c})}),(0,U.tZ)(at.Z,{sx:{px:1,pb:1},children:g?(0,U.tZ)(zt.Z,{color:"error",children:l(te||(te=re`ui:error`))}):(0,U.BX)(it.ZP,{container:!0,children:[(0,U.tZ)(it.ZP,{item:!0,children:(0,U.tZ)(zt.Z,{color:0===y?"secondary":`roll${(0,a.re)(y,1,6)}`,children:y?l("editor.substat.RollCount",{count:y}):l(ee||(ee=re`editor.substat.noRoll`))})}),(0,U.tZ)(it.ZP,{item:!0,flexGrow:1,children:!!u.length&&[...u].sort().map(((t,e)=>(0,U.tZ)(ct.Z,{component:"span",color:`roll${(0,a.re)(b+m.indexOf(t),1,6)}.main`,sx:{ml:1},children:(0,G.Jj)(t,Z)},`${e}.${t}`)))}),(0,U.tZ)(it.ZP,{item:!0,xs:"auto",flexShrink:1,children:(0,U.tZ)(ct.Z,{children:(0,U.BX)(gt.cC,{t:l,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",(0,U.tZ)(Wt.Z,{valid:!0,max:100*y,value:h||l(ne||(ne=re`editor.substat.noStat`))})]})})})]})})]})}function ae({value:t,setValue:e,marks:n,disabled:r=!1}){var i,a;const[l,s]=(0,yt.useState)(t);return(0,yt.useEffect)((()=>s(t)),[t]),(0,U.tZ)(Ht.ZP,{value:l,step:null,disabled:r,marks:n,min:0,max:null!=(i=null==(a=n[n.length-1])?void 0:a.value)?i:0,onChange:(t,e)=>s(e),onChangeCommitted:(t,n)=>e(n),valueLabelDisplay:"auto"})}var le=n(24264);const se=n.p+"scanned.7fcdf3986bbc6101.png",oe=n.p+"fullscreen.093bacd265118df9.png";function ce({modalShow:t,hide:e}){return(0,U.tZ)(It.Z,{open:t,onClose:e,children:(0,U.BX)(le.Z,{children:[(0,U.tZ)(rt.Z,{sx:{py:1},children:(0,U.BX)(it.ZP,{container:!0,children:[(0,U.tZ)(it.ZP,{item:!0,flexGrow:1,children:(0,U.tZ)(ct.Z,{variant:"subtitle1",children:"How to Upload Screenshots for parsing"})}),(0,U.tZ)(it.ZP,{item:!0,children:(0,U.tZ)(Xt.Z,{onClick:e})})]})}),(0,U.tZ)(wt.Z,{}),(0,U.BX)(rt.Z,{children:[(0,U.BX)(ft.Z,{variant:"outlined",severity:"warning",children:["NOTE: Artifact Scanning currently only works for"," ",(0,U.tZ)("strong",{children:"ENGLISH"})," artifacts."]}),(0,U.BX)(it.ZP,{container:!0,spacing:1,mt:1,children:[(0,U.tZ)(it.ZP,{item:!0,xs:8,md:6,children:(0,U.tZ)(at.Z,{component:"img",alt:"snippet of the screen to take",src:oe,width:"100%",height:"auto"})}),(0,U.BX)(it.ZP,{item:!0,xs:12,md:6,children:[(0,U.tZ)(ct.Z,{gutterBottom:!0,children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),(0,U.tZ)(ct.Z,{variant:"h5",children:"Where to snip the screenshot."}),(0,U.BX)(ct.Z,{gutterBottom:!0,children:["In game, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer."," ",(0,U.tZ)("b",{children:"Only artifact from this screen can be scanned."})]}),(0,U.tZ)(ct.Z,{variant:"h6",children:"Single artifact"}),(0,U.BX)(ct.Z,{gutterBottom:!0,children:["To take a screenshot, in Windows, the shortcut is"," ",(0,U.tZ)("strong",{children:"Alt + Print Screen"}),". Once you selected the region, the image is automatically included in your clipboard."]}),(0,U.tZ)(ct.Z,{variant:"h6",children:"Multiple artifacts"}),(0,U.BX)(ct.Z,{gutterBottom:!0,children:["To take advantage of batch uploads, you can use a tool like"," ",(0,U.tZ)("a",{href:"https://picpick.app/",target:"_blank",rel:"noreferrer",children:"PicPick"})," ","to create a macro to easily to screenshot multiple artifacts at once."]}),(0,U.tZ)(ct.Z,{variant:"h5",children:"What to include in the screenshot."}),(0,U.tZ)(ct.Z,{children:"The full genshin window, or at least a region that covers the artifact card."})]}),(0,U.BX)(it.ZP,{item:!0,xs:12,md:7,children:[(0,U.tZ)(ct.Z,{variant:"h5",children:"Adding Screenshot to Genshin Optimizer"}),(0,U.tZ)(ct.Z,{children:"At this point, you should have the artifact screenshot either saved to your harddrive, or in your clipboard."}),(0,U.tZ)(ct.Z,{gutterBottom:!0,children:'You can click on the box next to "Browse" to browse the files in your harddrive for multiple screenshots.'}),(0,U.BX)(ct.Z,{children:["For single screenshots from the snippets, just press"," ",(0,U.tZ)("strong",{children:"Ctrl + V"})," to paste from your clipboard."]}),(0,U.BX)(ct.Z,{gutterBottom:!0,children:["You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",(0,U.tZ)("b",{children:"Artifact Editor"}),"."]}),(0,U.tZ)(ct.Z,{variant:"h5",children:"Finishing the Artifact"}),(0,U.BX)(ct.Z,{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",(0,U.tZ)("strong",{children:"Add Artifact"})," to finish editing the artifact."]})]}),(0,U.tZ)(it.ZP,{item:!0,xs:8,md:5,children:(0,U.tZ)(at.Z,{component:"img",alt:"main screen after importing stats",src:se,width:"100%",height:"auto"})})]})]}),(0,U.tZ)(wt.Z,{}),(0,U.tZ)(rt.Z,{sx:{py:1},children:(0,U.tZ)(Xt.Z,{large:!0,onClick:e})})]})})}var de=n(24370);const ue=new a.eQ((async t=>{const e=(0,de.createScheduler)(),n=Array(2).fill(0).map((async n=>{const r=await(0,de.createWorker)(t,void 0,{errorHandler:console.error,langPath:"./assets"});e.addWorker(r)}));return await Promise.any(n),e}),((t,e)=>{e.then((t=>t.terminate()))}));async function he(t,e=void 0){const n=h(t);return(await ue.borrow("genshin_fast_09_04_21",(async t=>await(await t).addJob("recognize",n,e)))).data.lines.map((t=>t.text))}var fe=n(50090),Ze=n(11845);const ye=["artifact"];let ge,me,pe,be,ve,we,xe,Se,ke,Ce,Ke,Be,Pe,Xe=t=>t;const Ee=new Set(i._m);function Re(t,e){const n=(()=>{switch(e.type){case"reset":return;case"substat":{const{index:n,substat:r}=e,i=r.key?t.substats.findIndex((t=>t.key===r.key)):-1;return-1===i||i===n?t.substats[n]=r:[t.substats[n],t.substats[i]]=[t.substats[i],t.substats[n]],Object.assign({},t)}case"overwrite":return e.artifact;case"update":return Object.assign({},t,e.artifact)}})();return n?(0,Lt.BG)(n,!0):n}const De=(0,J.ZP)("input")({display:"none"});function Ae({artifactIdToEdit:t="",cancelEdit:e,allowUpload:n=!1,allowEmpty:l=!1,disableSet:s=!1,disableSlot:o=!1}){var c,d,u;const h=(0,yt.useRef)(new ScanningQueue(he,Ze.dG)).current,{t:f}=(0,gt.$G)("artifact"),{database:Z}=(0,yt.useContext)(Ft.t),[y,g]=(0,yt.useState)(!1),[m,p]=(0,j.NW)();(0,yt.useEffect)((()=>Z.arts.followAny(p)),[Z,p]);const[b,v]=(0,yt.useReducer)(Re,void 0),[w,x]=(0,yt.useState)(!1),[{processedNum:S,outstandingNum:k,scanningNum:C},K]=(0,yt.useState)({processedNum:0,outstandingNum:0,scanningNum:0}),[B,P]=(0,yt.useState)(void 0),{fileName:X,imageURL:E,debugImgs:R,texts:D}=null!=B?B:{},A=S+k+C,I=!["new",""].includes(t)&&!(null==b||!b.location)||o,L=(0,yt.useCallback)((t=>{t&&(g(!0),h.addFiles(Array.from(t).map((t=>({f:t,fName:t.name})))))}),[g,h]),F=(0,yt.useCallback)((()=>{h.clearQueue()}),[h]),O=(0,yt.useCallback)((t=>{t.target&&(L(t.target.files),t.target.value="")}),[L]),{old:N,oldType:_}=(0,yt.useMemo)((()=>{var e;const n=m&&t&&Z.arts.get(t);if(n)return{old:n,oldType:"edit"};if(void 0===b)return{old:void 0,oldType:""};const{duplicated:r,upgraded:i}=m&&Z.arts.findDups(b);return{old:null!=(e=r[0])?e:i[0],oldType:0!==r.length?"duplicate":"upgrade"}}),[b,t,Z,m]),{artifact:J,errors:Zt}=(0,yt.useMemo)((()=>{if(!b)return{artifact:void 0,errors:[]};return(0,Lt.m1)(b,t)}),[b,t]),bt=b?(0,Gt.Sk)(b.setKey):void 0,vt=(0,yt.useCallback)((()=>{null==e||e(),v({type:"reset"}),P(void 0)}),[e,v]),wt=(0,yt.useCallback)((t=>{var e,n;const r=t.setKey?(0,Gt.Sk)(t.setKey):bt;function l(t,e,n){return t&&e.includes(t)?t:null!=n?n:e[0]}t.setKey&&(t.rarity=l(null==b?void 0:b.rarity,r.rarity,Math.max(...r.rarity)),t.slotKey=l(null==b?void 0:b.slotKey,r.slots)),t.rarity&&(t.level=null!=(e=null==b?void 0:b.level)?e:0),t.level&&(t.level=(0,a.re)(t.level,0,4*(null!=(n=t.rarity)?n:b.rarity))),t.slotKey&&(t.mainStatKey=l(null==b?void 0:b.mainStatKey,i.yh[t.slotKey])),t.mainStatKey&&(t.substats=[0,1,2,3].map((e=>b&&b.substats[e].key!==t.mainStatKey?b.substats[e]:{key:"",value:0}))),v({type:"update",artifact:t})}),[b,bt,v]),St=(0,yt.useCallback)(((t,e)=>{v({type:"substat",index:t,substat:e})}),[v]),kt=!Zt.length,{rarity:Ct=5,level:Kt=0,slotKey:Et="flower"}=null!=b?b:{},{currentEfficiency:Rt=0,maxEfficiency:Nt=0}=J?$t.Z.getArtifactEfficiency(J,Ee):{},_t=(0,yt.useCallback)((e=>{t||!A&&!b||window.confirm(f(me||(me=Xe`editor.clearPrompt`)))?(g(!1),h.clearQueue(),vt()):null==e||e.preventDefault()}),[f,t,h,b,A,g,vt]),Wt=(0,tt.Z)(),Ht=(0,et.Z)(Wt.breakpoints.up("md")),jt=b?i.fR.find((t=>b.mainStatKey.includes(t))):void 0,zt=b?null!=jt?jt:"success":"primary",Tt=(0,yt.useCallback)((t=>wt({setKey:t})),[wt]),Vt=(0,yt.useCallback)((t=>""===t||!(!I||"circlet"===Et||"PrayersForDestiny"!==t&&"PrayersForIllumination"!==t&&"PrayersForWisdom"!==t&&"PrayersToSpringtime"!==t)),[I,Et]);return(0,yt.useEffect)((()=>{"new"===t&&(g(!0),v({type:"reset"}));const e=t&&m&&Z.arts.get(t);e&&(g(!0),v({type:"overwrite",artifact:(0,a.I8)(e)}))}),[t,Z,m]),(0,yt.useEffect)((()=>{if(!S||B)return;const t=h.shiftProcessed();if(!t)return;const{artifact:e}=t,n=(0,r.Z)(t,ye);P(n),v({type:"overwrite",artifact:e})}),[h,S,B]),(0,yt.useEffect)((()=>{const t=t=>{var e;return L(null==(e=t.clipboardData)?void 0:e.files)};return n&&window.addEventListener("paste",t),()=>{n&&window.removeEventListener("paste",t)}}),[L,n]),(0,yt.useEffect)((()=>(h.callback=K,()=>{h.callback=()=>{}})),[h]),(0,U.tZ)(It.Z,{open:y,onClose:_t,children:(0,U.BX)($.s8,{children:[(0,U.tZ)(ce,{modalShow:w,hide:()=>x(!1)}),(0,U.tZ)(nt.Z,{title:(0,U.tZ)(gt.cC,{t:f,i18nKey:"editor.title",children:"Artifact Editor"}),action:(0,U.tZ)(Xt.Z,{disabled:!!A,onClick:_t})}),(0,U.BX)(rt.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,U.BX)(it.ZP,{container:!0,spacing:1,columns:{xs:1,md:2},children:[(0,U.BX)(it.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[(0,U.BX)(at.Z,{sx:{display:"flex",gap:1},children:[(0,U.tZ)(pt.Z,{disabled:s,size:"small",artSetKey:null!=(c=null==b?void 0:b.setKey)?c:"",setArtSetKey:Tt,sx:{flexGrow:1},label:null!=b&&b.setKey?"":f("editor.unknownSetName"),getOptionDisabled:({key:t})=>Vt(t)}),(0,U.tZ)(mt.Z,{rarity:b?Ct:void 0,onChange:t=>wt({rarity:t}),filter:t=>{var e;return!(null==bt||null==(e=bt.rarity)||null==e.includes||!e.includes(t))},disabled:!bt})]}),(0,U.BX)(at.Z,{component:"div",display:"flex",children:[(0,U.tZ)(Dt,{id:"filled-basic",label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:Kt,disabled:!bt,placeholder:"0~"+4*Ct,onChange:t=>wt({level:t})}),(0,U.BX)(lt.Z,{children:[(0,U.tZ)(st.Z,{onClick:()=>wt({level:Kt-1}),disabled:!bt||0===Kt,children:"-"}),Ct?[...Array(Ct+1).keys()].map((t=>4*t)).map((t=>(0,U.tZ)(st.Z,{onClick:()=>wt({level:t}),disabled:!bt||Kt===t,children:t},t))):null,(0,U.tZ)(st.Z,{onClick:()=>wt({level:Kt+1}),disabled:!bt||Kt===4*Ct,children:"+"})]})]}),(0,U.BX)(at.Z,{component:"div",display:"flex",children:[(0,U.tZ)(Bt,{disabled:I||!bt||(null==b||null==(d=b.setKey)?void 0:d.startsWith("Prayer")),slotKey:Et,onChange:t=>wt({slotKey:t})}),(0,U.tZ)($.s8,{bgt:"light",sx:{p:1,ml:1,flexGrow:1},children:(0,U.tZ)(yt.Suspense,{fallback:(0,U.tZ)(ot.Z,{width:"60%"}),children:(0,U.tZ)(ct.Z,{color:"text.secondary",children:b&&null!=bt&&bt.getSlotName(b.slotKey)?(0,U.BX)("span",{children:[(0,U.tZ)(At.Z,{size:2,src:(0,W.Hp)(b.setKey,b.slotKey)}),null==bt?void 0:bt.getSlotName(b.slotKey)]}):f(pe||(pe=Xe`editor.unknownPieceName`))})})})]}),(0,U.BX)(at.Z,{component:"div",display:"flex",gap:1,children:[(0,U.tZ)(xt.Z,{startIcon:null!=b&&b.mainStatKey?(0,U.tZ)(Ut.C,{statKey:b.mainStatKey}):void 0,title:(0,U.tZ)("b",{children:b?(0,U.tZ)(Pt.w0,{statKey:b.mainStatKey}):f(be||(be=Xe`mainStat`))}),disabled:!bt,color:zt,children:i.yh[Et].map((t=>(0,U.tZ)(dt.Z,{selected:(null==b?void 0:b.mainStatKey)===t,disabled:(null==b?void 0:b.mainStatKey)===t,onClick:()=>wt({mainStatKey:t}),children:(0,U.tZ)(Pt.Rl,{statKey:t})},t)))}),(0,U.tZ)($.s8,{bgt:"light",sx:{p:1,flexGrow:1},children:(0,U.tZ)(ct.Z,{color:"text.secondary",children:b?(0,G.R1)(b.mainStatKey,Ct,Kt):f(ve||(ve=Xe`mainStat`))})}),(0,U.tZ)(st.Z,{disabled:!b,onClick:()=>wt({lock:!(null!=b&&b.lock)}),color:null!=b&&b.lock?"success":"primary",children:null!=b&&b.lock?(0,U.tZ)(M.Z,{}):(0,U.tZ)(H.Z,{})})]}),(0,U.tZ)(fe.W,{location:null!=(u=null==b?void 0:b.location)?u:"",setLocation:t=>wt({location:t}),autoCompleteProps:{disabled:!b}}),(0,U.tZ)(Mt,{valid:kt,efficiency:Rt,t:f}),Rt!==Nt&&(0,U.tZ)(Mt,{max:!0,valid:kt,efficiency:Nt,t:f}),n&&(0,U.tZ)($.s8,{bgt:"light",children:(0,U.tZ)(rt.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,U.BX)(yt.Suspense,{fallback:(0,U.tZ)(ot.Z,{width:"100%",height:"100"}),children:[(0,U.BX)(it.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,U.tZ)(it.ZP,{item:!0,flexGrow:1,children:(0,U.BX)("label",{htmlFor:"contained-button-file",children:[(0,U.tZ)(De,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:O}),(0,U.tZ)(st.Z,{component:"span",startIcon:(0,U.tZ)(z.Z,{}),children:"Upload Screenshot (or Ctrl-V)"})]})}),Ze.dG&&R&&(0,U.tZ)(it.ZP,{item:!0,children:(0,U.tZ)(Ie,{imgs:R})}),(0,U.tZ)(it.ZP,{item:!0,children:(0,U.tZ)(st.Z,{color:"info",sx:{px:2,minWidth:0},onClick:()=>x(!0),children:(0,U.tZ)(q.Z,{})})})]}),E&&(0,U.tZ)(at.Z,{display:"flex",justifyContent:"center",children:(0,U.tZ)(at.Z,{component:"img",src:E,width:"100%",maxWidth:350,height:"auto",alt:X||"Screenshot to parse for artifact values"})}),!!A&&(0,U.tZ)(ut.Z,{variant:"buffer",value:100*S/A,valueBuffer:100*(S+C)/A}),!!A&&(0,U.tZ)($.s8,{sx:{pl:2},children:(0,U.BX)(at.Z,{display:"flex",alignItems:"center",children:[!!C&&(0,U.tZ)(ht.Z,{size:"1em"}),(0,U.tZ)(ct.Z,{sx:{flexGrow:1,ml:1},children:(0,U.BX)("span",{children:["Screenshots in file-queue:",(0,U.tZ)("b",{children:A})]})}),(0,U.tZ)(st.Z,{size:"small",color:"error",onClick:F,children:"Clear file-queue"})]})})]})})})]}),(0,U.BX)(it.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[[0,1,2,3].map((t=>(0,U.tZ)(ie,{index:t,artifact:J,setSubstat:St},t))),D&&(0,U.tZ)($.s8,{bgt:"light",children:(0,U.BX)(rt.Z,{children:[(0,U.tZ)("div",{children:D.slotKey}),(0,U.tZ)("div",{children:D.mainStatKey}),(0,U.tZ)("div",{children:D.mainStatVal}),(0,U.tZ)("div",{children:D.rarity}),(0,U.tZ)("div",{children:D.level}),(0,U.tZ)("div",{children:D.lock}),(0,U.tZ)("div",{children:D.substats}),(0,U.tZ)("div",{children:D.setKey}),(0,U.tZ)("div",{children:D.location})]})})]})]}),N&&(0,U.BX)(it.ZP,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[(0,U.tZ)(it.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,U.BX)($.s8,{bgt:"light",children:[(0,U.tZ)(ct.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:f("edit"!==_?"duplicate"===_?we||(we=Xe`editor.dupArt`):xe||(xe=Xe`editor.upArt`):Se||(Se=Xe`editor.beforeEdit`))}),(0,U.tZ)(Ot.Z,{artifactObj:N})]})}),Ht&&(0,U.tZ)(it.ZP,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:(0,U.tZ)($.s8,{bgt:"light",sx:{display:"flex"},children:(0,U.tZ)(T.Z,{sx:{fontSize:40}})})}),(0,U.tZ)(it.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,U.BX)($.s8,{bgt:"light",children:[(0,U.tZ)(ct.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:f(ke||(ke=Xe`editor.preview`))}),(0,U.tZ)(Ot.Z,{artifactObj:J})]})})]}),!kt&&(0,U.tZ)(ft.Z,{variant:"filled",severity:"error",children:Zt.map(((t,e)=>(0,U.tZ)("div",{children:t},e)))}),(0,U.BX)(it.ZP,{container:!0,spacing:2,children:[(0,U.tZ)(it.ZP,{item:!0,children:"edit"===_?(0,U.tZ)(st.Z,{startIcon:(0,U.tZ)(V.Z,{}),onClick:()=>{b&&Z.arts.set(N.id,b),l||(g(!1),e()),vt()},disabled:!b||!kt,color:"primary",children:f(Ce||(Ce=Xe`editor.btnSave`))}):(0,U.tZ)(st.Z,{startIcon:(0,U.tZ)(V.Z,{}),onClick:()=>{Z.arts.new(b),l||(g(!1),e()),vt()},disabled:!b||!kt,color:"duplicate"===_?"warning":"primary",children:f(Ke||(Ke=Xe`editor.btnAdd`))})}),(0,U.tZ)(it.ZP,{item:!0,flexGrow:1,children:l&&(0,U.tZ)(st.Z,{startIcon:(0,U.tZ)(Y.Z,{}),disabled:!b,onClick:()=>{window.confirm(f(ge||(ge=Xe`editor.clearPrompt`)))&&vt()},color:"error",children:f(Be||(Be=Xe`editor.btnClear`))})}),(0,U.tZ)(it.ZP,{item:!0,children:!1}),N&&"edit"!==_&&(0,U.tZ)(it.ZP,{item:!0,children:(0,U.tZ)(st.Z,{startIcon:(0,U.tZ)(Q.Z,{}),onClick:()=>{b&&Z.arts.set(N.id,b),l?vt():g(!1)},disabled:!b||!kt,color:"success",children:f(Pe||(Pe=Xe`editor.btnUpdate`))})})]})]})]})})}function Ie({imgs:t}){const[e,n]=(0,yt.useState)(!1);return(0,U.BX)(U.HY,{children:[(0,U.tZ)(st.Z,{color:"warning",onClick:()=>n(!0),children:"DEBUG"}),(0,U.tZ)(It.Z,{open:e,onClose:()=>n(!1),children:(0,U.tZ)($.s8,{children:(0,U.tZ)(rt.Z,{children:(0,U.tZ)(Zt.Z,{spacing:1,children:Object.entries(t).map((([t,e])=>(0,U.BX)(at.Z,{children:[(0,U.tZ)(ct.Z,{children:t}),(0,U.tZ)(at.Z,{component:"img",src:e,maxWidth:"100%"})]},t)))})})})})]})}}}]);