import{e as o,p as e,n as C,aH as R,aI as z,U as D,aJ as Q,aK as V,q as L,r as X,i as Y,j as Z,u as W,a9 as ee,b as F,d as ae,ap as te,X as re,aE as se,Q as oe,aL as ne,K as N,J as j,C as A,aA as B,B as E,D as le,T as ie,aM as ce,aN as me}from"./index-4fe13316.js";import{T as $,A as ue,C as he,f as de,s as pe,u as fe,a as ge,S as ye}from"./StarDisplay-dd42b94c.js";import{a as Ce,T as Te,d as ve}from"./TeamCard-d2522626.js";import{M as xe}from"./DropdownButton-855ce726.js";import{g as we}from"./index-0e875223.js";import{b as Se}from"./totalUtils-fb4ba5bb.js";import{C as be}from"./CardHeader-f4b9a437.js";import"./ColoredText-0ba1230d.js";import"./BootstrapTooltip-a78834ae.js";import"./DataContext-28f5b884.js";import"./Artifact-bb96d181.js";import"./SqBadge-948281f3.js";import"./index-557c87a1.js";import"./SlotIcon-b78007bd.js";import"./useWeapon-8c473ddf.js";import"./index-d49a0829.js";import"./CardActionArea-d58df195.js";function Ie({options:i,valueKeys:a,label:d,onChange:u,toImg:g,toExItemLabel:p,toExLabel:m,chipProps:T,...S}){const b=o.useMemo(()=>a.map(n=>i.find(t=>t.key===n)).filter(n=>n),[i,a]);return e(ue,{autoHighlight:!0,options:i,multiple:!0,disableCloseOnSelect:!0,value:b,onChange:(n,t,c)=>c==="clear"?u([]):t!==null&&u(t.map(l=>l.key)),isOptionEqualToValue:(n,t)=>n.key===t.key,renderInput:n=>e($,{...n,label:d,inputProps:{...n.inputProps,autoComplete:"new-password"},color:a.length?"success":"primary"}),renderOption:(n,t)=>C(xe,{value:t.key,...n,children:[e(R,{children:g(t.key)}),e(z,{children:e(o.Suspense,{fallback:e(D,{variant:"text",width:100}),children:C(Q,{color:t.color,sx:{display:"flex",gap:1},children:[a.includes(t.key)?e("strong",{children:t.label}):e("span",{children:t.label}),p==null?void 0:p(t.key)]})})}),!!t.favorite&&e(Ce,{})]}),renderTags:(n,t)=>n.map(({key:c,label:l,color:y},v)=>V(L,{...T,...t({index:v}),key:`${v}${c}${l}`,icon:g(c),label:m?C("span",{children:[l," ",m(c)]}):l,color:y})),filterOptions:(n,{inputValue:t})=>n.filter(c=>{var l;return c.label.toLowerCase().includes(t.toLowerCase())||((l=c.alternateNames)==null?void 0:l.some(y=>y.toLowerCase().includes(t.toLowerCase())))}),...S})}var P={},ke=Y;Object.defineProperty(P,"__esModule",{value:!0});var O=P.default=void 0,Me=ke(X()),_e=Z,De=(0,Me.default)((0,_e.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");O=P.default=De;function Ke({teamIds:i,charKeys:a,setCharKey:d,acProps:u}){const{t:g}=W(["sillyWisher_charNames","charNames_gen"]),{silly:p}=o.useContext(ee),m=F(),{gender:T}=ae(),S=o.useCallback(r=>m.charMeta.get(r).favorite,[m.charMeta]),b=o.useCallback(r=>e(he,{characterKey:r}),[]),n=o.useCallback((r,h)=>g(`${h?"sillyWisher_charNames":"charNames_gen"}:${te(r,T)}`),[T,g]),t=o.useCallback(r=>we(r,T).elementKey??void 0,[T]),c=o.useMemo(()=>m.chars.keys,[m]),{characterTeamTotal:l}=o.useMemo(()=>Se({characterTeamTotal:c},h=>{m.teams.values.forEach(f=>{const{teamCharIds:x}=f;x.forEach(M=>{const I=m.teamChars.get(M);if(!I)return;const k=I.key;h.characterTeamTotal[k].total++})}),i.forEach(f=>{const x=m.teams.get(f);if(!x)return;const{teamCharIds:M}=x;M.forEach(I=>{const k=m.teamChars.get(I);if(!k)return;const _=k.key;h.characterTeamTotal[_].current++})})}),[m,c,i]),y=o.useCallback(r=>e("strong",{children:l[r]}),[l]),v=o.useCallback(r=>e(L,{size:"small",label:l[r]}),[l]),K=o.useMemo(()=>c.map(r=>({key:r,label:n(r,p),favorite:S(r),color:t(r)})).sort((r,h)=>r.favorite&&!h.favorite?-1:!r.favorite&&h.favorite?1:r.label.localeCompare(h.label)),[p,n,t,S,c]);return e(o.Suspense,{fallback:e(D,{variant:"text",width:100}),children:e(Ie,{label:"Characters",options:K,toImg:b,valueKeys:a,onChange:r=>d(r),toExLabel:y,toExItemLabel:v,chipProps:{variant:"outlined"},...u})})}function Ne(){return{name:i=>i.name??"",lastEdit:i=>i.lastEdit??0}}const Ee={name:["name","lastEdit"],lastEdit:["lastEdit"]};function $e(i){return{charKeys:(a,d)=>{var u;return!d.length||!!((u=i.teams.get(a))!=null&&u.teamCharIds.some(g=>{var p;return d.includes((p=i.teamChars.get(g))==null?void 0:p.key)}))},name:(a,d)=>{var u;return!d||!!((u=i.teams.get(a))!=null&&u.name.toLowerCase().includes(d.toLowerCase()))}}}const Oe={xs:1,sm:2,md:3,lg:3,xl:3},Pe={xs:6,sm:12,md:18,lg:24,xl:24};function Ze(){const{t:i}=W(["page_teams","sillyWisher_charNames","charNames_gen"]),a=F(),[d,u]=re(),g=se();o.useEffect(()=>a.teams.followAny((s,w)=>(w==="new"||w==="remove"||w==="update")&&u()),[u,a]);const p=()=>{const s=a.teams.new();g(s)},[m,T,S]=oe(),[b,n]=o.useState(""),t=()=>{try{const s=JSON.parse(b);a.teams.import(s)||window.alert("Data verification failed."),S()}catch(s){window.alert(`Data Import failed. ${s}`);return}},c=ne(a.displayTeam),{sortType:l,ascending:y,charKeys:v}=c,[K,r]=o.useState(c.searchTerm),h=o.useDeferredValue(K);o.useEffect(()=>{a.displayTeam.set({searchTerm:h})},[a,h]);const{teamIds:f,totalTeamNum:x}=o.useMemo(()=>{const s=a.teams.keys.length,w=a.teams.keys.filter(de({charKeys:v,name:h},$e(a))).sort((q,G)=>pe(Ee[l],y,Ne())(a.teams.get(q),a.teams.get(G)));return d&&{teamIds:w,totalTeamNum:s}},[d,a,v,h,l,y]),M=fe(),{numShow:I,setTriggerElement:k}=ge(Pe[M],f.length),_=o.useMemo(()=>f.slice(0,I),[f,I]),H=f.length!==x?`${f.length}/${x}`:`${x}`,J={numShowing:_.length,total:H,t:i,namespace:"page_teams"},U={sortKeys:[...me],value:l,onChange:s=>a.displayTeam.set({sortType:s}),ascending:y,onChangeAsc:s=>a.displayTeam.set({ascending:s})};return C(N,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(B,{children:C(A,{sx:{display:"flex",flexDirection:"column",gap:1},children:[C(N,{display:"flex",gap:1,alignItems:"stretch",children:[e(Ke,{teamIds:f,charKeys:v,setCharKey:s=>a.displayTeam.set({charKeys:s}),acProps:{sx:{flexGrow:1}}}),e($,{autoFocus:!0,value:K,onChange:s=>r(s.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),e(N,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(ye,{showingTextProps:J,sortByButtonProps:U})})]})}),C(N,{sx:{display:"flex",gap:1},children:[e(E,{fullWidth:!0,onClick:p,color:"info",startIcon:e(ve,{}),children:"Add Team"}),e(ce,{open:m,onClose:S,children:C(B,{children:[e(be,{title:"Import Team"}),e(le,{}),C(A,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(ie,{children:"Import a team in JSON form below."}),e($,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:b,onChange:s=>n(s.target.value),multiline:!0,rows:4}),e(E,{startIcon:e(O,{}),disabled:!b,onClick:t,children:"Import"})]})]})}),e(E,{fullWidth:!0,onClick:T,color:"info",startIcon:e(O,{}),children:"Import Team"})]}),e(o.Suspense,{fallback:e(D,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(j,{container:!0,spacing:1,columns:Oe,children:_.map(s=>e(j,{item:!0,xs:1,children:e(o.Suspense,{fallback:e(D,{variant:"rectangular",width:"100%",height:150}),children:e(Te,{teamId:s,bgt:"light",onClick:w=>g(`${s}${w?`/${w}`:""}`),hoverCard:!0})})},s))})}),f.length!==_.length&&e(D,{ref:s=>{s&&k(s)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Ze as default};
