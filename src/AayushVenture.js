import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import menu from './images/menu.png';
import closepng from './images/close.png';
import searchIcon from './images/search-gray.svg'
import Footer from './Footer';
import VentureSection1 from './VentureSection1';
import TextAnimation from './TextAnimation';
import ANewFooter from './ANewfooter';


function AnimatedText({ heading, subtext, url, buttonText, isVisible }) {





  return (

    <div className="absolute  md:justify-start md:items-center  pt-[120px] inset-0 flex items-start justify-center px-6 md:px-12 ">
      <div
        className={`max-w-lg bg-opacity-75 p-6  text-white space-y-4 transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
          }`}
      >

        <h2 className="text-[22px] text-white md:text-3xl font-bold transition-all duration-[1000ms] ease-out delay-500">
          {heading}
        </h2>
        <div style={{ borderLeft: '1px solid white', marginLeft: " 10px", padding: "0px 15px" }}>
          <p className="text-sm md:text-base font-light italic transition-all duration-[1000ms] ease-out delay-700  pb-3">
            {subtext}
          </p>
          <a href={url}>
            <button style={{ backgroundColor: " black" }} className="px-4 py-2  text-white font-medium rounded-md  transition-all duration-[1000ms] ease-out delay-900">
              {buttonText} →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AayushVenture() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);
  const [csrOpen, setCsrOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the slider is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const desktopImages = [
  
    { type: "video", src: "https://cdn.shopify.com/videos/c/o/v/e85cb7f5f1ef4c22b62463885325dbc5.mp4" }, // Video Slide
    
   
  ];

  const mobileImages = [
    { type: "video", src: "https://cdn.shopify.com/videos/c/o/v/265efbceb09b43da91594acdc170d2b6.mp4" }, // Video Slide
  ];
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a880bc0c-8877-4f1c-9d4a-bb1574c365ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const images = isMobile ? mobileImages : desktopImages;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true, // Enables fade-in effect
    cssEase: "linear", // Ensures smooth animation
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAyurvedaDropdownOpen, setIsAyurvedaDropdownOpen] = useState(false);
  const [isWellnessDropdownOpen, setIsWellnessDropdownOpen] = useState(false);
  const [isNewsroomDropdownOpen, setIsNewsroomDropdownOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false); // Added state for "About Us"
  const [isCsrSubcategoryOpen, setIsCsrSubcategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // Added state for CSR subcategories
  const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] = useState(false);


  const AyurvedaDropdownRef = useRef(null);
  const WellnessDropdownRef = useRef(null);
  const NewsroomDropdownRef = useRef(null);
  const AboutUsDropdownRef = useRef(null); // Added ref for "About Us"
  const CsrDropdownRef = useRef(null); // Added ref for CSR
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAyurvedaDropdown = () => {
    setIsAyurvedaDropdownOpen(!isAyurvedaDropdownOpen);
    toggleIcon('svg', 'svg4');
  };

  const toggleWellnessDropdown = () => {
    setIsWellnessDropdownOpen(!isWellnessDropdownOpen);
    toggleIcon('svg', 'svg2');
  };

  const toggleNewsroomDropdown = () => {
    setIsNewsroomDropdownOpen(!isNewsroomDropdownOpen);
    toggleIcon('svg1', 'svg3');
  };

  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
    toggleIcon('svg5', 'svg6');
  };

  const toggleCsrSubcategory = () => { // Added toggle function for CSR subcategories
    setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen);
    toggleIcon('svg7', 'svg8');
  };

  const handleDropdownLinkClick = () => {
    setIsAyurvedaDropdownOpen(false);
    setIsWellnessDropdownOpen(false);
    setIsNewsroomDropdownOpen(false);
    setIsAboutUsDropdownOpen(false); // Close "About Us" dropdown when a link is clicked
    setIsCsrSubcategoryOpen(false);
    setIsSearchOpen(false); // Close CSR subcategories when a link is clicked
  };

  const toggleIcon = (iconIdToToggle, iconIdToToggleOther) => {
    var iconToToggle = document.getElementById(iconIdToToggle);
    var iconToToggleOther = document.getElementById(iconIdToToggleOther);
    if (iconToToggle && iconToToggleOther) {
      iconToToggle.classList.toggle('svg');
      iconToToggleOther.classList.toggle('svg');
    }
  };


  return (
    <>
      <nav
        className="md:text-white text-[rgb(145, 143, 143)]  font-sans"
        style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: "bold",
          fontSize: "clamp(0.875rem, 0.9rem + 0.2667vw, 1.125rem)",
        }}
      >
        <div className="max-w-[109rem] mx-auto px-4">
          <div className="flex justify-between md:justify-between items-center h-auto">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className="md:h-[5.7rem] h-[4rem] md:pt-3 md:pb-3"
                  src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_-_png-white.png?v=1734763399"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="hidden gap-4 md:flex space-x-4 text-[#ffffff] text-[20px] font-[500]">
              <Link
                to="/"
                className=" hover:text-primary/80"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Home
              </Link>

              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Our Story
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full w-[1110px] h-[250px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  {/* Left Side: Title & Description */}
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-gray-900">
                      Our Story
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">
                      We started with a vision to create something meaningful.
                      Our journey has been shaped by passion, innovation, and
                      dedication.
                    </p>
                  </div>

                  {/* Right Side: Links */}
                  <div className="w-[35%] flex flex-col gap-3 mt-12 ">
                    <Link
                      to="/about-us"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white "
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        About Us{" "}
                      </span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        We started with a vision to create something
                      </span>
                    </Link>

                    <Link
                      to="/about/mission-vision"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Mission & Vision
                      </span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Our mission is to do something Great
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Wellness & You
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                
                <div className="absolute left-0 top-full w-[1110px] h-[290px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-[#004037]">
                      Wellness & You
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Discover the perfect balance of modern science and ancient
                      wisdom to enhance your well-being.
                    </p>
                  </div>

                  
                  <div className="w-[35%] flex flex-col gap-3 mt-8">
                    <Link
                      to="/wellness/modern-science"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Modern Science
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Explore the latest advancements in science
                      </span>
                    </Link>

                    <Link
                      to="/ayurveda"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Ayurveda
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Ancient wisdom for holistic wellness
                      </span>
                    </Link>

                    <Link
                      to="/wellness/health-wellness"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Health & Wellness
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Your guide to a healthier lifestyle
                      </span>
                    </Link>
                  </div>
                </div>
              </div> */}

              {/* <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Newsroom
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                
                <div className="absolute left-1/2 top-full w-[1110px] h-[290px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform -translate-x-1/2 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-[#004037]">
                      Newsroom
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Stay updated with the latest news, press releases, and
                      important announcements.
                    </p>
                  </div>

                  
                  <div className="w-[35%] flex flex-col gap-3 mt-10">
                    <Link
                      to="/newsroom/in-the-news"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        In the News
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Latest media coverage and reports
                      </span>
                    </Link>

                    <Link
                      to="/newsroom/press-release"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Press Release
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Official statements and updates
                      </span>
                    </Link>

                    <Link
                      to="/newsroom/library"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Library
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Access research and archived news
                      </span>
                    </Link>
                  </div>
                </div>
              </div> */}

              <Link
                to="/ourproduct"
                className=" hover:text-primary/80"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Our Product
              </Link>

              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Corporate
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-1/2 top-full w-[1110px] h-auto bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform -translate-x-1/2 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  {/* Left Side: Title & Description */}
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-[#004037]">
                      Corporate Initiatives
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Our dedication to ethical business practices, community
                      engagement, and sustainable growth.
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      We believe in making a lasting impact through responsible
                      actions and meaningful partnerships.
                    </p>
                  </div>

                  {/* Right Side: Links */}
                  <div className="w-[35%] flex flex-col gap-3 mt-8">
                    {/* CSR Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setCsrOpen(!csrOpen)}
                        className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white flex justify-between items-center"
                      >
                        <div>
                          <span className="block font-bold text-inherit flex px-4 items-center">
                            CSR
                            <svg
                              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                                csrOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </span>
                          <span className="block text-sm px-4 text-gray-900 text-inherit">
                            Our impact on society and sustainability efforts
                          </span>
                        </div>
                      </button>

                      {csrOpen && (
                        <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-md rounded-lg p-3 flex flex-col gap-2 border border-gray-200">
                          <Link
                            to="/csr-at-aayush/malnutrition"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md hover:bg-[#004037] !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">
                              Malnutrition
                            </span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Fighting malnutrition with dedicated programs
                            </span>
                          </Link>

                          <Link
                            to="/csr-at-aayush/health-check"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">
                              Healthcare Check
                            </span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Providing essential healthcare services
                            </span>
                          </Link>

                          <Link
                            to="/sustainability"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">
                              Sustainability
                            </span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Driving positive change for a greener future
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Other Links */}
                    <Link
                      to="/career"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Careers
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Join our team and shape the future
                      </span>
                    </Link>

                    <Link
                      to="/investors"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">
                        Investors
                      </span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Partner with us for sustainable growth
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/support"
                className=" hover:text-primary/80"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Support
              </Link>
              <Link
                to="/healthcare"
                className="hover:text-primary/80"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                HealthCare
              </Link>
              <Link
                to="/growth-accelerator"
                className="  hover:text-primary/80"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Accelerator
              </Link>
            </div>
            <div className="js pl-[5px]  flex justify-center items-center">
              {/* Search Input */}
              <button
                onClick={toggleSearch}
                className="   pl-[20px] pr-3  relative hidden md:flex"
              >
                <img src={searchIcon} alt="Search" className="h-6 w-6" />
              </button>
              {isSearchOpen && (
                <div
                  class="sp"
                  className=" hidden md:flex  absolute right-44 top-16 z-[99999]"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border rounded-md focus:outline-none text-black"
                    onBlur={() => setIsSearchOpen(false)} // Hide search input when it loses focus
                  />
                </div>
              )}
            </div>

            <div className="md:hidden">
              <div className="flex">
                <button
                  onClick={toggleSearch}
                  className="block py-2 px-2  hover:text-primary/80"
                >
                  <img src={searchIcon} alt="Search" className="h-6 w-6" />
                </button>

                {isSearchOpen && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-2 py-2 border rounded-md  absolute top-14 left-[30%] z-[9999]"
                    onBlur={() => setIsSearchOpen(false)}
                  />
                )}
                <button
                  id="mobile-menu-button"
                  className=" hover:text-primary/80 focus:outline-none"
                  onClick={toggleMenu}
                >
                  {/* Mobile Search */}

                  <img className="h-7" src={menu} alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
  id="mobile-menu"
  className={`fixed top-0 left-0 h-[100dvh] w-full bg-white shadow-md z-50 transition-all duration-300 overflow-y-auto ${
    isMenuOpen ? "block !translate-x-0" : "hidden !-translate-x-full"
  }`}
>
          <div className="flex justify-between items-center px-6 ">
    {/* Logo on the left */}
    <img
      className="h-15 w-36 "
      src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" 
      alt="Logo"
    />

    {/* Close Button on the right */}
    <button
      className="hover:text-primary/80 focus:outline-none"
      onClick={toggleMenu}
    >
      <img
        className="h-8"
        src={closepng || "/placeholder.svg"}
        alt="Close Menu"
      />
    </button>
  </div>

          <div className="flex flex-col mt-10 px-6 overflow-y-auto h-full pb-20">
            {/* Home Link */}
            <Link
              to="/"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Home
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <div className="relative">
  <button
    onClick={() => setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Our Story</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isAboutUsDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isAboutUsDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      {/* Title & Description */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Our Story</h3>
        <p className="text-lg text-gray-600 mt-2">
          We started with a vision to create something meaningful.
          Our journey has been shaped by passion, innovation, and dedication.
        </p>
      </div>

      {/* Dropdown Links */}
      <div className="flex flex-col">
        <Link
          to="/about-us"
          className="block px-4 py-3 text-[#004037] font-bold transition"
          onClick={() => setIsAboutUsDropdownOpen(false)}
        >
          About Us
          <p className="text-sm text-gray-600">We started with a vision to create something</p>
        </Link>

        <Link
          to="/about/mission-vision"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsAboutUsDropdownOpen(false)}
        >
          Mission & Vision
          <p className="text-sm text-gray-600">Our mission is to do something Great</p>
        </Link>
      </div>
    </div>
  )}
