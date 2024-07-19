import{av as R,aw as _,ax as j,ay as G,az as U,aA as Q,aB as q,H as e,U as a,a7 as f,al as M,aa as v,aC as z,K as A,ad as N,h as c,ae as J,a8 as O,aj as X,I as Y,ak as Z,a6 as m,aq as k,as as V,an as T,aD as ee,R as te,Q as B,aE as ne,M as P,N as W,aF as $,aG as se,aH as oe,a4 as E,aI as ie,aJ as re}from"./index-DKFR6SgJ.js";import{u as F,a as ae,b as le}from"./useInfScroll-ZOTqeCFf.js";import{d as H}from"./Add-DFERfq4M.js";import{C as ce}from"./CardHeader-BHre0kh1.js";function de(s,o,r,n=[]){return(l,d)=>{for(const p of s){let h=0;const t=r[p],u=t(l),y=t(d);if(typeof u=="string"&&typeof y=="string"?h=u.localeCompare(y):h=y-u,h!==0)return n.includes(p)?h:(o?-1:1)*h}return 0}}const ue=["level","name","rarity"];function he(){return{level:s=>s.level*(s.ascension+1),name:s=>`lightConeNames_gen:${s.key}`,rarity:s=>R.lightCone[s.key].rarity}}const pe={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function me({lightConeId:s}){const o=_(s),r=j(G,{src:"0",et:"self"}),n=U(Q("0",...q(o)));return o?e(v,{children:a(M,{children:[a(f,{children:["Key: ",o.key]}),a(f,{children:["Level: ",o.level]}),a(f,{children:["Ascension: ",o.ascension]}),a(f,{children:["Superimpose: ",o.superimpose]}),a(f,{children:["ATK: ",n==null?void 0:n.compute(r.base.atk.with("sheet","lightCone")).val]}),a(f,{children:["HP: ",n==null?void 0:n.compute(r.base.hp.with("sheet","lightCone")).val]}),a(f,{children:["DEF: ",n==null?void 0:n.compute(r.base.def.with("sheet","lightCone")).val]})]})}):null}function ge(s,o){const n=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...s,...o.lightCone}}})();return n&&z(n)}const K={superimpose:[1,2,3,4,5]};function fe({lightConeIdToEdit:s="new",cancelEdit:o}){const{t:r}=A("lightCone"),{database:n}=N(),[l,d]=F();c.useEffect(()=>n.lightCones.followAny(d),[n,d]);const[p,h]=c.useState(!1);c.useEffect(()=>{s==="new"&&(h(!0),u({type:"reset"}));const i=s&&l&&n.lightCones.get(s);i&&(h(!0),u({type:"overwrite",lightCone:J(i)}))},[s,n,l]);const[t,u]=c.useReducer(ge,void 0),y=t?K:void 0,x=c.useCallback(i=>{const C=i.key?K:y;function g(w,L,D){return w&&L.includes(w)?w:D??L[0]}i.key&&(i.superimpose=g(t==null?void 0:t.superimpose,C.superimpose,Math.min(...C.superimpose))),i.level&&(i.level=O(i.level,0,oe)),u({type:"update",lightCone:i})},[t,y,u]),b=c.useCallback(()=>{o==null||o(),u({type:"reset"})},[o,u]),S=c.useCallback(i=>{if(!s&&t&&!window.confirm(r`editor.clearPrompt`)){i==null||i.preventDefault();return}h(!1),b()},[r,s,t,h,b]);return e(c.Suspense,{fallback:!1,children:e(X,{open:p,onClose:S,children:a(v,{bgt:"dark",children:[e(ce,{title:"Light Cone Editor",action:e(Y,{onClick:S,children:e(Z,{})})}),a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(m,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(m,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(ye,{lcKey:(t==null?void 0:t.key)??"",setLCKey:i=>x({key:i}),label:t!=null&&t.key?"":r("editor.unknownLightCone")})}),e(m,{item:!0,xs:!0,md:"auto",display:"flex",children:e(Ce,{superimpose:t==null?void 0:t.superimpose,setSuperimposition:i=>x({superimpose:i}),disabled:!t})})]}),a(m,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(m,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(xe,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(i,C)=>{x({level:i,ascension:C})},disabled:!t})}),e(m,{item:!0,xs:1,display:"flex",gap:1,children:e(v,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(c.Suspense,{fallback:e(k,{width:"60%"}),children:a(f,{color:"text.secondary",align:"center",children:["Ascension ",(t==null?void 0:t.ascension)||0]})})})}),e(m,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(V,{locKey:(t==null?void 0:t.location)??"",setLocKey:i=>x({location:i})})})]}),e(m,{children:e(T,{startIcon:e(H,{}),onClick:()=>{n.lightCones.new(t),b()},disabled:!t,color:"primary",children:r`editor.btnAdd`})})]})]})})})}function ye({lcKey:s,setLCKey:o,label:r=""}){const{t:n}=A(["lightCone","lightConeNames_gen"]);r=r||n("lightCone:autocompleteLabels.key");const l=c.useMemo(()=>ee.map(p=>({key:p,label:n(`lightConeNames_gen:${p}`)})),[n]),d=c.useCallback(p=>o(p??""),[o]);return e(c.Suspense,{fallback:e(k,{variant:"text",width:100}),children:e(te,{options:l,valueKey:s,onChange:d,toImg:()=>e(B,{children:" "}),label:r})})}function Ce({superimpose:s,setSuperimposition:o,disabled:r=!1}){return e(W,{title:s?`Superimposition ${s}`:"Superimposition 1",color:"primary",disabled:r,fullWidth:!0,children:ne.map(n=>a(P,{selected:s===n,disabled:s===n,onClick:()=>o(n),children:["Superimposition ",n]},n))})}function xe({level:s,ascension:o,setLevelAscension:r,disabled:n=!1}){return e(W,{title:s?`Lv. ${s}/${$[o]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:se.map(([l,d])=>e(P,{selected:s===l&&o===d,disabled:s===l&&o===d,onClick:()=>r(l,d),children:l===$[d]?`Lv. ${l}`:`Lv. ${l}/${$[d]}`},`${l}/${d}`))})}const I={xs:1,sm:2,md:3,lg:3,xl:4},be={xs:10,sm:12,md:24,lg:24,xl:24};function we({onAdd:s}){const{t:o}=A("lightCone"),{database:r}=N(),[n,l]=F(),d=()=>({sortType:ue[0],ascending:!1,rarity:[...ie],path:[...re]}),{sortType:p,ascending:h}=d();c.useEffect(()=>r.lightCones.followAny(l),[r,l]);const{lightConeIds:t,totalLightConeNum:u}=c.useMemo(()=>{const g=r.lightCones.values,w=g.length,L=g.sort(de(pe[p]??[],h,he())).map(D=>D.id);return n&&{lightConeIds:L,totalLightConeNum:w}},[r,n,p,h]),y=ae(),x=t.length!==u?`${t.length}/${u}`:`${u}`,{numShow:b,setTriggerElement:S}=le(be[y],t.length),i=c.useMemo(()=>t.slice(0,b),[t,b]),C={numShowing:i.length,total:x};return a(B,{children:[e(v,{bgt:"dark",children:e(M,{children:e(E,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(f,{color:"text.secondary",children:["Showing ",e("b",{children:C.numShowing})," out of"," ",C.total," Items"]})})})}),e(m,{container:!0,columns:I,spacing:1,children:e(m,{item:!0,xs:!0,children:e(T,{fullWidth:!0,onClick:s,color:"info",startIcon:e(H,{}),children:o`addNew`})})}),a(c.Suspense,{fallback:e(k,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(m,{container:!0,columns:I,spacing:1,children:i.map(g=>e(m,{item:!0,xs:1,children:e(me,{lightConeId:g})},g))}),t.length!==i.length&&e(k,{ref:g=>{g&&S(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function De(){const[s,o]=c.useState("");return a(E,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(fe,{lightConeIdToEdit:s,cancelEdit:()=>o("")}),e(we,{onAdd:()=>o("new")})]})}export{De as default};
