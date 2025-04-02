import React, { useState } from 'react';
import BlurText from './BlurText';

export default function NewsletterSignup() {
 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2c0d5343-1be2-4839-a5f8-7dfe15886a76");

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
    <div className="bg-[#f9f3e8] blocks"> 
      <div className="max-w-screen-md mx-auto py-20 px-4 text-center bg-[#f9f3e8] ">
        <section className="mb-10">
        <h3
  className="text-[25px] md:text-[60px] text-center font-bold mb-6 leading-[1]"
  style={{ fontFamily: "Montserrat, sans-serif" }}
>
  <BlurText
    text="Stay Connected with Aayush Wellness"
    animateOn="view"
    revealDirection="center"
    className="text-[25px] md:text-[60px] font-bold leading-[1] text-[#004037]"
  />
</h3>

          <p className="text-lg text-gray-600 mb-6">
            Subscribe to our newsletter and be the first to know about our
            latest health and wellness products, expert tips, and exclusive
            offers. Join our community and embark on a journey towards a
            healthier, happier you.
          </p>
        </section>
        <section>
          <form
            onSubmit={onSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              name="email"
              id="email"
              required
              className=" md:w-80 px-4 py-2 border border-[#004037] rounded-md text-gray-800"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-[#12c167] text-[#004037] px-4 py-2 rounded-md  transition-colors duration-300 font-bold"
            >
              SUBSCRIBE
            </button>
          </form>
        </section>
        {result && (
          <div className="mt-4 text-lg text-gray-600">
            Thanks for your response!
          </div>
        )}
      </div>
    </div>
  );
}


