import React from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-scroll";
import BackgroundSlider from 'react-background-slider'

import { default as HomeStyles } from "./Home.module.scss";
// import img from "../../assets/back1 (1).jpg";
import img1 from "../../assets/back1 (2).jpg";
import img2 from "../../assets/back1.jpg";
import img3 from "../../assets/back2.jpg";


const style = bemCssModules(HomeStyles);

export default function Home() {
  return (
    <section  id="home" className={style()}>
      <h1 className={style('text')}>
        Cześć, nazywam się Karolina Chorzępa.<br></br>
        Jestem Waszym wedding plannerem.
      </h1>
      <h2  className={style('description')}>Kreuję rozwiązania na miarę Waszych potrzeb estetycznych i organizacyjnych.

Wspieram w decyzjach, procesach, emocjach.</h2>
      {/* <Parallax bgImage={img} strength={0}>
        <div className={style("img")}>
          <div className={style("inlineStyle")}></div>
        </div>
      </Parallax> */}
        <div className={style("scroll-button")}>
        <Link to="about" offset={-60} smooth={true} duration={1000}>
          <i className="fas fa-chevron-circle-down"></i>
        </Link>
      </div>
      <BackgroundSlider
  images={[img1, img2, img3]}
  duration={3} transition={2} />
    </section>
  );
}
