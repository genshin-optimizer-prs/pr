import{b as D,c4 as N,d as r,bU as Z,c5 as ee,u as ae,aL as te,am as re,ad as se,X as ne,ap as ce,aq as oe,aR as C,ar as le,p as w,q as t,s as ie,V as o,aU as he,c6 as ue,c7 as de,b4 as pe,W as M,av as ge,w as ye,as as me,B as fe,a3 as W,c8 as Ce,c9 as j,ca as we,cb as xe,k as Te,h as Se,f as be,e as ke,bz as ve,cc as Ee,cd as Ke}from"./index-B-txg4cI.js";import{C as Me}from"./CharacterEditor-B2wr52yk.js";import"./TeamCard-DoRnUV0A.js";import"./Settings-CzR39iOD.js";function We(){const a=D(),l=N();return r.useCallback(u=>{a.chars.get(u)||a.chars.getWithInitWeapon(u),l(`/characters/${u}`)},[l,a])}const De={xs:1,sm:2,md:3,lg:4,xl:4},Ne={xs:5,sm:8,md:9,lg:12,xl:12},je=Object.keys(j);function ze(){const a=D(),l=N(),{params:{characterKey:i}}=Z({path:"/characters/:characterKey",end:!1})??{params:{}},u=r.useMemo(()=>i?ee(i)?(a.chars.get(i)||a.chars.getWithInitWeapon(i),i):(l("/characters"),null):null,[i,l,a]),{t:d}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(te),[x,T]=r.useState(()=>a.displayCharacter.get());r.useEffect(()=>a.displayCharacter.follow((e,n)=>T(n)),[a,T]);const[S,F]=r.useState(""),b=r.useDeferredValue(S),I=re(),[R,k]=r.useState(!1),[_,p]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,n)=>(n==="new"||n==="remove")&&p())),[p,a]),r.useEffect(()=>a.charMeta.followAny(e=>p()),[p,a]);const z=We(),v=r.useDeferredValue(x),E=r.useDeferredValue(_),{charKeys:s,totalCharNum:m}=r.useMemo(()=>{const n=a.chars.keys.length,{element:h,weaponType:c,rarity:g,sortType:X,ascending:J}=v,Y=a.chars.keys.filter(ce({element:h,weaponType:c,rarity:g,name:b},we(a,y))).sort(oe(j[X]??[],J,xe(a,y),["new","favorite"]));return E&&{charKeys:Y,totalCharNum:n}},[a,v,b,y,E]),{weaponType:A,element:B,rarity:O,sortType:P,ascending:U}=x,$=r.useMemo(()=>C(Se,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=a.weapons.get(h.equippedWeapon);if(!c)return;const g=Te(c.key).weaponType;e[g].total++,s.includes(n)&&e[g].current++})),[a,s]),V=r.useMemo(()=>C(ke,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=be(h.key);e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),q=r.useMemo(()=>C(Ee,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=ve(h.key).rarity;e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),{numShow:K,setTriggerElement:G}=le(Ne[I],s.length),f=r.useMemo(()=>s.slice(0,K),[s,K]),H=s.length!==m?`${s.length}/${m}`:`${m}`,L={numShowing:f.length,total:H,t:d,namespace:"page_character"},Q={sortKeys:[...je],value:P,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:U,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return w(M,{display:"flex",flexDirection:"column",gap:1,children:[u&&t(Me,{characterKey:u,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ke,{newFirst:!0,show:R,onHide:()=>k(!1),onSelect:z})}),t(ye,{children:w(ie,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(o,{container:!0,spacing:1,children:[t(o,{item:!0,children:t(he,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:A,totals:$,size:"small"})}),t(o,{item:!0,children:t(ue,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:B,totals:V,size:"small"})}),t(o,{item:!0,children:t(de,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:O,totals:q,size:"small"})}),t(o,{item:!0,flexGrow:1}),t(o,{item:!0,children:t(pe,{autoFocus:!0,value:S,onChange:e=>F(e.target.value),label:d("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ge,{showingTextProps:L,sortByButtonProps:Q})})]})}),t(fe,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(me,{}),children:d`addNew`}),t(r.Suspense,{fallback:t(W,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(o,{container:!0,spacing:1,columns:De,children:f.map(e=>t(o,{item:!0,xs:1,children:t(Ce,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==f.length&&t(W,{ref:e=>{e&&G(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ze as default};
