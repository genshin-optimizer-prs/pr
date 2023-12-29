"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[345,313],{29754:(e,t,a)=>{var n=a(14859);t.Z=void 0;var o=n(a(68671)),s=a(52322),l=(0,o.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=l},92252:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29798),o=a(52322);const s=(0,n.Z)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},54278:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29798),o=a(52322);const s=(0,n.Z)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock")},40535:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29798),o=a(52322);const s=(0,n.Z)((0,o.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen")},50090:(e,t,a)=>{a.d(t,{W:()=>y});var n=a(31981),o=a(66615),s=a(67550),l=a(79906),r=a(2784),c=a(11141),i=a(23657),u=a(31637),d=a(34156),p=a(55893),h=a(75958),Z=a(80680),f=a(72550),g=a(52903);let m,v=e=>e;function y({location:e,setLocation:t,filter:a=(()=>!0),autoCompleteProps:y={}}){const{t:w}=(0,c.$G)(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:x}=(0,r.useContext)(i.E),{database:b}=(0,r.useContext)(d.t),{gender:C}=(0,p.Z)(),W=(0,r.useCallback)((e=>t=>w(`${e?"sillyWisher_charNames":"charNames_gen"}:${(0,n.Cs)(b.chars.LocationToCharacterKey(t),C)}`)),[b,C,w]),[k,I]=(0,f.NW)();(0,r.useEffect)((()=>b.arts.followAny((()=>I()))),[b,I]);const S=(0,r.useMemo)((()=>k&&b.chars.keys.map((e=>(0,n.V7)(e)))),[k,b]),z=(0,r.useCallback)((e=>""===e?(0,g.tZ)(o.Z,{}):(0,g.tZ)(s.Z,{sx:{opacity:S.includes(e)?void 0:.7},children:(0,g.tZ)(Z.Z,{characterKey:b.chars.LocationToCharacterKey(e)})})),[b,S]),M=(0,r.useCallback)((e=>"Traveler"===e?n.vF.some((e=>b.charMeta.get(e).favorite)):!!e&&b.charMeta.get(e).favorite),[b]),T=(0,r.useMemo)((()=>[{key:"",label:w(m||(m=v`artifact:filterLocation.inventory`))},...Array.from(new Set(n.vp.filter((e=>a((0,u.m)(b.chars.LocationToCharacterKey(e),C)))))).map((e=>({key:e,label:W(x)(e),favorite:M(e),alternateNames:x?[W(!x)(e)]:void 0,color:S.includes(e)?void 0:"secondary"}))).sort(((e,t)=>e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:!e.color&&t.color?-1:e.color&&!t.color?1:e.label.localeCompare(t.label)))]),[w,b.chars,C,S,a,W,x,M]);return(0,g.tZ)(r.Suspense,{fallback:(0,g.tZ)(l.Z,{variant:"text",width:100}),children:(0,g.tZ)(h._,Object.assign({size:"small",options:T,valueKey:e,onChange:e=>t(null!=e?e:""),toImg:z},y))})}},28265:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(98283),o=a(31981),s=a(16736),l=a(47746),r=a(86432),c=a(92794),i=a(66198),u=a(61851),d=a(79410),p=a(58489),h=a(52903);const Z=["value","totals","onChange"],f=(0,u.X)([...o.yd]);function g(e){let{value:t,totals:a,onChange:u}=e,g=(0,n.Z)(e,Z);const m=(0,l.Z)(),v=!(0,r.Z)(m.breakpoints.up("sm"));return(0,h.tZ)(p.Z,Object.assign({exclusive:!0,value:t},g,{children:o.yd.map((e=>{var n;return(0,h.BX)(c.Z,{value:e,sx:{p:v?1:void 0,minWidth:v?0:"6em",display:"flex",gap:v?0:1},onClick:()=>u(f(t,e)),children:[(0,h.tZ)(d.Z,{src:null==(n=s.CL.weaponTypes)?void 0:n[e],size:2,sideMargin:!0}),(0,h.tZ)(i.Z,{label:a[e],size:"small"})]},e)}))}))}},35072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(31981),o=a(72550),s=a(12761),l=a(92252),r=a(67550),c=a(7671),i=a(13780),u=a(5896),d=a(79906),p=a(83249),h=a(41075),Z=a(62197),f=a(2784),g=a(61877),m=a(11141),v=a(24264),y=a(56489),w=a(90844),x=a(28265),b=a(13499),C=a(34156),W=a(2313),k=a(54578),I=a(7794),S=a(73501),z=a(52903);const M=f.lazy((()=>a.e(592).then(a.bind(a,18571)))),T=(0,f.lazy)((()=>a.e(262).then(a.bind(a,64262)))),E={xs:1,sm:2,md:3,lg:3,xl:4},N={xs:10,sm:12,md:24,lg:24,xl:24},L=Object.keys(k.gd);function P(){const{t:e}=(0,m.$G)(["page_weapon","ui","weaponNames_gen"]),{database:t}=(0,f.useContext)(C.t),[a,Z]=(0,f.useState)(t.displayWeapon.get());(0,f.useEffect)((()=>t.displayWeapon.follow(((e,t)=>Z(t)))),[t]);const[P,V]=(0,f.useState)(!1),[$,X]=(0,o.NW)(),_=(0,f.useRef)(null),[B,H]=(0,f.useState)(0);(0,f.useEffect)((()=>(g.ZP.send({hitType:"pageview",page:"/weapon"}),t.weapons.followAny(((e,t)=>("new"===t||"remove"===t)&&X())))),[X,t]);const K=(0,o.JT)(),O=N[K],A=(0,f.useCallback)((async n=>{const o=t.weapons.get(n);if(!o)return;const s=e(`weaponNames_gen:${o.key}`);window.confirm(e("removeWeapon",{value:s}))&&(t.weapons.remove(n),a.editWeaponId===n&&t.displayWeapon.set({editWeaponId:""}))}),[a.editWeaponId,t,e]),D=(0,f.useCallback)((e=>{t.displayWeapon.set({editWeaponId:e})}),[t]),G=(0,f.useCallback)((e=>{D(t.weapons.new((0,I.xg)(e)))}),[t,D]),[U,F]=(0,f.useState)(""),q=(0,f.useDeferredValue)(U),{sortType:J,ascending:R,weaponType:Q,rarity:Y}=a,{weaponIdList:ee,totalWeaponNum:te}=(0,f.useMemo)((()=>{var e;const a=t.weapons.values,n=a.length,o=a.filter((0,s.CZ)({weaponType:Q,rarity:Y,name:q},(0,k.Xg)())).sort((0,s.ef)(null!=(e=k.gd[J])?e:[],R,(0,k.Sn)())).map((e=>e.id));return $&&{weaponIdList:o,totalWeaponNum:n}}),[$,t,J,R,Y,Q,q]),{weaponIdsToShow:ae,numPages:ne,currentPageIndex:oe}=(0,f.useMemo)((()=>{const e=Math.ceil(ee.length/O),t=(0,s.re)(B,0,e-1);return{weaponIdsToShow:ee.slice(t*O,(t+1)*O),numPages:e,currentPageIndex:t}}),[ee,B,O]),se=ee.length!==te?`${ee.length}/${te}`:`${te}`,le=(0,f.useCallback)(((e,t)=>{var a;null==(a=_.current)||a.scrollIntoView({behavior:"smooth"}),H(t-1)}),[H,_]),re=(0,f.useCallback)((()=>t.displayWeapon.set({editWeaponId:""})),[t]),{editWeaponId:ce}=a;(0,f.useEffect)((()=>{ce&&(t.weapons.get(ce)||re())}),[t,ce,re]);const ie=(0,f.useMemo)((()=>(0,W.W)(n.yd,(e=>Object.entries(t.weapons.data).forEach((([t,a])=>{const n=(0,b.ub)(a.key).weaponType;e[n].total++,ee.includes(t)&&e[n].current++}))))),[t,ee]),ue=(0,f.useMemo)((()=>(0,W.W)(n.U1,(e=>Object.entries(t.weapons.data).forEach((([t,a])=>{const n=(0,b.ub)(a.key).rarity;e[n].total++,ee.includes(t)&&e[n].current++}))))),[t,ee]);return(0,z.BX)(r.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,z.tZ)(f.Suspense,{fallback:!1,children:(0,z.tZ)(M,{show:P,onHide:()=>V(!1),onSelect:G})}),(0,z.tZ)(f.Suspense,{fallback:!1,children:(0,z.tZ)(T,{weaponId:ce,footer:!0,onClose:re})}),(0,z.tZ)(v.Z,{ref:_,children:(0,z.BX)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,z.BX)(r.Z,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[(0,z.tZ)(x.Z,{onChange:e=>t.displayWeapon.set({weaponType:e}),value:Q,totals:ie,size:"small"}),(0,z.tZ)(w.Z,{sx:{height:"100%"},onChange:e=>t.displayWeapon.set({rarity:e}),value:Y,totals:ue,size:"small"}),(0,z.tZ)(r.Z,{flexGrow:1}),(0,z.tZ)(i.Z,{autoFocus:!0,size:"small",value:U,onChange:e=>F(e.target.value),label:e("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),(0,z.BX)(r.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:[(0,z.tZ)(u.Z,{count:ne,page:oe+1,onChange:le}),(0,z.tZ)(j,{numShowing:ae.length,total:se,t:e}),(0,z.tZ)(y.Z,{sx:{height:"100%"},sortKeys:L,value:J,onChange:e=>t.displayWeapon.set({sortType:e}),ascending:R,onChangeAsc:e=>t.displayWeapon.set({ascending:e})})]})]})}),(0,z.BX)(f.Suspense,{fallback:(0,z.tZ)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[(0,z.tZ)(p.Z,{fullWidth:!0,onClick:()=>V(!0),color:"info",startIcon:(0,z.tZ)(l.Z,{}),children:e("page_weapon:addWeapon")}),(0,z.tZ)(h.ZP,{container:!0,spacing:1,columns:E,children:ae.map((e=>(0,z.tZ)(h.ZP,{item:!0,xs:1,children:(0,z.tZ)(S.Z,{weaponId:e,onDelete:A,onEdit:D,canEquip:!0})},e)))})]}),ne>1&&(0,z.tZ)(v.Z,{children:(0,z.tZ)(c.Z,{children:(0,z.BX)(h.ZP,{container:!0,alignItems:"flex-end",children:[(0,z.tZ)(h.ZP,{item:!0,flexGrow:1,children:(0,z.tZ)(u.Z,{count:ne,page:oe+1,onChange:le})}),(0,z.tZ)(h.ZP,{item:!0,children:(0,z.tZ)(j,{numShowing:ae.length,total:se,t:e})})]})})})]})}function j({numShowing:e,total:t,t:a}){return(0,z.tZ)(Z.Z,{color:"text.secondary",children:(0,z.BX)(m.cC,{t:a,i18nKey:"showingNum",count:e,value:t,children:["Showing ",(0,z.tZ)("b",{children:{count:e}})," out of"," ",{value:t}," Weapons"]})})}},30311:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(2784),o=a(34156);function s(e=""){const{database:t}=(0,n.useContext)(o.t),[a,s]=(0,n.useState)(t.weapons.get(e));return(0,n.useEffect)((()=>s(t.weapons.get(e))),[t,e]),(0,n.useEffect)((()=>e?t.weapons.follow(e,((e,t,a)=>"update"===t&&s(a))):void 0),[e,s,t]),a}},2313:(e,t,a)=>{a.d(t,{A:()=>o,W:()=>s});var n=a(12761);function o(e,t){const a=(0,n.vU)(e,(e=>l(e)));return t(a),(0,n.vU)(a,(e=>r(e)))}function s(e,t){const a=l(e);return t(a),r(a)}function l(e){return Object.fromEntries(e.map((e=>[e,{total:0,current:0}])))}function r(e){return(0,n.vU)(e,(({total:e,current:t})=>t===e?`${e}`:`${t}/${e}`))}}}]);