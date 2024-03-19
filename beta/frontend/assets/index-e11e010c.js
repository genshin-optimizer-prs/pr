import{b as F,aE as N,ai as j,e as r,aF as ae,u as te,ab as re,Z as se,M as ne,n as w,p as t,C as oe,J as i,K as M,t as ce,B as ie,V as W,h as le,f as he,aG as pe}from"./index-deadd9ed.js";import{u as ue,f as me,s as de,a as ge,T as fe,S as ye}from"./StarDisplay-721ade0c.js";import{d as Ce}from"./TeamCard-cd86d2cd.js";import{E as we,C as xe,a as Te,c as I,b as Se,d as be,e as ke,f as Ke}from"./CharacterRarityToggle-3b4504b6.js";import{W as ve}from"./WeaponCard-329b3124.js";import{g as D}from"./index-d7d9470d.js";import{g as Ee}from"./index-55ef2043.js";import{c as x}from"./totalUtils-ef6d3f97.js";import"./DropdownButton-157b490a.js";import"./ColoredText-8ead2024.js";import"./BootstrapTooltip-fb70d997.js";import"./DataContext-d143d484.js";import"./Artifact-80468443.js";import"./SqBadge-19d7f6bd.js";import"./index-2eff7fb8.js";import"./SlotIcon-82fdbcf9.js";import"./useWeapon-1b0814a6.js";import"./CardActionArea-641b7ec2.js";import"./Close-d312b369.js";import"./WeaponEditor-3ef61776.js";import"./ConditionalWrapper-fae66905.js";import"./InfoTooltip-5a15b67d.js";import"./Groups-0652d974.js";import"./CardHeader-f73dc29e.js";import"./ArtifactSort-beda063a.js";import"./CheckBoxOutlineBlank-922f5ae7.js";import"./ChevronRight-5e843d11.js";import"./SolidToggleButtonGroup-cb7787b0.js";import"./WeaponSelectionModal-c7fb2212.js";import"./Settings-e57f66da.js";function Me(){const e=F(),l=N(),{params:{tab:c=""}}=j({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return r.useCallback(h=>{const u=e.chars.get(h);let m=c;u||(e.chars.getWithInitWeapon(h),m=""),l(`/characters/${h}/${m}`)},[l,e,c])}const We={xs:1,sm:2,md:3,lg:4,xl:4},De={xs:5,sm:8,md:9,lg:12,xl:12},Fe=Object.keys(I);function ia(){const e=F(),l=N(),{params:{characterKey:c}}=j({path:"/characters/:characterKey",end:!1})??{params:{}},f=r.useMemo(()=>c?ae(c)?(e.chars.get(c)||e.chars.getWithInitWeapon(c),c):(l("/characters"),null):null,[c,l,e]),{t:h}=te(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=r.useContext(re),[m,T]=r.useState(()=>e.displayCharacter.get());r.useEffect(()=>e.displayCharacter.follow((a,n)=>T(n)),[e,T]);const[S,_]=r.useState(""),b=r.useDeferredValue(S),$=ue(),[A,k]=r.useState(!1),[B,d]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),e.chars.followAny((a,n)=>(n==="new"||n==="remove")&&d())),[d,e]),r.useEffect(()=>e.charMeta.followAny(a=>d()),[d,e]);const O=Me(),K=r.useDeferredValue(m),v=r.useDeferredValue(B),{charKeys:s,totalCharNum:y}=r.useMemo(()=>{const n=e.chars.keys.length,{element:p,weaponType:o,rarity:g,sortType:X,ascending:Y}=K,ee=e.chars.keys.filter(me({element:p,weaponType:o,rarity:g,name:b},Se(e,u))).sort(de(I[X]??[],Y,be(e,u),["new","favorite"]));return v&&{charKeys:ee,totalCharNum:n}},[e,K,b,u,v]),{weaponType:P,element:R,rarity:z,sortType:G,ascending:V}=m,U=r.useMemo(()=>x(le,a=>Object.entries(e.chars.data).forEach(([n,p])=>{const o=e.weapons.get(p.equippedWeapon);if(!o)return;const g=Ee(o.key).weaponType;a[g].total++,s.includes(n)&&a[g].current++})),[e,s]),H=r.useMemo(()=>x(he,a=>Object.entries(e.chars.data).forEach(([n,p])=>{const o=D(p.key,e.gender).elementKey;a[o].total++,s.includes(n)&&a[o].current++})),[e,s]),q=r.useMemo(()=>x(pe,a=>Object.entries(e.chars.data).forEach(([n,p])=>{const o=D(p.key,e.gender).rarity;a[o].total++,s.includes(n)&&a[o].current++})),[e,s]),{numShow:E,setTriggerElement:J}=ge(De[$],s.length),C=r.useMemo(()=>s.slice(0,E),[s,E]),Q=s.length!==y?`${s.length}/${y}`:`${y}`,Z={numShowing:C.length,total:Q,t:h,namespace:"page_character"},L={sortKeys:[...Fe],value:G,onChange:a=>e.displayCharacter.set({sortType:a}),ascending:V,onChangeAsc:a=>e.displayCharacter.set({ascending:a})};return w(M,{my:1,display:"flex",flexDirection:"column",gap:1,children:[f&&t(ke,{characterKey:f,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ke,{newFirst:!0,show:A,onHide:()=>k(!1),onSelect:O})}),t(ce,{children:w(oe,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(i,{container:!0,spacing:1,children:[t(i,{item:!0,children:t(ve,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({weaponType:a}),value:P,totals:U,size:"small"})}),t(i,{item:!0,children:t(we,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({element:a}),value:R,totals:H,size:"small"})}),t(i,{item:!0,children:t(xe,{sx:{height:"100%"},onChange:a=>e.displayCharacter.set({rarity:a}),value:z,totals:q,size:"small"})}),t(i,{item:!0,flexGrow:1}),t(i,{item:!0,children:t(fe,{autoFocus:!0,value:S,onChange:a=>_(a.target.value),label:h("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(M,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:t(ye,{showingTextProps:Z,sortByButtonProps:L})})]})}),t(ie,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(Ce,{}),children:h`addNew`}),t(r.Suspense,{fallback:t(W,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(i,{container:!0,spacing:1,columns:We,children:C.map(a=>t(i,{item:!0,xs:1,children:t(Te,{characterKey:a,onClick:()=>l(`${a}`),hideStats:!0})},a))})}),s.length!==C.length&&t(W,{ref:a=>{a&&J(a)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ia as default};
