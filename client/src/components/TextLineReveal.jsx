import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const TextLineReveal = ({
  className = "text-white text-[36px] leading-[42px] 1200px:text-[3vw] 1200px:leading-[3.5vw]",
  text = "some text",
}) => {
  const revealLine = useRef(null);
  useGSAP(() => {
    gsap.to(revealLine.current, {
      duration: 0.5,
      width: "0%",
      scrollTrigger: {
        trigger: revealLine.current,
        start: "10% 85%",
        end: "10% 40%",
        scrub: true,
      },
    });
  });
  return (
    <div className="relative select-none">
      <p className={className}>{text}</p>
      <div
        className="absolute top-0 right-0 h-full z-10 w-full bg-[#202020] opacity-65"
        ref={revealLine}
      ></div>
    </div>
  );
};

export default TextLineReveal;
