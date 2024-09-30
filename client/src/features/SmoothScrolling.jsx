import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {

  const lenisOptions = {
    lerp: .07,
    duration: 1.2,
    wheelMultiplier: 0.9, 
    smoothTouch: false, 
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;