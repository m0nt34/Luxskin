import React, { useRef, useState } from "react";
import style from "../../assets/styles/home.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import UseResize from "../../hooks/UseResize";
import image from "../../assets/images/photo-1610194352361-4c81a6a8967e-min.jpg";
const imgURLs = [
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
  [image, "image:"],
];
const Carousel = () => {
  const windowWidth = UseResize();
  const carousel = useRef(null);
  const [carouselRotation, setCarouselRotation] = useState(0);
  useGSAP(() => {
    const rotationAnimation = () => {
      const scrollY =
        windowWidth >= 2500
          ? (window.scrollY * windowWidth) / 50000
          : (window.scrollY * windowWidth) / 15000;
      setCarouselRotation(scrollY);
      gsap.to(carousel.current, {
        duration: 0.5,
        rotateY: scrollY,
      });
    };

    window.addEventListener("scroll", rotationAnimation);

    return () => {
      window.removeEventListener("scroll", rotationAnimation);
    };
  });

  return (
    <div className={style.carousel}>
      <div className={style.slider} ref={carousel}>
        {imgURLs.map((img, i) => {
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
                  windowWidth >= 1200 ? windowWidth / 1.5 : 800
                }px)`,
                display: isVisible ? "none" : "block",
              }}
            >
              <img src={img[0]} alt="" draggable="false" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
