import{r as a,c as C,j as m,z as F,A as Y,C as H,H as n,D as e,Z as c,aa as g,aF as O,Y as i,aI as Z,a1 as w,a3 as Q,cy as X,ab as x,bv as ee,W as k,a0 as p,a9 as te,cz as ae}from"./index-DEBGZ8wG.js";function ne(s=!1){const[d,r]=a.useState(s),f=a.useCallback(()=>r(!0),[r]),t=a.useCallback(()=>r(!1),[r]);return[d,f,t]}const oe=C(m.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),re=C(m.jsx("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download"),se=C(m.jsx("path",{d:"M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}),"ImportExport"),le=C(m.jsx("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");var I={},ce=Y;Object.defineProperty(I,"__esModule",{value:!0});var V=I.default=void 0,ie=ce(F()),de=m,ue=(0,ie.default)((0,de.jsx)("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"}),"ContentPaste");V=I.default=ue;function he(){const{t:s}=H("page_settings");return n(w,{bgt:"light",children:[e(g,{sx:{py:1},children:e(c,{variant:"subtitle1",children:s`DatabaseCard.title`})}),e(O,{}),e(g,{sx:{display:"flex",flexDirection:"column",gap:2},children:e(i,{container:!0,spacing:2,columns:{xs:1,md:2},children:Z(0,3).map(d=>e(i,{item:!0,xs:1,children:e(pe,{index:d})},d))})})]})}function pe({index:s}){const{databases:d,database:r,setDatabase:f}=Q(),t=d[s],[{name:l,lastEdit:j},B]=a.useState(t.dbMeta.get());a.useEffect(()=>t.dbMeta.follow((b,S)=>B(S)),[t]),a.useEffect(()=>B(t.dbMeta.get()),[t]);const u=r===t,[K,L,E]=ne(),{t:o}=H("page_settings"),M=t.chars.keys.length,_=t.relics.keys.length,z=t.lightCones.keys.length,T=t.teams.keys.length,W=t.builds.keys.length,y=!!(M||_||z||T||W),$=a.useCallback(()=>navigator.clipboard.writeText(JSON.stringify(t.exportSROD())).then(()=>alert("Copied database to clipboard.")).catch(console.error),[t]),N=a.useCallback(()=>{window.confirm(`Are you sure you want to delete "${l}"?`)&&(t.clear(),t.toExtraLocalDB())},[t,l]),A=a.useCallback(()=>{const S=new Date().toISOString().split(".")[0].replace("T","_").replaceAll(":","-"),q=JSON.stringify(t.exportSROD()),G=`${l.trim().replaceAll(" ","_")}_${S}.json`,J="application/json;charset=utf-8",h=document.createElement("a");h.download=G,h.href=`data:${J},${encodeURIComponent(q)}`,h.target="_blank",document.body.appendChild(h),h.click(),document.body.removeChild(h)},[t,l]),P=a.useCallback(()=>{u||(r.toExtraLocalDB(),t.swapStorage(r),f(s,t))},[s,f,r,u,t]),[D,R]=a.useState(l);a.useEffect(()=>R(l),[l]);const v=a.useCallback(()=>{t.dbMeta.set({name:D}),t.toExtraLocalDB()},[D,t]),U=a.useCallback(b=>b.key==="Enter"&&v(),[v]);return n(w,{sx:{height:"100%",boxShadow:u?"0px 0px 0px 2px green inset":void 0},children:[n(g,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[e(X,{value:D,sx:{borderRadius:1,px:1,flexGrow:1},onChange:b=>R(b.target.value),onBlur:v,onKeyDown:U}),!u&&e(x,{startIcon:e(se,{}),onClick:P,color:"warning",children:o`DatabaseCard.button.swap`}),e(ee,{color:u?"success":"secondary",sx:{alignSelf:"center"},label:u?o`DatabaseCard.currentDB`:`${o`DatabaseCard.title`} ${t.dbIndex}`})]}),e(O,{}),e(g,{children:n(k,{display:"flex",gap:2,children:[n(k,{flexGrow:1,children:[n(c,{noWrap:!0,children:[e(p,{t:o,i18nKey:"count.chars"})," ",e("strong",{children:M})]}),n(c,{noWrap:!0,children:[e(p,{t:o,i18nKey:"count.relics"})," ",e("strong",{children:_})]}),n(c,{noWrap:!0,children:[e(p,{t:o,i18nKey:"count.lightCones"})," ",e("strong",{children:z})]}),n(c,{noWrap:!0,children:[e(p,{t:o,i18nKey:"count.teams"})," ",e("strong",{children:T})]}),n(c,{noWrap:!0,children:[e(p,{t:o,i18nKey:"count.builds"})," ",e("strong",{children:W})]})]}),n(k,{children:[n(i,{container:!0,spacing:1,columns:{xs:2},children:[e(i,{item:!0,xs:1,children:e(x,{fullWidth:!0,disabled:!y,color:"info",onClick:$,startIcon:e(V,{}),children:e(p,{t:o,i18nKey:"DatabaseCard.button.copy"})})}),n(i,{item:!0,xs:1,children:[e(te,{open:K,onClose:E,children:e(ae,{index:s,onReplace:E})}),e(x,{fullWidth:!0,component:"span",color:"info",startIcon:e(le,{}),onClick:L,children:o`DatabaseCard.button.upload`})]}),e(i,{item:!0,xs:1,children:e(x,{fullWidth:!0,disabled:!y,onClick:A,startIcon:e(re,{}),children:o`DatabaseCard.button.download`})}),e(i,{item:!0,xs:1,children:e(x,{fullWidth:!0,disabled:!y,color:"error",onClick:N,startIcon:e(oe,{}),children:o`DatabaseCard.button.delete`})})]}),!!j&&e(c,{noWrap:!0,align:"center",style:{paddingTop:"1.5em"},children:e("strong",{children:new Date(j).toLocaleString()})})]})]})})]})}function xe(){return e(w,{sx:{my:1},children:e(g,{sx:{display:"flex",flexDirection:"column",gap:2},children:e(he,{})})})}export{xe as default};
