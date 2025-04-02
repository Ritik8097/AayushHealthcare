import React, {  useState } from "react";
import "./CleanEnergyHero.css"; // Make sure to include your CSS file
import BlurText from "./BlurText";

const CleanEnergyHero = () => {
 
 

 

  return (
    <div className="md:flex md:w-full  bg-[#004037] block  items-center pl-[20px] blocks">
      <div className="HomeHero_content__DYNN6">
      <BlurText
  text="Science & Ayurveda for a Healthier Tomorrow"
  delay={150}
  animateBy="words"
  direction="top"
  
  className="md:text-6xl mb-8 text-[25px]  font-bold text-[#f9f3e8] uppercase"
/>
        <p className="HomeHero_copy__GS3c3">
        Aayush Wellness blends ancient Ayurveda with modern science to create premium wellness solutions for your body, mind, and soul.
        </p>
        <div className="MultiButton_multiButton__iqSU8 HomeHero_multiButton__TZa0b">
          <a
            className="BaseButton_baseButton__gki38"
            id="194ff0e7-f0e7-4000-8ff0e7f7a0-cc4"
            text="Request demo"
            href="/ourproduct"
          >
            <span>Explore Our Products</span>
            <svg
              width={11}
              height={10}
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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

      <div className="HomeHero_mediaWrapper__g_1Dk">
        <div className="Video_container__CkVas HomeHero_media__R_Dw1">
        <video
  
  autoPlay
  loop
  playsInline
  muted  // Some browsers require muted autoplay
   // Optional: Remove this if you don't want controls
 
>
  <source src="https://cdn.shopify.com/videos/c/o/v/27decbf1992946a5af2be99e9f2b1c7f.mp4" type="video/mp4"/>
  <source src="https://cdn.shopify.com/videos/c/o/v/27decbf1992946a5af2be99e9f2b1c7f.webm" type="video/webm"/>
  Your browser does not support the video tag.
</video>
            
          {/* <video
            className="Video_media__oBfuR snipcss0-0-0-1"
            ref={videoRef}
            autoPlay
            loop
            playsInline
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/9c6744b80a83409d97fe49afe6fdac3d.mp4"
              type="video/mp4"
              className="snipcss0-1-1-2"
            />
            <source
              src="https://cdn.shopify.com/videos/c/o/v/9c6744b80a83409d97fe49afe6fdac3d.mp4"
              type="video/webm"
              className="snipcss0-1-1-3"
            />
          </video> */}
          
        </div>
      </div>
    </div>
  );
};

export default CleanEnergyHero;
