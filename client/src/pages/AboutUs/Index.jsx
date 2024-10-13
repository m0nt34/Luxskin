import React from "react";
import ParallaxImg from "../../components/ParallaxImg";
import niniIMG from "../../assets/images/nini.jpg";
import useScrollToTopOnMount from "../../hooks/ScrollToTop";
import Curve from "../../components/Curve";
import style from "../../assets/styles/aboutUs.module.css";
import Header from "./Header";
const Index = () => {
  useScrollToTopOnMount();
  return (
    <div className="min-h-screen pt-[50px] px-[50px] 1200px:pt-[4.18vw] 1200px:px-[4.18vw]">
      <Header />
      <div className="flex items-center justify-center w-full">
        <Curve />
      </div>
      <ParallaxImg
        img={niniIMG}
        length={800}
        contLength={0.7}
        strength={2}
        className="relative overflow-hidden rounded-lg"
      />
      <div className="text-[20px] text-white h-[100vh]"></div>
    </div>
  );
};

export default Index;
