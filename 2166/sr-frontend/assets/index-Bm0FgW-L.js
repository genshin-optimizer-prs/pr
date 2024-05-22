import{at as j,au as B,av as F,aw as H,ax as P,ay as R,az as G,J as n,T as l,a6 as g,ah as w,a8 as b,c as W,j as _,aA as z,L as D,ab as A,ac as $,r as d,ad as U,a7 as q,ag as J,a5 as p,an as v,al as O,aB as Q,aC as X,as as M,aD as Y,N as K,O as E,aE as S,aF as Z,aG as V,ap as ee,aq as te,a3 as I,aH as ne,aI as se}from"./index-DuCsX2lC.js";import{L as oe}from"./LocationAutocomplete-CQsZoDWc.js";function ae(t,o,r,s=[]){return(c,e)=>{for(const i of t){let u=0;const m=r[i],f=m(c),a=m(e);if(typeof f=="string"&&typeof a=="string"?u=f.localeCompare(a):u=a-f,u!==0)return s.includes(i)?u:(o?-1:1)*u}return 0}}const re=["level","name","rarity"];function ie(){return{level:t=>t.level*(t.ascension+1),name:t=>`lightConeNames_gen:${t.key}`,rarity:t=>j.lightCone[t.key].rarity}}const le={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function ce({lightConeId:t}){const o=B(t),r=F(H,{member:"member0",et:"self"}),s=P(R("member0",...G(o)));return o?n(b,{children:l(w,{children:[l(g,{children:["Key: ",o.key]}),l(g,{children:["Level: ",o.level]}),l(g,{children:["Ascension: ",o.ascension]}),l(g,{children:["Superimpose: ",o.superimpose]}),l(g,{children:["ATK: ",s==null?void 0:s.compute(r.base.atk.src("lightCone")).val]}),l(g,{children:["HP: ",s==null?void 0:s.compute(r.base.hp.src("lightCone")).val]}),l(g,{children:["DEF: ",s==null?void 0:s.compute(r.base.def.src("lightCone")).val]})]})}):null}const de=W(_.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function ue(t,o){const s=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...t,...o.lightCone}}})();return s&&z(s)}const k={superimpose:[1,2,3,4,5]};function he({lightConeIdToEdit:t="new"}){const{t:o}=D("lightCone"),{database:r}=A(),[s,c]=$();d.useEffect(()=>r.lightCones.followAny(c),[r,c]),d.useEffect(()=>{t==="new"&&i({type:"reset"});const a=t&&s&&r.lightCones.get(t);a&&i({type:"overwrite",lightCone:U(a)})},[t,r,s]);const[e,i]=d.useReducer(ue,void 0),u=e?k:void 0,m=d.useCallback(a=>{const y=a.key?k:u;function C(x,h,L){return x&&h.includes(x)?x:L??h[0]}a.key&&(a.superimpose=C(e==null?void 0:e.superimpose,y.superimpose,Math.min(...y.superimpose))),a.level&&(a.level=q(a.level,0,V)),i({type:"update",lightCone:a})},[e,u,i]),f=d.useCallback(()=>{i({type:"reset"})},[]);return d.useEffect(()=>{t==="new"&&i({type:"reset"})},[t]),n(d.Suspense,{fallback:!1,children:l(b,{bgt:"dark",children:[n(J,{title:"Light Cone Editor"}),l(w,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(p,{container:!0,spacing:1,columns:{xs:1,md:2},children:[n(p,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:n(pe,{lcKey:(e==null?void 0:e.key)??"",setLCKey:a=>m({key:a}),label:e!=null&&e.key?"":o("editor.unknownLightCone")})}),n(p,{item:!0,xs:!0,md:"auto",display:"flex",children:n(me,{superimpose:e==null?void 0:e.superimpose,setSuperimposition:a=>m({superimpose:a}),disabled:!e})})]}),l(p,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[n(p,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:n(ge,{level:e==null?void 0:e.level,ascension:e==null?void 0:e.ascension,setLevelAscension:(a,y)=>{m({level:a,ascension:y})},disabled:!e})}),n(p,{item:!0,xs:1,display:"flex",gap:1,children:n(b,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:n(d.Suspense,{fallback:n(v,{width:"60%"}),children:l(g,{color:"text.secondary",align:"center",children:["Ascension ",(e==null?void 0:e.ascension)||0]})})})}),n(p,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:n(oe,{locKey:(e==null?void 0:e.location)??"",setLocKey:a=>m({location:a})})})]}),n(p,{children:n(O,{startIcon:n(de,{}),onClick:()=>{r.lightCones.new(e),f()},disabled:!e,color:"primary",children:o`editor.btnAdd`})})]})]})})}function pe({lcKey:t,setLCKey:o,label:r=""}){const{t:s}=D(["lightCone","lightConeNames_gen"]);r=r||s("lightCone:autocompleteLabels.key");const c=d.useMemo(()=>Q.map(i=>({key:i,label:s(`lightConeNames_gen:${i}`)})),[s]),e=d.useCallback(i=>o(i??""),[o]);return n(d.Suspense,{fallback:n(v,{variant:"text",width:100}),children:n(X,{options:c,valueKey:t,onChange:e,toImg:()=>n(M,{children:" "}),label:r})})}function me({superimpose:t,setSuperimposition:o,disabled:r=!1}){return n(E,{title:t?`Superimposition ${t}`:"Superimposition 1",color:"primary",disabled:r,fullWidth:!0,children:Y.map(s=>l(K,{selected:t===s,disabled:t===s,onClick:()=>o(s),children:["Superimposition ",s]},s))})}function ge({level:t,ascension:o,setLevelAscension:r,disabled:s=!1}){return n(E,{title:t?`Lv. ${t}/${S[o]}`:"Select Level",color:"primary",disabled:s,fullWidth:!0,children:Z.map(([c,e])=>n(K,{selected:t===c&&o===e,disabled:t===c&&o===e,onClick:()=>r(c,e),children:c===S[e]?`Lv. ${c}`:`Lv. ${c}/${S[e]}`},`${c}/${e}`))})}const fe={xs:1,sm:2,md:3,lg:3,xl:4},ye={xs:10,sm:12,md:24,lg:24,xl:24};function xe(){const{database:t}=A(),[o,r]=$(),s=()=>({sortType:re[0],ascending:!1,rarity:[...ne],path:[...se]}),{sortType:c,ascending:e}=s();d.useEffect(()=>t.lightCones.followAny(r),[t,r]);const{lightConeIds:i,totalLightConeNum:u}=d.useMemo(()=>{const h=t.lightCones.values,L=h.length,N=h.sort(ae(le[c]??[],e,ie())).map(T=>T.id);return o&&{lightConeIds:N,totalLightConeNum:L}},[t,o,c,e]),m=ee(),f=i.length!==u?`${i.length}/${u}`:`${u}`,{numShow:a,setTriggerElement:y}=te(ye[m],i.length),C=d.useMemo(()=>i.slice(0,a),[i,a]),x={numShowing:C.length,total:f};return l(M,{children:[n(b,{bgt:"dark",children:n(w,{children:n(I,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:l(g,{color:"text.secondary",children:["Showing ",n("b",{children:x.numShowing})," out of"," ",x.total," Items"]})})})}),l(d.Suspense,{fallback:n(v,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[n(p,{container:!0,spacing:1,columns:fe,children:C.map(h=>n(p,{item:!0,xs:1,children:n(ce,{lightConeId:h})},h))}),i.length!==C.length&&n(v,{ref:h=>{h&&y(h)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function ve(){return l(I,{display:"flex",flexDirection:"column",gap:1,my:1,children:[n(he,{}),n(xe,{})]})}export{ve as default};
