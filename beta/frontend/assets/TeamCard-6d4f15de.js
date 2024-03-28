import{b as R,u as De,ba as fe,b9 as ft,n as l,p as t,bm as _,T as g,r as P,i as A,j as W,aJ as _e,e as C,f as X,cH as pt,a5 as k,bC as we,cr as pe,ct as me,cs as Y,cq as ge,cI as ve,cJ as K,cp as L,Z as mt,d as N,cK as gt,bI as vt,ch as yt,a4 as xt,K as v,V as ne,t as O,J as j,k as St,ao as se,b7 as bt,ab as Ie,b6 as oe,b4 as $e,q as z,bU as Me,aC as je,bf as Ct,o as Re,c4 as Dt,a1 as ke,bS as Be,bL as _t,bT as wt,bb as It,bM as $t,bN as Mt,Q as jt,b1 as Te,Y as Ne}from"./index-e4fabb27.js";import{B as ze,d as Rt}from"./BootstrapTooltip-62d55385.js";import{b as U,d as kt,e as Bt,h as Tt,p as Nt}from"./StarDisplay-0fef1fd2.js";import{S as zt,s as Ee,J as S,K as I,L as $,M as y,N as M,v as p,O as H,P as F,Q as Et,R as T,V as Oe,W as ee,X as Ot,T as Pe,w as Pt,g as G,x as te,F as At,Y as Wt,z as Ae,H as Ht,d as Ft,y as Gt,u as ye,A as Vt,r as qt,n as Kt,D as We,Z as Lt,c as J,q as xe,j as Jt,C as Ut}from"./index-49258c0e.js";import{D as Q}from"./DataContext-9fb31ece.js";import{A as He}from"./Artifact-06001ea2.js";import{E as Qt,S as Fe}from"./StatIcon-a11e9daa.js";import{S as B}from"./SqBadge-14113dd6.js";import{b as Yt,g as Zt}from"./index-610d388e.js";import{S as Xt}from"./SlotIcon-60705b9b.js";import{i as re,I as ea}from"./ColoredText-2eaeb35b.js";import{u as ta}from"./useWeapon-9d2a68cf.js";import{g as Ge,W as Ve}from"./index-04e0b791.js";import{C as E}from"./CardActionArea-8511833d.js";function aa(e){const a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,(s,o,r,i)=>o+o+r+r+i+i);const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function Jn(e,a){if(e)return`rgba(${e.r},${e.g},${e.b},${a})`}function na(e){const a=R();return U(a.charMeta,e)}function qe(e){const a=R();return U(a.chars,e)}function sa(e){const a=R();return U(a.teams,e)}function oa(e){const a=R();return U(a.teamChars,e)}function ra({statKey:e,value:a,color:n,prefix:s="",typographyProps:o={}}){const{t:r}=De("statKey_gen"),i=fe(e),c=ft(a,fe(e));return l(g,{color:n?`${n}.main`:void 0,...o,children:[t(zt,{statKey:e,iconProps:_})," ",r(e)," ",t("strong",{children:`${s}${c}${i}`})]},e)}function Ke({condition:e,wrapper:a,falseWrapper:n,children:s}){return e?a(s):n?n(s):s}var ie={},ia=A;Object.defineProperty(ie,"__esModule",{value:!0});var Le=ie.default=void 0,ca=ia(P()),la=W,da=(0,ca.default)((0,la.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");Le=ie.default=da;const Je=({stars:e=1,colored:a=!1,inline:n=!1})=>t(_e,{color:a?"warning":void 0,children:[...Array(e).keys()].map((s,o)=>t(kt,{fontSize:n?"inherit":void 0,sx:n?{verticalAlign:"text-top"}:void 0},o))});var ce={},ua=A;Object.defineProperty(ce,"__esModule",{value:!0});var ha=ce.default=void 0,fa=ua(P()),pa=W,ma=(0,fa.default)((0,pa.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");ha=ce.default=ma;const ga=C.createContext({});function va({iconProps:e}){const[a,n]=C.useState(0);return C.useEffect(()=>{const s=setInterval(()=>n(o=>o+1),1e3);return()=>clearInterval(s)},[]),t(Qt,{ele:X[a%X.length],iconProps:e})}const x=e=>t(Pe,{ns:"elementalResonance_gen",key18:e}),ae=e=>t(Pe,{ns:"elementalResonance",key18:e}),D=Ee(...X.map(e=>S[e])),Ue=pt(we,e=>[`${e}_res_`,I(p.charKey,y(S.ele,4,M(.15)),$.info(`${e}_res_`))]),ya={name:x("ProtectiveCanopy.name"),desc:x("ProtectiveCanopy.desc"),icon:l("span",{children:[t(va,{iconProps:_})," x4"]}),canShow:e=>e.get(S.ele).value>=4,sections:[{teamBuff:!0,fields:Object.values(Ue).map(([e,a])=>({node:a}))}]},[xa,Sa]=I(p.charKey,y(D,4,y(S.pyro,2,M(.25))),$.info("atk_")),ba={name:x("FerventFlames.name"),desc:x("FerventFlames.desc"),icon:l("span",{children:[t(pe,{..._})," ",t(pe,{..._})]}),canShow:e=>e.get(S.pyro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.cryo"),value:-40,unit:"%"},{node:xa}]}]},[Ca,Da]=I(p.charKey,y(D,4,y(S.hydro,2,M(.25))),$.info("hp_")),_a={name:x("SoothingWater.name"),desc:x("SoothingWater.desc"),icon:l("span",{children:[t(me,{..._})," ",t(me,{..._})]}),canShow:e=>e.get(S.hydro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.pyro"),value:-40,unit:"%"},{node:Ca}]}]},Qe=["resonance","ShatteringIce"],Ye=H(Qe),[wa,Ia]=I(p.charKey,y(D,4,y(S.cryo,2,F(Ye,"on",M(.15)))),$.info("critRate_")),$a={name:x("ShatteringIce.name"),desc:x("ShatteringIce.desc"),icon:l("span",{children:[t(Y,{..._})," ",t(Y,{..._})]}),canShow:e=>e.get(S.cryo).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:Qe,value:Ye,name:T("enemyAffected.frozenOrCryo"),header:{title:x("ShatteringIce.name"),icon:t(Y,{})},states:{on:{fields:[{node:wa}]}}}]},Ma={name:x("HighVoltage.name"),desc:x("HighVoltage.desc"),icon:l("span",{children:[t(ge,{..._})," ",t(ge,{..._})]}),canShow:e=>e.get(S.electro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{text:T("effectDuration.hydro"),value:-40,unit:"%"}]}]},[ja,Ra]=I(p.charKey,y(D,4,y(S.anemo,2,M(-.15))),$.info("staminaDec_")),[ka,Ba]=I(p.charKey,y(D,4,y(S.anemo,2,M(.1))),$.info("moveSPD_")),[Ta,Na]=I(p.charKey,y(D,4,y(S.anemo,2,M(-.05))),$.info("cdRed_")),za={name:x("ImpetuousWinds.name"),desc:x("ImpetuousWinds.desc"),icon:l("span",{children:[t(ve,{..._})," ",t(ve,{..._})]}),canShow:e=>e.get(S.anemo).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,fields:[{node:ja},{node:ka},{node:Ta}]}]},Ze=["resonance","EnduringRock"],Xe=H(Ze),et=["resonance","EnduringRockHit"],tt=H(et),[Ea,Oa]=I(p.charKey,y(D,4,y(S.geo,2,M(.15))),$.info("shield_")),[Pa,Aa]=I(p.charKey,y(D,4,y(S.geo,2,F(Xe,"on",M(.15)))),$.info("all_dmg_")),[,Wa]=I(Et.charKey,Aa,$.info("all_dmg_")),[Ha,Fa]=I(p.charKey,y(D,4,y(S.geo,2,F(tt,"on",M(-.2)))),$.info("geo_enemyRes_")),Ga={name:x("EnduringRock.name"),desc:x("EnduringRock.desc"),icon:l("span",{children:[t(K,{..._})," ",t(K,{..._})]}),canShow:e=>e.get(S.geo).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,text:x("EnduringRock.desc"),fields:[{node:Ea}]},{teamBuff:!0,path:Ze,value:Xe,header:{title:x("EnduringRock.name"),icon:t(K,{})},name:T("protectedByShield"),states:{on:{fields:[{node:Oe(Pa,{isTeamBuff:!1})}]}}},{teamBuff:!0,path:et,value:tt,header:{title:x("EnduringRock.name"),icon:t(K,{})},name:ae("EnduringRock.hitCond"),states:{on:{fields:[{node:Ha},{text:ee("duration"),value:15,unit:"s"}]}}}]},at=["resonance","SprawlingCanopy2ele"],nt=H(at),st=["resonance","SprawlingCanopy3ele"],ot=H(st),[Va,qa]=I(p.charKey,y(D,4,y(S.dendro,2,50)),$.info("eleMas")),[Ka,La]=I(p.charKey,y(D,4,y(S.dendro,2,F(nt,"on",30))),$.info("eleMas")),[Ja,Ua]=I(p.charKey,y(D,4,y(S.dendro,2,F(ot,"on",20))),$.info("eleMas")),Qa={name:x("SprawlingGreenery.name"),desc:x("SprawlingGreenery.desc"),icon:l("span",{children:[t(L,{..._})," ",t(L,{..._})]}),canShow:e=>e.get(S.dendro).value>=2&&e.get(D).value>=4,sections:[{teamBuff:!0,text:x("SprawlingGreenery.desc"),fields:[{node:Va}]},{teamBuff:!0,path:at,value:nt,header:{title:x("SprawlingGreenery.name"),icon:t(L,{})},name:ae("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:Ka},{text:ee("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:st,value:ot,header:{title:x("SprawlingGreenery.name"),icon:t(L,{})},name:ae("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:Ja},{text:ee("duration"),value:6,unit:"s"}]}}}]},Un=[ya,ba,_a,$a,Ma,za,Ga,Qa],Ya=Ot({teamBuff:{premod:{...k(Ue,([e,a])=>a),atk_:Sa,hp_:Da,staminaDec_:Ra,moveSPD_:Ba,cdRed_:Na,shield_:Oa,geo_enemyRes_:Fa,eleMas:Oe(Ee(qa,La,Ua),{pivot:!0}),all_dmg_:Wa},total:{critRate_:Ia}}});function Za(e,a=0,n,s){const o=R(),[r,i]=mt(),c=C.useDeferredValue(r),{gender:d}=N(),h=C.useMemo(()=>c&&en(o,e,a,d,n,s),[c,d,e,o,a,n,s]);return C.useEffect(()=>e?o.chars.follow(e,i):void 0,[e,i,o]),h}class Xa{constructor(a){this.data={},a.chars.followAny(n=>{this.removeData(n)})}getData(a){return this.data[a]}cacheData(a,n){this.data[a]=n}removeData(a){delete this.data[a]}}const Z=new Map,Se=e=>{if(Z.has(e))return Z.get(e);const a=new Xa(e);return Z.set(e,a),a};function en(e,a,n=0,s,o,r){if(!a)return;if(!n&&!o&&!r){const f=Se(e).getData(a);if(f)return f}const{teamData:i,teamBundle:c}=tn(e,a,n,o,r)??{};if(!i||!c)return;const d=Pt(i,s,a),h=k(d,(f,u)=>{const{data:m,...b}=c[u];return{...f,...b}});return!n&&!o&&!r&&Se(e).cacheData(a,h),h}function tn(e,a,n=0,s,o){if(!a)return;const r=e.chars.get(a);if(!r)return;const i=an(e,!0,n,r,o||(e.weapons.get(r.equippedWeapon)??gt()),s??Object.values(r.equippedArtifacts).map(h=>e.arts.get(h)).filter(h=>h));if(!i)return;const c={[a]:i};return{teamData:{[a]:i.data},teamBundle:c}}function an(e,a=!1,n,s,o,r){const i=G(s.key,e.gender);if(!i)return;const c=Ge(o.key);if(!c)return;const d=Ve.getAllDataOfType(i.weaponTypeKey),h=a?(()=>{const{display:b,...w}=c.data;return te([w,d])})():c.data,f=te([i.data,h,Yt]),m=[...Array.isArray(r)?r.map(b=>At(b,n)):[r],Wt(s),Ae(o),f,Ht,Ya];return{character:s,weapon:o,characterSheet:i,weaponSheet:c,data:m}}function nn({art:e,children:a}){const n=t(v,{children:t(ne,{variant:"rectangular",width:100,height:100})}),s=t(C.Suspense,{fallback:n,children:t(sn,{art:e})});return t(ze,{placement:"top",title:s,disableInteractive:!0,children:a})}function sn({art:e}){const{t:a}=De("statKey_gen"),n=Zt(e.setKey),{slotKey:s,level:o,rarity:r,mainStatKey:i,substats:c}=e,d=n.getSlotName(s),h=vt.getVariant(i);return l(v,{p:1,children:[l(g,{variant:"h6",children:[t(Xt,{slotKey:s,iconProps:_})," ",d]}),l(g,{variant:"subtitle1",color:`${h}.main`,children:[t(Fe,{statKey:i,iconProps:_})," ",a(i)," ",yt(i,r,o)]}),l(g,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(Bt,{stars:r}),l(B,{color:He.levelVariant(o),children:["+",o]})," "]}),t(v,{py:1,children:c.map(({value:f,key:u,rolls:m})=>!!(f&&u)&&t(ra,{statKey:u,value:f,color:`roll${xt(m.length,1,6)}`,prefix:"+"},u))}),t(g,{color:"success.main",children:n.name}),t(Tt,{color:"secondary.main",location:e.location})]})}function on({artifactObj:e,slotKey:a}){if(!e)return t(O,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:t(v,{sx:{width:"100%",pb:"100%",position:"relative"},children:t(v,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:re.slot[a]})})});const{mainStatKey:n,rarity:s,level:o}=e,i=we.find(c=>e.mainStatKey.includes(c))??"secondary";return t(nn,{art:e,children:l(O,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[t(v,{component:"img",className:`grad-${s}star`,src:Ft(e.setKey,e.slotKey),maxWidth:"100%",maxHeight:"100%"}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(B,{sx:{p:.5},color:He.levelVariant(o),children:l("strong",{children:["+",o]})})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t(B,{color:i,sx:{p:.5},children:t(Fe,{statKey:n,iconProps:{fontSize:"inherit"}})})})]})})}function rn({sheet:e,addlText:a,children:n}){const s=l(C.Suspense,{fallback:t(ne,{variant:"text",width:100}),children:[l(g,{children:[t(ea,{src:re.weaponTypes[e.weaponType],size:1.5})," ",e.name]}),a]});return t(ze,{placement:"top",title:s,disableInteractive:!0,children:n})}function cn({weaponId:e}){const a=ta(e);return a?t(rt,{weapon:a}):null}function rt({weapon:e}){const a=(e==null?void 0:e.key)&&Ge(e.key),n=C.useMemo(()=>a&&e&&Gt([a.data,Ae(e)]),[a,e]);if(!e||!a||!n)return null;const s=l(v,{children:[t(be,{node:n.get(ye.weapon.main)}),t(be,{node:n.get(ye.weapon.sub)})]});return l(O,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[t(v,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${a.rarity}star`,children:t(rn,{sheet:a,addlText:s,children:t(v,{component:"img",src:Vt(e.key,e.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(B,{color:"primary",children:Ve.getLevelString(e)})})}),a.hasRefinement&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(B,{color:"secondary",children:["R",e.refinement]})})})]})}function be({node:e}){const{icon:a}=qt(e.info);return l(g,{children:[a," ",Kt(e)]})}function ln({hideWeapon:e=!1}){var n;const{data:a}=C.useContext(Q);return t(v,{children:l(j,{container:!0,columns:e?5:6,spacing:.5,children:[!e&&t(j,{item:!0,xs:1,height:"100%",children:t(cn,{weaponId:((n=a.get(p.weapon.id).value)==null?void 0:n.toString())??""})}),t(dn,{})]})})}function dn(){const e=R(),{data:a}=C.useContext(Q),n=St.map(s=>{var o;return[s,e.arts.get(((o=a.get(p.art[s].id).value)==null?void 0:o.toString())??"")]});return t(se,{children:n.map(([s,o])=>t(j,{item:!0,xs:1,children:t(on,{artifactObj:o,slotKey:s})},s))})}function un({weapon:e}){return t(v,{children:l(j,{container:!0,columns:e?6:5,spacing:.5,sx:{},children:[e&&t(j,{item:!0,xs:1,height:"100%",children:t(rt,{weapon:e})}),t(j,{item:!0,xs:5,children:t(bt,{sx:{backgroundColor:"info.main",height:"44px",display:"flex",justifyContent:"center",alignItems:"center"},children:t(g,{children:"TC Build"})})})]})})}function it(e,a,n){const s=Nt(e,a),o=We(e,"icon",a);return n&&s?s:o||""}function hn({children:e,characterKey:a,onClick:n}){const{gender:s}=N(),{silly:o}=C.useContext(Ie),r=oe(a),i=C.useCallback(d=>t(E,{onClick:n,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:d}),[n]),c=We(a,"banner",s);return t(Ke,{condition:!!n,wrapper:i,children:l(v,{display:"flex",position:"relative",className:c?void 0:`grad-${r.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${c})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[t(v,{flexShrink:1,component:"img",src:it(a,s,o),sx:{maxWidth:"40%"},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1}),t(v,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-between",children:e})]})})}function fn({characterKey:e}){const{gender:a}=N(),{data:n}=C.useContext(Q),s=n.get(p.charEle).value,o=n.get(p.lvl).value,r=n.get(p.constellation).value,i=n.get(p.asc).value,c=n.get(p.total.autoBoost).value,d=n.get(p.total.skillBoost).value,h=n.get(p.total.burstBoost).value,f=n.get(p.total.auto).value,u=n.get(p.total.skill).value,m=n.get(p.total.burst).value,b=oe(e);return l(se,{children:[t(z,{label:t(g,{variant:"subtitle1",children:t($e,{characterKey:e,gender:a})}),size:"small",color:s,sx:{opacity:.85}}),l(v,{display:"flex",gap:1,sx:{textShadow:"0 0 5px gray"},alignItems:"center",children:[l(v,{children:[l(g,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",o]}),l(g,{component:"span",variant:"h6",color:"text.secondary",children:["/",Me[i]]})]}),t(g,{component:"span",whiteSpace:"nowrap",sx:{opacity:.85},children:t(je,{color:`roll${r<3?3:r}`,children:t(_e,{color:"white",children:l("strong",{children:["C",r]})})})})]}),l(v,{display:"flex",gap:1,sx:{opacity:.85},children:[t(z,{size:"small",color:c?"info":"secondary",label:t("strong",{children:f})}),t(z,{size:"small",color:d?"info":"secondary",label:t("strong",{children:u})}),t(z,{size:"small",color:h?"info":"secondary",label:t("strong",{children:m})})]}),t(g,{variant:"h6",lineHeight:1,children:t(Je,{stars:b.rarity,colored:!0,inline:!0})})]})}function Qn({characterKey:e}){const{gender:a}=N(),n=oe(e),s=G(e,a);return l(se,{children:[t(z,{label:t(g,{variant:"subtitle1",children:t($e,{characterKey:e,gender:a})}),size:"small",color:s.elementKey,sx:{opacity:.85}}),t(v,{mt:1,children:t(g,{variant:"h4",children:t(je,{children:"NEW"})})}),t(g,{mt:1.5,children:t(Je,{stars:n.rarity,colored:!0})})]})}var le={},pn=A;Object.defineProperty(le,"__esModule",{value:!0});var ct=le.default=void 0,mn=pn(P()),gn=W,vn=(0,mn.default)((0,gn.jsx)("path",{d:"M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"}),"Checkroom");ct=le.default=vn;const Ce=Lt(Ct({dyn:{...p.art,...p.artSet}})),yn={art:Re([...Dt,...ke],e=>Ce.dyn[e]),artSet:k(p.artSet,(e,a)=>Ce.dyn[a])};function Yn(e,a,n){const s={base:{},values:{flower:[],plume:[],goblet:[],circlet:[],sands:[]}},o=new Set;for(const r of e){const i=Be(r.mainStatKey,r.rarity,Math.max(Math.min(a,_t[r.rarity]),r.level)),c={id:r.id,set:r.setKey,values:{[r.setKey]:1,[r.mainStatKey]:i,...Object.fromEntries(r.substats.map(d=>[d.key,d.key.endsWith("_")?d.accurateValue/100:d.accurateValue]))}};delete c.values[""],s.values[r.slotKey].push(c),Object.keys(c.values).forEach(d=>o.add(d))}if(s.base=Re([...o],r=>0),n)for(const r of Object.values(s.values))r.push({id:"",values:{}});return s}function Zn(e,a,n){var f;const{artifact:{sets:s},optimization:{target:o,minTotal:r}}=n;if(!o)return{};const i=(f=e[a])==null?void 0:f.target.data[0];if(!i)return{};Object.assign(i,te([i,yn]));const c=It(i.display??{},o);if(!c)return{};const d=Object.keys(r).map(u=>i.total[u]).filter(u=>u);let h=xe([c,...d],i,({path:[u]})=>u!=="dyn");return h=Jt(h,u=>{if(u.operation==="read"&&u.path[0]==="dyn"){const m=s[u.path[1]];if(m)return J(m);if(!ke.includes(u.path[1]))return J(0)}return u},u=>u),h=xe(h,{},u=>!1),{nodes:h}}function Xn(e){const a=new Set;return Ut(e,{},n=>{const s=n.path[1];return a.add(s),s},1),a}function es(e){const{artifact:{slots:a,substats:{stats:n,type:s,rarity:o}}}=e,r=k(n,(d,h)=>Math.ceil(n[h]/$t(h,o,s))),i=bn(a),c=Sn(a);return{minSubLines:c,minOtherRolls:xn(Object.entries(r),i,c)}}function xn(e,a,n=4*5){const s=e.reduce((o,[r,i])=>{const c=5-(a[r]??0);return o+Math.min(i,c)},0);return n-s}function Sn(e){return Object.values(e).reduce((a,{rarity:n,level:s})=>{const{high:o,low:r}=Mt[n];return a+(s>=4?o:r)},0)}function bn(e){const a={};return Object.values(e).forEach(({statKey:n})=>{a[n]=(a[n]??0)+1},0),a}function Cn(e){const{artifact:{slots:a,substats:{stats:n},sets:s}}=e,o=k(n,(r,i)=>wt(r,i));return Object.values(a).forEach(({statKey:r,rarity:i,level:c})=>o[r]=(o[r]??0)+Be(r,i,c)),{art:k(o,(r,i)=>i.endsWith("_")?M(r):J(r)),artSet:k(s,r=>J(r))}}function ts(e){const{weapon:{key:a,level:n,ascension:s,refinement:o}}=e;return{id:"",location:"",key:a,level:n,ascension:s,refinement:o,lock:!1}}var de={},Dn=A;Object.defineProperty(de,"__esModule",{value:!0});var lt=de.default=void 0,_n=Dn(P()),wn=W,In=(0,_n.default)((0,wn.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");lt=de.default=In;var ue={},$n=A;Object.defineProperty(ue,"__esModule",{value:!0});var dt=ue.default=void 0,Mn=$n(P()),jn=W,Rn=(0,Mn.default)((0,jn.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");dt=ue.default=Rn;function kn({characterKey:e,onClick:a,onMouseDown:n,onMouseEnter:s,hoverChild:o,hideFav:r}){const i=qe(e),{favorite:c}=na(e),{gender:d}=N(),{silly:h}=C.useContext(Ie),f=G(e,d),u=C.useCallback(()=>a==null?void 0:a(e),[e,a]),m=C.useCallback(q=>t(E,{onClick:u,onMouseDown:n,onMouseEnter:s,children:q}),[u,n,s]),[b,w,V]=jt();return t(Te,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!o&&b,onClose:V,onOpen:w,title:o,children:t(O,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:l(Ke,{condition:!!a||!!n||!!s,wrapper:m,children:[t(v,{display:"flex",className:`grad-${f.rarity}star`,children:t(v,{component:"img",src:it(e,d,h),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),i&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:l(B,{color:"primary",children:[i.level,"/",Me[i.ascension]]})})}),!r&&t(v,{sx:{position:"absolute",top:0,right:0},children:c?t(Le,{fontSize:"small"}):t(dt,{fontSize:"small"})}),i&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(B,{color:"secondary",children:["C",i.constellation]})})})]})})})}function Bn({index:e}){return t(O,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(v,{component:"img",src:re.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}function as({teamId:e,onClick:a,hoverCard:n=!1,bgt:s}){const o=sa(e),{name:r,description:i,loadoutData:c}=o,d=R(),h=c.map(f=>{if(!f)return;const u=d.teamChars.get(f.teamCharId);if(u)return G(u.key).elementKey});return t(Ne,{bgt:s,sx:{height:"100%"},children:l(v,{sx:f=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${h.map(m=>{if(!m)return"rgba(0,0,0,0)";const b=f.palette[m].main,w=aa(b);return w?`rgba(${w.r},${w.g},${w.b},0.25)`:"rgba(0,0,0,0)"}).map((m,b)=>`${m} ${b*25+12.5}%`).join(", ")})`}),children:[t(E,{onClick:()=>a(),sx:{p:1},children:l(g,{sx:{display:"flex",gap:1},children:[t("span",{children:r})," ",i&&t(Te,{title:t(g,{children:i}),children:t(Rt,{})})]})}),t(v,{sx:{p:1,marginTop:"auto"},children:t(j,{container:!0,columns:4,spacing:1,children:c.map((f,u)=>{var w;const m=f==null?void 0:f.teamCharId,b=m&&((w=d.teamChars.get(m))==null?void 0:w.key);return t(j,{item:!0,xs:1,height:"100%",children:b?t(E,{onClick:()=>a(b),children:t(kn,{characterKey:b,hoverChild:n&&t(Tn,{characterKey:b,teamCharId:m,teamId:e}),hideFav:!0})}):t(E,{onClick:()=>a(),children:t(Bn,{index:u})})},u)})})})]})})}function Tn({characterKey:e,teamId:a,teamCharId:n}){var q;const s=R(),o=qe(e),{gender:r}=N(),i=G(e,r),{name:c}=oa(n),d=s.teams.getLoadoutDatum(a,n),h=s.teams.getActiveBuildName(d),f=(()=>s.teams.getLoadoutWeapon(d))(),u=(()=>{const{buildType:ut,buildTcId:he}=d;return ut==="tc"&&he?Cn(s.buildTcs.get(he)):Object.values(s.teams.getLoadoutArtifacts(d)).filter(ht=>ht)})(),m=Za(e,void 0,u,f),b=(q=m==null?void 0:m[e])==null?void 0:q.target,w=C.useMemo(()=>o&&i&&{character:o,characterSheet:i,characterDispatch:()=>{}},[o,i]),V=C.useMemo(()=>b&&m&&{data:b,teamData:m},[b,m]);return!w||!V?null:t(ga.Provider,{value:w,children:t(Q.Provider,{value:V,children:t(v,{sx:{width:300,m:-1},children:t(C.Suspense,{fallback:t(ne,{variant:"rectangular",width:"100%",height:300}),children:l(Ne,{children:[t(hn,{characterKey:e,children:t(fn,{characterKey:e})}),l(v,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(lt,{}),t("span",{children:c})]}),l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(ct,{}),t("span",{children:h})]}),(d==null?void 0:d.buildType)==="tc"&&(d!=null&&d.buildTcId)?t(un,{weapon:f}):t(ln,{})]})]})})})})})}export{on as A,it as B,ga as C,Qn as H,as as T,cn as W,Le as a,lt as b,ct as c,ha as d,kn as e,hn as f,Cn as g,fn as h,ln as i,Yn as j,yn as k,es as l,Xn as m,ts as n,Zn as o,aa as p,Jn as q,Un as r,oa as s,qe as t,sa as u,Za as v,na as w,nn as x,rn as y,Ya as z};
