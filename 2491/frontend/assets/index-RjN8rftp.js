import{y as j,r as o,aY as V,a as U,bI as J,d as a,bL as Q,cj as Y,ap as z,b3 as q,cR as N,P as X,S as K,cS as Z,b as ee,z as ae,cT as te,aa as se,bA as re,aC as oe,aD as ne,az as le,aE as ce,e as w,N as L,h as M,bg as A,aI as ie,i as P,aF as me,ac as $,L as he,M as ue,T as de,ah as pe,G as W,cU as ge}from"./index-XLZdzuoM.js";import{T as fe}from"./TeamCard-_i8Gb3bk.js";import{d as G}from"./Upload-DXi9kU0a.js";import"./useTeamChar-BT8pL1CI.js";import"./TeamDelModal-CxO4fAG7.js";function ye({teamIds:s,charKeys:r,setCharKey:i,acProps:c}){const{t:m}=j(["page_team","sillyWisher_charNames","charNames_gen"]),{silly:y}=o.useContext(V),n=U(),{gender:h}=J(),u=o.useCallback(e=>n.charMeta.get(e).favorite,[n.charMeta]),v=o.useCallback(e=>a(Q,{characterKey:e}),[]),S=o.useCallback((e,l)=>m(`${l?"sillyWisher_charNames":"charNames_gen"}:${Y(e,h)}`),[h,m]),F=ee,[I,C]=z();o.useEffect(()=>n.chars.followAny((e,l)=>["new","remove"].includes(l)&&C()),[n.chars,C]);const d=o.useMemo(()=>I&&n.chars.keys,[n,I]),{characterTeamTotal:p}=o.useMemo(()=>q({characterTeamTotal:d},l=>{n.teams.values.forEach(k=>{const{loadoutData:T}=k;T.filter(N).forEach(({teamCharId:E})=>{const g=n.teamChars.get(E);if(!g)return;const b=g.key;l.characterTeamTotal[b].total++})}),s.forEach(k=>{const T=n.teams.get(k);if(!T)return;const{loadoutData:E}=T;E.filter(N).forEach(({teamCharId:g})=>{const b=n.teamChars.get(g);if(!b)return;const B=b.key;l.characterTeamTotal[B].current++})})}),[n,d,s]),D=o.useCallback(e=>a("strong",{children:p[e]}),[p]),_=o.useCallback(e=>a(X,{size:"small",label:p[e]}),[p]),x=o.useMemo(()=>d.map(e=>({key:e,label:S(e,y),alternateNames:y?[S(e,!y)]:void 0,favorite:u(e),color:F(e)})).sort((e,l)=>e.favorite&&!l.favorite?-1:!e.favorite&&l.favorite?1:e.label.localeCompare(l.label)),[y,S,F,u,d]);return a(o.Suspense,{fallback:a(K,{variant:"text",width:100}),children:a(Z,{label:m`searchLabel.char`,options:x,toImg:v,valueKeys:r,onChange:e=>i(e),toExLabel:D,toExItemLabel:_,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:s=>s.name??"",lastEdit:s=>s.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(s){return{charKeys:(r,i)=>{var n;if(!i.length)return!0;const c=(n=s.teams.get(r))==null?void 0:n.loadoutData.filter(N),m=c==null?void 0:c.map(({teamCharId:h})=>{var u;return(u=s.teamChars.get(h))==null?void 0:u.key}).filter(N);return i.every(h=>m==null?void 0:m.includes(h))},name:(r,i)=>{var c;return!i||!!((c=s.teams.get(r))!=null&&c.name.toLowerCase().includes(i.toLowerCase()))}}}const be={xs:1,sm:2,md:2,lg:3,xl:3},we={xs:6,sm:12,md:18,lg:24,xl:24};function Fe(){const{t:s}=j(["page_team","page_teams","sillyWisher_charNames","charNames_gen"]),r=U(),[i,c]=z(),m=ae();o.useEffect(()=>r.teams.followAny((t,f)=>(f==="new"||f==="remove"||f==="update")&&c()),[c,r]),te();const y=()=>{const t=r.teams.new();m(t)},[n,h,u]=se(),[v,S]=o.useState(""),F=()=>{try{const t=JSON.parse(v);r.teams.import(t)||window.alert(s`importForm.error.verifi`),u()}catch(t){window.alert(s`importForm.error.import`+`
${t}`);return}},I=re(r.displayTeam),{sortType:C,ascending:d,charKeys:p}=I,[D,_]=o.useState(I.searchTerm),x=o.useDeferredValue(D);o.useEffect(()=>{r.displayTeam.set({searchTerm:x})},[r,x]);const{teamIds:e,totalTeamNum:l}=o.useMemo(()=>{const t=r.teams.keys.length,f=r.teams.keys.filter(oe({charKeys:p,name:x},xe(r))).sort((O,R)=>ne(Ce[C],d,Te())(r.teams.get(O),r.teams.get(R)));return i&&{teamIds:f,totalTeamNum:t}},[i,r,p,x,C,d]),k=le(),{numShow:T,setTriggerElement:E}=ce(we[k],e.length),g=o.useMemo(()=>e.slice(0,T),[e,T]),b=e.length!==l?`${e.length}/${l}`:`${l}`,B={numShowing:g.length,total:b,t:s,namespace:"page_teams"},H={sortKeys:[...ge],value:C,onChange:t=>r.displayTeam.set({sortType:t}),ascending:d,onChangeAsc:t=>r.displayTeam.set({ascending:t})};return w(M,{display:"flex",flexDirection:"column",gap:1,children:[a(P,{children:w(L,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(M,{display:"flex",gap:1,alignItems:"stretch",children:[a(ye,{teamIds:e,charKeys:p,setCharKey:t=>r.displayTeam.set({charKeys:t}),acProps:{sx:{flexGrow:1}}}),a(A,{autoFocus:!0,value:D,onChange:t=>_(t.target.value),label:s`searchLabel.team`,sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),a(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(ie,{showingTextProps:B,sortByButtonProps:H})})]})}),w(M,{sx:{display:"flex",gap:1},children:[a($,{fullWidth:!0,onClick:y,color:"info",startIcon:a(me,{}),children:s`addTeamBtn`}),a(pe,{open:n,onClose:u,children:w(P,{children:[a(he,{title:s`importForm.title`}),a(ue,{}),w(L,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a(de,{children:s`importForm.desc`}),a(A,{fullWidth:!0,label:s`importForm.label`,placeholder:s`importForm.placeholder`,value:v,onChange:t=>S(t.target.value),multiline:!0,rows:4}),a($,{startIcon:a(G,{}),disabled:!v,onClick:F,children:s`importForm.importBtn`})]})]})}),a($,{fullWidth:!0,onClick:h,color:"info",startIcon:a(G,{}),children:s`importTeamBtn`})]}),a(o.Suspense,{fallback:a(K,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(W,{container:!0,spacing:2,columns:be,children:g.map(t=>a(W,{item:!0,xs:1,children:a(o.Suspense,{fallback:a(K,{variant:"rectangular",width:"100%",height:150}),children:a(fe,{teamId:t,bgt:"light",onClick:f=>m(`${t}${f?`/${f}`:""}`)})})},t))})}),e.length!==g.length&&a(K,{ref:t=>{t&&E(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Fe as default};
