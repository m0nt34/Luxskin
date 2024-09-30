import style from "../../assets/styles/works.module.css";
import React, { useRef } from "react";
import Filter from "./Filter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useScrollToTopOnMount from "../../hooks/ScrollToTop";
import Stars from "./Stars";


const Index = () => {
  const header_top = useRef(null);
  const header_bottom = useRef(null);
  useGSAP(() => {
    gsap.from(header_top.current, {
      delay: 0.75,
      duration: 1,
      opacity: 0,
      y: 30,
    });
    gsap.from(header_bottom.current, {
      delay: 1,
      duration: 1,
      opacity: 0,
      y: 20,
    });
  });
  useScrollToTopOnMount()
  
  return (
    <div className={style.main_cont}>
      <Stars/>
      <div className={style.top_section}>
        <div className={style.header_cont}>
          <div className={style.header_top_section} ref={header_top}>
            <h1>Take a look at </h1>
            <h1>our best works</h1>
          </div>
          <p ref={header_bottom}>Help us make even more better works!</p>
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Index;
