import{r as B,i as W,j as H,u as C,p as t,n as i,L as It,N as g,Q as dt,U,e as a,J as n,T as k,B as A,t as w,C as m,D as K,V,W as ft,b as F,_ as G,X as Pt,s as ht,Y as pt,K as E,Z as Tt,$ as Mt,M as Et,R as mt,a0 as Ft}from"./index-e3e78834.js";import{u as $t,f as Rt,s as jt,P as lt}from"./StarDisplay-f730c097.js";import{L as Lt}from"./Link-8a7ef940.js";import{d as qt,a as Kt,A as yt,S as Vt,b as Ot,c as Ut,p as zt,e as Bt,f as Wt,g as ct}from"./StatEditorList-73886ac9.js";import{d as Ht,B as Gt}from"./Help-0edbbf0a.js";import{C as z}from"./CloseButton-53ba2933.js";import{T as Nt}from"./index-1a05a278.js";import{S as q}from"./SqBadge-cb26f779.js";import{C as Qt}from"./ColoredText-421face3.js";import{A as Xt}from"./LocationAutocomplete-ef17d1f9.js";import"./DropdownButton-6764d8bc.js";import"./Artifact-dd02e3ae.js";import"./SlotIcon-cd8206d5.js";import"./InfoTooltip-299412b4.js";import"./index-6a4b0350.js";import"./CardActionArea-f8bf999d.js";const Jt=r=>r[Math.floor(Math.random()*r.length)];var N={},Yt=W;Object.defineProperty(N,"__esModule",{value:!0});var Q=N.default=void 0,Zt=Yt(B()),te=H,ee=(0,Zt.default)((0,te.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");Q=N.default=ee;function re(){const{t:r}=C("artifact");return t(dt,{severity:"info",variant:"filled",children:i(g,{t:r,i18nKey:"noArtifacts",children:["Looks like you haven't added any artifacts yet. If you want, there are ",t(Lt,{color:"warning.main",component:It,to:"/scanner",fontFamily:"inherit",children:"automatic scanners"})," that can speed up the import process!"]})})}function ae({pageKey:r,text:e="",modalTitle:o="",children:c}){const[u,p,d]=U(localStorage.getItem(`infoShown_${r}`)!=="true"),[f]=a.useState(Array.isArray(e)?Jt(e):e),y=a.useCallback(()=>{d(),localStorage.setItem(`infoShown_${r}`,"true")},[d,r]);return i(w,{children:[i(n,{container:!0,children:[t(n,{item:!0,flexGrow:1,children:t(k,{variant:"caption",pl:1,children:f})}),t(n,{item:!0,xs:"auto",children:t(A,{size:"small",color:"info",variant:"contained",onClick:p,startIcon:t(Ht,{}),children:t(Nt,{ns:"ui",key18:"info"})})})]}),t(ft,{containerProps:{maxWidth:"xl"},open:u,onClose:y,children:i(w,{children:[t(m,{sx:{py:1},children:i(n,{container:!0,children:[t(n,{item:!0,flexGrow:1,children:t(k,{variant:"h6",children:o})}),t(n,{item:!0,children:t(z,{onClick:y})})]})}),t(K,{}),t(m,{children:t(a.Suspense,{fallback:t(V,{variant:"rectangular",width:"100%",height:500}),children:c})}),t(K,{}),t(m,{sx:{py:1},children:t(z,{large:!0,onClick:y})})]})})]})}function gt(){const r=F(),[e,o]=a.useState(r.displayArtifact.get());return a.useEffect(()=>r.displayArtifact.follow((c,u)=>o(u)),[r]),e}var X={},ie=W;Object.defineProperty(X,"__esModule",{value:!0});var bt=X.default=void 0,ne=ie(B()),oe=H,se=(0,ne.default)((0,oe.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");bt=X.default=se;var J={},le=W;Object.defineProperty(J,"__esModule",{value:!0});var vt=J.default=void 0,ce=le(B()),ue=H,de=(0,ce.default)((0,ue.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");vt=J.default=de;const fe=a.lazy(()=>G(()=>import("./ArtifactFilterDisplay-ba1c25fb.js").then(r=>r.b),["./ArtifactFilterDisplay-ba1c25fb.js","./index-e3e78834.js","./index-aa46efb7.css","./StatEditorList-73886ac9.js","./index-1a05a278.js","./ColoredText-421face3.js","./SqBadge-cb26f779.js","./StarDisplay-f730c097.js","./DropdownButton-6764d8bc.js","./Artifact-dd02e3ae.js","./LocationAutocomplete-ef17d1f9.js","./Help-0edbbf0a.js","./SlotIcon-cd8206d5.js","./InfoTooltip-299412b4.js","./index-6a4b0350.js","./CardActionArea-f8bf999d.js","./totalUtils-87d1abcc.js","./sortByRarityAndName-b5d6487b.js"],import.meta.url));function he({numShowing:r,total:e,artifactIds:o}){const{t:c}=C(["artifact","ui"]),u=F(),{filterOption:p}=gt(),d=a.useCallback(f=>u.displayArtifact.set({filterOption:{...p,...f}}),[u,p]);return t(a.Suspense,{fallback:t(V,{variant:"rectangular",width:"100%",height:300}),children:t(w,{children:i(m,{children:[i(n,{container:!0,children:[t(n,{item:!0,children:t(k,{variant:"h6",children:t(g,{t:c,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(n,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:r!==e&&i(k,{children:["Filtered ",t("strong",{children:r})," / ",e]})}),t(n,{item:!0,children:t(A,{size:"small",color:"error",onClick:()=>u.displayArtifact.set({action:"reset"}),startIcon:t(vt,{}),children:t(g,{t:c,i18nKey:"ui:reset"})})})]}),t(a.Suspense,{fallback:t(V,{variant:"rectangular",width:"100%",height:200}),children:t(fe,{filterOption:p,filterOptionDispatch:d,filteredIds:o})})]})})})}function pe({artifactIds:r}){const{t:e}=C(["artifact","ui"]),o=F(),{numDelete:c,numUnequip:u,numUnlock:p,numLock:d}=a.useMemo(()=>{const l=r.map(v=>o.arts.get(v)),h=l.reduce((v,P)=>v+(P.lock?0:1),0),_=l.length-h,I=h,D=l.reduce((v,P)=>v+(P.location?1:0),0);return{numDelete:I,numUnequip:D,numUnlock:h,numLock:_}},[r,o]);return i(n,{container:!0,spacing:1,alignItems:"center",children:[t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to unequip ${u} artifacts currently equipped on characters?`)&&r.map(l=>o.arts.set(l,{location:""})),startIcon:t(bt,{}),children:[t(g,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(q,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to delete ${c} artifacts?`)&&r.map(l=>{var h;return!((h=o.arts.get(l))!=null&&h.lock)&&o.arts.remove(l)}),startIcon:t(Pt,{}),children:[t(g,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(q,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to unlock ${d} artifacts?`)&&r.map(l=>o.arts.set(l,{lock:!1})),startIcon:t(qt,{}),children:[t(g,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(q,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to lock ${p} artifacts?`)&&r.map(l=>o.arts.set(l,{lock:!0})),startIcon:t(Kt,{}),children:[t(g,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(q,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),t(n,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(k,{variant:"caption",color:"text.secondary",children:i(g,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function me({show:r,onHide:e}){const{t:o}=C("artifact");return t(ft,{open:r,onClose:e,children:i(ht,{children:[i(m,{sx:{display:"flex",alignItems:"center"},children:[i(k,{variant:"h6",flexGrow:1,children:[t(Q,{sx:{verticalAlign:"text-top",mr:1}}),o`showDup`]}),t(z,{onClick:e})]}),t(K,{}),t(m,{children:t(ye,{})})]})})}function ye(){const{t:r}=C("artifact"),e=F(),[o,c]=pt();a.useEffect(()=>e.arts.followAny(c),[c,e]);const u=a.useMemo(()=>{const d=o&&[];let f=e.arts.keys;for(;f.length!==0;){const y=f.shift();if(!y)continue;const T=e.arts.get(y);if(!T)continue;const{duplicated:b}=e.arts.findDups(T,f);if(!b.length)continue;const l=b.map(h=>h.id);d.push([y,...l].sort(h=>{var _;return((_=e.arts.get(h))==null?void 0:_.location)??""?-1:1})),f=f.filter(h=>!l.includes(h))}return d},[e,o]),p=a.useMemo(()=>({}),[]);return i(Tt,{spacing:2,children:[u.map(d=>t(w,{sx:{overflowX:"scroll"},children:t(m,{sx:{display:"flex",gap:1},children:d.map(f=>t(E,{sx:{minWidth:300},children:t(yt,{artifactId:f,canEquip:!0,onDelete:()=>e.arts.remove(f),editorProps:p})},f))})},d.join())),!u.length&&t(dt,{variant:"filled",severity:"success",children:r`noDupAlert`})]})}const ge=[...Mt];function be({probabilityFilter:r={},setProbabilityFilter:e,disabled:o=!1}){const{t:c}=C("artifact");return i(w,{children:[t(m,{sx:{py:1},children:t(k,{variant:"h6",children:"Roll Probability Calculator"})}),t(K,{}),t(m,{children:i(n,{container:!0,spacing:1,children:[t(n,{item:!0,xs:12,md:6,children:t(ht,{children:t(m,{children:i(k,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",i(Qt,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(n,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(Vt,{statKeys:ge,statFilters:r,setStatFilters:e,disabled:o,label:c("probabilityFilter.label")})})]})})]})}const ve=mt.lazy(()=>G(()=>import("./ArtifactEditor-37ab67e7.js"),["./ArtifactEditor-37ab67e7.js","./index-e3e78834.js","./index-aa46efb7.css","./index-1a05a278.js","./ColoredText-421face3.js","./SqBadge-cb26f779.js","./Help-0edbbf0a.js","./StatEditorList-73886ac9.js","./StarDisplay-f730c097.js","./DropdownButton-6764d8bc.js","./Artifact-dd02e3ae.js","./LocationAutocomplete-ef17d1f9.js","./SlotIcon-cd8206d5.js","./InfoTooltip-299412b4.js","./index-6a4b0350.js","./CardActionArea-f8bf999d.js","./ArtifactRarityDropdown-0fde3dbd.js","./sortByRarityAndName-b5d6487b.js","./CloseButton-53ba2933.js","./TextButton-952672dd.js","./CardHeader-7d551dda.js"],import.meta.url)),xe=mt.lazy(()=>G(()=>import("./index-02d57ed5.js"),["./index-02d57ed5.js","./index-e3e78834.js","./index-aa46efb7.css","./Settings-b6401b9d.js","./StarDisplay-f730c097.js","./DropdownButton-6764d8bc.js","./ColoredText-421face3.js","./index-1a05a278.js","./SqBadge-cb26f779.js","./ImgFullwidth-d73da153.js","./StatEditorList-73886ac9.js","./Artifact-dd02e3ae.js","./LocationAutocomplete-ef17d1f9.js","./Help-0edbbf0a.js","./SlotIcon-cd8206d5.js","./InfoTooltip-299412b4.js","./index-6a4b0350.js","./CardActionArea-f8bf999d.js","./Link-8a7ef940.js"],import.meta.url)),ut={xs:1,sm:2,md:3,lg:3,xl:4},Ae={xs:10,sm:12,md:24,lg:24,xl:24};function Ke(){const{t:r}=C(["artifact","ui"]),e=F(),o=gt(),[c,u,p]=U(!1),[d,f,y]=U(!1),T=$t(),b=Ae[T],{sortType:l,effFilter:h,ascending:_,probabilityFilter:I}=o,D=l==="probability",[v,P]=a.useState(0),O=a.useRef(null),[xt,Y]=pt(),Z=a.useDeferredValue(xt),M=a.useMemo(()=>new Set(h),[h]),At=a.useCallback(s=>e.arts.remove(s),[e]);a.useEffect(()=>(Et.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny(()=>Y())),[e,Y]);const wt=a.useCallback(s=>e.displayArtifact.set({probabilityFilter:s}),[e]),kt=a.useMemo(()=>!e.arts.values.length,[e]),tt=a.useMemo(()=>Ot(M,I),[M,I]),et=a.useMemo(()=>Ut(M),[M]),rt=a.useDeferredValue(o),at=a.useDeferredValue(I);a.useEffect(()=>{if(D)return e.arts.values.forEach(s=>e.arts.setProbability(s.id,zt(s,at))),()=>e.arts.values.forEach(s=>e.arts.setProbability(s.id,-1))},[e,D,at]);const{artifactIds:x,totalArtNum:$}=a.useMemo(()=>{const{sortType:s=ct[0],ascending:S=!1,filterOption:R}=rt;let j=e.arts.values;return D&&(j=j.filter(L=>L.probability&&L.probability!==1)),{artifactIds:j.filter(Rt(R,et)).sort(jt(Bt[s]??[],S,tt)).map(L=>L.id),totalArtNum:j.length,...Z}},[rt,Z,e,tt,et,D]),{artifactIdsToShow:it,numPages:nt,currentPageIndex:Dt}=a.useMemo(()=>{const s=Math.ceil(x.length/b),S=Ft(v,0,s-1);return{artifactIdsToShow:x.slice(S*b,(S+1)*b),numPages:s,currentPageIndex:S}},[x,v,b]),St=x.length!==$?`${x.length}/${$}`:`${$}`,Ct=a.useCallback((s,S)=>{var R;(R=O.current)==null||R.scrollIntoView({behavior:"smooth"}),P(S-1)},[P,O]),ot={count:nt,page:Dt+1,onChange:Ct},st={numShowing:it.length,total:St,t:r,namespace:"artifact"},_t={sortKeys:[...ct],value:l,onChange:s=>e.displayArtifact.set({sortType:s}),ascending:_,onChangeAsc:s=>e.displayArtifact.set({ascending:s})};return i(E,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(a.Suspense,{fallback:!1,children:t(ve,{artifactIdToEdit:c?"new":"",cancelEdit:p,allowUpload:!0,allowEmpty:!0})}),t(a.Suspense,{fallback:!1,children:t(me,{show:d,onHide:y})}),t(ae,{pageKey:"artifactPage",modalTitle:r`info.title`,text:r("tipsOfTheDay",{returnObjects:!0}),children:t(xe,{})}),kt&&t(re,{}),t(he,{numShowing:x.length,total:$,artifactIds:x}),t(w,{ref:O,children:t(m,{children:t(Gt,{placement:"top",title:t(g,{t:r,i18nKey:"efficiencyFilter.title",children:"Substats to use in efficiency calculation"}),children:t(E,{children:t(Wt,{selectedKeys:h,onChange:s=>e.displayArtifact.set({effFilter:s})})})})})}),t(w,{children:i(m,{children:[t(E,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(lt,{paginationProps:ot,showingTextProps:st,displaySort:!0,sortByButtonProps:_t})}),t(pe,{artifactIds:x})]})}),D&&t(be,{probabilityFilter:I,setProbabilityFilter:wt}),i(n,{container:!0,columns:ut,spacing:1,children:[t(n,{item:!0,xs:!0,children:t(A,{fullWidth:!0,onClick:u,color:"info",startIcon:t(Xt,{}),children:r`addNew`})}),t(n,{item:!0,xs:1,children:t(A,{fullWidth:!0,onClick:f,color:"info",startIcon:t(Q,{}),children:r`showDup`})})]}),t(a.Suspense,{fallback:t(V,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(n,{container:!0,spacing:1,columns:ut,children:it.map(s=>t(n,{item:!0,xs:1,children:t(yt,{artifactId:s,effFilter:M,onDelete:At,editorProps:{},canEquip:!0})},s))})}),nt>1&&t(w,{children:t(m,{children:t(E,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(lt,{paginationProps:ot,showingTextProps:st})})})})]})}export{Ke as default};
