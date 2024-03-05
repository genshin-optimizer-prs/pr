import{b as R,p as e,cO as st,cP as rt,cQ as it,cR as ct,cS as lt,cT as dt,cU as ut,cV as ht,cW as pt,cX as ft,bz as mt,bx as gt,bB as ue,cs as ne,cY as vt,cu as ae,cZ as A,cr as oe,cq as W,ct as J,c_ as se,u as we,b4 as ye,b3 as xt,n as r,bl as D,T as p,r as Q,i as Y,j as T,bO as Ie,c as yt,e as d,f as re,c$ as Ct,a3 as St,X as Dt,d as z,cp as bt,d0 as _t,bI as wt,ch as It,a0 as Bt,K as u,U as Z,t as H,J as O,k as $t,am as K,a9 as Be,a$ as he,b0 as $e,q as F,bX as Re,aC as ke,aB as ie,s as Rt,C as kt,bD as Mt,be as Et,B as Nt,aA as zt,b2 as jt,D as Ce,W as At}from"./index-f1a0c3c5.js";import{B as X,a as Wt}from"./BootstrapTooltip-fcbe91c4.js";import{u as pe,d as Ft,b as Ht,L as Ot,p as Gt,F as Tt,C as ce}from"./StarDisplay-8a6cb423.js";import{i as fe,I as Vt}from"./ColoredText-1f63bb57.js";import{E as Me,s as Ee,J as C,K as w,L as I,M as f,C as B,p as h,N as V,O as q,P as qt,Q as Pt,T as Ne,R as N,V as le,q as Lt,g as ee,r as Se,D as Ut,W as Jt,w as ze,G as Xt,S as je,a as Qt,v as Yt,u as De,x as Zt,n as Kt,I as Ae}from"./index-afa4da0b.js";import{S as E}from"./SqBadge-9ae60b6b.js";import{D as P,a as en}from"./FieldDisplay-77f0fc28.js";import{b as tn,g as nn}from"./index-bc16e556.js";import{g as We,W as Fe}from"./index-57b62488.js";import{A as He}from"./Artifact-0479f6b5.js";import{S as an}from"./SlotIcon-7f8f1658.js";import{u as on}from"./useWeapon-7ac448eb.js";import{C as G}from"./CardActionArea-8497496a.js";function Oe(t){const n=R();return pe(n.charMeta,t)}function Ge(t){const n=R();return pe(n.chars,t)}function sn(t){const n=R();return pe(n.teams,t)}function rn({statKey:t,iconProps:n={}}){switch(t){case"hp":case"hp_":case"base_hp":return e(gt,{...n});case"atk":case"atk_":case"base_atk":return e(mt,{...n});case"def":case"def_":case"base_def":return e(ft,{...n});case"eleMas":return e(pt,{...n});case"critRate_":return e(ht,{...n});case"critDMG_":return e(ut,{...n});case"enerRech_":return e(dt,{...n});case"incHeal_":return e(lt,{...n});case"heal_":return e(ct,{...n});case"cdRed_":return e(it,{...n});case"shield_":return e(rt,{...n});case"stamina":return e(st,{...n})}const a=t.split("_")[0];return ue.includes(a)?e(cn,{ele:a,iconProps:n}):null}function cn({ele:t,iconProps:n={}}){switch(t){case"anemo":return e(se,{...n});case"cryo":return e(J,{...n});case"dendro":return e(W,{...n});case"electro":return e(oe,{...n});case"geo":return e(A,{...n});case"hydro":return e(ae,{...n});case"physical":return e(vt,{...n});case"pyro":return e(ne,{...n})}}function ln({statKey:t,value:n,color:a,prefix:o="",typographyProps:s={}}){const{t:c}=we("statKey_gen"),i=ye(t),l=xt(n,ye(t));return r(p,{color:a?`${a}.main`:void 0,...s,children:[e(rn,{statKey:t,iconProps:D})," ",c(t)," ",e("strong",{children:`${o}${l}${i}`})]},t)}function dn({condition:t,wrapper:n,falseWrapper:a,children:o}){return t?n(o):a?a(o):o}var me={},un=Y;Object.defineProperty(me,"__esModule",{value:!0});var Te=me.default=void 0,hn=un(Q()),pn=T,fn=(0,hn.default)((0,pn.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");Te=me.default=fn;const Ve=({stars:t=1,colored:n=!1,inline:a=!1})=>e(Ie,{color:n?"warning":void 0,children:[...Array(t).keys()].map((o,s)=>e(Ft,{fontSize:a?"inherit":void 0,sx:a?{verticalAlign:"text-top"}:void 0},s))}),mn=yt(T.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");var ge={},gn=Y;Object.defineProperty(ge,"__esModule",{value:!0});var vn=ge.default=void 0,xn=gn(Q()),yn=T,Cn=(0,xn.default)((0,yn.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");vn=ge.default=Cn;const Sn=d.createContext({});function Dn({iconProps:t}){const[n,a]=d.useState(0);return d.useEffect(()=>{const o=setInterval(()=>a(s=>s+1),1e3);return()=>clearInterval(o)},[]),e(Me,{ele:re[n%re.length],iconProps:t})}const x=t=>e(Ne,{ns:"elementalResonance_gen",key18:t}),de=t=>e(Ne,{ns:"elementalResonance",key18:t}),S=Ee(...re.map(t=>C[t])),qe=Ct(ue,t=>[`${t}_res_`,w(h.charKey,f(C.ele,4,B(.15)),I.info(`${t}_res_`))]),bn={name:x("ProtectiveCanopy.name"),desc:x("ProtectiveCanopy.desc"),icon:r("span",{children:[e(Dn,{iconProps:D})," x4"]}),canShow:t=>t.get(C.ele).value>=4,sections:[{teamBuff:!0,fields:Object.values(qe).map(([t,n])=>({node:n}))}]},[_n,wn]=w(h.charKey,f(S,4,f(C.pyro,2,B(.25))),I.info("atk_")),In={name:x("FerventFlames.name"),desc:x("FerventFlames.desc"),icon:r("span",{children:[e(ne,{...D})," ",e(ne,{...D})]}),canShow:t=>t.get(C.pyro).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,fields:[{text:N("effectDuration.cryo"),value:-40,unit:"%"},{node:_n}]}]},[Bn,$n]=w(h.charKey,f(S,4,f(C.hydro,2,B(.25))),I.info("hp_")),Rn={name:x("SoothingWater.name"),desc:x("SoothingWater.desc"),icon:r("span",{children:[e(ae,{...D})," ",e(ae,{...D})]}),canShow:t=>t.get(C.hydro).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,fields:[{text:N("effectDuration.pyro"),value:-40,unit:"%"},{node:Bn}]}]},Pe=["resonance","ShatteringIce"],Le=V(Pe),[kn,Mn]=w(h.charKey,f(S,4,f(C.cryo,2,q(Le,"on",B(.15)))),I.info("critRate_")),En={name:x("ShatteringIce.name"),desc:x("ShatteringIce.desc"),icon:r("span",{children:[e(J,{...D})," ",e(J,{...D})]}),canShow:t=>t.get(C.cryo).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,fields:[{text:N("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:Pe,value:Le,name:N("enemyAffected.frozenOrCryo"),header:{title:x("ShatteringIce.name"),icon:e(J,{})},states:{on:{fields:[{node:kn}]}}}]},Nn={name:x("HighVoltage.name"),desc:x("HighVoltage.desc"),icon:r("span",{children:[e(oe,{...D})," ",e(oe,{...D})]}),canShow:t=>t.get(C.electro).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,fields:[{text:N("effectDuration.hydro"),value:-40,unit:"%"}]}]},[zn,jn]=w(h.charKey,f(S,4,f(C.anemo,2,B(-.15))),I.info("staminaDec_")),[An,Wn]=w(h.charKey,f(S,4,f(C.anemo,2,B(.1))),I.info("moveSPD_")),[Fn,Hn]=w(h.charKey,f(S,4,f(C.anemo,2,B(-.05))),I.info("cdRed_")),On={name:x("ImpetuousWinds.name"),desc:x("ImpetuousWinds.desc"),icon:r("span",{children:[e(se,{...D})," ",e(se,{...D})]}),canShow:t=>t.get(C.anemo).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,fields:[{node:zn},{node:An},{node:Fn}]}]},Ue=["resonance","EnduringRock"],Je=V(Ue),Xe=["resonance","EnduringRockHit"],Qe=V(Xe),[Gn,Tn]=w(h.charKey,f(S,4,f(C.geo,2,B(.15))),I.info("shield_")),[Vn,qn]=w(h.charKey,f(S,4,f(C.geo,2,q(Je,"on",B(.15)))),I.info("all_dmg_")),[Pn,Ln]=w(h.charKey,f(S,4,f(C.geo,2,q(Qe,"on",B(-.2)))),I.info("geo_enemyRes_")),Un={name:x("EnduringRock.name"),desc:x("EnduringRock.desc"),icon:r("span",{children:[e(A,{...D})," ",e(A,{...D})]}),canShow:t=>t.get(C.geo).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,text:x("EnduringRock.desc"),fields:[{node:Gn}]},{teamBuff:!0,path:Ue,value:Je,header:{title:x("EnduringRock.name"),icon:e(A,{})},name:N("protectedByShield"),states:{on:{fields:[{node:Vn}]}}},{teamBuff:!0,path:Xe,value:Qe,header:{title:x("EnduringRock.name"),icon:e(A,{})},name:de("EnduringRock.hitCond"),states:{on:{fields:[{node:Pn},{text:le("duration"),value:15,unit:"s"}]}}}]},Ye=["resonance","SprawlingCanopy2ele"],Ze=V(Ye),Ke=["resonance","SprawlingCanopy3ele"],et=V(Ke),[Jn,Xn]=w(h.charKey,f(S,4,f(C.dendro,2,50)),I.info("eleMas")),[Qn,Yn]=w(h.charKey,f(S,4,f(C.dendro,2,q(Ze,"on",30))),I.info("eleMas")),[Zn,Kn]=w(h.charKey,f(S,4,f(C.dendro,2,q(et,"on",20))),I.info("eleMas")),ea={name:x("SprawlingGreenery.name"),desc:x("SprawlingGreenery.desc"),icon:r("span",{children:[e(W,{...D})," ",e(W,{...D})]}),canShow:t=>t.get(C.dendro).value>=2&&t.get(S).value>=4,sections:[{teamBuff:!0,text:x("SprawlingGreenery.desc"),fields:[{node:Jn}]},{teamBuff:!0,path:Ye,value:Ze,header:{title:x("SprawlingGreenery.name"),icon:e(W,{})},name:de("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:Qn},{text:le("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:Ke,value:et,header:{title:x("SprawlingGreenery.name"),icon:e(W,{})},name:de("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:Zn},{text:le("duration"),value:6,unit:"s"}]}}}]},qa=[bn,In,Rn,En,Nn,On,Un,ea],ta=qt({teamBuff:{premod:{...St(qe,([t,n])=>n),atk_:wn,hp_:$n,staminaDec_:jn,moveSPD_:Wn,cdRed_:Hn,shield_:Tn,all_dmg_:qn,geo_enemyRes_:Ln,eleMas:Pt(Ee(Xn,Yn,Kn),{pivot:!0})},total:{critRate_:Mn}}});function na(t,n=0,a,o){const s=R(),[c,i]=Dt(),l=d.useDeferredValue(c),{gender:m}=z(),y=d.useMemo(()=>l&&oa(s,t,n,m,a,o),[l,m,t,s,n,a,o]);return d.useEffect(()=>t?s.chars.follow(t,i):void 0,[t,i,s]),y}class aa{constructor(n){this.data={},n.chars.followAny(a=>{this.removeData(a)})}getData(n){return this.data[n]}cacheData(n,a){this.data[n]=a}removeData(n){delete this.data[n]}}const te=new Map,be=t=>{if(te.has(t))return te.get(t);const n=new aa(t);return te.set(t,n),n};function oa(t,n,a=0,o,s,c){if(!n)return;if(!a&&!s&&!c){const g=be(t).getData(n);if(g)return g}const{teamData:i,teamBundle:l}=sa(t,n,a,s,c)??{};if(!i||!l)return;const m=Lt(i,o,n),y=bt(m,(g,b)=>{const{data:v,..._}=l[b];return{...g,..._}});return!a&&!s&&!c&&be(t).cacheData(n,y),y}function sa(t,n,a=0,o,s){if(!n)return;const c=t.chars.get(n);if(!c)return;const i=ra(t,!0,a,c,s||(t.weapons.get(c.equippedWeapon)??_t()),o??Object.values(c.equippedArtifacts).map(y=>t.arts.get(y)).filter(y=>y));if(!i)return;const l={[n]:i};return{teamData:{[n]:i.data},teamBundle:l}}function ra(t,n=!1,a,o,s,c){const i=ee(o.key,t.gender);if(!i)return;const l=We(s.key);if(!l)return;const m=Fe.getAllDataOfType(i.weaponTypeKey),y=n?(()=>{const{display:_,...$}=l.data;return Se([$,m])})():l.data,g=Se([i.data,y,tn]),v=[...Array.isArray(c)?c.map(_=>Ut(_,a)):[c],Jt(o),ze(s),g,Xt,ta];return{character:o,weapon:s,characterSheet:i,weaponSheet:l,data:v}}function ia(t){const n=R();return d.useCallback(a=>{if(!t)return;const o=n.chars.get(t);o&&n.chars.set(t,{...o,...a})},[t,n])}function ca({art:t,children:n}){const a=e(u,{children:e(Z,{variant:"rectangular",width:100,height:100})}),o=e(d.Suspense,{fallback:a,children:e(la,{art:t})});return e(X,{placement:"top",title:o,disableInteractive:!0,children:n})}function la({art:t}){const{t:n}=we("statKey_gen"),a=nn(t.setKey),{slotKey:o,level:s,rarity:c,mainStatKey:i,substats:l}=t,m=a.getSlotName(o),y=wt.getVariant(i);return r(u,{p:1,children:[r(p,{variant:"h6",children:[e(an,{slotKey:o,iconProps:D})," ",m]}),r(p,{variant:"subtitle1",color:`${y}.main`,children:[e(je,{statKey:i,iconProps:D})," ",n(i)," ",It(i,c,s)]}),r(p,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e(Ht,{stars:c}),r(E,{color:He.levelVariant(s),children:["+",s]})," "]}),e(u,{py:1,children:l.map(({value:g,key:b,rolls:v})=>!!(g&&b)&&e(ln,{statKey:b,value:g,color:`roll${Bt(v.length,1,6)}`,prefix:"+"},b))}),e(p,{color:"success.main",children:a.name}),e(Ot,{color:"secondary.main",location:t.location})]})}function da({artifactObj:t,slotKey:n}){if(!t)return e(H,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e(u,{sx:{width:"100%",pb:"100%",position:"relative"},children:e(u,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:fe.slot[n]})})});const{mainStatKey:a,rarity:o,level:s}=t,i=ue.find(l=>t.mainStatKey.includes(l))??"secondary";return e(ca,{art:t,children:r(H,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[e(u,{component:"img",className:`grad-${o}star`,src:Qt(t.setKey,t.slotKey),maxWidth:"100%",maxHeight:"100%"}),e(p,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:e("strong",{children:e(E,{sx:{p:.5},color:He.levelVariant(s),children:r("strong",{children:["+",s]})})})}),e(p,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e(E,{color:i,sx:{p:.5},children:e(je,{statKey:a,iconProps:{fontSize:"inherit"}})})})]})})}function ua({sheet:t,addlText:n,children:a}){const o=r(d.Suspense,{fallback:e(Z,{variant:"text",width:100}),children:[r(p,{children:[e(Vt,{src:fe.weaponTypes[t.weaponType],size:1.5})," ",t.name]}),n]});return e(X,{placement:"top",title:o,disableInteractive:!0,children:a})}function ha({weaponId:t}){const n=on(t),a=(n==null?void 0:n.key)&&We(n.key),o=d.useMemo(()=>a&&n&&Yt([a.data,ze(n)]),[a,n]);if(!n||!a||!o)return null;const s=r(u,{children:[e(_e,{node:o.get(De.weapon.main)}),e(_e,{node:o.get(De.weapon.sub)})]});return r(H,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[e(u,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${a.rarity}star`,children:e(ua,{sheet:a,addlText:s,children:e(u,{component:"img",src:Zt(n.key,n.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),e(p,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:e("strong",{children:e(E,{color:"primary",children:Fe.getLevelString(n)})})}),a.hasRefinement&&e(p,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:r(E,{color:"secondary",children:["R",n.refinement]})})})]})}function _e({node:t}){return r(p,{children:[t.info.icon," ",Kt(t)]})}function pa({hideWeapon:t=!1}){var a;const{data:n}=d.useContext(P);return e(u,{children:r(O,{container:!0,columns:t?5:6,spacing:.5,children:[!t&&e(O,{item:!0,xs:1,height:"100%",children:e(ha,{weaponId:((a=n.get(h.weapon.id).value)==null?void 0:a.toString())??""})}),e(fa,{})]})})}function fa(){const t=R(),{data:n}=d.useContext(P),a=$t.map(o=>{var s;return[o,t.arts.get(((s=n.get(h.art[o].id).value)==null?void 0:s.toString())??"")]});return e(K,{children:a.map(([o,s])=>e(O,{item:!0,xs:1,children:e(da,{artifactObj:s,slotKey:o})},o))})}function tt(t,n,a){const o=Gt(t,n),s=Ae(t,"icon",n);return a&&o?o:s||""}function nt({children:t,characterKey:n,onClick:a}){const{gender:o}=z(),{silly:s}=d.useContext(Be),c=he(n),i=d.useCallback(m=>e(G,{onClick:a,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:m}),[a]),l=Ae(n,"banner",o);return e(dn,{condition:!!a,wrapper:i,children:r(u,{display:"flex",position:"relative",className:l?void 0:`grad-${c.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.7,backgroundImage:`url(${l})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[e(u,{flexShrink:1,component:"img",src:tt(n,o,s),sx:{maxWidth:"40%"},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1}),e(u,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-between",children:t})]})})}function ma({characterKey:t}){const{gender:n}=z(),{data:a}=d.useContext(P),o=a.get(h.charEle).value,s=a.get(h.lvl).value,c=a.get(h.constellation).value,i=a.get(h.asc).value,l=a.get(h.total.autoBoost).value,m=a.get(h.total.skillBoost).value,y=a.get(h.total.burstBoost).value,g=a.get(h.total.auto).value,b=a.get(h.total.skill).value,v=a.get(h.total.burst).value,_=he(t);return r(K,{children:[e(F,{label:e(p,{variant:"subtitle1",children:e($e,{characterKey:t,gender:n})}),size:"small",color:o,sx:{opacity:.85}}),r(u,{display:"flex",gap:1,sx:{textShadow:"0 0 5px gray"},alignItems:"center",children:[r(u,{children:[r(p,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",s]}),r(p,{component:"span",variant:"h6",color:"text.secondary",children:["/",Re[i]]})]}),e(p,{component:"span",whiteSpace:"nowrap",sx:{opacity:.85},children:e(ke,{color:`roll${c<3?3:c}`,children:e(Ie,{color:"white",children:r("strong",{children:["C",c]})})})})]}),r(u,{display:"flex",gap:1,sx:{opacity:.85},children:[e(F,{size:"small",color:l?"info":"secondary",label:e("strong",{children:g})}),e(F,{size:"small",color:m?"info":"secondary",label:e("strong",{children:b})}),e(F,{size:"small",color:y?"info":"secondary",label:e("strong",{children:v})})]}),e(p,{variant:"h6",lineHeight:1,children:e(Ve,{stars:_.rarity,colored:!0,inline:!0})})]})}function ga({characterKey:t}){const{gender:n}=z(),a=he(t),o=ee(t,n);return r(K,{children:[e(F,{label:e(p,{variant:"subtitle1",children:e($e,{characterKey:t,gender:n})}),size:"small",color:o.elementKey,sx:{opacity:.85}}),e(u,{mt:1,children:e(p,{variant:"h4",children:e(ke,{children:"NEW"})})}),e(p,{mt:1.5,children:e(Ve,{stars:a.rarity,colored:!0})})]})}function va(){const{data:t}=d.useContext(P);return r(u,{sx:{width:"100%"},children:[Object.values(t.getDisplay().basic).map(n=>e(en,{node:n},JSON.stringify(n.info))),t.get(h.special).info.name&&r(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(p,{flexGrow:1,children:e("strong",{children:"Specialized:"})}),t.get(h.special).info.icon,e(p,{children:t.get(h.special).info.name})]})]})}function xa({characterKey:t,onClick:n,onClickHeader:a,footer:o,hideStats:s}){var L;const c=R(),i=na(t),l=Ge(t),{gender:m}=z(),y=ee(t,m),g=ia(t),b=(L=i==null?void 0:i[t])==null?void 0:L.target,v=d.useCallback(()=>t&&(n==null?void 0:n(t)),[t,n]),_=d.useCallback(U=>e(G,{onClick:v,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:U}),[v]),$=d.useMemo(()=>l&&y&&{character:l,characterSheet:y,characterDispatch:g},[l,y,g]),k=d.useMemo(()=>b&&i&&{data:b,teamData:i},[b,i]),{favorite:M}=Oe(t);return e(d.Suspense,{fallback:e(Z,{variant:"rectangular",width:"100%",height:s?300:600}),children:r(Rt,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",position:"absolute",zIndex:2,opacity:.7},children:e(ie,{sx:{p:.5},onClick:U=>c.charMeta.set(t,{favorite:!M}),children:M?e(Tt,{}):e(mn,{})})}),e(ce,{condition:!!n,wrapper:_,children:l&&k&&$?e(ya,{characterContextObj:$,dataContextObj:k,characterKey:t,onClick:n,onClickHeader:()=>a==null?void 0:a(t),hideStats:s}):e(Ca,{characterKey:t})}),o]})})}function ya({characterContextObj:t,dataContextObj:n,characterKey:a,onClick:o,onClickHeader:s,hideStats:c}){return e(Sn.Provider,{value:t,children:r(P.Provider,{value:n,children:[e(nt,{characterKey:a,onClick:o?void 0:s,children:e(ma,{characterKey:a})}),r(u,{sx:i=>({p:1,width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,padding:c?`${i.spacing(1)}!important`:void 0}),children:[e(pa,{}),!c&&e(va,{})]})]})})}function Ca({characterKey:t}){return r(K,{children:[e(nt,{characterKey:t,children:e(ga,{characterKey:t})}),e(kt,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,height:"100%"}})]})}var ve={},Sa=Y;Object.defineProperty(ve,"__esModule",{value:!0});var at=ve.default=void 0,Da=Sa(Q()),ba=T,_a=(0,Da.default)((0,ba.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");at=ve.default=_a;var xe={},wa=Y;Object.defineProperty(xe,"__esModule",{value:!0});var ot=xe.default=void 0,Ia=wa(Q()),Ba=T,$a=(0,Ia.default)((0,Ba.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");ot=xe.default=$a;function Ra({characterKey:t,onClick:n,onMouseDown:a,onMouseEnter:o,simpleTooltip:s=!1,disableTooltip:c=!1}){const i=Ge(t),{favorite:l}=Oe(t),{gender:m}=z(),{silly:y}=d.useContext(Be),g=ee(t,m),b=d.useCallback(()=>n==null?void 0:n(t),[t,n]),v=d.useCallback(j=>e(G,{onClick:b,onMouseDown:a,onMouseEnter:o,children:j}),[b,a,o]),[_,$]=d.useState(!1),k=d.useCallback(()=>!c&&$(!0),[c]),M=d.useCallback(()=>$(!1),[]);d.useEffect(()=>{c&&$(!1)},[c]);const L=d.useCallback(j=>e(X,{placement:"top",open:_&&!c,onClose:M,onOpen:k,title:e(d.Suspense,{fallback:e(Z,{width:300,height:400}),children:r(p,{children:[g.elementKey&&e(Me,{ele:g.elementKey,iconProps:{fontSize:"inherit",sx:{verticalAlign:"-10%",color:`${g.elementKey}.main`}}})," ",g.name]})}),children:j}),[g.elementKey,g.name,c,M,k,_]),U=d.useCallback(j=>e(X,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:_&&!c,onClose:M,onOpen:k,title:e(u,{sx:{width:300,m:-1},children:e(xa,{hideStats:!0,characterKey:t})}),children:j}),[t,c,M,k,_]);return e(ce,{condition:s,wrapper:L,falseWrapper:U,children:e(H,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:r(ce,{condition:!!n||!!a||!!o,wrapper:v,children:[e(u,{display:"flex",className:`grad-${g.rarity}star`,children:e(u,{component:"img",src:tt(t,m,y),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),i&&e(p,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:e("strong",{children:r(E,{color:"primary",children:[i.level,"/",Re[i.ascension]]})})}),e(u,{sx:{position:"absolute",top:0,right:0},children:l?e(Te,{fontSize:"small"}):e(ot,{fontSize:"small"})}),i&&e(p,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:r(E,{color:"secondary",children:["C",i.constellation]})})})]})})})}function ka({index:t}){return e(H,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:e(u,{component:"img",src:fe.team[`team${t+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}function Pa({teamId:t,onClick:n,bgt:a,disableButtons:o=!1}){const s=sn(t),{name:c,description:i,teamCharIds:l}=s,m=R(),y=()=>{m.teams.remove(t)},g=()=>{const v=m.teams.export(t),_=JSON.stringify(v);navigator.clipboard.writeText(_).then(()=>alert("Copied team data to clipboard.")).catch(console.error)},b=()=>m.teams.duplicate(t);return r(zt,{bgt:a,sx:{height:"100%",display:"flex",flexDirection:"column"},children:[r(u,{sx:{height:"100%",p:1,display:"flex",flexDirection:"column",gap:1},children:[r(p,{sx:{display:"flex",gap:1},children:[e("span",{children:c})," ",e(jt,{title:e(p,{children:i}),children:e(Wt,{})})]}),e(u,{sx:{marginTop:"auto"},children:e(O,{container:!0,columns:4,spacing:1,children:Mt(0,3).map(v=>e(O,{item:!0,xs:1,height:"100%",children:l[v]?e(G,{onClick:()=>n(m.teamChars.get(l[v]).key),children:e(Ra,{characterKey:m.teamChars.get(l[v]).key})}):e(G,{onClick:()=>n(),children:e(ka,{index:v})})},v))})})]}),!o&&r(u,{sx:{display:"flex",gap:1,marginTop:"auto",p:1},children:[e(Nt,{color:"info",variant:"text",sx:{flexGrow:1},startIcon:e(Et,{}),disabled:l.every(v=>!v),onClick:g,children:"Export"}),e(Ce,{orientation:"vertical"}),e(ie,{color:"info",disabled:l.every(v=>!v),onClick:b,children:e(at,{})}),e(Ce,{orientation:"vertical"}),e(ie,{color:"error",size:"small",onClick:y,children:e(At,{})})]})]})}export{da as A,xa as C,cn as E,mn as F,rn as S,Pa as T,ha as W,at as a,Sn as b,Ra as c,vn as d,nt as e,ma as f,pa as g,va as h,Ge as i,sn as j,Oe as k,ca as l,ua as m,ta as n,na as o,tt as p,qa as r,ia as u};
