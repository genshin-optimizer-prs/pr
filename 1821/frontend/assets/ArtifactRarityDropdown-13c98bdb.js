import{c as I,j as p,u as c,e as T,p as _,n as u,K as O,c5 as d}from"./index-bf826dbc.js";import{s as A,a as l}from"./index-24d0b088.js";import{G as h}from"./ConditionalWrapper-a49607f3.js";import{I as U}from"./ColoredText-c01d8682.js";import{L as H,e as E}from"./StarDisplay-039aac45.js";import{s as b}from"./ArtifactStatKeyDisplay-71cd60be.js";import{M as G,D as S}from"./DropdownButton-77201243.js";const M=I(p.jsx("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay"),X=!1,k=!1;function w({artSetKey:n,setArtSetKey:s,label:r="",...a}){const{t}=c(["artifact","artifactNames_gen"]);r=r||t("artifact:autocompleteLabels.set");const o=T.useMemo(()=>Object.entries(A).flatMap(([e,i])=>i.map(R=>({key:R,label:t(`artifactNames_gen:${R}`),grouper:+e}))).sort(b),[t]),m=T.useCallback(e=>e?_(U,{src:l(e),size:2}):void 0,[]),N=T.useCallback(e=>s(e??""),[s]);return _(h,{options:o,valueKey:n,onChange:N,toImg:m,label:r,groupBy:e=>{var i;return((i=e.grouper)==null?void 0:i.toString())??""},renderGroup:e=>e.group&&u(d,{component:O,children:[u(H,{sx:{top:"-1em"},children:[e.group," ",_(E,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group),...a})}function v({rarity:n,onChange:s,filter:r,...a}){const{t}=c("artifact");return _(S,{...a,title:n?_(E,{stars:n,inline:!0}):t`editor.rarity`,color:n?"success":"primary",children:[5,4,3].map(o=>_(G,{disabled:!r(o),onClick:()=>s(o),children:_(E,{stars:o,inline:!0})},o))})}export{w as A,M as R,v as a,X as i,k as s};
