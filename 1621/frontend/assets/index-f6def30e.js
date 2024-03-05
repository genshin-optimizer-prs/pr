import{r as w,i as b,j as E,b as j,X as B,aE as k,e as o,Q as _,aH as J,n as s,p as t,K as d,U as O,J as x,B as m,aA as A,D as H,C as M,T as N,aI as U,aJ as $}from"./index-fcf9d608.js";import{s as P,S as R,T as W}from"./StarDisplay-68e3ec29.js";import{T as q,d as F}from"./TeamCard-0921dfb3.js";import{C as K}from"./CardHeader-6e276026.js";import"./DropdownButton-a7401f5a.js";import"./ColoredText-4080df04.js";import"./index-e7f2de8b.js";import"./SqBadge-f412de40.js";import"./BootstrapTooltip-8709f90d.js";import"./FieldDisplay-e4fcdbd9.js";import"./Groups-8769556d.js";import"./index-0d097881.js";import"./index-c652db91.js";import"./Artifact-3e196f96.js";import"./SlotIcon-5f1f720b.js";import"./useWeapon-295b9b0c.js";import"./CardActionArea-0f6104c2.js";var c={},z=b;Object.defineProperty(c,"__esModule",{value:!0});var p=c.default=void 0,G=z(w()),Q=E,X=(0,G.default)((0,Q.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");p=c.default=X;function L(){return{name:a=>a.name??"",lastEdit:a=>a.lastEdit??0}}const V={name:["name","lastEdit"],lastEdit:["lastEdit"]},Y={xs:1,sm:2,md:3,lg:4,xl:4};function ge(){const a=j(),[u,f]=B(),h=k();o.useEffect(()=>a.teams.followAny((e,r)=>(r==="new"||r==="remove"||r==="update")&&f()),[f,a]);const y=()=>{const e=a.teams.new();h(e)},[v,C,g]=_(),[n,I]=o.useState(""),T=()=>{try{const e=JSON.parse(n);a.teams.import(e)||window.alert("Data verification failed."),g()}catch(e){window.alert(`Data Import failed. ${e}`);return}},{sortType:i,ascending:l}=J(a.displayTeam),S=o.useMemo(()=>u&&a.teams.keys.sort((e,r)=>P(V[i],l,L())(a.teams.get(e),a.teams.get(r))),[u,a.teams,i,l]),D={sortKeys:[...$],value:i,onChange:e=>a.displayTeam.set({sortType:e}),ascending:l,onChangeAsc:e=>a.displayTeam.set({ascending:e})};return s(d,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(d,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:t(R,{...D})}),s(d,{sx:{display:"flex",gap:1},children:[t(m,{fullWidth:!0,onClick:y,color:"info",startIcon:t(F,{}),children:"Add Team"}),t(U,{open:v,onClose:g,children:s(A,{children:[t(K,{title:"Import Team"}),t(H,{}),s(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t(N,{children:"Import a team in JSON form below."}),t(W,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:n,onChange:e=>I(e.target.value),multiline:!0,rows:4}),t(m,{startIcon:t(p,{}),disabled:!n,onClick:T,children:"Import"})]})]})}),t(m,{fullWidth:!0,onClick:C,color:"info",startIcon:t(p,{}),children:"Import Team"})]}),t(o.Suspense,{fallback:t(O,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(x,{container:!0,spacing:1,columns:Y,children:S.map(e=>t(x,{item:!0,xs:1,children:t(q,{teamId:e,bgt:"light",onClick:r=>h(`${e}${r?`/${r}`:""}`)})},e))})})]})}export{ge as default};
