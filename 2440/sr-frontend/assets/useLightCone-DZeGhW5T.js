import{N as f,r as o}from"./index-FKHgvLHV.js";function i(e=""){const{database:t}=f(),[u,s]=o.useState(t.lightCones.get(e));return o.useEffect(()=>s(t.lightCones.get(e)),[t,e]),o.useEffect(()=>e?t.lightCones.follow(e,(n,a,r)=>(a==="update"||a==="remove")&&s(r)):void 0,[e,s,t]),u}export{i as u};
