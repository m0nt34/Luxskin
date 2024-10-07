import React, { useRef } from "react";
import Star from "../../assets/icons/Star";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Stars = () => {
  const stars = useRef(null);
  useGSAP(() => {
    gsap.from(stars.current.children, {
      delay: 1.2,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
    });
  });
  return (
    <div ref={stars}>
      <Star
        speed={250 - (250 - 30) * 0.55}
        TransitionDuration={0.2}
        className="1200px:h-[3.75vw] absolute opacity-55 h-[45px] top-[1.14%] left-[10%] rotate-[5deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.6}
        TransitionDuration={0.3}
        className="1200px:h-[3.75vw] absolute opacity-60 h-[45px] top-[0.86%] left-[30%] rotate-[-4deg]"
      />

    </div>
  );
};

export default Stars;
