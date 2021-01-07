import React from "react";
import bemCssModules from "bem-css-modules";
import { Parallax } from "react-parallax";

import { default as AboutMeStyles } from "./AboutMe.module.scss";

import bg from "../../assets/pexels-miguel-á-padriñán-19670.jpg";
import img from "../../assets/Karolina_KCwedding-25.jpg";
import img2 from "../../assets/Karolina_KCwedding-53.jpg";
import { Link } from "react-scroll";

const style = bemCssModules(AboutMeStyles);

export default function AboutMe() {
  return (
    <section id="about" className={style()}>
      <Parallax bgImage={bg} strength={1000}>
        <div className={style("img")}>
          <div className={style("inlineStyle")}>

  <h1 className={style("title")}>Kto stoi za KC Wedding?</h1>
      <div className={style("wrapper")}>
        <div className={style("top")}>
          <p className={style("description")}>
            Cześć! Nazywam się Karolina Chorzępa i witam Was serdecznie w moich
            internetowych zorganizowanych progach, jak na dobrego gospodarza
            przystało. Chociaż zdecydowanie bardziej wolę określenie: jak na
            dobrą przyjaciółkę przystało. Bo właśnie tak najczęściej się czuję,
            kiedy to Wy zapraszacie mnie do swojej historii. Jedynej w swoim
            rodzaju. W Waszym stylu. <br />
            Jestem absolwentką Akademii Wychowania Fizycznego w Poznaniu oraz w
            Warszawie. Zaskakujący początek drogi konsultantki ślubnej, prawda?
            Turystyka i rekreacja to nie tylko moje wykształcenie kierunkowe, to
            również inspirujący początek historii KC Wedding. Na studiach
            pojawił się przedmiot organizacji imprez, równolegle w moim życiu
            osobistym wydarzyć się miały zaślubiny bliskiej kuzynki. Wsparcie w
            tej organizacji – dało mi jasny sygnał do dalszych działań.
            <br />
          </p>
          <img className={style("picture")} src={img2} alt="" />
        </div>
        <div className={style("bottom")}>
          <img className={style("picture")} src={img} alt="" />
          <p className={style("description")}>
            Kurs na wedding plannera w Akademii Wytwórni Ślubów Agnieszki
            Kudeli, oficjalnie przypieczętował decyzję o dokładnie takiej drodze
            zawodowej. W międzyczasie kompleksowa organizacja własnej
            uroczystości – udowodniła mi dodatkowo, że jestem do tego stworzona.
            Dobry plan, doskonała realizacja, namacalne efekty. Czyli wszystko
            to, co stanowi podstawę w codziennej pracy konsultantki ślubnej.
            <br />
            Prywatnie uwielbiam taniec, swego czasu zajmowałam się tym
            profesjonalnie. Kontuzja jednak nie pozwoliła na kontynuację.
            Uwielbiam też pracę z dziećmi i mam w niej sporo doświadczenia,
            dzięki czemu z entuzjazmem podchodzę do małych gości weselnych. Co
            jeszcze? Nad wyraz cenię sobie polskie morze, stąd też śluby na
            plaży w ofercie KC Wedding.
            <br />
            Mogłabym opowiadać o sobie wciąż i wciąż, jestem jednak zdecydowanie
            lepszym słuchaczem. Z przyjemnością o Was posłucham. Przy kawie lub
            przy herbacie – jak wolicie? KC Wedding powstało z uwielbienia do
            naturalnych i niebanalnych rozwiązań.
          </p>
        </div>
      </div>

      <div className={style("scroll-button")}>
        <Link to="offer" smooth={true} offset={-60} duration={1000}>
          <i className="fas fa-chevron-circle-down"></i>
        </Link>
      </div>

          </div>
          </div>
          </Parallax>
    
    </section>
  );
}
