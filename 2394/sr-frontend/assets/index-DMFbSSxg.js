import{a4 as C,r,K as c,B as e,ae as d,a1 as y,ab as v,W as u,Y as m,G as b}from"./index-0_l9pkkQ.js";import{u as w,C as S}from"./useForceUpdate-T-X_L_O1.js";import{u as k,a as D}from"./useInfScroll-BBP13nuc.js";import{C as E,a as H}from"./CharacterEditor-BlUFAVod.js";import"./index-BaojWkdb.js";import"./CardActionArea-DEx0BwxN.js";import"./DropdownButton-D-6f9Naa.js";const I={xs:1,sm:2,md:3,lg:3,xl:4},K={xs:5,sm:5,md:10,lg:10,xl:10};function M(){const{database:t}=C(),[n,o]=w();r.useEffect(()=>t.chars.followAny(o),[t,o]);const{characters:s}=r.useMemo(()=>{const a=t.chars.values;return n&&{characters:a}},[t.chars.values,n]),g=k(),{numShow:i,setTriggerElement:f}=D(K[g],s.length),l=r.useMemo(()=>s.slice(0,i),[s,i]),[x,h]=r.useState(void 0);return c(b,{children:[e(E,{characterKey:x,onClose:()=>h(void 0)}),e(r.Suspense,{fallback:e(d,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:c(y,{bgt:"dark",children:[e(S,{title:"Characters"}),e(v,{children:c(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(m,{container:!0,spacing:1,columns:I,children:l.map((a,p)=>e(m,{item:!0,xs:1,children:e(H,{character:a,onClick:()=>h(a.key)})},p))}),s.length!==l.length&&e(d,{ref:a=>{a&&f(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function U(){return e(u,{my:1,children:e(M,{})})}export{U as default};
