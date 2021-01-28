(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"homeWrapper":"homeWrapper","homeWrapper__text":"homeWrapper__text","fadein":"fadein","homeWrapper__text2":"homeWrapper__text2","homeWrapper__description":"homeWrapper__description"};

/***/ }),

/***/ 76:
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
/* harmony default export */ var back1_2_1 = (__webpack_require__.p + "ee84d7f0a46a3cd1016bfbb25a09272d.jpg");
// CONCATENATED MODULE: ./src/assets/imgMobile.jpg
/* harmony default export */ var imgMobile = (__webpack_require__.p + "34bcfb7fbc9698d87f1dfdd84884d992.jpg");
// EXTERNAL MODULE: ./node_modules/react-parallax/lib/index.js
var lib = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(40);

// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/Home/Home.jsx









var style = bem_css_modules_default()(Home_module_default.a);
function Home() {
  var height = Object(esm["b" /* use100vh */])();
  var {
    isMobile
  } = Object(react["useContext"])(StoreProvider["a" /* StoreContext */]);
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "home",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement(esm["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(lib["Parallax"], {
    blur: {
      min: -5,
      max: 5
    },
    bgImage: isMobile ? imgMobile : back1_2_1,
    strength: 500
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      height: height
    }
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("text")
  }, "KAROLINA CHORZ\u0118PA", /*#__PURE__*/react_default.a.createElement("br", null), "WEDDING PLANNER"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: style("text2")
  }, "KC WEDDING"), isMobile ? /*#__PURE__*/react_default.a.createElement("h2", {
    className: style("description")
  }, "Kreuj\u0119 rozwi\u0105zania na miar\u0119 Waszych potrzeb estetycznych i organizacyjnych. Wspieram w decyzjach, procesach, emocjach.") : null))));
}

/***/ })

}]);