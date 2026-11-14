import{s as e}from"./prop-types-C98rxrTl.js";import{C as t,Ot as n,Ut as r,g as i}from"./src-DDyIdych.js";import{Ci as a,D as o,Dn as s,Fi as c,It as l,K as u,Pn as d,Rn as f,cn as p,in as m,jt as h,lt as g,mn as _,n as v,nn as y,on as b,pr as x,pt as S,qn as C,sn as w,st as T,x as E}from"./src-B0kqQ7Kw.js";import{Ci as D,Xr as O,di as k,si as A,ti as j,z as M}from"./index-CRG8WSTd.js";var N=e(a(),1),P=x((0,N.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`),F=e(c()),I=e(D());function L(){I.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=S(`/doc/:currentTab`)??{params:{currentTab:``}};return p(m,{children:[p(s,{container:!0,sx:{px:2,py:1},children:[w(s,{sx:{flexGrow:1},children:w(C,{variant:`h6`,children:`Documentation`})}),w(s,{children:w(C,{variant:`h6`,children:w(h,{color:`info`,children:`Version 3`})})})]}),w(r,{}),w(d,{children:p(s,{container:!0,spacing:1,children:[w(s,{size:{xs:12,md:2},children:w(m,{bgt:`light`,sx:{height:`100%`},children:p(j,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[w(A,{label:`Overview`,value:``,component:O,nativeButton:!1,to:``}),w(A,{label:`Key naming convention`,value:`KeyNaming`,component:O,nativeButton:!1,to:`KeyNaming`}),w(A,{label:w(`code`,{children:`StatKey`}),value:`StatKey`,component:O,nativeButton:!1,to:`StatKey`}),w(A,{label:w(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:O,nativeButton:!1,to:`ArtifactSetKey`}),w(A,{label:w(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:O,nativeButton:!1,to:`CharacterKey`}),w(A,{label:w(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:O,nativeButton:!1,to:`WeaponKey`}),w(A,{label:w(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:O,nativeButton:!1,to:`MaterialKey`}),w(A,{label:`Version History`,value:`VersionHistory`,component:O,nativeButton:!1,to:`VersionHistory`})]})})}),w(s,{size:{xs:12,md:10},children:w(m,{bgt:`light`,sx:{height:`100%`},children:w(d,{children:w(F.Suspense,{fallback:w(_,{variant:`rectangular`,width:`100%`,height:600}),children:p(g,{children:[w(T,{index:!0,element:w(H,{})}),w(T,{path:`/VersionHistory`,element:w(Y,{})}),w(T,{path:`/MaterialKey`,element:w(J,{})}),w(T,{path:`/ArtifactSetKey`,element:w(G,{})}),w(T,{path:`/WeaponKey`,element:w(q,{})}),w(T,{path:`/CharacterKey`,element:w(K,{})}),w(T,{path:`/StatKey`,element:w(W,{})}),w(T,{path:`/KeyNaming`,element:w(U,{})})]})})})})})]})})]})}var R=`interface IGOOD {
  format: "GOOD" // A way for people to recognize this format.
  version: number // GOOD API version.
  source: string // The app that generates this data.
  characters?: ICharacter[]
  artifacts?: IArtifact[]
  weapons?: IWeapon[]
  materials?: { // Added in version 2
    [key:MaterialKey]: number
  }
}`,z=`interface IArtifact {
  setKey: SetKey //e.g. "GladiatorsFinale"
  slotKey: SlotKey //e.g. "plume"
  level: number //0-20 inclusive
  rarity: number //1-5 inclusive
  mainStatKey: StatKey
  location: CharacterKey|"" //where "" means not equipped.
  lock: boolean //Whether the artifact is locked in game.
  substats: ISubstat[]
  // Below are new to GOOD 3
  totalRolls?: number // 3-9 for valid 5* artifacts; includes starting rolls
  astralMark?: boolean // Favorite star in-game
  elixirCrafted?: boolean // Flag for if the artifact was created using Sanctifying Elixir. This guarantees the main stat + 2 additional rolls on the first 2 substats
  unactivatedSubstats?: ISubstat[] // Unactivated substat(s). Once a substat is activated, it should be moved to \`substats\` instead
}

interface ISubstat {
  key: StatKey //e.g. "critDMG_"
  value: number //e.g. 19.4
  // Below is new to GOOD 3
  initialValue?: number // Initial roll of the artifact, if it is known. This includes the first roll of this stat, even if it was not revealed initially e.g. from \`unactivatedSubstats\`
}

type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"`,B=`interface IWeapon {
  key: WeaponKey //"CrescentPike"
  level: number //1-90 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  refinement: number //1-5 inclusive
  location: CharacterKey | "" //where "" means not equipped.
  lock: boolean //Whether the weapon is locked in game.
}`,V=`interface ICharacter {
  key: CharacterKey //e.g. "Rosaria"
  level: number //1-100 inclusive
  constellation: number //0-6 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  talent: { //does not include boost from constellations. 1-15 inclusive
    auto: number
    skill: number
    burst: number
  }
}`;function H(){return p(b,{children:[w(C,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),p(C,{gutterBottom:!0,children:[w(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),w(C,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),w(y,{text:R}),w(`br`,{}),w(C,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),w(y,{text:z}),w(`br`,{}),w(C,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),w(y,{text:B}),w(`br`,{}),w(C,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),w(y,{text:V})]})}function U(){return p(m,{children:[w(d,{children:w(C,{children:`Key Naming Convention`})}),w(r,{}),p(d,{children:[p(C,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,w(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),p(C,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),p(C,{children:[w(`code`,{children:`Gladiator's Finale`}),` `,w(P,{sx:{verticalAlign:`bottom`}}),` `,w(`code`,{children:`GladiatorsFinale`})]}),p(C,{children:[w(`code`,{children:`Spirit Locket of Boreas`}),` `,w(P,{sx:{verticalAlign:`bottom`}}),` `,w(`code`,{children:`SpiritLocketOfBoreas`})]}),p(C,{children:[w(`code`,{children:`"The Catch"`}),` `,w(P,{sx:{verticalAlign:`bottom`}}),` `,w(`code`,{children:`TheCatch`})]})]})]})}function W(){let{t:e}=l(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${M(t)}`).join(`
  | `)}`;return p(b,{children:[w(C,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),w(y,{text:t})]})}function G(){let{t:e}=l(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(u)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return p(b,{children:[w(C,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),w(y,{text:t})]})}function K(){let{t:e}=l(`charNames_gen`),n=t(),{gender:r}=i(),a=`type CharacterKey\n  = ${[...new Set(E)].sort().map(t=>`"${t}" //${e(`charNames_gen:${o(n.chars.LocationToCharacterKey(t),r)}`)}`).join(`
  | `)}`;return p(b,{children:[w(C,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),w(y,{text:a})]})}function q(){let{t:e}=l(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(v)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return p(b,{children:[w(C,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),w(y,{text:t})]})}function J(){let{t:e}=l(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(n.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return p(b,{children:[w(C,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),p(C,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,w(k,{component:O,to:`KeyNaming`,children:w(`code`,{children:`PascalCase`})}),`.`]}),w(y,{text:t})]})}function Y(){return p(f,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[w(C,{gutterBottom:!0,variant:`h4`,children:`Version History`}),p(m,{children:[w(d,{children:w(C,{children:`Version 1`})}),w(r,{}),w(d,{children:p(C,{children:[`Created general `,w(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),p(m,{children:[w(d,{children:w(C,{children:`Version 2`})}),w(r,{}),w(d,{children:p(C,{children:[`Adds `,w(`code`,{children:`materials`}),` field to `,w(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),p(m,{children:[w(d,{children:w(C,{children:`Version 3`})}),w(r,{}),w(d,{children:p(C,{children:[`Adds new fields to `,w(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,w(`br`,{}),`New fields for `,w(`code`,{children:`IArtifact`}),`:`,` `,w(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),w(`br`,{}),`New field for `,w(`code`,{children:`ISubstat`}),`: `,w(`code`,{children:`initialValue`})]})})]})]})}export{L as default};