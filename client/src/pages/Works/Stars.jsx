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
        className="1200px:h-[3.75vw] absolute opacity-55 h-[45px] top-[2%] left-[10%] rotate-[5deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.6}
        TransitionDuration={0.3}
        className="1200px:h-[3.75vw] absolute opacity-60 h-[45px] top-[1.5%] left-[30%] rotate-[-4deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.65}
        TransitionDuration={0.4}
        className="1200px:h-[3.75vw] absolute opacity-65 h-[45px] top-[10%] left-[90%] rotate-[4deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.7}
        TransitionDuration={0.5}
        className="1200px:h-[3.75vw] absolute opacity-70 h-[45px] top-[12%] left-[20%] rotate-[6deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.75}
        TransitionDuration={0.6}
        className="1200px:h-[3.75vw] absolute opacity-75 h-[45px] top-[14%] left-[40%] rotate-[1deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.8}
        TransitionDuration={0.7}
        className="1200px:h-[3.75vw] absolute opacity-80 h-[45px] top-[2%] left-[60%] rotate-[-5deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.85}
        TransitionDuration={0.8}
        className="1200px:h-[3.75vw] absolute opacity-85 h-[45px] top-[4%] left-[80%] rotate-[3deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.75}
        TransitionDuration={0.9}
        className="1200px:h-[3.75vw] absolute opacity-75 h-[45px] top-[3%] left-[90%] rotate-[-3deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.7}
        TransitionDuration={1.0}
        className="1200px:h-[3.75vw] absolute opacity-70 h-[45px] top-[6%] left-[15%] rotate-[-4deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.65}
        TransitionDuration={1.1}
        className="1200px:h-[3.75vw] absolute opacity-65 h-[45px] top-[12%] left-[75%] rotate-[9deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.6}
        TransitionDuration={1.2}
        className="1200px:h-[3.75vw] absolute opacity-60 h-[45px] top-[2%] left-[45%] rotate-[8deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.55}
        TransitionDuration={1.3}
        className="1200px:h-[3.75vw] absolute opacity-55 h-[45px] top-[7%] left-[85%] rotate-[10deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.8}
        TransitionDuration={1.4}
        className="1200px:h-[3.75vw] absolute opacity-80 h-[45px] top-[10.5%] left-[40%] rotate-[-5deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.85}
        TransitionDuration={1.5}
        className="1200px:h-[3.75vw] absolute opacity-85 h-[45px] top-[11.25%] left-[9%] rotate-[3deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.6}
        TransitionDuration={1.6}
        className="1200px:h-[3.75vw] absolute opacity-60 h-[45px] top-[8%] left-[5%] rotate-[-9deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.75}
        TransitionDuration={1.7}
        className="1200px:h-[3.75vw] absolute opacity-75 h-[45px] top-[12%] left-[95%] rotate-[-8deg]"
      />
      <Star
        speed={250 - (250 - 30) * 0.7}
        TransitionDuration={1.8}
        className="1200px:h-[3.75vw] absolute opacity-70 h-[45px] top-[12%] left-[55%] rotate-[2deg]"
      />
    </div>
  );
};

export default Stars;
