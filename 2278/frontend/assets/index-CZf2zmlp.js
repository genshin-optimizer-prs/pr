import{r as u,br as j,bs as E,bt as P,bu as k,bv as U,bw as K,j as L,bx as H,by as V,bz as B,bA as rt,bB as re,bC as st,c as nt,bD as ot,v as it,w as lt,a as me,bE as fe,z as ve,bF as $e,bG as O,aI as xe,d as b,O as F,b as e,bc as J,aT as A,az as I,bH as Q,bI as Te,bk as we,S as z,f as T,X as W,bJ as ke,bK as Re,ai as ue,bg as X,bL as he,K as ct,L as dt,bM as Ce,bN as He,aB as pt,bO as ut,M as ht,bP as bt,bQ as ze,aj as Pe,ak as je,G as C,h as Y,al as Ee,T as N,bR as yt,b0 as Ue,ae as Ke,bS as ae,g as Ve,bT as gt,V as mt,Y as ce,H as se,bU as ft,aH as Fe,I as _,bV as Ge,bW as vt,bX as qe,bY as xt,bZ as Tt,b_ as wt,b$ as Ct,c0 as ee,c1 as St,c2 as $t,c3 as kt,c4 as Je,c5 as Qe,c6 as Xe,c7 as ne,c8 as Rt,c9 as ge,ca as be,b6 as Mt,cb as Me,cc as Lt,cd as Dt,ce as Ot,P as Nt,cf as _t,Z as Bt,W as Wt,U as At,N as It,cg as Ht,ch as te,ci as zt}from"./index-CoerZXu1.js";const Pt=u.createContext(),Ye=Pt;function jt(t){return j("MuiTable",t)}E("MuiTable",["root","stickyHeader"]);const Et=["className","component","padding","size","stickyHeader"],Ut=t=>{const{classes:a,stickyHeader:o}=t;return V({root:["root",o&&"stickyHeader"]},jt,a)},Kt=P("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>k({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":k({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})),Le="table",Vt=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTable"}),{className:p,component:l=Le,padding:h="normal",size:r="medium",stickyHeader:c=!1}=n,y=K(n,Et),m=k({},n,{component:l,padding:h,size:r,stickyHeader:c}),f=Ut(m),$=u.useMemo(()=>({padding:h,size:r,stickyHeader:c}),[h,r,c]);return L.jsx(Ye.Provider,{value:$,children:L.jsx(Kt,k({as:l,role:l===Le?null:"table",ref:o,className:H(f.root,p),ownerState:m},y))})}),oe=Vt,Ft=u.createContext(),de=Ft;function Gt(t){return j("MuiTableBody",t)}E("MuiTableBody",["root"]);const qt=["className","component"],Jt=t=>{const{classes:a}=t;return V({root:["root"]},Gt,a)},Qt=P("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-row-group"}),Xt={variant:"body"},De="tbody",Yt=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableBody"}),{className:p,component:l=De}=n,h=K(n,qt),r=k({},n,{component:l}),c=Jt(r);return L.jsx(de.Provider,{value:Xt,children:L.jsx(Qt,k({className:H(c.root,p),as:l,ref:o,role:l===De?null:"rowgroup",ownerState:r},h))})}),ie=Yt;function Zt(t){return j("MuiTableCell",t)}const ea=E("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ta=ea,aa=["align","className","component","padding","scope","size","sortDirection","variant"],ra=t=>{const{classes:a,variant:o,align:n,padding:p,size:l,stickyHeader:h}=t,r={root:["root",o,h&&"stickyHeader",n!=="inherit"&&`align${B(n)}`,p!=="normal"&&`padding${B(p)}`,`size${B(l)}`]};return V(r,Zt,a)},sa=P("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,a[o.variant],a[`size${B(o.size)}`],o.padding!=="normal"&&a[`padding${B(o.padding)}`],o.align!=="inherit"&&a[`align${B(o.align)}`],o.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>k({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?rt(re(t.palette.divider,1),.88):st(re(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},a.variant==="body"&&{color:(t.vars||t).palette.text.primary},a.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${ta.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),na=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableCell"}),{align:p="inherit",className:l,component:h,padding:r,scope:c,size:y,sortDirection:m,variant:f}=n,$=K(n,aa),w=u.useContext(Ye),x=u.useContext(de),d=x&&x.variant==="head";let S;h?S=h:S=d?"th":"td";let i=c;S==="td"?i=void 0:!i&&d&&(i="col");const s=f||x&&x.variant,g=k({},n,{align:p,component:S,padding:r||(w&&w.padding?w.padding:"normal"),size:y||(w&&w.size?w.size:"medium"),sortDirection:m,stickyHeader:s==="head"&&w&&w.stickyHeader,variant:s}),R=ra(g);let D=null;return m&&(D=m==="asc"?"ascending":"descending"),L.jsx(sa,k({as:S,ref:o,className:H(R.root,l),"aria-sort":D,scope:i,ownerState:g},$))}),v=na;function oa(t){return j("MuiTableHead",t)}E("MuiTableHead",["root"]);const ia=["className","component"],la=t=>{const{classes:a}=t;return V({root:["root"]},oa,a)},ca=P("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-header-group"}),da={variant:"head"},Oe="thead",pa=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableHead"}),{className:p,component:l=Oe}=n,h=K(n,ia),r=k({},n,{component:l}),c=la(r);return L.jsx(de.Provider,{value:da,children:L.jsx(ca,k({as:l,className:H(c.root,p),ref:o,role:l===Oe?null:"rowgroup",ownerState:r},h))})}),le=pa;function ua(t){return j("MuiTableRow",t)}const ha=E("MuiTableRow",["root","selected","hover","head","footer"]),Ne=ha,ba=["className","component","hover","selected"],ya=t=>{const{classes:a,selected:o,hover:n,head:p,footer:l}=t;return V({root:["root",o&&"selected",n&&"hover",p&&"head",l&&"footer"]},ua,a)},ga=P("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.head&&a.head,o.footer&&a.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Ne.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Ne.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:re(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:re(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),_e="tr",ma=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableRow"}),{className:p,component:l=_e,hover:h=!1,selected:r=!1}=n,c=K(n,ba),y=u.useContext(de),m=k({},n,{component:l,hover:h,selected:r,head:y&&y.variant==="head",footer:y&&y.variant==="footer"}),f=ya(m);return L.jsx(ga,k({as:l,ref:o,className:H(f.root,p),role:l===_e?null:"row",ownerState:m},c))}),M=ma,fa=nt(L.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function va(t){return j("MuiTableSortLabel",t)}const xa=E("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),ye=xa,Ta=["active","children","className","direction","hideSortIcon","IconComponent"],wa=t=>{const{classes:a,direction:o,active:n}=t,p={root:["root",n&&"active"],icon:["icon",`iconDirection${B(o)}`]};return V(p,va,a)},Ca=P(ot,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.active&&a.active]}})(({theme:t})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${ye.icon}`]:{opacity:.5}},[`&.${ye.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${ye.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}})),Sa=P("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.icon,a[`iconDirection${B(o.direction)}`]]}})(({theme:t,ownerState:a})=>k({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},a.direction==="desc"&&{transform:"rotate(0deg)"},a.direction==="asc"&&{transform:"rotate(180deg)"})),$a=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableSortLabel"}),{active:p=!1,children:l,className:h,direction:r="asc",hideSortIcon:c=!1,IconComponent:y=fa}=n,m=K(n,Ta),f=k({},n,{active:p,direction:r,hideSortIcon:c,IconComponent:y}),$=wa(f);return L.jsxs(Ca,k({className:H($.root,h),component:"span",disableRipple:!0,ownerState:f,ref:o},m,{children:[l,c&&!p?null:L.jsx(Sa,{as:y,className:H($.icon),ownerState:f})]}))}),Ze=$a;var Se={},ka=lt;Object.defineProperty(Se,"__esModule",{value:!0});var pe=Se.default=void 0,Ra=ka(it()),Ma=L,La=(0,Ra.default)((0,Ma.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");pe=Se.default=La;const Be=[5,4,3];function Da(){const t=me(),a=fe(t.displayArchive),[o,n]=u.useState(""),p=u.useDeferredValue(o),l=X([...Be]),{t:h}=ve($e.map(d=>`artifact_${d}_gen`)),{artifact:r}=a,c=u.useCallback(d=>t.displayArchive.set({artifact:{...r,...d}}),[t,r]),y=u.useMemo(()=>$e.filter(d=>{const{rarities:S}=he(d);if(!r.rarity.includes(Math.max(...S)))return!1;const i=O.t(`artifactNames_gen:${d}`).toLocaleLowerCase(),s=h("setEffects.4",{ns:`artifact_${d}_gen`}).toLocaleLowerCase(),g=h("setEffects.2",{ns:`artifact_${d}_gen`}).toLocaleLowerCase();return!(p&&!i.includes(p.toLocaleLowerCase())&&!g.includes(p.toLocaleLowerCase())&&!s.includes(p.toLocaleLowerCase()))}),[r,p,h]),m=u.useMemo(()=>y.filter(d=>!d.startsWith("Prayers")),[y]),f=u.useMemo(()=>y.filter(d=>d.startsWith("Prayers")),[y]),{numShow:$,setTriggerElement:w}=xe(10,m.length),x=u.useMemo(()=>m.slice(0,$),[m,$]);return b(T,{children:[b(F,{sx:{display:"flex",gap:2},children:[e(Q,{value:r.rarity,children:Be.map(d=>e(J,{value:d,onClick:()=>c({rarity:l(r.rarity,d)}),children:e(A,{color:`rarity${d}`,children:e(I,{sx:{verticalAlign:"text-top"}})})},d))}),e(we,{fullWidth:!0,variant:"outlined",value:o,onChange:d=>n(d.target.value),InputProps:{startAdornment:e(Te,{position:"start",children:e(pe,{})})}})]}),b(oe,{children:[e(le,{children:b(M,{children:[e(v,{children:"Set"}),e(v,{children:"Rarity"}),e(v,{children:"2-piece Bonus"}),e(v,{children:"4-piece Bonus"})]})}),b(ie,{children:[x.map(d=>{const{rarities:S}=he(d);return e(u.Suspense,{fallback:e(M,{children:e(v,{colSpan:4,children:e(z,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:b(M,{children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:ke(d)}),e(Re,{setKey:d})]})}),e(v,{children:e(T,{display:"flex",children:S.sort().reverse().map(i=>e(A,{color:`rarity${i}`,children:e(I,{})},i))})}),e(v,{children:e(ue,{ns:`artifact_${d}_gen`,key18:"setEffects.2"})}),e(v,{children:e(ue,{ns:`artifact_${d}_gen`,key18:"setEffects.4"})})]},d)})}),m.length!==x.length&&e(M,{children:e(v,{colSpan:4,children:e(z,{ref:d=>{d&&w(d)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]}),f.length!==0&&b(oe,{sx:{mt:2},children:[e(le,{children:b(M,{children:[e(v,{children:"Set"}),e(v,{children:"Rarity"}),e(v,{children:"1-piece Bonus"})]})}),e(ie,{children:f.map(d=>{const{rarities:S}=he(d);return b(M,{children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:ke(d)}),e(Re,{setKey:d})]})}),e(v,{children:e(T,{display:"flex",children:S.sort().reverse().map(i=>e(A,{color:`rarity${i}`,children:e(I,{})},i))})}),e(v,{width:"90%",children:e(ue,{ns:`artifact_${d}_gen`,key18:"setEffects.1"})})]},d)})})]})]})}const G={xs:12,sm:6,md:4};function Oa({show:t,character:a,onClose:o}){const{t:n}=ve("sheet_gen"),p=ct(),l=dt(p.breakpoints.up("lg")),{key:h,constellation:r,ascension:c}=a,{gender:y}=Ce(),m=He(h,y),f=[["auto",n("talents.auto")],["skill",n("talents.skill")],["burst",n("talents.burst")]],$=[["passive1",n("unlockPassive1"),1],["passive2",n("unlockPassive2"),4],["passive3",n("unlockPassive3"),0]],w=u.useMemo(()=>pt(1,ut).map(x=>e(q,{characterKey:h,talentKey:`constellation${x}`,subtitle:n("constellationLvl",{level:x})})),[n,h]);return e(Ee,{open:t,onClose:o,containerProps:{maxWidth:"xl"},children:b(Y,{children:[e(ht,{title:b(T,{children:[e(bt,{characterKey:h,sideMargin:!0}),e(T,{sx:{pl:1},component:"span",children:e(ze,{characterKey:h,gender:y})})]}),action:e(Pe,{onClick:o,children:e(je,{})})}),e(F,{children:b(C,{container:!0,spacing:1,children:[l&&e(C,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:w.map((x,d)=>e(T,{sx:{opacity:r>=d+1?1:.5},children:x},d))}),b(C,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:[f.map(([x,d])=>e(C,{item:!0,...G,children:e(q,{characterKey:h,talentKey:x,subtitle:d})},x)),!!m.getTalentOfKey("sprint")&&e(C,{item:!0,...G,children:e(q,{characterKey:h,talentKey:"sprint",subtitle:n("talents.altSprint")})}),!!m.getTalentOfKey("passive")&&e(C,{item:!0,...G,children:e(q,{characterKey:h,talentKey:"passive",subtitle:"Passive"})}),$.map(([x,d,S])=>{const i=c>=S;return m.getTalentOfKey(x)?e(C,{item:!0,style:{opacity:i?1:.5},...G,children:e(q,{characterKey:h,talentKey:x,subtitle:d})},x):null})]}),!l&&e(C,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:w.map((x,d)=>e(C,{item:!0,sx:{opacity:r>=d+1?1:.5},...G,children:x},d))})]})})]})})}function q({characterKey:t,talentKey:a,subtitle:o}){const{gender:n}=Ce(),l=He(t,n).getTalentOfKey(a);return e(Y,{bgt:"light",sx:{height:"100%"},children:b(F,{children:[b(C,{container:!0,sx:{flexWrap:"nowrap"},children:[e(C,{item:!0,children:e(T,{component:"img",src:l==null?void 0:l.img,sx:{width:60,height:"auto"}})}),b(C,{item:!0,flexGrow:1,sx:{pl:1},children:[e(N,{variant:"h6",children:l==null?void 0:l.name}),e(N,{variant:"subtitle1",children:o})]})]}),l!=null&&l.sections?e(yt,{sections:l.sections,hideDesc:!0}):null]})})}const We=[5,4];function Na(){const{silly:t}=u.useContext(Ue),a=me(),o=fe(a.displayArchive),n=X([...We]),p=X([...se]),[l,h]=u.useState(""),r=u.useDeferredValue(l),{character:c}=o,y=u.useCallback(i=>a.displayArchive.set({character:{...c,...i}}),[a,c]),m=u.useMemo(()=>ft.filter(i=>{const{rarity:s,weaponType:g}=ae(i);if(!c.rarity.includes(s)||!c.weaponType.includes(g))return!1;const R=O.t(`charNames_gen:${i}`),D=t&&O.exists(`sillyWisher_charNames:${i}`)?O.t(`sillyWisher_charNames:${i}`):"";return!(r&&!R.toLocaleLowerCase().includes(r.toLocaleLowerCase())&&!D.toLocaleLowerCase().includes(r.toLocaleLowerCase()))}),[c,r,t]),{numShow:f,setTriggerElement:$}=xe(10,m.length),w=i=>{const s=c.sortOrderBy===i&&c.sortOrder==="asc";y({sortOrder:s?"desc":"asc",sortOrderBy:i})},x=u.useMemo(()=>Fe([c.sortOrderBy],c.sortOrder==="asc",{name:i=>t&&O.exists(`sillyWisher_charNames:${i}`)?O.t(`sillyWisher_charNames:${i}`):O.t(`charNames_gen:${i}`),rarity:i=>ae(i).rarity,element:i=>Ve(i),type:i=>ae(i).weaponType}),[c.sortOrder,c.sortOrderBy,t]),d=u.useMemo(()=>m.sort(x).slice(0,f),[m,f,x]),S=[{key:"name",label:"Name",width:40},{key:"rarity",label:"Rarity",width:20},{key:"element",label:"Element",width:20},{key:"type",label:"Type",width:20}];return b(T,{children:[b(F,{sx:{display:"flex",gap:2},children:[e(Q,{value:c.rarity,children:We.map(i=>e(J,{value:i,onClick:()=>y({rarity:n(c.rarity,i)}),children:e(A,{color:`rarity${i}`,children:e(I,{sx:{verticalAlign:"text-top"}})})},i))}),e(Q,{value:c.weaponType,children:se.map(i=>{var s;return e(J,{value:i,onClick:()=>y({weaponType:p(c.weaponType,i)}),children:e(W,{src:(s=ce.weaponTypes)==null?void 0:s[i],size:2})},i)})}),e(we,{fullWidth:!0,variant:"outlined",value:l,onChange:i=>h(i.target.value),InputProps:{startAdornment:e(Te,{position:"start",children:e(pe,{})})}})]}),b(oe,{children:[e(le,{children:e(M,{children:S.map(({key:i,label:s,width:g})=>e(v,{sortDirection:c.sortOrderBy===i?c.sortOrder:!1,width:`${g}%`,children:e(Ze,{active:c.sortOrderBy===i,direction:c.sortOrderBy===i?c.sortOrder:"asc",onClick:()=>w(i),children:s})}))})}),b(ie,{children:[d.map(i=>e(_a,{characterKey:i},i)),d.length!==m.length&&e(M,{children:e(v,{colSpan:5,children:e(z,{ref:i=>{i&&$(i)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const _a=u.memo(function({characterKey:a}){var f;const{silly:o}=u.useContext(Ue),{gender:n}=Ce(),[p,l,h]=Ke(),{rarity:r,weaponType:c}=ae(a),y=Ve(a),m=u.useMemo(()=>({key:a,level:90,ascension:6,constellation:6,talent:{auto:10,skill:10,burst:10}}),[a]);return b(u.Suspense,{fallback:e(M,{children:e(v,{colSpan:4,children:e(z,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Oa,{show:p,character:m,onClose:h}),b(M,{hover:!0,onClick:l,sx:{cursor:"pointer"},children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:gt(a,n,o)}),e(ze,{characterKey:a,gender:n})]})}),e(v,{children:e(T,{display:"flex",children:e(A,{color:`rarity${r}`,children:e(I,{})})})}),e(v,{children:e(mt,{ele:y,iconProps:{color:y}})}),e(v,{children:e(W,{src:(f=ce.weaponTypes)==null?void 0:f[c],size:3,sideMargin:!0})})]})]})});function Ba({show:t,weaponUIData:a,weapon:o,onClose:n}){const{key:p,level:l=0,refinement:h=1,ascension:r=0}=o,c=p&&_(p),y=p?Ge(p,r>=2):"";return e(Ee,{open:t,onClose:n,containerProps:{maxWidth:"md"},children:e(Y,{children:e(F,{children:c&&a&&b(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:12,sm:3,children:b(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:6,sm:12,children:e(T,{sx:{position:"relative",display:"flex"},children:e(T,{component:"img",src:y,className:`grad-${c.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})})}),e(C,{item:!0,xs:6,sm:12,children:e(N,{children:e("small",{children:p&&e(vt,{weaponKey:p})})})})]})}),b(C,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[b(T,{display:"flex",gap:1,flexWrap:"wrap",children:[e(N,{variant:"h5",children:e(qe,{weaponKey:p})}),n&&e(Pe,{onClick:n,sx:{marginLeft:"auto"},children:e(je,{})})]}),b(N,{children:["Lv. ",xt(l,r)," R",h]}),e(Tt,{stars:c.rarity}),e(N,{variant:"subtitle1",children:e("strong",{children:p&&e(wt,{weaponKey:p})})}),e(N,{gutterBottom:!0,children:p&&e(Ct,{weaponKey:p,refineIndex:(a.get(ee.weapon.refinement).value??1)-1})}),e(T,{display:"flex",flexDirection:"column",gap:1,children:e(Y,{bgt:"light",children:e(St,{bgt:"light",children:[ee.weapon.main,ee.weapon.sub,ee.weapon.sub2].map(m=>{const f=a.get(m);return f.isEmpty||!f.value?null:e($t,{calcRes:f,component:kt},JSON.stringify(f.info))})})})})]})]})})})})}const Ae=[5,4,3,2,1];function Wa(){const t=me(),a=fe(t.displayArchive),o=X([...Ae]),n=X([...se]),[p,l]=u.useState(""),h=u.useDeferredValue(p),{weapon:r}=a,c=u.useCallback(s=>t.displayArchive.set({weapon:{...r,...s}}),[t,r]),y=u.useMemo(()=>be.filter(s=>{const{rarity:g,subStat:R,weaponType:D}=_(s);if(!r.rarity.includes(g)||r.subStat.length&&(!R||!r.subStat.includes(R.type))||!r.weaponType.includes(D))return!1;const Z=O.t(`weaponNames_gen:${s}`);return!(h&&!Z.toLocaleLowerCase().includes(h.toLocaleLowerCase()))}),[r,h]),m=s=>{const g=r.sortOrderBy===s&&r.sortOrder==="asc";c({sortOrder:g?"desc":"asc",sortOrderBy:s})},f=u.useMemo(()=>{const s=new Map;return be.forEach(g=>{const{rarity:R}=_(g),D={id:"invalid",ascension:R>2?6:4,key:g,level:R>2?90:70,refinement:1,location:"",lock:!1},Z=Je([Qe(g).data,Xe(D)]),tt=Z.get(ne.weapon.main),at=Z.get(ne.weapon.sub);s.set(g,{main:ge(tt).valueString,sub:ge(at).valueString})}),s},[]),$=u.useMemo(()=>Fe(r.sortOrderBy==="sub"?["subType",r.sortOrderBy]:[r.sortOrderBy],r.sortOrder==="asc",{name:s=>O.t(`weaponNames_gen:${s}`),type:s=>_(s).weaponType,rarity:s=>_(s).rarity,main:s=>{var g;return((g=f.get(s))==null?void 0:g.main)??""},sub:s=>{var g;return((g=f.get(s))==null?void 0:g.sub)??""},subType:s=>{var g;return((g=_(s).subStat)==null?void 0:g.type)??""}}),[r.sortOrder,r.sortOrderBy,f]),{numShow:w,setTriggerElement:x}=xe(10,y.length),d=u.useMemo(()=>y.sort($).slice(0,w),[y,$,w]),S=u.useMemo(()=>Mt(Me,s=>be.forEach(g=>{const{subStat:R}=_(g);if(!R)return;const{type:D}=R;s[D].total++,y.includes(g)&&s[D].current++})),[y]),i=[{key:"name",label:"Name",width:30},{key:"type",label:"Type",width:10},{key:"rarity",label:"Rarity",width:10},{key:"main",label:"Main",width:20},{key:"sub",label:"Secondary",width:30}];return b(T,{children:[b(F,{sx:{display:"flex",gap:2},children:[e(Q,{value:r.rarity,children:Ae.map(s=>e(J,{value:s,onClick:()=>c({rarity:o(r.rarity,s)}),children:e(A,{color:`rarity${s}`,children:e(I,{sx:{verticalAlign:"text-top"}})})},s))}),e(Q,{value:r.weaponType,children:se.map(s=>{var g;return e(J,{value:s,onClick:()=>c({weaponType:n(r.weaponType,s)}),children:e(W,{src:(g=ce.weaponTypes)==null?void 0:g[s],size:2})},s)})}),e(Lt,{fullWidth:!0,substatKeys:r.subStat,setSubstatKeys:s=>{c({subStat:s})},totals:S,allSubstatKeys:[...Me]}),e(we,{fullWidth:!0,variant:"outlined",value:p,onChange:s=>l(s.target.value),InputProps:{startAdornment:e(Te,{position:"start",children:e(pe,{})})}})]}),b(oe,{children:[e(le,{children:e(M,{children:i.map(({key:s,label:g,width:R})=>e(v,{sortDirection:r.sortOrderBy===s?r.sortOrder:!1,width:`${R}%`,children:e(Ze,{active:r.sortOrderBy===s,direction:r.sortOrderBy===s?r.sortOrder:"asc",onClick:()=>m(s),children:g})}))})}),b(ie,{children:[d.map(s=>e(Aa,{weaponKey:s},s)),y.length!==d.length&&e(M,{children:e(v,{colSpan:5,children:e(z,{ref:s=>{s&&x(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const Aa=u.memo(function({weaponKey:a}){var f;const[o,n,p]=Ke(),{rarity:l,weaponType:h}=_(a),r=u.useMemo(()=>({id:"invalid",ascension:l>2?6:4,key:a,level:l>2?90:70,refinement:1,location:"",lock:!1}),[l,a]),c=u.useMemo(()=>Je([Qe(a).data,Xe(r)]),[a,r]),y=c.get(ne.weapon.main),m=c.get(ne.weapon.sub);return b(u.Suspense,{fallback:e(M,{children:e(v,{colSpan:5,children:e(z,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Ba,{show:o,weaponUIData:c,weapon:r,onClose:p}),b(M,{hover:!0,onClick:n,sx:{cursor:"pointer"},children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:Ge(a,!0)}),e(qe,{weaponKey:a})]})}),e(v,{children:e(W,{src:(f=ce.weaponTypes)==null?void 0:f[h],size:3,sideMargin:!0})}),e(v,{children:e(T,{display:"flex",children:e(A,{color:`rarity${l}`,children:e(I,{})})})}),e(v,{children:e(Ie,{node:y})}),e(v,{children:e(Ie,{node:m})})]})]})});function Ie({node:t}){const{name:a,icon:o}=Rt(t.info);return Number.isNaN(t.value)?null:b(T,{sx:{display:"flex"},children:[b(N,{flexGrow:1,children:[o," ",a]}),e(N,{children:ge(t).valueString})]})}const Ia={i18Key:"tabs.artifacts",icon:e(Bt,{}),value:"artifacts",to:"/artifacts"},Ha={i18Key:"tabs.weapons",icon:e(Wt,{}),value:"weapons",to:"/weapons"},za={i18Key:"tabs.characters",icon:e(At,{}),value:"characters",to:"/characters"},et=[Ia,Ha,za],Pa=et.map(({value:t})=>t);function Ea(){const{t}=ve("ui"),{params:{tab:a}}=Dt({path:"/archive/:tab",end:!1})??{params:{}},o=u.useMemo(()=>Pa.find(p=>p===a)??"artifacts",[a]);return b(Y,{children:[e(_t,{variant:"fullWidth",value:o,sx:{"& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px"}},children:et.map(({i18Key:n,icon:p,value:l,to:h})=>e(Ot,{icon:p,iconPosition:"start",value:l,label:t(n),component:Nt,to:`/archive${h}`},l))}),e(It,{}),e(u.Suspense,{fallback:e(z,{variant:"rectangular",width:"100%",height:1e3}),children:b(Ht,{children:[e(te,{path:"artifacts",element:e(Da,{})}),e(te,{path:"weapons",element:e(Wa,{})}),e(te,{path:"characters",element:e(Na,{})}),e(te,{path:"*",element:e(zt,{to:"artifacts",replace:!0})})]})})]})}export{Ea as default};
