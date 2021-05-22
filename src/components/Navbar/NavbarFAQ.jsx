import React, { useEffect, useState, useContext } from "react";
import bemCssModules from "bem-css-modules";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { MenuItems } from "./MenuItem/MenuItem";
import { StoreContext } from "../../store/StoreProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import { default as NavbarFAQStyles } from "./NavbarFAQ.module.scss";

import img from "../../assets/KC11.png";
import menu from "../../assets/burgerMenu.svg";
import close from "../../assets/close.svg";
import Delayed from "../Delayed/Delayed";

const style = bemCssModules(NavbarFAQStyles);

const Navbar = () => {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const { isMobile } = useContext(StoreContext);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isOpen, setIsOpen] = useState(false);

  const Items = MenuItems.map((item, index) => {
    return (
      <li key={index} className={style("nav-item")}>
        <Link
          smooth
          to={"/#" + item.url}
          scroll={(el) => scrollWithOffset(el, isMobile ? 0 : 80)}
          className={style("nav-links")}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  const itemStyle = isOpen
    ? style("nav-menu", { active: true })
    : style("nav-menu");

    const logo = 
    <Link smooth to="/" className={style("nav-links")}>
  <img className={style("logo")} src={img} alt="" />
  </Link>

  return (
    <>
      <nav className={style("")}>
        <div className={style("wrapper")}>
        <div className={style("menu-button")} onClick={handleOnClick}>
            {isOpen ? (
              <Delayed waitBeforeShow={500}>
                <img className={style("icon-close")} src={close} alt="" />
              </Delayed>
            ) : (
                <img className={style("icon")} src={menu} alt="" />
            )}
          </div>
          <ul className={itemStyle}>
          {!isMobile? null : <li>{logo}</li>}
            {Items}
            {isMobile? null : <li>{logo}</li>}
            <li className={style("nav-item")}>
              <Link smooth to="/faq" className={style("nav-links")}>
                ABC KLIENTA
              </Link>
            </li>
            <li className={style("nav-item")}>
              <Link
                smooth
                to="/#contact"
                scroll={(el) => scrollWithOffset(el, isMobile ? 0 : 80)}
                className={style("nav-links")}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

