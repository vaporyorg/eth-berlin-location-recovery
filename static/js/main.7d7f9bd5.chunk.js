(window.webpackJsonpmapcovery=window.webpackJsonpmapcovery||[]).push([[0],{110:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(206),s=a.n(n),r=function(e,t,a){if(t&&e){var n=document.createElement("img");n.setAttribute("src",function(e,t){return"data:image/png;charset=utf-8;base64, "+s.a.imageSync(e,{type:"png",size:t}).toString("base64")}(t,a));var r=e.firstElementChild;r&&r.remove(),e.appendChild(n)}}},111:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return d});var n=a(5),s=a.n(n),r=a(22),o=a(57),i=a.n(o),u=a(24),l=a.n(u),p=a(112),c=a(113),y=a(41),m=function(){var e=Object(r.a)(s.a.mark(function e(t,a,n,r,o){var u,m,d,f,b,v,h,g,w,A;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=i()(p),m=new l.a.providers.HttpProvider("https://rinkeby.infura.io/v3/dfa033b2501f41459eb513a7b16e26b7"),u.setProvider(m),d=i()(c),f=Object(y.b)().currentProvider,d.setProvider(f),e.prev=6,e.next=9,u.at(t);case 9:return b=e.sent,e.next=12,b.getModules.call();case 12:return v=e.sent,h=v[0],console.log("moduleAddress",h),e.next=17,d.at(h);case 17:return g=e.sent,e.next=20,Object(y.b)().eth.getAccounts();case 20:return w=e.sent[0],e.next=23,g.triggerAndExecuteRecoveryWithoutDelay(n,r,o,a,{from:w});case 23:A=e.sent,console.log("result:",A),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.error(e.t0);case 30:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t,a,n,s,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(s.a.mark(function e(t){var a,n,r,o,u,m,d,f,b;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i()(p),n=new l.a.providers.HttpProvider("https://rinkeby.infura.io/v3/dfa033b2501f41459eb513a7b16e26b7"),a.setProvider(n),r=i()(c),o=Object(y.b)().currentProvider,r.setProvider(o),e.prev=6,e.next=9,a.at(t);case 9:return u=e.sent,e.next=12,u.getModules.call();case 12:return m=e.sent,d=m[0],e.next=16,r.at(d);case 16:return f=e.sent,e.next=19,f.nonce();case 19:return b=e.sent,console.log("nonce",b,d),e.abrupt("return",b.toString());case 24:e.prev=24,e.t0=e.catch(6),console.error(e.t0);case 27:case"end":return e.stop()}},e,null,[[6,24]])}));return function(t){return e.apply(this,arguments)}}()},112:function(e){e.exports=JSON.parse('{"contractName":"GnosisSafe","abi":[{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"_threshold","type":"uint256"}],"name":"addOwnerWithThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"operation","type":"uint8"}],"name":"execTransactionFromModule","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"module","type":"address"}],"name":"enableModule","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_threshold","type":"uint256"}],"name":"changeThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_masterCopy","type":"address"}],"name":"changeMasterCopy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SENTINEL_MODULES","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SENTINEL_OWNERS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"NAME","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getModules","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SAFE_MSG_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SAFE_TX_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prevModule","type":"address"},{"name":"module","type":"address"}],"name":"disableModule","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"prevOwner","type":"address"},{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"name":"swapOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"domainSeparator","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"prevOwner","type":"address"},{"name":"owner","type":"address"},{"name":"_threshold","type":"uint256"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"txHash","type":"bytes32"}],"name":"ExecutionFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"}],"name":"AddedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"}],"name":"RemovedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"threshold","type":"uint256"}],"name":"ChangedThreshold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"module","type":"address"}],"name":"EnabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"module","type":"address"}],"name":"DisabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"}],"name":"ContractCreation","type":"event"},{"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_threshold","type":"uint256"},{"name":"to","type":"address"},{"name":"data","type":"bytes"}],"name":"setup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"operation","type":"uint8"},{"name":"safeTxGas","type":"uint256"},{"name":"dataGas","type":"uint256"},{"name":"gasPrice","type":"uint256"},{"name":"gasToken","type":"address"},{"name":"refundReceiver","type":"address"},{"name":"signatures","type":"bytes"}],"name":"execTransaction","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"operation","type":"uint8"}],"name":"requiredTxGas","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashToApprove","type":"bytes32"}],"name":"approveHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"bytes"}],"name":"signMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"bytes"},{"name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"message","type":"bytes"}],"name":"getMessageHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"operation","type":"uint8"},{"name":"safeTxGas","type":"uint256"},{"name":"dataGas","type":"uint256"},{"name":"gasPrice","type":"uint256"},{"name":"gasToken","type":"address"},{"name":"refundReceiver","type":"address"},{"name":"_nonce","type":"uint256"}],"name":"encodeTransactionData","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"operation","type":"uint8"},{"name":"safeTxGas","type":"uint256"},{"name":"dataGas","type":"uint256"},{"name":"gasPrice","type":"uint256"},{"name":"gasToken","type":"address"},{"name":"refundReceiver","type":"address"},{"name":"_nonce","type":"uint256"}],"name":"getTransactionHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]}')},113:function(e){e.exports=JSON.parse('{"contractName":"SimpleRecoveryModule","abi":[{"constant":true,"inputs":[],"name":"recoveryStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"recoveryOwners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_masterCopy","type":"address"}],"name":"changeMasterCopy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"NAME","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recoverer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recoveryDurationS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recoverer","type":"address"},{"name":"_recoveryDurationS","type":"uint256"}],"name":"setup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"_recoveryOwners","type":"address[]"}],"name":"triggerRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"executeRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"_recoveryOwners","type":"address[]"}],"name":"triggerAndExecuteRecoveryWithoutDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"cancelRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}')},17:function(e,t,a){e.exports={qrCodes:"styles_qrCodes__1g01T",qrCode:"styles_qrCode__2h-iV",mnemonic:"styles_mnemonic__3Jq6p",word:"styles_word__2mRld",wrapper:"styles_wrapper__2V59G",header:"styles_header__2EFCW",content:"styles_content__5Bvg1",footer:"styles_footer__3TSza",button:"styles_button__3bnrK"}},19:function(e,t,a){e.exports={recover:"styles_recover__8-agF",recoverPanel:"styles_recoverPanel__2yJlk",mapWrapper:"styles_mapWrapper__3m6VN",location:"styles_location__1qeXD",greenHearth:"styles_greenHearth__30M1-","mapboxgl-popup":"styles_mapboxgl-popup__1DzPo",wrapper:"styles_wrapper__2bKOv",header:"styles_header__3e0cp",content:"styles_content__3Wsx4",footer:"styles_footer__1XDYe",button:"styles_button__1Dqx6"}},204:function(e,t,a){"use strict";(function(e){var n=a(5),s=a.n(n),r=a(22),o=a(23),i=a(0),u=a.n(i),l=a(74),p=a.n(l),c=a(76),y=a.n(c),m=a(205),d=a.n(m),f=a(25),b=a(110),v=a(41),h=a(111),g=a(34),w=a(17),A=a.n(w);t.a=function(t){var a=t.safeAddress,n=t.locations,l=Object(i.useState)(p.a.generateMnemonic()),c=Object(o.a)(l,2),m=c[0],w=(c[1],Object(i.useState)("mnemonic")),E=Object(o.a)(w,2),M=E[0],x=E[1],S=u.a.createRef(),O=u.a.createRef(),N=function(){"mnemonic"===M?x("qrcodes"):"qrcodes"===M&&x("finished")};Object(i.useEffect)(function(){Object(b.a)(S.current,a,3),Object(b.a)(O.current,m,3)},[M]);var _=function(){var t=Object(r.a)(s.a.mark(function t(){var r,i,u,l,p,c,f,b,g;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=Object(v.a)(m),i=Object(o.a)(r,2),u=i[0],l=i[1],p="0x"+n.map(function(t){return e.from(y.a.sha3(t.geohash)).toString("hex")}).sort().join(""),c=y.a.sha3(p),t.next=6,Object(h.a)(a);case 6:return f=t.sent,b=d.a.soliditySHA3(["bytes1","bytes1","address[]","uint256"],[25,0,[u,l],f]),g=y.a.ecsign(b,c),t.next=11,Object(h.b)(a,[u,l],g.r,g.s,g.v);case 11:N(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}},t,null,[[0,14]])}));return function(){return t.apply(this,arguments)}}();return"finished"===M?u.a.createElement(f.a,{to:g.a}):u.a.createElement("div",{className:A.a.wrapper},u.a.createElement("div",{className:A.a.header},u.a.createElement("h2",null,"Recovery process")),u.a.createElement("div",{className:A.a.content},"mnemonic"===M&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"Write down this seed phrase to later recover your funds in the Gnosis Safe app."),u.a.createElement("div",{className:A.a.mnemonic},m&&m.split(" ").map(function(e){return u.a.createElement("div",{className:A.a.word},e)}))),"qrcodes"===M&&u.a.createElement("div",{className:A.a.qrCodes},u.a.createElement("p",null,"Scan the Safe address:"),u.a.createElement("div",{ref:S,className:A.a.qrCode}),u.a.createElement("p",null,"Scan the mnemonic phrase:"),u.a.createElement("div",{ref:O,className:A.a.qrCode}))),u.a.createElement("div",{className:A.a.footer},"mnemonic"===M&&u.a.createElement("button",{onClick:N,className:A.a.button},"I have a copy"),"qrcodes"===M&&u.a.createElement("button",{onClick:_,className:A.a.button},"Recover Wallet")))}}).call(this,a(2).Buffer)},210:function(e,t){e.exports="data:image/png;base64,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"},212:function(e,t,a){e.exports=a.p+"static/media/logo.929c79fd.png"},213:function(e,t,a){e.exports={setup:"styles_setup__15Z1c"}},217:function(e,t,a){e.exports=a(539)},222:function(e,t,a){},223:function(e,t,a){},227:function(e,t){},229:function(e,t){},261:function(e,t){},263:function(e,t){},34:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s});var n="/",s="/recover"},41:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return d});var n,s=a(5),r=a.n(s),o=a(22),i=a(24),u=a.n(i),l=a(74),p=a.n(l),c=a(207),y=a.n(c),m=function(){return n||window.web3&&new u.a(window.web3.currentProvider)||window.ethereum&&new u.a(window.ethereum)},d=function(e){return[f(e,0).getChecksumAddressString(),f(e,1).getChecksumAddressString()]},f=function(e,t){var a=p.a.mnemonicToSeed(e);return y.a.fromMasterSeed(a).derivePath("m/44'/60'/0'/0/"+t).getWallet()};(function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=6;break}return t=window.ethereum,e.next=4,t.enable();case 4:e.next=7;break;case 6:window.web3&&(t=window.web3.currentProvider);case 7:n=new u.a(t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},410:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=410},43:function(e,t,a){e.exports={background:"styles_background__RXMQB",visible:"styles_visible__3oyaS",modal:"styles_modal__2HFrJ",notVisible:"styles_notVisible__2JF6r"}},539:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),o=a(201),i=a.n(o),u=(a(222),a(223),a(71)),l=a(25),p=a(214),c=a(23),y=a(5),m=a.n(y),d=a(22),f=a(75),b=a.n(f),v=a(202),h={width:100,height:100,data:new Uint8Array(4e4),onAdd:function(){var e=document.createElement("canvas");e.width=this.width,e.height=this.height,this.context=e.getContext("2d")},render:function(){var e=performance.now()%1e3/1e3,t=this.context;return t.beginPath(),t.arc(this.width/2,this.height/2,15,0,2*Math.PI),t.fillStyle="rgba(255, 100, 100, 1)",t.strokeStyle="white",t.lineWidth=2+4*(1-e),t.fill(),this.data=t.getImageData(0,0,this.width,this.height).data,n.triggerRepaint(),!0}},g=[[12,50],[14,54]],w=function(e){var t=v.a.decode(e);return[t.lon,t.lat,0]},A=function(){var e=Object(d.a)(m.a.mark(function e(){var t,a,n,s,r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://map-api-direct.foam.space/poi/filtered?swLng="+g[0][0]+"&swLat="+g[0][1]+"&neLng="+g[1][0]+"&neLat="+g[1][1]+"&status=listing&sort=most_value&limit=500&offset=0",a={Accept:"application/json","Content-Type":"application/json"},e.prev=2,e.next=5,fetch(t,{method:"GET",headers:a});case 5:if(!(n=e.sent)||200!==n.status){e.next=14;break}return e.next=9,n.json();case 9:return s=e.sent,console.log(s),r=s.map(function(e){return{type:"Feature",geometry:{type:"Point",coordinates:w(e.geohash)},properties:{description:e.name,geohash:e.geohash},data:{geohash:e.geohash,name:e.name}}}),o={id:"points",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:r}},layout:{"icon-image":"pulsing-dot"}},e.abrupt("return",o);case 14:return e.abrupt("return",[]);case 17:return e.prev=17,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",[]);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(m.a.mark(function e(t){var a,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=11;break}return e.next=3,A();case 3:return a=e.sent,b.a.accessToken="pk.eyJ1IjoiZ2VybWFuOTIiLCJhIjoiY2p6cHB4NXd2MDI2djNjcnF4Y2E3NnpzMCJ9.ufsI1VW_rGWnHvTJ9VKvVA",(n=new b.a.Map({center:[13.363,52.514],container:t,style:"mapbox://styles/mapbox/dark-v10",zoom:12,maxZoom:16})).on("load",function(){n.addImage("pulsing-dot",h,{pixelRatio:2}),console.log(a),n.addLayer(a)}),n.on("click","points",function(e){var t=e.features[0].properties.description,a=e.features[0].properties.geohash;window.point={description:t,geohash:a}}),n.on("mouseenter","points",function(e){n.getCanvas().style.cursor="pointer";for(var t=e.features[0].geometry.coordinates.slice(),a=e.features[0].properties.description;Math.abs(e.lngLat.lng-t[0])>180;)t[0]+=e.lngLat.lng>t[0]?360:-360;s=(new b.a.Popup).setLngLat(t).setHTML(a).addTo(n)}),n.on("mouseleave","points",function(){n.getCanvas().style.cursor="",s&&s.remove()}),e.abrupt("return",n);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),M=a(203),x=a.n(M),S=a(43),O=a.n(S),N=x.a.bind(O.a),_=function(e){var t=e.visible,a=e.children;return r.a.createElement("div",{className:N(O.a.background,t?O.a.visible:O.a.notVisible)},r.a.createElement("div",{className:O.a.modal},a))},V=a(204),R=a(210),j=a.n(R),P=a(72),k=a(73),q=a(215),F=a(211),T=a(216),G=(s.Component,a(19)),C=a.n(G),W=function(e){var t,a=Object(s.useState)([]),n=Object(c.a)(a,2),o=n[0],i=n[1],u=Object(s.useState)(!1),l=Object(c.a)(u,2),y=l[0],m=l[1],d=r.a.createRef(),f=e.history.location.state.safeAddress;Object(s.useEffect)(function(){return b(),E(d.current),function(){return clearInterval(t)}},[]);var b=function(){t=setInterval(function(){window.point&&(i(function(e){return[].concat(Object(p.a)(e),[window.point])}),delete window.point)},500)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.recover},r.a.createElement("div",{className:C.a.recoverPanel},r.a.createElement("h2",null,"Confirm recovery locations"),r.a.createElement("p",null,"Identify your five locations to recover your Gnosis Safe below."),r.a.createElement("div",{className:C.a.wrapper},r.a.createElement("div",{className:C.a.header},r.a.createElement("div",null,f)),r.a.createElement("div",{className:C.a.content},o.map(function(e){return r.a.createElement("div",{className:C.a.location,key:e.geohash},r.a.createElement("img",{src:j.a,className:C.a.greenHearth}),e.description)})),r.a.createElement("div",{className:C.a.footer},r.a.createElement("button",{disabled:o.length<0,onClick:function(){m(!y)},className:C.a.button},"Recover Wallet")))),r.a.createElement("div",{className:C.a.mapWrapper},r.a.createElement("div",{ref:d}))),r.a.createElement(_,{visible:y},r.a.createElement(V.a,{locations:o,safeAddress:f})))},D=a(77),H=a.n(D),I=a(212),L=a.n(I),B=a(213),Q=a.n(B),X=function(){return r.a.createElement("div",{className:Q.a.setup},r.a.createElement("h1",null,r.a.createElement("img",{src:L.a,alt:"Logo",width:"80px"}),"Mapcovery"))},K=a(34),z=a(78),Z=a.n(z),J=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],o=Object(s.useState)(!1),i=Object(c.a)(o,2),u=i[0],p=i[1];return u?r.a.createElement(l.a,{to:{pathname:K.b,state:{safeAddress:a}}}):r.a.createElement("div",{className:Z.a.recover},r.a.createElement("h1",null,"Recover"),r.a.createElement("div",{className:Z.a.title},"Restore your Gnosis Safe by entering your Gnosis Safe address."),r.a.createElement("form",{onSubmit:function(e){null!==a&&""!==a?p(!0):e.preventDefault()}},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;n(t)},className:Z.a.textInput,placeholder:"0x..."})))},U=function(){return r.a.createElement("div",{className:H.a.page},r.a.createElement("div",{className:H.a.left},r.a.createElement(X,null)),r.a.createElement("div",{className:H.a.right},r.a.createElement(J,null)))};var Y=function(){return r.a.createElement(u.a,{basename:"/eth-berlin-location-recovery"},r.a.createElement(l.b,{exact:!0,path:K.a,component:U}),r.a.createElement(l.b,{path:K.b,component:W}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(538);i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){e.exports={page:"styles_page__1lAXq",left:"styles_left__um2bp",right:"styles_right__1brHr"}},78:function(e,t,a){e.exports={recover:"styles_recover__1dfJd",title:"styles_title__3CHaP",textInput:"styles_textInput__YgzBf"}}},[[217,1,2]]]);
//# sourceMappingURL=main.7d7f9bd5.chunk.js.map