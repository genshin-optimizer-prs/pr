import{u as G,d as r,aL as q,b as j,bt as z,q as a,bw as Q,c1 as R,ad as J,aS as Z,ce as _,v as X,a3 as M,cf as Y,f as ee,c4 as ae,cg as te,Z as se,ch as re,ap as oe,aq as ne,am as le,ar as ce,p as b,W as K,V as A,s as B,b4 as P,av as ie,w as L,as as me,B as W,C as he,D as ue,T as de,a4 as fe,ci as pe}from"./index-B-txg4cI.js";import{T as ge}from"./TeamCard-DoRnUV0A.js";import{d as O}from"./Upload-B67J-yK9.js";function ye({teamIds:l,charKeys:s,setCharKey:i,acProps:c}){const{t:m}=G(["sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(q),o=j(),{gender:h}=z(),u=r.useCallback(e=>o.charMeta.get(e).favorite,[o.charMeta]),v=r.useCallback(e=>a(Q,{characterKey:e}),[]),S=r.useCallback((e,n)=>m(`${n?"sillyWisher_charNames":"charNames_gen"}:${R(e,h)}`),[h,m]),E=ee,[I,C]=J();r.useEffect(()=>o.chars.followAny((e,n)=>["new","remove"].includes(n)&&C()),[o.chars,C]);const d=r.useMemo(()=>I&&o.chars.keys,[o,I]),{characterTeamTotal:f}=r.useMemo(()=>Z({characterTeamTotal:d},n=>{o.teams.values.forEach(k=>{const{loadoutData:T}=k;T.filter(_).forEach(({teamCharId:D})=>{const p=o.teamChars.get(D);if(!p)return;const w=p.key;n.characterTeamTotal[w].total++})}),l.forEach(k=>{const T=o.teams.get(k);if(!T)return;const{loadoutData:D}=T;D.filter(_).forEach(({teamCharId:p})=>{const w=o.teamChars.get(p);if(!w)return;const F=w.key;n.characterTeamTotal[F].current++})})}),[o,d,l]),N=r.useCallback(e=>a("strong",{children:f[e]}),[f]),$=r.useCallback(e=>a(X,{size:"small",label:f[e]}),[f]),x=r.useMemo(()=>d.map(e=>({key:e,label:S(e,y),alternateNames:y?[S(e,!y)]:void 0,favorite:u(e),color:E(e)})).sort((e,n)=>e.favorite&&!n.favorite?-1:!e.favorite&&n.favorite?1:e.label.localeCompare(n.label)),[y,S,E,u,d]);return a(r.Suspense,{fallback:a(M,{variant:"text",width:100}),children:a(Y,{label:"Characters",options:x,toImg:v,valueKeys:s,onChange:e=>i(e),toExLabel:N,toExItemLabel:$,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:l=>l.name??"",lastEdit:l=>l.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(l){return{charKeys:(s,i)=>{var o;if(!i.length)return!0;const c=(o=l.teams.get(s))==null?void 0:o.loadoutData.filter(_),m=c==null?void 0:c.map(({teamCharId:h})=>{var u;return(u=l.teamChars.get(h))==null?void 0:u.key}).filter(_);return i.every(h=>m==null?void 0:m.includes(h))},name:(s,i)=>{var c;return!i||!!((c=l.teams.get(s))!=null&&c.name.toLowerCase().includes(i.toLowerCase()))}}}const we={xs:1,sm:2,md:2,lg:3,xl:3},be={xs:6,sm:12,md:18,lg:24,xl:24};function ke(){const{t:l}=G(["page_teams","sillyWisher_charNames","charNames_gen"]),s=j(),[i,c]=J(),m=ae();r.useEffect(()=>s.teams.followAny((t,g)=>(g==="new"||g==="remove"||g==="update")&&c()),[c,s]),te();const y=()=>{const t=s.teams.new();m(t)},[o,h,u]=se(),[v,S]=r.useState(""),E=()=>{try{const t=JSON.parse(v);s.teams.import(t)||window.alert("Data verification failed."),u()}catch(t){window.alert(`Data Import failed. ${t}`);return}},I=re(s.displayTeam),{sortType:C,ascending:d,charKeys:f}=I,[N,$]=r.useState(I.searchTerm),x=r.useDeferredValue(N);r.useEffect(()=>{s.displayTeam.set({searchTerm:x})},[s,x]);const{teamIds:e,totalTeamNum:n}=r.useMemo(()=>{const t=s.teams.keys.length,g=s.teams.keys.filter(oe({charKeys:f,name:x},xe(s))).sort((U,V)=>ne(Ce[C],d,Te())(s.teams.get(U),s.teams.get(V)));return i&&{teamIds:g,totalTeamNum:t}},[i,s,f,x,C,d]),k=le(),{numShow:T,setTriggerElement:D}=ce(be[k],e.length),p=r.useMemo(()=>e.slice(0,T),[e,T]),w=e.length!==n?`${e.length}/${n}`:`${n}`,F={numShowing:p.length,total:w,t:l,namespace:"page_teams"},H={sortKeys:[...pe],value:C,onChange:t=>s.displayTeam.set({sortType:t}),ascending:d,onChangeAsc:t=>s.displayTeam.set({ascending:t})};return b(K,{display:"flex",flexDirection:"column",gap:1,children:[a(L,{children:b(B,{sx:{display:"flex",flexDirection:"column",gap:1},children:[b(K,{display:"flex",gap:1,alignItems:"stretch",children:[a(ye,{teamIds:e,charKeys:f,setCharKey:t=>s.displayTeam.set({charKeys:t}),acProps:{sx:{flexGrow:1}}}),a(P,{autoFocus:!0,value:N,onChange:t=>$(t.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),a(K,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(ie,{showingTextProps:F,sortByButtonProps:H})})]})}),b(K,{sx:{display:"flex",gap:1},children:[a(W,{fullWidth:!0,onClick:y,color:"info",startIcon:a(me,{}),children:"Add Team"}),a(fe,{open:o,onClose:u,children:b(L,{children:[a(he,{title:"Import Team"}),a(ue,{}),b(B,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a(de,{children:"Import a team in JSON form below."}),a(P,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:v,onChange:t=>S(t.target.value),multiline:!0,rows:4}),a(W,{startIcon:a(O,{}),disabled:!v,onClick:E,children:"Import"})]})]})}),a(W,{fullWidth:!0,onClick:h,color:"info",startIcon:a(O,{}),children:"Import Team"})]}),a(r.Suspense,{fallback:a(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(A,{container:!0,spacing:1,columns:we,children:p.map(t=>a(A,{item:!0,xs:1,children:a(r.Suspense,{fallback:a(M,{variant:"rectangular",width:"100%",height:150}),children:a(ge,{teamId:t,bgt:"light",onClick:g=>m(`${t}${g?`/${g}`:""}`)})})},t))})}),e.length!==p.length&&a(M,{ref:t=>{t&&D(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ke as default};
