(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[957],{

/***/ 1689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => /* binding */ MenuItems
/* harmony export */ });
var MenuItems = [{
  title: 'O MNIE',
  url: 'about',
  cName: 'nav-links'
}, {
  title: 'OFERTA',
  url: 'offer',
  cName: 'nav-links'
} // {
//     title: 'KONTAKT',
//     url: 'contact',
//     cName: 'nav-links'
// }
// ,
// {
//     title: 'ABC KLIENTA',
//     url: 'faq',
//     cName: 'nav-links'
// }
];

/***/ }),

/***/ 957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8893);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6261);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3727);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1689);
/* harmony import */ var _store_StoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7567);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3262);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_KC_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8954);








var style = (0,bem_css_modules__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)((_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));

var Navbar = () => {
  var {
    isMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_StoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .StoreContext */ .x);
  var [prevScrollpos, setPrevScrollpos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.pageYOffset);
  var [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  var handleOnClick = () => {
    setIsOpen(prev => !prev);
  };

  var Items = _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__/* .MenuItems.map */ .s.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: style("nav-item")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
      smooth: true,
      duration: isMobile ? 0 : 1000,
      to: item.url,
      offset: isMobile ? 0 : -60,
      className: style("nav-links"),
      onClick: () => handleOnClick()
    }, item.title));
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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

  var itemStyle = isOpen ? style("nav-menu", {
    active: true
  }) : style("nav-menu");
  var logo = isMobile ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/",
    className: style("logo")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: style("logo"),
    src: _assets_KC_1_png__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z,
    alt: ""
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: style("")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: style("wrapper")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: style("menu-button"),
    onClick: handleOnClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: isOpen ? "fas fa-times" : "fas fa-bars"
  })), logo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: itemStyle
  }, Items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/faq",
    className: style("nav-links")
  }, "ABC KLIENTA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
    smooth: true,
    duration: isMobile ? 0 : 1000,
    to: "contact",
    offset: isMobile ? 0 : -60,
    className: style("nav-links"),
    onClick: handleOnClick
  }, "KONTAKT"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ 8954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9622d940aa8618d771e8986ff8e41b7c.png");

/***/ }),

/***/ 3262:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"Navbar":"Navbar","Navbar_hidden":"Navbar_hidden","Navbar__wrapper":"Navbar__wrapper","Navbar__logo":"Navbar__logo","Navbar__title":"Navbar__title","Navbar__nav-menu":"Navbar__nav-menu","Navbar__nav-item":"Navbar__nav-item","Navbar__nav-links":"Navbar__nav-links","fa-bars":"fa-bars","Navbar__menu-button":"Navbar__menu-button","Navbar__nav-menu_active":"Navbar__nav-menu_active","Navbar__navbar-logo":"Navbar__navbar-logo","fa-times":"fa-times","Navbar__nav-links-mobile":"Navbar__nav-links-mobile","Navbar__flags":"Navbar__flags"};

/***/ })

}]);