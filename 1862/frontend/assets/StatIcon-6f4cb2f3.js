import{aw as _,av as R,ax as h,ay as l,e as S,az as j,aA as M,T as u,j as r,aB as T,aC as w,p as a,cq as A,dc as E,cs as N,cJ as k,cp as D,co as B,cr as U,cI as $,d2 as z,d3 as G,d4 as W,d5 as q,d6 as J,d7 as L,d8 as F,d9 as K,da as O,db as Q,bB as V,bz as X,bD as Y}from"./index-251d8419.js";function Z(t){return R("MuiCardHeader",t)}const P=_("MuiCardHeader",["root","avatar","action","content","title","subheader"]),b=P,ee=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],ae=t=>{const{classes:e}=t;return w({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Z,e)},te=h("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,e)=>l({[`& .${b.title}`]:e.title,[`& .${b.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),se=h("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(t,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),re=h("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(t,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ne=h("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(t,e)=>e.content})({flex:"1 1 auto"}),oe=S.forwardRef(function(e,n){const p=j({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:v,component:C="div",disableTypography:y=!1,subheader:I,subheaderTypographyProps:f,title:g,titleTypographyProps:x}=p,H=M(p,ee),o=l({},p,{component:C,disableTypography:y}),s=ae(o);let c=g;c!=null&&c.type!==u&&!y&&(c=r.jsx(u,l({variant:i?"body2":"h5",className:s.title,component:"span",display:"block"},x,{children:c})));let d=I;return d!=null&&d.type!==u&&!y&&(d=r.jsx(u,l({variant:i?"body2":"body1",className:s.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:d}))),r.jsxs(te,l({className:T(s.root,v),as:C,ref:n,ownerState:o},H,{children:[i&&r.jsx(se,{className:s.avatar,ownerState:o,children:i}),r.jsxs(ne,{className:s.content,ownerState:o,children:[c,d]}),m&&r.jsx(re,{className:s.action,ownerState:o,children:m})]}))}),le=oe;function ie({statKey:t,iconProps:e={}}){switch(t){case"hp":case"hp_":case"base_hp":return a(X,{...e});case"atk":case"atk_":case"base_atk":return a(V,{...e});case"def":case"def_":case"base_def":return a(Q,{...e});case"eleMas":return a(O,{...e});case"critRate_":return a(K,{...e});case"critDMG_":return a(F,{...e});case"enerRech_":return a(L,{...e});case"incHeal_":return a(J,{...e});case"heal_":return a(q,{...e});case"cdRed_":return a(W,{...e});case"shield_":return a(G,{...e});case"stamina":return a(z,{...e})}const n=t.split("_")[0];return Y.includes(n)?a(ce,{ele:n,iconProps:e}):null}function ce({ele:t,iconProps:e={}}){switch(t){case"anemo":return a($,{...e});case"cryo":return a(U,{...e});case"dendro":return a(B,{...e});case"electro":return a(D,{...e});case"geo":return a(k,{...e});case"hydro":return a(N,{...e});case"physical":return a(E,{...e});case"pyro":return a(A,{...e})}}export{le as C,ce as E,ie as S};
