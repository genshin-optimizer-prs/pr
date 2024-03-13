import{b as le,r as Se,i as ke,j as Ee,p as n,U as D,e as h,u as B,n as u,T as m,K as d,Z as we,a2 as P,$ as Y,bG as _e,s as Ae,q as Ce,cl as Ke,C as Me,B as ce,W as Re,_ as Te,bS as fe,cG as De,bO as se,bq as Ie,bj as $e,aB as Le,cH as je,ar as qe,cI as Oe,cJ as Ve,cK as ze,cL as Be,k as Pe}from"./index-dd353045.js";import{T as Ge,d as We,S as ue}from"./index-02385bd0.js";import{b as Fe,e as He,h as Ne}from"./StarDisplay-917d817d.js";import{C as Ue,d as Je,L as Ze,a as Qe,b as Xe}from"./ConditionalWrapper-f2be4594.js";import{B as Z}from"./BootstrapTooltip-a069f251.js";import{S as de}from"./SqBadge-e599f31f.js";import{S as Ye}from"./SlotIcon-eeb2c085.js";import{C as U}from"./ColoredText-feb4f114.js";import{I as et,a as tt}from"./InfoTooltip-31a0e30b.js";import{g as it}from"./index-076d6dbc.js";import{A}from"./Artifact-b1d9c842.js";import{C as nt}from"./CardActionArea-c9d6d4f6.js";function rt(t=""){const i=le();return Fe(i.arts,t)}var ee={},at=ke;Object.defineProperty(ee,"__esModule",{value:!0});var ot=ee.default=void 0,ct=at(Se()),st=Ee,lt=(0,ct.default)((0,st.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");ot=ee.default=lt;function Rt({children:t,artifactSheet:i,numInSet:e=5}){return n(Z,{placement:"top",title:n(ye,{artifactSheet:i,numInSet:e}),disableInteractive:!0,children:t})}function ye({artifactSheet:t,numInSet:i=5}){return n(h.Suspense,{fallback:n(D,{variant:"rectangular",width:100,height:100}),children:n(ft,{artifactSheet:t,numInSet:i})})}function ft({artifactSheet:t,numInSet:i=5}){const{t:e}=B("sheet");return n(we,{spacing:2,sx:{p:1},children:Object.keys(t.setEffects).map(r=>u(d,{sx:{opacity:parseInt(r)<=i?1:.5},children:[n(m,{children:n(de,{color:"success",children:e(`${r}set`)})}),n(m,{children:n(Ge,{ns:`artifact_${t.key}_gen`,key18:`setEffects.${r}`})})]},r))})}function z({value:t,max:i=1,valid:e}){const[r,a]=typeof t=="number"?[`roll${P(Math.floor(t/i*10)-4,1,6)}`,t.toFixed()+"%"]:["secondary",t];return n(de,{color:e?r:"error",children:a})}const ut=h.lazy(()=>Te(()=>import("./ArtifactEditor-c8c376c6.js"),["./ArtifactEditor-c8c376c6.js","./index-dd353045.js","./index-bb8f68a5.css","./ArtifactRarityDropdown-07e7c249.js","./index-076d6dbc.js","./index-02385bd0.js","./ColoredText-feb4f114.js","./SqBadge-e599f31f.js","./ConditionalWrapper-f2be4594.js","./StarDisplay-917d817d.js","./DropdownButton-1cd15058.js","./ArtifactStatKeyDisplay-0903e906.js","./Artifact-b1d9c842.js","./InfoTooltip-31a0e30b.js","./BootstrapTooltip-a069f251.js","./LockOpen-ef5b3301.js","./SlotIcon-eeb2c085.js","./CloseButton-746993e0.js","./TextButton-2b347696.js","./CardHeader-17ce18cb.js","./ChevronRight-b103914e.js","./CardActionArea-c9d6d4f6.js"],import.meta.url)),dt=new Set(Y);function Tt({artifactId:t,artifactObj:i,onClick:e,onDelete:r,mainStatAssumptionLevel:a=0,effFilter:s=dt,editorProps:f,canEquip:y=!1,extraButtons:E}){var oe;const{t:l}=B(["artifact","ui"]),{t:k}=B("statKey_gen"),v=le(),w=rt(t),c=(oe=i??w)==null?void 0:oe.setKey,o=c&&it(c),p=h.useCallback(b=>t&&v.arts.set(t,{location:b}),[v,t]),x=!i,[M,S]=h.useState(!1),$=h.useCallback(()=>S(!1),[S]),G=h.useCallback(()=>x&&S(!0),[x,S]),W=h.useCallback(b=>n(nt,{onClick:()=>t&&(e==null?void 0:e(t)),sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[e,t]),F=h.useCallback(b=>n(d,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:b}),[]),g=i??w,{currentEfficiency:C,maxEfficiency:_,currentEfficiency_:H,maxEfficiency_:N}=h.useMemo(()=>{if(!g)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};const{currentEfficiency:b,maxEfficiency:ge}=A.getArtifactEfficiency(g,s),{currentEfficiency:be,maxEfficiency:ve}=A.getArtifactEfficiency(g,new Set(Y));return{currentEfficiency:b,maxEfficiency:ge,currentEfficiency_:be,maxEfficiency_:ve}},[g,s]);if(!g)return null;const{id:te,lock:L,slotKey:R,setKey:he,rarity:T,level:j,mainStatKey:q,substats:me,location:ie=""}=g,ne=Math.max(Math.min(a,T*4),j),O=_!==0,V=o==null?void 0:o.getSlotName(R),re=o==null?void 0:o.getSlotDesc(R),ae=re&&n(et,{title:u(d,{children:[n(h.Suspense,{fallback:n(D,{variant:"text",width:100}),children:n(m,{variant:"h6",children:V})}),n(m,{children:re})]})}),xe=_e.find(b=>q.startsWith(b));return u(h.Suspense,{fallback:n(D,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[f&&n(h.Suspense,{fallback:!1,children:n(ut,{artifactIdToEdit:M?t:"",cancelEdit:$,...f})}),u(Ae,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[u(Ue,{condition:!!e,wrapper:W,falseWrapper:F,children:[u(d,{className:`grad-${T}star`,sx:{position:"relative",width:"100%"},children:[!e&&n(Le,{color:"primary",disabled:!x,onClick:()=>v.arts.set(te,{lock:!L}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:L?n(Ze,{}):n(Qe,{})}),u(d,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[u(d,{component:"div",sx:{display:"flex",alignItems:"center",gap:.4,mb:1},children:[n(Ce,{size:"small",label:n("strong",{children:` +${j}`}),color:A.levelVariant(j)}),!V&&n(D,{variant:"text",width:100}),V&&n(m,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1.5},children:n("strong",{children:V})}),ae||n(D,{width:10})]}),u(m,{color:"text.secondary",variant:"body2",sx:{display:"flex",gap:.5,alignItems:"center"},children:[n(Ye,{iconProps:{fontSize:"inherit"},slotKey:R}),l(`slotName.${R}`)]}),u(m,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[n(ue,{statKey:q,iconProps:{sx:{color:`${xe}.main`}}}),n("span",{children:k(q)})]}),n(m,{variant:"h5",children:n("strong",{children:n(U,{color:ne!==j?"warning":void 0,children:Ke(q,T,ne)})})}),n(He,{stars:T,colored:!0})]}),n(d,{sx:{height:"100%",position:"absolute",right:0,top:0},children:n(d,{component:"img",src:We(he,R),width:"auto",height:"110%",sx:{float:"right",marginBottom:"-5%",marginTop:"-5%",marginRight:"-5%"}})})]}),u(Me,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:"0!important",width:"100%"},children:[me.map(b=>!!b.value&&n(yt,{stat:b,effFilter:s,rarity:T},b.key)),u(m,{variant:"caption",sx:{display:"flex",gap:1,alignItems:"center"},children:[n(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.curSubEff`}),n(z,{value:C,max:900,valid:O}),C!==H&&n("span",{children:"/"}),C!==H&&n(z,{value:H,max:900,valid:O})]}),C!==_&&u(m,{variant:"caption",sx:{display:"flex",gap:1},children:[n(U,{color:"secondary",sx:{flexGrow:1},children:l`artifact:editor.maxSubEff`}),n(z,{value:_,max:900,valid:O}),_!==N&&n("span",{children:"/"}),_!==N&&n(z,{value:N,max:900,valid:O})]}),n(d,{flexGrow:1}),g.probability!==void 0&&g.probability>=0&&u("strong",{children:["Probability: ",(g.probability*100).toFixed(2),"%"]}),u(m,{color:"success.main",children:[(o==null?void 0:o.name)??"Artifact Set"," ",o&&n(tt,{title:n(ye,{artifactSheet:o})})]})]})]}),u(d,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[n(d,{sx:{flexGrow:1},children:x&&y?n(Xe,{location:ie,setLocation:p}):n(Ne,{location:ie})}),u(d,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[x&&f&&n(Z,{title:n(m,{children:l`artifact:edit`}),placement:"top",arrow:!0,children:n(ce,{color:"info",size:"small",onClick:G,children:n(Je,{})})}),x&&!!r&&n(Z,{title:L?l("artifact:cantDeleteLock"):"",placement:"top",children:n("span",{children:n(ce,{color:"error",size:"small",onClick:()=>r(te),disabled:L,children:n(Re,{})})})}),E]})]})]})]})}function yt({stat:t,effFilter:i,rarity:e}){var o;const{t:r}=B("statKey_gen"),a=((o=t.rolls)==null?void 0:o.length)??0,s=t.key?fe(t.key):0,f=h.useMemo(()=>t.key?De(t.key,e):[],[t.key,e]),y=7-f.length,E=`roll${P(a,1,6)}`,l=t.efficiency??0,k=t.key&&i.has(t.key),v=je(.5+l/(100*5)*.5),w=se.unit(t.key),c=h.useMemo(()=>n(d,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:k?1:.3},children:[...t.rolls].sort().map((p,x)=>n(pt,{value:100*p/s,color:`roll${P(y+f.indexOf(p),1,6)}.main`},`${x}${p}`))}),[k,t.rolls,s,f,y]);return u(d,{display:"flex",gap:1,alignContent:"center",children:[u(m,{sx:{flexGrow:1},color:a?`${E}.main`:"error.main",component:"span",children:[n(ue,{statKey:t.key,iconProps:Ie})," ",r(t.key),`+${$e(t.value,se.unit(t.key))}${w}`]}),c,u(m,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:[l.toFixed(),"%"]})]})}function pt({color:t="red",value:i=50}){return n(d,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:n(d,{sx:{width:10,height:`${100-P(i,0,100)}%`,bgcolor:"gray"}})})}const Q=[3,4,6],J={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},pe={};function I(t,i,e,r){if(t.length===5){Ve(pe,t,r);return}for(const a of Q)i[a]>0&&I([...t,a],{...i,[a]:i[a]-a},e-a,r*i[a]/e)}I([0],{3:6,4:20,6:18},44,1);I([3],{3:3,4:20,6:18},41,1);I([4],{3:6,4:16,6:18},40,1);I([6],{3:6,4:20,6:12},38,1);const X=Array(6).fill(0).map((t,i)=>{const e=[1];let r=0,a=1;for(;++r<=i;)a*=i-r+1,a/=r,e.push(a);return e}),K=[[1]];for(;K.length<6;){const t=K[K.length-1],i=Array(t.length+3).fill(0);t.forEach((e,r)=>{for(const a of[0,1,2,3])i[r+a]+=e}),K.push(i.map(e=>e/4))}for(const t of K){let i=t.reduce((e,r)=>e+r);t.forEach((e,r,a)=>{a[r]=i,i-=e})}function ht(t,i){if(t.rarity<=2)return NaN;const{rarity:e,level:r,substats:a}=t,s={...i},f=new Set(Object.keys(s));let y=0;{const c=t.mainStatKey;if(c in s){const o=e*4;if(qe.art.main[e][c][o]<s[c])return 0;delete s[c],f.delete(c)}}for(const{key:c,value:o}of a)c?f.has(c)&&(f.delete(c),s[c]>o?s[c]-=o:delete s[c]):y+=1;if(y+=4-a.length,f.size>y||Object.keys(s).length>4)return 0;const E=ze(r,e)-y;for(const[c,o]of Object.entries(s))s[c]=Math.max(Math.ceil(10*o/fe(c,e)),1);let l=0;const k=Object.entries(s).map(([c,o])=>{const p=f.has(c)?1:0,x=Math.ceil(o/10)-p;return l+=x,{target:o,filler:p,minUpgrade:x}}).reverse();if(l>E)return 0;let v={[E]:1};const w=E-l;return k.forEach(({target:c,filler:o,minUpgrade:p},x)=>{const M={};for(let S=p;S<=p+w;S++){const $=c-7*(S+o),G=$>0?K[S+o][$]:1;for(const[W,F]of Object.entries(v)){const g=parseInt(W);if(g<S)continue;const C=mt(g,S,4-x),_=g-S;M[_]=(M[_]??0)+F*G*C}}v=M}),xt(t.mainStatKey,a,f)*Object.values(v).reduce((c,o)=>c+o)}function mt(t,i,e){return X[t][i]*Math.pow(e-1,t-i)/Math.pow(e,t)}function xt(t,i,e){const r=J[t]??0;let a=0;const s={3:2,4:5,6:3};let f=pe[r];for(const{key:l}of i)if(l){const k=J[l];f=f[k],s[k]-=1}r&&(s[r]-=1);const y={3:0,4:0,6:0};for(const l of e)y[J[l]]+=1;let E=0;Oe(f,[],l=>typeof l=="number",(l,k)=>{E+=l;const v={3:0,4:0,6:0};for(const c of k)v[c]+=1;let w=l;for(const c of Q){const o=v[c],p=y[c];if(o<p)return;w*=X[o][p]}a+=w});for(const l of Q)a/=X[s[l]][y[l]];return a/E}const Dt=["rarity","level","artsetkey","efficiency","mefficiency","probability"];function It(){return{artSetKeys:[],rarity:[...Be],levelLow:0,levelHigh:20,slotKeys:[...Pe],mainStatKeys:[],substats:[],locations:[],showEquipped:!0,showInventory:!0,locked:["locked","unlocked"],rvLow:0,rvHigh:900,useMaxRV:!1,lines:[1,2,3,4]}}function $t(t,i){return{rarity:e=>e.rarity??0,level:e=>e.level??0,artsetkey:e=>e.setKey??"",efficiency:e=>A.getArtifactEfficiency(e,t).currentEfficiency,mefficiency:e=>A.getArtifactEfficiency(e,t).maxEfficiency,probability:e=>{if(!Object.keys(i).length)return 0;const r=e.probability;return r===void 0?ht(e,i):r}}}function Lt(t=new Set(Y)){return{locked:(i,e)=>!(!e.includes("locked")&&i.lock||!e.includes("unlocked")&&!i.lock),locations:(i,e,r)=>i.location&&!r.showEquipped?e.includes(i.location):!0,showEquipped:()=>!0,showInventory:(i,e)=>i.location?!0:e,artSetKeys:(i,e)=>e.length?e.includes(i.setKey):!0,slotKeys:(i,e)=>e.includes(i.slotKey),mainStatKeys:(i,e)=>e.length?e.includes(i.mainStatKey):!0,levelLow:(i,e)=>e<=i.level,levelHigh:(i,e)=>e>=i.level,rvLow:(i,e,r)=>{if(e===0)return!0;const{useMaxRV:a}=r,{currentEfficiency:s,maxEfficiency:f}=A.getArtifactEfficiency(i,t);return e<=(a?f:s)},rvHigh:(i,e,r)=>{if(e===900)return!0;const{useMaxRV:a}=r,{currentEfficiency:s,maxEfficiency:f}=A.getArtifactEfficiency(i,t);return e>=(a?f:s)},useMaxRV:()=>!0,rarity:(i,e)=>e.includes(i.rarity),substats:(i,e)=>{for(const r of e)if(r&&!i.substats.some(a=>a.key===r))return!1;return!0},lines:(i,e)=>[0,...e].includes(i.substats.filter(r=>r.value).length)}}const jt={level:["level","rarity","artsetkey"],rarity:["rarity","level","artsetkey"],artsetkey:["artsetkey","rarity","level"],efficiency:["efficiency"],mefficiency:["mefficiency"],probability:["probability"]};export{Tt as A,z as P,pt as S,$t as a,Lt as b,jt as c,ot as d,Dt as e,Rt as f,It as i,ht as p,rt as u};
