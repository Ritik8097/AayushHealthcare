import React, { useState } from "react";
import "./specilities.css"; 
import { Helmet } from "react-helmet"



<Helmet>
  <title> Healthcare Sepecialities</title>
  <meta name="description" content="Join Aayush Healthcare as a healthcare franchise partner. Fill out the onboarding form to become a part of our medical network." />
  <meta name="keywords" content="view medical records online,patient health portal,hospital appointment booking,virtual health consultation,health checkup packages,Heatlhcare Sevices, Health,Pathology,franchise,Earning Potential, hospital onboarding, health franchise, join hospital network, healthcare partner,Aayush Healthcare, doctor,Franchise,Nurse,Consultation,Online Consultation,affordable treatment" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.aayushhealth.com/" />

  {/* Open Graph for Facebook */}
  <meta property="og:title" content="Pathology Onboarding | Healthcare" />
  <meta property="og:description" content="Become a Healthcare franchise partner. Submit your hospital and doctor details easily." />
  <meta property="og:url" content="https://www.aayushhealth.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.aayushhealth.com/" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Franchise Onboarding | Healthcare" />
  <meta name="twitter:description" content="franchise, hospital onboarding, health franchise, join hospital network, healthcare partner,Aayush Healthcare, doctor,Franchise,Nurse,Consultation,Online Consultation,affordable treatment" />
  <meta name="twitter:image" content="https://www.aayushhealth.com/" />
</Helmet>

const services = [
  {
    name: "Comprehensive Care",
    icon: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons.png?v=1738922599",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/401.jpg?v=1738848417",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_1.png?v=1740142645",
    description: [
      "At Aayush Wellness Center, we offer a full spectrum of medical services, ensuring that every patient receives expert diagnosis and treatment.",
      "General Medicine & Critical Care – Our experienced physicians provide advanced treatments for acute and chronic illnesses, including emergency care and intensive monitoring.",
      "Specialized Departments – We cater to various health needs with departments for pediatrics, women’s health, urology, orthopedics, ENT, and more",
      "Preventive Healthcare – Regular check-ups, screenings, and early disease detection help in maintaining long-term health.",
    ],
  },
  {
    name: "Advanced Surgeries",
    icon: "flaticon-walker",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/surgery-team-working-together-operating-room-hospital.jpg?v=1738848243",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_3_709bfc52-0a51-4264-a31b-03f620eb9fc5.png?v=1740142645",
    description: [
      "Our surgical expertise ensures precision, safety, and faster recovery through advanced techniques.",
      "Laparoscopic & Minimal Invasive Surgeries – Procedures with small incisions, leading to less pain, reduced scarring, and quicker recovery.",
      "Orthopedic & Joint Replacement Surgeries – Cutting-edge treatments for bone, ligament, and joint issues, restoring mobility and quality of life.",
      "Cosmetic & Reconstructive Surgeries – Enhancing natural beauty and restoring confidence through aesthetic and reconstructive surgical solutions.",
    ],
  },
  {
    name: "Holistic Wellness",
    icon: "flaticon-man",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/girl-doing-yoga.jpg?v=1738848243",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_30200003-8fab-43c8-9e07-4d72a89fde42.png?v=1740139000",
    description: [
      "We believe in integrating modern medicine with traditional healing for complete well-being.",
      "Ayurveda & Herbal Health Solutions – Ancient herbal therapies and natural remedies for sustainable health.",
      'Nutraceuticals & Immunity Boosting Products – Science-backed supplements designed to enhance immunity and overall wellness.',
      ' Mental Wellness & Stress Management – Programs focused on mindfulness, relaxation techniques, and mental health support.'
    ],
  },
  {
    name: "Modern Infrastructure",
    icon: "flaticon-liver",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/a-photo-of-a-side-view-of-a-modern-healt_gCjhNCAUTt6vVl3QNEF5QQ_WWlaYNV4S4qhs4ClUT-DJw.jpg?v=1738849485",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_2.png?v=1740142645",
    description:[
        "Our state-of-the-art facilities are designed for patient comfort, safety, and advanced medical care.",
        "High-Tech Medical Facilities – Equipped with modern ICUs, diagnostic labs, and operation theaters.",
        'Patient-Centric Design – Comfortable, hygienic, and welcoming spaces to ensure stress-free treatment experiences.',
        ' Day Care Surgeries – Safe and efficient procedures that allow patients to return home the same day.'
      ]
  },
  {
    name: "Expert Medical Team",
    icon: "flaticon-kidney",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/2151696318.jpg?v=1738848351",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_4.png?v=1740142646",
    description: [
        "We bring together renowned medical professionals committed to patient well-being.",
        "Top-Tier Doctors & Surgeons – Specialists across various fields providing best-in-class treatment.",
        'Compassionate & Professional Staff – A team of nurses, therapists, and healthcare professionals dedicated to holistic patient care.',
        'Multi-Disciplinary Approach – Every patient receives personalized treatment tailored to their specific needs.'
      ],
  },
  {
    name: "Affordable  Healthcare",
    icon: "flaticon-heart",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/front-view-doctor-holding-medical-element.jpg?v=1738849591",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_5.png?v=1740142645",
    description: [
        "Quality healthcare should be within reach for everyone.",
        "Cost-Effective Treatment Plans – We offer affordable pricing without compromising on quality.",
        'Insurance & Cashless Facilities – Hassle-free insurance processing and cashless transaction options.',
        'Expanding Locations – We are growing across the country to make premium healthcare accessible to more people.'
      ],
  },
  {
    name: "Innovation & Research",
    icon: "flaticon-brain",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/2148820161.jpg?v=1738849735",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_6.png?v=1740142645",
    description:[
        "We continuously evolve with the latest medical advancements to offer cutting-edge treatments.",
        "AI-Driven Healthcare Services – Smart diagnostics, virtual consultations, and telemedicine support.",
        'Integrating Traditional & Modern Medicine – A synergistic approach that blends ancient healing techniques with scientific advancements.',
        'Ongoing Research & Development – We invest in medical research to bring breakthrough treatments to our patients.'
      ],
  },
  {
    name: "Franchise Excellence",
    icon: "flaticon-walker",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/84801.jpg?v=1738849843",
    roundImage:"https://cdn.shopify.com/s/files/1/0653/9830/9053/files/icons_8.png?v=1740142645", 
    description: [
        "Aayush Wellness Center offers a proven, scalable business model for entrepreneurs in the healthcare sector.",
        " Proven Business Success – A strong, well-established brand with a track record of excellence.",
        ' Nationwide Expansion – We are actively growing, offering franchise opportunities in multiple cities.',
        'Trust & Credibility – Our name is synonymous with quality, innovation, and patient-first care.'
      ],
  },
];

