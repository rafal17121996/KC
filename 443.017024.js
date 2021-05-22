(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[443],{

/***/ 8443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ Offer_Offer
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/bem-css-modules/dist/bem-css-modules.js
var bem_css_modules = __webpack_require__(8893);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(6358);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(7082);
;// CONCATENATED MODULE: ./src/components/Offer/Offer.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Offer_module = ({"cards":"cards","cards__popup":"cards__popup","cards__center":"cards__center","cards__contact":"cards__contact","cards__two":"cards__two","cards__border":"cards__border","cards__imgWrapper":"cards__imgWrapper","cards__titlePop":"cards__titlePop","cards__textPop":"cards__textPop","cards__close":"cards__close","cards__popup_background":"cards__popup_background","cards__title":"cards__title","cards__container":"cards__container","cards__wrapper":"cards__wrapper","cards__items":"cards__items","cards__item":"cards__item","cards__item__link":"cards__item__link","cards_clas_item__pic-wrap":"cards_clas_item__pic-wrap","cards__item__img":"cards__item__img","cards__item__info":"cards__item__info","cards__item__text":"cards__item__text"});
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(6261);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(7625);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(1436);
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(6409);
;// CONCATENATED MODULE: ./src/components/Offer/subComponent/Popup.jsx









var style = (0,bem_css_modules/* default */.Z)(Offer_module);
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
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  var escFunction = (0,react.useCallback)(event => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);
  (0,react.useEffect)(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return /*#__PURE__*/react_dom.createPortal( /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: style("popup_background")
  }), /*#__PURE__*/react.createElement("div", {
    className: style("popup")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("border")
  }, /*#__PURE__*/react.createElement("div", {
    className: style("imgWrapper")
  }, /*#__PURE__*/react.createElement("img", {
    src: img,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: style("close"),
    onClick: onClose
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_solid_svg_icons_index_es/* faTimes */.NBC
  })), /*#__PURE__*/react.createElement("div", {
    className: style("two")
  }, /*#__PURE__*/react.createElement("h1", {
    className: style("titlePop")
  }, title), /*#__PURE__*/react.createElement("div", {
    className: style("textPop")
  }, text)), /*#__PURE__*/react.createElement("div", {
    className: style("center")
  }, /*#__PURE__*/react.createElement(modules/* Link */.rU, {
    smooth: true,
    duration: isMobile ? 0 : 1000,
    to: "contact",
    offset: isMobile ? 0 : -60,
    className: style("nav-links"),
    onClick: onClose
  }, /*#__PURE__*/react.createElement("button", {
    className: style("contact")
  }, "Skontatkuj si\u0119 ze mn\u0105!"))))), document.getElementById("portal"));
}
;// CONCATENATED MODULE: ./src/components/Offer/subComponent/CardItem.jsx





var CardItem_style = (0,bem_css_modules/* default */.Z)(Offer_module);

function CardItem(props) {
  var [isOpen, setIsOpen] = (0,react.useState)(false);
  var clas = props.clsName;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", {
    className: CardItem_style("item")
  }, /*#__PURE__*/react.createElement("div", {
    className: CardItem_style("item__link")
  }, /*#__PURE__*/react.createElement("figure", {
    className: CardItem_style({
      clas
    }),
    onClick: () => setIsOpen(true)
  }, /*#__PURE__*/react.createElement("img", {
    className: CardItem_style("item__img"),
    alt: "Travel Image",
    src: props.src
  })), /*#__PURE__*/react.createElement(Modal, {
    img: props.src2,
    text: props.text,
    title: props.title,
    open: isOpen,
    onClose: () => setIsOpen(false)
  }, props.text), /*#__PURE__*/react.createElement("div", {
    className: CardItem_style("item__info")
  }, /*#__PURE__*/react.createElement("h5", {
    className: CardItem_style("item__text")
  }, props.title)))));
}

