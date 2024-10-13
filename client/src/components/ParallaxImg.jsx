import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ParallaxImg = ({
  img,
  length,
  contLength,
  strength = 2,
  className = "relative overflow-hidden rounded-xl",
  classNameIMG = "absolute bottom-0 left-0 object-cover object-center",
  vertical = true,
}) => {
  const refImg = useRef(null);
  const refCont = useRef(null);
  const [imgSize, setImgSize] = useState({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    setTimeout(() => {
      setImgSize({
        width: refImg.current.offsetWidth,
        height: refImg.current.offsetHeight,
      });
    }, 10);
  }, [refImg.current]);

  useGSAP(() => {
    gsap.to(refImg.current, {
      [vertical ? "y" : "x"]: () =>
        vertical
          ? (refImg.current.offsetHeight - refCont.current.offsetHeight) /
            strength
          : (refImg.current.offsetHeight - refCont.current.offsetHeight) /
            strength,
      ease: "none",
      scrollTrigger: {
        trigger: refCont.current,
        scrub: true,
        pin: false,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <div
      ref={refCont}
      style={
        vertical
          ? {
              height: `${length * contLength}px`,
              width: imgSize.width,
            }
          : {
              height: imgSize.height,
              width: `${length * contLength}px`,
            }
      }
      className={className}
    >
      <img
        src={img}
        ref={refImg}
        className={classNameIMG}
        style={vertical ? { height: `${length}px` } : { width: `${length}px` }}
        draggable="false"
        alt="Parallax"
      />
    </div>
  );
};

export default ParallaxImg;
