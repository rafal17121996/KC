(self["webpackChunkkarolina"] = self["webpackChunkkarolina"] || []).push([[926],{

/***/ 5926:
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
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(6358);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(7082);
;// CONCATENATED MODULE: ./src/components/AboutMe/AboutMe.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const AboutMe_module = ({"AboutMeWrapper":"AboutMeWrapper","AboutMeWrapper__title":"AboutMeWrapper__title","AboutMeWrapper__wrapper":"AboutMeWrapper__wrapper","AboutMeWrapper__description":"AboutMeWrapper__description","AboutMeWrapper__text1":"AboutMeWrapper__text1","AboutMeWrapper__text2":"AboutMeWrapper__text2","AboutMeWrapper__text3":"AboutMeWrapper__text3","AboutMeWrapper__text4":"AboutMeWrapper__text4","AboutMeWrapper__text5":"AboutMeWrapper__text5","AboutMeWrapper__text6":"AboutMeWrapper__text6","AboutMeWrapper__more":"AboutMeWrapper__more","AboutMeWrapper__imgWrapper":"AboutMeWrapper__imgWrapper","AboutMeWrapper__picture":"AboutMeWrapper__picture"});
;// CONCATENATED MODULE: ./src/assets/Karolina_KCwedding-25.jpg
/* harmony default export */ const Karolina_KCwedding_25 = (__webpack_require__.p + "c93d9afff9ccfb62bc9abee43c8feee1.jpg");
// EXTERNAL MODULE: ./src/store/StoreProvider.jsx
var StoreProvider = __webpack_require__(7567);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
;// CONCATENATED MODULE: ./src/components/AboutMe/AboutMe.jsx








gsap/* default.registerPlugin */.ZP.registerPlugin(ScrollTrigger/* ScrollTrigger */.i);
var style = (0,bem_css_modules/* default */.Z)(AboutMe_module);

var AboutMe = () => {
  var {
    isMobile
  } = (0,react.useContext)(StoreProvider/* StoreContext */.x);
  var text = (0,react.useRef)(null); // let text2 = useRef(null);

  var text3 = (0,react.useRef)(null);
  var text4 = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    gsap/* default.set */.ZP.set([text, text3], {
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
    }); // gsap.fromTo(
    //   text2,
    //   {
    //     y: "+=100",
    //   },
    //   {
    //     duration: 1,
    //     y: "-=100",
    //     ease: "linear",
    //     autoAlpha: 1,
    //     scrollTrigger: {
    //       trigger: text2,
    //       start: "top 85%", //when top of herman passes 75% viewport height
    //       end: "bottom 25%", //when bottom of herman passes 25% viewport height
    //       //events: onEnter onLeave onEnterBack onLeaveBack
    //       toggleActions: "play complete complete reverse",
    //       //options: play, pause, resume, reset, restart, complete, reverse,none
    //     },
    //   }
    // );

    gsap/* default.fromTo */.ZP.fromTo(text3, {
      y: "+=100"
    }, {
      duration: 1,
      y: "-=100",
      ease: "linear",
      autoAlpha: 1,
      scrollTrigger: {
        trigger: text3,
        start: "top 85%",
        //when top of herman passes 75% viewport height
        end: "bottom 25%",
        //when bottom of herman passes 25% viewport height
        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play complete complete reverse" //options: play, pause, resume, reset, restart, complete, reverse,none

      }
    });
    gsap/* default.fromTo */.ZP.fromTo(text4, {
      y: "+=100"
    }, {
      duration: 1,
      y: "-=100",
      ease: "linear",
      autoAlpha: 1,
      scrollTrigger: {
        trigger: text4,
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
    ref: el => {
      text = el;
    },
    className: style("text1")
  }, "Cze\u015B\u0107, nazywam si\u0119 ", /*#__PURE__*/react.createElement("strong", null, "Karolina Chorz\u0119pa."), /*#__PURE__*/react.createElement("br", null), "Jestem Waszym wedding plannerem."), /*#__PURE__*/react.createElement("p", {
    ref: el => {
      text3 = el;
    },
    className: style("text3")
  }, "Doskonale zdaj\u0119 sobie spraw\u0119 z tego, jak czasoch\u0142onnym i emocjonalnym zarazem, jest proces organizacji \u015Blubu i wesela. Z tego zrozumienia oraz z pasji do rozwi\u0105za\u0144 na miar\u0119 moich \u015Blubnych bohater\xF3w \u2013 powsta\u0142a w\u0142a\u015Bnie marka KC Wedding.", " ", /*#__PURE__*/react.createElement("strong", null, "Moim priorytetem jest zapewni\u0107 Wam niczym niezak\u0142\xF3cany spok\xF3j przygotowa\u0144 oraz celebrowania uroczysto\u015Bci \u015Blubnej.")), /*#__PURE__*/react.createElement("p", {
    ref: el => {
      text4 = el;
    },
    className: style("text4")
  }, "Na co dzie\u0144 staram si\u0119 by\u0107 dla Was najlepsz\u0105 organizacyjn\u0105 przyjaci\xF3\u0142k\u0105. Zawsze mo\u017Cecie na mnie liczy\u0107, zwr\xF3ci\u0107 w\u0142a\u015Bnie na mnie swoje spojrzenia i przela\u0107 wszelkie w\u0105tpliwo\u015Bci.", " ", /*#__PURE__*/react.createElement("strong", null, "S\u0142u\u017C\u0119 nie tylko dobr\u0105 rad\u0105, r\xF3wnie\u017C inspiracj\u0105 i do\u015Bwiadczeniem."), " ", "Zapewniam Wam wsparcie w takim stopniu i formie, jakiego potrzebujecie \u2013 by czu\u0107 si\u0119 troskliwie zaopiekowani w ca\u0142ym procesie przed\u015Blubnych powinno\u015Bci."), /*#__PURE__*/react.createElement(react_router_dom.Link, {
    to: "/about"
  }, /*#__PURE__*/react.createElement("button", {
    className: style("more")
  }, "More!")), /*#__PURE__*/react.createElement("p", {
    className: style("text5")
  }, "Kreuj\u0119 rozwi\u0105zania na miar\u0119 Waszych potrzeb estetycznych i organizacyjnych.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("strong", null, "Wspieram w decyzjach, procesach, emocjach.")), /*#__PURE__*/react.createElement("p", {
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

/***/ })

}]);