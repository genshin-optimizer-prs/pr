import{x as W,fs as B,ae as x,b as t,ft as A,f as c,i as E,fu as w,bM as N,r as m,b0 as j,C as F,h as T,d as f,bT as I,bR as h,bU as z,T as y,ap as g,f7 as D,fv as H,fw as $,eW as k,B as L,Y as U}from"./index-DKBT1kOJ.js";var b={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=q,M=Y;function C(){}function S(){}S.resetWarningCache=C;var V=function(){function e(s,i,l,r,d,p){if(p!==M){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function o(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:S,resetWarningCache:C};return a.PropTypes=a,a};b.exports=V();var G=b.exports;const Q=W(G);function X({dataAdSlot:e,bgt:o="normal",maxHeight:a=350}){const{width:s,height:i,ref:l}=B(),[r,d,p]=x(!0);return r?t(c,{ref:l,sx:{height:"100%",width:"100%",maxHeight:a},children:s&&t(A,{bgt:o,onClose:n=>{n.stopPropagation(),p()},dataAdSlot:e,sx:{width:s,height:Math.max(i,a)}})}):null}function Z({characterKey:e,onClick:o,onMouseDown:a,onMouseEnter:s,hoverChild:i,hideFav:l}){const r=E(e),{favorite:d}=w(e),{gender:p}=N(),{silly:n}=m.useContext(j),u=m.useCallback(()=>o==null?void 0:o(e),[e,o]),v=m.useCallback(O=>t(F,{onClick:u,onMouseDown:a,onMouseEnter:s,children:O}),[u,a,s]),[P,R,_]=x();return t(L,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&P,onClose:_,onOpen:R,title:i,children:t(T,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f(k,{condition:!!o||!!a||!!s,wrapper:v,children:[t(c,{display:"flex",className:`grad-${I(e).rarity}star`,children:t(c,{component:h?h:"img",src:z(e,p,n),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(g,{color:"primary",children:[r.level,"/",D[r.ascension]]})})}),!l&&t(c,{sx:{position:"absolute",top:0,right:0},children:d?t(H,{fontSize:"small"}):t($,{fontSize:"small"})}),r&&t(y,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(g,{color:"secondary",children:["C",r.constellation]})})})]})})})}function K({index:e}){return t(T,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(c,{component:h?h:"img",src:U.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{X as A,K as B,Z as C,Q as P};
