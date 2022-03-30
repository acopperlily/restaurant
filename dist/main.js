(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(131),t.b),d=i()(o()),u=s()(l);d.push([e.id,"*, ::after, ::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nheader {\n  padding: 10px 20px;\n  background-color: purple;\n}\n\nh1 {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n}\n\nstrong {\n  color: red;\n  font-family: 'Lakki Reddy', cursive;\n  font-style: normal;\n  font-size: 2.5rem;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n}\n\n.brand {\n  font-family: 'Lakki Reddy', cursive;\n  font-size: 1.5rem;\n\n  /* This offsets the tall em-square of this font */\n  padding-top: 15px;\n}\n\nli:nth-child(2) {\n  margin-left: auto;\n}\n\nli {\n  padding: 0 12px;\n  \n}\n\n#right {\n  margin-left: auto;\n}\n\n#hero{\n  width: 100vw;\n  height: 270px;\n  background-image: url("+u+");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  /* background-attachment: fixed; */\n  background-position: center;\n}\n\n#features {\n  margin: auto;\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.feature {\n  padding: 20px;\n  font-size: 1.2rem;\n}\n\n.feature span {\n  font-size: 2rem;\n}\n\n.smol {\n  font-family: 'Dancing Script', cursive;\n  font-style: normal;\n}\n\n.chonker {\n  font-family: 'Lobster', cursive;\n  font-style: normal;\n}\n\n.boi {\n  font-family: 'Sacramento', cursive;\n  font-style: normal;\n}\n\n.unit {\n  font-family: 'Chango', cursive;\n  font-style: normal;\n  text-transform: uppercase;\n}",""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},131:(e,n,t)=>{e.exports=t.p+"09a7e97c278f2f5d1b62.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t(131);const h=document.getElementById("content");h.appendChild(function(){const e=document.createElement("header"),n=document.createElement("ul");return["Fat Cat Café","Home","Menu","Contact"].forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)})),n.firstElementChild.classList.add("brand"),e.appendChild(n),e}()),h.appendChild(function(){const e=document.createElement("h1"),n=["Whether "," or ",", from "," to "," – you'll fit in at "],t=["Illegaly Smol","Heckin' Chonker","Fine Boi","Absolute Unit"];let r,o;for(o=0;o<t.length;o++){const a=document.createElement("span");a.textContent=t[o],a.classList.add(t[o].toLowerCase().split(" ")[1]),r=document.createTextNode(n[o]),e.appendChild(r),e.appendChild(a)}r=document.createTextNode(n[o]),e.appendChild(r);const a=document.createElement("strong");return a.textContent="Fat Cat Café",e.appendChild(a),e.classList.add("headline"),e}()),h.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","hero"),e}()),h.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","features");const n=["❌","❌","✅"],t=["No microchip feeders here!","All noms served on a flat dish to avoid whisker fatigue","Unlimited access to water fountain with purchase of any entrée"];for(let r=0;r<n.length;r++){const o=document.createElement("span");o.textContent=n[r];const a=document.createElement("p");a.textContent=t[r];const i=document.createElement("div");i.classList.add("feature"),i.appendChild(o),i.appendChild(a),e.appendChild(i)}return e}()),console.log("testing..."),console.log("moar")})()})();