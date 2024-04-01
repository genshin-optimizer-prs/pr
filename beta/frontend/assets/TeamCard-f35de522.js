import{b as B,u as be,bb as lt,ba as dt,n as l,p as t,bn as _,T as g,aK as Se,r as ee,i as te,j as ne,e as C,f as Q,cI as ut,a6 as R,bD as Ce,cr as ue,ct as he,cs as U,cq as pe,cJ as fe,cK as K,cp as V,$ as ht,d as N,cL as pt,bJ as ft,ch as mt,a5 as gt,M as y,W as ae,t as O,K as k,k as yt,ap as se,b8 as vt,ac as De,b7 as oe,b5 as _e,q as E,bV as we,aD as Ie,bg as xt,o as Me,c4 as bt,a2 as $e,bT as ke,bM as St,bU as Ct,bc as Dt,bN as _t,bO as wt,U as It,b2 as Be,Z as Re}from"./index-cd926c5e.js";import{B as je,d as Mt}from"./BootstrapTooltip-3fd576d6.js";import{e as F,c as $t,h as kt,k as Bt,p as Rt,b as jt}from"./StarDisplay-eeffc131.js";import{S as Tt,s as Te,I as b,J as I,K as M,L as v,M as $,v as f,N as P,O as W,P as Nt,Q as T,R as Ne,V as X,W as Et,T as Ee,w as zt,g as A,x as Y,E as Ot,X as Pt,z as ze,G as Wt,d as At,y as Ht,u as me,A as Gt,r as Kt,n as Vt,C as Oe,Y as qt,c as q,q as ge,j as Ft,B as Lt}from"./index-d76c7984.js";import{D as L}from"./DataContext-f32f640e.js";import{b as Pe}from"./util-3e22b532.js";import{E as Ut,S as We}from"./StatIcon-7ad41900.js";import{S as j}from"./SqBadge-c2885c9c.js";import{b as Jt,g as Qt}from"./index-b741379f.js";import{S as Xt}from"./SlotIcon-d82c4391.js";import{i as re,I as Yt}from"./ColoredText-a15dae25.js";import{u as Zt}from"./useWeapon-1d9ff69e.js";import{g as Ae,W as He}from"./index-45d86c55.js";import{C as z}from"./CardActionArea-aac41c33.js";function en(e){const n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(n,(s,o,r,i)=>o+o+r+r+i+i);const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function Oa(e,n){if(e)return`rgba(${e.r},${e.g},${e.b},${n})`}function tn(e){const n=B();return F(n.charMeta,e)}function Ge(e){const n=B();return F(n.chars,e)}function nn(e){const n=B();return F(n.teams,e)}function an(e){const n=B();return F(n.teamChars,e)}function sn({statKey:e,value:n,color:a,prefix:s="",typographyProps:o={}}){const{t:r}=be("statKey_gen"),i=lt(e),c=dt(n,i);return l(g,{color:a?`${a}.main`:void 0,...o,children:[t(Tt,{statKey:e,iconProps:_})," ",r(e)," ",t("strong",{children:`${s}${c}${i}`})]},e)}function Ke({condition:e,wrapper:n,falseWrapper:a,children:s}){return e?n(s):a?a(s):s}const Ve=({stars:e=1,colored:n=!1,inline:a=!1})=>t(Se,{color:n?"warning":void 0,children:[...Array(e).keys()].map((s,o)=>t($t,{fontSize:a?"inherit":void 0,sx:a?{verticalAlign:"text-top"}:void 0},o))});var ie={},on=te;Object.defineProperty(ie,"__esModule",{value:!0});var qe=ie.default=void 0,rn=on(ee()),cn=ne,ln=(0,rn.default)((0,cn.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");qe=ie.default=ln;const dn=C.createContext({});function un({iconProps:e}){const[n,a]=C.useState(0);return C.useEffect(()=>{const s=setInterval(()=>a(o=>o+1),1e3);return()=>clearInterval(s)},[]),t(Ut,{ele:Q[n%Q.length],iconProps:e})}const x=e=>t(Ee,{ns:"elementalResonance_gen",key18:e}),Z=e=>t(Ee,{ns:"elementalResonance",key18:e}),D=Te(...Q.map(e=>b[e])),Fe=ut(Ce,e=>[`${e}_res_`,I(f.charKey,v(b.ele,4,$(.15)),M.info(`${e}_res_`))]),hn={name:x("ProtectiveCanopy.name"),desc:x("ProtectiveCanopy.desc"),icon:l("span",{children:[t(un,{iconProps:_})," x4"]}),canShow:e=>e.get(b.ele).value>=4,sections:[{teamBuff:!0,fields:Object.values(Fe).map(([e,n])=>({node:n}))}]},[pn,fn]=I(f.charKey,v(D,4,v(b.pyro,2,$(.25))),M.info("atk_")),mn={name:x("FerventFlames.name"),desc:x("FerventFlames.desc"),icon:l("span",{children:[t(ue,{..._})," ",t(ue,{..._})]}),canShow:e=>e.get(b.pyro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.cryo"),value:-40,unit:"%"},{node:pn}]}]},[gn,yn]=I(f.charKey,v(D,4,v(b.hydro,2,$(.25))),M.info("hp_")),vn={name:x("SoothingWater.name"),desc:x("SoothingWater.desc"),icon:l("span",{children:[t(he,{..._})," ",t(he,{..._})]}),canShow:e=>e.get(b.hydro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.pyro"),value:-40,unit:"%"},{node:gn}]}]},Le=["resonance","ShatteringIce"],Ue=P(Le),[xn,bn]=I(f.charKey,v(D,4,v(b.cryo,2,W(Ue,"on",$(.15)))),M.info("critRate_")),Sn={name:x("ShatteringIce.name"),desc:x("ShatteringIce.desc"),icon:l("span",{children:[t(U,{..._})," ",t(U,{..._})]}),canShow:e=>e.get(b.cryo).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:Le,value:Ue,name:T("enemyAffected.frozenOrCryo"),header:{title:x("ShatteringIce.name"),icon:t(U,{})},states:{on:{fields:[{node:xn}]}}}]},Cn={name:x("HighVoltage.name"),desc:x("HighVoltage.desc"),icon:l("span",{children:[t(pe,{..._})," ",t(pe,{..._})]}),canShow:e=>e.get(b.electro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.hydro"),value:-40,unit:"%"}]}]},[Dn,_n]=I(f.charKey,v(D,4,v(b.anemo,2,$(-.15))),M.info("staminaDec_")),[wn,In]=I(f.charKey,v(D,4,v(b.anemo,2,$(.1))),M.info("moveSPD_")),[Mn,$n]=I(f.charKey,v(D,4,v(b.anemo,2,$(-.05))),M.info("cdRed_")),kn={name:x("ImpetuousWinds.name"),desc:x("ImpetuousWinds.desc"),icon:l("span",{children:[t(fe,{..._})," ",t(fe,{..._})]}),canShow:e=>e.get(b.anemo).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{node:Dn},{node:wn},{node:Mn}]}]},Je=["resonance","EnduringRock"],Qe=P(Je),Xe=["resonance","EnduringRockHit"],Ye=P(Xe),[Bn,Rn]=I(f.charKey,v(D,4,v(b.geo,2,$(.15))),M.info("shield_")),[jn,Tn]=I(f.charKey,v(D,4,v(b.geo,2,W(Qe,"on",$(.15)))),M.info("all_dmg_")),[,Nn]=I(Nt.charKey,Tn,M.info("all_dmg_")),[En,zn]=I(f.charKey,v(D,4,v(b.geo,2,W(Ye,"on",$(-.2)))),M.info("geo_enemyRes_")),On={name:x("EnduringRock.name"),desc:x("EnduringRock.desc"),icon:l("span",{children:[t(K,{..._})," ",t(K,{..._})]}),canShow:e=>e.get(b.geo).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,text:x("EnduringRock.desc"),fields:[{node:Bn}]},{teamBuff:!0,path:Je,value:Qe,header:{title:x("EnduringRock.name"),icon:t(K,{})},name:T("protectedByShield"),states:{on:{fields:[{node:Ne(jn,{isTeamBuff:!1})}]}}},{teamBuff:!0,path:Xe,value:Ye,header:{title:x("EnduringRock.name"),icon:t(K,{})},name:Z("EnduringRock.hitCond"),states:{on:{fields:[{node:En},{text:X("duration"),value:15,unit:"s"}]}}}]},Ze=["resonance","SprawlingCanopy2ele"],et=P(Ze),tt=["resonance","SprawlingCanopy3ele"],nt=P(tt),[Pn,Wn]=I(f.charKey,v(D,4,v(b.dendro,2,50)),M.info("eleMas")),[An,Hn]=I(f.charKey,v(D,4,v(b.dendro,2,W(et,"on",30))),M.info("eleMas")),[Gn,Kn]=I(f.charKey,v(D,4,v(b.dendro,2,W(nt,"on",20))),M.info("eleMas")),Vn={name:x("SprawlingGreenery.name"),desc:x("SprawlingGreenery.desc"),icon:l("span",{children:[t(V,{..._})," ",t(V,{..._})]}),canShow:e=>e.get(b.dendro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,text:x("SprawlingGreenery.desc"),fields:[{node:Pn}]},{teamBuff:!0,path:Ze,value:et,header:{title:x("SprawlingGreenery.name"),icon:t(V,{})},name:Z("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:An},{text:X("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:tt,value:nt,header:{title:x("SprawlingGreenery.name"),icon:t(V,{})},name:Z("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:Gn},{text:X("duration"),value:6,unit:"s"}]}}}]},Pa=[hn,mn,vn,Sn,Cn,kn,On,Vn],qn=Et({teamBuff:{premod:{...R(Fe,([e,n])=>n),atk_:fn,hp_:yn,staminaDec_:_n,moveSPD_:In,cdRed_:$n,shield_:Rn,geo_enemyRes_:zn,eleMas:Ne(Te(Wn,Hn,Kn),{pivot:!0}),all_dmg_:Nn},total:{critRate_:bn}}});function Fn(e,n=0,a,s){const o=B(),[r,i]=ht(),c=C.useDeferredValue(r),{gender:d}=N(),h=C.useMemo(()=>c&&Un(o,e,n,d,a,s),[c,d,e,o,n,a,s]);return C.useEffect(()=>e?o.chars.follow(e,i):void 0,[e,i,o]),h}class Ln{constructor(n){this.data={},n.chars.followAny(a=>{this.removeData(a)})}getData(n){return this.data[n]}cacheData(n,a){this.data[n]=a}removeData(n){delete this.data[n]}}const J=new Map,ye=e=>{if(J.has(e))return J.get(e);const n=new Ln(e);return J.set(e,n),n};function Un(e,n,a=0,s,o,r){if(!n)return;if(!a&&!o&&!r){const p=ye(e).getData(n);if(p)return p}const{teamData:i,teamBundle:c}=Jn(e,n,a,o,r)??{};if(!i||!c)return;const d=zt(i,s,n),h=R(d,(p,u)=>{const{data:m,...S}=c[u];return{...p,...S}});return!a&&!o&&!r&&ye(e).cacheData(n,h),h}function Jn(e,n,a=0,s,o){if(!n)return;const r=e.chars.get(n);if(!r)return;const i=Qn(e,!0,a,r,o||(e.weapons.get(r.equippedWeapon)??pt()),s??Object.values(r.equippedArtifacts).map(h=>e.arts.get(h)).filter(h=>h));if(!i)return;const c={[n]:i};return{teamData:{[n]:i.data},teamBundle:c}}function Qn(e,n=!1,a,s,o,r){const i=A(s.key,e.gender);if(!i)return;const c=Ae(o.key);if(!c)return;const d=He.getAllDataOfType(i.weaponTypeKey),h=n?(()=>{const{display:S,...w}=c.data;return Y([w,d])})():c.data,p=Y([i.data,h,Jt]),m=[...Array.isArray(r)?r.map(S=>Ot(S,a)):[r],Pt(s),ze(o),p,Wt,qn];return{character:s,weapon:o,characterSheet:i,weaponSheet:c,data:m}}function Xn({art:e,children:n}){const a=t(y,{children:t(ae,{variant:"rectangular",width:100,height:100})}),s=t(C.Suspense,{fallback:a,children:t(Yn,{art:e})});return t(je,{placement:"top",title:s,disableInteractive:!0,children:n})}function Yn({art:e}){const{t:n}=be("statKey_gen"),a=Qt(e.setKey),{slotKey:s,level:o,rarity:r,mainStatKey:i,substats:c}=e,d=a.getSlotName(s),h=ft.getVariant(i);return l(y,{p:1,children:[l(g,{variant:"h6",children:[t(Xt,{slotKey:s,iconProps:_})," ",d]}),l(g,{variant:"subtitle1",color:`${h}.main`,children:[t(We,{statKey:i,iconProps:_})," ",n(i)," ",mt(i,r,o)]}),l(g,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(kt,{stars:r}),l(j,{color:Pe(o),children:["+",o]})," "]}),t(y,{py:1,children:c.map(({value:p,key:u,rolls:m})=>!!(p&&u)&&t(sn,{statKey:u,value:p,color:`roll${gt(m.length,1,6)}`,prefix:"+"},u))}),t(g,{color:"success.main",children:a.name}),t(Bt,{color:"secondary.main",location:e.location})]})}function Zn({artifactObj:e,slotKey:n}){if(!e)return t(O,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:t(y,{sx:{width:"100%",pb:"100%",position:"relative"},children:t(y,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:re.slot[n]})})});const{mainStatKey:a,rarity:s,level:o}=e,i=Ce.find(c=>e.mainStatKey.includes(c))??"secondary";return t(Xn,{art:e,children:l(O,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[t(y,{component:"img",className:`grad-${s}star`,src:At(e.setKey,e.slotKey),maxWidth:"100%",maxHeight:"100%"}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(j,{sx:{p:.5},color:Pe(o),children:l("strong",{children:["+",o]})})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t(j,{color:i,sx:{p:.5},children:t(We,{statKey:a,iconProps:{fontSize:"inherit"}})})})]})})}function ea({sheet:e,addlText:n,children:a}){const s=l(C.Suspense,{fallback:t(ae,{variant:"text",width:100}),children:[l(g,{children:[t(Yt,{src:re.weaponTypes[e.weaponType],size:1.5})," ",e.name]}),n]});return t(je,{placement:"top",title:s,disableInteractive:!0,children:a})}function ta({weaponId:e}){const n=Zt(e);return n?t(at,{weapon:n}):null}function at({weapon:e}){const n=(e==null?void 0:e.key)&&Ae(e.key),a=C.useMemo(()=>n&&e&&Ht([n.data,ze(e)]),[n,e]);if(!e||!n||!a)return null;const s=l(y,{children:[t(ve,{node:a.get(me.weapon.main)}),t(ve,{node:a.get(me.weapon.sub)})]});return l(O,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[t(y,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${n.rarity}star`,children:t(ea,{sheet:n,addlText:s,children:t(y,{component:"img",src:Gt(e.key,e.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(j,{color:"primary",children:He.getLevelString(e)})})}),n.hasRefinement&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(j,{color:"secondary",children:["R",e.refinement]})})})]})}function ve({node:e}){const{icon:n}=Kt(e.info);return l(g,{children:[n," ",Vt(e)]})}function na({hideWeapon:e=!1}){var a;const{data:n}=C.useContext(L);return t(y,{children:l(k,{container:!0,columns:e?5:6,spacing:.5,children:[!e&&t(k,{item:!0,xs:1,height:"100%",children:t(ta,{weaponId:((a=n.get(f.weapon.id).value)==null?void 0:a.toString())??""})}),t(aa,{})]})})}function aa(){const e=B(),{data:n}=C.useContext(L),a=yt.map(s=>{var o;return[s,e.arts.get(((o=n.get(f.art[s].id).value)==null?void 0:o.toString())??"")]});return t(se,{children:a.map(([s,o])=>t(k,{item:!0,xs:1,children:t(Zn,{artifactObj:o,slotKey:s})},s))})}function sa({weapon:e}){return t(y,{children:l(k,{container:!0,columns:e?6:5,spacing:.5,sx:{},children:[e&&t(k,{item:!0,xs:1,height:"100%",children:t(at,{weapon:e})}),t(k,{item:!0,xs:5,children:t(vt,{sx:{backgroundColor:"info.main",height:"44px",display:"flex",justifyContent:"center",alignItems:"center"},children:t(g,{children:"TC Build"})})})]})})}function st(e,n,a){const s=Rt(e,n),o=Oe(e,"icon",n);return a&&s?s:o||""}function oa({children:e,characterKey:n,onClick:a}){const{gender:s}=N(),{silly:o}=C.useContext(De),r=oe(n),i=C.useCallback(d=>t(z,{onClick:a,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:d}),[a]),c=Oe(n,"banner",s);return t(Ke,{condition:!!a,wrapper:i,children:l(y,{display:"flex",position:"relative",className:c?void 0:`grad-${r.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${c})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[t(y,{flexShrink:1,component:"img",src:st(n,s,o),sx:{maxWidth:"40%"},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1}),t(y,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-between",children:e})]})})}function ra({characterKey:e}){const{gender:n}=N(),{data:a}=C.useContext(L),s=a.get(f.charEle).value,o=a.get(f.lvl).value,r=a.get(f.constellation).value,i=a.get(f.asc).value,c=a.get(f.total.autoBoost).value,d=a.get(f.total.skillBoost).value,h=a.get(f.total.burstBoost).value,p=a.get(f.total.auto).value,u=a.get(f.total.skill).value,m=a.get(f.total.burst).value,S=oe(e);return l(se,{children:[t(E,{label:t(g,{variant:"subtitle1",children:t(_e,{characterKey:e,gender:n})}),size:"small",color:s,sx:{opacity:.85}}),l(y,{display:"flex",gap:1,sx:{textShadow:"0 0 5px gray"},alignItems:"center",children:[l(y,{children:[l(g,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",o]}),l(g,{component:"span",variant:"h6",color:"text.secondary",children:["/",we[i]]})]}),t(g,{component:"span",whiteSpace:"nowrap",sx:{opacity:.85},children:t(Ie,{color:`roll${r<3?3:r}`,children:t(Se,{color:"white",children:l("strong",{children:["C",r]})})})})]}),l(y,{display:"flex",gap:1,sx:{opacity:.85},children:[t(E,{size:"small",color:c?"info":"secondary",label:t("strong",{children:p})}),t(E,{size:"small",color:d?"info":"secondary",label:t("strong",{children:u})}),t(E,{size:"small",color:h?"info":"secondary",label:t("strong",{children:m})})]}),t(g,{variant:"h6",lineHeight:1,children:t(Ve,{stars:S.rarity,colored:!0,inline:!0})})]})}function Wa({characterKey:e}){const{gender:n}=N(),a=oe(e),s=A(e,n);return l(se,{children:[t(E,{label:t(g,{variant:"subtitle1",children:t(_e,{characterKey:e,gender:n})}),size:"small",color:s.elementKey,sx:{opacity:.85}}),t(y,{mt:1,children:t(g,{variant:"h4",children:t(Ie,{children:"NEW"})})}),t(g,{mt:1.5,children:t(Ve,{stars:a.rarity,colored:!0})})]})}var ce={},ia=te;Object.defineProperty(ce,"__esModule",{value:!0});var ot=ce.default=void 0,ca=ia(ee()),la=ne,da=(0,ca.default)((0,la.jsx)("path",{d:"M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"}),"Checkroom");ot=ce.default=da;const xe=qt(xt({dyn:{...f.art,...f.artSet}})),ua={art:Me([...bt,...$e],e=>xe.dyn[e]),artSet:R(f.artSet,(e,n)=>xe.dyn[n])};function Aa(e,n,a){const s={base:{},values:{flower:[],plume:[],goblet:[],circlet:[],sands:[]}},o=new Set;for(const r of e){const i=ke(r.mainStatKey,r.rarity,Math.max(Math.min(n,St[r.rarity]),r.level)),c={id:r.id,set:r.setKey,values:{[r.setKey]:1,[r.mainStatKey]:i,...Object.fromEntries(r.substats.map(d=>[d.key,d.key.endsWith("_")?d.accurateValue/100:d.accurateValue]))}};delete c.values[""],s.values[r.slotKey].push(c),Object.keys(c.values).forEach(d=>o.add(d))}if(s.base=Me([...o],r=>0),a)for(const r of Object.values(s.values))r.push({id:"",values:{}});return s}function Ha(e,n,a){var p;const{artifact:{sets:s},optimization:{target:o,minTotal:r}}=a;if(!o)return{};const i=(p=e[n])==null?void 0:p.target.data[0];if(!i)return{};Object.assign(i,Y([i,ua]));const c=Dt(i.display??{},o);if(!c)return{};const d=Object.keys(r).map(u=>i.total[u]).filter(u=>u);let h=ge([c,...d],i,({path:[u]})=>u!=="dyn");return h=Ft(h,u=>{if(u.operation==="read"&&u.path[0]==="dyn"){const m=s[u.path[1]];if(m)return q(m);if(!$e.includes(u.path[1]))return q(0)}return u},u=>u),h=ge(h,{},u=>!1),{nodes:h}}function Ga(e){const n=new Set;return Lt(e,{},a=>{const s=a.path[1];return n.add(s),s},1),n}function Ka(e){const{artifact:{slots:n,substats:{stats:a,type:s,rarity:o}}}=e,r=R(a,(d,h)=>Math.ceil(a[h]/_t(h,o,s))),i=fa(n),c=pa(n);return{minSubLines:c,minOtherRolls:ha(Object.entries(r),i,c)}}function ha(e,n,a=4*5){const s=e.reduce((o,[r,i])=>{const c=5-(n[r]??0);return o+Math.min(i,c)},0);return a-s}function pa(e){return Object.values(e).reduce((n,{rarity:a,level:s})=>{const{high:o,low:r}=wt[a];return n+(s>=4?o:r)},0)}function fa(e){const n={};return Object.values(e).forEach(({statKey:a})=>{n[a]=(n[a]??0)+1},0),n}function ma(e){const{artifact:{slots:n,substats:{stats:a},sets:s}}=e,o=R(a,(r,i)=>Ct(r,i));return Object.values(n).forEach(({statKey:r,rarity:i,level:c})=>o[r]=(o[r]??0)+ke(r,i,c)),{art:R(o,(r,i)=>i.endsWith("_")?$(r):q(r)),artSet:R(s,r=>q(r))}}function Va(e){const{weapon:{key:n,level:a,ascension:s,refinement:o}}=e;return{id:"",location:"",key:n,level:a,ascension:s,refinement:o,lock:!1}}var le={},ga=te;Object.defineProperty(le,"__esModule",{value:!0});var rt=le.default=void 0,ya=ga(ee()),va=ne,xa=(0,ya.default)((0,va.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");rt=le.default=xa;function ba({characterKey:e,onClick:n,onMouseDown:a,onMouseEnter:s,hoverChild:o,hideFav:r}){const i=Ge(e),{favorite:c}=tn(e),{gender:d}=N(),{silly:h}=C.useContext(De),p=A(e,d),u=C.useCallback(()=>n==null?void 0:n(e),[e,n]),m=C.useCallback(G=>t(z,{onClick:u,onMouseDown:a,onMouseEnter:s,children:G}),[u,a,s]),[S,w,H]=It();return t(Be,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!o&&S,onClose:H,onOpen:w,title:o,children:t(O,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:l(Ke,{condition:!!n||!!a||!!s,wrapper:m,children:[t(y,{display:"flex",className:`grad-${p.rarity}star`,children:t(y,{component:"img",src:st(e,d,h),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),i&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:l(j,{color:"primary",children:[i.level,"/",we[i.ascension]]})})}),!r&&t(y,{sx:{position:"absolute",top:0,right:0},children:c?t(jt,{fontSize:"small"}):t(qe,{fontSize:"small"})}),i&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(j,{color:"secondary",children:["C",i.constellation]})})})]})})})}function Sa({index:e}){return t(O,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(y,{component:"img",src:re.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}function qa({teamId:e,onClick:n,hoverCard:a=!1,bgt:s}){const o=nn(e),{name:r,description:i,loadoutData:c}=o,d=B(),h=c.map(p=>{if(!p)return;const u=d.teamChars.get(p.teamCharId);if(u)return A(u.key).elementKey});return t(Re,{bgt:s,sx:{height:"100%"},children:l(y,{sx:p=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${h.map(m=>{if(!m)return"rgba(0,0,0,0)";const S=p.palette[m].main,w=en(S);return w?`rgba(${w.r},${w.g},${w.b},0.25)`:"rgba(0,0,0,0)"}).map((m,S)=>`${m} ${S*25+12.5}%`).join(", ")})`}),children:[t(z,{onClick:()=>n(),sx:{p:1},children:l(g,{sx:{display:"flex",gap:1},children:[t("span",{children:r})," ",i&&t(Be,{title:t(g,{children:i}),children:t(Mt,{})})]})}),t(y,{sx:{p:1,marginTop:"auto"},children:t(k,{container:!0,columns:4,spacing:1,children:c.map((p,u)=>{var w;const m=p==null?void 0:p.teamCharId,S=m&&((w=d.teamChars.get(m))==null?void 0:w.key);return t(k,{item:!0,xs:1,height:"100%",children:S?t(z,{onClick:()=>n(S),children:t(ba,{characterKey:S,hoverChild:a&&t(Ca,{characterKey:S,teamCharId:m,teamId:e}),hideFav:!0})}):t(z,{onClick:()=>n(),children:t(Sa,{index:u})})},u)})})})]})})}function Ca({characterKey:e,teamId:n,teamCharId:a}){var G;const s=B(),o=Ge(e),{gender:r}=N(),i=A(e,r),{name:c}=an(a),d=s.teams.getLoadoutDatum(n,a),h=s.teams.getActiveBuildName(d),p=(()=>s.teams.getLoadoutWeapon(d))(),u=(()=>{const{buildType:it,buildTcId:de}=d;return it==="tc"&&de?ma(s.buildTcs.get(de)):Object.values(s.teams.getLoadoutArtifacts(d)).filter(ct=>ct)})(),m=Fn(e,void 0,u,p),S=(G=m==null?void 0:m[e])==null?void 0:G.target,w=C.useMemo(()=>o&&i&&{character:o,characterSheet:i},[o,i]),H=C.useMemo(()=>S&&m&&{data:S,teamData:m},[S,m]);return!w||!H?null:t(dn.Provider,{value:w,children:t(L.Provider,{value:H,children:t(y,{sx:{width:300,m:-1},children:t(C.Suspense,{fallback:t(ae,{variant:"rectangular",width:"100%",height:300}),children:l(Re,{children:[t(oa,{characterKey:e,children:t(ra,{characterKey:e})}),l(y,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(rt,{}),t("span",{children:c})]}),l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(ot,{}),t("span",{children:h})]}),(d==null?void 0:d.buildType)==="tc"&&(d!=null&&d.buildTcId)?t(sa,{weapon:p}):t(na,{})]})]})})})})})}export{Zn as A,dn as C,Wa as H,qa as T,ta as W,ot as a,ba as b,oa as c,rt as d,ra as e,na as f,ma as g,Aa as h,ua as i,Ka as j,Ga as k,Va as l,en as m,Oa as n,Ha as o,an as p,Ge as q,Pa as r,Fn as s,tn as t,nn as u,qe as v,Xn as w,ea as x,qn as y,st as z};