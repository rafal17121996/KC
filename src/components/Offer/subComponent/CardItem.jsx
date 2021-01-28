import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bemCssModules from "bem-css-modules";

import { default as OfferStyles } from "../Offer.module.scss";
import Modal from "./Popup";

const style = bemCssModules(OfferStyles);

function CardItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const clas = props.clsName;
  return (
    <>
      <li className={style("item")}
      >
        <div className={style("item__link")}>
          <figure className={style({ clas })}
            onClick={() => setIsOpen(true)}
            >
            <img
              className={style("item__img")}
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <Modal img={props.src2} text={props.text} title={props.title} open={isOpen} onClose={() => setIsOpen(false)}>
            {props.text}
          </Modal>
          <div className={style("item__info")}>
            <h5 className={style("item__text")}>{props.title}</h5>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardItem;
