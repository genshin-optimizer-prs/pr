import{at as b,au as E,aE as k,ar as D,as as R,B as a,a5 as u,O as e,a2 as t,aF as S,af as p,aG as _,a8 as w,r as i,aH as H,ak as m,$ as v,a1 as f,J as T}from"./index-Bda9OAF2.js";import{u as I,a as M,b as A}from"./useInfScroll-CV86wuXQ.js";import{C as B}from"./CardActionArea-Dxa17cfN.js";import{C as F}from"./CardHeader-Dt-Y_Or9.js";function G({character:s,onClick:l}){const n=b(E("member0",...k(s))),r=D(R,{member:"member0",et:"self"});return a(_,{children:a(u,{children:e(p,{children:[l?a(B,{onClick:l,children:a(t,{variant:"h4",children:s.key})}):a(t,{variant:"h4",children:s.key}),a(S,{}),e(t,{children:["Eidolon: ",s.eidolon]}),e(t,{children:["Level: ",s.level]}),e(t,{children:["ATK: ",n.compute(r.final.atk).val]}),e(t,{children:["Break effect: ",n.compute(r.final.brEff_).val]}),e(t,{children:["CRIT Rate: ",n.compute(r.final.crit_).val]}),e(t,{children:["CRIT DMG: ",n.compute(r.final.crit_dmg_).val]}),e(t,{children:["DEF: ",n.compute(r.final.def).val]}),e(t,{children:["Effect Hit Rate: ",n.compute(r.final.eff_).val]}),e(t,{children:["Effect RES: ",n.compute(r.final.eff_res_).val]}),e(t,{children:["Energy Regeneration Rate:"," ",n.compute(r.final.enerRegen_).val]}),e(t,{children:["Heal Boost: ",n.compute(r.final.heal_).val]}),e(t,{children:["HP: ",n.compute(r.final.hp).val]}),e(t,{children:["Speed: ",n.compute(r.final.spd).val]})]})})})}const K={xs:1,sm:2,md:3,lg:3,xl:4},P={xs:5,sm:5,md:10,lg:10,xl:10};function j(){const{database:s}=w(),[l,n]=I();i.useEffect(()=>s.chars.followAny(n),[s,n]);const{characters:r}=i.useMemo(()=>{const c=s.chars.values;return l&&{characters:c}},[s.chars.values,l]),g=M(),{numShow:o,setTriggerElement:C}=A(P[g],r.length),h=i.useMemo(()=>r.slice(0,o),[r,o]),[x,d]=i.useState(void 0);return e(T,{children:[a(H,{characterKey:x,onClose:()=>d(void 0)}),a(i.Suspense,{fallback:a(m,{variant:"rectangular",sx:{widht:"100%",height:"100%",minHeight:300}}),children:e(u,{bgt:"dark",children:[a(F,{title:"Characters"}),a(p,{children:e(v,{sx:{overflow:"auto",maxHeight:"50vh"},my:1,display:"flex",flexDirection:"column",gap:1,children:[a(f,{container:!0,spacing:1,columns:K,children:h.map((c,y)=>a(f,{item:!0,xs:1,children:a(G,{character:c,onClick:()=>d(c.key)})},y))}),r.length!==h.length&&a(m,{ref:c=>{c&&C(c)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})})]})})]})}function O(){return a(v,{my:1,children:a(j,{})})}export{O as default};
