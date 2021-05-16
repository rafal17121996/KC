(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[185],{

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

/***/ 9185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ NavbarFAQ
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(8893);
// EXTERNAL MODULE: ./node_modules/react-router-hash-link/lib/index.js
var lib = __webpack_require__(7853);
// EXTERNAL MODULE: ./src/components/Navbar/MenuItem/MenuItem.jsx
var MenuItem = __webpack_require__(1689);
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(7625);
;// CONCATENATED MODULE: ./src/components/Navbar/NavbarFAQ.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavbarFAQ_module = ({"Navbar":"Navbar","Navbar__icon":"Navbar__icon","Navbar__icon-close":"Navbar__icon-close","Navbar__wrapper":"Navbar__wrapper","Navbar__logo":"Navbar__logo","Navbar__title":"Navbar__title","Navbar__nav-menu":"Navbar__nav-menu","Navbar__nav-item":"Navbar__nav-item","Navbar__nav-links":"Navbar__nav-links","fa-bars":"fa-bars","Navbar__menu-button":"Navbar__menu-button","Navbar__nav-menu_active":"Navbar__nav-menu_active","Navbar__navbar-logo":"Navbar__navbar-logo","Navbar__nav-links-mobile":"Navbar__nav-links-mobile","Navbar__flags":"Navbar__flags"});
// EXTERNAL MODULE: ./src/assets/KC11.png
var KC11 = __webpack_require__(6106);
// EXTERNAL MODULE: ./src/assets/burgerMenu.svg
var burgerMenu = __webpack_require__(5982);
// EXTERNAL MODULE: ./src/assets/close.svg
var assets_close = __webpack_require__(3201);
// EXTERNAL MODULE: ./src/components/Delayed/Delayed.jsx
var Delayed = __webpack_require__(2581);
;// CONCATENATED MODULE: ./src/components/Navbar/NavbarFAQ.jsx

 // import { Link } from "react-router-dom";











var style = (0,bem_css_modules/* default */.Z)(NavbarFAQ_module);

var Navbar = () => {
  var scrollWithOffset = (el, offset) => {
    var elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };

  var {
    isMobile
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  var [prevScrollpos, setPrevScrollpos] = (0,react.useState)(window.pageYOffset);
  var [isOpen, setIsOpen] = (0,react.useState)(false);
  var Items = MenuItem/* MenuItems.map */.s.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: index,
      className: style("nav-item")
    }, /*#__PURE__*/react.createElement(lib/* HashLink */.fO, {
      smooth: true,
      to: "/#" + item.url,
      scroll: el => scrollWithOffset(el, isMobile ? 0 : 80),
      className: style("nav-links")
    }, item.title));
  });

  var handleOnClick = () => {
    setIsOpen(prev => !prev);
  };

  var itemStyle = isOpen ? style("nav-menu", {
    active: true
  }) : style("nav-menu");
  var logo = /*#__PURE__*/react.createElement(lib/* HashLink */.fO, {
    smooth: true,
    to: "/",
    className: style("nav-links")
  }, /*#__PURE__*/react.createElement("img", {
    className: style("logo"),
    src: KC11/* default */.Z,
    alt: ""
  }));
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
  }, /*#__PURE__*/react.createElement(lib/* HashLink */.fO, {
    smooth: true,
    to: "/faq",
    className: style("nav-links")
  }, "ABC KLIENTA")), /*#__PURE__*/react.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react.createElement(lib/* HashLink */.fO, {
    smooth: true,
    to: "/#contact",
    scroll: el => scrollWithOffset(el, isMobile ? 0 : 80),
    className: style("nav-links")
  }, "KONTAKT"))))));
};

/* harmony default export */ const NavbarFAQ = (Navbar);

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

/***/ }),

/***/ 7853:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = genericHashLink;
__webpack_unused_export__ = exports.fO = void 0;

