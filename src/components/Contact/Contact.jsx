import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";
import emailjs from "emailjs-com";

import { default as ContactStyles } from "./Contact.module.scss";
import img from "../../assets/Karolina_KCwedding-37.jpg";

import { StoreContext } from "../../store/StoreProvider";


const style = bemCssModules(ContactStyles);

function Contact() {
  let today = new Date().toISOString().substr(0, 10);

  const { isMobile } = useContext(StoreContext);
  const [state, setState] = useState({
    name: "",
    mail: "",
    date: today,
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

  return (
    <section id="contact" className={style()}>
            <div className={style("ImgWrapper")}>
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
            </div>

            <div className={style("inlineStyle")}>
              <div>
                <h1 className={style("title")}>Napisz do mnie wiadomość!</h1>
                <h1 className={style("description")}>
                  Odpowiem najszybciej jak to będzie możliwe
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
                  className={style("input")}
                  placeholder="Podaj datę ślubu"
                  name="date"
                  type="date"
                  value={state.date}
                  onChange={onInputChange}
                />

                <textarea
                  className={style("textarea")}
                  rows="5"
                  name="text"
                  type="text"
                  placeholder="Podaj treść wiadomości"
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
