import React from 'react';


function HomeBlog() {
  return (
    <div className="min-h-screen  bg-[#004037] text-white blocks">
      {/* Header */}
      {/* <header className="p-4 md:p-6 flex justify-between items-center">
        <div className="text-xl font-bold text-center">oui will</div>
        <button className="p-2">
        
        </button>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Article 1 */}
        <h1 className=' text-center text-[25px] md:text-[40px] pb-[25px] md:pb-[60px]'>Blogs</h1>
        <article className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-[#023932] p-[25px] rounded-xl">
            <div className="order-2 md:order-1">
              <div className="text-gray-400 mb-4">01. 03. 2025</div>
              <h2 className="text-[25px] md:text-4xl text-white font-bold mb-6">
              Nutraceuticals vs. Traditional Supplements: What’s the Difference?
              </h2>
               <a 
                href="/nutraceuticals-vs-traditional" 
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                
                Read Post
              </a> 
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248" 
                alt="Green moss on rocks" 
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </article>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Article 2 */}
        <article className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-[#023932] p-[25px] rounded-xl">
            <div className="order-2 md:order-1">
              <div className="text-gray-400 mb-4">01. 03. 2025</div>
              <h2 className="text-[25px] md:text-4xl text-white font-bold mb-6">
              Top 7 Ayurvedic Ingredients to Improve Focus and Mental Clarity.

              </h2>
             <a 
                href="/top-7-ayurvedic-ingredients" 
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
               
                Read Post
              </a> 
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490" 
                alt="Formula 1 team member" 
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </article>
      </main>

      {/* Chat Button - Fixed at bottom right */}
      {/* <div className="fixed bottom-4 right-4 flex items-center bg-white text-black rounded-full px-4 py-2 shadow-lg">
        <span className="mr-2">Chat with us</span>
        <div className="relative">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">1</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HomeBlog;
