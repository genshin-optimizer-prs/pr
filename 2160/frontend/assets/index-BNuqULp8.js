import{u as R,b as j,d as t,aQ as G,aR as ie,q as e,p as l,U as h,T as L,W as k,Z as T,a5 as ce,B,af as U,D as H,aS as V,aT as re,aU as pe,aV as de,aW as ue,a9 as Z,aa as X,v as z,aX as he,aY as me,aZ as fe,a_ as ye,s as Y,w as J,a$ as ge,k as O,h as we,b0 as We,a8 as ke,a7 as A,b1 as xe,ac as be,V as Te,al as Se,b2 as Ce,ao as ve,ap as qe,aq as Ie,b3 as De,au as Ee,ar as Ke,b4 as _e,b5 as ee,b6 as $e,b7 as Be,b8 as Fe,b9 as Me,a2 as Q}from"./index-BLT-6aVy.js";const oe=["locked","unlocked"],Ne=ge([...oe]);function Ue({numShowing:u,total:o,weaponIds:c}){const{t:p}=R(["page_weapon","ui"]),a=j(),[g,q]=t.useState(a.displayWeapon.get());t.useEffect(()=>{a.displayWeapon.follow((s,r)=>q(r))},[a]);const{weaponType:I,rarity:K,locked:d,showEquipped:i,showInventory:S,locations:D}=g,w=t.useMemo(()=>G(we,s=>a.weapons.entries.forEach(([r,x])=>{const f=O(x.key).weaponType;s[f].total++,c.includes(r)&&s[f].current++})),[a,c]),W=t.useMemo(()=>G(We,s=>a.weapons.entries.forEach(([r,x])=>{const f=O(x.key).rarity;s[f].total++,c.includes(r)&&s[f].current++})),[a,c]),{lockedTotal:E,equippedTotal:C,locationTotal:_}=t.useMemo(()=>{const s={lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"],locationTotal:[...xe,""]};return ie(s,r=>a.weapons.entries.forEach(([x,f])=>{const v=f.location,m=f.lock?"locked":"unlocked",b=v?"equipped":"unequipped";r.lockedTotal[m].total++,r.equippedTotal[b].total++,r.locationTotal[v].total++,c.includes(x)&&(r.lockedTotal[m].current++,r.equippedTotal[b].current++,r.locationTotal[v].current++)}))},[a,c]);return e(J,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(L,{variant:"h6",children:e(k,{t:p,i18nKey:"weaponFilter",children:"Weapon Filter"})})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(L,{children:[e("strong",{children:u})," / ",o]})}),e(h,{item:!0,children:e(T,{size:"small",color:"error",onClick:()=>a.displayWeapon.set({action:"reset"}),startIcon:e(ce,{}),children:e(k,{t:p,i18nKey:"ui:reset"})})})]}),e(B,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(k,{t:p,i18nKey:"subheadings.general"}),l(U,{spacing:1,children:[e(H,{sx:{bgcolor:V.palette.contentNormal.light}}),e(re,{fullWidth:!0,onChange:s=>a.displayWeapon.set({weaponType:s}),value:I,totals:w,size:"small"}),e(pe,{sx:{height:"100%"},fullWidth:!0,onChange:s=>a.displayWeapon.set({rarity:s}),value:K,totals:W,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l(B,{children:[e(k,{t:p,i18nKey:"subheadings.inventory"}),l(U,{spacing:1,children:[e(H,{sx:{bgcolor:V.palette.contentNormal.light}}),e(de,{fullWidth:!0,value:d,size:"small",children:oe.map((s,r)=>l(ue,{value:s,sx:{display:"flex",gap:1},onClick:()=>a.displayWeapon.set({locked:Ne(d,s)}),children:[r?e(Z,{}):e(X,{}),e(k,{t:p,i18nKey:`ui:${s}`}),e(z,{label:E[r?"unlocked":"locked"],size:"small"})]},s))}),l(T,{startIcon:e(he,{}),color:S?"success":"secondary",onClick:()=>a.displayWeapon.set({showInventory:!S}),children:[p`weaponInInv`," ",e(z,{sx:{ml:1},label:C.unequipped,size:"small"})]}),l(T,{startIcon:e(me,{}),color:i?"success":"secondary",onClick:()=>a.displayWeapon.set({showEquipped:!i}),children:[p`equippedWeapon`," ",e(z,{sx:{ml:1},label:C.equipped,size:"small"})]})]}),e(U,{spacing:1.5,pt:1.5,children:e(t.Suspense,{fallback:null,children:e(fe,{title:i?p`locationsTooltip`:"",placement:"top",children:e("span",{children:e(ye,{totals:_,locations:i?[]:D,setLocations:s=>a.displayWeapon.set({locations:s}),disabled:i})})})})})]})})]})})]})})}function ze({weaponIds:u}){const{t:o}=R(["page_weapon","ui"]),c=j(),{numDelete:p,numUnlock:a,numLock:g}=t.useMemo(()=>{const d=u.map(w=>c.weapons.get(w)),i=d.reduce((w,W)=>w+(W.lock?0:1),0),S=d.length-i;return{numDelete:d.reduce((w,W)=>w+(W.lock||W.location?0:1),0),numUnlock:i,numLock:S}},[u,c]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to delete ${p} weapons?`)&&u.map(d=>{const i=c.weapons.get(d);!(i!=null&&i.lock)&&!(i!=null&&i.location)&&c.weapons.remove(d)}),startIcon:e(ke,{}),children:[e(k,{t:o,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(A,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!g,onClick:()=>window.confirm(`Are you sure you want to unlock ${g} weapons ?`)&&u.map(d=>c.weapons.set(d,{lock:!1})),startIcon:e(Z,{}),children:[e(k,{t:o,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(A,{sx:{ml:1},color:g?"success":"secondary",children:g})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!a,onClick:()=>window.confirm(`Are you sure you want to lock ${a} weapons ?`)&&u.map(d=>c.weapons.set(d,{lock:!0})),startIcon:e(X,{}),children:[e(k,{t:o,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(A,{sx:{ml:1},color:a?"success":"secondary",children:a})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(L,{variant:"caption",color:"text.secondary",children:l(k,{t:o,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const Ae={xs:1,sm:2,md:3,lg:3,xl:4},Le={xs:10,sm:12,md:24,lg:24,xl:24},Re=Object.keys(ee);function Pe(){const{t:u}=R(["page_weapon","ui","weaponNames_gen"]),o=j(),[c,p]=t.useState(o.displayWeapon.get());t.useEffect(()=>o.displayWeapon.follow((n,y)=>p(y)),[o]);const[a,g]=t.useState(!1),[q,I]=be();t.useEffect(()=>(Te.send({hitType:"pageview",page:"/weapon"}),o.weapons.followAny((n,y)=>(y==="new"||y==="remove"||y==="update")&&I())),[I,o]);const K=Se(),d=t.useCallback(async n=>{const y=o.weapons.get(n);if(!y)return;const N=u(`weaponNames_gen:${y.key}`);window.confirm(u("removeWeapon",{value:N}))&&(o.weapons.remove(n),c.editWeaponId===n&&o.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,o,u]),i=t.useCallback(n=>{o.displayWeapon.set({editWeaponId:n})},[o]),S=t.useCallback(n=>{i(o.weapons.new(Ce(n)))},[o,i]),[D,w]=t.useState(""),W=t.useDeferredValue(D),{sortType:E,ascending:C,weaponType:_,rarity:s,locked:r,showEquipped:x,showInventory:f,locations:v}=c,{weaponIds:m,totalWeaponNum:b}=t.useMemo(()=>{const n=o.weapons.values,y=n.length,N=n.filter(ve({weaponType:_,rarity:s,name:W,locked:r,showInventory:f,showEquipped:x,locations:v},$e())).sort(qe(ee[E]??[],C,Be())).map(le=>le.id);return q&&{weaponIds:N,totalWeaponNum:y}},[q,o,E,C,s,_,r,f,x,v,W]),{numShow:P,setTriggerElement:ne}=Ie(Le[K],m.length),F=t.useMemo(()=>m.slice(0,P),[m,P]),ae=m.length!==b?`${m.length}/${b}`:`${b}`,M=t.useCallback(()=>o.displayWeapon.set({editWeaponId:""}),[o]),{editWeaponId:$}=c;t.useEffect(()=>{$&&(o.weapons.get($)||M())},[o,$,M]);const te={numShowing:F.length,total:ae,t:u,namespace:"page_weapon"},se={sortKeys:[...Re],value:E,onChange:n=>o.displayWeapon.set({sortType:n}),ascending:C,onChangeAsc:n=>o.displayWeapon.set({ascending:n})};return l(B,{display:"flex",flexDirection:"column",gap:1,children:[e(t.Suspense,{fallback:!1,children:e(Fe,{show:a,onHide:()=>g(!1),onSelect:S})}),e(t.Suspense,{fallback:!1,children:e(Me,{weaponId:$,footer:!0,onClose:M})}),e(Ue,{numShowing:m.length,total:b,weaponIds:m}),e(J,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(B,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(De,{autoFocus:!0,size:"small",value:D,onChange:n=>w(n.target.value),label:u("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(Ee,{showingTextProps:te,sortByButtonProps:se})]}),e(ze,{weaponIds:m})]})}),l(t.Suspense,{fallback:e(Q,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(T,{fullWidth:!0,onClick:()=>g(!0),color:"info",startIcon:e(Ke,{}),children:u("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:Ae,children:F.map(n=>e(h,{item:!0,xs:1,children:e(_e,{weaponId:n,onDelete:d,onEdit:i,canEquip:!0})},n))})]}),m.length!==F.length&&e(Q,{ref:n=>{n&&ne(n)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Pe as default};
