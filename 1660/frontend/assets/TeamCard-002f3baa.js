import{b as R,p as e,cL as tt,cM as nt,cN as at,cO as ot,cP as st,cQ as rt,cR as it,cS as ct,cT as lt,cU as dt,bD as ut,bB as ht,bF as ce,cu as ee,cV as pt,cw as te,cW as W,ct as ne,cs as F,cv as J,cX as ae,u as De,b8 as xe,b7 as ft,n as c,bp as b,T as m,r as le,i as de,j as X,aJ as be,c as mt,e as u,f as oe,cY as gt,a3 as xt,X as vt,d as A,cr as yt,cZ as St,bN as Ct,cj as Dt,a2 as bt,K as f,U as Z,t as H,J as O,k as _t,am as Y,a9 as _e,b3 as ue,b4 as we,q as G,bZ as Ie,aC as $e,aB as wt,s as It,C as $t,b6 as Bt,bI as Rt,aA as kt}from"./index-d7c5a608.js";import{B as Q,a as Mt}from"./BootstrapTooltip-55b8e665.js";import{b as he,d as Et,g as Nt,i as jt,p as At,F as zt,c as se}from"./StarDisplay-26f0194e.js";import{i as pe,I as Wt}from"./ColoredText-2fa1c704.js";import{E as Be,s as Re,J as v,K as w,L as I,M as g,C as $,p,N as T,O as q,P as Ft,Q as Gt,T as ke,R as j,V as re,q as Ht,g as V,r as ve,D as Ot,W as Tt,w as Me,G as qt,S as Ee,a as Vt,v as Pt,u as ye,x as Lt,n as Ut,I as Ne}from"./index-5d955181.js";import{S as E}from"./SqBadge-476f936c.js";import{D as P,a as Jt}from"./FieldDisplay-39bc3efb.js";import{b as Qt,g as Xt}from"./index-92601b39.js";import{g as je,W as Ae}from"./index-2a6548c8.js";import{A as ze}from"./Artifact-732e185a.js";import{S as Zt}from"./SlotIcon-fc1fe9b4.js";import{u as Yt}from"./useWeapon-e177fc34.js";import{C as N}from"./CardActionArea-d4413770.js";function Kt(t){const n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(n,(o,s,i,r)=>s+s+i+i+r+r);const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function We(t){const n=R();return he(n.charMeta,t)}function Fe(t){const n=R();return he(n.chars,t)}function en(t){const n=R();return he(n.teams,t)}function tn({statKey:t,iconProps:n={}}){switch(t){case"hp":case"hp_":case"base_hp":return e(ht,{...n});case"atk":case"atk_":case"base_atk":return e(ut,{...n});case"def":case"def_":case"base_def":return e(dt,{...n});case"eleMas":return e(lt,{...n});case"critRate_":return e(ct,{...n});case"critDMG_":return e(it,{...n});case"enerRech_":return e(rt,{...n});case"incHeal_":return e(st,{...n});case"heal_":return e(ot,{...n});case"cdRed_":return e(at,{...n});case"shield_":return e(nt,{...n});case"stamina":return e(tt,{...n})}const a=t.split("_")[0];return ce.includes(a)?e(nn,{ele:a,iconProps:n}):null}function nn({ele:t,iconProps:n={}}){switch(t){case"anemo":return e(ae,{...n});case"cryo":return e(J,{...n});case"dendro":return e(F,{...n});case"electro":return e(ne,{...n});case"geo":return e(W,{...n});case"hydro":return e(te,{...n});case"physical":return e(pt,{...n});case"pyro":return e(ee,{...n})}}function an({statKey:t,value:n,color:a,prefix:o="",typographyProps:s={}}){const{t:i}=De("statKey_gen"),r=xe(t),l=ft(n,xe(t));return c(m,{color:a?`${a}.main`:void 0,...s,children:[e(tn,{statKey:t,iconProps:b})," ",i(t)," ",e("strong",{children:`${o}${l}${r}`})]},t)}function on({condition:t,wrapper:n,falseWrapper:a,children:o}){return t?n(o):a?a(o):o}var fe={},sn=de;Object.defineProperty(fe,"__esModule",{value:!0});var Ge=fe.default=void 0,rn=sn(le()),cn=X,ln=(0,rn.default)((0,cn.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");Ge=fe.default=ln;const He=({stars:t=1,colored:n=!1,inline:a=!1})=>e(be,{color:n?"warning":void 0,children:[...Array(t).keys()].map((o,s)=>e(Et,{fontSize:a?"inherit":void 0,sx:a?{verticalAlign:"text-top"}:void 0},s))}),dn=mt(X.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");var me={},un=de;Object.defineProperty(me,"__esModule",{value:!0});var hn=me.default=void 0,pn=un(le()),fn=X,mn=(0,pn.default)((0,fn.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");hn=me.default=mn;const gn=u.createContext({});function xn({iconProps:t}){const[n,a]=u.useState(0);return u.useEffect(()=>{const o=setInterval(()=>a(s=>s+1),1e3);return()=>clearInterval(o)},[]),e(Be,{ele:oe[n%oe.length],iconProps:t})}const x=t=>e(ke,{ns:"elementalResonance_gen",key18:t}),ie=t=>e(ke,{ns:"elementalResonance",key18:t}),C=Re(...oe.map(t=>v[t])),Oe=gt(ce,t=>[`${t}_res_`,w(p.charKey,g(v.ele,4,$(.15)),I.info(`${t}_res_`))]),vn={name:x("ProtectiveCanopy.name"),desc:x("ProtectiveCanopy.desc"),icon:c("span",{children:[e(xn,{iconProps:b})," x4"]}),canShow:t=>t.get(v.ele).value>=4,sections:[{teamBuff:!0,fields:Object.values(Oe).map(([t,n])=>({node:n}))}]},[yn,Sn]=w(p.charKey,g(C,4,g(v.pyro,2,$(.25))),I.info("atk_")),Cn={name:x("FerventFlames.name"),desc:x("FerventFlames.desc"),icon:c("span",{children:[e(ee,{...b})," ",e(ee,{...b})]}),canShow:t=>t.get(v.pyro).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:j("effectDuration.cryo"),value:-40,unit:"%"},{node:yn}]}]},[Dn,bn]=w(p.charKey,g(C,4,g(v.hydro,2,$(.25))),I.info("hp_")),_n={name:x("SoothingWater.name"),desc:x("SoothingWater.desc"),icon:c("span",{children:[e(te,{...b})," ",e(te,{...b})]}),canShow:t=>t.get(v.hydro).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:j("effectDuration.pyro"),value:-40,unit:"%"},{node:Dn}]}]},Te=["resonance","ShatteringIce"],qe=T(Te),[wn,In]=w(p.charKey,g(C,4,g(v.cryo,2,q(qe,"on",$(.15)))),I.info("critRate_")),$n={name:x("ShatteringIce.name"),desc:x("ShatteringIce.desc"),icon:c("span",{children:[e(J,{...b})," ",e(J,{...b})]}),canShow:t=>t.get(v.cryo).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:j("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:Te,value:qe,name:j("enemyAffected.frozenOrCryo"),header:{title:x("ShatteringIce.name"),icon:e(J,{})},states:{on:{fields:[{node:wn}]}}}]},Bn={name:x("HighVoltage.name"),desc:x("HighVoltage.desc"),icon:c("span",{children:[e(ne,{...b})," ",e(ne,{...b})]}),canShow:t=>t.get(v.electro).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:j("effectDuration.hydro"),value:-40,unit:"%"}]}]},[Rn,kn]=w(p.charKey,g(C,4,g(v.anemo,2,$(-.15))),I.info("staminaDec_")),[Mn,En]=w(p.charKey,g(C,4,g(v.anemo,2,$(.1))),I.info("moveSPD_")),[Nn,jn]=w(p.charKey,g(C,4,g(v.anemo,2,$(-.05))),I.info("cdRed_")),An={name:x("ImpetuousWinds.name"),desc:x("ImpetuousWinds.desc"),icon:c("span",{children:[e(ae,{...b})," ",e(ae,{...b})]}),canShow:t=>t.get(v.anemo).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,fields:[{node:Rn},{node:Mn},{node:Nn}]}]},Ve=["resonance","EnduringRock"],Pe=T(Ve),Le=["resonance","EnduringRockHit"],Ue=T(Le),[zn,Wn]=w(p.charKey,g(C,4,g(v.geo,2,$(.15))),I.info("shield_")),[Fn,Gn]=w(p.charKey,g(C,4,g(v.geo,2,q(Pe,"on",$(.15)))),I.info("all_dmg_")),[Hn,On]=w(p.charKey,g(C,4,g(v.geo,2,q(Ue,"on",$(-.2)))),I.info("geo_enemyRes_")),Tn={name:x("EnduringRock.name"),desc:x("EnduringRock.desc"),icon:c("span",{children:[e(W,{...b})," ",e(W,{...b})]}),canShow:t=>t.get(v.geo).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,text:x("EnduringRock.desc"),fields:[{node:zn}]},{teamBuff:!0,path:Ve,value:Pe,header:{title:x("EnduringRock.name"),icon:e(W,{})},name:j("protectedByShield"),states:{on:{fields:[{node:Fn}]}}},{teamBuff:!0,path:Le,value:Ue,header:{title:x("EnduringRock.name"),icon:e(W,{})},name:ie("EnduringRock.hitCond"),states:{on:{fields:[{node:Hn},{text:re("duration"),value:15,unit:"s"}]}}}]},Je=["resonance","SprawlingCanopy2ele"],Qe=T(Je),Xe=["resonance","SprawlingCanopy3ele"],Ze=T(Xe),[qn,Vn]=w(p.charKey,g(C,4,g(v.dendro,2,50)),I.info("eleMas")),[Pn,Ln]=w(p.charKey,g(C,4,g(v.dendro,2,q(Qe,"on",30))),I.info("eleMas")),[Un,Jn]=w(p.charKey,g(C,4,g(v.dendro,2,q(Ze,"on",20))),I.info("eleMas")),Qn={name:x("SprawlingGreenery.name"),desc:x("SprawlingGreenery.desc"),icon:c("span",{children:[e(F,{...b})," ",e(F,{...b})]}),canShow:t=>t.get(v.dendro).value>=2&&t.get(C).value>=4,sections:[{teamBuff:!0,text:x("SprawlingGreenery.desc"),fields:[{node:qn}]},{teamBuff:!0,path:Je,value:Qe,header:{title:x("SprawlingGreenery.name"),icon:e(F,{})},name:ie("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:Pn},{text:re("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:Xe,value:Ze,header:{title:x("SprawlingGreenery.name"),icon:e(F,{})},name:ie("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:Un},{text:re("duration"),value:6,unit:"s"}]}}}]},Aa=[vn,Cn,_n,$n,Bn,An,Tn,Qn],Xn=Ft({teamBuff:{premod:{...xt(Oe,([t,n])=>n),atk_:Sn,hp_:bn,staminaDec_:kn,moveSPD_:En,cdRed_:jn,shield_:Wn,all_dmg_:Gn,geo_enemyRes_:On,eleMas:Gt(Re(Vn,Ln,Jn),{pivot:!0})},total:{critRate_:In}}});function Zn(t,n=0,a,o){const s=R(),[i,r]=vt(),l=u.useDeferredValue(i),{gender:y}=A(),d=u.useMemo(()=>l&&Kn(s,t,n,y,a,o),[l,y,t,s,n,a,o]);return u.useEffect(()=>t?s.chars.follow(t,r):void 0,[t,r,s]),d}class Yn{constructor(n){this.data={},n.chars.followAny(a=>{this.removeData(a)})}getData(n){return this.data[n]}cacheData(n,a){this.data[n]=a}removeData(n){delete this.data[n]}}const K=new Map,Se=t=>{if(K.has(t))return K.get(t);const n=new Yn(t);return K.set(t,n),n};function Kn(t,n,a=0,o,s,i){if(!n)return;if(!a&&!s&&!i){const h=Se(t).getData(n);if(h)return h}const{teamData:r,teamBundle:l}=ea(t,n,a,s,i)??{};if(!r||!l)return;const y=Ht(r,o,n),d=yt(y,(h,S)=>{const{data:_,...D}=l[S];return{...h,...D}});return!a&&!s&&!i&&Se(t).cacheData(n,d),d}function ea(t,n,a=0,o,s){if(!n)return;const i=t.chars.get(n);if(!i)return;const r=ta(t,!0,a,i,s||(t.weapons.get(i.equippedWeapon)??St()),o??Object.values(i.equippedArtifacts).map(d=>t.arts.get(d)).filter(d=>d));if(!r)return;const l={[n]:r};return{teamData:{[n]:r.data},teamBundle:l}}function ta(t,n=!1,a,o,s,i){const r=V(o.key,t.gender);if(!r)return;const l=je(s.key);if(!l)return;const y=Ae.getAllDataOfType(r.weaponTypeKey),d=n?(()=>{const{display:D,...B}=l.data;return ve([B,y])})():l.data,h=ve([r.data,d,Qt]),_=[...Array.isArray(i)?i.map(D=>Ot(D,a)):[i],Tt(o),Me(s),h,qt,Xn];return{character:o,weapon:s,characterSheet:r,weaponSheet:l,data:_}}function na(t){const n=R();return u.useCallback(a=>{if(!t)return;const o=n.chars.get(t);o&&n.chars.set(t,{...o,...a})},[t,n])}function aa({art:t,children:n}){const a=e(f,{children:e(Z,{variant:"rectangular",width:100,height:100})}),o=e(u.Suspense,{fallback:a,children:e(oa,{art:t})});return e(Q,{placement:"top",title:o,disableInteractive:!0,children:n})}function oa({art:t}){const{t:n}=De("statKey_gen"),a=Xt(t.setKey),{slotKey:o,level:s,rarity:i,mainStatKey:r,substats:l}=t,y=a.getSlotName(o),d=Ct.getVariant(r);return c(f,{p:1,children:[c(m,{variant:"h6",children:[e(Zt,{slotKey:o,iconProps:b})," ",y]}),c(m,{variant:"subtitle1",color:`${d}.main`,children:[e(Ee,{statKey:r,iconProps:b})," ",n(r)," ",Dt(r,i,s)]}),c(m,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e(Nt,{stars:i}),c(E,{color:ze.levelVariant(s),children:["+",s]})," "]}),e(f,{py:1,children:l.map(({value:h,key:S,rolls:_})=>!!(h&&S)&&e(an,{statKey:S,value:h,color:`roll${bt(_.length,1,6)}`,prefix:"+"},S))}),e(m,{color:"success.main",children:a.name}),e(jt,{color:"secondary.main",location:t.location})]})}function sa({artifactObj:t,slotKey:n}){if(!t)return e(H,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:e(f,{sx:{width:"100%",pb:"100%",position:"relative"},children:e(f,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:pe.slot[n]})})});const{mainStatKey:a,rarity:o,level:s}=t,r=ce.find(l=>t.mainStatKey.includes(l))??"secondary";return e(aa,{art:t,children:c(H,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[e(f,{component:"img",className:`grad-${o}star`,src:Vt(t.setKey,t.slotKey),maxWidth:"100%",maxHeight:"100%"}),e(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:e("strong",{children:e(E,{sx:{p:.5},color:ze.levelVariant(s),children:c("strong",{children:["+",s]})})})}),e(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e(E,{color:r,sx:{p:.5},children:e(Ee,{statKey:a,iconProps:{fontSize:"inherit"}})})})]})})}function ra({sheet:t,addlText:n,children:a}){const o=c(u.Suspense,{fallback:e(Z,{variant:"text",width:100}),children:[c(m,{children:[e(Wt,{src:pe.weaponTypes[t.weaponType],size:1.5})," ",t.name]}),n]});return e(Q,{placement:"top",title:o,disableInteractive:!0,children:a})}function ia({weaponId:t}){const n=Yt(t),a=(n==null?void 0:n.key)&&je(n.key),o=u.useMemo(()=>a&&n&&Pt([a.data,Me(n)]),[a,n]);if(!n||!a||!o)return null;const s=c(f,{children:[e(Ce,{node:o.get(ye.weapon.main)}),e(Ce,{node:o.get(ye.weapon.sub)})]});return c(H,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[e(f,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${a.rarity}star`,children:e(ra,{sheet:a,addlText:s,children:e(f,{component:"img",src:Lt(n.key,n.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),e(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:e("strong",{children:e(E,{color:"primary",children:Ae.getLevelString(n)})})}),a.hasRefinement&&e(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:c(E,{color:"secondary",children:["R",n.refinement]})})})]})}function Ce({node:t}){return c(m,{children:[t.info.icon," ",Ut(t)]})}function ca({hideWeapon:t=!1}){var a;const{data:n}=u.useContext(P);return e(f,{children:c(O,{container:!0,columns:t?5:6,spacing:.5,children:[!t&&e(O,{item:!0,xs:1,height:"100%",children:e(ia,{weaponId:((a=n.get(p.weapon.id).value)==null?void 0:a.toString())??""})}),e(la,{})]})})}function la(){const t=R(),{data:n}=u.useContext(P),a=_t.map(o=>{var s;return[o,t.arts.get(((s=n.get(p.art[o].id).value)==null?void 0:s.toString())??"")]});return e(Y,{children:a.map(([o,s])=>e(O,{item:!0,xs:1,children:e(sa,{artifactObj:s,slotKey:o})},o))})}function Ye(t,n,a){const o=At(t,n),s=Ne(t,"icon",n);return a&&o?o:s||""}function Ke({children:t,characterKey:n,onClick:a}){const{gender:o}=A(),{silly:s}=u.useContext(_e),i=ue(n),r=u.useCallback(y=>e(N,{onClick:a,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:y}),[a]),l=Ne(n,"banner",o);return e(on,{condition:!!a,wrapper:r,children:c(f,{display:"flex",position:"relative",className:l?void 0:`grad-${i.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${l})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[e(f,{flexShrink:1,component:"img",src:Ye(n,o,s),sx:{maxWidth:"40%"},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1}),e(f,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-between",children:t})]})})}function da({characterKey:t}){const{gender:n}=A(),{data:a}=u.useContext(P),o=a.get(p.charEle).value,s=a.get(p.lvl).value,i=a.get(p.constellation).value,r=a.get(p.asc).value,l=a.get(p.total.autoBoost).value,y=a.get(p.total.skillBoost).value,d=a.get(p.total.burstBoost).value,h=a.get(p.total.auto).value,S=a.get(p.total.skill).value,_=a.get(p.total.burst).value,D=ue(t);return c(Y,{children:[e(G,{label:e(m,{variant:"subtitle1",children:e(we,{characterKey:t,gender:n})}),size:"small",color:o,sx:{opacity:.85}}),c(f,{display:"flex",gap:1,sx:{textShadow:"0 0 5px gray"},alignItems:"center",children:[c(f,{children:[c(m,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",s]}),c(m,{component:"span",variant:"h6",color:"text.secondary",children:["/",Ie[r]]})]}),e(m,{component:"span",whiteSpace:"nowrap",sx:{opacity:.85},children:e($e,{color:`roll${i<3?3:i}`,children:e(be,{color:"white",children:c("strong",{children:["C",i]})})})})]}),c(f,{display:"flex",gap:1,sx:{opacity:.85},children:[e(G,{size:"small",color:l?"info":"secondary",label:e("strong",{children:h})}),e(G,{size:"small",color:y?"info":"secondary",label:e("strong",{children:S})}),e(G,{size:"small",color:d?"info":"secondary",label:e("strong",{children:_})})]}),e(m,{variant:"h6",lineHeight:1,children:e(He,{stars:D.rarity,colored:!0,inline:!0})})]})}function ua({characterKey:t}){const{gender:n}=A(),a=ue(t),o=V(t,n);return c(Y,{children:[e(G,{label:e(m,{variant:"subtitle1",children:e(we,{characterKey:t,gender:n})}),size:"small",color:o.elementKey,sx:{opacity:.85}}),e(f,{mt:1,children:e(m,{variant:"h4",children:e($e,{children:"NEW"})})}),e(m,{mt:1.5,children:e(He,{stars:a.rarity,colored:!0})})]})}function ha(){const{data:t}=u.useContext(P);return c(f,{sx:{width:"100%"},children:[Object.values(t.getDisplay().basic).map(n=>e(Jt,{node:n},JSON.stringify(n.info))),t.get(p.special).info.name&&c(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(m,{flexGrow:1,children:e("strong",{children:"Specialized:"})}),t.get(p.special).info.icon,e(m,{children:t.get(p.special).info.name})]})]})}function pa({characterKey:t,onClick:n,onClickHeader:a,footer:o,hideStats:s}){var L;const i=R(),r=Zn(t),l=Fe(t),{gender:y}=A(),d=V(t,y),h=na(t),S=(L=r==null?void 0:r[t])==null?void 0:L.target,_=u.useCallback(()=>t&&(n==null?void 0:n(t)),[t,n]),D=u.useCallback(U=>e(N,{onClick:_,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:U}),[_]),B=u.useMemo(()=>l&&d&&{character:l,characterSheet:d,characterDispatch:h},[l,d,h]),k=u.useMemo(()=>S&&r&&{data:S,teamData:r},[S,r]),{favorite:M}=We(t);return e(u.Suspense,{fallback:e(Z,{variant:"rectangular",width:"100%",height:s?300:600}),children:c(It,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(f,{sx:{display:"flex",position:"absolute",zIndex:2,opacity:.7},children:e(wt,{sx:{p:.5},onClick:U=>i.charMeta.set(t,{favorite:!M}),children:M?e(zt,{}):e(dn,{})})}),e(se,{condition:!!n,wrapper:D,children:l&&k&&B?e(fa,{characterContextObj:B,dataContextObj:k,characterKey:t,onClick:n,onClickHeader:()=>a==null?void 0:a(t),hideStats:s}):e(ma,{characterKey:t})}),o]})})}function fa({characterContextObj:t,dataContextObj:n,characterKey:a,onClick:o,onClickHeader:s,hideStats:i}){return e(gn.Provider,{value:t,children:c(P.Provider,{value:n,children:[e(Ke,{characterKey:a,onClick:o?void 0:s,children:e(da,{characterKey:a})}),c(f,{sx:r=>({p:1,width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,padding:i?`${r.spacing(1)}!important`:void 0}),children:[e(ca,{}),!i&&e(ha,{})]})]})})}function ma({characterKey:t}){return c(Y,{children:[e(Ke,{characterKey:t,children:e(ua,{characterKey:t})}),e($t,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,height:"100%"}})]})}var ge={},ga=de;Object.defineProperty(ge,"__esModule",{value:!0});var et=ge.default=void 0,xa=ga(le()),va=X,ya=(0,xa.default)((0,va.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");et=ge.default=ya;function Sa({characterKey:t,onClick:n,onMouseDown:a,onMouseEnter:o,simpleTooltip:s=!1,disableTooltip:i=!1}){const r=Fe(t),{favorite:l}=We(t),{gender:y}=A(),{silly:d}=u.useContext(_e),h=V(t,y),S=u.useCallback(()=>n==null?void 0:n(t),[t,n]),_=u.useCallback(z=>e(N,{onClick:S,onMouseDown:a,onMouseEnter:o,children:z}),[S,a,o]),[D,B]=u.useState(!1),k=u.useCallback(()=>!i&&B(!0),[i]),M=u.useCallback(()=>B(!1),[]);u.useEffect(()=>{i&&B(!1)},[i]);const L=u.useCallback(z=>e(Q,{placement:"top",open:D&&!i,onClose:M,onOpen:k,title:e(u.Suspense,{fallback:e(Z,{width:300,height:400}),children:c(m,{children:[h.elementKey&&e(Be,{ele:h.elementKey,iconProps:{fontSize:"inherit",sx:{verticalAlign:"-10%",color:`${h.elementKey}.main`}}})," ",h.name]})}),children:z}),[h.elementKey,h.name,i,M,k,D]),U=u.useCallback(z=>e(Q,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:D&&!i,onClose:M,onOpen:k,title:e(f,{sx:{width:300,m:-1},children:e(pa,{hideStats:!0,characterKey:t})}),children:z}),[t,i,M,k,D]);return e(se,{condition:s,wrapper:L,falseWrapper:U,children:e(H,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:c(se,{condition:!!n||!!a||!!o,wrapper:_,children:[e(f,{display:"flex",className:`grad-${h.rarity}star`,children:e(f,{component:"img",src:Ye(t,y,d),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&e(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:e("strong",{children:c(E,{color:"primary",children:[r.level,"/",Ie[r.ascension]]})})}),e(f,{sx:{position:"absolute",top:0,right:0},children:l?e(Ge,{fontSize:"small"}):e(et,{fontSize:"small"})}),r&&e(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:c(E,{color:"secondary",children:["C",r.constellation]})})})]})})})}function Ca({index:t}){return e(H,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:e(f,{component:"img",src:pe.team[`team${t+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}function za({teamId:t,onClick:n,bgt:a}){const o=en(t),{name:s,description:i,teamCharIds:r}=o,l=R(),y=r.map(d=>{if(!d)return;const h=l.teamChars.get(d);if(h)return V(h.key).elementKey});return e(kt,{bgt:a,sx:{height:"100%",display:"flex",flexDirection:"column"},children:c(f,{sx:d=>({background:`linear-gradient(to right, ${y.map(S=>{if(!S)return"rgba(0,0,0,0)";const _=d.palette[S].main,D=Kt(_);return D?`rgba(${D.r},${D.g},${D.b},0.25)`:"rgba(0,0,0,0)"}).map((S,_)=>`${S} ${_*25+12.5}%`).join(", ")})`}),children:[e(N,{onClick:()=>n(),sx:{p:1},children:c(m,{sx:{display:"flex",gap:1},children:[e("span",{children:s})," ",e(Bt,{title:e(m,{children:i}),children:e(Mt,{})})]})}),e(f,{sx:{p:1},children:e(O,{container:!0,columns:4,spacing:1,children:Rt(0,3).map(d=>e(O,{item:!0,xs:1,height:"100%",children:r[d]?e(N,{onClick:()=>{var h;return n((h=l.teamChars.get(r[d]))==null?void 0:h.key)},children:e(Sa,{characterKey:l.teamChars.get(r[d]).key})}):e(N,{onClick:()=>n(),children:e(Ca,{index:d})})},d))})})]})})}export{sa as A,pa as C,nn as E,dn as F,tn as S,za as T,ia as W,Ge as a,gn as b,Sa as c,hn as d,Ke as e,da as f,ca as g,ha as h,en as i,Kt as j,Fe as k,We as l,aa as m,ra as n,Xn as o,Zn as p,Ye as q,Aa as r,na as u};
