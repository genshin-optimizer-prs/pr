"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{48978:(t,e,n)=>{n.r(e),n.d(e,{default:()=>ne});var i=n(31981),a=n(40638),r=n(72718),l=n(30538),s=n(12761);i.Gt.filter((t=>!t.startsWith("Prayers")));var o=n(95178),c=n(67651),d=n(73673),u=n(92252),h=n(32510),Z=n(85219),f=n(16549),m=n(65992),p=n(47746),y=n(86432),g=n(79906),v=n(42523),b=n(7671),w=n(41075),x=n(67550),S=n(38553),k=n(83249),K=n(62197),C=n(94380),B=n(72841),P=n(107),X=n(2784),E=n(21560),I=n(93827),A=n(23485),R=n(36674),G=n(52903);let O,U=t=>t;const W=["rarity","onChange","filter"];function M(t){let{rarity:e,onChange:n,filter:i}=t,a=(0,I.Z)(t,W);const{t:r}=(0,E.$G)("artifact");return(0,G.tZ)(A.Z,Object.assign({},a,{title:e?(0,G.tZ)(R.q,{stars:e,inline:!0}):r(O||(O=U`editor.rarity`)),color:e?"success":"primary",children:[5,4,3].map((t=>(0,G.tZ)(C.Z,{disabled:!i(t),onClick:()=>n(t),children:(0,G.tZ)(R.q,{stars:t,inline:!0})},t)))}))}var j=n(47712),D=n(83993),T=n(82056),L=n(56961),z=n(79199);let $,H=t=>t;const F=["slotKey","onChange","hasUnselect"];function V(t){let{slotKey:e="",onChange:n,hasUnselect:a=!1}=t,r=(0,I.Z)(t,F);const{t:l}=(0,E.$G)(["artifact","ui"]);return(0,G.BX)(A.Z,Object.assign({title:l(e?`artifact:slotName:${e}`:"artifact:slot"),color:e?"success":"primary",startIcon:e?(0,G.tZ)(z.Z,{slotKey:e}):void 0},r,{children:[a&&(0,G.BX)(C.Z,{selected:""===e,disabled:""===e,onClick:()=>n(""),children:[(0,G.tZ)(D.Z,{children:(0,G.tZ)(h.Z,{})}),(0,G.tZ)(T.Z,{children:l($||($=H`ui:unselect`))})]}),a&&(0,G.tZ)(L.Z,{}),i.Ex.map((t=>(0,G.BX)(C.Z,{selected:e===t,disabled:e===t,onClick:()=>n(t),children:[(0,G.tZ)(D.Z,{children:(0,G.tZ)(z.Z,{slotKey:t})}),(0,G.tZ)(T.Z,{children:l(`artifact:slotName:${t}`)})]},t)))]}))}var Y=n(6480),N=n(24264),_=n(87833),J=n(23690),q=n(13780);const Q=["value","onChange","disabled","float"];function tt(t){let{value:e,onChange:n,disabled:i=!1,float:a=!1}=t,r=(0,I.Z)(t,Q);const[l,s]=(0,X.useState)(""),o=(0,X.useCallback)((()=>{if(""===l)return n(0);const t=a?parseFloat:parseInt;n(t(l))}),[n,l,a]);return(0,X.useEffect)((()=>{var t;return s(null!=(t=null==e?void 0:e.toString())?t:"")}),[e,s]),(0,G.tZ)(q.Z,Object.assign({value:l,"aria-label":"custom-input",type:"number",onChange:t=>s(t.target.value),onBlur:o,disabled:i,onKeyDown:t=>"Enter"===t.key&&o()},r))}var et=n(79410),nt=n(69698),it=n(48289),at=n(69614),rt=n(80639),lt=n(34156),st=n(39099),ot=n(30706),ct=n(12702),dt=n(96580);function ut({efficiency:t,max:e=!1,t:n,valid:i}){const a=e?"maxSubEff":"curSubEff";return(0,G.tZ)(_.Z,{sx:{py:1,px:2},children:(0,G.BX)(w.ZP,{container:!0,spacing:1,children:[(0,G.tZ)(w.ZP,{item:!0,children:n(`editor.${a}`)}),(0,G.tZ)(w.ZP,{item:!0,flexGrow:1,children:(0,G.tZ)(ct.Z,{title:(0,G.BX)("span",{children:[(0,G.tZ)(K.Z,{variant:"h6",children:n(`editor.${a}`)}),(0,G.tZ)(K.Z,{children:(0,G.tZ)(E.cC,{t:n,i18nKey:`editor.${a}Desc`})})]})})}),(0,G.tZ)(w.ZP,{item:!0,xs:"auto",children:(0,G.tZ)(dt.Z,{valid:i,max:900,value:i?t:"ERR"})})]})})}var ht=n(66510),Zt=n(89977),ft=n(12366),mt=n(13900),pt=n(25576);let yt,gt,vt,bt,wt,xt,St,kt=t=>t;function Kt({index:t,artifact:e,setSubstat:n}){var a;const{t:o}=(0,E.$G)("artifact"),{mainStatKey:c="",rarity:d=5}=null!=e?e:{},{key:u="",value:h=0,rolls:Z=[],efficiency:f=0}=null!=(a=null==e?void 0:e.substats[t])?a:{},m=Z.reduce(((t,e)=>t+e),0),p=pt.ZP.unit(u),y=Z.length;let g="",v=[],b=0;if(e){const t=e.rarity,{numUpgrades:n,high:a}=i.i0[t];b=n+a-3-y,v=u?(0,l.ME)(u,t):[]}const B=7-v.length;!y&&u&&h&&(g=g||o(yt||(yt=kt`editor.substat.error.noCalc`))),b<0&&(g=g||o("editor.substat.error.noOverRoll",{value:b+y}));const P=(0,X.useMemo)((()=>u?[{value:0},...(0,l.K_)(d,u).map((t=>({value:t})))]:[{value:0}]),[u,d]);return(0,G.BX)(_.Z,{children:[(0,G.tZ)(x.Z,{sx:{display:"flex"},children:(0,G.BX)(S.Z,{size:"small",sx:{width:"100%",display:"flex"},children:[(0,G.BX)(A.Z,{startIcon:u?(0,G.tZ)(st.C,{statKey:u}):void 0,title:u?(0,G.tZ)(Y.w0,{statKey:u}):o("editor.substat.substatFormat",{value:t+1}),disabled:!e,color:u?"success":"primary",sx:{whiteSpace:"nowrap"},children:[u&&(0,G.tZ)(C.Z,{onClick:()=>n(t,{key:"",value:0}),children:o(gt||(gt=kt`editor.substat.noSubstat`))}),i._m.filter((t=>c!==t)).map((e=>(0,G.BX)(C.Z,{selected:u===e,disabled:u===e,onClick:()=>n(t,{key:e,value:0}),children:[(0,G.tZ)(D.Z,{children:(0,G.tZ)(st.C,{statKey:e})}),(0,G.tZ)(T.Z,{children:(0,G.tZ)(Y.w0,{statKey:e})})]},e)))]}),(0,G.tZ)(Zt.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,G.tZ)(Zt.ZP,{float:"%"===p,placeholder:o(vt||(vt=kt`editor.substat.selectSub`)),value:u?h:void 0,onChange:e=>n(t,{key:u,value:null!=e?e:0}),disabled:!u,error:!!g,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!v.length&&(0,G.tZ)(mt.Z,{children:o(bt||(bt=kt`editor.substat.nextRolls`))}),v.map(((e,i)=>{var a,o;let c=(0,l.Jj)(m+e,p);return c=null!=(a=null==(o=r.G.art.subRollCorrection[d])||null==(o=o[u])?void 0:o[c])?a:c,(0,G.tZ)(k.Z,{color:`roll${(0,s.re)(B+i,1,6)}`,disabled:h&&!y||b<=0,onClick:()=>n(t,{key:u,value:parseFloat(c)}),children:c},i)}))]})}),(0,G.tZ)(x.Z,{px:2,children:(0,G.tZ)(Ct,{value:h,marks:P,setValue:e=>{var i;return n(t,{key:u,value:null!=(i=e)?i:0})},disabled:!u})}),(0,G.tZ)(x.Z,{sx:{px:1,pb:1},children:g?(0,G.tZ)(ft.Z,{color:"error",children:o(wt||(wt=kt`ui:error`))}):(0,G.BX)(w.ZP,{container:!0,children:[(0,G.tZ)(w.ZP,{item:!0,children:(0,G.tZ)(ft.Z,{color:0===y?"secondary":`roll${(0,s.re)(y,1,6)}`,children:y?o("editor.substat.RollCount",{count:y}):o(xt||(xt=kt`editor.substat.noRoll`))})}),(0,G.tZ)(w.ZP,{item:!0,flexGrow:1,children:!!Z.length&&[...Z].sort().map(((t,e)=>(0,G.tZ)(K.Z,{component:"span",color:`roll${(0,s.re)(B+v.indexOf(t),1,6)}.main`,sx:{ml:1},children:(0,l.Jj)(t,p)},`${e}.${t}`)))}),(0,G.tZ)(w.ZP,{item:!0,xs:"auto",flexShrink:1,children:(0,G.tZ)(K.Z,{children:(0,G.BX)(E.cC,{t:o,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",(0,G.tZ)(dt.Z,{valid:!0,max:100*y,value:f||o(St||(St=kt`editor.substat.noStat`))})]})})})]})})]})}function Ct({value:t,setValue:e,marks:n,disabled:i=!1}){var a,r;const[l,s]=(0,X.useState)(t);return(0,X.useEffect)((()=>s(t)),[t]),(0,G.tZ)(ht.ZP,{value:l,step:null,disabled:i,marks:n,min:0,max:null!=(a=null==(r=n[n.length-1])?void 0:r.value)?a:0,onChange:(t,e)=>s(e),onChangeCommitted:(t,n)=>e(n),valueLabelDisplay:"auto"})}const Bt=n.p+"scan_art_main.8e6fecde6da1a4ee.png",Pt=n.p+"snippet.5573acbcba497db1.png";function Xt({modalShow:t,hide:e}){return(0,G.tZ)(nt.Z,{open:t,onClose:e,children:(0,G.BX)(N.Z,{children:[(0,G.tZ)(b.Z,{sx:{py:1},children:(0,G.BX)(w.ZP,{container:!0,children:[(0,G.tZ)(w.ZP,{item:!0,flexGrow:1,children:(0,G.tZ)(K.Z,{variant:"subtitle1",children:"How do Upload Screenshots for parsing"})}),(0,G.tZ)(w.ZP,{item:!0,children:(0,G.tZ)(J.Z,{onClick:e})})]})}),(0,G.tZ)(L.Z,{}),(0,G.BX)(b.Z,{children:[(0,G.BX)(P.Z,{variant:"outlined",severity:"warning",children:["NOTE: Artifact Scanning currently only works for",(0,G.tZ)("strong",{children:"ENGLISH"})," artifacts."]}),(0,G.BX)(w.ZP,{container:!0,spacing:1,mt:1,children:[(0,G.tZ)(w.ZP,{item:!0,xs:8,md:4,children:(0,G.tZ)(x.Z,{component:"img",alt:"snippet of the screen to take",src:Pt,width:"100%",height:"auto"})}),(0,G.BX)(w.ZP,{item:!0,xs:12,md:8,children:[(0,G.tZ)(K.Z,{gutterBottom:!0,children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),(0,G.tZ)(K.Z,{variant:"h5",children:"Where to snip the screenshot."}),(0,G.BX)(K.Z,{gutterBottom:!0,children:["In game, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer."," ",(0,G.tZ)("b",{children:"Only artifact from this screen can be scanned."})]}),(0,G.tZ)(K.Z,{variant:"h6",children:"Single artifact"}),(0,G.BX)(K.Z,{gutterBottom:!0,children:["To take a screenshot, in Windows, the shortcut is"," ",(0,G.tZ)("strong",{children:"Shift + WindowsKey + S"}),". Once you selected the region, the image is automatically included in your clipboard."]}),(0,G.tZ)(K.Z,{variant:"h6",children:"Multiple artifacts"}),(0,G.BX)(K.Z,{gutterBottom:!0,children:["To take advantage of batch uploads, you can use a tool like"," ",(0,G.tZ)("a",{href:"https://picpick.app/",target:"_blank",rel:"noreferrer",children:"PicPick"})," ","to create a macro to easily to screenshot a region to screenshot multiple artifacts at once."]}),(0,G.tZ)(K.Z,{variant:"h5",children:"What to include in the screenshot."}),(0,G.BX)(K.Z,{children:["As shown in the Image, starting from the top with the artifact name, all the way to the set name(the text in green)."," "]})]}),(0,G.BX)(w.ZP,{item:!0,xs:12,md:7,children:[(0,G.tZ)(K.Z,{variant:"h5",children:"Adding Screenshot to Genshin Optimizer"}),(0,G.tZ)(K.Z,{children:"At this point, you should have the artifact snippet either saved to your harddrive, or in your clipboard."}),(0,G.tZ)(K.Z,{gutterBottom:!0,children:'You can click on the box next to "Browse" to browse the files in your harddrive for multiple screenshots.'}),(0,G.BX)(K.Z,{children:["For single screenshots from the snippets, just press"," ",(0,G.tZ)("strong",{children:"Ctrl + V"})," to paste from your clipboard."]}),(0,G.BX)(K.Z,{gutterBottom:!0,children:["You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",(0,G.tZ)("b",{children:"Artifact Editor"}),"."]}),(0,G.tZ)(K.Z,{variant:"h5",children:"Finishing the Artifact"}),(0,G.BX)(K.Z,{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",(0,G.tZ)("strong",{children:"Add Artifact"})," to finish editing the artifact."]})]}),(0,G.tZ)(w.ZP,{item:!0,xs:8,md:5,children:(0,G.tZ)(x.Z,{component:"img",alt:"main screen after importing stats",src:Bt,width:"100%",height:"auto"})})]})]}),(0,G.tZ)(L.Z,{}),(0,G.tZ)(b.Z,{sx:{py:1},children:(0,G.tZ)(J.Z,{large:!0,onClick:e})})]})})}var Et=n(24370),It=n(86569);const At={r:255,g:204,b:50},Rt=new class BorrowManager{constructor(t,e){this.data={},this.init=void 0,this.deinit=void 0,this.init=t,this.deinit=e}async borrow(t,e){this.data[t]||(this.data[t]={value:this.init(t),refCount:0});const n=this.data[t];n.refCount+=1;const i=await e(n.value);return n.refCount-=1,n.refCount||(delete this.data[t],this.deinit(t,n.value)),i}}((async t=>{const e=(0,Et.createScheduler)(),n=Array(2).fill(0).map((async n=>{const i=await(0,Et.createWorker)(t,void 0,{errorHandler:console.error,langPath:"./assets"});await i.load(),e.addWorker(i)}));return await Promise.any(n),e}),((t,e)=>{e.then((t=>t.terminate()))})),Gt=(t,e)=>{switch(e.type){case"upload":return{processed:t.processed,outstanding:[...t.outstanding,...e.files]};case"processing":return{processed:t.processed,outstanding:[...t.outstanding]};case"processed":return t.outstanding[0].file===e.file?{processed:[...t.processed,e.result],outstanding:t.outstanding.slice(1)}:t;case"pop":return{processed:t.processed.slice(1),outstanding:t.outstanding};case"clear":return{processed:[],outstanding:[]}}};function Ot(t){if(t.result)return;const{file:e,fileName:n}=t;t.imageURL=Ut(e),t.result=t.imageURL.then((async t=>{const a=await async function(t){const e=await(h=t,new Promise((t=>{const e=new Image;e.onload=({target:e})=>t(function(t){const e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)}(e)),e.src=h}))),n=e.width,i=Math.floor(e.height/2),a=Math.floor(e.width/2),r={rectangle:{top:i,left:0,width:n,height:i}},l=[Wt(jt(e,[140,140,140],[255,255,255],{mode:"bw",region:"top"}),{rectangle:{top:0,left:0,width:a,height:i}}),Wt(jt(e,[30,50,80],[160,160,160],{region:"bot"}),r),Wt(jt(e,[30,160,30],[200,255,200],{mode:"bw",region:"bot"}),r)],o=function(t,e,n){const i=t;let a=0,r=0;const l=new Set([]);for(let o=0;o<n;o++){let t=0,n=!1;for(let a=0;a<e;a++){const r=4*(o*e+a);Mt({r:i[r],g:i[r+1],b:i[r+2]},At)?n||(n=!0,t++):n=!1}a!==t?(a=t,r=1):a&&(r++,r>=10&&l.add((0,s.re)(a,3,5)))}return l}(e.data,e.width,e.height),[c,d,u]=await Promise.all(l);var h;return{whiteTexts:c,substatTexts:d,artifactSetTexts:u,rarities:o}}(t),[r,o]=function(t,e,n,a,r,o){const c=[...new Set([...e,"EmblemOfSeveredFate"])];let d=-1,u=[{setKey:"EmblemOfSeveredFate",rarity:3,level:0,slotKey:"flower",mainStatKey:"hp",substats:[],location:"",lock:!1}];const h=(0,s.K8)(i.$W,(t=>{let n=0;if(e.size){n+=[...e].reduce(((e,n)=>e+((0,it.Sk)(n).rarity.includes(t)?1:0)),0)/e.size}if(a.length){n+=a.reduce(((e,n)=>e+((0,l.UW)(n.key,n.value,t).length?1:0)),0)/a.length*2}return n}));for(const s of i.Ex)for(const t of i.x1[s].stats){const i=(n.has(s)?1:0)+(r.has(t)?1:0),a=o.filter((e=>"%"!==e.unit||"%"===pt.ZP.unit(t))).map((t=>t.mainStatValue));for(const[n,r]of Object.entries(h)){const o=parseInt(n),h=c.filter((t=>(0,it.Sk)(t).rarity.includes(o))),Z=i+r;if(!(Z+2<d)){for(const n of a){const i=(0,l.HD)(o,t),a=Math.max(0,i.findIndex((t=>t>=n))),r=Z+(i[a]===n?1:0);for(const n of h){const i=r+(e.has(n)?1:0);i>=d&&(i>d&&(u=[]),d=i,u.push({setKey:n,rarity:o,level:a,slotKey:s,mainStatKey:t,substats:[],location:"",lock:!1}))}}if(Z>=d){const n=0;for(const i of h){const a=Z+(e.has(i)?1:0);a>d&&(u=[]),d=a,u.push({setKey:i,rarity:o,level:n,slotKey:s,mainStatKey:t,substats:[],location:"",lock:!1})}}}}}const Z={},f={setKey:new Set,rarity:new Set,level:new Set,slotKey:new Set,mainStatKey:new Set,mainStatVal:new Set},m=u[0],p=(0,l.Bv)(m.mainStatKey,m.rarity,m.level);m.substats=a.filter(((t,e)=>t.key!==m.mainStatKey&&a.slice(0,e).every((e=>e.key!==t.key))));for(let i=m.substats.length;i<4;i++)m.substats.push({key:"",value:0});for(const i of u)f.setKey.add(i.setKey),f.rarity.add(i.rarity),f.level.add(i.level),f.slotKey.add(i.slotKey),f.mainStatKey.add(i.mainStatKey);function y(t,e,n){return(0,G.BX)(G.HY,{children:["Unknown ",e," : Set to"," ",(0,G.tZ)(It.Z,{color:"error",children:n(t)})]})}function g(t,e,n,i){return(0,G.BX)(G.HY,{children:["Ambiguous ",n," ",(0,G.tZ)(It.Z,{color:"error",children:i(t)})," : May also be"," ",e.filter((e=>e!==t)).map(((t,e)=>(0,G.BX)(G.HY,{children:[(0,G.tZ)("b",{children:e>0?"/":""}),(0,G.tZ)(It.Z,{color:"warning",children:i(t)})]})))]})}function v(t,e,n){return(0,G.BX)(G.HY,{children:["Detected ",e," ",(0,G.tZ)(It.Z,{color:"success",children:n(t)})]})}function b(t,e,n){return(0,G.BX)(G.HY,{children:["Inferred ",e," ",(0,G.tZ)(It.Z,{color:"warning",children:n(t)})]})}function w(t,e,n,i){const a=new Set([...f[t]].filter((t=>e.has(t))));a.size>1?Z[t]=g(m[t],[...e],n,i):1===a.size?Z[t]=v(m[t],n,i):f[t].size>1?Z[t]=y(m[t],n,i):Z[t]=b(m[t],n,i)}w("setKey",e,"Set",(t=>(0,it.Sk)(t).name)),w("rarity",t,"Rarity",(t=>(0,G.BX)(G.HY,{children:[t," ",1!==t?"Stars":"Star"]}))),w("slotKey",n,"Slot",(t=>i.x1[t].name)),w("mainStatKey",r,"Main Stat",(t=>(0,G.tZ)(G.HY,{children:pt.ZP.getStr(t)}))),Z.substats=(0,G.tZ)(G.HY,{children:m.substats.filter((t=>""!==t.key)).map(((t,e)=>(0,G.tZ)("div",{children:v(t,"Sub Stat",(t=>(0,G.BX)(G.HY,{children:[pt.ZP.getStr(t.key),"+",(0,l.Jj)(t.value,pt.ZP.unit(t.key)),pt.ZP.unit(t.key)]})))},e)))});const x=t=>(0,G.BX)(G.HY,{children:[(0,l.Jj)(t,pt.ZP.unit(m.mainStatKey)),pt.ZP.unit(m.mainStatKey)]});o.find((t=>t.mainStatValue===p))?r.has(m.mainStatKey)?(Z.level=v(m.level,"Level",(t=>"+"+t)),Z.mainStatVal=v(p,"Main Stat value",x)):(Z.level=b(m.level,"Level",(t=>"+"+t)),Z.mainStatVal=b(p,"Main Stat value",x)):(Z.level=y(m.level,"Level",(t=>"+"+t)),Z.mainStatVal=y(p,"Main Stat value",x));return[m,Z]}(a.rarities,function(t){const e=new Set([]);for(const n of t)for(const t of i.Gt)(0,s.UX)(n.replace(/\W/g,""),(0,it.Sk)(t).nameRaw.replace(/\W/g,""))<=2&&e.add(t);return e}(a.artifactSetTexts),function(t){const e=new Set;for(const n of t)for(const t of i.Ex)(0,s.UX)(n.replace(/\W/g,""),i.x1[t].name.replace(/\W/g,""))<=2&&e.add(t);return e}(a.whiteTexts),function(t){const e=[];for(let n of t)n=n.replace(/^[\W]+/,"").replace(/\n/,""),i._m.forEach((t=>{const i=pt.ZP.getStr(t),a=("%"===pt.ZP.unit(t)?new RegExp(i+"\\s*\\+\\s*(\\d+[\\.|,]+\\d)%","im"):new RegExp(i+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(n);a&&e.push({key:t,value:parseFloat(a[1].replace(/,/g,".").replace(/\.{2,}/g,"."))})}));return e.slice(0,4)}(a.substatTexts),function(t){const e=new Set([]);for(const l of t)for(const t of i.rW){var n,a,r;l.toLowerCase().includes(null!=(n=null==(a=pt.ZP.getStr(t))?void 0:a.toLowerCase())?n:"")&&e.add(t),t.includes("_bonu")&&(0,s.UX)(l.replace(/\W/g,""),(null!=(r=pt.ZP.getStr(t))?r:"").replace(/\W/g,""))<=1&&e.add(t)}return e}(a.whiteTexts),function(t){const e=[];for(const n of t){let t=/(\d+[,|\\.]+\d)%/,i=t.exec(n);i&&e.push({mainStatValue:parseFloat(i[1].replace(/,/g,".").replace(/\.{2,}/g,".")),unit:"%"}),t=/(\d+[,|\\.]\d{3}|\d{2,3})/,i=t.exec(n),i&&e.push({mainStatValue:parseInt(i[1].replace(/[,|\\.]+/g,""))})}return e}(a.whiteTexts));return{file:e,result:{fileName:n,imageURL:t,artifact:r,texts:o}}}))}const Ut=t=>new Promise((e=>{const n=new FileReader;n.onloadend=({target:t})=>e(t.result),n.readAsDataURL(t)}));async function Wt(t,e){const n=function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e}(t);return(await Rt.borrow("genshin_fast_09_04_21",(async t=>await(await t).addJob("recognize",n,e)))).data.lines.map((t=>t.text))}function Mt(t,e,n=5){const i=(t,e)=>Math.abs(t-e)<=n;return i(t.r,e.r)&&i(t.g,e.g)&&i(t.b,e.b)}function jt(t,e,n,i){const{region:a="all",mode:r="color"}=i,l=Uint8ClampedArray.from(t.data),s="top"===a,o="bot"===a,c="all"===a,d="bw"===r,u="invert"===r,h=Math.floor(t.width*(t.height/2)*4);for(let Z=0;Z<l.length;Z+=4){const t=l[Z],i=l[Z+1],a=l[Z+2];(c||s&&Z<h||o&&Z>h)&&t>=e[0]&&t<=n[0]&&i>=e[1]&&i<=n[1]&&a>=e[2]&&a<=n[2]?d?l[Z]=l[Z+1]=l[Z+2]=0:u&&(l[Z]=255-t,l[Z+1]=255-i,l[Z+2]=255-a):l[Z]=l[Z+1]=l[Z+2]=255}return new ImageData(l,t.width,t.height)}let Dt,Tt,Lt,zt,$t,Ht,Ft,Vt,Yt,Nt,_t,Jt,qt=t=>t;const Qt=new Set(i._m);function te(t,e){switch(e.type){case"reset":return;case"substat":{const{index:n,substat:i}=e,a=i.key?t.substats.findIndex((t=>t.key===i.key)):-1;return-1===a||a===n?t.substats[n]=i:[t.substats[n],t.substats[a]]=[t.substats[a],t.substats[n]],Object.assign({},t)}case"overwrite":return e.artifact;case"update":return Object.assign({},t,e.artifact)}}const ee=(0,m.ZP)("input")({display:"none"});function ne({artifactIdToEdit:t="",cancelEdit:e,allowUpload:n=!1,allowEmpty:r=!1,disableSet:m=!1,disableSlot:I=!1}){var R,O;const{t:U}=(0,E.$G)("artifact"),{database:W}=(0,X.useContext)(lt.t),[D,T]=(0,X.useState)(!1),[L,z]=(0,o.NW)();(0,X.useEffect)((()=>W.arts.followAny(z)),[W,z]);const[$,H]=(0,X.useReducer)(te,void 0),F=(0,X.useMemo)((()=>$&&(0,rt.BG)($,!0)),[$]),[q,Q]=(0,X.useState)(!1),[{processed:ct,outstanding:dt},ht]=(0,X.useReducer)(Gt,{processed:[],outstanding:[]}),Zt=ct[0],ft=dt[0],mt=(0,o.fJ)((()=>null==ft?void 0:ft.imageURL),[null==ft?void 0:ft.imageURL]),pt=(0,o.fJ)((()=>null==ft?void 0:ft.result),[null==ft?void 0:ft.result]),yt=ct.length+dt.length,gt=null!=(R=null==Zt?void 0:Zt.imageURL)?R:mt,{artifact:vt,texts:bt}=null!=Zt?Zt:{},wt=!(null==F||!F.location)||I;(0,X.useEffect)((()=>{!F&&vt&&H({type:"overwrite",artifact:vt})}),[F,vt,H]),(0,X.useEffect)((()=>{const t=Math.min(16-ct.length,3,dt.length),e=t&&!dt[0].result;dt.slice(0,t).forEach(Ot),e&&ht({type:"processing"})}),[ct.length,dt]),(0,X.useEffect)((()=>{pt&&ht(Object.assign({type:"processed"},pt))}),[pt,ht]);const xt=(0,X.useCallback)((t=>{t&&(T(!0),ht({type:"upload",files:Array.from(t).map((t=>({file:t,fileName:t.name})))}))}),[ht,T]),St=(0,X.useCallback)((()=>ht({type:"clear"})),[ht]);(0,X.useEffect)((()=>{const t=t=>{var e;return xt(null==(e=t.clipboardData)?void 0:e.files)};return n&&window.addEventListener("paste",t),()=>{n&&window.removeEventListener("paste",t)}}),[xt,n]);const kt=(0,X.useCallback)((t=>{t.target&&(xt(t.target.files),t.target.value="")}),[xt]),{old:Ct,oldType:Bt}=(0,X.useMemo)((()=>{var e;const n=L&&t&&W.arts.get(t);if(n)return{old:n,oldType:"edit"};if(void 0===F)return{old:void 0,oldType:""};const{duplicated:i,upgraded:a}=L&&W.arts.findDups(F);return{old:null!=(e=i[0])?e:a[0],oldType:0!==i.length?"duplicate":"upgrade"}}),[F,t,W,L]),{artifact:Pt,errors:Et}=(0,X.useMemo)((()=>{if(!F)return{artifact:void 0,errors:[]};const e=(0,rt.m1)(F,t);return Ct&&(e.artifact.location=Ct.location),e}),[F,t,Ct]);(0,X.useEffect)((()=>{"new"===t&&(T(!0),H({type:"reset"}));const e=t&&L&&W.arts.get(t);e&&(T(!0),H({type:"overwrite",artifact:(0,s.I8)(e)}))}),[t,W,L]);const It=F?(0,it.Sk)(F.setKey):void 0,At=(0,X.useCallback)((()=>{null==e||e(),ht({type:"pop"}),H({type:"reset"})}),[e,H]),Rt=(0,X.useCallback)((t=>{var e,n;const a=t.setKey?(0,it.Sk)(t.setKey):It;function r(t,e,n){return t&&e.includes(t)?t:null!=n?n:e[0]}t.setKey&&(t.rarity=r(null==F?void 0:F.rarity,a.rarity,Math.max(...a.rarity)),t.slotKey=r(null==F?void 0:F.slotKey,a.slots)),t.rarity&&(t.level=null!=(e=null==F?void 0:F.level)?e:0),t.level&&(t.level=(0,s.re)(t.level,0,4*(null!=(n=t.rarity)?n:F.rarity))),t.slotKey&&(t.mainStatKey=r(null==F?void 0:F.mainStatKey,i.x1[t.slotKey].stats)),t.mainStatKey&&(t.substats=[0,1,2,3].map((e=>F&&F.substats[e].key!==t.mainStatKey?F.substats[e]:{key:"",value:0}))),H({type:"update",artifact:t})}),[F,It,H]),Ut=(0,X.useCallback)(((t,e)=>{H({type:"substat",index:t,substat:e})}),[H]),Wt=!Et.length,{rarity:Mt=5,level:jt=0,slotKey:ne="flower"}=null!=F?F:{},{currentEfficiency:ie=0,maxEfficiency:ae=0}=Pt?at.Z.getArtifactEfficiency(Pt,Qt):{},re=ct.length||dt.length,le=(0,X.useCallback)((t=>{re&&t.preventDefault(),T(!1),e()}),[re,T,e]),se=(0,p.Z)(),oe=(0,y.Z)(se.breakpoints.up("md")),ce=F?i.fR.find((t=>F.mainStatKey.includes(t))):void 0,de=F?null!=ce?ce:"success":"primary",ue=(0,X.useCallback)((t=>Rt({setKey:t})),[Rt]),he=(0,X.useCallback)((t=>""===t||!(!wt||"circlet"===ne||"PrayersForDestiny"!==t&&"PrayersForIllumination"!==t&&"PrayersForWisdom"!==t&&"PrayersToSpringtime"!==t)),[wt,ne]);return(0,G.tZ)(nt.Z,{open:D,onClose:le,children:(0,G.tZ)(X.Suspense,{fallback:(0,G.tZ)(g.Z,{variant:"rectangular",sx:{width:"100%",height:D?"100%":64}}),children:(0,G.BX)(N.Z,{children:[(0,G.tZ)(Xt,{modalShow:q,hide:()=>Q(!1)}),(0,G.tZ)(v.Z,{title:(0,G.tZ)(E.cC,{t:U,i18nKey:"editor.title",children:"Artifact Editor"}),action:(0,G.tZ)(J.Z,{disabled:!!re,onClick:le})}),(0,G.BX)(b.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,G.BX)(w.ZP,{container:!0,spacing:1,columns:{xs:1,md:2},children:[(0,G.BX)(w.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[(0,G.BX)(x.Z,{sx:{display:"flex",gap:1},children:[(0,G.tZ)(j.Z,{disabled:m,size:"small",artSetKey:null!=(O=null==F?void 0:F.setKey)?O:"",setArtSetKey:ue,sx:{flexGrow:1},label:null!=F&&F.setKey?"":U("editor.unknownSetName"),getOptionDisabled:({key:t})=>he(t)}),(0,G.tZ)(M,{rarity:F?Mt:void 0,onChange:t=>Rt({rarity:t}),filter:t=>{var e;return!(null==It||null==(e=It.rarity)||null==e.includes||!e.includes(t))},disabled:!It})]}),(0,G.BX)(x.Z,{component:"div",display:"flex",children:[(0,G.tZ)(tt,{id:"filled-basic",label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:jt,disabled:!It,placeholder:"0~"+4*Mt,onChange:t=>Rt({level:t})}),(0,G.BX)(S.Z,{children:[(0,G.tZ)(k.Z,{onClick:()=>Rt({level:jt-1}),disabled:!It||0===jt,children:"-"}),Mt?[...Array(Mt+1).keys()].map((t=>4*t)).map((t=>(0,G.tZ)(k.Z,{onClick:()=>Rt({level:t}),disabled:!It||jt===t,children:t},t))):null,(0,G.tZ)(k.Z,{onClick:()=>Rt({level:jt+1}),disabled:!It||jt===4*Mt,children:"+"})]})]}),(0,G.BX)(x.Z,{component:"div",display:"flex",children:[(0,G.tZ)(V,{disabled:wt||!It,slotKey:ne,onChange:t=>Rt({slotKey:t})}),(0,G.tZ)(_.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,G.tZ)(X.Suspense,{fallback:(0,G.tZ)(g.Z,{width:"60%"}),children:(0,G.tZ)(K.Z,{color:"text.secondary",children:F&&null!=It&&It.getSlotName(F.slotKey)?(0,G.BX)("span",{children:[(0,G.tZ)(et.Z,{size:2,src:(0,a.Hp)(F.setKey,F.slotKey)}),null==It?void 0:It.getSlotName(F.slotKey)]}):U(Tt||(Tt=qt`editor.unknownPieceName`))})})})]}),(0,G.BX)(x.Z,{component:"div",display:"flex",children:[(0,G.tZ)(A.Z,{startIcon:null!=F&&F.mainStatKey?(0,G.tZ)(st.C,{statKey:F.mainStatKey}):void 0,title:(0,G.tZ)("b",{children:F?(0,G.tZ)(Y.w0,{statKey:F.mainStatKey}):U(Lt||(Lt=qt`mainStat`))}),disabled:!It,color:de,children:i.x1[ne].stats.map((t=>(0,G.tZ)(C.Z,{selected:(null==F?void 0:F.mainStatKey)===t,disabled:(null==F?void 0:F.mainStatKey)===t,onClick:()=>Rt({mainStatKey:t}),children:(0,G.tZ)(Y.Rl,{statKey:t})},t)))}),(0,G.tZ)(_.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,G.tZ)(K.Z,{color:"text.secondary",children:F?(0,l.R1)(F.mainStatKey,Mt,jt):U(zt||(zt=qt`mainStat`))})})]}),(0,G.tZ)(ut,{valid:Wt,efficiency:ie,t:U}),ie!==ae&&(0,G.tZ)(ut,{max:!0,valid:Wt,efficiency:ae,t:U}),n&&(0,G.tZ)(_.Z,{children:(0,G.tZ)(b.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,G.BX)(X.Suspense,{fallback:(0,G.tZ)(g.Z,{width:"100%",height:"100"}),children:[(0,G.BX)(w.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,G.tZ)(w.ZP,{item:!0,flexGrow:1,children:(0,G.BX)("label",{htmlFor:"contained-button-file",children:[(0,G.tZ)(ee,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:kt}),(0,G.tZ)(k.Z,{component:"span",startIcon:(0,G.tZ)(c.Z,{}),children:"Upload Screenshot (or Ctrl-V)"})]})}),(0,G.tZ)(w.ZP,{item:!0,children:(0,G.tZ)(k.Z,{color:"info",sx:{px:2,minWidth:0},onClick:()=>Q(!0),children:(0,G.tZ)(f.Z,{})})})]}),gt&&(0,G.tZ)(x.Z,{display:"flex",justifyContent:"center",children:(0,G.tZ)(x.Z,{component:"img",src:gt,width:"100%",maxWidth:350,height:"auto",alt:"Screenshot to parse for artifact values"})}),yt>0&&(0,G.tZ)(N.Z,{sx:{pl:2},children:(0,G.BX)(w.ZP,{container:!0,spacing:1,alignItems:"center",children:[!Zt&&ft&&(0,G.tZ)(w.ZP,{item:!0,children:(0,G.tZ)(B.Z,{size:"1em"})}),(0,G.tZ)(w.ZP,{item:!0,flexGrow:1,children:(0,G.tZ)(K.Z,{children:(0,G.BX)("span",{children:["Screenshots in file-queue:",(0,G.tZ)("b",{children:yt})]})})}),(0,G.tZ)(w.ZP,{item:!0,children:(0,G.tZ)(k.Z,{size:"small",color:"error",onClick:St,children:"Clear file-queue"})})]})})]})})})]}),(0,G.BX)(w.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[[0,1,2,3].map((t=>(0,G.tZ)(Kt,{index:t,artifact:Pt,setSubstat:Ut},t))),bt&&(0,G.tZ)(_.Z,{children:(0,G.BX)(b.Z,{children:[(0,G.tZ)("div",{children:bt.slotKey}),(0,G.tZ)("div",{children:bt.mainStatKey}),(0,G.tZ)("div",{children:bt.mainStatVal}),(0,G.tZ)("div",{children:bt.rarity}),(0,G.tZ)("div",{children:bt.level}),(0,G.tZ)("div",{children:bt.substats}),(0,G.tZ)("div",{children:bt.setKey})]})})]})]}),Ct&&(0,G.BX)(w.ZP,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[(0,G.tZ)(w.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,G.BX)(_.Z,{children:[(0,G.tZ)(K.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:U("edit"!==Bt?"duplicate"===Bt?$t||($t=qt`editor.dupArt`):Ht||(Ht=qt`editor.upArt`):Ft||(Ft=qt`editor.beforeEdit`))}),(0,G.tZ)(ot.Z,{artifactObj:Ct})]})}),oe&&(0,G.tZ)(w.ZP,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:(0,G.tZ)(_.Z,{sx:{display:"flex"},children:(0,G.tZ)(d.Z,{sx:{fontSize:40}})})}),(0,G.tZ)(w.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,G.BX)(_.Z,{children:[(0,G.tZ)(K.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:U(Vt||(Vt=qt`editor.preview`))}),(0,G.tZ)(ot.Z,{artifactObj:Pt})]})})]}),!Wt&&(0,G.tZ)(P.Z,{variant:"filled",severity:"error",children:Et.map(((t,e)=>(0,G.tZ)("div",{children:t},e)))}),(0,G.BX)(w.ZP,{container:!0,spacing:2,children:[(0,G.tZ)(w.ZP,{item:!0,children:"edit"===Bt?(0,G.tZ)(k.Z,{startIcon:(0,G.tZ)(u.Z,{}),onClick:()=>{W.arts.set(Ct.id,$),r?At():(T(!1),e())},disabled:!$||!Wt,color:"primary",children:U(Yt||(Yt=qt`editor.btnSave`))}):(0,G.tZ)(k.Z,{startIcon:(0,G.tZ)(u.Z,{}),onClick:()=>{W.arts.new(F),r?At():(T(!1),e())},disabled:!F||!Wt,color:"duplicate"===Bt?"warning":"primary",children:U(Nt||(Nt=qt`editor.btnAdd`))})}),(0,G.tZ)(w.ZP,{item:!0,flexGrow:1,children:r&&(0,G.tZ)(k.Z,{startIcon:(0,G.tZ)(h.Z,{}),disabled:!F,onClick:()=>{window.confirm(U(Dt||(Dt=qt`editor.clearPrompt`)))&&At()},color:"error",children:U(_t||(_t=qt`editor.btnClear`))})}),(0,G.tZ)(w.ZP,{item:!0,children:!1}),Ct&&"edit"!==Bt&&(0,G.tZ)(w.ZP,{item:!0,children:(0,G.tZ)(k.Z,{startIcon:(0,G.tZ)(Z.Z,{}),onClick:()=>{W.arts.set(Ct.id,Object.assign({},$,{location:Ct.location})),r?At():T(!1)},disabled:!$||!Wt,color:"success",children:U(Jt||(Jt=qt`editor.btnUpdate`))})})]})]})]})})})}}}]);