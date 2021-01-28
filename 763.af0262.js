(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[763],{

/***/ 8763:
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
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(7625);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__(1417);
;// CONCATENATED MODULE: ./src/components/Contact/Contact.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Contact_module = ({"contact":"contact","contact__ImgWrapper":"contact__ImgWrapper","contact__image":"contact__image","contact__inlineStyle":"contact__inlineStyle","contact__title":"contact__title","contact__description":"contact__description","contact__input":"contact__input","contact__textarea":"contact__textarea","contact__subBtn":"contact__subBtn","contact__errors":"contact__errors","contact__iconWrapper":"contact__iconWrapper","contact__icon":"contact__icon","fa-envelope":"fa-envelope","fa-phone-alt":"fa-phone-alt","fa-facebook-f":"fa-facebook-f"});
;// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-37.jpg
/* harmony default export */ const Karolina_KCwedding_37 = (__webpack_require__.p + "cefa5a9f705494fed483172bda5c9ade.jpg");
;// CONCATENATED MODULE: ./src/assets/pexels-miguel-á-padriñán-19670.jpg
/* harmony default export */ const pexels_miguel_padri_n_19670 = (__webpack_require__.p + "cb174575dd33a1a6af68e98ce973f54d.jpg");
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
;// CONCATENATED MODULE: ./src/components/Contact/Contact.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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
  var [result, setResult] = (0,react.useState)({});

  var handleOnSubmit = e => {
    e.preventDefault();

    if (!state["name"]) {
      setErrors("Podaj swoje imię");
    } else if (!state["mail"]) {
      setErrors("Podaj swój mail");
    } else if (!state["text"]) {
      setErrors("Wprowadz teks wiadomości");
    } else source/* default.sendForm */.ZP.sendForm("service_f2ixcir", "template_5g2c7io", e.target, "user_ux3gKfqC84EoWJjDiNkqL").then(result => {
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
  }; //  const onFocus =(e)=> {
  //     e.currentTarget.type = "date";
  // },
  // const onBlur = (e)=> {
  //     e.currentTarget.type = "text";
  //     e.currentTarget.placeholder = "Enter a Date";
  // },


  return /*#__PURE__*/react.createElement("section", {
    id: "contact",
    style: {
      backgroundImage: "url(".concat(pexels_miguel_padri_n_19670, ")")
    },
    className: style()
  }, isMobile ? null : /*#__PURE__*/react.createElement("div", {
    className: style("ImgWrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("iconWrapper")
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.facebook.com/kcwedding.konsultantkaslubna/"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_brands_svg_icons_index_es/* faInstagram */.Zzi,
    className: style("icon")
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://www.instagram.com/kc_weddingplanner/"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_brands_svg_icons_index_es/* faInstagram */.Zzi,
    className: style("icon")
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://www.instagram.com/kc_weddingplanner/"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_brands_svg_icons_index_es/* faFacebookSquare */.pZl,
    className: style("icon")
  }))), /*#__PURE__*/react.createElement("img", {
    src: Karolina_KCwedding_37,
    alt: "",
    className: style("image")
  })), /*#__PURE__*/react.createElement("div", {
    className: style("inlineStyle")
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", {
    className: style("title")
  }, "Napisz do mnie"), /*#__PURE__*/react.createElement("h1", {
    className: style("description")
  }, "Um\xF3wimy si\u0119 na kaw\u0119 i om\xF3wimy szczeg\xF3\u0142y")), /*#__PURE__*/react.createElement("form", {
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

/***/ })

}]);