import React, { useContext, useEffect, useRef, useState } from "react";
import bemCssModules from "bem-css-modules";
import { Parallax } from "react-parallax";
import gsap from "gsap";

import { default as HomeStyles } from "./Home.module.scss";
import img from "../../assets/home.jpg";
//import img2 from "../../assets/KC11.png";
import img2 from "../../assets/KC6.png";
import imgMobile from "../../assets/imgMobile.jpg";
import Div100vh, { use100vh } from "react-div-100vh";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(HomeStyles);

export default function Home() {
  const height = use100vh();
  const { isMobile } = useContext(StoreContext);
  const [offset, setOffset] = useState();

  let text1 = useRef(null);
  let text2 = useRef(null);

  const handleScroll = () => setOffset(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);

  const mystyle = !isMobile
    ? {
        backgroundImage: `url(${img})`,
        backgroundPositionY: offset * 0.7 + "px",
      }
    : {
        backgroundImage: `url(${img})`,
      };
  useEffect(() => {
    gsap.set([text1, text2], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    isMobile? tl.fromTo(text1, { y: "+=300" }, { duration: 2, y: "-=300", autoAlpha: 1 }) : tl.fromTo(text1, { y: "-=300" }, { duration: 1, y: "+=300", autoAlpha: 1 });
    isMobile? tl.fromTo(text2, { y: "+=300" }, { duration: 2, y: "-=300", autoAlpha: 1 }) : tl.fromTo(text2, { y: "+=300" }, { duration: 1, y: "-=300", autoAlpha: 1 });
  }, []);

  return (
    <section id="home" className={style()} style={mystyle}>
      {/* <Parallax bgImage={img} strength={100}> */}
      <Div100vh>       
        <div
          ref={(el) => {
            text1 = el;
          }}
          className={style("textWrapper")}
        >
       
            <div className={style("imgWrapper")}>
              <img src={img2} className={style("img2")} />
            </div>

          <h1
            ref={(el) => {
              text1 = el;
            }}
            className={style("text")}
          >
            KAROLINA CHORZĘPA
          </h1>
          <h1
            ref={(el) => {
              text2 = el;
            }}
            className={style("text2")}
          >
            Wedding Planner
          </h1>
        </div>
      </Div100vh>
      {/* </Parallax> */}
    </section>
  );
}

// <div style={{ height: height }}>
// <h1
//   ref={(el) => {
//     text1 = el;
//   }}
//   className={style("text")}
// >
//   KAROLINA CHORZĘPA<br></br>
// </h1>
// <div
//   ref={(el) => {
//     text2 = el;
//   }}
// >
//   {isMobile ? null : <h2 className={style("text2")}>WEDDING PLANNER</h2>}
// </div>

// {isMobile ? (
//   <h2 className={style("description")}>
//     Kreuję rozwiązania na miarę Waszych potrzeb estetycznych i
//     organizacyjnych. Wspieram w decyzjach, procesach, emocjach.
//   </h2>
// ) : null}
// </div>
