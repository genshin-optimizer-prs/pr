"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[138],{61162:(e,t,n)=>{var i=n(14859);t.Z=void 0;var l=i(n(68671)),r=n(52322),c=(0,l.default)((0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled");t.Z=c},41138:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var i=n(67550),l=n(2784),r=n(61877),c=n(42745),s=n(72539),Z=n(29798),o=n(52322);const d=(0,Z.Z)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");var a=n(41075),h=n(62197),x=n(80551),u=n(83249),m=n(56961),p=n(7671),f=n(107),b=n(24264),g=n(87833),y=n(86569),v=n(89977),C=n(1148),X=n(79410),B=n(13900),w=n(52903);const P={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:s.CL.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:s.CL.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:s.CL.exp_books.wit}},k=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],j=[20,40,50,60,70,80,90];function M(){const[e,t]=(0,l.useState)((()=>({mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}))),{mora:n,level:r,curExp:s,goUnder:Z,books:o,books:{advice:C,experience:M,wit:D}}=e,E=j.find((e=>e>r));let L=-s;for(let i=r;i<Math.min(E,k.length);i++)L+=k[i];const O=function(e,t,n,i,l){let r=l?Math.floor(i/1e3):Math.ceil(i/1e3);const c=Math.min(Math.floor(r/20),e);r-=20*c;const s=Math.min(Math.floor(r/5),t);r-=5*s;const Z=Math.min(r,n);if(r-=Z,l||0===r)return[c,s,Z];if(3===s&&c!==e)return[c+1,0,0];if(s!==t)return[c,s+1,0];if(c!==e)return[c+1,0,0];return null}(D,M,C,L,Z)||[],[U=0,G=0,S=0]=O,A={advice:S,experience:G,wit:U},W=2e4*U+5e3*G+1e3*S,z=W/5,F=L-W,q=n-z;let I=W+s,K=r;for(;K<Math.min(E,k.length)&&k[K]<=I;K++)I-=k[K];K===E&&(I=0);let H="";return q<0?H=(0,w.BX)("span",{children:["You don't have enough ",(0,w.tZ)("b",{children:"Mora"})," for this operation."]}):0===O.length?H=(0,w.BX)("span",{children:["You don't have enough ",(0,w.tZ)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===r&&(H="You are at the maximum level."),(0,w.BX)(b.Z,{children:[(0,w.BX)(a.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,w.tZ)(a.ZP,{item:!0,children:(0,w.tZ)(X.Z,{src:P.wit.img,size:2})}),(0,w.tZ)(a.ZP,{item:!0,flexGrow:1,children:(0,w.tZ)(h.Z,{variant:"h6",children:"Experience Calculator"})}),(0,w.tZ)(a.ZP,{item:!0,children:(0,w.BX)(x.Z,{children:[(0,w.tZ)(u.Z,{color:"primary",disabled:!Z,onClick:()=>t(Object.assign({},e,{goUnder:!1})),children:"Full Level"}),(0,w.tZ)(u.Z,{color:"primary",disabled:Z,onClick:()=>t(Object.assign({},e,{goUnder:!0})),children:"Don't fully level"})]})})]}),(0,w.tZ)(m.Z,{}),(0,w.tZ)(p.Z,{children:(0,w.BX)(a.ZP,{container:!0,spacing:1,children:[(0,w.tZ)(a.ZP,{item:!0,children:(0,w.BX)(h.Z,{children:[(0,w.BX)("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]}),Z?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),(0,w.tZ)(a.ZP,{item:!0,xs:6,md:3,children:(0,w.BX)(x.Z,{sx:{display:"flex"},children:[(0,w.tZ)(B.Z,{children:"Current Level"}),(0,w.tZ)(v.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(v.ZP,{value:r,onChange:n=>t(Object.assign({},e,{level:(0,c.re)(null!=n?n:0,0,90)})),sx:{px:2}})})]})}),(0,w.tZ)(a.ZP,{item:!0,xs:6,md:3,children:(0,w.BX)(x.Z,{sx:{display:"flex"},children:[(0,w.tZ)(B.Z,{children:"Current EXP."}),(0,w.tZ)(v.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(v.ZP,{value:s,onChange:n=>t(Object.assign({},e,{curExp:(0,c.re)(null!=n?n:0,0,(k[r]||1)-1)})),endAdornment:`/${k[r]||0}`,sx:{px:2}})})]})}),(0,w.tZ)(a.ZP,{item:!0,xs:6,md:3,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(h.Z,{children:"Next Milestone Level:"}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:E})})]})})}),(0,w.tZ)(a.ZP,{item:!0,xs:6,md:3,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(h.Z,{children:"EXP. to milestone:"}),(0,w.tZ)(h.Z,{children:(0,w.BX)("span",{children:[(0,w.tZ)("strong",{children:W})," / ",(0,w.tZ)("strong",{children:L})]})})]})})}),Object.entries(o).map((([n])=>(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(T,{bookKey:n,value:o[n],setValue:i=>t(Object.assign({},e,{books:Object.assign({},o,{[n]:i})})),required:A[n]})},n))),(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.BX)(x.Z,{sx:{display:"flex"},children:[(0,w.tZ)(B.Z,{children:"Current Mora"}),(0,w.tZ)(v.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(v.ZP,{value:n,onChange:n=>t(Object.assign({},e,{mora:Math.max(null!=n?n:0,0)})),sx:{px:2}})})]})}),(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(h.Z,{children:"Mora Cost: "}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:z})})]})})}),(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.BX)(h.Z,{children:["EXP ",Z?"Diff":"Waste",": "]}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(y.Z,{color:F<0?"error":"success",children:F})})})]})})}),(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(h.Z,{children:"Final Mora: "}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(y.Z,{color:q<0?"error":"success",children:q})})})]})})}),(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(h.Z,{children:"Final Level: "}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(y.Z,{color:"success",children:K})})})]})})}),(0,w.tZ)(a.ZP,{item:!0,xs:12,md:4,children:(0,w.tZ)(g.Z,{children:(0,w.BX)(i.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,w.tZ)(h.Z,{children:"Final EXP: "}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(y.Z,{color:I<0?"error":"success",children:I})})})]})})})]})}),(0,w.tZ)(m.Z,{}),(0,w.tZ)(p.Z,{sx:{py:1},children:(0,w.BX)(a.ZP,{container:!0,spacing:2,children:[(0,w.tZ)(a.ZP,{item:!0,flexGrow:1,children:!!H&&(0,w.tZ)(f.Z,{variant:"filled",severity:"error",children:H})}),(0,w.tZ)(a.ZP,{item:!0,xs:"auto",children:(0,w.tZ)(u.Z,{disabled:!!H,onClick:()=>t(Object.assign({},e,{level:K,curExp:I,books:(0,c.vU)(A,((e,t)=>o[t]-e)),mora:q})),color:"success",startIcon:(0,w.tZ)(d,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function T(e){const{bookKey:t,value:n=0,setValue:l,required:r=0}=e;return(0,w.BX)(g.Z,{children:[(0,w.tZ)(p.Z,{sx:{py:1},children:(0,w.tZ)(h.Z,{children:P[t].name})}),(0,w.tZ)(m.Z,{}),(0,w.tZ)(p.Z,{children:(0,w.BX)(a.ZP,{container:!0,children:[(0,w.tZ)(a.ZP,{item:!0,xs:3,children:(0,w.tZ)(C.Z,{src:P[t].img})}),(0,w.BX)(a.ZP,{item:!0,xs:9,children:[(0,w.BX)(x.Z,{sx:{display:"flex"},children:[(0,w.tZ)(B.Z,{children:"Amount"}),(0,w.tZ)(v.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,w.tZ)(v.ZP,{value:n,onChange:e=>l(Math.max(null!=e?e:0,0)),sx:{px:2}})})]}),(0,w.BX)(i.Z,{display:"flex",justifyContent:"space-between",mt:1,children:[(0,w.tZ)(h.Z,{children:"Required:"}),(0,w.tZ)(h.Z,{children:(0,w.tZ)("b",{children:(0,w.tZ)(y.Z,{color:r?"success":"",children:r})})})]})]})]})})]})}var D=n(86503),E=n(61162),L=n(94380),O=n(23485),U=n(41589),G=n(34156);function S(){const{database:e}=(0,l.useContext)(G.t),[{timeZoneKey:t},n]=(0,l.useState)((()=>e.displayTool.get()));(0,l.useEffect)((()=>e.displayTool.follow(((e,t)=>n(t)))),[e]);const i=(0,l.useCallback)((t=>e.displayTool.set({timeZoneKey:t})),[e]),[r,s]=(0,l.useState)(new Date(Date.now()+U.W3[t]));(0,l.useEffect)((()=>{const e=()=>(s(new Date(Date.now()+U.W3[t])),setTimeout((()=>{n=e()}),c.vL-Date.now()%c.vL));let n=e();return()=>clearTimeout(n)}),[t]);let Z=new Date(r);Z.getUTCHours()<4||(Z=new Date(Z.getTime()+c.mf)),Z.setUTCHours(4,0,0,0);const o=Z.getTime()-r.getTime(),d=(0,c.JR)(o);return(0,w.BX)(b.Z,{children:[(0,w.BX)(p.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,w.tZ)(E.Z,{}),(0,w.tZ)(h.Z,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"}),(0,w.tZ)(O.Z,{title:t,children:Object.keys(U.W3).map((e=>(0,w.tZ)(L.Z,{selected:t===e,disabled:t===e,onClick:()=>i(e),children:e},e)))})]}),(0,w.tZ)(m.Z,{}),(0,w.tZ)(p.Z,{children:(0,w.BX)(a.ZP,{container:!0,justifyContent:"center",spacing:3,children:[(0,w.tZ)(a.ZP,{item:!0,sx:{my:4},children:(0,w.tZ)(h.Z,{variant:"h2",children:r.toLocaleTimeString([],{timeZone:"UTC"})})}),(0,w.BX)(a.ZP,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[(0,w.BX)(h.Z,{children:["Server Date: ",(0,w.tZ)("b",{children:r.toDateString()})]}),(0,w.BX)(h.Z,{children:["Time until reset: ",(0,w.tZ)("b",{children:d})]}),(0,w.BX)(h.Z,{children:["Resin until reset:"," ",(0,w.tZ)("b",{children:Math.floor(o/(8*c.g4))})]})]})]})})]})}function A(){return r.ZP.send({hitType:"pageview",page:"/tools"}),(0,w.BX)(i.Z,{display:"flex",flexDirection:"column",gap:1,my:1,children:[(0,w.tZ)(S,{}),(0,w.tZ)(D.Z,{}),(0,w.tZ)(M,{})]})}}}]);