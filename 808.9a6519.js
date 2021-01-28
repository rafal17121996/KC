(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[808],{

/***/ 9513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var bem_css_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8893);
/* harmony import */ var _FAQ_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5602);



var style = (0,bem_css_modules__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(_FAQ_module_scss__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);

function Item(_ref) {
  var {
    faq,
    index,
    toggleFAQ
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: style("faq" + (faq.open ? 'open' : '')),
    key: index,
    onClick: () => toggleFAQ(index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: style("question")
  }, faq.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: style("answer"),
    dangerouslySetInnerHTML: {
      __html: faq.answer
    }
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ })

}]);