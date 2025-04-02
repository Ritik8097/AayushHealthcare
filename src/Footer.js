import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="overflow-hidden text-foreground p-8 " style={{background:'#FCFAF8'}}>
              <div className="flex flex-col items-center justify-center pb-8 md:hidden">
                <div className="flex justify-center items-center  ">
    <Link to="/">
                    <img className='h-14 footer-img' src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" alt="logo" />
    </Link>
                </div>
                <div className="block md:hidden text-[#707070] text-[10px] text-center">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                    </div>
                
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
                  <div className=" flex-col items-center justify-center hidden md:flex">
                    <div className=" justify-center items-center flex">
     <Link to='/'>
                        <img className='h-[4.5rem] footer-img' src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" alt="logo" />
    </Link>
                    </div>
                    <div className="hidden text-[#707070] justify-center text-center  w-full text-[10px] md:flex">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>ABOUT US</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/about/company-intro" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Our Story</Link></li>
                            <li><Link to="/about/mission-vision" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Mission & Vision</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>WELLNESS</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/wellness/modern-science" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Modern Science</Link></li>
                            <li><Link to="/ayurveda" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Ayurveda</Link></li>
                            <li><Link to="/wellness/health-wellness" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Health & Wellness</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>NEWSROOM</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/newsroom/in-the-news" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>In the News</Link></li>
                            <li><Link to="/newsroom/press-release" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Press Release</Link></li>
                            <li><Link to="/newsroom/library" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Library</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>CSR</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/csr-at-aayush/malnutrition" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Malnutrition</Link></li>
                            <li><Link to="/csr-at-aayush/health-check" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Healthcare Check</Link></li>
                            <li><Link to="/sustainability" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Sustainability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>Corporate</h3>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/career" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Careers</Link></li>
                            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Privacy Policy</Link></li>
                            
                        </ul>
                    </div>
                   
                </div>
            </footer>
        </>
    );
}
