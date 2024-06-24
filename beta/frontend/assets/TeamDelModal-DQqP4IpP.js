import{r as x,D as A,a as v,ds as $,dD as k,c8 as w,d as a,f,b as e,ap as b,T as p,ck as S,cA as L,o as E,e as M,B as O,p as j,cy as H,cC as q,O as I,u as P,cT as V,M as F,aj as K,ak as N,N as B,aw as R,fC as U,ag as W,aq as z,h as _,al as G,l as J,C as Q,aT as X}from"./index-CXrUs_bS.js";import{u as Y}from"./useTeamChar-Wcvf5lbM.js";import{d as Z}from"./Settings-BhNW8yhT.js";function ee({optimizationTarget:t,customMultiTargets:m}){var n;const{data:o}=x.useContext(A),c=v(),d=x.useMemo(()=>$(o,t[0],c),[o,t,c]),{title:h,icon:s,action:l}=d??{},r=k(o.getDisplay(),t),{textSuffix:u,icon:g,name:y=t[0]==="custom"?(n=m[parseInt(t[1]??"")])==null?void 0:n.name:void 0}=(r&&w(r.info))??{};return a(S,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[s||g,e("span",{children:h}),!!l&&e(b,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(b,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),u&&a("span",{children:[" ",u]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:s,buildTcIds:l,optConfigId:r,customMultiTargets:u}=c.teamChars.get(t),{optimizationTarget:g}=L(r);return a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(E,{}),e(p,{variant:"h6",children:d}),!!h&&e(O,{title:e(p,{children:h}),children:e(M,{})}),m&&e(Z,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:s.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(H,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:u.length})]})]})]}),g&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(q,{}),e(f,{children:"Optimization Target:"}),e(ee,{customMultiTargets:u,optimizationTarget:g})]}),o]})}function le({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=P(t),{name:s,description:l,loadoutData:r}=h,u=x.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:n}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(D=>(D==null?void 0:D.teamCharId)===n))}),[d,r]),[g,y]=x.useState(()=>u.map((i,n)=>i.length===1?n:void 0).filter(V)),T=()=>{d.teams.remove(t),r.forEach((i,n)=>{!i||!g.includes(n)||d.teamChars.remove(i.teamCharId)}),c()};return e(G,{open:m,onClose:o,children:a(_,{children:[e(F,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:"Delete Team:"}),e("strong",{children:s}),l&&e(O,{title:l,children:e(M,{})})]}),action:e(K,{onClick:o,children:e(N,{})})}),e(B,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(R,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,n)=>i?e(te,{teamCharId:i.teamCharId,selected:g.includes(n),onClick:()=>y(C=>U(C,n)),inTeams:u[n]},n):null)]}),e(B,{}),e(I,{sx:{display:"flex",justifyContent:"flex-end"},children:e(W,{color:"error",startIcon:e(z,{}),onClick:T,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=Y(t),{key:h}=d,s=J(h),{target:l}=(s==null?void 0:s[h])??{},r=x.useMemo(()=>{if(!(!s||!l))return{data:l,teamData:s,compareData:void 0}},[l,s]);if(r)return e(A.Provider,{value:r,children:e(_,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(Q,{onClick:o,children:e(ae,{teamCharId:t,children:e(X,{color:c.length===1?"success":"warning",children:e(p,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,le as T};
