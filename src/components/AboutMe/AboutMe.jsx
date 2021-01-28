import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { default as AboutMeStyles } from "./AboutMe.module.scss";
// const AboutMeStyles = React.lazy(() => import("./AboutMe.module.scss"));



import img2 from "../../assets/Karolina_KCwedding-25.jpg";
import { StoreContext } from "../../store/StoreProvider";
import { Link } from "react-router-dom";

const style = bemCssModules(AboutMeStyles);

const AboutMe = () =>  {
  const { isMobile } = useContext(StoreContext);
  return (
    <section id="about" className={style()}>
      <h1 className={style("title")}>Kto stoi za KC Wedding?</h1>
      <div className={style("wrapper")}>
        
          <div className={style("description")}>
            {isMobile? <div className={style("imgWrapper")}><img className={style("picture")} src={img2} alt="" /></div> : null }
            <h2 className={style("text1")}>
              Cześć, nazywam się <strong>Karolina Chorzępa.</strong><br />
              Jestem Waszym wedding plannerem.
            </h2>

            <h3 className={style("text2")}>
              Kreuję rozwiązania na miarę Waszych potrzeb estetycznych i
              organizacyjnych. <br/>
              <strong>Wspieram w decyzjach, procesach, emocjach.</strong>
            </h3>

            <p className={style("text3")}>
              Doskonale zdaję sobie sprawę z tego, jak czasochłonnym i
              emocjonalnym zarazem, jest proces organizacji ślubu i wesela. Z
              tego zrozumienia oraz z pasji do rozwiązań na miarę moich ślubnych
              bohaterów – powstała właśnie marka KC Wedding. <strong>Moim priorytetem jest zapewnić Wam niczym niezakłócany spokój przygotowań oraz
              celebrowania uroczystości ślubnej.</strong>
              
            </p>
            <p className={style("text4")}>
              Na co dzień staram się być dla Was najlepszą organizacyjną
              przyjaciółką. Zawsze możecie na mnie liczyć, zwrócić właśnie na
              mnie swoje spojrzenia i przelać wszelkie wątpliwości. <strong>Służę nie
              tylko dobrą radą, również inspiracją i doświadczeniem.</strong> Zapewniam
              Wam wsparcie w takim stopniu i formie, jakiego potrzebujecie – by
              czuć się troskliwie zaopiekowani w całym procesie przedślubnych
              powinności.
            </p>
            <Link
          to="/about"
        >
          <button className={style("more")}>More!</button>
           
        </Link>
            <p className={style("text5")}>
              KC Wedding powstało z uwielbienia do naturalnych i niebanalnych
              rozwiązań.
            </p>

            <p className={style("text6")}>Rozgośćcie się i wykreujmy razem coś pięknego!</p>
          </div>
          
          {isMobile? null:<div className={style("imgWrapper")}><img className={style("picture")} src={img2} alt="" /></div>}
        </div>

    </section>
  );
}
export default AboutMe;