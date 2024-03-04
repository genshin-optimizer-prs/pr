import{b as le,r as Se,i as ke,j as Ee,p as n,U as D,e as h,u as z,n as u,T as m,K as d,Z as we,a0 as P,$ as Y,bh as _e,s as Ce,q as Ae,cg as Me,C as Ke,B as ce,W as Re,_ as Te,bM as fe,cB as De,bi as se,bl as $e,bf as Ie,aB as Le,cC as je,ar as Ve,cD as qe,cE as Oe,cF as Be,cG as ze,k as Pe}from"./index-85f571eb.js";import{T as Fe,d as We,S as ue}from"./index-c6916edb.js";import{u as Ge,C as He,b as Ne,L as Ue}from"./StarDisplay-c7028858.js";import{d as Ze,c as Je,e as Qe,f as Xe}from"./LocationAutocomplete-7dfc248e.js";import{B as J}from"./BootstrapTooltip-12ba52c3.js";import{S as de}from"./SqBadge-7a88fd35.js";import{S as Ye}from"./SlotIcon-803fe524.js";import{C as U}from"./ColoredText-6f2ddc07.js";import{I as et,a as tt}from"./InfoTooltip-5d7d005a.js";import{g as it}from"./index-2a8dfe8e.js";import{A as C}from"./Artifact-9dd1d8ba.js";import{C as nt}from"./CardActionArea-e8fb9135.js";function rt(t=""){const i=le();return Ge(i.arts,t)}var ee={},at=ke;Object.defineProperty(ee,"__esModule",{value:!0});var ot=ee.default=void 0,ct=at(Se()),st=Ee,lt=(0,ct.default)((0,st.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");ot=ee.default=lt;function Rt({children:t,artifactSheet:i,numInSet:e=5}){return n(J,{placement:"top",title:n(ye,{artifactSheet:i,numInSet:e}),disableInteractive:!0,children:t})}function ye({artifactSheet:t,numInSet:i=5}){return n(h.Suspense,{fallback:n(D,{variant:"rectangular",width:100,height:100}),children:n(ft,{artifactSheet:t,numInSet:i})})}function ft({artifactSheet:t,numInSet:i=5}){const{t:e}=z("sheet");return n(we,{spacing:2,sx:{p:1},children:Object.keys(t.setEffects).map(r=>u(d,{sx:{opacity:parseInt(r)<=i?1:.5},children:[n(m,{children:n(de,{color:"success",children:e(`${r}set`)})}),n(m,{children:n(Fe,{ns:`artifact_${t.key}_gen`,key18:`setEffects.${r}`})})]},r))})}function B({value:t,max:i=1,valid:e}){const[r,a]=typeof t=="number"?[`roll${P(Math.floor(t/i*10)-4,1,6)}`,t.toFixed()+"%"]:["secondary",t];return n(de,{color:e?r:"error",children:a})}const ut=h.lazy(()=>Te(()=>import("./ArtifactEditor-50969000.js"),["./ArtifactEditor-50969000.js","./index-85f571eb.js","./index-a6b0c34d.css","./ArtifactRarityDropdown-80645481.js","./index-2a8dfe8e.js","./index-c6916edb.js","./ColoredText-6f2ddc07.js","./SqBadge-7a88fd35.js","./LocationAutocomplete-7dfc248e.js","./StarDisplay-c7028858.js","./DropdownButton-3516353a.js","./ArtifactStatKeyDisplay-dcd3a01b.js","./Artifact-9dd1d8ba.js","./BootstrapTooltip-12ba52c3.js","./LockOpen-7a04593a.js","./SlotIcon-803fe524.js","./CloseButton-fc3ad92f.js","./InfoTooltip-5d7d005a.js","./TextButton-9964fe40.js","./CardHeader-ef740490.js","./ChevronRight-ec29cd23.js","./CardActionArea-e8fb9135.js"],import.meta.url)),dt=new Set(Y);function Tt({artifactId:t,artifactObj:i,onClick:e,onDelete:r,mainStatAssumptionLevel:a=0,effFilter:s=dt,editorProps:f,canEquip:y=!1,extraButtons:E}){var oe;const{t:l}=z(["artifact","ui"]),{t:k}=z("statKey_gen"),v=le(),w=rt(t),c=(oe=i??w)==null?void 0:oe.setKey,o=c&&it(c),p=h.useCallback(b=>t&&v.arts.set(t,{location:b}),[v,t]),x=!i,[K,S]=h.useState(!1),I=h.useCallback(()=>S(!1),[S]),F=h.useCallback(()=>x&&S(!0),[x,S]),W=h.useCallback(b=>n(nt,{onClick:()=>t&&(e==null?void 0:e(t)),sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[e,t]),G=h.useCallback(b=>n(d,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[]),g=i??w,{currentEfficiency:A,maxEfficiency:_,currentEfficiency_:H,maxEfficiency_:N}=h.useMemo(()=>{if(!g)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};const{currentEfficiency:b,maxEfficiency:ge}=C.getArtifactEfficiency(g,s),{currentEfficiency:be,maxEfficiency:ve}=C.getArtifactEfficiency(g,new Set(Y));return{currentEfficiency:b,maxEfficiency:ge,currentEfficiency_:be,maxEfficiency_:ve}},[g,s]);if(!g)return null;const{id:te,lock:L,slotKey:R,setKey:he,rarity:T,level:j,mainStatKey:V,substats:me,location:ie=""}=g,ne=Math.max(Math.min(a,T*4),j),q=_!==0,O=o==null?void 0:o.getSlotName(R),re=o==null?void 0:o.getSlotDesc(R),ae=re&&n(et,{title:u(d,{children:[n(h.Suspense,{fallback:n(D,{variant:"text",width:100}),children:n(m,{variant:"h6",children:O})}),n(m,{children:re})]})}),xe=_e.find(b=>V.startsWith(b));return u(h.Suspense,{fallback:n(D,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[f&&n(h.Suspense,{fallback:!1,children:n(ut,{artifactIdToEdit:K?t:"",cancelEdit:I,...f})}),u(Ce,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[u(He,{condition:!!e,wrapper:W,falseWrapper:G,children:[u(d,{className:`grad-${T}star`,sx:{position:"relative",width:"100%"},children:[!e&&n(Le,{color:"primary",disabled:!x,onClick:()=>v.arts.set(te,{lock:!L}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:L?n(Je,{}):n(Qe,{})}),u(d,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[u(d,{component:"div",sx:{display:"flex",alignItems:"center",gap:.4,mb:1},children:[n(Ae,{size:"small",label:n("strong",{children:` +${j}`}),color:C.levelVariant(j)}),!O&&n(D,{variant:"text",width:100}),O&&n(m,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1.5},children:n("strong",{children:O})}),ae||n(D,{width:10})]}),u(m,{color:"text.secondary",variant:"body2",sx:{display:"flex",gap:.5,alignItems:"center"},children:[n(Ye,{iconProps:{fontSize:"inherit"},slotKey:R}),l(`slotName.${R}`)]}),u(m,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[n(ue,{statKey:V,iconProps:{sx:{color:`${xe}.main`}}}),n("span",{children:k(V)})]}),n(m,{variant:"h5",children:n("strong",{children:n(U,{color:ne!==j?"warning":void 0,children:Me(V,T,ne)})})}),n(Ne,{stars:T,colored:!0})]}),n(d,{sx:{height:"100%",position:"absolute",right:0,top:0},children:n(d,{component:"img",src:We(he,R),width:"auto",height:"110%",sx:{float:"right",marginBottom:"-5%",marginTop:"-5%",marginRight:"-5%"}})})]}),u(Ke,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:"0!important",width:"100%"},children:[me.map(b=>!!b.value&&n(yt,{stat:b,effFilter:s,rarity:T},b.key)),u(m,{variant:"caption",sx:{display:"flex",gap:1,alignItems:"center"},children:[n(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.curSubEff`}),n(B,{value:A,max:900,valid:q}),A!==H&&n("span",{children:"/"}),A!==H&&n(B,{value:H,max:900,valid:q})]}),A!==_&&u(m,{variant:"caption",sx:{display:"flex",gap:1},children:[n(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.maxSubEff`}),n(B,{value:_,max:900,valid:q}),_!==N&&n("span",{children:"/"}),_!==N&&n(B,{value:N,max:900,valid:q})]}),n(d,{flexGrow:1}),g.probability!==void 0&&g.probability>=0&&u("strong",{children:["Probability: ",(g.probability*100).toFixed(2),"%"]}),u(m,{color:"success.main",children:[(o==null?void 0:o.name)??"Artifact Set"," ",o&&n(tt,{title:n(ye,{artifactSheet:o})})]})]})]}),u(d,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[n(d,{sx:{flexGrow:1},children:x&&y?n(Xe,{location:ie,setLocation:p}):n(Ue,{location:ie})}),u(d,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[x&&f&&n(J,{title:n(m,{children:l`artifact:edit`}),placement:"top",arrow:!0,children:n(ce,{color:"info",size:"small",onClick:F,children:n(Ze,{})})}),x&&!!r&&n(J,{title:L?l("artifact:cantDeleteLock"):"",placement:"top",children:n("span",{children:n(ce,{color:"error",size:"small",onClick:()=>r(te),disabled:L,children:n(Re,{})})})}),E]})]})]})]})}function yt({stat:t,effFilter:i,rarity:e}){var o;const{t:r}=z("statKey_gen"),a=((o=t.rolls)==null?void 0:o.length)??0,s=t.key?fe(t.key):0,f=h.useMemo(()=>t.key?De(t.key,e):[],[t.key,e]),y=7-f.length,E=`roll${P(a,1,6)}`,l=t.efficiency??0,k=t.key&&i.has(t.key),v=je(.5+l/(100*5)*.5),w=se.unit(t.key),c=h.useMemo(()=>n(d,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:k?1:.3},children:[...t.rolls].sort().map((p,x)=>n(pt,{value:100*p/s,color:`roll${P(y+f.indexOf(p),1,6)}.main`},`${x}${p}`))}),[k,t.rolls,s,f,y]);return u(d,{display:"flex",gap:1,alignContent:"center",children:[u(m,{sx:{flexGrow:1},color:a?`${E}.main`:"error.main",component:"span",children:[n(ue,{statKey:t.key,iconProps:$e})," ",r(t.key),`+${Ie(t.value,se.unit(t.key))}${w}`]}),c,u(m,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:[l.toFixed(),"%"]})]})}function pt({color:t="red",value:i=50}){return n(d,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:n(d,{sx:{width:10,height:`${100-P(i,0,100)}%`,bgcolor:"gray"}})})}const Q=[3,4,6],Z={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},pe={};function $(t,i,e,r){if(t.length===5){Oe(pe,t,r);return}for(const a of Q)i[a]>0&&$([...t,a],{...i,[a]:i[a]-a},e-a,r*i[a]/e)}$([0],{3:6,4:20,6:18},44,1);$([3],{3:3,4:20,6:18},41,1);$([4],{3:6,4:16,6:18},40,1);$([6],{3:6,4:20,6:12},38,1);const X=Array(6).fill(0).map((t,i)=>{const e=[1];let r=0,a=1;for(;++r<=i;)a*=i-r+1,a/=r,e.push(a);return e}),M=[[1]];for(;M.length<6;){const t=M[M.length-1],i=Array(t.length+3).fill(0);t.forEach((e,r)=>{for(const a of[0,1,2,3])i[r+a]+=e}),M.push(i.map(e=>e/4))}for(const t of M){let i=t.reduce((e,r)=>e+r);t.forEach((e,r,a)=>{a[r]=i,i-=e})}function ht(t,i){if(t.rarity<=2)return NaN;const{rarity:e,level:r,substats:a}=t,s={...i},f=new Set(Object.keys(s));let y=0;{const c=t.mainStatKey;if(c in s){const o=e*4;if(Ve.art.main[e][c][o]<s[c])return 0;delete s[c],f.delete(c)}}for(const{key:c,value:o}of a)c?f.has(c)&&(f.delete(c),s[c]>o?s[c]-=o:delete s[c]):y+=1;if(y+=4-a.length,f.size>y||Object.keys(s).length>4)return 0;const E=Be(r,e)-y;for(const[c,o]of Object.entries(s))s[c]=Math.max(Math.ceil(10*o/fe(c,e)),1);let l=0;const k=Object.entries(s).map(([c,o])=>{const p=f.has(c)?1:0,x=Math.ceil(o/10)-p;return l+=x,{target:o,filler:p,minUpgrade:x}}).reverse();if(l>E)return 0;let v={[E]:1};const w=E-l;return k.forEach(({target:c,filler:o,minUpgrade:p},x)=>{const K={};for(let S=p;S<=p+w;S++){const I=c-7*(S+o),F=I>0?M[S+o][I]:1;for(const[W,G]of Object.entries(v)){const g=parseInt(W);if(g<S)continue;const A=mt(g,S,4-x),_=g-S;K[_]=(K[_]??0)+G*F*A}}v=K}),xt(t.mainStatKey,a,f)*Object.values(v).reduce((c,o)=>c+o)}function mt(t,i,e){return X[t][i]*Math.pow(e-1,t-i)/Math.pow(e,t)}function xt(t,i,e){const r=Z[t]??0;let a=0;const s={3:2,4:5,6:3};let f=pe[r];for(const{key:l}of i)if(l){const k=Z[l];f=f[k],s[k]-=1}r&&(s[r]-=1);const y={3:0,4:0,6:0};for(const l of e)y[Z[l]]+=1;let E=0;qe(f,[],l=>typeof l=="number",(l,k)=>{E+=l;const v={3:0,4:0,6:0};for(const c of k)v[c]+=1;let w=l;for(const c of Q){const o=v[c],p=y[c];if(o<p)return;w*=X[o][p]}a+=w});for(const l of Q)a/=X[s[l]][y[l]];return a/E}const Dt=["rarity","level","artsetkey","efficiency","mefficiency","probability"];function $t(){return{artSetKeys:[],rarity:[...ze],levelLow:0,levelHigh:20,slotKeys:[...Pe],mainStatKeys:[],substats:[],locations:[],showEquipped:!0,showInventory:!0,locked:["locked","unlocked"],rvLow:0,rvHigh:900,useMaxRV:!1,lines:[1,2,3,4]}}function It(t,i){return{rarity:e=>e.rarity??0,level:e=>e.level??0,artsetkey:e=>e.setKey??"",efficiency:e=>C.getArtifactEfficiency(e,t).currentEfficiency,mefficiency:e=>C.getArtifactEfficiency(e,t).maxEfficiency,probability:e=>{if(!Object.keys(i).length)return 0;const r=e.probability;return r===void 0?ht(e,i):r}}}function Lt(t=new Set(Y)){return{locked:(i,e)=>!(!e.includes("locked")&&i.lock||!e.includes("unlocked")&&!i.lock),locations:(i,e,r)=>i.location&&!r.showEquipped?e.includes(i.location):!0,showEquipped:()=>!0,showInventory:(i,e)=>i.location?!0:e,artSetKeys:(i,e)=>e.length?e.includes(i.setKey):!0,slotKeys:(i,e)=>e.includes(i.slotKey),mainStatKeys:(i,e)=>e.length?e.includes(i.mainStatKey):!0,levelLow:(i,e)=>e<=i.level,levelHigh:(i,e)=>e>=i.level,rvLow:(i,e,r)=>{if(e===0)return!0;const{useMaxRV:a}=r,{currentEfficiency:s,maxEfficiency:f}=C.getArtifactEfficiency(i,t);return e<=(a?f:s)},rvHigh:(i,e,r)=>{if(e===900)return!0;const{useMaxRV:a}=r,{currentEfficiency:s,maxEfficiency:f}=C.getArtifactEfficiency(i,t);return e>=(a?f:s)},useMaxRV:()=>!0,rarity:(i,e)=>e.includes(i.rarity),substats:(i,e)=>{for(const r of e)if(r&&!i.substats.some(a=>a.key===r))return!1;return!0},lines:(i,e)=>[0,...e].includes(i.substats.filter(r=>r.value).length)}}const jt={level:["level","rarity","artsetkey"],rarity:["rarity","level","artsetkey"],artsetkey:["artsetkey","rarity","level"],efficiency:["efficiency"],mefficiency:["mefficiency"],probability:["probability"]};export{Tt as A,B as P,pt as S,It as a,Lt as b,jt as c,ot as d,Dt as e,Rt as f,$t as i,ht as p,rt as u};
