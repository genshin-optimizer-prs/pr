import{r as g,D as A,a as v,dp as $,dA as w,c7 as S,d as a,f,b as e,ap as T,T as u,cj as k,cz as L,o as E,e as M,B as O,p as j,cx as H,cB as q,O as D,u as z,cS as P,M as V,aj as F,ak as K,N as B,aw as N,fz as R,ag as U,aq as W,h as _,al as G,l as J,C as Q,aT as X}from"./index-BKUNLqaA.js";import{u as Y}from"./useTeamChar-arDLA4g9.js";import{d as Z}from"./Settings-DZemUh0X.js";function ee({optimizationTarget:t,customMultiTargets:m}){var s;const{data:o}=g.useContext(A),c=v(),d=g.useMemo(()=>$(o,t[0],c),[o,t,c]),{title:h,icon:n,action:l}=d??{},r=w(o.getDisplay(),t),{textSuffix:p,icon:x,name:y=t[0]==="custom"?(s=m[parseInt(t[1]??"")])==null?void 0:s.name:void 0}=(r&&S(r.info))??{};return a(k,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[n||x,e("span",{children:h}),!!l&&e(T,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(u,{sx:{display:"flex",alignItems:"center"},children:a(T,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),p&&a("span",{children:[" ",p]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:n,buildTcIds:l,optConfigId:r,customMultiTargets:p}=c.teamChars.get(t),{optimizationTarget:x}=L(r);return a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(E,{}),e(u,{variant:"h6",children:d}),!!h&&e(O,{title:e(u,{children:h}),children:e(M,{})}),m&&e(Z,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(u,{children:["Builds: ",e("strong",{children:n.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(u,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(H,{}),a(u,{children:["Custom multi-targets: ",e("strong",{children:p.length})]})]})]}),x&&a(u,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(q,{}),e(f,{children:"Optimization Target:"}),e(ee,{customMultiTargets:p,optimizationTarget:x})]}),o]})}function le({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=z(t),{name:n,description:l,loadoutData:r}=h,p=g.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:s}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(I=>(I==null?void 0:I.teamCharId)===s))}),[d,r]),[x,y]=g.useState(()=>p.map((i,s)=>i.length===1?s:void 0).filter(P)),b=()=>{d.teams.remove(t),r.forEach((i,s)=>{!i||!x.includes(s)||d.teamChars.remove(i.teamCharId)}),c()};return e(G,{open:m,onClose:o,children:a(_,{children:[e(V,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:"Delete Team:"}),e("strong",{children:n}),l&&e(O,{title:l,children:e(M,{})})]}),action:e(F,{onClick:o,children:e(K,{})})}),e(B,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(N,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,s)=>i?e(te,{teamCharId:i.teamCharId,selected:x.includes(s),onClick:()=>y(C=>R(C,s)),inTeams:p[s]},s):null)]}),e(B,{}),e(D,{sx:{display:"flex",justifyContent:"flex-end"},children:e(U,{color:"error",startIcon:e(W,{}),onClick:b,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=Y(t),{key:h}=d,n=J(h),{target:l}=(n==null?void 0:n[h])??{},r=g.useMemo(()=>{if(!(!n||!l))return{data:l,teamData:n,compareData:void 0}},[l,n]);if(r)return e(A.Provider,{value:r,children:e(_,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(Q,{onClick:o,children:e(ae,{teamCharId:t,children:e(X,{color:c.length===1?"success":"warning",children:e(u,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,le as T};
