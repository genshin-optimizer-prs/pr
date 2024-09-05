import{bR as z,bS as B,bT as A,bU as f,aE as V,bV as N,bW as R,bX as m,bY as F,ae as T,bZ as I,aK as g,b_ as K,b$ as G,c0 as U,c1 as J,c2 as L,c3 as W,c4 as X,c5 as Y,c6 as O,c7 as Z}from"./index-80zmPJC_.js";function S(n){throw new Error(`Should not reach this with value ${n}`)}const H=(n,t)=>n.map(e=>e[t]);class P{constructor(t,e){this.root=new Q(t,e)}subset(t){const e=[];return this._subset(t,a=>e.push(...a[z])),e}_subset(t,e){const a=t.length;function i(r,s){r<a?s.subset(t[r]).forEach(o=>i(r+1,o)):e(s.leaf)}i(0,this.root)}}let Q=class C{constructor(t,e){if(this.children=[],t>0)for(const[a,i]of Object.entries(e)){const r=new Map;for(const[s,o]of Object.entries(i))r.set(+s,new C(t-1,o));this.children.push({mask:+a,map:r})}else this.leaf=e}subset(t){return this.children.map(({mask:e,map:a})=>a.get(t&e)).filter(e=>!!e)}};class y{constructor(t){this.root=new _(void 0),this.keys=t}at(t){const e=this.keys.get(t),a=e.reduce((i,r)=>i.child(r),this.root);return a.leaf||(a.leaf=new k(t,e,this.keys,a)),a.leaf}}class _{constructor(t){this.children=new Map,this.parent=t}child(t){let e=this.children.get(t);return e||(e=new _(this),this.children.set(t,e),e)}}class k{constructor(t,e,a,i){this.tag=t,this.id=e,this.keys=a,this.internal=i}with(t){const{keys:e}=this,{id:a,firstReplacedByte:i}=e.combine(this.id,t);let r=this.internal;for(let s=i;s<e.tagLen;s++)r=r.parent;for(let s=i;s<e.tagLen;s++)r=r.child(a[s]);return r.leaf||(r.leaf=new k({...this.tag,...t},a,e,r)),r.leaf}}const b={sum:n=>n.reduce((t,e)=>t+e,0),prod:n=>n.reduce((t,e)=>t*e,1),min:n=>Math.min(...n),max:n=>Math.max(...n),sumfrac:([n,t])=>n/(n+t),unique:([n])=>n},x={match:([n,t])=>n===t?0:1,thres:([n,t])=>n>=t?0:1,lookup:([n],t)=>t[n]??0},w=n=>H(n,"val");let E=class{constructor(t,...e){const a=new B(t);this.nodes=new P(a.tagLen,A(e)),this.cache=new y(a).at({}),this.calc=new y(a).at({}),this.calc.val=this}withTag(t){const e=this.calc.with(t);return e.val??(e.val=Object.assign(new this.constructor(this.cache.keys),this,{cache:this.cache.with(t),calc:e}))}gather(t){return this._gather(this.cache.with(t)).pre}compute(t){return this._compute(t,this.cache)}_gather(t){if(t.val)return t.val;const e=this.nodes.subset(t.id).flatMap(a=>a.op==="reread"?this._gather(t.with(a.tag)).pre:[this.markGathered(t.tag,a,this._compute(a,t))]);return t.val={pre:e}}_compute(t,e){const a=(r,s,o,c)=>Object.freeze({val:r,meta:this.computeMeta(t,r,s,o,c)}),{op:i}=t;switch(i){case"const":return a(t.ex,[],[]);case"sum":case"prod":case"min":case"max":case"sumfrac":{const r=t.x.map(s=>this._compute(s,e));return a(b[i](w(r),t.ex),r,[])}case"thres":case"match":case"lookup":{const r=t.br.map(u=>this._compute(u,e)),s=x[i](w(r),t.ex),o=[...Array(t.x.length)],c=o[s]=this._compute(t.x[s],e);return a(c.val,o,r)}case"subscript":{const r=this._compute(t.br[0],e);return a(t.ex[r.val],[],[r])}case"vtag":return a(e.tag[t.ex]??"",[],[]);case"tag":{const r=e.with(t.tag),s=this._compute(t.x[0],r);return a(s.val,[s],[],r.tag)}case"dtag":{const r=t.br.map(c=>this._compute(c,e)),s=e.with(Object.fromEntries(r.map((c,u)=>[t.ex[u],c.val]))),o=this._compute(t.x[0],s);return a(o.val,[o],r,s.tag)}case"read":{const r=e.with(t.tag),s=this._gather(r),{pre:o}=s,c=t.ex??"unique";if(s[c])return s[c];const u=b[c](w(o),void 0);return s[c]=a(u,o,[],r.tag)}case"custom":{const r=t.x.map(s=>this._compute(s,e));return a(this.computeCustom(w(r),t.ex),r,[])}default:S(i)}}markGathered(t,e,a){return a}computeCustom(t,e){throw new Error(`Unsupported custom node ${e} in Calculator`)}computeMeta(t,e,a,i,r){}};function ut(n,t,e){function a(s,o){if(s.val)return s.val;const c=e(s.tag);return s.val=c?[V(c,o)]:t.nodes.subset(s.id).flatMap(u=>u.op!=="reread"?r(u,s):a(s.with(u.tag),o)),s.val}function i(s,o,c){return s.every(u=>u.op==="const")?f(b[o](s.map(u=>u.ex),c)):{op:o,x:s,br:[]}}function r(s,o){const{op:c}=s;switch(c){case"const":return s;case"read":{const u=a(o.with(s.tag),s.ex);return s.ex===void 0?u[0]??f(void 0):i(u,s.ex,s.ex)}case"sum":case"prod":case"min":case"max":case"sumfrac":{const u=s.x.map(l=>r(l,o));return i(u,c,s.ex)}case"thres":case"match":case"lookup":{const u=s.br.map(l=>r(l,o));if(u.every(l=>l.op==="const")){const l=x[s.op](u.map(d=>d.ex),s.ex);return r(s.x[l],o)}return{...s,x:s.x.map(l=>r(l,o)),br:u}}case"subscript":{const u=r(s.br[0],o);return u.op==="const"?f(s.ex[u.ex]):{...s,br:[u]}}case"vtag":return f(o.tag[s.ex]??"");case"tag":return r(s.x[0],o.with(s.tag));case"dtag":{const u=s.br.map(d=>r(d,o));if(u.some(d=>d.op!=="const"))throw new Error("Dynamic tag must be resolvable during detachment");const l=o.with(Object.fromEntries(u.map((d,h)=>[s.ex[h],d.ex])));return r(s.x[0],l)}case"custom":return{...s,x:s.x.map(u=>r(u,o))};default:S(c)}}return n.map(s=>r(s,new y(t.cache.keys).at({})))}function tt(n,t){const e=new Map;function a(i){const r=e.get(i);if(r)return r;const s=t(i,a);return e.set(i,s),s}return et(n,a)}function et(n,t){const e=n.map(t);return n.every((a,i)=>a===e[i])?n:e}const st={arithmetic:b,branching:x};class rt extends E{constructor(t,e){super(t.cache.keys),this.gathering=new Set,this.nodes=t.nodes,this.tagStr=e,this.custom=t.computeCustom}withTag(t){throw new Error("Unimplemented")}_gather(t){if(this.gathering.has(t))throw new Error("Loop detected");this.gathering.add(t);const e=this.__gather(t);return this.gathering.delete(t),e}__gather(t){if(t.val)return t.val;const e=[];this.nodes._subset(t.id,i=>e.push(...i[N]??[]));const a=this.nodes.subset(t.id).flatMap((i,r)=>i.op==="reread"?this._gather(t.with(i.tag)).pre.map(s=>[s,i,r]):[[this._compute(i,t),i,r]]).map(([i,r,s])=>this.markGathered(t.tag,r,i,e[s]));return t.val={pre:a}}_compute(t,e){try{return super._compute(t,e)}catch(a){return{val:NaN,meta:{formula:`err: ${a.message} in ${this.tagStr(e.tag)}: ${j(t,this.tagStr)}`,deps:[],isRead:!0,toJSON:M(this.tagStr)}}}}markGathered(t,e,{val:a,meta:i},r){return i={...i,readSeq:[...i.readSeq??[],r]},Object.freeze({val:a,meta:i})}computeMeta(t,e,a,i,r){typeof e!="number"?e=`"${e}"`:Math.round(e)===e?e=`${e}`:e=e.toFixed(2);const s={formula:`[${e}] ${j(t,this.tagStr)}`,deps:[...a.map(o=>o==null?void 0:o.meta).filter(o=>!!o),...i.map(o=>o.meta)].flatMap(o=>o.isRead?[o]:o.deps),isRead:t.op==="read",toJSON:M(this.tagStr)};return t.op==="read"&&(r=Object.fromEntries(Object.entries(r).filter(([o,c])=>c)),s.formula=`gather ${a.length} node(s) for ${this.tagStr(r)}`,s.deps=a.map(o=>o.meta)),s}computeCustom(t,e){return this.custom(t,e)}}function j(n,t){return tt([n],(e,a)=>{const{op:i,tag:r,br:s,x:o}=e;let{ex:c}=e;if(i==="const")return`${c}`;if(i==="read")return t(r,c);i==="subscript"&&(c=void 0);const u=[];return c&&u.push(JSON.stringify(c)),r&&u.push(t(r)),u.push(...s.map(a),...o.map(a)),`${i}(`+u.join(", ")+")"})[0]}function M(n){return function(){const{readSeq:t,formula:e,deps:a}=this;let i;if(t!=null&&t.some(r=>!!r)){const[r,...s]=t;let o="";for(let c=s.length-1;c>=0;c--)if(s[c]){const{tag:u,value:l}=s[c];o+=`${n(u)} <= ${n(l.tag)} : `}else o+="!! : ";i=o+(r?`matches ${n(r.tag)}`:"!!")}return{...i&&{readSeq:i},formula:e,deps:a}}}const at=Object.freeze({conds:Object.freeze({})}),{arithmetic:nt}=st;class ot extends E{computeMeta({op:t,ex:e},a,i,r,s){const o={...at},c=i.filter(h=>!!h).map(h=>$(h,o));r.forEach(h=>$(h,o));function u(h,p){return!p.tag&&h?{tag:h,...p}:p}function l(h,p){return u(s,{op:h,ops:p,...o})}function d(h){const p=h.meta,v=p.conds===o.conds;return u(s,v?p:{...p,...o})}if(t==="read"&&e!==void 0){if(e==="min"||e==="max")return d(c.find(h=>h.val===a));t=e,e=void 0}switch(t){case"sum":case"prod":case"min":case"max":case"sumfrac":{let h=c;if(h.length>1){const p=nt[t]([],e);h=h.filter(v=>v.val!==p)}return h.length===1?d(h[0]):h.length===0?l("const",[]):l(t,h)}case"const":case"vtag":case"subscript":return l("const",[]);case"match":case"thres":case"lookup":case"tag":case"dtag":return d(c[0]);case"read":return Object.freeze(d(c[0]));case"custom":return l(e,c);default:R(t)}}markGathered(t,e,a){let i=!1;const r=a.val,s={...Object.freeze(a.meta)};if(t.qt==="cond"){const{src:o,dst:c,sheet:u,q:l}=t;s.conds={[c??"all"]:{[o??"all"]:{[u]:{[l]:r}}}},i=!0}return Object.freeze(s),i?{val:r,meta:s}:a}listFormulas(t){return this.gather(t.tag).filter(e=>e.val).map(({val:e,meta:a})=>m.withTag(a.tag)[e])}listCondFormulas(t){return this.listFormulas(t).map(e=>this.compute(e).meta.conds).reduce(D,{})}toDebug(){return new rt(this,F)}}function $(n,t){const{conds:e,...a}=n.meta;return t.conds=D(t.conds,e),Object.isFrozen(n.meta)?n:{val:n.val,meta:a}}function D(n,t){return q(n,t,(e,a)=>typeof a=="number"?a:void 0)}function q(n,t,e){const a=e(n,t);if(a!==void 0)return a;if(Object.keys(n).length<Object.keys(t).length&&([n,t]=[t,n]),!Object.keys(t).length)return n;let i=!1;const r={...n};for(const[s,o]of Object.entries(t)){const c=r[s],u=s in r?q(c,o,e):o;c!==u&&(r[s]=u,i=!0)}return i?r:n}function lt(n,...t){return t.map(({tag:e,value:a})=>({tag:{...e,src:n},value:a}))}function ht(n){const{lvl:t,basic:e,skill:a,ult:i,talent:r,ascension:s,eidolon:o}=T.char,{char:c,iso:u,[n.key]:l}=m.withAll("sheet",[]);return[c.reread(l),u.reread(l),t.add(n.level),e.add(n.basic),a.add(n.skill),i.add(n.ult),r.add(n.talent),s.add(n.ascension),o.add(n.eidolon),...I.map(d=>g.char[`statBoost${d}`].add(n.statBoosts[d]?1:0)),...K.map(d=>g.char[`bonusAbility${d}`].add(n.bonusAbilities[d]?1:0)),g.premod.crit_.add(.05),g.premod.crit_dmg_.add(.5)]}function dt(n){if(!n)return[];const{lvl:t,ascension:e,superimpose:a}=T.lightCone;return[m.sheet("lightCone").reread(m.sheet(n.key)),t.add(n.level),e.add(n.ascension),a.add(n.superimpose)]}function mt(n){const{common:{count:t},premod:e}=G(U,{sheet:"relic",et:"own"}),a={},i={};for(const{set:r,stats:s}of n){const o=a[r];o===void 0?a[r]=1:a[r]=o+1;for(const{key:c,value:u}of s){const l=i[c];l===void 0?i[c]=u:i[c]=l+u}}return[m.sheet("agg").reread(m.sheet("relic")),m.withTag({sheet:"relic",qt:"premod"}).reread(m.sheet("dyn")),...Object.entries(i).map(([r,s])=>J(e,r).sheet("dyn").add(s)),...Object.entries(a).map(([r,s])=>t.sheet(r).add(s))]}function pt(n){const t=m.with("et","team"),{own:e,enemy:a,teamBuff:i,notOwnBuff:r}=m.sheet("agg").withAll("et",[]);return[n.map(s=>m.withTag({et:"target",dst:s}).reread(m.withTag({et:"own",dst:null,src:s}))),n.flatMap(s=>{const o=e.with("src",s);return n.map(c=>o.reread(i.withTag({dst:s,src:c,name:null})))}),n.flatMap(s=>{const o=e.with("src",s);return n.filter(c=>c!==s).map(c=>o.reread(r.withTag({dst:s,src:c,name:null})))}),n.map(s=>a.reread(m.withTag({et:"enemyDeBuff",dst:null,src:s,name:null}))),n.flatMap((s,o)=>{const{stackIn:c,stackTmp:u}=m.withAll("qt",[]),l=m.withTag({src:s,et:"own"});return[l.with("qt","stackTmp").add(L(c,0,o+1)),l.with("qt","stackOut").add(W(u.max.with("et","team"),o+1,c))]}),n.map(s=>t.add(m.withTag({src:s,et:"own"}).sum))].flat()}function ft(n,t){return t?Object.entries(t).flatMap(([e,a])=>Object.entries(a).flatMap(([i,r])=>{const s=X(i,e,n);return Object.entries(r).map(([o,c])=>s(o,c))})):[]}function gt(n){const t=Y(O,n);return new ot(O,Z,t)}export{ft as a,ht as c,ut as d,dt as l,mt as r,gt as s,pt as t,lt as w};
