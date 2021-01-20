(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ 29:
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(0)):undefined}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(0)),i=function(e){_inherits(Parallax,e);var t=_createSuper(Parallax);function Parallax(){return _classCallCheck(this,Parallax),t.apply(this,arguments)}return Parallax}(o.default.Component);t.Parallax=i;var a=function(e){_inherits(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return Background}(o.default.Component);t.Background=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=e.getBoundingClientRect().top-n,i=e.getBoundingClientRect().bottom+n;return o<=t.getWindowHeight(r)&&i>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(4));t.Parallax=o.default;var i=r(n(7));t.Background=i.default},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1),a=n(5),c=n(2),u=r(n(6)),s={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},l=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Parallax,e);var t=_createSuper(Parallax);function Parallax(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Parallax),(n=t.call(this,e)).onWindowResize=function(){n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();e-n.timestamp>=10&&c.isScrolledIntoView(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=a.getRelativePosition(n.node,n.canUseDOM),r=!!n.img,o=n.bg&&n.state.splitChildren.bgChildren.length>0;r&&n.setImagePosition(t,e),o&&n.setBackgroundPosition(t),r||o||n.setState({percentage:t})}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:s,bgStyle:Object.assign(Object.assign({},s),e.bgStyle),percentage:0,splitChildren:a.getSplitChildren(e)},n.canUseDOM=c.canUseDOM(),n.node=null,n.content=null,n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.isDynamicBlur=a.getHasDynamicBlur(e.blur),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Parallax,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=c.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function setBackgroundPosition(e){var t=this.props,n=t.disabled,r=t.strength;if(!0!==n){var o=this.state.bgStyle,i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");this.setState({bgStyle:Object.assign(Object.assign({},o),{WebkitTransform:i,transform:i}),percentage:e})}}},{key:"setImagePosition",value:function setImagePosition(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,c=t?"auto":"".concat(this.getImageHeight(),"px"),u=t?"".concat(this.contentWidth,"px"):"auto";if(!0!==r){var s=this.state.imgStyle,l=o<0,f=(l?o:0)-o*e,p="translate3d(-50%, ".concat(f,"px, 0)"),g="none";i&&(g="blur(".concat(a.getBlurValue(this.isDynamicBlur,i,e),"px)")),this.setState({imgStyle:Object.assign(Object.assign({},s),{height:c,width:u,WebkitTransform:p,transform:p,WebkitFilter:g,filter:g}),percentage:e})}}},{key:"getImageHeight",value:function getImageHeight(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function loadImage(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return r.updatePosition()}))},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function releaseImage(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function addListeners(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function removeListeners(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,a=t.contentClassName,c=t.bgImageAlt,s=t.renderLayer,l=t.bgImageStyle,f=this.state,p=f.bgImage,g=f.bgImageSrcSet,d=f.bgImageSizes,_=f.percentage,y=f.imgStyle,h=f.bgStyle,b=f.splitChildren;return o.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function ref(t){e.node=t}},p?o.default.createElement("img",{className:i,src:p,srcSet:g,sizes:d,ref:function ref(t){e.img=t},alt:c,style:Object.assign(Object.assign({},y),l)}):null,s?s(-(_-1)):null,b.bgChildren.length>0?o.default.createElement("div",{className:"react-parallax-background-children",ref:function ref(t){e.bg=t},style:h},b.bgChildren):null,o.default.createElement(u.default,{onMount:this.onContentMount,className:a},b.children))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(e){return{splitChildren:a.getSplitChildren(e)}}}]),Parallax}(i.Parallax);l.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=l},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,a=r.height,c=o.getNodeHeight(n),u=a>c?a:c,s=Math.round(i>u?u:i);return t.getPercentage(0,u,s)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,r){var o=e;o.type&&o.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===_typeof(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function ParallaxChildren(e){var t=e.children,n=e.onMount,r=e.className;return o.default.createElement("div",{ref:function ref(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Background,[{key:"render",value:function render(){var e=this.props,t=e.className,n=e.children;return o.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),Background}(n(1).Background);i.defaultProps={className:""},i.isParallaxBackground=!0,t.default=i}])}));

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"FAQMoreWrapper":"FAQMoreWrapper","FAQMoreWrapper__img":"FAQMoreWrapper__img","FAQMoreWrapper__inlineStyle":"FAQMoreWrapper__inlineStyle","FAQMoreWrapper__faqTitle":"FAQMoreWrapper__faqTitle","FAQMoreWrapper__textWrapper":"FAQMoreWrapper__textWrapper","FAQMoreWrapper__title":"FAQMoreWrapper__title","FAQMoreWrapper__description":"FAQMoreWrapper__description","FAQMoreWrapper__x":"FAQMoreWrapper__x","FAQMoreWrapper__faqs":"FAQMoreWrapper__faqs","FAQMoreWrapper__faq":"FAQMoreWrapper__faq","FAQMoreWrapper__faqopen":"FAQMoreWrapper__faqopen","FAQMoreWrapper__question":"FAQMoreWrapper__question","FAQMoreWrapper__answer":"FAQMoreWrapper__answer","FAQMoreWrapper__end":"FAQMoreWrapper__end","FAQMoreWrapper__contact":"FAQMoreWrapper__contact"};

/***/ }),

