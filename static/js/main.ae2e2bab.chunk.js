(window.webpackJsonpmapcovery=window.webpackJsonpmapcovery||[]).push([[0],{11:function(e,t,n){e.exports={recover:"styles_recover__nwTZu",recoverPanel:"styles_recoverPanel__3Ziq5",mapWrapper:"styles_mapWrapper__3s8Oc","mapboxgl-popup":"styles_mapboxgl-popup__2rIw_"}},12:function(e,t,n){e.exports={page:"styles_page__24UXt",left:"styles_left__GM5oi",right:"styles_right__3x0WN"}},24:function(e,t,n){e.exports=n.p+"static/media/logo.929c79fd.png"},25:function(e,t,n){e.exports={setup:"styles_setup__vJEoR"}},26:function(e,t,n){e.exports={recover:"styles_recover__ZSACX"}},30:function(e,t,n){e.exports=n(44)},35:function(e,t,n){},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(20),s=n.n(c),i=(n(35),n(36),n(14)),l=n(5),u=n(29),p=n(8),m=n(9),d=n.n(m),f=n(15),v=n(10),h=n.n(v),g=n(21),y={width:100,height:100,data:new Uint8Array(4e4),onAdd:function(){var e=document.createElement("canvas");e.width=this.width,e.height=this.height,this.context=e.getContext("2d")},render:function(){var e=performance.now()%1e3/1e3,t=this.context;return t.beginPath(),t.arc(this.width/2,this.height/2,15,0,2*Math.PI),t.fillStyle="rgba(255, 100, 100, 1)",t.strokeStyle="white",t.lineWidth=2+4*(1-e),t.fill(),this.data=t.getImageData(0,0,this.width,this.height).data,a.triggerRepaint(),!0}},w=[[12,50],[14,54]],b=function(e){var t=g.a.decode(e);return[t.lon,t.lat,0]},E=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n,a,r,o,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://map-api-direct.foam.space/poi/filtered?swLng="+w[0][0]+"&swLat="+w[0][1]+"&neLng="+w[1][0]+"&neLat="+w[1][1]+"&status=listing&sort=most_value&limit=500&offset=0",n={Accept:"application/json","Content-Type":"application/json"},e.prev=2,e.next=5,fetch(t,{method:"GET",headers:n});case 5:if(!(a=e.sent)||200!==a.status){e.next=14;break}return e.next=9,a.json();case 9:return r=e.sent,console.log(r),o=r.map(function(e){return{type:"Feature",geometry:{type:"Point",coordinates:b(e.geohash)},properties:{description:e.name},data:{geohash:e.geohash,name:e.name}}}),c={id:"points",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:o}},layout:{"icon-image":"pulsing-dot"}},e.abrupt("return",c);case 14:return e.abrupt("return",[]);case 17:return e.prev=17,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",[]);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(d.a.mark(function e(t){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=11;break}return e.next=3,E();case 3:return n=e.sent,h.a.accessToken="pk.eyJ1IjoiZ2VybWFuOTIiLCJhIjoiY2p6cHB4NXd2MDI2djNjcnF4Y2E3NnpzMCJ9.ufsI1VW_rGWnHvTJ9VKvVA",(a=new h.a.Map({center:[13.363,52.514],container:t,style:"mapbox://styles/mapbox/dark-v10",zoom:13,maxZoom:16})).on("load",function(){a.addImage("pulsing-dot",y,{pixelRatio:2}),console.log(n),a.addLayer(n)}),a.on("click","points",function(e){e.features[0].geometry.coordinates.slice();var t=e.features[0].properties.description;window.point=t}),a.on("mouseenter","points",function(e){a.getCanvas().style.cursor="pointer";for(var t=e.features[0].geometry.coordinates.slice(),n=e.features[0].properties.description;Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;r=(new h.a.Popup).setLngLat(t).setHTML(n).addTo(a)}),a.on("mouseleave","points",function(){a.getCanvas().style.cursor="",r&&r.remove()}),e.abrupt("return",a);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=n(11),j=n.n(x),k=function(e){var t,n=Object(r.useState)([]),a=Object(p.a)(n,2),c=a[0],s=a[1],i=o.a.createRef(),l=e.history.location.state.safeAddress;Object(r.useEffect)(function(){m();_(i.current);return function(){return clearInterval(t)}},[]);var m=function(){t=setInterval(function(){window.point&&""!=window.point&&(s(function(e){return[].concat(Object(u.a)(e),[window.point])}),window.point="")},500)};return o.a.createElement("div",{className:j.a.recover},o.a.createElement("div",{className:j.a.recoverPanel},o.a.createElement("h1",null,"Confirm recovery locations"),o.a.createElement("p",null,"Identify your five locations to recover your Gnosis Safe below."),o.a.createElement("p",null,l),o.a.createElement("div",null,c.map(function(e){return o.a.createElement("p",{key:e},e)})),o.a.createElement("div",null,c.length>=5&&o.a.createElement("button",null,"Recover"))),o.a.createElement("div",{className:j.a.mapWrapper},o.a.createElement("div",{ref:i})))},I=n(12),L=n.n(I),N=n(24),O=n.n(N),C=n(25),S=n.n(C),W=function(){return o.a.createElement("div",{className:S.a.setup},o.a.createElement("h1",null,o.a.createElement("img",{src:O.a,alt:"Logo",width:"80px"}),"Mapcovery"))},M="/",T="/recover",A=n(26),J=n.n(A),P=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(p.a)(c,2),i=s[0],u=s[1];return i?o.a.createElement(l.a,{to:{pathname:T,state:{safeAddress:n}}}):o.a.createElement("div",{className:J.a.recover},o.a.createElement("h3",null,"Recover"),o.a.createElement("p",null,"Restore your Gnosis Safe by entering your Gnosis Safe address."),o.a.createElement("form",{onSubmit:function(e){null!==n&&""!==n?u(!0):e.preventDefault()}},o.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;a(t)}})))},R=function(){return o.a.createElement("div",{className:L.a.page},o.a.createElement("div",{className:L.a.left},o.a.createElement(W,null)),o.a.createElement("div",{className:L.a.right},o.a.createElement(P,null)))};var G=function(){return o.a.createElement(i.a,{basename:"/eth-berlin-location-recovery"},o.a.createElement(l.b,{exact:!0,path:M,component:R}),o.a.createElement(l.b,{path:T,component:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(43);s.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.ae2e2bab.chunk.js.map