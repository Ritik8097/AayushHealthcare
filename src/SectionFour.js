import React, { useRef } from 'react';

export default function SectionFour() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 250; // Adjust this value for scroll speed
      sliderRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{background:'#fcfaf8'}}>
      <h2 className="text-2xl font-semibold text-center text-primary" style={{color:"rgb(112, 112, 112)"}}>OUR PRODUCT IMPACT</h2>
      <div style={{maxWidth:"800px",textAlign:"center",margin:"auto auto"}}>
      <p className="mt-2 text-center text-muted-foreground" style={{fontSize:'30px',paddingBottom:'10px',color: '#d1a272'}} >What’s our impact it matters the most.</p>
      <p className="mt-2 text-center text-muted-foreground" style={{fontSize:'18px',lineHeight:'25.2px',color:"rgb(112, 112, 112)"}}>
        Of course, the quality of ingredients has a huge impact on how our products work. But we go beyond “the best” and “the rare”. 
      </p>
      </div>
      <div className="relative mt-6">
        <div
          className="flex overflow-x-scroll scrollbar-hide  snap-x scroll-smooth"
          ref={sliderRef}
        >
          <div className="flex-none w-64 md:w-96 mx-2 snap-center">
            <img src="https://aayushwellness.com/wp-content/uploads/2024/06/Mental-Health-Support-1.png.webp" alt="Chitrak" className="rounded-lg  snap-center" />
           
          </div>
          <div className="flex-none w-64  md:w-96 mx-2 snap-center">
            <img src="https://aayushwellness.com/wp-content/uploads/2024/06/2-1-1.png.webp" alt="Varun Plant" className="rounded-lg snap-center" />
            
          </div>
          <div className="flex-none w-64  md:w-96 mx-2 snap-center">
            <img src="https://aayushwellness.com/wp-content/uploads/2024/06/3-1-1.png.webp" alt="Tamalpatra" className="rounded-lg snap-center" />
           
          </div>
          <div className="flex-none w-64  md:w-96 mx-2 snap-center">
            <img src="https://aayushwellness.com/wp-content/uploads/2024/06/4-1-1.png.webp" alt="Shalai Guggal" className="rounded-lg snap-center" />
            
          </div>
        </div>
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-black p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-black p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
