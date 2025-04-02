import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function SliderThird() {
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile and desktop images
  const mobileImages = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_4_-_400px_X_520px_2_76c0bdac-2718-4ab1-a0cd-263a4ce3a856.jpg?v=1731658156",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_5_-_400px_X_520px_-_Mobile_Size.jpg?v=1731658299",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Product_Slider_Banner_-_Pan_Masala_-_400px_X_520px_1_2.jpg?v=1724668206"
  ];

  const desktopImages = [
    "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Gummies_Slider_Banner_5_-_1500px_X_500px_1.jpg?v=1732014408",
    "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Gummies_Slider_Banner_4_-_1500px_X_500px_2_1.jpg?v=1732014408",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Product_Slider_Banner_-_Pan_Masala_-_1500X_500px_94cd57b0-49a8-4e03-acc7-585edd4243c2.jpg?v=1726478570"
  ];

  // Choose images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <>
      {/* Slider */}
      <div className=" js relative mt-9 ">
       
        <div className="backdrop-blur-2xl hidden md:flex md:h-[40px] md:p-[17px] p-[14px] absolute bottom-0 gap-6 w-full z-10 flex justify-center items-center" style={{background:'rgba(255, 255, 255, 0.3)'}}>
          {images.map((src, index) => (
            <div key={index}>
              <img  className=' md:h-24 h-[4.7rem]  md:p-3 ' src={src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
       
        </div>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img  loading='lazy' className="w-full object-contain " src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
