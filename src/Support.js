import React from 'react';
import Header from './Header';
import NewFooter from './NewFooter';

function Support() {
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

        <div className="w-full flex flex-col md:flex-row md:mt-[105px] mt-[85px] mb-[3rem]">
            <div className=' w-full md:w-1/2 '>
                <img src='https://www.forecastadvtg.com/wp-content/uploads/2020/08/contact-img.jpg?id=5280'/>
                </div>
                <div className='  w-full md:w-1/2 p-6'>
                <h2 className="text-2xl font-semibold text-gray-700">Contact Here</h2>

<form onSubmit={onSubmit} className="flex flex-col items-center justify-center h-full pt-10 md:pl-10 md:pr-10 bg-white">
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
        Contact Us
    </button>
</form>
{result && (
    <div className="text-center text-gray-600">
        <span>{result}</span>
    </div>
)}
                </div>
        </div>






        
        
       
        <NewFooter/>
        </>
    );
}

export default Support;
