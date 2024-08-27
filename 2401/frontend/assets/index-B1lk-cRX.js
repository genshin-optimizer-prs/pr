import{y as O,r,aY as Q,a as j,bI as R,d as a,bL as V,cj as Y,ap as J,b3 as q,cQ as _,P as X,S as K,cR as Z,b as ee,z as ae,cS as te,aa as se,bA as re,aC as oe,aD as ne,az as le,aE as ce,e as w,h as M,G as P,N as W,bg as B,aI as ie,i as L,aF as me,ac as A,L as he,M as ue,T as de,ah as pe,cT as fe}from"./index-B-RQU_yv.js";import{T as ge}from"./TeamCard-S6iLa4Ue.js";import{d as G}from"./Upload-5kwWYqDZ.js";import"./useTeamChar-DpjoirDG.js";import"./TeamDelModal-BKkn71Ao.js";function ye({teamIds:l,charKeys:s,setCharKey:i,acProps:c}){const{t:m}=O(["sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(Q),o=j(),{gender:h}=R(),u=r.useCallback(e=>o.charMeta.get(e).favorite,[o.charMeta]),S=r.useCallback(e=>a(V,{characterKey:e}),[]),v=r.useCallback((e,n)=>m(`${n?"sillyWisher_charNames":"charNames_gen"}:${Y(e,h)}`),[h,m]),E=ee,[I,C]=J();r.useEffect(()=>o.chars.followAny((e,n)=>["new","remove"].includes(n)&&C()),[o.chars,C]);const d=r.useMemo(()=>I&&o.chars.keys,[o,I]),{characterTeamTotal:p}=r.useMemo(()=>q({characterTeamTotal:d},n=>{o.teams.values.forEach(k=>{const{loadoutData:T}=k;T.filter(_).forEach(({teamCharId:D})=>{const f=o.teamChars.get(D);if(!f)return;const b=f.key;n.characterTeamTotal[b].total++})}),l.forEach(k=>{const T=o.teams.get(k);if(!T)return;const{loadoutData:D}=T;D.filter(_).forEach(({teamCharId:f})=>{const b=o.teamChars.get(f);if(!b)return;const $=b.key;n.characterTeamTotal[$].current++})})}),[o,d,l]),N=r.useCallback(e=>a("strong",{children:p[e]}),[p]),F=r.useCallback(e=>a(X,{size:"small",label:p[e]}),[p]),x=r.useMemo(()=>d.map(e=>({key:e,label:v(e,y),alternateNames:y?[v(e,!y)]:void 0,favorite:u(e),color:E(e)})).sort((e,n)=>e.favorite&&!n.favorite?-1:!e.favorite&&n.favorite?1:e.label.localeCompare(n.label)),[y,v,E,u,d]);return a(r.Suspense,{fallback:a(K,{variant:"text",width:100}),children:a(Z,{label:"Characters",options:x,toImg:S,valueKeys:s,onChange:e=>i(e),toExLabel:N,toExItemLabel:F,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:l=>l.name??"",lastEdit:l=>l.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(l){return{charKeys:(s,i)=>{var o;if(!i.length)return!0;const c=(o=l.teams.get(s))==null?void 0:o.loadoutData.filter(_),m=c==null?void 0:c.map(({teamCharId:h})=>{var u;return(u=l.teamChars.get(h))==null?void 0:u.key}).filter(_);return i.every(h=>m==null?void 0:m.includes(h))},name:(s,i)=>{var c;return!i||!!((c=l.teams.get(s))!=null&&c.name.toLowerCase().includes(i.toLowerCase()))}}}const be={xs:1,sm:2,md:2,lg:3,xl:3},we={xs:6,sm:12,md:18,lg:24,xl:24};function Ee(){const{t:l}=O(["page_teams","sillyWisher_charNames","charNames_gen"]),s=j(),[i,c]=J(),m=ae();r.useEffect(()=>s.teams.followAny((t,g)=>(g==="new"||g==="remove"||g==="update")&&c()),[c,s]),te();const y=()=>{const t=s.teams.new();m(t)},[o,h,u]=se(),[S,v]=r.useState(""),E=()=>{try{const t=JSON.parse(S);s.teams.import(t)||window.alert("Data verification failed."),u()}catch(t){window.alert(`Data Import failed. ${t}`);return}},I=re(s.displayTeam),{sortType:C,ascending:d,charKeys:p}=I,[N,F]=r.useState(I.searchTerm),x=r.useDeferredValue(N);r.useEffect(()=>{s.displayTeam.set({searchTerm:x})},[s,x]);const{teamIds:e,totalTeamNum:n}=r.useMemo(()=>{const t=s.teams.keys.length,g=s.teams.keys.filter(oe({charKeys:p,name:x},xe(s))).sort((H,U)=>ne(Ce[C],d,Te())(s.teams.get(H),s.teams.get(U)));return i&&{teamIds:g,totalTeamNum:t}},[i,s,p,x,C,d]),k=le(),{numShow:T,setTriggerElement:D}=ce(we[k],e.length),f=r.useMemo(()=>e.slice(0,T),[e,T]),b=e.length!==n?`${e.length}/${n}`:`${n}`,$={numShowing:f.length,total:b,t:l,namespace:"page_teams"},z={sortKeys:[...fe],value:C,onChange:t=>s.displayTeam.set({sortType:t}),ascending:d,onChangeAsc:t=>s.displayTeam.set({ascending:t})};return w(M,{display:"flex",flexDirection:"column",gap:1,children:[a(L,{children:w(W,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(M,{display:"flex",gap:1,alignItems:"stretch",children:[a(ye,{teamIds:e,charKeys:p,setCharKey:t=>s.displayTeam.set({charKeys:t}),acProps:{sx:{flexGrow:1}}}),a(B,{autoFocus:!0,value:N,onChange:t=>F(t.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),a(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(ie,{showingTextProps:$,sortByButtonProps:z})})]})}),w(M,{sx:{display:"flex",gap:1},children:[a(A,{fullWidth:!0,onClick:y,color:"info",startIcon:a(me,{}),children:"Add Team"}),a(pe,{open:o,onClose:u,children:w(L,{children:[a(he,{title:"Import Team"}),a(ue,{}),w(W,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a(de,{children:"Import a team in JSON form below."}),a(B,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:S,onChange:t=>v(t.target.value),multiline:!0,rows:4}),a(A,{startIcon:a(G,{}),disabled:!S,onClick:E,children:"Import"})]})]})}),a(A,{fullWidth:!0,onClick:h,color:"info",startIcon:a(G,{}),children:"Import Team"})]}),a(r.Suspense,{fallback:a(K,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(P,{container:!0,spacing:2,columns:be,children:f.map(t=>a(P,{item:!0,xs:1,children:a(r.Suspense,{fallback:a(K,{variant:"rectangular",width:"100%",height:150}),children:a(ge,{teamId:t,bgt:"light",onClick:g=>m(`${t}${g?`/${g}`:""}`)})})},t))})}),e.length!==f.length&&a(K,{ref:t=>{t&&D(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Ee as default};
