import{u as N,e as t,h as C,b as _,as as f,ah as R,p as a,n as l,C as W,U as j,D as k,J as T,s as B,K as w,T as S,t as G,W as $}from"./index-bf826dbc.js";import{x as J}from"./index-03c7cd96.js";import{d as K}from"./Close-460b4375.js";import{g as o}from"./index-6f905208.js";import{c as b}from"./totalUtils-4c41bd81.js";import{I as P,i as U}from"./ColoredText-c01d8682.js";import{T as V,e as q}from"./StarDisplay-039aac45.js";import{W as O,a as Q}from"./WeaponCard-f3970c26.js";import{C as X}from"./CardActionArea-2cac6d04.js";import"./SqBadge-beffe4bd.js";import"./DropdownButton-77201243.js";import"./SolidToggleButtonGroup-0db8f03e.js";import"./useWeapon-49f9d719.js";import"./ConditionalWrapper-a49607f3.js";function pe({show:I,ascension:v=0,onHide:p,onSelect:D,filter:g=()=>!0,weaponTypeFilter:i}){const{t:m}=N(["page_weapon","weaponNames_gen"]),[d,x]=t.useState(i?[i]:[...C]),c=_(),[E,M]=t.useState(c.displayWeapon.get());t.useEffect(()=>c.displayWeapon.follow((e,s)=>M(s)),[c]),t.useEffect(()=>{i&&x([i])},[i]);const[y,z]=t.useState(""),u=t.useDeferredValue(y),{rarity:h}=E,n=t.useMemo(()=>f.filter(e=>g(o(e))).filter(e=>d.includes(o(e).weaponType)).filter(e=>!u||m(`weaponNames_gen:${e}`).toLowerCase().includes(u.toLowerCase())).filter(e=>h.includes(o(e).rarity)).sort((e,s)=>o(s).rarity-o(e).rarity),[u,g,h,m,d]),A=t.useMemo(()=>b(C,e=>f.forEach(s=>{const r=o(s).weaponType;e[r].total++,n.includes(s)&&e[r].current++})),[n]),L=t.useMemo(()=>b(R,e=>f.forEach(s=>{const r=o(s).rarity;e[r].total++,n.includes(s)&&e[r].current++})),[n]);return a($,{open:I,onClose:p,children:l(G,{children:[l(W,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[a(O,{value:d,totals:A,onChange:x,disabled:!!i,size:"small"}),a(Q,{sx:{height:"100%"},onChange:e=>c.displayWeapon.set({rarity:e}),value:h,totals:L,size:"small"}),a(V,{autoFocus:!0,size:"small",value:y,onChange:e=>z(e.target.value),label:m("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),a(j,{onClick:p,sx:{ml:"auto"},children:a(K,{})})]}),a(k,{}),a(W,{children:a(T,{container:!0,spacing:1,children:n.map(e=>{var r;const s=o(e);return a(T,{item:!0,lg:3,md:4,children:a(B,{sx:{height:"100%"},children:l(X,{onClick:()=>{p(),D(e)},sx:{display:"flex"},children:[a(w,{component:"img",src:J(e,v>=2),sx:{width:100,height:"auto"},className:` grad-${s.rarity}star`}),l(w,{sx:{flexGrow:1,px:1},children:[a(S,{variant:"subtitle1",children:s.name}),l(S,{sx:{display:"flex",alignItems:"baseline"},children:[a(P,{size:1.5,src:(r=U.weaponTypes)==null?void 0:r[s.weaponType]}),a(q,{stars:s.rarity,colored:!0})]})]})]})})},e)})})})]})})}export{pe as default};
