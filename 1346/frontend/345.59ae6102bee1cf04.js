"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[345,313],{29754:(e,t,a)=>{var n=a(95938);t.Z=void 0;var o=n(a(68671)),s=a(52322),l=(0,o.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=l},92252:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29798),o=a(52322);const s=(0,n.Z)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},54278:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29798),o=a(52322);const s=(0,n.Z)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock")},40535:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(29798),o=a(52322);const s=(0,n.Z)((0,o.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen")},50090:(e,t,a)=>{a.d(t,{W:()=>m});var n=a(31981),o=a(66615),s=a(79906),l=a(2784),r=a(21560),c=a(23657),i=a(34271),u=a(34156),d=a(55893),p=a(4371),h=a(80680),Z=a(52903);let g,f=e=>e;function m({location:e,setLocation:t,filter:a=(()=>!0),autoCompleteProps:m={}}){const{t:v}=(0,r.$G)(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:y}=(0,l.useContext)(c.E),{database:w}=(0,l.useContext)(u.t),{gender:x}=(0,d.Z)(),b=(0,l.useCallback)((e=>t=>v(`${e?"sillyWisher_charNames":"charNames_gen"}:${(0,n.Cs)(w.chars.LocationToCharacterKey(t),x)}`)),[w,x,v]),C=(0,l.useCallback)((e=>""===e?(0,Z.tZ)(o.Z,{}):(0,Z.tZ)(h.Z,{characterKey:w.chars.LocationToCharacterKey(e)})),[w]),W=(0,l.useCallback)((e=>"Traveler"===e?n.vF.some((e=>w.charMeta.get(e).favorite)):!!e&&w.charMeta.get(e).favorite),[w]),k=(0,l.useMemo)((()=>[{key:"",label:v(g||(g=f`artifact:filterLocation.inventory`))},...Array.from(new Set(w.chars.keys.filter((e=>!(0,i.m)(e,x)||a((0,i.m)(e,x)))).map((e=>(0,n.V7)(e))))).map((e=>({key:e,label:b(y)(e),favorite:W(e),alternateNames:y?[b(!y)(e)]:void 0}))).sort(((e,t)=>e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:e.label.localeCompare(t.label)))]),[v,w.chars.keys,x,a,b,y,W]);return(0,Z.tZ)(l.Suspense,{fallback:(0,Z.tZ)(s.Z,{variant:"text",width:100}),children:(0,Z.tZ)(p._,Object.assign({size:"small",options:k,valueKey:e,onChange:e=>t(null!=e?e:""),toImg:C},m))})}},28265:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(93827),o=a(31981),s=a(37181),l=a(47746),r=a(86432),c=a(92794),i=a(66198),u=a(61851),d=a(79410),p=a(58489),h=a(52903);const Z=["value","totals","onChange"],g=(0,u.X)([...o.yd]);function f(e){let{value:t,totals:a,onChange:u}=e,f=(0,n.Z)(e,Z);const m=(0,l.Z)(),v=!(0,r.Z)(m.breakpoints.up("sm"));return(0,h.tZ)(p.Z,Object.assign({exclusive:!0,value:t},f,{children:o.yd.map((e=>{var n;return(0,h.BX)(c.Z,{value:e,sx:{p:v?1:void 0,minWidth:v?0:"7em",display:"flex",gap:v?0:1},onClick:()=>u(g(t,e)),children:[(0,h.tZ)(d.Z,{src:null==(n=s.CL.weaponTypes)?void 0:n[e],size:2,sideMargin:!0}),(0,h.tZ)(i.Z,{label:a[e],size:"small"})]},e)}))}))}},35072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(31981),o=a(95178),s=a(12761),l=a(92252),r=a(67550),c=a(7671),i=a(13780),u=a(5896),d=a(79906),p=a(83249),h=a(41075),Z=a(62197),g=a(2784),f=a(61877),m=a(21560),v=a(24264),y=a(56489),w=a(13505),x=a(28265),b=a(88114),C=a(34156),W=a(2313),k=a(54578),I=a(7794),S=a(73501),z=a(52903);const M=g.lazy((()=>a.e(592).then(a.bind(a,18571)))),T=(0,g.lazy)((()=>a.e(262).then(a.bind(a,64262)))),E={xs:1,sm:2,md:3,lg:3,xl:4},N={xs:10,sm:12,md:24,lg:24,xl:24},P=Object.keys(k.gd);function j(){const{t:e}=(0,m.$G)(["page_weapon","ui","weaponNames_gen"]),{database:t}=(0,g.useContext)(C.t),[a,Z]=(0,g.useState)(t.displayWeapon.get());(0,g.useEffect)((()=>t.displayWeapon.follow(((e,t)=>Z(t)))),[t]);const[j,V]=(0,g.useState)(!1),[$,X]=(0,o.NW)(),_=(0,g.useRef)(null),[A,B]=(0,g.useState)(0);(0,g.useEffect)((()=>(f.ZP.send({hitType:"pageview",page:"/weapon"}),t.weapons.followAny(((e,t)=>("new"===t||"remove"===t)&&X())))),[X,t]);const H=(0,o.JT)(),O=N[H],K=(0,g.useCallback)((async n=>{const o=t.weapons.get(n);if(!o)return;const s=e(`weaponNames_gen:${o.key}`);window.confirm(e("removeWeapon",{value:s}))&&(t.weapons.remove(n),a.editWeaponId===n&&t.displayWeapon.set({editWeaponId:""}))}),[a.editWeaponId,t,e]),D=(0,g.useCallback)((e=>{t.displayWeapon.set({editWeaponId:e})}),[t]),G=(0,g.useCallback)((e=>{D(t.weapons.new((0,I.xg)(e)))}),[t,D]),[F,q]=(0,g.useState)(""),J=(0,g.useDeferredValue)(F),{sortType:R,ascending:U,weaponType:Q,rarity:Y}=a,{weaponIdList:ee,totalWeaponNum:te}=(0,g.useMemo)((()=>{var e;const a=t.weapons.values,n=a.length,o=a.filter((0,s.CZ)({weaponType:Q,rarity:Y,name:J},(0,k.Xg)())).sort((0,s.ef)(null!=(e=k.gd[R])?e:[],U,(0,k.Sn)())).map((e=>e.id));return $&&{weaponIdList:o,totalWeaponNum:n}}),[$,t,R,U,Y,Q,J]),{weaponIdsToShow:ae,numPages:ne,currentPageIndex:oe}=(0,g.useMemo)((()=>{const e=Math.ceil(ee.length/O),t=(0,s.re)(A,0,e-1);return{weaponIdsToShow:ee.slice(t*O,(t+1)*O),numPages:e,currentPageIndex:t}}),[ee,A,O]),se=ee.length!==te?`${ee.length}/${te}`:`${te}`,le=(0,g.useCallback)(((e,t)=>{var a;null==(a=_.current)||a.scrollIntoView({behavior:"smooth"}),B(t-1)}),[B,_]),re=(0,g.useCallback)((()=>t.displayWeapon.set({editWeaponId:""})),[t]),{editWeaponId:ce}=a;(0,g.useEffect)((()=>{ce&&(t.weapons.get(ce)||re())}),[t,ce,re]);const ie=(0,g.useMemo)((()=>(0,W.W)(n.yd,(e=>Object.entries(t.weapons.data).forEach((([t,a])=>{const n=(0,b.ub)(a.key).weaponType;e[n].total++,ee.includes(t)&&e[n].current++}))))),[t,ee]),ue=(0,g.useMemo)((()=>(0,W.W)(n.U1,(e=>Object.entries(t.weapons.data).forEach((([t,a])=>{const n=(0,b.ub)(a.key).rarity;e[n].total++,ee.includes(t)&&e[n].current++}))))),[t,ee]);return(0,z.BX)(r.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,z.tZ)(g.Suspense,{fallback:!1,children:(0,z.tZ)(M,{show:j,onHide:()=>V(!1),onSelect:G})}),(0,z.tZ)(g.Suspense,{fallback:!1,children:(0,z.tZ)(T,{weaponId:ce,footer:!0,onClose:re})}),(0,z.tZ)(v.Z,{ref:_,children:(0,z.BX)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,z.BX)(r.Z,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[(0,z.tZ)(x.Z,{onChange:e=>t.displayWeapon.set({weaponType:e}),value:Q,totals:ie,size:"small"}),(0,z.tZ)(w.Z,{sx:{height:"100%"},onChange:e=>t.displayWeapon.set({rarity:e}),value:Y,totals:ue,size:"small"}),(0,z.tZ)(r.Z,{flexGrow:1}),(0,z.tZ)(i.Z,{autoFocus:!0,size:"small",value:F,onChange:e=>q(e.target.value),label:e("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),(0,z.BX)(r.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:[(0,z.tZ)(u.Z,{count:ne,page:oe+1,onChange:le}),(0,z.tZ)(L,{numShowing:ae.length,total:se,t:e}),(0,z.tZ)(y.Z,{sx:{height:"100%"},sortKeys:P,value:R,onChange:e=>t.displayWeapon.set({sortType:e}),ascending:U,onChangeAsc:e=>t.displayWeapon.set({ascending:e})})]})]})}),(0,z.BX)(g.Suspense,{fallback:(0,z.tZ)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[(0,z.tZ)(p.Z,{fullWidth:!0,onClick:()=>V(!0),color:"info",startIcon:(0,z.tZ)(l.Z,{}),children:e("page_weapon:addWeapon")}),(0,z.tZ)(h.ZP,{container:!0,spacing:1,columns:E,children:ae.map((e=>(0,z.tZ)(h.ZP,{item:!0,xs:1,children:(0,z.tZ)(S.Z,{weaponId:e,onDelete:K,onEdit:D,canEquip:!0})},e)))})]}),ne>1&&(0,z.tZ)(v.Z,{children:(0,z.tZ)(c.Z,{children:(0,z.BX)(h.ZP,{container:!0,alignItems:"flex-end",children:[(0,z.tZ)(h.ZP,{item:!0,flexGrow:1,children:(0,z.tZ)(u.Z,{count:ne,page:oe+1,onChange:le})}),(0,z.tZ)(h.ZP,{item:!0,children:(0,z.tZ)(L,{numShowing:ae.length,total:se,t:e})})]})})})]})}function L({numShowing:e,total:t,t:a}){return(0,z.tZ)(Z.Z,{color:"text.secondary",children:(0,z.BX)(m.cC,{t:a,i18nKey:"showingNum",count:e,value:t,children:["Showing ",(0,z.tZ)("b",{children:{count:e}})," out of"," ",{value:t}," Weapons"]})})}},30311:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(2784),o=a(34156);function s(e=""){const{database:t}=(0,n.useContext)(o.t),[a,s]=(0,n.useState)(t.weapons.get(e));return(0,n.useEffect)((()=>s(t.weapons.get(e))),[t,e]),(0,n.useEffect)((()=>e?t.weapons.follow(e,((e,t,a)=>"update"===t&&s(a))):void 0),[e,s,t]),a}},2313:(e,t,a)=>{a.d(t,{A:()=>o,W:()=>s});var n=a(12761);function o(e,t){const a=(0,n.Ay)(e,(e=>l(e)));return t(a),(0,n.Ay)(a,(e=>r(e)))}function s(e,t){const a=l(e);return t(a),r(a)}function l(e){return Object.fromEntries(e.map((e=>[e,{total:0,current:0}])))}function r(e){return(0,n.Ay)(e,(({total:e,current:t})=>t===e?`${e}`:`${t}/${e}`))}}}]);