import{d as u,bb as O,bc as U,bd as K,be as k,bf as V,bg as F,j as $,bh as q,bi as G,bj as _,bk as Fe,bl as Z,bm as qe,r as Ge,i as Je,b as ce,bn as de,u as pe,bo as me,bp as z,ar as ue,p,s as A,q as e,aX as I,aC as D,ai as N,bq as B,br as he,b4 as be,a3 as W,W as x,I as L,bs as ve,bt as xe,a0 as ie,b0 as j,bu as le,m as Qe,n as Xe,bv as ge,bw as _e,ak as Ze,bx as Ye,C as et,by as tt,bz as Ae,a1 as He,a2 as Pe,V as C,w as E,a4 as ze,T as R,bA as at,aL as Ie,Z as Be,bB as je,f as st,bC as rt,E as nt,x as re,h as Y,bD as ot,k as ee,bE as Ee,bF as it,bG as Oe,bH as lt,bI as ct,bJ as dt,bK as pt,bL as Q,bM as ut,bN as ht,bO as bt,bP as gt,bQ as ft,bR as yt,bS as Te,bT as mt,bU as vt,bV as Ce,aR as xt,bW as we,bX as Tt,bY as Ct,bZ as wt,L as St,b_ as kt,F as Rt,A as $t,P as Mt,D as Lt,b$ as Dt,c0 as X,c1 as Nt}from"./index-Drea7wGp.js";const Wt=u.createContext(),Ue=Wt;function _t(t){return O("MuiTable",t)}U("MuiTable",["root","stickyHeader"]);const At=["className","component","padding","size","stickyHeader"],Ht=t=>{const{classes:a,stickyHeader:i}=t;return G({root:["root",i&&"stickyHeader"]},_t,a)},Pt=K("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,i.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>k({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":k({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})),Se="table",zt=u.forwardRef(function(a,i){const n=V({props:a,name:"MuiTable"}),{className:c,component:o=Se,padding:d="normal",size:l="medium",stickyHeader:h=!1}=n,g=F(n,At),f=k({},n,{component:o,padding:d,size:l,stickyHeader:h}),y=Ht(f),S=u.useMemo(()=>({padding:d,size:l,stickyHeader:h}),[d,l,h]);return $.jsx(Ue.Provider,{value:S,children:$.jsx(Pt,k({as:o,role:o===Se?null:"table",ref:i,className:q(y.root,c),ownerState:f},g))})}),te=zt,It=u.createContext(),ne=It;function Bt(t){return O("MuiTableBody",t)}U("MuiTableBody",["root"]);const jt=["className","component"],Et=t=>{const{classes:a}=t;return G({root:["root"]},Bt,a)},Ot=K("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-row-group"}),Ut={variant:"body"},ke="tbody",Kt=u.forwardRef(function(a,i){const n=V({props:a,name:"MuiTableBody"}),{className:c,component:o=ke}=n,d=F(n,jt),l=k({},n,{component:o}),h=Et(l);return $.jsx(ne.Provider,{value:Ut,children:$.jsx(Ot,k({className:q(h.root,c),as:o,ref:i,role:o===ke?null:"rowgroup",ownerState:l},d))})}),ae=Kt;function Vt(t){return O("MuiTableCell",t)}const Ft=U("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),qt=Ft,Gt=["align","className","component","padding","scope","size","sortDirection","variant"],Jt=t=>{const{classes:a,variant:i,align:n,padding:c,size:o,stickyHeader:d}=t,l={root:["root",i,d&&"stickyHeader",n!=="inherit"&&`align${_(n)}`,c!=="normal"&&`padding${_(c)}`,`size${_(o)}`]};return G(l,Vt,a)},Qt=K("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,a[i.variant],a[`size${_(i.size)}`],i.padding!=="normal"&&a[`padding${_(i.padding)}`],i.align!=="inherit"&&a[`align${_(i.align)}`],i.stickyHeader&&a.stickyHeader]}})(({theme:t,ownerState:a})=>k({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?Fe(Z(t.palette.divider,1),.88):qe(Z(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},a.variant==="body"&&{color:(t.vars||t).palette.text.primary},a.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${qt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),Xt=u.forwardRef(function(a,i){const n=V({props:a,name:"MuiTableCell"}),{align:c="inherit",className:o,component:d,padding:l,scope:h,size:g,sortDirection:f,variant:y}=n,S=F(n,Gt),T=u.useContext(Ue),s=u.useContext(ne),r=s&&s.variant==="head";let m;d?m=d:m=r?"th":"td";let v=h;m==="td"?v=void 0:!v&&r&&(v="col");const M=y||s&&s.variant,J=k({},n,{align:c,component:m,padding:l||(T&&T.padding?T.padding:"normal"),size:g||(T&&T.size?T.size:"medium"),sortDirection:f,stickyHeader:M==="head"&&T&&T.stickyHeader,variant:M}),Ve=Jt(J);let ye=null;return f&&(ye=f==="asc"?"ascending":"descending"),$.jsx(Qt,k({as:m,ref:i,className:q(Ve.root,o),"aria-sort":ye,scope:v,ownerState:J},S))}),b=Xt;function Zt(t){return O("MuiTableHead",t)}U("MuiTableHead",["root"]);const Yt=["className","component"],ea=t=>{const{classes:a}=t;return G({root:["root"]},Zt,a)},ta=K("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,a)=>a.root})({display:"table-header-group"}),aa={variant:"head"},Re="thead",sa=u.forwardRef(function(a,i){const n=V({props:a,name:"MuiTableHead"}),{className:c,component:o=Re}=n,d=F(n,Yt),l=k({},n,{component:o}),h=ea(l);return $.jsx(ne.Provider,{value:aa,children:$.jsx(ta,k({as:o,className:q(h.root,c),ref:i,role:o===Re?null:"rowgroup",ownerState:l},d))})}),se=sa;function ra(t){return O("MuiTableRow",t)}const na=U("MuiTableRow",["root","selected","hover","head","footer"]),$e=na,oa=["className","component","hover","selected"],ia=t=>{const{classes:a,selected:i,hover:n,head:c,footer:o}=t;return G({root:["root",i&&"selected",n&&"hover",c&&"head",o&&"footer"]},ra,a)},la=K("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,i.head&&a.head,i.footer&&a.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${$e.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${$e.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Z(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Z(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Me="tr",ca=u.forwardRef(function(a,i){const n=V({props:a,name:"MuiTableRow"}),{className:c,component:o=Me,hover:d=!1,selected:l=!1}=n,h=F(n,oa),g=u.useContext(ne),f=k({},n,{component:o,hover:d,selected:l,head:g&&g.variant==="head",footer:g&&g.variant==="footer"}),y=ia(f);return $.jsx(la,k({as:o,ref:i,className:q(y.root,c),role:o===Me?null:"row",ownerState:f},h))}),w=ca;var fe={},da=Je;Object.defineProperty(fe,"__esModule",{value:!0});var oe=fe.default=void 0,pa=da(Ge()),ua=$,ha=(0,pa.default)((0,ua.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");oe=fe.default=ha;const Le=[5,4,3];function ba(){const t=ce(),a=de(t.displayArchive),[i,n]=u.useState(""),c=u.useDeferredValue(i),o=j([...Le]),{t:d}=pe(me.map(r=>`artifact_${r}_gen`)),{artifact:l}=a,h=u.useCallback(r=>t.displayArchive.set({artifact:{...l,...r}}),[t,l]),g=u.useMemo(()=>me.filter(r=>{const{rarities:m}=le(r);if(!l.rarity.includes(Math.max(...m)))return!1;const v=z.t(`artifactNames_gen:${r}`).toLocaleLowerCase(),M=d("setEffects.4",{ns:`artifact_${r}_gen`}).toLocaleLowerCase(),J=d("setEffects.2",{ns:`artifact_${r}_gen`}).toLocaleLowerCase();return!(c&&!v.includes(c.toLocaleLowerCase())&&!J.includes(c.toLocaleLowerCase())&&!M.includes(c.toLocaleLowerCase()))}),[l,c,d]),f=u.useMemo(()=>g.filter(r=>!r.startsWith("Prayers")),[g]),y=u.useMemo(()=>g.filter(r=>r.startsWith("Prayers")),[g]),{numShow:S,setTriggerElement:T}=ue(10,f.length),s=u.useMemo(()=>f.slice(0,S),[f,S]);return p(x,{children:[p(A,{sx:{display:"flex",gap:2},children:[e(B,{value:l.rarity,children:Le.map(r=>e(I,{value:r,onClick:()=>h({rarity:o(l.rarity,r)}),children:e(D,{color:`rarity${r}`,children:e(N,{sx:{verticalAlign:"text-top"}})})},r))}),e(be,{fullWidth:!0,variant:"outlined",value:i,onChange:r=>n(r.target.value),InputProps:{startAdornment:e(he,{position:"start",children:e(oe,{})})}})]}),p(te,{children:[e(se,{children:p(w,{children:[e(b,{children:"Set"}),e(b,{children:"Rarity"}),e(b,{children:"2-piece Bonus"}),e(b,{children:"4-piece Bonus"})]})}),p(ae,{children:[s.map(r=>{const{rarities:m}=le(r);return e(u.Suspense,{fallback:e(w,{children:e(b,{colSpan:4,children:e(W,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:p(w,{children:[e(b,{children:p(x,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:ve(r)}),e(xe,{setKey:r})]})}),e(b,{children:e(x,{display:"flex",children:m.sort().reverse().map(v=>e(D,{color:`rarity${v}`,children:e(N,{})},v))})}),e(b,{children:e(ie,{ns:`artifact_${r}_gen`,key18:"setEffects.2"})}),e(b,{children:e(ie,{ns:`artifact_${r}_gen`,key18:"setEffects.4"})})]},r)})}),f.length!==s.length&&e(w,{children:e(b,{colSpan:4,children:e(W,{ref:r=>{r&&T(r)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]}),y.length!==0&&p(te,{sx:{mt:2},children:[e(se,{children:p(w,{children:[e(b,{children:"Set"}),e(b,{children:"Rarity"}),e(b,{children:"1-piece Bonus"})]})}),e(ae,{children:y.map(r=>{const{rarities:m}=le(r);return p(w,{children:[e(b,{children:p(x,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:ve(r)}),e(xe,{setKey:r})]})}),e(b,{children:e(x,{display:"flex",children:m.sort().reverse().map(v=>e(D,{color:`rarity${v}`,children:e(N,{})},v))})}),e(b,{width:"90%",children:e(ie,{ns:`artifact_${r}_gen`,key18:"setEffects.1"})})]},r)})})]})]})}const H={xs:12,sm:6,md:4};function ga({show:t,character:a,onClose:i}){const{t:n}=pe("sheet_gen"),c=Qe(),o=Xe(c.breakpoints.up("lg")),{key:d,constellation:l,ascension:h}=a,{gender:g}=ge(),f=_e(d,g),y=[["auto",n("talents.auto")],["skill",n("talents.skill")],["burst",n("talents.burst")]],S=[["passive1",n("unlockPassive1"),1],["passive2",n("unlockPassive2"),4],["passive3",n("unlockPassive3"),0]],T=u.useMemo(()=>Ze(1,Ye).map(s=>e(P,{characterKey:d,talentKey:`constellation${s}`,subtitle:n("constellationLvl",{level:s})})),[n,d]);return e(ze,{open:t,onClose:i,containerProps:{maxWidth:"xl"},children:p(E,{children:[e(et,{title:p(x,{children:[e(tt,{characterKey:d,sideMargin:!0}),e(x,{sx:{pl:1},component:"span",children:e(Ae,{characterKey:d,gender:g})})]}),action:e(He,{onClick:i,children:e(Pe,{})})}),e(A,{children:p(C,{container:!0,spacing:1,children:[o&&e(C,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:T.map((s,r)=>e(x,{sx:{opacity:l>=r+1?1:.5},children:s},r))}),p(C,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:[y.map(([s,r])=>e(C,{item:!0,...H,children:e(P,{characterKey:d,talentKey:s,subtitle:r})},s)),!!f.getTalentOfKey("sprint")&&e(C,{item:!0,...H,children:e(P,{characterKey:d,talentKey:"sprint",subtitle:n("talents.altSprint")})}),!!f.getTalentOfKey("passive")&&e(C,{item:!0,...H,children:e(P,{characterKey:d,talentKey:"passive",subtitle:"Passive"})}),S.map(([s,r,m])=>{const v=h>=m;return f.getTalentOfKey(s)?e(C,{item:!0,style:{opacity:v?1:.5},...H,children:e(P,{characterKey:d,talentKey:s,subtitle:r})},s):null})]}),!o&&e(C,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:T.map((s,r)=>e(C,{item:!0,sx:{opacity:l>=r+1?1:.5},...H,children:s},r))})]})})]})})}function P({characterKey:t,talentKey:a,subtitle:i}){const{gender:n}=ge(),o=_e(t,n).getTalentOfKey(a);return e(E,{bgt:"light",sx:{height:"100%"},children:p(A,{children:[p(C,{container:!0,sx:{flexWrap:"nowrap"},children:[e(C,{item:!0,children:e(x,{component:"img",src:o==null?void 0:o.img,sx:{width:60,height:"auto"}})}),p(C,{item:!0,flexGrow:1,sx:{pl:1},children:[e(R,{variant:"h6",children:o==null?void 0:o.name}),e(R,{variant:"subtitle1",children:i})]})]}),o!=null&&o.sections?e(at,{sections:o.sections,hideDesc:!0}):null]})})}const De=[5,4];function fa(){const{silly:t}=u.useContext(Ie),a=ce(),i=de(a.displayArchive),n=j([...De]),c=j([...Y]),[o,d]=u.useState(""),l=u.useDeferredValue(o),{character:h}=i,g=u.useCallback(s=>a.displayArchive.set({character:{...h,...s}}),[a,h]),f=u.useMemo(()=>ot.filter(s=>{const{rarity:r,weaponType:m}=je(s);if(!h.rarity.includes(r)||!h.weaponType.includes(m))return!1;const v=z.t(`charNames_gen:${s}`),M=t&&z.exists(`sillyWisher_charNames:${s}`)?z.t(`sillyWisher_charNames:${s}`):"";return!(l&&!v.toLocaleLowerCase().includes(l.toLocaleLowerCase())&&!M.toLocaleLowerCase().includes(l.toLocaleLowerCase()))}),[h,l,t]),{numShow:y,setTriggerElement:S}=ue(10,f.length),T=u.useMemo(()=>f.slice(0,y),[f,y]);return p(x,{children:[p(A,{sx:{display:"flex",gap:2},children:[e(B,{value:h.rarity,children:De.map(s=>e(I,{value:s,onClick:()=>g({rarity:n(h.rarity,s)}),children:e(D,{color:`rarity${s}`,children:e(N,{sx:{verticalAlign:"text-top"}})})},s))}),e(B,{value:h.weaponType,children:Y.map(s=>{var r;return e(I,{value:s,onClick:()=>g({weaponType:c(h.weaponType,s)}),children:e(L,{src:(r=re.weaponTypes)==null?void 0:r[s],size:2})},s)})}),e(be,{fullWidth:!0,variant:"outlined",value:o,onChange:s=>d(s.target.value),InputProps:{startAdornment:e(he,{position:"start",children:e(oe,{})})}})]}),p(te,{children:[e(se,{children:p(w,{children:[e(b,{children:"Name"}),e(b,{children:"Rarity"}),e(b,{children:"Element"}),e(b,{children:"Type"})]})}),p(ae,{children:[T.map(s=>e(ya,{characterKey:s},s)),T.length!==f.length&&e(w,{children:e(b,{colSpan:5,children:e(W,{ref:s=>{s&&S(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const ya=u.memo(function({characterKey:a}){var y;const{silly:i}=u.useContext(Ie),{gender:n}=ge(),[c,o,d]=Be(),{rarity:l,weaponType:h}=je(a),g=st(a),f=u.useMemo(()=>({key:a,level:90,ascension:6,constellation:6,talent:{auto:10,skill:10,burst:10}}),[a]);return p(u.Suspense,{fallback:e(w,{children:e(b,{colSpan:4,children:e(W,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(ga,{show:c,character:f,onClose:d}),p(w,{hover:!0,onClick:o,sx:{cursor:"pointer"},children:[e(b,{children:p(x,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:rt(a,n,i)}),e(Ae,{characterKey:a,gender:n})]})}),e(b,{children:e(x,{display:"flex",children:e(D,{color:`rarity${l}`,children:e(N,{})})})}),e(b,{children:e(nt,{ele:g,iconProps:{color:g}})}),e(b,{children:e(L,{src:(y=re.weaponTypes)==null?void 0:y[h],size:3,sideMargin:!0})})]})]})});function ma({show:t,weaponUIData:a,weapon:i,onClose:n}){const{key:c,level:o=0,refinement:d=1,ascension:l=0}=i,h=c&&ee(c),g=c?Ee(c,l>=2):"";return e(ze,{open:t,onClose:n,containerProps:{maxWidth:"md"},children:e(E,{children:e(A,{children:h&&a&&p(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:12,sm:3,children:p(C,{container:!0,spacing:1.5,children:[e(C,{item:!0,xs:6,sm:12,children:e(x,{sx:{position:"relative",display:"flex"},children:e(x,{component:"img",src:g,className:`grad-${h.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})})}),e(C,{item:!0,xs:6,sm:12,children:e(R,{children:e("small",{children:c&&e(it,{weaponKey:c})})})})]})}),p(C,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[p(x,{display:"flex",gap:1,flexWrap:"wrap",children:[e(R,{variant:"h5",children:e(Oe,{weaponKey:c})}),n&&e(He,{onClick:n,sx:{marginLeft:"auto"},children:e(Pe,{})})]}),p(R,{children:["Lv. ",lt(o,l)," R",d]}),e(ct,{stars:h.rarity}),e(R,{variant:"subtitle1",children:e("strong",{children:c&&e(dt,{weaponKey:c})})}),e(R,{gutterBottom:!0,children:c&&e(pt,{weaponKey:c,refineIndex:(a.get(Q.weapon.refinement).value??1)-1})}),e(x,{display:"flex",flexDirection:"column",gap:1,children:e(E,{bgt:"light",children:e(ut,{bgt:"light",children:[Q.weapon.main,Q.weapon.sub,Q.weapon.sub2].map(f=>{const y=a.get(f);return y.isEmpty||!y.value?null:e(ht,{node:y,component:bt},JSON.stringify(y.info))})})})})]})]})})})})}const Ne=[5,4,3,2,1];function va(){const t=ce(),a=de(t.displayArchive),i=j([...Ne]),n=j([...Y]),[c,o]=u.useState(""),d=u.useDeferredValue(c),{weapon:l}=a,h=u.useCallback(s=>t.displayArchive.set({weapon:{...l,...s}}),[t,l]),g=u.useMemo(()=>Ce.filter(s=>{const{rarity:r,subStat:m,weaponType:v}=ee(s);if(!l.rarity.includes(r)||l.subStat.length&&(!m||!l.subStat.includes(m.type))||!l.weaponType.includes(v))return!1;const M=z.t(`weaponNames_gen:${s}`);return!(d&&!M.toLocaleLowerCase().includes(d.toLocaleLowerCase()))}),[l,d]),{numShow:f,setTriggerElement:y}=ue(10,g.length),S=u.useMemo(()=>g.slice(0,f),[g,f]),T=u.useMemo(()=>xt(we,s=>Ce.forEach(r=>{const{subStat:m}=ee(r);if(!m)return;const{type:v}=m;s[v].total++,g.includes(r)&&s[v].current++})),[g]);return p(x,{children:[p(A,{sx:{display:"flex",gap:2},children:[e(B,{value:l.rarity,children:Ne.map(s=>e(I,{value:s,onClick:()=>h({rarity:i(l.rarity,s)}),children:e(D,{color:`rarity${s}`,children:e(N,{sx:{verticalAlign:"text-top"}})})},s))}),e(B,{value:l.weaponType,children:Y.map(s=>{var r;return e(I,{value:s,onClick:()=>h({weaponType:n(l.weaponType,s)}),children:e(L,{src:(r=re.weaponTypes)==null?void 0:r[s],size:2})},s)})}),e(Tt,{fullWidth:!0,substatKeys:l.subStat,setSubstatKeys:s=>{h({subStat:s})},totals:T,allSubstatKeys:[...we]}),e(be,{fullWidth:!0,variant:"outlined",value:c,onChange:s=>o(s.target.value),InputProps:{startAdornment:e(he,{position:"start",children:e(oe,{})})}})]}),p(te,{children:[e(se,{children:p(w,{children:[e(b,{children:"Name"}),e(b,{children:"Type"}),e(b,{children:"Rarity"}),e(b,{children:"Main"}),e(b,{children:"Secondary"})]})}),p(ae,{children:[S.map(s=>e(xa,{weaponKey:s},s)),g.length!==S.length&&e(w,{children:e(b,{colSpan:5,children:e(W,{ref:s=>{s&&y(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})})]})]})]})}const xa=u.memo(function({weaponKey:a}){var y;const[i,n,c]=Be(),{rarity:o,weaponType:d}=ee(a),l=u.useMemo(()=>({id:"invalid",ascension:o>2?6:4,key:a,level:o>2?90:70,refinement:1,location:"",lock:!1}),[o,a]),h=u.useMemo(()=>gt([ft(a).data,yt(l)]),[a,l]),g=h.get(Te.weapon.main),f=h.get(Te.weapon.sub);return p(u.Suspense,{fallback:e(w,{children:e(b,{colSpan:5,children:e(W,{sx:{borderRadius:1},variant:"rectangular",width:"100%",height:50})})}),children:[e(ma,{show:i,weaponUIData:h,weapon:l,onClose:c}),p(w,{hover:!0,onClick:n,sx:{cursor:"pointer"},children:[e(b,{children:p(x,{sx:{display:"flex",alignItems:"center"},children:[e(L,{size:4,src:Ee(a,!0)}),e(Oe,{weaponKey:a})]})}),e(b,{children:e(L,{src:(y=re.weaponTypes)==null?void 0:y[d],size:3,sideMargin:!0})}),e(b,{children:e(x,{display:"flex",children:e(D,{color:`rarity${o}`,children:e(N,{})})})}),e(b,{children:e(We,{node:g})}),e(b,{children:e(We,{node:f})})]})]})});function We({node:t}){const{name:a,icon:i}=mt(t.info);return Number.isNaN(t.value)?null:p(x,{sx:{display:"flex"},children:[p(R,{flexGrow:1,children:[i," ",a]}),e(R,{children:vt(t).valueString})]})}const Ta={i18Key:"tabs.artifacts",icon:e(Rt,{}),value:"artifacts",to:"/artifacts"},Ca={i18Key:"tabs.weapons",icon:e($t,{}),value:"weapons",to:"/weapons"},wa={i18Key:"tabs.characters",icon:e(Mt,{}),value:"characters",to:"/characters"},Ke=[Ta,Ca,wa],Sa=Ke.map(({value:t})=>t);function Ra(){const{t}=pe("ui"),{params:{tab:a}}=Ct({path:"/archive/:tab",end:!1})??{params:{}},i=u.useMemo(()=>Sa.find(c=>c===a)??"artifacts",[a]);return p(E,{children:[e(kt,{variant:"fullWidth",value:i,sx:{"& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px"}},children:Ke.map(({i18Key:n,icon:c,value:o,to:d})=>e(wt,{icon:c,iconPosition:"start",value:o,label:t(n),component:St,to:`/archive${d}`},o))}),e(Lt,{}),e(u.Suspense,{fallback:e(W,{variant:"rectangular",width:"100%",height:1e3}),children:p(Dt,{children:[e(X,{path:"artifacts",element:e(ba,{})}),e(X,{path:"weapons",element:e(va,{})}),e(X,{path:"characters",element:e(fa,{})}),e(X,{path:"*",element:e(Nt,{to:"artifacts",replace:!0})})]})})]})}export{Ra as default};
