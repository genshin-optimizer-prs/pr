import{b as k,e as m,H as n,a7 as y,n as r,J as o,p as t,T as p,D as I,a9 as M,B as a,C as w,t as E,a8 as B}from"./index-c1d8b6a0.js";import{I as T,i as b,B as N}from"./ColoredText-faeb4d49.js";const u=8*B;function _(){const d=k(),[{resin:e,resinDate:l},S]=m.useState(()=>d.displayTool.get());m.useEffect(()=>d.displayTool.follow((s,g)=>S(g)),[d]);const c=m.useRef(void 0),i=s=>{s>=n?(c.current&&clearTimeout(c.current),c.current=void 0):c.current=setTimeout(()=>console.log("set resin",s+1),u),d.displayTool.set({resin:s,resinDate:new Date().getTime()})};m.useEffect(()=>{if(e<n){const s=Date.now(),g=n-e,x=Math.min(Math.floor((s-l)/u),g),f=e+x,C=l+x*u;d.displayTool.set({resin:f,resinDate:C}),f<n&&(c.current=setTimeout(()=>i(f+1),s-C))}return()=>c.current&&clearTimeout(c.current)},[]);const v=e>=n?l:l+u,R=e>=n?l:l+(n-e)*u,h=new Date(R),D=y(Math.abs(v-Date.now()));return r(E,{children:[r(o,{container:!0,sx:{px:2,py:1},spacing:2,children:[t(o,{item:!0,children:t(T,{src:b.resin.fragile,size:2})}),t(o,{item:!0,children:t(p,{variant:"h6",children:"Resin Counter"})})]}),t(I,{}),t(w,{children:r(o,{container:!0,spacing:2,children:[t(o,{item:!0,children:r(p,{variant:"h2",children:[t(T,{src:b.resin.fragile}),t(M,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:e,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:s=>i(parseInt(s.target.value))}),r("span",{children:["/",n]})]})}),r(o,{item:!0,flexGrow:1,children:[r(N,{fullWidth:!0,children:[t(a,{onClick:()=>i(0),disabled:e===0,children:"0"}),t(a,{onClick:()=>i(e-1),disabled:e===0,children:"-1"}),t(a,{onClick:()=>i(e-20),disabled:e<20,children:"-20"}),t(a,{onClick:()=>i(e-40),disabled:e<40,children:"-40"}),t(a,{onClick:()=>i(e-60),disabled:e<60,children:"-60"}),t(a,{onClick:()=>i(e+1),children:"+1"}),t(a,{onClick:()=>i(e+60),children:"+60"}),r(a,{onClick:()=>i(n),disabled:e===n,children:["MAX ",n]})]}),t(p,{variant:"subtitle1",sx:{mt:2},children:e<n?r("span",{children:["Next resin in ",D,", full Resin at"," ",h.toLocaleTimeString()," ",h.toLocaleDateString()]}):r("span",{children:["Resin has been full for at least ",D,", since"," ",h.toLocaleTimeString()," ",h.toLocaleDateString()]})})]}),t(o,{item:!0,xs:12,children:t(p,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}export{u as R,_ as a};
