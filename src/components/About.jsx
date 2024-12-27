import React from "react";
import abtimg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 " id="about">
      <motion.h1
        className="my-20 text-center sm:text-6xl  text-4xl"
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
            <p className="my-6 py-6  px-6">{ABOUT_TEXT}</p>
          </div>
        <button className="bg-white rounded-full px-6 text-black flex py-4 font-bold mx-4">
          <a href="Resume.pdf">View Resume</a>
          <ArrowUpRightIcon  className="ml-2 size-5"/>
        </button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
