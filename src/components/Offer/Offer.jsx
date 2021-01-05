import React, { useEffect } from "react";
import bemCssModules from "bem-css-modules";
import { Parallax } from "react-parallax";

import CardItem from "./subComponent/CardItem";

import { default as OfferStyles } from "./Offer.module.scss";

import img1 from "../../assets/_MG_9190 (3).jpg";
import img2 from "../../assets/_MG_9190 (3).jpg";
import img3 from "../../assets/Karolina_KCwedding-33.jpg";
import img4 from "../../assets/Karolina_KCwedding-33.jpg";
import img5 from "../../assets/Karolina_KCwedding-33.jpg";



const style = bemCssModules(OfferStyles);
function Offer() {
  return (
    <div id="offer" className={style()}>
    <h1>Czym dokładnie się zajmuję? Co mogę dla Was zorganizować?</h1>
    <div className={style("container")}>
      <div className={style("wrapper")}>
        <ul className={style("items")}>
          <CardItem
            src={img1}
            text="Kompleksowa organizacja ślubu i wesela."
            label="coś można tutaj napisać "
            path='/'
            clsName="item__pic-wrap"
          />
          <CardItem
            src={img2}
            text="Częściowa organizacja ślubu i wesela."
            label="Zdjęcia dostosuja jak juz będą wybrane jakie mają gdzie być"
            path='/'
            clsName="item__pic-wrap"
          />
        </ul>
        
        <ul className='cards__items'>
          <CardItem
            src={img3}
            text='Koordynacja dnia ślubu i wesela.'
            label='Cena: 430zł'
            path='/'
            clsName="item__pic-wrapp"
          />
          <CardItem
            src={img4}
            text='Ślub w plenerze. Ślub na plaży.'
            label='Cena: 430zł'
            path='/'
            clsName="item__pic-wrapp"
          />

          <CardItem
            src={img5}
            text='Ślub międzynarodowy.'
            label='Cena: 430zł'
            path='/'
            clsName="item__pic-wrapp"
          />
          <CardItem
            src={img5}
            text='Przyjęcia okolicznościowe.'
            label='Cena: 430zł'
            path='/'
            clsName="item__pic-wrapp"
          />
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Offer;
