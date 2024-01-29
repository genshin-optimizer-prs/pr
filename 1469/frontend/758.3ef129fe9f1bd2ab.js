"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[758],{23119:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(98283),a=n(7560),o=n(2784),i=n(40489),c=n(69075),l=n(7342),s=n(65992),d=n(43853),Z=n(8250),h=n(98659),m=n(62197),u=n(69222),p=n(15672);function y(e){return(0,p.Z)("MuiLink",e)}const g=(0,u.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var v=n(2818),f=n(47591);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=({theme:e,ownerState:t})=>{const n=(e=>b[e]||e)(t.color),r=(0,v.DW)(e,`palette.${n}`,!1)||t.color,a=(0,v.DW)(e,`palette.${n}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,f.Fq)(r,.4)};var B=n(52322);const x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,s.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,a.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:K({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}}))),S=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:s,color:m="primary",component:u="a",onBlur:p,onFocus:g,TypographyClasses:v,underline:f="always",variant:K="inherit",sx:S}=n,k=(0,r.Z)(n,x),{isFocusVisibleRef:A,onBlur:C,onFocus:_,ref:$}=(0,Z.Z)(),[G,X]=o.useState(!1),O=(0,h.Z)(t,$),W=(0,a.Z)({},n,{color:m,component:u,focusVisible:G,underline:f,variant:K}),D=(e=>{const{classes:t,component:n,focusVisible:r,underline:a}=e,o={root:["root",`underline${(0,l.Z)(a)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,c.Z)(o,y,t)})(W);return(0,B.jsx)(w,(0,a.Z)({color:m,className:(0,i.Z)(D.root,s),classes:v,component:u,onBlur:e=>{C(e),!1===A.current&&X(!1),p&&p(e)},onFocus:e=>{_(e),!0===A.current&&X(!0),g&&g(e)},ref:O,ownerState:W,variant:K,sx:[...Object.keys(b).includes(m)?[]:[{color:m}],...Array.isArray(S)?S:[S]]},k))}))},80758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(25372),a=n(72718),o=n(26925),i=n(29798),c=n(52322);const l=(0,i.Z)((0,c.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");var s=n(41075),d=n(62197),Z=n(56961),h=n(7671),m=n(38484),u=n(78287),p=n(79906),y=n(23119),g=n(67550),v=n(2784),f=n(61877),b=n(11141),K=n(73557),B=n(39857),x=n(24264),w=n(87833),S=n(12366),k=n(69614),A=n(34156),C=n(55893),_=n(52903);function $(){var e;f.ZP.send({hitType:"pageview",page:"/doc"});const{params:{currentTab:t}}=null!=(e=(0,K.bS)("/doc/:currentTab"))?e:{params:{currentTab:""}};return(0,_.BX)(x.Z,{sx:{my:1},children:[(0,_.BX)(s.ZP,{container:!0,sx:{px:2,py:1},children:[(0,_.tZ)(s.ZP,{item:!0,flexGrow:1,children:(0,_.tZ)(d.Z,{variant:"h6",children:"Documentation"})}),(0,_.tZ)(s.ZP,{item:!0,children:(0,_.tZ)(d.Z,{variant:"h6",children:(0,_.tZ)(S.Z,{color:"info",children:"Version. 2"})})})]}),(0,_.tZ)(Z.Z,{}),(0,_.tZ)(h.Z,{children:(0,_.BX)(s.ZP,{container:!0,spacing:1,children:[(0,_.tZ)(s.ZP,{item:!0,xs:12,md:2,children:(0,_.tZ)(w.Z,{sx:{height:"100%"},children:(0,_.BX)(m.Z,{orientation:"vertical",value:t,"aria-label":"Documentation Navigation",sx:{borderRight:1,borderColor:"divider"},children:[(0,_.tZ)(u.Z,{label:"Overview",value:"",component:B.rU,to:""}),(0,_.tZ)(u.Z,{label:"Key naming convention",value:"KeyNaming",component:B.rU,to:"KeyNaming"}),(0,_.tZ)(u.Z,{label:(0,_.tZ)("code",{children:"StatKey"}),value:"StatKey",component:B.rU,to:"StatKey"}),(0,_.tZ)(u.Z,{label:(0,_.tZ)("code",{children:"ArtifactSetKey"}),value:"ArtifactSetKey",component:B.rU,to:"ArtifactSetKey"}),(0,_.tZ)(u.Z,{label:(0,_.tZ)("code",{children:"CharacterKey"}),value:"CharacterKey",component:B.rU,to:"CharacterKey"}),(0,_.tZ)(u.Z,{label:(0,_.tZ)("code",{children:"WeaponKey"}),value:"WeaponKey",component:B.rU,to:"WeaponKey"}),(0,_.tZ)(u.Z,{label:(0,_.tZ)("code",{children:"MaterialKey"}),value:"MaterialKey",component:B.rU,to:"MaterialKey"}),(0,_.tZ)(u.Z,{label:"Version History",value:"VersionHistory",component:B.rU,to:"VersionHistory"})]})})}),(0,_.tZ)(s.ZP,{item:!0,xs:12,md:10,children:(0,_.tZ)(w.Z,{sx:{height:"100%"},children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(v.Suspense,{fallback:(0,_.tZ)(p.Z,{variant:"rectangular",width:"100%",height:600}),children:(0,_.BX)(K.Z5,{children:[(0,_.tZ)(K.AW,{index:!0,element:(0,_.tZ)(D,{})}),(0,_.tZ)(K.AW,{path:"/VersionHistory",element:(0,_.tZ)(I,{})}),(0,_.tZ)(K.AW,{path:"/MaterialKey",element:(0,_.tZ)(H,{})}),(0,_.tZ)(K.AW,{path:"/ArtifactSetKey",element:(0,_.tZ)(M,{})}),(0,_.tZ)(K.AW,{path:"/WeaponKey",element:(0,_.tZ)(P,{})}),(0,_.tZ)(K.AW,{path:"/CharacterKey",element:(0,_.tZ)(T,{})}),(0,_.tZ)(K.AW,{path:"/StatKey",element:(0,_.tZ)(V,{})}),(0,_.tZ)(K.AW,{path:"/KeyNaming",element:(0,_.tZ)(N,{})})]})})})})})]})})]})}const G='interface IGOOD {\n  format: "GOOD" // A way for people to recognize this format.\n  version: number // GOOD API version.\n  source: string // The app that generates this data.\n  characters?: ICharacter[]\n  artifacts?: IArtifact[]\n  weapons?: IWeapon[]\n  materials?: { // Added in version 2\n    [key:MaterialKey]: number\n  }\n}',X='interface IArtifact {\n  setKey: SetKey //e.g. "GladiatorsFinale"\n  slotKey: SlotKey //e.g. "plume"\n  level: number //0-20 inclusive\n  rarity: number //1-5 inclusive\n  mainStatKey: StatKey\n  location: CharacterKey|"" //where "" means not equipped.\n  lock: boolean //Whether the artifact is locked in game.\n  substats: ISubstat[]\n}\n\ninterface ISubstat {\n  key: StatKey //e.g. "critDMG_"\n  value: number //e.g. 19.4\n}\n\ntype SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"',O='interface IWeapon {\n  key: WeaponKey //"CrescentPike"\n  level: number //1-90 inclusive\n  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80\n  refinement: number //1-5 inclusive\n  location: CharacterKey | "" //where "" means not equipped.\n  lock: boolean //Whether the weapon is locked in game.\n}',W='interface ICharacter {\n  key: CharacterKey //e.g. "Rosaria"\n  level: number //1-90 inclusive\n  constellation: number //0-6 inclusive\n  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80\n  talent: { //does not include boost from constellations. 1-15 inclusive\n    auto: number\n    skill: number\n    burst: number\n  }\n}';function D(){return(0,_.BX)(_.HY,{children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Genshin Open Object Description (GOOD)"}),(0,_.BX)(d.Z,{gutterBottom:!0,children:[(0,_.tZ)("strong",{children:"GOOD"})," is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion."]}),(0,_.tZ)(d.Z,{gutterBottom:!0,children:"As of version 6.0.0, Genshin Optimizer's database export conforms to this format."}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:G})})}),(0,_.tZ)("br",{}),(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Artifact data representation"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:X})})}),(0,_.tZ)("br",{}),(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Weapon data representation"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:O})})}),(0,_.tZ)("br",{}),(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Character data representation"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:W})})})]})}function N(){return(0,_.BX)(x.Z,{children:[(0,_.tZ)(h.Z,{children:(0,_.tZ)(d.Z,{children:"Key Naming Convention"})}),(0,_.tZ)(Z.Z,{}),(0,_.BX)(h.Z,{children:[(0,_.BX)(d.Z,{gutterBottom:!0,children:["The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in ",(0,_.tZ)("strong",{children:"PascalCase"}),". This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)"]}),(0,_.BX)(d.Z,{gutterBottom:!0,children:[" ","To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:"]}),(0,_.BX)(d.Z,{children:[(0,_.tZ)("code",{children:"Gladiator's Finale"})," ",(0,_.tZ)(l,{sx:{verticalAlign:"bottom"}})," ",(0,_.tZ)("code",{children:"GladiatorsFinale"})]}),(0,_.BX)(d.Z,{children:[(0,_.tZ)("code",{children:"Spirit Locket of Boreas"})," ",(0,_.tZ)(l,{sx:{verticalAlign:"bottom"}})," ",(0,_.tZ)("code",{children:"SpiritLocketOfBoreas"})]}),(0,_.BX)(d.Z,{children:[(0,_.tZ)("code",{children:'"The Catch"'})," ",(0,_.tZ)(l,{sx:{verticalAlign:"bottom"}})," ",(0,_.tZ)("code",{children:"TheCatch"})]})]})]})}function V(){const{t:e}=(0,b.$G)("statKey_gen"),t=`type StatKey\n  = ${["hp","hp_","atk","atk_","def","def_","eleMas","enerRech_","heal_","critRate_","critDMG_","physical_dmg_","anemo_dmg_","geo_dmg_","electro_dmg_","hydro_dmg_","pyro_dmg_","cryo_dmg_","dendro_dmg_"].map((t=>`"${t}" //${e(t)}${(0,k.V)(t)}`)).join("\n  | ")}`;return(0,_.BX)(_.HY,{children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"StatKey"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:t})})})]})}function M(){const{t:e}=(0,b.$G)("artifactNames_gen"),t=`type ArtifactSetKey\n  = ${[...new Set(r.Gt)].sort().map((t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`)).join("\n  | ")}`;return(0,_.BX)(_.HY,{children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"ArtifactSetKey"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:t})})})]})}function T(){const{t:e}=(0,b.$G)("charNames_gen"),{database:t}=(0,v.useContext)(A.t),{gender:n}=(0,C.Z)(),a=`type CharacterKey\n  = ${[...new Set(r.vp)].sort().map((a=>`"${a}" //${e(`charNames_gen:${(0,r.Cs)(t.chars.LocationToCharacterKey(a),n)}`)}`)).join("\n  | ")}`;return(0,_.BX)(_.HY,{children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"CharacterKey"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:a})})})]})}function P(){const{t:e}=(0,b.$G)("weaponNames_gen"),t=`type WeaponKey\n  = ${[...new Set(r.fG)].sort().map((t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`)).join("\n  | ")}`;return(0,_.BX)(_.HY,{children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"WeaponKey"}),(0,_.tZ)(x.Z,{children:(0,_.tZ)(h.Z,{children:(0,_.tZ)(o.dn,{text:t})})})]})}function H(){const{t:e}=(0,b.$G)("material_gen"),t=`type MaterialKey\n  = ${Object.keys(a.G2.material).sort().map((t=>`"${t}" // ${e(`${t}.name`)}`)).join("\n  | ")}`;return(0,_.BX)(_.HY,{children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"MaterialKey"}),(0,_.tZ)(x.Z,{children:(0,_.BX)(h.Z,{children:[(0,_.BX)(d.Z,{gutterBottom:!0,children:["The item names are taken from the english translation, and then converted into"," ",(0,_.tZ)(y.Z,{component:B.rU,to:"KeyNaming",children:(0,_.tZ)("code",{children:"PascalCase"})}),"."]}),(0,_.tZ)(o.dn,{text:t})]})})]})}function I(){return(0,_.BX)(g.Z,{display:"flex",flexDirection:"column",gap:2,children:[(0,_.tZ)(d.Z,{gutterBottom:!0,variant:"h4",children:"Version History"}),(0,_.BX)(x.Z,{children:[(0,_.tZ)(h.Z,{children:(0,_.tZ)(d.Z,{children:"Version 1"})}),(0,_.tZ)(Z.Z,{}),(0,_.tZ)(h.Z,{children:(0,_.BX)(d.Z,{children:["Created general ",(0,_.tZ)("code",{children:"IGOOD"})," format with character, weapon, artifact fields."]})})]}),(0,_.BX)(x.Z,{children:[(0,_.tZ)(h.Z,{children:(0,_.tZ)(d.Z,{children:"Version 2"})}),(0,_.tZ)(Z.Z,{}),(0,_.tZ)(h.Z,{children:(0,_.BX)(d.Z,{children:["Adds ",(0,_.tZ)("code",{children:"materials"})," field to ",(0,_.tZ)("code",{children:"IGOOD"}),". All other fields remain the same. V2 is backwards compatible with V1."]})})]})]})}}}]);