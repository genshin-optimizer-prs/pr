import{u as D,q as a,p as h,L as v,Y as B,af as S,d as c,di as L,an as P,bU as T,ee as I,bT as w,m as A,n as G,cI as x,eJ as j,W as E,eK as V,dW as $,eL as z,eM as W,az as H,ay as N,a9 as U,B as q,aw as J}from"./index-Cs04qmRa.js";import{L as Q}from"./Link-Dd43rqZ-.js";function Z(){const{t:_}=D("artifact");return a(S,{severity:"info",variant:"filled",children:h(B,{t:_,i18nKey:"noArtifacts",children:["Looks like you haven't added any artifacts yet. If you want, there are ",a(Q,{color:"warning.main",component:v,to:"/scanner",fontFamily:"inherit",children:"automatic scanners"})," that can speed up the import process!"]})})}function F({statKeys:_,statFilters:t,setStatFilters:r,disabled:i=!1,wrapperFunc:m=l=>l,label:g}){const{t:l}=D("statKey_gen"),u=c.useMemo(()=>_.map(e=>({key:e,grouper:k[e],label:[...L,...P].includes(e)?`${l(e)}${T(e)}`:I.getStr(e)??"ERROR",color:I.getVariant(e)})).sort((e,s)=>R.indexOf(e.grouper)-R.indexOf(s.grouper)),[l,_]),b=c.useCallback(e=>Object.keys(t).includes(e.key),[t]),d=c.useCallback((e,s)=>{if(s)r(Object.fromEntries(Object.entries(t).map(([o,y])=>[o===s?e:o,y])));else{const o={...t};o[e]=0,r({...o})}},[t,r]),p=c.useCallback((e,s)=>{const o={...t};o[e]=s,r({...o})},[t,r]),f=c.useCallback(e=>{const s={...t};delete s[e],r({...s})},[t,r]);return h(w,{children:[Object.entries(t).map(([e,s])=>m(a(M,{statKey:e,statKeyOptions:u,disabled:i,value:s,setValue:p,setKey:d,delKey:f,getOptionDisabled:b},e),e)),m(a(M,{statKey:null,statKeyOptions:u,setValue:p,setKey:d,delKey:f,disabled:i,getOptionDisabled:b,label:g},Object.entries(t).length))]})}function M({statKey:_,statKeyOptions:t=[],value:r=0,delKey:i,setKey:m,setValue:g,disabled:l=!1,getOptionDisabled:u,label:b}){const d=A(),{t:p}=D("ui"),f=G(d.breakpoints.up("lg")),e=G(d.breakpoints.down("md")),s=_?x(_)==="%":!1,o=c.useCallback(n=>_&&g(_,n??0),[g,_]),y=c.useCallback(n=>{n?m(n,_):_&&i(_)},[_,m,i]),C=c.useCallback(()=>_&&i(_),[i,_]),O={p:1,flexBasis:30,flexGrow:0,flexShrink:0};return h(J,{sx:{width:"100%"},children:[a(W,{size:"small",options:t,onChange:y,valueKey:_,getOptionDisabled:u,groupBy:n=>k[n.key],renderGroup:n=>h(j,{component:E,sx:{paddingTop:0,marginTop:0},children:[a(V,{sx:{top:"-1em"},children:a("strong",{children:p(`statGroupKey.${n.group}`)})},`${n.group}Header`),n.children]},n.key),toImg:n=>a($,{statKey:n,iconProps:{color:I.getVariant(n)}}),ListboxProps:{style:{display:"grid",gridTemplateColumns:e?"100%":f?"33% 33% 33%":"50% 50%"}},PopperComponent:n=>a(z,{...n,style:{width:"60%"}}),sx:{flexGrow:1,flexBasis:150},textFieldProps:{sx:{"& .MuiInputBase-root":{borderRadius:"4px 0 0 4px"}}},label:b}),a(N,{sx:{flexBasis:30,flexGrow:1,borderRadius:"0 4px 4px 0"},children:a(H,{disabled:!_||l,float:s,value:r,placeholder:"Stat Value",onChange:o,sx:{px:1},inputProps:{sx:{textAlign:"right"}},endAdornment:_?x(_):void 0})}),!!_&&a(q,{sx:O,color:"error",onClick:C,disabled:l,children:a(U,{fontSize:"small"})})]})}const R=["basic_stats","elem_dmg_bonus","enemy_debuffs","self_res","reaction_dmg_bonus","reaction_crit","elem_dmgInc","talent_dmgInc","elem_crit","talent_dmg_bonus","talent_crit","talent_level_boost","base_stat_mod","stamina_buffs","misc"],k={hp:"basic_stats",hp_:"basic_stats",atk:"basic_stats",atk_:"basic_stats",def:"basic_stats",def_:"basic_stats",eleMas:"basic_stats",enerRech_:"basic_stats",critRate_:"basic_stats",critDMG_:"basic_stats",electro_dmg_:"elem_dmg_bonus",hydro_dmg_:"elem_dmg_bonus",pyro_dmg_:"elem_dmg_bonus",cryo_dmg_:"elem_dmg_bonus",physical_dmg_:"elem_dmg_bonus",anemo_dmg_:"elem_dmg_bonus",geo_dmg_:"elem_dmg_bonus",dendro_dmg_:"elem_dmg_bonus",heal_:"basic_stats",all_dmg_:"elem_dmg_bonus",overloaded_dmg_:"reaction_dmg_bonus",shattered_dmg_:"reaction_dmg_bonus",electrocharged_dmg_:"reaction_dmg_bonus",superconduct_dmg_:"reaction_dmg_bonus",swirl_dmg_:"reaction_dmg_bonus",burning_dmg_:"reaction_dmg_bonus",bloom_dmg_:"reaction_dmg_bonus",burgeon_dmg_:"reaction_dmg_bonus",hyperbloom_dmg_:"reaction_dmg_bonus",vaporize_dmg_:"reaction_dmg_bonus",melt_dmg_:"reaction_dmg_bonus",spread_dmg_:"reaction_dmg_bonus",aggravate_dmg_:"reaction_dmg_bonus",normal_dmg_:"talent_dmg_bonus",charged_dmg_:"talent_dmg_bonus",plunging_dmg_:"talent_dmg_bonus",plunging_collision_dmg_:"talent_dmg_bonus",plunging_impact_dmg_:"talent_dmg_bonus",skill_dmg_:"talent_dmg_bonus",burst_dmg_:"talent_dmg_bonus",elemental_dmg_:"talent_dmg_bonus",normalEle_dmg_:"talent_dmg_bonus",physical_dmgInc:"elem_dmgInc",physical_critDMG_:"elem_crit",physical_res_:"self_res",anemo_dmgInc:"elem_dmgInc",anemo_critDMG_:"elem_crit",anemo_res_:"self_res",geo_dmgInc:"elem_dmgInc",geo_critDMG_:"elem_crit",geo_res_:"self_res",electro_dmgInc:"elem_dmgInc",electro_critDMG_:"elem_crit",electro_res_:"self_res",hydro_dmgInc:"elem_dmgInc",hydro_critDMG_:"elem_crit",hydro_res_:"self_res",pyro_dmgInc:"elem_dmgInc",pyro_critDMG_:"elem_crit",pyro_res_:"self_res",cryo_dmgInc:"elem_dmgInc",cryo_critDMG_:"elem_crit",cryo_res_:"self_res",dendro_dmgInc:"elem_dmgInc",dendro_critDMG_:"elem_crit",dendro_res_:"self_res",autoBoost:"talent_level_boost",skillBoost:"talent_level_boost",burstBoost:"talent_level_boost",normal_dmgInc:"talent_dmgInc",normal_critDMG_:"talent_crit",normal_critRate_:"talent_crit",charged_dmgInc:"talent_dmgInc",charged_critDMG_:"talent_crit",charged_critRate_:"talent_crit",plunging_dmgInc:"talent_dmgInc",plunging_critDMG_:"talent_crit",plunging_critRate_:"talent_crit",plunging_collision_dmgInc:"talent_dmgInc",plunging_collision_critDMG_:"talent_crit",plunging_collision_critRate_:"talent_crit",plunging_impact_dmgInc:"talent_dmgInc",plunging_impact_critDMG_:"talent_crit",plunging_impact_critRate_:"talent_crit",skill_dmgInc:"talent_dmgInc",skill_critDMG_:"talent_crit",skill_critRate_:"talent_crit",burst_dmgInc:"talent_dmgInc",burst_critDMG_:"talent_crit",burst_critRate_:"talent_crit",elemental_dmgInc:"talent_dmgInc",elemental_critDMG_:"talent_crit",elemental_critRate_:"talent_crit",burning_critRate_:"reaction_crit",burning_critDMG_:"reaction_crit",bloom_critRate_:"reaction_crit",bloom_critDMG_:"reaction_crit",burgeon_critRate_:"reaction_crit",burgeon_critDMG_:"reaction_crit",hyperbloom_critRate_:"reaction_crit",hyperbloom_critDMG_:"reaction_crit",all_dmgInc:"elem_dmgInc",physical_enemyRes_:"enemy_debuffs",anemo_enemyRes_:"enemy_debuffs",geo_enemyRes_:"enemy_debuffs",electro_enemyRes_:"enemy_debuffs",hydro_enemyRes_:"enemy_debuffs",pyro_enemyRes_:"enemy_debuffs",cryo_enemyRes_:"enemy_debuffs",dendro_enemyRes_:"enemy_debuffs",enemyDefRed_:"enemy_debuffs",enemyDefIgn_:"misc",stamina:"stamina_buffs",staminaDec_:"stamina_buffs",staminaSprintDec_:"stamina_buffs",staminaGlidingDec_:"stamina_buffs",staminaChargedDec_:"stamina_buffs",incHeal_:"misc",shield_:"misc",cdRed_:"misc",moveSPD_:"misc",atkSPD_:"misc",weakspotDMG_:"misc",dmgRed_:"misc",healInc:"misc",base_atk:"base_stat_mod",base_hp:"base_stat_mod",base_def:"base_stat_mod"};export{Z as A,F as S};
