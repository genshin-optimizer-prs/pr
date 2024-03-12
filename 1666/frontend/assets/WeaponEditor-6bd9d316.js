import{at as ke,as as Le,au as z,av as b,e as u,aw as we,ax as ne,dz as V,j as A,ay as W,az as De,aY as G,dO as We,cn as _e,d9 as Ue,aQ as ze,dg as ye,aU as He,Q as Re,p as n,u as oe,n as p,K as g,br as be,bH as te,T as S,U as Qe,ba as Ye,D as H,cc as qe,dP as L,dQ as Je,dR as Ke,b$ as ge,B as j,dS as Ae,dT as Xe,dU as Ze,a2 as et,dV as tt,dW as nt,a1 as st,a0 as at,dX as Q,b as Y,b7 as ie,cK as re,dY as le,bu as Me,bt as Pe,C as se,aA as $e,am as ot,dZ as it,J as I,t as rt,s as lt,V as ct,R as dt,_ as ut}from"./index-06471696.js";import{E as ve,n as pt,T as mt,x as ft,v as xt,w as ht,u as E}from"./index-08a7485a.js";import{u as Ct}from"./useWeapon-ba3439f2.js";import{L as yt,a as bt,b as gt}from"./ConditionalWrapper-383f977a.js";import{C as vt}from"./CloseButton-6e1366f9.js";import{D as v}from"./DataContext-dfc0dc36.js";import{d as St,a as It}from"./InfoTooltip-f0f733f6.js";import{C as ce,B as de}from"./ColoredText-8bb1167f.js";import{S as _}from"./SqBadge-b8df07d3.js";import{B as kt}from"./BootstrapTooltip-170e3fbd.js";import{G as Lt}from"./Groups-567d826c.js";import{M as U,D as ue}from"./DropdownButton-91fdcb3a.js";import{e as wt}from"./StarDisplay-6b417622.js";import{g as Dt}from"./index-816b0264.js";import{C as Rt}from"./CardHeader-78f59f01.js";function At(e){return Le("MuiListItem",e)}const Mt=ke("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),P=Mt;function Pt(e){return Le("MuiListItemSecondaryAction",e)}ke("MuiListItemSecondaryAction",["root","disableGutters"]);const $t=["className"],Ot=e=>{const{disableGutters:t,classes:s}=e;return De({root:["root",t&&"disableGutters"]},Pt,s)},Tt=z("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})(({ownerState:e})=>b({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Oe=u.forwardRef(function(t,s){const a=we({props:t,name:"MuiListItemSecondaryAction"}),{className:r}=a,l=ne(a,$t),o=u.useContext(V),d=b({},a,{disableGutters:o.disableGutters}),c=Ot(d);return A.jsx(Tt,b({className:W(c.root,r),ownerState:d,ref:s},l))});Oe.muiName="ListItemSecondaryAction";const jt=Oe,Ft=["className"],Bt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Nt=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.button&&t.button,s.hasSecondaryAction&&t.secondaryAction]},Gt=e=>{const{alignItems:t,button:s,classes:a,dense:r,disabled:l,disableGutters:o,disablePadding:d,divider:c,hasSecondaryAction:i,selected:f}=e;return De({root:["root",r&&"dense",!o&&"gutters",!d&&"padding",c&&"divider",l&&"disabled",s&&"button",t==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction",f&&"selected"],container:["container"]},At,a)},Et=z("div",{name:"MuiListItem",slot:"Root",overridesResolver:Nt})(({theme:e,ownerState:t})=>b({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&b({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${We.root}`]:{paddingRight:48}},{[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:G(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:G(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:G(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:G(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Vt=z("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Wt=u.forwardRef(function(t,s){const a=we({props:t,name:"MuiListItem"}),{alignItems:r="center",autoFocus:l=!1,button:o=!1,children:d,className:c,component:i,components:f={},componentsProps:x={},ContainerComponent:y="li",ContainerProps:{className:C}={},dense:m=!1,disabled:k=!1,disableGutters:$=!1,disablePadding:q=!1,divider:J=!1,focusVisibleClassName:K,secondaryAction:F,selected:X=!1,slotProps:O={},slots:h={}}=a,w=ne(a.ContainerProps,Ft),Ve=ne(a,Bt),fe=u.useContext(V),Z=u.useMemo(()=>({dense:m||fe.dense||!1,alignItems:r,disableGutters:$}),[r,fe.dense,m,$]),ee=u.useRef(null);_e(()=>{l&&ee.current&&ee.current.focus()},[l]);const M=u.Children.toArray(d),xe=M.length&&Ue(M[M.length-1],["ListItemSecondaryAction"]),B=b({},a,{alignItems:r,autoFocus:l,button:o,dense:Z.dense,disabled:k,disableGutters:$,disablePadding:q,divider:J,hasSecondaryAction:xe,selected:X}),he=Gt(B),Ce=ze(ee,s),N=h.root||f.Root||Et,T=O.root||x.root||{},D=b({className:W(he.root,T.className,c),disabled:k},Ve);let R=i||"li";return o&&(D.component=i||"div",D.focusVisibleClassName=W(P.focusVisible,K),R=He),xe?(R=!D.component&&!i?"div":R,y==="li"&&(R==="li"?R="div":D.component==="li"&&(D.component="div")),A.jsx(V.Provider,{value:Z,children:A.jsxs(Vt,b({as:y,className:W(he.container,C),ref:Ce,ownerState:B},w,{children:[A.jsx(N,b({},T,!ye(N)&&{as:R,ownerState:b({},B,T.ownerState)},D,{children:M})),M.pop()]}))})):A.jsx(V.Provider,{value:Z,children:A.jsxs(N,b({},T,{as:R,ref:Ce},!ye(N)&&{ownerState:b({},B,T.ownerState)},D,{children:[M,F&&A.jsx(jt,{children:F})]}))})}),Te=Wt,je=u.createContext({setFormulaData:()=>{},onModalOpen:()=>{},onModalClose:()=>{}});function In({children:e}){const[t,s,a]=Re(),[[r,l],o]=u.useState([void 0,void 0]),d=u.useCallback((c,i)=>{c&&i?s():a(),o([c,i])},[s,a]);return n(je.Provider,{value:{setFormulaData:d,data:r,node:l,modalOpen:t,onModalOpen:s,onModalClose:a},children:e})}const Se={melt:{cryo:"pyro",pyro:"cryo"},vaporize:{hydro:"pyro",pyro:"hydro"}},Ie={mx:.25,px:.25};function _t({reaction:e,trigger:t}){const{t:s}=oe("sheet_gen");t||(t=Object.keys(Se[e])[0]);const a=Se[e][t];return a?p(g,{display:"flex",alignItems:"center",children:[n(ce,{color:"melt",children:s(`reaction.${e}`)}),n(_,{sx:Ie,color:a,children:n(ve,{ele:a,iconProps:be})}),"+",n(_,{sx:Ie,color:t,children:n(ve,{ele:t,iconProps:be})})]}):null}function Fe({fields:e,bgt:t="normal"}){return n(Be,{sx:{m:0},bgt:t,children:e.map((s,a)=>n(Ut,{field:s,component:Te},a))})}function Ut({field:e,component:t}){const{data:s,oldData:a}=u.useContext(v);if(!u.useMemo(()=>{var l;return((l=e==null?void 0:e.canShow)==null?void 0:l.call(e,s))??!0},[e,s]))return null;if("node"in e){const l=s.get(e.node);if(l.isEmpty)return null;if(a){const o=a.get(e.node),d=o.isEmpty?0:o.value;return n(ae,{node:l,oldValue:d,component:t})}else return n(ae,{node:l,component:t})}return n(zt,{field:e,component:t})}function zt({field:e,component:t}){var d;const{data:s}=u.useContext(v),a=L(e.value,s),r=L(e.variant,s),l=e.text&&n("span",{children:e.text}),o=e.textSuffix&&p("span",{children:[" ",e.textSuffix]});return p(g,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1},component:t,children:[p(S,{color:`${r}.main`,children:[l,o]}),p(S,{children:[typeof a=="number"?(d=a.toFixed)==null?void 0:d.call(a,e.fixed):a,e.unit]})]})}function ae({node:e,oldValue:t,component:s,emphasize:a}){const{data:r}=u.useContext(v),{setFormulaData:l}=u.useContext(je),o=u.useCallback(()=>l(r,e),[l,r,e]);if(e.isEmpty)return null;const{multi:d}=e.info,c=d&&p("span",{children:[d,"×"]});let i="";if(t!==void 0){const f=e.value-t,x=te(Math.abs(f/t),"%",e.info.fixed);i=p("span",{children:[te(t,e.info.unit,e.info.fixed),f>1e-4||f<-1e-4?p(ce,{color:f>0?"success":"error",children:[" ",f>0?"+":"",te(f,e.info.unit,e.info.fixed),e.info.unit!=="%"&&t!==0?` (${x})`:""]}):""]})}else i=pt(e);return p(g,{width:"100%",sx:{display:"flex",justifyContent:"space-between",gap:1,boxShadow:a?"0px 0px 0px 2px red inset":void 0},component:s,children:[n(Ht,{node:e}),p(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[p(S,{noWrap:!0,children:[c,i]}),!!e.formula&&n(kt,{placement:"top",title:n(S,{children:p(u.Suspense,{fallback:n(Qe,{variant:"rectangular",width:300,height:30}),children:[Ye.includes(e.info.variant)&&p(g,{sx:{display:"inline-flex",gap:1,mr:1},children:[n(g,{children:n(_t,{reaction:e.info.variant,trigger:e.info.subVariant})}),n(H,{orientation:"vertical",flexItem:!0})]}),n("span",{children:e.formula})]})}),children:n(St,{onClick:o,fontSize:"inherit",sx:{cursor:"help"}})})]})]})}function Ht({node:e}){const{textSuffix:t}=e.info,s=t&&p("span",{children:[" ",t]});return p(S,{component:"div",sx:{display:"flex",gap:1,alignItems:"center"},children:[!!e.info.isTeamBuff&&n(Lt,{}),e.info.icon,p(ce,{color:e.info.variant,children:[e.info.name,s]})]})}const Be=z(qe)(({theme:e,bgt:t="normal"})=>{const s=t==="light"?"contentLight":t==="dark"?"contentDark":"contentNormal";return{borderRadius:e.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:e.palette[s].main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:e.palette[s].dark}}});function Qt({level:e,ascension:t,setBoth:s,useLow:a=!1,disabled:r=!1}){const{t:l}=oe("ui"),o=a?Ze:ge,d=u.useCallback((i=1)=>{i=et(i,1,a?tt:nt);const f=o.findIndex(x=>i<=x);s({level:i,ascension:f})},[s,o,a]),c=u.useCallback(()=>{const i=o.findIndex(f=>e!==90&&e===f);s(t===i?{ascension:t+1}:{ascension:i})},[s,o,t,e]);return p(de,{sx:{bgcolor:i=>i.palette.contentNormal.main},children:[n(at,{children:n(st,{onChange:d,value:e,startAdornment:"Lv. ",disabled:r,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),n(j,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(a?Je:Ke)(e)||r,onClick:c,children:p("strong",{children:["/ ",ge[t]]})}),n(ue,{title:l("selectlevel"),sx:{flexGrow:1},disabled:r,children:[...a?Ae:Xe].map(([i,f])=>{const x=i===e&&f===t;return n(U,{selected:x,disabled:x,onClick:()=>s({level:i,ascension:f}),children:i===o[f]?`Lv. ${i}`:`Lv. ${i}/${o[f]}`},`${i}/${f}`)})})]})}function Yt({avatar:e,title:t,action:s}){return p(g,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,n(S,{variant:"subtitle1",sx:{flexGrow:1},children:t}),s&&n(S,{variant:"caption",children:s})]})}const pe=u.createContext({teamChar:{},team:{}});function qt({conditional:e,disabled:t=!1}){const{data:s}=u.useContext(v);return Object.keys(Q(e.states,s)).length===1&&"path"in e?n(Jt,{conditional:e,disabled:t}):"path"in e?n(Kt,{conditional:e,disabled:t}):n(Xt,{conditional:e,disabled:t})}function Jt({conditional:e,disabled:t}){const{teamCharId:s}=u.useContext(pe),{data:a}=u.useContext(v),r=Y(),l=u.useCallback(x=>{r.teamChars.set(s,y=>{const C=ie(y.conditional);x?re(C,e.path,x):le(C,e.path),y.conditional=C})},[r,e.path,s]),o=a.get(e.value).value,[d,c]=Object.entries(Q(e.states,a))[0],i=Ge(c.name),f=me(e.name);return p(j,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:o?"success":"primary",onClick:()=>l(o?void 0:d),disabled:t,startIcon:o?n(Me,{}):n(Pe,{}),children:[f," ",i]})}function Kt({conditional:e,disabled:t}){const{teamCharId:s}=u.useContext(pe),{data:a}=u.useContext(v),r=Y(),l=u.useCallback(x=>{r.teamChars.set(s,y=>{const C=ie(y.conditional);x?re(C,e.path,x):le(C,e.path),y.conditional=C})},[r,e.path,s]),o=a.get(e.value).value,d=Q(e.states,a),c=o?d[o]:void 0,i=c?Ge(c.name):n(_,{color:"secondary",children:"Not Active"}),f=me(e.name);return p(ue,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:o&&c?"success":"primary",title:p("span",{children:[f," ",i]}),disabled:t,children:[n(U,{onClick:()=>l(),selected:!c,disabled:!c,children:n("span",{children:"Not Active"})}),n(H,{}),Object.entries(d).map(([x,y])=>n(U,{onClick:()=>l(x),selected:o===x,disabled:o===x,children:y.name},x))]})}function Xt({conditional:e,disabled:t}){const{teamCharId:s}=u.useContext(pe),{data:a}=u.useContext(v),r=Y(),l=u.useCallback((o,d)=>{r.teamChars.set(s,c=>{const i=ie(c.conditional);d?re(i,o,d):le(i,o),c.conditional=i})},[r,s]);return n(de,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(Q(e.states,a)).map(([o,d])=>{const c=a.get(d.value).value,i=c===o;return n(j,{color:i?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>l(d.path,c?void 0:o),size:"small",startIcon:i?n(Me,{}):n(Pe,{}),sx:{borderRadius:0},children:me(d.name)},o)})})}function Ne(e){return typeof e!="string"}function Ge(e){if(!e)return"";let t="primary",s=e;return e&&Ne(e)&&e.props.color&&(t=e.props.color,s=n("span",{children:e.props.children})),n(_,{sx:{ml:.5},color:t,children:s})}function me(e){if(Ne(e)){const t=e.props.key18,s=e.props.ns,a=e.props.values;return n(mt,{ns:s,key18:t,values:a,useBadge:!0})}return e}function Zt({conditional:e,hideHeader:t=!1,hideDesc:s=!1,disabled:a=!1,bgt:r="normal"}){var d;const{data:l}=u.useContext(v);let o;if("path"in e){const c=l.get(e.value).value,i=L(e.states,l);o=c&&((d=i[c])==null?void 0:d.fields)}else{const c=L(e.states,l);o=Object.values(c).flatMap(i=>l.get(i.value).value?i.fields:[])}return p($e,{bgt:r,className:"ConditionalCard",children:[!L(t,e)&&n(Ee,{header:e.header,hideDesc:s}),n(se,{sx:{p:0,"&:last-child":{pb:0}},children:n(qt,{conditional:e,disabled:a})}),o&&n(Fe,{bgt:r,fields:o})]})}function en({sections:e,teamBuffOnly:t,hideDesc:s=!1,hideHeader:a=!1,disabled:r=!1,bgt:l="normal"}){const{data:o}=u.useContext(v);if(!e.length)return null;const d=e.map((c,i)=>c.canShow&&!o.get(c.canShow).value||t&&!c.teamBuff?null:n(tn,{section:c,hideDesc:s,hideHeader:a,disabled:r,bgt:l},i)).filter(c=>c);return d.length?n(g,{display:"flex",flexDirection:"column",gap:1,children:d}):null}function tn({section:e,hideDesc:t=!1,hideHeader:s=!1,disabled:a=!1,bgt:r="normal"}){return"fields"in e?n(nn,{section:e,hideDesc:t,hideHeader:s,bgt:r}):"states"in e?n(Zt,{conditional:e,hideDesc:t,hideHeader:s,disabled:a,bgt:r}):n(sn,{section:e})}function nn({section:e,hideDesc:t,hideHeader:s,bgt:a="normal"}){return p($e,{bgt:a,className:"FieldsSectionCard",children:[!L(s,e)&&e.header&&n(Ee,{header:e.header,hideDesc:t,hideDivider:e.fields.length===0}),n(Fe,{bgt:a,fields:e.fields})]})}function sn({section:e}){const{data:t}=u.useContext(v);return n("div",{children:L(e.text,t)})}function Ee({header:e,hideDesc:t,hideDivider:s}){const{data:a}=u.useContext(v),{icon:r,title:l,action:o}=e,d=L(r,a),c=!t&&L(e.description,a);return p(ot,{children:[n(Yt,{avatar:d,title:t?l:p("span",{children:[l,n(It,{title:n(S,{children:c})})]}),action:o}),!s&&n(H,{})]})}function an({refinement:e,setRefinement:t,disabled:s=!1}){const{t:a}=oe("ui");return n(ue,{title:a("refinement",{value:e}),disabled:s,children:it.map(r=>n(U,{onClick:()=>t(r),selected:e===r,disabled:e===r,children:a("refinement",{value:r})},r))})}const on=dt.lazy(()=>ut(()=>import("./WeaponSelectionModal-3ff0a675.js"),["./WeaponSelectionModal-3ff0a675.js","./index-06471696.js","./index-ddf3fba4.css","./index-08a7485a.js","./ColoredText-8bb1167f.js","./SqBadge-b8df07d3.js","./index-816b0264.js","./totalUtils-8bacaea1.js","./CloseButton-6e1366f9.js","./StarDisplay-6b417622.js","./DropdownButton-91fdcb3a.js","./WeaponCard-5cf7046a.js","./SolidToggleButtonGroup-5da5c654.js","./useWeapon-ba3439f2.js","./ConditionalWrapper-383f977a.js","./CardActionArea-ed701f5d.js"],import.meta.url));function rn({weaponId:e,footer:t=!1,onClose:s,extraButtons:a}){const{data:r}=u.useContext(v),l=Y(),o=Ct(e),{key:d="",level:c=0,refinement:i=1,ascension:f=0,lock:x,location:y="",id:C}=o??{},m=d?Dt(d):void 0,k=u.useCallback(h=>{l.weapons.set(e,h)},[e,l]),$=u.useCallback(h=>C&&l.weapons.set(C,{location:h}),[l,C]),q=u.useCallback(h=>h.weaponTypeKey===(m==null?void 0:m.weaponType),[m]),[J,K,F]=Re(),X=d?ft(d,f>=2):"";u.useEffect(()=>{if(!(!m||!k||m.key!==(o==null?void 0:o.key))&&m.rarity<=2&&(c>70||f>4)){const[h,w]=Ae[0];k({level:h,ascension:w})}},[m,o,k,c,f]);const O=u.useMemo(()=>m&&o&&xt([m.data,ht(o)]),[m,o]);return n(ct,{open:!!e,onClose:s,containerProps:{maxWidth:"md"},children:p(lt,{children:[n(on,{ascension:f,show:J,onHide:F,onSelect:h=>k({key:h}),weaponTypeFilter:m&&m.weaponType}),n(se,{children:m&&O&&p(I,{container:!0,spacing:1.5,children:[n(I,{item:!0,xs:12,sm:3,children:p(I,{container:!0,spacing:1.5,children:[n(I,{item:!0,xs:6,sm:12,children:n(g,{component:"img",src:X,className:`grad-${m.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),n(I,{item:!0,xs:6,sm:12,children:n(S,{children:n("small",{children:m.description})})})]})}),p(I,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[n(g,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:p(de,{children:[n(j,{color:"info",onClick:K,children:(m==null?void 0:m.name)??"Select a Weapon"}),(m==null?void 0:m.hasRefinement)&&n(an,{refinement:i,setRefinement:h=>k({refinement:h})}),a]})}),p(g,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[m&&n(Qt,{level:c,ascension:f,setBoth:k,useLow:!m.hasRefinement}),n(j,{color:"error",onClick:()=>C&&l.weapons.set(C,{lock:!x}),startIcon:x?n(yt,{}):n(bt,{}),children:x?"Locked":"Unlocked"})]}),n(wt,{stars:m.rarity}),n(S,{variant:"subtitle1",children:n("strong",{children:m.passiveName})}),n(S,{gutterBottom:!0,children:m.passiveName&&m.passiveDescription(O.get(E.weapon.refinement).value-1)}),p(g,{display:"flex",flexDirection:"column",gap:1,children:[p(rt,{children:[n(Rt,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),n(H,{}),n(Be,{children:[E.weapon.main,E.weapon.sub,E.weapon.sub2].map(h=>{const w=O.get(h);return w.isEmpty||!w.value?null:n(ae,{node:w,component:Te},JSON.stringify(w.info))})})]}),r&&m.document&&n(en,{sections:m.document})]})]})]})}),t&&C&&n(se,{sx:{py:1},children:p(I,{container:!0,spacing:1,children:[n(I,{item:!0,flexGrow:1,children:n(gt,{location:y,setLocation:$,filter:q,autoCompleteProps:{getOptionDisabled:h=>!h.key}})}),n(I,{item:!0,flexGrow:2}),!!s&&n(I,{item:!0,children:n(vt,{sx:{height:"100%"},large:!0,onClick:s})})]})})]})})}const kn=Object.freeze(Object.defineProperty({__proto__:null,default:rn},Symbol.toStringTag,{value:"Module"}));export{_t as A,Yt as C,en as D,je as F,Te as L,Ht as N,an as R,pe as T,rn as W,ae as a,Be as b,Qt as c,In as d,kn as e};
