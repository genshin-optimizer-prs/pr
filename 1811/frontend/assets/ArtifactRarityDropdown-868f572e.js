import{c as p,j as O,u,e as a,p as _,n as c,K as I,c5 as A}from"./index-273efa33.js";import{s as l,a as d}from"./index-425cb731.js";import{G as h}from"./ConditionalWrapper-68b05701.js";import{I as U}from"./ColoredText-1f8ebbd1.js";import{L as g,e as E}from"./StarDisplay-b641e1c0.js";import{s as H}from"./ArtifactStatKeyDisplay-c62291d9.js";import{M as S,D as G}from"./DropdownButton-d9d1e202.js";const M=p(O.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay"),X=!1,k=!1;function w({artSetKey:o,setArtSetKey:s,label:r="",...T}){const{t}=u(["artifact","artifactNames_gen"]);r=r||t("artifact:autocompleteLabels.set");const n=a.useMemo(()=>Object.entries(l).flatMap(([e,i])=>i.map(R=>({key:R,label:t(`artifactNames_gen:${R}`),grouper:+e}))).sort(H),[t]),m=a.useCallback(e=>e?_(U,{src:d(e),size:2}):void 0,[]),N=a.useCallback(e=>s(e??""),[s]);return _(h,{options:n,valueKey:o,onChange:N,toImg:m,label:r,groupBy:e=>{var i;return((i=e.grouper)==null?void 0:i.toString())??""},renderGroup:e=>e.group&&c(A,{component:I,children:[c(g,{sx:{top:"-1em"},children:[e.group," ",_(E,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group),...T})}function z({rarity:o,onChange:s,filter:r,...T}){const{t}=u("artifact");return _(G,{...T,title:o?_(E,{stars:o,inline:!0}):t`editor.rarity`,color:o?"success":"primary",children:[5,4,3].map(n=>_(S,{disabled:!r(n),onClick:()=>s(n),children:_(E,{stars:n,inline:!0})},n))})}export{w as A,M as R,z as a,X as i,k as s};
