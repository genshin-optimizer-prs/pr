import{u as z,a as A,ae as B,b as e,d as i,f as o,C as w,T as c,B as $,e as E,aj as H,aq as M,R as W,N as q,Y as L,h as R,i as _,bM as N,r as b,b0 as O,bS as P,k as Y,l as F,cX as G,g as V,D as X,S as J,bT as Q,bY as U,aT as Z,V as K,o as ee,p as te,q as ae,s as ne,t as se}from"./index-CoerZXu1.js";import{u as ie}from"./useTeamChar-5gJCYcVX.js";import{T as oe}from"./TeamDelModal-BzAt6TiI.js";function he({teamId:t,onClick:h,bgt:g}){const r=z(t),{name:n,description:p,loadoutData:m}=r,f=A(),[C,a,T]=B();return e(R,{bgt:g,sx:{height:"100%",border:"1px rgba(200,200,200,0.4) solid"},children:i(o,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[i(o,{sx:{display:"flex",flexDirection:"row"},children:[e(w,{onClick:()=>h(),sx:{p:1},children:i(c,{sx:{display:"flex",gap:1},variant:"h6",children:[e("span",{children:n})," ",p&&e($,{title:e(c,{children:p}),children:e(E,{})})]})}),e(oe,{teamId:t,show:C,onHide:T,onDel:function(){}}),e(H,{onClick:a,color:"error",children:e(M,{})})]}),e(o,{sx:{marginTop:"auto"},children:m.map((d,u)=>{var x;const s=d==null?void 0:d.teamCharId,l=s&&((x=f.teamChars.get(s))==null?void 0:x.key);return i(W.Fragment,{children:[e(q,{}),l?e(w,{onClick:()=>h(l),children:e(re,{characterKey:l,teamId:t,teamCharId:s})}):e(w,{onClick:()=>h(),sx:{height:120,position:"relative"},children:e(o,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:120},children:e(o,{component:"img",src:L.team[`team${u+1}`],sx:{width:"auto",my:"15px",height:90,opacity:.7,mx:"auto"}})})})]},u)})})]})})}function re({characterKey:t,teamId:h,teamCharId:g}){var S;const r=A(),n=_(t),{gender:p}=N(),{silly:m}=b.useContext(O),f=P(t),{name:C}=ie(g),a=r.teams.getLoadoutDatum(h,g),T=r.teams.getActiveBuildName(a),d=r.teams.getLoadoutWeapon(a),u=(()=>{const{buildType:D,buildTcId:I}=a;return D==="tc"&&I?Y(r.buildTcs.get(I)):Object.values(r.teams.getLoadoutArtifacts(a)).filter(j=>j)})(),s=F(t,void 0,u,d),l=(S=s==null?void 0:s[t])==null?void 0:S.target,x=b.useMemo(()=>n&&{character:n},[n]),v=b.useMemo(()=>l&&s&&{data:l,teamData:s},[l,s]),y=G(t,"banner",p),k=V(t);return!x||!v?null:e(se.Provider,{value:x,children:e(X.Provider,{value:v,children:e(b.Suspense,{fallback:e(J,{variant:"rectangular",width:"100%",height:300}),children:i(o,{className:y?void 0:`grad-${f.rarity}star`,sx:{display:"flex","&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${y})`,backgroundPosition:"center",backgroundSize:"cover",zIndex:0}},children:[e(o,{sx:{position:"absolute",width:"100%",height:"100%",zIndex:2,top:0,background:"linear-gradient(to top, rgba(50,50,50,0.7), rgba(0,0,0,0) 25% )"}}),i(o,{sx:{height:120,width:120,position:"relative"},children:[e(o,{component:"img",src:Q(t,p,m),sx:{height:120,width:120,zIndex:1}}),n&&e(c,{sx:{position:"absolute",lineHeight:1,bottom:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e("strong",{children:U(n.level,n.ascension)})}),n&&e(c,{sx:{position:"absolute",lineHeight:1,bottom:0,right:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:i("strong",{children:["C",n.constellation]})}),t.startsWith("Traveler")&&e(c,{sx:{position:"absolute",lineHeight:1,top:0,left:0,p:.5,textShadow:"0 0 5px black",zIndex:3},children:e(Z,{color:k,children:e(K,{ele:k})})})]}),i(o,{sx:{pr:.5,py:.5,display:"flex",flexDirection:"column",flexGrow:1,width:"100%",minWidth:0,justifyContent:"space-between",zIndex:3},children:[i(c,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(ee,{}),e("span",{children:C})]}),i(c,{noWrap:!0,sx:{display:"flex",gap:1,alignItems:"center",textShadow:"0 0 5px black"},children:[e(te,{}),e("span",{children:T})]}),(a==null?void 0:a.buildType)==="tc"&&(a!=null&&a.buildTcId)?e(ae,{weapon:d}):e(ne,{})]})]})})})})}export{he as T};
