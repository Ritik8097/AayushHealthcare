
import React from "react";
import { motion } from "framer-motion";

const Asection1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 280 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center px-4 pt-40 text-center max-w-auto mx-auto w-full  bg-[#f9f9f9]"
    >
      {/* Title: "Our Story" */}
      <h1 
        className="text-[56px] md:text-[75px] leading-[100%] text-[#13233b] mb-8" 
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Our Story
      </h1>

      {/* Story Content */}
      <div className="text-[28px] md:text-[20px] leading-[155%] text-[#3a4458] max-w-[800px]">
        <p className="font-[28px]">
          <span className=" text-[30px]  text-black">Bringing the Future of Wellness to You</span>
          <br />
          <span className="font-semibold pt-5"> 
          At Aayush Wellness, we believe that health is not just about curing
          illness—it’s about preventing it, enhancing it, and making wellness a
          way of life.
          </span>
        </p>
        <br />
        <p className="font-semibold">
          With a deep-rooted commitment to science-backed innovation and natural
          health solutions, we are redefining the wellness
          experience—integrating nutraceuticals, personalized healthcare,
          preventive wellness, and digital health solutions to create a seamless
          journey toward better living.
        </p>
      </div>
    </motion.div>
  );
};

export default Asection1;

