"use strict";(self.webpackChunkmovie_watcher=self.webpackChunkmovie_watcher||[]).push([[650],{3006:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(5861),a=t(9439),c=t(4687),u=t.n(c),s=t(2791),i=t(7689),o=t(1100),p=t.p+"static/media/default-person-image.0662cc0c4da9c3c81f44.jpg",f="CastItem_item__CwDkT",l="CastItem_textWrapper__-mE0s",h="CastItem_text__jEM4w",m="CastItem_image__xzLhD",d=t(184),v=function(e){var n=e.element;return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("img",{className:m,src:null===n.profile_path?p:"https://image.tmdb.org/t/p/w500"+n.profile_path,alt:n.name,width:"170",height:"255"}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)("p",{className:h,children:n.original_name})})]})},_=t(1605),x=t(9908),g="Cast_title__0cH9s",j="Cast_gallery__LrDoG",w=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),l=f[0],h=f[1],m=(0,s.useState)(""),w=(0,a.Z)(m,2),I=w[0],Z=w[1],k=t.cast,N=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,o.IQ)(N);case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]),(0,d.jsxs)(d.Fragment,{children:[I&&(0,d.jsx)("h1",{children:I}),l?(0,d.jsx)(_.Z,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:g,children:"Cast"}),(null===k||void 0===k?void 0:k.length)>0?(0,d.jsx)("ul",{className:j,children:null===k||void 0===k?void 0:k.map((function(e,n){return(0,d.jsx)(v,{element:e},n)}))}):(0,d.jsx)(x.Z,{})]})]})}},9908:function(e,n,t){t.d(n,{Z:function(){return c}});var r="NoInformation_caption__u2BlA",a=t(184),c=function(){return(0,a.jsx)("p",{className:r,children:"Information hasn't been found for this movie."})}},1100:function(e,n,t){t.d(n,{IQ:function(){return p},TP:function(){return o},IR:function(){return l},Jh:function(){return f},Df:function(){return i}});var r=t(5861),a=t(4687),c=t.n(a),u=t(5294).Z.create({baseURL:"https://api.themoviedb.org",headers:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzlkNDBlZmU0MDY0OTg1NDEzNGNmYjBjN2I3NDlhZCIsInN1YiI6IjY1OWVmNjk4ZmM1ZjA2MDBlZWMwNjhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIr7-CVGT2jT9DwLttfCYQotn2obDUZrLpp4n756NJ8"}),s="6c9d40efe40649854134cfb0c7b749ad",i=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/trending/movie/day?page=".concat(n,"&language=en-US&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/movie/".concat(n,"?language=en-US&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/movie/".concat(n,"/credits?language=en-US&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n,"&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=650.887c7444.chunk.js.map