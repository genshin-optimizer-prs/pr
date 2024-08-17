import{ar as j,as as H,at as R,au as G,av as Q,aw as U,ax as z,D as e,Q as a,a3 as f,ah as M,a6 as v,ay as q,F as A,a9 as T,r as c,aa as J,a4 as O,af as X,I as Y,ag as Z,a2 as m,am as k,ao as V,aj as N,az as ee,L as te,K as B,aA as ne,M as F,H as P,aB as $,aC as se,aD as oe,a0 as W,aE as re,aF as ie}from"./index-BkRoKdJy.js";import{u as E,a as ae,b as le}from"./useInfScroll-DbJRbeL7.js";import{d as _}from"./Add-CzkS95EU.js";import{C as ce}from"./CardHeader-DdvH9SiF.js";function de(s,o,i,n=[]){return(l,d)=>{for(const p of s){let h=0;const t=i[p],u=t(l),y=t(d);if(typeof u=="string"&&typeof y=="string"?h=u.localeCompare(y):h=y-u,h!==0)return n.includes(p)?h:(o?-1:1)*h}return 0}}const ue=["level","name","rarity"];function he(){return{level:s=>s.level*(s.ascension+1),name:s=>`lightConeNames_gen:${s.key}`,rarity:s=>j.lightCone[s.key].rarity}}const pe={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function me({lightConeId:s}){const o=H(s),i=R(G,{src:"0",et:"self"}),n=Q(U("0",...z(o)));return o?e(v,{children:a(M,{children:[a(f,{children:["Key: ",o.key]}),a(f,{children:["Level: ",o.level]}),a(f,{children:["Ascension: ",o.ascension]}),a(f,{children:["Superimpose: ",o.superimpose]}),a(f,{children:["ATK: ",n==null?void 0:n.compute(i.base.atk.with("sheet","lightCone")).val]}),a(f,{children:["HP: ",n==null?void 0:n.compute(i.base.hp.with("sheet","lightCone")).val]}),a(f,{children:["DEF: ",n==null?void 0:n.compute(i.base.def.with("sheet","lightCone")).val]})]})}):null}function ge(s,o){const n=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...s,...o.lightCone}}})();return n&&q(n)}const K={superimpose:[1,2,3,4,5]};function fe({lightConeIdToEdit:s="new",cancelEdit:o}){const{t:i}=A("lightCone"),{database:n}=T(),[l,d]=E();c.useEffect(()=>n.lightCones.followAny(d),[n,d]);const[p,h]=c.useState(!1);c.useEffect(()=>{s==="new"&&(h(!0),u({type:"reset"}));const r=s&&l&&n.lightCones.get(s);r&&(h(!0),u({type:"overwrite",lightCone:J(r)}))},[s,n,l]);const[t,u]=c.useReducer(ge,void 0),y=t?K:void 0,x=c.useCallback(r=>{const C=r.key?K:y;function g(w,S,D){return w&&S.includes(w)?w:D??S[0]}r.key&&(r.superimpose=g(t==null?void 0:t.superimpose,C.superimpose,Math.min(...C.superimpose))),r.level&&(r.level=O(r.level,0,oe)),u({type:"update",lightCone:r})},[t,y,u]),b=c.useCallback(()=>{o==null||o(),u({type:"reset"})},[o,u]),L=c.useCallback(r=>{if(!s&&t&&!window.confirm(i`editor.clearPrompt`)){r==null||r.preventDefault();return}h(!1),b()},[i,s,t,h,b]);return e(c.Suspense,{fallback:!1,children:e(X,{open:p,onClose:L,children:a(v,{bgt:"dark",children:[e(ce,{title:"Light Cone Editor",action:e(Y,{onClick:L,children:e(Z,{})})}),a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(m,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(m,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(ye,{lcKey:(t==null?void 0:t.key)??"",setLCKey:r=>x({key:r}),label:t!=null&&t.key?"":i("editor.unknownLightCone")})}),e(m,{item:!0,xs:!0,md:"auto",display:"flex",children:e(Ce,{superimpose:t==null?void 0:t.superimpose,setSuperimposition:r=>x({superimpose:r}),disabled:!t})})]}),a(m,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(m,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(xe,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(r,C)=>{x({level:r,ascension:C})},disabled:!t})}),e(m,{item:!0,xs:1,display:"flex",gap:1,children:e(v,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(c.Suspense,{fallback:e(k,{width:"60%"}),children:a(f,{color:"text.secondary",align:"center",children:["Ascension ",(t==null?void 0:t.ascension)||0]})})})}),e(m,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(V,{locKey:(t==null?void 0:t.location)??"",setLocKey:r=>x({location:r})})})]}),e(m,{children:e(N,{startIcon:e(_,{}),onClick:()=>{n.lightCones.new(t),b()},disabled:!t,color:"primary",children:i`editor.btnAdd`})})]})]})})})}function ye({lcKey:s,setLCKey:o,label:i=""}){const{t:n}=A(["lightCone","lightConeNames_gen"]);i=i||n("lightCone:autocompleteLabels.key");const l=c.useMemo(()=>ee.map(p=>({key:p,label:n(`lightConeNames_gen:${p}`)})),[n]),d=c.useCallback(p=>o(p??""),[o]);return e(c.Suspense,{fallback:e(k,{variant:"text",width:100}),children:e(te,{options:l,valueKey:s,onChange:d,toImg:()=>e(B,{children:" "}),label:i})})}function Ce({superimpose:s,setSuperimposition:o,disabled:i=!1}){return e(P,{title:s?`Superimposition ${s}`:"Superimposition 1",color:"primary",disabled:i,fullWidth:!0,children:ne.map(n=>a(F,{selected:s===n,disabled:s===n,onClick:()=>o(n),children:["Superimposition ",n]},n))})}function xe({level:s,ascension:o,setLevelAscension:i,disabled:n=!1}){return e(P,{title:s?`Lv. ${s}/${$[o]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:se.map(([l,d])=>e(F,{selected:s===l&&o===d,disabled:s===l&&o===d,onClick:()=>i(l,d),children:l===$[d]?`Lv. ${l}`:`Lv. ${l}/${$[d]}`},`${l}/${d}`))})}const I={xs:1,sm:2,md:3,lg:3,xl:4},be={xs:10,sm:12,md:24,lg:24,xl:24};function we({onAdd:s}){const{t:o}=A("lightCone"),{database:i}=T(),[n,l]=E(),d=()=>({sortType:ue[0],ascending:!1,rarity:[...re],path:[...ie]}),{sortType:p,ascending:h}=d();c.useEffect(()=>i.lightCones.followAny(l),[i,l]);const{lightConeIds:t,totalLightConeNum:u}=c.useMemo(()=>{const g=i.lightCones.values,w=g.length,S=g.sort(de(pe[p]??[],h,he())).map(D=>D.id);return n&&{lightConeIds:S,totalLightConeNum:w}},[i,n,p,h]),y=ae(),x=t.length!==u?`${t.length}/${u}`:`${u}`,{numShow:b,setTriggerElement:L}=le(be[y],t.length),r=c.useMemo(()=>t.slice(0,b),[t,b]),C={numShowing:r.length,total:x};return a(B,{children:[e(v,{bgt:"dark",children:e(M,{children:e(W,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(f,{color:"text.secondary",children:["Showing ",e("b",{children:C.numShowing})," out of"," ",C.total," Items"]})})})}),e(m,{container:!0,columns:I,spacing:1,children:e(m,{item:!0,xs:!0,children:e(N,{fullWidth:!0,onClick:s,color:"info",startIcon:e(_,{}),children:o`addNew`})})}),a(c.Suspense,{fallback:e(k,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(m,{container:!0,columns:I,spacing:1,children:r.map(g=>e(m,{item:!0,xs:1,children:e(me,{lightConeId:g})},g))}),t.length!==r.length&&e(k,{ref:g=>{g&&L(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function De(){const[s,o]=c.useState("");return a(W,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(fe,{lightConeIdToEdit:s,cancelEdit:()=>o("")}),e(we,{onAdd:()=>o("new")})]})}export{De as default};
