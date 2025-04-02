import { Link } from "react-router-dom";

export default function SectionSix() {
    return (
      <div  className=" bg-no-repeat relative p-10  md:p-28   mt-4" style={{background : "url('https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-08-12_at_8.26.39_PM.jpg?v=1723521556')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "50% 0%"}}>
      <div className="max-w-3xl mx-auto p-6 bg-card rounded-lg shadow-lg z-10  bg-white">
        <h2 style={{color:'#707070'}} className="text-lg font-semibold text-muted-foreground   uppercase text-center">Join Our Team</h2>
        
        <h3 className="text-3xl  text-primary text-center mt-3" style={{ color: '#d1a272'}}>Become a Part of the Aayush Wellness Family</h3>
        <p className="mt-4 text-muted-foreground text-center" >
        At Aayush Wellness, we are always on the lookout for passionate, innovative, and driven individuals who share our commitment to transforming health and wellness. Join us, and together, let's create a healthier, happier world.
        </p>
        <div className="flex items-center justify-center">
        <Link to="/career" className="mt-6   px-4 py-2 rounded-lg  " style={{border:"1px solid #d1a272"}}>
          Explore Careers
        </Link>
        </div>
      </div>
    </div>
        
    )
}

