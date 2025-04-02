import React from 'react';


import Footer from './Footer';
import Header from './Header';

function AboutUs() {
   
  return (
    <div>
        <Header/>
         
      <h3 className=' text-3xl text-center pt-4' style={{color:"#d1a272"}}>
      Our Product Vision

      </h3>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      At Aayush Wellness, our mission is to elevate health standards across India by providing innovative, natural healthcare solutions that empower individuals to prioritize their well- being. We aim to revolutionize the healthcare landscape by leveraging Ayurveda and modern scientific advancements. Our dedication drives us to create a healthier, happier, and more prosperous India, making a lasting positive impact on our fellow citizens.
      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      Our vision transcends traditional healthcare, aiming to create a healthier, happier India where every individual’s well-being is paramount. We envision a nation where smiles are brighter, lives are longer, and every heartbeat resonates with vitality and joy. We believe wellness is not merely the absence of disease but a state of optimal physical, mental, and emotional well-being.
      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      Aayush Wellness Ltd., originally established as Aayush Food and Herbs Ltd. in 1989, has undergone a remarkable transformation. Listed on the BSE under scrip code 539528, we have  demonstrated  our dedication to quality and safety by obtaining ISO 9000 and 22000 certifications.

Aayush Wellness Ltd. now focuses on providing wholehearted health and wellness solutions. The company now provides advanced nutraceuticals, supplements, healthy food, and enriching solutions by redefining typical practices.

These are carefully created to improve well-being worldwide, and they represent a critical turning point in the company’s history from modest beginnings to becoming a leader in the wellness sector.
      </div>
      
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
