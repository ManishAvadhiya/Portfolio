import React from "react";
import { motion } from "framer-motion";
import logo from "/Mlogo.svg";

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative w-48 h-48"
      >
        {/* Front Image */}
        <motion.img
          src={logo} // Replace with your logo path
          alt="Logo"
          className="absolute inset-0 w-full h-full"
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
        {/* Back Image (or duplicate of the front for a flipping effect) */}
        <motion.img
          src={logo} // Replace with an alternate version or the same image
          alt="Logo Back"
          className="absolute inset-0 w-full h-full"
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;