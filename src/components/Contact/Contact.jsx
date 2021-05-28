import React, { useContext, useEffect, useRef, useState } from "react";
import bemCssModules from "bem-css-modules";
import emailjs from "emailjs-com";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { default as ContactStyles } from "./Contact.module.scss";
import img from "../../assets/Karolina_KCwedding-37.jpg";
import { StoreContext } from "../../store/StoreProvider";

gsap.registerPlugin(ScrollTrigger);




const style = bemCssModules(ContactStyles);

const Contact = () => {
  let today = new Date().toISOString().substr(0, 10);
  const { isMobile } = useContext(StoreContext);
  const [state, setState] = useState({
    name: "",
    mail: "",
    date: "Podaj datę przyjęcia",
    text: "",
  });
  const [errors, setErrors] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!state["name"]) {
      setErrors("Podaj swoje imię");
    } else if (!state["mail"]) {
      setErrors("Podaj swój mail");
    } else if (!state["text"]) {
      setErrors("Wprowadz teks wiadomości");
    } else
      emailjs
        .sendForm(
          "service_e97bjgc",
          "template_5g2c7io",
          e.target,
          "user_ux3gKfqC84EoWJjDiNkqL"
        )
        .then(
          (result) => {
            console.log(result);
            setState({ name: "", mail: "", text: "", date: "" });
            setErrors("Dziękuje za wysłanie wiadomości")
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  
  let text = useRef(null);

  // useEffect(() => {
  //   gsap.set([text], { autoAlpha: 0 });

  //   gsap.fromTo(
  //     text,
  //     {
  //       y: "+=100",
  //     },
  //     {
  //       duration: 1,
  //       y: "-=100",
  //       ease: "linear",
  //       autoAlpha: 1,
  //       scrollTrigger: {
  //         trigger: text,
  //         start: "top 85%", //when top of herman passes 75% viewport height
  //         end: "bottom 25%", //when bottom of herman passes 25% viewport height

  //         //events: onEnter onLeave onEnterBack onLeaveBack
  //         toggleActions: "play complete complete reverse",
  //         //options: play, pause, resume, reset, restart, complete, reverse,none
  //       },
  //     }
  //   );
  // }, []);



  return (
    <section
      id="contact"
      className={style()}
    >
      {isMobile ? null : (
        <div className={style("ImgWrapper")}>
          <div className={style("iconWrapper")}>
            <a href="https://www.instagram.com/kc_weddingplanner/">
              <FontAwesomeIcon icon={faInstagram} className={style("icon")} />
            </a>
            <a href="https://www.facebook.com/kcwedding.konsultantkaslubna/">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className={style("icon")}
              />
            </a>
          </div>

          <img src={img} alt="" className={style("image")} />
        </div>
      )}

      <div ref={(el) => {
          text = el;
        }} className={style("inlineStyle")}>
        <div>
          <h1 className={style("title")}>Napisz do mnie</h1>
          <h1 className={style("description")}>
            Umówimy się na kawę i omówimy szczegóły Twojego przyjęcia
          </h1>
        </div>
        <form onSubmit={handleOnSubmit}>
          <h2 className={style("errors")}>{errors}</h2>
          <input
            className={style("input")}
            placeholder="Podaj swoje imię"
            name="name"
            type="text"
            value={state.name}
            onChange={onInputChange}
          />
          <input
            className={style("input")}
            placeholder="Podaj swój adres e-mail"
            name="mail"
            type="email"
            value={state.mail}
            onChange={onInputChange}
          />

          <input
            type="text"
            onFocus={(e) => {
              e.currentTarget.type = "date";
              e.currentTarget.focus();
            }}
            className={style("input")}
            placeholder="Podaj datę przyjęcia"
            name="date"
            value={state.date}
            onChange={onInputChange}
          />

          <textarea
            className={style("textarea")}
            rows="5"
            name="text"
            type="text"
            placeholder="Opowiedz mi o swoim przyjęciu"
            value={state.text}
            onChange={onInputChange}
          />

          <button className={style("subBtn")}>WYŚLIJ WIADOMOŚĆ</button>
        </form>
      </div>


    

    </section>


  );
};

export default Contact;
