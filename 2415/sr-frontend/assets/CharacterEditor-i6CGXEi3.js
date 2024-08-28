import{b7 as J,b8 as Q,b9 as M,ba as y,bb as k,bc as X,bd as K,be as ee,r as f,bf as se,bg as te,j,f as ne,bh as ie,bi as oe,bj as le,bk as T,s as ae,u as re,a4 as E,B as n,aI as ce,bl as de,K as a,a1 as I,Z as l,aE as h,ah as u,ab as L,z as V,A as O,ae as ue,aa as pe,bm as fe,Y as p,ac as $}from"./index-Dp2VRvLM.js";import{s as me,c as ve}from"./index-3cXVG3yV.js";import{C as he}from"./CardActionArea-CTrbZU7A.js";import{M as F,D as G,T as A}from"./DropdownButton-eZRnjSkY.js";const be=["component","direction","spacing","divider","children","className","useFlexGap"],ge=J(),Ce=Q("div",{name:"MuiStack",slot:"Root",overridesResolver:(s,e)=>e.root});function ke(s){return ie({props:s,name:"MuiStack",defaultTheme:ge})}function xe(s,e){const t=f.Children.toArray(s).filter(Boolean);return t.reduce((i,r,o)=>(i.push(r),o<t.length-1&&i.push(f.cloneElement(e,{key:`separator-${o}`})),i),[])}const _e=s=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[s],je=({ownerState:s,theme:e})=>{let t=M({display:"flex",flexDirection:"column"},y({theme:e},k({values:s.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i})));if(s.spacing){const i=X(e),r=Object.keys(e.breakpoints.values).reduce((c,d)=>((typeof s.spacing=="object"&&s.spacing[d]!=null||typeof s.direction=="object"&&s.direction[d]!=null)&&(c[d]=!0),c),{}),o=k({values:s.direction,base:r}),m=k({values:s.spacing,base:r});typeof o=="object"&&Object.keys(o).forEach((c,d,b)=>{if(!o[c]){const C=d>0?o[b[d-1]]:"column";o[c]=C}}),t=K(t,y({theme:e},m,(c,d)=>s.useFlexGap?{gap:T(i,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${_e(d?o[d]:s.direction)}`]:T(i,c)}}))}return t=ee(e.breakpoints,t),t};function Ee(s={}){const{createStyledComponent:e=Ce,useThemeProps:t=ke,componentName:i="MuiStack"}=s,r=()=>oe({root:["root"]},c=>le(i,c),{}),o=e(je);return f.forwardRef(function(c,d){const b=t(c),g=se(b),{component:C="div",direction:q="column",spacing:z=0,divider:D,children:P,className:U,useFlexGap:W=!1}=g,Y=te(g,be),Z={direction:q,spacing:z,useFlexGap:W},w=r();return j.jsx(o,M({as:C,ownerState:Z,ref:d,className:ne(w.root,U)},Y,{children:D?xe(P,D):P}))})}const Re=Ee({createStyledComponent:ae("div",{name:"MuiStack",slot:"Root",overridesResolver:(s,e)=>e.root}),useThemeProps:s=>re({props:s,name:"MuiStack"})}),H=Re;function N(s=""){const{database:e}=E(),[t,i]=f.useState(e.chars.get(s));return f.useEffect(()=>i(e.chars.get(s)),[e,s]),f.useEffect(()=>s?e.chars.follow(s,(r,o,m)=>o==="update"&&i(m)):void 0,[s,i,e]),t}function v({characterKey:s,abilityKey:e}){const t=N(s),{database:i}=E(),r=e.charAt(0).toUpperCase()+e.slice(1);return n(G,{title:`${r} Lv. ${(t==null?void 0:t[e])??1}`,disabled:!t,children:!!s&&ce(1,de[e][(t==null?void 0:t.ascension)??0]).map(o=>a(F,{selected:(t==null?void 0:t[e])===o,disabled:(t==null?void 0:t[e])===o,onClick:()=>i.chars.set(s,{[e]:o}),children:[r," Lv. ",o]},`${e}_${o}`))})}function Fe({character:s,onClick:e}){const t=me(ve(s));return n(H,{children:n(I,{children:a(L,{children:[e?n(he,{onClick:e,children:n(l,{variant:"h4",children:s.key})}):n(l,{variant:"h4",children:s.key}),n(h,{}),a(l,{children:["Eidolon: ",s.eidolon]}),a(l,{children:["Level: ",s.level]}),a(l,{children:["ATK: ",t.compute(u.final.atk).val]}),a(l,{children:["Break effect: ",t.compute(u.final.brEff_).val]}),a(l,{children:["CRIT Rate: ",t.compute(u.final.crit_).val]}),a(l,{children:["CRIT DMG: ",t.compute(u.final.crit_dmg_).val]}),a(l,{children:["DEF: ",t.compute(u.final.def).val]}),a(l,{children:["Effect Hit Rate: ",t.compute(u.final.eff_).val]}),a(l,{children:["Effect RES: ",t.compute(u.final.eff_res_).val]}),a(l,{children:["Energy Regeneration Rate: ",t.compute(u.final.enerRegen_).val]}),a(l,{children:["Heal Boost: ",t.compute(u.final.heal_).val]}),a(l,{children:["HP: ",t.compute(u.final.hp).val]}),a(l,{children:["Speed: ",t.compute(u.final.spd).val]})]})})})}var R={},Be=O;Object.defineProperty(R,"__esModule",{value:!0});var x=R.default=void 0,Se=Be(V()),De=j,Pe=(0,Se.default)((0,De.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");x=R.default=Pe;var B={},ye=O;Object.defineProperty(B,"__esModule",{value:!0});var _=B.default=void 0,Te=ye(V()),$e=j,Ae=(0,Te.default)((0,$e.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");_=B.default=Ae;function Ge({characterKey:s,onClose:e}){return n(pe,{open:!!s,onClose:e,children:n(f.Suspense,{fallback:n(ue,{variant:"rectangular",width:"100%",height:1e3}),children:s&&n(Me,{characterKey:s})})})}function Me({characterKey:s}){const e=N(s),{database:t}=E();return n(I,{children:a(L,{sx:{display:"flex",flexDirection:"column",gap:1},children:[n(l,{variant:"h2",children:s}),n(A,{type:"number",label:"Level",variant:"outlined",inputProps:{min:1,max:90},value:(e==null?void 0:e.level)||0,onChange:i=>t.chars.set(s,{level:parseInt(i.target.value)}),disabled:!e}),n(A,{type:"number",label:"Ascension",variant:"outlined",inputProps:{min:0,max:6},value:(e==null?void 0:e.ascension)||0,onChange:i=>t.chars.set(s,{ascension:parseInt(i.target.value)}),disabled:!e}),n(G,{title:`Eidolon Lv. ${(e==null?void 0:e.eidolon)??0}`,fullWidth:!1,disabled:!e,children:fe.map(i=>a(F,{selected:(e==null?void 0:e.eidolon)===i,disabled:(e==null?void 0:e.eidolon)===i,onClick:()=>t.chars.set(s,{eidolon:i}),children:["Eidolon Lv. ",i]},i))}),a(H,{spacing:1,children:[n(l,{variant:"h6",children:"Abilites"}),n(h,{}),a(p,{container:!0,gap:1,children:[n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"basic"})}),n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"skill"})}),n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"ult"})}),n(p,{item:!0,children:n(v,{characterKey:s,abilityKey:"talent"})})]}),n(l,{variant:"h6",children:"Bonus Abilities"}),n(h,{}),n(p,{container:!0,gap:1,children:Object.entries((e==null?void 0:e.bonusAbilities)??{}).map(([i,r])=>n(p,{item:!0,children:n($,{color:r?"success":"primary",onClick:()=>{t.chars.set(s,{bonusAbilities:{...e==null?void 0:e.bonusAbilities,[i]:!r}})},startIcon:r?n(x,{}):n(_,{}),children:i})},i))}),n(l,{variant:"h6",children:"Stat Boosts"}),n(h,{}),n(p,{container:!0,gap:1,children:Object.entries((e==null?void 0:e.statBoosts)??{}).map(([i,r])=>n(p,{item:!0,children:n($,{color:r?"success":"primary",onClick:()=>{t.chars.set(s,{statBoosts:{...e==null?void 0:e.statBoosts,[i]:!r}})},startIcon:r?n(x,{}):n(_,{}),children:i})},i))})]})]})})}export{Ge as C,H as S,Fe as a,N as u};
