import{g as Bt,a as Wt,c as We,j as y,s as ae,P as yr,b as re,d as Ve,l as Ke,_ as v,r as h,u as Ut,e as qt,f as _t,I as Gt,C as xr,h as be,i as Yt,k as Sr,m as kr,n as Pt,o as Cr,p as ut,q as He,t as dt,v as Fe,w as Mt,x as Xt,y as wr,z as fe,A as Ce,B as we,D as n,E as $r,F as Pe,G as Rr,M as _e,H as ht,J as Lr,K as Qt,L as _r,N as Pr,O as Mr,Q as _,R as Zt,S as Ar,T as Ir,U as zr,V as jr,W as Tr,X as pt,Y as At,Z as It,$ as Nr,a0 as le,a1 as Dr,a2 as U,a3 as he,a4 as Jt,a5 as Or,a6 as me,a7 as Er,a8 as Hr,a9 as er,aa as Fr,ab as Vr,ac as zt,ad as Kr,ae as Br,af as Wr,ag as Ur,ah as tr,ai as qr,aj as ne,ak as Gr,al as Yr,am as ft,an as Xr,ao as Qr,ap as mt,aq as Zr}from"./index-Cln99dD_.js";import{u as rr,a as Jr,b as ea}from"./useInfScroll-C8wN91kX.js";import{d as vt}from"./Add-C8Sk2rHB.js";import{C as ta}from"./CardHeader-StVLowJj.js";const ra={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},aa=ra;function Le(e,t=Number.MIN_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,a))}function oa(e){return Wt("MuiAlert",e)}const na=Bt("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),jt=na,la=We(y.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),sa=We(y.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ia=We(y.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ca=We(y.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ua=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],da=e=>{const{variant:t,color:a,severity:r,classes:u}=e,d={root:["root",`color${re(a||r)}`,`${t}${re(a||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return Yt(d,oa,u)},pa=ae(yr,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${re(a.color||a.severity)}`]]}})(({theme:e})=>{const t=e.palette.mode==="light"?Ve:Ke,a=e.palette.mode==="light"?Ke:Ve;return v({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(([,r])=>r.main&&r.light).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:t(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:a(e.palette[r].light,.9),[`& .${jt.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(([,r])=>r.main&&r.light).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:t(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${jt.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(([,r])=>r.main&&r.dark).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:v({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${r}FilledColor`],backgroundColor:e.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[r].dark:e.palette[r].main,color:e.palette.getContrastText(e.palette[r].main)})}))]})}),fa=ae("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ma=ae("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Tt=ae("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Nt={success:y.jsx(la,{fontSize:"inherit"}),warning:y.jsx(sa,{fontSize:"inherit"}),error:y.jsx(ia,{fontSize:"inherit"}),info:y.jsx(ca,{fontSize:"inherit"})},va=h.forwardRef(function(t,a){const r=Ut({props:t,name:"MuiAlert"}),{action:u,children:d,className:i,closeText:f="Close",color:m,components:T={},componentsProps:P={},icon:o,iconMapping:R=Nt,onClose:z,role:L="alert",severity:k="success",slotProps:b={},slots:M={},variant:B="standard"}=r,N=qt(r,ua),D=v({},r,{color:m,severity:k,variant:B,colorSeverity:m||k}),w=da(D),E={slots:v({closeButton:T.CloseButton,closeIcon:T.CloseIcon},M),slotProps:v({},P,b)},[H,se]=_t("closeButton",{elementType:Gt,externalForwardedProps:E,ownerState:D}),[q,X]=_t("closeIcon",{elementType:xr,externalForwardedProps:E,ownerState:D});return y.jsxs(pa,v({role:L,elevation:0,ownerState:D,className:be(w.root,i),ref:a},N,{children:[o!==!1?y.jsx(fa,{ownerState:D,className:w.icon,children:o||R[k]||Nt[k]}):null,y.jsx(ma,{ownerState:D,className:w.message,children:d}),u!=null?y.jsx(Tt,{ownerState:D,className:w.action,children:u}):null,u==null&&z?y.jsx(Tt,{ownerState:D,className:w.action,children:y.jsx(H,v({size:"small","aria-label":f,title:f,color:"inherit",onClick:z},se,{children:y.jsx(q,v({fontSize:"small"},X))}))}):null]}))}),ha=va;function ba(e,t,a=(r,u)=>r===u){return e.length===t.length&&e.every((r,u)=>a(r,t[u]))}const ga=2;function ar(e,t){return e-t}function Dt(e,t){var a;const{index:r}=(a=e.reduce((u,d,i)=>{const f=Math.abs(t-d);return u===null||f<u.distance||f===u.distance?{distance:f,index:i}:u},null))!=null?a:{};return r}function Ne(e,t){if(t.current!==void 0&&e.changedTouches){const a=e;for(let r=0;r<a.changedTouches.length;r+=1){const u=a.changedTouches[r];if(u.identifier===t.current)return{x:u.clientX,y:u.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Be(e,t,a){return(e-t)*100/(a-t)}function ya(e,t,a){return(a-t)*e+t}function xa(e){if(Math.abs(e)<1){const a=e.toExponential().split("e-"),r=a[0].split(".")[1];return(r?r.length:0)+parseInt(a[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Sa(e,t,a){const r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(xa(t)))}function Ot({values:e,newValue:t,index:a}){const r=e.slice();return r[a]=t,r.sort(ar)}function De({sliderRef:e,activeIndex:t,setActive:a}){var r,u;const d=He(e.current);if(!((r=e.current)!=null&&r.contains(d.activeElement))||Number(d==null||(u=d.activeElement)==null?void 0:u.getAttribute("data-index"))!==t){var i;(i=e.current)==null||i.querySelector(`[type="range"][data-index="${t}"]`).focus()}a&&a(t)}function Oe(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?ba(e,t):!1}const ka={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Ca=e=>e;let Ee;function Et(){return Ee===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Ee=CSS.supports("touch-action","none"):Ee=!0),Ee}function wa(e){const{"aria-labelledby":t,defaultValue:a,disabled:r=!1,disableSwap:u=!1,isRtl:d=!1,marks:i=!1,max:f=100,min:m=0,name:T,onChange:P,onChangeCommitted:o,orientation:R="horizontal",rootRef:z,scale:L=Ca,step:k=1,shiftStep:b=10,tabIndex:M,value:B}=e,N=h.useRef(),[D,w]=h.useState(-1),[E,H]=h.useState(-1),[se,q]=h.useState(!1),X=h.useRef(0),[G,de]=Sr({controlled:B,default:a??m,name:"Slider"}),Y=P&&((s,c,p)=>{const x=s.nativeEvent||s,S=new x.constructor(x.type,x);Object.defineProperty(S,"target",{writable:!0,value:{value:c,name:T}}),P(S,c,p)}),ie=Array.isArray(G);let l=ie?G.slice().sort(ar):[G];l=l.map(s=>s==null?m:Le(s,m,f));const A=i===!0&&k!==null?[...Array(Math.floor((f-m)/k)+1)].map((s,c)=>({value:m+k*c})):i||[],$=A.map(s=>s.value),{isFocusVisibleRef:F,onBlur:ge,onFocus:$e,ref:Ue}=kr(),[Me,ve]=h.useState(-1),W=h.useRef(),Ae=Pt(Ue,W),Ie=Pt(z,Ae),ye=s=>c=>{var p;const x=Number(c.currentTarget.getAttribute("data-index"));$e(c),F.current===!0&&ve(x),H(x),s==null||(p=s.onFocus)==null||p.call(s,c)},xe=s=>c=>{var p;ge(c),F.current===!1&&ve(-1),H(-1),s==null||(p=s.onBlur)==null||p.call(s,c)},ze=(s,c)=>{const p=Number(s.currentTarget.getAttribute("data-index")),x=l[p],S=$.indexOf(x);let g=c;if(A&&k==null){const te=$[$.length-1];g>te?g=te:g<$[0]?g=$[0]:g=g<x?$[S-1]:$[S+1]}if(g=Le(g,m,f),ie){u&&(g=Le(g,l[p-1]||-1/0,l[p+1]||1/0));const te=g;g=Ot({values:l,newValue:g,index:p});let oe=p;u||(oe=g.indexOf(te)),De({sliderRef:W,activeIndex:oe})}de(g),ve(p),Y&&!Oe(g,G)&&Y(s,g,p),o&&o(s,g)},qe=s=>c=>{var p;if(k!==null){const x=Number(c.currentTarget.getAttribute("data-index")),S=l[x];let g=null;(c.key==="ArrowLeft"||c.key==="ArrowDown")&&c.shiftKey||c.key==="PageDown"?g=Math.max(S-b,m):((c.key==="ArrowRight"||c.key==="ArrowUp")&&c.shiftKey||c.key==="PageUp")&&(g=Math.min(S+b,f)),g!==null&&(ze(c,g),c.preventDefault())}s==null||(p=s.onKeyDown)==null||p.call(s,c)};Cr(()=>{if(r&&W.current.contains(document.activeElement)){var s;(s=document.activeElement)==null||s.blur()}},[r]),r&&D!==-1&&w(-1),r&&Me!==-1&&ve(-1);const Ge=s=>c=>{var p;(p=s.onChange)==null||p.call(s,c),ze(c,c.target.valueAsNumber)},je=h.useRef();let ce=R;d&&R==="horizontal"&&(ce+="-reverse");const j=({finger:s,move:c=!1})=>{const{current:p}=W,{width:x,height:S,bottom:g,left:te}=p.getBoundingClientRect();let oe;ce.indexOf("vertical")===0?oe=(g-s.y)/S:oe=(s.x-te)/x,ce.indexOf("-reverse")!==-1&&(oe=1-oe);let C;if(C=ya(oe,m,f),k)C=Sa(C,k,m);else{const ke=Dt($,C);C=$[ke]}C=Le(C,m,f);let Q=0;if(ie){c?Q=je.current:Q=Dt(l,C),u&&(C=Le(C,l[Q-1]||-1/0,l[Q+1]||1/0));const ke=C;C=Ot({values:l,newValue:C,index:Q}),u&&c||(Q=C.indexOf(ke),je.current=Q)}return{newValue:C,activeIndex:Q}},I=ut(s=>{const c=Ne(s,N);if(!c)return;if(X.current+=1,s.type==="mousemove"&&s.buttons===0){J(s);return}const{newValue:p,activeIndex:x}=j({finger:c,move:!0});De({sliderRef:W,activeIndex:x,setActive:w}),de(p),!se&&X.current>ga&&q(!0),Y&&!Oe(p,G)&&Y(s,p,x)}),J=ut(s=>{const c=Ne(s,N);if(q(!1),!c)return;const{newValue:p}=j({finger:c,move:!0});w(-1),s.type==="touchend"&&H(-1),o&&o(s,p),N.current=void 0,ee()}),pe=ut(s=>{if(r)return;Et()||s.preventDefault();const c=s.changedTouches[0];c!=null&&(N.current=c.identifier);const p=Ne(s,N);if(p!==!1){const{newValue:S,activeIndex:g}=j({finger:p});De({sliderRef:W,activeIndex:g,setActive:w}),de(S),Y&&!Oe(S,G)&&Y(s,S,g)}X.current=0;const x=He(W.current);x.addEventListener("touchmove",I,{passive:!0}),x.addEventListener("touchend",J,{passive:!0})}),ee=h.useCallback(()=>{const s=He(W.current);s.removeEventListener("mousemove",I),s.removeEventListener("mouseup",J),s.removeEventListener("touchmove",I),s.removeEventListener("touchend",J)},[J,I]);h.useEffect(()=>{const{current:s}=W;return s.addEventListener("touchstart",pe,{passive:Et()}),()=>{s.removeEventListener("touchstart",pe),ee()}},[ee,pe]),h.useEffect(()=>{r&&ee()},[r,ee]);const Ye=s=>c=>{var p;if((p=s.onMouseDown)==null||p.call(s,c),r||c.defaultPrevented||c.button!==0)return;c.preventDefault();const x=Ne(c,N);if(x!==!1){const{newValue:g,activeIndex:te}=j({finger:x});De({sliderRef:W,activeIndex:te,setActive:w}),de(g),Y&&!Oe(g,G)&&Y(c,g,te)}X.current=0;const S=He(W.current);S.addEventListener("mousemove",I,{passive:!0}),S.addEventListener("mouseup",J)},K=Be(ie?l[0]:m,m,f),Se=Be(l[l.length-1],m,f)-K,Xe=(s={})=>{const c=dt(s),p={onMouseDown:Ye(c||{})},x=v({},c,p);return v({},s,{ref:Ie},x)},Qe=s=>c=>{var p;(p=s.onMouseOver)==null||p.call(s,c);const x=Number(c.currentTarget.getAttribute("data-index"));H(x)},Ze=s=>c=>{var p;(p=s.onMouseLeave)==null||p.call(s,c),H(-1)};return{active:D,axis:ce,axisProps:ka,dragging:se,focusedThumbIndex:Me,getHiddenInputProps:(s={})=>{var c;const p=dt(s),x={onChange:Ge(p||{}),onFocus:ye(p||{}),onBlur:xe(p||{}),onKeyDown:qe(p||{})},S=v({},p,x);return v({tabIndex:M,"aria-labelledby":t,"aria-orientation":R,"aria-valuemax":L(f),"aria-valuemin":L(m),name:T,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(c=e.step)!=null?c:void 0,disabled:r},s,S,{style:v({},aa,{direction:d?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Xe,getThumbProps:(s={})=>{const c=dt(s),p={onMouseOver:Qe(c||{}),onMouseLeave:Ze(c||{})};return v({},s,c,p)},marks:A,open:E,range:ie,rootRef:Ie,trackLeap:Se,trackOffset:K,values:l,getThumbStyle:s=>({pointerEvents:D!==-1&&D!==s?"none":void 0})}}const $a=e=>!e||!Fe(e);function Ra(e){return Wt("MuiSlider",e)}const La=Bt("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Z=La,_a=e=>{const{open:t}=e;return{offset:be(t&&Z.valueLabelOpen),circle:Z.valueLabelCircle,label:Z.valueLabelLabel}};function Pa(e){const{children:t,className:a,value:r}=e,u=_a(e);return t?h.cloneElement(t,{className:be(t.props.className)},y.jsxs(h.Fragment,{children:[t.props.children,y.jsx("span",{className:be(u.offset,a),"aria-hidden":!0,children:y.jsx("span",{className:u.circle,children:y.jsx("span",{className:u.label,children:r})})})]})):null}const Ma=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function Ht(e){return e}const Aa=ae("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`color${re(a.color)}`],a.size!=="medium"&&t[`size${re(a.size)}`],a.marked&&t.marked,a.orientation==="vertical"&&t.vertical,a.track==="inverted"&&t.trackInverted,a.track===!1&&t.trackFalse]}})(({theme:e})=>{var t;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${Z.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${Z.dragging}`]:{[`& .${Z.thumb}, & .${Z.track}`]:{transition:"none"}},variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(a=>{var r;return((r=e.vars)!=null?r:e).palette[a].main}).map(a=>({props:{color:a},style:{color:(e.vars||e).palette[a].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),Ia=ae("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),za=ae("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>{var t;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(a=>{var r;return((r=e.vars)!=null?r:e).palette[a].main}).map(a=>({props:{color:a,track:"inverted"},style:v({},e.vars?{backgroundColor:e.vars.palette.Slider[`${a}Track`],borderColor:e.vars.palette.Slider[`${a}Track`]}:v({backgroundColor:Ke(e.palette[a].main,.62),borderColor:Ke(e.palette[a].main,.62)},e.applyStyles("dark",{backgroundColor:Ve(e.palette[a].main,.5)}),e.applyStyles("dark",{borderColor:Ve(e.palette[a].main,.5)})))}))]}}),ja=ae("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.thumb,t[`thumbColor${re(a.color)}`],a.size!=="medium"&&t[`thumbSize${re(a.size)}`]]}})(({theme:e})=>{var t;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${Z.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(a=>{var r;return((r=e.vars)!=null?r:e).palette[a].main}).map(a=>({props:{color:a},style:{[`&:hover, &.${Z.focusVisible}`]:v({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[a].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${Mt(e.palette[a].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${Z.active}`]:v({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[a].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${Mt(e.palette[a].main,.16)}`})}}))]}}),Ta=ae(Pa,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e})=>v({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${Z.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${Z.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),Na=ae("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Xt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:a}=e;return[t.mark,a&&t.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),Da=ae("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Xt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e})=>v({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),Oa=e=>{const{disabled:t,dragging:a,marked:r,orientation:u,track:d,classes:i,color:f,size:m}=e,T={root:["root",t&&"disabled",a&&"dragging",r&&"marked",u==="vertical"&&"vertical",d==="inverted"&&"trackInverted",d===!1&&"trackFalse",f&&`color${re(f)}`,m&&`size${re(m)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",m&&`thumbSize${re(m)}`,f&&`thumbColor${re(f)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Yt(T,Ra,i)},Ea=({children:e})=>e,Ha=h.forwardRef(function(t,a){var r,u,d,i,f,m,T,P,o,R,z,L,k,b,M,B,N,D,w,E,H,se,q,X;const G=Ut({props:t,name:"MuiSlider"}),de=wr(),{"aria-label":Y,"aria-valuetext":ie,"aria-labelledby":l,component:A="span",components:$={},componentsProps:F={},color:ge="primary",classes:$e,className:Ue,disableSwap:Me=!1,disabled:ve=!1,getAriaLabel:W,getAriaValueText:Ae,marks:Ie=!1,max:ye=100,min:xe=0,orientation:ze="horizontal",shiftStep:qe=10,size:Ge="medium",step:je=1,scale:ce=Ht,slotProps:j,slots:I,track:J="normal",valueLabelDisplay:pe="off",valueLabelFormat:ee=Ht}=G,Ye=qt(G,Ma),K=v({},G,{isRtl:de,max:ye,min:xe,classes:$e,disabled:ve,disableSwap:Me,orientation:ze,marks:Ie,color:ge,size:Ge,step:je,shiftStep:qe,scale:ce,track:J,valueLabelDisplay:pe,valueLabelFormat:ee}),{axisProps:Se,getRootProps:Xe,getHiddenInputProps:Qe,getThumbProps:Ze,open:Ct,active:Je,axis:Re,focusedThumbIndex:s,range:c,dragging:p,marks:x,values:S,trackOffset:g,trackLeap:te,getThumbStyle:oe}=wa(v({},K,{rootRef:a}));K.marked=x.length>0&&x.some(O=>O.label),K.dragging=p,K.focusedThumbIndex=s;const C=Oa(K),Q=(r=(u=I==null?void 0:I.root)!=null?u:$.Root)!=null?r:Aa,ke=(d=(i=I==null?void 0:I.rail)!=null?i:$.Rail)!=null?d:Ia,wt=(f=(m=I==null?void 0:I.track)!=null?m:$.Track)!=null?f:za,$t=(T=(P=I==null?void 0:I.thumb)!=null?P:$.Thumb)!=null?T:ja,Rt=(o=(R=I==null?void 0:I.valueLabel)!=null?R:$.ValueLabel)!=null?o:Ta,et=(z=(L=I==null?void 0:I.mark)!=null?L:$.Mark)!=null?z:Na,tt=(k=(b=I==null?void 0:I.markLabel)!=null?b:$.MarkLabel)!=null?k:Da,Lt=(M=(B=I==null?void 0:I.input)!=null?B:$.Input)!=null?M:"input",rt=(N=j==null?void 0:j.root)!=null?N:F.root,ur=(D=j==null?void 0:j.rail)!=null?D:F.rail,at=(w=j==null?void 0:j.track)!=null?w:F.track,ot=(E=j==null?void 0:j.thumb)!=null?E:F.thumb,nt=(H=j==null?void 0:j.valueLabel)!=null?H:F.valueLabel,dr=(se=j==null?void 0:j.mark)!=null?se:F.mark,pr=(q=j==null?void 0:j.markLabel)!=null?q:F.markLabel,fr=(X=j==null?void 0:j.input)!=null?X:F.input,mr=fe({elementType:Q,getSlotProps:Xe,externalSlotProps:rt,externalForwardedProps:Ye,additionalProps:v({},$a(Q)&&{as:A}),ownerState:v({},K,rt==null?void 0:rt.ownerState),className:[C.root,Ue]}),vr=fe({elementType:ke,externalSlotProps:ur,ownerState:K,className:C.rail}),hr=fe({elementType:wt,externalSlotProps:at,additionalProps:{style:v({},Se[Re].offset(g),Se[Re].leap(te))},ownerState:v({},K,at==null?void 0:at.ownerState),className:C.track}),lt=fe({elementType:$t,getSlotProps:Ze,externalSlotProps:ot,ownerState:v({},K,ot==null?void 0:ot.ownerState),className:C.thumb}),br=fe({elementType:Rt,externalSlotProps:nt,ownerState:v({},K,nt==null?void 0:nt.ownerState),className:C.valueLabel}),st=fe({elementType:et,externalSlotProps:dr,ownerState:K,className:C.mark}),it=fe({elementType:tt,externalSlotProps:pr,ownerState:K,className:C.markLabel}),gr=fe({elementType:Lt,getSlotProps:Qe,externalSlotProps:fr,ownerState:K});return y.jsxs(Q,v({},mr,{children:[y.jsx(ke,v({},vr)),y.jsx(wt,v({},hr)),x.filter(O=>O.value>=xe&&O.value<=ye).map((O,V)=>{const ct=Be(O.value,xe,ye),Te=Se[Re].offset(ct);let ue;return J===!1?ue=S.indexOf(O.value)!==-1:ue=J==="normal"&&(c?O.value>=S[0]&&O.value<=S[S.length-1]:O.value<=S[0])||J==="inverted"&&(c?O.value<=S[0]||O.value>=S[S.length-1]:O.value>=S[0]),y.jsxs(h.Fragment,{children:[y.jsx(et,v({"data-index":V},st,!Fe(et)&&{markActive:ue},{style:v({},Te,st.style),className:be(st.className,ue&&C.markActive)})),O.label!=null?y.jsx(tt,v({"aria-hidden":!0,"data-index":V},it,!Fe(tt)&&{markLabelActive:ue},{style:v({},Te,it.style),className:be(C.markLabel,it.className,ue&&C.markLabelActive),children:O.label})):null]},V)}),S.map((O,V)=>{const ct=Be(O,xe,ye),Te=Se[Re].offset(ct),ue=pe==="off"?Ea:Rt;return y.jsx(ue,v({},!Fe(ue)&&{valueLabelFormat:ee,valueLabelDisplay:pe,value:typeof ee=="function"?ee(ce(O),V):ee,index:V,open:Ct===V||Je===V||pe==="on",disabled:ve},br,{children:y.jsx($t,v({"data-index":V},lt,{className:be(C.thumb,lt.className,Je===V&&C.active,s===V&&C.focusVisible),style:v({},Te,oe(V),lt.style),children:y.jsx(Lt,v({"data-index":V,"aria-label":W?W(V):Y,"aria-valuenow":ce(O),"aria-labelledby":l,"aria-valuetext":Ae?Ae(ce(O),V):ie,value:S[V]},gr))}))}),V)})]}))}),Fa=Ha;var bt={},Va=we;Object.defineProperty(bt,"__esModule",{value:!0});var or=bt.default=void 0,Ka=Va(Ce()),Ba=y,Wa=(0,Ka.default)((0,Ba.jsx)("path",{d:"m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"}),"StarRounded");or=bt.default=Wa;const Ft=({stars:e=1,colored:t=!1,inline:a=!1})=>n($r,{color:t?"warning":void 0,children:[...Array(e).keys()].map((r,u)=>n(or,{fontSize:a?"inherit":void 0,sx:a?{verticalAlign:"text-top"}:void 0},u))});var gt={},Ua=we;Object.defineProperty(gt,"__esModule",{value:!0});var nr=gt.default=void 0,qa=Ua(Ce()),Ga=y,Ya=(0,qa.default)((0,Ga.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");nr=gt.default=Ya;var yt={},Xa=we;Object.defineProperty(yt,"__esModule",{value:!0});var lr=yt.default=void 0,Qa=Xa(Ce()),Za=y,Ja=(0,Qa.default)((0,Za.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");lr=yt.default=Ja;var xt={},eo=we;Object.defineProperty(xt,"__esModule",{value:!0});var sr=xt.default=void 0,to=eo(Ce()),ro=y,ao=(0,to.default)((0,ro.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");sr=xt.default=ao;var St={},oo=we;Object.defineProperty(St,"__esModule",{value:!0});var ir=St.default=void 0,no=oo(Ce()),lo=y,so=(0,no.default)((0,lo.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");ir=St.default=so;var kt={},io=we;Object.defineProperty(kt,"__esModule",{value:!0});var cr=kt.default=void 0,co=io(Ce()),uo=y,po=(0,co.default)((0,uo.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");cr=kt.default=po;function fo({rarity:e,onRarityChange:t,filter:a,...r}){const{t:u}=Pe("relic");return n(ht,{...r,title:e?n(Ft,{stars:e,inline:!0}):u`editor.rarity`,color:e?"success":"primary",children:Rr.map(d=>n(_e,{disabled:!a(d),onClick:()=>t(d),children:n(Ft,{stars:d,inline:!0})},d))})}function mo({relicSetKey:e,setRelicSetKey:t,label:a="",...r}){const{t:u}=Pe(["relic","relicNames_gen"]);a=a||u("relic:autocompleteLabels.set");const d=h.useMemo(()=>Lr.map(f=>({key:f,label:u(`relicNames_gen:${f}`)})),[u]),i=h.useCallback(f=>t(f??""),[t]);return n(_r,{options:d,valueKey:e,onChange:i,toImg:()=>n(Qt,{children:" "}),label:a,...r})}function vo({index:e,relic:t,setSubstat:a}){const{t:r}=Pe("relic"),{mainStatKey:u="",rarity:d=5}=t??{},{key:i="",value:f=0,rolls:m=[],efficiency:T=0}=(t==null?void 0:t.substats[e])??{},P=m.length;let o="",R=[],z=0;if(t){const b=t.rarity,{numUpgrades:M,high:B}=Er[b];z=M+B-3-P,R=i?Pr(i,b):[]}const L=7-R.length;z<0&&(o=o||r("editor.substat.error.noOverRoll",{value:z+P}));const k=h.useMemo(()=>i?[{value:0},...Mr(d,i).map(b=>({value:b}))]:[{value:0}],[i,d]);return _(me,{bgt:"light",children:[n(le,{sx:{display:"flex"},children:_(Zt,{size:"small",sx:{width:"100%",display:"flex"},children:[_(ht,{title:i?n("p",{children:i}):r("editor.substat.substatFormat",{value:e+1}),disabled:!t,color:i?"success":"primary",sx:{whiteSpace:"nowrap"},children:[i&&n(_e,{onClick:()=>a(e,{key:"",value:0}),children:r`editor.substat.noSubstat`}),Ar.filter(b=>u!==b).map(b=>_(_e,{selected:i===b,disabled:i===b,onClick:()=>a(e,{key:b,value:0}),children:[n(Ir,{}),n(zr,{children:b})]},b))]}),n(jr,{sx:{flexBasis:30,flexGrow:1},children:n(Tr,{float:pt(i)==="%",placeholder:r`editor.substat.selectSub`,value:i?At(It(f,i),i):void 0,onChange:b=>{let M=b??0;pt(i)==="%"&&(M=M/100),a(e,{key:i,value:M})},disabled:!i,error:!!o,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!R.length&&n(Nr,{children:r`editor.substat.nextRolls`})]})}),n(le,{px:2,children:n(ho,{value:At(It(f,i),i),marks:k,setValue:b=>{let M=b??0;pt(i)==="%"&&(M=M/100),a(e,{key:i,value:M})},disabled:!i})}),n(le,{sx:{px:1,pb:1},children:o?n(Dr,{color:"error",children:r`ui:error`}):_(U,{container:!0,children:[n(U,{item:!0,flexGrow:1,children:!!m.length&&[...m].sort().map((b,M)=>n(he,{component:"span",color:`roll${Jt(L+R.indexOf(b),1,6)}.main`,sx:{ml:1},children:b},`${M}.${b}`))}),n(U,{item:!0,xs:"auto",flexShrink:1,children:n(he,{children:_(Or,{t:r,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",T]})})})]})})]})}function ho({value:e,setValue:t,marks:a,disabled:r=!1}){var i,f;const[u,d]=h.useState(e);return h.useEffect(()=>d(e),[e]),n(Fa,{value:u,step:.1,disabled:r,min:((i=a[1])==null?void 0:i.value)??0,max:((f=a[a.length-1])==null?void 0:f.value)??0,onChange:(m,T)=>d(T),onChangeCommitted:(m,T)=>t(T),valueLabelDisplay:"auto"})}function bo(e,t){const r=(()=>{switch(t.type){case"reset":return;case"substat":{const{index:u,substat:d}=t,i=[...e.substats],f=d.key?i.findIndex(m=>m.key===d.key):-1;if(f===-1||f===u)i[u]={...d};else{const m=i[u];i[u]={...i[f]},i[f]={...m}}return{...e,substats:i}}case"overwrite":return t.relic;case"update":return{...e,...t.relic}}})();return r&&Hr(r,!0)}const Vt={rarity:[5,4,3,2],setEffects:{}};function go({relicIdToEdit:e="new",cancelEdit:t,fixedSlotKey:a,allowEmpty:r=!1,disableSet:u=!1}){const{t:d}=Pe("relic"),{database:i}=er(),[f,m]=rr();h.useEffect(()=>i.relics.followAny(m),[i,m]);const[T,P]=h.useState(!1);h.useEffect(()=>{e==="new"&&(P(!0),R({type:"reset"}));const l=e&&f&&i.relics.get(e);l&&(P(!0),R({type:"overwrite",relic:Fr(l)}))},[e,i,f]);const[o,R]=h.useReducer(bo,void 0),{relic:z,errors:L}=h.useMemo(()=>o?Vr(o,e):{relic:void 0,errors:[]},[o,e]),{prev:k,prevEditType:b}=h.useMemo(()=>{const l=f&&e&&i.relics.get(e);if(l)return{prev:l,prevEditType:"edit"};if(o===void 0)return{prev:void 0,prevEditType:""};const{duplicated:A,upgraded:$}=f&&i.relics.findDups(o);return{prev:A[0]??$[0],prevEditType:A.length!==0?"duplicate":"upgrade"}},[o,e,i,f]),M=!["new",""].includes(e)&&!!(o!=null&&o.location)||!!a||!!e&&e!=="new",{rarity:B=5,level:N=0}=o??{},D=h.useMemo(()=>(o==null?void 0:o.slotKey)??a??"head",[a,o]),w=o?Vt:void 0,E=h.useCallback(l=>{const A=l.setKey?Vt:w;function $(F,ge,$e){return F&&ge.includes(F)?F:$e??ge[0]}l.setKey&&(l.rarity=$(o==null?void 0:o.rarity,A.rarity,Math.max(...A.rarity)),l.slotKey=$(o==null?void 0:o.slotKey,["head","hand"])),l.rarity&&(l.level=(o==null?void 0:o.level)??0),l.level&&(l.level=Jt(l.level,0,3*(l.rarity??o.rarity))),l.slotKey&&(l.mainStatKey=$(o==null?void 0:o.mainStatKey,zt[l.slotKey])),l.mainStatKey&&(l.substats=[0,1,2,3].map(F=>o&&o.substats[F].key!==l.mainStatKey?o.substats[F]:{key:"",value:0})),R({type:"update",relic:l})},[o,w,R]),H=h.useCallback(()=>{t==null||t(),R({type:"reset"})},[t,R]),se=h.useCallback((l,A)=>R({type:"substat",index:l,substat:A}),[]),q=!L.length,X=h.useCallback(l=>{if(!e&&o&&!window.confirm(d`editor.clearPrompt`)){l==null||l.preventDefault();return}P(!1),H()},[d,e,o,P,H]),G=Kr(),de=Br(G.breakpoints.up("md")),Y=e!=="new"&&e||(k==null?void 0:k.id),ie=()=>window.confirm(d`editor.clearPrompt`);return n(h.Suspense,{fallback:!1,children:n(Wr,{open:T,onClose:X,children:_(me,{bgt:"dark",children:[n(ta,{title:"Relic Editor",action:n(Gt,{onClick:X,children:n(Ur,{})})}),_(tr,{sx:{display:"flex",flexDirection:"column",gap:1},children:[_(U,{container:!0,spacing:1,columns:{xs:1,md:2},children:[_(U,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[_(le,{sx:{display:"flex",gap:1},children:[n(mo,{disabled:u,size:"small",relicSetKey:(o==null?void 0:o.setKey)??"",setRelicSetKey:l=>E({setKey:l}),sx:{flexGrow:1},label:o!=null&&o.setKey?"":d("editor.unknownSetName")}),n(fo,{rarity:o?B:void 0,onRarityChange:l=>E({rarity:l}),filter:l=>{var A,$;return!!(($=(A=w==null?void 0:w.rarity)==null?void 0:A.includes)!=null&&$.call(A,l))},disabled:!w})]}),_(le,{component:"div",display:"flex",children:[n(qr,{label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:N,disabled:!w,onChange:l=>{const A=parseInt(l.target.value)||0;E({level:A})}}),_(Zt,{children:[n(ne,{onClick:()=>E({level:N-1}),disabled:!w||N===0,children:"-"}),B?[...Array(B+1).keys()].map(l=>3*l).map(l=>n(ne,{onClick:()=>E({level:l}),disabled:!w||N===l,children:l},l)):null,n(ne,{onClick:()=>E({level:N+1}),disabled:!w||N===B*3,children:"+"})]})]}),_(le,{component:"div",display:"flex",children:[n(Gr,{label:"Slot",value:D,onChange:l=>E({slotKey:l.target.value}),disabled:M||!w,children:Yr.map(l=>n(_e,{value:l,children:l},l))}),n(me,{bgt:"light",sx:{p:1,ml:1,flexGrow:1},children:n(h.Suspense,{fallback:n(ft,{width:"60%"}),children:n(he,{color:"text.secondary",children:D})})})]}),_(le,{component:"div",display:"flex",gap:1,children:[n(ht,{title:n("b",{children:(o==null?void 0:o.mainStatKey)??"Main Stat"}),disabled:!w,color:o?"success":"primary",children:zt[D].map(l=>n(_e,{selected:(o==null?void 0:o.mainStatKey)===l,disabled:(o==null?void 0:o.mainStatKey)===l,onClick:()=>E({mainStatKey:l}),children:l},l))}),n(me,{bgt:"light",sx:{p:1,flexGrow:1},children:n(he,{color:"text.secondary",children:o?Xr(B,o.mainStatKey,N):d`mainStat`})}),n(ne,{onClick:()=>E({lock:!(o!=null&&o.lock)}),color:o!=null&&o.lock?"success":"primary",disabled:!o,children:o!=null&&o.lock?n(sr,{}):n(ir,{})})]}),n(Qr,{locKey:(z==null?void 0:z.location)??"",setLocKey:l=>E({location:l})})]}),n(U,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[0,1,2,3].map(l=>n(vo,{index:l,relic:z,setSubstat:se},l))})]}),k&&_(U,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[n(U,{item:!0,xs:12,md:5.5,lg:4,children:_(me,{bgt:"light",children:[n(he,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:b!=="edit"?b==="duplicate"?d`editor.dupeRelic`:d`editor.updateRelic`:d`editor.beforeEdit`}),n(mt,{relic:k})]})}),de&&n(U,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:n(me,{bgt:"light",sx:{display:"flex"},children:n(lr,{sx:{fontSize:40}})})}),n(U,{item:!0,xs:12,md:5.5,lg:4,children:_(me,{bgt:"light",children:[n(he,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:d`editor.preview`}),z&&n(mt,{relic:z})]})})]}),!q&&n(ha,{variant:"filled",severity:"error",children:L.map((l,A)=>n("div",{children:l},A))}),_(le,{display:"flex",gap:2,children:[b==="edit"?n(ne,{startIcon:n(vt,{}),onClick:()=>{o&&i.relics.set(k.id,o),r||(P(!1),t()),H()},disabled:!o||!q,color:"primary",children:d`editor.btnSave`}):n(ne,{startIcon:n(vt,{}),onClick:()=>{i.relics.new(o),r||(P(!1),t()),H()},disabled:!o||!q,color:b==="duplicate"?"warning":"primary",children:d`editor.btnAdd`}),r&&n(ne,{startIcon:n(nr,{}),disabled:!o,onClick:()=>{ie()&&H()},color:"error",children:d`editor.btnClear`}),k&&b!=="edit"&&n(ne,{startIcon:n(cr,{}),onClick:()=>{o&&i.relics.set(k.id,o),H(),r||P(!1)},disabled:!o||!q,color:"success",children:d`editor.btnUpdate`}),!!Y&&n(ne,{startIcon:n(Zr,{}),onClick:()=>{window.confirm(d`editor.confirmDelete`)&&(i.relics.remove(Y),H(),r||P(!1))},disabled:!o||!q,color:"error",children:d`editor.delete`})]})]})]})})})}const Kt={xs:1,sm:2,md:3,lg:3,xl:4},yo={xs:10,sm:12,md:24,lg:24,xl:24};function xo({onAdd:e,onEdit:t}){const{t:a}=Pe("relic"),{database:r}=er(),[u,d]=rr();h.useEffect(()=>r.relics.followAny(d),[r,d]);const{relicIds:i,totalRelicsNum:f}=h.useMemo(()=>{const L=r.relics.values,k=L.length,b=L.map(M=>M.id);return u&&{relicIds:b,totalRelicsNum:k}},[r,u]),m=Jr(),T=i.length!==f?`${i.length}/${f}`:f,{numShow:P,setTriggerElement:o}=ea(yo[m],i.length),R=h.useMemo(()=>i.slice(0,P),[i,P]),z={numShowing:R.length,totalShowing:T};return _(Qt,{children:[n(me,{bgt:"dark",children:n(tr,{children:n(le,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:_(he,{color:"text.secondary",children:["Showing ",n("b",{children:z.numShowing})," out of"," ",z.totalShowing," Items"]})})})}),n(U,{container:!0,columns:Kt,spacing:1,children:n(U,{item:!0,xs:!0,children:n(ne,{fullWidth:!0,onClick:e,color:"info",startIcon:n(vt,{}),children:a`addNew`})})}),_(h.Suspense,{fallback:n(ft,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[n(U,{container:!0,columns:Kt,spacing:1,children:R.map(L=>n(U,{item:!0,xs:1,children:n(mt,{relic:r.relics.get(L),onEdit:()=>t==null?void 0:t(L),onDelete:()=>r.relics.remove(L),setLocation:k=>r.relics.set(L,{location:k})})},L))}),i.length!==R.length&&n(ft,{ref:L=>{L&&o(L)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function $o(){const[e,t]=h.useState("");return _(le,{display:"flex",flexDirection:"column",gap:1,my:1,children:[n(go,{relicIdToEdit:e,cancelEdit:()=>t(""),allowEmpty:!0}),n(xo,{onAdd:()=>t("new"),onEdit:t})]})}export{$o as default};
