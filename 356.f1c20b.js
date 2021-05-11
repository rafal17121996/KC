(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[356],{

/***/ 8356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ Contact_Contact
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(8893);
// EXTERNAL MODULE: ./node_modules/emailjs-com/source/index.js
var source = __webpack_require__(3631);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(6358);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(7082);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(7625);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__(1417);
;// CONCATENATED MODULE: ./src/components/Contact/Contact.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Contact_module = ({"contact":"contact","contact__ImgWrapper":"contact__ImgWrapper","contact__image":"contact__image","contact__inlineStyle":"contact__inlineStyle","contact__title":"contact__title","contact__description":"contact__description","contact__input":"contact__input","contact__textarea":"contact__textarea","contact__subBtn":"contact__subBtn","contact__errors":"contact__errors","contact__iconWrapper":"contact__iconWrapper","contact__icon":"contact__icon","fa-envelope":"fa-envelope","fa-phone-alt":"fa-phone-alt","fa-facebook-f":"fa-facebook-f"});
;// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-37.jpg
/* harmony default export */ const Karolina_KCwedding_37 = (__webpack_require__.p + "c3b12ae90f9fbc7f52d883756242ed72.jpg");
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
;// CONCATENATED MODULE: ./src/components/Contact/Contact.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











gsap/* default.registerPlugin */.ZP.registerPlugin(ScrollTrigger/* ScrollTrigger */.i);
var style = (0,bem_css_modules/* default */.Z)(Contact_module);

var Contact = () => {
  var today = new Date().toISOString().substr(0, 10);
  var {
    isMobile
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  var [state, setState] = (0,react.useState)({
    name: "",
    mail: "",
    date: "Podaj datę przyjęcia",
    text: ""
  });
  var [errors, setErrors] = (0,react.useState)("");

  var handleOnSubmit = e => {
    e.preventDefault();

    if (!state["name"]) {
      setErrors("Podaj swoje imię");
    } else if (!state["mail"]) {
      setErrors("Podaj swój mail");
    } else if (!state["text"]) {
      setErrors("Wprowadz teks wiadomości");
    } else source/* default.sendForm */.ZP.sendForm("service_e97bjgc", "template_5g2c7io", e.target, "user_ux3gKfqC84EoWJjDiNkqL").then(result => {
      console.log(result);
      setState({
        name: "",
        mail: "",
        text: "",
        date: ""
      });
      setErrors("Dziękuje za wysłanie wiadomości");
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

  var text = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    gsap/* default.set */.ZP.set([text], {
      autoAlpha: 0
    });
    gsap/* default.fromTo */.ZP.fromTo(text, {
      y: "+=100"
    }, {
      duration: 1,
      y: "-=100",
      ease: "linear",
      autoAlpha: 1,
      scrollTrigger: {
        trigger: text,
        start: "top 85%",
        //when top of herman passes 75% viewport height
        end: "bottom 25%",
        //when bottom of herman passes 25% viewport height
        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play complete complete reverse" //options: play, pause, resume, reset, restart, complete, reverse,none

      }
    });
  }, []);
  return /*#__PURE__*/react.createElement("section", {
    id: "contact",
    className: style()
  }, isMobile ? null : /*#__PURE__*/react.createElement("div", {
    className: style("ImgWrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("iconWrapper")
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.instagram.com/kc_weddingplanner/"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_brands_svg_icons_index_es/* faInstagram */.Zzi,
    className: style("icon")
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://www.facebook.com/kcwedding.konsultantkaslubna/"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_brands_svg_icons_index_es/* faFacebookSquare */.pZl,
    className: style("icon")
  }))), /*#__PURE__*/react.createElement("img", {
    src: Karolina_KCwedding_37,
    alt: "",
    className: style("image")
  })), /*#__PURE__*/react.createElement("div", {
    ref: el => {
      text = el;
    },
    className: style("inlineStyle")
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: style("title")
  }, "Napisz do mnie"), /*#__PURE__*/react.createElement("h1", {
    className: style("description")
  }, "Um\xF3wimy si\u0119 na kaw\u0119 i om\xF3wimy szczeg\xF3\u0142y Twojego przyj\u0119cia")), /*#__PURE__*/react.createElement("form", {
    onSubmit: handleOnSubmit
  }, /*#__PURE__*/react.createElement("h2", {
    className: style("errors")
  }, errors), /*#__PURE__*/react.createElement("input", {
    className: style("input"),
    placeholder: "Podaj swoje imi\u0119",
    name: "name",
    type: "text",
    value: state.name,
    onChange: onInputChange
  }), /*#__PURE__*/react.createElement("input", {
    className: style("input"),
    placeholder: "Podaj sw\xF3j adres e-mail",
    name: "mail",
    type: "email",
    value: state.mail,
    onChange: onInputChange
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    onFocus: e => {
      e.currentTarget.type = "date";
      e.currentTarget.focus();
    },
    className: style("input"),
    placeholder: "Podaj dat\u0119 przyj\u0119cia",
    name: "date",
    value: state.date,
    onChange: onInputChange
  }), /*#__PURE__*/react.createElement("textarea", {
    className: style("textarea"),
    rows: "5",
    name: "text",
    type: "text",
    placeholder: "Opowiedz mi o swoim przyj\u0119ciu",
    value: state.text,
    onChange: onInputChange
  }), /*#__PURE__*/react.createElement("button", {
    className: style("subBtn")
  }, "WY\u015ALIJ WIADOMO\u015A\u0106"))));
};

/* harmony default export */ const Contact_Contact = (Contact);

/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(6848);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = __webpack_require__(378);
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
__webpack_unused_export__ = init;
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
__webpack_unused_export__ = send;
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
__webpack_unused_export__ = sendForm;
exports.ZP = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),

/***/ 6848:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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

/***/ 378:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ })

}]);