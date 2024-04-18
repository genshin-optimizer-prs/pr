import{d as $,eQ as H,eD as B,eU as P,bl as W,e as x,aJ as z,s as e,v,_ as O,x as y,q as h,X as f,bs as k,bt as w,T as C,a8 as I,ep as D,eV as E,eW as L,ec as M,d1 as q,y as N,r as F,a as J,i as G,eB as Q,h as U,e4 as V,W as j,dn as X,f1 as Z,cq as Y,a3 as K,dZ as ee,d_ as ae,d2 as te,f4 as re,d$ as ne,cn as se}from"./index-6871c79c.js";function ie(a){const n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(n,(c,u,p,t)=>u+u+p+p+t+t);const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null}function me(a,n){if(a)return`rgba(${a.r},${a.g},${a.b},${n})`}function oe(a){const n=$();return H(n.teamChars,a)}function ce({characterKey:a,onClick:n,onMouseDown:s,onMouseEnter:c,hoverChild:u,hideFav:p}){const t=B(a),{favorite:m}=P(a),{gender:g}=W(),{silly:b}=x.useContext(z),r=x.useCallback(()=>n==null?void 0:n(a),[a,n]),l=x.useCallback(T=>e(v,{onClick:r,onMouseDown:s,onMouseEnter:c,children:T}),[r,s,c]),[i,o,d]=O();return e(q,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!u&&i,onClose:d,onOpen:o,title:u,children:e(y,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:h(M,{condition:!!n||!!s||!!c,wrapper:l,children:[e(f,{display:"flex",className:`grad-${k(a).rarity}star`,children:e(f,{component:"img",src:w(a,g,b),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),t&&e(C,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:e("strong",{children:h(I,{color:"primary",children:[t.level,"/",D[t.ascension]]})})}),!p&&e(f,{sx:{position:"absolute",top:0,right:0},children:m?e(E,{fontSize:"small"}):e(L,{fontSize:"small"})}),t&&e(C,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:h(I,{color:"secondary",children:["C",t.constellation]})})})]})})})}function le({index:a}){return e(y,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:e(f,{component:"img",src:N.team[`team${a+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}var _={},de=G;Object.defineProperty(_,"__esModule",{value:!0});var A=_.default=void 0,ue=de(F()),he=J(),pe=(0,ue.default)((0,he.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");A=_.default=pe;function xe({teamId:a,onClick:n,hoverCard:s=!1,bgt:c}){const u=Q(a),{name:p,description:t,loadoutData:m}=u,g=$(),b=m.map(r=>{if(!r)return;const l=g.teamChars.get(r.teamCharId);if(l)return U(l.key)});return e(y,{bgt:c,sx:{height:"100%"},children:h(f,{sx:r=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${b.map(i=>{if(!i)return"rgba(0,0,0,0)";const o=r.palette[i].main,d=ie(o);return d?`rgba(${d.r},${d.g},${d.b},0.25)`:"rgba(0,0,0,0)"}).map((i,o)=>`${i} ${o*25+12.5}%`).join(", ")})`}),children:[e(v,{onClick:()=>n(),sx:{p:1},children:h(C,{sx:{display:"flex",gap:1},children:[e("span",{children:p})," ",t&&e(q,{title:e(C,{children:t}),children:e(V,{})})]})}),e(f,{sx:{p:1,marginTop:"auto"},children:e(j,{container:!0,columns:4,spacing:1,children:m.map((r,l)=>{var d;const i=r==null?void 0:r.teamCharId,o=i&&((d=g.teamChars.get(i))==null?void 0:d.key);return e(j,{item:!0,xs:1,height:"100%",children:o?e(v,{onClick:()=>n(o),children:e(ce,{characterKey:o,hoverChild:s&&e(fe,{characterKey:o,teamCharId:i,teamId:a}),hideFav:!0})}):e(v,{onClick:()=>n(),children:e(le,{index:l})})},l)})})})]})})}function fe({characterKey:a,teamId:n,teamCharId:s}){var d;const c=$(),u=B(a),{name:p}=oe(s),t=c.teams.getLoadoutDatum(n,s),m=c.teams.getActiveBuildName(t),g=(()=>c.teams.getLoadoutWeapon(t))(),b=(()=>{const{buildType:T,buildTcId:S}=t;return T==="tc"&&S?X(c.buildTcs.get(S)):Object.values(c.teams.getLoadoutArtifacts(t)).filter(R=>R)})(),r=Z(a,void 0,b,g),l=(d=r==null?void 0:r[a])==null?void 0:d.target,i=x.useMemo(()=>u&&{character:u},[u]),o=x.useMemo(()=>l&&r&&{data:l,teamData:r},[l,r]);return!i||!o?null:e(se.Provider,{value:i,children:e(Y.Provider,{value:o,children:e(f,{sx:{width:300,m:-1},children:e(x.Suspense,{fallback:e(K,{variant:"rectangular",width:"100%",height:300}),children:h(y,{children:[e(ee,{characterKey:a,children:e(ae,{characterKey:a})}),h(f,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[h(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(A,{}),e("span",{children:p})]}),h(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(te,{}),e("span",{children:m})]}),(t==null?void 0:t.buildType)==="tc"&&(t!=null&&t.buildTcId)?e(re,{weapon:g}):e(ne,{})]})]})})})})})}export{ce as C,xe as T,me as c,A as d,ie as h,oe as u};
