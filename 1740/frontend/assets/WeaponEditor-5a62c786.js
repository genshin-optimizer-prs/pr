import{at as Le,as as we,au as Q,av as b,e as m,aw as De,ax as ie,dy as U,j as A,ay as z,az as Re,aZ as E,dO as We,cm as Ue,d8 as ze,aR as He,df as be,aV as Je,Q as Ae,p as n,u as de,n as f,K as v,br as ge,bB as oe,am as re,T as I,U as qe,ba as Qe,D as Y,cb as Ye,dP as L,dQ as Ze,dR as Xe,b_ as ve,B as V,dS as Me,dT as Ke,dU as et,a2 as tt,dV as nt,dW as st,a1 as at,a0 as ot,dX as Z,b as X,b7 as O,cJ as $,dY as T,bu as Pe,bt as Oe,C as le,aA as $e,dZ as it,J as S,t as rt,s as lt,V as ct,R as dt,_ as ut}from"./index-449a749e.js";import{E as Ie,n as pt,T as mt,x as ft,v as ht,w as xt,u as W}from"./index-db61b5fa.js";import{u as Ct}from"./useWeapon-5ae35ab4.js";import{L as yt,a as bt,b as gt}from"./ConditionalWrapper-89093486.js";import{C as vt}from"./CloseButton-f6b3be9b.js";import{D as g}from"./DataContext-d3448aea.js";import{d as It,a as St}from"./InfoTooltip-a5bf23e3.js";import{C as H,B as ue}from"./ColoredText-2232eec4.js";import{S as J}from"./SqBadge-2d16273a.js";import{B as kt}from"./BootstrapTooltip-d1972198.js";import{G as Lt}from"./Groups-4a6fb4ee.js";import{M as q,D as pe}from"./DropdownButton-871fe825.js";import{e as wt}from"./StarDisplay-74316670.js";import{g as Dt}from"./index-cdf6174a.js";import{C as Rt}from"./CardHeader-41a3a997.js";function At(e){return we("MuiListItem",e)}const Mt=Le("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),P=Mt;function Pt(e){return we("MuiListItemSecondaryAction",e)}Le("MuiListItemSecondaryAction",["root","disableGutters"]);const Ot=["className"],$t=e=>{const{disableGutters:t,classes:s}=e;return Re({root:["root",t&&"disableGutters"]},Pt,s)},Tt=Q("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})(({ownerState:e})=>b({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Te=m.forwardRef(function(t,s){const a=De({props:t,name:"MuiListItemSecondaryAction"}),{className:d}=a,i=ie(a,Ot),c=m.useContext(U),r=b({},a,{disableGutters:c.disableGutters}),u=$t(r);return A.jsx(Tt,b({className:z(u.root,d),ownerState:r,ref:s},i))});Te.muiName="ListItemSecondaryAction";const jt=Te,Bt=["className"],Ft=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Vt=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.button&&t.button,s.hasSecondaryAction&&t.secondaryAction]},Gt=e=>{const{alignItems:t,button:s,classes:a,dense:d,disabled:i,disableGutters:c,disablePadding:r,divider:u,hasSecondaryAction:o,selected:p}=e;return Re({root:["root",d&&"dense",!c&&"gutters",!r&&"padding",u&&"divider",i&&"disabled",s&&"button",t==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction",p&&"selected"],container:["container"]},At,a)},Nt=Q("div",{name:"MuiListItem",slot:"Root",overridesResolver:Vt})(({theme:e,ownerState:t})=>b({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&b({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${We.root}`]:{paddingRight:48}},{[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:E(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:E(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:E(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:E(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),_t=Q("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Et=m.forwardRef(function(t,s){const a=De({props:t,name:"MuiListItem"}),{alignItems:d="center",autoFocus:i=!1,button:c=!1,children:r,className:u,component:o,components:p={},componentsProps:C={},ContainerComponent:x="li",ContainerProps:{className:h}={},dense:l=!1,disabled:k=!1,disableGutters:j=!1,disablePadding:K=!1,divider:ee=!1,focusVisibleClassName:te,secondaryAction:G,selected:ne=!1,slotProps:B={},slots:y={}}=a,w=ie(a.ContainerProps,Bt),Ee=ie(a,Ft),he=m.useContext(U),se=m.useMemo(()=>({dense:l||he.dense||!1,alignItems:d,disableGutters:j}),[d,he.dense,l,j]),ae=m.useRef(null);Ue(()=>{i&&ae.current&&ae.current.focus()},[i]);const M=m.Children.toArray(r),xe=M.length&&ze(M[M.length-1],["ListItemSecondaryAction"]),N=b({},a,{alignItems:d,autoFocus:i,button:c,dense:se.dense,disabled:k,disableGutters:j,disablePadding:K,divider:ee,hasSecondaryAction:xe,selected:ne}),Ce=Gt(N),ye=He(ae,s),_=y.root||p.Root||Nt,F=B.root||C.root||{},D=b({className:z(Ce.root,F.className,u),disabled:k},Ee);let R=o||"li";return c&&(D.component=o||"div",D.focusVisibleClassName=z(P.focusVisible,te),R=Je),xe?(R=!D.component&&!o?"div":R,x==="li"&&(R==="li"?R="div":D.component==="li"&&(D.component="div")),A.jsx(U.Provider,{value:se,children:A.jsxs(_t,b({as:x,className:z(Ce.container,h),ref:ye,ownerState:N},w,{children:[A.jsx(_,b({},F,!be(_)&&{as:R,ownerState:b({},N,F.ownerState)},D,{children:M})),M.pop()]}))})):A.jsx(U.Provider,{value:se,children:A.jsxs(_,b({},F,{as:R,ref:ye},!be(_)&&{ownerState:b({},N,F.ownerState)},D,{children:[M,G&&A.jsx(jt,{children:G})]}))})}),je=Et,Be=m.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function Sn({children:e}){const[t,s,a]=Ae(),[[d,i],c]=m.useState([void 0,void 0]),r=m.useCallback((u,o)=>{u&&o?s():a(),c([u,o])},[s,a]);return n(Be.Provider,{value:{setFormulaData:r,data:d,node:i,modalOpen:t,onModalOpen:s,onModalClose:a},children:e})}const Se={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},ke={mx:.25,px:.25};function Wt({reaction:e,trigger:t}){const{t:s}=de("sheet_gen");t||(t=Object.keys(Se[e])[0]);const a=Se[e][t];return a?f(v,{display:"flex",alignItems:"center",children:[n(H,{color:"melt",children:s(`reaction.${e}`)}),n(J,{sx:ke,color:a,children:n(Ie,{ele:a,iconProps:ge})}),"+",n(J,{sx:ke,color:t,children:n(Ie,{ele:t,iconProps:ge})})]}):null}function Fe({fields:e,bgt:t="normal"}){return n(Ve,{sx:{m:0},bgt:t,children:e.map((s,a)=>n(Ut,{field:s,component:je},a))})}function Ut({field:e,component:t}){const{data:s,oldData:a}=m.useContext(g);if(!m.useMemo(()=>{var i;return((i=e==null?void 0:e.canShow)==null?void 0:i.call(e,s))??!0},[e,s]))return null;if("node"in e){const i=s.get(e.node);if(i.isEmpty)return null;if(a){const c=a.get(e.node),r=c.isEmpty?0:c.value;return n(ce,{node:i,oldValue:r,component:t})}else return n(ce,{node:i,component:t})}return n(zt,{field:e,component:t})}function zt({field:e,component:t}){var r;const{data:s}=m.useContext(g),a=L(e.value,s),d=L(e.variant,s),i=e.text&&n("span",{children:e.text}),c=e.textSuffix&&f("span",{children:[" ",e.textSuffix]});return f(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:t,children:[f(I,{color:`${d}.main`,children:[i,c]}),f(I,{children:[typeof a=="number"?(r=a.toFixed)==null?void 0:r.call(a,e.fixed):a,e.unit]})]})}function ce({node:e,oldValue:t,component:s,emphasize:a}){const{data:d}=m.useContext(g),{setFormulaData:i}=m.useContext(Be),c=m.useCallback(()=>i(d,e),[i,d,e]);if(e.isEmpty)return null;const{multi:r}=e.info,u=r&&f("span",{children:[r,"×"]});let o=!1;if(t!==void 0){const p=e.value-t,C=oe(Math.abs(p/t),"%",e.info.fixed);o=f(re,{children:[n("span",{children:oe(t,e.info.unit,e.info.fixed)}),Math.abs(p)>1e-4&&f(re,{children:[f(H,{color:p>0?"success":"error",children:[p>0?"+":"",oe(p,e.info.unit,e.info.fixed)]}),e.info.unit!=="%"&&t!==0&&f(H,{color:p>0?"success":"error",children:["(",C,")"]})]})]})}else o=n("span",{children:pt(e)});return f(v,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:a?"0px 0px 0px 2px red inset":void 0},component:s,children:[n(Ht,{node:e}),f(I,{sx:{display:"flex",gap:.5,alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap"},children:[u,o]}),!!e.formula&&n(kt,{placement:"top",title:n(I,{children:f(m.Suspense,{fallback:n(qe,{variant:"rectangular",width:300,height:30}),children:[Qe.includes(e.info.variant)&&f(v,{sx:{display:"inline-flex",gap:1,mr:1},children:[n(v,{children:n(Wt,{reaction:e.info.variant,trigger:e.info.subVariant})}),n(Y,{orientation:"vertical",flexItem:!0})]}),n("span",{children:e.formula})]})}),children:n(It,{onClick:c,fontSize:"inherit",sx:{cursor:"help"}})})]})}function Ht({node:e}){const{textSuffix:t}=e.info,s=t&&f("span",{children:[" ",t]});return f(I,{component:"div",sx:{display:"flex",gap:1,alignItems:"center",marginRight:"auto"},children:[!!e.info.isTeamBuff&&n(Lt,{}),e.info.icon,f(H,{color:e.info.variant,children:[e.info.name,s]})]})}const Ve=Q(Ye)(({theme:e,bgt:t="normal"})=>{const s=t==="light"?"contentLight":t==="dark"?"contentDark":"contentNormal";return{borderRadius:e.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:e.palette[s].main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:e.palette[s].dark}}});function Jt({level:e,ascension:t,setBoth:s,useLow:a=!1,disabled:d=!1}){const{t:i}=de("ui"),c=a?et:ve,r=m.useCallback((o=1)=>{o=tt(o,1,a?nt:st);const p=c.findIndex(C=>o<=C);s({level:o,ascension:p})},[s,c,a]),u=m.useCallback(()=>{const o=c.findIndex(p=>e!==90&&e===p);s(t===o?{ascension:t+1}:{ascension:o})},[s,c,t,e]);return f(ue,{sx:{bgcolor:o=>o.palette.contentNormal.main},children:[n(ot,{children:n(at,{onChange:r,value:e,startAdornment:"Lv. ",disabled:d,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),n(V,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(a?Ze:Xe)(e)||d,onClick:u,children:f("strong",{children:["/ ",ve[t]]})}),n(pe,{title:i("selectlevel"),sx:{flexGrow:1},disabled:d,children:[...a?Me:Ke].map(([o,p])=>{const C=o===e&&p===t;return n(q,{selected:C,disabled:C,onClick:()=>s({level:o,ascension:p}),children:o===c[p]?`Lv. ${o}`:`Lv. ${o}/${c[p]}`},`${o}/${p}`)})})]})}function qt({avatar:e,title:t,action:s}){return f(v,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,n(I,{variant:"subtitle1",sx:{flexGrow:1},children:t}),s&&n(I,{variant:"caption",children:s})]})}const me=m.createContext({teamChar:{},team:{}});function Qt({conditional:e,disabled:t=!1}){const{data:s}=m.useContext(g);return Object.keys(Z(e.states,s)).length===1&&"path"in e?n(Yt,{conditional:e,disabled:t}):"path"in e?n(Zt,{conditional:e,disabled:t}):n(Xt,{conditional:e,disabled:t})}function Yt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(me),{data:d}=m.useContext(g),i=X(),c=m.useCallback(x=>{e.path[0]==="resonance"?i.teams.set(s,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l}):i.teamChars.set(a,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l})},[i,e.path,a,s]),r=d.get(e.value).value,[u,o]=Object.entries(Z(e.states,d))[0],p=Ne(o.name),C=fe(e.name);return f(V,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r?"success":"primary",onClick:()=>c(r?void 0:u),disabled:t,startIcon:r?n(Pe,{}):n(Oe,{}),children:[C," ",p]})}function Zt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(me),{data:d}=m.useContext(g),i=X(),c=m.useCallback(x=>{e.path[0]==="resonance"?i.teams.set(s,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l}):i.teamChars.set(a,h=>{const l=O(h.conditional);x?$(l,e.path,x):T(l,e.path),h.conditional=l})},[i,e.path,a,s]),r=d.get(e.value).value,u=Z(e.states,d),o=r?u[r]:void 0,p=o?Ne(o.name):n(J,{color:"secondary",children:"Not Active"}),C=fe(e.name);return f(pe,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r&&o?"success":"primary",title:f("span",{children:[C," ",p]}),disabled:t,children:[n(q,{onClick:()=>c(),selected:!o,disabled:!o,children:n("span",{children:"Not Active"})}),n(Y,{}),Object.entries(u).map(([x,h])=>n(q,{onClick:()=>c(x),selected:r===x,disabled:r===x,children:h.name},x))]})}function Xt({conditional:e,disabled:t}){const{teamId:s,teamCharId:a}=m.useContext(me),{data:d}=m.useContext(g),i=X(),c=m.useCallback((r,u)=>{r[0]==="resonance"?i.teamChars.set(s,o=>{const p=O(o.conditional);u?$(p,r,u):T(p,r),o.conditional=p}):i.teamChars.set(a,o=>{const p=O(o.conditional);u?$(p,r,u):T(p,r),o.conditional=p})},[i,a,s]);return n(ue,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(Z(e.states,d)).map(([r,u])=>{const o=d.get(u.value).value,p=o===r;return n(V,{color:p?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>c(u.path,o?void 0:r),size:"small",startIcon:p?n(Pe,{}):n(Oe,{}),sx:{borderRadius:0},children:fe(u.name)},r)})})}function Ge(e){return typeof e!="string"}function Ne(e){if(!e)return"";let t="primary",s=e;return e&&Ge(e)&&e.props.color&&(t=e.props.color,s=n("span",{children:e.props.children})),n(J,{sx:{ml:.5},color:t,children:s})}function fe(e){if(Ge(e)){const t=e.props.key18,s=e.props.ns,a=e.props.values;return n(mt,{ns:s,key18:t,values:a,useBadge:!0})}return e}function Kt({conditional:e,hideHeader:t=!1,hideDesc:s=!1,disabled:a=!1,bgt:d="normal"}){var r;const{data:i}=m.useContext(g);let c;if("path"in e){const u=i.get(e.value).value,o=L(e.states,i);c=u&&((r=o[u])==null?void 0:r.fields)}else{const u=L(e.states,i);c=Object.values(u).flatMap(o=>i.get(o.value).value?o.fields:[])}return f($e,{bgt:d,children:[!L(t,e)&&n(_e,{header:e.header,hideDesc:s}),n(le,{sx:{p:0,"&:last-child":{pb:0}},children:n(Qt,{conditional:e,disabled:a})}),c&&n(Fe,{bgt:d,fields:c})]})}function en({sections:e,teamBuffOnly:t,hideDesc:s=!1,hideHeader:a=!1,disabled:d=!1,bgt:i="normal"}){const{data:c}=m.useContext(g);if(!e.length)return null;const r=e.map((u,o)=>u.canShow&&!c.get(u.canShow).value||t&&!u.teamBuff?null:n(tn,{section:u,hideDesc:s,hideHeader:a,disabled:d,bgt:i},o)).filter(u=>u);return r.length?n(v,{display:"flex",flexDirection:"column",gap:1,children:r}):null}function tn({section:e,hideDesc:t=!1,hideHeader:s=!1,disabled:a=!1,bgt:d="normal"}){return"fields"in e?n(nn,{section:e,hideDesc:t,hideHeader:s,bgt:d}):"states"in e?n(Kt,{conditional:e,hideDesc:t,hideHeader:s,disabled:a,bgt:d}):n(sn,{section:e})}function nn({section:e,hideDesc:t,hideHeader:s,bgt:a="normal"}){return f($e,{bgt:a,children:[!L(s,e)&&e.header&&n(_e,{header:e.header,hideDesc:t,hideDivider:e.fields.length===0}),n(Fe,{bgt:a,fields:e.fields})]})}function sn({section:e}){const{data:t}=m.useContext(g);return n("div",{children:L(e.text,t)})}function _e({header:e,hideDesc:t,hideDivider:s}){const{data:a}=m.useContext(g),{icon:d,title:i,action:c}=e,r=L(d,a),u=!t&&L(e.description,a);return f(re,{children:[n(qt,{avatar:r,title:t?i:f("span",{children:[i,n(St,{title:n(I,{children:u})})]}),action:c}),!s&&n(Y,{})]})}function an({refinement:e,setRefinement:t,disabled:s=!1}){const{t:a}=de("ui");return n(pe,{title:a("refinement",{value:e}),disabled:s,children:it.map(d=>n(q,{onClick:()=>t(d),selected:e===d,disabled:e===d,children:a("refinement",{value:d})},d))})}const on=dt.lazy(()=>ut(()=>import("./WeaponSelectionModal-f99ef24e.js"),["./WeaponSelectionModal-f99ef24e.js","./index-449a749e.js","./index-53dcc3b7.css","./index-db61b5fa.js","./ColoredText-2232eec4.js","./SqBadge-2d16273a.js","./index-cdf6174a.js","./totalUtils-eb9f633f.js","./CloseButton-f6b3be9b.js","./StarDisplay-74316670.js","./DropdownButton-871fe825.js","./WeaponCard-83a70597.js","./SolidToggleButtonGroup-8d112b26.js","./useWeapon-5ae35ab4.js","./ConditionalWrapper-89093486.js","./CardActionArea-5c0c14b5.js"],import.meta.url));function rn({weaponId:e,footer:t=!1,onClose:s,extraButtons:a}){const{data:d}=m.useContext(g),i=X(),c=Ct(e),{key:r="",level:u=0,refinement:o=1,ascension:p=0,lock:C,location:x="",id:h}=c??{},l=r?Dt(r):void 0,k=m.useCallback(y=>{i.weapons.set(e,y)},[e,i]),j=m.useCallback(y=>h&&i.weapons.set(h,{location:y}),[i,h]),K=m.useCallback(y=>y.weaponTypeKey===(l==null?void 0:l.weaponType),[l]),[ee,te,G]=Ae(),ne=r?ft(r,p>=2):"";m.useEffect(()=>{if(!(!l||!k||l.key!==(c==null?void 0:c.key))&&l.rarity<=2&&(u>70||p>4)){const[y,w]=Me[0];k({level:y,ascension:w})}},[l,c,k,u,p]);const B=m.useMemo(()=>l&&c&&ht([l.data,xt(c)]),[l,c]);return n(ct,{open:!!e,onClose:s,containerProps:{maxWidth:"md"},children:f(lt,{children:[n(on,{ascension:p,show:ee,onHide:G,onSelect:y=>k({key:y}),weaponTypeFilter:l&&l.weaponType}),n(le,{children:l&&B&&f(S,{container:!0,spacing:1.5,children:[n(S,{item:!0,xs:12,sm:3,children:f(S,{container:!0,spacing:1.5,children:[n(S,{item:!0,xs:6,sm:12,children:n(v,{component:"img",src:ne,className:`grad-${l.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),n(S,{item:!0,xs:6,sm:12,children:n(I,{children:n("small",{children:l.description})})})]})}),f(S,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[n(v,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:f(ue,{children:[n(V,{color:"info",onClick:te,children:(l==null?void 0:l.name)??"Select a Weapon"}),(l==null?void 0:l.hasRefinement)&&n(an,{refinement:o,setRefinement:y=>k({refinement:y})}),a]})}),f(v,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[l&&n(Jt,{level:u,ascension:p,setBoth:k,useLow:!l.hasRefinement}),n(V,{color:"error",onClick:()=>h&&i.weapons.set(h,{lock:!C}),startIcon:C?n(yt,{}):n(bt,{}),children:C?"Locked":"Unlocked"})]}),n(wt,{stars:l.rarity}),n(I,{variant:"subtitle1",children:n("strong",{children:l.passiveName})}),n(I,{gutterBottom:!0,children:l.passiveName&&l.passiveDescription(B.get(W.weapon.refinement).value-1)}),f(v,{display:"flex",flexDirection:"column",gap:1,children:[f(rt,{children:[n(Rt,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),n(Y,{}),n(Ve,{children:[W.weapon.main,W.weapon.sub,W.weapon.sub2].map(y=>{const w=B.get(y);return w.isEmpty||!w.value?null:n(ce,{node:w,component:je},JSON.stringify(w.info))})})]}),d&&l.document&&n(en,{sections:l.document})]})]})]})}),t&&h&&n(le,{sx:{py:1},children:f(S,{container:!0,spacing:1,children:[n(S,{item:!0,flexGrow:1,children:n(gt,{location:x,setLocation:j,filter:K,autoCompleteProps:{getOptionDisabled:y=>!y.key}})}),n(S,{item:!0,flexGrow:2}),!!s&&n(S,{item:!0,children:n(vt,{sx:{height:"100%"},large:!0,onClick:s})})]})})]})})}const kn=Object.freeze(Object.defineProperty({__proto__:null,default:rn},Symbol.toStringTag,{value:"Module"}));export{Wt as A,qt as C,en as D,Be as F,je as L,Ht as N,an as R,me as T,rn as W,ce as a,Ve as b,Jt as c,Sn as d,kn as e};
