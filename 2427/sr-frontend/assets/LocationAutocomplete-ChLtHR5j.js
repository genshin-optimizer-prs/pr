import{r as m,c as Ft,j as P,bw as jt,i as it,o as Ke,bx as zt,_ as h,a as Lt,g as St,s as F,b as Je,u as Qe,e as ce,f as ne,h as Ye,by as pe,I as kt,bz as Tt,P as At,v as pt,m as Ht,bt as Et,bA as Rt,X as qe,z as wt,A as Mt,a5 as Wt,D as E,H as yt,ab as Nt,b0 as Bt,C as Gt,a1 as Vt,ay as Ut,G as Kt}from"./index-B07Ycj80.js";import{i as ct,o as It,f as Ie,A as qt,g as Xt,l as vt,a as Jt,T as Qt,M as Yt}from"./DropdownButton-CxE-z66M.js";const Zt=t=>{const n=m.useRef({});return m.useEffect(()=>{n.current=t}),n.current},eo=Ft(P.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function Ct(t){return typeof t.normalize<"u"?t.normalize("NFD").replace(/[\u0300-\u036f]/g,""):t}function to(t={}){const{ignoreAccents:n=!0,ignoreCase:a=!0,limit:c,matchFrom:b="any",stringify:x,trim:y=!1}=t;return(d,{inputValue:I,getOptionLabel:$})=>{let A=y?I.trim():I;a&&(A=A.toLowerCase()),n&&(A=Ct(A));const L=A?d.filter(u=>{let S=(x||$)(u);return a&&(S=S.toLowerCase()),n&&(S=Ct(S)),b==="start"?S.indexOf(A)===0:S.indexOf(A)>-1}):d;return typeof c=="number"?L.slice(0,c):L}}function Xe(t,n){for(let a=0;a<t.length;a+=1)if(n(t[a]))return a;return-1}const oo=to(),Ot=5,no=t=>{var n;return t.current!==null&&((n=t.current.parentElement)==null?void 0:n.contains(document.activeElement))};function ro(t){const{unstable_isActiveElementInListbox:n=no,unstable_classNamePrefix:a="Mui",autoComplete:c=!1,autoHighlight:b=!1,autoSelect:x=!1,blurOnSelect:y=!1,clearOnBlur:d=!t.freeSolo,clearOnEscape:I=!1,componentName:$="useAutocomplete",defaultValue:A=t.multiple?[]:null,disableClearable:L=!1,disableCloseOnSelect:u=!1,disabled:S,disabledItemsFocusable:k=!1,disableListWrap:j=!1,filterOptions:re=oo,filterSelectedOptions:V=!1,freeSolo:X=!1,getOptionDisabled:W,getOptionKey:Ze,getOptionLabel:Ae=o=>{var e;return(e=o.label)!=null?e:o},groupBy:ve,handleHomeEndKeys:te=!t.freeSolo,id:ft,includeInputInList:et=!1,inputValue:Re,isOptionEqualToValue:ue=(o,e)=>o===e,multiple:v=!1,onChange:Ce,onClose:we,onHighlightChange:Me,onInputChange:Y,onOpen:Ne,open:gt,openOnFocus:mt=!1,options:Oe,readOnly:se=!1,selectOnFocus:Pe=!t.freeSolo,value:De}=t,z=jt(ft);let N=Ae;N=o=>{const e=Ae(o);return typeof e!="string"?String(e):e};const $e=m.useRef(!1),_e=m.useRef(!0),T=m.useRef(null),H=m.useRef(null),[de,tt]=m.useState(null),[D,Le]=m.useState(-1),Fe=b?0:-1,w=m.useRef(Fe),[l,ht]=it({controlled:De,default:A,name:$}),[f,Z]=it({controlled:Re,default:"",name:$,state:"inputValue"}),[fe,je]=m.useState(!1),ae=m.useCallback((o,e)=>{if(!(v?l.length<e.length:e!==null)&&!d)return;let r;if(v)r="";else if(e==null)r="";else{const i=N(e);r=typeof i=="string"?i:""}f!==r&&(Z(r),Y&&Y(o,r,"reset"))},[N,f,v,Y,Z,d,l]),[oe,ze]=it({controlled:gt,default:!1,name:$,state:"open"}),[ot,He]=m.useState(!0),Ee=!v&&l!=null&&f===N(l),_=oe&&!se,C=_?re(Oe.filter(o=>!(V&&(v?l:[l]).some(e=>e!==null&&ue(o,e)))),{inputValue:Ee&&ot?"":f,getOptionLabel:N}):[],U=Zt({filteredOptions:C,value:l,inputValue:f});m.useEffect(()=>{const o=l!==U.value;fe&&!o||X&&!o||ae(null,l)},[l,ae,fe,U.value,X]);const Se=oe&&C.length>0&&!se,ge=Ke(o=>{o===-1?T.current.focus():de.querySelector(`[data-tag-index="${o}"]`).focus()});m.useEffect(()=>{v&&D>l.length-1&&(Le(-1),ge(-1))},[l,v,D,ge]);function me(o,e){if(!H.current||o<0||o>=C.length)return-1;let s=o;for(;;){const r=H.current.querySelector(`[data-option-index="${s}"]`),i=k?!1:!r||r.disabled||r.getAttribute("aria-disabled")==="true";if(r&&r.hasAttribute("tabindex")&&!i)return s;if(e==="next"?s=(s+1)%C.length:s=(s-1+C.length)%C.length,s===o)return-1}}const J=Ke(({event:o,index:e,reason:s="auto"})=>{if(w.current=e,e===-1?T.current.removeAttribute("aria-activedescendant"):T.current.setAttribute("aria-activedescendant",`${z}-option-${e}`),Me&&Me(o,e===-1?null:C[e],s),!H.current)return;const r=H.current.querySelector(`[role="option"].${a}-focused`);r&&(r.classList.remove(`${a}-focused`),r.classList.remove(`${a}-focusVisible`));let i=H.current;if(H.current.getAttribute("role")!=="listbox"&&(i=H.current.parentElement.querySelector('[role="listbox"]')),!i)return;if(e===-1){i.scrollTop=0;return}const g=H.current.querySelector(`[data-option-index="${e}"]`);if(g&&(g.classList.add(`${a}-focused`),s==="keyboard"&&g.classList.add(`${a}-focusVisible`),i.scrollHeight>i.clientHeight&&s!=="mouse"&&s!=="touch")){const O=g,G=i.clientHeight+i.scrollTop,Ue=O.offsetTop+O.offsetHeight;Ue>G?i.scrollTop=Ue-i.clientHeight:O.offsetTop-O.offsetHeight*(ve?1.3:0)<i.scrollTop&&(i.scrollTop=O.offsetTop-O.offsetHeight*(ve?1.3:0))}}),K=Ke(({event:o,diff:e,direction:s="next",reason:r="auto"})=>{if(!_)return;const g=me((()=>{const O=C.length-1;if(e==="reset")return Fe;if(e==="start")return 0;if(e==="end")return O;const G=w.current+e;return G<0?G===-1&&et?-1:j&&w.current!==-1||Math.abs(e)>1?0:O:G>O?G===O+1&&et?-1:j||Math.abs(e)>1?O:0:G})(),s);if(J({index:g,reason:r,event:o}),c&&e!=="reset")if(g===-1)T.current.value=f;else{const O=N(C[g]);T.current.value=O,O.toLowerCase().indexOf(f.toLowerCase())===0&&f.length>0&&T.current.setSelectionRange(f.length,O.length)}}),he=()=>{const o=(e,s)=>{const r=e?N(e):"",i=s?N(s):"";return r===i};if(w.current!==-1&&U.filteredOptions&&U.filteredOptions.length!==C.length&&U.inputValue===f&&(v?l.length===U.value.length&&U.value.every((e,s)=>N(l[s])===N(e)):o(U.value,l))){const e=U.filteredOptions[w.current];if(e)return Xe(C,s=>N(s)===N(e))}return-1},ke=m.useCallback(()=>{if(!_)return;const o=he();if(o!==-1){w.current=o;return}const e=v?l[0]:l;if(C.length===0||e==null){K({diff:"reset"});return}if(H.current){if(e!=null){const s=C[w.current];if(v&&s&&Xe(l,i=>ue(s,i))!==-1)return;const r=Xe(C,i=>ue(i,e));r===-1?K({diff:"reset"}):J({index:r});return}if(w.current>=C.length-1){J({index:C.length-1});return}J({index:w.current})}},[C.length,v?!1:l,V,K,J,_,f,v]),nt=Ke(o=>{zt(H,o),o&&ke()});m.useEffect(()=>{ke()},[ke]);const B=o=>{oe||(ze(!0),He(!0),Ne&&Ne(o))},ee=(o,e)=>{oe&&(ze(!1),we&&we(o,e))},Q=(o,e,s,r)=>{if(v){if(l.length===e.length&&l.every((i,g)=>i===e[g]))return}else if(l===e)return;Ce&&Ce(o,e,s,r),ht(e)},be=m.useRef(!1),le=(o,e,s="selectOption",r="options")=>{let i=s,g=e;if(v){g=Array.isArray(l)?l.slice():[];const O=Xe(g,G=>ue(e,G));O===-1?g.push(e):r!=="freeSolo"&&(g.splice(O,1),i="removeOption")}ae(o,g),Q(o,g,i,{option:e}),!u&&(!o||!o.ctrlKey&&!o.metaKey)&&ee(o,i),(y===!0||y==="touch"&&be.current||y==="mouse"&&!be.current)&&T.current.blur()};function We(o,e){if(o===-1)return-1;let s=o;for(;;){if(e==="next"&&s===l.length||e==="previous"&&s===-1)return-1;const r=de.querySelector(`[data-tag-index="${s}"]`);if(!r||!r.hasAttribute("tabindex")||r.disabled||r.getAttribute("aria-disabled")==="true")s+=e==="next"?1:-1;else return s}}const Be=(o,e)=>{if(!v)return;f===""&&ee(o,"toggleInput");let s=D;D===-1?f===""&&e==="previous"&&(s=l.length-1):(s+=e==="next"?1:-1,s<0&&(s=0),s===l.length&&(s=-1)),s=We(s,e),Le(s),ge(s)},Ge=o=>{$e.current=!0,Z(""),Y&&Y(o,"","clear"),Q(o,v?[]:null,"clear")},rt=o=>e=>{if(o.onKeyDown&&o.onKeyDown(e),!e.defaultMuiPrevented&&(D!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(Le(-1),ge(-1)),e.which!==229))switch(e.key){case"Home":_&&te&&(e.preventDefault(),K({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":_&&te&&(e.preventDefault(),K({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),K({diff:-Ot,direction:"previous",reason:"keyboard",event:e}),B(e);break;case"PageDown":e.preventDefault(),K({diff:Ot,direction:"next",reason:"keyboard",event:e}),B(e);break;case"ArrowDown":e.preventDefault(),K({diff:1,direction:"next",reason:"keyboard",event:e}),B(e);break;case"ArrowUp":e.preventDefault(),K({diff:-1,direction:"previous",reason:"keyboard",event:e}),B(e);break;case"ArrowLeft":Be(e,"previous");break;case"ArrowRight":Be(e,"next");break;case"Enter":if(w.current!==-1&&_){const s=C[w.current],r=W?W(s):!1;if(e.preventDefault(),r)return;le(e,s,"selectOption"),c&&T.current.setSelectionRange(T.current.value.length,T.current.value.length)}else X&&f!==""&&Ee===!1&&(v&&e.preventDefault(),le(e,f,"createOption","freeSolo"));break;case"Escape":_?(e.preventDefault(),e.stopPropagation(),ee(e,"escape")):I&&(f!==""||v&&l.length>0)&&(e.preventDefault(),e.stopPropagation(),Ge(e));break;case"Backspace":if(v&&!se&&f===""&&l.length>0){const s=D===-1?l.length-1:D,r=l.slice();r.splice(s,1),Q(e,r,"removeOption",{option:l[s]})}break;case"Delete":if(v&&!se&&f===""&&l.length>0&&D!==-1){const s=D,r=l.slice();r.splice(s,1),Q(e,r,"removeOption",{option:l[s]})}break}},bt=o=>{je(!0),mt&&!$e.current&&B(o)},xe=o=>{if(n(H)){T.current.focus();return}je(!1),_e.current=!0,$e.current=!1,x&&w.current!==-1&&_?le(o,C[w.current],"blur"):x&&X&&f!==""?le(o,f,"blur","freeSolo"):d&&ae(o,l),ee(o,"blur")},M=o=>{const e=o.target.value;f!==e&&(Z(e),He(!1),Y&&Y(o,e,"input")),e===""?!L&&!v&&Q(o,null,"clear"):B(o)},R=o=>{const e=Number(o.currentTarget.getAttribute("data-option-index"));w.current!==e&&J({event:o,index:e,reason:"mouse"})},q=o=>{J({event:o,index:Number(o.currentTarget.getAttribute("data-option-index")),reason:"touch"}),be.current=!0},xt=o=>{const e=Number(o.currentTarget.getAttribute("data-option-index"));le(o,C[e],"selectOption"),be.current=!1},st=o=>e=>{const s=l.slice();s.splice(o,1),Q(e,s,"removeOption",{option:l[o]})},at=o=>{oe?ee(o,"toggleInput"):B(o)},lt=o=>{o.currentTarget.contains(o.target)&&o.target.getAttribute("id")!==z&&o.preventDefault()},Ve=o=>{o.currentTarget.contains(o.target)&&(T.current.focus(),Pe&&_e.current&&T.current.selectionEnd-T.current.selectionStart===0&&T.current.select(),_e.current=!1)},Te=o=>{!S&&(f===""||!oe)&&at(o)};let ie=X&&f.length>0;ie=ie||(v?l.length>0:l!==null);let ye=C;return ve&&(ye=C.reduce((o,e,s)=>{const r=ve(e);return o.length>0&&o[o.length-1].group===r?o[o.length-1].options.push(e):o.push({key:s,index:s,group:r,options:[e]}),o},[])),S&&fe&&xe(),{getRootProps:(o={})=>h({"aria-owns":Se?`${z}-listbox`:null},o,{onKeyDown:rt(o),onMouseDown:lt,onClick:Ve}),getInputLabelProps:()=>({id:`${z}-label`,htmlFor:z}),getInputProps:()=>({id:z,value:f,onBlur:xe,onFocus:bt,onChange:M,onMouseDown:Te,"aria-activedescendant":_?"":null,"aria-autocomplete":c?"both":"list","aria-controls":Se?`${z}-listbox`:void 0,"aria-expanded":Se,autoComplete:"off",ref:T,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:S}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:Ge}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:at}),getTagProps:({index:o})=>h({key:o,"data-tag-index":o,tabIndex:-1},!se&&{onDelete:st(o)}),getListboxProps:()=>({role:"listbox",id:`${z}-listbox`,"aria-labelledby":`${z}-label`,ref:nt,onMouseDown:o=>{o.preventDefault()}}),getOptionProps:({index:o,option:e})=>{var s;const r=(v?l:[l]).some(g=>g!=null&&ue(e,g)),i=W?W(e):!1;return{key:(s=Ze==null?void 0:Ze(e))!=null?s:N(e),tabIndex:-1,role:"option",id:`${z}-option-${o}`,onMouseMove:R,onClick:xt,onTouchStart:q,"data-option-index":o,"aria-disabled":i,"aria-selected":r}},id:z,inputValue:f,value:l,dirty:ie,expanded:_&&de,popupOpen:_,focused:fe||D!==-1,anchorEl:de,setAnchorEl:tt,focusedTag:D,groupedOptions:ye}}function so(t){return Lt("MuiListSubheader",t)}St("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const ao=["className","color","component","disableGutters","disableSticky","inset"],lo=t=>{const{classes:n,color:a,disableGutters:c,inset:b,disableSticky:x}=t,y={root:["root",a!=="default"&&`color${Je(a)}`,!c&&"gutters",b&&"inset",!x&&"sticky"]};return Ye(y,so,n)},io=F("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[n.root,a.color!=="default"&&n[`color${Je(a.color)}`],!a.disableGutters&&n.gutters,a.inset&&n.inset,!a.disableSticky&&n.sticky]}})(({theme:t,ownerState:n})=>h({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(t.vars||t).palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},n.color==="primary"&&{color:(t.vars||t).palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(t.vars||t).palette.background.paper})),Dt=m.forwardRef(function(n,a){const c=Qe({props:n,name:"MuiListSubheader"}),{className:b,color:x="default",component:y="li",disableGutters:d=!1,disableSticky:I=!1,inset:$=!1}=c,A=ce(c,ao),L=h({},c,{color:x,component:y,disableGutters:d,disableSticky:I,inset:$}),u=lo(L);return P.jsx(io,h({as:y,className:ne(u.root,b),ref:a,ownerState:L},A))});Dt.muiSkipListHighlight=!0;const po=Dt;function co(t){return Lt("MuiAutocomplete",t)}const p=St("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Pt,$t;const uo=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],fo=["ref"],go=["key"],mo=["key"],ho=t=>{const{classes:n,disablePortal:a,expanded:c,focused:b,fullWidth:x,hasClearIcon:y,hasPopupIcon:d,inputFocused:I,popupOpen:$,size:A}=t,L={root:["root",c&&"expanded",b&&"focused",x&&"fullWidth",y&&"hasClearIcon",d&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",I&&"inputFocused"],tag:["tag",`tagSize${Je(A)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",$&&"popupIndicatorOpen"],popper:["popper",a&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return Ye(L,co,n)},bo=F("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t,{fullWidth:c,hasClearIcon:b,hasPopupIcon:x,inputFocused:y,size:d}=a;return[{[`& .${p.tag}`]:n.tag},{[`& .${p.tag}`]:n[`tagSize${Je(d)}`]},{[`& .${p.inputRoot}`]:n.inputRoot},{[`& .${p.input}`]:n.input},{[`& .${p.input}`]:y&&n.inputFocused},n.root,c&&n.fullWidth,x&&n.hasPopupIcon,b&&n.hasClearIcon]}})({[`&.${p.focused} .${p.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${p.clearIndicator}`]:{visibility:"visible"}},[`& .${p.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${p.inputRoot}`]:{[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:30},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:56},[`& .${p.input}`]:{width:0,minWidth:30}},[`& .${ct.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${ct.root}.${pe.sizeSmall}`]:{[`& .${ct.input}`]:{padding:"2px 4px 3px 0"}},[`& .${It.root}`]:{padding:9,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${p.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${It.root}.${pe.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${p.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Ie.root}`]:{paddingTop:19,paddingLeft:8,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${Ie.input}`]:{padding:"7px 4px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${Ie.root}.${pe.sizeSmall}`]:{paddingBottom:1,[`& .${Ie.input}`]:{padding:"2.5px 4px"}},[`& .${pe.hiddenLabel}`]:{paddingTop:8},[`& .${Ie.root}.${pe.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${p.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Ie.root}.${pe.hiddenLabel}.${pe.sizeSmall}`]:{[`& .${p.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${p.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${p.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${p.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${p.inputRoot}`]:{flexWrap:"wrap"}}}]}),xo=F("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(t,n)=>n.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),yo=F(kt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(t,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Io=F(kt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:t},n)=>h({},n.popupIndicator,t.popupOpen&&n.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),vo=F(Tt,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[{[`& .${p.option}`]:n.option},n.popper,a.disablePortal&&n.popperDisablePortal]}})(({theme:t})=>({zIndex:(t.vars||t).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),Co=F(At,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(t,n)=>n.paper})(({theme:t})=>h({},t.typography.body1,{overflow:"auto"})),Oo=F("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(t,n)=>n.loading})(({theme:t})=>({color:(t.vars||t).palette.text.secondary,padding:"14px 16px"})),Po=F("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(t,n)=>n.noOptions})(({theme:t})=>({color:(t.vars||t).palette.text.secondary,padding:"14px 16px"})),$o=F("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(t,n)=>n.listbox})(({theme:t})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${p.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[t.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${p.focused}`]:{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${p.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:pt(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${p.focused}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:pt(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:pt(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}}}})),Lo=F(po,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(t,n)=>n.groupLabel})(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,top:-8})),So=F("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(t,n)=>n.groupUl})({padding:0,[`& .${p.option}`]:{paddingLeft:24}}),ko=m.forwardRef(function(n,a){var c,b,x,y;const d=Qe({props:n,name:"MuiAutocomplete"}),{autoComplete:I=!1,autoHighlight:$=!1,autoSelect:A=!1,blurOnSelect:L=!1,ChipProps:u,className:S,clearIcon:k=Pt||(Pt=P.jsx(eo,{fontSize:"small"})),clearOnBlur:j=!d.freeSolo,clearOnEscape:re=!1,clearText:V="Clear",closeText:X="Close",componentsProps:W={},defaultValue:Ze=d.multiple?[]:null,disableClearable:Ae=!1,disableCloseOnSelect:ve=!1,disabled:te=!1,disabledItemsFocusable:ft=!1,disableListWrap:et=!1,disablePortal:Re=!1,filterSelectedOptions:ue=!1,forcePopupIcon:v="auto",freeSolo:Ce=!1,fullWidth:we=!1,getLimitTagsText:Me=r=>`+${r}`,getOptionLabel:Y,groupBy:Ne,handleHomeEndKeys:gt=!d.freeSolo,includeInputInList:mt=!1,limitTags:Oe=-1,ListboxComponent:se="ul",ListboxProps:Pe,loading:De=!1,loadingText:z="Loading…",multiple:N=!1,noOptionsText:$e="No options",openOnFocus:_e=!1,openText:T="Open",PaperComponent:H=At,PopperComponent:de=Tt,popupIcon:tt=$t||($t=P.jsx(qt,{})),readOnly:D=!1,renderGroup:Le,renderInput:Fe,renderOption:w,renderTags:l,selectOnFocus:ht=!d.freeSolo,size:f="medium",slotProps:Z={}}=d,fe=ce(d,uo),{getRootProps:je,getInputProps:ae,getInputLabelProps:oe,getPopupIndicatorProps:ze,getClearProps:ot,getTagProps:He,getListboxProps:Ee,getOptionProps:_,value:C,dirty:U,expanded:Se,id:ge,popupOpen:me,focused:J,focusedTag:K,anchorEl:he,setAnchorEl:ke,inputValue:nt,groupedOptions:B}=ro(h({},d,{componentName:"Autocomplete"})),ee=!Ae&&!te&&U&&!D,Q=(!Ce||v===!0)&&v!==!1,{onMouseDown:be}=ae(),{ref:le}=Pe??{},We=Ee(),{ref:Be}=We,Ge=ce(We,fo),rt=Ht(Be,le),xe=Y||(r=>{var i;return(i=r.label)!=null?i:r}),M=h({},d,{disablePortal:Re,expanded:Se,focused:J,fullWidth:we,getOptionLabel:xe,hasClearIcon:ee,hasPopupIcon:Q,inputFocused:K===-1,popupOpen:me,size:f}),R=ho(M);let q;if(N&&C.length>0){const r=i=>h({className:R.tag,disabled:te},He(i));l?q=l(C,r,M):q=C.map((i,g)=>{const O=r({index:g}),{key:G}=O,Ue=ce(O,go);return P.jsx(Et,h({label:xe(i),size:f},Ue,u),G)})}if(Oe>-1&&Array.isArray(q)){const r=q.length-Oe;!J&&r>0&&(q=q.splice(0,Oe),q.push(P.jsx("span",{className:R.tag,children:Me(r)},q.length)))}const st=Le||(r=>P.jsxs("li",{children:[P.jsx(Lo,{className:R.groupLabel,ownerState:M,component:"div",children:r.group}),P.jsx(So,{className:R.groupUl,ownerState:M,children:r.children})]},r.key)),lt=w||((r,i)=>{const{key:g}=r,O=ce(r,mo);return P.jsx("li",h({},O,{children:xe(i)}),g)}),Ve=(r,i)=>{const g=_({option:r,index:i});return lt(h({},g,{className:R.option}),r,{selected:g["aria-selected"],index:i,inputValue:nt},M)},Te=(c=Z.clearIndicator)!=null?c:W.clearIndicator,ie=(b=Z.paper)!=null?b:W.paper,ye=(x=Z.popper)!=null?x:W.popper,o=(y=Z.popupIndicator)!=null?y:W.popupIndicator,e=r=>P.jsx(vo,h({as:de,disablePortal:Re,style:{width:he?he.clientWidth:null},ownerState:M,role:"presentation",anchorEl:he,open:me},ye,{className:ne(R.popper,ye==null?void 0:ye.className),children:P.jsx(Co,h({ownerState:M,as:H},ie,{className:ne(R.paper,ie==null?void 0:ie.className),children:r}))}));let s=null;return B.length>0?s=e(P.jsx($o,h({as:se,className:R.listbox,ownerState:M},Ge,Pe,{ref:rt,children:B.map((r,i)=>Ne?st({key:r.key,group:r.group,children:r.options.map((g,O)=>Ve(g,r.index+O))}):Ve(r,i))}))):De&&B.length===0?s=e(P.jsx(Oo,{className:R.loading,ownerState:M,children:z})):B.length===0&&!Ce&&!De&&(s=e(P.jsx(Po,{className:R.noOptions,ownerState:M,role:"presentation",onMouseDown:r=>{r.preventDefault()},children:$e}))),P.jsxs(m.Fragment,{children:[P.jsx(bo,h({ref:a,className:ne(R.root,S),ownerState:M},je(fe),{children:Fe({id:ge,disabled:te,fullWidth:!0,size:f==="small"?"small":void 0,InputLabelProps:oe(),InputProps:h({ref:ke,className:R.inputRoot,startAdornment:q,onClick:r=>{r.target===r.currentTarget&&be(r)}},(ee||Q)&&{endAdornment:P.jsxs(xo,{className:R.endAdornment,ownerState:M,children:[ee?P.jsx(yo,h({},ot(),{"aria-label":V,title:V,ownerState:M},Te,{className:ne(R.clearIndicator,Te==null?void 0:Te.className),children:k})):null,Q?P.jsx(Io,h({},ze(),{disabled:te,"aria-label":me?X:T,title:me?X:T,ownerState:M},o,{className:ne(R.popupIndicator,o==null?void 0:o.className),children:tt})):null]})}),inputProps:h({className:R.input,disabled:te,readOnly:D},ae())})})),he?s:null]})}),To=ko,Ao=["className"],Ro=t=>{const{alignItems:n,classes:a}=t;return Ye({root:["root",n==="flex-start"&&"alignItemsFlexStart"]},Xt,a)},wo=F("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[n.root,a.alignItems==="flex-start"&&n.alignItemsFlexStart]}})(({theme:t,ownerState:n})=>h({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},n.alignItems==="flex-start"&&{marginTop:8})),Mo=m.forwardRef(function(n,a){const c=Qe({props:n,name:"MuiListItemIcon"}),{className:b}=c,x=ce(c,Ao),y=m.useContext(Rt),d=h({},c,{alignItems:y.alignItems}),I=Ro(d);return P.jsx(wo,h({className:ne(I.root,b),ownerState:d,ref:a},x))}),No=Mo,Do=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],_o=t=>{const{classes:n,inset:a,primary:c,secondary:b,dense:x}=t;return Ye({root:["root",a&&"inset",x&&"dense",c&&b&&"multiline"],primary:["primary"],secondary:["secondary"]},Jt,n)},Fo=F("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[{[`& .${vt.primary}`]:n.primary},{[`& .${vt.secondary}`]:n.secondary},n.root,a.inset&&n.inset,a.primary&&a.secondary&&n.multiline,a.dense&&n.dense]}})(({ownerState:t})=>h({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),jo=m.forwardRef(function(n,a){const c=Qe({props:n,name:"MuiListItemText"}),{children:b,className:x,disableTypography:y=!1,inset:d=!1,primary:I,primaryTypographyProps:$,secondary:A,secondaryTypographyProps:L}=c,u=ce(c,Do),{dense:S}=m.useContext(Rt);let k=I??b,j=A;const re=h({},c,{disableTypography:y,inset:d,primary:!!k,secondary:!!j,dense:S}),V=_o(re);return k!=null&&k.type!==qe&&!y&&(k=P.jsx(qe,h({variant:S?"body2":"body1",className:V.primary,component:$!=null&&$.variant?void 0:"span",display:"block"},$,{children:k}))),j!=null&&j.type!==qe&&!y&&(j=P.jsx(qe,h({variant:"body2",className:V.secondary,color:"text.secondary",display:"block"},L,{children:j}))),P.jsxs(Fo,h({className:ne(V.root,x),ownerState:re,ref:a},u,{children:[k,j]}))}),zo=jo;var ut={},Ho=Mt;Object.defineProperty(ut,"__esModule",{value:!0});var _t=ut.default=void 0,Eo=Ho(wt()),Wo=P,Bo=(0,Eo.default)((0,Wo.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");_t=ut.default=Bo;function Go({options:t,valueKey:n,label:a,onChange:c,toImg:b,toExItemLabel:x,toExLabel:y,textFieldProps:d,...I}){const $=t.find(L=>L.key===n),A=Wt();return E(To,{autoHighlight:!0,options:t,value:$??null,onChange:(L,u,S)=>c((u==null?void 0:u.key)??null),isOptionEqualToValue:(L,u)=>L.key===(u==null?void 0:u.key),renderInput:L=>{var W;const u=$==null?void 0:$.color,S=u?(W=A.palette[u])==null?void 0:W.main:void 0,k=$==null?void 0:$.key,{InputLabelProps:j,InputProps:re,inputProps:V,...X}=L;return E(Qt,{...X,...d,label:a,InputProps:{...re,startAdornment:typeof k=="string"?b(k):void 0},inputProps:{...V,autoComplete:"new-password",style:{color:S}},color:k?"success":"primary"})},renderOption:(L,u)=>{const{key:S,...k}=L;return yt(Yt,{value:u.key,sx:{whiteSpace:"normal"},...k,children:[E(No,{children:b(u.key)}),E(zo,{color:u.color,children:E(m.Suspense,{fallback:E(Nt,{variant:"text",width:100}),children:yt(Bt,{color:u.color,sx:{display:"flex",gap:1},children:[u.key===($==null?void 0:$.key)?E("strong",{children:u.label}):E("span",{children:u.label}),x==null?void 0:x(u.key)]})})}),!!u.favorite&&E(_t,{})]},S)},filterOptions:(L,{inputValue:u})=>L.filter(S=>{var k;return S.label.toLowerCase().includes(u.toLowerCase())||((k=S.alternateNames)==null?void 0:k.some(j=>j.toLowerCase().includes(u.toLowerCase())))}),...I})}var dt={},Vo=Mt;Object.defineProperty(dt,"__esModule",{value:!0});var Uo=dt.default=void 0,Ko=Vo(wt()),qo=P,Xo=(0,Ko.default)((0,qo.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");Uo=dt.default=Xo;function Yo({locKey:t,setLocKey:n,...a}){const{t:c}=Gt(["common","charNames_gen"]),{database:b}=Vt(),x=m.useCallback(I=>!!b.chars.get(I),[b.chars]),y=m.useCallback(I=>b.charMeta.get(I).favorite,[b.charMeta]),d=m.useMemo(()=>[{key:"",label:c("inventory")},...Ut.map(I=>({key:I,label:c(`charNames_gen:${I}`),favorite:y(I),color:x(I)?void 0:"secondary"}))],[x,y,c]);return E(m.Suspense,{fallback:E(Nt,{variant:"text",width:100}),children:E(Go,{size:"small",options:d,toImg:()=>E(Kt,{children:" "}),valueKey:t,onChange:I=>n(I??""),...a})})}export{eo as C,Go as G,No as L,zo as a,Yo as b,Uo as d};
