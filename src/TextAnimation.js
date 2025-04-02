import React, { useEffect, useState, useRef } from "react";
import "./TextAnimation.css";

const TextAnimation = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[100vh] bg-white flex justify-center items-center p-[15px]">
      <div ref={textRef} className="animated-text headdb">
        {"Empowering Innovators. Accelerating Success.".split("  ").map((char, index) => (
          <span
            key={index}
            className={isVisible ? "letter-animate" : ""}
            style={{ animationDelay: `${Math.random() * 1}s` }} // Random delay between 0-2s
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
