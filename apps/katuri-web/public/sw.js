if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8350ad1a58ce1fcdb549f0afc900be05"},{url:"/_next/static/chunks/21546396-5c47f49480ba04ef.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/56098284-5434bcf1322fc62e.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/62-9117fd4b583649d0.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/654-ffef5532a10fd13c.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/807-da6fafd4c122fc5a.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/app/_not-found-d9fdd4b2a908362e.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/app/layout-51ddb28aa4200ac6.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/app/page-c94680610b132d15.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/framework-e905d71c214c6f2b.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/main-a4b4eca658e1a7e3.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/main-app-2ac91a5eec9fcc9e.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/pages/_app-399598473f6f039b.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/pages/_error-bac5c3487c955260.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e726f6f6a1f29c32.js",revision:"jZBQoaEuR8phi-8zGz3a3"},{url:"/_next/static/css/6487e5004e3803cf.css",revision:"6487e5004e3803cf"},{url:"/_next/static/jZBQoaEuR8phi-8zGz3a3/_buildManifest.js",revision:"45011f5a5455c3a5a71577d098aebb27"},{url:"/_next/static/jZBQoaEuR8phi-8zGz3a3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/logo.png",revision:"57759028b236e811a8733665120c4278"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
