import{u as D,p as s,n as y,L as O,N as v,$ as B,e as c,c3 as S,U as L,bh as g,an as P,l as A,m as G,c4 as T,K as j,c5 as w,a3 as $,a2 as E,Y as V,B as z}from"./index-f2f359fd.js";import{L as N}from"./Link-d6184e29.js";import{a as H}from"./Artifact-ba9934c2.js";import{S as Q}from"./index-617a2f4a.js";import{L as U,G as W}from"./LocationAutocomplete-9b78644c.js";import{B as Y}from"./ColoredText-d5a64b2d.js";function ee(){const{t:_}=D("artifact");return s(B,{severity:"info",variant:"filled",children:y(v,{t:_,i18nKey:"noArtifacts",children:["Looks like you haven't added any artifacts yet. If you want, there are ",s(N,{color:"warning.main",component:O,to:"/scanner",fontFamily:"inherit",children:"automatic scanners"})," that can speed up the import process!"]})})}function _e({statKeys:_,statFilters:t,setStatFilters:r,disabled:i=!1,wrapperFunc:l=m=>m,label:u}){const{t:m}=D("statKey_gen"),b=c.useMemo(()=>_.map(e=>({key:e,grouper:M[e],label:[...S,...L].includes(e)?`${m(e)}${H(e)}`:g.getStr(e)??"ERROR",color:g.getVariant(e)})).sort((e,o)=>R.indexOf(e.grouper)-R.indexOf(o.grouper)),[m,_]),p=c.useCallback(e=>Object.keys(t).includes(e.key),[t]),d=c.useCallback((e,o)=>{if(o)r(Object.fromEntries(Object.entries(t).map(([a,I])=>[a===o?e:a,I])));else{const a={...t};a[e]=0,r({...a})}},[t,r]),f=c.useCallback((e,o)=>{const a={...t};a[e]=o,r({...a})},[t,r]),h=c.useCallback(e=>{const o={...t};delete o[e],r({...o})},[t,r]);return y(P,{children:[Object.entries(t).map(([e,o])=>l(s(x,{statKey:e,statKeyOptions:b,disabled:i,value:o,setValue:f,setKey:d,delKey:h,getOptionDisabled:p},e),e)),l(s(x,{statKey:null,statKeyOptions:b,setValue:f,setKey:d,delKey:h,disabled:i,getOptionDisabled:p,label:u},Object.entries(t).length))]})}function x({statKey:_,statKeyOptions:t=[],value:r=0,delKey:i,setKey:l,setValue:u,disabled:m=!1,getOptionDisabled:b,label:p}){const d=A(),{t:f}=D("ui"),h=G(d.breakpoints.up("lg")),e=G(d.breakpoints.down("md")),o=_?g.unit(_)==="%":!1,a=c.useCallback(n=>_&&u(_,n??0),[u,_]),I=c.useCallback(n=>{n?l(n,_):_&&i(_)},[_,l,i]),k=c.useCallback(()=>_&&i(_),[i,_]),C={p:1,flexBasis:30,flexGrow:0,flexShrink:0};return y(Y,{sx:{width:"100%"},children:[s(W,{size:"small",options:t,onChange:I,valueKey:_,getOptionDisabled:b,groupBy:n=>M[n.key],renderGroup:n=>y(T,{component:j,sx:{paddingTop:0,marginTop:0},children:[s(U,{sx:{top:"-1em"},children:s("strong",{children:f(`statGroupKey.${n.group}`)})},`${n.group}Header`),n.children]},n.key),toImg:n=>s(Q,{statKey:n,iconProps:{color:g.getVariant(n)}}),ListboxProps:{style:{display:"grid",gridTemplateColumns:e?"100%":h?"33% 33% 33%":"50% 50%"}},PopperComponent:n=>s(w,{...n,style:{width:"60%"}}),sx:{flexGrow:1,flexBasis:150},textFieldProps:{sx:{"& .MuiInputBase-root":{borderRadius:"4px 0 0 4px"}}},label:p}),s(E,{sx:{flexBasis:30,flexGrow:1,borderRadius:"0 4px 4px 0"},children:s($,{disabled:!_||m,float:o,value:r,placeholder:"Stat Value",onChange:a,sx:{px:1},inputProps:{sx:{textAlign:"right"}},endAdornment:_?g.unit(_):void 0})}),!!_&&s(z,{sx:C,color:"error",onClick:k,disabled:m,children:s(V,{fontSize:"small"})})]})}const R=["basic_stats","elem_dmg_bonus","enemy_debuffs","self_res","reaction_dmg_bonus","reaction_crit","elem_dmgInc","talent_dmgInc","elem_crit","talent_dmg_bonus","talent_crit","talent_level_boost","base_stat_mod","stamina_buffs","misc"],M={hp:"basic_stats",hp_:"basic_stats",atk:"basic_stats",atk_:"basic_stats",def:"basic_stats",def_:"basic_stats",eleMas:"basic_stats",enerRech_:"basic_stats",critRate_:"basic_stats",critDMG_:"basic_stats",electro_dmg_:"elem_dmg_bonus",hydro_dmg_:"elem_dmg_bonus",pyro_dmg_:"elem_dmg_bonus",cryo_dmg_:"elem_dmg_bonus",physical_dmg_:"elem_dmg_bonus",anemo_dmg_:"elem_dmg_bonus",geo_dmg_:"elem_dmg_bonus",dendro_dmg_:"elem_dmg_bonus",heal_:"basic_stats",all_dmg_:"elem_dmg_bonus",overloaded_dmg_:"reaction_dmg_bonus",shattered_dmg_:"reaction_dmg_bonus",electrocharged_dmg_:"reaction_dmg_bonus",superconduct_dmg_:"reaction_dmg_bonus",swirl_dmg_:"reaction_dmg_bonus",burning_dmg_:"reaction_dmg_bonus",bloom_dmg_:"reaction_dmg_bonus",burgeon_dmg_:"reaction_dmg_bonus",hyperbloom_dmg_:"reaction_dmg_bonus",vaporize_dmg_:"reaction_dmg_bonus",melt_dmg_:"reaction_dmg_bonus",spread_dmg_:"reaction_dmg_bonus",aggravate_dmg_:"reaction_dmg_bonus",normal_dmg_:"talent_dmg_bonus",charged_dmg_:"talent_dmg_bonus",plunging_dmg_:"talent_dmg_bonus",plunging_collision_dmg_:"talent_dmg_bonus",plunging_impact_dmg_:"talent_dmg_bonus",skill_dmg_:"talent_dmg_bonus",burst_dmg_:"talent_dmg_bonus",elemental_dmg_:"talent_dmg_bonus",normalEle_dmg_:"talent_dmg_bonus",physical_dmgInc:"elem_dmgInc",physical_critDMG_:"elem_crit",physical_res_:"self_res",anemo_dmgInc:"elem_dmgInc",anemo_critDMG_:"elem_crit",anemo_res_:"self_res",geo_dmgInc:"elem_dmgInc",geo_critDMG_:"elem_crit",geo_res_:"self_res",electro_dmgInc:"elem_dmgInc",electro_critDMG_:"elem_crit",electro_res_:"self_res",hydro_dmgInc:"elem_dmgInc",hydro_critDMG_:"elem_crit",hydro_res_:"self_res",pyro_dmgInc:"elem_dmgInc",pyro_critDMG_:"elem_crit",pyro_res_:"self_res",cryo_dmgInc:"elem_dmgInc",cryo_critDMG_:"elem_crit",cryo_res_:"self_res",dendro_dmgInc:"elem_dmgInc",dendro_critDMG_:"elem_crit",dendro_res_:"self_res",autoBoost:"talent_level_boost",skillBoost:"talent_level_boost",burstBoost:"talent_level_boost",normal_dmgInc:"talent_dmgInc",normal_critDMG_:"talent_crit",normal_critRate_:"talent_crit",charged_dmgInc:"talent_dmgInc",charged_critDMG_:"talent_crit",charged_critRate_:"talent_crit",plunging_dmgInc:"talent_dmgInc",plunging_critDMG_:"talent_crit",plunging_critRate_:"talent_crit",plunging_collision_dmgInc:"talent_dmgInc",plunging_collision_critDMG_:"talent_crit",plunging_collision_critRate_:"talent_crit",plunging_impact_dmgInc:"talent_dmgInc",plunging_impact_critDMG_:"talent_crit",plunging_impact_critRate_:"talent_crit",skill_dmgInc:"talent_dmgInc",skill_critDMG_:"talent_crit",skill_critRate_:"talent_crit",burst_dmgInc:"talent_dmgInc",burst_critDMG_:"talent_crit",burst_critRate_:"talent_crit",elemental_dmgInc:"talent_dmgInc",elemental_critDMG_:"talent_crit",elemental_critRate_:"talent_crit",burning_critRate_:"reaction_crit",burning_critDMG_:"reaction_crit",bloom_critRate_:"reaction_crit",bloom_critDMG_:"reaction_crit",burgeon_critRate_:"reaction_crit",burgeon_critDMG_:"reaction_crit",hyperbloom_critRate_:"reaction_crit",hyperbloom_critDMG_:"reaction_crit",all_dmgInc:"elem_dmgInc",physical_enemyRes_:"enemy_debuffs",anemo_enemyRes_:"enemy_debuffs",geo_enemyRes_:"enemy_debuffs",electro_enemyRes_:"enemy_debuffs",hydro_enemyRes_:"enemy_debuffs",pyro_enemyRes_:"enemy_debuffs",cryo_enemyRes_:"enemy_debuffs",dendro_enemyRes_:"enemy_debuffs",enemyDefRed_:"enemy_debuffs",enemyDefIgn_:"misc",stamina:"stamina_buffs",staminaDec_:"stamina_buffs",staminaSprintDec_:"stamina_buffs",staminaGlidingDec_:"stamina_buffs",staminaChargedDec_:"stamina_buffs",incHeal_:"misc",shield_:"misc",cdRed_:"misc",moveSPD_:"misc",atkSPD_:"misc",weakspotDMG_:"misc",dmgRed_:"misc",healInc:"misc",base_atk:"base_stat_mod",base_hp:"base_stat_mod",base_def:"base_stat_mod"};export{ee as A,_e as S};
