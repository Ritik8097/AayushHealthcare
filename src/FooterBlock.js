import { useState, useEffect } from "react";

const FooterBlock = () => {
  const slides = [
    { title: "Be Calm", link: "/gummies-sleep", text: "See our Gummies" },
    { title: "Be Involved", link: "/career", text: "See our Job Offers" },
    { title: "Be Inspired", link: "/about-us", text: "See our Story" },
    { title: "Be Informed", link: "//newsroom/in-the-news", text: "See our Wellness Journal" },
    { title: "Be Relieved", link: "/products/", text: "See our Products" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="footer__block2 animated"
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Background Images */}
      <img
        src="https://berelax.com/_next/static/media/4-1.515f831f.webp"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
          opacity: "0.5",
        }}
      />
      <img
        src="https://berelax.com/_next/static/media/4-1.515f831f.webp"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
          opacity: "0.3",
        }}
      />
      <img
        src="https://berelax.com/_next/static/media/4-3.90ca70bc.webp"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
          opacity: "0.2",
        }}
      />

      {/* Content */}
      <div
        className="footer__block2-content"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="footer__block2-slide"
            style={{
              opacity: index === activeIndex ? "1" : "0",
              transform: index === activeIndex ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              position: "absolute",
            }}
          >
            <h3
              className="footer__block2-title title"
              style={{
                fontSize: "75px",
                fontWeight: "bold",
                color: "#000000",
                marginBottom: "10px",
              }}
            >
              {slide.title}
            </h3>
            <a
              href={slide.link}
              className="button beige button-svg button-arrow p20p32"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                backgroundColor: "#d4b997",
                color: "#fff",
                padding: "20px 32px",
                borderRadius: "100px", // Updated
                fontSize: "20px", // Updated
                fontWeight: "400", // Updated
                fontFamily: "'Gotham Pro', sans-serif", // Updated
                fontStyle: "normal", // Updated
                lineHeight: "115%", // Updated
                whiteSpace: "nowrap", // Updated
                cursor: "pointer", // Updated
                transition: "background-color 0.3s",
              }}
            >
              {slide.text}
              <svg
                viewBox="0 0 26 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "10px", width: "20px", height: "20px" }}
              >
                <path d="M0 8.5h24m0 0-6.857-7M24 8.5l-6.857 7" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer__block2-title {
            font-size: 40px; /* Smaller font for mobile */
          }

          .button {
            font-size: 16px;
            padding: 0px 0px;
          }

          .footer__block2 {
            height: 100vh; /* Full height on mobile */
          }
            .footer{
                  padding: 0px 0px;            
            }
        }
      `}</style>
  
    </div>
  );
};

export default FooterBlock;
