import{p as s,dI as f,c as h,j as y,u as d,e as u,n as l,K as I,cb as A}from"./index-4cbbeb39.js";import{s as N,a as R}from"./index-c8a3ce52.js";import{G as b}from"./ConditionalWrapper-3947f335.js";import{I as j}from"./ColoredText-0c02d4f1.js";import{L as S,e as p}from"./StarDisplay-33c18401.js";import{s as k}from"./ArtifactStatKeyDisplay-b28dd44f.js";import{M as B,D}from"./DropdownButton-df2d5eda.js";function w({setKey:e}){return s(f,{ns:"artifactNames_gen",key18:e})}function z({slotKey:e}){return s(f,{ns:"artifact",key18:`slotName.${e}`})}const E=h(y.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");function H({artSetKey:e,setArtSetKey:n,label:a="",...i}){const{t:r}=d(["artifact","artifactNames_gen"]);a=a||r("artifact:autocompleteLabels.set");const o=u.useMemo(()=>Object.entries(N).flatMap(([t,c])=>c.map(m=>({key:m,label:r(`artifactNames_gen:${m}`),grouper:+t}))).sort(k),[r]),g=u.useCallback(t=>t?s(j,{src:R(t),size:2}):void 0,[]),x=u.useCallback(t=>n(t??""),[n]);return s(b,{options:o,valueKey:e,onChange:x,toImg:g,label:a,groupBy:t=>{var c;return((c=t.grouper)==null?void 0:c.toString())??""},renderGroup:t=>t.group&&l(A,{component:I,children:[l(S,{sx:{top:"-1em"},children:[t.group," ",s(p,{stars:+t.group,inline:!0})]},`${t.group}Header`),t.children]},t.group),...i})}function K({rarity:e,onChange:n,filter:a,...i}){const{t:r}=d("artifact");return s(D,{...i,title:e?s(p,{stars:e,inline:!0}):r`editor.rarity`,color:e?"success":"primary",children:[5,4,3].map(o=>s(B,{disabled:!a(o),onClick:()=>n(o),children:s(p,{stars:o,inline:!0})},o))})}export{z as A,E as R,w as a,H as b,K as c};
