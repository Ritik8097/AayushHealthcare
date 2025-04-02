import React, { useState, useEffect } from 'react';
import './CompanyIntro.css';
import Header from './Header';
import SkeletonLoader from './SkeletonLoader';
import NewFooter from './NewFooter';

// Slider settings


const fetchData = () => {
  // Simulating a network request to fetch data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Our Story',
        sections: [
          {
            title: 'Nutraceuticals & Supplements',
            content: 'We create advanced nutraceuticals that are scientifically formulated to enhance your health naturally. Our supplements are designed to support your body’s functions, improve immunity, and address specific health concerns, ensuring you lead a vibrant and balanced life.',
          },
          {
            title: 'Herbal Health Solutions',
            content: 'Harnessing the power of Ayurveda, our herbal solutions offer safe, effective remedies for a wide range of health issues. From stress relief to improved sleep and better digestion, our products are rooted in nature and backed by rigorous research, providing holistic care for your mind and body.',
          },
          {
            title: 'Beauty & Wellness Products',
            content: 'We believe beauty is a reflection of health. Our range of beauty products, infused with natural ingredients, not only enhances your appearance but also nourishes your skin and body from within. From anti-aging creams to skin-enhancing supplements, we are committed to helping you radiate wellness inside and out.',
          },
          {
            title: 'Preventive Healthcare',
            content: 'In today’s fast-paced world, prevention is key to maintaining optimal health. We offer a range of products that promote preventive care, helping you avoid health issues before they arise. Our preventive healthcare solutions empower you to take control of your well-being with confidence.',
          },
          {
            title: 'Quality & Innovation',
            content: 'Quality is at the heart of everything we do. All our products are crafted with the highest standards of safety and efficacy in mind. We continuously innovate by integrating the latest scientific advancements with time-honored natural practices, ensuring you receive the best of both worlds.',
          },
        ],
      });
    }, 200); // Simulate a 2-second network request
  });
};

export default function CompanyIntro() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <Header />
      <div className="relative">
       
          <div>
            <img
              loading="lazy"
              className="w-full hidden md:block"
              src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/website_about_us_our_story_1.jpg?v=1724405337"
              alt="Slide 1"
            />
            <img className=' w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/MOBILE_SIZE_ABOUT_US_OUR_STORY_1.jpg?v=1724668205' />
          </div>
          {/* Add more slides if needed */}
        
      </div>
      <h1 className="text-[33px] font-bold mt-8 text-center" style={{ color: '#d1a272' }}>
        {data.title}
      </h1>
      <div className="timeline_tl" id="myList">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`container_tl ${index % 2 === 0 ? 'left_tl' : 'right_tl'}`}
            style={{ display: 'block' }}
          >
            <div className="content_tl">
              <h1 className='text-[16px] text-center font-bold text-[#707070;] mb-2'>
                {section.title}
              </h1>
              <p>
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <NewFooter />
    </>
  );
}
