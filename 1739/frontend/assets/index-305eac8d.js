import{u as V,b as H,e as t,X as L,M as q,ae as J,n as d,p as o,C as Q,K as u,t as X,B as Y,J as v,R as Z,_ as D,h as ee,af as ae,U as E}from"./index-76bbadb5.js";import{u as te,f as oe,s as ne,a as se,T as re,S as le}from"./StarDisplay-53016562.js";import{W as pe,a as ie,b as ce,w as R,c as de,d as ue}from"./WeaponCard-f5d04c1c.js";import{g as k}from"./index-7587d899.js";import{c as M}from"./totalUtils-81aebb96.js";import{A as me}from"./ConditionalWrapper-26090cd0.js";import"./DropdownButton-aa94a155.js";import"./ColoredText-3b35573c.js";import"./index-694c3ffe.js";import"./SqBadge-da9d1a58.js";import"./SolidToggleButtonGroup-18238e13.js";import"./useWeapon-829c2280.js";import"./CardActionArea-aec7158e.js";const fe=Z.lazy(()=>D(()=>import("./WeaponSelectionModal-cf59ab64.js"),["./WeaponSelectionModal-cf59ab64.js","./index-76bbadb5.js","./index-8fd0721f.css","./index-694c3ffe.js","./ColoredText-3b35573c.js","./SqBadge-da9d1a58.js","./index-7587d899.js","./totalUtils-81aebb96.js","./CloseButton-55e80bd4.js","./StarDisplay-53016562.js","./DropdownButton-aa94a155.js","./WeaponCard-f5d04c1c.js","./SolidToggleButtonGroup-18238e13.js","./useWeapon-829c2280.js","./ConditionalWrapper-26090cd0.js","./CardActionArea-aec7158e.js"],import.meta.url)),we=t.lazy(()=>D(()=>import("./WeaponEditor-e91f1a79.js").then(r=>r.e),["./WeaponEditor-e91f1a79.js","./index-76bbadb5.js","./index-8fd0721f.css","./index-694c3ffe.js","./ColoredText-3b35573c.js","./SqBadge-da9d1a58.js","./useWeapon-829c2280.js","./StarDisplay-53016562.js","./DropdownButton-aa94a155.js","./ConditionalWrapper-26090cd0.js","./CloseButton-55e80bd4.js","./DataContext-e0d3b921.js","./InfoTooltip-05f29573.js","./BootstrapTooltip-9b692c5b.js","./Groups-23c525dc.js","./index-7587d899.js","./CardHeader-ff9cc95e.js"],import.meta.url)),he={xs:1,sm:2,md:3,lg:3,xl:4},ge={xs:10,sm:12,md:24,lg:24,xl:24},ye=Object.keys(R);function Re(){const{t:r}=V(["page_weapon","ui","weaponNames_gen"]),a=H(),[i,A]=t.useState(a.displayWeapon.get());t.useEffect(()=>a.displayWeapon.follow((e,n)=>A(n)),[a]);const[P,S]=t.useState(!1),[T,b]=L();t.useEffect(()=>(q.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,n)=>(n==="new"||n==="remove")&&b())),[b,a]);const j=te(),F=t.useCallback(async e=>{const n=a.weapons.get(e);if(!n)return;const l=r(`weaponNames_gen:${n.key}`);window.confirm(r("removeWeapon",{value:l}))&&(a.weapons.remove(e),i.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[i.editWeaponId,a,r]),m=t.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),N=t.useCallback(e=>{m(a.weapons.new(J(e)))},[a,m]),[C,O]=t.useState(""),_=t.useDeferredValue(C),{sortType:f,ascending:w,weaponType:h,rarity:g}=i,{weaponIds:s,totalWeaponNum:y}=t.useMemo(()=>{const e=a.weapons.values,n=e.length,l=e.filter(oe({weaponType:h,rarity:g,name:_},de())).sort(ne(R[f]??[],w,ue())).map(p=>p.id);return T&&{weaponIds:l,totalWeaponNum:n}},[T,a,f,w,g,h,_]),{numShow:I,setTriggerElement:z}=se(ge[j],s.length),W=t.useMemo(()=>s.slice(0,I),[s,I]),B=s.length!==y?`${s.length}/${y}`:`${y}`,x=t.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:c}=i;t.useEffect(()=>{c&&(a.weapons.get(c)||x())},[a,c,x]);const K=t.useMemo(()=>M(ee,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const p=k(l.key).weaponType;e[p].total++,s.includes(n)&&e[p].current++})),[a,s]),U=t.useMemo(()=>M(ae,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const p=k(l.key).rarity;e[p].total++,s.includes(n)&&e[p].current++})),[a,s]),$={numShowing:W.length,total:B,t:r,namespace:"page_weapon"},G={sortKeys:[...ye],value:f,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:w,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return d(u,{my:1,display:"flex",flexDirection:"column",gap:1,children:[o(t.Suspense,{fallback:!1,children:o(fe,{show:P,onHide:()=>S(!1),onSelect:N})}),o(t.Suspense,{fallback:!1,children:o(we,{weaponId:c,footer:!0,onClose:x})}),o(X,{children:d(Q,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(u,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[o(pe,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:h,totals:K,size:"small"}),o(ie,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:g,totals:U,size:"small"}),o(u,{flexGrow:1}),o(re,{autoFocus:!0,size:"small",value:C,onChange:e=>O(e.target.value),label:r("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),o(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:o(le,{showingTextProps:$,sortByButtonProps:G})})]})}),d(t.Suspense,{fallback:o(E,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[o(Y,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:o(me,{}),children:r("page_weapon:addWeapon")}),o(v,{container:!0,spacing:1,columns:he,children:W.map(e=>o(v,{item:!0,xs:1,children:o(ce,{weaponId:e,onDelete:F,onEdit:m,canEquip:!0})},e))})]}),s.length!==W.length&&o(E,{ref:e=>{e&&z(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Re as default};
