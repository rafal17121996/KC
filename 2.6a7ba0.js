(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(53);
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = __webpack_require__(54);
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"contact":"contact","contact__ImgWrapper":"contact__ImgWrapper","contact__image":"contact__image","contact__inlineStyle":"contact__inlineStyle","contact__title":"contact__title","contact__description":"contact__description","contact__input":"contact__input","contact__textarea":"contact__textarea","contact__subBtn":"contact__subBtn","contact__errors":"contact__errors","contact__iconWrapper":"contact__iconWrapper","contact__icon":"contact__icon","fa-envelope":"fa-envelope","fa-phone-alt":"fa-phone-alt","fa-facebook-f":"fa-facebook-f"};

/***/ }),

/***/ 64:
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

// EXTERNAL MODULE: ./node_modules/emailjs-com/source/index.js
var source = __webpack_require__(52);
var source_default = /*#__PURE__*/__webpack_require__.n(source);

// EXTERNAL MODULE: ./src/components/Contact/Contact.module.scss
var Contact_module = __webpack_require__(55);
var Contact_module_default = /*#__PURE__*/__webpack_require__.n(Contact_module);

// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-37.jpg
/* harmony default export */ var Karolina_KCwedding_37 = (__webpack_require__.p + "1467812d1290e0614dfdf0e7d1c5a52c.jpg");
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/Contact/Contact.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var style = bem_css_modules_default()(Contact_module_default.a);

function Contact() {
  var today = new Date().toISOString().substr(0, 10);
  var {
    isMobile
  } = Object(react["useContext"])(StoreProvider["a" /* StoreContext */]);
  var [state, setState] = Object(react["useState"])({
    name: "",
    mail: "",
    date: today,
    text: ""
  });
  var [errors, setErrors] = Object(react["useState"])("");
  var [result, setResult] = Object(react["useState"])({});

  var handleOnSubmit = e => {
    e.preventDefault();

    if (!state["name"]) {
      setErrors("coś1");
    } else if (!state["mail"]) {
      setErrors("coś1");
    } else if (!state["date"]) {
      setErrors("coś1");
    } else if (!state["text"]) {
      setErrors("coś1");
    } else source_default.a.sendForm("service_f2ixcir", "template_5g2c7io", e.target, "user_ux3gKfqC84EoWJjDiNkqL").then(result => {
      console.log(result.text);
      setState({
        name: "",
        mail: "",
        text: "",
        date: ""
      });
    }, error => {
      console.log(error.text);
    });
  };

  var onInputChange = event => {
    var {
      name,
      value
    } = event.target;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [name]: value
    }));
  };

  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "contact",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("ImgWrapper")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("iconWrapper")
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: style("icon"),
    href: "https://www.facebook.com/kcwedding.konsultantkaslubna/"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-facebook-f"
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: style("icon"),
    href: "https://www.instagram.com/kc_weddingplanner/"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-instagram"
  })), /*#__PURE__*/react_default.a.createElement("a", {
    className: style("icon"),
    href: "https://www.instagram.com/kc_weddingplanner/"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-instagram"
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("inlineStyle")
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("title")
  }, "Napisz do mnie wiadomo\u015B\u0107!"), /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("description")
  }, "Odpowiem najszybciej jak to b\u0119dzie mo\u017Cliwe")), /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: handleOnSubmit
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: style("errors")
  }, errors), /*#__PURE__*/react_default.a.createElement("input", {
    className: style("input"),
    placeholder: "Podaj swoje imi\u0119",
    name: "name",
    type: "text",
    value: state.name,
    onChange: onInputChange
  }), /*#__PURE__*/react_default.a.createElement("input", {
    className: style("input"),
    placeholder: "Podaj sw\xF3j adres e-mail",
    name: "mail",
    type: "email",
    value: state.mail,
    onChange: onInputChange
  }), /*#__PURE__*/react_default.a.createElement("input", {
    className: style("input"),
    placeholder: "Podaj dat\u0119 \u015Blubu",
    name: "date",
    type: "date",
    value: state.date,
    onChange: onInputChange
  }), /*#__PURE__*/react_default.a.createElement("textarea", {
    className: style("textarea"),
    rows: "5",
    name: "text",
    type: "text",
    placeholder: "Podaj tre\u015B\u0107 wiadomo\u015Bci",
    value: state.text,
    onChange: onInputChange
  }), /*#__PURE__*/react_default.a.createElement("button", {
    className: style("subBtn")
  }, "WY\u015ALIJ WIADOMO\u015A\u0106"))));
}

/* harmony default export */ var Contact_Contact = __webpack_exports__["default"] = (Contact);

/***/ })

}]);