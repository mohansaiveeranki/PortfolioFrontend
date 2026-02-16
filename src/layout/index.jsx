import React from "react";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import DarkMode from "../Components/DarkMode";
const Layout = () => {
  return (
    <div>
      <DarkMode />
      <Navbar1 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
