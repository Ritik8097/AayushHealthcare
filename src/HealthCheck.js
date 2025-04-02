import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

import Header from './Header';
import NewFooter from './NewFooter';

function HealthCheck() {
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
              <img   loading='lazy' className="w-full hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/csr_banner_2_1.jpg?v=1724326525" alt="Slide 1" />
              <img   loading='lazy' className="w-full block md:hidden" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/csr_banner_2_mobile_2_1.jpg?v=1724652053" alt="Slide 1" />
             
            </div>
           
            </div>
          </div>

          <h2 className=' text-3xl text-center pt-4'>
        HealthCheck
      </h2>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Preventive Health Check-ups in India: The Current Landscape and Aayush Wellness’s Role




      </h3>
      Preventive health care is crucial for the early detection of diseases, reducing risk factors, and improving the management of existing conditions. According to the World Health Organization, non-communicable diseases like diabetes and cardiovascular disease claim the lives of 41 million people annually, accounting for 71% of all global fatalities. In India, the situation is equally alarming, with about 5.8 million deaths annually attributed to non-communicable diseases. Despite these staggering figures, preventive health check-ups are not yet a priority for many, underscoring the need for greater awareness and participation in preventive health practices.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Study Overview: Participation in Preventive Health Check-ups

      </h3>
      A recent cross-sectional study conducted in Perambalur from September 2021 to November 2021 revealed that only 29.82% of the 436 participants had undergone preventive health check-ups. This figure is significantly lower than the participation rates observed in other countries, such as Germany, where over 53% of individuals regularly undergo health screenings. The study also identified key motivators and barriers influencing health check-up participation, with younger age, COVID-19 vaccination status, stable occupation, and higher education levels being significant factors associated with higher rates of preventive health check-ups. These findings highlight the critical need to improve accessibility and awareness of preventive health services in India.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Barriers to Preventive Health Check-ups

      </h3>
      The study identified several barriers to preventive health check-ups, including a lack of awareness, laziness, and discomfort with medical procedures. This aligns with a broader trend in India, where many individuals do not seek preventive care unless prompted by illness or a doctor’s recommendation. For example, a web report indicated that 75% of Indians never get diagnostic testing unless they are already ill. These barriers are significant, as they prevent early detection and management of diseases, leading to more severe health outcomes over time.
<br/>
Aayush Wellness recognizes these challenges and is committed to overcoming them by raising awareness about the importance of preventive care. Through targeted health campaigns and accessible wellness products, we aim to make preventive health check-ups a more integral part of everyday life for individuals across India.

      </div>
      
      </div>


      <NewFooter/>
    </div>
  )
}

export default HealthCheck
