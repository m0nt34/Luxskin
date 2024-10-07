import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ParallaxImg = ({
  img,
  imgHeight,
  contHeight,
  strength = 2,
  className = "relative overflow-hidden rounded-xl",
}) => {
  const refImg = useRef(null);
  const refCont = useRef(null);
  const [imgWidth, setImgWidth] = useState(500);

  useEffect(() => {
    setTimeout(() => {
      setImgWidth(refImg.current.offsetWidth);
    });
  }, [refImg.current]);

  useGSAP(() => {
    gsap.to(refImg.current, {
      y: () =>
        (refImg.current.offsetHeight - refCont.current.offsetHeight) / strength,
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
      style={{
        height: `${imgHeight * contHeight}px`,
        width: imgWidth,
      }}
      className={className}
    >
      <img
        src={img}
        ref={refImg}
        className="absolute bottom-0 left-0 h-[150%] object-cover object-center"
        style={{ height: `${imgHeight}px` }}
        alt="Parallax"
      />
    </div>
  );
};

export default ParallaxImg;
