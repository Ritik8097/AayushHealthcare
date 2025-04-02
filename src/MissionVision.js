import React, { useEffect, useState } from 'react';
import Header from './Header';
import NewFooter from './NewFooter';
import SkeletonLoader from './SkeletonLoader';

function MissionVision() {

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
        <img
          loading="lazy"
          className="w-full hidden md:block "
          src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/website_vision_banner_1920x600_1.jpg?v=1724332505"
          alt="Vision Banner"
        />

<img
          loading="lazy"
          className="w-full md:hidden block "
          src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/MOBILE_SIZE_website_vision_banner_1.jpg?v=1724668205"
          alt="Vision Banner"
        />
      </div>
      <div className=" pt-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Mission and Vision</h2>
        <div className="max-w-screen-lg mx-auto">
          <div className="space-y-8">
            {/* Mission Section */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Aayush Wellness Mission</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Transforming healthcare and wellness by merging Ayurveda with modern scientific advancements.</li>
                <li>
                  Enhancing well-being through three key initiatives:
                  <ul className="list-disc list-inside pl-6">
                    <li>Combatting tobacco addiction.</li>
                    <li>Providing nutritional supplementation for all.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Combatting Tobacco Addiction */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Combatting Tobacco Addiction</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Addressing the health risks of tobacco addiction by offering herbal alternatives to traditional tobacco products like pan masala and gutka.</li>
                <li>Formulating products with Ayurvedic herbs that mimic the tobacco experience without harmful effects.</li>
                <li>Supporting individuals in overcoming tobacco addiction and reducing tobacco-related diseases.</li>
              </ul>
            </section>

            {/* Nutritional Supplementation for All */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Nutritional Supplementation for All</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Tackling malnutrition, especially in vulnerable populations.</li>
                <li>Providing Ayurvedic nutritional supplements that nourish and strengthen those in need.</li>
                <li>Collaborating with NGOs and government schemes to distribute supplements to underserved communities.</li>
                <li>Integrating Ayurvedic principles with modern nutritional science to address deficiencies and promote overall health.</li>
              </ul>
            </section>

            {/* Enhancing Healthcare Accessibility */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Enhancing Healthcare Accessibility</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Making healthcare and wellness accessible regardless of geographical or socioeconomic barriers.</li>
                <li>Educating and inspiring people to take control of their health through comprehensive campaigns.</li>
                <li>Promoting the benefits of Ayurvedic practices and balanced lifestyles.</li>
                <li>Working to improve healthcare infrastructure in collaboration with local health workers and government bodies.</li>
              </ul>
            </section>

            {/* Holistic Approach */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Holistic Approach</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Fostering long-term health, vitality, and balanced lifestyles through a holistic approach.</li>
                <li>Integrating Ayurveda with modern science to offer innovative products and solutions.</li>
                <li>Promoting the benefits of Ayurvedic practices and balanced lifestyles.</li>
                <li>Addressing root causes of health problems, providing comprehensive nutrition, and promoting preventive care.</li>
              </ul>
            </section>

            {/* Aayush Wellness Vision */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Aayush Wellness Vision</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Aayush Wellness is rooted in ancient Ayurvedic wisdom combined with modern medical principles.</li>
                <li>The primary vision is to offer a comprehensive approach to health and well-being, merging traditional knowledge with modern scientific advancements.</li>
                <li>Aiming to create a balanced, healthy, and sustainable lifestyle for individuals and communities.</li>
              </ul>
            </section>

            {/* Holistic Health Approach */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Holistic Health Approach</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Health is viewed as a state of complete physical, mental, and spiritual well-being, not just the absence of disease.</li>
                <li>Emphasizes the interconnectedness of body, mind, and spirit, with each aspect influencing the others.</li>
                <li>Focuses on preventive care and maintaining balance in all aspects of life.</li>
              </ul>
            </section>

            {/* Integrating Ayurveda with Modern Medicine */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Integrating Ayurveda with Modern Medicine</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Bridges the gap between ancient Ayurvedic practices and modern medical science.</li>
                <li>Fuses individualized treatment plans, natural remedies, and lifestyle changes of Ayurveda with the precision of modern medicine.</li>
                <li>Provides treatments that address both symptoms and root causes, promoting long-term health.</li>
              </ul>
            </section>

            {/* Personalized Wellness Plans */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Personalized Wellness Plans</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Creates personalized wellness plans tailored to each individual's unique needs.</li>
                <li>Considers factors like lifestyle, dietary habits, mental state, and environmental influences.</li>
                <li>Offers customized solutions that promote balance and well-being at all levels.</li>
              </ul>
            </section>

            {/* Emphasis on Prevention and Sustainability */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Emphasis on Prevention and Sustainability</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Focuses on prevention, emphasizing balanced nutrition, regular physical activity, stress management, and adequate sleep.</li>
                <li>Reduces the risk of chronic conditions through a proactive approach.</li>
                <li>Prioritizes sustainability in health practices, using natural, locally-sourced ingredients, and promoting eco-friendly practices.</li>
              </ul>
            </section>

            {/* Community and Global Impact */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Community and Global Impact</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Aims to extend its impact to the well-being of communities and the planet.</li>
                <li>Promotes awareness of holistic health practices and sustainable living.</li>
                <li>Seeks collaboration with global health organizations, contributing to the conversation on integrative and preventive medicine.</li>
              </ul>
            </section>

            {/* Innovation and Continuous Learning */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Innovation and Continuous Learning</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Committed to innovation while staying rooted in tradition.</li>
                <li>Encourages ongoing research into Ayurvedic practices and their integration with modern medicine.</li>
                <li>Stays informed about the latest scientific advancements to ensure practices remain relevant and effective.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default MissionVision;
