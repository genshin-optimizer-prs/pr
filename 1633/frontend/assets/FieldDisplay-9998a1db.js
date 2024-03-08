import{at as Z,as as tt,au as D,av as u,e as i,aw as et,ax as j,dw as R,j as b,ay as $,az as st,aU as P,dX as ft,cj as xt,d6 as yt,aM as bt,dd as W,aQ as vt,Q as gt,p as n,u as Ct,n as c,K as C,bl as q,bv as k,T as I,U as ht,bc as It,D as St,c8 as Lt,dV as K}from"./index-b8319edb.js";import{d as At,B as Pt}from"./BootstrapTooltip-2a6a7304.js";import{E as Q,n as Rt}from"./index-b3b41f18.js";import{C as w}from"./ColoredText-b21acce8.js";import{S as H}from"./SqBadge-8d1efc5c.js";import{G as $t}from"./Groups-41aab929.js";function Dt(t){return tt("MuiListItem",t)}const Mt=Z("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),g=Mt;function Ft(t){return tt("MuiListItemSecondaryAction",t)}Z("MuiListItemSecondaryAction",["root","disableGutters"]);const Nt=["className"],kt=t=>{const{disableGutters:e,classes:s}=t;return st({root:["root",e&&"disableGutters"]},Ft,s)},jt=D("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>u({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),ot=i.forwardRef(function(e,s){const o=et({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=o,a=j(o,Nt),d=i.useContext(R),r=u({},o,{disableGutters:d.disableGutters}),m=kt(r);return b.jsx(jt,u({className:$(m.root,l),ownerState:r,ref:s},a))});ot.muiName="ListItemSecondaryAction";const wt=ot,Ot=["className"],Gt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Bt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Tt=t=>{const{alignItems:e,button:s,classes:o,dense:l,disabled:a,disableGutters:d,disablePadding:r,divider:m,hasSecondaryAction:p,selected:f}=t;return st({root:["root",l&&"dense",!d&&"gutters",!r&&"padding",m&&"divider",a&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",p&&"secondaryAction",f&&"selected"],container:["container"]},Dt,o)},Et=D("div",{name:"MuiListItem",slot:"Root",overridesResolver:Bt})(({theme:t,ownerState:e})=>u({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&u({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${ft.root}`]:{paddingRight:48}},{[`&.${g.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${g.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:P(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:P(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${g.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:P(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:P(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Ut=D("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Vt=i.forwardRef(function(e,s){const o=et({props:e,name:"MuiListItem"}),{alignItems:l="center",autoFocus:a=!1,button:d=!1,children:r,className:m,component:p,components:f={},componentsProps:S={},ContainerComponent:G="li",ContainerProps:{className:at}={},dense:B=!1,disabled:T=!1,disableGutters:M=!1,disablePadding:it=!1,divider:rt=!1,focusVisibleClassName:ct,secondaryAction:E,selected:lt=!1,slotProps:dt={},slots:pt={}}=o,ut=j(o.ContainerProps,Ot),mt=j(o,Gt),U=i.useContext(R),F=i.useMemo(()=>({dense:B||U.dense||!1,alignItems:l,disableGutters:M}),[l,U.dense,B,M]),N=i.useRef(null);xt(()=>{a&&N.current&&N.current.focus()},[a]);const v=i.Children.toArray(r),V=v.length&&yt(v[v.length-1],["ListItemSecondaryAction"]),L=u({},o,{alignItems:l,autoFocus:a,button:d,dense:F.dense,disabled:T,disableGutters:M,disablePadding:it,divider:rt,hasSecondaryAction:V,selected:lt}),_=Tt(L),z=bt(N,s),A=pt.root||f.Root||Et,h=dt.root||S.root||{},x=u({className:$(_.root,h.className,m),disabled:T},mt);let y=p||"li";return d&&(x.component=p||"div",x.focusVisibleClassName=$(g.focusVisible,ct),y=vt),V?(y=!x.component&&!p?"div":y,G==="li"&&(y==="li"?y="div":x.component==="li"&&(x.component="div")),b.jsx(R.Provider,{value:F,children:b.jsxs(Ut,u({as:G,className:$(_.container,at),ref:z,ownerState:L},ut,{children:[b.jsx(A,u({},h,!W(A)&&{as:y,ownerState:u({},L,h.ownerState)},x,{children:v})),v.pop()]}))})):b.jsx(R.Provider,{value:F,children:b.jsxs(A,u({},h,{as:y,ref:z},!W(A)&&{ownerState:u({},L,h.ownerState)},x,{children:[v,E&&b.jsx(wt,{children:E})]}))})}),_t=Vt,O=i.createContext({}),nt=i.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function ee({children:t}){const[e,s,o]=gt(),[[l,a],d]=i.useState([void 0,void 0]),r=i.useCallback((m,p)=>{m&&p?s():o(),d([m,p])},[s,o]);return n(nt.Provider,{value:{setFormulaData:r,data:l,node:a,modalOpen:e,onModalOpen:s,onModalClose:o},children:t})}const X={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},Y={mx:.25,px:.25};function zt({reaction:t,trigger:e}){const{t:s}=Ct("sheet_gen");e||(e=Object.keys(X[t])[0]);const o=X[t][e];return o?c(C,{display:"flex",alignItems:"center",children:[n(w,{color:"melt",children:s(`reaction.${t}`)}),n(H,{sx:Y,color:o,children:n(Q,{ele:o,iconProps:q})}),"+",n(H,{sx:Y,color:e,children:n(Q,{ele:e,iconProps:q})})]}):null}function se({fields:t}){return n(Qt,{sx:{m:0},children:t.map((e,s)=>n(Wt,{field:e,component:_t},s))})}function Wt({field:t,component:e}){const{data:s,oldData:o}=i.useContext(O);if(!i.useMemo(()=>{var a;return((a=t==null?void 0:t.canShow)==null?void 0:a.call(t,s))??!0},[t,s]))return null;if("node"in t){const a=s.get(t.node);if(a.isEmpty)return null;if(o){const d=o.get(t.node),r=d.isEmpty?0:d.value;return n(J,{node:a,oldValue:r,component:e})}else return n(J,{node:a,component:e})}return n(qt,{field:t,component:e})}function qt({field:t,component:e}){var r;const{data:s}=i.useContext(O),o=K(t.value,s),l=K(t.variant,s),a=t.text&&n("span",{children:t.text}),d=t.textSuffix&&c("span",{children:[" ",t.textSuffix]});return c(C,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:e,children:[c(I,{color:`${l}.main`,children:[a,d]}),c(I,{children:[typeof o=="number"?(r=o.toFixed)==null?void 0:r.call(o,t.fixed):o,t.unit]})]})}function J({node:t,oldValue:e,component:s,emphasize:o}){const{data:l}=i.useContext(O),{setFormulaData:a}=i.useContext(nt),d=i.useCallback(()=>a(l,t),[a,l,t]);if(t.isEmpty)return null;const{multi:r}=t.info,m=r&&c("span",{children:[r,"×"]});let p="";if(e!==void 0){const f=t.value-e,S=k(Math.abs(f/e),"%",t.info.fixed);p=c("span",{children:[k(e,t.info.unit,t.info.fixed),f>1e-4||f<-1e-4?c(w,{color:f>0?"success":"error",children:[" ",f>0?"+":"",k(f,t.info.unit,t.info.fixed),t.info.unit!=="%"&&e!==0?` (${S})`:""]}):""]})}else p=Rt(t);return c(C,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:o?"0px 0px 0px 2px red inset":void 0},component:s,children:[n(Kt,{node:t}),c(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[c(I,{noWrap:!0,children:[m,p]}),!!t.formula&&n(Pt,{placement:"top",title:n(I,{children:c(i.Suspense,{fallback:n(ht,{variant:"rectangular",width:300,height:30}),children:[It.includes(t.info.variant)&&c(C,{sx:{display:"inline-flex",gap:1,mr:1},children:[n(C,{children:n(zt,{reaction:t.info.variant,trigger:t.info.subVariant})}),n(St,{orientation:"vertical",flexItem:!0})]}),n("span",{children:t.formula})]})}),children:n(At,{onClick:d,fontSize:"inherit",sx:{cursor:"help"}})})]})]})}function Kt({node:t}){const{textSuffix:e}=t.info,s=e&&c("span",{children:[" ",e]});return c(I,{component:"div",sx:{display:"flex",gap:1,alignItems:"center"},children:[!!t.info.isTeamBuff&&n($t,{}),t.info.icon,c(w,{color:t.info.variant,children:[t.info.name,s]})]})}const Qt=D(Lt)(({theme:t,light:e="contentNormal",dark:s="contentDark",palletOption:o="main"})=>({borderRadius:t.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:t.palette[e][o]},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:t.palette[s][o]}}));export{zt as A,O as D,nt as F,_t as L,Kt as N,J as a,Qt as b,ee as c,se as d};
