import{bc as y,bb as A,bd as C,be as c,d as h,bf as I,bg as j,f2 as L,j as a,f3 as $,bh as z,T as R,bj as m,bi as T}from"./index-begezDKk.js";function F(n){return A("MuiInputAdornment",n)}const M=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=M;var g;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],U=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},_=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return T(d,F,t)},S=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:U})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),w=h.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:b}=o,E=j(o,N),i=L()||{};let p=b;b&&i.variant,i&&!p&&(p=i.variant);const v=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),P=_(v);return a.jsx($.Provider,{value:null,children:a.jsx(S,c({as:l,ownerState:v,className:z(P.root,r),ref:e},E,{children:typeof s=="string"&&!x?a.jsx(R,{color:"text.secondary",children:s}):a.jsxs(h.Fragment,{children:[u==="start"?g||(g=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),W=w;export{W as I};
