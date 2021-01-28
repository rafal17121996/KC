(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[346],{

/***/ 5346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ AboutMe_AboutMe
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(8893);
// EXTERNAL MODULE: ./src/components/AboutMe/AboutMe.module.scss
var AboutMe_module = __webpack_require__(5194);
var AboutMe_module_default = /*#__PURE__*/__webpack_require__.n(AboutMe_module);
;// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-25.jpg
/* harmony default export */ const Karolina_KCwedding_25 = (__webpack_require__.p + "a6ddf3bed75cb6161b707deafd28d20c.jpg");
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
;// CONCATENATED MODULE: ./src/components/AboutMe/AboutMe.jsx


 // const AboutMeStyles = React.lazy(() => import("./AboutMe.module.scss"));




var style = (0,bem_css_modules/* default */.Z)((AboutMe_module_default()));

var AboutMe = () => {
  var {
    isMobile
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  return /*#__PURE__*/react.createElement("section", {
    id: "about",
    className: style()
  }, /*#__PURE__*/react.createElement("h1", {
    className: style("title")
  }, "Kto stoi za KC Wedding?"), /*#__PURE__*/react.createElement("div", {
    className: style("wrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("description")
  }, isMobile ? /*#__PURE__*/react.createElement("div", {
    className: style("imgWrapper")
  }, /*#__PURE__*/react.createElement("img", {
    className: style("picture"),
    src: Karolina_KCwedding_25,
    alt: ""
  })) : null, /*#__PURE__*/react.createElement("h2", {
    className: style("text1")
  }, "Cze\u015B\u0107, nazywam si\u0119 ", /*#__PURE__*/react.createElement("strong", null, "Karolina Chorz\u0119pa."), /*#__PURE__*/react.createElement("br", null), "Jestem Waszym wedding plannerem."), /*#__PURE__*/react.createElement("h3", {
    className: style("text2")
  }, "Kreuj\u0119 rozwi\u0105zania na miar\u0119 Waszych potrzeb estetycznych i organizacyjnych. ", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("strong", null, "Wspieram w decyzjach, procesach, emocjach.")), /*#__PURE__*/react.createElement("p", {
    className: style("text3")
  }, "Doskonale zdaj\u0119 sobie spraw\u0119 z tego, jak czasoch\u0142onnym i emocjonalnym zarazem, jest proces organizacji \u015Blubu i wesela. Z tego zrozumienia oraz z pasji do rozwi\u0105za\u0144 na miar\u0119 moich \u015Blubnych bohater\xF3w \u2013 powsta\u0142a w\u0142a\u015Bnie marka KC Wedding. ", /*#__PURE__*/react.createElement("strong", null, "Moim priorytetem jest zapewni\u0107 Wam niczym niezak\u0142\xF3cany spok\xF3j przygotowa\u0144 oraz celebrowania uroczysto\u015Bci \u015Blubnej.")), /*#__PURE__*/react.createElement("p", {
    className: style("text4")
  }, "Na co dzie\u0144 staram si\u0119 by\u0107 dla Was najlepsz\u0105 organizacyjn\u0105 przyjaci\xF3\u0142k\u0105. Zawsze mo\u017Cecie na mnie liczy\u0107, zwr\xF3ci\u0107 w\u0142a\u015Bnie na mnie swoje spojrzenia i przela\u0107 wszelkie w\u0105tpliwo\u015Bci. ", /*#__PURE__*/react.createElement("strong", null, "S\u0142u\u017C\u0119 nie tylko dobr\u0105 rad\u0105, r\xF3wnie\u017C inspiracj\u0105 i do\u015Bwiadczeniem."), " Zapewniam Wam wsparcie w takim stopniu i formie, jakiego potrzebujecie \u2013 by czu\u0107 si\u0119 troskliwie zaopiekowani w ca\u0142ym procesie przed\u015Blubnych powinno\u015Bci."), /*#__PURE__*/react.createElement(react_router_dom.Link, {
    to: "/about"
  }, /*#__PURE__*/react.createElement("button", {
    className: style("more")
  }, "More!")), /*#__PURE__*/react.createElement("p", {
    className: style("text5")
  }, "KC Wedding powsta\u0142o z uwielbienia do naturalnych i niebanalnych rozwi\u0105za\u0144."), /*#__PURE__*/react.createElement("p", {
    className: style("text6")
  }, "Rozgo\u015B\u0107cie si\u0119 i wykreujmy razem co\u015B pi\u0119knego!")), isMobile ? null : /*#__PURE__*/react.createElement("div", {
    className: style("imgWrapper")
  }, /*#__PURE__*/react.createElement("img", {
    className: style("picture"),
    src: Karolina_KCwedding_25,
    alt: ""
  }))));
};

/* harmony default export */ const AboutMe_AboutMe = (AboutMe);

/***/ }),

/***/ 8893:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
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
exports.Z = bem;


/***/ }),

/***/ 5194:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"AboutMeWrapper":"AboutMeWrapper","AboutMeWrapper__title":"AboutMeWrapper__title","AboutMeWrapper__description":"AboutMeWrapper__description","AboutMeWrapper__wrapper":"AboutMeWrapper__wrapper","AboutMeWrapper__text1":"AboutMeWrapper__text1","AboutMeWrapper__text2":"AboutMeWrapper__text2","AboutMeWrapper__text3":"AboutMeWrapper__text3","AboutMeWrapper__text4":"AboutMeWrapper__text4","AboutMeWrapper__text5":"AboutMeWrapper__text5","AboutMeWrapper__text6":"AboutMeWrapper__text6","AboutMeWrapper__more":"AboutMeWrapper__more","AboutMeWrapper__imgWrapper":"AboutMeWrapper__imgWrapper","AboutMeWrapper__picture":"AboutMeWrapper__picture"};

/***/ })

}]);