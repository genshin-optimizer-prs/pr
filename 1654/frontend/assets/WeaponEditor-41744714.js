import{u as G,e as p,n as h,p as t,dM as se,dN as oe,bZ as $,B as S,dO as z,dP as re,dQ as ie,a2 as le,dR as ce,dS as de,a1 as ue,a0 as pe,T as L,K as D,dT as M,b as W,bd as B,cH as j,dU as V,bs as H,br as N,D as _,dV as v,C as R,aA as U,am as me,dW as fe,Q as he,J as g,t as xe,s as Ce,V as ge,R as ye,_ as be}from"./index-c622b83a.js";import{T as ve,x as ke,v as we,w as De,u as T}from"./index-c3bb2425.js";import{u as Le}from"./useWeapon-746d8855.js";import{L as Se,a as Te,b as Ie}from"./LocationAutocomplete-57de42d0.js";import{C as Me}from"./CloseButton-7da9fd69.js";import{D as b,d as J,b as We,a as Oe,L as Re}from"./FieldDisplay-423a2440.js";import{M as I,D as A}from"./DropdownButton-0487de4f.js";import{S as Q}from"./SqBadge-1598d2c3.js";import{B as E}from"./ColoredText-a9d28c70.js";import{a as Be}from"./InfoTooltip-5e158cd5.js";import{g as je}from"./StarDisplay-f7a8b292.js";import{g as Ve}from"./index-df3b34e5.js";import{C as _e}from"./CardHeader-5f3966b7.js";function Ae({level:e,ascension:s,setBoth:n,useLow:r=!1,disabled:l=!1}){const{t:u}=G("ui"),a=r?ie:$,d=p.useCallback((o=1)=>{o=le(o,1,r?ce:de);const m=a.findIndex(f=>o<=f);n({level:o,ascension:m})},[n,a,r]),i=p.useCallback(()=>{const o=a.findIndex(m=>e!==90&&e===m);n(s===o?{ascension:s+1}:{ascension:o})},[n,a,s,e]);return h(E,{sx:{bgcolor:o=>o.palette.contentNormal.main},children:[t(pe,{children:t(ue,{onChange:d,value:e,startAdornment:"Lv. ",disabled:l,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),t(S,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(r?se:oe)(e)||l,onClick:i,children:h("strong",{children:["/ ",$[s]]})}),t(A,{title:u("selectlevel"),sx:{flexGrow:1},disabled:l,children:[...r?z:re].map(([o,m])=>{const f=o===e&&m===s;return t(I,{selected:f,disabled:f,onClick:()=>n({level:o,ascension:m}),children:o===a[m]?`Lv. ${o}`:`Lv. ${o}/${a[m]}`},`${o}/${m}`)})})]})}function Ee({avatar:e,title:s,action:n}){return h(D,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,t(L,{variant:"subtitle1",sx:{flexGrow:1},children:s}),n&&t(L,{variant:"caption",children:n})]})}const P=p.createContext({teamChar:{},team:{}});function Pe({conditional:e,disabled:s=!1}){const{data:n}=p.useContext(b);return Object.keys(M(e.states,n)).length===1&&"path"in e?t(Fe,{conditional:e,disabled:s}):"path"in e?t($e,{conditional:e,disabled:s}):t(Ge,{conditional:e,disabled:s})}function Fe({conditional:e,disabled:s}){const{teamCharId:n}=p.useContext(P),{data:r}=p.useContext(b),l=W(),u=p.useCallback(f=>{l.teamChars.set(n,y=>{const C=B(y.conditional);f?j(C,e.path,f):V(C,e.path),y.conditional=C})},[l,e.path,n]),a=r.get(e.value).value,[d,i]=Object.entries(M(e.states,r))[0],o=Z(i.name),m=F(e.name);return h(S,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:a?"success":"primary",onClick:()=>u(a?void 0:d),disabled:s,startIcon:a?t(H,{}):t(N,{}),children:[m," ",o]})}function $e({conditional:e,disabled:s}){const{teamCharId:n}=p.useContext(P),{data:r}=p.useContext(b),l=W(),u=p.useCallback(f=>{l.teamChars.set(n,y=>{const C=B(y.conditional);f?j(C,e.path,f):V(C,e.path),y.conditional=C})},[l,e.path,n]),a=r.get(e.value).value,d=M(e.states,r),i=a?d[a]:void 0,o=i?Z(i.name):t(Q,{color:"secondary",children:"Not Active"}),m=F(e.name);return h(A,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:a&&i?"success":"primary",title:h("span",{children:[m," ",o]}),disabled:s,children:[t(I,{onClick:()=>u(),selected:!i,disabled:!i,children:t("span",{children:"Not Active"})}),t(_,{}),Object.entries(d).map(([f,y])=>t(I,{onClick:()=>u(f),selected:a===f,disabled:a===f,children:y.name},f))]})}function Ge({conditional:e,disabled:s}){const{teamCharId:n}=p.useContext(P),{data:r}=p.useContext(b),l=W(),u=p.useCallback((a,d)=>{l.teamChars.set(n,i=>{const o=B(i.conditional);d?j(o,a,d):V(o,a),i.conditional=o})},[l,n]);return t(E,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(M(e.states,r)).map(([a,d])=>{const i=r.get(d.value).value,o=i===a;return t(S,{color:o?"success":"primary",disabled:s,fullWidth:!0,onClick:()=>u(d.path,i?void 0:a),size:"small",startIcon:o?t(H,{}):t(N,{}),sx:{borderRadius:0},children:F(d.name)},a)})})}function q(e){return typeof e!="string"}function Z(e){if(!e)return"";let s="primary",n=e;return e&&q(e)&&e.props.color&&(s=e.props.color,n=t("span",{children:e.props.children})),t(Q,{sx:{ml:.5},color:s,children:n})}function F(e){if(q(e)){const s=e.props.key18,n=e.props.ns,r=e.props.values;return t(ve,{ns:n,key18:s,values:r,useBadge:!0})}return e}function ze({conditional:e,hideHeader:s=!1,hideDesc:n=!1,disabled:r=!1,bgt:l="normal"}){var d;const{data:u}=p.useContext(b);let a;if("path"in e){const i=u.get(e.value).value,o=v(e.states,u);a=i&&((d=o[i])==null?void 0:d.fields)}else{const i=v(e.states,u);a=Object.values(i).flatMap(o=>u.get(o.value).value?o.fields:[])}return h(U,{bgt:l,children:[!v(s,e)&&t(X,{header:e.header,hideDesc:n}),t(R,{sx:{p:0,"&:last-child":{pb:0}},children:t(Pe,{conditional:e,disabled:r})}),a&&t(J,{bgt:l,fields:a})]})}function He({sections:e,teamBuffOnly:s,hideDesc:n=!1,hideHeader:r=!1,disabled:l=!1,bgt:u="normal"}){const{data:a}=p.useContext(b);if(!e.length)return null;const d=e.map((i,o)=>i.canShow&&!a.get(i.canShow).value||s&&!i.teamBuff?null:t(Ne,{section:i,hideDesc:n,hideHeader:r,disabled:l,bgt:u},o)).filter(i=>i);return d.length?t(D,{display:"flex",flexDirection:"column",gap:1,children:d}):null}function Ne({section:e,hideDesc:s=!1,hideHeader:n=!1,disabled:r=!1,bgt:l="normal"}){return"fields"in e?t(Ue,{section:e,hideDesc:s,hideHeader:n,bgt:l}):"states"in e?t(ze,{conditional:e,hideDesc:s,hideHeader:n,disabled:r,bgt:l}):t(Je,{section:e})}function Ue({section:e,hideDesc:s,hideHeader:n,bgt:r="normal"}){return h(U,{bgt:r,children:[!v(n,e)&&e.header&&t(X,{header:e.header,hideDesc:s,hideDivider:e.fields.length===0}),t(J,{bgt:r,fields:e.fields})]})}function Je({section:e}){const{data:s}=p.useContext(b);return t("div",{children:v(e.text,s)})}function X({header:e,hideDesc:s,hideDivider:n}){const{data:r}=p.useContext(b),{icon:l,title:u,action:a}=e,d=v(l,r),i=!s&&v(e.description,r);return h(me,{children:[t(Ee,{avatar:d,title:s?u:h("span",{children:[u,t(Be,{title:t(L,{children:i})})]}),action:a}),!n&&t(_,{})]})}function Qe({refinement:e,setRefinement:s,disabled:n=!1}){const{t:r}=G("ui");return t(A,{title:r("refinement",{value:e}),disabled:n,children:fe.map(l=>t(I,{onClick:()=>s(l),selected:e===l,disabled:e===l,children:r("refinement",{value:l})},l))})}const qe=ye.lazy(()=>be(()=>import("./WeaponSelectionModal-66d3e1d8.js"),["./WeaponSelectionModal-66d3e1d8.js","./index-c622b83a.js","./index-774369b7.css","./index-c3bb2425.js","./ColoredText-a9d28c70.js","./SqBadge-1598d2c3.js","./index-df3b34e5.js","./totalUtils-f9e22f20.js","./CloseButton-7da9fd69.js","./StarDisplay-f7a8b292.js","./DropdownButton-0487de4f.js","./WeaponCard-7ca20d00.js","./SolidToggleButtonGroup-9540bda3.js","./useWeapon-746d8855.js","./LocationAutocomplete-57de42d0.js","./CardActionArea-31662b7f.js"],import.meta.url));function Ze({weaponId:e,footer:s=!1,onClose:n,extraButtons:r}){const{data:l}=p.useContext(b),u=W(),a=Le(e),{key:d="",level:i=0,refinement:o=1,ascension:m=0,lock:f,location:y="",id:C}=a??{},c=d?Ve(d):void 0,k=p.useCallback(x=>{u.weapons.set(e,x)},[e,u]),Y=p.useCallback(x=>C&&u.weapons.set(C,{location:x}),[u,C]),K=p.useCallback(x=>x.weaponTypeKey===(c==null?void 0:c.weaponType),[c]),[ee,te,ne]=he(),ae=d?ke(d,m>=2):"";p.useEffect(()=>{if(!(!c||!k||c.key!==(a==null?void 0:a.key))&&c.rarity<=2&&(i>70||m>4)){const[x,w]=z[0];k({level:x,ascension:w})}},[c,a,k,i,m]);const O=p.useMemo(()=>c&&a&&we([c.data,De(a)]),[c,a]);return t(ge,{open:!!e,onClose:n,containerProps:{maxWidth:"md"},children:h(Ce,{children:[t(qe,{ascension:m,show:ee,onHide:ne,onSelect:x=>k({key:x}),weaponTypeFilter:c&&c.weaponType}),t(R,{children:c&&O&&h(g,{container:!0,spacing:1.5,children:[t(g,{item:!0,xs:12,sm:3,children:h(g,{container:!0,spacing:1.5,children:[t(g,{item:!0,xs:6,sm:12,children:t(D,{component:"img",src:ae,className:`grad-${c.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),t(g,{item:!0,xs:6,sm:12,children:t(L,{children:t("small",{children:c.description})})})]})}),h(g,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[t(D,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:h(E,{children:[t(S,{color:"info",onClick:te,children:(c==null?void 0:c.name)??"Select a Weapon"}),(c==null?void 0:c.hasRefinement)&&t(Qe,{refinement:o,setRefinement:x=>k({refinement:x})}),r]})}),h(D,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[c&&t(Ae,{level:i,ascension:m,setBoth:k,useLow:!c.hasRefinement}),t(S,{color:"error",onClick:()=>C&&u.weapons.set(C,{lock:!f}),startIcon:f?t(Se,{}):t(Te,{}),children:f?"Locked":"Unlocked"})]}),t(je,{stars:c.rarity}),t(L,{variant:"subtitle1",children:t("strong",{children:c.passiveName})}),t(L,{gutterBottom:!0,children:c.passiveName&&c.passiveDescription(O.get(T.weapon.refinement).value-1)}),h(D,{display:"flex",flexDirection:"column",gap:1,children:[h(xe,{children:[t(_e,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),t(_,{}),t(We,{children:[T.weapon.main,T.weapon.sub,T.weapon.sub2].map(x=>{const w=O.get(x);return w.isEmpty||!w.value?null:t(Oe,{node:w,component:Re},JSON.stringify(w.info))})})]}),l&&c.document&&t(He,{sections:c.document})]})]})]})}),s&&C&&t(R,{sx:{py:1},children:h(g,{container:!0,spacing:1,children:[t(g,{item:!0,flexGrow:1,children:t(Ie,{location:y,setLocation:Y,filter:K,autoCompleteProps:{getOptionDisabled:x=>!x.key}})}),t(g,{item:!0,flexGrow:2}),!!n&&t(g,{item:!0,children:t(Me,{sx:{height:"100%"},large:!0,onClick:n})})]})})]})})}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));export{Ee as C,He as D,Ae as L,Qe as R,P as T,Ze as W,dt as a};
