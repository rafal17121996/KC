import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";
const Item = React.lazy(() => import("../FAQ/Item"));
import { HashLink as Link } from "react-router-hash-link";

import { default as AboutMeMoreStyles } from "./AboutMeMore.module.scss";
// import img from "../../assets/faq2.jpg";
import img from "../../assets/back1 (4).jpg";
import img2 from "../../assets/Karolina_KCwedding-53-1.jpg";
import { Parallax } from "react-parallax";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(AboutMeMoreStyles);

function AboutMeMore() {
  const { isMobile } = useContext(StoreContext);
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="faq" className={style()}>
      <Parallax bgImage={img} strength={100}>
        <div className={style("img")}>
          <div className={style("inlineStyle")}>
            <h1 className={style("faqTitle")}>Kto stoi za KC Wedding?</h1>
            <h1 className={style("title")}>
              Cześć! Nazywam się Karolina Chorzępa i witam Was serdecznie w
              moich internetowych zorganizowanych progach, jak na dobrego
              gospodarza przystało. Chociaż zdecydowanie bardziej wolę
              określenie:<strong> jak na dobrą przyjaciółkę przystało.</strong>{" "}
              Bo właśnie tak najczęściej się czuję, kiedy to Wy zapraszacie mnie
              do swojej historii. Jedynej w swoim rodzaju. W Waszym stylu.
            </h1>
          </div>
        </div>
      </Parallax>

      <div className={style("bottom")}>
        <h3 className={style("text")}>
          Jestem absolwentką Akademii Wychowania Fizycznego w Poznaniu oraz w
          Warszawie. Zaskakujący początek drogi konsultantki ślubnej, prawda?
          Turystyka i rekreacja to nie tylko moje wykształcenie kierunkowe,
          <strong> to również inspirujący początek historii KC Wedding.</strong>{" "}
          Nas studiach magisterskich skończyłam specjalizację Event Menadżera,
          równolegle w moim życiu osobistym wydarzyć się miały zaślubiny
          bliskiej mi osoby. Wsparcie w tej organizacji – dało mi jasny sygnał
          do dalszych działań. <br /> <br />
          Kurs na wedding plannera w Akademii Wytwórni Ślubów Agnieszki Kudeli,
          oficjalnie przypieczętował decyzję o dokładnie takiej drodze
          zawodowej. W międzyczasie kompleksowa organizacja własnej uroczystości
          – udowodniła mi dodatkowo, że jestem do tego stworzona.{" "}
          <strong>Dobry plan, doskonała realizacja, namacalne efekty</strong>.
          Czyli wszystko to, co stanowi podstawę w codziennej pracy konsultantki
          ślubnej. <br /> <br />
          Prywatnie uwielbiam taniec, swego czasu zajmowałam się tym
          profesjonalnie. Kontuzja jednak nie pozwoliła na kontynuację.{" "}
          <strong>
            Uwielbiam też pracę z dziećmi i mam w niej sporo doświadczenia,
            dzięki czemu z entuzjazmem podchodzę do małych gości weselnych
          </strong>{" "}
          . Co jeszcze? Nad wyraz cenię sobie polskie morze, stąd też śluby na
          plaży w ofercie KC Wedding.
          <br /> <br />
          Mogłabym opowiadać o sobie wciąż i wciąż, jestem jednak zdecydowanie
          lepszym słuchaczem.{" "}
          <strong>
            Z przyjemnością o Was posłucham. Przy kawie lub przy herbacie – jak
            wolicie?
          </strong>
        </h3>
        <img className={style("picture")} src={img2} alt="" />
      </div>
      <h3 className={style("textEnd")}>
        KC Wedding powstało z uwielbienia do naturalnych i niebanalnych
        rozwiązań.
      </h3>
      <Link
        smooth
        to="/#contact"
        scroll={(el) => scrollWithOffset(el, 60)}
      >
        <button className={style("contact")}>Skontatkuj się ze mną!</button>
      </Link>
    </section>
  );
}

export default AboutMeMore;
