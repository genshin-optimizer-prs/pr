import{N as C,r,q as n,n as e,$ as d,L as y,X as v,E as u,G as m,F as b}from"./index-DyNKZ9P8.js";import{u as w,C as S}from"./useForceUpdate-CCKC-_sb.js";import{u as k,a as D}from"./useInfScroll-BM7XGU-s.js";import{C as E,a as F}from"./CharacterEditor-ABZhCqTF.js";import"./index-hLFgyDzA.js";import"./CardActionArea-Dl3jyDVf.js";import"./DropdownButton-DI2AdizG.js";const H={xs:1,sm:2,md:3,lg:3,xl:4},I={xs:5,sm:5,md:10,lg:10,xl:10};function M(){const{database:t}=C(),[c,o]=w();r.useEffect(()=>t.chars.followAny(o),[t,o]);const{characters:s}=r.useMemo(()=>{const a=t.chars.values;return c&&{characters:a}},[t.chars.values,c]),g=k(),{numShow:i,setTriggerElement:f}=D(I[g],s.length),l=r.useMemo(()=>s.slice(0,i),[s,i]),[x,h]=r.useState(void 0);return n(b,{children:[e(E,{characterKey:x,onClose:()=>h(void 0)}),e(r.Suspense,{fallback:e(d,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:n(y,{bgt:"dark",children:[e(S,{title:"Characters"}),e(v,{children:n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(m,{container:!0,spacing:1,columns:H,children:l.map((a,p)=>e(m,{item:!0,xs:1,children:e(F,{character:a,onClick:()=>h(a.key)})},p))}),s.length!==l.length&&e(d,{ref:a=>{a&&f(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function q(){return e(u,{my:1,children:e(M,{})})}export{q as default};
