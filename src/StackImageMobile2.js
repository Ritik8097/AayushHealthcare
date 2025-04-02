import React from 'react'
import BlurText from './BlurText'

function StackImageMobile2() {
  return (
    <>
    <div className=' bg-[#faf4e8]  md:hidden p-5'>
    <div className=' pt-[15px]'>
    <BlurText
 text="PREMIUM BLEND, AUTHENTIC FLAVOR"
 delay={150}
 animateBy="words"
 direction="top"
 
 className="md:text-6xl mb-8 text-[25px]  font-bold text-[#004037]"
/>
    </div>
    <p className=" pt-[15px]  text-[21px]">
    Crafted with the finest ingredients, our Pan Masala delivers an exquisite taste and rich aroma. Experience tradition with every bite, enhanced by a perfect balance of flavors.
            <br/>
            <div><br/><b>Authentic Spices </b> – A signature blend for a refreshing taste</div>
            <div><b>  Premium Ingredients </b>  – Handpicked for superior quality</div>
            
           </p>
           <a style={{height:"60px"}}
              className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
              text="Learn more"
              href="https://aayushveda.in/"
            >
              <span className=' text-[12px]'>Discover More </span>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
           <div className="StackedContent_mediaWrapper___gRyP p   ">
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
               src="https://cdn.shopify.com/videos/c/o/v/400e5697bcc6497eaf8fa8a3471479bc.mp4"
               id="style-9BbQF"
             />
           </div>
         </div>
    </div>
   
    </>
  )
}

export default StackImageMobile2