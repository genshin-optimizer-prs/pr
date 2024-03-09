import{b as O,aE as _,ag as $,e as r,aF as ne,u as oe,a9 as ce,X as ie,M as le,n as x,p as a,C as he,J as i,K as F,t as pe,B as ue,U as j,h as me,f as de,aG as ge}from"./index-4d71100e.js";import{u as fe,f as ye,s as Ce,a as we,T as Se,S as xe}from"./StarDisplay-279f13c1.js";import{d as Te,C as be}from"./TeamCard-9dd9772d.js";import{E as ke,C as Ee,c as A,a as Ke,b as ve,d as Me,e as We}from"./CharacterRarityToggle-6b9a7073.js";import{W as De}from"./WeaponCard-7b0ac7f8.js";import{g as I}from"./index-07607911.js";import{g as Ne}from"./index-847621b1.js";import{c as T}from"./totalUtils-2f6d2bee.js";import"./DropdownButton-cdb41769.js";import"./ColoredText-80a5ac5a.js";import"./BootstrapTooltip-5853516b.js";import"./SqBadge-ffc38a9d.js";import"./FieldDisplay-bf5291d7.js";import"./Groups-ef7bdebc.js";import"./index-cdd313f4.js";import"./Artifact-0630640a.js";import"./SlotIcon-44dbbf28.js";import"./useWeapon-6b96a316.js";import"./CardActionArea-cb71d4e1.js";import"./CloseButton-6e192d72.js";import"./WeaponEditor-59adbae5.js";import"./LocationAutocomplete-737dbec1.js";import"./InfoTooltip-56c7d625.js";import"./CardHeader-6b96f3e9.js";import"./ArtifactSort-c12624cd.js";import"./CheckBoxOutlineBlank-0003b0b6.js";import"./ChevronRight-e25ebb9e.js";import"./SolidToggleButtonGroup-6ad39fd9.js";import"./WeaponSelectionModal-f64dd6e2.js";function Fe(){const t=O(),l=_(),{params:{tab:c=""}}=$({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return r.useCallback(h=>{const u=t.chars.get(h);let m=c;u||(t.chars.getWithInitWeapon(h),m=""),l(`/characters/${h}/${m}`)},[l,t,c])}const je={xs:1,sm:2,md:3,lg:4,xl:4},b={xs:5,sm:8,md:9,lg:12,xl:12},Ie=Object.keys(A);function pt(){const t=O(),l=_(),{params:{characterKey:c}}=$({path:"/characters/:characterKey",end:!1})??{params:{}},y=r.useMemo(()=>c?ne(c)?(t.chars.get(c)||t.chars.getWithInitWeapon(c),c):(l("/characters"),null):null,[c,l,t]),{t:h}=oe(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=r.useContext(ce),[m,k]=r.useState(()=>t.displayCharacter.get());r.useEffect(()=>t.displayCharacter.follow((e,n)=>k(n)),[t,k]);const[E,B]=r.useState(""),K=r.useDeferredValue(E),d=fe(),[P,v]=r.useState(!1),[R,g]=ie();r.useEffect(()=>(le.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((e,n)=>(n==="new"||n==="remove")&&g())),[g,t]),r.useEffect(()=>t.charMeta.followAny(e=>g()),[g,t]);const z=Fe(),M=r.useDeferredValue(m),W=r.useDeferredValue(R),{charKeys:s,totalCharNum:C}=r.useMemo(()=>{const n=t.chars.keys.length,{element:p,weaponType:o,rarity:f,sortType:ae,ascending:re}=M,se=t.chars.keys.filter(ye({element:p,weaponType:o,rarity:f,name:K},Ke(t,u))).sort(Ce(A[ae]??[],re,ve(t,u),["new","favorite"]));return W&&{charKeys:se,totalCharNum:n}},[t,M,K,u,W]),{weaponType:G,element:U,rarity:V,sortType:H,ascending:q}=m,J=r.useMemo(()=>T(me,e=>Object.entries(t.chars.data).forEach(([n,p])=>{const o=t.weapons.get(p.equippedWeapon);if(!o)return;const f=Ne(o.key).weaponType;e[f].total++,s.includes(n)&&e[f].current++})),[t,s]),Q=r.useMemo(()=>T(de,e=>Object.entries(t.chars.data).forEach(([n,p])=>{const o=I(p.key,t.gender).elementKey;e[o].total++,s.includes(n)&&e[o].current++})),[t,s]),X=r.useMemo(()=>T(ge,e=>Object.entries(t.chars.data).forEach(([n,p])=>{const o=I(p.key,t.gender).rarity;e[o].total++,s.includes(n)&&e[o].current++})),[t,s]),[w,D]=r.useState(b[d]);r.useEffect(()=>{s&&D(b[d])},[s,d]);const[L,Y]=r.useState(),N=we(L)&&w<s.length;r.useEffect(()=>{N&&D(e=>e+b[d])},[N,d]);const S=r.useMemo(()=>s.slice(0,w),[s,w]),Z=s.length!==C?`${s.length}/${C}`:`${C}`,ee={numShowing:S.length,total:Z,t:h,namespace:"page_character"},te={sortKeys:[...Ie],value:H,onChange:e=>t.displayCharacter.set({sortType:e}),ascending:q,onChangeAsc:e=>t.displayCharacter.set({ascending:e})};return x(F,{my:1,display:"flex",flexDirection:"column",gap:1,children:[y&&a(Me,{characterKey:y,onClose:()=>l("/characters")}),a(r.Suspense,{fallback:!1,children:a(We,{newFirst:!0,show:P,onHide:()=>v(!1),onSelect:z})}),a(pe,{children:x(he,{sx:{display:"flex",flexDirection:"column",gap:1},children:[x(i,{container:!0,spacing:1,children:[a(i,{item:!0,children:a(De,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({weaponType:e}),value:G,totals:J,size:"small"})}),a(i,{item:!0,children:a(ke,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({element:e}),value:U,totals:Q,size:"small"})}),a(i,{item:!0,children:a(Ee,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({rarity:e}),value:V,totals:X,size:"small"})}),a(i,{item:!0,flexGrow:1}),a(i,{item:!0,children:a(Se,{autoFocus:!0,value:E,onChange:e=>B(e.target.value),label:h("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),a(F,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:a(xe,{showingTextProps:ee,sortByButtonProps:te})})]})}),a(ue,{fullWidth:!0,onClick:()=>v(!0),color:"info",startIcon:a(Te,{}),children:h`addNew`}),a(r.Suspense,{fallback:a(j,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(i,{container:!0,spacing:1,columns:je,children:S.map(e=>a(i,{item:!0,xs:1,children:a(be,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==S.length&&a(j,{ref:e=>{e&&Y(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{pt as default};
