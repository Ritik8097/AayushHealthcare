
import { useState, useRef, useEffect } from "react"
import { Plus, ChevronLeft, ChevronRight, Minus } from "lucide-react"
import Header from "./Header"
import Footer from "./Footer"
import { Library, Leaf, ShieldCheck, PackageCheck, Vegan, WheatOff, SearchCheck, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import NewFooter from './NewFooter';

const ProductGummies = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSidebar, setActiveSidebar] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)
  const contentRef = useRef(null)
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const contentItems = useRef([])
  const progressLineRef = useRef(null)

  const images = [
    
     
    'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/1st_Banner_-_Product_Preview_-_27-1-2025.jpg?v=1742647580',  
    'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/3rd_banner_-_Benefits_-_29-1-2025.jpg?v=1742647549',
    'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/2nd_Banner_-_Ingredients_-_27-1-2025.jpg?v=1742647536',
    'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/9th_banner_-_Certified_-_21-1-2025.jpg?v=1742647446',
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/6th_Banner_-_How_to_Consume_-_27-1-2025.jpg?v=1742647484",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/7th_Banner_-_Comparisn_Competitors_-_9-1-2025_2.jpg?v=1742647496",
    'https://iili.io/dWaG7LX.gif',  
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // For more complex routing scenarios, you might need this alternative approach:
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0);
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const toggleSidebar = (section) => {
    if (activeSidebar === section) {
      setActiveSidebar(null)
    } else {
      setActiveSidebar(section)
    }
  }

  // Handle sticky behavior for desktop
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current || !contentRef.current || !containerRef.current || window.innerWidth < 768) return

      const carouselHeight = carouselRef.current.offsetHeight
      const contentHeight = contentRef.current.offsetHeight
      const containerTop = containerRef.current.getBoundingClientRect().top
      const scrollPosition = window.scrollY
      const contentBottom = contentRef.current.offsetTop + contentHeight

      // Make carousel sticky until content is fully scrolled
      if (containerTop <= 0 && scrollPosition + carouselHeight < contentBottom) {
        carouselRef.current.style.position = "sticky"
        carouselRef.current.style.top = "0"
        carouselRef.current.style.right = "0"
      } else if (scrollPosition + carouselHeight >= contentBottom) {
        carouselRef.current.style.position = "sticky"
        carouselRef.current.style.top = `${contentHeight - carouselHeight}px`
        carouselRef.current.style.right = "0"
      } else {
        carouselRef.current.style.position = "static"
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    // Initial positioning
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const faqItems = [
    {
      question: "What kind of testing do you do for Beauty Gummies?",
      answer: (
        <div className="space-y-4">
          <p>
          We prioritize quality and safety by conducting rigorous in-house and third-party testing on every batch of our Beauty Gummies. Our testing ensures that each gummy meets the highest standards for purity, potency, and compliance with regulations on heavy metals, microbes, and allergens. Because you deserve only the best for your beauty and wellness!
          </p>
        </div>
      ),
    },
    {
      question: "How and when should I take Beauty Gummies?",
      answer: "For best results, take one gummy daily with or without food. Consistency is key—regular use helps nourish your hair, skin, and nails from within. If you are pregnant, nursing, or have any medical conditions, consult your doctor before use.",
    },
    {
      question: "How do Beauty Gummies work?",
      answer: "Our Beauty Gummies are packed with biotin, collagen, and essential vitamins that help support healthy hair, radiant skin, and strong nails. These nutrients work from the inside out, promoting beauty at a cellular level for long-term results.",
    },
    {
      question: "Why are Beauty Gummies formulated with biotin and collagen?",
      answer: "Biotin is known to support hair growth and nail strength, while collagen helps maintain skin elasticity and hydration. Our carefully crafted formula combines these beauty-boosting ingredients with other essential vitamins to enhance your natural glow.",
    },
    {
      question: "How long does it take to see results from Beauty Gummies?",
      answer: "Results vary from person to person, but most users notice stronger nails within 2-3 weeks, healthier hair in about 4-6 weeks, and improved skin hydration and glow within 6-8 weeks. For best results, continue taking your gummies consistently.",
    },
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  //scroll section
  const items = [
    {
      title: "Glutathione",
      description:
        "Glutathione is a powerful antioxidant that helps protect cells from damage, supports immune function, and promotes healthy skin. It aids in detoxification, boosts overall well-being, and enhances skin radiance.",
    },
    {
      title: "Vitamin C",
      description:
        "Vitamins are essential nutrients that support overall health, boost immunity, and promote energy production. They play a crucial role in maintaining skin, hair, and bone health while ensuring the proper functioning of bodily systems.",
    },
    {
      title: "Hyaluronic Acid",
      description:
        "Hyaluronic acid is a powerful hydrating ingredient that retains moisture, keeping skin plump, smooth, and youthful. It's widely used in skincare to enhance skin elasticity and reduce the appearance of fine lines and wrinkles.",
    },
    {
      title: "Biotin",
      description:
        "Biotin, also known as Vitamin B7, is a vital nutrient that supports healthy hair, skin, and nails. It plays a key role in converting food into energy, promoting overall metabolic health.",
    },
    {
      title: "Curcumin Ext",
      description:
        "Curcumin extract, derived from turmeric, is a potent antioxidant and anti-inflammatory compound. It's widely used for its health benefits, including supporting joint health, boosting immunity, and promoting overall well-being.",
    },
    {
      title: "Cranberry Ext",
      description:
        "Cranberry extract is rich in antioxidants and vitamins that support urinary tract health and boost immune function. It helps prevent urinary tract infections and promotes overall well-being with its natural anti-inflammatory properties.",
    },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateProgressLine = () => {
      const items = contentItems.current
      if (!items.length) return

      const viewportHeight = window.innerHeight
      let totalVisible = 0
      let lastVisibleIndex = -1

      items.forEach((item, index) => {
        if (!item) return

        const rect = item.getBoundingClientRect()
        const isVisible = rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2

        if (isVisible) {
          totalVisible++
          lastVisibleIndex = index

          item.classList.add("opacity-100", "translate-y-0")
          item.classList.remove("opacity-0", "translate-y-8")

          const dot = item.querySelector(".timeline-dot")
          if (dot) {
            dot.classList.add("scale-125", "bg-[#260e1f]")
            dot.classList.remove("scale-100", "bg-gray-300")
          }
        } else {
          item.classList.remove("opacity-100", "translate-y-0")
          item.classList.add("opacity-0", "translate-y-8")

          const dot = item.querySelector(".timeline-dot")
          if (dot) {
            dot.classList.remove("scale-125", "bg-[#260e1f]")
            dot.classList.add("scale-100", "bg-gray-300")
          }
        }
      })

      if (progressLineRef.current) {
        if (lastVisibleIndex >= 0) {
          const progress = (lastVisibleIndex + 1) / items.length
          progressLineRef.current.style.height = `${progress * 100}%`
          progressLineRef.current.style.opacity = "1"
        } else {
          progressLineRef.current.style.height = "0%"
          progressLineRef.current.style.opacity = "0"
        }
      }
    }

    const onScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgressLine()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    updateProgressLine() // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      <Header />
      <section className="relative bg-white md:pt-[90px]">
      <div ref={containerRef} className="container mx-auto px-4" style={{ maxWidth: "1903px", width: "100%" }}>
        {/* Mobile View - Swiper Carousel */}
        <div className="block md:hidden mb-8 pt-6">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col md:flex-row relative gap-[80px]">
          {/* Product Details Section - Left side */}
          <div ref={contentRef} className="w-full md:py-20 px-0 md:pl-[150px] max-w-[755px]">
            <h1 className="text-[35px] font-bold text-[#d15523] mb-1">Beauty Vitamin Gummies</h1>
            <p className="text-base text-[#d15523] mb-6 italic">Aayush Wellness </p>

            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <p className="text-base text-gray-700 mb-4">
                "Our Beauty BioSeries™ Gummies are clinically shown to support healthy skin, hair, and nails while promoting hydration and collagen synthesis for a radiant glow."
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Select Your Cadence</h3>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full border border-[#d15523] flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#d15523]"></div>
                    </div>
                    <span className="font-medium">Buy once</span>
                  </div>
                  <span className="font-bold text-[#d15523]">₹599</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <Link
                to="https://aayushlife.com/products/beauty-vitamin-gummies"
                className="w-full"
                style={{ display: "block" }}
              >
                <button className="bg-[#d15523] text-white py-3 px-6 rounded-lg w-full text-center font-semibold">
                  Shop Now
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-base text-gray-700 mb-4">
                  Say hello to radiant skin and luscious hair with our Glow Beauty Gummies. Crafted with a blend of Modern Scientific ingredients such as Glutathione, Hyaluronic Acid, and Biotin, and Active Ayurveda such as Curcumin and Sea Buckthorn Extract. These gummies support skin hydration, repair, and nourishment while promoting healthy hair growth, helping you achieve a youthful, glowing complexion and strong, vibrant locks. These gummies are Non-GMO & 100% Vegan.
                </p>
              </div>

              {/* Accordion sections */}
              <div className="border-t border-gray-200">
                <button
                  className="w-full py-4 flex justify-between items-center"
                  onClick={() => toggleSidebar("supplement")}
                >
                  <span className="font-semibold text-[#d15523]">Supplement Facts</span>
                  <Plus className="h-5 w-5 text-[#d15523]" />
                </button>
              </div>

              <div className="border-t border-gray-200">
                <button
                  className="w-full py-4 flex justify-between items-center"
                  onClick={() => toggleSidebar("results")}
                >
                  <span className="font-semibold text-[#d15523]">Clinically-Proven Results</span>
                  <Plus className="h-5 w-5 text-[#d15523]" />
                </button>
              </div>

              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          {/* Desktop View - Sticky Carousel */}
          <div 
          className="hidden md:block md:w-1/2 md:pl-8 sticky top-0 left-0" style={{ height: "500px" }}>
            <div className="relative mx-auto">
              <div className="flex h-full">
                <div className="w-[500px] h-full">
                  <img
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`Product Image ${currentIndex + 1}`}
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="w-[10px]"></div>
                <div className="w-[500px] h-full">
                  <img
                    src={images[(currentIndex + 1) % images.length] || "/placeholder.svg"}
                    alt={`Product Image ${((currentIndex + 1) % images.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-[60px]">
                <button onClick={handlePrev} className="bg-white rounded-full shadow-md p-1 hover:bg-gray-100">
                  <ChevronLeft className="h-35 w-35 text-gray-700" />
                </button>
                <button onClick={handleNext} className="bg-white rounded-full shadow-md p-1 hover:bg-gray-100">
                  <ChevronRight className="h-35 w-35 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Certification logos */}
            <div className="flex flex-wrap justify-between mt-8">
              <img src="/placeholder.svg?height=40&width=40" alt="Non-GMO Verified" className="h-10" />
              <img src="/placeholder.svg?height=40&width=40" alt="Certified" className="h-10" />
              <img src="/placeholder.svg?height=40&width=40" alt="Carbon Free" className="h-10" />
              <img src="/placeholder.svg?height=40&width=40" alt="Clean Label" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* scroll section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="lg:w-1/2 lg:sticky lg:top-20 lg:h-fit">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Beauty_Before_After_Product_slider_banner_-_1080px_X1080px_-_11-11-2024_-_2a.jpg?v=1742627785"
                alt="Peaceful sleep environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-[42px] font-bold text-[#d15523] mb-12">Nourish Your Beauty from the Inside Out







</h2>
            <p className="text-lg text-gray-700 mb-16">
            Reveal your glow with Aayush Wellness technology, designed to nourish your skin, hair, and nails from within for a healthier, more radiant appearance.
            </p>
            {/* Timeline */}
            <div className="relative">
              {/* Single Progress Line */}
              <div
                ref={progressLineRef}
                className="absolute left-2.5 top-0 w-0.5 bg-[#d15523] transition-all duration-1000 ease-in-out"
                style={{
                  height: "0%",
                  opacity: "0",
                }}
              />

              {/* Timeline Items */}
              <div className="space-y-16">
                {items.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (contentItems.current[index] = el)}
                    className="relative pl-12 transition-all duration-1000 ease-in-out opacity-0 translate-y-8"
                  >
                    {/* Dot */}
                    <div className="timeline-dot absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-white shadow-md transition-all duration-1000 ease-in-out bg-[#eb5723]"></div>

                    {/* Content */}
                    <div className="transition-all duration-1000 ease-in-out">
                      <h3 className="text-[22px] font-semibold mb-2 text-[#d15523]">{item.title}</h3>
                      <p className=" text-[18px] leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[42px] font-bold text-[#d15523] mb-6">Experience Radiant Beauty from Within</h2>
            <div className="w-24 h-1 bg-[#d15523] mb-8"></div>
            <p className="text-lg text-gray-700">
            Our revolutionary beauty gummies are designed to enhance your skin, hair, and nails from within. The unique formula nourishes your body with essential vitamins and nutrients, promoting a radiant and healthy glow.
            </p>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="w-full h-[500px] max-w-[500px] mx-auto">
              <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/5fc670e1da6e4de0a28b5dd362ed0c3b.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar for accordion content */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[455px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          activeSidebar ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[40px] font-bold text-[#d15523]">
              {activeSidebar === "supplement" && "Supplement Facts"}
              {activeSidebar === "use" && "How to Use"}
              {activeSidebar === "results" && "Clinically-Proven Results"}
            </h3>
            <button onClick={() => setActiveSidebar(null)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <div className="w-full h-1 bg-[#d15523] mb-8"></div>

          {activeSidebar === "supplement" && (
            <div>
              {/* Certification Logos */}
              {/* <div className="flex justify-between items-center mb-6">
                <img
                  src="https://img.freepik.com/premium-vector/logo-care-child_1314744-24.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid"
                  alt="Non-GMO Verified"
                  className="h-12"
                />
                <img
                  src="https://img.freepik.com/premium-vector/international-human-solidarity-day_1271759-1600.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid"
                  alt="Certified"
                  className="h-12"
                />
                <img
                  src="https://img.freepik.com/premium-vector/international-human-solidarity-day_1271759-1600.jpg?uid=R186725298&ga=GA1.1.1002746497.1740224156&semt=ais_hybrid"
                  alt="Clean Label"
                  className="h-12"
                />
              </div> */}

              {/* Icon List */}
              <div className="space-y-4 mb-8">
  <div className="flex items-center space-x-3">
    <Library className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Non-GMO Certified</span>
  </div>
  <div className="flex items-center space-x-3">
    <Leaf className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Carbon Free Certified</span>
  </div>
  <div className="flex items-center space-x-3">
    <ShieldCheck className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Clean Label Certified</span>
  </div>
  <div className="flex items-center space-x-3">
    <SearchCheck className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Clinically Studied Ingredients</span>
  </div>
  <div className="flex items-center space-x-3">
    <Vegan className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Vegan</span>
  </div>
  <div className="flex items-center space-x-3">
    <WheatOff className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Gluten & Major Allergen Free</span>
  </div>
  <div className="flex items-center space-x-3">
    <PackageCheck className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Made Traceable®</span>
  </div>
  <div className="flex items-center space-x-3">
    <Microscope className="text-[#d15523] w-6 h-6" />
    <span className="text-gray-700">Third-Party Tested (for heavy metals & microbes)</span>
  </div>
</div>

              {/* Supplement Facts Box */}
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mb-8">
                <h3 className="text-[30px] text-[#d15523]  mb-4">Supplement Facts</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Serving Size:</strong> 2 Vegan Gummies
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Servings Per Container:</strong> 30
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Amount Per Serving:</strong> % DV
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Biotin:</strong> 5000mcg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Hyluronic Acid:</strong> 120mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Vitamin C (as Ascorbic Acid):</strong> 90mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Vitamin E (as d-alpha tocopherol)	:</strong> 15mg
                </p>
                <p className="text-sm text-gray-600 mb-4"> 
                  <strong>Zinc (as Zinc Citrate)		:</strong> 10mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Silica (from Bamboo Extract)	:</strong> 50mg
                </p>
                <div className="border-t border-b border-gray-300 py-4">
        
                  <div className="text-sm text-gray-500">*Recommended Daily Allowance (RDA) not established.</div>
                  <div className="text-sm text-gray-500">*RDA of nutrients Daily Allowances as per Guidelines of indian Council of Medical Research(ICMR) 2020 Adult.</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Other Ingredients:</strong>  Sucrose, Gelling Agent(INS 406,440), Binding Agent(INS 407,412), Preservative (INS 202), Acidity Regulator(INS 330),Polysorbate(TWEEN 80), contains oermitted Synthetic Foof Colour (INS 133), and Added Flavour (Nature Identical Flavour Substance Blueberry)
              </p>
            </div>
          )}

          {activeSidebar === "use" && (
            <div>
              <ol className="list-decimal pl-5 mb-4 space-y-3">
                <li>Take 2 gummies approximately 30 minutes before your desired bedtime.</li>
                <li>Allow the gummies to dissolve completely in your mouth before swallowing.</li>
                <li>Create a relaxing bedtime routine to maximize effectiveness.</li>
                <li>Ensure your sleeping environment is dark, quiet, and comfortable.</li>
                <li>For best results, use consistently every night.</li>
              </ol>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">Important Notes:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Do not exceed recommended dosage.</li>
                  <li>Not recommended for children under 18 years.</li>
                  <li>Consult a healthcare professional if pregnant, nursing, or taking medications.</li>
                  <li>Store in a cool, dry place away from direct sunlight.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSidebar === "results" && (
            <div>
              <p className="mb-4">Beauty  Gummies
              Our Beauty  Gummies are clinically shown to support healthy skin, hair, and nails while promoting hydration and collagen synthesis for a radiant glow.:</p>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-1 text-[#d15523]">Clinically Studied Benefits:</h4>
                  <ol className="text-medium">
                    <li>Supports visibly healthier hair, skin, and nails  </li>
                    <li>
                    Promotes collagen production for skin elasticity
                    </li>
                    <li>Helps maintain skin hydration and overall complexion</li>
                  </ol>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-1 text-[#d15523]">About Our Clinical Study</h4>
                  <p className="text-medium">The Beauty  Gummies Pharmacokinetics Study and the 8-week supplementation study were conducted in partnership with a leading research institution. Designed as a randomized, double-blind, placebo-controlled trial, this study follows the gold standard in human research, ensuring scientific credibility and measurable results.</p>
                </div>
                
              </div>
              <p className="mt-4 text-sm italic">
              *Results based on a double-blind, placebo-controlled study with 120 participants over 30 days, showing visible improvements in skin radiance, hair strength, and nail health.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {activeSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setActiveSidebar(null)}></div>
      )}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24">
  {/* Gradient background */}
  <div
    className="absolute inset-y-0 left-0 z-0 gradient-bg"
    style={{
      width: "80%",                 // 80% width on mobile by default
      height: "100%",               // Full height by default
    }}
  >
    <div
      className="h-full"
      style={{
        background: "radial-gradient(50% 50% at 50% 50%, rgba(235, 87, 35, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
        pointerEvents: "none",
        transform: "translateX(-40%)", // Move the gradient further left
      }}
    />
  </div>

  {/* Apply fixed size on larger screens */}
  <style jsx>{`
    @media (min-width: 1024px) {
      .gradient-bg {
        width: 800px !important;   /* Fixed width on larger screens */
        height: 600px !important;  /* Fixed height on larger screens */
      }
    }
  `}</style>

  <div className="relative flex flex-col lg:flex-row justify-between items-start z-10">
    {/* Title Section */}
    <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#d15523] leading-tight">
        Frequent Questions
      </h2>
    </div>

    {/* FAQ Accordion Section */}
    <div className="w-full lg:w-2/3">
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`border-t border-gray-300 ${index === faqItems.length - 1 ? "border-b" : ""}`}
          >
            <button
              className="w-full flex justify-between items-start py-6 text-left focus:outline-none group"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#d15523] pr-8">{item.question}</h3>
              <span className="flex-shrink-0 mt-1">
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-[#d15523]" />
                ) : (
                  <Plus className="h-5 w-5 text-[#d15523]" />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-6 text-gray-600 text-lg leading-relaxed">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <NewFooter />
    </>
  )
}

export default ProductGummies;
