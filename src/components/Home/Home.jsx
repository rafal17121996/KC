import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";
import Typewriter from "typewriter-effect";

import { default as HomeStyles } from "./Home.module.scss";
import img from "../../assets/back1 (2)-1.jpg";
import imgMobile from "../../assets/imgMobile.jpg";
import { Parallax } from "react-parallax";
import Div100vh, { use100vh } from "react-div-100vh";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(HomeStyles);

export default function Home() {
  const height = use100vh();
  const { isMobile } = useContext(StoreContext);

  return (
    <section id="home" className={style()}>
      <Div100vh>
        <Parallax blur={{ min: -5, max: 5 }} bgImage={isMobile?imgMobile:img} strength={isMobile? 0:500}>
          <div style={{ height: height }}>
           <h1 className={style("text")}>
                    KAROLINA CHORZĘPA<br></br>
                    WEDDING PLANNER
                    {isMobile? null: "WEDDING PLANNER"}
                  </h1>
                  {isMobile? null:  <h2 className={style("text2")}>KC WEDDING</h2>}
            
            {/* <h1 className={style("text")}>
              KAROLINA CHORZĘPA<br></br>
              WEDDING PLANNER
            </h1>
            <h2 className={style("text2")}>KC WEDDING</h2> */}
            {isMobile?<h2 className={style("description")}>Kreuję rozwiązania na miarę Waszych potrzeb estetycznych i organizacyjnych. Wspieram w decyzjach, procesach, emocjach.</h2>:null}

     
          </div>
        </Parallax>
      </Div100vh>
    </section>
  );
}
