import{av as R,au as T,aw as c,ax as d,e as j,ay as N,az as P,T as l,j as s,aA as w,aB as M}from"./index-c81c8d35.js";function S(a){return T("MuiCardHeader",a)}const A=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=A,U=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],$=a=>{const{classes:e}=a;return M({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},S,e)},_=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),k=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),B=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),E=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),z=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:C,component:y="div",disableTypography:u=!1,subheader:x,subheaderTypographyProps:b,title:g,titleTypographyProps:H}=p,f=P(p,U),r=d({},p,{component:y,disableTypography:u}),t=$(r);let o=g;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,d({variant:i?"body2":"h5",className:t.title,component:"span",display:"block"},H,{children:o})));let n=x;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,d({variant:i?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},b,{children:n}))),s.jsxs(_,d({className:w(t.root,C),as:y,ref:h,ownerState:r},f,{children:[i&&s.jsx(k,{className:t.avatar,ownerState:r,children:i}),s.jsxs(E,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(B,{className:t.action,ownerState:r,children:m})]}))}),L=z;export{L as C};
