import{bo as B,bn as j,fe as y,bx as M,bp as N,T as P,bv as h,bq as a,r as x,br as U,bs as z,ff as W,fg as _,j as E,bt as H,bu as q}from"./index-LiPEK2Ww.js";function I(o){return j("MuiLink",o)}const O=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=O,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=o=>C[o]||o,J=({theme:o,ownerState:e})=>{const n=G(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return q(t,I,e)},S=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${w.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:g,underline:k="always",variant:d="inherit",sx:l}=s,L=z(s,K),{isFocusVisibleRef:b,onBlur:V,onFocus:v,ref:F}=W(),[R,f]=x.useState(!1),D=_(n,F),T=i=>{V(i),b.current===!1&&f(!1),u&&u(i)},$=i=>{v(i),b.current===!0&&f(!0),p&&p(i)},m=a({},s,{color:t,component:c,focusVisible:R,underline:k,variant:d}),A=Q(m);return E.jsx(S,a({color:t,className:H(A.root,r),classes:g,component:c,onBlur:T,onFocus:$,ref:D,ownerState:m,variant:d,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),Z=X;export{Z as L};
