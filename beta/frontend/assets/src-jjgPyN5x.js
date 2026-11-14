import{s as e}from"./prop-types-C98rxrTl.js";import{Bt as t,C as n,Tt as r,g as i}from"./src-Dq0Vf-SY.js";import{At as a,D as o,En as s,Ft as c,K as l,Kn as u,Ln as d,Nn as f,Pi as p,Si as m,an as h,ct as g,fr as _,ft as v,n as y,on as b,ot as x,pn as S,rn as C,sn as w,tn as T,x as E}from"./src-BtQOrlq0.js";import{B as D,Zr as O,ci as k,fi as A,ni as j,wi as M}from"./index-DgNU08VX.js";var N=e(m(),1),P=_((0,N.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`),F=e(p()),I=e(M());function L(){I.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=v(`/doc/:currentTab`)??{params:{currentTab:``}};return w(C,{children:[w(s,{container:!0,sx:{px:2,py:1},children:[b(s,{sx:{flexGrow:1},children:b(u,{variant:`h6`,children:`Documentation`})}),b(s,{children:b(u,{variant:`h6`,children:b(a,{color:`info`,children:`Version 3`})})})]}),b(t,{}),b(f,{children:w(s,{container:!0,spacing:1,children:[b(s,{size:{xs:12,md:2},children:b(C,{bgt:`light`,sx:{height:`100%`},children:w(j,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[b(k,{label:`Overview`,value:``,component:O,nativeButton:!1,to:``}),b(k,{label:`Key naming convention`,value:`KeyNaming`,component:O,nativeButton:!1,to:`KeyNaming`}),b(k,{label:b(`code`,{children:`StatKey`}),value:`StatKey`,component:O,nativeButton:!1,to:`StatKey`}),b(k,{label:b(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:O,nativeButton:!1,to:`ArtifactSetKey`}),b(k,{label:b(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:O,nativeButton:!1,to:`CharacterKey`}),b(k,{label:b(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:O,nativeButton:!1,to:`WeaponKey`}),b(k,{label:b(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:O,nativeButton:!1,to:`MaterialKey`}),b(k,{label:`Version History`,value:`VersionHistory`,component:O,nativeButton:!1,to:`VersionHistory`})]})})}),b(s,{size:{xs:12,md:10},children:b(C,{bgt:`light`,sx:{height:`100%`},children:b(f,{children:b(F.Suspense,{fallback:b(S,{variant:`rectangular`,width:`100%`,height:600}),children:w(g,{children:[b(x,{index:!0,element:b(H,{})}),b(x,{path:`/VersionHistory`,element:b(Y,{})}),b(x,{path:`/MaterialKey`,element:b(J,{})}),b(x,{path:`/ArtifactSetKey`,element:b(G,{})}),b(x,{path:`/WeaponKey`,element:b(q,{})}),b(x,{path:`/CharacterKey`,element:b(K,{})}),b(x,{path:`/StatKey`,element:b(W,{})}),b(x,{path:`/KeyNaming`,element:b(U,{})})]})})})})})]})})]})}var R=`interface IGOOD {
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
}`;function H(){return w(h,{children:[b(u,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),w(u,{gutterBottom:!0,children:[b(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),b(u,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),b(T,{text:R}),b(`br`,{}),b(u,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),b(T,{text:z}),b(`br`,{}),b(u,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),b(T,{text:B}),b(`br`,{}),b(u,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),b(T,{text:V})]})}function U(){return w(C,{children:[b(f,{children:b(u,{children:`Key Naming Convention`})}),b(t,{}),w(f,{children:[w(u,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,b(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),w(u,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),w(u,{children:[b(`code`,{children:`Gladiator's Finale`}),` `,b(P,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`GladiatorsFinale`})]}),w(u,{children:[b(`code`,{children:`Spirit Locket of Boreas`}),` `,b(P,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`SpiritLocketOfBoreas`})]}),w(u,{children:[b(`code`,{children:`"The Catch"`}),` `,b(P,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`TheCatch`})]})]})]})}function W(){let{t:e}=c(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${D(t)}`).join(`
  | `)}`;return w(h,{children:[b(u,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),b(T,{text:t})]})}function G(){let{t:e}=c(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(l)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return w(h,{children:[b(u,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),b(T,{text:t})]})}function K(){let{t:e}=c(`charNames_gen`),t=n(),{gender:r}=i(),a=`type CharacterKey\n  = ${[...new Set(E)].sort().map(n=>`"${n}" //${e(`charNames_gen:${o(t.chars.LocationToCharacterKey(n),r)}`)}`).join(`
  | `)}`;return w(h,{children:[b(u,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),b(T,{text:a})]})}function q(){let{t:e}=c(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(y)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return w(h,{children:[b(u,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),b(T,{text:t})]})}function J(){let{t:e}=c(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(r.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return w(h,{children:[b(u,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),w(u,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,b(A,{component:O,to:`KeyNaming`,children:b(`code`,{children:`PascalCase`})}),`.`]}),b(T,{text:t})]})}function Y(){return w(d,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[b(u,{gutterBottom:!0,variant:`h4`,children:`Version History`}),w(C,{children:[b(f,{children:b(u,{children:`Version 1`})}),b(t,{}),b(f,{children:w(u,{children:[`Created general `,b(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),w(C,{children:[b(f,{children:b(u,{children:`Version 2`})}),b(t,{}),b(f,{children:w(u,{children:[`Adds `,b(`code`,{children:`materials`}),` field to `,b(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),w(C,{children:[b(f,{children:b(u,{children:`Version 3`})}),b(t,{}),b(f,{children:w(u,{children:[`Adds new fields to `,b(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,b(`br`,{}),`New fields for `,b(`code`,{children:`IArtifact`}),`:`,` `,b(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),b(`br`,{}),`New field for `,b(`code`,{children:`ISubstat`}),`: `,b(`code`,{children:`initialValue`})]})})]})]})}export{L as default};