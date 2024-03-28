import{av as Le,au as we,aw as q,ax as C,e as m,ay as De,az as oe,dr as W,j as A,aA as z,aB as Re,b0 as _,dH as We,cg as ze,cT as Ue,aR as He,c_ as be,aV as Je,Q as Ae,p as n,u as ce,n as f,K as v,bm as ge,bw as ae,ao as ie,T as S,V as qe,b2 as Qe,D as Q,c3 as Ye,dI as g,dJ as Ke,dK as Xe,bU as Ce,B as Y,dL as Me,dM as Ze,dN as et,a4 as tt,dO as nt,dP as st,a3 as at,a2 as ot,b4 as de,b as K,be as O,cC as $,dQ as T,bp as Pe,bo as Oe,C as re,Y as $e,dR as it,J as w,U as ve,t as rt,s as lt,W as ct,R as dt,_ as ut}from"./index-3a04a336.js";import{n as pt,r as mt,T as ft,y as ht,w as xt,x as yt,u as E}from"./index-7b81e026.js";import{u as bt}from"./useWeapon-fcc0ea9c.js";import{d as gt}from"./Close-fbdbbb77.js";import{L as Ct,a as vt,b as It}from"./ConditionalWrapper-5043e6a0.js";import{D as I}from"./DataContext-07efaa1f.js";import{d as St,a as kt}from"./InfoTooltip-c1776f5c.js";import{E as Ie,C as Lt}from"./StatIcon-4a293463.js";import{C as U,B as ue}from"./ColoredText-24ee1bbc.js";import{S as H}from"./SqBadge-a75e4b4d.js";import{B as wt}from"./BootstrapTooltip-f04b9f73.js";import{G as Dt}from"./Groups-f975f465.js";import{M as J,D as pe}from"./DropdownButton-cdfabb8b.js";import{e as Rt}from"./StarDisplay-795ec8cf.js";import{g as At}from"./index-a8f1029e.js";function Mt(e){return we("MuiListItem",e)}const Pt=Le("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),P=Pt;function Ot(e){return we("MuiListItemSecondaryAction",e)}Le("MuiListItemSecondaryAction",["root","disableGutters"]);const $t=["className"],Tt=e=>{const{disableGutters:t,classes:s}=e;return Re({root:["root",t&&"disableGutters"]},Ot,s)},jt=q("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})(({ownerState:e})=>C({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Te=m.forwardRef(function(t,s){const a=De({props:t,name:"MuiListItemSecondaryAction"}),{className:c}=a,i=oe(a,$t),d=m.useContext(W),r=C({},a,{disableGutters:d.disableGutters}),u=Tt(r);return A.jsx(jt,C({className:z(u.root,c),ownerState:r,ref:s},i))});Te.muiName="ListItemSecondaryAction";const Bt=Te,Ft=["className"],Nt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Vt=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.button&&t.button,s.hasSecondaryAction&&t.secondaryAction]},Gt=e=>{const{alignItems:t,button:s,classes:a,dense:c,disabled:i,disableGutters:d,disablePadding:r,divider:u,hasSecondaryAction:o,selected:p}=e;return Re({root:["root",c&&"dense",!d&&"gutters",!r&&"padding",u&&"divider",i&&"disabled",s&&"button",t==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction",p&&"selected"],container:["container"]},Mt,a)},_t=q("div",{name:"MuiListItem",slot:"Root",overridesResolver:Vt})(({theme:e,ownerState:t})=>C({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&C({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${We.root}`]:{paddingRight:48}},{[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:_(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:_(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:_(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Et=q("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Wt=m.forwardRef(function(t,s){const a=De({props:t,name:"MuiListItem"}),{alignItems:c="center",autoFocus:i=!1,button:d=!1,children:r,className:u,component:o,components:p={},componentsProps:b={},ContainerComponent:x="li",ContainerProps:{className:h}={},dense:l=!1,disabled:k=!1,disableGutters:j=!1,disablePadding:X=!1,divider:Z=!1,focusVisibleClassName:ee,secondaryAction:N,selected:te=!1,slotProps:B={},slots:y={}}=a,L=oe(a.ContainerProps,Ft),Ee=oe(a,Nt),fe=m.useContext(W),ne=m.useMemo(()=>({dense:l||fe.dense||!1,alignItems:c,disableGutters:j}),[c,fe.dense,l,j]),se=m.useRef(null);ze(()=>{i&&se.current&&se.current.focus()},[i]);const M=m.Children.toArray(r),he=M.length&&Ue(M[M.length-1],["ListItemSecondaryAction"]),V=C({},a,{alignItems:c,autoFocus:i,button:d,dense:ne.dense,disabled:k,disableGutters:j,disablePadding:X,divider:Z,hasSecondaryAction:he,selected:te}),xe=Gt(V),ye=He(se,s),G=y.root||p.Root||_t,F=B.root||b.root||{},D=C({className:z(xe.root,F.className,u),disabled:k},Ee);let R=o||"li";return d&&(D.component=o||"div",D.focusVisibleClassName=z(P.focusVisible,ee),R=Je),he?(R=!D.component&&!o?"div":R,x==="li"&&(R==="li"?R="div":D.component==="li"&&(D.component="div")),A.jsx(W.Provider,{value:ne,children:A.jsxs(Et,C({as:x,className:z(xe.container,h),ref:ye,ownerState:V},L,{children:[A.jsx(G,C({},F,!be(G)&&{as:R,ownerState:C({},V,F.ownerState)},D,{children:M})),M.pop()]}))})):A.jsx(W.Provider,{value:ne,children:A.jsxs(G,C({},F,{as:R,ref:ye},!be(G)&&{ownerState:C({},V,F.ownerState)},D,{children:[M,N&&A.jsx(Bt,{children:N})]}))})}),je=Wt,Be=m.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function kn({children:e}){const[t,s,a]=Ae(),[[c,i],d]=m.useState([void 0,void 0]),r=m.useCallback((u,o)=>{u&&o?s():a(),d([u,o])},[s,a]);return n(Be.Provider,{value:{setFormulaData:r,data:c,node:i,modalOpen:t,onModalOpen:s,onModalClose:a},children:e})}const Se={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},ke={mx:.25,px:.25};function zt({reaction:e,trigger:t}){const{t:s}=ce("sheet_gen");t||(t=Object.keys(Se[e])[0]);const a=Se[e][t];return a?f(v,{display:"flex",alignItems:"center",children:[n(U,{color:"melt",children:s(`reaction.${e}`)}),n(H,{sx:ke,color:a,children:n(Ie,{ele:a,iconProps:ge})}),"+",n(H,{sx:ke,color:t,children:n(Ie,{ele:t,iconProps:ge})})]}):null}function Fe({fields:e,bgt:t="normal"}){return n(Ne,{sx:{m:0},bgt:t,children:e.map((s,a)=>n(Ut,{field:s,component:je},a))})}function Ut({field:e,component:t}){const{data:s,oldData:a}=m.useContext(I);if(!m.useMemo(()=>{var i;return((i=e==null?void 0:e.canShow)==null?void 0:i.call(e,s))??!0},[e,s]))return null;if("node"in e){const i=s.get(e.node);if(i.isEmpty)return null;if(a){const d=a.get(e.node),r=d.isEmpty?0:d.value;return n(le,{node:i,oldValue:r,component:t})}else return n(le,{node:i,component:t})}return n(Ht,{field:e,component:t})}function Ht({field:e,component:t}){var r;const{data:s}=m.useContext(I),a=g(e.value,s),c=g(e.variant,s),i=e.text&&n("span",{children:e.text}),d=e.textSuffix&&f("span",{children:[" ",e.textSuffix]});return f(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:t,children:[f(S,{color:`${c}.main`,children:[i,d]}),f(S,{children:[typeof a=="number"?(r=a.toFixed)==null?void 0:r.call(a,e.fixed):a,e.unit]})]})}function le({node:e,oldValue:t,component:s,emphasize:a}){const{data:c}=m.useContext(I),{setFormulaData:i}=m.useContext(Be),d=m.useCallback(()=>i(c,e),[i,c,e]);if(e.isEmpty)return null;const{multi:r}=e.info,u=r&&f("span",{children:[r,"×"]});let o=!1;if(t!==void 0){const p=e.value-t,b=ae(Math.abs(p/t),"%",e.info.fixed);o=f(ie,{children:[n("span",{children:ae(t,e.info.unit,e.info.fixed)}),Math.abs(p)>1e-4&&f(ie,{children:[f(U,{color:p>0?"success":"error",children:[p>0?"+":"",ae(p,e.info.unit,e.info.fixed)]}),e.info.unit!=="%"&&t!==0&&f(U,{color:p>0?"success":"error",children:["(",b,")"]})]})]})}else o=n("span",{children:pt(e)});return f(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:a?"0px 0px 0px 2px red inset":void 0},component:s,children:[n(Jt,{node:e}),f(S,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap"},children:[u,o]}),!!e.formula&&n(wt,{placement:"top",title:n(S,{children:f(m.Suspense,{fallback:n(qe,{variant:"rectangular",width:300,height:30}),children:[Qe.includes(e.info.variant)&&f(v,{sx:{display:"inline-flex",gap:1,mr:1},children:[n(v,{children:n(zt,{reaction:e.info.variant,trigger:e.info.subVariant})}),n(Q,{orientation:"vertical",flexItem:!0})]}),n("span",{children:e.formula})]})}),children:n(St,{onClick:d,fontSize:"inherit",sx:{cursor:"help"}})})]})}function Jt({node:e}){const{textSuffix:t,icon:s,isTeamBuff:a,variant:c,name:i}=mt(e.info);return f(S,{component:"div",sx:{display:"flex",gap:1,alignItems:"center",marginRight:"auto"},children:[!!a&&n(Dt,{}),s,f(U,{color:c,children:[i,t&&f("span",{children:[" ",t]})]})]})}const Ne=q(Ye)(({theme:e,bgt:t="normal"})=>{const s=t==="light"?"contentLight":t==="dark"?"contentDark":"contentNormal";return{borderRadius:e.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:e.palette[s].main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:e.palette[s].dark}}});function qt({level:e,ascension:t,setBoth:s,useLow:a=!1,disabled:c=!1}){const{t:i}=ce("ui"),d=a?et:Ce,r=m.useCallback((o=1)=>{o=tt(o,1,a?nt:st);const p=d.findIndex(b=>o<=b);s({level:o,ascension:p})},[s,d,a]),u=m.useCallback(()=>{const o=d.findIndex(p=>e!==90&&e===p);s(t===o?{ascension:t+1}:{ascension:o})},[s,d,t,e]);return f(ue,{sx:{bgcolor:o=>o.palette.contentNormal.main},children:[n(ot,{children:n(at,{onChange:r,value:e,startAdornment:"Lv. ",disabled:c,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),n(Y,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(a?Ke:Xe)(e)||c,onClick:u,children:f("strong",{children:["/ ",Ce[t]]})}),n(pe,{title:i("selectlevel"),sx:{flexGrow:1},disabled:c,children:[...a?Me:Ze].map(([o,p])=>{const b=o===e&&p===t;return n(J,{selected:b,disabled:b,onClick:()=>s({level:o,ascension:p}),children:o===d[p]?`Lv. ${o}`:`Lv. ${o}/${d[p]}`},`${o}/${p}`)})})]})}function Qt({avatar:e,title:t,action:s}){return f(v,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,n(S,{variant:"subtitle1",sx:{flexGrow:1},children:t}),s&&n(S,{variant:"caption",children:s})]})}function Yt({conditional:e,disabled:t=!1}){const{data:s}=m.useContext(I);return Object.keys(g(e.states,s)).length===1&&"path"in e?n(Kt,{conditional:e,disabled:t}):"path"in e?n(Xt,{conditional:e,disabled:t}):n(Zt,{conditional:e,disabled:t})}function Kt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(de),{data:c}=m.useContext(I),i=K(),d=m.useCallback(x=>{e.path[0]==="resonance"?i.teams.set(s,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l}):i.teamChars.set(a,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l})},[i,e.path,a,s]),r=c.get(e.value).value,[u,o]=Object.entries(g(e.states,c))[0],p=Ge(o.name),b=me(e.name);return f(Y,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r?"success":"primary",onClick:()=>d(r?void 0:u),disabled:t,startIcon:r?n(Pe,{}):n(Oe,{}),children:[b," ",p]})}function Xt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(de),{data:c}=m.useContext(I),i=K(),d=m.useCallback(x=>{e.path[0]==="resonance"?i.teams.set(s,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l}):i.teamChars.set(a,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l})},[i,e.path,a,s]),r=c.get(e.value).value,u=g(e.states,c),o=r?u[r]:void 0,p=o?Ge(o.name):n(H,{color:"secondary",children:"Not Active"}),b=me(e.name);return f(pe,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r&&o?"success":"primary",title:f("span",{children:[b," ",p]}),disabled:t,children:[n(J,{onClick:()=>d(),selected:!o,disabled:!o,children:n("span",{children:"Not Active"})}),n(Q,{}),Object.entries(u).map(([x,h])=>n(J,{onClick:()=>d(x),selected:r===x,disabled:r===x,children:h.name},x))]})}function Zt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(de),{data:c}=m.useContext(I),i=K(),d=m.useCallback((r,u)=>{r[0]==="resonance"?i.teamChars.set(s,o=>{const p=O(o.conditional);u?$(p,r,u):T(p,r),o.conditional=p}):i.teamChars.set(a,o=>{const p=O(o.conditional);u?$(p,r,u):T(p,r),o.conditional=p})},[i,a,s]);return n(ue,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(g(e.states,c)).map(([r,u])=>{const o=c.get(u.value).value,p=o===r;return n(Y,{color:p?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>d(u.path,o?void 0:r),size:"small",startIcon:p?n(Pe,{}):n(Oe,{}),sx:{borderRadius:0},children:me(u.name)},r)})})}function Ve(e){return typeof e!="string"}function Ge(e){if(!e)return"";let t="primary",s=e;return e&&Ve(e)&&e.props.color&&(t=e.props.color,s=n("span",{children:e.props.children})),n(H,{sx:{ml:.5},color:t,children:s})}function me(e){if(Ve(e)){const t=e.props.key18,s=e.props.ns,a=e.props.values;return n(ft,{ns:s,key18:t,values:a,useBadge:!0})}return e}function en({conditional:e,hideHeader:t=!1,hideDesc:s=!1,disabled:a=!1,bgt:c="normal"}){var r;const{data:i}=m.useContext(I);let d;if("path"in e){const u=i.get(e.value).value,o=g(e.states,i);d=u&&((r=o[u])==null?void 0:r.fields)}else{const u=g(e.states,i);d=Object.values(u).flatMap(o=>i.get(o.value).value?o.fields:[])}return f($e,{bgt:c,children:[!g(t,e)&&n(_e,{header:e.header,hideDesc:s}),n(re,{sx:{p:0,"&:last-child":{pb:0}},children:n(Yt,{conditional:e,disabled:a})}),d&&n(Fe,{bgt:c,fields:d})]})}function tn({sections:e,teamBuffOnly:t,hideDesc:s=!1,hideHeader:a=!1,disabled:c=!1,bgt:i="normal"}){const{data:d}=m.useContext(I);if(!e.length)return null;const r=e.map((u,o)=>u.canShow&&!d.get(u.canShow).value||t&&!u.teamBuff?null:n(nn,{section:u,hideDesc:s,hideHeader:a,disabled:c,bgt:i},o)).filter(u=>u);return r.length?n(v,{display:"flex",flexDirection:"column",gap:1,children:r}):null}function nn({section:e,hideDesc:t=!1,hideHeader:s=!1,disabled:a=!1,bgt:c="normal"}){return"fields"in e?n(sn,{section:e,hideDesc:t,hideHeader:s,bgt:c}):"states"in e?n(en,{conditional:e,hideDesc:t,hideHeader:s,disabled:a,bgt:c}):n(an,{section:e})}function sn({section:e,hideDesc:t,hideHeader:s,bgt:a="normal"}){return f($e,{bgt:a,children:[!g(s,e)&&e.header&&n(_e,{header:e.header,hideDesc:t,hideDivider:e.fields.length===0}),n(Fe,{bgt:a,fields:e.fields})]})}function an({section:e}){const{data:t}=m.useContext(I);return n("div",{children:g(e.text,t)})}function _e({header:e,hideDesc:t,hideDivider:s}){const{data:a}=m.useContext(I),{icon:c,title:i,action:d}=e,r=g(c,a),u=!t&&g(e.description,a);return f(ie,{children:[n(Qt,{avatar:r,title:t?i:f("span",{children:[i,n(kt,{title:n(S,{children:u})})]}),action:d}),!s&&n(Q,{})]})}function on({refinement:e,setRefinement:t,disabled:s=!1}){const{t:a}=ce("ui");return n(pe,{title:a("refinement",{value:e}),disabled:s,children:it.map(c=>n(J,{onClick:()=>t(c),selected:e===c,disabled:e===c,children:a("refinement",{value:c})},c))})}const rn=dt.lazy(()=>ut(()=>import("./WeaponSelectionModal-967e2d86.js"),["./WeaponSelectionModal-967e2d86.js","./index-3a04a336.js","./index-38d72b1b.css","./index-7b81e026.js","./ColoredText-24ee1bbc.js","./SqBadge-a75e4b4d.js","./Close-fbdbbb77.js","./index-a8f1029e.js","./totalUtils-395ed505.js","./StarDisplay-795ec8cf.js","./DropdownButton-cdfabb8b.js","./WeaponCard-64a5772b.js","./SolidToggleButtonGroup-324bb6b0.js","./useWeapon-fcc0ea9c.js","./ConditionalWrapper-5043e6a0.js","./CardActionArea-6c1261c8.js"],import.meta.url));function ln({weaponId:e,footer:t=!1,onClose:s,extraButtons:a}){const{data:c}=m.useContext(I),i=K(),d=bt(e),{key:r="",level:u=0,refinement:o=1,ascension:p=0,lock:b,location:x="",id:h}=d??{},l=r?At(r):void 0,k=m.useCallback(y=>{i.weapons.set(e,y)},[e,i]),j=m.useCallback(y=>h&&i.weapons.set(h,{location:y}),[i,h]),X=m.useCallback(y=>y.weaponTypeKey===(l==null?void 0:l.weaponType),[l]),[Z,ee,N]=Ae(),te=r?ht(r,p>=2):"";m.useEffect(()=>{if(!(!l||!k||l.key!==(d==null?void 0:d.key))&&l.rarity<=2&&(u>70||p>4)){const[y,L]=Me[0];k({level:y,ascension:L})}},[l,d,k,u,p]);const B=m.useMemo(()=>l&&d&&xt([l.data,yt(d)]),[l,d]);return n(ct,{open:!!e,onClose:s,containerProps:{maxWidth:"md"},children:f(lt,{children:[n(rn,{ascension:p,show:Z,onHide:N,onSelect:y=>k({key:y}),weaponTypeFilter:l&&l.weaponType}),n(re,{children:l&&B&&f(w,{container:!0,spacing:1.5,children:[n(w,{item:!0,xs:12,sm:3,children:f(w,{container:!0,spacing:1.5,children:[n(w,{item:!0,xs:6,sm:12,children:f(v,{sx:{position:"relative",display:"flex"},children:[n(v,{component:"img",src:te,className:`grad-${l.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}}),n(ve,{color:"primary",onClick:()=>h&&i.weapons.set(h,{lock:!b}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:b?n(Ct,{}):n(vt,{})})]})}),n(w,{item:!0,xs:6,sm:12,children:n(S,{children:n("small",{children:l.description})})})]})}),f(w,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[f(v,{display:"flex",gap:1,flexWrap:"wrap",children:[f(ue,{children:[n(Y,{color:"info",onClick:ee,children:(l==null?void 0:l.name)??"Select a Weapon"}),(l==null?void 0:l.hasRefinement)&&n(on,{refinement:o,setRefinement:y=>k({refinement:y})}),a]}),s&&n(ve,{onClick:s,sx:{marginLeft:"auto"},children:n(gt,{})})]}),n(v,{display:"flex",gap:1,flexWrap:"wrap",children:l&&n(qt,{level:u,ascension:p,setBoth:k,useLow:!l.hasRefinement})}),n(Rt,{stars:l.rarity}),n(S,{variant:"subtitle1",children:n("strong",{children:l.passiveName})}),n(S,{gutterBottom:!0,children:l.passiveName&&l.passiveDescription(B.get(E.weapon.refinement).value-1)}),f(v,{display:"flex",flexDirection:"column",gap:1,children:[f(rt,{children:[n(Lt,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),n(Q,{}),n(Ne,{children:[E.weapon.main,E.weapon.sub,E.weapon.sub2].map(y=>{const L=B.get(y);return L.isEmpty||!L.value?null:n(le,{node:L,component:je},JSON.stringify(L.info))})})]}),c&&l.document&&n(tn,{sections:l.document})]})]})]})}),t&&h&&n(re,{sx:{py:1},children:n(w,{container:!0,spacing:1,children:n(w,{item:!0,flexGrow:1,children:n(It,{location:x,setLocation:j,filter:X,autoCompleteProps:{getOptionDisabled:y=>!y.key}})})})})]})})}const Ln=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"}));export{zt as A,Qt as C,tn as D,Be as F,je as L,Jt as N,on as R,ln as W,le as a,Ne as b,qt as c,kn as d,Ln as e};