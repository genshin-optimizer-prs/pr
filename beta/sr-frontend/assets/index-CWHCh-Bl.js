import{a as Z,g as ee,s as T,_ as k,r as c,u as te,ao as Pt,ap as It,e as re,a5 as $e,aq as zt,m as At,j as M,f as U,h as oe,ar as Oe,P as Nt,i as Bt,as as Et,at as Me,b as E,au as Se,x as jt,l as Lt,d as Ot,H as v,D as a,X as w,U as S,C as D,av as xe,a1 as I,aw as Wt,aa as nt,ax as We,a8 as O,$ as j,W as P,ay as Vt,ab as we,G as ge,az as qt,z as ae,A as ne,aA as Kt,aB as Re,aC as Gt,aD as me,ae as De,aE as Ut,aF as Ht,a9 as he,O as Ve,N as qe,L as Jt,aG as st,aH as it,aI as le,aJ as Ft,an as ct,a6 as lt,aK as Xt,I as Qt,a7 as Yt,aL as Zt,aM as Ke,F as er,aN as _e,aO as Ge,aP as tr,aQ as rr,aR as or,aS as ar,aT as nr,aU as sr,aV as ir,aW as Ue}from"./index-QmHrxqFr.js";import{u as dt,S as ye,C as cr,a as lr}from"./CharacterEditor-DtzJQcm9.js";import{u as dr,C as ur}from"./useForceUpdate-ChLLOjve.js";import{s as pr,t as fr,w as mr,c as hr,l as gr,r as br,a as vr,d as xr}from"./index-DkX2NDnN.js";import{u as yr}from"./useLightCone-BD0UIe6z.js";import{T as Cr,d as kr,M as Te,D as Pe}from"./DropdownButton-10_s621d.js";import{G as $r,d as ut}from"./LocationAutocomplete-C5ytZO_6.js";import{C as pt}from"./CardActionArea-K-2kAghz.js";import{u as Mr,R as Sr,D as wr}from"./RelicCard-DCM9KgZS.js";import{I as Rr}from"./InfoTooltip-DLAhQ7NH.js";function Dr(e){return Z("MuiCollapse",e)}ee("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const _r=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Tr=e=>{const{orientation:t,classes:r}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return oe(o,Dr,r)},Pr=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.state==="entered"&&t.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>k({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&k({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Ir=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>k({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),zr=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>k({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ft=c.forwardRef(function(t,r){const o=te({props:t,name:"MuiCollapse"}),{addEndListener:n,children:s,className:i,collapsedSize:d="0px",component:l,easing:u,in:p,onEnter:f,onEntered:h,onEntering:m,onExit:b,onExited:g,onExiting:C,orientation:$="vertical",style:R,timeout:y=Pt.standard,TransitionComponent:z=It}=o,J=re(o,_r),W=k({},o,{orientation:$,collapsedSize:d}),A=Tr(W),F=$e(),be=zt(),N=c.useRef(null),X=c.useRef(),V=typeof d=="number"?`${d}px`:d,L=$==="horizontal",Q=L?"width":"height",ie=c.useRef(null),$t=At(r,ie),q=x=>_=>{if(x){const B=ie.current;_===void 0?x(B):x(B,_)}},ve=()=>N.current?N.current[L?"clientWidth":"clientHeight"]:0,Mt=q((x,_)=>{N.current&&L&&(N.current.style.position="absolute"),x.style[Q]=V,f&&f(x,_)}),St=q((x,_)=>{const B=ve();N.current&&L&&(N.current.style.position="");const{duration:Y,easing:ce}=Oe({style:R,timeout:y,easing:u},{mode:"enter"});if(y==="auto"){const Le=F.transitions.getAutoHeightDuration(B);x.style.transitionDuration=`${Le}ms`,X.current=Le}else x.style.transitionDuration=typeof Y=="string"?Y:`${Y}ms`;x.style[Q]=`${B}px`,x.style.transitionTimingFunction=ce,m&&m(x,_)}),wt=q((x,_)=>{x.style[Q]="auto",h&&h(x,_)}),Rt=q(x=>{x.style[Q]=`${ve()}px`,b&&b(x)}),Dt=q(g),_t=q(x=>{const _=ve(),{duration:B,easing:Y}=Oe({style:R,timeout:y,easing:u},{mode:"exit"});if(y==="auto"){const ce=F.transitions.getAutoHeightDuration(_);x.style.transitionDuration=`${ce}ms`,X.current=ce}else x.style.transitionDuration=typeof B=="string"?B:`${B}ms`;x.style[Q]=V,x.style.transitionTimingFunction=Y,C&&C(x)}),Tt=x=>{y==="auto"&&be.start(X.current||0,x),n&&n(ie.current,x)};return M.jsx(z,k({in:p,onEnter:Mt,onEntered:wt,onEntering:St,onExit:Rt,onExited:Dt,onExiting:_t,addEndListener:Tt,nodeRef:ie,timeout:y==="auto"?null:y},J,{children:(x,_)=>M.jsx(Pr,k({as:l,className:U(A.root,i,{entered:A.entered,exited:!p&&V==="0px"&&A.hidden}[x]),style:k({[L?"minWidth":"minHeight"]:V},R),ref:$t},_,{ownerState:k({},W,{state:x}),children:M.jsx(Ir,{ownerState:k({},W,{state:x}),className:A.wrapper,ref:N,children:M.jsx(zr,{ownerState:k({},W,{state:x}),className:A.wrapperInner,children:s})})}))}))});ft.muiSupportAuto=!0;const mt=ft,Ar=c.createContext({}),ht=Ar;function Nr(e){return Z("MuiAccordion",e)}const Br=ee("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),de=Br,Er=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],jr=e=>{const{classes:t,square:r,expanded:o,disabled:n,disableGutters:s}=e;return oe({root:["root",!r&&"rounded",o&&"expanded",n&&"disabled",!s&&"gutters"],region:["region"]},Nr,t)},Lr=T(Nt,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${de.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${de.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${de.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${de.expanded}`]:{margin:"16px 0"}}}]})),Or=c.forwardRef(function(t,r){const o=te({props:t,name:"MuiAccordion"}),{children:n,className:s,defaultExpanded:i=!1,disabled:d=!1,disableGutters:l=!1,expanded:u,onChange:p,square:f=!1,slots:h={},slotProps:m={},TransitionComponent:b,TransitionProps:g}=o,C=re(o,Er),[$,R]=Bt({controlled:u,default:i,name:"Accordion",state:"expanded"}),y=c.useCallback(L=>{R(!$),p&&p(L,!$)},[$,p,R]),[z,...J]=c.Children.toArray(n),W=c.useMemo(()=>({expanded:$,disabled:d,disableGutters:l,toggle:y}),[$,d,l,y]),A=k({},o,{square:f,disabled:d,disableGutters:l,expanded:$}),F=jr(A),be=k({transition:b},h),N=k({transition:g},m),[X,V]=Mr("transition",{elementType:mt,externalForwardedProps:{slots:be,slotProps:N},ownerState:A});return M.jsxs(Lr,k({className:U(F.root,s),ref:r,ownerState:A,square:f},C,{children:[M.jsx(ht.Provider,{value:W,children:z}),M.jsx(X,k({in:$,timeout:"auto"},V,{children:M.jsx("div",{"aria-labelledby":z.props.id,id:z.props["aria-controls"],role:"region",className:F.region,children:J})}))]}))}),He=Or;function Wr(e){return Z("MuiAccordionDetails",e)}ee("MuiAccordionDetails",["root"]);const Vr=["className"],qr=e=>{const{classes:t}=e;return oe({root:["root"]},Wr,t)},Kr=T("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Gr=c.forwardRef(function(t,r){const o=te({props:t,name:"MuiAccordionDetails"}),{className:n}=o,s=re(o,Vr),i=o,d=qr(i);return M.jsx(Kr,k({className:U(d.root,n),ref:r,ownerState:i},s))}),Je=Gr;function Ur(e){return Z("MuiAccordionSummary",e)}const Hr=ee("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),K=Hr,Jr=["children","className","expandIcon","focusVisibleClassName","onClick"],Fr=e=>{const{classes:t,expanded:r,disabled:o,disableGutters:n}=e;return oe({root:["root",r&&"expanded",o&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},Ur,t)},Xr=T(Et,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${K.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${K.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${K.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${K.expanded}`]:{minHeight:64}}}]}}),Qr=T("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${K.expanded}`]:{margin:"20px 0"}}}]})),Yr=T("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${K.expanded}`]:{transform:"rotate(180deg)"}})),Zr=c.forwardRef(function(t,r){const o=te({props:t,name:"MuiAccordionSummary"}),{children:n,className:s,expandIcon:i,focusVisibleClassName:d,onClick:l}=o,u=re(o,Jr),{disabled:p=!1,disableGutters:f,expanded:h,toggle:m}=c.useContext(ht),b=$=>{m&&m($),l&&l($)},g=k({},o,{expanded:h,disabled:p,disableGutters:f}),C=Fr(g);return M.jsxs(Xr,k({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":h,className:U(C.root,s),focusVisibleClassName:U(C.focusVisible,d),onClick:b,ref:r,ownerState:g},u,{children:[M.jsx(Qr,{className:C.content,ownerState:g,children:n}),i&&M.jsx(Yr,{className:C.expandIconWrapper,ownerState:g,children:i})]}))}),Fe=Zr;function eo(e){return Z("MuiLinearProgress",e)}ee("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const to=["className","color","value","valueBuffer","variant"];let H=e=>e,Xe,Qe,Ye,Ze,et,tt;const Ce=4,ro=Me(Xe||(Xe=H`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),oo=Me(Qe||(Qe=H`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),ao=Me(Ye||(Ye=H`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),no=e=>{const{classes:t,variant:r,color:o}=e,n={root:["root",`color${E(o)}`,r],dashed:["dashed",`dashedColor${E(o)}`],bar1:["bar",`barColor${E(o)}`,(r==="indeterminate"||r==="query")&&"bar1Indeterminate",r==="determinate"&&"bar1Determinate",r==="buffer"&&"bar1Buffer"],bar2:["bar",r!=="buffer"&&`barColor${E(o)}`,r==="buffer"&&`color${E(o)}`,(r==="indeterminate"||r==="query")&&"bar2Indeterminate",r==="buffer"&&"bar2Buffer"]};return oe(n,eo,t)},Ie=(e,t)=>t==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode==="light"?Lt(e.palette[t].main,.62):Ot(e.palette[t].main,.5),so=T("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${E(r.color)}`],t[r.variant]]}})(({ownerState:e,theme:t})=>k({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:Ie(t,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),io=T("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${E(r.color)}`]]}})(({ownerState:e,theme:t})=>{const r=Ie(t,e.color);return k({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},Se(Ze||(Ze=H`
    animation: ${0} 3s infinite linear;
  `),ao)),co=T("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${E(r.color)}`],(r.variant==="indeterminate"||r.variant==="query")&&t.bar1Indeterminate,r.variant==="determinate"&&t.bar1Determinate,r.variant==="buffer"&&t.bar1Buffer]}})(({ownerState:e,theme:t})=>k({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(t.vars||t).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${Ce}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${Ce}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&Se(et||(et=H`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),ro)),lo=T("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${E(r.color)}`],(r.variant==="indeterminate"||r.variant==="query")&&t.bar2Indeterminate,r.variant==="buffer"&&t.bar2Buffer]}})(({ownerState:e,theme:t})=>k({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(t.vars||t).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:Ie(t,e.color),transition:`transform .${Ce}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&Se(tt||(tt=H`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),oo)),uo=c.forwardRef(function(t,r){const o=te({props:t,name:"MuiLinearProgress"}),{className:n,color:s="primary",value:i,valueBuffer:d,variant:l="indeterminate"}=o,u=re(o,to),p=k({},o,{color:s,variant:l}),f=no(p),h=jt(),m={},b={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&i!==void 0){m["aria-valuenow"]=Math.round(i),m["aria-valuemin"]=0,m["aria-valuemax"]=100;let g=i-100;h&&(g=-g),b.bar1.transform=`translateX(${g}%)`}if(l==="buffer"&&d!==void 0){let g=(d||0)-100;h&&(g=-g),b.bar2.transform=`translateX(${g}%)`}return M.jsxs(so,k({className:U(f.root,n),ownerState:p,role:"progressbar"},m,{ref:r},u,{children:[l==="buffer"?M.jsx(io,{className:f.dashed,ownerState:p}):null,M.jsx(co,{className:f.bar1,ownerState:p,style:b.bar1}),l==="determinate"?null:M.jsx(lo,{className:f.bar2,ownerState:p,style:b.bar2})]}))}),po=uo;function fo({avatar:e,title:t,action:r}){return v(S,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,a(w,{variant:"subtitle1",sx:{flexGrow:1},children:t}),r&&a(w,{variant:"caption",children:r})]})}function mo({condition:e,wrapper:t,falseWrapper:r,children:o}){return e?t(o):r?r(o):o}function rt({value:e,onChange:t,...r}){const[o,n]=c.useState(e);c.useEffect(()=>{n(e)},[e]);const s=()=>t(o);return a(Cr,{value:o,onChange:i=>n(i.target.value),onBlur:s,onKeyDown:i=>i.key==="Enter"&&!r.multiline&&s(),...r})}function ho(e){const{t}=D("ui"),r=xe({path:"/:page/*"}),o=t("pageTitle"),n=e??((r==null?void 0:r.params.page)&&t(`tabs.${r==null?void 0:r.params.page}`));c.useEffect(()=>{n?document.title=`${n} - ${o}`:document.title=o},[t,o,n])}function ze(e,t){const[r,o]=dr(),n=c.useMemo(()=>r&&e.get(t),[r,e,t]);return c.useEffect(()=>e.follow(t,o),[e,t,o]),n}function go(e){const{database:t}=I();return ze(t.builds,e??"")}function gt(e){const t=c.useMemo(()=>e||Wt(nt,()=>""),[e]),{database:r}=I(),[o,n]=c.useState(()=>We(t,s=>r.relics.get(s)));return c.useEffect(()=>{n(We(t,i=>r.relics.get(i)));const s=Object.values(t).map(i=>r.relics.follow(i,(d,l,u)=>{l==="update"&&n(p=>({...p,[u.slotKey]:u})),l==="remove"&&n(p=>({...p,[u.slotKey]:void 0}))}));return()=>s.forEach(i=>i())},[r,t]),o}function G(e){const{database:t}=I();return ze(t.loadouts,e??"")}function bt(e){const{database:t}=I();return ze(t.teams,e)}function bo({slot:e}){const{t}=D("relic");return a(j,{sx:{height:"100%"},children:v(O,{children:[v(w,{children:[t("slot"),": ",e]}),a(w,{children:t("empty")})]})})}function vo({build:e}){const t=gt(e);return a(P,{container:!0,columns:3,spacing:1,children:nt.map(r=>{const o=t[r];return a(P,{item:!0,xs:1,children:o?a(Sr,{relic:o}):a(bo,{slot:r})},`${r}_${o==null?void 0:o.id}`)})})}function xo({charKey:e,setCharKey:t}){const{t:r}=D(["character","charNames_gen"]),{database:o}=I(),n=c.useCallback(d=>!!o.chars.get(d),[o.chars]),s=c.useCallback(d=>o.charMeta.get(d).favorite,[o.charMeta]),i=c.useMemo(()=>[{key:"",label:r("character:autocomplete.none")},...Vt.map(d=>({key:d,label:r(`charNames_gen:${d}`),favorite:s(d),color:n(d)?void 0:"secondary"}))],[n,s,r]);return a(c.Suspense,{fallback:a(we,{variant:"text",width:100}),children:a($r,{options:i,toImg:()=>a(ge,{children:" "}),valueKey:e,onChange:d=>t(d??"")})})}const yo={RuanMei:qt};var Ae={},Co=ne;Object.defineProperty(Ae,"__esModule",{value:!0});var fe=Ae.default=void 0,ko=Co(ae()),$o=M,Mo=(0,ko.default)((0,$o.jsx)("path",{d:"M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"}),"Groups");fe=Ae.default=Mo;function So({document:e,bgt:t="normal",collapse:r=!1}){switch(e.type){case"fields":return a(wo,{fieldsDocument:e,bgt:t});case"text":return r?a(Ro,{textDocument:e}):a(vt,{textDocument:e});case"conditional":return null;default:return null}}function wo({fieldsDocument:e,bgt:t="normal"}){return v(j,{bgt:t,children:[e.header&&a(Do,{header:e.header,hideDivider:e.fields.length===0}),a(Kt,{bgt:t,fields:e.fields})]})}function vt({textDocument:e}){const t=c.useContext(Re);return t?a("div",{children:Gt(e.text,t)}):null}function Ro({textDocument:e}){const[t,r]=c.useState(!1),[o,n]=c.useState(!1);return v(S,{sx:{position:"relative"},children:[!t&&a(S,{sx:{pointerEvents:"none",position:"absolute",mx:"auto",width:"100%",display:"flex",justifyContent:"center",height:"100%",alignItems:"flex-end",zIndex:"10",transition:"transform 0.3s ease",transform:o?"translate(0,-5px)":void 0},children:a(kr,{})}),a(mt,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),collapsedSize:55,onClick:()=>r(s=>!s),in:t,sx:{cursor:"pointer",position:"relative",maskImage:t?void 0:"linear-gradient(to bottom, black 0%, transparent 100%)","&:hover":{maskImage:t?void 0:"linear-gradient(to bottom, black 50%, transparent 100%)"}},children:a(vt,{textDocument:e})})]})}function Do({header:e,hideDivider:t}){const{icon:r,text:o,additional:n}=e;return v(ge,{children:[a(fo,{avatar:r,title:o,action:n}),!t&&a(me,{})]})}function se(){return c.useContext(Re)}function xt({optTarget:e,setOptTarget:t}){const{t:r}=D("optimize"),o=se();return a(Pe,{title:`${r("optTarget")}${e?`: ${e.tag.name||e.tag.q}`:""}`,children:o==null?void 0:o.listFormulas(De.listing.formulas).map((n,s)=>a(Te,{onClick:()=>t(n),children:n.tag.name||n.tag.q},`${s}_${n.tag.name||n.tag.q}`))})}function _o({statFilters:e,setStatFilters:t,disabled:r=!1}){const o=c.useCallback((l,u,p)=>{const f={...e},h=JSON.stringify(u),m=u?[...e[h]]:void 0,b=JSON.stringify(l),g=[...e[b]??[]];p!==void 0&&m?g.push(m[p]):g.push({minValue:0,maxValue:0,disabled:!1}),f[b]=g,p!==void 0&&m&&(m.splice(p,1),m.length?f[h]=m:delete f[h]),t({...f})},[t,e]),n=c.useCallback((l,u)=>{const p={...e},f=JSON.stringify(l),h=[...e[f]];h.splice(u,1),h.length?p[f]=h:delete p[f],t({...p})},[t,e]),s=c.useCallback((l,u,p)=>{const f={...e},h=JSON.stringify(l),m=[...e[h]];m[u]={...m[u],minValue:p},f[h]=m,t({...f})},[t,e]),i=c.useCallback((l,u,p)=>{const f={...e},h=JSON.stringify(l),m=[...e[h]];m[u]={...m[u],maxValue:p},f[h]=m,t({...f})},[t,e]),d=c.useCallback((l,u,p)=>{const f={...e},h=JSON.stringify(l),m=[...e[h]];m[u]={...m[u],disabled:p},f[h]=m,t({...f})},[t,e]);return v(ge,{children:[Object.entries(e).flatMap(([l,u])=>u==null?void 0:u.map((p,f)=>a(ot,{path:JSON.parse(l),setting:p,index:f,setTarget:o,delTarget:n,setMinValue:s,setMaxValue:i,setDisabled:d,disabled:r},l+f))),a(ot,{delTarget:n,setTarget:o,setMinValue:s,setMaxValue:i,setDisabled:d,disabled:r})]})}function ot({path:e,setting:t,index:r,delTarget:o,setMinValue:n,setMaxValue:s,setDisabled:i,disabled:d}){const{t:l}=D("page_character_optimize"),u=c.useCallback(b=>e&&r!==void 0&&n(e,r,b??0),[n,e,r]),p=c.useCallback(b=>e&&r!==void 0&&s(e,r,b??1/0),[s,e,r]),[f,h]=c.useState(void 0),m={p:1,flexBasis:30,flexGrow:0,flexShrink:0};return v(Jt,{sx:{"& .MuiButtonGroup-grouped":{minWidth:24},width:"100%"},children:[!!t&&!!e&&r!==void 0&&a(he,{sx:m,color:t.disabled?"secondary":"success",onClick:()=>i(e,r,!t.disabled),disabled:d,children:t.disabled?a(Ut,{}):a(Ht,{})}),a(qe,{sx:{flexBasis:150,flexGrow:1},children:a(Ve,{float:!0,disabled:!e||d,value:t==null?void 0:t.minValue,placeholder:l("buildConstraint.minStatValue"),onChange:u,sx:{px:1},inputProps:{sx:{"& + .MuiOutlinedInput-notchedOutline":{borderRadius:0},textAlign:"right"}}})}),a(xt,{optTarget:f,setOptTarget:h}),a(qe,{sx:{flexBasis:150,flexGrow:1},children:a(Ve,{float:!0,disabled:!e||d,value:t==null?void 0:t.maxValue,placeholder:l("buildConstraint.maxStatValue"),onChange:p,sx:{px:1},inputProps:{sx:{"& + .MuiOutlinedInput-notchedOutline":{borderRadius:0},textAlign:"left"}}})}),!!e&&r!==void 0&&a(he,{sx:m,color:"error",onClick:()=>o(e,r),disabled:d,children:a(wr,{fontSize:"small"})})]})}function To({disabled:e=!1}){const{t}=D("page_character_optimize"),[r,o]=c.useState({});return a(S,{children:v(j,{bgt:"light",children:[a(O,{sx:{display:"flex",gap:1,justifyContent:"space-between",flexDirection:"column"},children:v(S,{display:"flex",justifyContent:"space-between",children:[a(w,{sx:{fontWeight:"bold"},children:t`constraintFilter.title`}),a(Rr,{title:a(w,{children:t`constraintFilter.tooltip`})})]})}),a(me,{}),a(S,{display:"flex",flexDirection:"column",gap:.5,children:a(_o,{statFilters:r,setStatFilters:o,disabled:e})})]})})}function Po({numWorkers:e,setNumWorkers:t}){const{t:r}=D("optimize"),o=navigator.hardwareConcurrency||8;return a(Pe,{title:`${r("numWorkers")}: ${e}`,children:st(1,o).map(n=>a(Te,{onClick:()=>t(n),children:r("workers",{count:n})},n))})}function Io({teamId:e,src:t,children:r}){var g,C,$,R;const o=bt(e),n=G((g=o.loadoutMetadata[0])==null?void 0:g.loadoutId),s=G((C=o.loadoutMetadata[1])==null?void 0:C.loadoutId),i=G(($=o.loadoutMetadata[2])==null?void 0:$.loadoutId),d=G((R=o.loadoutMetadata[3])==null?void 0:R.loadoutId),l=c.useMemo(()=>{const y={all:"all"};return n&&(y[n.key]="0"),s&&(y[s.key]="1"),i&&(y[i.key]="2"),d&&(y[d.key]="3"),y},[n,s,i,d]),u=ue(o.loadoutMetadata[0],l),p=ue(o.loadoutMetadata[1],l),f=ue(o.loadoutMetadata[2],l),h=ue(o.loadoutMetadata[3],l),m=c.useMemo(()=>pr([...fr(o.loadoutMetadata.map((y,z)=>y===void 0?void 0:it[z]).filter(y=>!!y)),...u?pe(0,u):[],...p?pe(1,p):[],...f?pe(2,f):[],...h?pe(3,h):[],le.common.lvl.add(80),le.common.res.add(.1),le.common.isBroken.add(0),le.common.maxToughness.add(100),Ft.common.critMode.add("avg")]),[u,p,f,h,o.loadoutMetadata]),b=c.useMemo(()=>(m==null?void 0:m.withTag({src:t}))??null,[m,t]);return a(Re.Provider,{value:b,children:r})}function ue(e,t){const r=G(e==null?void 0:e.loadoutId),o=dt(r==null?void 0:r.key),n=go(e==null?void 0:e.buildId),s=yr(n==null?void 0:n.lightConeId),i=gt(n==null?void 0:n.relicIds),d=c.useMemo(()=>Object.fromEntries(Object.entries((r==null?void 0:r.conditional)??{}).map(([l,u])=>[t[l],u])),[r,t]);return c.useMemo(()=>({character:o,lightCone:s,relics:i,conditionals:d}),[o,s,d,i])}function pe(e,{character:t,lightCone:r,relics:o,conditionals:n}){return t?[...mr(`${e}`,...hr(t),...gr(r),...br(Object.values(o).filter(s=>!!s).map(s=>({set:s.setKey,stats:[...s.substats.filter(({key:i})=>i!=="").map(i=>({key:i.key,value:i.accurateValue})),{key:s.mainStatKey,value:s.mainStatVal}]})))),...vr(`${e}`,n)]:[]}var Ne={},zo=ne;Object.defineProperty(Ne,"__esModule",{value:!0});var yt=Ne.default=void 0,Ao=zo(ae()),No=M,Bo=(0,Ao.default)((0,No.jsx)("path",{d:"M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"}),"BorderColor");yt=Ne.default=Bo;var Be={},Eo=ne;Object.defineProperty(Be,"__esModule",{value:!0});var Ct=Be.default=void 0,jo=Eo(ae()),Lo=M,Oo=(0,jo.default)((0,Lo.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");Ct=Be.default=Oo;function Wo({teamId:e,charKey:t,tab:r=""}){const{t:o}=D("page_team"),n=ct(),{database:s}=I(),i=s.teams.get(e),{loadoutMetadata:d}=i,l=$e(),u=lt(l.breakpoints.down("md")),[p,f]=c.useState(!1),h=b=>{s.teams.set(e,{name:b})},m=b=>{s.teams.set(e,{description:b})};return v(S,{sx:()=>({borderBottom:"1px rgb(200,200,200,0.3) solid","& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px",backgroundColor:"rgb(200,200,200,0.5)"}}),children:[a(pt,{onClick:()=>f(!0),children:a(Xt,{placement:"top",title:v(S,{children:[v(S,{sx:{display:"flex",color:"info.light",gap:1},children:[a(yt,{}),a(w,{children:a("strong",{children:o`team.editNameDesc`})})]}),!!i.description&&a(w,{children:i.description})]}),children:a(O,{sx:{display:"flex",justifyContent:"center","&:hover":{color:"info.light"}},children:v(w,{variant:"h5",sx:{display:"flex",gap:1,alignItems:"center",justifyContent:"center",textShadow:"#000 0 0 10px !important"},children:[a(fe,{}),i.name]})})})}),a(Yt,{open:p,onClose:()=>f(!1),children:v(j,{children:[a(ur,{title:o`team.editNameDesc`,avatar:a(fe,{}),titleTypographyProps:{variant:"h6"},action:a(Qt,{onClick:()=>f(!1),children:a(ut,{})})}),a(me,{}),a(O,{children:v(S,{display:"flex",flexDirection:"column",gap:2,sx:{mt:2},children:[a(rt,{label:o`team.name`,value:i.name,onChange:b=>h(b),autoFocus:!0}),a(rt,{label:o`team.desc`,value:i.description,onChange:b=>m(b),multiline:!0,minRows:4})]})})]})}),a(me,{}),v(Zt,{variant:"fullWidth",value:t??"team",orientation:u?"vertical":"horizontal",children:[a(Ke,{icon:a(fe,{}),iconPosition:"start",value:"team",label:"Team Settings",onClick:()=>n(`/teams/${e}/`)}),d.map((b,g)=>{var $;const C=b&&(($=s.loadouts.get(b==null?void 0:b.loadoutId))==null?void 0:$.key);return a(Ke,{icon:a(Ct,{}),iconPosition:"start",value:C??g,disabled:!d[g],label:C?a(w,{children:o(`charNames_gen:${C}`)}):`Character ${g+1}`,onClick:()=>C&&n(`/teams/${e}/${C}/${r}`)},g)})]})]})}function Vo({teamId:e}){const{database:t}=I(),r=t.teams.get(e);return v(S,{children:[e,r.loadoutMetadata.map((o,n)=>a(qo,{loadoutMetadataIndex:n,teamId:e},`${n}_${o==null?void 0:o.loadoutId}`))]})}function qo({loadoutMetadataIndex:e,teamId:t}){var d;const{database:r}=I(),o=r.teams.get(t),n=(d=o.loadoutMetadata[e])==null?void 0:d.loadoutId,s=r.loadouts.get(n);function i(l){if(l===""){r.teams.set(t,p=>p.loadoutMetadata[e]=void 0);return}r.chars.getOrCreate(l);const u=o.loadoutMetadata.findIndex(p=>{var f;return p&&((f=r.loadouts.get(p.loadoutId))==null?void 0:f.key)===l});if(u===-1){let p=r.loadouts.keys.find(f=>r.loadouts.get(f).key===l);p||(p=r.loadouts.new(l)),r.teams.set(t,f=>{f.loadoutMetadata[e]={loadoutId:p}})}else{if(u===e)return;const p=o.loadoutMetadata[u],f=o.loadoutMetadata[e];r.teams.set(t,h=>{h.loadoutMetadata[e]=p,h.loadoutMetadata[u]=f})}}return a(xo,{charKey:(s==null?void 0:s.key)??"",setCharKey:i})}var Ee={},Ko=ne;Object.defineProperty(Ee,"__esModule",{value:!0});var ke=Ee.default=void 0,Go=Ko(ae()),Uo=M,Ho=(0,Go.default)((0,Uo.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");ke=Ee.default=Ho;const Jo=5e4;class Fo{constructor(t,r,o,n,s){this.calc=t,this.optTarget=r,this.relicsBySlot=o,this.numWorkers=n,this.setProgress=s,this.worker=new Worker(new URL(""+new URL("parentWorker-CAAYnoOP.js",import.meta.url).href,import.meta.url),{type:"module"})}async optimize(){return await new Promise((r,o)=>{this.worker.onmessage=({data:s})=>{switch(s.resultType){case"progress":this.setProgress(s.progress);break;case"done":r(s.buildResults);break;case"err":console.log(s),o();break}};const n={command:"start",relicsBySlot:this.relicsBySlot,detachedNodes:this.detachNodes(),numWorkers:this.numWorkers};this.worker.postMessage(n)})}async terminate(){const t={command:"terminate"};this.worker.postMessage(t),await new Promise((r,o)=>{this.worker.onmessage=({data:n})=>{switch(n.resultType){case"terminated":r();break;case"err":console.log(n),o();break}}}),this.worker.terminate()}detachNodes(){const t=new Set(er);return xr([this.optTarget],this.calc,o=>{if(o.src==="0"&&o.et==="own"){if(o.sheet==="dyn"&&o.qt==="premod")return{q:o.q};if(o.q==="count"&&t.has(o.sheet))return{q:o.sheet}}})}}var je={},Xo=ne;Object.defineProperty(je,"__esModule",{value:!0});var kt=je.default=void 0,Qo=Xo(ae()),Yo=M,Zo=(0,Qo.default)((0,Yo.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");kt=je.default=Zo;function ea(){const{t:e}=D("optimize"),{database:t}=I(),r=se(),[o,n]=c.useState(8),[s,i]=c.useState(void 0),[d,l]=c.useState(void 0),u=c.useMemo(()=>t.relics.values.reduce((R,y)=>(R[y.slotKey].push(y),R),{head:[],hands:[],feet:[],body:[],sphere:[],rope:[]}),[t.relics.values]),p=Object.values(u).reduce((R,y)=>R*y.length,1),[f,h]=c.useState(void 0),[m,b]=c.useState(!1),g=c.useRef(()=>{});c.useEffect(()=>()=>g.current(),[]);const C=c.useCallback(async()=>{if(!d||!r)return;const R=new Promise(J=>g.current=J);i(void 0),b(!0);const y=new Fo(r,d,u,o,i);R.then(async()=>await y.terminate());const z=await y.optimize();await y.terminate(),g.current=()=>{},b(!1),h(z[0])},[r,o,d,u]),$=c.useCallback(()=>{g.current(),b(!1)},[g]);return a(j,{bgt:"dark",children:v(O,{children:[a(To,{}),v(ye,{children:[a(w,{variant:"h5",children:e("optimize")}),v(S,{children:[a(xt,{optTarget:d,setOptTarget:l}),a(Po,{numWorkers:o,setNumWorkers:n}),a(he,{onClick:m?$:C,color:m?"error":"primary",startIcon:m?a(ut,{}):a(kt,{}),children:e(m?"cancel":"optimize")})]}),s&&a(ta,{progress:s,totalPermutations:p}),f&&v(S,{children:[v(w,{children:["Best: ",f.value]}),a(vo,{build:f.ids})]})]})]})})}function ta({progress:e,totalPermutations:t}){const{t:r}=D("optimize");return v(S,{children:[v(w,{children:[r("totalProgress"),": ",e.numBuildsComputed.toLocaleString()," /"," ",t.toLocaleString()]}),v(w,{children:[r("buildsKept"),": ",e.numBuildsKept.toLocaleString()," /"," ",Jo.toLocaleString()]}),a(po,{variant:"determinate",value:e.numBuildsComputed/t*100})]})}const ra={xs:12,sm:6,md:4};function oa(){const{loadout:{key:e}}=_e(),t=se(),{t:r}=D("sheet_gen"),o=[["basic",r("talents.basic")],["skill",r("talents.skill")],["ultimate",r("talents.ultimate")]],n=$e(),s=lt(n.breakpoints.up("lg")),i=yo[e];if(console.log({characterSheet:i,calc:t}),!(!i||!t))return a(ge,{children:v(P,{container:!0,spacing:1,children:[s&&a(P,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:a(at,{})}),a(P,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:o.map(([d,l])=>{const u=i[d];return u?a(P,{item:!0,...ra,children:a(aa,{talentKey:d,subtitle:l,sheetElement:u})},d):null})}),!s&&a(P,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:a(P,{item:!0,xs:12,children:a(at,{})})})]})})}function aa({sheetElement:e,subtitle:t,onClickTitle:r}){const o=c.useCallback(s=>a(pt,{onClick:r,children:s}),[r]);let n=null;return n=null,v(j,{bgt:"light",sx:{height:"100%"},children:[n,v(O,{children:[a(mo,{condition:!!r,wrapper:o,children:v(P,{container:!0,sx:{flexWrap:"nowrap"},children:[a(P,{item:!0,children:a(S,{component:Ge?Ge:"img",src:e==null?void 0:e.img,sx:{width:60,height:"auto"}})}),v(P,{item:!0,flexGrow:1,sx:{pl:1},children:[a(w,{variant:"h6",children:e==null?void 0:e.name}),a(w,{variant:"subtitle1",children:t})]})]})}),e.documents.map((s,i)=>a(So,{document:s,collapse:!0},i))]})]})}function at(){const{t:e}=D("sheet_gen"),t=se();if(!t)return null;const r=t.compute(De.char.eidolon).val;return a(Pe,{fullWidth:!0,title:e("constellationLvl",{level:r}),color:"primary",children:st(0,tr).map(o=>a(Te,{selected:r===o,disabled:r===o,onClick:()=>{},children:e("constellationLvl",{level:o})},o))})}function na({tab:e}){const{loadout:{key:t}}=_e(),{character:r}=rr(),o=se(),[n,s]=c.useState(void 0);return v(S,{children:[e,a(cr,{characterKey:n,onClose:()=>s(void 0)}),a(lr,{character:r}),v(ye,{gap:1,pt:1,children:[a(j,{bgt:"dark",children:v(O,{children:[a(he,{disabled:!t,onClick:()=>t&&s(t),children:"Edit Character"}),v(He,{children:[a(Fe,{expandIcon:a(ke,{}),children:"All target values, if sheet is created"}),a(Je,{children:a(ye,{children:o==null?void 0:o.listFormulas(De.listing.formulas).map((i,d)=>{const l=o.compute(i),u=i.tag.name||i.tag.q;return v(S,{children:[v(w,{children:[u,": ",l.val]}),v(He,{children:[v(Fe,{expandIcon:a(ke,{}),children:["debug for ",u]}),a(Je,{children:a(w,{component:"pre",children:JSON.stringify(o.toDebug().compute(i),void 0,2)})})]})]},`${u}${d}`)})})})]})]})}),a(oa,{}),a(ea,{})]})]})}const sa=a(we,{variant:"rectangular",width:"100%",height:1e3});function xa(){const{database:e}=I(),{teamId:t}=or(),r=!t||!e.teams.keys.includes(t);return c.useEffect(()=>{r||e.teams.set(t,{lastEdit:Date.now()})},[t,e.teams,r]),r?a(sr,{to:"/teams"}):a(S,{display:"flex",flexDirection:"column",gap:1,children:a(c.Suspense,{fallback:sa,children:t&&a(ia,{teamId:t})})})}function ia({teamId:e}){var b;const{database:t}=I(),r=ct(),o=bt(e),{loadoutMetadata:n}=o,{params:{characterKey:s}}=xe({path:"/teams/:teamId/:characterKey",end:!1})??{params:{}},{params:{tab:i}}=xe({path:"/teams/:teamId/:characterKey/:tab"})??{params:{}},d=c.useMemo(()=>n.findIndex(g=>{var C;return(g==null?void 0:g.loadoutId)&&((C=t.loadouts.get(g.loadoutId))==null?void 0:C.key)===s}),[n,t.loadouts,s]),l=c.useMemo(()=>n[d],[n,d]);c.useEffect(()=>{window.scrollTo({top:0})},[]),c.useEffect(()=>{l||r("",{replace:!0})},[l,r]);const u=l==null?void 0:l.loadoutId,p=(b=t.loadouts.get(u))==null?void 0:b.key,{t:f}=D(["charNames_gen","page_character"]);ho(c.useMemo(()=>{const g=f(p?"charNames_gen:Character":"Team Settings"),C=i?f(`page_character:tabs.${i}`):p?f("Loadout/Build"):i;return`${o.name} - ${g}${C?` - ${C}`:""}`},[p,f,i,o.name]));const h=G(u??""),m=c.useMemo(()=>{if(!(!u||!h||!l))return{teamId:e,team:o,loadoutId:u,loadout:h,loadoutMetadatum:l}},[l,o,h,u,e]);return a(Io,{teamId:e,src:it[d],children:v(S,{sx:{display:"flex",gap:1,flexDirection:"column",mx:1,mt:2},children:[a(j,{children:a(Wo,{teamId:e,charKey:p,tab:i})}),a(S,{children:m?a(ar.Provider,{value:m,children:a(ca,{})}):a(Vo,{teamId:e})})]})})}function ca({tab:e}){const{loadout:{key:t}}=_e(),r=dt(t),o=c.useMemo(()=>r&&{character:r},[r]);return o?a(nr.Provider,{value:o,children:a(ir,{children:a(Ue,{path:":characterKey",children:a(Ue,{path:"*",index:!0,element:a(na,{tab:e})})})})}):a(we,{variant:"rectangular",width:"100%",height:1e3})}export{xa as default};
