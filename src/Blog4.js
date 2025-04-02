import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            <Header />
            <div className="pt-40 px-6 bg-gray-100 text-gray-900 flex justify-center"
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                }}>
                <button
                    className="absolute top-[100px] left-4 md:hidden z-20 w-8 h-8 flex justify-center items-center"
                    onClick={handleBack}
                >
                    <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate-45"></div>
                </button>
                <div className="max-w-3xl w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-teal-700" style={{ color: '#ed1b26' }}>
                        Essential Health Checkups: What Tests You Need & Why
                    </h1>
                    <img 
            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_4_health_check.jpg?v=1740228530" 
            alt="Healthcare and Nutrition" 
            className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
                    <p className="text-gray-700 mb-6 text-black">
                        Your health is your greatest asset, and regular health checkups play a vital role in early detection and prevention of serious illnesses.
                        Many diseases develop silently, showing no symptoms until they reach an advanced stage. That’s why routine medical tests are crucial for maintaining
                        good health and ensuring a long, disease-free life.
                    </p>
                    
                    <h2 className="mt-6" style={{ color: '#233f8f' }}>Why Are Health Checkups Important?</h2>
                    <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                        <li>Early disease detection – Catching diseases like diabetes, heart conditions, or cancer at an early stage increases the chances of effective treatment.</li>
                        <li>Preventive care – Regular screenings can help prevent potential health issues before they become serious.</li>
                        <li>Monitoring overall well-being – Helps in tracking vital body functions such as cholesterol levels, blood pressure, and sugar levels.</li>
                        <li>Peace of mind – Knowing that your body is functioning properly can reduce stress and improve quality of life.</li>
                    </ul>
                    
                    <h2 className="mt-6" style={{ color: '#233f8f' }}>Essential Health Checkups You Shouldn’t Ignore</h2>
                    <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                        <li>Complete Blood Count (CBC) – Helps detect infections, anemia, and even leukemia.</li>
                        <li>Lipid Profile – Measures cholesterol levels to prevent heart diseases.</li>
                        <li>Blood Sugar Test – Detects diabetes or prediabetes.</li>
                        <li>Blood Pressure Check – Helps in managing hypertension risks.</li>
                        <li>Liver Function Test (LFT) – Checks for liver diseases and overall liver health.</li>
                        <li>Kidney Function Test (KFT) – Ensures proper kidney functioning.</li>
                        <li>Thyroid Function Test (TFT) – Diagnoses thyroid disorders.</li>
                        <li>Vitamin Deficiency Test – Identifies deficiencies of essential vitamins.</li>
                        <li>Electrocardiogram (ECG) – Detects irregular heart rhythms and heart diseases.</li>
                        <li>Cancer Screenings – Includes Pap Smear, Mammogram, PSA Test, and Colonoscopy.</li>
                    </ul>
                    
                    <h2 className="mt-6" style={{ color: '#233f8f' }}>When Should You Get These Tests Done?</h2>
                    <p className="text-gray-700 mb-4 text-black">
                        <strong>Young adults (20-30 years):</strong> Every 2-3 years, unless advised otherwise.<br />
                        <strong>Middle-aged adults (30-50 years):</strong> Every 1-2 years, with additional focus on cholesterol, diabetes, and heart health.<br />
                        <strong>Seniors (50+ years):</strong> Annual checkups with cancer screenings and heart health monitoring.
                    </p>
                    
                    <h2 className="mt-6" style={{ color: '#233f8f' }}>Conclusion</h2>
                    <p className="text-gray-700 mb-6 text-black">
                        Regular health checkups are an investment in your well-being. Prevention is always better than cure, and taking proactive steps towards your health
                        can save you from severe medical complications. Schedule your health tests today and stay ahead of potential health risks!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog4;