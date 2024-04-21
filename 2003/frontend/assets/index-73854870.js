import{u as O,d as r,aI as U,b as G,bk as q,q as e,bn as z,bV as Q,c6 as R,v as Y,a2 as M,c7 as Z,f as X,c8 as _,ac as ee,bY as ae,c9 as te,Z as se,ca as re,ap as oe,aq as ne,an as le,ar as ce,p as b,W as K,V as F,s as W,aS as B,au as ie,w as P,as as me,B as $,C as he,D as ue,T as de,a3 as pe,cb as fe}from"./index-dfd99072.js";import{T as ge}from"./TeamCard-cd4ce8b9.js";import{d as A}from"./Upload-05f5728c.js";function ye({teamIds:l,charKeys:s,setCharKey:m,acProps:c}){const{t:h}=O(["sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(U),o=G(),{gender:u}=q(),d=r.useCallback(t=>o.charMeta.get(t).favorite,[o.charMeta]),w=r.useCallback(t=>e(z,{characterKey:t}),[]),S=r.useCallback((t,n)=>h(`${n?"sillyWisher_charNames":"charNames_gen"}:${Q(t,u)}`),[u,h]),E=X,T=r.useMemo(()=>o.chars.keys,[o]),{characterTeamTotal:p}=r.useMemo(()=>R({characterTeamTotal:T},n=>{o.teams.values.forEach(i=>{const{loadoutData:f}=i;f.filter(_).forEach(({teamCharId:k})=>{const C=o.teamChars.get(k);if(!C)return;const x=C.key;n.characterTeamTotal[x].total++})}),l.forEach(i=>{const f=o.teams.get(i);if(!f)return;const{loadoutData:k}=f;k.filter(_).forEach(({teamCharId:C})=>{const x=o.teamChars.get(C);if(!x)return;const D=x.key;n.characterTeamTotal[D].current++})})}),[o,T,l]),v=r.useCallback(t=>e("strong",{children:p[t]}),[p]),I=r.useCallback(t=>e(Y,{size:"small",label:p[t]}),[p]),N=r.useMemo(()=>T.map(t=>({key:t,label:S(t,y),alternateNames:y?[S(t,!y)]:void 0,favorite:d(t),color:E(t)})).sort((t,n)=>t.favorite&&!n.favorite?-1:!t.favorite&&n.favorite?1:t.label.localeCompare(n.label)),[y,S,E,d,T]);return e(r.Suspense,{fallback:e(M,{variant:"text",width:100}),children:e(Z,{label:"Characters",options:N,toImg:w,valueKeys:s,onChange:t=>m(t),toExLabel:v,toExItemLabel:I,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:l=>l.name??"",lastEdit:l=>l.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(l){return{charKeys:(s,m)=>{var o;if(!m.length)return!0;const c=(o=l.teams.get(s))==null?void 0:o.loadoutData.filter(_),h=c==null?void 0:c.map(({teamCharId:u})=>{var d;return(d=l.teamChars.get(u))==null?void 0:d.key}).filter(_);return m.every(u=>h==null?void 0:h.includes(u))},name:(s,m)=>{var c;return!m||!!((c=l.teams.get(s))!=null&&c.name.toLowerCase().includes(m.toLowerCase()))}}}const be={xs:1,sm:2,md:3,lg:3,xl:3},we={xs:6,sm:12,md:18,lg:24,xl:24};function ke(){const{t:l}=O(["page_teams","sillyWisher_charNames","charNames_gen"]),s=G(),[m,c]=ee(),h=ae();r.useEffect(()=>s.teams.followAny((a,g)=>(g==="new"||g==="remove"||g==="update")&&c()),[c,s]),te();const y=()=>{const a=s.teams.new();h(a)},[o,u,d]=se(),[w,S]=r.useState(""),E=()=>{try{const a=JSON.parse(w);s.teams.import(a)||window.alert("Data verification failed."),d()}catch(a){window.alert(`Data Import failed. ${a}`);return}},T=re(s.displayTeam),{sortType:p,ascending:v,charKeys:I}=T,[N,t]=r.useState(T.searchTerm),n=r.useDeferredValue(N);r.useEffect(()=>{s.displayTeam.set({searchTerm:n})},[s,n]);const{teamIds:i,totalTeamNum:f}=r.useMemo(()=>{const a=s.teams.keys.length,g=s.teams.keys.filter(oe({charKeys:I,name:n},xe(s))).sort((V,H)=>ne(Ce[p],v,Te())(s.teams.get(V),s.teams.get(H)));return m&&{teamIds:g,totalTeamNum:a}},[m,s,I,n,p,v]),k=le(),{numShow:C,setTriggerElement:x}=ce(we[k],i.length),D=r.useMemo(()=>i.slice(0,C),[i,C]),L=i.length!==f?`${i.length}/${f}`:`${f}`,j={numShowing:D.length,total:L,t:l,namespace:"page_teams"},J={sortKeys:[...fe],value:p,onChange:a=>s.displayTeam.set({sortType:a}),ascending:v,onChangeAsc:a=>s.displayTeam.set({ascending:a})};return b(K,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(P,{children:b(W,{sx:{display:"flex",flexDirection:"column",gap:1},children:[b(K,{display:"flex",gap:1,alignItems:"stretch",children:[e(ye,{teamIds:i,charKeys:I,setCharKey:a=>s.displayTeam.set({charKeys:a}),acProps:{sx:{flexGrow:1}}}),e(B,{autoFocus:!0,value:N,onChange:a=>t(a.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),e(K,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(ie,{showingTextProps:j,sortByButtonProps:J})})]})}),b(K,{sx:{display:"flex",gap:1},children:[e($,{fullWidth:!0,onClick:y,color:"info",startIcon:e(me,{}),children:"Add Team"}),e(pe,{open:o,onClose:d,children:b(P,{children:[e(he,{title:"Import Team"}),e(ue,{}),b(W,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(de,{children:"Import a team in JSON form below."}),e(B,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:w,onChange:a=>S(a.target.value),multiline:!0,rows:4}),e($,{startIcon:e(A,{}),disabled:!w,onClick:E,children:"Import"})]})]})}),e($,{fullWidth:!0,onClick:u,color:"info",startIcon:e(A,{}),children:"Import Team"})]}),e(r.Suspense,{fallback:e(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(F,{container:!0,spacing:1,columns:be,children:D.map(a=>e(F,{item:!0,xs:1,children:e(r.Suspense,{fallback:e(M,{variant:"rectangular",width:"100%",height:150}),children:e(ge,{teamId:a,bgt:"light",onClick:g=>h(`${a}${g?`/${g}`:""}`),hoverCard:!0})})},a))})}),i.length!==D.length&&e(M,{ref:a=>{a&&x(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ke as default};
