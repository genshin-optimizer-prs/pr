import{a5 as r}from"./index-0ec1fa64.js";function i(o,t){const n=r(o,a=>c(a));return t(n),r(n,a=>u(a))}function b(o,t){const n=c(o);return t(n),u(n)}function c(o){return Object.fromEntries(o.map(t=>[t,{total:0,current:0}]))}function u(o){return r(o,({total:t,current:n})=>n===t?`${t}`:`${n}/${t}`)}export{i as b,b as c};
