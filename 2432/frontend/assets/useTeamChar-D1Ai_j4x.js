import{a as u,fw as f}from"./index-BXt1OZIR.js";function d(a){const e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(e,(o,t,n,s)=>t+t+n+n+s+s);const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function c(a,e=1){if(a)return`rgba(${a.r},${a.g},${a.b},${e})`}function g(a){const e=u();return f(e.teamChars,a)}export{c,d as h,g as u};
