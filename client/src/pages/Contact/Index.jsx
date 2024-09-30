import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer/Index";
import style from "../../assets/styles/contact.module.css";
import image from "../../assets/images/mockup1.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useScrollToTopOnMount from "../../hooks/ScrollToTop";

const Index = () => {
  const leftSide = useRef(null);
  const rightSide = useRef(null);

  useGSAP(() => {
    gsap.from(leftSide.current, {
      duration: 0.75,
      x: -50,
      opacity: 0,
      delay: 0.75,
    });
    gsap.from(rightSide.current, {
      duration: 1,
      x: 50,
      opacity: 0,
      delay: 1,
    });
  });
  useScrollToTopOnMount();
  return (
    <div className={style.main_cont}>
      <div className={style.inside_cont}>
        <div className={style.left_side} ref={leftSide}>
          <span>Contact Us</span>
          <div className={style.image_cont}>
            <img src={image} alt="" className={style.image} />
          </div>
          <p>
            Elevate your style with our premium beauty treatments
            <br />
            and services.
            <br />
            <br />
            Curious how we can help you look and feel amazing?
            <br />
            <br />
            Don't hesitate to reach out, and let's craft your
            <br />
            perfect look together!
          </p>
          <div className={style.input_fld}>
            <input type="text" placeholder=" " />
            <span>Your name</span>
          </div>
        </div>

        <div className={style.right_side} ref={rightSide}>
          <textarea name="" id="" placeholder="Your message..."></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
