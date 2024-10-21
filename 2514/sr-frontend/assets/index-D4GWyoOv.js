import{c3 as N,c4 as T,c5 as V,as as f,bb as F,c6 as I,c7 as R,c8 as m,c9 as G,ab as S,ca as K,aq as g,cb as J,cc as L,cd as U,ce as P,cf as W,cg as X,aZ as Z,ch as b,ci as C,cj as H}from"./index-BJwvpkBM.js";function E(a){throw new Error(`Should not reach this with value ${a}`)}const Q=(a,t)=>a.map(e=>e[t]);class q{constructor(t,e){this.root=new Y(t,e)}subset(t){const e=[];return this._subset(t,n=>e.push(...n[N])),e}_subset(t,e){const n=t.length;function i(r,s){r<n?s.subset(t[r]).forEach(o=>i(r+1,o)):e(s.leaf)}i(0,this.root)}}let Y=class D{constructor(t,e){if(this.children=[],t>0)for(const[n,i]of Object.entries(e)){const r=new Map;for(const[s,o]of Object.entries(i))r.set(+s,new D(t-1,o));this.children.push({mask:+n,map:r})}else this.leaf=e}subset(t){return this.children.map(({mask:e,map:n})=>n.get(t&e)).filter(e=>!!e)}};class _{constructor(t){this.root=new k(void 0),this.keys=t}at(t){const e=this.keys.get(t),n=e.reduce((i,r)=>i.child(r),this.root);return n.leaf||(n.leaf=new x(t,e,this.keys,n)),n.leaf}}class k{constructor(t){this.children=new Map,this.parent=t}child(t){let e=this.children.get(t);return e||(e=new k(this),this.children.set(t,e),e)}}class x{constructor(t,e,n,i){this.tag=Object.fromEntries(Object.entries(t).filter(([r,s])=>s!=null)),this.id=e,this.keys=n,this.internal=i}with(t){const{keys:e}=this,{id:n,firstReplacedByte:i}=e.combine(this.id,t);let r=this.internal;for(let s=i;s<e.tagLen;s++)r=r.parent;for(let s=i;s<e.tagLen;s++)r=r.child(n[s]);return r.leaf||(r.leaf=new x({...this.tag,...t},n,e,r)),r.leaf}}class tt{constructor(t,e){this.keys=new T(t),this.values=new q(t.tagLen,e)}subset(t){return this.values.subset(this.keys.get(t))}}const v={sum:a=>a.reduce((t,e)=>t+e,0),prod:a=>a.reduce((t,e)=>t*e,1),min:a=>Math.min(...a),max:a=>Math.max(...a),sumfrac:([a,t])=>a/(a+t),unique:([a])=>a},O={match:([a,t])=>a===t?0:1,thres:([a,t])=>a>=t?0:1,lookup:([a],t)=>t[a]??0},w=a=>Q(a,"val");let z=class{constructor(t,...e){const n=new T(t);this.nodes=new q(n.tagLen,V(e)),this.cache=new _(n).at({}),this.calc=new _(n).at({}),this.calc.val=this}withTag(t){const e=this.calc.with(t);return e.val??(e.val=Object.assign(new this.constructor(this.cache.keys),this,{cache:this.cache.with(t),calc:e}))}gather(t){return this._gather(this.cache.with(t)).pre}compute(t){return this._compute(t,this.cache)}_gather(t){if(t.val)return t.val;const e=this.nodes.subset(t.id).flatMap(n=>n.op==="reread"?this._gather(t.with(n.tag)).pre:[this.markGathered(t.tag,n,this._compute(n,t))]);return t.val={pre:e}}_compute(t,e){const n=(r,s,o,c)=>Object.freeze({val:r,meta:this.computeMeta(t,r,s,o,c)}),{op:i}=t;switch(i){case"const":return n(t.ex,[],[]);case"sum":case"prod":case"min":case"max":case"sumfrac":{const r=t.x.map(s=>this._compute(s,e));return n(v[i](w(r),t.ex),r,[])}case"thres":case"match":case"lookup":{const r=t.br.map(u=>this._compute(u,e)),s=O[i](w(r),t.ex),o=[...Array(t.x.length)],c=o[s]=this._compute(t.x[s],e);return n(c.val,o,r)}case"subscript":{const r=this._compute(t.br[0],e);return n(t.ex[r.val],[],[r])}case"vtag":return n(e.tag[t.ex]??"",[],[]);case"tag":{const r=e.with(t.tag),s=this._compute(t.x[0],r);return n(s.val,[s],[],r.tag)}case"dtag":{const r=t.br.map(c=>this._compute(c,e)),s=e.with(Object.fromEntries(r.map((c,u)=>[t.ex[u],c.val]))),o=this._compute(t.x[0],s);return n(o.val,[o],r,s.tag)}case"read":{const r=e.with(t.tag),s=this._gather(r),{pre:o}=s,c=t.ex??"unique";if(s[c])return s[c];const u=v[c](w(o),void 0);return s[c]=n(u,o,[],r.tag)}case"custom":{const r=t.x.map(s=>this._compute(s,e));return n(this.computeCustom(w(r),t.ex),r,[])}default:E(i)}}markGathered(t,e,n){return n}computeCustom(t,e){throw new Error(`Unsupported custom node ${e} in Calculator`)}computeMeta(t,e,n,i,r){}};function lt(a,t,e){function n(s,o){if(s.val)return s.val;const c=e(s.tag);return s.val=c?[F(c,o)]:t.nodes.subset(s.id).flatMap(u=>u.op!=="reread"?r(u,s):n(s.with(u.tag),o)),s.val}function i(s,o,c){return s.every(u=>u.op==="const")?f(v[o](s.map(u=>u.ex),c)):{op:o,x:s,br:[]}}function r(s,o){const{op:c}=s;switch(c){case"const":return s;case"read":{const u=n(o.with(s.tag),s.ex);return s.ex===void 0?u[0]??f(void 0):i(u,s.ex,s.ex)}case"sum":case"prod":case"min":case"max":case"sumfrac":{const u=s.x.map(l=>r(l,o));return i(u,c,s.ex)}case"thres":case"match":case"lookup":{const u=s.br.map(l=>r(l,o));if(u.every(l=>l.op==="const")){const l=O[s.op](u.map(d=>d.ex),s.ex);return r(s.x[l],o)}return{...s,x:s.x.map(l=>r(l,o)),br:u}}case"subscript":{const u=r(s.br[0],o);return u.op==="const"?f(s.ex[u.ex]):{...s,br:[u]}}case"vtag":return f(o.tag[s.ex]??"");case"tag":return r(s.x[0],o.with(s.tag));case"dtag":{const u=s.br.map(d=>r(d,o));if(u.some(d=>d.op!=="const"))throw new Error("Dynamic tag must be resolvable during detachment");const l=o.with(Object.fromEntries(u.map((d,h)=>[s.ex[h],d.ex])));return r(s.x[0],l)}case"custom":return{...s,x:s.x.map(u=>r(u,o))};default:E(c)}}return a.map(s=>r(s,new _(t.cache.keys).at({})))}function et(a,t){const e=new Map;function n(i){const r=e.get(i);if(r)return r;const s=t(i,n);return e.set(i,s),s}return st(a,n)}function st(a,t){const e=a.map(t);return a.every((n,i)=>n===e[i])?a:e}const rt={arithmetic:v,branching:O};class at extends z{constructor(t,e){super(t.cache.keys),this.gathering=new Set,this.nodes=t.nodes,this.tagStr=e,this.custom=t.computeCustom,this.cache=this.cache.with(t.cache.tag)}withTag(t){throw new Error("Unimplemented")}_gather(t){if(this.gathering.has(t))throw new Error("Loop detected");this.gathering.add(t);const e=this.__gather(t);return this.gathering.delete(t),e}__gather(t){if(t.val)return t.val;const e=[];this.nodes._subset(t.id,i=>e.push(...i[I]??[]));const n=this.nodes.subset(t.id).flatMap((i,r)=>i.op==="reread"?this._gather(t.with(i.tag)).pre.map(s=>[s,i,r]):[[this._compute(i,t),i,r]]).map(([i,r,s])=>this.markGathered(t.tag,r,i,e[s]));return t.val={pre:n}}_compute(t,e){try{return super._compute(t,e)}catch(n){return{val:NaN,meta:{formula:`err: ${n.message} in ${this.tagStr(e.tag)}: ${j(t,this.tagStr)}`,deps:[],isRead:!0,toJSON:M(this.tagStr)}}}}markGathered(t,e,{val:n,meta:i},r){return i={...i,readSeq:[...i.readSeq??[],r]},Object.freeze({val:n,meta:i})}computeMeta(t,e,n,i,r){typeof e!="number"?e=`"${e}"`:Math.round(e)===e?e=`${e}`:e=e.toFixed(2);const s={formula:`[${e}] ${j(t,this.tagStr)}`,deps:[...n.map(o=>o==null?void 0:o.meta).filter(o=>!!o),...i.map(o=>o.meta)].flatMap(o=>o.isRead?[o]:o.deps),isRead:t.op==="read",toJSON:M(this.tagStr)};return t.op==="read"&&(r=Object.fromEntries(Object.entries(r).filter(([o,c])=>c)),s.formula=`gather ${n.length} node(s) for ${this.tagStr(t.tag)} (${this.tagStr(r)})`,s.deps=n.map(o=>o.meta)),s}computeCustom(t,e){return this.custom(t,e)}}function j(a,t){return et([a],(e,n)=>{const{op:i,tag:r,br:s,x:o}=e;let{ex:c}=e;if(i==="const")return`${c}`;if(i==="read")return t(r,c);i==="subscript"&&(c=void 0);const u=[];return c&&u.push(JSON.stringify(c)),r&&u.push(t(r)),u.push(...s.map(n),...o.map(n)),`${i}(`+u.join(", ")+")"})[0]}function M(a){return function(){const{readSeq:t,formula:e,deps:n}=this;let i;if(t!=null&&t.some(r=>!!r)){const[r,...s]=t;let o="";for(let c=s.length-1;c>=0;c--)if(s[c]){const{tag:u,value:l}=s[c];o+=`${a(u)} <= ${a(l.tag)} : `}else o+="!! : ";i=o+(r?`matches ${a(r.tag)}`:"!!")}return{...i&&{readSeq:i},formula:e,deps:n}}}const nt=Object.freeze({conds:Object.freeze({})}),{arithmetic:ot}=rt;class it extends z{computeMeta({op:t,ex:e},n,i,r,s){const o={...nt},c=i.filter(h=>!!h).map(h=>$(h,o));r.forEach(h=>$(h,o));function u(h,p){return!p.tag&&h?{tag:h,...p}:p}function l(h,p){return u(s,{op:h,ops:p,...o})}function d(h){const p=h.meta,y=p.conds===o.conds;return u(s,y?p:{...p,...o})}if(t==="read"&&e!==void 0){if(e==="min"||e==="max")return d(c.find(h=>h.val===n));t=e,e=void 0}switch(t){case"sum":case"prod":case"min":case"max":case"sumfrac":{let h=c;if(h.length>1){const p=ot[t]([],e);h=h.filter(y=>y.val!==p)}return h.length===1?d(h[0]):h.length===0?l("const",[]):l(t,h)}case"const":case"vtag":case"subscript":return l("const",[]);case"match":case"thres":case"lookup":case"tag":case"dtag":return d(c[0]);case"read":return Object.freeze(d(c[0]));case"custom":return l(e,c);default:R(t)}}markGathered(t,e,n){let i=!1;const r=n.val,s={...Object.freeze(n.meta)};if(t.qt==="cond"){const{src:o,dst:c,sheet:u,q:l}=t;s.conds={[c??"all"]:{[o??"all"]:{[u]:{[l]:r}}}},i=!0}return Object.freeze(s),i?{val:r,meta:s}:n}listFormulas(t){return this.gather(t.tag).filter(e=>e.val).map(({val:e,meta:n})=>m.withTag(n.tag)[e])}listCondFormulas(t){return this.listFormulas(t).map(e=>this.compute(e).meta.conds).reduce(B,{})}toDebug(){return new at(this,G)}}function $(a,t){const{conds:e,...n}=a.meta;return t.conds=B(t.conds,e),Object.isFrozen(a.meta)?a:{val:a.val,meta:n}}function B(a,t){return A(a,t,(e,n)=>typeof n=="number"?n:void 0)}function A(a,t,e){const n=e(a,t);if(n!==void 0)return n;if(Object.keys(a).length<Object.keys(t).length&&([a,t]=[t,a]),!Object.keys(t).length)return a;let i=!1;const r={...a};for(const[s,o]of Object.entries(t)){const c=r[s],u=s in r?A(c,o,e):o;c!==u&&(r[s]=u,i=!0)}return i?r:a}function ht(a,...t){return t.map(({tag:e,value:n})=>({tag:{...e,preset:a},value:n}))}function dt(a,...t){return t.map(({tag:e,value:n})=>({tag:{...e,src:a},value:n}))}function mt(a){const{lvl:t,basic:e,skill:n,ult:i,talent:r,ascension:s,eidolon:o}=S.char,{char:c,iso:u,[a.key]:l}=m.withAll("sheet",[]);return[c.reread(l),u.reread(l),t.add(a.level),e.add(a.basic),n.add(a.skill),i.add(a.ult),r.add(a.talent),s.add(a.ascension),o.add(a.eidolon),...K.map(d=>g.char[`statBoost${d}`].add(a.statBoosts[d]?1:0)),...J.map(d=>g.char[`bonusAbility${d}`].add(a.bonusAbilities[d]?1:0)),g.premod.crit_.add(.05),g.premod.crit_dmg_.add(.5)]}function pt(a){if(!a)return[];const{lvl:t,ascension:e,superimpose:n}=S.lightCone;return[m.sheet("lightCone").reread(m.sheet(a.key)),t.add(a.level),e.add(a.ascension),n.add(a.superimpose)]}function ft(a){const{common:{count:t},premod:e}=L(U,{sheet:"relic",et:"own"}),n={},i={};for(const{set:r,stats:s}of a){const o=n[r];o===void 0?n[r]=1:n[r]=o+1;for(const{key:c,value:u}of s){const l=i[c];l===void 0?i[c]=u:i[c]=l+u}}return[m.sheet("agg").reread(m.sheet("relic")),m.withTag({sheet:"relic",qt:"premod"}).reread(m.sheet("dyn")),...Object.entries(i).map(([r,s])=>P(e,r).sheet("dyn").add(s)),...Object.entries(n).map(([r,s])=>t.sheet(r).add(s))]}function gt(a){const t=m.with("et","team"),{own:e,enemy:n,teamBuff:i,notOwnBuff:r}=m.sheet("agg").withAll("et",[]);return[a.map(s=>m.withTag({et:"target",dst:s}).reread(m.withTag({et:"own",dst:null,src:s}))),a.flatMap(s=>{const o=e.with("src",s);return a.map(c=>o.reread(i.withTag({dst:s,src:c,name:null})))}),a.flatMap(s=>{const o=e.with("src",s);return a.filter(c=>c!==s).map(c=>o.reread(r.withTag({dst:s,src:c,name:null})))}),a.map(s=>n.reread(m.withTag({et:"enemyDeBuff",dst:null,src:s,name:null}))),a.flatMap((s,o)=>{const{stackIn:c,stackTmp:u}=m.withAll("qt",[]),l=m.withTag({src:s,et:"own"});return[l.with("qt","stackTmp").add(W(c,0,o+1)),l.with("qt","stackOut").add(X(u.max.with("et","team"),o+1,c))]}),a.map(s=>t.add(m.withTag({src:s,et:"own"}).sum))].flat()}function wt(a,t){return t?Object.entries(t).flatMap(([e,n])=>Object.entries(n).flatMap(([i,r])=>{const s=Z(i,e,a);return Object.entries(r).map(([o,c])=>s(o,c))})):[]}function bt(a){const t=C(b,a);return new it(b,H,t)}function vt(a){return new tt(b,C(b,a))}export{wt as a,ht as b,mt as c,lt as d,vt as e,pt as l,ft as r,bt as s,gt as t,dt as w};
