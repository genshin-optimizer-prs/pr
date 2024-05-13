import{b as D,b$ as N,d as r,bO as Z,c0 as ee,u as ae,aL as te,am as re,ad as se,X as ne,ap as ce,aq as oe,aS as C,ar as le,p as w,q as t,s as ie,V as o,aT as he,c1 as ue,c2 as de,aV as pe,W as M,av as ge,w as ye,as as me,B as fe,a3 as W,c3 as Ce,c4 as j,c5 as we,c6 as Te,k as xe,h as Se,f as be,e as ke,bt as ve,c7 as Ee,c8 as Ke}from"./index-Dn58R_OC.js";import{C as Me}from"./CharacterEditor-XP4JmGFv.js";import"./TeamCard-DdWtXzkq.js";import"./Settings-Bld51fDf.js";function We(){const a=D(),l=N();return r.useCallback(u=>{a.chars.get(u)||a.chars.getWithInitWeapon(u),l(`/characters/${u}`)},[l,a])}const De={xs:1,sm:2,md:3,lg:4,xl:4},Ne={xs:5,sm:8,md:9,lg:12,xl:12},je=Object.keys(j);function $e(){const a=D(),l=N(),{params:{characterKey:i}}=Z({path:"/characters/:characterKey",end:!1})??{params:{}},u=r.useMemo(()=>i?ee(i)?(a.chars.get(i)||a.chars.getWithInitWeapon(i),i):(l("/characters"),null):null,[i,l,a]),{t:d}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(te),[T,x]=r.useState(()=>a.displayCharacter.get());r.useEffect(()=>a.displayCharacter.follow((e,n)=>x(n)),[a,x]);const[S,F]=r.useState(""),b=r.useDeferredValue(S),I=re(),[O,k]=r.useState(!1),[_,p]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,n)=>(n==="new"||n==="remove")&&p())),[p,a]),r.useEffect(()=>a.charMeta.followAny(e=>p()),[p,a]);const $=We(),v=r.useDeferredValue(T),E=r.useDeferredValue(_),{charKeys:s,totalCharNum:m}=r.useMemo(()=>{const n=a.chars.keys.length,{element:h,weaponType:c,rarity:g,sortType:X,ascending:J}=v,Y=a.chars.keys.filter(ce({element:h,weaponType:c,rarity:g,name:b},we(a,y))).sort(oe(j[X]??[],J,Te(a,y),["new","favorite"]));return E&&{charKeys:Y,totalCharNum:n}},[a,v,b,y,E]),{weaponType:A,element:B,rarity:P,sortType:R,ascending:V}=T,z=r.useMemo(()=>C(Se,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=a.weapons.get(h.equippedWeapon);if(!c)return;const g=xe(c.key).weaponType;e[g].total++,s.includes(n)&&e[g].current++})),[a,s]),q=r.useMemo(()=>C(ke,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=be(h.key);e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),G=r.useMemo(()=>C(Ee,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=ve(h.key).rarity;e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),{numShow:K,setTriggerElement:U}=le(Ne[I],s.length),f=r.useMemo(()=>s.slice(0,K),[s,K]),H=s.length!==m?`${s.length}/${m}`:`${m}`,L={numShowing:f.length,total:H,t:d,namespace:"page_character"},Q={sortKeys:[...je],value:R,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:V,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return w(M,{display:"flex",flexDirection:"column",gap:1,children:[u&&t(Me,{characterKey:u,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ke,{newFirst:!0,show:O,onHide:()=>k(!1),onSelect:$})}),t(ye,{children:w(ie,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(o,{container:!0,spacing:1,children:[t(o,{item:!0,children:t(he,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:A,totals:z,size:"small"})}),t(o,{item:!0,children:t(ue,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:B,totals:q,size:"small"})}),t(o,{item:!0,children:t(de,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:P,totals:G,size:"small"})}),t(o,{item:!0,flexGrow:1}),t(o,{item:!0,children:t(pe,{autoFocus:!0,value:S,onChange:e=>F(e.target.value),label:d("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ge,{showingTextProps:L,sortByButtonProps:Q})})]})}),t(fe,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(me,{}),children:d`addNew`}),t(r.Suspense,{fallback:t(W,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(o,{container:!0,spacing:1,columns:De,children:f.map(e=>t(o,{item:!0,xs:1,children:t(Ce,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==f.length&&t(W,{ref:e=>{e&&U(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{$e as default};
