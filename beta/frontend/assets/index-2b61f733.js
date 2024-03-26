import{e as o,p as e,n as x,aH as Q,aI as V,V as M,aJ as z,aK as R,q as W,u as L,ab as Y,b as J,d as Z,ar as X,aL as E,Z as ee,aE as ae,Q as te,aM as re,K as $,J as P,C as A,Y as F,B as _,D as se,T as oe,aN as ne,aO as le}from"./index-728444d7.js";import{T as O,A as ie,C as ce,f as me,s as ue,u as he,a as de,S as pe}from"./StarDisplay-1aa55563.js";import{a as fe,T as ge,d as ye}from"./TeamCard-18e73cdd.js";import{d as B}from"./Upload-07f2f7fb.js";import{M as Ce}from"./DropdownButton-ae389c22.js";import{g as Te}from"./index-210be670.js";import{b as xe}from"./totalUtils-b91d0f95.js";import{C as we}from"./CardHeader-0f2577c6.js";import"./ColoredText-92026b96.js";import"./BootstrapTooltip-cd720388.js";import"./DataContext-1e35f059.js";import"./Artifact-af48c65a.js";import"./SqBadge-9fec79cd.js";import"./index-ed4be352.js";import"./SlotIcon-ff53f3eb.js";import"./useWeapon-2d9fa044.js";import"./index-72d08f07.js";import"./CardActionArea-61d8b7dc.js";function ve({options:c,valueKeys:a,label:d,onChange:u,toImg:p,toExItemLabel:C,toExLabel:l,chipProps:f,...y}){const b=o.useMemo(()=>a.map(n=>c.find(t=>t.key===n)).filter(n=>n),[c,a]);return e(ie,{autoHighlight:!0,options:c,multiple:!0,disableCloseOnSelect:!0,value:b,onChange:(n,t,m)=>m==="clear"?u([]):t!==null&&u(t.map(i=>i.key)),isOptionEqualToValue:(n,t)=>n.key===t.key,renderInput:n=>e(O,{...n,label:d,inputProps:{...n.inputProps,autoComplete:"new-password"},color:a.length?"success":"primary"}),renderOption:(n,t)=>x(Ce,{value:t.key,...n,children:[e(Q,{children:p(t.key)}),e(V,{children:e(o.Suspense,{fallback:e(M,{variant:"text",width:100}),children:x(z,{color:t.color,sx:{display:"flex",gap:1},children:[a.includes(t.key)?e("strong",{children:t.label}):e("span",{children:t.label}),C==null?void 0:C(t.key)]})})}),!!t.favorite&&e(fe,{})]}),renderTags:(n,t)=>n.map(({key:m,label:i,color:T},w)=>R(W,{...f,...t({index:w}),key:`${w}${m}${i}`,icon:p(m),label:l?x("span",{children:[i," ",l(m)]}):i,color:T})),filterOptions:(n,{inputValue:t})=>n.filter(m=>{var i;return m.label.toLowerCase().includes(t.toLowerCase())||((i=m.alternateNames)==null?void 0:i.some(T=>T.toLowerCase().includes(t.toLowerCase())))}),...y})}function Se({teamIds:c,charKeys:a,setCharKey:d,acProps:u}){const{t:p}=L(["sillyWisher_charNames","charNames_gen"]),{silly:C}=o.useContext(Y),l=J(),{gender:f}=Z(),y=o.useCallback(r=>l.charMeta.get(r).favorite,[l.charMeta]),b=o.useCallback(r=>e(ce,{characterKey:r}),[]),n=o.useCallback((r,h)=>p(`${h?"sillyWisher_charNames":"charNames_gen"}:${X(r,f)}`),[f,p]),t=o.useCallback(r=>Te(r,f).elementKey??void 0,[f]),m=o.useMemo(()=>l.chars.keys,[l]),{characterTeamTotal:i}=o.useMemo(()=>xe({characterTeamTotal:m},h=>{l.teams.values.forEach(g=>{const{loadoutData:v}=g;v.filter(E).forEach(({teamCharId:D})=>{const k=l.teamChars.get(D);if(!k)return;const I=k.key;h.characterTeamTotal[I].total++})}),c.forEach(g=>{const v=l.teams.get(g);if(!v)return;const{loadoutData:D}=v;D.filter(E).forEach(({teamCharId:k})=>{const I=l.teamChars.get(k);if(!I)return;const K=I.key;h.characterTeamTotal[K].current++})})}),[l,m,c]),T=o.useCallback(r=>e("strong",{children:i[r]}),[i]),w=o.useCallback(r=>e(W,{size:"small",label:i[r]}),[i]),N=o.useMemo(()=>m.map(r=>({key:r,label:n(r,C),favorite:y(r),color:t(r)})).sort((r,h)=>r.favorite&&!h.favorite?-1:!r.favorite&&h.favorite?1:r.label.localeCompare(h.label)),[C,n,t,y,m]);return e(o.Suspense,{fallback:e(M,{variant:"text",width:100}),children:e(ve,{label:"Characters",options:N,toImg:b,valueKeys:a,onChange:r=>d(r),toExLabel:T,toExItemLabel:w,chipProps:{variant:"outlined"},...u})})}function be(){return{name:c=>c.name??"",lastEdit:c=>c.lastEdit??0}}const ke={name:["name","lastEdit"],lastEdit:["lastEdit"]};function Ie(c){return{charKeys:(a,d)=>{var l;if(!d.length)return!0;const u=(l=c.teams.get(a))==null?void 0:l.loadoutData.filter(E),p=u==null?void 0:u.map(({teamCharId:f})=>{var y;return(y=c.teamChars.get(f))==null?void 0:y.key}).filter(E);return d.every(f=>p==null?void 0:p.includes(f))},name:(a,d)=>{var u;return!d||!!((u=c.teams.get(a))!=null&&u.name.toLowerCase().includes(d.toLowerCase()))}}}const De={xs:1,sm:2,md:3,lg:3,xl:3},Ke={xs:6,sm:12,md:18,lg:24,xl:24};function Qe(){const{t:c}=L(["page_teams","sillyWisher_charNames","charNames_gen"]),a=J(),[d,u]=ee(),p=ae();o.useEffect(()=>a.teams.followAny((s,S)=>(S==="new"||S==="remove"||S==="update")&&u()),[u,a]);const C=()=>{const s=a.teams.new();p(s)},[l,f,y]=te(),[b,n]=o.useState(""),t=()=>{try{const s=JSON.parse(b);a.teams.import(s)||window.alert("Data verification failed."),y()}catch(s){window.alert(`Data Import failed. ${s}`);return}},m=re(a.displayTeam),{sortType:i,ascending:T,charKeys:w}=m,[N,r]=o.useState(m.searchTerm),h=o.useDeferredValue(N);o.useEffect(()=>{a.displayTeam.set({searchTerm:h})},[a,h]);const{teamIds:g,totalTeamNum:v}=o.useMemo(()=>{const s=a.teams.keys.length,S=a.teams.keys.filter(me({charKeys:w,name:h},Ie(a))).sort((U,q)=>ue(ke[i],T,be())(a.teams.get(U),a.teams.get(q)));return d&&{teamIds:S,totalTeamNum:s}},[d,a,w,h,i,T]),D=he(),{numShow:k,setTriggerElement:I}=de(Ke[D],g.length),K=o.useMemo(()=>g.slice(0,k),[g,k]),j=g.length!==v?`${g.length}/${v}`:`${v}`,G={numShowing:K.length,total:j,t:c,namespace:"page_teams"},H={sortKeys:[...le],value:i,onChange:s=>a.displayTeam.set({sortType:s}),ascending:T,onChangeAsc:s=>a.displayTeam.set({ascending:s})};return x($,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(F,{children:x(A,{sx:{display:"flex",flexDirection:"column",gap:1},children:[x($,{display:"flex",gap:1,alignItems:"stretch",children:[e(Se,{teamIds:g,charKeys:w,setCharKey:s=>a.displayTeam.set({charKeys:s}),acProps:{sx:{flexGrow:1}}}),e(O,{autoFocus:!0,value:N,onChange:s=>r(s.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),e($,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(pe,{showingTextProps:G,sortByButtonProps:H})})]})}),x($,{sx:{display:"flex",gap:1},children:[e(_,{fullWidth:!0,onClick:C,color:"info",startIcon:e(ye,{}),children:"Add Team"}),e(ne,{open:l,onClose:y,children:x(F,{children:[e(we,{title:"Import Team"}),e(se,{}),x(A,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(oe,{children:"Import a team in JSON form below."}),e(O,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:b,onChange:s=>n(s.target.value),multiline:!0,rows:4}),e(_,{startIcon:e(B,{}),disabled:!b,onClick:t,children:"Import"})]})]})}),e(_,{fullWidth:!0,onClick:f,color:"info",startIcon:e(B,{}),children:"Import Team"})]}),e(o.Suspense,{fallback:e(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(P,{container:!0,spacing:1,columns:De,children:K.map(s=>e(P,{item:!0,xs:1,children:e(o.Suspense,{fallback:e(M,{variant:"rectangular",width:"100%",height:150}),children:e(ge,{teamId:s,bgt:"light",onClick:S=>p(`${s}${S?`/${S}`:""}`),hoverCard:!0})})},s))})}),g.length!==K.length&&e(M,{ref:s=>{s&&I(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Qe as default};
