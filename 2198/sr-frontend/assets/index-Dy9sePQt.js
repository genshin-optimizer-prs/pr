import{ax as j,ay as G,az as H,aA as R,aB as J,aC as U,aD as z,J as e,T as i,a6 as f,aj as M,a8 as v,aE as O,L as A,ab as T,ac as N,r as c,ad as Q,a7 as q,ag as X,ah as Y,I as Z,ai as V,a5 as m,ap as k,ar as ee,an as B,aF as te,aG as ne,aw as P,aH as se,N as W,O as E,aI as $,aJ as oe,aK as re,at as ae,au as ie,a3 as F,aL as le,aM as ce}from"./index-CZZ_hb1W.js";import{d as _}from"./Add-bpU_BsIh.js";function de(s,o,a,n=[]){return(l,d)=>{for(const p of s){let h=0;const t=a[p],u=t(l),y=t(d);if(typeof u=="string"&&typeof y=="string"?h=u.localeCompare(y):h=y-u,h!==0)return n.includes(p)?h:(o?-1:1)*h}return 0}}const ue=["level","name","rarity"];function he(){return{level:s=>s.level*(s.ascension+1),name:s=>`lightConeNames_gen:${s.key}`,rarity:s=>j.lightCone[s.key].rarity}}const pe={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function me({lightConeId:s}){const o=G(s),a=H(R,{member:"member0",et:"self"}),n=J(U("member0",...z(o)));return o?e(v,{children:i(M,{children:[i(f,{children:["Key: ",o.key]}),i(f,{children:["Level: ",o.level]}),i(f,{children:["Ascension: ",o.ascension]}),i(f,{children:["Superimpose: ",o.superimpose]}),i(f,{children:["ATK: ",n==null?void 0:n.compute(a.base.atk.src("lightCone")).val]}),i(f,{children:["HP: ",n==null?void 0:n.compute(a.base.hp.src("lightCone")).val]}),i(f,{children:["DEF: ",n==null?void 0:n.compute(a.base.def.src("lightCone")).val]})]})}):null}function ge(s,o){const n=(()=>{switch(o.type){case"reset":return;case"overwrite":return o.lightCone;case"update":return{...s,...o.lightCone}}})();return n&&O(n)}const K={superimpose:[1,2,3,4,5]};function fe({lightConeIdToEdit:s="new",cancelEdit:o}){const{t:a}=A("lightCone"),{database:n}=T(),[l,d]=N();c.useEffect(()=>n.lightCones.followAny(d),[n,d]);const[p,h]=c.useState(!1);c.useEffect(()=>{s==="new"&&(h(!0),u({type:"reset"}));const r=s&&l&&n.lightCones.get(s);r&&(h(!0),u({type:"overwrite",lightCone:Q(r)}))},[s,n,l]);const[t,u]=c.useReducer(ge,void 0),y=t?K:void 0,x=c.useCallback(r=>{const C=r.key?K:y;function g(L,S,D){return L&&S.includes(L)?L:D??S[0]}r.key&&(r.superimpose=g(t==null?void 0:t.superimpose,C.superimpose,Math.min(...C.superimpose))),r.level&&(r.level=q(r.level,0,re)),u({type:"update",lightCone:r})},[t,y,u]),b=c.useCallback(()=>{o==null||o(),u({type:"reset"})},[o,u]),w=c.useCallback(r=>{if(!s&&t&&!window.confirm(a`editor.clearPrompt`)){r==null||r.preventDefault();return}h(!1),b()},[a,s,t,h,b]);return e(c.Suspense,{fallback:!1,children:e(X,{open:p,onClose:w,children:i(v,{bgt:"dark",children:[e(Y,{title:"Light Cone Editor",action:e(Z,{onClick:w,children:e(V,{})})}),i(M,{sx:{display:"flex",flexDirection:"column",gap:1},children:[i(m,{container:!0,spacing:1,columns:{xs:1,md:2},children:[e(m,{item:!0,xs:1,md:!0,display:"flex",flexDirection:"column",children:e(ye,{lcKey:(t==null?void 0:t.key)??"",setLCKey:r=>x({key:r}),label:t!=null&&t.key?"":a("editor.unknownLightCone")})}),e(m,{item:!0,xs:!0,md:"auto",display:"flex",children:e(Ce,{superimpose:t==null?void 0:t.superimpose,setSuperimposition:r=>x({superimpose:r}),disabled:!t})})]}),i(m,{container:!0,spacing:1,columns:{xs:1,md:4},marginBottom:1,children:[e(m,{item:!0,xs:1,display:"flex",flexDirection:"row",gap:1,children:e(xe,{level:t==null?void 0:t.level,ascension:t==null?void 0:t.ascension,setLevelAscension:(r,C)=>{x({level:r,ascension:C})},disabled:!t})}),e(m,{item:!0,xs:1,display:"flex",gap:1,children:e(v,{bgt:"light",sx:{p:1,flexGrow:1,alignContent:"center"},children:e(c.Suspense,{fallback:e(k,{width:"60%"}),children:i(f,{color:"text.secondary",align:"center",children:["Ascension ",(t==null?void 0:t.ascension)||0]})})})}),e(m,{item:!0,xs:1,md:2,display:"flex",flexDirection:"column",gap:1,children:e(ee,{locKey:(t==null?void 0:t.location)??"",setLocKey:r=>x({location:r})})})]}),e(m,{children:e(B,{startIcon:e(_,{}),onClick:()=>{n.lightCones.new(t),b()},disabled:!t,color:"primary",children:a`editor.btnAdd`})})]})]})})})}function ye({lcKey:s,setLCKey:o,label:a=""}){const{t:n}=A(["lightCone","lightConeNames_gen"]);a=a||n("lightCone:autocompleteLabels.key");const l=c.useMemo(()=>te.map(p=>({key:p,label:n(`lightConeNames_gen:${p}`)})),[n]),d=c.useCallback(p=>o(p??""),[o]);return e(c.Suspense,{fallback:e(k,{variant:"text",width:100}),children:e(ne,{options:l,valueKey:s,onChange:d,toImg:()=>e(P,{children:" "}),label:a})})}function Ce({superimpose:s,setSuperimposition:o,disabled:a=!1}){return e(E,{title:s?`Superimposition ${s}`:"Superimposition 1",color:"primary",disabled:a,fullWidth:!0,children:se.map(n=>i(W,{selected:s===n,disabled:s===n,onClick:()=>o(n),children:["Superimposition ",n]},n))})}function xe({level:s,ascension:o,setLevelAscension:a,disabled:n=!1}){return e(E,{title:s?`Lv. ${s}/${$[o]}`:"Select Level",color:"primary",disabled:n,fullWidth:!0,children:oe.map(([l,d])=>e(W,{selected:s===l&&o===d,disabled:s===l&&o===d,onClick:()=>a(l,d),children:l===$[d]?`Lv. ${l}`:`Lv. ${l}/${$[d]}`},`${l}/${d}`))})}const I={xs:1,sm:2,md:3,lg:3,xl:4},be={xs:10,sm:12,md:24,lg:24,xl:24};function Le({onAdd:s}){const{t:o}=A("lightCone"),{database:a}=T(),[n,l]=N(),d=()=>({sortType:ue[0],ascending:!1,rarity:[...le],path:[...ce]}),{sortType:p,ascending:h}=d();c.useEffect(()=>a.lightCones.followAny(l),[a,l]);const{lightConeIds:t,totalLightConeNum:u}=c.useMemo(()=>{const g=a.lightCones.values,L=g.length,S=g.sort(de(pe[p]??[],h,he())).map(D=>D.id);return n&&{lightConeIds:S,totalLightConeNum:L}},[a,n,p,h]),y=ae(),x=t.length!==u?`${t.length}/${u}`:`${u}`,{numShow:b,setTriggerElement:w}=ie(be[y],t.length),r=c.useMemo(()=>t.slice(0,b),[t,b]),C={numShowing:r.length,total:x};return i(P,{children:[e(v,{bgt:"dark",children:e(M,{children:e(F,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:i(f,{color:"text.secondary",children:["Showing ",e("b",{children:C.numShowing})," out of"," ",C.total," Items"]})})})}),e(m,{container:!0,columns:I,spacing:1,children:e(m,{item:!0,xs:!0,children:e(B,{fullWidth:!0,onClick:s,color:"info",startIcon:e(_,{}),children:o`addNew`})})}),i(c.Suspense,{fallback:e(k,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:[e(m,{container:!0,columns:I,spacing:1,children:r.map(g=>e(m,{item:!0,xs:1,children:e(me,{lightConeId:g})},g))}),t.length!==r.length&&e(k,{ref:g=>{g&&w(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function ve(){const[s,o]=c.useState("");return i(F,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(fe,{lightConeIdToEdit:s,cancelEdit:()=>o("")}),e(Le,{onAdd:()=>o("new")})]})}export{ve as default};
