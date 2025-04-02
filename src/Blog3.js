import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Header />
      <div
        className="pt-40 px-6 bg-gray-100 text-gray-900 flex justify-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <button
          className="absolute top-[100px] left-4 md:hidden z-20 w-8 h-8 flex justify-center items-center"
          onClick={handleBack}
        >
          <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate-45"></div>
        </button>
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-teal-700" style={{ color: '#ed1b26' }} >
            Why Health Insurance is a Must-Have: Benefits & Coverage Explained
          </h1>
          <img
            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_3_insurance.jpg?v=1740228516"
            alt="Healthcare and Nutrition"
            className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
          <p className=" mb-6 text-black">
            In today's fast-paced world, maintaining good health is crucial, but
            medical expenses are rising at an alarming rate. A sudden illness or
            accident can drain your savings and put financial stress on your
            family. This is where health insurance becomes essential. Having a
            comprehensive health insurance plan safeguards you against
            unexpected medical costs and ensures that you get the best possible
            treatment without financial worry. Let’s explore why health
            insurance is a must-have and the benefits it offers.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            1. Protection Against High Medical Costs
          </h2>
          <p className="mb-4 text-black">
            Medical expenses, including hospitalization, surgeries, and
            medication, can be overwhelming. Health insurance covers a
            significant portion of these expenses, reducing the financial burden
            on you and your family.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            2. Comprehensive Coverage for Various Medical Needs
          </h2>
          <p className="mb-4 text-black">
            A good health insurance policy provides coverage for
            hospitalization, doctor consultations, diagnostic tests, emergency
            care, and even preventive health checkups.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            3. Cashless Treatment at Network Hospitals
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Many insurance providers have a network of hospitals where you can
            avail of cashless treatment, reducing stress during emergencies.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            4. Coverage for Critical Illnesses
          </h2>
          <p className="mb-4 text-black">
            Specialized health insurance policies cover the cost of expensive
            treatments for critical illnesses like cancer and heart disease.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            5. Preventive Health Checkups & Wellness Benefits
          </h2>
          <p className="mb-4 text-black">
            Many policies offer annual health checkups and wellness rewards,
            encouraging a healthier lifestyle.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            6. Tax Benefits Under Section 80D
          </h2>
          <p className="mb-4 text-black">
            Health insurance provides tax benefits under Section 80D, helping
            reduce your overall tax liability.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            7. Financial Security for Your Family
          </h2>
          <p className="mb-4 text-black">
            A family floater health insurance plan ensures that all your loved
            ones are covered under a single policy.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            8. Maternity & Newborn Coverage
          </h2>
          <p className="mb-4 text-black">
            Many policies offer maternity benefits, covering prenatal and
            postnatal care, delivery expenses, and newborn care.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            9. Peace of Mind in Uncertain Times
          </h2>
          <p className=" mb-4 text-black">
            Health emergencies can happen at any time. A reliable health
            insurance policy provides peace of mind and financial security.
          </p>

          <h2 className=" mt-6" style={{ color: '#233f8f' }}>
            Conclusion: Secure Your Future with Health Insurance
          </h2>
          <p className="mb-6 text-black">
            Investing in health insurance is no longer an option, it's a
            necessity. With rising medical costs and unpredictable health
            issues, having the right insurance policy ensures financial security
            and quality treatment.
          </p>
          <p className="text-gray-700 font-semibold text-center text-black">
            <u>
              Don’t wait for a medical emergency, choose the right health
              insurance plan today and secure a healthier tomorrow!
            </u>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog3;