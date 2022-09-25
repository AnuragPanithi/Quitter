(()=>{"use strict";var e={4647:(e,t,r)=>{r(8964),r(702);var o=r(1957),n=r(2774),a=r(499),i=r(9835);function c(e,t,r,o,n,a){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c)}const l=(0,i.aZ)({name:"App"});var s=r(1639);const u=(0,s.Z)(l,[["render",c]]),p=u;var d=r(3340),f=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(831)]).then(r.bind(r,9831)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(400)]).then(r.bind(r,6400))},{path:"/about",component:()=>Promise.all([r.e(736),r.e(278)]).then(r.bind(r,7278))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],v=h,b=(0,d.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return t}));async function m(e,t){const r=e(p);r.use(n.Z,t);const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:r,router:o}}const g={config:{}},y="";async function w({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let l=0;!1===o&&l<r.length;l++)try{await r[l]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:y})}catch(c){return c&&c.url?void a(c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(e.use(t),e.mount("#q-app"))}m(o.ri,g).then((e=>Promise.allSettled([Promise.resolve().then(r.bind(r,8083))]).then((t=>{const r=t.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)})).filter((e=>"function"===typeof e));w(e,r)}))))},8083:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(222);r(4702);const n={apiKey:"AIzaSyAWr9NbTIRxFXecyq3HEG8y3nfUU3_m1-Q",authDomain:"quitter2-9fc1a.firebaseapp.com",projectId:"quitter2-9fc1a",storageBucket:"quitter2-9fc1a.appspot.com",messagingSenderId:"1008902058332",appId:"1:1008902058332:web:89e5ed36b63c60a91e1199"};o.Z.initializeApp(n);const a=o.Z.firestore(),i=a}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],c=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{278:"c431209e",400:"e79d0455",831:"c85ee9fa",862:"9a9e4dcb"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"f4451641"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="testproject:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var c,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var p=s[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){c=p;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[n];var d=(t,r)=>{c.onerror=c.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),l&&document.head.appendChild(c)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),c=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,c,l]=o,s=0;if(i.some((t=>0!==e[t]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(l)var u=l(r)}for(t&&t(o);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunktestproject"]=globalThis["webpackChunktestproject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4647)));o=r.O(o)})();