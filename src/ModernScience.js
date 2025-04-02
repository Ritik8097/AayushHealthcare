import React, { useEffect, useState } from 'react'
import Header from './Header';
import SkeletonLoader from './SkeletonLoader';
import NewFooter from './NewFooter';


function ModernScience() {
    
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
    <div>
      <Header />
            <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Modern_science_banner_2_1.jpg?v=1724334009" alt="Slide 1" />
              <img   loading='lazy' className="w-full block md:hidden" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/modren_science_mobile_2.jpg?v=1724668205" alt="Slide 1" />
             
            </div>
           
            </div>
          </div>

          <h2 className=' text-3xl text-center pt-4'>
        Modern Science
      </h2>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
       
      Aayush Wellness is a  health initiative that blends the ancient wisdom of Ayurveda with the advancements of modern scientific medicine to offer a comprehensive approach to health and well-being. This unique integration focuses on both preventive and therapeutic aspects of health, ensuring that individuals receive personalized care that addresses their specific needs while also considering the broader influences of climate and environment.

      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> The Foundations of Aayush Wellness</h3>
      At the heart of Aayush Wellness is the belief that true health encompasses more than just the absence of disease. It involves a state of complete physical, mental, and spiritual well-being. Ayurveda, one of the oldest systems of medicine, forms the foundation of Aayush Wellness. Its principles emphasize maintaining balance within the body and mind, which is crucial for preventing illness and promoting long-term health.
Ayurveda's approach to health is both preventive and therapeutic, similar to modern medicine. However, Ayurveda places a strong emphasis on prevention through lifestyle choices, personal and social hygiene, and a deep understanding of the individual's unique constitution or 'Prakriti.' This personalized approach ensures that each person's specific needs are met, leading to more effective health outcomes.

      </div>
      
      </div>

      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Personalized Preventive Care</h3>
      Aayush Wellness emphasizes preventive care as a cornerstone of its approach. By understanding an individual's unique constitution, Aayush Wellness provides personalized recommendations for diet, exercise, and lifestyle practices that promote balance and prevent illness. This preventive approach is not a one-size-fits-all solution; instead, it is tailored to each person, taking into account their body type, mental state, and external factors such as climate and environment.
<br/>
This personalization extends to the adherence to a strict code of personal and social hygiene. Aayush Wellness recognizes that maintaining cleanliness and proper hygiene is crucial for preventing the spread of diseases and ensuring overall well-being. By integrating these practices into daily life, individuals can significantly reduce their risk of illness and maintain a higher quality of life.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Integrating Modern Science and Ayurveda
      </h3>
      Aayush Wellness stands out for its integration of modern scientific medicine with the time-tested practices of Ayurveda. Modern medicine excels in its diagnostic precision, technological advancements, and evidence-based treatments, while Ayurveda offers a holistic understanding of health that addresses the root causes of disease rather than just the symptoms. By combining these two approaches, Aayush Wellness provides a more comprehensive treatment plan that caters to both immediate health concerns and long-term well-being.

<br/>
This integration is particularly evident in how Aayush Wellness addresses therapeutic care. While modern medicine often focuses on treating symptoms with pharmaceuticals and surgical interventions, Aayush Wellness incorporates Ayurvedic therapies that use natural remedies, lifestyle changes, and mind-body practices to restore balance and promote healing. This approach not only alleviates symptoms but also targets the underlying causes of illness, leading to more sustainable health outcomes.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Environmental and Climate Considerations</h3>
      A key aspect of Aayush Wellness is its recognition of the influence of climate and environment on health. Ayurveda has long acknowledged that changes in seasons, weather, and geographical location can significantly impact an individual's health. Aayush Wellness incorporates this understanding into its health recommendations, ensuring that individuals adjust their lifestyle practices to align with environmental changes. This adaptability is crucial for maintaining balance and preventing illness, especially in today's rapidly changing world.
      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Conclusion</h3>
      In conclusion, Aayush Wellness offers a unique and comprehensive approach to health by embracing the principles of Ayurveda and aligning them with modern scientific medicine. By focusing on both preventive and therapeutic care, personalized to each individual's needs and environmental factors, Aayush Wellness promotes overall well-being and a balanced lifestyle. This integration of ancient wisdom and modern science ensures that individuals receive the best of both worlds, leading to a more sustainable and holistic approach to health that can be adapted across diverse communities and environments.

      </div>
      
      </div>






          <NewFooter/>
    </div>
   
  )
}

export default ModernScience
