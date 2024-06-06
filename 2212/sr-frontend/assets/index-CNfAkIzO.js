import{g as E,a as _,s as A,aJ as w,r as l,u as k,e as M,j as g,_ as S,f as C,h as D,ax as T,ay as N,aK as j,av as V,aw as U,J as r,a8 as b,T as s,a6 as i,aL as B,ah as x,aM as F,ab as I,aN as P,an as v,a3 as R,a5 as y,as as $}from"./index-CjaHTNOe.js";import{u as K,a as L,b as z,C as G}from"./useInfScroll-BgJ9Ckhj.js";function J(e){return _("MuiCardActionArea",e)}const O=E("MuiCardActionArea",["root","focusVisible","focusHighlight"]),p=O,W=["children","className","focusVisibleClassName"],Q=e=>{const{classes:o}=e;return D({root:["root"],focusHighlight:["focusHighlight"]},J,o)},q=A(w,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),X=A("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,o)=>o.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),Y=l.forwardRef(function(o,t){const a=k({props:o,name:"MuiCardActionArea"}),{children:f,className:d,focusVisibleClassName:m}=a,u=M(a,W),h=a,c=Q(h);return g.jsxs(q,S({className:C(c.root,d),focusVisibleClassName:C(m,c.focusVisible),ref:t,ownerState:h},u,{children:[f,g.jsx(X,{className:c.focusHighlight,ownerState:h})]}))}),Z=Y;function ee({character:e,onClick:o}){const t=T(N("member0",...j(e))),a=V(U,{member:"member0",et:"self"});return r(F,{children:r(b,{children:s(x,{children:[o?r(Z,{onClick:o,children:r(i,{variant:"h4",children:e.key})}):r(i,{variant:"h4",children:e.key}),r(B,{}),s(i,{children:["Eidolon: ",e.eidolon]}),s(i,{children:["Level: ",e.level]}),s(i,{children:["ATK: ",t.compute(a.final.atk).val]}),s(i,{children:["Break effect: ",t.compute(a.final.brEff_).val]}),s(i,{children:["CRIT Rate: ",t.compute(a.final.crit_).val]}),s(i,{children:["CRIT DMG: ",t.compute(a.final.crit_dmg_).val]}),s(i,{children:["DEF: ",t.compute(a.final.def).val]}),s(i,{children:["Effect Hit Rate: ",t.compute(a.final.eff_).val]}),s(i,{children:["Effect RES: ",t.compute(a.final.eff_res_).val]}),s(i,{children:["Energy Regeneration Rate:"," ",t.compute(a.final.enerRegen_).val]}),s(i,{children:["Heal Boost: ",t.compute(a.final.heal_).val]}),s(i,{children:["HP: ",t.compute(a.final.hp).val]}),s(i,{children:["Speed: ",t.compute(a.final.spd).val]})]})})})}const ae={xs:1,sm:2,md:3,lg:3,xl:4},te={xs:5,sm:5,md:10,lg:10,xl:10};function se(){const{database:e}=I(),[o,t]=K();l.useEffect(()=>e.chars.followAny(t),[e,t]);const{characters:a}=l.useMemo(()=>{const n=e.chars.values;return o&&{characters:n}},[e.chars.values,o]),f=L(),{numShow:d,setTriggerElement:m}=z(te[f],a.length),u=l.useMemo(()=>a.slice(0,d),[a,d]),[h,c]=l.useState(void 0);return s($,{children:[r(P,{characterKey:h,onClose:()=>c(void 0)}),r(l.Suspense,{fallback:r(v,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:s(b,{bgt:"dark",children:[r(G,{title:"Characters"}),r(x,{children:s(R,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[r(y,{container:!0,spacing:1,columns:ae,children:u.map((n,H)=>r(y,{item:!0,xs:1,children:r(ee,{character:n,onClick:()=>c(n.key)})},H))}),a.length!==u.length&&r(v,{ref:n=>{n&&m(n)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function oe(){return r(R,{my:1,children:r(se,{})})}export{oe as default};
