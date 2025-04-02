import React from 'react';


import Footer from './Footer';
import Header from './Header';

function WaterRisk() {
  
  return (
    <div>
        
    <Header/>
 <h3 className=' text-3xl text-center pt-4' style={{color:"#d1a272"}}>
Water Risk Assessment
 </h3>
 <div className='flex  align-center  justify-center pt-3 p-8'>
 <div className=' pt-4 text-xl md:max-w-screen-lg '>
 Aayush has conducted a detailed water risk assessment during the fiscal year 2023-24, covering 100% of our manufacturing operations. Utilizing the WRI Aqueduct tool and Central Ground Water Board’s (India) parameters, the physical water risk assessment encompasses a wide range of parameters including water stress, water depletion, interannual variability, seasonal variability, drought, and flood risk.
 </div>
 
 </div>
 <div className='flex  align-center  justify-center pt-3 p-8'>
 <div className=' pt-4 text-xl md:max-w-screen-lg '>
 In addition to establishing a baseline for water risk, we also conducted scenario analyses for the time horizon- 2030 and 2050, under three different scenarios: pessimistic- (SSP5 RCP8.5, temperatures increase up to 3.3°C to 5.7°C by 2100), business as usual (SSP3 RCP7.0, temperatures increase by 2.8°C to 4.6°C by 2100), and optimistic (SSP1 RCP2.6, temperatures increase by 1.3°C to 2.4°C by 2100). These scenarios provide insights into potential future water-related risks, allowing us to formulate robust strategies for mitigating them.


 </div>
 
 </div>
 <div className='flex  align-center  justify-center pt-3 p-8'>
 <div className=' pt-4 text-xl md:max-w-screen-lg '>
 The assessment conducted revealed that majority of our facilities are exposed to High to Extremely High-water stress risk. This underscores the urgent need for enhanced water conservation initiatives, such as recycling and reusing water, improving water efficiency, implementing rainwater harvesting in our operations, and replenishing back into the local watershed more than 100% of the water used at company-owned sites, especially in high-water-risk areas.
 </div>
 
 </div>
 <div className='flex  align-center  justify-center pt-3 p-8 mb-12'>
 <div className=' pt-4 text-xl md:max-w-screen-lg '>
 The comprehensive methodology and framework utilized in our physical water risk assessment allow us to gain a thorough understanding of water-related risks throughout all our operations. This enables us to develop proactive strategies to address these risks effectively. We also acknowledge that unaddressed water related risks could jeopardize our social license to operate. Hence, we have established an ambitious goal to achieve water positivity by 2030. Our commitment to becoming water positive reflects our long-term perspective on water security. We aim to achieve this goal through collaborative and inclusive stakeholder engagement, ensuring that our actions contribute positively to the communities and environments in which we operate.
 </div>
 
 </div>

 <div className='flex  align-center  justify-center pt-3 p-8 mb-12'>
 <div className=' pt-4 text-xl md:max-w-screen-lg '>
 In order to reach our ambitious goal, we've begun implementing a variety of programs. These include enhancing water efficiency within our operations, ensuring that the water we discharge is of high quality, expanding our circle of influence through circular economy practices, and facilitating water conservation efforts in the communities surrounding us. In addition to this, we're aiming to reduce our water usage intensity by 30% within our operations by 2026.
 </div>
 
 </div>

 <Footer/>
 </div>
  )
}

export default WaterRisk
