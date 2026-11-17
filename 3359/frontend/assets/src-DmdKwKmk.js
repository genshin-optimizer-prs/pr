import{s as e}from"./prop-types-C98rxrTl.js";import{Bt as t,C as n,Tt as r,g as i}from"./src-_6pxjRAQ.js";import{At as a,D as o,Dn as s,Ft as c,K as l,Li as u,Pn as d,Rn as f,Ti as p,an as m,ct as h,ft as g,n as _,on as v,ot as y,pn as b,pr as x,qn as S,rn as C,sn as w,tn as T,x as E}from"./src-DCVqAbUg.js";import{B as D,Zr as O,ci as k,di as A,ni as j,xi as M}from"./index-CO6eeb5y.js";var N=e(p(),1),P=x((0,N.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`),F=e(u()),I=e(M());function L(){I.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=g(`/doc/:currentTab`)??{params:{currentTab:``}};return w(C,{children:[w(s,{container:!0,sx:{px:2,py:1},children:[v(s,{sx:{flexGrow:1},children:v(S,{variant:`h6`,children:`Documentation`})}),v(s,{children:v(S,{variant:`h6`,children:v(a,{color:`info`,children:`Version 3`})})})]}),v(t,{}),v(d,{children:w(s,{container:!0,spacing:1,children:[v(s,{size:{xs:12,md:2},children:v(C,{bgt:`light`,sx:{height:`100%`},children:w(j,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[v(k,{label:`Overview`,value:``,component:O,nativeButton:!1,to:``}),v(k,{label:`Key naming convention`,value:`KeyNaming`,component:O,nativeButton:!1,to:`KeyNaming`}),v(k,{label:v(`code`,{children:`StatKey`}),value:`StatKey`,component:O,nativeButton:!1,to:`StatKey`}),v(k,{label:v(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:O,nativeButton:!1,to:`ArtifactSetKey`}),v(k,{label:v(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:O,nativeButton:!1,to:`CharacterKey`}),v(k,{label:v(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:O,nativeButton:!1,to:`WeaponKey`}),v(k,{label:v(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:O,nativeButton:!1,to:`MaterialKey`}),v(k,{label:`Version History`,value:`VersionHistory`,component:O,nativeButton:!1,to:`VersionHistory`})]})})}),v(s,{size:{xs:12,md:10},children:v(C,{bgt:`light`,sx:{height:`100%`},children:v(d,{children:v(F.Suspense,{fallback:v(b,{variant:`rectangular`,width:`100%`,height:600}),children:w(h,{children:[v(y,{index:!0,element:v(H,{})}),v(y,{path:`/VersionHistory`,element:v(Y,{})}),v(y,{path:`/MaterialKey`,element:v(J,{})}),v(y,{path:`/ArtifactSetKey`,element:v(G,{})}),v(y,{path:`/WeaponKey`,element:v(q,{})}),v(y,{path:`/CharacterKey`,element:v(K,{})}),v(y,{path:`/StatKey`,element:v(W,{})}),v(y,{path:`/KeyNaming`,element:v(U,{})})]})})})})})]})})]})}var R=`interface IGOOD {
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
}`;function H(){return w(m,{children:[v(S,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),w(S,{gutterBottom:!0,children:[v(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),v(S,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),v(T,{text:R}),v(`br`,{}),v(S,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),v(T,{text:z}),v(`br`,{}),v(S,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),v(T,{text:B}),v(`br`,{}),v(S,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),v(T,{text:V})]})}function U(){return w(C,{children:[v(d,{children:v(S,{children:`Key Naming Convention`})}),v(t,{}),w(d,{children:[w(S,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,v(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),w(S,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),w(S,{children:[v(`code`,{children:`Gladiator's Finale`}),` `,v(P,{sx:{verticalAlign:`bottom`}}),` `,v(`code`,{children:`GladiatorsFinale`})]}),w(S,{children:[v(`code`,{children:`Spirit Locket of Boreas`}),` `,v(P,{sx:{verticalAlign:`bottom`}}),` `,v(`code`,{children:`SpiritLocketOfBoreas`})]}),w(S,{children:[v(`code`,{children:`"The Catch"`}),` `,v(P,{sx:{verticalAlign:`bottom`}}),` `,v(`code`,{children:`TheCatch`})]})]})]})}function W(){let{t:e}=c(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${D(t)}`).join(`
  | `)}`;return w(m,{children:[v(S,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),v(T,{text:t})]})}function G(){let{t:e}=c(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(l)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return w(m,{children:[v(S,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),v(T,{text:t})]})}function K(){let{t:e}=c(`charNames_gen`),t=n(),{gender:r}=i(),a=`type CharacterKey\n  = ${[...new Set(E)].sort().map(n=>`"${n}" //${e(`charNames_gen:${o(t.chars.LocationToCharacterKey(n),r)}`)}`).join(`
  | `)}`;return w(m,{children:[v(S,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),v(T,{text:a})]})}function q(){let{t:e}=c(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(_)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return w(m,{children:[v(S,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),v(T,{text:t})]})}function J(){let{t:e}=c(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(r.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return w(m,{children:[v(S,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),w(S,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,v(A,{component:O,to:`KeyNaming`,children:v(`code`,{children:`PascalCase`})}),`.`]}),v(T,{text:t})]})}function Y(){return w(f,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[v(S,{gutterBottom:!0,variant:`h4`,children:`Version History`}),w(C,{children:[v(d,{children:v(S,{children:`Version 1`})}),v(t,{}),v(d,{children:w(S,{children:[`Created general `,v(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),w(C,{children:[v(d,{children:v(S,{children:`Version 2`})}),v(t,{}),v(d,{children:w(S,{children:[`Adds `,v(`code`,{children:`materials`}),` field to `,v(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),w(C,{children:[v(d,{children:v(S,{children:`Version 3`})}),v(t,{}),v(d,{children:w(S,{children:[`Adds new fields to `,v(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,v(`br`,{}),`New fields for `,v(`code`,{children:`IArtifact`}),`:`,` `,v(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),v(`br`,{}),`New field for `,v(`code`,{children:`ISubstat`}),`: `,v(`code`,{children:`initialValue`})]})})]})]})}export{L as default};