(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,a,t){"use strict";a.a=function(e){var a=[];return e.forEach(function(e){a.includes(e)||a.unshift(e)}),a}},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(157),s=t(156),o=t(16),r=t(15),i=t(155),u=t(153);a.default=Object(o.withRouteData)(function(e){var a=e.posts;return console.log(a)||c.a.createElement("div",null,c.a.createElement(s.a,null),c.a.createElement("h1",{className:"post-header"},"All Posts"),c.a.createElement("div",{className:"blog-container"},Object(u.a)(a).map(function(e){return c.a.createElement(r.Link,{key:e.id,to:"/post/".concat(e.id),className:"card",onClick:i.goToTop,style:{backgroundImage:'url("https://media.graphcms.com/'.concat(e.image[0].handle,'")')}},c.a.createElement("div",{className:"overlay"}),c.a.createElement("h1",{className:"post-title"},e.title),c.a.createElement("h2",{className:"sub-header"},"View Post"))})),c.a.createElement(l.a,null))})}}]);