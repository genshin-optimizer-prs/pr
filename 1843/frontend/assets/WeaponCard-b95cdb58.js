import{l as W,m as L,p as e,ah as S,n as t,q as z,K as i,h as I,at as v,cw as B,u as q,b as J,e as h,V as P,U as Q,T as c,bU as X,C as E,v as Y,B as T,X as Z,s as ee}from"./index-d193ed06.js";import{d as ae,e as ne,h as se}from"./StarDisplay-05a11506.js";import{T as M,S as _,h as A}from"./SolidToggleButtonGroup-da9687a4.js";import{I as j,i as D}from"./ColoredText-f6506109.js";import{w as te,x as oe,u as y,y as re,r as ie,n as le}from"./index-88cd0b7c.js";import{u as pe}from"./useWeapon-aeef87e8.js";import{C as ce,L as de,a as me,b as ue,d as he}from"./ConditionalWrapper-7566bd27.js";import{g as ge}from"./index-a57f27d5.js";import{C as ye}from"./CardActionArea-884b9902.js";const fe=A([...S]);function Ie({value:a,totals:n,onChange:d,...m}){const g=W(),p=!L(g.breakpoints.up("sm"));return e(_,{exclusive:!0,value:a,...m,children:S.map(o=>e(M,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(fe(a,o)),children:t(i,{display:"flex",children:[e("strong",{children:o}),e(ae,{}),e(z,{label:n[o],size:"small"})]})},o))})}const xe=A([...I]);function Be({value:a,totals:n,onChange:d,...m}){const g=W(),p=!L(g.breakpoints.up("sm"));return e(_,{exclusive:!0,value:a,...m,children:I.map(o=>{var u;return t(M,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(xe(a,o)),children:[e(j,{src:(u=D.weaponTypes)==null?void 0:u[o],size:2,sideMargin:!0}),e(z,{label:n[o],size:"small"})]},o)})})}function Me(){return{level:a=>a.level*(a.ascension+1),rarity:a=>v.weapon.data[a.key].rarity,name:a=>B.t(`weaponNames_gen:${a.key}`)}}function _e(){return{rarity:(a,n)=>n.includes(v.weapon.data[a.key].rarity),weaponType:(a,n)=>n.includes(v.weapon.data[a.key].weaponType),name:(a,n)=>B.t(`weaponNames_gen:${a.key}`).toLowerCase().includes(n.toLowerCase())}}const Ae={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function je({weaponId:a,onClick:n,onEdit:d,onDelete:m,canEquip:g=!1,extraButtons:p}){const{t:o}=q(["page_weapon","ui"]),u=J(),l=pe(a),r=l!=null&&l.key?ge(l.key):void 0,K=h.useCallback(s=>s.weaponTypeKey===(r==null?void 0:r.weaponType),[r]),N=h.useCallback(s=>e(ye,{onClick:()=>n==null?void 0:n(a),children:s}),[n,a]),$=h.useCallback(s=>e(i,{children:s}),[]),F=h.useCallback(s=>a&&u.weapons.set(a,{location:s}),[u,a]),f=h.useMemo(()=>r&&l&&te([r.data,oe(l)]),[r,l]);if(!l||!r||!f)return null;const{level:O,ascension:k,refinement:R,id:x,location:b="",lock:w}=l,U=f.get(y.weapon.type).value,G=[y.weapon.main,y.weapon.sub,y.weapon.sub2].map(s=>f.get(s)),H=re(l.key,k>=2);return e(h.Suspense,{fallback:e(P,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:t(ee,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t(ce,{condition:!!n,wrapper:N,falseWrapper:$,children:[t(i,{className:`grad-${r.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!n&&e(Q,{color:"primary",onClick:()=>u.weapons.set(x,{lock:!w}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:w?e(de,{}):e(me,{})}),t(i,{sx:{position:"relative",zIndex:1},children:[t(i,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e(j,{size:2,src:D.weaponTypes[U]}),e(c,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:e("strong",{children:r.name})})]}),t(c,{component:"span",variant:"h5",children:["Lv. ",O]}),t(c,{component:"span",variant:"h5",color:"text.secondary",children:["/",X[k]]}),t(c,{variant:"h6",children:["Refinement ",e("strong",{children:R})]}),e(ne,{stars:r.rarity,colored:!0})]}),e(i,{sx:{height:"100%",position:"absolute",right:0,top:0},children:e(i,{component:"img",src:H??"",width:"auto",height:"100%",sx:{float:"right"}})})]}),e(E,{children:G.map(s=>{const{name:C,icon:V}=ie(s.info);return C?t(i,{sx:{display:"flex"},children:[t(c,{flexGrow:1,children:[V," ",C]}),e(c,{children:le(s)})]},JSON.stringify(s.info)):null})})]}),t(i,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[e(i,{sx:{flexGrow:1},children:g?e(ue,{location:b,setLocation:F,filter:K,autoCompleteProps:{getOptionDisabled:s=>!s.key}}):e(se,{location:b})}),t(i,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!d&&e(Y,{title:e(c,{children:o`page_weapon:edit`}),placement:"top",arrow:!0,children:e(T,{color:"info",size:"small",onClick:()=>d(x),children:e(he,{})})}),!!m&&e(T,{color:"error",size:"small",onClick:()=>m(x),disabled:!!b||w,children:e(Z,{})}),p]})]})]})})}export{Be as W,Ie as a,je as b,_e as c,Me as d,Ae as w};
