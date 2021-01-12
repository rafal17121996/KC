import React, { useEffect, useState, useContext } from "react";
import bemCssModules from "bem-css-modules";
import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";



import { MenuItems } from "./MenuItem/MenuItem";
import { StoreContext } from "../../store/StoreProvider";


import { default as NavbarStyles } from "./Navbar.module.scss";

import img from "../../assets/KC (1).png";


const style = bemCssModules(NavbarStyles);

const Navbar = () => {
  const { isMobile } = useContext(StoreContext);


  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  const Items = MenuItems.map((item, index) => {
    return (
      <li  key={index} className={style("nav-item")}>
        <Link1
          smooth={true}
          duration={1000}
          to={item.url}
          offset={-60}
          className={style("nav-links")}
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
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  function handleClickLang(lang) {
    i18next.changeLanguage(lang)
  }


  const itemStyle = isOpen
    ? style("nav-menu", { active: true })
    : style("nav-menu");

  const logo = isMobile ? null: <Link  to="/" className={style("logo")}>
            <img className={style("logo")} src={img} alt="" />
          </Link>

  return (
    <>
      <nav className={style("")}>
        <div className={style("wrapper")}>
          <div className={style("menu-button")} onClick={handleOnClick}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          {logo}
         
          {/* <Link smooth={true} duration={1000} to="home"  offset={-60} className={style("title")}>
            <h1 className={style("title")}>TU_LOGO</h1>
          </Link> */}

          <ul className={itemStyle}>{Items}
          <li   className={style("nav-item")}>         
        <Link
          to="/faq"
          className={style("nav-links")}
        >

            ABC KLIENTA
        </Link>
      </li>
          </ul> 
        
         
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
