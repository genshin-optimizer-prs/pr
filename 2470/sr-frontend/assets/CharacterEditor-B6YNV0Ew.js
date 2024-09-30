import{bE as Y,bF as w,bG as L,bH as T,bI as k,bJ as Z,bK as K,bL as ee,r as f,bM as se,bN as te,j as R,f as ne,bO as ie,bP as oe,bQ as le,bR as $,s as ae,u as re,N as E,n,aJ as ce,bS as de,q as a,L as A,H as l,au as h,a2 as u,X as I,i as V,k as O,$ as ue,W as pe,bT as fe,G as p,Y as y}from"./index-DMT7eMq3.js";import{s as me,c as ve}from"./index-Uqbjb5uR.js";import{C as he}from"./CardActionArea-BGjLdptY.js";import{M as F,D as G,T as M}from"./DropdownButton-DK8YeT0J.js";const be=["component","direction","spacing","divider","children","className","useFlexGap"],ge=Y(),Ce=w("div",{name:"MuiStack",slot:"Root",overridesResolver:(s,e)=>e.root});function ke(s){return ie({props:s,name:"MuiStack",defaultTheme:ge})}function xe(s,e){const t=f.Children.toArray(s).filter(Boolean);return t.reduce((i,r,o)=>(i.push(r),o<t.length-1&&i.push(f.cloneElement(e,{key:`separator-${o}`})),i),[])}const _e=s=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[s],Re=({ownerState:s,theme:e})=>{let t=L({display:"flex",flexDirection:"column"},T({theme:e},k({values:s.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i})));if(s.spacing){const i=Z(e),r=Object.keys(e.breakpoints.values).reduce((c,d)=>((typeof s.spacing=="object"&&s.spacing[d]!=null||typeof s.direction=="object"&&s.direction[d]!=null)&&(c[d]=!0),c),{}),o=k({values:s.direction,base:r}),m=k({values:s.spacing,base:r});typeof o=="object"&&Object.keys(o).forEach((c,d,b)=>{if(!o[c]){const C=d>0?o[b[d-1]]:"column";o[c]=C}}),t=K(t,T({theme:e},m,(c,d)=>s.useFlexGap?{gap:$(i,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${_e(d?o[d]:s.direction)}`]:$(i,c)}}))}return t=ee(e.breakpoints,t),t};function Ee(s={}){const{createStyledComponent:e=Ce,useThemeProps:t=ke,componentName:i="MuiStack"}=s,r=()=>oe({root:["root"]},c=>le(i,c),{}),o=e(Re);return f.forwardRef(function(c,d){const b=t(c),g=se(b),{component:C="div",direction:q="column",spacing:W=0,divider:D,children:P,className:U,useFlexGap:z=!1}=g,J=te(g,be),Q={direction:q,spacing:W,useFlexGap:z},X=r();return R.jsx(o,L({as:C,ownerState:Q,ref:d,className:ne(X.root,U)},J,{children:D?xe(P,D):P}))})}const je=Ee({createStyledComponent:ae("div",{name:"MuiStack",slot:"Root",overridesResolver:(s,e)=>e.root}),useThemeProps:s=>re({props:s,name:"MuiStack"})}),H=je;function N(s=""){const{database:e}=E(),[t,i]=f.useState(e.chars.get(s));return f.useEffect(()=>i(e.chars.get(s)),[e,s]),f.useEffect(()=>s?e.chars.follow(s,(r,o,m)=>o==="update"&&i(m)):void 0,[s,i,e]),t}function v({characterKey:s,abilityKey:e}){const t=N(s),{database:i}=E(),r=e.charAt(0).toUpperCase()+e.slice(1);return n(G,{title:`${r} Lv. ${(t==null?void 0:t[e])??1}`,disabled:!t,children:!!s&&ce(1,de[e][(t==null?void 0:t.ascension)??0]).map(o=>a(F,{selected:(t==null?void 0:t[e])===o,disabled:(t==null?void 0:t[e])===o,onClick:()=>i.chars.set(s,{[e]:o}),children:[r," Lv. ",o]},`${e}_${o}`))})}function Fe({character:s,onClick:e}){const t=me(ve(s));return n(H,{children:n(A,{children:a(I,{children:[e?n(he,{onClick:e,children:n(l,{variant:"h4",children:s.key})}):n(l,{variant:"h4",children:s.key}),n(h,{}),a(l,{children:["Eidolon: ",s.eidolon]}),a(l,{children:["Level: ",s.level]}),a(l,{children:["ATK: ",t.compute(u.final.atk).val]}),a(l,{children:["Break effect: ",t.compute(u.final.brEffect_).val]}),a(l,{children:["CRIT Rate: ",t.compute(u.final.crit_).val]}),a(l,{children:["CRIT DMG: ",t.compute(u.final.crit_dmg_).val]}),a(l,{children:["DEF: ",t.compute(u.final.def).val]}),a(l,{children:["Effect Hit Rate: ",t.compute(u.final.eff_).val]}),a(l,{children:["Effect RES: ",t.compute(u.final.eff_res_).val]}),a(l,{children:["Energy Regeneration Rate: ",t.compute(u.final.enerRegen_).val]}),a(l,{children:["Heal Boost: ",t.compute(u.final.heal_).val]}),a(l,{children:["HP: ",t.compute(u.final.hp).val]}),a(l,{children:["Speed: ",t.compute(u.final.spd).val]})]})})})}var j={},Se=O;Object.defineProperty(j,"__esModule",{value:!0});var x=j.default=void 0,Be=Se(V()),De=R,Pe=(0,Be.default)((0,De.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");x=j.default=Pe;var S={},Te=O;Object.defineProperty(S,"__esModule",{value:!0});var _=S.default=void 0,$e=Te(V()),ye=R,Me=(0,$e.default)((0,ye.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");_=S.default=Me;function Ge({characterKey:s,onClose:e}){return n(pe,{open:!!s,onClose:e,children:n(f.Suspense,{fallback:n(ue,{variant:"rectangular",width:"100%",height:1e3}),children:s&&n(Le,{characterKey:s})})})}function Le({characterKey:s}){const e=N(s),{database:t}=E();return n(A,{children:a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[n(l,{variant:"h2",children:s}),n(M,{type:"number",label:"Level",variant:"outlined",inputProps:{min:1,max:90},value:(e==null?void 0:e.level)||0,onChange:i=>t.chars.set(s,{level:parseInt(i.target.value)}),disabled:!e}),n(M,{type:"number",label:"Ascension",variant:"outlined",inputProps:{min:0,max:6},value:(e==null?void 0:e.ascension)||0,onChange:i=>t.chars.set(s,{ascension:parseInt(i.target.value)}),disabled:!e}),n(G,{title:`Eidolon Lv. ${(e==null?void 0:e.eidolon)??0}`,fullWidth:!1,disabled:!e,children:fe.map(i=>a(F,{selected:(e==null?void 0:e.eidolon)===i,disabled:(e==null?void 0:e.eidolon)===i,onClick:()=>t.chars.set(s,{eidolon:i}),children:["Eidolon Lv. ",i]},i))}),a(H,{spacing:1,children:[n(l,{variant:"h6",children:"Abilites"}),n(h,{}),a(p,{container:!0,gap:1,children:[n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"basic"})}),n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"skill"})}),n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"ult"})}),n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"talent"})})]}),n(l,{variant:"h6",children:"Bonus Abilities"}),n(h,{}),n(p,{container:!0,gap:1,children:Object.entries((e==null?void 0:e.bonusAbilities)??{}).map(([i,r])=>n(p,{item:!0,children:n(y,{color:r?"success":"primary",onClick:()=>{t.chars.set(s,{bonusAbilities:{...e==null?void 0:e.bonusAbilities,[i]:!r}})},startIcon:r?n(x,{}):n(_,{}),children:i})},i))}),n(l,{variant:"h6",children:"Stat Boosts"}),n(h,{}),n(p,{container:!0,gap:1,children:Object.entries((e==null?void 0:e.statBoosts)??{}).map(([i,r])=>n(p,{item:!0,children:n(y,{color:r?"success":"primary",onClick:()=>{t.chars.set(s,{statBoosts:{...e==null?void 0:e.statBoosts,[i]:!r}})},startIcon:r?n(x,{}):n(_,{}),children:i})},i))})]})]})})}export{Ge as C,H as S,Fe as a,_ as b,x as d,N as u};
