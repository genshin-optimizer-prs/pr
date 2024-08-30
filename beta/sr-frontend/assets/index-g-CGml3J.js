import{a1 as C,D as e,H as n,U as u,X as x,a8 as b,W as g,$ as h,r as m,an as w,ab as y,a9 as T}from"./index-QmHrxqFr.js";import{u as I,C as k}from"./useForceUpdate-ChLLOjve.js";import{u as v,a as D}from"./useInfScroll-DtYU9Fhr.js";import{I as S}from"./InfoTooltip-DLAhQ7NH.js";import{C as E}from"./CardActionArea-K-2kAghz.js";function H({teamId:s,bgTheme:i="light",onClick:o}){const{database:l}=C(),a=l.teams.get(s);return e(h,{bgt:i,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(u,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",flexDirection:"row"},children:e(E,{onClick:()=>o(),sx:{p:1},children:n(x,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:a.name})," ",a.description&&e(S,{title:a.description})]})})}),e(b,{children:e(g,{container:!0,columns:4,gap:1,children:a.loadoutMetadata.map((r,c)=>{var d;return r!=null&&r.loadoutId?e(h,{sx:{flexGrow:1},children:e(x,{children:(d=l.loadouts.get(r.loadoutId))==null?void 0:d.key})},r.loadoutId):e(h,{sx:{flexGrow:1},children:e(x,{children:"Empty"})},c)})})})]})})}const M={xs:1,sm:2,md:3,lg:3,xl:4},$={xs:5,sm:5,md:10,lg:10,xl:10};function A(){const{database:s}=C(),[i,o]=I();m.useEffect(()=>s.teams.followAny(o),[s,o]);const l=w(),{teamIds:a}=m.useMemo(()=>{const t=s.teams.keys;return i&&{teamIds:t}},[s,i]),r=v(),{numShow:c,setTriggerElement:d}=D($[r],a.length),p=m.useMemo(()=>a.slice(0,c),[a,c]);return e(m.Suspense,{fallback:e(y,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:n(h,{bgt:"dark",children:[e(k,{title:"Teams"}),n(b,{children:[e(T,{onClick:()=>s.teams.new(),children:"Create Team"}),n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(g,{container:!0,spacing:1,columns:M,children:p.map(t=>e(g,{item:!0,xs:1,children:e(H,{teamId:t,onClick:f=>l(`${t}${f?`/${f}`:""}`)})},t))}),a.length!==p.length&&e(y,{ref:t=>{t&&d(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function P(){return e(u,{sx:{mt:1},children:e(A,{})})}export{P as default};
