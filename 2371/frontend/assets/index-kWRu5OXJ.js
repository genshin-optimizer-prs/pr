import{r as u,bn as j,bo as E,bp as z,bq as R,br as U,bs as K,j as L,bt as H,bu as V,bv as B,bw as st,bx as re,by as nt,c as ot,bz as it,w as lt,x as ct,a as me,bA as fe,y as ve,bB as $e,bC as ue,bD as N,aE as xe,e as b,N as F,d as e,b8 as J,aP as A,au as I,bE as Q,bF as Te,bg as we,S as P,h as T,V as W,bG as Re,bH as ke,ae as he,bc as X,J as dt,K as pt,bI as Ce,bJ as Pe,ax as ut,bK as ht,L as bt,bL as yt,bM as ze,af as je,ag as Ee,G as C,i as Y,ah as Ue,bN as Me,T as O,bO as gt,aY as Ke,aa as Ve,bP as ae,b as Fe,bQ as mt,Q as ft,W as ce,F as se,bR as vt,aD as Ge,H as _,bS as qe,bT as xt,bU as Je,bV as Tt,bW as wt,bX as Ct,bY as St,bZ as ee,b_ as $t,b$ as Rt,c0 as kt,c1 as Qe,c2 as Xe,c3 as Ye,c4 as ne,c5 as Mt,c6 as ge,c7 as be,b2 as Lt,c8 as Le,c9 as Dt,ca as Nt,cb as Ot,O as _t,cc as Bt,X as Wt,U as At,M as It,cd as Ht,ce as te,cf as Pt}from"./index-rkLWuo7p.js";import{P as zt}from"./People-CKCD92Wa.js";const jt=u.createContext(),Ze=jt;function Et(t){return j("MuiTable",t)}E("MuiTable",["root","stickyHeader"]);const Ut=["className","component","padding","size","stickyHeader"],Kt=t=>{const{classes:a,stickyHeader:o}=t;return V({root:["root",o&&"stickyHeader"]},Et,a)},Vt=z("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>R({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":R({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})),De="table",Ft=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTable"}),{className:p,component:l=De,padding:h="normal",size:r="medium",stickyHeader:c=!1}=n,y=K(n,Ut),m=R({},n,{component:l,padding:h,size:r,stickyHeader:c}),f=Kt(m),$=u.useMemo(()=>({padding:h,size:r,stickyHeader:c}),[h,r,c]);return L.jsx(Ze.Provider,{value:$,children:L.jsx(Vt,R({as:l,role:l===De?null:"table",ref:o,className:H(f.root,p),ownerState:m},y))})}),oe=Ft,Gt=u.createContext(),de=Gt;function qt(t){return j("MuiTableBody",t)}E("MuiTableBody",["root"]);const Jt=["className","component"],Qt=t=>{const{classes:a}=t;return V({root:["root"]},qt,a)},Xt=z("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-row-group"}),Yt={variant:"body"},Ne="tbody",Zt=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableBody"}),{className:p,component:l=Ne}=n,h=K(n,Jt),r=R({},n,{component:l}),c=Qt(r);return L.jsx(de.Provider,{value:Yt,children:L.jsx(Xt,R({className:H(c.root,p),as:l,ref:o,role:l===Ne?null:"rowgroup",ownerState:r},h))})}),ie=Zt;function ea(t){return j("MuiTableCell",t)}const ta=E("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),aa=ta,ra=["align","className","component","padding","scope","size","sortDirection","variant"],sa=t=>{const{classes:a,variant:o,align:n,padding:p,size:l,stickyHeader:h}=t,r={root:["root",o,h&&"stickyHeader",n!=="inherit"&&`align${B(n)}`,p!=="normal"&&`padding${B(p)}`,`size${B(l)}`]};return V(r,ea,a)},na=z("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,a[o.variant],a[`size${B(o.size)}`],o.padding!=="normal"&&a[`padding${B(o.padding)}`],o.align!=="inherit"&&a[`align${B(o.align)}`],o.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>R({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?st(re(t.palette.divider,1),.88):nt(re(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},a.variant==="body"&&{color:(t.vars||t).palette.text.primary},a.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${aa.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),oa=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableCell"}),{align:p="inherit",className:l,component:h,padding:r,scope:c,size:y,sortDirection:m,variant:f}=n,$=K(n,ra),w=u.useContext(Ze),x=u.useContext(de),d=x&&x.variant==="head";let S;h?S=h:S=d?"th":"td";let i=c;S==="td"?i=void 0:!i&&d&&(i="col");const s=f||x&&x.variant,g=R({},n,{align:p,component:S,padding:r||(w&&w.padding?w.padding:"normal"),size:y||(w&&w.size?w.size:"medium"),sortDirection:m,stickyHeader:s==="head"&&w&&w.stickyHeader,variant:s}),k=sa(g);let D=null;return m&&(D=m==="asc"?"ascending":"descending"),L.jsx(na,R({as:S,ref:o,className:H(k.root,l),"aria-sort":D,scope:i,ownerState:g},$))}),v=oa;function ia(t){return j("MuiTableHead",t)}E("MuiTableHead",["root"]);const la=["className","component"],ca=t=>{const{classes:a}=t;return V({root:["root"]},ia,a)},da=z("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-header-group"}),pa={variant:"head"},Oe="thead",ua=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableHead"}),{className:p,component:l=Oe}=n,h=K(n,la),r=R({},n,{component:l}),c=ca(r);return L.jsx(de.Provider,{value:pa,children:L.jsx(da,R({as:l,className:H(c.root,p),ref:o,role:l===Oe?null:"rowgroup",ownerState:r},h))})}),le=ua;function ha(t){return j("MuiTableRow",t)}const ba=E("MuiTableRow",["root","selected","hover","head","footer"]),_e=ba,ya=["className","component","hover","selected"],ga=t=>{const{classes:a,selected:o,hover:n,head:p,footer:l}=t;return V({root:["root",o&&"selected",n&&"hover",p&&"head",l&&"footer"]},ha,a)},ma=z("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.head&&a.head,o.footer&&a.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${_e.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${_e.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:re(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:re(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Be="tr",fa=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableRow"}),{className:p,component:l=Be,hover:h=!1,selected:r=!1}=n,c=K(n,ya),y=u.useContext(de),m=R({},n,{component:l,hover:h,selected:r,head:y&&y.variant==="head",footer:y&&y.variant==="footer"}),f=ga(m);return L.jsx(ma,R({as:l,ref:o,className:H(f.root,p),role:l===Be?null:"row",ownerState:m},c))}),M=fa,va=ot(L.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function xa(t){return j("MuiTableSortLabel",t)}const Ta=E("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),ye=Ta,wa=["active","children","className","direction","hideSortIcon","IconComponent"],Ca=t=>{const{classes:a,direction:o,active:n}=t,p={root:["root",n&&"active"],icon:["icon",`iconDirection${B(o)}`]};return V(p,xa,a)},Sa=z(it,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.active&&a.active]}})(({theme:t})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${ye.icon}`]:{opacity:.5}},[`&.${ye.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${ye.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}})),$a=z("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.icon,a[`iconDirection${B(o.direction)}`]]}})(({theme:t,ownerState:a})=>R({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},a.direction==="desc"&&{transform:"rotate(0deg)"},a.direction==="asc"&&{transform:"rotate(180deg)"})),Ra=u.forwardRef(function(a,o){const n=U({props:a,name:"MuiTableSortLabel"}),{active:p=!1,children:l,className:h,direction:r="asc",hideSortIcon:c=!1,IconComponent:y=va}=n,m=K(n,wa),f=R({},n,{active:p,direction:r,hideSortIcon:c,IconComponent:y}),$=Ca(f);return L.jsxs(Sa,R({className:H($.root,h),component:"span",disableRipple:!0,ownerState:f,ref:o},m,{children:[l,c&&!p?null:L.jsx($a,{as:y,className:H($.icon),ownerState:f})]}))}),et=Ra;var Se={},ka=ct;Object.defineProperty(Se,"__esModule",{value:!0});var pe=Se.default=void 0,Ma=ka(lt()),La=L,Da=(0,Ma.default)((0,La.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");pe=Se.default=Da;const We=[5,4,3];function Na(){const t=me(),a=fe(t.displayArchive),[o,n]=u.useState(""),p=u.useDeferredValue(o),l=X([...We]),{t:h}=ve($e.map(d=>`artifact_${d}_gen`)),{artifact:r}=a,c=u.useCallback(d=>t.displayArchive.set({artifact:{...r,...d}}),[t,r]),y=u.useMemo(()=>$e.filter(d=>{const{rarities:S}=ue(d);if(!r.rarity.includes(Math.max(...S)))return!1;const i=N.t(`artifactNames_gen:${d}`).toLocaleLowerCase(),s=h("setEffects.4",{ns:`artifact_${d}_gen`}).toLocaleLowerCase(),g=h("setEffects.2",{ns:`artifact_${d}_gen`}).toLocaleLowerCase();return!(p&&!i.includes(p.toLocaleLowerCase())&&!g.includes(p.toLocaleLowerCase())&&!s.includes(p.toLocaleLowerCase()))}),[r,p,h]),m=u.useMemo(()=>y.filter(d=>!d.startsWith("Prayers")),[y]),f=u.useMemo(()=>y.filter(d=>d.startsWith("Prayers")),[y]),{numShow:$,setTriggerElement:w}=xe(10,m.length),x=u.useMemo(()=>m.slice(0,$),[m,$]);return b(T,{children:[b(F,{sx:{display:"flex",gap:2},children:[e(Q,{value:r.rarity,children:We.map(d=>e(J,{value:d,onClick:()=>c({rarity:l(r.rarity,d)}),children:e(A,{color:`rarity${d}`,children:e(I,{sx:{verticalAlign:"text-top"}})})},d))}),e(we,{fullWidth:!0,variant:"outlined",value:o,onChange:d=>n(d.target.value),InputProps:{startAdornment:e(Te,{position:"start",children:e(pe,{})})}})]}),b(oe,{children:[e(le,{children:b(M,{children:[e(v,{children:"Set"}),e(v,{children:"Rarity"}),e(v,{children:"2-piece Bonus"}),e(v,{children:"4-piece Bonus"})]})}),b(ie,{children:[x.map(d=>{const{rarities:S}=ue(d);return e(u.Suspense,{fallback:e(M,{children:e(v,{colSpan:4,children:e(P,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:b(M,{children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:Re(d)}),e(ke,{setKey:d})]})}),e(v,{children:e(T,{display:"flex",children:S.sort().reverse().map(i=>e(A,{color:`rarity${i}`,children:e(I,{})},i))})}),e(v,{children:e(he,{ns:`artifact_${d}_gen`,key18:"setEffects.2"})}),e(v,{children:e(he,{ns:`artifact_${d}_gen`,key18:"setEffects.4"})})]},d)})}),m.length!==x.length&&e(M,{children:e(v,{colSpan:4,children:e(P,{ref:d=>{d&&w(d)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]}),f.length!==0&&b(oe,{sx:{mt:2},children:[e(le,{children:b(M,{children:[e(v,{children:"Set"}),e(v,{children:"Rarity"}),e(v,{children:"1-piece Bonus"})]})}),e(ie,{children:f.map(d=>{const{rarities:S}=ue(d);return b(M,{children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:Re(d)}),e(ke,{setKey:d})]})}),e(v,{children:e(T,{display:"flex",children:S.sort().reverse().map(i=>e(A,{color:`rarity${i}`,children:e(I,{})},i))})}),e(v,{width:"90%",children:e(he,{ns:`artifact_${d}_gen`,key18:"setEffects.1"})})]},d)})})]})]})}const G={xs:12,sm:6,md:4};function Oa({show:t,character:a,onClose:o}){const{t:n}=ve("sheet_gen"),p=dt(),l=pt(p.breakpoints.up("lg")),{key:h,constellation:r,ascension:c}=a,{gender:y}=Ce(),m=Pe(h,y),f=[["auto",n("talents.auto")],["skill",n("talents.skill")],["burst",n("talents.burst")]],$=[["passive1",n("unlockPassive1"),1],["passive2",n("unlockPassive2"),4],["passive3",n("unlockPassive3"),0]],w=u.useMemo(()=>ut(1,ht).map(x=>e(q,{characterKey:h,talentKey:`constellation${x}`,subtitle:n("constellationLvl",{level:x})})),[n,h]);return e(Ue,{open:t,onClose:o,containerProps:{maxWidth:"xl"},children:b(Y,{children:[e(bt,{title:b(T,{children:[e(yt,{characterKey:h,sideMargin:!0}),e(T,{sx:{pl:1},component:"span",children:e(ze,{characterKey:h,gender:y})})]}),action:e(je,{onClick:o,children:e(Ee,{})})}),e(F,{children:b(C,{container:!0,spacing:1,children:[l&&e(C,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:w.map((x,d)=>e(T,{sx:{opacity:r>=d+1?1:.5},children:x},d))}),b(C,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:[f.map(([x,d])=>e(C,{item:!0,...G,children:e(q,{characterKey:h,talentKey:x,subtitle:d})},x)),!!m.getTalentOfKey("sprint")&&e(C,{item:!0,...G,children:e(q,{characterKey:h,talentKey:"sprint",subtitle:n("talents.altSprint")})}),!!m.getTalentOfKey("passive")&&e(C,{item:!0,...G,children:e(q,{characterKey:h,talentKey:"passive",subtitle:"Passive"})}),$.map(([x,d,S])=>{const i=c>=S;return m.getTalentOfKey(x)?e(C,{item:!0,style:{opacity:i?1:.5},...G,children:e(q,{characterKey:h,talentKey:x,subtitle:d})},x):null})]}),!l&&e(C,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:w.map((x,d)=>e(C,{item:!0,sx:{opacity:r>=d+1?1:.5},...G,children:x},d))})]})})]})})}function q({characterKey:t,talentKey:a,subtitle:o}){const{gender:n}=Ce(),l=Pe(t,n).getTalentOfKey(a);return e(Y,{bgt:"light",sx:{height:"100%"},children:b(F,{children:[b(C,{container:!0,sx:{flexWrap:"nowrap"},children:[e(C,{item:!0,children:e(T,{component:Me?Me:"img",src:l==null?void 0:l.img,sx:{width:60,height:"auto"}})}),b(C,{item:!0,flexGrow:1,sx:{pl:1},children:[e(O,{variant:"h6",children:l==null?void 0:l.name}),e(O,{variant:"subtitle1",children:o})]})]}),l!=null&&l.sections?e(gt,{sections:l.sections,hideDesc:!0}):null]})})}const Ae=[5,4];function _a(){const{silly:t}=u.useContext(Ke),a=me(),o=fe(a.displayArchive),n=X([...Ae]),p=X([...se]),[l,h]=u.useState(""),r=u.useDeferredValue(l),{character:c}=o,y=u.useCallback(i=>a.displayArchive.set({character:{...c,...i}}),[a,c]),m=u.useMemo(()=>vt.filter(i=>{const{rarity:s,weaponType:g}=ae(i);if(!c.rarity.includes(s)||!c.weaponType.includes(g))return!1;const k=N.t(`charNames_gen:${i}`),D=t&&N.exists(`sillyWisher_charNames:${i}`)?N.t(`sillyWisher_charNames:${i}`):"";return!(r&&!k.toLocaleLowerCase().includes(r.toLocaleLowerCase())&&!D.toLocaleLowerCase().includes(r.toLocaleLowerCase()))}),[c,r,t]),{numShow:f,setTriggerElement:$}=xe(10,m.length),w=i=>{const s=c.sortOrderBy===i&&c.sortOrder==="asc";y({sortOrder:s?"desc":"asc",sortOrderBy:i})},x=u.useMemo(()=>Ge([c.sortOrderBy],c.sortOrder==="asc",{name:i=>t&&N.exists(`sillyWisher_charNames:${i}`)?N.t(`sillyWisher_charNames:${i}`):N.t(`charNames_gen:${i}`),rarity:i=>ae(i).rarity,element:i=>Fe(i),type:i=>ae(i).weaponType}),[c.sortOrder,c.sortOrderBy,t]),d=u.useMemo(()=>m.sort(x).slice(0,f),[m,f,x]),S=[{key:"name",label:"Name",width:40},{key:"rarity",label:"Rarity",width:20},{key:"element",label:"Element",width:20},{key:"type",label:"Type",width:20}];return b(T,{children:[b(F,{sx:{display:"flex",gap:2},children:[e(Q,{value:c.rarity,children:Ae.map(i=>e(J,{value:i,onClick:()=>y({rarity:n(c.rarity,i)}),children:e(A,{color:`rarity${i}`,children:e(I,{sx:{verticalAlign:"text-top"}})})},i))}),e(Q,{value:c.weaponType,children:se.map(i=>{var s;return e(J,{value:i,onClick:()=>y({weaponType:p(c.weaponType,i)}),children:e(W,{src:(s=ce.weaponTypes)==null?void 0:s[i],size:2})},i)})}),e(we,{fullWidth:!0,variant:"outlined",value:l,onChange:i=>h(i.target.value),InputProps:{startAdornment:e(Te,{position:"start",children:e(pe,{})})}})]}),b(oe,{children:[e(le,{children:e(M,{children:S.map(({key:i,label:s,width:g})=>e(v,{sortDirection:c.sortOrderBy===i?c.sortOrder:!1,width:`${g}%`,children:e(et,{active:c.sortOrderBy===i,direction:c.sortOrderBy===i?c.sortOrder:"asc",onClick:()=>w(i),children:s})}))})}),b(ie,{children:[d.map(i=>e(Ba,{characterKey:i},i)),d.length!==m.length&&e(M,{children:e(v,{colSpan:5,children:e(P,{ref:i=>{i&&$(i)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const Ba=u.memo(function({characterKey:a}){var f;const{silly:o}=u.useContext(Ke),{gender:n}=Ce(),[p,l,h]=Ve(),{rarity:r,weaponType:c}=ae(a),y=Fe(a),m=u.useMemo(()=>({key:a,level:90,ascension:6,constellation:6,talent:{auto:10,skill:10,burst:10}}),[a]);return b(u.Suspense,{fallback:e(M,{children:e(v,{colSpan:4,children:e(P,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Oa,{show:p,character:m,onClose:h}),b(M,{hover:!0,onClick:l,sx:{cursor:"pointer"},children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:mt(a,n,o)}),e(ze,{characterKey:a,gender:n})]})}),e(v,{children:e(T,{display:"flex",children:e(A,{color:`rarity${r}`,children:e(I,{})})})}),e(v,{children:e(ft,{ele:y,iconProps:{color:y}})}),e(v,{children:e(W,{src:(f=ce.weaponTypes)==null?void 0:f[c],size:3,sideMargin:!0})})]})]})});function Wa({show:t,weaponUIData:a,weapon:o,onClose:n}){const{key:p,level:l=0,refinement:h=1,ascension:r=0}=o,c=p&&_(p),y=p?qe(p,r>=2):"";return e(Ue,{open:t,onClose:n,containerProps:{maxWidth:"md"},children:e(Y,{children:e(F,{children:c&&a&&b(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:12,sm:3,children:b(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:6,sm:12,children:e(T,{sx:{position:"relative",display:"flex"},children:e(T,{component:"img",src:y,className:`grad-${c.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})})}),e(C,{item:!0,xs:6,sm:12,children:e(O,{children:e("small",{children:p&&e(xt,{weaponKey:p})})})})]})}),b(C,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[b(T,{display:"flex",gap:1,flexWrap:"wrap",children:[e(O,{variant:"h5",children:e(Je,{weaponKey:p})}),n&&e(je,{onClick:n,sx:{marginLeft:"auto"},children:e(Ee,{})})]}),b(O,{children:["Lv. ",Tt(l,r)," R",h]}),e(wt,{stars:c.rarity}),e(O,{variant:"subtitle1",children:e("strong",{children:p&&e(Ct,{weaponKey:p})})}),e(O,{gutterBottom:!0,children:p&&e(St,{weaponKey:p,refineIndex:(a.get(ee.weapon.refinement).value??1)-1})}),e(T,{display:"flex",flexDirection:"column",gap:1,children:e(Y,{bgt:"light",children:e($t,{bgt:"light",children:[ee.weapon.main,ee.weapon.sub,ee.weapon.sub2].map(m=>{const f=a.get(m);return f.isEmpty||!f.value?null:e(Rt,{calcRes:f,component:kt},JSON.stringify(f.info))})})})})]})]})})})})}const Ie=[5,4,3,2,1];function Aa(){const t=me(),a=fe(t.displayArchive),o=X([...Ie]),n=X([...se]),[p,l]=u.useState(""),h=u.useDeferredValue(p),{weapon:r}=a,c=u.useCallback(s=>t.displayArchive.set({weapon:{...r,...s}}),[t,r]),y=u.useMemo(()=>be.filter(s=>{const{rarity:g,subStat:k,weaponType:D}=_(s);if(!r.rarity.includes(g)||r.subStat.length&&(!k||!r.subStat.includes(k.type))||!r.weaponType.includes(D))return!1;const Z=N.t(`weaponNames_gen:${s}`);return!(h&&!Z.toLocaleLowerCase().includes(h.toLocaleLowerCase()))}),[r,h]),m=s=>{const g=r.sortOrderBy===s&&r.sortOrder==="asc";c({sortOrder:g?"desc":"asc",sortOrderBy:s})},f=u.useMemo(()=>{const s=new Map;return be.forEach(g=>{const{rarity:k}=_(g),D={id:"invalid",ascension:k>2?6:4,key:g,level:k>2?90:70,refinement:1,location:"",lock:!1},Z=Qe([Xe(g).data,Ye(D)]),at=Z.get(ne.weapon.main),rt=Z.get(ne.weapon.sub);s.set(g,{main:ge(at).valueString,sub:ge(rt).valueString})}),s},[]),$=u.useMemo(()=>Ge(r.sortOrderBy==="sub"?["subType",r.sortOrderBy]:[r.sortOrderBy],r.sortOrder==="asc",{name:s=>N.t(`weaponNames_gen:${s}`),type:s=>_(s).weaponType,rarity:s=>_(s).rarity,main:s=>{var g;return((g=f.get(s))==null?void 0:g.main)??""},sub:s=>{var g;return((g=f.get(s))==null?void 0:g.sub)??""},subType:s=>{var g;return((g=_(s).subStat)==null?void 0:g.type)??""}}),[r.sortOrder,r.sortOrderBy,f]),{numShow:w,setTriggerElement:x}=xe(10,y.length),d=u.useMemo(()=>y.sort($).slice(0,w),[y,$,w]),S=u.useMemo(()=>Lt(Le,s=>be.forEach(g=>{const{subStat:k}=_(g);if(!k)return;const{type:D}=k;s[D].total++,y.includes(g)&&s[D].current++})),[y]),i=[{key:"name",label:"Name",width:30},{key:"type",label:"Type",width:10},{key:"rarity",label:"Rarity",width:10},{key:"main",label:"Main",width:20},{key:"sub",label:"Secondary",width:30}];return b(T,{children:[b(F,{sx:{display:"flex",gap:2},children:[e(Q,{value:r.rarity,children:Ie.map(s=>e(J,{value:s,onClick:()=>c({rarity:o(r.rarity,s)}),children:e(A,{color:`rarity${s}`,children:e(I,{sx:{verticalAlign:"text-top"}})})},s))}),e(Q,{value:r.weaponType,children:se.map(s=>{var g;return e(J,{value:s,onClick:()=>c({weaponType:n(r.weaponType,s)}),children:e(W,{src:(g=ce.weaponTypes)==null?void 0:g[s],size:2})},s)})}),e(Dt,{fullWidth:!0,substatKeys:r.subStat,setSubstatKeys:s=>{c({subStat:s})},totals:S,allSubstatKeys:[...Le]}),e(we,{fullWidth:!0,variant:"outlined",value:p,onChange:s=>l(s.target.value),InputProps:{startAdornment:e(Te,{position:"start",children:e(pe,{})})}})]}),b(oe,{children:[e(le,{children:e(M,{children:i.map(({key:s,label:g,width:k})=>e(v,{sortDirection:r.sortOrderBy===s?r.sortOrder:!1,width:`${k}%`,children:e(et,{active:r.sortOrderBy===s,direction:r.sortOrderBy===s?r.sortOrder:"asc",onClick:()=>m(s),children:g})}))})}),b(ie,{children:[d.map(s=>e(Ia,{weaponKey:s},s)),y.length!==d.length&&e(M,{children:e(v,{colSpan:5,children:e(P,{ref:s=>{s&&x(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const Ia=u.memo(function({weaponKey:a}){var f;const[o,n,p]=Ve(),{rarity:l,weaponType:h}=_(a),r=u.useMemo(()=>({id:"invalid",ascension:l>2?6:4,key:a,level:l>2?90:70,refinement:1,location:"",lock:!1}),[l,a]),c=u.useMemo(()=>Qe([Xe(a).data,Ye(r)]),[a,r]),y=c.get(ne.weapon.main),m=c.get(ne.weapon.sub);return b(u.Suspense,{fallback:e(M,{children:e(v,{colSpan:5,children:e(P,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Wa,{show:o,weaponUIData:c,weapon:r,onClose:p}),b(M,{hover:!0,onClick:n,sx:{cursor:"pointer"},children:[e(v,{children:b(T,{sx:{display:"flex",alignItems:"center"},children:[e(W,{size:4,src:qe(a,!0)}),e(Je,{weaponKey:a})]})}),e(v,{children:e(W,{src:(f=ce.weaponTypes)==null?void 0:f[h],size:3,sideMargin:!0})}),e(v,{children:e(T,{display:"flex",children:e(A,{color:`rarity${l}`,children:e(I,{})})})}),e(v,{children:e(He,{node:y})}),e(v,{children:e(He,{node:m})})]})]})});function He({node:t}){const{name:a,icon:o}=Mt(t.info);return Number.isNaN(t.value)?null:b(T,{sx:{display:"flex"},children:[b(O,{flexGrow:1,children:[o," ",a]}),e(O,{children:ge(t).valueString})]})}const Ha={i18Key:"tabs.artifacts",icon:e(Wt,{}),value:"artifacts",to:"/artifacts"},Pa={i18Key:"tabs.weapons",icon:e(At,{}),value:"weapons",to:"/weapons"},za={i18Key:"tabs.characters",icon:e(zt,{}),value:"characters",to:"/characters"},tt=[Ha,Pa,za],ja=tt.map(({value:t})=>t);function Ka(){const{t}=ve("ui"),{params:{tab:a}}=Nt({path:"/archive/:tab",end:!1})??{params:{}},o=u.useMemo(()=>ja.find(p=>p===a)??"artifacts",[a]);return b(Y,{children:[e(Bt,{variant:"fullWidth",value:o,sx:{"& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px"}},children:tt.map(({i18Key:n,icon:p,value:l,to:h})=>e(Ot,{icon:p,iconPosition:"start",value:l,label:t(n),component:_t,to:`/archive${h}`},l))}),e(It,{}),e(u.Suspense,{fallback:e(P,{variant:"rectangular",width:"100%",height:1e3}),children:b(Ht,{children:[e(te,{path:"artifacts",element:e(Na,{})}),e(te,{path:"weapons",element:e(Aa,{})}),e(te,{path:"characters",element:e(_a,{})}),e(te,{path:"*",element:e(Pt,{to:"artifacts",replace:!0})})]})})]})}export{Ka as default};
