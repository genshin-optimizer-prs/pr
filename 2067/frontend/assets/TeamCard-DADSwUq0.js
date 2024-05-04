import{b as $,eS as q,eC as A,eU as H,bl as P,d as x,aJ as w,q as e,t as v,Z as z,w as T,p,W as f,bs as E,bt as O,T as C,a8 as j,eo as k,eV as D,eW as L,eb as M,dK as B,x as N,r as F,i as V,j as Z,eA as G,f as J,dW as U,V as I,dn as Q,f1 as X,cr as Y,a3 as K,dZ as ee,d_ as ae,d2 as te,f4 as re,d$ as ne,co as se}from"./index-Ce5V0CgY.js";function ie(a){const n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(n,(c,u,h,t)=>u+u+h+h+t+t);const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null}function me(a,n){if(a)return`rgba(${a.r},${a.g},${a.b},${n})`}function oe(a){const n=$();return q(n.teamChars,a)}function ce({characterKey:a,onClick:n,onMouseDown:s,onMouseEnter:c,hoverChild:u,hideFav:h}){const t=A(a),{favorite:m}=H(a),{gender:g}=P(),{silly:b}=x.useContext(w),r=x.useCallback(()=>n==null?void 0:n(a),[a,n]),l=x.useCallback(y=>e(v,{onClick:r,onMouseDown:s,onMouseEnter:c,children:y}),[r,s,c]),[i,o,d]=z();return e(B,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!u&&i,onClose:d,onOpen:o,title:u,children:e(T,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:p(M,{condition:!!n||!!s||!!c,wrapper:l,children:[e(f,{display:"flex",className:`grad-${E(a).rarity}star`,children:e(f,{component:"img",src:O(a,g,b),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),t&&e(C,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:e("strong",{children:p(j,{color:"primary",children:[t.level,"/",k[t.ascension]]})})}),!h&&e(f,{sx:{position:"absolute",top:0,right:0},children:m?e(D,{fontSize:"small"}):e(L,{fontSize:"small"})}),t&&e(C,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:p(j,{color:"secondary",children:["C",t.constellation]})})})]})})})}function le({index:a}){return e(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:e(f,{component:"img",src:N.team[`team${a+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}var S={},de=V;Object.defineProperty(S,"__esModule",{value:!0});var R=S.default=void 0,ue=de(F()),pe=Z,he=(0,ue.default)((0,pe.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");R=S.default=he;function xe({teamId:a,onClick:n,hoverCard:s=!1,bgt:c}){const u=G(a),{name:h,description:t,loadoutData:m}=u,g=$(),b=m.map(r=>{if(!r)return;const l=g.teamChars.get(r.teamCharId);if(l)return J(l.key)});return e(T,{bgt:c,sx:{height:"100%"},children:p(f,{sx:r=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${b.map(i=>{if(!i)return"rgba(0,0,0,0)";const o=r.palette[i].main,d=ie(o);return d?`rgba(${d.r},${d.g},${d.b},0.25)`:"rgba(0,0,0,0)"}).map((i,o)=>`${i} ${o*25+12.5}%`).join(", ")})`}),children:[e(v,{onClick:()=>n(),sx:{p:1},children:p(C,{sx:{display:"flex",gap:1},children:[e("span",{children:h})," ",t&&e(B,{title:e(C,{children:t}),children:e(U,{})})]})}),e(f,{sx:{p:1,marginTop:"auto"},children:e(I,{container:!0,columns:4,spacing:1,children:m.map((r,l)=>{var d;const i=r==null?void 0:r.teamCharId,o=i&&((d=g.teamChars.get(i))==null?void 0:d.key);return e(I,{item:!0,xs:1,height:"100%",children:o?e(v,{onClick:()=>n(o),children:e(ce,{characterKey:o,hoverChild:s&&e(fe,{characterKey:o,teamCharId:i,teamId:a}),hideFav:!0})}):e(v,{onClick:()=>n(),children:e(le,{index:l})})},l)})})})]})})}function fe({characterKey:a,teamId:n,teamCharId:s}){var d;const c=$(),u=A(a),{name:h}=oe(s),t=c.teams.getLoadoutDatum(n,s),m=c.teams.getActiveBuildName(t),g=c.teams.getLoadoutWeapon(t),b=(()=>{const{buildType:y,buildTcId:_}=t;return y==="tc"&&_?Q(c.buildTcs.get(_)):Object.values(c.teams.getLoadoutArtifacts(t)).filter(W=>W)})(),r=X(a,void 0,b,g),l=(d=r==null?void 0:r[a])==null?void 0:d.target,i=x.useMemo(()=>u&&{character:u},[u]),o=x.useMemo(()=>l&&r&&{data:l,teamData:r},[l,r]);return!i||!o?null:e(se.Provider,{value:i,children:e(Y.Provider,{value:o,children:e(f,{sx:{width:300,m:-1},children:e(x.Suspense,{fallback:e(K,{variant:"rectangular",width:"100%",height:300}),children:p(T,{children:[e(ee,{characterKey:a,children:e(ae,{characterKey:a})}),p(f,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[p(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(R,{}),e("span",{children:h})]}),p(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(te,{}),e("span",{children:m})]}),(t==null?void 0:t.buildType)==="tc"&&(t!=null&&t.buildTcId)?e(re,{weapon:g}):e(ne,{})]})]})})})})})}export{ce as C,xe as T,me as c,R as d,ie as h,oe as u};
