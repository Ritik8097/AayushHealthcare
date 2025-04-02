import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  // useEffect(() => {
  //   if (lenisRef.current) {
  //     lenisRef.current.scrollTo(document.body.scrollHeight, {
  //       immediate: true, // Ensures it reaches the full bottom
  //     });
  //   }
  // }, [lenisRef]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9, // Adjust for ultra smoothness
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing function
     
    });

    function update(time) {
      lenis.raf(time);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    lenisRef.current = lenis;

    // Handle resizing properly
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;