import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Instagram, Facebook } from "lucide-react"

const NewFooter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [videoSrc, setVideoSrc] = useState("https://cdn.shopify.com/videos/c/o/v/ef92913a3d004ba4bbe7ab21d8d6afe3.mp4")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("https://cdn.shopify.com/videos/c/o/v/your-mobile-video.mp4")
      } else {
        setVideoSrc("https://cdn.shopify.com/videos/c/o/v/ef92913a3d004ba4bbe7ab21d8d6afe3.mp4")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes("@")) {
      setIsSubscribed(true)
    }
  }

  return (
    <footer className="relative w-full md:h-[80vh] overflow-hidden text-white font-sans blocks">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col h-full p-4 md:p-10">
        <div className="flex flex-col md:flex-row justify-between mb-auto">
          <div className="flex-1 min-w-[300px] mb-8 md:mb-0">
            <h2 className="mb-2 text-xxl font-semibold text-white">Connect With Us</h2>
            <p className="mb-5  md:text-lg max-w-[600px] text-white text-lg">
            (Formerly known as Aayush Food and Herbs Limited) <br></br> 
            <span className="font-bold">CIN:</span> L01122DL1984PLC018307 <span className="font-bold">Registered Office:</span>  275, Ground Floor, West
              End Marg, Near Saket Metro Station Exit: 2, New Delhi-110030 <br></br>
              <span className="font-bold">Contact no.:</span>  +91 84486 93031 | <br></br> <span className="font-bold">Email:</span> cs@aayushwellness.com | 
            </p>


            <form onSubmit={handleSubscribe} className="flex items-center max-w-[500px]">
              {!isSubscribed ? (
                <div className="flex w-full rounded-full overflow-hidden border-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="py-4 px-5 flex-grow border-none text-sm text-black outline-none h-[60px]"
                  />
                  <button
                    type="submit"
                    className="bg-white-500 text-white border-none cursor-pointer flex items-center justify-center px-4 h-[60px]"
                  >
                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                      <ArrowRight size={18} className="text-green-500" />
                    </div>
                  </button>
                </div>
              ) : (
                <p className="text-green-500">Thanks for subscribing!</p>
              )}
            </form>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:pl-[3rem] md:border-l md:border-white/90">
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl font-medium">Company</h3>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <Link to="/about-us" className="text-white no-underline hover:underline  text-[25px]">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/about/company-intro"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Our Story
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/career" className="text-white no-underline hover:underline  text-[25px]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/mission-vision"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Mission & Vision
                  </Link>
                </li>
              </ul>
            </div>
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl font-medium">Wellness</h3>
              <ul className="list-none p-0">
                <li>
                  <Link
                    to="/wellness/modern-science"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Modern Science
                  </Link>
                </li>
                <li>
                  <Link to="/ayurveda" className="text-white no-underline hover:underline  text-[25px]">
                    Ayurveda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wellness/health-wellness"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Health & Wellness
                  </Link>
                </li>                               
              </ul>             
            </div>
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl font-medium ">Newsroom</h3>
              <ul>
                <li>
                  <Link
                    to="/newsroom/in-the-news"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    In the News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsroom/press-release"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Press Release
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsroom/library"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Library
                  </Link>
                </li>
                </ul>
              </div>
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl  font-medium">Corporate</h3>
              <ul className="list-none p-0">
                <li>
                  <Link
                    to="/csr-at-aayush/malnutrition"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Malnutrition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/csr-at-aayush/health-check"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Healthcare Check
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability" className="text-white no-underline hover:underline  text-[25px]">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/healthcare" className="text-white no-underline hover:underline  text-[25px]">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/growth-accelerator"
                    className="text-white no-underline hover:underline  text-[25px]"
                  >
                    Accelarator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1791px] h-auto md:h-[267px] flex items-center justify-center mx-auto px-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/footer_logo.png?v=1741340063"
            alt="Aayushwellness Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full h-px bg-white/30 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 pb-4">
          <div className="text-center md:text-left max-w-md">
            <p className="text-sm text-white mb-2">© 2025 Aayush. All rights reserved.</p>
            <p className="text-sm text-gray-300">Enhancing well-being through innovative nutraceutical solutions and authentic herbal masala blends</p>
          </div>

          {/* Social Media Icons - Desktop: Center, Mobile: Above Terms */}
          <div className="flex items-center justify-center gap-4 order-2 md:order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <div className="relative group">
              <Link
                to="#"
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all"
              >
                <Instagram size={20} className="text-black" />
              </Link>
              <div className="absolute left-0 bottom-full mb-2 w-48 rounded-md shadow-lg bg-white/30 backdrop-blur-md ring-1 ring-black ring-opacity-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="https://www.instagram.com/aayush.wellness/" className="block px-4 py-2 text-sm text-white font-semibold hover:underline hover:bg-green-800" role="menuitem">
                    Aayush Wellness 
                  </Link>
                  <Link to="https://www.instagram.com/aayushveda_/" className="block px-4 py-2 text-sm text-white font-semibold hover:bg-green-800 hover:underline" role="menuitem">
                    Aayush Veda 
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="#"
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all"
              >
                <Facebook size={20} className="text-black" />
              </Link>
              <div className="absolute left-0 bottom-full mb-2 w-48 rounded-md shadow-lg bg-white/30 backdrop-blur-md ring-1 ring-black ring-opacity-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="https://www.facebook.com/profile.php?id=61561583410258" className="block px-4 py-2 text-sm text-white font-semibold hover:underline hover:bg-green-800" role="menuitem">
                  Aayush Wellness 
                  </Link>
                  <Link to="https://www.facebook.com/profile.php?id=61555665373176" className="block px-4 py-2 text-sm text-white font-semibold hover:underline hover:bg-green-800" role="menuitem">
                  Aayush Veda 
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="https://www.youtube.com/@AayushWellnessLimited"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </Link>

            <Link
              to="https://www.linkedin.com/company/aayushwellness/?viewAsMember=true"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>

          <div className="flex gap-6 order-3 md:order-2">
            <Link to="#" className="text-sm text-white no-underline hover:underline">
              Terms
            </Link>
            <Link to="/privacy-policy" className="text-sm text-white no-underline hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default NewFooter;
