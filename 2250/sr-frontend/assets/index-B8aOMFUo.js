import{M as T,N as w,j as D,O as e,aT as S,ai as y,$ as n,aa as u,ad as p,aq as b,ac as x,af as m,h,aU as k,av as C,as as j}from"./index-BK3OpbBQ.js";import{u as _,a as E,b as M}from"./useInfScroll-BUrNJDHv.js";import{C as z}from"./CardActionArea-CXSywhhE.js";import{C as R}from"./CardHeader-Beop73tc.js";var f={},q=w;Object.defineProperty(f,"__esModule",{value:!0});var I=f.default=void 0,$=q(T()),A=D,B=(0,$.default)((0,A.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");I=f.default=B;function G(a){return e(S,{placement:"top",...a,children:e(I,{sx:{cursor:"help"}})})}function H({teamId:a,bgTheme:i="light",onClick:o}){const{database:l}=y(),t=l.teams.get(a);return e(m,{bgt:i,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:n(u,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[e(u,{sx:{display:"flex",flexDirection:"row"},children:e(z,{onClick:()=>o(),sx:{p:1},children:n(p,{sx:{display:"flex",gap:1,alignItems:"center"},variant:"h6",children:[e("span",{children:t.name})," ",t.description&&e(G,{title:t.description})]})})}),e(b,{children:e(x,{container:!0,columns:4,gap:1,children:t.loadoutData.map((s,c)=>{var d;return s!=null&&s.teamCharId?e(m,{sx:{flexGrow:1},children:e(p,{children:(d=l.teamChars.get(s.teamCharId))==null?void 0:d.key})},s.teamCharId):e(m,{sx:{flexGrow:1},children:e(p,{children:"Empty"})},c)})})})]})})}const P={xs:1,sm:2,md:3,lg:3,xl:4},U={xs:5,sm:5,md:10,lg:10,xl:10};function N(){const{database:a}=y(),[i,o]=_();h.useEffect(()=>a.teams.followAny(o),[a,o]);const l=k(),{teamIds:t}=h.useMemo(()=>{const r=a.teams.keys;return i&&{teamIds:r}},[a,i]),s=E(),{numShow:c,setTriggerElement:d}=M(U[s],t.length),g=h.useMemo(()=>t.slice(0,c),[t,c]);return e(h.Suspense,{fallback:e(C,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:n(m,{bgt:"dark",children:[e(R,{title:"Teams"}),n(b,{children:[e(j,{onClick:()=>a.teams.new(),children:"Create Team"}),n(u,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[e(x,{container:!0,spacing:1,columns:P,children:g.map(r=>e(x,{item:!0,xs:1,children:e(H,{teamId:r,onClick:v=>l(`${r}${v?`/${v}`:""}`)})},r))}),t.length!==g.length&&e(C,{ref:r=>{r&&d(r)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})]})})}function J(){return e(u,{sx:{mt:1},children:e(N,{})})}export{J as default};
