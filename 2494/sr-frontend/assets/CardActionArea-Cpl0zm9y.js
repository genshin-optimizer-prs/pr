import{g as A,a as g,s as l,ar as f,r as C,u as b,e as y,j as c,_ as m,f as n,h as v}from"./index-C40t3fzJ.js";function x(s){return g("MuiCardActionArea",s)}const H=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),e=H,R=["children","className","focusVisibleClassName"],N=s=>{const{classes:o}=s;return v({root:["root"],focusHighlight:["focusHighlight"]},x,o)},V=l(f,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${e.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${e.focusVisible} .${e.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),j=l("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),M=C.forwardRef(function(o,r){const t=b({props:o,name:"MuiCardActionArea"}),{children:u,className:d,focusVisibleClassName:h}=t,p=y(t,R),i=t,a=N(i);return c.jsxs(V,m({className:n(a.root,d),focusVisibleClassName:n(h,a.focusVisible),ref:r,ownerState:i},p,{children:[u,c.jsx(j,{className:a.focusHighlight,ownerState:i})]}))}),w=M;export{w as C};
