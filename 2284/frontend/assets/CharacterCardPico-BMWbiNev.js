import{x as O,fq as W,ae as g,b as a,fr as $,f as l,i as B,fs as A,bM as E,r as d,b0 as I,C as j,h as x,d as f,bS as w,bT as F,T as m,ap as y,f5 as N,ft as z,fu as D,eU as H,B as k,Y as q}from"./index-B7QkzUzd.js";function J(e){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(o,s,i,n)=>s+s+i+i+n+n);const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function Q(e,t){if(e)return`rgba(${e.r},${e.g},${e.b},${t})`}var T={exports:{}},L="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U=L,Y=U;function b(){}function C(){}C.resetWarningCache=b;var M=function(){function e(o,s,i,n,h,c){if(c!==Y){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C,resetWarningCache:b};return r.PropTypes=r,r};T.exports=M();var V=T.exports;const X=O(V);function Z({dataAdSlot:e,bgt:t="normal",maxHeight:r=350}){const{width:o,height:s,ref:i}=W(),[n,h,c]=g(!0);return n?a(l,{ref:i,sx:{height:"100%",width:"100%",maxHeight:r},children:o&&a($,{bgt:t,onClose:p=>{p.stopPropagation(),c()},dataAdSlot:e,sx:{width:o,height:Math.max(s,r)}})}):null}function K({characterKey:e,onClick:t,onMouseDown:r,onMouseEnter:o,hoverChild:s,hideFav:i}){const n=B(e),{favorite:h}=A(e),{gender:c}=E(),{silly:p}=d.useContext(I),u=d.useCallback(()=>t==null?void 0:t(e),[e,t]),S=d.useCallback(_=>a(j,{onClick:u,onMouseDown:r,onMouseEnter:o,children:_}),[u,r,o]),[v,P,R]=g();return a(k,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!s&&v,onClose:R,onOpen:P,title:s,children:a(x,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f(H,{condition:!!t||!!r||!!o,wrapper:S,children:[a(l,{display:"flex",className:`grad-${w(e).rarity}star`,children:a(l,{component:"img",src:F(e,c,p),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),n&&a(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:a("strong",{children:f(y,{color:"primary",children:[n.level,"/",N[n.ascension]]})})}),!i&&a(l,{sx:{position:"absolute",top:0,right:0},children:h?a(z,{fontSize:"small"}):a(D,{fontSize:"small"})}),n&&a(m,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:a("strong",{children:f(y,{color:"secondary",children:["C",n.constellation]})})})]})})})}function ee({index:e}){return a(x,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:a(l,{component:"img",src:q.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{Z as A,ee as B,K as C,X as P,Q as c,J as h};
