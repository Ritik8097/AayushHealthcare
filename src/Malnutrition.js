import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

import Header from './Header';
import NewFooter from './NewFooter';

function Malnutrition() {
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
              <img   loading='lazy' className="w-full hidden md:block " src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/csr_banner.png?v=1723885170" alt="Slide 1" />
              <img   loading='lazy' className="w-full block md:hidden" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/csr_banner_mobile_2.jpg?v=1724672971" alt="Slide 1" />
             
            </div>
           
            </div>
          </div>

          <h2 className=' text-3xl text-center pt-4'>
        Malnutrition
      </h2>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> India's Malnutrition Crisis and How Aayush Wellness is Treating It</h3>
      Malnutrition in India is a critical issue affecting a significant portion of the population, presenting challenges in both under-nutrition and over-nutrition. Despite economic growth, over one-third of the world's malnourished children live in India, making it a pressing concern that demands immediate attention. Various factors contribute to this crisis, including economic inequality, poor dietary practices, lack of education, and inadequate healthcare infrastructure.
      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> The Growing Concern of Over-nutrition
      </h3>
      Over-nutrition, though often overlooked, is equally concerning, especially in urban areas where obesity is on the rise. This dual burden of malnutrition—where both underweight and overweight individuals coexist—is driven by lifestyle changes, lack of physical activity, and unhealthy diets. At Aayush Wellness, we acknowledge this growing problem. Our health-focused products are crafted to offer balanced nutrition without excessive calories, aiming to prevent obesity-related conditions and promote a healthier lifestyle.
      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> Recent Observations and Regional Variations

      </h3>
      Recent studies indicate significant variation in malnutrition rates across different Indian states. While more developed states show lower percentages of underweight children, the rates are still alarmingly high compared to global standards. This diversity in nutritional outcomes underscores the need for state-specific approaches. Our product range at Aayush Wellness is tailored to meet these unique nutritional needs, ensuring that both under-nutrition and over-nutrition are effectively addressed across various regions.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> Management and Strategic Interventions


      </h3>
      India has implemented several programs to combat malnutrition, including the Integrated Child Development Services (ICDS) and the Midday Meal Scheme. These initiatives aim to improve child and maternal nutrition through supplementary feeding, health education, and pre-school education. However, challenges remain, such as inadequate coverage and poor service delivery. At Aayush Wellness, we complement these efforts by offering high-quality, nutritionally fortified products that can easily integrate into daily diets, enhancing the nutritional value of these government initiatives.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Long-term Solutions and Aayush Wellness’s Role



      </h3>
      Addressing malnutrition in India requires a multifaceted approach, focusing on socioeconomic development, improving healthcare infrastructure, and enhancing public health interventions. Aayush Wellness is committed to this vision by promoting the fortification of staple foods with essential nutrients and developing accessible wellness products. Moreover, we advocate for robust monitoring and evaluation systems to assess the impact of nutritional programs and ensure their effectiveness. Our goal is to reach the most vulnerable populations, providing them with the tools they need to overcome malnutrition.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Conclusion: A Path Forward




      </h3>
      Malnutrition remains a complex and pervasive issue in India, contributing to a significant health burden. However, with targeted interventions and comprehensive strategies, it is possible to address the root causes of malnutrition. Aayush Wellness is dedicated to this mission, working to enhance public health interventions and ensure equitable access to nutritious food and healthcare. Through our efforts, we aim to significantly reduce malnutrition and improve the overall well-being of India’s population.
      </div>
      
      </div>





      <NewFooter/>
    </div>
  )
}

export default Malnutrition
