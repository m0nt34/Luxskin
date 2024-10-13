import React, { useRef, useEffect, useState, useCallback } from "react";
import style from "../../assets/styles/home.module.css";
import gsap from "gsap";
import UseResize from "../../hooks/UseResize";
import { carouselImgs } from "../../data/WorkImages";
import ParallaxImg from "../../components/ParallaxImg";

const Carousel = () => {
  const windowWidth = UseResize();
  const carousel = useRef(null);
  const [carouselRotation, setCarouselRotation] = useState(0);
  const previousScrollY = useRef(0);

  const rotationAnimation = useCallback(() => {
    const scrollY =
      windowWidth >= 2500 ? window.scrollY / 80 : window.scrollY / 30;

    const scrollDifference = Math.abs(scrollY - previousScrollY.current);
    if (scrollDifference > 2) {
      previousScrollY.current = scrollY;

      gsap.to(carousel.current, {
        duration: 1,
        rotateY: scrollY,
      });

      setCarouselRotation(scrollY);
    }
  }, [windowWidth]);
  
  useEffect(() => {
    window.addEventListener("scroll", rotationAnimation);

    rotationAnimation();

    return () => {
      window.removeEventListener("scroll", rotationAnimation);
    };
  }, [rotationAnimation]);

  return (
    <div className={style.carousel}>
      <div className={style.slider} ref={carousel}>
        {carouselImgs.map((img, i) => {
          const imageRotation = i * 30;
          const relativeRotation = (carouselRotation + imageRotation) % 360;
          const isVisible =
            (relativeRotation >= -90 && relativeRotation <= 90) ||
            relativeRotation >= 270 ||
            relativeRotation <= -270;
          return (
            <div
              key={i}
              className={style.img_cont}
              style={{
                transform: `rotateY(${imageRotation}deg) translateZ(${
                  windowWidth >= 1200 ? windowWidth / 1.23 : 975
                }px)`,
                opacity: isVisible ? 0 : 1,
                visibility: isVisible ? "hidden" : "visible",
                transition: "opacity 0.3s",
              }}
            >
              <img
                src={img[0]}
                draggable="false"
                className="relative object-cover overflow-hidden w-full rounded-3xl 1200px:rounded-[2vw] aspect-[8/7]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
