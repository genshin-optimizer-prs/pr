import{a_ as B,a$ as M,eM as y,ba as j,b0 as N,T as P,b7 as h,b1 as i,d as x,b2 as U,b3 as _,eN as z,eO as W,j as E,b6 as H,b8 as O}from"./index-df498a8a.js";function w(o){return M("MuiLink",o)}const I=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=I,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=o=>C[o]||o,G=({theme:o,ownerState:e})=>{const n=q(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:j(s,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return O(t,w,e)},X=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>i({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&i({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),Y=x.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:g,underline:k="always",variant:p="inherit",sx:l}=s,L=_(s,K),{isFocusVisibleRef:b,onBlur:V,onFocus:v,ref:F}=z(),[R,f]=x.useState(!1),$=W(n,F),D=a=>{V(a),b.current===!1&&f(!1),u&&u(a)},T=a=>{v(a),b.current===!0&&f(!0),d&&d(a)},m=i({},s,{color:t,component:c,focusVisible:R,underline:k,variant:p}),A=Q(m);return E.jsx(X,i({color:t,className:H(A.root,r),classes:g,component:c,onBlur:D,onFocus:T,ref:$,ownerState:m,variant:p,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),ee=Y;export{ee as L};
