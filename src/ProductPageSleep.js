
import { useState, useRef, useEffect } from "react";
import { Plus, ChevronLeft, ChevronRight, Minus } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import NewFooter from './NewFooter';
import {
  Leaf,
  ShieldCheck,
  PackageCheck,
  Vegan,
  Microscope,
  FlaskConical,
  Moon,
  Flag
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const ProductPageSleep = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const contentRef = useRef(null);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const contentItems = useRef([]);
  const progressLineRef = useRef(null);

  const images = [
   "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/1st_Banner_-_Product_Preview_-_22-1-2025.jpg?v=1742647416",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/3rd_Banner_-_Benefits_-_25-1-2025.jpg?v=1742647369",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/2nd_Banner_-_Ingredients_-_24-1-2025.jpg?v=1742647430",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/9th_Banner_-_Product_room_bg_-_22-1-2025.jpg?v=1742646656",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/4th_Banner_-_How_it_works_-_24-1-2025.jpg?v=1742647394",
    "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/7th_Banner_-_Comparisn_Competitors_-_25-1-2025_2.jpg?v=1742647280",
    "https://iili.io/dWaG5Xt.gif",
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // For more complex routing scenarios, you might need this alternative approach:
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleSidebar = (section) => {
    if (activeSidebar === section) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(section);
    }
  };

  // Handle sticky behavior for desktop
  useEffect(() => {
    const handleScroll = () => {
      if (
        !carouselRef.current ||
        !contentRef.current ||
        !containerRef.current ||
        window.innerWidth < 768
      )
        return;

      const carouselHeight = carouselRef.current.offsetHeight;
      const contentHeight = contentRef.current.offsetHeight;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      const contentBottom = contentRef.current.offsetTop + contentHeight;

      // Make carousel sticky until content is fully scrolled
      if (
        containerTop <= 0 &&
        scrollPosition + carouselHeight < contentBottom
      ) {
        carouselRef.current.style.position = "sticky";
        carouselRef.current.style.top = "0";
        carouselRef.current.style.right = "0";
      } else if (scrollPosition + carouselHeight >= contentBottom) {
        carouselRef.current.style.position = "sticky";
        carouselRef.current.style.top = `${contentHeight - carouselHeight}px`;
        carouselRef.current.style.right = "0";
      } else {
        carouselRef.current.style.position = "static";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial positioning
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const faqItems = [
    {
      question: "What kind of testing do you do?",
      answer: (
        <div className="space-y-4">
          <p>
          We ensure the highest quality by conducting rigorous in-house and third-party testing on every batch of our Sleep Gummies. While third-party testing isn't always required, we believe in complete transparency so you know exactly what you're consuming.
          </p>
          <p>
          Each batch undergoes tests for purity, potency, and safety, ensuring compliance with regulations on heavy metals, microbes, and other contaminants. Your health and peace of mind are our top priorities.

          </p>
        </div>
      ),
    },
    {
      question: "How and when should I take Sleep Gummies?",
      answer: "For best results, take one gummy 30–60 minutes before bedtime. Make sure to chew it thoroughly before swallowing. Avoid consuming more than the recommended dosage. If you're new to melatonin or have any medical conditions, consult your doctor before use.",
    },
    {
      question: "How does the Sleep Gummy technology work?",
      answer: "Our Sleep Gummies are formulated with advanced release technology to support a natural sleep cycle. They contain a precise blend of melatonin and soothing botanicals that help you relax, fall asleep faster, and wake up refreshed without grogginess.",
    },
    {
      question:
        "Why are Sleep Gummies formulated with X mg of melatonin?",
      answer: "Our gummies contain X mg of melatonin, a carefully selected dosage that aligns with scientific research to support healthy sleep patterns. This amount is effective in promoting relaxation while minimizing the risk of morning drowsiness.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //scroll section
  const items = [
    {
      title: "Tryptophan",
      description:
        "Tryptophan is an essential amino acid that helps regulate mood and sleep by being a precursor to serotonin and melatonin. It's commonly used to support mental well-being, alleviate symptoms of depression, and improve sleep quality.",
    },
    {
      title: "Melatonin",
      description:
        "Melatonin is a hormone that regulates the sleep-wake cycle, helping to manage sleep disorders and improve sleep quality. It's commonly used to support better sleep, ease jet lag, and adjust to shift work schedules.",
    },
    {
      title: "Brahmi Leaf Ext",
      description:
        "Brahmi leaf extract is known for its cognitive benefits, supporting memory, focus, and mental clarity. It also has calming properties that help reduce stress and anxiety, promoting overall mental well-being.",
    },
    {
      title: "Tagar Ext",
      description:
        "Tagar Extract, derived from the Valerian root, is known for its calming properties, often used to promote relaxation and improve sleep quality. It’s also valued in traditional medicine for reducing anxiety and alleviating stress.",
    },
    {
      title: "Vitamin B6",
      description:
        "Vitamin B6 is essential for brain development and function, aiding in the production of neurotransmitters and supporting cognitive health. It also plays a crucial role in metabolism, helping convert food into energy and supporting immune system function.",
    },
    {
      title: "Chamomile Ext",
      description:
        "Chamomile extract is known for its calming and soothing properties, promoting relaxation and aiding in sleep. It also supports digestive health and can help relieve minor digestive issues and discomfort.",
    },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateProgressLine = () => {
      const items = contentItems.current;
      if (!items.length) return;

      const viewportHeight = window.innerHeight;
      let totalVisible = 0;
      let lastVisibleIndex = -1;

      items.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const isVisible =
          rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;

        if (isVisible) {
          totalVisible++;
          lastVisibleIndex = index;

          item.classList.add("opacity-100", "translate-y-0");
          item.classList.remove("opacity-0", "translate-y-8");

          const dot = item.querySelector(".timeline-dot");
          if (dot) {
            dot.classList.add("scale-125", "bg-[#260e1f]");
            dot.classList.remove("scale-100", "bg-gray-300");
          }
        } else {
          item.classList.remove("opacity-100", "translate-y-0");
          item.classList.add("opacity-0", "translate-y-8");

          const dot = item.querySelector(".timeline-dot");
          if (dot) {
            dot.classList.remove("scale-125", "bg-[#260e1f]");
            dot.classList.add("scale-100", "bg-gray-300");
          }
        }
      });

      if (progressLineRef.current) {
        if (lastVisibleIndex >= 0) {
          const progress = (lastVisibleIndex + 1) / items.length;
          progressLineRef.current.style.height = `${progress * 100}%`;
          progressLineRef.current.style.opacity = "1";
        } else {
          progressLineRef.current.style.height = "0%";
          progressLineRef.current.style.opacity = "0";
        }
      }
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgressLine();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgressLine(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="relative bg-white md:pt-[90px]">
        <div
          ref={containerRef}
          className="container mx-auto px-4"
          style={{ maxWidth: "1903px", width: "100%" }}
        >
          {/* Mobile View - Swiper Carousel */}
          <div className="block md:hidden mb-8 pt-6">
            <Swiper slidesPerView={1.5} spaceBetween={10} className="w-full">
              {images.map((image, index) => (
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
            <div
              ref={contentRef}
              className="w-full md:py-20 px-0 md:pl-[150px] max-w-[755px]"
            >
              <h1 className="text-[35px] font-bold text-[#420560] mb-1">
                Dreamy Sleep Gummies
              </h1>
              <p className="text-base text-[#420560] mb-6 italic">
                Aayush Wellness{" "}
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <p className="text-base text-gray-700 mb-4">
                 "The world's first sleep supplement powered by Aayush Wellness, clinically proven to improve sleep quality, reduce stress, and promote relaxation with science-backed ingredients." 🌙💤
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">
                  Select Your Cadence
                </h3>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full border border-[#420560] flex items-center justify-center mr-3">
                        <div className="w-3 h-3 rounded-full bg-[#420560]"></div>
                      </div>
                      <span className="font-medium">Buy once</span>
                    </div>
                    <span className="font-bold text-[#420560]">₹599</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <Link
                  to="https://aayushlife.com/products/dreamy-sleep-gummies"
                  className="w-full"
                  style={{ display: "block" }}
                >
                  <button className="bg-[#420560] text-white py-3 px-6 rounded-lg w-full text-center font-semibold">
                    Shop Now
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-base text-gray-700 mb-4">
                    Say hello to restful nights and refreshed mornings with our Sleep Bliss Gummies. 🌙
                    Crafted with a powerful blend of Modern Scientific ingredients like Melatonin, L-Theanine, and Magnesium, combined with Active Ayurveda such as Ashwagandha and Brahmi Extract, these gummies promote relaxation, reduce stress, and support a healthy sleep cycle. Wake up feeling rejuvenated and ready to take on the day.
                  </p>
                </div>

                {/* Accordion sections */}
                <div className="border-t border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center"
                    onClick={() => toggleSidebar("supplement")}
                  >
                    <span className="font-semibold text-[#420560]">
                      Supplement Facts
                    </span>
                    <Plus className="h-5 w-5 text-[#420560]" />
                  </button>
                </div>

                <div className="border-t border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center"
                    onClick={() => toggleSidebar("results")}
                  >
                    <span className="font-semibold text-[#420560]">
                      Clinically-Proven Results
                    </span>
                    <Plus className="h-5 w-5 text-[#420560]" />
                  </button>
                </div>

                <div className="border-t border-gray-200"></div>
              </div>
            </div>

            {/* Desktop View - Sticky Carousel */}
            <div
              // ref={carouselRef}
              className="hidden md:block md:w-1/2 md:pl-8 sticky top-0 left-0"
              style={{ height: "500px" }}
            >
              <div className="relative mx-auto h-full top-0">
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
                      src={
                        images[(currentIndex + 1) % images.length] ||
                        "/placeholder.svg"
                      }
                      alt={`Product Image ${
                        ((currentIndex + 1) % images.length) + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-[60px]">
                  <button
                    onClick={handlePrev}
                    className="bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Certification logos */}
              <div className="flex flex-wrap justify-between mt-8">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Non-GMO Verified"
                  className="h-10"
                />
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Certified"
                  className="h-10"
                />
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Carbon Free"
                  className="h-10"
                />
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Clean Label"
                  className="h-10"
                />
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
                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Sleep_Before_After_Product_slider_banner_-_1080px_X1080px_-_11-11-2024.jpg?v=1742627799"
                alt="Peaceful sleep environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-[48px] font-bold text-[#420560] mb-12">
              Embrace the Night's Rhythm
            </h2>
            <p className="text-lg text-gray-700 mb-16">
              Regain your rest with Aayush Wellness technology, designed to
              align with your body's natural sleep rhythm for deeper,
              restorative sleep.
            </p>
            {/* Timeline */}
            <div className="relative">
              {/* Single Progress Line */}
              <div
                ref={progressLineRef}
                className="absolute left-2.5 top-0 w-0.5 bg-[#420560] transition-all duration-1000 ease-in-out"
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
                    <div className="timeline-dot absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-white shadow-md transition-all duration-1000 ease-in-out bg-[#420560]"></div>

                    {/* Content */}
                    <div className="transition-all duration-1000 ease-in-out">
                      <h3 className="text-[22px] font-semibold mb-2 text-[#420560]">
                        {item.title}
                      </h3>
                      <p className=" text-[18px] leading-relaxed text-gray-600">
                        {item.description}
                      </p>
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
            <h2 className="text-[40px] font-bold text-[#420560] mb-6">
              Experience Deep Restful Sleep
            </h2>
            <div className="w-24 h-1 bg-[#420560] mb-8"></div>
            <p className="text-lg text-gray-700">
              Our revolutionary sleep gummies are designed to help you fall
              asleep faster and stay asleep longer. The unique formula works
              with your body's natural rhythms to promote deep, restorative
              sleep.
            </p>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="w-full h-[500px] max-w-[500px] mx-auto">
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/690a7d9381134b4c97e01a7d32e41853.mp4"
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
            <h3 className="text-[40px] font-bold text-[#420560]">
              {activeSidebar === "supplement" && "Supplement Facts"}
              {activeSidebar === "use" && "How to Use"}
              {activeSidebar === "results" && "Clinically-Proven Results"}
            </h3>
            <button
              onClick={() => setActiveSidebar(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="w-full h-1 bg-[#420560] mb-8"></div>

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
                  <Leaf className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">Plant-Based Formulation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FlaskConical className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">Clinically Researched Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">Non Habit-Forming </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Moon className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">
                  Supports Restful Sleep & Relaxation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Vegan className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">100% Vegan & Gluten-Free</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Microscope className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">
                  Lab-Tested for Purity & Quality
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PackageCheck className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">Non-GMO Certified </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Flag className="text-[#420560] w-6 h-6" />
                  <span className="text-gray-700">
                  Made in India, FSSAI Certified
                  </span>
                </div>
              </div>

              {/* Supplement Facts Box */}
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mb-8">
                <h3 className="text-[30px] text-[#420560]  mb-4">
                  Supplement Facts
                </h3>
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
                  <strong>Melatonin (as plant-based source):</strong> 5mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>L-Theanine:</strong> 200mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Chamomile Extract:</strong> 150mg
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Lemon Balm Extract :</strong> 100mg
                </p>

                <div className="border-t border-b border-gray-300 py-4">
                  <div className="text-sm text-gray-500">
                    ** Daily Value (DV) not established.
                  </div>
                  <div className="text-sm text-gray-500">*RDA of nutrients Daily Allowances as per Guidelines of indian Council of Medical Research(ICMR) 2020 Adult.</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Other Ingredients:</strong>
                Sucrose, Gelling Agent(INS 406,440), Binding Agent(INS 407,412),Preservative(INS 202), Acidity Regulator(INS 330),Polysorbate(TWEEN 80), contains oermitted Synthetic Foof Colour (INS 133), and Added Flavour (Nature Identical Flavour Substance Blueberry)
              </p>
            </div>
          )}

          {activeSidebar === "use" && (
            <div>
              <ol className="list-decimal pl-5 mb-4 space-y-3">
                <li>
                  Take 2 gummies approximately 30 minutes before your desired
                  bedtime.
                </li>
                <li>
                  Allow the gummies to dissolve completely in your mouth before
                  swallowing.
                </li>
                <li>
                  Create a relaxing bedtime routine to maximize effectiveness.
                </li>
                <li>
                  Ensure your sleeping environment is dark, quiet, and
                  comfortable.
                </li>
                <li>For best results, use consistently every night.</li>
              </ol>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <h4 className="font-medium mb-2">Important Notes:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Do not exceed recommended dosage.</li>
                  <li>Not recommended for children under 18 years.</li>
                  <li>
                    Consult a healthcare professional if pregnant, nursing, or
                    taking medications.
                  </li>
                  <li>Store in a cool, dry place away from direct sunlight.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSidebar === "results" && (
            <div>
              <p className="mb-4">
                Our Sleep Gummies are clinically shown to support a
                faster onset of sleep and sustained restfulness throughout the
                night, helping you wake up refreshed.*†
              </p>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-1 text-[#420560]">
                    Clinically Studied Benefits:
                  </h4>
                  <ol className="text-medium">
                    <li> Reduces time to fall asleep by 43% </li>
                    <li>
                      Promotes deeper and more restorative sleep patterns 
                    </li>
                    <li>Supports waking up refreshed and rested</li>
                  </ol>
                </div>
                <div className="border-b pb-3">
                  <h4 className="font-bold mb-1 text-[#420560]">
                  About Our Clinical Study
                  </h4>
                  <p className="text-medium">
                  The Ritual Sleep  Gummies Pharmacokinetics Study and the 2-week supplementation study were conducted in partnership with a leading research institution. Designed as a randomized, double-blind, placebo-controlled trial, this study follows the gold standard in human research, ensuring scientific credibility and measurable results.
                  </p>
                </div>
                
              </div>
              <p className="mt-4 text-sm italic">
                *Time x Treatment: p=0.01 (statistically significant impact on sleep onset and duration).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {activeSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActiveSidebar(null)}
        ></div>
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
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(102, 16, 242, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
              pointerEvents: "none",
              transform: "translateX(-40%)", // Move the gradient further left
            }}
          />
        </div>

        {/* Apply fixed size on larger screens */}
        <style jsx>{`
          @media (min-width: 1024px) {
            .gradient-bg {
              width: 800px !important; /* Fixed width on larger screens */
              height: 600px !important; /* Fixed height on larger screens */
            }
          }
        `}</style>

        <div className="relative flex flex-col lg:flex-row justify-between items-start z-10">
          {/* Title Section */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#420560] leading-tight">
              Frequent Questions
            </h2>
          </div>

          {/* FAQ Accordion Section */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border-t border-gray-300 ${
                    index === faqItems.length - 1 ? "border-b" : ""
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-start py-6 text-left focus:outline-none group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-[#420560] pr-8">
                      {item.question}
                    </h3>
                    <span className="flex-shrink-0 mt-1">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-[#420560]" />
                      ) : (
                        <Plus className="h-5 w-5 text-[#420560]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-6 text-gray-600 text-lg leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
};

export default ProductPageSleep;
