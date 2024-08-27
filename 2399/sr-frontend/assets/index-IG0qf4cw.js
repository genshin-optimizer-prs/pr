import{bp as q,bq as z,br as B,bs as A,bt as p,bu as F,bv as V,bw as m,bx as I,by as T,bz as K,aM as g,bA as G,ah as N,ai as U,bB as R,bC as L,bD as H,bE as J,bF as W,bG as O,bH as X}from"./index-C9as_pe0.js";function C(a){throw new Error(`Should not reach this with value ${a}`)}const P=(a,t)=>a.map(e=>e[t]);class Q{constructor(t,e){this.root=new Y(t,e)}subset(t){const e=[];return this._subset(t,r=>e.push(...r[q])),e}debugTag(t){const e=[];return this._subset(t,r=>e.push(...r[z])),e}_subset(t,e){const r=t.length;function i(n,s){n<r?s.subset(t[n]).forEach(o=>i(n+1,o)):e(s.leaf)}i(0,this.root)}}let Y=class S{constructor(t,e){if(this.children=[],t>0)for(const[r,i]of Object.entries(e)){const n=new Map;for(const[s,o]of Object.entries(i))n.set(+s,new S(t-1,o));this.children.push({mask:+r,map:n})}else this.leaf=e}subset(t){return this.children.map(({mask:e,map:r})=>r.get(t&e)).filter(e=>!!e)}};class _{constructor(t){this.root=new x(void 0),this.keys=t}at(t){const e=this.keys.get(t),r=e.reduce((i,n)=>i.child(n),this.root);return r.leaf||(r.leaf=new k(t,e,this.keys,r)),r.leaf}}class x{constructor(t){this.children=new Map,this.parent=t}child(t){let e=this.children.get(t);return e||(e=new x(this),this.children.set(t,e),e)}}class k{constructor(t,e,r,i){this.tag=t,this.id=e,this.keys=r,this.internal=i}with(t){const{id:e,firstReplacedByte:r}=this.keys.combine(this.id,t);let i=this.internal;for(let n=r;n<this.keys.tagLen;n++)i=i.parent;return i=e.slice(r).reduce((n,s)=>n.child(s),i),i.leaf||(i.leaf=new k({...this.tag,...t},e,this.keys,i)),i.leaf}}const w={sum:a=>a.reduce((t,e)=>t+e,0),prod:a=>a.reduce((t,e)=>t*e,1),min:a=>Math.min(...a),max:a=>Math.max(...a),sumfrac:([a,t])=>a/(a+t),unique:([a])=>a},M={match:([a,t])=>a===t?0:1,thres:([a,t])=>a>=t?0:1,lookup:([a],t)=>t[a]??0},b=a=>P(a,"val");let $=class{constructor(t,...e){const r=new B(t);this.nodes=new Q(r.tagLen,A(e)),this.cache=new _(r).at({}),this.calc=new _(r).at({}),this.calc.val=this}withTag(t){const e=this.calc.with(t);return e.val??(e.val=Object.assign(new this.constructor(this.cache.keys),this,{cache:this.cache.with(t),calc:e}))}gather(t){return this._gather(this.cache.with(t)).pre}compute(t){return this._compute(t,this.cache)}_gather(t){if(t.val)return t.val;const e=this.nodes.subset(t.id).flatMap(r=>r.op==="reread"?this._gather(t.with(r.tag)).pre:[this.markGathered(t.tag,r,this._compute(r,t))]);return t.val={pre:e}}_compute(t,e){const r=(n,s,o,c)=>Object.freeze({val:n,meta:this.computeMeta(t,n,s,o,c)}),{op:i}=t;switch(i){case"const":return r(t.ex,[],[]);case"sum":case"prod":case"min":case"max":case"sumfrac":{const n=t.x.map(s=>this._compute(s,e));return r(w[i](b(n),t.ex),n,[])}case"thres":case"match":case"lookup":{const n=t.br.map(u=>this._compute(u,e)),s=M[i](b(n),t.ex),o=[...Array(t.x.length)],c=o[s]=this._compute(t.x[s],e);return r(c.val,o,n)}case"subscript":{const n=this._compute(t.br[0],e);return r(t.ex[n.val],[],[n])}case"vtag":return r(e.tag[t.ex]??"",[],[]);case"tag":{const n=e.with(t.tag),s=this._compute(t.x[0],n);return r(s.val,[s],[],n.tag)}case"dtag":{const n=t.br.map(c=>this._compute(c,e)),s=e.with(Object.fromEntries(n.map((c,u)=>[t.ex[u],c.val]))),o=this._compute(t.x[0],s);return r(o.val,[o],n,s.tag)}case"read":{const n=e.with(t.tag),s=this._gather(n),{pre:o}=s,c=t.ex??"unique";if(s[c])return s[c];const u=w[c](b(o),void 0);return s[c]=r(u,o,[],n.tag)}case"custom":{const n=t.x.map(s=>this._compute(s,e));return r(this.computeCustom(b(n),t.ex),n,[])}default:C(i)}}markGathered(t,e,r){return r}computeCustom(t,e){throw new Error(`Unsupported custom node ${e} in Calculator`)}computeMeta(t,e,r,i,n){}};function ct(a,t,e){function r(s,o){if(s.val)return s.val;const c=e(s.tag);return s.val=c?[F(c,o)]:t.nodes.subset(s.id).flatMap(u=>u.op!=="reread"?n(u,s):r(s.with(u.tag),o)),s.val}function i(s,o,c){return s.every(u=>u.op==="const")?p(w[o](s.map(u=>u.ex),c)):{op:o,x:s,br:[]}}function n(s,o){const{op:c}=s;switch(c){case"const":return s;case"read":{const u=r(o.with(s.tag),s.ex);return s.ex===void 0?u[0]??p(void 0):i(u,s.ex,s.ex)}case"sum":case"prod":case"min":case"max":case"sumfrac":{const u=s.x.map(l=>n(l,o));return i(u,c,s.ex)}case"thres":case"match":case"lookup":{const u=s.br.map(l=>n(l,o));if(u.every(l=>l.op==="const")){const l=M[s.op](u.map(d=>d.ex),s.ex);return n(s.x[l],o)}return{...s,x:s.x.map(l=>n(l,o)),br:u}}case"subscript":{const u=n(s.br[0],o);return u.op==="const"?p(s.ex[u.ex]):{...s,br:[u]}}case"vtag":return p(o.tag[s.ex]??"");case"tag":return n(s.x[0],o.with(s.tag));case"dtag":{const u=s.br.map(d=>n(d,o));if(u.some(d=>d.op!=="const"))throw new Error("Dynamic tag must be resolvable during detachment");const l=o.with(Object.fromEntries(u.map((d,h)=>[s.ex[h],d.ex])));return n(s.x[0],l)}case"custom":return{...s,x:s.x.map(u=>n(u,o))};default:C(c)}}return a.map(s=>n(s,new _(t.cache.keys).at({})))}function Z(a,t){const e=new Map;function r(i){const n=e.get(i);if(n)return n;const s=t(i,r);return e.set(i,s),s}return tt(a,r)}function tt(a,t){const e=a.map(t);return a.every((r,i)=>r===e[i])?a:e}const et={arithmetic:w,branching:M},v=Symbol();class st extends ${constructor(t,e){super(t.cache.keys),this.gathering=new Set,this.nodes=t.nodes,this.tagStr=e,this.custom=t.computeCustom}withTag(t){throw new Error("Unimplemented")}_gather(t){if(this.gathering.has(t))throw new Error("Loop detected for {this.tagStr(cache.tag)}");this.gathering.add(t);const e=this.__gather(t);return this.gathering.delete(t),e}__gather(t){return super._gather(t)}_compute(t,e){try{return super._compute(t,e)}catch(r){return{val:NaN,meta:{note:`err: ${r.message} in ${this.tagStr(e.tag)}`,formula:this.nodeString(t),deps:[],[v]:!0}}}}computeMeta(t,e,r,i,n){typeof e!="number"?e=`"${e}"`:Math.round(e)===e?e=`${e}`:e=e.toFixed(2);const s={note:"",formula:`[${e}] ${this.nodeString(t)}`,deps:[...r.map(o=>o==null?void 0:o.meta).filter(o=>!!o),...i.map(o=>o.meta)].flatMap(o=>o[v]?[o]:o.deps),[v]:t.op==="read"};return t.op==="read"?(n=Object.fromEntries(Object.entries(n).filter(([o,c])=>c)),s.note=`gather ${r.length} node(s) for ${this.tagStr(n)}`,s.deps=r.map(o=>o.meta)):delete s.note,s}computeCustom(t,e){return this.custom(t,e)}nodeString(t){return Z([t],(e,r)=>{const{op:i,tag:n,br:s,x:o}=e;let{ex:c}=e;if(i==="const")return`${c}`;if(i==="read")return this.tagStr(n,c);i==="subscript"&&(c=void 0);const u=[];return c&&u.push(JSON.stringify(c)),n&&u.push(this.tagStr(n)),u.push(...s.map(r),...o.map(r)),`${i}(`+u.join(", ")+")"})[0]}}const rt=Object.freeze({conds:Object.freeze({})}),{arithmetic:at}=et;class nt extends ${computeMeta({op:t,ex:e},r,i,n,s){const o={...rt},c=i.filter(h=>!!h).map(h=>j(h,o));n.forEach(h=>j(h,o));function u(h,f){return!f.tag&&h?{tag:h,...f}:f}function l(h,f){return u(s,{op:h,ops:f,...o})}function d(h){const f=h.meta,y=f.conds===o.conds;return u(s,y?f:{...f,...o})}if(t==="read"&&e!==void 0){if(e==="min"||e==="max")return d(c.find(h=>h.val===r));t=e,e=void 0}switch(t){case"sum":case"prod":case"min":case"max":case"sumfrac":{let h=c;if(h.length>1){const f=at[t]([],e);h=h.filter(y=>y.val!==f)}return h.length===1?d(h[0]):h.length===0?l("const",[]):l(t,h)}case"const":case"vtag":case"subscript":return l("const",[]);case"match":case"thres":case"lookup":case"tag":case"dtag":return d(c[0]);case"read":return Object.freeze(d(c[0]));case"custom":return l(e,c);default:V(t)}}markGathered(t,e,r){let i=!1;const n=r.val,s={...Object.freeze(r.meta)};if(t.qt==="cond"){const{src:o,dst:c,sheet:u,q:l}=t;s.conds={[c??"all"]:{[o??"all"]:{[u]:{[l]:n}}}},i=!0}return Object.freeze(s),i?{val:n,meta:s}:r}listFormulas(t){return this.gather(t.tag).filter(e=>e.val).map(({val:e,meta:r})=>m.withTag(r.tag)[e])}listCondFormulas(t){return this.listFormulas(t).map(e=>this.compute(e).meta.conds).reduce(E,{})}toDebug(){return new st(this,I)}}function j(a,t){const{conds:e,...r}=a.meta;return t.conds=E(t.conds,e),Object.isFrozen(a.meta)?a:{val:a.val,meta:r}}function E(a,t){return D(a,t,(e,r)=>typeof r=="number"?r:void 0)}function D(a,t,e){const r=e(a,t);if(r!==void 0)return r;if(Object.keys(a).length<Object.keys(t).length&&([a,t]=[t,a]),!Object.keys(t).length)return a;let i=!1;const n={...a};for(const[s,o]of Object.entries(t)){const c=n[s],u=s in n?D(c,o,e):o;c!==u&&(n[s]=u,i=!0)}return i?n:a}function ut(a,...t){return t.map(({tag:e,value:r})=>({tag:{...e,src:a},value:r}))}function lt(a){const{lvl:t,basic:e,skill:r,ult:i,talent:n,ascension:s,eidolon:o}=T.char,{char:c,iso:u,[a.key]:l}=m.withAll("sheet",[]);return[c.reread(l),u.reread(l),t.add(a.level),e.add(a.basic),r.add(a.skill),i.add(a.ult),n.add(a.talent),s.add(a.ascension),o.add(a.eidolon),...K.map(d=>g.char[`statBoost${d}`].add(a.statBoosts[d]?1:0)),...G.map(d=>g.char[`bonusAbility${d}`].add(a.bonusAbilities[d]?1:0)),g.premod.crit_.add(.05),g.premod.crit_dmg_.add(.5)]}function ht(a){if(!a)return[];const{lvl:t,ascension:e,superimpose:r}=T.lightCone;return[m.sheet("lightCone").reread(m.sheet(a.key)),t.add(a.level),e.add(a.ascension),r.add(a.superimpose)]}function dt(a){const{common:{count:t},premod:e}=N(U,{sheet:"relic",et:"self"}),r={},i={};for(const{set:n,stats:s}of a){const o=r[n];o===void 0?r[n]=1:r[n]=o+1;for(const{key:c,value:u}of s){const l=i[c];l===void 0?i[c]=u:i[c]=l+u}}return[m.sheet("agg").reread(m.sheet("relic")),m.withTag({sheet:"relic",qt:"premod"}).reread(m.sheet("dyn")),...Object.entries(i).map(([n,s])=>R(e,n).sheet("dyn").add(s)),...Object.entries(r).map(([n,s])=>t.sheet(n).add(s))]}function mt(a){const t=m.with("et","team"),{self:e,enemy:r,teamBuff:i,notSelfBuff:n}=m.sheet("agg").withAll("et",[]);return[a.map(s=>m.withTag({et:"target",dst:s}).reread(m.withTag({et:"self",dst:null,src:s}))),a.flatMap(s=>{const o=e.with("src",s);return a.map(c=>o.reread(i.withTag({dst:s,src:c,name:null})))}),a.flatMap(s=>{const o=e.with("src",s);return a.filter(c=>c!==s).map(c=>o.reread(n.withTag({dst:s,src:c,name:null})))}),a.map(s=>r.reread(m.withTag({et:"enemyDeBuff",dst:null,src:s,name:null}))),a.flatMap((s,o)=>{const{stackIn:c,stackTmp:u}=m.withAll("qt",[]),l=m.withTag({src:s,et:"self"});return[l.with("qt","stackTmp").add(L(c,0,o+1)),l.with("qt","stackOut").add(H(u.max.with("et","team"),o+1,c))]}),a.map(s=>t.add(m.withTag({src:s,et:"self"}).sum))].flat()}function ft(a,t){return t?Object.entries(t).flatMap(([e,r])=>Object.entries(r).flatMap(([i,n])=>{const s=J(i,e,a);return Object.entries(n).map(([o,c])=>s(o,c))})):[]}function pt(a){const t=W(O,a);return new nt(O,X,t)}export{ft as a,lt as c,ct as d,ht as l,dt as r,pt as s,mt as t,ut as w};
