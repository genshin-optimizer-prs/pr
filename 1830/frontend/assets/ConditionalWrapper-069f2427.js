import{c as x,j as g,r as z,i as A,l as O,p as t,n as k,aH as K,aI as M,e as h,V as L,aK as H,q,u as D,ab as N,b as P,d as F,ar as $,Z as I,b6 as B,K as G,cH as R,aq as V}from"./index-387f28ff.js";import{g as W,B as U}from"./index-8f970e2b.js";import{C as S}from"./ColoredText-9c88e092.js";import{T as b,A as w,C as Z}from"./StarDisplay-23bd64bc.js";import{M as _}from"./DropdownButton-9c7195e8.js";const ce=x(g.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),j=x(g.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite"),le=x(g.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock"),ne=x(g.jsx("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");var T={},E=A;Object.defineProperty(T,"__esModule",{value:!0});var J=T.default=void 0,Q=E(z()),X=g,Y=(0,Q.default)((0,X.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");J=T.default=Y;function ee({options:d,valueKey:i,label:m,onChange:f,toImg:p,toExItemLabel:n,toExLabel:o,textFieldProps:y,...C}){const l=d.find(e=>e.key===i)??null,s=O();return t(w,{autoHighlight:!0,options:d,value:l,onChange:(e,a,c)=>f((a==null?void 0:a.key)??null),isOptionEqualToValue:(e,a)=>e.key===(a==null?void 0:a.key),renderInput:e=>{var r;const a=l==null?void 0:l.color,c=a?(r=s.palette[a])==null?void 0:r.main:void 0,u=l==null?void 0:l.key;return t(b,{...e,...y,label:m,InputProps:{...e.InputProps,startAdornment:u?p(u):void 0},inputProps:{...e.inputProps,autoComplete:"new-password",style:{color:c}},color:i?"success":"primary"})},renderOption:(e,a)=>k(_,{value:a.key,sx:{whiteSpace:"normal"},...e,children:[t(K,{children:p(a.key)}),t(M,{color:a.color,children:t(h.Suspense,{fallback:t(L,{variant:"text",width:100}),children:k(S,{color:a.color,sx:{display:"flex",gap:1},children:[a.key===(l==null?void 0:l.key)?t("strong",{children:a.label}):t("span",{children:a.label}),n==null?void 0:n(a.key)]})})}),!!a.favorite&&t(j,{})]}),filterOptions:(e,{inputValue:a})=>e.filter(c=>{var u;return c.label.toLowerCase().includes(a.toLowerCase())||((u=c.alternateNames)==null?void 0:u.some(r=>r.toLowerCase().includes(a.toLowerCase())))}),...C})}function ie({options:d,valueKeys:i,label:m,onChange:f,toImg:p,toExItemLabel:n,toExLabel:o,chipProps:y,...C}){const l=h.useMemo(()=>i.map(s=>d.find(e=>e.key===s)).filter(s=>s),[d,i]);return t(w,{autoHighlight:!0,options:d,multiple:!0,disableCloseOnSelect:!0,value:l,onChange:(s,e,a)=>a==="clear"?f([]):e!==null&&f(e.map(c=>c.key)),isOptionEqualToValue:(s,e)=>s.key===e.key,renderInput:s=>t(b,{...s,label:m,inputProps:{...s.inputProps,autoComplete:"new-password"},color:i.length?"success":"primary"}),renderOption:(s,e)=>k(_,{value:e.key,...s,children:[t(K,{children:p(e.key)}),t(M,{children:t(h.Suspense,{fallback:t(L,{variant:"text",width:100}),children:k(S,{color:e.color,sx:{display:"flex",gap:1},children:[i.includes(e.key)?t("strong",{children:e.label}):t("span",{children:e.label}),n==null?void 0:n(e.key)]})})}),!!e.favorite&&t(j,{})]}),renderTags:(s,e)=>s.map(({key:a,label:c,color:u},r)=>H(q,{...y,...e({index:r}),key:`${r}${a}${c}`,icon:p(a),label:o?k("span",{children:[c," ",o(a)]}):c,color:u})),filterOptions:(s,{inputValue:e})=>s.filter(a=>{var c;return a.label.toLowerCase().includes(e.toLowerCase())||((c=a.alternateNames)==null?void 0:c.some(u=>u.toLowerCase().includes(e.toLowerCase())))}),...C})}function ue({location:d,setLocation:i,filter:m=()=>!0,autoCompleteProps:f={}}){const{t:p}=D(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:n}=h.useContext(N),o=P(),{gender:y}=F(),C=h.useCallback(r=>v=>p(`${r?"sillyWisher_charNames":"charNames_gen"}:${$(o.chars.LocationToCharacterKey(v),y)}`),[o,y,p]),[l,s]=I();h.useEffect(()=>o.arts.followAny(()=>s()),[o,s]);const e=h.useMemo(()=>l&&o.chars.keys.map(r=>B(r)),[l,o]),a=h.useCallback(r=>r===""?t(U,{}):t(G,{sx:{opacity:e.includes(r)?void 0:.7},children:t(Z,{characterKey:o.chars.LocationToCharacterKey(r)})}),[o,e]),c=h.useCallback(r=>r==="Traveler"?R.some(v=>o.charMeta.get(v).favorite):r?o.charMeta.get(r).favorite:!1,[o]),u=h.useMemo(()=>[{key:"",label:p`artifact:filterLocation.inventory`},...Array.from(new Set(V.filter(r=>m(W(o.chars.LocationToCharacterKey(r),y))))).map(r=>({key:r,label:C(n)(r),favorite:c(r),alternateNames:n?[C(!n)(r)]:void 0,color:e.includes(r)?void 0:"secondary"})).sort((r,v)=>r.favorite&&!v.favorite?-1:!r.favorite&&v.favorite?1:!r.color&&v.color?-1:r.color&&!v.color?1:r.label.localeCompare(v.label))],[p,o.chars,y,e,m,C,n,c]);return t(h.Suspense,{fallback:t(L,{variant:"text",width:100}),children:t(ee,{size:"small",options:u,valueKey:d,onChange:r=>i(r??""),toImg:a,...f})})}function he({condition:d,wrapper:i,falseWrapper:m,children:f}){return d?i(f):m?m(f):f}export{ce as A,he as C,j as F,ee as G,le as L,ne as a,ue as b,ie as c,J as d};
