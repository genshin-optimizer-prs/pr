(function(){"use strict";function k(e){throw new Error(`Should not reach this with value ${e}`)}function E(e,s){const c=new Set;function o(n){c.has(n)||(s(n,o),c.add(n))}e.forEach(o)}function w(e,s,c,o,n=""){let f=1,t="'use strict';"+n+";const x0=0";const l=new Map;return E(e,(a,b)=>{const i=`x${f++}`;l.set(a,i);const{op:d,x:y,br:S}=a;y.forEach(b),S.forEach(b);const r=y.map($=>l.get($)),h=S.map($=>l.get($));switch(d){case"const":l.set(a,typeof a.ex!="string"?`(${a.ex})`:`('${a.ex}')`);break;case"sum":case"prod":t+=`,${i}=`,r.length?t+=r.join(d=="sum"?"+":"*"):t+=d=="sum"?0:1;break;case"min":case"max":t+=`,${i}=Math.${d}(${r})`;break;case"sumfrac":t+=`,${i}=${r[0]}/(${r[0]} + ${r[1]})`;break;case"match":t+=`,${i}=${h[0]}===${h[1]}?${r[0]}:${r[1]}`;break;case"thres":t+=`,${i}=${h[0]}>=${h[1]}?${r[0]}:${r[1]}`;break;case"subscript":t+=`,${i}=${JSON.stringify(a.ex)}[${h[0]}]`;break;case"read":{const $=a.tag[s];let m=[...new Array(c)].map((T,B)=>`(b[${B}]['${$}'] ?? 0)`);o[$]&&(m=[o[$].toString(),...m]),t+=`,${i}=${m.join("+")}`;break}case"custom":t+=`,${i}=${a.ex}(${r})`;break;case"lookup":t+=`,${i}=([${r}])[(${JSON.stringify(a.ex)})[${h[0]}] ?? 0]`;break;default:k(d)}}),t+=`;return [${e.map(a=>l.get(a))}]`,new Function("b",t)}const p=5e4,x=2e5;let g,u;onmessage=async e=>{try{await M(e)}catch(s){console.log(s),postMessage({resultType:"err",message:JSON.stringify(s)})}};async function M(e){const{data:s}=e,{command:c}=s;switch(c){case"init":N(s);break;case"start":await v();break}}async function N({relicStatsBySlot:e,detachedNodes:s}){g=w(s,"q",6,{}),u=e,postMessage({resultType:"initialized"})}async function v(){let e=[];function s(){const c=e.length;e.length>p&&(e.sort((o,n)=>n.value-o.value),e=e.slice(0,p)),postMessage({resultType:"results",builds:e,numBuildsComputed:c}),e=[]}u.head.forEach(c=>{u.hand.forEach(o=>{u.feet.forEach(n=>{u.body.forEach(f=>{u.sphere.forEach(t=>{u.rope.forEach(l=>{const a=g([c.stats,o.stats,n.stats,f.stats,t.stats,l.stats]);e.push({value:a[0],ids:{head:c.id,hand:o.id,feet:n.id,body:f.id,sphere:t.id,rope:l.id}}),e.length>x&&s()})})})})})}),e.length>0&&s(),postMessage({resultType:"done"})}})();
