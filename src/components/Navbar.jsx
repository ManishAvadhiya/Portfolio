import React from "react";
import logo from "/Mlogo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import FlipLink from "./FlipLink";
import AnimatedLogo from "./AnimatedLogo";
const DURATION = 0.25
const STAGGER = 0.005
const Navbar = () => {
  return (
    <nav className=" mb-20 py-6 flex items-center justify-between">
      <motion.section
        className="  flex-shrink-0 items-center overflow-hidden h-10  "
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: "-100%",
          },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * 1,
        }}
        
      >
        <img src={logo} alt="logo" className="mx-2 w-10 " />
        {/* <img src={logo} alt="logo" className="mx-2 w-10 hover:-translate-y-full transition-transform"/> */}
      </motion.section>

     <div className="grid place-content-center gap-2 py-8 px-8  text-sm">
     <FlipLink  href="mailto:avadhiyamanish@gmail.com" >
              avadhiyamanish@gmail.com
      </FlipLink>
     </div>
          
    </nav>
  );
};

export default Navbar;
