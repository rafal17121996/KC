import React from 'react';

import StoreProvider from "./store/StoreProvider";


import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Offer from "./components/Offer/Offer";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';





const App = () => {
    return (
        <StoreProvider>
        <Navbar />
        <Home />
        <AboutMe />
        <Offer />
        <Contact />
        <FAQ />
       
        <Footer />
        </StoreProvider>
    );
}

export default App;
