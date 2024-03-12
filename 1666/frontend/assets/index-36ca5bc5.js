import{Q as L,e as r,n as a,J as n,p as t,T as v,B as w,t as _,C as y,D as R,U as P,V as et,r as rt,i as it,j as at,u as I,b as j,N as S,_ as V,W as St,s as nt,X as ot,K as W,Y as Dt,Z as Ct,$ as _t,M as It,R as st}from"./index-06471696.js";import{u as Et,a as Pt,f as Tt,s as Ft,S as Mt}from"./StarDisplay-6b417622.js";import{d as lt,A as ct,a as $t,b as Rt,p as jt,c as qt,e as Z}from"./ArtifactSort-ca198b2d.js";import{S as Ot,A as Ut}from"./StatEditorList-d35d20c3.js";import{d as Kt}from"./InfoTooltip-f0f733f6.js";import{C as B}from"./CloseButton-6e1366f9.js";import{T as Lt}from"./index-08a7485a.js";import{u as ut}from"./useDisplayArtifact-f272c0ad.js";import{d as Wt,a as Bt}from"./LockOpen-dd858d39.js";import{S as $}from"./SqBadge-b8df07d3.js";import{C as Vt}from"./ColoredText-8bb1167f.js";import{A as zt}from"./ConditionalWrapper-383f977a.js";import"./DropdownButton-91fdcb3a.js";import"./BootstrapTooltip-170e3fbd.js";import"./SlotIcon-ce9a6983.js";import"./index-fecae0f5.js";import"./Artifact-712dc46f.js";import"./CardActionArea-ed701f5d.js";import"./Link-1156fece.js";const Gt=i=>i[Math.floor(Math.random()*i.length)];function Nt({pageKey:i,text:e="",modalTitle:s="",children:u}){const[f,h,c]=L(localStorage.getItem(`infoShown_${i}`)!=="true"),[d]=r.useState(Array.isArray(e)?Gt(e):e),b=r.useCallback(()=>{c(),localStorage.setItem(`infoShown_${i}`,"true")},[c,i]);return a(_,{children:[a(n,{container:!0,children:[t(n,{item:!0,flexGrow:1,children:t(v,{variant:"caption",pl:1,children:d})}),t(n,{item:!0,xs:"auto",children:t(w,{size:"small",color:"info",variant:"contained",onClick:h,startIcon:t(Kt,{}),children:t(Lt,{ns:"ui",key18:"info"})})})]}),t(et,{containerProps:{maxWidth:"xl"},open:f,onClose:b,children:a(_,{children:[t(y,{sx:{py:1},children:a(n,{container:!0,children:[t(n,{item:!0,flexGrow:1,children:t(v,{variant:"h6",children:s})}),t(n,{item:!0,children:t(B,{onClick:b})})]})}),t(R,{}),t(y,{children:t(r.Suspense,{fallback:t(P,{variant:"rectangular",width:"100%",height:500}),children:u})}),t(R,{}),t(y,{sx:{py:1},children:t(B,{large:!0,onClick:b})})]})})]})}var z={},Ht=it;Object.defineProperty(z,"__esModule",{value:!0});var dt=z.default=void 0,Qt=Ht(rt()),Xt=at,Jt=(0,Qt.default)((0,Xt.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");dt=z.default=Jt;var G={},Yt=it;Object.defineProperty(G,"__esModule",{value:!0});var ft=G.default=void 0,Zt=Yt(rt()),te=at,ee=(0,Zt.default)((0,te.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");ft=G.default=ee;const re=r.lazy(()=>V(()=>import("./ArtifactFilterDisplay-b1449e49.js").then(i=>i.b),["./ArtifactFilterDisplay-b1449e49.js","./index-06471696.js","./index-ddf3fba4.css","./LockOpen-dd858d39.js","./useDisplayArtifact-f272c0ad.js","./SolidToggleButtonGroup-5da5c654.js","./totalUtils-8bacaea1.js","./BootstrapTooltip-170e3fbd.js","./StarDisplay-6b417622.js","./DropdownButton-91fdcb3a.js","./ColoredText-8bb1167f.js","./index-08a7485a.js","./SqBadge-b8df07d3.js","./ArtifactStatKeyDisplay-93f8dd9c.js","./Artifact-712dc46f.js","./ConditionalWrapper-383f977a.js","./index-fecae0f5.js","./SlotIcon-ce9a6983.js"],import.meta.url));function ie({numShowing:i,total:e,artifactIds:s}){const{t:u}=I(["artifact","ui"]),f=j(),{filterOption:h}=ut(),c=r.useCallback(d=>f.displayArtifact.set({filterOption:{...h,...d}}),[f,h]);return t(r.Suspense,{fallback:t(P,{variant:"rectangular",width:"100%",height:300}),children:t(_,{children:a(y,{children:[a(n,{container:!0,children:[t(n,{item:!0,children:t(v,{variant:"h6",children:t(S,{t:u,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(n,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:i!==e&&a(v,{children:["Filtered ",t("strong",{children:i})," / ",e]})}),t(n,{item:!0,children:t(w,{size:"small",color:"error",onClick:()=>f.displayArtifact.set({action:"reset"}),startIcon:t(ft,{}),children:t(S,{t:u,i18nKey:"ui:reset"})})})]}),t(r.Suspense,{fallback:t(P,{variant:"rectangular",width:"100%",height:200}),children:t(re,{filterOption:h,filterOptionDispatch:c,filteredIds:s})})]})})})}function ae({artifactIds:i}){const{t:e}=I(["artifact","ui"]),s=j(),{numDelete:u,numUnequip:f,numUnlock:h,numLock:c}=r.useMemo(()=>{const l=i.map(A=>s.arts.get(A)),p=l.reduce((A,C)=>A+(C.lock?0:1),0),x=l.length-p,k=p,q=l.reduce((A,C)=>A+(C.location?1:0),0);return{numDelete:k,numUnequip:q,numUnlock:p,numLock:x}},[i,s]);return a(n,{container:!0,spacing:1,alignItems:"center",children:[t(n,{item:!0,xs:12,sm:6,md:3,children:a(w,{fullWidth:!0,color:"error",disabled:!f,onClick:()=>window.confirm(`Are you sure you want to unequip ${f} artifacts currently equipped on characters?`)&&i.map(l=>s.arts.set(l,{location:""})),startIcon:t(dt,{}),children:[t(S,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t($,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:a(w,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to delete ${u} artifacts?`)&&i.map(l=>{var p;return!((p=s.arts.get(l))!=null&&p.lock)&&s.arts.remove(l)}),startIcon:t(St,{}),children:[t(S,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t($,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:a(w,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to unlock ${c} artifacts?`)&&i.map(l=>s.arts.set(l,{lock:!1})),startIcon:t(Wt,{}),children:[t(S,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t($,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:a(w,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to lock ${h} artifacts?`)&&i.map(l=>s.arts.set(l,{lock:!0})),startIcon:t(Bt,{}),children:[t(S,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t($,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(n,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(v,{variant:"caption",color:"text.secondary",children:a(S,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function ne({show:i,onHide:e}){const{t:s}=I("artifact");return t(et,{open:i,onClose:e,children:a(nt,{children:[a(y,{sx:{display:"flex",alignItems:"center"},children:[a(v,{variant:"h6",flexGrow:1,children:[t(lt,{sx:{verticalAlign:"text-top",mr:1}}),s`showDup`]}),t(B,{onClick:e})]}),t(R,{}),t(y,{children:t(oe,{})})]})})}function oe(){const{t:i}=I("artifact"),e=j(),[s,u]=ot();r.useEffect(()=>e.arts.followAny(u),[u,e]);const f=r.useMemo(()=>{const c=s&&[];let d=e.arts.keys;for(;d.length!==0;){const b=d.shift();if(!b)continue;const g=e.arts.get(b);if(!g)continue;const{duplicated:D}=e.arts.findDups(g,d);if(!D.length)continue;const l=D.map(p=>p.id);c.push([b,...l].sort(p=>{var x;return((x=e.arts.get(p))==null?void 0:x.location)??""?-1:1})),d=d.filter(p=>!l.includes(p))}return c},[e,s]),h=r.useMemo(()=>({}),[]);return a(Ct,{spacing:2,children:[f.map(c=>t(_,{sx:{overflowX:"scroll"},children:t(y,{sx:{display:"flex",gap:1},children:c.map(d=>t(W,{sx:{minWidth:300},children:t(ct,{artifactId:d,canEquip:!0,onDelete:()=>e.arts.remove(d),editorProps:h})},d))})},c.join())),!f.length&&t(Dt,{variant:"filled",severity:"success",children:i`noDupAlert`})]})}const se=[..._t];function le({probabilityFilter:i={},setProbabilityFilter:e,disabled:s=!1}){const{t:u}=I("artifact");return a(_,{children:[t(y,{sx:{py:1},children:t(v,{variant:"h6",children:"Roll Probability Calculator"})}),t(R,{}),t(y,{children:a(n,{container:!0,spacing:1,children:[t(n,{item:!0,xs:12,md:6,children:t(nt,{children:t(y,{children:a(v,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",a(Vt,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(n,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(Ot,{statKeys:se,statFilters:i,setStatFilters:e,disabled:s,label:u("probabilityFilter.label")})})]})})]})}const ce=st.lazy(()=>V(()=>import("./ArtifactEditor-f9b3de21.js"),["./ArtifactEditor-f9b3de21.js","./index-06471696.js","./index-ddf3fba4.css","./ArtifactRarityDropdown-3b5277a6.js","./index-fecae0f5.js","./index-08a7485a.js","./ColoredText-8bb1167f.js","./SqBadge-b8df07d3.js","./ConditionalWrapper-383f977a.js","./StarDisplay-6b417622.js","./DropdownButton-91fdcb3a.js","./ArtifactStatKeyDisplay-93f8dd9c.js","./Artifact-712dc46f.js","./InfoTooltip-f0f733f6.js","./BootstrapTooltip-170e3fbd.js","./LockOpen-dd858d39.js","./SlotIcon-ce9a6983.js","./CloseButton-6e1366f9.js","./ArtifactSort-ca198b2d.js","./CardActionArea-ed701f5d.js","./TextButton-2a13f321.js","./CardHeader-78f59f01.js","./ChevronRight-5bf658f2.js"],import.meta.url)),ue=st.lazy(()=>V(()=>import("./index-fbabf747.js"),["./index-fbabf747.js","./index-06471696.js","./index-ddf3fba4.css","./Settings-598b52f4.js","./StarDisplay-6b417622.js","./DropdownButton-91fdcb3a.js","./ColoredText-8bb1167f.js","./index-08a7485a.js","./SqBadge-b8df07d3.js","./ImgFullwidth-e8fb1701.js","./ArtifactSort-ca198b2d.js","./ConditionalWrapper-383f977a.js","./BootstrapTooltip-170e3fbd.js","./SlotIcon-ce9a6983.js","./InfoTooltip-f0f733f6.js","./index-fecae0f5.js","./Artifact-712dc46f.js","./CardActionArea-ed701f5d.js","./Link-1156fece.js"],import.meta.url)),tt={xs:1,sm:2,md:3,lg:3,xl:4},K={xs:5,sm:6,md:12,lg:12,xl:12};function Te(){const{t:i}=I(["artifact","ui"]),e=j(),s=ut(),[u,f,h]=L(!1),[c,d,b]=L(!1),g=Et(),{sortType:D,effFilter:l,ascending:p,probabilityFilter:x}=s,k=D==="probability",[q,A]=ot(),C=r.useDeferredValue(q),E=r.useMemo(()=>new Set(l),[l]),ht=r.useCallback(o=>e.arts.remove(o),[e]);r.useEffect(()=>(It.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny(()=>A())),[e,A]);const[pt,mt]=r.useState(),yt=Pt(pt),bt=r.useCallback(o=>e.displayArtifact.set({probabilityFilter:o}),[e]),gt=r.useMemo(()=>!e.arts.values.length,[e]),N=r.useMemo(()=>$t(E,x),[E,x]),H=r.useMemo(()=>Rt(E),[E]),Q=r.useDeferredValue(s),X=r.useDeferredValue(x);r.useEffect(()=>{if(k)return e.arts.values.forEach(o=>e.arts.setProbability(o.id,jt(o,X))),()=>e.arts.values.forEach(o=>e.arts.setProbability(o.id,-1))},[e,k,X]);const[O,J]=r.useState(K[g]),{artifactIds:m,totalArtNum:T}=r.useMemo(()=>{const{sortType:o=Z[0],ascending:vt=!1,filterOption:kt}=Q;let F=e.arts.values;return k&&(F=F.filter(M=>M.probability&&M.probability!==1)),{artifactIds:F.filter(Tt(kt,H)).sort(Ft(qt[o]??[],vt,N)).map(M=>M.id),totalArtNum:F.length,...C}},[Q,C,e,N,H,k]);r.useEffect(()=>{m&&J(K[g])},[m,g]);const Y=yt&&O<m.length;r.useEffect(()=>{Y&&J(o=>o+K[g])},[Y,g]);const U=r.useMemo(()=>m.slice(0,O),[m,O]),xt=m.length!==T?`${m.length}/${T}`:`${T}`,At={numShowing:U.length,total:xt,t:i,namespace:"artifact"},wt={sortKeys:[...Z],value:D,onChange:o=>e.displayArtifact.set({sortType:o}),ascending:p,onChangeAsc:o=>e.displayArtifact.set({ascending:o})};return a(W,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(r.Suspense,{fallback:!1,children:t(ce,{artifactIdToEdit:u?"new":"",cancelEdit:h,allowUpload:!0,allowEmpty:!0})}),t(r.Suspense,{fallback:!1,children:t(ne,{show:c,onHide:b})}),t(Nt,{pageKey:"artifactPage",modalTitle:i`info.title`,text:i("tipsOfTheDay",{returnObjects:!0}),children:t(ue,{})}),gt&&t(Ut,{}),t(ie,{numShowing:m.length,total:T,artifactIds:m}),t(_,{children:a(y,{children:[t(W,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Mt,{showingTextProps:At,sortByButtonProps:wt})}),t(ae,{artifactIds:m})]})}),k&&t(le,{probabilityFilter:x,setProbabilityFilter:bt}),a(n,{container:!0,columns:tt,spacing:1,children:[t(n,{item:!0,xs:!0,children:t(w,{fullWidth:!0,onClick:f,color:"info",startIcon:t(zt,{}),children:i`addNew`})}),t(n,{item:!0,xs:1,children:t(w,{fullWidth:!0,onClick:d,color:"info",startIcon:t(lt,{}),children:i`showDup`})})]}),a(r.Suspense,{fallback:t(P,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(n,{container:!0,spacing:1,columns:tt,children:U.map(o=>t(n,{item:!0,xs:1,children:t(ct,{artifactId:o,effFilter:E,onDelete:ht,editorProps:{},canEquip:!0})},o))}),m.length!==U.length&&t(P,{ref:o=>{o&&mt(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{Te as default};
