import React, { useEffect, useRef, useState, useMemo } from "react";
import style from "../../assets/styles/works.module.css";
import { Parallax } from "react-scroll-parallax";
import { useGSAP } from "@gsap/react";
import { imgURLs1, imgURLs2 } from "../../data/WorkImages";
import gsap from "gsap";
import useWindowWidth from "../../hooks/UseResize";

function Filter() {
  const filter_cont = useRef(null);

  const width = useWindowWidth();
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
        {imgURLs1.map((img, i) => {
          return (
            <div key={i}>
              <img src={img[0]} alt="" draggable="false" />
              <p>{img[1]}</p>
            </div>
          );
        })}
      </Parallax>
      <Parallax className={style.column} speed={width / 150}>
        {imgURLs2.map((img, i) => {
          return (
            <div key={i}>
              <img src={img[0]} alt="" draggable="false" />
              <p>{img[1]}</p>
            </div>
          );
        })}
      </Parallax>
    </div>
  );
}

export default Filter;
