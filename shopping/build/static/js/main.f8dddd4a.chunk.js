(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),c=t.n(r),s=(t(10),t(1)),i=t.n(s),u=t(4),p=function(){var e=Object(a.useState)({}),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object.values(t);return Object(a.useEffect)((function(){!function(){var e,n;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("./data/products.json"));case 2:return e=t.sent,t.next=5,i.a.awrap(e.json());case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}))}()}),[]),o.a.createElement("ul",null,c.map((function(e){return o.a.createElement("li",{key:e.sku},e.title)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,n,t){e.exports=t(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.f8dddd4a.chunk.js.map