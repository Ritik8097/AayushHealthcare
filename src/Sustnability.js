import React, { useEffect, useState } from 'react'
import Header from './Header'
import SkeletonLoader from './SkeletonLoader';
import NewFooter from './NewFooter';

function Sustnability() {
    
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
              <img   loading='lazy' className="w-full hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/sustainability_banner_new.jpg?v=1724326525" alt="Slide 1" />
              <img   loading='lazy' className="w-full block md:hidden" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/sustainability_banner_mobile_new_1.jpg?v=1724668205" alt="Slide 1" />
             
            </div>
           
            </div>
          </div>

          <h2 className=' text-3xl text-center pt-4'>
        HealthCheck
      </h2>

      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Environmental Sustainability and Aayush Wellness: A Commitment to a Greener Future




      </h3>
      In the face of growing environmental challenges, the concept of sustainability has evolved from a mere buzzword to a critical imperative for industries worldwide. Environmental sustainability refers to the responsible management of resources and the environment to ensure that future generations can enjoy a healthy planet. As we grapple with the far-reaching impacts of climate change, pollution, and resource depletion, industries, especially those in health and wellness, are being called upon to lead the charge toward a more sustainable future.
For Aayush Wellness, environmental sustainability is not just a corporate responsibility; it’s a fundamental pillar of our mission. We understand that the health of the planet is intrinsically linked to the health of its people. Therefore, our commitment to sustainability extends across every facet of our operations—from sourcing ingredients to packaging products and engaging with our communities.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>The Importance of Environmental Sustainability




      </h3>
      The connection between environmental sustainability and public health is undeniable. Environmental degradation, including air and water pollution, deforestation, and climate change, has a direct and detrimental impact on human health. These environmental issues contribute to respiratory problems, cardiovascular diseases, waterborne illnesses, and malnutrition, among other health concerns. Moreover, the strain on natural resources threatens the very ecosystems that sustain life on Earth.
In the health and wellness industry, there is a unique responsibility to adopt sustainable practices. This industry is inherently connected to well-being, and by promoting sustainability, companies can protect the environment while ensuring that the products they offer are beneficial, safe, and sustainable. At Aayush Wellness, we are deeply aware of this responsibility and are committed to integrating sustainability into our core operations.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Aayush Wellness’s Commitment to Sustainability





      </h3>
      At Aayush Wellness, sustainability is a guiding principle that shapes our decisions and actions. Our commitment to reducing our environmental footprint is reflected in every step of our production process, from sourcing raw materials to delivering the final product to our customers. We are dedicated to creating a positive impact on the environment while continuing to provide high-quality wellness products.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Sustainable Sourcing of Ingredients





      </h3>
      The foundation of our products lies in the quality and sustainability of the ingredients we use. Aayush Wellness is committed to sourcing ingredients that are grown and harvested using sustainable practices. This means prioritizing partnerships with local farmers who engage in environmentally responsible agriculture. By choosing sustainably sourced ingredients, we ensure that our products are not only effective but also contribute to the preservation of natural resources and the protection of biodiversity.
Our commitment to sustainable sourcing also extends to the ethical treatment of the communities we work with. We strive to support local economies by engaging with small-scale farmers and suppliers, ensuring that they receive fair compensation for their efforts. This approach not only promotes environmental sustainability but also fosters social equity and community well-being.

      </div>
      
      </div>


      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Eco-friendly Packaging Initiatives

      </h3>
      Packaging waste is one of the most significant environmental challenges facing the consumer goods industry. Traditional packaging materials, particularly plastics, contribute to pollution and environmental degradation. At Aayush Wellness, we are actively addressing this issue by adopting eco-friendly packaging solutions that minimize waste and reduce our environmental impact.
We have implemented the use of recyclable, biodegradable, and reduced-plastic packaging across our product lines. Our commitment to eco-friendly packaging is part of a broader effort to promote a circular economy, where materials are reused and recycled rather than ending up in landfills or oceans. By choosing sustainable packaging options, we aim to reduce our carbon footprint and encourage our customers to participate in environmentally responsible practices.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>The Future of Sustainability at Aayush Wellness


      </h3>
      Our commitment to sustainability is not static; it’s a journey of continuous improvement and innovation. As we look to the future, Aayush Wellness is focused on expanding our sustainability initiatives and setting new benchmarks for environmental responsibility in the wellness industry.
We are actively researching and developing new ways to further reduce our environmental impact. This includes exploring innovative materials for packaging, enhancing our supply chain sustainability, and expanding our carbon offset programs. Our goal is to become a model for sustainability in the wellness industry, demonstrating that it is possible to provide high-quality products while also safeguarding the environment.

      </div>
      
      </div>



      <div className='flex  align-center  justify-center pt-3 p-8'>
      <div className=' pt-4 text-xl md:max-w-screen-lg '>
      <h3 className=' text-left text-2xl pb-4  font-bold'>Conclusion

      </h3>
      Environmental sustainability is at the core of Aayush Wellness’s mission. We understand that the health of our customers is directly linked to the health of our planet, and we are committed to doing our part to protect and preserve the environment. Through sustainable sourcing, eco-friendly packaging, carbon reduction efforts, and community engagement, we are making strides towards a greener future.
As we continue to grow, Aayush Wellness will remain steadfast in our commitment to sustainability. We believe that by adopting sustainable practices, we can not only enhance the well-being of our customers but also contribute to the long-term health of our planet. We invite our customers and partners to join us on this journey towards a more sustainable and prosperous future.

      </div>
      
      </div>



      <NewFooter/>
    </div>
  )
}

export default Sustnability
