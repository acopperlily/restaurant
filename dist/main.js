(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>g});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),s=r(667),c=r.n(s),d=new URL(r(131),r.b),l=new URL(r(648),r.b),p=new URL(r(615),r.b),u=i()(o()),m=c()(d),h=c()(l),f=c()(p);u.push([n.id,":root {\r\n  --card-bg-color: rgba(100, 100, 100, .5);\r\n}\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  /* border: 1px solid orange; */\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 0 30px;\r\n  background-color: purple;\r\n  position: fixed;\r\n  top: 0;\r\n\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  background-color: purple;\r\n  text-align: center;\r\n  height: 70px;\r\n  margin-top: auto;\r\n  padding: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: .8rem;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Poppins', sans-serif;\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Poppins', sans-serif;\r\n  text-align: center;\r\n  max-width: 80%;\r\n  margin: -20px auto 10px auto;\r\n  padding-bottom: 20px;\r\n  font-size: calc(16px + 1vw);\r\n}\r\n\r\nh3 {\r\n  font-family: 'Lobster', cursive;\r\n}\r\n\r\np {\r\n  font-size: .9rem;\r\n  line-height: 1.4;\r\n}\r\n\r\nul {\r\n  height: 80px;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nli {\r\n  padding: 28px 14px;\r\n  color: lightgray;\r\n  height: 80px;\r\n}\r\n\r\nli:hover {\r\n  color: white;\r\n  text-shadow: -2px 2px 3px rgb(69, 68, 68);\r\n}\r\n\r\n.highlight {\r\n  transition: .75s;\r\n  background-color: rgba(210, 210, 210, .5);\r\n  border-bottom: 2px solid gray;\r\n}\r\n\r\n#content {\r\n  /* This offsets the fixed position of header */\r\n  padding-top: 90px;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmain {\r\n  margin-bottom: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n}\r\n\r\n.pageTitle {\r\n  color: red;\r\n  font-family: 'Lakki Reddy', cursive;\r\n  font-style: normal;\r\n  font-size: calc(48px + 2vw);\r\n  padding-top: 20px;\r\n}\r\n\r\n/* Home Page */\r\n\r\n#headline {\r\n  min-width: min-content;\r\n  max-width: max-content;\r\n  /* max-height: 45vh; */\r\n  padding: 30px 40px 0 40px;\r\n  font-size: calc(16px + .4vw);\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n#headline1 {\r\n  /* text-align: left; */\r\n}\r\n\r\n#headline2 {\r\n  /* text-align: right; */\r\n  /* margin-bottom: -7px; */\r\n}\r\n\r\n#headline3 {\r\n  text-align: center;\r\n  /* margin-bottom: -10px; */\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n#home {\r\n  font-family: 'Lakki Reddy', cursive;\r\n  font-size: 1.5rem;\r\n\r\n  /* This offsets the tall em-square of this font */\r\n  padding-top: 25px;\r\n}\r\n\r\n#menu {\r\n  margin-left: auto;\r\n}\r\n\r\n#homeHero {\r\n  width: 100%;\r\n  height: 270px;\r\n  margin-bottom: 40px;\r\n  background-image: url("+m+");\r\n  background-size: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background-attachment: fixed; */\r\n  background-position: center;\r\n}\r\n\r\n#menuHero {\r\n  width: 100%;\r\n}\r\n\r\n#menuHero img {\r\n  width: 100%;\r\n  max-height: max(20vh, 300px);\r\n  object-fit: cover;\r\n}\r\n\r\n.credit {\r\n  font-size: .8rem;\r\n}\r\n\r\n#features {\r\n  margin-bottom: 50px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 30px;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.feature {\r\n  padding: 20px;\r\n  font-size: calc(18px + .5vw);\r\n  width: 30%;\r\n  min-width: min(400px, 70vw);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.feature span {\r\n  /* font-size: 2rem; */\r\n}\r\n\r\n.smol {\r\n  font-family: 'Dancing Script', cursive;\r\n  font-style: normal;\r\n}\r\n\r\n.chonker {\r\n  font-family: 'Lobster', cursive;\r\n  font-style: normal;\r\n}\r\n\r\n.boi {\r\n  font-family: 'Sacramento', cursive;\r\n  font-style: normal;\r\n}\r\n\r\n.unit {\r\n  font-family: 'Chango', cursive;\r\n  font-style: normal;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.cat {\r\n  color: red;\r\n  font-family: 'Lakki Reddy',\r\n    cursive;\r\n  font-style: normal;\r\n  font-size: calc(48px + 1vw);\r\n}\r\n\r\n#no {\r\n  width: 110px;\r\n  height: 110px;\r\n  background-image: url("+h+");\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n}\r\n\r\n#dish {\r\n  width: 110px;\r\n  height: 110px;\r\n  background-image: url("+f+");\r\n  background-size: contain;\r\n  border-radius: 50%;\r\n}\r\n\r\n#fountain img {\r\n  width: 110px;\r\n  border: 10px solid green;\r\n  border-radius: 50%;\r\n  margin-bottom: -12px;\r\n}\r\n\r\n.feature img {\r\n  width: 110px;\r\n}\r\n\r\n/* Menu page */\r\n\r\n/* Om Nom Noms */\r\n\r\n.menuTitle {\r\n  text-transform: capitalize;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.menuItems {\r\n  padding: 30px;\r\n  width: 70vw;\r\n  margin: 0 auto 40px auto;\r\n  background-color: var(--card-bg-color);\r\n  border-radius: 12px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));\r\n  align-items: flex-start;\r\n  gap: 50px 100px;\r\n}\r\n\r\n.menuItem {\r\n  display: grid;\r\n  grid-template-columns: 90px minmax(70px, 2fr) 20px;\r\n  align-items: center;\r\n  grid-column-gap: 2px;\r\n  grid-row-gap: 5px;\r\n}\r\n\r\n/* Menu Item contents */\r\n\r\n.photo {\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.dish {\r\n  align-self: flex-end;\r\n  border-bottom: 2px dotted gray;\r\n}\r\n\r\n.price {\r\n  text-align: right;\r\n  align-self: flex-end;\r\n  border-bottom: 2px dotted gray;\r\n}\r\n\r\n.desc {\r\n  grid-column: 1 / 4;\r\n}\r\n\r\n/* Contact Page */\r\n#formContainer {\r\n  margin-bottom: 50px;\r\n  width: clamp(400px, 66%, 800px);\r\n  padding: 40px 30px 20px 30px;\r\n  background-color: var(--card-bg-color);\r\n  border-radius: 12px;\r\n}\r\n\r\nlabel::after {\r\n  content: ':';\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.userInput {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#userInput3 {\r\n  grid-column: 1 / 3;\r\n}\r\n\r\ninput {\r\n  padding: 10px;\r\n  font-size: 1rem;\r\n}\r\n\r\ntextarea {\r\n  padding: 10px;\r\n  width: 100%;\r\n  height: 100px;\r\n  font-size: 1rem;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbutton {\r\n  color: lightgray;\r\n  background-color: rgb(101, 244, 125);\r\n  padding: 12px 28px;\r\n  border-style: none;\r\n  border-radius: 12px;\r\n  font-size: 1.3rem;\r\n  max-width: min-content;\r\n}\r\n\r\nbutton:hover {\r\n  color: white;\r\n  background-color: rgb(10, 246, 10);\r\n  transition: 0.25s;\r\n}",""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=r(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var l=r(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},817:(n,e,r)=>{n.exports=r.p+"348f3129e60b9da17ea3.jpg"},615:(n,e,r)=>{n.exports=r.p+"02bca7f7f4f131861093.jpg"},145:(n,e,r)=>{n.exports=r.p+"79659b4c3061379d4e05.jpg"},131:(n,e,r)=>{n.exports=r.p+"09a7e97c278f2f5d1b62.jpg"},648:(n,e,r)=>{n.exports=r.p+"3a62f964de763fca74b6.jpg"},835:(n,e,r)=>{n.exports=r.p+"12ccb9aeea1793537b96.png"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),d=r(216),l=r.n(d),p=r(589),u=r.n(p),m=r(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,r(648);var f=r(817);const g=(n,e)=>{const r=document.createElement(n.tag);if(n.id&&r.setAttribute("id",n.id),n.classes)for(let e=0;e<n.classes.length;e++)r.classList.add(n.classes[e]);if(n.text&&(r.textContent=n.text),n.src){const e=new Image;e.setAttribute("src",n.src),r.appendChild(e)}return e.appendChild(r),r};var x=r(145),b=r(835);let y=document.getElementsByTagName("br");window.addEventListener("resize",(n=>{for(let e=0;e<y.length;e++)n.target.innerWidth<610?y[e].classList.remove("hide"):y[e].classList.add("hide")}));const v=function(n,e,r){e.appendChild(function(){const n=document.createElement("div");let e=1;return[["Whether ","Illegaly Smol"," or ","Heckin' Chonker",","],["from ","Fine Boi"," to ","Absolute Unit"," -"],["you'll fit in at ","Fat Cat Café"]].forEach((r=>{const t=document.createElement("h1");for(let n=0;n<r.length;n++){let e,o;if(n%2==0?e=document.createTextNode(r[n]):(e=document.createElement("span"),e.textContent=r[n],o=r[n].toLowerCase().split(" ")[1],e.classList.add(o)),t.appendChild(e),1==n||"cat"==o){const n=document.createElement("br");window.innerWidth>609&&n.classList.add("hide"),"cat"==o?t.insertBefore(n,t.lastElementChild):t.appendChild(n)}}t.setAttribute("id",`headline${e}`),e++,n.appendChild(t)})),n.setAttribute("id","headline"),n}()),e.appendChild(function(n){const e=document.createElement("div");return e.setAttribute("id","homeHero"),e}()),e.appendChild(function(){const n=document.createElement("div");n.setAttribute("id","features");const e=[b,b,x],r=["no","dish","fountain"],t=["Microchip Feeders Prohibited","No Whisker Fatigue","Unlimited Drinks"],o=["We're not here to tell you how to live your nine lives","For your comfort, all noms are served on a flat dish","Enjoy fresh, running water thoughtfully placed far away from your meal"];for(let a=0;a<e.length;a++){const i=document.createElement("div");i.setAttribute("id",r[a]);const s=new Image;s.src=e[a],i.appendChild(s);const c=document.createElement("h3");c.textContent=t[a];const d=document.createElement("div");d.classList.add("feature");const l=document.createElement("p");l.textContent=o[a],d.appendChild(i),d.appendChild(c),d.appendChild(l),n.appendChild(d)}return n}()),n.insertBefore(e,r)},w={apps:[{photo:"pink",dish:"Tableside Tuna",price:"$6",desc:"We'll open the can at your table"},{photo:"red",dish:"Sneaky Cheez",price:"$2",desc:"Yes, you can haz cheez! At home you're lucky to get a ninja nibble, but here you'll get the whole slice."}],entrées:[{photo:"blue",dish:"Classic Paté",price:"$2",desc:"Sink your teefies into this solid mold of potted meat, straight from the can"},{photo:"yellow",dish:"Comfort Chunks",price:"$4",desc:"The purrrfect combination of meaty bits and gravies"},{photo:"purple",dish:"Savory Shreds",price:"$3",desc:"For those who purrrfer a little meat with their gravies"},{photo:"orange",dish:"Fat Cat Feast",price:"$5",desc:"Our Classic Paté topped with your choice of Comfort Chunks or Savory Shreds"}],treats:[{photo:"lightblue",dish:"Sausage Nibbles",price:"$3",desc:"You can have a little sausage, as a treat"},{photo:"lightpink",dish:"Saucer of Milk",price:"$1",desc:"Don't let your lactose intolerance get in the way of enjoying this tasty beverage"}]};function C(n,e){const r=g({tag:"div",classes:["menuItems"]},e),t=["div","h3","p","p"];let o=0;return n.forEach((n=>{const e=document.createElement("div");e.classList.add("menuItem");for(let r in n){const a=document.createElement(t[o]);a.classList.add(r),"photo"==r?a.style.backgroundColor=n.photo:a.textContent=n[r],e.appendChild(a),o++}o=0,r.appendChild(e)})),r}const E=(n,e,r)=>{[()=>{const n=document.createElement("h1");return n.textContent="Contact Us",n.classList.add("pageTitle"),n},()=>{const n=document.createElement("h2");return n.textContent="We'd love to hear from you!",n},()=>{const n=document.createElement("div");return n.setAttribute("id","formContainer"),n.appendChild((()=>{const n=document.createElement("form");let e=1;return[{name:"Name",placeholder:"Jorts the Cat",field:"input",type:"text"},{name:"Email",placeholder:"dogssuck@meow.com",field:"input",type:"email"},{name:"Message",placeholder:"Tell us how awesome we are!",field:"textarea"}].forEach((r=>{const t=document.createElement("div");t.classList.add("userInput"),t.setAttribute("id",`userInput${e}`),e++,t.appendChild((n=>{const e=document.createElement("label");return e.setAttribute("for",n.toLowerCase()),e.textContent=n,e})(r.name)),t.appendChild((n=>{const e=document.createElement(n.field);return n.type&&e.setAttribute("type",n.type),e.setAttribute("placeholder",n.placeholder),e.setAttribute("id",n.name.toLowerCase()),e})(r)),n.appendChild(t)})),n.appendChild((()=>{const n=document.createElement("button");return n.textContent="Submit",n.addEventListener("click",(n=>{n.preventDefault(),alert("This is not a real form, but thanks for playing!")})),n})()),n})()),n}].forEach((n=>e.appendChild(n()))),n.insertBefore(e,r)};let k="home";const L=document.getElementById("content");(n=>{const e=g({tag:"header"},n),r=g({tag:"ul"},e);["home","Menu","Contact"].forEach((n=>{const e={tag:"li",id:n.toLowerCase(),classes:["tab"],text:n},t=g(e,r);"home"==n&&(t.textContent="Fat Cat Café")}))})(L),(n=>{const e=g({tag:"footer",id:"butt",classes:["footer"]},n);[{tag:"p",id:"mine",classes:["mine"],text:"Made with ❤️ by April Copley "},{tag:"span",id:"icon",text:""}].forEach((n=>{g(n,e)}))})(L);const T=document.getElementsByTagName("footer")[0],A=g({tag:"main"},L);v(L,A,T),document.querySelectorAll("li").forEach((n=>{n.addEventListener("click",(n=>{const e=n.path[0].id;e!=k?(document.getElementById(k).classList.remove("highlight"),k=e,document.getElementById(k).classList.add("highlight"),A.textContent="","menu"==e?function(n,e,r){[{tag:"h1",classes:["pageTitle"],text:"Om Nom Noms"},{tag:"h2",text:"Enjoy unlimited trips to our Water Fountain with purrrchase of any entrée"},{tag:"div",id:"menuHero",src:f},{tag:"p",classes:["credit"],text:"Photo by Anastasiia Rozumna on Unsplash"}].forEach((n=>{g(n,e)}));for(let n in w)g({tag:"h2",classes:["menuTitle"],text:n},e),e.appendChild(C(w[n],e));n.insertBefore(e,r)}(L,A,T):"contact"==e?E(L,A,T):v(L,A,T)):console.log("same page")}))}))})()})();