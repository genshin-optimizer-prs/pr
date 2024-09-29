import{a1 as H,n as e,q as a,H as g,a2 as $,X as A,L as v,a3 as R,m as K,N as T,r as c,O as j,J as U,W as q,I as J,G as m,$ as k,Y as W,a4 as O,F as P,a5 as Q,a6 as M,a7 as X,a8 as Y,E as B,a9 as z,aa as Z}from"./index-DV9ldC64.js";import{u as E,C as V}from"./useForceUpdate-DshY8Wfy.js";import{M as F,D as G}from"./DropdownButton-BhVR0y1r.js";import{d as ee,b as te,G as ne}from"./LocationAutocomplete-DMK_2skm.js";import{d as _}from"./Add-D4MWjf_8.js";import{u as oe,a as se}from"./useInfScroll-DZYWsNSl.js";import{s as re,l as ie}from"./index-ByCNfeMS.js";import{u as ae}from"./useLightCone-BSzMBUOo.js";function le(n,o,s,r=[]){return(l,d)=>{for(const p of n){let h=0;const t=s[p],u=t(l),y=t(d);if(typeof u=="string"&&typeof y=="string"?h=u.localeCompare(y):h=y-u,h!==0)return r.includes(p)?h:(o?-1:1)*h}return 0}}const ce=["level","name","rarity"];function de(){return{level:n=>n.level*(n.ascension+1),name:n=>`lightConeNames_gen:${n.key}`,rarity:n=>H.lightCone[n.key].rarity}}const ue={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function he({lightConeId:n}){const o=ae(n),s=re(ie(o));return o?e(v,{children:a(A,{children:[a(g,{children:["Key: ",o.key]}),a(g,{children:["Level: ",o.level]}),a(g,{children:["Ascension: ",o.ascension]}),a(g,{children:["Superimpose: ",o.superimpose]}),a(g,{children:["ATK: ",s==null?void 0:s.compute($.base.atk.with("sheet","lightCone")).val]}),a(g,{children:["HP: ",s==null?void 0:s.compute($.base.hp.with("sheet","lightCone")).val]}),a(g,{children:["DEF: ",s==null?void 0:s.compute($.base.def.with("sheet","lightCone")).val]})]})}):null}function pe(n,o){const r=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...n,...o.lightCone}}})();return r&&R(r)}const I={superimpose:[1,2,3,4,5]};function me({lightConeIdToEdit:n="new",cancelEdit:o}){const{t:s}=K("lightCone"),{database:r}=T(),[l,d]=E();c.useEffect(()=>r.lightCones.followAny(d),[r,d]);const[p,h]=c.useState(!1);c.useEffect(()=>{n==="new"&&(h(!0),u({type:"reset"}));const i=n&&l&&r.lightCones.get(n);i&&(h(!0),u({type:"overwrite",lightCone:j(i)}))},[n,r,l]);const[t,u]=c.useReducer(pe,void 0),y=t?I:void 0,x=c.useCallback(i=>{const C=i.key?I:y;function f(w,S,D){return w&&S.includes(w)?w:D??S[0]}i.key&&(i.superimpose=f(t==null?void 0:t.superimpose,C.superimpose,Math.min(...C.superimpose))),i.level&&(i.level=U(i.level,0,Y)),u({type:"update",lightCone:i})},[t,y,u]),b=c.useCallback(()=>{o==null||o(),u({type:"reset"})},[o,u]),L=c.useCallback(i=>{if(!n&&t&&!window.confirm(s`editor.clearPrompt`)){i==null||i.preventDefault();return}h(!1),b()},[s,n,t,h,b]);return e(c.Suspense,{fallback:!1,children:e(q,{open:p,onClose:L,children:a(v,{bgt:"dark",children:[e(V,{title:"Light Cone Editor",action:e(J,{onClick:L,children:e(ee,{})})}),a(A,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(m,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(m,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(fe,{lcKey:(t==null?void 0:t.key)??"",setLCKey:i=>x({key:i}),label:t!=null&&t.key?"":s("editor.unknownLightCone")})}),e(m,{item:!0,xs:!0,md:"auto",display:"flex",children:e(ge,{superimpose:t==null?void 0:t.superimpose,setSuperimposition:i=>x({superimpose:i}),disabled:!t})})]}),a(m,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(m,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(ye,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(i,C)=>{x({level:i,ascension:C})},disabled:!t})}),e(m,{item:!0,xs:1,display:"flex",gap:1,children:e(v,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(c.Suspense,{fallback:e(k,{width:"60%"}),children:a(g,{color:"text.secondary",align:"center",children:["Ascension ",(t==null?void 0:t.ascension)||0]})})})}),e(m,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(te,{locKey:(t==null?void 0:t.location)??"",setLocKey:i=>x({location:i})})})]}),e(m,{children:e(W,{startIcon:e(_,{}),onClick:()=>{r.lightCones.new(t),b()},disabled:!t,color:"primary",children:s`editor.btnAdd`})})]})]})})})}function fe({lcKey:n,setLCKey:o,label:s=""}){const{t:r}=K(["lightCone","lightConeNames_gen"]);s=s||r("lightCone:autocompleteLabels.key");const l=c.useMemo(()=>O.map(p=>({key:p,label:r(`lightConeNames_gen:${p}`)})),[r]),d=c.useCallback(p=>o(p??""),[o]);return e(c.Suspense,{fallback:e(k,{variant:"text",width:100}),children:e(ne,{options:l,valueKey:n,onChange:d,toImg:()=>e(P,{children:" "}),label:s})})}function ge({superimpose:n,setSuperimposition:o,disabled:s=!1}){return e(G,{title:n?`Superimposition ${n}`:"Superimposition 1",color:"primary",disabled:s,fullWidth:!0,children:Q.map(r=>a(F,{selected:n===r,disabled:n===r,onClick:()=>o(r),children:["Superimposition ",r]},r))})}function ye({level:n,ascension:o,setLevelAscension:s,disabled:r=!1}){return e(G,{title:n?`Lv. ${n}/${M[o]}`:"Select Level",color:"primary",disabled:r,fullWidth:!0,children:X.map(([l,d])=>e(F,{selected:n===l&&o===d,disabled:n===l&&o===d,onClick:()=>s(l,d),children:l===M[d]?`Lv. ${l}`:`Lv. ${l}/${M[d]}`},`${l}/${d}`))})}const N={xs:1,sm:2,md:3,lg:3,xl:4},Ce={xs:10,sm:12,md:24,lg:24,xl:24};function xe({onAdd:n}){const{t:o}=K("lightCone"),{database:s}=T(),[r,l]=E(),d=()=>({sortType:ce[0],ascending:!1,rarity:[...z],path:[...Z]}),{sortType:p,ascending:h}=d();c.useEffect(()=>s.lightCones.followAny(l),[s,l]);const{lightConeIds:t,totalLightConeNum:u}=c.useMemo(()=>{const f=s.lightCones.values,w=f.length,S=f.sort(le(ue[p]??[],h,de())).map(D=>D.id);return r&&{lightConeIds:S,totalLightConeNum:w}},[s,r,p,h]),y=oe(),x=t.length!==u?`${t.length}/${u}`:`${u}`,{numShow:b,setTriggerElement:L}=se(Ce[y],t.length),i=c.useMemo(()=>t.slice(0,b),[t,b]),C={numShowing:i.length,total:x};return a(P,{children:[e(v,{bgt:"dark",children:e(A,{children:e(B,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(g,{color:"text.secondary",children:["Showing ",e("b",{children:C.numShowing})," out of"," ",C.total," Items"]})})})}),e(m,{container:!0,columns:N,spacing:1,children:e(m,{item:!0,xs:!0,children:e(W,{fullWidth:!0,onClick:n,color:"info",startIcon:e(_,{}),children:o`addNew`})})}),a(c.Suspense,{fallback:e(k,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(m,{container:!0,columns:N,spacing:1,children:i.map(f=>e(m,{item:!0,xs:1,children:e(he,{lightConeId:f})},f))}),t.length!==i.length&&e(k,{ref:f=>{f&&L(f)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function Me(){const[n,o]=c.useState("");return a(B,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(me,{lightConeIdToEdit:n,cancelEdit:()=>o("")}),e(xe,{onAdd:()=>o("new")})]})}export{Me as default};
