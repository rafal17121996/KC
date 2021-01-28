(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 29:
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Div100vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return use100vh; });
/* unused harmony export measureHeight */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", __assign({ style: styleWithRealHeight }, other));
}
function use100vh() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(measureHeight), height = _a[0], setHeight = _a[1];
    var wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), wasRenderedOnClientAtLeastOnce = _a[0], setWasRenderedOnClientAtLeastOnce = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isClient()) {
            setWasRenderedOnClientAtLeastOnce(true);
        }
    }, []);
    return wasRenderedOnClientAtLeastOnce;
}
function isClient() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cards":"cards","cards__popup":"cards__popup","cards__two":"cards__two","cards__border":"cards__border","cards__imgWrapper":"cards__imgWrapper","cards__titlePop":"cards__titlePop","cards__textPop":"cards__textPop","cards__close":"cards__close","cards__popup_background":"cards__popup_background","cards__title":"cards__title","cards__container":"cards__container","cards__wrapper":"cards__wrapper","cards__items":"cards__items","cards__item":"cards__item","cards__item__link":"cards__item__link","cards_clas_item__pic-wrap":"cards_clas_item__pic-wrap","cards__item__img":"cards__item__img","cards__item__info":"cards__item__info","cards__item__text":"cards__item__text"};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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


var InstagramEmbed = /** @class */ (function (_super) {
    __extends(InstagramEmbed, _super);
    function InstagramEmbed(props) {
        var _this = _super.call(this, props) || this;
        _this.request = null;
        // Public
        _this.cancel = function () {
            if (_this.request) {
                _this.request.cancel();
            }
        };
        _this.handleFetchSuccess = function (response) {
            if (_this.props.onSuccess) {
                _this.props.onSuccess(response);
            }
            _this.setState({ html: response.html }, function () {
                window.instgrm.Embeds.process();
                if (_this.props.onAfterRender) {
                    _this.props.onAfterRender();
                }
            });
        };
        _this.handleFetchFailure = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(_this.timer);
            if (_this.props.onFailure) {
                _this.props.onFailure(args);
            }
        };
        _this.createRequestPromise = function (url) {
            var request = {};
            request.promise = new Promise(function (resolve, reject) {
                var promise = fetch(url)
                    .then(function (response) { return response.json(); })
                    .then(function (json) { return resolve(json); })
                    .catch(function (err) { return reject(err); });
                request.cancel = function () { return reject(new Error('Cancelled')); };
                return promise;
            });
            return request;
        };
        _this.state = { html: null };
        return _this;
    }
    InstagramEmbed.prototype.componentDidMount = function () {
        var _this = this;
        if (window.instgrm) {
            this.fetchEmbed(this.getQueryParams(this.props));
        }
        else {
            if (this.props.injectScript && !document.getElementById('react-instagram-embed-script')) {
                this.injectScript();
            }
            this.checkAPI().then(function () {
                _this.fetchEmbed(_this.getQueryParams(_this.props));
            });
        }
    };
    InstagramEmbed.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth, containerTagName = _a.containerTagName;
        if (prevProps.url !== url ||
            prevProps.hideCaption !== hideCaption ||
            prevProps.maxWidth !== maxWidth ||
            prevProps.containerTagName !== containerTagName) {
            this.request.cancel();
            this.fetchEmbed(this.getQueryParams(this.props));
        }
    };
    InstagramEmbed.prototype.componentWillUnmount = function () {
        this.cancel();
    };
    InstagramEmbed.prototype.render = function () {
        var Tag = this.props.containerTagName;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Tag, __assign({}, this.omitComponentProps(), { dangerouslySetInnerHTML: { __html: this.state.html || '' } }));
    };
    InstagramEmbed.prototype.fetchEmbed = function (queryParams) {
        this.request = this.createRequestPromise("https://graph.facebook.com/v8.0/instagram_oembed/?" + queryParams);
        if (this.props.onLoading) {
            this.props.onLoading();
        }
        this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
    };
    InstagramEmbed.prototype.omitComponentProps = function () {
        var _a = this.props, url = _a.url, clientAccessToken = _a.clientAccessToken, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth, containerTagName = _a.containerTagName, onLoading = _a.onLoading, onSuccess = _a.onSuccess, onAfterRender = _a.onAfterRender, onFailure = _a.onFailure, protocol = _a.protocol, injectScript = _a.injectScript, rest = __rest(_a, ["url", "clientAccessToken", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"]);
        return rest;
    };
    InstagramEmbed.prototype.injectScript = function () {
        var protocolToUse = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';
        var s = document.createElement('script');
        s.async = s.defer = true;
        s.src = protocolToUse + "//platform.instagram.com/en_US/embeds.js";
        s.id = 'react-instagram-embed-script';
        var body = document.body;
        if (body) {
            body.appendChild(s);
        }
    };
    InstagramEmbed.prototype.checkAPI = function () {
        var _this = this;
        return new Promise(function (resolve) {
            (function checkAPI(self) {
                self.timer = window.setTimeout(function () {
                    if (window.instgrm) {
                        clearTimeout(self.timer);
                        resolve();
                    }
                    else {
                        checkAPI(self);
                    }
                }, 20);
            })(_this);
        });
    };
    InstagramEmbed.prototype.getQueryParams = function (_a) {
        var url = _a.url, clientAccessToken = _a.clientAccessToken, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth;
        return query_string__WEBPACK_IMPORTED_MODULE_1__["stringify"]({
            url: url,
            access_token: clientAccessToken,
            hidecaption: hideCaption,
            maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
            omitscript: true
        });
    };
    InstagramEmbed.defaultProps = {
        hideCaption: false,
        containerTagName: 'div',
        protocol: 'https:',
        injectScript: true
    };
    return InstagramEmbed;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (InstagramEmbed);


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(45);
var objectAssign = __webpack_require__(13);
var decodeComponent = __webpack_require__(46);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(29);
var bem_css_modules_default = /*#__PURE__*/__webpack_require__.n(bem_css_modules);

// EXTERNAL MODULE: ./src/components/Offer/Offer.module.scss
var Offer_module = __webpack_require__(42);
var Offer_module_default = /*#__PURE__*/__webpack_require__.n(Offer_module);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(14);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(41);

// CONCATENATED MODULE: ./src/components/Offer/subComponent/Popup.jsx






var style = bem_css_modules_default()(Offer_module_default.a);
function Modal(_ref) {
  var {
    img,
    open,
    title,
    text,
    onClose
  } = _ref;
  if (!open) return null;
  var {
    isMobile
  } = Object(react["useContext"])(StoreProvider["a" /* StoreContext */]);
  var escFunction = Object(react["useCallback"])(event => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);
  Object(react["useEffect"])(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return /*#__PURE__*/react_dom_default.a.createPortal( /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("popup_background")
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("popup")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("border")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("imgWrapper")
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: img,
    alt: ""
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("close"),
    onClick: onClose
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("two")
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("titlePop")
  }, title), /*#__PURE__*/react_default.a.createElement("p", {
    className: style("textPop")
  }, text)))), document.getElementById("portal"));
}
// CONCATENATED MODULE: ./src/components/Offer/subComponent/CardItem.jsx





