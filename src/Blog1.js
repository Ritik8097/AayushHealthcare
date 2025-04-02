import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Blog1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const handleBack = () => {
        window.history.back();
      };

  return (
    <>
    <Header/>
    <div className="pt-40 px-6  bg-gray-100 text-gray-900  flex justify-center"
     style={{
      backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-pastel-blue-paint-brushstroke-textured-background_53876-108403.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
  }}>
    <button
          className="absolute top-[100px] left-4 md:hidden z-20 w-8 h-8 flex justify-center items-center"
          onClick={handleBack}
        >
          <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate- 45"></div>
        </button>
    <div className="max-w-3xl w-full">

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4" style={{ color: '#ed1b26' }}>How the Landscape of Indian Healthcare is Shifting</h1>
      <img 
            src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_1_2.jpg?v=1739438063" 
            alt="Healthcare and Nutrition" 
            className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
      <p className="mb-4 text-black">
        India’s healthcare sector is undergoing a massive transformation, driven by technological advancements, policy reforms, and a growing emphasis on preventive care. From digital health solutions to increased investments in infrastructure, the Indian healthcare landscape is evolving rapidly to meet the demands of its vast population. Let’s explore the key factors shaping the future of healthcare in India.
      </p>
      <h2 className=" mt-6" style={{ color: '#233f8f' }}>1. The Rise of Digital Healthcare</h2>
      <p className="mb-4 text-black">
        One of the most significant shifts in Indian healthcare is the rapid adoption of telemedicine, AI-driven diagnostics, and digital health records. With the advent of platforms like Arogya Setu and e-Sanjeevani, accessing healthcare has become more convenient than ever. Teleconsultations have surged, especially post-pandemic, making healthcare services more accessible to remote and rural populations.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>2. Government Initiatives Driving Change</h2>
      <p className="mb-4 text-black">
        The Indian government has been instrumental in reshaping the healthcare sector. Initiatives like Ayushman Bharat (PM-JAY), which provides free healthcare to economically weaker sections, and the National Digital Health Mission (NDHM), which aims to digitize patient health records, are making quality healthcare more affordable and efficient.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>3. The Boom in HealthTech Startups</h2>
      <p className="mb-4 text-black">
        India is witnessing a rise in HealthTech startups that are revolutionizing medical services through AI, IoT, and big data analytics. Companies like Practo, 1mg, and PharmEasy are transforming healthcare delivery by offering online consultations, medicine delivery, and diagnostic tests at home. This surge in innovation is improving efficiency and enhancing patient experiences.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>4. Growing Focus on Preventive Healthcare</h2>
      <p className="mb-4 text-black">
        The Indian healthcare system is shifting from reactive treatment to preventive care. People are becoming more health-conscious, leading to a rise in demand for nutraceuticals, fitness apps, and wellness programs. The popularity of yoga, Ayurveda, and holistic health approaches is growing, further promoting a culture of preventive care.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>5. Expansion of Private Healthcare Sector</h2>
      <p className="mb-4 text-black">
        With increased investments, the private healthcare sector in India is expanding significantly. Hospitals like Apollo, Fortis, and Max Healthcare are investing in state-of-the-art infrastructure, robotic surgeries, and specialized treatments, providing world-class medical care. The rise of medical tourism in India is also attracting international patients seeking affordable and high-quality healthcare services.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>6. Increased Health Insurance Penetration</h2>
      <p className="mb-4 text-black">
        Health insurance is becoming more popular among Indians, thanks to affordable plans, government schemes, and increased awareness. Policies such as LIC Jeevan Arogya and other private health insurance plans are making medical treatments more accessible by covering hospitalization and critical illness expenses.
      </p>
      <h2 className="mt-6"style={{ color: '#233f8f' }}>7. AI and Robotics in Healthcare</h2>
      <p className="mb-4 text-black">
        Artificial Intelligence (AI) and robotic-assisted surgeries are changing the way healthcare is delivered. AI-driven diagnostics are enhancing the accuracy of disease detection, while robotic surgeries are improving surgical precision and reducing recovery times.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>Challenges and the Road Ahead</h2>
      <p className="mb-4 text-black">
        Despite significant progress, challenges remain in Indian healthcare. Rural healthcare infrastructure, shortage of medical professionals, and affordability issues still need to be addressed. However, with continued government support, technological advancements, and private sector investments, India is on the path to becoming a global leader in healthcare innovation.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>Conclusion</h2>
      <p className="mb-4 text-black">
        The transformation of Indian healthcare is driven by digital advancements, policy reforms, and a shift toward preventive care. As telemedicine, AI, and private healthcare investments continue to grow, India is set to become a global powerhouse in healthcare. Embracing these changes will ensure that quality healthcare reaches every corner of the country, making India a healthier nation.
      </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog1;