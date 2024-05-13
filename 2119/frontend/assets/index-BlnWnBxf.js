import{u as A,b as R,d as t,aR as P,aS as le,q as e,p as l,V as h,T as U,Y as k,B as b,a6 as re,W as $,ag as G,D as H,aT as L,aU as ce,aV as ie,aW as de,aX as pe,aa as X,ab as Y,v as N,aY as ue,aZ as he,s as Q,w as Z,a_ as me,k as V,h as fe,a$ as ge,a9 as ye,a8 as z,ad as we,X as We,am as ke,b0 as xe,ap as be,aq as Te,ar as Se,b1 as Ce,av as ve,as as qe,b2 as Ie,b3 as J,b4 as De,b5 as Ee,b6 as Ke,b7 as _e,a3 as O}from"./index-Byit0zF2.js";const ee=["locked","unlocked"],$e=me([...ee]);function Me({numShowing:p,total:n,weaponIds:r}){const{t:u}=A(["page_weapon","ui"]),o=R(),[g,C]=t.useState(o.displayWeapon.get());t.useEffect(()=>{o.displayWeapon.follow((s,i)=>C(i))},[o]);const{weaponType:v,rarity:E,locked:d,showEquipped:c,showInventory:T}=g,q=t.useMemo(()=>P(fe,s=>o.weapons.entries.forEach(([i,x])=>{const m=V(x.key).weaponType;s[m].total++,r.includes(i)&&s[m].current++})),[o,r]),y=t.useMemo(()=>P(ge,s=>o.weapons.entries.forEach(([i,x])=>{const m=V(x.key).rarity;s[m].total++,r.includes(i)&&s[m].current++})),[o,r]),{lockedTotal:w,equippedTotal:S}=t.useMemo(()=>le({lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"]},i=>o.weapons.entries.forEach(([x,m])=>{const I=m.lock?"locked":"unlocked",D=m.location?"equipped":"unequipped";i.lockedTotal[I].total++,i.equippedTotal[D].total++,r.includes(x)&&(i.lockedTotal[I].current++,i.equippedTotal[D].current++)})),[o,r]);return e(Z,{children:l(Q,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(U,{variant:"h6",children:e(k,{t:u,i18nKey:"weaponFilter",children:"Weapon Filter"})})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(U,{children:[e("strong",{children:p})," / ",n]})}),e(h,{item:!0,children:e(b,{size:"small",color:"error",onClick:()=>o.displayWeapon.set({action:"reset"}),startIcon:e(re,{}),children:e(k,{t:u,i18nKey:"ui:reset"})})})]}),e($,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(k,{t:u,i18nKey:"subheadings.general"}),l(G,{spacing:1,children:[e(H,{sx:{bgcolor:L.palette.contentNormal.light}}),e(ce,{fullWidth:!0,onChange:s=>o.displayWeapon.set({weaponType:s}),value:v,totals:q,size:"small"}),e(ie,{sx:{height:"100%"},fullWidth:!0,onChange:s=>o.displayWeapon.set({rarity:s}),value:E,totals:y,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l($,{children:[e(k,{t:u,i18nKey:"subheadings.inventory"}),l(G,{spacing:1,children:[e(H,{sx:{bgcolor:L.palette.contentNormal.light}}),e(de,{fullWidth:!0,value:d,size:"small",children:ee.map((s,i)=>l(pe,{value:s,sx:{display:"flex",gap:1},onClick:()=>o.displayWeapon.set({locked:$e(d,s)}),children:[i?e(X,{}):e(Y,{}),e(k,{t:u,i18nKey:`ui:${s}`}),e(N,{label:w[i?"unlocked":"locked"],size:"small"})]},s))}),l(b,{startIcon:e(ue,{}),color:T?"success":"secondary",onClick:()=>o.displayWeapon.set({showInventory:!T}),children:[u`weaponInInv`," ",e(N,{sx:{ml:1},label:S.unequipped,size:"small"})]}),l(b,{startIcon:e(he,{}),color:c?"success":"secondary",onClick:()=>o.displayWeapon.set({showEquipped:!c}),children:[u`equippedWeapon`," ",e(N,{sx:{ml:1},label:S.equipped,size:"small"})]})]})]})})]})})]})})}function Be({weaponIds:p}){const{t:n}=A(["page_weapon","ui"]),r=R(),{numDelete:u,numUnlock:o,numLock:g}=t.useMemo(()=>{const d=p.map(y=>r.weapons.get(y)),c=d.reduce((y,w)=>y+(w.lock?0:1),0),T=d.length-c;return{numDelete:d.reduce((y,w)=>y+(w.lock||w.location?0:1),0),numUnlock:c,numLock:T}},[p,r]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(b,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to delete ${u} weapons?`)&&p.map(d=>{const c=r.weapons.get(d);!(c!=null&&c.lock)&&!(c!=null&&c.location)&&r.weapons.remove(d)}),startIcon:e(ye,{}),children:[e(k,{t:n,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(z,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(b,{fullWidth:!0,color:"error",disabled:!g,onClick:()=>window.confirm(`Are you sure you want to unlock ${g} weapons ?`)&&p.map(d=>r.weapons.set(d,{lock:!1})),startIcon:e(X,{}),children:[e(k,{t:n,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(z,{sx:{ml:1},color:g?"success":"secondary",children:g})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(b,{fullWidth:!0,color:"error",disabled:!o,onClick:()=>window.confirm(`Are you sure you want to lock ${o} weapons ?`)&&p.map(d=>r.weapons.set(d,{lock:!0})),startIcon:e(Y,{}),children:[e(k,{t:n,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(z,{sx:{ml:1},color:o?"success":"secondary",children:o})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(U,{variant:"caption",color:"text.secondary",children:l(k,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const Fe={xs:1,sm:2,md:3,lg:3,xl:4},Ne={xs:10,sm:12,md:24,lg:24,xl:24},ze=Object.keys(J);function Ae(){const{t:p}=A(["page_weapon","ui","weaponNames_gen"]),n=R(),[r,u]=t.useState(n.displayWeapon.get());t.useEffect(()=>n.displayWeapon.follow((a,f)=>u(f)),[n]);const[o,g]=t.useState(!1),[C,v]=we();t.useEffect(()=>(We.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny((a,f)=>(f==="new"||f==="remove"||f==="update")&&v())),[v,n]);const E=ke(),d=t.useCallback(async a=>{const f=n.weapons.get(a);if(!f)return;const F=p(`weaponNames_gen:${f.key}`);window.confirm(p("removeWeapon",{value:F}))&&(n.weapons.remove(a),r.editWeaponId===a&&n.displayWeapon.set({editWeaponId:""}))},[r.editWeaponId,n,p]),c=t.useCallback(a=>{n.displayWeapon.set({editWeaponId:a})},[n]),T=t.useCallback(a=>{c(n.weapons.new(xe(a)))},[n,c]),[q,y]=t.useState(""),w=t.useDeferredValue(q),{sortType:S,ascending:s,weaponType:i,rarity:x,locked:m,showEquipped:I,showInventory:D}=r,{weaponIds:W,totalWeaponNum:K}=t.useMemo(()=>{const a=n.weapons.values,f=a.length,F=a.filter(be({weaponType:i,rarity:x,name:w,locked:m,showInventory:D,showEquipped:I},De())).sort(Te(J[S]??[],s,Ee())).map(se=>se.id);return C&&{weaponIds:F,totalWeaponNum:f}},[C,n,S,s,x,i,m,D,I,w]),{numShow:j,setTriggerElement:ne}=Se(Ne[E],W.length),M=t.useMemo(()=>W.slice(0,j),[W,j]),ae=W.length!==K?`${W.length}/${K}`:`${K}`,B=t.useCallback(()=>n.displayWeapon.set({editWeaponId:""}),[n]),{editWeaponId:_}=r;t.useEffect(()=>{_&&(n.weapons.get(_)||B())},[n,_,B]);const oe={numShowing:M.length,total:ae,t:p,namespace:"page_weapon"},te={sortKeys:[...ze],value:S,onChange:a=>n.displayWeapon.set({sortType:a}),ascending:s,onChangeAsc:a=>n.displayWeapon.set({ascending:a})};return l($,{display:"flex",flexDirection:"column",gap:1,children:[e(t.Suspense,{fallback:!1,children:e(Ke,{show:o,onHide:()=>g(!1),onSelect:T})}),e(t.Suspense,{fallback:!1,children:e(_e,{weaponId:_,footer:!0,onClose:B})}),e(Me,{numShowing:W.length,total:K,weaponIds:W}),e(Z,{children:l(Q,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l($,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(Ce,{autoFocus:!0,size:"small",value:q,onChange:a=>y(a.target.value),label:p("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(ve,{showingTextProps:oe,sortByButtonProps:te})]}),e(Be,{weaponIds:W})]})}),l(t.Suspense,{fallback:e(O,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(b,{fullWidth:!0,onClick:()=>g(!0),color:"info",startIcon:e(qe,{}),children:p("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:Fe,children:M.map(a=>e(h,{item:!0,xs:1,children:e(Ie,{weaponId:a,onDelete:d,onEdit:c,canEquip:!0})},a))})]}),W.length!==M.length&&e(O,{ref:a=>{a&&ne(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Ae as default};
