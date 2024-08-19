import{a9 as y,D as e,Q as n,a0 as u,a3 as x,aK as w,ah as b,a2 as g,a6 as h,r as d,aL as T,am as C,aj as D}from"./index-CpOiOus8.js";import{u as k,a as v,b as I}from"./useInfScroll-C3AAlZPh.js";import{C as S}from"./CardActionArea-ByFxZ6S3.js";import{C as E}from"./CardHeader-CPk5Qkyk.js";function j({teamId:s,bgTheme:i="light",onClick:o}){const{database:l}=y(),a=l.teams.get(s);return e(h,{bgt:i,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(u,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",flexDirection:"row"},children:e(S,{onClick:()=>o(),sx:{p:1},children:n(x,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:a.name})," ",a.description&&e(w,{title:a.description})]})})}),e(b,{children:e(g,{container:!0,columns:4,gap:1,children:a.loadoutData.map((r,c)=>{var m;return r!=null&&r.teamCharId?e(h,{sx:{flexGrow:1},children:e(x,{children:(m=l.teamChars.get(r.teamCharId))==null?void 0:m.key})},r.teamCharId):e(h,{sx:{flexGrow:1},children:e(x,{children:"Empty"})},c)})})})]})})}const A={xs:1,sm:2,md:3,lg:3,xl:4},G={xs:5,sm:5,md:10,lg:10,xl:10};function H(){const{database:s}=y(),[i,o]=k();d.useEffect(()=>s.teams.followAny(o),[s,o]);const l=T(),{teamIds:a}=d.useMemo(()=>{const t=s.teams.keys;return i&&{teamIds:t}},[s,i]),r=v(),{numShow:c,setTriggerElement:m}=I(G[r],a.length),p=d.useMemo(()=>a.slice(0,c),[a,c]);return e(d.Suspense,{fallback:e(C,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:n(h,{bgt:"dark",children:[e(E,{title:"Teams"}),n(b,{children:[e(D,{onClick:()=>s.teams.new(),children:"Create Team"}),n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(g,{container:!0,spacing:1,columns:A,children:p.map(t=>e(g,{item:!0,xs:1,children:e(j,{teamId:t,onClick:f=>l(`${t}${f?`/${f}`:""}`)})},t))}),a.length!==p.length&&e(C,{ref:t=>{t&&m(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function P(){return e(u,{sx:{mt:1},children:e(H,{})})}export{P as default};
