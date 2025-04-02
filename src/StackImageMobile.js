 import React from 'react'
 import BlurText from './BlurText'
 
 function StackImageMobile() {
   return (
     <>
     <div className=' bg-[white]  md:hidden p-5'>
     <div className=' pt-[15px]'>
     <BlurText
  text="SLEEP PEACEFULLY, GLOW NATURALLY"
  delay={150}
  animateBy="words"
  direction="top"
  
  className="md:text-6xl mb-8 text-[25px]  font-bold text-[#004037]"
/>
     </div>
     <p className=" pt-[15px]  text-[20px]">
            Wake up refreshed and radiant with our expertly crafted Sleep & Beauty Gummies. Infused with powerful ingredients to support deep sleep and enhance natural beauty from within.
            <br/>
            <div><br/><b>Melatonin & Chamomile</b> – Promotes restful sleep & relaxation</div>
            <div><b> Glutathione & Biotin</b>  – Enhances skin glow & strengthens hair</div>
            <div><b> Hyaluronic Acid & Collagen </b> – Boosts hydration & skin elasticity</div>
            </p>
           
            <a style={{height:"60px"}}
              className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
              text="Learn more"
              href="https://aayushlife.com/"
            >
              <span className=' text-[12px]'>Explore Gummies</span>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <div className="StackedContent_mediaWrapper___gRyP   bg-[#f9f3e8] ">
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
                className="StackedContent_media__haQuf style-9BbQF image-transition"
                src="https://cdn.shopify.com/videos/c/o/v/120abaf722cf4d77ae37d7626603f20a.mp4"
                id="style-9BbQF"
              />
            </div>
          </div>
     </div>
    
     </>
   )
 }
 
 export default StackImageMobile