import{g as E,a as _,s as A,aK as k,r as l,u as w,e as M,j as g,_ as S,f as C,h as D,az as N,aA as T,aL as j,ax as V,ay as U,J as r,ab as b,W as s,a9 as i,aM as B,al as x,aN as F,ae as I,aO as P,aq as v,a6 as R,a8 as y,S as $}from"./index-Bm49bzFZ.js";import{u as K,a as z,b as L,C as O}from"./useInfScroll-efcM2YfW.js";function W(e){return _("MuiCardActionArea",e)}const G=E("MuiCardActionArea",["root","focusVisible","focusHighlight"]),p=G,q=["children","className","focusVisibleClassName"],J=e=>{const{classes:o}=e;return D({root:["root"],focusHighlight:["focusHighlight"]},W,o)},Q=A(k,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),X=A("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,o)=>o.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),Y=l.forwardRef(function(o,t){const a=w({props:o,name:"MuiCardActionArea"}),{children:f,className:h,focusVisibleClassName:m}=a,u=M(a,q),d=a,c=J(d);return g.jsxs(Q,S({className:C(c.root,h),focusVisibleClassName:C(m,c.focusVisible),ref:t,ownerState:d},u,{children:[f,g.jsx(X,{className:c.focusHighlight,ownerState:d})]}))}),Z=Y;function ee({character:e,onClick:o}){const t=N(T("member0",...j(e))),a=V(U,{member:"member0",et:"self"});return r(F,{children:r(b,{children:s(x,{children:[o?r(Z,{onClick:o,children:r(i,{variant:"h4",children:e.key})}):r(i,{variant:"h4",children:e.key}),r(B,{}),s(i,{children:["Eidolon: ",e.eidolon]}),s(i,{children:["Level: ",e.level]}),s(i,{children:["ATK: ",t.compute(a.final.atk).val]}),s(i,{children:["Break effect: ",t.compute(a.final.brEff_).val]}),s(i,{children:["CRIT Rate: ",t.compute(a.final.crit_).val]}),s(i,{children:["CRIT DMG: ",t.compute(a.final.crit_dmg_).val]}),s(i,{children:["DEF: ",t.compute(a.final.def).val]}),s(i,{children:["Effect Hit Rate: ",t.compute(a.final.eff_).val]}),s(i,{children:["Effect RES: ",t.compute(a.final.eff_res_).val]}),s(i,{children:["Energy Regeneration Rate:"," ",t.compute(a.final.enerRegen_).val]}),s(i,{children:["Heal Boost: ",t.compute(a.final.heal_).val]}),s(i,{children:["HP: ",t.compute(a.final.hp).val]}),s(i,{children:["Speed: ",t.compute(a.final.spd).val]})]})})})}const ae={xs:1,sm:2,md:3,lg:3,xl:4},te={xs:5,sm:5,md:10,lg:10,xl:10};function se(){const{database:e}=I(),[o,t]=K();l.useEffect(()=>e.chars.followAny(t),[e,t]);const{characters:a}=l.useMemo(()=>{const n=e.chars.values;return o&&{characters:n}},[e.chars.values,o]),f=z(),{numShow:h,setTriggerElement:m}=L(te[f],a.length),u=l.useMemo(()=>a.slice(0,h),[a,h]),[d,c]=l.useState(void 0);return s($,{children:[r(P,{characterKey:d,onClose:()=>c(void 0)}),r(l.Suspense,{fallback:r(v,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:s(b,{bgt:"dark",children:[r(O,{title:"Characters"}),r(x,{children:s(R,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[r(y,{container:!0,spacing:1,columns:ae,children:u.map((n,H)=>r(y,{item:!0,xs:1,children:r(ee,{character:n,onClick:()=>c(n.key)})},H))}),a.length!==u.length&&r(v,{ref:n=>{n&&m(n)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function oe(){return r(R,{my:1,children:r(se,{})})}export{oe as default};