var CardItem_style = bem_css_modules_default()(Offer_module_default.a);

function CardItem(props) {
  var [isOpen, setIsOpen] = Object(react["useState"])(false);
  var clas = props.clsName;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("li", {
    className: CardItem_style("item")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: CardItem_style("item__link")
  }, /*#__PURE__*/react_default.a.createElement("figure", {
    className: CardItem_style({
      clas
    }),
    onClick: () => setIsOpen(true)
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: CardItem_style("item__img"),
    alt: "Travel Image",
    src: props.src
  })), /*#__PURE__*/react_default.a.createElement(Modal, {
    img: props.src2,
    text: props.text,
    title: props.title,
    open: isOpen,
    onClose: () => setIsOpen(false)
  }, props.text), /*#__PURE__*/react_default.a.createElement("div", {
    className: CardItem_style("item__info")
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: CardItem_style("item__text")
  }, props.title)))));
}

/* harmony default export */ var subComponent_CardItem = (CardItem);
// CONCATENATED MODULE: ./src/assets/offer1.jpg
/* harmony default export */ var offer1 = (__webpack_require__.p + "135822b26b7bf1ec85f0ad1a82ce9b81.jpg");
// CONCATENATED MODULE: ./src/assets/16_9.jpg
/* harmony default export */ var _16_9 = (__webpack_require__.p + "7c996d398f4f97db013e7532d01ce4b6.jpg");
// CONCATENATED MODULE: ./src/assets/offer2.jpg
/* harmony default export */ var offer2 = (__webpack_require__.p + "1bc40fe0dd8a789520177281d73289df.jpg");
// CONCATENATED MODULE: ./src/assets/offer3.jpg
/* harmony default export */ var offer3 = (__webpack_require__.p + "fcf1c9a91575e75b4110f814ab456733.jpg");
// CONCATENATED MODULE: ./src/assets/offer4.jpg
/* harmony default export */ var offer4 = (__webpack_require__.p + "dd1c86e615a6ca141addd16468f5a31e.jpg");
// CONCATENATED MODULE: ./src/assets/offer5.jpg
/* harmony default export */ var offer5 = (__webpack_require__.p + "e45b76dc2e4852e2ad51d0f21351e1d9.jpg");
// CONCATENATED MODULE: ./src/assets/offer6.jpg
/* harmony default export */ var offer6 = (__webpack_require__.p + "2911274b52ef12ffd6410b3965e31a4e.jpg");
// EXTERNAL MODULE: ./node_modules/react-instagram-embed/es/index.js
var es = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/Offer/Offer.jsx












