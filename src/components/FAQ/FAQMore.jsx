import React, { useState } from "react";
import bemCssModules from "bem-css-modules";
const Item = React.lazy(() => import("../FAQ/Item"));
import { HashLink as Link } from 'react-router-hash-link';

import { default as FAQMoreStyles } from "./FAQMore.module.scss";
import img from "../../assets/faq2.jpg";
import { Parallax } from "react-parallax";

const style = bemCssModules(FAQMoreStyles);

function FAQ() {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })}


  const [faqs, setFaqs] = useState([
    {
      question: "1. Dla kogo dedykowana jest usługa konsultanta ślubnego?",
      answer:
        "<strong>W zasadzie: dla każdego. </strong> Nieprawdą jest, że tylko i wyłącznie dla osób zamożnych czy dla tych skrajnie zapracowanych. Konsultant ślubny to <strong>odciążenie i wsparcie dla tych z Was, którzy lubią mieć wszystko pod kontrolą</strong> ale niekoniecznie są zorganizowani. Również dla tych, <strong>którzy potrzebują merytorycznego wsparcia w tworzeniu swoich wizji.</strong/><br/> Konsultant ślubny to rozwiązanie idealne, jeśli lubicie czuć się doskonale przygotowani na każdą sytuację. Taka współpraca ma zapewnić Wam błogi spokój, podczas gdy przedślubny harmonogram pęka w szwach. <strong>Zdejmuję z Was ciężar skrupulatnego planowania i przewidywania, zdającsię na swoje doświadczenie i wiedzę.</strong>",
      open: false,
    },
    {
      question:
        "2. Na jakim etapie przedślubnych przygotowań – możecie zdecydować się na wsparcie konsultanta ślubnego?",
      answer:
        "Na każdym.<u> Konsultant ślubny zajmuje się organizacją ślubu i/lub wesela – od każdego etapu przygotowań.</u> Możemy podjąć współpracę na samym starcie, rozpoczynając od „zera”. Mogę również otoczyć Was wsparciem i   opieką w nieco późniejszym momencie, gdy uznacie że zaszła taka potrzeba.<br/> <strong>Np.</strong> planujecie ślub i wesele, nie macie jeszcze poczynionych żadnych kroków. Rozpoczynamy współpracę i odtąd prowadzę organizację Waszego dnia od samiutkich podstaw, po drobniutkie detale. Zajmuję się wszystkimi Waszymi sprawami, do samego końca.",
      open: false,
    },
    {
      question:
        "3. W czym może wyręczyć Was konsultant ślubny podczas organizacji ślubu?",
      answer:
        "Tutaj nie ma jednoznacznej odpowiedzi. Nie istnieje również uniwersalna lista takich spraw czy tematów. Każda Para Młoda to zupełnie odrębny, niepowtarzalny przypadek. <u>Taki przypadek rozpatruję naprawdę mocno indywidualnie, dostosowując potrzebne działania – do sytuacji i ludzi.</u> W skrócie? Zajmuję się wszystkim tym, czym zająć się trzeba – a Wy nie macie czasu, ochoty lub kompetencji.<br/><strong>Np.</strong> odwiedzam w Waszym imieniu potencjalne miejsca na uroczystość i eliminuję te, które nie spełniają Waszych wymogów. Zajmuję się również zamówieniami papeterii, dodatków, kreowaniem wizji dekoracji i negocjowaniem jej z wykonawcami usługi. Jeśli zachodzi taka chęć i potrzeba – uczestniczę w przymiarkach sukni ślubnej, garnituru. Sprawdzam umowy z usługodawcami przed podpisaniem ich przez Was,negocjuję ich poprawki oraz spersonalizowaną ofertę.",
      open: false,
    },
    {
      question:
        "4. Czy konsultant ślubny współpracuje tylko ze „swoimi” usługodawcami?",
      answer:
        " To jeden z najczęściej krążących mitów. Owszem, każdy konsultant ślubny tworzy sobie coś na kształt bazy sprawdzonych usługodawców. Takich, z którymi miałam okazję już współpracować i uważam ich za godnych zaufania profesjonalistów. Równolegle jednak cały czas poznaję nowych, nierzadko bazuję na rekomendacjach innych – zawsze jednak za wyznacznik biorę sobie rzetelne podejście do klienta. Dlatego też <u>jestem otwarta na nowe kontakty, nowe pomysły i nowe współprace.</u>",
      open: false,
    },
    {
      question: "5. Na czym polega koordynacja dnia ślubu?",
      answer:
        "  Konsultant ślubny osobiście czuwa nad przebiegiem każdego punktu ślubnego harmonogramu. Koordynuje montaż dekoracji, candy baru, rozkłada winietki czy inne elementy na życzenie Pary Młodej. Dzień ślubu to moment na tyle szczególny, że jeśli zabraknie tutaj właśnie trzymania ręki na pulsie przez kogoś doświadczonego – może wkraść się niepotrzebny nikomu chaos. <br />  Istotną informacją jest z całą pewnością fakt, że koordynacja dnia ślubu to również usługa niezależna. Nie musi być integralna z kompleksową organizacją uroczystości. Może zostać wybrana również przez te Pary Młode, które samodzielnie zajmowały się organizacją a na samym finiszu – chcą skupić się już tylko i wyłącznie na emocjach. Dlatego powierzają  zadania zdecydowanie bardziej przyziemne, profesjonalistom.",
      open: false,
    },
    {
      question:
        "6. Czy konsultant ślubny jest dla Was na wyłączność w dniu ślubu?",
      answer:
        "Nie wyobrażam sobie koordynować dwóch uroczystości w jeden dzień – lub nawet w jeden weekend. <u>Daję Wam gwarancję, że w Waszym tygodniu ślubnym, jestem dla Was absolutnie na wyłączność, gotowa do działania na maksymalnych obrotach, w całkowitym skupieniu.</u>",
      open: false,
    },
    {
      question:
        "7. Jak wygląda kontakt z konsultantem ślubnym? W jakiej formie odbywa się komunikacja?",
      answer:
        "To bardzo ważne pytanie. Odpowiedź na nie jest dość niejednoznaczna:<u> to zależy od przyszłych nowożeńców, ich potrzeb i możliwości.</u> Jeśli preferujecie kontakt e-mailowy, uzgodnimy właśnie taką drogę komunikacji. Jeśli zdecydowanie bliższa jest Wam forma telefoniczna – będziemy kontaktować się w ten sposób.",
      open: false,
    },
    {
      question:
        "8. Jak wygląda proces podjęcia współpracy z konsultantem ślubnym?",
      answer:
        "  Najpierw mamy Wasz pierwszy kontakt. Piszecie do mnie wiadomość e-mail, w której opowiadacie o swoich planach i wizjach, o oczekiwaniach i wymogach. Jeśli jest już ustalony termin Waszej ceremonii – podajecie go, dzięki czemu mogę od razu zweryfikować swoją dostępność i przejść do propozycji spotkania zapoznawczego.<br/> W obecnych czasach nieoceniona okazuje się być również forma zdalna, na którą jestem jak najbardziej otwarta. Możemy spotkać się zarówno przy kawie w przyjemnych okolicznościach, jak i przed monitorem – wystarczy, że określicie swoje preferencje. Co najważniejsze: spotkanie jest niezobowiązujące. <br /> Po nim możemy rozmawiać już nieco konkretniej. Przygotuję Wam konkretnie wycenioną ofertę. Jeśli ją zaakceptujecie - w następnej kolejności omawiamy zarówno samą umowę, transze płatności, jak również zarys naszych dalszych działań.</br> Po dopięciu wszelkich formalności z umową – mogę przedstawić gotowy harmonogram organizacji i budżet całego przedsięwzięcia. Dalsza częstotliwość i formy spotkań oraz kontaktu – uzależnione będą od naszych ustaleń w tym temacie.",
      open: false,
    },
    {
      question: "9. Ile kosztuje usługa konsultanta ślubnego?",
      answer: 'Być może Was rozczaruję: tutaj nie ma miejsca na konkretną cenę. <strong>Każda umowa to projekt szyty na miarę.</strong> Zakres moich obowiązków ustalamy wspólnie – to podstawa naszych dalszych działań. Zazwyczaj nie zdarzają się dwie identyczne umowy, tak samo jak nieczęsto powtarzają się dokładnie te same stawki. <br/>Mogę Was zapewnić z tego miejsca, że finalne wynagrodzenie dla mnie – będzie efektem dokładnych wyliczeń tego, co jest do zrobienia oraz Waszych osobistych oczekiwań w stosunku do mnie. <strong>Gwarantuję rzetelność w ocenie tego, ile czasu i pracy zajmie wspólne działanie na Waszą rzecz.</strong> I najważniejsze: zawsze uważnie Was słucham, finalna oferta to efekt rozmów i zrozumienia zarówno Waszych potrzeb, jak i możliwości. Również finansowych.', 
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section id="faq" className={style()}>
      <Parallax bgImage={img} strength={600}>
        <div className={style("img")}>
          <div className={style("inlineStyle")}>
            <h1 className={style("faqTitle")}>ABC PRZYSZŁYCH NOWOŻEŃCÓW</h1>
            <h1 className={style("title")}>
              Co powinniście wiedzieć na dobry początek współpracy z KC Wedding?
            </h1>
            <h3 className={style("description")}>
              Organizacja ślubu i wesela to ogromna ilość różnych pytań i
              wątpliwości. Zdecydowanie łatwiej jest przez to przejść, gdy mamy
              wsparcie w postaci doświadczenia i merytorycznej wiedzy
              specjalisty. Takim z całą pewnością jest właśnie konsultant
              ślubny. I tutaj również nasuwa się wiele pytań. Funkcja
              konsultanta ślubnego jest wciąż nie do końca oczywista dla wielu
              osób.
            </h3>
          </div>
        </div>
      </Parallax>

      <h3 className={style("x")}>
        Postanowiłam zebrać kilka najczęstszych pytań, które padają w moim
        pierwszym kontakcie z przyszłymi nowożeńcami – i odpowiedzieć na nie na
        tyle wyczerpująco, żebyście mieli pełen obraz sytuacji. Powinno ułatwić
        to Wam decyzję o umówieniu się na spotkanie.
      </h3>
      <div className={style("faqs")}>
        {faqs.map((faq, i) => (
          <Item faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className={style("end")}>Mam nadzieję, że najważniejsze wątpliwości – zostały rozwiane! <br/>
Czekam teraz na Wasz kontakt.</div>
<Link
      smooth
          to="/#contact"
          
          scroll={el => scrollWithOffset(el, 60)}
          className={style("nav-links")}
        >
         <button className={style("contact")}>Skontatkuj się ze mną!</button>
        </Link>

    </section>
  );
}

export default FAQ;
