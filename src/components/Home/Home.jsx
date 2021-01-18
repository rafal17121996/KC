import React, { useState } from "react";
import bemCssModules from "bem-css-modules";
import Typewriter from "typewriter-effect";

import { default as HomeStyles } from "./Home.module.scss";
import img from "../../assets/back1 (2)-1.jpg";
import { Parallax } from "react-parallax";
import Div100vh, { use100vh } from 'react-div-100vh'
import { Spring } from "react-spring/renderprops";


const style = bemCssModules(HomeStyles);

export default function Home() {
  const [text, setText] = useState(null);
  const [description, setDescription] = useState(null);
  const height = use100vh()


  return (
    <section id="home" className={style()}>
      <Div100vh>
   <Parallax blur={{ min: -5, max: 5 }} bgImage={img} strength={400}>
        <div  style={{height: height}}>
          <Typewriter
            options={{
              wrapperClassName: style("text"),
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("KAROLINA CHORZĘPA")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .callFunction(() => {
                  setText("KC WEDDING");
                  setDescription(
                    "Kreuję rozwiązania na miarę Waszych potrzeb estetycznych i organizacyjnych. Wspieram w decyzjach, procesach, emocjach."
                  );
                })
                .start();
            }}
          />

          {/* <h1 className={style("text")}>
            KAROLINA CHORZĘPA<br></br>
            WEDDING PLANNER
          </h1> */}



          {text ? (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {(props) => (
                <div style={props} className={style("text2")}>
                  <h2 className={style("text2")}>{text}</h2>
                  <h2 className={style("description")}>{description}</h2>
                </div>
              )}
            </Spring>
          ) : null}
       

          {/* {description?<h2 className={style("description")}>
            
          </h2>:null} */}
          {/* {text ? (
           <h2 className={style("text2")}>{text}</h2>
          ) : null} */}

        </div>
      </Parallax>
  </Div100vh>
         
      
    </section>
  );
}
