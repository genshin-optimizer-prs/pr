import{ab as y,F as e,S as n,a2 as u,a5 as x,aM as w,aj as b,a4 as g,a8 as h,h as d,aN as T,ao as C,al as k}from"./index-AuOfA1ES.js";import{u as v,a as D,b as I}from"./useInfScroll-B9STtMBe.js";import{C as S}from"./CardActionArea-Dc6MJyTC.js";import{C as E}from"./CardHeader-DEq_9C79.js";function M({teamId:s,bgTheme:i="light",onClick:o}){const{database:l}=y(),a=l.teams.get(s);return e(h,{bgt:i,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(u,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",flexDirection:"row"},children:e(S,{onClick:()=>o(),sx:{p:1},children:n(x,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:a.name})," ",a.description&&e(w,{title:a.description})]})})}),e(b,{children:e(g,{container:!0,columns:4,gap:1,children:a.loadoutData.map((r,c)=>{var m;return r!=null&&r.teamCharId?e(h,{sx:{flexGrow:1},children:e(x,{children:(m=l.teamChars.get(r.teamCharId))==null?void 0:m.key})},r.teamCharId):e(h,{sx:{flexGrow:1},children:e(x,{children:"Empty"})},c)})})})]})})}const j={xs:1,sm:2,md:3,lg:3,xl:4},A={xs:5,sm:5,md:10,lg:10,xl:10};function G(){const{database:s}=y(),[i,o]=v();d.useEffect(()=>s.teams.followAny(o),[s,o]);const l=T(),{teamIds:a}=d.useMemo(()=>{const t=s.teams.keys;return i&&{teamIds:t}},[s,i]),r=D(),{numShow:c,setTriggerElement:m}=I(A[r],a.length),p=d.useMemo(()=>a.slice(0,c),[a,c]);return e(d.Suspense,{fallback:e(C,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:n(h,{bgt:"dark",children:[e(E,{title:"Teams"}),n(b,{children:[e(k,{onClick:()=>s.teams.new(),children:"Create Team"}),n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(g,{container:!0,spacing:1,columns:j,children:p.map(t=>e(g,{item:!0,xs:1,children:e(M,{teamId:t,onClick:f=>l(`${t}${f?`/${f}`:""}`)})},t))}),a.length!==p.length&&e(C,{ref:t=>{t&&m(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function F(){return e(u,{sx:{mt:1},children:e(G,{})})}export{F as default};
