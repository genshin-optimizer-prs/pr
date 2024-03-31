import{u as U,b as H,e as t,Z as L,M as q,ag as J,n as d,p as o,C as Q,K as u,t as Z,B as X,J as v,R as Y,_ as D,h as ee,ah as ae,V as E}from"./index-8b6ca88e.js";import{u as te,f as oe,s as ne,a as se,T as re,S as le}from"./StarDisplay-400e0c06.js";import{W as pe,a as ie,b as ce,w as R,c as de,d as ue}from"./WeaponCard-aaa6a6a2.js";import{g as k}from"./index-9a7783f7.js";import{c as M}from"./totalUtils-2ecae58d.js";import{A as me}from"./ConditionalWrapper-ec52dc49.js";import"./DropdownButton-89c73f26.js";import"./ColoredText-2cf4b8ec.js";import"./index-b6262954.js";import"./SqBadge-5cc0bf48.js";import"./SolidToggleButtonGroup-c299cd94.js";import"./useWeapon-3ad8267e.js";import"./CardActionArea-cffbd9ad.js";const he=Y.lazy(()=>D(()=>import("./WeaponSelectionModal-d5e18bf0.js"),["./WeaponSelectionModal-d5e18bf0.js","./index-8b6ca88e.js","./index-dd925d88.css","./index-b6262954.js","./ColoredText-2cf4b8ec.js","./SqBadge-5cc0bf48.js","./Close-7ddb2e0a.js","./index-9a7783f7.js","./totalUtils-2ecae58d.js","./StarDisplay-400e0c06.js","./DropdownButton-89c73f26.js","./WeaponCard-aaa6a6a2.js","./SolidToggleButtonGroup-c299cd94.js","./useWeapon-3ad8267e.js","./ConditionalWrapper-ec52dc49.js","./CardActionArea-cffbd9ad.js"],import.meta.url)),we=t.lazy(()=>D(()=>import("./WeaponEditor-9a74ba26.js").then(r=>r.e),["./WeaponEditor-9a74ba26.js","./index-8b6ca88e.js","./index-dd925d88.css","./index-b6262954.js","./ColoredText-2cf4b8ec.js","./SqBadge-5cc0bf48.js","./useWeapon-3ad8267e.js","./StarDisplay-400e0c06.js","./DropdownButton-89c73f26.js","./Close-7ddb2e0a.js","./ConditionalWrapper-ec52dc49.js","./DataContext-28bfc129.js","./InfoTooltip-5aecdc3b.js","./BootstrapTooltip-6da2cbc0.js","./StatIcon-7f071566.js","./Groups-bbe888f7.js","./index-9a7783f7.js"],import.meta.url)),fe={xs:1,sm:2,md:3,lg:3,xl:4},ge={xs:10,sm:12,md:24,lg:24,xl:24},ye=Object.keys(R);function Re(){const{t:r}=U(["page_weapon","ui","weaponNames_gen"]),a=H(),[i,A]=t.useState(a.displayWeapon.get());t.useEffect(()=>a.displayWeapon.follow((e,n)=>A(n)),[a]);const[P,S]=t.useState(!1),[T,b]=L();t.useEffect(()=>(q.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,n)=>(n==="new"||n==="remove")&&b())),[b,a]);const j=te(),F=t.useCallback(async e=>{const n=a.weapons.get(e);if(!n)return;const l=r(`weaponNames_gen:${n.key}`);window.confirm(r("removeWeapon",{value:l}))&&(a.weapons.remove(e),i.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[i.editWeaponId,a,r]),m=t.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),N=t.useCallback(e=>{m(a.weapons.new(J(e)))},[a,m]),[C,O]=t.useState(""),_=t.useDeferredValue(C),{sortType:h,ascending:w,weaponType:f,rarity:g}=i,{weaponIds:s,totalWeaponNum:y}=t.useMemo(()=>{const e=a.weapons.values,n=e.length,l=e.filter(oe({weaponType:f,rarity:g,name:_},de())).sort(ne(R[h]??[],w,ue())).map(p=>p.id);return T&&{weaponIds:l,totalWeaponNum:n}},[T,a,h,w,g,f,_]),{numShow:I,setTriggerElement:z}=se(ge[j],s.length),W=t.useMemo(()=>s.slice(0,I),[s,I]),B=s.length!==y?`${s.length}/${y}`:`${y}`,x=t.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:c}=i;t.useEffect(()=>{c&&(a.weapons.get(c)||x())},[a,c,x]);const K=t.useMemo(()=>M(ee,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const p=k(l.key).weaponType;e[p].total++,s.includes(n)&&e[p].current++})),[a,s]),V=t.useMemo(()=>M(ae,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const p=k(l.key).rarity;e[p].total++,s.includes(n)&&e[p].current++})),[a,s]),$={numShowing:W.length,total:B,t:r,namespace:"page_weapon"},G={sortKeys:[...ye],value:h,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:w,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return d(u,{my:1,display:"flex",flexDirection:"column",gap:1,children:[o(t.Suspense,{fallback:!1,children:o(he,{show:P,onHide:()=>S(!1),onSelect:N})}),o(t.Suspense,{fallback:!1,children:o(we,{weaponId:c,footer:!0,onClose:x})}),o(Z,{children:d(Q,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(u,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[o(pe,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:f,totals:K,size:"small"}),o(ie,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:g,totals:V,size:"small"}),o(u,{flexGrow:1}),o(re,{autoFocus:!0,size:"small",value:C,onChange:e=>O(e.target.value),label:r("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),o(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:o(le,{showingTextProps:$,sortByButtonProps:G})})]})}),d(t.Suspense,{fallback:o(E,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[o(X,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:o(me,{}),children:r("page_weapon:addWeapon")}),o(v,{container:!0,spacing:1,columns:fe,children:W.map(e=>o(v,{item:!0,xs:1,children:o(ce,{weaponId:e,onDelete:F,onEdit:m,canEquip:!0})},e))})]}),s.length!==W.length&&o(E,{ref:e=>{e&&z(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Re as default};
