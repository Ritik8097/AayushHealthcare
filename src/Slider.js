
import { useState, useEffect, useRef } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import closepng from "./images/close.png"
import searchIcon from "./images/search-gray.svg"
import ImageSlider from "./ImageSlider"


export default function AnimatedSlider() {
 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isVisible, setIsVisible] = useState(false)
  const [showText, setShowText] = useState(false)
  const sliderRef = useRef(null)
  const [csrOpen, setCsrOpen] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          setTimeout(() => setShowText(true), 5000) // Start text animation after 5 seconds
        }
      },
      { threshold: 0.1 },
    )

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current)
      }
    }
  }, [])

  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const videos = {
    desktop: {
      src: "https://cdn.shopify.com/videos/c/o/v/139791bdf7224d648c2a57aa7f458592.mp4",
      text: "Transforming Wellness , Transforming Lives",
    },
    mobile: {
      src: "https://cdn.shopify.com/videos/c/o/v/cd7177ad46114615a673ec4ef80c210f.mp4",
      text: "Transforming wellness, transforming lives",
    },
  }

  const selectedVideo = isMobile ? videos.mobile : videos.desktop

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAyurvedaDropdownOpen, setIsAyurvedaDropdownOpen] = useState(false)
  const [isWellnessDropdownOpen, setIsWellnessDropdownOpen] = useState(false)
  const [isNewsroomDropdownOpen, setIsNewsroomDropdownOpen] = useState(false)
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false) // Added state for "About Us"
  const [isCsrSubcategoryOpen, setIsCsrSubcategoryOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false) // Added state for CSR subcategories
  const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] = useState(false)

  const AyurvedaDropdownRef = useRef(null)
  const WellnessDropdownRef = useRef(null)
  const NewsroomDropdownRef = useRef(null)
  const AboutUsDropdownRef = useRef(null) // Added ref for "About Us"
  const CsrDropdownRef = useRef(null) // Added ref for CSR
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
    console.log("Menu toggled:", isMenuOpen)
  }

  const toggleAyurvedaDropdown = () => {
    setIsAyurvedaDropdownOpen(!isAyurvedaDropdownOpen)
    toggleIcon("svg", "svg4")
  }

  const toggleWellnessDropdown = () => {
    setIsWellnessDropdownOpen(!isWellnessDropdownOpen)
    toggleIcon("svg", "svg2")
  }

  const toggleNewsroomDropdown = () => {
    setIsNewsroomDropdownOpen(!isNewsroomDropdownOpen)
    toggleIcon("svg1", "svg3")
  }

  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)
    toggleIcon("svg5", "svg6")
  }

  const toggleCsrSubcategory = () => {
    // Added toggle function for CSR subcategories
    setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen)
    toggleIcon("svg7", "svg8")
  }

  const handleDropdownLinkClick = () => {
    setIsAyurvedaDropdownOpen(false)
    setIsWellnessDropdownOpen(false)
    setIsNewsroomDropdownOpen(false)
    setIsAboutUsDropdownOpen(false) // Close "About Us" dropdown when a link is clicked
    setIsCsrSubcategoryOpen(false)
    setIsSearchOpen(false) // Close CSR subcategories when a link is clicked
    setIsProductDropdownOpen(false) // Close Product dropdown when a link is clicked
  }

  const toggleIcon = (iconIdToToggle, iconIdToToggleOther) => {
    var iconToToggle = document.getElementById(iconIdToToggle)
    var iconToToggleOther = document.getElementById(iconIdToToggleOther)
    if (iconToToggle && iconToToggleOther) {
      iconToToggle.classList.toggle("svg")
      iconToToggleOther.classList.toggle("svg")
    }
  }

  return (
    <>
      <nav
        className="md:text-white text-[rgb(112, 112, 112)]  font-sans"
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
            <div className="hidden gap-4 md:flex space-x-4  text-[20px] font-[500]">
              <Link to="/" className=" hover:text-primary/80" style={{ fontFamily: '"Inter", sans-serif' }}>
                Home
              </Link>

              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Our Story
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full w-[1110px] h-[250px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  {/* Left Side: Title & Description */}
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      We started with a vision to create something meaningful. Our journey has been shaped by passion,
                      innovation, and dedication.
                    </p>
                  </div>

                  {/* Right Side: Links */}
                  <div className="w-[35%] flex flex-col gap-3 mt-12 ">
                    <Link
                      to="/about-us"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white "
                    >
                      <span className="block font-bold w-full px-4 text-inherit">About Us </span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        We started with a vision to create something
                      </span>
                    </Link>

                    <Link
                      to="/about/mission-vision"
                      className="grid grid-cols-1 text-left py-2 rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Mission & Vision</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Our mission is to do something Great
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Our Product Dropdown - Desktop */}
              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Our Product
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Our Product Dropdown Menu */}
               <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[1110px] h-[300px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6 ">
                                <div className="w-[60%] mt-10" >
                                  <h3 className="text-3xl font-bold text-gray-900"> Our Products</h3>
                                  <p className="text-lg text-gray-600 mt-2">
                                    Discover our range of premium products designed for your well-being and lifestyle.
                                  </p>
                                </div>
                            
                                <div className="w-[35%] flex flex-col gap-3 ">
                                  <Link
                                    to="/gummies-sleep"
                                    className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                                  >
                                    <span className="block font-bold w-full px-4 text-inherit">Dreamy Sleep Gummies</span>
                                    <span className="block text-sm px-4 text-grey-900 text-inherit">Supports better sleep and relaxation</span>
                                  </Link>
                            
                                  <Link
                                    to="/gummies"
                                    className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                                  >
                                    <span className="block font-bold w-full px-4 text-inherit">Beauty Vitamin Gummies</span>
                                    <span className="block text-sm px-4 text-grey-900 text-inherit">Enhances skin, hair, and nail health</span>
                                  </Link>
                            
                                  <Link
                                    to="/pan-masala"
                                    className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                                  >
                                    <span className="block font-bold w-full px-4 text-inherit">Herbal Pan Masala</span>
                                    <span className="block text-sm px-4 text-grey-900 text-inherit">Refreshing and herbal mouth freshener</span>
                                  </Link>
               
                                  <Link
                                    to="/ourproduct"
                                    className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                                  >
                                    <span className="block font-bold w-full px-4 text-inherit">View Our Products</span>
                                    <span className="block text-sm px-4 text-grey-900 text-inherit">  Explore our full range of high-quality products</span>
                                  </Link>
                                </div>
                              </div>
                            </div>

              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Corporate
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-1/2 top-full w-[1110px] h-auto bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform -translate-x-1/2 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  {/* Left Side: Title & Description */}
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-[#004037]">Corporate Initiatives</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Our dedication to ethical business practices, community engagement, and sustainable growth.
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      We believe in making a lasting impact through responsible actions and meaningful partnerships.
                    </p>
                  </div>

                  {/* Right Side: Links */}
                  <div className="w-[35%] flex flex-col gap-3 mt-8">
                    {/* CSR Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setCsrOpen(!csrOpen)}
                        className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white flex justify-between items-center"
                      >
                        <div>
                          <span className="block font-bold text-inherit flex px-4 items-center">
                            Welfare
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
                            <span className="block font-bold w-full px-4 text-inherit">Malnutrition</span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Fighting malnutrition with dedicated programs
                            </span>
                          </Link>

                          <Link
                            to="/csr-at-aayush/health-check"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">Healthcare Check</span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Providing essential healthcare services
                            </span>
                          </Link>

                          <Link
                            to="/sustainability"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">Sustainability</span>
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
                      <span className="block font-bold w-full px-4 text-inherit">Careers</span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Join our team and shape the future
                      </span>
                    </Link>

                    <Link
                      to="/investors"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Investors</span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Partner with us for sustainable growth
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/support" className=" hover:text-primary/80" style={{ fontFamily: '"Inter", sans-serif' }}>
                Support
              </Link>
              <Link to="/healthcare" className="hover:text-primary/80" style={{ fontFamily: '"Inter", sans-serif' }}>
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
              <button onClick={toggleSearch} className="   pl-[20px] pr-3  relative hidden md:flex">
                <img src={searchIcon || "/placeholder.svg"} alt="Search" className="h-6 w-6" />
              </button>
              {isSearchOpen && (
                <div class="sp" className=" hidden md:flex  absolute right-44 top-16 z-[99999]">
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
                {/* <button
                  onClick={toggleSearch}
                  className="block py-2 px-2  hover:text-primary/80"
                >
                  <img src={searchIcon || "/placeholder.svg"} alt="Search" className="h-6 w-6" />
                </button> */}

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

                  <img
                    className="h-7"
                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/svgviewer-output_5.svg?v=1741865350"
                    alt="menu"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-md z-50 transition-all duration-300 ${
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
            <button className="hover:text-primary/80 focus:outline-none" onClick={toggleMenu}>
              <img className="h-8" src={closepng || "/placeholder.svg"} alt="Close Menu" />
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
                  className={`w-5 h-5 transition-transform duration-200 ${isAboutUsDropdownOpen ? "rotate-180" : ""}`}
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
                      We started with a vision to create something meaningful. Our journey has been shaped by passion,
                      innovation, and dedication.
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

            {/* Our Product Dropdown - Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
              >
                <span>Our Product</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isProductDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="rounded-md mt-2 mb-3 py-2 ">
                  {/* Title & Description */}
                  <div className="px-4 py-2 " >
                    <h3 className="text-xl font-bold text-[#004037]">our products</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Discover our range of premium products designed for your well-being and lifestyle.
                    </p>
                  </div>

                  {/* Dropdown Links */}
                  <div className="flex flex-col">
                    <Link
                      to="/gummies-sleep"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Dreamy Sleep Gummies
                      <p className="text-sm text-gray-600">Supports better sleep and relaxation</p>
                    </Link>

                    <Link
                      to="/gummies"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Beauty Vitamin Gummies
                      <p className="text-sm text-gray-600">Enhances skin, hair, and nail health</p>
                    </Link>

                    <Link
                      to="/pan-masala"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Herbal Pan Masala
                      <p className="text-sm text-gray-600">Refreshing and herbal mouth freshener</p>
                    </Link>

                    <Link
                      to="/ourproduct"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      View our Products
                      <p className="text-sm text-gray-600">    Explore our full range of high-quality products</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-px w-full bg-gray-200 my-1"></div>
            <div className="relative">
              <button
                onClick={() => setIsCorporateDropdownOpen(!isCorporateDropdownOpen)}
                className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
              >
                <span>Corporate</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isCorporateDropdownOpen ? "rotate-180" : ""}`}
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
                        <span>welfare</span>
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
                              setIsCsrSubcategoryOpen(false)
                              setIsCorporateDropdownOpen(false)
                            }}
                          >
                            Malnutrition
                            <p className="text-sm text-gray-600">Fighting malnutrition with dedicated programs</p>
                          </Link>
                          <Link
                            to="/csr-at-aayush/health-check"
                            className="block px-4 py-3 text-[#004037] "
                            onClick={() => {
                              setIsCsrSubcategoryOpen(false)
                              setIsCorporateDropdownOpen(false)
                            }}
                          >
                            Healthcare Check
                            <p className="text-sm text-gray-600">Providing essential healthcare services</p>
                          </Link>
                          <Link
                            to="/sustainability"
                            className="block px-4 py-3 text-[#004037] "
                            onClick={() => {
                              setIsCsrSubcategoryOpen(false)
                              setIsCorporateDropdownOpen(false)
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

      <div className="video-wrapper relative" ref={sliderRef}>
        <div className="video-overlay">
          {/* Divider Line Below the Text */}
          <div className="absolute left-0 w-full border-t border-[#f9f3e8] z-10 mt-[5rem] md:mt-24 h-[1px]"></div>

          {/* Text Below Divider on the Left Side */}
          <div
            className="absolute top-[5.6rem] left-4 text-[#f9f3e8] leading-none font-normal 
      text-[50px] sm:text-[50px] md:text-[30px] lg:text-[40px] xl:text-[120px]"
            style={{ marginTop: isMobile ? "0px" : "1.5rem" }} // No !important needed
          >
            {isMobile ? (
              <>A New Era of Healthcare</>
            ) : (
              <>
                A New Era of <br /> Healthcare
              </>
            )}
          </div>
        </div>

        {/* Services/Products Title - Visible on all screen sizes */}
        <div
          className="absolute md:bottom-[370px] bottom-[440px] left-4  md:left-4 text-left text-[#f9f3e8] font-sm z-20 opacity-60"
          style={{
            fontSize: window.innerWidth < 768 ? "18px" : "16px",
            left: "0.5rem", // 20px for small screens, 24px for larger screens
          }}
        >
          Services/Products
        </div>

        {/* Left Horizontal Divider (Desktop) */}
        <div className="absolute bottom-[360px] left-0 w-1/2 h-[1px] bg-[#f9f3e8] z-10 hidden md:block"></div>

        {/* Right Horizontal Divider (Desktop) */}
        <div className="absolute bottom-[360px] right-0 w-1/2 h-[1px] bg-[#f9f3e8] z-10 hidden md:block"></div>

        {/* Left Horizontal Divider (Mobile) - Above slider cards */}
        <div className="absolute bottom-[430px] left-0 w-full h-[1px] bg-[#f9f3e8] z-10 md:hidden"></div>

        {/* Right Horizontal Divider (Mobile) - Below slider cards */}
        <div className="absolute bottom-[110px] left-0 w-full h-[1px] bg-[#f9f3e8] z-10 md:hidden"></div>

        {/* Vertical Divider (Hidden on Mobile) */}
        <div className="absolute bottom-0 left-1/2 w-[1px] h-[360px] bg-[#f9f3e8] z-10 transform -translate-x-1/2 hidden md:block"></div>

        {/* Right-Side Text (Desktop) */}
        <div
          className="absolute bottom-[395px] left-[52%] text-[#f9f3e8]  md:text-[20px] leading-tight font-sm w-[40%] z-20 md:block hidden opacity-60"
          style={{
            fontSize: window.innerWidth < 768 ? "10px" : "16px", // 20px for small screens, 24px for larger screens
          }}
        >
          Introduction
        </div>

        <div
          className="absolute bottom-[240px] left-[52%] text-[#f9f3e8] md:text-[20px] leading-tight font-sm w-[40%] z-20 md:block hidden"
          style={{
            fontSize: window.innerWidth < 768 ? "10px" : "20px", // 20px for small screens, 24px for larger screens
          }}
        >
          We prioritise prevention over treatment, offering healthcare, science-backed products, and holistic wellness
          empowering individuals towards lifelong well-being.
        </div>

        {/* Introduction & Other Text Just Below Divider on Mobile */}
        <div
          className="absolute bottom-[130px] left-4 md:left-4 text-left text-[#f9f3e8] leading-tight font-sm z-20 md:hidden opacity-60"
          style={{
            fontSize: window.innerWidth < 768 ? "18px" : "16px",
            left: "0.5rem", // 10px for mobile, 20px for desktop
          }}
        >
          Introduction
        </div>

        <div
          className="absolute bottom-[25px] left-4 right-4 text-left text-[#f9f3e8]  leading-tight font-bold z-20 md:hidden"
          style={{
            fontSize: window.innerWidth < 768 ? "14px" : "20px", // 20px for small screens, 24px for larger screens
          }}
        >
          We prioritise prevention over treatment, offering healthcare, science-backed products, and holistic wellness
          empowering individuals towards lifelong well-being.
        </div>

        {/* Centered ImageSlider on Mobile, Original Position on Desktop */}
        <div className="absolute z-10 md:bottom-16 md:left-4 md:right-auto bottom-[220px] inset-x-0 flex items-center justify-center md:inset-auto">
          <ImageSlider />
        </div>

        <video
          className={`video ${isVisible ? "fade-in" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/dudn5tfkq/image/upload/v1741259430/o3zcqyhewzusfycdygyc.png"
        >
          <source src={selectedVideo.src} type="video/mp4" />
        </video>

        <style jsx>{`
          .video-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            overflow: hidden;
          }
          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }
          .video-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 2;
            opacity: 0;
            transition: opacity 1s ease-in-out;
          }
          .video-text.show {
            opacity: 1;
          }
          .video-text p {
            font-size: 6rem;
            font-weight: bold;
            color: white;
            margin: 0;
            line-height: 1.2;
            white-space: nowrap;
          }
          .word {
            opacity: 0;
            display: inline-block;
          }
          .fade-word {
            animation: fadeIn 1s forwards;
          }
          .delay-1 {
            animation-delay: 4s;
          }
          .delay-2 {
            animation-delay: 8s;
          }
          .delay-3 {
            animation-delay: 10s;
          }
          .delay-4 {
            animation-delay: 12s;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .video-text p {
              font-size: 2rem;
            }
          }

          @media (min-width: 769px) {
            .video-text p {
              font-size: 7rem;
            }
          }
        `}</style>
      </div>
    </>
  )
}

