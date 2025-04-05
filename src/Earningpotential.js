import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, IndianRupee, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom";


const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

function EarningPotentialSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-3 bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Financial Opportunity
            </div>
            <h2 className="text-[40px] md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 !text-[#df3636]">
              Discover Your Earning Potential
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore the financial opportunities available to both franchisees and doctors in our network.
            </p>
          </div>
        </FadeInSection>

        {/* Franchisee Section */}
        <div className="grid md:grid-cols-2 gap-12  items-center">
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center mb-2 bg-blue-100 text-[#233f8f] px-4 py-1 rounded-full text-sm font-medium">
                <IndianRupee className="w-4 h-4 mr-2" />
                Franchisee Benefits
              </div>
              <h3 className="text-[24px] md:text-3xl font-bold text-[#233f8f]">Franchisee Earning Potential</h3>
              <p className="text-gray-600">
                Our franchise model offers exceptional earning potential with multiple revenue streams and proven
                business systems.
              </p>
              <Link to="/franchise" className="inline-block">
                <button className="group bg-blue-500 hover:bg-blue-500 text-white px-5 py-2 rounded-md flex items-center transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
          
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-03-29_at_11.47.08_AM.jpg?v=1743599028"
                  alt="Franchisee Earning Potential Table"
                  className="w-full h-full object-cover rounded-md"
                  loading="eager"
                />
                <div className="absolute inset-0  from-black/20 to-transparent rounded-md"></div>
              </motion.div>
            
          </FadeInSection>
        </div>

        {/* Doctor's Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:mt-24">
          <FadeInSection delay={0.6}>
            
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/WhatsApp_Image_2025-03-29_at_11.46.11_AM.jpg?v=1743599032"
                  alt="Doctor's Earning Potential Table"
                  className="w-full h-full object-cover rounded-md"
                  loading="eager"
                />
                <div className="absolute inset-0  from-black/20 to-transparent rounded-md"></div>
              </motion.div>
         
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <div className="space-y-6 md:order-1">
              <div className="inline-flex items-center justify-center mb-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                <IndianRupee className="w-4 h-4 mr-2" />
                Doctor Benefits
              </div>
              <h3 className="text-[24px] md:text-3xl font-bold text-[#233f8f]">Doctor&apos;s Earning Potential</h3>
              <p className="text-gray-600">
                Physicians in our network enjoy competitive compensation, flexible schedules, and the opportunity to
                focus on patient care without administrative burdens.
              </p>
              <Link  to="/Doctor" className="inline-block">
                <button className="group bg-blue-500 hover:bg-blue-300 text-white px-5 py-2 rounded-md flex items-center transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </FadeInSection>
        </div>

        {/* CTA Section */}
        <FadeInSection delay={1.0}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#999999] to-[#e9e9e9] rounded-xl border shadow-lg p-8 md:p-12 inline-block w-full max-w-4xl">
              <div className="space-y-6">
                <h4 className="text-[24px] md:text-3xl font-bold text-[#df3636]">
                  Ready to Explore Your Financial Potential?
                </h4>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Contact our team today to learn more about the financial opportunities available and how you can get
                  started.
                </p>
                <Link href="/consultation" className="inline-block">
                  <button className="bg-[#233f8f] hover:bg-[#233f8f] text-white px-6 py-3 text-lg rounded-md mt-4">
                    Join Our Healthcare
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default EarningPotentialSection;