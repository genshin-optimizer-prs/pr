import{g as j,a as N,s as p,_ as d,r as y,u as P,e as T,H as c,j as s,f as M,h as U}from"./index-BI8le-CD.js";function k(a){return N("MuiCardHeader",a)}const A=j("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=A,_=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],$=a=>{const{classes:e}=a;return U({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},k,e)},S=p("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),w=p("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),D=p("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),E=p("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),B=y.forwardRef(function(e,i){const u=P({props:e,name:"MuiCardHeader"}),{action:m,avatar:l,className:b,component:C="div",disableTypography:h=!1,subheader:g,subheaderTypographyProps:x,title:f,titleTypographyProps:H}=u,R=T(u,_),r=d({},u,{component:C,disableTypography:h}),t=$(r);let o=f;o!=null&&o.type!==c&&!h&&(o=s.jsx(c,d({variant:l?"body2":"h5",className:t.title,component:"span",display:"block"},H,{children:o})));let n=g;return n!=null&&n.type!==c&&!h&&(n=s.jsx(c,d({variant:l?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),s.jsxs(S,d({className:M(t.root,b),as:C,ref:i,ownerState:r},R,{children:[l&&s.jsx(w,{className:t.avatar,ownerState:r,children:l}),s.jsxs(E,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(D,{className:t.action,ownerState:r,children:m})]}))}),I=B;function L(){const[a,e]=y.useState({}),i=y.useCallback(()=>e({}),[]);return[a,i]}export{I as C,L as u};
