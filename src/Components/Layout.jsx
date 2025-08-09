import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="site-wrapper">
        <Navbar />
      <main className="main-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
