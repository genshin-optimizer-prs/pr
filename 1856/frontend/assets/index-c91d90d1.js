import{Q as U,e as a,n as i,J as o,p as t,T as w,B as A,t as C,C as g,U as J,D as L,V as T,W as Y,r as Z,i as tt,j as et,u as _,b as R,N as k,_ as O,X as xt,Y as At,Z as rt,K,$ as wt,a0 as vt,s as kt,a1 as Dt,M as St,R as at}from"./index-0d7c274a.js";import{u as Ct,f as _t,s as It,a as Et,S as Tt}from"./StarDisplay-7f3de436.js";import{d as it,A as nt,a as Pt,b as Ft,p as Mt,c as $t,e as Q}from"./ArtifactSort-d65ed1d3.js";import{S as Rt,A as jt}from"./StatEditorList-46e231c1.js";import{d as ot}from"./Close-34532449.js";import{d as qt}from"./InfoTooltip-42def509.js";import{T as Ut}from"./index-c1ac91fc.js";import{u as st}from"./useDisplayArtifact-ef1d366b.js";import{d as Kt,a as Lt}from"./LockOpen-d8d36dd3.js";import{S as $}from"./SqBadge-3d87effb.js";import{C as Ot}from"./StatIcon-03a6739d.js";import{C as Wt}from"./ColoredText-e64184e3.js";import{A as Bt}from"./ConditionalWrapper-ea0976f9.js";import"./DropdownButton-7536db19.js";import"./BootstrapTooltip-eb571c85.js";import"./SlotIcon-d5571893.js";import"./index-b08138bf.js";import"./Artifact-45f321cd.js";import"./CardActionArea-f634d310.js";import"./Link-7c70b2d7.js";const Vt=r=>r[Math.floor(Math.random()*r.length)];function zt({pageKey:r,text:e="",modalTitle:n="",children:u}){const[f,h,c]=U(localStorage.getItem(`infoShown_${r}`)!=="true"),[d]=a.useState(Array.isArray(e)?Vt(e):e),m=a.useCallback(()=>{c(),localStorage.setItem(`infoShown_${r}`,"true")},[c,r]);return i(C,{children:[i(o,{container:!0,children:[t(o,{item:!0,flexGrow:1,children:t(w,{variant:"caption",pl:1,children:d})}),t(o,{item:!0,xs:"auto",children:t(A,{size:"small",color:"info",variant:"contained",onClick:h,startIcon:t(qt,{}),children:t(Ut,{ns:"ui",key18:"info"})})})]}),t(Y,{containerProps:{maxWidth:"xl"},open:f,onClose:m,children:i(C,{children:[i(g,{sx:{py:1,display:"flex"},children:[t(w,{variant:"h6",children:n}),t(J,{onClick:m,sx:{ml:"auto"},children:t(ot,{})})]}),t(L,{}),t(g,{children:t(a.Suspense,{fallback:t(T,{variant:"rectangular",width:"100%",height:500}),children:u})})]})})]})}var W={},Ht=tt;Object.defineProperty(W,"__esModule",{value:!0});var lt=W.default=void 0,Gt=Ht(Z()),Nt=et,Qt=(0,Gt.default)((0,Nt.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");lt=W.default=Qt;var B={},Xt=tt;Object.defineProperty(B,"__esModule",{value:!0});var ct=B.default=void 0,Jt=Xt(Z()),Yt=et,Zt=(0,Jt.default)((0,Yt.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");ct=B.default=Zt;const te=a.lazy(()=>O(()=>import("./ArtifactFilterDisplay-279c3af5.js").then(r=>r.b),["./ArtifactFilterDisplay-279c3af5.js","./index-0d7c274a.js","./index-2e826edb.css","./LockOpen-d8d36dd3.js","./useDisplayArtifact-ef1d366b.js","./SolidToggleButtonGroup-03d93245.js","./totalUtils-a33907e1.js","./BootstrapTooltip-eb571c85.js","./StarDisplay-7f3de436.js","./DropdownButton-7536db19.js","./ColoredText-e64184e3.js","./index-c1ac91fc.js","./SqBadge-3d87effb.js","./ArtifactStatKeyDisplay-2c2739ac.js","./Artifact-45f321cd.js","./StatIcon-03a6739d.js","./ConditionalWrapper-ea0976f9.js","./index-b08138bf.js","./SlotIcon-d5571893.js"],import.meta.url));function ee({numShowing:r,total:e,artifactIds:n}){const{t:u}=_(["artifact","ui"]),f=R(),{filterOption:h}=st(),c=a.useCallback(d=>f.displayArtifact.set({filterOption:{...h,...d}}),[f,h]);return t(a.Suspense,{fallback:t(T,{variant:"rectangular",width:"100%",height:300}),children:t(C,{children:i(g,{children:[i(o,{container:!0,children:[t(o,{item:!0,children:t(w,{variant:"h6",children:t(k,{t:u,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(o,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:r!==e&&i(w,{children:["Filtered ",t("strong",{children:r})," / ",e]})}),t(o,{item:!0,children:t(A,{size:"small",color:"error",onClick:()=>f.displayArtifact.set({action:"reset"}),startIcon:t(ct,{}),children:t(k,{t:u,i18nKey:"ui:reset"})})})]}),t(a.Suspense,{fallback:t(T,{variant:"rectangular",width:"100%",height:200}),children:t(te,{filterOption:h,filterOptionDispatch:c,filteredIds:n})})]})})})}function re({artifactIds:r}){const{t:e}=_(["artifact","ui"]),n=R(),{numDelete:u,numUnequip:f,numUnlock:h,numLock:c}=a.useMemo(()=>{const l=r.map(x=>n.arts.get(x)),p=l.reduce((x,S)=>x+(S.lock?0:1),0),y=l.length-p,v=p,j=l.reduce((x,S)=>x+(S.location?1:0),0);return{numDelete:v,numUnequip:j,numUnlock:p,numLock:y}},[r,n]);return i(o,{container:!0,spacing:1,alignItems:"center",children:[t(o,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!f,onClick:()=>window.confirm(`Are you sure you want to unequip ${f} artifacts currently equipped on characters?`)&&r.map(l=>n.arts.set(l,{location:""})),startIcon:t(lt,{}),children:[t(k,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t($,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to delete ${u} artifacts?`)&&r.map(l=>{var p;return!((p=n.arts.get(l))!=null&&p.lock)&&n.arts.remove(l)}),startIcon:t(xt,{}),children:[t(k,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t($,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to unlock ${c} artifacts?`)&&r.map(l=>n.arts.set(l,{lock:!1})),startIcon:t(Kt,{}),children:[t(k,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t($,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to lock ${h} artifacts?`)&&r.map(l=>n.arts.set(l,{lock:!0})),startIcon:t(Lt,{}),children:[t(k,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t($,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(o,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(w,{variant:"caption",color:"text.secondary",children:i(k,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function ae({show:r,onHide:e}){const{t:n}=_("artifact");return t(Y,{open:r,onClose:e,children:i(At,{children:[t(Ot,{title:i(w,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(it,{sx:{verticalAlign:"text-top",mr:1}}),n`showDup`]}),action:t(J,{onClick:e,children:t(ot,{})})}),t(L,{}),t(g,{children:t(ie,{})})]})})}function ie(){const{t:r}=_("artifact"),e=R(),[n,u]=rt();a.useEffect(()=>e.arts.followAny(u),[u,e]);const f=a.useMemo(()=>{const c=n&&[];let d=e.arts.keys;for(;d.length!==0;){const m=d.shift();if(!m)continue;const I=e.arts.get(m);if(!I)continue;const{duplicated:D}=e.arts.findDups(I,d);if(!D.length)continue;const l=D.map(p=>p.id);c.push([m,...l].sort(p=>{var y;return((y=e.arts.get(p))==null?void 0:y.location)??""?-1:1})),d=d.filter(p=>!l.includes(p))}return c},[e,n]),h=a.useMemo(()=>({}),[]);return i(vt,{spacing:2,children:[f.map(c=>t(C,{sx:{overflowX:"scroll"},children:t(g,{sx:{display:"flex",gap:1},children:c.map(d=>t(K,{sx:{minWidth:300},children:t(nt,{artifactId:d,canEquip:!0,onDelete:()=>e.arts.remove(d),editorProps:h})},d))})},c.join())),!f.length&&t(wt,{variant:"filled",severity:"success",children:r`noDupAlert`})]})}const ne=[...Dt];function oe({probabilityFilter:r={},setProbabilityFilter:e,disabled:n=!1}){const{t:u}=_("artifact");return i(C,{children:[t(g,{sx:{py:1},children:t(w,{variant:"h6",children:"Roll Probability Calculator"})}),t(L,{}),t(g,{children:i(o,{container:!0,spacing:1,children:[t(o,{item:!0,xs:12,md:6,children:t(kt,{children:t(g,{children:i(w,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",i(Wt,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(o,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(Rt,{statKeys:ne,statFilters:r,setStatFilters:e,disabled:n,label:u("probabilityFilter.label")})})]})})]})}const se=at.lazy(()=>O(()=>import("./ArtifactEditor-94b3f453.js"),["./ArtifactEditor-94b3f453.js","./index-0d7c274a.js","./index-2e826edb.css","./ChevronRight-00dd0e67.js","./index-c1ac91fc.js","./ColoredText-e64184e3.js","./SqBadge-3d87effb.js","./Close-34532449.js","./InfoTooltip-42def509.js","./BootstrapTooltip-eb571c85.js","./LockOpen-d8d36dd3.js","./ArtifactRarityDropdown-be61e201.js","./index-b08138bf.js","./ConditionalWrapper-ea0976f9.js","./StarDisplay-7f3de436.js","./DropdownButton-7536db19.js","./ArtifactStatKeyDisplay-2c2739ac.js","./Artifact-45f321cd.js","./StatIcon-03a6739d.js","./SlotIcon-d5571893.js","./ArtifactSort-d65ed1d3.js","./CardActionArea-f634d310.js","./TextButton-61e65ede.js"],import.meta.url)),le=at.lazy(()=>O(()=>import("./index-bf1c6bde.js"),["./index-bf1c6bde.js","./index-0d7c274a.js","./index-2e826edb.css","./Settings-8ed9c334.js","./StarDisplay-7f3de436.js","./DropdownButton-7536db19.js","./ColoredText-e64184e3.js","./index-c1ac91fc.js","./SqBadge-3d87effb.js","./ImgFullwidth-08772779.js","./ArtifactSort-d65ed1d3.js","./ConditionalWrapper-ea0976f9.js","./BootstrapTooltip-eb571c85.js","./SlotIcon-d5571893.js","./InfoTooltip-42def509.js","./index-b08138bf.js","./Artifact-45f321cd.js","./StatIcon-03a6739d.js","./CardActionArea-f634d310.js","./Link-7c70b2d7.js"],import.meta.url)),X={xs:1,sm:2,md:3,lg:3,xl:4},ce={xs:5,sm:6,md:12,lg:12,xl:12};function Pe(){const{t:r}=_(["artifact","ui"]),e=R(),n=st(),[u,f,h]=U(!1),[c,d,m]=U(!1),I=Ct(),{sortType:D,effFilter:l,ascending:p,probabilityFilter:y}=n,v=D==="probability",[j,x]=rt(),S=a.useDeferredValue(j),E=a.useMemo(()=>new Set(l),[l]),ut=a.useCallback(s=>e.arts.remove(s),[e]);a.useEffect(()=>(St.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny(()=>x())),[e,x]);const dt=a.useCallback(s=>e.displayArtifact.set({probabilityFilter:s}),[e]),ft=a.useMemo(()=>!e.arts.values.length,[e]),V=a.useMemo(()=>Pt(E,y),[E,y]),z=a.useMemo(()=>Ft(E),[E]),H=a.useDeferredValue(n),G=a.useDeferredValue(y);a.useEffect(()=>{if(v)return e.arts.values.forEach(s=>e.arts.setProbability(s.id,Mt(s,G))),()=>e.arts.values.forEach(s=>e.arts.setProbability(s.id,-1))},[e,v,G]);const{artifactIds:b,totalArtNum:P}=a.useMemo(()=>{const{sortType:s=Q[0],ascending:bt=!1,filterOption:gt}=H;let F=e.arts.values;return v&&(F=F.filter(M=>M.probability&&M.probability!==1)),{artifactIds:F.filter(_t(gt,z)).sort(It($t[s]??[],bt,V)).map(M=>M.id),totalArtNum:F.length,...S}},[H,S,e,V,z,v]),{numShow:N,setTriggerElement:ht}=Et(ce[I],b.length),q=a.useMemo(()=>b.slice(0,N),[b,N]),pt=b.length!==P?`${b.length}/${P}`:`${P}`,mt={numShowing:q.length,total:pt,t:r,namespace:"artifact"},yt={sortKeys:[...Q],value:D,onChange:s=>e.displayArtifact.set({sortType:s}),ascending:p,onChangeAsc:s=>e.displayArtifact.set({ascending:s})};return i(K,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(a.Suspense,{fallback:!1,children:t(se,{artifactIdToEdit:u?"new":"",cancelEdit:h,allowUpload:!0,allowEmpty:!0})}),t(a.Suspense,{fallback:!1,children:t(ae,{show:c,onHide:m})}),t(zt,{pageKey:"artifactPage",modalTitle:r`info.title`,text:r("tipsOfTheDay",{returnObjects:!0}),children:t(le,{})}),ft&&t(jt,{}),t(ee,{numShowing:b.length,total:P,artifactIds:b}),t(C,{children:i(g,{children:[t(K,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Tt,{showingTextProps:mt,sortByButtonProps:yt})}),t(re,{artifactIds:b})]})}),v&&t(oe,{probabilityFilter:y,setProbabilityFilter:dt}),i(o,{container:!0,columns:X,spacing:1,children:[t(o,{item:!0,xs:!0,children:t(A,{fullWidth:!0,onClick:f,color:"info",startIcon:t(Bt,{}),children:r`addNew`})}),t(o,{item:!0,xs:1,children:t(A,{fullWidth:!0,onClick:d,color:"info",startIcon:t(it,{}),children:r`showDup`})})]}),i(a.Suspense,{fallback:t(T,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(o,{container:!0,spacing:1,columns:X,children:q.map(s=>t(o,{item:!0,xs:1,children:t(nt,{artifactId:s,effFilter:E,onDelete:ut,editorProps:{},canEquip:!0})},s))}),b.length!==q.length&&t(T,{ref:s=>{s&&ht(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{Pe as default};
