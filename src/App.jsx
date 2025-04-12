import { useEffect, useState } from "react";

import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Social from "./Components/Social";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Navbar1 from "./Components/Navbar1";
import ResponsiveCon from "./Components/ResponsiveCon";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <>
      <div className="app_bg_container">
      <Navbar1 />
      <ResponsiveCon>
        <Home />
        <About />
        <Social />
       <DarkMode />
        <Skills />
        <Education />
      </ResponsiveCon>
      <Footer />
      </div>
    </>
  );
}


export default App;
