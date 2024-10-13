import{fv as ke,bo as Qe,bn as Je,bp as De,bv as R,r as l,br as ea,bs as aa,bq as le,fw as Be,bt as je,j as q,bu as ra,d as e,bg as ta,a as F,fx as Oe,cj as na,v as D,bI as J,bJ as Ae,D as ee,bZ as x,G as L,h as m,bN as k,aY as oa,e as h,bW as Te,bP as me,T as g,b as ia,Q as sa,bM as la,V as de,W as ge,P as ca,al as ha,bV as pa,fq as ua,af as O,fr as ma,fs as da,ax as ze,C as fe,fy as ga,w as ae,x as re,y as _,cw as fa,fz as Ca,cm as S,q as _a,am as wa,i as W,f as va,L as Ra,N as K,ch as te,a9 as H,ar as Y,aa as I,ez as ya,ap as La,az as ba,aB as Ua,aE as xa,I as $a,aH as Ke,ag as Ba,M as Q,S as ce,ak as ja,aI as Sa,ac as M,aF as ka,fA as Da,aq as qe,ah as Oa,aC as Aa,bm as Ta,bh as za,fB as Ce,Y as Ka,av as qa,c4 as he,fC as Ia,aU as Ma,aV as Pa}from"./index-BlOTeW9N.js";const Na={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},Ea=Na;function Wa(a){const{badgeContent:t,invisible:r=!1,max:n=99,showZero:i=!1}=a,s=ke({badgeContent:t,max:n});let o=r;r===!1&&t===0&&!i&&(o=!0);const{badgeContent:c,max:p=n}=o?s:a,u=c&&Number(c)>p?`${p}+`:c;return{badgeContent:c,invisible:o,max:p,displayValue:u}}function Fa(a){return Je("MuiBadge",a)}const Ha=Qe("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),j=Ha,Ya=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],pe=10,ue=4,Xa=a=>{const{color:t,anchorOrigin:r,invisible:n,overlap:i,variant:s,classes:o={}}=a,c={root:["root"],badge:["badge",s,n&&"invisible",`anchorOrigin${R(r.vertical)}${R(r.horizontal)}`,`anchorOrigin${R(r.vertical)}${R(r.horizontal)}${R(i)}`,`overlap${R(i)}`,t!=="default"&&`color${R(t)}`]};return ra(c,Fa,o)},Ga=De("span",{name:"MuiBadge",slot:"Root",overridesResolver:(a,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Va=De("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.badge,t[r.variant],t[`anchorOrigin${R(r.anchorOrigin.vertical)}${R(r.anchorOrigin.horizontal)}${R(r.overlap)}`],r.color!=="default"&&t[`color${R(r.color)}`],r.invisible&&t.invisible]}})(({theme:a})=>{var t;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:a.typography.fontFamily,fontWeight:a.typography.fontWeightMedium,fontSize:a.typography.pxToRem(12),minWidth:pe*2,lineHeight:1,padding:"0 6px",height:pe*2,borderRadius:pe,zIndex:1,transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.enteringScreen}),variants:[...Object.keys(((t=a.vars)!=null?t:a).palette).filter(r=>{var n,i;return((n=a.vars)!=null?n:a).palette[r].main&&((i=a.vars)!=null?i:a).palette[r].contrastText}).map(r=>({props:{color:r},style:{backgroundColor:(a.vars||a).palette[r].main,color:(a.vars||a).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:ue,height:ue*2,minWidth:ue*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${j.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${j.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${j.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${j.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${j.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${j.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${j.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${j.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:a.transitions.create("transform",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.leavingScreen})}}]}}),Za=l.forwardRef(function(t,r){var n,i,s,o,c,p;const u=ea({props:t,name:"MuiBadge"}),{anchorOrigin:$={vertical:"top",horizontal:"right"},className:f,component:w,components:C={},componentsProps:v={},children:ne,overlap:N="rectangular",color:A="default",invisible:b=!1,max:X=99,badgeContent:G,slots:B,slotProps:T,showZero:V=!1,variant:U="standard"}=u,z=aa(u,Ya),{badgeContent:Z,invisible:d,max:y,displayValue:E}=Wa({max:X,invisible:b,badgeContent:G,showZero:V}),He=ke({anchorOrigin:$,color:A,overlap:N,variant:U,badgeContent:G}),ye=d||Z==null&&U!=="dot",{color:Ye=A,overlap:Xe=N,anchorOrigin:Ge=$,variant:Le=U}=ye?He:u,be=Le!=="dot"?E:void 0,oe=le({},u,{badgeContent:Z,invisible:ye,max:y,displayValue:be,showZero:V,anchorOrigin:Ge,color:Ye,overlap:Xe,variant:Le}),Ue=Xa(oe),xe=(n=(i=B==null?void 0:B.root)!=null?i:C.Root)!=null?n:Ga,$e=(s=(o=B==null?void 0:B.badge)!=null?o:C.Badge)!=null?s:Va,ie=(c=T==null?void 0:T.root)!=null?c:v.root,se=(p=T==null?void 0:T.badge)!=null?p:v.badge,Ve=Be({elementType:xe,externalSlotProps:ie,externalForwardedProps:z,additionalProps:{ref:r,as:w},ownerState:oe,className:je(ie==null?void 0:ie.className,Ue.root,f)}),Ze=Be({elementType:$e,externalSlotProps:se,ownerState:oe,className:je(Ue.badge,se==null?void 0:se.className)});return q.jsxs(xe,le({},Ve,{children:[ne,q.jsx($e,le({},Ze,{children:be}))]}))}),Qa=Za;function Mo({value:a,onChange:t,...r}){const[n,i]=l.useState(a);l.useEffect(()=>{i(a)},[a]);const s=()=>t(n);return e(ta,{value:n,onChange:o=>i(o.target.value),onBlur:s,onKeyDown:o=>o.key==="Enter"&&!r.multiline&&s(),...r})}function Po(a){const t=F();return Oe(t.builds,a)}function No(a){const t=F();return Oe(t.buildTcs,a)}const Ja=""+new URL("splash_aether-DJzOYokv.png",import.meta.url).href,er=""+new URL("splash_albedo-C2ClDHXJ.png",import.meta.url).href,ar=""+new URL("splash_alhaitham-CA0sQI8X.png",import.meta.url).href,rr=""+new URL("splash_amber-CMXdnMxx.png",import.meta.url).href,tr=""+new URL("splash_arlecchino-De11NpLa.png",import.meta.url).href,nr=""+new URL("splash_ayaka-DPmpFfjD.png",import.meta.url).href,or=""+new URL("splash_ayato-VOwChnnn.png",import.meta.url).href,ir=""+new URL("splash_baizhu-DuNRm3Wc.png",import.meta.url).href,sr=""+new URL("splash_barbara-CnuuBtjx.png",import.meta.url).href,lr=""+new URL("splash_beidou-DAcc5DQf.png",import.meta.url).href,cr=""+new URL("splash_bennett-BiKbQNXU.png",import.meta.url).href,hr=""+new URL("splash_candace-z-8Vs9vX.png",import.meta.url).href,pr=""+new URL("splash_charlotte-CqI4iexi.png",import.meta.url).href,ur=""+new URL("splash_chevreuse-CCu9ByG0.png",import.meta.url).href,mr=""+new URL("splash_chiori-Dsv0eX76.png",import.meta.url).href,dr=""+new URL("splash_chongyun-DuFe7QpO.png",import.meta.url).href,gr=""+new URL("splash_collei-XCQMnPIQ.png",import.meta.url).href,fr=""+new URL("splash_cyno-UUip-7qe.png",import.meta.url).href,Cr=""+new URL("splash_dehya-BNbalvXi.png",import.meta.url).href,_r=""+new URL("splash_diluc-B9yBooi8.png",import.meta.url).href,wr=""+new URL("splash_diona-BekVqAtV.png",import.meta.url).href,vr=""+new URL("splash_dori-ETbroQpt.png",import.meta.url).href,Rr=""+new URL("splash_eula-CWM0oOOm.png",import.meta.url).href,yr=""+new URL("splash_faruzan-CuLPOgXv.png",import.meta.url).href,Lr=""+new URL("splash_fischl-eNS_Q4Yq.png",import.meta.url).href,br=""+new URL("splash_freminet-BK116q87.png",import.meta.url).href,Ur=""+new URL("splash_furina-Dl2Olj6j.png",import.meta.url).href,xr=""+new URL("splash_gaming-7Y_g9EKP.png",import.meta.url).href,$r=""+new URL("splash_ganyu-51SeDPVZ.png",import.meta.url).href,Br=""+new URL("splash_gorou-BTgwjfbi.png",import.meta.url).href,jr=""+new URL("splash_heizou-B1OGXzm5.png",import.meta.url).href,Sr=""+new URL("splash_hutao-BnM6ApUB.png",import.meta.url).href,kr=""+new URL("splash_itto-CAbBR0Zp.png",import.meta.url).href,Dr=""+new URL("splash_jean-Bi78jjdb.png",import.meta.url).href,Or=""+new URL("splash_kaeya-CqZUM0lq.png",import.meta.url).href,Ar=""+new URL("splash_kaveh-Cnxi7r3d.png",import.meta.url).href,Tr=""+new URL("splash_kazuha-CriY046g.png",import.meta.url).href,zr=""+new URL("splash_keqing-BbKPZ-gj.png",import.meta.url).href,Kr=""+new URL("splash_kirara-DRMRckJo.png",import.meta.url).href,qr=""+new URL("splash_klee-Bepwm4Dw.png",import.meta.url).href,Ir=""+new URL("splash_kokomi-TPOxgeDQ.png",import.meta.url).href,Mr=""+new URL("splash_kuki-Cqu89_Z8.png",import.meta.url).href,Pr=""+new URL("splash_layla-D2kdEiP4.png",import.meta.url).href,Nr=""+new URL("splash_lisa-CWtsUH6n.png",import.meta.url).href,Er=""+new URL("splash_lumine-DjfSEbJZ.png",import.meta.url).href,Wr=""+new URL("splash_lynette-jKA0GiXg.png",import.meta.url).href,Fr=""+new URL("splash_lyney-YDlwT6uD.png",import.meta.url).href,Hr=""+new URL("splash_mika-Bkkw9tBR.png",import.meta.url).href,Yr=""+new URL("splash_mona-bkAi0VbK.png",import.meta.url).href,Xr=""+new URL("splash_nahida-DRhmP5Jb.png",import.meta.url).href,Gr=""+new URL("splash_navia-BUTPUKtD.png",import.meta.url).href,Vr=""+new URL("splash_neuvillette-C4ZbVr1r.png",import.meta.url).href,Zr=""+new URL("splash_nilou-Dx2CHYCE.png",import.meta.url).href,Qr=""+new URL("splash_ningguang-g7VYSynG.png",import.meta.url).href,Jr=""+new URL("splash_noelle-D_7jmXS3.png",import.meta.url).href,et=""+new URL("splash_qiqi-BwAm_6rv.png",import.meta.url).href,at=""+new URL("splash_raiden-3An7aYEy.png",import.meta.url).href,rt=""+new URL("splash_razor-CixKqXhp.png",import.meta.url).href,tt=""+new URL("splash_rosaria-DjlUDP6W.png",import.meta.url).href,nt=""+new URL("splash_sara-BXwH30mO.png",import.meta.url).href,ot=""+new URL("splash_sayu-Bc78JOFk.png",import.meta.url).href,it=""+new URL("splash_shenhe-GbmFj4LB.png",import.meta.url).href,st=""+new URL("splash_sucrose-DbpONZgF.png",import.meta.url).href,lt=""+new URL("splash_tartaglia-_CDK8h1z.png",import.meta.url).href,ct=""+new URL("splash_thoma-Csq2lH6Z.png",import.meta.url).href,ht=""+new URL("splash_tighnari-Cxm5cuAN.png",import.meta.url).href,pt=""+new URL("splash_venti-DZqaHXqJ.png",import.meta.url).href,ut=""+new URL("splash_wanderer-Cgi8ZpvN.png",import.meta.url).href,mt=""+new URL("splash_wriothesley-unwiYGBl.png",import.meta.url).href,dt=""+new URL("splash_xiangling-CjsfO110.png",import.meta.url).href,gt=""+new URL("splash_xianyun-8Bq2tWSB.png",import.meta.url).href,ft=""+new URL("splash_xiao-D0mJbo-D.png",import.meta.url).href,Ct=""+new URL("splash_xingqiu-8_rk5zS1.png",import.meta.url).href,_t=""+new URL("splash_xinyan-npt0jwGK.png",import.meta.url).href,wt=""+new URL("splash_yae-c4CxAWZx.png",import.meta.url).href,vt=""+new URL("splash_yanfei-DFGvA19Z.png",import.meta.url).href,Rt=""+new URL("splash_yaoyao-BIHk1AkM.png",import.meta.url).href,yt=""+new URL("splash_yelan-DXvYWOYE.png",import.meta.url).href,Lt=""+new URL("splash_yoimiya-BwV7hPT-.png",import.meta.url).href,bt=""+new URL("splash_yunjin-CogctS_D.png",import.meta.url).href,Ut=""+new URL("splash_zhongli-CAGDgoHb.png",import.meta.url).href,xt={Albedo:er,Alhaitham:ar,Amber:rr,AratakiItto:kr,Arlecchino:tr,Baizhu:ir,Barbara:sr,Beidou:lr,Bennett:cr,Candace:hr,Charlotte:pr,Chevreuse:ur,Chiori:mr,Chongyun:dr,Collei:gr,Cyno:fr,Dehya:Cr,Diluc:_r,Diona:wr,Dori:vr,Eula:Rr,Faruzan:yr,Fischl:Lr,Freminet:br,Furina:Ur,Gaming:xr,Ganyu:$r,Gorou:Br,HuTao:Sr,Jean:Dr,KaedeharaKazuha:Tr,Kaeya:Or,KamisatoAyaka:nr,KamisatoAyato:or,Kaveh:Ar,Keqing:zr,Kirara:Kr,Klee:qr,KujouSara:nt,KukiShinobu:Mr,Layla:Pr,Lisa:Nr,Lynette:Wr,Lyney:Fr,Mika:Hr,Mona:Yr,Nahida:Xr,Navia:Gr,Neuvillette:Vr,Nilou:Zr,Ningguang:Qr,Noelle:Jr,Qiqi:et,RaidenShogun:at,Razor:rt,Rosaria:tt,SangonomiyaKokomi:Ir,Sayu:ot,Shenhe:it,ShikanoinHeizou:jr,Sucrose:st,Tartaglia:lt,Thoma:ct,Tighnari:ht,TravelerF:Er,TravelerM:Ja,Venti:pt,Wanderer:ut,Wriothesley:mt,Xiangling:dt,Xianyun:gt,Xiao:ft,Xingqiu:Ct,Xinyan:_t,YaeMiko:wt,Yanfei:vt,Yaoyao:Rt,Yelan:yt,Yoimiya:Lt,YunJin:bt,Zhongli:Ut};function $t(a,t){return xt[na(a,t)]}const Bt=""+new URL("Character_Albedo_Card-BpLo-Cd6.png",import.meta.url).href,jt=""+new URL("Character_Alhaitham_Card-B3qI6uNs.jpg",import.meta.url).href,St=""+new URL("Character_Aloy_Card-BGLKJQPn.png",import.meta.url).href,kt=""+new URL("Character_Amber_Card-D7m_gRNd.jpg",import.meta.url).href,Dt=""+new URL("Character_Arataki_Itto_Card-wnLcJYYl.jpg",import.meta.url).href,Ot=""+new URL("Character_Arlecchino_Card-WX11Bm1z.jpg",import.meta.url).href,At=""+new URL("Character_Baizhu_Card-u_-blciS.jpg",import.meta.url).href,Tt=""+new URL("Character_Barbara_Card-DtsJmWjO.jpg",import.meta.url).href,zt=""+new URL("Character_Beidou_Card-BFobTRzj.jpg",import.meta.url).href,Kt=""+new URL("Character_Bennett_Card-HueXUQqB.jpg",import.meta.url).href,qt=""+new URL("Character_Candace_Card-BjYHYytN.jpg",import.meta.url).href,It=""+new URL("Character_Charlotte_Card-B9Vnf_zR.jpg",import.meta.url).href,Mt=""+new URL("Character_Chevreuse_Card-Dlu7AwtZ.jpg",import.meta.url).href,Pt=""+new URL("Character_Chiori_Card-CIJlkKZh.jpg",import.meta.url).href,Nt=""+new URL("Character_Chongyun_Card-LjhtWmnO.jpg",import.meta.url).href,Et=""+new URL("Character_Clorinde_Card-BOO0JOMp.jpg",import.meta.url).href,Wt=""+new URL("Character_Collei_Card-BfO5oi4z.jpg",import.meta.url).href,Ft=""+new URL("Character_Cyno_Card-DokRZ4GX.jpg",import.meta.url).href,Ht=""+new URL("Character_Dehya_Card-DD2-q8Se.jpg",import.meta.url).href,Yt=""+new URL("Character_Diluc_Card-C6DUtV6e.jpg",import.meta.url).href,Xt=""+new URL("Character_Diona_Card-LQlv9j_e.png",import.meta.url).href,Gt=""+new URL("Character_Dori_Card-ECypwj3a.jpg",import.meta.url).href,Vt=""+new URL("Character_Emilie_Card-Bqx0MCr0.jpg",import.meta.url).href,Zt=""+new URL("Character_Eula_Card-ByDQZguw.png",import.meta.url).href,Qt=""+new URL("Character_Faruzan_Card-CviBKLcR.jpg",import.meta.url).href,Jt=""+new URL("Character_Fischl_Card-BfWz6Y9V.jpg",import.meta.url).href,en=""+new URL("Character_Freminet_Card-BM4IZ5OQ.jpg",import.meta.url).href,an=""+new URL("Character_Furina_Card-D5fr82oX.jpg",import.meta.url).href,rn=""+new URL("Character_Gaming_Card-BzpVaYig.jpg",import.meta.url).href,tn=""+new URL("Character_Ganyu_Card-B8qDR0po.png",import.meta.url).href,nn=""+new URL("Character_Gorou_Card-CyDpw4ZN.png",import.meta.url).href,on=""+new URL("Character_Hu_Tao_Card-Deie4ty4.png",import.meta.url).href,sn=""+new URL("Character_Jean_Card-Bwo9uFav.jpg",import.meta.url).href,ln=""+new URL("Character_Kachina_Card-CYH-FKNT.jpg",import.meta.url).href,cn=""+new URL("Character_Kaeya_Card-DbOA5Qtf.jpg",import.meta.url).href,hn=""+new URL("Character_Kamisato_Ayaka_Card-96pmp9TA.png",import.meta.url).href,pn=""+new URL("Character_Kamisato_Ayato_Card-R5TOBR-F.png",import.meta.url).href,un=""+new URL("Character_Kaveh_Card-Ctz--hrg.jpg",import.meta.url).href,mn=""+new URL("Character_Kazuha_Card-DGwQBbCF.png",import.meta.url).href,dn=""+new URL("Character_Keqing_Card-DHVuslyM.jpg",import.meta.url).href,gn=""+new URL("Character_Kinich_Card-B2KvwpUd.jpg",import.meta.url).href,fn=""+new URL("Character_Kirara_Card-rxmuQyvl.jpg",import.meta.url).href,Cn=""+new URL("Character_Klee_Card-BQUx3KBz.jpg",import.meta.url).href,_n=""+new URL("Character_Kujou_Sara_Card-D4WuEcwQ.jpg",import.meta.url).href,wn=""+new URL("Character_Kuki_Shinobu_Card-C_2gpsSN.jpg",import.meta.url).href,vn=""+new URL("Character_Layla_Card-DI8fh3jW.jpeg",import.meta.url).href,Rn=""+new URL("Character_Lisa_Card-DjSa66-9.jpg",import.meta.url).href,yn=""+new URL("Character_Lynette_Card-BB20aO3o.jpg",import.meta.url).href,Ln=""+new URL("Character_Lyney_Card-BHNEXZm0.jpg",import.meta.url).href,bn=""+new URL("Character_Mika_Card-D0Wakkqp.jpg",import.meta.url).href,Un=""+new URL("Character_Mona_Card-CvlMUYK_.jpg",import.meta.url).href,xn=""+new URL("Character_Mualani_Card-Bodz7euQ.jpg",import.meta.url).href,$n=""+new URL("Character_Nahida_Card-D6s1_qrb.jpeg",import.meta.url).href,Bn=""+new URL("Character_Navia_Card-DOJWwJM3.jpg",import.meta.url).href,jn=""+new URL("Character_Neuvillette_Card-0KoykWPP.jpg",import.meta.url).href,Sn=""+new URL("Character_Nilou_Card-DqnQ-dSs.jpg",import.meta.url).href,kn=""+new URL("Character_Ningguang_Card-tAkw2zDe.jpg",import.meta.url).href,Dn=""+new URL("Character_Noelle_Card-DWubGuU2.jpg",import.meta.url).href,On=""+new URL("Character_Qiqi_Card-BGeVsL5w.jpg",import.meta.url).href,An=""+new URL("Character_Raiden_Shogun_Card-vq7qd8KO.png",import.meta.url).href,Tn=""+new URL("Character_Razor_Card-CiLHXjyO.jpg",import.meta.url).href,zn=""+new URL("Character_Rosaria_Card-C18GJZev.png",import.meta.url).href,Kn=""+new URL("Character_Sangonomiya_Kokomi_Card-VzbVrd2G.jpg",import.meta.url).href,qn=""+new URL("Character_Sayu_Card-CI2YcBLI.png",import.meta.url).href,In=""+new URL("Character_Sethos_Card-4jl_270k.jpg",import.meta.url).href,Mn=""+new URL("Character_Shenhe_Card-CfyNiGEm.jpg",import.meta.url).href,Pn=""+new URL("Character_Shikanoin_Heizou_Card-fbmiEsdP.png",import.meta.url).href,Nn=""+new URL("Character_Sigewinne_Card-qpI--enz.jpg",import.meta.url).href,En=""+new URL("Character_Somnia_Card-BAHIWQnu.png",import.meta.url).href,Wn=""+new URL("Character_Sucrose_Card-gESU62rQ.jpg",import.meta.url).href,Fn=""+new URL("Character_Tartaglia_Card-BeeFQ-7e.png",import.meta.url).href,Hn=""+new URL("Character_Thoma_Card-D-qXE_tt.jpg",import.meta.url).href,Yn=""+new URL("Character_Tighnari_Card-tDB04_hy.jpg",import.meta.url).href,Xn=""+new URL("Character_Venti_Card-Bcd9uIho.jpg",import.meta.url).href,Gn=""+new URL("Character_Wanderer_Card-Bl4jK4PI.jpg",import.meta.url).href,Vn=""+new URL("Character_Wriothesley_Card-DLF_wdog.jpg",import.meta.url).href,Zn=""+new URL("Character_Xiangling_Card-Bi4nVpm4.jpg",import.meta.url).href,Qn=""+new URL("Character_Xianyun_Card-B6H-tPs7.jpg",import.meta.url).href,Jn=""+new URL("Character_Xiao_Card-Il1hbs9F.jpg",import.meta.url).href,eo=""+new URL("Character_Xilonen_Card-CdzkOzyR.jpg",import.meta.url).href,ao=""+new URL("Character_Xingqiu_Card-yjOWNKdH.jpg",import.meta.url).href,ro=""+new URL("Character_Xinyan_Card-Cgqoz1e8.jpg",import.meta.url).href,to=""+new URL("Character_Yae_Miko_Card-DO8V8vWJ.png",import.meta.url).href,no=""+new URL("Character_Yanfei_Card-BvaqEZTG.png",import.meta.url).href,oo=""+new URL("Character_Yaoyao_Card-IWfs5nZN.jpg",import.meta.url).href,io=""+new URL("Character_Yelan_Card-BiLckvYV.jpg",import.meta.url).href,so=""+new URL("Character_Yoimiya_Card-DaaZv-Y3.png",import.meta.url).href,lo=""+new URL("Character_Yun_Jin_Card-Cy-dHGe_.jpg",import.meta.url).href,co=""+new URL("Character_Zhongli_Card-BJ13Ueck.png",import.meta.url).href,ho=""+new URL("Traveler_Female_Card-CpZU2Ke9.jpg",import.meta.url).href,po=""+new URL("Traveler_Male_Card-DExj1wni.jpg",import.meta.url).href,Se={Albedo:Bt,Alhaitham:jt,Aloy:St,Amber:kt,AratakiItto:Dt,Arlecchino:Ot,Baizhu:At,Barbara:Tt,Beidou:zt,Bennett:Kt,Candace:qt,Charlotte:It,Chevreuse:Mt,Chiori:Pt,Chongyun:Nt,Clorinde:Et,Collei:Wt,Cyno:Ft,Dehya:Ht,Diluc:Yt,Diona:Xt,Dori:Gt,Emilie:Vt,Eula:Zt,Faruzan:Qt,Fischl:Jt,Freminet:en,Furina:an,Gaming:rn,Ganyu:tn,Gorou:nn,HuTao:on,Jean:sn,Kachina:ln,KaedeharaKazuha:mn,Kaeya:cn,KamisatoAyaka:hn,KamisatoAyato:pn,Kaveh:un,Keqing:dn,Kinich:gn,Kirara:fn,Klee:Cn,KujouSara:_n,KukiShinobu:wn,Layla:vn,Lisa:Rn,Lyney:Ln,Lynette:yn,Mika:bn,Mona:Un,Mualani:xn,Nahida:$n,Navia:Bn,Neuvillette:jn,Nilou:Sn,Ningguang:kn,Noelle:Dn,Qiqi:On,RaidenShogun:An,Razor:Tn,Rosaria:zn,SangonomiyaKokomi:Kn,Sayu:qn,Sethos:In,Shenhe:Mn,ShikanoinHeizou:Pn,Sigewinne:Nn,Somnia:En,Sucrose:Wn,Tartaglia:Fn,Thoma:Hn,Tighnari:Yn,TravelerF:ho,TravelerM:po,Venti:Xn,Wanderer:Gn,Wriothesley:Vn,Xiangling:Zn,Xianyun:Qn,Xiao:Jn,Xilonen:eo,Xingqiu:ao,Xinyan:ro,YaeMiko:to,Yanfei:no,Yaoyao:oo,Yelan:io,Yoimiya:so,YunJin:lo,Zhongli:co};function uo(a,t){switch(a){case"TravelerAnemo":case"TravelerDendro":case"TravelerElectro":case"TravelerGeo":case"TravelerHydro":return Se[`Traveler${t}`];default:return Se[a]}}function Eo(){const{character:{key:a}}=l.useContext(D),{gender:t}=J(),r=Ae(a,t),{data:n}=l.useContext(ee),i={auto:n.get(x.total.auto).value,skill:n.get(x.total.skill).value,burst:n.get(x.total.burst).value},s={auto:n.get(x.total.autoBoost).value,skill:n.get(x.total.skillBoost).value,burst:n.get(x.total.burstBoost).value};return e(m,{children:e(L,{container:!0,spacing:1,children:["auto","skill","burst"].map(o=>{var p;const c=i[o].toString();return e(L,{item:!0,xs:4,children:e(Qa,{badgeContent:c,color:s[o]?"info":"secondary",overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{width:"100%",height:"100%","& > .MuiBadge-badge":{fontSize:"1em",padding:c.length>1?".25em":".25em .4em",borderRadius:".5em",lineHeight:1,height:"1.25em",right:"25%"}},children:e(m,{component:k?k:"img",src:(p=r.getTalentOfKey(o))==null?void 0:p.img,width:"100%",height:"auto"})})},o)})})})}function Wo({setConstellation:a,warning:t=!1}){const{character:{key:r}}=l.useContext(D),{data:n}=l.useContext(ee),i=n.get(x.constellation).value,{gender:s}=J(),o=Ae(r,s);return e(L,{container:!0,spacing:1,children:ze(1,6).map(c=>{var p;return e(L,{item:!0,xs:4,children:e(fe,{onClick:()=>a(c===i?c-1:c),style:{border:`1px solid ${t?Ea[200]:ga[200]}`,borderRadius:"4px",overflow:"hidden"},children:e(m,{component:k?k:"img",src:(p=o.getTalentOfKey(`constellation${c}`))==null?void 0:p.img,sx:{...i>=c?{}:{filter:"brightness(50%)"}},width:"100%",height:"auto"})})},c)})})}function Fo(){const{silly:a}=l.useContext(oa),{character:{key:t}}=l.useContext(D),{gender:r}=J(),{data:n}=l.useContext(ee),i=n.get(x.lvl).value,s=n.get(x.asc).value,o=$t(t,r),c=uo(t,r);return a&&o?e(mo,{src:o,level:i,ascension:s}):e(go,{src:c,level:i,ascension:s})}function mo({src:a,level:t,ascension:r}){const{character:{key:n}}=l.useContext(D);return h(m,{sx:{display:"flex",position:"relative"},children:[e(m,{src:a,component:k?k:"img",width:"100%",height:"auto"}),h(m,{sx:{width:"100%",height:"100%"},children:[e(m,{sx:{opacity:.85,width:"100%",display:"flex",justifyContent:"center",px:1},children:e(Ie,{})}),e(g,{variant:"h6",sx:{width:"100%",opacity:.75,textAlign:"center"},children:e(Te,{stars:me(n).rarity,colored:!0})}),e(Pe,{}),e(Me,{level:t,ascension:r})]})]})}function go({src:a,level:t,ascension:r}){const{character:{key:n}}=l.useContext(D);return h(m,{sx:{display:"flex",position:"relative"},children:[h(m,{sx:{position:"absolute",width:"100%",height:"100%"},children:[e(g,{variant:"h6",sx:{position:"absolute",width:"100%",left:"50%",bottom:0,transform:"translate(-50%, -50%)",opacity:.75,textAlign:"center"},children:e(Te,{stars:me(n).rarity,colored:!0})}),e(m,{sx:{position:"absolute",left:"50%",bottom:"7%",transform:"translate(-50%, -50%)",opacity:.85,width:"100%",display:"flex",justifyContent:"center",px:1},children:e(Ie,{})}),e(Pe,{}),e(Me,{level:t,ascension:r})]}),e(m,{src:a,component:k?k:"img",width:"100%",height:"auto"})]})}function Ie(){const{character:{key:a}}=l.useContext(D),{gender:t}=J(),r=ia(a),n=me(a).weaponType;return e(ca,{color:r,sx:{height:"auto"},label:h(g,{variant:"h6",sx:{display:"flex",gap:1,alignItems:"center"},children:[e(sa,{ele:r}),e(m,{sx:{whiteSpace:"normal",textAlign:"center"},children:e(la,{characterKey:a,gender:t})}),e(de,{src:ge.weaponTypes[n]})]})})}function Me({level:a,ascension:t}){return e(g,{sx:{p:1,position:"absolute",right:0,top:0,opacity:.8},children:e(ha,{children:pa(a,t)})})}function Pe(){const{character:{key:a}}=l.useContext(D),t=F(),{favorite:r}=ua(a);return e(m,{sx:{position:"absolute",left:0,top:0},children:e(O,{sx:{p:1},color:"error",onClick:()=>t.charMeta.set(a,{favorite:!r}),children:r?e(ma,{}):e(da,{})})})}var _e={},fo=re;Object.defineProperty(_e,"__esModule",{value:!0});var P=_e.default=void 0,Co=fo(ae()),_o=q,wo=(0,Co.default)((0,_o.jsx)("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"}),"SwapHoriz");P=_e.default=wo;var we={},vo=re;Object.defineProperty(we,"__esModule",{value:!0});var Ne=we.default=void 0,Ro=vo(ae()),yo=q,Lo=(0,Ro.default)((0,yo.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");Ne=we.default=Lo;var ve={},bo=re;Object.defineProperty(ve,"__esModule",{value:!0});var Ee=ve.default=void 0,Uo=bo(ae()),xo=q,$o=(0,Uo.default)((0,xo.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");Ee=ve.default=$o;var Re={},Bo=re;Object.defineProperty(Re,"__esModule",{value:!0});var We=Re.default=void 0,jo=Bo(ae()),So=q,ko=(0,jo.default)((0,So.jsx)("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"}),"Science");We=Re.default=ko;function Ho({name:a,description:t,active:r=!1,onActive:n,children:i,onEdit:s,onCopyToTc:o,onDupe:c,onEquip:p,onRemove:u,hideFooter:$=!1}){const{t:f}=_("build"),w=h(te,{children:[e(Ra,{title:a,action:t&&e(S,{title:e(g,{children:t}),children:e(va,{})})}),e(K,{sx:{pt:0,pb:1},children:i})]});return h(W,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",boxShadow:r?"0px 0px 0px 2px green inset":void 0},children:[n?e(fe,{onClick:n,children:w}):w,!$&&h(fa,{sx:{display:"flex",justifyContent:"space-around",marginTop:"auto"},children:[e(S,{title:e(g,{children:f`buildCardTip.edit`}),placement:"top",arrow:!0,children:e(O,{color:"info",size:"small",onClick:s,disabled:!s,children:e("span",{children:e(Ca,{})})})}),e(S,{title:e(g,{children:f`buildCardTip.copyTc`}),placement:"top",arrow:!0,children:e(O,{color:"info",size:"small",onClick:o,disabled:!o,children:e(We,{})})}),e(S,{title:e(g,{children:f`buildCardTip.duplicate`}),placement:"top",arrow:!0,children:e(O,{color:"info",size:"small",onClick:c,disabled:!c,children:e(Ee,{})})}),e(S,{title:e(g,{children:f`buildCardTip.equip`}),placement:"top",arrow:!0,children:e(O,{color:"info",size:"small",onClick:p,disabled:!p,children:e(_a,{})})}),e(S,{title:e(g,{children:f`buildCardTip.delete`}),placement:"top",arrow:!0,children:e(O,{color:"error",size:"small",onClick:u,disabled:!u,children:e(wa,{})})})]})]})}function Yo(){const{t:a}=_("page_team");return e(Y,{severity:"info",children:e(H,{t:a,i18nKey:"buildInfo.equipped",children:"This is the build currently equipped to your character, this represents in-game equipement and is persistent outside of the Loadout."})})}function Xo(){const{t:a}=_("page_team");return e(Y,{severity:"info",children:e(H,{t:a,i18nKey:"buildInfo.build",children:"This is the build currently equipped to your character, this represents in-game equipement and is persistent outside of the Loadout."})})}function Go(){const{t:a}=_("page_team");return e(Y,{severity:"info",children:e(H,{t:a,i18nKey:"buildInfo.tcbuild",children:"This is the build currently equipped to your character, this represents in-game equipement and is persistent outside of the Loadout."})})}const Do={xs:2*3,sm:2*3,md:3*3,lg:4*3,xl:4*3};function Fe({artId:a,onChangeId:t,slotKey:r,show:n,onClose:i}){const{t:s}=_(["page_character","artifact"]),o=F(),c=l.useCallback((d,y)=>({...d,...y,slotKeys:[r]}),[r]),[p,u,$]=I(!1),[f,w]=l.useReducer(c,{...ya(),slotKeys:[r]}),[C,v]=La();l.useEffect(()=>o.arts.followAny(v),[o,v]);const ne=ba(),N=l.useMemo(()=>Ua(),[]),A=o.arts.values.filter(d=>d.slotKey===f.slotKeys[0]).length,b=l.useMemo(()=>{const d=Aa(f,N);let y=o.arts.values.filter(d).map(E=>E.id);return a&&o.arts.get(a)&&(y=y.filter(E=>E!==a),y.unshift(a)),C&&y},[f,N,o,a,C]),{numShow:X,setTriggerElement:G}=xa(Do[ne],b.length),B=l.useMemo(()=>b.slice(0,X),[b,X]),T=b.length!==A?`${b.length}/${A}`:`${A}`,V={numShowing:B.length,total:T,t:s,namespace:"artifact"},[U,z]=l.useState(""),Z=l.useCallback(()=>{!U||$a.includes(U)?t(null):t(U),z(""),i()},[t,i,U]);return e(Oa,{open:n,onClose:i,containerProps:{maxWidth:"xl"},children:h(W,{children:[e(l.Suspense,{fallback:!1,children:e(Ke,{artifactIdToEdit:p?"new":"",cancelEdit:$,allowUpload:!0,allowEmpty:!0,fixedSlotKey:f.slotKeys[0]})}),h(K,{sx:{py:1,display:"flex",alignItems:"center"},children:[h(g,{variant:"h6",children:[r?e(de,{src:ge.slot[r]}):null," ",s`tabEquip.swapArt`]}),e(O,{onClick:i,sx:{ml:"auto"},children:e(Ba,{})})]}),e(Q,{}),e(K,{children:e(l.Suspense,{fallback:e(ce,{variant:"rectangular",width:"100%",height:200}),children:e(ja,{filterOption:f,filterOptionDispatch:w,filteredIds:b,disableSlotFilter:!0})})}),e(Q,{}),h(K,{children:[e(m,{pb:1,display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:e(Sa,{showingTextProps:V})}),e(M,{fullWidth:!0,onClick:u,color:"info",startIcon:e(ka,{}),children:s("artifact:addNew")}),e(m,{mt:1,children:h(l.Suspense,{fallback:e(ce,{variant:"rectangular",width:"100%",height:300}),children:[e(Da,{artIdOrSlot:U,onHide:()=>z(""),onEquip:Z}),h(L,{container:!0,spacing:1,columns:{xs:2,md:3,lg:4},children:[a&&e(L,{item:!0,xs:1,children:e(W,{bgt:"light",sx:{width:"100%",height:"100%"},children:e(fe,{sx:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>z(r),children:h(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e(Ne,{sx:{fontSize:"10em"}}),e(g,{children:s`artifact:button.unequipArtifact`})]})})})}),B.map(d=>e(L,{item:!0,xs:1,sx:y=>({...a===d&&{"> .MuiCard-root":{outline:`solid ${y.palette.warning.main}`}}}),children:e(qe,{artifactId:d,onClick:a===d?void 0:()=>z(d)})},d))]})]})}),b.length!==B.length&&e(ce,{ref:d=>{d&&G(d)},sx:{borderRadius:1,mt:1},variant:"rectangular",width:"100%",height:100})]})]})})}const Oo={xs:1,sm:2,md:3,lg:3,xl:3};function Vo({weaponTypeKey:a,weaponId:t,artifactIds:r,setWeapon:n,setArtifact:i}){const s=F(),[o,c]=l.useState(""),[p,u]=l.useState();l.useEffect(()=>{t&&o&&o!==t&&c(t)},[o,t]);const $=l.useCallback(()=>t&&c(t),[t]),f=l.useCallback(()=>c(""),[]);return h(m,{children:[e(l.Suspense,{fallback:!1,children:e(Ta,{weaponId:o,footer:!0,onClose:f,extraButtons:e(qo,{weaponId:t||"",weaponTypeKey:a,onChangeId:n})})}),e(l.Suspense,{fallback:!1,children:e(Ke,{artifactIdToEdit:p,cancelEdit:()=>u(void 0)})}),h(L,{item:!0,columns:Oo,container:!0,spacing:1,children:[e(L,{item:!0,xs:1,display:"flex",flexDirection:"column",children:t&&s.weapons.keys.includes(t)?e(za,{weaponId:t,onEdit:$,extraButtons:e(Ko,{weaponId:t,weaponTypeKey:a,onChangeId:n})}):e(Ao,{weaponId:"",weaponTypeKey:a,onChangeId:n})}),!!r&&Object.entries(r).map(([w,C])=>e(L,{item:!0,xs:1,children:C&&s.arts.keys.includes(C)?e(qe,{artifactId:C,extraButtons:e(zo,{artifactId:C,slotKey:w,onChangeId:v=>i(w,v)}),onEdit:()=>u(C),onLockToggle:()=>s.arts.set(C,({lock:v})=>({lock:!v}))}):e(To,{slotKey:w,onChangeId:v=>i(w,v)})},C||w))]})]})}function Ao({weaponId:a,weaponTypeKey:t,onChangeId:r}){const{t:n}=_("page_weapon"),[i,s,o]=I();return h(W,{bgt:"light",sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[e(K,{children:h(g,{children:[e(de,{src:ge.weaponTypes[t]})," ",n(`weaponType.${t}`)]})}),e(Q,{}),h(m,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:[e(Ce,{weaponId:a,weaponTypeKey:t,show:i,onClose:o,onChangeId:r}),e(M,{onClick:s,color:"info",sx:{borderRadius:"1em"},children:e(P,{sx:{height:100,width:100}})})]})]})}function To({slotKey:a,onChangeId:t}){const[r,n,i]=I(),{t:s}=_("artifact");return h(W,{bgt:"light",sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[e(K,{children:h(g,{children:[e(Ka,{iconProps:qa,slotKey:a})," ",s(`slotName.${a}`)]})}),e(Q,{}),h(m,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:[e(Fe,{artId:"",slotKey:a,show:r,onClose:i,onChangeId:t}),e(M,{onClick:n,color:"info",sx:{borderRadius:"1em"},children:e(P,{sx:{height:100,width:100}})})]})]})}function zo({artifactId:a,slotKey:t,onChangeId:r}){const{t:n}=_("page_character"),[i,s,o]=I();return h(te,{children:[e(S,{title:e(g,{children:n`tabEquip.swapArt`}),placement:"top",arrow:!0,children:e(M,{color:"info",size:"small",onClick:s,children:e(P,{})})}),e(Fe,{artId:a,slotKey:t,show:i,onClose:o,onChangeId:r})]})}function Ko({weaponId:a,weaponTypeKey:t,onChangeId:r}){const{t:n}=_("page_character"),[i,s,o]=I();return h(te,{children:[e(S,{title:e(g,{children:n`tabEquip.swapWeapon`}),placement:"top",arrow:!0,children:e(M,{color:"info",size:"small",onClick:s,children:e(P,{})})}),e(Ce,{weaponId:a,weaponTypeKey:t,onChangeId:r,show:i,onClose:o})]})}function qo({weaponId:a,weaponTypeKey:t,onChangeId:r}){const{t:n}=_("page_character"),[i,s,o]=I();return h(te,{children:[e(M,{color:"info",onClick:s,startIcon:e(P,{}),children:n`tabEquip.swapWeapon`}),e(Ce,{weaponId:a,weaponTypeKey:t,onChangeId:r,show:i,onClose:o})]})}function Zo({talentKey:a,setTalent:t,dropDownButtonProps:r}){const{t:n}=_("sheet_gen"),{character:{talent:i}}=l.useContext(D),{data:s}=l.useContext(ee),o=s.get(he.total[`${a}Boost`]).value,c=s.get(he.total[a]).value,p=s.get(he.asc).value;return e(Pa,{fullWidth:!0,title:n("talentLvl",{level:c}),color:o?"info":"primary",...r,children:ze(1,Ia[p]).map(u=>e(Ma,{selected:i[a]===u,disabled:i[a]===u,onClick:()=>t(u),children:n("talentLvl",{level:u+o})},u))})}function Qo(){const{t:a}=_("page_team");return e(Y,{severity:"info",children:h(H,{t:a,i18nKey:"teamSettings.alert.desc",children:[e("strong",{children:"Teams"})," are a container for 4 character loadouts. It provides a way for characters to apply team buffs, and configuration of enemy stats. Loadouts can be shared between teams."]})})}function Jo(){const{t:a}=_("loadout");return e(Y,{severity:"info",children:h(H,{t:a,i18nKey:"loadoutSettings.alert",children:[e("strong",{children:"Loadouts"})," provides character context data, including bonus stats, conditionals, multi-targets, optimization config, and stores builds. A single ",e("strong",{children:"Loadout"})," can be used for many teams."]})})}export{Ho as B,Fo as C,Vo as E,Jo as L,Mo as T,No as a,Xo as b,Go as c,Ee as d,Qo as e,Wo as f,Zo as g,Yo as h,Eo as i,We as j,Po as u};
