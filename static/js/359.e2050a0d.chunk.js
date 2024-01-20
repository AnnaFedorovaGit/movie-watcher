"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[359],{419:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(689),a=r(87),u={},c=r(184),i=function(e){var t=e.movie,r=(0,n.TH)();return(0,c.jsx)("li",{className:u.galleryItem,children:(0,c.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(t.id),children:(0,c.jsx)("p",{className:u.text,children:t.title})})},t.id)},s={},o=function(e){var t=e.movies;return(0,c.jsx)("ul",{className:s.list,children:t&&t.map((function(e,t){return(0,c.jsx)(i,{movie:e},t)}))})}},359:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n,a=r(861),u=r(439),c=r(757),i=r.n(c),s=r(791),o=r(87),l=r(100),f=r(419),p=r(784),v=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function h(e,t){var r=e.title,a=e.titleId,u=d(e,v);return s.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",ref:t,"aria-labelledby":a},u),r?s.createElement("title",{id:a},r):null,n||(n=s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",clipRule:"evenodd"})))}var x=s.forwardRef(h),y=(r.p,{form:"Movies_form__4ow+Z",formInput:"Movies_formInput__zmXM8",button:"Movies_button__GcIka"}),b=r(184),g=function(){var e,t=(0,o.lr)(),r=(0,u.Z)(t,2),n=r[0],c=r[1],v=(0,s.useState)({}),m=(0,u.Z)(v,2),d=m[0],h=m[1],g=(0,s.useState)(!1),j=(0,u.Z)(g,2),w=j[0],Z=j[1],I=(0,s.useState)(""),N=(0,u.Z)(I,2),_=N[0],k=N[1],O=n.get("query");(0,s.useEffect)((function(){if(O){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,(0,l.IR)(O);case 4:t=e.sent,h(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[O]);return(0,b.jsxs)("section",{className:y.wrapper,children:[(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.query.value;t&&(c({query:t}),e.target[0].value="")},className:y.form,children:[(0,b.jsxs)("div",{className:y.wrapper,children:[(0,b.jsx)("label",{className:y.formLabel,children:"Find movie"}),(0,b.jsx)("input",{type:"text",name:"query",className:y.formInput})]}),(0,b.jsx)("button",{type:"submit",className:y.button,children:(0,b.jsx)(x,{className:y.iconSearch})})]}),_&&(0,b.jsx)("h1",{children:_}),w?(0,b.jsx)(p.Z,{}):(0,b.jsx)(b.Fragment,{children:(null===(e=d.results)||void 0===e?void 0:e.length)>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{className:y.title,children:"Movies by your request:"}),(0,b.jsx)(f.Z,{movies:d.results})]})})]})}},100:function(e,t,r){r.d(t,{IQ:function(){return l},TP:function(){return o},IR:function(){return p},Jh:function(){return f},Df:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(294).Z.create({baseURL:"https://api.themoviedb.org",headers:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzlkNDBlZmU0MDY0OTg1NDEzNGNmYjBjN2I3NDlhZCIsInN1YiI6IjY1OWVmNjk4ZmM1ZjA2MDBlZWMwNjhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIr7-CVGT2jT9DwLttfCYQotn2obDUZrLpp4n756NJ8"}),i="6c9d40efe40649854134cfb0c7b749ad",s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("3/trending/movie/day?language=en-US&api_key=".concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("3/movie/".concat(t,"?language=en-US&api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("3/movie/".concat(t,"/credits?language=en-US&api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("3/movie/".concat(t,"/reviews?language=en-US&page=1&api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(t,"&api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=359.e2050a0d.chunk.js.map