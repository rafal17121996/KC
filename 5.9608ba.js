(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isDev = "production" !== 'production';
var settings = {
    throwOnError: false,
    elementDelimiter: '__',
    modifierDelimiter: '_'
};
/**
 * Base function for bem naming with css modules
 * @param {Object} cssModule. Imported css module
 * @param {String} name. BEM name
 * @param {String} [element]
 * @param {Object} [mods]
 * @param {Object} [states]
 * @return {String}
 */
function block(cssModule, name, elementParam, modsParam, statesParam) {
    var isElementAsModes = elementParam && typeof elementParam === 'object';
    var mods = isElementAsModes ? elementParam : modsParam;
    var states = isElementAsModes ? modsParam : statesParam;
    var element = isElementAsModes ? '' : elementParam;
    var modifierDelimiter = settings.modifierDelimiter, elementDelimiter = settings.elementDelimiter, throwOnError = settings.throwOnError;
    var baseBlock = element ? "" + name + elementDelimiter + element : name;
    var result = cssModule[baseBlock] || '';
    if (isDev) {
        if (!result && !mods) {
            var message = "There is no " + name + elementDelimiter + element + " in cssModule";
            if (throwOnError) {
                throw Error(message);
            }
            else {
                console.warn(message);
                return '';
            }
        }
    }
    if (mods) {
        result = Object.keys(mods)
            .reduce(function (acc, next) {
            var modValue = mods[next];
            var mod;
            if (modValue === undefined) {
                return acc;
            }
            if (typeof modValue === 'boolean') {
                if (isDev) {
                    if (!("" + baseBlock + modifierDelimiter + next in cssModule)) {
                        var message = "There is no " + baseBlock + modifierDelimiter + next + " in cssModule";
                        if (throwOnError) {
                            throw Error(message);
                        }
                        else {
                            console.warn(message);
                            return acc;
                        }
                    }
                }
                if (modValue) {
                    mod = cssModule["" + baseBlock + modifierDelimiter + next];
                }
                else {
                    return acc;
                }
            }
            else {
                var currentMode = "" + baseBlock + modifierDelimiter + next + modifierDelimiter + mods[next];
                if (isDev) {
                    if (!(currentMode in cssModule)) {
                        var message = "There is no " + currentMode + " in cssModule";
                        if (throwOnError) {
                            throw Error(message);
                        }
                        else {
                            console.warn(message);
                            return acc;
                        }
                    }
                }
                mod = cssModule[currentMode];
            }
            return acc + " " + mod;
        }, result);
    }
    if (states) {
        result = Object.keys(states)
            .reduce(function (acc, next) {
            if (!states[next]) {
                return acc;
            }
            var state = cssModule["is-" + next];
            if (!state) {
                var message = "There is no is-" + next + " in cssModule";
                if (throwOnError) {
                    throw Error(message);
                }
                else {
                    console.warn(message);
                    return acc;
                }
            }
            return acc + " " + state;
        }, result);
    }
    return result.trim();
}
var extractModuleName = function (cssModule) {
    if (isDev) {
        if (!cssModule || typeof cssModule !== 'object' || Array.isArray(cssModule)) {
            var message = 'cssModule object should be an Object with keys';
            if (settings.throwOnError) {
                throw Error(message);
            }
            else {
                console.warn(message);
                return '';
            }
        }
    }
    var name = Object.keys(cssModule)[0];
    if (isDev) {
        if (!name) {
            var message = 'cssModule has no keys';
            if (settings.throwOnError) {
                throw Error(message);
            }
            else {
                console.warn(message);
                return '';
            }
        }
    }
    var indexElement = name.indexOf(settings.elementDelimiter);
    if (indexElement !== -1) {
        name = name.slice(0, indexElement);
    }
    var indexModifier = name.indexOf(settings.modifierDelimiter);
    if (indexModifier !== -1) {
        name = name.slice(0, indexModifier);
    }
    return name;
};
var bem = function (cssModule, name) {
    return block.bind(null, cssModule, name || extractModuleName(cssModule));
};
bem.setSettings = function (newSettings) {
    return Object.assign(settings, newSettings);
};
exports.default = bem;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=__webpack_require__(0)},function(e,n,t){e.exports=t(2)()},function(e,n,t){"use strict";var r=t(3);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(1),a=t.n(i),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="object"===("undefined"==typeof window?"undefined":u(window))&&"object"===("undefined"==typeof document?"undefined":u(document))&&9===document.nodeType;function c(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="",f="",l="";if(s){var d={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},m=document.createElement("p").style;for(var y in d)if(y+"Transform"in m){p=y,f=d[y];break}"Webkit"===p&&"msHyphens"in m&&(p="ms",f=d.ms),"Webkit"===p&&"-apple-trailing-word"in m&&(l="apple")}var b={js:p,css:f,vendor:l};function g(e){return"-"===e[1]?e:"ms"===b.js?e:"@"+b.css+"keyframes"+e.substr(10)}var v={noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===b.js?"-webkit-"+e:b.css+e)}},x=/[-\s]+(.)?/g;function k(e,n){return n?n.toUpperCase():""}function j(e){return e.replace(x,k)}function P(e){return j("-"+e)}var h,w={supportedProperty:function(e,n){return!!/^break-/.test(e)&&("Webkit"===b.js?"WebkitColumn"+P(e)in n&&b.css+"column-"+e:"Moz"===b.js&&("page"+P(e)in n&&"page-"+e))}},O={noPrefill:["text-decoration-skip-ink"],supportedProperty:function(e){return"text-decoration-skip-ink"===e&&("apple"===b.vendor?""+b.css+e:"Webkit"===b.js||"Moz"===b.js?e:b.css+e)}},S={noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===b.js?b.css+"print-"+e:e)}},T={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},E=Object.keys(T),_=function(e){return b.css+e},W={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},A=[v,{noPrefill:["transform"],supportedProperty:function(e,n,t){return"transform"===e&&(t.transform?e:b.css+e)}},{noPrefill:["transition"],supportedProperty:function(e,n,t){return"transition"===e&&(t.transition?e:b.css+e)}},{noPrefill:["mask"],supportedProperty:function(e,n){if(!/^mask/.test(e))return!1;if("Webkit"===b.js){if(j("mask-image")in n)return e;if(b.js+P("mask-image")in n)return b.css+e}return e}},{noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===b.js||"ms"===b.js?b.css+e:e)}},S,O,w,{supportedProperty:function(e,n){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===b.js)return e;var t=e.replace("-inline","");return b.js+P(t)in n&&b.css+t}},{supportedProperty:function(e,n){return j(e)in n&&e}},{supportedProperty:function(e,n){var t=P(e);return b.js+t in n?b.css+e:"Webkit"!==b.js&&"Webkit"+t in n&&e}},{supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===b.js?""+b.css+e:e)}},{supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===b.js?b.css+"scroll-chaining":e)}},{supportedProperty:function(e,n){var t=W[e];return!!t&&(b.js+P(t)in n&&b.css+t)}},{supportedProperty:function(e,n,t){var r=t.multiple;if(E.indexOf(e)>-1){var o=T[e];if(!Array.isArray(o))return b.js+P(o)in n&&b.css+o;if(!r)return!1;for(var i=0;i<o.length;i++)if(!(b.js+P(o[0])in n))return!1;return o.map(_)}return!1}}],C=A.filter((function(e){return e.supportedProperty})).map((function(e){return e.supportedProperty})),M=A.filter((function(e){return e.noPrefill})).reduce((function(e,n){return e.push.apply(e,c(n.noPrefill)),e}),[]),z={};if(s){h=document.createElement("p");var R=window.getComputedStyle(document.documentElement,"");for(var I in R)isNaN(I)||(z[R[I]]=R[I]);M.forEach((function(e){return delete z[e]}))}function N(e,n){if(void 0===n&&(n={}),!h)return e;if(null!=z[e])return z[e];"transition"!==e&&"transform"!==e||(n[e]=e in h.style);for(var t=0;t<C.length&&(z[e]=C[t](e,h.style,n),!z[e]);t++);try{h.style[e]=""}catch(e){return!1}return z[e]}s&&document.createElement("p");
/**
 * CSS Vendor prefix detection and property feature testing.
 *
 * @copyright Oleg Slobodskoi 2015
 * @website https://github.com/jsstyles/css-vendor
 * @license MIT
 */
