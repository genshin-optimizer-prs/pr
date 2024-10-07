import{N as C,n as e,q as n,E as u,H as x,X as b,G as g,L as h,r as m,ak as w,$ as y,Y as T}from"./index-D9Qy0kut.js";import{u as k,C as I}from"./useForceUpdate-KA1_Bohs.js";import{u as v,a as D}from"./useInfScroll-QWCi875-.js";import{I as S}from"./InfoTooltip-CY1c2peT.js";import{C as E}from"./CardActionArea-DOPtH3yH.js";function G({teamId:s,bgTheme:i="light",onClick:o}){const{database:l}=C(),t=l.teams.get(s);return e(h,{bgt:i,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(u,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",flexDirection:"row"},children:e(E,{onClick:()=>o(),sx:{p:1},children:n(x,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:t.name})," ",t.description&&e(S,{title:t.description})]})})}),e(b,{children:e(g,{container:!0,columns:4,gap:1,children:t.loadoutMetadata.map((r,c)=>{var d;return r!=null&&r.loadoutId?e(h,{sx:{flexGrow:1},children:e(x,{children:(d=l.loadouts.get(r.loadoutId))==null?void 0:d.key})},r.loadoutId):e(h,{sx:{flexGrow:1},children:e(x,{children:"Empty"})},c)})})})]})})}const H={xs:1,sm:2,md:3,lg:3,xl:4},M={xs:5,sm:5,md:10,lg:10,xl:10};function $(){const{database:s}=C(),[i,o]=k();m.useEffect(()=>s.teams.followAny(o),[s,o]);const l=w(),{teamIds:t}=m.useMemo(()=>{const a=s.teams.keys;return i&&{teamIds:a}},[s,i]),r=v(),{numShow:c,setTriggerElement:d}=D(M[r],t.length),p=m.useMemo(()=>t.slice(0,c),[t,c]);return e(m.Suspense,{fallback:e(y,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:n(h,{bgt:"dark",children:[e(I,{title:"Teams"}),n(b,{children:[e(T,{onClick:()=>s.teams.new(),children:"Create Team"}),n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(g,{container:!0,spacing:1,columns:H,children:p.map(a=>e(g,{item:!0,xs:1,children:e(G,{teamId:a,onClick:f=>l(`${a}${f?`/${f}`:""}`)})},a))}),t.length!==p.length&&e(y,{ref:a=>{a&&d(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function P(){return e(u,{sx:{mt:1},children:e($,{})})}export{P as default};