/***/ 78:
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

// EXTERNAL MODULE: ./node_modules/react-router-hash-link/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: ./src/components/FAQ/FAQMore.module.scss
var FAQMore_module = __webpack_require__(64);
var FAQMore_module_default = /*#__PURE__*/__webpack_require__.n(FAQMore_module);

// CONCATENATED MODULE: ./src/assets/faq2.jpg
/* harmony default export */ var faq2 = (__webpack_require__.p + "aa3b591209853f40d400b5c91d0a8d3e.jpg");
// EXTERNAL MODULE: ./node_modules/react-parallax/lib/index.js
var react_parallax_lib = __webpack_require__(30);

// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/FAQ/FAQMore.jsx


var Item = /*#__PURE__*/react_default.a.lazy(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 49)));





var style = bem_css_modules_default()(FAQMore_module_default.a);

function FAQ() {
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
  } = Object(react["useContext"])(StoreProvider["a" /* StoreContext */]);
  var [faqs, setFaqs] = Object(react["useState"])([{
    question: "1. Dla kogo dedykowana jest usługa konsultanta ślubnego?",
    answer: "<strong>W zasadzie: dla każdego. </strong> Nieprawdą jest, że tylko i wyłącznie dla osób zamożnych czy dla tych skrajnie zapracowanych. Konsultant ślubny to <strong>odciążenie i wsparcie dla tych z Was, którzy lubią mieć wszystko pod kontrolą</strong> ale niekoniecznie są zorganizowani. Również dla tych, <strong>którzy potrzebują merytorycznego wsparcia w tworzeniu swoich wizji.</strong/><br/> Konsultant ślubny to rozwiązanie idealne, jeśli lubicie czuć się doskonale przygotowani na każdą sytuację. Taka współpraca ma zapewnić Wam błogi spokój, podczas gdy przedślubny harmonogram pęka w szwach. <strong>Zdejmuję z Was ciężar skrupulatnego planowania i przewidywania, zdającsię na swoje doświadczenie i wiedzę.</strong>",
    open: false
  }, {
    question: "2. Na jakim etapie przedślubnych przygotowań – możecie zdecydować się na wsparcie konsultanta ślubnego?",
    answer: "Na każdym.<u> Konsultant ślubny zajmuje się organizacją ślubu i/lub wesela – od każdego etapu przygotowań.</u> Możemy podjąć współpracę na samym starcie, rozpoczynając od „zera”. Mogę również otoczyć Was wsparciem i   opieką w nieco późniejszym momencie, gdy uznacie że zaszła taka potrzeba.<br/> <strong>Np.</strong> planujecie ślub i wesele, nie macie jeszcze poczynionych żadnych kroków. Rozpoczynamy współpracę i odtąd prowadzę organizację Waszego dnia od samiutkich podstaw, po drobniutkie detale. Zajmuję się wszystkimi Waszymi sprawami, do samego końca.",
    open: false
  }, {
    question: "3. W czym może wyręczyć Was konsultant ślubny podczas organizacji ślubu?",
    answer: "Tutaj nie ma jednoznacznej odpowiedzi. Nie istnieje również uniwersalna lista takich spraw czy tematów. Każda Para Młoda to zupełnie odrębny, niepowtarzalny przypadek. <u>Taki przypadek rozpatruję naprawdę mocno indywidualnie, dostosowując potrzebne działania – do sytuacji i ludzi.</u> W skrócie? Zajmuję się wszystkim tym, czym zająć się trzeba – a Wy nie macie czasu, ochoty lub kompetencji.<br/><strong>Np.</strong> odwiedzam w Waszym imieniu potencjalne miejsca na uroczystość i eliminuję te, które nie spełniają Waszych wymogów. Zajmuję się również zamówieniami papeterii, dodatków, kreowaniem wizji dekoracji i negocjowaniem jej z wykonawcami usługi. Jeśli zachodzi taka chęć i potrzeba – uczestniczę w przymiarkach sukni ślubnej, garnituru. Sprawdzam umowy z usługodawcami przed podpisaniem ich przez Was,negocjuję ich poprawki oraz spersonalizowaną ofertę.",
    open: false
  }, {
    question: "4. Czy konsultant ślubny współpracuje tylko ze „swoimi” usługodawcami?",
    answer: " To jeden z najczęściej krążących mitów. Owszem, każdy konsultant ślubny tworzy sobie coś na kształt bazy sprawdzonych usługodawców. Takich, z którymi miałam okazję już współpracować i uważam ich za godnych zaufania profesjonalistów. Równolegle jednak cały czas poznaję nowych, nierzadko bazuję na rekomendacjach innych – zawsze jednak za wyznacznik biorę sobie rzetelne podejście do klienta. Dlatego też <u>jestem otwarta na nowe kontakty, nowe pomysły i nowe współprace.</u>",
    open: false
  }, {
    question: "5. Na czym polega koordynacja dnia ślubu?",
    answer: "  Konsultant ślubny osobiście czuwa nad przebiegiem każdego punktu ślubnego harmonogramu. Koordynuje montaż dekoracji, candy baru, rozkłada winietki czy inne elementy na życzenie Pary Młodej. Dzień ślubu to moment na tyle szczególny, że jeśli zabraknie tutaj właśnie trzymania ręki na pulsie przez kogoś doświadczonego – może wkraść się niepotrzebny nikomu chaos. <br />  Istotną informacją jest z całą pewnością fakt, że koordynacja dnia ślubu to również usługa niezależna. Nie musi być integralna z kompleksową organizacją uroczystości. Może zostać wybrana również przez te Pary Młode, które samodzielnie zajmowały się organizacją a na samym finiszu – chcą skupić się już tylko i wyłącznie na emocjach. Dlatego powierzają  zadania zdecydowanie bardziej przyziemne, profesjonalistom.",
    open: false
  }, {
    question: "6. Czy konsultant ślubny jest dla Was na wyłączność w dniu ślubu?",
    answer: "Nie wyobrażam sobie koordynować dwóch uroczystości w jeden dzień – lub nawet w jeden weekend. <u>Daję Wam gwarancję, że w Waszym tygodniu ślubnym, jestem dla Was absolutnie na wyłączność, gotowa do działania na maksymalnych obrotach, w całkowitym skupieniu.</u>",
    open: false
  }, {
    question: "7. Jak wygląda kontakt z konsultantem ślubnym? W jakiej formie odbywa się komunikacja?",
    answer: "To bardzo ważne pytanie. Odpowiedź na nie jest dość niejednoznaczna:<u> to zależy od przyszłych nowożeńców, ich potrzeb i możliwości.</u> Jeśli preferujecie kontakt e-mailowy, uzgodnimy właśnie taką drogę komunikacji. Jeśli zdecydowanie bliższa jest Wam forma telefoniczna – będziemy kontaktować się w ten sposób.",
    open: false
  }, {
    question: "8. Jak wygląda proces podjęcia współpracy z konsultantem ślubnym?",
    answer: "  Najpierw mamy Wasz pierwszy kontakt. Piszecie do mnie wiadomość e-mail, w której opowiadacie o swoich planach i wizjach, o oczekiwaniach i wymogach. Jeśli jest już ustalony termin Waszej ceremonii – podajecie go, dzięki czemu mogę od razu zweryfikować swoją dostępność i przejść do propozycji spotkania zapoznawczego.<br/> W obecnych czasach nieoceniona okazuje się być również forma zdalna, na którą jestem jak najbardziej otwarta. Możemy spotkać się zarówno przy kawie w przyjemnych okolicznościach, jak i przed monitorem – wystarczy, że określicie swoje preferencje. Co najważniejsze: spotkanie jest niezobowiązujące. <br /> Po nim możemy rozmawiać już nieco konkretniej. Przygotuję Wam konkretnie wycenioną ofertę. Jeśli ją zaakceptujecie - w następnej kolejności omawiamy zarówno samą umowę, transze płatności, jak również zarys naszych dalszych działań.</br> Po dopięciu wszelkich formalności z umową – mogę przedstawić gotowy harmonogram organizacji i budżet całego przedsięwzięcia. Dalsza częstotliwość i formy spotkań oraz kontaktu – uzależnione będą od naszych ustaleń w tym temacie.",
    open: false
  }, {
    question: "9. Ile kosztuje usługa konsultanta ślubnego?",
    answer: "Być może Was rozczaruję: tutaj nie ma miejsca na konkretną cenę. <strong>Każda umowa to projekt szyty na miarę.</strong> Zakres moich obowiązków ustalamy wspólnie – to podstawa naszych dalszych działań. Zazwyczaj nie zdarzają się dwie identyczne umowy, tak samo jak nieczęsto powtarzają się dokładnie te same stawki. <br/>Mogę Was zapewnić z tego miejsca, że finalne wynagrodzenie dla mnie – będzie efektem dokładnych wyliczeń tego, co jest do zrobienia oraz Waszych osobistych oczekiwań w stosunku do mnie. <strong>Gwarantuję rzetelność w ocenie tego, ile czasu i pracy zajmie wspólne działanie na Waszą rzecz.</strong> I najważniejsze: zawsze uważnie Was słucham, finalna oferta to efekt rozmów i zrozumienia zarówno Waszych potrzeb, jak i możliwości. Również finansowych.",
    open: false
  }]);

  var toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "faq",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement(react_parallax_lib["Parallax"], {
    bgImage: faq2,
    strength: isMobile ? 100 : 600
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("img")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("inlineStyle")
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("faqTitle")
  }, "ABC PRZYSZ\u0141YCH NOWO\u017BE\u0143C\xD3W"), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("textWrapper")
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("title")
  }, "Co powinni\u015Bcie wiedzie\u0107 na dobry pocz\u0105tek wsp\xF3\u0142pracy z KC Wedding?"), isMobile ? null : /*#__PURE__*/react_default.a.createElement("h3", {
    className: style("description")
  }, "Organizacja \u015Blubu i wesela to ogromna ilo\u015B\u0107 r\xF3\u017Cnych pyta\u0144 i w\u0105tpliwo\u015Bci. Zdecydowanie \u0142atwiej jest przez to przej\u015B\u0107, gdy mamy wsparcie w postaci do\u015Bwiadczenia i merytorycznej wiedzy specjalisty. Takim z ca\u0142\u0105 pewno\u015Bci\u0105 jest w\u0142a\u015Bnie konsultant \u015Blubny. I tutaj r\xF3wnie\u017C nasuwa si\u0119 wiele pyta\u0144. Funkcja konsultanta \u015Blubnego jest wci\u0105\u017C nie do ko\u0144ca oczywista dla wielu os\xF3b."))))), isMobile ? /*#__PURE__*/react_default.a.createElement("h3", {
    className: style("x")
  }, "Organizacja \u015Blubu i wesela to ogromna ilo\u015B\u0107 r\xF3\u017Cnych pyta\u0144 i w\u0105tpliwo\u015Bci. Zdecydowanie \u0142atwiej jest przez to przej\u015B\u0107, gdy mamy wsparcie w postaci do\u015Bwiadczenia i merytorycznej wiedzy specjalisty. Takim z ca\u0142\u0105 pewno\u015Bci\u0105 jest w\u0142a\u015Bnie konsultant \u015Blubny. I tutaj r\xF3wnie\u017C nasuwa si\u0119 wiele pyta\u0144. Funkcja konsultanta \u015Blubnego jest wci\u0105\u017C nie do ko\u0144ca oczywista dla wielu os\xF3b.") : null, /*#__PURE__*/react_default.a.createElement("h3", {
    className: style("x")
  }, "Postanowi\u0142am zebra\u0107 kilka najcz\u0119stszych pyta\u0144, kt\xF3re padaj\u0105 w moim pierwszym kontakcie z przysz\u0142ymi nowo\u017Ce\u0144cami \u2013 i odpowiedzie\u0107 na nie na tyle wyczerpuj\u0105co, \u017Ceby\u015Bcie mieli pe\u0142en obraz sytuacji. Powinno u\u0142atwi\u0107 to Wam decyzj\u0119 o um\xF3wieniu si\u0119 na spotkanie."), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("faqs")
  }, faqs.map((faq, i) => /*#__PURE__*/react_default.a.createElement(Item, {
    faq: faq,
    index: i,
    key: i,
    toggleFAQ: toggleFAQ
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("end")
  }, "Mam nadziej\u0119, \u017Ce najwa\u017Cniejsze w\u0105tpliwo\u015Bci \u2013 zosta\u0142y rozwiane! ", /*#__PURE__*/react_default.a.createElement("br", null), "Czekam teraz na Wasz kontakt."), /*#__PURE__*/react_default.a.createElement(lib["HashLink"], {
    smooth: true,
    to: "/#contact",
    scroll: el => scrollWithOffset(el, 60),
    className: style("nav-links")
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: style("contact")
  }, "Skontatkuj si\u0119 ze mn\u0105!")));
}

/* harmony default export */ var FAQMore = __webpack_exports__["default"] = (FAQ);

/***/ })

}]);