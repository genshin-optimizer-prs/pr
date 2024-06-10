import{aC as G,aD as H,aE as R,aF as j,aG as Q,aH as U,aI as q,Q as e,a1 as a,af as f,as as M,ah as v,aJ as z,T as K,ak as T,h as c,al as J,ag as O,aq as Y,I as Z,ar as X,ae as m,ax as k,az as V,au as N,aK as ee,Z as te,Y as P,aL as ne,V as W,W as B,aM as $,aN as se,aO as oe,ac as E,aP as re,aQ as ie}from"./index-CbecQblm.js";import{u as F,C as ae,a as le,b as ce}from"./useInfScroll-BsvPjHpX.js";import{d as _}from"./Add-CdlGM7LZ.js";function de(s,o,i,n=[]){return(l,d)=>{for(const p of s){let h=0;const t=i[p],u=t(l),y=t(d);if(typeof u=="string"&&typeof y=="string"?h=u.localeCompare(y):h=y-u,h!==0)return n.includes(p)?h:(o?-1:1)*h}return 0}}const ue=["level","name","rarity"];function he(){return{level:s=>s.level*(s.ascension+1),name:s=>`lightConeNames_gen:${s.key}`,rarity:s=>G.lightCone[s.key].rarity}}const pe={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function me({lightConeId:s}){const o=H(s),i=R(j,{member:"member0",et:"self"}),n=Q(U("member0",...q(o)));return o?e(v,{children:a(M,{children:[a(f,{children:["Key: ",o.key]}),a(f,{children:["Level: ",o.level]}),a(f,{children:["Ascension: ",o.ascension]}),a(f,{children:["Superimpose: ",o.superimpose]}),a(f,{children:["ATK: ",n==null?void 0:n.compute(i.base.atk.src("lightCone")).val]}),a(f,{children:["HP: ",n==null?void 0:n.compute(i.base.hp.src("lightCone")).val]}),a(f,{children:["DEF: ",n==null?void 0:n.compute(i.base.def.src("lightCone")).val]})]})}):null}function ge(s,o){const n=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...s,...o.lightCone}}})();return n&&z(n)}const A={superimpose:[1,2,3,4,5]};function fe({lightConeIdToEdit:s="new",cancelEdit:o}){const{t:i}=K("lightCone"),{database:n}=T(),[l,d]=F();c.useEffect(()=>n.lightCones.followAny(d),[n,d]);const[p,h]=c.useState(!1);c.useEffect(()=>{s==="new"&&(h(!0),u({type:"reset"}));const r=s&&l&&n.lightCones.get(s);r&&(h(!0),u({type:"overwrite",lightCone:J(r)}))},[s,n,l]);const[t,u]=c.useReducer(ge,void 0),y=t?A:void 0,x=c.useCallback(r=>{const C=r.key?A:y;function g(L,w,D){return L&&w.includes(L)?L:D??w[0]}r.key&&(r.superimpose=g(t==null?void 0:t.superimpose,C.superimpose,Math.min(...C.superimpose))),r.level&&(r.level=O(r.level,0,oe)),u({type:"update",lightCone:r})},[t,y,u]),b=c.useCallback(()=>{o==null||o(),u({type:"reset"})},[o,u]),S=c.useCallback(r=>{if(!s&&t&&!window.confirm(i`editor.clearPrompt`)){r==null||r.preventDefault();return}h(!1),b()},[i,s,t,h,b]);return e(c.Suspense,{fallback:!1,children:e(Y,{open:p,onClose:S,children:a(v,{bgt:"dark",children:[e(ae,{title:"Light Cone Editor",action:e(Z,{onClick:S,children:e(X,{})})}),a(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(m,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(m,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(ye,{lcKey:(t==null?void 0:t.key)??"",setLCKey:r=>x({key:r}),label:t!=null&&t.key?"":i("editor.unknownLightCone")})}),e(m,{item:!0,xs:!0,md:"auto",display:"flex",children:e(Ce,{superimpose:t==null?void 0:t.superimpose,setSuperimposition:r=>x({superimpose:r}),disabled:!t})})]}),a(m,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(m,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(xe,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(r,C)=>{x({level:r,ascension:C})},disabled:!t})}),e(m,{item:!0,xs:1,display:"flex",gap:1,children:e(v,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(c.Suspense,{fallback:e(k,{width:"60%"}),children:a(f,{color:"text.secondary",align:"center",children:["Ascension ",(t==null?void 0:t.ascension)||0]})})})}),e(m,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(V,{locKey:(t==null?void 0:t.location)??"",setLocKey:r=>x({location:r})})})]}),e(m,{children:e(N,{startIcon:e(_,{}),onClick:()=>{n.lightCones.new(t),b()},disabled:!t,color:"primary",children:i`editor.btnAdd`})})]})]})})})}function ye({lcKey:s,setLCKey:o,label:i=""}){const{t:n}=K(["lightCone","lightConeNames_gen"]);i=i||n("lightCone:autocompleteLabels.key");const l=c.useMemo(()=>ee.map(p=>({key:p,label:n(`lightConeNames_gen:${p}`)})),[n]),d=c.useCallback(p=>o(p??""),[o]);return e(c.Suspense,{fallback:e(k,{variant:"text",width:100}),children:e(te,{options:l,valueKey:s,onChange:d,toImg:()=>e(P,{children:" "}),label:i})})}function Ce({superimpose:s,setSuperimposition:o,disabled:i=!1}){return e(B,{title:s?`Superimposition ${s}`:"Superimposition 1",color:"primary",disabled:i,fullWidth:!0,children:ne.map(n=>a(W,{selected:s===n,disabled:s===n,onClick:()=>o(n),children:["Superimposition ",n]},n))})}function xe({level:s,ascension:o,setLevelAscension:i,disabled:n=!1}){return e(B,{title:s?`Lv. ${s}/${$[o]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:se.map(([l,d])=>e(W,{selected:s===l&&o===d,disabled:s===l&&o===d,onClick:()=>i(l,d),children:l===$[d]?`Lv. ${l}`:`Lv. ${l}/${$[d]}`},`${l}/${d}`))})}const I={xs:1,sm:2,md:3,lg:3,xl:4},be={xs:10,sm:12,md:24,lg:24,xl:24};function Le({onAdd:s}){const{t:o}=K("lightCone"),{database:i}=T(),[n,l]=F(),d=()=>({sortType:ue[0],ascending:!1,rarity:[...re],path:[...ie]}),{sortType:p,ascending:h}=d();c.useEffect(()=>i.lightCones.followAny(l),[i,l]);const{lightConeIds:t,totalLightConeNum:u}=c.useMemo(()=>{const g=i.lightCones.values,L=g.length,w=g.sort(de(pe[p]??[],h,he())).map(D=>D.id);return n&&{lightConeIds:w,totalLightConeNum:L}},[i,n,p,h]),y=le(),x=t.length!==u?`${t.length}/${u}`:`${u}`,{numShow:b,setTriggerElement:S}=ce(be[y],t.length),r=c.useMemo(()=>t.slice(0,b),[t,b]),C={numShowing:r.length,total:x};return a(P,{children:[e(v,{bgt:"dark",children:e(M,{children:e(E,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(f,{color:"text.secondary",children:["Showing ",e("b",{children:C.numShowing})," out of"," ",C.total," Items"]})})})}),e(m,{container:!0,columns:I,spacing:1,children:e(m,{item:!0,xs:!0,children:e(N,{fullWidth:!0,onClick:s,color:"info",startIcon:e(_,{}),children:o`addNew`})})}),a(c.Suspense,{fallback:e(k,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(m,{container:!0,columns:I,spacing:1,children:r.map(g=>e(m,{item:!0,xs:1,children:e(me,{lightConeId:g})},g))}),t.length!==r.length&&e(k,{ref:g=>{g&&S(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function ke(){const[s,o]=c.useState("");return a(E,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(fe,{lightConeIdToEdit:s,cancelEdit:()=>o("")}),e(Le,{onAdd:()=>o("new")})]})}export{ke as default};
