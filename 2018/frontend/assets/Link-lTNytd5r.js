import{a$ as B,b0 as M,eM as y,bb as j,b1 as N,T as P,b8 as h,b2 as a,d as x,b3 as U,b4 as z,eN as W,eO as _,j as E,b7 as H,b9 as O}from"./index-BeY4HQgT.js";function I(o){return M("MuiLink",o)}const q=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=q,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=o=>C[o]||o,J=({theme:o,ownerState:e})=>{const n=G(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:j(s,.4)},K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return O(t,I,e)},S=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${w.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:k,underline:g="always",variant:p="inherit",sx:l}=s,L=z(s,K),{isFocusVisibleRef:b,onBlur:V,onFocus:F,ref:R}=W(),[v,f]=x.useState(!1),$=_(n,R),D=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},T=i=>{F(i),b.current===!0&&f(!0),d&&d(i)},m=a({},s,{color:t,component:c,focusVisible:v,underline:g,variant:p}),A=Q(m);return E.jsx(S,a({color:t,className:H(A.root,r),classes:k,component:c,onBlur:D,onFocus:T,ref:$,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),Z=X;export{Z as L};
