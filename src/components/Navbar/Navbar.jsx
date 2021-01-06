import React, { useEffect, useState, useContext } from "react";
import bemCssModules from "bem-css-modules";
import { Link } from "react-scroll";



import { MenuItems } from "./MenuItem/MenuItem";
import { StoreContext } from "../../store/StoreProvider";

import { default as NavbarStyles } from "./Navbar.module.scss";

// import img from "../../assets/logo.png";


const style = bemCssModules(NavbarStyles);

const Navbar = () => {
  const { isMobile } = useContext(StoreContext);


  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  const Items = MenuItems.map((item, index) => {
    return (
      <li  key={index} className={style("nav-item")}>
        <Link
          smooth={true}
          duration={1000}
          to={item.url}
          offset={-60}
          className={style("nav-links")}
        >
          {item.title}
        </Link>
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
      setVisible(newVisible);
    } else {
      setVisible(true);
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

//   const logo = isMobile ? null: <Link smooth={true} duration={1000} to="home" className={style("logo")}>
//             <img className={style("logo")} src={img} alt="" />
//           </Link>

  return (
    <>
      <nav className={style("")}>
        <div className={style("wrapper")}>
          <div className={style("menu-button")} onClick={handleOnClick}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          {/* {logo} */}
         
          <Link smooth={true} duration={1000} to="home"  offset={-60} className={style("title")}>
            <h1 className={style("title")}>TU_LOGO</h1>
          </Link>

          <ul className={itemStyle}>{Items}</ul> 
        
         
        </div>
       
      </nav>
      {prevScrollpos ? (
        <Link smooth={true} duration={1000} to="home"  className="scroll-up">
          <i className="fas fa-arrow-up"></i>
        </Link>
      ) : null}
    </>
  );
};

export default Navbar;
