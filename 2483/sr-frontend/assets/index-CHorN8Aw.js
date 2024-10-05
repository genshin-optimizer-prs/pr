import{n as e,a1 as Y,a2 as Z,a3 as V,a4 as ee,a5 as te,a6 as ne,a7 as se,a8 as oe,c as j,j as H,m as D,$,q as l,E as x,I as E,H as y,a9 as M,aa as z,X as T,ab as K,ac as W,Y as S,L as A,r as p,ad as re,N as F,O as ie,J as ae,W as le,G as C,ae as ce,F as U,af as de,ag as he,ah as pe,ai as ue,aj as me}from"./index-D1SXibeW.js";import{u as P,C as ge}from"./useForceUpdate-MgnQu33w.js";import{M as O,D as q}from"./DropdownButton-CwajimUt.js";import{T as fe,c as ye,d as xe,S as Ce,l as be,b as J,E as ve,D as Q,G as we}from"./LocationAutocomplete-BdSMh3Du.js";import{u as ke,a as Se}from"./useInfScroll-CeNM1eRk.js";import{d as Le}from"./Add-Busgl-3N.js";import{s as De,l as Ie}from"./index-CeiC_i-S.js";import{g as $e}from"./index-BUT__a0P.js";function Me(n,o,i,r=[]){return(a,h)=>{for(const c of n){let u=0;const t=i[c],d=t(a),m=t(h);if(typeof d=="string"&&typeof m=="string"?u=d.localeCompare(m):u=m-d,u!==0)return r.includes(c)?u:(o?-1:1)*u}return 0}}function Ae({pathKey:n,iconProps:o={}}){switch(n){case"Abundance":return e(se,{...o});case"Destruction":return e(ne,{...o});case"Erudition":return e(te,{...o});case"Harmony":return e(ee,{...o});case"Nihility":return e(V,{...o});case"Preservation":return e(Z,{...o});case"TheHunt":return e(Y,{...o})}}const Ne=["level","name","rarity"];function Ke(){return{level:n=>n.level*(n.ascension+1),name:n=>`lightConeNames_gen:${n.key}`,rarity:n=>oe.lightCone[n.key].rarity}}const je={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]},B=j(H.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),He=j(H.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Te=j(H.jsx("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");function _e({lcKey:n}){return e(fe,{ns:"lightConeNames_gen",key18:n})}function ze({lightCone:n,onClick:o,onEdit:i,onDelete:r,onLockToggle:a,canEquip:h=!1,setLocation:c,extraButtons:u}){const{t}=D(["lightCone","sheet_gen"]),{key:d,level:m,ascension:b,superimpose:L,location:f="",lock:g}=n,v=De(Ie(n)),w=$e(d);return e(p.Suspense,{fallback:e($,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:l(A,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[l(x,{className:`grad-${w.rarity}star`,sx:{position:"relative",width:"100%"},children:[!o&&!!a&&e(E,{color:"primary",onClick:a,sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:g?e(ye,{}):e(xe,{})}),l(x,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[l(x,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e(Ae,{iconProps:{fontSize:"inherit"},pathKey:w.path}),e(y,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:e("strong",{children:e(_e,{lcKey:d})})})]}),l(y,{component:"span",variant:"h5",children:[t("sheet_gen:lvl")," ",m]}),l(y,{component:"span",variant:"h5",color:"text.secondary",children:["/",M[b]]}),l(y,{variant:"h6",children:[t("sheet_gen:superimpose")," ",L]}),e(Ce,{stars:w.rarity,colored:!0})]}),e(x,{sx:{height:"100%",position:"absolute",right:0,top:0},children:e(x,{component:z?z:"img",alt:"Light Cone Image",src:be(d,"icon"),sx:{width:"auto",height:"90%",float:"right",marginBottom:"5%",marginTop:"5%",marginRight:"5%"}})})]}),l(T,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:"0!important",width:"100%"},children:[l(y,{children:["HP: ",v.compute(K.base.hp.with("sheet","lightCone")).val]}),l(y,{children:["ATK: ",v.compute(K.base.atk.with("sheet","lightCone")).val]}),l(y,{children:["DEF: ",v.compute(K.base.def.with("sheet","lightCone")).val]})]}),l(x,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[e(x,{sx:{flexGrow:1},children:h&&c?e(J,{locKey:f,setLocKey:c,getOptionDisabled:s=>!s.key,disableClearable:!0}):e(y,{children:f})}),l(x,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!i&&e(W,{title:e(y,{children:t("edit")}),placement:"top",arrow:!0,children:e(S,{color:"info",size:"small",onClick:i,children:e(ve,{})})}),!!r&&e(W,{title:g?t("cantDeleteLock"):"",placement:"top",children:e("span",{children:e(S,{color:"error",size:"small",onClick:r,disabled:!!f||g,sx:{top:"1px"},children:e(Q,{})})})}),u]})]})]})})}function We(n,o){const r=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...n,...o.lightCone}}})();return r&&re(r)}const G={superimpose:[1,2,3,4,5]};function Be({lightConeIdToEdit:n="new",cancelEdit:o}){const{t:i}=D(["lightCone","common"]),{database:r}=F(),[a,h]=P();p.useEffect(()=>r.lightCones.followAny(h),[r,h]);const[c,u]=p.useState(!1);p.useEffect(()=>{n==="new"&&(u(!0),d({type:"reset"}));const s=n&&a&&r.lightCones.get(n);s&&(u(!0),d({type:"overwrite",lightCone:ie(s)}))},[n,r,a]);const[t,d]=p.useReducer(We,void 0),m=t?G:void 0,{prev:b,prevEditType:L}=p.useMemo(()=>{const s=a&&n&&r.lightCones.get(n);return s?{prev:s,prevEditType:"edit"}:{prev:void 0,prevEditType:""}},[n,r,a]),f=p.useCallback(s=>{const k=s.key?G:m;function N(I,_,X){return I&&_.includes(I)?I:X??_[0]}s.key&&(s.superimpose=N(t==null?void 0:t.superimpose,k.superimpose,Math.min(...k.superimpose))),s.level&&(s.level=ae(s.level,0,pe)),d({type:"update",lightCone:s})},[t,m,d]),g=p.useCallback(()=>{o==null||o(),d({type:"reset"})},[o,d]),v=p.useCallback(s=>{if(!n&&t&&!window.confirm(i("editor.clearPrompt"))){s==null||s.preventDefault();return}u(!1),g()},[i,n,t,u,g]),w=n!=="new"&&n||(b==null?void 0:b.id);return e(p.Suspense,{fallback:!1,children:e(le,{open:c,onClose:v,children:l(A,{bgt:"dark",children:[e(ge,{title:"Light Cone Editor",action:e(E,{onClick:v,children:e(He,{})})}),l(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(C,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(C,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(Ge,{lcKey:(t==null?void 0:t.key)??"",setLCKey:s=>f({key:s}),label:t!=null&&t.key?"":i("editor.unknownLightCone")})}),e(C,{item:!0,xs:!0,md:"auto",display:"flex",children:e(Re,{superimpose:(t==null?void 0:t.superimpose)??1,setSuperimposition:s=>f({superimpose:s}),disabled:!t})})]}),l(C,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(C,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(Ee,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(s,k)=>{f({level:s,ascension:k})},disabled:!t})}),e(C,{item:!0,xs:1,display:"flex",gap:1,children:e(A,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(p.Suspense,{fallback:e($,{width:"60%"}),children:l(y,{color:"text.secondary",align:"center",children:[i("editor.ascension")," ",(t==null?void 0:t.ascension)||0]})})})}),e(C,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(J,{locKey:(t==null?void 0:t.location)??"",setLocKey:s=>f({location:s})})})]}),l(x,{display:"flex",gap:2,children:[L==="edit"?e(S,{startIcon:e(B,{}),onClick:()=>{t&&r.lightCones.set(b.id,t),g()},disabled:!t,color:"primary",children:i("editor.btnSave")}):e(S,{startIcon:e(B,{}),onClick:()=>{r.lightCones.new(t),g()},disabled:!t,color:"primary",children:i("editor.btnAdd")}),b&&L!=="edit"&&e(S,{startIcon:e(Te,{}),onClick:()=>{t&&r.lightCones.set(b.id,t),g()},disabled:!t,color:"success",children:i("editor.btnUpdate")}),!!w&&e(S,{startIcon:e(Q,{}),onClick:()=>{window.confirm(i("editor.confirmDelete"))&&(r.lightCones.remove(w),g())},disabled:!t,color:"error",sx:{top:"2px"},children:i("common:delete")})]})]})]})})})}function Ge({lcKey:n,setLCKey:o,label:i=""}){const{t:r}=D(["lightCone","lightConeNames_gen"]);i=i||r("editor.lightConeName");const a=p.useMemo(()=>ce.map(c=>({key:c,label:r(`lightConeNames_gen:${c}`)})),[r]),h=p.useCallback(c=>o(c??""),[o]);return e(p.Suspense,{fallback:e($,{variant:"text",width:100}),children:e(we,{options:a,valueKey:n,onChange:h,toImg:()=>e(U,{children:" "}),label:i})})}function Re({superimpose:n,setSuperimposition:o,disabled:i=!1}){const{t:r}=D("sheet_gen");return e(q,{title:`${r("superimpose")} ${n}`,color:"primary",disabled:i,fullWidth:!0,children:de.map(a=>l(O,{selected:n===a,disabled:n===a,onClick:()=>o(a),children:[r("superimpose")," ",a]},a))})}function Ee({level:n,ascension:o,setLevelAscension:i,disabled:r=!1}){const{t:a}=D(["sheet_gen","common"]);return e(q,{title:n?`${a("lvl")} ${n}/${M[o]}`:a("common:selectlevel"),color:"primary",disabled:r,fullWidth:!0,children:he.map(([h,c])=>e(O,{selected:n===h&&o===c,disabled:n===h&&o===c,onClick:()=>i(h,c),children:h===M[c]?`${a("lvl")} ${h}`:`${a("lvl")} ${h}/${M[c]}`},`${h}/${c}`))})}const R={xs:1,sm:2,md:3,lg:3,xl:4},Fe={xs:10,sm:12,md:24,lg:24,xl:24};function Ue({onAdd:n,onEdit:o}){const{t:i}=D("lightCone"),{database:r}=F(),[a,h]=P(),c=()=>({sortType:Ne[0],ascending:!1,rarity:[...ue],path:[...me]}),{sortType:u,ascending:t}=c();p.useEffect(()=>r.lightCones.followAny(h),[r,h]);const{lightConeIds:d,totalLightConeNum:m}=p.useMemo(()=>{const s=r.lightCones.values,k=s.length,N=s.sort(Me(je[u]??[],t,Ke())).map(I=>I.id);return a&&{lightConeIds:N,totalLightConeNum:k}},[r,a,u,t]),b=ke(),L=d.length!==m?`${d.length}/${m}`:`${m}`,{numShow:f,setTriggerElement:g}=Se(Fe[b],d.length),v=p.useMemo(()=>d.slice(0,f),[d,f]),w={numShowing:v.length,total:L};return l(U,{children:[e(A,{bgt:"dark",children:e(T,{children:e(x,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:l(y,{color:"text.secondary",children:["Showing ",e("b",{children:w.numShowing})," out of"," ",w.total," Items"]})})})}),e(C,{container:!0,columns:R,spacing:1,children:e(C,{item:!0,xs:!0,children:e(S,{fullWidth:!0,onClick:n,color:"info",startIcon:e(Le,{}),children:i("addNew")})})}),l(p.Suspense,{fallback:e($,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(C,{container:!0,columns:R,spacing:1,children:v.map(s=>e(C,{item:!0,xs:1,children:e(ze,{lightCone:r.lightCones.get(s),onEdit:()=>o==null?void 0:o(s),onDelete:()=>r.lightCones.remove(s),setLocation:k=>r.lightCones.set(s,{location:k}),canEquip:!0})},s))}),d.length!==v.length&&e($,{ref:s=>{s&&g(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function Ve(){const[n,o]=p.useState("");return l(x,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(Be,{lightConeIdToEdit:n,cancelEdit:()=>o("")}),e(Ue,{onAdd:()=>o("new"),onEdit:o})]})}export{Ve as default};
