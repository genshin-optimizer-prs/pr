"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[932],{29754:(a,e,n)=>{var t=n(14859);e.Z=void 0;var i=t(n(68671)),o=n(52322),p=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=p},97053:(a,e,n)=>{var t=n(14859);e.Z=void 0;var i=t(n(68671)),o=n(52322),p=(0,i.default)((0,o.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");e.Z=p},92252:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(29798),i=n(52322);const o=(0,t.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},54278:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(29798),i=n(52322);const o=(0,t.Z)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock")},40535:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(29798),i=n(52322);const o=(0,t.Z)((0,i.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen")},50090:(a,e,n)=>{n.d(e,{W:()=>y});var t=n(31981),i=n(66615),o=n(67550),p=n(79906),r=n(2784),l=n(11141),s=n(23657),c=n(31637),d=n(34156),g=n(55893),h=n(75958),u=n(80680),b=n(72550),f=n(52903);let Z,m=a=>a;function y({location:a,setLocation:e,filter:n=(()=>!0),autoCompleteProps:y={}}){const{t:_}=(0,l.$G)(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:v}=(0,r.useContext)(s.E),{database:x}=(0,r.useContext)(d.t),{gender:k}=(0,g.Z)(),w=(0,r.useCallback)((a=>e=>_(`${a?"sillyWisher_charNames":"charNames_gen"}:${(0,t.Cs)(x.chars.LocationToCharacterKey(e),k)}`)),[x,k,_]),[C,z]=(0,b.NW)();(0,r.useEffect)((()=>x.arts.followAny((()=>z()))),[x,z]);const S=(0,r.useMemo)((()=>C&&x.chars.keys.map((a=>(0,t.V7)(a)))),[C,x]),W=(0,r.useCallback)((a=>""===a?(0,f.tZ)(i.Z,{}):(0,f.tZ)(o.Z,{sx:{opacity:S.includes(a)?void 0:.7},children:(0,f.tZ)(u.Z,{characterKey:x.chars.LocationToCharacterKey(a)})})),[x,S]),K=(0,r.useCallback)((a=>"Traveler"===a?t.vF.some((a=>x.charMeta.get(a).favorite)):!!a&&x.charMeta.get(a).favorite),[x]),M=(0,r.useMemo)((()=>[{key:"",label:_(Z||(Z=m`artifact:filterLocation.inventory`))},...Array.from(new Set(t.vp.filter((a=>n((0,c.m)(x.chars.LocationToCharacterKey(a),k)))))).map((a=>({key:a,label:w(v)(a),favorite:K(a),alternateNames:v?[w(!v)(a)]:void 0,color:S.includes(a)?void 0:"secondary"}))).sort(((a,e)=>a.favorite&&!e.favorite?-1:!a.favorite&&e.favorite?1:!a.color&&e.color?-1:a.color&&!e.color?1:a.label.localeCompare(e.label)))]),[_,x.chars,k,S,n,w,v,K]);return(0,f.tZ)(r.Suspense,{fallback:(0,f.tZ)(p.Z,{variant:"text",width:100}),children:(0,f.tZ)(h._,Object.assign({size:"small",options:M,valueKey:a,onChange:a=>e(null!=a?a:""),toImg:W},y))})}},41653:(a,e,n)=>{n.d(e,{Z:()=>b});var t=n(98283),i=n(66615),o=n(62197),p=n(67550),r=n(2784),l=n(11141),s=n(31637),c=n(34156),d=n(55893),g=n(80680),h=n(52903);const u=["location"];function b(a){let{location:e}=a,n=(0,t.Z)(a,u);const{t:b}=(0,l.$G)("ui"),{database:f}=(0,r.useContext)(c.t),{gender:Z}=(0,d.Z)(),m=(0,r.useMemo)((()=>e?(0,s.m)(f.chars.LocationToCharacterKey(e),Z):void 0),[e,Z,f]);return(0,h.tZ)(o.Z,Object.assign({component:"span"},n,{children:e&&null!=m&&m.name?(0,h.BX)(p.Z,{children:[(0,h.tZ)(g.Z,{characterKey:f.chars.LocationToCharacterKey(e)}),(0,h.tZ)(p.Z,{sx:{pl:1},component:"span",children:m.name})]}):(0,h.BX)("span",{children:[(0,h.tZ)(i.Z,{sx:{verticalAlign:"text-bottom"}})," ",b("inventory")]})}))}},26437:(a,e,n)=>{function t({condition:a,wrapper:e,falseWrapper:n,children:t}){return a?e(t):n?n(t):t}n.d(e,{Z:()=>t})},80680:(a,e,n)=>{n.d(e,{Z:()=>g});var t=n(16736),i=n(55290),o=n(65992),p=n(2784),r=n(23657),l=n(55893),s=n(52903);const c=(0,o.ZP)("img",{name:"ImgIcon",slot:"Root",shouldForwardProp:a=>!["size","sideMargin"].includes(a)})((({size:a=3,sideMargin:e=!1})=>({display:"inline-block",width:`${a}em`,height:`${a}em`,marginTop:.85*(1-a)+"em",marginBottom:.15*(1-a)+"em",marginLeft:e?void 0:.3*(1-a)+"em",marginRight:e?void 0:.3*(1-a)+"em",verticalAlign:"text-bottom"}))),d=(0,o.ZP)("img",{name:"ImgIcon",slot:"Root",shouldForwardProp:a=>!["size","sideMargin"].includes(a)})((({size:a=2,sideMargin:e=!1})=>({display:"inline-block",width:`${a}em`,height:`${a}em`,marginTop:.5*(1-a)+"em",marginBottom:.5*(1-a)+"em",marginLeft:e?void 0:.5*(1-a)+"em",marginRight:e?void 0:.5*(1-a)+"em",verticalAlign:"text-bottom"})));function g({characterKey:a,sideMargin:e=!1}){const{gender:n}=(0,l.Z)(),{silly:o}=(0,p.useContext)(r.E),g=(0,i.t)(a,n),h=(0,t.Li)(a,"iconSide",n);return o&&g?(0,s.tZ)(d,{src:g,sideMargin:e}):(0,s.tZ)(c,{src:h,sideMargin:e})}},56489:(a,e,n)=>{n.d(e,{Z:()=>h});var t=n(98283),i=n(97053),o=n(67550),p=n(80551),r=n(94380),l=n(83249),s=n(11141),c=n(23485),d=n(52903);const g=["sortKeys","value","onChange","ascending","onChangeAsc"];function h(a){let{sortKeys:e,value:n,onChange:h,ascending:u,onChangeAsc:b}=a,f=(0,t.Z)(a,g);const{t:Z}=(0,s.$G)("ui");return(0,d.BX)(o.Z,{display:"flex",alignItems:"center",gap:1,children:[(0,d.BX)(s.cC,{t:Z,i18nKey:"sortBy",children:["Sort by:"," "]}),(0,d.BX)(p.Z,Object.assign({},f,{children:[(0,d.tZ)(c.Z,{title:(0,d.tZ)(s.cC,{t:Z,i18nKey:`sortMap.${n}`,children:{value:Z(`sortMap.${n}`)}}),children:e.map((a=>(0,d.tZ)(r.Z,{selected:n===a,disabled:n===a,onClick:()=>h(a),children:Z(`sortMap.${a}`)},a)))}),(0,d.tZ)(l.Z,{onClick:()=>b(!u),startIcon:(0,d.tZ)(i.Z,{sx:{transform:u?"scale(1, -1)":"scale(1)"}}),children:u?(0,d.tZ)(s.cC,{t:Z,i18nKey:"ascending",children:"Ascending"}):(0,d.tZ)(s.cC,{t:Z,i18nKey:"descending",children:"Descending"})})]}))]})}},36674:(a,e,n)=>{n.d(e,{q:()=>p});var t=n(78437),i=n(86569),o=n(52903);const p=({stars:a=1,colored:e=!1,inline:n=!1})=>(0,o.tZ)(i.Z,{color:e?"warning":void 0,children:[...Array(a).keys()].map(((a,e)=>(0,o.tZ)(t.Z,{fontSize:n?"inherit":void 0,sx:n?{verticalAlign:"text-top"}:void 0},e)))})},90844:(a,e,n)=>{n.d(e,{Z:()=>f});var t=n(98283),i=n(31981),o=n(78437),p=n(47746),r=n(86432),l=n(92794),s=n(67550),c=n(66198),d=n(61851),g=n(58489),h=n(52903);const u=["value","totals","onChange"],b=(0,d.X)([...i.U1]);function f(a){let{value:e,totals:n,onChange:d}=a,f=(0,t.Z)(a,u);const Z=(0,p.Z)(),m=!(0,r.Z)(Z.breakpoints.up("sm"));return(0,h.tZ)(g.Z,Object.assign({exclusive:!0,value:e},f,{children:i.U1.map((a=>(0,h.tZ)(l.Z,{value:a,sx:{p:m?1:void 0,minWidth:m?0:"6em",display:"flex",gap:m?0:1},onClick:()=>d(b(e,a)),children:(0,h.BX)(s.Z,{display:"flex",children:[(0,h.tZ)("strong",{children:a}),(0,h.tZ)(o.Z,{}),(0,h.tZ)(c.Z,{label:n[a],size:"small"})]})},a)))}))}},28265:(a,e,n)=>{n.d(e,{Z:()=>f});var t=n(98283),i=n(31981),o=n(16736),p=n(47746),r=n(86432),l=n(92794),s=n(66198),c=n(61851),d=n(79410),g=n(58489),h=n(52903);const u=["value","totals","onChange"],b=(0,c.X)([...i.yd]);function f(a){let{value:e,totals:n,onChange:c}=a,f=(0,t.Z)(a,u);const Z=(0,p.Z)(),m=!(0,r.Z)(Z.breakpoints.up("sm"));return(0,h.tZ)(g.Z,Object.assign({exclusive:!0,value:e},f,{children:i.yd.map((a=>{var t;return(0,h.BX)(l.Z,{value:a,sx:{p:m?1:void 0,minWidth:m?0:"6em",display:"flex",gap:m?0:1},onClick:()=>c(b(e,a)),children:[(0,h.tZ)(d.Z,{src:null==(t=o.CL.weaponTypes)?void 0:t[a],size:2,sideMargin:!0}),(0,h.tZ)(s.Z,{label:n[a],size:"small"})]},a)}))}))}},73501:(a,e,n)=>{n.d(e,{Z:()=>T});var t=n(16736),i=n(74155),o=n(54278),p=n(40535),r=n(22698),l=n(29754),s=n(75213),c=n(67550),d=n(79906),g=n(85801),h=n(62197),u=n(7671),b=n(23883),f=n(83249),Z=n(2784),m=n(11141),y=n(87833),_=n(50090),v=n(41653),x=n(26437),k=n(79410),w=n(36674),C=n(13499),z=n(34156),S=n(41319),W=n(2754),K=n(15030),M=n(30311),X=n(52903);let B,I=a=>a;function T({weaponId:a,onClick:e,onEdit:n,onDelete:T,canEquip:A=!1,extraButtons:L}){const{t:j}=(0,m.$G)(["page_weapon","ui"]),{database:N}=(0,Z.useContext)(z.t),$=(0,M.Z)(a),q=null!=$&&$.key?(0,C.ub)($.key):void 0,E=(0,Z.useCallback)((a=>a.weaponTypeKey===(null==q?void 0:q.weaponType)),[q]),P=(0,Z.useCallback)((n=>(0,X.tZ)(s.Z,{onClick:()=>null==e?void 0:e(a),children:n})),[e,a]),D=(0,Z.useCallback)((a=>(0,X.tZ)(c.Z,{children:a})),[]),H=(0,Z.useCallback)((e=>a&&N.weapons.set(a,{location:e})),[N,a]),V=(0,Z.useMemo)((()=>q&&$&&(0,W.mP)([q.data,(0,W.v0)($)])),[q,$]);if(!$||!q||!V)return null;const{level:G,ascension:R,refinement:O,id:Y,location:F="",lock:J}=$,U=V.get(S.ri.weapon.type).value,Q=[S.ri.weapon.main,S.ri.weapon.sub,S.ri.weapon.sub2].map((a=>V.get(a))),aa=(0,t.Aq)($.key,R>=2);return(0,X.tZ)(Z.Suspense,{fallback:(0,X.tZ)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:(0,X.BX)(y.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,X.BX)(x.Z,{condition:!!e,wrapper:P,falseWrapper:D,children:[(0,X.BX)(c.Z,{className:`grad-${q.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!e&&(0,X.tZ)(g.Z,{color:"primary",onClick:()=>N.weapons.set(Y,{lock:!J}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:J?(0,X.tZ)(o.Z,{}):(0,X.tZ)(p.Z,{})}),(0,X.BX)(c.Z,{sx:{position:"relative",zIndex:1},children:[(0,X.BX)(c.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,X.tZ)(k.Z,{size:2,src:t.CL.weaponTypes[U]}),(0,X.tZ)(h.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,X.tZ)("strong",{children:q.name})})]}),(0,X.BX)(h.Z,{component:"span",variant:"h5",children:["Lv. ",G]}),(0,X.BX)(h.Z,{component:"span",variant:"h5",color:"text.secondary",children:["/",i.SJ[R]]}),(0,X.BX)(h.Z,{variant:"h6",children:["Refinement ",(0,X.tZ)("strong",{children:O})]}),(0,X.tZ)(w.q,{stars:q.rarity,colored:!0})]}),(0,X.tZ)(c.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,X.tZ)(c.Z,{component:"img",src:null!=aa?aa:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,X.tZ)(u.Z,{children:Q.map((a=>a.info.name?(0,X.BX)(c.Z,{sx:{display:"flex"},children:[(0,X.BX)(h.Z,{flexGrow:1,children:[a.info.icon," ",a.info.name]}),(0,X.tZ)(h.Z,{children:(0,K.p)(a)})]},JSON.stringify(a.info)):null))})]}),(0,X.BX)(c.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,X.tZ)(c.Z,{sx:{flexGrow:1},children:A?(0,X.tZ)(_.W,{location:F,setLocation:H,filter:E,autoCompleteProps:{getOptionDisabled:a=>!a.key}}):(0,X.tZ)(v.Z,{location:F})}),(0,X.BX)(c.Z,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!n&&(0,X.tZ)(b.Z,{title:(0,X.tZ)(h.Z,{children:j(B||(B=I`page_weapon:edit`))}),placement:"top",arrow:!0,children:(0,X.tZ)(f.Z,{color:"info",size:"small",onClick:()=>n(Y),children:(0,X.tZ)(l.Z,{})})}),!!T&&(0,X.tZ)(f.Z,{color:"error",size:"small",onClick:()=>T(Y),disabled:!!F||J,children:(0,X.tZ)(r.Z,{})}),L]})]})]})})}},35072:(a,e,n)=>{n.r(e),n.d(e,{default:()=>T});var t=n(31981),i=n(72550),o=n(12761),p=n(92252),r=n(67550),l=n(7671),s=n(13780),c=n(5896),d=n(79906),g=n(83249),h=n(41075),u=n(62197),b=n(2784),f=n(61877),Z=n(11141),m=n(24264),y=n(56489),_=n(90844),v=n(28265),x=n(13499),k=n(34156),w=n(2313),C=n(54578),z=n(7794),S=n(73501),W=n(52903);const K=b.lazy((()=>n.e(571).then(n.bind(n,18571)))),M=(0,b.lazy)((()=>n.e(262).then(n.bind(n,64262)))),X={xs:1,sm:2,md:3,lg:3,xl:4},B={xs:10,sm:12,md:24,lg:24,xl:24},I=Object.keys(C.gd);function T(){const{t:a}=(0,Z.$G)(["page_weapon","ui","weaponNames_gen"]),{database:e}=(0,b.useContext)(k.t),[n,u]=(0,b.useState)(e.displayWeapon.get());(0,b.useEffect)((()=>e.displayWeapon.follow(((a,e)=>u(e)))),[e]);const[T,L]=(0,b.useState)(!1),[j,N]=(0,i.NW)(),$=(0,b.useRef)(null),[q,E]=(0,b.useState)(0);(0,b.useEffect)((()=>(f.ZP.send({hitType:"pageview",page:"/weapon"}),e.weapons.followAny(((a,e)=>("new"===e||"remove"===e)&&N())))),[N,e]);const P=(0,i.JT)(),D=B[P],H=(0,b.useCallback)((async t=>{const i=e.weapons.get(t);if(!i)return;const o=a(`weaponNames_gen:${i.key}`);window.confirm(a("removeWeapon",{value:o}))&&(e.weapons.remove(t),n.editWeaponId===t&&e.displayWeapon.set({editWeaponId:""}))}),[n.editWeaponId,e,a]),V=(0,b.useCallback)((a=>{e.displayWeapon.set({editWeaponId:a})}),[e]),G=(0,b.useCallback)((a=>{V(e.weapons.new((0,z.xg)(a)))}),[e,V]),[R,O]=(0,b.useState)(""),Y=(0,b.useDeferredValue)(R),{sortType:F,ascending:J,weaponType:U,rarity:Q}=n,{weaponIdList:aa,totalWeaponNum:ea}=(0,b.useMemo)((()=>{var a;const n=e.weapons.values,t=n.length,i=n.filter((0,o.CZ)({weaponType:U,rarity:Q,name:Y},(0,C.Xg)())).sort((0,o.ef)(null!=(a=C.gd[F])?a:[],J,(0,C.Sn)())).map((a=>a.id));return j&&{weaponIdList:i,totalWeaponNum:t}}),[j,e,F,J,Q,U,Y]),{weaponIdsToShow:na,numPages:ta,currentPageIndex:ia}=(0,b.useMemo)((()=>{const a=Math.ceil(aa.length/D),e=(0,o.re)(q,0,a-1);return{weaponIdsToShow:aa.slice(e*D,(e+1)*D),numPages:a,currentPageIndex:e}}),[aa,q,D]),oa=aa.length!==ea?`${aa.length}/${ea}`:`${ea}`,pa=(0,b.useCallback)(((a,e)=>{var n;null==(n=$.current)||n.scrollIntoView({behavior:"smooth"}),E(e-1)}),[E,$]),ra=(0,b.useCallback)((()=>e.displayWeapon.set({editWeaponId:""})),[e]),{editWeaponId:la}=n;(0,b.useEffect)((()=>{la&&(e.weapons.get(la)||ra())}),[e,la,ra]);const sa=(0,b.useMemo)((()=>(0,w.W)(t.yd,(a=>Object.entries(e.weapons.data).forEach((([e,n])=>{const t=(0,x.ub)(n.key).weaponType;a[t].total++,aa.includes(e)&&a[t].current++}))))),[e,aa]),ca=(0,b.useMemo)((()=>(0,w.W)(t.U1,(a=>Object.entries(e.weapons.data).forEach((([e,n])=>{const t=(0,x.ub)(n.key).rarity;a[t].total++,aa.includes(e)&&a[t].current++}))))),[e,aa]);return(0,W.BX)(r.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,W.tZ)(b.Suspense,{fallback:!1,children:(0,W.tZ)(K,{show:T,onHide:()=>L(!1),onSelect:G})}),(0,W.tZ)(b.Suspense,{fallback:!1,children:(0,W.tZ)(M,{weaponId:la,footer:!0,onClose:ra})}),(0,W.tZ)(m.Z,{ref:$,children:(0,W.BX)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,W.BX)(r.Z,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[(0,W.tZ)(v.Z,{onChange:a=>e.displayWeapon.set({weaponType:a}),value:U,totals:sa,size:"small"}),(0,W.tZ)(_.Z,{sx:{height:"100%"},onChange:a=>e.displayWeapon.set({rarity:a}),value:Q,totals:ca,size:"small"}),(0,W.tZ)(r.Z,{flexGrow:1}),(0,W.tZ)(s.Z,{autoFocus:!0,size:"small",value:R,onChange:a=>O(a.target.value),label:a("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),(0,W.BX)(r.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:[(0,W.tZ)(c.Z,{count:ta,page:ia+1,onChange:pa}),(0,W.tZ)(A,{numShowing:na.length,total:oa,t:a}),(0,W.tZ)(y.Z,{sx:{height:"100%"},sortKeys:I,value:F,onChange:a=>e.displayWeapon.set({sortType:a}),ascending:J,onChangeAsc:a=>e.displayWeapon.set({ascending:a})})]})]})}),(0,W.BX)(b.Suspense,{fallback:(0,W.tZ)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[(0,W.tZ)(g.Z,{fullWidth:!0,onClick:()=>L(!0),color:"info",startIcon:(0,W.tZ)(p.Z,{}),children:a("page_weapon:addWeapon")}),(0,W.tZ)(h.ZP,{container:!0,spacing:1,columns:X,children:na.map((a=>(0,W.tZ)(h.ZP,{item:!0,xs:1,children:(0,W.tZ)(S.Z,{weaponId:a,onDelete:H,onEdit:V,canEquip:!0})},a)))})]}),ta>1&&(0,W.tZ)(m.Z,{children:(0,W.tZ)(l.Z,{children:(0,W.BX)(h.ZP,{container:!0,alignItems:"flex-end",children:[(0,W.tZ)(h.ZP,{item:!0,flexGrow:1,children:(0,W.tZ)(c.Z,{count:ta,page:ia+1,onChange:pa})}),(0,W.tZ)(h.ZP,{item:!0,children:(0,W.tZ)(A,{numShowing:na.length,total:oa,t:a})})]})})})]})}function A({numShowing:a,total:e,t:n}){return(0,W.tZ)(u.Z,{color:"text.secondary",children:(0,W.BX)(Z.cC,{t:n,i18nKey:"showingNum",count:a,value:e,children:["Showing ",(0,W.tZ)("b",{children:{count:a}})," out of"," ",{value:e}," Weapons"]})})}},30311:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(2784),i=n(34156);function o(a=""){const{database:e}=(0,t.useContext)(i.t),[n,o]=(0,t.useState)(e.weapons.get(a));return(0,t.useEffect)((()=>o(e.weapons.get(a))),[e,a]),(0,t.useEffect)((()=>a?e.weapons.follow(a,((a,e,n)=>"update"===e&&o(n))):void 0),[a,o,e]),n}},61851:(a,e,n)=>{n.d(e,{X:()=>i});var t=n(12761);function i(a){return(e,n)=>{const i=e.length;return i===a.length?[n]:1===i&&e[0]===n?[...a]:[...new Set((0,t.nh)(e,n))]}}},2313:(a,e,n)=>{n.d(e,{A:()=>i,W:()=>o});var t=n(12761);function i(a,e){const n=(0,t.vU)(a,(a=>p(a)));return e(n),(0,t.vU)(n,(a=>r(a)))}function o(a,e){const n=p(a);return e(n),r(n)}function p(a){return Object.fromEntries(a.map((a=>[a,{total:0,current:0}])))}function r(a){return(0,t.vU)(a,(({total:a,current:e})=>e===a?`${a}`:`${e}/${a}`))}},55290:(a,e,n)=>{n.d(e,{t:()=>se,V:()=>F});var t=n(31981);const i=n.p+"splash_aether.34952116717f90b2.png",o=n.p+"splash_albedo.41ae768b7f816936.png",p=n.p+"splash_alhaitham.0aea2d84d3a76682.png",r=n.p+"splash_amber.4398eed4108e6e45.png",l=n.p+"splash_ayaka.9f277a9d4d0eb3e1.png",s=n.p+"splash_ayato.19fbf52c20703614.png",c=n.p+"splash_barbara.a0a5e1abda0b2d11.png",d=n.p+"splash_beidou.b2442cc32782c025.png",g=n.p+"splash_bennett.d43b7de43b08549e.png",h=n.p+"splash_candace.569a9a668a25d271.png",u=n.p+"splash_chongyun.67305b1878564890.png",b=n.p+"splash_collei.9cfc45884ab4eb51.png",f=n.p+"splash_cyno.8b85f282c259cde0.png",Z=n.p+"splash_dehya.e6cac1553a263bce.png",m=n.p+"splash_diluc.5ea30e4e67ae9585.png",y=n.p+"splash_diona.2b5b0b3d887b5cdc.png",_=n.p+"splash_dori.e06bbe629b0d9d6e.png",v=n.p+"splash_eula.e2d5f2d1f95c030b.png",x=n.p+"splash_faruzan.1b2a210557e17be9.png",k=n.p+"splash_fischl.4d77a8ba4eab9c33.png",w=n.p+"splash_ganyu.6a25af2608c60463.png",C=n.p+"splash_gorou.369f328ac57baaac.png",z=n.p+"splash_heizou.6b18c82c9aa898b4.png",S=n.p+"splash_hutao.62027cac3ab61675.png",W=n.p+"splash_itto.aa2bbe8bb03fe6f2.png",K=n.p+"splash_jean.036586e6b6250c4e.png",M=n.p+"splash_kaeya.510a2cbe75e22700.png",X=n.p+"splash_kazuha.dc85e6e380b91e77.png",B=n.p+"splash_keqing.8d9baa8ea744af2b.png",I=n.p+"splash_klee.63437aa01b19442f.png",T=n.p+"splash_kokomi.8c1990242417dabe.png",A=n.p+"splash_kuki.597b6ba8467cc295.png",L=n.p+"splash_layla.db5414dd55b00d21.png",j=n.p+"splash_lisa.5a25a174d31d2748.png",N=n.p+"splash_mika.43983fc2dc44b5f8.png",$=n.p+"splash_lumine.55e82107827ca15e.png",q=n.p+"splash_mona.7b8c3118dcc5eebf.png",E=n.p+"splash_nahida.735f07bfb7b44cc0.png",P=n.p+"splash_nilou.b7c0c2372471ef39.png",D=n.p+"splash_ningguang.28a50a3084a949ae.png",H=n.p+"splash_noelle.4759574cc1b69a19.png",V=n.p+"splash_qiqi.d3af00cd0ae3958e.png",G=n.p+"splash_raiden.0761d0de1d77f9a4.png",R=n.p+"splash_razor.b4b2f17776e86b8b.png",O=n.p+"splash_rosaria.de442b9c8fc88cd8.png",Y={Albedo:o,Alhaitham:p,Amber:r,AratakiItto:W,Barbara:c,Beidou:d,Bennett:g,Candace:h,Chongyun:u,Collei:b,Cyno:f,Dehya:Z,Diluc:m,Diona:y,Dori:_,Eula:v,Faruzan:x,Fischl:k,Ganyu:w,Gorou:C,HuTao:S,Jean:K,KaedeharaKazuha:X,Kaeya:M,KamisatoAyaka:l,KamisatoAyato:s,Keqing:B,Klee:I,KujouSara:n.p+"splash_sara.6927638e04f80ef2.png",KukiShinobu:A,Layla:L,Lisa:j,Mika:N,Mona:q,Nahida:E,Nilou:P,Ningguang:D,Noelle:H,Qiqi:V,RaidenShogun:G,Razor:R,Rosaria:O,SangonomiyaKokomi:T,Sayu:n.p+"splash_sayu.c7e8e3538bde3729.png",Shenhe:n.p+"splash_shenhe.4a77d286bde14cda.png",ShikanoinHeizou:z,Sucrose:n.p+"splash_sucrose.9b5662054eb03751.png",Tartaglia:n.p+"splash_tartaglia.706594d34dcced58.png",Thoma:n.p+"splash_thoma.ad95b3cdb981999a.png",Tighnari:n.p+"splash_tighnari.24790e9fa262eb62.png",TravelerF:$,TravelerM:i,Venti:n.p+"splash_venti.26824524cf16f528.png",Wanderer:n.p+"splash_wanderer.184c52527412c63f.png",Xiangling:n.p+"splash_xiangling.dd58736a26a089d8.png",Xiao:n.p+"splash_xiao.138c2c6c3360b62a.png",Xingqiu:n.p+"splash_xingqiu.2cd84ccdea55e7d9.png",Xinyan:n.p+"splash_xinyan.d293e82ba4602ff2.png",YaeMiko:n.p+"splash_yae.b753a9c091042c93.png",Yanfei:n.p+"splash_yanfei.51dbc4e87e8a388b.png",Yaoyao:n.p+"splash_yaoyao.c839a8f7091fe1b6.png",Yelan:n.p+"splash_yelan.38afbca8c2f47341.png",Yoimiya:n.p+"splash_yoimiya.9ab15faa3f382c75.png",YunJin:n.p+"splash_yunjin.a3f9cb4411db1bb7.png",Zhongli:n.p+"splash_zhongli.e4f5a623d3e60a3f.png"};function F(a,e){var n;return null!=(n=Y[(0,t.Cs)(a,e)])?n:""}const J=n.p+"portrait_aether.f61a87b477361ae7.png",U=n.p+"portrait_albedo.aa78a312578fd9c0.png",Q=n.p+"portrait_alhaitham.7ed291376b28137c.png",aa=n.p+"portrait_aloy.e248a1e20e73e5d4.png",ea=n.p+"portrait_amber.da26735b882d7ba6.png",na=n.p+"portrait_ayaka.130335676ba0adcc.png",ta=n.p+"portrait_ayato.ad7b88b73fa3e2e7.png",ia=n.p+"portrait_barbara.a8ca73150a887f16.png",oa=n.p+"portrait_beidou.6583cfbf2a5a65cd.png",pa=n.p+"portrait_bennett.919238f3eaa62de3.png",ra=n.p+"portrait_candace.20b25b01deb752c0.png",la=n.p+"portrait_chongyun.0e20f121604bcd7b.png",sa=n.p+"portrait_collei.ac4d86f72ce4e2e1.png",ca=n.p+"portrait_cyno.cdf3ba2854f35751.png",da=n.p+"portrait_dehya.ed4ce0b9611a83a6.png",ga=n.p+"portrait_diluc.e14217fc5343f268.png",ha=n.p+"portrait_diona.2cd5754f28dd7e3b.png",ua=n.p+"portrait_dori.516f8e3dbb6ab732.png",ba=n.p+"portrait_eula.83de127ae9f50be2.png",fa=n.p+"portrait_faruzan.7cb1e2e8d60ccc02.png",Za=n.p+"portrait_fischl.565bf441931ed8f2.png",ma=n.p+"portrait_ganyu.80658ffcaf15e7b1.png",ya=n.p+"portrait_gorou.787db64e4321df79.png",_a=n.p+"portrait_hutao.a4302ec09b4c5289.png",va=n.p+"portrait_itto.14d6b3025090c553.png",xa=n.p+"portrait_jean.05e8e697e2575254.png",ka=n.p+"portrait_kaeya.b21f804ba85efa08.png",wa=n.p+"portrait_kazuha.430f08b01298b27c.png",Ca=n.p+"portrait_keqing.de6d2a3e10f78803.png",za=n.p+"portrait_klee.3a2764bfbf3dd461.png",Sa=n.p+"portrait_kokomi.5951e24a89e46e65.png",Wa=n.p+"portrait_kuki.8fcd9b8eb49fd5e8.png",Ka=n.p+"portrait_layla.39b378442f3bcb85.png",Ma=n.p+"portrait_lisa.c299ea6831baaaff.png",Xa=n.p+"portrait_mika.062ef5e9895b61c8.png",Ba=n.p+"portrait_lumine.a07623a874604fc9.png",Ia=n.p+"portrait_mona.1fe4f7feabbe627a.png",Ta=n.p+"portrait_nahida.51fdf186e1124eba.png",Aa=n.p+"portrait_nilou.a9dea5acf24e72ee.png",La=n.p+"portrait_ningguang.76e8d16b6ec2e7b9.png",ja=n.p+"portrait_noelle.0eacad288dfca71c.png",Na=n.p+"portrait_qiqi.3ab710a84fe50744.png",$a=n.p+"portrait_raiden.b01fe3d2d492baa8.png",qa=n.p+"portrait_razor.f9facb1f24ab3ebd.png",Ea=n.p+"portrait_rosaria.cc4f46825957ea0d.png",Pa=n.p+"portrait_sara.979912380f161319.png",Da=n.p+"portrait_sayu.3745c6d983db752f.png",Ha=n.p+"portrait_shenhe.96cbd3bc14f671eb.png",Va=n.p+"portrait_sucrose.e88dbe01a32275b8.png",Ga=n.p+"portrait_tartaglia.06bd7eacd389c245.png",Ra=n.p+"portrait_thoma.fb224668174536a9.png",Oa=n.p+"portrait_tightnari.3b8bd8cd36460d24.png",Ya=n.p+"portrait_venti.b71fbc4e9b9acca2.png",Fa=n.p+"portrait_wanderer.3942c1e743971df5.png",Ja=n.p+"portrait_xiangling.b562f0a0d4f59b9b.png",Ua=n.p+"portrait_xiao.8762aff1f47842d2.png",Qa=n.p+"portrait_xingqiu.4b56b17ee63e8929.png",ae=n.p+"portrait_xinyan.dc536310efd58d65.png",ee=n.p+"portrait_yae.18141a2b6063d2a9.png",ne=n.p+"portrait_yanfei.e912a861eb3fc131.png",te=n.p+"portrait_yaoyao.14a317e4b0fcf6d4.png",ie=n.p+"portrait_yelan.61b9c7808cbc1ade.png",oe=n.p+"portrait_yoimiya.78ff7c734fa0f28e.png",pe=n.p+"portrait_yunjin.29b3f40b4acae3b1.png",re=n.p+"portrait_zhongli.f05f1487662d3b9b.png",le={Albedo:U,Alhaitham:Q,Aloy:aa,Amber:ea,AratakiItto:va,Barbara:ia,Beidou:oa,Bennett:pa,Candace:ra,Chongyun:la,Collei:sa,Cyno:ca,Dehya:da,Diluc:ga,Diona:ha,Dori:ua,Eula:ba,Faruzan:fa,Fischl:Za,Ganyu:ma,Gorou:ya,HuTao:_a,Jean:xa,KaedeharaKazuha:wa,Kaeya:ka,KamisatoAyaka:na,KamisatoAyato:ta,Keqing:Ca,Klee:za,KujouSara:Pa,KukiShinobu:Wa,Layla:Ka,Lisa:Ma,Mika:Xa,Mona:Ia,Nahida:Ta,Nilou:Aa,Ningguang:La,Noelle:ja,Qiqi:Na,RaidenShogun:$a,Razor:qa,Rosaria:Ea,SangonomiyaKokomi:Sa,Sayu:Da,Shenhe:Ha,ShikanoinHeizou:n.p+"potrait_heizou.e5d455f070b52675.png",Sucrose:Va,Tartaglia:Ga,Thoma:Ra,Tighnari:Oa,TravelerF:Ba,TravelerM:J,Venti:Ya,Wanderer:Fa,Xiangling:Ja,Xiao:Ua,Xingqiu:Qa,Xinyan:ae,YaeMiko:ee,Yanfei:ne,Yaoyao:te,Yelan:ie,Yoimiya:oe,YunJin:pe,Zhongli:re};function se(a,e){var n;return null!=(n=le[(0,t.Cs)(a,e)])?n:""}}}]);