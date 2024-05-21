import{r as C,D as S,a as v,d2 as F,dk as V,c3 as G,d as t,f as l,b as e,al as L,T as x,cf as X,dU as Y,e as j,B as A,o as D,dE as Z,N as T,u as z,cu as J,L as Q,af as E,ag as K,M as k,as as ee,fp as te,ac as ne,am as _,h as B,ah as ae,l as P,C as w,aP as W,aa as se,R as ie,X as re,i as le,bH as oe,aY as ce,bN as de,k as he,eZ as pe,g as ue,S as xe,bO as ge,bT as fe,U as me,p as be,q as Ce,s as ye}from"./index-B9O_xPp7.js";import{d as R,O as Ie,u as q}from"./consts-x8fE83AO.js";import{d as ve}from"./Settings-B3sA9GWA.js";function we({optimizationTarget:n,customMultiTargets:g}){var r;const{data:h}=C.useContext(S),o=v(),s=C.useMemo(()=>F(h,n[0],o),[h,n,o]),{title:p,icon:c,action:u}=s??{},d=V(h.getDisplay(),n),{textSuffix:i,icon:f,name:m=n[0]==="custom"?(r=g[parseInt(n[1]??"")])==null?void 0:r.name:void 0}=(d&&G(d.info))??{};return t(X,{children:[t(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[c||f,e("span",{children:p}),!!u&&e(L,{color:"success",sx:{whiteSpace:"normal"},children:u})]}),e(x,{sx:{display:"flex",alignItems:"center"},children:t(L,{sx:{whiteSpace:"normal"},children:[e("strong",{children:m}),i&&t("span",{children:[" ",i]})]})})]})}function De({teamCharId:n,showSetting:g=!1,children:h}){const o=v(),{name:s,description:p,buildIds:c,buildTcIds:u,optConfigId:d,customMultiTargets:i}=o.teamChars.get(n),{optimizationTarget:f}=Y(d);return t(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[t(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(R,{}),e(x,{variant:"h6",children:s}),!!p&&e(A,{title:e(x,{children:p}),children:e(j,{})}),g&&e(ve,{sx:{ml:"auto"}})]}),t(l,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[t(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(D,{}),t(x,{children:["Builds: ",e("strong",{children:c.length})]})]}),t(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(D,{}),t(x,{children:["TC Builds: ",e("strong",{children:u.length})]})]}),t(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(Z,{}),t(x,{children:["Custom multi-targets: ",e("strong",{children:i.length})]})]})]}),f&&t(x,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Ie,{}),e(l,{children:"Optimization Target:"}),e(we,{customMultiTargets:i,optimizationTarget:f})]}),h]})}function Te({teamId:n,show:g,onHide:h,onDel:o}){const s=v(),p=z(n),{name:c,description:u,loadoutData:d}=p,i=C.useMemo(()=>d.map(a=>{if(!a)return[];const{teamCharId:r}=a;return s.teams.values.filter(({loadoutData:b})=>b.find(I=>(I==null?void 0:I.teamCharId)===r))}),[s,d]),[f,m]=C.useState(()=>i.map((a,r)=>a.length===1?r:void 0).filter(J)),y=()=>{s.teams.remove(n),d.forEach((a,r)=>{!a||!f.includes(r)||s.teamChars.remove(a.teamCharId)}),o()};return e(ae,{open:g,onClose:h,children:t(B,{children:[e(Q,{title:t(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(l,{children:"Delete Team:"}),e("strong",{children:c}),u&&e(A,{title:u,children:e(j,{})})]}),action:e(E,{onClick:h,children:e(K,{})})}),e(k,{}),t(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(ee,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),d.map((a,r)=>a?e(ke,{teamCharId:a.teamCharId,selected:f.includes(r),onClick:()=>m(b=>te(b,r)),inTeams:i[r]},r):null)]}),e(k,{}),e(T,{sx:{display:"flex",justifyContent:"flex-end"},children:e(ne,{color:"error",startIcon:e(_,{}),onClick:y,children:"Delete"})})]})})}function ke({teamCharId:n,selected:g,onClick:h,inTeams:o}){const s=q(n),{key:p}=s,c=P(p),{target:u}=(c==null?void 0:c[p])??{},d=C.useMemo(()=>{if(!(!c||!u))return{data:u,teamData:c,compareData:void 0}},[u,c]);if(d)return e(S.Provider,{value:d,children:e(B,{bgt:"light",sx:{border:g?"2px red solid":void 0},children:e(w,{onClick:h,children:e(De,{teamCharId:n,children:e(W,{color:o.length===1?"success":"warning",children:e(x,{children:o.length===1?"Only in current team":`In ${o.length} teams`})})})})})})}function Oe({teamId:n,onClick:g,bgt:h}){const o=z(n),{name:s,description:p,loadoutData:c}=o,u=v(),[d,i,f]=se();return e(B,{bgt:h,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:t(l,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[t(l,{sx:{display:"flex",flexDirection:"row"},children:[e(w,{onClick:()=>g(),sx:{p:1},children:t(x,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:s})," ",p&&e(A,{title:e(x,{children:p}),children:e(j,{})})]})}),e(Te,{teamId:n,show:d,onHide:f,onDel:function(){}}),e(E,{onClick:i,color:"error",children:e(_,{})})]}),e(l,{sx:{marginTop:"auto"},children:c.map((m,y)=>{var b;const a=m==null?void 0:m.teamCharId,r=a&&((b=u.teamChars.get(a))==null?void 0:b.key);return t(ie.Fragment,{children:[e(k,{}),r?e(w,{onClick:()=>g(r),children:e(Se,{characterKey:r,teamId:n,teamCharId:a})}):e(w,{onClick:()=>g(),sx:{height:120,position:"relative"},children:e(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120},children:e(l,{component:"img",src:re.team[`team${y+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},y)})})]})})}function Se({characterKey:n,teamId:g,teamCharId:h}){var $;const o=v(),s=le(n),{gender:p}=oe(),{silly:c}=C.useContext(ce),u=de(n),{name:d}=q(h),i=o.teams.getLoadoutDatum(g,h),f=o.teams.getActiveBuildName(i),m=o.teams.getLoadoutWeapon(i),y=(()=>{const{buildType:N,buildTcId:H}=i;return N==="tc"&&H?he(o.buildTcs.get(H)):Object.values(o.teams.getLoadoutArtifacts(i)).filter(U=>U)})(),a=P(n,void 0,y,m),r=($=a==null?void 0:a[n])==null?void 0:$.target,b=C.useMemo(()=>s&&{character:s},[s]),I=C.useMemo(()=>r&&a&&{data:r,teamData:a},[r,a]),O=pe(n,"banner",p),M=ue(n);return!b||!I?null:e(ye.Provider,{value:b,children:e(S.Provider,{value:I,children:e(C.Suspense,{fallback:e(xe,{variant:"rectangular",width:"100%",height:300}),children:t(l,{className:O?void 0:`grad-${u.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${O})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:0}},children:[e(l,{sx:{position:"absolute",width:"100%",height:"100%",zIndex:2,top:0,background:"linear-gradient(to top, rgba(50,50,50,0.7), rgba(0,0,0,0) 25% )"}}),t(l,{sx:{height:120,width:120,position:"relative"},children:[e(l,{component:"img",src:ge(n,p,c),sx:{height:120,width:120,zIndex:1}}),s&&e(x,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e("strong",{children:fe(s.level,s.ascension)})}),s&&e(x,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:t("strong",{children:["C",s.constellation]})}),n.startsWith("Traveler")&&e(x,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e(W,{color:M,children:e(me,{ele:M})})})]}),t(l,{sx:{pr:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:3},children:[t(x,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(R,{}),e("span",{children:d})]}),t(x,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(D,{}),e("span",{children:f})]}),(i==null?void 0:i.buildType)==="tc"&&(i!=null&&i.buildTcId)?e(be,{weapon:m}):e(Ce,{})]})]})})})})}export{De as L,we as O,Oe as T,Te as a};
