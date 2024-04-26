import{u as k,a as j,c as B,j as F,b as H,d as P,s as R,e as G,w as W,l as _,f as t,g as l,T as g,C as A,h as S,v as z,i as M,k as $,r as d,m as U,n as q,o as J,p as Q,G as p,S as b,L as O,B as X,q as K,t as Y,x as Z,F as V,y as ee,M as E,D as I,z as L,A as te,E as ne,H as se,I as w,J as oe,K as ie}from"./index-C9SE3cQp.js";function re(o,n,r,s=[]){return(c,e)=>{for(const a of o){let u=0;const m=r[a],f=m(c),i=m(e);if(typeof f=="string"&&typeof i=="string"?u=f.localeCompare(i):u=i-f,u!==0)return s.includes(a)?u:(n?-1:1)*u}return 0}}const ae=["level","name","rarity"];function le(){const{t:o}=k("lightConeNames_gen");return{level:n=>n.level*(n.ascension+1),name:n=>o(`lightConeNames_gen:${n.key}`),rarity:n=>j.lightCone[n.key].rarity}}const ce={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]},de=B(F.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function ue({lightConeId:o}){const n=H(o),r=P(R,{member:"member0",et:"self"}),s=G(W("member0",..._(n)));return n?t(S,{children:l(A,{children:[l(g,{children:["Key: ",n.key]}),l(g,{children:["Level: ",n.level]}),l(g,{children:["Ascension: ",n.ascension]}),l(g,{children:["Superimpose: ",n.superimpose]}),l(g,{children:["ATK: ",s==null?void 0:s.compute(r.base.atk.src("lightCone")).val]}),l(g,{children:["HP: ",s==null?void 0:s.compute(r.base.hp.src("lightCone")).val]}),l(g,{children:["DEF: ",s==null?void 0:s.compute(r.base.def.src("lightCone")).val]})]})}):null}function he(o,n){const s=(()=>{switch(n.type){case"reset":return;case"overwrite":return n.lightCone;case"update":return{...o,...n.lightCone}}})();return s&&z(s)}const D={superimpose:[1,2,3,4,5]};function pe({lightConeIdToEdit:o="new"}){const{t:n}=k("lightCone"),{database:r}=M(),[s,c]=$();d.useEffect(()=>r.lightCones.followAny(c),[r,c]),d.useEffect(()=>{o==="new"&&a({type:"reset"});const i=o&&s&&r.lightCones.get(o);i&&a({type:"overwrite",lightCone:U(i)})},[o,r,s]);const[e,a]=d.useReducer(he,void 0),u=e?D:void 0,m=d.useCallback(i=>{const y=i.key?D:u;function C(x,h,v){return x&&h.includes(x)?x:v??h[0]}i.key&&(i.superimpose=C(e==null?void 0:e.superimpose,y.superimpose,Math.min(...y.superimpose))),i.level&&(i.level=q(i.level,0,J)),a({type:"update",lightCone:i})},[e,u,a]),f=d.useCallback(()=>{a({type:"reset"})},[]);return d.useEffect(()=>{o==="new"&&a({type:"reset"})},[o]),t(K,{children:l(S,{bgt:"dark",children:[t(Q,{title:"Light Cone Editor"}),l(A,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(p,{container:!0,spacing:1,columns:{xs:1,md:2},children:[t(p,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:t(me,{lcKey:(e==null?void 0:e.key)??"",setLCKey:i=>m({key:i}),label:e!=null&&e.key?"":n("editor.unknownLightCone")})}),t(p,{item:!0,xs:!0,md:"auto",display:"flex",children:t(ge,{superimpose:e==null?void 0:e.superimpose,setSuperimposition:i=>m({superimpose:i}),disabled:!e})})]}),l(p,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[t(p,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:t(fe,{level:e==null?void 0:e.level,ascension:e==null?void 0:e.ascension,setLevelAscension:(i,y)=>{m({level:i,ascension:y})},disabled:!e})}),t(p,{item:!0,xs:1,display:"flex",gap:1,children:t(S,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:t(d.Suspense,{fallback:t(b,{width:"60%"}),children:l(g,{color:"text.secondary",align:"center",children:["Ascension ",(e==null?void 0:e.ascension)||0]})})})}),t(p,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:t(O,{locKey:(e==null?void 0:e.location)??"",setLocKey:i=>m({location:i})})})]}),t(p,{children:t(X,{startIcon:t(de,{}),onClick:()=>{r.lightCones.new(e),f()},disabled:!e,color:"primary",children:n`editor.btnAdd`})})]})]})})}function me({lcKey:o,setLCKey:n,label:r=""}){const{t:s}=k(["lightCone","lightConeNames_gen"]);r=r||s("lightCone:autocompleteLabels.key");const c=d.useMemo(()=>Y.map(a=>({key:a,label:s(`lightConeNames_gen:${a}`)})),[s]),e=d.useCallback(a=>n(a??""),[n]);return t(d.Suspense,{fallback:t(b,{variant:"text",width:100}),children:t(Z,{options:c,valueKey:o,onChange:e,toImg:()=>t(V,{children:" "}),label:r})})}function ge({superimpose:o,setSuperimposition:n,disabled:r=!1}){return t(I,{title:o?`Superimposition ${o}`:"Superimposition 1",color:"primary",disabled:r,fullWidth:!0,children:ee.map(s=>l(E,{selected:o===s,disabled:o===s,onClick:()=>n(s),children:["Superimposition ",s]},s))})}function fe({level:o,ascension:n,setLevelAscension:r,disabled:s=!1}){return t(I,{title:o?`Lv. ${o}/${L[n]}`:"Select Level",color:"primary",disabled:s,fullWidth:!0,children:te.map(([c,e])=>t(E,{selected:o===c&&n===e,disabled:o===c&&n===e,onClick:()=>r(c,e),children:c===L[e]?`Lv. ${c}`:`Lv. ${c}/${L[e]}`},`${c}/${e}`))})}const ye={xs:1,sm:2,md:3,lg:3,xl:4},xe={xs:10,sm:12,md:24,lg:24,xl:24};function Ce(){const{database:o}=M(),[n,r]=$(),s=()=>({sortType:ae[0],ascending:!1,rarity:[...oe],path:[...ie]}),{sortType:c,ascending:e}=s();d.useEffect(()=>o.lightCones.followAny(r),[o,r]);const{lightConeIds:a,totalLightConeNum:u}=d.useMemo(()=>{const h=o.lightCones.values,v=h.length,N=h.sort(re(ce[c]??[],e,le())).map(T=>T.id);return n&&{lightConeIds:N,totalLightConeNum:v}},[o,n,c,e]),m=ne(),f=a.length!==u?`${a.length}/${u}`:`${u}`,{numShow:i,setTriggerElement:y}=se(xe[m],a.length),C=d.useMemo(()=>a.slice(0,i),[a,i]),x={numShowing:C.length,total:f};return t(K,{children:l(d.Suspense,{fallback:t(b,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[t(w,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:l(g,{color:"text.secondary",children:["Showing ",t("b",{children:x.numShowing})," out of"," ",x.total," Items"]})}),l(w,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(p,{container:!0,spacing:1,columns:ye,children:C.map(h=>t(p,{item:!0,xs:1,children:t(ue,{lightConeId:h})},h))}),a.length!==C.length&&t(b,{ref:h=>{h&&y(h)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})})}function ve(){return t(w,{my:1,display:"flex",flexDirection:"column",gap:1,children:l(d.Suspense,{fallback:!1,children:[t(pe,{}),t(Ce,{})]})})}export{ve as default};
