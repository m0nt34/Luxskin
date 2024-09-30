import React, { useEffect, useRef, useState, useMemo } from "react";
import style from "../../assets/styles/works.module.css";
import { Parallax } from "react-scroll-parallax";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
const imgURLs = [
  [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "image:",
  ],

  [
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "image:",
  ],
];
function Filter() {
  const filter_cont = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  useGSAP(() => {
    gsap.from(filter_cont.current, {
      delay: 1.3,
      duration: 1,
      opacity: 0,
      y: 20,
    });
  });
  
  return (
    <div className={style.filter_cont} ref={filter_cont}>
      <Parallax className={style.column} speed={-width / 150}>
        {imgURLs.map((img, i) => {
          return (
            <div key={i}>
              <img src={img[0]} alt="" draggable="false" />
              <p>{img[1] + i}</p>
            </div>
          );
        })}
      </Parallax>
      <Parallax className={style.column} speed={width / 150}>
        {imgURLs.map((img, i) => {
          return (
            <div key={i}>
              <img src={img[0]} alt="" draggable="false" />
              <p>{img[1] + i}</p>
            </div>
          );
        })}
      </Parallax>
    </div>
  );
}

export default Filter;
