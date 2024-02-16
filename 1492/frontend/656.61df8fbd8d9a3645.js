"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[656],{37656:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var r=a(45492),n=a(42745),s=a(31653),l=a(83568),c=a(46342),i=a(93553),o=a(67550),h=a(7671),u=a(41075),p=a(13780),d=a(83249),Z=a(79906),g=a(56961),y=a(2784),m=a(61877),f=a(11141),x=a(73557),w=a(24264),C=a(18835),b=a(96703),v=a(66146),k=a(42090),P=a(89279),W=a(28265),I=a(23657),T=a(44180),S=a(25616);var K=a(64303),N=a(2313),$=a(14083),j=a(52903);let z,B=e=>e;const M={xs:1,sm:2,md:3,lg:4,xl:4},E={xs:6,sm:8,md:12,lg:16,xl:16},V=Object.keys(K.V3);function _(){var e;const t=(0,l.Wz)(),a=(0,x.s0)(),{params:{characterKey:_}}=null!=(e=(0,x.bS)({path:"/characters/:characterKey",end:!1}))?e:{params:{}},D=(0,y.useMemo)((()=>{if(!_)return null;if(!s.IV.includes(_))return a("/characters"),null;return t.chars.get(_)||t.chars.getWithInitWeapon(D),_}),[_,a,t]),{t:L}=(0,f.$G)(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:X}=(0,y.useContext)(I.E),[H,O]=(0,y.useState)((()=>t.displayCharacter.get()));(0,y.useEffect)((()=>t.displayCharacter.follow(((e,t)=>O(t)))),[t,O]);const[A,G]=(0,y.useState)(""),F=(0,y.useDeferredValue)(A),U=(0,y.useRef)(null),q=(0,y.useCallback)(((e,a)=>{var r;null==(r=U.current)||r.scrollIntoView({behavior:"smooth"}),t.displayCharacter.set({pageIndex:a-1})}),[t,U]),J=(0,r.JT)(),R=E[J],[Y,Q]=(0,y.useState)(!1),[ee,te]=(0,r.NW)();(0,y.useEffect)((()=>(m.ZP.send({hitType:"pageview",page:"/characters"}),t.chars.followAny(((e,t)=>("new"===t||"remove"===t)&&te())))),[te,t]),(0,y.useEffect)((()=>t.charMeta.followAny((e=>te()))),[te,t]);const{gender:ae}=(0,l.Hz)(),re=(0,y.useCallback)((async e=>{let a=(0,T.m)(e,ae).name;"object"==typeof a&&(a=L(`${X?"sillyWisher_charNames":"charNames_gen"}:${(0,s.Cs)(e,ae)}`)),window.confirm(L("removeCharacter",{value:a}))&&t.chars.remove(e)}),[t.chars,ae,X,L]),ne=function(){var e;const t=(0,l.Wz)(),a=(0,x.s0)(),{params:{tab:r=""}}=null!=(e=(0,x.bS)({path:"/characters/:charKey/:tab",end:!1}))?e:{params:{tab:""}};return(0,y.useCallback)((e=>{const n=t.chars.get(e);let s=r;n||(t.chars.getWithInitWeapon(e),s=""),a(`/characters/${e}/${s}`)}),[a,t,r])}(),se=(0,y.useDeferredValue)(H),le=(0,y.useDeferredValue)(ee),{charKeyList:ce,totalCharNum:ie}=(0,y.useMemo)((()=>{var e;const a=t.chars.keys.length,{element:r,weaponType:s,rarity:l,sortType:c,ascending:i}=se,o=t.chars.keys.filter((0,n.CZ)({element:r,weaponType:s,rarity:l,name:F},(0,K.zU)(t,X))).sort((0,n.ef)(null!=(e=K.V3[c])?e:[],i,(0,K._L)(t,X),["new","favorite"]));return le&&{charKeyList:o,totalCharNum:a}}),[t,se,F,X,le]),{weaponType:oe,element:he,rarity:ue,sortType:pe,ascending:de,pageIndex:Ze=0}=H,{charKeyListToShow:ge,numPages:ye,currentPageIndex:me}=(0,y.useMemo)((()=>{const e=Math.ceil(ce.length/R),t=(0,n.re)(Ze,0,e-1);return{charKeyListToShow:ce.slice(t*R,(t+1)*R),numPages:e,currentPageIndex:t}}),[ce,Ze,R]),fe=ce.length!==ie?`${ce.length}/${ie}`:`${ie}`,xe=(0,y.useMemo)((()=>(0,N.W)(s.yd,(e=>Object.entries(t.chars.data).forEach((([a,r])=>{const n=t.weapons.get(r.equippedWeapon);if(!n)return;const s=(0,S.ub)(n.key).weaponType;e[s].total++,ce.includes(a)&&e[s].current++}))))),[t,ce]),we=(0,y.useMemo)((()=>(0,N.W)(s.UB,(e=>Object.entries(t.chars.data).forEach((([a,r])=>{const n=(0,T.m)(r.key,t.gender).elementKey;e[n].total++,ce.includes(a)&&e[n].current++}))))),[t,ce]),Ce=(0,y.useMemo)((()=>(0,N.W)(s.ZI,(e=>Object.entries(t.chars.data).forEach((([a,r])=>{const n=(0,T.m)(r.key,t.gender).rarity;e[n].total++,ce.includes(a)&&e[n].current++}))))),[t,ce]),be={count:ye,page:me+1,onChange:q},ve={numShowing:ge.length,total:fe,t:L,namespace:"page_character"},ke={sortKeys:[...V],value:pe,onChange:e=>t.displayCharacter.set({sortType:e}),ascending:de,onChangeAsc:e=>t.displayCharacter.set({ascending:e})};return(0,j.BX)(o.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,j.tZ)($.Z,{characterKey:D,onClose:()=>a("/characters")}),(0,j.tZ)(y.Suspense,{fallback:!1,children:(0,j.tZ)(b.Z,{newFirst:!0,show:Y,onHide:()=>Q(!1),onSelect:ne})}),(0,j.tZ)(w.Z,{ref:U,children:(0,j.BX)(h.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,j.BX)(u.ZP,{container:!0,spacing:1,children:[(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(W.Z,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({weaponType:e}),value:oe,totals:xe,size:"small"})}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(P.Z,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({element:e}),value:he,totals:we,size:"small"})}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(k.Z,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({rarity:e}),value:ue,totals:Ce,size:"small"})}),(0,j.tZ)(u.ZP,{item:!0,flexGrow:1}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(p.Z,{autoFocus:!0,value:A,onChange:e=>G(e.target.value),label:L("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),(0,j.tZ)(o.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:(0,j.tZ)(v.Z,{paginationProps:be,showingTextProps:ve,displaySort:!0,sortByButtonProps:ke})})]})}),(0,j.tZ)(d.Z,{fullWidth:!0,onClick:()=>Q(!0),color:"info",startIcon:(0,j.tZ)(i.Z,{}),children:L(z||(z=B`addNew`))}),(0,j.tZ)(y.Suspense,{fallback:(0,j.tZ)(Z.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,j.tZ)(u.ZP,{container:!0,spacing:1,columns:M,children:ge.map((e=>(0,j.tZ)(u.ZP,{item:!0,xs:1,children:(0,j.tZ)(C.Z,{characterKey:e,onClick:()=>a(`${e}`),footer:(0,j.BX)(j.HY,{children:[(0,j.tZ)(g.Z,{}),(0,j.tZ)(o.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:(0,j.tZ)(d.Z,{fullWidth:!0,color:"error",onClick:()=>re(e),startIcon:(0,j.tZ)(c.Z,{}),children:L("delete")})})]})})},e)))})}),ye>1&&(0,j.tZ)(w.Z,{children:(0,j.BX)(h.Z,{sx:{display:"flex",flexDirection:"row",gap:1},children:[(0,j.tZ)(d.Z,{onClick:()=>Q(!0),color:"info",sx:{minWidth:0},children:(0,j.tZ)(i.Z,{})}),(0,j.tZ)(o.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",flexGrow:1,children:(0,j.tZ)(v.Z,{paginationProps:be,showingTextProps:ve})})]})})]})}}}]);