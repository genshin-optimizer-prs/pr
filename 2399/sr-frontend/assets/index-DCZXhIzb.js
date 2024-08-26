import{bp as q,bq as z,br as B,bs as A,bt as p,bu as F,bv as V,bw as m,bx as I,by as M,bz as K,aM as g,bA as G,ah as N,ai as U,bB as R,bC as L,bD as H,bE as J,bF as P,bG as O,bH as W}from"./index-B0RcO5Yp.js";function T(r){throw new Error(`Should not reach this with value ${r}`)}const X=(r,t)=>r.map(e=>e[t]);class Q{constructor(t,e){this.root=new Y(t,e)}subset(t){const e=[];return this._subset(t,a=>e.push(...a[q])),e}debugTag(t){const e=[];return this._subset(t,a=>e.push(...a[z])),e}_subset(t,e){const a=t.length;function i(n,s){n<a?s.subset(t[n]).forEach(o=>i(n+1,o)):e(s.leaf)}i(0,this.root)}}let Y=class C{constructor(t,e){if(this.children=[],t>0)for(const[a,i]of Object.entries(e)){const n=new Map;for(const[s,o]of Object.entries(i))n.set(+s,new C(t-1,o));this.children.push({mask:+a,map:n})}else this.leaf=e}subset(t){return this.children.map(({mask:e,map:a})=>a.get(t&e)).filter(e=>!!e)}};class S{constructor(t){this.root=new _(void 0),this.keys=t}at(t){const e=this.keys.get(t),a=e.reduce((i,n)=>i.child(n),this.root);return a.leaf||(a.leaf=new x(t,e,this.keys,a)),a.leaf}}class _{constructor(t){this.children=new Map,this.parent=t}child(t){let e=this.children.get(t);return e||(e=new _(this),this.children.set(t,e),e)}}class x{constructor(t,e,a,i){this.tag=t,this.id=e,this.keys=a,this.internal=i}with(t){const{id:e,firstReplacedByte:a}=this.keys.combine(this.id,t);let i=this.internal;for(let n=a;n<this.keys.tagLen;n++)i=i.parent;return i=e.slice(a).reduce((n,s)=>n.child(s),i),i.leaf||(i.leaf=new x({...this.tag,...t},e,this.keys,i)),i.leaf}}const w={sum:r=>r.reduce((t,e)=>t+e,0),prod:r=>r.reduce((t,e)=>t*e,1),min:r=>Math.min(...r),max:r=>Math.max(...r),sumfrac:([r,t])=>r/(r+t),unique:([r])=>r},k={match:([r,t])=>r===t?0:1,thres:([r,t])=>r>=t?0:1,lookup:([r],t)=>t[r]??0},b=r=>X(r,"val");let $=class{constructor(t,...e){this.nodes=new Q(t.tagLen,B(e)),this.cache=new S(new A(t)).at({})}withTag(t){return Object.assign(new(Object.getPrototypeOf(this)).constructor(this.cache.keys),this,{cache:this.cache.with(t)})}gather(t){return this._gather(this.cache.with(t)).pre}compute(t){return this._compute(t,this.cache)}_gather(t){if(t.val)return t.val;const e=this.nodes.subset(t.id).flatMap(a=>a.op==="reread"?this._gather(t.with(a.tag)).pre:[this.markGathered(t.tag,a,this._compute(a,t))]);return t.val={pre:e}}_compute(t,e){const a=(n,s,o,c)=>Object.freeze({val:n,meta:this.computeMeta(t,n,s,o,c)}),{op:i}=t;switch(i){case"const":return a(t.ex,[],[]);case"sum":case"prod":case"min":case"max":case"sumfrac":{const n=t.x.map(s=>this._compute(s,e));return a(w[i](b(n),t.ex),n,[])}case"thres":case"match":case"lookup":{const n=t.br.map(u=>this._compute(u,e)),s=k[i](b(n),t.ex),o=[...Array(t.x.length)],c=o[s]=this._compute(t.x[s],e);return a(c.val,o,n)}case"subscript":{const n=this._compute(t.br[0],e);return a(t.ex[n.val],[],[n])}case"vtag":return a(e.tag[t.ex]??"",[],[]);case"tag":{const n=e.with(t.tag),s=this._compute(t.x[0],n);return a(s.val,[s],[],n.tag)}case"dtag":{const n=t.br.map(c=>this._compute(c,e)),s=e.with(Object.fromEntries(n.map((c,u)=>[t.ex[u],c.val]))),o=this._compute(t.x[0],s);return a(o.val,[o],n,s.tag)}case"read":{const n=e.with(t.tag),s=this._gather(n),{pre:o}=s,c=t.ex??"unique";if(s[c])return s[c];const u=w[c](b(o),void 0);return s[c]=a(u,o,[],n.tag)}case"custom":{const n=t.x.map(s=>this._compute(s,e));return a(this.computeCustom(b(n),t.ex),n,[])}default:T(i)}}markGathered(t,e,a){return a}computeCustom(t,e){throw new Error(`Unsupported custom node ${e} in Calculator`)}computeMeta(t,e,a,i,n){}};function ct(r,t,e){function a(s,o){if(s.val)return s.val;const c=e(s.tag);return s.val=c?[F(c,o)]:t.nodes.subset(s.id).flatMap(u=>u.op!=="reread"?n(u,s):a(s.with(u.tag),o)),s.val}function i(s,o,c){return s.every(u=>u.op==="const")?p(w[o](s.map(u=>u.ex),c)):{op:o,x:s,br:[]}}function n(s,o){const{op:c}=s;switch(c){case"const":return s;case"read":{const u=a(o.with(s.tag),s.ex);return s.ex===void 0?u[0]??p(void 0):i(u,s.ex,s.ex)}case"sum":case"prod":case"min":case"max":case"sumfrac":{const u=s.x.map(l=>n(l,o));return i(u,c,s.ex)}case"thres":case"match":case"lookup":{const u=s.br.map(l=>n(l,o));if(u.every(l=>l.op==="const")){const l=k[s.op](u.map(d=>d.ex),s.ex);return n(s.x[l],o)}return{...s,x:s.x.map(l=>n(l,o)),br:u}}case"subscript":{const u=n(s.br[0],o);return u.op==="const"?p(s.ex[u.ex]):{...s,br:[u]}}case"vtag":return p(o.tag[s.ex]??"");case"tag":return n(s.x[0],o.with(s.tag));case"dtag":{const u=s.br.map(d=>n(d,o));if(u.some(d=>d.op!=="const"))throw new Error("Dynamic tag must be resolvable during detachment");const l=o.with(Object.fromEntries(u.map((d,h)=>[s.ex[h],d.ex])));return n(s.x[0],l)}case"custom":return{...s,x:s.x.map(u=>n(u,o))};default:T(c)}}return r.map(s=>n(s,new S(t.cache.keys).at({})))}function Z(r,t){const e=new Map;function a(i){const n=e.get(i);if(n)return n;const s=t(i,a);return e.set(i,s),s}return tt(r,a)}function tt(r,t){const e=r.map(t);return r.every((a,i)=>a===e[i])?r:e}const et={arithmetic:w,branching:k},v=Symbol();class st extends ${constructor(t,e){super(t.cache.keys),this.gathering=new Set,this.nodes=t.nodes,this.tagStr=e,this.custom=t.computeCustom}withTag(t){throw new Error("Unimplemented")}_gather(t){if(this.gathering.has(t))throw new Error("Loop detected for {this.tagStr(cache.tag)}");this.gathering.add(t);const e=this.__gather(t);return this.gathering.delete(t),e}__gather(t){return super._gather(t)}_compute(t,e){try{return super._compute(t,e)}catch(a){return{val:NaN,meta:{note:`err: ${a.message} in ${this.tagStr(e.tag)}`,formula:this.nodeString(t),deps:[],[v]:!0}}}}computeMeta(t,e,a,i,n){typeof e!="number"?e=`"${e}"`:Math.round(e)===e?e=`${e}`:e=e.toFixed(2);const s={note:"",formula:`[${e}] ${this.nodeString(t)}`,deps:[...a.map(o=>o==null?void 0:o.meta).filter(o=>!!o),...i.map(o=>o.meta)].flatMap(o=>o[v]?[o]:o.deps),[v]:t.op==="read"};return t.op==="read"?(n=Object.fromEntries(Object.entries(n).filter(([o,c])=>c)),s.note=`gather ${a.length} node(s) for ${this.tagStr(n)}`,s.deps=a.map(o=>o.meta)):delete s.note,s}computeCustom(t,e){return this.custom(t,e)}nodeString(t){return Z([t],(e,a)=>{const{op:i,tag:n,br:s,x:o}=e;let{ex:c}=e;if(i==="const")return`${c}`;if(i==="read")return this.tagStr(n,c);i==="subscript"&&(c=void 0);const u=[];return c&&u.push(JSON.stringify(c)),n&&u.push(this.tagStr(n)),u.push(...s.map(a),...o.map(a)),`${i}(`+u.join(", ")+")"})[0]}}const rt=Object.freeze({conds:Object.freeze({})}),{arithmetic:at}=et;class nt extends ${computeMeta({op:t,ex:e},a,i,n,s){const o={...rt},c=i.filter(h=>!!h).map(h=>j(h,o));n.forEach(h=>j(h,o));function u(h,f){return!f.tag&&h?{tag:h,...f}:f}function l(h,f){return u(s,{op:h,ops:f,...o})}function d(h){const f=h.meta,y=f.conds===o.conds;return u(s,y?f:{...f,...o})}if(t==="read"&&e!==void 0){if(e==="min"||e==="max")return d(c.find(h=>h.val===a));t=e,e=void 0}switch(t){case"sum":case"prod":case"min":case"max":case"sumfrac":{let h=c;if(h.length>1){const f=at[t]([],e);h=h.filter(y=>y.val!==f)}return h.length===1?d(h[0]):h.length===0?l("const",[]):l(t,h)}case"const":case"vtag":case"subscript":return l("const",[]);case"match":case"thres":case"lookup":case"tag":case"dtag":return d(c[0]);case"read":return Object.freeze(d(c[0]));case"custom":return l(e,c);default:V(t)}}markGathered(t,e,a){let i=!1;const n=a.val,s={...Object.freeze(a.meta)};if(t.qt==="cond"){const{src:o,dst:c,sheet:u,q:l}=t;s.conds={[c??"all"]:{[o??"all"]:{[u]:{[l]:n}}}},i=!0}return Object.freeze(s),i?{val:n,meta:s}:a}listFormulas(t){return this.gather(t.tag).filter(e=>e.val).map(({val:e,meta:a})=>m.withTag(a.tag)[e])}listCondFormulas(t){return this.listFormulas(t).map(e=>this.compute(e).meta.conds).reduce(E,{})}toDebug(){return new st(this,I)}}function j(r,t){const{conds:e,...a}=r.meta;return t.conds=E(t.conds,e),Object.isFrozen(r.meta)?r:{val:r.val,meta:a}}function E(r,t){return D(r,t,(e,a)=>typeof a=="number"?a:void 0)}function D(r,t,e){const a=e(r,t);if(a!==void 0)return a;if(Object.keys(r).length<Object.keys(t).length&&([r,t]=[t,r]),!Object.keys(t).length)return r;let i=!1;const n={...r};for(const[s,o]of Object.entries(t)){const c=n[s],u=s in n?D(c,o,e):o;c!==u&&(n[s]=u,i=!0)}return i?n:r}function ut(r,...t){return t.map(({tag:e,value:a})=>({tag:{...e,src:r},value:a}))}function lt(r){const{lvl:t,basic:e,skill:a,ult:i,talent:n,ascension:s,eidolon:o}=M.char,{char:c,iso:u,[r.key]:l}=m.withAll("sheet",[]);return[c.reread(l),u.reread(l),t.add(r.level),e.add(r.basic),a.add(r.skill),i.add(r.ult),n.add(r.talent),s.add(r.ascension),o.add(r.eidolon),...K.map(d=>g.char[`statBoost${d}`].add(r.statBoosts[d]?1:0)),...G.map(d=>g.char[`bonusAbility${d}`].add(r.bonusAbilities[d]?1:0)),g.premod.crit_.add(.05),g.premod.crit_dmg_.add(.5)]}function ht(r){if(!r)return[];const{lvl:t,ascension:e,superimpose:a}=M.lightCone;return[m.sheet("lightCone").reread(m.sheet(r.key)),t.add(r.level),e.add(r.ascension),a.add(r.superimpose)]}function dt(r){const{common:{count:t},premod:e}=N(U,{sheet:"relic",et:"self"}),a={},i={};for(const{set:n,stats:s}of r){const o=a[n];o===void 0?a[n]=1:a[n]=o+1;for(const{key:c,value:u}of s){const l=i[c];l===void 0?i[c]=u:i[c]=l+u}}return[m.sheet("agg").reread(m.sheet("relic")),m.withTag({sheet:"relic",qt:"premod"}).reread(m.sheet("dyn")),...Object.entries(i).map(([n,s])=>R(e,n).sheet("dyn").add(s)),...Object.entries(a).map(([n,s])=>t.sheet(n).add(s))]}function mt(r){const t=m.with("et","team"),{self:e,enemy:a,teamBuff:i,notSelfBuff:n}=m.sheet("agg").withAll("et",[]);return[r.map(s=>m.withTag({et:"target",dst:s}).reread(m.withTag({et:"self",dst:null,src:s}))),r.flatMap(s=>{const o=e.with("src",s);return r.map(c=>o.reread(i.withTag({dst:s,src:c,name:null})))}),r.flatMap(s=>{const o=e.with("src",s);return r.filter(c=>c!==s).map(c=>o.reread(n.withTag({dst:s,src:c,name:null})))}),r.map(s=>a.reread(m.withTag({et:"enemyDeBuff",dst:null,src:s,name:null}))),r.flatMap((s,o)=>{const{stackIn:c,stackTmp:u}=m.withAll("qt",[]),l=m.withTag({src:s,et:"self"});return[l.with("qt","stackTmp").add(L(c,0,o+1)),l.with("qt","stackOut").add(H(u.max.with("et","team"),o+1,c))]}),r.map(s=>t.add(m.withTag({src:s,et:"self"}).sum))].flat()}function ft(r,t){return t?Object.entries(t).flatMap(([e,a])=>Object.entries(a).flatMap(([i,n])=>{const s=J(i,e,r);return Object.entries(n).map(([o,c])=>s(o,c))})):[]}function pt(r){const t=P(O,r);return new nt(O,W,t)}export{ft as a,lt as c,ct as d,ht as l,dt as r,pt as s,mt as t,ut as w};
