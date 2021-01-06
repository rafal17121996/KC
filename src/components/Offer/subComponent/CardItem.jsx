import React from "react";
import { Link } from "react-router-dom";
import bemCssModules from "bem-css-modules";

import { default as OfferStyles } from "../Offer.module.scss";

const style = bemCssModules(OfferStyles);

function CardItem(props) {
  const clas=props.clsName
    return (
      <>
        <li className={style("item")}>
          <div className={style("item__link")} >
            <figure className={style({clas})} >
              <img
                className={style("item__img")}
                alt='Travel Image'
                src={props.src}
              />
            </figure>
            <div className={style("item__info")}>
              <h5 className={style("item__text")}>{props.text}</h5>
            </div>
          </div>
        </li>
      </>
    );
  }
export default CardItem;