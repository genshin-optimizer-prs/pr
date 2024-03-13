import{at as L,as as m,au as G,aU as S,aW as z,av as u,aY as R,e as v,aw as N,ax as U,j,ay as M,az as E,cv as w}from"./index-ad4b3620.js";function P(o){return m("MuiToggleButton",o)}const _=L("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),O=_,A=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],F=o=>{const{classes:e,fullWidth:t,selected:r,disabled:i,size:d,color:g}=o,c={root:["root",r&&"selected",i&&"disabled",t&&"fullWidth",`size${z(d)}`,g]};return E(c,P,e)},D=G(S,{name:"MuiToggleButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`size${z(t.size)}`]]}})(({theme:o,ownerState:e})=>{let t=e.color==="standard"?o.palette.text.primary:o.palette[e.color].main,r;return o.vars&&(t=e.color==="standard"?o.vars.palette.text.primary:o.vars.palette[e.color].main,r=e.color==="standard"?o.vars.palette.text.primaryChannel:o.vars.palette[e.color].mainChannel),u({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:`1px solid ${(o.vars||o).palette.divider}`,color:(o.vars||o).palette.action.active},e.fullWidth&&{width:"100%"},{[`&.${O.disabled}`]:{color:(o.vars||o).palette.action.disabled,border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:R(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${O.selected}`]:{color:t,backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:R(t,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${r} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:R(t,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:R(t,o.palette.action.selectedOpacity)}}}},e.size==="small"&&{padding:7,fontSize:o.typography.pxToRem(13)},e.size==="large"&&{padding:15,fontSize:o.typography.pxToRem(15)})}),H=v.forwardRef(function(e,t){const r=N({props:e,name:"MuiToggleButton"}),{children:i,className:d,color:g="standard",disabled:c=!1,disableFocusRipple:C=!1,fullWidth:T=!1,onChange:n,onClick:x,selected:y,size:s="medium",value:f}=r,$=U(r,A),b=u({},r,{color:g,disabled:c,disableFocusRipple:C,fullWidth:T,size:s}),k=F(b),h=a=>{x&&(x(a,f),a.defaultPrevented)||n&&n(a,f)};return j.jsx(D,u({className:M(k.root,d),disabled:c,focusRipple:!C,ref:t,onClick:h,onChange:n,value:f,ownerState:b,"aria-pressed":y},$,{children:i}))}),eo=H;function V(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}function Y(o){return m("MuiToggleButtonGroup",o)}const q=L("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),l=q,I=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],J=o=>{const{classes:e,orientation:t,fullWidth:r,disabled:i}=o,d={root:["root",t==="vertical"&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${z(t)}`,i&&"disabled"]};return E(d,Y,e)},Q=G("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${l.grouped}`]:e.grouped},{[`& .${l.grouped}`]:e[`grouped${z(t.orientation)}`]},e.root,t.orientation==="vertical"&&e.vertical,t.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>u({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${l.grouped}`]:u({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderTop:0,marginTop:0}})})),X=v.forwardRef(function(e,t){const r=N({props:e,name:"MuiToggleButtonGroup"}),{children:i,className:d,color:g="standard",disabled:c=!1,exclusive:C=!1,fullWidth:T=!1,onChange:n,orientation:x="horizontal",size:y="medium",value:s}=r,f=U(r,I),$=u({},r,{disabled:c,fullWidth:T,orientation:x,size:y}),b=J($),k=(a,p)=>{if(!n)return;const W=s&&s.indexOf(p);let B;s&&W>=0?(B=s.slice(),B.splice(W,1)):B=s?s.concat(p):[p],n(a,B)},h=(a,p)=>{n&&n(a,s===p?null:p)};return j.jsx(Q,u({role:"group",className:M(b.root,d),ref:t,ownerState:$},f,{children:v.Children.map(i,a=>v.isValidElement(a)?v.cloneElement(a,{className:M(b.grouped,a.props.className),onChange:C?h:k,selected:a.props.selected===void 0?V(a.props.value,s):a.props.selected,size:a.props.size||y,fullWidth:T,color:a.props.color||g,disabled:a.props.disabled||c}):null)}))}),Z=X;function to(o){return(e,t)=>{const r=e.length;return r===o.length?[t]:r===1&&e[0]===t?[...o]:[...new Set(w(e,t))]}}const K=G(Z,{shouldForwardProp:o=>o!=="baseColor"&&o!=="selectedColor"})(({theme:o,baseColor:e="secondary",selectedColor:t="success"})=>({"& .MuiToggleButtonGroup-grouped":{"&":{backgroundColor:o.palette[e].main,color:o.palette[e].contrastText},"&:hover":{backgroundColor:o.palette[e].dark,transition:"background-color 0.25s ease"},"&.Mui-selected":{backgroundColor:o.palette[t].main,color:o.palette[t].contrastText},"&.Mui-selected:hover":{backgroundColor:o.palette[t].dark},"&.Mui-disabled":{backgroundColor:o.palette[e].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:o.palette[t].dark}}})),ro=K;export{ro as S,eo as T,Z as a,to as h};
