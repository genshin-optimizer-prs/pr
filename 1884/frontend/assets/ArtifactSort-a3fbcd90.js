import{b as le,r as Se,i as ke,j as Ee,p as i,b4 as we,Z as D,e as h,u as B,n as u,T as m,a0 as fe,W as _e,N as d,a5 as Ce,aa as P,cy as M,a7 as Q,bF as Re,s as Me,a6 as U,cd as Ke,C as Ae,B as oe,a1 as Te,$ as De,bP as ue,cz as $e,bc as se,bp as Ie,bb as Le,Y as je,q as Ve,cA as qe,az as ze,ct as Oe,cB as Be,cC as Pe,cD as Fe,k as We}from"./index-cee1839f.js";import{e as Ge,h as He,k as Ne}from"./LocationName-f0a6d295.js";import{a as Ue,S as de}from"./index-895d4e72.js";import{S as Ye}from"./SlotIcon-03967808.js";import{b as Ze}from"./util-3e22b532.js";import{C as Je,d as Qe,L as Xe,a as et,b as tt}from"./ConditionalWrapper-dee069ad.js";import{B as ce}from"./BootstrapTooltip-782db822.js";import{I as nt,a as it}from"./InfoTooltip-c2f4aa8b.js";import{g as rt}from"./index-820700ae.js";import{C as at}from"./CardActionArea-6f3a6e62.js";function ot(t=""){const n=le();return Ge(n.arts,t)}var X={},st=ke;Object.defineProperty(X,"__esModule",{value:!0});var ct=X.default=void 0,lt=st(Se()),ft=Ee,ut=(0,lt.default)((0,ft.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");ct=X.default=ut;function At({children:t,artifactSheet:n,numInSet:e=5}){return i(we,{placement:"top",title:i(pe,{artifactSheet:n,numInSet:e}),disableInteractive:!0,children:t})}function pe({artifactSheet:t,numInSet:n=5}){return i(h.Suspense,{fallback:i(D,{variant:"rectangular",width:100,height:100}),children:i(dt,{artifactSheet:t,numInSet:n})})}function dt({artifactSheet:t,numInSet:n=5}){const{t:e}=B("sheet");return i(Ce,{spacing:2,sx:{p:1},children:Object.keys(t.setEffects).map(r=>u(d,{sx:{opacity:parseInt(r)<=n?1:.5},children:[i(m,{children:i(fe,{color:"success",children:e(`${r}set`)})}),i(m,{children:i(_e,{ns:`artifact_${t.key}_gen`,key18:`setEffects.${r}`})})]},r))})}function O({value:t,max:n=1,valid:e}){const[r,a]=typeof t=="number"?[`roll${P(Math.floor(t/n*10)-4,1,6)}`,(t*100).toFixed()+"%"]:["secondary",t];return i(fe,{color:e?r:"error",children:a})}const pt=h.lazy(()=>De(()=>import("./ArtifactEditor-608943dd.js"),["./ArtifactEditor-608943dd.js","./index-cee1839f.js","./index-7910cf30.css","./ChevronRight-13448975.js","./index-895d4e72.js","./index-dc93f186.js","./Close-aeb68896.js","./InfoTooltip-c2f4aa8b.js","./BootstrapTooltip-782db822.js","./LockOpen-643a29c0.js","./ArtifactRarityDropdown-34a822da.js","./LocationName-f0a6d295.js","./DropdownButton-f1096ea3.js","./index-820700ae.js","./ConditionalWrapper-dee069ad.js","./ArtifactStatKeyDisplay-e2ec22d0.js","./util-3e22b532.js","./SlotIcon-03967808.js","./Replay-90fd71b7.js","./TextButton-d5a5949f.js","./CardHeader-550417a0.js","./CardActionArea-6f3a6e62.js"],import.meta.url)),yt=new Set(Q);function Tt({artifactId:t,artifactObj:n,onClick:e,onDelete:r,mainStatAssumptionLevel:a=0,effFilter:c=yt,editorProps:f,canEquip:p=!1,extraButtons:E}){var ae;const{t:l}=B(["artifact","ui"]),{t:k}=B("statKey_gen"),v=le(),w=ot(t),s=(ae=n??w)==null?void 0:ae.setKey,o=s&&rt(s),y=h.useCallback(b=>t&&v.arts.set(t,{location:b}),[v,t]),x=!n,[K,S]=h.useState(!1),I=h.useCallback(()=>S(!1),[S]),F=h.useCallback(()=>x&&S(!0),[x,S]),W=h.useCallback(b=>i(at,{onClick:()=>t&&(e==null?void 0:e(t)),sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[e,t]),G=h.useCallback(b=>i(d,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[]),g=n??w,{currentEfficiency:C,maxEfficiency:_,currentEfficiency_:H,maxEfficiency_:N}=h.useMemo(()=>{if(!g)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};const{currentEfficiency:b,maxEfficiency:ge}=M(g,c),{currentEfficiency:be,maxEfficiency:ve}=M(g,new Set(Q));return{currentEfficiency:b,maxEfficiency:ge,currentEfficiency_:be,maxEfficiency_:ve}},[g,c]);if(!g)return null;const{id:ee,lock:L,slotKey:A,setKey:he,rarity:T,level:j,mainStatKey:V,substats:me,location:te=""}=g,ne=Math.max(Math.min(a,T*4),j),q=_!==0,z=o==null?void 0:o.getSlotName(A),ie=o==null?void 0:o.getSlotDesc(A),re=ie&&i(nt,{title:u(d,{children:[i(h.Suspense,{fallback:i(D,{variant:"text",width:100}),children:i(m,{variant:"h6",children:z})}),i(m,{children:ie})]})}),xe=Re.find(b=>V.startsWith(b));return u(h.Suspense,{fallback:i(D,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[f&&i(h.Suspense,{fallback:!1,children:i(pt,{artifactIdToEdit:K?t:"",cancelEdit:I,...f})}),u(Me,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[u(Je,{condition:!!e,wrapper:W,falseWrapper:G,children:[u(d,{className:`grad-${T}star`,sx:{position:"relative",width:"100%"},children:[!e&&i(je,{color:"primary",disabled:!x,onClick:()=>v.arts.set(ee,{lock:!L}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:L?i(Xe,{}):i(et,{})}),u(d,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[u(d,{component:"div",sx:{display:"flex",alignItems:"center",gap:.4,mb:1},children:[i(Ve,{size:"small",label:i("strong",{children:` +${j}`}),color:Ze(j)}),!z&&i(D,{variant:"text",width:100}),z&&i(m,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1.5},children:i("strong",{children:z})}),re||i(D,{width:10})]}),u(m,{color:"text.secondary",variant:"body2",sx:{display:"flex",gap:.5,alignItems:"center"},children:[i(Ye,{iconProps:{fontSize:"inherit"},slotKey:A}),l(`slotName.${A}`)]}),u(m,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[i(de,{statKey:V,iconProps:{sx:{color:`${xe}.main`}}}),i("span",{children:k(V)})]}),i(m,{variant:"h5",children:i("strong",{children:i(U,{color:ne!==j?"warning":void 0,children:Ke(V,T,ne)})})}),i(He,{stars:T,colored:!0})]}),i(d,{sx:{height:"100%",position:"absolute",right:0,top:0},children:i(d,{component:"img",src:Ue(he,A),width:"auto",height:"110%",sx:{float:"right",marginBottom:"-5%",marginTop:"-5%",marginRight:"-5%"}})})]}),u(Ae,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:"0!important",width:"100%"},children:[me.map(b=>!!b.value&&i(ht,{stat:b,effFilter:c,rarity:T},b.key)),u(m,{variant:"caption",sx:{display:"flex",gap:1,alignItems:"center"},children:[i(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.curSubEff`}),i(O,{value:C,max:9,valid:q}),C!==H&&i("span",{children:"/"}),C!==H&&i(O,{value:H,max:9,valid:q})]}),C!==_&&u(m,{variant:"caption",sx:{display:"flex",gap:1},children:[i(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.maxSubEff`}),i(O,{value:_,max:9,valid:q}),_!==N&&i("span",{children:"/"}),_!==N&&i(O,{value:N,max:9,valid:q})]}),i(d,{flexGrow:1}),g.probability!==void 0&&g.probability>=0&&u("strong",{children:["Probability: ",(g.probability*100).toFixed(2),"%"]}),u(m,{color:"success.main",children:[(o==null?void 0:o.name)??"Artifact Set"," ",o&&i(it,{title:i(pe,{artifactSheet:o})})]})]})]}),u(d,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[i(d,{sx:{flexGrow:1},children:x&&p?i(tt,{location:te,setLocation:y}):i(Ne,{location:te})}),u(d,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[x&&f&&i(ce,{title:i(m,{children:l`artifact:edit`}),placement:"top",arrow:!0,children:i(oe,{color:"info",size:"small",onClick:F,children:i(Qe,{})})}),x&&!!r&&i(ce,{title:L?l("artifact:cantDeleteLock"):"",placement:"top",children:i("span",{children:i(oe,{color:"error",size:"small",onClick:()=>r(ee),disabled:L,children:i(Te,{})})})}),E]})]})]})]})}function ht({stat:t,effFilter:n,rarity:e}){var o;const{t:r}=B("statKey_gen"),a=((o=t.rolls)==null?void 0:o.length)??0,c=t.key?ue(t.key):0,f=h.useMemo(()=>t.key?$e(t.key,e):[],[t.key,e]),p=7-f.length,E=`roll${P(a,1,6)}`,l=t.efficiency??0,k=t.key&&n.has(t.key),v=qe(.5+l/5*.5),w=se(t.key),s=h.useMemo(()=>i(d,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:k?1:.3},children:[...t.rolls].sort().map((y,x)=>i(mt,{value:100*y/c,color:`roll${P(p+f.indexOf(y),1,6)}.main`},`${x}${y}`))}),[k,t.rolls,c,f,p]);return u(d,{display:"flex",gap:1,alignContent:"center",children:[u(m,{sx:{flexGrow:1},color:a?`${E}.main`:"error.main",component:"span",children:[i(de,{statKey:t.key,iconProps:Ie})," ",r(t.key),`+${Le(t.value,se(t.key))}${w}`]}),s,u(m,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:[(l*100).toFixed(),"%"]})]})}function mt({color:t="red",value:n=50}){return i(d,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:i(d,{sx:{width:10,height:`${100-P(n,0,100)}%`,bgcolor:"gray"}})})}const Z=[3,4,6],Y={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},ye={};function $(t,n,e,r){if(t.length===5){Be(ye,t,r);return}for(const a of Z)n[a]>0&&$([...t,a],{...n,[a]:n[a]-a},e-a,r*n[a]/e)}$([0],{3:6,4:20,6:18},44,1);$([3],{3:3,4:20,6:18},41,1);$([4],{3:6,4:16,6:18},40,1);$([6],{3:6,4:20,6:12},38,1);const J=Array(6).fill(0).map((t,n)=>{const e=[1];let r=0,a=1;for(;++r<=n;)a*=n-r+1,a/=r,e.push(a);return e}),R=[[1]];for(;R.length<6;){const t=R[R.length-1],n=Array(t.length+3).fill(0);t.forEach((e,r)=>{for(const a of[0,1,2,3])n[r+a]+=e}),R.push(n.map(e=>e/4))}for(const t of R){let n=t.reduce((e,r)=>e+r);t.forEach((e,r,a)=>{a[r]=n,n-=e})}function xt(t,n){if(t.rarity<=2)return NaN;const{rarity:e,level:r,substats:a}=t,c={...n},f=new Set(Object.keys(c));let p=0;{const s=t.mainStatKey;if(s in c){const o=e*4;if(ze.art.main[e][s][o]<c[s])return 0;delete c[s],f.delete(s)}}for(const{key:s,value:o}of a)s?f.has(s)&&(f.delete(s),c[s]>o?c[s]-=o:delete c[s]):p+=1;if(p+=4-a.length,f.size>p||Object.keys(c).length>4)return 0;const E=Pe(r,e)-p;for(const[s,o]of Object.entries(c))c[s]=Math.max(Math.ceil(10*o/ue(s,e)),1);let l=0;const k=Object.entries(c).map(([s,o])=>{const y=f.has(s)?1:0,x=Math.ceil(o/10)-y;return l+=x,{target:o,filler:y,minUpgrade:x}}).reverse();if(l>E)return 0;let v={[E]:1};const w=E-l;return k.forEach(({target:s,filler:o,minUpgrade:y},x)=>{const K={};for(let S=y;S<=y+w;S++){const I=s-7*(S+o),F=I>0?R[S+o][I]:1;for(const[W,G]of Object.entries(v)){const g=parseInt(W);if(g<S)continue;const C=gt(g,S,4-x),_=g-S;K[_]=(K[_]??0)+G*F*C}}v=K}),bt(t.mainStatKey,a,f)*Object.values(v).reduce((s,o)=>s+o)}function gt(t,n,e){return J[t][n]*Math.pow(e-1,t-n)/Math.pow(e,t)}function bt(t,n,e){const r=Y[t]??0;let a=0;const c={3:2,4:5,6:3};let f=ye[r];for(const{key:l}of n)if(l){const k=Y[l];f=f[k],c[k]-=1}r&&(c[r]-=1);const p={3:0,4:0,6:0};for(const l of e)p[Y[l]]+=1;let E=0;Oe(f,[],l=>typeof l=="number",(l,k)=>{E+=l;const v={3:0,4:0,6:0};for(const s of k)v[s]+=1;let w=l;for(const s of Z){const o=v[s],y=p[s];if(o<y)return;w*=J[o][y]}a+=w});for(const l of Z)a/=J[c[l]][p[l]];return a/E}const Dt=["rarity","level","artsetkey","efficiency","mefficiency","probability"];function $t(){return{artSetKeys:[],rarity:[...Fe],levelLow:0,levelHigh:20,slotKeys:[...We],mainStatKeys:[],substats:[],locations:[],showEquipped:!0,showInventory:!0,locked:["locked","unlocked"],rvLow:0,rvHigh:900,useMaxRV:!1,lines:[1,2,3,4]}}function It(t,n){return{rarity:e=>e.rarity??0,level:e=>e.level??0,artsetkey:e=>e.setKey??"",efficiency:e=>M(e,t).currentEfficiency,mefficiency:e=>M(e,t).maxEfficiency,probability:e=>{if(!Object.keys(n).length)return 0;const r=e.probability;return r===void 0?xt(e,n):r}}}function Lt(t=new Set(Q)){return{locked:(n,e)=>!(!e.includes("locked")&&n.lock||!e.includes("unlocked")&&!n.lock),locations:(n,e,r)=>n.location&&!r.showEquipped?e.includes(n.location):!0,showEquipped:()=>!0,showInventory:(n,e)=>n.location?!0:e,artSetKeys:(n,e)=>e.length?e.includes(n.setKey):!0,slotKeys:(n,e)=>e.includes(n.slotKey),mainStatKeys:(n,e)=>e.length?e.includes(n.mainStatKey):!0,levelLow:(n,e)=>e<=n.level,levelHigh:(n,e)=>e>=n.level,rvLow:(n,e,r)=>{if(e===0)return!0;e=e/100;const{useMaxRV:a}=r,{currentEfficiency:c,maxEfficiency:f}=M(n,t);return e<=(a?f:c)},rvHigh:(n,e,r)=>{if(e===900)return!0;e=e/100;const{useMaxRV:a}=r,{currentEfficiency:c,maxEfficiency:f}=M(n,t);return e>=(a?f:c)},useMaxRV:()=>!0,rarity:(n,e)=>e.includes(n.rarity),substats:(n,e)=>{for(const r of e)if(r&&!n.substats.some(a=>a.key===r))return!1;return!0},lines:(n,e)=>[0,...e].includes(n.substats.filter(r=>r.value).length)}}const jt={level:["level","rarity","artsetkey"],rarity:["rarity","level","artsetkey"],artsetkey:["artsetkey","rarity","level"],efficiency:["efficiency"],mefficiency:["mefficiency"],probability:["probability"]};export{Tt as A,O as P,mt as S,It as a,Lt as b,jt as c,ct as d,Dt as e,At as f,$t as i,xt as p,ot as u};