(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Navbar":"Navbar","Navbar_hidden":"Navbar_hidden","Navbar__wrapper":"Navbar__wrapper","Navbar__logo":"Navbar__logo","Navbar__title":"Navbar__title","Navbar__nav-menu":"Navbar__nav-menu","Navbar__nav-item":"Navbar__nav-item","Navbar__nav-links":"Navbar__nav-links","fa-bars":"fa-bars","Navbar__menu-button":"Navbar__menu-button","Navbar__nav-menu_active":"Navbar__nav-menu_active","Navbar__navbar-logo":"Navbar__navbar-logo","fa-times":"fa-times","Navbar__nav-links-mobile":"Navbar__nav-links-mobile","Navbar__flags":"Navbar__flags"};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(28);
var bem_css_modules_default = /*#__PURE__*/__webpack_require__.n(bem_css_modules);

// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(8);

// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(13);

// EXTERNAL MODULE: ./src/components/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(49);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// CONCATENATED MODULE: ./src/assets/KC (1).png
/* harmony default export */ var KC_1_ = (__webpack_require__.p + "9622d940aa8618d771e8986ff8e41b7c.png");
// CONCATENATED MODULE: ./src/components/Navbar/Navbar.jsx




var MenuItems = /*#__PURE__*/react_default.a.lazy(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 62)));



var style = bem_css_modules_default()(Navbar_module_default.a);

var Navbar = () => {
  var {
    isMobile
  } = Object(react["useContext"])(StoreProvider["a" /* StoreContext */]);
  var [prevScrollpos, setPrevScrollpos] = Object(react["useState"])(window.pageYOffset); // const [visible, setVisible] = useState(true);

  var [isOpen, setIsOpen] = Object(react["useState"])(false);
  var Items = MenuItems.map((item, index) => {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: index,
      className: style("nav-item")
    }, /*#__PURE__*/react_default.a.createElement(modules["Link"], {
      smooth: true,
      duration: 1000,
      to: item.url,
      offset: -60,
      className: style("nav-links")
    }, item.title));
  });
  Object(react["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  var handleScroll = () => {
    if (!isMobile) {
      var currentScrollPos = window.pageYOffset;
      var newVisible = prevScrollpos > currentScrollPos;
      setPrevScrollpos(currentScrollPos); // setVisible(newVisible);
    } else {// setVisible(true);
      }
  };

  var handleOnClick = () => {
    setIsOpen(prev => !prev);
  };

  function handleClickLang(lang) {
    i18next.changeLanguage(lang);
  }

  var itemStyle = isOpen ? style("nav-menu", {
    active: true
  }) : style("nav-menu");
  var logo = isMobile ? null : /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/",
    className: style("logo")
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: style("logo"),
    src: KC_1_,
    alt: ""
  }));
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("nav", {
    className: style("")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("wrapper")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("menu-button"),
    onClick: handleOnClick
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: isOpen ? "fas fa-times" : "fas fa-bars"
  })), logo, /*#__PURE__*/react_default.a.createElement("ul", {
    className: itemStyle
  }, Items, /*#__PURE__*/react_default.a.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/faq",
    className: style("nav-links")
  }, "ABC KLIENTA"))))));
};

/* harmony default export */ var Navbar_Navbar = __webpack_exports__["default"] = (Navbar);

/***/ })

}]);