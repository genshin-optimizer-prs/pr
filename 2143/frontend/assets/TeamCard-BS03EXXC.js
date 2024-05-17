import{b as I,ff as X,r as P,i as H,j as q,dD as w,dA as W,d as b,cY as j,c_ as K,dg as ee,bT as te,p as a,W as l,q as e,a8 as E,T as f,c3 as ae,dS as ne,ep as _,a_ as k,s as T,eZ as V,ci as se,C as re,a1 as ie,a2 as le,D as S,af as oe,fn as ce,B as U,a9 as F,w as B,a4 as de,f0 as G,t as D,aC as N,Z as he,R as ue,x as pe,cP as xe,bv as fe,aL as ge,bB as me,dQ as Ce,eY as be,f as ye,a3 as ve,bC as Ie,bH as De,E as we,fo as Te,en as Se,cV as je}from"./index-DuPw1nxm.js";import{d as _e}from"./Settings-DoyJGClM.js";function Y(t){const h=I();return X(h.teamChars,t)}var $={},ke=H;Object.defineProperty($,"__esModule",{value:!0});var A=$.default=void 0,Be=ke(P()),$e=q,Ae=(0,Be.default)((0,$e.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");A=$.default=Ae;var M={},Me=H;Object.defineProperty(M,"__esModule",{value:!0});var Z=M.default=void 0,Re=Me(P()),ze=q,Le=(0,Re.default)((0,ze.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");Z=M.default=Le;const Fe=w,Ge=W,Oe=Z;function Ee({optimizationTarget:t,customMultiTargets:h}){var i;const{data:u}=b.useContext(j),o=I(),s=b.useMemo(()=>K(u,t[0],o),[u,t,o]),{title:p,icon:c,action:x}=s??{},d=ee(u.getDisplay(),t),{textSuffix:r,icon:g,name:m=t[0]==="custom"?(i=h[parseInt(t[1]??"")])==null?void 0:i.name:void 0}=(d&&te(d.info))??{};return a(ae,{children:[a(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[c||g,e("span",{children:p}),!!x&&e(E,{color:"success",sx:{whiteSpace:"normal"},children:x})]}),e(f,{sx:{display:"flex",alignItems:"center"},children:a(E,{sx:{whiteSpace:"normal"},children:[e("strong",{children:m}),r&&a("span",{children:[" ",r]})]})})]})}function Pe({teamCharId:t,showSetting:h=!1,children:u}){const o=I(),{name:s,description:p,buildIds:c,buildTcIds:x,optConfigId:d,customMultiTargets:r}=o.teamChars.get(t),{optimizationTarget:g}=ne(d);return a(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(A,{}),e(f,{variant:"h6",children:s}),!!p&&e(k,{title:e(f,{children:p}),children:e(_,{})}),h&&e(_e,{sx:{ml:"auto"}})]}),a(l,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(w,{}),a(f,{children:["Builds: ",e("strong",{children:c.length})]})]}),a(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(w,{}),a(f,{children:["TC Builds: ",e("strong",{children:x.length})]})]}),a(l,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(W,{}),a(f,{children:["Custom multi-targets: ",e("strong",{children:r.length})]})]})]}),g&&a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(Oe,{}),e(l,{children:"Optimization Target:"}),e(Ee,{customMultiTargets:r,optimizationTarget:g})]}),u]})}function He({teamId:t,show:h,onHide:u,onDel:o}){const s=I(),p=V(t),{name:c,description:x,loadoutData:d}=p,r=b.useMemo(()=>d.map(n=>{if(!n)return[];const{teamCharId:i}=n;return s.teams.values.filter(({loadoutData:C})=>C.find(v=>(v==null?void 0:v.teamCharId)===i))}),[s,d]),[g,m]=b.useState(()=>r.map((n,i)=>n.length===1?i:void 0).filter(se)),y=()=>{s.teams.remove(t),d.forEach((n,i)=>{!n||!g.includes(i)||s.teamChars.remove(n.teamCharId)}),o()};return e(de,{open:h,onClose:u,children:a(B,{children:[e(re,{title:a(l,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(l,{children:"Delete Team:"}),e("strong",{children:c}),x&&e(k,{title:x,children:e(_,{})})]}),action:e(ie,{onClick:u,children:e(le,{})})}),e(S,{}),a(T,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(oe,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),d.map((n,i)=>n?e(qe,{teamCharId:n.teamCharId,selected:g.includes(i),onClick:()=>m(C=>ce(C,i)),inTeams:r[i]},i):null)]}),e(S,{}),e(T,{sx:{display:"flex",justifyContent:"flex-end"},children:e(U,{color:"error",startIcon:e(F,{}),onClick:y,children:"Delete"})})]})})}function qe({teamCharId:t,selected:h,onClick:u,inTeams:o}){const s=Y(t),{key:p}=s,c=G(p),{target:x}=(c==null?void 0:c[p])??{},d=b.useMemo(()=>{if(!(!c||!x))return{data:x,teamData:c,compareData:void 0}},[x,c]);if(d)return e(j.Provider,{value:d,children:e(B,{bgt:"light",sx:{border:h?"2px red solid":void 0},children:e(D,{onClick:u,children:e(Pe,{teamCharId:t,children:e(N,{color:o.length===1?"success":"warning",children:e(f,{children:o.length===1?"Only in current team":`In ${o.length} teams`})})})})})})}function Ne({teamId:t,onClick:h,bgt:u}){const o=V(t),{name:s,description:p,loadoutData:c}=o,x=I(),[d,r,g]=he();return e(B,{bgt:u,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:a(l,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[a(l,{sx:{display:"flex",flexDirection:"row"},children:[e(D,{onClick:()=>h(),sx:{p:1},children:a(f,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:s})," ",p&&e(k,{title:e(f,{children:p}),children:e(_,{})})]})}),e(He,{teamId:t,show:d,onHide:g,onDel:function(){}}),e(U,{color:"error",sx:{flexGrow:1,margin:"auto",marginRight:"1%",justifyContent:"flex-end"},onClick:r,startIcon:e(F,{})})]}),e(l,{sx:{marginTop:"auto"},children:c.map((m,y)=>{var C;const n=m==null?void 0:m.teamCharId,i=n&&((C=x.teamChars.get(n))==null?void 0:C.key);return a(ue.Fragment,{children:[e(S,{}),i?e(D,{onClick:()=>h(i),children:e(We,{characterKey:i,teamId:t,teamCharId:n})}):e(D,{onClick:()=>h(),sx:{height:120,position:"relative"},children:e(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120},children:e(l,{component:"img",src:pe.team[`team${y+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},y)})})]})})}function We({characterKey:t,teamId:h,teamCharId:u}){var L;const o=I(),s=xe(t),{gender:p}=fe(),{silly:c}=b.useContext(ge),x=me(t),{name:d}=Y(u),r=o.teams.getLoadoutDatum(h,u),g=o.teams.getActiveBuildName(r),m=o.teams.getLoadoutWeapon(r),y=(()=>{const{buildType:Q,buildTcId:O}=r;return Q==="tc"&&O?Ce(o.buildTcs.get(O)):Object.values(o.teams.getLoadoutArtifacts(r)).filter(J=>J)})(),n=G(t,void 0,y,m),i=(L=n==null?void 0:n[t])==null?void 0:L.target,C=b.useMemo(()=>s&&{character:s},[s]),v=b.useMemo(()=>i&&n&&{data:i,teamData:n},[i,n]),R=be(t,"banner",p),z=ye(t);return!C||!v?null:e(je.Provider,{value:C,children:e(j.Provider,{value:v,children:e(b.Suspense,{fallback:e(ve,{variant:"rectangular",width:"100%",height:300}),children:a(l,{className:R?void 0:`grad-${x.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${R})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:0}},children:[e(l,{sx:{position:"absolute",width:"100%",height:"100%",zIndex:2,top:0,background:"linear-gradient(to top, rgba(50,50,50,0.7), rgba(0,0,0,0) 25% )"}}),a(l,{sx:{height:120,width:120,position:"relative"},children:[e(l,{component:"img",src:Ie(t,p,c),sx:{height:120,width:120,zIndex:1}}),s&&e(f,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e("strong",{children:De(s.level,s.ascension)})}),s&&e(f,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:a("strong",{children:["C",s.constellation]})}),t.startsWith("Traveler")&&e(f,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e(N,{color:z,children:e(we,{ele:z})})})]}),a(l,{sx:{pr:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:3},children:[a(f,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(A,{}),e("span",{children:d})]}),a(f,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(w,{}),e("span",{children:g})]}),(r==null?void 0:r.buildType)==="tc"&&(r!=null&&r.buildTcId)?e(Te,{weapon:m}):e(Se,{})]})]})})})})}export{Fe as B,Ge as C,Pe as L,Oe as O,Ne as T,Z as a,Ee as b,He as c,A as d,Y as u};
