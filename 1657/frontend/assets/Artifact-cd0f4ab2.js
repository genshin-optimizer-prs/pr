import{o as x,$ as E,bR as h,cJ as K,cI as R}from"./index-9aaf5e0d.js";const g=5,p=["hp_","def_","atk_"];function A(e){return p.includes(e)?"%":""}const i=class{constructor(){if(this instanceof i)throw Error("A static class cannot be instantiated.")}static getArtifactEfficiency(e,t){const{substats:n,rarity:a,level:m}=e,r=n.filter(({key:s})=>s&&t.has(s)).reduce((s,{efficiency:b})=>s+(b??0),0),S=R(m,a),c=n.filter(s=>!s.key).length,f=n.filter(s=>s.key&&t.has(s.key)).length,u=t.size-f-(t.has(e.mainStatKey)?1:0);let o=r;const y=i.maxSubstatRollEfficiency[a];return o+=y*Math.min(c,u),(f||c&&u)&&(o+=y*(S-c)),{currentEfficiency:r,maxEfficiency:o}}};let l=i;l.maxSubstatRollEfficiency=x(K,e=>100*Math.max(...E.map(t=>h(t,e)/h(t,g))));l.setToSlots=e=>{const t={};return Object.entries(e).forEach(([n,a])=>{a&&(t[a.setKey]?t[a.setKey].push(n):t[a.setKey]=[n])}),t};l.levelVariant=e=>"roll"+(Math.floor(Math.max(e,0)/4)+1);export{l as A,A as a};
