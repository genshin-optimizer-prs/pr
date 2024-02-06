"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[295],{75213:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7560),i=n(98283),a=n(2784),o=n(40489),s=n(69075),c=n(43853),l=n(65992),d=n(69222),h=n(15672);function p(e){return(0,h.Z)("MuiCardActionArea",e)}const u=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var Z=n(53047),g=n(52322);const m=["children","className","focusVisibleClassName"],f=(0,l.ZP)(Z.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${u.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${u.focusVisible} .${u.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),x=(0,l.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),v=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardActionArea"}),{children:a,className:l,focusVisibleClassName:d}=n,h=(0,i.Z)(n,m),u=n,Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,t)})(u);return(0,g.jsxs)(f,(0,r.Z)({className:(0,o.Z)(Z.root,l),focusVisibleClassName:(0,o.Z)(d,Z.focusVisible),ref:t,ownerState:u},h,{children:[a,(0,g.jsx)(x,{className:Z.focusHighlight,ownerState:u})]}))}))},23119:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(98283),i=n(7560),a=n(2784),o=n(40489),s=n(69075),c=n(7342),l=n(65992),d=n(43853),h=n(8250),p=n(98659),u=n(62197),Z=n(69222),g=n(15672);function m(e){return(0,g.Z)("MuiLink",e)}const f=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var x=n(2818),v=n(47591);const y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=({theme:e,ownerState:t})=>{const n=(e=>y[e]||e)(t.color),r=(0,x.DW)(e,`palette.${n}`,!1)||t.color,i=(0,x.DW)(e,`palette.${n}Channel`);return"vars"in e&&i?`rgba(${i} / 0.4)`:(0,v.Fq)(r,.4)};var B=n(52322);const C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,l.ZP)(u.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,c.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:b({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}}))),k=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:l,color:u="primary",component:Z="a",onBlur:g,onFocus:f,TypographyClasses:x,underline:v="always",variant:b="inherit",sx:k}=n,M=(0,r.Z)(n,C),{isFocusVisibleRef:X,onBlur:I,onFocus:S,ref:z}=(0,h.Z)(),[A,H]=a.useState(!1),L=(0,p.Z)(t,z),V=(0,i.Z)({},n,{color:u,component:Z,focusVisible:A,underline:v,variant:b}),j=(e=>{const{classes:t,component:n,focusVisible:r,underline:i}=e,a={root:["root",`underline${(0,c.Z)(i)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(a,m,t)})(V);return(0,B.jsx)(w,(0,i.Z)({color:u,className:(0,o.Z)(j.root,l),classes:x,component:Z,onBlur:e=>{I(e),!1===X.current&&H(!1),g&&g(e)},onFocus:e=>{S(e),!0===X.current&&H(!0),f&&f(e)},ref:L,ownerState:V,variant:b,sx:[...Object.keys(y).includes(u)?[]:[{color:u}],...Array.isArray(k)?k:[k]]},M))}))},33420:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(4991),i=n(38243),a=n(30460),o=n(70034),s=n(29798),c=n(52322);const l=(0,s.Z)((0,c.jsx)("path",{d:"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"}),"Gamepad"),d=(0,s.Z)((0,c.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer"),h=(0,s.Z)((0,c.jsx)("path",{d:"M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1zm5-5-4-4v3h-5v2h5v3l4-4z"}),"SendToMobile"),p=(0,s.Z)((0,c.jsx)("path",{d:"m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"SportsEsports");var u=n(68164);const Z=(0,s.Z)([(0,c.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,c.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch"),g=(0,s.Z)((0,c.jsx)("path",{d:"M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"}),"Backpack"),m=(0,s.Z)((0,c.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var f=n(67550),x=n(7671),v=n(62197),y=n(23119),b=n(41075),B=n(75213),C=n(98283),w=n(7560),k=n(2784),M=n(40489),X=n(69075),I=n(43853),S=n(65992),z=n(69222),A=n(15672);function H(e){return(0,A.Z)("MuiCardMedia",e)}(0,z.Z)("MuiCardMedia",["root","media","img"]);const L=["children","className","component","image","src","style"],V=(0,S.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:r,isImageComponent:i}=n;return[t.root,r&&t.media,i&&t.img]}})((({ownerState:e})=>(0,w.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),j=["video","audio","picture","iframe","img"],_=["picture","img"],D=k.forwardRef((function(e,t){const n=(0,I.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:i,component:a="div",image:o,src:s,style:l}=n,d=(0,C.Z)(n,L),h=-1!==j.indexOf(a),p=!h&&o?(0,w.Z)({backgroundImage:`url("${o}")`},l):l,u=(0,w.Z)({},n,{component:a,isMediaComponent:h,isImageComponent:-1!==_.indexOf(a)}),Z=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:r}=e,i={root:["root",n&&"media",r&&"img"]};return(0,X.Z)(i,H,t)})(u);return(0,c.jsx)(V,(0,w.Z)({className:(0,M.Z)(Z.root,i),as:a,role:!h&&o?"img":void 0,ref:t,style:p,ownerState:u,src:h?o||s:void 0},d,{children:r}))})),N=D;var R=n(85801),K=n(23883),G=n(61877),P=n(11141),$=n(39857);const O=n.p+"AdeptiScanner.c90fcaedcea12a38.png",T=n.p+"GIScanner.fbc0790bbf38256d.png",W=n.p+"artiscan.011e8dbb798a66cd.png";var F=n(52903);function E(){const{t:e}=(0,P.$G)("page_scanner");return G.ZP.send({hitType:"pageview",page:"/scanner"}),(0,F.BX)(f.Z,{display:"flex",flexDirection:"column",gap:2,my:1,children:[(0,F.tZ)(i.s8,{children:(0,F.tZ)(x.Z,{children:(0,F.BX)(P.cC,{t:e,i18nKey:"intro",children:[(0,F.tZ)(v.Z,{gutterBottom:!0,variant:"h5",children:"Scanners"}),(0,F.tZ)(v.Z,{children:"Scanners are Genshin tools that can automatically scan game data from screenshots or directly from the game."}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:"Below are several scanners that have been tested with GO."}),(0,F.BX)(v.Z,{variant:"subtitle2",children:["To upload the exported file, go to the",(0,F.tZ)(y.Z,{component:$.rU,to:"/setting",children:"Settings"}),"page, and upload your file in the","<strong>Database Upload</strong>","section."]})]})})}),(0,F.BX)(b.ZP,{container:!0,columns:{xs:1,md:2,lg:4},spacing:2,children:[(0,F.tZ)(b.ZP,{item:!0,xs:1,children:(0,F.BX)(i.s8,{sx:{height:"100%"},children:[(0,F.tZ)(B.Z,{href:"https://artiscan.ninjabay.org/",target:"_blank",children:(0,F.tZ)(N,{component:"img",image:W})}),(0,F.BX)(x.Z,{children:[(0,F.BX)(f.Z,{display:"flex",gap:1,alignItems:"center",children:[(0,F.tZ)(v.Z,{variant:"h5",flexGrow:1,children:(0,F.tZ)(P.cC,{t:e,i18nKey:"nb.title",children:"Artiscan"})}),(0,F.tZ)(R.Z,{href:"https://artiscan.ninjabay.org/",target:"_blank",children:(0,F.tZ)(a.Z,{})}),(0,F.tZ)(R.Z,{href:"https://youtu.be/_qzzunuef4Y",target:"_blank",children:(0,F.tZ)(o.Z,{})})]}),(0,F.BX)(v.Z,{variant:"subtitle2",sx:{display:"flex",gap:1,py:1,flexWrap:"wrap"},children:[(0,F.BX)(i.dL,{color:"success",sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(l,{sx:{pr:.5}}),"4.4"]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(d,{sx:{pr:.5}}),e("tags.pc")]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(h,{sx:{pr:.5}}),e("tags.mobile")]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(p,{sx:{pr:.5}}),e("tags.ps")]})]}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:e("nb.p1")}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:e("nb.p2")})]})]})}),(0,F.tZ)(b.ZP,{item:!0,xs:1,children:(0,F.BX)(i.s8,{sx:{height:"100%"},children:[(0,F.tZ)(B.Z,{href:"https://github.com/Andrewthe13th/Inventory_Kamera",target:"_blank",children:(0,F.tZ)(N,{component:"img",image:T})}),(0,F.BX)(x.Z,{children:[(0,F.BX)(f.Z,{display:"flex",gap:1,alignItems:"center",children:[(0,F.tZ)(v.Z,{variant:"h5",flexGrow:1,children:(0,F.tZ)(P.cC,{t:e,i18nKey:"ik.title",children:"Inventory Kamera"})}),(0,F.tZ)(R.Z,{href:"https://discord.gg/zh56aVWe3U",target:"_blank",children:(0,F.tZ)(r.D7,{})}),(0,F.tZ)(R.Z,{href:"https://github.com/Andrewthe13th/Inventory_Kamera",target:"_blank",children:(0,F.tZ)(u.Z,{})})]}),(0,F.BX)(v.Z,{variant:"subtitle2",sx:{display:"flex",gap:1,py:1,flexWrap:"wrap"},children:[(0,F.BX)(i.dL,{color:"success",sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(l,{sx:{pr:.5}}),"4.4"]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(d,{sx:{pr:.5}}),e("tags.pc")]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(Z,{sx:{pr:.5}}),e("tags.characters")]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center",gap:.5},children:[(0,F.tZ)(r.Yt,{}),e("tags.weapons")]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(g,{sx:{pr:.5}}),e("tags.materials")]}),(0,F.tZ)(U,{children:(0,F.BX)(i.dL,{color:"warning",sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(m,{sx:{pr:.5}}),e("tags.gameMani")]})})]}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:(0,F.tZ)(P.cC,{t:e,i18nKey:"ik.p1"})}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:(0,F.BX)(P.cC,{t:e,i18nKey:"seelieme",children:["This app can also scan materials for",(0,F.tZ)(y.Z,{href:"https://seelie.me/",target:"_blank",rel:"noreferrer",children:"Seelie.me"})]})}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:(0,F.BX)(P.cC,{t:e,i18nKey:"goodeng",children:["This app only scans in English and exports to",(0,F.tZ)("code",{children:"GOOD"}),"format."]})})]})]})}),(0,F.tZ)(b.ZP,{item:!0,xs:1,children:(0,F.BX)(i.s8,{sx:{height:"100%"},children:[(0,F.tZ)(B.Z,{href:"https://github.com/D1firehail/AdeptiScanner-GI",target:"_blank",children:(0,F.tZ)(N,{component:"img",image:O})}),(0,F.BX)(x.Z,{children:[(0,F.BX)(f.Z,{display:"flex",gap:1,alignItems:"center",children:[(0,F.tZ)(v.Z,{variant:"h5",flexGrow:1,children:(0,F.tZ)(P.cC,{t:e,i18nKey:"as.title",children:"AdeptiScanner"})}),(0,F.tZ)(R.Z,{href:"https://github.com/D1firehail/AdeptiScanner-GI",target:"_blank",children:(0,F.tZ)(u.Z,{})})]}),(0,F.BX)(v.Z,{variant:"subtitle2",sx:{display:"flex",gap:1,py:1,flexWrap:"wrap"},children:[(0,F.BX)(i.dL,{color:"success",sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(l,{sx:{pr:.5}}),"4.4"]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(d,{sx:{pr:.5}}),e("tags.pc")]}),(0,F.BX)(i.dL,{sx:{display:"flex",alignItems:"center",gap:.5},children:[(0,F.tZ)(r.Yt,{}),e("tags.weapons")]}),(0,F.tZ)(U,{children:(0,F.BX)(i.dL,{color:"warning",sx:{display:"flex",alignItems:"center"},children:[(0,F.tZ)(m,{sx:{pr:.5}}),e("tags.gameMani")]})})]}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:(0,F.BX)(P.cC,{t:e,i18nKey:"as.p1",children:["Scans all artifacts and weapons in your inventory. Has a manual scanning mode and can also import via",(0,F.tZ)(y.Z,{href:"https://enka.network/",target:"_blank",rel:"noreferrer",children:"Enka.Network"}),"."]})}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:(0,F.tZ)(P.cC,{t:e,i18nKey:"as.p2",children:"This scanner can also be configured for new artifacts in new game versions without needing an update."})}),(0,F.tZ)(v.Z,{gutterBottom:!0,children:(0,F.BX)(P.cC,{t:e,i18nKey:"goodeng",children:["This app only scans in English and exports to",(0,F.tZ)("code",{children:"GOOD"}),"format."]})})]})]})})]})]})}function U({children:e}){const{t}=(0,P.$G)("page_scanner");return(0,F.tZ)(K.Z,{placement:"top",title:(0,F.tZ)(v.Z,{children:(0,F.BX)(P.cC,{t,i18nKey:"tosWarn",children:["As any tools that indirectly interact with the game, although their usage is virtually undetectable,",(0,F.tZ)(y.Z,{color:"inherit",href:"https://genshin.mihoyo.com/en/news/detail/5763",target:"_blank",rel:"noreferrer",children:"there could still be risk with using them."}),"Users discretion is advised."]})}),children:e})}}}]);