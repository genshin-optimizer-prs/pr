"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46],{29754:(e,t,o)=>{var n=o(14859);t.Z=void 0;var r=n(o(68671)),a=o(52322),l=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=l},92252:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(29798),r=o(52322);const a=(0,n.Z)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},54278:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(29798),r=o(52322);const a=(0,n.Z)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock")},40535:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(29798),r=o(52322);const a=(0,n.Z)((0,r.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen")},38951:(e,t,o)=>{o.d(t,{Z:()=>v});var n=o(98283),r=o(7560),a=o(2784),l=o(40489),i=o(69075),s=o(65992),p=o(43853),c=o(7342),u=o(69222),d=o(15672);function g(e){return(0,d.Z)("MuiListSubheader",e)}(0,u.Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var h=o(52322);const f=["className","color","component","disableGutters","disableSticky","inset"],m=(0,s.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"default"!==o.color&&t[`color${(0,c.Z)(o.color)}`],!o.disableGutters&&t.gutters,o.inset&&t.inset,!o.disableSticky&&t.sticky]}})((({theme:e,ownerState:t})=>(0,r.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},"primary"===t.color&&{color:(e.vars||e).palette.primary.main},"inherit"===t.color&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper}))),b=a.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiListSubheader"}),{className:a,color:s="default",component:u="li",disableGutters:d=!1,disableSticky:b=!1,inset:v=!1}=o,x=(0,n.Z)(o,f),Z=(0,r.Z)({},o,{color:s,component:u,disableGutters:d,disableSticky:b,inset:v}),y=(e=>{const{classes:t,color:o,disableGutters:n,inset:r,disableSticky:a}=e,l={root:["root","default"!==o&&`color${(0,c.Z)(o)}`,!n&&"gutters",r&&"inset",!a&&"sticky"]};return(0,i.Z)(l,g,t)})(Z);return(0,h.jsx)(m,(0,r.Z)({as:u,className:(0,l.Z)(y.root,a),ref:t,ownerState:Z},x))}));b.muiSkipListHighlight=!0;const v=b},5666:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(2784);const r=e=>{const t=n.useRef({});return n.useEffect((()=>{t.current=e})),t.current}},50090:(e,t,o)=>{o.d(t,{W:()=>x});var n=o(45492),r=o(503),a=o(66615),l=o(67550),i=o(79906),s=o(2784),p=o(11141),c=o(23657),u=o(44180),d=o(4125),g=o(55893),h=o(75958),f=o(80680),m=o(52903);let b,v=e=>e;function x({location:e,setLocation:t,filter:o=(()=>!0),autoCompleteProps:x={}}){const{t:Z}=(0,p.$G)(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:y}=(0,s.useContext)(c.E),O=(0,d.Wz)(),{gender:C}=(0,g.Z)(),I=(0,s.useCallback)((e=>t=>Z(`${e?"sillyWisher_charNames":"charNames_gen"}:${(0,r.Cs)(O.chars.LocationToCharacterKey(t),C)}`)),[O,C,Z]),[k,S]=(0,n.NW)();(0,s.useEffect)((()=>O.arts.followAny((()=>S()))),[O,S]);const $=(0,s.useMemo)((()=>k&&O.chars.keys.map((e=>(0,r.V7)(e)))),[k,O]),P=(0,s.useCallback)((e=>""===e?(0,m.tZ)(a.Z,{}):(0,m.tZ)(l.Z,{sx:{opacity:$.includes(e)?void 0:.7},children:(0,m.tZ)(f.Z,{characterKey:O.chars.LocationToCharacterKey(e)})})),[O,$]),L=(0,s.useCallback)((e=>"Traveler"===e?r.vF.some((e=>O.charMeta.get(e).favorite)):!!e&&O.charMeta.get(e).favorite),[O]),w=(0,s.useMemo)((()=>[{key:"",label:Z(b||(b=v`artifact:filterLocation.inventory`))},...Array.from(new Set(r.vp.filter((e=>o((0,u.m)(O.chars.LocationToCharacterKey(e),C)))))).map((e=>({key:e,label:I(y)(e),favorite:L(e),alternateNames:y?[I(!y)(e)]:void 0,color:$.includes(e)?void 0:"secondary"}))).sort(((e,t)=>e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:!e.color&&t.color?-1:e.color&&!t.color?1:e.label.localeCompare(t.label)))]),[Z,O.chars,C,$,o,I,y,L]);return(0,m.tZ)(s.Suspense,{fallback:(0,m.tZ)(i.Z,{variant:"text",width:100}),children:(0,m.tZ)(h._,Object.assign({size:"small",options:w,valueKey:e,onChange:e=>t(null!=e?e:""),toImg:P},x))})}},75958:(e,t,o)=>{o.d(t,{_:()=>ge,c:()=>he});var n=o(98283),r=o(16068),a=o(47746),l=o(7560),i=o(2784),s=o(40489),p=o(69075),c=o(12358),u=o(75798),d=o(5666),g=o(39983),h=o(75377);function f(e){return void 0!==e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function m(e,t){for(let o=0;o<e.length;o+=1)if(t(e[o]))return o;return-1}const b=function(e={}){const{ignoreAccents:t=!0,ignoreCase:o=!0,limit:n,matchFrom:r="any",stringify:a,trim:l=!1}=e;return(e,{inputValue:i,getOptionLabel:s})=>{let p=l?i.trim():i;o&&(p=p.toLowerCase()),t&&(p=f(p));const c=p?e.filter((e=>{let n=(a||s)(e);return o&&(n=n.toLowerCase()),t&&(n=f(n)),"start"===r?0===n.indexOf(p):n.indexOf(p)>-1})):e;return"number"==typeof n?c.slice(0,n):c}}(),v=e=>{var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function x(e){const{unstable_isActiveElementInListbox:t=v,unstable_classNamePrefix:o="Mui",autoComplete:n=!1,autoHighlight:r=!1,autoSelect:a=!1,blurOnSelect:s=!1,clearOnBlur:p=!e.freeSolo,clearOnEscape:f=!1,componentName:x="useAutocomplete",defaultValue:Z=(e.multiple?[]:null),disableClearable:y=!1,disableCloseOnSelect:O=!1,disabled:C,disabledItemsFocusable:I=!1,disableListWrap:k=!1,filterOptions:S=b,filterSelectedOptions:$=!1,freeSolo:P=!1,getOptionDisabled:L,getOptionLabel:w=(e=>{var t;return null!=(t=e.label)?t:e}),groupBy:A,handleHomeEndKeys:T=!e.freeSolo,id:R,includeInputInList:M=!1,inputValue:N,isOptionEqualToValue:E=((e,t)=>e===t),multiple:z=!1,onChange:j,onClose:V,onHighlightChange:D,onInputChange:F,onOpen:H,open:W,openOnFocus:B=!1,options:K,readOnly:q=!1,selectOnFocus:G=!e.freeSolo,value:U}=e,_=(0,c.Z)(R);let X=w;X=e=>{const t=w(e);return"string"!=typeof t?String(t):t};const J=i.useRef(!1),Q=i.useRef(!0),Y=i.useRef(null),ee=i.useRef(null),[te,oe]=i.useState(null),[ne,re]=i.useState(-1),ae=r?0:-1,le=i.useRef(ae),[ie,se]=(0,u.Z)({controlled:U,default:Z,name:x}),[pe,ce]=(0,u.Z)({controlled:N,default:"",name:x,state:"inputValue"}),[ue,de]=i.useState(!1),ge=i.useCallback(((e,t)=>{if(!(z?ie.length<t.length:null!==t)&&!p)return;let o;if(z)o="";else if(null==t)o="";else{const e=X(t);o="string"==typeof e?e:""}pe!==o&&(ce(o),F&&F(e,o,"reset"))}),[X,pe,z,F,ce,p,ie]),[he,fe]=(0,u.Z)({controlled:W,default:!1,name:x,state:"open"}),[me,be]=i.useState(!0),ve=!z&&null!=ie&&pe===X(ie),xe=he&&!q,Ze=xe?S(K.filter((e=>!$||!(z?ie:[ie]).some((t=>null!==t&&E(e,t))))),{inputValue:ve&&me?"":pe,getOptionLabel:X}):[],ye=(0,d.Z)({filteredOptions:Ze,value:ie,inputValue:pe});i.useEffect((()=>{const e=ie!==ye.value;ue&&!e||P&&!e||ge(null,ie)}),[ie,ge,ue,ye.value,P]);const Oe=he&&Ze.length>0&&!q;const Ce=(0,g.Z)((e=>{-1===e?Y.current.focus():te.querySelector(`[data-tag-index="${e}"]`).focus()}));i.useEffect((()=>{z&&ne>ie.length-1&&(re(-1),Ce(-1))}),[ie,z,ne,Ce]);const Ie=(0,g.Z)((({event:e,index:t,reason:n="auto"})=>{if(le.current=t,-1===t?Y.current.removeAttribute("aria-activedescendant"):Y.current.setAttribute("aria-activedescendant",`${_}-option-${t}`),D&&D(e,-1===t?null:Ze[t],n),!ee.current)return;const r=ee.current.querySelector(`[role="option"].${o}-focused`);r&&(r.classList.remove(`${o}-focused`),r.classList.remove(`${o}-focusVisible`));let a=ee.current;if("listbox"!==ee.current.getAttribute("role")&&(a=ee.current.parentElement.querySelector('[role="listbox"]')),!a)return;if(-1===t)return void(a.scrollTop=0);const l=ee.current.querySelector(`[data-option-index="${t}"]`);if(l&&(l.classList.add(`${o}-focused`),"keyboard"===n&&l.classList.add(`${o}-focusVisible`),a.scrollHeight>a.clientHeight&&"mouse"!==n&&"touch"!==n)){const e=l,t=a.clientHeight+a.scrollTop,o=e.offsetTop+e.offsetHeight;o>t?a.scrollTop=o-a.clientHeight:e.offsetTop-e.offsetHeight*(A?1.3:0)<a.scrollTop&&(a.scrollTop=e.offsetTop-e.offsetHeight*(A?1.3:0))}})),ke=(0,g.Z)((({event:e,diff:t,direction:o="next",reason:r="auto"})=>{if(!xe)return;const a=function(e,t){if(!ee.current||-1===e)return-1;let o=e;for(;;){if("next"===t&&o===Ze.length||"previous"===t&&-1===o)return-1;const e=ee.current.querySelector(`[data-option-index="${o}"]`),n=!I&&(!e||e.disabled||"true"===e.getAttribute("aria-disabled"));if(!(e&&!e.hasAttribute("tabindex")||n))return o;o+="next"===t?1:-1}}((()=>{const e=Ze.length-1;if("reset"===t)return ae;if("start"===t)return 0;if("end"===t)return e;const o=le.current+t;return o<0?-1===o&&M?-1:k&&-1!==le.current||Math.abs(t)>1?0:e:o>e?o===e+1&&M?-1:k||Math.abs(t)>1?e:0:o})(),o);if(Ie({index:a,reason:r,event:e}),n&&"reset"!==t)if(-1===a)Y.current.value=pe;else{const e=X(Ze[a]);Y.current.value=e;0===e.toLowerCase().indexOf(pe.toLowerCase())&&pe.length>0&&Y.current.setSelectionRange(pe.length,e.length)}})),Se=i.useCallback((()=>{if(!xe)return;if((()=>{if(-1!==le.current&&ye.filteredOptions&&ye.filteredOptions.length!==Ze.length&&ye.inputValue===pe&&(z?ie.length===ye.value.length&&ye.value.every(((e,t)=>X(ie[t])===X(e))):(e=ye.value,t=ie,(e?X(e):"")===(t?X(t):"")))){const e=ye.filteredOptions[le.current];if(e&&Ze.some((t=>X(t)===X(e))))return!0}var e,t;return!1})())return;const e=z?ie[0]:ie;if(0!==Ze.length&&null!=e){if(ee.current)if(null==e)le.current>=Ze.length-1?Ie({index:Ze.length-1}):Ie({index:le.current});else{const t=Ze[le.current];if(z&&t&&-1!==m(ie,(e=>E(t,e))))return;const o=m(Ze,(t=>E(t,e)));-1===o?ke({diff:"reset"}):Ie({index:o})}}else ke({diff:"reset"})}),[Ze.length,!z&&ie,$,ke,Ie,xe,pe,z]),$e=(0,g.Z)((e=>{(0,h.Z)(ee,e),e&&Se()}));i.useEffect((()=>{Se()}),[Se]);const Pe=e=>{he||(fe(!0),be(!0),H&&H(e))},Le=(e,t)=>{he&&(fe(!1),V&&V(e,t))},we=(e,t,o,n)=>{if(z){if(ie.length===t.length&&ie.every(((e,o)=>e===t[o])))return}else if(ie===t)return;j&&j(e,t,o,n),se(t)},Ae=i.useRef(!1),Te=(e,t,o="selectOption",n="options")=>{let r=o,a=t;if(z){a=Array.isArray(ie)?ie.slice():[];const e=m(a,(e=>E(t,e)));-1===e?a.push(t):"freeSolo"!==n&&(a.splice(e,1),r="removeOption")}ge(e,a),we(e,a,r,{option:t}),O||e&&(e.ctrlKey||e.metaKey)||Le(e,r),(!0===s||"touch"===s&&Ae.current||"mouse"===s&&!Ae.current)&&Y.current.blur()};const Re=(e,t)=>{if(!z)return;""===pe&&Le(e,"toggleInput");let o=ne;-1===ne?""===pe&&"previous"===t&&(o=ie.length-1):(o+="next"===t?1:-1,o<0&&(o=0),o===ie.length&&(o=-1)),o=function(e,t){if(-1===e)return-1;let o=e;for(;;){if("next"===t&&o===ie.length||"previous"===t&&-1===o)return-1;const e=te.querySelector(`[data-tag-index="${o}"]`);if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return o;o+="next"===t?1:-1}}(o,t),re(o),Ce(o)},Me=e=>{J.current=!0,ce(""),F&&F(e,"","clear"),we(e,z?[]:null,"clear")},Ne=e=>t=>{if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==ne&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(re(-1),Ce(-1)),229!==t.which))switch(t.key){case"Home":xe&&T&&(t.preventDefault(),ke({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":xe&&T&&(t.preventDefault(),ke({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),ke({diff:-5,direction:"previous",reason:"keyboard",event:t}),Pe(t);break;case"PageDown":t.preventDefault(),ke({diff:5,direction:"next",reason:"keyboard",event:t}),Pe(t);break;case"ArrowDown":t.preventDefault(),ke({diff:1,direction:"next",reason:"keyboard",event:t}),Pe(t);break;case"ArrowUp":t.preventDefault(),ke({diff:-1,direction:"previous",reason:"keyboard",event:t}),Pe(t);break;case"ArrowLeft":Re(t,"previous");break;case"ArrowRight":Re(t,"next");break;case"Enter":if(-1!==le.current&&xe){const e=Ze[le.current],o=!!L&&L(e);if(t.preventDefault(),o)return;Te(t,e,"selectOption"),n&&Y.current.setSelectionRange(Y.current.value.length,Y.current.value.length)}else P&&""!==pe&&!1===ve&&(z&&t.preventDefault(),Te(t,pe,"createOption","freeSolo"));break;case"Escape":xe?(t.preventDefault(),t.stopPropagation(),Le(t,"escape")):f&&(""!==pe||z&&ie.length>0)&&(t.preventDefault(),t.stopPropagation(),Me(t));break;case"Backspace":if(z&&!q&&""===pe&&ie.length>0){const e=-1===ne?ie.length-1:ne,o=ie.slice();o.splice(e,1),we(t,o,"removeOption",{option:ie[e]})}break;case"Delete":if(z&&!q&&""===pe&&ie.length>0&&-1!==ne){const e=ne,o=ie.slice();o.splice(e,1),we(t,o,"removeOption",{option:ie[e]})}}},Ee=e=>{de(!0),B&&!J.current&&Pe(e)},ze=e=>{t(ee)?Y.current.focus():(de(!1),Q.current=!0,J.current=!1,a&&-1!==le.current&&xe?Te(e,Ze[le.current],"blur"):a&&P&&""!==pe?Te(e,pe,"blur","freeSolo"):p&&ge(e,ie),Le(e,"blur"))},je=e=>{const t=e.target.value;pe!==t&&(ce(t),be(!1),F&&F(e,t,"input")),""===t?y||z||we(e,null,"clear"):Pe(e)},Ve=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));le.current!==t&&Ie({event:e,index:t,reason:"mouse"})},De=e=>{Ie({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Ae.current=!0},Fe=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));Te(e,Ze[t],"selectOption"),Ae.current=!1},He=e=>t=>{const o=ie.slice();o.splice(e,1),we(t,o,"removeOption",{option:ie[e]})},We=e=>{he?Le(e,"toggleInput"):Pe(e)},Be=e=>{e.currentTarget.contains(e.target)&&e.target.getAttribute("id")!==_&&e.preventDefault()},Ke=e=>{e.currentTarget.contains(e.target)&&(Y.current.focus(),G&&Q.current&&Y.current.selectionEnd-Y.current.selectionStart==0&&Y.current.select(),Q.current=!1)},qe=e=>{C||""!==pe&&he||We(e)};let Ge=P&&pe.length>0;Ge=Ge||(z?ie.length>0:null!==ie);let Ue=Ze;if(A){new Map;Ue=Ze.reduce(((e,t,o)=>{const n=A(t);return e.length>0&&e[e.length-1].group===n?e[e.length-1].options.push(t):e.push({key:o,index:o,group:n,options:[t]}),e}),[])}return C&&ue&&ze(),{getRootProps:(e={})=>(0,l.Z)({"aria-owns":Oe?`${_}-listbox`:null},e,{onKeyDown:Ne(e),onMouseDown:Be,onClick:Ke}),getInputLabelProps:()=>({id:`${_}-label`,htmlFor:_}),getInputProps:()=>({id:_,value:pe,onBlur:ze,onFocus:Ee,onChange:je,onMouseDown:qe,"aria-activedescendant":xe?"":null,"aria-autocomplete":n?"both":"list","aria-controls":Oe?`${_}-listbox`:void 0,"aria-expanded":Oe,autoComplete:"off",ref:Y,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:C}),getClearProps:()=>({tabIndex:-1,onClick:Me}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:We}),getTagProps:({index:e})=>(0,l.Z)({key:e,"data-tag-index":e,tabIndex:-1},!q&&{onDelete:He(e)}),getListboxProps:()=>({role:"listbox",id:`${_}-listbox`,"aria-labelledby":`${_}-label`,ref:$e,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:({index:e,option:t})=>{const o=(z?ie:[ie]).some((e=>null!=e&&E(t,e))),n=!!L&&L(t);return{key:X(t),tabIndex:-1,role:"option",id:`${_}-option-${e}`,onMouseMove:Ve,onClick:Fe,onTouchStart:De,"data-option-index":e,"aria-disabled":n,"aria-selected":o}},id:_,inputValue:pe,value:ie,dirty:Ge,expanded:xe&&te,popupOpen:xe,focused:ue||-1!==ne,anchorEl:te,setAnchorEl:oe,focusedTag:ne,groupedOptions:Ue}}var Z=o(47591),y=o(36357),O=o(38951),C=o(17377),I=o(85801),k=o(66198),S=o(58777),$=o(1309),P=o(16554),L=o(87723),w=o(80592),A=o(10727),T=o(43853),R=o(65992),M=o(69222),N=o(15672);function E(e){return(0,N.Z)("MuiAutocomplete",e)}const z=(0,M.Z)("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var j,V,D=o(7342),F=o(98659),H=o(52322);const W=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],B=["ref"],K=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{fullWidth:n,hasClearIcon:r,hasPopupIcon:a,inputFocused:l,size:i}=o;return[{[`& .${z.tag}`]:t.tag},{[`& .${z.tag}`]:t[`tagSize${(0,D.Z)(i)}`]},{[`& .${z.inputRoot}`]:t.inputRoot},{[`& .${z.input}`]:t.input},{[`& .${z.input}`]:l&&t.inputFocused},t.root,n&&t.fullWidth,a&&t.hasPopupIcon,r&&t.hasClearIcon]}})((({ownerState:e})=>(0,l.Z)({[`&.${z.focused} .${z.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${z.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${z.tag}`]:(0,l.Z)({margin:3,maxWidth:"calc(100% - 6px)"},"small"===e.size&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${z.inputRoot}`]:{flexWrap:"wrap",[`.${z.hasPopupIcon}&, .${z.hasClearIcon}&`]:{paddingRight:30},[`.${z.hasPopupIcon}.${z.hasClearIcon}&`]:{paddingRight:56},[`& .${z.input}`]:{width:0,minWidth:30}},[`& .${S.Z.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${S.Z.root}.${$.Z.sizeSmall}`]:{[`& .${S.Z.input}`]:{padding:"2px 4px 3px 0"}},[`& .${P.Z.root}`]:{padding:9,[`.${z.hasPopupIcon}&, .${z.hasClearIcon}&`]:{paddingRight:39},[`.${z.hasPopupIcon}.${z.hasClearIcon}&`]:{paddingRight:65},[`& .${z.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${z.endAdornment}`]:{right:9}},[`& .${P.Z.root}.${$.Z.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${z.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${L.Z.root}`]:{paddingTop:19,paddingLeft:8,[`.${z.hasPopupIcon}&, .${z.hasClearIcon}&`]:{paddingRight:39},[`.${z.hasPopupIcon}.${z.hasClearIcon}&`]:{paddingRight:65},[`& .${L.Z.input}`]:{padding:"7px 4px"},[`& .${z.endAdornment}`]:{right:9}},[`& .${L.Z.root}.${$.Z.sizeSmall}`]:{paddingBottom:1,[`& .${L.Z.input}`]:{padding:"2.5px 4px"}},[`& .${$.Z.hiddenLabel}`]:{paddingTop:8},[`& .${L.Z.root}.${$.Z.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${z.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${L.Z.root}.${$.Z.hiddenLabel}.${$.Z.sizeSmall}`]:{[`& .${z.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${z.input}`]:(0,l.Z)({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})}))),q=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),G=(0,R.ZP)(I.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),U=(0,R.ZP)(I.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},t)=>(0,l.Z)({},t.popupIndicator,e.popupOpen&&t.popupIndicatorOpen)})((({ownerState:e})=>(0,l.Z)({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"}))),_=(0,R.ZP)(y.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${z.option}`]:t.option},t.popper,o.disablePortal&&t.popperDisablePortal]}})((({theme:e,ownerState:t})=>(0,l.Z)({zIndex:(e.vars||e).zIndex.modal},t.disablePortal&&{position:"absolute"}))),X=(0,R.ZP)(C.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})((({theme:e})=>(0,l.Z)({},e.typography.body1,{overflow:"auto"}))),J=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})((({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"}))),Q=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})((({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"}))),Y=(0,R.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})((({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${z.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${z.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${z.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,Z.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}}))),ee=(0,R.ZP)(O.Z,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})((({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8}))),te=(0,R.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,[`& .${z.option}`]:{paddingLeft:24}}),oe=i.forwardRef((function(e,t){var o,r,a,c;const u=(0,T.Z)({props:e,name:"MuiAutocomplete"}),{autoComplete:d=!1,autoHighlight:g=!1,autoSelect:h=!1,blurOnSelect:f=!1,ChipProps:m,className:b,clearIcon:v=j||(j=(0,H.jsx)(w.Z,{fontSize:"small"})),clearOnBlur:Z=!u.freeSolo,clearOnEscape:O=!1,clearText:I="Clear",closeText:S="Close",componentsProps:$={},defaultValue:P=(u.multiple?[]:null),disableClearable:L=!1,disableCloseOnSelect:R=!1,disabled:M=!1,disabledItemsFocusable:N=!1,disableListWrap:z=!1,disablePortal:oe=!1,filterSelectedOptions:ne=!1,forcePopupIcon:re="auto",freeSolo:ae=!1,fullWidth:le=!1,getLimitTagsText:ie=(e=>`+${e}`),getOptionLabel:se,groupBy:pe,handleHomeEndKeys:ce=!u.freeSolo,includeInputInList:ue=!1,limitTags:de=-1,ListboxComponent:ge="ul",ListboxProps:he,loading:fe=!1,loadingText:me="Loading\u2026",multiple:be=!1,noOptionsText:ve="No options",openOnFocus:xe=!1,openText:Ze="Open",PaperComponent:ye=C.Z,PopperComponent:Oe=y.Z,popupIcon:Ce=V||(V=(0,H.jsx)(A.Z,{})),readOnly:Ie=!1,renderGroup:ke,renderInput:Se,renderOption:$e,renderTags:Pe,selectOnFocus:Le=!u.freeSolo,size:we="medium",slotProps:Ae={}}=u,Te=(0,n.Z)(u,W),{getRootProps:Re,getInputProps:Me,getInputLabelProps:Ne,getPopupIndicatorProps:Ee,getClearProps:ze,getTagProps:je,getListboxProps:Ve,getOptionProps:De,value:Fe,dirty:He,expanded:We,id:Be,popupOpen:Ke,focused:qe,focusedTag:Ge,anchorEl:Ue,setAnchorEl:_e,inputValue:Xe,groupedOptions:Je}=x((0,l.Z)({},u,{componentName:"Autocomplete"})),Qe=!L&&!M&&He&&!Ie,Ye=(!ae||!0===re)&&!1!==re,{onMouseDown:et}=Me(),{ref:tt}=null!=he?he:{},ot=Ve(),{ref:nt}=ot,rt=(0,n.Z)(ot,B),at=(0,F.Z)(nt,tt),lt=se||(e=>{var t;return null!=(t=e.label)?t:e}),it=(0,l.Z)({},u,{disablePortal:oe,expanded:We,focused:qe,fullWidth:le,getOptionLabel:lt,hasClearIcon:Qe,hasPopupIcon:Ye,inputFocused:-1===Ge,popupOpen:Ke,size:we}),st=(e=>{const{classes:t,disablePortal:o,expanded:n,focused:r,fullWidth:a,hasClearIcon:l,hasPopupIcon:i,inputFocused:s,popupOpen:c,size:u}=e,d={root:["root",n&&"expanded",r&&"focused",a&&"fullWidth",l&&"hasClearIcon",i&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",s&&"inputFocused"],tag:["tag",`tagSize${(0,D.Z)(u)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",c&&"popupIndicatorOpen"],popper:["popper",o&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,p.Z)(d,E,t)})(it);let pt;if(be&&Fe.length>0){const e=e=>(0,l.Z)({className:st.tag,disabled:M},je(e));pt=Pe?Pe(Fe,e,it):Fe.map(((t,o)=>(0,H.jsx)(k.Z,(0,l.Z)({label:lt(t),size:we},e({index:o}),m))))}if(de>-1&&Array.isArray(pt)){const e=pt.length-de;!qe&&e>0&&(pt=pt.splice(0,de),pt.push((0,H.jsx)("span",{className:st.tag,children:ie(e)},pt.length)))}const ct=ke||(e=>(0,H.jsxs)("li",{children:[(0,H.jsx)(ee,{className:st.groupLabel,ownerState:it,component:"div",children:e.group}),(0,H.jsx)(te,{className:st.groupUl,ownerState:it,children:e.children})]},e.key)),ut=$e||((e,t)=>(0,H.jsx)("li",(0,l.Z)({},e,{children:lt(t)}))),dt=(e,t)=>{const o=De({option:e,index:t});return ut((0,l.Z)({},o,{className:st.option}),e,{selected:o["aria-selected"],index:t,inputValue:Xe},it)},gt=null!=(o=Ae.clearIndicator)?o:$.clearIndicator,ht=null!=(r=Ae.paper)?r:$.paper,ft=null!=(a=Ae.popper)?a:$.popper,mt=null!=(c=Ae.popupIndicator)?c:$.popupIndicator;return(0,H.jsxs)(i.Fragment,{children:[(0,H.jsx)(K,(0,l.Z)({ref:t,className:(0,s.Z)(st.root,b),ownerState:it},Re(Te),{children:Se({id:Be,disabled:M,fullWidth:!0,size:"small"===we?"small":void 0,InputLabelProps:Ne(),InputProps:(0,l.Z)({ref:_e,className:st.inputRoot,startAdornment:pt,onClick:e=>{e.target===e.currentTarget&&et(e)}},(Qe||Ye)&&{endAdornment:(0,H.jsxs)(q,{className:st.endAdornment,ownerState:it,children:[Qe?(0,H.jsx)(G,(0,l.Z)({},ze(),{"aria-label":I,title:I,ownerState:it},gt,{className:(0,s.Z)(st.clearIndicator,null==gt?void 0:gt.className),children:v})):null,Ye?(0,H.jsx)(U,(0,l.Z)({},Ee(),{disabled:M,"aria-label":Ke?S:Ze,title:Ke?S:Ze,ownerState:it},mt,{className:(0,s.Z)(st.popupIndicator,null==mt?void 0:mt.className),children:Ce})):null]})}),inputProps:(0,l.Z)({className:st.input,disabled:M,readOnly:Ie},Me())})})),Ue?(0,H.jsx)(_,(0,l.Z)({as:Oe,disablePortal:oe,style:{width:Ue?Ue.clientWidth:null},ownerState:it,role:"presentation",anchorEl:Ue,open:Ke},ft,{className:(0,s.Z)(st.popper,null==ft?void 0:ft.className),children:(0,H.jsxs)(X,(0,l.Z)({ownerState:it,as:ye},ht,{className:(0,s.Z)(st.paper,null==ht?void 0:ht.className),children:[fe&&0===Je.length?(0,H.jsx)(J,{className:st.loading,ownerState:it,children:me}):null,0!==Je.length||ae||fe?null:(0,H.jsx)(Q,{className:st.noOptions,ownerState:it,role:"presentation",onMouseDown:e=>{e.preventDefault()},children:ve}),Je.length>0?(0,H.jsx)(Y,(0,l.Z)({as:ge,className:st.listbox,ownerState:it},rt,he,{ref:at,children:Je.map(((e,t)=>pe?ct({key:e.key,group:e.group,children:e.options.map(((t,o)=>dt(t,e.index+o)))}):dt(e,t)))})):null]}))})):null]})}));var ne=o(13780),re=o(94380),ae=o(83993),le=o(82056),ie=o(79906),se=o(86569),pe=o(52903),ce=o(28165);const ue=["options","valueKey","label","onChange","toImg","toExItemLabel","toExLabel","textFieldProps"],de=["options","valueKeys","label","onChange","toImg","toExItemLabel","toExLabel","chipProps"];function ge(e){var t;let{options:o,valueKey:l,label:s,onChange:p,toImg:c,toExItemLabel:u,textFieldProps:d}=e,g=(0,n.Z)(e,ue);const h=null!=(t=o.find((e=>e.key===l)))?t:null,f=(0,a.Z)();return(0,pe.tZ)(oe,Object.assign({autoHighlight:!0,options:o,value:h,onChange:(e,t,o)=>{var n;return p(null!=(n=null==t?void 0:t.key)?n:null)},isOptionEqualToValue:(e,t)=>e.key===(null==t?void 0:t.key),renderInput:e=>{var t;const o=null==h?void 0:h.color,n=o?null==(t=f.palette[o])?void 0:t.main:void 0,r=null==h?void 0:h.key;return(0,pe.tZ)(ne.Z,Object.assign({},e,d,{label:s,InputProps:Object.assign({},e.InputProps,{startAdornment:r?c(r):void 0}),inputProps:Object.assign({},e.inputProps,{autoComplete:"new-password",style:{color:n}}),color:l?"success":"primary"}))},renderOption:(e,t)=>(0,pe.BX)(re.Z,Object.assign({value:t.key,sx:{whiteSpace:"normal"}},e,{children:[(0,pe.tZ)(ae.Z,{children:c(t.key)}),(0,pe.tZ)(le.Z,{color:t.color,children:(0,pe.tZ)(i.Suspense,{fallback:(0,pe.tZ)(ie.Z,{variant:"text",width:100}),children:(0,pe.BX)(se.Z,{color:t.color,sx:{display:"flex",gap:1},children:[t.key===(null==h?void 0:h.key)?(0,pe.tZ)("strong",{children:t.label}):(0,pe.tZ)("span",{children:t.label}),null==u?void 0:u(t.key)]})})}),!!t.favorite&&(0,pe.tZ)(r.Z,{})]})),filterOptions:(e,{inputValue:t})=>e.filter((e=>{var o;return e.label.toLowerCase().includes(t.toLowerCase())||(null==(o=e.alternateNames)?void 0:o.some((e=>e.toLowerCase().includes(t.toLowerCase()))))}))},g))}function he(e){let{options:t,valueKeys:o,label:a,onChange:l,toImg:s,toExItemLabel:p,toExLabel:c,chipProps:u}=e,d=(0,n.Z)(e,de);const g=(0,i.useMemo)((()=>o.map((e=>t.find((t=>t.key===e)))).filter((e=>e))),[t,o]);return(0,pe.tZ)(oe,Object.assign({autoHighlight:!0,options:t,multiple:!0,disableCloseOnSelect:!0,value:g,onChange:(e,t,o)=>"clear"===o?l([]):null!==t&&l(t.map((e=>e.key))),isOptionEqualToValue:(e,t)=>e.key===t.key,renderInput:e=>(0,pe.tZ)(ne.Z,Object.assign({},e,{label:a,inputProps:Object.assign({},e.inputProps,{autoComplete:"new-password"}),color:o.length?"success":"primary"})),renderOption:(e,t)=>(0,pe.BX)(re.Z,Object.assign({value:t.key},e,{children:[(0,pe.tZ)(ae.Z,{children:s(t.key)}),(0,pe.tZ)(le.Z,{children:(0,pe.tZ)(i.Suspense,{fallback:(0,pe.tZ)(ie.Z,{variant:"text",width:100}),children:(0,pe.BX)(se.Z,{color:t.color,sx:{display:"flex",gap:1},children:[o.includes(t.key)?(0,pe.tZ)("strong",{children:t.label}):(0,pe.tZ)("span",{children:t.label}),null==p?void 0:p(t.key)]})})}),!!t.favorite&&(0,pe.tZ)(r.Z,{})]})),renderTags:(e,t)=>e.map((({key:e,label:o,color:n},r)=>(0,ce.az)(k.Z,Object.assign({},u,t({index:r}),{key:`${r}${e}${o}`,icon:s(e),label:c?(0,pe.BX)("span",{children:[o," ",c(e)]}):o,color:n})))),filterOptions:(e,{inputValue:t})=>e.filter((e=>{var o;return e.label.toLowerCase().includes(t.toLowerCase())||(null==(o=e.alternateNames)?void 0:o.some((e=>e.toLowerCase().includes(t.toLowerCase()))))}))},d))}}}]);