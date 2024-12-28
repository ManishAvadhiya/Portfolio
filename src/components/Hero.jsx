import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/PortfolioProfile.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:items-start">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="lg:text-8xl text-6xl font-bold tracking-tight  text-white"
            >
              Hello, I'm Manish
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mt-4"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              MERN stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="my-2 text-md sm:text-xl text-neutral-400 max-w-xl font-light tracking-tight py-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <motion.div
            className="flex justify-center "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
              
            }}
          >
            <img src={profilepic} alt="" className="rounded-2xl"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
