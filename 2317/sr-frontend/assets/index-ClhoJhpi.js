import{h as l,H as e,am as R,K as $,aQ as k,F as P,G as z,j as D,aP as N,ad as _,ah as q,ai as F,U as u,aR as H,a4 as g,a7 as y,al as S,aS as T,aa as B,I as L,ak as V,aL as j,aj as W,aT as A,aU as w,aV as Q,aW as U,aq as G,aX as O}from"./index-yaDfDdOA.js";import{C as X}from"./CardActionArea-DTZal4zI.js";import{C as J}from"./CardHeader-Ce-tnqOg.js";function K({value:t,onChange:a,...s}){const[r,i]=l.useState(t);l.useEffect(()=>{i(t)},[t]);const c=()=>a(r);return e(R,{value:r,onChange:n=>i(n.target.value),onBlur:c,onKeyDown:n=>n.key==="Enter"&&!s.multiline&&c(),...s})}function Y(t){const{t:a}=$("ui"),s=k({path:"/:page/*"}),r=a("pageTitle"),i=t??((s==null?void 0:s.params.page)&&a(`tabs.${s==null?void 0:s.params.page}`));l.useEffect(()=>{i?document.title=`${i} - ${r}`:document.title=r},[a,r,i])}var M={},Z=z;Object.defineProperty(M,"__esModule",{value:!0});var I=M.default=void 0,ee=Z(P()),ae=D,te=(0,ee.default)((0,ae.jsx)("path",{d:"M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"}),"BorderColor");I=M.default=te;function se({teamId:t,charKey:a,tab:s=""}){const{t:r}=$("page_team"),i=N(),{database:c}=_(),n=c.teams.get(t),{loadoutData:h}=n,b=q(),p=F(b.breakpoints.down("md")),[m,f]=l.useState(!1),C=o=>{c.teams.set(t,{name:o})},d=o=>{c.teams.set(t,{description:o})};return u(g,{sx:()=>({borderBottom:"1px rgb(200,200,200,0.3) solid","& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px",backgroundColor:"rgb(200,200,200,0.5)"}}),children:[e(X,{onClick:()=>f(!0),children:e(H,{placement:"top",title:u(g,{children:[u(g,{sx:{display:"flex",color:"info.light",gap:1},children:[e(I,{}),e(y,{children:e("strong",{children:r`team.editNameDesc`})})]}),!!n.description&&e(y,{children:n.description})]}),children:e(S,{sx:{display:"flex",justifyContent:"center","&:hover":{color:"info.light"}},children:u(y,{variant:"h5",sx:{display:"flex",gap:1,alignItems:"center",justifyContent:"center",textShadow:"#000 0 0 10px !important"},children:[e(T,{}),n.name]})})})}),e(W,{open:m,onClose:()=>f(!1),children:u(B,{children:[e(J,{title:r`team.editNameDesc`,avatar:e(T,{}),titleTypographyProps:{variant:"h6"},action:e(L,{onClick:()=>f(!1),children:e(V,{})})}),e(j,{}),e(S,{children:u(g,{display:"flex",flexDirection:"column",gap:2,sx:{mt:2},children:[e(K,{label:r`team.name`,value:n.name,onChange:o=>C(o),autoFocus:!0}),e(K,{label:r`team.desc`,value:n.description,onChange:o=>d(o),multiline:!0,minRows:4})]})})]})}),e(j,{}),u(A,{variant:"fullWidth",value:a??"team",orientation:p?"vertical":"horizontal",children:[e(w,{icon:e(T,{}),iconPosition:"start",value:"team",label:"Team Settings",onClick:()=>i(`/teams/${t}/`)}),h.map((o,v)=>{var E;const x=o&&((E=c.teamChars.get(o==null?void 0:o.teamCharId))==null?void 0:E.key);return e(w,{icon:e(Q,{}),iconPosition:"start",value:x??v,disabled:!h[v],label:x?e(y,{children:r`Character Name`}):`Character ${v+1}`,onClick:()=>x&&i(`/teams/${t}/${x}/${s}`)},v)})]})]})}const re=e(G,{variant:"rectangular",width:"100%",height:1e3});function le(){const{database:t}=_(),{teamId:a}=U(),s=!a||!t.teams.keys.includes(a);return l.useEffect(()=>{s||t.teams.set(a,{lastEdit:Date.now()})},[a,t.teams,s]),s?e(O,{to:"/teams"}):e(g,{display:"flex",flexDirection:"column",gap:1,children:e(l.Suspense,{fallback:re,children:a&&e(ne,{teamId:a})})})}function ne({teamId:t}){var f;const{database:a}=_(),s=N(),r=a.teams.get(t),{loadoutData:i}=r,{params:{characterKey:c}}=k({path:"/teams/:teamId/:characterKey",end:!1})??{params:{}},{params:{tab:n}}=k({path:"/teams/:teamId/:characterKey/:tab"})??{params:{}},h=l.useMemo(()=>i.find(d=>{var o;return(d==null?void 0:d.teamCharId)&&((o=a.teamChars.get(d.teamCharId))==null?void 0:o.key)===c}),[i,a.teamChars,c]);l.useEffect(()=>{window.scrollTo({top:0})},[]),l.useEffect(()=>{h||s("",{replace:!0})},[h,s]);const b=h==null?void 0:h.teamCharId,p=(f=a.teamChars.get(b))==null?void 0:f.key,{t:m}=$(["charNames_gen","page_character"]);return Y(l.useMemo(()=>{const C=m(p?"charNames_gen:Character":"Team Settings"),d=n?m(`page_character:tabs.${n}`):p?m("Loadout/Build"):n;return`${r.name} - ${C}${d?` - ${d}`:""}`},[p,m,n,r.name])),e(g,{sx:{display:"flex",gap:1,flexDirection:"column",mx:1,mt:2},children:e(B,{children:e(se,{teamId:t,charKey:p,tab:n})})})}export{le as default};
