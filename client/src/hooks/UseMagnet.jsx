import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function UseMagnet({ children, str, drt }) {
  const magnetic = useRef(null);

  useGSAP(() => {
    const mouseMove = (e) => {
      const { x, y } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const px = x - left;
      const py = y - top;
      gsap.to(magnetic.current, {
        x: (px - width / 2) * str,
        y: (py - height / 2) * str,
        duration: drt,
        ease: "power3.out",
      });
    };

    const mouseLeave = (e) => {
      gsap.to(magnetic.current, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });
    };

    magnetic.current.addEventListener("mousemove", mouseMove);
    magnetic.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      magnetic.current.removeEventListener("mousemove", mouseMove);
      magnetic.current.removeEventListener("mouseleave", mouseLeave);
    };
  });

  return React.cloneElement(children, { ref: magnetic });
}
