import{l as T,m as W,p as e,ag as S,n as t,q as L,K as r,h as z,as as v,ct as B,u as U,b as q,e as h,W as J,aC as P,T as c,bR as Q,C as V,v as Y,B as k,Y as E,s as X}from"./index-6dd065ad.js";import{d as Z,C as ee,S as ae,L as ne}from"./StarDisplay-5975c057.js";import{T as I,S as M,h as _,g as se,i as te,j as oe,d as ie}from"./LocationAutocomplete-ab805af1.js";import{I as j,i as A}from"./ColoredText-eba81b7d.js";import{v as re,w as le,u as y,x as pe,n as ce}from"./index-f100223d.js";import{u as de}from"./useWeapon-9ee72941.js";import{g as ue}from"./index-3c8c6f3c.js";import{C as me}from"./CardActionArea-a7b63dd0.js";const he=_([...S]);function We({value:a,totals:s,onChange:d,...u}){const g=T(),p=!W(g.breakpoints.up("sm"));return e(M,{exclusive:!0,value:a,...u,children:S.map(o=>e(I,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(he(a,o)),children:t(r,{display:"flex",children:[e("strong",{children:o}),e(Z,{}),e(L,{label:s[o],size:"small"})]})},o))})}const ge=_([...z]);function Se({value:a,totals:s,onChange:d,...u}){const g=T(),p=!W(g.breakpoints.up("sm"));return e(M,{exclusive:!0,value:a,...u,children:z.map(o=>{var m;return t(I,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(ge(a,o)),children:[e(j,{src:(m=A.weaponTypes)==null?void 0:m[o],size:2,sideMargin:!0}),e(L,{label:s[o],size:"small"})]},o)})})}function Le(){return{level:a=>a.level*(a.ascension+1),rarity:a=>v.weapon.data[a.key].rarity,name:a=>B.t(`weaponNames_gen:${a.key}`)}}function ze(){return{rarity:(a,s)=>s.includes(v.weapon.data[a.key].rarity),weaponType:(a,s)=>s.includes(v.weapon.data[a.key].weaponType),name:(a,s)=>B.t(`weaponNames_gen:${a.key}`).toLowerCase().includes(s.toLowerCase())}}const Be={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function Ie({weaponId:a,onClick:s,onEdit:d,onDelete:u,canEquip:g=!1,extraButtons:p}){const{t:o}=U(["page_weapon","ui"]),m=q(),l=de(a),i=l!=null&&l.key?ue(l.key):void 0,D=h.useCallback(n=>n.weaponTypeKey===(i==null?void 0:i.weaponType),[i]),K=h.useCallback(n=>e(me,{onClick:()=>s==null?void 0:s(a),children:n}),[s,a]),N=h.useCallback(n=>e(r,{children:n}),[]),R=h.useCallback(n=>a&&m.weapons.set(a,{location:n}),[m,a]),f=h.useMemo(()=>i&&l&&re([i.data,le(l)]),[i,l]);if(!l||!i||!f)return null;const{level:$,ascension:C,refinement:F,id:x,location:b="",lock:w}=l,O=f.get(y.weapon.type).value,G=[y.weapon.main,y.weapon.sub,y.weapon.sub2].map(n=>f.get(n)),H=pe(l.key,C>=2);return e(h.Suspense,{fallback:e(J,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:t(X,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t(ee,{condition:!!s,wrapper:K,falseWrapper:N,children:[t(r,{className:`grad-${i.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!s&&e(P,{color:"primary",onClick:()=>m.weapons.set(x,{lock:!w}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:w?e(se,{}):e(te,{})}),t(r,{sx:{position:"relative",zIndex:1},children:[t(r,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e(j,{size:2,src:A.weaponTypes[O]}),e(c,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:e("strong",{children:i.name})})]}),t(c,{component:"span",variant:"h5",children:["Lv. ",$]}),t(c,{component:"span",variant:"h5",color:"text.secondary",children:["/",Q[C]]}),t(c,{variant:"h6",children:["Refinement ",e("strong",{children:F})]}),e(ae,{stars:i.rarity,colored:!0})]}),e(r,{sx:{height:"100%",position:"absolute",right:0,top:0},children:e(r,{component:"img",src:H??"",width:"auto",height:"100%",sx:{float:"right"}})})]}),e(V,{children:G.map(n=>n.info.name?t(r,{sx:{display:"flex"},children:[t(c,{flexGrow:1,children:[n.info.icon," ",n.info.name]}),e(c,{children:ce(n)})]},JSON.stringify(n.info)):null)})]}),t(r,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[e(r,{sx:{flexGrow:1},children:g?e(oe,{location:b,setLocation:R,filter:D,autoCompleteProps:{getOptionDisabled:n=>!n.key}}):e(ne,{location:b})}),t(r,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!d&&e(Y,{title:e(c,{children:o`page_weapon:edit`}),placement:"top",arrow:!0,children:e(k,{color:"info",size:"small",onClick:()=>d(x),children:e(ie,{})})}),!!u&&e(k,{color:"error",size:"small",onClick:()=>u(x),disabled:!!b||w,children:e(E,{})}),p]})]})]})})}export{Se as W,We as a,Ie as b,ze as c,Le as d,Be as w};
