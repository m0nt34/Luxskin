import React, { useEffect, useRef } from "react";
import style from "../../assets/styles/footer.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import UseMagnet from "../../hooks/UseMagnet";

import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TiktokIcon from "../../assets/icons/TiktokIcon";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import { useLocation } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Index() {
  const TDModel = useRef(null);
  const footer = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const animation = gsap.fromTo(
      footer.current,
      {
        borderTopLeftRadius: "100% calc(1vw * 0)",
        borderTopRightRadius: "100% calc(1vw * 0)",
      },
      {
        borderTopLeftRadius: "100% calc(1vw * 20)",
        borderTopRightRadius: "100% calc(1vw * 20)",
        scrollTrigger: {
          trigger: footer.current,
          start: "30% bottom",
          end: "90% 81%",
          scrub: true,
          onLeave: () => ScrollTrigger.refresh(),
          onEnterBack: () => ScrollTrigger.refresh(),
        },
      }
    );

    ScrollTrigger.refresh();
    return () => {
      animation.kill();
    };
  }, [location]);
  return (
    <footer className={style.footer} ref={footer}>
      <div className={style.top_section}>
        <div className={style.subscription_container}>
          <p>STAY TUNED</p>
          <h3>
            <span>get our</span>
            <br />
            <span>newsletter</span>
          </h3>
          <div className={style.email_and_btn}>
            <div className={style.input_fld}>
              <input type="text" placeholder=" " />
              <span>Your email</span>
            </div>
            <UseMagnet str="0.4" drt="0.4">
              <button>
                <ArrowRightIcon />
              </button>
            </UseMagnet>
          </div>
        </div>

        <div className={style.canvas_cont}>
          <Spline
            style={{
              width: "100%",
              height: "100%",
            }}
            className={style.spline_model}
            ref={TDModel}
            scene="https://prod.spline.design/aCLBNCtcOUJZLROR/scene.splinecode"
          />
        </div>
        <div className={style.contacts_section}>
          <p>CONTACT US</p>
          <a href="#">luxskin@gmail.com</a>
          <a href="#">+995-555-555</a>
          <a href="#">esada es adigili</a>
        </div>
      </div>
      <div className={style.bottom_section}>
        <div className={style.social_media_container}>
          <UseMagnet str="0.7" drt="0.4">
            <a href="">
              <FacebookIcon />
            </a>
          </UseMagnet>
          <UseMagnet str="0.7" drt="0.4">
            <a href="">
              <InstagramIcon />
            </a>
          </UseMagnet>
          <UseMagnet str="0.7" drt="0.4">
            <a href="">
              <TiktokIcon />
            </a>
          </UseMagnet>
        </div>
        <div className={style.language_container}>
          <nav className={style.language_options}>
            <UseMagnet str="0.4" drt="0.4">
              <a href="#" data-lang="ka">
                <UseMagnet str="0.2" drt="0.4">
                  <span>ქართული</span>
                </UseMagnet>
              </a>
            </UseMagnet>
            <UseMagnet str="0.4" drt="0.4">
              <a href="#" data-lang="ru">
                <UseMagnet str="0.2" drt="0.4">
                  <span>Русский</span>
                </UseMagnet>
              </a>
            </UseMagnet>
            <UseMagnet str="0.4" drt="0.4">
              <a href="#" data-lang="en">
                <UseMagnet str="0.2" drt="0.4">
                  <span>English</span>
                </UseMagnet>
              </a>
            </UseMagnet>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Index;
