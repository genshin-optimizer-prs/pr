import{b as B,aE as G,ag as L,e as r,aF as he,u as pe,a9 as ue,X as me,M as de,n as y,p as t,C as j,J as l,K as b,t as F,B as _,U as ge,a0 as fe,h as ye,f as Ce,aG as xe}from"./index-4aeafe39.js";import{u as we,P as R}from"./LocationAutocomplete-0ff51124.js";import{f as Te,s as be,T as Se}from"./StarDisplay-9719c2f8.js";import{d as $,C as ke}from"./TeamCard-ca813ae9.js";import{E as Ke,C as ve,c as O,a as Pe,b as Me,d as We,e as De}from"./CharacterRarityToggle-eb52f886.js";import{W as Ee}from"./WeaponCard-fd284d86.js";import{g as A}from"./index-2e6c50dc.js";import{g as Ie}from"./index-34aa308f.js";import{c as S}from"./totalUtils-3a98e4dd.js";import"./ColoredText-93cf156d.js";import"./DropdownButton-6b38390d.js";import"./BootstrapTooltip-10216255.js";import"./Artifact-1c0f17d9.js";import"./SqBadge-468e1b5c.js";import"./index-5dc4490f.js";import"./SlotIcon-ef3c8060.js";import"./FieldDisplay-c1f87645.js";import"./Groups-87ae8e16.js";import"./useWeapon-047a5724.js";import"./CardActionArea-b23caab8.js";import"./CloseButton-b7a77251.js";import"./WeaponEditor-4e380724.js";import"./InfoTooltip-a81d0e82.js";import"./CardHeader-7d7c0e81.js";import"./ArtifactSort-fec432dd.js";import"./CheckBoxOutlineBlank-9ccb8a5e.js";import"./ChevronRight-04ffbc4a.js";import"./WeaponSelectionModal-9c82f155.js";function Ne(){const e=B(),h=G(),{params:{tab:i=""}}=L({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return r.useCallback(p=>{const u=e.chars.get(p);let m=i;u||(e.chars.getWithInitWeapon(p),m=""),h(`/characters/${p}/${m}`)},[h,e,i])}const je={xs:1,sm:2,md:3,lg:4,xl:4},Fe={xs:10,sm:16,md:24,lg:32,xl:32},_e=Object.keys(O);function pa(){const e=B(),h=G(),{params:{characterKey:i}}=L({path:"/characters/:characterKey",end:!1})??{params:{}},C=r.useMemo(()=>i?he(i)?(e.chars.get(i)||e.chars.getWithInitWeapon(i),i):(h("/characters"),null):null,[i,h,e]),{t:p}=pe(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=r.useContext(ue),[m,k]=r.useState(()=>e.displayCharacter.get());r.useEffect(()=>e.displayCharacter.follow((a,s)=>k(s)),[e,k]);const[K,z]=r.useState(""),v=r.useDeferredValue(K),x=r.useRef(null),U=r.useCallback((a,s)=>{var o;(o=x.current)==null||o.scrollIntoView({behavior:"smooth"}),e.displayCharacter.set({pageIndex:s-1})},[e,x]),V=we(),d=Fe[V],[H,w]=r.useState(!1),[q,g]=me();r.useEffect(()=>(de.send({hitType:"pageview",page:"/characters"}),e.chars.followAny((a,s)=>(s==="new"||s==="remove")&&g())),[g,e]),r.useEffect(()=>e.charMeta.followAny(a=>g()),[g,e]);const J=Ne(),P=r.useDeferredValue(m),M=r.useDeferredValue(q),{charKeyList:n,totalCharNum:T}=r.useMemo(()=>{const s=e.chars.keys.length,{element:o,weaponType:c,rarity:f,sortType:ce,ascending:ie}=P,le=e.chars.keys.filter(Te({element:o,weaponType:c,rarity:f,name:v},Pe(e,u))).sort(be(O[ce]??[],ie,Me(e,u),["new","favorite"]));return M&&{charKeyList:le,totalCharNum:s}},[e,P,v,u,M]),{weaponType:Q,element:X,rarity:Y,sortType:Z,ascending:ee,pageIndex:W=0}=m,{charKeyListToShow:D,numPages:E,currentPageIndex:ae}=r.useMemo(()=>{const a=Math.ceil(n.length/d),s=fe(W,0,a-1);return{charKeyListToShow:n.slice(s*d,(s+1)*d),numPages:a,currentPageIndex:s}},[n,W,d]),te=n.length!==T?`${n.length}/${T}`:`${T}`,re=r.useMemo(()=>S(ye,a=>Object.entries(e.chars.data).forEach(([s,o])=>{const c=e.weapons.get(o.equippedWeapon);if(!c)return;const f=Ie(c.key).weaponType;a[f].total++,n.includes(s)&&a[f].current++})),[e,n]),se=r.useMemo(()=>S(Ce,a=>Object.entries(e.chars.data).forEach(([s,o])=>{const c=A(o.key,e.gender).elementKey;a[c].total++,n.includes(s)&&a[c].current++})),[e,n]),ne=r.useMemo(()=>S(xe,a=>Object.entries(e.chars.data).forEach(([s,o])=>{const c=A(o.key,e.gender).rarity;a[c].total++,n.includes(s)&&a[c].current++})),[e,n]),I={count:E,page:ae+1,onChange:U},N={numShowing:D.length,total:te,t:p,namespace:"page_character"},oe={sortKeys:[..._e],value:Z,onChange:a=>e.displayCharacter.set({sortType:a}),ascending:ee,onChangeAsc:a=>e.displayCharacter.set({ascending:a})};return y(b,{my:1,display:"flex",flexDirection:"column",gap:1,children:[C&&t(We,{characterKey:C,onClose:()=>h("/characters")}),t(r.Suspense,{fallback:!1,children:t(De,{newFirst:!0,show:H,onHide:()=>w(!1),onSelect:J})}),t(F,{ref:x,children:y(j,{sx:{display:"flex",flexDirection:"column",gap:1},children:[y(l,{container:!0,spacing:1,children:[t(l,{item:!0,children:t(Ee,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({weaponType:a}),value:Q,totals:re,size:"small"})}),t(l,{item:!0,children:t(Ke,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({element:a}),value:X,totals:se,size:"small"})}),t(l,{item:!0,children:t(ve,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({rarity:a}),value:Y,totals:ne,size:"small"})}),t(l,{item:!0,flexGrow:1}),t(l,{item:!0,children:t(Se,{autoFocus:!0,value:K,onChange:a=>z(a.target.value),label:p("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(b,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:t(R,{paginationProps:I,showingTextProps:N,displaySort:!0,sortByButtonProps:oe})})]})}),t(_,{fullWidth:!0,onClick:()=>w(!0),color:"info",startIcon:t($,{}),children:p`addNew`}),t(r.Suspense,{fallback:t(ge,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(l,{container:!0,spacing:1,columns:je,children:D.map(a=>t(l,{item:!0,xs:1,children:t(ke,{characterKey:a,onClick:()=>h(`${a}`),hideStats:!0})},a))})}),E>1&&t(F,{children:y(j,{sx:{display:"flex",flexDirection:"row",gap:1},children:[t(_,{onClick:()=>w(!0),color:"info",sx:{minWidth:0},children:t($,{})}),t(b,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",flexGrow:1,children:t(R,{paginationProps:I,showingTextProps:N})})]})})]})}export{pa as default};
