import{b9 as Y,ba as Z,bb as $,bc as P,bd as C,be as Q,bf as X,bg as K,r as p,bh as ee,bi as se,j as _,f as te,bj as ne,bk as ie,bl as oe,bm as T,s as le,u as ae,a4 as j,B as i,aJ as re,bn as ce,K as a,ah as de,ai as ue,a1 as A,Z as l,aF as v,ab as I,z as L,A as V,ae as pe,aa as fe,bo as me,Y as u,ac as y}from"./index-PUEIQ0Lz.js";import{s as ve,w as he,c as be}from"./index-2l85nW7W.js";import{C as ge}from"./CardActionArea-CymXM0nA.js";import{M as F,D as O,T as M}from"./DropdownButton-DrsUKGX_.js";const Ce=["component","direction","spacing","divider","children","className","useFlexGap"],ke=Y(),xe=Z("div",{name:"MuiStack",slot:"Root",overridesResolver:(s,e)=>e.root});function _e(s){return ne({props:s,name:"MuiStack",defaultTheme:ke})}function je(s,e){const n=p.Children.toArray(s).filter(Boolean);return n.reduce((t,r,o)=>(t.push(r),o<n.length-1&&t.push(p.cloneElement(e,{key:`separator-${o}`})),t),[])}const Re=s=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[s],Ee=({ownerState:s,theme:e})=>{let n=$({display:"flex",flexDirection:"column"},P({theme:e},C({values:s.direction,breakpoints:e.breakpoints.values}),t=>({flexDirection:t})));if(s.spacing){const t=Q(e),r=Object.keys(e.breakpoints.values).reduce((c,d)=>((typeof s.spacing=="object"&&s.spacing[d]!=null||typeof s.direction=="object"&&s.direction[d]!=null)&&(c[d]=!0),c),{}),o=C({values:s.direction,base:r}),f=C({values:s.spacing,base:r});typeof o=="object"&&Object.keys(o).forEach((c,d,h)=>{if(!o[c]){const g=d>0?o[h[d-1]]:"column";o[c]=g}}),n=X(n,P({theme:e},f,(c,d)=>s.useFlexGap?{gap:T(t,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Re(d?o[d]:s.direction)}`]:T(t,c)}}))}return n=K(e.breakpoints,n),n};function Be(s={}){const{createStyledComponent:e=xe,useThemeProps:n=_e,componentName:t="MuiStack"}=s,r=()=>ie({root:["root"]},c=>oe(t,c),{}),o=e(Ee);return p.forwardRef(function(c,d){const h=n(c),b=ee(h),{component:g="div",direction:N="column",spacing:q=0,divider:S,children:D,className:z,useFlexGap:U=!1}=b,W=se(b,Ce),w={direction:N,spacing:q,useFlexGap:U},J=r();return _.jsx(o,$({as:g,ownerState:w,ref:d,className:te(J.root,z)},W,{children:S?je(D,S):D}))})}const Se=Be({createStyledComponent:le("div",{name:"MuiStack",slot:"Root",overridesResolver:(s,e)=>e.root}),useThemeProps:s=>ae({props:s,name:"MuiStack"})}),G=Se;function H(s=""){const{database:e}=j(),[n,t]=p.useState(e.chars.get(s));return p.useEffect(()=>t(e.chars.get(s)),[e,s]),p.useEffect(()=>s?e.chars.follow(s,(r,o,f)=>o==="update"&&t(f)):void 0,[s,t,e]),n}function m({characterKey:s,abilityKey:e}){const n=H(s),{database:t}=j(),r=e.charAt(0).toUpperCase()+e.slice(1);return i(O,{title:`${r} Lv. ${(n==null?void 0:n[e])??1}`,disabled:!n,children:!!s&&re(1,ce[e][(n==null?void 0:n.ascension)??0]).map(o=>a(F,{selected:(n==null?void 0:n[e])===o,disabled:(n==null?void 0:n[e])===o,onClick:()=>t.chars.set(s,{[e]:o}),children:[r," Lv. ",o]},`${e}_${o}`))})}function He({character:s,onClick:e}){const n=ve(he("0",...be(s))),t=de(ue,{et:"self",src:"0"});return i(G,{children:i(A,{children:a(I,{children:[e?i(ge,{onClick:e,children:i(l,{variant:"h4",children:s.key})}):i(l,{variant:"h4",children:s.key}),i(v,{}),a(l,{children:["Eidolon: ",s.eidolon]}),a(l,{children:["Level: ",s.level]}),a(l,{children:["ATK: ",n.compute(t.final.atk).val]}),a(l,{children:["Break effect: ",n.compute(t.final.brEff_).val]}),a(l,{children:["CRIT Rate: ",n.compute(t.final.crit_).val]}),a(l,{children:["CRIT DMG: ",n.compute(t.final.crit_dmg_).val]}),a(l,{children:["DEF: ",n.compute(t.final.def).val]}),a(l,{children:["Effect Hit Rate: ",n.compute(t.final.eff_).val]}),a(l,{children:["Effect RES: ",n.compute(t.final.eff_res_).val]}),a(l,{children:["Energy Regeneration Rate:"," ",n.compute(t.final.enerRegen_).val]}),a(l,{children:["Heal Boost: ",n.compute(t.final.heal_).val]}),a(l,{children:["HP: ",n.compute(t.final.hp).val]}),a(l,{children:["Speed: ",n.compute(t.final.spd).val]})]})})})}var R={},De=V;Object.defineProperty(R,"__esModule",{value:!0});var k=R.default=void 0,Pe=De(L()),Te=_,ye=(0,Pe.default)((0,Te.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");k=R.default=ye;var E={},Me=V;Object.defineProperty(E,"__esModule",{value:!0});var x=E.default=void 0,$e=Me(L()),Ae=_,Ie=(0,$e.default)((0,Ae.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");x=E.default=Ie;function Ne({characterKey:s,onClose:e}){return i(fe,{open:!!s,onClose:e,children:i(p.Suspense,{fallback:i(pe,{variant:"rectangular",width:"100%",height:1e3}),children:s&&i(Le,{characterKey:s})})})}function Le({characterKey:s}){const e=H(s),{database:n}=j();return i(A,{children:a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[i(l,{variant:"h2",children:s}),i(M,{type:"number",label:"Level",variant:"outlined",inputProps:{min:1,max:90},value:(e==null?void 0:e.level)||0,onChange:t=>n.chars.set(s,{level:parseInt(t.target.value)}),disabled:!e}),i(M,{type:"number",label:"Ascension",variant:"outlined",inputProps:{min:0,max:6},value:(e==null?void 0:e.ascension)||0,onChange:t=>n.chars.set(s,{ascension:parseInt(t.target.value)}),disabled:!e}),i(O,{title:`Eidolon Lv. ${(e==null?void 0:e.eidolon)??0}`,fullWidth:!1,disabled:!e,children:me.map(t=>a(F,{selected:(e==null?void 0:e.eidolon)===t,disabled:(e==null?void 0:e.eidolon)===t,onClick:()=>n.chars.set(s,{eidolon:t}),children:["Eidolon Lv. ",t]},t))}),a(G,{spacing:1,children:[i(l,{variant:"h6",children:"Abilites"}),i(v,{}),a(u,{container:!0,gap:1,children:[i(u,{item:!0,children:i(m,{characterKey:s,abilityKey:"basic"})}),i(u,{item:!0,children:i(m,{characterKey:s,abilityKey:"skill"})}),i(u,{item:!0,children:i(m,{characterKey:s,abilityKey:"ult"})}),i(u,{item:!0,children:i(m,{characterKey:s,abilityKey:"talent"})})]}),i(l,{variant:"h6",children:"Bonus Abilities"}),i(v,{}),i(u,{container:!0,gap:1,children:Object.entries((e==null?void 0:e.bonusAbilities)??{}).map(([t,r])=>i(u,{item:!0,children:i(y,{color:r?"success":"primary",onClick:()=>{n.chars.set(s,{bonusAbilities:{...e==null?void 0:e.bonusAbilities,[t]:!r}})},startIcon:r?i(k,{}):i(x,{}),children:t})},t))}),i(l,{variant:"h6",children:"Stat Boosts"}),i(v,{}),i(u,{container:!0,gap:1,children:Object.entries((e==null?void 0:e.statBoosts)??{}).map(([t,r])=>i(u,{item:!0,children:i(y,{color:r?"success":"primary",onClick:()=>{n.chars.set(s,{statBoosts:{...e==null?void 0:e.statBoosts,[t]:!r}})},startIcon:r?i(k,{}):i(x,{}),children:t})},t))})]})]})})}export{Ne as C,G as S,He as a,H as u};
