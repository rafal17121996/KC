import React from "react";

import StoreProvider from "./store/StoreProvider";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Offer from "./components/Offer/Offer";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scroll/ScrollToTop";

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Navbar />
        {/* <Home />
        <AboutMe />
        <Offer />
        <Contact />
        <FAQ /> */}
         <ScrollToTop />
        <Switch>
          {/* <Route
            path="/"
            exact
            render={() => (
              <>
                <Home />
                <AboutMe />
                <Offer />
                <Contact />
              </>
            )}
          /> */}
        <Route path="/" exact  render={() => (
              <>
                <Home />
                <AboutMe />
                <Offer />
                <Contact />
              </>
            )} />
          <Route path="/faq" component={FAQ} />
        </Switch>
        <Footer />
      </StoreProvider>
    </Router>
  );
};

export default App;
