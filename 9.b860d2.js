(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"FAQMoreWrapper":"FAQMoreWrapper","FAQMoreWrapper__imgWrapper":"FAQMoreWrapper__imgWrapper","FAQMoreWrapper__faqTitle":"FAQMoreWrapper__faqTitle","FAQMoreWrapper__image":"FAQMoreWrapper__image","FAQMoreWrapper__title":"FAQMoreWrapper__title","FAQMoreWrapper__description":"FAQMoreWrapper__description","FAQMoreWrapper__faqs":"FAQMoreWrapper__faqs","FAQMoreWrapper__faq":"FAQMoreWrapper__faq","FAQMoreWrapper__faqopen":"FAQMoreWrapper__faqopen","FAQMoreWrapper__question":"FAQMoreWrapper__question","FAQMoreWrapper__answer":"FAQMoreWrapper__answer"};

/***/ }),

/***/ 70:
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

// EXTERNAL MODULE: ./src/components/FAQ/FAQMore.module.scss
var FAQMore_module = __webpack_require__(57);
var FAQMore_module_default = /*#__PURE__*/__webpack_require__.n(FAQMore_module);

// CONCATENATED MODULE: ./src/assets/faq.jpg
/* harmony default export */ var assets_faq = (__webpack_require__.p + "7b5d0bdc489f67bb8103aa4c90a807a0.jpg");
// CONCATENATED MODULE: ./src/components/FAQ/FAQMore.jsx


var Item = /*#__PURE__*/react_default.a.lazy(() => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 42)));


var style = bem_css_modules_default()(FAQMore_module_default.a);

