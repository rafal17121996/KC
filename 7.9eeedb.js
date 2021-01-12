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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cards":"cards","cards__popup":"cards__popup","cards__close":"cards__close","cards__popup_background":"cards__popup_background","cards__title":"cards__title","cards__container":"cards__container","cards__wrapper":"cards__wrapper","cards__items":"cards__items","cards__item":"cards__item","cards__item__link":"cards__item__link","cards_clas_item__pic-wrap":"cards_clas_item__pic-wrap","cards_clas_item__pic-wrapp":"cards_clas_item__pic-wrapp","cards__item__img":"cards__item__img","cards__item__info":"cards__item__info","cards__item__text":"cards__item__text"};

/***/ }),

/***/ 62:
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

// EXTERNAL MODULE: ./src/components/Offer/Offer.module.scss
var Offer_module = __webpack_require__(36);
var Offer_module_default = /*#__PURE__*/__webpack_require__.n(Offer_module);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(12);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./src/components/Offer/subComponent/Popup.jsx




var style = bem_css_modules_default()(Offer_module_default.a);
function Modal(_ref) {
  var {
    open,
    children,
    onClose
  } = _ref;
  if (!open) return null;
  return /*#__PURE__*/react_dom_default.a.createPortal( /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("popup_background")
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("popup")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("close"),
    onClick: onClose
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-times"
  })), children)), document.getElementById('portal'));
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
  })), /*#__PURE__*/react_default.a.createElement("button", {
    onClick: () => setIsOpen(true)
  }, "Poka\u017C wi\u0119cej informacji"), /*#__PURE__*/react_default.a.createElement(Modal, {
    open: isOpen,
    onClose: () => setIsOpen(false)
  }, props.text), /*#__PURE__*/react_default.a.createElement("div", {
    className: CardItem_style("item__info")
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: CardItem_style("item__text")
  }, props.title)))));
}

