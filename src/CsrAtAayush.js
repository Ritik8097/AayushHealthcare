import React, { useState } from 'react';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from './Footer';
import Header from './Header';



function CsrAtAayush() {
   
   
    return (
      <>
       <Header/>
        {/* Slider */}
        <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className="w-full min-h-64 object-cover" src="https://www.dabur.com/_default_upload_bucket/6922/image-thumb__6922__portalCarousel/get-image-thumbnail_9.14155849.webp" alt="Slide 1" />
              <div className="absolute top-1/4 left-0 w-full text-center md:text-left p-7 md:pl-16">
                <h3 style={{ color: "#6F6B67", fontWeight: "bold" }} className="md:text-3xl md:text-left text-lg md:w-1/3"> Sustainably Your, Aayush</h3>
              </div>
            </div>
           
            
          </div>
          <p  className=' text-2xl text-center pt-4 mt-12'>Sustainably Your, Aayush</p>
          <h2 className=' text-3xl text-center pt-4' style={{color:"#d1a272"}}>
          Creating Empowered Communities
      </h2>
      <div className=' flex items-center justify-center flex-col mt-12' style={{outline: 'rgb(112, 112, 112) none 0px', boxSizing: 'border-box'}}>
    <p style={{maxWidth:"800px",textAlign:"center",fontSize: '18px', color: 'rgb(112, 112, 112)', lineHeight: '25.2px', marginBottom: '25px', outline: 'rgb(112, 112, 112) none 0px', margin: '0px 0px 25px', boxSizing: 'border-box'}}>‘What is that life worth which cannot bring comfort to others.’ This noble thought of our founder Dr. S K Burman has been the guiding principle for the Company and also the pillar supporting our community development initiatives. Dabur has been engaged in community development activities since 1994 and is committed to making a positive contribution to the communities where we source, live, work and sell our products.</p>
    <p style={{fontSize: '18px', color: 'rgb(112, 112, 112)', lineHeight: '25.2px', marginBottom: '0px', outline: 'rgb(112, 112, 112) none 0px', margin: '0px', boxSizing: 'border-box'}}><img alt="Group 36107" src="https://www.dabur.com/static/images/Image_111.png" style={{maxWidth: '100%', height: 'auto', outline: 'rgb(112, 112, 112) none 0px', verticalAlign: 'middle', boxSizing: 'border-box', border: '0px none rgb(112, 112, 112)', display: 'block', marginRight: 'auto', marginLeft: 'auto'}} /></p>
</div>

      <Footer />
        </div>
        
  </>
    )
}

export default CsrAtAayush
