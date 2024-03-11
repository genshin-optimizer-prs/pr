import{c as x,j as g,r as A,i as z,l as O,p as s,n as k,aH as T,aI as M,e as u,U as L,aK as H,q as D,u as N,a9 as P,b as q,d as $,ap as F,X as I,b5 as B,K as G,cK as R,ao as V}from"./index-7c61c78b.js";import{g as U,B as W}from"./index-db083d15.js";import{C as S}from"./ColoredText-b84e9fa6.js";import{T as w,F as _,A as b,C as X}from"./StarDisplay-d775841f.js";import{M as j}from"./DropdownButton-38f14c63.js";const ce=x(g.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),le=x(g.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock"),ne=x(g.jsx("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");var K={},E=z;Object.defineProperty(K,"__esModule",{value:!0});var J=K.default=void 0,Q=E(A()),Y=g,Z=(0,Q.default)((0,Y.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");J=K.default=Z;function ee({options:p,valueKey:d,label:v,onChange:C,toImg:h,toExItemLabel:n,toExLabel:o,textFieldProps:y,...m}){const l=p.find(e=>e.key===d)??null,t=O();return s(b,{autoHighlight:!0,options:p,value:l,onChange:(e,a,c)=>C((a==null?void 0:a.key)??null),isOptionEqualToValue:(e,a)=>e.key===(a==null?void 0:a.key),renderInput:e=>{var r;const a=l==null?void 0:l.color,c=a?(r=t.palette[a])==null?void 0:r.main:void 0,i=l==null?void 0:l.key;return s(w,{...e,...y,label:v,InputProps:{...e.InputProps,startAdornment:i?h(i):void 0},inputProps:{...e.inputProps,autoComplete:"new-password",style:{color:c}},color:d?"success":"primary"})},renderOption:(e,a)=>k(j,{value:a.key,sx:{whiteSpace:"normal"},...e,children:[s(T,{children:h(a.key)}),s(M,{color:a.color,children:s(u.Suspense,{fallback:s(L,{variant:"text",width:100}),children:k(S,{color:a.color,sx:{display:"flex",gap:1},children:[a.key===(l==null?void 0:l.key)?s("strong",{children:a.label}):s("span",{children:a.label}),n==null?void 0:n(a.key)]})})}),!!a.favorite&&s(_,{})]}),filterOptions:(e,{inputValue:a})=>e.filter(c=>{var i;return c.label.toLowerCase().includes(a.toLowerCase())||((i=c.alternateNames)==null?void 0:i.some(r=>r.toLowerCase().includes(a.toLowerCase())))}),...m})}function ie({options:p,valueKeys:d,label:v,onChange:C,toImg:h,toExItemLabel:n,toExLabel:o,chipProps:y,...m}){const l=u.useMemo(()=>d.map(t=>p.find(e=>e.key===t)).filter(t=>t),[p,d]);return s(b,{autoHighlight:!0,options:p,multiple:!0,disableCloseOnSelect:!0,value:l,onChange:(t,e,a)=>a==="clear"?C([]):e!==null&&C(e.map(c=>c.key)),isOptionEqualToValue:(t,e)=>t.key===e.key,renderInput:t=>s(w,{...t,label:v,inputProps:{...t.inputProps,autoComplete:"new-password"},color:d.length?"success":"primary"}),renderOption:(t,e)=>k(j,{value:e.key,...t,children:[s(T,{children:h(e.key)}),s(M,{children:s(u.Suspense,{fallback:s(L,{variant:"text",width:100}),children:k(S,{color:e.color,sx:{display:"flex",gap:1},children:[d.includes(e.key)?s("strong",{children:e.label}):s("span",{children:e.label}),n==null?void 0:n(e.key)]})})}),!!e.favorite&&s(_,{})]}),renderTags:(t,e)=>t.map(({key:a,label:c,color:i},r)=>H(D,{...y,...e({index:r}),key:`${r}${a}${c}`,icon:h(a),label:o?k("span",{children:[c," ",o(a)]}):c,color:i})),filterOptions:(t,{inputValue:e})=>t.filter(a=>{var c;return a.label.toLowerCase().includes(e.toLowerCase())||((c=a.alternateNames)==null?void 0:c.some(i=>i.toLowerCase().includes(e.toLowerCase())))}),...m})}function ue({location:p,setLocation:d,filter:v=()=>!0,autoCompleteProps:C={}}){const{t:h}=N(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:n}=u.useContext(P),o=q(),{gender:y}=$(),m=u.useCallback(r=>f=>h(`${r?"sillyWisher_charNames":"charNames_gen"}:${F(o.chars.LocationToCharacterKey(f),y)}`),[o,y,h]),[l,t]=I();u.useEffect(()=>o.arts.followAny(()=>t()),[o,t]);const e=u.useMemo(()=>l&&o.chars.keys.map(r=>B(r)),[l,o]),a=u.useCallback(r=>r===""?s(W,{}):s(G,{sx:{opacity:e.includes(r)?void 0:.7},children:s(X,{characterKey:o.chars.LocationToCharacterKey(r)})}),[o,e]),c=u.useCallback(r=>r==="Traveler"?R.some(f=>o.charMeta.get(f).favorite):r?o.charMeta.get(r).favorite:!1,[o]),i=u.useMemo(()=>[{key:"",label:h`artifact:filterLocation.inventory`},...Array.from(new Set(V.filter(r=>v(U(o.chars.LocationToCharacterKey(r),y))))).map(r=>({key:r,label:m(n)(r),favorite:c(r),alternateNames:n?[m(!n)(r)]:void 0,color:e.includes(r)?void 0:"secondary"})).sort((r,f)=>r.favorite&&!f.favorite?-1:!r.favorite&&f.favorite?1:!r.color&&f.color?-1:r.color&&!f.color?1:r.label.localeCompare(f.label))],[h,o.chars,y,e,v,m,n,c]);return s(u.Suspense,{fallback:s(L,{variant:"text",width:100}),children:s(ee,{size:"small",options:i,valueKey:p,onChange:r=>d(r??""),toImg:a,...C})})}export{ce as A,ee as G,le as L,ne as a,ue as b,ie as c,J as d};
