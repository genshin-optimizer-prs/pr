import{g as W,fo as B,aa as x,d as t,fp as A,h as c,k as E,fq as N,bI as I,r as m,aY as j,C as w,i as T,e as f,bP as F,bN as h,bQ as z,T as y,al as g,f0 as D,fr as H,fs as k,eU as $,B as q,W as L}from"./index-BlOTeW9N.js";var C={exports:{}},U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=U,Q=Y;function b(){}function S(){}S.resetWarningCache=b;var V=function(){function e(s,i,l,r,d,p){if(p!==Q){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function a(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:S,resetWarningCache:b};return o.PropTypes=o,o};C.exports=V();var G=C.exports;const M=W(G);function X({dataAdSlot:e,bgt:a="normal",maxHeight:o=350}){const{width:s,height:i,ref:l}=B(),[r,d,p]=x(!0);return r?t(c,{ref:l,sx:{height:"100%",width:"100%",maxHeight:o},children:s&&t(A,{bgt:a,onClose:n=>{n.stopPropagation(),p()},dataAdSlot:e,sx:{width:s,height:Math.max(i,o)}})}):null}function Z({characterKey:e,onClick:a,onMouseDown:o,onMouseEnter:s,hoverChild:i,hideFav:l}){const r=E(e),{favorite:d}=N(e),{gender:p}=I(),{silly:n}=m.useContext(j),u=m.useCallback(()=>a==null?void 0:a(e),[e,a]),v=m.useCallback(O=>t(w,{onClick:u,onMouseDown:o,onMouseEnter:s,children:O}),[u,o,s]),[P,_,R]=x();return t(q,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&P,onClose:R,onOpen:_,title:i,children:t(T,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f($,{condition:!!a||!!o||!!s,wrapper:v,children:[t(c,{display:"flex",className:`grad-${F(e).rarity}star`,children:t(c,{component:h?h:"img",src:z(e,p,n),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(g,{color:"primary",children:[r.level,"/",D[r.ascension]]})})}),!l&&t(c,{sx:{position:"absolute",top:0,right:0},children:d?t(H,{fontSize:"small"}):t(k,{fontSize:"small"})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(g,{color:"secondary",children:["C",r.constellation]})})})]})})})}function K({index:e}){return t(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(c,{component:h?h:"img",src:L.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{X as A,K as B,Z as C,M as P};
