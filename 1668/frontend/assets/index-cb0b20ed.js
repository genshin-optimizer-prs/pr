import{u as Z,b as ee,e as t,X as ae,M as te,ae as ne,n as m,p as n,C as R,K as i,t as A,B as oe,J as j,R as se,_ as z,a0 as re,h as le,af as pe,U as ie}from"./index-195ef3cd.js";import{u as ce,P as N,A as de}from"./LocationAutocomplete-aca95dd9.js";import{f as ue,s as me,T as ge}from"./StarDisplay-350fc356.js";import{W as fe,a as we,b as he,w as B,c as ye,d as We}from"./WeaponCard-9e49a559.js";import{g as F}from"./index-a32d2a34.js";import{c as O}from"./totalUtils-d107b6bc.js";import"./index-09a8d5ff.js";import"./ColoredText-02831cf8.js";import"./SqBadge-702da3c1.js";import"./DropdownButton-c75ceb66.js";import"./useWeapon-3eea01fd.js";import"./CardActionArea-5feeeed2.js";const xe=se.lazy(()=>z(()=>import("./WeaponSelectionModal-c3c2098a.js"),["./WeaponSelectionModal-c3c2098a.js","./index-195ef3cd.js","./index-0e21804b.css","./index-09a8d5ff.js","./ColoredText-02831cf8.js","./SqBadge-702da3c1.js","./index-a32d2a34.js","./totalUtils-d107b6bc.js","./CloseButton-5c9b1c20.js","./StarDisplay-350fc356.js","./DropdownButton-c75ceb66.js","./WeaponCard-9e49a559.js","./useWeapon-3eea01fd.js","./LocationAutocomplete-aca95dd9.js","./CardActionArea-5feeeed2.js"],import.meta.url)),Se=t.lazy(()=>z(()=>import("./WeaponEditor-de52eaa2.js").then(l=>l.a),["./WeaponEditor-de52eaa2.js","./index-195ef3cd.js","./index-0e21804b.css","./index-09a8d5ff.js","./ColoredText-02831cf8.js","./SqBadge-702da3c1.js","./useWeapon-3eea01fd.js","./StarDisplay-350fc356.js","./DropdownButton-c75ceb66.js","./LocationAutocomplete-aca95dd9.js","./CloseButton-5c9b1c20.js","./FieldDisplay-0a9752ed.js","./BootstrapTooltip-7758b165.js","./Groups-543a7557.js","./InfoTooltip-f4da1b36.js","./index-a32d2a34.js","./CardHeader-a63af426.js"],import.meta.url)),Te={xs:1,sm:2,md:3,lg:3,xl:4},Ie={xs:10,sm:12,md:24,lg:24,xl:24},Ce=Object.keys(B);function Fe(){const{t:l}=Z(["page_weapon","ui","weaponNames_gen"]),a=ee(),[c,K]=t.useState(a.displayWeapon.get());t.useEffect(()=>a.displayWeapon.follow((e,o)=>K(o)),[a]);const[L,T]=t.useState(!1),[I,C]=ae(),g=t.useRef(null),[b,P]=t.useState(0);t.useEffect(()=>(te.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,o)=>(o==="new"||o==="remove")&&C())),[C,a]);const U=ce(),d=Ie[U],V=t.useCallback(async e=>{const o=a.weapons.get(e);if(!o)return;const s=l(`weaponNames_gen:${o.key}`);window.confirm(l("removeWeapon",{value:s}))&&(a.weapons.remove(e),c.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,a,l]),f=t.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),$=t.useCallback(e=>{f(a.weapons.new(ne(e)))},[a,f]),[_,G]=t.useState(""),v=t.useDeferredValue(_),{sortType:w,ascending:h,weaponType:y,rarity:W}=c,{weaponIdList:r,totalWeaponNum:x}=t.useMemo(()=>{const e=a.weapons.values,o=e.length,s=e.filter(ue({weaponType:y,rarity:W,name:v},ye())).sort(me(B[w]??[],h,We())).map(p=>p.id);return I&&{weaponIdList:s,totalWeaponNum:o}},[I,a,w,h,W,y,v]),{weaponIdsToShow:k,numPages:E,currentPageIndex:H}=t.useMemo(()=>{const e=Math.ceil(r.length/d),o=re(b,0,e-1);return{weaponIdsToShow:r.slice(o*d,(o+1)*d),numPages:e,currentPageIndex:o}},[r,b,d]),q=r.length!==x?`${r.length}/${x}`:`${x}`,J=t.useCallback((e,o)=>{var s;(s=g.current)==null||s.scrollIntoView({behavior:"smooth"}),P(o-1)},[P,g]),S=t.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:u}=c;t.useEffect(()=>{u&&(a.weapons.get(u)||S())},[a,u,S]);const Q=t.useMemo(()=>O(le,e=>Object.entries(a.weapons.data).forEach(([o,s])=>{const p=F(s.key).weaponType;e[p].total++,r.includes(o)&&e[p].current++})),[a,r]),X=t.useMemo(()=>O(pe,e=>Object.entries(a.weapons.data).forEach(([o,s])=>{const p=F(s.key).rarity;e[p].total++,r.includes(o)&&e[p].current++})),[a,r]),M={count:E,page:H+1,onChange:J},D={numShowing:k.length,total:q,t:l,namespace:"page_weapon"},Y={sortKeys:[...Ce],value:w,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:h,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return m(i,{my:1,display:"flex",flexDirection:"column",gap:1,children:[n(t.Suspense,{fallback:!1,children:n(xe,{show:L,onHide:()=>T(!1),onSelect:$})}),n(t.Suspense,{fallback:!1,children:n(Se,{weaponId:u,footer:!0,onClose:S})}),n(A,{ref:g,children:m(R,{sx:{display:"flex",flexDirection:"column",gap:1},children:[m(i,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[n(fe,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:y,totals:Q,size:"small"}),n(we,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:W,totals:X,size:"small"}),n(i,{flexGrow:1}),n(ge,{autoFocus:!0,size:"small",value:_,onChange:e=>G(e.target.value),label:l("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),n(i,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:n(N,{paginationProps:M,showingTextProps:D,displaySort:!0,sortByButtonProps:Y})})]})}),m(t.Suspense,{fallback:n(ie,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[n(oe,{fullWidth:!0,onClick:()=>T(!0),color:"info",startIcon:n(de,{}),children:l("page_weapon:addWeapon")}),n(j,{container:!0,spacing:1,columns:Te,children:k.map(e=>n(j,{item:!0,xs:1,children:n(he,{weaponId:e,onDelete:V,onEdit:f,canEquip:!0})},e))})]}),E>1&&n(A,{children:n(R,{children:n(i,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:n(N,{paginationProps:M,showingTextProps:D})})})})]})}export{Fe as default};
