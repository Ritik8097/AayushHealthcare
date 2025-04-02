import { useState, useRef, useEffect } from "react"
import { Plus, ChevronLeft, ChevronRight, Minus } from "lucide-react"
import Header from "./Header"
import Footer from "./Footer"
import { Library, Leaf, ShieldCheck, PackageCheck, Vegan, WheatOff, SearchCheck, Microscope } from "lucide-react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import NewFooter from './NewFooter';

const ProducCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSidebar, setActiveSidebar] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)
  const contentRef = useRef(null)
  const carouselRef = useRef(null)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const contentItems = useRef([])
  const progressLineRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState(0) // 0: Blue, 1: Black, 2: Gold

  const images = [
    
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-1_-_blue_product.jpg?v=1742815756",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-2_eng.jpg?v=1742815883",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-3-_blue_product.jpg?v=1742815917",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-4-_blue_product.jpg?v=1742815955",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-5-_blue_product.jpg?v=1742816001",
    "https://iili.io/dVSnjfa.gif",

    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-1_black_product.jpg?v=1742815830",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-2_black_productc_english.jpg?v=1742815857",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-3_balck.jpg?v=1742815906",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-4_black_product.jpg?v=1742815942",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-5_black_product.jpg?v=1742815989",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-_gold_pan_masala_1.gif?v=1724399830",

    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-1_gold.jpg?v=1742815845",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-2_gold.jpg?v=1742815894",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-3_gold.jpg?v=1742815932",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-4_gold.jpg?v=1742815979",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/our_product_-5_gold_product.jpg?v=1742816011",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-_gold_pan_masala_2.gif?v=1724399800",

    
  ]

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // For more complex routing scenarios, you might need this alternative approach:
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0);
  }, [])

  const handlePrev = () => {
    const variantImages = images.slice(selectedVariant * 6, selectedVariant * 6 + 6)
    const variantIndex = currentIndex % variantImages.length
    setCurrentIndex(selectedVariant * 6 + ((variantIndex === 0 ? variantImages.length : variantIndex) - 1))
  }

  const handleNext = () => {
    const variantImages = images.slice(selectedVariant * 6, selectedVariant * 6 + 6)
    const variantIndex = currentIndex % variantImages.length
    setCurrentIndex(selectedVariant * 6 + ((variantIndex + 1) % variantImages.length))
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
      question: "What kind of testing do you do?",
      answer: (
        <div className="space-y-4">
          <p>
          Our Herbal Masala undergoes rigorous quality testing to ensure it meets the highest safety and purity standards. 
          </p>
          <p>
          This includes:

1.Third-Party Lab Testing: Checked for heavy metals, pesticides, and microbial contamination.

2.Purity & Potency Testing: Ensures consistent flavor and aroma with every batch.

3.Stability & Shelf-Life Testing: Verifies long-lasting freshness and quality.

4.Non-GMO Certification: Guaranteed free from genetically modified ingredients.
          </p>
        </div>
      ),
    },
    {
      question: "How and when should I enjoy Herbal Pan Masala?",
      answer: "You can enjoy Herbal Masala as a refreshing mouth freshener after meals or during social gatherings. Simply tear open the sachet, chew slowly, and savor the rich herbal blend. It offers a pleasant taste and aroma, making it perfect for cleansing your palate throughout the day.",
    },
    {
      question: "How does the herbal formulation work?",
      answer: "The herbal formulation of Herbal Masala works by combining a blend of natural ingredients, such as fennel seeds, cardamom, betel leaves, and select aromatic herbs. These ingredients are carefully chosen for their refreshing properties and soothing effect on the palate. The blend releases a burst of flavor and aroma, providing a pleasant mouth-freshening experience while leaving a lingering herbal essence.",
    },
    {
      question: "Why is Herbal Masala free from tobacco and harmful chemicals? ",
      answer: "Herbal Masala is free from tobacco and harmful chemicals because it is crafted with a focus on health and well-being. By using only natural ingredients and eliminating addictive or hazardous substances, it offers a safe and flavorful alternative to traditional pan masala. This ensures that consumers can enjoy a refreshing mouth-freshener without exposing themselves to the risks associated with tobacco or synthetic chemicals.",
    },
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  //scroll section
  const items = [
    {
      title: "Turmeric",
      description:
        "Turmeric is a golden-yellow spice known for its powerful anti-inflammatory and antioxidant properties. It contains curcumin, which helps reduce inflammation, boost immunity, support joint health, and promote glowing skin.",
    },
    {
      title: "Kesar (Saffron)",
      description:
        "Kesar, or saffron, is a rare and luxurious spice known for its antioxidant and anti-inflammatory properties. It promotes radiant skin, enhances mood, supports memory function, and boosts overall vitality.",
    },
    {
      title: "Ashwagandha",
      description:
        "Ashwagandha is a powerful adaptogenic herb used in traditional Ayurvedic medicine. It helps reduce stress, boost energy levels, enhance stamina, support cognitive function, and promote overall well-being.",
    },
    {
      title: "Mulethi (Licorice)",
      description:
        "Mulethi, also known as licorice root, is widely used for its soothing and healing properties. It supports respiratory health, improves digestion, reduces inflammation, and promotes clear, healthy skin.",
    },
    {
      title: "Amla",
      description:
        "Amla, or Indian gooseberry, is a rich source of Vitamin C and antioxidants. It boosts immunity, enhances digestion, promotes hair health, and supports glowing skin by fighting free radicals.",
    },
    {
      title: "Kaunch Beej",
      description:
        "Kaunch Beej (Mucuna pruriens) is a medicinal seed known for its aphrodisiac and neuroprotective properties. It enhances libido, boosts testosterone levels, supports muscle growth, and promotes mental well-being.",
    },
    {
      title: "Kaunch BeejTamarind Seeds",
      description:
        "Tamarind seeds are packed with antioxidants, fiber, and essential nutrients. They support digestion, promote healthy skin, reduce inflammation, and aid in managing blood sugar levels.",
    },
    {
      title: "Cardamom Seeds",
      description:
        "Cardamom seeds are aromatic spices with antioxidant and anti-inflammatory properties. They support digestive health, freshen breath, regulate blood pressure, and promote overall wellness.",
    },
    {
      title: "Melon Seeds",
      description:
        "Melon seeds are rich in essential nutrients, including protein, healthy fats, and vitamins. They promote heart health, boost immunity, improve skin radiance, and support healthy hair growth.",
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
            <Swiper slidesPerView={1.5} spaceBetween={10} className="w-full">
              {images.slice(selectedVariant * 6, selectedVariant * 6 + 6).map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image || "/placeholder.svg"}
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
              <h1 className="text-[35px] font-bold text-[#730a0a] mb-1">Aayush Herbal Masala</h1>
              <p className="text-base text-[#730a0a] mb-6 italic">Swaad Wahi, Sehat Bhi ✅ </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <p className="text-base text-gray-700 mb-4">
                  "Crafted with premium-quality ingredients, Aayush Herbal Pan Masala delivers an authentic taste with a
                  herbal twist."
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Color Variant</h3>
                <div className="flex space-x-6">
                  {/* Blue Variant */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-[112.5px] h-[112.5px] rounded-lg cursor-pointer ${selectedVariant === 0 ? "border-2 border-[#004080]" : "border border-gray-200"}`}
                      onClick={() => {
                        setSelectedVariant(0)
                        setCurrentIndex(0)
                      }}
                    >
                      <img
                        src={images[0] || "/placeholder.svg"}
                        alt="Blue Variant"
                        className="w-full h-full object-cover rounded-lg !pt-0"
                      />
                    </div>
                    <span className="mt-2 text-[#004080] font-medium">Blue</span>
                  </div>

                  {/* Black Variant */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-[112.5px] h-[112.5px] rounded-lg cursor-pointer ${selectedVariant === 1 ? "border-2 border-[#000000]" : "border border-gray-200"}`}
                      onClick={() => {
                        setSelectedVariant(1)
                        setCurrentIndex(6)
                      }}
                    >
                      <img
                        src={images[6] || "/placeholder.svg"}
                        alt="Black Variant"
                        className="w-full h-full object-cover rounded-lg !pt-0"
                      />
                    </div>
                    <span className="mt-2 text-[#000000] font-medium">Black</span>
                  </div>

                  {/* Gold Variant */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-[112.5px] h-[112.5px] rounded-lg cursor-pointer ${selectedVariant === 2 ? "border-2 border-[#D4AF37]" : "border border-gray-200"}`}
                      onClick={() => {
                        setSelectedVariant(2)
                        setCurrentIndex(12)
                      }}
                    >
                      <img
                        src={images[12] || "/placeholder.svg"}
                        alt="Gold Variant"
                        className="w-full h-full object-cover rounded-lg !pt-0"
                      />
                    </div>
                    <span className="mt-2 text-[#D4AF37] font-medium">Gold</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Your Cadence</h3>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full border border-[#730a0a] flex items-center justify-center mr-3">
                        <div className="w-3 h-3 rounded-full bg-[#730a0a]"></div>
                      </div>
                      <span className="font-medium">Buy once</span>
                    </div>
                    <span className="font-bold text-[#730a0a]">₹599</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <Link
                  to="https://aayushveda.in/products/aayush-herbal-pan-masala"
                  className="w-full"
                  style={{ display: "block" }}
                >
                  <button className="bg-[#730a0a] text-white py-3 px-6 rounded-lg w-full text-center font-semibold">
                    Shop Now
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-base text-gray-700 mb-4">
                    An exquisite, all-natural concoction designed to harmonise and rejuvenate your senses using the
                    heritage of Ayurveda. Crafted from a precise blend of natural & ayurvedic herbs with healing
                    properties, this pan masala and gutka alternative is not only a delight for your taste buds but also
                    a beneficial choice for overall well-being. Our blend not only mimics the taste and aroma of
                    traditional pan & tobacco products but also support numerous health benefits, thereby encouraging
                    users to do away with their harmful habits, and contributing to the prevention of tobacco-related
                    illnesses.
                  </p>
                </div>

                {/* Accordion sections */}
                <div className="border-t border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center"
                    onClick={() => toggleSidebar("supplement")}
                  >
                    <span className="font-semibold text-[#730a0a]">Supplement Facts</span>
                    <Plus className="h-5 w-5 text-[#730a0a]" />
                  </button>
                </div>

                <div className="border-t border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center"
                    onClick={() => toggleSidebar("results")}
                  >
                    <span className="font-semibold text-[#730a0a]">Clinically-Proven Results</span>
                    <Plus className="h-5 w-5 text-[#730a0a]" />
                  </button>
                </div>

                <div className="border-t border-gray-200"></div>
              </div>
            </div>

            {/* Desktop View - Sticky Carousel */}
            <div className="hidden md:block md:w-1/2 md:pl-8 sticky top-0 left-0" style={{ height: "500px" }}>
              <div className="relative mx-auto">
                <div className="flex h-full">
                  <div className="w-[500px] h-full">
                    <img
                      src={images[currentIndex] || "/placeholder.svg"}
                      alt={`Product Image ${currentIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[10px]"></div>
                  <div className="w-[500px] h-full">
                    {/* Show next image within the same variant */}
                    <img
                      src={
                        images[selectedVariant * 6 + ((currentIndex - selectedVariant * 6 + 1) % 6)] ||
                        "/placeholder.svg"
                      }
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
                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/META_WINTER_AD-SQUARE_2.jpg?v=1742798379"
                alt="Peaceful sleep environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-[42px] font-bold text-[#730a0a] mb-12">Elevate Your Taste with Herbal Perfection</h2>
            <p className="text-lg text-gray-700 mb-16">
              Indulge in the rich flavors of Aayush Herbal Pan Masala, crafted with a blend of traditional herbs and
              spices for a refreshing and satisfying experience.
            </p>
            {/* Timeline */}
            <div className="relative">
              {/* Single Progress Line */}
              <div
                ref={progressLineRef}
                className="absolute left-2.5 top-0 w-0.5 bg-[#730a0a] transition-all duration-1000 ease-in-out"
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
                    <div className="timeline-dot absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-white shadow-md transition-all duration-1000 ease-in-out bg-[#730a0a]"></div>

                    {/* Content */}
                    <div className="transition-all duration-1000 ease-in-out">
                      <h3 className="text-[22px] font-semibold mb-2 text-[#730a0a]">{item.title}</h3>
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
            <h2 className="text-[42px] font-bold text-[#730a0a] mb-6">
              Experience the Pure Flavor of Nature’s Goodness
            </h2>
            <div className="w-24 h-1 bg-[#730a0a] mb-8"></div>
            <p className="text-lg text-gray-700">
              Our premium Aayush Herbal Pan Masala is crafted with a unique blend of traditional herbs and spices,
              delivering a refreshing and aromatic experience. The rich flavors and fine ingredients offer a satisfying
              taste with a herbal twist.
            </p>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="w-full h-[500px] max-w-[500px] mx-auto">
              <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/966ff47210de4b3b9f54a1e5c21407c4.mp4"
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
            <h3 className="text-[40px] font-bold text-[#730a0a]">
              {activeSidebar === "supplement" && "Supplement Facts"}
              {activeSidebar === "use" && "How to Use"}
              {activeSidebar === "results" && "Clinically-Proven Results"}
            </h3>
            <button onClick={() => setActiveSidebar(null)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <div className="w-full h-1 bg-[#730a0a] mb-8"></div>

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
                  <Library className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Non-GMO Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Carbon Free Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Clean Label Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SearchCheck className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Clinically Studied Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Vegan className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Vegan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <WheatOff className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Gluten & Major Allergen Free</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PackageCheck className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Made Traceable®</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Microscope className="text-[#730a0a] w-6 h-6" />
                  <span className="text-gray-700">Third-Party Tested (for heavy metals & microbes)</span>
                </div>
              </div>

              {/* Supplement Facts Box */}
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mb-8">
                <h3 className="text-[30px] text-[#730a0a]  mb-4">Supplement Facts</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Serving Size:</strong> 1 Herbal Sachet (5g)
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Servings Per Container:</strong> 30
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Amount Per Serving:</strong> % DV
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Cardamom Extract: </strong> 200mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Fennel Seeds: </strong> 150mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Clove Extract: </strong> 100mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>VLicorice Root:</strong>  75mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Mint Leaves:</strong>  50mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Areca Nut Substitute (Herbal Blend):</strong>  300mg
                </p>
                <div className="border-t border-b border-gray-300 py-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Rose Petals:</span>
                    <span>50mg</span>
                  </div>
                  <div className="text-sm text-gray-500">** Daily Value (DV) not established.</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Other Ingredients:</strong> Organic ,Herbal Colours,Haldi, Mint Leaves, Clove, Cardamom, fennel Seeds,Elaichi,Rose petals.
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
              <p className="mb-4">
              Our Herbal Pan Masala is expertly crafted using a unique blend of natural herbs and aromatic spices, delivering a refreshing and authentic taste. Carefully formulated, it offers a delightful experience while promoting oral freshness and overall well-being.
              </p>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-1 text-[#730a0a]">Key Benefits:</h4>
                  <ol className="text-medium">
                    <li>Freshens Breath Naturally: Helps combat bad breath with its herbal infusion. </li>
                    <li>No Harmful Chemicals: Free from tobacco, nicotine, and artificial additives.</li>
                    <li>Calming & Refreshing: Infused with mild herbs for a soothing effect.</li>
                  </ol>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-1 text-[#730a0a]">About Our Clinical Study</h4>
                  <p className="text-medium">
                  Our Herbal Pan Masala is produced following strict quality control standards. The ingredients are sourced from trusted farms, ensuring purity and freshness.Our herbal formulation is backed by traditional ayurvedic wisdom and validated by modern scientific research. The combination of time-tested herbs and spices ensures a safe and enjoyable chewing experience without harmful side effects.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm italic">
                *✨ Experience the rich taste and refreshing aroma of our premium Herbal Pan Masala – crafted for connoisseurs who appreciate purity and flavor. 🌿
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
            width: "80%", // 80% width on mobile by default
            height: "100%", // Full height by default
          }}
        >
          <div
            className="h-full"
            style={{
              background:"radial-gradient(50% 50% at 50% 50%, rgba(115, 10, 10, 0.8) 0%, rgba(115, 10, 10, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
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
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#730a0a] leading-tight">Frequent Questions</h2>
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
                    <h3 className="text-lg md:text-xl font-semibold text-[#730a0a] pr-8">{item.question}</h3>
                    <span className="flex-shrink-0 mt-1">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-[#730a0a]" />
                      ) : (
                        <Plus className="h-5 w-5 text-[#730a0a]" />
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

export default ProducCarousal;
