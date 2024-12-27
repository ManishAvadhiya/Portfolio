import { motion } from 'framer-motion';
import React from 'react';
import { BsStripe } from 'react-icons/bs';
import { DiRedis } from 'react-icons/di';
import { RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiCplusplus, SiExpress, SiMongodb, SiRedux, SiShadcnui } from 'react-icons/si';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "../components/ui/tooltip";
const Technology = () => {
  const icons = [
    { component: <RiReactjsFill className="text-7xl text-cyan-400" />, duration: 2, name: "React" },
    { component: <RiNodejsFill className="text-7xl text-green-500" />, duration: 2.5, name: "Node.js" },
    { component: <DiRedis className="text-7xl text-red-700" />, duration: 3, name: "Redis" },
    { component: <SiMongodb className="text-7xl text-green-500" />, duration: 3.5, name: "MongoDB" },
    { component: <SiExpress className="text-7xl" />, duration: 4, name: "Express.js" },
    { component: <BsStripe className="text-7xl text-[#7799e5] " />, duration: 4.5, name: "Stripe" },
    { component: <RiTailwindCssFill className="text-7xl text-cyan-400" />, duration: 5, name: "Tailwind CSS" },
    { component: <SiShadcnui className="text-7xl text-cyan-400" />, duration: 5.5, name: "ShadCN UI" },
    {component:<SiCplusplus className='text-7xl ' />,duration: 5 ,name:"C++"},
    {component:<SiRedux className='text-7xl text-purple-600' />,duration: 5 ,name:"Redux Toolkit"},

  ];

  return (
    <div className="border-b border-neutral-800 pb-24" id='technology'>
      <motion.h1
        className="my-20 text-center sm:text-6xl  text-4xl"
        transition={{duration:0.5}} 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
       

      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 items-center">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-neutral-800 p-4 border-4"
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }}
            transition={{ duration: icon.duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          >
            
            <TooltipProvider>
      <Tooltip>
        <TooltipTrigger >
        {icon.component}
        </TooltipTrigger>
        <TooltipContent>
          <p className='font-mono font-bold'>{icon.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
