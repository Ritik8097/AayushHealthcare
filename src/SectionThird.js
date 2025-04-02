export default function SectionThird() {
    return (
        <div className="bg-background mb-8 " >
            <div className="text-center p-8 mb-8">
               
                <h1 className="text-2xl md:text-3xl font-bold text-primary" style={{ color: '#d1a272'}}>EXPLORE THE WORLD OF DABUR</h1>
                <p className="text-lg text-muted-foreground mt-2">If your stomach is upset, we know how to make it come around.</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 px-6 py-2 rounded-lg " style={{border:"1px solid #d1a272"}}> Explore Brand</button>
            
            </div>
           
            <div className="pl-8 pr-8 flex items-center  w-full overflow-x-scroll no-scrollbar snap-x scroll-smooth md:justify-center   gap-6  md:flex-row  md:space-x-4">
                
                <img  className="snap-center" style={{height:"100px",width:"100px",objectFit:"contain"}} src="https://aayushwellness.com/wp-content/uploads/2024/06/1-4-300x300.png.webp" alt="Dabur Lal Tail" className="rounded-lg shadow-md mb-4 md:mb-0 md:w-1/6" />
               
                
                <img  className="snap-center" style={{height:"100px",width:"100px",objectFit:"contain"}} src="https://aayushwellness.com/wp-content/uploads/2024/06/2-8-300x300.png.webp" alt="Honitus" className="rounded-lg shadow-md mb-4 md:mb-0 md:w-1/6" />
               
                
                <img  className="snap-center" style={{height:"100px",width:"100px",objectFit:"contain"}} src="https://aayushwellness.com/wp-content/uploads/2024/06/4-4-300x300.png.webp" alt="Vatika" className="rounded-lg shadow-md mb-4 md:mb-0 md:w-1/6" />
               
                
                <img  className="snap-center" style={{height:"100px",width:"100px",objectFit:"contain"}} src="https://aayushwellness.com/wp-content/uploads/2024/06/3-3-300x300.png.webp" alt="Pudin Hara" className="rounded-lg shadow-md mb-4 md:mb-0 md:w-1/6" />
              
               
                    
                <img  className="snap-center" style={{height:"100px",width:"100px",objectFit:"cover"}} src="https://aayushwellness.com/wp-content/uploads/2024/06/4-2-e1719483294438-300x244.png.webp" alt="Red Paste" className="rounded-lg shadow-md mb-4 md:mb-0 md:w-1/6" />
                
                
                <img  className="snap-center" style={{height:"100px",width:"100px",objectFit:"contain"}} src="https://aayushwellness.com/wp-content/uploads/2024/06/1-3-e1719495311222-300x218.png.webp" alt="Amla" className="rounded-lg shadow-md md:w-1/6" />
                
                
                
           </div>
        </div>
        
    )
}