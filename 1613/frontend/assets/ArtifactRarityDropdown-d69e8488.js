import{p as s,dE as f,c as h,j as y,u as d,e as u,n as l,K as A,c6 as I}from"./index-b6e92a1b.js";import{s as N,a as R}from"./index-b54c5dfe.js";import{L as b,G as j}from"./LocationAutocomplete-1155e4e8.js";import{I as S}from"./ColoredText-e450d558.js";import{b as p}from"./StarDisplay-296973c9.js";import{s as k}from"./ArtifactStatKeyDisplay-7d318a82.js";import{M as B,D}from"./DropdownButton-79f7f28a.js";function $({setKey:e}){return s(f,{ns:"artifactNames_gen",key18:e})}function w({slotKey:e}){return s(f,{ns:"artifact",key18:`slotName.${e}`})}const z=h(y.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");function H({artSetKey:e,setArtSetKey:n,label:a="",...i}){const{t:r}=d(["artifact","artifactNames_gen"]);a=a||r("artifact:autocompleteLabels.set");const o=u.useMemo(()=>Object.entries(N).flatMap(([t,c])=>c.map(m=>({key:m,label:r(`artifactNames_gen:${m}`),grouper:+t}))).sort(k),[r]),g=u.useCallback(t=>t?s(S,{src:R(t),size:2}):void 0,[]),x=u.useCallback(t=>n(t??""),[n]);return s(j,{options:o,valueKey:e,onChange:x,toImg:g,label:a,groupBy:t=>{var c;return((c=t.grouper)==null?void 0:c.toString())??""},renderGroup:t=>t.group&&l(I,{component:A,children:[l(b,{sx:{top:"-1em"},children:[t.group," ",s(p,{stars:+t.group,inline:!0})]},`${t.group}Header`),t.children]},t.group),...i})}function K({rarity:e,onChange:n,filter:a,...i}){const{t:r}=d("artifact");return s(D,{...i,title:e?s(p,{stars:e,inline:!0}):r`editor.rarity`,color:e?"success":"primary",children:[5,4,3].map(o=>s(B,{disabled:!a(o),onClick:()=>n(o),children:s(p,{stars:o,inline:!0})},o))})}export{w as A,z as R,$ as a,H as b,K as c};