/* harmony default export */ const subComponent_CardItem = (CardItem);
;// CONCATENATED MODULE: ./src/assets/1_.jpg
/* harmony default export */ const _1_ = (__webpack_require__.p + "859c69521ab114086f89d7bf8920f88c.jpg");
;// CONCATENATED MODULE: ./src/assets/2_.jpg
/* harmony default export */ const _2_ = (__webpack_require__.p + "025aed6534fe676a3b0f760a3cd7662c.jpg");
;// CONCATENATED MODULE: ./src/assets/3_.jpg
/* harmony default export */ const _3_ = (__webpack_require__.p + "d853d92f690618445b444f4fee3e59ad.jpg");
;// CONCATENATED MODULE: ./src/assets/4_.jpg
/* harmony default export */ const _4_ = (__webpack_require__.p + "4912ff15f6fb6519da6e69c5ceecdbbe.jpg");
;// CONCATENATED MODULE: ./src/assets/5_.jpg
/* harmony default export */ const _5_ = (__webpack_require__.p + "78ee3c5d70952f4fc71b43dd209ee754.jpg");
;// CONCATENATED MODULE: ./src/assets/6_.jpg
/* harmony default export */ const _6_ = (__webpack_require__.p + "89fc3e09a6e0a6e8595b52c20401cac0.jpg");
;// CONCATENATED MODULE: ./src/assets/7_.jpg
/* harmony default export */ const _7_ = (__webpack_require__.p + "bc9877598d335510179c5674b34a6a28.jpg");
;// CONCATENATED MODULE: ./src/assets/offer1.jpg
/* harmony default export */ const offer1 = (__webpack_require__.p + "1b78c25449435a0cdd1f437f1d4fe536.jpg");
;// CONCATENATED MODULE: ./src/assets/offer2.jpg
/* harmony default export */ const offer2 = (__webpack_require__.p + "fb18e9dfa9b29b88ccfb488e1695904e.jpg");
;// CONCATENATED MODULE: ./src/assets/EXP21410.jpg
/* harmony default export */ const EXP21410 = (__webpack_require__.p + "13b8816f998005b88baf8b9de217bd38.jpg");
;// CONCATENATED MODULE: ./src/assets/offer4.jpg
/* harmony default export */ const offer4 = (__webpack_require__.p + "355a7a8c65f858d3e49347f8522f41c8.jpg");
;// CONCATENATED MODULE: ./src/assets/EXP21606.jpg
/* harmony default export */ const EXP21606 = (__webpack_require__.p + "5debcc8355b710fc0e622187ce33922a.jpg");
;// CONCATENATED MODULE: ./src/assets/EXP21351.jpg
/* harmony default export */ const EXP21351 = (__webpack_require__.p + "bd44ac5d92f0f2c6f586bb3c00d9b59f.jpg");
;// CONCATENATED MODULE: ./src/assets/xxx.jpg
/* harmony default export */ const xxx = (__webpack_require__.p + "77225e660a1515ac267fc1afd7a7215d.jpg");
;// CONCATENATED MODULE: ./src/components/Offer/Offer.jsx




















gsap/* default.registerPlugin */.ZP.registerPlugin(ScrollTrigger/* ScrollTrigger */.i);
var Offer_style = (0,bem_css_modules/* default */.Z)(Offer_module);

