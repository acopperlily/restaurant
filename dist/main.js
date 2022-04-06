(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(131),t.b),l=new URL(t(648),t.b),p=new URL(t(615),t.b),u=i()(r()),m=c()(d),h=c()(l),f=c()(p);u.push([n.id,"*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid orange; */\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n\n\nheader {\n  width: 100%;\n  padding: 0 30px;\n  background-color: purple;\n  position: fixed;\n  top: 0;\n\n}\n\nfooter {\n  width: 100%;\n  background-color: purple;\n  text-align: center;\n  height: 70px;\n  margin-top: auto;\n  padding: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter p {\n  font-size: .8rem;\n}\n\nh1 {\n  font-family: 'Poppins', sans-serif;\n  text-align: center;\n}\n\nh2 {\n  font-family: 'Poppins', sans-serif;\n  text-align: center;\n  max-width: 80%;\n  margin: -20px auto 10px auto;\n  padding-bottom: 20px;\n  font-size: calc(16px + 1vw);\n}\n\nh3 {\n  font-family: 'Lobster', cursive;\n}\n\np {\n  font-size: .9rem;\n  line-height: 1.4;\n}\n\nul {\n  height: 80px;\n  list-style: none;\n  display: flex;\n  align-items: center;\n}\n\nli {\n  padding: 28px 14px;\n  color: lightgray;\n  height: 80px;\n}\n\nli:hover {\n  color: white;\n  text-shadow: -2px 2px 3px rgb(69, 68, 68);\n}\n\n.highlight {\n  transition: .75s;\n  background-color: rgba(210, 210, 210, .5);\n  border-bottom: 2px solid gray;\n}\n\n#content {\n  /* This offsets the fixed position of header */\n  padding-top: 90px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  align-items: center;\n}\n\n.pageTitle {\n  color: red;\n  font-family: 'Lakki Reddy', cursive;\n  font-style: normal;\n  font-size: calc(48px + 2vw);\n  padding-top: 20px;\n}\n\n/* Home Page */\n\n#headline {\n  min-width: min-content;\n  max-width: max-content;\n  /* max-height: 45vh; */\n  padding: 30px 40px 0 40px;\n  font-size: calc(16px + .4vw);\n  margin: 0 auto;\n  text-align: center;\n}\n\n#headline1 {\n  /* text-align: left; */\n}\n\n#headline2 {\n  /* text-align: right; */\n  /* margin-bottom: -7px; */\n}\n\n#headline3 {\n  text-align: center;\n  /* margin-bottom: -10px; */\n}\n\n.hide {\n  display: none;\n}\n\n#home {\n  font-family: 'Lakki Reddy', cursive;\n  font-size: 1.5rem;\n\n  /* This offsets the tall em-square of this font */\n  padding-top: 25px;\n}\n\n#menu {\n  margin-left: auto;\n}\n\n#homeHero {\n  width: 100%;\n  height: 270px;\n  margin-bottom: 40px;\n  background-image: url("+m+");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  /* background-attachment: fixed; */\n  background-position: center;\n}\n\n#menuHero {\n  width: 100%;\n}\n\n#menuHero img {\n  width: 100%;\n  max-height: max(20vh, 300px);\n  object-fit: cover;\n}\n\n.credit {\n  font-size: .8rem;\n}\n\n#features {\n  margin-bottom: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  text-align: center;\n}\n\n.feature {\n  padding: 20px;\n  font-size: calc(18px + .5vw);\n  width: 30%;\n  min-width: min(400px, 70vw);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.feature span {\n  /* font-size: 2rem; */\n}\n\n.smol {\n  font-family: 'Dancing Script', cursive;\n  font-style: normal;\n}\n\n.chonker {\n  font-family: 'Lobster', cursive;\n  font-style: normal;\n}\n\n.boi {\n  font-family: 'Sacramento', cursive;\n  font-style: normal;\n}\n\n.unit {\n  font-family: 'Chango', cursive;\n  font-style: normal;\n  text-transform: uppercase;\n}\n\n.cat {\n  color: red;\n  font-family: 'Lakki Reddy',\n    cursive;\n  font-style: normal;\n  font-size: calc(48px + 1vw);\n}\n\n#no {\n  width: 110px;\n  height: 110px;\n  background-image: url("+h+");\n  background-size: contain;\n  border-radius: 50%;\n}\n\n#dish {\n  width: 110px;\n  height: 110px;\n  background-image: url("+f+");\n  background-size: contain;\n  border-radius: 50%;\n}\n\n#fountain img {\n  width: 110px;\n  border: 10px solid green;\n  border-radius: 50%;\n  margin-bottom: -12px;\n}\n\n.feature img {\n  width: 110px;\n}\n\n/* Menu page */\n\n/* Om Nom Noms */\n\n.menuItems {\n  padding: 30px;\n  width: 70vw;\n  /* height: auto; */\n  margin: 80px auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));\n  align-items: flex-start;\n  gap: 50px 100px;\n}\n\n.menuItem {\n  display: grid;\n  grid-template-columns: 90px minmax(70px, 2fr) 20px;\n  align-items: center;\n  grid-column-gap: 2px;\n  grid-row-gap: 5px;\n}\n\n/* Menu Item contents */\n\n.photo {\n  width: 80px;\n  height: 80px;\n}\n\n.dish {\n  align-self: flex-end;\n  border-bottom: 2px dotted gray;\n}\n\n.price {\n  text-align: right;\n  align-self: flex-end;\n  border-bottom: 2px dotted gray;\n}\n\n.desc {\n  grid-column: 1 / 4;\n}\n\n/* Contact Page */\n#formContainer {\n  margin-bottom: 50px;\n  width: clamp(440px, 66%, 800px);\n  padding: 40px 30px 20px 30px;\n  background-color: rgba(100, 100, 100, .5);\n  border-radius: 12px;\n}\n\nlabel::after {\n  content: ':';\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 20px;\n}\n\n.userInput {\n  display: flex;\n  flex-direction: column;\n}\n\n#userInput3 {\n  grid-column: 1 / 3;\n}\n\ninput {\n  padding: 10px;\n  font-size: 1rem;\n}\n\ntextarea {\n  padding: 10px;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n}\n\nbutton {\n  color: lightgray;\n  background-color: rgb(101, 244, 125);\n  padding: 12px 28px;\n  border-style: none;\n  border-radius: 12px;\n  font-size: 1.3rem;\n  max-width: min-content;\n}\n\nbutton:hover {\n  color: white;\n  background-color: rgb(10, 246, 10);\n  transition: 0.25s;\n}",""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},817:(n,e,t)=>{n.exports=t.p+"348f3129e60b9da17ea3.jpg"},615:(n,e,t)=>{n.exports=t.p+"02bca7f7f4f131861093.jpg"},145:(n,e,t)=>{n.exports=t.p+"79659b4c3061379d4e05.jpg"},131:(n,e,t)=>{n.exports=t.p+"09a7e97c278f2f5d1b62.jpg"},648:(n,e,t)=>{n.exports=t.p+"3a62f964de763fca74b6.jpg"},835:(n,e,t)=>{n.exports=t.p+"12ccb9aeea1793537b96.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,t(648);var f=t(817),g=t(145),x=t(835);let b=document.getElementsByTagName("br");window.addEventListener("resize",(n=>{for(let e=0;e<b.length;e++)n.target.innerWidth<610?b[e].classList.remove("hide"):b[e].classList.add("hide")}));const y=function(n,e,t){e.appendChild(function(){const n=document.createElement("div");let e=1;return[["Whether ","Illegaly Smol"," or ","Heckin' Chonker",","],["from ","Fine Boi"," to ","Absolute Unit"," -"],["you'll fit in at ","Fat Cat Café"]].forEach((t=>{const o=document.createElement("h1");for(let n=0;n<t.length;n++){let e,r;if(n%2==0?e=document.createTextNode(t[n]):(e=document.createElement("span"),e.textContent=t[n],r=t[n].toLowerCase().split(" ")[1],e.classList.add(r)),o.appendChild(e),1==n||"cat"==r){const n=document.createElement("br");window.innerWidth>609&&n.classList.add("hide"),"cat"==r?o.insertBefore(n,o.lastElementChild):o.appendChild(n)}}o.setAttribute("id",`headline${e}`),e++,n.appendChild(o)})),n.setAttribute("id","headline"),n}()),e.appendChild(function(n){const e=document.createElement("div");return e.setAttribute("id","homeHero"),e}()),e.appendChild(function(){const n=document.createElement("div");n.setAttribute("id","features");const e=[x,x,g],t=["no","dish","fountain"],o=["Microchip Feeders Prohibited","No Whisker Fatigue","Unlimited Drinks"],r=["We encourage you to eat as little or as much as you please","For your comfort, all noms are served on a flat dish","Enjoy fresh, running water thoughtfully placed far away from your meal"];for(let a=0;a<e.length;a++){const i=document.createElement("div");i.setAttribute("id",t[a]);const s=new Image;s.src=e[a],i.appendChild(s);const c=document.createElement("h3");c.textContent=o[a];const d=document.createElement("div");d.classList.add("feature");const l=document.createElement("p");l.textContent=r[a],d.appendChild(i),d.appendChild(c),d.appendChild(l),n.appendChild(d)}return n}()),n.insertBefore(e,t)},v=[{photo:"pink",dish:"Tableside Tuna",price:"$6",desc:"We'll open the can at your table"},{photo:"red",dish:"Sneaky Cheez",price:"$2",desc:"Yes, you can haz cheez!"}],C=[{photo:"blue",dish:"Classic Paté",price:"$2",desc:"Sink your teefies into this solid mold of potted meat, straight from the can"},{photo:"yellow",dish:"Comfort Chunks",price:"$4",desc:"The purrrfect combination of meaty bits and gravies"},{photo:"purple",dish:"Savory Shreds",price:"$3",desc:"For those who purrrfer a little meat with their gravies"},{photo:"orange",dish:"Fat Cat Feast",price:"$5",desc:"Our Classic Paté topped with your choice of Comfort Chunks or Savory Shreds"}],w=[{photo:"lightblue",dish:"Sausage Nibbles",price:"$3",desc:"You can have a little sausage, as a treat"},{photo:"lightpink",dish:"Saucer of Milk",price:"$1",desc:"We won't tell you how to live your nine lives"}];function E(n){const e=document.createElement("div");e.classList.add("menuItems");const t=["div","h3","p","p"];let o=0;return n.forEach((n=>{const r=document.createElement("div");r.classList.add("menuItem");for(let e in n){const a=document.createElement(t[o]);a.classList.add(e),"photo"==e?a.style.backgroundColor=n.photo:a.textContent=n[e],r.appendChild(a),o++}o=0,e.appendChild(r)})),e}const k=(n,e,t)=>{[()=>{const n=document.createElement("h1");return n.textContent="Contact Us",n.classList.add("pageTitle"),n},()=>{const n=document.createElement("h2");return n.textContent="We'd love to hear from you!",n},()=>{const n=document.createElement("div");return n.setAttribute("id","formContainer"),n.appendChild((()=>{const n=document.createElement("form");let e=1;return[{name:"Name",placeholder:"Jorts the Cat",field:"input",type:"text"},{name:"Email",placeholder:"dogssuck@meow.com",field:"input",type:"email"},{name:"Message",placeholder:"Tell us how awesome we are!",field:"textarea"}].forEach((t=>{const o=document.createElement("div");o.classList.add("userInput"),o.setAttribute("id",`userInput${e}`),e++,o.appendChild((n=>{const e=document.createElement("label");return e.setAttribute("for",n.toLowerCase()),e.textContent=n,e})(t.name)),o.appendChild((n=>{const e=document.createElement(n.field);return n.type&&e.setAttribute("type",n.type),e.setAttribute("placeholder",n.placeholder),e.setAttribute("id",n.name.toLowerCase()),e})(t)),n.appendChild(o)})),n.appendChild((()=>{const n=document.createElement("button");return n.textContent="Submit",n.addEventListener("click",(n=>{n.preventDefault(),alert("This is not a real form, but thanks for playing!")})),n})()),n})()),n}].forEach((n=>e.appendChild(n()))),n.insertBefore(e,t)};let L="home";const T=document.getElementById("content");(n=>{const e=document.createElement("header"),t=document.createElement("ul");["Fat Cat Café","Menu","Contact"].forEach((n=>{const e=document.createElement("li");e.textContent=n,"Fat Cat Café"==n?e.setAttribute("id","home"):e.setAttribute("id",n.toLowerCase()),t.appendChild(e)})),e.appendChild(t),n.appendChild(e)})(T),(n=>{const e=document.createElement("footer"),t=document.createElement("p");document.createElement("span"),t.textContent="Made with ❤️ by April Copley",e.appendChild(t),n.appendChild(e)})(T);const A=document.getElementsByTagName("footer")[0],S=document.createElement("main");y(T,S,A),document.querySelectorAll("li").forEach((n=>{n.addEventListener("click",(n=>{const e=n.path[0].id;e!=L?(document.getElementById(L).classList.remove("highlight"),L=e,document.getElementById(L).classList.add("highlight"),S.textContent="","menu"==e?function(n,e,t){e.appendChild(function(){const n=document.createElement("h1");return n.classList.add("pageTitle"),n.textContent="Om Nom Noms",n}()),e.appendChild(function(){const n=document.createElement("h2");return n.textContent="Enjoy unlimited trips to our Water Fountain with purrrchase of any entrée",n}()),e.appendChild(function(){const n=document.createElement("div"),e=new Image;return e.src=f,n.setAttribute("id","menuHero"),n.appendChild(e),n}());const o=document.getElementById("menuHero"),r=document.createElement("p");r.textContent="Photo by Anastasiia Rozumna on Unsplash",r.classList.add("credit"),o.appendChild(r),e.appendChild(E(v)),e.appendChild(E(C)),e.appendChild(E(w)),n.insertBefore(e,t)}(T,S,A):"contact"==e?k(T,S,A):y(T,S,A)):console.log("same page")}))}))})()})();