import{av as B,au as j,c7 as y,b0 as M,aw as z,T as N,aY as h,ax as i,e as x,ay as P,az as U,c8 as W,aR as _,j as w,aA as E,aB as H}from"./index-bf826dbc.js";function I(o){return j("MuiLink",o)}const O=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=O,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Y=o=>C[o]||o,q=({theme:o,ownerState:e})=>{const n=Y(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:M(s,.4)},G=q,J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],K=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return H(t,I,e)},Q=z(N,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>i({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&i({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:G({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),X=x.forwardRef(function(e,n){const s=P({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:g,underline:k="always",variant:d="inherit",sx:l}=s,v=U(s,J),{isFocusVisibleRef:f,onBlur:L,onFocus:R,ref:V}=W(),[F,m]=x.useState(!1),D=_(n,V),T=a=>{L(a),f.current===!1&&m(!1),u&&u(a)},$=a=>{R(a),f.current===!0&&m(!0),p&&p(a)},b=i({},s,{color:t,component:c,focusVisible:F,underline:k,variant:d}),A=K(b);return w.jsx(Q,i({color:t,className:E(A.root,r),classes:g,component:c,onBlur:T,onFocus:$,ref:D,ownerState:b,variant:d,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},v))}),ee=X;export{ee as L};
