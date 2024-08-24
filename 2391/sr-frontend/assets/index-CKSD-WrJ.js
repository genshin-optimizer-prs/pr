import{ag as E,ah as F,ai as R,B as e,K as a,Z as g,ab as M,a1 as v,aj as H,D as K,a4 as T,r as c,a5 as U,$ as q,aa as Q,I as Y,Y as m,ae as k,ac as N,ak as Z,G as W,al as z,am as $,an as J,ao as O,W as B,ap as X,aq as V}from"./index-DVAUOw80.js";import{u as P,C as ee}from"./useForceUpdate-BmxkpuZI.js";import{M as G,D as _}from"./DropdownButton-N2FHcrbb.js";import{d as te,L as ne,G as oe}from"./LocationAutocomplete-B3YV2os9.js";import{d as j}from"./Add-rRYUFOle.js";import{u as se,a as re}from"./useInfScroll-BEO1L1mH.js";import{s as ie,w as ae,l as le}from"./index-CysIYDT5.js";import{u as ce}from"./useLightCone-B7uJy1yW.js";function de(o,s,i,n=[]){return(l,d)=>{for(const p of o){let h=0;const t=i[p],u=t(l),y=t(d);if(typeof u=="string"&&typeof y=="string"?h=u.localeCompare(y):h=y-u,h!==0)return n.includes(p)?h:(s?-1:1)*h}return 0}}const ue=["level","name","rarity"];function he(){return{level:o=>o.level*(o.ascension+1),name:o=>`lightConeNames_gen:${o.key}`,rarity:o=>E.lightCone[o.key].rarity}}const pe={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function me({lightConeId:o}){const s=ce(o),i=F(R,{et:"self",src:"0"}),n=ie(ae("0",...le(s)));return s?e(v,{children:a(M,{children:[a(g,{children:["Key: ",s.key]}),a(g,{children:["Level: ",s.level]}),a(g,{children:["Ascension: ",s.ascension]}),a(g,{children:["Superimpose: ",s.superimpose]}),a(g,{children:["ATK: ",n==null?void 0:n.compute(i.base.atk.with("sheet","lightCone")).val]}),a(g,{children:["HP: ",n==null?void 0:n.compute(i.base.hp.with("sheet","lightCone")).val]}),a(g,{children:["DEF: ",n==null?void 0:n.compute(i.base.def.with("sheet","lightCone")).val]})]})}):null}function fe(o,s){const n=(()=>{switch(s.type){case"reset":return;case"overwrite":return s.lightCone;case"update":return{...o,...s.lightCone}}})();return n&&H(n)}const A={superimpose:[1,2,3,4,5]};function ge({lightConeIdToEdit:o="new",cancelEdit:s}){const{t:i}=K("lightCone"),{database:n}=T(),[l,d]=P();c.useEffect(()=>n.lightCones.followAny(d),[n,d]);const[p,h]=c.useState(!1);c.useEffect(()=>{o==="new"&&(h(!0),u({type:"reset"}));const r=o&&l&&n.lightCones.get(o);r&&(h(!0),u({type:"overwrite",lightCone:U(r)}))},[o,n,l]);const[t,u]=c.useReducer(fe,void 0),y=t?A:void 0,x=c.useCallback(r=>{const C=r.key?A:y;function f(w,S,D){return w&&S.includes(w)?w:D??S[0]}r.key&&(r.superimpose=f(t==null?void 0:t.superimpose,C.superimpose,Math.min(...C.superimpose))),r.level&&(r.level=q(r.level,0,O)),u({type:"update",lightCone:r})},[t,y,u]),b=c.useCallback(()=>{s==null||s(),u({type:"reset"})},[s,u]),L=c.useCallback(r=>{if(!o&&t&&!window.confirm(i`editor.clearPrompt`)){r==null||r.preventDefault();return}h(!1),b()},[i,o,t,h,b]);return e(c.Suspense,{fallback:!1,children:e(Q,{open:p,onClose:L,children:a(v,{bgt:"dark",children:[e(ee,{title:"Light Cone Editor",action:e(Y,{onClick:L,children:e(te,{})})}),a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(m,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(m,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(ye,{lcKey:(t==null?void 0:t.key)??"",setLCKey:r=>x({key:r}),label:t!=null&&t.key?"":i("editor.unknownLightCone")})}),e(m,{item:!0,xs:!0,md:"auto",display:"flex",children:e(Ce,{superimpose:t==null?void 0:t.superimpose,setSuperimposition:r=>x({superimpose:r}),disabled:!t})})]}),a(m,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(m,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(xe,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(r,C)=>{x({level:r,ascension:C})},disabled:!t})}),e(m,{item:!0,xs:1,display:"flex",gap:1,children:e(v,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(c.Suspense,{fallback:e(k,{width:"60%"}),children:a(g,{color:"text.secondary",align:"center",children:["Ascension ",(t==null?void 0:t.ascension)||0]})})})}),e(m,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(ne,{locKey:(t==null?void 0:t.location)??"",setLocKey:r=>x({location:r})})})]}),e(m,{children:e(N,{startIcon:e(j,{}),onClick:()=>{n.lightCones.new(t),b()},disabled:!t,color:"primary",children:i`editor.btnAdd`})})]})]})})})}function ye({lcKey:o,setLCKey:s,label:i=""}){const{t:n}=K(["lightCone","lightConeNames_gen"]);i=i||n("lightCone:autocompleteLabels.key");const l=c.useMemo(()=>Z.map(p=>({key:p,label:n(`lightConeNames_gen:${p}`)})),[n]),d=c.useCallback(p=>s(p??""),[s]);return e(c.Suspense,{fallback:e(k,{variant:"text",width:100}),children:e(oe,{options:l,valueKey:o,onChange:d,toImg:()=>e(W,{children:" "}),label:i})})}function Ce({superimpose:o,setSuperimposition:s,disabled:i=!1}){return e(_,{title:o?`Superimposition ${o}`:"Superimposition 1",color:"primary",disabled:i,fullWidth:!0,children:z.map(n=>a(G,{selected:o===n,disabled:o===n,onClick:()=>s(n),children:["Superimposition ",n]},n))})}function xe({level:o,ascension:s,setLevelAscension:i,disabled:n=!1}){return e(_,{title:o?`Lv. ${o}/${$[s]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:J.map(([l,d])=>e(G,{selected:o===l&&s===d,disabled:o===l&&s===d,onClick:()=>i(l,d),children:l===$[d]?`Lv. ${l}`:`Lv. ${l}/${$[d]}`},`${l}/${d}`))})}const I={xs:1,sm:2,md:3,lg:3,xl:4},be={xs:10,sm:12,md:24,lg:24,xl:24};function we({onAdd:o}){const{t:s}=K("lightCone"),{database:i}=T(),[n,l]=P(),d=()=>({sortType:ue[0],ascending:!1,rarity:[...X],path:[...V]}),{sortType:p,ascending:h}=d();c.useEffect(()=>i.lightCones.followAny(l),[i,l]);const{lightConeIds:t,totalLightConeNum:u}=c.useMemo(()=>{const f=i.lightCones.values,w=f.length,S=f.sort(de(pe[p]??[],h,he())).map(D=>D.id);return n&&{lightConeIds:S,totalLightConeNum:w}},[i,n,p,h]),y=se(),x=t.length!==u?`${t.length}/${u}`:`${u}`,{numShow:b,setTriggerElement:L}=re(be[y],t.length),r=c.useMemo(()=>t.slice(0,b),[t,b]),C={numShowing:r.length,total:x};return a(W,{children:[e(v,{bgt:"dark",children:e(M,{children:e(B,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(g,{color:"text.secondary",children:["Showing ",e("b",{children:C.numShowing})," out of"," ",C.total," Items"]})})})}),e(m,{container:!0,columns:I,spacing:1,children:e(m,{item:!0,xs:!0,children:e(N,{fullWidth:!0,onClick:o,color:"info",startIcon:e(j,{}),children:s`addNew`})})}),a(c.Suspense,{fallback:e(k,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(m,{container:!0,columns:I,spacing:1,children:r.map(f=>e(m,{item:!0,xs:1,children:e(me,{lightConeId:f})},f))}),t.length!==r.length&&e(k,{ref:f=>{f&&L(f)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function Ae(){const[o,s]=c.useState("");return a(B,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(ge,{lightConeIdToEdit:o,cancelEdit:()=>s("")}),e(we,{onAdd:()=>s("new")})]})}export{Ae as default};
