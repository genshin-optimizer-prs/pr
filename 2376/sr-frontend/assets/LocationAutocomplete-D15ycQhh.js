import{r as x,c as Mt,j as v,b0 as Nt,i as at,o as Ue,b1 as _t,_ as S,a as vt,g as Ct,s as G,b as Je,u as Pt,e as ke,f as xe,h as $t,b2 as se,I as St,b3 as Lt,P as kt,v as st,m as Ft,b4 as zt,z as At,A as Rt,a8 as jt,B as z,K as bt,N as Et,O as Ht,ae as Tt,C as Bt,D as Gt,a4 as Wt,aC as Vt,G as Kt}from"./index-B41ykZ2d.js";import{i as lt,o as mt,f as me,A as Ut,T as qt,M as Jt}from"./DropdownButton-BEcPfXuK.js";const Qt=o=>{const r=x.useRef({});return x.useEffect(()=>{r.current=o}),r.current},Xt=Mt(v.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function xt(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function Yt(o={}){const{ignoreAccents:r=!0,ignoreCase:p=!0,limit:b,matchFrom:I="any",stringify:y,trim:C=!1}=o;return(m,{inputValue:O,getOptionLabel:P})=>{let R=C?O.trim():O;p&&(R=R.toLowerCase()),r&&(R=xt(R));const $=R?m.filter(u=>{let L=(y||P)(u);return p&&(L=L.toLowerCase()),r&&(L=xt(L)),I==="start"?L.indexOf(R)===0:L.indexOf(R)>-1}):m;return typeof b=="number"?$.slice(0,b):$}}function qe(o,r){for(let p=0;p<o.length;p+=1)if(r(o[p]))return p;return-1}const Zt=Yt(),It=5,eo=o=>{var r;return o.current!==null&&((r=o.current.parentElement)==null?void 0:r.contains(document.activeElement))};function to(o){const{unstable_isActiveElementInListbox:r=eo,unstable_classNamePrefix:p="Mui",autoComplete:b=!1,autoHighlight:I=!1,autoSelect:y=!1,blurOnSelect:C=!1,clearOnBlur:m=!o.freeSolo,clearOnEscape:O=!1,componentName:P="useAutocomplete",defaultValue:R=o.multiple?[]:null,disableClearable:$=!1,disableCloseOnSelect:u=!1,disabled:L,disabledItemsFocusable:j=!1,disableListWrap:le=!1,filterOptions:Ae=Zt,filterSelectedOptions:te=!1,freeSolo:U=!1,getOptionDisabled:E,getOptionKey:Qe,getOptionLabel:Re=t=>{var e;return(e=t.label)!=null?e:t},groupBy:Ie,handleHomeEndKeys:Z=!o.freeSolo,id:ut,includeInputInList:Xe=!1,inputValue:Te,isOptionEqualToValue:ie=(t,e)=>t===e,multiple:f=!1,onChange:ye,onClose:we,onHighlightChange:De,onInputChange:Q,onOpen:Me,open:ct,openOnFocus:dt=!1,options:Oe,readOnly:oe=!1,selectOnFocus:ve=!o.freeSolo,value:Ne}=o,_=Nt(ut);let D=Re;D=t=>{const e=Re(t);return typeof e!="string"?String(e):e};const Ce=x.useRef(!1),_e=x.useRef(!0),k=x.useRef(null),F=x.useRef(null),[pe,Ye]=x.useState(null),[M,Pe]=x.useState(-1),Fe=I?0:-1,T=x.useRef(Fe),[s,ft]=at({controlled:Ne,default:R,name:P}),[c,X]=at({controlled:Te,default:"",name:P,state:"inputValue"}),[ue,ze]=x.useState(!1),ne=x.useCallback((t,e)=>{if(!(f?s.length<e.length:e!==null)&&!m)return;let n;if(f)n="";else if(e==null)n="";else{const l=D(e);n=typeof l=="string"?l:""}c!==n&&(X(n),Q&&Q(t,n,"reset"))},[D,c,f,Q,X,m,s]),[ee,je]=at({controlled:ct,default:!1,name:P,state:"open"}),[Ze,Ee]=x.useState(!0),He=!f&&s!=null&&c===D(s),N=ee&&!oe,g=N?Ae(Oe.filter(t=>!(te&&(f?s:[s]).some(e=>e!==null&&ie(t,e)))),{inputValue:He&&Ze?"":c,getOptionLabel:D}):[],W=Qt({filteredOptions:g,value:s,inputValue:c});x.useEffect(()=>{const t=s!==W.value;ue&&!t||U&&!t||ne(null,s)},[s,ne,ue,W.value,U]);const $e=ee&&g.length>0&&!oe,ce=Ue(t=>{t===-1?k.current.focus():pe.querySelector(`[data-tag-index="${t}"]`).focus()});x.useEffect(()=>{f&&M>s.length-1&&(Pe(-1),ce(-1))},[s,f,M,ce]);function de(t,e){if(!F.current||t<0||t>=g.length)return-1;let a=t;for(;;){const n=F.current.querySelector(`[data-option-index="${a}"]`),l=j?!1:!n||n.disabled||n.getAttribute("aria-disabled")==="true";if(n&&n.hasAttribute("tabindex")&&!l)return a;if(e==="next"?a=(a+1)%g.length:a=(a-1+g.length)%g.length,a===t)return-1}}const q=Ue(({event:t,index:e,reason:a="auto"})=>{if(T.current=e,e===-1?k.current.removeAttribute("aria-activedescendant"):k.current.setAttribute("aria-activedescendant",`${_}-option-${e}`),De&&De(t,e===-1?null:g[e],a),!F.current)return;const n=F.current.querySelector(`[role="option"].${p}-focused`);n&&(n.classList.remove(`${p}-focused`),n.classList.remove(`${p}-focusVisible`));let l=F.current;if(F.current.getAttribute("role")!=="listbox"&&(l=F.current.parentElement.querySelector('[role="listbox"]')),!l)return;if(e===-1){l.scrollTop=0;return}const d=F.current.querySelector(`[data-option-index="${e}"]`);if(d&&(d.classList.add(`${p}-focused`),a==="keyboard"&&d.classList.add(`${p}-focusVisible`),l.scrollHeight>l.clientHeight&&a!=="mouse"&&a!=="touch")){const h=d,B=l.clientHeight+l.scrollTop,Ke=h.offsetTop+h.offsetHeight;Ke>B?l.scrollTop=Ke-l.clientHeight:h.offsetTop-h.offsetHeight*(Ie?1.3:0)<l.scrollTop&&(l.scrollTop=h.offsetTop-h.offsetHeight*(Ie?1.3:0))}}),V=Ue(({event:t,diff:e,direction:a="next",reason:n="auto"})=>{if(!N)return;const d=de((()=>{const h=g.length-1;if(e==="reset")return Fe;if(e==="start")return 0;if(e==="end")return h;const B=T.current+e;return B<0?B===-1&&Xe?-1:le&&T.current!==-1||Math.abs(e)>1?0:h:B>h?B===h+1&&Xe?-1:le||Math.abs(e)>1?h:0:B})(),a);if(q({index:d,reason:n,event:t}),b&&e!=="reset")if(d===-1)k.current.value=c;else{const h=D(g[d]);k.current.value=h,h.toLowerCase().indexOf(c.toLowerCase())===0&&c.length>0&&k.current.setSelectionRange(c.length,h.length)}}),fe=()=>{const t=(e,a)=>{const n=e?D(e):"",l=a?D(a):"";return n===l};if(T.current!==-1&&W.filteredOptions&&W.filteredOptions.length!==g.length&&W.inputValue===c&&(f?s.length===W.value.length&&W.value.every((e,a)=>D(s[a])===D(e)):t(W.value,s))){const e=W.filteredOptions[T.current];if(e)return qe(g,a=>D(a)===D(e))}return-1},Se=x.useCallback(()=>{if(!N)return;const t=fe();if(t!==-1){T.current=t;return}const e=f?s[0]:s;if(g.length===0||e==null){V({diff:"reset"});return}if(F.current){if(e!=null){const a=g[T.current];if(f&&a&&qe(s,l=>ie(a,l))!==-1)return;const n=qe(g,l=>ie(l,e));n===-1?V({diff:"reset"}):q({index:n});return}if(T.current>=g.length-1){q({index:g.length-1});return}q({index:T.current})}},[g.length,f?!1:s,te,V,q,N,c,f]),et=Ue(t=>{_t(F,t),t&&Se()});x.useEffect(()=>{Se()},[Se]);const H=t=>{ee||(je(!0),Ee(!0),Me&&Me(t))},Y=(t,e)=>{ee&&(je(!1),we&&we(t,e))},J=(t,e,a,n)=>{if(f){if(s.length===e.length&&s.every((l,d)=>l===e[d]))return}else if(s===e)return;ye&&ye(t,e,a,n),ft(e)},ge=x.useRef(!1),re=(t,e,a="selectOption",n="options")=>{let l=a,d=e;if(f){d=Array.isArray(s)?s.slice():[];const h=qe(d,B=>ie(e,B));h===-1?d.push(e):n!=="freeSolo"&&(d.splice(h,1),l="removeOption")}ne(t,d),J(t,d,l,{option:e}),!u&&(!t||!t.ctrlKey&&!t.metaKey)&&Y(t,l),(C===!0||C==="touch"&&ge.current||C==="mouse"&&!ge.current)&&k.current.blur()};function Be(t,e){if(t===-1)return-1;let a=t;for(;;){if(e==="next"&&a===s.length||e==="previous"&&a===-1)return-1;const n=pe.querySelector(`[data-tag-index="${a}"]`);if(!n||!n.hasAttribute("tabindex")||n.disabled||n.getAttribute("aria-disabled")==="true")a+=e==="next"?1:-1;else return a}}const Ge=(t,e)=>{if(!f)return;c===""&&Y(t,"toggleInput");let a=M;M===-1?c===""&&e==="previous"&&(a=s.length-1):(a+=e==="next"?1:-1,a<0&&(a=0),a===s.length&&(a=-1)),a=Be(a,e),Pe(a),ce(a)},We=t=>{Ce.current=!0,X(""),Q&&Q(t,"","clear"),J(t,f?[]:null,"clear")},tt=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(M!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(Pe(-1),ce(-1)),e.which!==229))switch(e.key){case"Home":N&&Z&&(e.preventDefault(),V({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":N&&Z&&(e.preventDefault(),V({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),V({diff:-It,direction:"previous",reason:"keyboard",event:e}),H(e);break;case"PageDown":e.preventDefault(),V({diff:It,direction:"next",reason:"keyboard",event:e}),H(e);break;case"ArrowDown":e.preventDefault(),V({diff:1,direction:"next",reason:"keyboard",event:e}),H(e);break;case"ArrowUp":e.preventDefault(),V({diff:-1,direction:"previous",reason:"keyboard",event:e}),H(e);break;case"ArrowLeft":Ge(e,"previous");break;case"ArrowRight":Ge(e,"next");break;case"Enter":if(T.current!==-1&&N){const a=g[T.current],n=E?E(a):!1;if(e.preventDefault(),n)return;re(e,a,"selectOption"),b&&k.current.setSelectionRange(k.current.value.length,k.current.value.length)}else U&&c!==""&&He===!1&&(f&&e.preventDefault(),re(e,c,"createOption","freeSolo"));break;case"Escape":N?(e.preventDefault(),e.stopPropagation(),Y(e,"escape")):O&&(c!==""||f&&s.length>0)&&(e.preventDefault(),e.stopPropagation(),We(e));break;case"Backspace":if(f&&!oe&&c===""&&s.length>0){const a=M===-1?s.length-1:M,n=s.slice();n.splice(a,1),J(e,n,"removeOption",{option:s[a]})}break;case"Delete":if(f&&!oe&&c===""&&s.length>0&&M!==-1){const a=M,n=s.slice();n.splice(a,1),J(e,n,"removeOption",{option:s[a]})}break}},gt=t=>{ze(!0),dt&&!Ce.current&&H(t)},he=t=>{if(r(F)){k.current.focus();return}ze(!1),_e.current=!0,Ce.current=!1,y&&T.current!==-1&&N?re(t,g[T.current],"blur"):y&&U&&c!==""?re(t,c,"blur","freeSolo"):m&&ne(t,s),Y(t,"blur")},w=t=>{const e=t.target.value;c!==e&&(X(e),Ee(!1),Q&&Q(t,e,"input")),e===""?!$&&!f&&J(t,null,"clear"):H(t)},A=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));T.current!==e&&q({event:t,index:e,reason:"mouse"})},K=t=>{q({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),ge.current=!0},ht=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));re(t,g[e],"selectOption"),ge.current=!1},ot=t=>e=>{const a=s.slice();a.splice(t,1),J(e,a,"removeOption",{option:s[t]})},nt=t=>{ee?Y(t,"toggleInput"):H(t)},rt=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==_&&t.preventDefault()},Ve=t=>{t.currentTarget.contains(t.target)&&(k.current.focus(),ve&&_e.current&&k.current.selectionEnd-k.current.selectionStart===0&&k.current.select(),_e.current=!1)},Le=t=>{!L&&(c===""||!ee)&&nt(t)};let ae=U&&c.length>0;ae=ae||(f?s.length>0:s!==null);let be=g;return Ie&&(be=g.reduce((t,e,a)=>{const n=Ie(e);return t.length>0&&t[t.length-1].group===n?t[t.length-1].options.push(e):t.push({key:a,index:a,group:n,options:[e]}),t},[])),L&&ue&&he(),{getRootProps:(t={})=>S({"aria-owns":$e?`${_}-listbox`:null},t,{onKeyDown:tt(t),onMouseDown:rt,onClick:Ve}),getInputLabelProps:()=>({id:`${_}-label`,htmlFor:_}),getInputProps:()=>({id:_,value:c,onBlur:he,onFocus:gt,onChange:w,onMouseDown:Le,"aria-activedescendant":N?"":null,"aria-autocomplete":b?"both":"list","aria-controls":$e?`${_}-listbox`:void 0,"aria-expanded":$e,autoComplete:"off",ref:k,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:L}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:We}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:nt}),getTagProps:({index:t})=>S({key:t,"data-tag-index":t,tabIndex:-1},!oe&&{onDelete:ot(t)}),getListboxProps:()=>({role:"listbox",id:`${_}-listbox`,"aria-labelledby":`${_}-label`,ref:et,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{var a;const n=(f?s:[s]).some(d=>d!=null&&ie(e,d)),l=E?E(e):!1;return{key:(a=Qe==null?void 0:Qe(e))!=null?a:D(e),tabIndex:-1,role:"option",id:`${_}-option-${t}`,onMouseMove:A,onClick:ht,onTouchStart:K,"data-option-index":t,"aria-disabled":l,"aria-selected":n}},id:_,inputValue:c,value:s,dirty:ae,expanded:N&&pe,popupOpen:N,focused:ue||M!==-1,anchorEl:pe,setAnchorEl:Ye,focusedTag:M,groupedOptions:be}}function oo(o){return vt("MuiListSubheader",o)}Ct("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const no=["className","color","component","disableGutters","disableSticky","inset"],ro=o=>{const{classes:r,color:p,disableGutters:b,inset:I,disableSticky:y}=o,C={root:["root",p!=="default"&&`color${Je(p)}`,!b&&"gutters",I&&"inset",!y&&"sticky"]};return $t(C,oo,r)},ao=G("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:p}=o;return[r.root,p.color!=="default"&&r[`color${Je(p.color)}`],!p.disableGutters&&r.gutters,p.inset&&r.inset,!p.disableSticky&&r.sticky]}})(({theme:o,ownerState:r})=>S({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},r.color==="primary"&&{color:(o.vars||o).palette.primary.main},r.color==="inherit"&&{color:"inherit"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.inset&&{paddingLeft:72},!r.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),wt=x.forwardRef(function(r,p){const b=Pt({props:r,name:"MuiListSubheader"}),{className:I,color:y="default",component:C="li",disableGutters:m=!1,disableSticky:O=!1,inset:P=!1}=b,R=ke(b,no),$=S({},b,{color:y,component:C,disableGutters:m,disableSticky:O,inset:P}),u=ro($);return v.jsx(ao,S({as:C,className:xe(u.root,I),ref:p,ownerState:$},R))});wt.muiSkipListHighlight=!0;const so=wt;function lo(o){return vt("MuiAutocomplete",o)}const i=Ct("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var yt,Ot;const io=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],po=["ref"],uo=["key"],co=["key"],fo=o=>{const{classes:r,disablePortal:p,expanded:b,focused:I,fullWidth:y,hasClearIcon:C,hasPopupIcon:m,inputFocused:O,popupOpen:P,size:R}=o,$={root:["root",b&&"expanded",I&&"focused",y&&"fullWidth",C&&"hasClearIcon",m&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",O&&"inputFocused"],tag:["tag",`tagSize${Je(R)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",P&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return $t($,lo,r)},go=G("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:p}=o,{fullWidth:b,hasClearIcon:I,hasPopupIcon:y,inputFocused:C,size:m}=p;return[{[`& .${i.tag}`]:r.tag},{[`& .${i.tag}`]:r[`tagSize${Je(m)}`]},{[`& .${i.inputRoot}`]:r.inputRoot},{[`& .${i.input}`]:r.input},{[`& .${i.input}`]:C&&r.inputFocused},r.root,b&&r.fullWidth,y&&r.hasPopupIcon,I&&r.hasClearIcon]}})({[`&.${i.focused} .${i.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${i.clearIndicator}`]:{visibility:"visible"}},[`& .${i.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${i.inputRoot}`]:{[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:30},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:56},[`& .${i.input}`]:{width:0,minWidth:30}},[`& .${lt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${lt.root}.${se.sizeSmall}`]:{[`& .${lt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${mt.root}`]:{padding:9,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:39},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:65},[`& .${i.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${mt.root}.${se.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${i.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${me.root}`]:{paddingTop:19,paddingLeft:8,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:39},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:65},[`& .${me.input}`]:{padding:"7px 4px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${me.root}.${se.sizeSmall}`]:{paddingBottom:1,[`& .${me.input}`]:{padding:"2.5px 4px"}},[`& .${se.hiddenLabel}`]:{paddingTop:8},[`& .${me.root}.${se.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${i.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${me.root}.${se.hiddenLabel}.${se.sizeSmall}`]:{[`& .${i.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${i.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${i.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${i.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${i.inputRoot}`]:{flexWrap:"wrap"}}}]}),ho=G("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,r)=>r.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),bo=G(St,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,r)=>r.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),mo=G(St,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},r)=>S({},r.popupIndicator,o.popupOpen&&r.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),xo=G(Lt,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,r)=>{const{ownerState:p}=o;return[{[`& .${i.option}`]:r.option},r.popper,p.disablePortal&&r.popperDisablePortal]}})(({theme:o})=>({zIndex:(o.vars||o).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),Io=G(kt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,r)=>r.paper})(({theme:o})=>S({},o.typography.body1,{overflow:"auto"})),yo=G("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,r)=>r.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Oo=G("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,r)=>r.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),vo=G("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,r)=>r.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${i.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${i.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${i.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:st(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${i.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:st(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${i.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:st(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),Co=G(so,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,r)=>r.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),Po=G("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,r)=>r.groupUl})({padding:0,[`& .${i.option}`]:{paddingLeft:24}}),$o=x.forwardRef(function(r,p){var b,I,y,C;const m=Pt({props:r,name:"MuiAutocomplete"}),{autoComplete:O=!1,autoHighlight:P=!1,autoSelect:R=!1,blurOnSelect:$=!1,ChipProps:u,className:L,clearIcon:j=yt||(yt=v.jsx(Xt,{fontSize:"small"})),clearOnBlur:le=!m.freeSolo,clearOnEscape:Ae=!1,clearText:te="Clear",closeText:U="Close",componentsProps:E={},defaultValue:Qe=m.multiple?[]:null,disableClearable:Re=!1,disableCloseOnSelect:Ie=!1,disabled:Z=!1,disabledItemsFocusable:ut=!1,disableListWrap:Xe=!1,disablePortal:Te=!1,filterSelectedOptions:ie=!1,forcePopupIcon:f="auto",freeSolo:ye=!1,fullWidth:we=!1,getLimitTagsText:De=n=>`+${n}`,getOptionLabel:Q,groupBy:Me,handleHomeEndKeys:ct=!m.freeSolo,includeInputInList:dt=!1,limitTags:Oe=-1,ListboxComponent:oe="ul",ListboxProps:ve,loading:Ne=!1,loadingText:_="Loading…",multiple:D=!1,noOptionsText:Ce="No options",openOnFocus:_e=!1,openText:k="Open",PaperComponent:F=kt,PopperComponent:pe=Lt,popupIcon:Ye=Ot||(Ot=v.jsx(Ut,{})),readOnly:M=!1,renderGroup:Pe,renderInput:Fe,renderOption:T,renderTags:s,selectOnFocus:ft=!m.freeSolo,size:c="medium",slotProps:X={}}=m,ue=ke(m,io),{getRootProps:ze,getInputProps:ne,getInputLabelProps:ee,getPopupIndicatorProps:je,getClearProps:Ze,getTagProps:Ee,getListboxProps:He,getOptionProps:N,value:g,dirty:W,expanded:$e,id:ce,popupOpen:de,focused:q,focusedTag:V,anchorEl:fe,setAnchorEl:Se,inputValue:et,groupedOptions:H}=to(S({},m,{componentName:"Autocomplete"})),Y=!Re&&!Z&&W&&!M,J=(!ye||f===!0)&&f!==!1,{onMouseDown:ge}=ne(),{ref:re}=ve??{},Be=He(),{ref:Ge}=Be,We=ke(Be,po),tt=Ft(Ge,re),he=Q||(n=>{var l;return(l=n.label)!=null?l:n}),w=S({},m,{disablePortal:Te,expanded:$e,focused:q,fullWidth:we,getOptionLabel:he,hasClearIcon:Y,hasPopupIcon:J,inputFocused:V===-1,popupOpen:de,size:c}),A=fo(w);let K;if(D&&g.length>0){const n=l=>S({className:A.tag,disabled:Z},Ee(l));s?K=s(g,n,w):K=g.map((l,d)=>{const h=n({index:d}),{key:B}=h,Ke=ke(h,uo);return v.jsx(zt,S({label:he(l),size:c},Ke,u),B)})}if(Oe>-1&&Array.isArray(K)){const n=K.length-Oe;!q&&n>0&&(K=K.splice(0,Oe),K.push(v.jsx("span",{className:A.tag,children:De(n)},K.length)))}const ot=Pe||(n=>v.jsxs("li",{children:[v.jsx(Co,{className:A.groupLabel,ownerState:w,component:"div",children:n.group}),v.jsx(Po,{className:A.groupUl,ownerState:w,children:n.children})]},n.key)),rt=T||((n,l)=>{const{key:d}=n,h=ke(n,co);return v.jsx("li",S({},h,{children:he(l)}),d)}),Ve=(n,l)=>{const d=N({option:n,index:l});return rt(S({},d,{className:A.option}),n,{selected:d["aria-selected"],index:l,inputValue:et},w)},Le=(b=X.clearIndicator)!=null?b:E.clearIndicator,ae=(I=X.paper)!=null?I:E.paper,be=(y=X.popper)!=null?y:E.popper,t=(C=X.popupIndicator)!=null?C:E.popupIndicator,e=n=>v.jsx(xo,S({as:pe,disablePortal:Te,style:{width:fe?fe.clientWidth:null},ownerState:w,role:"presentation",anchorEl:fe,open:de},be,{className:xe(A.popper,be==null?void 0:be.className),children:v.jsx(Io,S({ownerState:w,as:F},ae,{className:xe(A.paper,ae==null?void 0:ae.className),children:n}))}));let a=null;return H.length>0?a=e(v.jsx(vo,S({as:oe,className:A.listbox,ownerState:w},We,ve,{ref:tt,children:H.map((n,l)=>Me?ot({key:n.key,group:n.group,children:n.options.map((d,h)=>Ve(d,n.index+h))}):Ve(n,l))}))):Ne&&H.length===0?a=e(v.jsx(yo,{className:A.loading,ownerState:w,children:_})):H.length===0&&!ye&&!Ne&&(a=e(v.jsx(Oo,{className:A.noOptions,ownerState:w,role:"presentation",onMouseDown:n=>{n.preventDefault()},children:Ce}))),v.jsxs(x.Fragment,{children:[v.jsx(go,S({ref:p,className:xe(A.root,L),ownerState:w},ze(ue),{children:Fe({id:ce,disabled:Z,fullWidth:!0,size:c==="small"?"small":void 0,InputLabelProps:ee(),InputProps:S({ref:Se,className:A.inputRoot,startAdornment:K,onClick:n=>{n.target===n.currentTarget&&ge(n)}},(Y||J)&&{endAdornment:v.jsxs(ho,{className:A.endAdornment,ownerState:w,children:[Y?v.jsx(bo,S({},Ze(),{"aria-label":te,title:te,ownerState:w},Le,{className:xe(A.clearIndicator,Le==null?void 0:Le.className),children:j})):null,J?v.jsx(mo,S({},je(),{disabled:Z,"aria-label":de?U:k,title:de?U:k,ownerState:w},t,{className:xe(A.popupIndicator,t==null?void 0:t.className),children:Ye})):null]})}),inputProps:S({className:A.input,disabled:Z,readOnly:M},ne())})})),fe?a:null]})}),So=$o;var it={},Lo=Rt;Object.defineProperty(it,"__esModule",{value:!0});var Dt=it.default=void 0,ko=Lo(At()),Ao=v,Ro=(0,ko.default)((0,Ao.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");Dt=it.default=Ro;function To({options:o,valueKey:r,label:p,onChange:b,toImg:I,toExItemLabel:y,toExLabel:C,textFieldProps:m,...O}){const P=o.find($=>$.key===r),R=jt();return z(So,{autoHighlight:!0,options:o,value:P??null,onChange:($,u,L)=>b((u==null?void 0:u.key)??null),isOptionEqualToValue:($,u)=>$.key===(u==null?void 0:u.key),renderInput:$=>{var E;const u=P==null?void 0:P.color,L=u?(E=R.palette[u])==null?void 0:E.main:void 0,j=P==null?void 0:P.key,{InputLabelProps:le,InputProps:Ae,inputProps:te,...U}=$;return z(qt,{...U,...m,label:p,InputProps:{...Ae,startAdornment:typeof j=="string"?I(j):void 0},inputProps:{...te,autoComplete:"new-password",style:{color:L}},color:j?"success":"primary"})},renderOption:($,u)=>{const{key:L,...j}=$;return bt(Jt,{value:u.key,sx:{whiteSpace:"normal"},...j,children:[z(Et,{children:I(u.key)}),z(Ht,{color:u.color,children:z(x.Suspense,{fallback:z(Tt,{variant:"text",width:100}),children:bt(Bt,{color:u.color,sx:{display:"flex",gap:1},children:[u.key===(P==null?void 0:P.key)?z("strong",{children:u.label}):z("span",{children:u.label}),y==null?void 0:y(u.key)]})})}),!!u.favorite&&z(Dt,{})]},L)},filterOptions:($,{inputValue:u})=>$.filter(L=>{var j;return L.label.toLowerCase().includes(u.toLowerCase())||((j=L.alternateNames)==null?void 0:j.some(le=>le.toLowerCase().includes(u.toLowerCase())))}),...O})}var pt={},wo=Rt;Object.defineProperty(pt,"__esModule",{value:!0});var Do=pt.default=void 0,Mo=wo(At()),No=v,_o=(0,Mo.default)((0,No.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");Do=pt.default=_o;function jo({locKey:o,setLocKey:r,...p}){const{t:b}=Gt(["character","charNames_gen"]),{database:I}=Wt(),y=x.useCallback(O=>!!I.chars.get(O),[I.chars]),C=x.useCallback(O=>I.charMeta.get(O).favorite,[I.charMeta]),m=x.useMemo(()=>[{key:"",label:b("character:autocomplete.none")},...Vt.map(O=>({key:O,label:b(`charNames_gen:${O}`),favorite:C(O),color:y(O)?void 0:"secondary"}))],[y,C,b]);return z(x.Suspense,{fallback:z(Tt,{variant:"text",width:100}),children:z(To,{size:"small",options:m,toImg:()=>z(Kt,{children:" "}),valueKey:o,onChange:O=>r(O??""),...p})})}export{Xt as C,To as G,jo as L,Do as d};
