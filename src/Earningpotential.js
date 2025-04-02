import React from "react"

function EarningPotentialSection() {
    return (
      <section className="w-full max-w-[1400px] mx-auto px-4 py-8 md:py-12">
        {/* First Table Section */}
        <div className="mb-12">
          <h2 className="text-[24px] md:text-3xl lg:text-4xl font-bold text-center mb-6 text-[#000000]">
            Franchisee Earning Potential
          </h2>
          <div className="w-full relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-03-29_at_11.47.08_AM.jpg?v=1743599028"
              alt="Franchisee Earning Potential Table"
              className="w-full h-auto object-contain border border-gray-300 rounded-md shadow-md"
              loading="eager"
            />
          </div>
        </div>
  
        {/* Second Table Section */}
        <div className="mb-12">
          <h2 className="text-[24px] md:text-3xl lg:text-4xl font-bold text-center mb-6 text-[#000000]">
            Doctor&apos;s Earning Potential
          </h2>
          <div className="w-full relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-03-29_at_11.46.11_AM.jpg?v=1743599032"
              alt="Doctor's Earning Potential Table"
              className="w-full h-auto object-contain border border-gray-300 rounded-md shadow-md"
              loading="eager"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default EarningPotentialSection
  
  

