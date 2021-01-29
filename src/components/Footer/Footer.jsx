import React from "react";
import bemCssModules from "bem-css-modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

import { default as FooterStyles } from "./Footer.module.scss";

const style = bemCssModules(FooterStyles);

function Footer() {
  return (
    <footer className={style()}>
      <div className={style("sm")}>
        <p className={style("title")}>KC WEDDING</p>
        <div className={style("iconWrapper")}>
           <a href="https://www.facebook.com/kcwedding.konsultantkaslubna/">
          <FontAwesomeIcon icon={faFacebookSquare} className={style("icon")} />
        </a>
        <a href="https://www.instagram.com/kc_weddingplanner/">
          <FontAwesomeIcon icon={faInstagram} className={style("icon")} />
        </a>
        </div>
        <a href="tel:123-132-123" className={style("number")}> <p>+48 123-132-123</p> </a>
        <p className={style("coppy")}>© Copyright 2021. All Rights Reserved</p>
        <p className={style("author")}>Rafał Szczurek</p>
      </div>
    </footer>
  );
}

export default Footer;
