import{u as z,e as p,n as h,p as t,dK as se,dL as oe,bX as G,B as S,dM as H,dN as re,dO as ie,a0 as le,dP as ce,dQ as de,a2 as ue,a1 as pe,T as L,K as D,dR as M,b as W,b2 as j,cE as B,dS as _,bj as N,bk as U,D as E,dT as v,C as R,t as V,am as fe,dU as me,Q as he,J as g,s as xe,V as Ce,R as ge,_ as be}from"./index-bcf8dadf.js";import{T as ye,x as ve,v as ke,w as we,u as T}from"./index-54799864.js";import{u as De}from"./useWeapon-69777588.js";import{c as Le,e as Se,f as Te}from"./LocationAutocomplete-8fb82de0.js";import{C as Ie}from"./CloseButton-0be2014f.js";import{D as y,d as J,b as Me,a as We,L as Oe}from"./FieldDisplay-c5e243d6.js";import{M as I,D as A}from"./DropdownButton-56bcf16e.js";import{S as Q}from"./SqBadge-c31351c3.js";import{B as P}from"./ColoredText-b0929107.js";import{a as Re}from"./InfoTooltip-a8748d2c.js";import{b as je}from"./StarDisplay-bc344972.js";import{g as Be}from"./index-5add8cec.js";import{C as _e}from"./CardHeader-c2775b41.js";function Ee({level:e,ascension:a,setBoth:n,useLow:i=!1,disabled:c=!1}){const{t:u}=z("ui"),s=i?ie:G,o=p.useCallback((r=1)=>{r=le(r,1,i?ce:de);const f=s.findIndex(m=>r<=m);n({level:r,ascension:f})},[n,s,i]),d=p.useCallback(()=>{const r=s.findIndex(f=>e!==90&&e===f);n(a===r?{ascension:a+1}:{ascension:r})},[n,s,a,e]);return h(P,{sx:{bgcolor:r=>r.palette.contentNormal.main},children:[t(pe,{children:t(ue,{onChange:o,value:e,startAdornment:"Lv. ",disabled:c,inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),t(S,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(i?se:oe)(e)||c,onClick:d,children:h("strong",{children:["/ ",G[a]]})}),t(A,{title:u("selectlevel"),sx:{flexGrow:1},disabled:c,children:[...i?H:re].map(([r,f])=>{const m=r===e&&f===a;return t(I,{selected:m,disabled:m,onClick:()=>n({level:r,ascension:f}),children:r===s[f]?`Lv. ${r}`:`Lv. ${r}/${s[f]}`},`${r}/${f}`)})})]})}function Ve({avatar:e,title:a,action:n}){return h(D,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,t(L,{variant:"subtitle1",sx:{flexGrow:1},children:a}),n&&t(L,{variant:"caption",children:n})]})}const F=p.createContext({teamChar:{},team:{}});function Ae({conditional:e,disabled:a=!1}){const{data:n}=p.useContext(y);return Object.keys(M(e.states,n)).length===1&&"path"in e?t(Pe,{conditional:e,disabled:a}):"path"in e?t(Fe,{conditional:e,disabled:a}):t($e,{conditional:e,disabled:a})}function Pe({conditional:e,disabled:a}){const{teamCharId:n}=p.useContext(F),{data:i}=p.useContext(y),c=W(),u=p.useCallback(m=>{c.teamChars.set(n,b=>{const C=j(b.conditional);m?B(C,e.path,m):_(C,e.path),b.conditional=C})},[c,e.path,n]),s=i.get(e.value).value,[o,d]=Object.entries(M(e.states,i))[0],r=X(d.name),f=$(e.name);return h(S,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:s?"success":"primary",onClick:()=>u(s?void 0:o),disabled:a,startIcon:s?t(N,{}):t(U,{}),children:[f," ",r]})}function Fe({conditional:e,disabled:a}){const{teamCharId:n}=p.useContext(F),{data:i}=p.useContext(y),c=W(),u=p.useCallback(m=>{c.teamChars.set(n,b=>{const C=j(b.conditional);m?B(C,e.path,m):_(C,e.path),b.conditional=C})},[c,e.path,n]),s=i.get(e.value).value,o=M(e.states,i),d=s?o[s]:void 0,r=d?X(d.name):t(Q,{color:"secondary",children:"Not Active"}),f=$(e.name);return h(A,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:s&&d?"success":"primary",title:h("span",{children:[f," ",r]}),disabled:a,children:[t(I,{onClick:()=>u(),selected:!d,disabled:!d,children:t("span",{children:"Not Active"})}),t(E,{}),Object.entries(o).map(([m,b])=>t(I,{onClick:()=>u(m),selected:s===m,disabled:s===m,children:b.name},m))]})}function $e({conditional:e,disabled:a}){const{teamCharId:n}=p.useContext(F),{data:i}=p.useContext(y),c=W(),u=p.useCallback((s,o)=>{c.teamChars.set(n,d=>{const r=j(d.conditional);o?B(r,s,o):_(r,s),d.conditional=r})},[c,n]);return t(P,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(M(e.states,i)).map(([s,o])=>{const d=i.get(o.value).value,r=d===s;return t(S,{color:r?"success":"primary",disabled:a,fullWidth:!0,onClick:()=>u(o.path,d?void 0:s),size:"small",startIcon:r?t(N,{}):t(U,{}),sx:{borderRadius:0},children:$(o.name)},s)})})}function q(e){return typeof e!="string"}function X(e){if(!e)return"";let a="primary",n=e;return e&&q(e)&&e.props.color&&(a=e.props.color,n=t("span",{children:e.props.children})),t(Q,{sx:{ml:.5},color:a,children:n})}function $(e){if(q(e)){const a=e.props.key18,n=e.props.ns,i=e.props.values;return t(ye,{ns:n,key18:a,values:i,useBadge:!0})}return e}function Ge({conditional:e,hideHeader:a=!1,hideDesc:n=!1,disabled:i=!1}){var s;const{data:c}=p.useContext(y);let u;if("path"in e){const o=c.get(e.value).value,d=v(e.states,c);u=o&&((s=d[o])==null?void 0:s.fields)}else{const o=v(e.states,c);u=Object.values(o).flatMap(d=>c.get(d.value).value?d.fields:[])}return h(V,{children:[!v(a,e)&&t(K,{header:e.header,hideDesc:n}),t(R,{sx:{p:0,"&:last-child":{pb:0}},children:t(Ae,{conditional:e,disabled:i})}),u&&t(J,{fields:u})]})}function ze({sections:e,teamBuffOnly:a,hideDesc:n=!1,hideHeader:i=!1,disabled:c=!1}){const{data:u}=p.useContext(y);if(!e.length)return null;const s=e.map((o,d)=>o.canShow&&!u.get(o.canShow).value||a&&!o.teamBuff?null:t(He,{section:o,hideDesc:n,hideHeader:i,disabled:c},d)).filter(o=>o);return s.length?t(D,{display:"flex",flexDirection:"column",gap:1,children:s}):null}function He({section:e,hideDesc:a=!1,hideHeader:n=!1,disabled:i=!1}){return"fields"in e?t(Ne,{section:e,hideDesc:a,hideHeader:n}):"states"in e?t(Ge,{conditional:e,hideDesc:a,hideHeader:n,disabled:i}):t(Ue,{section:e})}function Ne({section:e,hideDesc:a,hideHeader:n}){return h(V,{children:[!v(n,e)&&e.header&&t(K,{header:e.header,hideDesc:a,hideDivider:e.fields.length===0}),t(J,{fields:e.fields})]})}function Ue({section:e}){const{data:a}=p.useContext(y);return t("div",{children:v(e.text,a)})}function K({header:e,hideDesc:a,hideDivider:n}){const{data:i}=p.useContext(y),{icon:c,title:u,action:s}=e,o=v(c,i),d=!a&&v(e.description,i);return h(fe,{children:[t(Ve,{avatar:o,title:a?u:h("span",{children:[u,t(Re,{title:t(L,{children:d})})]}),action:s}),!n&&t(E,{})]})}function Je({refinement:e,setRefinement:a,disabled:n=!1}){const{t:i}=z("ui");return t(A,{title:i("refinement",{value:e}),disabled:n,children:me.map(c=>t(I,{onClick:()=>a(c),selected:e===c,disabled:e===c,children:i("refinement",{value:c})},c))})}const Qe=ge.lazy(()=>be(()=>import("./WeaponSelectionModal-1a718c87.js"),["./WeaponSelectionModal-1a718c87.js","./index-bcf8dadf.js","./index-d3c5961b.css","./index-54799864.js","./ColoredText-b0929107.js","./SqBadge-c31351c3.js","./index-5add8cec.js","./totalUtils-860e2572.js","./CloseButton-0be2014f.js","./StarDisplay-bc344972.js","./DropdownButton-56bcf16e.js","./WeaponCard-e7d47b14.js","./useWeapon-69777588.js","./LocationAutocomplete-8fb82de0.js","./CardActionArea-2cd64340.js"],import.meta.url));function qe({weaponId:e,footer:a=!1,onClose:n,extraButtons:i}){const{data:c}=p.useContext(y),u=W(),s=De(e),{key:o="",level:d=0,refinement:r=1,ascension:f=0,lock:m,location:b="",id:C}=s??{},l=o?Be(o):void 0,k=p.useCallback(x=>{u.weapons.set(e,x)},[e,u]),Y=p.useCallback(x=>C&&u.weapons.set(C,{location:x}),[u,C]),Z=p.useCallback(x=>x.weaponTypeKey===(l==null?void 0:l.weaponType),[l]),[ee,te,ne]=he(),ae=o?ve(o,f>=2):"";p.useEffect(()=>{if(!(!l||!k||l.key!==(s==null?void 0:s.key))&&l.rarity<=2&&(d>70||f>4)){const[x,w]=H[0];k({level:x,ascension:w})}},[l,s,k,d,f]);const O=p.useMemo(()=>l&&s&&ke([l.data,we(s)]),[l,s]);return t(Ce,{open:!!e,onClose:n,containerProps:{maxWidth:"md"},children:h(xe,{children:[t(Qe,{ascension:f,show:ee,onHide:ne,onSelect:x=>k({key:x}),weaponTypeFilter:l&&l.weaponType}),t(R,{children:l&&O&&h(g,{container:!0,spacing:1.5,children:[t(g,{item:!0,xs:12,sm:3,children:h(g,{container:!0,spacing:1.5,children:[t(g,{item:!0,xs:6,sm:12,children:t(D,{component:"img",src:ae,className:`grad-${l.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),t(g,{item:!0,xs:6,sm:12,children:t(L,{children:t("small",{children:l.description})})})]})}),h(g,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[t(D,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:h(P,{children:[t(S,{color:"info",onClick:te,children:(l==null?void 0:l.name)??"Select a Weapon"}),(l==null?void 0:l.hasRefinement)&&t(Je,{refinement:r,setRefinement:x=>k({refinement:x})}),i]})}),h(D,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[l&&t(Ee,{level:d,ascension:f,setBoth:k,useLow:!l.hasRefinement}),t(S,{color:"error",onClick:()=>C&&u.weapons.set(C,{lock:!m}),startIcon:m?t(Le,{}):t(Se,{}),children:m?"Locked":"Unlocked"})]}),t(je,{stars:l.rarity}),t(L,{variant:"subtitle1",children:t("strong",{children:l.passiveName})}),t(L,{gutterBottom:!0,children:l.passiveName&&l.passiveDescription(O.get(T.weapon.refinement).value-1)}),h(D,{display:"flex",flexDirection:"column",gap:1,children:[h(V,{children:[t(_e,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),t(E,{}),t(Me,{children:[T.weapon.main,T.weapon.sub,T.weapon.sub2].map(x=>{const w=O.get(x);return w.isEmpty||!w.value?null:t(We,{node:w,component:Oe},JSON.stringify(w.info))})})]}),c&&l.document&&t(ze,{sections:l.document})]})]})]})}),a&&C&&t(R,{sx:{py:1},children:h(g,{container:!0,spacing:1,children:[t(g,{item:!0,flexGrow:1,children:t(Te,{location:b,setLocation:Y,filter:Z,autoCompleteProps:{getOptionDisabled:x=>!x.key}})}),t(g,{item:!0,flexGrow:2}),!!n&&t(g,{item:!0,children:t(Ie,{sx:{height:"100%"},large:!0,onClick:n})})]})})]})})}const ct=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{Ve as C,ze as D,Ee as L,Je as R,F as T,qe as W,ct as a};
