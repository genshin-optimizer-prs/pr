import{k as Qn,p as E,bB as w,c_ as ss,f as b,bx as P,o as g,cz as Xn,ao as as}from"./index-b156c2f5.js";import{d as ut,p as t,T as De,R as d,r as ns,P as Yn,M as s,X as S,C as a,Q as J,V as l,Y as c,Z as H,O as i,_ as p,L as m,s as u,$ as f,a0 as _,J as z,k as Zn,a1 as eo,a2 as to,i as v,a3 as os,N as so}from"./index-eeac4f09.js";import{I as ao,C as rs}from"./ColoredText-92858416.js";import{S as no}from"./SqBadge-a7b52905.js";class n{constructor(h,$,W){this.getSlotName=y=>this.tr(`pieces.${y}.name`),this.getSlotDesc=y=>this.tr(`pieces.${y}.desc`),this.setEffectDesc=y=>this.tr(`setEffects.${y}`),this.setEffectDocument=y=>{var k;return(k=this.sheet.setEffects[y])==null?void 0:k.document},this.hasEnough=(y,k)=>(k.get(t.artSet[this.key]).value??0)>=y,this.sheet=$,this.key=h,this.data=W}get tr(){return n.tr(this.key)}get name(){return this.tr("setName")}get setName(){return this.tr("setName")}get nameRaw(){return this.sheet.name}get rarity(){return this.sheet.rarity}get slots(){switch(this.key){case"PrayersForDestiny":case"PrayersForIllumination":case"PrayersForWisdom":case"PrayersToSpringtime":return["circlet"];default:return[...Qn]}}get setEffects(){return this.sheet.setEffects}static trm(h){return $=>E(De,{ns:`artifact_${h}`,key18:$})}static tr(h){return $=>E(De,{ns:`artifact_${h}_gen`,key18:$})}static get(h){return Vc[h]}}const o=e=>{const h=$=>E(De,{ns:`artifact_${e}_gen`,key18:$});return $=>({title:h("setName"),icon:E(ao,{size:2,src:oo(e)}),action:E(no,{color:"success",children:d(`${$}set`)}),description:h(`setEffects.${$}`)})};function oo(e){return ut(e,"flower")||ut(e,"circlet")}function r(e,h={},$={}){return ns([Yn(h,e),{display:{[`artifact:${e}`]:$}}])}const Ne="Adventurer",$t=o(Ne),ds=s(t.artSet.Adventurer,2,1e3),cs=s(t.artSet.Adventurer,4,S(a(.3),t.total.hp)),ro=r(Ne,{premod:{hp:ds}},{heal:cs}),co={name:"Adventurer",rarity:[3],setEffects:{2:{document:[{header:$t(2),fields:[{node:ds}]}]},4:{document:[{header:$t(4),fields:[{node:J(cs,{name:l("healing"),variant:"heal"})}]}]}}},io=new n(Ne,co,ro),B="ArchaicPetra",_t=o(B),[,mo]=p("artifact",B),is=s(t.artSet.ArchaicPetra,2,a(.15)),[lo,ms]=c(B,"element"),ls=Object.fromEntries(H.map(e=>[`${e}_dmg_`,s(t.artSet.ArchaicPetra,4,i(e,ms,a(.35)))])),fo=r(B,{premod:{geo_dmg_:is},teamBuff:{premod:ls}}),ho={name:"Archaic Petra",rarity:[4,5],setEffects:{2:{document:[{header:_t(2),fields:[{node:is}]}]},4:{document:[{header:_t(4),path:lo,value:ms,teamBuff:!0,name:mo("condName"),states:Object.fromEntries(H.map(e=>[e,{name:E(rs,{color:e,children:l(`element.${e}`)}),fields:[{node:ls[`${e}_dmg_`]},{text:l("duration"),value:10,unit:"s"}]}]))}]}}},uo=new n(B,ho,fo),K="Berserker",gt=o(K),fs=m.info("critRate_"),hs=s(t.artSet.Berserker,2,a(.12),fs),[$o,us]=c(K,"hp"),$s=s(t.artSet.Berserker,4,i("70",us,a(.24)),fs),_o=r(K,{premod:{critRate_:u(hs,$s)}}),go={name:"Berserker",rarity:[3,4],setEffects:{2:{document:[{header:gt(2),fields:[{node:hs}]}]},4:{document:[{header:gt(4),path:$o,value:us,teamBuff:!0,name:d("lessPercentHP",{percent:70}),states:{70:{fields:[{node:$s}]}}}]}}},yo=new n(K,go,_o),D="BlizzardStrayer",yt=o(D),[,ke]=p("artifact",D),[po,_s]=c(D,"state"),gs=s(t.artSet.BlizzardStrayer,2,a(.15)),Te=s(t.artSet.BlizzardStrayer,4,f(_s,{cryo:a(.2),frozen:a(.4)},_)),So=r(D,{premod:{cryo_dmg_:gs},total:{critRate_:Te}}),ko={name:"Blizzard Strayer",rarity:[4,5],setEffects:{2:{document:[{header:yt(2),fields:[{node:gs}]}]},4:{document:[{header:yt(4),value:_s,path:po,name:ke("condName"),states:{cryo:{name:ke("condCryo"),fields:[{node:Te}]},frozen:{name:ke("condFrozen"),fields:[{node:Te}]}}}]}}},vo=new n(D,ko,So),Q="BloodstainedChivalry",pt=o(Q),ys=s(t.artSet.BloodstainedChivalry,2,a(.25)),[Eo,Fe]=c(Q,"defeat"),ps=s(t.artSet.BloodstainedChivalry,4,i("hit",Fe,a(.5))),Ss=s(t.artSet.BloodstainedChivalry,4,i("hit",Fe,a(1))),Oo=r(Q,{premod:{physical_dmg_:ys,charged_dmg_:ps,staminaChargedDec_:Ss}}),wo={name:"Bloodstained Chivalry",rarity:[4,5],setEffects:{2:{document:[{header:pt(2),fields:[{node:ys}]}]},4:{document:[{header:pt(4),path:Eo,value:Fe,name:d("afterDefeatEnemy",{percent:70}),states:{hit:{fields:[{node:ps},{node:Ss},{text:l("duration"),value:10,unit:"s"}]}}}]}}},bo=new n(Q,wo,Oo),X="BraveHeart",St=o(X),ks=s(t.artSet.BraveHeart,2,a(.18)),[Ho,vs]=c(X,"hp"),Es=s(t.artSet.BraveHeart,4,i("50",vs,a(.3))),Po=r(X,{premod:{atk_:ks,all_dmg_:Es}}),Bo={name:"Brave Heart",rarity:[3,4],setEffects:{2:{document:[{header:St(2),fields:[{node:ks}]}]},4:{document:[{header:St(4),path:Ho,value:vs,name:d("enemyGreaterPercentHP",{percent:50}),states:{50:{fields:[{node:Es}]}}}]}}},Do=new n(X,Bo,Po),Y="CrimsonWitchOfFlames",ve=o(Y),[To,Os]=c(Y,"stack"),ws=m.info("pyro_dmg_"),bs=s(t.artSet.CrimsonWitchOfFlames,2,a(.15),ws),Z=s(t.artSet.CrimsonWitchOfFlames,4,a(.4)),Hs={...Z},Ps={...Z},Ce=s(t.artSet.CrimsonWitchOfFlames,4,a(.15)),Bs={...Ce},Ds=w(1,3),Ts=s(t.artSet.CrimsonWitchOfFlames,4,f(Os,Object.fromEntries(Ds.map(e=>[e,a(.15*e/2)])),_),ws),Ao=r(Y,{premod:{pyro_dmg_:u(bs,Ts),overloaded_dmg_:Z,burning_dmg_:Hs,vaporize_dmg_:Ce,melt_dmg_:Bs,burgeon_dmg_:Ps}}),Mo={name:"Crimson Witch of Flames",rarity:[4,5],setEffects:{2:{document:[{header:ve(2),fields:[{node:bs}]}]},4:{document:[{header:ve(4),fields:[{node:Z},{node:Hs},{node:Ps},{node:Ce},{node:Bs}]},{header:ve(4),value:Os,path:To,name:d("afterUse.skill"),states:Object.fromEntries(Ds.map(e=>[e,{name:d("stack",{count:e}),fields:[{node:Ts},{text:l("duration"),value:10,unit:"s"}]}]))}]}}},No=new n(Y,Mo,Ao),ee="DeepwoodMemories",kt=o(ee),As=s(t.artSet.DeepwoodMemories,2,.15),[Fo,Ms]=c(ee,"set4"),Ns=s(t.artSet.DeepwoodMemories,4,i(Ms,"on",-.3)),Co=r(ee,{premod:{dendro_dmg_:As},teamBuff:{premod:{dendro_enemyRes_:Ns}}}),jo={name:"Deepwood memories",rarity:[4,5],setEffects:{2:{document:[{header:kt(2),fields:[{node:As}]}]},4:{document:[{header:kt(4),path:Fo,value:Ms,teamBuff:!0,name:d("hitOp.skillOrBurst"),states:{on:{fields:[{node:Ns},{text:l("duration"),value:8,unit:"s"}]}}}]}}},Ro=new n(ee,jo,Co),je="DefendersWill",vt=o(je),Fs=s(t.artSet.DefendersWill,2,a(.3)),Cs=ss(b,e=>[`${e}_res_`,s(t.artSet.DefendersWill,4,s(z[e],1,a(.3)))]),xo=r(je,{premod:{def_:Fs,...Cs}}),Go={name:"Defender's Will",rarity:[3,4],setEffects:{2:{document:[{header:vt(2),fields:[{node:Fs}]}]},4:{document:[{header:vt(4),fields:Object.values(Cs).map(e=>({node:e}))}]}}},Io=new n(je,Go,xo),te="DesertPavilionChronicle",Et=o(te),js=s(t.artSet.DesertPavilionChronicle,2,.15),[Wo,Re]=c(te,"set4"),Rs=s(t.artSet.DesertPavilionChronicle,4,i(Re,"on",a(.1))),se=s(t.artSet.DesertPavilionChronicle,4,i(Re,"on",a(.4))),xs={...se},Gs={...se},Vo=r(te,{premod:{anemo_dmg_:js,atkSPD_:Rs,normal_dmg_:se,charged_dmg_:xs,plunging_dmg_:Gs}}),zo={name:"Desert Pavilion Chronicle",rarity:[4,5],setEffects:{2:{document:[{header:Et(2),fields:[{node:js}]}]},4:{document:[{header:Et(4),path:Wo,value:Re,teamBuff:!0,name:d("hitOp.charged"),states:{on:{fields:[{node:Rs},{node:se},{node:xs},{node:Gs},{text:l("duration"),value:15,unit:"s"}]}}}]}}},Lo=new n(te,zo,Vo),T="EchoesOfAnOffering",Ot=o(T),[,Ee]=p("artifact",T),Is=s(t.artSet.EchoesOfAnOffering,2,a(.18)),[qo,Ws]=c(T,"mode"),Ae=s(t.artSet.EchoesOfAnOffering,4,S(f(Ws,{on:a(.7),avg:a(.7*.50204)},_),t.total.atk)),Uo=r(T,{premod:{atk_:Is,normal_dmgInc:Ae}}),Jo={name:"Echoes of an Offering",rarity:[4,5],setEffects:{2:{document:[{header:Ot(2),fields:[{node:Is}]}]},4:{document:[{header:Ot(4),value:Ws,path:qo,name:Ee("mode"),states:{on:{name:Ee("always"),fields:[{node:Ae}]},avg:{name:Ee("avg"),fields:[{node:Ae}]}}}]}}},Ko=new n(T,Jo,Uo),xe="EmblemOfSeveredFate",wt=o(xe),Vs=s(t.artSet.EmblemOfSeveredFate,2,a(.2)),Me=s(t.artSet.EmblemOfSeveredFate,4,Zn(a(.75),S(a(.25),t.premod.enerRech_))),Qo=r(xe,{premod:{enerRech_:Vs,burst_dmg_:Me}},{burstBonus:Me}),Xo={name:"Emblem of Severed Fate",rarity:[4,5],setEffects:{2:{document:[{header:wt(2),fields:[{node:Vs}]}]},4:{document:[{header:wt(4),fields:[{node:Me}]}]}}},Yo=new n(xe,Xo,Qo),A="FlowerOfParadiseLost",[,Zo]=p("artifact",A),Oe=o(A),zs=s(t.artSet.FlowerOfParadiseLost,2,80),ae=s(t.artSet.FlowerOfParadiseLost,4,a(.4),m.info("bloom_dmg_")),Ls={...ae,info:m.info("hyperbloom_dmg_")},qs={...ae,info:m.info("burgeon_dmg_")},[er,Us]=c(A,"stacks"),Js=w(1,4),ne=s(t.artSet.FlowerOfParadiseLost,4,f(Us,Object.fromEntries(Js.map(e=>[e,S(e,a(.1))])),_,m.info("bloom_dmg_"))),Ks={...ne,info:m.info("hyperbloom_dmg_")},Qs={...ne,info:m.info("burgeon_dmg_")},tr=r(A,{premod:{eleMas:zs,bloom_dmg_:u(ae,ne),hyperbloom_dmg_:u(Ls,Ks),burgeon_dmg_:u(qs,Qs)}}),sr={name:"Flower of Paradise Lost",rarity:[4,5],setEffects:{2:{document:[{header:Oe(2),fields:[{node:zs}]}]},4:{document:[{header:Oe(4),fields:[{node:ae},{node:Ls},{node:qs}]},{header:Oe(4),path:er,value:Us,name:Zo("condName"),states:Object.fromEntries(Js.map(e=>[e,{name:d("stack",{count:e}),fields:[{node:ne},{node:Ks},{node:Qs},{text:l("duration"),value:10,unit:"s"}]}]))}]}}},ar=new n(A,sr,tr),Ge="Gambler",bt=o(Ge),Xs=s(t.artSet.Gambler,2,a(.2)),nr=r(Ge,{premod:{skill_dmg_:Xs}}),or={name:"Gambler",rarity:[3,4],setEffects:{2:{document:[{header:bt(2),fields:[{node:Xs}]}]},4:{document:[{header:bt(4),fields:[]}]}}},rr=new n(Ge,or,nr),O="GildedDreams",V=o(O),[,Ht]=p("artifact",O),Ys=s(t.artSet.GildedDreams,2,80,m.info("eleMas")),[dr,Ie]=c(O,"passive"),Pt=f(t.charEle,z,to),cr=s(Pt,2,u(Pt,-1)),ir=u(...b.map(e=>s(z[e],1,eo(e,t.charEle,z[e])))),[mr,Zs]=c(O,"overrideOther"),L=P(0,3),Bt=f(Zs,g(L,e=>v(e)),void 0),[lr,ea]=c(O,"overrideSame"),Dt=f(ea,g(L,e=>v(e)),void 0),ta=s(t.artSet.GildedDreams,4,i(Ie,"on",S(a(.14),os(Dt,void 0,cr,Dt)))),sa=s(t.artSet.GildedDreams,4,i(Ie,"on",S(50,os(Bt,void 0,ir,Bt)),m.info("eleMas"))),fr=r(O,{premod:{eleMas:u(Ys,sa),atk_:ta}}),hr={name:"Gilded Dreams",rarity:[4,5],setEffects:{2:{document:[{header:V(2),fields:[{node:Ys}]}]},4:{document:[{header:V(4),teamBuff:!0,path:dr,value:Ie,name:d("afterReaction"),states:{on:{fields:[{node:ta},{node:sa},{text:l("duration"),value:8,unit:"s"},{text:l("cd"),value:8,unit:"s"}]}}},{header:V(4),teamBuff:!0,path:lr,value:ea,name:Ht("overrideSameCond"),states:g(L,e=>({name:d("members",{count:e}),fields:[]}))},{header:V(4),teamBuff:!0,path:mr,value:Zs,name:Ht("overrideOtherCond"),states:g(L,e=>({name:d("members",{count:e}),fields:[]}))}]}}},ur=new n(O,hr,fr),We="GladiatorsFinale",Tt=o(We),aa=s(t.artSet.GladiatorsFinale,2,a(.18)),na=s(t.artSet.GladiatorsFinale,4,f(t.weaponType,{sword:a(.35),polearm:a(.35),claymore:a(.35)},_)),$r=r(We,{premod:{atk_:aa,normal_dmg_:na}}),_r={name:"Gladiator's Finale",rarity:[4,5],setEffects:{2:{document:[{header:Tt(2),fields:[{node:aa}]}]},4:{document:[{header:Tt(4),fields:[{node:na}]}]}}},gr=new n(We,_r,$r),oe="GoldenTroupe",we=o(oe),oa=s(t.artSet.GoldenTroupe,2,.2,m.info("skill_dmg_")),ra=s(t.artSet.GoldenTroupe,4,.25,m.info("skill_dmg_")),[yr,da]=c(oe,"set4"),ca=s(t.artSet.GoldenTroupe,4,i(da,"on",.25,m.info("skill_dmg_"))),pr=r(oe,{premod:{skill_dmg_:u(oa,ra,ca)}}),Sr={name:"Golden Troupe",rarity:[4,5],setEffects:{2:{document:[{header:we(2),fields:[{node:oa}]}]},4:{document:[{header:we(4),fields:[{node:ra}]},{header:we(4),path:yr,value:da,name:d("charOffField"),states:{on:{fields:[{node:ca}]}}}]}}},kr=new n(oe,Sr,pr),re="HeartOfDepth",At=o(re),ia=s(t.artSet.HeartOfDepth,2,a(.15)),[vr,ma]=c(re,"skill"),Ve=s(t.artSet.HeartOfDepth,4,i("cast",ma,a(.3))),la={...Ve},Er=r(re,{premod:{hydro_dmg_:ia,normal_dmg_:Ve,charged_dmg_:la}}),Or={name:"Heart of Depth",rarity:[4,5],setEffects:{2:{document:[{header:At(2),fields:[{node:ia}]}]},4:{document:[{header:At(4),path:vr,value:ma,name:d("afterUse.skill"),states:{cast:{fields:[{node:Ve},{node:la},{text:l("duration"),value:15,unit:"s"}]}}}]}}},wr=new n(re,Or,Er),M="HuskOfOpulentDreams",Mt=o(M),[,br]=p("artifact",M),[Hr,ze]=c(M,"stack"),fa=m.info("def_"),ha=s(t.artSet.HuskOfOpulentDreams,2,a(.3),fa),Le=w(1,4),ua=s(t.artSet.HuskOfOpulentDreams,4,f(ze,Object.fromEntries(Le.map(e=>[e,a(.06*e)])),_),fa),$a=s(t.artSet.HuskOfOpulentDreams,4,f(ze,Object.fromEntries(Le.map(e=>[e,a(.06*e)])),_)),Pr=r(M,{premod:{def_:u(ha,ua),geo_dmg_:$a}}),Br={name:"Husk of Opulent Dreams",rarity:[4,5],setEffects:{2:{document:[{header:Mt(2),fields:[{node:ha}]}]},4:{document:[{header:Mt(4),value:ze,path:Hr,teamBuff:!0,name:br("condName"),states:Object.fromEntries(Le.map(e=>[e,{name:d("stack",{count:e}),fields:[{node:ua},{node:$a}]}]))}]}}},Dr=new n(M,Br,Pr),de="Instructor",Nt=o(de),[Tr,_a]=c(de,"set4"),ga=s(t.artSet.Instructor,2,80),ya=s(t.artSet.Instructor,4,i("on",_a,120)),Ar=r(de,{premod:{eleMas:ga},teamBuff:{premod:{eleMas:ya}}}),Mr={name:"Instructor",rarity:[3,4],setEffects:{2:{document:[{header:Nt(2),fields:[{node:ga}]}]},4:{document:[{header:Nt(4),teamBuff:!0,value:_a,path:Tr,name:d("afterReaction"),states:{on:{fields:[{node:ya},{text:l("duration"),value:8,unit:"s"}]}}}]}}},Nr=new n(de,Mr,Ar),ce="Lavawalker",Ft=o(ce),[Fr,pa]=c(ce,"state"),Sa=s(t.artSet.Lavawalker,2,a(.4)),ka=s(t.artSet.Lavawalker,4,i("on",pa,a(.35))),Cr=r(ce,{premod:{pyro_res_:Sa,all_dmg_:ka}}),jr={name:"Lavawalker",rarity:[4,5],setEffects:{2:{document:[{header:Ft(2),fields:[{node:Sa}]}]},4:{document:[{header:Ft(4),value:pa,path:Fr,name:d("enemyAffected.burningOrPyro"),states:{on:{fields:[{node:ka}]}}}]}}},Rr=new n(ce,jr,Cr),qe="LuckyDog",Ct=o(qe),va=s(t.artSet.LuckyDog,2,100),Ea=s(t.artSet.LuckyDog,4,300),xr=r(qe,{premod:{def:va}},{heal:Ea}),Gr={name:"Lucky Dog",rarity:[3],setEffects:{2:{document:[{header:Ct(2),fields:[{node:va}]}]},4:{document:[{header:Ct(4),fields:[{node:J(Ea,{name:l("healing"),variant:"heal"})}]}]}}},Ir=new n(qe,Gr,xr),ie="MaidenBeloved",jt=o(ie),[Wr,Oa]=c(ie,"state"),wa=s(t.artSet.MaidenBeloved,2,a(.15)),ba=s(t.artSet.MaidenBeloved,4,i("on",Oa,a(.2))),Vr=r(ie,{premod:{heal_:wa},teamBuff:{premod:{incHeal_:ba}}}),zr={name:"Maiden Beloved",rarity:[4,5],setEffects:{2:{document:[{header:jt(2),fields:[{node:wa}]}]},4:{document:[{header:jt(4),teamBuff:!0,value:Oa,path:Wr,name:d("afterUse.skillOrBurst"),states:{on:{fields:[{node:ba},{text:l("duration"),value:10,unit:"s"}]}}}]}}},Lr=new n(ie,zr,Vr),me="MarechausseeHunter",Rt=o(me),Ue=s(t.artSet.MarechausseeHunter,2,.15),Ha={...Ue},[qr,Pa]=c(me,"set4"),Ba=P(1,3),Da=s(t.artSet.MarechausseeHunter,4,f(Pa,g(Ba,e=>v(e*.12)),_)),Ur=r(me,{premod:{normal_dmg_:Ue,charged_dmg_:Ha,critRate_:Da}}),Jr={name:"Marechaussee Hunter",rarity:[4,5],setEffects:{2:{document:[{header:Rt(2),fields:[{node:Ue},{node:Ha}]}]},4:{document:[{header:Rt(4),path:qr,value:Pa,name:d("hpChange"),states:g(Ba,e=>({name:d("stack",{count:e}),fields:[{node:Da},{text:l("duration"),value:5,unit:"s"}]}))}]}}},Kr=new n(me,Jr,Ur),le="MartialArtist",xt=o(le),[Qr,Je]=c(le,"state"),Ta=s(t.artSet.MartialArtist,2,a(.15),m.info("normal_dmg_")),Aa=s(t.artSet.MartialArtist,2,a(.15),m.info("charged_dmg_")),Ma=s(t.artSet.MartialArtist,4,i("on",Je,a(.25),m.info("normal_dmg_"))),Na=s(t.artSet.MartialArtist,4,i("on",Je,a(.25),m.info("charged_dmg_"))),Xr=r(le,{premod:{normal_dmg_:u(Ta,Ma),charged_dmg_:u(Aa,Na)}}),Yr={name:"Martial Artist",rarity:[3,4],setEffects:{2:{document:[{header:xt(2),fields:[{node:Ta},{node:Aa}]}]},4:{document:[{header:xt(4),value:Je,path:Qr,name:d("afterUse.skill"),states:{on:{fields:[{node:Ma},{node:Na},{text:l("duration"),value:8,unit:"s"}]}}}]}}},Zr=new n(le,Yr,Xr),N="NighttimeWhispersInTheEchoingWoods",be=o(N),Fa=s(t.artSet.NighttimeWhispersInTheEchoingWoods,2,.18),[ed,q]=c(N,"afterSkill"),Ca=s(t.artSet.NighttimeWhispersInTheEchoingWoods,4,i(q,"on",.2,m.info("geo_dmg_"))),[td,ja]=c(N,"crystallize"),Ra=s(t.artSet.NighttimeWhispersInTheEchoingWoods,4,i(q,"on",i(ja,"on",.2*1.5,m.info("geo_dmg_")))),sd=r(N,{premod:{atk_:Fa,geo_dmg_:u(Ca,Ra)}}),ad={name:"Nighttime Whispers In The Echoing Woods",rarity:[4,5],setEffects:{2:{document:[{header:be(2),fields:[{node:Fa}]}]},4:{document:[{header:be(4),value:q,path:ed,name:d("hitOp.skill"),states:{on:{fields:[{node:Ca}]}}},{header:be(4),value:ja,path:td,canShow:i(q,"on",1),name:d("protectedByShieldCrystal"),states:{on:{fields:[{node:Ra}]}}}]}}},nd=new n(N,ad,sd),fe="NoblesseOblige",Gt=o(fe),xa=s(t.artSet.NoblesseOblige,2,a(.2)),[od,Ga]=c(fe,"set4"),Ia=s(t.artSet.NoblesseOblige,4,i(Ga,"on",a(.2))),rd=r(fe,{premod:{burst_dmg_:xa},teamBuff:{premod:{atk_:Ia}}}),dd={name:"Noblesse Oblige",rarity:[4,5],setEffects:{2:{document:[{header:Gt(2),fields:[{node:xa}]}]},4:{document:[{header:Gt(4),teamBuff:!0,value:Ga,path:od,name:d("afterUse.burst"),states:{on:{fields:[{node:Ia},{text:l("duration"),value:12,unit:"s"}]}}}]}}},cd=new n(fe,dd,rd),F="NymphsDream",It=o(F),[,id]=p("artifact",F),Wa=s(t.artSet.NymphsDream,2,.15,m.info("hydro_dmg_")),[md,Ke]=c(F,"set4"),Qe=P(1,3),ld=[.07,.16,.25],fd=[.04,.09,.15],Va=s(t.artSet.NymphsDream,4,f(Ke,g(Qe,e=>v(ld[e-1])),_)),za=s(t.artSet.NymphsDream,4,f(Ke,g(Qe,e=>v(fd[e-1])),_),m.info("hydro_dmg_")),hd=r(F,{premod:{hydro_dmg_:u(Wa,za),atk_:Va}}),ud={name:"Nymph's Dream",rarity:[4,5],setEffects:{2:{document:[{header:It(2),fields:[{node:Wa}]}]},4:{document:[{header:It(4),path:md,value:Ke,teamBuff:!0,name:id("condName"),states:g(Qe,e=>({name:d("stack",{count:e}),fields:[{node:Va},{node:za},{text:l("duration"),value:8,unit:"s"}]}))}]}}},$d=new n(F,ud,hd),he="OceanHuedClam",Wt=o(he),La=s(t.artSet.OceanHuedClam,2,a(.15)),qa=s(t.artSet.OceanHuedClam,4,S(S(a(.9),3e4),t.enemy.physical_resMulti_)),_d=r(he,{premod:{heal_:La}},{heal:qa}),gd={name:"Ocean-Hued Clam",rarity:[4,5],setEffects:{2:{document:[{header:Wt(2),fields:[{node:La}]}]},4:{document:[{header:Wt(4),fields:[{node:J(qa,{name:n.trm(he)("condName"),variant:"physical"})}]}]}}},yd=new n(he,gd,_d),ue="PaleFlame",Vt=o(ue),[pd,Xe]=c(ue,"stacks"),Ua=m.info("physical_dmg_"),Ja=s(t.artSet.PaleFlame,2,a(.25),Ua),Ye=w(1,2),Ka=s(t.artSet.PaleFlame,4,f(Xe,Object.fromEntries(Ye.map(e=>[e,a(.09*e)])),_)),Qa=s(t.artSet.PaleFlame,4,f(Xe,Object.fromEntries(Ye.map(e=>[e,i(e,2,a(.25))])),_),Ua),Sd=r(ue,{premod:{physical_dmg_:u(Ja,Qa),atk_:Ka}}),kd={name:"Pale Flame",rarity:[4,5],setEffects:{2:{document:[{header:Vt(2),fields:[{node:Ja}]}]},4:{document:[{header:Vt(4),value:Xe,path:pd,teamBuff:!0,name:d("hitOp.skill"),states:Object.fromEntries(Ye.map(e=>[e,{name:e.toString(),fields:[{node:Ka},{node:Qa},{text:l("duration"),value:7,unit:"s"}]}]))}]}}},vd=new n(ue,kd,Sd),Ze="PrayersForDestiny",Ed=o(Ze),Od=r(Ze),wd={name:"Prayers for Destiny",rarity:[3,4],setEffects:{1:{document:[{header:Ed(1),fields:[]}]}}},bd=new n(Ze,wd,Od),et="PrayersForIllumination",Hd=o(et),Pd=r(et),Bd={name:"Prayers for Illumination",rarity:[3,4],setEffects:{1:{document:[{header:Hd(1),fields:[]}]}}},Dd=new n(et,Bd,Pd),tt="PrayersForWisdom",Td=o(tt),Ad=r(tt),Md={name:"Prayers for Wisdom",rarity:[3,4],setEffects:{1:{document:[{header:Td(1),fields:[]}]}}},Nd=new n(tt,Md,Ad),st="PrayersToSpringtime",Fd=o(st),Cd=r(st),jd={name:"Prayers to Springtime",rarity:[3,4],setEffects:{1:{document:[{header:Fd(1),fields:[]}]}}},Rd=new n(st,jd,Cd),at="ResolutionOfSojourner",zt=o(at),Xa=s(t.artSet.ResolutionOfSojourner,2,a(.18)),Ya=s(t.artSet.ResolutionOfSojourner,4,a(.3)),xd=r(at,{premod:{atk_:Xa,charged_critRate_:Ya}}),Gd={name:"Resolution of Sojourner",rarity:[3,4],setEffects:{2:{document:[{header:zt(2),fields:[{node:Xa}]}]},4:{document:[{header:zt(4),fields:[{node:Ya}]}]}}},Id=new n(at,Gd,xd),$e="RetracingBolide",Lt=o($e),[Wd,nt]=c($e,"state"),Za=s(t.artSet.RetracingBolide,2,a(.35)),en=s(t.artSet.RetracingBolide,4,i("on",nt,a(.4))),tn=s(t.artSet.RetracingBolide,4,i("on",nt,a(.4))),Vd=r($e,{premod:{shield_:Za,normal_dmg_:en,charged_dmg_:tn}}),zd={name:"Retracing Bolide",rarity:[4,5],setEffects:{2:{document:[{header:Lt(2),fields:[{node:Za}]}]},4:{document:[{header:Lt(4),value:nt,path:Wd,name:d("protectedByShield"),states:{on:{fields:[{node:en},{node:tn}]}}}]}}},Ld=new n($e,zd,Vd),ot="Scholar",qt=o(ot),sn=s(t.artSet.Scholar,2,a(.2)),qd=r(ot,{premod:{enerRech_:sn}}),Ud={name:"Scholar",rarity:[3,4],setEffects:{2:{document:[{header:qt(2),fields:[{node:sn}]}]},4:{document:[{header:qt(4),fields:[]}]}}},Jd=new n(ot,Ud,qd),C="ShimenawasReminiscence",Ut=o(C),[,Kd]=p("artifact",C),[Qd,an]=c(C,"usedEnergy"),nn=s(t.artSet.ShimenawasReminiscence,2,a(.18)),_e=s(t.artSet.ShimenawasReminiscence,4,i("used",an,a(.5))),on={..._e},rn={..._e},Xd=r(C,{premod:{atk_:nn,normal_dmg_:_e,charged_dmg_:on,plunging_dmg_:rn}}),Yd={name:"Shimenawa's Reminiscence",rarity:[4,5],setEffects:{2:{document:[{header:Ut(2),fields:[{node:nn}]}]},4:{document:[{header:Ut(4),value:an,path:Qd,name:Kd("afterUseEnergy"),states:{used:{fields:[{node:_e},{node:on},{node:rn},{text:l("duration"),value:10,unit:"s"}]}}}]}}},Zd=new n(C,Yd,Xd),j="SongOfDaysPast",Jt=o(j),[,ec]=p("artifact",j),dn=s(t.artSet.SongOfDaysPast,2,.15),cn=P(1e3,15e3,1e3),[tc,mn]=c(j,"healing"),R=s(t.artSet.SongOfDaysPast,4,f(mn,g(cn,e=>v(e*.08)),_)),ln={...R},fn={...R},hn={...R},un={...R},$n={...R},sc=r(j,{premod:{heal_:dn},teamBuff:{premod:{normal_dmgInc:ln,charged_dmgInc:fn,plunging_dmgInc:hn,skill_dmgInc:un,burst_dmgInc:$n}}}),ac={name:"Song of Days Past",rarity:[4,5],setEffects:{2:{document:[{header:Jt(2),fields:[{node:dn}]}]},4:{document:[{header:Jt(4),value:mn,path:tc,name:ec("condName"),teamBuff:!0,states:g(cn,e=>({name:`${e}`,fields:[{node:ln},{node:fn},{node:hn},{node:un},{node:$n},{text:d("triggerQuota"),value:5},{text:l("duration"),value:10,unit:"s"}]}))}]}}},nc=new n(j,ac,sc),ge="TenacityOfTheMillelith",Kt=o(ge),_n=s(t.artSet.TenacityOfTheMillelith,2,a(.2)),[oc,rt]=c(ge,"skill"),gn=s(t.artSet.TenacityOfTheMillelith,4,i("cast",rt,a(.2))),yn=s(t.artSet.TenacityOfTheMillelith,4,i("cast",rt,a(.3))),rc=r(ge,{premod:{hp_:_n},teamBuff:{premod:{atk_:gn,shield_:yn}}}),dc={name:"Tenacity of the Millelith",rarity:[4,5],setEffects:{2:{document:[{header:Kt(2),fields:[{node:_n}]}]},4:{document:[{header:Kt(4),teamBuff:!0,path:oc,value:rt,name:d("hitOp.skill"),states:{cast:{fields:[{node:gn},{node:yn},{text:l("duration"),value:3,unit:"s"}]}}}]}}},cc=new n(ge,dc,rc),dt="TheExile",Qt=o(dt),pn=s(t.artSet.TheExile,2,a(.2)),ic=r(dt,{premod:{enerRech_:pn}}),mc={name:"The Exile",rarity:[3,4],setEffects:{2:{document:[{header:Qt(2),fields:[{node:pn}]}]},4:{document:[{header:Qt(4),fields:[]}]}}},lc=new n(dt,mc,ic),ct="ThunderingFury",Xt=o(ct),Sn=s(t.artSet.ThunderingFury,2,a(.15)),x=s(t.artSet.ThunderingFury,4,a(.4)),kn={...x},vn={...x},En={...x},On=s(t.artSet.ThunderingFury,4,a(.2)),fc=r(ct,{premod:{electro_dmg_:Sn,overloaded_dmg_:x,electrocharged_dmg_:kn,superconduct_dmg_:vn,hyperbloom_dmg_:En,aggravate_dmg_:On}}),hc={name:"Thundering Fury",rarity:[4,5],setEffects:{2:{document:[{header:Xt(2),fields:[{node:Sn}]}]},4:{document:[{header:Xt(4),fields:[{node:x},{node:kn},{node:vn},{node:En},{node:On}]}]}}},uc=new n(ct,hc,fc),ye="Thundersoother",Yt=o(ye),[$c,wn]=c(ye,"state"),bn=s(t.artSet.Thundersoother,2,a(.4)),Hn=s(t.artSet.Thundersoother,4,i("on",wn,a(.35))),_c=r(ye,{premod:{electro_res_:bn,all_dmg_:Hn}}),gc={name:"Thundersoother",rarity:[4,5],setEffects:{2:{document:[{header:Yt(2),fields:[{node:bn}]}]},4:{document:[{header:Yt(4),value:wn,path:$c,name:d("enemyAffected.electro"),states:{on:{fields:[{node:Hn}]}}}]}}},yc=new n(ye,gc,_c),G="TinyMiracle",Zt=o(G),[,pc]=p("artifact",G),[Sc,Pn]=c(G,"element"),Bn=Object.fromEntries(b.map(e=>[e,s(t.artSet.TinyMiracle,2,a(.2),m.info(`${e}_res_`))])),Dn=Object.fromEntries(b.map(e=>[e,s(t.artSet.TinyMiracle,4,i(Pn,e,a(.3)),m.info(`${e}_res_`))])),kc=r(G,{premod:Object.fromEntries(b.map(e=>[`${e}_res_`,u(Bn[e],Dn[e])]))}),vc={name:"Tiny Miracle",rarity:[3,4],setEffects:{2:{document:[{header:Zt(2),fields:Object.values(Bn).map(e=>({node:e}))}]},4:{document:[{header:Zt(4),path:Sc,value:Pn,teamBuff:!0,name:pc("condName"),states:Object.fromEntries(b.map(e=>[e,{name:E(rs,{color:e,children:l(`element.${e}`)}),fields:[...Object.values(Dn).map(h=>({node:h})),{text:l("duration"),value:10,unit:"s"}]}]))}]}}},Ec=new n(G,vc,kc),it="TravelingDoctor",es=o(it),Tn=s(t.artSet.TravelingDoctor,2,a(.2)),An=s(t.artSet.TravelingDoctor,4,S(a(.2),t.total.hp)),Oc=r(it,{premod:{incHeal_:Tn}},{heal:An}),wc={name:"Traveling Doctor",rarity:[3],setEffects:{2:{document:[{header:es(2),fields:[{node:Tn}]}]},4:{document:[{header:es(4),fields:[{node:J(An,{name:l("healing"),variant:"heal"})}]}]}}},bc=new n(it,wc,Oc),I="VermillionHereafter",He=o(I),Mn=s(t.artSet.VermillionHereafter,2,a(.18),m.info("atk_")),[Hc,U]=c(I,"afterBurst"),Nn=s(t.artSet.VermillionHereafter,4,i(U,"on",a(.08)),m.info("atk_")),[Pc,Fn]=c(I,"stacks"),Cn=s(t.artSet.VermillionHereafter,4,i(U,"on",f(Fn,Object.fromEntries(w(1,4).map(e=>[e,a(.1*e)])),_),m.info("atk_"))),Bc=r(I,{premod:{atk_:u(Mn,Nn,Cn)}}),Dc={name:"Vermillion Hereafter",rarity:[4,5],setEffects:{2:{document:[{header:He(2),fields:[{node:Mn}]}]},4:{document:[{header:He(4),value:U,path:Hc,teamBuff:!0,name:d("afterUse.burst"),states:{on:{fields:[{node:Nn}]}}},{header:He(4),value:Fn,path:Pc,teamBuff:!0,name:d("stacks"),canShow:i(U,"on",1),states:Object.fromEntries(w(1,4).map(e=>[e,{name:d("stack",{count:e}),fields:[{node:Cn}]}]))}]}}},Tc=new n(I,Dc,Bc),pe="ViridescentVenerer",Pe=o(pe),jn=s(t.artSet.ViridescentVenerer,2,a(.15)),Rn=s(t.artSet.ViridescentVenerer,4,a(.6)),xn=g(H,e=>[pe,`swirl${e}`]),Gn=g(H,e=>so(xn[e])),In=ss(H,e=>[`${e}_enemyRes_`,s(t.artSet.ViridescentVenerer,4,i(e,Gn[e],a(-.4)))]),Ac=r(pe,{premod:{anemo_dmg_:jn,swirl_dmg_:Rn},teamBuff:{premod:{...In}}}),Mc={name:"Viridescent Venerer",rarity:[4,5],setEffects:{2:{document:[{header:Pe(2),fields:[{node:jn}]}]},4:{document:[{header:Pe(4),fields:[{node:Rn}]},{header:Pe(4),teamBuff:!0,states:Object.fromEntries(H.map(e=>[e,{value:Gn[e],path:xn[e],name:d(`swirlReaction.${e}`),fields:[{node:In[`${e}_enemyRes_`]},{text:d(`effectDuration.${e}`),value:10,unit:"s"}]}]))}]}}},Nc=new n(pe,Mc,Ac),Se="VourukashasGlow",Be=o(Se),Wn=s(t.artSet.VourukashasGlow,2,.2),Vn=s(t.artSet.VourukashasGlow,4,.1,m.info("skill_dmg_")),zn=s(t.artSet.VourukashasGlow,4,.1,m.info("burst_dmg_")),[Fc,mt]=c(Se,"set4"),lt=P(1,5),Ln=s(t.artSet.VourukashasGlow,4,f(mt,g(lt,e=>v(e*.08)),_),m.info("skill_dmg_")),qn=s(t.artSet.VourukashasGlow,4,f(mt,g(lt,e=>v(e*.08)),_),m.info("burst_dmg_")),Cc=r(Se,{premod:{hp_:Wn,skill_dmg_:u(Vn,Ln),burst_dmg_:u(zn,qn)}}),jc={name:"Vourukasha's Glow",rarity:[4,5],setEffects:{2:{document:[{header:Be(2),fields:[{node:Wn}]}]},4:{document:[{header:Be(4),fields:[{node:Vn},{node:zn}]},{header:Be(4),path:Fc,value:mt,name:d("takeDmg"),states:g(lt,e=>({name:d("stack",{count:e}),fields:[{node:Ln},{node:qn},{text:l("duration"),value:5,unit:"s"}]}))}]}}},Rc=new n(Se,jc,Cc),ft="WanderersTroupe",ts=o(ft),Un=s(t.artSet.WanderersTroupe,2,80),Jn=s(t.artSet.WanderersTroupe,4,f(t.weaponType,{catalyst:a(.35),bow:a(.35)},_)),xc=r(ft,{premod:{eleMas:Un,charged_dmg_:Jn}}),Gc={name:"Wanderer's Troupe",rarity:[4,5],setEffects:{2:{document:[{header:ts(2),fields:[{node:Un}]}]},4:{document:[{header:ts(4),fields:[{node:Jn}]}]}}},Ic=new n(ft,Gc,xc),ht={Adventurer:io,ArchaicPetra:uo,Berserker:yo,BlizzardStrayer:vo,BloodstainedChivalry:bo,BraveHeart:Do,CrimsonWitchOfFlames:No,DeepwoodMemories:Ro,DefendersWill:Io,DesertPavilionChronicle:Lo,EchoesOfAnOffering:Ko,EmblemOfSeveredFate:Yo,FlowerOfParadiseLost:ar,Gambler:rr,GildedDreams:ur,GladiatorsFinale:gr,GoldenTroupe:kr,HeartOfDepth:wr,HuskOfOpulentDreams:Dr,Instructor:Nr,Lavawalker:Rr,LuckyDog:Ir,MaidenBeloved:Lr,MarechausseeHunter:Kr,MartialArtist:Zr,NighttimeWhispersInTheEchoingWoods:nd,NoblesseOblige:cd,NymphsDream:$d,OceanHuedClam:yd,PaleFlame:vd,PrayersForDestiny:bd,PrayersForIllumination:Dd,PrayersForWisdom:Nd,PrayersToSpringtime:Rd,ResolutionOfSojourner:Id,RetracingBolide:Ld,Scholar:Jd,ShimenawasReminiscence:Zd,SongOfDaysPast:nc,TenacityOfTheMillelith:cc,TheExile:lc,ThunderingFury:uc,Thundersoother:yc,TinyMiracle:Ec,TravelingDoctor:bc,VermillionHereafter:Tc,ViridescentVenerer:Nc,VourukashasGlow:Rc,WanderersTroupe:Ic};function Kn(e){return ht[e]}const Wc=Object.fromEntries(Xn.map(e=>[e,[]]));as.forEach(e=>{const h=Kn(e),$=Math.max(...h.rarity);Wc[$].push(e)});const Jc=ns(Object.values(ht).map(e=>e.data));function Kc(e){const h={};return as.forEach($=>{const W=Kn($),y=Object.keys(W.setEffects).map(k=>parseInt(k)).filter(k=>W.hasEnough(k,e));y.length&&(h[$]=y)}),h}const Vc=ht;export{oo as a,Jc as b,Kc as d,Kn as g,Wc as s};