</div>

            <div className="h-px w-full bg-gray-200 my-1"></div>

            {/* Wellness & You Dropdown */}
            {/* <div className="relative">
  <button
    onClick={() => setIsWellnessDropdownOpen(!isWellnessDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Wellness & You</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isWellnessDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isWellnessDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
    
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Wellness & You</h3>
        <p className="text-lg text-gray-600 mt-2">
          Discover the perfect balance of modern science and ancient
          wisdom to enhance your well-being.
        </p>
      </div>

      
      <div className="flex flex-col">
        <Link
          to="/wellness/modern-science"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsWellnessDropdownOpen(false)}
        >
          Modern Science
          <p className="text-sm text-gray-600">Explore the latest advancements in science</p>
        </Link>

        <Link
          to="/ayurveda"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsWellnessDropdownOpen(false)}
        >
          Ayurveda
          <p className="text-sm text-gray-600">Ancient wisdom for holistic wellness</p>
        </Link>

        <Link
          to="/wellness/health-wellness"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsWellnessDropdownOpen(false)}
        >
          Health & Wellness
          <p className="text-sm text-gray-600">Your guide to a healthier lifestyle</p>
        </Link>
      </div>
    </div>
  )}
</div> */}
            {/* <div className="h-px w-full bg-gray-200 my-1"></div>

            <div className="relative">
  <button
    onClick={() => setIsNewsroomDropdownOpen(!isNewsroomDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Newsroom</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isNewsroomDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button> */}

  {/* {isNewsroomDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Newsroom</h3>
        <p className="text-lg text-gray-600 mt-2">
          Stay updated with the latest news, press releases, and important announcements.
        </p>
      </div>

      
      <div className="flex flex-col">
        <Link
          to="/newsroom/in-the-news"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsNewsroomDropdownOpen(false)}
        >
          In the News
          <p className="text-sm text-gray-600">Latest media coverage and reports</p>
        </Link>

        <Link
          to="/newsroom/press-release"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsNewsroomDropdownOpen(false)}
        >
          Press Release
          <p className="text-sm text-gray-600">Official statements and updates</p>
        </Link>

        <Link
          to="/newsroom/library"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsNewsroomDropdownOpen(false)}
        >
          Library
          <p className="text-sm text-gray-600">Access research and archived news</p>
        </Link>
      </div>
    </div>
  )}
</div> */}

            {/* <div className="h-px w-full bg-gray-200 my-1"></div> */}

            <Link
              to="/ourproduct"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Our Product
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <div className="relative">
  <button
    onClick={() => setIsCorporateDropdownOpen(!isCorporateDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Corporate</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isCorporateDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isCorporateDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      {/* Title & Description */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Corporate Initiatives</h3>
        <p className="text-lg text-gray-600 mt-2">
          Our dedication to ethical business practices, community engagement, and sustainability.
        </p>
      </div>

      {/* Dropdown Links */}
      <div className="flex flex-col">
        {/* CSR Section with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen)}
            className="block w-full px-4 py-3 text-[#004037] font-extrabold  flex justify-between items-center"
          >
            <span>CSR</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isCsrSubcategoryOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {isCsrSubcategoryOpen && (
            <div className="ml-4  mt-2 py-2">
              <Link
                to="/csr-at-aayush/malnutrition"
                className="block px-4 py-3 text-[#004037] "
                onClick={() => {
                  setIsCsrSubcategoryOpen(false);
                  setIsCorporateDropdownOpen(false);
                }}
              >
                Malnutrition
                <p className="text-sm text-gray-600">Fighting malnutrition with dedicated programs</p>
              </Link>
              <Link
                to="/csr-at-aayush/health-check"
                className="block px-4 py-3 text-[#004037] "
                onClick={() => {
                  setIsCsrSubcategoryOpen(false);
                  setIsCorporateDropdownOpen(false);
                }}
              >
                Healthcare Check
                <p className="text-sm text-gray-600">Providing essential healthcare services</p>
              </Link>
              <Link
                to="/sustainability"
                className="block px-4 py-3 text-[#004037] "
                onClick={() => {
                  setIsCsrSubcategoryOpen(false);
                  setIsCorporateDropdownOpen(false);
                }}
              >
                Sustainability
                <p className="text-sm text-gray-600">Driving positive change for a greener future</p>
              </Link>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          to="/career"
          className="block px-4 py-3 text-[#004037] font-bold "
          onClick={() => setIsCorporateDropdownOpen(false)}
        >
          Careers
          <p className="text-sm text-gray-600">Join our team and shape the future</p>
        </Link>

        <Link
          to="/investors"
          className="block px-4 py-3 text-[#004037] font-bold "
          onClick={() => setIsCorporateDropdownOpen(false)}
        >
          Investors
          <p className="text-sm text-gray-600">Partner with us for sustainable growth</p>
        </Link>
      </div>
    </div>
  )}
</div>


            <div className="h-px w-full bg-gray-200 my-1"></div>
            <Link
              to="/support"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Support
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <Link
              to="/healthcare"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Healthcare
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <Link
              to="/growth-accelerator"
              className="block py-4 font-extrabold text-[#004037] text-[36px]"
              onClick={handleDropdownLinkClick}
            >
              Accelerator
            </Link>
          </div>
        </div>
      </nav>

<VentureSection1/>
      <div className=' relative'   ref={sliderRef}>
        <div className=' absolute center-text  top-[10%] left-[10%] md:left-[30%]   text-white text-[25px] md:text-[45px]  md:max-w-full max-w-[380px]  z-[9999] '>Fuelling Innovation in Health & Wellness</div>
      <Slider {...sliderSettings}>
      {images.map((slide, index) => (
        <div  key={index} className=" bg-black ">
          {slide.type === "video" ? (
            <video
              className="w-full h-[100vh] object-cover opacity-45"
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-[100vh] object-cover md:object-fill "
              src={slide.src}
              alt={`Slide ${index + 1}`}
            />
          )}
        </div>
      ))}
    </Slider>

        <div  className='md:p-16 p-[20px] translate-y-[-30px]' style={{ boxSizing: 'border-box', background: "black", overflowX: "hidden" }}>
          <div className='md:p-11 flex md:flex-row flex-col-reverse' style={{ fontWeight: 300, color: 'rgb(255, 255, 255)', margin: '0px 0px 92.1233px', fontSize: '95.15px', boxSizing: 'border-box', marginBottom: '92.1233px', textAlign: 'left',   position: 'relative' }}>
            <letter-split  className=" w-full" content="$$0$$" style={{ boxSizing: 'border-box', margin: '0px', padding: '0px', position: 'relative', display: 'block',  wordBreak: 'keep-all' }}>
          <div class="headd"   >  At Aayush Wellness, we’re not just investing in companies—we’re shaping the future of health and wellness. By collaborating with forward-thinking startups, we aim to create smarter, more personalized solutions that improve lives.</div>
          <br/>
            <span  className='text-[25px] md:text-[30px]  md:leading-[1]  text-[#a8ff00]'>-  Managing Director, <br/> <p  className='pt-[14px] text-[20px] md:text-[20px]  md:leading-[1]  text-white'>Aayush Wellness Limited</p></span>
         
            </letter-split>
          
          

         <img className='md:w-[45%] w-full' src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Vision_Image.jpg?v=1738913950"/>  
         
         </div>
          {/* <hr style={{ appearance: 'none', border: '0px none rgb(255, 255, 255)', borderRadius: '0px', boxSizing: 'border-box', margin: '0px', padding: '0px', opacity: '0.25', background: 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box', height: '1px' }} />
        */}
       
       
        </div>

        {/* <div className=' h-[100vh] bg-white flex justify-center items-center p-[15px]'>
        <div class="animated-text headdb">
  <span>E</span><span>m</span><span>p</span><span>o</span><span>w</span><span>e</span><span>r</span><span>i</span><span>n</span><span>g</span>
  <span>I</span><span>n</span><span>n</span><span>o</span><span>v</span><span>a</span><span>t</span><span>o</span><span>r</span><span>s</span><span>.</span>
  <span>A</span><span>c</span><span>c</span><span>e</span><span>l</span><span>e</span><span>r</span><span>a</span><span>t</span><span>i</span><span>n</span><span>g</span>
  <span>S</span><span>u</span><span>c</span><span>c</span><span>e</span><span>s</span><span>s</span><span>.</span>
</div>

        </div> */}

<TextAnimation/>



        <div className='md:p-32 ' style={{ boxSizing: 'border-box', background: "black", overflowX: "hidden" }}>
          <block-article parallax="" parallax-ratio="0.1" data-direction="$$0$$" data-content="$$1$$" style={{ boxSizing: 'border-box', margin: '0px', padding: '0px', display: 'block' }}>
            <scroll-object className="md:pl-[40px] md:pr-[40px] pl-[20px] pr-[20px]" style={{ boxSizing: 'border-box', margin: '0px', flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
              <div className='flex items-center justify-center w-full flex-col md:flex-row' style={{ boxSizing: 'border-box', margin: '0px', padding: '52.9444px 0px', paddingTop: '52.9444px', paddingBottom: '52.9444px' }}>
                <div className=' w-full md:w-[50%] '>
                  <video className='w-full'
                    src="https://cdn.shopify.com/videos/c/o/v/1e673fbda9774460ba5e281e60de1917.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  // Optional styling
                  />
                </div>
                <p className='md:w-[50%] w-full p-[10px]' style={{ boxSizing: 'border-box', margin: '0px 0px 42.3556px',  marginBottom: '42.3556px' }}><span className='p-[10px]' style={{ boxSizing: 'border-box', margin: '0px'}}>

                  <p class="headd"  >
                  At <span className="text-[#a8ff00]" >Aayush Wellness</span> , we go beyond capital offering deep industry expertise, Marketing Support,operational guidance, and access to a powerful network to help you accelerate <span className="text-[#a8ff00]" >growth</span> and scale sustainably.
                   </p>
                
                </span></p>

              </div>

            </scroll-object>
          </block-article>
        </div>
























        {/* <div className='flex   items-center justify-center pt-3 p-8'>
          <div class=" pt-4 text-xl md:max-w-screen-lg "><h3 class=" text-center text-2xl pb-4  font-bold"> We are the venture and growth capital arm of Aayush Wellness Limited</h3>We are committed to empowering visionary founders who are shaping the future of health and wellness. We blend industry expertise with venture agility, offering capital, strategic guidance, and a powerful network. Partnering with investors and incubators, we fuel innovation in technology, products, and business models. </div>



        </div> */}
        {/* 
      <div class="flex  align-center  justify-center pt-3 p-8"><div class=" pt-4 text-xl md:max-w-screen-lg "><h3 class=" text-left text-2xl pb-4  font-bold">Empowering Brands That Drive Innovation</h3>We invest in innovative products and transformative technology in health & wellness.</div></div>
      

        <div class="flex  align-center  justify-center pt-3 p-8 j">
          <div class=" pt-4 text-xl md:max-w-screen-lg ">
            <div className="wpb_wrapper snipcss-lbOA8">
              <header className="kd-section-title col-lg-12 text-center">
                <h2 className="separator_off">BENEFITS FOR STARTUPS</h2>
              </header>
              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="key-icon-box icon-default icon-top cont-center ib-hover-1 about-box">
                        <div className="ib-wrapper">
                          <FontAwesomeIcon icon={faHandsHelping} />
                          <h6 className="service-heading">Mentoring</h6>
                          <p>Startups not only get a cheque, but also mentoring support through initiatives like ‘Expert Panel’</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="key-icon-box icon-default icon-top cont-center ib-hover-1 about-box">
                        <div className="ib-wrapper">
                          <FontAwesomeIcon icon={faLaptop} />
                          <h6 className="service-heading">Digitised Processes</h6>
                          <p>A Single Point of Contact is provided to the Startup to help with digitised processes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="key-icon-box icon-default icon-top cont-center ib-hover-1 about-box">
                        <div className="ib-wrapper">
                          <FontAwesomeIcon icon={faCodeBranch} />
                          <h6 className="service-heading">Technology Support</h6>
                          <p>AWS credits and other technological support are given to all IPV funded startups</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img
                              width="649"
                              height="325"
                              src="https://ipventures.in/wp-content/uploads/2020/11/with-leaf-3.png"
                              className="vc_single_image-img attachment-full"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="key-icon-box icon-default icon-top cont-center ib-hover-1 about-box">
                        <div className="ib-wrapper">
                          <FontAwesomeIcon icon={faPeopleCarry} />
                          <h6 className="service-heading">Community Building</h6>
                          <p>Community building and peer-to-peer problem solving through our Founders Genie Program</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="key-icon-box icon-default icon-top cont-center ib-hover-1 about-box">
                        <div className="ib-wrapper">
                          <FontAwesomeIcon icon={faTachometerAlt} />
                          <h6 className="service-heading">Speedy Process</h6>
                          <p>Streamlined fundraising process facilitates quicker fundraising, without multiple meetings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-4">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="key-icon-box icon-default icon-top cont-center ib-hover-1 about-box">
                        <div className="ib-wrapper">
                          <FontAwesomeIcon icon={faChartLine} />
                          <h6 className="service-heading">Startup Growth</h6>
                          <p>‘VC Showcase’ is organised frequently to help startups grow by connecting them with VCs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>*/}


        {/* <div class="flex  align-center  justify-center pt-3 p-8"><div class=" pt-4 text-xl md:max-w-screen-sm "><h3 class=" text-left text-2xl pb-4  font-bold">We would love to hear from you.</h3>





          <a href='tel:+918655900409'>
            <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Call Or Whatsapp</button>
          </a>
          <a href='mailto:info@aayushwellness.com'>

            <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Email Us</button>
          </a>
          <a href='/support'>
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Contact Us</button>
          </a>
        </div>

        </div> */}




      </div>
      <div >
          <div>
            <div >
              <img   loading='lazy' className=" w-full hidden md:block" src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Aayush_Venture_Startup_Banner_-_3-2-2025_-_Dekstop_2_0c883aa8-68d4-4731-b8f5-09e47a6e3461.jpg?v=1738914723" alt="Slide 1" />
              <img   loading='lazy' className="w-full block md:hidden" src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Aayush_Venture_Startup_Banner_-_3-2-2025_-_Mobile_Size.jpg?v=1738655946" alt="Slide 1" />
             
            </div>
           
            </div>
          </div>

          <a class="stickywhatsapp" target="_blank" href="https://wa.me/918655900409?text=https://www.aayushwellness.com/aayush-venture Hi"><img src="https://cdn.shopify.com/s/files/1/0606/9298/8070/files/wa-logo-120.png?v=1706167621" width="20" height="20"/> Whatsapp us</a>
          <a class="stickyemail" target="_blank" href="mailto:info@aayushwellness.com"><img src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/email.png?v=1738847206" width="20" height="20"/> Email Us</a>

      <ANewFooter />
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  customText: {
    fontFamily: 'segma, sans-serif',
    fontSize: '32px',
    fontWeight: 'normal',
  },
};
