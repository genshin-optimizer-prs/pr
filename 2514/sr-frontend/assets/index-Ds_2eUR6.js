import{N as y,n as e,E as g,m as T,ak as de,U as ue,V as he,r as m,q as d,ac as Ie,H as x,X as k,L as v,I as Z,aq as D,W as pe,as as ze,ar as Oe,aK as $e,am as E,an as Pe,aL as Ke,ap as Ne,ao as We,Y as O,F as me,S as fe,au as Le,av as Ae,ab as w,ay as F,G as S,aa as ne,aB as ge,aC as Ce,aD as Ee,B as qe,aw as je,ax as Ve,aE as Ge,aF as Re,aG as Je,$ as be,aH as Fe,aI as He,aJ as ae}from"./index-DscSh-gh.js";import{u as xe,C as Xe,d as Ue,e as oe,T as re,f as Qe,a as Ye,b as Ze,c as et,t as ye,N as ve,I as ke,g as tt,h as nt,k as Se,j as at,D as ot,l as rt,S as st,i as it,B as ct,M as lt,L as dt,A as q,m as j,n as V,o as G,p as ut}from"./TrendingUp-Dqr5aQ-h.js";import{u as Te,S as W,b as $,C as ht,a as pt}from"./CharacterEditor-DHDSOmpt.js";import{d as Me}from"./Close-C2_KEbB2.js";import{C as ee}from"./CardActionArea-vdhzhafy.js";import{C as P}from"./useForceUpdate-B9Fm6SrV.js";import{s as mt,t as ft,b as se,w as gt,c as Ct,l as bt,r as xt}from"./index-14YljUt6.js";import{u as yt}from"./useBoolState-Rvv3b75O.js";import{M as B,D as K}from"./DropdownButton-CUuFxoQS.js";import{D as De,a as vt}from"./LocationAutocomplete-CMd5HN-N.js";import{I as kt}from"./InfoTooltip-CveDdGOn.js";import"./index-CdGCObLU.js";function L(t){const{database:n}=y();return xe(n.combos,t)}function St({comboId:t}){const n=L(t);return e(g,{display:"flex",flexDirection:"column",gap:1,children:n.comboMetadata.map((a,o)=>e(Tt,{comboMetadataIndex:o,comboId:t},`${o}_${a==null?void 0:a.characterKey}`))})}function Tt({comboMetadataIndex:t,comboId:n}){var r;const{database:a}=y(),o=L(n);function i(u){if(u===""){a.teams.set(n,p=>p.loadoutMetadata[t]=void 0);return}a.chars.getOrCreate(u);const l=o.comboMetadata.findIndex(p=>(p==null?void 0:p.characterKey)===u);if(l===-1)a.combos.set(n,p=>{p.comboMetadata[t]={characterKey:u}});else{if(l===t)return;const p=o.comboMetadata[l],s=o.comboMetadata[t];a.combos.set(n,c=>{c.comboMetadata[t]=p,c.comboMetadata[l]=s})}}return e(Xe,{charKey:((r=o.comboMetadata[t])==null?void 0:r.characterKey)??"",setCharKey:i})}function Mt({comboId:t,charKey:n}){const{t:a}=T("page_team"),o=de(),{database:i}=y(),r=L(t),u=ue(),l=he(u.breakpoints.down("md")),[p,s]=m.useState(!1),c=f=>{i.combos.set(t,{name:f})},h=f=>{i.combos.set(t,{description:f})};return d(g,{sx:()=>({borderBottom:"1px rgb(200,200,200,0.3) solid","& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px",backgroundColor:"rgb(200,200,200,0.5)"}}),children:[e(ee,{onClick:()=>s(!0),children:e(Ie,{placement:"top",title:d(g,{children:[d(g,{sx:{display:"flex",color:"info.light",gap:1},children:[e(Ue,{}),e(x,{children:e("strong",{children:a`team.editNameDesc`})})]}),!!r.description&&e(x,{children:r.description})]}),children:e(k,{sx:{display:"flex",justifyContent:"center","&:hover":{color:"info.light"}},children:d(x,{variant:"h5",sx:{display:"flex",gap:1,alignItems:"center",justifyContent:"center",textShadow:"#000 0 0 10px !important"},children:[e(oe,{}),r.name]})})})}),e(pe,{open:p,onClose:()=>s(!1),children:d(v,{children:[e(P,{title:a`team.editNameDesc`,avatar:e(oe,{}),titleTypographyProps:{variant:"h6"},action:e(Z,{onClick:()=>s(!1),children:e(Me,{})})}),e(D,{}),e(k,{children:d(g,{display:"flex",flexDirection:"column",gap:2,sx:{mt:2},children:[e(re,{label:a`team.name`,value:r.name,onChange:f=>c(f),autoFocus:!0}),e(re,{label:a`team.desc`,value:r.description,onChange:f=>h(f),multiline:!0,minRows:4}),e(St,{comboId:t})]})})]})}),e(D,{}),e(Oe,{variant:"fullWidth",value:n??"team",orientation:l?"vertical":"horizontal",children:r.comboMetadata.map((f,C)=>{const b=f==null?void 0:f.characterKey;return e(ze,{icon:e(Qe,{}),iconPosition:"start",value:b??C,disabled:!f,label:b?e(x,{children:a(`charNames_gen:${b}`)}):`Character ${C+1}`,onClick:()=>b&&o(`/combos/${t}/${b}`)},C)})})]})}const H=m.createContext({});function _(){return m.useContext(H)}const A=m.createContext({presetIndex:0,setPresetIndex:()=>{}});function Dt({comboId:t,currentChar:n,children:a}){const o=L(t),{presetIndex:i}=m.useContext(A),r=R(o.comboMetadata[0]),u=R(o.comboMetadata[1]),l=R(o.comboMetadata[2]),p=R(o.comboMetadata[3]),s=m.useMemo(()=>mt([...ft(o.comboMetadata.map((h,f)=>h===void 0?void 0:$e[f]).filter(h=>!!h)),...r?J(r):[],...u?J(u):[],...l?J(l):[],...p?J(p):[],E.common.lvl.add(80),E.common.res.add(.1),E.common.isBroken.add(0),E.common.maxToughness.add(100),Pe.common.critMode.add("avg"),...o.conditionals.flatMap(({sheet:h,src:f,dst:C,condKey:b,condValues:M})=>M.flatMap((U,Q)=>se(`preset${Q}`,Ke(h,f,C)(b,U)))),...o.bonusStats.flatMap(({tag:h,values:f})=>f.flatMap((C,b)=>se(`preset${b}`,{tag:{...h},value:Ne(C)})))]),[o,r,u,l,p]),c=m.useMemo(()=>(n&&(s==null?void 0:s.withTag({src:n,dst:n,preset:`preset${i}`})))??null,[s,n,i]);return e(We.Provider,{value:c,children:a})}function R(t){const n=Te(t==null?void 0:t.characterKey),a=Ye(t==null?void 0:t.buildId),o=Ze(a==null?void 0:a.lightConeId),i=et(a==null?void 0:a.relicIds);return m.useMemo(()=>({character:n,lightCone:o,relics:i}),[n,o,i])}function J({character:t,lightCone:n,relics:a}){return t?gt(t.key,...Ct(t),...bt(n),...xt(Object.values(a).filter(o=>!!o).map(o=>({set:o.setKey,stats:[...o.substats.filter(({key:i})=>i!=="").map(i=>({key:i.key,value:i.accurateValue})),{key:o.mainStatKey,value:o.mainStatVal}]})))):[]}function wt(){const[t,n,a]=yt();return d(me,{children:[e(O,{onClick:n,children:"Bonus Stats"}),e(Bt,{open:t,onClose:a})]})}function Bt({open:t,onClose:n}){const{database:a}=y(),{presetIndex:o}=m.useContext(A),{comboId:i,combo:{bonusStats:r},comboMetadatum:{characterKey:u}}=_(),l=p=>{const s=_t(p,u);a.combos.setBonusStat(i,s,0,o)};return e(pe,{open:t,onClose:n,children:d(v,{children:[e(P,{title:"Bonus Stats"}),e(D,{}),e(k,{children:d(W,{spacing:1,children:[r.map(({tag:p,values:s},c)=>e(Ot,{tag:p,value:s[o],setValue:h=>a.combos.setBonusStat(i,p,h,o),onDelete:()=>a.combos.setBonusStat(i,p,0,o),setTag:h=>a.combos.setBonusStat(i,h,0,o)},JSON.stringify(p)+c)),e(zt,{onSelect:l})]})})]})})}function _t(t,n){return{src:n,dst:n,et:"own",q:t,qt:"premod",sheet:"agg"}}const It=["hp","hp_","def","def_","atk","atk_","spd","spd_","dmg_","enerRegen_","brEffect_","crit_","crit_dmg_","eff_","eff_res_","heal_"];function zt({tag:t={},onSelect:n}){var a;return e(K,{title:(t&&((a=ye.subset(t)[0])==null?void 0:a.title))??"Add Bonus Stat",children:It.map(o=>e(B,{onClick:()=>n(o),children:o},o))})}function Ot({tag:t,setTag:n,value:a,setValue:o,onDelete:i}){var u;const r=(u=t.name||t.q)==null?void 0:u.endsWith("_");return e(v,{bgt:"light",children:d(k,{sx:{display:"flex",gap:1,justifyContent:"space-around"},children:[e(fe,{sx:{m:"auto"},children:t.q}),t.q==="dmg_"&&e($t,{tag:t,setElementalType:l=>{const{elementalType:p,...s}=t;n(l?{...s,elementalType:l}:s)}}),e(ve,{float:!0,value:a,sx:{flexBasis:150,flexGrow:1,height:"100%"},onChange:o,placeholder:"Stat Value",size:"small",inputProps:{sx:{textAlign:"right"}},InputProps:{endAdornment:d(ke,{position:"end",sx:{ml:0},children:[r?"%":void 0," ",e(Z,{"aria-label":"Delete Bonus Stat",onClick:i,edge:"end",children:e(De,{fontSize:"small"})})]})}})]})})}function $t({tag:t,setElementalType:n}){return d(K,{title:t.elementalType??"No Element",children:[e(B,{onClick:()=>n(null),children:"No Element"}),Le.map(a=>e(B,{onClick:()=>n(a),children:a},a))]})}function ie({tag:t}){var n;return e(Ae,{color:tt(t),children:((n=ye.subset(t)[0])==null?void 0:n.title)||t.name||t.q})}function X({optTarget:t,setOptTarget:n,buttonProps:a={}}){const{t:o}=T("optimize"),i=$();return e(K,{title:d(g,{sx:{display:"flex",gap:1},children:[o("optTarget"),t?e(ie,{tag:t.tag}):null]}),...a,children:i==null?void 0:i.listFormulas(w.listing.formulas).map((r,u)=>d(B,{onClick:()=>n(r),children:[e(vt,{children:e(ie,{tag:r.tag})}),e(g,{sx:{display:"flex",gap:1,ml:1},children:nt(r.tag).map(l=>e(fe,{children:l},l))})]},`${u}_${r.tag.sheet||r.tag.q}_${r.tag.name}`))})}function Pt(){const{database:t}=y(),{combo:n,comboId:a}=_();return d(v,{sx:{overflow:"visible",top:137,position:"sticky",zIndex:101},children:[e(P,{title:"Combo Editor"}),e(D,{}),d(k,{sx:{display:"flex",gap:1,overflowX:"auto"},children:[n.frames.map((o,i)=>e(Kt,{read:o,index:i,setTarget:r=>t.combos.set(a,u=>{const l=structuredClone(u.frames);l[i]=r,u.frames=l})},i+JSON.stringify(o??{}))),e(g,{sx:{flexShrink:0},children:e(X,{setOptTarget:o=>t.combos.set(a,i=>{i.frames=[...i.frames,o]})})})]})]})}function Kt({read:t,index:n,setTarget:a}){const{presetIndex:o,setPresetIndex:i}=m.useContext(A);return d(v,{bgt:"light",sx:r=>({flexShrink:0,outline:o===n?`solid ${r.palette.success.main}`:void 0}),children:[e(Se,{condition:o!==n,wrapper:r=>e(ee,{onClick:()=>i(n),children:r}),children:e(P,{title:`Combo ${n+1}`})}),e(D,{}),e(k,{children:e(X,{optTarget:t,setOptTarget:a})})]})}const Nt={xs:12,sm:6,md:4};function Wt(){const{comboMetadatum:{characterKey:t}}=_(),n=$(),{database:a}=y(),o=["basic","skill","ult","talent"],i=ue(),r=he(i.breakpoints.up("lg")),u=at[t],l=(n==null?void 0:n.compute(w.char.eidolon).val)??0,p=m.useMemo(()=>u&&F(1,ge).map(s=>{const c=u[`eidolon${s}`];return c?e(ce,{talentKey:`eidolon${s}`,sheetElement:c,onClickTitle:()=>a.chars.set(t,{eidolon:s===l?s-1:s})}):null}),[t,u,a.chars,l]);if(!(!u||!n))return e(me,{children:d(S,{container:!0,spacing:1,children:[r&&d(S,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(le,{}),p&&p.map((s,c)=>e(g,{sx:{opacity:l>=c+1?1:.5},children:s},c))]}),e(S,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:o.map(s=>{const c=u[s];return c?e(S,{item:!0,...Nt,children:e(ce,{talentKey:s,sheetElement:c})},s):null})}),!r&&e(S,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:e(S,{item:!0,xs:12,children:e(le,{})})})]})})}function ce({sheetElement:t,talentKey:n,onClickTitle:a}){const{comboMetadatum:{characterKey:o}}=_(),i=m.useCallback(c=>e(ee,{onClick:a,children:c}),[a]);let r=null;r=null,rt(n)&&(r=e(Lt,{talentKey:n,dropDownButtonProps:{sx:{borderRadius:0}},setTalent:c=>p.chars.set(o,h=>{h[n]=c})}));const{comboId:u}=m.useContext(H),{presetIndex:l}=m.useContext(A),{database:p}=y(),s=m.useCallback((c,h,f,C)=>p.combos.setConditional(u,h,c,o,f,C,l),[u,p.combos,o,l]);return d(v,{bgt:"light",sx:{height:"100%"},children:[r,d(k,{children:[e(Se,{condition:!!a,wrapper:i,children:d(S,{container:!0,sx:{flexWrap:"nowrap"},children:[e(S,{item:!0,children:e(g,{component:ne?ne:"img",src:t==null?void 0:t.img,sx:{width:60,height:"auto"}})}),d(S,{item:!0,flexGrow:1,sx:{pl:1},children:[e(x,{variant:"h6",children:t==null?void 0:t.title}),t.subtitle&&e(x,{variant:"subtitle1",children:t.subtitle})]})]})}),t.documents.map((c,h)=>e(ot,{document:c,collapse:!0,setConditional:s},h))]})]})}function le(){const{t}=T("sheet_gen"),n=$(),{comboMetadatum:{characterKey:a}}=_(),{database:o}=y();if(!n)return null;const i=n.compute(w.char.eidolon).val;return e(K,{fullWidth:!0,title:d("span",{children:[t("eidolonLvl")," ",i]}),color:"primary",children:F(0,ge).map(r=>e(B,{selected:i===r,disabled:i===r,onClick:()=>o.chars.set(a,{eidolon:r}),children:d("span",{children:[t("eidolonLvl")," ",r]})},r))})}function Lt({talentKey:t,setTalent:n,dropDownButtonProps:a}){const{t:o}=T("sheet_gen"),{character:i}=Ce(),r=$();if(!r||!i)return null;const u=0,l=r.compute(w.char[t]).val,p=r.compute(w.char.ascension).val;return e(K,{fullWidth:!0,title:d("span",{children:[o("lvl")," ",l]}),color:"primary",...a,children:F(1,Ee[p]).map(s=>e(B,{selected:i[t]===s,disabled:i[t]===s,onClick:()=>n(s),children:d("span",{children:[o("lvl")," ",s+u]})},s))})}const te=m.createContext({optConfigId:"",optConfig:{}});function At({optConfigId:t,children:n}){const{database:a}=y(),o=xe(a.optConfigs,t),i=m.useMemo(()=>({optConfigId:t,optConfig:o}),[t,o]);return e(te.Provider,{value:i,children:n})}function Et({statFilters:t,setStatFilters:n,disabled:a=!1}){const o=m.useCallback((s,c)=>{const h=structuredClone(t);typeof c>"u"?h.push({read:s,value:0,isMax:!1,disabled:!1}):h[c].read=s,n(h)},[n,t]),i=m.useCallback(s=>{const c=structuredClone(t);c.splice(s,1),n(c)},[n,t]),r=m.useCallback((s,c)=>{const h=structuredClone(t);h[s].value=c,n(h)},[n,t]),u=m.useCallback((s,c)=>{const h=structuredClone(t);h[s].isMax=c,n(h)},[n,t]),l=m.useCallback((s,c)=>{const h=structuredClone(t);h[s].disabled=c,n(h)},[n,t]),p=m.useMemo(()=>t.map(({read:s,value:c,isMax:h,disabled:f})=>({read:s,value:c,isMax:h,disabled:f})),[t]);return d(g,{display:"flex",flexDirection:"column",gap:1,children:[p.map((s,c)=>e(qt,{statFilter:s,setTarget:h=>o(h,c),delTarget:()=>i(c),setTargetValue:h=>r(c,h),setTargetisMax:h=>u(c,h),setDisabled:h=>l(c,h),disabled:a},c+JSON.stringify(s))),e(X,{setOptTarget:s=>o(s)})]})}function qt({statFilter:t,setTarget:n,delTarget:a,setTargetValue:o,setTargetisMax:i,setDisabled:r,disabled:u}){var f;const{read:l,value:p,isMax:s,disabled:c}=t,h=(f=l.tag.name||l.tag.q)==null?void 0:f.endsWith("_");return d(g,{sx:{display:"flex",gap:1},children:[d(qe,{sx:{"& .MuiButtonGroup-grouped":{minWidth:24},width:"100%",flexGrow:1},children:[e(O,{color:c?"secondary":"success",onClick:()=>r(!c),disabled:u,size:"small",children:c?e(je,{}):e(Ve,{})}),e(X,{optTarget:l,setOptTarget:n,buttonProps:{sx:{flexGrow:1},size:"small"}}),e(O,{onClick:()=>i(!s),size:"small",children:e("strong",{children:s?"<=":">="})})]}),e(ve,{float:!0,value:p,sx:{flexBasis:150,flexGrow:1,height:"100%"},disabled:u,onChange:o,placeholder:"Stat Value",size:"small",inputProps:{sx:{textAlign:"right"}},InputProps:{endAdornment:d(ke,{position:"end",sx:{ml:0},children:[h?"%":void 0," ",e(Z,{"aria-label":"Delete Stat Constraint",onClick:a,edge:"end",children:e(De,{fontSize:"small"})})]})}})]})}function jt({disabled:t=!1}){const{t:n}=T("page_character_optimize"),{optConfigId:a,optConfig:{statFilters:o}}=m.useContext(te),{database:i}=y(),r=m.useCallback(u=>i.optConfigs.set(a,{statFilters:u}),[i,a]);return e(g,{children:d(v,{bgt:"light",children:[e(k,{sx:{display:"flex",gap:1,justifyContent:"space-between",flexDirection:"column"},children:d(g,{display:"flex",justifyContent:"space-between",children:[e(x,{sx:{fontWeight:"bold"},children:n`constraintFilter.title`}),e(kt,{title:e(x,{children:n`constraintFilter.tooltip`})})]})}),e(D,{}),e(Et,{statFilters:o,setStatFilters:r,disabled:t})]})})}function Vt({numWorkers:t,setNumWorkers:n}){const{t:a}=T("optimize"),o=navigator.hardwareConcurrency||8;return e(K,{title:`${a("numWorkers")}: ${t}`,children:F(1,o).map(i=>e(B,{onClick:()=>n(i),children:a("workers",{count:i})},i))})}function Gt(){const{database:t}=y(),{comboMetadatum:n,comboId:a}=m.useContext(H),o=n.optConfigId,i=m.useCallback(()=>{o||t.combos.set(a,r=>{const u=r.comboMetadata.find(l=>(l==null?void 0:l.characterKey)===n.characterKey);if(u){const l=t.optConfigs.new();u.optConfigId=l}})},[a,n.characterKey,t,o]);return o?e(At,{optConfigId:o,children:e(Rt,{})}):e(v,{children:e(P,{title:d("span",{children:["Optimize this combo for ",n.characterKey]}),action:e(O,{onClick:i,children:"Optimize"})})})}function Rt(){const{t}=T("optimize"),{database:n}=y(),a=$(),[o,i]=m.useState(8),[r,u]=m.useState(void 0),{optConfig:l}=m.useContext(te),p=l==null?void 0:l.optimizationTarget,s=m.useMemo(()=>n.relics.values.reduce((I,z)=>(I[z.slotKey].push(z),I),{head:[],hands:[],feet:[],body:[],sphere:[],rope:[]}),[n.relics.values]),c=Object.values(s).reduce((I,z)=>I*z.length,1),[h,f]=m.useState(void 0),[C,b]=m.useState(!1),M=m.useRef(()=>{});m.useEffect(()=>()=>M.current(),[]);const U=m.useCallback(async()=>{if(!p||!a)return;const I=new Promise(N=>M.current=N);u(void 0),b(!0);const z=(l.statFilters??[]).filter(({disabled:N})=>!N).map(({read:N,value:Be,isMax:_e})=>({read:N,value:Be,isMax:_e})),Y=new st(a,p,z,s,o,u);I.then(async()=>await Y.terminate());const we=await Y.optimize();await Y.terminate(),M.current=()=>{},b(!1),f(we[0])},[a,o,l,p,s]),Q=m.useCallback(()=>{M.current(),b(!1)},[M]);return d(v,{children:[e(P,{title:t("optimize"),action:d(g,{children:[e(Vt,{numWorkers:o,setNumWorkers:i}),e(O,{onClick:C?Q:U,color:C?"error":"primary",startIcon:C?e(Me,{}):e(it,{}),children:t(C?"cancel":"optimize")})]})}),e(D,{}),d(k,{children:[e(jt,{}),d(W,{children:[r&&e(Jt,{progress:r,totalPermutations:c}),h&&d(g,{children:[d(x,{children:["Best: ",h.value]}),e(ct,{build:h.ids})]})]})]})]})}function Jt({progress:t,totalPermutations:n}){const{t:a}=T("optimize");return d(g,{children:[d(x,{children:[a("totalProgress"),": ",t.numBuildsComputed.toLocaleString()," /"," ",n.toLocaleString()]}),d(x,{children:[a("buildsKept"),": ",t.numBuildsKept.toLocaleString()," /"," ",lt.toLocaleString()]}),e(dt,{variant:"determinate",value:t.numBuildsComputed/n*100})]})}function Ft(){const{comboMetadatum:{characterKey:t}}=_(),{character:n}=Ce(),a=$(),[o,i]=m.useState(void 0);return d(g,{children:[e(ht,{characterKey:o,onClose:()=>i(void 0)}),e(pt,{character:n}),d(W,{gap:1,pt:1,children:[e(Pt,{}),e(v,{bgt:"dark",children:d(k,{children:[e(O,{disabled:!t,onClick:()=>t&&i(t),children:"Edit Character"}),e(wt,{}),d(q,{children:[e(j,{expandIcon:e(V,{}),children:"All target listings"}),e(G,{children:e(W,{children:a==null?void 0:a.listFormulas(w.listing.formulas).map((r,u)=>{const l=a.compute(r),p=r.tag.name||r.tag.q;return d(g,{children:[d(x,{children:[p,": ",l.val]}),d(q,{children:[d(j,{expandIcon:e(V,{}),children:["debug for ",p]}),d(G,{children:["conds:"," ",JSON.stringify(l.meta.conds,void 0,2),e(x,{component:"pre",children:JSON.stringify(a.toDebug().compute(r),void 0,2)})]})]})]},`${p}${u}`)})})})]}),d(q,{children:[e(j,{expandIcon:e(V,{}),children:"All target buffs"}),e(G,{children:e(W,{children:a==null?void 0:a.listFormulas(w.listing.buffs).map((r,u)=>{const l=a.compute(r),p=r.tag.name||r.tag.q;return d(g,{children:[d(x,{children:[p,": ",l.val]}),d(q,{children:[d(j,{expandIcon:e(V,{}),children:["debug for ",p]}),d(G,{children:["conds:"," ",JSON.stringify(l.meta.conds,void 0,2),e(x,{component:"pre",children:JSON.stringify(a.toDebug().compute(r),void 0,2)})]})]})]},`${p}${u}`)})})})]})]})}),e(Wt,{}),e(Gt,{})]})]})}const Ht=e(be,{variant:"rectangular",width:"100%",height:1e3});function dn(){const{database:t}=y(),{teamId:n}=Ge(),a=!n||!t.combos.keys.includes(n);return m.useEffect(()=>{a||t.combos.set(n,{lastEdit:Date.now()})},[n,t.combos,a]),a?e(Fe,{to:"/combos"}):e(g,{display:"flex",flexDirection:"column",gap:1,children:e(m.Suspense,{fallback:Ht,children:n&&e(Xt,{comboId:n})})})}function Xt({comboId:t}){const n=de(),[a,o]=m.useState(0),i=m.useMemo(()=>({presetIndex:a,setPresetIndex:o}),[a,o]),r=L(t),{comboMetadata:u}=r,{params:{characterKey:l}}=Re({path:"/combos/:teamId/:characterKey",end:!1})??{params:{}},p=m.useMemo(()=>{const C=u.findIndex(b=>b&&b.characterKey===l);return C===-1?0:C},[u,l]),s=m.useMemo(()=>u[p],[u,p]),c=s==null?void 0:s.characterKey;m.useEffect(()=>{c&&c!==l&&n(`${c}`,{replace:!0})},[c,l,s,n]);const{t:h}=T(["charNames_gen","page_character"]);ut(m.useMemo(()=>{const C=h(c?"charNames_gen:Character":"Combo Settings");return`${r.name} - ${C}`},[c,h,r.name]));const f=m.useMemo(()=>{if(!(!t||!r||!s))return{comboId:t,combo:r,comboMetadatum:s}},[s,r,t]);return e(A.Provider,{value:i,children:e(Dt,{comboId:t,currentChar:c,children:d(g,{sx:{display:"flex",gap:1,flexDirection:"column",mx:1,mt:2},children:[e(v,{sx:{overflow:"visible",top:0,position:"sticky",zIndex:100},children:e(Mt,{comboId:t,charKey:c})}),e(g,{children:f&&e(H.Provider,{value:f,children:e(Ut,{})})})]})})})}function Ut(){const{comboMetadatum:{characterKey:t}}=_(),n=Te(t),a=m.useMemo(()=>n&&{character:n},[n]);return a?e(Je.Provider,{value:a,children:e(He,{children:e(ae,{path:":characterKey",children:e(ae,{path:"*",index:!0,element:e(Ft,{})})})})}):e(be,{variant:"rectangular",width:"100%",height:1e3})}export{dn as default};
