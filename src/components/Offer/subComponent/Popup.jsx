import React, { useCallback, useEffect } from 'react'
import ReactDom from 'react-dom'
import bemCssModules from "bem-css-modules";

import { default as OfferStyles } from "../Offer.module.scss";

const style = bemCssModules(OfferStyles);

export default function Modal({ open, title, text, onClose }) {
  if (!open) return null

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      onClose()
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
         <div className={style("close")} onClick={onClose}>
           <i className="fas fa-times"></i>
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
        
        
      </div>
    </>,
    document.getElementById('portal')
  )
}