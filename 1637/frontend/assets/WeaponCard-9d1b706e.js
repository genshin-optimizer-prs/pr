import{l as T,m as W,p as e,af as L,n as s,q as S,K as r,h as z,ar as v,cA as B,u as U,b as q,e as h,U as J,aB as P,T as c,bZ as Q,C as V,v as Z,B as C,W as E,s as X}from"./index-0eefb87b.js";import{d as Y,c as ee,g as ae,i as ne}from"./StarDisplay-5cc4534b.js";import{T as A,S as I,h as M}from"./SolidToggleButtonGroup-660fa1c4.js";import{I as _,i as j}from"./ColoredText-97654898.js";import{v as te,w as se,u as y,x as oe,n as ie}from"./index-fe565662.js";import{u as re}from"./useWeapon-6f3f932f.js";import{L as le,a as pe,b as ce,d as de}from"./LocationAutocomplete-1607ef92.js";import{g as me}from"./index-c3ce95f6.js";import{C as ue}from"./CardActionArea-e968093f.js";const he=M([...L]);function Le({value:a,totals:t,onChange:d,...m}){const g=T(),p=!W(g.breakpoints.up("sm"));return e(I,{exclusive:!0,value:a,...m,children:L.map(o=>e(A,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(he(a,o)),children:s(r,{display:"flex",children:[e("strong",{children:o}),e(Y,{}),e(S,{label:t[o],size:"small"})]})},o))})}const ge=M([...z]);function Se({value:a,totals:t,onChange:d,...m}){const g=T(),p=!W(g.breakpoints.up("sm"));return e(I,{exclusive:!0,value:a,...m,children:z.map(o=>{var u;return s(A,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(ge(a,o)),children:[e(_,{src:(u=j.weaponTypes)==null?void 0:u[o],size:2,sideMargin:!0}),e(S,{label:t[o],size:"small"})]},o)})})}function ze(){return{level:a=>a.level*(a.ascension+1),rarity:a=>v.weapon.data[a.key].rarity,name:a=>B.t(`weaponNames_gen:${a.key}`)}}function Be(){return{rarity:(a,t)=>t.includes(v.weapon.data[a.key].rarity),weaponType:(a,t)=>t.includes(v.weapon.data[a.key].weaponType),name:(a,t)=>B.t(`weaponNames_gen:${a.key}`).toLowerCase().includes(t.toLowerCase())}}const Ae={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function Ie({weaponId:a,onClick:t,onEdit:d,onDelete:m,canEquip:g=!1,extraButtons:p}){const{t:o}=U(["page_weapon","ui"]),u=q(),l=re(a),i=l!=null&&l.key?me(l.key):void 0,D=h.useCallback(n=>n.weaponTypeKey===(i==null?void 0:i.weaponType),[i]),K=h.useCallback(n=>e(ue,{onClick:()=>t==null?void 0:t(a),children:n}),[t,a]),N=h.useCallback(n=>e(r,{children:n}),[]),$=h.useCallback(n=>a&&u.weapons.set(a,{location:n}),[u,a]),f=h.useMemo(()=>i&&l&&te([i.data,se(l)]),[i,l]);if(!l||!i||!f)return null;const{level:F,ascension:k,refinement:O,id:x,location:b="",lock:w}=l,R=f.get(y.weapon.type).value,G=[y.weapon.main,y.weapon.sub,y.weapon.sub2].map(n=>f.get(n)),H=oe(l.key,k>=2);return e(h.Suspense,{fallback:e(J,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:s(X,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[s(ee,{condition:!!t,wrapper:K,falseWrapper:N,children:[s(r,{className:`grad-${i.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!t&&e(P,{color:"primary",onClick:()=>u.weapons.set(x,{lock:!w}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:w?e(le,{}):e(pe,{})}),s(r,{sx:{position:"relative",zIndex:1},children:[s(r,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e(_,{size:2,src:j.weaponTypes[R]}),e(c,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:e("strong",{children:i.name})})]}),s(c,{component:"span",variant:"h5",children:["Lv. ",F]}),s(c,{component:"span",variant:"h5",color:"text.secondary",children:["/",Q[k]]}),s(c,{variant:"h6",children:["Refinement ",e("strong",{children:O})]}),e(ae,{stars:i.rarity,colored:!0})]}),e(r,{sx:{height:"100%",position:"absolute",right:0,top:0},children:e(r,{component:"img",src:H??"",width:"auto",height:"100%",sx:{float:"right"}})})]}),e(V,{children:G.map(n=>n.info.name?s(r,{sx:{display:"flex"},children:[s(c,{flexGrow:1,children:[n.info.icon," ",n.info.name]}),e(c,{children:ie(n)})]},JSON.stringify(n.info)):null)})]}),s(r,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[e(r,{sx:{flexGrow:1},children:g?e(ce,{location:b,setLocation:$,filter:D,autoCompleteProps:{getOptionDisabled:n=>!n.key}}):e(ne,{location:b})}),s(r,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!d&&e(Z,{title:e(c,{children:o`page_weapon:edit`}),placement:"top",arrow:!0,children:e(C,{color:"info",size:"small",onClick:()=>d(x),children:e(de,{})})}),!!m&&e(C,{color:"error",size:"small",onClick:()=>m(x),disabled:!!b||w,children:e(E,{})}),p]})]})]})})}export{Se as W,Le as a,Ie as b,Be as c,ze as d,Ae as w};
