import{au as B,at as M,c3 as y,c4 as j,av as z,T as N,aT as h,aw as i,e as x,ax as P,ay as U,c5 as W,aM as _,j as w,az as E,aA as H}from"./index-7281a9f6.js";function I(o){return M("MuiLink",o)}const O=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=O,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=o=>C[o]||o,G=({theme:o,ownerState:e})=>{const n=q(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:j(s,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return H(t,I,e)},X=z(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>i({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&i({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),Y=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:g,underline:k="always",variant:d="inherit",sx:l}=s,v=U(s,K),{isFocusVisibleRef:f,onBlur:L,onFocus:V,ref:F}=W(),[R,m]=x.useState(!1),T=_(n,F),D=a=>{L(a),f.current===!1&&m(!1),u&&u(a)},$=a=>{V(a),f.current===!0&&m(!0),p&&p(a)},b=i({},s,{color:t,component:c,focusVisible:R,underline:k,variant:d}),A=Q(b);return w.jsx(X,i({color:t,className:E(A.root,r),classes:g,component:c,onBlur:D,onFocus:$,ref:T,ownerState:b,variant:d,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},v))}),ee=Y;export{ee as L};
