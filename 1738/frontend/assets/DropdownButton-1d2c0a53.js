import{e as s,aR as O,d0 as q,dc as L,j as S,ax as _,cm as X,du as J,cb as Q,av as E,at as ee,as as te,au as ne,aV as se,aY as ae,dv as P,aZ as T,dw as H,dx as B,aw as re,dy as A,ay as K,az as oe,c as ie,n as N,p as C,U as V,B as z,cj as le,aT as ce,cc as de}from"./index-d51ff786.js";function G(e){return e.substring(2).toLowerCase()}function ue(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function pe(e){const{children:t,disableReactTree:n=!1,mouseEvent:o="onClick",onClickAway:f,touchEvent:d="onTouchEnd"}=e,i=s.useRef(!1),a=s.useRef(null),l=s.useRef(!1),g=s.useRef(!1);s.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const w=O(t.ref,a),y=q(c=>{const m=g.current;g.current=!1;const x=L(a.current);if(!l.current||!a.current||"clientX"in c&&ue(c,x))return;if(i.current){i.current=!1;return}let u;c.composedPath?u=c.composedPath().indexOf(a.current)>-1:u=!x.documentElement.contains(c.target)||a.current.contains(c.target),!u&&(n||!m)&&f(c)}),I=c=>m=>{g.current=!0;const x=t.props[c];x&&x(m)},v={ref:w};return d!==!1&&(v[d]=I(d)),s.useEffect(()=>{if(d!==!1){const c=G(d),m=L(a.current),x=()=>{i.current=!0};return m.addEventListener(c,y),m.addEventListener("touchmove",x),()=>{m.removeEventListener(c,y),m.removeEventListener("touchmove",x)}}},[y,d]),o!==!1&&(v[o]=I(o)),s.useEffect(()=>{if(o!==!1){const c=G(o),m=L(a.current);return m.addEventListener(c,y),()=>{m.removeEventListener(c,y)}}},[y,o]),S.jsx(s.Fragment,{children:s.cloneElement(t,v)})}const fe=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function D(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function U(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Y(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function R(e,t,n,o,f,d){let i=!1,a=f(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(i)return!1;i=!0}const l=o?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!Y(a,d)||l)a=f(e,a,n);else return a.focus(),!0}return!1}const me=s.forwardRef(function(t,n){const{actions:o,autoFocus:f=!1,autoFocusItem:d=!1,children:i,className:a,disabledItemsFocusable:l=!1,disableListWrap:g=!1,onKeyDown:w,variant:y="selectedMenu"}=t,I=_(t,fe),v=s.useRef(null),c=s.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});X(()=>{f&&v.current.focus()},[f]),s.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(r,p)=>{const h=!v.current.style.width;if(r.clientHeight<v.current.clientHeight&&h){const k=`${J(L(r))}px`;v.current.style[p.direction==="rtl"?"paddingLeft":"paddingRight"]=k,v.current.style.width=`calc(100% + ${k})`}return v.current}}),[]);const m=r=>{const p=v.current,h=r.key,k=L(p).activeElement;if(h==="ArrowDown")r.preventDefault(),R(p,k,g,l,D);else if(h==="ArrowUp")r.preventDefault(),R(p,k,g,l,U);else if(h==="Home")r.preventDefault(),R(p,null,g,l,D);else if(h==="End")r.preventDefault(),R(p,null,g,l,U);else if(h.length===1){const b=c.current,F=h.toLowerCase(),j=performance.now();b.keys.length>0&&(j-b.lastTime>500?(b.keys=[],b.repeating=!0,b.previousKeyMatched=!0):b.repeating&&F!==b.keys[0]&&(b.repeating=!1)),b.lastTime=j,b.keys.push(F);const Z=k&&!b.repeating&&Y(k,b);b.previousKeyMatched&&(Z||R(p,k,!1,l,D,b))?r.preventDefault():b.previousKeyMatched=!1}w&&w(r)},x=O(v,n);let u=-1;s.Children.forEach(i,(r,p)=>{if(!s.isValidElement(r)){u===p&&(u+=1,u>=i.length&&(u=-1));return}r.props.disabled||(y==="selectedMenu"&&r.props.selected||u===-1)&&(u=p),u===p&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(u+=1,u>=i.length&&(u=-1))});const M=s.Children.map(i,(r,p)=>{if(p===u){const h={};return d&&(h.autoFocus=!0),r.props.tabIndex===void 0&&y==="selectedMenu"&&(h.tabIndex=0),s.cloneElement(r,h)}return r});return S.jsx(Q,E({role:"menu",ref:x,className:a,onKeyDown:m,tabIndex:f?0:-1},I,{children:M}))}),be=me;function ge(e){return te("MuiMenuItem",e)}const ve=ee("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),$=ve,xe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ye=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},he=e=>{const{disabled:t,dense:n,divider:o,disableGutters:f,selected:d,classes:i}=e,l=oe({root:["root",n&&"dense",t&&"disabled",!f&&"gutters",o&&"divider",d&&"selected"]},ge,i);return E({},i,l)},Ce=ne(se,{shouldForwardProp:e=>ae(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ye})(({theme:e,ownerState:t})=>E({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:T(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${$.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:T(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${$.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${H.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${H.inset}`]:{marginLeft:52},[`& .${B.root}`]:{marginTop:0,marginBottom:0},[`& .${B.inset}`]:{paddingLeft:36},[`& .${P.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&E({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${P.root} svg`]:{fontSize:"1.25rem"}}))),we=s.forwardRef(function(t,n){const o=re({props:t,name:"MuiMenuItem"}),{autoFocus:f=!1,component:d="li",dense:i=!1,divider:a=!1,disableGutters:l=!1,focusVisibleClassName:g,role:w="menuitem",tabIndex:y,className:I}=o,v=_(o,xe),c=s.useContext(A),m=s.useMemo(()=>({dense:i||c.dense||!1,disableGutters:l}),[c.dense,i,l]),x=s.useRef(null);X(()=>{f&&x.current&&x.current.focus()},[f]);const u=E({},o,{dense:m.dense,divider:a,disableGutters:l}),M=he(o),r=O(x,n);let p;return o.disabled||(p=y!==void 0?y:-1),S.jsx(A.Provider,{value:m,children:S.jsx(Ce,E({ref:r,role:w,tabIndex:p,component:d,focusVisibleClassName:K(M.focusVisible,g),className:K(M.root,I)},v,{ownerState:u,classes:M}))})}),Ie=we,W=ie(S.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");function Ee({title:e,children:t,id:n="dropdownbtn",...o}){const[f,d]=s.useState(null),i=!!f,a=s.useCallback(g=>d(g.currentTarget),[d]),l=s.useCallback(()=>d(null),[d]);return N(s.Suspense,{fallback:C(z,{endIcon:C(W,{}),...o,children:C(V,{width:50})}),children:[C(z,{...o,id:n,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:a,endIcon:C(W,{}),children:e}),C(de,{id:"basic-menu",anchorEl:f,open:i,placement:"bottom-start",transition:!0,onClick:l,sx:{zIndex:1500},children:({TransitionProps:g,placement:w})=>C(le,{...g,style:{transformOrigin:w==="bottom-start"?"left top":"left bottom"},children:C(ce,{sx:{maxHeight:"50vh",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",boxShadow:"rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px",paddingTop:"1px",paddingBottom:"1px",overflow:"auto"},children:C(pe,{onClickAway:l,children:N("div",{children:[" ",C(s.Suspense,{fallback:C(V,{width:"100%",height:"1000"}),children:C(be,{"aria-labelledby":n,children:t})})]})})})})})]})}export{pe as C,Ee as D,Ie as M,be as a};