/* harmony default export */ var subComponent_CardItem = (CardItem);
// CONCATENATED MODULE: ./src/assets/square.jpg
/* harmony default export */ var square = (__webpack_require__.p + "b496cd542bee62a7bdcddda7f4308d14.jpg");
// CONCATENATED MODULE: ./src/assets/square2.jpg
/* harmony default export */ var square2 = (__webpack_require__.p + "e45b76dc2e4852e2ad51d0f21351e1d9.jpg");
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
    src: square,
    title: "Kompleksowa organizacja \u015Blubu i wesela.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Kompleksowa organizacja \u015Blubu i wesela. Zajmuj\u0119 si\u0119 organizacj\u0105 uroczysto\u015Bci od\r pierwszych krok\xF3w \u2013 do samej koordynacji dnia \u015Blubu i zako\u0144czenia imprezy. Jestem\r odpowiedzialna za ka\u017Cdy etap przed\u015Blubnych dzia\u0142a\u0144, wsp\xF3\u0142pracuj\u0105c \u015Bci\u015Ble z Par\u0105 M\u0142od\u0105 i\r wybranymi us\u0142ugodawcami. W tym przypadku mo\u017Cecie oddelegowa\u0107 dla mnie znakomit\u0105\r wi\u0119kszo\u015B\u0107 oko\u0142o\u015Blubnych spraw, pozostaj\u0105c spokojni o ich przebieg. Podstaw\u0105 mojej\r pracy jest ramowy bud\u017Cet (zaakceptowany przez Was) oraz szczeg\xF3\u0142owa wizja (ustalana\r wsp\xF3lnie), jak uroczysto\u015B\u0107 ma wygl\u0105da\u0107 i przebiega\u0107."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: square,
    title: "Cz\u0119\u015Bciowa organizacja \u015Blubu i wesela.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Cz\u0119\u015Bciowa organizacja \u015Blubu i wesela. Dotarli\u015Bcie do takiego momentu organizacji\r \u015Blubu, w kt\xF3rym decyzja o zatrudnieniu specjalisty \u2013 okazuje si\u0119 ju\u017C by\u0107 niezb\u0119dn\u0105.\r Powody mog\u0105 by\u0107 r\xF3\u017Cne. Niezale\u017Cnie od nich, pozostaj\u0119 do Waszej dyspozycji i jestem\r gotowa podj\u0105\u0107 si\u0119 kontynuacji Waszych dotychczasowych dzia\u0142a\u0144. Moje wsparcie\r mo\u017Cliwe jest w ka\u017Cdym momencie, niezale\u017Cnie od wyznaczonego terminu uroczysto\u015Bci."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: square,
    title: "Koordynacja dnia \u015Blubu i wesela.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Koordynacja dnia \u015Blubu i wesela. To us\u0142uga zar\xF3wno integralna z us\u0142ug\u0105 organizacji\r \u015Blubu, jak i zupe\u0142nie niezale\u017Cna. Skrojona na Wasz\u0105 miar\u0119, profesjonalna opieka w dniu\r uroczysto\u015Bci. Osobi\u015Bcie czuwam nad przygotowanym scenariuszem i dbam o to, \u017Ceby\r ka\u017Cdy z us\u0142ugodawc\xF3w spisa\u0142 si\u0119 na medal. Jestem wsparciem estetycznym, logistycznym,\r tw\xF3rczym i nierzadko duchowym. Sprawuj\u0119 piecz\u0119 nad wszystkim, co w\xF3wczas tego\r wymaga."
  })), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "cards__items"
  }, /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: square2,
    title: "\u015Alub w plenerze. \u015Alub na pla\u017Cy.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "\u015Alub w plenerze. \u015Alub na pla\u017Cy. Organizacja ceremonii \u015Blubnej w plenerze \u2013 jest coraz\r cz\u0119stsz\u0105 praktyk\u0105. Przyszli nowo\u017Ce\u0144cy bardzo cz\u0119sto stawiaj\u0105 na takie rozwi\u0105zanie,\r dokonuj\u0105c coraz bardziej \u015Bmia\u0142ych wybor\xF3w. Jestem zagorza\u0142\u0105 zwolenniczk\u0105\r oryginalnych pomys\u0142\xF3w. Dlatego z przyjemno\u015Bci\u0105 zar\xF3wno zorganizuj\u0119, jak i skoordynuj\u0119\r Wasze za\u015Blubiny w plenerze. Niezale\u017Cnie od tego, jak\u0105 macie wizj\u0119 \u2013 jestem gotowa j\u0105\r wsp\xF3\u0142tworzy\u0107."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: square2,
    title: "\u015Alub mi\u0119dzynarodowy.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "\u015Alub mi\u0119dzynarodowy. Doskonale rozumiem, jak wiele pracy mo\u017Ce kosztowa\u0107\r organizacja ceremonii \u015Blubnej, w kt\xF3rej maj\u0105 spotka\u0107 si\u0119 dwie zupe\u0142nie r\xF3\u017Cne kultury.\r Elastyczno\u015B\u0107 i do\u015Bwiadczenie s\u0105 tutaj kluczowe. To naturalne, \u017Ce niezast\u0105pione jest wi\u0119c\r wsparcie profesjonalisty. Wtedy wkraczam ja i zajmuj\u0119 si\u0119 wszystkim tym, czym zaj\u0105\u0107 si\u0119\r trzeba a Wy niekoniecznie mo\u017Cecie."
  }), /*#__PURE__*/react_default.a.createElement(subComponent_CardItem, {
    src: square2,
    title: "Przyj\u0119cia okoliczno\u015Bciowe.",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Przyj\u0119cia okoliczno\u015Bciowe. Ka\u017Cda okazja wymaga odpowiedniej oprawy. Doskonale to\r rozumiem i wspieram! Zajmuj\u0119 si\u0119 r\xF3wnie\u017C kompleksow\u0105 oraz cz\u0119\u015Bciow\u0105 organizacj\u0105\r przyj\u0119\u0107 o charakterze nie\u015Blubnym. Urodziny, wiecz\xF3r panie\u0144ski, komunia, chrzest \u015Bw.,\r jubileusz, baby shower a mo\u017Ce impreza firmowa? Zale\u017Cnie od potrzeb i pomys\u0142\xF3w \u2013\r stworz\u0119 mo\u017Cliwo\u015B\u0107 celebrowania w doskona\u0142ej scenerii."
  })))));
}

/* harmony default export */ var Offer_Offer = __webpack_exports__["default"] = (Offer);

/***/ })

}]);