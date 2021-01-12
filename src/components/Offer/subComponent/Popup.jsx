import React from 'react'
import ReactDom from 'react-dom'
import bemCssModules from "bem-css-modules";

import { default as OfferStyles } from "../Offer.module.scss";

const style = bemCssModules(OfferStyles);

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className={style("popup_background")} />
      <div className={style("popup")}>
         <div className={style("close")} onClick={onClose}>
           <i className="fas fa-times"></i>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}