import{u as G,e as s,h as w,b as R,aq as g,af as _,p as a,n as c,C as x,J as i,D as W,s as j,K as S,T as b,t as B,V}from"./index-772fa1c4.js";import{x as $}from"./index-7a24dc25.js";import{g as o}from"./index-728f7b1a.js";import{c as v}from"./totalUtils-be83dc1d.js";import{C as D}from"./CloseButton-81d695e8.js";import{I as q,i as J}from"./ColoredText-19a768e9.js";import{T as K,e as P}from"./StarDisplay-23557c06.js";import{W as O,a as Q}from"./WeaponCard-4a684d6a.js";import{C as U}from"./CardActionArea-a3d03c52.js";import"./SqBadge-dc1c5eef.js";import"./DropdownButton-528ff518.js";import"./SolidToggleButtonGroup-049a7cee.js";import"./useWeapon-fd462523.js";import"./ConditionalWrapper-0d57577b.js";function ce({show:I,ascension:E=0,onHide:p,onSelect:M,filter:y=()=>!0,weaponTypeFilter:n}){const{t:d}=G(["page_weapon","weaponNames_gen"]),[u,C]=s.useState(n?[n]:[...w]),m=R(),[z,A]=s.useState(m.displayWeapon.get());s.useEffect(()=>m.displayWeapon.follow((e,t)=>A(t)),[m]),s.useEffect(()=>{n&&C([n])},[n]);const[T,L]=s.useState(""),h=s.useDeferredValue(T),{rarity:f}=z,l=s.useMemo(()=>g.filter(e=>y(o(e))).filter(e=>u.includes(o(e).weaponType)).filter(e=>!h||d(`weaponNames_gen:${e}`).toLowerCase().includes(h.toLowerCase())).filter(e=>f.includes(o(e).rarity)).sort((e,t)=>o(t).rarity-o(e).rarity),[h,y,f,d,u]),N=s.useMemo(()=>v(w,e=>g.forEach(t=>{const r=o(t).weaponType;e[r].total++,l.includes(t)&&e[r].current++})),[l]),k=s.useMemo(()=>v(_,e=>g.forEach(t=>{const r=o(t).rarity;e[r].total++,l.includes(t)&&e[r].current++})),[l]);return a(V,{open:I,onClose:p,children:c(B,{children:[a(x,{sx:{py:1},children:c(i,{container:!0,spacing:1,children:[a(i,{item:!0,children:a(O,{value:u,totals:N,onChange:C,disabled:!!n,size:"small"})}),a(i,{item:!0,children:a(Q,{sx:{height:"100%"},onChange:e=>m.displayWeapon.set({rarity:e}),value:f,totals:k,size:"small"})}),a(i,{item:!0,flexGrow:1,children:a(K,{autoFocus:!0,size:"small",value:T,onChange:e=>L(e.target.value),label:d("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),a(i,{item:!0,children:a(D,{onClick:p})})]})}),a(W,{}),a(x,{children:a(i,{container:!0,spacing:1,children:l.map(e=>{var r;const t=o(e);return a(i,{item:!0,lg:3,md:4,children:a(j,{sx:{height:"100%"},children:c(U,{onClick:()=>{p(),M(e)},sx:{display:"flex"},children:[a(S,{component:"img",src:$(e,E>=2),sx:{width:100,height:"auto"},className:` grad-${t.rarity}star`}),c(S,{sx:{flexGrow:1,px:1},children:[a(b,{variant:"subtitle1",children:t.name}),c(b,{sx:{display:"flex",alignItems:"baseline"},children:[a(q,{size:1.5,src:(r=J.weaponTypes)==null?void 0:r[t.weaponType]}),a(P,{stars:t.rarity,colored:!0})]})]})]})})},e)})})}),a(W,{}),a(x,{sx:{py:1},children:a(D,{large:!0,onClick:p})})]})})}export{ce as default};
