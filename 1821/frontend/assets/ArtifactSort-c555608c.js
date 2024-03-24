import{b as le,r as Se,i as Ee,j as ke,p as n,V as D,e as h,u as P,n as u,T as m,K as d,a0 as we,a4 as B,a1 as Z,bE as _e,s as Ce,q as Ae,ch as Ke,C as Me,B as ce,X as Re,_ as Te,bO as fe,cC as De,bK as se,bo as Ie,b7 as $e,U as Le,cD as je,at as Ve,cx as Oe,cE as qe,cF as ze,cG as Pe,k as Be}from"./index-bf826dbc.js";import{T as Fe,a as Ge,S as ue}from"./index-03c7cd96.js";import{b as We,e as He,h as Ne}from"./StarDisplay-039aac45.js";import{C as Ue,d as Xe,L as Je,a as Qe,b as Ye}from"./ConditionalWrapper-a49607f3.js";import{B as J}from"./BootstrapTooltip-47bd9cca.js";import{S as de}from"./SqBadge-beffe4bd.js";import{S as Ze}from"./SlotIcon-2ee2caa9.js";import{C as U}from"./ColoredText-c01d8682.js";import{I as et,a as tt}from"./InfoTooltip-cd99c952.js";import{g as it}from"./index-24d0b088.js";import{A as C}from"./Artifact-8c5c456a.js";import{C as nt}from"./CardActionArea-2cac6d04.js";function rt(t=""){const i=le();return We(i.arts,t)}var ee={},at=Ee;Object.defineProperty(ee,"__esModule",{value:!0});var ot=ee.default=void 0,ct=at(Se()),st=ke,lt=(0,ct.default)((0,st.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");ot=ee.default=lt;function Rt({children:t,artifactSheet:i,numInSet:e=5}){return n(J,{placement:"top",title:n(ye,{artifactSheet:i,numInSet:e}),disableInteractive:!0,children:t})}function ye({artifactSheet:t,numInSet:i=5}){return n(h.Suspense,{fallback:n(D,{variant:"rectangular",width:100,height:100}),children:n(ft,{artifactSheet:t,numInSet:i})})}function ft({artifactSheet:t,numInSet:i=5}){const{t:e}=P("sheet");return n(we,{spacing:2,sx:{p:1},children:Object.keys(t.setEffects).map(r=>u(d,{sx:{opacity:parseInt(r)<=i?1:.5},children:[n(m,{children:n(de,{color:"success",children:e(`${r}set`)})}),n(m,{children:n(Fe,{ns:`artifact_${t.key}_gen`,key18:`setEffects.${r}`})})]},r))})}function z({value:t,max:i=1,valid:e}){const[r,a]=typeof t=="number"?[`roll${B(Math.floor(t/i*10)-4,1,6)}`,t.toFixed()+"%"]:["secondary",t];return n(de,{color:e?r:"error",children:a})}const ut=h.lazy(()=>Te(()=>import("./ArtifactEditor-af25408d.js"),["./ArtifactEditor-af25408d.js","./index-bf826dbc.js","./index-a7522257.css","./ChevronRight-e4567651.js","./index-03c7cd96.js","./ColoredText-c01d8682.js","./SqBadge-beffe4bd.js","./Close-460b4375.js","./InfoTooltip-cd99c952.js","./BootstrapTooltip-47bd9cca.js","./LockOpen-084d168a.js","./ArtifactRarityDropdown-13c98bdb.js","./index-24d0b088.js","./ConditionalWrapper-a49607f3.js","./StarDisplay-039aac45.js","./DropdownButton-77201243.js","./ArtifactStatKeyDisplay-71cd60be.js","./Artifact-8c5c456a.js","./SlotIcon-2ee2caa9.js","./TextButton-338e43b5.js","./CardHeader-b4c27393.js","./CardActionArea-2cac6d04.js"],import.meta.url)),dt=new Set(Z);function Tt({artifactId:t,artifactObj:i,onClick:e,onDelete:r,mainStatAssumptionLevel:a=0,effFilter:s=dt,editorProps:f,canEquip:y=!1,extraButtons:k}){var oe;const{t:l}=P(["artifact","ui"]),{t:E}=P("statKey_gen"),v=le(),w=rt(t),c=(oe=i??w)==null?void 0:oe.setKey,o=c&&it(c),p=h.useCallback(b=>t&&v.arts.set(t,{location:b}),[v,t]),x=!i,[M,S]=h.useState(!1),$=h.useCallback(()=>S(!1),[S]),F=h.useCallback(()=>x&&S(!0),[x,S]),G=h.useCallback(b=>n(nt,{onClick:()=>t&&(e==null?void 0:e(t)),sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[e,t]),W=h.useCallback(b=>n(d,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[]),g=i??w,{currentEfficiency:A,maxEfficiency:_,currentEfficiency_:H,maxEfficiency_:N}=h.useMemo(()=>{if(!g)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};const{currentEfficiency:b,maxEfficiency:ge}=C.getArtifactEfficiency(g,s),{currentEfficiency:be,maxEfficiency:ve}=C.getArtifactEfficiency(g,new Set(Z));return{currentEfficiency:b,maxEfficiency:ge,currentEfficiency_:be,maxEfficiency_:ve}},[g,s]);if(!g)return null;const{id:te,lock:L,slotKey:R,setKey:he,rarity:T,level:j,mainStatKey:V,substats:me,location:ie=""}=g,ne=Math.max(Math.min(a,T*4),j),O=_!==0,q=o==null?void 0:o.getSlotName(R),re=o==null?void 0:o.getSlotDesc(R),ae=re&&n(et,{title:u(d,{children:[n(h.Suspense,{fallback:n(D,{variant:"text",width:100}),children:n(m,{variant:"h6",children:q})}),n(m,{children:re})]})}),xe=_e.find(b=>V.startsWith(b));return u(h.Suspense,{fallback:n(D,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[f&&n(h.Suspense,{fallback:!1,children:n(ut,{artifactIdToEdit:M?t:"",cancelEdit:$,...f})}),u(Ce,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[u(Ue,{condition:!!e,wrapper:G,falseWrapper:W,children:[u(d,{className:`grad-${T}star`,sx:{position:"relative",width:"100%"},children:[!e&&n(Le,{color:"primary",disabled:!x,onClick:()=>v.arts.set(te,{lock:!L}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:L?n(Je,{}):n(Qe,{})}),u(d,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[u(d,{component:"div",sx:{display:"flex",alignItems:"center",gap:.4,mb:1},children:[n(Ae,{size:"small",label:n("strong",{children:` +${j}`}),color:C.levelVariant(j)}),!q&&n(D,{variant:"text",width:100}),q&&n(m,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1.5},children:n("strong",{children:q})}),ae||n(D,{width:10})]}),u(m,{color:"text.secondary",variant:"body2",sx:{display:"flex",gap:.5,alignItems:"center"},children:[n(Ze,{iconProps:{fontSize:"inherit"},slotKey:R}),l(`slotName.${R}`)]}),u(m,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[n(ue,{statKey:V,iconProps:{sx:{color:`${xe}.main`}}}),n("span",{children:E(V)})]}),n(m,{variant:"h5",children:n("strong",{children:n(U,{color:ne!==j?"warning":void 0,children:Ke(V,T,ne)})})}),n(He,{stars:T,colored:!0})]}),n(d,{sx:{height:"100%",position:"absolute",right:0,top:0},children:n(d,{component:"img",src:Ge(he,R),width:"auto",height:"110%",sx:{float:"right",marginBottom:"-5%",marginTop:"-5%",marginRight:"-5%"}})})]}),u(Me,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:"0!important",width:"100%"},children:[me.map(b=>!!b.value&&n(yt,{stat:b,effFilter:s,rarity:T},b.key)),u(m,{variant:"caption",sx:{display:"flex",gap:1,alignItems:"center"},children:[n(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.curSubEff`}),n(z,{value:A,max:900,valid:O}),A!==H&&n("span",{children:"/"}),A!==H&&n(z,{value:H,max:900,valid:O})]}),A!==_&&u(m,{variant:"caption",sx:{display:"flex",gap:1},children:[n(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.maxSubEff`}),n(z,{value:_,max:900,valid:O}),_!==N&&n("span",{children:"/"}),_!==N&&n(z,{value:N,max:900,valid:O})]}),n(d,{flexGrow:1}),g.probability!==void 0&&g.probability>=0&&u("strong",{children:["Probability: ",(g.probability*100).toFixed(2),"%"]}),u(m,{color:"success.main",children:[(o==null?void 0:o.name)??"Artifact Set"," ",o&&n(tt,{title:n(ye,{artifactSheet:o})})]})]})]}),u(d,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[n(d,{sx:{flexGrow:1},children:x&&y?n(Ye,{location:ie,setLocation:p}):n(Ne,{location:ie})}),u(d,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[x&&f&&n(J,{title:n(m,{children:l`artifact:edit`}),placement:"top",arrow:!0,children:n(ce,{color:"info",size:"small",onClick:F,children:n(Xe,{})})}),x&&!!r&&n(J,{title:L?l("artifact:cantDeleteLock"):"",placement:"top",children:n("span",{children:n(ce,{color:"error",size:"small",onClick:()=>r(te),disabled:L,children:n(Re,{})})})}),k]})]})]})]})}function yt({stat:t,effFilter:i,rarity:e}){var o;const{t:r}=P("statKey_gen"),a=((o=t.rolls)==null?void 0:o.length)??0,s=t.key?fe(t.key):0,f=h.useMemo(()=>t.key?De(t.key,e):[],[t.key,e]),y=7-f.length,k=`roll${B(a,1,6)}`,l=t.efficiency??0,E=t.key&&i.has(t.key),v=je(.5+l/(100*5)*.5),w=se.unit(t.key),c=h.useMemo(()=>n(d,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:E?1:.3},children:[...t.rolls].sort().map((p,x)=>n(pt,{value:100*p/s,color:`roll${B(y+f.indexOf(p),1,6)}.main`},`${x}${p}`))}),[E,t.rolls,s,f,y]);return u(d,{display:"flex",gap:1,alignContent:"center",children:[u(m,{sx:{flexGrow:1},color:a?`${k}.main`:"error.main",component:"span",children:[n(ue,{statKey:t.key,iconProps:Ie})," ",r(t.key),`+${$e(t.value,se.unit(t.key))}${w}`]}),c,u(m,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:[l.toFixed(),"%"]})]})}function pt({color:t="red",value:i=50}){return n(d,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:n(d,{sx:{width:10,height:`${100-B(i,0,100)}%`,bgcolor:"gray"}})})}const Q=[3,4,6],X={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},pe={};function I(t,i,e,r){if(t.length===5){qe(pe,t,r);return}for(const a of Q)i[a]>0&&I([...t,a],{...i,[a]:i[a]-a},e-a,r*i[a]/e)}I([0],{3:6,4:20,6:18},44,1);I([3],{3:3,4:20,6:18},41,1);I([4],{3:6,4:16,6:18},40,1);I([6],{3:6,4:20,6:12},38,1);const Y=Array(6).fill(0).map((t,i)=>{const e=[1];let r=0,a=1;for(;++r<=i;)a*=i-r+1,a/=r,e.push(a);return e}),K=[[1]];for(;K.length<6;){const t=K[K.length-1],i=Array(t.length+3).fill(0);t.forEach((e,r)=>{for(const a of[0,1,2,3])i[r+a]+=e}),K.push(i.map(e=>e/4))}for(const t of K){let i=t.reduce((e,r)=>e+r);t.forEach((e,r,a)=>{a[r]=i,i-=e})}function ht(t,i){if(t.rarity<=2)return NaN;const{rarity:e,level:r,substats:a}=t,s={...i},f=new Set(Object.keys(s));let y=0;{const c=t.mainStatKey;if(c in s){const o=e*4;if(Ve.art.main[e][c][o]<s[c])return 0;delete s[c],f.delete(c)}}for(const{key:c,value:o}of a)c?f.has(c)&&(f.delete(c),s[c]>o?s[c]-=o:delete s[c]):y+=1;if(y+=4-a.length,f.size>y||Object.keys(s).length>4)return 0;const k=ze(r,e)-y;for(const[c,o]of Object.entries(s))s[c]=Math.max(Math.ceil(10*o/fe(c,e)),1);let l=0;const E=Object.entries(s).map(([c,o])=>{const p=f.has(c)?1:0,x=Math.ceil(o/10)-p;return l+=x,{target:o,filler:p,minUpgrade:x}}).reverse();if(l>k)return 0;let v={[k]:1};const w=k-l;return E.forEach(({target:c,filler:o,minUpgrade:p},x)=>{const M={};for(let S=p;S<=p+w;S++){const $=c-7*(S+o),F=$>0?K[S+o][$]:1;for(const[G,W]of Object.entries(v)){const g=parseInt(G);if(g<S)continue;const A=mt(g,S,4-x),_=g-S;M[_]=(M[_]??0)+W*F*A}}v=M}),xt(t.mainStatKey,a,f)*Object.values(v).reduce((c,o)=>c+o)}function mt(t,i,e){return Y[t][i]*Math.pow(e-1,t-i)/Math.pow(e,t)}function xt(t,i,e){const r=X[t]??0;let a=0;const s={3:2,4:5,6:3};let f=pe[r];for(const{key:l}of i)if(l){const E=X[l];f=f[E],s[E]-=1}r&&(s[r]-=1);const y={3:0,4:0,6:0};for(const l of e)y[X[l]]+=1;let k=0;Oe(f,[],l=>typeof l=="number",(l,E)=>{k+=l;const v={3:0,4:0,6:0};for(const c of E)v[c]+=1;let w=l;for(const c of Q){const o=v[c],p=y[c];if(o<p)return;w*=Y[o][p]}a+=w});for(const l of Q)a/=Y[s[l]][y[l]];return a/k}const Dt=["rarity","level","artsetkey","efficiency","mefficiency","probability"];function It(){return{artSetKeys:[],rarity:[...Pe],levelLow:0,levelHigh:20,slotKeys:[...Be],mainStatKeys:[],substats:[],locations:[],showEquipped:!0,showInventory:!0,locked:["locked","unlocked"],rvLow:0,rvHigh:900,useMaxRV:!1,lines:[1,2,3,4]}}function $t(t,i){return{rarity:e=>e.rarity??0,level:e=>e.level??0,artsetkey:e=>e.setKey??"",efficiency:e=>C.getArtifactEfficiency(e,t).currentEfficiency,mefficiency:e=>C.getArtifactEfficiency(e,t).maxEfficiency,probability:e=>{if(!Object.keys(i).length)return 0;const r=e.probability;return r===void 0?ht(e,i):r}}}function Lt(t=new Set(Z)){return{locked:(i,e)=>!(!e.includes("locked")&&i.lock||!e.includes("unlocked")&&!i.lock),locations:(i,e,r)=>i.location&&!r.showEquipped?e.includes(i.location):!0,showEquipped:()=>!0,showInventory:(i,e)=>i.location?!0:e,artSetKeys:(i,e)=>e.length?e.includes(i.setKey):!0,slotKeys:(i,e)=>e.includes(i.slotKey),mainStatKeys:(i,e)=>e.length?e.includes(i.mainStatKey):!0,levelLow:(i,e)=>e<=i.level,levelHigh:(i,e)=>e>=i.level,rvLow:(i,e,r)=>{if(e===0)return!0;const{useMaxRV:a}=r,{currentEfficiency:s,maxEfficiency:f}=C.getArtifactEfficiency(i,t);return e<=(a?f:s)},rvHigh:(i,e,r)=>{if(e===900)return!0;const{useMaxRV:a}=r,{currentEfficiency:s,maxEfficiency:f}=C.getArtifactEfficiency(i,t);return e>=(a?f:s)},useMaxRV:()=>!0,rarity:(i,e)=>e.includes(i.rarity),substats:(i,e)=>{for(const r of e)if(r&&!i.substats.some(a=>a.key===r))return!1;return!0},lines:(i,e)=>[0,...e].includes(i.substats.filter(r=>r.value).length)}}const jt={level:["level","rarity","artsetkey"],rarity:["rarity","level","artsetkey"],artsetkey:["artsetkey","rarity","level"],efficiency:["efficiency"],mefficiency:["mefficiency"],probability:["probability"]};export{Tt as A,z as P,pt as S,$t as a,Lt as b,jt as c,ot as d,Dt as e,Rt as f,It as i,ht as p,rt as u};
