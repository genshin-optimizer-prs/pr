import{n,p as t,K as w,Q as it,U as L,V as W,e as i,J as o,T as C,B as v,t as S,C as m,D as U,W as B,X as mt,b as M,r as yt,i as gt,j as bt,u as T,N as A,_ as G,Y as Kt,s as xt,Z as At,$ as Rt,a0 as jt,M as qt,R as wt,a1 as Ut}from"./index-eeb75742.js";import{T as nt,S as st,h as Bt,u as Lt,A as Ot,P as ot}from"./LocationAutocomplete-6eb0d9cb.js";import{f as Wt,s as zt}from"./StarDisplay-eae84610.js";import{d as vt,A as St,a as Gt,b as Vt,p as Ht,c as Nt,e as lt}from"./ArtifactSort-fb49b6be.js";import{S as Qt,A as Xt}from"./StatEditorList-d07ebc13.js";import{S as ct,T as Jt}from"./index-8db9eaa1.js";import{A as ut}from"./ArtifactStatKeyDisplay-18d505b1.js";import{d as Yt,B as Zt}from"./Help-5977093d.js";import{C as z}from"./CloseButton-44da72c8.js";import{d as te,a as ee}from"./LockOpen-8375e093.js";import{S as q}from"./SqBadge-099ac92f.js";import{C as re}from"./ColoredText-f8c42782.js";import"./DropdownButton-af10408f.js";import"./SlotIcon-33e44f26.js";import"./InfoTooltip-90f3da61.js";import"./index-07b7ac23.js";import"./Artifact-2f90d2af.js";import"./CardActionArea-fcbe3fdc.js";import"./Link-bfecd40b.js";const ae=r=>r[Math.floor(Math.random()*r.length)],dt=Bt([...L]),ft=L.slice(0,6),pt=L.slice(6);function ie({selectedKeys:r,onChange:e}){const s=r.filter(a=>ft.includes(a)),c=r.filter(a=>pt.includes(a));return n(w,{display:"flex",gap:1,flexWrap:"wrap",children:[t(st,{value:s,sx:{flexGrow:1},children:ft.map(a=>t(nt,{sx:{flexGrow:1},size:"small",value:a,onClick:()=>e(dt(r,a)),children:n(w,{display:"flex",gap:1,alignItems:"center",children:[t(ct,{statKey:a,iconProps:it}),t(ut,{statKey:a})]})},a))}),t(st,{value:c,sx:{flexGrow:1},children:pt.map(a=>t(nt,{sx:{flexGrow:1},size:"small",value:a,onClick:()=>e(dt(r,a)),children:n(w,{display:"flex",gap:1,alignItems:"center",children:[t(ct,{statKey:a,iconProps:it}),t(ut,{statKey:a})]})},a))})]})}function ne({pageKey:r,text:e="",modalTitle:s="",children:c}){const[a,h,d]=W(localStorage.getItem(`infoShown_${r}`)!=="true"),[f]=i.useState(Array.isArray(e)?ae(e):e),y=i.useCallback(()=>{d(),localStorage.setItem(`infoShown_${r}`,"true")},[d,r]);return n(S,{children:[n(o,{container:!0,children:[t(o,{item:!0,flexGrow:1,children:t(C,{variant:"caption",pl:1,children:f})}),t(o,{item:!0,xs:"auto",children:t(v,{size:"small",color:"info",variant:"contained",onClick:h,startIcon:t(Yt,{}),children:t(Jt,{ns:"ui",key18:"info"})})})]}),t(mt,{containerProps:{maxWidth:"xl"},open:a,onClose:y,children:n(S,{children:[t(m,{sx:{py:1},children:n(o,{container:!0,children:[t(o,{item:!0,flexGrow:1,children:t(C,{variant:"h6",children:s})}),t(o,{item:!0,children:t(z,{onClick:y})})]})}),t(U,{}),t(m,{children:t(i.Suspense,{fallback:t(B,{variant:"rectangular",width:"100%",height:500}),children:c})}),t(U,{}),t(m,{sx:{py:1},children:t(z,{large:!0,onClick:y})})]})})]})}function Ct(){const r=M(),[e,s]=i.useState(r.displayArtifact.get());return i.useEffect(()=>r.displayArtifact.follow((c,a)=>s(a)),[r]),e}var V={},se=gt;Object.defineProperty(V,"__esModule",{value:!0});var Dt=V.default=void 0,oe=se(yt()),le=bt,ce=(0,oe.default)((0,le.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");Dt=V.default=ce;var H={},ue=gt;Object.defineProperty(H,"__esModule",{value:!0});var kt=H.default=void 0,de=ue(yt()),fe=bt,pe=(0,de.default)((0,fe.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");kt=H.default=pe;const he=i.lazy(()=>G(()=>import("./ArtifactFilterDisplay-679bd8b7.js").then(r=>r.b),["./ArtifactFilterDisplay-679bd8b7.js","./index-eeb75742.js","./index-15bd4d7b.css","./LockOpen-8375e093.js","./LocationAutocomplete-6eb0d9cb.js","./StarDisplay-eae84610.js","./DropdownButton-af10408f.js","./ColoredText-f8c42782.js","./index-8db9eaa1.js","./SqBadge-099ac92f.js","./totalUtils-9f58b502.js","./Help-5977093d.js","./sortByRarityAndName-13d370cc.js","./Artifact-2f90d2af.js","./index-07b7ac23.js","./SlotIcon-33e44f26.js"],import.meta.url));function me({numShowing:r,total:e,artifactIds:s}){const{t:c}=T(["artifact","ui"]),a=M(),{filterOption:h}=Ct(),d=i.useCallback(f=>a.displayArtifact.set({filterOption:{...h,...f}}),[a,h]);return t(i.Suspense,{fallback:t(B,{variant:"rectangular",width:"100%",height:300}),children:t(S,{children:n(m,{children:[n(o,{container:!0,children:[t(o,{item:!0,children:t(C,{variant:"h6",children:t(A,{t:c,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(o,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:r!==e&&n(C,{children:["Filtered ",t("strong",{children:r})," / ",e]})}),t(o,{item:!0,children:t(v,{size:"small",color:"error",onClick:()=>a.displayArtifact.set({action:"reset"}),startIcon:t(kt,{}),children:t(A,{t:c,i18nKey:"ui:reset"})})})]}),t(i.Suspense,{fallback:t(B,{variant:"rectangular",width:"100%",height:200}),children:t(he,{filterOption:h,filterOptionDispatch:d,filteredIds:s})})]})})})}function ye({artifactIds:r}){const{t:e}=T(["artifact","ui"]),s=M(),{numDelete:c,numUnequip:a,numUnlock:h,numLock:d}=i.useMemo(()=>{const u=r.map(b=>s.arts.get(b)),p=u.reduce((b,P)=>b+(P.lock?0:1),0),I=u.length-p,_=p,D=u.reduce((b,P)=>b+(P.location?1:0),0);return{numDelete:_,numUnequip:D,numUnlock:p,numLock:I}},[r,s]);return n(o,{container:!0,spacing:1,alignItems:"center",children:[t(o,{item:!0,xs:12,sm:6,md:3,children:n(v,{fullWidth:!0,color:"error",disabled:!a,onClick:()=>window.confirm(`Are you sure you want to unequip ${a} artifacts currently equipped on characters?`)&&r.map(u=>s.arts.set(u,{location:""})),startIcon:t(Dt,{}),children:[t(A,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(q,{sx:{ml:1},color:a?"success":"secondary",children:a})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:n(v,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to delete ${c} artifacts?`)&&r.map(u=>{var p;return!((p=s.arts.get(u))!=null&&p.lock)&&s.arts.remove(u)}),startIcon:t(Kt,{}),children:[t(A,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(q,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:n(v,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to unlock ${d} artifacts?`)&&r.map(u=>s.arts.set(u,{lock:!1})),startIcon:t(te,{}),children:[t(A,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(q,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:n(v,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to lock ${h} artifacts?`)&&r.map(u=>s.arts.set(u,{lock:!0})),startIcon:t(ee,{}),children:[t(A,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(q,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(o,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(C,{variant:"caption",color:"text.secondary",children:n(A,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function ge({show:r,onHide:e}){const{t:s}=T("artifact");return t(mt,{open:r,onClose:e,children:n(xt,{children:[n(m,{sx:{display:"flex",alignItems:"center"},children:[n(C,{variant:"h6",flexGrow:1,children:[t(vt,{sx:{verticalAlign:"text-top",mr:1}}),s`showDup`]}),t(z,{onClick:e})]}),t(U,{}),t(m,{children:t(be,{})})]})})}function be(){const{t:r}=T("artifact"),e=M(),[s,c]=At();i.useEffect(()=>e.arts.followAny(c),[c,e]);const a=i.useMemo(()=>{const d=s&&[];let f=e.arts.keys;for(;f.length!==0;){const y=f.shift();if(!y)continue;const E=e.arts.get(y);if(!E)continue;const{duplicated:g}=e.arts.findDups(E,f);if(!g.length)continue;const u=g.map(p=>p.id);d.push([y,...u].sort(p=>{var I;return((I=e.arts.get(p))==null?void 0:I.location)??""?-1:1})),f=f.filter(p=>!u.includes(p))}return d},[e,s]),h=i.useMemo(()=>({}),[]);return n(jt,{spacing:2,children:[a.map(d=>t(S,{sx:{overflowX:"scroll"},children:t(m,{sx:{display:"flex",gap:1},children:d.map(f=>t(w,{sx:{minWidth:300},children:t(St,{artifactId:f,canEquip:!0,onDelete:()=>e.arts.remove(f),editorProps:h})},f))})},d.join())),!a.length&&t(Rt,{variant:"filled",severity:"success",children:r`noDupAlert`})]})}const xe=[...L];function Ae({probabilityFilter:r={},setProbabilityFilter:e,disabled:s=!1}){const{t:c}=T("artifact");return n(S,{children:[t(m,{sx:{py:1},children:t(C,{variant:"h6",children:"Roll Probability Calculator"})}),t(U,{}),t(m,{children:n(o,{container:!0,spacing:1,children:[t(o,{item:!0,xs:12,md:6,children:t(xt,{children:t(m,{children:n(C,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",n(re,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(o,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(Qt,{statKeys:xe,statFilters:r,setStatFilters:e,disabled:s,label:c("probabilityFilter.label")})})]})})]})}const we=wt.lazy(()=>G(()=>import("./ArtifactEditor-974e1802.js"),["./ArtifactEditor-974e1802.js","./index-eeb75742.js","./index-15bd4d7b.css","./ArtifactRarityDropdown-af8bced2.js","./index-07b7ac23.js","./index-8db9eaa1.js","./ColoredText-f8c42782.js","./SqBadge-099ac92f.js","./LocationAutocomplete-6eb0d9cb.js","./StarDisplay-eae84610.js","./DropdownButton-af10408f.js","./sortByRarityAndName-13d370cc.js","./Help-5977093d.js","./LockOpen-8375e093.js","./SlotIcon-33e44f26.js","./ArtifactStatKeyDisplay-18d505b1.js","./Artifact-2f90d2af.js","./CloseButton-44da72c8.js","./ArtifactSort-fb49b6be.js","./InfoTooltip-90f3da61.js","./CardActionArea-fcbe3fdc.js","./TextButton-e32af828.js","./CardHeader-626fca6d.js","./ChevronRight-f6de2c0f.js"],import.meta.url)),ve=wt.lazy(()=>G(()=>import("./index-1e3e3a21.js"),["./index-1e3e3a21.js","./index-eeb75742.js","./index-15bd4d7b.css","./Settings-150ccab4.js","./StarDisplay-eae84610.js","./DropdownButton-af10408f.js","./ColoredText-f8c42782.js","./index-8db9eaa1.js","./SqBadge-099ac92f.js","./ImgFullwidth-ed3f49bd.js","./ArtifactSort-fb49b6be.js","./LocationAutocomplete-6eb0d9cb.js","./Help-5977093d.js","./SlotIcon-33e44f26.js","./InfoTooltip-90f3da61.js","./index-07b7ac23.js","./Artifact-2f90d2af.js","./CardActionArea-fcbe3fdc.js","./Link-bfecd40b.js"],import.meta.url)),ht={xs:1,sm:2,md:3,lg:3,xl:4},Se={xs:10,sm:12,md:24,lg:24,xl:24};function ze(){const{t:r}=T(["artifact","ui"]),e=M(),s=Ct(),[c,a,h]=W(!1),[d,f,y]=W(!1),E=Lt(),g=Se[E],{sortType:u,effFilter:p,ascending:I,probabilityFilter:_}=s,D=u==="probability",[b,P]=i.useState(0),O=i.useRef(null),[It,N]=At(),Q=i.useDeferredValue(It),F=i.useMemo(()=>new Set(p),[p]),_t=i.useCallback(l=>e.arts.remove(l),[e]);i.useEffect(()=>(qt.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny(()=>N())),[e,N]);const Pt=i.useCallback(l=>e.displayArtifact.set({probabilityFilter:l}),[e]),Tt=i.useMemo(()=>!e.arts.values.length,[e]),X=i.useMemo(()=>Gt(F,_),[F,_]),J=i.useMemo(()=>Vt(F),[F]),Y=i.useDeferredValue(s),Z=i.useDeferredValue(_);i.useEffect(()=>{if(D)return e.arts.values.forEach(l=>e.arts.setProbability(l.id,Ht(l,Z))),()=>e.arts.values.forEach(l=>e.arts.setProbability(l.id,-1))},[e,D,Z]);const{artifactIds:x,totalArtNum:$}=i.useMemo(()=>{const{sortType:l=lt[0],ascending:k=!1,filterOption:K}=Y;let R=e.arts.values;return D&&(R=R.filter(j=>j.probability&&j.probability!==1)),{artifactIds:R.filter(Wt(K,J)).sort(zt(Nt[l]??[],k,X)).map(j=>j.id),totalArtNum:R.length,...Q}},[Y,Q,e,X,J,D]),{artifactIdsToShow:tt,numPages:et,currentPageIndex:Et}=i.useMemo(()=>{const l=Math.ceil(x.length/g),k=Ut(b,0,l-1);return{artifactIdsToShow:x.slice(k*g,(k+1)*g),numPages:l,currentPageIndex:k}},[x,b,g]),Ft=x.length!==$?`${x.length}/${$}`:`${$}`,Mt=i.useCallback((l,k)=>{var K;(K=O.current)==null||K.scrollIntoView({behavior:"smooth"}),P(k-1)},[P,O]),rt={count:et,page:Et+1,onChange:Mt},at={numShowing:tt.length,total:Ft,t:r,namespace:"artifact"},$t={sortKeys:[...lt],value:u,onChange:l=>e.displayArtifact.set({sortType:l}),ascending:I,onChangeAsc:l=>e.displayArtifact.set({ascending:l})};return n(w,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(i.Suspense,{fallback:!1,children:t(we,{artifactIdToEdit:c?"new":"",cancelEdit:h,allowUpload:!0,allowEmpty:!0})}),t(i.Suspense,{fallback:!1,children:t(ge,{show:d,onHide:y})}),t(ne,{pageKey:"artifactPage",modalTitle:r`info.title`,text:r("tipsOfTheDay",{returnObjects:!0}),children:t(ve,{})}),Tt&&t(Xt,{}),t(me,{numShowing:x.length,total:$,artifactIds:x}),t(S,{ref:O,children:t(m,{children:t(Zt,{placement:"top",title:t(A,{t:r,i18nKey:"efficiencyFilter.title",children:"Substats to use in efficiency calculation"}),children:t(w,{children:t(ie,{selectedKeys:p,onChange:l=>e.displayArtifact.set({effFilter:l})})})})})}),t(S,{children:n(m,{children:[t(w,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ot,{paginationProps:rt,showingTextProps:at,displaySort:!0,sortByButtonProps:$t})}),t(ye,{artifactIds:x})]})}),D&&t(Ae,{probabilityFilter:_,setProbabilityFilter:Pt}),n(o,{container:!0,columns:ht,spacing:1,children:[t(o,{item:!0,xs:!0,children:t(v,{fullWidth:!0,onClick:a,color:"info",startIcon:t(Ot,{}),children:r`addNew`})}),t(o,{item:!0,xs:1,children:t(v,{fullWidth:!0,onClick:f,color:"info",startIcon:t(vt,{}),children:r`showDup`})})]}),t(i.Suspense,{fallback:t(B,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(o,{container:!0,spacing:1,columns:ht,children:tt.map(l=>t(o,{item:!0,xs:1,children:t(St,{artifactId:l,effFilter:F,onDelete:_t,editorProps:{},canEquip:!0})},l))})}),et>1&&t(S,{children:t(m,{children:t(w,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ot,{paginationProps:rt,showingTextProps:at})})})})]})}export{ze as default};
