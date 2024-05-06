import{ap as I,aq as B,ar as P,as as R,at as F,au as H,av as W,J as n,T as l,a6 as g,af as w,a8 as b,c as G,j as _,aw as z,L as D,ab as A,r as d,ac as U,a7 as q,a5 as p,al as v,aj as J,ax as O,ay as Q,ao as $,az as X,N as M,O as K,aA as S,aB as Y,aC as Z,a3 as j,aD as V,aE as ee}from"./index-BPStqCeA.js";import{u as E,C as te,L as ne,a as se,b as oe}from"./LocationAutocomplete-Brq3WklY.js";function re(t,o,a,s=[]){return(c,e)=>{for(const i of t){let u=0;const m=a[i],f=m(c),r=m(e);if(typeof f=="string"&&typeof r=="string"?u=f.localeCompare(r):u=r-f,u!==0)return s.includes(i)?u:(o?-1:1)*u}return 0}}const ae=["level","name","rarity"];function ie(){return{level:t=>t.level*(t.ascension+1),name:t=>`lightConeNames_gen:${t.key}`,rarity:t=>I.lightCone[t.key].rarity}}const le={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function ce({lightConeId:t}){const o=B(t),a=P(R,{member:"member0",et:"self"}),s=F(H("member0",...W(o)));return o?n(b,{children:l(w,{children:[l(g,{children:["Key: ",o.key]}),l(g,{children:["Level: ",o.level]}),l(g,{children:["Ascension: ",o.ascension]}),l(g,{children:["Superimpose: ",o.superimpose]}),l(g,{children:["ATK: ",s==null?void 0:s.compute(a.base.atk.src("lightCone")).val]}),l(g,{children:["HP: ",s==null?void 0:s.compute(a.base.hp.src("lightCone")).val]}),l(g,{children:["DEF: ",s==null?void 0:s.compute(a.base.def.src("lightCone")).val]})]})}):null}const de=G(_.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function ue(t,o){const s=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...t,...o.lightCone}}})();return s&&z(s)}const k={superimpose:[1,2,3,4,5]};function he({lightConeIdToEdit:t="new"}){const{t:o}=D("lightCone"),{database:a}=A(),[s,c]=E();d.useEffect(()=>a.lightCones.followAny(c),[a,c]),d.useEffect(()=>{t==="new"&&i({type:"reset"});const r=t&&s&&a.lightCones.get(t);r&&i({type:"overwrite",lightCone:U(r)})},[t,a,s]);const[e,i]=d.useReducer(ue,void 0),u=e?k:void 0,m=d.useCallback(r=>{const y=r.key?k:u;function C(x,h,L){return x&&h.includes(x)?x:L??h[0]}r.key&&(r.superimpose=C(e==null?void 0:e.superimpose,y.superimpose,Math.min(...y.superimpose))),r.level&&(r.level=q(r.level,0,Z)),i({type:"update",lightCone:r})},[e,u,i]),f=d.useCallback(()=>{i({type:"reset"})},[]);return d.useEffect(()=>{t==="new"&&i({type:"reset"})},[t]),n(d.Suspense,{fallback:!1,children:l(b,{bgt:"dark",children:[n(te,{title:"Light Cone Editor"}),l(w,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(p,{container:!0,spacing:1,columns:{xs:1,md:2},children:[n(p,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:n(pe,{lcKey:(e==null?void 0:e.key)??"",setLCKey:r=>m({key:r}),label:e!=null&&e.key?"":o("editor.unknownLightCone")})}),n(p,{item:!0,xs:!0,md:"auto",display:"flex",children:n(me,{superimpose:e==null?void 0:e.superimpose,setSuperimposition:r=>m({superimpose:r}),disabled:!e})})]}),l(p,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[n(p,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:n(ge,{level:e==null?void 0:e.level,ascension:e==null?void 0:e.ascension,setLevelAscension:(r,y)=>{m({level:r,ascension:y})},disabled:!e})}),n(p,{item:!0,xs:1,display:"flex",gap:1,children:n(b,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:n(d.Suspense,{fallback:n(v,{width:"60%"}),children:l(g,{color:"text.secondary",align:"center",children:["Ascension ",(e==null?void 0:e.ascension)||0]})})})}),n(p,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:n(ne,{locKey:(e==null?void 0:e.location)??"",setLocKey:r=>m({location:r})})})]}),n(p,{children:n(J,{startIcon:n(de,{}),onClick:()=>{a.lightCones.new(e),f()},disabled:!e,color:"primary",children:o`editor.btnAdd`})})]})]})})}function pe({lcKey:t,setLCKey:o,label:a=""}){const{t:s}=D(["lightCone","lightConeNames_gen"]);a=a||s("lightCone:autocompleteLabels.key");const c=d.useMemo(()=>O.map(i=>({key:i,label:s(`lightConeNames_gen:${i}`)})),[s]),e=d.useCallback(i=>o(i??""),[o]);return n(d.Suspense,{fallback:n(v,{variant:"text",width:100}),children:n(Q,{options:c,valueKey:t,onChange:e,toImg:()=>n($,{children:" "}),label:a})})}function me({superimpose:t,setSuperimposition:o,disabled:a=!1}){return n(K,{title:t?`Superimposition ${t}`:"Superimposition 1",color:"primary",disabled:a,fullWidth:!0,children:X.map(s=>l(M,{selected:t===s,disabled:t===s,onClick:()=>o(s),children:["Superimposition ",s]},s))})}function ge({level:t,ascension:o,setLevelAscension:a,disabled:s=!1}){return n(K,{title:t?`Lv. ${t}/${S[o]}`:"Select Level",color:"primary",disabled:s,fullWidth:!0,children:Y.map(([c,e])=>n(M,{selected:t===c&&o===e,disabled:t===c&&o===e,onClick:()=>a(c,e),children:c===S[e]?`Lv. ${c}`:`Lv. ${c}/${S[e]}`},`${c}/${e}`))})}const fe={xs:1,sm:2,md:3,lg:3,xl:4},ye={xs:10,sm:12,md:24,lg:24,xl:24};function xe(){const{database:t}=A(),[o,a]=E(),s=()=>({sortType:ae[0],ascending:!1,rarity:[...V],path:[...ee]}),{sortType:c,ascending:e}=s();d.useEffect(()=>t.lightCones.followAny(a),[t,a]);const{lightConeIds:i,totalLightConeNum:u}=d.useMemo(()=>{const h=t.lightCones.values,L=h.length,N=h.sort(re(le[c]??[],e,ie())).map(T=>T.id);return o&&{lightConeIds:N,totalLightConeNum:L}},[t,o,c,e]),m=se(),f=i.length!==u?`${i.length}/${u}`:`${u}`,{numShow:r,setTriggerElement:y}=oe(ye[m],i.length),C=d.useMemo(()=>i.slice(0,r),[i,r]),x={numShowing:C.length,total:f};return l($,{children:[n(b,{bgt:"dark",children:n(w,{children:n(j,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:l(g,{color:"text.secondary",children:["Showing ",n("b",{children:x.numShowing})," out of"," ",x.total," Items"]})})})}),l(d.Suspense,{fallback:n(v,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[n(p,{container:!0,spacing:1,columns:fe,children:C.map(h=>n(p,{item:!0,xs:1,children:n(ce,{lightConeId:h})},h))}),i.length!==C.length&&n(v,{ref:h=>{h&&y(h)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function ve(){return l(j,{display:"flex",flexDirection:"column",gap:1,my:1,children:[n(he,{}),n(xe,{})]})}export{ve as default};
