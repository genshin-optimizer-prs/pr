"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[537],{51460:(e,t,a)=>{var l=a(95938);t.Z=void 0;var s=l(a(68671)),o=a(52322),r=(0,s.default)((0,o.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");t.Z=r},87051:(e,t,a)=>{var l=a(95938);t.Z=void 0;var s=l(a(68671)),o=a(52322),r=(0,s.default)([(0,o.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,o.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");t.Z=r},22537:(e,t,a)=>{a.r(t),a.d(t,{default:()=>oe});var l=a(31981),s=a(12761),o=a(51460),r=a(75927),i=a(93994),n=a(87051),c=a(41075),u=a(92794),d=a(66198),p=a(67550),h=a(83249),Z=a(2784),m=a(21560),b=a(34156),v=a(61851),x=a(2313),g=a(45269),f=a(58489),y=a(36674),k=a(51290),C=a(69614),T=a(25576),w=a(39099),L=a(4371),K=a(52903);function S({mainStatKeys:e,setMainStatKeys:t,totals:a}){const{t:s}=(0,m.$G)("artifact"),{t:o}=(0,m.$G)("statKey_gen"),r=(0,Z.useMemo)((()=>l.rW.map((e=>({key:e,label:`${o(e)}${(0,C.V)(e)}`,variant:T.ZP.getVariant(e)})))),[o]),i=(0,Z.useCallback)((e=>(0,K.tZ)(w.C,{statKey:e,iconProps:{sx:{ml:1,color:T.ZP.getVariant(e)}}})),[]),n=(0,Z.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),c=(0,Z.useCallback)((e=>(0,K.tZ)(d.Z,{size:"small",label:a[e]})),[a]);return(0,K.tZ)(L.c,{options:r,valueKeys:e,onChange:t,toImg:i,toExLabel:n,toExItemLabel:c,label:s("autocompleteLabels.mainStats")})}var E=a(80422),z=a(38951),B=a(1089),P=a(51576),$=a(79410),H=a(86873);function I({artSetKeys:e,setArtSetKeys:t,totals:a}){const{t:l}=(0,m.$G)(["artifact","artifactNames_gen"]),s=(0,Z.useCallback)((e=>(0,K.tZ)($.Z,{src:(0,P.jU)(e),size:3})),[]),o=(0,Z.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),r=(0,Z.useCallback)((e=>(0,K.tZ)(d.Z,{size:"small",label:a[e]})),[a]),i=(0,Z.useMemo)((()=>Object.entries(B.WO).flatMap((([e,t])=>t.map((t=>({key:t,grouper:+e,label:l(`artifactNames_gen:${t}`)}))))).sort(H.Z)),[l]);return(0,K.tZ)(L.c,{options:i,valueKeys:e,label:l("artifact:autocompleteLabels.sets"),toImg:s,toExLabel:o,toExItemLabel:r,onChange:t,groupBy:e=>{var t,a;return null!=(t=null==(a=e.grouper)?void 0:a.toString())?t:""},renderGroup:e=>e.group&&(0,K.BX)(E.Z,{component:p.Z,children:[(0,K.BX)(z.Z,{sx:{top:"-1em"},children:[e.group," ",(0,K.tZ)(y.q,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group)})}function X({substatKeys:e,setSubstatKeys:t,totals:a}){const{t:s}=(0,m.$G)("artifact"),{t:o}=(0,m.$G)("statKey_gen"),r=(0,Z.useMemo)((()=>l._m.map((e=>({key:e,label:`${o(e)}${(0,C.V)(e)}`})))),[o]),i=(0,Z.useCallback)((e=>(0,K.tZ)(w.C,{statKey:e,iconProps:{sx:{ml:1}}})),[]),n=(0,Z.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),c=(0,Z.useCallback)((e=>(0,K.tZ)(d.Z,{size:"small",label:a[e]})),[a]);return(0,K.tZ)(L.c,{options:r,toImg:i,toExLabel:n,toExItemLabel:c,valueKeys:e,onChange:t,label:s("autocompleteLabels.substats")})}var q=a(79906),W=a(23657),A=a(92064),M=a(55893),G=a(80680);let _,V=e=>e;function R({locations:e,setLocations:t,totals:a,disabled:s}){const{t:o}=(0,m.$G)(["artifact","sillyWisher_charNames","charNames_gen"]),{database:r}=(0,Z.useContext)(b.t),{gender:i}=(0,M.Z)(),{silly:n}=(0,Z.useContext)(W.E),c=(0,Z.useCallback)(((e,t)=>o(`${t?"sillyWisher_charNames":"charNames_gen"}:${(0,l.Cs)(r.chars.LocationToCharacterKey(e),i)}`)),[r,i,o]),u=(0,Z.useCallback)((e=>(0,K.tZ)(G.Z,{characterKey:r.chars.LocationToCharacterKey(e)})),[r]),p=(0,Z.useCallback)((e=>(0,K.tZ)("strong",{children:a[e]})),[a]),h=(0,Z.useCallback)((e=>(0,K.tZ)(d.Z,{size:"small",label:a[e]})),[a]),v=(0,Z.useCallback)((e=>"Traveler"===e?l.vF.some((e=>r.charMeta.get(e).favorite)):!!e&&r.charMeta.get(e).favorite),[r]),x=(0,Z.useCallback)((e=>{var t;return null!=(t=(0,A.m)(r.chars.LocationToCharacterKey(e),i).elementKey)?t:void 0}),[r,i]),g=(0,Z.useMemo)((()=>l.vp.filter((e=>r.chars.get(r.chars.LocationToCharacterKey(e)))).map((e=>({key:e,label:c(e,n),favorite:v(e),variant:x(e),alternateNames:[c(e,!1)]}))).sort(((e,t)=>e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:e.label.localeCompare(t.label)))),[r.chars,v,x,n,c]);return(0,K.tZ)(Z.Suspense,{fallback:(0,K.tZ)(q.Z,{variant:"text",width:100}),children:(0,K.tZ)(L.c,{disabled:s,options:g,valueKeys:e,onChange:e=>t(e),toImg:u,toExLabel:p,toExItemLabel:h,label:o(_||(_=V`artifact:filterLocation.location`)),chipProps:{variant:"outlined"}})})}var D=a(92096),N=a(66510),j=a(89977);function O({levelLow:e,levelHigh:t,setLow:a,setHigh:l,setBoth:o,dark:r=!1,disabled:i=!1}){const[n,c]=(0,Z.useState)(e),[u,d]=(0,Z.useState)(t),p=(0,Z.useCallback)(((e,t)=>{if("number"==typeof t)throw new TypeError;const[a,l]=t;c(a),d(l)}),[c,d]);return(0,Z.useEffect)((()=>c(e)),[c,e]),(0,Z.useEffect)((()=>d(t)),[d,t]),(0,K.BX)(D.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:r?"contentDark.main":"contentLight.main",overflow:"visible"},children:[(0,K.tZ)(j.ZP,{value:n,onChange:e=>a((0,s.re)(null!=e?e:0,0,t)),sx:{px:1,pl:2,width:100,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:"right"}},startAdornment:"RV: ",disabled:i}),(0,K.tZ)(N.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact RV Range",value:[n,u],onChange:p,onChangeCommitted:(e,t)=>o(t[0],t[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:i}),(0,K.tZ)(j.ZP,{value:u,onChange:t=>l((0,s.re)(null!=t?t:0,e,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:i})]})}var F=a(79199);let U,J,Q,Y=e=>e;const ee=["locked","unlocked"],te=(0,v.X)([...l.$W]),ae=(0,v.X)([...l.Ex]),le=(0,v.X)([...ee]),se=(0,v.X)([1,2,3,4]);function oe({filterOption:e,filterOptionDispatch:t,filteredIds:a,disableSlotFilter:v=!1}){const{t:C}=(0,m.$G)(["artifact","ui"]),T=(0,Z.useMemo)((()=>(0,s.K8)(a,(e=>!0))),[a]),{artSetKeys:w=[],mainStatKeys:L=[],rarity:E=[],slotKeys:z=[],levelLow:B=0,levelHigh:P=20,substats:$=[],locations:H,showEquipped:q,showInventory:W,locked:A=[...ee],rvLow:M=0,rvHigh:G=900,lines:_=[]}=e,{database:V}=(0,Z.useContext)(b.t),{rarityTotal:D,slotTotal:N,lockedTotal:j,linesTotal:oe,equippedTotal:re,setTotal:ie,mainStatTotal:ne,subStatTotal:ce,locationTotal:ue}=(0,Z.useMemo)((()=>{const e={rarityTotal:l.$W,slotTotal:l.Ex,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:l.Gt,mainStatTotal:l.rW,subStatTotal:l._m,locationTotal:[...l.vp,""]};return(0,x.A)(e,(e=>Object.entries(V.arts.data).forEach((([t,a])=>{const{rarity:l,slotKey:s,location:o,setKey:r,mainStatKey:i,substats:n}=a,c=a.lock?"locked":"unlocked",u=a.substats.filter((e=>e.value)).length,d=o?"equipped":"unequipped";e.rarityTotal[l].total++,e.slotTotal[s].total++,e.lockedTotal[c].total++,e.linesTotal[u].total++,e.equippedTotal[d].total++,e.setTotal[r].total++,e.mainStatTotal[i].total++,n.forEach((a=>{const l=a.key;l&&(e.subStatTotal[l].total++,T[t]&&e.subStatTotal[l].current++)})),e.locationTotal[o].total++,T[t]&&(e.rarityTotal[l].current++,e.slotTotal[s].current++,e.lockedTotal[c].current++,e.linesTotal[u].current++,e.equippedTotal[d].current++,e.setTotal[r].current++,e.mainStatTotal[i].current++,e.locationTotal[o].current++)}))))}),[V,T]);return(0,K.BX)(c.ZP,{container:!0,spacing:1,children:[(0,K.BX)(c.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,K.tZ)(f.Z,{fullWidth:!0,value:E,size:"small",children:l.$W.map((e=>(0,K.BX)(u.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:e,onClick:()=>t({rarity:te(E,e)}),children:[(0,K.tZ)(y.q,{stars:e,inline:!0}),(0,K.tZ)(d.Z,{label:D[e],size:"small"})]},e)))}),(0,K.tZ)(f.Z,{fullWidth:!0,value:z,size:"small",disabled:v,children:l.Ex.map((e=>(0,K.BX)(u.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:e,onClick:()=>t({slotKeys:ae(z,e)}),children:[(0,K.tZ)(F.Z,{slotKey:e}),(0,K.tZ)(d.Z,{label:N[e],size:"small"})]},e)))}),(0,K.tZ)(f.Z,{fullWidth:!0,value:A,size:"small",children:ee.map(((e,a)=>(0,K.BX)(u.Z,{value:e,sx:{display:"flex",gap:1},onClick:()=>t({locked:le(A,e)}),children:[a?(0,K.tZ)(i.Z,{}):(0,K.tZ)(r.Z,{}),(0,K.tZ)(m.cC,{i18nKey:`ui:${e}`,t:C}),(0,K.tZ)(d.Z,{label:j[a?"unlocked":"locked"],size:"small"})]},e)))}),(0,K.tZ)(f.Z,{fullWidth:!0,value:_,size:"small",children:[1,2,3,4].map((e=>(0,K.BX)(u.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:e,onClick:()=>t({lines:se(_,e)}),children:[(0,K.tZ)(p.Z,{whiteSpace:"nowrap",children:C("sub",{count:e})}),(0,K.tZ)(d.Z,{label:oe[e],size:"small"})]},e)))}),(0,K.BX)(h.Z,{startIcon:(0,K.tZ)(n.Z,{}),color:q?"success":"secondary",onClick:()=>t({showEquipped:!q}),children:[C(U||(U=Y`equippedArt`))," ",(0,K.tZ)(d.Z,{sx:{ml:1},label:re.equipped,size:"small"})]}),(0,K.BX)(h.Z,{startIcon:(0,K.tZ)(o.Z,{}),color:W?"success":"secondary",onClick:()=>t({showInventory:!W}),children:[C(J||(J=Y`artInInv`))," ",(0,K.tZ)(d.Z,{sx:{ml:1},label:re.unequipped,size:"small"})]}),(0,K.tZ)(k.Z,{showLevelText:!0,levelLow:B,levelHigh:P,setLow:e=>t({levelLow:e}),setHigh:e=>t({levelHigh:e}),setBoth:(e,a)=>t({levelLow:e,levelHigh:a})}),(0,K.tZ)(O,{showLevelText:!0,levelLow:M,levelHigh:G,setLow:e=>t({rvLow:e}),setHigh:e=>t({rvHigh:e}),setBoth:(e,a)=>t({rvLow:e,rvHigh:a})})]}),(0,K.BX)(c.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,K.tZ)(I,{totals:ie,artSetKeys:w,setArtSetKeys:e=>t({artSetKeys:e})}),(0,K.tZ)(S,{totals:ne,mainStatKeys:L,setMainStatKeys:e=>t({mainStatKeys:e})}),(0,K.tZ)(X,{totals:ce,substatKeys:$,setSubstatKeys:e=>t({substats:e})}),(0,K.tZ)(Z.Suspense,{fallback:null,children:(0,K.tZ)(g.Z,{title:q?C(Q||(Q=Y`locationsTooltip`)):"",placement:"top",children:(0,K.tZ)("span",{children:(0,K.tZ)(R,{totals:ue,locations:q?[]:H,setLocations:e=>t({locations:e}),disabled:q})})})})]})]})}},51290:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(92096),s=a(66510),o=a(2784),r=a(12761),i=a(89977),n=a(52903);function c({levelLow:e,levelHigh:t,setLow:a,setHigh:c,setBoth:u,dark:d=!1,disabled:p=!1,showLevelText:h=!1}){const[Z,m]=(0,o.useState)(e),[b,v]=(0,o.useState)(t),x=(0,o.useCallback)(((e,t)=>{if("number"==typeof t)throw new TypeError;const[a,l]=t;m(a),v(l)}),[m,v]);return(0,o.useEffect)((()=>m(e)),[m,e]),(0,o.useEffect)((()=>v(t)),[v,t]),(0,n.BX)(l.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:d?"contentDark.main":"contentLight.main",overflow:"visible"},children:[(0,n.tZ)(i.ZP,{value:Z,onChange:e=>a((0,r.re)(null!=e?e:0,0,t)),sx:{px:1,pl:h?2:void 0,width:h?100:50,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:h?"right":"center"}},startAdornment:h?"Level: ":void 0,disabled:p}),(0,n.tZ)(s.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[Z,b],onChange:x,onChangeCommitted:(e,t)=>u(t[0],t[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:p}),(0,n.tZ)(i.ZP,{value:b,onChange:t=>c((0,r.re)(null!=t?t:0,e,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:p})]})}}}]);