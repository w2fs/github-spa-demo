require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({8:[function(require,module,exports) {
"use strict";function e(e,n){for(var r,o=[],t=[],l=arguments.length;l-- >2;)o.push(arguments[l]);for(;o.length;)if(Array.isArray(r=o.pop()))for(l=r.length;l--;)o.push(r[l]);else null!=r&&!0!==r&&!1!==r&&t.push(r);return"function"==typeof e?e(n||{},t):{name:e,props:n||{},children:t}}function n(e,n,r,o){var t,l=[],i=o&&o.children[0]||null,u=i&&function e(n,r){return{name:n.nodeName.toLowerCase(),props:{},children:r.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,r)})}}(i,[].map),f=s(e),c=s(n);return a(function e(n,r,o){for(var t in o)"function"==typeof o[t]?function(e,t){o[e]=function(e){return"function"==typeof(e=t(e))&&(e=e(d(n,f),o)),e&&e!==(r=d(n,f))&&!e.then&&a(f=h(n,s(r,e),f)),e}}(t,o[t]):e(n.concat(t),r[t]=r[t]||{},o[t]=s(o[t]))}([],f,c)),c;function p(){t=!t;var e=r(f,c);for(o&&!t&&(i=function e(n,r,o,t,i,u){if(t===o);else if(null==o)r=n.insertBefore(g(t,i),r);else if(t.name&&t.name===o.name){!function(e,n,r,o){for(var t in s(n,r))r[t]!==("value"===t||"checked"===t?e[t]:n[t])&&m(e,t,r[t],o,n[t]);r.onupdate&&l.push(function(){r.onupdate(e,n)})}(r,o.props,t.props,i=i||"svg"===t.name);for(var f=[],c={},p={},a=0;a<o.children.length;a++){f[a]=r.childNodes[a];var h=o.children[a],d=v(h);null!=d&&(c[d]=[f[a],h])}for(var a=0,N=0;N<t.children.length;){var h=o.children[a],w=t.children[N],d=v(h),b=v(w);if(p[d])a++;else if(null==b)null==d&&(e(r,f[a],h,w,i),N++),a++;else{var k=c[b]||[];d===b?(e(r,k[0],k[1],w,i),a++):k[0]?e(r,r.insertBefore(k[0],f[a]),k[1],w,i):e(r,f[a],null,w,i),N++,p[b]=w}}for(;a<o.children.length;){var h=o.children[a];null==v(h)&&y(r,f[a],h),a++}for(var a in c)p[c[a][1].props.key]||y(r,c[a][0],c[a][1])}else t.name===o.name?r.nodeValue=t:(r=n.insertBefore(g(t,i),u=r),y(n,u,o));return r}(o,i,u,u=e));e=l.pop();)e()}function a(){t||(t=!t,setTimeout(p))}function s(e,n){var r={};for(var o in e)r[o]=e[o];for(var o in n)r[o]=n[o];return r}function h(e,n,r){var o={};return e.length?(o[e[0]]=e.length>1?h(e.slice(1),n,r[e[0]]):n,s(r,o)):n}function d(e,n){for(var r=0;r<e.length;r++)n=n[e[r]];return n}function v(e){return e&&e.props?e.props.key:null}function m(e,n,r,o,t){if("key"===n);else if("style"===n)for(var l in s(t,r))e[n][l]=null==r||null==r[l]?"":r[l];else"function"==typeof r||n in e&&!o?e[n]=null==r?"":r:null!=r&&!1!==r&&e.setAttribute(n,r),null!=r&&!1!==r||e.removeAttribute(n)}function g(e,n){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name):document.createElement(e.name);if(e.props){e.props.oncreate&&l.push(function(){e.props.oncreate(r)});for(var o=0;o<e.children.length;o++)r.appendChild(g(e.children[o],n));for(var t in e.props)m(r,t,e.props[t],n)}return r}function y(e,n,r,o){function t(){e.removeChild(function e(n,r,o){if(o=r.props){for(var t=0;t<r.children.length;t++)e(n.childNodes[t],r.children[t]);o.ondestroy&&o.ondestroy(n)}return n}(n,r))}r.props&&(o=r.props.onremove)?o(n,t):t()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Link=t;var e=require("hyperapp");function t(t,r){var n=t.to,a=t.location||window.location;return t.href=n,t.onclick=function(e){0!==e.button||e.altKey||e.metaKey||e.ctrlKey||e.shiftKey||"_blank"===t.target||e.currentTarget.origin!==a.origin||(e.preventDefault(),n!==a.pathname&&history.pushState(a.pathname,"",n))},(0,e.h)("a",t,r)}
},{"hyperapp":8}],20:[function(require,module,exports) {
"use strict";function e(e,t,r,n){return{isExact:e,path:t,url:r,params:n}}function t(e){for(var t=e.length;"/"===e[--t];);return e.slice(0,t+1)}function r(r,n,i){if(r===n||!r)return e(r===n,r,n);var l=i&&i.exact,c=t(r).split("/"),s=t(n).split("/");if(!(c.length>s.length||l&&c.length<s.length)){var u=0,o={},a=c.length;for(n="";u<a;u++){if(":"===c[u][0])try{o[c[u].slice(1)]=s[u]=decodeURI(s[u])}catch(e){continue}else if(c[u]!==s[u])return;n+=s[u]+"/"}return e(!1,r,n.slice(0,-1),o)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseRoute=r;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Route=t;var e=require("./parseRoute");function t(t){var r=t.location||window.location,o=(0,e.parseRoute)(t.path,r.pathname,{exact:!t.parent});return o&&t.render({match:o,location:r})}
},{"./parseRoute":20}],12:[function(require,module,exports) {
"use strict";function e(e,t){return t[0]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Switch=e;
},{}],13:[function(require,module,exports) {
"use strict";function e(e){var t=e.location||window.location;history.replaceState(e.from||t.pathname,"",e.to)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Redirect=e;
},{}],14:[function(require,module,exports) {
"use strict";function t(t){return t.reduce(function(t,e){var n=history[e];return history[e]=function(t,e,o){n.call(this,t,e,o),dispatchEvent(new CustomEvent("pushstate",{detail:t}))},function(){history[e]=n,t&&t()}},null)}Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.location={state:{pathname:window.location.pathname,previous:window.location.pathname},actions:{go:function(t){history.pushState(null,"",t)},set:function(t){return t}},subscribe:function(e){function n(t){e.set({pathname:window.location.pathname,previous:t.detail?window.location.previous=t.detail:window.location.previous})}var o=t(["pushState","replaceState"]);return addEventListener("pushstate",n),addEventListener("popstate",n),function(){removeEventListener("pushstate",n),removeEventListener("popstate",n),o()}}};
},{}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Link");Object.defineProperty(exports,"Link",{enumerable:!0,get:function(){return e.Link}});var r=require("./Route");Object.defineProperty(exports,"Route",{enumerable:!0,get:function(){return r.Route}});var t=require("./Switch");Object.defineProperty(exports,"Switch",{enumerable:!0,get:function(){return t.Switch}});var n=require("./Redirect");Object.defineProperty(exports,"Redirect",{enumerable:!0,get:function(){return n.Redirect}});var i=require("./location");Object.defineProperty(exports,"location",{enumerable:!0,get:function(){return i.location}});
},{"./Link":10,"./Route":11,"./Switch":12,"./Redirect":13,"./location":14}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@hyperapp/router");exports.default={location:e.location.state};
},{"@hyperapp/router":9}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@hyperapp/router");exports.default={location:e.location.actions};
},{"@hyperapp/router":9}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(){return(0,e.h)("h2",null,"Home")};
},{"hyperapp":8}],16:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(){return(0,e.h)("h2",null,"About")};
},{"hyperapp":8}],21:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(r){var t=r.match;return(0,e.h)("h3",null,t.params.topicId)};
},{"hyperapp":8}],17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),t=require("@hyperapp/router"),l=require("../component/topic"),r=n(l);function n(e){return e&&e.__esModule?e:{default:e}}exports.default=function(l){var n=l.match;return(0,e.h)("div",null,(0,e.h)("h2",null,"Topics"),(0,e.h)("ul",null,(0,e.h)("li",null,(0,e.h)(t.Link,{to:n.url+"/components"},"Components")),(0,e.h)("li",null,(0,e.h)(t.Link,{to:n.url+"/single-state-tree"},"Single State Tree")),(0,e.h)("li",null,(0,e.h)(t.Link,{to:n.url+"/routing"},"Routing"))),n.isExact&&(0,e.h)("h3",null,"Please select a topic."),(0,e.h)(t.Route,{parent:!0,path:n.path+"/:topicId",render:r.default}))};
},{"hyperapp":8,"@hyperapp/router":9,"../component/topic":21}],18:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),l=require("@hyperapp/router");exports.default=function(){return(0,e.h)("ul",null,(0,e.h)("li",null,(0,e.h)(l.Link,{to:"/"},"Home")),(0,e.h)("li",null,(0,e.h)(l.Link,{to:"/about"},"About")),(0,e.h)("li",null,(0,e.h)(l.Link,{to:"/404"},"404")),(0,e.h)("li",null,(0,e.h)(l.Link,{to:"/topics"},"Topics")))};
},{"hyperapp":8,"@hyperapp/router":9}],19:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(){return(0,e.h)("h2",null,"404 Not Found.")};
},{"hyperapp":8}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),r=require("@hyperapp/router"),t=require("./home"),u=f(t),o=require("./about"),a=f(o),n=require("./topics"),l=f(n),h=require("../component/navigator"),i=f(h),p=require("./404"),d=f(p);function f(e){return e&&e.__esModule?e:{default:e}}exports.default=function(){return(0,e.h)("div",null,(0,e.h)(i.default,null),(0,e.h)("hr",null),(0,e.h)(r.Switch,null,(0,e.h)(r.Route,{path:"/",render:u.default}),(0,e.h)(r.Route,{path:"/about",render:a.default}),(0,e.h)(r.Route,{parent:!0,path:"/topics",render:l.default}),(0,e.h)(r.Route,{render:d.default})))};
},{"hyperapp":8,"@hyperapp/router":9,"./home":15,"./about":16,"./topics":17,"../component/navigator":18,"./404":19}],4:[function(require,module,exports) {
"use strict";var e=require("hyperapp"),r=require("@hyperapp/router"),t=require("./state"),u=l(t),a=require("./actions"),i=l(a),p=require("./views"),o=l(p);function l(e){return e&&e.__esModule?e:{default:e}}var n=(0,e.app)(u.default,i.default,o.default,document.getElementById("app"));r.location.subscribe(n.location);
},{"hyperapp":8,"@hyperapp/router":9,"./state":5,"./actions":6,"./views":7}]},{},[4])