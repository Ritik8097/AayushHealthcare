import React, { useState ,useEffect} from 'react';
import './ANewfooter.css'
import { Link } from "react-router-dom";
import FooterCopyright from './FooterCopyright';

const ANewFooter = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine height based on window size
  const containerHeight = windowWidth <= 768 ? '650px' : '500px';
  //padding for main-conatiner
  const paddingTop = windowWidth > 768 ? '60px' : '0px';


  return (
    <>
    <footer className="Footer_container__UU6GV snipcss0-0-0-1 snipcss-Olh9m" style={{

  backgroundImage: 'url("https://img.freepik.com/free-photo/stacked-zen-stones-sand-background-art-balance-concept_53876-110629.jpg?t=st=1740718924~exp=1740722524~hmac=d391898956fdcab1f6989d60d62c63417b56f9ffd810dfebac9888c6cbad6d00&w=1060")',
  backgroundSize: 'cover',  // Ensures the image covers the full area
  backgroundPosition: 'center',  // Centers the background image
  backgroundColor: '#28a745',  // Green background for fallback
  paddingTop: windowWidth > 768 ? '60px' : '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Optional: Box shadow for outer container
  
}}>
      <div className='main-container h-fit md:h-[500px] flex flex-col justify-between'style={{
    backgroundColor: '#d3aa6e',  // Green background
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Box shadow
    padding: '20px',  // Adjust padding as needed
    borderRadius: '8px',  // Optional: For rounded corners
    width: '80%',  // Reduce width (you can adjust the percentage)
     // Dynamic height based on window size
    margin: '0 auto',  // Centers the container horizontally
    paddingTop: paddingTop,    
  }}>
    <div className="flex flex-col items-center justify-center pb-8 md:hidden">
                <div className="flex justify-center items-center  ">
    <Link to="/">
                    <img className='h-14 footer-img' src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_-_png-white_1.png?v=1739961559" alt="logo" />
    </Link>
                </div>
                <div className="block md:hidden  text-[10px] text-center !text-[#ffffff]">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                    </div>
                
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
                  <div className=" flex-col items-center justify-center hidden md:flex">
                    <div className=" justify-center items-center flex">
     <Link to='/'>
                        <img className='h-[4.5rem] footer-img' src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_-_png-white_1.png?v=1739961559" alt="logo" />
    </Link>
                    </div>
                    <div className="hidden text-[#e7e6e6] justify-center text-center  w-full text-[10px] md:flex">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#a8ff00'}}>ABOUT US</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/about/company-intro" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Our Story</Link></li>
                            <li><Link to="/about/mission-vision" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Mission & Vision</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#a8ff00'}}>WELLNESS</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/wellness/modern-science" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Modern Science</Link></li>
                            <li><Link to="/ayurveda" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Ayurveda</Link></li>
                            <li><Link to="/wellness/health-wellness" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Health & Wellness</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#a8ff00'}}>NEWSROOM</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/newsroom/in-the-news" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>In the News</Link></li>
                            <li><Link to="/newsroom/press-release" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Press Release</Link></li>
                            <li><Link to="/newsroom/library" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Library</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#a8ff00'}}>CSR</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/csr-at-aayush/malnutrition" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Malnutrition</Link></li>
                            <li><Link to="/csr-at-aayush/health-check" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Healthcare Check</Link></li>
                            <li><Link to="/sustainability" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Sustainability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg"  style={{color:'#a8ff00'}}>Corporate</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/career" className="text-muted-foreground hover:text-primary"  style={{color:'#ffffff'}}>Careers</Link></li>
                            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary" style={{color:'#ffffff'}}>Privacy Policy</Link></li>
                            <li><Link to="/health" className="text-muted-foreground hover:text-primary" style={{color:'#ffffff'}}>Health</Link></li>
                            
                        </ul>
                    </div>
                   
                </div>
                <FooterCopyright/>
                </div>
  <div className="Footer_brandMark__8eNWC snipcss0-1-1-109">
  <img
    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw_1.png?v=1739967055"
    alt="Arcadia logo"
    width={18}
    height={20}
    className="snipcss0-2-109-110"
    style={{
      width: "100%",  
      height: "100%", 
      objectFit: "contain", 
    }}
  />
</div>
  {/* <div className="snipcss0-1-1-111"><img alt loading="lazy" width={3362} height={1680} decoding="async" data-nimg={1} className="Footer_image__yOn3D snipcss0-2-111-112 style-rSYGB" src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw.png?v=1739961854" id="style-rSYGB" /></div> */}

</footer>
    </>
  )
}

export default ANewFooter;