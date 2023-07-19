"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47],{56047:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(31981),l=n(95178),r=n(12761),c=n(85439),i=n(36380),s=n(61391),o=n(60319),h=n(46342),Z=n(92760),d=n(67550),u=n(7671),p=n(41075),m=n(13780),g=n(5896),f=n(83249),y=n(79906),C=n(56961),x=n(62197),w=n(85801),b=n(2784),k=n(61877),v=n(21560),P=n(73557),S=n(45269),T=n(24264),$=n(11615),B=n(56489),N=n(89279),I=n(28265),W=n(23657),X=n(92064),K=n(28582),z=n(34156),j=n(2180),E=n(55893),M=n(64303),V=n(2313),_=n(52903);let D,L=e=>e;const G=b.lazy((()=>n.e(592).then(n.bind(n,37629)))),A={xs:1,sm:2,md:3,lg:4,xl:4},H={xs:6,sm:8,md:12,lg:16,xl:16},O=Object.keys(M.V3);function F(){const{t:e}=(0,v.$G)(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:t}=(0,b.useContext)(W.E),{database:n}=(0,b.useContext)(z.t),[F,q]=(0,b.useState)((()=>n.displayCharacter.get()));(0,b.useEffect)((()=>n.displayCharacter.follow(((e,t)=>q(t)))),[n,q]);const[J,R]=(0,b.useState)(""),Y=(0,b.useDeferredValue)(J),Q=(0,b.useRef)(null),ee=(0,b.useCallback)(((e,t)=>{var a;null==(a=Q.current)||a.scrollIntoView({behavior:"smooth"}),n.displayCharacter.set({pageIndex:t-1})}),[n,Q]),te=(0,l.JT)(),ne=H[te],[ae,le]=(0,b.useState)(!1),[re,ce]=(0,l.NW)();(0,b.useEffect)((()=>(k.ZP.send({hitType:"pageview",page:"/characters"}),n.chars.followAny(((e,t)=>("new"===t||"remove"===t)&&ce())))),[ce,n]),(0,b.useEffect)((()=>n.charMeta.followAny((e=>ce()))),[ce,n]);const{gender:ie}=(0,E.Z)(),se=(0,b.useCallback)((async l=>{let r=(0,X.m)(l,ie).name;"object"==typeof r&&(r=e(`${t?"sillyWisher_charNames":"charNames_gen"}:${(0,a.Cs)(l,ie)}`)),window.confirm(e("removeCharacter",{value:r}))&&n.chars.remove(l)}),[n.chars,ie,t,e]),oe=(0,j.Z)(),he=(0,P.s0)(),Ze=(0,b.useDeferredValue)(F),de=(0,b.useDeferredValue)(re),{charKeyList:ue,totalCharNum:pe}=(0,b.useMemo)((()=>{var e;const a=n.chars.keys.length,{element:l,weaponType:c,sortType:i,ascending:s}=Ze,o=n.chars.keys.filter((0,r.CZ)({element:l,weaponType:c,name:Y},(0,M.zU)(n,t))).sort((0,r.ef)(null!=(e=M.V3[i])?e:[],s,(0,M._L)(n,t),["new","favorite"]));return de&&{charKeyList:o,totalCharNum:a}}),[n,Ze,Y,t,de]),{weaponType:me,element:ge,sortType:fe,ascending:ye,pageIndex:Ce=0}=F,{charKeyListToShow:xe,numPages:we,currentPageIndex:be}=(0,b.useMemo)((()=>{const e=Math.ceil(ue.length/ne),t=(0,r.re)(Ce,0,e-1);return{charKeyListToShow:ue.slice(t*ne,(t+1)*ne),numPages:e,currentPageIndex:t}}),[ue,Ce,ne]),ke=ue.length!==pe?`${ue.length}/${pe}`:`${pe}`,ve=(0,b.useMemo)((()=>(0,V.W)(a.yd,(e=>Object.entries(n.chars.data).forEach((([t,a])=>{const l=n.weapons.get(a.equippedWeapon);if(!l)return;const r=(0,K.ub)(l.key).weaponType;e[r].total++,ue.includes(t)&&e[r].current++}))))),[n,ue]),Pe=(0,b.useMemo)((()=>(0,V.W)(a.UB,(e=>Object.entries(n.chars.data).forEach((([t,a])=>{const l=(0,X.m)(a.key,n.gender).elementKey;e[l].total++,ue.includes(t)&&e[l].current++}))))),[n,ue]);return(0,_.BX)(d.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,_.tZ)(b.Suspense,{fallback:!1,children:(0,_.tZ)(G,{newFirst:!0,show:ae,onHide:()=>le(!1),onSelect:oe})}),(0,_.tZ)(T.Z,{ref:Q,children:(0,_.BX)(u.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,_.BX)(p.ZP,{container:!0,spacing:1,children:[(0,_.tZ)(p.ZP,{item:!0,children:(0,_.tZ)(I.Z,{sx:{height:"100%"},onChange:e=>n.displayCharacter.set({weaponType:e}),value:me,totals:ve,size:"small"})}),(0,_.tZ)(p.ZP,{item:!0,children:(0,_.tZ)(N.Z,{sx:{height:"100%"},onChange:e=>n.displayCharacter.set({element:e}),value:ge,totals:Pe,size:"small"})}),(0,_.tZ)(p.ZP,{item:!0,flexGrow:1}),(0,_.tZ)(p.ZP,{item:!0,children:(0,_.tZ)(m.Z,{autoFocus:!0,value:J,onChange:e=>R(e.target.value),label:e("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),(0,_.BX)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:[(0,_.tZ)(g.Z,{count:we,page:be+1,onChange:ee}),(0,_.tZ)(U,{numShowing:xe.length,total:ke,t:e}),(0,_.tZ)(B.Z,{sortKeys:O,value:fe,onChange:e=>n.displayCharacter.set({sortType:e}),ascending:ye,onChangeAsc:e=>n.displayCharacter.set({ascending:e})})]})]})}),(0,_.tZ)(f.Z,{fullWidth:!0,onClick:()=>le(!0),color:"info",startIcon:(0,_.tZ)(Z.Z,{}),children:e(D||(D=L`addNew`))}),(0,_.tZ)(b.Suspense,{fallback:(0,_.tZ)(y.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,_.tZ)(p.ZP,{container:!0,spacing:1,columns:A,children:xe.map((t=>(0,_.tZ)(p.ZP,{item:!0,xs:1,children:(0,_.tZ)($.Z,{characterKey:t,onClick:()=>he(`${t}`),footer:(0,_.BX)(_.HY,{children:[(0,_.tZ)(C.Z,{}),(0,_.BX)(d.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:[(0,_.tZ)(S.Z,{placement:"top",title:(0,_.tZ)(x.Z,{children:e("tabs.talent")}),children:(0,_.tZ)(w.Z,{onClick:()=>he(`${t}/talent`),children:(0,_.tZ)(c.Z,{})})}),(0,_.tZ)(S.Z,{placement:"top",title:(0,_.tZ)(x.Z,{children:e("tabs.teambuffs")}),children:(0,_.tZ)(w.Z,{onClick:()=>he(`${t}/teambuffs`),children:(0,_.tZ)(i.Z,{})})}),(0,_.tZ)(S.Z,{placement:"top",title:(0,_.tZ)(x.Z,{children:e("tabs.optimize")}),children:(0,_.tZ)(w.Z,{onClick:()=>he(`${t}/optimize`),children:(0,_.tZ)(s.Z,{})})}),(0,_.tZ)(S.Z,{placement:"top",title:(0,_.tZ)(x.Z,{children:e("tabs.theorycraft")}),children:(0,_.tZ)(w.Z,{onClick:()=>he(`${t}/theorycraft`),children:(0,_.tZ)(o.Z,{})})}),(0,_.tZ)(C.Z,{orientation:"vertical"}),(0,_.tZ)(S.Z,{placement:"top",title:(0,_.tZ)(x.Z,{children:e("delete")}),children:(0,_.tZ)(w.Z,{color:"error",onClick:()=>se(t),children:(0,_.tZ)(h.Z,{})})})]})]})})},t)))})}),we>1&&(0,_.tZ)(T.Z,{children:(0,_.BX)(u.Z,{sx:{display:"flex",gap:1},children:[(0,_.tZ)(f.Z,{onClick:()=>le(!0),color:"info",sx:{minWidth:0},children:(0,_.tZ)(Z.Z,{})}),(0,_.BX)(p.ZP,{container:!0,alignItems:"flex-end",sx:{flexGrow:1},children:[(0,_.tZ)(p.ZP,{item:!0,flexGrow:1,children:(0,_.tZ)(g.Z,{count:we,page:be+1,onChange:ee})}),(0,_.tZ)(p.ZP,{item:!0,children:(0,_.tZ)(U,{numShowing:xe.length,total:ke,t:e})})]})]})})]})}function U({numShowing:e,total:t,t:n}){return(0,_.tZ)(x.Z,{color:"text.secondary",children:(0,_.BX)(v.cC,{t:n,i18nKey:"showingNum",count:e,value:t,children:["Showing ",(0,_.tZ)("b",{children:{count:e}})," out of"," ",{value:t}," Characters"]})})}}}]);