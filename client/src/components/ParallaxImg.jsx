import { useGSAP } from "@gsap/react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImg = ({ img, height, width }) => {
  const refImg = useRef(null);
  const refCont = useRef(null);

  useGSAP(() => {
    if (refImg.current && refCont.current) {
      gsap.to(refImg.current, {
        y: () => (refImg.current.offsetHeight - refCont.current.offsetHeight)/3,
        ease: "none",
        scrollTrigger: {
          trigger: refCont.current,
          scrub: true,
          pin: false,
          invalidateOnRefresh: true,
        },
      });
    }
  });

  return (
    <div
      ref={refCont}
      style={{ height: `${height}px`, width: `${width}px` }}
      className="relative overflow-hidden"
    >
      <img
        src={img}
        ref={refImg}
        className="absolute bottom-0 left-0 w-full h-[170%] object-cover object-center"
        alt=""
      />
    </div>
  );
};

export default ParallaxImg;
