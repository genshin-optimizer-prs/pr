import{r as x,D as M,a as v,dz as w,dK as A,c9 as k,d as a,f,b as e,ap as T,T as p,cl as S,cB as H,o as L,e as O,B as _,p as j,cz as E,cD as q,O as I,u as z,cU as K,M as P,aj as U,ak as V,N as B,aw as F,fH as N,ag as R,aq as W,h as $,al as G,l as J,C as Q,aT as X}from"./index-BgAwK9rD.js";import{u as Y}from"./useTeamChar-K8tGVu4R.js";import{d as Z}from"./Settings-BmWJmDcK.js";function ee({optimizationTarget:t,customMultiTargets:m}){var s;const{data:o}=x.useContext(M),c=v(),d=x.useMemo(()=>w(o,t[0],c),[o,t,c]),{title:h,icon:n,action:l}=d??{},r=A(o.getDisplay(),t),{textSuffix:u,icon:g,name:y=t[0]==="custom"?(s=m[parseInt(t[1]??"")])==null?void 0:s.name:void 0}=(r&&k(r.info))??{};return a(S,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[n||g,e("span",{children:h}),!!l&&e(T,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(T,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),u&&a("span",{children:[" ",u]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:n,buildTcIds:l,optConfigId:r,customMultiTargets:u}=c.teamChars.get(t),{optimizationTarget:g}=H(r);return a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(L,{}),e(p,{variant:"h6",children:d}),!!h&&e(_,{title:e(p,{children:h}),children:e(O,{})}),m&&e(Z,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:n.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(E,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:u.length})]})]})]}),g&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(q,{}),e(f,{children:"Optimization Target:"}),e(ee,{customMultiTargets:u,optimizationTarget:g})]}),o]})}function le({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=z(t),{name:n,description:l,loadoutData:r}=h,u=x.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:s}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(D=>(D==null?void 0:D.teamCharId)===s))}),[d,r]),[g,y]=x.useState(()=>u.map((i,s)=>i.length===1?s:void 0).filter(K)),b=()=>{d.teams.remove(t),r.forEach((i,s)=>{!i||!g.includes(s)||d.teamChars.remove(i.teamCharId)}),c()};return e(G,{open:m,onClose:o,children:a($,{children:[e(P,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:"Delete Team:"}),e("strong",{children:n}),l&&e(_,{title:l,children:e(O,{})})]}),action:e(U,{onClick:o,children:e(V,{})})}),e(B,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(F,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,s)=>i?e(te,{teamCharId:i.teamCharId,selected:g.includes(s),onClick:()=>y(C=>N(C,s)),inTeams:u[s]},s):null)]}),e(B,{}),e(I,{sx:{display:"flex",justifyContent:"flex-end"},children:e(R,{color:"error",startIcon:e(W,{}),onClick:b,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=Y(t),{key:h}=d,n=J(h),{target:l}=(n==null?void 0:n[h])??{},r=x.useMemo(()=>{if(!(!n||!l))return{data:l,teamData:n,compareData:void 0}},[l,n]);if(r)return e(M.Provider,{value:r,children:e($,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(Q,{onClick:o,children:e(ae,{teamCharId:t,children:e(X,{color:c.length===1?"success":"warning",children:e(p,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,le as T};
