import React, { useEffect, useState } from 'react'

import SkeletonLoader from './SkeletonLoader';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Header from './Header';
import NewFooter from './NewFooter';



function Ayurveda() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a network request
      setTimeout(() => {
        setLoading(false);
      }, 200); // Adjust the timeout duration as needed
    }, []);
  
    if (loading) {
      return <SkeletonLoader />;
    }
   
    return (
      <>
       <Header/>
        {/* Slider */}
        <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full  hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Wellness_You_-_What_Is_Ayurveda.jpg?v=1724334008" alt="Slide 1" />
             <img className=' w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Ayurveda_banner_mobile_1.jpg?v=1724670357' />
            </div>
           
            
          </div>
          <h2 className=' text-3xl text-center pt-4'>
          Ayurveda, the ‘Science of life’
      </h2>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
       
      Aayush wellness is a holistic approach to health that seeks to create balance and harmony within the body, mind, and spirit. Rooted in the ancient traditions of Ayurveda, this wellness philosophy emphasizes the importance of aligning one’s lifestyle with natural rhythms and individual constitution. Ayurvedic practices focus on prevention through personalized diet, herbal remedies, physical activity, and mental well-being, aiming to maintain balance and prevent disease before it arises. By understanding and nurturing the body's unique needs, Ayurvedic wellness offers a path to sustained health, vitality, and inner peace.
<br />

Ayurveda is a traditional Practice of medicine from India, known for its well-organized approach to health care that encompasses both prevention and treatment. Widely practiced in various parts of Asia, Ayurveda is recognized as an important traditional medical practice.
<br />
In 1971, the Indian government established the Indian Medical Council to uphold standards for medical education at both undergraduate and postgraduate levels. This council sets the qualifications for practitioners of Indian medicine and acknowledges several traditional practices, including Ayurveda, Unani, and Siddha.
<br />
Similar to modern scientific medicine, Ayurveda addresses both preventive and therapeutic aspects of health. Its preventive approach emphasizes adherence to a strict code of personal and social hygiene, tailored to an individual’s specific needs, as well as the influences of climate and environment.
<br />
The origins of Ayurveda are attributed to Dhanvantari, a divine physician in Hindu mythology who is believed to have received this knowledge from the god Brahma. The earliest concepts of Ayurveda are found in the Atharvaveda, a section of the Vedas dating back to around the 2nd millennium BCE. The Vedic period of Ayurvedic medicine continued until about 800 BCE.

      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Ayurveda and the Balance of Life Energy</h3>
      Ayurveda operates on the principle that everything in the universe, whether living or non-living, is interconnected. Good health is believed to result from the harmony of the mind, body, and spirit with the universe. When this balance is disrupted—due to factors like genetic conditions, injuries, climate changes, aging, or emotions—illness can occur.
      <br />
      While exact statistics are unavailable, it is estimated that around 80% of the Indian population uses Ayurvedic treatments to some extent. In India, Ayurveda is regarded as a traditional medical system, with some practitioners even qualified to perform surgeries. In contrast, in the United States, Ayurveda is viewed as a form of complementary and alternative medicine.
<br />
Ayurveda, rooted in the Indian subcontinent, is an alternative medical system practiced extensively in India, Nepal, Bangladesh, Pakistan, and Sri Lanka. Approximately 80% of the population in these regions reportedly use Ayurvedic practices. However, it’s important to note that some aspects of Ayurveda, including the use of certain heavy metals like lead in its remedies, have been criticized as being pseudoscientific.

      </div>
      
      </div>
     


      <NewFooter />
        </div>
        
  </>
    )
}

export default Ayurveda
