import{g as A,c as g,s as l,aX as C,h as f,aY as b,_ as m,j as c,a as y,i as n,n as v}from"./index-CX6DEC-5.js";function x(s){return g("MuiCardActionArea",s)}const H=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),e=H,R=["children","className","focusVisibleClassName"],N=s=>{const{classes:o}=s;return v({root:["root"],focusHighlight:["focusHighlight"]},x,o)},V=l(C,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${e.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${e.focusVisible} .${e.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),j=l("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),M=f.forwardRef(function(o,r){const t=b({props:o,name:"MuiCardActionArea"}),{children:u,className:d,focusVisibleClassName:h}=t,p=m(t,R),i=t,a=N(i);return c.jsxs(V,y({className:n(a.root,d),focusVisibleClassName:n(h,a.focusVisible),ref:r,ownerState:i},p,{children:[u,c.jsx(j,{className:a.focusHighlight,ownerState:i})]}))}),w=M;export{w as C};
