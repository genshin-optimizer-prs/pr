import{a8 as m,a9 as o,r as u}from"./index-uiK8dO2X.js";import{u as S}from"./useForceUpdate-BHrJL8zp.js";function h(){const e=m(),t=o(e.breakpoints.up("sm")),s=o(e.breakpoints.up("md")),r=o(e.breakpoints.up("lg"));return o(e.breakpoints.up("xl"))?"xl":r?"lg":s?"md":t?"sm":"xs"}function g(e){const[t,s]=u.useState(!1),r=u.useRef(null);return!r.current&&typeof window<"u"&&(r.current=new IntersectionObserver(([n])=>s(n.isIntersecting))),u.useEffect(()=>{if(s(!1),!!r.current&&e)return r.current.observe(e),()=>{var n;(n=r.current)==null||n.disconnect()}},[e]),t}function w(e,t){const[s,r]=u.useState(e),[n,a]=u.useState(),l=g(n),[c,i]=S(),f=l&&s<t;return u.useEffect(()=>{t&&r(e)},[t,e]),u.useEffect(()=>{if(!f)return;c&&r(d=>d+e);const p=setTimeout(()=>i(),1e3);return()=>clearTimeout(p)},[c,f,e,i]),{numShow:s,setTriggerElement:a}}export{w as a,h as u};
