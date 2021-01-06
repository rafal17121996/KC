import React, { useEffect } from "react";
import bemCssModules from "bem-css-modules";
import { Parallax } from "react-parallax";

import CardItem from "./subComponent/CardItem";

import { default as OfferStyles } from "./Offer.module.scss";

import img1 from "../../assets/square.jpg";
import img2 from "../../assets/square.jpg";
import img3 from "../../assets/square.jpg";
import img4 from "../../assets/square2.jpg";
import img5 from "../../assets/square2.jpg";
import img6 from "../../assets/square2.jpg";

const style = bemCssModules(OfferStyles);
function Offer() {
  return (
    <div id="offer" className={style()}>
    <h1 className={style("title")}>Czym dokładnie się zajmuję? <br/> Co mogę dla Was zorganizować?</h1>
    <div className={style("container")}>
      <div className={style("wrapper")}>
        <ul className={style("items")}>
          <CardItem
            src={img1}
            text="Kompleksowa organizacja ślubu i wesela."
            path='/'
            clsName="item__pic-wrap"
          />
          <CardItem
            src={img2}
            text="Częściowa organizacja ślubu i wesela."
            path='/'
            clsName="item__pic-wrap"
          /> 
          <CardItem
            src={img3}
            text='Koordynacja dnia ślubu i wesela.'
            path='/'
            clsName="item__pic-wrap"
          />
        </ul>
        
        <ul className='cards__items'>
         
          <CardItem
            src={img4}
            text='Ślub w plenerze. Ślub na plaży.'
            path='/'
            clsName="item__pic-wrap"
          />

          <CardItem
            src={img5}
            text='Ślub międzynarodowy.'
            path='/'
            clsName="item__pic-wrap"
          />
          <CardItem
            src={img6}
            text='Przyjęcia okolicznościowe.'
            path='/'
            clsName="item__pic-wrap"
          />
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Offer;
