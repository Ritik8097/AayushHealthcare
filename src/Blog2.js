import React, { useEffect }from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog2 = () => {
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
          <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate- 45"></div>
        </button>
    <div className="max-w-3xl w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold  mb-4" style={{ color: '#ed1b26' }}>Focus on Preventive Healthcare and Nutrition Post-COVID</h1>
      <img 
            src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_2_2.jpg?v=1739438065" 
            alt="Healthcare and Nutrition" 
            className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
      <p className="mb-4 text-black">
        The COVID-19 pandemic has reshaped how we perceive health and wellness. It has made one thing abundantly clear: preventive healthcare is no longer optional but essential. With the increasing awareness of immunity, nutrition, and overall well-being, people are now focusing more on building resilience against future health challenges. In this blog, we explore the importance of preventive healthcare and proper nutrition in the post-pandemic era.
      </p>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>Why Preventive Healthcare Matters Post-COVID</h2>
      <p className="mb-4 text-black">
        Preventive healthcare refers to proactive measures that help individuals avoid diseases rather than treating them after they occur. COVID-19 has shown us that strong immunity and overall health can make a significant difference in how our bodies fight infections. Here’s why preventive healthcare should be your top priority:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Boosts Immunity:</strong> A strong immune system is the first line of defense against infections.</li>
        <li><strong>Reduces Healthcare Costs:</strong> Prevention is always cheaper than cure, helping avoid expensive medical treatments.</li>
        <li><strong>Enhances Quality of Life:</strong> Staying healthy means fewer illnesses, increased energy, and a better lifestyle.</li>
        <li><strong>Detects Issues Early:</strong> Regular health checkups can detect potential diseases before they become severe.</li>
      </ul>
      <h2 className=" mt-6" style={{ color: '#233f8f' }}>Key Aspects of Preventive Healthcare</h2>
      <h3 className=" mt-4" style={{ color: '#233f8f' }}>1. Regular Health Screenings & Checkups</h3>
      <p className="mb-4 text-black">
        Routine body tests like blood tests, cholesterol levels, and vitamin deficiencies can help detect underlying health conditions early. Post-COVID, people are encouraged to monitor their health closely.
      </p>
      <h3 className="mt-4" style={{ color: '#233f8f' }}>2. Strong Emphasis on Hygiene & Sanitization</h3>
      <p className="mb-4 text-black">
        Frequent handwashing, proper sanitization, and maintaining personal hygiene remain essential in reducing the risk of infections.
      </p>
      <h3 className="-4" style={{ color: '#233f8f' }}>3. Mental Health & Stress Management</h3>
      <p className="mb-4 text-black">
        The pandemic has had a profound impact on mental health. Engaging in stress-relief activities like yoga, meditation, and regular physical exercise can help manage anxiety and depression.
      </p>
      <h3 className="mt-4" style={{ color: '#233f8f' }}>4. Adequate Sleep & Hydration</h3>
      <p className="mb-4 text-black">
        Quality sleep boosts the immune system and overall well-being. Likewise, staying hydrated supports digestion, circulation, and toxin removal from the body.
      </p>
      <h2 className=" mt-6" style={{ color: '#233f8f' }}>Nutrition: The Foundation of Good Health</h2>
      <p className="mb-4 text-black">
        Proper nutrition plays a crucial role in preventive healthcare. The right balance of vitamins, minerals, and macronutrients helps maintain strong immunity and overall health.
      </p>
      <h3 className=" mt-4" style={{ color: '#233f8f' }}>1. Immunity-Boosting Foods</h3>
      <p className="mb-4">
        Post-COVID, consuming foods rich in vitamin C, vitamin D, zinc, and antioxidants can strengthen the immune system. Include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Citrus fruits (oranges, lemons, grapefruits)</li>
        <li>Leafy greens (spinach, kale)</li>
        <li>Nuts and seeds (almonds, flaxseeds, sunflower seeds)</li>
      </ul>
      <h3 className="mt-4" style={{ color: '#233f8f' }}>2. Protein-Rich Diet</h3>
      <p className="mb-4 text-black">
        Proteins are vital for muscle repair and overall body function. Include lean meats, fish, dairy products, and plant-based sources like lentils and chickpeas.
      </p>
      <h3 className=" mt-4" style={{ color: '#233f8f' }}>3. Gut Health and Probiotics</h3>
      <p className="mb-4 text-black">
        A healthy gut enhances immunity. Include probiotic-rich foods like yogurt, kefir, and fermented vegetables to promote good gut bacteria.
      </p>
      <h3 className=" mt-4" style={{ color: '#233f8f' }}>4. Reduce Processed Foods & Sugar</h3>
      <p className="mb-4 text-black">
        Excess sugar and processed foods can weaken the immune system. Opt for whole, natural foods for long-term health benefits.
      </p>
      <h2 className=" mt-6" style={{ color: '#233f8f' }}>The Role of Supplements in Preventive Healthcare</h2>
      <p className="mb-4 text-black">
        Sometimes, diet alone may not be enough to meet nutritional needs. Consider supplements like:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Multivitamins for overall well-being</li>
        <li>Omega-3 fatty acids for heart and brain health</li>
        <li>Probiotics for gut health</li>
        <li>Vitamin D and Calcium for bone strength</li>
      </ul>
      <h2 className="mt-6" style={{ color: '#233f8f' }}>Final Thoughts</h2>
      <p className="mb-4 text-black">
        Preventive healthcare and proper nutrition are no longer luxuries but necessities. A balanced lifestyle, regular health checkups, and mindful eating habits are key to staying fit in the post-COVID world. Investing in your health today will ensure a stronger, healthier future.
      </p>
      <h2 className=" mt-6" style={{ color: '#233f8f' }}>Take Action Now!</h2>
      <p className=" mb-4 text-black">
        Start incorporating these preventive healthcare measures into your routine today. Remember, your health is your greatest wealth!
      </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog2;