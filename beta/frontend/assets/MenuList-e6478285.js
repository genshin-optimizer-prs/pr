import{e as c,ay as j,cg as H,ds as T,cM as C,aM as A,j as N,c4 as O,aw as _}from"./index-ae7e509c.js";const $=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function w(r,t,n){return r===t?r.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:r.firstChild}function D(r,t,n){return r===t?n?r.firstChild:r.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:r.lastChild}function I(r,t){if(t===void 0)return!0;let n=r.innerText;return n===void 0&&(n=r.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function m(r,t,n,y,h,b){let d=!1,a=h(r,t,t?n:!1);for(;a;){if(a===r.firstChild){if(d)return!1;d=!0}const p=y?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!I(a,b)||p)a=h(r,a,n);else return a.focus(),!0}return!1}const z=c.forwardRef(function(t,n){const{actions:y,autoFocus:h=!1,autoFocusItem:b=!1,children:d,className:a,disabledItemsFocusable:p=!1,disableListWrap:g=!1,onKeyDown:x,variant:M="selectedMenu"}=t,v=j(t,$),o=c.useRef(null),F=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});H(()=>{h&&o.current.focus()},[h]),c.useImperativeHandle(y,()=>({adjustStyleForScrollbar:(e,s)=>{const u=!o.current.style.width;if(e.clientHeight<o.current.clientHeight&&u){const f=`${T(C(e))}px`;o.current.style[s.direction==="rtl"?"paddingLeft":"paddingRight"]=f,o.current.style.width=`calc(100% + ${f})`}return o.current}}),[]);const S=e=>{const s=o.current,u=e.key,f=C(s).activeElement;if(u==="ArrowDown")e.preventDefault(),m(s,f,g,p,w);else if(u==="ArrowUp")e.preventDefault(),m(s,f,g,p,D);else if(u==="Home")e.preventDefault(),m(s,null,g,p,w);else if(u==="End")e.preventDefault(),m(s,null,g,p,D);else if(u.length===1){const i=F.current,k=u.toLowerCase(),E=performance.now();i.keys.length>0&&(E-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&k!==i.keys[0]&&(i.repeating=!1)),i.lastTime=E,i.keys.push(k);const R=f&&!i.repeating&&I(f,i);i.previousKeyMatched&&(R||m(s,f,!1,p,w,i))?e.preventDefault():i.previousKeyMatched=!1}x&&x(e)},L=A(o,n);let l=-1;c.Children.forEach(d,(e,s)=>{if(!c.isValidElement(e)){l===s&&(l+=1,l>=d.length&&(l=-1));return}e.props.disabled||(M==="selectedMenu"&&e.props.selected||l===-1)&&(l=s),l===s&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(l+=1,l>=d.length&&(l=-1))});const K=c.Children.map(d,(e,s)=>{if(s===l){const u={};return b&&(u.autoFocus=!0),e.props.tabIndex===void 0&&M==="selectedMenu"&&(u.tabIndex=0),c.cloneElement(e,u)}return e});return N.jsx(O,_({role:"menu",ref:L,className:a,onKeyDown:S,tabIndex:h?0:-1},v,{children:K}))}),W=z;export{W as M};
