import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import bemCssModules from "bem-css-modules";

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
          <i className="fas fa-times"></i>
        </div>
        {/* {isMobile?null:<div className={style("one")}></div>} */}
        <div className={style("two")}>
          <h1 className={style("titlePop")}>{title}</h1>
          <p className={style("textPop")}>{text}</p>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
