import{e as o,p as e,n as v,aH as z,aI as Q,V as _,aJ as V,aK as Y,q as W,r as Z,i as X,j as ee,u as L,ab as ae,b as H,d as te,ar as re,aL as E,Z as se,aE as oe,Q as le,aM as ne,K as N,J as A,C as F,Y as B,B as $,D as ie,T as ce,aN as me,aO as ue}from"./index-c81c8d35.js";import{T as O,A as he,C as de,f as pe,s as fe,u as ge,a as ye,S as Ce}from"./StarDisplay-db0872b8.js";import{a as Te,T as ve,d as xe}from"./TeamCard-adc86d0d.js";import{M as we}from"./DropdownButton-afe2aa21.js";import{g as Se}from"./index-4a3b8e11.js";import{b as be}from"./totalUtils-dff11811.js";import{C as Ie}from"./CardHeader-95d15d27.js";import"./ColoredText-ec8fddf1.js";import"./BootstrapTooltip-0439019a.js";import"./DataContext-007ba0d6.js";import"./Artifact-a9abbf31.js";import"./SqBadge-521820b6.js";import"./index-16f48a5a.js";import"./SlotIcon-ebc3b100.js";import"./useWeapon-a66185df.js";import"./index-42e81c61.js";import"./CardActionArea-81bc7ee2.js";function ke({options:c,valueKeys:a,label:d,onChange:u,toImg:p,toExItemLabel:C,toExLabel:n,chipProps:f,...y}){const b=o.useMemo(()=>a.map(l=>c.find(t=>t.key===l)).filter(l=>l),[c,a]);return e(he,{autoHighlight:!0,options:c,multiple:!0,disableCloseOnSelect:!0,value:b,onChange:(l,t,m)=>m==="clear"?u([]):t!==null&&u(t.map(i=>i.key)),isOptionEqualToValue:(l,t)=>l.key===t.key,renderInput:l=>e(O,{...l,label:d,inputProps:{...l.inputProps,autoComplete:"new-password"},color:a.length?"success":"primary"}),renderOption:(l,t)=>v(we,{value:t.key,...l,children:[e(z,{children:p(t.key)}),e(Q,{children:e(o.Suspense,{fallback:e(_,{variant:"text",width:100}),children:v(V,{color:t.color,sx:{display:"flex",gap:1},children:[a.includes(t.key)?e("strong",{children:t.label}):e("span",{children:t.label}),C==null?void 0:C(t.key)]})})}),!!t.favorite&&e(Te,{})]}),renderTags:(l,t)=>l.map(({key:m,label:i,color:T},x)=>Y(W,{...f,...t({index:x}),key:`${x}${m}${i}`,icon:p(m),label:n?v("span",{children:[i," ",n(m)]}):i,color:T})),filterOptions:(l,{inputValue:t})=>l.filter(m=>{var i;return m.label.toLowerCase().includes(t.toLowerCase())||((i=m.alternateNames)==null?void 0:i.some(T=>T.toLowerCase().includes(t.toLowerCase())))}),...y})}var j={},De=X;Object.defineProperty(j,"__esModule",{value:!0});var P=j.default=void 0,Me=De(Z()),_e=ee,Ke=(0,Me.default)((0,_e.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");P=j.default=Ke;function Ne({teamIds:c,charKeys:a,setCharKey:d,acProps:u}){const{t:p}=L(["sillyWisher_charNames","charNames_gen"]),{silly:C}=o.useContext(ae),n=H(),{gender:f}=te(),y=o.useCallback(r=>n.charMeta.get(r).favorite,[n.charMeta]),b=o.useCallback(r=>e(de,{characterKey:r}),[]),l=o.useCallback((r,h)=>p(`${h?"sillyWisher_charNames":"charNames_gen"}:${re(r,f)}`),[f,p]),t=o.useCallback(r=>Se(r,f).elementKey??void 0,[f]),m=o.useMemo(()=>n.chars.keys,[n]),{characterTeamTotal:i}=o.useMemo(()=>be({characterTeamTotal:m},h=>{n.teams.values.forEach(g=>{const{loadoutData:w}=g;w.filter(E).forEach(({teamCharId:D})=>{const I=n.teamChars.get(D);if(!I)return;const k=I.key;h.characterTeamTotal[k].total++})}),c.forEach(g=>{const w=n.teams.get(g);if(!w)return;const{loadoutData:D}=w;D.filter(E).forEach(({teamCharId:I})=>{const k=n.teamChars.get(I);if(!k)return;const M=k.key;h.characterTeamTotal[M].current++})})}),[n,m,c]),T=o.useCallback(r=>e("strong",{children:i[r]}),[i]),x=o.useCallback(r=>e(W,{size:"small",label:i[r]}),[i]),K=o.useMemo(()=>m.map(r=>({key:r,label:l(r,C),favorite:y(r),color:t(r)})).sort((r,h)=>r.favorite&&!h.favorite?-1:!r.favorite&&h.favorite?1:r.label.localeCompare(h.label)),[C,l,t,y,m]);return e(o.Suspense,{fallback:e(_,{variant:"text",width:100}),children:e(ke,{label:"Characters",options:K,toImg:b,valueKeys:a,onChange:r=>d(r),toExLabel:T,toExItemLabel:x,chipProps:{variant:"outlined"},...u})})}function Ee(){return{name:c=>c.name??"",lastEdit:c=>c.lastEdit??0}}const $e={name:["name","lastEdit"],lastEdit:["lastEdit"]};function Oe(c){return{charKeys:(a,d)=>{var n;if(!d.length)return!0;const u=(n=c.teams.get(a))==null?void 0:n.loadoutData.filter(E),p=u==null?void 0:u.map(({teamCharId:f})=>{var y;return(y=c.teamChars.get(f))==null?void 0:y.key}).filter(E);return d.every(f=>p==null?void 0:p.includes(f))},name:(a,d)=>{var u;return!d||!!((u=c.teams.get(a))!=null&&u.name.toLowerCase().includes(d.toLowerCase()))}}}const Pe={xs:1,sm:2,md:3,lg:3,xl:3},je={xs:6,sm:12,md:18,lg:24,xl:24};function ea(){const{t:c}=L(["page_teams","sillyWisher_charNames","charNames_gen"]),a=H(),[d,u]=se(),p=oe();o.useEffect(()=>a.teams.followAny((s,S)=>(S==="new"||S==="remove"||S==="update")&&u()),[u,a]);const C=()=>{const s=a.teams.new();p(s)},[n,f,y]=le(),[b,l]=o.useState(""),t=()=>{try{const s=JSON.parse(b);a.teams.import(s)||window.alert("Data verification failed."),y()}catch(s){window.alert(`Data Import failed. ${s}`);return}},m=ne(a.displayTeam),{sortType:i,ascending:T,charKeys:x}=m,[K,r]=o.useState(m.searchTerm),h=o.useDeferredValue(K);o.useEffect(()=>{a.displayTeam.set({searchTerm:h})},[a,h]);const{teamIds:g,totalTeamNum:w}=o.useMemo(()=>{const s=a.teams.keys.length,S=a.teams.keys.filter(pe({charKeys:x,name:h},Oe(a))).sort((R,U)=>fe($e[i],T,Ee())(a.teams.get(R),a.teams.get(U)));return d&&{teamIds:S,totalTeamNum:s}},[d,a,x,h,i,T]),D=ge(),{numShow:I,setTriggerElement:k}=ye(je[D],g.length),M=o.useMemo(()=>g.slice(0,I),[g,I]),J=g.length!==w?`${g.length}/${w}`:`${w}`,q={numShowing:M.length,total:J,t:c,namespace:"page_teams"},G={sortKeys:[...ue],value:i,onChange:s=>a.displayTeam.set({sortType:s}),ascending:T,onChangeAsc:s=>a.displayTeam.set({ascending:s})};return v(N,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(B,{children:v(F,{sx:{display:"flex",flexDirection:"column",gap:1},children:[v(N,{display:"flex",gap:1,alignItems:"stretch",children:[e(Ne,{teamIds:g,charKeys:x,setCharKey:s=>a.displayTeam.set({charKeys:s}),acProps:{sx:{flexGrow:1}}}),e(O,{autoFocus:!0,value:K,onChange:s=>r(s.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),e(N,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(Ce,{showingTextProps:q,sortByButtonProps:G})})]})}),v(N,{sx:{display:"flex",gap:1},children:[e($,{fullWidth:!0,onClick:C,color:"info",startIcon:e(xe,{}),children:"Add Team"}),e(me,{open:n,onClose:y,children:v(B,{children:[e(Ie,{title:"Import Team"}),e(ie,{}),v(F,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(ce,{children:"Import a team in JSON form below."}),e(O,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:b,onChange:s=>l(s.target.value),multiline:!0,rows:4}),e($,{startIcon:e(P,{}),disabled:!b,onClick:t,children:"Import"})]})]})}),e($,{fullWidth:!0,onClick:f,color:"info",startIcon:e(P,{}),children:"Import Team"})]}),e(o.Suspense,{fallback:e(_,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(A,{container:!0,spacing:1,columns:Pe,children:M.map(s=>e(A,{item:!0,xs:1,children:e(o.Suspense,{fallback:e(_,{variant:"rectangular",width:"100%",height:150}),children:e(ve,{teamId:s,bgt:"light",onClick:S=>p(`${s}${S?`/${S}`:""}`),hoverCard:!0})})},s))})}),g.length!==M.length&&e(_,{ref:s=>{s&&k(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ea as default};
