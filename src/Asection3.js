
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const companyValuesStyles = {
  container: {
    width: "100%",
    maxWidth: "80vw",
    margin: "0 auto",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
  },
  item: {
    width: "100%",
    padding: "40px",
    background: "#f9f9f9",
    borderRadius: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    textAlign: "start",
  },
  itemIcon: {
    maxWidth: "64px",
    minWidth: "64px",
    height: "64px",
    border: "1px solid rgba(46,99,135,.2)",
    borderRadius: "50%",
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    marginBottom: "12px",
    fontSize: "40px",
    color: "#13233b", // Change this to your preferred color
    fontWeight: "400",
  },
  itemText: {
    fontFamily: "Gotham Pro, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "145%",
    color: "#3a4458",
  },
  title40: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "125%",
    color: "#13233b",
    textAlign: "center",
    marginBottom: "32px",
    paddingTop: "40px",
  },
  sliderContainer: {
    width: "100%",
    padding: "10px",
  },
  sliderItemWrapper: {
    padding: "0 10px",
  },
  sliderItem: {
    
    height: "auto",
    padding: "24px",
    background: "#f5f3f0",
    borderRadius: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    textAlign: "start",
    boxSizing: "border-box",
    margin: "0 auto",
    width: "100%", // Makes sure the card takes full width
  maxWidth: "322px", // You can adjust this based on your design
  },
}

const values = [
  {
    title: "Science & Innovation",
    text: "We are driven by research.At Aayush Wellness, we blend cutting-edge science with nature to create solutions that enhance health and longevity. Our team of experts is constantly researching and innovating to bring the best in nutraceuticals, preventive healthcare, and wellness technology.",
    icon: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/svgviewer-output_4.svg?v=1741757643",
  },
  {
    title: "Accessibility for All",
    text: "Health should be within everyone's reach.We believe that wellness is a right, not a privilege. Whether it’s through affordable nutritional solutions, digital healthcare access, or community wellness programs, we ensure that everyone—regardless of location or background—can take control of their health.",
    icon: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/svgviewer-output_2.svg?v=1741756898",
  },
  {
    title: "Holistic Well-Being",
    text: "Health isn’t just about curing—it’s about preventing.We focus on preventive healthcare and personalized wellness solutions, empowering individuals to take charge of their well-being before issues arise. From AI-powered diagnostics to natural wellness solutions, we help people live healthier, longer lives.",
    icon: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/svgviewer-output_1.svg?v=1741756778",
  },
  {
    title: "Trust & Transparency",
    text: "Your health is our priority.We hold ourselves to the highest standards of safety, quality, and ethics. Every product we offer is backed by rigorous scientific testing, ensuring transparency and effectiveness in everything we do.",
    icon: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/svgviewer-output.svg?v=1741756559",
  },
]

const CompanyValues = () => {
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize() // Call once to set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    adaptiveHeight: true, // Adjust height dynamically if needed
    arrows: false,
  }

  return (
    <motion.div
      ref={ref}
      style={companyValuesStyles.container}
      initial={{ opacity: 0, y: 340 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h6 style={companyValuesStyles.title40}>Values</h6>

      {!isMobile ? (
        <div style={companyValuesStyles.list}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              style={companyValuesStyles.item}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <div style={companyValuesStyles.itemIcon}>
                <img
                  src={value.icon || "/placeholder.svg"}
                  alt={value.title}
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <h3 style={companyValuesStyles.itemTitle}>{value.title}</h3>
              <p style={companyValuesStyles.itemText}>{value.text}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings} style={companyValuesStyles.sliderContainer}>
          {values.map((value, index) => (
            <div key={index} style={companyValuesStyles.sliderItemWrapper}>
              <motion.div
                style={companyValuesStyles.sliderItem}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              >
                <div style={companyValuesStyles.itemIcon}>
                  <img
                    src={value.icon || "/placeholder.svg"}
                    alt={value.title}
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h3 style={companyValuesStyles.itemTitle}>{value.title}</h3>
                <p style={companyValuesStyles.itemText}>{value.text}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      )}
    </motion.div>
  )
}

export default CompanyValues
