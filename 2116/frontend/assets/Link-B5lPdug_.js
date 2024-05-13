import{b1 as B,b2 as j,eZ as y,bd as M,b3 as N,T as P,ba as h,b4 as a,d as x,b5 as U,b6 as _,e_ as z,e$ as W,j as E,b9 as H,bb as I}from"./index-Dn58R_OC.js";function O(o){return j("MuiLink",o)}const Z=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q=Z,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o=>C[o]||o,G=({theme:o,ownerState:e})=>{const n=w(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],K=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return I(t,O,e)},Q=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:G({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),S=x.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:k,underline:g="always",variant:p="inherit",sx:l}=s,L=_(s,J),{isFocusVisibleRef:b,onBlur:V,onFocus:F,ref:R}=z(),[v,f]=x.useState(!1),$=W(n,R),D=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},T=i=>{F(i),b.current===!0&&f(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:v,underline:g,variant:p}),A=K(m);return E.jsx(Q,a({color:t,className:H(A.root,r),classes:k,component:c,onBlur:D,onFocus:T,ref:$,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),Y=S;export{Y as L};
