import{e as y,b2 as $,b3 as q,_ as S,m as V,b4 as W,z,A as D,j as F,D as A,K as o,ab as H,Z as l,af as N,W as _,B as t,ac as M,aP as k,a1 as G}from"./index-DItwh30y.js";import{L as Z}from"./LocationAutocomplete-Dkv1m9Pk.js";const J=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Q=["component","slots","slotProps"],U=["component"];function ie(e,a){const{className:d,elementType:p,ownerState:u,externalForwardedProps:s,getSlotOwnerState:i,internalForwardedProps:f}=a,m=y(a,J),{component:h,slots:n={[e]:void 0},slotProps:x={[e]:void 0}}=s,v=y(s,Q),c=n[e]||p,r=$(x[e],u),w=q(S({className:d},m,{externalForwardedProps:e==="root"?v:void 0,externalSlotProps:r})),{props:{component:j},internalRef:K}=w,C=y(w.props,U),B=V(K,r==null?void 0:r.ref,a.ref),L=i?i(C):{},E=S({},u,L),R=e==="root"?j||h:j,b=W(c,S({},e==="root"&&!h&&!n[e]&&f,e!=="root"&&!n[e]&&f,C,R&&{as:R},{ref:B}),E);return Object.keys(L).forEach(I=>{delete b[I]}),[c,b]}var P={},X=D;Object.defineProperty(P,"__esModule",{value:!0});var O=P.default=void 0,Y=X(z()),ee=F,te=(0,Y.default)((0,ee.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");O=P.default=te;var g={},oe=D;Object.defineProperty(g,"__esModule",{value:!0});var T=g.default=void 0,re=oe(z()),le=F,ae=(0,re.default)((0,le.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");T=g.default=ae;function ce({relic:e,onEdit:a,onDelete:d,setLocation:p,extraButtons:u}){const{t:s}=A("relic"),{lock:i,slotKey:f,setKey:m,rarity:h,level:n,mainStatKey:x,substats:v,location:c=""}=e;return o(G,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[o(H,{children:[o(l,{children:["Slot: ",f]}),o(l,{children:["Set: ",m]}),o(l,{children:["Level: ",n]}),o(l,{children:["Main: ",x," ◦"," ",N(h,x,n)]}),v.map(r=>o(l,{children:["Sub: ",r.key," ◦ ",r.value]},r.key))]}),o(_,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[t(_,{sx:{flexGrow:1},children:p?t(Z,{locKey:c,setLocKey:p}):t(l,{children:c})}),o(_,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!a&&t(k,{title:t(l,{children:s`relic:edit`}),placement:"top",arrow:!0,children:t(M,{color:"info",size:"small",onClick:a,children:t(T,{})})}),!!d&&t(k,{title:i?s("relic:cantDeleteLock"):"",placement:"top",children:t("span",{children:t(M,{color:"error",size:"small",onClick:d,disabled:i,sx:{top:"1px"},children:t(O,{})})})}),u]})]})]})}export{ce as R,O as d,ie as u};
