import React from "react";
import bemCssModules from "bem-css-modules";
import { Parallax } from "react-parallax";

import { default as HomeStyles } from "./Home.module.scss";
import img from "../../assets/_MG_9190 (3).jpg";

const style = bemCssModules(HomeStyles);

export default function Home() {
  return (
    <section id="home" className={style()}>
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
    </section>
  );
}
