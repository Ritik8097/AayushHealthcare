import React, { useState, useRef } from "react";
import "./Blog.css"; // Ensure you have the necessary CSS for styling

const Blogg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      img: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_1_2.jpg?v=1739438063",
      title: "How the Landscape of Indian Healthcare is Shifting",
      link: "/Blog1",
      content:
        "India’s healthcare sector is undergoing a massive transformation, driven by technological advancements, policy reforms, and a growing emphasis on preventive care. From digital health solutions to increased investments in infrastructure, the Indian healthcare landscape is evolving rapidly to meet the demands of its vast population. Let’s explore the key factors shaping the future of healthcare in India....",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_2_2.jpg?v=1739438065",
      title: "Focus on Preventive Healthcare and Nutrition Post-COVID",
      link: "/Blog2",
      content:
        "The COVID-19 pandemic has reshaped how we perceive health and wellness. It has made one thing abundantly clear: preventive healthcare is no longer optional but essential. With the increasing awareness of immunity, nutrition, and overall well-being, people are now focusing more on building resilience against future health challenges. In this blog, we explore the importance of preventive.......",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_3_insurance.jpg?v=1740228516",
        title: "Why Health Insurance is a Must-Have: Benefits & Coverage Explained",
        link: "/Blog3",
        content:
          " In today's fast-paced world, maintaining good health is crucial, butmedical expenses are rising at an alarming rate. A sudden illness or accident can drain your savings and put financial stress on your family. This is where health insurance becomes essential. Having a comprehensive health insurance plan safeguards you against unexpected medical costs and ensures that you get the best....",
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_4_health_check.jpg?v=1740228530",
        title: "Essential Health Checkups: What Tests You Need & Why",
        link: "/Blog4",
        content:
          "Your health is your greatest asset, and regular health checkups play a vital role in early detection and prevention of serious illnesses.Many diseases develop silently, showing no symptoms until they reach an advanced stage. That’s why routine medical tests are crucial for maintaining good health......"
      },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <div className="blog-title ">
    
    <h2>BLOGS</h2>
   
  </div>
    <div className="blogg-wrapper"> {/* Centering Wrapper */}
      <div className="slider-container">
        <div className="slider" ref={sliderRef} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="slide-image">
                <img src={slide.img} alt={slide.title} />
              </div>
              <div className="blogcontent-sec">
                {/* <span>FEATURED</span> */}
                <h2 className="slideblog-tile">
                  <a href={slide.link}>{slide.title}</a>
                </h2>
                <div className="text_content">{slide.content}</div>
                <a className="buttonlink-sec" href={slide.link}>Read more</a>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation">
          <button id="prevBtn" className="btn" onClick={prevSlide} disabled={currentSlide === 0}>
            <img src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/left-arrow_1.png?v=1725432277" alt="Prev" />
          </button>
          <button id="nextBtn" className="btn" onClick={nextSlide}>
            <img src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/arrow-right_1.png?v=1725432187" alt="Next" />
          </button>
        </div>
      </div>
    </div>
    </>);
};

export default Blogg;