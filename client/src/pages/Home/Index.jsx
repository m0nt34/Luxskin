import React, { useRef } from "react";
import style from "../../assets/styles/home.module.css";
import LuxSkinImg from "../../assets/images/LUX_SKIN-01.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import useScrollToTopOnMount from "../../hooks/ScrollToTop";
import Carousel from "./Carousel";
import LuxSkinMainLogo from "../../assets/icons/LuxSkinMainLogo";
gsap.registerPlugin(ScrollTrigger);
function Index() {
  const logo = useRef(null);
  const cards = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      logo.current,
      { opacity: 1, duration: 2, delay: 1 },
      {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: logo.current,
          start: "10%",
          end: "70%",
          scrub: true,
        },
      }
    );
    gsap.from(cards.current.children, {
      duration: 0.5,
      x: -50,
      opacity: 0,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards.current,
        start: "bottom bottom-=200px",
        end: "bottom top",
      },
    });
  });
  useScrollToTopOnMount();

  return (
    <div className={style.main_cont}>
      <div ref={logo}>
        <LuxSkinMainLogo className={style.home_page_logo} />
      </div>
      <div className={style.bottom_cont}>
        {/* <Carousel /> */}
        <div style={{ height: "100vh", width: "100%", zIndex: "0" }}></div>
        <div className={style.information_card_container} ref={cards}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>

        <div style={{ height: "100vh", width: "100%" }}></div>
      </div>
    </div>
  );
}

export default Index;
