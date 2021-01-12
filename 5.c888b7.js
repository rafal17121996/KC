(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"AboutMeWrapper":"AboutMeWrapper","AboutMeWrapper__title":"AboutMeWrapper__title","AboutMeWrapper__wrapper":"AboutMeWrapper__wrapper","AboutMeWrapper__top":"AboutMeWrapper__top","AboutMeWrapper__bottom":"AboutMeWrapper__bottom","AboutMeWrapper__description":"AboutMeWrapper__description","AboutMeWrapper__picture":"AboutMeWrapper__picture","AboutMeWrapper__scroll-button":"AboutMeWrapper__scroll-button","fa-chevron-circle-down":"fa-chevron-circle-down"};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AboutMe; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(28);
var bem_css_modules_default = /*#__PURE__*/__webpack_require__.n(bem_css_modules);

// EXTERNAL MODULE: ./src/components/AboutMe/AboutMe.module.scss
var AboutMe_module = __webpack_require__(51);
var AboutMe_module_default = /*#__PURE__*/__webpack_require__.n(AboutMe_module);

// CONCATENATED MODULE: ./src/assets/pexels-miguel-á-padriñán-19670.jpg
/* harmony default export */ var pexels_miguel_padri_n_19670 = (__webpack_require__.p + "6067a705ad5a2b5c8e1acafa609759f3.jpg");
// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-25.jpg
/* harmony default export */ var Karolina_KCwedding_25 = (__webpack_require__.p + "ecf90290dcf6f7647dea3e111fef5968.jpg");
// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-53.jpg
/* harmony default export */ var Karolina_KCwedding_53 = (__webpack_require__.p + "3eeeaf8fb955c6b0c960066a6f7dc37d.jpg");
// CONCATENATED MODULE: ./src/components/AboutMe/AboutMe.jsx






var style = bem_css_modules_default()(AboutMe_module_default.a);
function AboutMe() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "about",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("title")
  }, "Kto stoi za KC Wedding?"), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("wrapper")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("top")
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: style("description")
  }, "Cze\u015B\u0107! Nazywam si\u0119 Karolina Chorz\u0119pa i witam Was serdecznie w moich internetowych zorganizowanych progach, jak na dobrego gospodarza przysta\u0142o. Chocia\u017C zdecydowanie bardziej wol\u0119 okre\u015Blenie: jak na dobr\u0105 przyjaci\xF3\u0142k\u0119 przysta\u0142o. Bo w\u0142a\u015Bnie tak najcz\u0119\u015Bciej si\u0119 czuj\u0119, kiedy to Wy zapraszacie mnie do swojej historii. Jedynej w swoim rodzaju. W Waszym stylu. ", /*#__PURE__*/react_default.a.createElement("br", null), "Jestem absolwentk\u0105 Akademii Wychowania Fizycznego w Poznaniu oraz w Warszawie. Zaskakuj\u0105cy pocz\u0105tek drogi konsultantki \u015Blubnej, prawda? Turystyka i rekreacja to nie tylko moje wykszta\u0142cenie kierunkowe, to r\xF3wnie\u017C inspiruj\u0105cy pocz\u0105tek historii KC Wedding. Na studiach pojawi\u0142 si\u0119 przedmiot organizacji imprez, r\xF3wnolegle w moim \u017Cyciu osobistym wydarzy\u0107 si\u0119 mia\u0142y za\u015Blubiny bliskiej kuzynki. Wsparcie w tej organizacji \u2013 da\u0142o mi jasny sygna\u0142 do dalszych dzia\u0142a\u0144.", /*#__PURE__*/react_default.a.createElement("br", null)), /*#__PURE__*/react_default.a.createElement("img", {
    className: style("picture"),
    src: Karolina_KCwedding_53,
    alt: ""
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("bottom")
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: style("picture"),
    src: Karolina_KCwedding_25,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: style("description")
  }, "Kurs na wedding plannera w Akademii Wytw\xF3rni \u015Alub\xF3w Agnieszki Kudeli, oficjalnie przypiecz\u0119towa\u0142 decyzj\u0119 o dok\u0142adnie takiej drodze zawodowej. W mi\u0119dzyczasie kompleksowa organizacja w\u0142asnej uroczysto\u015Bci \u2013 udowodni\u0142a mi dodatkowo, \u017Ce jestem do tego stworzona. Dobry plan, doskona\u0142a realizacja, namacalne efekty. Czyli wszystko to, co stanowi podstaw\u0119 w codziennej pracy konsultantki \u015Blubnej.", /*#__PURE__*/react_default.a.createElement("br", null), "Prywatnie uwielbiam taniec, swego czasu zajmowa\u0142am si\u0119 tym profesjonalnie. Kontuzja jednak nie pozwoli\u0142a na kontynuacj\u0119. Uwielbiam te\u017C prac\u0119 z dzie\u0107mi i mam w niej sporo do\u015Bwiadczenia, dzi\u0119ki czemu z entuzjazmem podchodz\u0119 do ma\u0142ych go\u015Bci weselnych. Co jeszcze? Nad wyraz ceni\u0119 sobie polskie morze, st\u0105d te\u017C \u015Bluby na pla\u017Cy w ofercie KC Wedding.", /*#__PURE__*/react_default.a.createElement("br", null), "Mog\u0142abym opowiada\u0107 o sobie wci\u0105\u017C i wci\u0105\u017C, jestem jednak zdecydowanie lepszym s\u0142uchaczem. Z przyjemno\u015Bci\u0105 o Was pos\u0142ucham. Przy kawie lub przy herbacie \u2013 jak wolicie? KC Wedding powsta\u0142o z uwielbienia do naturalnych i niebanalnych rozwi\u0105za\u0144."))));
}

/***/ })

}]);