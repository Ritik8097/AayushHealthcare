import React from "react";
import { motion } from "framer-motion";

const Asection2 = () => {
  return (
     <div className="w-full flex justify-center" style={{ background: "linear-gradient(to bottom, #f9f9f9 50%, white 50%)" }}>
      {/* Image Background Container with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 320 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Fade in and move to position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        className="w-[368px] h-[196px] md:w-[80vw] md:h-[29.5vw] max-w-[80vw] rounded-[48px] overflow-hidden mt-[40px] mx-auto"
      >
        {/* Image inside the container */}
        <img
          src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/indian-man-concentrating-raising-hands-outdoors-with-blue-sky-green-tree-branches.jpg?v=1741669548"
          alt="Be Relax Spa Philadelphia"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Asection2;
