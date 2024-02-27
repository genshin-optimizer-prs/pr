import{u as G,e as s,h as w,b as R,ar as f,ag as _,p as a,n as c,C as x,J as i,D as W,s as j,K as S,T as b,t as B,X as $}from"./index-6a402ac4.js";import{x as J}from"./index-e638fb44.js";import{g as o}from"./index-1269ca0b.js";import{c as v}from"./totalUtils-d1133ca9.js";import{C as D}from"./CloseButton-33afcc9f.js";import{I as K,i as P}from"./ColoredText-61580f2a.js";import{T as V,S as X}from"./StarDisplay-8c8917ad.js";import{W as q,a as O}from"./WeaponCard-45951242.js";import{C as Q}from"./CardActionArea-b259be91.js";import"./SqBadge-47afd55f.js";import"./MenuList-070a4cac.js";import"./LocationAutocomplete-6077c619.js";import"./DropdownButton-77bc0d83.js";import"./ButtonGroup-00644851.js";import"./useWeapon-1cad2fb3.js";function pe({show:I,ascension:E=0,onHide:p,onSelect:M,filter:y=()=>!0,weaponTypeFilter:n}){const{t:d}=G(["page_weapon","weaponNames_gen"]),[u,C]=s.useState(n?[n]:[...w]),m=R(),[z,A]=s.useState(m.displayWeapon.get());s.useEffect(()=>m.displayWeapon.follow((e,t)=>A(t)),[m]),s.useEffect(()=>n&&C([n]),[n]);const[T,L]=s.useState(""),h=s.useDeferredValue(T),{rarity:g}=z,l=s.useMemo(()=>f.filter(e=>y(o(e))).filter(e=>u.includes(o(e).weaponType)).filter(e=>!h||d(`weaponNames_gen:${e}`).toLowerCase().includes(h.toLowerCase())).filter(e=>g.includes(o(e).rarity)).sort((e,t)=>o(t).rarity-o(e).rarity),[h,y,g,d,u]),N=s.useMemo(()=>v(w,e=>f.forEach(t=>{const r=o(t).weaponType;e[r].total++,l.includes(t)&&e[r].current++})),[l]),k=s.useMemo(()=>v(_,e=>f.forEach(t=>{const r=o(t).rarity;e[r].total++,l.includes(t)&&e[r].current++})),[l]);return a($,{open:I,onClose:p,children:c(B,{children:[a(x,{sx:{py:1},children:c(i,{container:!0,spacing:1,children:[a(i,{item:!0,children:a(q,{value:u,totals:N,onChange:C,disabled:!!n,size:"small"})}),a(i,{item:!0,children:a(O,{sx:{height:"100%"},onChange:e=>m.displayWeapon.set({rarity:e}),value:g,totals:k,size:"small"})}),a(i,{item:!0,flexGrow:1,children:a(V,{autoFocus:!0,size:"small",value:T,onChange:e=>L(e.target.value),label:d("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),a(i,{item:!0,children:a(D,{onClick:p})})]})}),a(W,{}),a(x,{children:a(i,{container:!0,spacing:1,children:l.map(e=>{var r;const t=o(e);return a(i,{item:!0,lg:3,md:4,children:a(j,{sx:{height:"100%"},children:c(Q,{onClick:()=>{p(),M(e)},sx:{display:"flex"},children:[a(S,{component:"img",src:J(e,E>=2),sx:{width:100,height:"auto"},className:` grad-${t.rarity}star`}),c(S,{sx:{flexGrow:1,px:1},children:[a(b,{variant:"subtitle1",children:t.name}),c(b,{sx:{display:"flex",alignItems:"baseline"},children:[a(K,{size:1.5,src:(r=P.weaponTypes)==null?void 0:r[t.weaponType]}),a(X,{stars:t.rarity,colored:!0})]})]})]})})},e)})})}),a(W,{}),a(x,{sx:{py:1},children:a(D,{large:!0,onClick:p})})]})})}export{pe as default};
