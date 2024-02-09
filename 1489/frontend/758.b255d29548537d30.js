"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[758],{23119:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(98283),a=n(7560),i=n(2784),o=n(40489),c=n(69075),l=n(7342),s=n(65992),d=n(43853),h=n(8250),Z=n(98659),m=n(62197),u=n(69222),p=n(15672);function y(e){return(0,p.Z)("MuiLink",e)}const f=(0,u.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var g=n(2818),v=n(47591);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=({theme:e,ownerState:t})=>{const n=(e=>b[e]||e)(t.color),r=(0,g.DW)(e,`palette.${n}`,!1)||t.color,a=(0,g.DW)(e,`palette.${n}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,v.Fq)(r,.4)};var x=n(52322);const B=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],A=(0,s.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,a.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:K({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}}))),w=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:s,color:m="primary",component:u="a",onBlur:p,onFocus:f,TypographyClasses:g,underline:v="always",variant:K="inherit",sx:w}=n,S=(0,r.Z)(n,B),{isFocusVisibleRef:k,onBlur:_,onFocus:C,ref:$}=(0,h.Z)(),[G,X]=i.useState(!1),O=(0,Z.Z)(t,$),W=(0,a.Z)({},n,{color:m,component:u,focusVisible:G,underline:v,variant:K}),D=(e=>{const{classes:t,component:n,focusVisible:r,underline:a}=e,i={root:["root",`underline${(0,l.Z)(a)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,c.Z)(i,y,t)})(W);return(0,x.jsx)(A,(0,a.Z)({color:m,className:(0,o.Z)(D.root,s),classes:g,component:u,onBlur:e=>{_(e),!1===k.current&&X(!1),p&&p(e)},onFocus:e=>{C(e),!0===k.current&&X(!0),f&&f(e)},ref:O,ownerState:W,variant:K,sx:[...Object.keys(b).includes(m)?[]:[{color:m}],...Array.isArray(w)?w:[w]]},S))}))},12366:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(65992).ZP)("span",{name:"SqBadge",slot:"Root"})((({theme:e,color:t="primary"})=>{var n,r;return{display:"inline-block",padding:".25em .4em",lineHeight:1,textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em",backgroundColor:null==(n=e.palette[t])?void 0:n.main,color:null==(r=e.palette[t])?void 0:r.contrastText}}))},69614:(e,t,n)=>{n.d(t,{V:()=>c,Z:()=>Artifact});var r=n(42745),a=n(503),i=n(14115);const o=["hp_","def_","atk_"];function c(e){return o.includes(e)?"%":""}class Artifact{constructor(){if(this instanceof Artifact)throw Error("A static class cannot be instantiated.")}static getArtifactEfficiency(e,t){const{substats:n,rarity:r,level:a}=e,o=n.filter((({key:e})=>e&&t.has(e))).reduce(((e,{efficiency:t})=>e+(null!=t?t:0)),0),c=(0,i.NB)(a,r),l=n.filter((e=>!e.key)).length,s=n.filter((e=>e.key&&t.has(e.key))).length,d=t.size-s-(t.has(e.mainStatKey)?1:0);let h=o;const Z=Artifact.maxSubstatRollEfficiency[r];return h+=Z*Math.min(l,d),(s||l&&d)&&(h+=Z*(c-l)),{currentEfficiency:o,maxEfficiency:h}}}Artifact.maxSubstatRollEfficiency=(0,r.K8)(a.$W,(e=>100*Math.max(...a._m.map((t=>(0,i.U9)(t,e)/(0,i.U9)(t,5)))))),Artifact.setToSlots=e=>{const t={};return Object.entries(e).forEach((([e,n])=>{n&&(t[n.setKey]?t[n.setKey].push(e):t[n.setKey]=[e])})),t},Artifact.levelVariant=e=>"roll"+(Math.floor(Math.max(e,0)/4)+1)},80758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(38243),a=n(503),i=n(67245),o=n(29798),c=n(52322);const l=(0,o.Z)((0,c.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");var s=n(41075),d=n(62197),h=n(56961),Z=n(7671),m=n(38484),u=n(78287),p=n(79906),y=n(23119),f=n(67550),g=n(2784),v=n(61877),b=n(11141),K=n(73557),x=n(39857),B=n(24264),A=n(87833),w=n(12366),S=n(69614),k=n(6853),_=n(55893),C=n(52903);function $(){var e;v.ZP.send({hitType:"pageview",page:"/doc"});const{params:{currentTab:t}}=null!=(e=(0,K.bS)("/doc/:currentTab"))?e:{params:{currentTab:""}};return(0,C.BX)(B.Z,{sx:{my:1},children:[(0,C.BX)(s.ZP,{container:!0,sx:{px:2,py:1},children:[(0,C.tZ)(s.ZP,{item:!0,flexGrow:1,children:(0,C.tZ)(d.Z,{variant:"h6",children:"Documentation"})}),(0,C.tZ)(s.ZP,{item:!0,children:(0,C.tZ)(d.Z,{variant:"h6",children:(0,C.tZ)(w.Z,{color:"info",children:"Version. 2"})})})]}),(0,C.tZ)(h.Z,{}),(0,C.tZ)(Z.Z,{children:(0,C.BX)(s.ZP,{container:!0,spacing:1,children:[(0,C.tZ)(s.ZP,{item:!0,xs:12,md:2,children:(0,C.tZ)(A.Z,{sx:{height:"100%"},children:(0,C.BX)(m.Z,{orientation:"vertical",value:t,"aria-label":"Documentation Navigation",sx:{borderRight:1,borderColor:"divider"},children:[(0,C.tZ)(u.Z,{label:"Overview",value:"",component:x.rU,to:""}),(0,C.tZ)(u.Z,{label:"Key naming convention",value:"KeyNaming",component:x.rU,to:"KeyNaming"}),(0,C.tZ)(u.Z,{label:(0,C.tZ)("code",{children:"StatKey"}),value:"StatKey",component:x.rU,to:"StatKey"}),(0,C.tZ)(u.Z,{label:(0,C.tZ)("code",{children:"ArtifactSetKey"}),value:"ArtifactSetKey",component:x.rU,to:"ArtifactSetKey"}),(0,C.tZ)(u.Z,{label:(0,C.tZ)("code",{children:"CharacterKey"}),value:"CharacterKey",component:x.rU,to:"CharacterKey"}),(0,C.tZ)(u.Z,{label:(0,C.tZ)("code",{children:"WeaponKey"}),value:"WeaponKey",component:x.rU,to:"WeaponKey"}),(0,C.tZ)(u.Z,{label:(0,C.tZ)("code",{children:"MaterialKey"}),value:"MaterialKey",component:x.rU,to:"MaterialKey"}),(0,C.tZ)(u.Z,{label:"Version History",value:"VersionHistory",component:x.rU,to:"VersionHistory"})]})})}),(0,C.tZ)(s.ZP,{item:!0,xs:12,md:10,children:(0,C.tZ)(A.Z,{sx:{height:"100%"},children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(g.Suspense,{fallback:(0,C.tZ)(p.Z,{variant:"rectangular",width:"100%",height:600}),children:(0,C.BX)(K.Z5,{children:[(0,C.tZ)(K.AW,{index:!0,element:(0,C.tZ)(D,{})}),(0,C.tZ)(K.AW,{path:"/VersionHistory",element:(0,C.tZ)(R,{})}),(0,C.tZ)(K.AW,{path:"/MaterialKey",element:(0,C.tZ)(H,{})}),(0,C.tZ)(K.AW,{path:"/ArtifactSetKey",element:(0,C.tZ)(N,{})}),(0,C.tZ)(K.AW,{path:"/WeaponKey",element:(0,C.tZ)(P,{})}),(0,C.tZ)(K.AW,{path:"/CharacterKey",element:(0,C.tZ)(T,{})}),(0,C.tZ)(K.AW,{path:"/StatKey",element:(0,C.tZ)(V,{})}),(0,C.tZ)(K.AW,{path:"/KeyNaming",element:(0,C.tZ)(M,{})})]})})})})})]})})]})}const G='interface IGOOD {\n  format: "GOOD" // A way for people to recognize this format.\n  version: number // GOOD API version.\n  source: string // The app that generates this data.\n  characters?: ICharacter[]\n  artifacts?: IArtifact[]\n  weapons?: IWeapon[]\n  materials?: { // Added in version 2\n    [key:MaterialKey]: number\n  }\n}',X='interface IArtifact {\n  setKey: SetKey //e.g. "GladiatorsFinale"\n  slotKey: SlotKey //e.g. "plume"\n  level: number //0-20 inclusive\n  rarity: number //1-5 inclusive\n  mainStatKey: StatKey\n  location: CharacterKey|"" //where "" means not equipped.\n  lock: boolean //Whether the artifact is locked in game.\n  substats: ISubstat[]\n}\n\ninterface ISubstat {\n  key: StatKey //e.g. "critDMG_"\n  value: number //e.g. 19.4\n}\n\ntype SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"',O='interface IWeapon {\n  key: WeaponKey //"CrescentPike"\n  level: number //1-90 inclusive\n  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80\n  refinement: number //1-5 inclusive\n  location: CharacterKey | "" //where "" means not equipped.\n  lock: boolean //Whether the weapon is locked in game.\n}',W='interface ICharacter {\n  key: CharacterKey //e.g. "Rosaria"\n  level: number //1-90 inclusive\n  constellation: number //0-6 inclusive\n  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80\n  talent: { //does not include boost from constellations. 1-15 inclusive\n    auto: number\n    skill: number\n    burst: number\n  }\n}';function D(){return(0,C.BX)(C.HY,{children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Genshin Open Object Description (GOOD)"}),(0,C.BX)(d.Z,{gutterBottom:!0,children:[(0,C.tZ)("strong",{children:"GOOD"})," is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion."]}),(0,C.tZ)(d.Z,{gutterBottom:!0,children:"As of version 6.0.0, Genshin Optimizer's database export conforms to this format."}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:G})})}),(0,C.tZ)("br",{}),(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Artifact data representation"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:X})})}),(0,C.tZ)("br",{}),(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Weapon data representation"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:O})})}),(0,C.tZ)("br",{}),(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Character data representation"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:W})})})]})}function M(){return(0,C.BX)(B.Z,{children:[(0,C.tZ)(Z.Z,{children:(0,C.tZ)(d.Z,{children:"Key Naming Convention"})}),(0,C.tZ)(h.Z,{}),(0,C.BX)(Z.Z,{children:[(0,C.BX)(d.Z,{gutterBottom:!0,children:["The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in ",(0,C.tZ)("strong",{children:"PascalCase"}),". This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)"]}),(0,C.BX)(d.Z,{gutterBottom:!0,children:[" ","To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:"]}),(0,C.BX)(d.Z,{children:[(0,C.tZ)("code",{children:"Gladiator's Finale"})," ",(0,C.tZ)(l,{sx:{verticalAlign:"bottom"}})," ",(0,C.tZ)("code",{children:"GladiatorsFinale"})]}),(0,C.BX)(d.Z,{children:[(0,C.tZ)("code",{children:"Spirit Locket of Boreas"})," ",(0,C.tZ)(l,{sx:{verticalAlign:"bottom"}})," ",(0,C.tZ)("code",{children:"SpiritLocketOfBoreas"})]}),(0,C.BX)(d.Z,{children:[(0,C.tZ)("code",{children:'"The Catch"'})," ",(0,C.tZ)(l,{sx:{verticalAlign:"bottom"}})," ",(0,C.tZ)("code",{children:"TheCatch"})]})]})]})}function V(){const{t:e}=(0,b.$G)("statKey_gen"),t=`type StatKey\n  = ${["hp","hp_","atk","atk_","def","def_","eleMas","enerRech_","heal_","critRate_","critDMG_","physical_dmg_","anemo_dmg_","geo_dmg_","electro_dmg_","hydro_dmg_","pyro_dmg_","cryo_dmg_","dendro_dmg_"].map((t=>`"${t}" //${e(t)}${(0,S.V)(t)}`)).join("\n  | ")}`;return(0,C.BX)(C.HY,{children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"StatKey"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:t})})})]})}function N(){const{t:e}=(0,b.$G)("artifactNames_gen"),t=`type ArtifactSetKey\n  = ${[...new Set(a.Gt)].sort().map((t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`)).join("\n  | ")}`;return(0,C.BX)(C.HY,{children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"ArtifactSetKey"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:t})})})]})}function T(){const{t:e}=(0,b.$G)("charNames_gen"),{database:t}=(0,g.useContext)(k.t4),{gender:n}=(0,_.Z)(),i=`type CharacterKey\n  = ${[...new Set(a.vp)].sort().map((r=>`"${r}" //${e(`charNames_gen:${(0,a.Cs)(t.chars.LocationToCharacterKey(r),n)}`)}`)).join("\n  | ")}`;return(0,C.BX)(C.HY,{children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"CharacterKey"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:i})})})]})}function P(){const{t:e}=(0,b.$G)("weaponNames_gen"),t=`type WeaponKey\n  = ${[...new Set(a.fG)].sort().map((t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`)).join("\n  | ")}`;return(0,C.BX)(C.HY,{children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"WeaponKey"}),(0,C.tZ)(B.Z,{children:(0,C.tZ)(Z.Z,{children:(0,C.tZ)(r.dn,{text:t})})})]})}function H(){const{t:e}=(0,b.$G)("material_gen"),t=`type MaterialKey\n  = ${Object.keys(i.G2.material).sort().map((t=>`"${t}" // ${e(`${t}.name`)}`)).join("\n  | ")}`;return(0,C.BX)(C.HY,{children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"MaterialKey"}),(0,C.tZ)(B.Z,{children:(0,C.BX)(Z.Z,{children:[(0,C.BX)(d.Z,{gutterBottom:!0,children:["The item names are taken from the english translation, and then converted into"," ",(0,C.tZ)(y.Z,{component:x.rU,to:"KeyNaming",children:(0,C.tZ)("code",{children:"PascalCase"})}),"."]}),(0,C.tZ)(r.dn,{text:t})]})})]})}function R(){return(0,C.BX)(f.Z,{display:"flex",flexDirection:"column",gap:2,children:[(0,C.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Version History"}),(0,C.BX)(B.Z,{children:[(0,C.tZ)(Z.Z,{children:(0,C.tZ)(d.Z,{children:"Version 1"})}),(0,C.tZ)(h.Z,{}),(0,C.tZ)(Z.Z,{children:(0,C.BX)(d.Z,{children:["Created general ",(0,C.tZ)("code",{children:"IGOOD"})," format with character, weapon, artifact fields."]})})]}),(0,C.BX)(B.Z,{children:[(0,C.tZ)(Z.Z,{children:(0,C.tZ)(d.Z,{children:"Version 2"})}),(0,C.tZ)(h.Z,{}),(0,C.tZ)(Z.Z,{children:(0,C.BX)(d.Z,{children:["Adds ",(0,C.tZ)("code",{children:"materials"})," field to ",(0,C.tZ)("code",{children:"IGOOD"}),". All other fields remain the same. V2 is backwards compatible with V1."]})})]})]})}}}]);