import{c as O,j as I,u,e as T,p as _,n as c,K as p,c5 as A}from"./index-e3da9f16.js";import{s as h,a as l}from"./index-60db6007.js";import{G as U}from"./ConditionalWrapper-2e7f35e0.js";import{I as d}from"./ColoredText-6398dca5.js";import{L as H,e as E}from"./StarDisplay-a19bbd8f.js";import{s as G}from"./ArtifactStatKeyDisplay-31d20e42.js";import{M as S,D as g}from"./DropdownButton-00458733.js";const M=O(I.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay"),X=!1,k=!0;function w({artSetKey:n,setArtSetKey:s,label:r="",...a}){const{t:o}=u(["artifact","artifactNames_gen"]);r=r||o("artifact:autocompleteLabels.set");const t=T.useMemo(()=>Object.entries(h).flatMap(([e,i])=>i.map(R=>({key:R,label:o(`artifactNames_gen:${R}`),grouper:+e}))).sort(G),[o]),m=T.useCallback(e=>e?_(d,{src:l(e),size:2}):void 0,[]),N=T.useCallback(e=>s(e??""),[s]);return _(U,{options:t,valueKey:n,onChange:N,toImg:m,label:r,groupBy:e=>{var i;return((i=e.grouper)==null?void 0:i.toString())??""},renderGroup:e=>e.group&&c(A,{component:p,children:[c(H,{sx:{top:"-1em"},children:[e.group," ",_(E,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group),...a})}function z({rarity:n,onChange:s,filter:r,...a}){const{t:o}=u("artifact");return _(g,{...a,title:n?_(E,{stars:n,inline:!0}):o`editor.rarity`,color:n?"success":"primary",children:[5,4,3].map(t=>_(S,{disabled:!r(t),onClick:()=>s(t),children:_(E,{stars:t,inline:!0})},t))})}export{w as A,M as R,z as a,X as i,k as s};
