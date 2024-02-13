"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72,313],{90844:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(98283),l=t(31653),o=t(78437),i=t(47746),s=t(86432),r=t(92794),c=t(67550),p=t(66198),d=t(61851),u=t(58489),Z=t(52903);const h=["value","totals","onChange"],g=(0,d.X)([...l.U1]);function m(e){let{value:n,totals:t,onChange:d}=e,m=(0,a.Z)(e,h);const y=(0,i.Z)(),w=!(0,s.Z)(y.breakpoints.up("sm"));return(0,Z.tZ)(u.Z,Object.assign({exclusive:!0,value:n},m,{children:l.U1.map((e=>(0,Z.tZ)(r.Z,{value:e,sx:{p:w?1:void 0,minWidth:w?0:"6em",display:"flex",gap:w?0:1},onClick:()=>d(g(n,e)),children:(0,Z.BX)(c.Z,{display:"flex",children:[(0,Z.tZ)("strong",{children:e}),(0,Z.tZ)(o.Z,{}),(0,Z.tZ)(p.Z,{label:t[e],size:"small"})]})},e)))}))}},28265:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(98283),l=t(72539),o=t(31653),i=t(47746),s=t(86432),r=t(92794),c=t(66198),p=t(61851),d=t(79410),u=t(58489),Z=t(52903);const h=["value","totals","onChange"],g=(0,p.X)([...o.yd]);function m(e){let{value:n,totals:t,onChange:p}=e,m=(0,a.Z)(e,h);const y=(0,i.Z)(),w=!(0,s.Z)(y.breakpoints.up("sm"));return(0,Z.tZ)(u.Z,Object.assign({exclusive:!0,value:n},m,{children:o.yd.map((e=>{var a;return(0,Z.BX)(r.Z,{value:e,sx:{p:w?1:void 0,minWidth:w?0:"6em",display:"flex",gap:w?0:1},onClick:()=>p(g(n,e)),children:[(0,Z.tZ)(d.Z,{src:null==(a=l.CL.weaponTypes)?void 0:a[e],size:2,sideMargin:!0}),(0,Z.tZ)(c.Z,{label:t[e],size:"small"})]},e)}))}))}},73501:(e,n,t)=>{t.d(n,{Z:()=>$});var a=t(72539),l=t(83568),o=t(16633),i=t(54278),s=t(40535),r=t(22698),c=t(29754),p=t(75213),d=t(67550),u=t(79906),Z=t(85801),h=t(62197),g=t(7671),m=t(23883),y=t(83249),w=t(2784),f=t(11141),x=t(87833),v=t(50090),b=t(41653),k=t(26437),C=t(79410),W=t(36674),I=t(25616),B=t(32404),X=t(2754),T=t(15030),S=t(52903);let P,z=e=>e;function $({weaponId:e,onClick:n,onEdit:t,onDelete:$,canEquip:j=!1,extraButtons:E}){const{t:N}=(0,f.$G)(["page_weapon","ui"]),_=(0,l.Wz)(),G=(0,l.tA)(e),L=null!=G&&G.key?(0,I.ub)(G.key):void 0,M=(0,w.useCallback)((e=>e.weaponTypeKey===(null==L?void 0:L.weaponType)),[L]),O=(0,w.useCallback)((t=>(0,S.tZ)(p.Z,{onClick:()=>null==n?void 0:n(e),children:t})),[n,e]),D=(0,w.useCallback)((e=>(0,S.tZ)(d.Z,{children:e})),[]),A=(0,w.useCallback)((n=>e&&_.weapons.set(e,{location:n})),[_,e]),U=(0,w.useMemo)((()=>L&&G&&(0,X.mP)([L.data,(0,X.v0)(G)])),[L,G]);if(!G||!L||!U)return null;const{level:q,ascension:H,refinement:J,id:R,location:K="",lock:V}=G,F=U.get(B.ri.weapon.type).value,Q=[B.ri.weapon.main,B.ri.weapon.sub,B.ri.weapon.sub2].map((e=>U.get(e))),Y=(0,a.Aq)(G.key,H>=2);return(0,S.tZ)(w.Suspense,{fallback:(0,S.tZ)(u.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:(0,S.BX)(x.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,S.BX)(k.Z,{condition:!!n,wrapper:O,falseWrapper:D,children:[(0,S.BX)(d.Z,{className:`grad-${L.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!n&&(0,S.tZ)(Z.Z,{color:"primary",onClick:()=>_.weapons.set(R,{lock:!V}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:V?(0,S.tZ)(i.Z,{}):(0,S.tZ)(s.Z,{})}),(0,S.BX)(d.Z,{sx:{position:"relative",zIndex:1},children:[(0,S.BX)(d.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,S.tZ)(C.Z,{size:2,src:a.CL.weaponTypes[F]}),(0,S.tZ)(h.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,S.tZ)("strong",{children:L.name})})]}),(0,S.BX)(h.Z,{component:"span",variant:"h5",children:["Lv. ",q]}),(0,S.BX)(h.Z,{component:"span",variant:"h5",color:"text.secondary",children:["/",o.SJ[H]]}),(0,S.BX)(h.Z,{variant:"h6",children:["Refinement ",(0,S.tZ)("strong",{children:J})]}),(0,S.tZ)(W.q,{stars:L.rarity,colored:!0})]}),(0,S.tZ)(d.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,S.tZ)(d.Z,{component:"img",src:null!=Y?Y:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,S.tZ)(g.Z,{children:Q.map((e=>e.info.name?(0,S.BX)(d.Z,{sx:{display:"flex"},children:[(0,S.BX)(h.Z,{flexGrow:1,children:[e.info.icon," ",e.info.name]}),(0,S.tZ)(h.Z,{children:(0,T.p)(e)})]},JSON.stringify(e.info)):null))})]}),(0,S.BX)(d.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,S.tZ)(d.Z,{sx:{flexGrow:1},children:j?(0,S.tZ)(v.W,{location:K,setLocation:A,filter:M,autoCompleteProps:{getOptionDisabled:e=>!e.key}}):(0,S.tZ)(b.Z,{location:K})}),(0,S.BX)(d.Z,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!t&&(0,S.tZ)(m.Z,{title:(0,S.tZ)(h.Z,{children:N(P||(P=z`page_weapon:edit`))}),placement:"top",arrow:!0,children:(0,S.tZ)(y.Z,{color:"info",size:"small",onClick:()=>t(R),children:(0,S.tZ)(c.Z,{})})}),!!$&&(0,S.tZ)(y.Z,{color:"error",size:"small",onClick:()=>$(R),disabled:!!K||V,children:(0,S.tZ)(r.Z,{})}),E]})]})]})})}},35072:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var a=t(45492),l=t(42745),o=t(31653),i=t(44938),s=t(83568),r=t(92252),c=t(67550),p=t(7671),d=t(13780),u=t(79906),Z=t(83249),h=t(41075),g=t(2784),m=t(61877),y=t(11141),w=t(24264),f=t(66146),x=t(90844),v=t(28265),b=t(25616),k=t(54578),C=t(2313),W=t(73501),I=t(52903);const B=g.lazy((()=>t.e(863).then(t.bind(t,18571)))),X=(0,g.lazy)((()=>Promise.all([t.e(282),t.e(262),t.e(188)]).then(t.bind(t,64262)))),T={xs:1,sm:2,md:3,lg:3,xl:4},S={xs:10,sm:12,md:24,lg:24,xl:24},P=Object.keys(k.gd);function z(){const{t:e}=(0,y.$G)(["page_weapon","ui","weaponNames_gen"]),n=(0,s.Wz)(),[t,z]=(0,g.useState)(n.displayWeapon.get());(0,g.useEffect)((()=>n.displayWeapon.follow(((e,n)=>z(n)))),[n]);const[$,j]=(0,g.useState)(!1),[E,N]=(0,a.NW)(),_=(0,g.useRef)(null),[G,L]=(0,g.useState)(0);(0,g.useEffect)((()=>(m.ZP.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny(((e,n)=>("new"===n||"remove"===n)&&N())))),[N,n]);const M=(0,a.JT)(),O=S[M],D=(0,g.useCallback)((async a=>{const l=n.weapons.get(a);if(!l)return;const o=e(`weaponNames_gen:${l.key}`);window.confirm(e("removeWeapon",{value:o}))&&(n.weapons.remove(a),t.editWeaponId===a&&n.displayWeapon.set({editWeaponId:""}))}),[t.editWeaponId,n,e]),A=(0,g.useCallback)((e=>{n.displayWeapon.set({editWeaponId:e})}),[n]),U=(0,g.useCallback)((e=>{A(n.weapons.new((0,i.xg)(e)))}),[n,A]),[q,H]=(0,g.useState)(""),J=(0,g.useDeferredValue)(q),{sortType:R,ascending:K,weaponType:V,rarity:F}=t,{weaponIdList:Q,totalWeaponNum:Y}=(0,g.useMemo)((()=>{var e;const t=n.weapons.values,a=t.length,o=t.filter((0,l.CZ)({weaponType:V,rarity:F,name:J},(0,k.Xg)())).sort((0,l.ef)(null!=(e=k.gd[R])?e:[],K,(0,k.Sn)())).map((e=>e.id));return E&&{weaponIdList:o,totalWeaponNum:a}}),[E,n,R,K,F,V,J]),{weaponIdsToShow:ee,numPages:ne,currentPageIndex:te}=(0,g.useMemo)((()=>{const e=Math.ceil(Q.length/O),n=(0,l.re)(G,0,e-1);return{weaponIdsToShow:Q.slice(n*O,(n+1)*O),numPages:e,currentPageIndex:n}}),[Q,G,O]),ae=Q.length!==Y?`${Q.length}/${Y}`:`${Y}`,le=(0,g.useCallback)(((e,n)=>{var t;null==(t=_.current)||t.scrollIntoView({behavior:"smooth"}),L(n-1)}),[L,_]),oe=(0,g.useCallback)((()=>n.displayWeapon.set({editWeaponId:""})),[n]),{editWeaponId:ie}=t;(0,g.useEffect)((()=>{ie&&(n.weapons.get(ie)||oe())}),[n,ie,oe]);const se=(0,g.useMemo)((()=>(0,C.W)(o.yd,(e=>Object.entries(n.weapons.data).forEach((([n,t])=>{const a=(0,b.ub)(t.key).weaponType;e[a].total++,Q.includes(n)&&e[a].current++}))))),[n,Q]),re=(0,g.useMemo)((()=>(0,C.W)(o.U1,(e=>Object.entries(n.weapons.data).forEach((([n,t])=>{const a=(0,b.ub)(t.key).rarity;e[a].total++,Q.includes(n)&&e[a].current++}))))),[n,Q]),ce={count:ne,page:te+1,onChange:le},pe={numShowing:ee.length,total:ae,t:e,namespace:"page_weapon"},de={sortKeys:[...P],value:R,onChange:e=>n.displayWeapon.set({sortType:e}),ascending:K,onChangeAsc:e=>n.displayWeapon.set({ascending:e})};return(0,I.BX)(c.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,I.tZ)(g.Suspense,{fallback:!1,children:(0,I.tZ)(B,{show:$,onHide:()=>j(!1),onSelect:U})}),(0,I.tZ)(g.Suspense,{fallback:!1,children:(0,I.tZ)(X,{weaponId:ie,footer:!0,onClose:oe})}),(0,I.tZ)(w.Z,{ref:_,children:(0,I.BX)(p.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,I.BX)(c.Z,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[(0,I.tZ)(v.Z,{onChange:e=>n.displayWeapon.set({weaponType:e}),value:V,totals:se,size:"small"}),(0,I.tZ)(x.Z,{sx:{height:"100%"},onChange:e=>n.displayWeapon.set({rarity:e}),value:F,totals:re,size:"small"}),(0,I.tZ)(c.Z,{flexGrow:1}),(0,I.tZ)(d.Z,{autoFocus:!0,size:"small",value:q,onChange:e=>H(e.target.value),label:e("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),(0,I.tZ)(c.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:(0,I.tZ)(f.Z,{paginationProps:ce,showingTextProps:pe,displaySort:!0,sortByButtonProps:de})})]})}),(0,I.BX)(g.Suspense,{fallback:(0,I.tZ)(u.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[(0,I.tZ)(Z.Z,{fullWidth:!0,onClick:()=>j(!0),color:"info",startIcon:(0,I.tZ)(r.Z,{}),children:e("page_weapon:addWeapon")}),(0,I.tZ)(h.ZP,{container:!0,spacing:1,columns:T,children:ee.map((e=>(0,I.tZ)(h.ZP,{item:!0,xs:1,children:(0,I.tZ)(W.Z,{weaponId:e,onDelete:D,onEdit:A,canEquip:!0})},e)))})]}),ne>1&&(0,I.tZ)(w.Z,{children:(0,I.tZ)(p.Z,{children:(0,I.tZ)(c.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:(0,I.tZ)(f.Z,{paginationProps:ce,showingTextProps:pe})})})})]})}},54578:(e,n,t)=>{t.d(n,{Sn:()=>o,Xg:()=>i,gd:()=>s});var a=t(50693),l=t(31809);function o(){return{level:e=>{var n;return null!=(n=e.level*(e.ascension+1))?n:0},rarity:e=>a.G2.weapon.data[e.key].rarity,name:e=>l.Z.t(`weaponNames_gen:${e.key}`)}}function i(){return{rarity:(e,n)=>n.includes(a.G2.weapon.data[e.key].rarity),weaponType:(e,n)=>n.includes(a.G2.weapon.data[e.key].weaponType),name:(e,n)=>l.Z.t(`weaponNames_gen:${e.key}`).toLowerCase().includes(n.toLowerCase())}}const s={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]}},2313:(e,n,t)=>{t.d(n,{A:()=>l,W:()=>o});var a=t(42745);function l(e,n){const t=(0,a.vU)(e,(e=>i(e)));return n(t),(0,a.vU)(t,(e=>s(e)))}function o(e,n){const t=i(e);return n(t),s(t)}function i(e){return Object.fromEntries(e.map((e=>[e,{total:0,current:0}])))}function s(e){return(0,a.vU)(e,(({total:e,current:n})=>n===e?`${e}`:`${n}/${e}`))}}}]);