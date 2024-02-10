"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[537],{51460:(e,t,a)=>{var l=a(14859);t.Z=void 0;var s=l(a(68671)),o=a(52322),r=(0,s.default)((0,o.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");t.Z=r},87051:(e,t,a)=>{var l=a(14859);t.Z=void 0;var s=l(a(68671)),o=a(52322),r=(0,s.default)([(0,o.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,o.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");t.Z=r},22537:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var l=a(42745),s=a(31653),o=a(70274),r=a(51460),i=a(75927),n=a(93994),c=a(87051),u=a(41075),d=a(92794),p=a(66198),h=a(67550),Z=a(83249),m=a(2784),b=a(11141),v=a(61851),g=a(2313),x=a(45269),f=a(58489),y=a(36674),k=a(51290),C=a(15162),T=a(69614),w=a(39099),L=a(75958),K=a(52903);function S({mainStatKeys:e,setMainStatKeys:t,totals:a}){const{t:l}=(0,b.$G)("artifact"),{t:o}=(0,b.$G)("statKey_gen"),r=(0,m.useMemo)((()=>s.rW.map((e=>({key:e,label:`${o(e)}${(0,T.V)(e)}`,variant:C.d4.getVariant(e)})))),[o]),i=(0,m.useCallback)((e=>(0,K.tZ)(w.C,{statKey:e,iconProps:{sx:{ml:1,color:C.d4.getVariant(e)}}})),[]),n=(0,m.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),c=(0,m.useCallback)((e=>(0,K.tZ)(p.Z,{size:"small",label:a[e]})),[a]);return(0,K.tZ)(L.c,{options:r,valueKeys:e,onChange:t,toImg:i,toExLabel:n,toExItemLabel:c,label:l("autocompleteLabels.mainStats")})}var z=a(80422),E=a(38951),B=a(4121),$=a(51576),H=a(79410),I=a(86873);function P({artSetKeys:e,setArtSetKeys:t,totals:a}){const{t:l}=(0,b.$G)(["artifact","artifactNames_gen"]),s=(0,m.useCallback)((e=>(0,K.tZ)(H.Z,{src:(0,$.jU)(e),size:3})),[]),o=(0,m.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),r=(0,m.useCallback)((e=>(0,K.tZ)(p.Z,{size:"small",label:a[e]})),[a]),i=(0,m.useMemo)((()=>Object.entries(B.WO).flatMap((([e,t])=>t.map((t=>({key:t,grouper:+e,label:l(`artifactNames_gen:${t}`)}))))).sort(I.Z)),[l]);return(0,K.tZ)(L.c,{options:i,valueKeys:e,label:l("artifact:autocompleteLabels.sets"),toImg:s,toExLabel:o,toExItemLabel:r,onChange:t,groupBy:e=>{var t,a;return null!=(t=null==(a=e.grouper)?void 0:a.toString())?t:""},renderGroup:e=>e.group&&(0,K.BX)(z.Z,{component:h.Z,children:[(0,K.BX)(E.Z,{sx:{top:"-1em"},children:[e.group," ",(0,K.tZ)(y.q,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group)})}function W({substatKeys:e,setSubstatKeys:t,totals:a}){const{t:l}=(0,b.$G)("artifact"),{t:o}=(0,b.$G)("statKey_gen"),r=(0,m.useMemo)((()=>s._m.map((e=>({key:e,label:`${o(e)}${(0,T.V)(e)}`})))),[o]),i=(0,m.useCallback)((e=>(0,K.tZ)(w.C,{statKey:e,iconProps:{sx:{ml:1}}})),[]),n=(0,m.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),c=(0,m.useCallback)((e=>(0,K.tZ)(p.Z,{size:"small",label:a[e]})),[a]);return(0,K.tZ)(L.c,{options:r,toImg:i,toExLabel:n,toExItemLabel:c,valueKeys:e,onChange:t,label:l("autocompleteLabels.substats")})}var X=a(79906),q=a(23657),A=a(44180),M=a(80680);let G,_=e=>e;function N({locations:e,setLocations:t,totals:a,disabled:l}){const{t:r}=(0,b.$G)(["artifact","sillyWisher_charNames","charNames_gen"]),i=(0,o.Wz)(),{gender:n}=(0,o.Hz)(),{silly:c}=(0,m.useContext)(q.E),u=(0,m.useCallback)(((e,t)=>r(`${t?"sillyWisher_charNames":"charNames_gen"}:${(0,s.Cs)(i.chars.LocationToCharacterKey(e),n)}`)),[i,n,r]),d=(0,m.useCallback)((e=>(0,K.tZ)(M.Z,{characterKey:i.chars.LocationToCharacterKey(e)})),[i]),h=(0,m.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),Z=(0,m.useCallback)((e=>(0,K.tZ)(p.Z,{size:"small",label:a[e]})),[a]),v=(0,m.useCallback)((e=>"Traveler"===e?s.vF.some((e=>i.charMeta.get(e).favorite)):!!e&&i.charMeta.get(e).favorite),[i]),g=(0,m.useCallback)((e=>{var t;return null!=(t=(0,A.m)(i.chars.LocationToCharacterKey(e),n).elementKey)?t:void 0}),[i,n]),x=(0,m.useMemo)((()=>s.vp.filter((e=>i.chars.get(i.chars.LocationToCharacterKey(e)))).map((e=>({key:e,label:u(e,c),favorite:v(e),color:g(e),alternateNames:[u(e,!1)]}))).sort(((e,t)=>e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:e.label.localeCompare(t.label)))),[i.chars,v,g,c,u]);return(0,K.tZ)(m.Suspense,{fallback:(0,K.tZ)(X.Z,{variant:"text",width:100}),children:(0,K.tZ)(L.c,{disabled:l,options:x,valueKeys:e,onChange:e=>t(e),toImg:d,toExLabel:h,toExItemLabel:Z,label:r(G||(G=_`artifact:filterLocation.location`)),chipProps:{variant:"outlined"}})})}var V=a(92096),R=a(15099),j=a(89977);function D({levelLow:e,levelHigh:t,setLow:a,setHigh:s,setBoth:o,dark:r=!1,disabled:i=!1}){const[n,c]=(0,m.useState)(e),[u,d]=(0,m.useState)(t),p=(0,m.useCallback)(((e,t)=>{if("number"==typeof t)throw new TypeError;const[a,l]=t;c(a),d(l)}),[c,d]);return(0,m.useEffect)((()=>c(e)),[c,e]),(0,m.useEffect)((()=>d(t)),[d,t]),(0,K.BX)(V.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:r?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[(0,K.tZ)(j.ZP,{value:n,onChange:e=>a((0,l.re)(null!=e?e:0,0,t)),sx:{px:1,pl:2,width:100,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:"right"}},startAdornment:"RV: ",disabled:i}),(0,K.tZ)(R.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact RV Range",value:[n,u],onChange:p,onChangeCommitted:(e,t)=>o(t[0],t[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:i}),(0,K.tZ)(j.ZP,{value:u,onChange:t=>s((0,l.re)(null!=t?t:0,e,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:i})]})}var O=a(79199);let F,U,J,Q=e=>e;const Y=["locked","unlocked"],ee=(0,v.X)([...s.$W]),te=(0,v.X)([...s.Ex]),ae=(0,v.X)([...Y]),le=(0,v.X)([1,2,3,4]);function se({filterOption:e,filterOptionDispatch:t,filteredIds:a,disableSlotFilter:v=!1}){const{t:C}=(0,b.$G)(["artifact","ui"]),T=(0,m.useMemo)((()=>(0,l.K8)(a,(e=>!0))),[a]),{artSetKeys:w=[],mainStatKeys:L=[],rarity:z=[],slotKeys:E=[],levelLow:B=0,levelHigh:$=20,substats:H=[],locations:I,showEquipped:X,showInventory:q,locked:A=[...Y],rvLow:M=0,rvHigh:G=900,lines:_=[]}=e,V=(0,o.Wz)(),{rarityTotal:R,slotTotal:j,lockedTotal:se,linesTotal:oe,equippedTotal:re,setTotal:ie,mainStatTotal:ne,subStatTotal:ce,locationTotal:ue}=(0,m.useMemo)((()=>{const t={rarityTotal:s.$W,slotTotal:s.Ex,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:s.Gt,mainStatTotal:s.rW,subStatTotal:s._m,locationTotal:[...s.vp,""]};return(0,g.A)(t,(t=>Object.entries(V.arts.data).forEach((([a,l])=>{const{rarity:s,slotKey:o,location:r,setKey:i,mainStatKey:n,substats:c}=l,u=l.lock?"locked":"unlocked",d=l.substats.filter((e=>e.value)).length,p=r?"equipped":"unequipped";v&&l.slotKey!==e.slotKeys[0]||(t.rarityTotal[s].total++,t.slotTotal[o].total++,t.lockedTotal[u].total++,t.linesTotal[d].total++,t.equippedTotal[p].total++,t.setTotal[i].total++,t.mainStatTotal[n].total++,c.forEach((e=>{const l=e.key;l&&(t.subStatTotal[l].total++,T[a]&&t.subStatTotal[l].current++)})),t.locationTotal[r].total++),T[a]&&(t.rarityTotal[s].current++,t.slotTotal[o].current++,t.lockedTotal[u].current++,t.linesTotal[d].current++,t.equippedTotal[p].current++,t.setTotal[i].current++,t.mainStatTotal[n].current++,t.locationTotal[r].current++)}))))}),[V,v,T,e]);return(0,K.BX)(u.ZP,{container:!0,spacing:1,children:[(0,K.BX)(u.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,K.tZ)(f.Z,{fullWidth:!0,value:z,size:"small",children:s.$W.map((e=>(0,K.BX)(d.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:e,onClick:()=>t({rarity:ee(z,e)}),children:[(0,K.tZ)(y.q,{stars:e,inline:!0}),(0,K.tZ)(p.Z,{label:R[e],size:"small"})]},e)))}),(0,K.tZ)(f.Z,{fullWidth:!0,value:E,size:"small",disabled:v,children:s.Ex.map((e=>(0,K.BX)(d.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:e,onClick:()=>t({slotKeys:te(E,e)}),children:[(0,K.tZ)(O.Z,{slotKey:e}),(0,K.tZ)(p.Z,{label:j[e],size:"small"})]},e)))}),(0,K.tZ)(f.Z,{fullWidth:!0,value:A,size:"small",children:Y.map(((e,a)=>(0,K.BX)(d.Z,{value:e,sx:{display:"flex",gap:1},onClick:()=>t({locked:ae(A,e)}),children:[a?(0,K.tZ)(n.Z,{}):(0,K.tZ)(i.Z,{}),(0,K.tZ)(b.cC,{i18nKey:`ui:${e}`,t:C}),(0,K.tZ)(p.Z,{label:se[a?"unlocked":"locked"],size:"small"})]},e)))}),(0,K.tZ)(f.Z,{fullWidth:!0,value:_,size:"small",children:[1,2,3,4].map((e=>(0,K.BX)(d.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:e,onClick:()=>t({lines:le(_,e)}),children:[(0,K.tZ)(h.Z,{whiteSpace:"nowrap",children:C("sub",{count:e})}),(0,K.tZ)(p.Z,{label:oe[e],size:"small"})]},e)))}),(0,K.BX)(Z.Z,{startIcon:(0,K.tZ)(c.Z,{}),color:X?"success":"secondary",onClick:()=>t({showEquipped:!X}),children:[C(F||(F=Q`equippedArt`))," ",(0,K.tZ)(p.Z,{sx:{ml:1},label:re.equipped,size:"small"})]}),(0,K.BX)(Z.Z,{startIcon:(0,K.tZ)(r.Z,{}),color:q?"success":"secondary",onClick:()=>t({showInventory:!q}),children:[C(U||(U=Q`artInInv`))," ",(0,K.tZ)(p.Z,{sx:{ml:1},label:re.unequipped,size:"small"})]}),(0,K.tZ)(k.Z,{showLevelText:!0,levelLow:B,levelHigh:$,setLow:e=>t({levelLow:e}),setHigh:e=>t({levelHigh:e}),setBoth:(e,a)=>t({levelLow:e,levelHigh:a})}),(0,K.tZ)(D,{showLevelText:!0,levelLow:M,levelHigh:G,setLow:e=>t({rvLow:e}),setHigh:e=>t({rvHigh:e}),setBoth:(e,a)=>t({rvLow:e,rvHigh:a})})]}),(0,K.BX)(u.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,K.tZ)(P,{totals:ie,artSetKeys:w,setArtSetKeys:e=>t({artSetKeys:e})}),(0,K.tZ)(S,{totals:ne,mainStatKeys:L,setMainStatKeys:e=>t({mainStatKeys:e})}),(0,K.tZ)(W,{totals:ce,substatKeys:H,setSubstatKeys:e=>t({substats:e})}),(0,K.tZ)(m.Suspense,{fallback:null,children:(0,K.tZ)(x.Z,{title:X?C(J||(J=Q`locationsTooltip`)):"",placement:"top",children:(0,K.tZ)("span",{children:(0,K.tZ)(N,{totals:ue,locations:X?[]:I,setLocations:e=>t({locations:e}),disabled:X})})})})]})]})}},51290:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(42745),s=a(92096),o=a(15099),r=a(2784),i=a(89977),n=a(52903);function c({levelLow:e,levelHigh:t,setLow:a,setHigh:c,setBoth:u,dark:d=!1,disabled:p=!1,showLevelText:h=!1}){const[Z,m]=(0,r.useState)(e),[b,v]=(0,r.useState)(t),g=(0,r.useCallback)(((e,t)=>{if("number"==typeof t)throw new TypeError;const[a,l]=t;m(a),v(l)}),[m,v]);return(0,r.useEffect)((()=>m(e)),[m,e]),(0,r.useEffect)((()=>v(t)),[v,t]),(0,n.BX)(s.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:d?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[(0,n.tZ)(i.ZP,{value:Z,onChange:e=>a((0,l.re)(null!=e?e:0,0,t)),sx:{px:1,pl:h?2:void 0,width:h?100:50,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:h?"right":"center"}},startAdornment:h?"Level: ":void 0,disabled:p}),(0,n.tZ)(o.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[Z,b],onChange:g,onChangeCommitted:(e,t)=>u(t[0],t[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:p}),(0,n.tZ)(i.ZP,{value:b,onChange:t=>c((0,l.re)(null!=t?t:0,e,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:p})]})}}}]);