(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),i=(a(26),a(5)),l=a.n(i),s=a(8),u=a(6),d=a(20),m=a.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),v="52e5552adf2eafd0c372bfdfcbefd4e6",f={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetFlixOriginals:"discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99")};a(45);var p=function(){var e,t,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(f.fetchNetFlixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f.fetchNetFlixOriginals]),r.a.createElement("div",null,r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.poster_path,'")'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner__Content"},r.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),r.a.createElement("div",{className:"banner__buttons"},r.a.createElement("button",{className:"banner_button"},"Play"),r.a.createElement("button",{className:"banner_button"},"My List")),r.a.createElement("p",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner__fade"})))};a(46);var g=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),d=i[0],v=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(a);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row__posters"},d.map((function(e){return r.a.createElement("img",{className:"row__poster ".concat(c&&"rowPosterLarge"),key:e.id,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))))};a(47),a(48);var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),console.log(a),r.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},r.a.createElement("img",{src:"".concat("","/logoss.png"),className:"nav__logo__left",alt:""}),r.a.createElement("img",{src:"".concat("","/logosj.png"),className:"nav__logo__right",alt:""}))},_=a(56),b=a(54),E=a(55),w=a(53);a(49),a(50);E.a.use([w.a]);var y=function(e){var t=e.fetchUrl,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(t);case 2:return a=e.sent,i(a.data.results),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),console.log(o),r.a.createElement(_.a,{spaceBetween:50,slidesPerView:1,autoplay:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)}},o.map((function(e){return console.log(e),r.a.createElement(b.a,{key:e.id,className:"large__slide",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===e||void 0===e?void 0:e.poster_path,'")'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"slide__content"},r.a.createElement("h1",{className:"slide__title"},(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)),r.a.createElement("p",{className:"slide__info"},"RELEASE DATE: ".concat(e.release_date," - VOTES: ").concat(e.vote_count," ")),r.a.createElement("p",{className:"slide__description"},(t=null===e||void 0===e?void 0:e.overview,a=100,(null===t||void 0===t?void 0:t.length)>a?t.substr(0,a-1)+"...":t))));var t,a})))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(p,null),r.a.createElement(y,{fetchUrl:f.fetchTopRated}),r.a.createElement(g,{title:"NETFLIX ORIGINALS",fetchUrl:f.fetchNetFlixOriginals,isLargeRow:!0}),r.a.createElement(g,{title:"Top Rated",fetchUrl:f.fetchTopRated}),r.a.createElement(g,{title:"Trending Now",fetchUrl:f.fetchTrending,isLargeRow:!0}),r.a.createElement(g,{title:"Action Movies",fetchUrl:f.fetchActionMovies}),r.a.createElement(g,{title:"Comedy Movies",fetchUrl:f.fetchComedyMovies}),r.a.createElement(g,{title:"Horror Movies",fetchUrl:f.fetchHorrorMovies}),r.a.createElement(g,{title:"Romantic Movies",fetchUrl:f.fetchRomanceMovies}),r.a.createElement(g,{title:"Documentries",fetchUrl:f.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd79d551.chunk.js.map