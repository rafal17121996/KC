(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "9622d940aa8618d771e8986ff8e41b7c.png");

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genericHashLink = genericHashLink;
exports.NavHashLink = exports.HashLink = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _reactRouterDom = __webpack_require__(8);

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
exports.HashLink = HashLink;
var NavHashLink = genericHashLink(_reactRouterDom.NavLink);
exports.NavHashLink = NavHashLink;
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

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"NavbarFAQ":"NavbarFAQ","NavbarFAQ_hidden":"NavbarFAQ_hidden","NavbarFAQ__wrapper":"NavbarFAQ__wrapper","NavbarFAQ__logo":"NavbarFAQ__logo","NavbarFAQ__title":"NavbarFAQ__title","NavbarFAQ__nav-menu":"NavbarFAQ__nav-menu","NavbarFAQ__nav-item":"NavbarFAQ__nav-item","NavbarFAQ__nav-links":"NavbarFAQ__nav-links","fa-bars":"fa-bars","NavbarFAQ__menu-button":"NavbarFAQ__menu-button","NavbarFAQ__nav-menu_active":"NavbarFAQ__nav-menu_active","NavbarFAQ__navbar-logo":"NavbarFAQ__navbar-logo","fa-times":"fa-times","NavbarFAQ__nav-links-mobile":"NavbarFAQ__nav-links-mobile","NavbarFAQ__flags":"NavbarFAQ__flags"};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bem_css_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _store_StoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _NavbarFAQ_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _NavbarFAQ_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavbarFAQ_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_KC_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);

 // import { Link } from "react-router-dom";






var style = bem_css_modules__WEBPACK_IMPORTED_MODULE_1___default()(_NavbarFAQ_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a);

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_StoreProvider__WEBPACK_IMPORTED_MODULE_4__[/* StoreContext */ "a"]);
  var [prevScrollpos, setPrevScrollpos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.pageYOffset);
  var [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var Items = _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__[/* MenuItems */ "a"].map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      className: style("nav-item")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__["HashLink"], {
      smooth: true,
      to: "/#" + item.url,
      scroll: el => scrollWithOffset(el, 60),
      className: style("nav-links")
    }, item.title));
  });

  var handleOnClick = () => {
    setIsOpen(prev => !prev);
  };

  var itemStyle = isOpen ? style("nav-menu", {
    active: true
  }) : style("nav-menu");
  var logo = isMobile ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__["HashLink"], {
    to: "/",
    className: style("logo")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: style("logo"),
    src: _assets_KC_1_png__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__["HashLink"], {
    smooth: true,
    to: "/faq",
    className: style("nav-links")
  }, "ABC KLIENTA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: style("nav-item")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__["HashLink"], {
    smooth: true,
    to: "/#contact",
    scroll: el => scrollWithOffset(el, 60),
    className: style("nav-links")
  }, "KONTAKT"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

}]);