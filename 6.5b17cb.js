(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var MenuItems = [{
  title: 'O MNIE',
  url: 'about',
  cName: 'nav-links'
}, {
  title: 'OFERTA',
  url: 'offer',
  cName: 'nav-links'
}, {
  title: 'KONTAKT',
  url: 'contact',
  cName: 'nav-links'
} // ,
// {
//     title: 'ABC KLIENTA',
//     url: 'faq',
//     cName: 'nav-links'
// }
];

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "9622d940aa8618d771e8986ff8e41b7c.png");

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Navbar":"Navbar","Navbar_hidden":"Navbar_hidden","Navbar__wrapper":"Navbar__wrapper","Navbar__logo":"Navbar__logo","Navbar__title":"Navbar__title","Navbar__nav-menu":"Navbar__nav-menu","Navbar__nav-item":"Navbar__nav-item","Navbar__nav-links":"Navbar__nav-links","fa-bars":"fa-bars","Navbar__menu-button":"Navbar__menu-button","Navbar__nav-menu_active":"Navbar__nav-menu_active","Navbar__navbar-logo":"Navbar__navbar-logo","fa-times":"fa-times","Navbar__nav-links-mobile":"Navbar__nav-links-mobile","Navbar__flags":"Navbar__flags"};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bem_css_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _store_StoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_KC_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);








var style = bem_css_modules__WEBPACK_IMPORTED_MODULE_1___default()(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a);

var Navbar = () => {
  var {
    isMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_StoreProvider__WEBPACK_IMPORTED_MODULE_5__[/* StoreContext */ "a"]);
  var [prevScrollpos, setPrevScrollpos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.pageYOffset); // const [visible, setVisible] = useState(true);

  var [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var Items = _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__[/* MenuItems */ "a"].map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      className: style("nav-item")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      smooth: true,
      duration: 1000,
      to: item.url,
      offset: -60,
      className: style("nav-links")
    }, item.title));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

  var itemStyle = isOpen ? style("nav-menu", {
    active: true
  }) : style("nav-menu");
  var logo = isMobile ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    className: style("logo")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: style("logo"),
    src: _assets_KC_1_png__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    alt: ""
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: style("")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style("wrapper")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style("menu-button"),
    onClick: handleOnClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: isOpen ? "fas fa-times" : "fas fa-bars"
  })), logo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: itemStyle
  }, Items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/faq",
    className: style("nav-links")
  }, "ABC KLIENTA"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

}]);