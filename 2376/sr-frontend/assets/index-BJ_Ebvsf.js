import{a as Q,g as Y,s as D,_ as C,r as p,u as Z,as as Ct,at as yt,e as ee,a8 as Ue,au as kt,m as $t,j as k,f as K,h as te,av as Te,P as St,i as wt,aw as Rt,ax as be,b as B,ay as ve,x as Mt,l as Tt,d as Dt,B as a,D as _,az as pe,aA as Pt,ad as He,a4 as P,aB as De,K as x,Z as R,ab as V,a1 as q,Y as Pe,aC as _t,ae as xe,G as Je,c as Et,aD as Ce,ah as Fe,ai as Xe,aE as At,aF as Nt,ac as ce,R as _e,Q as Ee,L as Bt,W as w,aG as me,aH as zt,aI as Qe,aJ as ae,aK as It,aL as Lt,z as ye,A as ke,ar as Ye,a9 as jt,aM as Ot,aN as ue,I as Wt,aa as Kt,aO as Vt,aP as Ae,aQ as qt,F as Gt,aR as Ze,aS as Ut,aT as Ht,aU as Jt,aV as Ft,aW as Xt,aX as Qt,aY as Ne}from"./index-B41ykZ2d.js";import{u as et,S as fe,C as Yt,a as Zt}from"./CharacterEditor-Tg3oy26U.js";import{u as er,C as tr}from"./useForceUpdate-BUOVZwDb.js";import{s as rr,t as or,w as ar,c as nr,l as sr,r as ir,a as cr,d as lr}from"./index-CGlELxOv.js";import{u as dr}from"./useLightCone-CK7voVDT.js";import{T as ur,M as tt,D as rt}from"./DropdownButton-BEcPfXuK.js";import{G as pr,d as ot}from"./LocationAutocomplete-D15ycQhh.js";import{C as mr}from"./CardActionArea-Dg8hBxZ9.js";import{u as fr,R as hr}from"./RelicCard-BSbjSd9I.js";import{I as gr}from"./InfoTooltip-DXF1IXeY.js";function br(e){return Q("MuiCollapse",e)}Y("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const vr=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],xr=e=>{const{orientation:t,classes:r}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return te(o,br,r)},Cr=D("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.state==="entered"&&t.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>C({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&C({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),yr=D("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>C({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),kr=D("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>C({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),at=p.forwardRef(function(t,r){const o=Z({props:t,name:"MuiCollapse"}),{addEndListener:n,children:s,className:l,collapsedSize:d="0px",component:u,easing:m,in:i,onEnter:c,onEntered:h,onEntering:f,onExit:b,onExited:g,onExiting:y,orientation:S="vertical",style:M,timeout:$=Ct.standard,TransitionComponent:z=yt}=o,U=ee(o,vr),L=C({},o,{orientation:S,collapsedSize:d}),E=xr(L),H=Ue(),le=kt(),A=p.useRef(null),J=p.useRef(),j=typeof d=="number"?`${d}px`:d,I=S==="horizontal",F=I?"width":"height",re=p.useRef(null),pt=$t(r,re),O=v=>T=>{if(v){const N=re.current;T===void 0?v(N):v(N,T)}},de=()=>A.current?A.current[I?"clientWidth":"clientHeight"]:0,mt=O((v,T)=>{A.current&&I&&(A.current.style.position="absolute"),v.style[F]=j,c&&c(v,T)}),ft=O((v,T)=>{const N=de();A.current&&I&&(A.current.style.position="");const{duration:X,easing:oe}=Te({style:M,timeout:$,easing:m},{mode:"enter"});if($==="auto"){const Me=H.transitions.getAutoHeightDuration(N);v.style.transitionDuration=`${Me}ms`,J.current=Me}else v.style.transitionDuration=typeof X=="string"?X:`${X}ms`;v.style[F]=`${N}px`,v.style.transitionTimingFunction=oe,f&&f(v,T)}),ht=O((v,T)=>{v.style[F]="auto",h&&h(v,T)}),gt=O(v=>{v.style[F]=`${de()}px`,b&&b(v)}),bt=O(g),vt=O(v=>{const T=de(),{duration:N,easing:X}=Te({style:M,timeout:$,easing:m},{mode:"exit"});if($==="auto"){const oe=H.transitions.getAutoHeightDuration(T);v.style.transitionDuration=`${oe}ms`,J.current=oe}else v.style.transitionDuration=typeof N=="string"?N:`${N}ms`;v.style[F]=j,v.style.transitionTimingFunction=X,y&&y(v)}),xt=v=>{$==="auto"&&le.start(J.current||0,v),n&&n(re.current,v)};return k.jsx(z,C({in:i,onEnter:mt,onEntered:ht,onEntering:ft,onExit:gt,onExited:bt,onExiting:vt,addEndListener:xt,nodeRef:re,timeout:$==="auto"?null:$},U,{children:(v,T)=>k.jsx(Cr,C({as:u,className:K(E.root,l,{entered:E.entered,exited:!i&&j==="0px"&&E.hidden}[v]),style:C({[I?"minWidth":"minHeight"]:j},M),ref:pt},T,{ownerState:C({},L,{state:v}),children:k.jsx(yr,{ownerState:C({},L,{state:v}),className:E.wrapper,ref:A,children:k.jsx(kr,{ownerState:C({},L,{state:v}),className:E.wrapperInner,children:s})})}))}))});at.muiSupportAuto=!0;const $r=at,Sr=p.createContext({}),nt=Sr;function wr(e){return Q("MuiAccordion",e)}const Rr=Y("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),ne=Rr,Mr=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Tr=e=>{const{classes:t,square:r,expanded:o,disabled:n,disableGutters:s}=e;return te({root:["root",!r&&"rounded",o&&"expanded",n&&"disabled",!s&&"gutters"],region:["region"]},wr,t)},Dr=D(St,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${ne.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${ne.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${ne.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${ne.expanded}`]:{margin:"16px 0"}}}]})),Pr=p.forwardRef(function(t,r){const o=Z({props:t,name:"MuiAccordion"}),{children:n,className:s,defaultExpanded:l=!1,disabled:d=!1,disableGutters:u=!1,expanded:m,onChange:i,square:c=!1,slots:h={},slotProps:f={},TransitionComponent:b,TransitionProps:g}=o,y=ee(o,Mr),[S,M]=wt({controlled:m,default:l,name:"Accordion",state:"expanded"}),$=p.useCallback(I=>{M(!S),i&&i(I,!S)},[S,i,M]),[z,...U]=p.Children.toArray(n),L=p.useMemo(()=>({expanded:S,disabled:d,disableGutters:u,toggle:$}),[S,d,u,$]),E=C({},o,{square:c,disabled:d,disableGutters:u,expanded:S}),H=Tr(E),le=C({transition:b},h),A=C({transition:g},f),[J,j]=fr("transition",{elementType:$r,externalForwardedProps:{slots:le,slotProps:A},ownerState:E});return k.jsxs(Dr,C({className:K(H.root,s),ref:r,ownerState:E,square:c},y,{children:[k.jsx(nt.Provider,{value:L,children:z}),k.jsx(J,C({in:S,timeout:"auto"},j,{children:k.jsx("div",{"aria-labelledby":z.props.id,id:z.props["aria-controls"],role:"region",className:H.region,children:U})}))]}))}),Be=Pr;function _r(e){return Q("MuiAccordionDetails",e)}Y("MuiAccordionDetails",["root"]);const Er=["className"],Ar=e=>{const{classes:t}=e;return te({root:["root"]},_r,t)},Nr=D("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Br=p.forwardRef(function(t,r){const o=Z({props:t,name:"MuiAccordionDetails"}),{className:n}=o,s=ee(o,Er),l=o,d=Ar(l);return k.jsx(Nr,C({className:K(d.root,n),ref:r,ownerState:l},s))}),ze=Br;function zr(e){return Q("MuiAccordionSummary",e)}const Ir=Y("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),W=Ir,Lr=["children","className","expandIcon","focusVisibleClassName","onClick"],jr=e=>{const{classes:t,expanded:r,disabled:o,disableGutters:n}=e;return te({root:["root",r&&"expanded",o&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},zr,t)},Or=D(Rt,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${W.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${W.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${W.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${W.expanded}`]:{minHeight:64}}}]}}),Wr=D("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${W.expanded}`]:{margin:"20px 0"}}}]})),Kr=D("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${W.expanded}`]:{transform:"rotate(180deg)"}})),Vr=p.forwardRef(function(t,r){const o=Z({props:t,name:"MuiAccordionSummary"}),{children:n,className:s,expandIcon:l,focusVisibleClassName:d,onClick:u}=o,m=ee(o,Lr),{disabled:i=!1,disableGutters:c,expanded:h,toggle:f}=p.useContext(nt),b=S=>{f&&f(S),u&&u(S)},g=C({},o,{expanded:h,disabled:i,disableGutters:c}),y=jr(g);return k.jsxs(Or,C({focusRipple:!1,disableRipple:!0,disabled:i,component:"div","aria-expanded":h,className:K(y.root,s),focusVisibleClassName:K(y.focusVisible,d),onClick:b,ref:r,ownerState:g},m,{children:[k.jsx(Wr,{className:y.content,ownerState:g,children:n}),l&&k.jsx(Kr,{className:y.expandIconWrapper,ownerState:g,children:l})]}))}),Ie=Vr;function qr(e){return Q("MuiLinearProgress",e)}Y("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Gr=["className","color","value","valueBuffer","variant"];let G=e=>e,Le,je,Oe,We,Ke,Ve;const he=4,Ur=be(Le||(Le=G`
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
`)),Hr=be(je||(je=G`
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
`)),Jr=be(Oe||(Oe=G`
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
`)),Fr=e=>{const{classes:t,variant:r,color:o}=e,n={root:["root",`color${B(o)}`,r],dashed:["dashed",`dashedColor${B(o)}`],bar1:["bar",`barColor${B(o)}`,(r==="indeterminate"||r==="query")&&"bar1Indeterminate",r==="determinate"&&"bar1Determinate",r==="buffer"&&"bar1Buffer"],bar2:["bar",r!=="buffer"&&`barColor${B(o)}`,r==="buffer"&&`color${B(o)}`,(r==="indeterminate"||r==="query")&&"bar2Indeterminate",r==="buffer"&&"bar2Buffer"]};return te(n,qr,t)},$e=(e,t)=>t==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode==="light"?Tt(e.palette[t].main,.62):Dt(e.palette[t].main,.5),Xr=D("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${B(r.color)}`],t[r.variant]]}})(({ownerState:e,theme:t})=>C({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:$e(t,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),Qr=D("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${B(r.color)}`]]}})(({ownerState:e,theme:t})=>{const r=$e(t,e.color);return C({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},ve(We||(We=G`
    animation: ${0} 3s infinite linear;
  `),Jr)),Yr=D("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${B(r.color)}`],(r.variant==="indeterminate"||r.variant==="query")&&t.bar1Indeterminate,r.variant==="determinate"&&t.bar1Determinate,r.variant==="buffer"&&t.bar1Buffer]}})(({ownerState:e,theme:t})=>C({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(t.vars||t).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${he}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${he}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&ve(Ke||(Ke=G`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Ur)),Zr=D("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${B(r.color)}`],(r.variant==="indeterminate"||r.variant==="query")&&t.bar2Indeterminate,r.variant==="buffer"&&t.bar2Buffer]}})(({ownerState:e,theme:t})=>C({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(t.vars||t).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:$e(t,e.color),transition:`transform .${he}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&ve(Ve||(Ve=G`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Hr)),eo=p.forwardRef(function(t,r){const o=Z({props:t,name:"MuiLinearProgress"}),{className:n,color:s="primary",value:l,valueBuffer:d,variant:u="indeterminate"}=o,m=ee(o,Gr),i=C({},o,{color:s,variant:u}),c=Fr(i),h=Mt(),f={},b={bar1:{},bar2:{}};if((u==="determinate"||u==="buffer")&&l!==void 0){f["aria-valuenow"]=Math.round(l),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let g=l-100;h&&(g=-g),b.bar1.transform=`translateX(${g}%)`}if(u==="buffer"&&d!==void 0){let g=(d||0)-100;h&&(g=-g),b.bar2.transform=`translateX(${g}%)`}return k.jsxs(Xr,C({className:K(c.root,n),ownerState:i,role:"progressbar"},f,{ref:r},m,{children:[u==="buffer"?k.jsx(Qr,{className:c.dashed,ownerState:i}):null,k.jsx(Yr,{className:c.bar1,ownerState:i,style:b.bar1}),u==="determinate"?null:k.jsx(Zr,{className:c.bar2,ownerState:i,style:b.bar2})]}))}),to=eo;function qe({value:e,onChange:t,...r}){const[o,n]=p.useState(e);p.useEffect(()=>{n(e)},[e]);const s=()=>t(o);return a(ur,{value:o,onChange:l=>n(l.target.value),onBlur:s,onKeyDown:l=>l.key==="Enter"&&!r.multiline&&s(),...r})}function ro(e){const{t}=_("ui"),r=pe({path:"/:page/*"}),o=t("pageTitle"),n=e??((r==null?void 0:r.params.page)&&t(`tabs.${r==null?void 0:r.params.page}`));p.useEffect(()=>{n?document.title=`${n} - ${o}`:document.title=o},[t,o,n])}function st(e){const t=p.useMemo(()=>e||Pt(He,()=>""),[e]),{database:r}=P(),[o,n]=p.useState(()=>De(t,s=>r.relics.get(s)));return p.useEffect(()=>{n(De(t,l=>r.relics.get(l)));const s=Object.values(t).map(l=>r.relics.follow(l,(d,u,m)=>{u==="update"&&n(i=>({...i,[m.slotKey]:m})),u==="remove"&&n(i=>({...i,[m.slotKey]:void 0}))}));return()=>s.forEach(l=>l())},[r,t]),o}function it(e,t){const[r,o]=er(),n=p.useMemo(()=>r&&e.get(t),[r,e,t]);return p.useEffect(()=>e.follow(t,o),[e,t,o]),n}function oo(e){const{database:t}=P();return it(t.loadouts,e)}function ct(e){const{database:t}=P();return it(t.teams,e)}function ao({slot:e}){const{t}=_("relic");return a(q,{sx:{height:"100%"},children:x(V,{children:[x(R,{children:[t("slot"),": ",e]}),a(R,{children:t("empty")})]})})}function no({build:e}){const t=st(e);return a(Pe,{container:!0,columns:3,spacing:1,children:He.map(r=>{const o=t[r];return a(Pe,{item:!0,xs:1,children:o?a(hr,{relic:o}):a(ao,{slot:r})},`${r}_${o==null?void 0:o.id}`)})})}function so({charKey:e,setCharKey:t}){const{t:r}=_(["character","charNames_gen"]),{database:o}=P(),n=p.useCallback(d=>!!o.chars.get(d),[o.chars]),s=p.useCallback(d=>o.charMeta.get(d).favorite,[o.charMeta]),l=p.useMemo(()=>[{key:"",label:r("character:autocomplete.none")},..._t.map(d=>({key:d,label:r(`charNames_gen:${d}`),favorite:s(d),color:n(d)?void 0:"secondary"}))],[n,s,r]);return a(p.Suspense,{fallback:a(xe,{variant:"text",width:100}),children:a(pr,{options:l,toImg:()=>a(Je,{children:" "}),valueKey:e,onChange:d=>t(d??"")})})}const io=Et(k.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");function lt({optTarget:e,setOptTarget:t}){const{t:r}=_("optimize"),{calc:o}=Ce(),n=Fe(Xe,{et:"self",src:"0",dst:"all"});return a(rt,{title:`${r("optTarget")}${e?`: ${e.tag.name||e.tag.q}`:""}`,children:o==null?void 0:o.listFormulas(n.listing.formulas).map((s,l)=>a(tt,{onClick:()=>t(s),children:s.tag.name||s.tag.q},`${l}_${s.tag.name||s.tag.q}`))})}function co({statFilters:e,setStatFilters:t,disabled:r=!1}){const o=p.useCallback((u,m,i)=>{const c={...e},h=JSON.stringify(m),f=m?[...e[h]]:void 0,b=JSON.stringify(u),g=[...e[b]??[]];i!==void 0&&f?g.push(f[i]):g.push({minValue:0,maxValue:0,disabled:!1}),c[b]=g,i!==void 0&&f&&(f.splice(i,1),f.length?c[h]=f:delete c[h]),t({...c})},[t,e]),n=p.useCallback((u,m)=>{const i={...e},c=JSON.stringify(u),h=[...e[c]];h.splice(m,1),h.length?i[c]=h:delete i[c],t({...i})},[t,e]),s=p.useCallback((u,m,i)=>{const c={...e},h=JSON.stringify(u),f=[...e[h]];f[m]={...f[m],minValue:i},c[h]=f,t({...c})},[t,e]),l=p.useCallback((u,m,i)=>{const c={...e},h=JSON.stringify(u),f=[...e[h]];f[m]={...f[m],maxValue:i},c[h]=f,t({...c})},[t,e]),d=p.useCallback((u,m,i)=>{const c={...e},h=JSON.stringify(u),f=[...e[h]];f[m]={...f[m],disabled:i},c[h]=f,t({...c})},[t,e]);return x(Je,{children:[Object.entries(e).flatMap(([u,m])=>m==null?void 0:m.map((i,c)=>a(Ge,{path:JSON.parse(u),setting:i,index:c,setTarget:o,delTarget:n,setMinValue:s,setMaxValue:l,setDisabled:d,disabled:r},u+c))),a(Ge,{delTarget:n,setTarget:o,setMinValue:s,setMaxValue:l,setDisabled:d,disabled:r})]})}function Ge({path:e,setting:t,index:r,delTarget:o,setMinValue:n,setMaxValue:s,setDisabled:l,disabled:d}){const{t:u}=_("page_character_optimize"),m=p.useCallback(b=>e&&r!==void 0&&n(e,r,b??0),[n,e,r]),i=p.useCallback(b=>e&&r!==void 0&&s(e,r,b??1/0),[s,e,r]),[c,h]=p.useState(void 0),f={p:1,flexBasis:30,flexGrow:0,flexShrink:0};return x(Bt,{sx:{"& .MuiButtonGroup-grouped":{minWidth:24},width:"100%"},children:[!!t&&!!e&&r!==void 0&&a(ce,{sx:f,color:t.disabled?"secondary":"success",onClick:()=>l(e,r,!t.disabled),disabled:d,children:t.disabled?a(At,{}):a(Nt,{})}),a(Ee,{sx:{flexBasis:150,flexGrow:1},children:a(_e,{float:!0,disabled:!e||d,value:t==null?void 0:t.minValue,placeholder:u("buildConstraint.minStatValue"),onChange:m,sx:{px:1},inputProps:{sx:{"& + .MuiOutlinedInput-notchedOutline":{borderRadius:0},textAlign:"right"}}})}),a(lt,{optTarget:c,setOptTarget:h}),a(Ee,{sx:{flexBasis:150,flexGrow:1},children:a(_e,{float:!0,disabled:!e||d,value:t==null?void 0:t.maxValue,placeholder:u("buildConstraint.maxStatValue"),onChange:i,sx:{px:1},inputProps:{sx:{"& + .MuiOutlinedInput-notchedOutline":{borderRadius:0},textAlign:"left"}}})}),!!e&&r!==void 0&&a(ce,{sx:f,color:"error",onClick:()=>o(e,r),disabled:d,children:a(io,{fontSize:"small"})})]})}function lo({disabled:e=!1}){const{t}=_("page_character_optimize"),[r,o]=p.useState({});return a(w,{children:x(q,{bgt:"light",children:[a(V,{sx:{display:"flex",gap:1,justifyContent:"space-between",flexDirection:"column"},children:x(w,{display:"flex",justifyContent:"space-between",children:[a(R,{sx:{fontWeight:"bold"},children:t`constraintFilter.title`}),a(gr,{title:a(R,{children:t`constraintFilter.tooltip`})})]})}),a(me,{}),a(w,{display:"flex",flexDirection:"column",gap:.5,children:a(co,{statFilters:r,setStatFilters:o,disabled:e})})]})})}function uo({numWorkers:e,setNumWorkers:t}){const{t:r}=_("optimize"),o=navigator.hardwareConcurrency||8;return a(rt,{title:`${r("numWorkers")}: ${e}`,children:zt(1,o).map(n=>a(tt,{onClick:()=>t(n),children:r("workers",{count:n})},n))})}function po({teamId:e,children:t}){const r=ct(e),o=se(r.loadoutMetadata[0]),n=se(r.loadoutMetadata[1]),s=se(r.loadoutMetadata[2]),l=se(r.loadoutMetadata[3]),d=p.useMemo(()=>({calc:rr([...or(r.loadoutMetadata.map((u,m)=>u===void 0?void 0:Qe[m+1]).filter(u=>!!u)),...o?ie(0,o):[],...n?ie(1,n):[],...s?ie(2,s):[],...l?ie(3,l):[],ae.common.lvl.add(80),ae.common.res.add(.1),ae.common.isBroken.add(0),ae.common.maxToughness.add(100),It.common.critMode.add("avg")])}),[o,n,s,l,r.loadoutMetadata]);return a(Lt.Provider,{value:d,children:t})}function se(e){var l;const{database:t}=P(),r=et((l=t.loadouts.get(e==null?void 0:e.loadoutId))==null?void 0:l.key),o=t.builds.get(e==null?void 0:e.buildId),n=dr(o==null?void 0:o.lightConeId),s=st(o==null?void 0:o.relicIds);return{character:r,lightCone:n,relics:s}}function ie(e,{character:t,lightCone:r,relics:o}){return t?[...ar(`${e}`,...nr(t),...sr(r),...ir(Object.values(o).filter(n=>!!n).map(n=>({set:n.setKey,stats:[...n.substats.filter(({key:s})=>s!=="").map(s=>({key:s.key,value:s.accurateValue})),{key:n.mainStatKey,value:n.mainStatVal}]})))),...cr("0",{all:{RuanMei:{skillOvertone:1,ultZone:1,e4Broken:1}}})]:[]}var Se={},mo=ke;Object.defineProperty(Se,"__esModule",{value:!0});var dt=Se.default=void 0,fo=mo(ye()),ho=k,go=(0,fo.default)((0,ho.jsx)("path",{d:"M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"}),"BorderColor");dt=Se.default=go;function bo({teamId:e,charKey:t,tab:r=""}){const{t:o}=_("page_team"),n=Ye(),{database:s}=P(),l=s.teams.get(e),{loadoutMetadata:d}=l,u=Ue(),m=jt(u.breakpoints.down("md")),[i,c]=p.useState(!1),h=b=>{s.teams.set(e,{name:b})},f=b=>{s.teams.set(e,{description:b})};return x(w,{sx:()=>({borderBottom:"1px rgb(200,200,200,0.3) solid","& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px",backgroundColor:"rgb(200,200,200,0.5)"}}),children:[a(mr,{onClick:()=>c(!0),children:a(Ot,{placement:"top",title:x(w,{children:[x(w,{sx:{display:"flex",color:"info.light",gap:1},children:[a(dt,{}),a(R,{children:a("strong",{children:o`team.editNameDesc`})})]}),!!l.description&&a(R,{children:l.description})]}),children:a(V,{sx:{display:"flex",justifyContent:"center","&:hover":{color:"info.light"}},children:x(R,{variant:"h5",sx:{display:"flex",gap:1,alignItems:"center",justifyContent:"center",textShadow:"#000 0 0 10px !important"},children:[a(ue,{}),l.name]})})})}),a(Kt,{open:i,onClose:()=>c(!1),children:x(q,{children:[a(tr,{title:o`team.editNameDesc`,avatar:a(ue,{}),titleTypographyProps:{variant:"h6"},action:a(Wt,{onClick:()=>c(!1),children:a(ot,{})})}),a(me,{}),a(V,{children:x(w,{display:"flex",flexDirection:"column",gap:2,sx:{mt:2},children:[a(qe,{label:o`team.name`,value:l.name,onChange:b=>h(b),autoFocus:!0}),a(qe,{label:o`team.desc`,value:l.description,onChange:b=>f(b),multiline:!0,minRows:4})]})})]})}),a(me,{}),x(Vt,{variant:"fullWidth",value:t??"team",orientation:m?"vertical":"horizontal",children:[a(Ae,{icon:a(ue,{}),iconPosition:"start",value:"team",label:"Team Settings",onClick:()=>n(`/teams/${e}/`)}),d.map((b,g)=>{var S;const y=b&&((S=s.loadouts.get(b==null?void 0:b.loadoutId))==null?void 0:S.key);return a(Ae,{icon:a(qt,{}),iconPosition:"start",value:y??g,disabled:!d[g],label:y?a(R,{children:o(`charNames_gen:${y}`)}):`Character ${g+1}`,onClick:()=>y&&n(`/teams/${e}/${y}/${r}`)},g)})]})]})}function vo({teamId:e}){const{database:t}=P(),r=t.teams.get(e);return x(w,{children:[e,r.loadoutMetadata.map((o,n)=>a(xo,{loadoutMetadataIndex:n,teamId:e},`${n}_${o==null?void 0:o.loadoutId}`))]})}function xo({loadoutMetadataIndex:e,teamId:t}){var d;const{database:r}=P(),o=r.teams.get(t),n=(d=o.loadoutMetadata[e])==null?void 0:d.loadoutId,s=r.loadouts.get(n);function l(u){if(u===""){r.teams.set(t,i=>i.loadoutMetadata[e]=void 0);return}r.chars.getOrCreate(u);const m=o.loadoutMetadata.findIndex(i=>{var c;return i&&((c=r.loadouts.get(i.loadoutId))==null?void 0:c.key)===u});if(m===-1){let i=r.loadouts.keys.find(c=>r.loadouts.get(c).key===u);i||(i=r.loadouts.new(u)),r.teams.set(t,c=>{c.loadoutMetadata[e]={loadoutId:i}})}else{if(m===e)return;const i=o.loadoutMetadata[m],c=o.loadoutMetadata[e];r.teams.set(t,h=>{h.loadoutMetadata[e]=i,h.loadoutMetadata[m]=c})}}return a(so,{charKey:(s==null?void 0:s.key)??"",setCharKey:l})}var we={},Co=ke;Object.defineProperty(we,"__esModule",{value:!0});var ge=we.default=void 0,yo=Co(ye()),ko=k,$o=(0,yo.default)((0,ko.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");ge=we.default=$o;const So=5e4;class wo{constructor(t,r,o,n,s){this.calc=t,this.optTarget=r,this.relicsBySlot=o,this.numWorkers=n,this.setProgress=s,this.worker=new Worker(new URL(""+new URL("parentWorker-CE4m1G7S.js",import.meta.url).href,import.meta.url),{type:"module"})}async optimize(){return await new Promise((r,o)=>{this.worker.onmessage=({data:s})=>{switch(s.resultType){case"progress":this.setProgress(s.progress);break;case"done":r(s.buildResults);break;case"err":console.log(s),o();break}};const n={command:"start",relicsBySlot:this.relicsBySlot,detachedNodes:this.detachNodes(),numWorkers:this.numWorkers};this.worker.postMessage(n)})}async terminate(){const t={command:"terminate"};this.worker.postMessage(t),await new Promise((r,o)=>{this.worker.onmessage=({data:n})=>{switch(n.resultType){case"terminated":r();break;case"err":console.log(n),o();break}}}),this.worker.terminate()}detachNodes(){const t=new Set(Gt);return lr([this.optTarget],this.calc,o=>{if(o.src==="0"&&o.et==="self"){if(o.sheet==="dyn"&&o.qt==="premod")return{q:o.q};if(o.q==="count"&&t.has(o.sheet))return{q:o.sheet}}})}}var Re={},Ro=ke;Object.defineProperty(Re,"__esModule",{value:!0});var ut=Re.default=void 0,Mo=Ro(ye()),To=k,Do=(0,Mo.default)((0,To.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");ut=Re.default=Do;function Po(){const{t:e}=_("optimize"),{database:t}=P(),{calc:r}=Ce(),[o,n]=p.useState(8),[s,l]=p.useState(void 0),[d,u]=p.useState(void 0),m=p.useMemo(()=>t.relics.values.reduce((M,$)=>(M[$.slotKey].push($),M),{head:[],hand:[],feet:[],body:[],sphere:[],rope:[]}),[t.relics.values]),i=Object.values(m).reduce((M,$)=>M*$.length,1),[c,h]=p.useState(void 0),[f,b]=p.useState(!1),g=p.useRef(()=>{});p.useEffect(()=>()=>g.current(),[]);const y=p.useCallback(async()=>{if(!d||!r)return;const M=new Promise(U=>g.current=U);l(void 0),b(!0);const $=new wo(r,d,m,o,l);M.then(async()=>await $.terminate());const z=await $.optimize();await $.terminate(),g.current=()=>{},b(!1),h(z[0])},[r,o,d,m]),S=p.useCallback(()=>{g.current(),b(!1)},[g]);return a(q,{bgt:"dark",children:x(V,{children:[a(lo,{}),x(fe,{children:[a(R,{variant:"h5",children:e("optimize")}),x(w,{children:[a(lt,{optTarget:d,setOptTarget:u}),a(uo,{numWorkers:o,setNumWorkers:n}),a(ce,{onClick:f?S:y,color:f?"error":"primary",startIcon:f?a(ot,{}):a(ut,{}),children:e(f?"cancel":"optimize")})]}),s&&a(_o,{progress:s,totalPermutations:i}),c&&x(w,{children:[x(R,{children:["Best: ",c.value]}),a(no,{build:c.ids})]})]})]})})}function _o({progress:e,totalPermutations:t}){const{t:r}=_("optimize");return x(w,{children:[x(R,{children:[r("totalProgress"),": ",e.numBuildsComputed.toLocaleString()," /"," ",t.toLocaleString()]}),x(R,{children:[r("buildsKept"),": ",e.numBuildsKept.toLocaleString()," /"," ",So.toLocaleString()]}),a(to,{variant:"determinate",value:e.numBuildsComputed/t*100})]})}function Eo({tab:e}){const{team:t,loadout:{key:r}}=Ze(),{database:o}=P(),{character:n}=Ut(),{calc:s}=Ce(),[l,d]=p.useState(void 0),u=t.loadoutMetadata.findIndex(i=>{var c;return((c=o.loadouts.get(i==null?void 0:i.loadoutId))==null?void 0:c.key)===r}),m=Fe(Xe,{et:"self",src:Qe[u+1],dst:"all"});return x(w,{children:[e,a(Yt,{characterKey:l,onClose:()=>d(void 0)}),a(Zt,{character:n}),x(fe,{gap:1,pt:1,children:[a(q,{bgt:"dark",children:x(V,{children:[a(ce,{disabled:!r,onClick:()=>r&&d(r),children:"Edit Character"}),x(Be,{children:[a(Ie,{expandIcon:a(ge,{}),children:"All target values, if sheet is created"}),a(ze,{children:a(fe,{children:s==null?void 0:s.listFormulas(m.listing.formulas).map((i,c)=>{const h=s.compute(i),f=i.tag.name||i.tag.q;return x(w,{children:[x(R,{children:[f,": ",h.val]}),x(Be,{children:[x(Ie,{expandIcon:a(ge,{}),children:["debug for ",f]}),a(ze,{children:a(R,{component:"pre",children:JSON.stringify(s.toDebug().compute(i),void 0,2)})})]})]},`${f}${c}`)})})})]})]})}),a(Po,{})]})]})}const Ao=a(xe,{variant:"rectangular",width:"100%",height:1e3});function Uo(){const{database:e}=P(),{teamId:t}=Ht(),r=!t||!e.teams.keys.includes(t);return p.useEffect(()=>{r||e.teams.set(t,{lastEdit:Date.now()})},[t,e.teams,r]),r?a(Xt,{to:"/teams"}):a(w,{display:"flex",flexDirection:"column",gap:1,children:a(p.Suspense,{fallback:Ao,children:t&&a(No,{teamId:t})})})}function No({teamId:e}){var f;const{database:t}=P(),r=Ye(),o=ct(e),{loadoutMetadata:n}=o,{params:{characterKey:s}}=pe({path:"/teams/:teamId/:characterKey",end:!1})??{params:{}},{params:{tab:l}}=pe({path:"/teams/:teamId/:characterKey/:tab"})??{params:{}},d=p.useMemo(()=>n.find(g=>{var y;return(g==null?void 0:g.loadoutId)&&((y=t.loadouts.get(g.loadoutId))==null?void 0:y.key)===s}),[n,t.loadouts,s]);p.useEffect(()=>{window.scrollTo({top:0})},[]),p.useEffect(()=>{d||r("",{replace:!0})},[d,r]);const u=d==null?void 0:d.loadoutId,m=(f=t.loadouts.get(u))==null?void 0:f.key,{t:i}=_(["charNames_gen","page_character"]);ro(p.useMemo(()=>{const b=i(m?"charNames_gen:Character":"Team Settings"),g=l?i(`page_character:tabs.${l}`):m?i("Loadout/Build"):l;return`${o.name} - ${b}${g?` - ${g}`:""}`},[m,i,l,o.name]));const c=oo(u??""),h=p.useMemo(()=>{if(!(!u||!c||!d))return{teamId:e,team:o,loadoutId:u,loadout:c,loadoutMetadatum:d}},[d,o,c,u,e]);return a(po,{teamId:e,children:x(w,{sx:{display:"flex",gap:1,flexDirection:"column",mx:1,mt:2},children:[a(q,{children:a(bo,{teamId:e,charKey:m,tab:l})}),a(w,{children:h?a(Jt.Provider,{value:h,children:a(Bo,{})}):a(vo,{teamId:e})})]})})}function Bo({tab:e}){const{loadout:{key:t}}=Ze(),r=et(t),o=p.useMemo(()=>r&&{character:r},[r]);return o?a(Ft.Provider,{value:o,children:a(Qt,{children:a(Ne,{path:":characterKey",children:a(Ne,{path:"*",index:!0,element:a(Eo,{tab:e})})})})}):a(xe,{variant:"rectangular",width:"100%",height:1e3})}export{Uo as default};
