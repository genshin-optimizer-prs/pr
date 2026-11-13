import{n as e,s as t}from"./prop-types-C98rxrTl.js";import{C as n,Ot as r,Ut as i,g as a}from"./src-BiZ4W6CJ.js";import{D as o,Dn as s,Hn as c,It as l,K as u,Oa as d,Rr as f,Sn as p,Wa as m,an as h,cn as g,hn as _,in as v,jn as y,jt as b,ln as x,lt as S,n as C,nn as w,pt as T,sn as E,st as D,x as O}from"./src-C59Y9D3N.js";import{W as k,Xr as A,di as j,ei as M,oi as N,wi as P}from"./index-CnI4sZna.js";var F=t(e((e=>{var t=f();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(v()),r=d();e.default=(0,n.default)((0,r.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),I=t(m()),L=t(P());function R(){L.default.send({hitType:`pageview`,page:`/doc`});let{params:{currentTab:e}}=T(`/doc/:currentTab`)??{params:{currentTab:``}};return x(h,{children:[x(p,{container:!0,sx:{px:2,py:1},children:[g(p,{item:!0,flexGrow:1,children:g(c,{variant:`h6`,children:`Documentation`})}),g(p,{item:!0,children:g(c,{variant:`h6`,children:g(b,{color:`info`,children:`Version 3`})})})]}),g(i,{}),g(s,{children:x(p,{container:!0,spacing:1,children:[g(p,{item:!0,xs:12,md:2,children:g(h,{bgt:`light`,sx:{height:`100%`},children:x(M,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[g(N,{label:`Overview`,value:``,component:A,to:``}),g(N,{label:`Key naming convention`,value:`KeyNaming`,component:A,to:`KeyNaming`}),g(N,{label:g(`code`,{children:`StatKey`}),value:`StatKey`,component:A,to:`StatKey`}),g(N,{label:g(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:A,to:`ArtifactSetKey`}),g(N,{label:g(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:A,to:`CharacterKey`}),g(N,{label:g(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:A,to:`WeaponKey`}),g(N,{label:g(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:A,to:`MaterialKey`}),g(N,{label:`Version History`,value:`VersionHistory`,component:A,to:`VersionHistory`})]})})}),g(p,{item:!0,xs:12,md:10,children:g(h,{bgt:`light`,sx:{height:`100%`},children:g(s,{children:g(I.Suspense,{fallback:g(_,{variant:`rectangular`,width:`100%`,height:600}),children:x(S,{children:[g(D,{index:!0,element:g(U,{})}),g(D,{path:`/VersionHistory`,element:g(X,{})}),g(D,{path:`/MaterialKey`,element:g(Y,{})}),g(D,{path:`/ArtifactSetKey`,element:g(K,{})}),g(D,{path:`/WeaponKey`,element:g(J,{})}),g(D,{path:`/CharacterKey`,element:g(q,{})}),g(D,{path:`/StatKey`,element:g(G,{})}),g(D,{path:`/KeyNaming`,element:g(W,{})})]})})})})})]})})]})}var z=`interface IGOOD {
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
}`;function U(){return x(E,{children:[g(c,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),x(c,{gutterBottom:!0,children:[g(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),g(c,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),g(w,{text:z}),g(`br`,{}),g(c,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),g(w,{text:B}),g(`br`,{}),g(c,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),g(w,{text:V}),g(`br`,{}),g(c,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),g(w,{text:H})]})}function W(){return x(h,{children:[g(s,{children:g(c,{children:`Key Naming Convention`})}),g(i,{}),x(s,{children:[x(c,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,g(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),x(c,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),x(c,{children:[g(`code`,{children:`Gladiator's Finale`}),` `,g(F.default,{sx:{verticalAlign:`bottom`}}),` `,g(`code`,{children:`GladiatorsFinale`})]}),x(c,{children:[g(`code`,{children:`Spirit Locket of Boreas`}),` `,g(F.default,{sx:{verticalAlign:`bottom`}}),` `,g(`code`,{children:`SpiritLocketOfBoreas`})]}),x(c,{children:[g(`code`,{children:`"The Catch"`}),` `,g(F.default,{sx:{verticalAlign:`bottom`}}),` `,g(`code`,{children:`TheCatch`})]})]})]})}function G(){let{t:e}=l(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${k(t)}`).join(`
  | `)}`;return x(E,{children:[g(c,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),g(w,{text:t})]})}function K(){let{t:e}=l(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(u)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return x(E,{children:[g(c,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),g(w,{text:t})]})}function q(){let{t:e}=l(`charNames_gen`),t=n(),{gender:r}=a(),i=`type CharacterKey\n  = ${[...new Set(O)].sort().map(n=>`"${n}" //${e(`charNames_gen:${o(t.chars.LocationToCharacterKey(n),r)}`)}`).join(`
  | `)}`;return x(E,{children:[g(c,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),g(w,{text:i})]})}function J(){let{t:e}=l(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(C)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return x(E,{children:[g(c,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),g(w,{text:t})]})}function Y(){let{t:e}=l(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(r.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return x(E,{children:[g(c,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),x(c,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,g(j,{component:A,to:`KeyNaming`,children:g(`code`,{children:`PascalCase`})}),`.`]}),g(w,{text:t})]})}function X(){return x(y,{display:`flex`,flexDirection:`column`,gap:2,children:[g(c,{gutterBottom:!0,variant:`h4`,children:`Version History`}),x(h,{children:[g(s,{children:g(c,{children:`Version 1`})}),g(i,{}),g(s,{children:x(c,{children:[`Created general `,g(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),x(h,{children:[g(s,{children:g(c,{children:`Version 2`})}),g(i,{}),g(s,{children:x(c,{children:[`Adds `,g(`code`,{children:`materials`}),` field to `,g(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),x(h,{children:[g(s,{children:g(c,{children:`Version 3`})}),g(i,{}),g(s,{children:x(c,{children:[`Adds new fields to `,g(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,g(`br`,{}),`New fields for `,g(`code`,{children:`IArtifact`}),`:`,` `,g(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),g(`br`,{}),`New field for `,g(`code`,{children:`ISubstat`}),`: `,g(`code`,{children:`initialValue`})]})})]})]})}export{R as default};