import{b as F,aE as N,ai as j,e as r,aF as ae,u as te,ab as re,Z as se,M as ne,n as w,p as t,C as oe,J as i,K as M,t as ce,B as ie,V as W,h as le,f as he,aG as pe}from"./index-857f2052.js";import{u as ue,f as me,s as de,a as ge,T as fe,S as ye}from"./StarDisplay-fdb49e05.js";import{d as Ce}from"./TeamCard-e54b201e.js";import{E as we,C as xe,a as Te,c as I,b as Se,d as be,e as ke,f as Ke}from"./CharacterRarityToggle-b29cae99.js";import{W as ve}from"./WeaponCard-903f6844.js";import{g as D}from"./index-8d7ef96f.js";import{g as Ee}from"./index-8bcac89d.js";import{c as x}from"./totalUtils-1226475f.js";import"./DropdownButton-f4bf687b.js";import"./ColoredText-6730294e.js";import"./BootstrapTooltip-18bfd331.js";import"./DataContext-59da31b3.js";import"./Artifact-fe99e781.js";import"./SqBadge-3eba2802.js";import"./index-316fe4f4.js";import"./SlotIcon-2150082b.js";import"./useWeapon-13a8ee1a.js";import"./CardActionArea-cf1300e8.js";import"./Close-e0686870.js";import"./WeaponEditor-395cad95.js";import"./ConditionalWrapper-b88a688a.js";import"./InfoTooltip-6110ac62.js";import"./Groups-0469ed4b.js";import"./CardHeader-d3891ac2.js";import"./ArtifactSort-8b2ed44b.js";import"./CheckBoxOutlineBlank-f35c89e9.js";import"./ChevronRight-0095aa00.js";import"./SolidToggleButtonGroup-05974e66.js";import"./WeaponSelectionModal-220f270c.js";import"./Settings-10855dff.js";function Me(){const e=F(),l=N(),{params:{tab:c=""}}=j({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return r.useCallback(h=>{const u=e.chars.get(h);let m=c;u||(e.chars.getWithInitWeapon(h),m=""),l(`/characters/${h}/${m}`)},[l,e,c])}const We={xs:1,sm:2,md:3,lg:4,xl:4},De={xs:5,sm:8,md:9,lg:12,xl:12},Fe=Object.keys(I);function ia(){const e=F(),l=N(),{params:{characterKey:c}}=j({path:"/characters/:characterKey",end:!1})??{params:{}},f=r.useMemo(()=>c?ae(c)?(e.chars.get(c)||e.chars.getWithInitWeapon(c),c):(l("/characters"),null):null,[c,l,e]),{t:h}=te(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=r.useContext(re),[m,T]=r.useState(()=>e.displayCharacter.get());r.useEffect(()=>e.displayCharacter.follow((a,n)=>T(n)),[e,T]);const[S,_]=r.useState(""),b=r.useDeferredValue(S),$=ue(),[A,k]=r.useState(!1),[B,d]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),e.chars.followAny((a,n)=>(n==="new"||n==="remove")&&d())),[d,e]),r.useEffect(()=>e.charMeta.followAny(a=>d()),[d,e]);const O=Me(),K=r.useDeferredValue(m),v=r.useDeferredValue(B),{charKeys:s,totalCharNum:y}=r.useMemo(()=>{const n=e.chars.keys.length,{element:p,weaponType:o,rarity:g,sortType:X,ascending:Y}=K,ee=e.chars.keys.filter(me({element:p,weaponType:o,rarity:g,name:b},Se(e,u))).sort(de(I[X]??[],Y,be(e,u),["new","favorite"]));return v&&{charKeys:ee,totalCharNum:n}},[e,K,b,u,v]),{weaponType:P,element:R,rarity:z,sortType:G,ascending:V}=m,U=r.useMemo(()=>x(le,a=>Object.entries(e.chars.data).forEach(([n,p])=>{const o=e.weapons.get(p.equippedWeapon);if(!o)return;const g=Ee(o.key).weaponType;a[g].total++,s.includes(n)&&a[g].current++})),[e,s]),H=r.useMemo(()=>x(he,a=>Object.entries(e.chars.data).forEach(([n,p])=>{const o=D(p.key,e.gender).elementKey;a[o].total++,s.includes(n)&&a[o].current++})),[e,s]),q=r.useMemo(()=>x(pe,a=>Object.entries(e.chars.data).forEach(([n,p])=>{const o=D(p.key,e.gender).rarity;a[o].total++,s.includes(n)&&a[o].current++})),[e,s]),{numShow:E,setTriggerElement:J}=ge(De[$],s.length),C=r.useMemo(()=>s.slice(0,E),[s,E]),Q=s.length!==y?`${s.length}/${y}`:`${y}`,Z={numShowing:C.length,total:Q,t:h,namespace:"page_character"},L={sortKeys:[...Fe],value:G,onChange:a=>e.displayCharacter.set({sortType:a}),ascending:V,onChangeAsc:a=>e.displayCharacter.set({ascending:a})};return w(M,{my:1,display:"flex",flexDirection:"column",gap:1,children:[f&&t(ke,{characterKey:f,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ke,{newFirst:!0,show:A,onHide:()=>k(!1),onSelect:O})}),t(ce,{children:w(oe,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(i,{container:!0,spacing:1,children:[t(i,{item:!0,children:t(ve,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({weaponType:a}),value:P,totals:U,size:"small"})}),t(i,{item:!0,children:t(we,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({element:a}),value:R,totals:H,size:"small"})}),t(i,{item:!0,children:t(xe,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({rarity:a}),value:z,totals:q,size:"small"})}),t(i,{item:!0,flexGrow:1}),t(i,{item:!0,children:t(fe,{autoFocus:!0,value:S,onChange:a=>_(a.target.value),label:h("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(M,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:t(ye,{showingTextProps:Z,sortByButtonProps:L})})]})}),t(ie,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(Ce,{}),children:h`addNew`}),t(r.Suspense,{fallback:t(W,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(i,{container:!0,spacing:1,columns:We,children:C.map(a=>t(i,{item:!0,xs:1,children:t(Te,{characterKey:a,onClick:()=>l(`${a}`),hideStats:!0})},a))})}),s.length!==C.length&&t(W,{ref:a=>{a&&J(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ia as default};
