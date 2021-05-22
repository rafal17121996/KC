import React from "react";
import bemCssModules from "bem-css-modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/KC9.png";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { default as FooterStyles } from "./Footer.module.scss";

const style = bemCssModules(FooterStyles);

function Footer() {
  return (
    <footer className={style()}>
      <div className={style("imgg")}>
        <img src={img} alt="" />
      </div>
      <div className={style("sm")}>
        <div className={style("iconWrapper")}>
          <a href="https://www.facebook.com/kcwedding.konsultantkaslubna/">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className={style("icon")}
            />
          </a>
          <a href="https://www.instagram.com/kc_weddingplanner/">
            <FontAwesomeIcon icon={faInstagram} className={style("icon")} />
          </a>
        </div>
        <div className={style("wrapper")}>
          <div>
            <a className={style("number")}>
              <p>kontakt@kcwedding.pl</p>{" "}
            </a>
            <a href="tel:732 845 993" className={style("number")}>
              <p>+48 732 845 993</p>{" "}
            </a>
          </div>
          <div>
            <p className={style("coppy")}>Warszawa | Rzeszów</p>
            <p className={style("coppy")}>
              © Copyright 2021. All Rights Reserved
            </p>
            <p className={style("author")}>Rafał Szczurek</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
