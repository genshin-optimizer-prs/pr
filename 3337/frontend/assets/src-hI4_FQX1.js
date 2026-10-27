import{n as e,s as t}from"./prop-types-C98rxrTl.js";import{C as n,Tt as r,g as i}from"./src-BjYSMqwS.js";import{At as a,Ca as o,D as s,K as c,Nn as l,Ra as u,Wn as d,Zr as f,Zt as p,cn as m,ct as h,dn as g,er as _,fn as v,ft as y,jn as b,ln as x,n as S,on as C,ot as w,pn as T,wn as E,x as D,zn as O}from"./src-QozJVsUs.js";import{Br as k,G as A,Xr as j,Yr as M,fi as N,ti as P}from"./index-CbxHe56G.js";var F=t(e((e=>{var t=f();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(m()),r=o();e.default=(0,n.default)((0,r.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),I=t(u()),L=t(N());function R(){L.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=y(`/doc/:currentTab`)??{params:{currentTab:``}};return T(x,{children:[T(b,{container:!0,sx:{px:2,py:1},children:[v(b,{item:!0,flexGrow:1,children:v(_,{variant:`h6`,children:`Documentation`})}),v(b,{item:!0,children:v(_,{variant:`h6`,children:v(a,{color:`info`,children:`Version 3`})})})]}),v(l,{}),v(O,{children:T(b,{container:!0,spacing:1,children:[v(b,{item:!0,xs:12,md:2,children:v(x,{bgt:`light`,sx:{height:`100%`},children:T(M,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[v(j,{label:`Overview`,value:``,component:k,to:``}),v(j,{label:`Key naming convention`,value:`KeyNaming`,component:k,to:`KeyNaming`}),v(j,{label:v(`code`,{children:`StatKey`}),value:`StatKey`,component:k,to:`StatKey`}),v(j,{label:v(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:k,to:`ArtifactSetKey`}),v(j,{label:v(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:k,to:`CharacterKey`}),v(j,{label:v(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:k,to:`WeaponKey`}),v(j,{label:v(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:k,to:`MaterialKey`}),v(j,{label:`Version History`,value:`VersionHistory`,component:k,to:`VersionHistory`})]})})}),v(b,{item:!0,xs:12,md:10,children:v(x,{bgt:`light`,sx:{height:`100%`},children:v(O,{children:v(I.Suspense,{fallback:v(E,{variant:`rectangular`,width:`100%`,height:600}),children:T(h,{children:[v(w,{index:!0,element:v(U,{})}),v(w,{path:`/VersionHistory`,element:v(X,{})}),v(w,{path:`/MaterialKey`,element:v(Y,{})}),v(w,{path:`/ArtifactSetKey`,element:v(K,{})}),v(w,{path:`/WeaponKey`,element:v(J,{})}),v(w,{path:`/CharacterKey`,element:v(q,{})}),v(w,{path:`/StatKey`,element:v(G,{})}),v(w,{path:`/KeyNaming`,element:v(W,{})})]})})})})})]})})]})}var z=`interface IGOOD {
  format: "GOOD" // A way for people to recognize this format.
  version: number // GOOD API version.
  source: string // The app that generates this data.
  characters?: ICharacter[]
  artifacts?: IArtifact[]
  weapons?: IWeapon[]
  materials?: { // Added in version 2
    [key:MaterialKey]: number
  }
}`,B=`interface IArtifact {
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

type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"`,V=`interface IWeapon {
  key: WeaponKey //"CrescentPike"
  level: number //1-90 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  refinement: number //1-5 inclusive
  location: CharacterKey | "" //where "" means not equipped.
  lock: boolean //Whether the weapon is locked in game.
}`,H=`interface ICharacter {
  key: CharacterKey //e.g. "Rosaria"
  level: number //1-100 inclusive
  constellation: number //0-6 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  talent: { //does not include boost from constellations. 1-15 inclusive
    auto: number
    skill: number
    burst: number
  }
}`;function U(){return T(g,{children:[v(_,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),T(_,{gutterBottom:!0,children:[v(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),v(_,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),v(C,{text:z}),v(`br`,{}),v(_,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),v(C,{text:B}),v(`br`,{}),v(_,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),v(C,{text:V}),v(`br`,{}),v(_,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),v(C,{text:H})]})}function W(){return T(x,{children:[v(O,{children:v(_,{children:`Key Naming Convention`})}),v(l,{}),T(O,{children:[T(_,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,v(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),T(_,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),T(_,{children:[v(`code`,{children:`Gladiator's Finale`}),` `,v(F.default,{sx:{verticalAlign:`bottom`}}),` `,v(`code`,{children:`GladiatorsFinale`})]}),T(_,{children:[v(`code`,{children:`Spirit Locket of Boreas`}),` `,v(F.default,{sx:{verticalAlign:`bottom`}}),` `,v(`code`,{children:`SpiritLocketOfBoreas`})]}),T(_,{children:[v(`code`,{children:`"The Catch"`}),` `,v(F.default,{sx:{verticalAlign:`bottom`}}),` `,v(`code`,{children:`TheCatch`})]})]})]})}function G(){let{t:e}=p(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${A(t)}`).join(`
  | `)}`;return T(g,{children:[v(_,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),v(C,{text:t})]})}function K(){let{t:e}=p(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(c)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return T(g,{children:[v(_,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),v(C,{text:t})]})}function q(){let{t:e}=p(`charNames_gen`),t=n(),{gender:r}=i(),a=`type CharacterKey\n  = ${[...new Set(D)].sort().map(n=>`"${n}" //${e(`charNames_gen:${s(t.chars.LocationToCharacterKey(n),r)}`)}`).join(`
  | `)}`;return T(g,{children:[v(_,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),v(C,{text:a})]})}function J(){let{t:e}=p(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(S)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return T(g,{children:[v(_,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),v(C,{text:t})]})}function Y(){let{t:e}=p(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(r.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return T(g,{children:[v(_,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),T(_,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,v(P,{component:k,to:`KeyNaming`,children:v(`code`,{children:`PascalCase`})}),`.`]}),v(C,{text:t})]})}function X(){return T(d,{display:`flex`,flexDirection:`column`,gap:2,children:[v(_,{gutterBottom:!0,variant:`h4`,children:`Version History`}),T(x,{children:[v(O,{children:v(_,{children:`Version 1`})}),v(l,{}),v(O,{children:T(_,{children:[`Created general `,v(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),T(x,{children:[v(O,{children:v(_,{children:`Version 2`})}),v(l,{}),v(O,{children:T(_,{children:[`Adds `,v(`code`,{children:`materials`}),` field to `,v(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),T(x,{children:[v(O,{children:v(_,{children:`Version 3`})}),v(l,{}),v(O,{children:T(_,{children:[`Adds new fields to `,v(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,v(`br`,{}),`New fields for `,v(`code`,{children:`IArtifact`}),`:`,` `,v(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),v(`br`,{}),`New field for `,v(`code`,{children:`ISubstat`}),`: `,v(`code`,{children:`initialValue`})]})})]})]})}export{R as default};