import{g as W,fn as B,aa as x,d as t,fo as A,h as c,k as E,fp as N,bI as I,r as m,aY as j,C as w,i as T,e as f,bP as F,bN as h,bQ as z,T as y,al as g,f2 as D,fq as H,fr as k,eR as $,B as q,W as L}from"./index-rkLWuo7p.js";var C={exports:{}},U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=U,Q=Y;function b(){}function S(){}S.resetWarningCache=b;var V=function(){function e(n,i,l,r,d,p){if(p!==Q){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function a(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:S,resetWarningCache:b};return o.PropTypes=o,o};C.exports=V();var G=C.exports;const M=W(G);function X({dataAdSlot:e,bgt:a="normal",maxHeight:o=350}){const{width:n,height:i,ref:l}=B(),[r,d,p]=x(!0);return r?t(c,{ref:l,sx:{height:"100%",width:"100%",maxHeight:o},children:n&&t(A,{bgt:a,onClose:s=>{s.stopPropagation(),p()},dataAdSlot:e,sx:{width:n,height:Math.max(i,o)}})}):null}function Z({characterKey:e,onClick:a,onMouseDown:o,onMouseEnter:n,hoverChild:i,hideFav:l}){const r=E(e),{favorite:d}=N(e),{gender:p}=I(),{silly:s}=m.useContext(j),u=m.useCallback(()=>a==null?void 0:a(e),[e,a]),v=m.useCallback(O=>t(w,{onClick:u,onMouseDown:o,onMouseEnter:n,children:O}),[u,o,n]),[P,R,_]=x();return t(q,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&P,onClose:_,onOpen:R,title:i,children:t(T,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f($,{condition:!!a||!!o||!!n,wrapper:v,children:[t(c,{display:"flex",className:`grad-${F(e).rarity}star`,children:t(c,{component:h?h:"img",src:z(e,p,s),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(g,{color:"primary",children:[r.level,"/",D[r.ascension]]})})}),!l&&t(c,{sx:{position:"absolute",top:0,right:0},children:d?t(H,{fontSize:"small"}):t(k,{fontSize:"small"})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(g,{color:"secondary",children:["C",r.constellation]})})})]})})})}function K({index:e}){return t(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(c,{component:h?h:"img",src:L.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{X as A,K as B,Z as C,M as P};