var Offer_style = bem_css_modules_default()(Offer_module_default.a);

function Offer() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "offer",
    className: Offer_style()
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: Offer_style("title")
  }, "Czym dok\u0142adnie si\u0119 zajmuj\u0119? ", /*#__PURE__*/react_default.a.createElement("br", null), " Co mog\u0119 dla Was zorganizowa\u0107?"), /*#__PURE__*/react_default.a.createElement("div", {
    className: Offer_style("container")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Offer_style("wrapper")
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: Offer_style("items")
  }, /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: offer1,
    src2: _16_9,
    title: "Kompleksowa organizacja \u015Blubu i wesela.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Kompleksowa organizacja \u015Blubu i wesela. Zajmuj\u0119 si\u0119 organizacj\u0105 uroczysto\u015Bci od\r pierwszych krok\xF3w \u2013 do samej koordynacji dnia \u015Blubu i zako\u0144czenia imprezy. Jestem\r odpowiedzialna za ka\u017Cdy etap przed\u015Blubnych dzia\u0142a\u0144, wsp\xF3\u0142pracuj\u0105c \u015Bci\u015Ble z Par\u0105 M\u0142od\u0105 i\r wybranymi us\u0142ugodawcami. W tym przypadku mo\u017Cecie oddelegowa\u0107 dla mnie znakomit\u0105\r wi\u0119kszo\u015B\u0107 oko\u0142o\u015Blubnych spraw, pozostaj\u0105c spokojni o ich przebieg. Podstaw\u0105 mojej\r pracy jest ramowy bud\u017Cet (zaakceptowany przez Was) oraz szczeg\xF3\u0142owa wizja (ustalana\r wsp\xF3lnie), jak uroczysto\u015B\u0107 ma wygl\u0105da\u0107 i przebiega\u0107."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: offer2,
    src2: _16_9,
    title: "Cz\u0119\u015Bciowa organizacja \u015Blubu i wesela.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Cz\u0119\u015Bciowa organizacja \u015Blubu i wesela. Dotarli\u015Bcie do takiego momentu organizacji\r \u015Blubu, w kt\xF3rym decyzja o zatrudnieniu specjalisty \u2013 okazuje si\u0119 ju\u017C by\u0107 niezb\u0119dn\u0105.\r Powody mog\u0105 by\u0107 r\xF3\u017Cne. Niezale\u017Cnie od nich, pozostaj\u0119 do Waszej dyspozycji i jestem\r gotowa podj\u0105\u0107 si\u0119 kontynuacji Waszych dotychczasowych dzia\u0142a\u0144. Moje wsparcie\r mo\u017Cliwe jest w ka\u017Cdym momencie, niezale\u017Cnie od wyznaczonego terminu uroczysto\u015Bci."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: offer3,
    src2: _16_9,
    title: "Koordynacja dnia \u015Blubu i wesela.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Koordynacja dnia \u015Blubu i wesela. To us\u0142uga zar\xF3wno integralna z us\u0142ug\u0105 organizacji\r \u015Blubu, jak i zupe\u0142nie niezale\u017Cna. Skrojona na Wasz\u0105 miar\u0119, profesjonalna opieka w dniu\r uroczysto\u015Bci. Osobi\u015Bcie czuwam nad przygotowanym scenariuszem i dbam o to, \u017Ceby\r ka\u017Cdy z us\u0142ugodawc\xF3w spisa\u0142 si\u0119 na medal. Jestem wsparciem estetycznym, logistycznym,\r tw\xF3rczym i nierzadko duchowym. Sprawuj\u0119 piecz\u0119 nad wszystkim, co w\xF3wczas tego\r wymaga."
  })), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "cards__items"
  }, /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: offer4,
    src2: _16_9,
    title: "\u015Alub w plenerze. \u015Alub na pla\u017Cy.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "\u015Alub w plenerze. \u015Alub na pla\u017Cy. Organizacja ceremonii \u015Blubnej w plenerze \u2013 jest coraz\r cz\u0119stsz\u0105 praktyk\u0105. Przyszli nowo\u017Ce\u0144cy bardzo cz\u0119sto stawiaj\u0105 na takie rozwi\u0105zanie,\r dokonuj\u0105c coraz bardziej \u015Bmia\u0142ych wybor\xF3w. Jestem zagorza\u0142\u0105 zwolenniczk\u0105\r oryginalnych pomys\u0142\xF3w. Dlatego z przyjemno\u015Bci\u0105 zar\xF3wno zorganizuj\u0119, jak i skoordynuj\u0119\r Wasze za\u015Blubiny w plenerze. Niezale\u017Cnie od tego, jak\u0105 macie wizj\u0119 \u2013 jestem gotowa j\u0105\r wsp\xF3\u0142tworzy\u0107."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: offer5,
    src2: _16_9,
    title: "\u015Alub mi\u0119dzynarodowy.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "\u015Alub mi\u0119dzynarodowy. Doskonale rozumiem, jak wiele pracy mo\u017Ce kosztowa\u0107\r organizacja ceremonii \u015Blubnej, w kt\xF3rej maj\u0105 spotka\u0107 si\u0119 dwie zupe\u0142nie r\xF3\u017Cne kultury.\r Elastyczno\u015B\u0107 i do\u015Bwiadczenie s\u0105 tutaj kluczowe. To naturalne, \u017Ce niezast\u0105pione jest wi\u0119c\r wsparcie profesjonalisty. Wtedy wkraczam ja i zajmuj\u0119 si\u0119 wszystkim tym, czym zaj\u0105\u0107 si\u0119\r trzeba a Wy niekoniecznie mo\u017Cecie."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: offer6,
    src2: _16_9,
    title: "Przyj\u0119cia okoliczno\u015Bciowe.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Przyj\u0119cia okoliczno\u015Bciowe. Ka\u017Cda okazja wymaga odpowiedniej oprawy. Doskonale to\r rozumiem i wspieram! Zajmuj\u0119 si\u0119 r\xF3wnie\u017C kompleksow\u0105 oraz cz\u0119\u015Bciow\u0105 organizacj\u0105\r przyj\u0119\u0107 o charakterze nie\u015Blubnym. Urodziny, wiecz\xF3r panie\u0144ski, komunia, chrzest \u015Bw.,\r jubileusz, baby shower a mo\u017Ce impreza firmowa? Zale\u017Cnie od potrzeb i pomys\u0142\xF3w \u2013\r stworz\u0119 mo\u017Cliwo\u015B\u0107 celebrowania w doskona\u0142ej scenerii."
  })))), /*#__PURE__*/react_default.a.createElement(es["a" /* default */], {
    clientAccessToken: "<appId>|<clientToken>",
    url: "https://instagr.am/p/Zw9o4/",
    maxWidth: 375,
    hideCaption: false,
    containerTagName: "div",
    injectScript: true,
    protocol: "",
    onLoading: () => {},
    onSuccess: () => {},
    onAfterRender: () => {},
    onFailure: () => {}
  }));
}