const Specialities = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-wrapper">
      <div className="relative container">
        {/* Modal */}
        {selectedService && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
  <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 w-full max-w-4xl relative flex flex-col">
    
    {/* Title Centered at the Top */}
    <h3 className="text-[24px] md:text-[40px] font-extrabold mb-4 text-center" style={{ color: "#233f8f" }}>
      {selectedService.name}
    </h3>

    {/* Main Content Layout */}
    <div className="flex flex-col md:flex-row items-start md:items-stretch">
      
      {/* Left Side: Description */}
      <div className="md:w-1/2 w-full">
        {Array.isArray(selectedService.description) ? (
          <ul className="text-left list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: "#000000" }}>
            {selectedService.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm md:text-base">{selectedService.description}</p>
        )}
      </div>

      {/* Right Side: Image */}
      <div className="image md:w-1/2 w-full h-full flex justify-center">
        <img
          src={selectedService.image}
          alt={selectedService.name}
          className="rounded-lg shadow-md w-full h-full object-cover"
        />
      </div>
      
    </div>

    {/* Close Button */}
    <button
      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl md:text-2xl font-bold"
      onClick={closeModal}
    >
      &times;
    </button>
  </div>
</div>
)}

        <div className="section-title">
          <h2>OUR SPECIALITIES</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="single-services">
                {/* <span className={service.icon} /> */}
                <div className="w-full flex items-center justify-center">
               <img class="imgg" style={{borderRadius:"50%"}}  src={service.roundImage} />
               </div>
                <h3>{service.name}</h3>
                <button className="read-more" onClick={() => openModal(service)}>
                  Learn More 
                </button>
                <div className="services-shape">
                  <img
                    src="https://www.xpresscure.com/img/services-card-shape.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialities;
