import{e as r,n as x,p as e,a0 as w,a2 as A,dv as ee,r as te,i as ae,j as le,u as T,bL as se,bj as Z,q as S,K as oe,cn as Le,$ as re,b as ne,d as we,a9 as Ae,ao as _e,cu as Ie,an as ie,V as ze,o as Ee,J as R,cm as $,k as j,N as qe,B as D,am as Re}from"./index-e3e78834.js";import{d as $e,a as je}from"./StatEditorList-73886ac9.js";import{c as ce,C as Be,a as K,S as L,h as _}from"./StarDisplay-f730c097.js";import{b as He}from"./totalUtils-87d1abcc.js";import{B as Pe}from"./Help-0edbbf0a.js";import{S as ue,s as Ne}from"./sortByRarityAndName-b5d6487b.js";import{a as de}from"./Artifact-dd02e3ae.js";import{S as me,g as Me}from"./index-1a05a278.js";import{e as I,c as Ve}from"./LocationAutocomplete-ef17d1f9.js";import{a as We,s as Ge}from"./index-6a4b0350.js";import{I as Fe}from"./ColoredText-421face3.js";import{S as Je}from"./SlotIcon-cd8206d5.js";function Qe({levelLow:u,levelHigh:s,setLow:n,setHigh:p,setBoth:d,dark:i=!1,disabled:m=!1,showLevelText:f=!1}){const[l,a]=r.useState(u),[g,C]=r.useState(s),y=r.useCallback((h,b)=>{if(typeof b=="number")throw new TypeError;const[o,v]=b;a(o),C(v)},[a,C]);return r.useEffect(()=>a(u),[a,u]),r.useEffect(()=>C(s),[C,s]),x(ee,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:i?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[e(A,{value:l,onChange:h=>n(w(h??0,0,s)),sx:{px:1,pl:f?2:void 0,width:f?100:50,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:f?"right":"center"}},startAdornment:f?"Level: ":void 0,disabled:m}),e(ue,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[l,g],onChange:y,onChangeCommitted:(h,b)=>d(b[0],b[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:m}),e(A,{value:g,onChange:h=>p(w(h??0,u,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:m})]})}var H={},Ue=ae;Object.defineProperty(H,"__esModule",{value:!0});var fe=H.default=void 0,Xe=Ue(te()),Ye=le,Ze=(0,Xe.default)((0,Ye.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");fe=H.default=Ze;var P={},De=ae;Object.defineProperty(P,"__esModule",{value:!0});var pe=P.default=void 0,Oe=De(te()),O=le,et=(0,Oe.default)([(0,O.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,O.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");pe=P.default=et;function tt({mainStatKeys:u,setMainStatKeys:s,totals:n}){const{t:p}=T("artifact"),{t:d}=T("statKey_gen"),i=r.useMemo(()=>se.map(a=>({key:a,label:`${d(a)}${de(a)}`,variant:Z.getVariant(a)})),[d]),m=r.useCallback(a=>e(me,{statKey:a,iconProps:{sx:{ml:1,color:Z.getVariant(a)}}}),[]),f=r.useCallback(a=>e("strong",{children:n[a]}),[n]),l=r.useCallback(a=>e(S,{size:"small",label:n[a]}),[n]);return e(I,{options:i,valueKeys:u,onChange:s,toImg:m,toExLabel:f,toExItemLabel:l,label:p("autocompleteLabels.mainStats")})}function at({artSetKeys:u,setArtSetKeys:s,totals:n}){const{t:p}=T(["artifact","artifactNames_gen"]),d=r.useCallback(l=>e(Fe,{src:We(l),size:3}),[]),i=r.useCallback(l=>e("strong",{children:n[l]}),[n]),m=r.useCallback(l=>e(S,{size:"small",label:n[l]}),[n]),f=r.useMemo(()=>Object.entries(Ge).flatMap(([l,a])=>a.map(g=>({key:g,grouper:+l,label:p(`artifactNames_gen:${g}`)}))).sort(Ne),[p]);return e(I,{options:f,valueKeys:u,label:p("artifact:autocompleteLabels.sets"),toImg:d,toExLabel:i,toExItemLabel:m,onChange:s,groupBy:l=>{var a;return((a=l.grouper)==null?void 0:a.toString())??""},renderGroup:l=>l.group&&x(Le,{component:oe,children:[x(Ve,{sx:{top:"-1em"},children:[l.group," ",e(ce,{stars:+l.group,inline:!0})]},`${l.group}Header`),l.children]},l.group)})}function lt({substatKeys:u,setSubstatKeys:s,totals:n}){const{t:p}=T("artifact"),{t:d}=T("statKey_gen"),i=r.useMemo(()=>re.map(a=>({key:a,label:`${d(a)}${de(a)}`})),[d]),m=r.useCallback(a=>e(me,{statKey:a,iconProps:{sx:{ml:1}}}),[]),f=r.useCallback(a=>e("strong",{children:n[a]}),[n]),l=r.useCallback(a=>e(S,{size:"small",label:n[a]}),[n]);return e(I,{options:i,toImg:m,toExLabel:f,toExItemLabel:l,valueKeys:u,onChange:s,label:p("autocompleteLabels.substats")})}function st({locations:u,setLocations:s,totals:n,disabled:p}){const{t:d}=T(["artifact","sillyWisher_charNames","charNames_gen"]),i=ne(),{gender:m}=we(),{silly:f}=r.useContext(Ae),l=r.useCallback((o,v)=>d(`${v?"sillyWisher_charNames":"charNames_gen"}:${_e(i.chars.LocationToCharacterKey(o),m)}`),[i,m,d]),a=r.useCallback(o=>e(Be,{characterKey:i.chars.LocationToCharacterKey(o)}),[i]),g=r.useCallback(o=>e("strong",{children:n[o]}),[n]),C=r.useCallback(o=>e(S,{size:"small",label:n[o]}),[n]),y=r.useCallback(o=>o==="Traveler"?Ie.some(v=>i.charMeta.get(v).favorite):o?i.charMeta.get(o).favorite:!1,[i]),h=r.useCallback(o=>Me(i.chars.LocationToCharacterKey(o),m).elementKey??void 0,[i,m]),b=r.useMemo(()=>ie.filter(o=>i.chars.get(i.chars.LocationToCharacterKey(o))).map(o=>({key:o,label:l(o,f),favorite:y(o),color:h(o),alternateNames:[l(o,!1)]})).sort((o,v)=>o.favorite&&!v.favorite?-1:!o.favorite&&v.favorite?1:o.label.localeCompare(v.label)),[i.chars,y,h,f,l]);return e(r.Suspense,{fallback:e(ze,{variant:"text",width:100}),children:e(I,{disabled:p,options:b,valueKeys:u,onChange:o=>s(o),toImg:a,toExLabel:g,toExItemLabel:C,label:d`artifact:filterLocation.location`,chipProps:{variant:"outlined"}})})}function ot({levelLow:u,levelHigh:s,setLow:n,setHigh:p,setBoth:d,dark:i=!1,disabled:m=!1}){const[f,l]=r.useState(u),[a,g]=r.useState(s),C=r.useCallback((y,h)=>{if(typeof h=="number")throw new TypeError;const[b,o]=h;l(b),g(o)},[l,g]);return r.useEffect(()=>l(u),[l,u]),r.useEffect(()=>g(s),[g,s]),x(ee,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:i?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[e(A,{value:f,onChange:y=>n(w(y??0,0,s)),sx:{px:1,pl:2,width:100,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:"right"}},startAdornment:"RV: ",disabled:m}),e(ue,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact RV Range",value:[f,a],onChange:C,onChangeCommitted:(y,h)=>d(h[0],h[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:m}),e(A,{value:a,onChange:y=>p(w(y??0,u,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:m})]})}const B=["locked","unlocked"],rt=_([...$]),nt=_([...j]),it=_([...B]),ct=_([1,2,3,4]);function ut({filterOption:u,filterOptionDispatch:s,filteredIds:n,disableSlotFilter:p=!1}){const{t:d}=T(["artifact","ui"]),i=r.useMemo(()=>Ee(n,t=>!0),[n]),{artSetKeys:m=[],mainStatKeys:f=[],rarity:l=[],slotKeys:a=[],levelLow:g=0,levelHigh:C=20,substats:y=[],locations:h,showEquipped:b,showInventory:o,locked:v=[...B],rvLow:he=0,rvHigh:be=900,lines:N=[]}=u,M=ne(),{rarityTotal:ge,slotTotal:xe,lockedTotal:ye,linesTotal:ve,equippedTotal:V,setTotal:Ce,mainStatTotal:Se,subStatTotal:Te,locationTotal:ke}=r.useMemo(()=>{const t={rarityTotal:$,slotTotal:j,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:Re,mainStatTotal:se,subStatTotal:re,locationTotal:[...ie,""]};return He(t,c=>Object.entries(M.arts.data).forEach(([W,k])=>{const{rarity:G,slotKey:F,location:z,setKey:J,mainStatKey:Q,substats:Ke}=k,U=k.lock?"locked":"unlocked",X=k.substats.filter(E=>E.value).length,Y=z?"equipped":"unequipped";(!p||k.slotKey===u.slotKeys[0])&&(c.rarityTotal[G].total++,c.slotTotal[F].total++,c.lockedTotal[U].total++,c.linesTotal[X].total++,c.equippedTotal[Y].total++,c.setTotal[J].total++,c.mainStatTotal[Q].total++,Ke.forEach(E=>{const q=E.key;q&&(c.subStatTotal[q].total++,i[W]&&c.subStatTotal[q].current++)}),c.locationTotal[z].total++),i[W]&&(c.rarityTotal[G].current++,c.slotTotal[F].current++,c.lockedTotal[U].current++,c.linesTotal[X].current++,c.equippedTotal[Y].current++,c.setTotal[J].current++,c.mainStatTotal[Q].current++,c.locationTotal[z].current++)}))},[M,p,i,u]);return x(R,{container:!0,spacing:1,children:[x(R,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[e(L,{fullWidth:!0,value:l,size:"small",children:$.map(t=>x(K,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({rarity:rt(l,t)}),children:[e(ce,{stars:t,inline:!0}),e(S,{label:ge[t],size:"small"})]},t))}),e(L,{fullWidth:!0,value:a,size:"small",disabled:p,children:j.map(t=>x(K,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({slotKeys:nt(a,t)}),children:[e(Je,{slotKey:t}),e(S,{label:xe[t],size:"small"})]},t))}),e(L,{fullWidth:!0,value:v,size:"small",children:B.map((t,c)=>x(K,{value:t,sx:{display:"flex",gap:1},onClick:()=>s({locked:it(v,t)}),children:[c?e($e,{}):e(je,{}),e(qe,{i18nKey:`ui:${t}`,t:d}),e(S,{label:ye[c?"unlocked":"locked"],size:"small"})]},t))}),e(L,{fullWidth:!0,value:N,size:"small",children:[1,2,3,4].map(t=>x(K,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({lines:ct(N,t)}),children:[e(oe,{whiteSpace:"nowrap",children:d("sub",{count:t})}),e(S,{label:ve[t],size:"small"})]},t))}),x(D,{startIcon:e(pe,{}),color:b?"success":"secondary",onClick:()=>s({showEquipped:!b}),children:[d`equippedArt`," ",e(S,{sx:{ml:1},label:V.equipped,size:"small"})]}),x(D,{startIcon:e(fe,{}),color:o?"success":"secondary",onClick:()=>s({showInventory:!o}),children:[d`artInInv`," ",e(S,{sx:{ml:1},label:V.unequipped,size:"small"})]}),e(Qe,{showLevelText:!0,levelLow:g,levelHigh:C,setLow:t=>s({levelLow:t}),setHigh:t=>s({levelHigh:t}),setBoth:(t,c)=>s({levelLow:t,levelHigh:c})}),e(ot,{showLevelText:!0,levelLow:he,levelHigh:be,setLow:t=>s({rvLow:t}),setHigh:t=>s({rvHigh:t}),setBoth:(t,c)=>s({rvLow:t,rvHigh:c})})]}),x(R,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[e(at,{totals:Ce,artSetKeys:m,setArtSetKeys:t=>s({artSetKeys:t})}),e(tt,{totals:Se,mainStatKeys:f,setMainStatKeys:t=>s({mainStatKeys:t})}),e(lt,{totals:Te,substatKeys:y,setSubstatKeys:t=>s({substats:t})}),e(r.Suspense,{fallback:null,children:e(Pe,{title:b?d`locationsTooltip`:"",placement:"top",children:e("span",{children:e(st,{totals:ke,locations:b?[]:h,setLocations:t=>s({locations:t}),disabled:b})})})})]})]})}const Tt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));export{ut as A,Qe as a,Tt as b};
