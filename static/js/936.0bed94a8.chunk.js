"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{419:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(689),a=t(87),c={},u=t(184),i=function(e){var n=e.movie,t=(0,r.TH)();return(0,u.jsx)("li",{className:c.galleryItem,children:(0,u.jsx)(a.rU,{state:{from:t},to:"/movies/".concat(n.id),children:(0,u.jsx)("p",{className:c.text,children:n.title})})},n.id)},s={},o=function(e){var n=e.movies;return(0,u.jsx)("ul",{className:s.list,children:n&&n.map((function(e,n){return(0,u.jsx)(i,{movie:e},n)}))})}},936:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(100),s=t(791),o=t(419),f=t(784),p={title:"Home_title__L087v"},l=t(184),v=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),d=h[0],m=h[1],x=(0,s.useState)(""),Z=(0,a.Z)(x,2),g=Z[0],j=Z[1];(0,s.useEffect)((function(){w()}),[]);var w=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,i.Df)();case 4:n=e.sent,c(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(e.t0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)("section",{className:p.wrapper,children:[g&&(0,l.jsx)("h1",{children:g}),d?(0,l.jsx)(f.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:p.title,children:"Trending movies today:"}),(0,l.jsx)(o.Z,{movies:t})]})]})}},100:function(e,n,t){t.d(n,{IQ:function(){return f},TP:function(){return o},IR:function(){return l},Jh:function(){return p},Df:function(){return s}});var r=t(861),a=t(757),c=t.n(a),u=t(294).Z.create({baseURL:"https://api.themoviedb.org",headers:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzlkNDBlZmU0MDY0OTg1NDEzNGNmYjBjN2I3NDlhZCIsInN1YiI6IjY1OWVmNjk4ZmM1ZjA2MDBlZWMwNjhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIr7-CVGT2jT9DwLttfCYQotn2obDUZrLpp4n756NJ8"}),i="6c9d40efe40649854134cfb0c7b749ad",s=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/trending/movie/day?language=en-US&api_key=".concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/movie/".concat(n,"?language=en-US&api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/movie/".concat(n,"/credits?language=en-US&api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n,"&api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.0bed94a8.chunk.js.map