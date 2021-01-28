import React, { Suspense, useContext, useEffect, useState } from "react";
import StoreProvider, { StoreContext } from "./store/StoreProvider";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

// import "./App.scss";
React.lazy(() => import("./App.scss"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const NavbarFAQ = React.lazy(() => import("./components/Navbar/NavbarFAQ"));
const Home = React.lazy(() => import("./components/Home/Home"));
const AboutMe = React.lazy(() => import("./components/AboutMe/AboutMe"));
const AboutMeMore = React.lazy(() =>
  import("./components/AboutMe/AboutMeMore")
);
const Offer = React.lazy(() => import("./components/Offer/Offer"));
const FAQ = React.lazy(() => import("./components/FAQ/FAQ"));
const FAQMore = React.lazy(() => import("./components/FAQ/FAQMore"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

import ScrollToTop from "./components/Scroll/ScrollToTop";

const App = () => {
    const [isMobile, setIsMobile] = useState(false)


    const handleIsMoblie =()=>{
        if (window.innerWidth <= 960 & window.innerWidth>window.innerHeight) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(()=>{
        handleIsMoblie()
    }, [])

    window.addEventListener('resize',handleIsMoblie)



  return (
    isMobile?
    <div className={"overlay"}><i className="fas fa-sync-alt"></i> <p>Obróć swoje urządzenie</p></div>
    :
    <Router>
      <ScrollToTop />
      <StoreProvider>
        <Suspense fallback={<div style={{height: "100vh"}}>Loading...</div>}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Home />
                  <AboutMe />
                  <Offer />
                  <FAQ />
                  <Contact />
                </>
              )}
            />
            <Route
              path="/faq"
              render={() => (
                <>
                  <NavbarFAQ />
                  <FAQMore />
                </>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <>
                  <NavbarFAQ />
                  <AboutMeMore />
                </>
              )}
            />
          </Switch>
          <Footer />
        </Suspense>
      </StoreProvider>
    </Router>
  
            // <div className={"overlay"}><i className="fas fa-sync-alt"></i> <p>Obróć swoje urządzenie</p></div> 
     
  );
};

export default App;
