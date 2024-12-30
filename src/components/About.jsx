import React from "react";

import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 " id="about">
      <motion.h1
        className="sm:my-20 my-4 text-center sm:text-6xl  text-4xl"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        >
        About Me
      </motion.h1>
      <div className="flex ">
        
        <motion.div
          className="w-full lg:w-3/4 "
          initial={{ x: +20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center ">
            <p className="text-neutral-400 sm:text-xl my-6 py-6  px-6 text-md">{ABOUT_TEXT}</p>
          </div>
        <button className="bg-white rounded-full sm:px-6 px-4 text-black flex justify-center items-center sm:py-4 py-2  font-bold sm:mx-4 mx-2">
          <a href="Resume.pdf">View Resume</a>
          <ArrowUpRightIcon  className="ml-2 sm:size-5 size-4"/>
        </button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
