import{b as c,l as p,m as d,p as o,h as r,n as m,q as f}from"./index-18646684.js";import{e as g,a as h,S as y,h as W}from"./StarDisplay-099a2823.js";import{I as x,i as B}from"./ColoredText-ed54264a.js";function k(e=""){const s=c();return g(s.weapons,e)}const T=W([...r]);function v({value:e,totals:s,onChange:l,...i}){const u=p(),n=!d(u.breakpoints.up("sm"));return o(y,{exclusive:!0,value:e,...i,children:r.map(a=>{var t;return m(h,{value:a,sx:{p:n?1:void 0,minWidth:n?0:"6em",display:"flex",gap:n?0:1},onClick:()=>l(T(e,a)),children:[o(x,{src:(t=B.weaponTypes)==null?void 0:t[a],size:2,sideMargin:!0}),o(f,{label:s[a],size:"small"})]},a)})})}function b(e){switch(e){case"sword":return"DullBlade";case"bow":return"HuntersBow";case"claymore":return"WasterGreatsword";case"polearm":return"BeginnersProtector";case"catalyst":return"ApprenticesNotes";default:return"DullBlade"}}const S=(e="sword")=>w(b(e)),w=e=>({id:"",key:e,level:1,ascension:0,refinement:1,location:"",lock:!1});export{v as W,S as a,b as d,w as i,k as u};
