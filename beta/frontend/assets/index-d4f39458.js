import{b as F,aE as N,e as r,ai as ee,aF as te,u as ae,ab as re,Z as se,M as ne,n as C,p as a,C as oe,J as c,K as M,t as ce,B as ie,V as W,h as le,f as he,aG as pe}from"./index-e3da9f16.js";import{u as ue,f as me,s as de,a as ge,T as fe,S as ye}from"./StarDisplay-a19bbd8f.js";import{d as Ce}from"./TeamCard-c9e19e9a.js";import{E as we,C as xe,a as Te,c as j,b as Se,d as be,e as ke,f as Ke}from"./CharacterRarityToggle-ed345281.js";import{W as ve}from"./WeaponCard-2ad4a0a2.js";import{g as D}from"./index-7619e8bb.js";import{g as Ee}from"./index-2757188e.js";import{c as w}from"./totalUtils-4773666d.js";import"./DropdownButton-00458733.js";import"./ColoredText-6398dca5.js";import"./BootstrapTooltip-9ed68200.js";import"./DataContext-e39481b6.js";import"./Artifact-2168e426.js";import"./StatIcon-da167563.js";import"./SqBadge-549701df.js";import"./index-60db6007.js";import"./SlotIcon-2800f8a9.js";import"./useWeapon-ccef45ff.js";import"./CardActionArea-7dcefa0e.js";import"./Close-6abdf2df.js";import"./WeaponEditor-99f24491.js";import"./ConditionalWrapper-2e7f35e0.js";import"./InfoTooltip-0b7aa7bf.js";import"./Groups-450544ac.js";import"./ArtifactSort-9cac22ff.js";import"./CheckBoxOutlineBlank-0f54c410.js";import"./ChevronRight-c21253a0.js";import"./SolidToggleButtonGroup-63df6e2d.js";import"./WeaponSelectionModal-fff2c9ad.js";import"./Settings-bdc10e0b.js";function Me(){const e=F(),i=N();return r.useCallback(p=>{e.chars.get(p)||e.chars.getWithInitWeapon(p),i(`/characters/${p}`)},[i,e])}const We={xs:1,sm:2,md:3,lg:4,xl:4},De={xs:5,sm:8,md:9,lg:12,xl:12},Fe=Object.keys(j);function it(){const e=F(),i=N(),{params:{characterKey:l}}=ee({path:"/characters/:characterKey",end:!1})??{params:{}},p=r.useMemo(()=>l?te(l)?(e.chars.get(l)||e.chars.getWithInitWeapon(l),l):(i("/characters"),null):null,[l,i,e]),{t:u}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:g}=r.useContext(re),[x,T]=r.useState(()=>e.displayCharacter.get());r.useEffect(()=>e.displayCharacter.follow((t,n)=>T(n)),[e,T]);const[S,I]=r.useState(""),b=r.useDeferredValue(S),_=ue(),[A,k]=r.useState(!1),[B,m]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),e.chars.followAny((t,n)=>(n==="new"||n==="remove")&&m())),[m,e]),r.useEffect(()=>e.charMeta.followAny(t=>m()),[m,e]);const O=Me(),K=r.useDeferredValue(x),v=r.useDeferredValue(B),{charKeys:s,totalCharNum:f}=r.useMemo(()=>{const n=e.chars.keys.length,{element:h,weaponType:o,rarity:d,sortType:L,ascending:X}=K,Y=e.chars.keys.filter(me({element:h,weaponType:o,rarity:d,name:b},Se(e,g))).sort(de(j[L]??[],X,be(e,g),["new","favorite"]));return v&&{charKeys:Y,totalCharNum:n}},[e,K,b,g,v]),{weaponType:P,element:R,rarity:$,sortType:z,ascending:G}=x,V=r.useMemo(()=>w(le,t=>Object.entries(e.chars.data).forEach(([n,h])=>{const o=e.weapons.get(h.equippedWeapon);if(!o)return;const d=Ee(o.key).weaponType;t[d].total++,s.includes(n)&&t[d].current++})),[e,s]),U=r.useMemo(()=>w(he,t=>Object.entries(e.chars.data).forEach(([n,h])=>{const o=D(h.key,e.gender).elementKey;t[o].total++,s.includes(n)&&t[o].current++})),[e,s]),H=r.useMemo(()=>w(pe,t=>Object.entries(e.chars.data).forEach(([n,h])=>{const o=D(h.key,e.gender).rarity;t[o].total++,s.includes(n)&&t[o].current++})),[e,s]),{numShow:E,setTriggerElement:q}=ge(De[_],s.length),y=r.useMemo(()=>s.slice(0,E),[s,E]),J=s.length!==f?`${s.length}/${f}`:`${f}`,Q={numShowing:y.length,total:J,t:u,namespace:"page_character"},Z={sortKeys:[...Fe],value:z,onChange:t=>e.displayCharacter.set({sortType:t}),ascending:G,onChangeAsc:t=>e.displayCharacter.set({ascending:t})};return C(M,{my:1,display:"flex",flexDirection:"column",gap:1,children:[p&&a(ke,{characterKey:p,onClose:()=>i("/characters")}),a(r.Suspense,{fallback:!1,children:a(Ke,{newFirst:!0,show:A,onHide:()=>k(!1),onSelect:O})}),a(ce,{children:C(oe,{sx:{display:"flex",flexDirection:"column",gap:1},children:[C(c,{container:!0,spacing:1,children:[a(c,{item:!0,children:a(ve,{sx:{height:"100%"},onChange:t=>e.displayCharacter.set({weaponType:t}),value:P,totals:V,size:"small"})}),a(c,{item:!0,children:a(we,{sx:{height:"100%"},onChange:t=>e.displayCharacter.set({element:t}),value:R,totals:U,size:"small"})}),a(c,{item:!0,children:a(xe,{sx:{height:"100%"},onChange:t=>e.displayCharacter.set({rarity:t}),value:$,totals:H,size:"small"})}),a(c,{item:!0,flexGrow:1}),a(c,{item:!0,children:a(fe,{autoFocus:!0,value:S,onChange:t=>I(t.target.value),label:u("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),a(M,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:a(ye,{showingTextProps:Q,sortByButtonProps:Z})})]})}),a(ie,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:a(Ce,{}),children:u`addNew`}),a(r.Suspense,{fallback:a(W,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(c,{container:!0,spacing:1,columns:We,children:y.map(t=>a(c,{item:!0,xs:1,children:a(Te,{characterKey:t,onClick:()=>i(`${t}`),hideStats:!0})},t))})}),s.length!==y.length&&a(W,{ref:t=>{t&&q(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{it as default};