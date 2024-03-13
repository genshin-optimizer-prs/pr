import{c as $,j as V,e as w,n as t,J as r,p as e,T as i,B as G,D as _,a0 as S,a1 as I,a2 as Z,s as f,K as x,C as T,Y as Q,a3 as K,t as z,r as ee,i as te,b as re,G as R,a4 as ie,a5 as ne,a6 as le,I as H,M as se}from"./index-b9a2004c.js";import{I as oe,B as M,C as D,i as L}from"./ColoredText-14a3bbc9.js";import{I as ae}from"./ImgFullwidth-181f0999.js";import{T as B}from"./TextButton-cf8d6cbf.js";import{a as ce}from"./ResinCounter-5ec13394.js";import{M as de,D as he}from"./DropdownButton-faa15260.js";const ue=$(V.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),F={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:L.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:L.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:L.exp_books.wit}},g=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],me=[20,40,50,60,70,80,90];function xe(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function pe(){const[n,l]=w.useState(()=>xe()),{mora:p,level:c,curExp:d,goUnder:a,books:s,books:{advice:u,experience:b,wit:h}}=n,m=me.find(o=>o>c);let k=-d;for(let o=c;o<Math.min(m,g.length);o++)k+=g[o];const U=ve(h,b,u,k,a)||[],[q=0,X=0,N=0]=U,O={advice:N,experience:X,wit:q},E=q*2e4+X*5e3+N*1e3,W=E/5,Y=k-E,j=p-W;let C=E+d,v=c;for(;v<Math.min(m,g.length)&&g[v]<=C;v++)C-=g[v];v===m&&(C=0);let y="";return j<0?y=t("span",{children:["You don't have enough ",e("b",{children:"Mora"})," for this operation."]}):U.length===0?y=t("span",{children:["You don't have enough ",e("b",{children:"EXP. books"})," to level to the next milestone."]}):c===90&&(y="You are at the maximum level."),t(z,{children:[t(r,{container:!0,sx:{px:2,py:1},spacing:2,children:[e(r,{item:!0,children:e(oe,{src:F.wit.img,size:2})}),e(r,{item:!0,flexGrow:1,children:e(i,{variant:"h6",children:"Experience Calculator"})}),e(r,{item:!0,children:t(M,{children:[e(G,{color:"primary",disabled:!a,onClick:()=>l({...n,goUnder:!1}),children:"Full Level"}),e(G,{color:"primary",disabled:a,onClick:()=>l({...n,goUnder:!0}),children:"Don't fully level"})]})})]}),e(_,{}),e(T,{children:t(r,{container:!0,spacing:1,children:[e(r,{item:!0,children:t(i,{children:[t("span",{children:["This calculator tries to calculate the amount of exp books required to get to the next milestone level."," "]}),a?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),e(r,{item:!0,xs:6,md:3,children:t(M,{sx:{display:"flex"},children:[e(B,{children:"Current Level"}),e(S,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:c,onChange:o=>l({...n,level:Z(o??0,0,90)}),sx:{px:2}})})]})}),e(r,{item:!0,xs:6,md:3,children:t(M,{sx:{display:"flex"},children:[e(B,{children:"Current EXP."}),e(S,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:d,onChange:o=>l({...n,curExp:Z(o??0,0,(g[c]||1)-1)}),endAdornment:`/${g[c]||0}`,sx:{px:2}})})]})}),e(r,{item:!0,xs:6,md:3,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(i,{children:"Next Milestone Level:"}),e(i,{children:e("b",{children:m})})]})})}),e(r,{item:!0,xs:6,md:3,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(i,{children:"EXP. to milestone:"}),e(i,{children:t("span",{children:[e("strong",{children:E})," / ",e("strong",{children:k})]})})]})})}),Object.entries(s).map(([o])=>e(r,{item:!0,xs:12,md:4,children:e(fe,{bookKey:o,value:s[o],setValue:A=>l({...n,books:{...s,[o]:A}}),required:O[o]})},o)),e(r,{item:!0,xs:12,md:4,children:t(M,{sx:{display:"flex"},children:[e(B,{children:"Current Mora"}),e(S,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:p,onChange:o=>l({...n,mora:Math.max(o??0,0)}),sx:{px:2}})})]})}),e(r,{item:!0,xs:12,md:4,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(i,{children:"Mora Cost: "}),e(i,{children:e("b",{children:W})})]})})}),e(r,{item:!0,xs:12,md:4,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[t(i,{children:["EXP ",a?"Diff":"Waste",": "]}),e(i,{children:e("b",{children:e(D,{color:Y<0?"error":"success",children:Y})})})]})})}),e(r,{item:!0,xs:12,md:4,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(i,{children:"Final Mora: "}),e(i,{children:e("b",{children:e(D,{color:j<0?"error":"success",children:j})})})]})})}),e(r,{item:!0,xs:12,md:4,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(i,{children:"Final Level: "}),e(i,{children:e("b",{children:e(D,{color:"success",children:v})})})]})})}),e(r,{item:!0,xs:12,md:4,children:e(f,{children:t(x,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[e(i,{children:"Final EXP: "}),e(i,{children:e("b",{children:e(D,{color:C<0?"error":"success",children:C})})})]})})})]})}),e(_,{}),e(T,{sx:{py:1},children:t(r,{container:!0,spacing:2,children:[e(r,{item:!0,flexGrow:1,children:!!y&&e(Q,{variant:"filled",severity:"error",children:y})}),e(r,{item:!0,xs:"auto",children:e(G,{disabled:!!y,onClick:()=>l({...n,level:v,curExp:C,books:K(O,(o,A)=>s[A]-o),mora:j}),color:"success",startIcon:e(ue,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function fe(n){const{bookKey:l,value:p=0,setValue:c,required:d=0}=n;return t(f,{children:[e(T,{sx:{py:1},children:e(i,{children:F[l].name})}),e(_,{}),e(T,{children:t(r,{container:!0,children:[e(r,{item:!0,xs:3,children:e(ae,{src:F[l].img})}),t(r,{item:!0,xs:9,children:[t(M,{sx:{display:"flex"},children:[e(B,{children:"Amount"}),e(S,{sx:{flexBasis:30,flexGrow:1},children:e(I,{value:p,onChange:a=>c(Math.max(a??0,0)),sx:{px:2}})})]}),t(x,{display:"flex",justifyContent:"space-between",mt:1,children:[e(i,{children:"Required:"}),e(i,{children:e("b",{children:e(D,{color:d?"success":"",children:d})})})]})]})]})})]})}function ve(n,l,p,c,d){let a=d?Math.floor(c/1e3):Math.ceil(c/1e3);const s=Math.min(Math.floor(a/20),n);a-=s*20;const u=Math.min(Math.floor(a/5),l);a-=u*5;const b=Math.min(a,p);return a-=b,d||a===0?[s,u,b]:u===3&&s!==n?[s+1,0,0]:u!==l?[s,u+1,0]:s!==n?[s+1,0,0]:null}var P={},ge=te;Object.defineProperty(P,"__esModule",{value:!0});var J=P.default=void 0,be=ge(ee()),Ce=V,ye=(0,be.default)((0,Ce.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled");J=P.default=ye;function we(){const n=re(),[{timeZoneKey:l},p]=w.useState(()=>n.displayTool.get());w.useEffect(()=>n.displayTool.follow((h,m)=>p(m)),[n]);const c=w.useCallback(h=>n.displayTool.set({timeZoneKey:h}),[n]),[d,a]=w.useState(new Date(Date.now()+R[l]));w.useEffect(()=>{const h=()=>(a(new Date(Date.now()+R[l])),setTimeout(()=>{m=h()},H-Date.now()%H));let m=h();return()=>clearTimeout(m)},[l]);let s=new Date(d);s.getUTCHours()<4||(s=new Date(s.getTime()+ie)),s.setUTCHours(4,0,0,0);const u=s.getTime()-d.getTime(),b=ne(u);return t(z,{children:[t(T,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(J,{}),e(i,{variant:"h6",sx:{flexGrow:1},children:"Teyvat Time"}),e(he,{title:l,children:Object.keys(R).map(h=>e(de,{selected:l===h,disabled:l===h,onClick:()=>c(h),children:h},h))})]}),e(_,{}),e(T,{children:t(r,{container:!0,justifyContent:"center",spacing:3,children:[e(r,{item:!0,sx:{my:4},children:e(i,{variant:"h2",children:d.toLocaleTimeString([],{timeZone:"UTC"})})}),t(r,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[t(i,{children:["Server Date: ",e("b",{children:d.toDateString()})]}),t(i,{children:["Time until reset: ",e("b",{children:b})]}),t(i,{children:["Resin until reset:"," ",e("b",{children:Math.floor(u/(8*le))})]})]})]})})]})}function Se(){return se.send({hitType:"pageview",page:"/tools"}),t(x,{display:"flex",flexDirection:"column",gap:1,my:1,children:[e(we,{}),e(ce,{}),e(pe,{})]})}export{Se as default};
