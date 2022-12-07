(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function $(){}function kt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function tt(){return Object.create(null)}function x(t){t.forEach(U)}function D(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function St(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function rt(t){return Object.keys(t).length===0}function ct(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(ct(e,n))}function Ct(t){return t&&D(t.destroy)?t.destroy:$}function E(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function At(){return b(" ")}function Rt(){return b("")}function Ot(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Mt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function lt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:lt(t,e,n)}function ut(t){return Array.from(t.childNodes)}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function jt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function It(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,s,e),o}class Vt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=at(n.nodeName):this.e=W(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(Q)}}function dt(t){const e={};for(const n of t)e[n.name]=n.value;return e}function Bt(t,e){return new t(e)}let T;function S(t){T=t}function J(){if(!T)throw new Error("Function called outside component initialization");return T}function qt(t){J().$$.on_mount.push(t)}function Ht(t){J().$$.on_destroy.push(t)}function Wt(){const t=J();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=ft(e,n,{cancelable:s});return o.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const k=[],et=[],O=[],F=[],ht=Promise.resolve();let G=!1;function _t(){G||(G=!0,ht.then(N))}function K(t){O.push(t)}function Ft(t){F.push(t)}const H=new Set;let R=0;function N(){const t=T;do{for(;R<k.length;){const e=k[R];R++,S(e),mt(e.$$)}for(S(null),k.length=0,R=0;et.length;)et.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(k.length);for(;F.length;)F.pop()();G=!1,H.clear(),S(t)}function mt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const M=new Set;let v;function Gt(){v={r:0,c:[],p:v}}function Kt(){v.r||x(v.c),v=v.p}function st(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Ut(t,e,n,s){if(t&&t.o){if(M.has(t))return;M.add(t),v.c.push(()=>{M.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function zt(t,e){t.d(1),e.delete(t.key)}function Qt(t,e,n,s,o,i,r,l,a,c,u,d){let h=t.length,m=i.length,_=h;const j={};for(;_--;)j[t[_].key]=_;const C=[],I=new Map,V=new Map;for(_=m;_--;){const f=d(o,i,_),p=n(f);let g=r.get(p);g?s&&g.p(f,e):(g=c(p,f),g.c()),I.set(p,C[_]=g),p in j&&V.set(p,Math.abs(_-j[p]))}const Y=new Set,Z=new Set;function B(f){st(f,1),f.m(l,u),r.set(f.key,f),u=f.first,m--}for(;h&&m;){const f=C[m-1],p=t[h-1],g=f.key,P=p.key;f===p?(u=f.first,h--,m--):I.has(P)?!r.has(g)||Y.has(g)?B(f):Z.has(P)?h--:V.get(g)>V.get(P)?(Z.add(g),B(f)):(Y.add(P),h--):(a(p,r),h--)}for(;h--;){const f=t[h];I.has(f.key)||a(f,r)}for(;m;)B(C[m-1]);return C}function Jt(t,e){const n={},s={},o={$$scope:1};let i=t.length;for(;i--;){const r=t[i],l=e[i];if(l){for(const a in r)a in l||(s[a]=1);for(const a in l)o[a]||(n[a]=l[a],o[a]=1);t[i]=l}else for(const a in r)o[a]=1}for(const r in s)r in n||(n[r]=void 0);return n}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function Zt(t){t&&t.c()}function pt(t,e,n,s){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),s||K(()=>{const r=t.$$.on_mount.map(U).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...r):x(r),t.$$.on_mount=[]}),i.forEach(K)}function gt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(k.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(t,e,n,s,o,i,r,l=[-1]){const a=T;S(t);const c=t.$$={fragment:null,ctx:[],props:i,update:$,not_equal:o,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:tt(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,h,...m)=>{const _=m.length?m[0]:h;return c.ctx&&o(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),u&&yt(t,d)),h}):[],c.update(),u=!0,x(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=ut(e.target);c.fragment&&c.fragment.l(d),d.forEach(Q)}else c.fragment&&c.fragment.c();e.intro&&st(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),N()}S(a)}let ot;typeof HTMLElement=="function"&&(ot=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(U).filter(D);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){x(this.$$.on_disconnect)}$destroy(){gt(this,1),this.$destroy=$}$on(t,e){if(!D(e))return $;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!rt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function $t(t){let e,n,s=(t[1]||"Loading...")+"",o,i,r,l,a;return{c(){e=W("div"),n=W("p"),o=b(s),i=b(" | "),r=b(t[2]),l=b("/"),a=b(t[0]),this.c=$,L(n,"text-align","center"),L(e,"height","100vh"),L(e,"width","100vw"),L(e,"display","flex"),L(e,"justify-content","center"),L(e,"align-items","center")},m(c,u){z(c,e,u),E(e,n),E(n,o),E(n,i),E(n,r),E(n,l),E(n,a)},p(c,[u]){u&2&&s!==(s=(c[1]||"Loading...")+"")&&q(o,s),u&4&&q(r,c[2]),u&1&&q(a,c[0])},i:$,o:$,d(c){c&&Q(e)}}}function bt(t,e,n){let{total:s}=e,o,i=0;function r(l){n(2,i++,i),n(1,o=l)}return t.$$set=l=>{"total"in l&&n(0,s=l.total)},[s,o,i,r]}class vt extends ot{constructor(e){super(),wt(this,{target:this.shadowRoot,props:dt(this.attributes),customElement:!0},bt,$t,it,{total:0,setMessage:3},null),e&&(e.target&&z(e.target,this,e.anchor),e.props&&(this.$set(e.props),N()))}static get observedAttributes(){return["total","setMessage"]}get total(){return this.$$.ctx[0]}set total(e){this.$$set({total:e}),N()}get setMessage(){return this.$$.ctx[3]}}customElements.define("tf-mastodon-loader",vt);const Et="modulepreload",Lt=function(t){return"/"+t},nt={},y=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Lt(i),i in nt)return;nt[i]=!0;const r=i.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!s)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===i&&(!r||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Et,r||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),r)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},X=document.createElement("style");X.setAttribute("data-global-styles","");X.appendChild(document.createTextNode(`
  @import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

  .d-none {
    display: none !important;
  }
`));document.head.appendChild(X);function w(t){var n;const e=`Downloading ${t}...`;(n=window.loader)==null||n.setMessage(e)}async function xt(){var t;w("Grid3 Client"),await y(()=>import("./mastodon-weblet/assets/index.js"),[]),w("Threefold Svelte Bulma Reactive Forms"),window.tfSvelteRxForms=await y(()=>import("./mastodon-weblet/assets/public_api.js"),["mastodon-weblet/assets/public_api.js","mastodon-weblet/assets/_commonjsHelpers.js"]),w("Threefold Svelte Bulma Web Components"),window.tfSvelteBulmaWc=await y(()=>import("./mastodon-weblet/assets/public_api2.js"),[]),w("Typescript RMB Http Client"),window.tsRmbHttpClient=await y(()=>import("./mastodon-weblet/assets/index2.js"),["mastodon-weblet/assets/index2.js","mastodon-weblet/assets/httpClient.js","mastodon-weblet/assets/_commonjsHelpers.js"]),w("Web SSH Keygen"),window.webSshKeygen=await y(()=>import("./mastodon-weblet/assets/index3.js").then(e=>e.i),["mastodon-weblet/assets/index3.js","mastodon-weblet/assets/_commonjsHelpers.js"]),w("threefold Grid Graphql"),window.tfgridGql=await y(()=>import("./mastodon-weblet/assets/index4.js"),[]),w("QrCode"),window.qrcode=await y(()=>import("./mastodon-weblet/assets/browser.js").then(e=>e.b),[]),w("Mastodon Weblet"),await y(()=>import("./mastodon-weblet/assets/Mastodon.js"),["mastodon-weblet/assets/Mastodon.js","mastodon-weblet/assets/httpClient.js","mastodon-weblet/assets/_commonjsHelpers.js","mastodon-weblet/assets/MastodonModal.js"]),w("Mastodon List Weblet"),await y(()=>import("./mastodon-weblet/assets/MastodonList.js"),["mastodon-weblet/assets/MastodonList.js","mastodon-weblet/assets/MastodonModal.js","mastodon-weblet/assets/httpClient.js","mastodon-weblet/assets/_commonjsHelpers.js"]),(t=window.loader)==null||t.remove()}xt();export{ct as A,Ht as B,jt as C,Qt as D,zt as E,Dt as F,Mt as G,Vt as H,st as I,Ut as J,Kt as K,Zt as L,pt as M,gt as N,Gt as O,Tt as P,St as Q,Yt as R,ot as S,Ft as T,Bt as U,Jt as V,Xt as W,kt as X,dt as a,z as b,At as c,Q as d,W as e,N as f,J as g,lt as h,wt as i,L as j,E as k,Pt as l,Wt as m,$ as n,qt as o,Ot as p,b as q,q as r,it as s,It as t,et as u,Nt as v,Ct as w,D as x,x as y,Rt as z};
