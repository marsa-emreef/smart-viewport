(this["webpackJsonpsmart-viewport"]=this["webpackJsonpsmart-viewport"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(6),c=n.n(r),a=(n(14),n(7)),s=n(3),u=n(8),f=n(4),l=n.n(f),h={screen:{width:0,height:0}},d=function(e,t){switch(t.type){case"screen-size":return Object(u.a)({},e,{screen:{width:t.width,height:t.height}});default:return e}};function v(e){var t=e.isLandscapeMode,n=e.boxPerRow,r=e.video,c={},a=Object(i.useRef)();return c[t?"width":"height"]="".concat((100/n).toFixed(0),"%"),Object(i.useEffect)((function(){a.current.appendChild(r)}),[r]),o.a.createElement("div",{ref:a,className:l.a.viewport,style:c})}function p(){document.querySelectorAll(".".concat(l.a.viewport)).forEach((function(e){!function(e,t){var n=t.offsetWidth,i=t.offsetHeight,o=e.offsetWidth,r=e.offsetHeight;if(0!==o||0!==r){var c=n/o,a=i/r,s=Math.max(c,a),u=o*s,f=r*s,l=(i-f)/2,h=(n-u)/2;e.setAttribute("style","\n        width:".concat(u,"px;\n        height:").concat(f,"px;\n        top:").concat(l,"px;\n        left:").concat(h,"px;\n        position:absolute;\n        transition:all 300ms ease-in-out;\n    "))}}(e.firstChild,e)}))}function w(e){var t=e.videos,n=Object(i.useReducer)(d,h),r=Object(s.a)(n,2),c=r[0],a=r[1],u=Object(i.useRef)();Object(i.useEffect)((function(){function e(e){var t=u.current,n=t.offsetWidth,i=t.offsetHeight;a({type:"screen-size",width:n,height:i})}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var f=c.screen.width>c.screen.height,l={border:"1px solid red",height:"100%",boxSizing:"border-box",position:"relative",display:"flex",flexDirection:f?"row":"column",flexWrap:"wrap"},w=c.screen.width/c.screen.height;Object(i.useEffect)((function(){p()}),[w]);var m=t.length;Object(i.useEffect)((function(){p(),p()}),[m]);var b=function(e){var t={1:1,2:2,3:3,4:2,5:3,6:3,7:4,8:4,9:3,10:5,11:4,12:4,13:5,14:5,15:5,16:4,17:5,18:5},n=e.toString();return n in t?t[n]:5}(m);return o.a.createElement("div",{ref:u,style:l},t.map((function(e,t){return o.a.createElement(v,{key:t,video:e,isLandscapeMode:f,boxPerRow:b})})))}function m(){var e=document.createElement("div");return e.innerHTML='<div style="width: 100%;height:100%;display: flex;align-items: center;justify-content: center">\n                <img src="pics.jpg" />\n            </div>',e}function b(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){for(var e=[],t=0;t<5;t++)e.push(m());r(e)}),[]),o.a.createElement("div",{style:{width:"100%",height:"100%",position:"relative"}},o.a.createElement(w,{videos:n}),o.a.createElement("div",{style:{position:"absolute",bottom:10,right:10}},o.a.createElement("button",{onClick:function(){r((function(e){return[].concat(Object(a.a)(e),[m()])}))},style:{fontSize:"2rem"}},"Add Viewport"),o.a.createElement("button",{onClick:function(){r((function(e){return e.filter((function(t,n){return n!==e.length-1}))}))},style:{fontSize:"2rem"}},"Remove Viewport")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={viewport:"MobileScreen_viewport__5NiKG",content:"MobileScreen_content__2sfIe"}},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.736b7805.chunk.js.map