import{y as E,d as e,e as a,a9 as ne,ar as Pe,a as $,z as N,r as d,bP as re,h as u,G as h,i as b,cn as Re,co as Ge,c2 as qe,cp as Ve,V as xe,cq as He,bH as Ue,al as ue,Y as Ye,cr as pe,cs as Je,ct as ae,L,af as se,ag as U,M as j,N as M,T as W,cu as Qe,c0 as B,cm as K,q as Y,f as P,cv as ye,a7 as Ze,cw as Xe,ac as k,am as le,ah as ce,aa as Ce,cx as et,cy as tt,p as at,cz as nt,as as rt,aF as J,cA as st,cB as lt,bO as be,C as ct,ch as it,w as ve,x as Te,j as we,v as G,bI as ie,bJ as ot,aY as Se,cj as dt,cC as ht,cD as ut,cE as pt,D as De,bZ as ge,A as gt,I as mt,cF as me,ap as Ie,bM as ft,S as R,k as xt,m as yt,cG as Ct,ca as bt,cH as vt,az as Tt,a8 as wt,aC as St,aD as Dt,b2 as te,aE as It,b5 as Mt,cI as kt,cJ as Et,bg as _t,aI as jt,cK as $t,cL as Me,cM as At,cN as Wt,H as Ot,F as Bt,b as Lt,E as Nt,cO as Ft,cP as zt}from"./index-OGEympjJ.js";import{u as Kt,B as ke,a as Ee,L as Pt,T as fe,d as Rt,b as Gt,c as qt,e as Vt,C as Ht,f as Ut,g as Yt,E as Jt}from"./LoadoutInfoAlert-CBNwipdM.js";import{T as _e}from"./TeamCard-B9M5IEH-.js";import{u as Qt}from"./useTeamChar-CH_Z4dnV.js";import{O as Zt,L as Xt}from"./TeamDelModal-g8nFQB2u.js";function ea(){const{t}=E("page_character");return e(Pe,{severity:"warning",children:a(ne,{t,i18nKey:"noLoadout",children:["Looks like you haven't added any loadout/Teams with this character yet. You need to create a loadout+team with this character to"," ",e("strong",{children:"create builds"}),", ",e("strong",{children:"theorycraft"}),", or"," ",e("strong",{children:"optimize"}),"."]})})}function ta(){const t=$(),r=N();return d.useCallback(n=>{t.chars.get(n)||t.chars.getWithInitWeapon(n),r(`/characters/${n}`)},[r,t])}function aa({buildId:t,characterKey:r}){const{name:s,description:n,weaponId:c,artifactIds:p}=Kt(t),o=re(r).weaponType;return e(ke,{name:s,description:n,hideFooter:!0,children:e(u,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:a(h,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:3,xl:3},children:[e(h,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Re,{weaponId:c,weaponTypeKey:o})})}),Object.entries(p).map(([f,x])=>e(h,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Ge,{artifactId:x,slotKey:f})})},x||f))]})})})}function na({buildTcId:t}){const r=Ee(t),{name:s,description:n}=r;return e(ke,{name:s,description:n,hideFooter:!0,children:e(ra,{buildTcId:t})})}function ra({buildTcId:t}){const{weapon:r,artifact:{slots:s,substats:{stats:n},sets:c}}=Ee(t),p=qe(r.key),o=Object.entries(n),f=o.slice(0,5),x=o.slice(5);return e(u,{children:a(h,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:2,xl:2},children:[e(h,{item:!0,xs:1,children:a(u,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(Ve,{weapon:r,weaponSheet:p}),!!Object.keys(c).length&&e(b,{sx:{flexGrow:1},children:e(u,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:Object.entries(c).map(([i,l])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(xe,{size:2,src:He(i,"flower")}),e("span",{children:e(Ue,{setKey:i})}),a(ue,{children:["x",l]})]},i))})})]})}),e(h,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%",p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"space-between"},children:Object.entries(s).map(([i,{level:l,statKey:m}])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Ye,{slotKey:i}),a(ue,{children:["+",l]}),e(pe,{statKey:m})]},i))})}),[f,x].map((i,l)=>e(h,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%"},children:e(u,{sx:{p:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1},children:i.map(([m,v])=>a(u,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between"},children:[e(pe,{statKey:m}),a("span",{children:[Je(v,ae(m)),ae(m)]})]},m))})})},l))]})})}function sa({show:t,onHide:r,teamCharId:s,onDelete:n,teamIds:c,conditionalCount:p}){const{t:o}=E("loadout"),f=$(),{name:x,description:i,buildIds:l,buildTcIds:m,customMultiTargets:v,bonusStats:S}=f.teamChars.get(s),A=d.useCallback(()=>{r(),n()},[n,r]);return e(ce,{open:t,onClose:r,containerProps:{maxWidth:"md"},children:a(b,{children:[e(L,{title:e("span",{children:a(ne,{t:o,i18nKey:"loadoutDelModal.title",name:x,children:["Delete Loadout: ",e("strong",{children:{name:x}}),"?"]})}),action:e(se,{onClick:r,children:e(U,{})})}),e(j,{}),a(M,{children:[i&&e(b,{bgt:"dark",sx:{mb:2},children:e(M,{children:i})}),e(W,{children:o`loadoutDelModal.desc`}),a(Qe,{sx:{listStyleType:"disc",pl:4},children:[!!l.length&&e(B,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[o`loadoutDelModal.builds`,l.length," ",e(K,{title:e(u,{children:l.map(C=>{var T;return a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Y,{}),e("span",{children:(T=f.builds.get(C))==null?void 0:T.name})]},C)})}),children:e(P,{})})]})}),!!m.length&&e(B,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[o`loadoutDelModal.tcBuilds`,m.length," ",e(K,{title:e(u,{children:m.map(C=>{var T;return a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Y,{}),e("span",{children:(T=f.buildTcs.get(C))==null?void 0:T.name})]},C)})}),children:e(P,{})})]})}),!!v.length&&e(B,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[o`loadoutDelModal.mTargets`,v.length," ",e(K,{title:e(u,{children:v.map((C,T)=>a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ye,{}),e("span",{children:C.name})]},T))}),children:e(P,{})})]})}),!!Object.keys(S).length&&a(B,{sx:{display:"list-item"},children:[o`loadoutDelModal.bonus`,Object.keys(S).length]}),!!p&&a(B,{sx:{display:"list-item"},children:[o`loadoutDelModal.condi`,p]}),e(B,{sx:{display:"list-item"},children:o`loadoutDelModal.optConfig`}),!!c.length&&e(B,{sx:{display:"list-item"},children:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[a("span",{children:[o`loadoutDelModal.affected`,c.length]}),e(K,{title:e(u,{children:c.map(C=>{var T;return a(W,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Ze,{}),e("span",{children:(T=f.teams.get(C))==null?void 0:T.name})]},C)})}),children:e(P,{})})]})})]})]}),a(Xe,{sx:{float:"right"},children:[e(k,{startIcon:e(U,{}),color:"secondary",onClick:r,children:o`loadoutDelModal.cancel`}),e(k,{startIcon:e(le,{}),color:"error",onClick:A,children:o`loadoutDelModal.delete`})]})]})})}function la({show:t,onHide:r,teamCharId:s,teamIds:n}){const{t:c}=E("loadout"),[p,o,f]=Ce(),x=N(),i=$(),{key:l,name:m,description:v,buildIds:S,buildTcIds:A,customMultiTargets:C,bonusStats:T,optConfigId:q,conditional:F}=Qt(s),{optimizationTarget:w}=et(q),z=()=>{r(),i.teamChars.remove(s)},Q=()=>{i.teamChars.duplicate(s)&&r()},Z=y=>{const _=i.teams.new();i.teams.set(_,X=>{X.loadoutData[0]={teamCharId:y}}),x(`/teams/${_}`)},V=d.useMemo(()=>{let y=0;return tt(F,[],_=>typeof _!="object",()=>y++),y},[F]);return e(ce,{open:t,onClose:r,containerProps:{maxWidth:"lg"},children:a(b,{children:[e(L,{title:a(u,{display:"flex",gap:1,alignItems:"center",children:[e(at,{}),e("strong",{children:m})]}),action:e(se,{onClick:r,children:e(U,{})})}),e(j,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Pt,{}),e(fe,{fullWidth:!0,label:c`loadoutEditor.label`,placeholder:c`loadoutEditor.placeholder`,value:m,onChange:y=>i.teamChars.set(s,{name:y})}),e(fe,{fullWidth:!0,label:c`loadoutEditor.desc`,value:v,onChange:y=>i.teamChars.set(s,{description:y}),multiline:!0,minRows:2}),e(u,{children:a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[e(h,{item:!0,xs:1,children:e(k,{color:"info",onClick:()=>Q(),fullWidth:!0,startIcon:e(Rt,{}),children:c`loadoutEditor.dupBtn`})}),a(h,{item:!0,xs:1,children:[e(sa,{show:p,onHide:f,onDelete:z,teamCharId:s,teamIds:n,conditionalCount:V}),e(k,{fullWidth:!0,startIcon:e(le,{}),color:"error",onClick:o,children:c`loadoutEditor.delBtn`})]})]})}),e(u,{children:a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[!!Object.keys(T).length&&e(h,{item:!0,xs:1,children:e(ca,{bonusStats:T})}),!!w&&e(h,{item:!0,xs:1,children:a(b,{bgt:"light",children:[e(L,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(nt,{}),e("span",{children:c`loadoutEditor.optTarget`})]})}),e(j,{}),e(M,{children:e(rt,{divider:e(j,{orientation:"vertical",flexItem:!0}),spacing:1,children:e(Zt,{optimizationTarget:w,customMultiTargets:C})})})]})}),!!C.length&&e(h,{item:!0,xs:1,children:e(ia,{customMultiTargets:C})}),e(h,{item:!0,xs:1,children:e(b,{bgt:"light",children:e(M,{children:a(W,{variant:"h6",children:[c`loadoutEditor.conditionals`,e("strong",{children:V})]})})})})]})})]}),e(j,{}),e(L,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Y,{}),e("span",{children:c`loadoutEditor.builds`})]})}),e(j,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Gt,{}),e(u,{children:e(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:S.map(y=>e(h,{item:!0,xs:1,children:e(aa,{buildId:y,characterKey:l})},y))})}),e(qt,{}),e(u,{children:e(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:A.map(y=>e(h,{item:!0,xs:1,children:e(na,{buildTcId:y})},y))})})]}),e(j,{}),e(L,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Y,{}),e("span",{children:c`loadoutEditor.teams`})]})}),e(j,{}),a(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Vt,{}),a(h,{container:!0,columns:{xs:1,md:2},spacing:2,children:[n.map(y=>e(h,{item:!0,xs:1,children:e(_e,{bgt:"light",teamId:y,onClick:_=>x(`/teams/${y}${_?`/${_}`:""}`)})},y)),e(h,{item:!0,xs:1,children:e(k,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentLight.main"},variant:"outlined",onClick:()=>Z(s),color:"info",startIcon:e(J,{}),children:c`loadoutEditor.addNewTeam`})})]})]})]})})}function ca({bonusStats:t}){const{t:r}=E("loadout");return a(b,{bgt:"light",children:[e(L,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(st,{}),e("span",{children:r`loadoutEditor.bonusStats`})]}),titleTypographyProps:{variant:"h6"}}),e(be,{bgt:"light",sections:[{fields:Object.entries(t).map(([s,n])=>({text:lt.getStr(s)??s,value:n,unit:ae(s)}))}]})]})}function ia({customMultiTargets:t}){const{t:r}=E("loadout");return a(b,{bgt:"light",children:[e(L,{title:a(u,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ye,{}),e("span",{children:r`loadoutEditor.mltTargets`})]}),titleTypographyProps:{variant:"h6"}}),e(be,{bgt:"light",sections:[{fields:t.map(({name:s,description:n})=>({text:s,value:n?e(K,{title:n,children:e(P,{})}):void 0}))}]})]})}const oa={xs:1,md:2};function da({teamCharId:t,teamIds:r}){const{t:s}=E("page_character"),n=N(),c=$(),p=i=>{const l=c.teams.new();c.teams.set(l,m=>{m.loadoutData[0]={teamCharId:i}}),n(`/teams/${l}`)},[o,f,x]=Ce();return a(it,{children:[e(la,{show:o,onHide:x,teamCharId:t,teamIds:r}),a(b,{bgt:"light",children:[e(ct,{onClick:f,children:e(Xt,{teamCharId:t,showSetting:!0})}),e(j,{}),e(M,{sx:{p:1},children:a(h,{container:!0,columns:oa,spacing:1,children:[r.map(i=>e(h,{item:!0,xs:1,children:e(_e,{teamId:i,onClick:l=>n(`/teams/${i}${l?`/${l}`:""}`)})},i)),e(h,{item:!0,xs:1,children:e(k,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentNormal.main"},variant:"outlined",onClick:()=>p(t),color:"info",startIcon:e(J,{}),children:s`charContentModal.addTeam`})})]})})]},t)]})}var oe={},ha=Te;Object.defineProperty(oe,"__esModule",{value:!0});var je=oe.default=void 0,ua=ha(ve()),pa=we,ga=(0,ua.default)((0,pa.jsx)("path",{d:"M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z"}),"Female");je=oe.default=ga;var de={},ma=Te;Object.defineProperty(de,"__esModule",{value:!0});var $e=de.default=void 0,fa=ma(ve()),xa=we,ya=(0,fa.default)((0,xa.jsx)("path",{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"}),"Male");$e=de.default=ya;function Ca(){const{t}=E("ui"),r=$(),{character:s}=d.useContext(G),{key:n}=s,{gender:c}=ie(),p=d.useCallback(()=>r.dbMeta.set({gender:c==="F"?"M":"F"}),[c,r]);return n.startsWith("Traveler")?a(k,{onClick:p,startIcon:c==="F"?e(je,{}):e($e,{}),children:[e("strong",{children:t(`gender.${c}`)})," "]}):null}function ba({onClose:t}){const{t:r}=E(["page_character","sillyWisher_charNames","charNames_gen"]),s=N(),n=$(),{character:c,character:{key:p}}=d.useContext(G),{gender:o}=ie(),f=ot(p,o),{silly:x}=d.useContext(Se),i=d.useCallback(async()=>{const l=r(`${x?"sillyWisher_charNames":"charNames_gen"}:${dt(p,o)}`);window.confirm(r("removeCharacter",{value:l}))&&(n.chars.remove(p),s("/characters"))},[n,s,p,o,x,r]);return a(u,{display:"flex",flexDirection:"column",gap:1,children:[a(u,{display:"flex",gap:1,children:[e(Ca,{}),e(k,{color:"error",onClick:()=>i(),startIcon:e(le,{}),sx:{marginLeft:"auto"},children:r("delete")}),!!t&&e(se,{onClick:t,children:e(U,{})})]}),e(u,{children:a(h,{container:!0,spacing:1,sx:{justifyContent:"center"},children:[e(h,{item:!0,xs:8,sm:5,md:4,lg:3,children:a(b,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",gap:1},children:[e(Ht,{}),e(u,{sx:{px:1},children:e(ht,{level:c.level,ascension:c.ascension,setBoth:l=>n.chars.set(p,l)})}),e(ut,{bgt:"light"}),e(W,{sx:{textAlign:"center",pb:-1},variant:"h6",children:e(pt,{characterKey:p,gender:o})}),e(u,{sx:{px:1},children:e(Ut,{setConstellation:l=>n.chars.set(p,{constellation:l})})})]})}),a(h,{item:!0,xs:12,sm:7,md:8,lg:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(u,{children:e(h,{container:!0,columns:3,spacing:1,children:["auto","skill","burst"].map(l=>{var m;return e(h,{item:!0,xs:1,children:e(Yt,{talentKey:l,dropDownButtonProps:{startIcon:e(xe,{src:(m=f.getTalentOfKey(l))==null?void 0:m.img,size:1.75,sideMargin:!0})},setTalent:v=>n.chars.set(p,S=>{S.talent[l]=v})},l)},l)})})}),e(va,{}),e(Ta,{})]})]})})]})}function va(){const{character:{key:t}}=d.useContext(G),{data:r}=d.useContext(De),s=$(),n=re(t).weaponType,c=r.get(ge.weapon.id).value,p=d.useMemo(()=>gt(mt,o=>r.get(ge.art[o].id).value),[r]);return e(u,{children:e(Jt,{weaponTypeKey:n,weaponId:c,artifactIds:p,setWeapon:o=>{s.weapons.set(o,{location:me(t)})},setArtifact:(o,f)=>{s.arts.set(f,{location:me(t)})}})})}function Ta(){const{t}=E("page_character"),r=N(),{character:{key:s}}=d.useContext(G),n=$(),{gender:c}=ie(),[p,o]=Ie(),f=d.useMemo(()=>{const i={};return n.teamChars.entries.map(([l,m])=>{m.key===s&&(i[l]||(i[l]=[]))}),n.teams.entries.forEach(([l,m])=>{const v=m.loadoutData.find(S=>{var A;return S&&((A=n.teamChars.get(S==null?void 0:S.teamCharId))==null?void 0:A.key)===s});v&&i[v==null?void 0:v.teamCharId].push(l)}),p&&i},[p,s,n]);d.useEffect(()=>n.teams.followAny(()=>o()),[n,o]),d.useEffect(()=>n.teamChars.followAny(()=>o()),[n,o]);const x=()=>{const i=n.teams.new(),l=n.teamChars.new(s);n.teams.set(i,m=>{m.loadoutData[0]={teamCharId:l}}),r(`/teams/${i}`)};return a(u,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(W,{variant:"h6",children:a(ne,{t,i18nKey:"charContentModal.loadoutsWith",children:["Team Loadouts with"," ",e(ft,{characterKey:s,gender:c})]})}),!Object.values(f).length&&e(ea,{}),Object.entries(f).map(([i,l])=>e(da,{teamCharId:i,teamIds:l},i)),e(k,{fullWidth:!0,onClick:()=>x(),color:"info",startIcon:e(J,{}),variant:"outlined",sx:{backgroundColor:"contentLight.main"},children:t`charContentModal.addLoAndTeam`}),e(b,{bgt:"light"})]})}function wa({characterKey:t,onClose:r}){return e(ce,{open:!!t,onClose:r,children:e(d.Suspense,{fallback:e(R,{variant:"rectangular",width:"100%",height:1e3}),children:t&&e(Sa,{characterKey:t,onClose:r},t)})})}function Sa({characterKey:t,onClose:r}){const s=xt(t),n=yt(t),{target:c}=(n==null?void 0:n[t])??{},p=d.useMemo(()=>{if(!(!n||!c))return{data:c,teamData:n,compareData:void 0}},[c,n]),o=d.useMemo(()=>s&&{character:s},[s]),[f,x]=d.useState(),[i,l]=d.useState(),m=d.useMemo(()=>({chartData:f,setChartData:x,graphBuilds:i,setGraphBuilds:l}),[f,i]);return d.useEffect(()=>{x(void 0),l(void 0)},[t]),e(b,{children:e(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:e(d.Suspense,{fallback:e(R,{variant:"rectangular",width:"100%",height:1e3}),children:p&&o&&m?e(G.Provider,{value:o,children:e(De.Provider,{value:p,children:e(Ct.Provider,{value:m,children:e(ba,{onClose:r})})})}):e(R,{variant:"rectangular",width:"100%",height:1e3})})})})}const Da={xs:1,sm:2,md:3,lg:4,xl:4},Ia={xs:5,sm:8,md:9,lg:12,xl:12},Ma=Object.keys(Me);function Aa(){const t=$(),r=N(),{params:{characterKey:s}}=bt({path:"/characters/:characterKey",end:!1})??{params:{}},n=d.useMemo(()=>s?vt(s)?(t.chars.get(s)||t.chars.getWithInitWeapon(s),s):(r("/characters"),null):null,[s,r,t]),{t:c}=E(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:p}=d.useContext(Se),[o,f]=d.useState(()=>t.displayCharacter.get());d.useEffect(()=>t.displayCharacter.follow((g,D)=>f(D)),[t,f]);const[x,i]=d.useState(""),l=d.useDeferredValue(x),m=Tt(),[v,S]=d.useState(!1),[A,C]=Ie();d.useEffect(()=>(wt.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((g,D)=>(D==="new"||D==="remove")&&C())),[C,t]),d.useEffect(()=>t.charMeta.followAny(g=>C()),[C,t]);const T=ta(),q=d.useDeferredValue(o),F=d.useDeferredValue(A),{charKeys:w,totalCharNum:z}=d.useMemo(()=>{const D=t.chars.keys.length,{element:O,weaponType:I,rarity:H,sortType:Fe,ascending:ze}=q,Ke=t.chars.keys.filter(St({element:O,weaponType:I,rarity:H,name:l},At(t,p))).sort(Dt(Me[Fe]??[],ze,Wt(t,p),["new","favorite"]));return F&&{charKeys:Ke,totalCharNum:D}},[t,q,l,p,F]),{weaponType:Q,element:Z,rarity:V,sortType:y,ascending:_}=o,X=d.useMemo(()=>te(Bt,g=>Object.entries(t.chars.data).forEach(([D,O])=>{const I=t.weapons.get(O.equippedWeapon);if(!I)return;const H=Ot(I.key).weaponType;g[H].total++,w.includes(D)&&g[H].current++})),[t,w]),Ae=d.useMemo(()=>te(Nt,g=>Object.entries(t.chars.data).forEach(([D,O])=>{const I=Lt(O.key);g[I].total++,w.includes(D)&&g[I].current++})),[t,w]),We=d.useMemo(()=>te(Ft,g=>Object.entries(t.chars.data).forEach(([D,O])=>{const I=re(O.key).rarity;g[I].total++,w.includes(D)&&g[I].current++})),[t,w]),{numShow:he,setTriggerElement:Oe}=It(Ia[m],w.length),ee=d.useMemo(()=>w.slice(0,he),[w,he]),Be=w.length!==z?`${w.length}/${z}`:`${z}`,Le={numShowing:ee.length,total:Be,t:c,namespace:"page_character"},Ne={sortKeys:[...Ma],value:y,onChange:g=>t.displayCharacter.set({sortType:g}),ascending:_,onChangeAsc:g=>t.displayCharacter.set({ascending:g})};return a(u,{display:"flex",flexDirection:"column",gap:1,children:[n&&e(wa,{characterKey:n,onClose:()=>r("/characters")}),e(d.Suspense,{fallback:!1,children:e(zt,{newFirst:!0,show:v,onHide:()=>S(!1),onSelect:T})}),e(b,{children:a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(h,{container:!0,spacing:1,children:[e(h,{item:!0,children:e(Mt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({weaponType:g}),value:Q,totals:X,size:"small"})}),e(h,{item:!0,children:e(kt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({element:g}),value:Z,totals:Ae,size:"small"})}),e(h,{item:!0,children:e(Et,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({rarity:g}),value:V,totals:We,size:"small"})}),e(h,{item:!0,flexGrow:1}),e(h,{item:!0,children:e(_t,{autoFocus:!0,value:x,onChange:g=>i(g.target.value),label:c("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),e(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(jt,{showingTextProps:Le,sortByButtonProps:Ne})})]})}),e(k,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:e(J,{}),children:c`addNew`}),e(d.Suspense,{fallback:e(R,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(h,{container:!0,spacing:1,columns:Da,children:ee.map(g=>e(h,{item:!0,xs:1,children:e($t,{characterKey:g,onClick:()=>r(`${g}`),hideStats:!0})},g))})}),w.length!==ee.length&&e(R,{ref:g=>{g&&Oe(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Aa as default};
