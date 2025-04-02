import { Link } from 'react-router-dom'
import './index.css'
export default function SectionFirst() {
    return (
        <div class="block" className="bg-background text-foreground p-6 md:p-12" style={{paddingTop: '30px', paddingBottom: '30px'}}>
           <div style={{maxWidth:"800px",textAlign:"center",margin:"auto auto"}}>
            
            <h3 className="text-3xl   mb-4 text-center" style={{ color: '#d1a272'}}>Explore Wellness with Aayush </h3>
            <p className="text-muted-foreground mb-6" style={{fontSize:'18px',lineHeight:'25.2px',color:"rgb(112, 112, 112)"}}>
            At Aayush Wellness, we are redefining health and wellness by harnessing the precision of Modern Science & the wisdom of Contemporary Active Ayurveda, which forms the cornerstone of all our innovations Our journey has evolved into a commitment to deliver premium, reseearched proven and effective scientifically-backed health solutions that cater to the needs of today's health-conscious individuals. We believe in the power of science and nature and its ability to transform lives, ensuring that optimal wellbeing is not just an aspiration but a reality for everyone. 
            </p>
            </div>
           
            <div className="mt-8 text-center">
               
                <Link to='/about/company-intro' className="  text-white  py-2 px-4 rounded-lg" style={{ backgroundColor: '#d1a272'}}>Know Our Story</Link>
            </div>
        </div>
        
    )
}