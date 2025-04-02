import React from 'react';
import Header from './Header';
import NewFooter from './NewFooter';

function Career() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a880bc0c-8877-4f1c-9d4a-bb1574c365ed");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
        <Header/>
        <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full  md:block hidden" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/career_5.jpg?v=1723994079" alt="Slide 1" />
              <img className='w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/career_mobile_size_4.jpg?v=1724405336' />
            </div>
           
            
          </div>
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg max-w-3xl mx-auto min-h-[480px] p-8 mt-11 mb-11">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Career Inquiry</h2>
            <form onSubmit={onSubmit} className="flex flex-col items-center justify-center h-full p-10 bg-white">
                <div className="w-full mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                            
                <div className="w-full mb-4">
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">Phone No</label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        required
                        className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                            
                <div className="w-full mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                  style={{background:'#d1a272'}}  className=" text-white py-2 px-6 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
                >
                    Submit Form
                </button>
            </form>
            {result && (
                <div className="text-center text-gray-600 mt-4">
                    <span>{result}</span>
                </div>
            )}
        </div>
        <NewFooter/>
        </>
    );
}

export default Career;
