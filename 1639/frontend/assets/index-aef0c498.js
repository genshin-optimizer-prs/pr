import{u as J,b as Q,e as t,X,M as Y,ae as Z,n as u,p as o,C as ee,K as m,t as ae,B as te,J as D,R as oe,_ as N,h as ne,af as se,U as R}from"./index-0e45aa05.js";import{u as re,f as le,s as ie,a as pe,T as ce,S as de}from"./StarDisplay-834636c2.js";import{W as ue,a as me,b as fe,w as O,c as he,d as we}from"./WeaponCard-bebe67ad.js";import{g as A}from"./index-704a548b.js";import{c as P}from"./totalUtils-de896fbd.js";import{A as ge}from"./LocationAutocomplete-ace90057.js";import"./DropdownButton-f7efa864.js";import"./ColoredText-7ceb3fc4.js";import"./index-882712de.js";import"./SqBadge-e1531f11.js";import"./useWeapon-53dbf3db.js";import"./CardActionArea-12779735.js";const ye=oe.lazy(()=>N(()=>import("./WeaponSelectionModal-8af08468.js"),["./WeaponSelectionModal-8af08468.js","./index-0e45aa05.js","./index-f124a3ca.css","./index-882712de.js","./ColoredText-7ceb3fc4.js","./SqBadge-e1531f11.js","./index-704a548b.js","./totalUtils-de896fbd.js","./CloseButton-16202e80.js","./StarDisplay-834636c2.js","./DropdownButton-f7efa864.js","./WeaponCard-bebe67ad.js","./useWeapon-53dbf3db.js","./LocationAutocomplete-ace90057.js","./CardActionArea-12779735.js"],import.meta.url)),We=t.lazy(()=>N(()=>import("./WeaponEditor-faf89bf3.js").then(r=>r.a),["./WeaponEditor-faf89bf3.js","./index-0e45aa05.js","./index-f124a3ca.css","./index-882712de.js","./ColoredText-7ceb3fc4.js","./SqBadge-e1531f11.js","./useWeapon-53dbf3db.js","./StarDisplay-834636c2.js","./DropdownButton-f7efa864.js","./LocationAutocomplete-ace90057.js","./CloseButton-16202e80.js","./FieldDisplay-a22fa596.js","./BootstrapTooltip-7e9db05a.js","./Groups-b0b059cb.js","./InfoTooltip-73a6ee3d.js","./index-704a548b.js","./CardHeader-0fd83aa1.js"],import.meta.url)),Se={xs:1,sm:2,md:3,lg:3,xl:4},b={xs:10,sm:12,md:24,lg:24,xl:24},xe=Object.keys(O);function Ne(){const{t:r}=J(["page_weapon","ui","weaponNames_gen"]),a=Q(),[c,j]=t.useState(a.displayWeapon.get());t.useEffect(()=>a.displayWeapon.follow((e,n)=>j(n)),[a]);const[F,C]=t.useState(!1),[_,E]=X();t.useEffect(()=>(Y.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,n)=>(n==="new"||n==="remove")&&E())),[E,a]);const p=re(),z=t.useCallback(async e=>{const n=a.weapons.get(e);if(!n)return;const l=r(`weaponNames_gen:${n.key}`);window.confirm(r("removeWeapon",{value:l}))&&(a.weapons.remove(e),c.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,a,r]),f=t.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),B=t.useCallback(e=>{f(a.weapons.new(Z(e)))},[a,f]),[I,K]=t.useState(""),v=t.useDeferredValue(I),{sortType:h,ascending:w,weaponType:g,rarity:y}=c,{weaponIds:s,totalWeaponNum:W}=t.useMemo(()=>{const e=a.weapons.values,n=e.length,l=e.filter(le({weaponType:g,rarity:y,name:v},he())).sort(ie(O[h]??[],w,we())).map(i=>i.id);return _&&{weaponIds:l,totalWeaponNum:n}},[_,a,h,w,y,g,v]),[S,k]=t.useState(b[p]);t.useEffect(()=>{s&&k(b[p])},[s,p]);const[U,$]=t.useState(),M=pe(U)&&S<s.length;t.useEffect(()=>{M&&k(e=>e+b[p])},[M,p]);const x=t.useMemo(()=>s.slice(0,S),[s,S]),G=s.length!==W?`${s.length}/${W}`:`${W}`,T=t.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:d}=c;t.useEffect(()=>{d&&(a.weapons.get(d)||T())},[a,d,T]);const V=t.useMemo(()=>P(ne,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const i=A(l.key).weaponType;e[i].total++,s.includes(n)&&e[i].current++})),[a,s]),H=t.useMemo(()=>P(se,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const i=A(l.key).rarity;e[i].total++,s.includes(n)&&e[i].current++})),[a,s]),L={numShowing:x.length,total:G,t:r,namespace:"page_weapon"},q={sortKeys:[...xe],value:h,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:w,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return u(m,{my:1,display:"flex",flexDirection:"column",gap:1,children:[o(t.Suspense,{fallback:!1,children:o(ye,{show:F,onHide:()=>C(!1),onSelect:B})}),o(t.Suspense,{fallback:!1,children:o(We,{weaponId:d,footer:!0,onClose:T})}),o(ae,{children:u(ee,{sx:{display:"flex",flexDirection:"column",gap:1},children:[u(m,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[o(ue,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:g,totals:V,size:"small"}),o(me,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:y,totals:H,size:"small"}),o(m,{flexGrow:1}),o(ce,{autoFocus:!0,size:"small",value:I,onChange:e=>K(e.target.value),label:r("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),o(m,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:o(de,{showingTextProps:L,sortByButtonProps:q})})]})}),u(t.Suspense,{fallback:o(R,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[o(te,{fullWidth:!0,onClick:()=>C(!0),color:"info",startIcon:o(ge,{}),children:r("page_weapon:addWeapon")}),o(D,{container:!0,spacing:1,columns:Se,children:x.map(e=>o(D,{item:!0,xs:1,children:o(fe,{weaponId:e,onDelete:z,onEdit:f,canEquip:!0})},e))})]}),s.length!==x.length&&o(R,{ref:e=>{e&&$(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Ne as default};
