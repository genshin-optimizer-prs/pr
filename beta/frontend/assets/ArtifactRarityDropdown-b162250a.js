import{c as O,j as I,u as m,e as T,p as _,n as u,K as p,c5 as A}from"./index-f1742cf9.js";import{s as h,a as l}from"./index-d5bdabcd.js";import{G as d}from"./ConditionalWrapper-4c573217.js";import{I as U}from"./ColoredText-3f1ad2da.js";import{L as H,e as E}from"./StarDisplay-5d0ceea1.js";import{s as b}from"./ArtifactStatKeyDisplay-98170ae8.js";import{M as G,D as S}from"./DropdownButton-afbdb42f.js";const M=O(I.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay"),X=!1,k=!0;function w({artSetKey:t,setArtSetKey:s,label:r="",...a}){const{t:o}=m(["artifact","artifactNames_gen"]);r=r||o("artifact:autocompleteLabels.set");const n=T.useMemo(()=>Object.entries(h).flatMap(([e,i])=>i.map(R=>({key:R,label:o(`artifactNames_gen:${R}`),grouper:+e}))).sort(b),[o]),c=T.useCallback(e=>e?_(U,{src:l(e),size:2}):void 0,[]),N=T.useCallback(e=>s(e??""),[s]);return _(d,{options:n,valueKey:t,onChange:N,toImg:c,label:r,groupBy:e=>{var i;return((i=e.grouper)==null?void 0:i.toString())??""},renderGroup:e=>e.group&&u(A,{component:p,children:[u(H,{sx:{top:"-1em"},children:[e.group," ",_(E,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group),...a})}function z({rarity:t,onChange:s,filter:r,...a}){const{t:o}=m("artifact");return _(S,{...a,title:t?_(E,{stars:t,inline:!0}):o`editor.rarity`,color:t?"success":"primary",children:[5,4,3].map(n=>_(G,{disabled:!r(n),onClick:()=>s(n),children:_(E,{stars:n,inline:!0})},n))})}export{w as A,M as R,z as a,X as i,k as s};
