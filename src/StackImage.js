import React, { useState, useEffect, useRef } from "react";
import "./Stackimage.css";
import BlurText from "./BlurText";



const StackImage = () => {
    const [isInView, setIsInView] = useState(false);
  
    const sectionRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
  
            


            if (rect.top < windowHeight * 0.47 && rect.bottom > -windowHeight * 0.5) {
              setIsInView(true);
             // 50% to 150%
            } else {
              setIsInView(false);
               // Above 50%
            }
          });
        },
        { threshold: [1]} // Trigger at 50% visibility
      );  
    
  
      sectionRefs.current.forEach((section) => {
        if (section) observer.observe(section);
      });
  
      return () => observer.disconnect();
    }, []);
  return (
    
    <div className={`Block_container__Nv4cD Block_isCream__VRtaMm StackedContent_container__DfJEU snipcss-YBdoL blocks hidden md:block  ${isInView ? "active-background" : ""}`}>
      <div className="Container_container__NvvWg StackedContent_wrapper__2JCtc snipcss0-1-1-2 style-ee6GF" id="style-ee6GF">
        <div className="StackedContent_mediaContainer__5BNSM">
          <div className="StackedContent_mediaWrapper___gRyP StackedContent_isActive__U4mo3">
            <div>
              <video
              loop
              autoPlay
              // poster="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/display_image_for_gummies_6d8e5494-f02b-4bc9-a00f-ce1f30451c0f.jpg?v=1739540178"
              muted
              playsInline
                alt=""
                loading="lazy"
                width="1528"
                height="1644"
                decoding="async"
                data-nimg="1"
                className="StackedContent_media__haQuf style-mKRVT image-transition"
                src={
                  isInView
                    ? "https://cdn.shopify.com/videos/c/o/v/400e5697bcc6497eaf8fa8a3471479bc.mp4"
                    : "https://cdn.shopify.com/videos/c/o/v/fed476cd8dd24d17b7ebf64e63335c99.mp4"
                }
                id="style-mKRVT"
              />
            </div>
          </div>
          <div className="StackedContent_mediaWrapper___gRyP">
            <div>
              <img
                alt=""
                loading="lazy"
                width="1528"
                height="1644"
                decoding="async"
                data-nimg="1"
                className="StackedContent_media__haQuf style-9BbQF image-transition"
                src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/display_image_for_Panmasala.jpg?v=1739539866"
                id="style-9BbQF"
              />
            </div>
          </div>
        </div>
        <div className="StackedContent_contentWrapper__6MXgH snipcss0-2-2-10">
          <div className="StackedContent_content__QTFkv StackedContent_isActive__U4mo3">
          <BlurText
  text="SLEEP PEACEFULLY, GLOW NATURALLY"
  delay={150}
  animateBy="words"
  direction="top"
  
  className="md:text-6xl mb-8 text-[25px]  font-bold text-[#004037]"
/>
            <p className="  text-[20px]">
            Wake up refreshed and radiant with our expertly crafted Sleep & Beauty Gummies. Infused with powerful ingredients to support deep sleep and enhance natural beauty from within.
            <br/>
            <div><br/><b>Melatonin & Chamomile</b> – Promotes restful sleep & relaxation</div>
            <div><b> Glutathione & Biotin</b>  – Enhances skin glow & strengthens hair</div>
            <div><b> Hyaluronic Acid & Collagen </b> – Boosts hydration & skin elasticity</div>
            </p>
           
            <a
              className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
              text="Learn more"
              href="https://aayushlife.com/"
            >
              <span className=" text-[20px]">Explore Gummies</span>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div ref={(el) => (sectionRefs.current[0] = el)} className={`StackedContent_content__QTFkv ${isInView ? "active-section" : ""}`}>
          <BlurText
  text="PREMIUM BLEND, AUTHENTIC FLAVOR"
  delay={150}
  animateBy="words"
  direction="top"
  className={`md:text-6xl mb-8 text-[25px]  font-bold text-black ${isInView ? "active-text" : ""} `}
 
/>
            {/* <h2 className={`StackedContent_title__2FGoE ${isInView ? "active-text" : ""} `}>Built on our leading data platform</h2> */}
            <p className="  text-[20px]">
            Crafted with the finest ingredients, our Pan Masala delivers an exquisite taste and rich aroma. Experience tradition with every bite, enhanced by a perfect balance of flavors.
            <br/>
            <div><br/><b>Authentic Spices </b> – A signature blend for a refreshing taste</div>
            <div><b>  Premium Ingredients </b>  – Handpicked for superior quality</div>
            
            </p>
            <a
              className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
              text="Learn more"
              href="https://aayushveda.in/"
            >
              <span className=" text-[20px]">Discover More</span>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default StackImage;