var B=function(e){var n=e.imagesCount,t=e.duration,r=e.transition,o=n*(t+r),i=Math.round(r/o*100),a=Math.round((t+r)/o*100),u=Math.round(1.1*a),s=N("backface-visibility"),c=N("animation"),p=g("@keyframes"),f="",l="";return c&&s&&p&&(f="".concat(s,": hidden;\n        ").concat(c,": imageAnimation ").concat(o,"s linear infinite -0.5s;"),l="".concat(p," imageAnimation {\n          0% {\n            opacity: 0;\n            animation-timing-function: ease-in;\n          }\n          ").concat(i,"% {\n            opacity: 1;\n            animation-timing-function: ease-out;\n          }\n          ").concat(a,"% {\n            opacity: 1;\n          }\n          ").concat(u,"% {\n            opacity: 0\n          }\n          100% {\n            opacity: 0\n          }\n        }")),"#ReactBackgroundSlider > figure {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        color: transparent;\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n        opacity: 0;\n        z-index: -1000;\n        margin: 0;\n        ".concat(f,"\n      }\n      ").concat(l,"\n    ")},q=function(e,n){var t=document.getElementsByTagName("head")[0],r=document.createElement("style");r.setAttribute("type","text/css"),r.setAttribute("data-meta",n),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),t.appendChild(r)},D="ReactBackgroundSlider";function U(e){var n=e.images,t=e.duration,r=e.transition;return o.a.useEffect((function(){q(B({imagesCount:n.length,duration:t,transition:r}),D)})),o.a.createElement("div",{id:D},n.map((function(e,n){return o.a.createElement("figure",{key:n,style:{backgroundImage:"url(".concat(e,")"),animationDelay:"".concat((t+r)*n,"s")}})})))}U.defaultProps={duration:10,transition:2},U.propTypes={images:a.a.array.isRequired,duration:a.a.number,transition:a.a.number};var H=U;n.default=H}]);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"homeWrapper":"homeWrapper","homeWrapper__text":"homeWrapper__text","homeWrapper__text2":"homeWrapper__text2","homeWrapper__description":"homeWrapper__description"};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(28);
var bem_css_modules_default = /*#__PURE__*/__webpack_require__.n(bem_css_modules);

// EXTERNAL MODULE: ./node_modules/react-background-slider/dist/index.js
var dist = __webpack_require__(54);

// EXTERNAL MODULE: ./src/components/Home/Home.module.scss
var Home_module = __webpack_require__(55);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// CONCATENATED MODULE: ./src/assets/back1 (2)-1.jpg
/* harmony default export */ var back1_2_1 = (__webpack_require__.p + "e83752ba4f45e1526294028c26a92383.jpg");
// CONCATENATED MODULE: ./src/components/Home/Home.jsx



 // import img from "../../assets/back1 (1).jpg";

 // import img2 from "../../assets/back1-1.jpg";
// import img3 from "../../assets/back2.jpg";

var style = bem_css_modules_default()(Home_module_default.a);
function Home() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "home",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style('text')
  }, "KAROLINA CHORZ\u0118PA", /*#__PURE__*/react_default.a.createElement("br", null), "WEDDING PLANNER"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: style('text2')
  }, "KC WEDDING"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: style('description')
  }, "Kreuj\u0119 rozwi\u0105zania na miar\u0119 Waszych potrzeb estetycznych i organizacyjnych. Wspieram w decyzjach, procesach, emocjach."));
}

/***/ })

}]);