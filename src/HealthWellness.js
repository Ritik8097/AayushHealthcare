import React, { useEffect, useState } from 'react';
import Header from './Header';
import SkeletonLoader from './SkeletonLoader';
import NewFooter from './NewFooter';

function HealthWellness() {
    
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
              <img   loading='lazy' className="w-full hidden md:block " src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Wellness_You_-_Health_Wellness_1.jpg?v=1724334009" alt="Slide 1" />
               <img className='w-full block md:hidden' src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Wellness_You_-_Health_Wellness_mobile_1_1.jpg?v=1724668205" />
            </div>
           
            </div>
          </div>

          <h2 className=' text-3xl text-center pt-4'>
        Health Wellness
      </h2>

      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
       
      Aayush Wellness is dedicated to promoting holistic health and wellness by integrating the ancient wisdom of Ayurveda with modern health practices. The focus is on achieving overall well-being through a balanced approach that considers the physical, mental, and spiritual aspects of health.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> Holistic Health Approach
      </h3>
      Aayush Wellness views health as a state of complete harmony between the body, mind, and spirit. This holistic perspective emphasizes the importance of balance in all areas of life. The goal is not just to prevent or treat diseases but to create a lifestyle that supports long-term health and vitality. By considering the interconnectedness of various aspects of life, Aayush Wellness provides a comprehensive path to wellness.
      </div>
      
      </div>

       <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'> Personalized Wellness Plans

      </h3>
      One of the core principles of Aayush Wellness is personalization. Each individual has a unique constitution, or 'Prakriti,' according to Ayurveda. This constitution determines how a person responds to different foods, activities, and environments. Aayush Wellness tailors its recommendations to each person's specific needs, ensuring that the approach to health is customized and effective.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Preventive Health Measures


      </h3>
      Prevention is a key focus of Aayush Wellness. Rather than waiting for illness to occur, Aayush Wellness encourages individuals to adopt preventive measures that keep them healthy. These measures include:
Diet and Nutrition: Aayush Wellness emphasizes the importance of a balanced diet that is tailored to an individual's constitution. The right foods can help maintain balance, prevent illness, and support overall health.
Physical Activity: Regular exercise is crucial for maintaining physical health. Aayush Wellness encourages physical activities that align with an individual's constitution, promoting fitness without causing strain.
Mental Well-being: Mental health is as important as physical health. Aayush Wellness incorporates practices like meditation, mindfulness, and stress management techniques to support mental well-being.
Sleep and Rest: Adequate rest is essential for recovery and maintaining energy levels. Aayush Wellness provides guidance on creating healthy sleep habits that align with natural rhythms.
      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Lifestyle and Environmental Considerations


      </h3>

      Aayush Wellness recognizes that lifestyle choices and environmental factors play a significant role in health. The initiative provides guidance on creating a lifestyle that supports wellness, including:
Hygiene Practices: A strict code of personal and social hygiene helps prevent illness and maintain health.
Climate Adaptation: Recommendations are made based on the influence of climate and environment on health, helping individuals adapt their practices according to seasonal and geographical changes.
Sustainable Living: Aayush Wellness promotes eco-friendly practices that support both personal health and the health of the planet.



        </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Community and Education



      </h3>

      Aayush Wellness is not just about individual health; it also focuses on community well-being. The initiative aims to educate communities about the benefits of a holistic approach to health, empowering people to take control of their well-being. Through workshops, seminars, and other educational efforts, Aayush Wellness seeks to create a culture of health and wellness that extends beyond the individual to the broader community.



        </div>
      
      </div>




      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Conclusion




      </h3>

      In summary, Aayush Wellness is a comprehensive health initiative that integrates the wisdom of Ayurveda with modern health practices to promote overall well-being. By focusing on personalized care, preventive measures, therapeutic treatments, and lifestyle adaptations, Aayush Wellness provides a holistic path to health. The initiative not only aims to improve individual health but also seeks to create healthier communities and a more sustainable world. Through its focus on balance, personalization, and education, Aayush Wellness empowers individuals to lead healthier, more fulfilling lives.



        </div>
      
      </div>





      <NewFooter/>
    </div>
  )
}

export default HealthWellness
