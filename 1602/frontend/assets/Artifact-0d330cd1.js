import{o as K,U as b,bK as h,cE as x,cD as g}from"./index-557acc22.js";const p=5,R=["hp_","def_","atk_"];function A(e){return R.includes(e)?"%":""}const i=class{constructor(){if(this instanceof i)throw Error("A static class cannot be instantiated.")}static getArtifactEfficiency(e,t){const{substats:n,rarity:a,level:m}=e,r=n.filter(({key:s})=>s&&t.has(s)).reduce((s,{efficiency:E})=>s+(E??0),0),S=g(m,a),c=n.filter(s=>!s.key).length,f=n.filter(s=>s.key&&t.has(s.key)).length,u=t.size-f-(t.has(e.mainStatKey)?1:0);let o=r;const y=i.maxSubstatRollEfficiency[a];return o+=y*Math.min(c,u),(f||c&&u)&&(o+=y*(S-c)),{currentEfficiency:r,maxEfficiency:o}}};let l=i;l.maxSubstatRollEfficiency=K(x,e=>100*Math.max(...b.map(t=>h(t,e)/h(t,p))));l.setToSlots=e=>{const t={};return Object.entries(e).forEach(([n,a])=>{a&&(t[a.setKey]?t[a.setKey].push(n):t[a.setKey]=[n])}),t};l.levelVariant=e=>"roll"+(Math.floor(Math.max(e,0)/4)+1);export{l as A,A as a};
