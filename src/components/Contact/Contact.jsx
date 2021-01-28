import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";
import emailjs from "emailjs-com";
import InstagramEmbed from 'react-instagram-embed';

import { default as ContactStyles } from "./Contact.module.scss";

import img from "../../assets/Karolina_KCwedding-37.jpg";
import bg from "../../assets/pexels-miguel-á-padriñán-19670.jpg"

import { StoreContext } from "../../store/StoreProvider";


const style = bemCssModules(ContactStyles);

const Contact=()=> {
  let today = new Date().toISOString().substr(0, 10);
  const { isMobile } = useContext(StoreContext);
  const [state, setState] = useState({
    name: "",
    mail: "",
    date: 'Podaj datę przyjęcia',
    text: "",
  });
  const [errors, setErrors] = useState("");
  const [result, setResult] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!state["name"]) {
      setErrors("coś1");
    } else if (!state["mail"]) {
      setErrors("coś1");
    } else if (!state["date"]) {
      setErrors("coś1");
    } else if (!state["text"]) {
      setErrors("coś1");
    } else
      emailjs
        .sendForm(
          "service_f2ixcir",
          "template_5g2c7io",
          e.target,
          "user_ux3gKfqC84EoWJjDiNkqL"
        )
        .then(
          (result) => {
            console.log(result.text);
            setState({ name: "", mail: "", text: "", date: "" });
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
//  const onFocus =(e)=> {
//     e.currentTarget.type = "date";
// },
// const onBlur = (e)=> {
//     e.currentTarget.type = "text";
//     e.currentTarget.placeholder = "Enter a Date";
// },

  return (
    <section id="contact" style={{backgroundImage: `url(${bg})`}} className={style()}>
      {isMobile?null:    <div className={style("ImgWrapper")}>
              <div className={style("iconWrapper")}>
                <a
                  className={style("icon")}
                  href="https://www.facebook.com/kcwedding.konsultantkaslubna/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className={style("icon")}
                  href="https://www.instagram.com/kc_weddingplanner/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className={style("icon")}
                  href="https://www.instagram.com/kc_weddingplanner/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>

              <img src={img} alt="" className={style("image")} />
            </div>}
        
            <div className={style("inlineStyle")}>
              <div>
                <h1 className={style("title")}>Napisz do mnie</h1>
                <h1 className={style("description")}>
                Umówimy się na kawę i omówimy szczegóły
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
                  onFocus={
                    (e)=> {
                      e.currentTarget.type = "date";
                      e.currentTarget.focus();
                     }
                   }
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
}

export default Contact;
