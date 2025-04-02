import { Link, useNavigate } from "react-router-dom";

export default function SectionSecond() {
  const navigate= useNavigate();
  const HandleClick =()=>{
    navigate("/about/mission-vision")
  }
    return (
      <div  className=" bg-no-repeat relative  p-10   mt-14" style={{background : "url('https://cdn.shopify.com/s/files/1/0674/9614/9171/files/LMe_BmWURB-g3CWhphzutg.webp?v=1723524740')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center"}}>
     
    
      <div className="max-w-3xl mx-auto p-6 bg-card rounded-lg shadow-lg z-10  bg-white">
        <h2 style={{color:'#707070'}} className="text-lg font-semibold text-muted-foreground text-center">WHAT WE DO</h2>
        <h3 className="text-3xl  mb-4 text-center" style={{ color: '#d1a272'}}>Aayush Wellness is on a mission to elevate health standards across India. </h3>
        <p className="mt-3">
        We are dedicated to creating innovative, natural wellness & health solutions that inspire individuals to prioritize their well-being. Our products are crafted with care, backed by rigorous research, and designed to enhance the quality of life. From nutraceuticals to dietary and advanced nutritional supplements, skincare and self care products and better for you foods, we are committed to making a lasting positive impact on society. 
        </p>
        <div className="flex items-center justify-center">
        <button onClick={HandleClick} className="mt-6   px-4 py-2 rounded-lg  " style={{border:"1px solid #d1a272"}}>
          Explore More
        </button>
        </div>
      
      </div>
    </div>
        
    )
}


