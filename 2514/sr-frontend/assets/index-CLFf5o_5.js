import{N as k,r as m,al as $e,am as E,an as ze,n as e,ao as Oe,ap as Pe,m as S,ak as ie,U as ce,V as le,q as h,ac as Ne,E as g,H as x,X as _,L as M,I as Q,aq as J,W as de,ar as Le,as as Z,Y as L,F as ue,at as W,S as he,au as We,av as Ae,ab as B,B as Ee,aw as qe,ax as Ke,ay as F,az as A,G as T,aA as je,aa as ee,aB as pe,aC as me,aD as Ge,aE as Ve,aF as te,aG as Re,$ as ge,aH as Je,aI as Fe,aJ as ae}from"./index-DdyKaXkb.js";import{u as H,a as He,b as Ue,c as Xe,d as Qe,e as X,T as ne,f as Ye,C as Ze,t as fe,N as be,I as Ce,g as et,h as tt,S as at,i as nt,B as ot,M as st,L as rt,j as it,k as ct,D as lt,l as dt,A as q,m as K,n as j,o as G,p as ut}from"./TrendingUp-BRkQmnxE.js";import{c as ht,u as xe,S as N,b as z,C as pt,a as mt}from"./CharacterEditor-Jpcrpp-m.js";import{s as gt,t as ft,w as bt,c as Ct,l as xt,r as yt,a as kt}from"./index-CLTsRPiy.js";import{d as ye}from"./Close-BUst2FYZ.js";import{C as ke}from"./CardActionArea-CcAqV8In.js";import{C as ve}from"./useForceUpdate-BFofxWjR.js";import{u as vt}from"./useBoolState-DXhYFMvV.js";import{M as I,D as O}from"./DropdownButton-B0cEZHH2.js";import{D as Te,a as Tt}from"./LocationAutocomplete-Bcjdp59x.js";import{I as St}from"./InfoTooltip-BVuGBmLQ.js";import"./index-tdaKt66K.js";const Dt=ht(),wt=Dt;function Se(t){const{database:a}=k();return H(a.loadouts,t??"")}function De(t){const{database:a}=k();return H(a.teams,t)}function _t({teamId:t,currentChar:a,children:o}){const{database:s}=k(),c=De(t),l=V(c.loadoutMetadata[0]),r=V(c.loadoutMetadata[1]),d=V(c.loadoutMetadata[2]),u=V(c.loadoutMetadata[3]),n=m.useMemo(()=>gt([...ft(c.loadoutMetadata.map(p=>{var f;return((f=s.loadouts.get(p==null?void 0:p.loadoutId))==null?void 0:f.key)??void 0}).filter($e)),...l?R(l):[],...r?R(r):[],...d?R(d):[],...u?R(u):[],E.common.lvl.add(80),E.common.res.add(.1),E.common.isBroken.add(0),E.common.maxToughness.add(100),ze.common.critMode.add("avg")]),[l,r,d,u,c.loadoutMetadata,s]),i=m.useMemo(()=>(a&&(n==null?void 0:n.withTag({src:a,dst:a})))??null,[n,a]);return e(Oe.Provider,{value:i,children:o})}function V(t){const a=Se(t==null?void 0:t.loadoutId),o=xe(a==null?void 0:a.key),s=He(t==null?void 0:t.buildId),c=Ue(s==null?void 0:s.lightConeId),l=Xe(s==null?void 0:s.relicIds),r=m.useMemo(()=>Object.fromEntries(Object.entries((a==null?void 0:a.conditional)??{}).map(([d,u])=>[d,u])),[a]);return m.useMemo(()=>({character:o,lightCone:c,relics:l,conditionals:r,bonusStats:(a==null?void 0:a.bonusStats)??[]}),[o,c,l,r,a])}function R({character:t,lightCone:a,relics:o,conditionals:s,bonusStats:c}){return t?[...bt(t.key,...Ct(t),...xt(a),...yt(Object.values(o).filter(r=>!!r).map(r=>({set:r.setKey,stats:[...r.substats.filter(({key:d})=>d!=="").map(d=>({key:d.key,value:d.accurateValue})),{key:r.mainStatKey,value:r.mainStatVal}]}))),...c.map(({tag:r,value:d})=>({tag:{...r},value:Pe(d)}))),...kt(t.key,s)]:[]}function Mt({teamId:t,charKey:a,tab:o=""}){const{t:s}=S("page_team"),c=ie(),{database:l}=k(),r=l.teams.get(t),{loadoutMetadata:d}=r,u=ce(),n=le(u.breakpoints.down("md")),[i,p]=m.useState(!1),f=b=>{l.teams.set(t,{name:b})},v=b=>{l.teams.set(t,{description:b})};return h(g,{sx:()=>({borderBottom:"1px rgb(200,200,200,0.3) solid","& .MuiTab-root:hover":{transition:"background-color 0.25s ease",backgroundColor:"rgba(255,255,255,0.1)"},"& .Mui-selected":{color:"white !important"},"& .MuiTabs-indicator":{height:"4px",backgroundColor:"rgb(200,200,200,0.5)"}}),children:[e(ke,{onClick:()=>p(!0),children:e(Ne,{placement:"top",title:h(g,{children:[h(g,{sx:{display:"flex",color:"info.light",gap:1},children:[e(Qe,{}),e(x,{children:e("strong",{children:s`team.editNameDesc`})})]}),!!r.description&&e(x,{children:r.description})]}),children:e(_,{sx:{display:"flex",justifyContent:"center","&:hover":{color:"info.light"}},children:h(x,{variant:"h5",sx:{display:"flex",gap:1,alignItems:"center",justifyContent:"center",textShadow:"#000 0 0 10px !important"},children:[e(X,{}),r.name]})})})}),e(de,{open:i,onClose:()=>p(!1),children:h(M,{children:[e(ve,{title:s`team.editNameDesc`,avatar:e(X,{}),titleTypographyProps:{variant:"h6"},action:e(Q,{onClick:()=>p(!1),children:e(ye,{})})}),e(J,{}),e(_,{children:h(g,{display:"flex",flexDirection:"column",gap:2,sx:{mt:2},children:[e(ne,{label:s`team.name`,value:r.name,onChange:b=>f(b),autoFocus:!0}),e(ne,{label:s`team.desc`,value:r.description,onChange:b=>v(b),multiline:!0,minRows:4})]})})]})}),e(J,{}),h(Le,{variant:"fullWidth",value:a??"team",orientation:n?"vertical":"horizontal",children:[e(Z,{icon:e(X,{}),iconPosition:"start",value:"team",label:"Team Settings",onClick:()=>c(`/teams/${t}/`)}),d.map((b,C)=>{var D;const y=b&&((D=l.loadouts.get(b==null?void 0:b.loadoutId))==null?void 0:D.key);return e(Z,{icon:e(Ye,{}),iconPosition:"start",value:y??C,disabled:!d[C],label:y?e(x,{children:s(`charNames_gen:${y}`)}):`Character ${C+1}`,onClick:()=>y&&c(`/teams/${t}/${y}/${o}`)},C)})]})]})}function Bt({teamId:t}){const{database:a}=k(),o=a.teams.get(t);return h(g,{children:[t,o.loadoutMetadata.map((s,c)=>e(It,{loadoutMetadataIndex:c,teamId:t},`${c}_${s==null?void 0:s.loadoutId}`))]})}function It({loadoutMetadataIndex:t,teamId:a}){var d;const{database:o}=k(),s=o.teams.get(a),c=(d=s.loadoutMetadata[t])==null?void 0:d.loadoutId,l=o.loadouts.get(c);function r(u){if(u===""){o.teams.set(a,i=>i.loadoutMetadata[t]=void 0);return}o.chars.getOrCreate(u);const n=s.loadoutMetadata.findIndex(i=>{var p;return i&&((p=o.loadouts.get(i.loadoutId))==null?void 0:p.key)===u});if(n===-1){let i=o.loadouts.keys.find(p=>o.loadouts.get(p).key===u);i||(i=o.loadouts.new(u)),o.teams.set(a,p=>{p.loadoutMetadata[t]={loadoutId:i}})}else{if(n===t)return;const i=s.loadoutMetadata[n],p=s.loadoutMetadata[t];o.teams.set(a,f=>{f.loadoutMetadata[t]=i,f.loadoutMetadata[n]=p})}}return e(Ze,{charKey:(l==null?void 0:l.key)??"",setCharKey:r})}function $t(){const[t,a,o]=vt();return h(ue,{children:[e(L,{onClick:a,children:"Bonus Stats"}),e(zt,{open:t,onClose:o})]})}function zt({open:t,onClose:a}){const{database:o}=k(),{loadout:{bonusStats:s},loadoutId:c}=m.useContext(W),l=r=>{const d=Ot(r);o.loadouts.set(c,u=>{u.bonusStats.push({tag:d,value:0})})};return e(de,{open:t,onClose:a,children:h(M,{children:[e(ve,{title:"Bonus Stats"}),e(J,{}),e(_,{children:h(N,{spacing:1,children:[s.map(({tag:r,value:d},u)=>e(Lt,{tag:r,value:d,setValue:n=>{o.loadouts.set(c,i=>{i.bonusStats[u].value=n})},onDelete:()=>{o.loadouts.set(c,n=>{n.bonusStats.splice(u,1)})},setTag:n=>{o.loadouts.set(c,i=>{i.bonusStats[u].tag=n})}},JSON.stringify(r)+u)),e(Nt,{onSelect:l})]})})]})})}function Ot(t){return{et:"own",q:t,qt:"premod",sheet:"agg"}}const Pt=["hp","hp_","def","def_","atk","atk_","spd","spd_","dmg_","enerRegen_","brEffect_","crit_","crit_dmg_","eff_","eff_res_","heal_"];function Nt({tag:t={},onSelect:a}){var o;return e(O,{title:(t&&((o=fe.subset(t)[0])==null?void 0:o.title))??"Add Bonus Stat",children:Pt.map(s=>e(I,{onClick:()=>a(s),children:s},s))})}function Lt({tag:t,setTag:a,value:o,setValue:s,onDelete:c}){var r;const l=(r=t.name||t.q)==null?void 0:r.endsWith("_");return e(M,{bgt:"light",children:h(_,{sx:{display:"flex",gap:1,justifyContent:"space-around"},children:[e(he,{sx:{m:"auto"},children:t.q}),t.q==="dmg_"&&e(Wt,{tag:t,setElementalType:d=>{const{elementalType:u,...n}=t;a(d?{...n,elementalType:d}:n)}}),e(be,{float:!0,value:o,sx:{flexBasis:150,flexGrow:1,height:"100%"},onChange:s,placeholder:"Stat Value",size:"small",inputProps:{sx:{textAlign:"right"}},InputProps:{endAdornment:h(Ce,{position:"end",sx:{ml:0},children:[l?"%":void 0," ",e(Q,{"aria-label":"Delete Bonus Stat",onClick:c,edge:"end",children:e(Te,{fontSize:"small"})})]})}})]})})}function Wt({tag:t,setElementalType:a}){return h(O,{title:t.elementalType??"No Element",children:[e(I,{onClick:()=>a(null),children:"No Element"}),We.map(o=>e(I,{onClick:()=>a(o),children:o},o))]})}function oe({tag:t}){var a;return e(Ae,{color:et(t),children:((a=fe.subset(t)[0])==null?void 0:a.title)||t.name||t.q})}function Y({optTarget:t,setOptTarget:a,buttonProps:o={}}){const{t:s}=S("optimize"),c=z();return e(O,{title:h(g,{sx:{display:"flex",gap:1},children:[s("optTarget"),t?e(oe,{tag:t.tag}):null]}),...o,children:c==null?void 0:c.listFormulas(B.listing.formulas).map((l,r)=>h(I,{onClick:()=>a(l),children:[e(Tt,{children:e(oe,{tag:l.tag})}),e(g,{sx:{display:"flex",gap:1,ml:1},children:tt(l.tag).map(d=>e(he,{children:d},d))})]},`${r}_${l.tag.sheet||l.tag.q}_${l.tag.name}`))})}function At({statFilters:t,setStatFilters:a,disabled:o=!1}){const s=m.useCallback((n,i)=>{const p=structuredClone(t);typeof i>"u"?p.push({read:n,value:0,isMax:!1,disabled:!1}):p[i].read=n,a(p)},[a,t]),c=m.useCallback(n=>{const i=structuredClone(t);i.splice(n,1),a(i)},[a,t]),l=m.useCallback((n,i)=>{const p=structuredClone(t);p[n].value=i,a(p)},[a,t]),r=m.useCallback((n,i)=>{const p=structuredClone(t);p[n].isMax=i,a(p)},[a,t]),d=m.useCallback((n,i)=>{const p=structuredClone(t);p[n].disabled=i,a(p)},[a,t]),u=m.useMemo(()=>t.map(({read:n,value:i,isMax:p,disabled:f})=>({read:n,value:i,isMax:p,disabled:f})),[t]);return h(g,{display:"flex",flexDirection:"column",gap:1,children:[u.map((n,i)=>e(Et,{statFilter:n,setTarget:p=>s(p,i),delTarget:()=>c(i),setTargetValue:p=>l(i,p),setTargetisMax:p=>r(i,p),setDisabled:p=>d(i,p),disabled:o},i+JSON.stringify(n))),e(Y,{setOptTarget:n=>s(n)})]})}function Et({statFilter:t,setTarget:a,delTarget:o,setTargetValue:s,setTargetisMax:c,setDisabled:l,disabled:r}){var f;const{read:d,value:u,isMax:n,disabled:i}=t,p=(f=d.tag.name||d.tag.q)==null?void 0:f.endsWith("_");return h(g,{sx:{display:"flex",gap:1},children:[h(Ee,{sx:{"& .MuiButtonGroup-grouped":{minWidth:24},width:"100%",flexGrow:1},children:[e(L,{color:i?"secondary":"success",onClick:()=>l(!i),disabled:r,size:"small",children:i?e(qe,{}):e(Ke,{})}),e(Y,{optTarget:d,setOptTarget:a,buttonProps:{sx:{flexGrow:1},size:"small"}}),e(L,{onClick:()=>c(!n),size:"small",children:e("strong",{children:n?"<=":">="})})]}),e(be,{float:!0,value:u,sx:{flexBasis:150,flexGrow:1,height:"100%"},disabled:r,onChange:s,placeholder:"Stat Value",size:"small",inputProps:{sx:{textAlign:"right"}},InputProps:{endAdornment:h(Ce,{position:"end",sx:{ml:0},children:[p?"%":void 0," ",e(Q,{"aria-label":"Delete Stat Constraint",onClick:o,edge:"end",children:e(Te,{fontSize:"small"})})]})}})]})}function qt({disabled:t=!1}){const{t:a}=S("page_character_optimize"),{loadout:{optConfigId:o}}=m.useContext(W),{database:s}=k(),{statFilters:c}=H(s.optConfigs,o),l=m.useCallback(r=>s.optConfigs.set(o,{statFilters:r}),[s,o]);return e(g,{children:h(M,{bgt:"light",children:[e(_,{sx:{display:"flex",gap:1,justifyContent:"space-between",flexDirection:"column"},children:h(g,{display:"flex",justifyContent:"space-between",children:[e(x,{sx:{fontWeight:"bold"},children:a`constraintFilter.title`}),e(St,{title:e(x,{children:a`constraintFilter.tooltip`})})]})}),e(J,{}),e(At,{statFilters:c,setStatFilters:l,disabled:t})]})})}function Kt({numWorkers:t,setNumWorkers:a}){const{t:o}=S("optimize"),s=navigator.hardwareConcurrency||8;return e(O,{title:`${o("numWorkers")}: ${t}`,children:F(1,s).map(c=>e(I,{onClick:()=>a(c),children:o("workers",{count:c})},c))})}function jt(){const{t}=S("optimize"),{database:a}=k(),o=z(),[s,c]=m.useState(8),[l,r]=m.useState(void 0),{loadout:d}=m.useContext(W),u=H(a.optConfigs,d.optConfigId),n=u==null?void 0:u.optimizationTarget,i=m.useCallback(w=>{a.optConfigs.set(d.optConfigId,{optimizationTarget:w})},[a.optConfigs,d.optConfigId]),p=m.useMemo(()=>a.relics.values.reduce((w,$)=>(w[$.slotKey].push($),w),{head:[],hands:[],feet:[],body:[],sphere:[],rope:[]}),[a.relics.values]),f=Object.values(p).reduce((w,$)=>w*$.length,1),[v,b]=m.useState(void 0),[C,y]=m.useState(!1),D=m.useRef(()=>{});m.useEffect(()=>()=>D.current(),[]);const we=m.useCallback(async()=>{if(!n||!o)return;const w=new Promise(P=>D.current=P);r(void 0),y(!0);const $=((u==null?void 0:u.statFilters)??[]).filter(({disabled:P})=>!P).map(({read:P,value:Be,isMax:Ie})=>({read:P,value:Be,isMax:Ie})),U=new at(d.key,o,n,$,p,s,r);w.then(async()=>await U.terminate());const Me=await U.optimize();await U.terminate(),D.current=()=>{},y(!1),b(Me[0])},[o,d.key,s,u==null?void 0:u.statFilters,n,p]),_e=m.useCallback(()=>{D.current(),y(!1)},[D]);return e(M,{bgt:"dark",children:h(_,{children:[e(qt,{}),h(N,{children:[e(x,{variant:"h5",children:t("optimize")}),h(g,{children:[e(Y,{optTarget:n,setOptTarget:i}),e(Kt,{numWorkers:s,setNumWorkers:c}),e(L,{onClick:C?_e:we,color:C?"error":"primary",startIcon:C?e(ye,{}):e(nt,{}),children:t(C?"cancel":"optimize")})]}),l&&e(Gt,{progress:l,totalPermutations:f}),v&&h(g,{children:[h(x,{children:["Best: ",v.value]}),e(ot,{build:v.ids})]})]})]})})}function Gt({progress:t,totalPermutations:a}){const{t:o}=S("optimize");return h(g,{children:[h(x,{children:[o("totalProgress"),": ",t.numBuildsComputed.toLocaleString()," /"," ",a.toLocaleString()]}),h(x,{children:[o("buildsKept"),": ",t.numBuildsKept.toLocaleString()," /"," ",st.toLocaleString()]}),e(rt,{variant:"determinate",value:t.numBuildsComputed/a*100})]})}const Vt={xs:12,sm:6,md:4};function Rt(){const{loadout:{key:t}}=A(),a=z(),{database:o}=k(),s=["basic","skill","ult","talent"],c=ce(),l=le(c.breakpoints.up("lg")),r=it[t],d=(a==null?void 0:a.compute(B.char.eidolon).val)??0,u=m.useMemo(()=>r&&F(1,pe).map(n=>{const i=r[`eidolon${n}`];return i?e(se,{talentKey:`eidolon${n}`,sheetElement:i,onClickTitle:()=>o.chars.set(t,{eidolon:n===d?n-1:n})}):null}),[t,r,o.chars,d]);if(!(!r||!a))return e(ue,{children:h(T,{container:!0,spacing:1,children:[l&&h(T,{item:!0,xs:12,md:12,lg:3,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(re,{}),u&&u.map((n,i)=>e(g,{sx:{opacity:d>=i+1?1:.5},children:n},i))]}),e(T,{item:!0,xs:12,md:12,lg:9,container:!0,spacing:1,children:s.map(n=>{const i=r[n];return i?e(T,{item:!0,...Vt,children:e(se,{talentKey:n,sheetElement:i})},n):null})}),!l&&e(T,{item:!0,xs:12,md:12,lg:3,container:!0,spacing:1,children:e(T,{item:!0,xs:12,children:e(re,{})})})]})})}function se({sheetElement:t,talentKey:a,onClickTitle:o}){const{loadout:{key:s}}=A(),c=m.useCallback(n=>e(ke,{onClick:o,children:n}),[o]);let l=null;l=null,dt(a)&&(l=e(Jt,{talentKey:a,dropDownButtonProps:{sx:{borderRadius:0}},setTalent:n=>d.chars.set(s,i=>{i[a]=n})}));const{loadoutId:r}=m.useContext(W),{database:d}=k(),u=m.useCallback((n,i,p,f)=>{d.loadouts.set(r,v=>(v=structuredClone(v),je(v.conditional,[n,i,p],f),v))},[d,r]);return h(M,{bgt:"light",sx:{height:"100%"},children:[l,h(_,{children:[e(ct,{condition:!!o,wrapper:c,children:h(T,{container:!0,sx:{flexWrap:"nowrap"},children:[e(T,{item:!0,children:e(g,{component:ee?ee:"img",src:t==null?void 0:t.img,sx:{width:60,height:"auto"}})}),h(T,{item:!0,flexGrow:1,sx:{pl:1},children:[e(x,{variant:"h6",children:t==null?void 0:t.title}),t.subtitle&&e(x,{variant:"subtitle1",children:t.subtitle})]})]})}),e(wt,{spacing:1,children:t.documents.map((n,i)=>e(lt,{document:n,collapse:!0,setConditional:u},i))})]})]})}function re(){const{t}=S("sheet_gen"),a=z(),{loadout:{key:o}}=A(),{database:s}=k();if(!a)return null;const c=a.compute(B.char.eidolon).val;return e(O,{fullWidth:!0,title:h("span",{children:[t("eidolonLvl")," ",c]}),color:"primary",children:F(0,pe).map(l=>e(I,{selected:c===l,disabled:c===l,onClick:()=>s.chars.set(o,{eidolon:l}),children:h("span",{children:[t("eidolonLvl")," ",l]})},l))})}function Jt({talentKey:t,setTalent:a,dropDownButtonProps:o}){const{t:s}=S("sheet_gen"),{character:c}=me(),l=z();if(!l||!c)return null;const r=0,d=l.compute(B.char[t]).val,u=l.compute(B.char.ascension).val;return e(O,{fullWidth:!0,title:h("span",{children:[s("lvl")," ",d]}),color:"primary",...o,children:F(1,Ge[u]).map(n=>e(I,{selected:c[t]===n,disabled:c[t]===n,onClick:()=>a(n),children:h("span",{children:[s("lvl")," ",n+r]})},n))})}function Ft({tab:t}){const{loadout:{key:a}}=A(),{character:o}=me(),s=z(),[c,l]=m.useState(void 0);return h(g,{children:[t,e(pt,{characterKey:c,onClose:()=>l(void 0)}),e(mt,{character:o}),h(N,{gap:1,pt:1,children:[e(M,{bgt:"dark",children:h(_,{children:[e(L,{disabled:!a,onClick:()=>a&&l(a),children:"Edit Character"}),e($t,{}),h(q,{children:[e(K,{expandIcon:e(j,{}),children:"All target listings"}),e(G,{children:e(N,{children:s==null?void 0:s.listFormulas(B.listing.formulas).map((r,d)=>{const u=s.compute(r),n=r.tag.name||r.tag.q;return h(g,{children:[h(x,{children:[n,": ",u.val]}),h(q,{children:[h(K,{expandIcon:e(j,{}),children:["debug for ",n]}),h(G,{children:["conds:"," ",JSON.stringify(u.meta.conds,void 0,2),e(x,{component:"pre",children:JSON.stringify(s.toDebug().compute(r),void 0,2)})]})]})]},`${n}${d}`)})})})]}),h(q,{children:[e(K,{expandIcon:e(j,{}),children:"All target buffs"}),e(G,{children:e(N,{children:s==null?void 0:s.listFormulas(B.listing.buffs).map((r,d)=>{const u=s.compute(r),n=r.tag.name||r.tag.q;return h(g,{children:[h(x,{children:[n,": ",u.val]}),h(q,{children:[h(K,{expandIcon:e(j,{}),children:["debug for ",n]}),h(G,{children:["conds:"," ",JSON.stringify(u.meta.conds,void 0,2),e(x,{component:"pre",children:JSON.stringify(s.toDebug().compute(r),void 0,2)})]})]})]},`${n}${d}`)})})})]})]})}),e(Rt,{}),e(jt,{})]})]})}const Ht=e(ge,{variant:"rectangular",width:"100%",height:1e3});function la(){const{database:t}=k(),{teamId:a}=Ve(),o=!a||!t.teams.keys.includes(a);return m.useEffect(()=>{o||t.teams.set(a,{lastEdit:Date.now()})},[a,t.teams,o]),o?e(Je,{to:"/teams"}):e(g,{display:"flex",flexDirection:"column",gap:1,children:e(m.Suspense,{fallback:Ht,children:a&&e(Ut,{teamId:a})})})}function Ut({teamId:t}){var b;const{database:a}=k(),o=ie(),s=De(t),{loadoutMetadata:c}=s,{params:{characterKey:l}}=te({path:"/teams/:teamId/:characterKey",end:!1})??{params:{}},{params:{tab:r}}=te({path:"/teams/:teamId/:characterKey/:tab"})??{params:{}},d=m.useMemo(()=>c.findIndex(C=>{var y;return(C==null?void 0:C.loadoutId)&&((y=a.loadouts.get(C.loadoutId))==null?void 0:y.key)===l}),[c,a.loadouts,l]),u=m.useMemo(()=>c[d],[c,d]);m.useEffect(()=>{window.scrollTo({top:0})},[]),m.useEffect(()=>{u||o("",{replace:!0})},[u,o]);const n=u==null?void 0:u.loadoutId,i=(b=a.loadouts.get(n))==null?void 0:b.key,{t:p}=S(["charNames_gen","page_character"]);ut(m.useMemo(()=>{const C=p(i?"charNames_gen:Character":"Team Settings"),y=r?p(`page_character:tabs.${r}`):i?p("Loadout/Build"):r;return`${s.name} - ${C}${y?` - ${y}`:""}`},[i,p,r,s.name]));const f=Se(n??""),v=m.useMemo(()=>{if(!(!n||!f||!u))return{teamId:t,team:s,loadoutId:n,loadout:f,loadoutMetadatum:u}},[n,f,u,s,t]);return e(_t,{teamId:t,currentChar:i,children:h(g,{sx:{display:"flex",gap:1,flexDirection:"column",mx:1,mt:2},children:[e(M,{children:e(Mt,{teamId:t,charKey:i,tab:r})}),e(g,{children:v?e(W.Provider,{value:v,children:e(Xt,{})}):e(Bt,{teamId:t})})]})})}function Xt({tab:t}){const{loadout:{key:a}}=A(),o=xe(a),s=m.useMemo(()=>o&&{character:o},[o]);return s?e(Re.Provider,{value:s,children:e(Fe,{children:e(ae,{path:":characterKey",children:e(ae,{path:"*",index:!0,element:e(Ft,{tab:t})})})})}):e(ge,{variant:"rectangular",width:"100%",height:1e3})}export{la as default};
