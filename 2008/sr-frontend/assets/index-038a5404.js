import{c as I,j as B,u as H,a as N,s as T,b as F,w as G,l as P,d as t,e as l,T as p,C as k,f as L,v as R,g as D,h as A,i as M,r as c,k as W,m as z,n as U,o as _,G as h,S as C,L as q,B as Q,p as $,q as J,t as O,F as X,x as Y,M as K,D as E,y as b,z as Z,A as V,E as ee,H as v}from"./index-82a16eaf.js";const te=I(B.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function ne({lightConeId:s}){const o=H(s),i=N(T,{member:"member0",et:"self"}),n=F(G("member0",...P(o)));return o?t(L,{children:l(k,{children:[l(p,{children:["Key: ",o.key]}),l(p,{children:["Level: ",o.level]}),l(p,{children:["Ascension: ",o.ascension]}),l(p,{children:["Superimpose: ",o.superimpose]}),l(p,{children:["ATK: ",n==null?void 0:n.compute(i.base.atk.src("lightCone")).val]}),l(p,{children:["HP: ",n==null?void 0:n.compute(i.base.hp.src("lightCone")).val]}),l(p,{children:["DEF: ",n==null?void 0:n.compute(i.base.def.src("lightCone")).val]})]})}):null}function se(s,o){const n=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...s,...o.lightCone}}})();return n&&R(n)}const S={superimpose:[1,2,3,4,5]};function oe({lightConeIdToEdit:s="new"}){const{t:o}=D("lightCone"),{database:i}=A(),[n,a]=M();c.useEffect(()=>i.lightCones.followAny(a),[i,a]),c.useEffect(()=>{s==="new"&&d({type:"reset"});const r=s&&n&&i.lightCones.get(s);r&&d({type:"overwrite",lightCone:W(r)})},[s,i,n]);const[e,d]=c.useReducer(se,void 0),g=e?S:void 0,m=c.useCallback(r=>{const u=r.key?S:g;function x(y,w,j){return y&&w.includes(y)?y:j??w[0]}r.key&&(r.superimpose=x(e==null?void 0:e.superimpose,u.superimpose,Math.min(...u.superimpose))),r.level&&(r.level=z(r.level,0,U)),d({type:"update",lightCone:r})},[e,g,d]),f=c.useCallback(()=>{d({type:"reset"})},[]);return c.useEffect(()=>{s==="new"&&d({type:"reset"})},[s]),t($,{children:l(L,{bgt:"dark",children:[t(_,{title:"Light Cone Editor"}),l(k,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,spacing:1,columns:{xs:1,md:2},children:[t(h,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:t(ie,{lcKey:(e==null?void 0:e.key)??"",setLCKey:r=>m({key:r}),label:e!=null&&e.key?"":o("editor.unknownLightCone")})}),t(h,{item:!0,xs:!0,md:"auto",display:"flex",children:t(re,{superimpose:e==null?void 0:e.superimpose,setSuperimposition:r=>m({superimpose:r}),disabled:!e})})]}),l(h,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[t(h,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:t(le,{level:e==null?void 0:e.level,ascension:e==null?void 0:e.ascension,setLevelAscension:(r,u)=>{m({level:r,ascension:u})},disabled:!e})}),t(h,{item:!0,xs:1,display:"flex",gap:1,children:t(L,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:t(c.Suspense,{fallback:t(C,{width:"60%"}),children:l(p,{color:"text.secondary",align:"center",children:["Ascension ",(e==null?void 0:e.ascension)||0]})})})}),t(h,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:t(q,{locKey:(e==null?void 0:e.location)??"",setLocKey:r=>m({location:r})})})]}),t(h,{children:t(Q,{startIcon:t(te,{}),onClick:()=>{i.lightCones.new(e),f()},disabled:!e,color:"primary",children:o`editor.btnAdd`})})]})]})})}function ie({lcKey:s,setLCKey:o,label:i=""}){const{t:n}=D(["lightCone","lightConeNames_gen"]);i=i||n("lightCone:autocompleteLabels.key");const a=c.useMemo(()=>J.map(d=>({key:d,label:n(`lightConeNames_gen:${d}`)})),[n]),e=c.useCallback(d=>o(d??""),[o]);return t(c.Suspense,{fallback:t(C,{variant:"text",width:100}),children:t(O,{options:a,valueKey:s,onChange:e,toImg:()=>t(X,{children:" "}),label:i})})}function re({superimpose:s,setSuperimposition:o,disabled:i=!1}){return t(E,{title:s?`Superimposition ${s}`:"Superimposition 1",color:"primary",disabled:i,fullWidth:!0,children:Y.map(n=>l(K,{selected:s===n,disabled:s===n,onClick:()=>o(n),children:["Superimposition ",n]},n))})}function le({level:s,ascension:o,setLevelAscension:i,disabled:n=!1}){return t(E,{title:s?`Lv. ${s}/${b[o]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:Z.map(([a,e])=>t(K,{selected:s===a&&o===e,disabled:s===a&&o===e,onClick:()=>i(a,e),children:a===b[e]?`Lv. ${a}`:`Lv. ${a}/${b[e]}`},`${a}/${e}`))})}const ae={xs:1,sm:2,md:3,lg:3,xl:4},ce={xs:10,sm:12,md:24,lg:24,xl:24};function de(){const{database:s}=A(),[o,i]=M();c.useEffect(()=>s.lightCones.followAny(i),[s,i]);const{lightConeIds:n,totalLightConeNum:a}=c.useMemo(()=>{const x=s.lightCones.values.length,y=s.lightCones.keys;return o&&{lightConeIds:y,totalLightConeNum:x}},[s,o]),e=V(),d=n.length!==a?`${n.length}/${a}`:`${a}`,{numShow:g,setTriggerElement:m}=ee(ce[e],n.length),f=c.useMemo(()=>n.slice(0,g),[n,g]),r={numShowing:f.length,total:d};return t($,{children:l(c.Suspense,{fallback:t(C,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[t(v,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:l(p,{color:"text.secondary",children:["Showing ",t("b",{children:r.numShowing})," out of"," ",r.total," Items"]})}),l(v,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(h,{container:!0,spacing:1,columns:ae,children:f.sort((u,x)=>u.localeCompare(x)).map(u=>t(h,{item:!0,xs:1,children:t(ne,{lightConeId:u})},u))}),n.length!==f.length&&t(C,{ref:u=>{u&&m(u)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})})}function he(){return t(v,{my:1,display:"flex",flexDirection:"column",gap:1,children:l(c.Suspense,{fallback:!1,children:[t(oe,{}),t(de,{})]})})}export{he as default};
