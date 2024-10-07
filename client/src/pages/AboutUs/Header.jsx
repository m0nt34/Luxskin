import React, { useRef } from "react";
import style from "../../assets/styles/aboutUs.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
const Header = () => {
  const cont = useRef(null);
  useGSAP(() => {
    let mySplitText = new SplitType(cont.current);
    let chars = mySplitText.chars;
    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.025,
      delay: 1,
    });
  });
  return (
    <header ref={cont} className={style.header}>
      <p>Helping You Shine</p>
      <p>with Confidence and Beauty</p>
    </header>
  );
};

export default Header;
