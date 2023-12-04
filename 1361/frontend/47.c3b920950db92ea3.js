"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47],{56047:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(31981),l=n(72550),r=n(12761),c=n(85439),i=n(36380),s=n(61391),o=n(60319),h=n(46342),Z=n(92760),d=n(67550),u=n(7671),p=n(41075),m=n(13780),g=n(5896),y=n(83249),f=n(79906),C=n(56961),x=n(62197),w=n(85801),b=n(2784),k=n(61877),v=n(21560),P=n(73557),S=n(45269),T=n(24264),$=n(11615),B=n(56489),I=n(89279),N=n(28265),W=n(42090),X=n(23657),z=n(34271),K=n(88114),j=n(34156),E=n(2180),M=n(55893),V=n(64303),_=n(2313),D=n(52903);let L,G=e=>e;const O=b.lazy((()=>n.e(592).then(n.bind(n,37629)))),A={xs:1,sm:2,md:3,lg:4,xl:4},H={xs:6,sm:8,md:12,lg:16,xl:16},F=Object.keys(V.V3);function U(){const{t:e}=(0,v.$G)(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:t}=(0,b.useContext)(X.E),{database:n}=(0,b.useContext)(j.t),[U,J]=(0,b.useState)((()=>n.displayCharacter.get()));(0,b.useEffect)((()=>n.displayCharacter.follow(((e,t)=>J(t)))),[n,J]);const[R,Y]=(0,b.useState)(""),Q=(0,b.useDeferredValue)(R),ee=(0,b.useRef)(null),te=(0,b.useCallback)(((e,t)=>{var a;null==(a=ee.current)||a.scrollIntoView({behavior:"smooth"}),n.displayCharacter.set({pageIndex:t-1})}),[n,ee]),ne=(0,l.JT)(),ae=H[ne],[le,re]=(0,b.useState)(!1),[ce,ie]=(0,l.NW)();(0,b.useEffect)((()=>(k.ZP.send({hitType:"pageview",page:"/characters"}),n.chars.followAny(((e,t)=>("new"===t||"remove"===t)&&ie())))),[ie,n]),(0,b.useEffect)((()=>n.charMeta.followAny((e=>ie()))),[ie,n]);const{gender:se}=(0,M.Z)(),oe=(0,b.useCallback)((async l=>{let r=(0,z.m)(l,se).name;"object"==typeof r&&(r=e(`${t?"sillyWisher_charNames":"charNames_gen"}:${(0,a.Cs)(l,se)}`)),window.confirm(e("removeCharacter",{value:r}))&&n.chars.remove(l)}),[n.chars,se,t,e]),he=(0,E.Z)(),Ze=(0,P.s0)(),de=(0,b.useDeferredValue)(U),ue=(0,b.useDeferredValue)(ce),{charKeyList:pe,totalCharNum:me}=(0,b.useMemo)((()=>{var e;const a=n.chars.keys.length,{element:l,weaponType:c,rarity:i,sortType:s,ascending:o}=de,h=n.chars.keys.filter((0,r.CZ)({element:l,weaponType:c,rarity:i,name:Q},(0,V.zU)(n,t))).sort((0,r.ef)(null!=(e=V.V3[s])?e:[],o,(0,V._L)(n,t),["new","favorite"]));return ue&&{charKeyList:h,totalCharNum:a}}),[n,de,Q,t,ue]),{weaponType:ge,element:ye,rarity:fe,sortType:Ce,ascending:xe,pageIndex:we=0}=U,{charKeyListToShow:be,numPages:ke,currentPageIndex:ve}=(0,b.useMemo)((()=>{const e=Math.ceil(pe.length/ae),t=(0,r.re)(we,0,e-1);return{charKeyListToShow:pe.slice(t*ae,(t+1)*ae),numPages:e,currentPageIndex:t}}),[pe,we,ae]),Pe=pe.length!==me?`${pe.length}/${me}`:`${me}`,Se=(0,b.useMemo)((()=>(0,_.W)(a.yd,(e=>Object.entries(n.chars.data).forEach((([t,a])=>{const l=n.weapons.get(a.equippedWeapon);if(!l)return;const r=(0,K.ub)(l.key).weaponType;e[r].total++,pe.includes(t)&&e[r].current++}))))),[n,pe]),Te=(0,b.useMemo)((()=>(0,_.W)(a.UB,(e=>Object.entries(n.chars.data).forEach((([t,a])=>{const l=(0,z.m)(a.key,n.gender).elementKey;e[l].total++,pe.includes(t)&&e[l].current++}))))),[n,pe]),$e=(0,b.useMemo)((()=>(0,_.W)(a.ZI,(e=>Object.entries(n.chars.data).forEach((([t,a])=>{const l=(0,z.m)(a.key,n.gender).rarity;e[l].total++,pe.includes(t)&&e[l].current++}))))),[n,pe]);return(0,D.BX)(d.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,D.tZ)(b.Suspense,{fallback:!1,children:(0,D.tZ)(O,{newFirst:!0,show:le,onHide:()=>re(!1),onSelect:he})}),(0,D.tZ)(T.Z,{ref:ee,children:(0,D.BX)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,D.BX)(p.ZP,{container:!0,spacing:1,children:[(0,D.tZ)(p.ZP,{item:!0,children:(0,D.tZ)(N.Z,{sx:{height:"100%"},onChange:e=>n.displayCharacter.set({weaponType:e}),value:ge,totals:Se,size:"small"})}),(0,D.tZ)(p.ZP,{item:!0,children:(0,D.tZ)(I.Z,{sx:{height:"100%"},onChange:e=>n.displayCharacter.set({element:e}),value:ye,totals:Te,size:"small"})}),(0,D.tZ)(p.ZP,{item:!0,children:(0,D.tZ)(W.Z,{sx:{height:"100%"},onChange:e=>n.displayCharacter.set({rarity:e}),value:fe,totals:$e,size:"small"})}),(0,D.tZ)(p.ZP,{item:!0,flexGrow:1}),(0,D.tZ)(p.ZP,{item:!0,children:(0,D.tZ)(m.Z,{autoFocus:!0,value:R,onChange:e=>Y(e.target.value),label:e("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),(0,D.BX)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:[(0,D.tZ)(g.Z,{count:ke,page:ve+1,onChange:te}),(0,D.tZ)(q,{numShowing:be.length,total:Pe,t:e}),(0,D.tZ)(B.Z,{sortKeys:F,value:Ce,onChange:e=>n.displayCharacter.set({sortType:e}),ascending:xe,onChangeAsc:e=>n.displayCharacter.set({ascending:e})})]})]})}),(0,D.tZ)(y.Z,{fullWidth:!0,onClick:()=>re(!0),color:"info",startIcon:(0,D.tZ)(Z.Z,{}),children:e(L||(L=G`addNew`))}),(0,D.tZ)(b.Suspense,{fallback:(0,D.tZ)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,D.tZ)(p.ZP,{container:!0,spacing:1,columns:A,children:be.map((t=>(0,D.tZ)(p.ZP,{item:!0,xs:1,children:(0,D.tZ)($.Z,{characterKey:t,onClick:()=>Ze(`${t}`),footer:(0,D.BX)(D.HY,{children:[(0,D.tZ)(C.Z,{}),(0,D.BX)(d.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:[(0,D.tZ)(S.Z,{placement:"top",title:(0,D.tZ)(x.Z,{children:e("tabs.talent")}),children:(0,D.tZ)(w.Z,{onClick:()=>Ze(`${t}/talent`),children:(0,D.tZ)(c.Z,{})})}),(0,D.tZ)(S.Z,{placement:"top",title:(0,D.tZ)(x.Z,{children:e("tabs.teambuffs")}),children:(0,D.tZ)(w.Z,{onClick:()=>Ze(`${t}/teambuffs`),children:(0,D.tZ)(i.Z,{})})}),(0,D.tZ)(S.Z,{placement:"top",title:(0,D.tZ)(x.Z,{children:e("tabs.optimize")}),children:(0,D.tZ)(w.Z,{onClick:()=>Ze(`${t}/optimize`),children:(0,D.tZ)(s.Z,{})})}),(0,D.tZ)(S.Z,{placement:"top",title:(0,D.tZ)(x.Z,{children:e("tabs.theorycraft")}),children:(0,D.tZ)(w.Z,{onClick:()=>Ze(`${t}/theorycraft`),children:(0,D.tZ)(o.Z,{})})}),(0,D.tZ)(C.Z,{orientation:"vertical"}),(0,D.tZ)(S.Z,{placement:"top",title:(0,D.tZ)(x.Z,{children:e("delete")}),children:(0,D.tZ)(w.Z,{color:"error",onClick:()=>oe(t),children:(0,D.tZ)(h.Z,{})})})]})]})})},t)))})}),ke>1&&(0,D.tZ)(T.Z,{children:(0,D.BX)(u.Z,{sx:{display:"flex",gap:1},children:[(0,D.tZ)(y.Z,{onClick:()=>re(!0),color:"info",sx:{minWidth:0},children:(0,D.tZ)(Z.Z,{})}),(0,D.BX)(p.ZP,{container:!0,alignItems:"flex-end",sx:{flexGrow:1},children:[(0,D.tZ)(p.ZP,{item:!0,flexGrow:1,children:(0,D.tZ)(g.Z,{count:ke,page:ve+1,onChange:te})}),(0,D.tZ)(p.ZP,{item:!0,children:(0,D.tZ)(q,{numShowing:be.length,total:Pe,t:e})})]})]})})]})}function q({numShowing:e,total:t,t:n}){return(0,D.tZ)(x.Z,{color:"text.secondary",children:(0,D.BX)(v.cC,{t:n,i18nKey:"showingNum",count:e,value:t,children:["Showing ",(0,D.tZ)("b",{children:{count:e}})," out of"," ",{value:t}," Characters"]})})}}}]);