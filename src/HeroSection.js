import React from 'react'
import "./HeroSection.css"
import DecryptedText from './DecryptedText'
import BlurText from './BlurText'

function HeroSection() {
  return (
    <div class="Block_container__Nv4cD Block_isCream__VRtaM TextMedia_container__1OeME TextMedia_isCream__1R3ST snipcss-6nyWs blocks">
    <div>
        <div class="Container_container__NvvWg TextMedia_wrapper__Uesgc">
            <div class="TextMedia_content__jyQfX"><span class="TextMedia_eyebrow__y7WFh style-pFboy" id="style-pFboy">Our story</span>
                {/* <h2 class="TitleAnimation_container__smkeR TitleAnimation_isExtraSmall__sS_xP">
                    <div>
                        <div aria-hidden="true" class="TitleAnimation_title__liMEF style-ZA5eE" id="style-ZA5eE">
                            <div>
                                <div id="style-d6ZMT" class="style-d6ZMT">Building a future of </div>
                            </div>
                            <div>
                                <div id="style-iyRbO" class="style-iyRbO">affordable, abundant clean </div>
                            </div>
                            <div>
                                <div id="style-ETIrS" class="style-ETIrS">energy</div>
                            </div>
                        </div>
                        <div aria-hidden="true" class="TitleAnimation_title__liMEF style-xRtzJ" id="style-xRtzJ">
                            <div>
                                <div id="style-s4HC5" class="style-s4HC5">Building a future of </div>
                            </div>
                            <div>
                                <div id="style-lNXWo" class="style-lNXWo">affordable, abundant clean </div>
                            </div>
                            <div>
                                <div id="style-gJxrv" class="style-gJxrv">energy</div>
                            </div>
                        </div><span class="TitleAnimation_sr_only__GVx7j">Building a future of affordable, abundant clean energy</span>
                    </div>
                </h2> */}
                

{/* Example 1: Defaults (hover to decrypt) */}


{/* Example 2: Customized speed and characters */}


{/* Example 3: Animate on view (runs once) */}
<div className=' text-[#004037] font-bold md:text-4xl   text-[25px]'>
<BlurText
  text="BUILDING A FUTURE BY TRANSFORMING WELLNESS, NATURALLY"
  animateOn="view"
  revealDirection="center"
  className=' text-[#004037] font-bold md:text-6xl   text-[25px] md:text-[60px]'
/>
</div>
                <div class="RichText_container__wB3Cy TextMedia_copy__Ne6y6 style-STHt3" id="style-STHt3">
                    <p id="style-ZG7s3" class="style-ZG7s3 text-[21px]">Aayush Wellness was founded with a vision to make holistic well-being accessible to all. We believe true wellness comes from balancing mind, body, and soul. Our journey began with the goal of blending ancient Ayurvedic wisdom with modern science to create high-quality health and wellness solutions. Today, we continue to innovate, offering premium supplements and lifestyle products that empower individuals to lead healthier, happier lives.</p>
                </div>
                <div class="MultiButton_multiButton__iqSU8 TextMedia_multiButton__ISln4 style-q2bJL" id="style-q2bJL"><a style={{background:"#12c167"}} class="BaseButton_baseButton__gki38  " id="194f90a0-90a0-4000-8f90a06bc0-850" text="About us" href="/about/company-intro"><span>About us</span><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor"></path>
                        </svg></a></div>
            </div>
            <div class="TextMedia_mediaWrapper__e1HP_ style-POjkF" id="style-POjkF">
                <div><img alt="" loading="lazy" width="1528" height="1146" decoding="async" data-nimg="1" class="TextMedia_media__OGUty style-xcQ9s" src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_story_collage_1.jpg?v=1740462296" id="style-xcQ9s"/></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeroSection
