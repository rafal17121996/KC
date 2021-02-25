(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[433],{

/***/ 5433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ Home
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(8893);
// EXTERNAL MODULE: ./node_modules/react-parallax/lib/index.js
var lib = __webpack_require__(1113);
;// CONCATENATED MODULE: ./src/components/Home/Home.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home_module = ({"homeWrapper":"homeWrapper","homeWrapper__text":"homeWrapper__text","fadein":"fadein","homeWrapper__text2":"homeWrapper__text2","homeWrapper__description":"homeWrapper__description"});
;// CONCATENATED MODULE: ./src/assets/back1 (2)-1.jpg
/* harmony default export */ const back1_2_1 = (__webpack_require__.p + "ee84d7f0a46a3cd1016bfbb25a09272d.jpg");
;// CONCATENATED MODULE: ./src/assets/imgMobile.jpg
/* harmony default export */ const imgMobile = (__webpack_require__.p + "34bcfb7fbc9698d87f1dfdd84884d992.jpg");
// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(6409);
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
;// CONCATENATED MODULE: ./src/components/Home/Home.jsx








var style = (0,bem_css_modules/* default */.Z)(Home_module);
function Home() {
  var height = (0,esm/* use100vh */.g)();
  var {
    isMobile
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  var [offset, setOffset] = (0,react.useState)();

  var handleScroll = () => setOffset(window.pageYOffset);

  window.addEventListener('scroll', handleScroll);
  var mystyle = {
    backgroundImage: "url(".concat(back1_2_1, ")"),
    backgroundPositionY: offset * 0.7 + "px"
  };
  return /*#__PURE__*/react.createElement("section", {
    id: "home",
    className: style()
  }, /*#__PURE__*/react.createElement(lib.Parallax, {
    bgImage: back1_2_1,
    strength: 100
  }, /*#__PURE__*/react.createElement(esm/* default */.ZP, null, /*#__PURE__*/react.createElement("div", {
    style: {
      height: height
    }
  }, /*#__PURE__*/react.createElement("h1", {
    className: style("text")
  }, "KAROLINA CHORZ\u0118PA", /*#__PURE__*/react.createElement("br", null), isMobile ? null : "WEDDING PLANNER"), isMobile ? null : /*#__PURE__*/react.createElement("h2", {
    className: style("text2")
  }, "KC WEDDING"), isMobile ? /*#__PURE__*/react.createElement("h2", {
    className: style("description")
  }, "Kreuj\u0119 rozwi\u0105zania na miar\u0119 Waszych potrzeb estetycznych i organizacyjnych. Wspieram w decyzjach, procesach, emocjach.") : null))));
}

/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => /* binding */ Div100vh,
/* harmony export */   "g": () => /* binding */ use100vh
/* harmony export */ });
/* unused harmony export measureHeight */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var warned = false;
function Div100vh(_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, other = __rest(_a, ["style"]);
    var height = use100vh();
    // TODO: warn only in development
    if (!warned && style.height) {
        warned = true;
        console.warn('<ReactDiv100vh /> overrides the height property of the style prop');
    }
    var styleWithRealHeight = __assign(__assign({}, style), { height: height ? height + "px" : '100vh' });
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ style: styleWithRealHeight }, other));
}
function use100vh() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(measureHeight), height = _a[0], setHeight = _a[1];
    var wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!wasRenderedOnClientAtLeastOnce)
            return;
        function setMeasuredHeight() {
            var measuredHeight = measureHeight();
            setHeight(measuredHeight);
        }
        window.addEventListener('resize', setMeasuredHeight);
        return function () { return window.removeEventListener('resize', setMeasuredHeight); };
    }, [wasRenderedOnClientAtLeastOnce]);
    return wasRenderedOnClientAtLeastOnce ? height : null;
}
function measureHeight() {
    var _a;
    if (!isClient())
        return null;
    return ((_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.clientHeight) || window.innerHeight;
}
// Once we ended up on client, the first render must look the same as on
// the server so hydration happens without problems. _Then_ we immediately
// schedule a subsequent update and return the height measured on the client.
// It's not needed for CSR-only apps, but is critical for SSR.
function useWasRenderedOnClientAtLeastOnce() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), wasRenderedOnClientAtLeastOnce = _a[0], setWasRenderedOnClientAtLeastOnce = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (isClient()) {
            setWasRenderedOnClientAtLeastOnce(true);
        }
    }, []);
    return wasRenderedOnClientAtLeastOnce;
}
function isClient() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}


/***/ })

}]);