function FAQ() {
  var [faqs, setFaqs] = Object(react["useState"])([{
    question: '1. Dla kogo dedykowana jest usługa konsultanta ślubnego?',
    answer: ' W zasadzie: dla każdego. Nieprawdą jest, że tylko i wyłącznie dla osób zamożnych czy dla tych skrajnie zapracowanych. Konsultant ślubny to odciążenie i wsparcie dla tych z Was, którzy lubią mieć wszystko pod     kontrolą ale niekoniecznie są zorganizowani. Również dla tych, którzy potrzebują merytorycznego wsparcia w tworzeniu swoich wizji. Konsultant ślubny to rozwiązanie idealne, jeśli lubicie czuć się doskonale przygotowani na każdą sytuację. Taka współpraca ma zapewnić Wam błogi spokój, podczas gdy przedślubny harmonogram pęka w szwach. Zdejmuję z Was ciężar skrupulatnego planowania i przewidywania, zdającsię na swoje doświadczenie i wiedzę.',
    open: false
  }, {
    question: '2. Na jakim etapie przedślubnych przygotowań – możecie zdecydować się na wsparcie konsultanta ślubnego?',
    answer: 'Na każdym. Konsultant ślubny zajmuje się organizacją ślubu i/lub wesela – od każdego etapu przygotowań. Możemy podjąć współpracę na samym starcie, rozpoczynając od „zera”. Mogę również otoczyć Was wsparciem i   opieką w nieco późniejszym momencie, gdy uznacie że zaszła taka potrzeba. Np. planujecie ślub i wesele, nie macie jeszcze poczynionych żadnych kroków. Rozpoczynamy współpracę i odtąd prowadzę organizację Waszego dnia od samiutkich podstaw, po drobniutkie detale. Zajmuję się wszystkimi Waszymi sprawami, do samego końca.',
    open: false
  }, {
    question: '3. W czym może wyręczyć Was konsultant ślubny podczas organizacji ślubu?',
    answer: 'Tutaj nie ma jednoznacznej odpowiedzi. Nie istnieje również uniwersalna lista takich spraw czy tematów. Każda Para Młoda to zupełnie odrębny, niepowtarzalny przypadek. Taki przypadek rozpatruję naprawdę mocno indywidualnie, dostosowując potrzebne działania – do sytuacji i ludzi. W skrócie? Zajmuję się wszystkim tym, czym zająć się trzeba – a Wy nie macie czasu, ochoty lub kompetencji.Np. odwiedzam w Waszym imieniu potencjalne miejsca na uroczystość i eliminuję te, które nie spełniają Waszych wymogów. Zajmuję się również zamówieniami papeterii, dodatków, kreowaniem wizji dekoracji i negocjowaniem jej z wykonawcami usługi. Jeśli zachodzi taka chęć i potrzeba – uczestniczę w przymiarkach sukni ślubnej, garnituru. Sprawdzam umowy z usługodawcami przed podpisaniem ich przez Was,negocjuję ich poprawki oraz spersonalizowaną ofertę.',
    open: false
  }, {
    question: '4. Czy konsultant ślubny współpracuje tylko ze „swoimi” usługodawcami?',
    answer: ' To jeden z najczęściej krążących mitów. Owszem, każdy konsultant ślubny tworzy sobie coś na kształt bazy sprawdzonych usługodawców. Takich, z którymi miałam okazję już współpracować i uważam ich za godnych zaufania profesjonalistów. Równolegle jednak cały czas poznaję nowych, nierzadko bazuję na rekomendacjach innych – zawsze jednak za wyznacznik biorę sobie rzetelne podejście do klienta. Dlatego też jestem otwarta na nowe kontakty, nowe pomysły i nowe współprace.',
    open: false
  }, {
    question: '5. Na czym polega koordynacja dnia ślubu?',
    answer: '  Konsultant ślubny osobiście czuwa nad przebiegiem każdego punktu ślubnego harmonogramu. Koordynuje montaż dekoracji, candy baru, rozkłada winietki czy inne elementy na życzenie Pary Młodej. Dzień ślubu to moment na tyle szczególny, że jeśli zabraknie tutaj właśnie trzymania ręki na pulsie przez kogoś doświadczonego – może wkraść się niepotrzebny nikomu chaos. <br />  Istotną informacją jest z całą pewnością fakt, że koordynacja dnia ślubu to również usługa niezależna. Nie musi być integralna z kompleksową organizacją uroczystości. Może zostać wybrana również przez te Pary Młode, które samodzielnie zajmowały się organizacją a na samym finiszu – chcą skupić się już tylko i wyłącznie na emocjach. Dlatego powierzają  zadania zdecydowanie bardziej przyziemne, profesjonalistom.',
    open: false
  }, {
    question: '6. Czy konsultant ślubny jest dla Was na wyłączność w dniu ślubu?',
    answer: 'Nie wyobrażam sobie koordynować dwóch uroczystości w jeden dzień – lub nawet w jeden weekend. Daję Wam gwarancję, że w Waszym tygodniu ślubnym, jestem dla Was absolutnie na wyłączność, gotowa do działania na maksymalnych obrotach, w całkowitym skupieniu.',
    open: false
  }, {
    question: '7. Jak wygląda kontakt z konsultantem ślubnym? W jakiej formie odbywa się komunikacja?',
    answer: 'To bardzo ważne pytanie. Odpowiedź na nie jest dość niejednoznaczna: to zależy od przyszłych nowożeńców, ich potrzeb i możliwości. Jeśli preferujecie kontakt e-mailowy, uzgodnimy właśnie taką drogę komunikacji. Jeśli zdecydowanie bliższa jest Wam forma telefoniczna – będziemy kontaktować się w ten sposób.',
    open: false
  }, {
    question: '8. Jak wygląda proces podjęcia współpracy z konsultantem ślubnym?',
    answer: '  Najpierw mamy Wasz pierwszy kontakt. Piszecie do mnie wiadomość e-mail, w której opowiadacie o swoich planach i wizjach, o oczekiwaniach i wymogach. Jeśli jest już ustalony termin Waszej ceremonii – podajecie go, dzięki czemu mogę od razu zweryfikować swoją dostępność i przejść do propozycji spotkania zapoznawczego. W obecnych czasach nieoceniona okazuje się być również forma zdalna, na którą jestem jak najbardziej otwarta. Możemy spotkać się zarówno przy kawie w przyjemnych okolicznościach, jak i przed monitorem – wystarczy, że określicie swoje preferencje. Co najważniejsze: spotkanie jest niezobowiązujące. <br /> Po nim możemy rozmawiać już nieco konkretniej. Przygotuję Wam konkretnie wycenioną ofertę. Jeśli ją zaakceptujecie - w następnej kolejności omawiamy zarówno samą umowę, transze płatności, jak również zarys naszych dalszych działań. Po dopięciu wszelkich formalności z umową – mogę przedstawić gotowy harmonogram organizacji i budżet całego przedsięwzięcia. Dalsza częstotliwość i formy spotkań oraz kontaktu – uzależnione będą od naszych ustaleń w tym temacie.',
    open: false
  }, {
    question: '9. Ile kosztuje usługa konsultanta ślubnego?',
    answer: '  Być może Was rozczaruję: tutaj nie ma miejsca na konkretną cenę. Każda umowa to projekt szyty na miarę. Zakres moich obowiązków ustalamy wspólnie – to podstawa naszych dalszych działań. Zazwyczaj nie zdarzają się dwie identyczne umowy, tak samo jak nieczęsto powtarzają się dokładnie te same stawki. Mogę Was zapewnić z tego miejsca, że finalne wynagrodzenie dla mnie – będzie efektem dokładnych wyliczeń tego, co jest do zrobienia oraz Waszych osobistych oczekiwań w stosunku do mnie. Gwarantuję rzetelność w ocenie tego, ile czasu i pracy zajmie wspólne działanie na Waszą rzecz. I najważniejsze: zawsze uważnie Was słucham, finalna oferta to efekt rozmów i zrozumienia zarówno Waszych potrzeb, jak i możliwości. Również finansowych. <br /> Mam nadzieję, że najważniejsze wątpliwości – zostały rozwiane! <br /> Czekam teraz na Wasz kontakt. <br />(tutaj wpisz adres e-mail firmowy)',
    open: false
  }]);

  var toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "faq",
    className: style()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: style("imgWrapper")
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: assets_faq,
    alt: "",
    className: style("image")
  }), /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("faqTitle")
  }, "ABC KLIENTA")), /*#__PURE__*/react_default.a.createElement("h1", {
    className: style("title")
  }, "Co powinni\u015Bcie wiedzie\u0107 na dobry pocz\u0105tek wsp\xF3\u0142pracy z KC Wedding?"), /*#__PURE__*/react_default.a.createElement("h3", {
    className: style("description")
  }, "Organizacja \u015Blubu i wesela to ogromna ilo\u015B\u0107 r\xF3\u017Cnych pyta\u0144 i w\u0105tpliwo\u015Bci. Zdecydowanie \u0142atwiej jest przez to przej\u015B\u0107, gdy mamy wsparcie w postaci do\u015Bwiadczenia i merytorycznej wiedzy specjalisty. Takim z ca\u0142\u0105 pewno\u015Bci\u0105 jest w\u0142a\u015Bnie konsultant \u015Blubny. I tutaj r\xF3wnie\u017C nasuwa si\u0119 wiele pyta\u0144. Funkcja konsultanta \u015Blubnego jest wci\u0105\u017C nie do ko\u0144ca oczywista dla wielu os\xF3b. Postanowi\u0142am zebra\u0107 kilka najcz\u0119stszych pyta\u0144, kt\xF3re padaj\u0105 w moim pierwszym kontakcie z przysz\u0142ymi nowo\u017Ce\u0144cami \u2013 i odpowiedzie\u0107 na nie na tyle wyczerpuj\u0105co, \u017Ceby\u015Bcie mieli pe\u0142en obraz sytuacji. Powinno u\u0142atwi\u0107 to Wam decyzj\u0119 o um\xF3wieniu si\u0119 na spotkanie."), /*#__PURE__*/react_default.a.createElement("div", {
    className: style("faqs")
  }, faqs.map((faq, i) => /*#__PURE__*/react_default.a.createElement(Item, {
    faq: faq,
    index: i,
    key: i,
    toggleFAQ: toggleFAQ
  }))));
}

/* harmony default export */ var FAQMore = __webpack_exports__["default"] = (FAQ);

/***/ })

}]);