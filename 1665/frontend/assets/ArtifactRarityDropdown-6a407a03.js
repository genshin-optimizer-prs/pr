import{p as a,dH as f,c as h,j as y,u as d,e as u,n as l,K as A,ca as I}from"./index-cabab129.js";import{s as N,a as R}from"./index-581d9b51.js";import{G as j}from"./ConditionalWrapper-e4469ca9.js";import{I as S}from"./ColoredText-a59466a7.js";import{L as b,e as p}from"./StarDisplay-57b3c493.js";import{s as k}from"./ArtifactStatKeyDisplay-2c174411.js";import{M as B,D}from"./DropdownButton-2b636683.js";function $({setKey:e}){return a(f,{ns:"artifactNames_gen",key18:e})}function w({slotKey:e}){return a(f,{ns:"artifact",key18:`slotName.${e}`})}const z=h(y.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");function E({artSetKey:e,setArtSetKey:n,label:s="",...i}){const{t:r}=d(["artifact","artifactNames_gen"]);s=s||r("artifact:autocompleteLabels.set");const o=u.useMemo(()=>Object.entries(N).flatMap(([t,c])=>c.map(m=>({key:m,label:r(`artifactNames_gen:${m}`),grouper:+t}))).sort(k),[r]),g=u.useCallback(t=>t?a(S,{src:R(t),size:2}):void 0,[]),x=u.useCallback(t=>n(t??""),[n]);return a(j,{options:o,valueKey:e,onChange:x,toImg:g,label:s,groupBy:t=>{var c;return((c=t.grouper)==null?void 0:c.toString())??""},renderGroup:t=>t.group&&l(I,{component:A,children:[l(b,{sx:{top:"-1em"},children:[t.group," ",a(p,{stars:+t.group,inline:!0})]},`${t.group}Header`),t.children]},t.group),...i})}function K({rarity:e,onChange:n,filter:s,...i}){const{t:r}=d("artifact");return a(D,{...i,title:e?a(p,{stars:e,inline:!0}):r`editor.rarity`,color:e?"success":"primary",children:[5,4,3].map(o=>a(B,{disabled:!s(o),onClick:()=>n(o),children:a(p,{stars:o,inline:!0})},o))})}export{w as A,z as R,$ as a,E as b,K as c};
