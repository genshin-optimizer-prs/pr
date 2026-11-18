import{s as e}from"./prop-types-C98rxrTl.js";import{C as t,Ot as n,Ut as r,g as i}from"./src-Bfg1AlAh.js";import{D as a,Ei as o,Fn as s,It as c,Jn as l,K as u,On as d,Ri as f,cn as p,in as m,jt as h,lt as g,mn as _,mr as v,n as y,nn as b,on as x,pt as S,sn as C,st as w,x as T,zn as E}from"./src-CWR1bHY_.js";import{Xr as D,bi as O,si as k,ti as A,ui as j,z as M}from"./index-dPqDfTYs.js";var N=e(o(),1),P=v((0,N.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`),F=e(f()),I=e(O());function L(){I.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=S(`/doc/:currentTab`)??{params:{currentTab:``}};return p(m,{children:[p(d,{container:!0,sx:{px:2,py:1},children:[C(d,{sx:{flexGrow:1},children:C(l,{variant:`h6`,children:`Documentation`})}),C(d,{children:C(l,{variant:`h6`,children:C(h,{color:`info`,children:`Version 3`})})})]}),C(r,{}),C(s,{children:p(d,{container:!0,spacing:1,children:[C(d,{size:{xs:12,md:2},children:C(m,{bgt:`light`,sx:{height:`100%`},children:p(A,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[C(k,{label:`Overview`,value:``,component:D,nativeButton:!1,to:``}),C(k,{label:`Key naming convention`,value:`KeyNaming`,component:D,nativeButton:!1,to:`KeyNaming`}),C(k,{label:C(`code`,{children:`StatKey`}),value:`StatKey`,component:D,nativeButton:!1,to:`StatKey`}),C(k,{label:C(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:D,nativeButton:!1,to:`ArtifactSetKey`}),C(k,{label:C(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:D,nativeButton:!1,to:`CharacterKey`}),C(k,{label:C(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:D,nativeButton:!1,to:`WeaponKey`}),C(k,{label:C(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:D,nativeButton:!1,to:`MaterialKey`}),C(k,{label:`Version History`,value:`VersionHistory`,component:D,nativeButton:!1,to:`VersionHistory`})]})})}),C(d,{size:{xs:12,md:10},children:C(m,{bgt:`light`,sx:{height:`100%`},children:C(s,{children:C(F.Suspense,{fallback:C(_,{variant:`rectangular`,width:`100%`,height:600}),children:p(g,{children:[C(w,{index:!0,element:C(H,{})}),C(w,{path:`/VersionHistory`,element:C(Y,{})}),C(w,{path:`/MaterialKey`,element:C(J,{})}),C(w,{path:`/ArtifactSetKey`,element:C(G,{})}),C(w,{path:`/WeaponKey`,element:C(q,{})}),C(w,{path:`/CharacterKey`,element:C(K,{})}),C(w,{path:`/StatKey`,element:C(W,{})}),C(w,{path:`/KeyNaming`,element:C(U,{})})]})})})})})]})})]})}var R=`interface IGOOD {
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
}`;function H(){return p(x,{children:[C(l,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),p(l,{gutterBottom:!0,children:[C(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),C(l,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),C(b,{text:R}),C(`br`,{}),C(l,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),C(b,{text:z}),C(`br`,{}),C(l,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),C(b,{text:B}),C(`br`,{}),C(l,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),C(b,{text:V})]})}function U(){return p(m,{children:[C(s,{children:C(l,{children:`Key Naming Convention`})}),C(r,{}),p(s,{children:[p(l,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,C(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),p(l,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),p(l,{children:[C(`code`,{children:`Gladiator's Finale`}),` `,C(P,{sx:{verticalAlign:`bottom`}}),` `,C(`code`,{children:`GladiatorsFinale`})]}),p(l,{children:[C(`code`,{children:`Spirit Locket of Boreas`}),` `,C(P,{sx:{verticalAlign:`bottom`}}),` `,C(`code`,{children:`SpiritLocketOfBoreas`})]}),p(l,{children:[C(`code`,{children:`"The Catch"`}),` `,C(P,{sx:{verticalAlign:`bottom`}}),` `,C(`code`,{children:`TheCatch`})]})]})]})}function W(){let{t:e}=c(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${M(t)}`).join(`
  | `)}`;return p(x,{children:[C(l,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),C(b,{text:t})]})}function G(){let{t:e}=c(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(u)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return p(x,{children:[C(l,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),C(b,{text:t})]})}function K(){let{t:e}=c(`charNames_gen`),n=t(),{gender:r}=i(),o=`type CharacterKey\n  = ${[...new Set(T)].sort().map(t=>`"${t}" //${e(`charNames_gen:${a(n.chars.LocationToCharacterKey(t),r)}`)}`).join(`
  | `)}`;return p(x,{children:[C(l,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),C(b,{text:o})]})}function q(){let{t:e}=c(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(y)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return p(x,{children:[C(l,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),C(b,{text:t})]})}function J(){let{t:e}=c(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(n.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return p(x,{children:[C(l,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),p(l,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,C(j,{component:D,to:`KeyNaming`,children:C(`code`,{children:`PascalCase`})}),`.`]}),C(b,{text:t})]})}function Y(){return p(E,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[C(l,{gutterBottom:!0,variant:`h4`,children:`Version History`}),p(m,{children:[C(s,{children:C(l,{children:`Version 1`})}),C(r,{}),C(s,{children:p(l,{children:[`Created general `,C(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),p(m,{children:[C(s,{children:C(l,{children:`Version 2`})}),C(r,{}),C(s,{children:p(l,{children:[`Adds `,C(`code`,{children:`materials`}),` field to `,C(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),p(m,{children:[C(s,{children:C(l,{children:`Version 3`})}),C(r,{}),C(s,{children:p(l,{children:[`Adds new fields to `,C(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,C(`br`,{}),`New fields for `,C(`code`,{children:`IArtifact`}),`:`,` `,C(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),C(`br`,{}),`New field for `,C(`code`,{children:`ISubstat`}),`: `,C(`code`,{children:`initialValue`})]})})]})]})}export{L as default};