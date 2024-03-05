import{b as R,aE as A,ag as O,e as s,aF as ue,u as me,a9 as de,X as fe,M as ge,d as ye,ap as Ce,n as d,p as t,C as $,J as h,K as C,t as B,B as v,U as xe,am as we,D as Te,a0 as be,h as Se,f as ve,aG as ke}from"./index-f1a0c3c5.js";import{u as De,P as G}from"./LocationAutocomplete-ce1bf917.js";import{f as Ke,s as We,T as Me}from"./StarDisplay-8a6cb423.js";import{d as L,C as Pe}from"./TeamCard-b738cc0c.js";import{E as Ie,C as Ee,D as Ne,c as z,a as je,b as Fe,d as _e,e as $e}from"./CharacterRarityToggle-6da36ba3.js";import{W as Be}from"./WeaponCard-dba39047.js";import{g as k}from"./index-afa4da0b.js";import{g as Ge}from"./index-57b62488.js";import{c as D}from"./totalUtils-d81cce18.js";import"./ColoredText-1f63bb57.js";import"./DropdownButton-edc04a4b.js";import"./BootstrapTooltip-fcbe91c4.js";import"./SqBadge-9ae60b6b.js";import"./FieldDisplay-77f0fc28.js";import"./Groups-58b88b8e.js";import"./index-bc16e556.js";import"./Artifact-0479f6b5.js";import"./SlotIcon-7f8f1658.js";import"./useWeapon-7ac448eb.js";import"./CardActionArea-8497496a.js";import"./CloseButton-38a70e45.js";import"./WeaponEditor-5c218298.js";import"./InfoTooltip-27fa0ff3.js";import"./CardHeader-2e4e8ee3.js";import"./ArtifactSort-4948d435.js";import"./CheckBoxOutlineBlank-0a74a5e5.js";import"./ChevronRight-860f3854.js";import"./WeaponSelectionModal-0c43ad70.js";function Le(){const a=R(),p=A(),{params:{tab:l=""}}=O({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return s.useCallback(n=>{const u=a.chars.get(n);let m=l;u||(a.chars.getWithInitWeapon(n),m=""),p(`/characters/${n}/${m}`)},[p,a,l])}const Re={xs:1,sm:2,md:3,lg:4,xl:4},Ae={xs:6,sm:8,md:12,lg:16,xl:16},Oe=Object.keys(z);function Ca(){const a=R(),p=A(),{params:{characterKey:l}}=O({path:"/characters/:characterKey",end:!1})??{params:{}},x=s.useMemo(()=>l?ue(l)?(a.chars.get(l)||a.chars.getWithInitWeapon(l),l):(p("/characters"),null):null,[l,p,a]),{t:n}=me(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=s.useContext(de),[m,K]=s.useState(()=>a.displayCharacter.get());s.useEffect(()=>a.displayCharacter.follow((e,r)=>K(r)),[a,K]);const[W,U]=s.useState(""),M=s.useDeferredValue(W),w=s.useRef(null),V=s.useCallback((e,r)=>{var c;(c=w.current)==null||c.scrollIntoView({behavior:"smooth"}),a.displayCharacter.set({pageIndex:r-1})},[a,w]),H=De(),f=Ae[H],[q,T]=s.useState(!1),[J,g]=fe();s.useEffect(()=>(ge.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,r)=>(r==="new"||r==="remove")&&g())),[g,a]),s.useEffect(()=>a.charMeta.followAny(e=>g()),[g,a]);const{gender:b}=ye(),Q=s.useCallback(async e=>{let r=k(e,b).name;typeof r=="object"&&(r=n(`${u?"sillyWisher_charNames":"charNames_gen"}:${Ce(e,b)}`)),window.confirm(n("removeCharacter",{value:r}))&&a.chars.remove(e)},[a.chars,b,u,n]),X=Le(),P=s.useDeferredValue(m),I=s.useDeferredValue(J),{charKeyList:o,totalCharNum:S}=s.useMemo(()=>{const r=a.chars.keys.length,{element:c,weaponType:i,rarity:y,sortType:le,ascending:he}=P,pe=a.chars.keys.filter(Ke({element:c,weaponType:i,rarity:y,name:M},je(a,u))).sort(We(z[le]??[],he,Fe(a,u),["new","favorite"]));return I&&{charKeyList:pe,totalCharNum:r}},[a,P,M,u,I]),{weaponType:Y,element:Z,rarity:ee,sortType:ae,ascending:te,pageIndex:E=0}=m,{charKeyListToShow:N,numPages:j,currentPageIndex:re}=s.useMemo(()=>{const e=Math.ceil(o.length/f),r=be(E,0,e-1);return{charKeyListToShow:o.slice(r*f,(r+1)*f),numPages:e,currentPageIndex:r}},[o,E,f]),se=o.length!==S?`${o.length}/${S}`:`${S}`,ne=s.useMemo(()=>D(Se,e=>Object.entries(a.chars.data).forEach(([r,c])=>{const i=a.weapons.get(c.equippedWeapon);if(!i)return;const y=Ge(i.key).weaponType;e[y].total++,o.includes(r)&&e[y].current++})),[a,o]),oe=s.useMemo(()=>D(ve,e=>Object.entries(a.chars.data).forEach(([r,c])=>{const i=k(c.key,a.gender).elementKey;e[i].total++,o.includes(r)&&e[i].current++})),[a,o]),ce=s.useMemo(()=>D(ke,e=>Object.entries(a.chars.data).forEach(([r,c])=>{const i=k(c.key,a.gender).rarity;e[i].total++,o.includes(r)&&e[i].current++})),[a,o]),F={count:j,page:re+1,onChange:V},_={numShowing:N.length,total:se,t:n,namespace:"page_character"},ie={sortKeys:[...Oe],value:ae,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:te,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return d(C,{my:1,display:"flex",flexDirection:"column",gap:1,children:[x&&t(_e,{characterKey:x,onClose:()=>p("/characters")}),t(s.Suspense,{fallback:!1,children:t($e,{newFirst:!0,show:q,onHide:()=>T(!1),onSelect:X})}),t(B,{ref:w,children:d($,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(h,{container:!0,spacing:1,children:[t(h,{item:!0,children:t(Be,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:Y,totals:ne,size:"small"})}),t(h,{item:!0,children:t(Ie,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:Z,totals:oe,size:"small"})}),t(h,{item:!0,children:t(Ee,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:ee,totals:ce,size:"small"})}),t(h,{item:!0,flexGrow:1}),t(h,{item:!0,children:t(Me,{autoFocus:!0,value:W,onChange:e=>U(e.target.value),label:n("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(C,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:t(G,{paginationProps:F,showingTextProps:_,displaySort:!0,sortByButtonProps:ie})})]})}),t(v,{fullWidth:!0,onClick:()=>T(!0),color:"info",startIcon:t(L,{}),children:n`addNew`}),t(s.Suspense,{fallback:t(xe,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(h,{container:!0,spacing:1,columns:Re,children:N.map(e=>t(h,{item:!0,xs:1,children:t(Pe,{characterKey:e,onClick:()=>p(`${e}`),footer:d(we,{children:[t(Te,{}),t(C,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:t(v,{fullWidth:!0,color:"error",onClick:()=>Q(e),startIcon:t(Ne,{}),children:n("delete")})})]})})},e))})}),j>1&&t(B,{children:d($,{sx:{display:"flex",flexDirection:"row",gap:1},children:[t(v,{onClick:()=>T(!0),color:"info",sx:{minWidth:0},children:t(L,{})}),t(C,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",flexGrow:1,children:t(G,{paginationProps:F,showingTextProps:_})})]})})]})}export{Ca as default};
