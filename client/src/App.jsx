import React from "react";
import { Routes, Route } from "react-router-dom";

//****************************** pages ******************************
import Home from "./pages/Home/Index";
import Contact from "./pages/Contact/Index";

import Works from "./pages/Works/Index";

import NotFound from "./pages/NotFound/Index";
import AboutUs from "./pages/AboutUs/Index";
//****************************** components ******************************
import "./assets/styles/App.css";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/works" element={<Works />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
