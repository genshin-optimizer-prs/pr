import{av as A,au as g,aw as l,aV as C,e as f,ay as y,az as b,j as c,ax as m,aA as n,aB as v}from"./index-c16870b4.js";function x(s){return g("MuiCardActionArea",s)}const H=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),i=H,R=["children","className","focusVisibleClassName"],w=s=>{const{classes:o}=s;return v({root:["root"],focusHighlight:["focusHighlight"]},x,o)},N=l(C,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${i.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${i.focusVisible} .${i.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),V=l("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),j=f.forwardRef(function(o,r){const t=y({props:o,name:"MuiCardActionArea"}),{children:u,className:d,focusVisibleClassName:h}=t,p=b(t,R),a=t,e=w(a);return c.jsxs(N,m({className:n(e.root,d),focusVisibleClassName:n(h,e.focusVisible),ref:r,ownerState:a},p,{children:[u,c.jsx(V,{className:e.focusHighlight,ownerState:a})]}))}),$=j;export{$ as C};
