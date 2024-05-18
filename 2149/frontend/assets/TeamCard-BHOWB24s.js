import{b as I,ff as X,r as P,i as H,j as q,dD as w,dA as W,d as C,cY as _,c_ as K,dg as ee,bT as te,p as a,W as l,q as e,a8 as E,T as f,c3 as ae,dS as ne,ep as j,a_ as k,s as T,eZ as V,ci as se,C as re,a1 as U,a2 as ie,D as S,af as le,fn as oe,B as ce,a9 as F,w as B,a4 as de,f0 as N,t as D,aC as Y,Z as he,R as ue,x as pe,cP as xe,bv as fe,aL as ge,bB as me,dQ as be,eY as Ce,f as ve,a3 as ye,bC as Ie,bH as De,E as we,fo as Te,en as Se,cV as _e}from"./index-CO3tXT9j.js";import{d as je}from"./Settings-g_QIGCV-.js";function Z(t){const h=I();return X(h.teamChars,t)}var $={},ke=H;Object.defineProperty($,"__esModule",{value:!0});var A=$.default=void 0,Be=ke(P()),$e=q,Ae=(0,Be.default)((0,$e.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");A=$.default=Ae;var M={},Me=H;Object.defineProperty(M,"__esModule",{value:!0});var G=M.default=void 0,ze=Me(P()),Le=q,Oe=(0,ze.default)((0,Le.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");G=M.default=Oe;const Fe=w,Ne=W,Re=G;function Ee({optimizationTarget:t,customMultiTargets:h}){var i;const{data:u}=C.useContext(_),o=I(),s=C.useMemo(()=>K(u,t[0],o),[u,t,o]),{title:p,icon:c,action:x}=s??{},d=ee(u.getDisplay(),t),{textSuffix:r,icon:g,name:m=t[0]==="custom"?(i=h[parseInt(t[1]??"")])==null?void 0:i.name:void 0}=(d&&te(d.info))??{};return a(ae,{children:[a(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[c||g,e("span",{children:p}),!!x&&e(E,{color:"success",sx:{whiteSpace:"normal"},children:x})]}),e(f,{sx:{display:"flex",alignItems:"center"},children:a(E,{sx:{whiteSpace:"normal"},children:[e("strong",{children:m}),r&&a("span",{children:[" ",r]})]})})]})}function Pe({teamCharId:t,showSetting:h=!1,children:u}){const o=I(),{name:s,description:p,buildIds:c,buildTcIds:x,optConfigId:d,customMultiTargets:r}=o.teamChars.get(t),{optimizationTarget:g}=ne(d);return a(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(A,{}),e(f,{variant:"h6",children:s}),!!p&&e(k,{title:e(f,{children:p}),children:e(j,{})}),h&&e(je,{sx:{ml:"auto"}})]}),a(l,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(w,{}),a(f,{children:["Builds: ",e("strong",{children:c.length})]})]}),a(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(w,{}),a(f,{children:["TC Builds: ",e("strong",{children:x.length})]})]}),a(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(W,{}),a(f,{children:["Custom multi-targets: ",e("strong",{children:r.length})]})]})]}),g&&a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Re,{}),e(l,{children:"Optimization Target:"}),e(Ee,{customMultiTargets:r,optimizationTarget:g})]}),u]})}function He({teamId:t,show:h,onHide:u,onDel:o}){const s=I(),p=V(t),{name:c,description:x,loadoutData:d}=p,r=C.useMemo(()=>d.map(n=>{if(!n)return[];const{teamCharId:i}=n;return s.teams.values.filter(({loadoutData:b})=>b.find(y=>(y==null?void 0:y.teamCharId)===i))}),[s,d]),[g,m]=C.useState(()=>r.map((n,i)=>n.length===1?i:void 0).filter(se)),v=()=>{s.teams.remove(t),d.forEach((n,i)=>{!n||!g.includes(i)||s.teamChars.remove(n.teamCharId)}),o()};return e(de,{open:h,onClose:u,children:a(B,{children:[e(re,{title:a(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(l,{children:"Delete Team:"}),e("strong",{children:c}),x&&e(k,{title:x,children:e(j,{})})]}),action:e(U,{onClick:u,children:e(ie,{})})}),e(S,{}),a(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(le,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),d.map((n,i)=>n?e(qe,{teamCharId:n.teamCharId,selected:g.includes(i),onClick:()=>m(b=>oe(b,i)),inTeams:r[i]},i):null)]}),e(S,{}),e(T,{sx:{display:"flex",justifyContent:"flex-end"},children:e(ce,{color:"error",startIcon:e(F,{}),onClick:v,children:"Delete"})})]})})}function qe({teamCharId:t,selected:h,onClick:u,inTeams:o}){const s=Z(t),{key:p}=s,c=N(p),{target:x}=(c==null?void 0:c[p])??{},d=C.useMemo(()=>{if(!(!c||!x))return{data:x,teamData:c,compareData:void 0}},[x,c]);if(d)return e(_.Provider,{value:d,children:e(B,{bgt:"light",sx:{border:h?"2px red solid":void 0},children:e(D,{onClick:u,children:e(Pe,{teamCharId:t,children:e(Y,{color:o.length===1?"success":"warning",children:e(f,{children:o.length===1?"Only in current team":`In ${o.length} teams`})})})})})})}function Ye({teamId:t,onClick:h,bgt:u}){const o=V(t),{name:s,description:p,loadoutData:c}=o,x=I(),[d,r,g]=he();return e(B,{bgt:u,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:a(l,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[a(l,{sx:{display:"flex",flexDirection:"row"},children:[e(D,{onClick:()=>h(),sx:{p:1},children:a(f,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:s})," ",p&&e(k,{title:e(f,{children:p}),children:e(j,{})})]})}),e(He,{teamId:t,show:d,onHide:g,onDel:function(){}}),e(U,{onClick:r,color:"error",children:e(F,{})})]}),e(l,{sx:{marginTop:"auto"},children:c.map((m,v)=>{var b;const n=m==null?void 0:m.teamCharId,i=n&&((b=x.teamChars.get(n))==null?void 0:b.key);return a(ue.Fragment,{children:[e(S,{}),i?e(D,{onClick:()=>h(i),children:e(We,{characterKey:i,teamId:t,teamCharId:n})}):e(D,{onClick:()=>h(),sx:{height:120,position:"relative"},children:e(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120},children:e(l,{component:"img",src:pe.team[`team${v+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},v)})})]})})}function We({characterKey:t,teamId:h,teamCharId:u}){var O;const o=I(),s=xe(t),{gender:p}=fe(),{silly:c}=C.useContext(ge),x=me(t),{name:d}=Z(u),r=o.teams.getLoadoutDatum(h,u),g=o.teams.getActiveBuildName(r),m=o.teams.getLoadoutWeapon(r),v=(()=>{const{buildType:Q,buildTcId:R}=r;return Q==="tc"&&R?be(o.buildTcs.get(R)):Object.values(o.teams.getLoadoutArtifacts(r)).filter(J=>J)})(),n=N(t,void 0,v,m),i=(O=n==null?void 0:n[t])==null?void 0:O.target,b=C.useMemo(()=>s&&{character:s},[s]),y=C.useMemo(()=>i&&n&&{data:i,teamData:n},[i,n]),z=Ce(t,"banner",p),L=ve(t);return!b||!y?null:e(_e.Provider,{value:b,children:e(_.Provider,{value:y,children:e(C.Suspense,{fallback:e(ye,{variant:"rectangular",width:"100%",height:300}),children:a(l,{className:z?void 0:`grad-${x.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${z})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:0}},children:[e(l,{sx:{position:"absolute",width:"100%",height:"100%",zIndex:2,top:0,background:"linear-gradient(to top, rgba(50,50,50,0.7), rgba(0,0,0,0) 25% )"}}),a(l,{sx:{height:120,width:120,position:"relative"},children:[e(l,{component:"img",src:Ie(t,p,c),sx:{height:120,width:120,zIndex:1}}),s&&e(f,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e("strong",{children:De(s.level,s.ascension)})}),s&&e(f,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:a("strong",{children:["C",s.constellation]})}),t.startsWith("Traveler")&&e(f,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e(Y,{color:L,children:e(we,{ele:L})})})]}),a(l,{sx:{pr:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:3},children:[a(f,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(A,{}),e("span",{children:d})]}),a(f,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(w,{}),e("span",{children:g})]}),(r==null?void 0:r.buildType)==="tc"&&(r!=null&&r.buildTcId)?e(Te,{weapon:m}):e(Se,{})]})]})})})})}export{Fe as B,Ne as C,Pe as L,Re as O,Ye as T,G as a,Ee as b,He as c,A as d,Z as u};
