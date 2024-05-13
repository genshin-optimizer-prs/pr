import{b as D,c6 as N,d as r,bW as Z,c7 as ee,u as ae,aL as te,am as re,ad as se,X as ne,ap as ce,aq as oe,aR as C,ar as le,p as w,q as t,s as ie,V as o,aU as he,c8 as ue,c9 as de,b4 as pe,W as K,av as ge,w as ye,as as me,B as fe,a3 as M,ca as Ce,cb as j,cc as we,cd as xe,k as Te,h as Se,f as be,e as ke,bB as ve,ce as We,cf as Ee}from"./index-DjT2W2Ae.js";import{C as Ke}from"./CharacterEditor-Dn_yI0DS.js";import"./TeamCard-1yxPQRlp.js";import"./Settings-BDWTXPVL.js";function Me(){const a=D(),l=N();return r.useCallback(u=>{a.chars.get(u)||a.chars.getWithInitWeapon(u),l(`/characters/${u}`)},[l,a])}const De={xs:1,sm:2,md:3,lg:4,xl:4},Ne={xs:5,sm:8,md:9,lg:12,xl:12},je=Object.keys(j);function _e(){const a=D(),l=N(),{params:{characterKey:i}}=Z({path:"/characters/:characterKey",end:!1})??{params:{}},u=r.useMemo(()=>i?ee(i)?(a.chars.get(i)||a.chars.getWithInitWeapon(i),i):(l("/characters"),null):null,[i,l,a]),{t:d}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(te),[x,T]=r.useState(()=>a.displayCharacter.get());r.useEffect(()=>a.displayCharacter.follow((e,n)=>T(n)),[a,T]);const[S,F]=r.useState(""),b=r.useDeferredValue(S),B=re(),[I,k]=r.useState(!1),[R,p]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,n)=>(n==="new"||n==="remove")&&p())),[p,a]),r.useEffect(()=>a.charMeta.followAny(e=>p()),[p,a]);const _=Me(),v=r.useDeferredValue(x),W=r.useDeferredValue(R),{charKeys:s,totalCharNum:m}=r.useMemo(()=>{const n=a.chars.keys.length,{element:h,weaponType:c,rarity:g,sortType:X,ascending:J}=v,Y=a.chars.keys.filter(ce({element:h,weaponType:c,rarity:g,name:b},we(a,y))).sort(oe(j[X]??[],J,xe(a,y),["new","favorite"]));return W&&{charKeys:Y,totalCharNum:n}},[a,v,b,y,W]),{weaponType:A,element:O,rarity:P,sortType:$,ascending:z}=x,U=r.useMemo(()=>C(Se,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=a.weapons.get(h.equippedWeapon);if(!c)return;const g=Te(c.key).weaponType;e[g].total++,s.includes(n)&&e[g].current++})),[a,s]),V=r.useMemo(()=>C(ke,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=be(h.key);e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),q=r.useMemo(()=>C(We,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=ve(h.key).rarity;e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),{numShow:E,setTriggerElement:G}=le(Ne[B],s.length),f=r.useMemo(()=>s.slice(0,E),[s,E]),H=s.length!==m?`${s.length}/${m}`:`${m}`,L={numShowing:f.length,total:H,t:d,namespace:"page_character"},Q={sortKeys:[...je],value:$,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:z,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return w(K,{display:"flex",flexDirection:"column",gap:1,children:[u&&t(Ke,{characterKey:u,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ee,{newFirst:!0,show:I,onHide:()=>k(!1),onSelect:_})}),t(ye,{children:w(ie,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(o,{container:!0,spacing:1,children:[t(o,{item:!0,children:t(he,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:A,totals:U,size:"small"})}),t(o,{item:!0,children:t(ue,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:O,totals:V,size:"small"})}),t(o,{item:!0,children:t(de,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:P,totals:q,size:"small"})}),t(o,{item:!0,flexGrow:1}),t(o,{item:!0,children:t(pe,{autoFocus:!0,value:S,onChange:e=>F(e.target.value),label:d("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(K,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ge,{showingTextProps:L,sortByButtonProps:Q})})]})}),t(fe,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(me,{}),children:d`addNew`}),t(r.Suspense,{fallback:t(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(o,{container:!0,spacing:1,columns:De,children:f.map(e=>t(o,{item:!0,xs:1,children:t(Ce,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==f.length&&t(M,{ref:e=>{e&&G(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{_e as default};
