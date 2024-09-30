import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import useMousePosition from "../../hooks/useMousePosition";

const Star = ({ className = "", speed = 100, TransitionDuration = 1 }) => {
  const ref = useRef(null);
  const { x, y } = useMousePosition();

  useGSAP(() => {
    gsap.to(ref.current, {
      duration: TransitionDuration,
      x: x / speed,
      y: y / speed,
      ease: "power1.out",
    });
  }, [x, y]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
      className={className}
      ref={ref}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ccd956", stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: "#b0812a", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
          fill="url(#gradient1)"
        />
      </g>
    </svg>
  );
};

export default Star;