var _react = _interopRequireDefault(__webpack_require__(7294));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _reactRouterDom = __webpack_require__(3727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hashFragment = '';
var observer = null;
var asyncTimerId = null;
var scrollFunction = null;

function reset() {
  hashFragment = '';
  if (observer !== null) observer.disconnect();

  if (asyncTimerId !== null) {
    window.clearTimeout(asyncTimerId);
    asyncTimerId = null;
  }
}

function isInteractiveElement(element) {
  var formTags = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
  var linkTags = ['A', 'AREA'];
  return formTags.includes(element.tagName) && !element.hasAttribute('disabled') || linkTags.includes(element.tagName) && element.hasAttribute('href');
}

function getElAndScroll() {
  var element = null;

  if (hashFragment === '#') {
    // use document.body instead of document.documentElement because of a bug in smoothscroll-polyfill in safari
    // see https://github.com/iamdustan/smoothscroll/issues/138
    // while smoothscroll-polyfill is not included, it is the recommended way to implement smoothscroll
    // in browsers that don't natively support el.scrollIntoView({ behavior: 'smooth' })
    element = document.body;
  } else {
    // check for element with matching id before assume '#top' is the top of the document
    // see https://html.spec.whatwg.org/multipage/browsing-the-web.html#target-element
    var id = hashFragment.replace('#', '');
    element = document.getElementById(id);

    if (element === null && hashFragment === '#top') {
      // see above comment for why document.body instead of document.documentElement
      element = document.body;
    }
  }

  if (element !== null) {
    scrollFunction(element); // update focus to where the page is scrolled to
    // unfortunately this doesn't work in safari (desktop and iOS) when blur() is called

    var originalTabIndex = element.getAttribute('tabindex');

    if (originalTabIndex === null && !isInteractiveElement(element)) {
      element.setAttribute('tabindex', -1);
    }

    element.focus({
      preventScroll: true
    });

    if (originalTabIndex === null && !isInteractiveElement(element)) {
      // for some reason calling blur() in safari resets the focus region to where it was previously,
      // if blur() is not called it works in safari, but then are stuck with default focus styles
      // on an element that otherwise might never had focus styles applied, so not an option
      element.blur();
      element.removeAttribute('tabindex');
    }

    reset();
    return true;
  }

  return false;
}

function hashLinkScroll(timeout) {
  // Push onto callback queue so it runs after the DOM is updated
  window.setTimeout(function () {
    if (getElAndScroll() === false) {
      if (observer === null) {
        observer = new MutationObserver(getElAndScroll);
      }

      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true
      }); // if the element doesn't show up in specified timeout or 10 seconds, stop checking

      asyncTimerId = window.setTimeout(function () {
        reset();
      }, timeout || 10000);
    }
  }, 0);
}

function genericHashLink(As) {
  return /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var linkHash = '';

    if (typeof props.to === 'string' && props.to.includes('#')) {
      linkHash = "#".concat(props.to.split('#').slice(1).join('#'));
    } else if (_typeof(props.to) === 'object' && typeof props.to.hash === 'string') {
      linkHash = props.to.hash;
    }

    var passDownProps = {};

    if (As === _reactRouterDom.NavLink) {
      passDownProps.isActive = function (match, location) {
        return match && match.isExact && location.hash === linkHash;
      };
    }

    function handleClick(e) {
      reset();
      hashFragment = props.elementId ? "#".concat(props.elementId) : linkHash;
      if (props.onClick) props.onClick(e);

      if (hashFragment !== '') {
        scrollFunction = props.scroll || function (el) {
          return props.smooth ? el.scrollIntoView({
            behavior: 'smooth'
          }) : el.scrollIntoView();
        };

        hashLinkScroll(props.timeout);
      }
    }

    var scroll = props.scroll,
        smooth = props.smooth,
        timeout = props.timeout,
        elementId = props.elementId,
        filteredProps = _objectWithoutProperties(props, ["scroll", "smooth", "timeout", "elementId"]);

    return /*#__PURE__*/_react["default"].createElement(As, _extends({}, passDownProps, filteredProps, {
      onClick: handleClick,
      ref: ref
    }), props.children);
  });
}

var HashLink = genericHashLink(_reactRouterDom.Link);
exports.fO = HashLink;
var NavHashLink = genericHashLink(_reactRouterDom.NavLink);
__webpack_unused_export__ = NavHashLink;
var propTypes = {
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node,
  scroll: _propTypes["default"].func,
  timeout: _propTypes["default"].number,
  elementId: _propTypes["default"].string,
  to: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
HashLink.propTypes = propTypes;
NavHashLink.propTypes = propTypes;

/***/ })

}]);