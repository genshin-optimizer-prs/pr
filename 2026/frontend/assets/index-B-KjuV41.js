import{u as G,b as V,d as n,ad as H,X as O,ao as Q,aP as X,aq as Y,ar as Z,as as J,aQ as v,p as d,q as s,s as L,W as u,aR as ee,aS as ae,aT as ne,av as se,w as te,at as oe,B as le,V as E,aU as re,aV as D,aW as pe,aX as ie,k as M,h as ce,aY as de,aZ as ue,a_ as we,a3 as _}from"./index-C3yTKG_P.js";const he={xs:1,sm:2,md:3,lg:3,xl:4},ge={xs:10,sm:12,md:24,lg:24,xl:24},fe=Object.keys(D);function We(){const{t:p}=G(["page_weapon","ui","weaponNames_gen"]),a=V(),[i,F]=n.useState(a.displayWeapon.get());n.useEffect(()=>a.displayWeapon.follow((e,t)=>F(t)),[a]);const[N,S]=n.useState(!1),[T,C]=H();n.useEffect(()=>(O.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,t)=>(t==="new"||t==="remove")&&C())),[C,a]);const P=Q(),R=n.useCallback(async e=>{const t=a.weapons.get(e);if(!t)return;const l=p(`weaponNames_gen:${t.key}`);window.confirm(p("removeWeapon",{value:l}))&&(a.weapons.remove(e),i.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[i.editWeaponId,a,p]),w=n.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),B=n.useCallback(e=>{w(a.weapons.new(X(e)))},[a,w]),[b,j]=n.useState(""),I=n.useDeferredValue(b),{sortType:h,ascending:g,weaponType:f,rarity:m}=i,{weaponIds:o,totalWeaponNum:W}=n.useMemo(()=>{const e=a.weapons.values,t=e.length,l=e.filter(Y({weaponType:f,rarity:m,name:I},pe())).sort(Z(D[h]??[],g,ie())).map(r=>r.id);return T&&{weaponIds:l,totalWeaponNum:t}},[T,a,h,g,m,f,I]),{numShow:k,setTriggerElement:A}=J(ge[P],o.length),y=n.useMemo(()=>o.slice(0,k),[o,k]),K=o.length!==W?`${o.length}/${W}`:`${W}`,x=n.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:c}=i;n.useEffect(()=>{c&&(a.weapons.get(c)||x())},[a,c,x]);const U=n.useMemo(()=>v(ce,e=>a.weapons.entries.forEach(([t,l])=>{const r=M(l.key).weaponType;e[r].total++,o.includes(t)&&e[r].current++})),[a,o]),$=n.useMemo(()=>v(de,e=>a.weapons.entries.forEach(([t,l])=>{const r=M(l.key).rarity;e[r].total++,o.includes(t)&&e[r].current++})),[a,o]),q={numShowing:y.length,total:K,t:p,namespace:"page_weapon"},z={sortKeys:[...fe],value:h,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:g,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return d(u,{my:1,display:"flex",flexDirection:"column",gap:1,children:[s(n.Suspense,{fallback:!1,children:s(ue,{show:N,onHide:()=>S(!1),onSelect:B})}),s(n.Suspense,{fallback:!1,children:s(we,{weaponId:c,footer:!0,onClose:x})}),s(te,{children:d(L,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(u,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[s(ee,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:f,totals:U,size:"small"}),s(ae,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:m,totals:$,size:"small"}),s(u,{flexGrow:1}),s(ne,{autoFocus:!0,size:"small",value:b,onChange:e=>j(e.target.value),label:p("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),s(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:s(se,{showingTextProps:q,sortByButtonProps:z})})]})}),d(n.Suspense,{fallback:s(_,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[s(le,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:s(oe,{}),children:p("page_weapon:addWeapon")}),s(E,{container:!0,spacing:1,columns:he,children:y.map(e=>s(E,{item:!0,xs:1,children:s(re,{weaponId:e,onDelete:R,onEdit:w,canEquip:!0})},e))})]}),o.length!==y.length&&s(_,{ref:e=>{e&&A(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{We as default};
