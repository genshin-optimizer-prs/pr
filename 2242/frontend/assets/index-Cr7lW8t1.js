import{ae as H,r as l,af as ct,d as e,G as o,b as t,T as i,ag as w,ah as ut,ai as dt,h as D,O as C,aj as N,ak as J,N as Q,S as $,al as Y,v as ht,w as ft,j as mt,z as I,a as U,am as X,ad as y,an as pt,ao as gt,ap as L,aq as yt,ar as xt,as as wt,M as vt,at as Z,au as tt,f as F,av as et,aw as At,ax as bt,ay as q,az as B,aA as M,P as kt,aB as St,aC as Dt,aD as Ct,ac as It,aE as Tt,aF as Rt,aG as Mt,aH as Lt,aI as $t,aJ as Et,aK as _t,aL as Bt,aM as Ft,aN as W}from"./index-BuiKxBtP.js";import{A as Ut}from"./AddArtInfo-guhDhiM3.js";import{d as Vt}from"./Settings-CVIi2Btx.js";import{L as qt}from"./Link-Pss0Xh8X.js";function Kt({pageKey:a,text:n="",modalTitle:r="",children:h}){const[c,f,u]=H(typeof window<"u"&&localStorage.getItem(`infoShown_${a}`)!=="true"),[s]=l.useState(Array.isArray(n)?ct(n):n),g=l.useCallback(()=>{u(),localStorage.setItem(`infoShown_${a}`,"true")},[u,a]);return e(D,{children:[e(o,{container:!0,children:[t(o,{item:!0,flexGrow:1,children:t(i,{variant:"caption",pl:1,children:s})}),t(o,{item:!0,xs:"auto",children:t(w,{size:"small",color:"info",variant:"contained",onClick:f,startIcon:t(ut,{}),children:t(dt,{ns:"ui",key18:"info"})})})]}),t(Y,{containerProps:{maxWidth:"xl"},open:c,onClose:g,children:e(D,{children:[e(C,{sx:{py:1,display:"flex"},children:[t(i,{variant:"h6",children:r}),t(N,{onClick:g,sx:{ml:"auto"},children:t(J,{})})]}),t(Q,{}),t(C,{children:t(l.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:500}),children:h})})]})})]})}var K={},Ot=ft;Object.defineProperty(K,"__esModule",{value:!0});var at=K.default=void 0,Pt=Ot(ht()),jt=mt,Gt=(0,Pt.default)((0,jt.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");at=K.default=Gt;function Wt({numShowing:a,total:n,artifactIds:r}){const{t:h}=I(["artifact","ui"]),c=U(),{filterOption:f}=X(),u=l.useCallback(s=>c.displayArtifact.set({filterOption:{...f,...s}}),[c,f]);return t(l.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:300}),children:t(D,{children:e(C,{children:[e(o,{container:!0,children:[t(o,{item:!0,children:t(i,{variant:"h6",children:t(y,{t:h,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(o,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:e(i,{children:[t("strong",{children:a})," / ",n]})}),t(o,{item:!0,children:t(w,{size:"small",color:"error",onClick:()=>c.displayArtifact.set({action:"reset"}),startIcon:t(pt,{}),children:t(y,{t:h,i18nKey:"ui:reset"})})})]}),t(l.Suspense,{fallback:t($,{variant:"rectangular",width:"100%",height:400}),children:t(gt,{filterOption:f,filterOptionDispatch:u,filteredIds:r})})]})})})}function zt({artifactIds:a}){const{t:n}=I(["artifact","ui"]),r=U(),{numDelete:h,numUnequip:c,numUnlock:f,numLock:u}=l.useMemo(()=>{const d=a.map(b=>r.arts.get(b)),p=d.reduce((b,S)=>b+(S.lock?0:1),0),v=d.length-p,E=p,A=d.reduce((b,S)=>b+(S.location?1:0),0);return{numDelete:E,numUnequip:A,numUnlock:p,numLock:v}},[a,r]);return e(o,{container:!0,spacing:1,alignItems:"center",children:[t(o,{item:!0,xs:12,sm:6,md:3,children:e(w,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to unequip ${c} artifacts currently equipped on characters?`)&&a.map(d=>r.arts.set(d,{location:""})),startIcon:t(at,{}),children:[t(y,{t:n,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(L,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(w,{fullWidth:!0,color:"error",disabled:!h,onClick:()=>window.confirm(`Are you sure you want to delete ${h} artifacts?`)&&a.map(d=>{var p;return!((p=r.arts.get(d))!=null&&p.lock)&&r.arts.remove(d)}),startIcon:t(yt,{}),children:[t(y,{t:n,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(L,{sx:{ml:1},color:h?"success":"secondary",children:h})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(w,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to unlock ${u} artifacts?`)&&a.map(d=>r.arts.set(d,{lock:!1})),startIcon:t(xt,{}),children:[t(y,{t:n,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(L,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(o,{item:!0,xs:12,sm:6,md:3,children:e(w,{fullWidth:!0,color:"error",disabled:!f,onClick:()=>window.confirm(`Are you sure you want to lock ${f} artifacts?`)&&a.map(d=>r.arts.set(d,{lock:!0})),startIcon:t(wt,{}),children:[t(y,{t:n,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(L,{sx:{ml:1},color:f?"success":"secondary",children:f})]})}),t(o,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(i,{variant:"caption",color:"text.secondary",children:e(y,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function Ht({setArtifactIdToEdit:a,show:n,onHide:r}){const{t:h}=I("artifact");return t(Y,{open:n,onClose:r,children:e(D,{children:[t(vt,{title:e(i,{variant:"h6",flexGrow:1,display:"flex",alignItems:"center",children:[t(Z,{sx:{verticalAlign:"text-top",mr:1}}),h`showDup`]}),action:t(N,{onClick:r,children:t(J,{})})}),t(Q,{}),t(C,{children:t(Nt,{setArtifactIdToEdit:a})})]})})}function Nt({setArtifactIdToEdit:a}){const{t:n}=I("artifact"),r=U(),[h,c]=tt();l.useEffect(()=>r.arts.followAny(c),[c,r]);const f=l.useMemo(()=>{const u=h&&[];let s=r.arts.keys;for(;s.length!==0;){const g=s.shift();if(!g)continue;const T=r.arts.get(g);if(!T)continue;const{duplicated:k}=r.arts.findDups(T,s);if(!k.length)continue;const d=k.map(p=>p.id);u.push([g,...d].sort(p=>{var v;return((v=r.arts.get(p))==null?void 0:v.location)??""?-1:1})),s=s.filter(p=>!d.includes(p))}return u},[r,h]);return e(bt,{spacing:2,children:[f.map(u=>t(D,{sx:{overflowX:"scroll"},children:t(C,{sx:{display:"flex",gap:1},children:u.map(s=>t(F,{sx:{minWidth:300},children:t(et,{artifactId:s,setLocation:g=>r.arts.set(s,{location:g}),onLockToggle:()=>r.arts.set(s,({lock:g})=>({lock:!g})),onDelete:()=>r.arts.remove(s),onEdit:()=>a(s)})},s))})},u.join())),!f.length&&t(At,{variant:"filled",severity:"success",children:n`noDupAlert`})]})}const Jt=""+new URL("artifactcard-CYZmz0U0.png",import.meta.url).href,Qt=""+new URL("artifacteditor-BryQ3Lmm.png",import.meta.url).href,Yt=""+new URL("artifactfilter-DK_eMtaJ.png",import.meta.url).href;function Xt(){return t(F,{display:"inline-flex",gap:.3,sx:{height:"1.5em"},children:St(0,5).map(a=>t(Dt,{color:`roll${a+1}.main`,value:(a+1)/6*100},a))})}function Zt(){const{t:a}=I("artifact");return e(o,{container:!0,spacing:1,children:[t(o,{item:!0,xs:12,lg:5,xl:4,children:t(q,{src:Jt})}),t(o,{item:!0,xs:12,lg:7,xl:8,children:e(y,{t:a,i18nKey:"info.section1",children:[t(i,{variant:"h5",children:"Substat rolls"}),e(i,{gutterBottom:!0,children:["The ",t("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",t(Xt,{}),"."]}),t(i,{variant:"h5",children:"Substat Roll Value"}),e(i,{gutterBottom:!0,children:["The Roll Value(RV) of an subtat is a percentage of the current value over the highest potential 5",t(B,{...M}),"value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In RV: ",t("b",{children:"5.8/7.8 = 69.2%."})]}),t(i,{variant:"h5",children:"Current Roll Value vs. Maximum Roll Value"}),e(i,{gutterBottom:!0,children:["When a 5",t(B,{...M})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 900% RV artifact. However, most of the artifacts are not this lucky. The ",t("b",{children:"Current RV"})," of an artifact is a percentage over that 100% artifact. The ",t("b",{children:"Maximum RV"})," is the maximum possible RV an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]})]})}),t(o,{item:!0,xs:12,lg:6,xl:7,children:e(y,{t:a,i18nKey:"info.section2",children:[t(i,{variant:"h5",children:"Artifact Editor"}),e(i,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",t(B,{...M})," to 5",t(B,{...M})," Artifact. When a substat is inputted, it can calculate the exact roll values. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),t(i,{variant:"h5",children:"Scan screenshots"}),e(i,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the",t(L,{color:"info",children:"Show Me How!"})," button to learn more."]}),t(i,{variant:"h6",children:"Automatic Artifact Scanner"}),e(i,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",t(Vt,{...M})," Database.",t(qt,{component:kt,to:"/scanner",children:"Click here"}),"for a list of scanners that are compatible with GO."]}),t(i,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),e(i,{children:["Did you know GO can detect if you are adding a ",t("b",{children:"duplicate"}),"artifact that exists in the system? It can also detect if the current artifact in editor is an ",t("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),t(o,{item:!0,xs:12,lg:6,xl:5,children:t(q,{src:Qt})}),t(o,{item:!0,xs:12,lg:7,xl:6,children:t(q,{src:Yt})}),t(o,{item:!0,xs:12,lg:5,xl:6,children:e(y,{t:a,i18nKey:"info.section3",children:[t(i,{variant:"h5",children:"Artifact Inventory"}),e(i,{gutterBottom:!0,children:["All your artifacts that you've added to GO are displayed here. The filters here allow you to further refine your view of your artifacts."," "]}),t(i,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),t(i,{children:"By utilizing the artifact filter, and the artifact RV, you can quickly find artifacts to feed as food."}),t(i,{children:"In this example, the filters are set thusly: "}),t(i,{component:"div",children:e("ul",{children:[t("li",{children:"Limit level to 0-8."}),t("li",{children:"Unlocked artifacts in Inventory."}),t("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to RV calculations."}),t("li",{children:"Sorted by Ascending Max Roll Value."})]})}),t(i,{children:"This will filter the artifact Inventory by the lowest RV artifacts, for desired substats."})]})})]})}const z={xs:1,sm:2,md:3,lg:3,xl:4},te={xs:5,sm:6,md:12,lg:12,xl:12};function oe(){const{t:a}=I(["artifact","ui"]),n=U(),r=X(),[h,c]=l.useState(),[f,u,s]=H(!1),g=Ct(),{sortType:T,effFilter:k,ascending:d}=r,[p,v]=tt(),E=l.useDeferredValue(p),A=l.useMemo(()=>new Set(k),[k]);l.useEffect(()=>(It.send({hitType:"pageview",page:"/artifact"}),n.arts.followAny(()=>v())),[n,v]);const b=l.useMemo(()=>!n.arts.values.length,[n]),S=l.useMemo(()=>Tt(A),[A]),O=l.useMemo(()=>Rt({effFilterSet:A}),[A]),P=l.useDeferredValue(r),{artifactIds:x,totalArtNum:_}=l.useMemo(()=>{const{sortType:m=W[0],ascending:R=!1,filterOption:lt}=P,G=n.arts.values;return{artifactIds:G.filter(Mt(lt,O)).sort(Lt(_t[m]??[],R,S)).map(st=>st.id),totalArtNum:G.length,...E}},[P,E,n,S,O]),{numShow:j,setTriggerElement:rt}=$t(te[g],x.length),V=l.useMemo(()=>x.slice(0,j),[x,j]),nt=x.length!==_?`${x.length}/${_}`:`${_}`,it={numShowing:V.length,total:nt,t:a,namespace:"artifact"},ot={sortKeys:[...W],value:T,onChange:m=>n.displayArtifact.set({sortType:m}),ascending:d,onChangeAsc:m=>n.displayArtifact.set({ascending:m})};return e(F,{display:"flex",flexDirection:"column",gap:1,children:[t(l.Suspense,{fallback:!1,children:t(Bt,{artifactIdToEdit:h,cancelEdit:()=>c(void 0),allowUpload:!0,allowEmpty:!0})}),t(l.Suspense,{fallback:!1,children:t(Ht,{show:f,onHide:s,setArtifactIdToEdit:c})}),t(Kt,{pageKey:"artifactPage",modalTitle:a`info.title`,text:a("tipsOfTheDay",{returnObjects:!0}),children:t(Zt,{})}),b&&t(Ut,{}),t(Wt,{numShowing:x.length,total:_,artifactIds:x}),t(D,{children:e(C,{children:[t(F,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(Ft,{showingTextProps:it,sortByButtonProps:ot})}),t(zt,{artifactIds:x})]})}),e(o,{container:!0,columns:z,spacing:1,children:[t(o,{item:!0,xs:!0,children:t(w,{fullWidth:!0,onClick:()=>c("new"),color:"info",startIcon:t(Et,{}),children:a`addNew`})}),t(o,{item:!0,xs:1,children:t(w,{fullWidth:!0,onClick:u,color:"info",startIcon:t(Z,{}),children:a`showDup`})})]}),e(l.Suspense,{fallback:t($,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[t(o,{container:!0,spacing:1,columns:z,children:V.map(m=>t(o,{item:!0,xs:1,children:t(et,{artifactId:m,effFilter:A,onDelete:()=>n.arts.remove(m),onEdit:()=>c(m),setLocation:R=>n.arts.set(m,{location:R}),onLockToggle:()=>n.arts.set(m,({lock:R})=>({lock:!R}))})},m))}),x.length!==V.length&&t($,{ref:m=>{m&&rt(m)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}export{oe as default};
