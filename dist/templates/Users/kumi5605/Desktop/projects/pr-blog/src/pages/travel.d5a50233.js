(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{153:function(e,a,t){"use strict";a.a=function(e){var a=[];return e.forEach(function(e){a.includes(e)||a.unshift(e)}),a}},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t(15),s=t(155),o=t(153),i=t(157),u=t(156);a.default=Object(l.withRouteData)(function(e){var a=e.posts;return c.a.createElement("div",null,c.a.createElement(u.a,null),c.a.createElement("h1",{className:"post-header"},"Travel"),c.a.createElement("div",{className:"blog-container"},Object(o.a)(a).map(function(e){return c.a.createElement(r.Link,{key:e.id,to:"/post/".concat(e.id),className:"card",onClick:s.goToTop,style:{backgroundImage:'url("https://media.graphcms.com/'.concat(e.image[0].handle,'")')}},c.a.createElement("div",{className:"overlay"}),c.a.createElement("h1",{className:"post-title"},e.title),c.a.createElement("h2",{className:"sub-header"},"View Post"))})),c.a.createElement(i.a,null))})}}]);