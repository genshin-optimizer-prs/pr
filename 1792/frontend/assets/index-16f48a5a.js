import{k as Kn,p as O,bG as p,cV as ts,f as b,o as g,cG as Qn,ap as ss}from"./index-c81c8d35.js";import{d as ht,p as t,T as Be,O as d,r as as,R as Yn,I as s,Y as k,J as a,P as U,Q as l,Z as c,_ as H,M as i,$ as S,K as m,s as u,a0 as f,a1 as _,G as V,k as Zn,a2 as Xn,a3 as eo,i as E,a4 as ns,L as to}from"./index-4a3b8e11.js";import{I as so,C as os}from"./ColoredText-ec8fddf1.js";import{S as ao}from"./SqBadge-521820b6.js";class n{constructor(h,$,I){this.getSlotName=y=>this.tr(`pieces.${y}.name`),this.getSlotDesc=y=>this.tr(`pieces.${y}.desc`),this.setEffectDesc=y=>this.tr(`setEffects.${y}`),this.setEffectDocument=y=>{var v;return(v=this.sheet.setEffects[y])==null?void 0:v.document},this.hasEnough=(y,v)=>(v.get(t.artSet[this.key]).value??0)>=y,this.sheet=$,this.key=h,this.data=I}get tr(){return n.tr(this.key)}get name(){return this.tr("setName")}get setName(){return this.tr("setName")}get nameRaw(){return this.sheet.name}get rarity(){return this.sheet.rarity}get slots(){switch(this.key){case"PrayersForDestiny":case"PrayersForIllumination":case"PrayersForWisdom":case"PrayersToSpringtime":return["circlet"];default:return[...Kn]}}get setEffects(){return this.sheet.setEffects}static trm(h){return $=>O(Be,{ns:`artifact_${h}`,key18:$})}static tr(h){return $=>O(Be,{ns:`artifact_${h}_gen`,key18:$})}static get(h){return Wc[h]}}const o=e=>{const h=$=>O(Be,{ns:`artifact_${e}_gen`,key18:$});return $=>({title:h("setName"),icon:O(so,{size:2,src:no(e)}),action:O(ao,{color:"success",children:d(`${$}set`)}),description:h(`setEffects.${$}`)})};function no(e){return ht(e,"flower")||ht(e,"circlet")}function r(e,h={},$={}){return as([Yn(h,e),{display:{[`artifact:${e}`]:$}}])}const Me="Adventurer",ut=o(Me),rs=s(t.artSet.Adventurer,2,1e3),ds=s(t.artSet.Adventurer,4,k(a(.3),t.total.hp)),oo=r(Me,{premod:{hp:rs}},{heal:ds}),ro={name:"Adventurer",rarity:[3],setEffects:{2:{document:[{header:ut(2),fields:[{node:rs}]}]},4:{document:[{header:ut(4),fields:[{node:U(ds,{name:l("healing"),variant:"heal"})}]}]}}},co=new n(Me,ro,oo),P="ArchaicPetra",$t=o(P),[,io]=S("artifact",P),cs=s(t.artSet.ArchaicPetra,2,a(.15)),[mo,is]=c(P,"element"),ms=Object.fromEntries(H.map(e=>[`${e}_dmg_`,s(t.artSet.ArchaicPetra,4,i(e,is,a(.35)))])),lo=r(P,{premod:{geo_dmg_:cs},teamBuff:{premod:ms}}),fo={name:"Archaic Petra",rarity:[4,5],setEffects:{2:{document:[{header:$t(2),fields:[{node:cs}]}]},4:{document:[{header:$t(4),path:mo,value:is,teamBuff:!0,name:io("condName"),states:Object.fromEntries(H.map(e=>[e,{name:O(os,{color:e,children:l(`element.${e}`)}),fields:[{node:ms[`${e}_dmg_`]},{text:l("duration"),value:10,unit:"s"}]}]))}]}}},ho=new n(P,fo,lo),J="Berserker",_t=o(J),ls=m.info("critRate_"),fs=s(t.artSet.Berserker,2,a(.12),ls),[uo,hs]=c(J,"hp"),us=s(t.artSet.Berserker,4,i("70",hs,a(.24)),ls),$o=r(J,{premod:{critRate_:u(fs,us)}}),_o={name:"Berserker",rarity:[3,4],setEffects:{2:{document:[{header:_t(2),fields:[{node:fs}]}]},4:{document:[{header:_t(4),path:uo,value:hs,teamBuff:!0,name:d("lessPercentHP",{percent:70}),states:{70:{fields:[{node:us}]}}}]}}},go=new n(J,_o,$o),B="BlizzardStrayer",gt=o(B),[,Se]=S("artifact",B),[yo,$s]=c(B,"state"),_s=s(t.artSet.BlizzardStrayer,2,a(.15)),De=s(t.artSet.BlizzardStrayer,4,f($s,{cryo:a(.2),frozen:a(.4)},_)),po=r(B,{premod:{cryo_dmg_:_s},total:{critRate_:De}}),So={name:"Blizzard Strayer",rarity:[4,5],setEffects:{2:{document:[{header:gt(2),fields:[{node:_s}]}]},4:{document:[{header:gt(4),value:$s,path:yo,name:Se("condName"),states:{cryo:{name:Se("condCryo"),fields:[{node:De}]},frozen:{name:Se("condFrozen"),fields:[{node:De}]}}}]}}},ko=new n(B,So,po),K="BloodstainedChivalry",yt=o(K),gs=s(t.artSet.BloodstainedChivalry,2,a(.25)),[vo,Fe]=c(K,"defeat"),ys=s(t.artSet.BloodstainedChivalry,4,i("hit",Fe,a(.5))),ps=s(t.artSet.BloodstainedChivalry,4,i("hit",Fe,a(1))),Eo=r(K,{premod:{physical_dmg_:gs,charged_dmg_:ys,staminaChargedDec_:ps}}),Oo={name:"Bloodstained Chivalry",rarity:[4,5],setEffects:{2:{document:[{header:yt(2),fields:[{node:gs}]}]},4:{document:[{header:yt(4),path:vo,value:Fe,name:d("afterDefeatEnemy",{percent:70}),states:{hit:{fields:[{node:ys},{node:ps},{text:l("duration"),value:10,unit:"s"}]}}}]}}},wo=new n(K,Oo,Eo),Q="BraveHeart",pt=o(Q),Ss=s(t.artSet.BraveHeart,2,a(.18)),[bo,ks]=c(Q,"hp"),vs=s(t.artSet.BraveHeart,4,i("50",ks,a(.3))),Ho=r(Q,{premod:{atk_:Ss,all_dmg_:vs}}),Po={name:"Brave Heart",rarity:[3,4],setEffects:{2:{document:[{header:pt(2),fields:[{node:Ss}]}]},4:{document:[{header:pt(4),path:bo,value:ks,name:d("enemyGreaterPercentHP",{percent:50}),states:{50:{fields:[{node:vs}]}}}]}}},Bo=new n(Q,Po,Ho),Y="CrimsonWitchOfFlames",ke=o(Y),[Do,Es]=c(Y,"stack"),Os=m.info("pyro_dmg_"),ws=s(t.artSet.CrimsonWitchOfFlames,2,a(.15),Os),Z=s(t.artSet.CrimsonWitchOfFlames,4,a(.4)),bs={...Z},Hs={...Z},Ne=s(t.artSet.CrimsonWitchOfFlames,4,a(.15)),Ps={...Ne},Bs=p(1,3),Ds=s(t.artSet.CrimsonWitchOfFlames,4,f(Es,Object.fromEntries(Bs.map(e=>[e,a(.15*e/2)])),_),Os),To=r(Y,{premod:{pyro_dmg_:u(ws,Ds),overloaded_dmg_:Z,burning_dmg_:bs,vaporize_dmg_:Ne,melt_dmg_:Ps,burgeon_dmg_:Hs}}),Ao={name:"Crimson Witch of Flames",rarity:[4,5],setEffects:{2:{document:[{header:ke(2),fields:[{node:ws}]}]},4:{document:[{header:ke(4),fields:[{node:Z},{node:bs},{node:Hs},{node:Ne},{node:Ps}]},{header:ke(4),value:Es,path:Do,name:d("afterUse.skill"),states:Object.fromEntries(Bs.map(e=>[e,{name:d("stack",{count:e}),fields:[{node:Ds},{text:l("duration"),value:10,unit:"s"}]}]))}]}}},Mo=new n(Y,Ao,To),X="DeepwoodMemories",St=o(X),Ts=s(t.artSet.DeepwoodMemories,2,.15),[Fo,As]=c(X,"set4"),Ms=s(t.artSet.DeepwoodMemories,4,i(As,"on",-.3)),No=r(X,{premod:{dendro_dmg_:Ts},teamBuff:{premod:{dendro_enemyRes_:Ms}}}),Co={name:"Deepwood memories",rarity:[4,5],setEffects:{2:{document:[{header:St(2),fields:[{node:Ts}]}]},4:{document:[{header:St(4),path:Fo,value:As,teamBuff:!0,name:d("hitOp.skillOrBurst"),states:{on:{fields:[{node:Ms},{text:l("duration"),value:8,unit:"s"}]}}}]}}},jo=new n(X,Co,No),Ce="DefendersWill",kt=o(Ce),Fs=s(t.artSet.DefendersWill,2,a(.3)),Ns=ts(b,e=>[`${e}_res_`,s(t.artSet.DefendersWill,4,s(V[e],1,a(.3)))]),Go=r(Ce,{premod:{def_:Fs,...Ns}}),Ro={name:"Defender's Will",rarity:[3,4],setEffects:{2:{document:[{header:kt(2),fields:[{node:Fs}]}]},4:{document:[{header:kt(4),fields:Object.values(Ns).map(e=>({node:e}))}]}}},xo=new n(Ce,Ro,Go),ee="DesertPavilionChronicle",vt=o(ee),Cs=s(t.artSet.DesertPavilionChronicle,2,.15),[Io,je]=c(ee,"set4"),js=s(t.artSet.DesertPavilionChronicle,4,i(je,"on",a(.1))),te=s(t.artSet.DesertPavilionChronicle,4,i(je,"on",a(.4))),Gs={...te},Rs={...te},Wo=r(ee,{premod:{anemo_dmg_:Cs,atkSPD_:js,normal_dmg_:te,charged_dmg_:Gs,plunging_dmg_:Rs}}),Vo={name:"Desert Pavilion Chronicle",rarity:[4,5],setEffects:{2:{document:[{header:vt(2),fields:[{node:Cs}]}]},4:{document:[{header:vt(4),path:Io,value:je,teamBuff:!0,name:d("hitOp.charged"),states:{on:{fields:[{node:js},{node:te},{node:Gs},{node:Rs},{text:l("duration"),value:15,unit:"s"}]}}}]}}},zo=new n(ee,Vo,Wo),D="EchoesOfAnOffering",Et=o(D),[,ve]=S("artifact",D),xs=s(t.artSet.EchoesOfAnOffering,2,a(.18)),[Lo,Is]=c(D,"mode"),Te=s(t.artSet.EchoesOfAnOffering,4,k(f(Is,{on:a(.7),avg:a(.7*.50204)},_),t.total.atk)),qo=r(D,{premod:{atk_:xs,normal_dmgInc:Te}}),Uo={name:"Echoes of an Offering",rarity:[4,5],setEffects:{2:{document:[{header:Et(2),fields:[{node:xs}]}]},4:{document:[{header:Et(4),value:Is,path:Lo,name:ve("mode"),states:{on:{name:ve("always"),fields:[{node:Te}]},avg:{name:ve("avg"),fields:[{node:Te}]}}}]}}},Jo=new n(D,Uo,qo),Ge="EmblemOfSeveredFate",Ot=o(Ge),Ws=s(t.artSet.EmblemOfSeveredFate,2,a(.2)),Ae=s(t.artSet.EmblemOfSeveredFate,4,Zn(a(.75),k(a(.25),t.premod.enerRech_))),Ko=r(Ge,{premod:{enerRech_:Ws,burst_dmg_:Ae}},{burstBonus:Ae}),Qo={name:"Emblem of Severed Fate",rarity:[4,5],setEffects:{2:{document:[{header:Ot(2),fields:[{node:Ws}]}]},4:{document:[{header:Ot(4),fields:[{node:Ae}]}]}}},Yo=new n(Ge,Qo,Ko),T="FlowerOfParadiseLost",[,Zo]=S("artifact",T),Ee=o(T),Vs=s(t.artSet.FlowerOfParadiseLost,2,80),se=s(t.artSet.FlowerOfParadiseLost,4,a(.4),m.info("bloom_dmg_")),zs={...se,info:m.info("hyperbloom_dmg_")},Ls={...se,info:m.info("burgeon_dmg_")},[Xo,qs]=c(T,"stacks"),Us=p(1,4),ae=s(t.artSet.FlowerOfParadiseLost,4,f(qs,Object.fromEntries(Us.map(e=>[e,k(e,a(.1))])),_,m.info("bloom_dmg_"))),Js={...ae,info:m.info("hyperbloom_dmg_")},Ks={...ae,info:m.info("burgeon_dmg_")},er=r(T,{premod:{eleMas:Vs,bloom_dmg_:u(se,ae),hyperbloom_dmg_:u(zs,Js),burgeon_dmg_:u(Ls,Ks)}}),tr={name:"Flower of Paradise Lost",rarity:[4,5],setEffects:{2:{document:[{header:Ee(2),fields:[{node:Vs}]}]},4:{document:[{header:Ee(4),fields:[{node:se},{node:zs},{node:Ls}]},{header:Ee(4),path:Xo,value:qs,name:Zo("condName"),states:Object.fromEntries(Us.map(e=>[e,{name:d("stack",{count:e}),fields:[{node:ae},{node:Js},{node:Ks},{text:l("duration"),value:10,unit:"s"}]}]))}]}}},sr=new n(T,tr,er),Re="Gambler",wt=o(Re),Qs=s(t.artSet.Gambler,2,a(.2)),ar=r(Re,{premod:{skill_dmg_:Qs}}),nr={name:"Gambler",rarity:[3,4],setEffects:{2:{document:[{header:wt(2),fields:[{node:Qs}]}]},4:{document:[{header:wt(4),fields:[]}]}}},or=new n(Re,nr,ar),w="GildedDreams",W=o(w),[,bt]=S("artifact",w),Ys=s(t.artSet.GildedDreams,2,80,m.info("eleMas")),[rr,xe]=c(w,"passive"),Ht=f(t.charEle,V,eo),dr=s(Ht,2,u(Ht,-1)),cr=u(...b.map(e=>s(V[e],1,Xn(e,t.charEle,V[e])))),[ir,Zs]=c(w,"overrideOther"),z=p(0,3),Pt=f(Zs,g(z,e=>E(e)),-1),[mr,Xs]=c(w,"overrideSame"),Bt=f(Xs,g(z,e=>E(e)),-1),ea=s(t.artSet.GildedDreams,4,i(xe,"on",k(a(.14),ns(Bt,-1,dr,Bt)))),ta=s(t.artSet.GildedDreams,4,i(xe,"on",k(50,ns(Pt,-1,cr,Pt)),m.info("eleMas"))),lr=r(w,{premod:{eleMas:u(Ys,ta),atk_:ea}}),fr={name:"Gilded Dreams",rarity:[4,5],setEffects:{2:{document:[{header:W(2),fields:[{node:Ys}]}]},4:{document:[{header:W(4),teamBuff:!0,path:rr,value:xe,name:d("afterReaction"),states:{on:{fields:[{node:ea},{node:ta},{text:l("duration"),value:8,unit:"s"},{text:l("cd"),value:8,unit:"s"}]}}},{header:W(4),teamBuff:!0,path:mr,value:Xs,name:bt("overrideSameCond"),states:g(z,e=>({name:d("members",{count:e}),fields:[]}))},{header:W(4),teamBuff:!0,path:ir,value:Zs,name:bt("overrideOtherCond"),states:g(z,e=>({name:d("members",{count:e}),fields:[]}))}]}}},hr=new n(w,fr,lr),Ie="GladiatorsFinale",Dt=o(Ie),sa=s(t.artSet.GladiatorsFinale,2,a(.18)),aa=s(t.artSet.GladiatorsFinale,4,f(t.weaponType,{sword:a(.35),polearm:a(.35),claymore:a(.35)},_)),ur=r(Ie,{premod:{atk_:sa,normal_dmg_:aa}}),$r={name:"Gladiator's Finale",rarity:[4,5],setEffects:{2:{document:[{header:Dt(2),fields:[{node:sa}]}]},4:{document:[{header:Dt(4),fields:[{node:aa}]}]}}},_r=new n(Ie,$r,ur),ne="GoldenTroupe",Oe=o(ne),na=s(t.artSet.GoldenTroupe,2,.2,m.info("skill_dmg_")),oa=s(t.artSet.GoldenTroupe,4,.25,m.info("skill_dmg_")),[gr,ra]=c(ne,"set4"),da=s(t.artSet.GoldenTroupe,4,i(ra,"on",.25,m.info("skill_dmg_"))),yr=r(ne,{premod:{skill_dmg_:u(na,oa,da)}}),pr={name:"Golden Troupe",rarity:[4,5],setEffects:{2:{document:[{header:Oe(2),fields:[{node:na}]}]},4:{document:[{header:Oe(4),fields:[{node:oa}]},{header:Oe(4),path:gr,value:ra,name:d("charOffField"),states:{on:{fields:[{node:da}]}}}]}}},Sr=new n(ne,pr,yr),oe="HeartOfDepth",Tt=o(oe),ca=s(t.artSet.HeartOfDepth,2,a(.15)),[kr,ia]=c(oe,"skill"),We=s(t.artSet.HeartOfDepth,4,i("cast",ia,a(.3))),ma={...We},vr=r(oe,{premod:{hydro_dmg_:ca,normal_dmg_:We,charged_dmg_:ma}}),Er={name:"Heart of Depth",rarity:[4,5],setEffects:{2:{document:[{header:Tt(2),fields:[{node:ca}]}]},4:{document:[{header:Tt(4),path:kr,value:ia,name:d("afterUse.skill"),states:{cast:{fields:[{node:We},{node:ma},{text:l("duration"),value:15,unit:"s"}]}}}]}}},Or=new n(oe,Er,vr),A="HuskOfOpulentDreams",At=o(A),[,wr]=S("artifact",A),[br,Ve]=c(A,"stack"),la=m.info("def_"),fa=s(t.artSet.HuskOfOpulentDreams,2,a(.3),la),ze=p(1,4),ha=s(t.artSet.HuskOfOpulentDreams,4,f(Ve,Object.fromEntries(ze.map(e=>[e,a(.06*e)])),_),la),ua=s(t.artSet.HuskOfOpulentDreams,4,f(Ve,Object.fromEntries(ze.map(e=>[e,a(.06*e)])),_)),Hr=r(A,{premod:{def_:u(fa,ha),geo_dmg_:ua}}),Pr={name:"Husk of Opulent Dreams",rarity:[4,5],setEffects:{2:{document:[{header:At(2),fields:[{node:fa}]}]},4:{document:[{header:At(4),value:Ve,path:br,teamBuff:!0,name:wr("condName"),states:Object.fromEntries(ze.map(e=>[e,{name:d("stack",{count:e}),fields:[{node:ha},{node:ua}]}]))}]}}},Br=new n(A,Pr,Hr),re="Instructor",Mt=o(re),[Dr,$a]=c(re,"set4"),_a=s(t.artSet.Instructor,2,80),ga=s(t.artSet.Instructor,4,i("on",$a,120)),Tr=r(re,{premod:{eleMas:_a},teamBuff:{premod:{eleMas:ga}}}),Ar={name:"Instructor",rarity:[3,4],setEffects:{2:{document:[{header:Mt(2),fields:[{node:_a}]}]},4:{document:[{header:Mt(4),teamBuff:!0,value:$a,path:Dr,name:d("afterReaction"),states:{on:{fields:[{node:ga},{text:l("duration"),value:8,unit:"s"}]}}}]}}},Mr=new n(re,Ar,Tr),de="Lavawalker",Ft=o(de),[Fr,ya]=c(de,"state"),pa=s(t.artSet.Lavawalker,2,a(.4)),Sa=s(t.artSet.Lavawalker,4,i("on",ya,a(.35))),Nr=r(de,{premod:{pyro_res_:pa,all_dmg_:Sa}}),Cr={name:"Lavawalker",rarity:[4,5],setEffects:{2:{document:[{header:Ft(2),fields:[{node:pa}]}]},4:{document:[{header:Ft(4),value:ya,path:Fr,name:d("enemyAffected.burningOrPyro"),states:{on:{fields:[{node:Sa}]}}}]}}},jr=new n(de,Cr,Nr),Le="LuckyDog",Nt=o(Le),ka=s(t.artSet.LuckyDog,2,100),va=s(t.artSet.LuckyDog,4,300),Gr=r(Le,{premod:{def:ka}},{heal:va}),Rr={name:"Lucky Dog",rarity:[3],setEffects:{2:{document:[{header:Nt(2),fields:[{node:ka}]}]},4:{document:[{header:Nt(4),fields:[{node:U(va,{name:l("healing"),variant:"heal"})}]}]}}},xr=new n(Le,Rr,Gr),ce="MaidenBeloved",Ct=o(ce),[Ir,Ea]=c(ce,"state"),Oa=s(t.artSet.MaidenBeloved,2,a(.15)),wa=s(t.artSet.MaidenBeloved,4,i("on",Ea,a(.2))),Wr=r(ce,{premod:{heal_:Oa},teamBuff:{premod:{incHeal_:wa}}}),Vr={name:"Maiden Beloved",rarity:[4,5],setEffects:{2:{document:[{header:Ct(2),fields:[{node:Oa}]}]},4:{document:[{header:Ct(4),teamBuff:!0,value:Ea,path:Ir,name:d("afterUse.skillOrBurst"),states:{on:{fields:[{node:wa},{text:l("duration"),value:10,unit:"s"}]}}}]}}},zr=new n(ce,Vr,Wr),ie="MarechausseeHunter",jt=o(ie),qe=s(t.artSet.MarechausseeHunter,2,.15),ba={...qe},[Lr,Ha]=c(ie,"set4"),Pa=p(1,3),Ba=s(t.artSet.MarechausseeHunter,4,f(Ha,g(Pa,e=>E(e*.12)),_)),qr=r(ie,{premod:{normal_dmg_:qe,charged_dmg_:ba,critRate_:Ba}}),Ur={name:"Marechaussee Hunter",rarity:[4,5],setEffects:{2:{document:[{header:jt(2),fields:[{node:qe},{node:ba}]}]},4:{document:[{header:jt(4),path:Lr,value:Ha,name:d("hpChange"),states:g(Pa,e=>({name:d("stack",{count:e}),fields:[{node:Ba},{text:l("duration"),value:5,unit:"s"}]}))}]}}},Jr=new n(ie,Ur,qr),me="MartialArtist",Gt=o(me),[Kr,Ue]=c(me,"state"),Da=s(t.artSet.MartialArtist,2,a(.15),m.info("normal_dmg_")),Ta=s(t.artSet.MartialArtist,2,a(.15),m.info("charged_dmg_")),Aa=s(t.artSet.MartialArtist,4,i("on",Ue,a(.25),m.info("normal_dmg_"))),Ma=s(t.artSet.MartialArtist,4,i("on",Ue,a(.25),m.info("charged_dmg_"))),Qr=r(me,{premod:{normal_dmg_:u(Da,Aa),charged_dmg_:u(Ta,Ma)}}),Yr={name:"Martial Artist",rarity:[3,4],setEffects:{2:{document:[{header:Gt(2),fields:[{node:Da},{node:Ta}]}]},4:{document:[{header:Gt(4),value:Ue,path:Kr,name:d("afterUse.skill"),states:{on:{fields:[{node:Aa},{node:Ma},{text:l("duration"),value:8,unit:"s"}]}}}]}}},Zr=new n(me,Yr,Qr),M="NighttimeWhispersInTheEchoingWoods",we=o(M),Fa=s(t.artSet.NighttimeWhispersInTheEchoingWoods,2,.18),[Xr,L]=c(M,"afterSkill"),Na=s(t.artSet.NighttimeWhispersInTheEchoingWoods,4,i(L,"on",.2,m.info("geo_dmg_"))),[ed,Ca]=c(M,"crystallize"),ja=s(t.artSet.NighttimeWhispersInTheEchoingWoods,4,i(L,"on",i(Ca,"on",.2*1.5,m.info("geo_dmg_")))),td=r(M,{premod:{atk_:Fa,geo_dmg_:u(Na,ja)}}),sd={name:"Nighttime Whispers In The Echoing Woods",rarity:[4,5],setEffects:{2:{document:[{header:we(2),fields:[{node:Fa}]}]},4:{document:[{header:we(4),value:L,path:Xr,name:d("hitOp.skill"),states:{on:{fields:[{node:Na}]}}},{header:we(4),value:Ca,path:ed,canShow:i(L,"on",1),name:d("protectedByShieldCrystal"),states:{on:{fields:[{node:ja}]}}}]}}},ad=new n(M,sd,td),le="NoblesseOblige",Rt=o(le),Ga=s(t.artSet.NoblesseOblige,2,a(.2)),[nd,Ra]=c(le,"set4"),xa=s(t.artSet.NoblesseOblige,4,i(Ra,"on",a(.2))),od=r(le,{premod:{burst_dmg_:Ga},teamBuff:{premod:{atk_:xa}}}),rd={name:"Noblesse Oblige",rarity:[4,5],setEffects:{2:{document:[{header:Rt(2),fields:[{node:Ga}]}]},4:{document:[{header:Rt(4),teamBuff:!0,value:Ra,path:nd,name:d("afterUse.burst"),states:{on:{fields:[{node:xa},{text:l("duration"),value:12,unit:"s"}]}}}]}}},dd=new n(le,rd,od),F="NymphsDream",xt=o(F),[,cd]=S("artifact",F),Ia=s(t.artSet.NymphsDream,2,.15,m.info("hydro_dmg_")),[id,Je]=c(F,"set4"),Ke=p(1,3),md=[.07,.16,.25],ld=[.04,.09,.15],Wa=s(t.artSet.NymphsDream,4,f(Je,g(Ke,e=>E(md[e-1])),_)),Va=s(t.artSet.NymphsDream,4,f(Je,g(Ke,e=>E(ld[e-1])),_),m.info("hydro_dmg_")),fd=r(F,{premod:{hydro_dmg_:u(Ia,Va),atk_:Wa}}),hd={name:"Nymph's Dream",rarity:[4,5],setEffects:{2:{document:[{header:xt(2),fields:[{node:Ia}]}]},4:{document:[{header:xt(4),path:id,value:Je,teamBuff:!0,name:cd("condName"),states:g(Ke,e=>({name:d("stack",{count:e}),fields:[{node:Wa},{node:Va},{text:l("duration"),value:8,unit:"s"}]}))}]}}},ud=new n(F,hd,fd),fe="OceanHuedClam",It=o(fe),za=s(t.artSet.OceanHuedClam,2,a(.15)),La=s(t.artSet.OceanHuedClam,4,k(k(a(.9),3e4),t.enemy.physical_resMulti_)),$d=r(fe,{premod:{heal_:za}},{heal:La}),_d={name:"Ocean-Hued Clam",rarity:[4,5],setEffects:{2:{document:[{header:It(2),fields:[{node:za}]}]},4:{document:[{header:It(4),fields:[{node:U(La,{name:n.trm(fe)("condName"),variant:"physical"})}]}]}}},gd=new n(fe,_d,$d),he="PaleFlame",Wt=o(he),[yd,Qe]=c(he,"stacks"),qa=m.info("physical_dmg_"),Ua=s(t.artSet.PaleFlame,2,a(.25),qa),Ye=p(1,2),Ja=s(t.artSet.PaleFlame,4,f(Qe,Object.fromEntries(Ye.map(e=>[e,a(.09*e)])),_)),Ka=s(t.artSet.PaleFlame,4,f(Qe,Object.fromEntries(Ye.map(e=>[e,i(e,2,a(.25))])),_),qa),pd=r(he,{premod:{physical_dmg_:u(Ua,Ka),atk_:Ja}}),Sd={name:"Pale Flame",rarity:[4,5],setEffects:{2:{document:[{header:Wt(2),fields:[{node:Ua}]}]},4:{document:[{header:Wt(4),value:Qe,path:yd,teamBuff:!0,name:d("hitOp.skill"),states:Object.fromEntries(Ye.map(e=>[e,{name:e.toString(),fields:[{node:Ja},{node:Ka},{text:l("duration"),value:7,unit:"s"}]}]))}]}}},kd=new n(he,Sd,pd),Ze="PrayersForDestiny",vd=o(Ze),Ed=r(Ze),Od={name:"Prayers for Destiny",rarity:[3,4],setEffects:{1:{document:[{header:vd(1),fields:[]}]}}},wd=new n(Ze,Od,Ed),Xe="PrayersForIllumination",bd=o(Xe),Hd=r(Xe),Pd={name:"Prayers for Illumination",rarity:[3,4],setEffects:{1:{document:[{header:bd(1),fields:[]}]}}},Bd=new n(Xe,Pd,Hd),et="PrayersForWisdom",Dd=o(et),Td=r(et),Ad={name:"Prayers for Wisdom",rarity:[3,4],setEffects:{1:{document:[{header:Dd(1),fields:[]}]}}},Md=new n(et,Ad,Td),tt="PrayersToSpringtime",Fd=o(tt),Nd=r(tt),Cd={name:"Prayers to Springtime",rarity:[3,4],setEffects:{1:{document:[{header:Fd(1),fields:[]}]}}},jd=new n(tt,Cd,Nd),st="ResolutionOfSojourner",Vt=o(st),Qa=s(t.artSet.ResolutionOfSojourner,2,a(.18)),Ya=s(t.artSet.ResolutionOfSojourner,4,a(.3)),Gd=r(st,{premod:{atk_:Qa,charged_critRate_:Ya}}),Rd={name:"Resolution of Sojourner",rarity:[3,4],setEffects:{2:{document:[{header:Vt(2),fields:[{node:Qa}]}]},4:{document:[{header:Vt(4),fields:[{node:Ya}]}]}}},xd=new n(st,Rd,Gd),ue="RetracingBolide",zt=o(ue),[Id,at]=c(ue,"state"),Za=s(t.artSet.RetracingBolide,2,a(.35)),Xa=s(t.artSet.RetracingBolide,4,i("on",at,a(.4))),en=s(t.artSet.RetracingBolide,4,i("on",at,a(.4))),Wd=r(ue,{premod:{shield_:Za,normal_dmg_:Xa,charged_dmg_:en}}),Vd={name:"Retracing Bolide",rarity:[4,5],setEffects:{2:{document:[{header:zt(2),fields:[{node:Za}]}]},4:{document:[{header:zt(4),value:at,path:Id,name:d("protectedByShield"),states:{on:{fields:[{node:Xa},{node:en}]}}}]}}},zd=new n(ue,Vd,Wd),nt="Scholar",Lt=o(nt),tn=s(t.artSet.Scholar,2,a(.2)),Ld=r(nt,{premod:{enerRech_:tn}}),qd={name:"Scholar",rarity:[3,4],setEffects:{2:{document:[{header:Lt(2),fields:[{node:tn}]}]},4:{document:[{header:Lt(4),fields:[]}]}}},Ud=new n(nt,qd,Ld),N="ShimenawasReminiscence",qt=o(N),[,Jd]=S("artifact",N),[Kd,sn]=c(N,"usedEnergy"),an=s(t.artSet.ShimenawasReminiscence,2,a(.18)),$e=s(t.artSet.ShimenawasReminiscence,4,i("used",sn,a(.5))),nn={...$e},on={...$e},Qd=r(N,{premod:{atk_:an,normal_dmg_:$e,charged_dmg_:nn,plunging_dmg_:on}}),Yd={name:"Shimenawa's Reminiscence",rarity:[4,5],setEffects:{2:{document:[{header:qt(2),fields:[{node:an}]}]},4:{document:[{header:qt(4),value:sn,path:Kd,name:Jd("afterUseEnergy"),states:{used:{fields:[{node:$e},{node:nn},{node:on},{text:l("duration"),value:10,unit:"s"}]}}}]}}},Zd=new n(N,Yd,Qd),C="SongOfDaysPast",Ut=o(C),[,Xd]=S("artifact",C),rn=s(t.artSet.SongOfDaysPast,2,.15),dn=p(1e3,15e3,1e3),[ec,cn]=c(C,"healing"),j=s(t.artSet.SongOfDaysPast,4,f(cn,g(dn,e=>E(e*.08)),_)),mn={...j},ln={...j},fn={...j},hn={...j},un={...j},tc=r(C,{premod:{heal_:rn},teamBuff:{premod:{normal_dmgInc:mn,charged_dmgInc:ln,plunging_dmgInc:fn,skill_dmgInc:hn,burst_dmgInc:un}}}),sc={name:"Song of Days Past",rarity:[4,5],setEffects:{2:{document:[{header:Ut(2),fields:[{node:rn}]}]},4:{document:[{header:Ut(4),value:cn,path:ec,name:Xd("condName"),teamBuff:!0,states:g(dn,e=>({name:`${e}`,fields:[{node:mn},{node:ln},{node:fn},{node:hn},{node:un},{text:d("triggerQuota"),value:5},{text:l("duration"),value:10,unit:"s"}]}))}]}}},ac=new n(C,sc,tc),_e="TenacityOfTheMillelith",Jt=o(_e),$n=s(t.artSet.TenacityOfTheMillelith,2,a(.2)),[nc,ot]=c(_e,"skill"),_n=s(t.artSet.TenacityOfTheMillelith,4,i("cast",ot,a(.2))),gn=s(t.artSet.TenacityOfTheMillelith,4,i("cast",ot,a(.3))),oc=r(_e,{premod:{hp_:$n},teamBuff:{premod:{atk_:_n,shield_:gn}}}),rc={name:"Tenacity of the Millelith",rarity:[4,5],setEffects:{2:{document:[{header:Jt(2),fields:[{node:$n}]}]},4:{document:[{header:Jt(4),teamBuff:!0,path:nc,value:ot,name:d("hitOp.skill"),states:{cast:{fields:[{node:_n},{node:gn},{text:l("duration"),value:3,unit:"s"}]}}}]}}},dc=new n(_e,rc,oc),rt="TheExile",Kt=o(rt),yn=s(t.artSet.TheExile,2,a(.2)),cc=r(rt,{premod:{enerRech_:yn}}),ic={name:"The Exile",rarity:[3,4],setEffects:{2:{document:[{header:Kt(2),fields:[{node:yn}]}]},4:{document:[{header:Kt(4),fields:[]}]}}},mc=new n(rt,ic,cc),dt="ThunderingFury",Qt=o(dt),pn=s(t.artSet.ThunderingFury,2,a(.15)),G=s(t.artSet.ThunderingFury,4,a(.4)),Sn={...G},kn={...G},vn={...G},En=s(t.artSet.ThunderingFury,4,a(.2)),lc=r(dt,{premod:{electro_dmg_:pn,overloaded_dmg_:G,electrocharged_dmg_:Sn,superconduct_dmg_:kn,hyperbloom_dmg_:vn,aggravate_dmg_:En}}),fc={name:"Thundering Fury",rarity:[4,5],setEffects:{2:{document:[{header:Qt(2),fields:[{node:pn}]}]},4:{document:[{header:Qt(4),fields:[{node:G},{node:Sn},{node:kn},{node:vn},{node:En}]}]}}},hc=new n(dt,fc,lc),ge="Thundersoother",Yt=o(ge),[uc,On]=c(ge,"state"),wn=s(t.artSet.Thundersoother,2,a(.4)),bn=s(t.artSet.Thundersoother,4,i("on",On,a(.35))),$c=r(ge,{premod:{electro_res_:wn,all_dmg_:bn}}),_c={name:"Thundersoother",rarity:[4,5],setEffects:{2:{document:[{header:Yt(2),fields:[{node:wn}]}]},4:{document:[{header:Yt(4),value:On,path:uc,name:d("enemyAffected.electro"),states:{on:{fields:[{node:bn}]}}}]}}},gc=new n(ge,_c,$c),R="TinyMiracle",Zt=o(R),[,yc]=S("artifact",R),[pc,Hn]=c(R,"element"),Pn=Object.fromEntries(b.map(e=>[e,s(t.artSet.TinyMiracle,2,a(.2),m.info(`${e}_res_`))])),Bn=Object.fromEntries(b.map(e=>[e,s(t.artSet.TinyMiracle,4,i(Hn,e,a(.3)),m.info(`${e}_res_`))])),Sc=r(R,{premod:Object.fromEntries(b.map(e=>[`${e}_res_`,u(Pn[e],Bn[e])]))}),kc={name:"Tiny Miracle",rarity:[3,4],setEffects:{2:{document:[{header:Zt(2),fields:Object.values(Pn).map(e=>({node:e}))}]},4:{document:[{header:Zt(4),path:pc,value:Hn,teamBuff:!0,name:yc("condName"),states:Object.fromEntries(b.map(e=>[e,{name:O(os,{color:e,children:l(`element.${e}`)}),fields:[...Object.values(Bn).map(h=>({node:h})),{text:l("duration"),value:10,unit:"s"}]}]))}]}}},vc=new n(R,kc,Sc),ct="TravelingDoctor",Xt=o(ct),Dn=s(t.artSet.TravelingDoctor,2,a(.2)),Tn=s(t.artSet.TravelingDoctor,4,k(a(.2),t.total.hp)),Ec=r(ct,{premod:{incHeal_:Dn}},{heal:Tn}),Oc={name:"Traveling Doctor",rarity:[3],setEffects:{2:{document:[{header:Xt(2),fields:[{node:Dn}]}]},4:{document:[{header:Xt(4),fields:[{node:U(Tn,{name:l("healing"),variant:"heal"})}]}]}}},wc=new n(ct,Oc,Ec),x="VermillionHereafter",be=o(x),An=s(t.artSet.VermillionHereafter,2,a(.18),m.info("atk_")),[bc,q]=c(x,"afterBurst"),Mn=s(t.artSet.VermillionHereafter,4,i(q,"on",a(.08)),m.info("atk_")),[Hc,Fn]=c(x,"stacks"),Nn=s(t.artSet.VermillionHereafter,4,i(q,"on",f(Fn,Object.fromEntries(p(1,4).map(e=>[e,a(.1*e)])),_),m.info("atk_"))),Pc=r(x,{premod:{atk_:u(An,Mn,Nn)}}),Bc={name:"Vermillion Hereafter",rarity:[4,5],setEffects:{2:{document:[{header:be(2),fields:[{node:An}]}]},4:{document:[{header:be(4),value:q,path:bc,teamBuff:!0,name:d("afterUse.burst"),states:{on:{fields:[{node:Mn}]}}},{header:be(4),value:Fn,path:Hc,teamBuff:!0,name:d("stacks"),canShow:i(q,"on",1),states:Object.fromEntries(p(1,4).map(e=>[e,{name:d("stack",{count:e}),fields:[{node:Nn}]}]))}]}}},Dc=new n(x,Bc,Pc),ye="ViridescentVenerer",He=o(ye),Cn=s(t.artSet.ViridescentVenerer,2,a(.15)),jn=s(t.artSet.ViridescentVenerer,4,a(.6)),Gn=g(H,e=>[ye,`swirl${e}`]),Rn=g(H,e=>to(Gn[e])),xn=ts(H,e=>[`${e}_enemyRes_`,s(t.artSet.ViridescentVenerer,4,i(e,Rn[e],a(-.4)))]),Tc=r(ye,{premod:{anemo_dmg_:Cn,swirl_dmg_:jn},teamBuff:{premod:{...xn}}}),Ac={name:"Viridescent Venerer",rarity:[4,5],setEffects:{2:{document:[{header:He(2),fields:[{node:Cn}]}]},4:{document:[{header:He(4),fields:[{node:jn}]},{header:He(4),teamBuff:!0,states:Object.fromEntries(H.map(e=>[e,{value:Rn[e],path:Gn[e],name:d(`swirlReaction.${e}`),fields:[{node:xn[`${e}_enemyRes_`]},{text:d(`effectDuration.${e}`),value:10,unit:"s"}]}]))}]}}},Mc=new n(ye,Ac,Tc),pe="VourukashasGlow",Pe=o(pe),In=s(t.artSet.VourukashasGlow,2,.2),Wn=s(t.artSet.VourukashasGlow,4,.1,m.info("skill_dmg_")),Vn=s(t.artSet.VourukashasGlow,4,.1,m.info("burst_dmg_")),[Fc,it]=c(pe,"set4"),mt=p(1,5),zn=s(t.artSet.VourukashasGlow,4,f(it,g(mt,e=>E(e*.08)),_),m.info("skill_dmg_")),Ln=s(t.artSet.VourukashasGlow,4,f(it,g(mt,e=>E(e*.08)),_),m.info("burst_dmg_")),Nc=r(pe,{premod:{hp_:In,skill_dmg_:u(Wn,zn),burst_dmg_:u(Vn,Ln)}}),Cc={name:"Vourukasha's Glow",rarity:[4,5],setEffects:{2:{document:[{header:Pe(2),fields:[{node:In}]}]},4:{document:[{header:Pe(4),fields:[{node:Wn},{node:Vn}]},{header:Pe(4),path:Fc,value:it,name:d("takeDmg"),states:g(mt,e=>({name:d("stack",{count:e}),fields:[{node:zn},{node:Ln},{text:l("duration"),value:5,unit:"s"}]}))}]}}},jc=new n(pe,Cc,Nc),lt="WanderersTroupe",es=o(lt),qn=s(t.artSet.WanderersTroupe,2,80),Un=s(t.artSet.WanderersTroupe,4,f(t.weaponType,{catalyst:a(.35),bow:a(.35)},_)),Gc=r(lt,{premod:{eleMas:qn,charged_dmg_:Un}}),Rc={name:"Wanderer's Troupe",rarity:[4,5],setEffects:{2:{document:[{header:es(2),fields:[{node:qn}]}]},4:{document:[{header:es(4),fields:[{node:Un}]}]}}},xc=new n(lt,Rc,Gc),ft={Adventurer:co,ArchaicPetra:ho,Berserker:go,BlizzardStrayer:ko,BloodstainedChivalry:wo,BraveHeart:Bo,CrimsonWitchOfFlames:Mo,DeepwoodMemories:jo,DefendersWill:xo,DesertPavilionChronicle:zo,EchoesOfAnOffering:Jo,EmblemOfSeveredFate:Yo,FlowerOfParadiseLost:sr,Gambler:or,GildedDreams:hr,GladiatorsFinale:_r,GoldenTroupe:Sr,HeartOfDepth:Or,HuskOfOpulentDreams:Br,Instructor:Mr,Lavawalker:jr,LuckyDog:xr,MaidenBeloved:zr,MarechausseeHunter:Jr,MartialArtist:Zr,NighttimeWhispersInTheEchoingWoods:ad,NoblesseOblige:dd,NymphsDream:ud,OceanHuedClam:gd,PaleFlame:kd,PrayersForDestiny:wd,PrayersForIllumination:Bd,PrayersForWisdom:Md,PrayersToSpringtime:jd,ResolutionOfSojourner:xd,RetracingBolide:zd,Scholar:Ud,ShimenawasReminiscence:Zd,SongOfDaysPast:ac,TenacityOfTheMillelith:dc,TheExile:mc,ThunderingFury:hc,Thundersoother:gc,TinyMiracle:vc,TravelingDoctor:wc,VermillionHereafter:Dc,ViridescentVenerer:Mc,VourukashasGlow:jc,WanderersTroupe:xc};function Jn(e){return ft[e]}const Ic=Object.fromEntries(Qn.map(e=>[e,[]]));ss.forEach(e=>{const h=Jn(e),$=Math.max(...h.rarity);Ic[$].push(e)});const Uc=as(Object.values(ft).map(e=>e.data));function Jc(e){const h={};return ss.forEach($=>{const I=Jn($),y=Object.keys(I.setEffects).map(v=>parseInt(v)).filter(v=>I.hasEnough(v,e));y.length&&(h[$]=y)}),h}const Wc=ft;export{no as a,Uc as b,Jc as d,Jn as g,Ic as s};
