(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const _="modulepreload",h=function(s){return"/"+s},m={},o=function(r,a,u){if(!a||a.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=h(e),e in m)return;m[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!u)for(let c=t.length-1;c>=0;c--){const d=t[c];if(d.href===e&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":_,n||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),n)return new Promise((c,d)=>{l.addEventListener("load",c),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},p=document.createElement("style");p.setAttribute("data-global-styles","");p.appendChild(document.createTextNode(`
    @import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
    @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

    .d-none {
      display: none !important;
    }

    :host {
      --main-purple: #6261fb;
      --main-purple-darken: #4747f0;
      --main-purple-lighten: #9c9cf0;
      --main-purple-lighten-2: #efeef0;
    }

    strong {
      color: inherit !important;
    }

    .button.is-primary {
      background-color: var(--main-purple);
    }

    .button.is-primary:hover {
      background-color: var(--main-purple-darken);
    }

    .button.is-primary.is-outlined {
      border-color: var(--main-purple);
      color: var(--main-purple);
    }

    .button.is-primary.is-outlined:hover,
    .button.is-primary.is-outlined:active,
    .button.is-primary.is-outlined:focus {
      color: #fff;
      background-color: var(--main-purple);
      border-color: transparent;
    }

    .button.is-primary.is-outlined:active,
    .button.is-primary.is-outlined:focus {
      box-shadow: 0 0 0 2px var(--main-purple-lighten);
    }

    .button.is-primary.is-outlined[disabled] {
      border-color: var(--main-purple);
    }

    .button.is-primary.is-outlined.is-loading::after {
      border-color: transparent transparent var(--main-purple)
        var(--main-purple) !important;
    }

    .input.is-success,
    .textarea.is-success,
    .select.is-success select,
    .select.is-success:not(:hover)::after {
      border-color: var(--main-purple) !important;
    }

    .icon-text.has-text-success {
      color: var(--main-purple) !important;
    }

    .switch__input:checked + .slider {
      background-color: var(--main-purple);
    }

    .notification.is-success.is-light {
      background-color: var(--main-purple-lighten-2);
      color: var(--main-purple);
    }

    .button.is-primary[disabled] {
      background-color: var(--main-purple);
    }
`));document.head.appendChild(p);function i(s){var a;const r=`Downloading ${s}...`;(a=window.loader)==null||a.setMessage(r)}async function v(){var s;i("Polkadot Api"),window.polkadot_api=await o(()=>import("./mastodon-weblet/assets/index.js"),["mastodon-weblet/assets/index.js","mastodon-weblet/assets/ed2curve.js","mastodon-weblet/assets/_commonjsHelpers.js"]),i("Grid3 Client"),await o(()=>import("./mastodon-weblet/assets/index2.js"),[]),i("Threefold Svelte Bulma Reactive Forms"),window.tfSvelteRxForms=await o(()=>import("./mastodon-weblet/assets/public_api.js"),["mastodon-weblet/assets/public_api.js","mastodon-weblet/assets/_commonjsHelpers.js"]),i("Threefold Svelte Bulma Web Components"),window.tfSvelteBulmaWc=await o(()=>import("./mastodon-weblet/assets/public_api2.js"),["mastodon-weblet/assets/public_api2.js","mastodon-weblet/assets/index3.js"]),i("Typescript RMB Http Client"),window.tsRmbHttpClient=await o(()=>import("./mastodon-weblet/assets/index4.js"),["mastodon-weblet/assets/index4.js","mastodon-weblet/assets/httpClient.js","mastodon-weblet/assets/_commonjsHelpers.js","mastodon-weblet/assets/ed2curve.js"]),i("Web SSH Keygen"),window.webSshKeygen=await o(()=>import("./mastodon-weblet/assets/index5.js").then(r=>r.i),["mastodon-weblet/assets/index5.js","mastodon-weblet/assets/_commonjsHelpers.js"]),i("threefold Grid Graphql"),window.tfgridGql=await o(()=>import("./mastodon-weblet/assets/index6.js"),[]),i("QrCode"),window.qrcode=await o(()=>import("./mastodon-weblet/assets/browser.js").then(r=>r.b),[]),i("Mastodon Weblet"),await o(()=>import("./mastodon-weblet/assets/Mastodon.js"),["mastodon-weblet/assets/Mastodon.js","mastodon-weblet/assets/index3.js","mastodon-weblet/assets/httpClient.js","mastodon-weblet/assets/_commonjsHelpers.js","mastodon-weblet/assets/ed2curve.js","mastodon-weblet/assets/MastodonModal.js"]),i("Mastodon List Weblet"),await o(()=>import("./mastodon-weblet/assets/MastodonList.js"),["mastodon-weblet/assets/MastodonList.js","mastodon-weblet/assets/index3.js","mastodon-weblet/assets/MastodonModal.js","mastodon-weblet/assets/httpClient.js","mastodon-weblet/assets/_commonjsHelpers.js","mastodon-weblet/assets/ed2curve.js"]),(s=window.loader)==null||s.remove()}v();export{o as _};
