import{a4 as f,r as a}from"./index-PUEIQ0Lz.js";function i(e=""){const{database:t}=f(),[u,s]=a.useState(t.lightCones.get(e));return a.useEffect(()=>s(t.lightCones.get(e)),[t,e]),a.useEffect(()=>e?t.lightCones.follow(e,(n,o,r)=>(o==="update"||o==="remove")&&s(r)):void 0,[e,s,t]),u}export{i as u};
