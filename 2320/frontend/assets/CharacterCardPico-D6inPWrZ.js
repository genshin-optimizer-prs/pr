import{x as O,fr as W,ae as g,b as t,fs as B,f as c,i as A,ft as E,bM as j,r as d,b0 as w,C as F,h as x,d as f,bS as N,bT as z,T as u,ap as y,f6 as D,fu as H,fv as I,eV as $,B as k,Y as L}from"./index-Drzcl--e.js";var T={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U=q,V=U;function C(){}function b(){}b.resetWarningCache=C;var Y=function(){function e(s,i,l,r,h,p){if(p!==V){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function o(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:b,resetWarningCache:C};return a.PropTypes=a,a};T.exports=Y();var M=T.exports;const J=O(M);function Q({dataAdSlot:e,bgt:o="normal",maxHeight:a=350}){const{width:s,height:i,ref:l}=W(),[r,h,p]=g(!0);return r?t(c,{ref:l,sx:{height:"100%",width:"100%",maxHeight:a},children:s&&t(B,{bgt:o,onClose:n=>{n.stopPropagation(),p()},dataAdSlot:e,sx:{width:s,height:Math.max(i,a)}})}):null}function X({characterKey:e,onClick:o,onMouseDown:a,onMouseEnter:s,hoverChild:i,hideFav:l}){const r=A(e),{favorite:h}=E(e),{gender:p}=j(),{silly:n}=d.useContext(w),m=d.useCallback(()=>o==null?void 0:o(e),[e,o]),S=d.useCallback(R=>t(F,{onClick:m,onMouseDown:a,onMouseEnter:s,children:R}),[m,a,s]),[v,P,_]=g();return t(k,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&v,onClose:_,onOpen:P,title:i,children:t(x,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f($,{condition:!!o||!!a||!!s,wrapper:S,children:[t(c,{display:"flex",className:`grad-${N(e).rarity}star`,children:t(c,{component:"img",src:z(e,p,n),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(u,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(y,{color:"primary",children:[r.level,"/",D[r.ascension]]})})}),!l&&t(c,{sx:{position:"absolute",top:0,right:0},children:h?t(H,{fontSize:"small"}):t(I,{fontSize:"small"})}),r&&t(u,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(y,{color:"secondary",children:["C",r.constellation]})})})]})})})}function Z({index:e}){return t(x,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(c,{component:"img",src:L.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{Q as A,Z as B,X as C,J as P};
