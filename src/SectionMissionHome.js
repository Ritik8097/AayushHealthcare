import React from 'react'

function SectionMissionHome() {
  return (
    <div className="flex flex-col md:flex-row h-[300px] mt-16 md:pl-7 md:pr-7" >
      {/* Left side content */}
      <div className="md:w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-4">Content Title</h1>
        <p className="text-lg">
        Combatting Tobacco Addiction: Aayush Wellness offers herbal alternatives that not only substitute harmful products but also support individuals in overcoming addiction. Our products are crafted to provide a satisfying experience while prioritizing health through natural compositions.
Nutritional Supplementation for All: We address the critical issue of malnutrition by collaborating with NGOs and government schemes to distribute Ayurvedic nutritional supplements, aiming to nourish and strengthen the vulnerable sections of society.
Enhancing Healthcare Accessibility: Aayush Wellness is committed to spreading awareness about health and wellness, reaching from remote villages to urban centers. Through our campaigns, we aim to ignite a passion for well-being and foster a culture of health across India.

        </p>
        {/* Add more content as needed */}
      </div>

      {/* Right side image */}
      <div className="md:w-[30%]">
        <img style={{objectFit:'cover',objectPosition:'center',borderRadius:'10px'}}
          src="	https://honasa.in/cdn/shop/files/PRA_0629-1.jpg?v=1720862171&width=3200" // Replace with your image URL
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default SectionMissionHome
