import{av as E,aw as b,aG as D,at as k,au as R,D as a,a6 as m,Q as e,a3 as t,aH as S,ah as p,aI as _,a9 as w,r as i,aJ as H,am as f,a0 as v,a2 as u,K as T}from"./index-Csm0b7vj.js";import{u as I,a as M,b as A}from"./useInfScroll-CvMoSGck.js";import{C as K}from"./CardActionArea-BncBzbQc.js";import{C as B}from"./CardHeader-DsDarh9V.js";function F({character:s,onClick:l}){const n=E(b("0",...D(s))),r=k(R,{src:"0",et:"self"});return a(_,{children:a(m,{children:e(p,{children:[l?a(K,{onClick:l,children:a(t,{variant:"h4",children:s.key})}):a(t,{variant:"h4",children:s.key}),a(S,{}),e(t,{children:["Eidolon: ",s.eidolon]}),e(t,{children:["Level: ",s.level]}),e(t,{children:["ATK: ",n.compute(r.final.atk).val]}),e(t,{children:["Break effect: ",n.compute(r.final.brEff_).val]}),e(t,{children:["CRIT Rate: ",n.compute(r.final.crit_).val]}),e(t,{children:["CRIT DMG: ",n.compute(r.final.crit_dmg_).val]}),e(t,{children:["DEF: ",n.compute(r.final.def).val]}),e(t,{children:["Effect Hit Rate: ",n.compute(r.final.eff_).val]}),e(t,{children:["Effect RES: ",n.compute(r.final.eff_res_).val]}),e(t,{children:["Energy Regeneration Rate:"," ",n.compute(r.final.enerRegen_).val]}),e(t,{children:["Heal Boost: ",n.compute(r.final.heal_).val]}),e(t,{children:["HP: ",n.compute(r.final.hp).val]}),e(t,{children:["Speed: ",n.compute(r.final.spd).val]})]})})})}const G={xs:1,sm:2,md:3,lg:3,xl:4},P={xs:5,sm:5,md:10,lg:10,xl:10};function j(){const{database:s}=w(),[l,n]=I();i.useEffect(()=>s.chars.followAny(n),[s,n]);const{characters:r}=i.useMemo(()=>{const c=s.chars.values;return l&&{characters:c}},[s.chars.values,l]),g=M(),{numShow:o,setTriggerElement:C}=A(P[g],r.length),h=i.useMemo(()=>r.slice(0,o),[r,o]),[x,d]=i.useState(void 0);return e(T,{children:[a(H,{characterKey:x,onClose:()=>d(void 0)}),a(i.Suspense,{fallback:a(f,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:e(m,{bgt:"dark",children:[a(B,{title:"Characters"}),a(p,{children:e(v,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[a(u,{container:!0,spacing:1,columns:G,children:h.map((c,y)=>a(u,{item:!0,xs:1,children:a(F,{character:c,onClick:()=>d(c.key)})},y))}),r.length!==h.length&&a(f,{ref:c=>{c&&C(c)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function L(){return a(v,{my:1,children:a(j,{})})}export{L as default};
