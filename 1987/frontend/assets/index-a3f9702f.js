import{u as z,d as G,e as n,ad as H,Y as Q,ao as V,aP as X,aq as Y,ar as Z,as as J,aQ as v,q as d,s as t,t as L,X as u,aR as ee,aS as ae,aT as ne,av as te,x as se,at as oe,B as le,W as E,aU as re,aV as j,aW as pe,aX as ie,l as M,k as ce,aY as de,aZ as ue,a_ as we,a3 as _}from"./index-6871c79c.js";const ge={xs:1,sm:2,md:3,lg:3,xl:4},he={xs:10,sm:12,md:24,lg:24,xl:24},fe=Object.keys(j);function We(){const{t:p}=z(["page_weapon","ui","weaponNames_gen"]),a=G(),[i,D]=n.useState(a.displayWeapon.get());n.useEffect(()=>a.displayWeapon.follow((e,s)=>D(s)),[a]);const[F,S]=n.useState(!1),[T,C]=H();n.useEffect(()=>(Q.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,s)=>(s==="new"||s==="remove")&&C())),[C,a]);const N=V(),P=n.useCallback(async e=>{const s=a.weapons.get(e);if(!s)return;const l=p(`weaponNames_gen:${s.key}`);window.confirm(p("removeWeapon",{value:l}))&&(a.weapons.remove(e),i.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[i.editWeaponId,a,p]),w=n.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),R=n.useCallback(e=>{w(a.weapons.new(X(e)))},[a,w]),[b,B]=n.useState(""),I=n.useDeferredValue(b),{sortType:g,ascending:h,weaponType:f,rarity:m}=i,{weaponIds:o,totalWeaponNum:W}=n.useMemo(()=>{const e=a.weapons.values,s=e.length,l=e.filter(Y({weaponType:f,rarity:m,name:I},pe())).sort(Z(j[g]??[],h,ie())).map(r=>r.id);return T&&{weaponIds:l,totalWeaponNum:s}},[T,a,g,h,m,f,I]),{numShow:k,setTriggerElement:A}=J(he[N],o.length),y=n.useMemo(()=>o.slice(0,k),[o,k]),K=o.length!==W?`${o.length}/${W}`:`${W}`,x=n.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:c}=i;n.useEffect(()=>{c&&(a.weapons.get(c)||x())},[a,c,x]);const O=n.useMemo(()=>v(ce,e=>Object.entries(a.weapons.data).forEach(([s,l])=>{const r=M(l.key).weaponType;e[r].total++,o.includes(s)&&e[r].current++})),[a,o]),U=n.useMemo(()=>v(de,e=>Object.entries(a.weapons.data).forEach(([s,l])=>{const r=M(l.key).rarity;e[r].total++,o.includes(s)&&e[r].current++})),[a,o]),$={numShowing:y.length,total:K,t:p,namespace:"page_weapon"},q={sortKeys:[...fe],value:g,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:h,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return d(u,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(n.Suspense,{fallback:!1,children:t(ue,{show:F,onHide:()=>S(!1),onSelect:R})}),t(n.Suspense,{fallback:!1,children:t(we,{weaponId:c,footer:!0,onClose:x})}),t(se,{children:d(L,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(u,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[t(ee,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:f,totals:O,size:"small"}),t(ae,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:m,totals:U,size:"small"}),t(u,{flexGrow:1}),t(ne,{autoFocus:!0,size:"small",value:b,onChange:e=>B(e.target.value),label:p("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),t(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(te,{showingTextProps:$,sortByButtonProps:q})})]})}),d(n.Suspense,{fallback:t(_,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[t(le,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:t(oe,{}),children:p("page_weapon:addWeapon")}),t(E,{container:!0,spacing:1,columns:ge,children:y.map(e=>t(E,{item:!0,xs:1,children:t(re,{weaponId:e,onDelete:P,onEdit:w,canEquip:!0})},e))})]}),o.length!==y.length&&t(_,{ref:e=>{e&&A(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{We as default};
