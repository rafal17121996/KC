import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import bemCssModules from "bem-css-modules";
import { Link as Link1 } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import { default as OfferStyles } from "../Offer.module.scss";
import { StoreContext } from "../../../store/StoreProvider";
import Div100vh from "react-div-100vh";

const style = bemCssModules(OfferStyles);

export default function Modal({ img, open, title, text, onClose }) {
  if (!open) return null;

  const { isMobile } = useContext(StoreContext);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return ReactDom.createPortal(
    <>
      <div className={style("popup_background")} />
      <div className={style("popup")}>
        <div className={style("border")}>
          <div className={style("imgWrapper")}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className={style("close")} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {/* {isMobile?null:<div className={style("one")}></div>} */}
        <div className={style("two")}>
          <h1 className={style("titlePop")}>{title}</h1>
          <div
            className={style("test")}
          >
            <div
            className={style("test2")}
            >
              {text}
            </div>
          </div>
        </div>
        <div className={style("center")}>
          <Link1
            smooth={true}
            duration={isMobile ? 0 : 1000}
            to="contact"
            offset={isMobile ? 0 : -60}
            className={style("nav-links")}
            onClick={onClose}
          >
            <button className={style("contact")}>Skontatkuj się ze mną!</button>
          </Link1>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
