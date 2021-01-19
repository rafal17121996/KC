(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"homeWrapper":"homeWrapper","homeWrapper__text":"homeWrapper__text","fadein":"fadein","homeWrapper__text2":"homeWrapper__text2","homeWrapper__description":"homeWrapper__description"};

/***/ }),

/***/ 81:
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

// EXTERNAL MODULE: ./node_modules/typewriter-effect/dist/react.js
var dist_react = __webpack_require__(60);

// EXTERNAL MODULE: ./src/components/Home/Home.module.scss
var Home_module = __webpack_require__(61);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// CONCATENATED MODULE: ./src/assets/back1 (2)-1.jpg
/* harmony default export */ var back1_2_1 = (__webpack_require__.p + "e83752ba4f45e1526294028c26a92383.jpg");
// EXTERNAL MODULE: ./node_modules/react-parallax/lib/index.js
var lib = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react-reveal/Fade.js
var Fade = __webpack_require__(63);

// CONCATENATED MODULE: ./src/components/Home/Home.jsx









var style = bem_css_modules_default()(Home_module_default.a);
function Home() {
  var height = Object(esm["b" /* use100vh */])();
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "home",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(lib["Parallax"], {
    blur: {
      min: -5,
      max: 5
    },
    bgImage: back1_2_1,
    strength: 400
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      height: height
    }
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("text")
  }, "KAROLINA CHORZ\u0118PA", /*#__PURE__*/react_default.a.createElement("br", null), "WEDDING PLANNER"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: style("text2")
  }, "KC WEDDING")))));
}

/***/ })

}]);