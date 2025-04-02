import { useState, useEffect } from "react";

const Asection777 = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Function to toggle accordion sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Sections data
  const sections = [
    {
      title: "Explore",
      links: [
        { text: "Contact Us", href: "/contact-us" },
        { text: "FAQ", href: "/faq" },
        { text: "Career", href: "/careers" },
        { text: "Press Room", href: "https://berelax.com/press-room/" },
        { text: "Wellness Journal", href: "https://berelax.com/news/" },
      ],
    },
    {
      title: "Treatments",
      links: [
        { text: "Massages", href: "/treatments/massages" },
        { text: "Nail Care", href: "/treatments/nail-care" },
        { text: "Beauty", href: "/treatments/beauty" },
        { text: "Wellness", href: "/treatments/wellness" },
        { text: "Combo", href: "/treatments/combo" },
      ],
    },
    {
      title: "Products",
      links: [
        { text: "Pillows", href: "/products/travel-pillows" },
        { text: "Travel Accessories", href: "/products/travel-accessories/" },
        { text: "Massage Devices", href: "/products/massage-devices/" },
        { text: "Beauty Devices", href: "/products/beauty-devices/" },
        { text: "Register Product", href: "/products/register" },
        { text: "Find a Retailer", href: "/products/find-retailer" },
      ],
    },
  ];

  return (
    <div className="in-view fadein animated style-9mrno" id="style-9mrno">
      {/* Desktop UI: Show Original Design */}
      {!isMobile && (
        <div className="footer__list flex flex-wrap space-x-10">
          {sections.map((section, index) => (
            <div key={index} className="footer__list-col">
              <div className="footer__subtitle font-semibold">{section.title}</div>
              <div className="footer__list-sublist">
                {section.links.map((link, idx) => (
                  <a key={idx} className="footer__link block py-1" href={link.href}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile UI: Accordion with Titles Stacked Vertically */}
      {isMobile && (
        <div className="footer__list flex flex-col w-full">
          {sections.map((section, index) => (
            <div key={index} className="footer__list-col w-full border-b border-gray-300">
              {/* Accordion Header */}
              <div
                className="footer__subtitle flex justify-between items-center py-3 cursor-pointer w-full"
                onClick={() => toggleSection(section.title)}
              >
                <span className="font-semibold">{section.title}</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transform transition-transform ${
                    openSection === section.title ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#13233B" />
                </svg>
              </div>

              {/* Accordion Content - Fixed with smooth transition */}
              <div
                className="footer__list-sublist w-full overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openSection === section.title ? "500px" : "0px",
                  opacity: openSection === section.title ? 1 : 0,
                  transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                }}
              >
                {section.links.map((link, idx) => (
                  <a key={idx} className="footer__link block py-1 w-full" href={link.href}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Asection777;
