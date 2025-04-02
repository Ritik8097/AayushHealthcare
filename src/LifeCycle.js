import React from 'react';


import Footer from './Footer';
import Header from './Header';

function LifeCycle() {
    
  return (
    <div>
        
        <Header/>
      <h3 className=' text-3xl text-center pt-4' style={{color:"#d1a272"}}>
      Life Cycle Assessment

      </h3>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg  ' >
      At Aayush, we are committed to "Growing Sustainably" by integrating sustainability as a core value into our business strategy. We remain dedicated to fostering responsible practices that benefit both our planet and our stakeholders. In this direction, we conducted a comprehensive Life Cycle Assessment (LCA) for four power brands covering 50% of our consolidated revenue during the fiscal year 2023-24.
      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      The LCA, conducted in accordance with ISO 14040/44 standards by an accredited external partner, serves as a pivotal tool in identifying opportunities to minimize the environmental footprint of our products across their entire life cycle. From the procurement of raw materials to manufacturing, distribution, consumer use, and safe disposal, we are committed to ensuring sustainability at every stage of our products' journey.
      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      This initiative aligns with our commitment to the Science Based Targets initiative (SBTi) to achieve Net Zero Emissions. By conducting LCAs, we take proactive steps towards meeting our Net Zero targets, allowing us to analyse and address the key challenges involved in reducing emissions associated with our power brands, from sourcing to point of sale.
      </div>
      
      </div>
      <div className='flex  align-center  justify-center pt-3 p-8 mb-12'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      In addition to this, in FY 2023-24, we have also expanded the coverage of our Scope 3 emissions computation across all relevant categories. The LCA conducted will also enable us to precisely compute the Scope 3 emissions. A key area of focus will be in the upstream categories – particularly upstream transportation and the raw material footprint (Scope 3 emissions – purchased goods), which are associated with emissions from our suppliers and their corresponding feedstocks, as well as downstream categories such as downstream transportation and product disposal (post-consumer use).
      </div>
      
      </div>
      <Footer />
    </div>
    
  )
}

export default LifeCycle
