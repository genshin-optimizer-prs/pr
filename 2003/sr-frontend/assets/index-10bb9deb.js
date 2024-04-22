import{c as E,j,u as N,a as B,s as H,b as T,w as F,l as G,d as t,e as l,T as u,C as w,f as b,v as P,g as k,h as D,i as R,r as c,k as W,m as z,n as U,o as _,G as h,S as x,L as q,B as J,p as A,q as Q,t as O,F as X,x as Y,M,D as $,y as C,z as Z,A as V,E as ee,H as te,I as ne,J as se,K as L,N as ie}from"./index-8a35f461.js";const oe=E(j.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function re({lightConeId:i}){const s=N(i),o=B(H,{member:"member0",et:"self"}),n=T(F("member0",...G(s)));return s?t(b,{children:l(w,{children:[l(u,{children:["Key: ",s.key]}),l(u,{children:["Level: ",s.level]}),l(u,{children:["Ascension: ",s.ascension]}),l(u,{children:["Superimpose: ",s.superimpose]}),l(u,{children:["ATK: ",n==null?void 0:n.compute(o.base.atk.src("lightCone")).val]}),l(u,{children:["HP: ",n==null?void 0:n.compute(o.base.hp.src("lightCone")).val]}),l(u,{children:["DEF: ",n==null?void 0:n.compute(o.base.def.src("lightCone")).val]})]})}):null}function le(i,s){const n=(()=>{switch(s.type){case"reset":return;case"overwrite":return s.lightCone;case"update":return{...i,...s.lightCone}}})();return n&&P(n)}const S={superimpose:[1,2,3,4,5]};function ae({lightConeIdToEdit:i="new"}){const{t:s}=k("lightCone"),{database:o}=D(),[n,a]=R();c.useEffect(()=>o.lightCones.followAny(a),[o,a]),c.useEffect(()=>{i==="new"&&d({type:"reset"});const r=i&&n&&o.lightCones.get(i);r&&d({type:"overwrite",lightCone:W(r)})},[i,o,n]);const[e,d]=c.useReducer(le,void 0),g=e?S:void 0,m=c.useCallback(r=>{const f=r.key?S:g;function I(y,v,K){return y&&v.includes(y)?y:K??v[0]}r.key&&(r.superimpose=I(e==null?void 0:e.superimpose,f.superimpose,Math.min(...f.superimpose))),r.level&&(r.level=z(r.level,0,U)),d({type:"update",lightCone:r})},[e,g,d]),p=c.useCallback(()=>{d({type:"reset"})},[]);return c.useEffect(()=>{i==="new"&&d({type:"reset"})},[i]),t(A,{children:l(b,{bgt:"dark",children:[t(_,{title:"Light Cone Editor"}),l(w,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,spacing:1,columns:{xs:1,md:2},children:[t(h,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:t(ce,{lcKey:(e==null?void 0:e.key)??"",setLCKey:r=>m({key:r}),label:e!=null&&e.key?"":s("editor.unknownLightCone")})}),t(h,{item:!0,xs:!0,md:"auto",display:"flex",children:t(de,{superimpose:e==null?void 0:e.superimpose,setSuperimposition:r=>m({superimpose:r}),disabled:!e})})]}),l(h,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[t(h,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:t(he,{level:e==null?void 0:e.level,ascension:e==null?void 0:e.ascension,setLevelAscension:(r,f)=>{m({level:r,ascension:f})},disabled:!e})}),t(h,{item:!0,xs:1,display:"flex",gap:1,children:t(b,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:t(c.Suspense,{fallback:t(x,{width:"60%"}),children:l(u,{color:"text.secondary",align:"center",children:["Ascension ",(e==null?void 0:e.ascension)||0]})})})}),t(h,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:t(q,{locKey:(e==null?void 0:e.location)??"",setLocKey:r=>m({location:r})})})]}),t(h,{children:t(J,{startIcon:t(oe,{}),onClick:()=>{o.lightCones.new(e),p()},disabled:!e,color:"primary",children:s`editor.btnAdd`})})]})]})})}function ce({lcKey:i,setLCKey:s,label:o=""}){const{t:n}=k(["lightCone","lightConeNames_gen"]);o=o||n("lightCone:autocompleteLabels.key");const a=c.useMemo(()=>Q.map(d=>({key:d,label:n(`lightConeNames_gen:${d}`)})),[n]),e=c.useCallback(d=>s(d??""),[s]);return t(c.Suspense,{fallback:t(x,{variant:"text",width:100}),children:t(O,{options:a,valueKey:i,onChange:e,toImg:()=>t(X,{children:" "}),label:o})})}function de({superimpose:i,setSuperimposition:s,disabled:o=!1}){return t($,{title:i?`Superimposition ${i}`:"Superimposition 1",color:"primary",disabled:o,fullWidth:!0,children:Y.map(n=>l(M,{selected:i===n,disabled:i===n,onClick:()=>s(n),children:["Superimposition ",n]},n))})}function he({level:i,ascension:s,setLevelAscension:o,disabled:n=!1}){return t($,{title:i?`Lv. ${i}/${C[s]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:Z.map(([a,e])=>t(M,{selected:i===a&&s===e,disabled:i===a&&s===e,onClick:()=>o(a,e),children:a===C[e]?`Lv. ${a}`:`Lv. ${a}/${C[e]}`},`${a}/${e}`))})}const ue={xs:1,sm:2,md:3,lg:3,xl:4},pe={xs:10,sm:12,md:24,lg:24,xl:24};function me(){const{database:i}=D(),{lightConeIds:s,totalLightConeNum:o}=c.useMemo(()=>{const r=i.lightCones.values.length;return{lightConeIds:i.lightCones.keys,totalLightConeNum:r}},[i]),n=V(),a=s.length!==o?`${s.length}/${o}`:`${o}`,{numShow:e,setTriggerElement:d}=ee(pe[n],s.length),g=c.useMemo(()=>s.slice(0,e),[s,e]),m={numShowing:g.length,total:a};return t(A,{children:l(ie,{children:[t(te,{expandIcon:t(ne,{}),children:"Light Cones"}),t(se,{children:l(c.Suspense,{fallback:t(x,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[t(L,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:l(u,{color:"text.secondary",children:["Showing ",t("b",{children:m.numShowing})," out of"," ",m.total," Items"]})}),l(L,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(h,{container:!0,spacing:1,columns:ue,children:g.map(p=>t(h,{item:!0,xs:1,children:t(re,{lightConeId:p})},p))}),s.length!==g.length&&t(x,{ref:p=>{p&&d(p)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})})]})})}function fe(){return t(L,{my:1,display:"flex",flexDirection:"column",gap:1,children:l(c.Suspense,{fallback:!1,children:[t(ae,{}),t(me,{})]})})}export{fe as default};
