(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"16l3":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n("q1tI"),r=n.n(a),i=n("QSOs"),o=n("2L6I"),c=n("WORS"),l=n("vOnD"),s=n("Wbzz"),u=l.a.div.withConfig({displayName:"project-card__CardStyles",componentId:"sc-8q1rw-0"})(["width:100%;grid-column:span 6;@media (max-width:620px){grid-column:span 12;}"]),m=l.a.img.withConfig({displayName:"project-card__ImageStyles",componentId:"sc-8q1rw-1"})(["width:100%;border-radius:5px;"]),d=l.a.h2.withConfig({displayName:"project-card__H2Styles",componentId:"sc-8q1rw-2"})(["text-transform:uppercase;font-size:1.5rem;margin:0.5rem 0 0.25rem 0;"]),p=l.a.p.withConfig({displayName:"project-card__PStyles",componentId:"sc-8q1rw-3"})(["font-size:0.75rem;opacity:0.75;margin:0;display:inline;"]);function f(e){var t=e.skills.join(" | ");return r.a.createElement(u,null,r.a.createElement(s.Link,{to:e.to},r.a.createElement(m,{src:n("1IgP")("./"+e.source+".png")})),r.a.createElement(d,null,e.title),r.a.createElement(p,null,t))}var g=n("W/9C"),y=n("qhky"),h=l.a.div.withConfig({displayName:"projects__PageStyles",componentId:"elr0at-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),b=l.a.div.withConfig({displayName:"projects__ProjectContainerStyles",componentId:"elr0at-1"})(["display:grid;grid-gap:2rem;grid-template-columns:repeat(12,1fr);"]);function w(){return r.a.createElement(h,null,r.a.createElement(y.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Brady Vossler's Portfolio | Projects")),r.a.createElement(i.a,null),r.a.createElement(o.a,null,r.a.createElement(c.a,{name:"Projects"}),r.a.createElement(b,null,r.a.createElement(f,{source:"todo-thumbnail",title:"Inventory Tracker",skills:["React","Express","Node","MongoDB"],to:"/inventory-tracker"}),r.a.createElement(f,{source:"weather-thumbnail",title:"Weather Boy",skills:["Node","Discord.js","DarkSky API","MapBox API"],to:"/weather-boy"}),r.a.createElement(f,{source:"hilo-thumbnail",title:"Hi-Lo Game",skills:["HTML","CSS","JavaScript"],to:"/hilo"}))),r.a.createElement(g.a,null))}},"1IgP":function(e,t,n){var a={"./favicon.png":"Yhqy","./hilo-example.png":"iuvk","./hilo-thumbnail.png":"bBu4","./hilo-welcome.png":"6uj5","./inventory-tracker-create.png":"7Sv7","./inventory-tracker-list.png":"c52b","./inventory-tracker-search.png":"OmSN","./todo-thumbnail.png":"IXGT","./weather-boy-5day.png":"rM8p","./weather-boy.png":"yJKQ","./weather-thumbnail.png":"DO6E"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="1IgP"},"2L6I":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=n("vOnD").a.main.withConfig({displayName:"pagewrapper__MainStyles",componentId:"dj0xr1-0"})(["width:100%;max-width:1000px;margin:auto;"]);function o(e){var t=e.children;return r.a.createElement(i,null,t)}},"6uj5":function(e,t,n){e.exports=n.p+"static/hilo-welcome-c802d48236bf8eb94e9f6e47c5bd3611.png"},"7Sv7":function(e,t,n){e.exports=n.p+"static/inventory-tracker-create-29e47898203253d3d51ecb6ceb4605b0.png"},"7YJj":function(e,t,n){},DO6E:function(e,t,n){e.exports=n.p+"static/weather-thumbnail-fee8ec7e8f8c48ff6551da7d4a384cc6.png"},IXGT:function(e,t,n){e.exports=n.p+"static/todo-thumbnail-ee03b14189ec67fda6f3a4fa25d31019.png"},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.a.createContext&&r.a.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function s(e){return function(t){return r.a.createElement(u,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.a.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.attr,i=e.size,o=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.a.createElement("title",null,o),e.children)};return void 0!==o?r.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},OmSN:function(e,t,n){e.exports=n.p+"static/inventory-tracker-search-168205b60889e2ee2e5b2c950587f650.png"},QSOs:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("vOnD"),c=n("zx02"),l=n.n(c),s=n("qtta"),u=o.a.nav.withConfig({displayName:"nav__NavStyles",componentId:"sc-1hk9i97-0"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:1000px;margin-top:2rem;a{color:var(--white);padding:0.5rem;display:flex;justify-content:center;align-items:center;flex-shrink:0;border-radius:400px;margin-left:1rem;}svg{width:1.5rem;height:1.5rem;}.active{background-color:var(--orange);}"]),m=o.a.ul.withConfig({displayName:"nav__UlStyles",componentId:"sc-1hk9i97-1"})(["margin:0;"]),d=function(e){return r.a.createElement("li",{style:{display:"inline-block"}},r.a.createElement(i.Link,{to:e.to,activeClassName:"active"},e.children))};function p(){return r.a.createElement(u,null,r.a.createElement(i.Link,{to:"/",style:{margin:"0",padding:"0"}},r.a.createElement("img",{src:l.a,id:"footerLogo",alt:"logo"})),r.a.createElement(m,null,r.a.createElement(d,{to:"/"},r.a.createElement(s.d,{style:{height:"1.5rem",width:"1.5rem"},title:"Home"})),r.a.createElement(d,{to:"/about/"},r.a.createElement(s.c,{style:{height:"1.5rem",width:"1.5rem"},title:"About Me"})),r.a.createElement(d,{to:"/contact/"},r.a.createElement(s.a,{style:{height:"1.5rem",width:"1.5rem"},title:"Contact Me"})),r.a.createElement(d,{to:"/projects/"},r.a.createElement(s.b,{style:{height:"1.5rem",width:"1.5rem"},title:"My Projects"}))))}},"W/9C":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),i=(n("7YJj"),n("zx02")),o=n.n(i);function c(){return r.a.createElement("footer",null,r.a.createElement("img",{src:o.a,id:"footerLogo",alt:"logo"}),r.a.createElement("p",null,"© 2020 Brady Vossler | Made with"," ",r.a.createElement("span",{role:"img","aria-label":"heart emoji"},"❤️")," ","using"," ",r.a.createElement("a",{href:"http://www.gatsbyjs.org",className:"link"},"Gatsby")))}},WORS:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a);function i(e){return r.a.createElement("h1",{style:{color:"#e75748",fontWeight:"900",fontSize:"3rem",textTransform:"uppercase",marginBottom:"2rem"}},e.name)}},Yhqy:function(e,t,n){e.exports=n.p+"static/favicon-efd6e4b848114b89f4cb04382956baf5.png"},bBu4:function(e,t,n){e.exports=n.p+"static/hilo-thumbnail-116ea60c0cbf58465b8ef775d9d3eec6.png"},c52b:function(e,t,n){e.exports=n.p+"static/inventory-tracker-list-27fd6ae93cbbf1e8d3dd9d4963bb71e7.png"},iuvk:function(e,t,n){e.exports=n.p+"static/hilo-example-6b4e1f0165bf303cce557f15879dcf19.png"},rM8p:function(e,t,n){e.exports=n.p+"static/weather-boy-5day-aa6a86d7a109b2654c35e5a42dc69ec5.png"},yJKQ:function(e,t,n){e.exports=n.p+"static/weather-boy-9fc6975179757a11c3d827738651390a.png"},zx02:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy43NjE5IDBIMTkuNDc2MkMyMy44OTE1IDAgMjYuNzA4IDMuNTg0NjkgMjUuNzYxOSA4QzI1LjE5NTIgMTAuNjQ0MyAyMy40MDY3IDEyLjk5MDcgMjEuMTE0NCAxNC40NDc3QzI0LjA3ODEgMTUuODQ0NiAyNS42NzIxIDE5LjA4NTcgMjQuODYzOSAyMi44NTcxQzIzLjc4MjYgMjcuOTAzMiAxOC44MDggMzIgMTMuNzYxOSAzMkg2LjkwNDc1TDEzLjc2MTkgMFpNMTEuNDc2MiAwTDQuNjE5MDQgMzJIMC4wNDc2MDc0TDYuOTA0NzUgMEgxMS40NzYyWiIgZmlsbD0iI0U3NTc0OCIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-projects-js-1584622a346c5cfa0e56.js.map