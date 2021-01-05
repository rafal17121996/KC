import React from "react";
import bemCssModules from "bem-css-modules";

import { default as FooterStyles } from "./Footer.module.scss";

const style = bemCssModules(FooterStyles);

function Footer() {
  return (
    <footer className={style()}>
      <div className={style("sm")}>
        <p className={style("title")}>KC WEDDING</p>
        <a href="https://www.facebook.com/kcwedding.konsultantkaslubna/"><i className="fab fa-facebook-f">
          <p className={style("link")}>Facebook</p>
        </i></a>
        <a href="https://www.instagram.com/kc_weddingplanner/"><i className="fab fa-instagram">
          <p className={style("link")}>Instagram</p>
        </i></a>

        <i className="fas fa-phone-alt">
          <p className={style("link")}>111 111 111</p>
        </i>
      
      </div>
    </footer>
  );
}

export default Footer;
