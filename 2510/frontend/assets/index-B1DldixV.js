import{w as ee,x as te,j as ne,r as v,e as t,G as i,d as e,V as W,T as l,aK as I,ac as D,M as L,aL as U,aM as P,aN as X,aO as z,i as b,h as C,aP as A,N as S,ar as ie,aQ as re,W as N,at as le,a as Q,a5 as p,aR as J,aS as se,a4 as F,aT as ae,aU as ce,aV as oe,aW as de,a6 as $,a8 as he}from"./index-Bt824e75.js";import{R as j,d as ue}from"./AccessTimeFilled-Dmxdfsg1.js";var H={},me=te;Object.defineProperty(H,"__esModule",{value:!0});var K=H.default=void 0,pe=me(ee()),xe=ne,fe=(0,pe.default)((0,xe.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");K=H.default=fe;const q={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:N.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:N.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:N.exp_books.wit}},M=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],ge=[20,40,50,60,70,80,90];function be(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function ve(){const[s,n]=v.useState(()=>be()),{mora:m,level:h,curExp:c,goUnder:a,books:o,books:{advice:x,experience:f,wit:u}}=s,g=ge.find(d=>d>h);let r=-c;for(let d=h;d<Math.min(g,M.length);d++)r+=M[d];const T=Ce(u,f,x,r,a)||[],[y=0,E=0,_=0]=T,V={advice:_,experience:E,wit:y},B=y*2e4+E*5e3+_*1e3,Z=B/5,Y=r-B,G=m-Z;let R=B+c,w=h;for(;w<Math.min(g,M.length)&&M[w]<=R;w++)R-=M[w];w===g&&(R=0);let k="";return G<0?k=t("span",{children:["You don't have enough ",e("b",{children:"Mora"})," for this operation."]}):T.length===0?k=t("span",{children:["You don't have enough ",e("b",{children:"EXP. books"})," to level to the next milestone."]}):h===90&&(k="You are at the maximum level."),t(b,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(W,{src:q.wit.img,size:2})}),e(i,{item:!0,flexGrow:1,children:e(l,{variant:"h6",children:"Experience Calculator"})}),e(i,{item:!0,children:t(I,{children:[e(D,{color:"primary",disabled:!a,onClick:()=>n({...s,goUnder:!1}),children:"Full Level"}),e(D,{color:"primary",disabled:a,onClick:()=>n({...s,goUnder:!0}),children:"Don't fully level"})]})})]}),e(L,{}),e(S,{children:t(i,{container:!0,spacing:1,children:[e(i,{item:!0,children:t(l,{children:[t("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]}),a?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),e(i,{item:!0,xs:6,md:3,children:t(I,{sx:{display:"flex"},children:[e(U,{children:"Current Level"}),e(P,{sx:{flexBasis:30,flexGrow:1},children:e(X,{value:h,onChange:d=>n({...s,level:z(d??0,0,90)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:t(I,{sx:{display:"flex"},children:[e(U,{children:"Current EXP."}),e(P,{sx:{flexBasis:30,flexGrow:1},children:e(X,{value:c,onChange:d=>n({...s,curExp:z(d??0,0,(M[h]||1)-1)}),endAdornment:`/${M[h]||0}`,sx:{px:2}})})]})}),e(i,{item:!0,xs:6,md:3,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Next Milestone Level:"}),e(l,{children:e("b",{children:g})})]})})}),e(i,{item:!0,xs:6,md:3,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"EXP. to milestone:"}),e(l,{children:t("span",{children:[e("strong",{children:B})," / ",e("strong",{children:r})]})})]})})}),Object.entries(o).map(([d])=>e(i,{item:!0,xs:12,md:4,children:e(ye,{bookKey:d,value:o[d],setValue:O=>n({...s,books:{...o,[d]:O}}),required:V[d]})},d)),e(i,{item:!0,xs:12,md:4,children:t(I,{sx:{display:"flex"},children:[e(U,{children:"Current Mora"}),e(P,{sx:{flexBasis:30,flexGrow:1},children:e(X,{value:m,onChange:d=>n({...s,mora:Math.max(d??0,0)}),sx:{px:2}})})]})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Mora Cost: "}),e(l,{children:e("b",{children:Z})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[t(l,{children:["EXP ",a?"Diff":"Waste",": "]}),e(l,{children:e("b",{children:e(A,{color:Y<0?"error":"success",children:Y})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final Mora: "}),e(l,{children:e("b",{children:e(A,{color:G<0?"error":"success",children:G})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final Level: "}),e(l,{children:e("b",{children:e(A,{color:"success",children:w})})})]})})}),e(i,{item:!0,xs:12,md:4,children:e(b,{bgt:"light",children:t(C,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(l,{children:"Final EXP: "}),e(l,{children:e("b",{children:e(A,{color:R<0?"error":"success",children:R})})})]})})})]})}),e(L,{}),e(S,{sx:{py:1},children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,flexGrow:1,children:!!k&&e(ie,{variant:"filled",severity:"error",children:k})}),e(i,{item:!0,xs:"auto",children:e(D,{disabled:!!k,onClick:()=>n({...s,level:w,curExp:R,books:re(V,(d,O)=>o[O]-d),mora:G}),color:"success",startIcon:e(K,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function ye(s){const{bookKey:n,value:m=0,setValue:h,required:c=0}=s;return t(b,{bgt:"light",children:[e(S,{sx:{py:1},children:e(l,{children:q[n].name})}),e(L,{}),e(S,{children:t(i,{container:!0,children:[e(i,{item:!0,xs:3,children:e(le,{src:q[n].img})}),t(i,{item:!0,xs:9,children:[t(I,{sx:{display:"flex"},children:[e(U,{children:"Amount"}),e(P,{sx:{flexBasis:30,flexGrow:1},children:e(X,{value:m,onChange:a=>h(Math.max(a??0,0)),sx:{px:2}})})]}),t(C,{display:"flex",justifyContent:"space-between",mt:1,children:[e(l,{children:"Required:"}),e(l,{children:e("b",{children:e(A,{color:c?"success":void 0,children:c})})})]})]})]})})]})}function Ce(s,n,m,h,c){let a=c?Math.floor(h/1e3):Math.ceil(h/1e3);const o=Math.min(Math.floor(a/20),s);a-=o*20;const x=Math.min(Math.floor(a/5),n);a-=x*5;const f=Math.min(a,m);return a-=f,c||a===0?[o,x,f]:x===3&&o!==s?[o+1,0,0]:x!==n?[o,x+1,0]:o!==s?[o+1,0,0]:null}const Te=[0,-1,-10,-20,-30,-40,-60,1,60,p];function we(){const s=Q(),[{resin:n,resinDate:m},h]=v.useState(()=>s.displayTool.get());v.useEffect(()=>s.displayTool.follow((r,T)=>h(T)),[s]);const c=v.useRef(void 0),a=r=>{r>=p?(c.current&&clearTimeout(c.current),c.current=void 0):c.current=setTimeout(()=>console.log("set resin",r+1),j),s.displayTool.set({resin:r,resinDate:new Date().getTime()})};v.useEffect(()=>{if(n<p){const r=Date.now(),T=p-n,y=Math.min(Math.floor((r-m)/j),T),E=n+y,_=m+y*j;s.displayTool.set({resin:E,resinDate:_}),E<p&&(c.current=setTimeout(()=>a(E+1),r-_))}return()=>c.current&&clearTimeout(c.current)},[]);const o=n>=p?m:m+j,x=n>=p?m:m+(p-n)*j,f=new Date(x),u=J(Math.abs(o-Date.now())),g=r=>{const y=parseInt(r);y>=0&&y<=2e3&&a(y)};return t(b,{children:[t(i,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(i,{item:!0,children:e(W,{src:N.resin.fragile,size:2})}),e(i,{item:!0,children:e(l,{variant:"h6",children:"Resin Counter"})})]}),e(L,{}),e(S,{children:t(i,{container:!0,spacing:2,children:[e(i,{item:!0,children:t(l,{variant:"h2",children:[e(W,{src:N.resin.fragile}),e(se,{type:"number",sx:{width:"2.5em",fontSize:"4rem"},value:n,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:r=>g(r.target.value)}),t("span",{children:["/",p]})]})}),t(i,{item:!0,flexGrow:1,children:[e(I,{fullWidth:!0,children:Te.map(r=>r===0?e(D,{onClick:()=>a(r),disabled:n===0,children:r}):r===p?t(D,{onClick:()=>a(p),disabled:n>=p,children:["MAX ",r]}):r>0?t(D,{onClick:()=>a(n+r),disabled:n>=p,children:["+",r]}):e(D,{onClick:()=>a(n+r),disabled:n<Math.abs(r),children:r}))}),e(l,{variant:"subtitle1",sx:{mt:2},children:n<p?t("span",{children:["Next resin in ",u,", full Resin at"," ",f.toLocaleTimeString()," ",f.toLocaleDateString()]}):t("span",{children:["Resin has been full for at least ",u,", since"," ",f.toLocaleTimeString()," ",f.toLocaleDateString()]})})]}),e(i,{item:!0,xs:12,children:e(l,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}function Me(){const s=Q(),[{timeZoneKey:n},m]=v.useState(()=>s.displayTool.get());v.useEffect(()=>s.displayTool.follow((u,g)=>m(g)),[s]);const h=v.useCallback(u=>s.displayTool.set({timeZoneKey:u}),[s]),[c,a]=v.useState(new Date(Date.now()+F[n]));v.useEffect(()=>{const u=()=>(a(new Date(Date.now()+F[n])),setTimeout(()=>{g=u()},$-Date.now()%$));let g=u();return()=>clearTimeout(g)},[n]);let o=new Date(c);o.getUTCHours()<4||(o=new Date(o.getTime()+ae)),o.setUTCHours(4,0,0,0);const x=o.getTime()-c.getTime(),f=J(x);return t(b,{children:[t(S,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(ue,{}),e(l,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"}),e(oe,{title:n,children:Object.keys(F).map(u=>e(ce,{selected:n===u,disabled:n===u,onClick:()=>h(u),children:u},u))})]}),e(L,{}),e(S,{children:t(i,{container:!0,justifyContent:"center",spacing:3,children:[e(i,{item:!0,sx:{my:4},children:e(l,{variant:"h2",children:c.toLocaleTimeString([],{timeZone:"UTC"})})}),t(i,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[t(l,{children:["Server Date: ",e("b",{children:c.toDateString()})]}),t(l,{children:["Time until reset: ",e("b",{children:f})]}),t(l,{children:["Resin until reset:"," ",e("b",{children:Math.floor(x/(8*de))})]})]})]})})]})}function Ee(){return he.send({hitType:"pageview",page:"/tools"}),t(C,{display:"flex",flexDirection:"column",gap:1,children:[e(Me,{}),e(we,{}),e(ve,{})]})}export{Ee as default};
