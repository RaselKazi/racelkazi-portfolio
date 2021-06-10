
import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import Nav from "./comp/Nav";
import Banner from "./Screens/Banner";
import About from "./Screens/About";
import Service from "./Screens/Services";
import Portfolio from "./Screens/Portfolio";
import Contact from "./Screens/Contact";
import Footer from "./comp/Footer";
import Preloader from "./comp/preloader";

function App() {

  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <div className="App">
       <Preloader load={load} />
      <Nav />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
