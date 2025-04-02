import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles, Shield, Activity } from "lucide-react"

export default function Asection4() {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredTitles, setHoveredTitles] = useState({})
  const [expandedSections, setExpandedSections] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          sectionObserver.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    const itemObservers = []

    itemRefs.current.forEach((item, index) => {
      if (item) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...prev, index])
              observer.unobserve(entry.target)
            }
          },
          { threshold: 0.2 },
        )

        observer.observe(item)
        itemObservers.push(observer)
      }
    })

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current)
      }

      itemObservers.forEach((observer, index) => {
        if (itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index])
        }
      })
    }
  }, [])

  const handleTitleHover = (cardIndex, titleIndex, isHovering) => {
    if (!isMobile) {
      setHoveredTitles((prev) => ({
        ...prev,
        [`${cardIndex}-${titleIndex}`]: isHovering,
      }))
    }
  }

  const toggleSection = (cardIndex, titleIndex) => {
    if (isMobile) {
      const sectionKey = `${cardIndex}-${titleIndex}`
      setExpandedSections((prev) => ({
        ...prev,
        [sectionKey]: !prev[sectionKey],
      }))
    }
  }

  const isTitleActive = (cardIndex, titleIndex) => {
    const sectionKey = `${cardIndex}-${titleIndex}`
    return isMobile ? expandedSections[sectionKey] || false : hoveredTitles[sectionKey] || false
  }

  const items = [
    {
      img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/woman-2592247_1920.jpg?v=1740573108",
      title: "How It Started",
      link: "/gummies-sleep",
      buttonText: "Explore Aayush Wellness",
      content: "A vision to transform everyday health.",
      icon: <Sparkles className="text-amber-500" size={32} />,
      sections: [
        {
          title: "How It All Began",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21 7 14.13l-5-4.86 6.91-1.01L12 2z"></path>
            </svg>
          ),
          content: ` <span style="color: black;">Our journey started with a simple yet profound question:</span>
          <span style="font-style:italic; font-weight: 500; color: black;"> "How can we make holistic wellness more accessible, personalized, and proactive?"</span>`,
        },
        {
          title: "The Vision Behind Aayush Wellness",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5m0 0L5 12m7-7l7 7"></path>
            </svg>
          ),
          content: `<span style="color: black;">This vision led to the creation of</span> <span style="font-weight: 600; color: black;">Aayush Wellness</span> — <span style="color: black;">a brand that seamlessly blends </span>
          <span style="font-weight: 500; color: black;">cutting-edge research</span>  <span style="color: black;">with nature's best-kept secrets, crafting solutions that empower people 
          to take charge of their health.</span>`,
        },
        {
          title: "Science Meets Nature",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12a4 4 0 0 1-8 0 4 4 0 0 1 8 0z"></path>
            </svg>
          ),
          content: `<span style="color: black;">From meticulously formulated</span> <span style="font-weight: 500; color: black;">nutraceuticals and dietary supplements</span> to 
          <span style="font-weight: 500; color: black;"> AI-powered preventive healthcare services</span>, <span style="color: black;">our mission is to bring the best of health, backed by science.</span>`,
        },
        {
          title: "Empowering a Healthier Tomorrow",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4"></path>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"></path>
              <path d="M16 5H3"></path>
            </svg>
          ),
          content: `<span style="color: black;">At Aayush Wellness, we don't just treat health concerns; we provide</span> <span style="font-weight: 500; color: black;">holistic, science-backed solutions</span> 
          <span style="color: black;">that empower individuals to take control of their well-being.</span>`,
        },
      ],
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/medical-artificial-intelligence.jpg?v=1740573135",
      title: "What We Do",
      link: "/health",
      buttonText: "Explore Aayush Wellness",
      content: "At the intersection of wellness and technology, we are shaping the future of health.",
      icon: <Activity className="text-emerald-500" size={32} />,
      sections: [
        {
          title: "Advanced Nutraceuticals & Supplements",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5m0 0L5 12m7-7l7 7"></path>
            </svg>
          ),
          content: `<span style="color: black;">Our scientifically formulated</span> <span style="font-weight: 500; color: black;">nutraceuticals and dietary supplements</span> <span style="color: black;">are designed to enhance 
          wellness and bridge nutritional gaps effectively.</span>`,
        },
        {
          title: "AI-Driven Preventive Healthcare",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21 7 14.13l-5-4.86 6.91-1.01L12 2z"></path>
            </svg>
          ),
          content: `<span style="color: black;">By integrating</span> <span style="font-weight: 500; color: black;">cutting-edge AI technology</span>, <span style="color: black;">we empower individuals with personalized 
          health monitoring and proactive wellness insights.</span>`,
        },
        {
          title: "Holistic Health Foods & Wellness",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12l2 2 4-4"></path>
              <path d="M20 6a10 10 0 1 1-8-4"></path>
            </svg>
          ),
          content: `<span style="color: black;">Our</span> <span style="font-weight: 500; color: black;">organic and functional health foods</span> <span style="color: black;">are crafted to support everyday well-being 
          and promote a balanced lifestyle.</span>`,
        },
      ],
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/washing-hands-with-soap-prevent-disease.jpg?v=1740573151",
      title: "Why Aayush Wellness?",
      link: "/investors",
      buttonText: "Explore Aayush Wellness",
      icon: <Shield className="text-indigo-500" size={32} />,
      content:
        "We don't just sell wellness—we create a movement that empowers individuals to make informed choices about their health.",
      sections: [
        {
          title: "Science-Backed Formulations",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          ),
          content: `<span style="color: black;">Our products are developed by leading experts in</span> <span style="font-weight: 500; color: black;">nutraceuticals and healthcare</span>, 
          <span style="color: black;">ensuring safety, efficacy, and reliability.</span>`,
        },
        {
          title: "Personalized Health Solutions",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18"></path>
              <path d="M12 3v18"></path>
            </svg>
          ),
          content: `<span style="color: black;">Our tailored wellness solutions cater to</span> <span style="font-weight: 500; color: black;">individual health needs</span>, <span style="color: black;">ensuring a customized 
          approach to well-being.</span>`,
        },
        {
          title: "Future-Ready Preventive Care",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3"></path>
            </svg>
          ),
          content: `<span style="color: black;">We focus on</span> <span style="font-weight: 500; color: black;">early detection and smart interventions</span>, <span style="color: black;">promoting proactive health monitoring 
          for a better future.</span>`,
        },
        {
          title: "Commitment to Purity & Quality",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12l5 5L20 7"></path>
            </svg>
          ),
          content: `<span style="color: black;">Every product undergoes</span> <span style="font-weight: 500; color: black;">rigorous testing</span> <span style="color: black;">to ensure the highest standards of safety and efficacy.</span>`,
        },
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="wellness-section"
      style={{
        padding: "60px 0px 0",
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0" : "50px"})`,
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80vw",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: window.innerWidth <= 768 ? "10px" : "40px",
          background: "#f9f9f9",
          borderRadius: "25px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="item-container"
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "32px",
              position: "relative",
            }}
          >
            {/* Decorative elements */}
            <div
              className="decorative-circle"
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                top: index % 2 === 0 ? "-100px" : "auto",
                bottom: index % 2 === 0 ? "auto" : "-100px",
                left: index % 2 === 0 ? "-150px" : "auto",
                right: index % 2 === 0 ? "auto" : "-150px",
                zIndex: -1,
                opacity: visibleItems.includes(index) ? 1 : 0,
                transition: "opacity 1.5s ease-out",
              }}
            />

            <div
              className="image-container"
              style={{
                flex: 1,
                padding: "64px 64px 40px",
                position: "relative",
                borderRadius: "48px",
                overflow: "hidden",
                height: "41.2vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxHeight: "650px",
                boxShadow: visibleItems.includes(index) ? "0 20px 40px rgba(0,0,0,0.15)" : "none",
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: `translateX(${visibleItems.includes(index) ? "0" : index % 2 === 0 ? "-100px" : "100px"})`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease-out",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.querySelector("a").style.transform = "translateY(0)"
                  setActiveIndex(index)
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.querySelector("a").style.transform = "translateY(calc(100% + 40px))"
                  setActiveIndex(null)
                }
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  position: "absolute",
                  overflow: "hidden",
                }}
              >
                <div
                  className="image-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)",
                    zIndex: 1,
                    opacity: activeIndex === index ? 0.7 : 0.5,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
                <img
                  src={item.img || "/placeholder.svg"}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: activeIndex === index ? "scale(1.15)" : "scale(1.1)",
                    transition: "transform 8s ease-in-out",
                  }}
                />
              </div>
              <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                {/* Image content removed as requested */}
              </div>
              <a
                href={item.link}
                className="action-button"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "100px",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "#13233b",
                  padding: "24px",
                  transition: "all .5s ease-in-out",
                  position: "relative",
                  zIndex: 1,
                  transform: isMobile ? "translateY(0)" : "translateY(calc(100% + 40px))",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("svg").style.transform = "translateX(5px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("svg").style.transform = "translateX(0)"
                }}
              >
                {item.buttonText}
                <ArrowRight
                  size={20}
                  style={{
                    marginLeft: "12px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </a>
            </div>
            <div
              className="text-container"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                className="content-wrapper"
                style={{
                  position: "relative",
                  width: "100%",
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transform: `translateX(${visibleItems.includes(index) ? "0" : index % 2 === 0 ? "100px" : "-100px"})`,
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                  transitionDelay: "0.3s",
                }}
              >
                {/* Animated highlight element */}
                <div
                  className="highlight-element"
                  style={{
                    position: "absolute",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
                    top: "-60px",
                    left: index % 2 === 0 ? "-60px" : "auto",
                    right: index % 2 === 0 ? "auto" : "-60px",
                    zIndex: -1,
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transition: "opacity 1s ease-out",
                    animation: visibleItems.includes(index) ? "pulse 6s infinite alternate" : "none",
                  }}
                />

                {/* Content card with blue background */}
                <div
                  className="content-card"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    lineHeight: "160%",
                    padding: "40px",
                    borderRadius: "25px",
                    background: "#f9f9f9",
                    color: "#333",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.5s ease-out",
                  }}
                >
                  {/* Animated gradient border */}
                  <div
                    className="animated-border"
                    style={{
                      position: "absolute",
                      top: "-2px",
                      left: "-2px",
                      right: "-2px",
                      bottom: "-2px",
                      zIndex: -1,
                      background: "linear-gradient(45deg, rgba(0,0,0,0), rgba(0,0,0,0.05), rgba(0,0,0,0))",
                      backgroundSize: "200% 200%",
                      animation: visibleItems.includes(index) ? "gradientMove 8s ease infinite" : "none",
                      borderRadius: "25px",
                      opacity: 0.6,
                    }}
                  />

                  {/* Title section that's always visible */}
                  <div className="content-title " style={{ marginBottom: "20px" }}>
                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "15px",
                        position: "relative",
                        display: "inline-block",
                        
                      }}
                    >
                      {item.title}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: "0",
                          width: "80%",
                          height: "3px",
                          background: "linear-gradient(90deg, rgba(0,0,0,0.6), transparent)",
                          
                        }}
                      ></div>
                    </h3>
                    <p style={{ fontSize: "18px", color: "#000000"}}>{item.content}</p>
                  </div>

                  {/* Content sections with individual hover effects */}
                  <div className="content-sections">
                    {item.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="section-item">
                        {/* Section title (always visible) */}
                        <div
                          className="section-title"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: sectionIndex === 0 ? "30px" : "20px",
                            marginBottom: "10px",
                            cursor: "pointer",
                            position: "relative",
                            paddingBottom: "5px",
                          }}
                          onMouseEnter={() => handleTitleHover(index, sectionIndex, true)}
                          onMouseLeave={() => handleTitleHover(index, sectionIndex, false)}
                          onClick={() => toggleSection(index, sectionIndex)}
                        >
                          <div style={{ display: "flex", alignItems: "center" }}>{section.icon}</div>
                          <h4
                            style={{
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#333",
                              margin: 0,
                              position: "relative",
                              textAlign: "left",
                            }}
                          >
                            {section.title}
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-5px",
                                left: "0",
                                width: isTitleActive(index, sectionIndex) ? "100%" : "0%",
                                height: "2px",
                                background: "rgba(0,0,0,0.6)",
                                transition: "width 0.3s ease-out",
                              }}
                            ></div>
                          </h4>
                        </div>

                        {/* Section content (visible on hover/click) */}
                        <div
                          className="section-content"
                          style={{
                            fontSize: "16px",
                            lineHeight: "1.6",
                            color: "#555",
                            paddingLeft: "34px",
                            maxHeight: isTitleActive(index, sectionIndex) ? "150px" : "0",
                            height: "auto",
                            opacity: isTitleActive(index, sectionIndex) ? 1 : 0,
                            overflow: "hidden",
                            transition: "max-height 0.4s ease-out, opacity 0.4s ease-out",
                          }}
                        >
                          <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Animated corner accent */}
                  <div
                    className="corner-accent"
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      bottom: "0",
                      right: "0",
                      borderTop: "2px solid rgba(0,0,0,0.1)",
                      borderLeft: "2px solid rgba(0,0,0,0.1)",
                      opacity: visibleItems.includes(index) ? 1 : 0,
                      transform: visibleItems.includes(index) ? "translate(30px, 30px)" : "translate(0, 0)",
                      transition: "opacity 1s ease-out, transform 1s ease-out",
                      transitionDelay: "0.8s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .wellness-section {
          --primary-color: #13233b;
          --accent-color: #ecf6ff;
        }
        
        .section-title:hover {
          color: white;
        }
        
        @media (max-width: 1200px) {
          .wellness-section {
            padding: 80px 60px 0 !important;
          }
          .wellness-section div[style*="maxWidth: 80vw"] {
            max-width: 90vw !important;
            gap: 80px !important;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 42px !important;
          }
          .image-content {
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 992px) {
          .wellness-section {
            padding: 60px 40px 0 !important;
          }
          .wellness-section div[style*="maxWidth: 80vw"] {
            max-width: 100% !important;
            gap: 60px !important;
            padding: 30px !important;
          }
          .item-container {
            flex-direction: column !important;
          }
          .image-container {
            height: 50vw !important;
            max-height: 400px !important;
          }
          .decorative-circle {
            width: 200px !important;
            height: 200px !important;
          }
        }
        
        @media (max-width: 768px) {
          .section-content {
            transition: max-height 0.4s ease-out, opacity 0.4s ease-out !important;
          }
          
          .content-card .content-title h3 {
            font-size: 20px !important;
          }
          
          .content-card .content-title p {
            font-size: 14px !important;
          }
          
          .content-card {
            padding: 20px !important;
            width: 100% !important;
          }
          
          .section-title h4 {
            font-size: 16px !important;
          }
          
          .section-content p {
            font-size: 14px !important;
            line-height: 1.4 !important;
          }
          
          .wellness-section {
            padding: 40px 20px 0 !important;
          }
          
          .wellness-section div[style*="maxWidth: 80vw"] {
            gap: 40px !important;
            padding: 20px !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
          }
          
          .item-container {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          .image-container {
            width: 100% !important;
            height: auto !important;
            min-height: 250px !important;
            max-height: none !important;
            padding: 32px 24px 20px !important;
          }
          
          .image-container div[style*="fontSize: 54px"] {
            font-size: 28px !important;
          }
          
          .title-container {
            margin-bottom: 16px !important;
          }
          
          .icon-container {
            width: 40px !important;
            height: 40px !important;
          }
          
          .icon-container svg {
            width: 20px !important;
            height: 20px !important;
          }
          
          .image-content,
          .text-container div {
            font-size: 14px !important;
          }
          
          .action-button {
            font-size: 16px !important;
            padding: 16px !important;
            transform: translateY(0) !important;
            position: relative !important;
            bottom: 0 !important;
          }
          
          .text-container {
            padding: 0 !important;
            width: 100% !important;
          }
          
          .text-container .content-wrapper {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .wellness-section {
            padding: 30px 16px 0 !important;
          }
          .wellness-section div[style*="maxWidth: 80vw"] {
            padding: 15px !important;
            border-radius: 15px !important;
          }
          .image-container {
            padding: 24px 16px 16px !important;
            border-radius: 24px !important;
          }
          .image-container div[style*="fontSize: 54px"] {
            font-size: 24px !important;
          }
          .image-content {
            padding: 16px !important;
          }
          .decorative-circle {
            width: 120px !important;
            height: 120px !important;
          }
          .content-card {
            border-radius: 15px !important;
          }
          .section-title {
            margin-top: 10px !important;
          }
        }
      `}</style>
    </section>
  )
}
