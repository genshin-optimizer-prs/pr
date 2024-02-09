"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47],{56047:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(45492),r=a(42745),l=a(503),s=a(85439),i=a(36380),c=a(61391),o=a(60319),h=a(46342),Z=a(93553),d=a(67550),p=a(7671),u=a(41075),m=a(13780),y=a(83249),g=a(79906),f=a(56961),x=a(62197),C=a(85801),w=a(2784),b=a(61877),k=a(11141),P=a(73557),v=a(45269),T=a(24264),W=a(11615),$=a(66146),I=a(42090),S=a(89279),B=a(28265),N=a(23657),j=a(44180),z=a(25616),E=a(6853),K=a(2180),M=a(55893),D=a(64303),V=a(2313),X=a(52903);let _,L=e=>e;const O=w.lazy((()=>Promise.all([a.e(592),a.e(309)]).then(a.bind(a,37629)))),A={xs:1,sm:2,md:3,lg:4,xl:4},G={xs:6,sm:8,md:12,lg:16,xl:16},H=Object.keys(D.V3);function F(){const{t:e}=(0,k.$G)(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:t}=(0,w.useContext)(N.E),{database:a}=(0,w.useContext)(E.t4),[F,U]=(0,w.useState)((()=>a.displayCharacter.get()));(0,w.useEffect)((()=>a.displayCharacter.follow(((e,t)=>U(t)))),[a,U]);const[q,J]=(0,w.useState)(""),R=(0,w.useDeferredValue)(q),Y=(0,w.useRef)(null),Q=(0,w.useCallback)(((e,t)=>{var n;null==(n=Y.current)||n.scrollIntoView({behavior:"smooth"}),a.displayCharacter.set({pageIndex:t-1})}),[a,Y]),ee=(0,n.JT)(),te=G[ee],[ae,ne]=(0,w.useState)(!1),[re,le]=(0,n.NW)();(0,w.useEffect)((()=>(b.ZP.send({hitType:"pageview",page:"/characters"}),a.chars.followAny(((e,t)=>("new"===t||"remove"===t)&&le())))),[le,a]),(0,w.useEffect)((()=>a.charMeta.followAny((e=>le()))),[le,a]);const{gender:se}=(0,M.Z)(),ie=(0,w.useCallback)((async n=>{let r=(0,j.m)(n,se).name;"object"==typeof r&&(r=e(`${t?"sillyWisher_charNames":"charNames_gen"}:${(0,l.Cs)(n,se)}`)),window.confirm(e("removeCharacter",{value:r}))&&a.chars.remove(n)}),[a.chars,se,t,e]),ce=(0,K.Z)(),oe=(0,P.s0)(),he=(0,w.useDeferredValue)(F),Ze=(0,w.useDeferredValue)(re),{charKeyList:de,totalCharNum:pe}=(0,w.useMemo)((()=>{var e;const n=a.chars.keys.length,{element:l,weaponType:s,rarity:i,sortType:c,ascending:o}=he,h=a.chars.keys.filter((0,r.CZ)({element:l,weaponType:s,rarity:i,name:R},(0,D.zU)(a,t))).sort((0,r.ef)(null!=(e=D.V3[c])?e:[],o,(0,D._L)(a,t),["new","favorite"]));return Ze&&{charKeyList:h,totalCharNum:n}}),[a,he,R,t,Ze]),{weaponType:ue,element:me,rarity:ye,sortType:ge,ascending:fe,pageIndex:xe=0}=F,{charKeyListToShow:Ce,numPages:we,currentPageIndex:be}=(0,w.useMemo)((()=>{const e=Math.ceil(de.length/te),t=(0,r.re)(xe,0,e-1);return{charKeyListToShow:de.slice(t*te,(t+1)*te),numPages:e,currentPageIndex:t}}),[de,xe,te]),ke=de.length!==pe?`${de.length}/${pe}`:`${pe}`,Pe=(0,w.useMemo)((()=>(0,V.W)(l.yd,(e=>Object.entries(a.chars.data).forEach((([t,n])=>{const r=a.weapons.get(n.equippedWeapon);if(!r)return;const l=(0,z.ub)(r.key).weaponType;e[l].total++,de.includes(t)&&e[l].current++}))))),[a,de]),ve=(0,w.useMemo)((()=>(0,V.W)(l.UB,(e=>Object.entries(a.chars.data).forEach((([t,n])=>{const r=(0,j.m)(n.key,a.gender).elementKey;e[r].total++,de.includes(t)&&e[r].current++}))))),[a,de]),Te=(0,w.useMemo)((()=>(0,V.W)(l.ZI,(e=>Object.entries(a.chars.data).forEach((([t,n])=>{const r=(0,j.m)(n.key,a.gender).rarity;e[r].total++,de.includes(t)&&e[r].current++}))))),[a,de]),We={count:we,page:be+1,onChange:Q},$e={numShowing:Ce.length,total:ke,t:e},Ie={sortKeys:[...H],value:ge,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:fe,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return(0,X.BX)(d.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,X.tZ)(w.Suspense,{fallback:!1,children:(0,X.tZ)(O,{newFirst:!0,show:ae,onHide:()=>ne(!1),onSelect:ce})}),(0,X.tZ)(T.Z,{ref:Y,children:(0,X.BX)(p.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,X.BX)(u.ZP,{container:!0,spacing:1,children:[(0,X.tZ)(u.ZP,{item:!0,children:(0,X.tZ)(B.Z,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:ue,totals:Pe,size:"small"})}),(0,X.tZ)(u.ZP,{item:!0,children:(0,X.tZ)(S.Z,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:me,totals:ve,size:"small"})}),(0,X.tZ)(u.ZP,{item:!0,children:(0,X.tZ)(I.Z,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:ye,totals:Te,size:"small"})}),(0,X.tZ)(u.ZP,{item:!0,flexGrow:1}),(0,X.tZ)(u.ZP,{item:!0,children:(0,X.tZ)(m.Z,{autoFocus:!0,value:q,onChange:e=>J(e.target.value),label:e("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),(0,X.tZ)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:(0,X.tZ)($.Z,{paginationProps:We,showingTextProps:$e,displaySort:!0,sortByButtonProps:Ie})})]})}),(0,X.tZ)(y.Z,{fullWidth:!0,onClick:()=>ne(!0),color:"info",startIcon:(0,X.tZ)(Z.Z,{}),children:e(_||(_=L`addNew`))}),(0,X.tZ)(w.Suspense,{fallback:(0,X.tZ)(g.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,X.tZ)(u.ZP,{container:!0,spacing:1,columns:A,children:Ce.map((t=>(0,X.tZ)(u.ZP,{item:!0,xs:1,children:(0,X.tZ)(W.Z,{characterKey:t,onClick:()=>oe(`${t}`),footer:(0,X.BX)(X.HY,{children:[(0,X.tZ)(f.Z,{}),(0,X.BX)(d.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:[(0,X.tZ)(v.Z,{placement:"top",title:(0,X.tZ)(x.Z,{children:e("tabs.talent")}),children:(0,X.tZ)(C.Z,{onClick:()=>oe(`${t}/talent`),children:(0,X.tZ)(s.Z,{})})}),(0,X.tZ)(v.Z,{placement:"top",title:(0,X.tZ)(x.Z,{children:e("tabs.teambuffs")}),children:(0,X.tZ)(C.Z,{onClick:()=>oe(`${t}/teambuffs`),children:(0,X.tZ)(i.Z,{})})}),(0,X.tZ)(v.Z,{placement:"top",title:(0,X.tZ)(x.Z,{children:e("tabs.optimize")}),children:(0,X.tZ)(C.Z,{onClick:()=>oe(`${t}/optimize`),children:(0,X.tZ)(c.Z,{})})}),(0,X.tZ)(v.Z,{placement:"top",title:(0,X.tZ)(x.Z,{children:e("tabs.theorycraft")}),children:(0,X.tZ)(C.Z,{onClick:()=>oe(`${t}/theorycraft`),children:(0,X.tZ)(o.Z,{})})}),(0,X.tZ)(f.Z,{orientation:"vertical"}),(0,X.tZ)(v.Z,{placement:"top",title:(0,X.tZ)(x.Z,{children:e("delete")}),children:(0,X.tZ)(C.Z,{color:"error",onClick:()=>ie(t),children:(0,X.tZ)(h.Z,{})})})]})]})})},t)))})}),we>1&&(0,X.tZ)(T.Z,{children:(0,X.BX)(p.Z,{sx:{display:"flex",flexDirection:"row",gap:1},children:[(0,X.tZ)(y.Z,{onClick:()=>ne(!0),color:"info",sx:{minWidth:0},children:(0,X.tZ)(Z.Z,{})}),(0,X.tZ)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",flexGrow:1,children:(0,X.tZ)($.Z,{paginationProps:We,showingTextProps:$e})})]})})]})}}}]);