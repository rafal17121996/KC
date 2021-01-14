(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11,12],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"FAQWrapper":"FAQWrapper","FAQWrapper__title":"FAQWrapper__title","FAQWrapper__description":"FAQWrapper__description","FAQWrapper__faqs":"FAQWrapper__faqs","FAQWrapper__faq":"FAQWrapper__faq","FAQWrapper__faqopen":"FAQWrapper__faqopen","FAQWrapper__question":"FAQWrapper__question","FAQWrapper__answer":"FAQWrapper__answer"};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bem_css_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FAQ_module_scss__WEBPACK_IMPORTED_MODULE_2__);



var style = bem_css_modules__WEBPACK_IMPORTED_MODULE_1___default()(_FAQ_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

function Item(_ref) {
  var {
    faq,
    index,
    toggleFAQ
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style("faq" + (faq.open ? 'open' : '')),
    key: index,
    onClick: () => toggleFAQ(index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style("question")
  }, faq.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style("answer"),
    dangerouslySetInnerHTML: {
      __html: faq.answer
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

}]);