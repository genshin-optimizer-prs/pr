import{c as h,j as p,u as c,p as s,a8 as f,n as t,N as g,e as u,a9 as x,C as o,aa as w,ab as I,T as d,D as y,K as S,B as r,w as b,s as k,ac as v,M as D,ad as L,t as T}from"./index-b8319edb.js";import{M as j,D as A}from"./DropdownButton-6c8046a7.js";import{d as m,a as C}from"./CheckBoxOutlineBlank-3d9a1b39.js";const M=h(p.jsx("path",{d:"m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"}),"Android"),_=h(p.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple"),z={chs:"简体中文",cht:"繁體中文",de:"Deutsch",en:"English",es:"Español",fr:"Français",id:"Bahasa Indonesia",it:"Italiano",ja:"日本語",ko:"한국어",pt:"Português",ru:"Русский язык",th:"ภาษาไทย",tr:"Türkçe",vi:"Tiếng Việt"};function B(){const{t:e,i18n:i}=c(["ui","settings"]),n=a=>()=>i.changeLanguage(a),l=i.languages[0];return s(A,{fullWidth:!0,title:e("settings:languageCard.languageFormat",{language:e(`languages:${l}`)}),children:f.map(a=>t(j,{selected:l===a,disabled:l===a,onClick:n(a),children:[s(g,{i18nKey:`languages:${a}`}),a!==l?` (${z[a]})`:""]},a))})}function E(){const{silly:e,setSilly:i}=u.useContext(x),{t:n}=c(["ui","settings"]);return t(k,{children:[t(o,{sx:{display:"flex",alignItems:"center",gap:2},children:[s(I,{src:w}),t(d,{variant:"h5",children:[" ",n`sillyPageTitle`]})]}),s(y,{}),t(o,{children:[s(d,{children:t(g,{t:n,i18nKey:"settings:sillyCard.desc",children:["We ",s("s",{children:"stole"})," borrowed (with permission) all the character assets from ",s("strong",{children:"Silly Wisher"})," and gene splice it into Genshin Optimizer."]})}),t(S,{display:"flex",gap:2,pt:2,children:[s(r,{onClick:()=>i(!e),startIcon:e?s(m,{}):s(C,{}),color:e?"success":"secondary",children:e?n`settings:sillyCard.toggle.enabled`:n`settings:sillyCard.toggle.disabled`}),s(r,{startIcon:s(b,{}),color:"discord",href:"https://discord.com/invite/sillywisher",target:"_blank",children:"Discord"}),s(r,{startIcon:s(_,{}),href:"https://apps.apple.com/lv/app/silly-wisher/id6444465724",target:"_blank",children:"App Store"}),s(r,{startIcon:s(M,{}),href:"https://play.google.com/store/apps/details?id=com.sketchi.sillywisher",target:"_blank",children:"Google Play"})]})]})]})}function K(){const{snow:e,setSnow:i}=u.useContext(v),{t:n}=c();return t(r,{fullWidth:!0,color:e?"success":"secondary",onClick:()=>i(!e),startIcon:e?s(m,{}):s(C,{}),children:["❄ ",n("settings:letsnow")," ❄"]})}function G(){const{t:e}=c(["settings"]);return D.send({hitType:"pageview",page:"/setting"}),t(T,{sx:{my:1},children:[s(o,{sx:{py:1},children:s(d,{variant:"subtitle1",children:s(g,{t:e,i18nKey:"title"})})}),s(y,{}),t(o,{sx:{display:"flex",flexDirection:"column",gap:2},children:[s(B,{}),s(K,{}),s(E,{}),s(L,{})]})]})}export{G as default};
