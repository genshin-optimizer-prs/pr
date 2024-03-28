import{av as ke,au as Le,aw as q,ax as b,e as f,ay as we,az as ae,dr as z,j as A,aA as U,aB as De,b0 as E,dH as ze,ci as Ue,d2 as He,aR as Je,d9 as he,aV as qe,Q as Re,p as n,u as re,n as m,K as v,bm as ye,bw as W,T as I,aJ as Ae,ao as Me,V as Qe,b2 as Ye,D as Q,c5 as Ke,dI as C,dJ as Xe,dK as Ze,bU as ge,B as Y,dL as Pe,dM as et,dN as tt,a4 as nt,dO as st,dP as at,a3 as ot,a2 as it,b4 as le,b as K,be as $,cE as O,dQ as T,bp as $e,bo as Oe,C as oe,Y as Te,dR as rt,J as w,U as Ce,t as lt,s as ct,W as dt,R as ut,_ as pt}from"./index-44aaebe3.js";import{E as be,n as ft,T as mt,x as xt,v as ht,w as yt,u as _}from"./index-4e8ea5c4.js";import{u as gt}from"./useWeapon-bf75d5d8.js";import{d as Ct}from"./Close-2dac47dd.js";import{L as bt,a as vt,b as It}from"./ConditionalWrapper-8d0a96f2.js";import{D as S}from"./DataContext-3248192c.js";import{d as St,a as kt}from"./InfoTooltip-e56ebd5e.js";import{C as Lt,B as ce}from"./ColoredText-3f5b0fb0.js";import{S as H}from"./SqBadge-b77fcb1c.js";import{B as ve}from"./BootstrapTooltip-bf0d1c22.js";import{G as wt}from"./Groups-c4f7be63.js";import{M as J,D as de}from"./DropdownButton-cae087e7.js";import{e as Dt}from"./StarDisplay-540e25fc.js";import{g as Rt}from"./index-45c2cce6.js";import{C as At}from"./CardHeader-fd990a72.js";function Mt(e){return Le("MuiListItem",e)}const Pt=ke("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),P=Pt;function $t(e){return Le("MuiListItemSecondaryAction",e)}ke("MuiListItemSecondaryAction",["root","disableGutters"]);const Ot=["className"],Tt=e=>{const{disableGutters:t,classes:s}=e;return De({root:["root",t&&"disableGutters"]},$t,s)},jt=q("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})(({ownerState:e})=>b({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),je=f.forwardRef(function(t,s){const a=we({props:t,name:"MuiListItemSecondaryAction"}),{className:d}=a,i=ae(a,Ot),c=f.useContext(z),r=b({},a,{disableGutters:c.disableGutters}),u=Tt(r);return A.jsx(jt,b({className:U(u.root,d),ownerState:r,ref:s},i))});je.muiName="ListItemSecondaryAction";const Bt=je,Ft=["className"],Nt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Vt=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.button&&t.button,s.hasSecondaryAction&&t.secondaryAction]},Gt=e=>{const{alignItems:t,button:s,classes:a,dense:d,disabled:i,disableGutters:c,disablePadding:r,divider:u,hasSecondaryAction:o,selected:p}=e;return De({root:["root",d&&"dense",!c&&"gutters",!r&&"padding",u&&"divider",i&&"disabled",s&&"button",t==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction",p&&"selected"],container:["container"]},Mt,a)},Et=q("div",{name:"MuiListItem",slot:"Root",overridesResolver:Vt})(({theme:e,ownerState:t})=>b({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&b({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${ze.root}`]:{paddingRight:48}},{[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:E(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:E(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:E(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:E(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Wt=q("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),_t=f.forwardRef(function(t,s){const a=we({props:t,name:"MuiListItem"}),{alignItems:d="center",autoFocus:i=!1,button:c=!1,children:r,className:u,component:o,components:p={},componentsProps:h={},ContainerComponent:y="li",ContainerProps:{className:x}={},dense:l=!1,disabled:k=!1,disableGutters:j=!1,disablePadding:X=!1,divider:Z=!1,focusVisibleClassName:ee,secondaryAction:N,selected:te=!1,slotProps:B={},slots:g={}}=a,L=ae(a.ContainerProps,Ft),_e=ae(a,Nt),pe=f.useContext(z),ne=f.useMemo(()=>({dense:l||pe.dense||!1,alignItems:d,disableGutters:j}),[d,pe.dense,l,j]),se=f.useRef(null);Ue(()=>{i&&se.current&&se.current.focus()},[i]);const M=f.Children.toArray(r),fe=M.length&&He(M[M.length-1],["ListItemSecondaryAction"]),V=b({},a,{alignItems:d,autoFocus:i,button:c,dense:ne.dense,disabled:k,disableGutters:j,disablePadding:X,divider:Z,hasSecondaryAction:fe,selected:te}),me=Gt(V),xe=Je(se,s),G=g.root||p.Root||Et,F=B.root||h.root||{},D=b({className:U(me.root,F.className,u),disabled:k},_e);let R=o||"li";return c&&(D.component=o||"div",D.focusVisibleClassName=U(P.focusVisible,ee),R=qe),fe?(R=!D.component&&!o?"div":R,y==="li"&&(R==="li"?R="div":D.component==="li"&&(D.component="div")),A.jsx(z.Provider,{value:ne,children:A.jsxs(Wt,b({as:y,className:U(me.container,x),ref:xe,ownerState:V},L,{children:[A.jsx(G,b({},F,!he(G)&&{as:R,ownerState:b({},V,F.ownerState)},D,{children:M})),M.pop()]}))})):A.jsx(z.Provider,{value:ne,children:A.jsxs(G,b({},F,{as:R,ref:xe},!he(G)&&{ownerState:b({},V,F.ownerState)},D,{children:[M,N&&A.jsx(Bt,{children:N})]}))})}),Be=_t,Fe=f.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function kn({children:e}){const[t,s,a]=Re(),[[d,i],c]=f.useState([void 0,void 0]),r=f.useCallback((u,o)=>{u&&o?s():a(),c([u,o])},[s,a]);return n(Fe.Provider,{value:{setFormulaData:r,data:d,node:i,modalOpen:t,onModalOpen:s,onModalClose:a},children:e})}const Ie={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},Se={mx:.25,px:.25};function zt({reaction:e,trigger:t}){const{t:s}=re("sheet_gen");t||(t=Object.keys(Ie[e])[0]);const a=Ie[e][t];return a?m(v,{display:"flex",alignItems:"center",children:[n(Lt,{color:"melt",children:s(`reaction.${e}`)}),n(H,{sx:Se,color:a,children:n(be,{ele:a,iconProps:ye})}),"+",n(H,{sx:Se,color:t,children:n(be,{ele:t,iconProps:ye})})]}):null}function Ne({fields:e,bgt:t="normal"}){return n(Ve,{sx:{m:0},bgt:t,children:e.map((s,a)=>n(Ut,{field:s,component:Be},a))})}function Ut({field:e,component:t}){const{data:s,compareData:a}=f.useContext(S);if(!f.useMemo(()=>{var i;return((i=e==null?void 0:e.canShow)==null?void 0:i.call(e,s))??!0},[e,s]))return null;if("node"in e){const i=s.get(e.node);if(i.isEmpty)return null;if(a){const c=a.get(e.node),r=c.isEmpty?0:c.value;return n(ie,{node:i,compareValue:r,component:t})}else return n(ie,{node:i,component:t})}return n(Ht,{field:e,component:t})}function Ht({field:e,component:t}){var r;const{data:s}=f.useContext(S),a=C(e.value,s),d=C(e.variant,s),i=e.text&&n("span",{children:e.text}),c=e.textSuffix&&m("span",{children:[" ",e.textSuffix]});return m(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:t,children:[m(I,{color:`${d}.main`,children:[i,c]}),m(I,{children:[typeof a=="number"?(r=a.toFixed)==null?void 0:r.call(a,e.fixed):a,e.unit]})]})}function ie({node:e,compareValue:t,component:s,emphasize:a}){const{data:d}=f.useContext(S),{setFormulaData:i}=f.useContext(Fe),c=f.useCallback(()=>i(d,e),[i,d,e]);if(e.isEmpty)return null;const{multi:r}=e.info,u=r&&m("span",{children:[r,"×"]}),o=e.value;let p=!1;if(t!==void 0){const h=o-t,y=W(h/t,"%",e.info.fixed);p=m(Me,{children:[n("span",{children:W(o,e.info.unit,e.info.fixed)}),Math.abs(h)>1e-4&&n(ve,{title:m(I,{children:["Compare to"," ",n("strong",{children:W(t,e.info.unit,e.info.fixed)})]}),children:m(Ae,{color:h>0?"success":"error",sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap"},children:[m("span",{children:["(",h>0?"+":"",W(h,e.info.unit,e.info.fixed),")"]}),e.info.unit!=="%"&&t!==0&&m("span",{children:["(",h>0?"+":"",y,")"]})]})})]})}else p=n("span",{children:ft(e)});return m(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:a?"0px 0px 0px 2px red inset":void 0},component:s,children:[n(Jt,{node:e}),m(I,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap"},children:[u,p]}),!!e.formula&&n(ve,{placement:"top",title:n(I,{children:m(f.Suspense,{fallback:n(Qe,{variant:"rectangular",width:300,height:30}),children:[Ye.includes(e.info.variant)&&m(v,{sx:{display:"inline-flex",gap:1,mr:1},children:[n(v,{children:n(zt,{reaction:e.info.variant,trigger:e.info.subVariant})}),n(Q,{orientation:"vertical",flexItem:!0})]}),n("span",{children:e.formula})]})}),children:n(St,{onClick:c,fontSize:"inherit",sx:{cursor:"help"}})})]})}function Jt({node:e}){const{textSuffix:t}=e.info,s=t&&m("span",{children:[" ",t]}),a=e.info.variant;return m(I,{component:"div",sx:{display:"flex",gap:1,alignItems:"center",marginRight:"auto"},children:[!!e.info.isTeamBuff&&n(wt,{}),e.info.icon,m(Ae,{color:a!=="invalid"?a:void 0,children:[e.info.name,s]})]})}const Ve=q(Ke)(({theme:e,bgt:t="normal"})=>{const s=t==="light"?"contentLight":t==="dark"?"contentDark":"contentNormal";return{borderRadius:e.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:e.palette[s].main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:e.palette[s].dark}}});function qt({level:e,ascension:t,setBoth:s,useLow:a=!1,disabled:d=!1}){const{t:i}=re("ui"),c=a?tt:ge,r=f.useCallback((o=1)=>{o=nt(o,1,a?st:at);const p=c.findIndex(h=>o<=h);s({level:o,ascension:p})},[s,c,a]),u=f.useCallback(()=>{const o=c.findIndex(p=>e!==90&&e===p);s(t===o?{ascension:t+1}:{ascension:o})},[s,c,t,e]);return m(ce,{sx:{bgcolor:o=>o.palette.contentNormal.main},children:[n(it,{children:n(ot,{onChange:r,value:e,startAdornment:"Lv. ",disabled:d,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),n(Y,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(a?Xe:Ze)(e)||d,onClick:u,children:m("strong",{children:["/ ",ge[t]]})}),n(de,{title:i("selectlevel"),sx:{flexGrow:1},disabled:d,children:[...a?Pe:et].map(([o,p])=>{const h=o===e&&p===t;return n(J,{selected:h,disabled:h,onClick:()=>s({level:o,ascension:p}),children:o===c[p]?`Lv. ${o}`:`Lv. ${o}/${c[p]}`},`${o}/${p}`)})})]})}function Qt({avatar:e,title:t,action:s}){return m(v,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,n(I,{variant:"subtitle1",sx:{flexGrow:1},children:t}),s&&n(I,{variant:"caption",children:s})]})}function Yt({conditional:e,disabled:t=!1}){const{data:s}=f.useContext(S);return Object.keys(C(e.states,s)).length===1&&"path"in e?n(Kt,{conditional:e,disabled:t}):"path"in e?n(Xt,{conditional:e,disabled:t}):n(Zt,{conditional:e,disabled:t})}function Kt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=f.useContext(le),{data:d}=f.useContext(S),i=K(),c=f.useCallback(y=>{e.path[0]==="resonance"?i.teams.set(s,x=>{const l=$(x.conditional);y?O(l,e.path,y):T(l,e.path),x.conditional=l}):i.teamChars.set(a,x=>{const l=$(x.conditional);y?O(l,e.path,y):T(l,e.path),x.conditional=l})},[i,e.path,a,s]),r=d.get(e.value).value,[u,o]=Object.entries(C(e.states,d))[0],p=Ee(o.name),h=ue(e.name);return m(Y,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r?"success":"primary",onClick:()=>c(r?void 0:u),disabled:t,startIcon:r?n($e,{}):n(Oe,{}),children:[h," ",p]})}function Xt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=f.useContext(le),{data:d}=f.useContext(S),i=K(),c=f.useCallback(y=>{e.path[0]==="resonance"?i.teams.set(s,x=>{const l=$(x.conditional);y?O(l,e.path,y):T(l,e.path),x.conditional=l}):i.teamChars.set(a,x=>{const l=$(x.conditional);y?O(l,e.path,y):T(l,e.path),x.conditional=l})},[i,e.path,a,s]),r=d.get(e.value).value,u=C(e.states,d),o=r?u[r]:void 0,p=o?Ee(o.name):n(H,{color:"secondary",children:"Not Active"}),h=ue(e.name);return m(de,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r&&o?"success":"primary",title:m("span",{children:[h," ",p]}),disabled:t,children:[n(J,{onClick:()=>c(),selected:!o,disabled:!o,children:n("span",{children:"Not Active"})}),n(Q,{}),Object.entries(u).map(([y,x])=>n(J,{onClick:()=>c(y),selected:r===y,disabled:r===y,children:x.name},y))]})}function Zt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=f.useContext(le),{data:d}=f.useContext(S),i=K(),c=f.useCallback((r,u)=>{r[0]==="resonance"?i.teamChars.set(s,o=>{const p=$(o.conditional);u?O(p,r,u):T(p,r),o.conditional=p}):i.teamChars.set(a,o=>{const p=$(o.conditional);u?O(p,r,u):T(p,r),o.conditional=p})},[i,a,s]);return n(ce,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(C(e.states,d)).map(([r,u])=>{const o=d.get(u.value).value,p=o===r;return n(Y,{color:p?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>c(u.path,o?void 0:r),size:"small",startIcon:p?n($e,{}):n(Oe,{}),sx:{borderRadius:0},children:ue(u.name)},r)})})}function Ge(e){return typeof e!="string"}function Ee(e){if(!e)return"";let t="primary",s=e;return e&&Ge(e)&&e.props.color&&(t=e.props.color,s=n("span",{children:e.props.children})),n(H,{sx:{ml:.5},color:t,children:s})}function ue(e){if(Ge(e)){const t=e.props.key18,s=e.props.ns,a=e.props.values;return n(mt,{ns:s,key18:t,values:a,useBadge:!0})}return e}function en({conditional:e,hideHeader:t=!1,hideDesc:s=!1,disabled:a=!1,bgt:d="normal"}){var r;const{data:i}=f.useContext(S);let c;if("path"in e){const u=i.get(e.value).value,o=C(e.states,i);c=u&&((r=o[u])==null?void 0:r.fields)}else{const u=C(e.states,i);c=Object.values(u).flatMap(o=>i.get(o.value).value?o.fields:[])}return m(Te,{bgt:d,children:[!C(t,e)&&n(We,{header:e.header,hideDesc:s}),n(oe,{sx:{p:0,"&:last-child":{pb:0}},children:n(Yt,{conditional:e,disabled:a})}),c&&n(Ne,{bgt:d,fields:c})]})}function tn({sections:e,teamBuffOnly:t,hideDesc:s=!1,hideHeader:a=!1,disabled:d=!1,bgt:i="normal"}){const{data:c}=f.useContext(S);if(!e.length)return null;const r=e.map((u,o)=>u.canShow&&!c.get(u.canShow).value||t&&!u.teamBuff?null:n(nn,{section:u,hideDesc:s,hideHeader:a,disabled:d,bgt:i},o)).filter(u=>u);return r.length?n(v,{display:"flex",flexDirection:"column",gap:1,children:r}):null}function nn({section:e,hideDesc:t=!1,hideHeader:s=!1,disabled:a=!1,bgt:d="normal"}){return"fields"in e?n(sn,{section:e,hideDesc:t,hideHeader:s,bgt:d}):"states"in e?n(en,{conditional:e,hideDesc:t,hideHeader:s,disabled:a,bgt:d}):n(an,{section:e})}function sn({section:e,hideDesc:t,hideHeader:s,bgt:a="normal"}){return m(Te,{bgt:a,children:[!C(s,e)&&e.header&&n(We,{header:e.header,hideDesc:t,hideDivider:e.fields.length===0}),n(Ne,{bgt:a,fields:e.fields})]})}function an({section:e}){const{data:t}=f.useContext(S);return n("div",{children:C(e.text,t)})}function We({header:e,hideDesc:t,hideDivider:s}){const{data:a}=f.useContext(S),{icon:d,title:i,action:c}=e,r=C(d,a),u=!t&&C(e.description,a);return m(Me,{children:[n(Qt,{avatar:r,title:t?i:m("span",{children:[i,n(kt,{title:n(I,{children:u})})]}),action:c}),!s&&n(Q,{})]})}function on({refinement:e,setRefinement:t,disabled:s=!1}){const{t:a}=re("ui");return n(de,{title:a("refinement",{value:e}),disabled:s,children:rt.map(d=>n(J,{onClick:()=>t(d),selected:e===d,disabled:e===d,children:a("refinement",{value:d})},d))})}const rn=ut.lazy(()=>pt(()=>import("./WeaponSelectionModal-122da735.js"),["./WeaponSelectionModal-122da735.js","./index-44aaebe3.js","./index-cb31fb4d.css","./index-4e8ea5c4.js","./ColoredText-3f5b0fb0.js","./SqBadge-b77fcb1c.js","./Close-2dac47dd.js","./index-45c2cce6.js","./totalUtils-59a97d95.js","./StarDisplay-540e25fc.js","./DropdownButton-cae087e7.js","./WeaponCard-62720a98.js","./SolidToggleButtonGroup-2816866c.js","./useWeapon-bf75d5d8.js","./ConditionalWrapper-8d0a96f2.js","./CardActionArea-b119afc6.js"],import.meta.url));function ln({weaponId:e,footer:t=!1,onClose:s,extraButtons:a}){const{data:d}=f.useContext(S),i=K(),c=gt(e),{key:r="",level:u=0,refinement:o=1,ascension:p=0,lock:h,location:y="",id:x}=c??{},l=r?Rt(r):void 0,k=f.useCallback(g=>{i.weapons.set(e,g)},[e,i]),j=f.useCallback(g=>x&&i.weapons.set(x,{location:g}),[i,x]),X=f.useCallback(g=>g.weaponTypeKey===(l==null?void 0:l.weaponType),[l]),[Z,ee,N]=Re(),te=r?xt(r,p>=2):"";f.useEffect(()=>{if(!(!l||!k||l.key!==(c==null?void 0:c.key))&&l.rarity<=2&&(u>70||p>4)){const[g,L]=Pe[0];k({level:g,ascension:L})}},[l,c,k,u,p]);const B=f.useMemo(()=>l&&c&&ht([l.data,yt(c)]),[l,c]);return n(dt,{open:!!e,onClose:s,containerProps:{maxWidth:"md"},children:m(ct,{children:[n(rn,{ascension:p,show:Z,onHide:N,onSelect:g=>k({key:g}),weaponTypeFilter:l&&l.weaponType}),n(oe,{children:l&&B&&m(w,{container:!0,spacing:1.5,children:[n(w,{item:!0,xs:12,sm:3,children:m(w,{container:!0,spacing:1.5,children:[n(w,{item:!0,xs:6,sm:12,children:m(v,{sx:{position:"relative",display:"flex"},children:[n(v,{component:"img",src:te,className:`grad-${l.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}}),n(Ce,{color:"primary",onClick:()=>x&&i.weapons.set(x,{lock:!h}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:h?n(bt,{}):n(vt,{})})]})}),n(w,{item:!0,xs:6,sm:12,children:n(I,{children:n("small",{children:l.description})})})]})}),m(w,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[m(v,{display:"flex",gap:1,flexWrap:"wrap",children:[m(ce,{children:[n(Y,{color:"info",onClick:ee,children:(l==null?void 0:l.name)??"Select a Weapon"}),(l==null?void 0:l.hasRefinement)&&n(on,{refinement:o,setRefinement:g=>k({refinement:g})}),a]}),s&&n(Ce,{onClick:s,sx:{marginLeft:"auto"},children:n(Ct,{})})]}),n(v,{display:"flex",gap:1,flexWrap:"wrap",children:l&&n(qt,{level:u,ascension:p,setBoth:k,useLow:!l.hasRefinement})}),n(Dt,{stars:l.rarity}),n(I,{variant:"subtitle1",children:n("strong",{children:l.passiveName})}),n(I,{gutterBottom:!0,children:l.passiveName&&l.passiveDescription(B.get(_.weapon.refinement).value-1)}),m(v,{display:"flex",flexDirection:"column",gap:1,children:[m(lt,{children:[n(At,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),n(Q,{}),n(Ve,{children:[_.weapon.main,_.weapon.sub,_.weapon.sub2].map(g=>{const L=B.get(g);return L.isEmpty||!L.value?null:n(ie,{node:L,component:Be},JSON.stringify(L.info))})})]}),d&&l.document&&n(tn,{sections:l.document})]})]})]})}),t&&x&&n(oe,{sx:{py:1},children:n(w,{container:!0,spacing:1,children:n(w,{item:!0,flexGrow:1,children:n(It,{location:y,setLocation:j,filter:X,autoCompleteProps:{getOptionDisabled:g=>!g.key}})})})})]})})}const Ln=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"}));export{zt as A,Qt as C,tn as D,Fe as F,Be as L,Jt as N,on as R,ln as W,ie as a,Ve as b,qt as c,kn as d,Ln as e};
