"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62],{42861:(t,e,i)=>{var n=i(14859);e.Z=void 0;var r=n(i(68671)),l=i(52322),a=(0,r.default)((0,l.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");e.Z=a},66859:(t,e,i)=>{var n=i(14859);e.Z=void 0;var r=n(i(68671)),l=i(52322),a=(0,r.default)((0,l.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");e.Z=a},24648:(t,e,i)=>{var n=i(14859);e.Z=void 0;var r=n(i(68671)),l=i(52322),a=(0,r.default)((0,l.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");e.Z=a},79199:(t,e,i)=>{i.d(e,{Z:()=>l});var n=i(49284),r=i(52903);function l({slotKey:t,iconProps:e={}}){switch(t){case"flower":return(0,r.tZ)(n.pv,Object.assign({},e));case"plume":return(0,r.tZ)(n.QA,Object.assign({},e));case"sands":return(0,r.tZ)(n.M6,Object.assign({},e));case"goblet":return(0,r.tZ)(n.NN,Object.assign({},e));case"circlet":return(0,r.tZ)(n.qM,Object.assign({},e))}}},30014:(t,e,i)=>{i.r(e),i.d(e,{default:()=>Zt});var n=i(72550),r=i(12761),l=i(92252),a=i(42861),c=i(67550),s=i(7671),o=i(41075),Z=i(5896),d=i(83249),h=i(79906),u=i(62197),f=i(2784),m=i(61877),p=i(11141),y=i(83660),g=i(71179),b=i(45269),x=i(24264),v=i(16549),w=i(56961),P=i(23690),C=i(69698),k=i(1665),A=i(52903);function I({pageKey:t,text:e="",modalTitle:i="",children:l}){const[a,c,Z]=(0,n.aV)("true"!==localStorage.getItem(`infoShown_${t}`)),[m]=(0,f.useState)(Array.isArray(e)?(0,r.F_)(e):e),p=(0,f.useCallback)((()=>{Z(),localStorage.setItem(`infoShown_${t}`,"true")}),[Z,t]);return(0,A.BX)(x.Z,{children:[(0,A.BX)(o.ZP,{container:!0,children:[(0,A.tZ)(o.ZP,{item:!0,flexGrow:1,children:(0,A.tZ)(u.Z,{variant:"caption",pl:1,children:m})}),(0,A.tZ)(o.ZP,{item:!0,xs:"auto",children:(0,A.tZ)(d.Z,{size:"small",color:"info",variant:"contained",onClick:c,startIcon:(0,A.tZ)(v.Z,{}),children:(0,A.tZ)(k.v,{ns:"ui",key18:"info"})})})]}),(0,A.tZ)(C.Z,{containerProps:{maxWidth:"xl"},open:a,onClose:p,children:(0,A.BX)(x.Z,{children:[(0,A.tZ)(s.Z,{sx:{py:1},children:(0,A.BX)(o.ZP,{container:!0,children:[(0,A.tZ)(o.ZP,{item:!0,flexGrow:1,children:(0,A.tZ)(u.Z,{variant:"h6",children:i})}),(0,A.tZ)(o.ZP,{item:!0,children:(0,A.tZ)(P.Z,{onClick:p})})]})}),(0,A.tZ)(w.Z,{}),(0,A.tZ)(s.Z,{children:(0,A.tZ)(f.Suspense,{fallback:(0,A.tZ)(h.Z,{variant:"rectangular",width:"100%",height:500}),children:l})}),(0,A.tZ)(w.Z,{}),(0,A.tZ)(s.Z,{sx:{py:1},children:(0,A.tZ)(P.Z,{large:!0,onClick:p})})]})})]})}var B=i(56489),X=i(34156);function S(){const{database:t}=(0,f.useContext)(X.t),[e,i]=(0,f.useState)(t.displayArtifact.get());return(0,f.useEffect)((()=>t.displayArtifact.follow(((t,e)=>i(e)))),[t]),e}var M=i(30706),D=i(24648),F=i(75927),O=i(93994),j=i(22698),K=i(66859),V=i(12366);const $=(0,f.lazy)((()=>Promise.all([i.e(497),i.e(537),i.e(313)]).then(i.bind(i,22537))));function z({numShowing:t,total:e,artifactIds:i}){const{t:n}=(0,p.$G)(["artifact","ui"]),{database:r}=(0,f.useContext)(X.t),{filterOption:l}=S(),a=(0,f.useCallback)((t=>r.displayArtifact.set({filterOption:Object.assign({},l,t)})),[r,l]);return(0,A.tZ)(f.Suspense,{fallback:(0,A.tZ)(h.Z,{variant:"rectangular",width:"100%",height:300}),children:(0,A.tZ)(x.Z,{children:(0,A.BX)(s.Z,{children:[(0,A.BX)(o.ZP,{container:!0,children:[(0,A.tZ)(o.ZP,{item:!0,children:(0,A.tZ)(u.Z,{variant:"h6",children:(0,A.tZ)(p.cC,{t:n,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),(0,A.tZ)(o.ZP,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:t!==e&&(0,A.BX)(u.Z,{children:["Filtered ",(0,A.tZ)("strong",{children:t})," / ",e]})}),(0,A.tZ)(o.ZP,{item:!0,children:(0,A.tZ)(d.Z,{size:"small",color:"error",onClick:()=>r.displayArtifact.set({action:"reset"}),startIcon:(0,A.tZ)(D.Z,{}),children:(0,A.tZ)(p.cC,{t:n,i18nKey:"ui:reset"})})})]}),(0,A.tZ)(f.Suspense,{fallback:(0,A.tZ)(h.Z,{variant:"rectangular",width:"100%",height:200}),children:(0,A.tZ)($,{filterOption:l,filterOptionDispatch:a,filteredIds:i})})]})})})}function G({artifactIds:t}){const{t:e}=(0,p.$G)(["artifact","ui"]),{database:i}=(0,f.useContext)(X.t),{numDelete:n,numUnequip:r,numUnlock:l,numLock:a}=(0,f.useMemo)((()=>{const e=t.map((t=>i.arts.get(t))),n=e.reduce(((t,e)=>t+(e.lock?0:1)),0),r=e.length-n;return{numDelete:n,numUnequip:e.reduce(((t,e)=>t+(e.location?1:0)),0),numUnlock:n,numLock:r}}),[t,i]);return(0,A.BX)(o.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,A.tZ)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,A.BX)(d.Z,{fullWidth:!0,color:"error",disabled:!r,onClick:()=>window.confirm(`Are you sure you want to unequip ${r} artifacts currently equipped on characters?`)&&t.map((t=>i.arts.set(t,{location:""}))),startIcon:(0,A.tZ)(K.Z,{}),children:[(0,A.tZ)(p.cC,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),(0,A.tZ)(V.Z,{sx:{ml:1},color:r?"success":"secondary",children:r})]})}),(0,A.tZ)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,A.BX)(d.Z,{fullWidth:!0,color:"error",disabled:!n,onClick:()=>window.confirm(`Are you sure you want to delete ${n} artifacts?`)&&t.map((t=>{var e;return!(null!=(e=i.arts.get(t))&&e.lock)&&i.arts.remove(t)})),startIcon:(0,A.tZ)(j.Z,{}),children:[(0,A.tZ)(p.cC,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),(0,A.tZ)(V.Z,{sx:{ml:1},color:n?"success":"secondary",children:n})]})}),(0,A.tZ)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,A.BX)(d.Z,{fullWidth:!0,color:"error",disabled:!a,onClick:()=>window.confirm(`Are you sure you want to unlock ${a} artifacts?`)&&t.map((t=>i.arts.set(t,{lock:!1}))),startIcon:(0,A.tZ)(O.Z,{}),children:[(0,A.tZ)(p.cC,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),(0,A.tZ)(V.Z,{sx:{ml:1},color:a?"success":"secondary",children:a})]})}),(0,A.tZ)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,A.BX)(d.Z,{fullWidth:!0,color:"error",disabled:!l,onClick:()=>window.confirm(`Are you sure you want to lock ${l} artifacts?`)&&t.map((t=>i.arts.set(t,{lock:!0}))),startIcon:(0,A.tZ)(F.Z,{}),children:[(0,A.tZ)(p.cC,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),(0,A.tZ)(V.Z,{sx:{ml:1},color:l?"success":"secondary",children:l})]})}),(0,A.tZ)(o.ZP,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:(0,A.tZ)(u.Z,{variant:"caption",color:"text.secondary",children:(0,A.BX)(p.cC,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",(0,A.tZ)("b",{children:"currently filtered artifacts"})]})})})]})}var E=i(15015),T=i(33927),W=i(107),q=i(87833);let N,U,H=t=>t;function L({show:t,onHide:e}){const{t:i}=(0,p.$G)("artifact");return(0,A.tZ)(C.Z,{open:t,onClose:e,children:(0,A.BX)(q.Z,{children:[(0,A.BX)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,A.BX)(u.Z,{variant:"h6",flexGrow:1,children:[(0,A.tZ)(a.Z,{sx:{verticalAlign:"text-top",mr:1}}),i(N||(N=H`showDup`))]}),(0,A.tZ)(P.Z,{onClick:e})]}),(0,A.tZ)(w.Z,{}),(0,A.tZ)(s.Z,{children:(0,A.tZ)(_,{})})]})})}function _(){const{t}=(0,p.$G)("artifact"),{database:e}=(0,f.useContext)(X.t),[i,r]=(0,n.NW)();(0,f.useEffect)((()=>e.arts.followAny(r)),[r,e]);const l=(0,f.useMemo)((()=>{const t=i&&[];let n=e.arts.keys;for(;0!==n.length;){const i=n.shift();if(!i)continue;const r=e.arts.get(i);if(!r)continue;const{duplicated:l}=e.arts.findDups(r,n);if(!l.length)continue;const a=l.map((t=>t.id));t.push([i,...a].sort((t=>{var i,n;return null!=(i=null==(n=e.arts.get(t))?void 0:n.location)&&i?-1:1}))),n=n.filter((t=>!a.includes(t)))}return t}),[e,i]),a=(0,f.useMemo)((()=>({})),[]);return(0,A.BX)(T.Z,{spacing:2,children:[l.map((t=>(0,A.tZ)(x.Z,{sx:{overflowX:"scroll"},children:(0,A.tZ)(s.Z,{sx:{display:"flex",gap:1},children:t.map((t=>(0,A.tZ)(c.Z,{sx:{minWidth:300},children:(0,A.tZ)(M.Z,{artifactId:t,canEquip:!0,onDelete:()=>e.arts.remove(t),editorProps:a})},t)))})},t.join()))),!l.length&&(0,A.tZ)(W.Z,{variant:"filled",severity:"success",children:t(U||(U=H`noDupAlert`))})]})}var Q=i(31981),R=i(86569),J=i(68330);const Y=[...Q._m];function tt({probabilityFilter:t={},setProbabilityFilter:e,disabled:i=!1}){return(0,A.BX)(x.Z,{children:[(0,A.tZ)(s.Z,{sx:{py:1},children:(0,A.tZ)(u.Z,{variant:"h6",children:"Roll Probability Calculator"})}),(0,A.tZ)(w.Z,{}),(0,A.tZ)(s.Z,{children:(0,A.BX)(o.ZP,{container:!0,spacing:1,children:[(0,A.tZ)(o.ZP,{item:!0,xs:12,md:6,children:(0,A.tZ)(q.Z,{children:(0,A.tZ)(s.Z,{children:(0,A.BX)(u.Z,{children:['This UI only pops up when "Sort by"',(0,A.tZ)("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",(0,A.BX)(R.Z,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),(0,A.tZ)(o.ZP,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:(0,A.tZ)(J.Z,{statKeys:Y,statFilters:t,setStatFilters:e,disabled:i})})]})})]})}var et=i(57928);let it,nt,rt,lt=t=>t;const at=f.lazy((()=>Promise.all([i.e(497),i.e(592),i.e(37),i.e(934)]).then(i.bind(i,17589)))),ct=f.lazy((()=>Promise.all([i.e(592),i.e(528)]).then(i.bind(i,76806)))),st={xs:1,sm:2,md:3,lg:3,xl:4},ot={xs:10,sm:12,md:24,lg:24,xl:24};function Zt(){const{t}=(0,p.$G)(["artifact","ui"]),{database:e}=(0,f.useContext)(X.t),i=S(),[u,v,w]=(0,n.aV)(!0),[P,C,k]=(0,n.aV)(!1),D=(0,n.JT)(),F=ot[D],{sortType:O,effFilter:j,ascending:K,probabilityFilter:V}=i,$="probability"===O,[T,W]=(0,f.useState)(0),q=(0,f.useRef)(null),[N,U]=(0,n.NW)(),H=(0,f.useDeferredValue)(N),_=(0,f.useMemo)((()=>new Set(j)),[j]),Q=(0,f.useCallback)((t=>e.arts.remove(t)),[e]);(0,f.useEffect)((()=>(m.ZP.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny((()=>U())))),[e,U]);const R=(0,f.useCallback)((t=>e.displayArtifact.set({probabilityFilter:t})),[e]),J=(0,f.useMemo)((()=>!e.arts.values.length),[e]),Y=(0,f.useMemo)((()=>(0,E.x3)(_,V)),[_,V]),Zt=(0,f.useMemo)((()=>(0,E.EM)(_)),[_]),ht=(0,f.useDeferredValue)(i),ut=(0,f.useDeferredValue)(V);(0,f.useEffect)((()=>{if($)return e.arts.values.forEach((t=>e.arts.setProbability(t.id,(0,et.B)(t,ut)))),()=>e.arts.values.forEach((t=>e.arts.setProbability(t.id,-1)))}),[e,$,ut]);const{artifactIds:ft,totalArtNum:mt}=(0,f.useMemo)((()=>{var t;const{sortType:i=E.OQ[0],ascending:n=!1,filterOption:l}=ht;let a=e.arts.values;$&&(a=a.filter((t=>t.probability&&1!==t.probability)));const c=a.filter((0,r.CZ)(l,Zt)).sort((0,r.ef)(null!=(t=E.t$[i])?t:[],n,Y)).map((t=>t.id));return Object.assign({artifactIds:c,totalArtNum:a.length},H)}),[ht,H,e,Y,Zt,$]),{artifactIdsToShow:pt,numPages:yt,currentPageIndex:gt}=(0,f.useMemo)((()=>{const t=Math.ceil(ft.length/F),e=(0,r.re)(T,0,t-1);return{artifactIdsToShow:ft.slice(e*F,(e+1)*F),numPages:t,currentPageIndex:e}}),[ft,T,F]),bt=ft.length!==mt?`${ft.length}/${mt}`:`${mt}`,xt=(0,f.useCallback)(((t,e)=>{var i;null==(i=q.current)||i.scrollIntoView({behavior:"smooth"}),W(e-1)}),[W,q]);return(0,A.BX)(c.Z,{display:"flex",flexDirection:"column",gap:1,my:1,children:[(0,A.tZ)(f.Suspense,{fallback:!1,children:(0,A.tZ)(at,{artifactIdToEdit:u?"new":"",cancelEdit:w,allowUpload:!0,allowEmpty:!0})}),(0,A.tZ)(f.Suspense,{fallback:!1,children:(0,A.tZ)(L,{show:P,onHide:k})}),(0,A.tZ)(I,{pageKey:"artifactPage",modalTitle:t(it||(it=lt`info.title`)),text:t("tipsOfTheDay",{returnObjects:!0}),children:(0,A.tZ)(ct,{})}),J&&(0,A.tZ)(y.Z,{}),(0,A.tZ)(z,{numShowing:ft.length,total:mt,artifactIds:ft}),(0,A.tZ)(x.Z,{ref:q,children:(0,A.tZ)(s.Z,{children:(0,A.tZ)(b.Z,{placement:"top",title:(0,A.tZ)(p.cC,{t,i18nKey:"efficiencyFilter.title",children:"Substats to use in efficiency calculation"}),children:(0,A.tZ)(c.Z,{children:(0,A.tZ)(g.Z,{selectedKeys:j,onChange:t=>e.displayArtifact.set({effFilter:t})})})})})}),(0,A.tZ)(x.Z,{children:(0,A.BX)(s.Z,{children:[(0,A.BX)(o.ZP,{container:!0,alignItems:"center",sx:{pb:2},children:[(0,A.tZ)(o.ZP,{item:!0,flexGrow:1,children:(0,A.tZ)(Z.Z,{count:yt,page:gt+1,onChange:xt})}),(0,A.tZ)(o.ZP,{item:!0,flexGrow:1,children:(0,A.tZ)(dt,{numShowing:pt.length,total:bt,t})}),(0,A.BX)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,xl:3,display:"flex",children:[(0,A.tZ)(c.Z,{flexGrow:1}),(0,A.tZ)(B.Z,{sortKeys:[...E.OQ],value:O,onChange:t=>e.displayArtifact.set({sortType:t}),ascending:K,onChangeAsc:t=>e.displayArtifact.set({ascending:t})})]})]}),(0,A.tZ)(G,{artifactIds:ft})]})}),$&&(0,A.tZ)(tt,{probabilityFilter:V,setProbabilityFilter:R}),(0,A.BX)(o.ZP,{container:!0,columns:st,spacing:1,children:[(0,A.tZ)(o.ZP,{item:!0,xs:!0,children:(0,A.tZ)(d.Z,{fullWidth:!0,onClick:v,color:"info",startIcon:(0,A.tZ)(l.Z,{}),children:t(nt||(nt=lt`addNew`))})}),(0,A.tZ)(o.ZP,{item:!0,xs:1,children:(0,A.tZ)(d.Z,{fullWidth:!0,onClick:C,color:"info",startIcon:(0,A.tZ)(a.Z,{}),children:t(rt||(rt=lt`showDup`))})})]}),(0,A.tZ)(f.Suspense,{fallback:(0,A.tZ)(h.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,A.tZ)(o.ZP,{container:!0,spacing:1,columns:st,children:pt.map((t=>(0,A.tZ)(o.ZP,{item:!0,xs:1,children:(0,A.tZ)(M.Z,{artifactId:t,effFilter:_,onDelete:Q,editorProps:{},canEquip:!0})},t)))})}),yt>1&&(0,A.tZ)(x.Z,{children:(0,A.tZ)(s.Z,{children:(0,A.BX)(o.ZP,{container:!0,children:[(0,A.tZ)(o.ZP,{item:!0,flexGrow:1,children:(0,A.tZ)(Z.Z,{count:yt,page:gt+1,onChange:xt})}),(0,A.tZ)(o.ZP,{item:!0,children:(0,A.tZ)(dt,{numShowing:pt.length,total:bt,t})})]})})})]})}function dt({numShowing:t,total:e,t:i}){return(0,A.tZ)(u.Z,{color:"text.secondary",children:(0,A.BX)(p.cC,{t:i,i18nKey:"showingNum",count:t,value:e,children:["Showing ",(0,A.tZ)("b",{children:{count:t}})," out of"," ",{value:e}," Artifacts"]})})}}}]);