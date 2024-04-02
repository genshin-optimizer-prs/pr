import{dE as ze,e as o,n as c,N as v,as as qe,p as e,D as L,a8 as N,a7 as $,b9 as he,r as Ne,i as $e,j as Be,u as k,c4 as fe,bL as re,q as T,I as Pe,c5 as je,a5 as E,b as ge,d as He,af as Me,av as We,cE as Ve,au as be,Z as Ge,B as F,bp as ne,o as Fe,M as G,dF as q,cD as Q,k as U,Q as _,at as Qe}from"./index-1013ae55.js";import{u as Ue}from"./useDisplayArtifact-e49ad94d.js";import{S as Ze}from"./SlotIcon-751a1a73.js";import{L as De,h as xe,C as Je,i as Xe}from"./StarDisplay-fee99ce9.js";import{d as Ye,a as Oe}from"./LockOpen-19647fa9.js";import{T as A,S as I,h as R}from"./SolidToggleButtonGroup-cedfd6bc.js";import{b as et}from"./totalUtils-7ffd534c.js";import{B as tt}from"./BootstrapTooltip-d567909e.js";import{S as ye,s as at,A as ie}from"./ArtifactStatKeyDisplay-6ce4a3ca.js";import{S as Se,g as lt}from"./index-753b01f9.js";import{a as Ce}from"./util-3e22b532.js";import{c as B}from"./ConditionalWrapper-a1271d7f.js";import{a as st,s as ot}from"./index-ac5846b8.js";import{S as ce}from"./StatIcon-37d406fb.js";const rt=ze(),w=rt;function nt({levelLow:d,levelHigh:s,setLow:i,setHigh:p,setBoth:a,dark:u=!1,disabled:h=!1,showLevelText:f=!1}){const[r,l]=o.useState(d),[y,S]=o.useState(s),C=o.useCallback((x,g)=>{if(typeof g=="number")throw new TypeError;const[n,b]=g;l(n),S(b)},[l,S]);return o.useEffect(()=>l(d),[l,d]),o.useEffect(()=>S(s),[S,s]),c(he,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:u?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[c(v,{sx:{width:f?100:55,height:32,display:"flex"},children:[f?c(qe,{children:[e("span",{style:{padding:0,width:"55%",borderRadius:"4px 0 0 4px",display:"flex",justifyContent:"center",alignItems:"center",color:"rgba(255,255,255,0.9)",backgroundColor:"rgb(30,120,200)"},children:"Level"}),e(L,{orientation:"vertical",flexItem:!0})]}):void 0,e($,{value:r,onChange:x=>i(N(x??0,0,s)),sx:{px:1,width:f?"45%":"100%",borderRadius:f?0:"4px 0 0 4px"},inputProps:{sx:{textAlign:f?"right":"center"}},disabled:h})]}),e(ye,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[r,y],onChange:C,onChangeCommitted:(x,g)=>a(g[0],g[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:h}),e($,{value:y,onChange:x=>p(N(x??0,d,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:h})]})}var D={},it=$e;Object.defineProperty(D,"__esModule",{value:!0});var ve=D.default=void 0,ct=it(Ne()),ue=Be,ut=(0,ct.default)([(0,ue.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,ue.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");ve=D.default=ut;function dt({mainStatKeys:d,setMainStatKeys:s,totals:i}){const{t:p}=k("artifact"),{t:a}=k("statKey_gen"),u=o.useMemo(()=>fe.map(l=>({key:l,label:`${a(l)}${Ce(l)}`,variant:re.getVariant(l)})),[a]),h=o.useCallback(l=>e(Se,{statKey:l,iconProps:{sx:{ml:1,color:re.getVariant(l)}}}),[]),f=o.useCallback(l=>e("strong",{children:i[l]}),[i]),r=o.useCallback(l=>e(T,{size:"small",label:i[l]}),[i]);return e(B,{options:u,valueKeys:d,onChange:s,toImg:h,toExLabel:f,toExItemLabel:r,label:p("autocompleteLabels.mainStats")})}function mt({artSetKeys:d,setArtSetKeys:s,totals:i}){const{t:p}=k(["artifact","artifactNames_gen"]),a=o.useCallback(r=>e(Pe,{src:st(r),size:3}),[]),u=o.useCallback(r=>e("strong",{children:i[r]}),[i]),h=o.useCallback(r=>e(T,{size:"small",label:i[r]}),[i]),f=o.useMemo(()=>Object.entries(ot).flatMap(([r,l])=>l.map(y=>({key:y,grouper:+r,label:p(`artifactNames_gen:${y}`)}))).sort(at),[p]);return e(B,{options:f,valueKeys:d,label:p("artifact:autocompleteLabels.sets"),toImg:a,toExLabel:u,toExItemLabel:h,onChange:s,groupBy:r=>{var l;return((l=r.grouper)==null?void 0:l.toString())??""},renderGroup:r=>r.group&&c(je,{component:v,children:[c(De,{sx:{top:"-1em"},children:[r.group," ",e(xe,{stars:+r.group,inline:!0})]},`${r.group}Header`),r.children]},r.group)})}function pt({substatKeys:d,setSubstatKeys:s,totals:i}){const{t:p}=k("artifact"),{t:a}=k("statKey_gen"),u=o.useMemo(()=>E.map(l=>({key:l,label:`${a(l)}${Ce(l)}`})),[a]),h=o.useCallback(l=>e(Se,{statKey:l,iconProps:{sx:{ml:1}}}),[]),f=o.useCallback(l=>e("strong",{children:i[l]}),[i]),r=o.useCallback(l=>e(T,{size:"small",label:i[l]}),[i]);return e(B,{options:u,toImg:h,toExLabel:f,toExItemLabel:r,valueKeys:d,onChange:s,label:p("autocompleteLabels.substats")})}function ht({locations:d,setLocations:s,totals:i,disabled:p}){const{t:a}=k(["artifact","sillyWisher_charNames","charNames_gen"]),u=ge(),{gender:h}=He(),{silly:f}=o.useContext(Me),r=o.useCallback((n,b)=>a(`${b?"sillyWisher_charNames":"charNames_gen"}:${We(u.chars.LocationToCharacterKey(n),h)}`),[u,h,a]),l=o.useCallback(n=>e(Je,{characterKey:u.chars.LocationToCharacterKey(n)}),[u]),y=o.useCallback(n=>e("strong",{children:i[n]}),[i]),S=o.useCallback(n=>e(T,{size:"small",label:i[n]}),[i]),C=o.useCallback(n=>n==="Traveler"?Ve.some(b=>u.charMeta.get(b).favorite):n?u.charMeta.get(n).favorite:!1,[u]),x=o.useCallback(n=>lt(u.chars.LocationToCharacterKey(n),h).elementKey??void 0,[u,h]),g=o.useMemo(()=>be.filter(n=>u.chars.get(u.chars.LocationToCharacterKey(n))).map(n=>({key:n,label:r(n,f),favorite:C(n),color:x(n),alternateNames:[r(n,!1)]})).sort((n,b)=>n.favorite&&!b.favorite?-1:!n.favorite&&b.favorite?1:n.label.localeCompare(b.label)),[u.chars,C,x,f,r]);return e(o.Suspense,{fallback:e(Ge,{variant:"text",width:100}),children:e(B,{disabled:p,options:g,valueKeys:d,onChange:n=>s(n),toImg:l,toExLabel:y,toExItemLabel:S,label:a`artifact:filterLocation.location`,chipProps:{variant:"outlined"}})})}function ft({rvLow:d,rvHigh:s,useMaxRV:i,switchFilter:p,setLow:a,setHigh:u,setBoth:h,dark:f=!1,disabled:r=!1}){const[l,y]=o.useState(i),[S,C]=o.useState(d),[x,g]=o.useState(s),n=o.useCallback((b,K)=>{if(typeof K=="number")throw new TypeError;const[P,j]=K;C(P),g(j)},[C,g]);return o.useEffect(()=>C(d),[C,d]),o.useEffect(()=>g(s),[g,s]),o.useEffect(()=>y(i),[y,i]),c(he,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:f?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[c(v,{sx:{width:100,height:32,display:"flex"},children:[e(F,{onClick:()=>p(!i),sx:{p:0,minWidth:0,width:"55%",borderRadius:"4px 0 0 4px",fontWeight:400,fontSize:"16px",display:"inline",textAlign:"center",color:"rgba(255,255,255,0.9)"},children:l?"MRV":"RV"}),e(L,{orientation:"vertical",flexItem:!0}),e($,{value:S,onChange:b=>a(N(b??0,0,x)),sx:{pr:1,width:"45%"},inputProps:{sx:{textAlign:"right"}},disabled:r})]}),e(ye,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>`Arifact ${l?"Max RV":"RV"} Range`,value:[S,x],onChange:n,onChangeCommitted:(b,K)=>h(K[0],K[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:r}),e($,{value:x,onChange:b=>u(N(b??0,S,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:r})]})}const de=R([...E]),me=E.slice(0,6),pe=E.slice(6);function gt({selectedKeys:d,onChange:s}){const i=d.filter(a=>me.includes(a)),p=d.filter(a=>pe.includes(a));return c(v,{display:"flex",gap:1,flexWrap:"wrap",children:[e(I,{value:i,sx:{flexGrow:1},children:me.map(a=>e(A,{sx:{flexGrow:1},size:"small",value:a,onClick:()=>s(de(d,a)),children:c(v,{display:"flex",gap:1,alignItems:"center",children:[e(ce,{statKey:a,iconProps:ne}),e(ie,{statKey:a})]})},a))}),e(I,{value:p,sx:{flexGrow:1},children:pe.map(a=>e(A,{sx:{flexGrow:1},size:"small",value:a,onClick:()=>s(de(d,a)),children:c(v,{display:"flex",gap:1,alignItems:"center",children:[e(ce,{statKey:a,iconProps:ne}),e(ie,{statKey:a})]})},a))})]})}const Z=["locked","unlocked"],bt=R([...Q]),xt=R([...U]),yt=R([...Z]),St=R([1,2,3,4]);function Ct({filterOption:d,filterOptionDispatch:s,filteredIds:i,disableSlotFilter:p=!1}){const{t:a}=k(["artifact","ui"]),u=o.useMemo(()=>Fe(i,t=>!0),[i]),{artSetKeys:h=[],mainStatKeys:f=[],rarity:r=[],slotKeys:l=[],levelLow:y=0,levelHigh:S=20,substats:C=[],locations:x,showEquipped:g,showInventory:n,locked:b=[...Z],rvLow:K=0,rvHigh:P=900,useMaxRV:j=!1,lines:J=[]}=d,H=ge(),{rarityTotal:Te,slotTotal:Ke,lockedTotal:ke,linesTotal:we,equippedTotal:X,setTotal:Le,mainStatTotal:Ae,subStatTotal:Ie,locationTotal:_e}=o.useMemo(()=>{const t={rarityTotal:Q,slotTotal:U,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:Qe,mainStatTotal:fe,subStatTotal:E,locationTotal:[...be,""]};return et(t,m=>Object.entries(H.arts.data).forEach(([Y,z])=>{const{rarity:O,slotKey:ee,location:M,setKey:te,mainStatKey:ae,substats:Re}=z,le=z.lock?"locked":"unlocked",se=z.substats.filter(W=>W.value).length,oe=M?"equipped":"unequipped";(!p||z.slotKey===d.slotKeys[0])&&(m.rarityTotal[O].total++,m.slotTotal[ee].total++,m.lockedTotal[le].total++,m.linesTotal[se].total++,m.equippedTotal[oe].total++,m.setTotal[te].total++,m.mainStatTotal[ae].total++,Re.forEach(W=>{const V=W.key;V&&(m.subStatTotal[V].total++,u[Y]&&m.subStatTotal[V].current++)}),m.locationTotal[M].total++),u[Y]&&(m.rarityTotal[O].current++,m.slotTotal[ee].current++,m.lockedTotal[le].current++,m.linesTotal[se].current++,m.equippedTotal[oe].current++,m.setTotal[te].current++,m.mainStatTotal[ae].current++,m.locationTotal[M].current++)}))},[H,p,u,d]),{effFilter:Ee}=Ue();return c(G,{container:!0,spacing:1,children:[c(G,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[c(v,{p:1,children:[e(_,{t:a,i18nKey:"subheadings.general"}),c(w,{spacing:1,children:[e(L,{sx:{bgcolor:q.palette.contentNormal.light}}),e(nt,{showLevelText:!0,levelLow:y,levelHigh:S,setLow:t=>s({levelLow:t}),setHigh:t=>s({levelHigh:t}),setBoth:(t,m)=>s({levelLow:t,levelHigh:m})}),e(I,{fullWidth:!0,value:r,size:"small",children:Q.map(t=>c(A,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({rarity:bt(r,t)}),children:[e(xe,{stars:t,inline:!0}),e(T,{label:Te[t],size:"small"})]},t))}),e(I,{fullWidth:!0,value:l,size:"small",disabled:p,children:U.map(t=>c(A,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({slotKeys:xt(l,t)}),children:[e(Ze,{slotKey:t}),e(T,{label:Ke[t],size:"small"})]},t))})]}),c(w,{spacing:1.5,pt:1.5,children:[e(dt,{totals:Ae,mainStatKeys:f,setMainStatKeys:t=>s({mainStatKeys:t})}),e(mt,{totals:Le,artSetKeys:h,setArtSetKeys:t=>s({artSetKeys:t})})]})]}),c(v,{p:1,children:[e(_,{t:a,i18nKey:"subheadings.substats"}),e(L,{sx:{bgcolor:q.palette.contentNormal.light,marginBottom:1}}),c(w,{spacing:1.5,children:[e(I,{fullWidth:!0,value:J,size:"small",children:[1,2,3,4].map(t=>c(A,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({lines:St(J,t)}),children:[e(v,{whiteSpace:"nowrap",children:a("sub",{count:t})}),e(T,{label:we[t],size:"small"})]},t))}),e(pt,{totals:Ie,substatKeys:C,setSubstatKeys:t=>s({substats:t})})]})]})]}),c(G,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[c(v,{p:1,children:[e(_,{t:a,i18nKey:"subheadings.inventory"}),c(w,{spacing:1,children:[e(L,{sx:{bgcolor:q.palette.contentNormal.light}}),e(I,{fullWidth:!0,value:b,size:"small",children:Z.map((t,m)=>c(A,{value:t,sx:{display:"flex",gap:1},onClick:()=>s({locked:yt(b,t)}),children:[m?e(Ye,{}):e(Oe,{}),e(_,{i18nKey:`ui:${t}`,t:a}),e(T,{label:ke[m?"unlocked":"locked"],size:"small"})]},t))}),c(F,{startIcon:e(Xe,{}),color:n?"success":"secondary",onClick:()=>s({showInventory:!n}),children:[a`artInInv`," ",e(T,{sx:{ml:1},label:X.unequipped,size:"small"})]}),c(F,{startIcon:e(ve,{}),color:g?"success":"secondary",onClick:()=>s({showEquipped:!g}),children:[a`equippedArt`," ",e(T,{sx:{ml:1},label:X.equipped,size:"small"})]})]}),e(w,{spacing:1.5,pt:1.5,children:e(o.Suspense,{fallback:null,children:e(tt,{title:g?a`locationsTooltip`:"",placement:"top",children:e("span",{children:e(ht,{totals:_e,locations:g?[]:x,setLocations:t=>s({locations:t}),disabled:g})})})})})]}),c(v,{p:1,children:[e(_,{t:a,i18nKey:"subheadings.rollvalue"}),c(w,{spacing:1,children:[e(L,{sx:{bgcolor:q.palette.contentNormal.light}}),e(ft,{showLevelText:!0,rvLow:K,rvHigh:P,useMaxRV:j,switchFilter:t=>s({useMaxRV:t}),setLow:t=>s({rvLow:t}),setHigh:t=>s({rvHigh:t}),setBoth:(t,m)=>s({rvLow:t,rvHigh:m})}),e(gt,{selectedKeys:Ee,onChange:t=>H.displayArtifact.set({effFilter:t})})]})]})]})]})}const $t=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));export{Ct as A,w as S,nt as a,$t as b};