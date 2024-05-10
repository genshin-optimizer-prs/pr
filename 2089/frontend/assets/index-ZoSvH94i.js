import{u as O,d as r,aJ as V,b as G,bl as q,q as e,bo as Z,bW as z,c7 as Q,v as R,a3 as M,c8 as X,f as Y,c9 as W,ad as ee,bZ as ae,ca as te,Z as se,cb as re,aq as oe,ar as ne,ao as le,as as ce,p as b,W as K,V as $,s as F,aT as B,av as ie,w as P,at as me,B as _,C as he,D as ue,T as de,a4 as pe,cc as fe}from"./index-5F-OasT6.js";import{T as ge}from"./TeamCard-46gwZIye.js";import{d as A}from"./Upload-BQWbSDlB.js";function ye({teamIds:l,charKeys:s,setCharKey:m,acProps:c}){const{t:h}=O(["sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(V),o=G(),{gender:u}=q(),d=r.useCallback(t=>o.charMeta.get(t).favorite,[o.charMeta]),w=r.useCallback(t=>e(Z,{characterKey:t}),[]),v=r.useCallback((t,n)=>h(`${n?"sillyWisher_charNames":"charNames_gen"}:${z(t,u)}`),[u,h]),E=Y,T=r.useMemo(()=>o.chars.keys,[o]),{characterTeamTotal:p}=r.useMemo(()=>Q({characterTeamTotal:T},n=>{o.teams.values.forEach(i=>{const{loadoutData:f}=i;f.filter(W).forEach(({teamCharId:k})=>{const C=o.teamChars.get(k);if(!C)return;const x=C.key;n.characterTeamTotal[x].total++})}),l.forEach(i=>{const f=o.teams.get(i);if(!f)return;const{loadoutData:k}=f;k.filter(W).forEach(({teamCharId:C})=>{const x=o.teamChars.get(C);if(!x)return;const D=x.key;n.characterTeamTotal[D].current++})})}),[o,T,l]),S=r.useCallback(t=>e("strong",{children:p[t]}),[p]),I=r.useCallback(t=>e(R,{size:"small",label:p[t]}),[p]),N=r.useMemo(()=>T.map(t=>({key:t,label:v(t,y),alternateNames:y?[v(t,!y)]:void 0,favorite:d(t),color:E(t)})).sort((t,n)=>t.favorite&&!n.favorite?-1:!t.favorite&&n.favorite?1:t.label.localeCompare(n.label)),[y,v,E,d,T]);return e(r.Suspense,{fallback:e(M,{variant:"text",width:100}),children:e(X,{label:"Characters",options:N,toImg:w,valueKeys:s,onChange:t=>m(t),toExLabel:S,toExItemLabel:I,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:l=>l.name??"",lastEdit:l=>l.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(l){return{charKeys:(s,m)=>{var o;if(!m.length)return!0;const c=(o=l.teams.get(s))==null?void 0:o.loadoutData.filter(W),h=c==null?void 0:c.map(({teamCharId:u})=>{var d;return(d=l.teamChars.get(u))==null?void 0:d.key}).filter(W);return m.every(u=>h==null?void 0:h.includes(u))},name:(s,m)=>{var c;return!m||!!((c=l.teams.get(s))!=null&&c.name.toLowerCase().includes(m.toLowerCase()))}}}const be={xs:1,sm:2,md:2,lg:3,xl:3},we={xs:6,sm:12,md:18,lg:24,xl:24};function ke(){const{t:l}=O(["page_teams","sillyWisher_charNames","charNames_gen"]),s=G(),[m,c]=ee(),h=ae();r.useEffect(()=>s.teams.followAny((a,g)=>(g==="new"||g==="remove"||g==="update")&&c()),[c,s]),te();const y=()=>{const a=s.teams.new();h(a)},[o,u,d]=se(),[w,v]=r.useState(""),E=()=>{try{const a=JSON.parse(w);s.teams.import(a)||window.alert("Data verification failed."),d()}catch(a){window.alert(`Data Import failed. ${a}`);return}},T=re(s.displayTeam),{sortType:p,ascending:S,charKeys:I}=T,[N,t]=r.useState(T.searchTerm),n=r.useDeferredValue(N);r.useEffect(()=>{s.displayTeam.set({searchTerm:n})},[s,n]);const{teamIds:i,totalTeamNum:f}=r.useMemo(()=>{const a=s.teams.keys.length,g=s.teams.keys.filter(oe({charKeys:I,name:n},xe(s))).sort((H,U)=>ne(Ce[p],S,Te())(s.teams.get(H),s.teams.get(U)));return m&&{teamIds:g,totalTeamNum:a}},[m,s,I,n,p,S]),k=le(),{numShow:C,setTriggerElement:x}=ce(we[k],i.length),D=r.useMemo(()=>i.slice(0,C),[i,C]),J=i.length!==f?`${i.length}/${f}`:`${f}`,L={numShowing:D.length,total:J,t:l,namespace:"page_teams"},j={sortKeys:[...fe],value:p,onChange:a=>s.displayTeam.set({sortType:a}),ascending:S,onChangeAsc:a=>s.displayTeam.set({ascending:a})};return b(K,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(P,{children:b(F,{sx:{display:"flex",flexDirection:"column",gap:1},children:[b(K,{display:"flex",gap:1,alignItems:"stretch",children:[e(ye,{teamIds:i,charKeys:I,setCharKey:a=>s.displayTeam.set({charKeys:a}),acProps:{sx:{flexGrow:1}}}),e(B,{autoFocus:!0,value:N,onChange:a=>t(a.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),e(K,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(ie,{showingTextProps:L,sortByButtonProps:j})})]})}),b(K,{sx:{display:"flex",gap:1},children:[e(_,{fullWidth:!0,onClick:y,color:"info",startIcon:e(me,{}),children:"Add Team"}),e(pe,{open:o,onClose:d,children:b(P,{children:[e(he,{title:"Import Team"}),e(ue,{}),b(F,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(de,{children:"Import a team in JSON form below."}),e(B,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:w,onChange:a=>v(a.target.value),multiline:!0,rows:4}),e(_,{startIcon:e(A,{}),disabled:!w,onClick:E,children:"Import"})]})]})}),e(_,{fullWidth:!0,onClick:u,color:"info",startIcon:e(A,{}),children:"Import Team"})]}),e(r.Suspense,{fallback:e(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e($,{container:!0,spacing:1,columns:be,children:D.map(a=>e($,{item:!0,xs:1,children:e(r.Suspense,{fallback:e(M,{variant:"rectangular",width:"100%",height:150}),children:e(ge,{teamId:a,bgt:"light",onClick:g=>h(`${a}${g?`/${g}`:""}`)})})},a))})}),i.length!==D.length&&e(M,{ref:a=>{a&&x(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ke as default};