function Offer() {
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
  return /*#__PURE__*/react.createElement("div", {
    id: "offer",
    className: Offer_style()
  }, /*#__PURE__*/react.createElement("h1", {
    className: Offer_style("title")
  }, "Czym dok\u0142adnie si\u0119 zajmuj\u0119? ", /*#__PURE__*/react.createElement("br", null), " Co mog\u0119 dla Was zorganizowa\u0107?"), /*#__PURE__*/react.createElement("div", {
    ref: el => {
      text = el;
    },
    className: Offer_style("container")
  }, /*#__PURE__*/react.createElement("div", {
    className: Offer_style("wrapper")
  }, /*#__PURE__*/react.createElement("ul", {
    className: Offer_style("items")
  }, /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: offer1,
    src2: _1_,
    title: "Kompleksowa organizacja \u015Blubu i wesela",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Kompleksowa organizacja \u015Blubu i wesela. Zajmuj\u0119 si\u0119 organizacj\u0105 uroczysto\u015Bci od\r pierwszych krok\xF3w \u2013 do samej koordynacji dnia \u015Blubu i zako\u0144czenia imprezy. Jestem\r odpowiedzialna za ka\u017Cdy etap przed\u015Blubnych dzia\u0142a\u0144, wsp\xF3\u0142pracuj\u0105c \u015Bci\u015Ble z Par\u0105 M\u0142od\u0105 i\r wybranymi us\u0142ugodawcami. W tym przypadku mo\u017Cecie oddelegowa\u0107 dla mnie znakomit\u0105\r wi\u0119kszo\u015B\u0107 oko\u0142o\u015Blubnych spraw, pozostaj\u0105c spokojni o ich przebieg. Podstaw\u0105 mojej\r pracy jest ramowy bud\u017Cet (zaakceptowany przez Was) oraz szczeg\xF3\u0142owa wizja (ustalana\r wsp\xF3lnie), jak uroczysto\u015B\u0107 ma wygl\u0105da\u0107 i przebiega\u0107."
  }), /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: offer2,
    src2: _2_,
    title: "Cz\u0119\u015Bciowa organizacja \u015Blubu i wesela",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Cz\u0119\u015Bciowa organizacja \u015Blubu i wesela. Dotarli\u015Bcie do takiego momentu organizacji\r \u015Blubu, w kt\xF3rym decyzja o zatrudnieniu specjalisty \u2013 okazuje si\u0119 ju\u017C by\u0107 niezb\u0119dn\u0105.\r Powody mog\u0105 by\u0107 r\xF3\u017Cne. Niezale\u017Cnie od nich, pozostaj\u0119 do Waszej dyspozycji i jestem\r gotowa podj\u0105\u0107 si\u0119 kontynuacji Waszych dotychczasowych dzia\u0142a\u0144. Moje wsparcie\r mo\u017Cliwe jest w ka\u017Cdym momencie, niezale\u017Cnie od wyznaczonego terminu uroczysto\u015Bci."
  }), /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: EXP21410,
    src2: _3_,
    title: "Koordynacja dnia \u015Blubu i wesela",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Koordynacja dnia \u015Blubu i wesela. To us\u0142uga zar\xF3wno integralna z us\u0142ug\u0105 organizacji\r \u015Blubu, jak i zupe\u0142nie niezale\u017Cna. Skrojona na Wasz\u0105 miar\u0119, profesjonalna opieka w dniu\r uroczysto\u015Bci. Osobi\u015Bcie czuwam nad przygotowanym scenariuszem i dbam o to, \u017Ceby\r ka\u017Cdy z us\u0142ugodawc\xF3w spisa\u0142 si\u0119 na medal. Jestem wsparciem estetycznym, logistycznym,\r tw\xF3rczym i nierzadko duchowym. Sprawuj\u0119 piecz\u0119 nad wszystkim, co w\xF3wczas tego\r wymaga."
  })), /*#__PURE__*/react.createElement("ul", {
    className: "cards__items"
  }, /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: offer4,
    src2: _4_,
    title: "\u015Alub w plenerze. \u015Alub na pla\u017Cy",
    path: "/",
    clsName: "item__pic-wrap",
    text: "\u015Alub w plenerze. \u015Alub na pla\u017Cy. Organizacja ceremonii \u015Blubnej w plenerze \u2013 jest coraz\r cz\u0119stsz\u0105 praktyk\u0105. Przyszli nowo\u017Ce\u0144cy bardzo cz\u0119sto stawiaj\u0105 na takie rozwi\u0105zanie,\r dokonuj\u0105c coraz bardziej \u015Bmia\u0142ych wybor\xF3w. Jestem zagorza\u0142\u0105 zwolenniczk\u0105\r oryginalnych pomys\u0142\xF3w. Dlatego z przyjemno\u015Bci\u0105 zar\xF3wno zorganizuj\u0119, jak i skoordynuj\u0119\r Wasze za\u015Blubiny w plenerze. Niezale\u017Cnie od tego, jak\u0105 macie wizj\u0119 \u2013 jestem gotowa j\u0105\r wsp\xF3\u0142tworzy\u0107."
  }), /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: EXP21606,
    src2: _5_,
    title: "\u015Alub mi\u0119dzynarodowy",
    path: "/",
    clsName: "item__pic-wrap",
    text: "\u015Alub mi\u0119dzynarodowy. Doskonale rozumiem, jak wiele pracy mo\u017Ce kosztowa\u0107\r organizacja ceremonii \u015Blubnej, w kt\xF3rej maj\u0105 spotka\u0107 si\u0119 dwie zupe\u0142nie r\xF3\u017Cne kultury.\r Elastyczno\u015B\u0107 i do\u015Bwiadczenie s\u0105 tutaj kluczowe. To naturalne, \u017Ce niezast\u0105pione jest wi\u0119c\r wsparcie profesjonalisty. Wtedy wkraczam ja i zajmuj\u0119 si\u0119 wszystkim tym, czym zaj\u0105\u0107 si\u0119\r trzeba a Wy niekoniecznie mo\u017Cecie."
  }), /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: EXP21351,
    src2: _6_,
    title: "Przyj\u0119cia okoliczno\u015Bciowe",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Przyj\u0119cia okoliczno\u015Bciowe. Ka\u017Cda okazja wymaga odpowiedniej oprawy. Doskonale to\r rozumiem i wspieram! Zajmuj\u0119 si\u0119 r\xF3wnie\u017C kompleksow\u0105 oraz cz\u0119\u015Bciow\u0105 organizacj\u0105\r przyj\u0119\u0107 o charakterze nie\u015Blubnym. Urodziny, wiecz\xF3r panie\u0144ski, komunia, chrzest \u015Bw.,\r jubileusz, baby shower a mo\u017Ce impreza firmowa? Zale\u017Cnie od potrzeb i pomys\u0142\xF3w \u2013\r stworz\u0119 mo\u017Cliwo\u015B\u0107 celebrowania w doskona\u0142ej scenerii."
  }), /*#__PURE__*/react.createElement(subComponent_CardItem, {
    src: xxx,
    src2: _7_,
    title: " Konsultacje \u015Alubne",
    path: "/",
    clsName: "item__pic-wrap",
    text: "Organizacja \u015Blubu i wesela to ogromna ilo\u015B\u0107 r\xF3\u017Cnych pyta\u0144 i w\u0105tpliwo\u015Bci. Zdecydowanie \u0142atwiej jest przez to przej\u015B\u0107, gdy mamy wsparcie w postaci do\u015Bwiadczenia i merytorycznej wiedzy specjalisty. Nie wiecie od czego zacz\u0105\u0107? Macie jakie\u015B w\u0105tpliwo\u015Bci? Zapraszam Was na konsultacje \u015Blubne. Podczas nich postaram si\u0119 odpowiedzie\u0107 na Wasze wszystkie pytania."
  })))));
}

/* harmony default export */ const Offer_Offer = (Offer);

/***/ })

}]);