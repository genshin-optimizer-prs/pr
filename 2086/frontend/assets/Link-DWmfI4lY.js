import{a$ as B,b0 as j,eS as y,bb as M,b1 as U,T as N,b8 as h,b2 as a,d as x,b3 as P,b4 as z,eT as W,eU as _,j as E,b7 as H,b9 as I}from"./index-n5Tv298O.js";function O(o){return j("MuiLink",o)}const S=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q=S,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o=>C[o]||o,G=({theme:o,ownerState:e})=>{const n=w(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],K=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return I(t,O,e)},Q=U(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:G({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:k,underline:g="always",variant:p="inherit",sx:l}=s,L=z(s,J),{isFocusVisibleRef:b,onBlur:V,onFocus:F,ref:R}=W(),[v,f]=x.useState(!1),T=_(n,R),$=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},D=i=>{F(i),b.current===!0&&f(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:v,underline:g,variant:p}),A=K(m);return E.jsx(Q,a({color:t,className:H(A.root,r),classes:k,component:c,onBlur:$,onFocus:D,ref:T,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),Z=X;export{Z as L};
