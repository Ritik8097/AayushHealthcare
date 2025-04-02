import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity:0.7,y: -50, transition: { duration: 0.4, ease: "easeInOut" } },
  };    
const PageTransition = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity:0.7}} // Start blurred
    animate={{ opacity: 1}} // Remove blur smoothly
    exit={{ opacity:0.8}} // Blur when exiting
    transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
    style={{ position: "absolute", width: "100%", height: "100vh" }} 
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
