import{z as U,a as G,r as a,b5 as R,b6 as ie,b as e,d as l,G as h,T as j,ad as k,ag as T,an as ce,f as F,aw as M,N as P,b7 as O,b8 as re,b9 as de,ba as pe,bb as ue,ar as J,as as X,Q as A,bc as he,bd as me,B as fe,be as ge,O as Y,h as Z,bf as ye,I as Q,H as we,bg as We,aq as ke,ap as L,bh as be,at as xe,ac as Te,aC as Se,bi as Ce,aF as ve,aG as Ie,aH as qe,bj as Ee,aL as De,aI as Ke,bk as _e,bl as ee,bm as $e,bn as Fe,bo as Be,bp as Ne,S as V}from"./index-C4WqQX1e.js";const ne=["locked","unlocked"],ze=ye([...ne]);function Me({numShowing:u,total:n,weaponIds:c}){const{t:d}=U(["page_weapon","ui"]),t=G(),[y,I]=a.useState(t.displayWeapon.get());a.useEffect(()=>{t.displayWeapon.follow((s,r)=>I(r))},[t]);const{weaponType:q,rarity:K,locked:p,showEquipped:i,showInventory:S,locations:E}=y,w=a.useMemo(()=>R(we,s=>t.weapons.entries.forEach(([r,b])=>{const f=Q(b.key).weaponType;s[f].total++,c.includes(r)&&s[f].current++})),[t,c]),W=a.useMemo(()=>R(We,s=>t.weapons.entries.forEach(([r,b])=>{const f=Q(b.key).rarity;s[f].total++,c.includes(r)&&s[f].current++})),[t,c]),{lockedTotal:D,equippedTotal:C,locationTotal:_}=a.useMemo(()=>{const s={lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"],locationTotal:[...be,""]};return ie(s,r=>t.weapons.entries.forEach(([b,f])=>{const v=f.location,m=f.lock?"locked":"unlocked",x=v?"equipped":"unequipped";r.lockedTotal[m].total++,r.equippedTotal[x].total++,r.locationTotal[v].total++,c.includes(b)&&(r.lockedTotal[m].current++,r.equippedTotal[x].current++,r.locationTotal[v].current++)}))},[t,c]);return e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(j,{variant:"h6",children:e(k,{t:d,i18nKey:"weaponFilter",children:"Weapon Filter"})})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(j,{children:[e("strong",{children:u})," / ",n]})}),e(h,{item:!0,children:e(T,{size:"small",color:"error",onClick:()=>t.displayWeapon.set({action:"reset"}),startIcon:e(ce,{}),children:e(k,{t:d,i18nKey:"ui:reset"})})})]}),e(F,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(k,{t:d,i18nKey:"subheadings.general"}),l(M,{spacing:1,children:[e(P,{sx:{bgcolor:O.palette.contentNormal.light}}),e(re,{fullWidth:!0,onChange:s=>t.displayWeapon.set({weaponType:s}),value:q,totals:w,size:"small"}),e(de,{sx:{height:"100%"},fullWidth:!0,onChange:s=>t.displayWeapon.set({rarity:s}),value:K,totals:W,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l(F,{children:[e(k,{t:d,i18nKey:"subheadings.inventory"}),l(M,{spacing:1,children:[e(P,{sx:{bgcolor:O.palette.contentNormal.light}}),e(pe,{fullWidth:!0,value:p,size:"small",children:ne.map((s,r)=>l(ue,{value:s,sx:{display:"flex",gap:1},onClick:()=>t.displayWeapon.set({locked:ze(p,s)}),children:[r?e(J,{}):e(X,{}),e(k,{t:d,i18nKey:`ui:${s}`}),e(A,{label:D[r?"unlocked":"locked"],size:"small"})]},s))}),l(T,{startIcon:e(he,{}),color:S?"success":"secondary",onClick:()=>t.displayWeapon.set({showInventory:!S}),children:[d`weaponInInv`," ",e(A,{sx:{ml:1},label:C.unequipped,size:"small"})]}),l(T,{startIcon:e(me,{}),color:i?"success":"secondary",onClick:()=>t.displayWeapon.set({showEquipped:!i}),children:[d`equippedWeapon`," ",e(A,{sx:{ml:1},label:C.equipped,size:"small"})]})]}),e(M,{spacing:1.5,pt:1.5,children:e(a.Suspense,{fallback:null,children:e(fe,{title:i?d`locationsTooltip`:"",placement:"top",children:e("span",{children:e(ge,{totals:_,locations:i?[]:E,setLocations:s=>t.displayWeapon.set({locations:s}),disabled:i})})})})})]})})]})})]})})}function Ae({weaponIds:u}){const{t:n}=U(["page_weapon","ui"]),c=G(),{numDelete:d,numUnlock:t,numLock:y}=a.useMemo(()=>{const p=u.map(w=>c.weapons.get(w)),i=p.reduce((w,W)=>w+(W.lock?0:1),0),S=p.length-i;return{numDelete:p.reduce((w,W)=>w+(W.lock||W.location?0:1),0),numUnlock:i,numLock:S}},[u,c]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to delete ${d} weapons?`)&&u.map(p=>{const i=c.weapons.get(p);!(i!=null&&i.lock)&&!(i!=null&&i.location)&&c.weapons.remove(p)}),startIcon:e(ke,{}),children:[e(k,{t:n,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(L,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!y,onClick:()=>window.confirm(`Are you sure you want to unlock ${y} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!1})),startIcon:e(J,{}),children:[e(k,{t:n,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(L,{sx:{ml:1},color:y?"success":"secondary",children:y})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!t,onClick:()=>window.confirm(`Are you sure you want to lock ${t} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!0})),startIcon:e(X,{}),children:[e(k,{t:n,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(L,{sx:{ml:1},color:t?"success":"secondary",children:t})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(j,{variant:"caption",color:"text.secondary",children:l(k,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const Le={xs:1,sm:2,md:3,lg:3,xl:4},je={xs:10,sm:12,md:24,lg:24,xl:24},Ue=Object.keys(ee);function He(){const{t:u}=U(["page_weapon","ui","weaponNames_gen"]),n=G(),[c,d]=a.useState(n.displayWeapon.get());a.useEffect(()=>n.displayWeapon.follow((o,g)=>d(g)),[n]);const[t,y]=a.useState(!1),[I,q]=xe();a.useEffect(()=>(Te.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny((o,g)=>(g==="new"||g==="remove"||g==="update")&&q())),[q,n]);const K=Se(),p=a.useCallback(async o=>{const g=n.weapons.get(o);if(!g)return;const z=u(`weaponNames_gen:${g.key}`);window.confirm(u("removeWeapon",{value:z}))&&(n.weapons.remove(o),c.editWeaponId===o&&n.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,n,u]),i=a.useCallback(o=>{n.displayWeapon.set({editWeaponId:o})},[n]),S=a.useCallback(o=>{i(n.weapons.new(Ce(o)))},[n,i]),[E,w]=a.useState(""),W=a.useDeferredValue(E),{sortType:D,ascending:C,weaponType:_,rarity:s,locked:r,showEquipped:b,showInventory:f,locations:v}=c,{weaponIds:m,totalWeaponNum:x}=a.useMemo(()=>{const o=n.weapons.values,g=o.length,z=o.filter(ve({weaponType:_,rarity:s,name:W,locked:r,showInventory:f,showEquipped:b,locations:v},$e())).sort(Ie(ee[D]??[],C,Fe())).map(le=>le.id);return I&&{weaponIds:z,totalWeaponNum:g}},[I,n,D,C,s,_,r,f,b,v,W]),{numShow:H,setTriggerElement:oe}=qe(je[K],m.length),B=a.useMemo(()=>m.slice(0,H),[m,H]),te=m.length!==x?`${m.length}/${x}`:`${x}`,N=a.useCallback(()=>n.displayWeapon.set({editWeaponId:""}),[n]),{editWeaponId:$}=c;a.useEffect(()=>{$&&(n.weapons.get($)||N())},[n,$,N]);const ae={numShowing:B.length,total:te,t:u,namespace:"page_weapon"},se={sortKeys:[...Ue],value:D,onChange:o=>n.displayWeapon.set({sortType:o}),ascending:C,onChangeAsc:o=>n.displayWeapon.set({ascending:o})};return l(F,{display:"flex",flexDirection:"column",gap:1,children:[e(a.Suspense,{fallback:!1,children:e(Be,{show:t,onHide:()=>y(!1),onSelect:S})}),e(a.Suspense,{fallback:!1,children:e(Ne,{weaponId:$,footer:!0,onClose:N})}),e(Me,{numShowing:m.length,total:x,weaponIds:m}),e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(F,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(Ee,{autoFocus:!0,size:"small",value:E,onChange:o=>w(o.target.value),label:u("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(De,{showingTextProps:ae,sortByButtonProps:se})]}),e(Ae,{weaponIds:m})]})}),l(a.Suspense,{fallback:e(V,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(T,{fullWidth:!0,onClick:()=>y(!0),color:"info",startIcon:e(Ke,{}),children:u("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:Le,children:B.map(o=>e(h,{item:!0,xs:1,children:e(_e,{weaponId:o,onDelete:p,onEdit:i,canEquip:!0})},o))})]}),m.length!==B.length&&e(V,{ref:o=>{o&&oe(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{He as default};
