import{b1 as I,b2 as z,b3 as W,b4 as T,d,b5 as H,b6 as D,b7 as Ue,j as R,b8 as Ke,b9 as E,T as k,ba as M,bb as j,bc as Ve,bd as X,be as qe,r as Ge,i as Je,u as de,bf as ye,bg as U,ar as pe,p,s as B,q as e,bh as K,aC as P,ai as N,bi as V,aV as ue,a3 as A,W as y,I as L,bj as xe,bk as Ce,a0 as re,bl as q,bm as oe,m as Qe,n as Ze,bn as he,bo as Ne,ak as Xe,bp as Ye,C as et,bq as tt,br as Ae,a1 as _e,a2 as Ie,V as C,w as G,a4 as ze,bs as at,aL as We,Z as He,bt as De,f as nt,bu as st,E as rt,x as ae,h as _,bv as ot,k as ge,bw as Ee,bx as it,by as je,bz as lt,bA as ct,bB as dt,bC as pt,bD as Q,bE as ut,bF as ht,bG as gt,bH as mt,bI as bt,bJ as ft,bK as Te,bL as vt,bM as yt,bN as xt,bO as Ct,bP as Tt,L as wt,bQ as St,F as Rt,A as $t,P as kt,D as Mt,bR as Lt,bS as Z,bT as Pt}from"./index-DY2k66s2.js";function Nt(t){return z("MuiInputAdornment",t)}const At=I("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),we=At;var Se;const _t=["children","className","component","disablePointerEvents","disableTypography","position","variant"],It=(t,a)=>{const{ownerState:r}=t;return[a.root,a[`position${M(r.position)}`],r.disablePointerEvents===!0&&a.disablePointerEvents,a[r.variant]]},zt=t=>{const{classes:a,disablePointerEvents:r,hiddenLabel:s,position:l,size:i,variant:c}=t,u={root:["root",r&&"disablePointerEvents",l&&`position${M(l)}`,c,s&&"hiddenLabel",i&&`size${M(i)}`]};return j(u,Nt,a)},Wt=W("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:It})(({theme:t,ownerState:a})=>T({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},a.variant==="filled"&&{[`&.${we.positionStart}&:not(.${we.hiddenLabel})`]:{marginTop:16}},a.position==="start"&&{marginRight:8},a.position==="end"&&{marginLeft:8},a.disablePointerEvents===!0&&{pointerEvents:"none"})),Ht=d.forwardRef(function(a,r){const s=H({props:a,name:"MuiInputAdornment"}),{children:l,className:i,component:c="div",disablePointerEvents:u=!1,disableTypography:g=!1,position:m,variant:b}=s,v=D(s,_t),x=Ue()||{};let n=b;b&&x.variant,x&&!n&&(n=x.variant);const o=T({},s,{hiddenLabel:x.hiddenLabel,size:x.size,disablePointerEvents:u,position:m,variant:n}),f=zt(o);return R.jsx(Ke.Provider,{value:null,children:R.jsx(Wt,T({as:c,ownerState:o,className:E(f.root,i),ref:r},v,{children:typeof l=="string"&&!g?R.jsx(k,{color:"text.secondary",children:l}):R.jsxs(d.Fragment,{children:[m==="start"?Se||(Se=R.jsx("span",{className:"notranslate",children:"​"})):null,l]})}))})}),me=Ht,Dt=d.createContext(),Be=Dt;function Et(t){return z("MuiTable",t)}I("MuiTable",["root","stickyHeader"]);const jt=["className","component","padding","size","stickyHeader"],Bt=t=>{const{classes:a,stickyHeader:r}=t;return j({root:["root",r&&"stickyHeader"]},Et,a)},Ft=W("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>T({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":T({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})),Re="table",Ot=d.forwardRef(function(a,r){const s=H({props:a,name:"MuiTable"}),{className:l,component:i=Re,padding:c="normal",size:u="medium",stickyHeader:g=!1}=s,m=D(s,jt),b=T({},s,{component:i,padding:c,size:u,stickyHeader:g}),v=Bt(b),x=d.useMemo(()=>({padding:c,size:u,stickyHeader:g}),[c,u,g]);return R.jsx(Be.Provider,{value:x,children:R.jsx(Ft,T({as:i,role:i===Re?null:"table",ref:r,className:E(v.root,l),ownerState:b},m))})}),Y=Ot,Ut=d.createContext(),ne=Ut;function Kt(t){return z("MuiTableBody",t)}I("MuiTableBody",["root"]);const Vt=["className","component"],qt=t=>{const{classes:a}=t;return j({root:["root"]},Kt,a)},Gt=W("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-row-group"}),Jt={variant:"body"},$e="tbody",Qt=d.forwardRef(function(a,r){const s=H({props:a,name:"MuiTableBody"}),{className:l,component:i=$e}=s,c=D(s,Vt),u=T({},s,{component:i}),g=qt(u);return R.jsx(ne.Provider,{value:Jt,children:R.jsx(Gt,T({className:E(g.root,l),as:i,ref:r,role:i===$e?null:"rowgroup",ownerState:u},c))})}),ee=Qt;function Zt(t){return z("MuiTableCell",t)}const Xt=I("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Yt=Xt,ea=["align","className","component","padding","scope","size","sortDirection","variant"],ta=t=>{const{classes:a,variant:r,align:s,padding:l,size:i,stickyHeader:c}=t,u={root:["root",r,c&&"stickyHeader",s!=="inherit"&&`align${M(s)}`,l!=="normal"&&`padding${M(l)}`,`size${M(i)}`]};return j(u,Zt,a)},aa=W("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.variant],a[`size${M(r.size)}`],r.padding!=="normal"&&a[`padding${M(r.padding)}`],r.align!=="inherit"&&a[`align${M(r.align)}`],r.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>T({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?Ve(X(t.palette.divider,1),.88):qe(X(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},a.variant==="body"&&{color:(t.vars||t).palette.text.primary},a.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${Yt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),na=d.forwardRef(function(a,r){const s=H({props:a,name:"MuiTableCell"}),{align:l="inherit",className:i,component:c,padding:u,scope:g,size:m,sortDirection:b,variant:v}=s,x=D(s,ea),n=d.useContext(Be),o=d.useContext(ne),f=o&&o.variant==="head";let w;c?w=c:w=f?"th":"td";let $=g;w==="td"?$=void 0:!$&&f&&($="col");const J=v||o&&o.variant,fe=T({},s,{align:l,component:w,padding:u||(n&&n.padding?n.padding:"normal"),size:m||(n&&n.size?n.size:"medium"),sortDirection:b,stickyHeader:J==="head"&&n&&n.stickyHeader,variant:J}),Oe=ta(fe);let ve=null;return b&&(ve=b==="asc"?"ascending":"descending"),R.jsx(aa,T({as:w,ref:r,className:E(Oe.root,i),"aria-sort":ve,scope:$,ownerState:fe},x))}),h=na;function sa(t){return z("MuiTableHead",t)}I("MuiTableHead",["root"]);const ra=["className","component"],oa=t=>{const{classes:a}=t;return j({root:["root"]},sa,a)},ia=W("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-header-group"}),la={variant:"head"},ke="thead",ca=d.forwardRef(function(a,r){const s=H({props:a,name:"MuiTableHead"}),{className:l,component:i=ke}=s,c=D(s,ra),u=T({},s,{component:i}),g=oa(u);return R.jsx(ne.Provider,{value:la,children:R.jsx(ia,T({as:i,className:E(g.root,l),ref:r,role:i===ke?null:"rowgroup",ownerState:u},c))})}),te=ca;function da(t){return z("MuiTableRow",t)}const pa=I("MuiTableRow",["root","selected","hover","head","footer"]),Me=pa,ua=["className","component","hover","selected"],ha=t=>{const{classes:a,selected:r,hover:s,head:l,footer:i}=t;return j({root:["root",r&&"selected",s&&"hover",l&&"head",i&&"footer"]},da,a)},ga=W("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.head&&a.head,r.footer&&a.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Me.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Me.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:X(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:X(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Le="tr",ma=d.forwardRef(function(a,r){const s=H({props:a,name:"MuiTableRow"}),{className:l,component:i=Le,hover:c=!1,selected:u=!1}=s,g=D(s,ua),m=d.useContext(ne),b=T({},s,{component:i,hover:c,selected:u,head:m&&m.variant==="head",footer:m&&m.variant==="footer"}),v=ha(b);return R.jsx(ga,T({as:i,ref:r,className:E(v.root,l),role:i===Le?null:"row",ownerState:b},g))}),S=ma;var be={},ba=Je;Object.defineProperty(be,"__esModule",{value:!0});var se=be.default=void 0,fa=ba(Ge()),va=R,ya=(0,fa.default)((0,va.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");se=be.default=ya;const ie=[5,4,3];function xa(){const[t,a]=d.useState([...ie]),[r,s]=d.useState(""),l=d.useDeferredValue(r),i=q([...ie]),{t:c}=de(ye.map(n=>`artifact_${n}_gen`)),u=d.useMemo(()=>ye.filter(n=>{const{rarities:o}=oe(n);if(!t.includes(Math.max(...o)))return!1;const f=U.t(`artifactNames_gen:${n}`).toLocaleLowerCase(),w=c("setEffects.4",{ns:`artifact_${n}_gen`}).toLocaleLowerCase(),$=c("setEffects.2",{ns:`artifact_${n}_gen`}).toLocaleLowerCase();return!(l&&!f.includes(l.toLocaleLowerCase())&&!$.includes(l.toLocaleLowerCase())&&!w.includes(l.toLocaleLowerCase()))},[t]),[t,l,c]),g=d.useMemo(()=>u.filter(n=>!n.startsWith("Prayers")),[u]),m=d.useMemo(()=>u.filter(n=>n.startsWith("Prayers")),[u]),{numShow:b,setTriggerElement:v}=pe(10,g.length),x=d.useMemo(()=>g.slice(0,b),[g,b]);return p(y,{children:[p(B,{sx:{display:"flex",gap:2},children:[e(V,{value:t,children:ie.map(n=>e(K,{value:n,onClick:()=>a(o=>i(o,n)),children:e(P,{color:`rarity${n}`,children:e(N,{sx:{verticalAlign:"text-top"}})})},n))}),e(ue,{fullWidth:!0,variant:"outlined",value:r,onChange:n=>s(n.target.value),InputProps:{startAdornment:e(me,{position:"start",children:e(se,{})})}})]}),p(Y,{children:[e(te,{children:p(S,{children:[e(h,{children:"Set"}),e(h,{children:"Rarity"}),e(h,{children:"2-piece Bonus"}),e(h,{children:"4-piece Bonus"})]})}),p(ee,{children:[x.map(n=>{const{rarities:o}=oe(n);return e(d.Suspense,{fallback:e(S,{children:e(h,{colSpan:4,children:e(A,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:p(S,{children:[e(h,{children:p(y,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:xe(n)}),e(Ce,{setKey:n})]})}),e(h,{children:e(y,{display:"flex",children:o.sort().reverse().map(f=>e(P,{color:`rarity${f}`,children:e(N,{})},f))})}),e(h,{children:e(re,{ns:`artifact_${n}_gen`,key18:"setEffects.2"})}),e(h,{children:e(re,{ns:`artifact_${n}_gen`,key18:"setEffects.4"})})]},n)})}),g.length!==x.length&&e(S,{children:e(h,{colSpan:4,children:e(A,{ref:n=>{n&&v(n)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]}),m.length!==0&&p(Y,{sx:{mt:2},children:[e(te,{children:p(S,{children:[e(h,{children:"Set"}),e(h,{children:"Rarity"}),e(h,{children:"1-piece Bonus"})]})}),e(ee,{children:m.map(n=>{const{rarities:o}=oe(n);return p(S,{children:[e(h,{children:p(y,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:xe(n)}),e(Ce,{setKey:n})]})}),e(h,{children:e(y,{display:"flex",children:o.sort().reverse().map(f=>e(P,{color:`rarity${f}`,children:e(N,{})},f))})}),e(h,{width:"90%",children:e(re,{ns:`artifact_${n}_gen`,key18:"setEffects.1"})})]},n)})})]})]})}const F={xs:12,sm:6,md:4};function Ca({show:t,character:a,onClose:r}){const{t:s}=de("sheet_gen"),l=Qe(),i=Ze(l.breakpoints.up("lg")),{key:c,constellation:u,ascension:g}=a,{gender:m}=he(),b=Ne(c,m),v=[["auto",s("talents.auto")],["skill",s("talents.skill")],["burst",s("talents.burst")]],x=[["passive1",s("unlockPassive1"),1],["passive2",s("unlockPassive2"),4],["passive3",s("unlockPassive3"),0]],n=d.useMemo(()=>Xe(1,Ye).map(o=>e(O,{characterKey:c,talentKey:`constellation${o}`,subtitle:s("constellationLvl",{level:o})})),[s,c]);return e(ze,{open:t,onClose:r,containerProps:{maxWidth:"xl"},children:p(G,{children:[e(et,{title:p(y,{children:[e(tt,{characterKey:c,sideMargin:!0}),e(y,{sx:{pl:1},component:"span",children:e(Ae,{characterKey:c,gender:m})})]}),action:e(_e,{onClick:r,children:e(Ie,{})})}),e(B,{children:p(C,{container:!0,spacing:1,children:[i&&e(C,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:n.map((o,f)=>e(y,{sx:{opacity:u>=f+1?1:.5},children:o},f))}),p(C,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:[v.map(([o,f])=>e(C,{item:!0,...F,children:e(O,{characterKey:c,talentKey:o,subtitle:f})},o)),!!b.getTalentOfKey("sprint")&&e(C,{item:!0,...F,children:e(O,{characterKey:c,talentKey:"sprint",subtitle:s("talents.altSprint")})}),!!b.getTalentOfKey("passive")&&e(C,{item:!0,...F,children:e(O,{characterKey:c,talentKey:"passive",subtitle:"Passive"})}),x.map(([o,f,w])=>{const $=g>=w;return b.getTalentOfKey(o)?e(C,{item:!0,style:{opacity:$?1:.5},...F,children:e(O,{characterKey:c,talentKey:o,subtitle:f})},o):null})]}),!i&&e(C,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:n.map((o,f)=>e(C,{item:!0,sx:{opacity:u>=f+1?1:.5},...F,children:o},f))})]})})]})})}function O({characterKey:t,talentKey:a,subtitle:r}){const{gender:s}=he(),i=Ne(t,s).getTalentOfKey(a);return e(G,{bgt:"light",sx:{height:"100%"},children:p(B,{children:[p(C,{container:!0,sx:{flexWrap:"nowrap"},children:[e(C,{item:!0,children:e(y,{component:"img",src:i==null?void 0:i.img,sx:{width:60,height:"auto"}})}),p(C,{item:!0,flexGrow:1,sx:{pl:1},children:[e(k,{variant:"h6",children:i==null?void 0:i.name}),e(k,{variant:"subtitle1",children:r})]})]}),i!=null&&i.sections?e(at,{sections:i.sections,hideDesc:!0}):null]})})}const le=[5,4];function Ta(){const{silly:t}=d.useContext(We),[a,r]=d.useState([...le]),[s,l]=d.useState([..._]),i=q([...le]),c=q([..._]),[u,g]=d.useState(""),m=d.useDeferredValue(u),b=d.useMemo(()=>ot.filter(o=>{const{rarity:f,weaponType:w}=De(o);if(!a.includes(f)||!s.includes(w))return!1;const $=U.t(`charNames_gen:${o}`),J=t&&U.exists(`sillyWisher_charNames:${o}`)?U.t(`sillyWisher_charNames:${o}`):"";return!(m&&!$.toLocaleLowerCase().includes(m.toLocaleLowerCase())&&!J.toLocaleLowerCase().includes(m.toLocaleLowerCase()))},[a]),[a,m,t,s]),{numShow:v,setTriggerElement:x}=pe(10,b.length),n=d.useMemo(()=>b.slice(0,v),[b,v]);return p(y,{children:[p(B,{sx:{display:"flex",gap:2},children:[e(V,{value:a,children:le.map(o=>e(K,{value:o,onClick:()=>r(f=>i(f,o)),children:e(P,{color:`rarity${o}`,children:e(N,{sx:{verticalAlign:"text-top"}})})},o))}),e(V,{value:s,children:_.map(o=>{var f;return e(K,{value:o,onClick:()=>l(w=>c(w,o)),children:e(L,{src:(f=ae.weaponTypes)==null?void 0:f[o],size:2})},o)})}),e(ue,{fullWidth:!0,variant:"outlined",value:u,onChange:o=>g(o.target.value),InputProps:{startAdornment:e(me,{position:"start",children:e(se,{})})}})]}),p(Y,{children:[e(te,{children:p(S,{children:[e(h,{children:"Name"}),e(h,{children:"Rarity"}),e(h,{children:"Element"}),e(h,{children:"Type"})]})}),p(ee,{children:[n.map(o=>e(wa,{characterKey:o},o)),n.length!==b.length&&e(S,{children:e(h,{colSpan:5,children:e(A,{ref:o=>{o&&x(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const wa=d.memo(function({characterKey:a}){var v;const{silly:r}=d.useContext(We),{gender:s}=he(),[l,i,c]=He(),{rarity:u,weaponType:g}=De(a),m=nt(a),b=d.useMemo(()=>({key:a,level:90,ascension:6,constellation:6,talent:{auto:10,skill:10,burst:10}}),[a]);return p(d.Suspense,{fallback:e(S,{children:e(h,{colSpan:4,children:e(A,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Ca,{show:l,character:b,onClose:c}),p(S,{hover:!0,onClick:i,sx:{cursor:"pointer"},children:[e(h,{children:p(y,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:st(a,s,r)}),e(Ae,{characterKey:a,gender:s})]})}),e(h,{children:e(y,{display:"flex",children:e(P,{color:`rarity${u}`,children:e(N,{})})})}),e(h,{children:e(rt,{ele:m,iconProps:{color:m}})}),e(h,{children:e(L,{src:(v=ae.weaponTypes)==null?void 0:v[g],size:3,sideMargin:!0})})]})]})});function Sa({show:t,weaponUIData:a,weapon:r,onClose:s}){const{key:l,level:i=0,refinement:c=1,ascension:u=0}=r,g=l&&ge(l),m=l?Ee(l,u>=2):"";return e(ze,{open:t,onClose:s,containerProps:{maxWidth:"md"},children:e(G,{children:e(B,{children:g&&a&&p(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:12,sm:3,children:p(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:6,sm:12,children:e(y,{sx:{position:"relative",display:"flex"},children:e(y,{component:"img",src:m,className:`grad-${g.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})})}),e(C,{item:!0,xs:6,sm:12,children:e(k,{children:e("small",{children:l&&e(it,{weaponKey:l})})})})]})}),p(C,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[p(y,{display:"flex",gap:1,flexWrap:"wrap",children:[e(k,{variant:"h5",children:e(je,{weaponKey:l})}),s&&e(_e,{onClick:s,sx:{marginLeft:"auto"},children:e(Ie,{})})]}),p(k,{children:["Lv. ",lt(i,u)," R",c]}),e(ct,{stars:g.rarity}),e(k,{variant:"subtitle1",children:e("strong",{children:l&&e(dt,{weaponKey:l})})}),e(k,{gutterBottom:!0,children:l&&e(pt,{weaponKey:l,refineIndex:(a.get(Q.weapon.refinement).value??1)-1})}),e(y,{display:"flex",flexDirection:"column",gap:1,children:e(G,{bgt:"light",children:e(ut,{bgt:"light",children:[Q.weapon.main,Q.weapon.sub,Q.weapon.sub2].map(b=>{const v=a.get(b);return v.isEmpty||!v.value?null:e(ht,{node:v,component:gt},JSON.stringify(v.info))})})})})]})]})})})})}const ce=[5,4,3,2,1];function Ra(){const[t,a]=d.useState([...ce]),[r,s]=d.useState([..._]),l=q([...ce]),i=q([..._]),[c,u]=d.useState(""),g=d.useDeferredValue(c),m=d.useMemo(()=>xt.filter(n=>{const{rarity:o,weaponType:f}=ge(n);if(!t.includes(o)||!r.includes(f))return!1;const w=U.t(`weaponNames_gen:${n}`);return!(g&&!w.toLocaleLowerCase().includes(g.toLocaleLowerCase()))},[t]),[t,g,r]),{numShow:b,setTriggerElement:v}=pe(10,m.length),x=d.useMemo(()=>m.slice(0,b),[m,b]);return p(y,{children:[p(B,{sx:{display:"flex",gap:2},children:[e(V,{value:t,children:ce.map(n=>e(K,{value:n,onClick:()=>a(o=>l(o,n)),children:e(P,{color:`rarity${n}`,children:e(N,{sx:{verticalAlign:"text-top"}})})},n))}),e(V,{value:r,children:_.map(n=>{var o;return e(K,{value:n,onClick:()=>s(f=>i(f,n)),children:e(L,{src:(o=ae.weaponTypes)==null?void 0:o[n],size:2})},n)})}),e(ue,{fullWidth:!0,variant:"outlined",value:c,onChange:n=>u(n.target.value),InputProps:{startAdornment:e(me,{position:"start",children:e(se,{})})}})]}),p(Y,{children:[e(te,{children:p(S,{children:[e(h,{children:"Name"}),e(h,{children:"Type"}),e(h,{children:"Rarity"}),e(h,{children:"Main"}),e(h,{children:"Secondary"})]})}),p(ee,{children:[x.map(n=>e($a,{weaponKey:n},n)),m.length!==x.length&&e(S,{children:e(h,{colSpan:5,children:e(A,{ref:n=>{n&&v(n)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const $a=d.memo(function({weaponKey:a}){var v;const[r,s,l]=He(),{rarity:i,weaponType:c}=ge(a),u=d.useMemo(()=>({id:"invalid",ascension:i>2?6:4,key:a,level:i>2?90:70,refinement:1,location:"",lock:!1}),[i,a]),g=d.useMemo(()=>mt([bt(a).data,ft(u)]),[a,u]),m=g.get(Te.weapon.main),b=g.get(Te.weapon.sub);return p(d.Suspense,{fallback:e(S,{children:e(h,{colSpan:5,children:e(A,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(Sa,{show:r,weaponUIData:g,weapon:u,onClose:l}),p(S,{hover:!0,onClick:s,sx:{cursor:"pointer"},children:[e(h,{children:p(y,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:Ee(a,!0)}),e(je,{weaponKey:a})]})}),e(h,{children:e(L,{src:(v=ae.weaponTypes)==null?void 0:v[c],size:3,sideMargin:!0})}),e(h,{children:e(y,{display:"flex",children:e(P,{color:`rarity${i}`,children:e(N,{})})})}),e(h,{children:e(Pe,{node:m})}),e(h,{children:e(Pe,{node:b})})]})]})});function Pe({node:t}){const{name:a,icon:r}=vt(t.info);return Number.isNaN(t.value)?null:p(y,{sx:{display:"flex"},children:[p(k,{flexGrow:1,children:[r," ",a]}),e(k,{children:yt(t).valueString})]})}const ka={i18Key:"tabs.artifacts",icon:e(Rt,{}),value:"artifacts",to:"/artifacts"},Ma={i18Key:"tabs.weapons",icon:e($t,{}),value:"weapons",to:"/weapons"},La={i18Key:"tabs.characters",icon:e(kt,{}),value:"characters",to:"/characters"},Fe=[ka,Ma,La],Pa=Fe.map(({value:t})=>t);function Aa(){const{t}=de("ui"),{params:{tab:a}}=Ct({path:"/archive/:tab",end:!1})??{params:{}},r=d.useMemo(()=>Pa.find(l=>l===a)??"artifacts",[a]);return p(G,{children:[e(St,{variant:"fullWidth",value:r,sx:{"& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px"}},children:Fe.map(({i18Key:s,icon:l,value:i,to:c})=>e(Tt,{icon:l,iconPosition:"start",value:i,label:t(s),component:wt,to:`/archive${c}`},i))}),e(Mt,{}),e(d.Suspense,{fallback:e(A,{variant:"rectangular",width:"100%",height:1e3}),children:p(Lt,{children:[e(Z,{path:"artifacts",element:e(xa,{})}),e(Z,{path:"weapons",element:e(Ra,{})}),e(Z,{path:"characters",element:e(Ta,{})}),e(Z,{path:"*",element:e(Pt,{to:"artifacts"})})]})})]})}export{Aa as default};
