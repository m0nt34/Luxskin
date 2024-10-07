import React, { useEffect, useRef } from "react";
import style from "../assets/styles/curve.module.css";
import useWindowWidth from "../hooks/UseResize";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Curve = ({ duration = 0.8, delay = 0.8 }) => {
  const path = useRef(null);
  const cont = useRef(null);
  const svgRef = useRef(null);
  const windowWidth = useWindowWidth();

  let progress = 0;
  let time = Math.PI / 2;
  let reqID = null;
  let x = 0.5;

  useGSAP(() => {
    setPath(progress);

    gsap.fromTo(
      svgRef.current,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: duration,
        ease: "power1.inOut",
        delay: delay,
      }
    );
  });
  useEffect(() => {
    setPath(progress);
  }, [windowWidth]);
  const setPath = (progress) => {
    const width = cont.current.offsetWidth;
    path.current.setAttributeNS(
      "",
      "d",
      `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
    );
  };

  const handleMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;

    progress += movementY;
    setPath(progress);
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const handleMouseEnter = () => {
    if (reqID) {
      window.cancelAnimationFrame(reqID);
      resetAnimation();
    }
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.05);
    if (Math.abs(progress) > 0.75) {
      reqID = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };
  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <div ref={cont} className={style.line}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={style.box}
        style={{ height: windowWidth * 0.04 }}
      ></div>
      <svg ref={svgRef}>
        <path ref={path}></path>
      </svg>
    </div>
  );
};

export default Curve;
