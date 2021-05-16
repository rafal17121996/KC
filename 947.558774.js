(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[947],{

/***/ 2581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



class Delayed extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hidden: false
      });
    }, this.props.waitBeforeShow);
  }

  render() {
    return this.state.hidden ? '' : this.props.children;
  }

}

Delayed.propTypes = {
  waitBeforeShow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delayed);

/***/ }),

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

/***/ 9947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ Navbar_Navbar
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(8893);
// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(6261);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(7625);
// EXTERNAL MODULE: ./src/components/Navbar/MenuItem/MenuItem.jsx
var MenuItem = __webpack_require__(1689);
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Navbar_module = ({"Navbar":"Navbar","Navbar__icon":"Navbar__icon","Navbar__icon-close":"Navbar__icon-close","Navbar__wrapper":"Navbar__wrapper","Navbar__logo":"Navbar__logo","Navbar__title":"Navbar__title","Navbar__nav-menu":"Navbar__nav-menu","Navbar__nav-item":"Navbar__nav-item","Navbar__nav-links":"Navbar__nav-links","fa-bars":"fa-bars","Navbar__menu-button":"Navbar__menu-button","Navbar__nav-menu_active":"Navbar__nav-menu_active","Navbar__navbar-logo":"Navbar__navbar-logo","Navbar__nav-links-mobile":"Navbar__nav-links-mobile","Navbar__flags":"Navbar__flags"});
// EXTERNAL MODULE: ./src/assets/KC11.png
var KC11 = __webpack_require__(6106);
// EXTERNAL MODULE: ./src/assets/burgerMenu.svg
var burgerMenu = __webpack_require__(5982);
// EXTERNAL MODULE: ./src/assets/close.svg
var assets_close = __webpack_require__(3201);
// EXTERNAL MODULE: ./src/components/Delayed/Delayed.jsx
var Delayed = __webpack_require__(2581);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.jsx













var style = (0,bem_css_modules/* default */.Z)(Navbar_module);

var Navbar = () => {
  var {
    isMobile
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  var [prevScrollpos, setPrevScrollpos] = (0,react.useState)(window.pageYOffset);
  var [isOpen, setIsOpen] = (0,react.useState)(false);

  var handleOnClick = () => {
    setIsOpen(prev => !prev);
  };

  var Items = MenuItem/* MenuItems.map */.s.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: index,
      className: style("nav-item")
    }, /*#__PURE__*/react.createElement(modules/* Link */.rU, {
      smooth: true,
      duration: isMobile ? 0 : 1000,
      to: item.url,
      offset: isMobile ? 0 : -80,
      className: style("nav-links"),
      onClick: () => handleOnClick()
    }, item.title));
  });
  (0,react.useEffect)(() => {
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
  var logo = /*#__PURE__*/react.createElement(modules/* Link */.rU, {
    smooth: true,
    duration: isMobile ? 0 : 1000,
    to: "home",
    offset: isMobile ? 0 : -80,
    className: style("nav-links"),
    onClick: handleOnClick
  }, /*#__PURE__*/react.createElement("img", {
    className: style("logo"),
    src: KC11/* default */.Z,
    alt: ""
  })); // <Link to="/" className={style("logo")}>
  //     <img className={style("logo")} src={img} alt="" />
  //   </Link>

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("nav", {
    className: style("")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("wrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("menu-button"),
    onClick: handleOnClick
  }, isOpen ? /*#__PURE__*/react.createElement(Delayed/* default */.Z, {
    waitBeforeShow: 500
  }, /*#__PURE__*/react.createElement("img", {
    className: style("icon-close"),
    src: assets_close/* default */.Z,
    alt: ""
  })) : /*#__PURE__*/react.createElement("img", {
    className: style("icon"),
    src: burgerMenu/* default */.Z,
    alt: ""
  })), /*#__PURE__*/react.createElement("ul", {
    className: itemStyle
  }, !isMobile ? null : /*#__PURE__*/react.createElement("li", null, logo), Items, isMobile ? null : /*#__PURE__*/react.createElement("li", null, logo), /*#__PURE__*/react.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react.createElement(react_router_dom.Link, {
    to: "/faq",
    className: style("nav-links")
  }, "ABC KLIENTA")), /*#__PURE__*/react.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react.createElement(modules/* Link */.rU, {
    smooth: true,
    duration: isMobile ? 0 : 1000,
    to: "contact",
    offset: isMobile ? 0 : -80,
    className: style("nav-links"),
    onClick: handleOnClick
  }, "KONTAKT"))))));
};

/* harmony default export */ const Navbar_Navbar = (Navbar);

/***/ }),

/***/ 6106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4ea9cf225600518b744812cd97f9a47c.png");

/***/ }),

/***/ 5982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d207bcd653d8784dd584bd77835d75bb.svg");

/***/ }),

/***/ 3201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "688f4b6e1c99a5d12489b53e752a05c9.svg");

/***/ })

}]);