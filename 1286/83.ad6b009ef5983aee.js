"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83],{79199:(t,e,r)=>{r.d(e,{Z:()=>o});var i=r(40067),n=r(52903);function o({slotKey:t,iconProps:e={}}){switch(t){case"flower":return(0,n.tZ)(i.pv,Object.assign({},e));case"plume":return(0,n.tZ)(i.QA,Object.assign({},e));case"sands":return(0,n.tZ)(i.M6,Object.assign({},e));case"goblet":return(0,n.tZ)(i.NN,Object.assign({},e));case"circlet":return(0,n.tZ)(i.qM,Object.assign({},e))}}},27862:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Ht});var i=r(88774),n=r(47746),o=r(86432),l=r(41075),a=r(67550),s=r(7671),c=r(62197),u=r(23119),Z=r(42523),d=r(56961),h=r(2784),p=r(61877),m=r(21560),g=r(66982),f=r(33497),b=r(24264),y=r(31981),w=r(54736),x=r(40067),A=r(17885),k=r(12761),C=r(66615),v=r(91949),D=r(75213),T=r(66198),B=r(39857),G=r(79199),L=r(87833),I=r(79410),S=r(30182),E=r(64401),X=r(34156),z=r(39099),O=r(55893),P=r(52903);let j,R=t=>t;function N(){const{t}=(0,m.$G)(["page_home","ui"]),{database:e}=(0,h.useContext)(X.t),{gender:r}=(0,O.Z)(),{characterTally:i,characterTotal:l}=(0,h.useMemo)((()=>{const t=e.chars.keys,i=(0,k.K8)(y.UB,(()=>0));return t.forEach((t=>{const e=(0,S.m)(t,r).elementKey;i[e]=i[e]+1})),{characterTally:i,characterTotal:t.length}}),[e,r]),{weaponTally:a,weaponTotal:u}=(0,h.useMemo)((()=>{const t=e.weapons.values,r=(0,k.K8)(y.yd,(()=>0));return t.forEach((t=>{const e=(0,E.ub)(t.key).weaponType;r[e]=r[e]+1})),{weaponTally:r,weaponTotal:t.length}}),[e]),{artifactTally:p,artifactTotal:g}=(0,h.useMemo)((()=>{const t=(0,k.K8)(y.Ex,(()=>0)),r=e.arts.values;return r.forEach((e=>{const r=e.slotKey;t[r]=t[r]+1})),{artifactTally:t,artifactTotal:r.length}}),[e]),f=(0,n.Z)(),N=!(0,o.Z)(f.breakpoints.up("md"));return(0,P.BX)(b.Z,{children:[(0,P.tZ)(Z.Z,{title:(0,P.tZ)(c.Z,{variant:"h5",children:t(j||(j=R`inventoryCard.title`))}),avatar:(0,P.tZ)(C.Z,{fontSize:"large"})}),(0,P.tZ)(d.Z,{}),(0,P.BX)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,P.tZ)(L.Z,{children:(0,P.BX)(D.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:B.rU,to:"/characters",children:[(0,P.tZ)(T.Z,{label:(0,P.BX)("strong",{children:[t("ui:tabs.characters")," ",l]}),icon:(0,P.tZ)(v.Z,{}),sx:{flexBasis:N?"100%":"auto",flexGrow:1,cursor:"pointer"},color:l?"primary":"secondary"}),Object.entries(i).map((([t,e])=>(0,P.tZ)(T.Z,{sx:{flexGrow:1,cursor:"pointer"},color:e?t:"secondary",icon:(0,P.tZ)(z.Z,{ele:t}),label:(0,P.tZ)("strong",{children:e})},t)))]})}),(0,P.tZ)(L.Z,{children:(0,P.BX)(D.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:B.rU,to:"/weapons",children:[(0,P.tZ)(T.Z,{label:(0,P.BX)("strong",{children:[t("ui:tabs.weapons")," ",u]}),icon:(0,P.tZ)(A.Yt,{}),sx:{flexBasis:N?"100%":"auto",flexGrow:1,cursor:"pointer"},color:u?"primary":"secondary"}),Object.entries(a).map((([t,e])=>{var r;return(0,P.tZ)(T.Z,{sx:{flexGrow:1,cursor:"pointer"},color:e?"success":"secondary",icon:(0,P.tZ)(I.Z,{src:null==(r=w.CL.weaponTypes)?void 0:r[t],size:2}),label:(0,P.tZ)("strong",{children:e})},t)}))]})}),(0,P.tZ)(L.Z,{children:(0,P.BX)(D.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:B.rU,to:"/artifacts",children:[(0,P.tZ)(T.Z,{label:(0,P.BX)("strong",{children:[t("ui:tabs.artifacts")," ",g]}),icon:(0,P.tZ)(x.pv,{}),sx:{flexBasis:N?"100%":"auto",flexGrow:1,cursor:"pointer"},color:g?"primary":"secondary"}),Object.entries(p).map((([t,e])=>(0,P.tZ)(T.Z,{sx:{flexGrow:1,cursor:"pointer"},color:e?"success":"secondary",icon:(0,P.tZ)(G.Z,{slotKey:t}),label:(0,P.tZ)("strong",{children:e})},t)))]})})]})]})}var W=r(37678),q=r(85443),Q=r(70034),J=r(89702),U=r(88463),V=r(17800),K=r(69460),F=r(30460),M=r(83249),Y=r(23883);let H,_,$,tt,et,rt,it,nt,ot,lt,at,st,ct,ut=t=>t;const Zt=[{title:()=>"Genshin Optimizer Discord",icon:(0,P.tZ)(A.D7,{}),tooltip:t=>"",url:"https://discord.gg/CXUbQXyfUs",color:"discord"},{title:()=>"Genshin Optimizer Github",icon:(0,P.tZ)(W.Z,{}),tooltip:t=>"",url:"https://github.com/frzyc/genshin-optimizer",color:"white"},{title:t=>t(H||(H=ut`quickLinksCard.buttons.patchNotes.title`)),icon:(0,P.tZ)(q.Z,{}),tooltip:t=>t(_||(_=ut`quickLinksCard.buttons.patchNotes.tooltip`)),url:"https://github.com/frzyc/genshin-optimizer/releases",color:"secondary"},{title:t=>t($||($=ut`quickLinksCard.buttons.tyGuide.title`)),icon:(0,P.tZ)(Q.Z,{}),tooltip:t=>t(tt||(tt=ut`quickLinksCard.buttons.tyGuide.tooltip`)),url:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",color:"red"},{title:()=>"Twitch (frzyc)",icon:(0,P.tZ)(A.jG,{}),tooltip:t=>"",url:"https://www.twitch.tv/frzyc",color:"twitch"},{title:()=>"Twitter (frzyc)",icon:(0,P.tZ)(J.Z,{}),tooltip:t=>"",url:"https://twitter.com/frzyc",color:"twitter"},{title:()=>"Patreon (frzyc)",icon:(0,P.tZ)(A.Mm,{}),tooltip:t=>"",url:"https://www.patreon.com/frzyc",color:"patreon"},{title:()=>"PayPal (frzyc)",icon:(0,P.tZ)(A.fR,{}),tooltip:t=>"",url:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",color:"paypal"},{title:t=>t(et||(et=ut`quickLinksCard.buttons.scanners.title`)),icon:(0,P.tZ)(U.Z,{}),tooltip:t=>t(rt||(rt=ut`quickLinksCard.buttons.scanners.tooltip`)),to:"/scanner",color:"primary"},{title:t=>t(it||(it=ut`quickLinksCard.buttons.kqm.title`)),icon:(0,P.tZ)(V.Z,{}),tooltip:t=>t(nt||(nt=ut`quickLinksCard.buttons.kqm.tooltip`)),url:"https://keqingmains.com/",color:"keqing"},{title:t=>t(ot||(ot=ut`quickLinksCard.buttons.devDiscord.title`)),icon:(0,P.tZ)(A.D7,{}),tooltip:t=>t(lt||(lt=ut`quickLinksCard.buttons.devDiscord.tooltip`)),url:"https://discord.gg/8Hpz2F7AnR",color:"discord"},{title:t=>t(at||(at=ut`quickLinksCard.buttons.good.title`)),icon:(0,P.tZ)(K.Z,{}),tooltip:t=>t(st||(st=ut`quickLinksCard.buttons.good.tooltip`)),to:"/doc",color:"primary"}];function dt(){const{t}=(0,m.$G)(["page_home","ui"]);return(0,P.BX)(b.Z,{children:[(0,P.tZ)(Z.Z,{title:(0,P.tZ)(c.Z,{variant:"h5",children:t(ct||(ct=ut`quickLinksCard.title`))}),avatar:(0,P.tZ)(F.Z,{fontSize:"large"})}),(0,P.tZ)(d.Z,{}),(0,P.tZ)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:Zt.map(((e,r)=>{const{title:i,icon:n,tooltip:o,color:l}=e;let a;return"to"in e&&(a=(0,P.tZ)(M.Z,{fullWidth:!0,color:l,component:B.rU,to:e.to,startIcon:n,children:i(t)},r)),"url"in e&&(a=(0,P.tZ)(M.Z,{fullWidth:!0,color:l,component:u.Z,href:e.url,target:"_blank",rel:"noopener",startIcon:n,children:i(t)},r)),(0,P.tZ)(Y.Z,{title:o(t),placement:"top",arrow:!0,children:a},r)}))})]})}var ht=r(57311),pt=r(41589),mt=r(86503);function gt(){const{database:t}=(0,h.useContext)(X.t),[{timeZoneKey:e,resin:r,resinDate:i},n]=(0,h.useState)((()=>t.displayTool.get()));(0,h.useEffect)((()=>t.displayTool.follow(((t,e)=>n(e)))),[t]);const[o,l]=(0,h.useState)(new Date(Date.now()+pt.W3[e]));(0,h.useEffect)((()=>{const t=()=>(l(new Date(Date.now()+pt.W3[e])),setTimeout((()=>{r=t()}),k.vL-Date.now()%k.vL));let r=t();return()=>clearTimeout(r)}),[e]);const a=(0,h.useRef)(void 0);return(0,h.useEffect)((()=>{if(r<pt.nD){const e=Date.now(),n=pt.nD-r,o=Math.min(Math.floor((e-i)/mt.T),n),l=r+o,s=i+o*mt.T;t.displayTool.set({resin:l,resinDate:s}),l<pt.nD&&(a.current=setTimeout((()=>{return(e=l+1)>=pt.nD?(a.current&&clearTimeout(a.current),a.current=void 0):a.current=setTimeout((()=>console.log("set resin",e+1)),mt.T),void t.displayTool.set({resin:e,resinDate:(new Date).getTime()});var e}),e-s))}return()=>a.current&&clearTimeout(a.current)}),[t]),(0,P.BX)(b.Z,{children:[(0,P.tZ)(Z.Z,{title:(0,P.BX)(c.Z,{variant:"h5",children:[e," ",o.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:(0,P.tZ)(ht.Z,{fontSize:"large"})}),(0,P.tZ)(d.Z,{}),(0,P.tZ)(s.Z,{children:(0,P.tZ)(L.Z,{children:(0,P.tZ)(D.Z,{sx:{p:2},component:B.rU,to:"/tools",children:(0,P.BX)(c.Z,{variant:"h2",sx:{textAlign:"center"},children:[(0,P.tZ)(I.Z,{src:w.CL.resin.fragile}),(0,P.BX)("span",{children:[r,"/",pt.nD]})]})})})})]})}const ft=r.p+"frzyc.70593164774703a0.png",bt=r.p+"lantua.c23fb9dd01154f4d.png",yt=r.p+"van.a12901feed5edf0d.webp",wt=r.p+"stain.2662c60033fc7f86.png",xt=r.p+"sin.31ca7106608dd216.png",At=r.p+"polomo.589caf0d551dddc7.png",kt=r.p+"reens.f0a0692650799e16.png",Ct=r.p+"toofless.a2aa328b8b151935.png",vt=r.p+"yae.1eae8d2f58b8a188.png",Dt=r.p+"d1.c9a3d274451b09b7.png";var Tt=r(36380);let Bt,Gt,Lt,It,St,Et,Xt,zt,Ot,Pt,jt,Rt,Nt=t=>t;const Wt=[{name:"frzyc",img:ft,title:t=>t(Bt||(Bt=Nt`teamCard.jobTitle.leadDev`)),subtitle:"Insomniac in Chief",url:"https://github.com/frzyc"},{name:"Lantua",img:bt,title:t=>t(Gt||(Gt=Nt`teamCard.jobTitle.dev`)),subtitle:"Copium Calculator",url:"https://github.com/lantua"},{name:"Van",img:yt,title:t=>t(Lt||(Lt=Nt`teamCard.jobTitle.dev`)),subtitle:"Waverider Stowaway",url:"https://github.com/nguyentvan7"},{name:"✦ Sin ✦",img:xt,title:t=>t(It||(It=Nt`teamCard.jobTitle.admin`)),subtitle:"Ohh, shiny.",url:""},{name:"Stain",img:wt,title:t=>t(St||(St=Nt`teamCard.jobTitle.admin`)),subtitle:"Australia Man",url:""},{name:"yae!",img:vt,title:t=>t(Et||(Et=Nt`teamCard.jobTitle.dev`)),subtitle:"eeeqeee",url:""},{name:"tooflesswulf",img:Ct,title:t=>t(Xt||(Xt=Nt`teamCard.jobTitle.dev`)),subtitle:"Mad Mathematician",url:""},{name:"Qbe",img:"data:image/png;base64,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",title:t=>t(zt||(zt=Nt`teamCard.jobTitle.dev`)),subtitle:"Irminsul Debugger",url:""},{name:"Polomo",img:At,title:t=>t(Ot||(Ot=Nt`teamCard.jobTitle.translator`)),subtitle:"Director of Text",url:""},{name:"Reens",img:kt,title:t=>t(Pt||(Pt=Nt`teamCard.jobTitle.TC`)),subtitle:"Keqing NERD",url:""},{name:"D1firehail",img:Dt,title:t=>t(jt||(jt=Nt`teamCard.jobTitle.mod`)),subtitle:"Scanner Spy",url:""}];function qt(){const{t}=(0,m.$G)(["page_home","ui"]);return(0,P.BX)(b.Z,{children:[(0,P.tZ)(Z.Z,{title:(0,P.tZ)(c.Z,{variant:"h5",children:t(Rt||(Rt=Nt`teamCard.title`))}),avatar:(0,P.tZ)(Tt.Z,{fontSize:"large"})}),(0,P.tZ)(d.Z,{}),(0,P.tZ)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,P.tZ)(l.ZP,{container:!0,columns:{xs:6,md:12},spacing:1,children:Wt.map((({name:e,img:r,title:i,subtitle:n,url:o},Z)=>(0,P.tZ)(l.ZP,{item:!0,xs:Z<2?3:2,md:Z<=2?4:3,children:(0,P.tZ)(L.Z,{sx:{height:"100%"},children:(0,P.BX)(s.Z,{children:[(0,P.tZ)(a.Z,{component:"img",src:r,sx:{width:"100%",height:"auto",borderRadius:"50%"}}),(0,P.BX)(a.Z,{display:"flex",flexDirection:"column",children:[o?(0,P.tZ)(c.Z,{variant:"h6",sx:{textAlign:"center"},color:"inherit",component:u.Z,href:o,target:"_blank",rel:"noopener",children:(0,P.tZ)("strong",{children:e})}):(0,P.tZ)(c.Z,{variant:"h6",sx:{textAlign:"center"},children:(0,P.tZ)("strong",{children:e})}),(0,P.tZ)(c.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:i(t)}),(0,P.tZ)(c.Z,{variant:"subtitle2",sx:{textAlign:"center",transform:"Stain"===e?"rotate(180deg)":void 0},color:"secondary.light",children:n})]})]})})},e)))})})]})}let Qt,Jt,Ut=t=>t;const Vt=JSON.parse(null!=(Qt='["HGti4mHrmYE","hiRjngMgHfQ","uuV89Dx3Rdc","v7VmQ7jxVO0","B-DZGcEfpiY","j6Y1dZwb1sY"]')?'["HGti4mHrmYE","hiRjngMgHfQ","uuV89Dx3Rdc","v7VmQ7jxVO0","B-DZGcEfpiY","j6Y1dZwb1sY"]':"[]");function Kt(){const{t}=(0,m.$G)(["page_home","ui"]);return Vt.length?(0,P.BX)(b.Z,{children:[(0,P.tZ)(Z.Z,{title:(0,P.tZ)(c.Z,{variant:"h5",component:u.Z,color:"inherit",href:"https://youtube.com/playlist?list=PLcVsEMZO5IVFQdeh8zteZwiNchObfQ684",target:"_blank",rel:"noopener",children:t(Jt||(Jt=Ut`vidGuideCard.title`))}),avatar:(0,P.tZ)(Q.Z,{fontSize:"large"})}),(0,P.tZ)(d.Z,{}),(0,P.tZ)(s.Z,{children:(0,P.tZ)(l.ZP,{container:!0,columns:{xs:1,sm:2},spacing:2,children:Vt.map((t=>(0,P.tZ)(l.ZP,{item:!0,xs:1,children:(0,P.tZ)(a.Z,{sx:{position:"relative",pb:"56.25%",pt:"25px",height:0,borderRadius:2,overflow:"hidden","> iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},children:(0,P.tZ)("iframe",{width:"560",height:"349",title:"Genshin Optimizer Guide",src:`https://www.youtube-nocookie.com/embed/${t}`,frameBorder:0,allowFullScreen:!0})},t)},t)))})})]}):null}var Ft=r(81114);let Mt,Yt=t=>t;function Ht(){const t=(0,n.Z)(),e=(0,o.Z)(t.breakpoints.up("lg"));return p.ZP.send({hitType:"pageview",page:"/home"}),e?(0,P.BX)(l.ZP,{container:!0,spacing:2,direction:"row-reverse",sx:{my:2},children:[(0,P.BX)(l.ZP,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.tZ)(dt,{}),(0,P.tZ)(gt,{})]}),(0,P.BX)(l.ZP,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,P.tZ)(_t,{}),(0,P.tZ)(N,{}),(0,P.tZ)(Kt,{}),(0,P.tZ)($t,{}),(0,P.tZ)(qt,{})]})]}):(0,P.BX)(a.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,P.tZ)(_t,{}),(0,P.tZ)(dt,{}),(0,P.tZ)(N,{}),(0,P.tZ)(gt,{}),(0,P.tZ)(Kt,{}),(0,P.tZ)($t,{}),(0,P.tZ)(qt,{})]})}function _t(){const{t}=(0,m.$G)("page_home");return(0,P.tZ)(b.Z,{children:(0,P.tZ)(s.Z,{children:(0,P.tZ)(c.Z,{variant:"subtitle1",children:(0,P.BX)(m.cC,{t,i18nKey:"intro",children:["The ",(0,P.tZ)("strong",{children:"ultimate"})," ",(0,P.tZ)(u.Z,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:(0,P.tZ)("i",{children:"Genshin Impact"})})," ","calculator, GO will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with what you have."]})})})})}function $t(){const{t}=(0,m.$G)("page_home"),[{isLoaded:e,text:r},n]=(0,h.useState)({isLoaded:!1,text:""});return(0,h.useEffect)((()=>{var t;fetch(null!=(t="https://api.github.com/repos/frzyc/genshin-optimizer/releases/tags/"+Ft.i8)?t:"").then((t=>t.arrayBuffer())).then((t=>{const e=new TextDecoder("utf-8").decode(t),r=JSON.parse(e);n({isLoaded:!0,text:r.body})})).catch((t=>console.log("Error: "+t.message)))}),[]),(0,P.BX)(b.Z,{children:[(0,P.tZ)(Z.Z,{title:(0,P.tZ)(c.Z,{variant:"h5",children:t(Mt||(Mt=Yt`quickLinksCard.buttons.patchNotes.title`))}),avatar:(0,P.tZ)(i.Z,{fontSize:"large"})}),(0,P.tZ)(d.Z,{}),(0,P.tZ)(s.Z,{children:e?(0,P.tZ)(g.D,{children:r,remarkPlugins:[f.Z]}):"Loading..."})]})}}}]);