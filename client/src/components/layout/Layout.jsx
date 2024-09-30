import React from "react";
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Index";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
