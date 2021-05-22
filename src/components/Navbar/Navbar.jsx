import React, { useEffect, useState, useContext } from "react";
import bemCssModules from "bem-css-modules";
import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import { MenuItems } from "./MenuItem/MenuItem";
import { StoreContext } from "../../store/StoreProvider";

import { default as NavbarStyles } from "./Navbar.module.scss";

import img from "../../assets/KC11.png";
import menu from "../../assets/burgerMenu.svg";
import close from "../../assets/close.svg";
import Delayed from "../Delayed/Delayed";

const style = bemCssModules(NavbarStyles);

const Navbar = () => {
  const { isMobile } = useContext(StoreContext);

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  const Items = MenuItems.map((item, index) => {
    return (
      <li key={index} className={style("nav-item")}>
        <Link1
          smooth={true}
          duration={isMobile ? 0 : 1000}
          to={item.url}
          offset={isMobile ? 0 : -80}
          className={style("nav-links")}
          onClick={() => handleOnClick()}
        >
          {item.title}
        </Link1>
      </li>
    );
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const handleScroll = () => {
    if (!isMobile) {
      const currentScrollPos = window.pageYOffset;
      const newVisible = prevScrollpos > currentScrollPos;

      setPrevScrollpos(currentScrollPos);
      // setVisible(newVisible);
    } else {
      // setVisible(true);
    }
  };

  const itemStyle = isOpen
    ? style("nav-menu", { active: true })
    : style("nav-menu");

  const logo = <Link1
  smooth={true}
  duration={isMobile ? 0 : 1000}
  to="home"
  offset={isMobile ? 0 : -80}
  className={style("nav-links")}
  onClick={handleOnClick}
>
<img className={style("logo")} src={img} alt="" />
</Link1>
  
  // <Link to="/" className={style("logo")}>
  //     <img className={style("logo")} src={img} alt="" />
  //   </Link>

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
              <Link to="/faq" className={style("nav-links")}>
                ABC KLIENTA
              </Link>
            </li>
            <li className={style("nav-item")}>
              <Link1
                smooth={true}
                duration={isMobile ? 0 : 1000}
                to="contact"
                offset={isMobile ? 0 : -80}
                className={style("nav-links")}
                onClick={handleOnClick}
              >
                KONTAKT
              </Link1>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
