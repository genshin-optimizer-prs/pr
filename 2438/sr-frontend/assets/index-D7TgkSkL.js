import{g as We,a as Ue,c as V,j as m,s as E,P as Ge,b as J,d as ue,l as pe,_ as D,r as f,u as Te,e as qe,I as _e,f as Fe,h as Ve,i as H,k as W,v as Ee,m as N,n as e,o as Qe,p as Ze,F as Me,q as u,t as Je,w as Xe,B as $e,x as Ye,C as et,y as tt,z as Z,A as fe,D as he,T as st,E as A,S as rt,G as _,H as O,J as ke,K as at,L as z,M as lt,N as Ke,O as ot,Q as nt,R as ve,U as it,V as ct,W as dt,X as Ae,Y as K,Z as ut,$ as X,a0 as pt}from"./index-DEOoXIJz.js";import{u as Ie,C as ft}from"./useForceUpdate-C_nHwwZf.js";import{M as G,D as T,T as ht}from"./DropdownButton-BjfQl9tC.js";import{u as me,S as ye,s as vt,a as q,b as mt,c as ge,R as Y}from"./RelicCard-B797BlWK.js";import{d as ee}from"./Add-BMjou3C2.js";import{C as yt,G as gt,L as te,a as xt,d as bt,b as St}from"./LocationAutocomplete-CpDQpPaE.js";import{u as Ct,a as Rt}from"./useInfScroll-DZConjpH.js";function _t(s){return Ue("MuiAlert",s)}const Mt=We("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),xe=Mt,$t=V(m.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),kt=V(m.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Kt=V(m.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),At=V(m.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),It=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],jt=s=>{const{variant:l,color:i,severity:r,classes:p}=s,n={root:["root",`color${J(i||r)}`,`${l}${J(i||r)}`,`${l}`],icon:["icon"],message:["message"],action:["action"]};return Ve(n,_t,p)},wt=E(Ge,{name:"MuiAlert",slot:"Root",overridesResolver:(s,l)=>{const{ownerState:i}=s;return[l.root,l[i.variant],l[`${i.variant}${J(i.color||i.severity)}`]]}})(({theme:s})=>{const l=s.palette.mode==="light"?ue:pe,i=s.palette.mode==="light"?pe:ue;return D({},s.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(s.palette).filter(([,r])=>r.main&&r.light).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:l(s.palette[r].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${r}StandardBg`]:i(s.palette[r].light,.9),[`& .${xe.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(([,r])=>r.main&&r.light).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:l(s.palette[r].light,.6),border:`1px solid ${(s.vars||s).palette[r].light}`,[`& .${xe.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(([,r])=>r.main&&r.dark).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:D({fontWeight:s.typography.fontWeightMedium},s.vars?{color:s.vars.palette.Alert[`${r}FilledColor`],backgroundColor:s.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[r].dark:s.palette[r].main,color:s.palette.getContrastText(s.palette[r].main)})}))]})}),Lt=E("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(s,l)=>l.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Dt=E("div",{name:"MuiAlert",slot:"Message",overridesResolver:(s,l)=>l.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),be=E("div",{name:"MuiAlert",slot:"Action",overridesResolver:(s,l)=>l.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Se={success:m.jsx($t,{fontSize:"inherit"}),warning:m.jsx(kt,{fontSize:"inherit"}),error:m.jsx(Kt,{fontSize:"inherit"}),info:m.jsx(At,{fontSize:"inherit"})},zt=f.forwardRef(function(l,i){const r=Te({props:l,name:"MuiAlert"}),{action:p,children:n,className:o,closeText:c="Close",color:y,components:M={},componentsProps:I={},icon:g,iconMapping:t=Se,onClose:x,role:h="alert",severity:C="success",slotProps:d={},slots:v={},variant:U="standard"}=r,w=qe(r,It),b=D({},r,{color:y,severity:C,variant:U,colorSeverity:y||C}),k=jt(b),R={slots:D({closeButton:M.CloseButton,closeIcon:M.CloseIcon},v),slotProps:D({},I,d)},[$,j]=me("closeButton",{elementType:_e,externalForwardedProps:R,ownerState:b}),[Q,P]=me("closeIcon",{elementType:yt,externalForwardedProps:R,ownerState:b});return m.jsxs(wt,D({role:h,elevation:0,ownerState:b,className:Fe(k.root,o),ref:i},w,{children:[g!==!1?m.jsx(Lt,{ownerState:b,className:k.icon,children:g||t[C]||Se[C]}):null,m.jsx(Dt,{ownerState:b,className:k.message,children:n}),p!=null?m.jsx(be,{ownerState:b,className:k.action,children:p}):null,p==null&&x?m.jsx(be,{ownerState:b,className:k.action,children:m.jsx($,D({size:"small","aria-label":c,title:c,color:"inherit",onClick:x},j,{children:m.jsx(Q,D({fontSize:"small"},P))}))}):null]}))}),Pt=zt;var se={},Ot=W;Object.defineProperty(se,"__esModule",{value:!0});var je=se.default=void 0,Nt=Ot(H()),Bt=m,Ht=(0,Nt.default)((0,Bt.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");je=se.default=Ht;var re={},Wt=W;Object.defineProperty(re,"__esModule",{value:!0});var we=re.default=void 0,Ut=Wt(H()),Gt=m,Tt=(0,Ut.default)((0,Gt.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");we=re.default=Tt;var ae={},qt=W;Object.defineProperty(ae,"__esModule",{value:!0});var Le=ae.default=void 0,Ft=qt(H()),Vt=m,Et=(0,Ft.default)((0,Vt.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");Le=ae.default=Et;var le={},Qt=W;Object.defineProperty(le,"__esModule",{value:!0});var De=le.default=void 0,Zt=Qt(H()),Jt=m,Xt=(0,Zt.default)((0,Jt.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");De=le.default=Xt;var oe={},Yt=W;Object.defineProperty(oe,"__esModule",{value:!0});var ze=oe.default=void 0,es=Yt(H()),ts=m,ss=(0,es.default)((0,ts.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");ze=oe.default=ss;var ne={},rs=W;Object.defineProperty(ne,"__esModule",{value:!0});var Pe=ne.default=void 0,as=rs(H()),ls=m,os=(0,as.default)((0,ls.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");Pe=ne.default=os;function ns(s,l){const r=(()=>{switch(l.type){case"reset":return;case"substat":{const{index:p,substat:n}=l,o=[...s.substats],c=n.key?o.findIndex(y=>y.key===n.key):-1;if(c===-1||c===p)o[p]={...n};else{const y=o[p];o[p]={...o[c]},o[c]={...y}}return{...s,substats:o}}case"overwrite":return l.relic;case"update":return{...s,...l.relic}}})();return r&&Ee(r,!0)}function is({rarity:s,onRarityChange:l,filter:i,...r}){const{t:p}=N("relic");return e(T,{...r,title:s?e(ye,{stars:s,inline:!0}):p`editor.rarity`,color:s?"success":"primary",children:Qe.map(n=>e(G,{disabled:!i(n),onClick:()=>l(n),children:e(ye,{stars:n,inline:!0})},n))})}function cs({relicSetKey:s,setRelicSetKey:l,label:i="",...r}){const{t:p}=N(["relic","relicNames_gen"]);i=i||p("relic:autocompleteLabels.set");const n=f.useMemo(()=>Ze.map(c=>({key:c,label:p(`relicNames_gen:${c}`)})),[p]),o=f.useCallback(c=>l(c??""),[l]);return e(gt,{options:n,valueKey:s,onChange:o,toImg:()=>e(Me,{children:" "}),label:i,...r})}function F({statKey:s}){const{t:l}=N("statKey_gen");return u("span",{children:[l(s),vt(s)]})}function ds({index:s,relic:l,setSubstat:i}){const{t:r}=N("relic"),{mainStatKey:p="",rarity:n=5}=l??{},{key:o="",value:c=0,rolls:y=[],efficiency:M=0}=(l==null?void 0:l.substats[s])??{},I=y.length;let g="",t=[],x=0;if(l){const d=l.rarity,{numUpgrades:v,high:U}=lt[d];x=v+U-3-I,t=o?Je(o,d):[]}const h=7-t.length;x<0&&(g=g||r("editor.substat.error.noOverRoll",{value:x+I}));const C=f.useMemo(()=>o?[{value:0},...Xe(n,o).map(d=>({value:d}))]:[{value:0}],[o,n]);return u(z,{bgt:"light",children:[e(A,{sx:{display:"flex"},children:u($e,{size:"small",sx:{width:"100%",display:"flex"},children:[u(T,{startIcon:o?e(q,{statKey:o}):void 0,title:o?e(F,{statKey:o}):r("editor.substat.substatFormat",{value:s+1}),disabled:!l,color:o?"success":"primary",sx:{whiteSpace:"nowrap"},children:[o&&e(G,{onClick:()=>i(s,{key:"",value:0}),children:r`editor.substat.noSubstat`}),Ye.filter(d=>p!==d).map(d=>u(G,{selected:o===d,disabled:o===d,onClick:()=>i(s,{key:d,value:0}),children:[e(te,{children:e(q,{statKey:d})}),e(xt,{children:e(F,{statKey:d})})]},d))]}),e(et,{sx:{flexBasis:30,flexGrow:1},children:e(tt,{float:Z(o)==="%",placeholder:r`editor.substat.selectSub`,value:o?fe(he(c,o),o):void 0,onChange:d=>{let v=d??0;Z(o)==="%"&&(v=v/100),i(s,{key:o,value:v})},disabled:!o,error:!!g,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!t.length&&e(st,{children:r`editor.substat.nextRolls`})]})}),e(A,{px:2,children:e(us,{value:fe(he(c,o),o),marks:C,setValue:d=>{let v=d??0;Z(o)==="%"&&(v=v/100),i(s,{key:o,value:v})},disabled:!o})}),e(A,{sx:{px:1,pb:1},children:g?e(rt,{color:"error",children:r`ui:error`}):u(_,{container:!0,children:[e(_,{item:!0,flexGrow:1,children:!!y.length&&[...y].sort().map((d,v)=>e(O,{component:"span",color:`roll${ke(h+t.indexOf(d),1,6)}.main`,sx:{ml:1},children:d},`${v}.${d}`))}),e(_,{item:!0,xs:"auto",flexShrink:1,children:e(O,{children:u(at,{t:r,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",M]})})})]})})]})}function us({value:s,setValue:l,marks:i,disabled:r=!1}){var o,c;const[p,n]=f.useState(s);return f.useEffect(()=>n(s),[s]),e(mt,{value:p,step:.1,disabled:r,min:((o=i[1])==null?void 0:o.value)??0,max:((c=i[i.length-1])==null?void 0:c.value)??0,onChange:(y,M)=>n(M),onChangeCommitted:(y,M)=>l(M),valueLabelDisplay:"auto"})}const Ce={rarity:[5,4,3,2],setEffects:{}};function ps({relicIdToEdit:s="new",cancelEdit:l,fixedSlotKey:i,allowEmpty:r=!1,disableSet:p=!1}){const{t:n}=N("relic"),{t:o}=N(["slotKey_gen","statKey_gen"]),{database:c}=Ke(),[y,M]=Ie();f.useEffect(()=>c.relics.followAny(M),[c,M]);const[I,g]=f.useState(!1);f.useEffect(()=>{s==="new"&&(g(!0),x({type:"reset"}));const a=s&&y&&c.relics.get(s);a&&(g(!0),x({type:"overwrite",relic:ot(a)}))},[s,c,y]);const[t,x]=f.useReducer(ns,void 0),{relic:h,errors:C}=f.useMemo(()=>t?nt(t,s):{relic:void 0,errors:[]},[t,s]),{prev:d,prevEditType:v}=f.useMemo(()=>{const a=y&&s&&c.relics.get(s);if(a)return{prev:a,prevEditType:"edit"};if(t===void 0)return{prev:void 0,prevEditType:""};const{duplicated:S,upgraded:L}=y&&c.relics.findDups(t);return{prev:S[0]??L[0],prevEditType:S.length!==0?"duplicate":"upgrade"}},[t,s,c,y]),U=!["new",""].includes(s)&&!!(t!=null&&t.location)||!!i||!!s&&s!=="new",{rarity:w=5,level:b=0}=t??{},k=f.useMemo(()=>(t==null?void 0:t.slotKey)??i??"head",[i,t]),R=t?Ce:void 0,$=f.useCallback(a=>{const S=a.setKey?Ce:R;function L(B,de,He){return B&&de.includes(B)?B:He??de[0]}a.setKey&&(a.rarity=L(t==null?void 0:t.rarity,S.rarity,Math.max(...S.rarity)),a.slotKey=L(t==null?void 0:t.slotKey,["head","hands"])),a.rarity&&(a.level=(t==null?void 0:t.level)??0),a.level&&(a.level=ke(a.level,0,3*(a.rarity??t.rarity))),a.slotKey&&(a.mainStatKey=L(t==null?void 0:t.mainStatKey,ve[a.slotKey])),a.mainStatKey&&(a.substats=[0,1,2,3].map(B=>t&&t.substats[B].key!==a.mainStatKey?t.substats[B]:{key:"",value:0})),x({type:"update",relic:a})},[t,R,x]),j=f.useCallback(()=>{l==null||l(),x({type:"reset"})},[l,x]),Q=f.useCallback((a,S)=>x({type:"substat",index:a,substat:S}),[]),P=!C.length,ie=f.useCallback(a=>{if(!s&&t&&!window.confirm(n`editor.clearPrompt`)){a==null||a.preventDefault();return}g(!1),j()},[n,s,t,g,j]),Oe=it(),Ne=ct(Oe.breakpoints.up("md")),ce=s!=="new"&&s||(d==null?void 0:d.id),Be=()=>window.confirm(n`editor.clearPrompt`);return e(f.Suspense,{fallback:!1,children:e(dt,{open:I,onClose:ie,children:u(z,{bgt:"dark",children:[e(ft,{title:"Relic Editor",action:e(_e,{onClick:ie,children:e(bt,{})})}),u(Ae,{sx:{display:"flex",flexDirection:"column",gap:1},children:[u(_,{container:!0,spacing:1,columns:{xs:1,md:2},children:[u(_,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[u(A,{sx:{display:"flex",gap:1},children:[e(cs,{disabled:p,size:"small",relicSetKey:(t==null?void 0:t.setKey)??"",setRelicSetKey:a=>$({setKey:a}),sx:{flexGrow:1},label:t!=null&&t.setKey?"":n`editor.unknownSetName`}),e(is,{rarity:t?w:void 0,onRarityChange:a=>$({rarity:a}),filter:a=>{var S,L;return!!((L=(S=R==null?void 0:R.rarity)==null?void 0:S.includes)!=null&&L.call(S,a))},disabled:!R})]}),u(A,{component:"div",display:"flex",children:[e(ht,{label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:b,disabled:!R,onChange:a=>{const S=parseInt(a.target.value)||0;$({level:S})}}),u($e,{children:[e(K,{onClick:()=>$({level:b-1}),disabled:!R||b===0,children:"-"}),w?[...Array(w+1).keys()].map(a=>3*a).map(a=>e(K,{onClick:()=>$({level:a}),disabled:!R||b===a,children:a},a)):null,e(K,{onClick:()=>$({level:b+1}),disabled:!R||b===w*3,children:"+"})]})]}),u(A,{component:"div",display:"flex",children:[e(T,{startIcon:t!=null&&t.slotKey?e(ge,{slotKey:t.slotKey}):void 0,title:t?o(t.slotKey):n`slot`,value:k,disabled:U||!R,color:t?"success":"primary",children:ut.map(a=>u(G,{selected:k===a,disabled:k===a,onClick:()=>$({slotKey:a}),children:[e(te,{children:e(ge,{slotKey:a})}),o(a)]},a))}),e(z,{bgt:"light",sx:{p:1,ml:1,flexGrow:1},children:e(f.Suspense,{fallback:e(X,{width:"60%"}),children:e(O,{color:"text.secondary",children:o(`slotKey_gen:${k}`)})})})]}),u(A,{component:"div",display:"flex",gap:1,children:[e(T,{startIcon:t!=null&&t.mainStatKey?e(q,{statKey:t.mainStatKey}):void 0,title:e("b",{children:t?e(F,{statKey:t.mainStatKey}):n`mainStat`}),disabled:!R,color:t?"success":"primary",children:ve[k].map(a=>u(G,{selected:(t==null?void 0:t.mainStatKey)===a,disabled:(t==null?void 0:t.mainStatKey)===a,onClick:()=>$({mainStatKey:a}),children:[e(te,{children:e(q,{statKey:a})}),e(F,{statKey:a})]},a))}),e(z,{bgt:"light",sx:{p:1,flexGrow:1},children:e(O,{color:"text.secondary",children:t?pt(w,t.mainStatKey,b):n`mainStat`})}),e(K,{onClick:()=>$({lock:!(t!=null&&t.lock)}),color:t!=null&&t.lock?"success":"primary",disabled:!t,children:t!=null&&t.lock?e(De,{}):e(ze,{})})]}),e(St,{locKey:(h==null?void 0:h.location)??"",setLocKey:a=>$({location:a})})]}),e(_,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[0,1,2,3].map(a=>e(ds,{index:a,relic:h,setSubstat:Q},a))})]}),d&&u(_,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[e(_,{item:!0,xs:12,md:5.5,lg:4,children:u(z,{bgt:"light",children:[e(O,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:v!=="edit"?v==="duplicate"?n`editor.dupeRelic`:n`editor.updateRelic`:n`editor.beforeEdit`}),e(Y,{relic:d})]})}),Ne&&e(_,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:e(z,{bgt:"light",sx:{display:"flex"},children:e(we,{sx:{fontSize:40}})})}),e(_,{item:!0,xs:12,md:5.5,lg:4,children:u(z,{bgt:"light",children:[e(O,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:n`editor.preview`}),h&&e(Y,{relic:h})]})})]}),!P&&e(Pt,{variant:"filled",severity:"error",children:C.map((a,S)=>e("div",{children:a},S))}),u(A,{display:"flex",gap:2,children:[v==="edit"?e(K,{startIcon:e(ee,{}),onClick:()=>{t&&c.relics.set(d.id,t),r||(g(!1),l()),j()},disabled:!t||!P,color:"primary",children:n`editor.btnSave`}):e(K,{startIcon:e(ee,{}),onClick:()=>{c.relics.new(t),r||(g(!1),l()),j()},disabled:!t||!P,color:v==="duplicate"?"warning":"primary",children:n`editor.btnAdd`}),r&&e(K,{startIcon:e(je,{}),disabled:!t,onClick:()=>{Be()&&j()},color:"error",children:n`editor.btnClear`}),d&&v!=="edit"&&e(K,{startIcon:e(Pe,{}),onClick:()=>{t&&c.relics.set(d.id,t),j(),r||g(!1)},disabled:!t||!P,color:"success",children:n`editor.btnUpdate`}),!!ce&&e(K,{startIcon:e(Le,{}),onClick:()=>{window.confirm(n`editor.confirmDelete`)&&(c.relics.remove(ce),j(),r||g(!1))},disabled:!t||!P,color:"error",children:n`editor.delete`})]})]})]})})})}const Re={xs:1,sm:2,md:3,lg:3,xl:4},fs={xs:10,sm:12,md:24,lg:24,xl:24};function hs({onAdd:s,onEdit:l}){const{t:i}=N("relic"),{database:r}=Ke(),[p,n]=Ie();f.useEffect(()=>r.relics.followAny(n),[r,n]);const{relicIds:o,totalRelicsNum:c}=f.useMemo(()=>{const h=r.relics.values,C=h.length,d=h.map(v=>v.id);return p&&{relicIds:d,totalRelicsNum:C}},[r,p]),y=Ct(),M=o.length!==c?`${o.length}/${c}`:c,{numShow:I,setTriggerElement:g}=Rt(fs[y],o.length),t=f.useMemo(()=>o.slice(0,I),[o,I]),x={numShowing:t.length,totalShowing:M};return u(Me,{children:[e(z,{bgt:"dark",children:e(Ae,{children:e(A,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:u(O,{color:"text.secondary",children:["Showing ",e("b",{children:x.numShowing})," out of"," ",x.totalShowing," Items"]})})})}),e(_,{container:!0,columns:Re,spacing:1,children:e(_,{item:!0,xs:!0,children:e(K,{fullWidth:!0,onClick:s,color:"info",startIcon:e(ee,{}),children:i`addNew`})})}),u(f.Suspense,{fallback:e(X,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:[e(_,{container:!0,columns:Re,spacing:1,children:t.map(h=>e(_,{item:!0,xs:1,children:e(Y,{relic:r.relics.get(h),onEdit:()=>l==null?void 0:l(h),onDelete:()=>r.relics.remove(h),setLocation:C=>r.relics.set(h,{location:C}),onLockToggle:()=>r.relics.set(h,({lock:C})=>({lock:!C}))})},h))}),o.length!==t.length&&e(X,{ref:h=>{h&&g(h)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})]})}function Cs(){const[s,l]=f.useState("");return u(A,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(ps,{relicIdToEdit:s,cancelEdit:()=>l(""),allowEmpty:!0}),e(hs,{onAdd:()=>l("new"),onEdit:l})]})}export{Cs as default};
