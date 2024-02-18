import{as as Z,ar as tt,at as D,au as u,e as i,av as et,aw as O,di as P,j as b,ax as R,ay as st,bu as $,dJ as ft,b2 as xt,cT as yt,aH as bt,d0 as z,aL as vt,U as gt,p as a,u as Ct,n as c,K as C,aW as H,bB as k,T as I,V as ht,a$ as It,D as St,cm as Lt,dH as q}from"./index-a5cb38d7.js";import{d as At,B as $t}from"./Help-0df75009.js";import{E as K,n as Pt}from"./index-230a9e18.js";import{C as j}from"./ColoredText-9177b7ec.js";import{S as J}from"./SqBadge-261cde6c.js";import{G as Rt}from"./Groups-78e123a7.js";function Dt(t){return tt("MuiListItem",t)}const Mt=Z("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),g=Mt;function Ft(t){return tt("MuiListItemSecondaryAction",t)}Z("MuiListItemSecondaryAction",["root","disableGutters"]);const Nt=["className"],kt=t=>{const{disableGutters:e,classes:s}=t;return st({root:["root",e&&"disableGutters"]},Ft,s)},Ot=D("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>u({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),ot=i.forwardRef(function(e,s){const o=et({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=o,n=O(o,Nt),d=i.useContext(P),r=u({},o,{disableGutters:d.disableGutters}),m=kt(r);return b.jsx(Ot,u({className:R(m.root,l),ownerState:r,ref:s},n))});ot.muiName="ListItemSecondaryAction";const jt=ot,wt=["className"],Bt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Gt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Tt=t=>{const{alignItems:e,button:s,classes:o,dense:l,disabled:n,disableGutters:d,disablePadding:r,divider:m,hasSecondaryAction:p,selected:f}=t;return st({root:["root",l&&"dense",!d&&"gutters",!r&&"padding",m&&"divider",n&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",p&&"secondaryAction",f&&"selected"],container:["container"]},Dt,o)},Et=D("div",{name:"MuiListItem",slot:"Root",overridesResolver:Gt})(({theme:t,ownerState:e})=>u({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&u({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${ft.root}`]:{paddingRight:48}},{[`&.${g.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${g.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:$(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:$(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${g.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:$(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:$(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Vt=D("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ut=i.forwardRef(function(e,s){const o=et({props:e,name:"MuiListItem"}),{alignItems:l="center",autoFocus:n=!1,button:d=!1,children:r,className:m,component:p,components:f={},componentsProps:S={},ContainerComponent:B="li",ContainerProps:{className:nt}={},dense:G=!1,disabled:T=!1,disableGutters:M=!1,disablePadding:it=!1,divider:rt=!1,focusVisibleClassName:ct,secondaryAction:E,selected:lt=!1,slotProps:dt={},slots:pt={}}=o,ut=O(o.ContainerProps,wt),mt=O(o,Bt),V=i.useContext(P),F=i.useMemo(()=>({dense:G||V.dense||!1,alignItems:l,disableGutters:M}),[l,V.dense,G,M]),N=i.useRef(null);xt(()=>{n&&N.current&&N.current.focus()},[n]);const v=i.Children.toArray(r),U=v.length&&yt(v[v.length-1],["ListItemSecondaryAction"]),L=u({},o,{alignItems:l,autoFocus:n,button:d,dense:F.dense,disabled:T,disableGutters:M,disablePadding:it,divider:rt,hasSecondaryAction:U,selected:lt}),_=Tt(L),W=bt(N,s),A=pt.root||f.Root||Et,h=dt.root||S.root||{},x=u({className:R(_.root,h.className,m),disabled:T},mt);let y=p||"li";return d&&(x.component=p||"div",x.focusVisibleClassName=R(g.focusVisible,ct),y=vt),U?(y=!x.component&&!p?"div":y,B==="li"&&(y==="li"?y="div":x.component==="li"&&(x.component="div")),b.jsx(P.Provider,{value:F,children:b.jsxs(Vt,u({as:B,className:R(_.container,nt),ref:W,ownerState:L},ut,{children:[b.jsx(A,u({},h,!z(A)&&{as:y,ownerState:u({},L,h.ownerState)},x,{children:v})),v.pop()]}))})):b.jsx(P.Provider,{value:F,children:b.jsxs(A,u({},h,{as:y,ref:W},!z(A)&&{ownerState:u({},L,h.ownerState)},x,{children:[v,E&&b.jsx(jt,{children:E})]}))})}),_t=Ut,ee=i.createContext({}),w=i.createContext({}),at=i.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function se({children:t}){const[e,s,o]=gt(),[[l,n],d]=i.useState([void 0,void 0]),r=i.useCallback((m,p)=>{m&&p?s():o(),d([m,p])},[s,o]);return a(at.Provider,{value:{setFormulaData:r,data:l,node:n,modalOpen:e,onModalOpen:s,onModalClose:o},children:t})}const Y={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},Q={mx:.25,px:.25};function Wt({reaction:t,trigger:e}){const{t:s}=Ct("sheet_gen");e||(e=Object.keys(Y[t])[0]);const o=Y[t][e];return o?c(C,{display:"flex",alignItems:"center",children:[a(j,{color:"melt",children:s(`reaction.${t}`)}),a(J,{sx:Q,color:o,children:a(K,{ele:o,iconProps:H})}),"+",a(J,{sx:Q,color:e,children:a(K,{ele:e,iconProps:H})})]}):null}function oe({fields:t}){return a(Kt,{sx:{m:0},children:t.map((e,s)=>a(zt,{field:e,component:_t},s))})}function zt({field:t,component:e}){const{data:s,oldData:o}=i.useContext(w);if(!i.useMemo(()=>{var n;return((n=t==null?void 0:t.canShow)==null?void 0:n.call(t,s))??!0},[t,s]))return null;if("node"in t){const n=s.get(t.node);if(n.isEmpty)return null;if(o){const d=o.get(t.node),r=d.isEmpty?0:d.value;return a(X,{node:n,oldValue:r,component:e})}else return a(X,{node:n,component:e})}return a(Ht,{field:t,component:e})}function Ht({field:t,component:e}){var r;const{data:s}=i.useContext(w),o=q(t.value,s),l=q(t.variant,s),n=t.text&&a("span",{children:t.text}),d=t.textSuffix&&c("span",{children:[" ",t.textSuffix]});return c(C,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:e,children:[c(I,{color:`${l}.main`,children:[n,d]}),c(I,{children:[typeof o=="number"?(r=o.toFixed)==null?void 0:r.call(o,t.fixed):o,t.unit]})]})}function X({node:t,oldValue:e,component:s,emphasize:o}){const{data:l}=i.useContext(w),{setFormulaData:n}=i.useContext(at),d=i.useCallback(()=>n(l,t),[n,l,t]);if(t.isEmpty)return null;const{multi:r}=t.info,m=r&&c("span",{children:[r,"×"]});let p="";if(e!==void 0){const f=t.value-e,S=k(Math.abs(f/e),"%",t.info.fixed);p=c("span",{children:[k(e,t.info.unit,t.info.fixed),f>1e-4||f<-1e-4?c(j,{color:f>0?"success":"error",children:[" ",f>0?"+":"",k(f,t.info.unit,t.info.fixed),t.info.unit!=="%"&&e!==0?` (${S})`:""]}):""]})}else p=Pt(t);return c(C,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:o?"0px 0px 0px 2px red inset":void 0},component:s,children:[a(qt,{node:t}),c(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[c(I,{noWrap:!0,children:[m,p]}),!!t.formula&&a($t,{placement:"top",title:a(I,{children:c(i.Suspense,{fallback:a(ht,{variant:"rectangular",width:300,height:30}),children:[It.includes(t.info.variant)&&c(C,{sx:{display:"inline-flex",gap:1,mr:1},children:[a(C,{children:a(Wt,{reaction:t.info.variant,trigger:t.info.subVariant})}),a(St,{orientation:"vertical",flexItem:!0})]}),a("span",{children:t.formula})]})}),children:a(At,{onClick:d,fontSize:"inherit",sx:{cursor:"help"}})})]})]})}function qt({node:t}){const{textSuffix:e}=t.info,s=e&&c("span",{children:[" ",e]});return c(I,{component:"div",sx:{display:"flex",gap:1,alignItems:"center"},children:[!!t.info.isTeamBuff&&a(Rt,{}),t.info.icon,c(j,{color:t.info.variant,children:[t.info.name,s]})]})}const Kt=D(Lt)(({theme:t,light:e="contentNormal",dark:s="contentDark",palletOption:o="main"})=>({borderRadius:t.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:t.palette[e][o]},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:t.palette[s][o]}}));export{Wt as A,Ht as B,ee as C,w as D,at as F,_t as L,qt as N,X as a,Kt as b,se as c,oe as d};