/* harmony default export */ var Offer_Offer = __webpack_exports__["default"] = (Offer); // import React, { useState } from "react";
// import bemCssModules from "bem-css-modules";
// import CardItem from "./subComponent/CardItem";
// import { default as OfferStyles } from "./Offer.module.scss";
// import img1 from "../../assets/square.jpg";
// import img2 from "../../assets/square.jpg";
// import img3 from "../../assets/square.jpg";
// import img4 from "../../assets/square2.jpg";
// import img5 from "../../assets/square2.jpg";
// import img6 from "../../assets/square2.jpg";
// const style = bemCssModules(OfferStyles);
// function Offer() {
//   return (
//     <div id="offer" className={style()}>
//       <h1 className={style("title")}>
//         Czym dokładnie się zajmuję? <br /> Co mogę dla Was zorganizować?
//       </h1>
//       <div className={style("container")}>
//         <div className={style("wrapper")}>
//           <ul className={style("items")}>
//             <CardItem
//               src={img1}
//               title="Kompleksowa organizacja ślubu i wesela."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Kompleksowa organizacja ślubu i wesela. Zajmuję się organizacją uroczystości od
//               pierwszych kroków – do samej koordynacji dnia ślubu i zakończenia imprezy. Jestem
//               odpowiedzialna za każdy etap przedślubnych działań, współpracując ściśle z Parą Młodą i
//               wybranymi usługodawcami. W tym przypadku możecie oddelegować dla mnie znakomitą
//               większość okołoślubnych spraw, pozostając spokojni o ich przebieg. Podstawą mojej
//               pracy jest ramowy budżet (zaakceptowany przez Was) oraz szczegółowa wizja (ustalana
//               wspólnie), jak uroczystość ma wyglądać i przebiegać."
//             />
//             <CardItem
//               src={img2}
//               title="Częściowa organizacja ślubu i wesela."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Częściowa organizacja ślubu i wesela. Dotarliście do takiego momentu organizacji
//               ślubu, w którym decyzja o zatrudnieniu specjalisty – okazuje się już być niezbędną.
//               Powody mogą być różne. Niezależnie od nich, pozostaję do Waszej dyspozycji i jestem
//               gotowa podjąć się kontynuacji Waszych dotychczasowych działań. Moje wsparcie
//               możliwe jest w każdym momencie, niezależnie od wyznaczonego terminu uroczystości."
//             />
//             <CardItem
//               src={img3}
//               title="Koordynacja dnia ślubu i wesela."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Koordynacja dnia ślubu i wesela. To usługa zarówno integralna z usługą organizacji
//               ślubu, jak i zupełnie niezależna. Skrojona na Waszą miarę, profesjonalna opieka w dniu
//               uroczystości. Osobiście czuwam nad przygotowanym scenariuszem i dbam o to, żeby
//               każdy z usługodawców spisał się na medal. Jestem wsparciem estetycznym, logistycznym,
//               twórczym i nierzadko duchowym. Sprawuję pieczę nad wszystkim, co wówczas tego
//               wymaga."
//             />
//           </ul>
//           <ul className="cards__items">
//             <CardItem
//               src={img4}
//               title="Ślub w plenerze. Ślub na plaży."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Ślub w plenerze. Ślub na plaży. Organizacja ceremonii ślubnej w plenerze – jest coraz
//               częstszą praktyką. Przyszli nowożeńcy bardzo często stawiają na takie rozwiązanie,
//               dokonując coraz bardziej śmiałych wyborów. Jestem zagorzałą zwolenniczką
//               oryginalnych pomysłów. Dlatego z przyjemnością zarówno zorganizuję, jak i skoordynuję
//               Wasze zaślubiny w plenerze. Niezależnie od tego, jaką macie wizję – jestem gotowa ją
//               współtworzyć."
//             />
//             <CardItem
//               src={img5}
//               title="Ślub międzynarodowy."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Ślub międzynarodowy. Doskonale rozumiem, jak wiele pracy może kosztować
//               organizacja ceremonii ślubnej, w której mają spotkać się dwie zupełnie różne kultury.
//               Elastyczność i doświadczenie są tutaj kluczowe. To naturalne, że niezastąpione jest więc
//               wsparcie profesjonalisty. Wtedy wkraczam ja i zajmuję się wszystkim tym, czym zająć się
//               trzeba a Wy niekoniecznie możecie."
//             />
//             <CardItem
//               src={img6}
//               title="Przyjęcia okolicznościowe."
//               path="/"
//               clsName="item__pic-wrap"
//               text="Przyjęcia okolicznościowe. Każda okazja wymaga odpowiedniej oprawy. Doskonale to
//               rozumiem i wspieram! Zajmuję się również kompleksową oraz częściową organizacją
//               przyjęć o charakterze nieślubnym. Urodziny, wieczór panieński, komunia, chrzest św.,
//               jubileusz, baby shower a może impreza firmowa? Zależnie od potrzeb i pomysłów –
//               stworzę możliwość celebrowania w doskonałej scenerii."
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Offer;

/***/ })

}]);