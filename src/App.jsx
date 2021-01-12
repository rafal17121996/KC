import React, { Suspense } from "react";

import StoreProvider from "./store/StoreProvider";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Home = React.lazy(() => import("./components/Home/Home"));
const AboutMe = React.lazy(() => import("./components/AboutMe/AboutMe"));
const Offer = React.lazy(() => import("./components/Offer/Offer"));
const FAQ = React.lazy(() => import("./components/FAQ/FAQ"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";
// import AboutMe from "./components/AboutMe/AboutMe";
// import Offer from "./components/Offer/Offer";
// import FAQ from "./components/FAQ/FAQ";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scroll/ScrollToTop";

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Home />
                  <AboutMe />
                  <Offer />
                  <FAQ />
                  <Contact />
                </>
              )}
            />
            <Route path="/faq" component={FAQ} />
          </Switch>
          <Footer />
        </Suspense>
      </StoreProvider>
    </Router>
  );
};

export default App;
