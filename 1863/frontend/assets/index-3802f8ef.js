import{U as O,e as i,V as pt,n as a,K as o,p as t,T as w,B as A,t as S,C as g,W as Q,D as j,X as T,Y,r as mt,i as yt,j as bt,u as _,b as q,O as v,_ as L,Z as gt,$ as xt,a0 as Z,M as R,a1 as At,a2 as wt,s as kt,a3 as vt,N as Dt,R as J}from"./index-6073a460.js";import{u as Ct,f as St,s as _t,a as It,d as Et,S as Tt}from"./StarDisplay-30069fda.js";import{d as tt,A as et,a as Pt,b as Ft,p as Mt,c as $t,e as N}from"./ArtifactSort-33d1fab6.js";import{S as qt,A as Ut}from"./StatEditorList-90e0da21.js";import{d as rt}from"./Close-cd821ea5.js";import{d as Kt}from"./InfoTooltip-948860e1.js";import{T as Ot}from"./index-1cf228ba.js";import{u as it}from"./useDisplayArtifact-f7ad37b8.js";import{d as Rt,a as jt}from"./LockOpen-41a70321.js";import{d as Lt}from"./Replay-dbd0003e.js";import{S as $}from"./SqBadge-395aa416.js";import{C as Wt}from"./StatIcon-e014811d.js";import{C as Bt}from"./ColoredText-3abe6586.js";import"./DropdownButton-3ad82fdf.js";import"./util-3e22b532.js";import"./ConditionalWrapper-1803c367.js";import"./BootstrapTooltip-9c704c74.js";import"./SlotIcon-0403a556.js";import"./index-55122616.js";import"./CardActionArea-9dfede19.js";import"./Link-9fe2901a.js";function zt({pageKey:r,text:e="",modalTitle:n="",children:u}){const[f,h,c]=O(localStorage.getItem(`infoShown_${r}`)!=="true"),[d]=i.useState(Array.isArray(e)?pt(e):e),m=i.useCallback(()=>{c(),localStorage.setItem(`infoShown_${r}`,"true")},[c,r]);return a(S,{children:[a(o,{container:!0,children:[t(o,{item:!0,flexGrow:1,children:t(w,{variant:"caption",pl:1,children:d})}),t(o,{item:!0,xs:"auto",children:t(A,{size:"small",color:"info",variant:"contained",onClick:h,startIcon:t(Kt,{}),children:t(Ot,{ns:"ui",key18:"info"})})})]}),t(Y,{containerProps:{maxWidth:"xl"},open:f,onClose:m,children:a(S,{children:[a(g,{sx:{py:1,display:"flex"},children:[t(w,{variant:"h6",children:n}),t(Q,{onClick:m,sx:{ml:"auto"},children:t(rt,{})})]}),t(j,{}),t(g,{children:t(i.Suspense,{fallback:t(T,{variant:"rectangular",width:"100%",height:500}),children:u})})]})})]})}var W={},Vt=yt;Object.defineProperty(W,"__esModule",{value:!0});var at=W.default=void 0,Gt=Vt(mt()),Ht=bt,Nt=(0,Gt.default)((0,Ht.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");at=W.default=Nt;const Xt=i.lazy(()=>L(()=>import("./ArtifactFilterDisplay-732f510f.js").then(r=>r.b),["./ArtifactFilterDisplay-732f510f.js","./index-6073a460.js","./index-ef4687c1.css","./StarDisplay-30069fda.js","./DropdownButton-3ad82fdf.js","./ColoredText-3abe6586.js","./index-1cf228ba.js","./SqBadge-395aa416.js","./LockOpen-41a70321.js","./useDisplayArtifact-f7ad37b8.js","./SolidToggleButtonGroup-12e05c7f.js","./totalUtils-e3db49d6.js","./BootstrapTooltip-9c704c74.js","./ArtifactStatKeyDisplay-a2ec9daf.js","./util-3e22b532.js","./ConditionalWrapper-1803c367.js","./index-55122616.js","./SlotIcon-0403a556.js","./StatIcon-e014811d.js"],import.meta.url));function Qt({numShowing:r,total:e,artifactIds:n}){const{t:u}=_(["artifact","ui"]),f=q(),{filterOption:h}=it(),c=i.useCallback(d=>f.displayArtifact.set({filterOption:{...h,...d}}),[f,h]);return t(i.Suspense,{fallback:t(T,{variant:"rectangular",width:"100%",height:300}),children:t(S,{children:a(g,{children:[a(o,{container:!0,children:[t(o,{item:!0,children:t(w,{variant:"h6",children:t(v,{t:u,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(o,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:r!==e&&a(w,{children:["Filtered ",t("strong",{children:r})," / ",e]})}),t(o,{item:!0,children:t(A,{size:"small",color:"error",onClick:()=>f.displayArtifact.set({action:"reset"}),startIcon:t(Lt,{}),children:t(v,{t:u,i18nKey:"ui:reset"})})})]}),t(i.Suspense,{fallback:t(T,{variant:"rectangular",width:"100%",height:200}),children:t(Xt,{filterOption:h,filterOptionDispatch:c,filteredIds:n})})]})})})}function Yt({artifactIds:r}){const{t:e}=_(["artifact","ui"]),n=q(),{numDelete:u,numUnequip:f,numUnlock:h,numLock:c}=i.useMemo(()=>{const l=r.map(x=>n.arts.get(x)),p=l.reduce((x,C)=>x+(C.lock?0:1),0),y=l.length-p,k=p,U=l.reduce((x,C)=>x+(C.location?1:0),0);return{numDelete:k,numUnequip:U,numUnlock:p,numLock:y}},[r,n]);return a(o,{container:!0,spacing:1,alignItems:"center",children:[t(o,{item:!0,xs:12,sm:6,md:3,children:a(A,{fullWidth:!0,color:"error",disabled:!f,onClick:()=>window.confirm(`Are you sure you want to unequip ${f} artifacts currently equipped on characters?`)&&r.map(l=>n.arts.set(l,{location:""})),startIcon:t(at,{}),children:[t(v,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t($,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:a(A,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to delete ${u} artifacts?`)&&r.map(l=>{var p;return!((p=n.arts.get(l))!=null&&p.lock)&&n.arts.remove(l)}),startIcon:t(gt,{}),children:[t(v,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t($,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:a(A,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to unlock ${c} artifacts?`)&&r.map(l=>n.arts.set(l,{lock:!1})),startIcon:t(Rt,{}),children:[t(v,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t($,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:a(A,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to lock ${h} artifacts?`)&&r.map(l=>n.arts.set(l,{lock:!0})),startIcon:t(jt,{}),children:[t(v,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t($,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(o,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(w,{variant:"caption",color:"text.secondary",children:a(v,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function Zt({show:r,onHide:e}){const{t:n}=_("artifact");return t(Y,{open:r,onClose:e,children:a(xt,{children:[t(Wt,{title:a(w,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(tt,{sx:{verticalAlign:"text-top",mr:1}}),n`showDup`]}),action:t(Q,{onClick:e,children:t(rt,{})})}),t(j,{}),t(g,{children:t(Jt,{})})]})})}function Jt(){const{t:r}=_("artifact"),e=q(),[n,u]=Z();i.useEffect(()=>e.arts.followAny(u),[u,e]);const f=i.useMemo(()=>{const c=n&&[];let d=e.arts.keys;for(;d.length!==0;){const m=d.shift();if(!m)continue;const I=e.arts.get(m);if(!I)continue;const{duplicated:D}=e.arts.findDups(I,d);if(!D.length)continue;const l=D.map(p=>p.id);c.push([m,...l].sort(p=>{var y;return((y=e.arts.get(p))==null?void 0:y.location)??""?-1:1})),d=d.filter(p=>!l.includes(p))}return c},[e,n]),h=i.useMemo(()=>({}),[]);return a(wt,{spacing:2,children:[f.map(c=>t(S,{sx:{overflowX:"scroll"},children:t(g,{sx:{display:"flex",gap:1},children:c.map(d=>t(R,{sx:{minWidth:300},children:t(et,{artifactId:d,canEquip:!0,onDelete:()=>e.arts.remove(d),editorProps:h})},d))})},c.join())),!f.length&&t(At,{variant:"filled",severity:"success",children:r`noDupAlert`})]})}const te=[...vt];function ee({probabilityFilter:r={},setProbabilityFilter:e,disabled:n=!1}){const{t:u}=_("artifact");return a(S,{children:[t(g,{sx:{py:1},children:t(w,{variant:"h6",children:"Roll Probability Calculator"})}),t(j,{}),t(g,{children:a(o,{container:!0,spacing:1,children:[t(o,{item:!0,xs:12,md:6,children:t(kt,{children:t(g,{children:a(w,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",a(Bt,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(o,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(qt,{statKeys:te,statFilters:r,setStatFilters:e,disabled:n,label:u("probabilityFilter.label")})})]})})]})}const re=J.lazy(()=>L(()=>import("./ArtifactEditor-43e3961f.js"),["./ArtifactEditor-43e3961f.js","./index-6073a460.js","./index-ef4687c1.css","./ChevronRight-397518a7.js","./index-1cf228ba.js","./ColoredText-3abe6586.js","./SqBadge-395aa416.js","./Close-cd821ea5.js","./InfoTooltip-948860e1.js","./BootstrapTooltip-9c704c74.js","./LockOpen-41a70321.js","./ArtifactRarityDropdown-9a84cc6d.js","./index-55122616.js","./ConditionalWrapper-1803c367.js","./StarDisplay-30069fda.js","./DropdownButton-3ad82fdf.js","./ArtifactStatKeyDisplay-a2ec9daf.js","./util-3e22b532.js","./Replay-dbd0003e.js","./SlotIcon-0403a556.js","./StatIcon-e014811d.js","./ArtifactSort-33d1fab6.js","./CardActionArea-9dfede19.js","./TextButton-30e10c95.js"],import.meta.url)),ie=J.lazy(()=>L(()=>import("./index-8da2956e.js"),["./index-8da2956e.js","./index-6073a460.js","./index-ef4687c1.css","./Settings-7fb03bd7.js","./StarDisplay-30069fda.js","./DropdownButton-3ad82fdf.js","./ColoredText-3abe6586.js","./index-1cf228ba.js","./SqBadge-395aa416.js","./ImgFullwidth-4f68b25b.js","./ArtifactSort-33d1fab6.js","./util-3e22b532.js","./ConditionalWrapper-1803c367.js","./BootstrapTooltip-9c704c74.js","./SlotIcon-0403a556.js","./InfoTooltip-948860e1.js","./index-55122616.js","./StatIcon-e014811d.js","./CardActionArea-9dfede19.js","./Link-9fe2901a.js"],import.meta.url)),X={xs:1,sm:2,md:3,lg:3,xl:4},ae={xs:5,sm:6,md:12,lg:12,xl:12};function _e(){const{t:r}=_(["artifact","ui"]),e=q(),n=it(),[u,f,h]=O(!1),[c,d,m]=O(!1),I=Ct(),{sortType:D,effFilter:l,ascending:p,probabilityFilter:y}=n,k=D==="probability",[U,x]=Z(),C=i.useDeferredValue(U),E=i.useMemo(()=>new Set(l),[l]),nt=i.useCallback(s=>e.arts.remove(s),[e]);i.useEffect(()=>(Dt.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny(()=>x())),[e,x]);const ot=i.useCallback(s=>e.displayArtifact.set({probabilityFilter:s}),[e]),st=i.useMemo(()=>!e.arts.values.length,[e]),B=i.useMemo(()=>Pt(E,y),[E,y]),z=i.useMemo(()=>Ft(E),[E]),V=i.useDeferredValue(n),G=i.useDeferredValue(y);i.useEffect(()=>{if(k)return e.arts.values.forEach(s=>e.arts.setProbability(s.id,Mt(s,G))),()=>e.arts.values.forEach(s=>e.arts.setProbability(s.id,-1))},[e,k,G]);const{artifactIds:b,totalArtNum:P}=i.useMemo(()=>{const{sortType:s=N[0],ascending:ft=!1,filterOption:ht}=V;let F=e.arts.values;return k&&(F=F.filter(M=>M.probability&&M.probability!==1)),{artifactIds:F.filter(St(ht,z)).sort(_t($t[s]??[],ft,B)).map(M=>M.id),totalArtNum:F.length,...C}},[V,C,e,B,z,k]),{numShow:H,setTriggerElement:lt}=It(ae[I],b.length),K=i.useMemo(()=>b.slice(0,H),[b,H]),ct=b.length!==P?`${b.length}/${P}`:`${P}`,ut={numShowing:K.length,total:ct,t:r,namespace:"artifact"},dt={sortKeys:[...N],value:D,onChange:s=>e.displayArtifact.set({sortType:s}),ascending:p,onChangeAsc:s=>e.displayArtifact.set({ascending:s})};return a(R,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(i.Suspense,{fallback:!1,children:t(re,{artifactIdToEdit:u?"new":"",cancelEdit:h,allowUpload:!0,allowEmpty:!0})}),t(i.Suspense,{fallback:!1,children:t(Zt,{show:c,onHide:m})}),t(zt,{pageKey:"artifactPage",modalTitle:r`info.title`,text:r("tipsOfTheDay",{returnObjects:!0}),children:t(ie,{})}),st&&t(Ut,{}),t(Qt,{numShowing:b.length,total:P,artifactIds:b}),t(S,{children:a(g,{children:[t(R,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Tt,{showingTextProps:ut,sortByButtonProps:dt})}),t(Yt,{artifactIds:b})]})}),k&&t(ee,{probabilityFilter:y,setProbabilityFilter:ot}),a(o,{container:!0,columns:X,spacing:1,children:[t(o,{item:!0,xs:!0,children:t(A,{fullWidth:!0,onClick:f,color:"info",startIcon:t(Et,{}),children:r`addNew`})}),t(o,{item:!0,xs:1,children:t(A,{fullWidth:!0,onClick:d,color:"info",startIcon:t(tt,{}),children:r`showDup`})})]}),a(i.Suspense,{fallback:t(T,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(o,{container:!0,spacing:1,columns:X,children:K.map(s=>t(o,{item:!0,xs:1,children:t(et,{artifactId:s,effFilter:E,onDelete:nt,editorProps:{},canEquip:!0})},s))}),b.length!==K.length&&t(T,{ref:s=>{s&&lt(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{_e as default};