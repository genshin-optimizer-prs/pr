import{at as B,as as j,cg as y,aY as M,au as z,T as N,aW as h,av as i,e as x,aw as P,ax as U,ch as W,aQ as _,j as w,ay as E,az as H}from"./index-ad4b3620.js";function I(o){return j("MuiLink",o)}const O=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Q=O,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=o=>g[o]||o,Y=({theme:o,ownerState:e})=>{const n=S(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},q=Y,G=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],J=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return H(t,I,e)},K=z(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>i({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&i({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:q({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Q.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:C,underline:k="always",variant:d="inherit",sx:l}=s,v=U(s,G),{isFocusVisibleRef:f,onBlur:L,onFocus:V,ref:F}=W(),[R,m]=x.useState(!1),D=_(n,F),T=a=>{L(a),f.current===!1&&m(!1),u&&u(a)},$=a=>{V(a),f.current===!0&&m(!0),p&&p(a)},b=i({},s,{color:t,component:c,focusVisible:R,underline:k,variant:d}),A=J(b);return w.jsx(K,i({color:t,className:E(A.root,r),classes:C,component:c,onBlur:T,onFocus:$,ref:D,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},v))}),ee=X;export{ee as L};
