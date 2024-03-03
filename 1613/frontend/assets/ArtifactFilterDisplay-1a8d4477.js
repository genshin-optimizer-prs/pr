import{dE as Ne,e as o,n as c,K as C,am as Pe,p as e,D as L,a0 as q,a2 as j,b7 as fe,r as ge,i as be,j as xe,u as k,c2 as ye,bf as ie,q as T,c3 as He,$ as z,b as ve,d as Ve,a9 as Me,ap as We,cJ as Ge,ao as Se,U as Fe,B as D,bi as ce,o as De,J as F,dF as $,cD as J,k as U,N as I,an as Je}from"./index-3406727d.js";import{d as Ue,a as Qe}from"./LockOpen-19c5af12.js";import{u as Xe}from"./useDisplayArtifact-f2fc1b7a.js";import{T as _,S as A,h as R,b as Ye}from"./totalUtils-e1f4b6e9.js";import{B as Ze}from"./BootstrapTooltip-75ed0063.js";import{b as Ce,a as Oe}from"./StarDisplay-800bdc30.js";import{S as Te,s as et,A as ue}from"./ArtifactStatKeyDisplay-72703c75.js";import{a as Ke}from"./Artifact-2115aa74.js";import{S as B,g as tt}from"./index-d733abd2.js";import{g as N,L as at}from"./LocationAutocomplete-af6ca032.js";import{a as lt,s as st}from"./index-87a37c94.js";import{I as ot}from"./ColoredText-ea4663e9.js";import{S as rt}from"./SlotIcon-180b50bb.js";const nt=Ne(),w=nt;function it({levelLow:d,levelHigh:s,setLow:i,setHigh:p,setBoth:a,dark:u=!1,disabled:h=!1,showLevelText:f=!1}){const[r,l]=o.useState(d),[y,v]=o.useState(s),S=o.useCallback((x,g)=>{if(typeof g=="number")throw new TypeError;const[n,b]=g;l(n),v(b)},[l,v]);return o.useEffect(()=>l(d),[l,d]),o.useEffect(()=>v(s),[v,s]),c(fe,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:u?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[c(C,{sx:{width:f?100:55,height:32,display:"flex"},children:[f?c(Pe,{children:[e("span",{style:{padding:0,width:"55%",borderRadius:"4px 0 0 4px",display:"flex",justifyContent:"center",alignItems:"center",color:"rgba(255,255,255,0.9)",backgroundColor:"rgb(30,120,200)"},children:"Level"}),e(L,{orientation:"vertical",flexItem:!0})]}):void 0,e(j,{value:r,onChange:x=>i(q(x??0,0,s)),sx:{px:1,width:f?"45%":"100%",borderRadius:f?0:"4px 0 0 4px"},inputProps:{sx:{textAlign:f?"right":"center"}},disabled:h})]}),e(Te,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[r,y],onChange:S,onChangeCommitted:(x,g)=>a(g[0],g[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:h}),e(j,{value:y,onChange:x=>p(q(x??0,d,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:h})]})}var X={},ct=be;Object.defineProperty(X,"__esModule",{value:!0});var ke=X.default=void 0,ut=ct(ge()),dt=xe,mt=(0,ut.default)((0,dt.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");ke=X.default=mt;var Y={},pt=be;Object.defineProperty(Y,"__esModule",{value:!0});var we=Y.default=void 0,ht=pt(ge()),de=xe,ft=(0,ht.default)([(0,de.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,de.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");we=Y.default=ft;function gt({mainStatKeys:d,setMainStatKeys:s,totals:i}){const{t:p}=k("artifact"),{t:a}=k("statKey_gen"),u=o.useMemo(()=>ye.map(l=>({key:l,label:`${a(l)}${Ke(l)}`,variant:ie.getVariant(l)})),[a]),h=o.useCallback(l=>e(B,{statKey:l,iconProps:{sx:{ml:1,color:ie.getVariant(l)}}}),[]),f=o.useCallback(l=>e("strong",{children:i[l]}),[i]),r=o.useCallback(l=>e(T,{size:"small",label:i[l]}),[i]);return e(N,{options:u,valueKeys:d,onChange:s,toImg:h,toExLabel:f,toExItemLabel:r,label:p("autocompleteLabels.mainStats")})}function bt({artSetKeys:d,setArtSetKeys:s,totals:i}){const{t:p}=k(["artifact","artifactNames_gen"]),a=o.useCallback(r=>e(ot,{src:lt(r),size:3}),[]),u=o.useCallback(r=>e("strong",{children:i[r]}),[i]),h=o.useCallback(r=>e(T,{size:"small",label:i[r]}),[i]),f=o.useMemo(()=>Object.entries(st).flatMap(([r,l])=>l.map(y=>({key:y,grouper:+r,label:p(`artifactNames_gen:${y}`)}))).sort(et),[p]);return e(N,{options:f,valueKeys:d,label:p("artifact:autocompleteLabels.sets"),toImg:a,toExLabel:u,toExItemLabel:h,onChange:s,groupBy:r=>{var l;return((l=r.grouper)==null?void 0:l.toString())??""},renderGroup:r=>r.group&&c(He,{component:C,children:[c(at,{sx:{top:"-1em"},children:[r.group," ",e(Ce,{stars:+r.group,inline:!0})]},`${r.group}Header`),r.children]},r.group)})}function xt({substatKeys:d,setSubstatKeys:s,totals:i}){const{t:p}=k("artifact"),{t:a}=k("statKey_gen"),u=o.useMemo(()=>z.map(l=>({key:l,label:`${a(l)}${Ke(l)}`})),[a]),h=o.useCallback(l=>e(B,{statKey:l,iconProps:{sx:{ml:1}}}),[]),f=o.useCallback(l=>e("strong",{children:i[l]}),[i]),r=o.useCallback(l=>e(T,{size:"small",label:i[l]}),[i]);return e(N,{options:u,toImg:h,toExLabel:f,toExItemLabel:r,valueKeys:d,onChange:s,label:p("autocompleteLabels.substats")})}function yt({locations:d,setLocations:s,totals:i,disabled:p}){const{t:a}=k(["artifact","sillyWisher_charNames","charNames_gen"]),u=ve(),{gender:h}=Ve(),{silly:f}=o.useContext(Me),r=o.useCallback((n,b)=>a(`${b?"sillyWisher_charNames":"charNames_gen"}:${We(u.chars.LocationToCharacterKey(n),h)}`),[u,h,a]),l=o.useCallback(n=>e(Oe,{characterKey:u.chars.LocationToCharacterKey(n)}),[u]),y=o.useCallback(n=>e("strong",{children:i[n]}),[i]),v=o.useCallback(n=>e(T,{size:"small",label:i[n]}),[i]),S=o.useCallback(n=>n==="Traveler"?Ge.some(b=>u.charMeta.get(b).favorite):n?u.charMeta.get(n).favorite:!1,[u]),x=o.useCallback(n=>tt(u.chars.LocationToCharacterKey(n),h).elementKey??void 0,[u,h]),g=o.useMemo(()=>Se.filter(n=>u.chars.get(u.chars.LocationToCharacterKey(n))).map(n=>({key:n,label:r(n,f),favorite:S(n),color:x(n),alternateNames:[r(n,!1)]})).sort((n,b)=>n.favorite&&!b.favorite?-1:!n.favorite&&b.favorite?1:n.label.localeCompare(b.label)),[u.chars,S,x,f,r]);return e(o.Suspense,{fallback:e(Fe,{variant:"text",width:100}),children:e(N,{disabled:p,options:g,valueKeys:d,onChange:n=>s(n),toImg:l,toExLabel:y,toExItemLabel:v,label:a`artifact:filterLocation.location`,chipProps:{variant:"outlined"}})})}function vt({rvLow:d,rvHigh:s,useMaxRV:i,switchFilter:p,setLow:a,setHigh:u,setBoth:h,dark:f=!1,disabled:r=!1}){const[l,y]=o.useState(i),[v,S]=o.useState(d),[x,g]=o.useState(s),n=o.useCallback((b,K)=>{if(typeof K=="number")throw new TypeError;const[P,H]=K;S(P),g(H)},[S,g]);return o.useEffect(()=>S(d),[S,d]),o.useEffect(()=>g(s),[g,s]),o.useEffect(()=>y(i),[y,i]),c(fe,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:f?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[c(C,{sx:{width:100,height:32,display:"flex"},children:[e(D,{onClick:()=>p(!i),sx:{p:0,minWidth:0,width:"55%",borderRadius:"4px 0 0 4px",fontWeight:400,fontSize:"16px",display:"inline",textAlign:"center",color:"rgba(255,255,255,0.9)"},children:l?"MRV":"RV"}),e(L,{orientation:"vertical",flexItem:!0}),e(j,{value:v,onChange:b=>a(q(b??0,0,x)),sx:{pr:1,width:"45%"},inputProps:{sx:{textAlign:"right"}},disabled:r})]}),e(Te,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>`Arifact ${l?"Max RV":"RV"} Range`,value:[v,x],onChange:n,onChangeCommitted:(b,K)=>h(K[0],K[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:r}),e(j,{value:x,onChange:b=>u(q(b??0,v,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:r})]})}const me=R([...z]),pe=z.slice(0,6),he=z.slice(6);function St({selectedKeys:d,onChange:s}){const i=d.filter(a=>pe.includes(a)),p=d.filter(a=>he.includes(a));return c(C,{display:"flex",gap:1,flexWrap:"wrap",children:[e(A,{value:i,sx:{flexGrow:1},children:pe.map(a=>e(_,{sx:{flexGrow:1},size:"small",value:a,onClick:()=>s(me(d,a)),children:c(C,{display:"flex",gap:1,alignItems:"center",children:[e(B,{statKey:a,iconProps:ce}),e(ue,{statKey:a})]})},a))}),e(A,{value:p,sx:{flexGrow:1},children:he.map(a=>e(_,{sx:{flexGrow:1},size:"small",value:a,onClick:()=>s(me(d,a)),children:c(C,{display:"flex",gap:1,alignItems:"center",children:[e(B,{statKey:a,iconProps:ce}),e(ue,{statKey:a})]})},a))})]})}const Q=["locked","unlocked"],Ct=R([...J]),Tt=R([...U]),Kt=R([...Q]),kt=R([1,2,3,4]);function wt({filterOption:d,filterOptionDispatch:s,filteredIds:i,disableSlotFilter:p=!1}){const{t:a}=k(["artifact","ui"]),u=o.useMemo(()=>De(i,t=>!0),[i]),{artSetKeys:h=[],mainStatKeys:f=[],rarity:r=[],slotKeys:l=[],levelLow:y=0,levelHigh:v=20,substats:S=[],locations:x,showEquipped:g,showInventory:n,locked:b=[...Q],rvLow:K=0,rvHigh:P=900,useMaxRV:H=!1,lines:Z=[]}=d,V=ve(),{rarityTotal:Le,slotTotal:_e,lockedTotal:Ae,linesTotal:Ie,equippedTotal:O,setTotal:ze,mainStatTotal:Re,subStatTotal:Ee,locationTotal:$e}=o.useMemo(()=>{const t={rarityTotal:J,slotTotal:U,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:Je,mainStatTotal:ye,subStatTotal:z,locationTotal:[...Se,""]};return Ye(t,m=>Object.entries(V.arts.data).forEach(([ee,E])=>{const{rarity:te,slotKey:ae,location:M,setKey:le,mainStatKey:se,substats:Be}=E,oe=E.lock?"locked":"unlocked",re=E.substats.filter(W=>W.value).length,ne=M?"equipped":"unequipped";(!p||E.slotKey===d.slotKeys[0])&&(m.rarityTotal[te].total++,m.slotTotal[ae].total++,m.lockedTotal[oe].total++,m.linesTotal[re].total++,m.equippedTotal[ne].total++,m.setTotal[le].total++,m.mainStatTotal[se].total++,Be.forEach(W=>{const G=W.key;G&&(m.subStatTotal[G].total++,u[ee]&&m.subStatTotal[G].current++)}),m.locationTotal[M].total++),u[ee]&&(m.rarityTotal[te].current++,m.slotTotal[ae].current++,m.lockedTotal[oe].current++,m.linesTotal[re].current++,m.equippedTotal[ne].current++,m.setTotal[le].current++,m.mainStatTotal[se].current++,m.locationTotal[M].current++)}))},[V,p,u,d]),qe=Xe(),{sortType:Lt,effFilter:je,ascending:_t,probabilityFilter:At}=qe;return c(F,{container:!0,spacing:1,children:[c(F,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[c(C,{p:1,children:[e(I,{t:a,i18nKey:"subheadings.general"}),c(w,{spacing:1,children:[e(L,{sx:{bgcolor:$.palette.contentNormal.light}}),e(it,{showLevelText:!0,levelLow:y,levelHigh:v,setLow:t=>s({levelLow:t}),setHigh:t=>s({levelHigh:t}),setBoth:(t,m)=>s({levelLow:t,levelHigh:m})}),e(A,{fullWidth:!0,value:r,size:"small",children:J.map(t=>c(_,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({rarity:Ct(r,t)}),children:[e(Ce,{stars:t,inline:!0}),e(T,{label:Le[t],size:"small"})]},t))}),e(A,{fullWidth:!0,value:l,size:"small",disabled:p,children:U.map(t=>c(_,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({slotKeys:Tt(l,t)}),children:[e(rt,{slotKey:t}),e(T,{label:_e[t],size:"small"})]},t))})]}),c(w,{spacing:1.5,pt:1.5,children:[e(gt,{totals:Re,mainStatKeys:f,setMainStatKeys:t=>s({mainStatKeys:t})}),e(bt,{totals:ze,artSetKeys:h,setArtSetKeys:t=>s({artSetKeys:t})})]})]}),c(C,{p:1,children:[e(I,{t:a,i18nKey:"subheadings.substats"}),e(L,{sx:{bgcolor:$.palette.contentNormal.light,marginBottom:1}}),c(w,{spacing:1.5,children:[e(A,{fullWidth:!0,value:Z,size:"small",children:[1,2,3,4].map(t=>c(_,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({lines:kt(Z,t)}),children:[e(C,{whiteSpace:"nowrap",children:a("sub",{count:t})}),e(T,{label:Ie[t],size:"small"})]},t))}),e(xt,{totals:Ee,substatKeys:S,setSubstatKeys:t=>s({substats:t})})]})]})]}),c(F,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[c(C,{p:1,children:[e(I,{t:a,i18nKey:"subheadings.inventory"}),c(w,{spacing:1,children:[e(L,{sx:{bgcolor:$.palette.contentNormal.light}}),e(A,{fullWidth:!0,value:b,size:"small",children:Q.map((t,m)=>c(_,{value:t,sx:{display:"flex",gap:1},onClick:()=>s({locked:Kt(b,t)}),children:[m?e(Ue,{}):e(Qe,{}),e(I,{i18nKey:`ui:${t}`,t:a}),e(T,{label:Ae[m?"unlocked":"locked"],size:"small"})]},t))}),c(D,{startIcon:e(ke,{}),color:n?"success":"secondary",onClick:()=>s({showInventory:!n}),children:[a`artInInv`," ",e(T,{sx:{ml:1},label:O.unequipped,size:"small"})]}),c(D,{startIcon:e(we,{}),color:g?"success":"secondary",onClick:()=>s({showEquipped:!g}),children:[a`equippedArt`," ",e(T,{sx:{ml:1},label:O.equipped,size:"small"})]})]}),e(w,{spacing:1.5,pt:1.5,children:e(o.Suspense,{fallback:null,children:e(Ze,{title:g?a`locationsTooltip`:"",placement:"top",children:e("span",{children:e(yt,{totals:$e,locations:g?[]:x,setLocations:t=>s({locations:t}),disabled:g})})})})})]}),c(C,{p:1,children:[e(I,{t:a,i18nKey:"subheadings.rollvalue"}),c(w,{spacing:1,children:[e(L,{sx:{bgcolor:$.palette.contentNormal.light}}),e(vt,{showLevelText:!0,rvLow:K,rvHigh:P,useMaxRV:H,switchFilter:t=>s({useMaxRV:t}),setLow:t=>s({rvLow:t}),setHigh:t=>s({rvHigh:t}),setBoth:(t,m)=>s({rvLow:t,rvHigh:m})}),e(St,{selectedKeys:je,onChange:t=>V.displayArtifact.set({effFilter:t})})]})]})]})]})}const Wt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"}));export{wt as A,w as S,it as a,Wt as b};
