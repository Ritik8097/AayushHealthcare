import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AccordionItem from './AccordionItem'; // Ensure the correct path
import Header from './Header';
import NewFooter from './NewFooter';


let faqs = require('./faqs.json');

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

const Accordionweb = () => {
  const [active, setActive] = useState(faqs[0].id); // Default to the first accordion being open
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  
  

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile and desktop images
  const mobileImages = 
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/investor_banner_new_mobile.jpg?v=1742040865";

  const desktopImages = 
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/investor_banner_new.jpg?v=1741861349";

  // Choose images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  const handleToggle = (id) => {
    setActive(active === id ? null : id); // Toggle between open and closed
  };

  return (
    <>
      <Header />
      <div className="image-container">
        <img src={images} alt="Banner" style={{ width: "100%", height: "auto", paddingTop: "80px" }} />
      </div>

      <div className="first" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-fluid mt-5 mb-5 flex justify-center">
          <div className="w-full max-w-[1168px] p-2">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card" style={{ backgroundColor: "#ffffff", boxShadow: "none", width: "100%" }}>
                  <div className="card-body p-3">
                    <h4 className="form-heading text-primary text-start text-[34px] mt-3 mb-8">REPORTS</h4>
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewFooter/>
    </>
  );
};

export default Accordionweb;
