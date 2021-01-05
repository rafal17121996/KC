import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";
import { Parallax } from "react-parallax";
 import emailjs from "emailjs-com";

import { default as ContactStyles } from "./Contact.module.scss";

//import img from "../../assets/Karolina_KCwedding-55.jpg";
import img from "../../assets/Contact.jpg";

import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(ContactStyles);

function Contact() {
  const { isMobile } = useContext(StoreContext);
  const [state, setState] = useState({
    name: "",
    mail: "",
    title: "",
    text: "",
  });
  const [errors, setErrors] = useState("");
  const [result, setResult] = useState({});


    const handleOnSubmit = e => {
  e.preventDefault();
      if(!state["name"]){
        setErrors("coś1")
      }  else if(!state["mail"]){
        setErrors("coś1")
      }else if(!state["date"]){
        setErrors("coś1")
      }else if(!state["text"]){
        setErrors("coś1")
      }else

      emailjs.sendForm('service_f2ixcir', 'template_5g2c7io', e.target, 'user_ux3gKfqC84EoWJjDiNkqL')
      .then((result) => {
          console.log(result.text);
          setState({ name: '', mail: '', text: '', date: '' });
      }, (error) => {
          console.log(error.text);
      });
    }

 

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <section id="contact" className={style()}>
      <Parallax bgImage={img} strength={700}>
        <div className={style("img")}>
          <div className={style("inlineStyle")}>
            <div>
              <h1 className={style("title")}>Napisz do mnie wiadomość!</h1>
              <h1 className={style("description")}>Odpowiem najszybciej jak to będzie możliwe</h1>
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


              <button className={style("subBtn")}>Wyślij</button>
            </form>
          </div>
          {isMobile ? null : (
            <div className={style("left")}>
              <h1>Coś w stylu zadzwnoń pod numer 111 111 111 aby ustalić ....</h1>
              <h3>Lub skorzystaj z formularza kontaktowego</h3>
            </div>
          )}
        </div>
      </Parallax>
    </section>
  );
}

export default Contact;
