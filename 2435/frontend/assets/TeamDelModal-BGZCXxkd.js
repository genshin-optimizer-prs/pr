import{r as g,D as M,a as v,du as A,dF as O,c5 as L,e as a,h as u,d as e,al as T,T as p,ch as S,cx as k,p as E,f as _,B as $,aw as H,q as j,cv as P,cz as q,N as D,u as F,cQ as V,L as z,af as K,ag as N,M as B,ar as Q,fC as R,ac as U,am as W,i as w,ah as G,m as J,C as X,aP as Y}from"./index-B_vRrtyv.js";import{u as Z}from"./useTeamChar-WWIkPcUB.js";function ee({optimizationTarget:t,customMultiTargets:m}){var s;const{data:c}=g.useContext(M),o=v(),d=g.useMemo(()=>A(c,t[0],o),[c,t,o]),{title:h,icon:n,action:l}=d??{},r=O(c.getDisplay(),t),{textSuffix:f,icon:x,name:y=t[0]==="custom"?(s=m[parseInt(t[1]??"")])==null?void 0:s.name:void 0}=(r&&L(r.info))??{};return a(S,{children:[a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[n||x,e("span",{children:h}),!!l&&e(T,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(T,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),f&&a("span",{children:[" ",f]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:c}){const o=v(),{name:d,description:h,buildIds:n,buildTcIds:l,optConfigId:r,customMultiTargets:f}=o.teamChars.get(t),{optimizationTarget:x}=k(r);return a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(E,{}),e(p,{variant:"h6",children:d}),!!h&&e($,{title:e(p,{children:h}),children:e(_,{})}),m&&e(H,{sx:{ml:"auto"}})]}),a(u,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(u,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:n.length})]})]}),a(u,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(u,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(P,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:f.length})]})]})]}),x&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(q,{}),e(u,{children:"Optimization Target:"}),e(ee,{customMultiTargets:f,optimizationTarget:x})]}),c]})}function re({teamId:t,show:m,onHide:c,onDel:o}){const d=v(),h=F(t),{name:n,description:l,loadoutData:r}=h,f=g.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:s}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(I=>(I==null?void 0:I.teamCharId)===s))}),[d,r]),[x,y]=g.useState(()=>f.map((i,s)=>i.length===1?s:void 0).filter(V)),b=()=>{d.teams.remove(t),r.forEach((i,s)=>{!i||!x.includes(s)||d.teamChars.remove(i.teamCharId)}),o()};return e(G,{open:m,onClose:c,children:a(w,{children:[e(z,{title:a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(u,{children:"Delete Team:"}),e("strong",{children:n}),l&&e($,{title:l,children:e(_,{})})]}),action:e(K,{onClick:c,children:e(N,{})})}),e(B,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(Q,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,s)=>i?e(te,{teamCharId:i.teamCharId,selected:x.includes(s),onClick:()=>y(C=>R(C,s)),inTeams:f[s]},s):null)]}),e(B,{}),e(D,{sx:{display:"flex",justifyContent:"flex-end"},children:e(U,{color:"error",startIcon:e(W,{}),onClick:b,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:c,inTeams:o}){const d=Z(t),{key:h}=d,n=J(h),{target:l}=(n==null?void 0:n[h])??{},r=g.useMemo(()=>{if(!(!n||!l))return{data:l,teamData:n,compareData:void 0}},[l,n]);if(r)return e(M.Provider,{value:r,children:e(w,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(X,{onClick:c,children:e(ae,{teamCharId:t,children:e(Y,{color:o.length===1?"success":"warning",children:e(p,{children:o.length===1?"Only in current team":`In ${o.length} teams`})})})})})})}export{ae as L,ee as O,re as T};
