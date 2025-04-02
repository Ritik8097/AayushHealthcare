import React, { useState, useEffect } from 'react'
import './Asection7.css'
import FooterBlock from './FooterBlock';


const Asection7 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Company",
      links: [
        { text: "About us",href: "/about-us"}, 
        { text: "Our Story", href:"/about/company-intro"  },                                           
        { text: "Contact us", href:"/career"},                
        { text: "Mission & Vision", href:"/about/mission-vision"},            
         
      ],
    },
    {
      title: "wellness",
      links: [
        { text: "Modern Science", href:"/wellness/modern-science" },  
        { text: "Ayurveda",href:"/ayurveda"  },  
        { text: "Health & Wellness", href:"/wellness/health-wellness"  },    
         
        
      ],
    },
    {
      title: "Newsroom",
      links: [
        { text: "In The News", href:"/newsroom/in-the-news" },   
        { text: "Press Release", href: "/newsroom/press-release" },  
        { text: "Library", href:"/newsroom/library" },    
            
        
       
      ],
    },
    {
      title: "Corporate",
      links: [
        { text: "Malnutrition", href:"csr-at-aayush/malnutrition" },   
        { text: "HealthCare check", href: "/csr-at-aayush/health-check" },  
        { text: "Sustainability", href:"/sustainability" },    
        { text: "Healthcare", href: "/healthcare" }, 
        { text: "Accelarator", href: "/growth-accelerator" },      
        
       
      ],
    },
  ];

  return (
<footer className="footer snipcss-DVqsh">
<div className="footer__block1">
        <img src="https://berelax.com/_next/static/media/4-1.515f831f.webp" className="footer__block1-img" width="100%" height="100%" />
        <div className="footer__row">
          <div className="in-view fadein animated style-ooSFT" id="style-ooSFT">
            <div className="footer__left">
              <h2 className="footer__title">Join the Aayush Wellness &amp; Travel Newsletter</h2>
              <div className="footer__form">
                <div className="footer__input"><input type="email" placeholder="Your Email"  /></div>
                <div className="button beige button-arrow"><svg viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.5h24m0 0-6.857-7M24 8.5l-6.857 7" stroke="#fff" strokeWidth="1.5" />
                  </svg></div>
              </div>
            </div>
          </div>
          <div className="in-view fadein animated style-9mrno" id="style-9mrno">
            {!isMobile ? (
              <div className="footer__list">
                {sections.map((section, index) => (
                  <div key={index} className="footer__list-col">
                    <div className="footer__subtitle">{section.title} <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#13233B" />
                      </svg></div>
                    <div className="footer__list-sublist">
                      {section.links.map((link, idx) => (
                        <a key={idx} className="footer__link" href={link.href}>{link.text}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="footer__list flex flex-col w-full">
                {sections.map((section, index) => (
                  <div key={index} className="footer__list-col w-full border-b border-gray-300">
                    <div
                      className="footer__subtitle flex justify-between items-center py-3 cursor-pointer w-full"
                      onClick={() => toggleSection(section.title)}
                    >
                      <span>{section.title}</span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transform transition-transform ${
                          openSection === section.title ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#000000" />
                      </svg>
                    </div>
                    <div
                      className="footer__list-sublist w-full overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openSection === section.title ? "500px" : "0px",
                        opacity: openSection === section.title ? 1 : 0,
                        transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                      }}
                    >
                      {section.links.map((link, idx) => (
                        <a key={idx} className="text-black  transition font-inter" href={link.href}>
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="in-view fadein animated style-MzNLt" id="style-MzNLt">
          <div className="footer__block1-bottom">
            <div className="footer__socials">
              <a  href="https://www.facebook.com/profile.php?id=61561583410258"  className="footer__socials-item" target="_blank" rel="noreferrer"><img src="https://berelax.com/wp-content/uploads/2023/02/facebook.svg" width="100%" height="100%" alt="be relax" className /></a>  
                  
              <a  href="https://www.linkedin.com/company/aayushwellness/?viewAsMember=true"  className="footer__socials-item" target="_blank" rel="noreferrer"><img src="https://berelax.com/wp-content/uploads/2023/02/linkedin.svg" width="100%" height="100%" alt="be relax" className /></a>
             
              <a href="https://www.instagram.com/aayush.wellness/" className="footer__socials-item" target="_blank" rel="noreferrer"><img src="https://berelax.com/wp-content/uploads/2023/02/instagram.svg" width="100%" height="100%" alt="be relax" className /></a>
              
            </div>
            <div className="footer__block1-right">
              <div className="footer__links"><a className="footer__link" href="/terms-conditions"></a><a className="footer__link" href="/privacy-policy/">Privacy Policy</a></div>
              <div className="footer__select">
                <div className="footer__select-top"><svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.987a5.657 5.657 0 0 0-8 8l3.513 3.52a.667.667 0 0 0 .947 0L12 10.954a5.633 5.633 0 0 0 0-7.967ZM11.047 10 8 13.06 4.953 10a4.307 4.307 0 1 1 6.094 0ZM6 4.94a2.88 2.88 0 0 0 1.464 4.853 2.873 2.873 0 0 0 3.443-2.786 2.826 2.826 0 0 0-.84-2.033A2.867 2.867 0 0 0 6 4.94Zm3.127 3.12a1.553 1.553 0 1 1 .446-1.086c-.01.411-.182.802-.48 1.086h.034Z" fill="#3A4458" />
                  </svg><span /><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.344 5.643 8 11.3l5.657-5.657-.943-.943L8 9.415 3.286 4.7l-.942.943Z" fill="#13233B" />
                  </svg></div>
              </div>
            </div>
          </div>
        </div>
        <div className="in-view fadein animated style-zXIZf" id="style-zXIZf">
          <div className="footer__copy">
            <div className="footer__text">© Aayush Wellness. All Rights Reserved 2025</div>
            {/* <img src="https://berelax.com/wp-content/uploads/2023/01/Logo-Be-Relax.png" width="100%" height="100%" alt="be relax" className="footer__logo" /> */}
            <div className="footer__text"><a  target="_blank" rel="noreferrer"><svg width={72} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* href="https://equal.design/" */}
                  {/* <g clipPath="url(#equal_svg__a)" fill="#5D8395">
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.412 12.11c0-1.183 1.08-1.612 3.56-1.612 2.115 0 3.501.281 4.668.651-.291.887-1.196 1.434-2.232 1.774-1.328.43-5.996 1.405-5.996-.813Zm4.216-8.162c-2.378 0-4.669.429-6.988 1.198L53.82 7.6c2.35-.71 4.173-.842 5.661-.842 1.547 0 4.334.177 4.334 2.38-1.489-.517-3.298-.828-5.253-.828-3.618 0-6.872.946-6.872 3.948 0 2.617 2 3.652 5.194 3.652 1.313 0 2.524-.148 3.648-.414 1.62-.606 2.699-1.567 3.457-2.647.176.045.292.148.482.193a62.44 62.44 0 0 0-.642 2.365v.326h3.326V9.877c-.058-4.376-2.757-5.929-7.528-5.929Z" />
                    <path d="M72 0h-3.312v15.703H72V0Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M46.892 4.14v6.476c-1.022 1.212-3.429 2.38-5.661 2.38-2.728 0-3.545-1.271-3.545-3.726V4.14h-3.327l-.044 6.402c.044 4.258 2.89 5.367 5.924 5.367 1.225 0 2.349-.177 3.37-.503 1.62-.606 2.685-1.567 3.443-2.646.175.044.292.148.482.192a62.484 62.484 0 0 0-.642 2.366v.399h3.312V4.14h-3.312ZM24.568 13.1c-2.962 0-4.391-.886-4.391-3.163 0-2.292 1.634-3.18 4.595-3.18 2.962 0 4.363.888 4.363 3.18 0 2.277-1.605 3.164-4.567 3.164Zm4.771-8.96v.4c.204.813.409 1.567.642 2.365-.175.045-.292.148-.482.193-.744-1.065-1.59-2.351-3.268-2.854a10.66 10.66 0 0 0-2.567-.296c-3.677 0-6.8 1.568-6.8 5.989 0 4.42 3.123 5.973 6.8 5.973.904 0 1.75-.089 2.524-.266 1.721-.488 2.567-1.79 3.326-2.869.175.045.292.148.482.193a62.485 62.485 0 0 0-.642 2.365v5.309h3.326V4.14h-3.341ZM7.878 6.506c2.101 0 3.72.444 4.29 2.07H3.502c.525-1.626 2.115-2.07 4.376-2.07Zm-.175 6.669c-2.203 0-3.953-.607-4.318-2.455h12.328c0-5.264-3.472-6.772-7.805-6.772C3.268 3.948 0 5.678 0 9.937c0 4.243 3.37 5.973 7.703 5.973 4.217 0 7.047-1.39 7.806-4.332h-3.283c-.832 1.168-2.232 1.597-4.523 1.597Z" />
                  </g> */}
                  <defs>
                    <clipPath id="equal_svg__a">
                      <path fill="#fff" d="M0 0h72v21H0z" />
                    </clipPath>
                  </defs>
                </svg></a></div>
          </div>
        </div>
      </div>
      <FooterBlock/>
    </footer> 
  )
}

export default Asection7;
