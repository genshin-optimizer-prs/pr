"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[262],{4453:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67550),a=n(62197),l=n(52903);function s({avatar:e,title:t,action:n}){return(0,l.BX)(i.Z,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,(0,l.tZ)(a.Z,{variant:"subtitle1",sx:{flexGrow:1},children:t}),n&&(0,l.tZ)(a.Z,{variant:"caption",children:n})]})}},14836:(e,t,n)=>{n.d(t,{X:()=>$,Z:()=>W});var i=n(67550),a=n(62197),l=n(56961),s=n(2784),o=n(99487),c=n(11845),r=n(24264),d=n(4453),Z=n(7671),u=n(39282),h=n(12761),p=n(5658),m=n(27216),f=n(83249),v=n(94380),x=n(38553),b=n(13230),C=n(23485),g=n(12366),y=n(1665),k=n(52903);function w({conditional:e,disabled:t=!1}){const{data:n}=(0,s.useContext)(o.R);return 1===Object.keys((0,h.mY)(e.states,n)).length&&"path"in e?(0,k.tZ)(B,{conditional:e,disabled:t}):"path"in e?(0,k.tZ)(D,{conditional:e,disabled:t}):(0,k.tZ)(R,{conditional:e,disabled:t})}function B({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(b.K),{data:a}=(0,s.useContext)(o.R),l=(0,s.useCallback)((t=>{const a=(0,h.I8)(n.conditional);t?(0,h.SR)(a,e.path,t):(0,h.uH)(a,e.path),i({conditional:a})}),[e,n,i]),c=a.get(e.value).value,[r,d]=Object.entries((0,h.mY)(e.states,a))[0],Z=P(d.name),u=H(e.name);return(0,k.BX)(f.Z,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:c?"success":"primary",onClick:()=>l(c?void 0:r),disabled:t,startIcon:c?(0,k.tZ)(p.Z,{}):(0,k.tZ)(m.Z,{}),children:[u," ",Z]})}function D({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(b.K),{data:a}=(0,s.useContext)(o.R),c=(0,s.useCallback)((t=>{const a=(0,h.I8)(n.conditional);t?(0,h.SR)(a,e.path,t):(0,h.uH)(a,e.path),i({conditional:a})}),[e,n,i]),r=a.get(e.value).value,d=(0,h.mY)(e.states,a),Z=r?d[r]:void 0,u=Z?P(Z.name):(0,k.tZ)(g.Z,{color:"secondary",children:"Not Active"}),p=H(e.name);return(0,k.BX)(C.Z,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r&&Z?"success":"primary",title:(0,k.BX)("span",{children:[p," ",u]}),disabled:t,children:[(0,k.tZ)(v.Z,{onClick:()=>c(),selected:!Z,disabled:!Z,children:(0,k.tZ)("span",{children:"Not Active"})}),(0,k.tZ)(l.Z,{}),Object.entries(d).map((([e,t])=>(0,k.tZ)(v.Z,{onClick:()=>c(e),selected:r===e,disabled:r===e,children:t.name},e)))]})}function R({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(b.K),{data:a}=(0,s.useContext)(o.R),l=(0,s.useCallback)(((e,t)=>{const a=(0,h.I8)(n.conditional);t?(0,h.SR)(a,e,t):(0,h.uH)(a,e),i({conditional:a})}),[n,i]);return(0,k.tZ)(x.Z,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries((0,h.mY)(e.states,a)).map((([e,n])=>{const i=a.get(n.value).value,s=i===e;return(0,k.tZ)(f.Z,{color:s?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>l(n.path,i?void 0:e),size:"small",startIcon:s?(0,k.tZ)(p.Z,{}):(0,k.tZ)(m.Z,{}),sx:{borderRadius:0},children:H(n.name)},e)}))})}function X(e){return"string"!=typeof e}function P(e){if(!e)return"";let t="primary",n=e;return e&&X(e)&&e.props.color&&(t=e.props.color,n=(0,k.tZ)("span",{children:e.props.children})),(0,k.tZ)(g.Z,{sx:{ml:.5},color:t,children:n})}function H(e){if(X(e)){const t=e.props.key18,n=e.props.ns,i=e.props.values;return(0,k.tZ)(y.v,{ns:n,key18:t,values:i,useBadge:!0})}return e}function S({conditional:e,hideHeader:t=!1,hideDesc:n=!1}){const{data:i}=(0,s.useContext)(o.R);let a;if("path"in e){var l;const t=i.get(e.value).value,n=(0,c.mY)(e.states,i);a=t&&(null==(l=n[t])?void 0:l.fields)}else{const t=(0,c.mY)(e.states,i);a=Object.values(t).flatMap((e=>i.get(e.value).value?e.fields:[]))}return(0,k.BX)(r.Z,{children:[!(0,c.mY)(t,e)&&(0,k.tZ)($,{header:e.header,hideDesc:n}),(0,k.tZ)(Z.Z,{sx:{p:0,"&:last-child":{pb:0}},children:(0,k.tZ)(w,{conditional:e})}),a&&(0,k.tZ)(u.ZP,{fields:a})]})}var Y=n(12702);function W({sections:e,teamBuffOnly:t,hideDesc:n=!1,hideHeader:a=!1}){const{data:l}=(0,s.useContext)(o.R);if(!e.length)return null;const c=e.map(((e,i)=>e.canShow&&!l.get(e.canShow).value||t&&!e.teamBuff?null:(0,k.tZ)(I,{section:e,hideDesc:n,hideHeader:a},i))).filter((e=>e));return c.length?(0,k.tZ)(i.Z,{display:"flex",flexDirection:"column",gap:1,children:c}):null}function I({section:e,hideDesc:t=!1,hideHeader:n=!1}){return"fields"in e?(0,k.tZ)(L,{section:e,hideDesc:t,hideHeader:n}):"states"in e?(0,k.tZ)(S,{conditional:e,hideDesc:t,hideHeader:n}):(0,k.tZ)(O,{section:e})}function L({section:e,hideDesc:t,hideHeader:n}){return(0,k.BX)(r.Z,{children:[!(0,c.mY)(n,e)&&e.header&&(0,k.tZ)($,{header:e.header,hideDesc:t,hideDivider:0===e.fields.length}),(0,k.tZ)(u.ZP,{fields:e.fields})]})}function O({section:e}){const{data:t}=(0,s.useContext)(o.R);return(0,k.tZ)("div",{children:(0,c.mY)(e.text,t)})}function $({header:e,hideDesc:t,hideDivider:n}){const{data:i}=(0,s.useContext)(o.R),{icon:r,title:Z,action:u}=e,h=(0,c.mY)(r,i),p=!t&&(0,c.mY)(e.description,i),m=t?Z:(0,k.BX)("span",{children:[Z,(0,k.tZ)(Y.L,{title:(0,k.tZ)(a.Z,{children:p})})]});return(0,k.BX)(k.HY,{children:[(0,k.tZ)(d.Z,{avatar:h,title:m,action:u}),!n&&(0,k.tZ)(l.Z,{})]})}},86512:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(30538),a=n(12761),l=n(38553),s=n(83249),o=n(94380),c=n(2784),r=n(21560),d=n(89977),Z=n(23485),u=n(52903);function h({level:e,ascension:t,setBoth:n,useLow:h=!1}){const{t:p}=(0,r.$G)("ui"),m=h?i.sU:i.SJ,f=(0,c.useCallback)(((e=1)=>{e=(0,a.re)(e,1,h?i.d8:i.Qq);const t=m.findIndex((t=>e<=t));n({level:e,ascension:t})}),[n,m,h]),v=(0,c.useCallback)((()=>{const i=m.findIndex((t=>90!==e&&e===t));n(t===i?{ascension:t+1}:{ascension:i})}),[n,m,t,e]);return(0,u.BX)(l.Z,{sx:{bgcolor:e=>e.palette.contentDark.main},children:[(0,u.tZ)(d.CC,{children:(0,u.tZ)(d.ZP,{onChange:f,value:e,startAdornment:"Lv. ",inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),(0,u.tZ)(s.Z,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(h?i.nB:i.ek)(e),onClick:v,children:(0,u.BX)("strong",{children:["/ ",i.SJ[t]]})}),(0,u.tZ)(Z.Z,{title:p("selectlevel"),sx:{flexGrow:1},children:[...h?i.vF:i.D4].map((([i,a])=>{const l=i===e&&a===t;return(0,u.tZ)(o.Z,{selected:l,disabled:l,onClick:()=>n({level:i,ascension:a}),children:i===m[a]?`Lv. ${i}`:`Lv. ${i}/${m[a]}`},`${i}/${a}`)}))})]})}},23128:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(31981),a=n(94380),l=n(21560),s=n(23485),o=n(52903);function c({refinement:e,setRefinement:t}){const{t:n}=(0,l.$G)("ui");return(0,o.tZ)(s.Z,{title:n("refinement",{value:e}),children:i.Lb.map((i=>(0,o.tZ)(a.Z,{onClick:()=>t(i),selected:e===i,disabled:e===i,children:n("refinement",{value:i})},i)))})}},64262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var i=n(11892),a=n(30538),l=n(54278),s=n(40535),o=n(7671),c=n(41075),r=n(67550),d=n(62197),Z=n(38553),u=n(83249),h=n(42523),p=n(56961),m=n(15873),f=n(2784),v=n(24264),x=n(87833),b=n(50090),C=n(23690),g=n(14836),y=n(39282),k=n(86512),w=n(69698),B=n(23128),D=n(36674),R=n(99487),X=n(86116),P=n(25864),H=n(34156),S=n(41319),Y=n(2754),W=n(95178),I=n(55893),L=n(30311),O=n(52903);const $=f.lazy((()=>n.e(592).then(n.bind(n,18571))));function j({weaponId:e,footer:t=!1,onClose:n,extraButtons:j}){var G;const{data:K}=(0,f.useContext)(R.R),{database:N}=(0,f.useContext)(H.t),T=(0,L.Z)(e),{key:A="",level:z=0,refinement:J=1,ascension:M=0,lock:q,location:E="",id:F}=null!=T?T:{},U=A?(0,P.ub)(A):void 0,Q=(0,f.useCallback)((t=>{N.weapons.set(e,t)}),[e,N]),{gender:V}=(0,I.Z)(),_=(0,f.useMemo)((()=>E?(0,X.m)(N.chars.LocationToCharacterKey(E),V):void 0),[N,V,E]),ee=_&&_.weaponTypeKey,te=(0,f.useCallback)((e=>F&&N.weapons.set(F,{location:e})),[N,F]),ne=(0,f.useCallback)((e=>e.weaponTypeKey===(null==U?void 0:U.weaponType)),[U]),[ie,ae,le]=(0,W.aV)(),se=A?(0,i.Aq)(A,M>=2):"";(0,f.useEffect)((()=>{if(U&&Q&&U.key===(null==T?void 0:T.key)&&U.rarity<=2&&(z>70||M>4)){const[e,t]=a.vF[0];Q({level:e,ascension:t})}}),[U,T,Q,z,M]);const oe=(0,f.useMemo)((()=>U&&T&&(0,Y.mP)([U.data,(0,Y.v0)(T)])),[U,T]);return(0,O.tZ)(w.Z,{open:!!e,onClose:n,containerProps:{maxWidth:"md"},children:(0,O.BX)(x.Z,{children:[(0,O.tZ)($,{ascension:M,show:ie,onHide:le,onSelect:e=>Q({key:e}),weaponTypeFilter:ee}),(0,O.tZ)(o.Z,{children:U&&oe&&(0,O.BX)(c.ZP,{container:!0,spacing:1.5,children:[(0,O.tZ)(c.ZP,{item:!0,xs:12,sm:3,children:(0,O.BX)(c.ZP,{container:!0,spacing:1.5,children:[(0,O.tZ)(c.ZP,{item:!0,xs:6,sm:12,children:(0,O.tZ)(r.Z,{component:"img",src:se,className:`grad-${U.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,O.tZ)(c.ZP,{item:!0,xs:6,sm:12,children:(0,O.tZ)(d.Z,{children:(0,O.tZ)("small",{children:U.description})})})]})}),(0,O.BX)(c.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,O.tZ)(r.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:(0,O.BX)(Z.Z,{children:[(0,O.tZ)(u.Z,{color:"info",onClick:ae,children:null!=(G=null==U?void 0:U.name)?G:"Select a Weapon"}),(null==U?void 0:U.hasRefinement)&&(0,O.tZ)(B.Z,{refinement:J,setRefinement:e=>Q({refinement:e})}),j]})}),(0,O.BX)(r.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[U&&(0,O.tZ)(k.Z,{level:z,ascension:M,setBoth:Q,useLow:!U.hasRefinement}),(0,O.tZ)(u.Z,{color:"error",onClick:()=>F&&N.weapons.set(F,{lock:!q}),startIcon:q?(0,O.tZ)(l.Z,{}):(0,O.tZ)(s.Z,{}),children:q?"Locked":"Unlocked"})]}),(0,O.tZ)(D.q,{stars:U.rarity}),(0,O.tZ)(d.Z,{variant:"subtitle1",children:(0,O.tZ)("strong",{children:U.passiveName})}),(0,O.tZ)(d.Z,{gutterBottom:!0,children:U.passiveName&&U.passiveDescription(oe.get(S.ri.weapon.refinement).value-1)}),(0,O.BX)(r.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,O.BX)(v.Z,{children:[(0,O.tZ)(h.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,O.tZ)(p.Z,{}),(0,O.tZ)(y.lD,{children:[S.ri.weapon.main,S.ri.weapon.sub,S.ri.weapon.sub2].map((e=>{const t=oe.get(e);return t.isEmpty||!t.value?null:(0,O.tZ)(y.JW,{node:t,component:m.ZP},JSON.stringify(t.info))}))})]}),K&&U.document&&(0,O.tZ)(g.Z,{sections:U.document})]})]})]})}),t&&F&&(0,O.tZ)(o.Z,{sx:{py:1},children:(0,O.BX)(c.ZP,{container:!0,spacing:1,children:[(0,O.tZ)(c.ZP,{item:!0,flexGrow:1,children:(0,O.tZ)(b.W,{location:E,setLocation:te,filter:ne,autoCompleteProps:{getOptionDisabled:e=>!e.key}})}),(0,O.tZ)(c.ZP,{item:!0,flexGrow:2}),!!n&&(0,O.tZ)(c.ZP,{item:!0,children:(0,O.tZ)(C.Z,{sx:{height:"100%"},large:!0,onClick:n})})]})})]})})}}}]);